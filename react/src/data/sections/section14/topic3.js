// topic3.js - القسم 14: TypeScript مع React
// الموضوع 3: TypeScript مع Hooks

export const topic3 = {
  id: "14.3",
  title: "TypeScript مع Hooks",
  englishTitle: "TypeScript with React Hooks",
  description: "الدليل الشامل لاحتراف استخدام خطافات React الأساسية والمخصصة مع نظام الأنواع القوي في TypeScript، وضمان أمان الحالة والمراجع والإجراءات بدون ثغرات runtime.",
  subtopics: [
    {
      id: "14.3.a",
      title: "تعريف الأنواع مع useState",
      englishTerm: {
        term: "Typing useState Hook",
        pronunciation: "تايبينغ يوز ستيت هوك",
        meaning: "تحديد أنواع بيانات الحالة في خطاف useState إما استنتاجياً أو صراحة باستخدام الـ Generics"
      },
      description: "يقوم TypeScript باستنتاج نوع الحالة تلقائياً (Type Inference) إذا كانت القيمة الابتدائية من نوع بدائي واضح كالأرقام أو النصوص أو القيم المنطقية. ولكن عندما تكون الحالة كائناً معقداً، أو مصفوفة تبدأ فارغة، أو يمكن أن تكون خالية (null / undefined)، يجب تحديد النوع صراحة باستخدام المعامل العام (Generic Argument) مثل `useState<User | null>(null)` لضمان الأمان البرمجي الكامل ومنع أخطاء زمن التشغيل.",
      analogy: "تخيل أن لديك صندوق تخزين شفافاً وضعت فيه تفاحة؛ سيعرف أي شخص فوراً أنه صندوق تفاح (استنتاج تلقائي). ولكن إذا كان الصندوق فارغاً في البداية، فيجب عليك كتابة ملصق رسمي عليه يقول: 'مخصص للوثائق الرسمية فقط أو فارغ'، حتى لا يأتي شخص ويضع فيه مفاتيح سيارة بالخطأ!",
      whyItMatters: "بدون التحديد الصريح للأنواع مع الحالات المعقدة، سيفترض TypeScript أن المصفوفة الفارغة `[]` هي من نوع `never[]` مما يمنعك لاحقاً من إضافة أي عنصر إليها، أو سيفترض أن القيمة الابتدائية `null` تعني أن الحالة لا تقبل إلا `null` فقط للأبد، مما يكسر تدفق بيانات المكون تماماً.",
      syntax: "const [state, setState] = useState<Type | null>(initialValue);\nconst [list, setList] = useState<Item[]>([]);",
      simpleExample: `// استيراد دالة useState من مكتبة React
import { useState } from 'react';

// تعريف واجهة تمثل بيانات المستخدم
interface UserProfile {
  // معرف المستخدم الرقمي
  id: number;
  // اسم المستخدم النصي
  name: string;
  // بريد المستخدم الإلكتروني
  email: string;
}

// مكون بطاقة الملف الشخصي
export function SimpleUserCard() {
  // تعريف حالة تقبل إما كائن المستخدم أو القيمة الفارغة null
  const [user, setUser] = useState<UserProfile | null>(null);

  // دالة لتسجيل الدخول وتعيين بيانات المستخدم
  const handleLogin = () => {
    // تحديث الحالة بكائن يطابق واجهة UserProfile تماماً
    setUser({
      // تعيين المعرف
      id: 101,
      // تعيين الاسم
      name: "سارة المهندس",
      // تعيين البريد الإلكتروني
      email: "sara@example.com"
    });
  };

  // إرجاع واجهة المستخدم
  return (
    // حاوية المكون بتنسيق أنيق
    <div className="p-4 border rounded-xl bg-slate-900 text-white">
      {/* فحص ما إذا كان المستخدم مسجلاً أم لا بأمان */}
      {user ? (
        // عرض تفاصيل المستخدم
        <div>
          {/* اسم المستخدم */}
          <h3 className="font-bold text-lg">{user.name}</h3>
          {/* بريد المستخدم */}
          <p className="text-slate-400">{user.email}</p>
        </div>
      ) : (
        // رسالة عند عدم تسجيل الدخول
        <p className="text-amber-400">لم يتم تسجيل الدخول بعد</p>
      )}
      {/* زر تسجيل الدخول التجريبي */}
      <button
        // معالج النقر لتشغيل دالة تسجيل الدخول
        onClick={handleLogin}
        // تنسيق الزر
        className="mt-3 px-4 py-1.5 bg-blue-600 rounded-lg hover:bg-blue-500"
      >
        تسجيل الدخول
      </button>
    </div>
  );
}`,
      advancedExample: `// استيراد useState من React
import { useState } from 'react';

// تعريف نوع حالة المهمة
type TodoStatus = 'pending' | 'in_progress' | 'completed';

// تعريف واجهة بيانات المهمة
interface TodoItem {
  // معرف المهمة كمعرف نصي فريد
  id: string;
  // عنوان المهمة
  title: string;
  // حالة المهمة المقيدة بالنوع المشتق
  status: TodoStatus;
  // تاريخ الإضافة
  createdAt: Date;
}

// مكون إدارة قائمة المهام مع التحقق الصارم
export function AdvancedTodoList() {
  // مصفوفة مهام تبدأ فارغة مع تحديد النوع بدقة لمنع خطأ never[]
  const [todos, setTodos] = useState<TodoItem[]>([]);
  // حالة نص المدخل مع استنتاج تلقائي لنوع string
  const [inputText, setInputText] = useState("");

  // دالة إضافة مهمة جديدة
  const addTodo = () => {
    // التحقق من أن النص ليس فارغاً بعد تجريد الفراغات
    if (!inputText.trim()) return;

    // بناء كائن المهمة الجديدة المطابق تماماً للنوع TodoItem
    const newTodo: TodoItem = {
      // توليد معرف عشوائي
      id: crypto.randomUUID(),
      // العنوان المدخل
      title: inputText,
      // الحالة المبدئية
      status: 'pending',
      // تاريخ اللحظة الحالية
      createdAt: new Date()
    };

    // تحديث الحالة بالاعتماد على الحالة السابقة لضمان التزامن
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    // تفريغ حقل الإدخال
    setInputText("");
  };

  // دالة تغيير حالة مهمة محددة
  const updateStatus = (id: string, newStatus: TodoStatus) => {
    // تعديل المصفوفة بإنشاء نسخة جديدة بأسلوب Immutability
    setTodos((prev) =>
      // المرور على كافة المهام
      prev.map((item) =>
        // في حال تطابق المعرف نحدث الحالة فقط
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  // إرجاع واجهة المستخدم
  return (
    // حاوية المكون الرئيسية
    <div className="p-6 bg-slate-950 text-slate-100 rounded-2xl shadow-xl border border-slate-800">
      {/* عنوان المكون */}
      <h2 className="text-xl font-bold mb-4 text-emerald-400">قائمة المهام المؤمّنة بأنواع TypeScript</h2>
      {/* شريط الإدخال والإضافة */}
      <div className="flex gap-2 mb-4">
        {/* حقل إدخال النص */}
        <input
          // نوع الحقل
          type="text"
          // القيمة الحالية المربوطة بالحالة
          value={inputText}
          // معالج التغيير مع التحقق التلقائي من نوع الحدث
          onChange={(e) => setInputText(e.target.value)}
          // نص تلميحي
          placeholder="أدخل عنوان المهمة الجديدة..."
          // تنسيق الحقل
          className="flex-1 px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500"
        />
        {/* زر الإضافة */}
        <button
          // استدعاء دالة الإضافة عند النقر
          onClick={addTodo}
          // تنسيق الزر
          className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 font-semibold rounded-xl transition-colors"
        >
          إضافة
        </button>
      </div>
      {/* قائمة عرض المهام */}
      <ul className="space-y-2">
        {/* تكرار المهام مع مفتاح فريد وعرض مؤمن */}
        {todos.map((todo) => (
          // عنصر المهمة في القائمة
          <li key={todo.id} className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between">
            {/* عنوان وتاريخ المهمة */}
            <div>
              {/* عنوان المهمة */}
              <p className="font-medium text-slate-200">{todo.title}</p>
              {/* وقت الإنشاء المنسق */}
              <span className="text-xs text-slate-500">{todo.createdAt.toLocaleTimeString('ar-EG')}</span>
            </div>
            {/* أزرار تغيير الحالة */}
            <div className="flex gap-1.5">
              {/* زر إتمام المهمة */}
              <button
                // تحديث الحالة إلى مكتملة
                onClick={() => updateStatus(todo.id, 'completed')}
                // فئة الزر حسب الحالة
                className={\`px-2.5 py-1 text-xs rounded-lg font-medium \${todo.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'}\`}
              >
                مكتملة
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      outputExplanation: "الكود يضمن أن مصفوفة المهام `todos` لا يمكن أن تستقبل كائناً ينقصه حقل أساسي أو يحمل حالة خارج خيارات `TodoStatus` المسموحة، كما يوفر محررك البرمجي الإكمال التلقائي الذكي عند الوصول لحقول `todo.title` أو `todo.createdAt`.",
      commonMistakes: [
        {
          mistake: "تعريف مصفوفة فارغة بدون نوع صريح: `const [items, setItems] = useState([]);`",
          fix: "تحديد النوع باستخدام الـ Generic: `const [items, setItems] = useState<MyItem[]>([]);` وإلا سيستنتج TypeScript النوع `never[]` ويرفض إضافة أي عنصر."
        },
        {
          mistake: "كتابة `useState<User>(null)` حيث لا تشمل الواجهة `User` القيمة `null`",
          fix: "استخدام Union Type يشمل القيمة الخالية: `useState<User | null>(null);`"
        }
      ],
      bestPractices: [
        "اعتمد على Type Inference للحالات البسيطة (boolean, string, number) لتجنب كتابة تعليمات لا فائدة منها.",
        "استخدم الـ Generics دائماً للمصفوفات والكائنات وحالات الاتحاد التي تبدأ بقيمة `null` أو `undefined`."
      ],
      infographic: {
        title: "مقارنة استنتاج النوع في useState",
        points: [
          "حالة أولية بدائية (string, number, boolean) ➔ استنتاج تلقائي فوري ➔ `useState(0)` ينتج `[number, Dispatch]`",
          "مصفوفة فارغة بدون إعلان ➔ يستنتج `never[]` ➔ خطأ فادح يمنع الإضافة!",
          "حل المصفوفات والكائنات ➔ استخدام Generic واضح: `useState<Article[]>([])` أو `useState<User | null>(null)`"
        ]
      }
    },
    {
      id: "14.3.b",
      title: "تعريف الأنواع مع useRef",
      englishTerm: {
        term: "Typing useRef Hook",
        pronunciation: "تايبينغ يوز ريف هوك",
        meaning: "تحديد نوع المرجع سواء كان يشير لعنصر DOM حقيقي أو كقيمة متغيرة قابلة للتعديل عبر عمليات التصيير"
      },
      description: "يمتلك خطاف `useRef` في بيئة TypeScript حالتين شائعتين ذات دلالات مختلفة تماماً في الأنواع:\n1. مراجع عناصر الـ DOM: مثل `useRef<HTMLInputElement>(null)` حيث تكون خاصية `.current` للقراءة فقط (Read-only) لأن React نفسها هي من تتولى ربط عنصر الـ DOM بها.\n2. مراجع القيم المتغيرة (Mutable Values): مثل معرف المؤقتات `useRef<number | null>(null)` حيث تكون خاصية `.current` قابلة للتعديل بحرية دون إطلاق إعادة تصيير.",
      analogy: "النوع الأول يشبه قفل نافذة مثبت في الجدار (عنصر DOM)؛ لا يمكنك فكه ونقله بنفسك بل تنظر من خلاله فقط. النوع الثاني يشبه مفكرة جيب صغيرة تدون فيها أرقاماً سرية؛ يمكنك مسح الرقم وكتابة غيره في أي ثانية دون أن يغير ذلك شكل غرفتك!",
      whyItMatters: "إذا أخطأت في كتابة النوع الأولي لمرجع DOM (مثل نسيان إعطاء القيمة `null` مبدئياً)، فقد يعترض TypeScript على تمرير المرجع إلى خاصية `ref` في عنصر JSX، كما أن محاولة تعديل `.current` لمرجع DOM مباشرة سينتج عنها خطأ تجميع يمنع العبث غير المنضبط.",
      syntax: "// لمرجع عنصر واجهة (DOM Ref):\nconst inputRef = useRef<HTMLInputElement>(null);\n\n// لمرجع قيمة متغيرة عادية (Mutable Ref):\nconst timerIdRef = useRef<number | null>(null);",
      simpleExample: `// استيراد الخطافات من React
import { useRef, useEffect } from 'react';

// مكون حقل نصي يركز عليه المؤشر تلقائياً
export function AutoFocusInput() {
  // تعريف مرجع لعنصر إدخال HTML مع تحديد القيمة الابتدائية null
  const inputRef = useRef<HTMLInputElement>(null);

  // تأثير جانبي يتم تشغيله مرة واحدة عند تحميل المكون
  useEffect(() => {
    // التحقق من وجود العنصر في DOM قبل استدعاء دالة التركيز
    if (inputRef.current) {
      // توجيه مؤشر الكتابة إلى الحقل بأمان تام
      inputRef.current.focus();
    }
  }, []);

  // إرجاع واجهة المستخدم
  return (
    // حاوية الحقل
    <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
      {/* عنوان توضيحي */}
      <label className="block text-sm text-slate-300 mb-2">اسم المستخدم:</label>
      {/* حقل الإدخال مع ربط المرجع المحدد النوع */}
      <input
        // ربط مرجع inputRef بالحقل
        ref={inputRef}
        // نوع الحقل
        type="text"
        // نص تلميحي
        placeholder="اكتب هنا مباشرة..."
        // تنسيق الحقل
        className="w-full px-3 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}`,
      advancedExample: `// استيراد الخطافات المطلوبة من React
import { useRef, useState, useEffect } from 'react';

// مكون ساعة إيقاف دقيقة تستخدم كلا نوعي المراجع
export function PrecisionStopwatch() {
  // حالة لعرض الثواني المنقضية على الشاشة
  const [seconds, setSeconds] = useState(0);
  // حالة لمعرفة هل المؤقت يعمل حالياً أم متوقف
  const [isRunning, setIsRunning] = useState(false);

  // مرجع قيمة متغيرة لتخزين معرف setInterval دون التسبب في re-render
  const timerRef = useRef<number | null>(null);

  // مرجع عنصر DOM لعرض تأثير وميض بصري على إطار الشاشة
  const displayContainerRef = useRef<HTMLDivElement>(null);

  // دالة بدء العد التنازلي
  const handleStart = () => {
    // منع إنشاء مؤقتات متعددة إذا كان المؤقت يعمل بالفعل
    if (timerRef.current !== null) return;

    // تحديث حالة التشغيل
    setIsRunning(true);

    // بدء المؤقت وتخزين المعرف داخل المرجع المتغير
    timerRef.current = window.setInterval(() => {
      // زيادة الثواني بمقدار ثانية واحدة
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  // دالة إيقاف المؤقت مؤقتاً
  const handlePause = () => {
    // إذا كان المرجع يحتوي على معرف مؤقت نشط
    if (timerRef.current !== null) {
      // إيقاف الـ interval في المتصفح
      window.clearInterval(timerRef.current);
      // إعادة تعيين المرجع إلى null
      timerRef.current = null;
      // تحديث حالة التشغيل
      setIsRunning(false);
    }
  };

  // دالة تصفير المؤقت مع تنبيه بصري مباشر على الـ DOM
  const handleReset = () => {
    // إيقاف المؤقت أولاً
    handlePause();
    // تصفير العداد المعروض
    setSeconds(0);

    // تطبيق وميض تجميلي مباشر على عنصر DOM عبر مرجع الـ Div
    if (displayContainerRef.current) {
      // إضافة صنف وميض أحمر لفترة وجيزة
      displayContainerRef.current.classList.add('ring-4', 'ring-red-500');
      // إزالة الصنف بعد 300 ملي ثانية
      setTimeout(() => {
        displayContainerRef.current?.classList.remove('ring-4', 'ring-red-500');
      }, 300);
    }
  };

  // تنظيف المؤقت عند إزالة المكون من الذاكرة لمنع تسريب الذاكرة Memory Leak
  useEffect(() => {
    // دالة التنظيف Cleanup Function
    return () => {
      // التحقق من وجود مؤقت قيد التشغيل
      if (timerRef.current !== null) {
        // إلغاء المؤقت
        window.clearInterval(timerRef.current);
      }
    };
  }, []);

  // إرجاع الواجهة
  return (
    // الحاوية الكلية للمكون
    <div className="p-6 bg-slate-950 text-white rounded-2xl border border-slate-800 max-w-md mx-auto text-center">
      {/* عنوان الساعة */}
      <h3 className="text-xl font-bold text-cyan-400 mb-4">ساعة إيقاف دقيقة بأنواع المراجع</h3>
      {/* شاشة عرض الوقت المربوطة بمرجع DOM للوميض البصري */}
      <div
        // ربط مرجع الـ DOM بالحاوية
        ref={displayContainerRef}
        // تنسيق الحاوية مع دعم الانتقال اللوني السلس
        className="p-8 bg-slate-900 rounded-2xl border border-slate-800 mb-6 transition-all duration-300"
      >
        {/* قيمة العداد بالثواني */}
        <span className="text-5xl font-mono font-extrabold text-white tracking-widest">
          {String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(seconds % 60).padStart(2, '0')}
        </span>
      </div>
      {/* أزرار التحكم بالعمليات */}
      <div className="flex justify-center gap-3">
        {/* زر البدء */}
        <button
          // استدعاء دالة البدء
          onClick={handleStart}
          // تعطيل الزر إذا كان المؤقت يعمل بالفعل
          disabled={isRunning}
          // تنسيق الزر
          className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 rounded-xl font-semibold transition-all"
        >
          بدء
        </button>
        {/* زر الإيقاف المؤقت */}
        <button
          // استدعاء دالة الإيقاف
          onClick={handlePause}
          // تعطيل الزر إذا كان المؤقت متوقفاً أصلاً
          disabled={!isRunning}
          // تنسيق الزر
          className="px-5 py-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 rounded-xl font-semibold transition-all"
        >
          إيقاف
        </button>
        {/* زر التصفير */}
        <button
          // استدعاء دالة التصفير
          onClick={handleReset}
          // تنسيق الزر
          className="px-5 py-2 bg-rose-600 hover:bg-rose-500 rounded-xl font-semibold transition-all"
        >
          تصفير
        </button>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح الكود التمييز الدقيق لـ TypeScript بين `HTMLDivElement` لعنصر واجهة حقيقي تُقرأ خصائصه ولا يتم استبدال مرجعه باليد، وبين `number | null` لمتغير داخلي يحفظ معرف المؤقت ويمكن تعديل خاصية `.current` فيه بحرية تامة.",
      commonMistakes: [
        {
          mistake: "كتابة `useRef<HTMLDivElement>()` بدون تمرير `null` كمعامل أولي",
          fix: "يجب تمرير `null` دائماً مع مراجع الـ DOM: `useRef<HTMLDivElement>(null)` ليتعرف عليه TypeScript كمرجع جاهز للربط بخاصية `ref` المضمنة."
        },
        {
          mistake: "محاولة إعادة تعيين مرجع DOM باليد مثل: `divRef.current = newDiv`",
          fix: "تجنب تعديل مراجع الـ DOM يدوياً لأنها تُدار تلقائياً بواسطة React عبر خاصية ref في JSX."
        }
      ],
      bestPractices: [
        "استخدم الأنواع الدقيقة لعناصر HTML مثل `HTMLInputElement` أو `HTMLButtonElement` بدلاً من `HTMLElement` العام.",
        "تحقق دائماً من وجود `.current` باستخدام الشرط `if (ref.current)` أو التمرير الآمن `ref.current?.focus()` لتفادي أخطاء null pointer."
      ],
      infographic: {
        title: "نوعا المراجع في TypeScript",
        points: [
          "مرجع DOM (DOM Ref): `useRef<HTMLInputElement>(null)` ➔ خاصية `current` للقراءة فقط وتُدار عبر React.",
          "مرجع متغير (Mutable Ref): `useRef<T>(initialValue)` ➔ خاصية `current` قابلة للقراءة والكتابة بحرية دون إطلاق re-render.",
          "قاعدة ذهبية: مرجع عناصر الواجهة يحتاج دائماً إلى معامل `(null)` في الاستدعاء المبدئي."
        ]
      }
    },
    {
      id: "14.3.c",
      title: "تعريف الأنواع مع useReducer",
      englishTerm: {
        term: "Typing useReducer Hook",
        pronunciation: "تايبينغ يوز ريديوسر هوك",
        meaning: "تحديد أنواع الحالة الصارمة ونقابات الأفعال المميزة (Discriminated Union Actions) لضمان صحة المعاملات"
      },
      description: "يعتبر `useReducer` أقوى خطاف لإدارة الحالات المعقدة، وفي TypeScript يصل هذا الخطاف إلى أوج قوته عندما نقوم بتعريف نوع الإجراءات على هيئة Discriminated Union (اتحاد مميز). في هذا النمط، يمتلك كل كائن إجراء خاصية `type` ثابتة ومحددة، مما يسمح لمترجم TypeScript بالتعرف التلقائي على محتوى الـ `payload` المرتبط بذلك الإجراء داخل جملة `switch` ومنع إرسال أي معاملات خاطئة نهائياً.",
      analogy: "يشبه الأمر محطة لفرز الطرود البريدية؛ إذا كانت الاستمارة مكتوب عليها 'شحنة ذهب'، فإن النموذج يفرض فوراً حقل 'رقم الخزنة المشفر'. وإذا كان مكتوباً 'رسالة عادية'، فلن يطلب النموذج سوى 'عنوان المستلم'. لن يقبل النظام أي طرد يحمل استمارة غير مطابقة بدقة متناهية!",
      whyItMatters: "يحميك هذا الأسلوب من الخطأ الشائع بإرسال `dispatch({ type: 'UPDATE_USER' })` بدون تمرير بيانات المستخدم، أو إرسال معرف مفقود في حذف عنصر، حيث سيعترض TypeScript على الفور أثناء الكتابة ويخبرك بالبيانات الناقصة بدقة مذهلة.",
      syntax: "type Action =\n  | { type: 'INCREMENT'; step: number }\n  | { type: 'DECREMENT'; step: number }\n  | { type: 'RESET' };\n\nfunction reducer(state: State, action: Action): State { ... }",
      simpleExample: `// استيراد useReducer من مكتبة React
import { useReducer } from 'react';

// تعريف واجهة تمثل بنية حالة العداد
interface CounterState {
  // القيمة الحالية للعداد
  count: number;
}

// تعريف نقابة الأفعال المميزة للعداد
type CounterAction =
  // إجراء الزيادة ويتطلب تحديد قيمة الخطوة
  | { type: 'increment'; step: number }
  // إجراء الإنقاص ويتطلب تحديد قيمة الخطوة
  | { type: 'decrement'; step: number }
  // إجراء التصفير ولا يتطلب أي حمولة إضافية
  | { type: 'reset' };

// دالة المخفض التي تطبق التغييرات على الحالة
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  // فحص نوع الإجراء لتحديد المنطق المناسب
  switch (action.type) {
    // عند طلب الزيادة
    case 'increment':
      // إرجاع كائن حالة جديد بالزيادة المحسوبة
      return { count: state.count + action.step };
    // عند طلب الإنقاص
    case 'decrement':
      // إرجاع كائن حالة جديد بالإنقاص المحسوب
      return { count: state.count - action.step };
    // عند طلب التصفير
    case 'reset':
      // إعادة العداد للصفر
      return { count: 0 };
    // الحماية من أي احتمال غير متوقع
    default:
      // إرجاع الحالة الحالية دون تغيير
      return state;
  }
}

// مكون العداد البسيط المؤمّن بالكامل
export function SimpleTypedCounter() {
  // تهيئة useReducer بالحالة المبدئية والدالة المخفضة
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  // إرجاع واجهة المستخدم
  return (
    // حاوية المكون
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center text-white">
      {/* عرض القيمة الحالية */}
      <h3 className="text-2xl font-bold mb-3">القيمة: {state.count}</h3>
      {/* أزرار الإجراءات */}
      <div className="flex justify-center gap-2">
        {/* زر الزيادة بمقدار 5 */}
        <button
          // إرسال الإجراء مع الخطوة الإلزامية
          onClick={() => dispatch({ type: 'increment', step: 5 })}
          // تنسيق الزر
          className="px-3 py-1.5 bg-emerald-600 rounded-lg hover:bg-emerald-500 font-bold"
        >
          +5
        </button>
        {/* زر التصفير بدون حمولة */}
        <button
          // إرسال إجراء التصفير
          onClick={() => dispatch({ type: 'reset' })}
          // تنسيق الزر
          className="px-3 py-1.5 bg-slate-700 rounded-lg hover:bg-slate-600 font-bold"
        >
          تصفير
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: `// استيراد الخطاف useReducer من React
import { useReducer } from 'react';

// تعريف نوع عنصر سلة المشتريات
interface CartItem {
  // معرف المنتج
  id: string;
  // اسم المنتج
  title: string;
  // سعر الوحدة الواحدة
  price: number;
  // الكمية المطلوبة
  quantity: number;
}

// تعريف واجهة حالة سلة المشتريات
interface CartState {
  // قائمة المنتجات في السلة
  items: CartItem[];
  // كود الخصم المطبق إن وجد
  appliedCoupon: string | null;
}

// تعريف نقابة الأفعال Discriminated Union لإدارة السلة
type CartAction =
  // إضافة منتج جديد أو زيادة كميته
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  // تعديل كمية منتج محدد في السلة
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  // إزالة منتج بالكامل عبر معرفه
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  // تطبيق كود خصم ترويجي
  | { type: 'APPLY_COUPON'; payload: { code: string } }
  // إفراغ السلة تماماً
  | { type: 'CLEAR_CART' };

// دالة المخفض الصارمة والمنظمة
function cartReducer(state: CartState, action: CartAction): CartState {
  // فحص نوع الإجراء مع استنتاج فوري لنوع الـ payload
  switch (action.type) {
    // إضافة عنصر جديد
    case 'ADD_ITEM': {
      // فحص ما إذا كان المنتج موجوداً مسبقاً في السلة
      const existingIndex = state.items.findIndex((item) => item.id === action.payload.id);
      // إذا كان موجوداً
      if (existingIndex > -1) {
        // إنشاء نسخة جديدة وتعديل الكمية فقط
        const updated = [...state.items];
        // زيادة كمية العنصر بمقدار 1
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        // إرجاع الحالة المحدثة
        return { ...state, items: updated };
      }
      // إذا كان منتجاً جديداً نضيفه بكمية 1
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }
    // تعديل كمية عنصر
    case 'UPDATE_QUANTITY': {
      // إذا كانت الكمية صفر أو سالبة نزيل العنصر
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id)
        };
      }
      // تعديل كمية العنصر المحدد
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        )
      };
    }
    // إزالة عنصر نهائياً
    case 'REMOVE_ITEM':
      // تصفية المصفوفة لإبقاء العناصر الأخرى
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id)
      };
    // تطبيق كود الخصم
    case 'APPLY_COUPON':
      // حفظ كود الخصم بالحالة
      return {
        ...state,
        appliedCoupon: action.payload.code.toUpperCase()
      };
    // إفراغ السلة
    case 'CLEAR_CART':
      // إعادة الحالة إلى وضع البداية الفارغ
      return {
        items: [],
        appliedCoupon: null
      };
    // ضمان اكتمال التحقق
    default:
      // إرجاع الحالة كما هي
      return state;
  }
}

// مكون سلة التسوق التفاعلي
export function AdvancedCartManager() {
  // تهيئة useReducer بحالة ابتدائية نظيفة
  const [state, dispatch] = useReducer(cartReducer, {
    // قائمة عناصر أولية فارغة
    items: [],
    // لا يوجد كوبون في البداية
    appliedCoupon: null
  });

  // حساب إجمالي السعر التراكمي
  const totalAmount = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // إرجاع الواجهة
  return (
    // حاوية المكون الرئيسية
    <div className="p-6 bg-slate-950 text-white rounded-2xl border border-slate-800">
      {/* عنوان السلة مع إجمالي السعر */}
      <div className="flex justify-between items-center mb-6">
        {/* العنوان */}
        <h2 className="text-xl font-bold text-amber-400">سلة التسوق الذكية (useReducer + TS)</h2>
        {/* الإجمالي */}
        <div className="text-right">
          {/* نص الإجمالي */}
          <span className="text-xs text-slate-400 block">الإجمالي الكلي:</span>
          {/* القيمة المالية */}
          <span className="text-2xl font-bold text-emerald-400">{totalAmount} $</span>
        </div>
      </div>
      {/* أزرار محاكاة لإضافة منتجات تجريبية بنوع مؤمن */}
      <div className="flex gap-2 mb-6">
        {/* زر إضافة هاتف ذكي */}
        <button
          // إرسال حمولة مكتملة الحقول بدون حقل الكمية الذي يحسبه الـ Reducer
          onClick={() =>
            dispatch({
              type: 'ADD_ITEM',
              payload: { id: 'prod-1', title: 'هاتف ذكي Pro', price: 900 }
            })
          }
          // تنسيق الزر
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-semibold transition-all"
        >
          + إضافة هاتف (900$)
        </button>
        {/* زر إضافة سماعة رأس */}
        <button
          // إرسال منتج آخر
          onClick={() =>
            dispatch({
              type: 'ADD_ITEM',
              payload: { id: 'prod-2', title: 'سماعات لاسلكية', price: 150 }
            })
          }
          // تنسيق الزر
          className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl text-sm font-semibold transition-all"
        >
          + إضافة سماعات (150$)
        </button>
      </div>
      {/* قائمة المنتجات الحالية في السلة */}
      <div className="space-y-3 mb-6">
        {/* فحص خلو السلة */}
        {state.items.length === 0 ? (
          // رسالة السلة فارغة
          <p className="text-slate-500 text-center py-4">السلة فارغة، أضف بعض المنتجات لتجربة الأمان النوعي!</p>
        ) : (
          // عرض المنتجات
          state.items.map((item) => (
            // صف المنتج
            <div key={item.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between">
              {/* بيانات المنتج */}
              <div>
                {/* اسم المنتج */}
                <h4 className="font-bold text-slate-200">{item.title}</h4>
                {/* السعر والكمية */}
                <p className="text-sm text-slate-400">{item.price} $ × {item.quantity}</p>
              </div>
              {/* أزرار زيادة ونقصان الكمية وحذف المنتج */}
              <div className="flex items-center gap-2">
                {/* زر زيادة الكمية */}
                <button
                  // إرسال تحديث الكمية بزيادة 1
                  onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } })}
                  // تنسيق الزر
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center font-bold"
                >
                  +
                </button>
                {/* زر إنقاص الكمية */}
                <button
                  // إرسال تحديث الكمية بنقصان 1
                  onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } })}
                  // تنسيق الزر
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center font-bold"
                >
                  -
                </button>
                {/* زر الحذف النهائي */}
                <button
                  // إرسال إجراء الحذف
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}
                  // تنسيق الزر
                  className="px-3 py-1 bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 rounded-lg text-xs font-semibold"
                >
                  حذف
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}`,
      outputExplanation: "من خلال نمط Discriminated Union، يكتشف محرر الأكواد والـ Compiler فوراً أي نقص في حقول `payload`؛ فعند اختيار الإجراء `'ADD_ITEM'` يفرض تمرير الاسم والسعر والمعرف، بينما عند اختيار `'CLEAR_CART'` يمنع كتابة أي `payload` بالخطأ.",
      commonMistakes: [
        {
          mistake: "تعريف الإجراء بنوع عام فضفاض: `{ type: string; payload?: any }`",
          fix: "استخدام Discriminated Union صارم يحدد لكل `type` حمولته الدقيقة والإلزامية بدون استخدام `any` إطلاقاً."
        },
        {
          mistake: "نسيان تحديد النوع المرتجع لدالة الـ reducer مما يؤدي لاختلاط الأنواع",
          fix: "تحديد دالة الـ reducer بوضوح: `function reducer(state: State, action: Action): State`."
        }
      ],
      bestPractices: [
        "استخدم الثوابت الحرفية (String Literal Types) في خاصية `type` داخل كل كائن إجراء.",
        "استعن بالمساعد `Omit<T, K>` لتوليد أنواع حمولات جديدة مقتطعة من الواجهات القائمة لتجنب تكرار الكود."
      ],
      infographic: {
        title: "هندسة Discriminated Unions مع useReducer",
        points: [
          "تعريف نوع لكل إجراء: `{ type: 'ADD'; payload: Item } | { type: 'RESET' }`",
          "داخل الـ switch: TypeScript يستنتج نوع `action.payload` بمجرد فحص `case 'ADD'`",
          "ممنوع إرسال إجراء بدون حقوله المطلوبة: خطأ Compile فوري يمنع الأخطاء الخفية!"
        ]
      }
    },
    {
      id: "14.3.d",
      title: "تعريف الأنواع مع useContext",
      englishTerm: {
        term: "Typing useContext Hook",
        pronunciation: "تايبينغ يوز كونتيكست هوك",
        meaning: "تحديد أنواع سياق React بدقة وتأمين الاستهلاك بواسطة Custom Hook مخصص يفحص القيمة الخالية"
      },
      description: "عند إنشاء سياق في React بواسطة `createContext`، تكون القيمة الابتدائية غالباً غير متاحة قبل تغليف الشجرة بالمزود (Provider)، مما يجعل القيمة المبدئية `null` أو `undefined`. الأسلوب الاحترافي في TypeScript يقتضي تعريف نوع السياق بدقة مثل `createContext<AuthContextType | undefined>(undefined)`، ثم كتابة Custom Hook مثل `useAuth` يقوم بفحص السياق والتأكد من وجود المزود، وإلقاء خطأ توضيحي صريح إذا تم استخدامه خارج المزود، وبالتالي إرجاع قيمة آمنة وخالية من `undefined` للمستهلك.",
      analogy: "يشبه الأمر توصيل جهاز كهربائي ذكي في مأخذ الحائط؛ المأخذ مصمم لتيار كهربائي 220 فولت محدد. بدلاً من تشغيل الجهاز والتعرض للاحتراق إذا كان القاطع الكهربائي مفصولاً، يحتوي القابس على صمام أمان يضيء بالأحمر فوراً ويقول: 'تأكد من تشغيل القاطع أولاً قبل الاستخدام'!",
      whyItMatters: "بدون هذا النمط الآمن، ستضطر في كل مكون يستدعي السياق إلى كتابة `context?.user` ووضع علامات استفهام في كل سطر تحسباً لاحتمال كونه `null`، بينما الخطاف المخصص يضمن أن السياق موجود دائماً مما يمنحك كوداً نظيفاً ومؤمناً 100%.",
      syntax: "interface ContextType { ... }\nconst Context = createContext<ContextType | undefined>(undefined);\n\nexport function useCustom() {\n  const ctx = useContext(Context);\n  if (!ctx) throw new Error('Must be used within Provider');\n  return ctx;\n}",
      simpleExample: `// استيراد الدوال الأساسية من React
import { createContext, useContext, useState, ReactNode } from 'react';

// تعريف نوع السمة: إما فاتح أو داكن
type Theme = 'light' | 'dark';

// تعريف واجهة سياق السمة
interface ThemeContextType {
  // السمة الحالية
  theme: Theme;
  // دالة تبديل السمة
  toggleTheme: () => void;
}

// إنشاء السياق مع قيمة مبدئية undefined ونوع محدد
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// مزود السمة المحيط بالمكونات
export function ThemeProvider({ children }: { children: ReactNode }) {
  // حالة السمة الحالية
  const [theme, setTheme] = useState<Theme>('dark');

  // دالة لتبديل السمة بين الفاتح والداكن
  const toggleTheme = () => {
    // تحديث الحالة للوضع المعاكس
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // تقديم القيمة للأبناء
  return (
    // توفير الكائن المطابق للواجهة تماماً
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* عرض المكونات الفرعية */}
      {children}
    </ThemeContext.Provider>
  );
}

// خطاف مخصص لاستهلاك السمة بأمان تام وبدون undefined
export function useTheme(): ThemeContextType {
  // جلب قيمة السياق
  const context = useContext(ThemeContext);

  // التحقق الحاسم من وجود المزود
  if (!context) {
    // إلقاء خطأ تنبيهي فوري وواضح للمطور
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  // إرجاع السياق المؤكد وجوده
  return context;
}`,
      advancedExample: `// استيراد الأدوات المطلوبة من React
import { createContext, useContext, useState, ReactNode } from 'react';

// تعريف واجهة بيانات المستخدم
interface AuthUser {
  // معرف المستخدم
  id: string;
  // اسم المستخدم
  name: string;
  // دور المستخدم وصلاحياته
  role: 'admin' | 'editor' | 'viewer';
}

// تعريف واجهة سياق المصادقة والصلاحيات
interface AuthContextType {
  // كائن المستخدم الحالي أو null إذا كان زائراً
  user: AuthUser | null;
  // هل النظام في طور التحقق من الجلسة
  isLoading: boolean;
  // دالة تسجيل الدخول
  login: (name: string, role: AuthUser['role']) => Promise<void>;
  // دالة تسجيل الخروج
  logout: () => void;
  // دالة مساعدة للتحقق من صلاحية المدير
  isAdmin: boolean;
}

// إنشاء السياق بنوع واضح وقيمة أولية undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// واجهة خصائص المزود
interface AuthProviderProps {
  // المكونات الفرعية
  children: ReactNode;
}

// مكون مزود المصادقة الشامل
export function AuthProvider({ children }: AuthProviderProps) {
  // حالة المستخدم الحالي
  const [user, setUser] = useState<AuthUser | null>(null);
  // حالة التحميل أثناء الاستعلام
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // دالة محاكاة لتسجيل الدخول غير المتزامن
  const login = async (name: string, role: AuthUser['role']) => {
    // تفعيل حالة التحميل
    setIsLoading(true);
    // محاكاة تأخير الشبكة
    await new Promise((resolve) => setTimeout(resolve, 600));
    // حفظ بيانات المستخدم
    setUser({
      // توليد معرف فريد
      id: crypto.randomUUID(),
      // اسم المستخدم المدخل
      name,
      // الدور الممنوح
      role
    });
    // إنهاء حالة التحميل
    setIsLoading(false);
  };

  // دالة تسجيل الخروج الفوري
  const logout = () => {
    // تصفير بيانات المستخدم
    setUser(null);
  };

  // خاصية محسوبة لمعرفة ما إذا كان المستخدم مديراً
  const isAdmin = user?.role === 'admin';

  // القيمة المجمعة الممرة عبر السياق
  const value: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
    isAdmin
  };

  // إرجاع المزود
  return (
    // توفير القيمة
    <AuthContext.Provider value={value}>
      {/* تصيير الأبناء */}
      {children}
    </AuthContext.Provider>
  );
}

// خطاف مخصص موثوق لاستهلاك سياق المصادقة
export function useAuth(): AuthContextType {
  // قراءة السياق الحالي
  const context = useContext(AuthContext);

  // التحقق الإلزامي من التغليف بالمزود
  if (!context) {
    // رمي استثناء يوضح سبب الخطأ بالتفصيل
    throw new Error('useAuth must be called inside an <AuthProvider /> tree.');
  }

  // إرجاع الكائن الآمن تماماً
  return context;
}

// مكون فرعي يستهلك الخطاف بأعلى درجات الأمان والراحة
export function UserProfileBar() {
  // استدعاء الخطاف المخصص الآمن
  const { user, login, logout, isAdmin, isLoading } = useAuth();

  // إرجاع واجهة الشريط
  return (
    // حاوية الشريط
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between text-white">
      {/* فحص حالة التحميل */}
      {isLoading ? (
        // نص أثناء المعالجة
        <span className="text-slate-400">جاري تسجيل الدخول...</span>
      ) : user ? (
        // تفاصيل المستخدم المسجل
        <div className="flex items-center gap-3">
          {/* اسم المستخدم */}
          <span className="font-bold">{user.name}</span>
          {/* شارة الصلاحية مع تلوين مميز للمدير */}
          <span className={\`text-xs px-2 py-0.5 rounded-md font-semibold \${isAdmin ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-blue-500/20 text-blue-400'}\`}>
            {user.role}
          </span>
          {/* زر تسجيل الخروج */}
          <button
            // استدعاء دالة الخروج
            onClick={logout}
            // تنسيق الزر
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition-colors"
          >
            خروج
          </button>
        </div>
      ) : (
        // أزرار تسجيل الدخول التجريبي
        <div className="flex gap-2">
          {/* دخول كمدير */}
          <button
            // تسجيل الدخول بدور admin
            onClick={() => login('أحمد المدير', 'admin')}
            // تنسيق الزر
            className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold rounded-lg"
          >
            دخول كمدير
          </button>
          {/* دخول كمشاهد */}
          <button
            // تسجيل الدخول بدور viewer
            onClick={() => login('خالد القارئ', 'viewer')}
            // تنسيق الزر
            className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-xs font-semibold rounded-lg"
          >
            دخول كمشاهد
          </button>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "من خلال فحص `if (!context)` داخل Custom Hook، يقوم TypeScript بعمل Type Narrowing تلقائي يستبعد `undefined` تماماً من النوع المرتجع، مما يسمح للمكونات باستهلاك `useAuth()` مباشرة دون الحاجة لأي Optional Chaining.",
      commonMistakes: [
        {
          mistake: "وضع قيمة افتراضية وهمية مثل `{ user: null, login: () => {} }` لإسكات TypeScript عند إنشاء السياق",
          fix: "استخدم `createContext<ContextType | undefined>(undefined)` ثم افحص القيمة في Custom Hook؛ فهذا أفضل معمارياً ويكتشف فوراً نسيان وضع الـ Provider."
        },
        {
          mistake: "تصدير كائن السياق `AuthContext` مباشرة واستدعائه بـ `useContext(AuthContext)` في كل ملف",
          fix: "صدّر Custom Hook مخصصاً مثل `useAuth` فقط، واجعل كائن السياق نفسه داخلياً وغير مكشوف للخارج."
        }
      ],
      bestPractices: [
        "اكتب دائماً Custom Hook مخصصاً لكل Context يتحقق من وجود المزود ويرمي خطأ استباقياً.",
        "حدد نوع قيمة السياق في واجهة مستقلة ونظيفة (Interface) تشمل الدوال والحالات بوضوح."
      ],
      infographic: {
        title: "نمط السياق الآمن مع Custom Hook",
        points: [
          "إنشاء السياق: `createContext<Type | undefined>(undefined)` مع منع القيم الوهمية المضللة.",
          "صمام الأمان في الـ Custom Hook: `if (!ctx) throw new Error(...)` لاكتشاف غياب الـ Provider فوراً.",
          "النتيجة في المكونات: وصول مباشر لخصائص السياق بدون علامات استفهام `?.` ولا أخطاء runtime!"
        ]
      }
    },
    {
      id: "14.3.e",
      title: "كتابة Custom Hooks بأنواع واضحة",
      englishTerm: {
        term: "Typing Custom Hooks",
        pronunciation: "تايبينغ كاستم هوكس",
        meaning: "تحديد أنواع مدخلات ومخرجات الخطافات المخصصة واستخدام as const لتأمين الـ Tuples"
      },
      description: "عند بناء خطاف مخصص (Custom Hook)، يجب تحديد أنواع معاملاته بدقة، بالإضافة لتحديد نوع القيمة المعادة. إذا كان الخطاف يرجع مصفوفة ثنائية (Tuple) تشبه `useState` مثل `[value, setValue]`، فإن TypeScript سيعتبرها مصفوفة عادية من نوع `(Type | Function)[]` مالم نقم بتثبيتها باستخدام تأكيد الثبات `as const` أو تحديد النوع المرتجع كـ `[T, Dispatch]` صراحة، حتى يتعامل معها بترتيب مواضع دقيق لا يقبل اللبس.",
      analogy: "يشبه الأمر تقديم وجبة طعام في طبق مقسم إلى خانتين محددتين: الأولى للشوربة والثانية للحلوى (`as const`). إذا قدمت الوجبة في وعاء مفتوح بدون تقسيم، فقد يختلط عليك الأمر وتغمس الحلوى في الشوربة!",
      whyItMatters: "بدون استخدام `as const`، عند تفكيك المصفوفة المرتجعة `const [val, setVal] = useMyHook()`، لن يعرف المحرر أيهما الدالة وأيهما القيمة، مما يسبب أخطاء فادحة عند محاولة استدعاء الدالة البرمجية.",
      syntax: "function useToggle(initial: boolean): readonly [boolean, () => void] {\n  const [val, setVal] = useState(initial);\n  const toggle = () => setVal((v) => !v);\n  return [val, toggle] as const;\n}",
      simpleExample: `// استيراد useState من React
import { useState } from 'react';

// خطاف مخصص لتبديل حالة منطقية مع تحديد نوع Tuple صارم
export function useToggle(initialValue: boolean = false) {
  // حالة القيمة المنطقية
  const [value, setValue] = useState<boolean>(initialValue);

  // دالة لعكس القيمة الحالية
  const toggle = () => {
    // تبديل القيمة
    setValue((prev) => !prev);
  };

  // دالة لفرض قيمة true
  const setTrue = () => setValue(true);
  // دالة لفرض قيمة false
  const setFalse = () => setValue(false);

  // إرجاع مصفوفة Tuple مقيدة بـ as const للحفاظ على الترتيب والأنواع الفردية
  return [value, toggle, setTrue, setFalse] as const;
}

// مكون تجريبي لاستهلاك الخطاف المخصص
export function ToggleDemo() {
  // تفكيك مخرجات الخطاف مع التعرف الفوري على نوع كل عنصر
  const [isOpen, toggleOpen, openModal, closeModal] = useToggle(false);

  // إرجاع واجهة المستخدم
  return (
    // حاوية المكون
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      {/* حالة التبديل الحالية */}
      <p className="mb-3 font-semibold">
        الحالة الحالية: <span className={isOpen ? 'text-emerald-400' : 'text-rose-400'}>{isOpen ? 'مفتوح' : 'مغلق'}</span>
      </p>
      {/* أزرار التحكم */}
      <div className="flex gap-2">
        {/* زر التبديل العام */}
        <button onClick={toggleOpen} className="px-3 py-1.5 bg-blue-600 rounded-lg text-sm">تبديل</button>
        {/* زر الفتح المباشر */}
        <button onClick={openModal} className="px-3 py-1.5 bg-emerald-600 rounded-lg text-sm">فتح</button>
        {/* زر الإغلاق المباشر */}
        <button onClick={closeModal} className="px-3 py-1.5 bg-rose-600 rounded-lg text-sm">إغلاق</button>
      </div>
    </div>
  );
}`,
      advancedExample: `// استيراد الخطافات المطلوبة من React
import { useState, useEffect } from 'react';

// واجهة توضح أبعاد النافذة المعادة من الخطاف
interface WindowDimensions {
  // عرض النافذة بالبكسل
  width: number;
  // ارتفاع النافذة بالبكسل
  height: number;
  // هل الشاشة بحجم هاتف جوال
  isMobile: boolean;
  // هل الشاشة بحجم جهاز لوحي
  isTablet: boolean;
  // هل الشاشة بحجم حاسوب مكتبي
  isDesktop: boolean;
}

// خطاف مخصص احترافي لمراقبة أبعاد نافذة المتصفح بنوع عائد محدد
export function useWindowDimensions(): WindowDimensions {
  // دالة مساعدة للحصول على الأبعاد الحالية بدقة
  const getDimensions = (): WindowDimensions => {
    // التحقق من بيئة العمل في المتصفح
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
    // جلب الارتفاع
    const height = typeof window !== 'undefined' ? window.innerHeight : 800;

    // إرجاع الكائن المطابق للواجهة
    return {
      width,
      height,
      // تصنيف الهواتف أقل من 768px
      isMobile: width < 768,
      // تصنيف الأجهزة اللوحية بين 768px و 1024px
      isTablet: width >= 768 && width < 1024,
      // تصنيف الحواسيب المكتبية من 1024px فما فوق
      isDesktop: width >= 1024
    };
  };

  // حالة أبعاد النافذة
  const [dimensions, setDimensions] = useState<WindowDimensions>(getDimensions);

  // تأثير جانبي لمتابعة حدث تغيير حجم النافذة resize
  useEffect(() => {
    // دالة معالج الحدث
    const handleResize = () => {
      // تحديث الحالة بالأبعاد الجديدة
      setDimensions(getDimensions());
    };

    // الاستماع لحدث تغيير الحجم في المتصفح
    window.addEventListener('resize', handleResize);

    // تنظيف المستمع عند إلغاء المكون
    return () => {
      // إزالة مستمع الحدث
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // إرجاع الأبعاد المحدثة
  return dimensions;
}

// مكون تجريبي يعرض تفاصيل شاشة المستخدم
export function DimensionInspector() {
  // استدعاء الخطاف المخصص مع التمتع بالإكمال التلقائي لكل خاصية
  const { width, height, isMobile, isTablet, isDesktop } = useWindowDimensions();

  // إرجاع الواجهة
  return (
    // حاوية العرض
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      {/* عنوان الخطاف */}
      <h3 className="text-lg font-bold text-cyan-400 mb-4">فاحص أبعاد الشاشة (Custom Hook)</h3>
      {/* جدول أو بطاقات المعلومات */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* بطاقة العرض */}
        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
          <span className="text-xs text-slate-400 block">العرض الحقيقي:</span>
          <span className="text-xl font-bold font-mono text-emerald-400">{width} px</span>
        </div>
        {/* بطاقة الارتفاع */}
        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
          <span className="text-xs text-slate-400 block">الارتفاع الحقيقي:</span>
          <span className="text-xl font-bold font-mono text-emerald-400">{height} px</span>
        </div>
      </div>
      {/* شارة تصنيف الجهاز الحالي */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-300">نوع الجهاز المكتشف:</span>
        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg text-xs font-bold">
          {isMobile ? '📱 هاتف جوال' : isTablet ? '💻 جهاز لوحي' : '🖥️ شاشة حاسوب'}
        </span>
      </div>
    </div>
  );
}`,
      outputExplanation: "يستفيد الكود من إرجاع كائن منظم يحمل واجهة `WindowDimensions` محددة، أو استخدام `as const` عند إرجاع مصفوفة Tuples، مما يمنع تحويل الأنواع إلى اتحادات عريضة ويضمن تجربة تطوير سلسة وخالية من الأخطاء.",
      commonMistakes: [
        {
          mistake: "إرجاع مصفوفة `[value, setValue]` من الخطاف بدون `as const`",
          fix: "إضافة `as const` في نهاية الإرجاع `return [value, setValue] as const;` لتثبيت مواضع وأنواع العناصر."
        },
        {
          mistake: "إهمال كتابة نوع الإرجاع للدوال المساعدة مما يجعل الاستنتاج غامضاً",
          fix: "تحديد نوع العائد الصريح في رأس الدالة: `function useMyHook(): ReturnType`."
        }
      ],
      bestPractices: [
        "إذا كان الخطاف يرجع أكثر من 2 من المخرجات، فضل إرجاع كائن `{ data, error, isLoading }` بدلاً من مصفوفة لتسهيل القراءة وتجنب أخطاء الترتيب.",
        "استخدم `as const` مع المصفوفات المرتجعة دائماً لتضمن معاملتها كـ Tuples دقيقة."
      ],
      infographic: {
        title: "إرجاع القيم من Custom Hooks",
        points: [
          "إرجاع Tuples (عنصرين غالباً): يلزم كتابة `return [state, setState] as const;` لتثبيت نوع كل موضع.",
          "إرجاع كائن (أكثر من عنصرين): يفضل إرجاع Object مع Interface واضحة لسهولة التفكيك بالاسم.",
          "النوع المرتجع الصريح: كتابة نوع الإرجاع في رأس الخطاف تسرع تدقيق TypeScript وتمنع الانحرافات."
        ]
      }
    },
    {
      id: "14.3.f",
      title: "استخدام Generics في Hooks",
      englishTerm: {
        term: "Generics in React Hooks",
        pronunciation: "جينيريكس إن رياكت هوكس",
        meaning: "بناء خطافات مخصصة عامة وقابلة لإعادة الاستخدام مع أي نوع بيانات مستقبلي دون التنازل عن الأمان الصارم"
      },
      description: "تعتبر المعاملات العامة (Generics) من أقوى إمكانيات TypeScript، وعند دمجها مع خطافات React المخصصة مثل `useLocalStorage<T>` أو `useFetch<T>`، تمنحنا القدرة على كتابة منطق برمجي واحد متعدد الاستخدامات يعمل مع نصوص، أرقام، مصفوفات، أو كائنات مخصصة، مع الحفاظ الكامل على التحقق من صحة النوع الخاص بكل استخدام على حدة دون الحاجة لكتابة كود مكرر.",
      analogy: "تشبه المعاملات العامة قوالب صناعة المعجنات؛ الهيكل الحديدي للقالب واحد وثابت، ولكن يمكنك ملأه بالتمر أو الجبن أو الشوكولاتة؛ في كل مرة يخرج المنتج النهائي بالشكل المطلوب والمذاق الذي اخترته دون الحاجة لصناعة آلة جديدة لكل حشوة!",
      whyItMatters: "بدون الـ Generics، ستضطر إما لكتابة خطاف منفصل لكل نوع بيانات (`useUserLocalStorage`, `useSettingsLocalStorage`...) أو اللجوء للنوع الخطير `any` الذي يعطل الرقابة البرمجية ويسمح بحدوث كوارث في زمن التشغيل.",
      syntax: "function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T) => void] {\n  // المنطق المشترك...\n}",
      simpleExample: `// استيراد useState و useEffect من React
import { useState, useEffect } from 'react';

// خطاف تخزين محلي عام Generic يدعم أي نوع بيانات يختاره المطور
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // قراءة القيمة الأولية من التخزين المحلي إن وجدت مع التحويل البرمجي
  const [storedValue, setStoredValue] = useState<T>(() => {
    // التحقق من بيئة المتصفح
    if (typeof window === 'undefined') return initialValue;
    try {
      // قراءة العنصر من الـ localStorage
      const item = window.localStorage.getItem(key);
      // إذا وجد نفكك النص إلى كائن من النوع T، وإلا نرجع القيمة الأولية
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      // في حال حدوث خطأ أثناء القراءة نرجع القيمة الأولية
      console.error(error);
      return initialValue;
    }
  });

  // دالة لتحديث القيمة في الحالة وفي التخزين المحلي معاً
  const setValue = (value: T) => {
    try {
      // حفظ القيمة في الحالة
      setStoredValue(value);
      // حفظ القيمة كنص في التخزين المحلي
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      // طباعة الخطأ إن فشل التخزين
      console.error(error);
    }
  };

  // إرجاع القيمة ودالة التحديث كـ Tuple
  return [storedValue, setValue];
}

// مثال عملي لاستهلاك الخطاف مع نوع رقمي محدد تلقائياً
export function GenericHookSimpleDemo() {
  // يستنتج TypeScript تلقائياً أن T هي number
  const [count, setCount] = useLocalStorage<number>('app_visit_count', 0);

  // إرجاع واجهة العداد
  return (
    // حاوية المكون
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      {/* عرض القيمة المخزنة مع الاحتفاظ بها حتى بعد تحديث الصفحة */}
      <p className="mb-2">عدد الزيارات المخزن: <span className="text-emerald-400 font-bold">{count}</span></p>
      {/* زر زيادة الزيارات */}
      <button onClick={() => setCount(count + 1)} className="px-3 py-1.5 bg-blue-600 rounded-lg text-sm">
        زيادة وتخزين
      </button>
    </div>
  );
}`,
      advancedExample: `// استيراد الخطافات المطلوبة من React
import { useState, useEffect } from 'react';

// واجهة تصف نتيجة جلب البيانات العامة
interface FetchState<T> {
  // البيانات المجوبة وتطابق النوع العام T
  data: T | null;
  // حالة التحميل الحالية
  isLoading: boolean;
  // رسالة الخطأ إن وجد
  error: string | null;
}

// خطاف مخصص عام لجلب البيانات من أي مسار مع دعم كامل للأنواع
export function useFetchData<T>(url: string): FetchState<T> {
  // تهيئة الحالة بالنوع العام T
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null
  });

  // تأثير جانبي لجلب البيانات عند تغير الرابط
  useEffect(() => {
    // مؤشر لمعرفة ما إذا كان المكون ما زال نشطاً لمنع التحديث بعد الإلغاء
    let isMounted = true;
    // إنشاء كائن تحكم لإلغاء طلب الشبكة عند الحاجة
    const controller = new AbortController();

    // دالة الجلب غير المتزامنة
    const fetchData = async () => {
      // تفعيل حالة التحميل
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        // تنفيذ طلب الشبكة
        const response = await fetch(url, { signal: controller.signal });
        // التحقق من نجاح الاستجابة
        if (!response.ok) {
          throw new Error(\`خطأ في الخادم: \${response.status}\`);
        }
        // تحويل البيانات وحقنها في النوع العام المحدد T
        const result = (await response.json()) as T;

        // إذا كان المكون نشطاً نحدث الحالة
        if (isMounted) {
          setState({
            data: result,
            isLoading: false,
            error: null
          });
        }
      } catch (err: unknown) {
        // فحص ما إذا كان الخطأ بسبب إلغاء الطلب
        if (err instanceof Error && err.name === 'AbortError') {
          return;
        }
        // معالجة الأخطاء وتحديث الحالة
        if (isMounted) {
          setState({
            data: null,
            isLoading: false,
            error: err instanceof Error ? err.message : 'حدث خطأ غير معروف'
          });
        }
      }
    };

    // تنفيذ عملية الجلب
    fetchData();

    // دالة التنظيف
    return () => {
      // إيقاف إمكانية التحديث
      isMounted = false;
      // إلغاء طلب الشبكة الجاري
      controller.abort();
    };
  }, [url]);

  // إرجاع كائن الحالة
  return state;
}

// تعريف واجهة لمنشور مدونة محدد
interface BlogPost {
  id: number;
  title: string;
  body: string;
}

// مكون يستهلك الخطاف العام مع تمرير نوع BlogPost كـ Generic
export function GenericFetchDemo() {
  // استدعاء الخطاف وتمرير BlogPost[] كنوع مرجو من الخادم
  const { data: posts, isLoading, error } = useFetchData<BlogPost[]>('https://jsonplaceholder.typicode.com/posts?_limit=3');

  // إرجاع واجهة المستخدم
  return (
    // حاوية المكون
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      {/* عنوان المكون */}
      <h3 className="text-xl font-bold text-emerald-400 mb-4">عرض المنشورات بخطاف useFetchData&lt;T&gt; العام</h3>
      {/* فحص حالة التحميل */}
      {isLoading && <p className="text-slate-400 animate-pulse">جاري تحميل البيانات الآمنة...</p>}
      {/* فحص حالة الخطأ */}
      {error && <p className="text-rose-400">حدث خطأ: {error}</p>}
      {/* عرض المنشورات بعد التحميل بنوع BlogPost المكتمل */}
      <div className="space-y-3">
        {posts?.map((post) => (
          // بطاقة المنشور
          <div key={post.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
            {/* عنوان المنشور مع إكمال تلقائي كامل لخصائص post */}
            <h4 className="font-bold text-cyan-300 mb-1">{post.title}</h4>
            {/* نص المنشور */}
            <p className="text-sm text-slate-400">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوفر استخدام الـ Generic `<T>` للخطافات مرونة لا نهائية؛ فنفس الخطاف `useFetchData` يمكن استخدامه لجلب `User[]`، أو `ProductDetails`، أو `AppSettings`، مع ضمان معرفة المحرر بالخصائص المتاحة داخل `data` في كل مرة.",
      commonMistakes: [
        {
          mistake: "استخدام `any` داخل الخطاف بدلاً من `<T>`: `function useData(url: string): any`",
          fix: "استخدم المعاملات العامة: `function useData<T>(url: string): { data: T | null }` للحفاظ على الأمان النوعي."
        },
        {
          mistake: "عدم توفير قيمة افتراضية للمعامل العام إذا كانت هناك حالة شائعة",
          fix: "يمكنك كتابة `<T = unknown>` لتوفير نوع احتياطي إن لم يحدده المطور صراحة."
        }
      ],
      bestPractices: [
        "ضع قيوداً على الـ Generic باستخدام `extends` عندما يتطلب منطق الخطاف خصائص معينة مثل `<T extends { id: string }>`.",
        "استغل Type Inference قدر الإمكان، ودع TypeScript يستنتج نوع `T` من القيمة الابتدائية الممرة كلما كان ذلك متاحاً."
      ],
      infographic: {
        title: "قوة Generics في خطافات React",
        points: [
          "شفرة واحدة لجميع الأنواع: `useLocalStorage<T>` يعمل مع النصوص والأرقام والكائنات المعقدة.",
          "أمان مطلق بدون any: البيانات المعادة تحافظ على هويتها ونوعها الأصلي بنسبة 100%.",
          "إكمال تلقائي فوري: المحرر يتعرف على كل خاصية في النتيجة المسترجعة تلقائياً."
        ]
      }
    },
    {
      id: "14.3.g",
      title: "التعامل الآمن مع Nullable Values",
      englishTerm: {
        term: "Safe Handling of Nullable Values",
        pronunciation: "سيف هاندلينغ أوف نل آبل فاليوز",
        meaning: "التقنيات البرمجية لتفادي أخطاء القيم الخالية وغير المعرفة مثل الـ Optional Chaining وعوامل الدمج وحراس الأنواع"
      },
      description: "في تطبيقات الويب، تكون العديد من البيانات في الـ State خالية في البداية (`null` أو `undefined`) ريثما تكتمل طلبات الشبكة أو مدخلات المستخدم. يوفر TypeScript بالتعاون مع ميزات JavaScript الحديثة أدوات قوية للتعامل الآمن مع هذه القيم، مثل: معامل التسلسل الاختياري (`?.`)، معامل الاندماج مع القيمة الخالية (`??`)، حراس الأنواع (Type Guards)، والابتعاد الحازم عن عامل التأكيد غير الخالي الخطير (`!`).",
      analogy: "يشبه الأمر فحص عمق بركة ماء بعصا طويلة قبل القفز فيها (`?.`)؛ إذا كانت جافة تضع قدماً على سلم آمن بديل (`??`). بينما استخدام المعامل (`!`) يشبه القفز معصوب العينين والصراخ 'أنا واثق بنسبة 100% أن هناك ماءً!'، مما قد ينتهي بك بارتطام مؤلم بالأرضية الصلبة!",
      whyItMatters: "يعتبر الخطأ `TypeError: Cannot read properties of undefined` أشهر سبب لانهيار تطبيقات React في واجهات المستخدم؛ وتطبيق استراتيجيات Nullable الصارمة في TypeScript يمحو هذا الخطأ تماماً من تطبيقك قبل وصوله للمستخدمين.",
      syntax: "// Optional Chaining:\nconst name = user?.profile?.name;\n\n// Nullish Coalescing:\nconst displayName = name ?? 'ضيف مجهول';\n\n// Type Guard:\nif (user !== null) { ... }",
      simpleExample: `// تعريف واجهة بيانات العميل المحتمل
interface Customer {
  // المعرف
  id: number;
  // الاسم
  name: string;
  // تفاصيل العنوان قد تكون غير موجودة
  address?: {
    // المدينة
    city: string;
    // الشارع
    street?: string;
  };
}

// مكون عرض بطاقة العميل بأمان تام
export function SafeCustomerCard({ customer }: { customer: Customer | null }) {
  // قراءة المدينة باستخدام Optional Chaining وتوفير بديل بـ Nullish Coalescing
  const city = customer?.address?.city ?? 'المدينة غير محددة';

  // قراءة الشارع مع توفير بديل
  const street = customer?.address?.street ?? 'الشارع غير متوفر';

  // إرجاع واجهة المكون
  return (
    // حاوية البطاقة
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      {/* فحص وجود العميل ككل */}
      {customer ? (
        // في حال وجود العميل
        <div>
          {/* اسم العميل */}
          <h4 className="font-bold text-lg text-emerald-400">{customer.name}</h4>
          {/* تفاصيل العنوان بأمان تام ودون أي خطر لحدوث runtime error */}
          <p className="text-sm text-slate-300">المدينة: {city}</p>
          <p className="text-sm text-slate-400">الشارع: {street}</p>
        </div>
      ) : (
        // في حال كانت القيمة null بالكامل
        <p className="text-amber-400">لا توجد بيانات عميل لعرضها.</p>
      )}
    </div>
  );
}`,
      advancedExample: `// استيراد useState من React
import { useState } from 'react';

// تعريف واجهة إعدادات الحساب مع خصائص متداخلة وقابلة للنقص
interface AccountSettings {
  id: string;
  email: string;
  preferences?: {
    theme?: 'dark' | 'light';
    notifications?: {
      email?: boolean;
      sms?: boolean;
    };
  };
}

// دالة حارس نوع مخصصة (Custom Type Guard) للتحقق من سلامة الإعدادات
function hasNotificationSettings(
  settings: AccountSettings | null
): settings is AccountSettings & { preferences: { notifications: { email: boolean } } } {
  // التحقق المتدرج من السلسلة كاملة
  return (
    settings !== null &&
    settings.preferences !== undefined &&
    settings.preferences.notifications !== undefined &&
    typeof settings.preferences.notifications.email === 'boolean'
  );
}

// مكون لوحة تحكم الإعدادات الآمنة
export function SafeSettingsDashboard() {
  // حالة الإعدادات تبدأ بـ null لمحاكاة انتظار الـ API
  const [settings, setSettings] = useState<AccountSettings | null>(null);

  // دالة محاكاة تحميل الإعدادات
  const loadMockData = () => {
    // تعيين بيانات تجريبية
    setSettings({
      id: 'acc-992',
      email: 'user@domain.com',
      preferences: {
        theme: 'dark',
        notifications: {
          email: true,
          sms: false
        }
      }
    });
  };

  // دالة تصفير البيانات لاختبار الحماية
  const clearData = () => setSettings(null);

  // استخراج الإشعارات البريدية بأمان عبر الحارس المخصص
  const isEmailAlertEnabled = hasNotificationSettings(settings)
    ? settings.preferences.notifications.email
    : false;

  // إرجاع واجهة المستخدم
  return (
    // حاوية المكون
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      {/* عنوان اللوحة */}
      <h3 className="text-xl font-bold text-indigo-400 mb-4">لوحة الإعدادات المحمية من أخطاء Null</h3>
      {/* أزرار التجربة والتبديل */}
      <div className="flex gap-2 mb-6">
        <button onClick={loadMockData} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-semibold">
          تحميل بيانات الإعدادات
        </button>
        <button onClick={clearData} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-semibold">
          مسح (تعيين Null)
        </button>
      </div>
      {/* عرض البيانات بطرق حماية متقدمة */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
        {/* استعراض البريد مع حماية Nullish Coalescing */}
        <div className="flex justify-between border-b border-slate-800 pb-2">
          <span className="text-slate-400 text-sm">البريد الإلكتروني:</span>
          <span className="font-mono text-emerald-400">{settings?.email ?? 'غير محدد'}</span>
        </div>
        {/* استعراض المظهر مع قيمة افتراضية صريحة */}
        <div className="flex justify-between border-b border-slate-800 pb-2">
          <span className="text-slate-400 text-sm">المظهر المفضل:</span>
          <span className="font-semibold text-slate-200">{settings?.preferences?.theme ?? 'النظام التلقائي'}</span>
        </div>
        {/* استعراض إشعارات البريد المحمية بحارس النوع Type Guard */}
        <div className="flex justify-between items-center">
          <span className="text-slate-400 text-sm">إشعارات البريد الإلكتروني:</span>
          <span className={\`px-2.5 py-0.5 rounded-full text-xs font-bold \${isEmailAlertEnabled ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}\`}>
            {isEmailAlertEnabled ? 'مفعلة ✅' : 'معطلة أو غير متوفرة ❌'}
          </span>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "الكود يجمع بين Optional Chaining لحماية الاستدعاءات المتداخلة، ومعامل Nullish Coalescing لتوفير قيم بديلة منطقية، وحارس نوع Type Guard للتأكد الصارم من بنية الكائن دون التسبب في أي انهيار للواجهة.",
      commonMistakes: [
        {
          mistake: "استخدام عامل التأكيد غير الخالي `user!.profile!.name` لتسكيت تحذيرات TypeScript",
          fix: "استخدم `user?.profile?.name` مع توفير بديل بـ `??` لتفادي انهيار التطبيق إذا كانت القيمة خالية فعلاً في زمن التشغيل."
        },
        {
          mistake: "استخدام المعامل المنطقي `||` بدلاً من `??`، مما يستبدل القيم الصفرية `0` أو النصوص الفارغة `\"\"` بقيم افتراضية غير مرغوبة",
          fix: "استخدم `??` دائماً عندما تريد التحقق حصراً من `null` أو `undefined` دون التأثر بالقيم الصفرية الصالحة."
        }
      ],
      bestPractices: [
        "تجنب عامل التأكيد `!` (Non-null assertion) إلا في الحالات النادرة جداً التي ثبت فيها وجود القيمة برهانياً.",
        "استخدم Type Guards دوماً عند التعامل مع استجابات الـ API أو المدخلات الخارجية المعقدة."
      ],
      infographic: {
        title: "درع الأمان ضد قيم Null و Undefined",
        points: [
          "التسلسل الاختياري `?.`: فحص آمن لكل مرحلة تداخل بدون TypeError.",
          "الدمج الخالي `??`: توفير بديل فقط إذا كانت القيمة `null` أو `undefined` دون مساس بالصفر أو false.",
          "حراس الأنواع Type Guards: أسلوب تضييق رسمي يخبر TypeScript بضمان وجود الخصائص المتداخلة."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q14.3.1",
      question: "ما النتيجة البرمجية عند كتابة `const [items, setItems] = useState([]);` في ملف TypeScript؟",
      options: [
        "يستنتج TypeScript أن items مصفوفة من نوع any[] تقبل أي قيمة",
        "يستنتج TypeScript أن items مصفوفة من نوع never[] ويرفض إضافة أي عناصر إليها لاحقاً",
        "يحدث خطأ تجميع Syntax Error يمنع تشغيل المشروع فورا",
        "يقوم TypeScript تلقائياً بتحويلها إلى مصفوفة نصوص string[]"
      ],
      correctAnswer: 1,
      explanation: "عند تمرير مصفوفة فارغة بدون تحديد نوع Generic، يستنتج TypeScript النوع `never[]` مما يجعل محاولة إضافة أي عنصر جديد بمثابة خطأ نوعي، والحل الصحيح هو: `useState<Item[]>([]);`."
    },
    {
      id: "q14.3.2",
      question: "لماذا نستخدم `as const` عند إرجاع مصفوفة Tuples مثل `[value, toggle] as const` من Custom Hook؟",
      options: [
        "لتحسين أداء المتصفح وسرعة تنفيذ جافاسكربت",
        "لتجميد المصفوفة حتى لا يمكن التعديل عليها في زمن التشغيل",
        "لإخبار TypeScript بتثبيت أنواع ومواضع العناصر في الـ Tuple بدلاً من تحويلها إلى Union عريض `(boolean | Function)[]`",
        "لأن React تفرض استخدامها مع كافة الخطافات المخصصة"
      ],
      correctAnswer: 2,
      explanation: "بدون `as const`، يعتبر TypeScript المصفوفة المعادة مصفوفة عادية تحتوي خليطاً من الأنواع، وبالتالي يفقد كل موضع نوعه المحدد بدقة، بينما `as const` تثبت الترتيب والأنواع الفردية لكل عنصر."
    },
    {
      id: "q14.3.3",
      question: "ما هو الخيار الأفضل معمارياً لتعريف سياق React مع TypeScript؟",
      options: [
        "وضع كائن وهمي مليء بدوال فارغة `createContext({ user: null, login: () => {} })`",
        "تعريف السياق بـ `createContext<ContextType | undefined>(undefined)` وفحص القيمة داخل Custom Hook مخصص يرمي خطأً إذا غاب المزود",
        "استخدام النوع `any` للسياق لتسهيل الوصول للبيانات في كافة المكونات",
        "عدم استخدام createContext في TypeScript واستبداله دائماً بمكتبة خارجية"
      ],
      correctAnswer: 1,
      explanation: "البدء بـ `undefined` ثم الفحص الصارم داخل Custom Hook يضمن تنبيه المطور فوراً إذا نسي إحاطة المكون بالمزود، ويمنح المكونات استهلاكاً آمناً بدون علامات استفهام اختيارية غير ضرورية."
    }
  ],
  exercise: {
    id: "ex-14.3",
    title: "تمرين عملي: بناء خطاف useToggle المتكامل وخطاف useDebounce العام بأنواع صارمة",
    description: "قم بإنشاء خطافين مخصصين بأنواع TypeScript متكاملة:\n1. خطاف `useToggle` يدعم قيمة أولية اختيارية ويرجع `[state, toggle, setTrue, setFalse] as const`.\n2. خطاف عام `useDebounce<T>` يستقبل قيمة من أي نوع `T` وفترة تأخير بالميلي ثانية، ويرجع القيمة بعد انتهاء التأخير مع حفظ أمان النوع بالكامل.",
    hints: [
      "تذكر استخدام `as const` في نهاية إرجاع مصفوفة خطاف `useToggle`.",
      "في خطاف `useDebounce<T>` استخدم المعامل العام `<T>` في تعريف الدالة والـ State الخاص به.",
      "احرص على تنظيف المؤقت `clearTimeout` داخل دالة التنظيف الخاصة بـ `useEffect`."
    ],
    solution: `// استيراد useState و useEffect من React
import { useState, useEffect } from 'react';

// 1. خطاف useToggle الموثق بأنواع Tuple صارمة
export function useToggle(initialValue: boolean = false) {
  // تعريف حالة القيمة المنطقية
  const [value, setValue] = useState<boolean>(initialValue);

  // دالة لعكس القيمة الحالية
  const toggle = () => setValue((prev) => !prev);
  // دالة لجعل القيمة صائبة
  const setTrue = () => setValue(true);
  // دالة لجعل القيمة خاطئة
  const setFalse = () => setValue(false);

  // إرجاع مصفوفة Tuple مقيدة بـ as const
  return [value, toggle, setTrue, setFalse] as const;
}

// 2. خطاف useDebounce العام Generic
export function useDebounce<T>(value: T, delayMs: number = 500): T {
  // حالة القيمة المؤخرة بنفس النوع العام T
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  // تأثير جانبي يتم تشغيله كلما تغيرت القيمة أو فترة التأخير
  useEffect(() => {
    // إنشاء مؤقت زمني لتحديث القيمة بعد انقضاء التأخير
    const timer = setTimeout(() => {
      // تحديث الحالة بالقيمة الجديدة
      setDebouncedValue(value);
    }, delayMs);

    // دالة تنظيف لإلغاء المؤقت إذا تغيرت القيمة قبل اكتمال المدة
    return () => {
      clearTimeout(timer);
    };
  }, [value, delayMs]);

  // إرجاع القيمة المؤخرة بأمان نوعي كامل
  return debouncedValue;
}`
  },
  infographic: {
    title: "خريطة TypeScript المتقدمة مع خطافات React",
    nodes: [
      { id: "1", title: "useState", desc: "استنتاج للبدائيات + Generic للمصفوفات والكائنات" },
      { id: "2", title: "useRef", desc: "نوع DOM عنصر للقراءة + نوع Mutable للمتغيرات" },
      { id: "3", title: "useReducer", desc: "أفعال مميزة Discriminated Unions تمنع إرسال حمولة خاطئة" },
      { id: "4", title: "useContext", desc: "بدء بـ undefined وحماية عبر Custom Hook يرمي خطأ استباقياً" },
      { id: "5", title: "Custom Hooks", desc: "تثبيت Tuples بـ as const أو إرجاع Objects محددة بـ Interface" },
      { id: "6", title: "Generics", desc: "منطق موحد قابل للاستخدام مع أي نوع T دون التفريط في الأمان" }
    ]
  }
};
