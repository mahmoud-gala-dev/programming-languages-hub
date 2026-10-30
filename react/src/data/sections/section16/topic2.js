// topic2.js - القسم 16: أنماط التصميم وتنظيم التطبيقات
// الموضوع 2: هندسة ملفات المشروع (Project Architecture & Folder Structure)

export const topic2 = {
  id: "16.2",
  title: "هندسة ملفات المشروع",
  englishTitle: "Project Architecture & Folder Structure",
  description: "الهندسة الاحترافية لتنظيم وهيكلة ملفات مشاريع React الكبرى: المقارنة بين التنظيم التقني والتنظيم بالميزات (Feature-Based Architecture)، وفصل الصفحات، وإدارة الخطافات وعملاء API، وضبط المسارات المختصرة Path Aliases، وتجنب فخاخ الاستيرادات الدائرية.",
  subtopics: [
    {
      id: "16.2.a",
      title: "التنظيم حسب نوع الملفات",
      englishTerm: {
        term: "File-Type (Technical) Organization",
        pronunciation: "فايل تايب أورغانيزيشن",
        meaning: "تنظيم مجلدات المشروع بحسب النوع التقني للملفات مثل مجلد للمكونات وآخر للخطافات وآخر للخدمات"
      },
      description: "التنظيم التقني أو بحسب نوع الملفات هو الأسلوب الأكثر تقليدية في المشاريع المبتدئة والمتوسطة. في هذا النمط، تُنشأ مجلدات عامة في جذر المشروع مثل `src/components/`, `src/hooks/`, `src/services/`, `src/types/`, `src/utils/`. يُعتبر هذا النمط سهلاً جداً في الفهم والاستيعاب للمطورين الجدد، ولكنه يواجه تحديات كبرى عند نمو المشروع (أكثر من 50 شاشة)، حيث يصبح مجلد `components` متضخماً بمئات الملفات غير المترابطة، ويضطر المطور للقفز بين 5 مجلدات متباعدة لتعديل ميزة واحدة بسيطة.",
      analogy: "يشبه الأمر تنظيم دولاب ملابسك حسب نوع القماش؛ تضع كل الأقمشة القطنية في رف، وكل الصوف في رف ثانٍ، والحرير في رف ثالث؛ في البداية يبدو الأمر مرتباً، ولكن حينما تريد ارتداء بدلة معينة، ستضطر للبحث عن سترة البدلة في رف الصوف، وقميصها في رف القطن، وربطة العنق في رف الحرير!",
      whyItMatters: "معرفة نقاط القوة والضعف في التنظيم التقني يساعدك على استخدامه بذكاء في النماذج الأولية والمشاريع المدمجة، ومعرفة اللحظة الهندسية المناسبة للترقية إلى الهيكلة المجالية الأكثر اتساعاً.",
      syntax: "src/\n  components/\n    Button.tsx\n    Navbar.tsx\n  hooks/\n    useAuth.ts\n  services/\n    api.ts\n  types/\n    user.ts",
      simpleExample: `// هيكل تنظيمي مبسط بحسب نوع الملفات
/*
src/
├── components/
│   ├── UserCard.tsx      # مكون العرض
│   └── Header.tsx        # ترويسة التطبيق
├── hooks/
│   └── useUserData.ts    # خطاف جلب البيانات
├── services/
│   └── userApi.ts        # استدعاءات الشبكة
└── types/
    └── user.types.ts     # واجهات TypeScript
*/

// ملف components/UserCard.tsx يستورد من المجلدات النظيرة:
import { useUserData } from '../hooks/useUserData';
import type { UserProfile } from '../types/user.types';

export function UserCardSimple({ userId }: { userId: string }) {
  const { user } = useUserData(userId);
  return <div className="text-white text-xs">{user?.name}</div>;
}`,
      advancedExample: `// محاكاة بصرية لاستعراض شجرة المجلدات التقنية والتعامل مع ملفاتها
import { useState } from 'react';

export function TechnicalStructureExplorer() {
  const [selectedFolder, setSelectedFolder] = useState<string>('components');

  const folderContents: Record<string, string[]> = {
    components: ['Button.tsx', 'Modal.tsx', 'Sidebar.tsx', 'DataTable.tsx', 'UserCard.tsx'],
    hooks: ['useAuth.ts', 'useLocalStorage.ts', 'useTheme.ts', 'useDebounce.ts'],
    services: ['httpClient.ts', 'authService.ts', 'analyticsService.ts'],
    types: ['auth.types.ts', 'common.types.ts', 'api.types.ts'],
    utils: ['dateFormatter.ts', 'currencyConverter.ts', 'validators.ts']
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">التنظيم التقني (File-Type Grouping)</h3>
      <p className="text-xs text-slate-400 mb-4">
        تجميع الملفات بحسب هويتها التقنية؛ انقر على المجلد لاستكشاف محتوياته.
      </p>

      {/* أزرار المجلدات */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {Object.keys(folderContents).map((f) => (
          <button
            key={f}
            onClick={() => setSelectedFolder(f)}
            className={\`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all \${selectedFolder === f ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}\`}
          >
            📁 {f}/
          </button>
        ))}
      </div>

      {/* محتويات المجلد المحدد */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1.5 font-mono text-xs">
        <span className="text-slate-500 block mb-2 border-b border-slate-800 pb-1">
          محتويات مجلد src/{selectedFolder}/:
        </span>
        {folderContents[selectedFolder].map((file) => (
          <div key={file} className="text-slate-300 flex items-center gap-2">
            <span className="text-cyan-400 text-[10px]">📄</span> {file}
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
        * ملائم للمشاريع الصغيرة ذات النطاق المحدود (أقل من 20-30 مكون)، ويصبح عائقاً في الأنظمة الضخمة.
      </p>
    </div>
  );
}`,
      outputExplanation: "يوضح المثال الهيكل التقني التقليدي؛ حيث تُفرز الملفات بحسب وظيفتها البرمجية، مما يجعل العثور على أي نوع من الملفات بديهياً وسريعاً في بداية المشروع.",
      commonMistakes: [
        {
          mistake: "الاستمرار في هذا النمط عندما يتجاوز مجلد components مئات الملفات غير المترابطة",
          fix: "عندما تكبر الشاشات والميزات، انتقل فوراً إلى الهيكلة المجالية (Feature-Based) لجمع الملفات المترابطة معاً."
        },
        {
          mistake: "وضع كافة أنواع المشروع في ملف ضخم واحد `types.ts`",
          fix: "قسّم الأنواع إلى ملفات تخصصية تعبر عن نماذج البيانات بدقة."
        }
      ],
      bestPractices: [
        "استخدم التنظيم التقني للمشاريع الصغيرة، ولوحات التحكم البسيطة، والحزم البرمجية المتخصصة (Libraries).",
        "احرص على ألا يحتوي أي مجلد على أكثر من 15 إلى 20 ملفاً دون إنشاء مجلدات فرعية لتسهيل التصفح."
      ],
      infographic: {
        title: "التنظيم التقني للمجلدات",
        points: [
          "الميزة الأساسية: بساطة وسرعة فائقة في البداية وسهولة إرشاد المطورين الجدد.",
          "العيب الأساسي: تشتت الميزة الواحدة بين عدة مجلدات متباعدة عند توسع المشروع.",
          "النطاق المثالي: التطبيقات الصغيرة والمتوسطة التي لا تتجاوز 20 شاشة."
        ]
      }
    },
    {
      id: "16.2.b",
      title: "التنظيم حسب الميزات (Feature-Based Architecture)",
      englishTerm: {
        term: "Feature-Based (Domain-Driven) Architecture",
        pronunciation: "فيتشر بيسد آركيتكتشر",
        meaning: "هندسة معمارية تجمع كافة المكونات والخطافات وواجهات API والأنواع الخاصة بميزة معينة داخل مجلد مجالي مستقل"
      },
      description: "تعتبر معمارية التنظيم حسب الميزات (Feature-Based Architecture أو Screaming Architecture) المعيار الذهبي المعتمد رسمياً في كبرى شركات التقنية والمشاريع الإنتاجية العملاقة. في هذا النمط، يُقسّم التطبيق إلى مجالات أعمال مستقلة داخل مجلد `src/features/` (مثل: `features/auth/`, `features/cart/`, `features/checkout/`). وتحتوي كل ميزة على مكوناتها المحلية، وخطافاتها، وعميل API الخاص بها، وأنواعها، ومخازنها الداخلية، ولا يخرج من الميزة إلا ما يُصدر صراحة عبر ملف `index.ts` الخارجي.",
      analogy: "يشبه الأمر الأجنحة المتخصصة في مستشفى عالمي ضخم؛ جناح طب العيون يمتلك أطباءه، وغرفة عملياته، وأجهزته الليزرية، وصيدليته المستقلة الخاصة به (ميزة مكتفية ذاتياً). إذا احتجت لترقية جهاز ليزر العيون، تعمل داخل الجناح بحرية دون أن يؤثر ذلك على جناح جراحة العظام أو أقسام القلب في المستشفى!",
      whyItMatters: "يحقق هذا النمط أقصى درجات الاستقلالية (High Cohesion, Low Coupling)؛ فإذا أردت حذف ميزة معينة أو ترقيتها أو إسنادها لمطور جديد، تجد كافة ملفاتها مجتمعة في مجلد واحد، دون البحث في 10 مجلدات متفرقة.",
      syntax: "src/\n  features/\n    auth/\n      api/login.ts\n      components/LoginForm.tsx\n      hooks/useAuth.ts\n      types/auth.ts\n      index.ts // الواجهة العامة فقط",
      simpleExample: `// هيكل ميزة المصادقة المستقلة
/*
src/features/auth/
├── api/
│   └── loginUser.ts          # استدعاء خادم المصادقة
├── components/
│   └── LoginFormView.tsx     # نموذج الدخول
├── hooks/
│   └── useLoginAction.ts     # منطق تسجيل الدخول
├── types/
│   └── auth.types.ts         # واجهات المصادقة
└── index.ts                  # بوابة التصدير العامة للمشروع
*/

// ملف features/auth/index.ts (تصدير ما يحتاجه باقي التطبيق فقط):
export { LoginFormView } from './components/LoginFormView';
export { useLoginAction } from './hooks/useLoginAction';
export type { AuthUser } from './types/auth.types';`,
      advancedExample: `// مستكشف تفاعلي لمعمارية Feature-Based في متجر إلكتروني ضخم
import { useState } from 'react';

interface FeatureMetadata {
  id: string;
  title: string;
  description: string;
  files: string[];
  publicExports: string[];
}

const STORE_FEATURES: FeatureMetadata[] = [
  {
    id: 'auth',
    title: 'ميزة المصادقة (Auth Feature)',
    description: 'إدارة جلسات المستخدمين، تسجيل الدخول، واستعادة كلمات المرور.',
    files: [
      'api/login.api.ts',
      'components/LoginForm.tsx',
      'components/RegisterForm.tsx',
      'hooks/useAuthSession.ts',
      'types/auth.types.ts',
      'index.ts'
    ],
    publicExports: ['<LoginForm />', 'useAuthSession()', 'AuthUser (Type)']
  },
  {
    id: 'cart',
    title: 'سلة التسوق (Cart Feature)',
    description: 'إدارة سلة المشتريات، حساب الإجماليات، والرموز الترويجية.',
    files: [
      'api/cart.api.ts',
      'components/CartDrawer.tsx',
      'components/CartItemRow.tsx',
      'hooks/useCartStorage.ts',
      'types/cart.types.ts',
      'index.ts'
    ],
    publicExports: ['<CartDrawer />', 'useCart()', 'CartLineItem (Type)']
  },
  {
    id: 'checkout',
    title: 'الدفع والشحن (Checkout Feature)',
    description: 'بوابات الدفع الإلكتروني، حساب الضرائب، وتأكيد الفواتير.',
    files: [
      'api/paymentGateway.ts',
      'components/PaymentStepper.tsx',
      'components/AddressForm.tsx',
      'hooks/useStripeCheckout.ts',
      'index.ts'
    ],
    publicExports: ['<PaymentStepper />', 'useCheckout()']
  }
];

export function FeatureArchitectureViewer() {
  const [activeFeatureId, setActiveFeatureId] = useState<string>('auth');
  const activeFeature = STORE_FEATURES.find((f) => f.id === activeFeatureId)!;

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-lg mx-auto">
      <h3 className="text-xl font-bold text-emerald-400 mb-2">هندسة الميزات (Feature-Based Architecture)</h3>
      <p className="text-xs text-slate-400 mb-4">
        عزل كامل لكل مجال في مجلد مستقل يحتوي على شاشاته وخطافاته وواجهات الـ API.
      </p>

      {/* أزرار الميزات */}
      <div className="flex gap-2 mb-4">
        {STORE_FEATURES.map((feat) => (
          <button
            key={feat.id}
            onClick={() => setActiveFeatureId(feat.id)}
            className={\`px-3 py-1.5 rounded-xl text-xs font-bold transition-all \${activeFeatureId === feat.id ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}\`}
          >
            {feat.id.toUpperCase()}
          </button>
        ))}
      </div>

      {/* تفاصيل الميزة المحددة */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
        <div>
          <h4 className="font-bold text-sm text-slate-200">{activeFeature.title}</h4>
          <p className="text-xs text-slate-400">{activeFeature.description}</p>
        </div>

        {/* ملفات الميزة الداخلية */}
        <div>
          <span className="text-[11px] font-bold text-cyan-400 block mb-1">
            الهيكل الداخلي (src/features/{activeFeature.id}/):
          </span>
          <div className="space-y-1 font-mono text-xs bg-slate-950 p-2.5 rounded-lg border border-slate-850">
            {activeFeature.files.map((file) => (
              <div key={file} className="text-slate-300">
                📄 {file}
              </div>
            ))}
          </div>
        </div>

        {/* الصادرات العامة عبر index.ts */}
        <div>
          <span className="text-[11px] font-bold text-amber-400 block mb-1">
            الصادرات العامة المصرح بها (Public API عبر index.ts):
          </span>
          <div className="flex flex-wrap gap-1.5">
            {activeFeature.publicExports.map((exp) => (
              <span key={exp} className="px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded text-[11px] font-mono font-bold">
                {exp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح الاستعراض المعماري كيف أن ميزة مثل `cart` تملك ملفاتها الخاصة ولا تكشف لباقي المشروع إلا ما تحتاجه الصفحات الخارجية عبر `index.ts`، مما يمنع التداخل البرمجي الفوضوي ويجعل المشروع شديد الصلابة في مواجهة التوسعات المستقبلية.",
      commonMistakes: [
        {
          mistake: "استيراد ملف داخلي عميق من ميزة أخرى مثل `import { helper } from '@/features/auth/components/internal/sub/helper'`",
          fix: "لا تستورد أبداً من الأعماق؛ استورد حصراً من واجهة الميزة العامة المعتمدة `@/features/auth`."
        },
        {
          mistake: "إنشاء ميزات صغيرة جداً ومفتتة تحتوي على ملف واحد فقط",
          fix: "اجمع الميزات المترابطة وظيفياً في مجال عمل متكامل ومترابط لتجنب التفتيت الزائد."
        }
      ],
      bestPractices: [
        "اجعل كل ميزة تمتلك ملف `index.ts` يعمل كـ Public API يحدد الصادرات المسموحة فقط.",
        "ضع المكونات المشتركة بين ميزتين أو أكثر في مجلد مركزي عام مثل `src/components/ui/` أو `src/shared/`."
      ],
      infographic: {
        title: "مقارنة التنظيم التقني مقابل التنظيم بالميزات",
        points: [
          "التنظيم التقني (Technical): تعديل ميزة التسجيل يتطلب فتح 5 مجلدات متباعدة في شجرة المشروع.",
          "التنظيم بالميزات (Feature-Based): كل ما يخص التسجيل موجود في مجلد واحد `features/auth/`.",
          "المعيار: الهيكلة بالميزات هي الخيار الإلزامي في مشاريع المؤسسات والفرق البرمجية الكبيرة."
        ]
      }
    },
    {
      id: "16.2.c",
      title: "فصل صفحات التطبيق عن المكونات المشتركة",
      englishTerm: {
        term: "Separating Pages from Shared Components",
        pronunciation: "سيباريتينغ بيجز فروم شيرد كومبوننتس",
        meaning: "عزل مكونات التوجيه والصفحات الرئيسية عن مكتبة عناصر واجهة المستخدم المشتركة ومكونات التخطيط العام"
      },
      description: "في التطبيقات الاحترافية، يجب وجود تمييز حاسم في البنية بين ثلاثة مستويات من المكونات:\n1. مكونات الصفحات (Pages / Routes): موجودة في مجلد `src/pages/` أو `src/app/`؛ مسؤوليتها تنسيق وتجميع ميزات المكونات في شاشة كاملة، وقراءة معاملات الرابط (Route Params)، وتوجيه المستخدم.\n2. عناصر واجهة المستخدم المشتركة (Shared UI Primitives): موجودة في `src/components/ui/`؛ عناصر خالية من منطق الأعمال مثل `Button`, `Input`, `Dialog`, `Badge` وتعمل كنظام تصميم موحد (Design System).\n3. مكونات التخطيط العام (Layout Components): موجودة في `src/components/layout/`؛ مسؤولة عن الهيكل المحيط بالصفحات مثل `AppNavbar`, `Sidebar`, `AppFooter`.",
      analogy: "يشبه الأمر بناء فندق ضخم؛ عناصر الواجهة المشتركة (`components/ui`) هي مواد البناء القياسية (الطوب، ومقابض الأبواب، والمصابيح الموحدة). مكونات التخطيط (`layout`) هي الهيكل الخرساني والسلالم والمصاعد. أما الصفحات (`pages`) فهي الغرف المفروشة والمؤثثة لاستقبال النزلاء!",
      whyItMatters: "يمنع هذا الفصل تكرار كود التصميم ويجعل تغيير هوية الموقع أو مظهر الأزرار أمراً لحظياً يتم بتعديل ملف واحد في `components/ui/` دون الحاجة للمرور على عشرات الصفحات.",
      syntax: "src/\n  components/\n    ui/       // Button, Modal, Card (مكتبة تصميم نقية)\n    layout/   // Navbar, Footer (الهيكل العام)\n  pages/      // HomePage, DashboardPage (شاشات التوجيه)",
      simpleExample: `// مثال لهيكل الفصل الثلاثي
/*
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx        # زر عام بدون منطق أعمال
│   │   └── Card.tsx          # إطار بطاقة عام
│   └── layout/
│       └── MainLayout.tsx    # هيكل الترويسة والشريط الجانبي
└── pages/
    └── DashboardPage.tsx     # صفحة المسار /dashboard
*/

// ملف pages/DashboardPage.tsx يجمع الأجزاء بنظافة:
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/Button';

export function DashboardPage() {
  return (
    <MainLayout>
      <h1 className="text-xl font-bold">لوحة القيادة</h1>
      <Button variant="primary">تصدير التقرير</Button>
    </MainLayout>
  );
}`,
      advancedExample: `// استعراض حي لهيكلة المكونات الثلاثية في لوحة قيادة متقدمة
import { useState, ReactNode } from 'react';

// ==========================================
// 1. مكتبة العناصر المشتركة (components/ui/)
// ==========================================

export function UIButton({
  variant = 'primary',
  children,
  onClick
}: {
  variant?: 'primary' | 'secondary' | 'danger';
  children: ReactNode;
  onClick?: () => void;
}) {
  const styles = {
    primary: 'bg-cyan-600 hover:bg-cyan-500 text-white',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-300',
    danger: 'bg-rose-600 hover:bg-rose-500 text-white'
  };

  return (
    <button
      onClick={onClick}
      className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md \${styles[variant]}\`}
    >
      {children}
    </button>
  );
}

// ==========================================
// 2. مكون التخطيط العام (components/layout/)
// ==========================================

export function AppShellLayout({
  activeNav,
  onNavClick,
  children
}: {
  activeNav: string;
  onNavClick: (nav: string) => void;
  children: ReactNode;
}) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden text-white max-w-lg mx-auto">
      {/* شريط الملاحة العلوي المشترك */}
      <div className="p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
        <span className="font-black text-cyan-400 text-sm">نظام المؤسسة ERP</span>
        <div className="flex gap-2">
          {['الرئيسية', 'المخازن', 'التقارير'].map((item) => (
            <button
              key={item}
              onClick={() => onNavClick(item)}
              className={\`px-3 py-1 rounded-lg text-xs font-semibold \${activeNav === item ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'}\`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* منطقة محتوى الصفحة المتغير */}
      <div className="p-6">{children}</div>
    </div>
  );
}

// ==========================================
// 3. مكون الصفحة (pages/InventoryPage.tsx)
// ==========================================

export function InventoryPage() {
  const [activeTab, setActiveTab] = useState('المخازن');
  const [actionLog, setActionLog] = useState<string | null>(null);

  return (
    <AppShellLayout activeNav={activeTab} onNavClick={setActiveTab}>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-white">إدارة مخزون البضائع</h3>
            <p className="text-xs text-slate-400">صفحة مسار التوجيه (Route Page) مجمعة من عناصر UI</p>
          </div>
          <UIButton variant="primary" onClick={() => setActionLog('تم فتح نافذة إضافة بضاعة')}>
            + إضافة صنف
          </UIButton>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs">
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span>شاشات احترافية 4K</span>
            <span className="font-mono text-emerald-400 font-bold">24 قطعة متوفرة</span>
          </div>
          <div className="flex justify-between">
            <span>لوحات مفاتيح لاسلكية</span>
            <span className="font-mono text-emerald-400 font-bold">58 قطعة متوفرة</span>
          </div>
        </div>

        {actionLog && (
          <p className="text-xs text-cyan-300 p-2 bg-slate-900/60 border border-slate-800 rounded-lg">
            ⚡ {actionLog}
          </p>
        )}
      </div>
    </AppShellLayout>
  );
}`,
      outputExplanation: "يوضح المثال النظافة المعمارية؛ فمكون `InventoryPage` يركز فقط على بيانات صفحة المخازن ويدمج زر `UIButton` القياسي داخل هيكل `AppShellLayout`، دون أن يحتاج لكتابة أكواد الترويسة أو ألوان الأزرار مسبقة التعريف.",
      commonMistakes: [
        {
          mistake: "وضع استدعاءات API أو منطق أعمال معقد داخل مكونات `components/ui/`",
          fix: "اجعل مكونات الـ UI خالية تماماً من منطق الأعمال وقابلة للاستخدام في أي تطبيق آخر."
        },
        {
          mistake: "تكرار شريط الـ Navbar والـ Footer في كل صفحة بشكل يدوي",
          fix: "استخدم مكون Layout عام يغلف مسارات الصفحات عبر ميزة Nested Routes أو الـ Layout Component."
        }
      ],
      bestPractices: [
        "حافظ على مجلد `components/ui/` كأنه مكتبة npm مستقلة خاصة بشركتك.",
        "اجعل مكونات الصفحات خفيفة وركز فيها على قراءة المعاملات وتجميع ميزات الـ Features."
      ],
      infographic: {
        title: "المستويات الثلاثية لتنظيم المكونات",
        points: [
          "مستوى العناصر المشتركة (components/ui): أزرار، حقول، نوافذ (خالية من منطق الأعمال).",
          "مستوى التخطيط العام (components/layout): أشرطة الملاحة، الهيكل، الفوتر.",
          "مستوى الصفحات (pages / app): شاشات المسارات التي تجمع الميزات في واجهة متكاملة."
        ]
      }
    },
    {
      id: "16.2.d",
      title: "تنظيم Hooks",
      englishTerm: {
        term: "Organizing React Hooks",
        pronunciation: "أورغانيزينغ رياكت هوكس",
        meaning: "استراتيجية فرز الخطافات بين خطافات عامة مشتركة وخطافات محلية مقيدة بميزة وظيفية محددة"
      },
      description: "مع نمو المشروع، تتراكم عشرات الخطافات المخصصة (Custom Hooks). يجب فرز الخطافات وفق نطاقين محددين:\n1. الخطافات العامة (Global Utility Hooks): توضع في مجلد مركزي `src/hooks/`؛ وهي خطافات عامة لا ترتبط بأي ميزة أعمال معينة ويمكن استخدامها في أي مشروع (مثل: `useDebounce`, `useMediaQuery`, `useLocalStorage`, `useOnClickOutside`).\n2. الخطافات المجالية (Feature-Scoped Hooks): توضع داخل مجلد الميزة نفسها `src/features/cart/hooks/`؛ وهي خطافات متخصصة تدير بيانات وقواعد أعمال ميزة محددة (مثل: `useCartDiscount`, `useCheckoutValidation`).",
      analogy: "يشبه الأمر صندوق الأدوات في ورشة صيانة؛ الأدوات العامة (المفك، المطرقة، شريط القياس) توضع في الصندوق المركزي عند المدخل ويستخدمها الجميع (`src/hooks`). بينما جهاز فحص أعطال محرك سيارة مرسيدس يوضع حصراً في قسم صيانة مرسيدس (`features/mercedes/hooks`)!",
      whyItMatters: "يمنع هذا الفرز تلوث مجلد `hooks` العام بمئات الخطافات الخاصة التي لا فائدة منها للمكونات الأخرى، ويسهل صيانة قواعد الأعمال ضمن نطاقها المخصص.",
      syntax: "src/\n  hooks/                 // خطافات عامة (useDebounce, useTheme)\n  features/\n    checkout/\n      hooks/             // خطافات محلية (useCheckoutStep, useCoupon)",
      simpleExample: `// مثال لفرز الخطافات
// 1. خطاف عام مستقل في src/hooks/useWindowScroll.ts
export function useWindowScroll() {
  // يراقب موضع التمرير في أي صفحة
}

// 2. خطاف خاص في src/features/billing/hooks/useInvoiceCalculator.ts
export function useInvoiceCalculator(items: any[]) {
  // يحسب ضريبة القيمة المضافة الخاصة بفواتير الشركة
}`,
      advancedExample: `// لوحة استعراض استراتيجية تنظيم الخطافات وتوزيعها الهندسي
import { useState } from 'react';

interface HookMetadata {
  name: string;
  scope: 'Global (عام)' | 'Feature-Scoped (مجالي)';
  path: string;
  purpose: string;
}

const PROJECT_HOOKS_REGISTRY: HookMetadata[] = [
  { name: 'useDebounce', scope: 'Global (عام)', path: 'src/hooks/useDebounce.ts', purpose: 'تأخير التحديثات اللحظية' },
  { name: 'useMediaQuery', scope: 'Global (عام)', path: 'src/hooks/useMediaQuery.ts', purpose: 'فحص تجاوب الشاشات' },
  { name: 'useLocalStorage', scope: 'Global (عام)', path: 'src/hooks/useLocalStorage.ts', purpose: 'التخزين المحلي الآمن' },
  { name: 'useCartTotals', scope: 'Feature-Scoped (مجالي)', path: 'src/features/cart/hooks/useCartTotals.ts', purpose: 'حساب مبالغ السلة والخصومات' },
  { name: 'usePaymentProcessing', scope: 'Feature-Scoped (مجالي)', path: 'src/features/checkout/hooks/usePaymentProcessing.ts', purpose: 'إدارة مدفوعات البطاقات' }
];

export function HooksOrganizationExplorer() {
  const [filter, setFilter] = useState<'all' | 'global' | 'feature'>('all');

  const filtered = PROJECT_HOOKS_REGISTRY.filter((h) => {
    if (filter === 'global') return h.scope.includes('Global');
    if (filter === 'feature') return h.scope.includes('Feature');
    return true;
  });

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">استراتيجية تنظيم الخطافات (Hooks)</h3>
      <p className="text-xs text-slate-400 mb-4">
        فصل حاسم بين أدوات المتصفح العامة ومنطق الأعمال المتخصص.
      </p>

      {/* خيارات التصفية */}
      <div className="flex gap-2 mb-4">
        {(['all', 'global', 'feature'] as const).map((m) => (
          <button
            key={m}
            onClick={() => setFilter(m)}
            className={\`px-3 py-1 rounded-lg text-xs font-semibold transition-all \${filter === m ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-400'}\`}
          >
            {m === 'all' ? 'كافة الخطافات' : m === 'global' ? 'العامة (Global)' : 'المجالية (Feature)'}
          </button>
        ))}
      </div>

      {/* قائمة الخطافات */}
      <div className="space-y-2">
        {filtered.map((h) => (
          <div key={h.name} className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1 text-xs">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-200 font-mono text-cyan-300">{h.name}()</span>
              <span
                className={\`text-[10px] px-2 py-0.5 rounded-full font-bold \${h.scope.includes('Global') ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'}\`}
              >
                {h.scope}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">{h.path}</p>
            <p className="text-slate-300 text-[11px] pt-1">{h.purpose}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح الجدول المرجعي التوزيع المنطقي السليم للخطافات؛ فالخطافات التي لا تحتوي على أي مفاهيم متعلقة بمجال التطبيق (Domain Concepts) تعيش في `src/hooks/`، بينما تعيش الخطافات التي تفهم السلة أو الدفع داخل مجلدات الميزات الخاصة بها.",
      commonMistakes: [
        {
          mistake: "وضع كافة خطافات المشروع في مجلد واحد `src/hooks/` حتى يصل عددها لمئات الملفات",
          fix: "انقل أي خطاف يخدم ميزة معينة حصراً إلى داخل مجلد تلك الميزة."
        },
        {
          mistake: "تسمية الخطافات بأسماء عامة غامضة مثل `useData` أو `useHelper`",
          fix: "اختر أسماء دقيقة وصريحة تعبر عن وظيفة الخطاف مثل `useProductsCatalog` أو `useFormValidation`."
        }
      ],
      bestPractices: [
        "اجعل كل خطاف مسؤولاً عن وظيفة واحدة محددة (Single Responsibility Principle).",
        "احرص على كتابة اختبارات وحدة (Unit Tests) للخطافات العامة المودعة في `src/hooks/`."
      ],
      infographic: {
        title: "معيار فرز الخطافات المخصصة",
        points: [
          "هل يعمل الخطاف في أي موقع ويب آخر دون تعديل؟ ➔ مكانه `src/hooks/` العام (Global).",
          "هل يفهم الخطاف بنية منتجاتك أو خطة أسعارك؟ ➔ مكانه داخل `src/features/[name]/hooks/`.",
          "القاعدة: لا تضع في المجلد العام إلا الأدوات المجردة المحايدة."
        ]
      }
    },
    {
      id: "16.2.e",
      title: "تنظيم Services و API Clients",
      englishTerm: {
        term: "Organizing Services & API Clients",
        pronunciation: "أورغانيزينغ سيرفيسز آند إيه بي آي كلاينتس",
        meaning: "إنشاء طبقة شبكية موحدة وعازلة (HTTP Client Layer) تتولى الترويسات والتوكن واعتراض الأخطاء"
      },
      description: "من الأخطاء الكبرى في المشاريع استدعاء دالة `fetch('https://api.com/users')` مباشرة داخل المكونات. الأسلوب المعماري السليم يقتضي إنشاء طبقة عميل شبكة مركزية في `src/services/apiClient.ts` (باستخدام Axios أو Fetch Wrapper مخصص). تتكفل هذه الطبقة بإضافة رمز المصادقة (Auth Token) تلقائياً، والتعامل الموحد مع انتهاء الجلسة (401 Refresh Token)، وإلغاء الطلبات، وتوحيد رسائل الخطأ، مما يجعل استدعاء البيانات في باقي الميزات بسيطاً ونظيفاً للغاية.",
      analogy: "يشبه الأمر سفارة الدولة في الخارج؛ السفارة هي القناة الدبلوماسية الوحيدة المعتمدة لإرسال واستقبال الرسائل الرسمية؛ تقوم بتشفير الرسائل، وإضافة الأختام الرسمية، والتأكد من بروتوكول الأمان، بدلاً من أن يرسل كل موطن في الدولة رسالة عشوائية خاصة به للخارج!",
      whyItMatters: "إذا قررت الشركة تغيير رابط الخادم الرئيسي (Base URL)، أو تغيير طريقة إرسال التوكن، تقوم بتعديل سطر واحد فقط في ملف العميل المركزي `apiClient.ts` بدلاً من البحث في مئات الملفات لتعديل الروابط.",
      syntax: "// عميل شبكة مركزي موحد:\nexport const apiClient = {\n  get: async (url) => { ... },\n  post: async (url, body) => { ... }\n};",
      simpleExample: `// مثال لعميل شبكة مركزي مبسط
const BASE_URL = 'https://api.example.com/v1';

export async function customFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('token');

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: \`Bearer \${token}\` } : {}),
    ...options.headers
  };

  const response = await fetch(\`\${BASE_URL}\${endpoint}\`, {
    ...options,
    headers
  });

  if (!response.ok) {
    throw new Error(\`خطأ في الخادم: \${response.status}\`);
  }

  return response.json() as Promise<T>;
}`,
      advancedExample: `// محاكاة بنية عميل شبكة متقدم مع محاكاة المعترضات (Interceptors)
import { useState } from 'react';

// محاكاة واجهة العميل المركزي الموحد
class MockApiClient {
  private token: string | null = 'jwt-secure-token-9988';

  public async request(endpoint: string, method: 'GET' | 'POST', body?: unknown) {
    // محاكاة اعتراض الطلب وحقن الترويسات
    console.log(\`🌐 [API Client] إرسال طلب \${method} إلى \${endpoint} مع التوكن...\`);
    await new Promise((r) => setTimeout(r, 500));

    if (endpoint === '/error') {
      throw new Error('401 Unauthorized: انتهت صلاحية الجلسة');
    }

    return {
      status: 200,
      data: { message: 'تمت معالجة الطلب بنجاح', path: endpoint, timestamp: Date.now() }
    };
  }

  public setToken(t: string | null) {
    this.token = t;
  }
}

const client = new MockApiClient();

export function ApiClientArchitectureViewer() {
  const [log, setLog] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const testSuccessRequest = async () => {
    try {
      const res = await client.request('/users/me', 'GET');
      setLog(\`✅ استجابة ناجحة (رمز 200): \${res.data.message}\`);
      setIsError(false);
    } catch (e) {
      setLog(String(e));
      setIsError(true);
    }
  };

  const testErrorRequest = async () => {
    try {
      await client.request('/error', 'GET');
    } catch (e: unknown) {
      setLog(\`❌ اعتراض الخطأ المركزي: \${e instanceof Error ? e.message : 'خطأ'}\`);
      setIsError(true);
    }
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">طبقة عميل الشبكة (API Client)</h3>
      <p className="text-xs text-slate-400 mb-4">
        عزل كامل لطلبات HTTP، وإدارة الترويسات والتوكن واعتراض الأخطاء في مكان واحد.
      </p>

      <div className="flex gap-2 mb-4">
        <button
          onClick={testSuccessRequest}
          className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 font-bold rounded-xl text-xs transition-colors"
        >
          طلب عادي ناجح
        </button>
        <button
          onClick={testErrorRequest}
          className="flex-1 py-2 bg-rose-600 hover:bg-rose-500 font-bold rounded-xl text-xs transition-colors"
        >
          طلب يفشل للاعتراض
        </button>
      </div>

      {log && (
        <div
          className={\`p-3.5 rounded-xl border font-mono text-xs \${
            isError ? 'bg-rose-950/40 border-rose-800 text-rose-300' : 'bg-slate-900 border-slate-800 text-emerald-400'
          }\`}
        >
          {log}
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "يوضح الكود كيف تعمل طبقة `apiClient` كحاجز أمني وتنظيمي؛ حيث تقوم بحقن التوكن ومعالجة رموز الأخطاء مركزياً، مما يحمي المكونات من التعامل المباشر مع تفاصيل الـ HTTP المعقدة.",
      commonMistakes: [
        {
          mistake: "كتابة روابط الـ API الكاملة مثل `fetch('https://...')` مكررة في كل شاشة",
          fix: "استخدم دائماً Base URL موحداً في ملف العميل واقرأ المتغير من `.env`."
        },
        {
          mistake: "إهمال معالجة أخطاء الشبكة العامة (مثل انقطاع الاتصال 503) في مكان مركزي",
          fix: "أضف معترضات (Interceptors) في عميل الشبكة لعرض تنبيه موحد للمستخدم عند انقطاع الاتصال."
        }
      ],
      bestPractices: [
        "عزل كافة دوال الـ API في ملفات متخصصة (مثل `auth.api.ts`, `products.api.ts`).",
        "احرص على ألا تعرف المكونات تفاصيل كيفية إرسال الطلب (Axios أو Fetch)، بل تستدعي دوالاً واضحة مثل `getUserProfile()`."
      ],
      infographic: {
        title: "هندسة طبقة عميل الشبكة الموحد",
        points: [
          "نقطة انطلاق مركزية: ملف `apiClient.ts` واحد يدير الـ Base URL والتوكن.",
          "المعترضات (Interceptors): حقن الترويسات آلياً وتجديد التوكن عند انتهاء الصلاحية.",
          "دوال الخدمات المجالية: دوال صريحة مثل `fetchOrders()` تُرجع بيانات موثقة بالأنواع بنسبة 100%."
        ]
      }
    },
    {
      id: "16.2.f",
      title: "تنظيم Types و Utilities",
      englishTerm: {
        term: "Organizing Types & Pure Utilities",
        pronunciation: "أورغانيزينغ تايبس آند بيور يوتيليتيز",
        meaning: "فصل نماذج البيانات والواجهات البرمجية والدوال الحسابية المساعدة النقية في ملفات معيارية مستقلة"
      },
      description: "الدوال المساعدة (Utilities) ونماذج الأنواع (Types) هي ركائز أساسية لاستقرار التطبيق. يجب أن تكون الدوال المودعة في مجلد `src/utils/` دوالاً نقية تماماً (Pure Functions)؛ أي أنها لا تعتمد على React، ولا تمتلك أي آثار جانبية، ولا تقرأ من متغيرات عامة متغيرة (مثل دوال تنسيق التواريخ `formatDate`, وتحويل العملات `formatCurrency`, وحساب النسب المئوية). يتم تنظيم الأنواع أيضاً وفق نطاقين: أنواع نماذج الأعمال المشتركة في `src/types/`، وأنواع الواجهات المحلية داخل مجلدات الميزات.",
      analogy: "يشبه الأمر القواميس والمعاجم في مكتبة عامة؛ القاموس محايد ونقي، لا يتدخل في السياسة ولا يغير معاني الكلمات بتغير مزاج القارئ! تفتحه للتأكد من المعنى الدقيق في أي لحظة ثم تعيده للرف دون أن يحدث أي فوضى في الغرفة.",
      whyItMatters: "الدوال النقية في مجلد `utils` تكون فائقة السهولة في الاختبار البرمجي (Unit Testing) بنسبة تغطية 100%، وتوفر للمشروع دقة رياضية وتناسقاً في عرض الأرقام والتواريخ.",
      syntax: "// دالة مساعدة نقية ومختبرة في src/utils/currency.ts:\nexport function formatCurrency(amount: number, currency = 'USD'): string {\n  return new Intl.NumberFormat('ar-EG', { style: 'currency', currency }).format(amount);\n}",
      simpleExample: `// دالة مساعدة نقية لتنسيق التواريخ
export function formatArabicDate(date: Date): string {
  return new Intl.DateTimeFormat('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// استخدام الدالة بسهولة تامة
export function DateDemo() {
  const formatted = formatArabicDate(new Date());
  return <div className="text-white text-xs">تاريخ اليوم: {formatted}</div>;
}`,
      advancedExample: `// استوديو اختبار الأدوات المساعدة النقية (Pure Utilities Studio)
import { useState } from 'react';

// ==========================================
// 1. مكتبة أدوات مساعدة نقية 100% (src/utils/)
// ==========================================

export const Formatters = {
  // تنسيق العملات
  currency: (amount: number, curr: 'USD' | 'SAR' | 'EUR' = 'SAR'): string => {
    return new Intl.NumberFormat('ar-SA', { style: 'currency', currency: curr }).format(amount);
  },

  // اختصار النصوص الطويلة
  truncate: (text: string, maxLength: number = 25): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  },

  // حساب النسبة المئوية
  percentage: (partial: number, total: number): string => {
    if (total === 0) return '0%';
    return Math.round((partial / total) * 100) + '%';
  }
};

// ==========================================
// 2. مكون استعراض واختبار الدوال المساعدة
// ==========================================

export function PureUtilitiesExplorer() {
  const [num, setNum] = useState<number>(14500.75);
  const [rawText, setRawText] = useState<string>('هذا نص طويل جداً يحتاج إلى اقتطاع لحماية تصميم البطاقة من التمدد الزائد');

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">الأدوات المساعدة النقية (Pure Utilities)</h3>
      <p className="text-xs text-slate-400 mb-4">
        دوال نقية خالية من الآثار الجانبية ومختبرة لضمان التناسق الرياضي والشكلي.
      </p>

      {/* اختبار تنسيق العملة */}
      <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl mb-3 space-y-2">
        <span className="text-[11px] text-slate-400 font-semibold block">تنسيق المبالغ المالية:</span>
        <div className="flex justify-between items-center text-xs">
          <span className="font-mono text-slate-300">الرقم الخام: {num}</span>
          <span className="font-bold text-emerald-400 font-mono">
            {Formatters.currency(num, 'SAR')}
          </span>
        </div>
      </div>

      {/* اختبار اقتطاع النص */}
      <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl mb-3 space-y-1">
        <span className="text-[11px] text-slate-400 font-semibold block">اقتطاع النصوص الطويلة (Truncate):</span>
        <p className="text-[11px] text-slate-300 font-mono bg-slate-950 p-2 rounded">
          {Formatters.truncate(rawText, 35)}
        </p>
      </div>

      {/* اختبار حساب النسبة */}
      <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
        <span className="text-[11px] text-slate-400 font-semibold block">حساب الإنجاز:</span>
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-400">إنجاز 85 من 120 مهمة:</span>
          <span className="font-bold text-cyan-300 font-mono">{Formatters.percentage(85, 120)}</span>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "تتميز دوال كائن `Formatters` بأنها دوال نقية 100%؛ تقبل مدخلات وتُرجع مخرجات محددة، لا تعتمد على DOM ولا على React، مما يجعلها قابلة للاختبار بواسطة Jest أو Vitest في أجزاء من الميلي ثانية.",
      commonMistakes: [
        {
          mistake: "وضع دوال تحتوي على hooks أو state داخل مجلد `utils`",
          fix: "مجلد utils مخصص للدوال النقية فقط؛ وإذا كانت الدالة تحتاج لـ Hooks فمكانها هو مجلد `hooks/`."
        },
        {
          mistake: "إنشاء ملف `utils.ts` عملاق بطول آلاف الأسطر يحتوي كل شيء عشوائياً",
          fix: "قسّم الأدوات لملفات تخصصية: `date.utils.ts`, `string.utils.ts`, `currency.utils.ts`."
        }
      ],
      bestPractices: [
        "احرص على أن تكون كافة دوال مجلد `utils` دوالاً نقية (Pure Functions) بلا أي آثار جانبية.",
        "اكتب اختبارات وحدة (Unit Tests) شاملة لكل دالة مساعدة لحماية الحسابات المالية الحساسة."
      ],
      infographic: {
        title: "خصائص دوال مجلد utils النموذجي",
        points: [
          "نقاء مطلق (Purity): نفس المدخلات تعطي نفس المخرجات دائماً.",
          "صفر ارتباط بـ React: لا تستدعي Hooks ولا تعيد JSX.",
          "سهولة الاختبار: تغطية اختبارات بنسبة 100% في ثوانٍ معدودة."
        ]
      }
    },
    {
      id: "16.2.g",
      title: "استخدام Path Aliases",
      englishTerm: {
        term: "Configuring Path Aliases",
        pronunciation: "كونفيغورينغ باث ألياسز",
        meaning: "إعداد المسارات المختصرة في ملفات الإعدادات للقضاء على فوضى الاستيرادات النسبية المعقدة"
      },
      description: "في المشاريع الكبيرة ذات المجلدات المتداخلة، تصبح الاستيرادات النسبية كابوساً مزعجاً وغير مقروء؛ مثل: `import { Button } from '../../../../components/ui/Button'`. هذا النمط الهش ينكسر فوراً عند نقل الملف لمجلد آخر! تتيح لنا المسارات المختصرة (Path Aliases) استبدال كل هذه النقاط برمز أنيق وموحد مثل `@/` أو `~/` يشير مباشرة إلى مجلد `src/`، مما يجعل الاستيراد نظيفاً وموحداً وثابتاً بغض النظر عن عمق الملف الحالي.",
      analogy: "يشبه الأمر كتابة العنوان البريدي الوطني الموحد؛ بدلاً من أن تصف لسائق التوصيل: 'ادخل الحي الفلاني، ثم اتجه 3 شوارع للأمام، ثم انعطف يساراً خلف المسجد القديم' (مسارات نسبية معقدة تنكسر إذا تغير الطريق)، تعطيه ببساطة: 'الرمز البريدي: @/home' فيصل للعنوان مباشرة عبر الخريطة الذكية!",
      whyItMatters: "يحمي Path Aliases المشروع من أخطاء النقل، ويسهل قراءة الملفات في مراجعات الكود (Code Reviews)، ويوفر تجربة كتابة كود مريحة وفائقة السرعة مع الإكمال التلقائي.",
      syntax: "// في tsconfig.json:\n{\n  \"compilerOptions\": {\n    \"baseUrl\": \".\",\n    \"paths\": {\n      \"@/*\": [\"src/*\"]\n    }\n  }\n}\n\n// في vite.config.ts:\nresolve: { alias: { '@': path.resolve(__dirname, './src') } }",
      simpleExample: `// مقارنة مباشرة بين الاستيراد النسبي الهش والاستيراد بالـ Alias

// ❌ استيراد نسبي هش ومعقد ينكسر عند نقل الملف:
// import { UserAvatar } from '../../../../components/ui/UserAvatar';

// ✅ استيراد نظيف وثابت وموثوق بفضل Path Alias:
import { UserCardSimple } from '@/components/UserCard';

export function CleanImportDemo() {
  return <div className="text-white text-xs">استيراد نظيف عبر @/</div>;
}`,
      advancedExample: `// محاكي إعداد وفحص الـ Path Aliases وتكوينها في Vite و TypeScript
import { useState } from 'react';

export function PathAliasConfigViewer() {
  const [activeConfig, setActiveConfig] = useState('tsconfig');

  const tsconfigSnippet = JSON.stringify({
    compilerOptions: {
      baseUrl: ".",
      paths: {
        "@/*": ["src/*"],
        "@features/*": ["src/features/*"],
        "@components/*": ["src/components/*"],
        "@hooks/*": ["src/hooks/*"]
      }
    }
  }, null, 2);

  const viteSnippet = [
    "import { defineConfig } from 'vite';",
    "import react from '@vitejs/plugin-react';",
    "import path from 'path';",
    "",
    "export default defineConfig({",
    "  plugins: [react()],",
    "  resolve: {",
    "    alias: {",
    "      '@': path.resolve(__dirname, './src'),",
    "      '@features': path.resolve(__dirname, './src/features'),",
    "      '@components': path.resolve(__dirname, './src/components'),",
    "      '@hooks': path.resolve(__dirname, './src/hooks')",
    "    }",
    "  }",
    "});"
  ].join('\\n');

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-lg mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">إعداد المسارات المختصرة (Path Aliases)</h3>
      <p className="text-xs text-slate-400 mb-4">
        تنسيق ملفات الإعدادات في TypeScript و Vite لضمان استيرادات نظيفة وموحدة.
      </p>

      {/* أزرار التبديل بين الملفين */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveConfig('tsconfig')}
          className={'px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ' + (activeConfig === 'tsconfig' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400')}
        >
          tsconfig.json
        </button>
        <button
          onClick={() => setActiveConfig('vite')}
          className={'px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ' + (activeConfig === 'vite' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400')}
        >
          vite.config.ts
        </button>
      </div>

      {/* استعراض كود الإعداد */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
        <pre className="font-mono text-xs text-emerald-300 whitespace-pre">
          {activeConfig === 'tsconfig' ? tsconfigSnippet : viteSnippet}
        </pre>
      </div>

      <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
        * يجب تطابق المسارات في كلا الملفين: tsconfig.json ليفهمها محرر VS Code، و vite.config.ts ليفهمها خادم التطوير والـ Bundler.
      </p>
    </div>
  );
}`,
      outputExplanation: "يوضح الكود التكوين المزدوج الإلزامي؛ حيث يُعلم `tsconfig.json` المحرر بالمسار لتوفير الإكمال التلقائي، بينما يتولى `vite.config.ts` ترجمة المسار الفعلي أثناء التجميع والبناء لضمان عدم حدوث أخطاء `Module not found`.",
      commonMistakes: [
        {
          mistake: "إعداد الـ Alias في `tsconfig.json` فقط ونسيانه في `vite.config.ts`",
          fix: "يجب إعداده في الملفين معاً، أو استخدام إضافة مثل `vite-tsconfig-paths` لقرائته تلقائياً."
        },
        {
          mistake: "استخدام مسارات عميقة ومفرطة مثل `@components-ui-buttons-special/*`",
          fix: "التزم بالاختصار القياسي البسيط `@/*` الذي يغطي كافة مجلدات `src/` بسلاسة."
        }
      ],
      bestPractices: [
        "استخدم الرمز القياسي `@/*` للإشارة إلى مجلد `src/*` في كافة مشاريعك الحديثة.",
        "ثبت إضافة `vite-tsconfig-paths` لأتمتة مزامنة المسارات بين TypeScript و Vite بدون تكرار."
      ],
      infographic: {
        title: "الاستيراد النسبي مقابل Path Aliases",
        points: [
          "الاستيراد النسبي (Spaghetti): `../../../../components/Button` ➔ هش، ينكسر عند نقل الملف، غير مقروء.",
          "المسار المختصر (Path Alias): `@/components/Button` ➔ ثابت، لا ينكسر أبداً، ونظيف بنسبة 100%.",
          "القاعدة: لا تستخدم النقاط المتتالية `../../` في أي مشروع احترافي."
        ]
      }
    },
    {
      id: "16.2.h",
      title: "إدارة ملفات الإعدادات",
      englishTerm: {
        term: "Configuration & Environment Management",
        pronunciation: "كونفيغوريشن آند إنفيرونمنت مانيجمنت",
        meaning: "تنظيم متغيرات البيئة والأسرار وإعدادات التطبيق بأسلوب آمن وموثق بالأنواع"
      },
      description: "تحتاج تطبيقات React إلى الاتصال ببيئات متعددة (التطوير المحلي Development، بيئة الاختبار Staging، وبيئة الإنتاج Production). تُدار هذه الإعدادات عبر ملفات `.env` واستدعاء `import.meta.env` في بيئة Vite. الممارسة المعمارية الآمنة تقتضي:\n1. حظر تضمين أي أسرار حساسة (مثل المفاتيح الخاصة للخوادم) داخل كود الـ Frontend؛ فكل متغير يبدأ بـ `VITE_` يتم تضمينه علناً في حزمة المتصفح ويمكن لأي شخص قراءته!\n2. إنشاء ملف إعدادات مركزي `src/config/appConfig.ts` يتحقق من وجود وصحة متغيرات البيئة عند إقلاع التطبيق، لتفادي الانهيارات غير المتوقعة في الإنتاج.",
      analogy: "يشبه الأمر مفاتيح لوحة التشغيل في محطة كهرباء؛ المفاتيح والأزرار العادية (مثل مفتاح تشغيل الإنارة ومقياس الجهد) موضوعة في الصالة العامة ليراها الفنيون (`VITE_PUBLIC_CONFIG`). بينما مفاتيح صمامات الأمان النووي وقواطع الجهد العالي (الأسرار الخاصة) مقفلة داخل غرفة سرية في السيرفر لا يملك مفتاحها إلا مدير المحطة حصراً!",
      whyItMatters: "تأمين متغيرات البيئة يحمي شركتك من تسريب مفاتيح واجهات الـ API الحساسة، ويضمن إقلاع التطبيق بسلاسة وتحديد عنوان الخادم الصحيح لكل بيئة عمل تلقائياً.",
      syntax: "// في .env:\nVITE_API_URL=https://api.myapp.com\n\n// في src/config/app.config.ts:\nexport const appConfig = {\n  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000'\n};",
      simpleExample: `// مثال لقراءة متغيرات البيئة في Vite بأمان
export const AppConfig = {
  // قراءة رابط السيرفر
  apiBaseUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:5000',
  // تحديد بيئة العمل
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD
};

export function SimpleConfigViewer() {
  return (
    <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs">
      <p>رابط الخادم المعتمد: <span className="font-mono text-cyan-400">{AppConfig.apiBaseUrl}</span></p>
      <p>الوضع الحالي: <span className="font-bold text-amber-400">{AppConfig.isDev ? 'بيئة تطوير (Dev)' : 'إنتاج (Prod)'}</span></p>
    </div>
  );
}`,
      advancedExample: `// نظام متكامل للتحقق من صحة متغيرات البيئة مع أمان الأنواع
import { useState } from 'react';

// محاكاة كائن الإعدادات المعتمد مع الفحص الاستباقي
interface ValidatedConfig {
  apiUrl: string;
  appVersion: string;
  enableAnalytics: boolean;
  maxUploadLimitMb: number;
}

// دالة فحص وتأكيد سلامة الإعدادات
function getSafeAppConfig(): { config: ValidatedConfig | null; error: string | null } {
  const apiUrl = import.meta.env.VITE_API_URL || 'https://api.myproduction.com/v1';
  const appVersion = '2.4.0';

  // التحقق من صلاحية الرابط
  if (!apiUrl.startsWith('http')) {
    return { config: null, error: 'تكوين خاطئ: VITE_API_URL يجب أن يبدأ بـ http أو https' };
  }

  return {
    config: {
      apiUrl,
      appVersion,
      enableAnalytics: true,
      maxUploadLimitMb: 10
    },
    error: null
  };
}

export function AppConfigSecurityDashboard() {
  const { config, error } = getSafeAppConfig();
  const [showWarning, setShowWarning] = useState<boolean>(true);

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">إدارة الإعدادات والبيئة (App Config)</h3>
      <p className="text-xs text-slate-400 mb-4">
        فحص أمان متغيرات البيئة ومنع تسريب الأسرار إلى حزمة المتصفح.
      </p>

      {/* تحذير أمني مهم */}
      {showWarning && (
        <div className="p-3 bg-amber-950/40 border border-amber-800/80 rounded-xl text-amber-300 text-xs mb-4 flex justify-between items-start">
          <div className="space-y-1">
            <span className="font-bold block">⚠️ قاعدة أمنية حاسمة:</span>
            <p className="text-[11px] leading-relaxed">
              أي متغير يبدأ بـ VITE_ يُضمن علناً في ملفات الـ JS ويمكن للمستخدم قراءته. لا تضع أبداً مفاتيح قواعد البيانات أو أسرار Stripe الخاصة هنا!
            </p>
          </div>
          <button onClick={() => setShowWarning(false)} className="text-slate-400 hover:text-white mr-2">✕</button>
        </div>
      )}

      {error ? (
        <div className="p-3 bg-rose-950 border border-rose-800 text-rose-300 text-xs rounded-xl">
          ❌ {error}
        </div>
      ) : config ? (
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs font-mono">
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">رابط الخادم:</span>
            <span className="text-cyan-300">{config.apiUrl}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">إصدار التطبيق:</span>
            <span className="text-emerald-400">{config.appVersion}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">تتبع التحليلات:</span>
            <span className="text-amber-400">{config.enableAnalytics ? 'مفعل' : 'معطل'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">الحد الأقصى للرفع:</span>
            <span className="text-purple-400">{config.maxUploadLimitMb} MB</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}`,
      outputExplanation: "يوضح الكود أفضل الممارسات؛ حيث يتم جمع كافة متغيرات البيئة في كائن مركزي `config` مع التحقق الصارم من صحتها ومنع استخدام قيم مكسورة، مع التشديد على الحظر الأمني لتضمين أي أسرار في شفرة الـ Frontend.",
      commonMistakes: [
        {
          mistake: "وضع المفاتيح السرية الخاصة (Private Keys) في ملف `.env` في مشروع React",
          fix: "تذكر أن كود React يعمل في متصفح المستخدم ويمكن استخراج كافة متغيرات البيئة منه؛ احتفظ بالأسرار على خادم Backend حصراً."
        },
        {
          mistake: "تضمين ملفات `.env.local` أو التي تحتوي على بيانات حقيقية في مستودع Git",
          fix: "أضف `.env*` إلى ملف `.gitignore` دائماً، واكتفِ بنشر نموذج تجريبي خالي من البيانات مثل `.env.example`."
        }
      ],
      bestPractices: [
        "اجمع قراءة كافة متغيرات البيئة في ملف واحد `src/config/index.ts` ووفر قيماً افتراضية منطقية.",
        "استخدم مكتبات فحص المخططات مثل Zod للتحقق من صحة متغيرات البيئة عند إقلاع التطبيق."
      ],
      infographic: {
        title: "بروتوكول أمان متغيرات البيئة في React",
        points: [
          "متغيرات عامة (VITE_): روابط الـ API، أرقام الإصدارات، مفاتيح خرائط عامة ➔ مسموحة في المتصفح.",
          "أسرار خاصة (Secrets): كلمات مرور قواعد البيانات، توكنات السيرفر ➔ محظورة تماماً في الـ Frontend!",
          "ملف التكوين المركزي: تجميع وفحص القيم في كائن موحد يمنع الأخطاء غير المتوقعة."
        ]
      }
    },
    {
      id: "16.2.i",
      title: "تجنب الاستيرادات الدائرية (Circular Dependencies)",
      englishTerm: {
        term: "Avoiding Circular Dependencies",
        pronunciation: "أفويدينغ سيركيولار ديبندنسيز",
        meaning: "اكتشاف وتفادي الحلقات الدائرية حيث يستورد الملف A الملف B والذي بدوره يستورد الملف A مما يسبب انهيار التطبيق"
      },
      description: "الاستيراد الدائري (Circular Dependency) هو فخ برمجي معقد يحدث عندما يستورد الملف `A.ts` كائناً من الملف `B.ts`، وبنفس الوقت يستورد الملف `B.ts` كائناً من الملف `A.ts` (سواء بشكل مباشر أو عبر سلسلة ملفات وسيطة مثل A ➔ B ➔ C ➔ A). عندما يحاول محرك جافاسكربت تجميع هذه الملفات، يجد نفسه في حلقة مغلقة، فتكون النتيجة ظهور قيم غير معرفة `undefined` في منتصف الكود وانهيار التطبيق بخطأ غير مفهوم: `TypeError: Cannot read properties of undefined` أو `Cannot access before initialization`.",
      analogy: "يشبه الأمر دائرتين حكوميتين بيروقراطيتين تقعان في حلقة مفرغة؛ الموظف في الدائرة الأولى يقول لك: 'لا يمكنني إصدار شهادتك إلا إذا أحضرت ختماً من الدائرة الثانية'، وحين تذهب للدائرة الثانية يقول لك الموظف: 'لا يمكنني ختم ورقتك إلا إذا أحضرت الشهادة من الدائرة الأولى'! تتعطل المعاملة للأبد حتى يتدخل مكتب وزاري مستقل يفك هذا الاشتباك!",
      whyItMatters: "تعد الاستيرادات الدائرية من أصعب الأخطاء في الاكتشاف والتصحيح؛ وفهم أسبابها يتيح لك حلها فوراً عبر استخراج المشترك في ملف ثالث محايد أو استخدام `import type`.",
      syntax: "// ❌ حلقة دائرية مفرغة:\n// A.ts يستورد B.ts و B.ts يستورد A.ts\n\n// ✅ الحل: استخراج المشترك في ملف محايد C.ts\n// كلاهما يستورد من C.ts وتنتهي الحلقة!",
      simpleExample: `// مثال يوضح كسر الحلقة الدائرية بنجاح

// 1. ملف محايد مستقل: types.ts (يفك الحلقة)
export interface UserInfo {
  id: string;
  name: string;
}

// 2. ملف profile.ts يستورد من types.ts فقط
import type { UserInfo } from './types';
export function getProfileTitle(user: UserInfo) {
  return \`الملف الشخصي: \${user.name}\`;
}

// 3. ملف auth.ts يستورد من types.ts فقط
import type { UserInfo } from './types';
export function getAuthBadge(user: UserInfo) {
  return user.id ? 'موثق' : 'زائر';
}`,
      advancedExample: `// محاكي تحليل واكتشاف الاستيرادات الدائرية وكيفية علاجها معمارياً
import { useState } from 'react';

export function CircularDependencyDetector() {
  const [scenario, setScenario] = useState('cycle');

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-lg mx-auto">
      <h3 className="text-xl font-bold text-rose-400 mb-2">فخ الاستيرادات الدائرية (Circular Dependencies)</h3>
      <p className="text-xs text-slate-400 mb-4">
        كيف تنشأ الحلقات المفرغة وكيف تفككها معمارياً باستخراج وسيط محايد.
      </p>

      {/* أزرار المقارنة */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setScenario('cycle')}
          className={'px-3 py-1.5 rounded-xl text-xs font-bold transition-all ' + (scenario === 'cycle' ? 'bg-rose-600 text-white' : 'bg-slate-900 text-slate-400')}
        >
          السيناريو المعيب (حلقة دائرية ❌)
        </button>
        <button
          onClick={() => setScenario('fixed')}
          className={'px-3 py-1.5 rounded-xl text-xs font-bold transition-all ' + (scenario === 'fixed' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400')}
        >
          الحل المعماري (استخراج وسيط ✅)
        </button>
      </div>

      {scenario === 'cycle' ? (
        <div className="p-4 bg-rose-950/30 border border-rose-800/80 rounded-xl space-y-3 font-mono text-xs text-rose-200">
          <p className="font-bold text-rose-400">❌ حلقة مفرغة بين الملفين:</p>
          <div className="p-2.5 bg-slate-950 rounded border border-rose-900">
            <span className="text-cyan-400">// ملف Cart.ts:</span>
            <p>import &#123; formatPrice &#125; from './Checkout';</p>
            <p>export const cartTotal = 500;</p>
          </div>
          <div className="p-2.5 bg-slate-950 rounded border border-rose-900">
            <span className="text-amber-400">// ملف Checkout.ts:</span>
            <p>import &#123; cartTotal &#125; from './Cart'; // 💥 حلقة دائرية!</p>
            <p>export function formatPrice() &#123; return cartTotal + '$'; &#125;</p>
          </div>
          <p className="text-[11px] text-rose-400 font-sans">
            النتيجة: 'cartTotal' ستكون undefined داخل دالة formatPrice وقت التشغيل وتنهار الصفحة!
          </p>
        </div>
      ) : (
        <div className="p-4 bg-emerald-950/30 border border-emerald-800/80 rounded-xl space-y-3 font-mono text-xs text-emerald-200">
          <p className="font-bold text-emerald-400">✅ الحل المعماري بكسر الحلقة:</p>
          <div className="p-2.5 bg-slate-950 rounded border border-emerald-900">
            <span className="text-purple-400">// 1. ملف محايد جديد: pricing.utils.ts</span>
            <p>export function formatPrice(val: number) &#123; return val + '$'; &#125;</p>
          </div>
          <div className="p-2.5 bg-slate-950 rounded border border-emerald-900">
            <span className="text-slate-400">// 2. كلا الملفين يستورد من pricing.utils دون استيراد بعضهما!</span>
            <p>Cart.ts ➔ يستورد formatPrice من pricing.utils</p>
            <p>Checkout.ts ➔ يستورد formatPrice من pricing.utils</p>
          </div>
          <p className="text-[11px] text-emerald-300 font-sans">
            النتيجة: تكسير الحلقة الدائرية بنسبة 100% وتحميل خطي سليم ومستقر لكافة الوحدات.
          </p>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "يوضح النموذج أن القاعدة الذهبية لكسر أي حلقة دائرية هي 'استخراج المشترك' (Extract to Common/Shared)؛ فعندما يستورد ملفان بعضهما، يتم استخراج القيمة المشتركة إلى ملف ثالث محايد لإنهاء الحلقة المفرغة تماماً.",
      commonMistakes: [
        {
          mistake: "استخدام ملفات البراميل (Barrel Files - index.ts) بشكل عشوائي مما يجمع ملفات متضاربة في سلة واحدة",
          fix: "احذر عند إعادة التصدير من `index.ts`؛ تأكد من أن الملفات الداخلية لا تستورد من ملف index نفسه."
        },
        {
          mistake: "تجاهل استخدام `import type` للأنواع",
          fix: "استخدم دائماً `import type`؛ فالأنواع تُمسح في التجميع ولا تتسبب في أي استيرادات دائرية في زمن التشغيل."
        }
      ],
      bestPractices: [
        "استخدم أداة مثل `dpdm` أو `madge` أو قاعدة ESLint `import/no-cycle` في مسار الـ CI/CD لكشف الحلقات مبكراً.",
        "استخرج المتغيرات والأنواع المشتركة دائماً في ملفات محايدة لضمان تدفق الاستيراد في اتجاه واحد (Unidirectional Flow)."
      ],
      infographic: {
        title: "استراتيجية كسر الاستيرادات الدائرية",
        points: [
          "المشكلة (الحلقة الدائرية): A ➔ B و B ➔ A ➔ ينتج عنها قيم `undefined` وانهيار غير متوقع.",
          "الحل الأول (استخراج المشترك): إنشاء ملف ثالث C ➔ كلا الملفين A و B يستوردان من C.",
          "الحل الثاني (استيراد الأنواع): استخدام `import type` للواجهات يمحوها من حزمة التشغيل ويمنع المشكلة."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q16.2.1",
      question: "ما الفائدة المعمارية الأهم لتنظيم المشروع بحسب الميزات (Feature-Based Architecture) في التطبيقات الكبيرة؟",
      options: [
        "تقليل حجم كود HTML في المتصفح فقط",
        "تحقيق استقلالية الميزات (High Cohesion, Low Coupling) وتجميع كافة المكونات والخطافات وواجهات API الخاصة بمجال عمل معين في مكان واحد",
        "إجبار المطور على استخدام لغة بايثون في الخادم",
        "إلغاء الحاجة لملفات CSS في المشروع"
      ],
      correctAnswer: 1,
      explanation: "تضمن معمارية Feature-Based استقلالية كل ميزة؛ بحيث تجد شاشاتها وخطافاتها وعميل الـ API في مجلد واحد، مما يسهل صيانتها وتطويرها وحذفها دون التأثير على باقي أقسام النظام."
    },
    {
      id: "q16.2.2",
      question: "لماذا يُحظر وضع المفاتيح السرية الحساسة (Private API Secrets) في ملف `.env` في مشروع React؟",
      options: [
        "لأن المتصفح سيطلق خطأ تجميع يمنع تشغيل المشروع",
        "لأن كود React يعمل بالكامل في متصفح العميل، ويتم تضمين أي متغير بيئة علناً في حزمة الجافاسكربت مما يتيح لأي مستخدم استخراج السر بسهولة",
        "لأن ملفات .env مخصصة لنظام تشغيل لينكس فقط",
        "لأن React تمنع استخدام ملفات التكوين"
      ],
      correctAnswer: 1,
      explanation: "كافة متغيرات الواجهة الأمامية تُترجم وتُضمن في ملفات الـ JS النهائية التي تُرسل للمتصفح، مما يجعل وضع أي أسرار بمثابة كشفها للعامة، والأسرار مكانها خوادم الـ Backend فقط."
    },
    {
      id: "q16.2.3",
      question: "كيف نحل معضلة الاستيراد الدائري (Circular Dependency) بين ملفين A و B بأفضل أسلوب معماري؟",
      options: [
        "بحذف الملفين معاً من المشروع",
        "باستخراج الكود أو النوع المشترك المتسبب في الحلقة إلى ملف ثالث محايد C وجعل كلا الملفين يستوردان منه في اتجاه واحد",
        "بإعادة تشغيل جهاز الحاسوب",
        "بتحويل كافة الدوال إلى متغيرات عامة في window"
      ],
      correctAnswer: 1,
      explanation: "الحل المعماري القياسي للحلقات الدائرية هو استخراج المتغير أو الدالة أو الواجهة المشتركة إلى ملف محايد (Shared/Common)، مما يفكك الحلقة المفرغة ويجعل تدفق الاستيرادات خطياً وفي اتجاه واحد."
    }
  ],
  exercise: {
    id: "ex-16.2",
    title: "تمرين عملي: إعادة هيكلة ميزة متجر فوضوية إلى هيكلة Feature-Based مع Path Aliases وطبقة API عازلة",
    description: "لديك مشروع متجر يحتوي على ملفات مبعثرة. قم بتصميم الهيكل المعتمد لميزة `products` يشمل:\n1. هيكل المجلد `src/features/products/` بمكوناته وخطافه ونماذجه وعميل الـ API.\n2. إنشاء ملف الواجهة العامة `index.ts` الذي يُصدر المكون والنوع والخطاف فقط.\n3. محاكاة مكون `ProductPage` الذي يستهلك الميزة النظيفة عبر استيراد موحد `@/features/products`.",
    hints: [
      "قسّم المجلد إلى: `components/`, `api/`, `hooks/`, `types/`, `index.ts`.",
      "في `index.ts` استخدم صيغة `export { ProductCard } from './components/ProductCard'`.",
      "في صفحة العرض استورد بأسلوب `@/features/products` دون الدخول للأعماق.",
      "اجعل المكونات مستقلة تماماً وقابلة للاستخدام في أي مكان."
    ],
    solution: `// 1. تعريف واجهات الميزة: src/features/products/types/product.types.ts
export interface ProductItem {
  id: string;
  title: string;
  price: number;
}

// 2. عميل الـ API الخاص بالميزة: src/features/products/api/products.api.ts
import type { ProductItem } from '../types/product.types';

export async function fetchCatalog(): Promise<ProductItem[]> {
  await new Promise((r) => setTimeout(r, 400));
  return [
    { id: 'p1', title: 'سماعة رأس لاسلكية إلغاء الضوضاء', price: 180 },
    { id: 'p2', title: 'ماوس مريح فائق الدقة', price: 75 }
  ];
}

// 3. مكون العرض: src/features/products/components/ProductCard.tsx
import React from 'react';
import type { ProductItem } from '../types/product.types';

export function ProductCard({ item }: { item: ProductItem }) {
  return (
    <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center text-xs">
      <span className="font-bold text-slate-200">{item.title}</span>
      <span className="font-mono text-emerald-400 font-bold">{item.price} $</span>
    </div>
  );
}

// 4. البوابة العامة للميزة: src/features/products/index.ts
export { ProductCard } from './components/ProductCard';
export { fetchCatalog } from './api/products.api';
export type { ProductItem } from './types/product.types';

// 5. استهلاك الميزة من خارجها بنظافة تامة: src/pages/CatalogPage.tsx
import { useState, useEffect } from 'react';
// استيراد نظيف وموحد من واجهة الميزة العامة عبر Path Alias
import { ProductCard, fetchCatalog, ProductItem } from '@/features/products';

export function CatalogPage() {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    fetchCatalog().then(setProducts);
  }, []);

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto space-y-3">
      <h3 className="text-xl font-bold text-cyan-400">كتالوج المنتجات المعماري</h3>
      <div className="space-y-2">
        {products.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة هندسة ملفات مشاريع React الكبرى",
    nodes: [
      { id: "1", title: "الهيكلة بالميزات", desc: "تقسيم التطبيق إلى مجالات مستقلة داخل `features/`" },
      { id: "2", title: "فصل الصفحات والـ UI", desc: "مكتبة `components/ui/` نقية، و `layout/` هيكلي، و `pages/` للمسارات" },
      { id: "3", title: "تنظيم الخطافات", desc: "أدوات عامة محايدة في `hooks/` ومنطق متخصص في الميزات" },
      { id: "4", title: "عميل الشبكة apiClient", desc: "طبقة عازلة لإدارة الترويسات والتوكن واعتراض الأخطاء مركزياً" },
      { id: "5", title: "المسارات المختصرة", desc: "استخدام `@/*` للقضاء على فوضى الاستيرادات النسبية الهشة" },
      { id: "6", title: "كسر الحلقات الدائرية", desc: "استخراج المشترك في ملفات محايدة لضمان تدفق أحادي مستقر" }
    ]
  }
};
