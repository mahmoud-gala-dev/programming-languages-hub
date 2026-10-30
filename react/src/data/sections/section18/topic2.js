// src/data/sections/section18/topic2.js

export const topic2 = {
  id: "18.2",
  title: "تقليل عمليات التصيير (Re-render Optimization & Memoization)",
  description: "الدليل الشامل للتحكم في دورات حياة المكونات، وتجنب إعادة التصيير الزائدة عن الحاجة عبر React.memo و useMemo و useCallback، وإعادة هيكلة المكونات باستخدام أنماط Push State Down و Lift Content Up.",
  subtopics: [
    {
      id: "18.2.a",
      title: "تجنب إعادة التصيير غير الضرورية",
      englishTerm: "Avoiding Unnecessary Re-renders (أفويْدينغ أنيسيساري ري-ريندرز)",
      description: "إعادة التصيير غير الضرورية (Wasted Re-render) تحدث عندما تُعيد React استدعاء دالة المكوّن وبناء شجرة الـ Virtual DOM الخاصة به، ليكتشف محرك المقارنة (Diffing Engine) في النهاية أن الناتج مطابق 100% للرسم السابق ولا يتطلب أي تعديل في الـ DOM الحقيقي. تكرار هذه العملية يستهلك قدرات المعالج ويثقل التطبيق.",
      analogy: "يشبه طاهياً يُعيد طهي نفس الوجبة بالضبط وتقديمها للزبون كلما رن جرس الهاتف في المطعم، مع أن الزبون لم يطلب أي طبق جديد!",
      whyItMatters: "على الرغم من أن الـ Virtual DOM سريع، إلا أن استدعاء مئات الدوال الفرعية وتكرار الحسابات عند كل ضغطة زر في تطبيق ضخم يُسبب انخفاض معدل الإطارات (Drop Frames) وتباطؤاً ملحوظاً يشعر به المستخدم.",
      syntax: "// المبدأ الأساسي: افصل الحالة المتغيرة عن الأجزاء الثابتة\nconst MemoizedComponent = React.memo(MyComponent);",
      simpleExample: `// استيراد React مع خطاف الحالة
import React, { useState } from 'react';

// مكون فرعي ثقيل لا يعتمد على أي خصائص خارجية
function StaticBanner() {
  // طباعة رسالة لملاحظة حدوث إعادة التصيير غير المفيدة
  console.log('تصيير اليافطة الثابتة (قد يكون غير ضروري إذا لم يتغير شيء!)');
  return <div className="p-3 bg-indigo-900 text-white rounded">أهلاً بك في منصتنا التعليمية</div>;
}

// المكون الأب الذي يحتوي على حالة متغيرة باستمرار
export default function CounterWithBanner() {
  // عداد يتغير عند النقر
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 space-y-3 bg-slate-900 text-slate-100 rounded-lg">
      <button 
        onClick={() => setCount(c => c + 1)}
        className="px-3 py-1 bg-indigo-600 rounded text-sm font-semibold"
      >
        زيادة العداد: {count}
      </button>
      {/* هذا المكون سيعيد التصيير عند كل نقرة رغم عدم اعتماده على count */}
      <StaticBanner />
    </div>
  );
}`,
      advancedExample: [
        "// حل جذري لإيقاف إعادة التصيير غير الضرورية عبر الفصل الهيكلي وتمرير المكون كـ children",
        "import React, { useState } from 'react';",
        "",
        "// مكوّن ثقيل يمثل واجهة معقدة أو رسماً بيانياً",
        "export function HeavyDashboardChart() {",
        "  console.log('⚡ تصيير الرسم البياني الثقيل (يجب ألا يحدث إلا مرة واحدة)');",
        "  return (",
        "    <div className='p-6 bg-slate-800 rounded-xl border border-slate-700 text-slate-200'>",
        "      <h4 className='font-bold text-sky-400'>الرسم البياني التحليلي</h4>",
        "      <p className='text-sm text-slate-400'>يحتوي على آلاف نقاط البيانات المعقدة.</p>",
        "    </div>",
        "  );",
        "}",
        "",
        "// حاوية تتحكم في الحالة المحلية السريعة (مثل فتح وإغلاق قائمة) دون إجبار الأبناء على إعادة التصيير",
        "export function InteractiveWrapper({ children }) {",
        "  const [isOpen, setIsOpen] = useState(false);",
        "",
        "  return (",
        "    <div className='p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-4'>",
        "      <button",
        "        onClick={() => setIsOpen(v => !v)}",
        "        className='px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-bold'",
        "      >",
        "        {isOpen ? 'إخفاء الإعدادات' : 'إظهار الإعدادات الإضافية'}",
        "      </button>",
        "      {isOpen && <p className='text-emerald-400 text-sm'>تم فتح لوحة الإعدادات بنجاح!</p>}",
        "      ",
        "      {/* هنا السحر: children تم إنشاؤه مسبقاً في الأب ولم تتغير مرجعيته، فلن يُعاد تصييره! */}",
        "      {children}",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "عند النقر على زر التبديل (Toggle)، يتم تحديث الحالة في InteractiveWrapper فقط، بينما لا يُعاد تصيير HeavyDashboardChart نهائياً لأن مرجع الـ children لم يتغير.",
      commonMistakes: "اللجوء الفوري والمفرط إلى React.memo وتغليف كل مكون في المشروع بدون حاجة، مما يضيف تكلفة مقارنة الخصائص (Props comparison overhead) في كل دورة دون فائدة.",
      bestPractices: "قبل استخدام تقنيات الـ Memoization، جرب إعادة ترتيب هيكل المكونات (Component Composition) مثل نمط 'Lift Content Up' ونقل الحالة للأسفل، فهي تحل المشكلة بدون أي تعقيد برمجي.",
      visualDiagram: "Parent State Changes:\nNormal Flow:   Parent Re-renders ──► Child A (Wasted) ──► Child B (Wasted)\nWith Children: Parent Re-renders ──► Children Prop Reference Unchanged (Child A & B Skipped!)"
    },
    {
      id: "18.2.b",
      title: "الاستخدام الصحيح لـ React.memo",
      englishTerm: "Proper Usage of React.memo (ري-آكت دوت ميمو)",
      description: "دالة عالية الرتبة (Higher-Order Component) تُغلف مكوّن React الوظيفي ليقوم بمقارنة سطحية (Shallow Comparison) لخصائص المكوّن (Props) السابقة مع الجديدة؛ فإذا كانت جميع الخصائص متطابقة تماماً، تتجاوز React إعادة تصيير هذا المكوّن وتسترجع آخر نتيجة محفوظة.",
      analogy: "يشبه موظف الاستقبال الذكي الذي يقارن هوية الزائر اليوم بهويته بالأمس؛ فإذا كانت نفس البيانات تماماً، يسمح له بالدخول فوراً دون إجباره على ملء استمارة تسجيل جديدة من الصفر.",
      whyItMatters: "يعد الأداة الأساسية لحماية المكونات المتوسطة والثقيلة في شجرة المكونات من إعادة التصيير العشوائي الناتج عن تحديثات المكونات العليا.",
      syntax: "const MemoizedComp = React.memo(MyComponent, [arePropsEqual]);",
      simpleExample: `// استيراد memo من React
import React, { memo, useState } from 'react';

// مكون يتم حفظه مؤقتاً بواسطة memo
const UserCard = memo(function UserCard({ name, role }) {
  // طباعة توضيحية لمعرفة متى يُنفذ المكون
  console.log('تصيير كارت المستخدم:', name);
  return (
    <div className="p-3 bg-slate-800 text-white rounded border border-slate-700">
      <p className="font-bold">{name}</p>
      <p className="text-xs text-slate-400">{role}</p>
    </div>
  );
});

// المكون الأب
export default function AppDemo() {
  const [ticker, setTicker] = useState(0);

  return (
    <div className="p-4 space-y-3">
      <button 
        onClick={() => setTicker(t => t + 1)}
        className="px-3 py-1 bg-amber-600 text-white rounded text-sm"
      >
        تحديث عداد الوقت: {ticker}
      </button>
      {/* خصائص name و role ثابتة، فلن يُعاد تصيير UserCard عند تحديث ticker */}
      <UserCard name="أحمد السعيد" role="مهندس واجهات أمريكية" />
    </div>
  );
}`,
      advancedExample: [
        "// استخدام React.memo مع دالة مقارنة مخصصة (Custom arePropsEqual)",
        "import React, { memo } from 'react';",
        "",
        "// دالة مقارنة مخصصة تقارن فقط الحقول الهامة وتتجاهل التغيرات الطفيفة أو الحقول غير المؤثرة",
        "function areProductPropsEqual(prevProps, nextProps) {",
        "  // مقارنة المعرف",
        "  const isSameId = prevProps.product.id === nextProps.product.id;",
        "  // مقارنة السعر والحالة فقط",
        "  const isSamePrice = prevProps.product.price === nextProps.product.price;",
        "  const isSameStock = prevProps.product.inStock === nextProps.product.inStock;",
        "  ",
        "  // إذا كانت هذه الشروط متحققة نعتبر الـ Props متطابقة ونلغي إعادة التصيير (إرجاع true يعني تخطي)",
        "  return isSameId && isSamePrice && isSameStock;",
        "}",
        "",
        "// المكون المحمي بدالة المقارنة المخصصة",
        "export const OptimizedProductRow = memo(function OptimizedProductRow({ product, onSelect }) {",
        "  console.log('🛍️ تصيير صف المنتج:', product.id);",
        "  return (",
        "    <div className='flex items-center justify-between p-3 bg-slate-900 border-b border-slate-800 text-slate-100'>",
        "      <div>",
        "        <span className='font-semibold text-white'>{product.title}</span>",
        "        <span className='mr-2 text-xs text-emerald-400'>{product.price} ر.س</span>",
        "      </div>",
        "      <button",
        "        onClick={() => onSelect(product.id)}",
        "        className='px-3 py-1 bg-sky-600 hover:bg-sky-500 rounded text-xs font-bold'",
        "      >",
        "        اختيار",
        "      </button>",
        "    </div>",
        "  );",
        "}, areProductPropsEqual);"
      ].join('\n'),
      output: "لن يُعاد تصيير المكون إلا إذا تغير id أو price أو inStock في كائن product، متجاهلاً أي خصائص أخرى تتغير في الخلفية.",
      commonMistakes: "تمرير دوال عادية أو كائنات جديدة مضمنة (Inline Objects/Functions) إلى مكوّن مغلف بـ memo مثل: onClick={() => doSomething()}، لأن الدالة الجديدة تمتلك مرجعاً مختلفاً في كل مرة مما يُبطل مفعول memo بالكامل!",
      bestPractices: "استخدم React.memo عندما يكون المكون: 1) يُعاد تصييره بكثرة بنفس الخصائص، 2) يحتوي على شجرة أبناء معقدة أو حسابات بصرية، وتأكد دائماً من تثبيت مراجع الدوال الممررة له عبر useCallback.",
      visualDiagram: "Props Check in React.memo:\nprevProps === nextProps ?\n  ├── YES (Shallow match) ──► [SKIP Render] (Reuse previous DOM)\n  └── NO  (Props changed) ──► [RUN Render] (Compute new Virtual DOM)"
    },
    {
      id: "18.2.c",
      title: "متى نستخدم useMemo",
      englishTerm: "When to Use useMemo Hook (يوز ميمو)",
      description: "خطاف مخصص لتخزين ناتج عملية حسابية معقدة ومكلفة برمجياً في الذاكرة (Memoization). لا يُعيد الخطاف احتساب القيمة إلا إذا تغيرت إحدى القيم المحددة في مصفوفة الاعتماديات (Dependencies Array)، مما يحمي المسار الرئيسي من التكرار غير المفيد.",
      analogy: "يشبه حفظ جدول الضرب أو نتائج العمليات الحسابية الطويلة على ورقة ملاحظات؛ فكلما سُئلت عن ضرب 789 في 452، تقرأ الناتج فوراً من الورقة بدلاً من استخدام الآلة الحاسبة وإجراء الضرب من الصفر في كل ثانية.",
      whyItMatters: "يحول دون تجمد الشاشة وبطء الاستجابة أثناء عمليات تصفية (Filtering) وفرز (Sorting) وتحويل مئات أو آلاف العناصر في القوائم.",
      syntax: "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);",
      simpleExample: `// استيراد خطاف الحالة وخطاف useMemo
import React, { useState, useMemo } from 'react';

export default function ExpensiveMathApp() {
  const [number, setNumber] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  // دالة تحاكي عملية حسابية ثقيلة
  function calculateFactorial(n) {
    console.log('حساب مضروب العدد...');
    let res = 1;
    for (let i = 1; i <= n; i++) res *= i;
    return res;
  }

  // استخدام useMemo لتجنب تكرار الحساب عند تغيير السمة فقط
  const factorial = useMemo(() => {
    return calculateFactorial(number);
  }, [number]); // لن يُعاد الحساب إلا إذا تغير number

  return (
    <div className={darkTheme ? "bg-black text-white p-4" : "bg-white text-black p-4"}>
      <button onClick={() => setDarkTheme(t => !t)} className="border p-1 text-xs">تبديل السمة</button>
      <input 
        type="number" 
        value={number} 
        onChange={e => setNumber(Number(e.target.value))} 
        className="border mx-2 p-1"
      />
      <p>المضروب: {factorial}</p>
    </div>
  );
}`,
      advancedExample: [
        "// استخدام useMemo لتصفية وترتيب قائمة منتجات ضخمة وضمان استقرار المرجع الممرر للأبناء",
        "import React, { useState, useMemo } from 'react';",
        "",
        "export function AdvancedCatalogFilter({ products }) {",
        "  const [searchTerm, setSearchTerm] = useState('');",
        "  const [selectedCategory, setSelectedCategory] = useState('all');",
        "  const [sortBy, setSortBy] = useState('price-asc');",
        "",
        "  // استخدام useMemo لحساب القائمة المفلترة والمرتبة بدقة متناهية",
        "  const processedProducts = useMemo(() => {",
        "    console.time('filter-and-sort');",
        "    ",
        "    // الخطوة 1: تصفية المنتجات حسب الكلمة المفتاحية والتصنيف",
        "    const filtered = products.filter(item => {",
        "      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());",
        "      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;",
        "      return matchesSearch && matchesCategory;",
        "    });",
        "",
        "    // الخطوة 2: ترتيب العناصر المصفاة",
        "    const sorted = [...filtered].sort((a, b) => {",
        "      if (sortBy === 'price-asc') return a.price - b.price;",
        "      if (sortBy === 'price-desc') return b.price - a.price;",
        "      return a.name.localeCompare(b.name);",
        "    });",
        "",
        "    console.timeEnd('filter-and-sort');",
        "    return sorted;",
        "  }, [products, searchTerm, selectedCategory, sortBy]); // الاعتماديات الصريحة",
        "",
        "  return (",
        "    <div className='p-6 bg-slate-900 text-white rounded-xl space-y-4'>",
        "      <div className='flex gap-2 flex-wrap'>",
        "        <input",
        "          type='text'",
        "          placeholder='ابحث عن منتج...'",
        "          value={searchTerm}",
        "          onChange={e => setSearchTerm(e.target.value)}",
        "          className='bg-slate-800 border border-slate-700 px-3 py-1 rounded text-sm'",
        "        />",
        "        <select ",
        "          value={selectedCategory} ",
        "          onChange={e => setSelectedCategory(e.target.value)}",
        "          className='bg-slate-800 border border-slate-700 px-3 py-1 rounded text-sm'",
        "        >",
        "          <option value='all'>جميع التصنيفات</option>",
        "          <option value='electronics'>إلكترونيات</option>",
        "          <option value='clothing'>أزياء</option>",
        "        </select>",
        "      </div>",
        "      <p className='text-xs text-sky-400'>النتائج المعروضة: {processedProducts.length} منتج</p>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "لا يتم إعادة فرز أو تصفية المنتجات عند إعادة تصيير المكون لسبب خارجي (مثل رندر الأب)، بل فقط عند تغيير نصوص البحث أو شروط الفلترة.",
      commonMistakes: "استخدام useMemo في العمليات الحسابية البسيطة والبديهية (مثل جمع رقمين أو اقتطاع نص قصير)، لأن تكلفة إنشاء واستدعاء useMemo ومقارنة مصفوفة الاعتماديات في الذاكرة تكون أكبر من تكلفة العملية الحسابية نفسها!",
      bestPractices: "استخدم useMemo في حالتين رئيسيتين فقط: 1) إذا كانت العملية الحسابية تستهلك أكثر من 1ms (يمكنك قياسها بـ console.time)، 2) إذا كنت تريد تثبيت مرجع كائن أو مصفوفة ليمر كـ Prop لمكوّن آخر محمي بـ React.memo.",
      visualDiagram: "useMemo Execution Decision:\nDependencies Changed?\n  ├── NO  ──► Return Cached Value (0 CPU Time)\n  └── YES ──► Execute Function ──► Cache New Result ──► Return"
    },
    {
      id: "18.2.d",
      title: "متى نستخدم useCallback",
      englishTerm: "When to Use useCallback Hook (يوز كول باك)",
      description: "خطاف مخصص لحفظ مرجع الدالة (Function Reference Memoization) عبر دورات التصيير المتتالية. في JavaScript العادية، كل دالة تُعرّف داخل جسم المكوّن تُعتبر كائناً جديداً في الذاكرة بمؤشر مختلف في كل تصيير؛ وظيفة useCallback هي إرجاع نفس مؤشر الذاكرة للدالة طالما لم تتغير مصفوفة الاعتماديات.",
      analogy: "يشبه الاحتفاظ بنفس رقم الهاتف الثابت لشركتك بدلاً من تغيير خط الهاتف وطباعة بطاقات عمل جديدة وتوزيعها على جميع العملاء كل صباح.",
      whyItMatters: "ضروري للغاية لنجاح عمل React.memo والمكونات الفرعية الحساسة؛ فبدونه تتغير مرجعية دوال الـ Event Handlers في كل تصيير، مما يبطل مفعول أي حماية للمكونات الفرعية.",
      syntax: "const memoizedCallback = useCallback((...args) => {\n  doSomething(a, b);\n}, [a, b]);",
      simpleExample: `// استيراد useState و useCallback و memo
import React, { useState, useCallback, memo } from 'react';

// زر فرعي مغلف بـ memo لمنع إعادة التصيير
const DeleteButton = memo(function DeleteButton({ onDelete }) {
  console.log('تصيير زر الحذف الفرعي!');
  return (
    <button onClick={onDelete} className="px-2 py-1 bg-rose-600 text-white rounded text-xs">
      حذف العنصر
    </button>
  );
});

export default function ItemManager() {
  const [count, setCount] = useState(0);

  // استخدام useCallback لضمان ثبات مرجع الدالة الممررة
  const handleDelete = useCallback(() => {
    console.log('تم طلب الحذف');
  }, []); // مصفوفة فارغة تعني ثبات المرجع دائماً طوال عمر المكون

  return (
    <div className="p-4 space-y-2">
      <button onClick={() => setCount(c => c + 1)} className="border p-1 text-xs">
        عداد منفصل: {count}
      </button>
      {/* بفضل useCallback لن يُعاد تصيير DeleteButton عند تغيير العداد */}
      <DeleteButton onDelete={handleDelete} />
    </div>
  );
}`,
      advancedExample: [
        "// استخدام نمط Functional State Update مع useCallback للتخلص من الاعتمادية على الحالة",
        "import React, { useState, useCallback } from 'react';",
        "",
        "export function OptimizedTodoController() {",
        "  const [todos, setTodos] = useState([",
        "    { id: 1, text: 'مراجعة خريطة الأداء', done: false },",
        "    { id: 2, text: 'فحص مراجع الدوال', done: true }",
        "  ]);",
        "",
        "  // الطريقة الاحترافية: عدم وضع [todos] في الاعتماديات واستخدام دالة التحديث prev",
        "  // هذا يضمن بقاء مرجع الدالة ثابتاً 100% طوال عمر التطبيق!",
        "  const handleToggle = useCallback((id) => {",
        "    setTodos(prevTodos => ",
        "      prevTodos.map(todo => ",
        "        todo.id === id ? { ...todo, done: !todo.done } : todo",
        "      )",
        "    );",
        "  }, []); // الاعتماديات فارغة تماماً!",
        "",
        "  const handleRemove = useCallback((id) => {",
        "    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));",
        "  }, []); // مرجع مستقر لا يتغير أبداً",
        "",
        "  return (",
        "    <div className='p-4 bg-slate-900 text-white rounded-xl'>",
        "      <h4 className='font-bold mb-2'>قائمة المهام المحسنة</h4>",
        "      <ul className='space-y-1 text-sm'>",
        "        {todos.map(t => (",
        "          <li key={t.id} className='flex items-center justify-between bg-slate-800 p-2 rounded'>",
        "            <span className={t.done ? 'line-through text-slate-500' : ''}>{t.text}</span>",
        "            <div className='flex gap-1'>",
        "              <button onClick={() => handleToggle(t.id)} className='text-xs px-2 py-0.5 bg-sky-600 rounded'>تبديل</button>",
        "              <button onClick={() => handleRemove(t.id)} className='text-xs px-2 py-0.5 bg-rose-600 rounded'>حذف</button>",
        "            </div>",
        "          </li>",
        "        ))}",
        "      </ul>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "الدوال handleToggle و handleRemove تحتفظ بنفس المرجع في الذاكرة دون إعادة إنشائها أبداً، حتى عند إضافة مهام جديدة وتغيير todos.",
      commonMistakes: "كتابة useCallback لدالة عادية لا تُمرر كـ Prop لأي مكوّن فرعي مغلف بـ memo، أو تُمرر لعناصر DOM أصلية مثل <button onClick={fn}>؛ فهذا يضيف استهلاكاً غير مبرر للذاكرة بدون أي فائدة أداء لأن أزرار الـ HTML لا تستفيد من الـ memoization.",
      bestPractices: "استخدم نمط التحديث الوظيفي setState(prev => ...) داخل useCallback لتفريغ مصفوفة الاعتماديات وضمان استقرار المرجع بصورة دائمة.",
      visualDiagram: "Without useCallback: Every Render ──► Creates New Function Reference (0x01 != 0x02)\nWith useCallback:    Every Render ──► Returns Same Cached Reference (0x01 == 0x01)"
    },
    {
      id: "18.2.e",
      title: "تحسين هيكل المكونات لتقليل التصيير",
      englishTerm: "Component Architecture Optimization (كومبوننت أركيتكتشر)",
      description: "إعادة التفكير في توزيع المسؤوليات وهيكلة شجرة المكونات بحيث يتم عزل الأجزاء التفاعلية السريعة (High-frequency state) عن الأجزاء الساكنة أو البطيئة، مما يجعل React تُحدّث مساحات ضيقة ومحددة فقط من الشجرة دون الحاجة إلى أدوات التخزين المؤقت اليدوية.",
      analogy: "يشبه عزل غرفة المحركات في السفينة عن صالون الركاب؛ فإذا اهتز المحرك واشتعلت فيه الحرارة، يبقى الركاب في راحة تامة دون أن يشعروا بالاهتزاز.",
      whyItMatters: "أفضل كود للأداء هو الكود الذي لا يحتاج إلى أدوات معقدة مثل useMemo و useCallback؛ التصميم المعماري النظيف يمنحك أداءً فائقاً تلقائياً بدون تكلفة صيانة إضافية.",
      syntax: "// تقسيم المكون الكبير إلى مكونين: واحد للحالة وآخر للعرض المستقر",
      simpleExample: `// استيراد useState
import React, { useState } from 'react';

// مكوّن الإدخال معزول ومسؤول عن حالته السريعة فقط
function FastInput() {
  const [text, setText] = useState('');
  return (
    <input 
      type="text" 
      value={text} 
      onChange={e => setText(e.target.value)} 
      placeholder="اكتب هنا بسرعة..."
      className="border p-2 rounded text-black"
    />
  );
}

// المكون الأب يحتوي على عناصر ضخمة ومكون الإدخال
export default function CleanArchitecturePage() {
  return (
    <div className="p-4 space-y-4 bg-slate-900 text-white rounded-lg">
      <h3 className="font-bold text-lg">صفحة مقسمة معمارياً</h3>
      {/* عند الكتابة داخل FastInput، سيعيد FastInput فقط التصيير دون لمس باقي الصفحة */}
      <FastInput />
      <div className="p-4 bg-slate-800 rounded">
        محتوى الصفحة الثابت أو الثقيل (لن يتأثر بالكتابة إطلاقاً!)
      </div>
    </div>
  );
}`,
      advancedExample: [
        "// نمط عزل Context إلى عدة سياقات فرعية لمنع إعادة تصيير المشتركين غير المعنيين",
        "import React, { createContext, useContext, useState } from 'react';",
        "",
        "// تقسيم الـ Context إلى سياقين: أحدهما للبيانات والآخر لدوال التحديث",
        "const UserDataContext = createContext(null);",
        "const UserActionsContext = createContext(null);",
        "",
        "export function UserProvider({ children }) {",
        "  const [user, setUser] = useState({ name: 'سارة', points: 150 });",
        "",
        "  // دالة تحديث ثابتة",
        "  const addPoints = () => setUser(u => ({ ...u, points: u.points + 10 }));",
        "",
        "  return (",
        "    <UserDataContext.Provider value={user}>",
        "      <UserActionsContext.Provider value={addPoints}>",
        "        {children}",
        "      </UserActionsContext.Provider>",
        "    </UserDataContext.Provider>",
        "  );",
        "}",
        "",
        "// هذا الزر يحتاج فقط إلى دالة الإجراء ولا يهتم بقيمة النقاط الحالية",
        "export function AwardPointsButton() {",
        "  const addPoints = useContext(UserActionsContext);",
        "  console.log('🔘 تصيير زر إضافة النقاط (لن يُعاد تصييره عند تغير النقاط!)');",
        "  return (",
        "    <button onClick={addPoints} className='px-3 py-1 bg-amber-600 rounded text-xs font-bold text-white'>",
        "      +10 نقاط",
        "    </button>",
        "  );",
        "}"
      ].join('\n'),
      output: "المكون AwardPointsButton يشترك فقط في UserActionsContext، لذلك عندما تتغير النقاط في UserDataContext لن يُعاد تصيير الزر إطلاقاً!",
      commonMistakes: "وضع كل حالات التطبيق (المعلومات العامة، النصوص، الإعدادات، والبيانات المؤقتة) في سياق Context واحد ضخم؛ مما يجبر كل مكون في التطبيق على إعادة التصيير عند تعديل أي حقل بسيط.",
      bestPractices: "افصل السياقات حسب معدل التغير (Change Frequency)؛ ضع البيانات سريعة التغير في Context منفصل عن البيانات البطيئة أو الدوال الثابتة.",
      visualDiagram: "Monolithic Context:   [Context: State + Actions] ──► Updates State ──► ALL Subscribers Re-render!\nSplit Context Architecture:\n  [Context A: State]   ──► Updates ──► Only Display Consumers Re-render\n  [Context B: Actions] ──► Static  ──► Action Buttons NEVER Re-render"
    },
    {
      id: "18.2.f",
      title: "نقل الحالة للأسفل Push State Down",
      englishTerm: "Push State Down Pattern (بوش ستيت داون)",
      description: "نمط تصميمي يتمثل في نقل المتغيرات والحالات سريعة التغير من المكون الأب إلى أصغر مكوّن ابن يحتاجها فعلياً. إذا كانت الحالة تُستخدم فقط داخل جزء صغير من الصفحة (مثل حقل إدخال أو نافذة منبثقة Modal)، فإن رفعها للأب يُجبر المكون الأب وجميع إخوته على إعادة التصيير بلا فائدة.",
      analogy: "يشبه إعطاء مفتاح خزانة الملفات للموظف الذي يستخدمها فقط في مكتبه، بدلاً من وضعه في مكتب المدير العام وإجبار المدير وسكرتاريته على التوقف عن العمل في كل مرة يريد الموظف فتح الخزانة.",
      whyItMatters: "يحصر نطاق التصيير (Render Scope) في أضيق مساحة ممكنة، مما يجعل سرعة استجابة حقول الإدخال والأنيميشن فائقة السلاسة دون سد معالج التطبيق.",
      syntax: "// نقل useState من المكون الأكبر إلى المكون الفرعي المتفاعل مباشرة",
      simpleExample: `// استيراد React
import React, { useState } from 'react';

// المكون المستقل الذي تم نقل حالة الحقل إليه (Push Down)
function ExpandableDisclaimer() {
  // الحالة محصورة هنا فقط بدلاً من تلويث المكون الأب
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-700 p-2 rounded">
      <button onClick={() => setIsOpen(v => !v)} className="text-xs text-sky-400 underline">
        {isOpen ? 'إخفاء الشروط والأحكام' : 'عرض الشروط والأحكام'}
      </button>
      {isOpen && <p className="text-xs text-slate-400 mt-2">جميع الحقوق محفوظة لمنصتنا التعليمية 2026.</p>}
    </div>
  );
}

// المكون الأب الكبير
export default function CheckoutPage() {
  console.log('تصيير صفحة الدفع الرئيسية');
  return (
    <div className="p-6 bg-slate-900 text-white rounded-xl space-y-4">
      <h2 className="text-xl font-bold">إتمام الشراء</h2>
      <p>تفاصيل الفاتورة والمنتجات...</p>
      {/* فتح وإغلاق الشروط لن يعيد تصيير صفحة الدفع إطلاقاً */}
      <ExpandableDisclaimer />
    </div>
  );
}`,
      advancedExample: [
        "// تطبيق عملي لنمط Push State Down على شريط بحث مخصص في واجهة جدول بيانات ضخمة",
        "import React, { useState } from 'react';",
        "",
        "// مكوّن البحث المعزول بحالته السريعة مع تأخير الإرسال (Debounced Callback)",
        "export function IsolatedSearchBox({ onCommitSearch }) {",
        "  // حالة محلية تتغير عند كل حرف يكتبه المستخدم",
        "  const [query, setQuery] = useState('');",
        "",
        "  const handleSubmit = (e) => {",
        "    e.preventDefault();",
        "    // إرسال الكلمة للأب فقط عند ضغط Enter أو زر البحث الفعلي",
        "    onCommitSearch(query);",
        "  };",
        "",
        "  return (",
        "    <form onSubmit={handleSubmit} className='flex gap-2'>",
        "      <input",
        "        type='text'",
        "        value={query}",
        "        onChange={e => setQuery(e.target.value)}",
        "        placeholder='اكتب واضغط بحث...'",
        "        className='bg-slate-800 border border-slate-700 px-3 py-1.5 rounded text-sm text-white focus:outline-none focus:border-sky-500'",
        "      />",
        "      <button type='submit' className='px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded text-sm font-semibold'>",
        "        بحث",
        "      </button>",
        "    </form>",
        "  );",
        "}",
        "",
        "// صفحة الجدول الكبيرة",
        "export function HeavyTableContainer() {",
        "  const [appliedSearch, setAppliedSearch] = useState('');",
        "  console.log('📊 تصيير الجدول الكبير بالكلمة:', appliedSearch);",
        "",
        "  return (",
        "    <div className='p-6 bg-slate-950 text-slate-100 rounded-xl space-y-4'>",
        "      <div className='flex justify-between items-center'>",
        "        <h3 className='font-bold text-lg'>سجل المعاملات</h3>",
        "        {/* أثناء كتابة المستخدم لكل حرف، IsolatedSearchBox فقط هو من يعيد التصيير! */}",
        "        <IsolatedSearchBox onCommitSearch={setAppliedSearch} />",
        "      </div>",
        "      <div className='p-4 bg-slate-900 rounded-lg text-slate-400 text-sm'>",
        "        عرض المعاملات المرتبطة بـ: {appliedSearch || 'الكل'}",
        "      </div>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "يكتب المستخدم بسرعة في حقل البحث دون أن يتأثر الجدول الكبير أو يعيد التصيير مع كل نقرة حرف، حتى يقرر المستخدم تأكيد البحث.",
      commonMistakes: "رفع الحالة للأب بصورة تلقائية (Premature Lifting State Up) لمجرد التوقع المستقبلي بأن مكوناً آخر قد يحتاجها، مما يربط المكونات ببعضها ويعقد الأداء.",
      bestPractices: "اجعل الحالة محلية في أصغر مكوّن ممكن دوماً؛ ولا ترفعها للأعلى إلا عندما يكون هناك مكوّن شقيق يحتاج فعلياً لقراءتها في نفس اللحظة.",
      visualDiagram: "Push State Down Architecture:\nBad:  [Parent: textState] ──► typing 'a' ──► Parent Re-renders ──► [HeavyTable Re-renders!]\nGood: [Parent] ──► [Input: textState (typing 'a' Re-renders ONLY self)] ──► [HeavyTable UNTOUCHED]"
    },
    {
      id: "18.2.g",
      title: "رفع المحتوى للأعلى Lift Content Up",
      englishTerm: "Lift Content Up Pattern (لفت كونتنت أب)",
      description: "نمط معماري مذهل في React يعتمد على تمرير المكونات الثقيلة أو الساكنة كخاصية children أو كـ Props مخصصة إلى المكون التفاعلي. نظراً لأن كائن الـ children يتم إنشاؤه في المكون الأب ولم تتغير مرجعيته، فإن إعادة تصيير المكون الأوسط لن تؤدي إطلاقاً إلى إعادة تصيير الـ children!",
      analogy: "يشبه إحضار لوحة فنية أثرية باهظة ووضعها داخل إطار رقمي مضيء؛ عندما يغير الإطار ألوان أضوائه ومؤثراته، تبقى اللوحة الفنية الأثرية في مكانها دون أن يُعاد رسمها أو لمسها بريشة الفنان.",
      whyItMatters: "يمنحك نفس مزايا React.memo و useMemo بنسبة 100% ولكن بدون الحاجة إلى استدعاء أي خطاف أو كتابة مصفوفة اعتماديات، معتمداً فقط على طريقة تركيب المكونات الطبيعية في React.",
      syntax: "function ScrollTracker({ children }) {\n  const [scroll, setScroll] = useState(0);\n  return <div onScroll={...}>{children}</div>;\n}",
      simpleExample: `// استيراد useState
import React, { useState } from 'react';

// مكون ثقيل يمثل محتوى ثابتاً
function ExpensiveTree() {
  console.log('🌳 تم تصيير الشجرة الثقيلة!');
  return <div className="p-4 bg-emerald-950 text-emerald-200 rounded">محتوى رسومي وتخطيطي معقد</div>;
}

// مكون يتحكم في تحريك أو تغيير خلفية المحتوى
function ColorToggler({ children }) {
  const [isRed, setIsRed] = useState(false);

  return (
    <div className={isRed ? "p-4 bg-rose-950 rounded" : "p-4 bg-slate-900 rounded"}>
      <button onClick={() => setIsRed(v => !v)} className="mb-2 px-3 py-1 bg-slate-700 text-white text-xs rounded">
        تغيير لون الخلفية
      </button>
      {/* هنا يتم عرض الـ children المحفوظ مرجعياً */}
      {children}
    </div>
  );
}

// المكون الرئيسي الذي يرفع المحتوى
export default function App() {
  return (
    <ColorToggler>
      {/* تم إنشاء ExpensiveTree هنا، ولن يُعاد تصييره عند تبديل لون ColorToggler */}
      <ExpensiveTree />
    </ColorToggler>
  );
}`,
      advancedExample: [
        "// استخدام نمط Lift Content Up لتطبيق حركات وتأثيرات تمرير (Scroll Effects) دون إبطاء المحتوى",
        "import React, { useState } from 'react';",
        "",
        "// حاوية التمرير المسؤولة عن قياس موضع التمرير وإظهار مؤشر النسبة",
        "export function ScrollProgressContainer({ children }) {",
        "  const [scrollProgress, setScrollProgress] = useState(0);",
        "",
        "  const handleScroll = (e) => {",
        "    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;",
        "    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;",
        "    setScrollProgress(progress);",
        "  };",
        "",
        "  return (",
        "    <div className='relative border border-slate-700 rounded-xl overflow-hidden bg-slate-950'>",
        "      {/* شريط تقدم التمرير العلوي المحسوب لحظياً */}",
        "      <div ",
        "        className='h-1.5 bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-75' ",
        "        style={{ width: scrollProgress + '%' }} ",
        "      />",
        "      {/* منطقة التمرير التفاعلية */}",
        "      <div onScroll={handleScroll} className='h-64 overflow-y-auto p-4 space-y-4'>",
        "        {/* الأبناء هنا لن يعاد تصييرهم مع كل حركة تمرير طفيفة بفضل ثبات الـ children! */}",
        "        {children}",
        "      </div>",
        "    </div>",
        "  );",
        "}",
        "",
        "// مكوّن المقال الطويل",
        "export function ArticleReader() {",
        "  return (",
        "    <ScrollProgressContainer>",
        "      <article className='text-slate-300 space-y-3 text-sm'>",
        "        <h2 className='text-lg font-bold text-white'>أسرار هندسة أداء React</h2>",
        "        <p>الفقرة الأولى: شرح أهمية تجنب الحسابات المكررة في مرحلة الـ Reconciliation...</p>",
        "        <p>الفقرة الثانية: كيف يحافظ نمط Composition على مراجع العناصر دون استدعاء دوالها...</p>",
        "        <p>الفقرة الثالثة: المقارنة بين رفع المحتوى واستخدام React.memo...</p>",
        "        <p>الفقرة الرابعة: نصائح عملية لإبقاء مسار المتصفح الرئيسي خالياً من المهام الطويلة...</p>",
        "      </article>",
        "    </ScrollProgressContainer>",
        "  );",
        "}"
      ].join('\n'),
      output: "مع كل مللي ثانية من التمرير، يعيد ScrollProgressContainer تصيير شريط التقدم فقط، بينما لا تعيد مئات الفقرات في ArticleReader التصيير نهائياً لأنها ممررة كـ children.",
      commonMistakes: "تمرير دوال تُنشئ عناصر جديدة داخل خاصية children مثل: <Container>{() => <Article />}</Container>، لأن دالة العرض ستُستدعى في كل تصيير، مما يبطل ميزة ثبات المرجع المعماري تماماً.",
      bestPractices: "استخدم نمط Lift Content Up كخط الدفاع الأول دائماً لحماية المكونات الداخلية الثقيلة من تأثيرات الحركة والمؤقتات وأشرطة التمرير.",
      visualDiagram: "Lift Content Up Pattern:\nParent (App)\n  ├── Instantiates <Article /> ──► Element Object Ref #401 Created\n  └── Passes as children to <ScrollContainer>\n\nScrollContainer Scrolls ──► State Updates ──► Re-evaluates its own JSX\n  └── Encounters {children} (Ref #401 Unchanged!) ──► SKIPS Article Render!"
    },
    {
      id: "18.2.h",
      title: "تجنب إنشاء الكائنات والدوال داخل JSX",
      englishTerm: "Avoiding Inline Objects and Functions in JSX (إنلاين أوبجكتس إن جيسكس)",
      description: "كتابة كائنات نمطية مباشرة مثل style={{ color: 'red' }} أو كتابة دوال سهمية مضمنة مثل onClick={() => doSomething()} في أسطر الـ JSX. في كل دورة تصيير، يُنشئ محرك JavaScript كائناً جديداً في الذاكرة بعنوان (Reference) مختلف، مما يُفشل مقارنات الـ Shallow Equality في React.memo والمكونات النقية.",
      analogy: "يشبه طباعة بطاقة دعوة جديدة وتوقيعها بتاريخ مختلف في كل دقيقة وترسلها لنفس الصديق؛ رغم أن نص الدعوة لم يتغير، إلا أن ساعي البريد سيضطر للسفر وتسليمها في كل مرة لأن رقم الخطاب جديد.",
      whyItMatters: "هو السبب رقم 1 في فشل الـ Memoization داخل تطبيقات React؛ حيث يظن المطور أنه قام بحماية المكون بـ React.memo، لكن تمرير كائن نمطي مضمن يبطل الحماية ويهدر الأداء بالكامل.",
      syntax: "// خطأ:\n<Child style={{ padding: 10 }} onClick={() => save()} />\n// صواب:\nconst PADDING_STYLE = { padding: 10 };\n<Child style={PADDING_STYLE} onClick={handleSave} />",
      simpleExample: `// استيراد React
import React, { memo, useCallback } from 'react';

// كائن ثابت خارج نطاق المكون لتثبيت المرجع إلى الأبد
const STATIC_CARD_STYLE = { padding: '16px', borderRadius: '8px' };

const FastCard = memo(function FastCard({ style, onClick, title }) {
  console.log('تصيير الكارت:', title);
  return (
    <div style={style} onClick={onClick} className="bg-slate-800 text-white cursor-pointer">
      {title}
    </div>
  );
});

export default function AvoidInlines() {
  // دالة مثبتة المرجع عبر useCallback
  const handleClick = useCallback(() => {
    alert('تم النقر!');
  }, []);

  return (
    <div className="p-4 space-y-2">
      {/* تمرير مراجع مستقرة بدلاً من كائنات ودوال مضمنة */}
      <FastCard 
        title="كارت محمي عالي الأداء" 
        style={STATIC_CARD_STYLE} 
        onClick={handleClick} 
      />
    </div>
  );
}`,
      advancedExample: [
        "// مقارنة حية بين الطريقة السيئة والطريقة المثالية لتمرير الخصائص للقوائم المتكررة",
        "import React, { memo, useCallback } from 'react';",
        "",
        "// عنصر القائمة مغلف بـ memo",
        "const UserListItem = memo(function UserListItem({ id, name, onSelect, customTheme }) {",
        "  console.log('تصيير عنصر المستخدم:', id);",
        "  return (",
        "    <li ",
        "      style={customTheme}",
        "      onClick={() => onSelect(id)}",
        "      className='p-2 bg-slate-900 border border-slate-800 rounded flex justify-between cursor-pointer'",
        "    >",
        "      <span>{name}</span>",
        "      <span className='text-xs text-sky-400'>اختيار</span>",
        "    </li>",
        "  );",
        "});",
        "",
        "// ستايل ثابت معرف مسبقاً في الذاكرة",
        "const DEFAULT_ITEM_THEME = { borderColor: '#334155' };",
        "",
        "export function UserListContainer({ users }) {",
        "  // دالة معالجة عامة تستقبل المعرف كمعامل بدلاً من عمل دالة سهمية لكل عنصر في الـ JSX",
        "  const handleSelectUser = useCallback((userId) => {",
        "    console.log('تم اختيار المستخدم رقم:', userId);",
        "  }, []);",
        "",
        "  return (",
        "    <ul className='space-y-2'>",
        "      {users.map(user => (",
        "        <UserListItem",
        "          key={user.id}",
        "          id={user.id}",
        "          name={user.name}",
        "          // تمرير المرجع الثابت بدلاً من إنشاء دالة مضمنة في الـ map",
        "          onSelect={handleSelectUser}",
        "          // تمرير الكائن الثابت بدلاً من style={{ ... }}",
        "          customTheme={DEFAULT_ITEM_THEME}",
        "        />",
        "      ))}",
        "    </ul>",
        "  );",
        "}"
      ].join('\n'),
      output: "عناصر القائمة تحتفظ بـ Props متطابقة بالمرجع، وبالتالي عند إعادة تصيير UserListContainer لن يُعاد تصيير أي عنصر من عناصر القائمة إطلاقاً.",
      commonMistakes: "الخوف المبالغ فيه من كتابة onClick={() => setCount(1)} على عناصر HTML العادية مثل <button> أو <div>؛ عناصر الـ DOM الأصلية لا تتأثر بمرجعية الدوال ولا يعاد تصييرها بسبب ذلك، المشكلة تكمن فقط عندما يُمرر هذا التابع لمكوّن React مخصص ومحمي بـ React.memo.",
      bestPractices: "أخرج الكائنات الثابتة والأنماط المعرفة مسبقاً خارج جسم المكوّن كلياً (Module Scope)، واعتمد على فئات Tailwind CSS بدلاً من كتابة كائنات style مضمنة.",
      visualDiagram: "Inline Function in JSX:\nRender #1: onClick={() => {}} ──► Memory: 0xAAAA (New Pointer)\nRender #2: onClick={() => {}} ──► Memory: 0xBBBB (Different Pointer!)\nResult: React.memo detects 0xAAAA !== 0xBBBB ──► MEMO BROKEN!"
    }
  ],
  quizzes: [
    {
      id: "q18.2.1",
      question: "ما النتيجة إذا قمت بتغليف مكوّن بـ React.memo ولكنك تمرر له خاصية style={{ margin: 10 }} داخل كود الـ JSX للأب؟",
      options: [
        "سيعمل React.memo بنجاح ولن يُعاد تصيير المكون أبداً.",
        "سيتعطل تطبيق React ويظهر خطأ في الكونسول.",
        "سيبطل مفعول React.memo ويعيد المكون التصيير في كل مرة يُعاد فيها تصيير الأب، لأن الكائن المضمن يملك مرجعاً جديداً في كل دورة.",
        "سيقوم المتصفح بتحويل الكائن المضمن إلى نص ثابت تلقائياً."
      ],
      correctAnswer: 2,
      explanation: "في كل مرة يُنفذ فيها المكون الأب، يُنشئ كائناً جديداً في الذاكرة لـ { margin: 10 }، ومقارنة React.memo السطحية (prevProps.style === nextProps.style) ستُرجع false دائماً، مما يلغي ميزة memo بالكامل."
    },
    {
      id: "q18.2.2",
      question: "ما الفائدة المعمارية لنمط 'Lift Content Up' وتمرير المكونات كـ children؟",
      options: [
        "يمنع إعادة تصيير المكونات الممررة كـ children عند تحديث حالة الحاوية، لأن مرجع عنصر الـ React تم إنشاؤه في الأب ولم يتغير.",
        "يقوم بضغط كود HTML وتقليص حجم الحزمة البرمجية.",
        "يجعل المكون يعمل على الخادم بدلاً من المتصفح.",
        "يحول جميع المكونات الوظيفية إلى Class Components."
      ],
      correctAnswer: 0,
      explanation: "عندما تُمرر مكوّناً كـ children لمكوّن آخر، فإن الـ JSX الخاص به يُقيّم في المكون الجذري الخارجي، وعندما يُعيد المكون الأوسط تصيير نفسه، يجد أن خاصية props.children متطابقة بالمرجع، فيتخطى محرك React إعادة تصييرها تلقائياً."
    },
    {
      id: "q18.2.3",
      question: "متى يكون استخدام useMemo غير مستحب ويضر بالأداء بدلاً من تحسينه؟",
      options: [
        "عندما تكون العملية الحسابية تستهلك 200 مللي ثانية.",
        "في العمليات الحسابية الخفيفة والبديهية مثل جمع رقمين، لأن تكلفة استدعاء الخطاف ومقارنة مصفوفة الاعتماديات في الذاكرة أكبر من تكلفة العملية نفسها.",
        "عند استخدام TypeScript في المشروع.",
        "عند تصفية مصفوفة تحتوي على 50,000 عنصر."
      ],
      correctAnswer: 1,
      explanation: "خطاف useMemo ليس مجانياً؛ فهو يتطلب حجز ذاكرة للقيمة والاعتماديات وتنفيذ فحص مساواة سطحي في كل رندر. إذا كانت العملية أسرع من ذلك، فإن استخدامه يُعتبر هدراً لموارد المعالج والذاكرة."
    }
  ],
  exercise: {
    title: "تمرين عملي: تحسين قائمة مستخدمين تعاني من بطء شديد في كتابة البحث",
    description: "لديك مكوّن يحتوي على حقل إدخال للبحث وقائمة تضم 500 مستخدم. في كل مرة يكتب المستخدم حرفاً، يُعاد تصيير جميع بطاقات الـ 500 مستخدم مما يسبب تقطيعاً. قم بتطبيق React.memo ونمط Push State Down أو useCallback لمنع إعادة تصيير البطاقات غير المتغيرة.",
    hints: [
      "غلف مكوّن بطاقة المستخدم الفردي بـ React.memo.",
      "تأكد من أن دالة النقر على المستخدم تستخدم useCallback مع تمرير المعرف id كمعامل.",
      "افصل حقل الإدخال في مكوّن مستقل بحالته المحلية لمنع رندر القائمة مع كل حرف."
    ],
    solution: `import React, { useState, memo, useCallback } from 'react';

// بطاقة المستخدم محمية بـ memo
const UserItem = memo(function UserItem({ user, onSelect }) {
  console.log('تصيير بطاقة:', user.id);
  return (
    <div className="p-2 border border-slate-700 rounded flex justify-between items-center my-1 bg-slate-800 text-white">
      <span>{user.name} ({user.email})</span>
      <button 
        onClick={() => onSelect(user.id)}
        className="px-2 py-1 bg-sky-600 rounded text-xs"
      >
        تفاصيل
      </button>
    </div>
  );
});

export function OptimizedUserDirectory({ initialUsers }) {
  const [selectedId, setSelectedId] = useState(null);

  // دالة مستقرة تماماً لا تتغير
  const handleSelect = useCallback((id) => {
    setSelectedId(id);
  }, []);

  return (
    <div className="p-4 bg-slate-900 rounded-xl">
      <h3 className="text-white font-bold mb-2">دليل المستخدمين المحسن</h3>
      {selectedId && <p className="text-emerald-400 text-xs mb-2">المحدد حالياً: {selectedId}</p>}
      
      {/* قائمة المستخدمين */}
      <div className="max-h-60 overflow-y-auto">
        {initialUsers.map(user => (
          <UserItem key={user.id} user={user} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "هرم استراتيجيات تقليل التصيير في React",
    subtitle: "من الحلول المعمارية النظيفة وحتى أدوات الـ Memoization المتقدمة",
    steps: [
      { step: "1", title: "الهيكلة المعمارية (Push State Down)", desc: "نقل الحالات سريعة التغير لأضيق مكوّن ممكن لتطويق نطاق التصيير." },
      { step: "2", title: "رفع المحتوى (Lift Content Up)", desc: "استخدام {children} لتمرير المكونات الثقيلة ثابتة المرجع مجاناً بدون خطافات." },
      { step: "3", title: "حماية المكونات (React.memo)", desc: "حفظ المكونات المتوسطة والثقيلة لمنع تصييرها إذا لم تتغير خصائصها." },
      { step: "4", title: "تثبيت المراجع (useCallback / useMemo)", desc: "منع انهيار React.memo بتثبيت مراجع الدوال والكائنات الممررة كـ Props." }
    ]
  }
};
