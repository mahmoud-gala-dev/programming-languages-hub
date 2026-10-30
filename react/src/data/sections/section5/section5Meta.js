// src/data/sections/section5/section5Meta.js
// بيانات القسم 5: الملخص، جدول المرجع السريع، والمشروع المصغر

export const SECTION_5_META = {
  id: "section-5",
  title: "القسم 5: JSX والمكونات",
  englishTitle: "JSX & React Components",
  description: "الركيزة الأساسية لتطوير واجهات React: إتقان قواعد JSX الصارمة، هندسة المكونات الوظيفية، تدفق البيانات أحادي الاتجاه عبر Props، وأنماط العرض الشرطي وتكرار القوائم بكفاءة وأمان.",
  summary: [
    "JSX هو امتداد نحوي لجافاسكريبت يُترجم بواسطة المترجم (Babel/SWC) إلى دوال React.createElement أو jsxRuntime الناتجة عن كائنات JavaScript نقية.",
    "قواعد JSX الذهبية تفرض: إرجاع عنصر جذري واحد (أو استخدام Fragments <>...</>)، وإغلاق جميع الوسوم ذاتياً <tag />، واستخدام className وhtmlFor بدلاً من الكلمات المحجوزة.",
    "المكونات في React هي دوال جافاسكريبت نقية تبدأ أسماؤها بحرف كبير (PascalCase) وترجع واجهة مستخدم مبنية بـ JSX.",
    "التركيب (Component Composition) هو جوهر إعادة الاستخدام؛ نقوم بتقسيم الواجهات المعقدة إلى مكونات ذرية صغيرة ونجمعها معاً عبر خاصية children.",
    "الخصائص (Props) تمثل قنوات تدفق البيانات أحادية الاتجاه من المكون الأب إلى المكون الابن؛ وهي للقراءة فقط (Read-Only) ويُحظر تعديلها داخل الابن إطلاقاً.",
    "العرض الشرطي يتم بمرونة فائقة: Early Return للحالات الحاسمة كشاشات التحميل والأخطاء، والمعامل الثلاثي للخيارات الثنائية، والمعامل && مع الانتباه لفخ الرقم 0.",
    "تكرار القوائم يتم حصراً عبر دالة map؛ واستخدام خاصية key فريدة ومستقرة (IDs) إلزامي لخوارزمية المطابقة (Reconciliation).",
    "تجنب استخدام الفهرس الترتيبي key={index} مع القوائم القابلة للحذف أو الفرز لتفادي تسرب نصوص الحقول وتشوهات إعادة التصيير."
  ],
  cheatSheet: [
    {
      concept: "عنصر جذري واحد Single Root",
      syntax: "<> <Header /> <Main /> </>",
      note: "استخدم React Fragment لتجميع عدة عناصر دون إضافة عقد div غير لازمة في شجرة DOM."
    },
    {
      concept: "تضمين التعبيرات في JSX",
      syntax: "<h1>{user.name.toUpperCase()}</h1>",
      note: "أي تعبير صالح في JavaScript ينتج عنه قيمة يُوضع بين قوسين معقوفين {}."
    },
    {
      concept: "الفئات وأسماء الخصائص",
      syntax: '<div className="card" tabIndex={0}>',
      note: "تستخدم JSX تسميات CamelCase؛ className بدلاً من class وhtmlFor بدلاً من for."
    },
    {
      concept: "الوسوم ذاتية الإغلاق",
      syntax: '<img src={avatar} alt="Profile" />',
      note: "كل عنصر لا يحوي أبناء يجب أن ينتهي بشرطة مائلة وإغلاق صريح />."
    },
    {
      concept: "الأنماط المضمنة Inline Styles",
      syntax: '<div style={{ backgroundColor: "#1e1b4b", padding: 16 }}>',
      note: "الأقواس المزدوجة {{}}: الخارجية لتضمين JS والداخلية لتعريف كائن الأنماط بأسماء camelCase."
    },
    {
      concept: "تعريف المكون الوظيفي",
      syntax: "export function UserCard(props) { return <div>{props.name}</div>; }",
      note: "يجب أن يبدأ اسم المكون بحرف كبير (PascalCase) لتميزه React عن وسوم HTML القياسية."
    },
    {
      concept: "تفكيك الخصائص Props Destructuring",
      syntax: "function Button({ label, onClick, variant = 'primary' }) { ... }",
      note: "الأسلوب القياسي والنظيف لاستخراج الخصائص وتحديد قيم افتراضية مباشرة في رأس الدالة."
    },
    {
      concept: "خاصية الأبناء المحجوزة children",
      syntax: "<Modal> <h2>تأكيد الحذف</h2> </Modal>",
      note: "تستقبل المكونات ما يوضع بين وسمي الفتح والإغلاق داخل الخاصية props.children."
    },
    {
      concept: "الخصائص للقراءة فقط Read-Only",
      syntax: "// خطأ فادح: props.count = 5;\n// سليم: استدعاء دالة تحديث ممررة من الأب",
      note: "تتصرف دوال React كمكونات نقية؛ تعديل كائن props مباشرة يكسر تدفق البيانات ويدمر تتبع التحديثات."
    },
    {
      concept: "تمرير دوال الاستدعاء Callbacks",
      syntax: '<Button onClick={() => handleDelete(item.id)} />',
      note: "تمرير مرجع دالة أو دالة سهمية تتيح للابن تنبيه الأب بالحدث دون امتلاك الحالة مباشرة."
    },
    {
      concept: "الإرجاع المبكر Early Return",
      syntax: "if (isLoading) return <Spinner />;\nif (error) return <Alert />;",
      note: "يبسط كود الواجهة بإلغاء التداخلات والتعامل مع حالات الانتظار والأخطاء في الأسطر الأولى."
    },
    {
      concept: "المعامل الشرطي الثلاثي Ternary",
      syntax: "{isOnline ? <OnlineBadge /> : <OfflineBadge />}",
      note: "مثالي للمقارنة بين حالتين بديلتين متضادتين داخل شجرة JSX."
    },
    {
      concept: "المعامل المنطقي && Short-Circuit",
      syntax: "{hasUnread && <span className='dot' />}",
      note: "يعرض العنصر فقط إذا كان الطرف الأيسر Truthy؛ احذر استخدام {count && ...} عندما يكون count صفراً."
    },
    {
      concept: "فحص الصفر الآمن Safe Zero Check",
      syntax: "{count > 0 && <Badge count={count} />}",
      note: "يحمي الواجهة من طباعة الرقم 0 في DOM لأن الصفر رقم Falsy ولكن يُطبع كنص في React."
    },
    {
      concept: "تكرار القوائم عبر map",
      syntax: "{products.map(p => <ProductCard key={p.id} product={p} />)}",
      note: "ينتج مصفوفة عناصر JSX جديدة؛ احرص على استخدام الأقواس الدائرية () للإرجاع التلقائي."
    },
    {
      concept: "مفتاح الهوية الإلزامي key",
      syntax: '<li key={user.uuid}>{user.name}</li>',
      note: "يوضع على أول عنصر مُرجع داخل دالة map لتمكين React من تتبع العناصر بدقة أثناء إعادة التصيير."
    },
    {
      concept: "خطر الفهرس الترتيبي key={index}",
      syntax: "// تجنب مع القوائم التفاعلية:\nitems.map((it, idx) => <Row key={idx} />)",
      note: "يسبب تسرب مدخلات المستخدم واختلاط بيانات الحقول عند حذف أي عنصر من الأعلى أو المنتصف."
    },
    {
      concept: "الحالة الفارغة Empty State",
      syntax: "items.length === 0 ? <EmptyCard /> : items.map(...)",
      note: "يقدم واجهة بديلة مريحة ومفيدة للمستخدم بدل ترك الصفحة بيضاء أو فارغة عند انعدام البيانات."
    },
    {
      concept: "فصل الحاوية عن العنصر",
      syntax: "<Feed> {posts.map(p => <Post key={p.id} post={p} />)} </Feed>",
      note: "List Container مسؤول عن الفرز والتكرار، بينما Item Component مسؤول فقط عن عرض بطاقة واحدة."
    },
    {
      concept: "التصدير الافتراضي مقابل المسمى",
      syntax: "export default App; // افتراضي واحد\nexport { Card, Button }; // متعدد ومسمى",
      note: "التصدير المسمى (Named Export) يحمي من أخطاء تسميات الاستيراد العشوائية ويسهل إعادة التسمية التلقائية."
    }
  ],
  miniProject: {
    id: "mini-project-section-5",
    title: "متجر TechCraft الذكي: كتالوج منتجات متكامل بالخصائص والمفاتيح",
    englishTitle: "TechCraft Smart Product Catalog (Props, Keys & Composition)",
    description: "تطبيق عملي متكامل لمتجر أجهزة وإلكترونيات تقنية يجسد كل مهارات القسم الخامس: تقسيم الواجهة لمكونات ذرية مستقلة، تمرير وتفكيك Props بمختلف الأنواع، استخدام خاصية children للحاويات الأنيقة، نظام تصفية فئوي بالـ Ternary و &&، إدارة الحالة الفارغة Empty State، ومفاتيح مستقرة تمنع تشوه الحقول عند الحذف.",
    code: `import { useState } from "react";

// بيانات المنتجات الأصلية ذات المعرفات الفريدة المستقرة
const INITIAL_PRODUCTS = [
  {
    id: "TC-001",
    name: "ماك بوك برو 16 إنش M3 Max",
    category: "laptops",
    price: 13999,
    rating: 4.9,
    inStock: true,
    tag: "الأكثر طلباً",
    specs: ["ذاكرة 36GB", "قرص 1TB SSD", "شاشة XDR Liquid Retina"]
  },
  {
    id: "TC-002",
    name: "آيفون 16 برو تيتانيوم أسود",
    category: "phones",
    price: 4999,
    rating: 4.8,
    inStock: true,
    tag: "جديد 2026",
    specs: ["شريحة A18 Pro", "كاميرا 48MP Fusion", "زر التحكم بالكاميرا"]
  },
  {
    id: "TC-003",
    name: "سماعات سوني العازلة WH-1000XM5",
    category: "audio",
    price: 1299,
    rating: 4.7,
    inStock: false,
    tag: "نفد المخزون",
    specs: ["عزل ضوضاء رائد", "بطارية 30 ساعة", "صوت عالي الدقة Hi-Res"]
  },
  {
    id: "TC-004",
    name: "ساعة أبل ألترا 2 تيتانيوم",
    category: "wearables",
    price: 3199,
    rating: 4.9,
    inStock: true,
    tag: "موصى به",
    specs: ["هيكل تيتانيوم 49mm", "مقاومة ماء 100م", "نظام GPS ثنائي"]
  },
  {
    id: "TC-005",
    name: "شاشة سامسونج أوديسي OLED G9",
    category: "screens",
    price: 5499,
    rating: 4.6,
    inStock: true,
    tag: "عشاق الألعاب",
    specs: ["شاشة منحنية 49 إنش", "معدل تحديث 240Hz", "زمن استجابة 0.03ms"]
  }
];

// تصنيفات المتجر
const CATEGORIES = [
  { id: "all", name: "كافة المنتجات", icon: "⚡" },
  { id: "laptops", name: "الحواسيب", icon: "💻" },
  { id: "phones", name: "الهواتف", icon: "📱" },
  { id: "audio", name: "الصوتيات", icon: "🎧" },
  { id: "wearables", name: "الساعات الذكية", icon: "⌚" },
  { id: "screens", name: "الشاشات", icon: "🖥️" },
  { id: "gaming", name: "منصات ألعاب (فارغ)", icon: "🎮" }
];

// 1. مكون حاوية البطاقة بأسلوب الـ Composition وخاصية children
function CardShell({ children, className = "" }) {
  return (
    <div className={\`bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-indigo-500/10 \${className}\`}>
      {children}
    </div>
  );
}

// 2. مكون شارة الحالة المشروط
function StatusBadge({ inStock, tag }) {
  return (
    <div className="flex items-center gap-2">
      {tag && (
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          {tag}
        </span>
      )}
      <span className={\`px-2.5 py-0.5 rounded-full text-[10px] font-bold \${
        inStock ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20" : "bg-rose-500/15 text-rose-400 border border-rose-500/20"
      }\`}>
        {inStock ? "متوفر للشحن" : "غير متاح"}
      </span>
    </div>
  );
}

// 3. مكون بطاقة المنتج الفردي (ListItem Component)
function ProductItem({ product, onAddToCart, onDeleteProduct }) {
  const { id, name, price, rating, inStock, tag, specs } = product;

  return (
    <CardShell className="flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <StatusBadge inStock={inStock} tag={tag} />
          <button 
            onClick={() => onDeleteProduct(id)}
            title="حذف المنتج من الكتالوج"
            className="text-slate-500 hover:text-rose-400 transition-colors text-xs p-1 rounded-md hover:bg-slate-800"
          >
            ✕
          </button>
        </div>

        <h3 className="font-extrabold text-base text-slate-100 mb-1 leading-snug">
          {name}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-amber-400 text-xs">★ {rating}</span>
          <span className="text-slate-600 text-xs">|</span>
          <span className="text-xs font-mono text-slate-400">كود: {id}</span>
        </div>

        <ul className="space-y-1 mb-4">
          {specs.map((spec, i) => (
            <li key={i} className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase text-slate-500 block">السعر النقدي</span>
          <span className="text-lg font-black font-mono text-emerald-400">{price.toLocaleString()} ر.س</span>
        </div>

        <button
          disabled={!inStock}
          onClick={() => onAddToCart(product)}
          className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 \${
            inStock 
              ? "bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white shadow-lg shadow-indigo-600/30"
              : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50"
          }\`}
        >
          <span>{inStock ? "إضافة للسلة" : "نفدت الكمية"}</span>
          {inStock && <span>🛒</span>}
        </button>
      </div>
    </CardShell>
  );
}

// 4. مكون الحالة الفارغة (Empty State Component)
function EmptyStateMessage({ onResetCategory }) {
  return (
    <div className="col-span-full py-16 px-6 text-center bg-slate-900/60 rounded-3xl border border-dashed border-slate-800 space-y-4">
      <div className="w-20 h-20 mx-auto rounded-full bg-indigo-500/10 flex items-center justify-center text-4xl border border-indigo-500/20">
        📦
      </div>
      <h3 className="text-lg font-bold text-slate-200">لا تتوفر منتجات في هذا القسم حالياً</h3>
      <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
        يبدو أن هذا القسم لم يتم تزويده بأجهزة ومعدات بعد، أو قد تم حذف المنتجات المتاحة فيه تجريبياً.
      </p>
      <button
        onClick={onResetCategory}
        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-900/40"
      >
        عرض جميع المنتجات المتوفرة
      </button>
    </div>
  );
}

// 5. المكون الرئيسي للتطبيق المصغر
export default function TechCraftStore() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // تصفية المنتجات بناءً على التصنيف وكلمة البحث
  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    setCartCount((c) => c + 1);
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleResetData = () => {
    setProducts(INITIAL_PRODUCTS);
    setActiveCategory("all");
    setSearchQuery("");
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 font-sans space-y-6">
      {/* الترويسة العليا */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">⚡</span>
            <h1 className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
              متجر TechCraft التقني
            </h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">مشروع تطبيقي متكامل لهندسة JSX والمكونات والقوائم بالـ Props والمفاتيح</p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button 
            onClick={handleResetData}
            className="text-xs px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors font-medium border border-slate-700"
          >
            إعادة تعيين الكتالوج 🔄
          </button>
          
          <div className="relative px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-xl flex items-center gap-2">
            <span className="text-sm">🛒 السلة:</span>
            <span className="font-mono font-bold text-indigo-400">{cartCount} قطع</span>
          </div>
        </div>
      </header>

      {/* شريط البحث والتصنيفات */}
      <div className="space-y-3">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن جهاز، معالج، أو فئة..."
            className="w-full py-2.5 px-4 pr-10 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
          <span className="absolute right-3.5 top-2.5 text-slate-500 text-sm">🔍</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={\`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border \${
                activeCategory === cat.id
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800/80"
              }\`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* شبكة المنتجات أو الحالة الفارغة */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProducts.length === 0 ? (
          <EmptyStateMessage onResetCategory={() => { setActiveCategory("all"); setSearchQuery(""); }} />
        ) : (
          filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onDeleteProduct={handleDeleteProduct}
            />
          ))
        )}
      </main>
    </div>
  );
}`
  },
  infographic: {
    title: "المخطط الهيكلي الشامل لهندسة المكونات وJSX في React",
    description: "نظرة شمولية تلخص تدفق البيانات، أنماط التركيب، وخوارزمية مطابقة المفاتيح.",
    pillars: [
      {
        title: "1. النقاء والتركيب (Composition)",
        points: [
          "المكونات دوال نقية: نفس المدخلات (Props) تنتج دائماً نفس المخرجات (JSX).",
          "خاصية children: تفتح قلوب المكونات لاستقبال وتغليف محتويات مرنة بلا قيود.",
          "تفكيك الخصائص: استخدام ({ propA, propB = 'default' }) يضمن قراءة ممتعة ونظيفة."
        ]
      },
      {
        title: "2. الذكاء الشرطي (Conditionals)",
        points: [
          "الإرجاع المبكر: يفرز حالات الأخطاء والانتظار في قمة الدالة.",
          "المعامل الثلاثي: يوازن بين خيارين متضادين بأناقة داخل وسوم الواجهة.",
          "الاختصار بالـ &&: يظهر الشارات الحية مع الحرص الصارم على فحص (length > 0)."
        ]
      },
      {
        title: "3. المفاتيح والمطابقة (Keys & Reconciliation)",
        points: [
          "الهوية المستقرة: المفتاح هوية للعنصر؛ المفاتيح العشوائية تدمر الذاكرة.",
          "حظر الفهرس: key={index} ممنوع مع القوائم الديناميكية لمنع تسرب نصوص الحقول.",
          "الحالة الفارغة:Empty State جذابة بالـ CTA هي عنوان التطبيقات الاحترافية."
        ]
      }
    ]
  }
};
