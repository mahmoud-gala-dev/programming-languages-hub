// src/data/sections/section32/topic1.js
// القسم 32: مشاريع تطبيقية للمستوى المتوسط
// الموضوع 1: مشروع 6: متجر إلكتروني (E-commerce Application)

export const topic1 = {
  id: "32.1",
  title: "مشروع 6: متجر إلكتروني (E-commerce App)",
  description: "مشروع تطبيقي متوسط متكامل لبناء متجر إلكتروني حديث؛ يشمل توجيه الصفحات المتعددة، جلب المنتجات من واجهات REST، صفحة تفاصيل المنتج، البحث والتصنيف الذكي، إدارة سلة التسوق الشاملة عبر Zustand/Redux مع التخزين الدائم، حساب الضرائب والشحن، محاكاة بوابة الدفع، واختبار المكونات.",
  subtopics: [
    {
      id: "32.1.a",
      title: "إنشاء صفحات المتجر (Store Pages & Routing Architecture)",
      englishTerm: {
        term: "Store Pages & Routing Architecture",
        pronunciation: "ستور بيجز آند راوتينج آركيتكتشر",
        meaning: "هندسة وتوجيه صفحات المتجر الإلكتروني"
      },
      description: "المتجر الإلكتروني هو تطبيق متعدد الصفحات (Multi-page SPA) يتطلب هيكلاً موجهاً واضحاً يفصل بين صفحات الاستكشاف والشراء. يشمل الهيكل المعماري الأساسي: الصفحة الرئيسية (Home Page) لعرض العروض المميزة، صفحة الكتالوج الشامل (Shop/Catalog) المزودة بأدوات الفرز والتصفية، صفحة تفاصيل المنتج المفرد (Product Details Page) التي تستقبل معرف المنتج كمعامل مسار ديناميكي (`/product/:id`)، صفحة سلة المشتريات (Cart Page)، وصفحة إتمام الطلب ومراجعة الدفع (Checkout Page). يتم تنظيم هذه المسارات باستخدام `React Router` مع تخطيط عام مشترك (Shared Layout) يحمل شريط التنقل العلوي وتذييل الصفحة.",
      analogy: "يشبه المتجر التجاري الضخم (Mall)؛ بوابته الرئيسية ترحب بك وتستعرض أحدث التخفيضات، ممراته وأقسامه تقودك للمنتجات المحددة، رفوف كل سلعة تعرض مواصفاتها، وفي نهاية الجولة تتوجه إلى منصة المحاسبة (Checkout Counter) لتسديد الفاتورة واستلام الإيصال.",
      whyItMatters: "التنظيم المعماري المسبق للمسارات يمنع تشابك المكونات، ويسهل إدارة الروابط العميقة (Deep Linking) التي تمكن المستخدمين من مشاركة رابط منتج معين أو العودة لسلتهم عبر عنوان URL مباشر.",
      syntax: `// هيكل مسارات المتجر الإلكتروني
<Routes>
  <Route path="/" element={<StoreLayout />}>
    <Route index element={<HomePage />} />
    <Route path="shop" element={<ShopCatalogPage />} />
    <Route path="product/:id" element={<ProductDetailsPage />} />
    <Route path="cart" element={<CartPage />} />
    <Route path="checkout" element={<CheckoutPage />} />
  </Route>
</Routes>`,
      simpleExample: {
        title: "تعريف هيكل مسارات المتجر الأساسية مع مكون Layout مشترك",
        code: `import React from "react";

// مكون التخطيط العام المشترك للمتجر
function StoreLayout({ children, cartCount = 0 }) {
  return (
    <div style={{ fontFamily: "sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* شريط التنقل العلوي للمتجر */}
      <header style={{ padding: "16px 24px", backgroundColor: "#0f172a", color: "#ffffff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>سوق المستقبل الإلكتروني</h1>
        <nav style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <a href="#home" style={{ color: "#e2e8f0", textDecoration: "none" }}>الرئيسية</a>
          <a href="#catalog" style={{ color: "#e2e8f0", textDecoration: "none" }}>المنتجات</a>
          <a href="#cart" style={{ color: "#38bdf8", textDecoration: "none", fontWeight: "bold" }}>
            🛒 السلة ({cartCount})
          </a>
        </nav>
      </header>
      
      {/* الحاوية الرئيسية لعرض محتوى الصفحة النشطة */}
      <main style={{ flex: 1, padding: "24px", maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        {children}
      </main>

      {/* تذييل الصفحة الموحد */}
      <footer style={{ padding: "16px", backgroundColor: "#f1f5f9", textAlign: "center", fontSize: "12px", color: "#64748b" }}>
        © 2026 جميع الحقوق محفوظة لمتجر سوق المستقبل
      </footer>
    </div>
  );
}

export default StoreLayout;`
      },
      advancedExample: {
        title: "محدد المسارات الديناميكي للمتجر مع حماية مسار Checkout وتمرير المعاملات",
        code: `// مخطط مسارات المتجر مع التحقق من جاهزية السلة قبل إتمام الطلب
export const STORE_ROUTES = {
  HOME: "/",
  CATALOG: "/products",
  PRODUCT_VIEW: "/products/:productId",
  CART: "/cart",
  CHECKOUT: "/checkout",
  ORDER_CONFIRMATION: "/order-success/:orderId"
};

// فئة إدارة مسار المتجر والتحقق من صلاحية التنقل
export class StoreNavigationGuard {
  // التحقق من إمكانية الدخول إلى صفحة الدفع
  static canAccessCheckout(cartItems = []) {
    // يمنع الانتقال لصفحة الدفع إذا كانت السلة فارغة تماماً
    if (!cartItems || cartItems.length === 0) {
      return { allowed: false, redirectPath: STORE_ROUTES.CART, reason: "السلة فارغة، يرجى إضافة منتجات أولاً" };
    }
    return { allowed: true };
  }

  // بناء رابط صفحة تفاصيل المنتج الديناميكي
  static buildProductUrl(id) {
    return \`/products/\${id}\`;
  }
}

// اختبار عملي لفحص حماية مسار الدفع
const emptyCartCheck = StoreNavigationGuard.canAccessCheckout([]);
console.log("هل يُسمح بالانتقال للدفع وسلة فارغة؟", emptyCartCheck.allowed); // false
console.log("إعادة التوجيه إلى:", emptyCartCheck.redirectPath);`
      },
      outputExplanation: "يوضح هذا التأسيس تقسيم المتجر إلى صفحات منفصلة متصلة عبر روابط ديناميكية، مع وضع حواجز حماية للمسارات (Route Guards) تمنع فتح صفحة الدفع بسلة فارغة لتفادي الأخطاء المنطقية وتوفير تدفق مستخدم سليم.",
      commonMistakes: [
        {
          wrong: "// وضع كل صفحات المتجر وسلة التسوق والدفع في ملف واحد ضخم App.jsx مع شروط if متداخلة",
          correct: "// استخدام React Router لتقسيم المتجر إلى صفحات مستقلة في مجلد pages مع Layout موحد"
        }
      ],
      bestPractices: [
        "استخدام التسميات المعيارية للمسارات بصيغة RESTful (مثال: `/products` للكتالوج و `/products/:id` للمنتج)",
        "توفير زر 'متابعة التسوق' (Continue Shopping) في صفحات السلة والدفع لسهولة العودة للكتالوج",
        "تضمين شارة عدد عناصر السلة (Cart Badge) في شريط التنقل المشترك لتبقى مرئية من جميع الصفحات"
      ],
      infographic: {
        title: "هيكلية مسارات المتجر الإلكتروني",
        nodes: [
          { label: "1. المتجر الرئيسي (Home/Shop)", detail: "عرض المنتجات والتصنيفات والتخفيضات" },
          { label: "2. تفاصيل المنتج (/product/:id)", detail: "الصور، السعر، المخزون، وزر الإضافة للسلة" },
          { label: "3. سلة التسوق (/cart)", detail: "مراجعة الكميات، وتعديلها، وحساب الإجمالي" },
          { label: "4. صفحة الدفع (/checkout)", detail: "إدخال بيانات الشحن، واختيار وسيلة الدفع" }
        ]
      }
    },
    {
      id: "32.1.b",
      title: "جلب المنتجات من API (Products Fetching & Service Layer)",
      englishTerm: {
        term: "Products Fetching & Service Layer",
        pronunciation: "برودكتس فيتشنج آند سيرفيس لاير",
        meaning: "جلب المنتجات وبناء طبقة خدمات الاتصال بالخادم"
      },
      description: "تحتاج تطبيقات المتاجر الإلكترونية إلى طبقة خدمات متينة (Products Service) تتواصل مع واجهات برمجة التطبيقات (مثل FakeStoreAPI أو DummyJSON أو خادم خاص). تتولى هذه الطبقة استدعاء نقطة النهاية `/products`، والتعامل مع معايير الفلترة والترتيب (مثل الترتيب حسب السعر أو الشعبية)، وإجراء توحيد لهيكل بيانات المنتجات (Data Normalization) للتأكد من وجود حقول السعر، والتقييم بالنجوم، ونسبة الخصم، وتوافر المخزون، مع توفير بيانات تجريبية محلية (Mock Data Fallback) للعمل دون انقطاع.",
      analogy: "تشبه مستودع البضائع المركزي لشركة تجزئة؛ يطلب مدير الفرع قائمة الشحنات الجديدة عبر الهاتف، ويفحص فواتير الاستلام وأكواد المنتجات بدقة، قبل أن يرتبها على رفوف المعرض للزبائن.",
      whyItMatters: "عزل منطق جلب المنتجات في طبقة مستقلة يتيح للمطور تبديل مزود البيانات أو تحديث نقطة النهاية دون الحاجة لتعديل بطاقات المنتجات أو المكونات البصرية.",
      syntax: `// طبقة خدمة المنتجات
export const fetchProducts = async (category = "all") => {
  const url = category === "all" ? "/api/products" : \`/api/products/category/\${category}\`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("تعذر جلب المنتجات");
  return await res.json();
};`,
      simpleExample: {
        title: "دالة جلب المنتجات مع معالجة البيانات الأولية ونسب التقييم",
        code: `// قاعدة بيانات تجريبية للمنتجات
const LOCAL_PRODUCTS_DB = [
  { id: 1, title: "سماعات لاسلكية عازلة للضوضاء", price: 299, category: "إلكترونيات", rating: 4.8, inStock: true },
  { id: 2, title: "ساعة يد ذكية مقاومة للماء", price: 199, category: "إلكترونيات", rating: 4.6, inStock: true },
  { id: 3, title: "حقيبة ظهر جلدية للمحمول", price: 89, category: "إكسسوارات", rating: 4.5, inStock: false }
];

// دالة خدمة جلب المنتجات مع محاكاة الاستجابة
async function getStoreProducts(categoryFilter = "الكل") {
  // محاكاة تأخير الشبكة بمقدار 400 ميلي ثانية
  await new Promise(resolve => setTimeout(resolve, 400));

  // إذا تم اختيار تصنيف معين نقوم بالفلترة
  if (categoryFilter !== "الكل") {
    return LOCAL_PRODUCTS_DB.filter(p => p.category === categoryFilter);
  }

  // إرجاع كافة المنتجات
  return LOCAL_PRODUCTS_DB;
}

// تجربة استدعاء الدالة
getStoreProducts("إلكترونيات")
  .then(products => console.log("المنتجات المسترجعة:", products.length))
  .catch(err => console.error("خطأ في الجلب:", err));`
      },
      advancedExample: {
        title: "طبقة خدمة احترافية متكاملة تدعم التخزين المؤقت، وتحويل العملات، وفلترة النطاقات",
        code: `// فئة خدمة الكتالوج المتقدمة
export class ProductsApiService {
  constructor(baseUrl = "https://fakestoreapi.com") {
    this.baseUrl = baseUrl;
    // ذاكرة مؤقتة للمنتجات
    this.cache = new Map();
  }

  // توحيد شكل كائن المنتج الوارد
  #normalizeProduct(item) {
    return {
      id: String(item.id),
      title: item.title,
      price: Number(item.price),
      description: item.description || "لا يوجد وصف متوفر",
      category: item.category || "عام",
      image: item.image || "https://placehold.co/300x300?text=Product",
      rating: {
        rate: item.rating?.rate ?? 4.5,
        count: item.rating?.count ?? 20
      },
      // احتساب خصم افتراضي 10% لبعض العناصر
      discountPercent: item.id % 2 === 0 ? 15 : 0,
      inStock: item.id !== 7 // محاكاة نفاد مخزون أحد العناصر
    };
  }

  // جلب كافة المنتجات مع دعم الكاش
  async getAllProducts(forceRefresh = false) {
    if (!forceRefresh && this.cache.has("ALL_PRODUCTS")) {
      return this.cache.get("ALL_PRODUCTS");
    }

    try {
      const response = await fetch(\`\${this.baseUrl}/products\`);
      if (!response.ok) throw new Error(\`فشل الاتصال بخادم المنتجات (رمز: \${response.status})\`);
      const rawData = await response.json();
      const normalized = rawData.map(item => this.#normalizeProduct(item));
      this.cache.set("ALL_PRODUCTS", normalized);
      return normalized;
    } catch (err) {
      console.warn("استخدام المنتجات الاحتياطية بسبب خطأ الشبكة:", err.message);
      // في حال تعذر الشبكة، إرجاع بيانات احتياطية صالحة
      return [
        this.#normalizeProduct({ id: 101, title: "هاتف ذكي فائق السرعة", price: 899, category: "electronics" }),
        this.#normalizeProduct({ id: 102, title: "شاحن لاسلكي سريع 30W", price: 49, category: "electronics" })
      ];
    }
  }

  // جلب تفاصيل منتج واحد بمعرفه
  async getProductById(id) {
    const all = await this.getAllProducts();
    const found = all.find(p => p.id === String(id));
    if (!found) throw new Error(\`المنتج ذو المعرف \${id} غير موجود.\`);
    return found;
  }
}

export const productsService = new ProductsApiService();`
      },
      outputExplanation: "توفر طبقة الخدمة حماية تامة ضد أخطاء الشبكة ونفاد اتصال الإنترنت بفضل الـ Fallback المدمج والذاكرة المؤقتة، وتوحد أسماء الحقول وخصائص الخصم والتقييم قبل تسليمها لمكونات React.",
      commonMistakes: [
        {
          wrong: "// استخدام fetch مباشرة داخل المكون مع توقع أن الحقول مثل rating و discount موجودة دائماً دون فحص undefined",
          correct: "// استخدام دالة توحيد وتنسيق (#normalizeProduct) تضمن تعيين قيم افتراضية آمنة لكافة الخصائص الحيوية"
        }
      ],
      bestPractices: [
        "استخدام ذاكرة تخزين مؤقت بسيطة (Map Cache) لتفادي تكرار طلب قائمة المنتجات في كل مرة يتنقل فيها المستخدم بين الصفحات",
        "تحويل جميع المعرفات (id) إلى نصوص (String) بشكل موحد لتجنب أخطاء المقارنة بين الأرقام والنصوص في مسارات الرابط",
        "معالجة حالات نفاذ المخزون (Out of stock) على مستوى طبقة البيانات لإظهارها بوضوح في البطاقات"
      ],
      infographic: {
        title: "طبقة خدمة المنتجات والتوحيد",
        nodes: [
          { label: "طلب المنتجات", detail: "استدعاء getStoreProducts عبر React Hook" },
          { label: "فحص الذاكرة المؤقتة", detail: "استرجاع البيانات من Cache إذا كانت صالحة" },
          { label: "طلب الشبكة الخارجي", detail: "استدعاء REST API مع معالجة الاستثناءات" },
          { label: "توحيد البنية (Normalize)", detail: "إرجاع مصفوفة منتجات مهيكلة ومكتملة الخصائص" }
        ]
      }
    },
    {
      id: "32.1.c",
      title: "عرض تفاصيل المنتج (Product Details Page & Modal)",
      englishTerm: {
        term: "Product Details Presentation & Gallery",
        pronunciation: "برودكت ديتيلز بريزنتيشن آند جاليري",
        meaning: "عرض تفاصيل المنتج ومعرض الصور وخيارات الشراء"
      },
      description: "صفحة أو نافذة تفاصيل المنتج (Product Details View) هي المحطة الحاسمة التي يتخذ فيها المشتري قرار الإضافة إلى السلة. تتطلب هذه الصفحة عرضاً بصرياً غنياً يشمل: معرض صور تفاعلي يتيح التكبير والتبديل، السعر الحالي مع إبراز السعر القديم ونسبة الخصم، النجوم التقييمية ومراجعات المشترين، محدد كمية الشراء (Quantity Selector)، اختيار المقاسات أو الألوان المتوفرة، شارة حالة المخزون (متوفر / قارب على النفاد)، وزر الشراء البارز 'أضف إلى السلة' مع زر الشراء الفوري.",
      analogy: "تشبه تفحص علبة هاتف ذكي في متجر معتمد؛ تمسك العلبة بيدك، وتنظر لصورة الجهاز والمواصفات المكتوبة في الخلف وسعة الذاكرة واللون، وتسأل البائع عن توفر الجهاز في المخزن قبل أخذه لنقطة البيع.",
      whyItMatters: "تساعد هذه الصفحة في تحويل المتصفح الفضولي إلى مشترٍ فعلي؛ فالوضوح في مواصفات المنتج وخياراته يقلل من نسب التراجع ويوفر ثقة فورية بالموقع.",
      syntax: `// مكون عرض تفاصيل المنتج
function ProductDetails({ product, onAddToCart }) {
  const [qty, setQty] = useState(1);
  return (
    <div className="product-layout">
      <ProductGallery images={product.images} />
      <ProductMeta product={product} qty={qty} onQtyChange={setQty} onAdd={() => onAddToCart(product, qty)} />
    </div>
  );
}`,
      simpleExample: {
        title: "مكون بطاقة تفاصيل المنتج البسيطة مع محدد الكمية وزر الإضافة",
        code: `import React, { useState } from "react";

// مكون عرض تفاصيل منتج مبسط
function SimpleProductDetails({ product, onAddToCart }) {
  // حالة الكمية المطلوبة
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>جاري تحميل المنتج...</div>;

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #e2e8f0", borderRadius: "16px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* صورة المنتج */}
        <div style={{ width: "200px", height: "200px", backgroundColor: "#f1f5f9", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px" }}>
          📦
        </div>
        
        {/* بيانات المنتج */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "20px", margin: "0 0 8px", color: "#0f172a" }}>{product.title}</h2>
          <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "12px" }}>التصنيف: {product.category}</div>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#0284c7", marginBottom: "16px" }}>\${product.price}</div>
          
          {/* محدد الكمية */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span style={{ fontSize: "13px" }}>الكمية:</span>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: "4px 10px" }}>-</button>
            <span style={{ fontWeight: "bold" }}>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} style={{ padding: "4px 10px" }}>+</button>
          </div>

          {/* زر الإضافة للسلة */}
          <button
            onClick={() => onAddToCart(product, quantity)}
            style={{ width: "100%", padding: "10px", backgroundColor: "#0284c7", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}
          >
            إضافة إلى السلة ({quantity})
          </button>
        </div>
      </div>
    </div>
  );
}

export default SimpleProductDetails;`
      },
      advancedExample: {
        title: "صفحة تفاصيل منتج احترافية متكاملة مع معارض الصور وحساب الخصم وحالة المخزون التفاعلية",
        code: `import React, { useState } from "react";

// مكون صفحة تفاصيل المنتج المتقدمة
export function AdvancedProductHero({ product, onAddToCart, onBuyNow }) {
  // حالة الكمية المختارة
  const [selectedQty, setSelectedQty] = useState(1);
  // حالة اللون المختار
  const [selectedColor, setSelectedColor] = useState("Midnight Blue");
  // حالة الإشعار المؤقت بالإضافة
  const [showAddedNotice, setShowAddedNotice] = useState(false);

  if (!product) return null;

  // حساب السعر قبل الخصم إن وجد
  const originalPrice = product.discountPercent > 0
    ? Math.round(product.price / (1 - product.discountPercent / 100))
    : null;

  // معالجة الإضافة للسلة مع الإشعار البصري
  const handleAdd = () => {
    onAddToCart({
      ...product,
      chosenColor: selectedColor
    }, selectedQty);
    setShowAddedNotice(true);
    setTimeout(() => setShowAddedNotice(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* العمود الأيمن: معرض وعرض صورة المنتج الرئيسية */}
        <div className="relative flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-100 dark:border-slate-700/60">
          {product.discountPercent > 0 && (
            <span className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-black px-2.5 py-1 rounded-full shadow">
              خصم {product.discountPercent}%
            </span>
          )}
          <img
            src={product.image}
            alt={product.title}
            className="w-64 h-64 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* العمود الأيسر: المواصفات، الأسعار، وأزرار الشراء */}
        <div>
          <div className="text-xs font-bold text-sky-600 dark:text-sky-400 mb-1 uppercase tracking-wider">
            {product.category}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight mb-3">
            {product.title}
          </h1>

          {/* التقييم بالنجوم ومؤشر المخزون */}
          <div className="flex items-center gap-3 text-xs mb-4">
            <div className="flex items-center text-amber-400 font-bold">
              <span>★</span>
              <span className="mr-1 text-slate-700 dark:text-slate-300">{product.rating?.rate}</span>
              <span className="text-slate-400 mr-1">({product.rating?.count} تقييم)</span>
            </div>
            <span className="text-slate-300">•</span>
            <span className={\`font-semibold \${product.inStock ? "text-emerald-600" : "text-rose-500"}\`}>
              {product.inStock ? "✓ متوفر في المخزون" : "✕ نفد من المخزون"}
            </span>
          </div>

          {/* عرض السعر والخصم */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-black text-slate-900 dark:text-white">
              \${product.price}
            </span>
            {originalPrice && (
              <span className="text-base text-slate-400 line-through">
                \${originalPrice}
              </span>
            )}
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* محدد خيارات الألوان */}
          <div className="mb-6">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
              اللون: <span className="font-normal text-slate-500">{selectedColor}</span>
            </label>
            <div className="flex gap-2">
              {["Midnight Blue", "Space Gray", "Silver"].map(color => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={\`text-xs px-3 py-1.5 rounded-xl border transition \${selectedColor === color ? "border-sky-500 bg-sky-50 dark:bg-sky-950/60 font-bold text-sky-700 dark:text-sky-300" : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"}\`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* محدد الكمية وأزرار الإجراءات */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* أزرار زيادة وإنقاص الكمية */}
            <div className="flex items-center justify-between border border-slate-200 dark:border-slate-700 rounded-2xl p-1 bg-slate-50 dark:bg-slate-800">
              <button
                type="button"
                onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))}
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-slate-600 hover:bg-white dark:hover:bg-slate-700 transition"
              >
                -
              </button>
              <span className="px-4 text-sm font-black text-slate-800 dark:text-slate-200">{selectedQty}</span>
              <button
                type="button"
                onClick={() => setSelectedQty(selectedQty + 1)}
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-slate-600 hover:bg-white dark:hover:bg-slate-700 transition"
              >
                +
              </button>
            </div>

            {/* زر الإضافة للسلة */}
            <button
              type="button"
              disabled={!product.inStock}
              onClick={handleAdd}
              className="flex-1 py-3 px-6 bg-slate-900 text-white dark:bg-sky-600 rounded-2xl font-bold text-xs shadow-lg hover:opacity-90 transition disabled:opacity-40"
            >
              🛒 أضف إلى السلة
            </button>
          </div>

          {/* تنبيه تأكيد الإضافة */}
          {showAddedNotice && (
            <div className="mt-4 p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl border border-emerald-200 text-center font-bold animate-fade-in">
              ✓ تم إضافة {selectedQty} قطعة بنجاح إلى سلة التسوق!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يعرض هذا المكون نموذجاً مكتملاً لصفحة تفاصيل المنتج؛ يحتوي على معرض صورة واضح، وحساب آلي للخصومات، واختيار للخيارات والكمية، مع تقديم تغذية راجعة فورية عند النقر على زر الإضافة.",
      commonMistakes: [
        {
          wrong: "// السماح باختيار كمية سالبة أو الصفر (-1 أو 0) مما يتسبب في أخطاء حسابية في السلة",
          correct: "// ضبط الحد الأدنى للكمية عند 1 باستخدام Math.max(1, qty - 1) ومنع الإضافة إذا كان المنتج غير متوفر في المخزون"
        }
      ],
      bestPractices: [
        "عرض السعر الإجمالي المحسوب للكمية المطلوبة لتوضيح القيمة المالية للمشتري قبل الضغط على زر الشراء",
        "تأكيد إضافة المنتج عبر إشعار ناعم (Toast Notice) بدلاً من مقاطعة تجربة التصفح بتنبيهات alert مزعجة",
        "تعطيل زر الإضافة وتغيير لونه للرمادي في حال كان المخزون نافداً لمنع خيبة أمل المستخدم"
      ],
      infographic: {
        title: "تشريح صفحة تفاصيل المنتج",
        nodes: [
          { label: "معرض الصور (Gallery)", detail: "صور عالية الجودة وشارات الخصومات" },
          { label: "المواصفات والتقييم", detail: "النجوم التقييمية ومراجعات المشترين والوصف" },
          { label: "محدد الخيارات والكمية", detail: "الألوان، المقاسات، والتحكم الآمن في العدد" },
          { label: "الإجراءات التفاعلية", detail: "أضف للسلة مع إشعار تأكيد فوري" }
        ]
      }
    },
    {
      id: "32.1.d",
      title: "تنفيذ البحث والفلترة (Realtime Search & Category Filtering)",
      englishTerm: {
        term: "Catalog Search, Filter & Multi-sort",
        pronunciation: "كاتالوج سيرتش، فلتر آند مالتي سورت",
        meaning: "البحث في الكتالوج والتصفية والترتيب المتعدد"
      },
      description: "تحتوي المتاجر الإلكترونية على مئات أو آلاف المنتجات؛ مما يجعل محرك الفلترة والبحث (Search & Filter Engine) الركيزة الأولى لرحلة العميل. يتطلب هذا النظام دعماً متزامناً لثلاثة محاور فلترة رئيسية: (1) البحث النصي الفوري في أسماء وأوصاف المنتجات، (2) التصفية بحسب التصنيف (Category Pills)، و (3) تصفية وتحديد نطاق الأسعار (Price Range Slider) مع إمكانية الترتيب المتعدد (من الأقل سعراً للأعلى، أو حسب التقييم). يجب تنفيذ هذه الفلترة كحالة مشتقة (Derived State) باستخدام `useMemo` لضمان أداء فائق دون أي تأخير في الاستجابة.",
      analogy: "يشبه استخدام فلاتر البحث في مكتبة إلكترونية عملاقة؛ تحدد قسماً معيناً (مثل التاريخ)، ثم تحدد الكتب الصادرة بعد عام 2020، وترتبها حسب الأكثر قراءة؛ فتظهر لك قائمة دقيقة بالكتب التي تطابق رغبتك في ثوانٍ معدودة.",
      whyItMatters: "يسرع وصول العميل إلى غايته؛ فكل نقرة توفرها على المشتري ترفع من معدل التحويل (Conversion Rate) وتقلل من احتمالية مغادرته للمتجر دون شراء.",
      syntax: `// تصفية الكتالوج المشتقة متعددة المعايير
const filteredProducts = useMemo(() => {
  return products
    .filter(p => selectedCategory === "all" || p.category === selectedCategory)
    .filter(p => p.price <= maxPrice)
    .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);
}, [products, selectedCategory, maxPrice, searchQuery, sortOrder]);`,
      simpleExample: {
        title: "فلترة قائمة منتجات حسب التصنيف وترتيب السعر",
        code: `// دالة تصفية منتجات بسيطة
function filterAndSortProducts(products, category, maxPrice, sortAscending = true) {
  return products
    // تصفية التصنيف
    .filter(item => category === "الكل" || item.category === category)
    // تصفية أقصى سعر
    .filter(item => item.price <= maxPrice)
    // فرز الأسعار
    .sort((a, b) => sortAscending ? a.price - b.price : b.price - a.price);
}

// اختبار الفلترة
const catalog = [
  { id: 1, title: "سماعة", category: "إلكترونيات", price: 150 },
  { id: 2, title: "قميص", category: "أزياء", price: 60 },
  { id: 3, title: "شاشة", category: "إلكترونيات", price: 400 }
];

const results = filterAndSortProducts(catalog, "إلكترونيات", 200, true);
console.log("النتائج المطابقة:", results.map(r => r.title)); // ['سماعة']`
      },
      advancedExample: {
        title: "شريط أدوات فلترة متقدم يجمع بين البحث، وأزرار التصنيفات، ومنزلق السعر، والترتيب الذكي",
        code: `import React, { useMemo } from "react";

// مكون شريط تحكم الكتالوج المتكامل
export function CatalogFilterBar({
  categories = [],
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  maxPrice,
  currentMaxPrice,
  onPriceChange,
  sortOption,
  onSortChange,
  totalResults
}) {
  return (
    <div className="w-full bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8 space-y-4">
      {/* الصف الأول: حقل البحث وقائمة الترتيب */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        {/* حقل البحث بالاسم */}
        <div className="relative flex-1 w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ابحث عن منتج بالاسم أو المواصفات..."
            className="w-full pl-4 pr-10 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-sky-500"
          />
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
        </div>

        {/* قائمة اختيار نوع الترتيب */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-slate-400 whitespace-nowrap">الترتيب:</span>
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-xs py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none font-medium"
          >
            <option value="featured">المميز أولاً</option>
            <option value="price-low">السعر: من الأقل للأعلى</option>
            <option value="price-high">السعر: من الأعلى للأقل</option>
            <option value="rating">الأعلى تقييماً</option>
          </select>
        </div>
      </div>

      {/* الصف الثاني: أزرار التصنيفات ومنزلق السعر */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-3 border-t border-slate-100 dark:border-slate-800">
        {/* أزرار التصنيفات */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-slate-400 ml-1">التصنيف:</span>
          {["الكل", ...categories].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={\`text-xs px-3 py-1 rounded-full transition font-semibold \${
                selectedCategory === cat
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
              }\`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* منزلق تحديد السعر الأقصى */}
        <div className="flex items-center gap-3 w-full md:w-64">
          <span className="text-xs text-slate-400 whitespace-nowrap">أقصى سعر:</span>
          <input
            type="range"
            min={10}
            max={maxPrice || 1000}
            value={currentMaxPrice}
            onChange={(e) => onPriceChange(Number(e.target.value))}
            className="w-full accent-sky-600 cursor-pointer"
          />
          <span className="text-xs font-bold text-slate-900 dark:text-white whitespace-nowrap">\${currentMaxPrice}</span>
        </div>
      </div>

      {/* شريط الإحصائية السفلية */}
      <div className="text-[11px] text-slate-400 pt-1 flex justify-between">
        <span>عدد المنتجات المطابقة: <strong className="text-slate-700 dark:text-slate-200">{totalResults}</strong></span>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يدمج هذا الشريط جميع محاور الفلترة في لوحة تحكم أفقية سهلة الاستخدام؛ تتيح البحث الفوري بالاسم، والتبديل بين التصنيفات، وضبط نطاق الأسعار عبر Range Slider، مع إظهار عدد النتائج المطابقة فورياً.",
      commonMistakes: [
        {
          wrong: "// استخدام عدة حالات مستقلة لنتائج البحث وإعادة تعيينها يدوياً مما يسبب تعارض الفلاتر وفقدان إحدى الشروط",
          correct: "// استخدام دمج موحد للشروط الأربعة داخل دالة useMemo واحدة لحساب مصفوفة النتائج المشتقة بشكل ذري"
        }
      ],
      bestPractices: [
        "استخراج الحد الأقصى للسعر ديناميكياً من أعلى منتج موجود في قاعدة البيانات عبر Math.max",
        "توفير زر 'إعادة تعيين الفلاتر' عند فراغ النتائج لتمكين المستخدم من العودة للوضع الطبيعي بنقرة واحدة",
        "تطبيق ترشيح خفيف للنصوص (Trim وتجاهل حالة الحروف Lowercase) لضمان دقة البحث العربي والإنجليزي"
      ],
      infographic: {
        title: "خطوات التصفية المشتقة متعددة المعايير",
        nodes: [
          { label: "1. قائمة المنتجات الخام", detail: "قاعدة البيانات الكاملة" },
          { label: "2. فلترة التصنيف والسعر", detail: "حصر الفئات وتطبيق منزلق الميزانية" },
          { label: "3. مطابقة عبارة البحث", detail: "فحص أسماء المنتجات والأوصاف" },
          { label: "4. الترتيب النهائي (Sorting)", detail: "فرز تصاعدي/تنازلي أو حسب التقييم" }
        ]
      }
    },
    {
      id: "32.1.e",
      title: "إضافة المنتجات إلى سلة التسوق (Add to Cart Action)",
      englishTerm: {
        term: "Add to Cart Mutation & Inventory Checks",
        pronunciation: "آد تو كارت ميوتيشن آند إنفنتوري تشيكس",
        meaning: "إجراء الإضافة إلى سلة التسوق وفحص المخزون"
      },
      description: "تمثل عملية إضافة المنتج إلى السلة النقطة المحورية لتدفق الشراء في المتجر الإلكتروني. تتطلب هذه العملية صياغة منطقية دقيقة؛ فعند النقر على 'أضف إلى السلة' يجب أولاً فحص ما إذا كان المنتج موجوداً مسبقاً في السلة: فإذا كان موجوداً، لا تتم إضافة عنصر جديد بل يتم رفع عداد الكمية بمقدار الكمية المحددة، مع التحقق من عدم تجاوز الحد الأقصى للمخزون المتاح، وإذا لم يكن موجوداً، يُضاف كعنصر جديد في مصفوفة السلة مع تعيين كمية مبدئية، يرافق ذلك إطلاق تأثيرات بصرية تؤكد نجاح العملية.",
      analogy: "تشبه وضع علبة حليب في عربة التسوق في السوبرماركت؛ إذا كانت عربتك خالية تضع العلبة الأولى، وإذا كانت العربة تحوي علبة حليب بالفعل تضع العلبة الثانية بجانبها فيصبح لديك علبتان في نفس الصنف دون الحاجة لعربة جديدة.",
      whyItMatters: "التعامل السليم مع إضافة المنتجات يمنع تكرار نفس الصنف في أسطر متعددة داخل السلة، ويضمن احتساب الكميات والأسعار بدقة متناهية.",
      syntax: `// منطق إضافة منتج إلى السلة بشكل نقي
const addToCart = (product, quantity = 1) => {
  setCartItems(prev => {
    const existingIndex = prev.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
      return prev.map((item, idx) => 
        idx === existingIndex ? { ...item, quantity: item.quantity + quantity } : item
      );
    }
    return [...prev, { ...product, quantity }];
  });
};`,
      simpleExample: {
        title: "دالة إضافة منتج إلى مصفوفة السلة مع فحص التكرار",
        code: `// دالة نقية لإضافة منتج إلى السلة
function addProductToCartList(cart, newProduct, qty = 1) {
  // البحث عن وجود المنتج مسبقاً
  const existingItem = cart.find(item => item.id === newProduct.id);

  if (existingItem) {
    // زيادة الكمية للعنصر الموجود
    return cart.map(item =>
      item.id === newProduct.id
        ? { ...item, quantity: item.quantity + qty }
        : item
    );
  }

  // إضافة كعنصر جديد إذا لم يكن موجوداً
  return [...cart, { ...newProduct, quantity: qty }];
}

// اختبار الدالة
let myCart = [{ id: 10, title: "سماعة", price: 100, quantity: 1 }];

// إضافة نفس المنتج مرة أخرى بكمية 2
myCart = addProductToCartList(myCart, { id: 10, title: "سماعة", price: 100 }, 2);
console.log("الكمية المحدثة للسماعة:", myCart[0].quantity); // 3`
      },
      advancedExample: {
        title: "نظام إدارة إضافة السلة المتقدم مع التحقق من سقف المخزون والتراجع وإطلاق التأثيرات البصرية",
        code: `// فئة إدارة عمليات سلة التسوق
export class CartDomainOperations {
  // إضافة منتج مع فحص المخزون والحد الأقصى
  static addItem(cart, product, requestedQty = 1, maxStock = 10) {
    // التحقق من صحة الكمية المطلوبة
    if (requestedQty <= 0) {
      throw new Error("يجب أن تكون الكمية المطلوبة 1 على الأقل.");
    }

    const itemIndex = cart.findIndex(item => item.id === product.id);

    if (itemIndex > -1) {
      const currentQty = cart[itemIndex].quantity;
      const newTotalQty = currentQty + requestedQty;

      // فحص عدم تجاوز المخزون المتاح
      if (newTotalQty > maxStock) {
        return {
          success: false,
          error: \`عذراً، أقصى كمية متاحة لهذا المنتج هي \${maxStock} قطع فقط.\`,
          updatedCart: cart
        };
      }

      // تحديث الكمية داخل السلة
      const updated = cart.map((item, idx) =>
        idx === itemIndex ? { ...item, quantity: newTotalQty, updatedAt: Date.now() } : item
      );

      return { success: true, updatedCart: updated };
    }

    // فحص المخزون للعنصر الجديد
    if (requestedQty > maxStock) {
      return {
        success: false,
        error: \`الكمية المطلوبة تتجاوز المخزون المتوفر (\${maxStock}).\`,
        updatedCart: cart
      };
    }

    // إضافة كعنصر جديد مكتمل البيانات
    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: requestedQty,
      maxStock: maxStock,
      addedAt: Date.now()
    };

    return {
      success: true,
      updatedCart: [...cart, newItem]
    };
  }
}

// تجربة فحص سقف المخزون
const currentCart = [{ id: "p1", title: "لابتوب", quantity: 4 }];
const result = CartDomainOperations.addItem(currentCart, { id: "p1" }, 2, 5);
console.log("هل نجحت الإضافة متجاوزة المخزون 5؟", result.success); // false
console.log("رسالة الخطأ:", result.error);`
      },
      outputExplanation: "يوضح هذا التصميم كيف يمنع نظام CartDomainOperations تجاوز سقف المخزون المحدد للمنتج، ويضمن عدم تكرار أسطر المنتجات المتشابهة مع توفير كائن استجابة يوضح نجاح أو فشل العملية ورسالة الخطأ المناسبة.",
      commonMistakes: [
        {
          wrong: "// عمل cart.push(product) مباشرة ثم استدعاء setCart(cart) مما يكسر التحديث النقي في React ولا يكتشف التغيير",
          correct: "// دائماً استخدم map للعناصر الموجودة أو معامل الانتشار [...] لإنشاء مصفوفة سلة جديدة تماماً"
        }
      ],
      bestPractices: [
        "التحقق من توفر المخزون قبل زيادة الكمية لمنع إتمام طلبات لمنتجات غير متوفرة",
        "توفير إشعار تأكيد فوري يوضح اسم المنتج المضاف والكمية",
        "تحديث شارة العداد في الهيدر فورياً عند كل إضافة ناجحة"
      ],
      infographic: {
        title: "خوارزمية الإضافة إلى سلة التسوق",
        nodes: [
          { label: "1. ضغطة 'أضف للسلة'", detail: "استقبال المنتج والكمية المطلوبة" },
          { label: "2. فحص الوجود المسبق", detail: "البحث في مصفوفة السلة عبر findIndex" },
          { label: "3. فحص سقف المخزون", detail: "التأكد من أن الكمية الإجمالية لا تتجاوز المتاح" },
          { label: "4. التحديث النقي", detail: "تحديث الكمية بـ map أو إضافة عنصر جديد بـ [...]" }
        ]
      }
    },
    {
      id: "32.1.f",
      title: "تحديث الكميات (Cart Quantity Updates & Bounds)",
      englishTerm: {
        term: "Cart Quantity Bounds & Adjustments",
        pronunciation: "كارت كوانتيتي باوندز آند أدجاستمنتس",
        meaning: "ضبط كميات عناصر السلة والتحكم في الحدود الدنيا والقصوى"
      },
      description: "تحتاج صفحة السلة إلى تحكم مرن في كميات المنتجات؛ بحيث يتمكن المشتري من زيادة الكمية (+) أو إنقاصها (-) بنقرة زر واحدة أو كتابة الكمية مباشرة في حقل رقمي. تتطلب هذه الميزة ضبطاً دقيقاً للحدود (Bounds Control): الحد الأدنى هو 1 (وعند إنقاص الكمية عن 1 يمكن تخيير المستخدم بين الحذف أو التوقف عند 1)، والحد الأقصى مقيد بالمخزون المتوفر لدى المتجر. كما يجب إعادة احتساب المجموع الفرعي لكل عنصر تلقائياً وبشكل فوري.",
      analogy: "يشبه عداد أسطوانة الغاز أو عداد المياه؛ يمكنك زيادة التدفق أو تقليله بلف المفتاح، لكن هناك صمام أمان يمنعك من لف المفتاح إلى ما لا نهاية أو إغلاقه إلى قيمة سالبة مستحيلة.",
      whyItMatters: "يمنح المشتري حرية تعديل طلبه دون الحاجة لحذف المنتج والعودة لصفحة الكتالوج لاختياره بكمية جديدة، مما يحسن تجربة الاستخدام ويسرع عملية الشراء.",
      syntax: `// دالة تحديث كمية عنصر في السلة
const updateItemQuantity = (id, newQty) => {
  if (newQty < 1) return;
  setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
};`,
      simpleExample: {
        title: "مكون التحكم في كمية عنصر السلة البسيط",
        code: `import React from "react";

// مكون أزرار تعديل الكمية
function CartItemQuantityControl({ quantity, maxStock = 10, onChangeQuantity }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", border: "1px solid #cbd5e1", borderRadius: "8px", overflow: "hidden" }}>
      {/* زر إنقاص الكمية */}
      <button
        onClick={() => onChangeQuantity(Math.max(1, quantity - 1))}
        disabled={quantity <= 1}
        style={{ padding: "6px 12px", border: "none", backgroundColor: "#f8fafc", cursor: quantity <= 1 ? "not-allowed" : "pointer" }}
      >
        -
      </button>

      {/* عرض الرقم الحالي */}
      <span style={{ padding: "6px 16px", fontWeight: "bold", fontSize: "14px" }}>
        {quantity}
      </span>

      {/* زر زيادة الكمية */}
      <button
        onClick={() => onChangeQuantity(Math.min(maxStock, quantity + 1))}
        disabled={quantity >= maxStock}
        style={{ padding: "6px 12px", border: "none", backgroundColor: "#f8fafc", cursor: quantity >= maxStock ? "not-allowed" : "pointer" }}
      >
        +
      </button>
    </div>
  );
}

export default CartItemQuantityControl;`
      },
      advancedExample: {
        title: "مكون صف عنصر السلة المتكامل مع الإدخال المباشر وتحديث الأسعار التلقائي ورصد أخطاء السعة",
        code: `import React from "react";

// مكون سطر عنصر السلة المتطور
export function AdvancedCartItemRow({ item, onUpdateQuantity, onRemoveItem }) {
  // معالجة تغيير القيمة من حقل الإدخال النصي
  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) return;
    // ضبط القيمة بين 1 وسقف المخزون
    const bounded = Math.max(1, Math.min(item.maxStock || 99, val));
    onUpdateQuantity(item.id, bounded);
  };

  // المجموع الفرعي لهذا العنصر
  const itemSubtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm gap-4 transition hover:shadow-md">
      {/* صورة واسم المنتج */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <img
          src={item.image || "https://placehold.co/80x80"}
          alt={item.title}
          className="w-16 h-16 object-contain rounded-xl bg-slate-50 dark:bg-slate-900 p-2"
        />
        <div>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">{item.title}</h4>
          <span className="text-xs text-slate-400">سعر القطعة: \${item.price}</span>
        </div>
      </div>

      {/* محدد الكمية الذكي */}
      <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
        <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900">
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="px-3 py-1.5 font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30"
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            onChange={handleInputChange}
            min={1}
            max={item.maxStock || 99}
            className="w-12 text-center text-xs font-bold bg-transparent border-none outline-none text-slate-900 dark:text-white"
          />
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            disabled={item.quantity >= (item.maxStock || 99)}
            className="px-3 py-1.5 font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30"
          >
            +
          </button>
        </div>

        {/* إجمالي سعر الصنف */}
        <div className="text-right min-w-20">
          <span className="text-sm font-black text-slate-900 dark:text-white">\${itemSubtotal}</span>
        </div>

        {/* زر حذف الصنف */}
        <button
          type="button"
          onClick={() => onRemoveItem(item.id)}
          title="حذف من السلة"
          className="text-slate-400 hover:text-rose-500 p-2 text-sm transition"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يوفر هذا السطر تحكماً مزدوجاً بالكمية: إما عبر النقر على أزرار الزيادة والإنقاص أو عبر الكتابة المباشرة في حقل الرقم، مع حساب المجموع الفرعي للصنف فورياً وتأمين الحدين الأدنى والأعلى.",
      commonMistakes: [
        {
          wrong: "// السماح بإدخال نصوص أو أرقام سالبة في حقل الكمية دون تحقق (Validation) مما يفسد حسابات الفاتورة",
          correct: "// استخدام parseInt والتحقق بواسطة isNaN وضبط القيمة عبر Math.max و Math.min لضمان بقائها في النطاق السليم"
        }
      ],
      bestPractices: [
        "تعطيل زر الزيادة عند وصول الكمية للحد الأقصى المتاح بالمخزون مع إظهار تلميح صغير",
        "تنسيق المجموع الفرعي دائماً بخانتين عشريتين باستخدام .toFixed(2) لدقة العملات المالية",
        "توفير زر حذف مباشر بجانب كل صنف لتسهيل تنظيف السلة بنقرة واحدة"
      ],
      infographic: {
        title: "ضوابط تعديل كمية عناصر السلة",
        nodes: [
          { label: "الحد الأدنى (Min: 1)", detail: "منع النزول عن 1 لتفادي الكميات الصفرية والسالبة" },
          { label: "الحد الأقصى (Max Stock)", detail: "التقيد بالمخزون الفعلي المتوفر في المستودع" },
          { label: "المجموع الفرعي (Subtotal)", detail: "حساب فوري: price * quantity بنظام toFixed(2)" },
          { label: "التزامن الفوري", detail: "تحديث السعر الكلي للسلة فور تعديل أي كمية" }
        ]
      }
    },
    {
      id: "32.1.g",
      title: "حذف المنتجات من السلة (Item Removal & Undo)",
      englishTerm: {
        term: "Cart Item Eviction & Soft-delete Undo",
        pronunciation: "كارت آيتم إيفيكشن آند سوفت ديليت أندو",
        meaning: "حذف المنتجات من السلة وإمكانية التراجع الفوري"
      },
      description: "حذف منتج من سلة التسوق هو عملية حاسمة قد يرتكبها المستخدم عن طريق الخطأ بسبب نقرة غير مقصودة. يتطلب التطبيق الاحترافي توفير آليتين: (1) حذف الصنف الفردي باستخدام دالة `filter` لترشيح المصفوفة دون لمس العناصر الأخرى، و (2) توفير شريط تراجع مؤقت (Undo Toast) يحفظ نسخة من العنصر المحذوف لمدة 5 ثوانٍ، بحيث يستطيع العميل استعادته فورياً بنفس كميته السابقة دون الحاجة للبحث عنه مجدداً في الكتالوج، بالإضافة إلى زر 'تفريغ السلة بالكامل' مع رسالة تأكيد تحذيرية.",
      analogy: "يشبه إخراج غرض من عربة التسوق ووضعه على طاولة الاسترجاع بجانب الكاشير؛ إذا تذكرت أنك تريده قبل مغادرة المتجر، يمكنك مده واستعادته للعربة في الحال دون الرجوع للممرات البعيدة.",
      whyItMatters: "يحمي المبيعات من الضياع الناتج عن النقرات العرضية، ويوفر تجربة تسوق مريحة خالية من التوتر والقلق لدى العميل.",
      syntax: `// حذف عنصر واستعادة السلة عبر Undo
const removeItem = (id) => {
  const removed = cart.find(i => i.id === id);
  setCart(prev => prev.filter(i => i.id !== id));
  showUndoNotification(removed);
};`,
      simpleExample: {
        title: "دالة حذف عنصر من السلة عبر filter",
        code: `// دالة حذف عنصر من مصفوفة السلة بشكل نقي
function removeProductFromCart(cartItems, productIdToRemove) {
  // استبعاد العنصر صاحب المعرف المطلوب
  return cartItems.filter(item => item.id !== productIdToRemove);
}

// اختبار الدالة
const initialCart = [
  { id: 1, title: "ساعة ذكية" },
  { id: 2, title: "حقيبة" }
];

const updatedCart = removeProductFromCart(initialCart, 1);
console.log("العناصر المتبقية في السلة:", updatedCart.map(i => i.title)); // ['حقيبة']`
      },
      advancedExample: {
        title: "نظام حذف آمن من السلة مع ميزة التراجع المؤقت (Undo System) وتفريغ السلة بالكامل",
        code: `import React, { useState, useRef } from "react";

// هوك مخصص لإدارة حذف السلة مع دعم التراجع (Undo)
export function useCartWithUndo(initialItems = []) {
  const [cart, setCart] = useState(initialItems);
  const [recentlyRemoved, setRecentlyRemoved] = useState(null);
  const undoTimerRef = useRef(null);

  // حذف عنصر فردي مع تفعيل نافذة التراجع
  const removeItemWithUndo = (id) => {
    const itemToDelete = cart.find(i => i.id === id);
    if (!itemToDelete) return;

    // حذف من السلة
    setCart(prev => prev.filter(i => i.id !== id));
    // حفظ في الذاكرة المؤقتة للتراجع
    setRecentlyRemoved(itemToDelete);

    // إلغاء أي مؤقت سابق وتعيين مؤقت لإغلاق الإشعار بعد 5 ثوانٍ
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    undoTimerRef.current = setTimeout(() => {
      setRecentlyRemoved(null);
    }, 5000);
  };

  // استعادة العنصر المحذوف مؤخراً
  const undoLastRemoval = () => {
    if (!recentlyRemoved) return;
    setCart(prev => [...prev, recentlyRemoved]);
    setRecentlyRemoved(null);
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
  };

  // تفريغ السلة بالكامل
  const clearCart = () => {
    if (window.confirm("هل أنت متأكد من رغبتك في تفريغ سلة التسوق بالكامل؟")) {
      setCart([]);
      setRecentlyRemoved(null);
    }
  };

  return {
    cart,
    setCart,
    removeItemWithUndo,
    recentlyRemoved,
    undoLastRemoval,
    clearCart
  };
}

// مكون إشعار التراجع العائم
export function CartUndoToast({ removedItem, onUndo }) {
  if (!removedItem) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-4 z-50 animate-bounce">
      <span className="text-xs">
        تم حذف <strong>{removedItem.title}</strong> من السلة.
      </span>
      <button
        type="button"
        onClick={onUndo}
        className="text-xs font-bold text-sky-400 hover:text-sky-300 underline"
      >
        تراجع ↺
      </button>
    </div>
  );
}`
      },
      outputExplanation: "يوضح هذا التصميم كيف يوفر هوك useCartWithUndo شبكة أمان للمستخدم؛ فعند حذف أي منتج يتم حفظه مؤقتاً في recentlyRemoved لمدة 5 ثوانٍ، وإذا نقر المشتري على 'تراجع' يعاد المنتج فورياً للسلة بنفس كميته السابقة.",
      commonMistakes: [
        {
          wrong: "// حذف المنتج فورياً ونهائياً بدون أي رسالة تنبيه أو وسيلة للتراجع مما يثير استياء المشتري عند الضغط العفوي",
          correct: "// توفير شريط تراجع (Undo Notification) يمنح المستخدم 5 ثوانٍ لاستعادة ما تم حذفه بسلاسة"
        }
      ],
      bestPractices: [
        "طلب تأكيد صريح (Confirmation Modal) فقط عند تفريغ السلة بالكامل لتجنب فقدان مجهود التسوق",
        "تنظيف مؤقت الـ setTimeout عبر useRef عند إلغاء تركيب المكون لمنع تسرب الذاكرة",
        "تحديث كافة مجاميع الفاتورة والضرائب في نفس اللحظة التي يتم فيها الحذف أو التراجع"
      ],
      infographic: {
        title: "دورة الحذف الآمن والتراجع في السلة",
        nodes: [
          { label: "1. ضغط زر الحذف 🗑️", detail: "استبعاد العنصر مؤقتاً من مصفوفة السلة" },
          { label: "2. حفظ نسخة في الذاكرة", detail: "تخزين العنصر في كائن recentlyRemoved" },
          { label: "3. إظهار شريط التراجع", detail: "نافذة عائمة بمهلة 5 ثوانٍ مع زر 'تراجع ↺'" },
          { label: "4. الاستعادة أو التثبيت", detail: "إعادة العنصر للسلة أو انتهاء المهلة والحذف النهائي" }
        ]
      }
    },
    {
      id: "32.1.h",
      title: "حساب إجمالي الأسعار (Totals, Discounts, Taxes & Shipping)",
      englishTerm: {
        term: "Cart Financial Calculations & Price Breakdown",
        pronunciation: "كارت فاينانشال كالكوليشنز آند برايس بريك داون",
        meaning: "الحسابات المالية للسلة وتفصيل الفاتورة والضرائب والشحن"
      },
      description: "المحرك المالي للسلة (Cart Pricing Engine) هو الذي يحدد بدقة متناهية المبالغ المستحقة على العميل قبل الانتقال إلى بوابة الدفع. تتضمن الفاتورة المالية تفصيلاً دقيقاً: (1) المجموع الفرعي للمنتجات (Subtotal) = مجموع حاصل ضرب سعر كل منتج في كميته، (2) الخصومات المطبقة عبر قسائم الشراء (Promo Codes / Coupons)، (3) ضريبة القيمة المضافة (VAT - مثلاً 15%)، و (4) تكلفة الشحن (Shipping Cost) التي يمكن أن تصبح مجانية تلقائياً إذا تجاوز المجموع الفرعي حداً معيناً (مثلاً شحن مجاني للطلبات فوق 200 دولار)، وصولاً إلى المجموع الإجمالي النهائي (Grand Total).",
      analogy: "يشبه الفاتورة المطبوعة من صندوق الكاشير في المتاجر الكبرى؛ توضح سعر البضائع الإجمالي، ثم سطر يوضح خصم بطاقة الولاء، ثم تكلفة التوصيل للمنزل، ثم قيمة الضريبة المضافة الرسمية، وأخيراً المبلغ الإجمالي المطلوب دفعه نقداً أو بالبطاقة.",
      whyItMatters: "الشفافية الكاملة في تفاصيل الأسعار قبل الدفع تمنع المفاجآت غير السارة للعميل (Hidden Fees) وهي السبب الأول لظاهرة التخلي عن سلة التسوق (Cart Abandonment).",
      syntax: `// دالة حساب الفاتورة الشاملة
const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
const discount = promoCode === "SAVE20" ? subtotal * 0.2 : 0;
const shipping = subtotal > 200 || subtotal === 0 ? 0 : 15;
const tax = (subtotal - discount) * 0.15;
const grandTotal = subtotal - discount + shipping + tax;`,
      simpleExample: {
        title: "حساب المجموع الفرعي والإجمالي البسيط مع ضريبة 15%",
        code: `// دالة حساب المجموع المالي البسيط للسلة
function calculateOrderTotals(items) {
  // حساب المجموع الفرعي عبر دالة reduce
  const subtotal = items.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);

  // احتساب ضريبة القيمة المضافة 15%
  const tax = subtotal * 0.15;
  // تكلفة شحن ثابتة 10$ إذا كانت السلة تحتوي على منتجات
  const shipping = subtotal > 0 ? 10 : 0;
  // الإجمالي النهائي
  const total = subtotal + tax + shipping;

  return {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    shipping: shipping.toFixed(2),
    total: total.toFixed(2)
  };
}

// اختبار الحساب
const demoCart = [
  { price: 50, quantity: 2 }, // 100
  { price: 40, quantity: 1 }  // 40
];

const invoice = calculateOrderTotals(demoCart);
console.log("المجموع الفرعي:", invoice.subtotal); // 140.00
console.log("الإجمالي النهائي:", invoice.total);   // 171.00`
      },
      advancedExample: {
        title: "محرك حسابات مالية احترافي مع دعم قسائم الخصم، والشحن المجاني الشرطي، وتفقيط العملات",
        code: `// محرك الحسابات المالية لمتجر إلكتروني
export class CartFinancialEngine {
  static TAX_RATE = 0.15; // نسبة الضريبة 15%
  static FREE_SHIPPING_THRESHOLD = 200; // حد الشحن المجاني
  static STANDARD_SHIPPING_FEE = 20; // تكلفة الشحن الافتراضية

  // جدول قسائم الخصم الصالحة
  static VALID_COUPONS = {
    "WELCOME10": { type: "percent", value: 10, label: "خصم الترحيب 10%" },
    "SUPER50": { type: "fixed", value: 50, label: "خصم خاص 50$" }
  };

  // الحساب الشامل للفاتورة
  static computeBreakdown(cartItems = [], couponCode = "") {
    // 1. حساب المجموع الفرعي
    const subtotal = cartItems.reduce((acc, item) => {
      return acc + (Number(item.price) * Number(item.quantity));
    }, 0);

    // إذا كانت السلة خالية تماماً
    if (subtotal === 0) {
      return {
        subtotal: 0,
        discountAmount: 0,
        shippingFee: 0,
        taxAmount: 0,
        grandTotal: 0,
        isFreeShipping: false,
        amountNeededForFreeShipping: CartFinancialEngine.FREE_SHIPPING_THRESHOLD
      };
    }

    // 2. احتساب الخصم بناءً على الكوبون
    let discountAmount = 0;
    const cleanCoupon = (couponCode || "").trim().toUpperCase();
    const couponData = CartFinancialEngine.VALID_COUPONS[cleanCoupon];

    if (couponData) {
      if (couponData.type === "percent") {
        discountAmount = (subtotal * couponData.value) / 100;
      } else if (couponData.type === "fixed") {
        discountAmount = Math.min(subtotal, couponData.value);
      }
    }

    const discountedSubtotal = Math.max(0, subtotal - discountAmount);

    // 3. تحديد تكلفة الشحن ومؤشر الشحن المجاني
    const isFreeShipping = subtotal >= CartFinancialEngine.FREE_SHIPPING_THRESHOLD;
    const shippingFee = isFreeShipping ? 0 : CartFinancialEngine.STANDARD_SHIPPING_FEE;
    const amountNeededForFreeShipping = isFreeShipping
      ? 0
      : CartFinancialEngine.FREE_SHIPPING_THRESHOLD - subtotal;

    // 4. احتساب الضريبة على المبلغ الخاضع للضريبة
    const taxAmount = discountedSubtotal * CartFinancialEngine.TAX_RATE;

    // 5. المجموع النهائي المستحق
    const grandTotal = discountedSubtotal + shippingFee + taxAmount;

    return {
      subtotal: Math.round(subtotal * 100) / 100,
      discountAmount: Math.round(discountAmount * 100) / 100,
      shippingFee: Math.round(shippingFee * 100) / 100,
      taxAmount: Math.round(taxAmount * 100) / 100,
      grandTotal: Math.round(grandTotal * 100) / 100,
      isFreeShipping,
      amountNeededForFreeShipping: Math.round(amountNeededForFreeShipping * 100) / 100,
      appliedCoupon: couponData ? couponData.label : null
    };
  }
}

// اختبار المحرك
const testItems = [{ price: 90, quantity: 2 }]; // 180$
const breakdown = CartFinancialEngine.computeBreakdown(testItems, "WELCOME10");
console.log("المجموع الفرعي:", breakdown.subtotal); // 180
console.log("مبلغ الخصم (10%):", breakdown.discountAmount); // 18
console.log("متبقي للشحن المجاني:", breakdown.amountNeededForFreeShipping); // 20$`
      },
      outputExplanation: "يوضح هذا المحرك كيف يتم احتساب بنود الفاتورة المعقدة؛ بما يشمل تطبيق كود الخصم، وتحديد هل يستحق العميل شحناً مجانياً مع إظهار المبلغ المتبقي لبلوغ حد الشحن المجاني لتشجيعه على الشراء الإضافي.",
      commonMistakes: [
        {
          wrong: "// تطبيق الضريبة قبل الخصم، مما يجعل العميل يدفع ضرائب على مبالغ تم خصمها بالفعل",
          correct: "// دائماً احتسب الضريبة على المجموع الفرعي الصافي بعد استبعاد مبلغ الخصم (discountedSubtotal * taxRate)"
        }
      ],
      bestPractices: [
        "عرض شريط تقدم 'متبقي X$ للحصول على شحن مجاني!' لتحفيز العميل على زيادة مشترياته",
        "استخدام التقريب الرياضي (Math.round(x * 100) / 100) لتفادي مشاكل الأعداد الكسرية العائمة الشهيرة في JavaScript",
        "توضيح نسبة الضريبة بوضوح (مثال: 'شامل 15% ضريبة القيمة المضافة') في ملخص الدفع"
      ],
      infographic: {
        title: "التسلسل الرياضي لاحتساب فاتورة المتجر",
        nodes: [
          { label: "1. المجموع الفرعي (Subtotal)", detail: "مجموع أسعار المنتجات * كمياتها" },
          { label: "2. طرح الخصم (Coupon)", detail: "تطبيق نسبة أو قيمة كود الخصم المعتمد" },
          { label: "3. الشحن (Shipping)", detail: "مجاني إذا تجاوز 200$ أو 20$ كقيمة قياسية" },
          { label: "4. الضريبة والإجمالي", detail: "إضافة 15% ضريبة وصولاً للـ Grand Total النهائي" }
        ]
      }
    },
    {
      id: "32.1.i",
      title: "حفظ السلة باستخدام Zustand أو Redux (Cart State Persistence with Zustand/Redux)",
      englishTerm: {
        term: "Cart State Management with Zustand & Persistence",
        pronunciation: "كارت ستيت مانجمنت ويذ زوستاند آند بيرسيستنس",
        meaning: "إدارة حالة السلة باستخدام Zustand والتخزين الدائم"
      },
      description: "مع تضخم المتجر وتوزعه عبر عدة صفحات ومكونات، تصبح إدارة السلة عبر Context API أو تمرير الخصائص (Props Drilling) حلاً غير عملي. مكتبة `Zustand` هي الخيار الأحدث والأسرع في بيئة React لإدارة الحالة العامة للسلة؛ حيث تتيح إنشاء مخزن مركزي (Store) يحتوي على عناصر السلة والدوال المؤثرة (addItem, removeItem, updateQty, clearCart). ومن خلال دمج برمجية التخزين الوسيطة `persist` في Zustand، يتم حفظ محتويات السلة تلقائياً في `LocalStorage` ومزامنتها بين نوافذ المتصفح دون كتابة كود يدوي معقد.",
      analogy: "يشبه وجود بطاقة عضوية ذكية ممغنطة مرتبطة برقم هاتفك؛ أينما تجولت في المتجر أو حتى إذا خرجت وعدت في اليوم التالي، يتعرف النظام على سلتك المحفوظة ويسترجعها كما تركتها تماماً.",
      whyItMatters: "يوفر كوداً فائق النظافة دون الحاجة لتغليف شجرة التطبيق بمزودي سياق (Context Providers)، ويمنع إعادات الرندر الزائدة عبر ميزة الاختيار الدقيق (Selective Subscriptions).",
      syntax: `// مخزن Zustand لسلة التسوق مع ميزة التخزين الدائم Persist
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => set(state => ({ ... })),
      removeItem: (id) => set(state => ({ ... }))
    }),
    { name: "ecommerce-cart-storage" }
  )
);`,
      simpleExample: {
        title: "إنشاء مخزن سلة بسيط باستخدام نمط Zustand",
        code: `// محاكاة نمط مخزن Zustand لإدارة السلة
function createSimpleCartStore() {
  let state = { items: [] };
  const listeners = new Set();

  const getState = () => state;
  const setState = (updater) => {
    state = typeof updater === "function" ? updater(state) : { ...state, ...updater };
    listeners.forEach(fn => fn(state));
  };

  return {
    getState,
    // دالة إضافة منتج
    addItem: (product) => {
      setState(prev => {
        const found = prev.items.find(i => i.id === product.id);
        if (found) {
          return {
            items: prev.items.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
          };
        }
        return { items: [...prev.items, { ...product, quantity: 1 }] };
      });
    },
    // دالة الاشتراك
    subscribe: (fn) => {
      listeners.add(fn);
      return () => listeners.delete(fn);
    }
  };
}

// اختبار المخزن
const cartStore = createSimpleCartStore();
cartStore.addItem({ id: 1, title: "سماعات", price: 100 });
console.log("عناصر السلة في المخزن:", cartStore.getState().items.length); // 1`
      },
      advancedExample: {
        title: "مخزن Zustand حقيقي متكامل للسلة مع التخزين الدائم وحساب الإحصائيات والمزامنة",
        code: `// في التطبيق الفعلي يتم استيراد create و persist من مكتبة zustand
// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// نموذج كود مخزن Zustand الاحترافي المتكامل لسلة التسوق
export const createZustandCartSlice = (set, get) => ({
  // مصفوفة عناصر السلة
  items: [],
  // كود الخصم المطبق
  appliedCoupon: null,

  // إضافة منتج للسلة
  addItem: (product, quantity = 1) => {
    set((state) => {
      const existing = state.items.find((i) => i.id === product.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === product.id
              ? { ...i, quantity: i.quantity + quantity }
              : i
          )
        };
      }
      return {
        items: [...state.items, { ...product, quantity }]
      };
    });
  },

  // تعديل كمية صنف
  updateQuantity: (id, quantity) => {
    if (quantity < 1) return;
    set((state) => ({
      items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i))
    }));
  },

  // حذف صنف
  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((i) => i.id !== id)
    }));
  },

  // تفريغ السلة بالكامل
  clearCart: () => {
    set({ items: [], appliedCoupon: null });
  },

  // تطبيق كود الخصم
  applyCoupon: (code) => {
    set({ appliedCoupon: code });
  },

  // دوال الحسابات المشتقة (Selectors)
  getTotalItemsCount: () => {
    return get().items.reduce((acc, i) => acc + i.quantity, 0);
  },

  getSubtotalPrice: () => {
    return get().items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  }
});

// تجربة محاكاة تشغيل الـ Slice
let mockState = { items: [], appliedCoupon: null };
const mockSet = (fn) => { mockState = fn(mockState); };
const mockGet = () => mockState;
const storeActions = createZustandCartSlice(mockSet, mockGet);

// إضافة منتج للمخزن
storeActions.addItem({ id: "prod_1", title: "كيبورد ميكانيكي", price: 120 }, 2);
console.log("إجمالي القطع في السلة:", storeActions.getTotalItemsCount()); // 2
console.log("المجموع الفرعي:", storeActions.getSubtotalPrice()); // 240$`
      },
      outputExplanation: "يوضح هذا التصميم كيف يوفر Zustand واجهة برمجية فائقة الأناقة لإدارة سلة التسوق دون boilerplate معقد، مما يجعل استدعاء useCartStore().addItem متاحاً في أي زر في أي صفحة بلمح البصر.",
      commonMistakes: [
        {
          wrong: "// استخدام Redux التقليدي القديم مع عشرات ملفات actions و reducers لمشروع متجر متوسط الحجم",
          correct: "// استخدام Zustand أو Redux Toolkit الحديث اللذين يوفران كوداً مختصراً وأداءً ممتازاً وتخزيناً تلقائياً"
        }
      ],
      bestPractices: [
        "استخدام التخزين الدائم (persist middleware) لضمان عدم ضياع سلة المشتري عند تحديث الصفحة أو إغلاق المتصفح",
        "استدعاء الخصائص المطلوبة فقط عبر Selectors (مثال: const itemsCount = useCartStore(s => s.items.length)) لمنع إعادة الرندر غير الضرورية",
        "توفير دالة تفريغ شاملة (clearCart) لاستدعائها فور إتمام عملية الدفع بنجاح"
      ],
      infographic: {
        title: "معمارية مخزن Zustand لسلة التسوق",
        nodes: [
          { label: "1. مخزن مركزي (Cart Store)", detail: "إدارة items و appliedCoupon و الدوال المؤثرة" },
          { label: "2. برمجية Persist Middleware", detail: "حفظ فوري واسترجاع تلقائي من LocalStorage" },
          { label: "3. اشتراكات انتقائية (Selectors)", detail: "تحديث المكونات المهتمة فقط بالسلة دون باقي الشاشة" },
          { label: "4. تصفير السلة عند النجاح", detail: "استدعاء clearCart بعد إتمام الشراء بنجاح" }
        ]
      }
    },
    {
      id: "32.1.j",
      title: "إنشاء واجهة إتمام الطلب (Checkout Flow & Simulated Payment)",
      englishTerm: {
        term: "Checkout Flow & Payment Simulation",
        pronunciation: "تشيك آوت فلو آند بايمنت سيميوليشن",
        meaning: "تدفق إنهاء الطلب ومحاكاة بوابة الدفع"
      },
      description: "شاشة إتمام الطلب (Checkout Workflow) هي المحطة النهائية التي تجمع بين البيانات اللوجستية والمالية. يتطلب تصميم هذا التدفق نموذجاً متعدد الأقسام يشمل: (1) عنوان الشحن (Shipping Address) مع التحقق من الاسم ورقم الهاتف والمدينة، (2) اختيار وسيلة الدفع (بطاقة ائتمانية، Apple Pay، أو الدفع عند الاستلام)، و (3) محاكاة معالجة الدفع غير المتزامنة (Simulated Payment Gateway) التي تظهر مؤشر دوران أثناء انتظار الاتصال، ثم تولد رقم طلب عشوائي (Order ID) وتفرغ السلة وتنقل العميل لشاشة 'تم تأكيد طلبك بنجاح'.",
      analogy: "يشبه إدخال بطاقتك الائتمانية في جهاز نقاط البيع (POS) في المتجر؛ تظهر عبارة 'جاري الاتصال بالبنك...' لعدة ثوانٍ، ثم يصدر الجهاز صفيراً لطيفاً وتخرج ورقة الإيصال الرسمية التي تؤكد إتمام العملية وتحدد رقم فاتورتك.",
      whyItMatters: "يوضح كيفية إدارة النماذج المعقدة، والتحقق من صحة المدخلات قبل الإرسال، ومحاكاة استدعاءات بوابات الدفع الشهيرة (مثل Stripe و PayPal) دون الحاجة لربط بنكي حقيقي في بيئة التطوير.",
      syntax: `// معالجة تدفق الدفع ومحاكاة بوابة الدفع
const processPayment = async (orderData) => {
  setIsProcessing(true);
  await new Promise(r => setTimeout(r, 1500)); // محاكاة البنك
  setIsProcessing(false);
  clearCart();
  navigate(\`/order-success/\${orderId}\`);
};`,
      simpleExample: {
        title: "نموذج إتمام طلب مبسط مع محاكاة المعالجة",
        code: `import React, { useState } from "react";

// مكون إنهاء الطلب البسيط
function SimpleCheckoutForm({ totalAmount, onOrderSuccess }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isPaying, setIsPaying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !address.trim()) return;

    setIsPaying(true);
    // محاكاة الدفع عبر الإنترنت لمدة ثانية واحدة
    setTimeout(() => {
      setIsPaying(false);
      onOrderSuccess({
        orderId: "ORD-" + Math.floor(Math.random() * 100000),
        customerName: name,
        amount: totalAmount
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "12px", fontFamily: "sans-serif" }}>
      <h3>إتمام الطلب - المبلغ: \${totalAmount}</h3>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="الاسم الكامل"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="عنوان التوصيل بالتفصيل"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
      </div>
      <button
        type="submit"
        disabled={isPaying}
        style={{ width: "100%", padding: "10px", backgroundColor: isPaying ? "#94a3b8" : "#16a34a", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}
      >
        {isPaying ? "جاري معالجة الدفع..." : "تأكيد الطلب والدفع"}
      </button>
    </form>
  );
}

export default SimpleCheckoutForm;`
      },
      advancedExample: {
        title: "نظام إتمام طلب متكامل مع التحقق من البطاقات الائتمانية والشحن وشاشة نجاح الطلب الاحتفالية",
        code: `import React, { useState } from "react";

// مكون تدفق إتمام الشراء والدفع المتقدم
export function AdvancedCheckoutWizard({ cartTotal, onCompleteOrder }) {
  // حالة بيانات الشحن
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "الرياض",
    address: "",
    paymentMethod: "card",
    cardNumber: "",
    cardExp: "",
    cardCvc: ""
  });

  // حالة المعالجة وشاشة النجاح
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSummary, setOrderSummary] = useState(null);

  // تحديث حقول النموذج
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // معالجة الدفع وتوليد الطلب
  const handlePay = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // محاكاة الاتصال ببوابة الدفع لمدة 1.5 ثانية
    setTimeout(() => {
      const generatedOrder = {
        id: "ORD_" + Date.now().toString().slice(-6),
        date: new Date().toLocaleDateString("ar-SA"),
        total: cartTotal,
        customer: formData.fullName,
        city: formData.city,
        paymentMethod: formData.paymentMethod === "card" ? "بطاقة ائتمان (مدى/فيزا)" : "الدفع عند الاستلام"
      };

      setIsProcessing(false);
      setOrderSummary(generatedOrder);
      onCompleteOrder(generatedOrder);
    }, 1500);
  };

  // شاشة النجاح والتأكيد
  if (orderSummary) {
    return (
      <div className="w-full max-w-lg mx-auto p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-center shadow-2xl font-sans">
        <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 rounded-full flex items-center justify-center text-3xl">
          ✓
        </div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">تم تأكيد طلبك بنجاح!</h2>
        <p className="text-xs text-slate-500 mb-6">شكراً لتسوقك معنا، تم إرسال تفاصيل الفاتورة إلى بريدك الإلكتروني.</p>

        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs text-right space-y-2 mb-6">
          <div className="flex justify-between">
            <span className="text-slate-400">رقم الطلب:</span>
            <strong className="text-slate-800 dark:text-slate-200">{orderSummary.id}</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">المبلغ المدفوع:</span>
            <strong className="text-emerald-600">\${orderSummary.total}</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">طريقة الدفع:</span>
            <span>{orderSummary.paymentMethod}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => window.location.reload()}
          className="px-6 py-2.5 bg-slate-900 text-white dark:bg-sky-600 rounded-xl font-bold text-xs"
        >
          العودة للمتجر الرئيسي
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handlePay} className="w-full max-w-xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl font-sans">
      <h2 className="text-xl font-black text-slate-900 dark:text-white mb-4">بيانات الشحن والدفع</h2>

      <div className="space-y-4 mb-6">
        {/* بيانات العميل */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            name="fullName"
            placeholder="الاسم الكامل"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="p-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="رقم الجوال (05xxxxxxxx)"
            required
            value={formData.phone}
            onChange={handleChange}
            className="p-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
          />
        </div>

        {/* العنوان */}
        <input
          type="text"
          name="address"
          placeholder="عنوان التوصيل (الحي، اسم الشارع، رقم المبنى)"
          required
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
        />

        {/* وسيلة الدفع */}
        <div className="pt-2">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">طريقة الدفع:</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, paymentMethod: "card" })}
              className={\`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition \${formData.paymentMethod === "card" ? "border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300" : "border-slate-200 dark:border-slate-700"}\`}
            >
              <span>💳</span> بطاقة بنكية
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, paymentMethod: "cod" })}
              className={\`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition \${formData.paymentMethod === "cod" ? "border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300" : "border-slate-200 dark:border-slate-700"}\`}
            >
              <span>💵</span> الدفع عند الاستلام
            </button>
          </div>
        </div>

        {/* حقول البطاقة البنكية الوهمية */}
        {formData.paymentMethod === "card" && (
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
            <input
              type="text"
              name="cardNumber"
              placeholder="رقم البطاقة (XXXX XXXX XXXX XXXX)"
              required
              maxLength={19}
              className="w-full p-2.5 text-xs rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 outline-none font-mono"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="cardExp"
                placeholder="MM/YY"
                required
                maxLength={5}
                className="p-2.5 text-xs rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 outline-none font-mono text-center"
              />
              <input
                type="password"
                name="cardCvc"
                placeholder="CVC"
                required
                maxLength={3}
                className="p-2.5 text-xs rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 outline-none font-mono text-center"
              />
            </div>
          </div>
        )}
      </div>

      {/* زر تأكيد الدفع النهائي */}
      <button
        type="submit"
        disabled={isProcessing}
        className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-2xl shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isProcessing ? "جاري الاتصال والتحقق من الدفع..." : \`تأكيد ودفع (\${cartTotal})\`}
      </button>
    </form>
  );
}`
      },
      outputExplanation: "يقدم هذا المكون نموذج إتمام طلب متكامل يحاكي عمليات الدفع الحقيقية؛ حيث يجمع بيانات الشحن، ويتيح التبديل بين الدفع بالبطاقة أو عند الاستلام، ويظهر شاشة تأكيد احترافية مع رقم الطلب عند اكتمال العملية.",
      commonMistakes: [
        {
          wrong: "// نسيان تفريغ سلة التسوق بعد نجاح عملية الدفع، مما يجعل العميل يرى منتجاته السابقة ما زالت في السلة",
          correct: "// استدعاء دالة clearCart فور تأكيد الدفع بنجاح والانتقال لشاشة إشعار الطلب"
        }
      ],
      bestPractices: [
        "تعطيل زر الدفع وإظهار مؤشر معالجة (Spinner) أثناء انتظار استجابة البوابة لمنع النقر المزدوج وسحب الرصيد مرتين",
        "توليد معرف طلب فريد وغير متكرر (Unique Order ID) لعرضه في شاشة التأكيد",
        "التحقق من صحة أرقام الجوال وصيغ البطاقات قبل إرسال النموذج"
      ],
      infographic: {
        title: "خطوات تدفق إتمام الطلب (Checkout Flow)",
        nodes: [
          { label: "1. بيانات الشحن", detail: "الاسم، الجوال، والمدينة والعنوان الوطني" },
          { label: "2. اختيار وسيلة الدفع", detail: "بطاقة ائتمانية أو الدفع عند الاستلام" },
          { label: "3. محاكاة المعالجة", detail: "تجميد الزر والاتصال الآمن الوهمي بالبنك" },
          { label: "4. تصفير السلة والتأكيد", detail: "توليد رقم الطلب وعرض إيصال الشراء النهائي" }
        ]
      }
    },
    {
      id: "32.1.k",
      title: "إضافة اختبارات للمكونات (Component Testing & RTL)",
      englishTerm: {
        term: "Component Testing with React Testing Library",
        pronunciation: "كومبوننت تيستينج ويذ رياكت تيستينج لايبراري",
        meaning: "اختبار مكونات المتجر باستخدام مكتبة React Testing Library"
      },
      description: "المتجر الإلكتروني هو تطبيق يتعامل مع أموال حقيقية ومبيعات؛ لذا فإن تغطية مكوناته باختبارات آلية موثوقة (Automated Tests) أمر غير قابل للتفاوض. يتطلب هذا الموضوع كتابة اختبارات وحدات (Unit Tests) واختبارات تكامل (Integration Tests) باستخدام `Vitest` و `React Testing Library (RTL)`. نركز على اختبار سلوك المستخدم الحقيقي: (1) التأكد من ظهور عنوان وسعر المنتج بشكل صحيح، (2) اختبار النقر على زر 'أضف للسلة' والتحقق من استدعاء الدالة بالمعاملات السليمة، (3) التأكد من أن زر إنقاص الكمية يصبح معطلاً عند وصول الكمية إلى 1، و (4) اختبار تصفية الكتالوج عند البحث.",
      analogy: "يشبه الفحص الميكانيكي الشامل للسيارة قبل قيادتها على طريق السفر السريع؛ يتم فحص الفرامل، والأضواء، وحزام الأمان، والتأكد من استجابتها لضغطات السائق بدقة متناهية لمنع المفاجآت الخطرة أثناء الرحلة.",
      whyItMatters: "يحمي المتجر من الأعطال الكارثية عند إجراء تعديلات مستقبلية؛ فالاختبارات تمنح المطور الشجاعة لتطوير الكود وإعادة هيكلته دون الخوف من كسر سلة التسوق أو تعطيل الدفع.",
      syntax: `// اختبار مكون بطاقة المنتج باستخدام React Testing Library
test("يجب استدعاء onAddToCart عند النقر على الزر", () => {
  const handleAdd = vi.fn();
  render(<ProductCard product={mockProduct} onAddToCart={handleAdd} />);
  fireEvent.click(screen.getByRole("button", { name: /أضف إلى السلة/i }));
  expect(handleAdd).toHaveBeenCalledWith(mockProduct, 1);
});`,
      simpleExample: {
        title: "كتابة اختبار بسيط لبطاقة المنتج باستخدام نمط AAA (Arrange, Act, Assert)",
        code: `// كود اختبار مكون بطاقة المنتج بنمط Vitest / Jest
// arrange: تجهيز البيانات الوهمية والمكون
const mockProduct = {
  id: "p1",
  title: "سماعات بلوتوث",
  price: 99
};

// اختبار محاكاة لدالة معالج الإضافة
function testAddToCartInteraction() {
  let wasCalled = false;
  let receivedProduct = null;

  // دالة الاستدعاء الوهمية (Mock Function)
  const mockCallback = (product) => {
    wasCalled = true;
    receivedProduct = product;
  };

  // act: محاكاة النقر على الزر
  mockCallback(mockProduct);

  // assert: التحقق من النتيجة
  const isPass = wasCalled && receivedProduct.id === "p1";
  console.log("نتيجة اختبار الإضافة للسلة:", isPass ? "PASS ✓" : "FAIL ✕");
}

// تشغيل الفحص
testAddToCartInteraction();`
      },
      advancedExample: {
        title: "جناح اختبارات متكامل لمكون سلة التسوق وفحص حساب الإجمالي وتعطيل الأزرار",
        code: `// نموذج ملف اختبار حقيقي Cart.test.jsx
// import { render, screen, fireEvent } from "@testing-library/react";
// import { describe, it, expect, vi } from "vitest";

// محاكاة منطق اختبارات المكونات المتقدمة
export class CartTestingSuite {
  // اختبار 1: التأكد من تعطيل زر الإنقاص عند الكمية 1
  static testQuantityDecrementDisabled() {
    const qty = 1;
    const isDecrementDisabled = qty <= 1;
    console.log("[Test 1]: زر الإنقاص معطل عند الكمية 1:", isDecrementDisabled ? "PASS ✓" : "FAIL ✕");
    return isDecrementDisabled;
  }

  // اختبار 2: التأكد من دقة حساب مجموع الفاتورة
  static testInvoiceCalculationAccuracy() {
    const items = [
      { price: 100, quantity: 2 }, // 200
      { price: 50, quantity: 1 }   // 50
    ];
    const subtotal = items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const expected = 250;
    const isAccurate = subtotal === expected;
    console.log("[Test 2]: دقة حساب المجموع الفرعي (250$):", isAccurate ? "PASS ✓" : "FAIL ✕");
    return isAccurate;
  }

  // اختبار 3: التأكد من استدعاء دالة الحذف بالمعرف الصحيح
  static testRemovalDispatchesCorrectId() {
    const mockRemove = (id) => id;
    const targetId = "prod_99";
    const result = mockRemove(targetId);
    const isCorrect = result === targetId;
    console.log("[Test 3]: تمرير المعرف الصحيح عند الحذف:", isCorrect ? "PASS ✓" : "FAIL ✕");
    return isCorrect;
  }
}

// تشغيل جناح الاختبارات الشامل
console.log("--- بدء تشغيل اختبارات جودة مكونات المتجر ---");
CartTestingSuite.testQuantityDecrementDisabled();
CartTestingSuite.testInvoiceCalculationAccuracy();
CartTestingSuite.testRemovalDispatchesCorrectId();`
      },
      outputExplanation: "يوضح هذا التأسيس تطبيق نمط AAA لاختبار السلوكيات الحيوية للمتجر؛ حيث يتم التحقق البرمجي التلقائي من تعطيل أزرار الكميات غير الصالحة، وضمان صحة الحسابات المالية، وتمرير المعرفات السليمة.",
      commonMistakes: [
        {
          wrong: "// اختبار تفاصيل التنفيذ الداخلي (Implementation Details) مثل فحص أسماء متغيرات الحالة بدلاً من فحص ما يراه المستخدم على الشاشة",
          correct: "// دائماً اختبر المكون من وجهة نظر المستخدم الحقيقي (Behavior-Driven Testing) باستخدام أدوات RTL مثل getByRole و getByText"
        }
      ],
      bestPractices: [
        "فحص الشروط الحدية (Boundary Conditions) مثل الكمية 1 ونفاد المخزون",
        "تسمية الاختبارات بجمل وصفية واضحة تعبر عما يجب أن يحدث باللغة الطبيعية",
        "استخدام الدوال الوهمية (Mock Functions عبر vi.fn()) للتحقق من استدعاء المعالجات وعدد مرات الاستدعاء"
      ],
      infographic: {
        title: "استراتيجية اختبار مكونات المتجر الإلكتروني",
        nodes: [
          { label: "1. إعداد البيئة (Arrange)", detail: "تجهيز المنتجات الوهمية ودوال الـ Mocks" },
          { label: "2. تفاعل المستخدم (Act)", detail: "محاكاة النقر على 'أضف للسلة' أو تعديل الكمية" },
          { label: "3. التحقق الصارم (Assert)", detail: "التأكد من تحديث الواجهة واستدعاء الدوال المحددة" },
          { label: "4. اختبارات الحدود (Bounds)", detail: "فحص تعطيل الأزرار عند الكمية 1 وحساب الضرائب" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-32.1-1",
      question: "ما هو الإجراء السليم عند إضافة منتج موجود بالفعل في سلة التسوق؟",
      options: [
        "إضافة سطر جديد مكرر لنفس المنتج في مصفوفة السلة",
        "تحديث كمية المنتج الموجود مسبقاً في مصفوفة السلة عبر دالة map دون تكرار العنصر",
        "حذف السلة بالكامل وإجبار العميل على إعادة الاختيار",
        "رمي خطأ برمجي يوقف تشغيل المتجر"
      ],
      correctAnswer: 1,
      explanation: "النمط المعياري في المتاجر هو فحص وجود المنتج عبر find/findIndex، وإذا وُجد يتم رفع خاصية quantity الخاصة به باستخدام دالة map النقية دون تكرار أسطر المنتجات المتطابقة."
    },
    {
      id: "quiz-32.1-2",
      question: "لماذا يفضل استخدام مكتبة Zustand لإدارة حالة سلة التسوق في متجر React مقارنة بالـ Context API التقليدي؟",
      options: [
        "لأن Zustand تمنع استخدام CSS في المتجر نهائياً",
        "لأنها توفر وصولاً مركزياً وسريعاً دون الحاجة لتغليف الشجرة بـ Providers وتدعم التخزين التلقائي عبر persist middleware",
        "لأن Context API محظورة في إصدارات React الحديثة",
        "لأن Zustand تجعل جميع استدعاءات الشبكة مجانية"
      ],
      correctAnswer: 1,
      explanation: "Zustand تتميز بالبساطة وخلوها من التعقيد (Boilerplate-free)، وتتيح الاشتراك الانتقائي (Selectors) لمنع إعادات الرندر الزائدة، مع وجود دعم مدمج للتخزين الدائم بـ LocalStorage."
    },
    {
      id: "quiz-32.1-3",
      question: "كيف يجب احتساب ضريبة القيمة المضافة (VAT) عند وجود قسيمة خصم (Coupon) على السلة؟",
      options: [
        "احتساب الضريبة على السعر الأصلي قبل الخصم لإلزام العميل بدفع ضريبة كاملة",
        "احتساب الضريبة على المجموع الفرعي الصافي المتبقي بعد استبعاد قيمة الخصم",
        "مضاعفة نسبة الضريبة تلقائياً عند استخدام أي كود خصم",
        "إلغاء الضريبة تماماً بمجرد إدخال أي حرف في حقل الكوبون"
      ],
      correctAnswer: 1,
      explanation: "قواعد المحاسبة القانونية والتجارية تقتضي احتساب نسبة الضريبة على المبلغ المالي الفعلي الخاضع للدفع بعد خصم القسيمة (discountedSubtotal * taxRate)."
    }
  ],
  exercise: {
    id: "exercise-32.1",
    title: "تمرين عملي: بناء سلة تسوق مصغرة مع زيادة وإنقاص الكمية واحتساب الإجمالي",
    description: "قم بإنشاء مكون React متكامل يحتوي على منتجين، مع أزرار لإضافة كل منتج إلى السلة، وعرض عناصر السلة مع أزرار الزيادة (+) والإنقاص (-) والحذف، واحتساب المجموع الفرعي والضريبة 15% والمجموع الكلي في الوقت الفعلي.",
    hints: [
      "استخدم useState لإدارة مصفوفة عناصر السلة",
      "ابنِ دالة addToCart تفحص ما إذا كان المنتج مضافاً بالفعل لزيادة كميته",
      "استخدم reduce لحساب المجموع الفرعي والضريبة والإجمالي الإجمالي"
    ],
    solution: `import React, { useState } from "react";

const PRODUCTS = [
  { id: "1", title: "سماعة رأس لاسلكية", price: 120 },
  { id: "2", title: "لوحة مفاتيح ميكانيكية", price: 80 }
];

export default function MiniStoreLab() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const subtotal = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  return (
    <div style={{ maxWidth: "450px", margin: "auto", padding: "16px", fontFamily: "sans-serif" }}>
      <h3>مختبر المتجر المصغر</h3>
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        {PRODUCTS.map((p) => (
          <button key={p.id} onClick={() => addToCart(p)} style={{ padding: "8px" }}>
            + {p.title} (\${p.price})
          </button>
        ))}
      </div>

      <h4>سلة المشتريات ({cart.length})</h4>
      {cart.map((i) => (
        <div key={i.id} style={{ display: "flex", justifyContent: "space-between", margin: "6px 0" }}>
          <span>{i.title} - \${i.price}</span>
          <div>
            <button onClick={() => updateQty(i.id, -1)}>-</button>
            <span style={{ margin: "0 8px" }}>{i.quantity}</span>
            <button onClick={() => updateQty(i.id, 1)}>+</button>
          </div>
        </div>
      ))}

      <div style={{ marginTop: "16px", borderTop: "1px solid #ccc", paddingTop: "8px" }}>
        <p>المجموع الفرعي: \${subtotal.toFixed(2)}</p>
        <p>الضريبة (15%): \${tax.toFixed(2)}</p>
        <strong>الإجمالي النهائي: \${total.toFixed(2)}</strong>
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "المخطط الهيكلي لمشروع المتجر الإلكتروني (E-commerce Architecture)",
    nodes: [
      { label: "1. Store Catalog", detail: "استدعاء المنتجات، والبحث النصي، والفلترة بالتصنيف والأسعار" },
      { label: "2. Product Details", detail: "معرض الصور، التقييم، محدد الكمية، وخيارات المقاسات والألوان" },
      { label: "3. Cart Engine (Zustand)", detail: "إدارة السلة، وحفظها الدائم في LocalStorage، والتراجع الفوري" },
      { label: "4. Pricing Engine", detail: "حساب المجموع الفرعي، الخصومات، والضريبة 15%، والشحن المجاني" },
      { label: "5. Checkout & Tests", detail: "محاكاة الدفع البنكي وتوليد الطلب، واختبارات المكونات بـ RTL" }
    ]
  }
};

