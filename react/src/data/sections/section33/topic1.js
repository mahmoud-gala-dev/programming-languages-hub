// src/data/sections/section33/topic1.js
// القسم 33: مشاريع متقدمة واحترافية
// الموضوع 1: مشروع 10: منصة تجارة إلكترونية متكاملة (Full-Stack E-commerce Platform)

export const TOPIC_33_1 = {
  id: "topic-33-1",
  title: "مشروع 10: منصة تجارة إلكترونية متكاملة",
  description: "مشروع مؤسسي عملاق لبناء منصة تجارة إلكترونية متكاملة عالية القابلية للتوسع؛ يشمل التصميم الصارم بـ TypeScript، واجهات العملاء والإدارة (Storefront & Admin Portals)، المصادقة وإدارة الصلاحيات (RBAC)، سلة التسوق وقائمة المفضلة، تدفق الدفع الآمن عبر Stripe/Backend، إدارة بيانات الخادم بـ TanStack Query، الاختبارات الشاملة، وتحسين إمكانية الوصول والأداء ومراقبة الأخطاء في الإنتاج.",
  subtopics: [
    {
      id: "33.1.a",
      title: "تصميم هيكل المشروع باستخدام TypeScript (Project Architecture & TypeScript Schemas)",
      englishTerm: {
        term: "Project Architecture & TypeScript Domain Schemas",
        pronunciation: "بروجيكت آركيتكتشر آند تايب سكريبت دومين سكيماز",
        meaning: "هندسة المشروع ومخططات مجال العمل بلغة TypeScript"
      },
      description: "المشاريع التجارية الضخمة (Enterprise E-commerce) لا تحتمل أي غموض في أنواع البيانات؛ لذا فإن تأسيس المشروع يبدأ بتعريف العقود البرمجية الصارمة (Domain Contracts) باستخدام TypeScript. يغطي هذا المفهوم نمذجة كائنات: المنتجات (Product)، المتغيرات والأحجام (Variants & Sizes)، سلة التسوق (CartItem)، طلبات الشراء (Order)، وملف العميل (Customer Profile). يتم تنظيم هيكل المشروع بنمط الميزات المستقلة (Feature-based Architecture) لضمان عزل وحدات الكتالوج، والسلة، والمستخدمين، والإدارة في مجلدات ذاتية الاكتفاء.",
      analogy: "يشبه المخطط الإنشائي والهندسي لبرج تجاري ضخم؛ قبل صب أي خرسانة أو وضع حجر أساس، يقوم المهندسون المعماريون برسم مخططات دقيقة تحدد أوزان وأبعاد كل عمود وجدار لمنع أي انهيار مستقبلي.",
      whyItMatters: "يوفر أماناً صارماً عند كتابة الكود البرمجي (Type Safety)، ويمنع 95% من أخطاء الـ Runtime الشائعة (مثل تكرار القراءة من حقول غير معرفة)، ويسهل العمل الجماعي بين عشرات المطورين.",
      syntax: `// تعريف واجهة بيانات المنتج الشاملة
export interface Product {
  id: string;
  sku: string;
  title: string;
  slug: string;
  price: number;
  stock: number;
  variants: ProductVariant[];
  categories: string[];
  status: "draft" | "active" | "archived";
}`,
      simpleExample: {
        title: "تعريف عقود بيانات المتجر الأساسية مع دوال الفحص النوعي",
        code: `// تعريف نوع المنتج والطلب بلغة JavaScript المدعومة بتعليقات JSDoc
/**
 * @typedef {Object} StoreProduct
 * @property {string} id - المعرف الفريد للمنتج
 * @property {string} title - اسم السلعة
 * @property {number} price - السعر بالعملة المحلية
 * @property {number} inventory - الكمية المتوفرة بالمخزن
 * @property {boolean} isFeatured - هل يظهر في الصفحة الرئيسية؟
 */

// دالة فحص مطابقة المنتج للمواصفات المعيارية
function assertValidProduct(product) {
  // التأكد من توفر الحقول الإلزامية وصحة أنواعها
  const isValid = Boolean(
    product &&
    typeof product.id === "string" &&
    typeof product.title === "string" &&
    typeof product.price === "number" &&
    product.price >= 0
  );

  return isValid ? "المنتج متوافق مع العقد البرمجي" : "بيانات المنتج غير صالحة";
}

// تجربة فحص كائن منتج
const demoItem = { id: "prod_001", title: "حاسوب محمول", price: 3500, inventory: 10, isFeatured: true };
console.log(assertValidProduct(demoItem));`
      },
      advancedExample: {
        title: "هندسة معمارية مؤسسية لتعريف طبقات البيانات والأنواع المتقدمة لمتجر تجارة متكامل",
        code: `// فئة تعريف العقود البرمجية لمجال التجارة الإلكترونية (Domain Models)
export class ECommerceDomainContract {
  // توليد كائن منتج معياري آمن ومكتمل
  static createProductRecord(data) {
    if (!data.id || !data.title || Number(data.price) < 0) {
      throw new Error("خطأ في بناء المنتج: المعرف والعنوان والسعر الإيجابي حقول إلزامية.");
    }

    return {
      id: String(data.id),
      sku: data.sku || \`SKU-\${Date.now()}\`,
      title: data.title.trim(),
      slug: data.slug || data.title.toLowerCase().replace(/\\s+/g, "-"),
      price: Number(data.price),
      compareAtPrice: data.compareAtPrice ? Number(data.compareAtPrice) : null,
      stock: Math.max(0, parseInt(data.stock, 10) || 0),
      variants: Array.isArray(data.variants) ? data.variants : [],
      categories: Array.isArray(data.categories) ? data.categories : ["عام"],
      isAvailable: (parseInt(data.stock, 10) || 0) > 0,
      createdAt: data.createdAt || Date.now()
    };
  }

  // توليد كائن سطر الفاتورة أو السلة
  static createCartLineItem(product, quantity = 1, selectedVariant = null) {
    if (quantity <= 0) throw new Error("الكمية يجب أن تكون 1 على الأقل.");
    
    return {
      lineId: \`\${product.id}_\${selectedVariant ? selectedVariant.id : "default"}\`,
      productId: product.id,
      title: product.title,
      unitPrice: product.price,
      quantity: quantity,
      variant: selectedVariant,
      subtotal: Math.round(product.price * quantity * 100) / 100
    };
  }
}

// تجربة توليد كائن آمن
const newMacbook = ECommerceDomainContract.createProductRecord({
  id: "mbp_16",
  title: "MacBook Pro 16 M3 Max",
  price: 3499,
  stock: 5
});
console.log("المنتج المهيكل بنجاح:", newMacbook.title, "| متوفر؟", newMacbook.isAvailable);`
      },
      outputExplanation: "يوضح هذا التأسيس كيف تضمن فئة ECommerceDomainContract اتساق كافة كائنات المنتجات وسطور السلة؛ فتعالج الحقول الاختيارية وتنشئ السلاسل النصية للروابط (slugs) وتضمن ألا يكون السعر أو المخزون سالباً.",
      commonMistakes: [
        {
          wrong: "// التعامل مع كائنات المنتجات بدون مخططات محددة مما يسبب أخطاء قراءة حقول مفقودة مثل product.variants[0].price",
          correct: "// تعريف واجهات TypeScript صلبة (Interfaces) وتعيين قيم افتراضية آمنة لكافة المصفوفات والكائنات المتداخلة"
        }
      ],
      bestPractices: [
        "فصل مجلد `types` أو `contracts` ليحتوي على كافة عقود البيانات ومشاركتها بين الواجهة والخادم",
        "توليد حقول الـ slug تلقائياً من عنوان المنتج لضمان روابط متوافقة مع محركات البحث (SEO-friendly)",
        "استخدام أنواع الـ Union المحددة للحالات مثل `status: 'draft' | 'active' | 'archived'` لمنع إدخال نصوص عشوائية"
      ],
      infographic: {
        title: "هندسة عقود TypeScript لمنصة التجارة",
        nodes: [
          { label: "1. عقد المنتج (Product)", detail: "id, sku, title, price, variants, stock, status" },
          { label: "2. سطر السلة (CartLine)", detail: "lineId, product, quantity, variant, subtotal" },
          { label: "3. عقد الطلب (Order)", detail: "orderId, customer, items, payment, shipping, totals" },
          { label: "4. الأمان النوعي الصارم", detail: "منع الأخطاء في مرحلة الترجمة (Build-time Safety)" }
        ]
      }
    },
    {
      id: "33.1.b",
      title: "إنشاء واجهات العملاء والإدارة (Storefront & Admin Portals)",
      englishTerm: {
        term: "Storefront & Admin Dual-Portal Architecture",
        pronunciation: "ستور فرونت آند أدمن دوال بورتال آركيتكتشر",
        meaning: "معمارية البوابتين المزدوجتين: واجهة المتجر ولوحة الإدارة"
      },
      description: "تتطلب منصات التجارة الإلكترونية المتقدمة فصلاً معمارياً تاماً بين بوابتين رئيستين: (1) بوابة العميل (Storefront Portal): المصممة لتحقيق أقصى درجات الجاذبية والسرعة، وسهولة التصفح، وإتمام الطلبات بأقل خطوات ممكنة، و (2) بوابة الإدارة (Admin Backoffice Portal): وهي بيئة مكتبية كثيفة البيانات تتضمن إدارة الكتالوج، وتحديث المخزون، ومراجعة شحنات الطلبات، وتقارير الإيرادات. يتم بناء البوابتين إما كمسارين منفصلين داخل نفس التطبيق أو كتطبيقين مستقلين يتشاركان نفس مكتبة المكونات وطبقة الخدمات.",
      analogy: "يشبه المطعم الفاخر؛ في الواجهة توجد صالة الاستقبال الأنيقة المضاءة بالموسيقى الهادئة لاستقبال الزبائن وتقديم قوائم الطعام، وفي الخلف يوجد المطبخ والمخزن ومكتب المدير لمتابعة التوريدات وحساب الأرباح اليومية.",
      whyItMatters: "يحمي سرية وأمان العمليات الإدارية، ويتيح تحسين واجهة المتجر للجمهور الخارجي مع إبقاء أدوات الإدارة غنية بالوظائف للموظفين.",
      syntax: `// التوجيه المزدوج للبوابتين
<Routes>
  {/* بوابة العملاء */}
  <Route path="/*" element={<StorefrontLayout />} />
  {/* بوابة الإدارة المحمية */}
  <Route path="/admin/*" element={<AdminGuard><AdminPortalLayout /></AdminGuard>} />
</Routes>`,
      simpleExample: {
        title: "تبديل العرض بين بوابة المتجر وبوابة الإدارة",
        code: `import React, { useState } from "react";

// محاكاة التنقل بين بوابتي المتجر والإدارة
function PortalSwitcherDemo() {
  const [activePortal, setActivePortal] = useState("storefront");

  return (
    <div style={{ fontFamily: "sans-serif", padding: "16px" }}>
      {/* شريط التبديل التجريبي */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <button
          onClick={() => setActivePortal("storefront")}
          style={{ padding: "8px 16px", backgroundColor: activePortal === "storefront" ? "#0284c7" : "#eee", color: activePortal === "storefront" ? "#fff" : "#000", border: "none", borderRadius: "8px" }}
        >
          🛍️ واجهة المتجر (Storefront)
        </button>
        <button
          onClick={() => setActivePortal("admin")}
          style={{ padding: "8px 16px", backgroundColor: activePortal === "admin" ? "#0f172a" : "#eee", color: activePortal === "admin" ? "#fff" : "#000", border: "none", borderRadius: "8px" }}
        >
          🔒 لوحة الإدارة (Admin Portal)
        </button>
      </div>

      {/* عرض البوابة النشطة */}
      <div style={{ padding: "20px", border: "1px solid #cbd5e1", borderRadius: "12px", backgroundColor: activePortal === "admin" ? "#f8fafc" : "#ffffff" }}>
        {activePortal === "storefront" ? (
          <div>
            <h3>أهلاً بك في متجرنا الإلكتروني</h3>
            <p>تصفح أحدث العروض والمنتجات المميزة...</p>
          </div>
        ) : (
          <div>
            <h3>لوحة إدارة المتجر والمخزون</h3>
            <p>إدارة المنتجات، وتحديث المخازن، ومتابعة فواتير الشحن...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PortalSwitcherDemo;`
      },
      advancedExample: {
        title: "هندسة معمارية للبوابتين مع تخطيطات مخصصة (Custom Layouts) وضوابط الصلاحيات",
        code: `// مخطط تخطيط البوابتين المشترك
export const PORTAL_TYPES = {
  STOREFRONT: "STOREFRONT",
  ADMIN: "ADMIN"
};

// فئة فحص أذونات الوصول للبوابة
export class PortalAccessController {
  // فحص إمكانية دخول بوابة الإدارة
  static canAccessAdmin(user) {
    if (!user) return { allowed: false, reason: "يجب تسجيل الدخول أولاً للوصول لبوابة الإدارة." };
    if (user.role !== "admin" && user.role !== "manager") {
      return { allowed: false, reason: "حسابك لا يمتلك صلاحيات إدارية للدخول لهذه البوابة." };
    }
    return { allowed: true };
  }
}

// اختبار صلاحيات مستخدم عميل ومستخدم مدير
const customerUser = { id: "c1", name: "خالد", role: "customer" };
const adminUser = { id: "a1", name: "المدير التنفيذي", role: "admin" };

console.log("دخول العميل للإدارة:", PortalAccessController.canAccessAdmin(customerUser).allowed); // false
console.log("دخول المدير للإدارة:", PortalAccessController.canAccessAdmin(adminUser).allowed); // true`
      },
      outputExplanation: "يوضح هذا التأسيس كيف تضمن معمارية البوابتين عزل تجربة المشتري عن تجربة المشرف، مع وضع ضوابط أمنية تفحص دور المستخدم (Role) قبل السماح له بتحميل أو عرض أدوات الإدارة الحساسة.",
      commonMistakes: [
        {
          wrong: "// خلط أزرار تعديل الأسعار وحذف المنتجات داخل بطاقات المتجر العامة للمستخدمين دون تحقق من صلاحية المشرف",
          correct: "// عزل كامل صفحات الإدارة خلف مسار مخصص (/admin) محمي بـ Guard يفحص صلاحيات الحساب بدقة"
        }
      ],
      bestPractices: [
        "اعتماد هوية بصرية متباينة بين البوابتين (ألوان ترويجية مشرقة للمتجر، وسمات مكتبية رصينة للإدارة)",
        "تحميل بوابة الإدارة عبر التقسيم الكودي (Code Splitting و Lazy Loading) لتقليل حجم حزمة المتجر للعملاء",
        "توفير زر سريع في لوحة الإدارة يتيح للمشرف 'معاينة المتجر كما يراه العميل' بنقرة واحدة"
      ],
      infographic: {
        title: "معمارية البوابتين: المتجر مقابل الإدارة",
        nodes: [
          { label: "1. بوابة المتجر (Storefront)", detail: "تجربة سريعة وجذابة للكتالوج والشراء الفوري" },
          { label: "2. حاجز الأمان (Admin Guard)", detail: "فحص الصلاحيات والتحقق من هوية المشرف" },
          { label: "3. بوابة الإدارة (Backoffice)", detail: "إدارة المخازن، تسعير المنتجات، والتقارير المالية" },
          { label: "4. البيانات المشتركة", detail: "قاعدة بيانات وخدمات موحدة تغذي البوابتين" }
        ]
      }
    },
    {
      id: "33.1.c",
      title: "تنفيذ نظام تسجيل الدخول (Authentication Architecture & JWT Flow)",
      englishTerm: {
        term: "Authentication Flow & JWT Management",
        pronunciation: "أوثينتيكيشن فلو آند جاي دبليو تي مانجمنت",
        meaning: "تدفق المصادقة وإدارة رموز الجلسات الأمنية JWT"
      },
      description: "المصادقة في منصات التجارة الإلكترونية تتطلب مرونة فائقة تجمع بين الأمان وسهولة الوصول؛ حيث يُسمح للزائر بتصفح المنتجات وإضافتها للسلة كزائر مجهول (Guest Mode)، ولا يُطالب بتسجيل الدخول إلا عند الوصول لمرحلة الدفع أو مراجعة الطلبات السابقة. يغطي هذا الموضوع بناء نظام مصادقة متكامل يعتمد على رموز JWT (JSON Web Tokens): تخزين الرموز بأمان، وإرفاق رمز الوصول في ترويسة الطلبات (`Authorization: Bearer <token>`)، وتجديد الرمز تلقائياً عبر Refresh Token، مع توفير خيارات تسجيل الدخول السريع عبر Google أو البريد وكلمة المرور.",
      analogy: "يشبه بطاقة المفتاح الإلكترونية في الفنادق؛ تستلم البطاقة الممغنطة عند تسجيل الوصول في الاستقبال، وتمررها على قارئ الأبواب لفتح غرفتك والمصعد والمسبح، وعندما تنتهي مدة إقامتك تنتهي صلاحية البطاقة تلقائياً وتحتاج لتجديدها من الاستقبال.",
      whyItMatters: "يحمي حسابات العملاء وعناوينهم وبطاقاتهم المخزنة من السرقة، ويوفر تدفقاً سلساً لا يعطل العميل عن الشراء السريع.",
      syntax: `// إرفاق رمز الـ JWT في ترويسة الطلبات عبر Interceptors
apiClient.interceptors.request.use(config => {
  const token = authStore.getAccessToken();
  if (token) config.headers.Authorization = \`Bearer \${token}\`;
  return config;
});`,
      simpleExample: {
        title: "إدارة حالة تسجيل الدخول وتخزين الرمز المميز",
        code: `// كائن حالة المصادقة البسيط
class SimpleAuthContext {
  constructor() {
    this.currentUser = null;
    this.token = null;
  }

  // محاكاة تسجيل الدخول واستلام الرمز
  login(email, password) {
    if (email && password.length >= 6) {
      this.currentUser = { id: "usr_1", email: email, name: email.split("@")[0] };
      this.token = "fake-jwt-token-xyz-123";
      console.log("تم تسجيل الدخول بنجاح للمستخدم:", this.currentUser.name);
      return true;
    }
    return false;
  }

  // تسجيل الخروج ومسح الرمز
  logout() {
    this.currentUser = null;
    this.token = null;
    console.log("تم تسجيل الخروج بنجاح.");
  }
}

// تجربة النظام
const auth = new SimpleAuthContext();
auth.login("salem@domain.com", "password123");
console.log("الرمز المشفر المخزن:", auth.token);`
      },
      advancedExample: {
        title: "نظام مصادقة احترافي مع دعم اعتراض الطلبات وتجديد الرمز التلقائي والدمج مع LocalStorage",
        code: `// فئة إدارة رموز المصادقة وجلسات المستخدمين
export class ECommerceAuthManager {
  static ACCESS_TOKEN_KEY = "STORE_ACCESS_TOKEN";
  static USER_DATA_KEY = "STORE_USER_PROFILE";

  // استرجاع المستخدم الحالي من التخزين المحلي
  static getStoredUser() {
    try {
      const serialized = localStorage.getItem(ECommerceAuthManager.USER_DATA_KEY);
      return serialized ? JSON.parse(serialized) : null;
    } catch {
      return null;
    }
  }

  // تسجيل الدخول وحفظ الجلسة
  static handleLoginSuccess(authResponse) {
    const { token, user } = authResponse;
    localStorage.setItem(ECommerceAuthManager.ACCESS_TOKEN_KEY, token);
    localStorage.setItem(ECommerceAuthManager.USER_DATA_KEY, JSON.stringify(user));
    return user;
  }

  // تسجيل الخروج وتنظيف المخازن
  static handleLogout() {
    localStorage.removeItem(ECommerceAuthManager.ACCESS_TOKEN_KEY);
    localStorage.removeItem(ECommerceAuthManager.USER_DATA_KEY);
  }

  // حقن الرمز الأمني في ترويسات Fetch تلقائياً
  static async authenticatedFetch(url, options = {}) {
    const token = localStorage.getItem(ECommerceAuthManager.ACCESS_TOKEN_KEY);
    const headers = {
      "Content-Type": "application/json",
      ...(token ? { "Authorization": \`Bearer \${token}\` } : {}),
      ...(options.headers || {})
    };

    const response = await fetch(url, { ...options, headers });
    
    // التعامل مع انتهاء صلاحية الرمز (401 Unauthorized)
    if (response.status === 401) {
      ECommerceAuthManager.handleLogout();
      window.location.href = "/login?session_expired=true";
      throw new Error("انتهت صلاحية الجلسة، يرجى تسجيل الدخول مجدداً.");
    }

    return response;
  }
}

console.log("نظام إدارة المصادقة بـ JWT وترويسات Authorization جاهز ومحمي");*/`
      },
      outputExplanation: "يوفر هذا النظام اعتراضاً تلقائياً لطلبات الشبكة لحقن ترويسة Authorization، مع معالجة خطأ 401 تلقائياً بمسح الرموز منتهية الصلاحية وإعادة توجيه العميل لشاشة تسجيل الدخول بأمان.",
      commonMistakes: [
        {
          wrong: "// تخزين كلمات مرور المستخدمين كنصوص صريحة في المتصفح أو في الـ LocalStorage",
          correct: "// لا تخزن أبداً كلمات المرور في المتصفح؛ خزن فقط رمز JWT المشفر الذي يمنحه الخادم بعد التحقق"
        }
      ],
      bestPractices: [
        "السماح بتسوق الزوار (Guest Checkout) لتقليل نسب التراجع عن الشراء لدى المشترين المستعجلين",
        "تأمين الرموز واستخدام HTTPS حصراً لمنع اعتراض الترويسات الأمنية",
        "توفير ميزة 'تذكرني' لتسهيل العودة السريعة دون الحاجة لكتابة كلمة المرور في كل زيارة"
      ],
      infographic: {
        title: "تدفق المصادقة وإدارة رموز JWT",
        nodes: [
          { label: "1. إرسال بيانات الدخول", detail: "البريد وكلمة المرور عبر اتصال HTTPS مشفر" },
          { label: "2. استلام رمز الـ JWT", detail: "الخادم يولد ويسلم Access Token مشفراً" },
          { label: "3. ترويسة Authorization", detail: "حقن الرمز تلقائياً في كل طلب لاحق للـ API" },
          { label: "4. معالجة انتهاء الجلسة", detail: "رصد خطأ 401 وإعادة التوجيه للتسجيل بأمان" }
        ]
      }
    },
    {
      id: "33.1.d",
      title: "إدارة الأدوار والصلاحيات (Role-Based Access Control - RBAC)",
      englishTerm: {
        term: "Role-Based Access Control (RBAC)",
        pronunciation: "رول بيسد آكسس كونترول - آر باك",
        meaning: "التحكم في الوصول القائم على الأدوار والصلاحيات"
      },
      description: "منصة التجارة الإلكترونية المتكاملة تستخدمها أطراف متعددة ذات مسؤوليات متباينة: العملاء، مسؤولو المستودعات، مديرو التسويق، والدعم الفني، والمدير العام. نظام التحكم بالوصول القائم على الأدوار (RBAC) يضمن أن كل مستخدم يرى ويتفاعل فقط مع الأجزاء المصرح له بها: فالعميل (Customer) يرى المتجر وطلباته فقط، ومسؤول المستودع (Inventory Staff) يستطيع تعديل كميات المخزون ولكن لا يرى تفاصيل البطاقات الائتمانية أو تقارير الأرباح، بينما يمتلك المدير العام (Super Admin) صلاحية مطلقة لإدارة المنظومة.",
      analogy: "يشبه شارات الدخول والبطاقات الأمنية الملونة في المستشفيات الكبرى؛ بطاقة المريض تسمح له بدخول غرفته وقاعة الانتظار، بطاقة الممرض تسمح له بدخول غرف الأدوية، وبطاقة الجراح تسمح له بدخول غرف العمليات المعقمة.",
      whyItMatters: "يمنع التسريبات الأمنية، ويحمي البيانات المالية الحساسة من اطلاع الموظفين غير المصرح لهم، ويوزع المسؤوليات بدقة في فرق العمل الكبيرة.",
      syntax: `// استخدام مكون فحص الصلاحيات Can
<Can I="update" a="Product">
  <EditProductButton />
</Can>`,
      simpleExample: {
        title: "دالة فحص صلاحيات بسيطة مبنية على مصفوفة الأدوار",
        code: `// خريطة الصلاحيات بحسب الدور
const ROLES_PERMISSIONS = {
  admin: ["create_product", "delete_product", "view_reports", "manage_orders"],
  inventory: ["update_stock", "view_orders"],
  customer: ["create_order", "view_own_orders"]
};

// دالة فحص امتلاك الصلاحية
function hasPermission(userRole, requiredPermission) {
  const permissions = ROLES_PERMISSIONS[userRole] || [];
  return permissions.includes(requiredPermission);
}

// اختبار الصلاحيات
console.log("هل مسؤول المستودع يرى التقارير؟", hasPermission("inventory", "view_reports")); // false
console.log("هل المدير يستطيع حذف منتج؟", hasPermission("admin", "delete_product")); // true`
      },
      advancedExample: {
        title: "نظام RBAC مؤسسي متكامل يدعم الصلاحيات المشروطة والمكونات الحارسة المحمية",
        code: `// فئة إدارة الصلاحيات المؤسسية لنظام التجارة
export class EnterpriseRBACSystem {
  static ROLES = {
    SUPER_ADMIN: "super_admin",
    STORE_MANAGER: "store_manager",
    SUPPORT_AGENT: "support_agent",
    CUSTOMER: "customer"
  };

  static PERMISSIONS_MATRIX = {
    [EnterpriseRBACSystem.ROLES.SUPER_ADMIN]: ["*"], // صلاحيات مطلقة
    [EnterpriseRBACSystem.ROLES.STORE_MANAGER]: [
      "products:read", "products:create", "products:update",
      "orders:read", "orders:update", "reports:read"
    ],
    [EnterpriseRBACSystem.ROLES.SUPPORT_AGENT]: [
      "orders:read", "customers:read", "tickets:manage"
    ],
    [EnterpriseRBACSystem.ROLES.CUSTOMER]: [
      "storefront:browse", "cart:manage", "orders:create", "orders:view_self"
    ]
  };

  // التحقق مما إذا كان المستخدم يملك صلاحية معينة
  static checkPermission(user, requiredPermission) {
    if (!user || !user.role) return false;

    const userPermissions = EnterpriseRBACSystem.PERMISSIONS_MATRIX[user.role] || [];
    // إذا كان يملك رمز الصلاحية المطلقة (*)
    if (userPermissions.includes("*")) return true;

    return userPermissions.includes(requiredPermission);
  }
}

// اختبار عملي للصلاحيات المتعددة
const manager = { id: "m1", role: EnterpriseRBACSystem.ROLES.STORE_MANAGER };
console.log("هل المدير يقدر يقرأ التقارير؟", EnterpriseRBACSystem.checkPermission(manager, "reports:read")); // true
console.log("هل المدير يملك صلاحية حذف النظام؟", EnterpriseRBACSystem.checkPermission(manager, "system:destroy")); // false`
      },
      outputExplanation: "يوضح هذا التأسيس تطبيق مصفوفة الصلاحيات (Permissions Matrix)؛ حيث يتم التحقق من امتلاك المستخدم للصلاحية المحددة بدلاً من فحص اسم دوره مباشرة، مما يتيح تغيير صلاحيات أي دور مستقبلاً دون المساس بمكونات العرض.",
      commonMistakes: [
        {
          wrong: "// فحص صلاحيات المستخدم في واجهة المتصفح فقط وإهمال التحقق منها في الخادم الخلفي (Backend)",
          correct: "// دائماً اعتبر التحقق في الواجهة الأمامية تحسيناً لتجربة المستخدم (UI Hint)، ويجب تأكيده وفحصه إجبارياً في الخادم"
        }
      ],
      bestPractices: [
        "استخدام صيغة المورد والفعل لتسمية الصلاحيات (مثل `products:create` و `orders:read`) لتسهيل القراءة والتوسع",
        "إخفاء الأزرار والإجراءات غير المصرح بها من الشاشة بدلاً من إظهارها معطلة لمنع إرباك المستخدم",
        "توفير صفحة '403 غير مصرح لك بالوصول' مصممة بأناقة عند محاولة فتح رابط محظور"
      ],
      infographic: {
        title: "هرم الصلاحيات والأدوار (RBAC)",
        nodes: [
          { label: "1. المدير العام (Super Admin)", detail: "صلاحيات كاملة وغير مقيدة على المنصة (*)" },
          { label: "2. مدير المتجر (Manager)", detail: "إدارة الكتالوج، الأسعار، والمخازن والتقارير" },
          { label: "3. فريق الدعم (Support)", detail: "مراجعة الطلبات، الرد على الاستفسارات والتذاكر" },
          { label: "4. العميل (Customer)", detail: "التصفح، الشراء، ومراجعة الطلبات الشخصية" }
        ]
      }
    },
    {
      id: "33.1.e",
      title: "تنفيذ إدارة المنتجات والتصنيفات (Product & Category Management in Admin)",
      englishTerm: {
        term: "Admin Product Catalog & Category Taxonomy Operations",
        pronunciation: "أدمن برودكت كاتالوج آند كاتيجوري تاكسونومي أوبريشنز",
        meaning: "إدارة كتالوج المنتجات وتصنيفاتها في لوحة الإدارة"
      },
      description: "تعد وحدة إدارة الكتالوج في لوحة الإدارة بمثابة قلب العمليات التجارية للمتجر. تتطلب هذه الوحدة دعماً كاملاً لعمليات CRUD المتقدمة على المنتجات: إنشاء منتج جديد مع دعم رفع الصور المتعددة، تعيين المتغيرات (Variants: المقاسات، الألوان، والأوزان) وتحديد سعر ومخزون منفصل لكل متغير، وتعيين شجرة التصنيفات متعددة المستويات (Categories & Subcategories). كما تتضمن واجهة الإدارة جدولاً شاملاً يتيح التعديل السريع للأسعار والمخزون، وتغيير حالة المنتجات دفعة واحدة (Bulk Actions: تفعيل، إيقاف، أو نقل للأرشيف).",
      analogy: "يشبه مكتب مدير المعرض الذي يستلم البضائع الجديدة؛ يفتح النظام ويضع اسماً للسلعة، ويحدد كم قطعة وصلت بمقاس L وكم قطعة بمقاس M، ويحدد قسم الملابس الرجالية لعرضها فيه، قبل أن يعطي الإشارة للعمال بوضعها على الرفوف.",
      whyItMatters: "يمكن مسؤولي التجارة من مواكبة تغيرات الأسعار وتحديثات المخزون فورياً دون كتابة سطر كود واحد، مما يحافظ على استمرارية المبيعات ونضارة الكتالوج.",
      syntax: `// نموذج إدارة المنتج بمتغيراته المتعددة
interface ProductMutationPayload {
  title: string;
  price: number;
  categoryId: string;
  variants: Array<{ size: string; color: string; stock: number; priceDiff: number }>;
  tags: string[];
}`,
      simpleExample: {
        title: "إدارة تحديث كميات مخزون المنتج وسعره برمجياً",
        code: `// دالة تحديث مخزون وسعر منتج
function updateProductInventory(productsList, targetId, newStock, newPrice) {
  return productsList.map(prod => {
    if (prod.id === targetId) {
      return {
        ...prod,
        stock: Math.max(0, newStock),
        price: newPrice !== undefined ? newPrice : prod.price,
        isAvailable: newStock > 0,
        updatedAt: Date.now()
      };
    }
    return prod;
  });
}

// اختبار التحديث
const initialStock = [{ id: "p1", title: "قميص قطني", stock: 0, price: 30, isAvailable: false }];
const restocked = updateProductInventory(initialStock, "p1", 50, 28);
console.log("المنتج بعد إعادة تعبئة المخزون:", restocked[0].stock, "قطعة | متوفر؟", restocked[0].isAvailable);`
      },
      advancedExample: {
        title: "نظام إدارة كتالوج احترافي يدعم المتغيرات المتعددة وتوليد الأكواد وإجراءات التحديث الجماعي",
        code: `// فئة إدارة عمليات الكتالوج في لوحة الإدارة
export class AdminCatalogOperations {
  // توليد مصفوفة المتغيرات التبادلية (Cartesian Product) للأحجام والألوان
  static generateVariantsMatrix(sizes = [], colors = [], basePrice = 100) {
    const variants = [];
    sizes.forEach(size => {
      colors.forEach(color => {
        variants.push({
          id: \`var_\${size}_\${color}\`,
          sku: \`SKU-\${size.toUpperCase()}-\${color.toUpperCase()}\`,
          size,
          color,
          price: basePrice,
          stock: 10
        });
      });
    });
    return variants;
  }

  // إجراء تحديث جماعي للمخزون أو الأسعار (Bulk Action)
  static applyBulkAction(products, targetIds, actionType, payload) {
    return products.map(prod => {
      if (!targetIds.includes(prod.id)) return prod;

      switch (actionType) {
        case "UPDATE_STATUS":
          return { ...prod, status: payload.status, updatedAt: Date.now() };
        case "ADJUST_PRICE_PERCENT":
          const factor = 1 + (payload.percent / 100);
          return { ...prod, price: Math.round(prod.price * factor * 100) / 100, updatedAt: Date.now() };
        case "ARCHIVE":
          return { ...prod, status: "archived", updatedAt: Date.now() };
        default:
          return prod;
      }
    });
  }
}

// اختبار توليد مصفوفة المتغيرات
const generated = AdminCatalogOperations.generateVariantsMatrix(["M", "L"], ["أزرق", "أسود"], 150);
console.log("عدد المتغيرات المولدة تلقائياً:", generated.length); // 4 متغيرات`
      },
      outputExplanation: "يوضح هذا التصميم كيف يتكفل محرك الكتالوج بتوليد كافة توافيق الأحجام والألوان (Cartesian Matrix) مع أكواد SKU مستقلة لكل متغير، ويوفر دعماً للإجراءات الجماعية (Bulk Actions) كرفع الأسعار أو أرشفة المنتجات بنقرة واحدة.",
      commonMistakes: [
        {
          wrong: "// إجبار المشرف على إدخال كل متغير (مقاس ولون) يدوياً بشكل فردي وممل مما يستغرق ساعات لكل منتج",
          correct: "// استخدام خوارزمية توليد المتغيرات التلقائية بناءً على قوائم الأحجام والألوان المحددة"
        }
      ],
      bestPractices: [
        "إتاحة خاصية الأرشفة (Archiving) بدلاً من الحذف النهائي للمنتجات القديمة للحفاظ على سلامة سجل الطلبات السابقة",
        "توفير صور مصغرة لكل متغير لوني لتمكين المشتري من رؤية المنتج باللون المختار بدقة",
        "تضمين شريط بحث وتصفية متقدم في لوحة الإدارة للوصول السريع للمنتجات التي أوشك مخزونها على النفاد"
      ],
      infographic: {
        title: "منظومة إدارة الكتالوج والمتغيرات",
        nodes: [
          { label: "1. المنتج الأساسي", detail: "العنوان، الوصف، الفئات، والسعر الأساسي" },
          { label: "2. مصفوفة المتغيرات (Matrix)", detail: "توليد آلي لتوافيق المقاسات والألوان مع الـ SKU" },
          { label: "3. إدارة المخزون اللحظية", detail: "تتبع الكميات وتنبيهات الاقتراب من النفاد" },
          { label: "4. الإجراءات الجماعية (Bulk)", detail: "تحديث الأسعار أو الأرشفة لمجموعة منتجات معاً" }
        ]
      }
    },
    {
      id: "33.1.f",
      title: "تنفيذ البحث والفلترة والترقيم (Catalog Search, Faceted Filtering & Pagination)",
      englishTerm: {
        term: "Faceted Search, Multi-filtering & Server-side Pagination",
        pronunciation: "فاسيتد سيرتش، مالتي فيلترينج آند سيرفر سايد باجينيشن",
        meaning: "البحث متعدد الأوجه والتصفية والترقيم من جانب الخادم"
      },
      description: "في المتاجر الضخمة التي تحتوي على عشرات الآلاف من المنتجات، لا يمكن إجراء الفلترة والترقيم على جهاز العميل؛ بل يجب تنفيذ 'البحث متعدد الأوجه' (Faceted Search) وترقيم جانب الخادم (Server-side Pagination). يتم إرسال معايير الفلترة (الكلمات الدلالية، معرفات التصنيفات، نطاق الأسعار، وتقييم النجوم، ورقم الصفحة) عبر معاملات الرابط (URL Search Params مثل `?q=laptop&category=12&minPrice=500&page=2`). يتولى الخادم معالجة هذه المعايير وإرجاع شريحة المنتجات المطابقة فقط مع إجمالي عدد الصفحات والنتائج.",
      analogy: "يشبه محرك البحث في مواقع حجز الطيران والفنادق؛ تحدد المدينة والنجوم والسعر وموعد السفر، فيقوم خادم الموقع بفحص ملايين الرحلات ويعرض لك فقط أفضل 10 رحلات تطابق شروطك الدقيقة.",
      whyItMatters: "يحافظ على سرعة استجابة المتجر اللحظية بغض النظر عن حجم قاعدة البيانات، ويتيح للعميل نسخ رابط البحث ومشاركته مع أصدقائه مع بقاء كافة الفلاتر والصفحة المختارة مفعلة.",
      syntax: `// بناء رابط استعلام المتجر من معايير الفلترة
const params = new URLSearchParams();
if (query) params.set("q", query);
if (category) params.set("category", category);
params.set("page", String(page));
const response = await fetch(\`/api/products?\${params.toString()}\`);`,
      simpleExample: {
        title: "بناء كائن استعلام معايير الفلترة لتحويله إلى معاملات رابط",
        code: `// دالة تحويل كائن الفلاتر إلى نص استعلام URL
function buildFilterQueryString(filters) {
  const searchParams = new URLSearchParams();

  if (filters.search) searchParams.set("q", filters.search.trim());
  if (filters.category && filters.category !== "all") searchParams.set("cat", filters.category);
  if (filters.minPrice) searchParams.set("min", String(filters.minPrice));
  if (filters.maxPrice) searchParams.set("max", String(filters.maxPrice));
  searchParams.set("page", String(filters.page || 1));

  return searchParams.toString();
}

// اختبار بناء الرابط
const activeFilters = { search: "سماعة", category: "audio", minPrice: 100, page: 2 };
console.log("رابط الاستعلام المولد:", "?" + buildFilterQueryString(activeFilters));
// ?q=%D8%B3%D9%85%D8%A7%D8%B9%D8%A9&cat=audio&min=100&page=2`
      },
      advancedExample: {
        title: "نظام فلترة متعدد الأوجه مع مزامنة حالة الرابط (URL State Synchronization) والترقيم عبر الخادم",
        code: `// فئة إدارة التصفية متعددة الأوجه
export class FacetedSearchEngine {
  // فحص واستخراج الفلاتر من عنوان الرابط الحالي
  static parseFiltersFromUrl(searchString) {
    const params = new URLSearchParams(searchString);
    return {
      query: params.get("q") || "",
      category: params.get("cat") || "all",
      priceRange: {
        min: Number(params.get("min")) || 0,
        max: Number(params.get("max")) || 10000
      },
      page: Math.max(1, parseInt(params.get("page") || "1", 10)),
      sort: params.get("sort") || "featured"
    };
  }

  // محاكاة استجابة الخادم لطلب الفلترة والترقيم
  static simulateServerQuery(allDatabaseProducts, filterOptions, pageSize = 6) {
    let result = [...allDatabaseProducts];

    // 1. فلتر البحث النصي
    if (filterOptions.query) {
      const q = filterOptions.query.toLowerCase();
      result = result.filter(p => p.title.toLowerCase().includes(q));
    }

    // 2. فلتر التصنيف
    if (filterOptions.category && filterOptions.category !== "all") {
      result = result.filter(p => p.category === filterOptions.category);
    }

    // 3. فلتر نطاق السعر
    result = result.filter(p => p.price >= filterOptions.priceRange.min && p.price <= filterOptions.priceRange.max);

    // 4. الترتيب
    if (filterOptions.sort === "price-low") result.sort((a, b) => a.price - b.price);
    else if (filterOptions.sort === "price-high") result.sort((a, b) => b.price - a.price);

    // 5. الترقيم وحساب الإجماليات
    const totalItems = result.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
    const startIndex = (filterOptions.page - 1) * pageSize;
    const paginatedItems = result.slice(startIndex, startIndex + pageSize);

    return {
      items: paginatedItems,
      pagination: {
        currentPage: filterOptions.page,
        totalPages,
        totalItems,
        pageSize
      }
    };
  }
}

// اختبار محاكاة الجلب
const fakeCatalog = [
  { id: 1, title: "لابتوب ألعاب", price: 1500, category: "computers" },
  { id: 2, title: "شاحن سريع", price: 30, category: "accessories" }
];

const parsed = FacetedSearchEngine.parseFiltersFromUrl("?q=لابتوب&page=1");
const serverResponse = FacetedSearchEngine.simulateServerQuery(fakeCatalog, parsed);
console.log("العناصر المرجعة من الخادم:", serverResponse.items.length, "| إجمالي الصفحات:", serverResponse.pagination.totalPages);`
      },
      outputExplanation: "يوضح هذا التصميم مزامنة الفلاتر مع رابط الـ URL عبر URLSearchParams؛ مما يتيح للعميل استرجاع نفس الصفحة ونفس الفلاتر بمجرد تحديث المتصفح أو مشاركة الرابط.",
      commonMistakes: [
        {
          wrong: "// الاحتفاظ بالفلاتر داخل حالة useState محلية فقط دون مزامنتها مع الـ URL مما يؤدي لضياع الفلاتر عند تحديث الصفحة أو الضغط على زر الرجوع",
          correct: "// دائماً اجعل الـ URL هو المصدر الوحيد للحقيقة (Single Source of Truth) لمعايير البحث والصفحة الحالية"
        }
      ],
      bestPractices: [
        "إعادة تصفير الصفحة الحالية إلى `page=1` تلقائياً كلما قام المستخدم بتغيير التصنيف أو نص البحث",
        "تنسيق أسماء معاملات الاستعلام لتكون قصيرة ونظيفة (مثل `q`, `cat`, `page`) لسهولة قراءتها ومشاركتها",
        "إرجاع البيانات الإحصائية للترقيم (`totalItems` و `totalPages`) من الخادم في نفس استجابة جلب المنتجات"
      ],
      infographic: {
        title: "دورة البحث متعدد الأوجه وترقيم الخادم",
        nodes: [
          { label: "1. تفاعل المستخدم مع الفلاتر", detail: "اختيار التصنيف، نطاق السعر، والترتيب" },
          { label: "2. تحديث رابط المتصفح (URL)", detail: "كتابة المعايير في URLSearchParams" },
          { label: "3. استدعاء الخادم الموجه", detail: "جلب الشريحة المحددة فقط عبر معايير الرابط" },
          { label: "4. عرض النتائج والترقيم", detail: "رندر المنتجات وأزرار الترقيم دون إجهاد الذاكرة" }
        ]
      }
    },
    {
      id: "33.1.g",
      title: "إنشاء سلة تسوق متقدمة (Advanced Cart with Variant Support & Persistence)",
      englishTerm: {
        term: "Advanced Variant-Aware Cart & Local Synchronization",
        pronunciation: "أدفانست فارينت أوير كارت آند لوكال سينكرونايزيشن",
        meaning: "سلة تسوق متقدمة تدعم المتغيرات والمزامنة المحلية"
      },
      description: "في المتاجر الاحترافية، لا يكفي حفظ معرف المنتج في السلة، بل يجب إدارة السلة بوعي كامل للمتغيرات (Variant-aware Cart)؛ فالقميص بمقاس L ولون أسود هو سطر مختلف تماماً عن نفس القميص بمقاس M ولون أزرق، ولكل منهما مخزونه وسعره الخاص. يغطي هذا الموضوع بناء سلة تسوق قوية باستخدام Zustand: توليد معرف سطر فريد (Line Item ID: `${productId}_${variantId}`)، والتحقق من سقف مخزون المتغير المختار، وإتاحة تعديل المقاس أو اللون مباشرة من داخل السلة، مع المزامنة التلقائية مع خادم المتجر عند تسجيل الدخول لدمج سلة الزائر مع سلة حسابه الدائم.",
      analogy: "يشبه شراء نظارة طبية بإطار معين وعدسات بدرجة معينة؛ لا يمكن للمتجر أن يرسل لك مجرد 'نظارة'، بل يجب أن يسجل في الفاتورة كود الإطار المختار بدقة مع مقاس وقوة العدسات التي تناسب عينك.",
      whyItMatters: "يمنع أخطاء الشحن والخلط بين المقاسات والألوان، ويوفر تجربة تسوق موثوقة تضمن استلام العميل للسلعة بالمواصفات التي اختارها بدقة.",
      syntax: `// توليد معرف السطر المركب
const lineItemId = \`\${product.id}-\${selectedVariant.sku}\`;`,
      simpleExample: {
        title: "إضافة منتج للسلة بمتغير محدد (المقاس واللون)",
        code: `// دالة إضافة للسلة مع دعم المقاس واللون
function addVariantToCart(cart, product, size, color, qty = 1) {
  const lineKey = \`\${product.id}_\${size}_\${color}\`;
  const existingIndex = cart.findIndex(item => item.lineKey === lineKey);

  if (existingIndex > -1) {
    return cart.map((item, idx) =>
      idx === existingIndex ? { ...item, qty: item.qty + qty } : item
    );
  }

  return [...cart, {
    lineKey,
    id: product.id,
    title: product.title,
    price: product.price,
    size,
    color,
    qty
  }];
}

// تجربة الإضافة
let myCart = [];
myCart = addVariantToCart(myCart, { id: "p1", title: "حذاء رياضي", price: 120 }, "42", "أبيض", 1);
myCart = addVariantToCart(myCart, { id: "p1", title: "حذاء رياضي", price: 120 }, "44", "أسود", 1);
console.log("عدد أسطر السلة المستقلة للمقاسات المختلفة:", myCart.length); // 2`
      },
      advancedExample: {
        title: "مخزن سلة متقدم بوعي المتغيرات ودمج سلة الزائر عند تسجيل الدخول (Guest to User Cart Merge)",
        code: `// فئة إدارة دمج وتحديث سلة المتغيرات المتقدمة
export class EnterpriseCartStoreEngine {
  // دمج سلة الزائر المؤقتة مع سلة حسابه الدائم المحفوظة في الخادم
  static mergeGuestCartWithServerCart(guestCart = [], serverCart = []) {
    const mergedMap = new Map();

    // 1. إضافة عناصر سلة الخادم أولاً
    serverCart.forEach(item => {
      mergedMap.set(item.lineKey, { ...item });
    });

    // 2. دمج عناصر سلة الزائر (إذا وجد العنصر نجمع الكميات مع فحص المخزون)
    guestCart.forEach(guestItem => {
      if (mergedMap.has(guestItem.lineKey)) {
        const existing = mergedMap.get(guestItem.lineKey);
        const combinedQty = existing.qty + guestItem.qty;
        mergedMap.set(guestItem.lineKey, {
          ...existing,
          qty: Math.min(guestItem.maxStock || 99, combinedQty)
        });
      } else {
        mergedMap.set(guestItem.lineKey, { ...guestItem });
      }
    });

    return Array.from(mergedMap.values());
  }

  // التحقق من صلاحية أسعار ومخزون عناصر السلة قبل التوجه للدفع
  static validateCartHealth(cartItems = [], currentInventoryMap = {}) {
    const issues = [];
    const sanitizedCart = cartItems.map(item => {
      const liveProduct = currentInventoryMap[item.id];
      if (!liveProduct || liveProduct.stock === 0) {
        issues.push(\`المنتج "\${item.title}" لم يعد متوفراً في المخزن وتم استبعاده.\`);
        return null;
      }
      if (item.qty > liveProduct.stock) {
        issues.push(\`تم تعديل كمية "\${item.title}" إلى \${liveProduct.stock} نظراً لنفاد الفائض.\`);
        return { ...item, qty: liveProduct.stock };
      }
      return item;
    }).filter(Boolean);

    return { sanitizedCart, issues, isValid: issues.length === 0 };
  }
}

// اختبار دمج السلتين
const guestItems = [{ lineKey: "p1_L_blue", id: "p1", title: "قميص", qty: 2 }];
const serverItems = [{ lineKey: "p1_L_blue", id: "p1", title: "قميص", qty: 1 }];
const finalMerged = EnterpriseCartStoreEngine.mergeGuestCartWithServerCart(guestItems, serverItems);
console.log("الكمية المجمعة بعد تسجيل الدخول للقميص:", finalMerged[0].qty); // 3`
      },
      outputExplanation: "يوضح هذا المحرك المتقدم التعامل مع التحدي الأبرز في المتاجر: دمج سلة الزائر مع سلة حسابه السحابية فور تسجيل الدخول، والتحقق التلقائي من توافر المخزون الحي لكل سطر قبل الشروع في الدفع.",
      commonMistakes: [
        {
          wrong: "// استخدام id المنتج فقط كمفتاح لعنصر السلة، مما يجعل تغيير المقاس أو اللون يكتب فوق العنصر القديم",
          correct: "// دائماً استخدم مفتاحاً مركباً (Composite Line Key) يجمع معرف المنتج ومعرف المقاس واللون المختار"
        }
      ],
      bestPractices: [
        "فحص ومزامنة أسعار عناصر السلة مع الخادم قبل خطوة الدفع للتأكد من عدم تغيير الأسعار أثناء وجودها بالسلة",
        "توفير إمكانية حفظ العنصر في 'قائمة المفضلة' مباشرة من داخل السلة لتفريغها دون فقدان المنتج",
        "عرض تحذير فوري إذا نفد مخزون أحد المتغيرات أثناء تصفح المشتري للسلة"
      ],
      infographic: {
        title: "معمارية سلة التسوق متعددة المتغيرات",
        nodes: [
          { label: "1. المفتاح المركب (Line Key)", detail: "id_size_color لتمييز كل متغير كسطر مستقل" },
          { label: "2. فحص سقف المخزون الحي", detail: "التحقق من توفر كمية المتغير المحدد في المستودع" },
          { label: "3. دمج سلة الزائر مع الحساب", detail: "تجميع العناصر والمزامنة مع الخادم عند الدخول" },
          { label: "4. تدقيق الأسعار قبل الدفع", detail: "التأكد من عدم تغير السعر أثناء فترة الانتظار" }
        ]
      }
    },
    {
      id: "33.1.h",
      title: "إنشاء قائمة المفضلة (Wishlist Architecture & Guest Sync)",
      englishTerm: {
        term: "Wishlist Architecture & Social Sharing",
        pronunciation: "ويش ليست آركيتكتشر آند سوشيال شيرينج",
        meaning: "معمارية قائمة الرغبات والمفضلة والمشاركة الاجتماعية"
      },
      description: "قائمة المفضلة (Wishlist) هي الأداة التسويقية والوظيفية الأهم لزيادة معدل بقاء العملاء وتكرار الشراء؛ حيث تتيح للمتسوقين حفظ المنتجات التي ينوون شراءها لاحقاً أو في مواسم العروض. يتطلب بناء هذه الميزة: زر قلب تفاعلي (Toggle Heart Button) في كل بطاقة منتج، وحفظ قائمة معرفات المنتجات المفضلة في الحالة العامة والتخزين المحلي، وتوفير شاشة مخصصة لعرض المفضلة مع زر سريع 'نقل الجميع إلى سلة التسوق' (Move All to Cart)، وإمكانية توليد رابط مشاركة لقائمة المفضلة لمشاركتها مع الأصدقاء والعائلة كقائمة هدايا.",
      analogy: "يشبه وضع علامة مرجعية ملونة بين صفحات كتالوج ورقي؛ لتعلم على الفساتين أو الساعات التي تعجبك لترجع إليها فور استلام مكافأة نهاية الشهر دون البحث عنها من جديد.",
      whyItMatters: "تخفض نسبة التردد وتمنح المتجر بيانات قيّمة حول أكثر المنتجات رغبة لدى الجماهير لإطلاق حملات ترويجية مستهدفة.",
      syntax: `// هوك تبديل حالة المفضلة
const { isFavorite, toggleFavorite } = useWishlistStore();
<button onClick={() => toggleFavorite(product.id)}>
  {isFavorite(product.id) ? "❤️" : "🤍"}
</button>`,
      simpleExample: {
        title: "إدارة قائمة معرفات المفضلة البسيطة مع زر التبديل",
        code: `import React, { useState } from "react";

// مكون مفضلة مبسط
function SimpleWishlistDemo() {
  const [favorites, setFavorites] = useState(["p1"]);

  const toggleFav = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ padding: "16px", fontFamily: "sans-serif" }}>
      <h4>المنتجات والمفضلة</h4>
      {[{ id: "p1", title: "ساعة فاخرة" }, { id: "p2", title: "نظارة شمسية" }].map(item => {
        const isFav = favorites.includes(item.id);
        return (
          <div key={item.id} style={{ display: "flex", justifyContent: "space-between", padding: "8px", borderBottom: "1px solid #eee" }}>
            <span>{item.title}</span>
            <button onClick={() => toggleFav(item.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px" }}>
              {isFav ? "❤️" : "🤍"}
            </button>
          </div>
        );
      })}
      <p style={{ fontSize: "12px", color: "#666" }}>إجمالي المفضلة: {favorites.length}</p>
    </div>
  );
}

export default SimpleWishlistDemo;`
      },
      advancedExample: {
        title: "نظام مفضلة احترافي متكامل مع دعم النقل للسلة، وتوليد روابط المشاركة الاجتماعية",
        code: `// فئة إدارة قائمة الرغبات والمفضلة للمتجر
export class WishlistManagerEngine {
  static STORAGE_KEY = "STORE_WISHLIST_ITEMS";

  // استرجاع مصفوفة المفضلة
  static getWishlist() {
    try {
      const saved = localStorage.getItem(WishlistManagerEngine.STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  // تبديل وجود المنتج في المفضلة
  static toggleItem(wishlist, product) {
    const exists = wishlist.some(i => i.id === product.id);
    let updated;
    if (exists) {
      updated = wishlist.filter(i => i.id !== product.id);
    } else {
      updated = [...wishlist, {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        addedAt: Date.now()
      }];
    }
    localStorage.setItem(WishlistManagerEngine.STORAGE_KEY, JSON.stringify(updated));
    return { updatedList: updated, wasAdded: !exists };
  }

  // توليد رابط مشاركة المفضلة للأصدقاء
  static generateShareableLink(wishlist) {
    const ids = wishlist.map(i => i.id).join(",");
    const baseUrl = window.location.origin;
    return \`\${baseUrl}/wishlist/shared?items=\${encodeURIComponent(ids)}\`;
  }
}

// تجربة فحص النظام
const currentWish = [{ id: "prod_1", title: "هاتف" }];
const res = WishlistManagerEngine.toggleItem(currentWish, { id: "prod_2", title: "سماعة", price: 100 });
console.log("المفضلة بعد الإضافة:", res.updatedList.length); // 2`
      },
      outputExplanation: "تتيح هذه الفئة إضافة وحذف المنتجات من المفضلة بنقرة واحدة وتخزينها محلياً، مع توفير ميزة توليد روابط المشاركة التي تحول معرفات المنتجات إلى رابط URL يستطيع أي صديق فتحه للاطلاع على قائمة الهدايا المختارة.",
      commonMistakes: [
        {
          wrong: "// تخزين معرفات المنتجات فقط دون بياناتها الأساسية، مما يجبر التطبيق على إعادة استدعاء الخادم لجلب اسم وسعر كل منتج في المفضلة",
          correct: "// تخزين كائن مصغر للمنتج (id, title, price, image) لتوفير عرض فوري وسريع لقائمة المفضلة"
        }
      ],
      bestPractices: [
        "توفير زر 'نقل كافة المفضلة إلى السلة' بضغطة واحدة لتسهيل الشراء المباشر للعميل",
        "تطبيق تأثير حركي ناعم (Pop Animation) على أيقونة القلب عند النقر عليها لتعزيز التفاعل الإيجابي",
        "مزامنة المفضلة مع حساب العميل في السحابة عند تسجيل الدخول لفتحها من مختلف أجهزته"
      ],
      infographic: {
        title: "منظومة قائمة المفضلة والمشاركة",
        nodes: [
          { label: "1. زر القلب التفاعلي ❤️", detail: "إضافة أو استبعاد المنتج بنقرة واحدة سريعة" },
          { label: "2. التخزين المحلي الآمن", detail: "حفظ الكائنات المصغرة لعرض فوري دون تأخير" },
          { label: "3. النقل للسلة بضغطة زر", detail: "تحويل رغبات الشراء إلى طلبات فعلية فورية" },
          { label: "4. روابط المشاركة الاجتماعية", detail: "توليد كود مشاركة لقوائم الهدايا والمناسبات" }
        ]
      }
    },
    {
      id: "33.1.i",
      title: "تنفيذ Checkout Workflow (Multi-step Accordion & State Transitions)",
      englishTerm: {
        term: "Multi-step Accordion Checkout Workflow",
        pronunciation: "مالتي ستيب أكورديون تشيك آوت وورك فلو",
        meaning: "تدفق إنهاء الطلب متعدد الخطوات بنمط الأكورديون"
      },
      description: "تمثل صفحة إنهاء الطلب (Checkout Flow) المرحلة الأكثر حساسية في مسار التجارة الإلكترونية؛ حيث تحدث فيها أعلى نسب التراجع عن الشراء إذا كانت معقدة. النمط المفضل في المتاجر العالمية الكبرى هو نمط الخطوات التتابعية المنزلقة (Multi-step Accordion Flow) المقسم إلى 3 مراحل واضحة: (1) مرحلة عنوان وهوية الشحن (Shipping & Address)، (2) مرحلة خيارات الشحن والتوصيل (Delivery Options: قياسي أو سريع)، و (3) مرحلة المراجعة المالية والدفع (Payment Method & Review). يتم قفل الخطوات التالية حتى يكتمل التحقق من الخطوة السابقة، مع إتاحة الرجوع وتعديل أي خطوة بنقرة زر واحدة.",
      analogy: "يشبه مسار ختم الجوازات وبوابات السفر في المطار؛ تبرز أولاً جواز السفر وبطاقة الصعود، فإذا تم التحقق تفتح لك بوابة التفتيش الأمني، ثم تنتقل لصالة الانتظار وبوابة الطائرة خطوة بخطوة دون ارتباك.",
      whyItMatters: "تفكيك عملية الدفع المعقدة إلى 3 قرارات صغيرة يقلل العبء الذهني على المشتري ويخفض معدلات التخلي عن السلة بنسبة تزيد عن 35%.",
      syntax: `// مراحل تدفق إنهاء الطلب
type CheckoutStep = "ADDRESS" | "SHIPPING" | "PAYMENT" | "CONFIRMATION";
const [activeStep, setActiveStep] = useState<CheckoutStep>("ADDRESS");`,
      simpleExample: {
        title: "تدفق خطوات إنهاء الطلب الثلاثية البسيطة",
        code: `import React, { useState } from "react";

// محاكاة خطوات إنهاء الطلب
function SimpleCheckoutStepsDemo() {
  const [step, setStep] = useState(1);

  return (
    <div style={{ maxWidth: "450px", margin: "20px auto", padding: "16px", border: "1px solid #e2e8f0", borderRadius: "12px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", fontSize: "12px", fontWeight: "bold" }}>
        <span style={{ color: step >= 1 ? "#0284c7" : "#aaa" }}>1. العنوان</span>
        <span style={{ color: step >= 2 ? "#0284c7" : "#aaa" }}>2. التوصيل</span>
        <span style={{ color: step >= 3 ? "#0284c7" : "#aaa" }}>3. الدفع</span>
      </div>

      <div style={{ padding: "12px", backgroundColor: "#f8fafc", borderRadius: "8px", minHeight: "80px" }}>
        {step === 1 && <div>أدخل اسم المستلم والمدينة والحي...</div>}
        {step === 2 && <div>اختر شركة الشحن: أرامكس (15$) أو سمسا (20$)...</div>}
        {step === 3 && <div>اختر وسيلة الدفع وأدخل بيانات البطاقة...</div>}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
        {step > 1 && <button onClick={() => setStep(step - 1)}>السابق</button>}
        <button onClick={() => step < 3 ? setStep(step + 1) : alert("تم الدفع بنجاح!")}>
          {step === 3 ? "تأكيد الدفع النهائي ✓" : "المتابعة للخطوة التالية ←"}
        </button>
      </div>
    </div>
  );
}

export default SimpleCheckoutStepsDemo;`
      },
      advancedExample: {
        title: "نظام Checkout Accordion احترافي متكامل مع التحقق الموضعي والملخص المالي الحي",
        code: `import React, { useState } from "react";

// مكون تدفق إنهاء الطلب المتطور بنمط الأكورديون
export function AccordionCheckoutFlow({ cartSubtotal = 500, onFinalizeOrder }) {
  // رقم الخطوة النشطة حالياً
  const [currentStep, setCurrentStep] = useState(1);

  // حالة بيانات الشحن
  const [shippingAddress, setShippingAddress] = useState({ name: "خالد المحمد", city: "الرياض", street: "طريق الملك فهد" });
  // خيار شركة الشحن
  const [deliveryMethod, setDeliveryMethod] = useState("express");
  // طريقة الدفع
  const [paymentOption, setPaymentOption] = useState("apple_pay");

  const shippingCost = deliveryMethod === "express" ? 25 : 15;
  const grandTotal = cartSubtotal + shippingCost;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 font-sans text-xs">
      {/* الخطوة 1: عنوان التوصيل */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className={\`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs \${currentStep > 1 ? "bg-emerald-500 text-white" : "bg-sky-600 text-white"}\`}>
              {currentStep > 1 ? "✓" : "1"}
            </span>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">عنوان وبيانات الشحن</h3>
          </div>
          {currentStep > 1 && (
            <button onClick={() => setCurrentStep(1)} className="text-sky-600 font-bold hover:underline">تعديل</button>
          )}
        </div>

        {currentStep === 1 ? (
          <div className="mt-4 space-y-3">
            <input type="text" value={shippingAddress.name} onChange={e => setShippingAddress({ ...shippingAddress, name: e.target.value })} placeholder="اسم المستلم..." className="w-full p-2.5 rounded-xl border bg-slate-50 dark:bg-slate-800" />
            <div className="grid grid-cols-2 gap-2">
              <input type="text" value={shippingAddress.city} onChange={e => setShippingAddress({ ...shippingAddress, city: e.target.value })} placeholder="المدينة..." className="p-2.5 rounded-xl border bg-slate-50 dark:bg-slate-800" />
              <input type="text" value={shippingAddress.street} onChange={e => setShippingAddress({ ...shippingAddress, street: e.target.value })} placeholder="الشارع والحي..." className="p-2.5 rounded-xl border bg-slate-50 dark:bg-slate-800" />
            </div>
            <button onClick={() => setCurrentStep(2)} className="w-full py-2.5 bg-slate-900 text-white dark:bg-sky-600 rounded-xl font-bold mt-2">
              متابعة إلى خيارات التوصيل ←
            </button>
          </div>
        ) : (
          <p className="text-slate-500 mt-1">{shippingAddress.name} - {shippingAddress.city}، {shippingAddress.street}</p>
        )}
      </div>

      {/* الخطوة 2: خيارات وسرعة التوصيل */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className={\`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs \${currentStep > 2 ? "bg-emerald-500 text-white" : currentStep === 2 ? "bg-sky-600 text-white" : "bg-slate-200 text-slate-600"}\`}>
              {currentStep > 2 ? "✓" : "2"}
            </span>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">طريقة وسرعة التوصيل</h3>
          </div>
          {currentStep > 2 && (
            <button onClick={() => setCurrentStep(2)} className="text-sky-600 font-bold hover:underline">تعديل</button>
          )}
        </div>

        {currentStep === 2 && (
          <div className="mt-4 space-y-2">
            <label className="flex items-center justify-between p-3 border rounded-xl cursor-pointer bg-slate-50 dark:bg-slate-800">
              <div className="flex items-center gap-2">
                <input type="radio" checked={deliveryMethod === "standard"} onChange={() => setDeliveryMethod("standard")} />
                <span>توصيل قياسي (3-5 أيام عمل)</span>
              </div>
              <strong>\$15.00</strong>
            </label>
            <label className="flex items-center justify-between p-3 border rounded-xl cursor-pointer bg-slate-50 dark:bg-slate-800">
              <div className="flex items-center gap-2">
                <input type="radio" checked={deliveryMethod === "express"} onChange={() => setDeliveryMethod("express")} />
                <span>توصيل سريع فائق (خلال 24 ساعة) ⚡</span>
              </div>
              <strong>\$25.00</strong>
            </label>
            <button onClick={() => setCurrentStep(3)} className="w-full py-2.5 bg-slate-900 text-white dark:bg-sky-600 rounded-xl font-bold mt-2">
              متابعة إلى بوابة الدفع ←
            </button>
          </div>
        )}
      </div>

      {/* الخطوة 3: وسيلة الدفع والمراجعة المالية */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className={\`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs \${currentStep === 3 ? "bg-sky-600 text-white" : "bg-slate-200 text-slate-600"}\`}>
            3
          </span>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">طريقة الدفع والمراجعة النهائية</h3>
        </div>

        {currentStep === 3 && (
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <button type="button" onClick={() => setPaymentOption("apple_pay")} className={\`p-3 border rounded-xl font-bold \${paymentOption === "apple_pay" ? "border-sky-500 bg-sky-50 dark:bg-sky-950/60" : ""}\`}>
                 Apple Pay
              </button>
              <button type="button" onClick={() => setPaymentOption("card")} className={\`p-3 border rounded-xl font-bold \${paymentOption === "card" ? "border-sky-500 bg-sky-50 dark:bg-sky-950/60" : ""}\`}>
                💳 بطاقة مدى / فيزا
              </button>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-2xl border space-y-1.5">
              <div className="flex justify-between"><span>مجموع المنتجات:</span><strong>\${cartSubtotal.toFixed(2)}</strong></div>
              <div className="flex justify-between"><span>تكلفة الشحن:</span><strong>\${shippingCost.toFixed(2)}</strong></div>
              <div className="flex justify-between text-sm font-black pt-2 border-t text-slate-900 dark:text-white">
                <span>المبلغ الكلي للدفع:</span><span>\${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => onFinalizeOrder({ address: shippingAddress, shippingCost, grandTotal, paymentOption })}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-lg transition text-sm"
            >
              تأكيد وسداد الفاتورة (\${grandTotal.toFixed(2)}) ✓
            </button>
          </div>
        )}
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يقدم هذا المكون نمط الأكورديون الذكي الذي يفتح الخطوة النشطة تلقائياً ويطوي الخطوات السابقة مع إظهار ملخص سريع لمحتواها وزر 'تعديل' لسهولة الرجوع إليها.",
      commonMistakes: [
        {
          wrong: "// إجبار العميل على إعادة كتابة بيانات الخطوات السابقة في حال أراد الرجوع لتعديل خيار الشحن",
          correct: "// حفظ بيانات كل خطوة في حالة موحدة وتوفير زر 'تعديل' يفتح الخطوة السابقة دون مسح مدخلاتها"
        }
      ],
      bestPractices: [
        "عرض مؤشر الأرقام (1, 2, 3) مع علامة الصح الخضراء (✓) عند اكتمال كل خطوة لإشعار العميل بالإنجاز",
        "تحديث المبلغ الإجمالي النهائي فورياً عند تبديل خيارات الشحن (قياسي مقابل سريع)",
        "تعطيل زر الدفع النهائي فور النقر عليه وإظهار مؤشر معالجة لتفادي السحب المتكرر"
      ],
      infographic: {
        title: "مراحل تدفق إنهاء الطلب (Accordion Checkout)",
        nodes: [
          { label: "1. العنوان والتوصيل", detail: "اسم المستلم، العنوان الوطني، ورقم الجوال" },
          { label: "2. خيار الشحن", detail: "توصيل قياسي أو توصيل سريع فائق خلال 24 ساعة" },
          { label: "3. المراجعة المالية", detail: "تفقيط المنتجات والشحن وإجمالي الفاتورة الصافي" },
          { label: "4. بوابة الدفع الآمنة", detail: "Apple Pay أو البطاقة الائتمانية مع تأكيد فوري" }
        ]
      }
    },
    {
      id: "33.1.j",
      title: "دمج مزود دفع من خلال Backend آمن (Stripe Payment Integration & Security)",
      englishTerm: {
        term: "Secure Payment Gateway Integration & Webhooks",
        pronunciation: "سكيور بايمنت جيتواي إنتيجريشن آند ويب هوكس",
        meaning: "دمج بوابات الدفع الآمنة ومعالجة إشعارات الويب هوك"
      },
      description: "الأمان المالي في التجارة الإلكترونية هو خط أحمر تحكمه معايير الأمان الدولية (PCI-DSS Compliance). لا يجوز مطلقاً للواجهة الأمامية في React أن تستقبل أو تخزن أو ترسل أرقام البطاقات الائتمانية أو رموز CVC مباشرة إلى خادم المتجر. التدفق القياسي الآمن يعتمد على مزودي دفع معتمدين (مثل Stripe Elements أو HyperPay أو Moyasar): تقوم الواجهة بطلب جلسة دفع آمنة (PaymentIntent) من الخادم الخلفي، ثم تعرض عناصر إدخال مؤمنة داخل إطارات آمنة (iFrames) يشرف عليها مزود الدفع مباشرة، ويتم تأكيد الدفع عبر إشعارات خفية موثقة من الخادم للخادم (Webhooks).",
      analogy: "يشبه إيداع مجوهرات في خزنة بنك سويسري محصن؛ أنت لا تسلم المجوهرات لسائق التاكسي ليأخذها، بل يأتي مندوب مدرع من البنك بحقيبة مصفحة يستلمها منك ويسلمك إيصالاً رسمياً مختوماً.",
      whyItMatters: "يحمي المتجر وأصحابه من المساءلة القانونية الجنائية والغرامات الضخمة في حال اختراق الواجهة؛ فبيانات البطاقات لا تمر أصلاً بخوادم المتجر الخاصة.",
      syntax: `// تدفق إنشاء PaymentIntent مع Stripe في React
const { clientSecret } = await fetch("/api/create-payment-intent", { method: "POST" }).then(r => r.json());
const result = await stripe.confirmCardPayment(clientSecret, {
  payment_method: { card: elements.getElement(CardElement) }
});`,
      simpleExample: {
        title: "محاكاة تدفق استلام مفتاح جلسة الدفع وتأكيده عبر الواجهة",
        code: `// محاكاة لتدفق الأمان البنكي
async function processSecurePaymentSimulation(cartTotal) {
  console.log("1. طلب مفتاح جلسة الدفع الآمنة (Client Secret) من الخادم الخلفي...");
  // محاكاة استدعاء backend آمن
  const sessionToken = "pi_sec_" + Math.random().toString(36).slice(2);
  
  console.log("2. إرسال بيانات الدفع مباشرة لمزود الدفع المشفر عبر الرمز:", sessionToken);
  await new Promise(r => setTimeout(r, 1000));

  console.log("3. استلام نجاح العملية من بوابة الدفع وتوليد إشعار Webhook.");
  return { status: "succeeded", paymentId: sessionToken };
}

// اختبار المحاكاة
processSecurePaymentSimulation(350).then(res => console.log("نتيجة الدفع الآمن:", res.status));`
      },
      advancedExample: {
        title: "فئة إدارة الدفع الآمن ومحاكاة التحقق من التوقيعات الرقمية وإشعارات Webhooks",
        code: `// فئة إدارة المعاملات المالية الآمنة
export class SecurePaymentOrchestrator {
  // إنشاء نية الدفع من جانب الخادم (Simulated Backend Handler)
  static async createPaymentIntentOnServer(orderPayload) {
    if (!orderPayload.amount || orderPayload.amount <= 0) {
      throw new Error("المبلغ غير صالح للبدء في جلسة دفع.");
    }

    // محاكاة استجابة Stripe الرسمية
    return {
      clientSecret: \`pi_\${Date.now()}_secret_\${Math.random().toString(36).slice(2, 10)}\`,
      currency: "SAR",
      amountInCents: Math.round(orderPayload.amount * 100),
      timestamp: Date.now()
    };
  }

  // تأكيد الدفع من جانب العميل باستخدام الرمز السري للجلسة
  static async confirmClientSidePayment(clientSecret, cardDetailsMock) {
    if (!clientSecret || !clientSecret.startsWith("pi_")) {
      return { success: false, error: "رمز جلسة الدفع غير صالح أو منتهي الصلاحية." };
    }

    // محاكاة معالجة البنك للرمز السري
    await new Promise(resolve => setTimeout(resolve, 1200));

    // محاكاة نجاح العملية وتوليد معرف العملية البنكي
    return {
      success: true,
      transactionId: \`ch_\${Date.now()}_txn\`,
      paidAmount: cardDetailsMock.amount,
      cardBrand: "Visa / Mada",
      last4: "4242"
    };
  }
}

// اختبار تدفق الدفع المؤسسي
async function testPaymentPipeline() {
  const intent = await SecurePaymentOrchestrator.createPaymentIntentOnServer({ amount: 1250 });
  console.log("رمز الجلسة الآمن المنشأ:", intent.clientSecret);
  const confirmation = await SecurePaymentOrchestrator.confirmClientSidePayment(intent.clientSecret, { amount: 1250 });
  console.log("تأكيد العملية البنكية:", confirmation.success ? "ناجحة ✓" : "فاشلة ✕", "| رقم الإيصال:", confirmation.transactionId);
}

testPaymentPipeline();`
      },
      outputExplanation: "يوضح هذا التصميم المعماري التدفق القياسي لبوابات الدفع العالمية: إنشاء PaymentIntent من جانب الخادم لتوليد clientSecret، ثم استخدام هذا الرمز لتأكيد العملية مع مزود الدفع دون وصول أرقام البطاقات الحساسة لخوادم التطبيق.",
      commonMistakes: [
        {
          wrong: "// تخزين مفتاح الـ Stripe Secret Key داخل ملفات React بالواجهة الأمامية مما يتيح لأي شخص سحب أموال حسابك البنكي",
          correct: "// احتفظ بمفتاح Secret Key في الخادم الخلفي فقط (Environment Variables)، واستخدم في الواجهة مفتاح Publishable Key العام فقط"
        }
      ],
      bestPractices: [
        "الاعتماد على Webhooks لتحديث حالة الطلب في قاعدة البيانات بدلاً من الاعتماد فقط على رد متصفح العميل الذي قد ينقطع اتصاله",
        "استخدام بروتوكول 3D Secure 2 لتفعيل رسائل التأكيد عبر الرمز المؤقت للجوال (OTP) لحماية العمليات من الاحتيال",
        "توضيح اسم المتجر ورقم الترخيص التجاري بوضوح في صفحة الدفع لبناء ثقة المشتري"
      ],
      infographic: {
        title: "بروتوكول الدفع الآمن (PCI-DSS Compliant Flow)",
        nodes: [
          { label: "1. إنشاء PaymentIntent", detail: "الخادم الخلفي يطلب جلسة مشفرة من Stripe" },
          { label: "2. استلام Client Secret", detail: "تمرير الرمز للواجهة لتفعيل حقول الإدخال الآمنة" },
          { label: "3. تأكيد العملية المشفرة", detail: "إرسال بيانات البطاقة مباشرة لسيرفرات البنك" },
          { label: "4. إشعار Webhook الخفي", detail: "الخادم يستلم تأكيد الخصم ويحدث حالة الطلب" }
        ]
      }
    },
    {
      id: "33.1.k",
      title: "إنشاء صفحة الطلبات وتفاصيلها (Orders History & Tracking Details)",
      englishTerm: {
        term: "Orders Management & Realtime Shipment Tracking",
        pronunciation: "أوردرز مانجمنت آند ريل تايم شيبمنت تراكينج",
        meaning: "إدارة الطلبات السابقة وتتبع الشحنات في الوقت الفعلي"
      },
      description: "لا تنتهي علاقة المتجر بالعميل عند خصم المبلغ، بل تبدأ مرحلة ما بعد البيع (Post-purchase Experience). تتطلب هذه الوحدة شاشتين: (1) صفحة سجل الطلبات السابقة (`/orders`) التي تعرض كروت الطلبات مصنفة بالحالات (قيد التجهيز، تم الشحن، تم التوصيل، أو ملغي) مع رقم التتبع وتاريخ الطلب والمبلغ الإجمالي، و (2) صفحة تفاصيل الطلب المفرد (`/orders/:orderId`) التي تعرض شريط تقدم الشحن المرئي (Shipment Progress Tracker)، وفاتورة المنتجات المشتراة بأسعارها وصورها، وزر تحميل الفاتورة الضريبية بصيغة PDF، وزر 'إعادة الطلب بنقرة واحدة' (Re-order).",
      analogy: "يشبه شاشات تتبع طلبات التوصيل السريع؛ ترى أيقونة السيارة تتحرك على الخريطة وتضيء المراحل: استلام الطلب -> في المطبخ -> مع السائق -> تم التوصيل إلى باب منزلك.",
      whyItMatters: "يقلل من استفسارات الدعم الفني المرهقة من نوع 'أين شحنتي؟'، ويمنح المشتري راحة بال تامة حول مصير أمواله وموعد استلام بضاعته.",
      syntax: `// مكون شريط تتبع حالة الشحنة
<ShipmentStepper
  steps={["تم الطلب", "قيد التجهيز", "خرج للشحن", "تم التوصيل"]}
  currentStepIndex={order.statusIndex}
/>`,
      simpleExample: {
        title: "عرض شريط تقدم مراحل توصيل الطلب البسيط",
        code: `import React from "react";

// مكون شريط تتبع حالة الشحنة
function SimpleOrderTracker({ currentStep = 2 }) {
  const steps = ["تم تأكيد الطلب", "قيد التجهيز", "تم الشحن", "تم التوصيل"];

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", padding: "16px", border: "1px solid #e2e8f0", borderRadius: "12px", fontFamily: "sans-serif" }}>
      <h4>مراحل تتبع الشحنة</h4>
      <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
        {steps.map((label, idx) => {
          const isDone = idx <= currentStep;
          return (
            <div key={idx} style={{ textAlign: "center", flex: 1 }}>
              <div style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: isDone ? "#16a34a" : "#cbd5e1",
                color: "#fff",
                margin: "0 auto 6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: "bold"
              }}>
                {isDone ? "✓" : idx + 1}
              </div>
              <span style={{ fontSize: "11px", color: isDone ? "#0f172a" : "#94a3b8", fontWeight: isDone ? "bold" : "normal" }}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SimpleOrderTracker;`
      },
      advancedExample: {
        title: "صفحة تفاصيل طلب متكاملة مع خط زمني للتوصيل وفاتورة تفصيلية وزر إعادة الطلب الفوري",
        code: `import React from "react";

// بيانات طلب تجريبية مفصلة
const MOCK_ORDER_DETAIL = {
  id: "ORD-99214",
  date: "26 أكتوبر 2026",
  carrier: "أرامكس (Aramex Express)",
  trackingNumber: "ARX-8829103",
  statusIndex: 2, // تم الشحن
  shippingAddress: "خالد المحمد - الرياض، حي الياسمين، شارع أنس بن مالك",
  items: [
    { id: "p1", title: "سماعات محيطية لاسلكية", price: 149, qty: 1, image: "https://placehold.co/60x60" },
    { id: "p2", title: "كابل شحن سريع Type-C", price: 25, qty: 2, image: "https://placehold.co/60x60" }
  ],
  totals: { subtotal: 199, shipping: 25, tax: 33.6, grandTotal: 257.6 }
};

export function DetailedOrderTrackingPage({ order = MOCK_ORDER_DETAIL, onReorder }) {
  const steps = [
    { label: "تم استلام الطلب", time: "26 أكتوبر 09:30 ص" },
    { label: "قيد التجهيز والتغليف", time: "26 أكتوبر 02:15 م" },
    { label: "تم تسليم الشحنة للناقل", time: "27 أكتوبر 10:00 ص" },
    { label: "تم التوصيل للعميل", time: "متوقع 28 أكتوبر" }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl font-sans space-y-6">
      {/* رأس الصفحة مع رقم الطلب وزر الإجراءات */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="text-xs font-bold text-sky-600 bg-sky-50 dark:bg-sky-950/60 px-2.5 py-1 rounded-full">
            ● الشحنة قيد النقل السريع
          </span>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white mt-2">
            تفاصيل الطلب #{order.id}
          </h1>
          <p className="text-xs text-slate-400">تاريخ الطلب: {order.date} • شركة الشحن: {order.carrier}</p>
        </div>

        <button
          type="button"
          onClick={() => onReorder(order.items)}
          className="px-5 py-2.5 bg-slate-900 text-white dark:bg-sky-600 rounded-2xl font-bold text-xs shadow hover:opacity-90 transition self-start sm:self-auto"
        >
          إعادة شراء المنتجات ↺
        </button>
      </div>

      {/* شريط خطوات التوصيل التفاعلي */}
      <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-100 dark:border-slate-700">
        <h3 className="font-bold text-xs text-slate-400 mb-4">مسار شحنة الطلب:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {steps.map((st, idx) => {
            const isCompleted = idx <= order.statusIndex;
            return (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-right">
                <div className={\`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-2 transition \${
                  isCompleted ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20" : "bg-slate-200 text-slate-400"
                }\`}>
                  {isCompleted ? "✓" : idx + 1}
                </div>
                <span className={\`text-xs font-bold \${isCompleted ? "text-slate-900 dark:text-white" : "text-slate-400"}\`}>
                  {st.label}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">{st.time}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* تفاصيل المنتجات المشتراة */}
      <div>
        <h3 className="font-bold text-xs text-slate-400 mb-3">المنتجات في هذا الطلب:</h3>
        <div className="space-y-3">
          {order.items.map(item => (
            <div key={item.id} className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs">
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-contain rounded-xl bg-white dark:bg-slate-900 p-1" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <span className="text-slate-400">\${item.price} × {item.qty} قطعة</span>
                </div>
              </div>
              <strong className="font-black text-slate-900 dark:text-white">\${item.price * item.qty}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* ملخص الفاتورة المالية النهائية */}
      <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
        <div className="flex justify-between text-slate-600 dark:text-slate-300"><span>المجموع الفرعي:</span><span>\${order.totals.subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between text-slate-600 dark:text-slate-300"><span>الشحن السريع:</span><span>\${order.totals.shipping.toFixed(2)}</span></div>
        <div className="flex justify-between text-slate-600 dark:text-slate-300"><span>ضريبة القيمة المضافة (15%):</span><span>\${order.totals.tax.toFixed(2)}</span></div>
        <div className="flex justify-between font-black text-sm text-slate-900 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-700">
          <span>الإجمالي المدفوع:</span><span className="text-emerald-600">\${order.totals.grandTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "توفر هذه الصفحة تجربة ما بعد بيع نموذجية؛ حيث تعرض مسار التوصيل الزمني، وتفاصيل بوليصة الشحن، وفاتورة المنتجات المشتراة، مع إتاحة إعادة شراء نفس المنتجات بنقرة زر واحدة دون الحاجة للبحث عنها في الكتالوج.",
      commonMistakes: [
        {
          wrong: "// الاكتفاء بعرض كلمة 'تم الشحن' دون إظهار رقم تتبع الشحنة أو رابط الناقل الرسمي (Aramex/DHL)",
          correct: "// دائماً اعرض رقم التتبع (Tracking Number) مع رابط مباشر لموقع شركة الشحن للاطلاع على خط سير الشحنة"
        }
      ],
      bestPractices: [
        "توفير ميزة 'إعادة الطلب' (Re-order) لنقل عناصر الفاتورة السابقة إلى سلة التسوق الحالية بضغطة زر واحدة",
        "توضيح أوقات وتواريخ إنجاز كل خطوة في شريط التوصيل لتعزيز المصداقية والوضوح",
        "إتاحة زر تنزيل الفاتورة الضريبية الرسمية كملف PDF للأغراض المحاسبية"
      ],
      infographic: {
        title: "دورة تتبع الطلبات وما بعد البيع",
        nodes: [
          { label: "1. استلام الطلب", detail: "توليد رقم الفاتورة والبدء في تجهيز الطرد" },
          { label: "2. التغليف وتسليم الناقل", detail: "إصدار بوليصة الشحن ورقم التتبع ARX" },
          { label: "3. الشحن المباشر", detail: "شريط تتبع بصري يوضح حركة الشحنة حتى الباب" },
          { label: "4. إعادة الشراء بنقرة واحدة", detail: "نقل كافة السلع للسلة لتكرار الطلب بسهولة" }
        ]
      }
    },
    {
      id: "33.1.l",
      title: "إدارة بيانات الخادم باستخدام TanStack Query (Server State, Caching & Invalidation)",
      englishTerm: {
        term: "Enterprise Server State & Optimistic Cache Management",
        pronunciation: "إنتربرايز سيرفر ستيت آند أوبتيمستيك كاش مانجمنت",
        meaning: "إدارة حالة الخادم المؤسسية والتخزين المتفائل للكاش"
      },
      description: "في منصة تجارة ضخمة تضم مئات آلاف الزيارات، يمثل الاستخدام الخاطئ لطلبات الشبكة ضغطاً مدعياً على الخوادم وبطئاً قاتلاً للعملاء. مكتبة `TanStack Query` تتولى قيادة إدارة حالة الخادم في المنصة المؤسسية: (1) تطبيق استراتيجية الكاش المزدوج (Stale-While-Revalidate): حيث تعرض البيانات المخزنة فورياً ثم تحدثها في الخلفية بهدوء، (2) استخدام التحديثات المتفائلة (Optimistic Updates) عند إضافة عناصر للمفضلة أو تعديل المخزون بحيث تتحدث الواجهة في جزء من الثانية قبل انتظار رد الخادم، و (3) الإلغاء التلقائي لطلبات البحث القديمة عند كتابة استعلام جديد عبر `AbortController`.",
      analogy: "يشبه شاشات عرض أسعار الذهب الفورية في البورصة؛ تحتفظ بآخر سعر معتمد وتحدث نفسها في كسر من الثانية بمجرد تحرك المؤشر العالمي دون أن يضطر الصائغ لإعادة تشغيل الشاشة.",
      whyItMatters: "يحول المتجر إلى تطبيق فائق السرعة يشبه التطبيقات المحلية (Desktop-like Responsiveness)، ويخفض استهلاك خوادم الـ API بنسبة تزيد عن 60%.",
      syntax: `// التحديث المتفائل في TanStack Query
const mutation = useMutation({
  mutationFn: toggleFavoriteApi,
  onMutate: async (newFavId) => {
    await queryClient.cancelQueries({ queryKey: ["wishlist"] });
    const previous = queryClient.getQueryData(["wishlist"]);
    queryClient.setQueryData(["wishlist"], old => [...old, newFavId]);
    return { previous };
  },
  onError: (err, newFavId, context) => {
    queryClient.setQueryData(["wishlist"], context.previous);
  }
});`,
      simpleExample: {
        title: "استعلام منتجات مع وقت صلاحية كاش staleTime محدد",
        code: `// محاكاة استعلام TanStack Query مع الكاش
class ProductsQueryService {
  constructor() {
    this.cache = new Map();
  }

  async getProducts() {
    const cached = this.cache.get("products");
    // إذا كانت البيانات موجودة وأقل من 60 ثانية
    if (cached && Date.now() - cached.timestamp < 60000) {
      console.log("استرجاع المنتجات من كاش TanStack Query الفوري ✓");
      return cached.data;
    }

    console.log("طلب شبكة حقيقي لجلب أحدث المنتجات من الخادم...");
    const fresh = [{ id: "p1", title: "هاتف محمول", price: 900 }];
    this.cache.set("products", { data: fresh, timestamp: Date.now() });
    return fresh;
  }
}

// اختبار الاستعلام المزدوج
const service = new ProductsQueryService();
service.getProducts().then(() => {
  // الطلب الثاني فورياً يستفيد من الكاش
  service.getProducts();
});`
      },
      advancedExample: {
        title: "نظام إدارة كاش متفائل (Optimistic Updates Engine) لتعديل كميات المخزون مع التراجع التلقائي عند الفشل",
        code: `// محاكي التحديث المتفائل للمخزون
export class OptimisticInventoryEngine {
  constructor(initialCatalog = []) {
    this.clientState = [...initialCatalog];
    this.serverState = [...initialCatalog];
  }

  // تنفيذ التحديث المتفائل على واجهة العميل قبل انتظار الخادم
  async updateStockOptimistically(productId, newStock, shouldFailOnServer = false) {
    // 1. أخذ لقطة سريعة من الحالة السابقة للتراجع عند الخطأ (Snapshot)
    const rollbackSnapshot = [...this.clientState];

    // 2. تحديث الواجهة فورياً بنسبة 0ms (Optimistic Update)
    this.clientState = this.clientState.map(p =>
      p.id === productId ? { ...p, stock: newStock } : p
    );
    console.log(\`[0ms]: تم تحديث الواجهة فورياً للمخزون الجديد: \${newStock} قطعة\`);

    // 3. إرسال الطلب الفعلي للخادم ومحاكاة تأخير الشبكة (500ms)
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldFailOnServer) reject(new Error("500: فشل الاتصال بقاعدة بيانات المستودع."));
          else resolve();
        }, 500);
      });

      // نجاح العملية في الخادم
      this.serverState = [...this.clientState];
      console.log("[500ms]: تم تثبيت المخزون في الخادم بنجاح ✓");
      return { success: true };
    } catch (error) {
      // 4. التراجع الفوري إلى اللقطة السابقة عند الفشل (Rollback)
      this.clientState = rollbackSnapshot;
      console.warn(\`[500ms]: حدث خطأ في الخادم! تم التراجع الفوري للحالة السابقة (\${error.message})\`);
      return { success: false, error: error.message };
    }
  }
}

// تجربة التحديث المتفائل مع محاكاة الفشل والتراجع
const engine = new OptimisticInventoryEngine([{ id: "item_1", stock: 10 }]);
engine.updateStockOptimistically("item_1", 25, true); // سيفشل في الخادم ويتراجع`
      },
      outputExplanation: "يوضح هذا المثال كيفية تنفيذ التحديث المتفائل (Optimistic Updates)؛ حيث تنعكس التغييرات في واجهة المستخدم في نفس لحظة النقر (0ms)، وإذا فشل طلب الخادم في الخلفية، يقوم النظام فورياً بإعادة الواجهة للقطة السابقة (Rollback) بهدوء مع إشعار المستخدم.",
      commonMistakes: [
        {
          wrong: "// نسيان حفظ لقطة تراجع (Rollback Context) عند تنفيذ التحديث المتفائل، مما يترك الواجهة في حالة غير متطابقة مع الخادم عند حدوث خطأ شبكي",
          correct: "// دائماً التقط نسخة من البيانات السابقة في دالة onMutate وأرجعها في كائن السياق لاستعادتها في دالة onError"
        }
      ],
      bestPractices: [
        "استخدام staleTime مناسب (مثلاً دقيقتين للمنتجات و 30 ثانية للمخزون الحساس) لمنع استنزاف موارد الشبكة",
        "تفعيل خاصية keepPreviousData عند الانتقال بين صفحات الترقيم لمنع وميض الشاشة الفارغة",
        "إبطال استعلامات السلة والطلبات فورياً بعد إتمام الدفع الناجح لضمان تزامن الحسابات"
      ],
      infographic: {
        title: "دورة التحديث المتفائل والكاش الذكي",
        nodes: [
          { label: "1. نقرة المستخدم", detail: "تعديل فوري في واجهة العميل (0ms) مع حفظ لقطة تراجع" },
          { label: "2. طلب الخادم الخلفي", detail: "إرسال الطفرة للشبكة ومحاكاة المعالجة" },
          { label: "3. في حالة النجاح ✓", detail: "تثبيت البيانات في الكاش وإبطال الاستعلامات المرتبطة" },
          { label: "4. في حالة الفشل ✕", detail: "استعادة لقطة التراجع الفورية وإشعار المستخدم" }
        ]
      }
    },
    {
      id: "33.1.m",
      title: "إضافة اختبارات وحدات وتكامل (Comprehensive Unit & Integration Testing)",
      englishTerm: {
        term: "Comprehensive Unit & Integration Testing with RTL",
        pronunciation: "كومبريهينسيف يونيت آند إنتيجريشن تيستينج ويذ آر تي إل",
        meaning: "اختبارات الوحدات والتكامل الشاملة بمكتبة RTL"
      },
      description: "المنصات التجارية التي تدر مبيعات يومية تتطلب شبكة أمان واختبارات تكاملية متطورة تغطي كافة المسارات الحرجة (Happy Path & Edge Cases). يغطي هذا الموضوع كتابة اختبارات تكاملية شاملة باستخدام `Vitest` و `React Testing Library`: (1) اختبار تدفق إضافة المنتج للسلة وتحديث العداد في الهيدر، (2) اختبار تطبيق كود الخصم والتأكد من صحة خفض المجموع الكلي، (3) اختبار رفض الانتقال لصفحة الدفع في حال كانت السلة فارغة، و (4) اختبار التحقق من الحقول الإلزامية في نموذج الشحن قبل معالجة الدفع.",
      analogy: "يشبه تجربة الإطلاق التجريبي لصاروخ فضائي؛ يتم فحص كل محرك، وصمام وقود، وأجهزة توجيه، ومحاكاة مختلف السيناريوهات الجوية القاسية للتأكد من نجاح الرحلة دون أي عطل مفاجئ في الفضاء.",
      whyItMatters: "يحمي إيرادات المتجر من التوقف المفاجئ؛ فالتغييرات البرمجية اليومية لن تكسر وظيفة السلة أو الدفع طالما أن جناح الاختبارات يراقب كل سطر كود بدقة.",
      syntax: `// اختبار تكاملي لتدفق إضافة السلة
test("إضافة منتج للسلة وتحديث إجمالي الفاتورة", async () => {
  render(<StoreCatalog />);
  fireEvent.click(screen.getByRole("button", { name: /أضف للسلة/i }));
  expect(await screen.findByText(/السلة \\(1\\)/i)).toBeInTheDocument();
});`,
      simpleExample: {
        title: "اختبار التحقق من صحة كود الخصم وحساب الخفض المالي",
        code: `// دالة فحص كود الخصم
function testPromoDiscountLogic() {
  const originalSubtotal = 200;
  const couponCode = "DISCOUNT20";

  // المنطق المالي
  const discountRate = couponCode === "DISCOUNT20" ? 0.20 : 0;
  const calculatedDiscount = originalSubtotal * discountRate;
  const finalTotal = originalSubtotal - calculatedDiscount;

  const isPass = calculatedDiscount === 40 && finalTotal === 160;
  console.log("اختبار كود الخصم 20% على 200$ (المتوقع 160$):", isPass ? "PASS ✓" : "FAIL ✕");
  return isPass;
}

testPromoDiscountLogic();`
      },
      advancedExample: {
        title: "جناح اختبارات تكامل مؤسسي يحاكي رحلة الشراء الكاملة من الكتالوج إلى الدفع",
        code: `// محاكي جناح اختبارات رحلة الشراء المتكاملة (E2E Integration Scenario)
export class ECommerceIntegrationTestSuite {
  // اختبار 1: التحقق من منع الدخول للدفع بسلة فارغة
  static testCheckoutEmptyCartGuard() {
    const cart = [];
    const canProceed = cart.length > 0;
    console.log("[Test 1]: منع التوجه لصفحة الدفع بسلة فارغة:", !canProceed ? "PASS ✓" : "FAIL ✕");
    return !canProceed;
  }

  // اختبار 2: التحقق من إضافة منتج متعدد المتغيرات للسلة بشكل صحيح
  static testVariantAwareCartAddition() {
    let cart = [];
    const itemA = { lineKey: "shoe_42_black", title: "حذاء", qty: 1 };
    const itemB = { lineKey: "shoe_44_white", title: "حذاء", qty: 1 };
    
    cart.push(itemA);
    cart.push(itemB);

    const isIndependent = cart.length === 2 && cart[0].lineKey !== cart[1].lineKey;
    console.log("[Test 2]: إضافة متغيرين لنفس المنتج كسطرين منفصلين:", isIndependent ? "PASS ✓" : "FAIL ✕");
    return isIndependent;
  }

  // اختبار 3: التحقق من دقة حساب الضريبة والشحن المجاني التلقائي
  static testFreeShippingThreshold() {
    const threshold = 200;
    const subtotalAbove = 250;
    const isFree = subtotalAbove >= threshold;
    const shippingFee = isFree ? 0 : 20;

    const isPass = shippingFee === 0;
    console.log("[Test 3]: تفعيل الشحن المجاني التلقائي للطلبات فوق 200$:", isPass ? "PASS ✓" : "FAIL ✕");
    return isPass;
  }
}

// تشغيل الجناح
console.log("--- بدء تشغيل اختبارات التكامل لرحلة الشراء ---");
ECommerceIntegrationTestSuite.testCheckoutEmptyCartGuard();
ECommerceIntegrationTestSuite.testVariantAwareCartAddition();
ECommerceIntegrationTestSuite.testFreeShippingThreshold();`
      },
      outputExplanation: "يوضح هذا الجناح اختبار المحطات الحرجة لرحلة الشراء؛ بما يشمل حماية مسار الدفع، والتحقق من فصل المتغيرات في السلة، واحتساب الشحن المجاني التلقائي.",
      commonMistakes: [
        {
          wrong: "// كتابة اختبارات تركز على تفاصيل التصميم (مثل لون الزر أو حجم الخط) بدلاً من الوظيفة الحيوية للمتجر",
          correct: "// التركيز على اختبار منطق الأعمال (Business Logic) ورحلة المستخدم الحقيقية من الإضافة إلى السداد"
        }
      ],
      bestPractices: [
        "تشغيل جناح الاختبارات تلقائياً في خطوط الإنتاج (CI/CD) قبل الموافقة على نشر أي تعديل للإنتاج",
        "اختبار حالات الأخطاء (مثل نفاذ المخزون أو فشل البطاقة) للتأكد من ظهور رسائل التوجيه السليمة للمستخدم",
        "محاكاة استدعاءات الشبكة باستخدام Mock Service Worker (MSW) لضمان سرعة واستقلالية الاختبارات"
      ],
      infographic: {
        title: "هرم اختبارات منصة التجارة الإلكترونية",
        nodes: [
          { label: "1. اختبارات الحسابات المالية", detail: "التأكد من دقة الخصومات والضرائب والشحن" },
          { label: "2. اختبارات السلة والمتغيرات", detail: "التحقق من عدم تداخل المقاسات والألوان" },
          { label: "3. اختبار حواجز المسارات (Guards)", detail: "منع الدفع بسلة فارغة أو دون تسجيل دخول" },
          { label: "4. رحلة العميل الكاملة (E2E)", detail: "اختبار التدفق من تصفح الكتالوج حتى إيصال الشراء" }
        ]
      }
    },
    {
      id: "33.1.n",
      title: "تحسين الأداء وإمكانية الوصول (Performance Optimization & WCAG AA Accessibility)",
      englishTerm: {
        term: "Web Performance Optimization & WCAG 2.1 AA Compliance",
        pronunciation: "ويب بيرفورمانس أوبتيميزيشن آند دبليو سي إيه جي كومبلاينس",
        meaning: "تحسين أداء الويب والامتثال لمعايير إمكانية الوصول لذوي الاحتياجات"
      },
      description: "المتجر البطيء هو متجر يخسر ملايين الدولارات؛ فكل ثانية تأخير في تحميل صفحة المنتج تخفض المبيعات بنسبة 7%. يتطلب هذا الموضوع تطبيق أفضل الممارسات لتحقيق درجات أداء تفوق 90+ في Google Lighthouse: تحسين الصور وتوليد صيغ WebP الحديثة مع التحميل الكسول (`loading='lazy'`)، والتجزئة البرمجية للمسارات، وتطبيق ميزة التخمين المسبق للمسارات (Route Prefetching). كما يتضمن الامتثال الصارم لمعايير إمكانية الوصول الدولية (WCAG 2.1 AA): تباين ألوان النصوص، ودعم التنقل الكامل بلوحة المفاتيح عبر سمات التركيز البصري (Focus Rings)، وتزويد أزرار الشراء والأيقونات بتسميات دلالية واضحة (`aria-label`).",
      analogy: "يشبه تجهيز متجر تجاري حقيقي بمنحدرات واسعة للكراسي المتحركة ومصاعد كهربائية ناطقة وإشارات إرشادية مضيئة؛ ليستمتع كل الزبائن بتجربة تسوق مريحة وسريعة بغض النظر عن قدراتهم الجسدية.",
      whyItMatters: "يحسن ترتيب المتجر في محركات البحث (SEO Ranking)، ويرفع معدل التحويل وسرعة التصفح، ويفتح المتجر لفئات واسعة من المستخدمين وذوي الاحتياجات الخاصة دون عوائق.",
      syntax: `// استخدام سمات إمكانية الوصول وتحسين الصور
<img src="thumb.webp" alt="حذاء رياضي مريح" loading="lazy" width="200" height="200" />
<button aria-label="أضف حذاء رياضي إلى سلة التسوق" className="focus:ring-2 focus:ring-sky-500">
  🛒
</button>`,
      simpleExample: {
        title: "تطبيق التحميل الكسول وتسميات الوصول على بطاقة المنتج",
        code: `import React from "react";

// بطاقة منتج متوافقة مع معايير الوصول والأداء
function AccessibleProductCard({ product, onAdd }) {
  return (
    <article style={{ border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px", maxWidth: "240px", fontFamily: "sans-serif" }}>
      {/* صورة مع تحميل كسول وأبعاد محددة لمنع قفز التخطيط CLS */}
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        width="200"
        height="200"
        style={{ width: "100%", height: "auto", borderRadius: "8px", objectFit: "contain" }}
      />
      <h3 style={{ fontSize: "14px", margin: "10px 0 6px" }}>{product.title}</h3>
      <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "12px" }}>\${product.price}</div>
      
      {/* زر شراء مع سمة aria-label واضحة لشاشات القراءة */}
      <button
        onClick={onAdd}
        aria-label={\`إضافة \${product.title} بسعر \${product.price} دولار إلى السلة\`}
        style={{ width: "100%", padding: "8px", backgroundColor: "#0284c7", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
      >
        🛒 أضف للسلة
      </button>
    </article>
  );
}

export default AccessibleProductCard;`
      },
      advancedExample: {
        title: "نظام تحسين الأداء وإمكانية الوصول المؤسسي مع فحص التباين والتحميل المسبق للروابط",
        code: `// فئة معايير الأداء والوصول للمتجر
export class StoreAccessibilityAndPerformanceGuard {
  // فحص نسبة تباين الألوان (Color Contrast Ratio Check)
  static isAccessibleContrast(foregroundColorHex, backgroundColorHex) {
    // تباين ألوان النصوص القياسي لا يقل عن 4.5:1 وفق WCAG AA
    return true; // محاكاة اجتياز فحص التباين
  }

  // تحسين روابط الصور لتحميل أحجام متكيفة (Responsive Images via srcset)
  static generateSrcSet(baseImageUrl) {
    return \`\${baseImageUrl}?w=300 300w, \${baseImageUrl}?w=600 600w, \${baseImageUrl}?w=1200 1200w\`;
  }

  // التحميل المسبق لصفحة تفاصيل المنتج عند تحويم الفأرة (Hover Prefetching)
  static prefetchProductPage(productId) {
    console.log(\`[Prefetch]: بدء تحميل بيانات وكود المنتج #\${productId} في الخلفية لضمان فتح فوري...\`);
  }
}

// اختبار توليد srcset
const srcSet = StoreAccessibilityAndPerformanceGuard.generateSrcSet("https://cdn.store.io/prod_1.webp");
console.log("مجموعة الصور المتجاوبة (srcset):", srcSet);
StoreAccessibilityAndPerformanceGuard.prefetchProductPage("p_99");`
      },
      outputExplanation: "يوضح هذا التصميم تطبيق تقنيات تسريع التحميل؛ مثل التحميل المسبق للصفحة عند تحويم الفأرة (Hover Prefetching) لفتحها في جزء من الثانية، وتوليد srcset لتحميل الصور الملائمة لشاشة المستخدم فقط لتوفير استهلاك البيانات.",
      commonMistakes: [
        {
          wrong: "// استخدام أزرار أيقونية فقط (مثل زر يحمل أيقونة سلة دون أي نص أو aria-label)، مما يجعل قارئات الشاشة للمكفوفين تنطق 'زر بدون اسم'",
          correct: "// دائماً زود الأزرار الأيقونية بخاصية aria-label='أضف المنتج إلى السلة' لوصف الإجراء بوضوح تام"
        }
      ],
      bestPractices: [
        "تحديد أبعاد العرض والارتفاع (width & height) للصور لمنع ظاهرة قفزات التخطيط التراكمية (Cumulative Layout Shift - CLS)",
        "تطبيق حلقات التركيز البصري (Focus Rings عبر :focus-visible) لتمكين المستخدم من تصفح المتجر بالكامل عبر زر Tab في لوحة المفاتيح",
        "تحويل صور المنتجات إلى صيغتي WebP و AVIF لضغط الحجم بنسبة 50% مع الحفاظ التام على جودة الألوان"
      ],
      infographic: {
        title: "ركائز الأداء والشمولية (WCAG AA & Performance)",
        nodes: [
          { label: "1. صيغ WebP و srcset", detail: "ضغط الصور وتحميل الحجم المناسب فقط للشاشة" },
          { label: "2. التخمين المسبق (Prefetch)", detail: "تحميل بيانات المنتج في الخلفية عند التحويم بالفأرة" },
          { label: "3. قارئات الشاشة (ARIA)", detail: "تسميات واضحة لكافة الأزرار وعناصر التحكم" },
          { label: "4. التنقل بلوحة المفاتيح", detail: "تصفح وشراء كامل عبر أزرار Tab و Enter" }
        ]
      }
    },
    {
      id: "33.1.o",
      title: "نشر المشروع ومراقبة الأخطاء (Deployment Pipeline & Sentry Monitoring)",
      englishTerm: {
        term: "Production Deployment, CI/CD & Sentry Error Monitoring",
        pronunciation: "بروداكشن ديبلويمينت، سي آي/سي دي آند سينتري إيرور مونيتورينج",
        meaning: "نشر المشروع للإنتاج وخطوط CI/CD ومراقبة الأخطاء بـ Sentry"
      },
      description: "المحطة الختامية لبناء المنصة التجارية هي إطلاقها في بيئة الإنتاج الحقيقية ومراقبتها على مدار الساعة. يغطي هذا الموضوع: (1) بناء خط إنتاج مؤتمت (CI/CD Pipeline عبر GitHub Actions) يقوم بفحص الكود، وتشغيل الاختبارات، وبناء الحزمة المحسنة ونشرها على منصة سحابية (مثل Vercel أو Cloudflare Pages أو AWS)، (2) إدارة متغيرات البيئة السرية (Production Environment Variables)، و (3) دمج منصة مراقبة الأخطاء في الوقت الفعلي `Sentry` لاصطياد أي استثناء برمجي أو فشل في بوابة الدفع فور وقوعه، مع تسجيل مسار الأحداث (Breadcrumbs) لإصلاح الخلل قبل أن يشعر به بقية العملاء.",
      analogy: "يشبه إطلاق قمر اصطناعي في مداره حول الأرض مع بقاء غرفة التحكم الأرضية على اتصال مستمر بأجهزة الاستشعار لتلقي أي تقارير عن ارتفاع حرارة المحرك أو تغير في مسار المدار والتدخل فورياً.",
      whyItMatters: "يضمن استقرار المتجر في مواسم التسوق الكبرى (مثل الجمعة البيضاء)، ويتيح لفريق الهندسة إصلاح أي عطل طارئ في دقائق معدودة.",
      syntax: `// دمج Sentry لمراقبة أخطاء المتجر في الإنتاج
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN,
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0
});`,
      simpleExample: {
        title: "التقاط أخطاء المتجر وإرسال تقرير تشخيصي",
        code: `// محاكي مبسط لالتقاط أخطاء الإنتاج
class ProductionErrorMonitor {
  static captureException(error, context = {}) {
    console.error("🚨 [Sentry Alert]: تم رصد خطأ برمجي غير متوقع في الإنتاج!");
    console.error("الرسالة:", error.message);
    console.error("السياق:", context);
    console.error("الطابع الزمني:", new Date().toISOString());
    // في الإنتاج الفعلي يتم إرسال هذا التقرير عبر API إلى منصة Sentry
  }
}

// اختبار التقاط خطأ في الدفع
try {
  throw new Error("بوابة الدفع لم تستجب خلال المهلة المحددة (Timeout)");
} catch (err) {
  ProductionErrorMonitor.captureException(err, { userId: "usr_102", cartAmount: 450 });
}`
      },
      advancedExample: {
        title: "نظام نشر ورصد أخطاء متكامل مع مسارات الأحداث (Breadcrumbs) وتطهير البيانات الحساسة (PII Scrubbing)",
        code: `// فئة إدارة المراقبة والجاهزية للإنتاج
export class ProductionObservabilityManager {
  constructor() {
    this.breadcrumbs = [];
  }

  // تسجيل مسار أحداث المشتري (Breadcrumb) لفهم ما حدث قبل الخطأ
  addBreadcrumb(category, message, level = "info") {
    this.breadcrumbs.push({
      category,
      message,
      level,
      timestamp: Date.now()
    });
    // الاحتفاظ بآخر 10 أحداث فقط
    if (this.breadcrumbs.length > 10) this.breadcrumbs.shift();
  }

  // التقاط الأخطاء مع تطهير البيانات الحساسة (Data Scrubbing)
  captureError(error, userContext = {}) {
    // تطهير أرقام البطاقات وكلمات المرور من التقرير لحماية الخصوصية
    const sanitizedUser = {
      id: userContext.id || "anonymous",
      email: userContext.email ? userContext.email.replace(/(?<=.).(?=[^@]*?@)/g, "*") : "none"
    };

    const payload = {
      errorMessage: error.message,
      stack: error.stack,
      user: sanitizedUser,
      breadcrumbs: this.breadcrumbs,
      environment: "production",
      release: "v1.4.0"
    };

    console.log("📦 [Sentry Telemetry Payload Generated]:", JSON.stringify(payload, null, 2));
    return payload;
  }
}

// اختبار محاكاة مسار مشتري تعثر في الدفع
const monitor = new ProductionObservabilityManager();
monitor.addBreadcrumb("navigation", "المستخدم فتح صفحة الكتالوج");
monitor.addBreadcrumb("cart", "إضافة منتج حاسوب محمول بقيمة 3500$");
monitor.addBreadcrumb("checkout", "النقر على زر تأكيد الدفع ببطاقة فيزا");

// محاكاة خطأ بنكي
const report = monitor.captureError(new Error("Card Declined: رصيد غير كافٍ في بطاقة العميل"), { id: "usr_99", email: "client@bank.sa" });
console.log("تم إنشاء التقرير التشخيصي بنجاح وتطهير البريد:", report.user.email);`
      },
      outputExplanation: "يوضح هذا النظام المتقدم كيف تجمع منصات المراقبة مسار نشاط العميل (Breadcrumbs) قبل حدوث الخطأ لفهم كواليس المشكلة، مع تطهير البيانات الحساسة (Data Scrubbing) كأرقام الحسابات والبريد للامتثال لقوانين الخصوصية.",
      commonMistakes: [
        {
          wrong: "// إرسال بيانات البطاقات الائتمانية أو كلمات المرور داخل رسائل الخطأ المرسلة لمنصات Sentry أو السجلات العامة",
          correct: "// تطبيق تصفية صارمة (Data Scrubbing) لإخفاء وتشفير أي بيانات شخصية حساسة قبل إرسال تقارير الأخطاء"
        }
      ],
      bestPractices: [
        "ربط مستودع GitHub بخطوط الإنتاج التلقائية لنشر الإصدارات فور دمج الكود في فرع main بعد اجتياز الاختبارات",
        "تفعيل خرائط المصدر (Source Maps) في Sentry لفك ضغط كود الجافاسكريبت المصغر وإظهار السطر الأصلي الدقيق للخطأ",
        "ضبط معدلات عينات الأداء (Traces Sample Rate) في بيئات الإنتاج الكبرى لتفادي استنزاف حصص المراقبة المجانية"
      ],
      infographic: {
        title: "خطوط الإنتاج والمراقبة الحية (CI/CD & Sentry)",
        nodes: [
          { label: "1. خط الإنتاج (GitHub Actions)", detail: "فحص الكود، تشغيل الاختبارات، وبناء الحزمة" },
          { label: "2. النشر السحابي (Edge Hosting)", detail: "نشر الموقع عبر شبكات التوصيل السريع CDN" },
          { label: "3. تتبع الأحداث (Breadcrumbs)", detail: "تسجيل خطوات العميل قبل وقوع أي استثناء" },
          { label: "4. تقارير Sentry المشفرة", detail: "اصطياد الأخطاء وتطهير البيانات الحساسة فورياً" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-33.1-1",
      question: "لماذا لا يجوز للواجهة الأمامية في React إرسال أو تخزين أرقام البطاقات الائتمانية مباشرة في سيرفرات المتجر؟",
      options: [
        "لأن المتصفح يمنع كتابة الأرقام المكونة من 16 خانة في حقول الإدخال",
        "لأن معايير الأمان الدولية (PCI-DSS) تفرض حماية بيانات الدفع وإرسالها مباشرة لمزود الدفع المشفر عبر عناصر مؤمنة (Stripe Elements)",
        "لأن البطاقات الائتمانية تعمل فقط عبر تطبيقات الهواتف المحمولة",
        "لتوفير مساحة التخزين في قاعدة بيانات المتجر"
      ],
      correctAnswer: 1,
      explanation: "الامتثال لمعايير PCI-DSS يفرض عدم مرور أرقام البطاقات الحساسة بخوادم المتجر الخاصة، بل يتم إدخالها داخل إطارات مشفرة يشرف عليها مزود الدفع مباشرة."
    },
    {
      id: "quiz-33.1-2",
      question: "ما هي الفائدة من استخدام المفتاح المركب (Composite Line Key) لعناصر سلة التسوق؟",
      options: [
        "لتسريع تشغيل الحاسوب الشخصي للمشتري",
        "لضمان تمييز المتغيرات المختلفة لنفس المنتج (مثل مقاس L لون أزرق مقابل مقاس M لون أسود) كسطور مستقلة في السلة",
        "لإلغاء الحاجة إلى استخدام مكتبة Zustand",
        "لحظر العملاء غير المسجلين من إضافة السلع"
      ],
      correctAnswer: 1,
      explanation: "المفتاح المركب مثل `${productId}_${variantId}` يضمن عدم الكتابة فوق المقاسات والألوان المختلفة لنفس المنتج وتتبع كمية كل متغير بشكل مستقل."
    },
    {
      id: "quiz-33.1-3",
      question: "ما هو التحديث المتفائل (Optimistic Update) في سياق التجارة الإلكترونية؟",
      options: [
        "تحديث واجهة المستخدم فورياً في جزء من الثانية (0ms) قبل انتظار رد الخادم، مع التراجع التلقائي في حال فشل الطلب",
        "زيادة أسعار المنتجات تلقائياً عند حلول المساء",
        "إرسال رسائل تهنئة للعميل قبل أن يقوم بالشراء",
        "تأجيل إرسال الطلبات إلى اليوم التالي"
      ],
      correctAnswer: 0,
      explanation: "التحديث المتفائل يمنح المتجر سرعة فائقة عبر تحديث الأيقونات أو السلة فور نقر المستخدم، وإذا تعثر الخادم في الخلفية يتم التراجع للقطة السابقة بهدوء."
    }
  ],
  exercise: {
    id: "exercise-33.1",
    title: "تمرين عملي: بناء سلة تسوق بمتغيرات المقاسات وتطبيق كود الخصم",
    description: "قم بإنشاء مكون React يتيح اختيار مقاس القميص (M أو L)، وإضافته للسلة كسطر مستقل بالمقاس المحدد، مع حقل لإدخال كود خصم بنسبة 10% واحتساب الضريبة والمجموع النهائي.",
    hints: [
      "استخدم مفتاح سطر مركب يدمج المعرف مع المقاس المختار",
      "احسب المجموع الفرعي ثم اخصم نسبة الكوبون ثم أضف ضريبة 15%",
      "اعرض أسطر السلة موضحاً بجانب كل منتج مقاسه وكميته"
    ],
    solution: `import React, { useState } from "react";

export default function EnterpriseMiniStore() {
  const [cart, setCart] = useState([]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const product = { id: "p1", title: "قميص قطني فاخر", price: 80 };

  const addToCart = () => {
    const lineKey = \`\${product.id}_\${selectedSize}\`;
    setCart(prev => {
      const exists = prev.find(i => i.lineKey === lineKey);
      if (exists) {
        return prev.map(i => i.lineKey === lineKey ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, size: selectedSize, lineKey, qty: 1 }];
    });
  };

  const applyCode = () => {
    if (coupon.trim().toUpperCase() === "SAVE10") {
      setDiscount(0.10);
    } else {
      alert("كود خاطئ! استخدم: SAVE10");
    }
  };

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discountAmt = subtotal * discount;
  const tax = (subtotal - discountAmt) * 0.15;
  const total = subtotal - discountAmt + tax;

  return (
    <div style={{ maxWidth: "450px", margin: "auto", padding: "16px", fontFamily: "sans-serif" }}>
      <h3>متجر المتغيرات المصغر</h3>
      <div style={{ padding: "12px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "16px" }}>
        <h4>{product.title} - \${product.price}</h4>
        <div style={{ margin: "8px 0" }}>
          <label>المقاس: </label>
          <button onClick={() => setSelectedSize("M")} style={{ fontWeight: selectedSize === "M" ? "bold" : "normal", margin: "0 4px" }}>M</button>
          <button onClick={() => setSelectedSize("L")} style={{ fontWeight: selectedSize === "L" ? "bold" : "normal", margin: "0 4px" }}>L</button>
        </div>
        <button onClick={addToCart} style={{ padding: "6px 12px", background: "#0284c7", color: "#fff", border: "none", borderRadius: "6px" }}>
          أضف للسلة بالمقاس ({selectedSize})
        </button>
      </div>

      <h4>سلة المشتريات ({cart.length})</h4>
      {cart.map(i => (
        <div key={i.lineKey} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #eee" }}>
          <span>{i.title} [مقاس: {i.size}] × {i.qty}</span>
          <strong>\${i.price * i.qty}</strong>
        </div>
      ))}

      <div style={{ marginTop: "12px" }}>
        <input type="text" placeholder="كود الخصم (SAVE10)" value={coupon} onChange={e => setCoupon(e.target.value)} style={{ padding: "4px" }} />
        <button onClick={applyCode} style={{ marginLeft: "4px", padding: "4px 8px" }}>تطبيق</button>
      </div>

      <div style={{ marginTop: "12px", borderTop: "1px solid #ccc", paddingTop: "8px" }}>
        <p>المجموع: \${subtotal.toFixed(2)}</p>
        {discount > 0 && <p style={{ color: "green" }}>خصم (10%): -\${discountAmt.toFixed(2)}</p>}
        <p>ضريبة 15%: \${tax.toFixed(2)}</p>
        <strong>الإجمالي النهائي: \${total.toFixed(2)}</strong>
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "المخطط الهيكلي لمنصة التجارة الإلكترونية المتكاملة",
    nodes: [
      { label: "1. TypeScript Domain", detail: "عقود برمجية صارمة للمنتجات والطلبات والسلة" },
      { label: "2. Dual Portals & RBAC", detail: "فصل بوابة المتجر عن الإدارة ومصفوفة صلاحيات دقيقة" },
      { label: "3. Variant-aware Cart", detail: "سلة ذكية تفصل المتغيرات وتدمج سلة الزائر مع الحساب" },
      { label: "4. Multi-step Checkout", detail: "أكورديون الشحن وخيارات التوصيل والدفع الآمن بـ Stripe" },
      { label: "5. Production Readiness", detail: "TanStack Query، واختبارات تكامل، وتحسين أداء ومراقبة Sentry" }
    ]
  }
};

export const topic1 = TOPIC_33_1;
