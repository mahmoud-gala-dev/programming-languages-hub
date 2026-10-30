// src/data/sections/section12/topic1.js
// القسم 12: إدارة الحالة المتقدمة - الموضوع 1: تصنيف أنواع الحالة

export const topic1 = {
  id: "12.1",
  title: "تصنيف أنواع الحالة",
  description: "التمييز المعماري الدقيق بين أنواع الحالات الست في تطبيقات React (Local UI, Shared Client, Server, URL, Form, Derived)، واستراتيجيات اختيار الوعاء التخزيني الأمثل لكل نوع، ومعايير اتخاذ القرار للانتقال إلى مكتبات إدارة الحالة الخارجية.",
  subtopics: [
    {
      id: "12.1.a",
      title: "Local UI State",
      englishTerm: "Local UI State (حَالَةُ وَاجِهَةِ المُسْتَخْدِمِ المَحَلِّيَّة: البيانات الخاصة بمكون واحد)",
      description: "الحالة المحلية (Local State) هي البيانات المحصورة داخل مكون واحد فقط وتتحكم في سلوكه ومظهره البصري المباشر، مثل: هل القائمة المنسدلة مفتوحة أم مغلقة؟ هل حقل كلمة المرور مكشوف أم مخفي؟ هل التبويب رقم 2 هو النشط حالياً؟ هذه البيانات لا تهم أي مكون آخر في شجرة التطبيق، ويتم إدارتها حصراً ومثالياً باستخدام خطاف `useState` أو `useReducer` داخل المكون نفسه دون أي حاجة لمكتبات خارجية.",
      analogy: "مثل جيب بنطالك الشخصي: تضع فيه مفتاح سيارتك ومنديلك الخاص؛ هذه الأشياء تخصك وحدك ولا يحتاج باقي أفراد العائلة أو زملاؤك في العمل للوصول إليها أو معرفة تفاصيلها.",
      whyItMatters: "حفظ الحالة محلياً يمنع إعادة تصيير شجرة المكونات الأبوية، ويبقي المكون مستقلاً وقابلاً لإعادة الاستخدام في أي مكان دون اعتماديات معقدة.",
      syntax: "const [isOpen, setIsOpen] = useState(false);",
      simpleExample: `import React, { useState } from 'react';

// مكون يستخدم حالة محلية بسيطة لفتح وإغلاق صندوق المساعدة
function CollapsibleHelpBox() {
  // حالة محلية تماماً لا تهم سوى هذا المكون
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'إخفاء المساعدة 🔼' : 'عرض المساعدة 🔽'}
      </button>

      {isOpen && (
        <p style={{ marginTop: '8px', color: '#555' }}>
          هذه معلومات مساعدة محلية تخص هذا المكون فقط ولا تؤثر على باقي التطبيق.
        </p>
      )}
    </div>
  );
}`,
      advancedExample: `import React, { useState } from 'react';

// مكون بطاقة ائتمانية تفاعلي يدير حالة الكشف والنسخ محلياً
function SecureCardViewer({ cardNumber, cvv }) {
  // حالتان محليتان للرؤية والنسخ
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cardNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm text-white text-right space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-xs text-slate-400">بطاقة الدفع المعتمدة</span>
        <button
          onClick={() => setIsRevealed(!isRevealed)}
          className="text-xs text-blue-400 hover:underline"
        >
          {isRevealed ? '👁️ إخفاء الأرقام' : '👁️‍🗨️ كشف الأرقام'}
        </button>
      </div>

      <div className="font-mono text-lg tracking-wider text-emerald-400">
        {isRevealed ? cardNumber : '•••• •••• •••• ' + cardNumber.slice(-4)}
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-xs">
        <span className="text-slate-400">رمز الأمان: {isRevealed ? cvv : '•••'}</span>
        <button
          onClick={handleCopy}
          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition"
        >
          {copied ? 'تم النسخ ✔️' : 'نسخ الرقم 📋'}
        </button>
      </div>
    </div>
  );
}`,
      output: "تحكم موضعي فائق الرشاقة داخل البطاقة دون التأثير على أي مكون خارجي أو استنزاف موارد الذاكرة العامة.",
      commonMistakes: [
        {
          mistake: "رفع الحالات البصرية البسيطة (مثل isOpen أو isHovered) إلى Redux أو Zustand العام.",
          fix: "اترك الحالات البصرية المحلية داخل المكون بـ useState، ولا ترفع للحالة العامة سوى البيانات المشتركة فعلياً.",
          explanation: "وضع الحالات المحلية في متجر عام يسبب إعادة تصيير مفرطة ويجعل المتجر العام متضخماً ومليئاً ببيانات تافهة."
        }
      ],
      bestPractices: [
        "ابدأ دائماً بجعل الحالة محلية في المكون (Colocation Principle) ولا ترفعها إلا عندما يطلبها مكون شقيق أو أب.",
        "استخدم useReducer محلياً إذا كانت الحالة المحلية تضم عدة خيارات أو انتقالات معقدة."
      ],
      infographic: {
        title: "خصائص الحالة المحلية (Local UI State)",
        elements: [
          { label: "النطاق", role: "محصورة بنسبة 100% داخل المكون الذي عرفها", color: "blue" },
          { label: "الأداة المناسبة", role: "useState للقيم البسيطة و useReducer للقيم المتشعبة", color: "emerald" },
          { label: "أمثلة شائعة", role: "فتح/إغلاق المودال، كشف كلمة المرور، تبديل الثيم الموضعي", color: "purple" },
          { label: "أفضل ممارسة", role: "عدم ترحيلها إلى المتجر العام العالمي Global Store", color: "amber" }
        ]
      }
    },
    {
      id: "12.1.b",
      title: "Shared Client State",
      englishTerm: "Shared Client State (حَالَةُ العَمِيلِ المُشْتَرَكَةِ: البيانات المتبادلة بين عدة مكونات)",
      description: "الحالة المشتركة للعميل هي بيانات يتم إنشاؤها واستخدامها في المتصفح، ولكن تحتاج إليها عدة مكونات متباعدة في شجرة التطبيق لا تجمعها علاقة أب وابن مباشرة. تشمل الأمثلة: بيانات جلسة المستخدم الحالي (كائن User)، سلة المشتريات (Cart Items)، السمة اللونية العالمية (Dark/Light Mode)، وقائمة الإشعارات المنبثقة النشطة. يتم إدارتها عادةً عبر Context API أو مكتبات الحالة مثل Zustand و Redux Toolkit.",
      analogy: "مثل الثلاجة المشتركة في مطبخ شقة يتقاسمها ثلاثة أصدقاء: الأصدقاء يملكون غرفاً مستقلة (مكونات)، ولكن الحليب والبيض والماء موجودون في الثلاجة المركزية (Shared State) في الصالة ليستخدمها الجميع بحرية متى شاؤوا.",
      whyItMatters: "تقضي على ظاهرة تمرير الخصائص المضني (Props Drilling عبر 10 مستويات)، وتضمن تناسق البيانات عبر كافة شاشات وأشرطة التطبيق في اللحظة نفسها.",
      syntax: "// Zustand Store:\nexport const useCartStore = create((set) => ({\n  items: [],\n  addItem: (item) => set((s) => ({ items: [...s.items, item] }))\n}));",
      simpleExample: `import React, { createContext, useContext, useState } from 'react';

// إنشاء سياق مشترك لسلة المشتريات
const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const addToCart = () => setCartCount((c) => c + 1);

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// شريط التنقل العلوي يقرأ العدد
export function NavbarBadge() {
  const { cartCount } = useContext(CartContext);
  return <div>السلة: 🛒 <strong>{cartCount}</strong></div>;
}

// زر المنتج في صفحة المتجر يضيف للسلة
export function ProductBuyButton() {
  const { addToCart } = useContext(CartContext);
  return <button onClick={addToCart}>شراء وإضافة للسلة ➕</button>;
}`,
      advancedExample: `// نموذج إدارة الحالة المشتركة لسمات المظهر والمستخدم بـ Custom Hook مركزي
import React, { createContext, useContext, useState, useEffect } from 'react';

const AppSessionContext = createContext(null);

export function AppSessionProvider({ children }) {
  // حالة المستخدم المشتركة
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('app_user');
    return saved ? JSON.parse(saved) : null;
  });

  // حالة الوضع الداكن المشتركة
  const [isDark, setIsDark] = useState(true);

  // مزامنة المستخدم مع الذاكرة المحلية
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('app_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('app_user');
    }
  }, [currentUser]);

  const login = (userData) => setCurrentUser(userData);
  const logout = () => setCurrentUser(null);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <AppSessionContext.Provider value={{ currentUser, isDark, login, logout, toggleTheme }}>
      <div className={isDark ? 'dark bg-slate-950 text-white min-h-screen' : 'bg-slate-50 text-slate-900 min-h-screen'}>
        {children}
      </div>
    </AppSessionContext.Provider>
  );
}

export const useAppSession = () => useContext(AppSessionContext);`,
      output: "مزامنة لحظية للبيانات المشتركة بين شريط التنقل وصفحات المتجر وتفضيلات المظهر في كافة أنحاء التطبيق.",
      commonMistakes: [
        {
          mistake: "وضع كافة بيانات التطبيق داخل سياق Context واحد عملاق.",
          fix: "افصل السياقات حسب المجال (مثل ThemeContext، AuthContext، CartContext).",
          explanation: "تغيير أي خاصية في سياق عملاق سيعيد تصيير كافة المكونات المشتركة حتى لو لم تكن مهتمة بتلك الخاصية المحددة."
        }
      ],
      bestPractices: [
        "اختر Context API للتطبيقات الصغيرة والمتوسطة، واختر Zustand للمشاريع التي تتطلب أداءً عالياً وعزلاً لإعادة التصيير.",
        "احتفظ بالحالة المشتركة نظيفة ومقتضبة وتجنب تكرار البيانات المحفوظة في الخادم."
      ],
      infographic: {
        title: "أنماط إدارة Shared Client State",
        elements: [
          { label: "المشكلة", role: "Props Drilling المضني عبر عشرات المكونات الوسيطة", color: "rose" },
          { label: "حل Context API", role: "مدمج برياكت، ممتاز لسمات المظهر وبيانات الجلسة الخفيفة", color: "blue" },
          { label: "حل Zustand", role: "خفيف، خارج شجرة React، عالي الأداء مع Selectors دقيقة", color: "emerald" },
          { label: "حل Redux Toolkit", role: "للتطبيقات المؤسسية الضخمة ذات تدفق البيانات المعقد", color: "purple" }
        ]
      }
    },
    {
      id: "12.1.c",
      title: "Server State",
      englishTerm: "Server State (حَالَةُ الخَادِمِ: البيانات المسترجعة من الـ API وقواعد البيانات)",
      description: "حالة الخادم (Server State) هي البيانات التي لا يملكها المتصفح، بل يقترضها مؤقتاً لعرضها (مثل قائمة المنتجات، الطلبات، التعليقات، ورصيد المحفظة). تختلف جذرياً عن حالة العميل بكونها: غير متزامنة (Asynchronous)، مشتركة بين عدة مستخدمين، قد تصبح 'بائتة' (Stale) وتتغير في الخادم دون علم المتصفح، وتتطلب استراتيجيات للتخزين المؤقت (Caching)، وإعادة الجلب (Refetching)، وإلغاء الصلاحية (Invalidation).",
      analogy: "مثل أسعار تذاكر الطيران أو غرف الفنادق في موقع الحجز: البيانات مخزنة في خوادم شركات الطيران وليست في جهازك؛ فإذا نظرت للسعر الآن فقد يحجز شخص آخر آخر مقعد بعد دقيقة ويتغير السعر فوراً دون أن تلمس شاشتك.",
      whyItMatters: "خلط حالة الخادم مع حالة العميل هو السبب الأول لكتابة آلاف أسطر الأكواد المعقدة غير المجدية؛ فصلهما واستخدام أدوات مثل RTK Query أو TanStack Query يوفر 50% من كود التطبيق.",
      syntax: "// TanStack Query:\nconst { data, isLoading } = useQuery({ queryKey: ['products'], queryFn: fetchProducts });",
      simpleExample: `import React, { useState, useEffect } from 'react';

// إدارة حالة الخادم يدوياً بالطريقة التقليدية
function TraditionalServerStateView() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // جلب حالة الخادم وتخزين نسخة منها في المتصفح
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>جاري استعارة البيانات من الخادم...</p>;
  return <div>عنوان المنشور من الخادم: {data?.title}</div>;
}`,
      advancedExample: `// مقارنة برمجية توضح كيف تدير مكتبات Server State الحديثة التخزين المؤقت والاستقرار
import React from 'react';

// مفهوم المحرك المركزي لإدارة Server State:
// 1. لا نخزن منشورات الخادم في Redux store يدوي ولا useState مبعثر
// 2. المحرك يدير التخزين المؤقت (Cache)، وإعادة الجلب عند تركيز النافذة، ومنع التكرار
export function ServerStateArchitectureSpec() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white text-right space-y-4">
      <h3 className="font-bold text-amber-400">خصائص Server State الجوهرية:</h3>
      
      <div className="space-y-2 text-xs">
        <div className="p-3 bg-slate-800 rounded-xl">
          <p className="font-bold text-slate-200">1. ملكية عن بعد (Remote Ownership)</p>
          <p className="text-slate-400 mt-0.5">الخادم هو مصدر الحقيقة الوحيد، والمتصفح يمتلك لقطة مؤقتة فقط (Snapshot).</p>
        </div>

        <div className="p-3 bg-slate-800 rounded-xl">
          <p className="font-bold text-slate-200">2. تقادم البيانات (Staleness)</p>
          <p className="text-slate-400 mt-0.5">تحتاج البيانات لإعادة جلب دوري عند عودة المستخدم للتطبيق (Window Focus Refetch).</p>
        </div>

        <div className="p-3 bg-slate-800 rounded-xl">
          <p className="font-bold text-slate-200">3. إدارة دورة الحياة (Lifecycle)</p>
          <p className="text-slate-400 mt-0.5">تلقائياً: Loading, Success, Error, Refetching, Caching, Garbage Collection.</p>
        </div>
      </div>
    </div>
  );
}`,
      output: "إدراك معماري واضح يمنع خلط بيانات قواعد البيانات مع متغيرات الواجهة المحلية في نفس المتجر.",
      commonMistakes: [
        {
          mistake: "محاولة نسخ وتكرار بيانات الـ API في متجر Redux يدوي مع كتابة reducers يدوية للتحميل والأخطاء.",
          fix: "استخدم حلول مخصصة لـ Server State مثل RTK Query أو TanStack Query.",
          explanation: "إدارة التخزين المؤقت وإلغاء الطلبات وإعادة المحاولة يدوياً في Redux تتطلب آلاف أسطر الأكواد المعرضة للأخطاء."
        }
      ],
      bestPractices: [
        "عامل بيانات الخادم كحالة معارة (Borrowed State) ولا تعدلها محلياً إلا عبر Optimistic Updates مع تأكيد الخادم.",
        "اضبط زمن staleTime بعناية لمنع إرسال طلبات مكررة لنفس المورد عند تنقل المستخدم بين التبويبات."
      ],
      infographic: {
        title: "Client State مقابل Server State",
        elements: [
          { label: "الملكية", role: "Client: يملكها المتصفح بنسبة 100% | Server: يملكها الخادم وقواعد البيانات", color: "blue" },
          { label: "التزامن", role: "Client: متزامنة ولحظية | Server: غير متزامنة وتتطلب انتظار الشبكة", color: "emerald" },
          { label: "التقادم", role: "Client: لا تتقادم | Server: تتقادم وتصبح Stale إذا عدلها مستخدم آخر", color: "amber" },
          { label: "الأدوات المثالية", role: "Client: useState / Zustand | Server: RTK Query / TanStack Query", color: "purple" }
        ]
      }
    },
    {
      id: "12.1.d",
      title: "URL State",
      englishTerm: "URL State (حَالَةُ شَرِيطِ العُنْوَان: المعاملات والملاحة في الرابط)",
      description: "حالة الرابط (URL State) هي البيانات المخزنة مباشرة داخل شريط عنوان المتصفح كمعاملات مسار (Path Params مثل `/users/102`) أو معاملات استعلام (Query Params مثل `?search=shoes&page=2&sort=asc`). تتميز بكونها الحالة الأكثر متانة وقابلية للمشاركة: فبمجرد نسخ الرابط وإرساله لأي شخص، أو حفظه في المفضلة، أو إعادة تحميل الصفحة (F5)، تُستعاد الواجهة بنفس النتائج والفلاتر المحددة بدقة.",
      analogy: "مثل إحداثيات خطوط الطول والعرض الجغرافية على الخريطة: مهما أغلقت تطبيق الخرائط أو فتحته من هاتف صديقك، فإن كتابة نفس الإحداثيات ستأخذك إلى نفس البقعة من كوكب الأرض بالضبط.",
      whyItMatters: "تعتبر المعيار الأول لسهولة الاستخدام ومحركات البحث (SEO & UX)؛ فالمستخدم يتوقع بطبيعة الحال أن يعمل زرا الرجوع والتقدم في المتصفح بسلاسة مع كل خطوة بحث أو فلترة.",
      syntax: "const [searchParams, setSearchParams] = useSearchParams();\nconst query = searchParams.get('q');",
      simpleExample: `import React from 'react';
import { useSearchParams } from 'react-router-dom';

// مكون يعتمد كلياً على الـ URL كمصدر وحيد للحقيقة
function FilterByTag() {
  const [params, setParams] = useSearchParams();
  const activeTag = params.get('tag') || 'all';

  return (
    <div>
      <p>الوسم النشط حالياً في الـ URL: <strong>{activeTag}</strong></p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => setParams({ tag: 'react' })}>#react</button>
        <button onClick={() => setParams({ tag: 'javascript' })}>#javascript</button>
        <button onClick={() => setParams({})}>مسح الوسم</button>
      </div>
    </div>
  );
}`,
      advancedExample: `// دمج URL State مع مصفوفة بيانات لعرض نتائج مفلترة قابلة للمشاركة
import React from 'react';
import { useSearchParams } from 'react-router-dom';

export function UrlStateExplorer() {
  const [params, setParams] = useSearchParams();

  // قراءة كافة معايير الحالة من شريط العنوان
  const q = params.get('q') || '';
  const page = Number(params.get('page')) || 1;
  const inStock = params.get('stock') === 'true';

  const updateParam = (key, val) => {
    const next = new URLSearchParams(params);
    if (val) next.set(key, val);
    else next.delete(key);
    setParams(next);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white text-right space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-blue-400">URL State Controller</h4>
        <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
          Source of Truth
        </span>
      </div>

      <div>
        <label className="block text-xs text-slate-400 mb-1">بحث بالاسم:</label>
        <input
          type="text"
          value={q}
          onChange={(e) => updateParam('q', e.target.value)}
          placeholder="اكتب للبحث..."
          className="w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none"
        />
      </div>

      <div className="flex justify-between items-center text-xs">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={inStock}
            onChange={(e) => updateParam('stock', e.target.checked ? 'true' : '')}
            className="rounded accent-blue-500"
          />
          <span>المتوفر بالمخزون</span>
        </label>

        <div className="flex items-center gap-1 font-mono">
          <button
            onClick={() => updateParam('page', Math.max(page - 1, 1).toString())}
            disabled={page <= 1}
            className="px-2 py-1 bg-slate-800 rounded disabled:opacity-30"
          >
            السابق
          </button>
          <span className="px-2 font-bold text-emerald-400">صفحة {page}</span>
          <button
            onClick={() => updateParam('page', (page + 1).toString())}
            className="px-2 py-1 bg-slate-800 rounded"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
}`,
      output: "إدارة مرنة ومتينة لحالة الواجهة في شريط الـ URL تتيح مشاركة الرابط واستعادة النتائج فوراً.",
      commonMistakes: [
        {
          mistake: "تخزين كلمة البحث أو رقم الصفحة في useState فقط مع ترك شريط الـ URL فارغاً.",
          fix: "خزن الفلاتر والصفحات في URLSearchParams لتمكين المستخدم من الرجوع واستعادة الصفحة بعد F5.",
          explanation: "تخزين الفلاتر في useState فقط يعني ضياع كافة نتائج البحث عند تحديث الصفحة أو إرسال الرابط لزميل."
        }
      ],
      bestPractices: [
        "استخدم URL State دائماً لعمليات: الفلترة، الترتيب، الترقيم، وعلامات التبويب الرئيسية.",
        "لا تضع بيانات حساسة أو كائنات ضخمة في الـ URL لأنها مكشوفة ومحدودة الطول في المتصفحات."
      ],
      infographic: {
        title: "مزايا استخدام URL State في React",
        elements: [
          { label: "المشاركة Shareability", role: "إمكانية إرسال الرابط لأي شخص مع نفس الفلاتر المحددة", color: "blue" },
          { label: "الثبات Persistence", role: "عدم فقدان نتائج البحث عند تحديث الصفحة بزر F5", color: "emerald" },
          { label: "سجل المتصفح History", role: "دعم زري الرجوع والتقدم للخلف والأمام بسلاسة بديهية", color: "purple" },
          { label: "تحسين السيو SEO", role: "فهرسة روابط الفئات والمنتجات في محركات البحث العالمية", color: "amber" }
        ]
      }
    },
    {
      id: "12.1.e",
      title: "Form State",
      englishTerm: "Form State (حَالَةُ النَّمَاذِجِ: دورة حياة مدخلات واستمارات المستخدم)",
      description: "حالة النماذج (Form State) هي البيانات المؤقتة التي يدخلها المستخدم في حقول الاستمارة (الاسم، البريد، كلمة المرور، الخيارات) مصحوبة بالبيانات الوصفية الخاصة بالاستمارة: هل لمس المستخدم الحقل (isTouched / isDirty)؟ هل الحقول صالحة أم تحوي أخطاء (isValid / errors)؟ وهل النموذج قيد الإرسال حالياً للخادم (isSubmitting)؟ تتطلب إدارة احترافية لمنع وميض الشاشة وإعادة التصيير المستمرة مع كل ضغطة حرف.",
      analogy: "مثل استمارة التقدم لتأشيرة السفر في السفارة: الورقة تحتوي على خانات تكتب فيها بياناتك (Values)، والموظف يدقق بقلم أحمر بجانب الخانات الخاطئة (Errors)، ولا يختم الاستمارة إلا إذا كانت كافة الشروط مكتملة وصالحة (Validation).",
      whyItMatters: "النماذج هي وسيلة كسب الإيرادات وتسجيل العملاء؛ وإدارتها السيئة تسبب ثقلاً في الكتابة (Typing Lag) وأخطاء برمجية تكلف الشركات خسارة المستخدمين.",
      syntax: "const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();",
      simpleExample: `import React, { useState } from 'react';

// إدارة حالة نموذج يدوياً للمدخلات البسيطة
function SimpleLoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      setErrors({ email: 'بريد إلكتروني غير صالح' });
      return;
    }
    alert('تم إرسال النموذج بنجاح!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={formData.email} onChange={handleChange} placeholder="البريد" />
      {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      <input name="password" type="password" value={formData.password} onChange={handleChange} />
      <button type="submit">دخول</button>
    </form>
  );
}`,
      advancedExample: `// نموذج إدارة حالة الاستمارات المعقدة بنظام النظافة والعزل
import React, { useState } from 'react';

export function AdvancedFormStateInspector() {
  const [fields, setFields] = useState({ username: '', bio: '' });
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // حساب الأخطاء المشتقة
  const errors = {};
  if (!fields.username.trim()) errors.username = 'اسم المستخدم مطلوب';
  else if (fields.username.length < 3) errors.username = 'الاسم يجب أن لا يقل عن 3 أحرف';

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // لمس كافة الحقول لإظهار الأخطاء إن وجدت
    setTouched({ username: true, bio: true });

    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    alert('تم الحفظ بنجاح!');
  };

  return (
    <form onSubmit={handleFormSubmit} className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white text-right space-y-4">
      <h3 className="font-bold text-sm text-blue-400">مراقب دورة حياة النماذج (Form State)</h3>

      <div>
        <label className="block text-xs text-slate-400 mb-1">اسم المستخدم:</label>
        <input
          name="username"
          value={fields.username}
          onChange={(e) => setFields({ ...fields, username: e.target.value })}
          onBlur={() => handleBlur('username')}
          className="w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none"
        />
        {touched.username && errors.username && (
          <span className="text-rose-400 text-[11px] mt-1 block">{errors.username}</span>
        )}
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-400 space-y-1">
        <div>isDirty: {fields.username ? 'true' : 'false'}</div>
        <div>isValid: {Object.keys(errors).length === 0 ? 'true' : 'false'}</div>
        <div>isSubmitting: {isSubmitting ? 'true' : 'false'}</div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition disabled:opacity-50"
      >
        {isSubmitting ? 'جاري التحقق والإرسال...' : 'إرسال الاستمارة'}
      </button>
    </form>
  );
}`,
      output: "إدارة واعية للحقول تمنع مقاطعة المستخدم وتوفر تتبعاً دقيقاً لحالات اللمس والصلاحية والإرسال.",
      commonMistakes: [
        {
          mistake: "تخزين بيانات النماذج الضخمة في متجر الحالة العام (Redux / Global Store).",
          fix: "استخدم مكتبات نماذج مخصصة مثل React Hook Form لإدارة النماذج محلياً بـ Refs ودون إعادة تصيير.",
          explanation: "تحديث متجر عام عند كل نقرة حرف في نموذج يحتوي على 30 حقلاً يسبب انهياراً في أداء المتصفح وبطئاً ملحوظاً."
        }
      ],
      bestPractices: [
        "استخدم مكتبة React Hook Form مع Zod للنماذج المتوسطة والكبيرة لضمان سرعة خرافية وأمان نوعي.",
        "طبق مبدأ Reward Early, Punish Late: لا تظهر الخطأ إلا عند مغادرة الحقل (onBlur)."
      ],
      infographic: {
        title: "تشريح كائن حالة النماذج (Form State Properties)",
        elements: [
          { label: "Values", role: "القيم الحالية للحقول المدخلة بواسطة المستخدم", color: "blue" },
          { label: "Errors", role: "خريطة رسائل الخطأ الناتجة عن فشل شروط التحقق Validation", color: "rose" },
          { label: "Touched / Dirty", role: "معرفة هل لمس المستخدم الحقل أو عدل على قيمته الأصلية", color: "amber" },
          { label: "Submitting", role: "حالة إرسال الطلب وتعطيل الزر لمنع التكرار العرضي", color: "emerald" }
        ]
      }
    },
    {
      id: "12.1.f",
      title: "Derived State",
      englishTerm: "Derived / Computed State (الحَالَةُ المُشْتَقَّةُ وَالمَحْسُوبَة: القيم الناتجة بالحساب المباشر)",
      description: "الحالة المشتقة (Derived State) هي أي قيمة أو معلومة يمكن حسابها واستنتاجها رياضياً أو منطقياً من حالات أخرى موجودة مسبقاً في المكون (مثل: إجمالي سعر السلة، عدد العناصر المتبقية، مصفوفة المنتجات المصفاة، أو حالة زر الإرسال هل هو مفعل أم معطل). القاعدة الذهبية الأكثر أهمية في React هي: 'لا تضع في useState أي قيمة يمكنك حسابها أثناء الرندر'، واستخدم `useMemo` للعمليات الحسابية الثقيلة فقط.",
      analogy: "مثل عمر الإنسان: في بطاقة الهوية، تسجل الدولة 'تاريخ الميلاد' كقيمة ثابتة أساسية؛ ولا تحتاج لتعيين موظف يغير رقم 'العمر' في البطاقة كل يوم، بل يتم حساب العمر تلقائياً في أي لحظة بطرح تاريخ اليوم من تاريخ الميلاد.",
      whyItMatters: "تجنب تخزين الحالات المشتقة في useState يمنع تناقض البيانات (Out-of-Sync Bugs)، ويلغي الحاجة لكتابة useEffect لمزامنة الحالات، ويقلل تعقيد الكود بنسبة 40%.",
      syntax: "// خطأ فادح:\nconst [total, setTotal] = useState(0);\n// صح واحترافي (Derived):\nconst total = items.reduce((sum, item) => sum + item.price, 0);",
      simpleExample: `import React, { useState } from 'react';

// تجنب تخزين الحالة المشتقة وحسابها مباشرة أثناء الرندر
function ShoppingCartCounter() {
  const [items, setItems] = useState([
    { id: 1, name: 'كتاب React', price: 30 },
    { id: 2, name: 'فأرة لاسلكية', price: 20 },
  ]);

  // حالة مشتقة: تُحسب فوراً وبشكل متزامن وبدون useState أو useEffect إضافي!
  const totalItemsCount = items.length;
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <p>عدد المنتجات: {totalItemsCount}</p>
      <p>الإجمالي المستحق: {totalPrice} $</p>
      <button onClick={() => setItems([...items, { id: Date.now(), name: 'منتج جديد', price: 15 }])}>
        إضافة منتج إضافي ➕
      </button>
    </div>
  );
}`,
      advancedExample: `// حساب الحالات المشتقة المعقدة بكفاءة عالية عبر useMemo
import React, { useState, useMemo } from 'react';

export function AdvancedDerivedStateStudio() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'تصميم الواجهة', done: true, priority: 'high' },
    { id: 2, title: 'ربط الـ API', done: false, priority: 'high' },
    { id: 3, title: 'كتابة الاختبارات', done: false, priority: 'low' },
  ]);
  const [filterPriority, setFilterPriority] = useState('all');

  // 1. حالة مشتقة خفيفة (مباشرة دون useMemo)
  const completedCount = tasks.filter((t) => t.done).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100) || 0;

  // 2. حالة مشتقة ثقيلة (باستخدام useMemo لمنع إعادة التصفية غير اللازمة)
  const filteredTasks = useMemo(() => {
    if (filterPriority === 'all') return tasks;
    return tasks.filter((t) => t.priority === filterPriority);
  }, [tasks, filterPriority]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white text-right space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-emerald-400">إدارة الحالات المشتقة (Derived Metrics)</h4>
        <span className="text-xs font-mono text-slate-400">الإنجاز: {progressPercent}%</span>
      </div>

      {/* شريط تقدم مشتق تلقائياً */}
      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
        <div
          className="bg-emerald-500 h-full transition-all duration-300"
          style={{ width: progressPercent + '%' }}
        />
      </div>

      <div className="flex justify-between items-center text-xs">
        <span className="text-slate-400">المهام المنجزة: {completedCount} من أصل {tasks.length}</span>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="p-1 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 outline-none"
        >
          <option value="all">كافة الأولويات</option>
          <option value="high">أولوية قصوى</option>
          <option value="low">أولوية عادية</option>
        </select>
      </div>

      <ul className="space-y-1 text-xs">
        {filteredTasks.map((t) => (
          <li key={t.id} className="p-2 bg-slate-800/60 rounded-xl flex justify-between items-center">
            <span className={t.done ? 'line-through text-slate-500' : 'text-slate-200'}>{t.title}</span>
            <button
              onClick={() =>
                setTasks(tasks.map((task) => (task.id === t.id ? { ...task, done: !task.done } : task)))
              }
              className="text-[10px] text-blue-400 underline"
            >
              {t.done ? 'تراجع' : 'إنجاز ✔️'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      output: "حساب فوري لكافة النسب والمؤشرات التجميعية لحظياً دون أي تناقض في البيانات أو تأخير.",
      commonMistakes: [
        {
          mistake: "إنشاء حالة const [total, setTotal] = useState(0) واستخدام useEffect لتحديثها كلما تغيرت items.",
          fix: "احذف useState و useEffect واحسب const total = items.reduce(...) مباشرة في جسم المكون.",
          explanation: "استخدام useEffect لتحديث حالة مشتقة يسبب رندر مزدوجاً غير ضروري (Double Render) ويعرض الواجهة لوميض قيم قديمة."
        }
      ],
      bestPractices: [
        "قاعدة ذهبية: إذا كانت القيمة يمكن حسابها من الـ Props أو State الحالية، فلا تنشئ لها useState أبداً.",
        "استخدم useMemo فقط إذا كانت العملية الحسابية تتضمن تكراراً عبر آلاف العناصر أو معادلات معقدة."
      ],
      infographic: {
        title: "القاعدة الذهبية في تجنب تكرار الحالة (Derived State Rule)",
        elements: [
          { label: "الحالة الأساسية Source State", role: "قائمة العناصر الأساسية: items = [{ price: 50 }, ...]", color: "blue" },
          { label: "طريقة خاطئة ❌", role: "useState(total) + useEffect لتحديثه -> Double Render وبطء", color: "rose" },
          { label: "طريقة صحيحة ومثالية ✔️", role: "const total = items.reduce(...) -> حساب مباشر في 0ms ونقاء تام", color: "emerald" },
          { label: "تحسين العمليات الثقيلة", role: "تغليف الحسابات المكلفة بـ useMemo لمنع تكرار المعالجة", color: "purple" }
        ]
      }
    },
    {
      id: "12.1.g",
      title: "اختيار مكان تخزين كل نوع",
      englishTerm: "State Placement Matrix (مَصْفُوفَةُ تَوْزِيعِ وَتَسْكِينِ الحَالَات: أين تضع بياناتك؟)",
      description: "المصمم المعماري لتطبيقات React الناجحة يتميز بقدرته الفائقة على اتخاذ القرار الحاسم: 'أين يجب أن تعيش هذه المعلومة بالتحديد؟'. وضع البيانات في المكان الخاطئ (مثل وضع حالة الـ modal في Redux، أو وضع فلاتر البحث في useState محلي) يسبب تعقيداً هندسياً هائلاً. تحدد مصفوفة التوزيع: المكون المحلي، سياق المخرج، شريط الـ URL، مكتبات Server State، أو المتجر العام للعميل.",
      analogy: "مثل تنظيم منزلك: لا تضع مفتاح السيارة في الفريزر، ولا تضع اللحوم المجمدة في جيب معطفك، ولا تعلق صور العائلة في صندوق البريد بالشارع؛ كل غرض له مكانه المخصص الذي يحقق الراحة والأمان وسرعة الوصول.",
      whyItMatters: "يحافظ على كود التطبيق نظيفاً ومقروءاً بنسبة 100%، ويمنع إعادة التصيير المفرطة، ويسهل صيانة واختبار النظام لسنوات قادمة.",
      syntax: "Local UI -> useState | Shared Client -> Zustand / Context | Server -> RTK Query | Navigation -> URL",
      simpleExample: `// دليل اتخاذ القرار البرمجي لاختيار مكان الحالة
function decideStatePlacement(stateDescription) {
  switch (stateDescription) {
    case 'قائمة منسدلة مفتوحة أم مغلقة':
      return 'useState داخل المكون نفسه (Local UI State)';
    case 'فلاتر وترقيم نتائج البحث':
      return 'useSearchParams في شريط العنوان (URL State)';
    case 'بيانات سلة الشراء عبر عدة صفحات':
      return 'Zustand Store أو Context (Shared Client State)';
    case 'قائمة المنتجات القادمة من قاعدة البيانات':
      return 'RTK Query أو TanStack Query (Server State)';
    default:
      return 'ابدأ بأبسط حل محلي ممكن (Local First)';
  }
}`,
      advancedExample: `// تطبيق عملي يجمع الأنواع الخمسة في واجهة تسوق واحدة منظمة معمارياً
import React, { useState } from 'react';

export function MultiStateArchitectureShowcase() {
  // 1. Local UI State: حالة فتح قائمة الفلاتر الجانبية
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // 2. Shared Client State (محاكاة): عدد عناصر السلة المشترك
  const [cartCount, setCartCount] = useState(3);

  // 3. Form State: حقل إدخال كود الخصم
  const [couponCode, setCouponCode] = useState('');

  // 4. Server State (محاكاة): بيانات المنتج القادمة من الخادم
  const product = { id: 101, title: 'شاشة ألعاب 4K', price: 450, stock: 8 };

  // 5. Derived State: السعر النهائي بعد احتساب ضريبة القيمة المضافة 15%
  const finalPriceWithTax = product.price * 1.15;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white text-right space-y-4 font-sans">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-blue-400">مصفوفة تسكين الحالات المتكاملة</h4>
        <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-full text-slate-300">
          السلة: 🛒 <strong>{cartCount}</strong> (Shared)
        </span>
      </div>

      {/* عرض بيانات الخادم والسعر المشتق */}
      <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 space-y-2">
        <div className="flex justify-between">
          <span className="font-bold text-sm">{product.title}</span>
          <span className="text-emerald-400 font-bold font-mono">{product.price} $ (Server)</span>
        </div>
        <p className="text-xs text-slate-400">
          السعر بعد الضريبة: <strong className="text-emerald-300 font-mono">{finalPriceWithTax.toFixed(1)} $</strong> (Derived)
        </p>
      </div>

      {/* تحكم محلي Local UI State */}
      <div className="pt-2">
        <button
          onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
          className="text-xs text-blue-400 underline block mb-2"
        >
          {isFilterDrawerOpen ? 'إخفاء قسيمة الخصم 🔼' : 'إدخال قسيمة خصم (Local Toggle) 🔽'}
        </button>

        {isFilterDrawerOpen && (
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="كود الخصم..."
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 p-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none"
            />
            <button
              onClick={() => setCartCount((c) => c + 1)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-xs font-bold transition"
            >
              تطبيق وشراء
            </button>
          </div>
        )}
      </div>
    </div>
  );
}`,
      output: "نظام برمجي متناغم يضع كل معلومة في وعائها الطبيعي الصحيح دون أي فوضى أو تضارب في المسؤوليات.",
      commonMistakes: [
        {
          mistake: "البدء فوراً بإنشاء متجر Redux أو Zustand عند إنشاء أي مشروع جديد قبل معرفة احتياجاته.",
          fix: "التزم بمبدأ 'Local First': ابدأ بـ useState العادي، ولا تنتقل لحلول أوسع إلا عند ظهور حاجة حقيقية.",
          explanation: "إضافة مكتبات إدارة الحالة المعقدة لمشاريع بسيطة يزيد حجم الحزم ويعقد بنية الكود بدون مبرر."
        }
      ],
      bestPractices: [
        "اطبع مصفوفة تسكين الحالات الذهنية في ذهنك قبل كتابة أي ميزة جديدة.",
        "اجعل معيارك: هل تضيع المعلومة إذا حدثت الصفحة؟ إذا كانت الإجابة نعم والمستخدم يحتاجها، فمكانها الـ URL أو التخزين الدائم."
      ],
      infographic: {
        title: "مصفوفة اتخاذ القرار لتسكين الحالات (State Placement Matrix)",
        elements: [
          { label: "1. Local UI State", role: "المكان: useState داخل المكون | الاستخدام: قوائم منسدلة، نوافذ منبثقة، أزرار", color: "blue" },
          { label: "2. URL State", role: "المكان: useSearchParams | الاستخدام: فلاتر، صفحات ترقيم، بحث، وسوم", color: "emerald" },
          { label: "3. Server State", role: "المكان: RTK Query / TanStack | الاستخدام: مستخدمين، منتجات، طلبات الخادم", color: "purple" },
          { label: "4. Shared Client State", role: "المكان: Zustand / Context | الاستخدام: سلة الشراء، جلسة المستخدم، الثيم", color: "amber" }
        ]
      }
    },
    {
      id: "12.1.h",
      title: "متى تحتاج إلى مكتبة إدارة حالة",
      englishTerm: "When Do You Need a State Library? (مَعَايِيرُ الحَاجَةِ لِمَكْتَبَاتِ إِدَارَةِ الحَالَةِ الخَارِجِيَّة)",
      description: "ليست كل تطبيقات React بحاجة إلى مكتبة إدارة حالة خارجية مثل Redux أو Zustand. في الواقع، أكثر من 70% من التطبيقات الحديثة تكتفي تماماً بـ `useState` و `useReducer` و `useSearchParams` مع مكتبة Server State مثل TanStack Query. تصبح بحاجة حقيقية لمكتبة خارجية فقط عندما: تتشارك عدة مكونات متباعدة حالة عميل معقدة، عندما يتطلب التطبيق سجل أحداث وتراجع (Undo/Redo)، عندما تسبب Context API بطئاً ملحوظاً بسبب إعادة التصيير غير المعزولة، أو في لوحات الرسم والتطبيقات ثنائية الأبعاد التفاعلية.",
      analogy: "مثل استئجار حافلة نقل ركاب ضخمة: إذا كنت ذاهباً لشراء خبز من المخبز المجاور بمفردك، فركوب دراجة هوائية أو المشي (useState) أسرع وأوفر ألف مرة من استئجار حافلة عملاقة؛ الحافلة (Redux) ممتازة فقط عندما يكون لديك فوج سياحي مكون من 50 شخصاً ينتقلون معاً عبر المدن.",
      whyItMatters: "يحميك من فخ الإفراط الهندسي (Over-Engineering)، ويوفر أسابيع من كتابة أكواد غير مجدية، ويبقي تطبيقك رشيقاً وخفيف الحجم.",
      syntax: "// Checklist: هل تحتاج مكتبة حالة؟\n// [ ] هل تعاني من Props Drilling لأكثر من 4 مستويات؟\n// [ ] هل بياناتك ليست قادمة من الخادم؟\n// [ ] هل Context API تسبب بطء رندر ملحوظ؟",
      simpleExample: `// مصفوفة فحص الحاجة لمكتبة إدارة حالة (State Library Decision Checklist)
function evaluateStateLibraryNeed({ componentDepth, hasComplexClientLogic, usesServerStateTool }) {
  if (usesServerStateTool && !hasComplexClientLogic) {
    return 'لا تحتاج لأي مكتبة حالة عالمية؛ أدوات Server State تكفيك تماماً! ✔️';
  }
  if (componentDepth > 4 && hasComplexClientLogic) {
    return 'نعم، يوصى باستخدام Zustand لسهولته الفائقة وأدائه العالي 🚀';
  }
  return 'توقف وفكر: خطافات React المدمجة (useState + Context) كافية بنسبة 100% 🎯';
}`,
      advancedExample: `// دليل هندسي لاختيار المكتبة المناسبة حسب نوع وحجم المشروع
export function StateManagementDecisionTree() {
  const recommendations = [
    {
      case: 'تطبيق مدونة أو موقع تجاري يعتمد على جلب البيانات من الخادم',
      solution: 'TanStack Query أو RTK Query فقط (Zero Client Store)',
      reason: '95% من بيانات التطبيق هي Server State، ولا يوجد تعقيد محلي.'
    },
    {
      case: 'لوحة تحكم مع سلة مشتريات وسمات مظهر وإشعارات خفيفة',
      solution: 'Zustand Store خفيف ونظيف',
      reason: 'كود بالغ الصغر (1kb)، بدون Boilerplate، ولا يعيد تصيير المكونات غير المهتمة.'
    },
    {
      case: 'نظام بنكي مؤسسي ضخم أو تطبيق تعديل صور مع Undo/Redo',
      solution: 'Redux Toolkit (RTK) مع Redux DevTools',
      reason: 'صرامة معمارية عالية، تتبع دقيق لكل إجراء Action، ودعم التراجع الزمني Time Travel.'
    }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-lg mx-auto text-white text-right space-y-4">
      <h3 className="font-black text-emerald-400 text-sm">شجرة قرار إدارة الحالة (Architecture Decision Framework):</h3>
      
      <div className="space-y-3">
        {recommendations.map((rec, i) => (
          <div key={i} className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-[10px] font-bold text-amber-400">الحالة {i + 1}: {rec.case}</span>
            <p className="text-xs font-bold text-blue-300">الحل الموصى به: {rec.solution}</p>
            <p className="text-[11px] text-slate-400">السبب: {rec.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "إطار قرار ناضج ومدروس يوفر الجهد الهندسي ويوجه لاختيار الأداة المناسبة وفق الحجم الفعلي للمشروع.",
      commonMistakes: [
        {
          mistake: "تثبيت Redux Toolkit لمشروع موقع بسيط لأن 'الجميع يفعل ذلك'.",
          fix: "حدد طبيعة البيانات أولاً: إذا كانت بياناتك كلها من الخادم، فاستخدم TanStack Query أو RTK Query ولا تنشئ Client Store عشوائياً.",
          explanation: "Redux مصمم لمعالجة تدفق الحالات المعقدة في جانب العميل وليس مجرد جلب وعرض البيانات."
        }
      ],
      bestPractices: [
        "إذا قررت استخدام مكتبة حالة عميل، فاجعل Zustand خيارك الافتراضي الأول لبساطته وسرعته.",
        "احرص على أن تكون مساراتك URL أولاً، وخادمك ثانياً، ولا تضع في المتجر سوى ما تبقى."
      ],
      infographic: {
        title: "متى تنتقل لمكتبة حالة خارجية؟ (Decision Checklist)",
        elements: [
          { label: "1. تباعد المكونات", role: "البيانات يحتاجها رأس الصفحة (Navbar) ومودال بالأسفل وصفحة أخرى", color: "blue" },
          { label: "2. وتيرة التحديث العالية", role: "تحديثات متسارعة تسبب بطء رندر إذا استخدمنا Context API", color: "rose" },
          { label: "3. التراجع الزمني Time-Travel", role: "الحاجة لسجل تدقيق أو ميزة التراجع Undo / Redo في الواجهة", color: "purple" },
          { label: "4. متى تمتنع؟", role: "إذا كانت البيانات كلها قادمة من API، فاستخدم أداة Server State فقط", color: "emerald" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q12.1.1",
      question: "ما هي القاعدة الذهبية للحالات المشتقة (Derived State) في React؟",
      options: [
        "يجب دائماً إنشاء خطاف useState خاص لكل عملية حسابية لضمان حفظها.",
        "لا تضع في useState أي قيمة يمكن حسابها واستنتاجها مباشرة من Props أو State أخرى أثناء الرندر.",
        "يجب حفظ الحالات المشتقة في قاعدة بيانات الخادم.",
        "الحالات المشتقة غير مدعومة في جافاسكريبت الحديثة."
      ],
      correctAnswer: 1,
      explanation: "حساب القيم مباشرة أثناء الرندر يلغي تضارب البيانات ويمنع الرندر المزدوج ويوفر كوداً بالغ البساطة والنقاء."
    },
    {
      id: "q12.1.2",
      question: "لماذا نفضل تخزين فلاتر البحث والترقيم في URL State (معاملات الرابط) بدلاً من useState محلي؟",
      options: [
        "لأن الـ URL يسرع سرعة الإنترنت.",
        "لأن تخزينها في الـ URL يجعل نتائج البحث قابلة للمشاركة بالمفضلة، وتعمل مع زري الرجوع والتقدم، ولا تضيع عند تحديث الصفحة بـ F5.",
        "لأن المتصفح يمنع استخدام useState مع حقول البحث.",
        "لأن URL State تشفر البيانات وتخفيها عن المتطفلين."
      ],
      correctAnswer: 1,
      explanation: "جعل شريط العنوان مصدر الحقيقة للبحث يمنح المستخدم أفضل تجربة تصفح ممكنة ويتيح نسخ الرابط لأي شخص بنفس النتائج."
    },
    {
      id: "q12.1.3",
      question: "ما الفارق الجوهري بين Client State و Server State؟",
      options: [
        "Client State يملكها المتصفح وتكون متزامنة؛ بينما Server State يملكها الخادم وتكون غير متزامنة وقابلة للتقادم (Stale).",
        "Client State تعمل فقط باللغة العربية بينما Server State بالإنجليزية.",
        "لا يوجد أي فرق بينهما نهائياً.",
        "Client State تتطلب دفع رسوم اشتراك شهري."
      ],
      correctAnswer: 0,
      explanation: "حالة الخادم مستعارة من الخارج وتتطلب تخزيناً مؤقتاً وإعادة تحقق دوري؛ بينما حالة العميل يملكها التطبيق محلياً بالكامل."
    }
  ],
  exercise: {
    id: "ex-12.1",
    title: "بناء مصنف حالات متفاعل يطبق الأنواع الخمسة (Multi-State Task & Budget Tracker)",
    description: "قم بإنشاء مكون React باسم `TaskBudgetManager` يدمج: 1) Local UI State (مفتاح كشف التفاصيل)، 2) Server State محاكى (قائمة المهام وتكلفتها)، 3) Form State (نموذج إضافة مهمة بتكلفة والتحقق)، و 4) Derived State (حساب إجمالي الميزانية والمهام المكتملة تلقائياً).",
    starterCode: `import React, { useState } from 'react';

export function TaskBudgetManager() {
  // 1. عرف حالات الخادم والواجهة والنماذج
  // 2. احسب الحالات المشتقة مباشرة
  // 3. ابنِ واجهة تحكم متكاملة
}
`,
    hints: [
      "احسب const totalCost = tasks.reduce((sum, t) => sum + t.cost, 0) كحالة مشتقة بدون useState.",
      "استخدم useState للنموذج formData = { title, cost } و useState محلي isOpen.",
      "اعرض الحسابات المشتقة في شريط علوي أنيق."
    ],
    solution: `import React, { useState } from 'react';

export function TaskBudgetManager() {
  // 1. محاكاة Server State (قائمة المهام والتكاليف)
  const [tasks, setTasks] = useState([
    { id: 1, title: 'تصميم الواجهات في Figma', cost: 350, completed: true },
    { id: 2, title: 'برمجة مكونات React', cost: 800, completed: false },
    { id: 3, title: 'إعداد الخادم وقواعد البيانات', cost: 600, completed: false },
  ]);

  // 2. Local UI State (إظهار/إخفاء نموذج الإضافة)
  const [showAddForm, setShowAddForm] = useState(false);

  // 3. Form State (بيانات المهمة الجديدة)
  const [form, setForm] = useState({ title: '', cost: '' });

  // 4. Derived State (محسوبة مباشرة أثناء الرندر بدون useState إضافي!)
  const totalBudget = tasks.reduce((sum, t) => sum + t.cost, 0);
  const completedBudget = tasks.filter((t) => t.completed).reduce((sum, t) => sum + t.cost, 0);
  const completedCount = tasks.filter((t) => t.completed).length;

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.cost) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: form.title.trim(),
        cost: Number(form.cost),
        completed: false,
      },
    ]);
    setForm({ title: '', cost: '' });
    setShowAddForm(false);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white text-right space-y-4 font-sans">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="font-bold text-sm text-blue-400">مدير ميزانية المهام</h3>
          <p className="text-[10px] text-slate-400">تطبيق عملي لتصنيف أنواع الحالة المتعددة</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition"
        >
          {showAddForm ? '✕ إغلاق' : '➕ مهمة جديدة'}
        </button>
      </div>

      {/* بطاقة الحالات المشتقة (Derived State Card) */}
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-slate-800 rounded-2xl border border-slate-700">
          <span className="text-slate-400">الميزانية الكلية:</span>
          <p className="text-lg font-black text-emerald-400 mt-1">{totalBudget} $</p>
        </div>
        <div className="p-3 bg-slate-800 rounded-2xl border border-slate-700">
          <span className="text-slate-400">المنجز فعلياً:</span>
          <p className="text-lg font-black text-blue-400 mt-1">{completedBudget} $ ({completedCount}/{tasks.length})</p>
        </div>
      </div>

      {/* نموذج الإضافة الموضعي (Form State) */}
      {showAddForm && (
        <form onSubmit={handleAddTask} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
          <input
            placeholder="اسم المهمة..."
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none"
            required
          />
          <input
            type="number"
            placeholder="التكلفة بالدولار..."
            value={form.cost}
            onChange={(e) => setForm({ ...form, cost: e.target.value })}
            className="w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition"
          >
            تأكيد وإضافة المهمة
          </button>
        </form>
      )}

      {/* قائمة المهام (Server State Simulation) */}
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className="p-3 bg-slate-800/80 hover:bg-slate-800 rounded-2xl border border-slate-700/60 flex justify-between items-center cursor-pointer transition"
          >
            <div className="flex items-center gap-2">
              <span className={"w-4 h-4 rounded-full flex items-center justify-center text-[10px] " + (task.completed ? "bg-emerald-500 text-white" : "border border-slate-600")}>
                {task.completed ? '✔' : ''}
              </span>
              <span className={task.completed ? "line-through text-slate-500 text-xs" : "text-slate-200 text-xs font-medium"}>
                {task.title}
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400">{task.cost} $</span>
          </div>
        ))}
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خريطة تصنيف وتوزيع حالات التطبيق الست",
    description: "الدليل المعماري لاختيار الوعاء التخزيني الأمثل لكل معلومة في تطبيقك",
    steps: [
      { step: "1", title: "Local UI State", desc: "محصورة في مكون واحد وتدار بـ useState (مودال، كشف كلمة المرور)" },
      { step: "2", title: "URL State", desc: "تخزن في الرابط بـ useSearchParams لسهولة المشاركة وثبات المفضلة" },
      { step: "3", title: "Server State", desc: "مستعارة من الخادم وتدار بأدوات التخزين المؤقت RTK Query / TanStack" },
      { step: "4", title: "Derived State", desc: "محسوبة مباشرة أثناء الرندر بدون useState لتفادي تضارب البيانات" }
    ]
  }
};
