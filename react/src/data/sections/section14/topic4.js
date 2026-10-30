// topic4.js - القسم 14: TypeScript مع React
// الموضوع 4: TypeScript في المشاريع الكبيرة

export const topic4 = {
  id: "14.4",
  title: "TypeScript في المشاريع الكبيرة",
  englishTitle: "TypeScript in Large-Scale Projects",
  description: "الأنماط المعمارية والممارسات المتقدمة لإدارة المشاريع الضخمة في React وTypeScript، بدءاً من أمان واجهات API، والمخططات الصارمة مع Zod، وهيكلة الأنواع، والتكامل مع Redux وTanStack Query، وحتى التحقق الحازم من البيانات الخارجية.",
  subtopics: [
    {
      id: "14.4.a",
      title: "تعريف API Response Types",
      englishTerm: {
        term: "Typing API Responses",
        pronunciation: "تايبينغ إيه بي آي ريسبونسز",
        meaning: "تحديد هياكل واجهات برمجية صارمة وموحدة لكافة استجابات الخادم تشمل البيانات وأخطاء التغليف والترقيم"
      },
      description: "في المشاريع الكبيرة، ترسل الخوادم عادة استجابات مغلفة بنمط موحد (API Envelope) يحتوي على كود الحالة، ورسالة تأكيدية، وبيانات الصفحة (Pagination Metadata)، والحمولة الفعلية (Data Payload). نقوم في TypeScript بإنشاء واجهات عامة Generic للغلاف الخارجي مثل `ApiResponse<T>`، مما يسمح بإعادة استخدام نفس بنية الغلاف مع أي كائن بيانات داخلي وضمان التناسق الكامل في معالجة الشبكة عبر المشروع.",
      analogy: "يشبه الأمر طرود الشحن الدولية الصادرة من شركة شحن موحدة؛ كل طرد يأتي في نفس الصندوق الكرتوني الذي يحمل رقم التتبع، وتاريخ الوصول، وحالة الجمارك على الغلاف، بينما تختلف البضاعة الموضوعة بالداخل من كتب إلى إلكترونيات دون تغيير الغلاف الموحد!",
      whyItMatters: "يمنع هذا النمط تكرار تعريف خصائص مثل `success` و `message` و `page` في عشرات الملفات، كما يضمن أن دوال طلب الشبكة تُرجع أنواعاً واضحة يمكن التحقق منها برمجياً فور استلامها.",
      syntax: "interface ApiResponse<T> {\n  success: boolean;\n  data: T;\n  message?: string;\n  meta?: { page: number; totalPages: number };\n}",
      simpleExample: `// تعريف واجهة عامة لغلاف استجابة الخادم
interface ApiResponse<T> {
  // مؤشر نجاح العملية
  success: boolean;
  // البيانات الفعلية بنوع عام T
  data: T;
  // رسالة اختيارية من الخادم
  message?: string;
}

// تعريف واجهة مستخدم محددة
interface User {
  // المعرف الفريد
  id: number;
  // الاسم الكامل
  name: string;
}

// دالة محاكاة لجلب ملف المستخدم
async function fetchUserProfile(userId: number): Promise<ApiResponse<User>> {
  // محاكاة تأخير الشبكة
  await new Promise((resolve) => setTimeout(resolve, 300));

  // إرجاع كائن استجابة يطابق الغلاف العام بدقة
  return {
    // نجاح الطلب
    success: true,
    // رسالة الخادم
    message: "تم استرجاع المستخدم بنجاح",
    // كائن المستخدم المطابق للنوع User
    data: {
      id: userId,
      name: "ليلى أحمد"
    }
  };
}

// دالة اختبارية لاستخدام الاستجابة مع اكتمال الأنواع
async function runDemo() {
  // استدعاء الدالة واستلام الاستجابة المؤمّنة
  const response = await fetchUserProfile(42);
  // فحص النجاح وطباعة اسم المستخدم بأمان
  if (response.success) {
    console.log("المستخدم المستلم:", response.data.name);
  }
}`,
      advancedExample: `// تعريف واجهة لمعلومات الترقيم في الصفحات
interface PaginationMeta {
  // رقم الصفحة الحالية
  currentPage: number;
  // إجمالي عدد الصفحات
  totalPages: number;
  // إجمالي عدد العناصر
  totalItems: number;
  // عدد العناصر في كل صفحة
  pageSize: number;
  // هل توجد صفحة تالية
  hasNextPage: boolean;
}

// تعريف الغلاف الشامل لاستجابات القوائم المرقّمة
interface PaginatedApiResponse<T> {
  // حالة نجاح الطلب
  status: 'success' | 'error';
  // مصفوفة العناصر المعادة من النوع العام T
  items: T[];
  // معلومات الترقيم
  pagination: PaginationMeta;
  // رمز الخطأ في حال الفشل
  errorCode?: string;
  // رسالة الخطأ أو التأكيد
  message?: string;
}

// تعريف واجهة كائن المنتج في متجر إلكتروني
interface ProductRecord {
  // معرف المنتج
  id: string;
  // اسم المنتج
  title: string;
  // السعر الحالي
  price: number;
  // الكمية المتوفرة في المخزن
  stock: number;
  // تصنيف المنتج
  category: string;
}

// دالة احترافية عامة لجلب البيانات المرقّمة بأمان نوعي كامل
async function fetchPaginatedProducts(
  page: number = 1
): Promise<PaginatedApiResponse<ProductRecord>> {
  // محاكاة استدعاء واجهة برمجة التطبيقات
  const mockProducts: ProductRecord[] = [
    { id: 'p1', title: 'شاشة حاسوب 4K', price: 450, stock: 12, category: 'إلكترونيات' },
    { id: 'p2', title: 'لوحة مفاتيح ميكانيكية', price: 110, stock: 35, category: 'ملحقات' },
    { id: 'p3', title: 'فأرة لاسلكية مريحة', price: 75, stock: 50, category: 'ملحقات' }
  ];

  // إرجاع كائن الاستجابة المقيد بالنوع تماماً
  return {
    status: 'success',
    items: mockProducts,
    pagination: {
      currentPage: page,
      totalPages: 5,
      totalItems: 15,
      pageSize: 3,
      hasNextPage: page < 5
    },
    message: 'تم جلب المنتجات المرقّمة بنجاح'
  };
}

// مكون React لعرض المنتجات المرقّمة مع التحقق من النوع
import { useState, useEffect } from 'react';

export function PaginatedProductList() {
  // حالة لتخزين الاستجابة كاملة
  const [response, setResponse] = useState<PaginatedApiResponse<ProductRecord> | null>(null);
  // حالة رقم الصفحة الحالية
  const [page, setPage] = useState<number>(1);

  // جلب البيانات عند تغير الصفحة
  useEffect(() => {
    // تنفيذ استدعاء الـ API
    fetchPaginatedProducts(page).then((data) => setResponse(data));
  }, [page]);

  // إرجاع الواجهة
  return (
    // الحاوية الكلية
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      {/* عنوان العرض */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-emerald-400">قائمة المنتجات (API Response Types)</h3>
        {/* معلومات الترقيم */}
        {response && (
          <span className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300">
            صفحة {response.pagination.currentPage} من {response.pagination.totalPages}
          </span>
        )}
      </div>
      {/* قائمة المنتجات */}
      <div className="space-y-3 mb-4">
        {response?.items.map((prod) => (
          <div key={prod.id} className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center">
            <div>
              <p className="font-semibold text-slate-200">{prod.title}</p>
              <span className="text-xs text-slate-400">التصنيف: {prod.category} | المخزون: {prod.stock}</span>
            </div>
            <span className="font-bold text-emerald-400">{prod.price} $</span>
          </div>
        ))}
      </div>
      {/* أزرار التنقل بين الصفحات */}
      <div className="flex gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 rounded-lg text-sm"
        >
          السابق
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={!response?.pagination.hasNextPage}
          className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 rounded-lg text-sm"
        >
          التالي
        </button>
      </div>
    </div>
  );
}`,
      outputExplanation: "من خلال استخدام الواجهات العامة مثل `PaginatedApiResponse<ProductRecord>`، يضمن المشروع أن كل نقطة نهاية (Endpoint) تعيد نفس التنسيق الموحد، مما يوفر تجربة تطوير متناغمة ويمنع الأخطاء في التعامل مع خصائص الترقيم والبيانات.",
      commonMistakes: [
        {
          mistake: "تعريف نوع البيانات المعادة كـ `any` في دوال الجلب: `async function getData(): Promise<any>`",
          fix: "استخدم دائماً واجهة عامة صريحة تحدد الغلاف والبيانات مثل `Promise<ApiResponse<T>>`."
        },
        {
          mistake: "إهمال احتمال وجود كود خطأ أو رسالة فشل في استجابة الخادم",
          fix: "أضف حقول الخطأ والرسائل كخصائص اختيارية أو استخدم Union يمثل حالتي النجاح والفشل."
        }
      ],
      bestPractices: [
        "وحّد هيكل الغلاف (Envelope) لجميع طلبات الـ API في مجلد مركزي مثل `src/types/api.ts`.",
        "استخدم الـ Generics في دوال الـ HTTP Client (مثل Axios أو Fetch wrapper) بحيث تقبل تلقائياً نوع البيانات المتوقعة."
      ],
      infographic: {
        title: "هندسة غلاف الاستجابة ApiResponse<T>",
        points: [
          "الغلاف الخارجي الثابت: `success`, `message`, `pagination` مشترك لكل استجابات الخادم.",
          "الحمولة الداخلية المتغيرة: `data: T` تقبل أي نوع نموذج بيانات بمرونة تامة.",
          "النتيجة: دوال شبكة قياسية واكتمال تلقائي دقيق عند التعامل مع الاستجابات."
        ]
      }
    },
    {
      id: "14.4.b",
      title: "فصل Types عن المكونات عند الحاجة",
      englishTerm: {
        term: "Separating Types from Components",
        pronunciation: "سيباريتينغ تايبس فروم كومبوننتس",
        meaning: "تنظيم الأنواع والواجهات في ملفات مستقلة أو مجلدات مخصصة واستخدام import type لحذف الأنواع من حزمة الإنتاج"
      },
      description: "في البدايات، قد يكون وضع الـ Types بجانب المكون في نفس الملف كافياً. لكن مع نمو المشروع ومشاركة الأنواع بين شاشات متعددة، وخطافات مخصصة، ومخازن حالة (Redux/Zustand)، يجب فصل الأنواع المشتركة إلى ملفات مستقلة مثل `types/user.ts`. بالإضافة إلى ذلك، يجب استخدام الصياغة المتقدمة `import type` التي تضمن إزالة الاستيراد تماماً من شفرة JavaScript الناتجة (Zero-cost bundle footprint) مما يسرع التجميع ويمنع مشاكل الاستيراد الدائري (Circular Dependencies).",
      analogy: "يشبه الأمر فصل كتالوج المواصفات والمخططات الهندسية عن صالة خط الإنتاج الفعلي للسيارات؛ المهندسون يراجعون الكتالوج في مكاتبهم للتخطيط، ولكن عند شحن السيارة للزبون في المعرض، لا يضعون أكوام المخططات الورقية داخل حقيبة السيارة حتى لا تثقل وزنها بدون داعٍ!",
      whyItMatters: "يقلل استخدام `import type` من حجم الحزمة النهائية عبر مساعدة الـ Bundlers (مثل Vite/Rollup) في حذف الشفرات الوهمية تماماً، كما يقضي على أخطاء الاستيراد الدائري التي تحدث عندما يستورد ملفان بعضهما البعض.",
      syntax: "// استيراد أنواع فقط دون تضمين أي كود في حزمة الإنتاج:\nimport type { UserProfile, UserRole } from '@/types/user';\n\n// تصدير الأنواع من ملفات مستقلة:\nexport type { Article, Category } from './blog.types';",
      simpleExample: `// ملف types/auth.types.ts (الأنواع المستقلة)
export interface AuthCredentials {
  // البريد الإلكتروني للمستخدم
  email: string;
  // كلمة المرور
  secretPin: string;
}

export interface AuthSession {
  // رمز الدخول المميز
  token: string;
  // وقت انتهاء الجلسة
  expiresAt: number;
}

// ملف components/LoginForm.tsx (المكون المستهلك)
// استخدام import type لضمان عدم زيادة حجم ملف JS النهائي
import type { AuthCredentials, AuthSession } from './auth.types';
import { useState } from 'react';

// مكون نموذج الدخول
export function SimpleLoginForm() {
  // حالة بيانات النموذج بنوع مؤمن
  const [formData, setFormData] = useState<AuthCredentials>({
    email: '',
    secretPin: ''
  });

  // إرجاع واجهة النموذج
  return (
    <form className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 text-white">
      <div>
        <label className="block text-xs text-slate-400 mb-1">البريد الإلكتروني:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-1.5 bg-slate-800 rounded-lg text-sm border border-slate-700"
        />
      </div>
      <div>
        <label className="block text-xs text-slate-400 mb-1">الرمز السري:</label>
        <input
          type="password"
          value={formData.secretPin}
          onChange={(e) => setFormData({ ...formData, secretPin: e.target.value })}
          className="w-full px-3 py-1.5 bg-slate-800 rounded-lg text-sm border border-slate-700"
        />
      </div>
      <button type="button" className="w-full py-2 bg-blue-600 rounded-lg font-semibold text-sm">
        تسجيل الدخول
      </button>
    </form>
  );
}`,
      advancedExample: `// هيكلية متقدمة للمشاريع الكبيرة: src/types/e-commerce/index.ts

// 1. تعريف واجهة كيان العميل
export interface CustomerEntity {
  id: string;
  fullName: string;
  email: string;
  membershipLevel: 'bronze' | 'silver' | 'gold' | 'platinum';
}

// 2. تعريف واجهة عنوان التوصيل
export interface ShippingAddress {
  recipientName: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

// 3. تعريف واجهة عنصر الطلب
export interface OrderLineItem {
  sku: string;
  name: string;
  unitPrice: number;
  quantity: number;
}

// 4. تعريف واجهة الطلب الشاملة
export interface CustomerOrder {
  orderId: string;
  customer: CustomerEntity;
  shippingAddress: ShippingAddress;
  items: OrderLineItem[];
  totalAmount: number;
  placedAt: Date;
}

// استخدام الأنواع في مكون العرض: src/components/OrderSummaryCard.tsx
import type { CustomerOrder } from './types';
import { useMemo } from 'react';

// واجهة خصائص المكون
interface OrderSummaryCardProps {
  order: CustomerOrder;
  onPrintInvoice?: (orderId: string) => void;
}

// مكون استعراض ملخص الطلب
export function OrderSummaryCard({ order, onPrintInvoice }: OrderSummaryCardProps) {
  // حساب إجمالي عدد القطع
  const totalItemCount = useMemo(() => {
    return order.items.reduce((acc, item) => acc + item.quantity, 0);
  }, [order.items]);

  // إرجاع واجهة البطاقة
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white space-y-4">
      {/* رأس البطاقة */}
      <div className="flex justify-between items-start border-b border-slate-800 pb-3">
        <div>
          <span className="text-xs text-slate-500 font-mono">رقم الطلب: {order.orderId}</span>
          <h3 className="text-lg font-bold text-emerald-400">العميل: {order.customer.fullName}</h3>
          <span className="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded font-semibold">
            عضوية {order.customer.membershipLevel}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 block">الإجمالي:</span>
          <span className="text-2xl font-bold text-white">{order.totalAmount} $</span>
        </div>
      </div>
      {/* عنوان الشحن */}
      <div className="text-sm bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
        <span className="text-xs text-slate-400 block mb-1">وجهة الشحن:</span>
        <p className="text-slate-300">{order.shippingAddress.street}، {order.shippingAddress.city} ({order.shippingAddress.country})</p>
      </div>
      {/* جدول العناصر */}
      <div className="space-y-2">
        <span className="text-xs text-slate-400 block">القطع المطلوبة ({totalItemCount} قطع):</span>
        {order.items.map((item) => (
          <div key={item.sku} className="flex justify-between text-sm py-1 border-b border-slate-900">
            <span className="text-slate-300">{item.name} × {item.quantity}</span>
            <span className="font-mono text-slate-400">{item.unitPrice * item.quantity} $</span>
          </div>
        ))}
      </div>
      {/* زر الطباعة الاختياري */}
      {onPrintInvoice && (
        <button
          onClick={() => onPrintInvoice(order.orderId)}
          className="w-full mt-2 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-colors"
        >
          🖨️ طباعة الفاتورة الرسمية
        </button>
      )}
    </div>
  );
}`,
      outputExplanation: "عن طريق عزل واجهات التجارة الإلكترونية في ملف `types.ts`، واستخدام `import type` في ملف المكون، يتمتع التطبيق بتنظيم فائق، ويضمن المترجم عدم وجود أي شفرة زائدة في حزمة JavaScript النهائية.",
      commonMistakes: [
        {
          mistake: "استيراد الأنواع مثل الكائنات العادية مما يسبب أحياناً Circular Dependency",
          fix: "استخدم الصيغة `import type { MyType } from './file'` ليتم تجاهل الاستيراد بالكامل في وقت التشغيل."
        },
        {
          mistake: "وضع كافة أنواع المشروع في ملف واحد ضخم `types.d.ts` بطول آلاف الأسطر",
          fix: "قسّم الأنواع إلى ملفات حسب المجال والوظيفة (مثل `user.types.ts`, `cart.types.ts`, `api.types.ts`)."
        }
      ],
      bestPractices: [
        "اجعل الخصائص المحلية الخاصة بمكون واحد فقط (مثل `ComponentProps`) داخل نفس ملف المكون.",
        "انقل الأنواع المشتركة التي تعبر عن نماذج البيانات أو استجابات الـ API إلى مجلد `src/types/` المشترك."
      ],
      infographic: {
        title: "استراتيجية تنظيم وفصل الأنواع",
        points: [
          "أنواع محلية (Local Props): تبقى في نفس ملف المكون لسهولة الصيانة السريعة.",
          "نماذج الأعمال المشتركة: توضع في ملفات مجالية منفصلة داخل مجلد `types/`.",
          "استخدام `import type`: يوفر صفر بايت في حزمة الإنتاج ويمنع التداخل الدائري."
        ]
      }
    },
    {
      id: "14.4.c",
      title: "استخدام Discriminated Unions",
      englishTerm: {
        term: "Discriminated Unions in UI States",
        pronunciation: "ديسكيمنيتيد يونيونز إن يو آي ستيتس",
        meaning: "نمط الاتحادات المميزة بصفة مشتركة لتمثيل حالات الواجهة المتنافية ومنع الحالات المستحيلة برمجياً"
      },
      description: "من أكبر أسباب أخطاء واجهات المستخدم هو تمثيل الحالات بخصائص متفرقة متزامنة مثل `{ isLoading: boolean, data: any, error: string | null }`. هذه البنية تسمح بحالات مستحيلة كأن تكون `isLoading: true` وبنفس الوقت `error: 'فشل'` و `data: {...}`! يحل نمط Discriminated Union هذه المعضلة عبر إنشاء نوع اتحاد يمتلك خاصية مميزة (Discriminant) مثل `status`، بحيث تحتوي كل حالة على البيانات المنطقية الخاصة بها حصراً.",
      analogy: "يشبه الأمر إشارات المرور عند مفترق الطرق؛ لا يمكن أن تكون الإشارة خضراء وحمراء في نفس اللحظة (حالة مستحيلة تؤدي لكارثة). إما حمراء وتستوجب التوقف، أو صفراء وتستوجب الحذر، أو خضراء وتسمح بالعبور، وكل وضع له تعليمات واضحة لا تقبل اللبس!",
      whyItMatters: "يجعل نمط Discriminated Union تمثيل 'الحالات المستحيلة غير قابل للتمثيل برمجياً' (Making Impossible States Impossible). وعند فحص الخاصية المميزة في جملة `switch`، يقوم TypeScript بتضييق النوع تلقائياً دون الحاجة لكتابة أي Type Casting.",
      syntax: "type AsyncState<T> =\n  | { status: 'idle' }\n  | { status: 'loading' }\n  | { status: 'success'; data: T }\n  | { status: 'error'; error: string };",
      simpleExample: `// تعريف حالة غير متزامنة بنمط Discriminated Union
type RequestState =
  // حالة الخمول الأولية
  | { status: 'idle' }
  // حالة جاري التحميل
  | { status: 'loading' }
  // حالة النجاح وتحمل البيانات المؤكدة
  | { status: 'success'; data: string[] }
  // حالة الفشل وتحمل رسالة الخطأ
  | { status: 'error'; error: string };

// مكون يعرض الواجهة اعتماداً على الحالة المميزة
export function SimpleStateRenderer({ state }: { state: RequestState }) {
  // فحص الحالة عبر الخاصية المميزة status
  switch (state.status) {
    // في حالة الخمول
    case 'idle':
      return <p className="text-slate-400">اضغط للبدء...</p>;
    // في حالة التحميل
    case 'loading':
      return <p className="text-blue-400 animate-pulse">جاري التحميل...</p>;
    // في حالة النجاح يتعرف المحرر على وجود state.data تلقائياً
    case 'success':
      return (
        <ul className="text-emerald-400">
          {state.data.map((item, idx) => (
            <li key={idx}>✅ {item}</li>
          ))}
        </ul>
      );
    // في حالة الخطأ يتعرف المحرر على وجود state.error تلقائياً
    case 'error':
      return <p className="text-rose-400">❌ حدث خطأ: {state.error}</p>;
  }
}`,
      advancedExample: `// استيراد useState من React
import { useState } from 'react';

// تعريف نوع المستخدم
interface UserAccount {
  id: string;
  name: string;
  email: string;
  plan: 'free' | 'pro' | 'enterprise';
}

// تعريف Discriminated Union يمثل دورة حياة جلب الحساب بأكملها
type AccountQueryState =
  | { type: 'IDLE' }
  | { type: 'LOADING'; startedAt: number }
  | { type: 'SUCCESS'; account: UserAccount; cached: boolean }
  | { type: 'FAILURE'; errorMessage: string; retryCount: number };

// دالة فحص استنفاذ كافة الحالات Exhaustiveness Checking مع النوع never
function assertUnreachable(x: never): never {
  throw new Error(\`حالة غير معالجة في النظام: \${JSON.stringify(x)}\`);
}

// مكون إدارة الحساب الاحترافي
export function AccountStateManager() {
  // حالة الاستعلام المقيدة بالاتحاد المميز
  const [queryState, setQueryState] = useState<AccountQueryState>({ type: 'IDLE' });

  // دالة محاكاة جلب الحساب
  const fetchAccount = async (shouldFail: boolean = false) => {
    // الانتقال لحالة التحميل مع حفظ وقت البدء
    setQueryState({ type: 'LOADING', startedAt: Date.now() });

    // محاكاة تأخير الشبكة
    await new Promise((r) => setTimeout(r, 700));

    // محاكاة سيناريو الفشل
    if (shouldFail) {
      setQueryState({
        type: 'FAILURE',
        errorMessage: 'تعذر الاتصال بخادم الحسابات (رمز 503)',
        retryCount: 1
      });
      return;
    }

    // محاكاة سيناريو النجاح
    setQueryState({
      type: 'SUCCESS',
      account: {
        id: 'usr-881',
        name: 'م. عمر فاروق',
        email: 'omar@example.com',
        plan: 'enterprise'
      },
      cached: false
    });
  };

  // تصيير واجهة المستخدم باستخدام Exhaustive Switch
  const renderContent = () => {
    switch (queryState.type) {
      case 'IDLE':
        return (
          <div className="text-center py-8">
            <p className="text-slate-400 mb-4">اضغط على أحد الأزرار أدناه لتجربة استدعاء البيانات</p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => fetchAccount(false)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-sm font-semibold"
              >
                جلب بنجاح (Success)
              </button>
              <button
                onClick={() => fetchAccount(true)}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded-xl text-sm font-semibold"
              >
                جلب بفشل (Error)
              </button>
            </div>
          </div>
        );

      case 'LOADING':
        return (
          <div className="text-center py-8">
            <div className="inline-block w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-cyan-400 font-medium">جاري تحميل بيانات الحساب الآمنة...</p>
            <span className="text-xs text-slate-500">بدأ الطلب في: {new Date(queryState.startedAt).toLocaleTimeString()}</span>
          </div>
        );

      case 'SUCCESS':
        return (
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-lg text-emerald-400">{queryState.account.name}</h4>
              <span className="px-2.5 py-0.5 bg-purple-500/20 text-purple-300 rounded-full text-xs font-bold uppercase">
                {queryState.account.plan}
              </span>
            </div>
            <p className="text-sm text-slate-300 mb-1">البريد: {queryState.account.email}</p>
            <p className="text-xs text-slate-500">المعرف: {queryState.account.id}</p>
            <button
              onClick={() => setQueryState({ type: 'IDLE' })}
              className="mt-4 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg"
            >
              إعادة تعيين الحالة
            </button>
          </div>
        );

      case 'FAILURE':
        return (
          <div className="p-4 bg-rose-950/40 border border-rose-800/60 rounded-xl text-rose-300">
            <h4 className="font-bold mb-1">❌ فشل تحميل البيانات</h4>
            <p className="text-sm mb-2">{queryState.errorMessage}</p>
            <div className="flex gap-2">
              <button
                onClick={() => fetchAccount(false)}
                className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-lg"
              >
                إعادة المحاولة
              </button>
              <button
                onClick={() => setQueryState({ type: 'IDLE' })}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg"
              >
                إلغاء
              </button>
            </div>
          </div>
        );

      default:
        // إذا نسي المطور معالجة حالة جديدة سيشتكي TypeScript فوراً هنا!
        return assertUnreachable(queryState);
    }
  };

  // إرجاع الواجهة
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      <h3 className="text-xl font-bold text-cyan-400 mb-4">نمط الحالات المميزة Discriminated Unions</h3>
      {renderContent()}
    </div>
  );
}`,
      outputExplanation: "بفضل خاصية `type` أو `status` المشتركة، يعرف TypeScript بدقة متناهية أن `queryState.account` موجود فقط وحصراً داخل كتلة `case 'SUCCESS'`، ويمنعك من محاولة قراءته في حالة `LOADING` أو `FAILURE`.",
      commonMistakes: [
        {
          mistake: "استخدام حقول منطقية متعددة متزامنة مثل `isLoading && isError && data` في كائن واحد",
          fix: "استبدالها بـ Discriminated Union يحدد الحالات المتنافية ككائنات منفصلة بداخل نوع موحد."
        },
        {
          mistake: "إغفال دالة `assertUnreachable` في فحص `default`، مما يفقدك تنبيه TypeScript عند إضافة حالات جديدة مستقبلاً",
          fix: "أضف `default: return assertUnreachable(state)` لضمان تحقق استنفاذ كافة الحالات في وقت التجميع."
        }
      ],
      bestPractices: [
        "استخدم أسماء واضحة ومميزة للخاصية الرابطة مثل `status` أو `kind` أو `type`.",
        "اجعل الحالات المتنافية مستحيلة التمثيل برمجياً لرفع موثوقية واجهات المستخدم إلى 100%."
      ],
      infographic: {
        title: "من الحالات المستحيلة إلى الحالات المميزة",
        points: [
          "النمط القديم الخطر: `{ loading: true, error: 'failed', data: [...] }` ➔ تناقض برمجى وانهيار واجهة!",
          "نمط Discriminated Union: إما `{ status: 'loading' }` أو `{ status: 'success', data }` فقط.",
          "حماية Exhaustiveness Checking: دالة تفحص نوع `never` لاكتشاف أي فرع ناقص أثناء كتابة الكود."
        ]
      }
    },
    {
      id: "14.4.d",
      title: "تعريف أنواع النماذج",
      englishTerm: {
        term: "Form State Typing",
        pronunciation: "فورم ستيت تايبينغ",
        meaning: "تحديد واجهات حقول النماذج وهياكل رسائل الخطأ والتكامل الآمن مع معالجات الإدخال"
      },
      description: "تعتبر النماذج (Forms) العمود الفقري لأغلب تطبيقات المؤسسات. في TypeScript، نقوم بتعريف واجهة محددة لقيم النموذج مثل `FormValues`، ثم نشتق منها واجهة أخطاء التحقق باستخدام المساعد `Record<keyof FormValues, string | undefined>` أو `Partial<Record<keyof FormValues, string>>`، مما يضمن أن كل رسالة خطأ ترتبط بحقل فعلي وموجود داخل النموذج، ويمنع الأخطاء الإملائية في أسماء الحقول تماماً.",
      analogy: "يشبه الأمر استمارة رسمية في بنك أو جهة حكومية؛ كل خانة مرقمة ومحددة، وحينما يكتشف موظف التدقيق نقصاً، يضع ملصق ملاحظة على الخانة المعنية حصراً، ولا يمكنه اختراع خانة جديدة غير موجودة في الاستمارة!",
      whyItMatters: "يحميك هذا الأسلوب من الخطأ الكلاسيكي بتعديل اسم حقل في النموذج ونسيان تعديل اسمه في كائن الأخطاء أو معالج الإرسال، حيث سيعترض TypeScript على الفور.",
      syntax: "type FormErrors<T> = Partial<Record<keyof T, string>>;\n\ninterface LoginFormValues {\n  email: string;\n  password: string;\n}",
      simpleExample: `// تعريف واجهة قيم نموذج الاتصال
interface ContactFormValues {
  // اسم المرسل
  name: string;
  // عنوان البريد
  email: string;
  // نص الرسالة
  message: string;
}

// تعريف نوع الأخطاء المشتق برمجياً من حقول النموذج
type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

// دالة فحص صحة بيانات النموذج بأنواع صارمة
function validateContactForm(values: ContactFormValues): ContactFormErrors {
  // كائن الأخطاء الأولي
  const errors: ContactFormErrors = {};

  // التحقق من الاسم
  if (!values.name.trim()) {
    errors.name = "حقل الاسم مطلوب";
  }

  // التحقق من البريد الإلكتروني
  if (!values.email.includes("@")) {
    errors.email = "يرجى إدخال بريد إلكتروني صالح";
  }

  // التحقق من نص الرسالة
  if (values.message.length < 10) {
    errors.message = "يجب ألا تقل الرسالة عن 10 أحرف";
  }

  // إرجاع كائن الأخطاء
  return errors;
}`,
      advancedExample: `// استيراد useState من React
import { useState, ChangeEvent, FormEvent } from 'react';

// تعريف واجهة نموذج التسجيل المتكامل
interface RegistrationFormValues {
  username: string;
  email: string;
  age: number;
  acceptTerms: boolean;
}

// اشتقاق نوع أخطاء الحقول تلقائياً
type RegistrationFormErrors = Partial<Record<keyof RegistrationFormValues, string>>;

// مكون نموذج التسجيل المتقدم والمؤمن
export function TypedRegistrationForm() {
  // حالة قيم النموذج مع قيم أولية مطابقة تماماً للواجهة
  const [values, setValues] = useState<RegistrationFormValues>({
    username: '',
    email: '',
    age: 18,
    acceptTerms: false
  });

  // حالة أخطاء التحقق
  const [errors, setErrors] = useState<RegistrationFormErrors>({});
  // حالة نجاح الإرسال
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // معالج تغيير موحد وآمن لكافة حقول النصوص والأرقام
  const handleInputChange = (
    field: keyof RegistrationFormValues,
    value: string | number | boolean
  ) => {
    // تحديث قيمة الحقل المعني
    setValues((prev) => ({ ...prev, [field]: value }));

    // مسح خطأ الحقل تلقائياً عند قيام المستخدم بالتعديل
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // دالة التحقق الشاملة قبل الإرسال
  const validate = (): boolean => {
    const newErrors: RegistrationFormErrors = {};

    if (values.username.trim().length < 3) {
      newErrors.username = 'اسم المستخدم يجب أن يتكون من 3 أحرف على الأقل';
    }

    if (!values.email.includes('@') || !values.email.includes('.')) {
      newErrors.email = 'صيغة البريد الإلكتروني غير صحيحة';
    }

    if (values.age < 18) {
      newErrors.age = 'يجب أن يكون العمر 18 عاماً فما فوق';
    }

    if (!values.acceptTerms) {
      newErrors.acceptTerms = 'يجب الموافقة على الشروط والأحكام للمتابعة';
    }

    setErrors(newErrors);
    // النموذج صالح إذا لم تحتوِ مصفوفة الأخطاء على أي قيمة
    return Object.keys(newErrors).length === 0;
  };

  // معالج إرسال النموذج الموثق بنوع FormEvent
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // منع السلوك التلقائي للمتصفح بإعادة تحميل الصفحة
    e.preventDefault();

    // التحقق من صلاحية الحقول
    if (validate()) {
      // محاكاة إرسال البيانات الناجحة
      setIsSubmitted(true);
    }
  };

  // إرجاع واجهة النموذج
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-amber-400 mb-4">نموذج تسجيل مؤمن بأنواع TypeScript</h3>
      {isSubmitted ? (
        <div className="p-4 bg-emerald-950/40 border border-emerald-700/60 rounded-xl text-emerald-300 text-center">
          <p className="font-bold text-lg mb-1">🎉 تم التسجيل بنجاح!</p>
          <p className="text-xs text-slate-300">أهلاً بك يا {values.username}، تم إرسال رسالة تفعيل إلى {values.email}.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* حقل اسم المستخدم */}
          <div>
            <label className="block text-xs text-slate-400 mb-1">اسم المستخدم:</label>
            <input
              type="text"
              value={values.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl focus:border-amber-500 focus:outline-none text-sm"
              placeholder="مثال: أحمد خالد"
            />
            {errors.username && <p className="text-rose-400 text-xs mt-1">{errors.username}</p>}
          </div>

          {/* حقل البريد */}
          <div>
            <label className="block text-xs text-slate-400 mb-1">البريد الإلكتروني:</label>
            <input
              type="email"
              value={values.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl focus:border-amber-500 focus:outline-none text-sm"
              placeholder="ahmed@example.com"
            />
            {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* حقل العمر */}
          <div>
            <label className="block text-xs text-slate-400 mb-1">العمر:</label>
            <input
              type="number"
              value={values.age}
              onChange={(e) => handleInputChange('age', Number(e.target.value))}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl focus:border-amber-500 focus:outline-none text-sm"
            />
            {errors.age && <p className="text-rose-400 text-xs mt-1">{errors.age}</p>}
          </div>

          {/* خانة الموافقة على الشروط */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="termsCheck"
              checked={values.acceptTerms}
              onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
              className="w-4 h-4 rounded text-amber-500 focus:ring-0 bg-slate-900 border-slate-800"
            />
            <label htmlFor="termsCheck" className="text-xs text-slate-300">أوافق على الشروط وسياسة الخصوصية</label>
          </div>
          {errors.acceptTerms && <p className="text-rose-400 text-xs">{errors.acceptTerms}</p>}

          {/* زر الإرسال */}
          <button
            type="submit"
            className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 font-bold rounded-xl text-sm transition-colors mt-2"
          >
            إنشاء الحساب
          </button>
        </form>
      )}
    </div>
  );
}`,
      outputExplanation: "باستخدام `keyof RegistrationFormValues`، يمنع TypeScript المطور من إدخال اسم حقل خاطئ أثناء تحديث الحالة، كما يربط أخطاء التحقق بالحقول الصحيحة تلقائياً وبشكل موثوق.",
      commonMistakes: [
        {
          mistake: "تعريف كائن الأخطاء كـ `Record<string, string>` فضفاض",
          fix: "استخدم `Partial<Record<keyof FormValues, string>>` لربط الأخطاء بمفاتيح النموذج الحقيقية حصراً."
        },
        {
          mistake: "نسيان تحويل قيمة `e.target.value` الرقمية إلى Number عند التعامل مع حقول الأرقام",
          fix: "استخدم `Number(e.target.value)` أو `parseInt` لمطابقة نوع الحقل الرقمي في الواجهة."
        }
      ],
      bestPractices: [
        "استخدم `Partial<Record<keyof T, string>>` لإنشاء أنواع أخطاء النماذج الديناميكية.",
        "اجعل معالج التغيير العام يستقبل `field: keyof FormValues` لمنع أخطاء الحروف الشائعة."
      ],
      infographic: {
        title: "هندسة أنواع النماذج والأخطاء",
        points: [
          "واجهة النموذج `FormValues`: تحدد شكل كل حقل ونوعه الأساسي (string, number, boolean).",
          "نوع الأخطاء المشتق: `Partial<Record<keyof FormValues, string>>` يضمن عدم كتابة اسم حقل مجهول في رسائل الخطأ.",
          "معالج التغيير العام: يستقبل `keyof FormValues` لتوفير إكمال تلقائي مريح وأمان مطلق."
        ]
      }
    },
    {
      id: "14.4.e",
      title: "استخدام Zod لاستخراج الأنواع",
      englishTerm: {
        term: "Schema Validation with Zod & z.infer",
        pronunciation: "سكيما فاليديشن وذ زود آند زد إنفير",
        meaning: "التحقق من صحة البيانات في زمن التشغيل واستخراج أنواع TypeScript تلقائياً من المخطط ليكون مصدراً وحيداً للحقيقة"
      },
      description: "يعمل TypeScript في وقت التجميع فقط ويختفي تماماً في المتصفح. هذا يعني أنه لا يستطيع بمفرده منع بيانات غير صالحة قادمة من خادم خارجي أو نموذج مستخدم! هنا تأتي مكتبة Zod لتكون الجسر المثالي: نقوم ببناء مخطط فحص (Schema) للبيانات في زمن التشغيل، ثم نستخرج نوع TypeScript المطابق له تلقائياً باستخدام المساعد `z.infer<typeof Schema>`، وبذلك نحصل على مصدر وحيد للحقيقة (Single Source of Truth) يجمع بين التحقق الحقيقي والأمان النوعي.",
      analogy: "يشبه الأمر جهاز الفحص بالأشعة السينية عند بوابة المطار؛ الجهاز يفحص الحقائب فعلياً عند دخول المسافرين (Runtime validation)، وفي نفس الوقت يطبع تقريراً رسمي بالمواصفات الفنية للحقائب المسموح بها للمراقبين (Compile-time types). لا تحتاج لكتابة تقريرين منفصلين!",
      whyItMatters: "يقضي Zod على مشكلة تكرار كتابة الكود المزدوج: كتابة واجهة TypeScript للأنواع ثم كتابة دالة `validate` مستقلة للتحقق من نفس الحقول، مما يؤدي دائماً لانحراف أحدهما عن الآخر عند إجراء أي تعديل مستقبلي.",
      syntax: "import { z } from 'zod';\n\nconst UserSchema = z.object({\n  name: z.string().min(2),\n  age: z.number().int().positive()\n});\n\ntype User = z.infer<typeof UserSchema>;",
      simpleExample: `// استيراد Zod
import { z } from 'zod';

// تعريف مخطط التحقق من صحة بيانات المستخدم
export const UserSchema = z.object({
  // اسم نصي لا يقل عن حرفين
  name: z.string().min(2, "الاسم قصير جداً"),
  // بريد إلكتروني بصيغة صحيحة
  email: z.string().email("البريد الإلكتروني غير صالح"),
  // عمر رقمي موجب لا يقل عن 18
  age: z.number().min(18, "يجب أن يكون العمر 18 عاماً فأكثر")
});

// استخراج نوع TypeScript تلقائياً من المخطط دون الحاجة لكتابة interface يدوياً!
export type User = z.infer<typeof UserSchema>;

// دالة تجريبية تفحص البيانات في زمن التشغيل مع ضمان النوع
export function parseUserData(input: unknown): User | null {
  // استخدام safeParse لفحص البيانات دون رمي استثناءات مكسورة
  const result = UserSchema.safeParse(input);

  // إذا نجح الفحص
  if (result.success) {
    // result.data يمتلك نوع User تماماً
    return result.data;
  } else {
    // طباعة تفاصيل أخطاء التحقق
    console.error("فشل التحقق:", result.error.format());
    return null;
  }
}`,
      advancedExample: `// استيراد Zod و React
import { z } from 'zod';
import { useState } from 'react';

// تعريف مخطط متقدم ومعقد للمنتج مع خصائص اختيارية وشروط دقيقة
export const ProductSchema = z.object({
  id: z.string().uuid("المعرف يجب أن يكون بصيغة UUID صالحة"),
  title: z.string().min(3, "عنوان المنتج يجب ألا يقل عن 3 أحرف").max(50, "العنوان طويل جداً"),
  price: z.number().positive("السعر يجب أن يكون رقماً موجباً أكبر من صفر"),
  category: z.enum(['electronics', 'clothing', 'books', 'home'], {
    errorMap: () => ({ message: "التصنيف غير معتمد في المتجر" })
  }),
  inStock: z.boolean().default(true),
  tags: z.array(z.string()).min(1, "يجب تحديد وسم واحد على الأقل للمنتج")
});

// استخراج نوع المنتج الصارم تلقائياً
export type Product = z.infer<typeof ProductSchema>;

// مكون إدارة وفحص المنتجات باستخدام Zod في زمن التشغيل
export function ZodProductInspector() {
  // حالة النص الخام المدخل كـ JSON لاختبار الفحص
  const [jsonInput, setJsonInput] = useState<string>(
    JSON.stringify(
      {
        id: "123e4567-e89b-12d3-a456-426614174000",
        title: "لوحة مفاتيح لاسلكية ذكية",
        price: 89.99,
        category: "electronics",
        inStock: true,
        tags: ["hardware", "wireless", "gaming"]
      },
      null,
      2
    )
  );

  // حالة المنتج المفحوص بنجاح
  const [validatedProduct, setValidatedProduct] = useState<Product | null>(null);
  // حالة الأخطاء المستخرجة من Zod
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  // دالة فحص المدخل
  const handleValidate = () => {
    try {
      // تفكيك النص ككائن مجهول النوع unknown
      const rawData: unknown = JSON.parse(jsonInput);

      // تمرير الكائن المجهول لمخطط Zod للفحص الفعلي
      const parseResult = ProductSchema.safeParse(rawData);

      // في حال النجاح
      if (parseResult.success) {
        // تعيين المنتج المعتمد
        setValidatedProduct(parseResult.data);
        // تصفير الأخطاء
        setValidationErrors([]);
      } else {
        // استخراج رسائل الخطأ من Zod بتنسيق مقروء
        const formattedErrors = parseResult.error.errors.map(
          (err) => \`[\${err.path.join('.')}] : \${err.message}\`
        );
        setValidationErrors(formattedErrors);
        setValidatedProduct(null);
      }
    } catch {
      setValidationErrors(["صيغة JSON غير صحيحة، يرجى كتابة كود صالح."]);
      setValidatedProduct(null);
    }
  };

  // إرجاع واجهة الفحص
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      <h3 className="text-xl font-bold text-violet-400 mb-2">فاحص Zod للبيانات في وقت التشغيل (z.infer)</h3>
      <p className="text-xs text-slate-400 mb-4">
        قم بتعديل كود الـ JSON أدناه لتجربة اكتشاف Zod للأخطاء في زمن التشغيل واستخراج الأنواع.
      </p>

      {/* حقل إدخال كود JSON */}
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        rows={9}
        className="w-full p-3 font-mono text-xs bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-violet-500 text-emerald-400"
      />

      {/* زر الفحص */}
      <button
        onClick={handleValidate}
        className="mt-3 px-5 py-2 bg-violet-600 hover:bg-violet-500 font-semibold rounded-xl text-sm transition-colors"
      >
        فحص ومطابقة مع Zod Schema
      </button>

      {/* عرض الأخطاء إن وجدت */}
      {validationErrors.length > 0 && (
        <div className="mt-4 p-4 bg-rose-950/40 border border-rose-800/60 rounded-xl text-rose-300">
          <h4 className="font-bold text-sm mb-2">❌ تم اكتشاف أخطاء في البيانات:</h4>
          <ul className="list-disc list-inside text-xs space-y-1">
            {validationErrors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      {/* عرض المنتج المعتمد بنجاح */}
      {validatedProduct && (
        <div className="mt-4 p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-emerald-200">
          <h4 className="font-bold text-sm mb-2">✅ تم قبول البيانات واعتماد النوع Product:</h4>
          <div className="text-xs space-y-1 font-mono">
            <p><span className="text-slate-400">العنوان:</span> {validatedProduct.title}</p>
            <p><span className="text-slate-400">السعر:</span> {validatedProduct.price} $</p>
            <p><span className="text-slate-400">التصنيف:</span> {validatedProduct.category}</p>
            <p><span className="text-slate-400">الوسوم:</span> {validatedProduct.tags.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "تضمن مكتبة Zod استخراج نوع TypeScript الحقيقي عبر `z.infer` مباشرة من المخطط، مع التحقق الفعلي في زمن التشغيل عبر `safeParse` لمنع أي بيانات فاسدة من التسلل إلى داخل شجرة المكونات.",
      commonMistakes: [
        {
          mistake: "تعريف واجهة Interface مستقلة ثم تعريف Zod Schema منفصل يكرر نفس الحقول يدوياً",
          fix: "عرّف الـ Schema أولاً ثم استخرج الـ Type بـ `z.infer<typeof MySchema>` ليكون لديك مصدر وحيد للحقيقة."
        },
        {
          mistake: "استخدام `parse()` مباشرة بدلاً من `safeParse()`، مما يؤدي لانهيار التطبيق في حال وجود بيانات غير مطابقة",
          fix: "استخدم دائماً `safeParse()` للتعامل مع أخطاء التحقق بسلاسة وبدون انهيار الواجهة."
        }
      ],
      bestPractices: [
        "استخدم Zod للتحقق من استجابات الـ API الخارجية والمدخلات القادمة من الـ LocalStorage أو النماذج المعقدة.",
        "استغل رسائل الخطأ المخصصة في Zod لتقديم تجربة مستخدم واضحة وداعمة للغة العربية."
      ],
      infographic: {
        title: "التكامل بين Zod و TypeScript",
        points: [
          "مخطط Zod: يفحص البيانات في زمن التشغيل (Runtime) ويمنع البيانات التالفة.",
          "المساعد `z.infer`: يستخرج نوع TypeScript المقابل في زمن التجميع تلقائياً.",
          "فائدة معمارية: صيانة في مكان واحد وتطابق 100% بين الفحص والنوع."
        ]
      }
    },
    {
      id: "14.4.f",
      title: "TypeScript مع React Router",
      englishTerm: {
        term: "TypeScript with React Router",
        pronunciation: "تايب سكريبت وذ رياكت راوتر",
        meaning: "تحديد أنواع معاملات المسار (Route Params) وبيانات محمل المسار (Loader Data) لتفادي أخطاء التنقل"
      },
      description: "يوفر React Router (الإصدارات الحديثة v6+) تكاملاً قوياً مع TypeScript لتأمين التنقل ومعاملات الروابط. يمكننا تحديد نوع المعاملات الديناميكية مثل معرف المنتج عبر `useParams<{ productId: string }>()`، وتحديد نوع البيانات المحملة مسبقاً عبر `useLoaderData() as LoaderData`، بالإضافة إلى استخدام الروابط الآمنة لتفادي المسارات الخاطئة.",
      analogy: "يشبه الأمر لوحات الملاحة في محطات القطارات السريعة؛ كل مسار له رقم رصيف محدد بدقة، والتذكرة الصادرة تحدد رقم المقعد ورقم العربة؛ لا يمكنك الصعود إلى رصيف عشوائي دون أن يكتشف النظام أن تذكرتك لا تطابق مسار القطار!",
      whyItMatters: "بدون تحديد الأنواع مع معاملات المسار، سيعاملك TypeScript مع `useParams` ككائن يحمل قيماً قد تكون `undefined` في أي خاصية عشوائية، مما يجعلك عرضة للوصول لخصائص غير موجودة في الـ URL.",
      syntax: "type RouteParams = { id: string; tab?: string };\nconst { id, tab } = useParams<RouteParams>();",
      simpleExample: `// استيراد useParams من react-router
import { useParams } from 'react-router-dom';

// تعريف نوع معاملات المسار المتوقعة
type UserDetailsParams = {
  // معرف المستخدم في الرابط /users/:userId
  userId: string;
};

// مكون عرض تفاصيل المستخدم
export function SimpleUserRouteView() {
  // استدعاء useParams مع تمرير النوع كـ Generic
  const { userId } = useParams<UserDetailsParams>();

  // إرجاع واجهة المستخدم
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <h3 className="font-bold text-cyan-400 mb-2">عرض المسار الديناميكي</h3>
      {/* التأكد من وجود المعرف قبل استخدامه */}
      <p className="text-sm text-slate-300">
        المعرف المستخرج من الرابط: <span className="font-mono text-emerald-400">{userId ?? 'غير محدد'}</span>
      </p>
    </div>
  );
}`,
      advancedExample: `// استيراد أدوات react-router-dom
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

// تعريف واجهة معاملات المسار الرئيسي /store/:category/:productId
interface StoreRouteParams {
  category: string;
  productId: string;
}

// مكون صفحة تفاصيل المنتج في المتجر الإلكتروني
export function StoreProductPage() {
  // قراءة معاملات الرابط مع التحقق الصارم من وجودها
  const { category, productId } = useParams<keyof StoreRouteParams>() as StoreRouteParams;

  // إدارة معاملات الاستعلام Query Params مثل ?view=grid&currency=USD
  const [searchParams, setSearchParams] = useSearchParams();
  // أداة التنقل البرمجي
  const navigate = useNavigate();

  // قراءة معمل العملة المفضل مع قيمة احتياطية آمنة
  const currency = searchParams.get('currency') ?? 'USD';

  // دالة لتبديل العملة في الرابط
  const handleCurrencyChange = (newCurrency: 'USD' | 'EUR' | 'SAR') => {
    // تحديث معاملات البحث في الرابط
    setSearchParams((prev) => {
      prev.set('currency', newCurrency);
      return prev;
    });
  };

  // إرجاع واجهة الصفحة
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-cyan-400">صفحة المنتج (React Router + TS)</h3>
        {/* زر العودة للمتجر */}
        <button
          onClick={() => navigate('/store')}
          className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg"
        >
          ← العودة للرئيسية
        </button>
      </div>

      {/* تفاصيل المسار المستخرجة */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 mb-4">
        <p className="text-sm">
          <span className="text-slate-400">التصنيف الحالي:</span>{' '}
          <span className="font-bold text-emerald-400">{category}</span>
        </p>
        <p className="text-sm">
          <span className="text-slate-400">معرف المنتج:</span>{' '}
          <span className="font-mono text-amber-400">{productId}</span>
        </p>
        <p className="text-sm">
          <span className="text-slate-400">العملة المختارة (Query):</span>{' '}
          <span className="font-bold text-purple-400">{currency}</span>
        </p>
      </div>

      {/* أزرار تغيير العملة وتحديث الرابط */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-400">تبديل العملة في الرابط:</span>
        {(['USD', 'EUR', 'SAR'] as const).map((curr) => (
          <button
            key={curr}
            onClick={() => handleCurrencyChange(curr)}
            className={\`px-3 py-1 text-xs rounded-lg font-bold transition-all \${currency === curr ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
          >
            {curr}
          </button>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "من خلال تقييد `useParams` بواجهة `StoreRouteParams`، يكتشف محرر الكود أسماء الحقول تلقائياً ويمنع الوصول لأي معامل عشوائي غير معرف في المسار.",
      commonMistakes: [
        {
          mistake: "افتراض أن المعامل موجود حتماً دون مراعاة أن قيمة `useParams` قد تكون `undefined`",
          fix: "تحقق دائماً من وجود المعامل أو قم بتوفير قيمة احتياطية `param ?? ''`."
        },
        {
          mistake: "استخدام نوع بدائي غير كائني كمعامل لـ useParams مثل `useParams<string>()`",
          fix: "مرر نوعاً كائنياً يمثل أسماء المتغيرات في الرابط: `useParams<{ id: string }>()`."
        }
      ],
      bestPractices: [
        "اجمع معاملات كل مسار في Type مخصص داخل ملف الصفحة المعنية.",
        "استخدم الثوابت المقيدة بـ `as const` للمسارات الثابتة لتفادي أخطاء الروابط الإملائية."
      ],
      infographic: {
        title: "التنقل الآمن مع React Router و TypeScript",
        points: [
          "`useParams<Params>()`: تحديد دقيق لمتغيرات الرابط الديناميكية (Route Params).",
          "`useSearchParams()`: قراءة وكتابة معاملات الاستعلام (Query String) بأنواع مدققة.",
          "الأمان: تفادي التكسر الناتج عن نسيان فحص المعاملات المفقودة في المتصفح."
        ]
      }
    },
    {
      id: "14.4.g",
      title: "TypeScript مع Redux Toolkit",
      englishTerm: {
        term: "TypeScript with Redux Toolkit",
        pronunciation: "تايب سكريبت وذ ريدوكس تول كيت",
        meaning: "بناء خطافات Redux موثقة بالأنواع مثل useAppDispatch و useAppSelector وحقن PayloadAction في الشرائح"
      },
      description: "يوفر Redux Toolkit دعماً مدمجاً وعميقاً لـ TypeScript. الممارسة القياسية المعتمدة رسمياً في توثيق Redux هي استخراج نوع الحالة الشاملة `RootState` ونوع الإرسال `AppDispatch` من كائن المخزن الرئيسي `store`، ثم إنشاء خطافين مخصصين `useAppDispatch` و `useAppSelector` باستخدام دالة `withTypes()` الحديثة، مما يمنح التطبيق إكمالاً تلقائياً كاملاً لكافة بيانات المخزن دون الحاجة لتكرار كتابة الأنواع في كل مكون.",
      analogy: "يشبه الأمر غرفة قيادة قطار فائق السرعة؛ كل عداد وشاشة موصلة بأجهزة استشعار مركزية وتعرف بالضبط مقدار السرعة وضغط المحرك دون أن يضطر السائق لحساب المعادلات بيده في كل محطة!",
      whyItMatters: "كتابة `useAppSelector((state) => state.auth.user)` تمنحك إكمالاً فورياً لكافة أقسام الحالة (Slices)، وتكشف أي تغيير في بنية الحالة فور حدوثه قبل تشغيل التطبيق.",
      syntax: "export type RootState = ReturnType<typeof store.getState>;\nexport type AppDispatch = typeof store.dispatch;\n\nexport const useAppDispatch = useDispatch.withTypes<AppDispatch>();\nexport const useAppSelector = useSelector.withTypes<RootState>();",
      simpleExample: `// إعداد الشريحة مع PayloadAction
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// تعريف واجهة حالة العداد
interface CounterState {
  value: number;
}

// الحالة الابتدائية
const initialState: CounterState = {
  value: 0
};

// إنشاء الشريحة بأنواع صريحة
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // دالة زيادة بسيطة بدون حمولة
    increment: (state) => {
      state.value += 1;
    },
    // دالة زيادة بمقدار محدد مع تحديد نوع الحمولة كـ number
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

// تصدير الإجراءات
export const { increment, incrementByAmount } = counterSlice.actions;`,
      advancedExample: `// 1. ملف إعداد المخزن الرئيسي: src/store/index.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

// تعريف واجهة المستخدم المسجل
interface AuthUser {
  id: string;
  name: string;
  token: string;
}

// تعريف واجهة شريحة المصادقة
interface AuthState {
  currentUser: AuthUser | null;
  isAuthenticated: boolean;
}

// الحالة المبدئية للشريحة
const initialAuthState: AuthState = {
  currentUser: null,
  isAuthenticated: false
};

// شريحة المصادقة
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    // إجراء تسجيل الدخول وتخزين بيانات المستخدم
    loginSuccess: (state, action: PayloadAction<AuthUser>) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    // إجراء تسجيل الخروج
    logoutUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    }
  }
});

// تصدير الإجراءات
export const { loginSuccess, logoutUser } = authSlice.actions;

// بناء وتهيئة المخزن المركزي
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
});

// استخراج أنواع الحالة والإرسال من المخزن نفسه تلقائياً
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// إنشاء وتصدير الخطافات المؤمّنة باستخدام ميزة withTypes المعتمدة في RTK الحديثة
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// 2. استخدام الخطافات المؤمّنة داخل المكون: src/components/ReduxUserWidget.tsx
export function ReduxUserWidget() {
  // استدعاء الخطاف المخصص الآمن مع إكمال تلقائي كامل لـ state.auth
  const { currentUser, isAuthenticated } = useAppSelector((state) => state.auth);
  // استدعاء خطاف الإرسال الموثق بنوع AppDispatch
  const dispatch = useAppDispatch();

  // إرجاع واجهة المكون
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      <h3 className="text-xl font-bold text-purple-400 mb-4">التكامل مع Redux Toolkit (RTK + TS)</h3>
      {isAuthenticated && currentUser ? (
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl mb-3">
          <p className="font-bold text-emerald-400">مرحباً: {currentUser.name}</p>
          <span className="text-xs text-slate-500 font-mono">المعرف: {currentUser.id}</span>
          <button
            onClick={() => dispatch(logoutUser())}
            className="block mt-3 px-3 py-1 bg-rose-600 hover:bg-rose-500 text-xs rounded-lg font-semibold"
          >
            تسجيل الخروج
          </button>
        </div>
      ) : (
        <div>
          <p className="text-slate-400 text-sm mb-3">لم يتم تسجيل الدخول بعد في Redux Store.</p>
          <button
            onClick={() =>
              dispatch(
                loginSuccess({
                  id: 'usr-rtk-99',
                  name: 'م. سارة التميمي',
                  token: 'jwt-sec-token-xyz'
                })
              )
            }
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-sm font-semibold rounded-xl"
          >
            تسجيل دخول تجريبي
          </button>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "من خلال إعداد `useAppSelector` و `useAppDispatch` مع `withTypes`، تصبح كل قراءة للحالة وكل إرسال لإجراء مؤمناً بنسبة 100%، ويمنع TypeScript تمرير أي حمولة غير مطابقة لواجهة `PayloadAction` المحددة في الشريحة.",
      commonMistakes: [
        {
          mistake: "استخدام `useSelector` و `useDispatch` العاديين مباشرة في المكونات مما يتطلب تحديد نوع `(state: RootState)` في كل سطر",
          fix: "عرّف `useAppSelector` و `useAppDispatch` مرة واحدة في مجلد الـ store واستخدمهما في كل مكان."
        },
        {
          mistake: "كتابة نوع الحالة يدوياً بدلاً من استخراجه بـ `ReturnType<typeof store.getState>`",
          fix: "استخرج النوع دائماً من المخزن ليبقى متزامناً تلقائياً كلما أضفت شرائح جديدة."
        }
      ],
      bestPractices: [
        "استخدم `PayloadAction<T>` دائماً لتحديد نوع الحمولة داخل دوال الـ reducers.",
        "اعتمد على `useDispatch.withTypes<AppDispatch>()` لتسهيل البرمجة المعتمدة على الأنواع."
      ],
      infographic: {
        title: "خطافات Redux Toolkit المعتمدة على الأنواع",
        points: [
          "`RootState`: نوع الحالة المشتق تلقائياً من `store.getState` بدون صيانة يدوية.",
          "`PayloadAction<T>`: حماية كاملة لحمولة كل إجراء داخل الشرائح.",
          "`useAppSelector` & `useAppDispatch`: خطافات مسبقة التحديد تمنحك إكمالاً تلقائياً شاملاً."
        ]
      }
    },
    {
      id: "14.4.h",
      title: "TypeScript مع TanStack Query",
      englishTerm: {
        term: "TypeScript with TanStack Query",
        pronunciation: "تايب سكريبت وذ تان ستاك كويري",
        meaning: "تحديد أنواع بيانات الاستعلام والتحديثات والطفرات وطرق المعالجة المتفائلة في React Query"
      },
      description: "يمتلك TanStack Query (React Query) نظام أنواع متطوراً جداً يعتمد على الـ Generics في خطافات `useQuery` و `useMutation`. الأسلوب الأحدث والأفضل هو الاعتماد على Type Inference عبر دوال الـ `queryFn` بدلاً من كتابة معاملات عامة معقدة، وتحديد مفاتيح الاستعلام بدقة عبر الـ Tuple `queryKey: ['todos', id] as const` لضمان أمان المفاتيح واستدعاء البيانات.",
      analogy: "يشبه الأمر صندوق أمانات مصرفي ذكي؛ كل صندوق له مفتاح مزدوج برمز محدد (`queryKey as const`)، والشاشة الصغيرة فوق الصندوق تعرض تلقائياً محتويات الصندوق (ذهب، وثائق، نقود) بمجرد إدخال المفتاح الصحيح دون الحاجة لتخمين ما بداخله!",
      whyItMatters: "يحميك هذا التكامل من الخطأ الشائع بتعديل بنية البيانات المعادة من الـ API في جهة الخادم دون معرفة مكونات واجهة المستخدم بذلك، حيث سيكتشف TypeScript فوراً أي حقل محذوف أو معدل في شجرة المكونات.",
      syntax: "const query = useQuery({\n  queryKey: ['users', id] as const,\n  queryFn: () => fetchUser(id)\n});\n// query.data مستنتج بنوع User تماماً!",
      simpleExample: `// استيراد useQuery من TanStack Query
import { useQuery } from '@tanstack/react-query';

// واجهة المنشور
interface Post {
  id: number;
  title: string;
}

// دالة جلب المنشور بنوع صريح
async function getPostById(id: number): Promise<Post> {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`);
  return res.json() as Promise<Post>;
}

// مكون العرض
export function SimpleQueryPostView({ id }: { id: number }) {
  // يستنتج useQuery نوع data تلقائياً كـ Post | undefined بفضل دالة getPostById
  const { data, isLoading, isError } = useQuery({
    queryKey: ['post', id] as const,
    queryFn: () => getPostById(id)
  });

  if (isLoading) return <p className="text-slate-400">جاري التحميل...</p>;
  if (isError) return <p className="text-rose-400">فشل الجلب!</p>;

  return (
    <div className="p-3 bg-slate-900 rounded-lg text-white">
      <h4 className="font-bold text-emerald-400">{data?.title}</h4>
    </div>
  );
}`,
      advancedExample: `// استيراد الأدوات المطلوبة من TanStack Query
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

// تعريف واجهة مقال المدونة
interface Article {
  id: string;
  title: string;
  likes: number;
}

// واجهة متغيرات الطفرة (Mutation Variables)
interface LikeMutationVariables {
  articleId: string;
  increment: number;
}

// دوال محاكاة الـ API الموثقة بالأنواع الصارمة
const api = {
  // جلب مقال محدد
  getArticle: async (id: string): Promise<Article> => {
    await new Promise((r) => setTimeout(r, 400));
    return {
      id,
      title: 'دليل احتراف TypeScript مع React و Next.js',
      likes: 142
    };
  },
  // طفرة الإعجاب بالمقال
  likeArticle: async (vars: LikeMutationVariables): Promise<Article> => {
    await new Promise((r) => setTimeout(r, 400));
    return {
      id: vars.articleId,
      title: 'دليل احتراف TypeScript مع React و Next.js',
      likes: 142 + vars.increment
    };
  }
};

// مكون المقال مع التحديثات المتفائلة المؤمّنة نوعياً
export function TypedArticleManager() {
  const queryClient = useQueryClient();
  const articleId = 'art-101';

  // استعلام جلب المقال مع مفتاح ثابت مقيد بـ as const
  const { data: article, isLoading } = useQuery({
    queryKey: ['article', articleId] as const,
    queryFn: () => api.getArticle(articleId)
  });

  // طفرة الإعجاب مع تحديد نوع البيانات المعادة، ونوع الخطأ، ونوع المتغيرات بدقة
  const likeMutation = useMutation<Article, Error, LikeMutationVariables>({
    mutationFn: api.likeArticle,
    // عند نجاح العملية نقوم بتحديث الكاش بأنواع مؤكدة
    onSuccess: (updatedArticle) => {
      // تحديث بيانات الكاش مباشرة بدون إعادة طلب الشبكة
      queryClient.setQueryData(['article', articleId], updatedArticle);
    }
  });

  // إرجاع واجهة المكون
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-amber-400 mb-3">TanStack Query + TypeScript</h3>
      {isLoading ? (
        <p className="text-slate-400 animate-pulse">جاري جلب تفاصيل المقال...</p>
      ) : article ? (
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
          <h4 className="font-bold text-slate-100">{article.title}</h4>
          <div className="flex justify-between items-center pt-2 border-t border-slate-800">
            <span className="text-emerald-400 font-bold">❤️ {article.likes} إعجاب</span>
            <button
              onClick={() => likeMutation.mutate({ articleId, increment: 1 })}
              disabled={likeMutation.isPending}
              className="px-4 py-1.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-xs font-bold rounded-lg transition-colors"
            >
              {likeMutation.isPending ? 'جاري الحفظ...' : '+1 إعجاب'}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}`,
      outputExplanation: "من خلال الاعتماد على النوع المرتجع من `queryFn` وتمرير `as const` للمفاتيح، يستنتج TanStack Query و TypeScript نوع `article` بدقة كـ `Article | undefined`، مما يوفر أماناً كاملاً دون الحاجة لكتابة أنواع عامة معقدة يدوياً.",
      commonMistakes: [
        {
          mistake: "تمرير مصفوفة مفاتيح بدون `as const` مما يجعل نوع المفتاح مصفوفة نصوص عامة `string[]`",
          fix: "استخدم `['article', id] as const` لتثبيت نوع عناصر المفتاح ومواضعها."
        },
        {
          mistake: "إهمال تحديد نوع المتغيرات في `useMutation` مما يجعل المتغيرات الممرة من نوع `void` أو `unknown`",
          fix: "حدد نوع المتغيرات بوضوح: `useMutation<Data, Error, Variables>`."
        }
      ],
      bestPractices: [
        "اجعل دوال الـ `queryFn` ترجع `Promise<T>` بنوع صريح ليتكفل TypeScript باستنتاج نوع الاستعلام تلقائياً.",
        "استخدم Query Key Factories لتوليد مفاتيح الاستعلامات بنمط موحد ومؤمن برمجياً عبر المشروع بأكمله."
      ],
      infographic: {
        title: "التكامل بين TanStack Query و TypeScript",
        points: [
          "`queryFn: () => Promise<T>`: استنتاج تلقائي فوري لنوع `data` دون كتابة معاملات عامة يدوية.",
          "`queryKey: [...] as const`: تثبيت أنواع المفاتيح لمنع التضارب في كاش الاستعلامات.",
          "`useMutation<TData, TError, TVariables>`: أمان كامل للمدخلات والمخرجات في عمليات التعديل."
        ]
      }
    },
    {
      id: "14.4.i",
      title: "تجنب استخدام any",
      englishTerm: {
        term: "Avoiding the 'any' Type",
        pronunciation: "أفويدينغ ذا إني تايب",
        meaning: "الابتعاد التام عن نوع any واستبداله بـ unknown أو Generics أو حراس الأنواع لحماية المشروع"
      },
      description: "يعتبر النوع `any` بمثابة فيروس معدٍ داخل مشاريع TypeScript الكبيرة؛ بمجرد كتابة `any` في موضع واحد، يتسلل هذا النوع إلى كافة المتغيرات والدوال المحيطة به، مما يعطل فاحص الأخطاء تماماً ويفقد TypeScript فائدته الأساسية. البديل الآمن والاحترافي للبيانات مجهولة النوع هو استخدام `unknown`، والذي يفرض عليك التحقق الصارم من بنية القيمة بواسطة Type Guards قبل السماح لك بقراءتها أو استدعاء أي دالة منها.",
      analogy: "استخدام `any` يشبه إيقاف تشغيل صفارات الإنذار وكاميرات المراقبة في مبنى بنك بأكمله لتسهيل دخول العمال بسرعة؛ قد يبدو الأمر مريحاً في اللحظة الأولى، ولكنه يترك المبنى مكشوفاً تماماً لأي كارثة أو سرقة في أي ثانية!",
      whyItMatters: "تشير الإحصائيات إلى أن أغلب أخطاء الإنتاج في مشاريع TypeScript تنتج عن تسرب أنواع `any` في كود المعالجة، مما يجعل تفعيل قاعدة `@typescript-eslint/no-explicit-any` أمراً لا غنى عنه في بيئات العمل الاحترافية.",
      syntax: "// خطأ فادح (تعطيل الرقابة):\nfunction bad(data: any) { data.toUpperCase(); }\n\n// الأسلوب الآمن الصحيح (unknown + Type Guard):\nfunction safe(data: unknown) {\n  if (typeof data === 'string') { data.toUpperCase(); }\n}",
      simpleExample: `// مثال يقارن بين any الخطير و unknown الآمن

// دالة غير آمنة تستخدم any وقد تنهار في أي لحظة
function dangerousProcess(payload: any) {
  // لن يعترض TypeScript هنا، ولكن التطبيق سينهار إذا لم يكن payload نصاً!
  return payload.toUpperCase();
}

// دالة آمنة تماماً تستخدم unknown مع Type Narrowing
export function safeProcess(payload: unknown): string {
  // التحقق الحازم من نوع البيانات قبل استخدامها
  if (typeof payload === 'string') {
    // هنا يعرف TypeScript بكل ثقة أن payload نص آمن 100%
    return payload.toUpperCase();
  }

  // في حال لم يكن نصاً نتعامل مع الأمر بأمان
  return 'القيمة ليست نصاً صالحاً';
}`,
      advancedExample: `// بناء معالج أحداث ويب Webhook آمن بدون استخدام any إطلاقاً
interface PaymentWebhookEvent {
  event: 'payment.success';
  amount: number;
  transactionId: string;
}

interface UserRegisteredWebhookEvent {
  event: 'user.created';
  userId: string;
  email: string;
}

// نوع الاتحاد لأحداث الويب المعتمدة
type AppWebhookEvent = PaymentWebhookEvent | UserRegisteredWebhookEvent;

// حارس نوع مخصص (Custom Type Guard) يتحقق من كائن غير معروف بأمان تام
function isPaymentEvent(event: unknown): event is PaymentWebhookEvent {
  // التحقق من كونه كائناً حقيقياً وغير خالي
  if (typeof event !== 'object' || event === null) {
    return false;
  }

  // فحص الخصائص المحددة
  const candidate = event as Record<string, unknown>;
  return (
    candidate.event === 'payment.success' &&
    typeof candidate.amount === 'number' &&
    typeof candidate.transactionId === 'string'
  );
}

// حارس نوع لحدث تسجيل المستخدم
function isUserCreatedEvent(event: unknown): event is UserRegisteredWebhookEvent {
  if (typeof event !== 'object' || event === null) return false;
  const candidate = event as Record<string, unknown>;
  return (
    candidate.event === 'user.created' &&
    typeof candidate.userId === 'string' &&
    typeof candidate.email === 'string'
  );
}

// معالج الأحداث العام الخالي من أي استخدام لـ any
export function handleIncomingWebhook(payload: unknown): string {
  // فحص ما إذا كان الحدث يمثل عملية دفع
  if (isPaymentEvent(payload)) {
    // هنا يوفر TypeScript إكمالاً تلقائياً آمناً لـ payload.amount
    return \`تمت معالجة الدفعة بقيمة: \${payload.amount} $ بنجاح (المعرف: \${payload.transactionId})\`;
  }

  // فحص ما إذا كان الحدث يمثل تسجيلاً جديداً
  if (isUserCreatedEvent(payload)) {
    return \`تم إنشاء مستخدم جديد بالبريد: \${payload.email}\`;
  }

  // في حال كان الحدث مجهولاً أو تالفاً
  return 'تم رفض الحمولة: حدث غير معروف أو بيانات غير متوافقة.';
}`,
      outputExplanation: "باستخدام `unknown` والـ Type Guards بدلاً من `any`، نجبر أنفسنا والبرنامج على التدقيق في كل خاصية قبل استخدامها، مما يمنع بنسبة 100% ظهور أخطاء `TypeError: undefined is not a function` في الإنتاج.",
      commonMistakes: [
        {
          mistake: "استخدام `any` للتخلص السريع من رسالة خطأ مزعجة في TypeScript",
          fix: "استخدم `unknown` مع حارس نوع Type Guard، أو استخدم Generic المناسب، ولا تسكت المحرر بـ `any`."
        },
        {
          mistake: "استخدام التحويل القسري العنيف `(val as any as DesiredType)` للالتفاف على النظام",
          fix: "اكتب دالة تحقق برمجية حقيقية تتأكد من صحة الحقول في وقت التشغيل."
        }
      ],
      bestPractices: [
        "فعّل خيار `noImplicitAny: true` في ملف `tsconfig.json` لمنع استنتاج any الضمني.",
        "استخدم أداة ESLint مع قاعدة `@typescript-eslint/no-explicit-any: error` في مسار بناء المشروع."
      ],
      infographic: {
        title: "مقارنة حاسمة: any مقابل unknown",
        points: [
          "النوع any: يوقف الرقابة تماماً، ويتصرف كفيروس يعطل الأمان في الشفرات المحيطة.",
          "النوع unknown: يقبل أي قيمة مبدئياً، لكنه يمنع استخدامها حتى تثبت نوعها برهانياً.",
          "القاعدة الذهبية: استبدل كل `any` بـ `unknown` ثم استخدم Type Guards للوصول الآمن."
        ]
      }
    },
    {
      id: "14.4.j",
      title: "فحص أنواع البيانات القادمة من الخارج",
      englishTerm: {
        term: "Validating External Data Types",
        pronunciation: "فاليديتينغ إكستيرنال داتا تايبس",
        meaning: "التحقق المنهجي من صحة البيانات الواردة من مصادر خارجية مثل LocalStorage و Web Workers و Third-Party APIs"
      },
      description: "تعتبر البيانات القادمة من خارج كود تطبيقك مصدراً محتملاً للمخاطر وعدم الاستقرار؛ ويشمل ذلك البيانات المخزنة في `localStorage` (والتي قد يعدلها المستخدم بنفسه من الـ DevTools)، أو الاستجابات الواردة من واجهات API خارجية قد تغيرت هياكلها بدون إشعار، أو رسائل `postMessage` من إطارات iframe أخرى. يجب معاملة كل هذه البيانات كـ `unknown` وتمريرها عبر دوال تدقيق برمجية أو مخططات فحص (Schemas) قبل اعتمادها في نظامك الداخلي.",
      analogy: "يشبه الأمر فحص البضائع المستوردة في المختبر المركزي للجمارك؛ لا يمكن السماح بدخول المواد الغذائية إلى المتاجر بمجرد قراءة الورقة المكتوبة على الصندوق الخارجي، بل يجب فتح عينة وفحصها كيميائياً في المختبر للتأكد من مطابقتها للمعايير الصحية قبل توزيعها!",
      whyItMatters: "إذا قام مستخدم بمسح حقل معين من الـ LocalStorage أو تعديله، وكان كودك يفترض وجوده عبر Type Assertion مثل `JSON.parse(str) as UserConfig`، فسينهار تطبيقك فوراً في اللحظة التالية لقراءة خاصية مفقودة.",
      syntax: "const raw = localStorage.getItem('key');\nconst parsed: unknown = raw ? JSON.parse(raw) : null;\n// فحص parsed بحارس نوع أو Zod قبل استخدامه!",
      simpleExample: `// واجهة إعدادات مظهر المستخدم في LocalStorage
interface UserPreferences {
  theme: 'light' | 'dark';
  fontSize: number;
}

// دالة حارس نوع تفحص القيمة القادمة من التخزين المحلي
function isUserPreferences(val: unknown): val is UserPreferences {
  if (typeof val !== 'object' || val === null) return false;
  const obj = val as Record<string, unknown>;

  // التحقق من أن theme إما light أو dark
  const validTheme = obj.theme === 'light' || obj.theme === 'dark';
  // التحقق من أن fontSize رقم صالح
  const validFontSize = typeof obj.fontSize === 'number' && obj.fontSize >= 10;

  return validTheme && validFontSize;
}

// دالة قراءة آمنة من LocalStorage
export function loadSafePreferences(): UserPreferences {
  // القيمة الاحتياطية الافتراضية
  const defaultPrefs: UserPreferences = { theme: 'dark', fontSize: 16 };

  try {
    const raw = localStorage.getItem('user_prefs');
    if (!raw) return defaultPrefs;

    // تفكيك النص كقيمة مجهولة unknown
    const parsed: unknown = JSON.parse(raw);

    // فحص القيمة بالحارس المخصص
    if (isUserPreferences(parsed)) {
      return parsed; // معتمد وآمن 100%
    }
  } catch (e) {
    console.error("فشل قراءة الإعدادات:", e);
  }

  // في حال فشل الفحص نرجع الإعدادات الافتراضية بأمان
  return defaultPrefs;
}`,
      advancedExample: `// استيراد useState و useEffect من React
import { useState, useEffect } from 'react';

// تعريف واجهة بيانات الجلسة المخزنة في التخزين الخارجي
interface ExternalSessionData {
  sessionId: string;
  userRole: 'admin' | 'staff' | 'customer';
  expiresTimestamp: number;
}

// دالة تدقيق صارمة تفحص ما إذا كانت البيانات الخارجية صالحة وغير منتهية الصلاحية
function validateExternalSession(data: unknown): ExternalSessionData | null {
  // التحقق المبدئي من كونه كائناً غير فارغ
  if (typeof data !== 'object' || data === null) {
    return null;
  }

  // معاملة الكائن كخريطة خصائص مجهولة
  const candidate = data as Record<string, unknown>;

  // التحقق من المعرف
  if (typeof candidate.sessionId !== 'string' || candidate.sessionId.length < 5) {
    return null;
  }

  // التحقق من الدور المسموح به حصراً
  const allowedRoles = ['admin', 'staff', 'customer'];
  if (typeof candidate.userRole !== 'string' || !allowedRoles.includes(candidate.userRole)) {
    return null;
  }

  // التحقق من طابع الوقت
  if (typeof candidate.expiresTimestamp !== 'number') {
    return null;
  }

  // التحقق من أن الجلسة لم تنتهِ بعد في الوقت الحقيقي
  if (Date.now() > candidate.expiresTimestamp) {
    console.warn("الجلسة الخارجية منتهية الصلاحية");
    return null;
  }

  // إرجاع الكائن المطابق للواجهة بعد اجتياز كافة الاختبارات
  return {
    sessionId: candidate.sessionId,
    userRole: candidate.userRole as ExternalSessionData['userRole'],
    expiresTimestamp: candidate.expiresTimestamp
  };
}

// مكون بوابة الجلسة الخارجية الآمنة
export function ExternalSessionGuard() {
  // حالة الجلسة المفحوصة
  const [session, setSession] = useState<ExternalSessionData | null>(null);
  // حالة رسالة التنبيه
  const [statusMessage, setStatusMessage] = useState<string>("جاري فحص الجلسة الخارجية...");

  // دالة محاكاة قراءة بيانات خارجية غير موثوقة (مثل رسالة postMessage أو LocalStorage)
  const simulateExternalInput = (variant: 'valid' | 'corrupted' | 'expired') => {
    let mockRawData: unknown;

    if (variant === 'valid') {
      mockRawData = {
        sessionId: 'sess-secure-7719',
        userRole: 'admin',
        expiresTimestamp: Date.now() + 3600000 // صالحة لمدة ساعة
      };
    } else if (variant === 'corrupted') {
      // كائن تالف ينقصه خصائص ويحتوي دوراً غير مصرح به
      mockRawData = {
        sessionId: 12345, // رقم بدلاً من نص!
        userRole: 'super_hacker'
      };
    } else {
      // جلسة منتهية الصلاحية
      mockRawData = {
        sessionId: 'sess-old-001',
        userRole: 'staff',
        expiresTimestamp: Date.now() - 10000 // منتهية قبل 10 ثوانٍ
      };
    }

    // فحص البيانات الخارجية بنظام التدقيق الحازم
    const verified = validateExternalSession(mockRawData);

    if (verified) {
      setSession(verified);
      setStatusMessage("✅ تم التحقق من الجلسة بنجاح واعتماد الصلاحيات.");
    } else {
      setSession(null);
      setStatusMessage("❌ فشل التحقق: البيانات الخارجية غير مطابقة للمعايير أو منتهية الصلاحية.");
    }
  };

  // فحص الجلسة الأولية عند تحميل المكون
  useEffect(() => {
    simulateExternalInput('valid');
  }, []);

  // إرجاع واجهة المستخدم
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      <h3 className="text-xl font-bold text-teal-400 mb-2">فحص البيانات الخارجية (External Data Guard)</h3>
      <p className="text-xs text-slate-400 mb-4">
        محاكاة استقبال بيانات غير موثوقة من مصادر خارجية واختبار منظومة الرفض والقبول الآمنة.
      </p>

      {/* أزرار التجربة والمحاكاة */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => simulateExternalInput('valid')}
          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-semibold"
        >
          محاكاة بيانات سليمة
        </button>
        <button
          onClick={() => simulateExternalInput('corrupted')}
          className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 rounded-lg text-xs font-semibold"
        >
          محاكاة بيانات تالفة (Corrupted)
        </button>
        <button
          onClick={() => simulateExternalInput('expired')}
          className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 rounded-lg text-xs font-semibold"
        >
          محاكاة جلسة منتهية الصلاحية
        </button>
      </div>

      {/* رسالة الحالة */}
      <div className={\`p-3 rounded-xl border text-xs mb-4 \${session ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' : 'bg-rose-950/40 border-rose-800/60 text-rose-300'}\`}>
        {statusMessage}
      </div>

      {/* عرض بيانات الجلسة في حال قبولها */}
      {session && (
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1 text-xs font-mono">
          <p><span className="text-slate-400">معرف الجلسة:</span> {session.sessionId}</p>
          <p><span className="text-slate-400">دور المستخدم:</span> <span className="text-teal-300 font-bold">{session.userRole}</span></p>
          <p><span className="text-slate-400">تنتهي في:</span> {new Date(session.expiresTimestamp).toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "توضح الدالة `validateExternalSession` كيفية تحويل مدخلات مجهولة `unknown` قادمة من الخارج إلى نموذج معتمد `ExternalSessionData` بعد فحص كل شرط نوعي وزمني على حدة، مما يضمن حصانة التطبيق ضد أي خلل خارجي.",
      commonMistakes: [
        {
          mistake: "استخدام تأكيد النوع المباشر: `const data = JSON.parse(str) as UserProfile;` دون أي فحص",
          fix: "فكك النص أولاً كـ `unknown` ثم افحصه بواسطة Type Guard أو Zod للتأكد من بنية الحقول."
        },
        {
          mistake: "الثقة العمياء في استجابات APIs الخارجية بافتراض أنها لن تغير أسماء الحقول مستقبلاً",
          fix: "استخدم طبقة عازلة (Data Adapter/Parser) تتحقق من الحقول وتضع قيماً افتراضية قبل استخدام البيانات في المكونات."
        }
      ],
      bestPractices: [
        "عامل أي بيانات قادمة من `localStorage`, `sessionStorage`, `postMessage`, أو `WebSocket` كـ `unknown` دائماً.",
        "اصنع دوال Validation واضحة أو استعن بمكتبة Zod لبناء حواجز حماية متينة على حدود التطبيق الخارجية."
      ],
      infographic: {
        title: "بروتوكول فحص البيانات الخارجية",
        points: [
          "نقطة الدخول: البيانات القادمة من الخارج تُعامل حصراً كـ `unknown`.",
          "المختبر الأمني: دوال حراس الأنواع أو Zod Schema تفحص كل حقل وقيمته في زمن التشغيل.",
          "الاعتماد والترقية: لا يتم منح البيانات نوع الواجهة الداخلي إلا بعد اجتياز الفحص بالكامل."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q14.4.1",
      question: "ما الفائدة المعمارية الأهم لاستخدام `import type` في ملفات المكونات بدلاً من الاستيراد العادي؟",
      options: [
        "جعل تنفيذ الكود أسرع في متصفحات الجوال",
        "ضمان إزالة الاستيراد تماماً من شفرة جافاسكربت النهائية بواسطة الـ Bundler وتجنب مشاكل الاستيراد الدائري (Circular Dependencies)",
        "تمكين المتصفح من فحص الأنواع تلقائياً في زمن التشغيل",
        "تحويل جميع الواجهات إلى كائنات JSON في وقت البناء"
      ],
      correctAnswer: 1,
      explanation: "تضمن صياغة `import type` إخبار الـ Bundler بأن هذا الكيان هو مجرد نوع فقط، مما يؤدي لمسحه بنسبة 100% من حزمة الإنتاج ومنع تضارب الاعتماديات الدائرية."
    },
    {
      id: "q14.4.2",
      question: "كيف يحقق نمط Discriminated Unions مبدأ 'Making Impossible States Impossible' في إدارة واجهات المستخدم؟",
      options: [
        "بمنع المستخدم من النقر على الأزرار أثناء التحميل",
        "بحظر استخدام خطاف useState واستبداله حصراً بـ Redux",
        "بتعريف خاصية مميزة مثل status تجعل كل حالة تقتصر حصراً على بياناتها المنطقية وتمنع اجتماع حالات متناقضة كـ isLoading و error معاً",
        "بتشفير بيانات الواجهة قبل إرسالها إلى الخادم"
      ],
      correctAnswer: 2,
      explanation: "يجعل نمط Discriminated Union كل حالة كائناً مستقلاً بذاته يمتلك قيمة مميزة مثل `status: 'loading'` أو `status: 'success'`، مما يستحيل معه برمجياً وجود حالة تجمع بين النجاح والخطأ في آن واحد."
    },
    {
      id: "q14.4.3",
      question: "لماذا يفضل استخدام Zod مع المساعد `z.infer<typeof Schema>` في المشاريع الكبيرة؟",
      options: [
        "لأنه يوفر مصدراً وحيداً للحقيقة (Single Source of Truth) يجمع بين التحقق الفعلي في زمن التشغيل واستخراج نوع TypeScript دون تكرار الكود",
        "لأنه يحل محل محرك React بالكامل ويسرع تصيير المكونات",
        "لأنه يمنع المستخدمين من فتح أدوات المطورين في المتصفح",
        "لأنه يقوم بتحويل كود JavaScript القديم إلى TypeScript تلقائياً"
      ],
      correctAnswer: 0,
      explanation: "يتيح Zod للمطورين كتابة مخطط التحقق لزمن التشغيل مرة واحدة، ثم استخراج نوع TypeScript المتطابق معه بدقة عبر `z.infer`، مما ينهي مشكلة ازدواجية كتابة الكود وتعارض الأنواع."
    }
  ],
  exercise: {
    id: "ex-14.4",
    title: "تمرين عملي: بناء نظام تحقق متكامل لحالة واجهة برمجة التطبيقات بنمط Discriminated Union مع حراس الأنواع",
    description: "قم بإنشاء نمط حالة عام `AsyncData<T>` بنمط Discriminated Union يحتوي على 4 حالات: `idle`, `loading`, `success`, `error`. ثم اكتب دالة عامة `renderAsyncState` تستقبل هذه الحالة ودوال معالجة لكل سيناريو مع استخدام `never` للتأكد من استنفاذ كافة الحالات برمجياً.",
    hints: [
      "عرّف النوع باستخدام 4 كائنات متحدة: `{ status: 'idle' } | { status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; message: string }`.",
      "في جملة الـ `switch` داخل دالة المعالجة، استخدم جملة `default` تستدعي دالة تستقبل نوع `never` لضمان عدم نسيان أي حالة مستقبلاً."
    ],
    solution: `// 1. تعريف نمط الحالة العامة غير المتزامنة
export type AsyncData<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

// 2. دالة التحقق من استنفاذ كافة الحالات Exhaustiveness Checking
export function assertExhaustive(x: never): never {
  throw new Error(\`حالة غير متوقعة لم تتم معالجتها: \${JSON.stringify(x)}\`);
}

// 3. واجهة خيارات المعالجة لكل حالة
interface AsyncRenderHandlers<T, R> {
  onIdle: () => R;
  onLoading: () => R;
  onSuccess: (data: T) => R;
  onError: (message: string) => R;
}

// 4. دالة معالجة عامة تعيد القيمة المناسبة حسب الحالة بأمان تام
export function handleAsyncData<T, R>(
  state: AsyncData<T>,
  handlers: AsyncRenderHandlers<T, R>
): R {
  switch (state.status) {
    case 'idle':
      return handlers.onIdle();
    case 'loading':
      return handlers.onLoading();
    case 'success':
      // هنا يتعرف TypeScript تلقائياً على وجود state.data ونوعها T
      return handlers.onSuccess(state.data);
    case 'error':
      // هنا يتعرف TypeScript على وجود state.message
      return handlers.onError(state.message);
    default:
      // فحص الاستنفاذ التام للنوع never
      return assertExhaustive(state);
  }
}`
  },
  infographic: {
    title: "خارطة طريق TypeScript في المشاريع الكبيرة",
    nodes: [
      { id: "1", title: "API Envelopes", desc: "أغلفة موحدة للطلبات والترقيم عبر ApiResponse<T>" },
      { id: "2", title: "فصل الأنواع", desc: "ملفات مجالية مستقلة واستخدام import type لصفر بايت في الحزمة" },
      { id: "3", title: "Discriminated Unions", desc: "استبعاد الحالات المستحيلة وفحص استنفاذي بـ never" },
      { id: "4", title: "مخططات Zod", desc: "فحص زمن التشغيل واستخراج الأنواع بـ z.infer كمصدر وحيد للحقيقة" },
      { id: "5", title: "Redux & Query", desc: "خطافات مسبقة الأنواع مع withTypes و Tuple Query Keys" },
      { id: "6", title: "تطهير any", desc: "استبدال any بـ unknown وحراس الأنواع عند استقبال البيانات الخارجية" }
    ]
  }
};
