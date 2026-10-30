// e:\KD\lang\react\src\data\sections\section30\topic1.js
// الموضوع الأول من القسم 30: هندسة تطبيقات React الكبيرة (Feature-Based Architecture, Clean Architecture & Data Access)

export const topic1 = {
  id: "topic-30-1",
  title: "هندسة تطبيقات React الكبيرة (Enterprise React Architecture)",
  description: "دليل معماري متقدم لهندسة وبناء تطبيقات React المؤسسية الضخمة (Enterprise Apps): الهيكلة الموجهة بالميزات (Feature-Based Structure)، فصل منطق الأعمال النقي عن واجهات العرض، بناء طبقة وصول البيانات الموحدة (Data Access Layer - DAL)، إدارة الحالة الموسعة، تطبيق مبادئ الهندسة النظيفة (Clean Architecture & Ports/Adapters)، ونمط الحاويات والعرض الذكي (Container / Presentational Pattern).",
  subtopics: [
    {
      id: "30.1.a",
      title: "هيكلة المجلدات حسب الميزات (Feature-Based Architecture)",
      englishTerm: {
        term: "Feature-Based Folder Structure",
        pronunciation: "فيتشر بيسد فولدر ستراكشر",
        meaning: "تنظيم وهيكلة ملفات المشروع بناءً على الميزات الوظيفية للأعمال"
      },
      description: "في التطبيقات الصغيرة، يميل المطورون لهيكلة المشروع حسب النوع التقني للملفات (مثل مجلد components يجمع كل المكونات، ومجلد hooks يجمع كل الخطافات، ومجلد services يجمع كل ملفات الـ API). ولكن مع نمو التطبيق وتجاوزه مئات الشاشات، تفشل هذه الهيكلة المسطحة فشلاً ذريعاً لأن تعديل ميزة واحدة (مثل المصادقة أو سلة الشراء) يجبر المطور على القفز بين 6 مجلدات متباعدة. تعتمد الهيكلة الموجهة بالميزات (Feature-Based Architecture) على تجميع كل ما يخص الميزة الوظيفية الواحدة في مجلد مستقل ومكتفٍ ذاتياً (Self-Contained Module): مكوناته، خطافاته، نماذج بياناته (Types/Schemas)، واختباراته وواجهاته الخلفية، مع توفير نقطة تصدير موحدة ونظيفة (index.ts) تمثل العقد الخارجي للميزة.",
      realWorldAnalogy: "يشبه تنظيم الملفات حسب الميزات أقسام السوبرماركت الحديث المتكامل؛ حيث يضم قسم المخبوزات الفرن، المواد الخام، الرفوف، والموظفين في مساحة واحدة مستقلة؛ بدلاً من وضع كل المكونات في طابق أول، وكل الأفران في طابق ثانٍ، وكل العاملين في طابق ثالث وإجبار العامل على الصعود والنزول لصنع رغيف خبز واحد!",
      whyItMatters: "تتيح الهيكلة الموجهة بالميزات لفرق التطوير المتعددة العمل بالتوازي على ميزات مختلفة دون إعاقة بعضهم البعض، وتسهل حذف ميزة قديمة بالكامل بحذف مجلدها فقط دون ترك ملفات يتيمة مشتتة في المشروع، كما تقلل زمن تدريب وتأقلم المهندسين الجدد (Onboarding) بنسبة 60%؛ حيث يجد المطور كل تفاصيل الشاشة التي يعمل عليها أمامه مباشرة.",
      syntax: "// الهيكل الشجري للميزة المستقلة (src/features/checkout/):\n// checkout/\n// ├── api/ (استدعاءات الـ API والـ queries)\n// ├── components/ (مكونات العرض الخاصة بالميزة فقط)\n// ├── hooks/ (الخطافات المنطقية المعزولة)\n// ├── types/ (واجهات TypeScript والتحقق)\n// └── index.ts (واجهة التصدير العامة Public API للميزة)",
      simpleExample: `// استعراض محاكاة هيكلة ميزة المصادقة المستقلة وتصدير واجهتها العامة
import React, { useState } from 'react';

// 1. مكون فرعي داخلي خاص بالميزة (يُحفظ عادة في features/auth/components/LoginForm.jsx)
function InternalLoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  return (
    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs">
      <input 
        type="email" 
        placeholder="البريد الإلكتروني..." 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 bg-slate-900 border border-slate-700 rounded text-white mb-2"
      />
      <button 
        onClick={() => onLogin(email)}
        className="w-full py-1.5 bg-indigo-600 rounded text-white font-bold"
      >
        دخول
      </button>
    </div>
  );
}

// 2. المكون الرئيسي العام الذي يُصدره ملف features/auth/index.js
export function AuthFeatureWidget() {
  const [user, setUser] = useState(null);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <h4 className="font-bold text-sm mb-2 text-indigo-400">ميزة إدارة المصادقة (Feature Module)</h4>
      {user ? (
        <div className="text-xs text-emerald-400 font-mono">
          مرحباً بك: {user} | <button onClick={() => setUser(null)} className="underline text-rose-400">خروج</button>
        </div>
      ) : (
        <InternalLoginForm onLogin={(em) => setUser(em)} />
      )}
    </div>
  );
}`,
      advancedExample: `// استعراض شجرة المجلدات الموجهة بالميزات (Enterprise Feature-Based Explorer)
import React, { useState } from 'react';

// هيكل الميزات المعمارية للتطبيق المؤسسي
const ENTERPRISE_STRUCTURE = [
  {
    feature: 'auth',
    title: 'ميزة المصادقة والأمان',
    files: ['api/loginUser.ts', 'components/LoginForm.tsx', 'hooks/useAuth.ts', 'types/index.ts', 'index.ts'],
    responsibility: 'إدارة جلسات المستخدمين وتجديد التوكنات وعمليات تسجيل الدخول.'
  },
  {
    feature: 'billing',
    title: 'ميزة الفواتير والاشتراكات',
    files: ['api/checkoutSession.ts', 'components/PricingTable.tsx', 'hooks/useStripePayment.ts', 'types/invoice.ts', 'index.ts'],
    responsibility: 'معالجة بطاقات الدفع وتجديد الاشتراكات الشهرية وتحميل الفواتير PDF.'
  },
  {
    feature: 'notifications',
    title: 'ميزة الإشعارات الحية',
    files: ['api/streamNotifications.ts', 'components/NotificationBell.tsx', 'hooks/useWebSocket.ts', 'types/alerts.ts', 'index.ts'],
    responsibility: 'استقبال التنبيهات الفورية عبر WebSocket وعرض التنبيهات المنبثقة.'
  }
];

// مكون استعراض الهيكلة الموجهة بالميزات
export function FeatureArchitectureViewer() {
  // تتبع الميزة المختارة للاستعراض
  const [selectedFeature, setSelectedFeature] = useState(ENTERPRISE_STRUCTURE[0]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold">الهيكلة الموجهة بالميزات (Feature-Sliced Design)</h3>
          <p className="text-xs text-slate-400 mt-1">تجميع المنطق والمكونات والأنواع الخاصة بكل نطاق أعمال في مجلد مستقل</p>
        </div>
        <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20">
          Domain-Driven UI
        </span>
      </div>

      {/* قائمة الميزات للاختيار */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {ENTERPRISE_STRUCTURE.map((f) => (
          <button
            key={f.feature}
            onClick={() => setSelectedFeature(f)}
            className={\`p-3 rounded-xl text-right transition border \${
              selectedFeature.feature === f.feature
                ? 'bg-indigo-600/20 border-indigo-500 text-white'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800/40'
            }\`}
          >
            <span className="font-mono text-xs text-indigo-400 block font-bold">src/features/{f.feature}</span>
            <span className="text-xs font-semibold block mt-1">{f.title}</span>
          </button>
        ))}
      </div>

      {/* تفاصيل الميزة المختارة ومحتويات ملفاتها */}
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
        <h4 className="text-sm font-bold text-slate-200 mb-1">مسؤولية النطاق: {selectedFeature.title}</h4>
        <p className="text-xs text-slate-400 mb-4">{selectedFeature.responsibility}</p>

        <span className="text-xs text-slate-500 block mb-2 font-mono">الملفات المعزولة داخل مجلد الميزة:</span>
        <div className="space-y-1.5 font-mono text-xs">
          {selectedFeature.files.map((file, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-300 bg-slate-900/60 p-2 rounded border border-slate-800">
              <span className="text-indigo-400">📄</span>
              <span>src/features/{selectedFeature.feature}/{file}</span>
              {file === 'index.ts' && (
                <span className="mr-auto text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">
                  Public API العقد الخارجي
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400">
        🔒 <strong className="text-slate-300">قاعدة الاستيراد الصارمة:</strong> لا يُسمح للميزات الأخرى باستيراد أي ملف داخلي مباشرة؛ بل يجب استيراد ما يتم تصديره فقط عبر ملف <code className="text-indigo-300">index.ts</code> التابع للميزة لمنع التشابك المعماري.
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية هيكلة المشاريع الكبرى إلى ميزات مستقلة (Features)، حيث يحتوي كل مجلد على كافة الأصول البرمجية التي تخدم نطاق أعمال محدد، وتفرض القاعدة المعمارية استخدام ملف index.ts كبوابة رسمية وحيدة تمنع تسرب التفاصيل الداخلية للميزات الأخرى.",
      commonMistakes: [
        {
          mistake: "استيراد ملفات داخلية عميقة لميزة معينة من داخل ميزة أخرى (Deep Imports مثل: import { helper } from '../billing/components/internal/calc').",
          why: "الاستيراد العميق يكسر كبسلة الميزة (Encapsulation) ويخلق اعتماديات دائرية متشابكة (Spaghetti Dependencies) تجعل تعديل أو حذف أي ميزة أمراً مستحيلاً دون كسر التطبيق.",
          fix: "صدّر الدوال والمكونات المسموح بمشاركتها فقط عبر ملف index.ts الخاص بالميزة، واستورد دائماً من المسار الجذري للميزة."
        },
        {
          mistake: "إنشاء ميزة جديدة لكل زر أو مكون بصري بسيط لا يمثل نطاق أعمال حقيقي.",
          why: "المبالغة في إنشاء الميزات يشتت بنية المشروع؛ حيث يجب حجز مجلد الميزات لنطاقات الأعمال المتكاملة (Business Domains).",
          fix: "ضع المكونات البصرية العامة (مثل الأزرار وحقول الإدخال والوسوم) في مجلد مركزي مثل src/components أو src/shared."
        }
      ],
      bestPractices: [
        "استخدم أداة ESLint مع إضافة eslint-plugin-boundaries لمنع الاستيراد العميق بين الميزات وفرض قواعد معمارية صارمة تلقائياً.",
        "اجعل كل ميزة تمتلك اختباراتها الخاصة بها بجوار ملفاتها (Co-location) لتسهيل تعديلها واختبارها كوحدة مستقلة.",
        "وفّر مجلداً مشتركاً src/shared للأدوات المساعدة (Utilities) والمكونات الأساسية المستخدمة في أكثر من 3 ميزات.",
        "وثّق مسؤوليات كل ميزة في ملف README.md مصغر يوضع في جذر مجلد الميزة لتسهيل انضمام المطورين الجدد."
      ],
      visualInfographic: {
        title: "معمارية الميزات المستقلة (Feature-Driven Architecture)",
        description: "كيف يتم تنظيم المشروع الضخم في ميزات مكتفية ذاتياً",
        visualSteps: [
          "تحديد نطاقات الأعمال 🏬 (المصادقة، الفواتير، الإشعارات، المنتجات)",
          "تجميع الأصول التابعة 📦 (API + Hooks + Components + Types معاً)",
          "تحديد الواجهة الخارجية 🚪 (Public API عبر ملف index.ts الموحد)",
          "حظر الاستيراد العميق 🛑 (منع التشابك وضمان الكبسلة البرمجية الكاملة)",
          "المرونة والصيانة الفائقة 🚀 (إمكانية إضافة أو حذف الميزات بسهولة تامة)"
        ]
      }
    },
    {
      id: "30.1.b",
      title: "فصل منطق الأعمال عن واجهة المستخدم (Business Logic Decoupling)",
      englishTerm: {
        term: "Business Logic Decoupling",
        pronunciation: "بيزنس لوجيك ديكابلينغ",
        meaning: "فصل الحسابات والقواعد المنطقية عن شفرة عرض واجهة React"
      },
      description: "في كود React غير المنضبط، يمتزج منطق الأعمال الحرج (مثل: حسابات الضرائب، الخصومات الترويجية، التحقق من الصلاحيات، وتحويل هياكل البيانات) مع شفرة الـ JSX وأحداث الواجهة (onClick / onChange). يؤدي هذا التداخل إلى كارثة صيانة حقيقية؛ حيث يتعذر اختبار منطق الحسابات دون تشغيل متصفح كامل وتصيير الواجهة، ويتعذر تغيير شكل التصميم دون المخاطرة بإفساد الحسابات المالية. يعني فصل منطق الأعمال عزل كافة القواعد الحسابية والمنطقية في دوال نقية (Pure Functions) وخطافات مخصصة (Custom Hooks) مستقلة تماماً عن أي شفرة JSX، مما يجعل واجهة React مجرد طبقة عرض رقيقة وغبية (Thin Presentation Layer) تتلقى البيانات الجاهزة وتعرضها فقط.",
      realWorldAnalogy: "يشبه فصل منطق الأعمال عن الواجهة تصميم الساعات السويسرية الفاخرة؛ فالمحرك الميكانيكي الداخلي الدقيق (منطق الحسابات والتروس) معزول ومحمي ومصنوع بحرفية عالية بشكل مستقل عن زجاج الساعة ومينا الأرقام والإطار الذهبي الخارجي (واجهة العرض)؛ يمكنك تغيير لون الإطار أو شكل العقارب دون المساس بآلية ضبط الوقت الداخلية.",
      whyItMatters: "تكمن الفائدة الكبرى في سهولة الاختبار وموثوقية النظام؛ فالدوال النقية المعزولة عن React يمكن اختبارها بسرعة البرق عبر Jest أو Vitest دون الحاجة لأي محاكاة للمتصفح (DOM Mocks). كما يتيح هذا الفصل إعادة استخدام نفس منطق الأعمال في تطبيقات أخرى تماماً (مثل تطبيق React Native للهواتف أو تطبيق CLI الداخلي) دون إعادة كتابة سطر واحد.",
      syntax: "// 1. منطق الأعمال معزول كدالة نقية ومستقلة تماماً عن React:\nexport function calculateCartTotal(items, discountRate = 0, taxRate = 0.15) {\n  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);\n  const discount = subtotal * discountRate;\n  const tax = (subtotal - discount) * taxRate;\n  return { subtotal, discount, tax, total: subtotal - discount + tax };\n}",
      simpleExample: `// مقارنة بين منطق الحساب الممزوج بالواجهة والمنطق المفصول بأناقة
import React, { useState } from 'react';

// أسلوب نقي ومعزول: دالة منطق أعمال خالصة قابلة للاختبار المستقل
export function computeDiscountedPrice(price, couponCode) {
  if (couponCode === 'SAVE20') {
    return price * 0.8; // خصم 20%
  }
  return price;
}

// مكون واجهة العرض الرشيق: يستدعي المنطق فقط دون معرفة تفاصيل المعادلة
export function PricingDisplayWidget() {
  const [coupon, setCoupon] = useState('');
  const originalPrice = 100;
  // استدعاء دالة المنطق المعزولة
  const finalPrice = computeDiscountedPrice(originalPrice, coupon);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs">
      <span className="text-xs text-slate-400 block mb-1">السعر الأصلي: \${originalPrice}</span>
      <div className="text-2xl font-bold font-mono text-emerald-400 mb-3">
        السعر النهائي: \${finalPrice.toFixed(2)}
      </div>

      <input 
        type="text" 
        placeholder="أدخل كود الخصم (جرب SAVE20)..." 
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-xs text-white"
      />
    </div>
  );
}`,
      advancedExample: `// نظام حسابات مالية واشتراكات مؤسسية يفصل منطق النطاق (Domain Logic) عن واجهة React
import React, { useState } from 'react';

// ==========================================
// 1. طبقة منطق الأعمال الخالصة (Pure Domain Logic)
// ==========================================
export class SubscriptionBillingEngine {
  // حساب تكلفة الاشتراك مع الضرائب والخصومات السنوية
  static calculatePlanCost(tier, billingCycle, userCount) {
    const baseRates = { starter: 10, business: 25, enterprise: 50 };
    const basePrice = (baseRates[tier] || 10) * userCount;
    
    // خصم 20% عند الدفع السنوي
    const isYearly = billingCycle === 'yearly';
    const discountMultiplier = isYearly ? 0.8 : 1.0;
    const subtotal = basePrice * (isYearly ? 12 : 1) * discountMultiplier;
    
    // ضريبة القيمة المضافة 15%
    const taxAmount = subtotal * 0.15;
    const grandTotal = subtotal + taxAmount;

    return {
      monthlyEquivalent: Math.round(grandTotal / (isYearly ? 12 : 1)),
      subtotal: Math.round(subtotal),
      taxAmount: Math.round(taxAmount),
      grandTotal: Math.round(grandTotal),
      savings: isYearly ? Math.round(basePrice * 12 * 0.2) : 0
    };
  }
}

// ==========================================
// 2. طبقة العرض وتفاعل المستخدم (React Presenter)
// ==========================================
export function SubscriptionCalculatorUI() {
  const [tier, setTier] = useState('business');
  const [cycle, setCycle] = useState('yearly');
  const [users, setUsers] = useState(5);

  // استدعاء محرك منطق الأعمال المعزول للحصول على الأرقام الدقيقة
  const calculation = SubscriptionBillingEngine.calculatePlanCost(tier, cycle, users);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold">حاسبة الاشتراكات (Decoupled Logic Demo)</h3>
          <p className="text-xs text-slate-400 mt-1">محرك الحسابات المالية معزول 100% في كلاس نقي خارج دورة حياة React</p>
        </div>
        <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
          Domain Engine
        </span>
      </div>

      {/* خيارات الحساب */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-xs text-slate-400 block mb-1">نوع الباقة:</label>
          <select 
            value={tier} 
            onChange={(e) => setTier(e.target.value)}
            className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white"
          >
            <option value="starter">المبتدئين ($10/مستخدم)</option>
            <option value="business">الشركات ($25/مستخدم)</option>
            <option value="enterprise">المؤسسات الكبرى ($50/مستخدم)</option>
          </select>
        </div>

        <div>
          <label className="text-xs text-slate-400 block mb-1">دورة الفوترة:</label>
          <select 
            value={cycle} 
            onChange={(e) => setCycle(e.target.value)}
            className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white"
          >
            <option value="monthly">شهرياً (سعر كامل)</option>
            <option value="yearly">سنوياً (خصم 20%)</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-xs text-slate-400 mb-1">
          <span>عدد تراخيص الموظفين:</span>
          <span className="font-mono font-bold text-indigo-400">{users} موظفين</span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="50" 
          value={users} 
          onChange={(e) => setUsers(Number(e.target.value))}
          className="w-full accent-indigo-600 cursor-pointer"
        />
      </div>

      {/* نتائج الحساب المعزول */}
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
        <div className="flex justify-between text-slate-400">
          <span>المبلغ الفرعي:</span>
          <span className="font-mono">\${calculation.subtotal}</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>ضريبة القيمة المضافة (15%):</span>
          <span className="font-mono">\${calculation.taxAmount}</span>
        </div>
        {calculation.savings > 0 && (
          <div className="flex justify-between text-emerald-400 font-bold">
            <span>وفرت مع الدفع السنوي:</span>
            <span className="font-mono">-\${calculation.savings}</span>
          </div>
        )}
        <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-sm font-bold text-white">
          <span>الإجمالي النهائي المطلوب:</span>
          <span className="text-xl font-mono text-cyan-400">\${calculation.grandTotal}</span>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال المعماري الفصل التام بين منطق الحسابات المالية المعقد (SubscriptionBillingEngine) ومكون واجهة العرض في React؛ حيث يمكن تعديل خوارزميات الحساب واختبارها عبر Unit Tests بأمان مطلق دون تشغيل المتصفح، بينما تقتصر وظيفة المكون على استقبال اختيارات الزائر وعرض النتائج.",
      commonMistakes: [
        {
          mistake: "كتابة معادلات الحسابات المعقدة وتصفية البيانات الطويلة داخل جسم الـ JSX مباشرة.",
          why: "يؤدي ذلك إلى إعادة حساب المعادلات الثقيلة مع كل تصيير عشوائي للواجهة، ويجعل الـ JSX غير قابل للقراءة، ويمنع كتابة اختبارات وحدات مستقلة للمنطق.",
          fix: "استخرج الحسابات دائماً إلى دوال نقية في ملفات منفصلة مثل calculations.ts واستدعِها بسهولة."
        },
        {
          mistake: "تمرير كائنات أو دوال تعتمد على نافذة window أو مستند document إلى دوال منطق الأعمال.",
          why: "ربط دوال المنطق بكائنات المتصفح يجعلها غير قابلة للتشغيل في بيئة Node.js للاختبارات السريعة ويفسد نقاء الدالة.",
          fix: "اجعل دوال منطق الأعمال تستقبل فقط قيم بدائية (نصوص، أرقام، مصفوفات) وتعيد نتائج نقية دون أي اعتماد على بيئة التشغيل."
        }
      ],
      bestPractices: [
        "اجعل دوال منطق الأعمال Pure Functions لا تغير في المتغيرات الخارجية وتعيد دائماً نفس النتيجة لنفس المدخلات.",
        "اكتب اختبارات وحدات (Unit Tests) تغطي كافة الحالات الحدية (Edge Cases) لدوال منطق الأعمال بنسبة تغطية 100%.",
        "استخدم Custom Hooks كطبقة وسيطة (Adapter Layer) لربط دوال منطق الأعمال النقية بحالة ودورة حياة React.",
        "نظم دوال منطق الأعمال في مجلد خاص مثل domain/ أو services/ داخل الميزة التابعة لها."
      ],
      visualInfographic: {
        title: "فصل منطق الأعمال عن واجهة العرض (Decoupled Architecture)",
        description: "كيف تتدفق البيانات بين محرك الحسابات وطبقة العرض في React",
        visualSteps: [
          "طبقة واجهة العرض 🎨 (React UI تلتقط نقرات المستخدم وترسل الأحداث)",
          "طبقة الوساطة والحالة 🎛️ (Custom Hooks تنظم الحالة وتستدعي المنطق)",
          "طبقة منطق الأعمال النقي 🧠 (Pure Domain Functions تجري العمليات الحسابية)",
          "سهولة الاختبار المستقل 🧪 (اختبار المنطق في أجزاء من الثانية دون DOM)",
          "إعادة الاستخدام المطلقة 🔄 (إمكانية استخدام المنطق في الويب والهواتف والخادم)"
        ]
      }
    },
    {
      id: "30.1.c",
      title: "إنشاء طبقة الوصول إلى البيانات (Data Access Layer - DAL)",
      englishTerm: {
        term: "Data Access Layer (DAL)",
        pronunciation: "داتا أكسيس لاير",
        meaning: "طبقة الوصول الموحدة للبيانات وفصل تفاصيل الشبكة عن المكونات"
      },
      description: "طبقة الوصول إلى البيانات (Data Access Layer - DAL) هي نمط معماري مؤسسي يعزل ويوحد كافة عمليات جلب وتحديث وحفظ البيانات (سواء كانت قادمة من REST API أو GraphQL أو Supabase أو التخزين المحلي) في واجهة برمجية موحدة ومنظمة. بدلاً من أن يستدعي كل مكون React دالة fetch أو مكتبة Axios بشكل عشوائي، تتدخل طبقة الـ DAL لتكون البوابة الوحيدة؛ حيث تتولى: حقن ترويسات الأمان والمصادقة، تحويل البيانات واستخراج الحقول المطلوبة (Data Mapping & Normalization)، والتحقق من صحة وصلاحية الاستجابة باستخدام مخططات مثل Zod. إذا قررت الشركة غداً استبدال خادم REST بخادم GraphQL، فإن التعديل يقتصر على طبقة الـ DAL دون المساس بأي مكون في واجهة المستخدم.",
      realWorldAnalogy: "تشبه طبقة الوصول إلى البيانات (DAL) النادل المحترف في المطعم الفاخر؛ فالزبون (مكون React) يطلب وجبة معينة من القائمة دون أن يحتاج لمعرفة هل الفرن يعمل بالغاز أم الكهرباء، أو من أي مزود جملة تم شراء اللحم؛ النادل يتكفل بجلب الوجبة جاهزة ومطابقة للمواصفات المطلوبة.",
      whyItMatters: "يمنع الـ DAL تكرار معالجة الترويسات والأخطاء في عشرات المكونات، ويحمي التطبيق من التغيرات المفاجئة في هيكل استجابة الخادم الخلفي عبر الـ Data Adapters، ويسهل إنشاء بيانات وهمية ومحاكاة الاستجابة (Mocking) أثناء اختبار المكونات واختبارات القبول.",
      syntax: "// نموذج خدمة DAL الموحدة:\nexport const userDAL = {\n  async getProfile(userId) {\n    const raw = await httpClient.get(`/users/${userId}`);\n    return userSchema.parse(raw); // التحقق والتحويل\n  }\n};",
      simpleExample: `// استعراض طبقة DAL مبسّطة تعزل استدعاءات الشبكة عن مكونات React
import React, { useState, useEffect } from 'react';

// طبقة الوصول إلى البيانات (DAL Module)
const productDAL = {
  // دالة موحدة لجلب وتجهيز بيانات المنتج
  async fetchFeaturedProduct() {
    const res = await fetch('https://dummyjson.com/products/1');
    const data = await res.json();
    // تحويل البيانات واستخراج الحقول المطلوبة للواجهة فقط
    return {
      id: data.id,
      title: data.title,
      priceFormatted: \`\$\${data.price}\`,
      inStock: data.stock > 0
    };
  }
};

// مكون واجهة العرض: يطلب البيانات من الـ DAL دون معرفة تفاصيل الـ URL أو الـ fetch
export function DALProductCard() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    productDAL.fetchFeaturedProduct().then(setProduct);
  }, []);

  if (!product) return <div className="text-xs text-slate-500">جاري الجلب عبر DAL...</div>;

  return (
    <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs">
      <h4 className="font-bold text-sm">{product.title}</h4>
      <p className="text-xs text-emerald-400 font-mono mt-1">{product.priceFormatted}</p>
      <span className="text-[10px] text-slate-400 mt-2 block">
        {product.inStock ? 'متوفر بالمخزون' : 'نفذت الكمية'}
      </span>
    </div>
  );
}`,
      advancedExample: `// نظام متكامل لطبقة الوصول للبيانات (DAL) مع التحقق عبر Zod وتحويل النماذج (Data Adapters)
import React, { useState } from 'react';

// ==========================================
// 1. تعريف واجهات ونماذج البيانات والتحقق
// ==========================================
// محاكاة نموذج تحقق يحمي الواجهة من تشوهات بيانات الخادم
class UserModelAdapter {
  static adaptFromApi(rawApiResponse) {
    // التحقق والتطهير والتحويل (Data Transformation)
    return {
      id: rawApiResponse.id || 'N/A',
      fullName: \`\${rawApiResponse.first_name || ''} \${rawApiResponse.last_name || ''}\`.trim() || 'مستخدم غير معروف',
      email: rawApiResponse.user_email || rawApiResponse.email || 'لا يوجد بريد',
      tierBadge: rawApiResponse.is_vip ? 'عميل مميز VIP' : 'عضو قياسي',
      avatarUrl: rawApiResponse.avatar_url || 'https://via.placeholder.com/40'
    };
  }
}

// ==========================================
// 2. طبقة الوصول للبيانات المركزية (Central Data Access Layer)
// ==========================================
class UserDataAccessLayer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  // دالة موحدة لإرسال الطلبات مع الترويسات ومعالجة الأخطاء
  async executeRequest(path, options = {}) {
    const response = await fetch(\`\${this.baseUrl}\${path}\`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sample-session-jwt-token',
        ...(options.headers || {})
      }
    });

    if (!response.ok) {
      throw new Error(\`DAL_ERROR_\${response.status}: فشل استرداد البيانات من المصدر.\`);
    }

    return await response.json();
  }

  // استعلام جلب المستخدم وتمريره عبر المحول
  async getUserById(id) {
    // محاكاة جلب بيانات مع معالجة التنسيق
    const raw = await this.executeRequest(\`/users/\${id}\`);
    // تكييف البيانات وتحويلها للشكل المعياري الذي تتوقعه واجهة React
    return UserModelAdapter.adaptFromApi(raw);
  }
}

// تهيئة عميل الـ DAL
const dalInstance = new UserDataAccessLayer('https://reqres.in/api');

// ==========================================
// 3. مكون واجهة React المستهلك لطبقة الـ DAL
// ==========================================
export function DALExplorerStudio() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // استدعاء البيانات عبر طبقة الـ DAL حصراً
  const loadUser = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      // الواجهة تطلب الكائن المعياري مباشرة بنقرة واحدة
      const user = await dalInstance.getUserById(2);
      setUserData(user);
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-4">
        <div>
          <h3 className="text-base font-bold">طبقة الوصول للبيانات (DAL)</h3>
          <p className="text-xs text-slate-400">عزل تفاصيل الشبكة والترويسات ومواءمة البيانات</p>
        </div>
        <span className="text-xs font-mono bg-cyan-500/10 text-cyan-400 px-2.5 py-1 rounded-full border border-cyan-500/20">
          DAL Active
        </span>
      </div>

      <button 
        onClick={loadUser}
        disabled={loading}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl transition shadow disabled:opacity-50 mb-4"
      >
        {loading ? 'جاري جلب البيانات عبر DAL...' : 'طلب بيانات المستخدم الموحدة'}
      </button>

      {errorMsg && (
        <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-xs mb-3">
          {errorMsg}
        </div>
      )}

      {userData && (
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold text-sm text-slate-200">{userData.fullName}</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">
              {userData.tierBadge}
            </span>
          </div>
          <p className="text-slate-400 font-mono">{userData.email}</p>
          <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800">
            تمت المواءمة والتحقق عبر UserModelAdapter بنجاح.
          </div>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "توضح هذه البنية كيف تعمل طبقة DAL كحاجز حماية وتنظيم بين خوادم الشبكة ومكونات React؛ حيث تتولى إرسال الترويسات وحقن التوكنات، ثم تطبق Data Adapters لتحويل استجابة الخادم الخام إلى كائنات منسقة وموثوقة تفهمها المكونات مباشرة.",
      commonMistakes: [
        {
          mistake: "استدعاء fetch أو axios مباشرة داخل useEffect في كل مكون بصري.",
          why: "هذا التشتت يجعل تغيير رابط الـ API أو تحديث آليات المصادقة كابوساً يتطلب تعديل مئات الملفات، ويؤدي إلى تكرار كود معالجة الأخطاء والترويسات.",
          fix: "اجمع كافة استدعاءات الشبكة في دوال وموديلات DAL مخصصة ولا تسمح لأي مكون باستدعاء fetch بشكل مباشر."
        },
        {
          mistake: "إرجاع كائن استجابة الـ API الخام (Raw Response) مباشرة إلى شجرة المكونات دون مواءمة أو تصفية.",
          why: "إذا غيّر مطورو الباك إند اسم حقل من user_name إلى username، ستنهار كافة الشاشات التي تعتمد على الحقل القديم في آن واحد.",
          fix: "استخدم نمط المحول (Adapter Pattern) في طبقة الـ DAL لتوحيد مسميات الحقول والتأكد من مطابقتها لنماذج واجهة المستخدم."
        }
      ],
      bestPractices: [
        "ادمج مكتبات التحقق من المخططات مثل Zod في طبقة الـ DAL للتأكد التلقائي من سلامة البيانات القادمة من الخادم (Runtime Validation).",
        "اربط طبقة الـ DAL بمكتبات إدارة التخزين المؤقت الذكي مثل TanStack Query (React Query) للاستفادة من إعادة المحاولة والتخزين المؤقت.",
        "وفّر واجهات برمجية وهمية (Mock DAL) لتسهيل تطوير واجهات React بشكل مستقل حتى قبل أن يكتمل بناء الـ API في الخادم الخلفي.",
        "عزز طبقة الـ DAL بمعالجة موحدة للأخطاء (Unified Error Handling) لتصنيف أخطاء الشبكة، والمصادقة، وصلاحيات الوصول."
      ],
      visualInfographic: {
        title: "طبقة الوصول الموحد للبيانات (Data Access Layer - DAL)",
        description: "كيف تعزل طبقة الـ DAL تفاصيل الشبكة عن مكونات العرض في React",
        visualSteps: [
          "طلب المكون للبيانات 📱 (استدعاء دالة dal.getUserProfile)",
          "طبقة الـ DAL الموحدة 🛡️ (حقن الترويسات، التوكنات، وإدارة الـ Timeout)",
          "استدعاء الشبكة الخارجي 🌐 (تنفيذ طلب HTTP / REST / GraphQL)",
          "المواءمة والتحقق عبر Zod ⚖️ (تكييف استجابة الخادم وتحويل الحقول)",
          "تسليم كائن نقي للواجهة 📦 (مكون React يتلقى بيانات مطابقة 100%)"
        ]
      }
    },
    {
      id: "30.1.d",
      title: "إدارة الحالة على مستوى التطبيق الكبير (Enterprise State Management)",
      englishTerm: {
        term: "Enterprise State Management Architecture",
        pronunciation: "إنتربرايز ستيت مانيجمنت أركيتكشر",
        meaning: "استراتيجيات تقسيم وإدارة الحالة في التطبيقات واسعة النطاق"
      },
      description: "في التطبيقات المؤسسية الضخمة، يُعد الفشل في تصنيف وإدارة الحالة (State Management) السبب الأكبر وراء تدهور أداء التطبيق وتشابك الكود البرمجي. لا توجد مكتبة واحدة تناسب كل أنواع البيانات؛ بل يعتمد مهندسو React المحترفون على استراتيجية 'تصنيف وفصل الحالات' إلى أربعة أنواع رئيسية: 1) حالة الخادم (Server State مثل بيانات المنتجات والمستخدمين) وتُدار عبر TanStack Query؛ 2) حالة واجهة المستخدم العالمية (Global UI State مثل السمات والقوائم المنسدلة والتنبيهات) وتُدار بمكتبات رشيقة مثل Zustand؛ 3) حالة النموذج المحلي (Form State) وتُدار عبر React Hook Form؛ 4) حالة رابط الصفحة (URL State) وتُدار عبر معلمات الرابط (URL Search Params). يمنع هذا التصنيف تضخم الذاكرة ويضمن بقاء التطبيق خفيفاً وسريع الاستجابة.",
      realWorldAnalogy: "يشبه تقسيم الحالة في التطبيقات الكبيرة تنظيم الخزائن والمستودعات في الشركات العملاقة؛ فالمستندات القانونية المهمة (حالة الخادم) توضع في خزنة محصنة مع نسخ احتياطي؛ بينما إشارات الإرشاد في الممرات (حالة الواجهة) تعلق على الجدران؛ وأوراق المسودات اليومية (حالة النماذج المؤقتة) تظل على مكاتب الموظفين؛ خلط كل هذه الأوراق في درج واحد ينشئ فوضى عارمة.",
      whyItMatters: "تخزين بيانات الخادم داخل متاجر الحالة العالمية مثل Redux بشكل يدوي يجبر المطورين على كتابة آلاف الأسطر المكررة لمعالجة التحميل، الأخطاء، وإعادة جلب البيانات (Re-fetching). بينما يمنحك فصل الحالات تحديثاً فورياً، وإلغاءً ذكياً للتكرار (Deduplication)، ومزامنة فورية مع تصيير رشيق للمكونات المعنية فقط.",
      syntax: "// الهيكل المثالي لتوزيع الحالات:\n// 1. حالة الخادم: const { data } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });\n// 2. حالة الواجهة العالمية: const isSidebarOpen = useUIStore((s) => s.isSidebarOpen);\n// 3. حالة الرابط: const [searchParams, setSearchParams] = useSearchParams();",
      simpleExample: `// استعراض محاكاة تقسيم الحالة بين متجر الواجهة العالمي ومخزن بيانات الخادم
import React, { useState } from 'react';

// 1. متجر حالة الواجهة العالمية (محاكاة Zustand خفيفة)
let globalSidebarOpen = true;
const listeners = new Set();
const toggleSidebar = () => {
  globalSidebarOpen = !globalSidebarOpen;
  listeners.forEach(fn => fn(globalSidebarOpen));
};

// 2. مكون يعتمد على حالة الواجهة العالمية
export function GlobalStateDemo() {
  const [isOpen, setIsOpen] = useState(globalSidebarOpen);

  React.useEffect(() => {
    listeners.add(setIsOpen);
    return () => listeners.delete(setIsOpen);
  }, []);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-xs text-slate-300">حالة الواجهة العالمية (UI State)</h4>
        <button 
          onClick={toggleSidebar}
          className="px-2.5 py-1 bg-indigo-600 rounded text-xs font-bold"
        >
          تبديل القائمة
        </button>
      </div>
      <p className="text-xs text-slate-400">
        حالة القائمة الجانبية في الذاكرة: <span className="font-mono text-cyan-400 font-bold">{isOpen ? 'مفتوحة (OPEN)' : 'مغلقة (CLOSED)'}</span>
      </p>
    </div>
  );
}`,
      advancedExample: `// استوديو معماري تفاعلي يجسد تصنيف الحالات الأربعة في التطبيقات الكبيرة (The 4 Pillars of State)
import React, { useState } from 'react';

// مكون استعراض استراتيجية توزيع الحالات في الأنظمة المؤسسية
export function StateMatrixStudio() {
  // تتبع المحور المختار للاستعراض
  const [selectedPillar, setSelectedPillar] = useState('server');

  // الأعمدة الأربعة لإدارة الحالة
  const statePillars = {
    server: {
      title: 'حالة الخادم (Server State)',
      tool: 'TanStack Query / SWR',
      description: 'البيانات الموجودة في الخادم وتتطلب مزامنة دورية وتخزيناً مؤقتاً ومعالجة حالات التحميل والأخطاء.',
      examples: ['قائمة المنتجات', 'بيانات الملف الشخصي للمستخدم', 'سجل الفواتير'],
      rule: 'لا تخزن بيانات الخادم في Redux أو Zustand يدوياً؛ دع TanStack Query يديرها.'
    },
    clientUI: {
      title: 'حالة الواجهة العامة (Global UI State)',
      tool: 'Zustand / Jotai',
      description: 'البيانات التفاعلية العابرة التي تؤثر على مظهر الواجهة عبر شاشات متعددة ولا تحتاج للحفظ في قاعدة بيانات.',
      examples: ['السمة المظلمة / الفاتحة', 'حالة فتح/إغلاق القائمة الجانبية', 'نوافذ التنبيه المنبثقة'],
      rule: 'احرص على أن تكون الستورات صغيرة ومخصصة ومجزأة (Atomic / Sliced).'
    },
    url: {
      title: 'حالة الرابط (URL State)',
      tool: 'React Router / Nuqs',
      description: 'البيانات التي تحدد ما يراه المستخدم ويجب الحفاظ عليها عند مشاركة الرابط أو إعادة تحميل الصفحة.',
      examples: ['رقم الصفحة الحالية ?page=2', 'كلمة البحث ?q=react', 'خيارات الفرز والتصفية ?sort=desc'],
      rule: 'أي حالة ترغب بأن تبقى عند إرسال الرابط لصديق يجب أن تكون في الـ URL.'
    },
    form: {
      title: 'حالة النماذج المؤقتة (Form State)',
      tool: 'React Hook Form + Zod',
      description: 'البيانات المدخلة في الحقول أثناء كتابة المستخدم قبل إرسالها للخادم.',
      examples: ['نصوص الحقول', 'أخطاء التحقق المؤقتة', 'حالة لمس الحقل dirty / touched'],
      rule: 'لا تضع مدخلات كل ضغطة مفتاح في useState عام؛ استخدم Uncontrolled Forms.'
    }
  };

  const current = statePillars[selectedPillar];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold">مصفوفة إدارة الحالات المؤسسية (State Taxonomy)</h3>
          <p className="text-xs text-slate-400 mt-1">توزيع وإدارة الحالة وفق طبيعتها لضمان الأداء الفائق وتفادي إعادة التصيير</p>
        </div>
        <span className="text-xs font-mono bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full border border-violet-500/20">
          State Strategy
        </span>
      </div>

      {/* أزرار اختيار ركائز الحالة */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {Object.entries(statePillars).map(([key, item]) => (
          <button
            key={key}
            onClick={() => setSelectedPillar(key)}
            className={\`p-3 rounded-xl text-center text-xs font-bold transition border \${
              selectedPillar === key
                ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800/40'
            }\`}
          >
            {item.title.split(' ')[0]} {item.title.split(' ')[1]}
          </button>
        ))}
      </div>

      {/* بطاقة تفاصيل الركيزة المعمارية */}
      <div className="p-5 bg-slate-950 rounded-xl border border-slate-800">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-base font-bold text-slate-200">{current.title}</h4>
          <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/30">
            الأداة المثالية: {current.tool}
          </span>
        </div>
        
        <p className="text-xs text-slate-400 leading-relaxed mb-4">{current.description}</p>

        <div className="mb-4">
          <span className="text-xs font-semibold text-slate-500 block mb-1.5">أمثلة شائعة في المشاريع الكبيرة:</span>
          <div className="flex flex-wrap gap-2">
            {current.examples.map((ex, idx) => (
              <span key={idx} className="text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-800">
                • {ex}
              </span>
            ))}
          </div>
        </div>

        <div className="p-3 bg-indigo-950/40 border border-indigo-500/30 rounded-lg text-xs text-indigo-300">
          💡 <strong className="text-white">القاعدة المعمارية:</strong> {current.rule}
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "تستعرض هذه المصفوفة المعمارية المنهجية العالمية لتصنيف الحالات في أنظمة React الكبرى؛ حيث تفرق بدقة بين حالة الخادم، وحالة الواجهة، وحالة الرابط، وحالة النماذج، موضحة الأدوات المثالية والقواعد الصارمة لكل نوع لمنع تكدس الذاكرة وإعادة التصيير غير المبررة.",
      commonMistakes: [
        {
          mistake: "وضع جميع بيانات التطبيق دون استثناء داخل متجر Redux مركزي واحد ضخم.",
          why: "هذا النمط القديم يؤدي إلى تعقيد هائل، وبطء في سرعة الواجهة بسبب صعوبة تحسين التخزين المؤقت، وكتابة مئات أسطر الـ Actions والـ Reducers دون داعٍ.",
          fix: "استخدم TanStack Query لإدارة بيانات الخادم، واستخدم Zustand فقط لحالة الواجهة العالمية الخفيفة."
        },
        {
          mistake: "تخزين خيارات البحث والترتيب والتصفية داخل useState محلي بدلاً من معلمات الـ URL.",
          why: "يفقد المستخدم خيارات التصفية فور إعادة تحميل الصفحة أو مشاركة الرابط مع زميل له، مما يفسد تجربة الاستخدام.",
          fix: "خزن دائماً معايير البحث والصفحات في الرابط باستخدام useSearchParams أو مكتبة nuqs."
        }
      ],
      bestPractices: [
        "اختر الأداة المتخصصة لكل نوع حالة: TanStack Query للخادم، Zustand للواجهة، React Hook Form للنماذج.",
        "قسّم مخازن Zustand إلى شرائح صغيرة ومستقلة (Slices) مرتبطة بكل ميزة بدلاً من مخزن واحد ممتد.",
        "استخدم محددات الحالة (State Selectors) دائماً: const user = useStore(state => state.user) لتفادي إعادة تصيير المكون عند تغير أجزاء أخرى من المتجر.",
        "احتفظ بالحالة في أقرب نقطة شجرية ممكنة للمكونات التي تحتاجها فقط (Colocate State)."
      ],
      visualInfographic: {
        title: "الأركان الأربعة لإدارة الحالة (State Management Pillars)",
        description: "كيف توزع الحالات في التطبيقات المؤسسية الضخمة",
        visualSteps: [
          "حالة الخادم 📡 (TanStack Query / Cache & Sync)",
          "حالة الواجهة العامة 🎨 (Zustand / Modals & Themes)",
          "حالة الرابط 🔗 (URL Search Params / Shareable State)",
          "حالة النماذج 📝 (React Hook Form / Uncontrolled Inputs)",
          "تكامل وتناغم فائق ⚡ (أداء سريع بلا إعادة تصيير غير مبررة)"
        ]
      }
    },
    {
      id: "30.1.e",
      title: "تنظيم الملفات والمكونات المشتركة (Shared Components & Primitives)",
      englishTerm: {
        term: "Shared Components & Core Primitives",
        pronunciation: "شيرد كومبوننتس آند كور بريميتيفز",
        meaning: "تنظيم المكونات والأدوات العامة المشتركة بين ميزات التطبيق"
      },
      description: "بينما تجمع الميزات (Features) الكود المخصص لنطاقات أعمال معينة، تحتاج كافة التطبيقات الكبيرة إلى طبقة أساسية من المكونات والأدوات المشتركة (Shared Layer / Core Primitives) التي لا تنتمي لأي ميزة محددة، مثل: أزرار النظام، حقول الإدخال، النوافذ المنبثقة (Modals)، دوال التنسيق التاريخي، ودوال التحقق من صحة النصوص. تتطلب هندسة هذه الطبقة معايير صارمة: يجب أن تكون المكونات المشتركة عامة تماماً وغير مقيدة بأي منطق أعمال (Business-Agnostic)، تقبل التخصيص العالي عبر الخصائص، وتعتمد على مبادئ إمكانية الوصول (Accessibility - a11y) باستخدام مكتبات أساسية مثل Radix UI أو Headless UI.",
      realWorldAnalogy: "تشبه المكونات والأدوات المشتركة قطع مكعبات 'الليغو' الأساسية؛ القطعة الحمراء المربعة ذات الأربع نتوءات يمكن استخدامها لبناء جدار منزل، أو محرك سيارة، أو جناح طائرة؛ هي قطعة محايدة وعامة وقوية في حد ذاتها وتخدم كل الأشكال دون أن تفرض عليك ما تبنيه بها.",
      whyItMatters: "بدون تنظيم صارم لطبقة المكونات المشتركة، ينتهي المطاف بالمشروع بوجود 12 نسخة مختلفة من زر الحفظ (Button) في مجلدات متفرقة، كل منها بتنسيق مختلف وسلوك وصولية متباين. توحيد المكونات المشتركة يضمن اتساق الهوية البصرية بنسبة 100% ويقلل حجم حزم البناء.",
      syntax: "// الهيكل الشجري للمشتركات في التطبيق المؤسسي:\n// src/shared/\n// ├── components/ (Button, Input, Modal, Dropdown)\n// ├── hooks/ (useDebounce, useMediaQuery, useLocalStorage)\n// ├── utils/ (dateFormatter, currencyFormat, stringHelpers)\n// └── types/ (common.ts, apiResponse.ts)",
      simpleExample: `// مكون زر مشترك عام ومحايد لا يرتبط بأي منطق أعمال مخصص
import React from 'react';

// مكون الزر المشترك الأساسي (Primitive Button)
export function SharedButton({ 
  children, 
  variant = 'primary', 
  isLoading = false, 
  onClick, 
  disabled = false,
  ...restProps 
}) {
  // تحديد ألوان النمط المشترك
  const variantStyles = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700',
    danger: 'bg-rose-600 hover:bg-rose-500 text-white'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed \${variantStyles[variant]}\`}
      {...restProps}
    >
      {isLoading && <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
      <span>{children}</span>
    </button>
  );
}

// استعراض استخدام الزر المشترك
export function SharedComponentDemo() {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm space-y-2">
      <h4 className="font-bold text-xs text-slate-400 mb-2">المكونات المشتركة (Shared Primitives)</h4>
      <div className="flex gap-2">
        <SharedButton variant="primary">زر أساسي</SharedButton>
        <SharedButton variant="secondary">زر ثانوي</SharedButton>
        <SharedButton variant="danger" isLoading={true}>حذف</SharedButton>
      </div>
    </div>
  );
}`,
      advancedExample: `// نظام إدارة وتنظيم المكونات المشتركة (Core Primitives Library Explorer)
import React, { useState } from 'react';

// مكونات أساسية مشتركة نقية
const CORE_REGISTRY = [
  {
    name: 'SharedModal',
    category: 'التراكب والطبقات (Overlays)',
    description: 'نافذة حوارية منبثقة محايدة تدعم حصر التركيز (Focus Trap) والإغلاق بزر Esc وقارئات الشاشة.',
    props: ['isOpen', 'onClose', 'title', 'children']
  },
  {
    name: 'SharedInputField',
    category: 'النماذج والإدخال (Forms)',
    description: 'حقل إدخال موحد يدعم الأيقونات وحالات الخطأ وإمكانية الوصول التلقائية عبر aria-describedby.',
    props: ['label', 'error', 'icon', 'helperText']
  },
  {
    name: 'SharedSkeleton',
    category: 'التحميل والمؤشرات (Feedback)',
    description: 'هيكل عظمي متحرك لحجز مساحات المحتوى ومنع قفزات التخطيط التراكمية (CLS).',
    props: ['width', 'height', 'rounded', 'pulse']
  }
];

// مكون استعراض سجل المكونات المشتركة
export function SharedPrimitivesStudio() {
  const [selectedComp, setSelectedComp] = useState(CORE_REGISTRY[0]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold">تنظيم المكونات المشتركة (Shared Primitives)</h3>
          <p className="text-xs text-slate-400 mt-1">مكونات نقية ومحايدة تماماً يعاد استخدامها عبر جميع الميزات</p>
        </div>
        <span className="text-xs font-mono bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">
          Zero-Logic UI
        </span>
      </div>

      {/* قائمة المكونات المشتركة */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {CORE_REGISTRY.map((c) => (
          <button
            key={c.name}
            onClick={() => setSelectedComp(c)}
            className={\`p-3 rounded-xl text-right transition border \${
              selectedComp.name === c.name
                ? 'bg-cyan-600/20 border-cyan-500 text-white'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800/40'
            }\`}
          >
            <span className="font-mono text-xs text-cyan-400 block font-bold">{c.name}</span>
            <span className="text-[10px] text-slate-500 block mt-1">{c.category}</span>
          </button>
        ))}
      </div>

      {/* تفاصيل المكون المشترك */}
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-sm font-bold text-slate-200">{selectedComp.name}</h4>
          <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
            src/shared/components/{selectedComp.name}.tsx
          </span>
        </div>
        <p className="text-xs text-slate-400 mb-4">{selectedComp.description}</p>

        <span className="text-xs text-slate-500 block mb-2 font-mono">الخصائص القياسية العامة (Props Contract):</span>
        <div className="flex flex-wrap gap-2">
          {selectedComp.props.map((p, i) => (
            <span key={i} className="text-xs font-mono bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-indigo-300">
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400">
        🛡️ <strong className="text-slate-300">قاعدة النقاء المطلق:</strong> يمنع منعاً باتاً استيراد أي ميزة من مجلد <code className="text-indigo-300">features/</code> داخل مجلد <code className="text-indigo-300">shared/</code> للحفاظ على استقلالية ونظافة شجرة الاعتماديات.
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية إدارة المكونات الأساسية المشتركة (Shared Primitives)؛ حيث تقتصر مسؤوليتها على العرض البصري الخالص وإمكانية الوصول دون أي منطق أعمال مخصص، مما يتيح لكافة الميزات استخدامها بأمان وموثوقية تامة.",
      commonMistakes: [
        {
          mistake: "استيراد ملف من مجلد ميزة مخصصة (features/checkout) داخل مكون عام في مجلد (shared/components).",
          why: "هذا ينشئ اعتمادية دائرية خبيثة ويجعل المكون العام غير قابل لإعادة الاستخدام في ميزات أخرى ويفسد بنية المشروع.",
          fix: "يجب أن تتدفق الاعتماديات في اتجاه واحد دائماً: الميزات تعتمد على المشتركات، والمشتركات لا تعتمد أبداً على أي ميزة."
        },
        {
          mistake: "وضع مئات الدوال والمكونات غير المترابطة داخل ملف واحد عملاق يسمى utils.js أو helpers.js.",
          why: "يتحول ملف utils.js بسرعة إلى مكب نفايات برمجي يصعب تتبعه أو صيانته ويتم استيراده بالكامل دون داعٍ.",
          fix: "قسّم الأدوات المساعدة حسب تخصصها الدقيق: date.ts، currency.ts، strings.ts، validation.ts."
        }
      ],
      bestPractices: [
        "ابنِ المكونات المشتركة فوق مكتبات غير منسقة وتراعي الوصولية (Headless UI Libraries مثل Radix UI) لتوفير الوقت وضمان الوصولية.",
        "وفّر قيماً افتراضية آمنة (Safe Defaults) لكافة الخصائص الاختيارية في المكونات المشتركة.",
        "استخدم مكتبات دمج الفئات مثل clsx وtailwind-merge لتسهيل تخصيص الأنماط دون تعارضات CSS.",
        "اختبر المكونات المشتركة في Storybook للتأكد من ملاءمتها لكافة الحالات البصرية قبل تعميمها في الميزات."
      ],
      visualInfographic: {
        title: "هرم تدفق الاعتماديات المعماري (Dependency Hierarchy)",
        description: "الاتجاه الصارم لتدفق الاستيراد بين طبقات المشروع الكبير",
        visualSteps: [
          "طبقة التطبيق والصفحات 📄 (App / Routes / Pages في القمة)",
          "طبقة الميزات الوظيفية 🏬 (Features Modules المستقلة)",
          "طبقة المكونات المشتركة 🧩 (Shared Primitives & UI Controls)",
          "طبقة الأدوات والأساسات 🛠️ (Shared Utils, Hooks & Types في القاعدة)",
          "قاعدة التدفق أحادي الاتجاه ⬇️ (الاستيراد من الأعلى إلى الأسفل فقط)"
        ]
      }
    },
    {
      id: "30.1.f",
      title: "تطبيق مبادئ الهندسة النظيفة (Clean Architecture & Hexagonal)",
      englishTerm: {
        term: "Clean Architecture in Frontend",
        pronunciation: "كلين أركيتكشر إن فرونت إند",
        meaning: "تطبيق مبادئ المعمارية النظيفة وفصل النطاق عن البنية التحتية"
      },
      description: "تطبيق مبادئ الهندسة النظيفة (Clean Architecture ومنافذها ومحولاتها Hexagonal / Ports & Adapters) في بيئة الواجهات الأمامية يعني فصل كود التطبيق إلى طبقات متحدة المركز ومستقلة تماماً: 1) طبقة الكيانات ونواة النطاق (Entities / Domain Core) وتحتوي على البيانات والقواعد الحسابية الخالصة؛ 2) طبقة حالات الاستخدام (Use Cases / Application Layer) وتحدد سيناريوهات عمل المستخدم (مثل: تقديم طلب الشراء، تسجيل الدخول)؛ 3) طبقة المحولات والمنافذ (Adapters / Presenters) وتربط النطاق بإطار عمل React؛ 4) طبقة البنية التحتية (Infrastructure) وتتولى استدعاءات الشبكة والتخزين المحلي. تكمن الفلسفة الجوهرية في أن 'React مجرد تفصيل خارجي'؛ يمكنك استبدال React بـ Vue أو Svelte دون تعديل سطر واحد في منطق النطاق وحالات الاستخدام.",
      realWorldAnalogy: "تشبه الهندسة النظيفة منافذ الـ USB العالمية في الحواسيب؛ فالحاسوب يوفر منفذاً قياسياً موحداً (Port)، ويمكنك توصيل أي جهاز به (Adapter) سواء كان فأرة، لوحة مفاتيح، أو كاميرا؛ لا يحتاج الحاسوب لتغيير لوحته الأم عند تغيير نوع الفأرة؛ كذلك كود تطبيقك النظيف يوفر منافذ ثابته تتصل بها واجهة React دون أن تتأثر قواعد الأعمال بتغير الواجهة.",
      whyItMatters: "تضمن الهندسة النظيفة بقاء التطبيق حياً لعشرات السنين دون أن يصبح قديماً أو متداعياً؛ حيث تظل القواعد التجارية الأساسية محمية تماماً في مركز النظام، وتوفر بيئة مثالية لإجراء اختبارات شاملة معزولة 100%، وتتيح للشركات ترقية أطر العمل ومكتبات الواجهة بسهولة بالغة.",
      syntax: "// نموذج منفذ حالة الاستخدام (Use Case):\nexport class PlaceOrderUseCase {\n  constructor(private orderRepository: OrderRepositoryPort) {}\n  async execute(cartItems) {\n    // تحقق وحسابات النطاق\n    return await this.orderRepository.save(cartItems);\n  }\n}",
      simpleExample: `// استعراض محاكاة فكرة المنافذ والمحولات (Port & Adapter) في واجهة React
import React, { useState } from 'react';

// 1. المنفذ المجرد (Port Interface / Contract): يحدد ما تحتاجه حالة الاستخدام
const notificationPort = {
  send: (msg) => console.log('إشعار افتراضي:', msg)
};

// 2. حالة الاستخدام (Use Case): مستقلة تماماً عن React
function executeWelcomeUser(userName, notifier) {
  const formattedMsg = \`أهلاً بك يا \${userName.trim()} في منصتنا!\`;
  notifier.send(formattedMsg);
  return formattedMsg;
}

// 3. المحول الخاص بـ React (UI Adapter): يستدعي حالة الاستخدام ويعرض النتيجة
export function CleanArchitectureDemo() {
  const [greeting, setGreeting] = useState('');

  const handleAction = () => {
    // محول مخصص يعرض التنبيه في الواجهة
    const uiNotifier = { send: (msg) => alert(msg) };
    const res = executeWelcomeUser('أحمد محمد', uiNotifier);
    setGreeting(res);
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs">
      <h4 className="font-bold text-xs text-indigo-400 mb-2">الهندسة النظيفة (Clean Arch Port)</h4>
      <button 
        onClick={handleAction}
        className="w-full py-2 bg-indigo-600 rounded text-xs font-bold mb-2"
      >
        تنفيذ حالة الاستخدام (Welcome User)
      </button>
      {greeting && <p className="text-xs text-emerald-400 font-medium">{greeting}</p>}
    </div>
  );
}`,
      advancedExample: `// تطبيق متكامل لنمط الهندسة النظيفة (Clean Architecture / Ports & Adapters) في نظام إدارة المهام
import React, { useState } from 'react';

// ==========================================
// 1. طبقة الكيان والنطاق (Domain Entity)
// ==========================================
class TaskEntity {
  constructor(id, title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  // قاعدة نطاق: لا يمكن إكمال مهمة عنوانها فارغ
  toggle() {
    return new TaskEntity(this.id, this.title, !this.completed);
  }
}

// ==========================================
// 2. طبقة حالة الاستخدام (Use Case Layer)
// ==========================================
class ManageTasksUseCase {
  constructor(repositoryPort) {
    this.repository = repositoryPort;
  }

  async getAllTasks() {
    return await this.repository.fetchTasks();
  }

  async createNewTask(title) {
    if (!title || title.trim().length < 3) {
      throw new Error('قاعدة النطاق: يجب ألا يقل عنوان المهمة عن 3 أحرف.');
    }
    const newTask = new TaskEntity(Date.now().toString(), title.trim(), false);
    return await this.repository.saveTask(newTask);
  }
}

// ==========================================
// 3. طبقة البنية التحتية والمحول (In-Memory Repository Adapter)
// ==========================================
class InMemoryTaskRepository {
  constructor() {
    this.tasks = [
      new TaskEntity('1', 'مراجعة معمارية النظام النظيفة', true),
      new TaskEntity('2', 'فصل الكيانات عن مكتبات الواجهة', false)
    ];
  }

  async fetchTasks() {
    return [...this.tasks];
  }

  async saveTask(task) {
    this.tasks.push(task);
    return task;
  }
}

// تهيئة البنية المعمارية
const repositoryAdapter = new InMemoryTaskRepository();
const taskUseCase = new ManageTasksUseCase(repositoryAdapter);

// ==========================================
// 4. طبقة واجهة العرض (React UI Layer / Presenter)
// ==========================================
export function CleanArchitectureStudio() {
  const [tasks, setTasks] = useState(repositoryAdapter.tasks);
  const [inputTitle, setInputTitle] = useState('');
  const [errorNotice, setErrorNotice] = useState('');

  // استدعاء حالة الاستخدام
  const handleAddTask = async () => {
    setErrorNotice('');
    try {
      await taskUseCase.createNewTask(inputTitle);
      const updated = await taskUseCase.getAllTasks();
      setTasks(updated);
      setInputTitle('');
    } catch (err) {
      setErrorNotice(err.message);
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-4">
        <div>
          <h3 className="text-base font-bold">الهندسة النظيفة (Clean Architecture)</h3>
          <p className="text-xs text-slate-400">فصل الكيان وحالات الاستخدام عن تفاصيل تخزين وبناء React</p>
        </div>
        <span className="text-xs font-mono bg-purple-500/10 text-purple-400 px-2.5 py-1 rounded-full border border-purple-500/20">
          Clean Domain
        </span>
      </div>

      {/* حقل الإضافة */}
      <div className="flex gap-2 mb-2">
        <input 
          type="text" 
          placeholder="عنوان المهمة الجديدة..."
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          className="flex-1 p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500"
        />
        <button 
          onClick={handleAddTask}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-lg transition"
        >
          إضافة
        </button>
      </div>

      {errorNotice && (
        <p className="text-[11px] text-rose-400 font-medium mb-3">{errorNotice}</p>
      )}

      {/* قائمة المهام */}
      <div className="space-y-2 mt-4">
        {tasks.map((t) => (
          <div key={t.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
            <span className={t.completed ? 'line-through text-slate-500' : 'text-slate-200'}>
              {t.title}
            </span>
            <span className={\`text-[10px] px-2 py-0.5 rounded font-bold \${t.completed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}\`}>
              {t.completed ? 'مكتملة' : 'قيد التنفيذ'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا النموذج المعماري كيف تقود طبقة الكيان (TaskEntity) وحالات الاستخدام (ManageTasksUseCase) قواعد العمل والتطبيق بمعزل تام عن React؛ حيث يتصل النظام ببيانات الذاكرة عبر منفذ ومحول (Repository Adapter)، مما يتيح استبدال مصدر التخزين أو مكتبة الواجهة دون لمس قواعد الأعمال.",
      commonMistakes: [
        {
          mistake: "تطبيق النمط المعماري الكامل للهندسة النظيفة (Clean Architecture) على مواقع بسيطة وتطبيقات الهبوط الترويجية.",
          why: "الهندسة النظيفة تضيف طبقات تجريد متعددة؛ واستخدامها في مشاريع صغيرة بسيطة يُعد هدراً هائلاً للوقت وتعقيداً غير مبرر (Over-engineering).",
          fix: "استخدم الهندسة النظيفة فقط في التطبيقات المعقدة والمؤسسية (Enterprise SaaS) ذات القواعد الحسابية الثقيلة والتي من المتوقع أن تعيش لسنوات طويلة."
        },
        {
          mistake: "تسريب خطافات ومفاهيم React (مثل useState وJSX) إلى داخل طبقة الكيانات وحالات الاستخدام.",
          why: "تسريب كود الواجهة إلى طبقة النطاق يدمر الهدف الأساسي للهندسة النظيفة ويجعل المنطق غير قابل للاختبار المنعزل.",
          fix: "تأكد من أن ملفات الكيانات وحالات الاستخدام لا تحتوي على أي استيراد من 'react' نهائياً وتعتمد فقط على لغة JavaScript / TypeScript النقية."
        }
      ],
      bestPractices: [
        "احرص على أن تكون طبقة النطاق (Domain Layer) معزولة في قلب النظام دون أي اعتماد على أطر عمل خارجية.",
        "استخدم تقنية حقن الاعتماديات (Dependency Injection) لتمرير المنافذ إلى حالات الاستخدام لتسهيل إنشاء بيئات الفحص الوهمية (Mocks).",
        "اكتب اختبارات وحدات فائقة السرعة لحالات الاستخدام (Use Cases) لتغطية مسارات عمل المستخدم بنسبة 100%.",
        "اجعل خطافات React المخصصة تعمل كمحولات (Presenters / Adapters) تربط حالات الاستخدام بمكونات العرض."
      ],
      visualInfographic: {
        title: "طبقات الهندسة النظيفة في الواجهات الأمامية (Clean Frontend Architecture)",
        description: "الدوائر متحدة المركز وتدفق قواعد النطاق نحو المركز",
        visualSteps: [
          "طبقة الأطر الخارجية 🌐 (React, DOM, LocalStorage, HTTP Client)",
          "طبقة المحولات والمنافذ 🔌 (Custom Hooks, Presenters, API Adapters)",
          "طبقة حالات الاستخدام 📋 (Application Use Cases & Workflows)",
          "نواة النطاق والكيانات 🧠 (Pure Domain Entities & Business Rules)",
          "قاعدة الاعتمادية للداخل 🎯 (الطبقات الخارجية تعتمد على الداخلية فقط)"
        ]
      }
    },
    {
      id: "30.1.g",
      title: "استخدام نمط Container و Presentational",
      englishTerm: {
        term: "Container & Presentational Pattern",
        pronunciation: "كونتينر آند بريزينتيشنال باترن",
        meaning: "نمط فصل المكونات الحاوية الذكية عن المكونات البصرية الغبية"
      },
      description: "نمط الحاوية والعرض (Container / Presentational Pattern، والذي اشتهر بفضل Dan Abramov) هو أحد أعرق وأنجح الأنماط المعمارية في React لتنظيم المكونات. يقوم النمط على تقسيم المكونات إلى صنفين محددين: 1) المكونات البصرية الغبية (Presentational / Dumb Components): وهي مكونات نقية وظيفتها الوحيدة هي 'كيف تبدو الواجهة'؛ لا تجلب بيانات من الشبكة، ولا تدير حالات معقدة، وتعتمد حصراً على ما يصلها من Props وتعيد JSX وتطلق أحداثاً عبر دوال callbacks؛ 2) المكونات الحاوية الذكية (Container / Smart Components): وظيفتها الوحيدة هي 'كيف تعمل الواجهة'؛ تتولى الاتصال بالـ API، قراءة وإدارة الحالة، وتمرير البيانات كـ Props للمكونات البصرية. بالرغم من ظهور الخطافات (Hooks)، لا يزال هذا النمط ذهبياً في فصل كود التنسيق البصري المعقد عن كود البيانات والشبكة.",
      realWorldAnalogy: "يشبه نمط Container / Presentational عارضي الأزياء ومصممي الكواليس؛ فالمكون البصري يشبه عارض الأزياء على منصة العرض؛ يرتدي ما يقدم له ويتحرك بأناقة أمام الجمهور دون أن يعرف كيف خيط الثوب؛ بينما المكون الحاوي يشبه مصمم الأزياء في الكواليس الذي يجهز الثياب والقياسات ويسلمها للعارض.",
      whyItMatters: "يتيح هذا النمط لمصممي الواجهات ومطوري CSS العمل على المكونات البصرية وتحسين ألوانها وتجاوبها دون الخوف من كسر استدعاءات الشبكة، كما يجعل المكون البصري قابلاً للعرض الفوري في Storybook ببيانات وهمية وبدون الحاجة لربطه بقاعدة بيانات حقيقية.",
      syntax: "// المكون الحاوي الذكي (Container):\nexport function UserListContainer() {\n  const { users, loading } = useUsers();\n  return <UserListPresentational users={users} isLoading={loading} />;\n}\n// المكون البصري النقي (Presentational):\nexport function UserListPresentational({ users, isLoading }) {\n  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}",
      simpleExample: `// تطبيق مبسط لنمط Container و Presentational في React
import React, { useState } from 'react';

// 1. المكون البصري النقي (Presentational Component - Dumb)
function UserProfileCard({ name, role, onPing }) {
  return (
    <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs">
      <h5 className="font-bold text-slate-200">{name}</h5>
      <p className="text-slate-400 font-mono mt-0.5">{role}</p>
      <button 
        onClick={onPing}
        className="mt-2 px-3 py-1 bg-indigo-600 rounded text-white font-bold"
      >
        إرسال تنبيه
      </button>
    </div>
  );
}

// 2. المكون الحاوي الذكي (Container Component - Smart)
export function UserProfileContainer() {
  const [pingCount, setPingCount] = useState(0);

  const handlePing = () => {
    setPingCount(c => c + 1);
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs">
      <h4 className="font-bold text-xs text-slate-400 mb-2">نمط الحاوي والعرض (Container Demo)</h4>
      <UserProfileCard 
        name="سارة المنصور" 
        role="مهندسة واجهات أولى" 
        onPing={handlePing} 
      />
      <span className="text-[10px] text-emerald-400 font-mono mt-2 block">
        عدد التنبيهات المسجلة في الحاوي: {pingCount}
      </span>
    </div>
  );
}`,
      advancedExample: `// استوديو معماري يوضح الفصل الكامل بين الحاوي الذكي ومكونات العرض في متجر المنتجات
import React, { useState, useEffect } from 'react';

// ==========================================
// 1. المكونات البصرية النقية (Presentational Layer)
// ==========================================
// مكون نقي لعرض حالة التحميل
function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[1, 2].map((i) => (
        <div key={i} className="h-28 bg-slate-950 rounded-xl animate-pulse border border-slate-800" />
      ))}
    </div>
  );
}

// مكون نقي لعرض قائمة المنتجات
function ProductGridView({ items, onSelectProduct, selectedId }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <div 
          key={item.id}
          onClick={() => onSelectProduct(item)}
          className={\`p-3 bg-slate-950 rounded-xl border transition cursor-pointer \${
            selectedId === item.id ? 'border-indigo-500 bg-indigo-950/20' : 'border-slate-800 hover:border-slate-700'
          }\`}
        >
          <span className="text-xs font-bold text-slate-200 block truncate">{item.title}</span>
          <span className="text-xs font-mono text-emerald-400 mt-1 block font-bold">\${item.price}</span>
        </div>
      ))}
    </div>
  );
}

// ==========================================
// 2. المكون الحاوي الذكي (Container Layer)
// ==========================================
export function ProductCatalogContainer() {
  // الحاوي مسؤول عن جلب البيانات والحالة والعمليات
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  // جلب البيانات من الشبكة
  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts([
        { id: 101, title: 'حاسوب محمول فائق الأداء', price: 1299 },
        { id: 102, title: 'شاشة ألعاب منحنية 4K', price: 499 }
      ]);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-4">
        <div>
          <h3 className="text-base font-bold">كتالوج المنتجات (Container View)</h3>
          <p className="text-xs text-slate-400">الحاوي يدير الـ API والحالة؛ والمكونات البصرية تعرض فقط</p>
        </div>
        <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-full border border-indigo-500/20">
          Smart/Dumb
        </span>
      </div>

      {/* التبديل بين العرض البصري بناءً على حالة الحاوي */}
      {loading ? (
        <ProductGridSkeleton />
      ) : (
        <ProductGridView 
          items={products} 
          onSelectProduct={(item) => setSelectedItem(item)}
          selectedId={selectedItem?.id}
        />
      )}

      {selectedItem && (
        <div className="mt-4 p-3 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-xs text-indigo-200">
          تم اختيار: <strong className="text-white">{selectedItem.title}</strong> (\${selectedItem.price})
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "يشرح هذا المثال المعماري الفصل الاحترافي بين الحاوي الذكي ProductCatalogContainer الذي يدير دورة حياة جلب البيانات وحالة الاختيار، والمكونات البصرية ProductGridView وProductGridSkeleton التي تركز حصراً على تنسيق الـ JSX وتلقي الأحداث عبر الـ Props.",
      commonMistakes: [
        {
          mistake: "إجبار كل شاشة صغيرة وزر بسيط على الانقسام إلى ملفين (Container وPresentational).",
          why: "تطبيق هذا النمط على كل تفصيلة صغيرة يضاعف عدد الملفات بلا مبرر ويجعل التصفح بطيئاً ومربكاً.",
          fix: "استخدم النمط عند وجود تعقيد بصري كبير يستحق العزل، أو عند الرغبة في اختبار المكون البصري في Storybook ببيانات وهمية متعددة."
        },
        {
          mistake: "تمرير كائنات ومكتبات الـ API (مثل كائن axios أو supabase) مباشرة إلى المكون البصري لطلب البيانات بنفسه.",
          why: "يفرغ هذا التصرف النمط من معناه بالكامل؛ فالمكون البصري يجب أن يتلقى بيانات جاهزة ولا يجوز أن يتصل بالشبكة مباشرة.",
          fix: "اجعل الحاوي هو من يجلب البيانات ويمرر الكائنات الجاهزة إلى المكون البصري."
        }
      ],
      bestPractices: [
        "اجعل المكونات البصرية Presentational مكونات نقية (Pure Components) تعتمد حصراً على ما يصلها عبر الـ Props.",
        "وثّق المكونات البصرية في Storybook؛ فهي المكان المثالي لاستعراض كافة الحالات البصرية (Loading, Empty, Error, Success).",
        "سمِّ المكونات بوضوح لتمييز دورها: مثلاً UserListContainer للحاوي الذكي وUserListView للمكون البصري.",
        "استخدم تقنية Custom Hooks داخل المكون الحاوي لتنظيم العمليات البرمجية المعقدة."
      ],
      visualInfographic: {
        title: "نمط الحاوية والعرض (Container / Presentational Pattern)",
        description: "توزيع المسؤوليات بين العقل المدبر والواجهة البصرية",
        visualSteps: [
          "المكون الحاوي الذكي 🧠 (Container: جلب البيانات وإدارة الحالة والشبكة)",
          "تمرير البيانات كـ Props 📨 (Data In / Callbacks Out)",
          "المكون البصري النقي 🎨 (Presentational: تصيير الـ JSX وتطبيق الـ CSS)",
          "تفاعل المستخدم والنقر 🖱️ (إطلاق دوال onClick وتمرير الأحداث للحاوي)",
          "عزل واختبار فائق السلاسة 🛡️ (سهولة استعراض الواجهة في Storybook)"
        ]
      }
    },
    {
      id: "30.1.h",
      title: "إدارة التكوين ومتغيرات البيئة (Configuration & Environment Profiles)",
      englishTerm: {
        term: "Configuration Management & Env Profiles",
        pronunciation: "كونفيجريشن مانيجمنت آند إنف بروفايلز",
        meaning: "إدارة ملفات الضبط والتكوين الموحد ومتغيرات البيئات المتعددة"
      },
      description: "في التطبيقات المؤسسية، يعمل كود React عبر بيئات تشغيل متعددة (التطوير المحلي Development، الفحص التدريجي Staging، وبيئة الإنتاج الحي Production). تتضمن الإدارة الاحترافية للتكوين إنشاء ملف تكوين مركزي ومحصن بنماذج تحقق (Validated Config Layer) يقرأ متغيرات البيئة (مثل VITE_API_URL أو VITE_SENTRY_DSN) ويتحقق من صحتها وتوفرها فور تشغيل التطبيق باستخدام مكتبات مثل Zod، بدلاً من قراءة import.meta.env بشكل عشوائي ومباشر داخل المكونات. يمنع هذا النظام انطلاق التطبيق في الإنتاج بإعدادات خاطئة أو عناوين API ناقصة، ويوفر أماناً صارماً يمنع تسريب المفاتيح السرية إلى حزم المتصفح العامة.",
      realWorldAnalogy: "يشبه ملف التكوين المركزي جدول تحويل الجهد الكهربائي ومقابس السفر الدولية؛ فبدلاً من أن يحمل المسافر 10 شواحن مختلفة ويخمن فولتية كل دولة، يستخدم محولاً ذكياً موحداً يتحقق من توافق التيار الكهربائي فور توصيله ويضبط الأجهزة بأمان لمنع احتراقها.",
      whyItMatters: "تعد الأخطاء الناتجة عن متغيرات البيئة الناقصة (مثل نسيان تعيين رابط الـ API في Vercel) أحد أشهر أسباب ظهور الشاشة البيضاء في بيئة الإنتاج ليلة الإطلاق. الفحص التلقائي المبكر للمتغيرات (Fail-Fast Configuration) يوقف البناء فوراً مع إعطاء رسالة واضحة للمطور بالمفتاح الناقص قبل وصول الكود لأي مستخدم.",
      syntax: "// التحقق المركزي من متغيرات البيئة عبر Zod:\nimport { z } from 'zod';\nconst envSchema = z.object({\n  VITE_API_URL: z.string().url(),\n  VITE_APP_ENV: z.enum(['development', 'staging', 'production'])\n});\nexport const envConfig = envSchema.parse(import.meta.env);",
      simpleExample: `// استعراض محاكاة قارئ التكوين المحصن والتحقق من اكتمال الروابط في React
import React, { useState } from 'react';

// كائن تكوين موحد يقرأ ويفحص المتغيرات
const appConfig = {
  apiUrl: 'https://api.myproduction.com/v1',
  environment: 'production',
  enableDebugLogs: false
};

// مكون يعرض الإعدادات المفحوصة
export function EnvConfigDemo() {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <h4 className="font-bold text-xs text-slate-400 mb-2">إعدادات البيئة المعتمدة (App Config)</h4>
      <div className="space-y-1.5 text-xs font-mono">
        <div className="text-slate-300">
          البيئة الحالية: <span className="text-emerald-400 font-bold">{appConfig.environment}</span>
        </div>
        <div className="text-slate-300 truncate">
          رابط الـ API: <span className="text-cyan-400">{appConfig.apiUrl}</span>
        </div>
      </div>
    </div>
  );
}`,
      advancedExample: `// نظام إدارة التكوين المؤسسي مع فاحص المخططات الصارم (Runtime Env Validator)
import React, { useState } from 'react';

// فئة فحص والتحقق من متغيرات البيئة
class EnvironmentValidator {
  // فحص شجرة المتغيرات وإرجاع تقرير سلامة التكوين
  static validate(rawEnv) {
    const errors = [];
    
    // التحقق من عنوان الـ API
    if (!rawEnv.VITE_API_URL || !rawEnv.VITE_API_URL.startsWith('http')) {
      errors.push('VITE_API_URL مفقود أو غير مطابق لصيغة الرابط الصحيحة (URL).');
    }
    // التحقق من بيئة التشغيل
    const validEnvs = ['development', 'staging', 'production'];
    if (!validEnvs.includes(rawEnv.VITE_APP_ENV)) {
      errors.push(\`VITE_APP_ENV يجب أن تكون إحدى القيم: \${validEnvs.join(', ')}.\`);
    }

    return {
      isValid: errors.length === 0,
      errors: errors,
      config: errors.length === 0 ? {
        apiUrl: rawEnv.VITE_API_URL,
        appEnv: rawEnv.VITE_APP_ENV,
        sentryDsn: rawEnv.VITE_SENTRY_DSN || 'غير مفعل'
      } : null
    };
  }
}

// مكون استوديو فحص التكوين وبيئات العمل المتعددة
export function ConfigManagerStudio() {
  // بيئة تجريبية تحاكي المتغيرات الواردة
  const [mockEnv, setMockEnv] = useState({
    VITE_API_URL: 'https://api.enterprise-app.com',
    VITE_APP_ENV: 'production',
    VITE_SENTRY_DSN: 'https://public_key@sentry.io/123456'
  });

  // تشغيل الفحص
  const validationResult = EnvironmentValidator.validate(mockEnv);

  // كسر الرابط لمحاكاة خطأ التكوين
  const breakConfig = () => {
    setMockEnv({
      VITE_API_URL: 'invalid-url-string',
      VITE_APP_ENV: 'local_testing', // قيمة غير صالحة
      VITE_SENTRY_DSN: ''
    });
  };

  // إعادة التكوين السليم
  const restoreConfig = () => {
    setMockEnv({
      VITE_API_URL: 'https://api.enterprise-app.com',
      VITE_APP_ENV: 'production',
      VITE_SENTRY_DSN: 'https://public_key@sentry.io/123456'
    });
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-4">
        <div>
          <h3 className="text-base font-bold">حارس التكوين ومتغيرات البيئة (Env Guard)</h3>
          <p className="text-xs text-slate-400">التحقق الصارم من توفر الإعدادات قبل تشغيل تطبيق React</p>
        </div>
        <span className={\`text-xs font-mono font-bold px-2.5 py-1 rounded-full border \${
          validationResult.isValid ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
        }\`}>
          {validationResult.isValid ? 'التكوين سليم 100%' : 'تكوين تالف'}
        </span>
      </div>

      {/* أزرار التجربة */}
      <div className="flex gap-2 mb-4">
        <button 
          onClick={breakConfig}
          className="flex-1 py-1.5 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white rounded-lg text-xs font-bold transition border border-rose-500/30"
        >
          محاكاة خطأ في متغيرات البيئة
        </button>
        <button 
          onClick={restoreConfig}
          className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold transition border border-slate-700"
        >
          استعادة التكوين المعتمد
        </button>
      </div>

      {/* عرض الأخطاء أو التكوين المعتمد */}
      {!validationResult.isValid ? (
        <div className="p-4 bg-rose-950/40 border border-rose-500/30 rounded-xl space-y-2">
          <span className="text-xs font-bold text-rose-400 block">⛔ تم إيقاف التشغيل لمنع انهيار الإنتاج:</span>
          {validationResult.errors.map((err, idx) => (
            <p key={idx} className="text-xs text-rose-300 font-mono">• {err}</p>
          ))}
        </div>
      ) : (
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs font-mono">
          <div className="flex justify-between">
            <span className="text-slate-400">رابط واجهة الـ API:</span>
            <span className="text-cyan-400 font-bold">{validationResult.config.apiUrl}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">بيئة التشغيل الحالية:</span>
            <span className="text-emerald-400 font-bold">{validationResult.config.appEnv}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">مفتاح تتبع Sentry:</span>
            <span className="text-slate-500 truncate max-w-[200px]">{validationResult.config.sentryDsn}</span>
          </div>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية بناء حارس تكوين مركزي (Environment Validator) يفحص مدخلات البيئة فور بدء التطبيق ويتحقق من صحتها؛ مما يضمن إيقاف عملية البناء فوراً (Fail-Fast) وإظهار أخطاء واضحة للمطور إذا كان هناك أي متغير ناقص أو غير مطابق للمعايير.",
      commonMistakes: [
        {
          mistake: "استدعاء import.meta.env.VITE_MY_VARIABLE بشكل مباشر ومشتت في عشرات الملفات والمكونات.",
          why: "هذا التشتت يجعل من المستحيل معرفة قائمة المتغيرات المطلوبة لتشغيل المشروع ويزيد من احتمالية حدوث أخطاء إملائية صامتة.",
          fix: "أنشئ ملفاً مركزياً موحداً مثل src/config/env.ts يقرأ ويفحص جميع المتغيرات ويصدر كائناً محصناً ومكتوباً بـ TypeScript."
        },
        {
          mistake: "تضمين مفاتيح سرية خاصة بالخادم (مثل Stripe Secret Key أو خادم قواعد البيانات) في متغيرات تبدأ بـ VITE_.",
          why: "أي متغير يبدأ بـ VITE_ أو REACT_APP_ يتم حقنه علناً ومباشرة داخل حزم الجافاسكريبت التي تنزل لمتصفح المستخدم النهائي؛ مما يتيح لأي زائر سرقتها.",
          fix: "ضع المفاتيح السرية في الخادم الخلفي حصراً، ولا تضع في ملفات فرونت إند إلا المفاتيح العامة (Public Keys)."
        }
      ],
      bestPractices: [
        "أنشئ ملف .env.example يوثق كافة المفاتيح المطلوبة مع شروحات واضحة للمطورين الجدد.",
        "استخدم مكتبة Zod أو T3-Env للتحقق الصارم من أنواع المتغيرات عند بدء تشغيل بيئة التطوير.",
        "افصل ملفات البيئات المختلفة: .env.development و.env.production لتفادي إرسال بيانات الاختبار للإنتاج.",
        "تأكد دائماً من إضافة ملف .env و.env.local إلى قائمة ملف .gitignore لضمان عدم رفع الأسرار إلى Git."
      ],
      visualInfographic: {
        title: "هندسة إدارة التكوين المحصنة (Validated Config Flow)",
        description: "كيف يتم فحص وتأمين متغيرات البيئة قبل تشغيل واجهة React",
        visualSteps: [
          "قراءة ملفات البيئة 📄 (.env / .env.production)",
          "حارس التحقق الصارم 🛡️ (مخطط Zod يفحص الأنواع والروابط الحيوية)",
          "آلية الإيقاف المبكر 🛑 (Fail-Fast: إيقاف البناء فوراً عند نقص أي مفتاح)",
          "توليد كائن التكوين الموحد 📦 (Validated config object مع دعم TypeScript)",
          "استهلاك آمن في المكونات 🚀 (المكونات تستورد من config المركزي بثقة مطلقة)"
        ]
      }
    },
    {
      id: "30.1.i",
      title: "استراتيجيات تقسيم الكود للتطبيقات الكبيرة (Code Splitting at Scale)",
      englishTerm: {
        term: "Enterprise Code Splitting & Granular Chunks",
        pronunciation: "إنتربرايز كود سبليتنغ آند غرانيولار تشانكس",
        meaning: "استراتيجيات تقسيم الحزم المعمارية الدقيقة للتطبيقات الضخمة"
      },
      description: "مع تضخم تطبيقات React ووصول عدد الشاشات إلى المئات، يصبح تحميل حزمة JavaScript واحدة عملاقة أمراً يقتل تجربة المستخدم ويجعل مؤشرات الأداء الحيوية (LCP وINP) في المنطقة الحمراء. يتضمن تقسيم الكود على النطاق المؤسسي (Enterprise Code Splitting) استراتيجية متعددة المستويات تتجاوز مجرد استخدام React.lazy البسيط؛ حيث تشمل: 1) تقسيم المسارات والصفحات (Route-based Splitting)؛ 2) تقسيم المكونات الثقيلة المشروطة (Modal & Chart Splitting)؛ 3) تقسيم الحزم التابعة الخارجية الكبيرة (Vendor Chunking) في Vite وRollup لعزل مكتبات مثل React وLodash في حزم مستقلة ذات تخزين مؤقت طويل الأجل (Immutable Caching)؛ 4) التحميل المسبق الذكي (Route Prefetching) عند تحويم مؤشر الفأرة (Hover) على الروابط لضمان انتقال فوري خفي وبدون أي شاشات انتظار.",
      realWorldAnalogy: "يشبه تقسيم الكود المعماري المتطور الفنادق الفاخرة ذات الأجنحة المتعددة؛ لا يقوم الفندق بنقل كامل أثاث الفندق إلى غرفتك عند تسجيل الوصول؛ بل يوفر لك الغرفة الأساسية الأنيقة فوراً، وإذا طلبت سرير أطفال إضافي أو طاولة اجتماعات خاصة، يحضرها فريق الخدمة في ثوانٍ معدودة حسب الطلب.",
      whyItMatters: "يقلل تقسيم الكود الذكي حجم حزمة التحميل المبدئية بنسبة تتجاوز 70%، مما يحول وقت تحميل الصفحة الأولى من 8 ثوانٍ على الهواتف المتواضعة إلى أقل من ثانية ونصف، ويرفع تقييم سرعة الموقع على Google PageSpeed إلى أعلى الدرجات.",
      syntax: "// تقسيم الحزم الخارجية في vite.config.js:\nbuild: {\n  rollupOptions: {\n    output: {\n      manualChunks: {\n        'vendor-react': ['react', 'react-dom'],\n        'vendor-charts': ['recharts', 'd3']\n      }\n    }\n  }\n}",
      simpleExample: `// تحميل مسبق مشروط لمكون ثقيل عند تمرير الفأرة (Prefetch on Hover)
import React, { useState } from 'react';

// استعراض محاكاة ميزة التحميل المسبق قبل النقر
export function PrefetchButtonDemo() {
  const [loaded, setLoaded] = useState(false);
  const [prefetched, setPrefetched] = useState(false);

  // دالة تحاكي بدء تنزيل الحزمة فور اقتراب مؤشر الفأرة
  const handleMouseEnter = () => {
    if (!prefetched) {
      setPrefetched(true);
      console.log('⚡ تم بدء التحميل المسبق لحزمة الشاشة في الخلفية (Prefetching)...');
    }
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <h4 className="font-bold text-xs text-slate-400 mb-2">التحميل المسبق الذكي (Prefetch on Hover)</h4>
      <button 
        onMouseEnter={handleMouseEnter}
        onClick={() => setLoaded(true)}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-xs font-bold transition mb-2"
      >
        مرر الفأرة فوق الزر ثم انقر لفتح الشاشة
      </button>

      <div className="text-[11px] font-mono">
        {prefetched && <span className="text-cyan-400 block">✓ الحزمة محملة مسبقاً في الذاكرة المؤقتة.</span>}
        {loaded && <span className="text-emerald-400 font-bold block mt-1">🎉 تم فتح الشاشة فوراً بزمن 0ms!</span>}
      </div>
    </div>
  );
}`,
      advancedExample: `// استوديو محاكاة تقسيم الحزم المعماري في Vite (Rollup Granular Chunks Visualizer)
import React, { useState } from 'react';

// استعراض حزم البناء بعد التقسيم المتقدم
export function EnterpriseChunkingStudio() {
  // الحزم الناتجة عن استراتيجية manualChunks
  const [chunks, setChunks] = useState([
    { name: 'index.html (Entry)', sizeKb: 1.2, cacheStrategy: 'no-cache', type: 'entry' },
    { name: 'assets/vendor-react-[hash].js', sizeKb: 142, cacheStrategy: 'immutable (1 year)', type: 'vendor' },
    { name: 'assets/vendor-charts-[hash].js', sizeKb: 280, cacheStrategy: 'immutable (1 year)', type: 'vendor' },
    { name: 'assets/feature-checkout-[hash].js', sizeKb: 34, cacheStrategy: 'dynamic on-demand', type: 'feature' },
    { name: 'assets/feature-analytics-[hash].js', sizeKb: 48, cacheStrategy: 'dynamic on-demand', type: 'feature' }
  ]);

  // إجمالي حجم حزمة التحميل الأولية للمستخدم
  const initialLoadKb = chunks
    .filter(c => c.type === 'entry' || c.name.includes('vendor-react'))
    .reduce((sum, c) => sum + c.sizeKb, 0);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold">استراتيجية تقسيم الحزم المعمارية (Granular Chunks)</h3>
          <p className="text-xs text-slate-400 mt-1">فصل الحزم الخارجية المستقرة عن كود الميزات لتحقيق أقصى استفادة من التخزين المؤقت</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-black text-emerald-400 font-mono">{initialLoadKb.toFixed(1)} KB</span>
          <span className="block text-[10px] text-slate-400 font-semibold">حجم التحميل الأولي المبدئي</span>
        </div>
      </div>

      {/* قائمة الحزم المفككة */}
      <div className="space-y-2 mb-6">
        {chunks.map((chunk, idx) => (
          <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
            <div>
              <span className="font-mono font-bold text-slate-200 block">{chunk.name}</span>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">سياسة الكاش: {chunk.cacheStrategy}</span>
            </div>
            <div className="text-right">
              <span className="font-mono font-bold text-cyan-400">{chunk.sizeKb} KB</span>
              <span className={\`block text-[10px] font-bold px-2 py-0.5 rounded mt-1 \${
                chunk.type === 'vendor' ? 'bg-indigo-500/20 text-indigo-300' : chunk.type === 'feature' ? 'bg-purple-500/20 text-purple-300' : 'bg-slate-800 text-slate-400'
              }\`}>
                {chunk.type.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
        💡 <strong className="text-slate-200">الأثر المعماري:</strong> عندما يطلق فريقك تحديثاً جديداً في ميزة الفواتير checkout، لن يضطر المستخدم لتنزيل حزمة مكتبة React أو الرسوم البيانية مجدداً؛ حيث يتم قراءتها مباشرة من ذاكرة المتصفح في 0 مللي ثانية!
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا النموذج كيف يؤدي تقسيم الكود المعماري (Granular Chunks) في Vite إلى عزل مكتبات الطرف الثالث الضخمة في حزم Vendor مستقلة ومحمية بتخزين مؤقت طويل الأجل، مما يحصر حجم التنزيل المبدئي الأولي في أقل من 150KB ويضمن فتح الشاشات بسرعة فائقة.",
      commonMistakes: [
        {
          mistake: "تقسيم الكود بشكل مفرط وعشوائي حتى ينتج عن عملية البناء مئات الملفات الصغيرة بحجم 1KB لكل منها.",
          why: "إنشاء مئات الملفات الدقيقة يزيد من عدد اتصالات HTTP ويسبب ظاهرة بطء الشبكة في مصافحة الاتصالات المتعددة.",
          fix: "اجمع الحزم المشابهة في كتل منطقية لا يقل حجم الواحدة منها بعد الضغط عن 20-30KB."
        },
        {
          mistake: "عدم توفير واجهة بديلة (Fallback) مناسبة ومريحة داخل مكون React.Suspense.",
          why: "عرض شاشة بيضاء فارغة أثناء انتظار تنزيل حزمة الشاشة يجعل الزائر يعتقد أن التطبيق قد تعطل تماماً.",
          fix: "استخدم دائماً واجهات هياكل عظمية (Skeleton Loaders) تحاكي تصميم الشاشة القادمة داخل Suspense fallback."
        }
      ],
      bestPractices: [
        "استخدم التحميل الكسول القائم على المسارات (Route-Based Lazy Loading) كخطوة أولى وأساسية في جميع الشاشات.",
        "قسّم المكتبات الضخمة (مثل مكتبات الرسوم البيانية Recharts أو معالجة النصوص Rich Text Editors) وحملها فقط عند فتح الشاشة المعنية.",
        "طبّق تقنية Prefetch on Hover لتحميل الحزم في الخلفية قبل أن يكمل المستخدم نقرته على الزر.",
        "راقب أحجام الحزم الناتجة في كل عملية بناء باستخدام أداة rollup-plugin-visualizer لمنع تضخم أي حزمة."
      ],
      visualInfographic: {
        title: "استراتيجية تقسيم الحزم المعمارية (Enterprise Chunking)",
        description: "كيف يتم تقسيم كود التطبيق الضخم لتسريع التحميل والتخزين المؤقت",
        visualSteps: [
          "حزمة الدخول الخفيفة 🚀 (Entry Chunk & HTML - تحميل أولي فوري)",
          "حزم المكتبات المستقرة 📦 (Vendor Chunks: React, Lodash - كاش طويل الأجل)",
          "حزم الميزات المستقلة 🏬 (Feature Chunks - تحميل عند فتح المسار)",
          "الحزم المشروطة الثقيلة 📊 (Heavy Components: Charts & Modals - تحميل كسول)",
          "التحميل المسبق الذكي ⚡ (Prefetch on Hover - سرعة استجابة مذهلة)"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-30-1-1",
      question: "ما هي الفائدة الجوهرية لاعتماد الهيكلة الموجهة بالميزات (Feature-Based Architecture) في تطبيقات React الكبيرة؟",
      options: [
        "تقليل عدد أسطر كود الـ HTML بنسبة 50%.",
        "تجميع كافة الملفات التابعة لنطاق أعمال محدد (المكونات، الـ Hooks، والـ API) في مجلد مستقل ومكتفٍ ذاتياً مع عقد تصدير خارجي موحد.",
        "إلغاء الحاجة لاستخدام حزم node_modules نهائياً.",
        "جعل الموقع يفتح بدون أي اتصال بالإنترنت دائماً."
      ],
      correctAnswer: 1,
      explanation: "تضمن الهيكلة الموجهة بالميزات جمع كل ما يخص نطاق أعمال معين في مجلد مستقل، مما يسهل صيانة الميزات، وحذفها، وتطويرها بالتوازي بين فرق العمل المتعددة دون تشابك."
    },
    {
      id: "quiz-30-1-2",
      question: "لماذا ينصح بشدة بفصل منطق الأعمال (Business Logic) عن مكونات واجهة React في التطبيقات الضخمة؟",
      options: [
        "لأن React تحظر كتابة أي معادلات حسابية في ملفات الـ JSX.",
        "لتمكين اختبار الحسابات والقواعد التجارية بنسبة 100% عبر Unit Tests سريعة ونقية دون الحاجة لتشغيل المتصفح، وإمكانية إعادة استخدام المنطق في تطبيقات أخرى.",
        "لأن المتصفحات لا تدعم لغة JavaScript الحديثة.",
        "لتقليل استهلاك كهرباء شاشات المستخدمين."
      ],
      correctAnswer: 1,
      explanation: "فصل منطق الأعمال في دوال نقية يتيح اختبارها فوراً وبدقة متناهية دون الحاجة لمحاكاة شجرة الـ DOM، ويحمي القواعد الحسابية من أخطاء تعديل التصميم."
    },
    {
      id: "quiz-30-1-3",
      question: "ما هو الدور المعماري الرئيسي لطبقة الوصول إلى البيانات (Data Access Layer - DAL) في أنظمة React؟",
      options: [
        "تصميم ألوان الأزرار والخلفيات بشكل عشوائي.",
        "عزل وتوحيد كافة عمليات جلب وحفظ البيانات، وتطبيق التحقق من المخططات (Validation)، ومواءمة استجابة الخادم مع ما تتوقعه مكونات الواجهة.",
        "حذف ملفات الكاش في متصفح الزائر كل 5 ثوانٍ.",
        "إجبار المطور على كتابة كود SQL داخل ملفات الـ JSX."
      ],
      correctAnswer: 1,
      explanation: "تعمل طبقة DAL كبوابة موحدة تعزل تفاصيل الشبكة والترويسات عن المكونات، وتطابق استجابة الـ API وتكيفها لحماية واجهة React من أي تغير في الخوادم الخلفية."
    }
  ],
  practicalExercise: {
    id: "exercise-30-1",
    title: "تمرين تطبيقي: بناء ميزة مستقلة تفصل المنطق عن العرض وفق نمط DAL و Presentational",
    scenario: "طُلب منك في شركتك إعادة هندسة شاشة استعراض رصيد المحفظة المالية للمستخدم؛ بحيث تكون دالة حساب المكافآت والأرصدة نقية ومعزولة تماماً في ملف منطق، وتعتمد الواجهة على طبقة DAL موحدة لجلب البيانات، مع فصل المكون إلى حاوٍ ذكي (Container) ومكون عرض نقي (Presentational).",
    tasks: [
      "بناء دالة منطق أعمال نقية باسم calculateLoyaltyBonus تحسب مكافأة إضافية 10% إذا تجاوز الرصيد 1000 دولار.",
      "إنشاء كائن محاكاة لطبقة DAL يجلب بيانات المحفظة مع الترويسات الموحدة.",
      "فصل المكون إلى Presentational نقي يستقبل الرصيد والمكافأة ويعرضهما، ومكون Container يدير الجلب والحالة.",
      "إضافة زر تفاعلي لتحديث البيانات وتجربة الاستجابة."
    ],
    hints: [
      "تأكد أن دالة الحساب نقية وتستقبل الرقم وتعيد القيمة المحسوبة فقط.",
      "اجعل المكون البصري لا يحتوي على أي useState أو useEffect.",
      "استخدم الحاوي لربط الـ DAL بالدالة الحسابية وتمرير النتائج للمكون البصري."
    ],
    solution: `// الحل النموذجي للتمرين التطبيقي: هندسة معمارية متكاملة ومفصولة
import React, { useState, useEffect } from 'react';

// ==========================================
// 1. طبقة منطق الأعمال النقية (Pure Domain Logic)
// ==========================================
export function calculateLoyaltyBonus(balance) {
  // إضافة مكافأة ولاء بنسبة 10% للأرصدة التي تزيد عن 1000 دولار
  if (balance >= 1000) {
    return balance * 0.10;
  }
  return 0;
}

// ==========================================
// 2. طبقة الوصول للبيانات الموحدة (DAL)
// ==========================================
export const walletDAL = {
  async fetchWalletData() {
    // محاكاة استدعاء شبكي مع ترويسات موحدة
    await new Promise(r => setTimeout(r, 600));
    return {
      userId: 'usr_8842',
      balance: 1450,
      currency: 'USD'
    };
  }
};

// ==========================================
// 3. المكون البصري النقي (Presentational Component)
// ==========================================
export function WalletDisplayView({ balance, bonus, currency, isLoading, onRefresh }) {
  if (isLoading) {
    return <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">جاري قراءة الرصيد عبر DAL...</div>;
  }

  const grandTotal = balance + bonus;

  return (
    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-white space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-xs text-slate-400">الرصيد الأساسي:</span>
        <span className="font-mono font-bold text-sm">\${balance} {currency}</span>
      </div>

      {bonus > 0 && (
        <div className="flex justify-between items-center text-xs text-emerald-400 font-bold">
          <span>مكافأة الولاء (Loyalty Bonus 10%):</span>
          <span className="font-mono">+\${bonus}</span>
        </div>
      )}

      <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-sm font-bold">
        <span>الرصيد الكلي المتاح:</span>
        <span className="text-cyan-400 font-mono text-base">\${grandTotal}</span>
      </div>

      <button 
        onClick={onRefresh}
        className="w-full py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-xs font-bold transition mt-2"
      >
        تحديث الرصيد
      </button>
    </div>
  );
}

// ==========================================
// 4. المكون الحاوي الذكي (Container Component)
// ==========================================
export function WalletContainer() {
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await walletDAL.fetchWalletData();
      setWallet(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // حساب المكافأة عبر المنطق المعزول
  const bonusAmount = wallet ? calculateLoyaltyBonus(wallet.balance) : 0;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto shadow-2xl text-white">
      <h3 className="text-sm font-bold text-slate-200 mb-3">محفظة العميل المعمارية (Refactored)</h3>
      <WalletDisplayView 
        balance={wallet?.balance || 0}
        bonus={bonusAmount}
        currency={wallet?.currency || 'USD'}
        isLoading={loading}
        onRefresh={loadData}
      />
    </div>
  );
}`
  },
  visualInfographic: {
    title: "خارطة معمارية تطبيقات React الكبيرة (Enterprise Architecture)",
    description: "الأعمدة الأساسية لبناء تطبيقات مستقرة وقابلة للتوسع اللانهائي",
    visualSteps: [
      "الهيكلة الموجهة بالميزات 🏬 (Feature-Based Slices & Public API index.ts)",
      "فصل منطق الأعمال والـ DAL 🧠 (Pure Domain Logic & Data Access Layer)",
      "تصنيف الحالات الأربعة 🎛️ (Server State, Global UI, URL Params & Form State)",
      "نمط الحاويات والمشتركات 🎨 (Smart Containers, Dumb Views & Core Primitives)",
      "التكوين المحصن والتقسيم ⚡ (Validated Env Profiles & Granular Vendor Chunks)"
    ]
  }
};

