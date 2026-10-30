// e:\KD\lang\react\src\data\sections\section30\topic2.js
// الموضوع الثاني من القسم 30: إنشاء مكتبة مكونات وStorybook (Design Systems, Component Library & NPM Publishing)

export const topic2 = {
  id: "topic-30-2",
  title: "إنشاء مكتبة مكونات وStorybook ونظام التصميم (Design Systems)",
  description: "دليل تطبيقي شامل لبناء وتوثيق مكتبات المكونات المؤسسية (Design Systems & Component Libraries): استخدام Storybook كبيئة تطوير واختبار معزولة، كتابة القصص التفاعلية بمواصفات Component Story Format (CSF 3)، اختبار المكونات بصرياً، إدارة رموز التصميم (Design Tokens)، دعم الوضع المظلم والسمات الديناميكية، نشر وثائق Storybook الحية، وحزم ونشر المكتبة كحزمة npm احترافية مع إدارة الإصدارات الدلالية (SemVer).",
  subtopics: [
    {
      id: "30.2.a",
      title: "ما هو Storybook؟ ولماذا نستخدمه؟",
      englishTerm: {
        term: "What is Storybook?",
        pronunciation: "وات إز ستوري بوك؟",
        meaning: "بيئة التطوير المعزولة لبناء وتوثيق واختبار مكونات الواجهة"
      },
      description: "أداة Storybook هي ورشة عمل برمجية وبيئة تطوير معزولة بالكامل (Isolated UI Workshop) مخصصة لتطوير مكونات واجهة المستخدم وتوثيقها واختبارها خارج إطار التطبيق الرئيسي. في المسار التقليدي، إذا أردت تصميم زر أو نافذة منبثقة لحالة نادرة (مثل: فشل الدفع)، تضطر لتشغيل الخادم، تسجيل الدخول، إضافة منتج للسلة، وإحداث خطأ في بطاقة الدفع لمشاهدة المكون. مع Storybook، يُبنى المكون في عزلة تامة، مستقلاً عن قواعد البيانات والـ API والراوترات، مما يتيح لك محاكاة كافة حالاته البصرية (الحالات الفارغة، حالات التحميل، الأخطاء، وحالات النجاح) بضغطة زر واحدة.",
      realWorldAnalogy: "يشبه Storybook مختبر فحص الجودة في مصانع السيارات الفارهة؛ حيث يتم فحص واختبار الوسائد الهوائية، الأبواب، والمحركات على منصات اختبار معزولة وخاصة قبل تركيبها في هيكل السيارة الكامل؛ إذا كانت كل قطعة تعمل بكفاءة تامة في المختبر، ستعمل السيارة بكفاءة عند تجميعها.",
      whyItMatters: "يعمل Storybook كجسر تواصل مشترك بين مهندسي البرمجيات، مصممي تجربة المستخدم (UI/UX Designers)، ومديري المنتجات؛ حيث يوفر كتالوجاً حياً وموثقاً لكافة مكونات الشركة، مما يقضي على تكرار بناء المكونات بنسبة 100% ويسرع تطوير واجهات المستخدم بنسبة تصل إلى 40%.",
      syntax: "// تشغيل Storybook في بيئة التطوير المعزولة:\nnpm run storybook\n# يفتح الخادم المعزول عادة على المنفذ: http://localhost:6006",
      simpleExample: `// استعراض محاكاة مفهوم عمل Storybook في عرض حالات المكون المعزول
import React, { useState } from 'react';

// مكون الزر البسيط المراد اختباره
function BaseButton({ label, variant = 'primary', disabled = false }) {
  const styles = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white',
    danger: 'bg-rose-600 hover:bg-rose-500 text-white',
    disabled: 'bg-slate-800 text-slate-500 cursor-not-allowed'
  };
  return (
    <button 
      disabled={disabled}
      className={\`px-4 py-2 rounded-xl text-xs font-bold transition \${disabled ? styles.disabled : styles[variant]}\`}
    >
      {label}
    </button>
  );
}

// محاكاة شاشة لوحة تحكم Storybook للتبديل بين الحالات المعزولة
export function StorybookConceptDemo() {
  const [activeStory, setActiveStory] = useState('primary');

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-xs text-indigo-400">Storybook Canvas Mock</h4>
        <div className="flex gap-1 text-[10px] font-mono">
          <button 
            onClick={() => setActiveStory('primary')}
            className={\`px-2 py-0.5 rounded \${activeStory === 'primary' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
          >
            الأساسي
          </button>
          <button 
            onClick={() => setActiveStory('danger')}
            className={\`px-2 py-0.5 rounded \${activeStory === 'danger' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
          >
            الخطر
          </button>
          <button 
            onClick={() => setActiveStory('disabled')}
            className={\`px-2 py-0.5 rounded \${activeStory === 'disabled' ? 'bg-slate-700 text-white' : 'bg-slate-800 text-slate-400'}\`}
          >
            المعطل
          </button>
        </div>
      </div>

      <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center min-h-[90px]">
        {activeStory === 'primary' && <BaseButton label="تأكيد العملية" variant="primary" />}
        {activeStory === 'danger' && <BaseButton label="حذف الحساب نهائياً" variant="danger" />}
        {activeStory === 'disabled' && <BaseButton label="غير متاح حالياً" disabled={true} />}
      </div>
      <p className="text-[10px] text-slate-500 mt-2 text-center font-mono">حالة القصة المعروضة: {activeStory}</p>
    </div>
  );
}`,
      advancedExample: `// استوديو تفاعلي يستعرض بيئة عمل Storybook المتكاملة (Storybook Workspace Explorer)
import React, { useState } from 'react';

// مكون التنبيه الشامل المراد فحصه في Storybook
function AlertNotification({ type, title, message, onClose }) {
  const themes = {
    info: 'border-blue-500/30 bg-blue-950/20 text-blue-400',
    success: 'border-emerald-500/30 bg-emerald-950/20 text-emerald-400',
    warning: 'border-amber-500/30 bg-amber-950/20 text-amber-400',
    error: 'border-rose-500/30 bg-rose-950/20 text-rose-400'
  };

  return (
    <div className={\`p-4 rounded-xl border text-xs flex justify-between items-start \${themes[type]}\`}>
      <div>
        <h5 className="font-bold text-white mb-0.5">{title}</h5>
        <p className="text-slate-300 leading-relaxed">{message}</p>
      </div>
      {onClose && (
        <button onClick={onClose} className="text-slate-400 hover:text-white font-bold ml-2">
          ✕
        </button>
      )}
    </div>
  );
}

// محاكاة واجهة Storybook الرسمية مع شريط الأدوات ولوحة التحكم بالخصائص (Controls Addon)
export function StorybookWorkbenchStudio() {
  const [alertType, setAlertType] = useState('success');
  const [alertTitle, setAlertTitle] = useState('تم حفظ التغييرات بنجاح');
  const [alertMessage, setAlertMessage] = useState('تم تحديث إعدادات الملف الشخصي ومزامنتها مع السحابة.');
  const [showCloseBtn, setShowCloseBtn] = useState(true);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-pink-600 rounded flex items-center justify-center text-[10px] font-bold">S</span>
          <div>
            <h3 className="text-base font-bold">مختبر Storybook المتكامل (UI Workshop)</h3>
            <p className="text-xs text-slate-400">فحص وتجربة مكون AlertNotification بمعزل تام عن أي كود خارجي</p>
          </div>
        </div>
        <span className="text-xs font-mono bg-pink-500/10 text-pink-400 px-2.5 py-1 rounded-full border border-pink-500/20">
          Storybook v8
        </span>
      </div>

      {/* مساحة العرض المركزية (Canvas) */}
      <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 mb-6 flex items-center justify-center">
        <div className="w-full max-w-md">
          <AlertNotification 
            type={alertType}
            title={alertTitle}
            message={alertMessage}
            onClose={showCloseBtn ? () => alert('تم النقر على زر الإغلاق!') : null}
          />
        </div>
      </div>

      {/* لوحة التحكم التفاعلية بالخصائص (Storybook Controls Panel) */}
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
        <h4 className="text-xs font-bold text-slate-300 mb-3 border-b border-slate-800 pb-2">
          لوحة التحكم التفاعلية بالخصائص (Controls Addon)
        </h4>

        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <label className="text-slate-400 block mb-1">النوع (type):</label>
            <select 
              value={alertType} 
              onChange={(e) => setAlertType(e.target.value)}
              className="w-full p-2 bg-slate-900 border border-slate-700 rounded text-white font-mono"
            >
              <option value="success">success (نجاح)</option>
              <option value="info">info (معلومة)</option>
              <option value="warning">warning (تحذير)</option>
              <option value="error">error (خطأ)</option>
            </select>
          </div>

          <div>
            <label className="text-slate-400 block mb-1">زر الإغلاق (hasCloseBtn):</label>
            <div className="pt-2">
              <input 
                type="checkbox"
                checked={showCloseBtn}
                onChange={(e) => setShowCloseBtn(e.target.checked)}
                className="w-4 h-4 accent-pink-600 rounded cursor-pointer"
              />
              <span className="text-slate-300 mr-2">تفعيل دالة onClose</span>
            </div>
          </div>

          <div className="col-span-2">
            <label className="text-slate-400 block mb-1">العنوان (title):</label>
            <input 
              type="text"
              value={alertTitle}
              onChange={(e) => setAlertTitle(e.target.value)}
              className="w-full p-2 bg-slate-900 border border-slate-700 rounded text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال المعماري كيف يحول Storybook المكونات البسيطة إلى أدوات قابلة للاستكشاف والتحكم الحي؛ حيث يعزل المكون في لوحة الـ Canvas، ويوفر لوحة Controls Addon لتعديل الـ Props في الوقت الفعلي وملاحظة كيفية تكيف التصميم مع النصوص الطويلة والحالات الاستثنائية.",
      commonMistakes: [
        {
          mistake: "محاولة ربط مكونات Storybook بخوادم API حقيقية واستدعاء بيانات حية من قواعد البيانات.",
          why: "ربط المكونات بالشبكة الحية يلغي ميزة العزلة والسرعة، ويجعل Storybook يتعطل إذا انقطع اتصال الإنترنت أو تعطل خادم التطوير.",
          fix: "مرر بيانات وهمية (Mock Data) كـ Props للمكونات في Storybook، أو استخدم إضافة Mock Service Worker (MSW addon) لمحاكاة استجابة الشبكة."
        },
        {
          mistake: "تجاهل كتابة قصص (Stories) للحالات الحدية مثل النصوص فائقة الطول أو القوائم الفارغة.",
          why: "الهدف من Storybook هو كشف عيوب التصميم مبكراً؛ فإذا لم تختبر كيف يتصرف الزر مع نص ممتد، ستفاجأ بكسر التخطيط عند المستخدمين.",
          fix: "اكتب دائماً قصصاً مخصصة للحالات الحدية: Empty State، Overflow State، وLoading State."
        }
      ],
      bestPractices: [
        "اعتمد معيار Component Story Format 3 (CSF 3) لكتابة القصص بشكل موجز ومكتوب بـ TypeScript.",
        "استخدم إضافة Storybook A11y Addon لفحص إمكانية الوصول وتباين الألوان تلقائياً في كل قصة.",
        "اجعل Storybook جزءاً من مسار مراجعة الكود؛ حيث يراجع المصممون شكل المكون في Storybook قبل دمجه.",
        "قسّم مجلدات القصص بجوار المكونات التابعة لها (مثال: Button.tsx وبجواره Button.stories.tsx)."
      ],
      visualInfographic: {
        title: "منظومة التطوير المعزول في Storybook",
        description: "كيف يعمل Storybook كبيئة تطوير وتوثيق مستقلة للمكونات",
        visualSteps: [
          "تطوير المكون في عزلة 🏝️ (بناء المكون مستقلاً عن التطبيق والخلفية)",
          "كتابة القصص التفاعلية 📖 (توثيق كافة الحالات البصرية: Hover, Active, Disabled)",
          "فحص الخصائص التفاعلي 🎛️ (تعديل الـ Props لحظياً عبر Controls Addon)",
          "فحص الوصولية التلقائي ♿ (مراقبة تباين الألوان ومعايير WCAG)",
          "المشاركة والتوثيق الحي 🌐 (نشر كتالوج المكونات للمصممين والمطورين)"
        ]
      }
    },
    {
      id: "30.2.b",
      title: "تثبيت Storybook وإعداده في مشاريع React",
      englishTerm: {
        term: "Storybook Installation & Setup",
        pronunciation: "ستوري بوك إنستاليشن آند سيت أب",
        meaning: "تهيئة وإعداد أداة Storybook في بيئة Vite وReact"
      },
      description: "تعتمد عملية تثبيت Storybook الحديث (Storybook 8+) على أداة تهيئة تلقائية ذكية تفحص مشروعك، تكتشف بيئة البناء المستخدمة (مثل Vite أو Next.js)، وتنشئ مجلد الإعدادات المركزي .storybook تلقائياً مع تنزيل كافة الاعتماديات التابعة. يتألف قلب إعداد Storybook من ملفين رئيسيين: 1) ملف main.js وهو ملف التكوين الأساسي الذي يحدد مسارات البحث عن ملفات القصص (*.stories.tsx)، والإضافات المفعلة (Addons مثل Controls, Actions, A11y)، وإعدادات محرك البناء (Framework Builder)؛ 2) ملف preview.js وهو ملف ضبط بيئة العرض، حيث يتم فيه استيراد ملفات التنسيق العامة (مثل Tailwind CSS)، وتهيئة المزودات العامة (Global Providers مثل ThemeProvider وQueryClientProvider) لتعمل تلقائياً حول كل قصة يتم عرضها.",
      realWorldAnalogy: "يشبه إعداد Storybook تجهيز خشبة المسرح للأداء الفني؛ فملف main.js هو مهندس الإضاءة والستائر والمعدات التقنية خلف الكواليس؛ بينما ملف preview.js هو ديكور المسرح العام والأجواء المحيطة التي ينزل الممثلون (مكونات React) إليها ليؤدوا عروضهم أمام الجمهور.",
      whyItMatters: "الإعداد السليم لـ Storybook مع Tailwind CSS والمزودات العامة يضمن أن ما يراه المطور في Storybook يطابق تماماً بنسبة 100% ما سيظهر في التطبيق الحقيقي، مما يمنع المفاجآت البصرية ويضمن تجربة تطوير سلسة وخالية من الاحتكاك.",
      syntax: "# تهيئة Storybook تلقائياً في مشروع React الحالي:\nnpx storybook@latest init\n\n# تشغيل خادم Storybook المستقل:\nnpm run storybook",
      simpleExample: `// استعراض محتويات ملف main.js الأساسي لإعداد Storybook في مشاريع Vite
// .storybook/main.js
const config = {
  // تحديد مسارات ملفات القصص في مجلد src
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  
  // تفعيل الإضافات الرسمية الأساسية
  addons: [
    '@storybook/addon-essentials', // حزمة أدوات التحكم والتفاعل
    '@storybook/addon-interactions', // محاكاة نقرات المستخدم
    '@storybook/addon-a11y' // فحص معايير إمكانية الوصول
  ],

  // إطار العمل ومحرك البناء المعتمد
  framework: {
    name: '@storybook/react-vite',
    options: {}
  }
};

export default config;`,
      advancedExample: `// استعراض ملف preview.jsx لتهيئة Tailwind CSS ومزود السمات العالمي لكل القصص
// .storybook/preview.jsx
import React from 'react';
// 1. استيراد ملف أنماط Tailwind CSS العامة لضمان تطبيق التنسيقات
import '../src/index.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    // إعدادات لوحة التحكم التلقائية بالخصائص
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // إعدادات خلفيات العرض الافتراضية
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0f172a' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },

  // Decorators: مغلفات عالمية تحيط بكل قصة في Storybook
  decorators: [
    (Story, context) => (
      <div dir="rtl" className="p-4 font-sans bg-slate-900 text-white min-h-[120px] rounded-xl border border-slate-800">
        {/* تصيير القصة المعنية داخل المغلف */}
        <Story />
      </div>
    ),
  ],
};

export default preview;`,
      outputExplanation: "يوضح هذا المثال كيفية ضبط ملفات تكوين Storybook؛ حيث يحدد ملف main.js صيغ ملفات القصص ومحرك Vite، بينما يقوم ملف preview.js بحقن ملفات CSS العامة، وضبط الاتجاه العربي RTL، وإحاطة كافة المكونات بمغلف بصري موحد عبر تقنية Decorators.",
      commonMistakes: [
        {
          mistake: "نسيان استيراد ملف الأنماط العام (مثل index.css أو tailwind.css) داخل ملف .storybook/preview.js.",
          why: "يؤدي ذلك إلى ظهور المكونات في Storybook بدون أي تنسيقات وبشكل مشوه ومجرد تماماً كأن الـ Tailwind غير مثبت.",
          fix: "استورد دائماً ملف التنسيقات الرئيسي للمشروع في السطر الأول من ملف preview.js."
        },
        {
          mistake: "تثبيت Storybook عبر npm install يدوي لحزم متفرقة بدلاً من استخدام أمر التثبيت الرسمي المؤتمت.",
          why: "أداة npx storybook@latest init تقوم بضبط عشرات التبعيات المتوافقة بدقة مع Vite أو Next.js؛ والتثبيت اليدوي يؤدي دائماً إلى تضارب الإصدارات.",
          fix: "استخدم دائماً الأمر الرسمي المؤتمت npx storybook@latest init لتهيئة المشروع."
        }
      ],
      bestPractices: [
        "أضف إضافة @storybook/addon-a11y فوراً لضمان فحص معايير الوصولية بشكل مستمر أثناء التطوير.",
        "استخدم تقنية Decorators في ملف preview.js لحقن أي سياقات عالمية مطلوبة (مثل React Router MemoryRouter أو ThemeContext).",
        "احرص على إضافة مجلد storybook-static إلى ملف .gitignore لتجنب رفع ملفات البناء المؤقتة إلى Git.",
        "اضبط خيارات Viewports في ملف preview.js لمحاكاة شاشات الهواتف والأجهزة اللوحية بسهولة بضغطة زر واحدة."
      ],
      visualInfographic: {
        title: "هندسة ملفات تكوين Storybook",
        description: "كيف تنظم ملفات مجلد .storybook بيئة التطوير المعزولة",
        visualSteps: [
          "أمر التهيئة التلقائي 🚀 (npx storybook@latest init يفحص البيئة)",
          "ملف main.js ⚙️ (محرك Vite، مسارات القصص، وقائمة الإضافات Addons)",
          "ملف preview.js 🎨 (استيراد Tailwind، تعيين RTL، ومغلفات Decorators)",
          "ملفات القصص *.stories.tsx 📖 (تعريف الحالات البصرية بجوار المكونات)",
          "تشغيل الخادم المحلي ⚡ (ورشة عمل تفاعلية على http://localhost:6006)"
        ]
      }
    },
    {
      id: "30.2.c",
      title: "كتابة القصص للمكونات (Component Story Format - CSF 3)",
      englishTerm: {
        term: "Component Story Format (CSF 3)",
        pronunciation: "كومبوننت ستوري فورمات سي إس إف 3",
        meaning: "المعيار الحديث لكتابة قصص المكونات البرمجية في Storybook"
      },
      description: "معيار Component Story Format الإصدار الثالث (CSF 3) هو المعيار البرمجي القياسي العالمي المعتمد لكتابة قصص المكونات في Storybook. يعتمد CSF 3 على تصدير افتراضي وحيد (default export) يحمل كائن البيانات الوصفية (Metadata) للمكون: اسم المكون، ومساره في شجرة التصفح، والمكون الأصلي ذاته؛ ثم تصدير كائنات مسماة (Named Exports) تمثل كل منها حالة أو 'قصة' محددة للمكون. يتميز CSF 3 بأسلوب كتابة كائني موجز للغاية (Object-based syntax)؛ حيث لا تحتاج لكتابة دالة تصيير يدوية لكل حالة؛ بل تكتفي بتحديد كائن الخصائص args: { ... }، ويقوم Storybook بتصيير المكون تلقائياً مع توفير دعم كامل لأنواع TypeScript.",
      realWorldAnalogy: "يشبه معيار CSF 3 بطاقات توصيف المنتجات في المعارض الكبرى؛ البطاقة الرئيسية تحدد اسم المنتج ونوعه (Metadata)، ثم هناك عينات متعددة معروضة بجوارها: العينة الحمراء، العينة الزرقاء، والعينة ذات الحجم الكبير؛ كل عينة لها بطاقة صغيرة تحدد مواصفاتها الخاصة (args).",
      whyItMatters: "يختصر CSF 3 كمية الكود المكتوب لتوثيق المكونات بنسبة تفوق 50% مقارنة بالإصدارات القديمة، ويتيح إعادة استخدام قصص Storybook مباشرة داخل اختبارات الوحدات (Jest / Vitest) واختبارات التفاعل عبر مكتبة @storybook/testing-react دون إعادة تعريف المكون.",
      syntax: "// هيكل ملف القصة المعياري CSF 3 (Button.stories.tsx):\nexport default { component: Button };\nexport const Primary = { args: { primary: true, label: 'تأكيد' } };\nexport const Disabled = { args: { disabled: true, label: 'معطل' } };",
      simpleExample: `// مثال تطبيقي على كتابة ملف قصة حديث وفق معيار CSF 3 لمكون شارة الحالة (Badge)
// src/components/Badge.stories.jsx
import { Badge } from './Badge';

// 1. التصدير الافتراضي: يحدد عنوان المكون ومساره
export default {
  title: 'المكونات الأساسية/Badge',
  component: Badge,
  tags: ['autodocs'], // توليد صفحة توثيق تلقائية
};

// 2. القصة الأولى: شارة النجاح
export const Success = {
  args: {
    label: 'مكتمل بنجاح',
    variant: 'success',
  },
};

// 3. القصة الثانية: شارة التحذير
export const Warning = {
  args: {
    label: 'يتطلب مراجعة',
    variant: 'warning',
  },
};

// 4. القصة الثالثة: شارة الخطأ
export const Error = {
  args: {
    label: 'فشلت العملية',
    variant: 'danger',
  },
};`,
      advancedExample: `// قصة متقدمة لمكون بطاقة المستخدم مع تركيب الخصائص ومحاكاة الأحداث التفاعلية (Actions)
// src/features/users/components/UserCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { UserCard } from './UserCard';

// تعريف البيانات الوصفية للمكون مع دعم Typescript
const meta: Meta<typeof UserCard> = {
  title: 'نظام التصميم/بطاقات/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  // تمرير دوال تجسس (Spy Functions) لالتقاط الأحداث في لوحة Actions Addon
  args: {
    onFollow: fn(),
    onMessage: fn(),
  },
  // تخصيص معلمات العرض
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof UserCard>;

// 1. القصة الأساسية للمستخدم الموثق
export const VerifiedUser: Story = {
  args: {
    name: 'عبدالله السعدي',
    role: 'كبير مهندسي البرمجيات',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    isVerified: true,
    followersCount: 1420,
  },
};

// 2. قصة لحالة المستخدم الجديد بدون متابعين وبدون شارة توثيق
export const NewMember: Story = {
  args: {
    name: 'مها الشمري',
    role: 'مصممة واجهات وتجربة مستخدم',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100',
    isVerified: false,
    followersCount: 0,
  },
};

// 3. قصة مخصصة لاختبار السلوك عند وجود نصوص فائقة الطول (Edge Case Story)
export const LongTextOverflow: Story = {
  args: {
    name: 'صاحب السمو الأمير المهندس محمد بن عبد العزيز آل سعود الكاتب والمستشار التقني الأول',
    role: 'مدير قطاع الابتكار والتحول الرقمي والذكاء الاصطناعي وتطوير المنتجات السحابية للمؤسسات الحكومية',
    avatarUrl: 'https://via.placeholder.com/100',
    isVerified: true,
    followersCount: 999999,
  },
};`,
      outputExplanation: "يوضح هذا الملف بنية CSF 3 المتطورة؛ حيث يتم تعريف التصدير الافتراضي meta لتحديد موقع المكون في شجرة التصفح وتوثيق دوال التقاط الأحداث fn()، ثم تصدير كائنات قصص مستقلة تمثل حالات مختلفة: مستخدم موثق، عضو جديد، وحالة حدية تفحص صمود التصميم أمام النصوص الطويلة.",
      commonMistakes: [
        {
          mistake: "استخدام الأسلوب القديم Template.bind({}) الخاص بإصدارات CSF 2 السابقة.",
          why: "أسلوب Template.bind قديم ويحتوي على تكرار كبير في الكود وصعوبة في دعم أنواع TypeScript مقارنة بـ CSF 3 الحديث.",
          fix: "استخدم دائماً كائنات القصص المباشرة export const Primary: Story = { args: { ... } } وفق مواصفات CSF 3."
        },
        {
          mistake: "تمرير دوال وهمية فارغة مثل onFollow={() => {}} بدلاً من دالة fn() من مكتبة @storybook/test.",
          why: "الدوال الفارغة لا تسجل أي تفاعل في لوحة الإجراءات (Actions Tab) في Storybook، مما يحرمك من التأكد من عمل النقرة.",
          fix: "استورد دائماً fn من @storybook/test لتسجيل تفاصيل الاستدعاء والمعاملات في لوحة Actions."
        }
      ],
      bestPractices: [
        "استخدم وسم tags: ['autodocs'] دائماً في التصدير الافتراضي لتوليد صفحة توثيق تفاعلية تلقائية تحوي جدول الخصائص.",
        "اكتب قصة مخصصة لكل حالة بصرية يمر بها المكون (Loading, Error, Empty, Overflow).",
        "استغل ميزة الوراثة؛ حيث ترث القصص كافة الخصائص المعرفة في التصدير الافتراضي meta.args تلقائياً.",
        "اجعل أسماء القصص واضحة وتدل على الحالة الوظيفية بدقة مثل LoggedInUser بدلاً من Story1."
      ],
      visualInfographic: {
        title: "تشريح ملف القصة المعياري (CSF 3 Anatomy)",
        description: "كيف تنظم قصص المكونات وفق أحدث المعايير القياسية",
        visualSteps: [
          "التصدير الافتراضي Default Export 📦 (title, component, tags & default args)",
          "دوال التجسس والتفاعل 🕵️ (استخدام fn() لمراقبة نقرات الأحداث)",
          "القصة الأساسية Primary Story 🟢 (الحالة الافتراضية الأكثر شيوعاً)",
          "القصص الفرعية Variant Stories 🟡 (حالات الحجم والأنماط والألوان)",
          "قصص الحالات الاستثنائية Edge Cases 🔴 (فحص النصوص الطويلة والقوائم الفارغة)"
        ]
      }
    },
    {
      id: "30.2.d",
      title: "توثيق المكونات وتفاعلاتها (Documentation & Interactions)",
      englishTerm: {
        term: "Component Docs & Interaction Testing",
        pronunciation: "كومبوننت دوكس آند إنترأكشن تيستنغ",
        meaning: "التوثيق التلقائي للمكونات ومحاكاة واختبار تفاعلات المستخدم"
      },
      description: "لا يقتصر دور Storybook على كونه كتالوجاً بصرياً ساكناً، بل هو منصة متكاملة للتوثيق الحي واختبار التفاعل الوظيفي (Interaction Testing). تتيح إضافة @storybook/addon-interactions للمطورين كتابة دالة اختبار تفاعلية تُعرف باسم play function مرتبطة بالقصة مباشرة. باستخدام واجهات برمجية مألوفة من مكتبة Testing Library وأداة Vitest/Expect، تقوم دالة play بمحاكاة سلوك المستخدم الفعلي بدقة: النقر على الأزرار، تعبئة حقول الإدخال، واختيار العناصر، مع التحقق من ظهور النتيجة المتوقعة على الشاشة، وتوفير شريط تحكم زمني (Step-by-step Timeline Debugger) يتيح إعادة تشغيل التفاعل خطوة بخطوة في المتصفح.",
      realWorldAnalogy: "يشبه اختبار التفاعل في Storybook الروبوتات الآلية التي تستخدمها مصانع الهواتف الذكية؛ حيث يقوم ذراع آلي بالنقر على الشاشة اللمسية 1000 مرة وتجربة كتابة الرسائل للتحقق من استجابة النظام بدقة دون انتظار إنسان يجرب ذلك يدوياً كل مرة.",
      whyItMatters: "يجمع اختبار التفاعل في Storybook بين جمال التوثيق البصري وقوة اختبارات التكامل (Integration Tests)؛ حيث يضمن أن المكون لا يبدو جميلاً من الخارج فحسب، بل يعمل ويتفاعل ويعالج الأخطاء بنجاح تام، مما يكتشف الانكسارات الوظيفية قبل دمج الكود.",
      syntax: "// دالة اختبار التفاعل play function داخل القصة:\nexport const FilledForm = {\n  play: async ({ canvasElement, step }) => {\n    const canvas = within(canvasElement);\n    await step('كتابة البريد', async () => {\n      await userEvent.type(canvas.getByLabelText('البريد'), 'user@test.com');\n    });\n    await userEvent.click(canvas.getByRole('button'));\n    await expect(canvas.getByText('تم الإرسال')).toBeInTheDocument();\n  }\n};",
      simpleExample: `// مثال مبسط على دالة play function لاختبار تفاعل نقر زر العداد
// src/components/Counter.stories.jsx
import { within, userEvent, expect } from '@storybook/test';
import { Counter } from './Counter';

export default {
  title: 'تفاعلات/Counter',
  component: Counter,
};

// قصة لاختبار زيادة العداد تلقائياً
export const AutoIncrementTest = {
  args: { initialValue: 0 },
  // دالة محاكاة التفاعل
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // البحث عن زر الزيادة
    const incrementBtn = canvas.getByRole('button', { name: '+' });
    
    // محاكاة نقر المستخدم على الزر مرتين
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);

    // التحقق من أن القيمة أصبحت 2
    const display = canvas.getByTestId('counter-value');
    await expect(display).toHaveTextContent('2');
  },
};`,
      advancedExample: `// اختبار تفاعل متقدم لنموذج تسجيل دخول مع التحقق من معالجة أخطاء المدخلات
// src/features/auth/components/LoginForm.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect, waitFor } from '@storybook/test';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'الميزات/المصادقة/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

// قصة تختبر رفض النموذج عند إدخال بريد إلكتروني غير صالح تلقائياً
export const InvalidEmailValidationTest: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    // الخطوة 1: البحث عن حقل البريد وكتابة نص خاطئ
    await step('إدخال بريد إلكتروني غير صالح', async () => {
      const emailInput = canvas.getByPlaceholderText('أدخل بريدك الإلكتروني...');
      await userEvent.type(emailInput, 'invalid-email-format');
    });

    // الخطوة 2: النقر على زر تسجيل الدخول
    await step('النقر على زر الدخول لإثارة التحقق', async () => {
      const submitButton = canvas.getByRole('button', { name: 'تسجيل الدخول' });
      await userEvent.click(submitButton);
    });

    // الخطوة 3: التحقق من ظهور رسالة الخطأ للمستخدم
    await step('التحقق من ظهور رسالة التنبيه باللون الأحمر', async () => {
      const errorMessage = await canvas.findByText('صيغة البريد الإلكتروني غير صحيحة.');
      await expect(errorMessage).toBeInTheDocument();
      await expect(errorMessage).toHaveClass('text-rose-500');
    });
  },
};`,
      outputExplanation: "يوضح هذا المثال كيفية استخدام دالة play في Storybook لإجراء محاكاة آلية متكاملة لسيناريو تفاعل المستخدم؛ حيث تنظم أداة step خطوات الاختبار، وتقوم مكتبة userEvent بالكتابة والنقر، ثم تتحقق دوال expect من ظهور رسائل الخطأ والتنسيقات المتوقعة بدقة تامة.",
      commonMistakes: [
        {
          mistake: "نسيان استخدام كلمة await قبل استدعاءات userEvent و expect في دالة play.",
          why: "عمليات التفاعل ومحاكاة الكتابة غير متزامنة (Asynchronous)؛ وعدم استخدام await يؤدي إلى فشل الاختبار أو إنهائه قبل اكتمال كتابة الحروف.",
          fix: "ضع دائماً await قبل كل عملية كتابة أو نقر: await userEvent.type(...) وawait userEvent.click(...)."
        },
        {
          mistake: "استخدام document.querySelector للبحث عن العناصر داخل دالة play بدلاً من within(canvasElement).",
          why: "البحث في كائن document العام قد يلتقط عناصر من واجهة Storybook نفسها بدلاً من مكونك المعزول في الـ Canvas.",
          fix: "احصر البحث دائماً داخل حاوية القصة باستخدام: const canvas = within(canvasElement)."
        }
      ],
      bestPractices: [
        "استخدم دالة step لتقسيم التفاعلات المعقدة إلى خطوات واضحة ومسماة تظهر في شريط تتبع Storybook.",
        "اختبر سيناريوهات النجاح والفشل للنماذج لضمان متانة التحقق وتجربة المستخدم.",
        "شغّل اختبارات التفاعل في مسار CI/CD المؤتمت باستخدام أداة test-runner لضمان عدم انكسار أي قصة.",
        "وثق الحالات الاستثنائية بأسلوب MDX لإضافة شروحات نصية غنية بجوار القصص التفاعلية."
      ],
      visualInfographic: {
        title: "دورة حياة اختبار التفاعلات (Interaction Testing)",
        description: "كيف تنفذ دالة play محاكاة المستخدم وتتحقق من سلامة المكون",
        visualSteps: [
          "بدء تصيير القصة 🎬 (تحميل المكون داخل إطار Canvas المعزول)",
          "تنفيذ دالة play 🤖 (بدء سيناريو الاختبار التلقائي خطوة بخطوة)",
          "محاكاة تفاعل المستخدم ⌨️ (userEvent يكتب وينقر ويختار الحقول)",
          "التحقق والتأكيد ⚖️ (expect يفحص ظهور الرسائل والحالات المتوقعة)",
          "شريط التحكم الزمني ⏱️ (لوحة Interactions Addon تتيح إعادة التشغيل والتدقيق)"
        ]
      }
    },
    {
      id: "30.2.e",
      title: "اختبار المكونات بصرياً (Visual Regression Testing & Chromatic)",
      englishTerm: {
        term: "Visual Regression Testing & Chromatic",
        pronunciation: "فيجوال ريجريشن تيستنغ آند كوماتيك",
        meaning: "الاختبار البصري التلقائي واكتشاف تشوهات التنسيق والـ CSS"
      },
      description: "تعتبر اختبارات الانحدار البصري (Visual Regression Testing) الحل التقني القاطع لمنع الكوارث التصميمية؛ حيث تفشل اختبارات الوحدات التقليدية (Unit Tests) تماماً في اكتشاف أن زراً مهماً قد تداخل مع نص مجاور، أو أن خطأ في كود Tailwind CSS أدى لاختفاء زر الدفع بالكامل! تقوم أدوات الاختبار البصري السحابية (وأشهرها Chromatic المطورة من قِبل فريق Storybook) بالتقاط لقطات شاشة بكسل تلو الآخر (Pixel-by-pixel Screenshots) لكافة قصص المكونات عبر متصفحات متعددة (Chrome, Firefox, Safari) وأبعاد شاشات متنوعة، ومقارنتها بالنسخة المعتمدة السابقة (Baseline Snapshot). إذا تغير بكسل واحد فقط، ينطلق إنذار فوري يطلب من المصمم مراجعة التغيير البصري والموافقة عليه قبل دمج الكود.",
      realWorldAnalogy: "يشبه الاختبار البصري لعبة 'اكتشف الفروق بين الصورتين' ولكن عبر حاسوب خارق يقارن ملايين البكسلات في أجزاء من الثانية؛ فإذا تم تغيير حجم الخط بمقدار مليمتر واحد أو تحرك الزر للأسفل قليلاً، يضع دائرة حمراء حول التغيير فوراً.",
      whyItMatters: "تمنح اختبارات الانحدار البصري المطورين ثقة مطلقة عند تعديل ملفات CSS العامة أو ترقية إصدار Tailwind؛ حيث تضمن ألا يتأثر أي مكون آخر في النظام دون قصد، وتلغي الحاجة لإجراء فحص بصري يدوي مرهق لمئات الشاشات قبل كل إطلاق.",
      syntax: "# تشغيل أداة Chromatic للاختبار البصري التلقائي في السحابة:\nnpx chromatic --project-token=<your-chromatic-token>",
      simpleExample: `// استعراض محاكاة فكرة اكتشاف الانحدار البصري ومقارنة البكسلات في المكونات
import React, { useState } from 'react';

// مكون يعرض مقارنة بصرية بين النسخة السابقة والنسخة الحالية
export function VisualRegressionMock() {
  const [showDiff, setShowDiff] = useState(false);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-xs text-slate-300">محاكي الاختبار البصري (Chromatic Mock)</h4>
        <button 
          onClick={() => setShowDiff(!showDiff)}
          className="px-2 py-0.5 bg-indigo-600 rounded text-[10px] font-bold"
        >
          {showDiff ? 'إخفاء الفروق' : 'كشف الفروق (Diff)'}
        </button>
      </div>

      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 relative">
        <button className={\`px-4 py-2 rounded-xl text-xs font-bold transition \${
          showDiff ? 'bg-rose-500 ring-4 ring-rose-500/40 text-white' : 'bg-indigo-600 text-white'
        }\`}>
          زر تجريبي (Button)
        </button>

        {showDiff && (
          <div className="mt-3 p-2 bg-rose-950/60 border border-rose-500/30 rounded text-[10px] text-rose-300">
            ⚠️ تم رصد اختلاف بصري: تم تغيير نصف قطر الحواف (border-radius) من 8px إلى 16px.
          </div>
        )}
      </div>
    </div>
  );
}`,
      advancedExample: `// استوديو محاكاة مراجعة التغييرات البصرية واعتمادها في مسار Pull Request (Chromatic PR Gate)
import React, { useState } from 'react';

// مكون استعراض بوابة المراجعة البصرية المؤتمتة
export function ChromaticPRReviewStudio() {
  // حالة مراجعة التغييرات البصرية
  const [snapshots, setSnapshots] = useState([
    {
      id: 'snap-1',
      component: 'Button / Primary',
      status: 'CHANGED',
      diffSummary: 'تغير لون الخلفية من #4f46e5 إلى #4338ca (تعديل طفيف في التباين)',
      approved: false
    },
    {
      id: 'snap-2',
      component: 'Modal / Confirmation',
      status: 'UNCHANGED',
      diffSummary: 'تطابق بنسبة 100% مع النسخة المرجعية المعتمدة (Baseline)',
      approved: true
    }
  ]);

  // دالة اعتماد التغيير البصري من قِبل المصمم
  const approveChange = (id) => {
    setSnapshots(prev =>
      prev.map(s => s.id === id ? { ...s, approved: true, status: 'APPROVED' } : s)
    );
  };

  const hasPendingChanges = snapshots.some(s => !s.approved);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">بوابة الفحص البصري التلقائي (Chromatic CI Gate)</h3>
          <p className="text-xs text-slate-400">مقارنة البكسلات في المتصفحات المختلفة ومنع دمج أي تشوه في الـ CSS</p>
        </div>
        <span className={\`text-xs font-mono font-bold px-3 py-1 rounded-full border \${
          hasPendingChanges ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
        }\`}>
          {hasPendingChanges ? 'بانتظار موافقة المصمم' : 'جميع الفحوص البصرية مقبولة'}
        </span>
      </div>

      <div className="space-y-3 mb-6">
        {snapshots.map((item) => (
          <div key={item.id} className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-slate-200 text-xs">{item.component}</span>
                <span className={\`text-[10px] font-bold px-2 py-0.5 rounded \${
                  item.status === 'CHANGED' ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'
                }\`}>
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{item.diffSummary}</p>
            </div>

            <div>
              {item.status === 'CHANGED' && !item.approved ? (
                <button 
                  onClick={() => approveChange(item.id)}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition shadow"
                >
                  اعتماد التغيير البصري (Approve)
                </button>
              ) : (
                <span className="text-xs text-emerald-400 font-bold font-mono">✓ معتمد رسمياً</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
        💡 <strong className="text-slate-200">التكامل مع GitHub:</strong> يقوم Chromatic بحظر زر دمج الـ PR تلقائياً إذا تم رصد أي تشوه بصري حتى يقوم مصمم الواجهات بالنقر على زر الموافقة في منصة Chromatic.
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية تطبيق اختبارات الانحدار البصري عبر أداة Chromatic في خطوط الإنتاج والـ CI/CD؛ حيث تقارن المنصة لقطات الشاشة وتحدد أي تغير لوني أو تخطيطي، وتحظر دمج الكود تلقائياً حتى يراجع المصمم المسؤول التغييرات ويعتمدها.",
      commonMistakes: [
        {
          mistake: "تشغيل الاختبارات البصرية على مكونات تحتوي على صور عشوائية متغيرة أو تواريخ زمنية حية (Dynamic Dates / Avatars).",
          why: "تغير التاريخ أو الصورة في كل عملية فحص يؤدي إلى ظهور إنذارات كاذبة مستمرة (False Positives) تفقد الفريق الثقة في أداة الاختبار.",
          fix: "ثبت دائماً البيانات الوهمية (Mock Data) واضبط التاريخ على تاريخ ثابت، واستخدم صوراً ثابتة في قصص Storybook."
        },
        {
          mistake: "تجاهل إيقاف حركات الـ CSS والتأثيرات الانتقالية (Animations & Transitions) أثناء التقاط لقطات الشاشة.",
          why: "إذا التقطت الكاميرا صورة للزر في منتصف حركة التلاشي، ستختلف درجة الشفافية في كل فحص وتفشل المقارنة.",
          fix: "فعّل خيار pauseAnimationAtEnd في Chromatic أو عطّل الحركات في بيئة الفحص عبر تفضيل prefers-reduced-motion."
        }
      ],
      bestPractices: [
        "اربط أداة Chromatic بمستودع GitHub لتشغيل الفحص البصري التلقائي مع كل Pull Request جديد.",
        "اضبط فحص المكونات على متصفحات متعددة (Cross-Browser Testing) للتأكد من توافقية Safari وFirefox وChrome.",
        "اختبر المكونات في كلا الوضعين: الوضع الفاتح والوضع المظلم لضمان وضوح النصوص في كليهما.",
        "اجعل اعتماد التغييرات البصرية خطوة مشتركة يشارك فيها مصممو تجربة المستخدم (Designers) قبل الإطلاق."
      ],
      visualInfographic: {
        title: "مسار اختبار الانحدار البصري (Visual Testing Pipeline)",
        description: "كيف تكتشف أدوات مثل Chromatic تشوهات الواجهات تلقائياً",
        visualSteps: [
          "رفع الكود في Pull Request 🚀 (إطلاق مسار البناء الآلي في الـ CI)",
          "التقاط لقطات الشاشة السحابية 📸 (Chromatic يصور كل قصة في متصفحات متعددة)",
          "المقارنة بكسل ببكسل 🔍 (مقارنة الصور بالنسخة المرجعية Baseline)",
          "تحديد الفروق الدقيقة 🔴 (إبراز أي زحف في الحواف أو تغير في الألوان)",
          "اعتماد التغيير والدمج 🛡️ (موافقة المصمم لفك حظر دمج الـ PR)"
        ]
      }
    },
    {
      id: "30.2.f",
      title: "بناء نظام تصميم متكامل (Design System Architecture)",
      englishTerm: {
        term: "Design System Architecture",
        pronunciation: "ديزاين سيستم أركيتكشر",
        meaning: "الهيكلة الشاملة لنظام التصميم البرمجي المؤسسي المتكامل"
      },
      description: "نظام التصميم (Design System) ليس مجرد مكتبة مكونات أزرار وحقول إدخال، بل هو بنية تحتية مؤسسية كاملة ولغة مشتركة توحد الرؤية بين فرق التصميم والبرمجة. يتألف نظام التصميم الاحترافي من ثلاثة أركان أساسية: 1) أسس التصميم ورموزه (Design Tokens): وهي الذرات الأساسية مثل درجات الألوان، والخطوط، والمسافات، والظلال؛ 2) مكونات واجهة المستخدم الأساسية (Core Primitives): مثل الأزرار، والمدخلات، والأيقونات المبنية على معايير الوصولية الصارمة؛ 3) التوثيق وإرشادات الاستخدام (Usage Guidelines & Patterns): التي تشرح للمطورين متى وكيف يستخدمون كل نمط وما هي المحظورات التصميمية. يضمن نظام التصميم المتكامل توحيد الهوية البصرية عبر كافة منتجات الشركة (مواقع الويب، وتطبيقات الهواتف، ولوحات التحكم الداخلية).",
      realWorldAnalogy: "يشبه نظام التصميم قواعد اللغة العربية وقواميسها المعتمدة؛ فالرموز التصميمية (Design Tokens) تشبه الحروف الأبجدية، والمكونات تشبه الكلمات، والأنماط المعمارية تشبه قواعد النحو؛ إذا التزم الجميع بنفس القواعد، يخرج الكلام فصيحاً ومفهوماً ومتناسقاً مهما اختلف الكُتاب.",
      whyItMatters: "يوفر نظام التصميم على الشركات ملايين الدولارات؛ حيث يقلل وقت تصميم وتطوير الشاشات الجديدة بنسبة تفوق 50%، ويضمن خلو المنتجات من التناقضات البصرية، ويتيح تطبيق تغييرات جذرية على هوية العلامة التجارية (Rebranding) في ساعات معدودة بتعديل الرموز المركزية فقط.",
      syntax: "// تصدير حزمة نظام التصميم المتكاملة:\n// @my-company/design-system\nexport * from './tokens';\nexport * from './components';\nexport * from './hooks';",
      simpleExample: `// استعراض محاكاة بنية نظام تصميم موحد يربط الرموز بالمكونات
import React from 'react';

// 1. رموز نظام التصميم الأساسية (Design Tokens)
const tokens = {
  colors: {
    brandPrimary: '#4f46e5',
    brandSuccess: '#10b981',
    surfaceDark: '#0f172a'
  },
  radii: {
    card: '16px',
    button: '12px'
  }
};

// 2. مكون من مكونات نظام التصميم يستهلك الرموز حصراً
export function DesignSystemCardDemo() {
  return (
    <div 
      style={{ borderRadius: tokens.radii.card, backgroundColor: tokens.colors.surfaceDark }}
      className="p-4 border border-slate-800 text-white max-w-xs shadow-xl"
    >
      <h4 className="font-bold text-xs text-indigo-400 mb-1">نظام التصميم الموحد</h4>
      <p className="text-xs text-slate-400 mb-3">مكون مبني بالكامل على رموز التصميم (Tokens).</p>
      
      <button 
        style={{ borderRadius: tokens.radii.button, backgroundColor: tokens.colors.brandPrimary }}
        className="px-3 py-1.5 text-xs font-bold text-white transition hover:opacity-90"
      >
        زر متوافق مع النظام
      </button>
    </div>
  );
}`,
      advancedExample: `// استوديو معماري يوضح هرمية بناء نظام التصميم المؤسسي وتوزيع طبقاته (Tokens & Primitives)
import React, { useState } from 'react';

// طبقات نظام التصميم الثلاث
const SYSTEM_LAYERS = [
  {
    level: 'الطبقة 1: الذرات والرموز (Tokens)',
    content: 'الألوان، مقاييس الخطوط، المسافات، الظلال، وأبعاد الحدود (Design Tokens).',
    color: 'border-cyan-500/30 bg-cyan-950/20 text-cyan-300'
  },
  {
    level: 'الطبقة 2: المكونات الأساسية (Primitives)',
    content: 'أزرار، حقول إدخال، أيقونات، بطاقات، نوافذ منبثقة، وهياكل التحميل (Accessible UI).',
    color: 'border-indigo-500/30 bg-indigo-950/20 text-indigo-300'
  },
  {
    level: 'الطبقة 3: الأنماط المعقدة (Patterns & Templates)',
    content: 'شاشات تسجيل الدخول، مسارات الشراء، جداول البيانات المعقدة، والترويسات المشتركة.',
    color: 'border-purple-500/30 bg-purple-950/20 text-purple-300'
  }
];

// مكون استعراض هيكل نظام التصميم المؤسسي
export function DesignSystemArchitectureStudio() {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">هرمية نظام التصميم المؤسسي (Design System Hierarchy)</h3>
          <p className="text-xs text-slate-400 mt-1">تكامل الرموز والمكونات والأنماط المعقدة في نظام برمجي موحد</p>
        </div>
        <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20">
          Atomic System
        </span>
      </div>

      {/* استعراض الطبقات الثلاث */}
      <div className="space-y-3 mb-6">
        {SYSTEM_LAYERS.map((layer, idx) => (
          <div 
            key={idx}
            onClick={() => setActiveLayer(idx)}
            className={\`p-4 rounded-xl border transition cursor-pointer \${
              activeLayer === idx ? layer.color + ' ring-2 ring-indigo-500/40' : 'bg-slate-950 border-slate-800 text-slate-400'
            }\`}
          >
            <h5 className="font-bold text-sm text-slate-200 mb-1">{layer.level}</h5>
            <p className="text-xs leading-relaxed">{layer.content}</p>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
        💡 <strong className="text-slate-200">القاعدة الذهبية:</strong> لا يجوز أبداً استخدام قيم ألوان أو أبعاد ثابتة ومشفرة يدوياً (Hardcoded values مثل #ff0000 أو 13px) في أي مكون؛ بل يجب أن يشير كل كود برمجي إلى رمز تصميم معتمد في النظام.
      </div>
    </div>
  );
}`,
      outputExplanation: "يشرح هذا النموذج الهرمية الثلاثية المعتمدة عالمياً لبناء أنظمة التصميم؛ حيث تبدأ من الذرات والرموز (Design Tokens)، وتصعد إلى المكونات الأساسية (Primitives)، وصولاً إلى القوالب والأنماط التفاعلية المعقدة، مما يضمن اتساقاً تاماً وسهولة في الصيانة والتطوير.",
      commonMistakes: [
        {
          mistake: "كتابة قيم ألوان ومقاسات مخصصة وعشوائية في الـ CSS بدلاً من استخدام رموز التصميم.",
          why: "استخدام الألوان المشفرة يدوياً يجعل من المستحيل تطبيق تغيير الهوية (Rebranding) أو دعم الوضع المظلم بشكل سلس ومتسق.",
          fix: "استخدم دائماً رموز التصميم المعتمدة: مثلاً bg-primary بدلاً من bg-[#4f46e5]."
        },
        {
          mistake: "بناء نظام التصميم في فراغ دون إشراك وموافقة فريق تصميم واجهة المستخدم (UI/UX Designers).",
          why: "انفصال الكود البرمجي عن تصاميم Figma يؤدي إلى اختلاف مستمر في التسميات والمقاسات وصعوبة التنسيق بين الفريقين.",
          fix: "وحّد المسميات بين كود React وملفات Figma Design Tokens لضمان لغة مشتركة واحدة بين الفريقين."
        }
      ],
      bestPractices: [
        "استخدم أداة Style Dictionary لأتمتة استخراج رموز التصميم من Figma وتحويلها إلى متغيرات CSS وJSON.",
        "احرص على أن تكون كافة مكونات النظام متوافقة مع معايير إمكانية الوصول العالمية WCAG 2.1 AA.",
        "وفر وثائق واضحة تشرح حالات الاستخدام الموصى بها والمحظورة (Do's and Don'ts) لكل مكون.",
        "انشر نظام التصميم كحزمة npm مستقلة لتسهيل مشاركته بين كافة مشاريع وتطبيقات الشركة."
      ],
      visualInfographic: {
        title: "هرمية نظام التصميم المتكامل (Design System Anatomy)",
        description: "الطبقات الثلاث المتكاملة لبناء أنظمة التصميم العالمية",
        visualSteps: [
          "رموز التصميم الأساسية 🎨 (Design Tokens: الألوان، الخطوط، المسافات)",
          "المكونات المحايدة 🧩 (Core Primitives: Buttons, Inputs, Modals)",
          "الأنماط والقوالب 📄 (Patterns: Login Forms, Tables & Headers)",
          "التوثيق وإرشادات الاستخدام 📚 (Storybook Documentation & Guidelines)",
          "التكامل والاتساق المؤسسي 🏢 (نشر حزمة NPM موحدة لكافة منتجات الشركة)"
        ]
      }
    },
    {
      id: "30.2.g",
      title: "إدارة رموز التصميم (Design Tokens & Style Dictionary)",
      englishTerm: {
        term: "Design Tokens & Style Dictionary",
        pronunciation: "ديزاين توكنز آند ستايل ديكشنري",
        meaning: "القيم التصميمية الذرية المستقلة عن المنصات وتحويلها الآلي"
      },
      description: "رموز التصميم (Design Tokens) هي المتغيرات الذرية المحايدة وغير المقيدة بأي منصة برمجية، والتي تعبر عن القرارات البصرية الأساسية لنظام التصميم (مثل: ألوان العلامة التجارية، درجات الشفافية، مقاييس الخطوط، المسافات بالبكسل، ونصف قطر الانحناء). يتم تخزين هذه الرموز عادة في ملفات JSON أو YAML مركزية تمثل 'المصدر الوحيد للحقيقة' (Single Source of Truth). باستخدام أدوات تحويل احترافية مثل Style Dictionary (من تطوير أمازون)، يتم قراءة هذه الملفات تلقائياً وتحويلها بضغطة زر واحدة إلى متغيرات CSS (:root)، وفئات Tailwind CSS، ومتغيرات TypeScript، وأكواد iOS (Swift)، وأكواد Android (XML/Kotlin)، مما يضمن تطابقاً مطلقاً بنسبة 100% بين تطبيقات الويب والهواتف الذكية للشركة.",
      realWorldAnalogy: "تشبه رموز التصميم العملة الذهبية العالمية الموحدة؛ فالذهب قيمة ثابتة ومحددة، ويمكن استبدالها وصرفها فوراً إلى ريالات، أو دولارات، أو يوروهات حسب الدولة التي تزورها؛ كذلك رمز التصميم color-brand-primary هو قيمة ذهبية واحدة تتحول تلقائياً إلى كود CSS للويب أو كود Swift للآيفون.",
      whyItMatters: "تنهي رموز التصميم معضلة تباين الألوان بين الموقع وتطبيق الهاتف؛ فإذا قررت الشركة تغيير درجة اللون الأزرق الرسمي، يتم تعديل سطر واحد في ملف JSON المركزي، وتقوم أدوات التحويل بتحديث موقع React وتطبيق React Native وتطبيقات iOS تلقائياً دون أي جهد يدوي.",
      syntax: "// ملف الرموز المركزي (tokens.json):\n{\n  \"color\": {\n    \"brand\": {\n      \"primary\": { \"value\": \"#6366f1\" }\n    }\n  }\n}\n// ناتج التحويل إلى متغيرات CSS:\n// :root { --color-brand-primary: #6366f1; }",
      simpleExample: `// استعراض محاكاة تطبيق رموز التصميم كمتغيرات CSS في واجهة React
import React, { useState } from 'react';

// محاكاة رموز التصميم المحولة إلى متغيرات CSS
export function DesignTokensDemo() {
  const [primaryColor, setPrimaryColor] = useState('#4f46e5');

  return (
    <div 
      style={{ '--token-primary': primaryColor }}
      className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm"
    >
      <h4 className="font-bold text-xs text-slate-300 mb-2">استهلاك رموز التصميم (CSS Variables)</h4>
      
      <div className="flex gap-2 mb-3">
        <button 
          onClick={() => setPrimaryColor('#4f46e5')}
          className="w-5 h-5 rounded-full bg-indigo-600 border border-white/40"
          title="أزرق نيلي"
        />
        <button 
          onClick={() => setPrimaryColor('#10b981')}
          className="w-5 h-5 rounded-full bg-emerald-500 border border-white/40"
          title="أخضر زمردي"
        />
        <button 
          onClick={() => setPrimaryColor('#f59e0b')}
          className="w-5 h-5 rounded-full bg-amber-500 border border-white/40"
          title="كهرماني"
        />
      </div>

      <button 
        style={{ backgroundColor: 'var(--token-primary)' }}
        className="w-full py-2 rounded-xl text-xs font-bold text-white transition shadow-lg"
      >
        زر يعتمد على الرمز الديناميكي
      </button>
    </div>
  );
}`,
      advancedExample: `// استوديو محاكاة محرك Style Dictionary لتحويل رموز الـ JSON إلى CSS و TypeScript
import React, { useState } from 'react';

// محاكي محرك تحويل رموز التصميم
class StyleDictionarySimulator {
  static buildTokens(jsonTokens) {
    const cssVars = [];
    const tsTypes = [];

    // تحويل الألوان
    for (const [key, val] of Object.entries(jsonTokens.color)) {
      cssVars.push(\`  --color-\${key}: \${val};\`);
      tsTypes.push(\`  readonly \${key}: '\${val}';\`);
    }

    return {
      cssOutput: \`:root {\\n\${cssVars.join('\\n')}\\n}\`,
      tsOutput: \`export const Colors = {\\n\${tsTypes.join('\\n')}\\n} as const;\`
    };
  }
}

// مكون استوديو تحويل الرموز المركزي
export function TokensTransformStudio() {
  const [tokensData] = useState({
    color: {
      'brand-primary': '#6366f1',
      'brand-secondary': '#a855f7',
      'surface-background': '#0f172a',
      'text-contrast': '#f8fafc'
    }
  });

  const [activeTab, setActiveTab] = useState('css');
  const compiled = StyleDictionarySimulator.buildTokens(tokensData);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">محرك رموز التصميم (Style Dictionary Engine)</h3>
          <p className="text-xs text-slate-400">تحويل ملف الـ JSON الموحد إلى متغيرات CSS وواجهات TypeScript تلقائياً</p>
        </div>
        <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
          Single Source of Truth
        </span>
      </div>

      {/* أزرار التبديل بين المخرجات */}
      <div className="flex gap-2 mb-4">
        <button 
          onClick={() => setActiveTab('css')}
          className={\`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition \${
            activeTab === 'css' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
          }\`}
        >
          مخرجات الويب (CSS Variables)
        </button>
        <button 
          onClick={() => setActiveTab('ts')}
          className={\`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition \${
            activeTab === 'ts' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
          }\`}
        >
          مخرجات الكود (TypeScript Constants)
        </button>
      </div>

      {/* منطقة عرض الكود المولد */}
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
        <pre className="overflow-x-auto text-emerald-400 leading-relaxed">
          {activeTab === 'css' ? compiled.cssOutput : compiled.tsOutput}
        </pre>
      </div>

      <div className="mt-4 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400">
        🚀 <strong className="text-slate-300">الأتمتة الذكية:</strong> عند تحديث ملف tokens.json في مستودع التصميم، يتم تشغيل سكربت Style Dictionary تلقائياً لتوليد الحزم الجديدة ونشرها دون تدخل يدوي.
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية عمل محرك Style Dictionary على تحويل المصدر الوحيد للحقيقة (ملف JSON لرموز التصميم) إلى أشكال متعددة ومتوافقة مع الويب (CSS Variables) ولغة TypeScript، مما يضمن أمان الأنواع والاتساق البصري عبر المنصات المتعددة.",
      commonMistakes: [
        {
          mistake: "تسمية رموز التصميم بأسماء بصرية مباشرة مثل color-blue أو color-red.",
          why: "إذا قررت الشركة مستقبلاً تغيير اللون الأساسي من الأزرق إلى الأخضر، سيصبح اسم color-blue يعبر عن لون أخضر مما ينشئ تناقضاً وارتباكاً كارثياً.",
          fix: "استخدم دائماً التسميات الدلالية الوظيفية (Semantic Tokens) مثل color-brand-primary وcolor-status-danger."
        },
        {
          mistake: "تعديل ملفات الـ CSS المولدة يدوياً بدلاً من تعديل ملف الـ JSON المصدري.",
          why: "أي تعديل يدوي في الملفات المولدة سيتم مسحه واستبداله فور تشغيل أمر البناء التالي.",
          fix: "عدّل دائماً في ملف الرموز الأصلي tokens.json ودع محرك Style Dictionary يعيد بناء الملفات التابعة."
        }
      ],
      bestPractices: [
        "قسّم الرموز إلى مستويين: رموز شاملة (Global Tokens: blue-500) ورموز دلالية (Semantic Tokens: action-primary).",
        "اربط رموز التصميم بملف إعداد tailwind.config.js لتمكين مطوري الواجهات من استخدامها كفئات جاهزة.",
        "استخدم إضافات Figma Tokens / Tokens Studio لمزامنة الرموز بين تصاميم المصممين ومستودع الكود عبر Git.",
        "وفّر أمان الأنواع في TypeScript عبر تحويل الرموز إلى const assertions لتمكين الإكمال التلقائي في المحرر."
      ],
      visualInfographic: {
        title: "تدفق تحويل رموز التصميم (Design Tokens Pipeline)",
        description: "كيف يتحول المصدر الموحد إلى كافة المنصات البرمجية",
        visualSteps: [
          "المصدر الموحد 📄 (ملف tokens.json يحتوي على القرارات البصرية)",
          "محرك التحويل الذكي ⚙️ (Style Dictionary يعالج الرموز ويقسمها)",
          "مخرجات الويب 🌐 (توليد متغيرات CSS Variables وفئات Tailwind)",
          "مخرجات لغات البرمجة 💻 (توليد TypeScript Constants مع أمان الأنواع)",
          "مخرجات تطبيقات الهواتف 📱 (توليد كود Swift للآيفون وكود Kotlin للأندرويد)"
        ]
      }
    },
    {
      id: "30.2.h",
      title: "دعم السمات والوضع المظلم (Theming & Dark Mode)",
      englishTerm: {
        term: "Theming & Dark Mode Architecture",
        pronunciation: "ثيمينغ آند دارك مود أركيتكشر",
        meaning: "معمارية دعم السمات المتعددة والوضع المظلم السلس"
      },
      description: "أصبح دعم الوضع المظلم (Dark Mode) وتعدد السمات (Multi-tenant Theming) معياراً أساسياً في كافة تطبيقات الويب الحديثة. تتضمن المعمارية المتقدمة لإدارة السمات في مكتبات المكونات: 1) استخدام متغيرات CSS الدلالية (Semantic CSS Variables) لتحديد الألوان بناءً على دورها الوظيفي (مثل --surface-base و--text-primary)؛ 2) تطبيق فئة dark على عنصر جذر المستند (document.documentElement) أو استخدام سمة بيانات مخصصة data-theme='dark'؛ 3) مزامنة السمة مع تفضيلات نظام تشغيل المستخدم تلقائياً عبر استعلام الوسائط prefers-color-scheme؛ 4) منع ظاهرة وميض السمة الخاطئة (Theme Flashing / FOUC) عند تحميل الصفحة لأول مرة من خلال قراءة التفضيل المخزن في localStorage قبل اكتمال تحميل كود React.",
      realWorldAnalogy: "يشبه دعم السمات والوضع المظلم الإضاءة الذكية في المنازل العصرية؛ لا تحتاج لهدم الجدران وتغيير الطلاء عند حلول الليل؛ بل تضغط على مفتاح 'الوضع المسائي' فتتحول الإضاءة تلقائياً إلى درجات دافئة ومريحة للعين، مع الحفاظ على نفس ترتيب وأثاث الغرفة بالكامل.",
      whyItMatters: "يحمي الوضع المظلم أعين المستخدمين من الإجهاد في البيئات منخفضة الإضاءة، ويوفر استهلاك بطاريات الهواتف ذات شاشات OLED بنسبة تصل إلى 40%. كما يتيح دعم السمات للشركات تقديم تطبيقات مخصصة متعددة العلامات التجارية (Multi-tenant B2B) لنفس النظام بتغيير ملف سمة CSS فقط.",
      syntax: "// تطبيق الوضع المظلم عبر سمة البيانات في CSS:\n:root[data-theme='light'] {\n  --bg-primary: #ffffff;\n  --text-primary: #0f172a;\n}\n:root[data-theme='dark'] {\n  --bg-primary: #0f172a;\n  --text-primary: #f8fafc;\n}",
      simpleExample: `// تبديل سلس بين الوضع الفاتح والوضع المظلم باستخدام متغيرات CSS في React
import React, { useState } from 'react';

// مكون تجريبي يدعم السمتين
export function SimpleThemingDemo() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={\`p-4 rounded-xl border transition-colors duration-300 max-w-sm \${
      isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-slate-100 text-slate-900 border-slate-300'
    }\`}>
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-bold text-xs">{isDark ? '🌙 الوضع المظلم' : '☀️ الوضع الفاتح'}</h4>
        <button 
          onClick={() => setIsDark(!isDark)}
          className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-bold rounded-lg"
        >
          تبديل
        </button>
      </div>
      <p className="text-xs opacity-80 leading-relaxed">
        المحتوى يتكيف تلقائياً مع السمة المختارة مع الحفاظ على وضوح وتباين النصوص.
      </p>
    </div>
  );
}`,
      advancedExample: `// نظام متكامل لإدارة السمات المتعددة (Multi-Theme Provider Studio) مع دعم تفضيلات النظام
import React, { useState, useEffect } from 'react';

// تعريف لوحات ألوان السمات المؤسسية
const THEMES = {
  dark: { name: 'المظلم الكلاسيكي (Slate Dark)', bg: 'bg-slate-950', text: 'text-slate-100', border: 'border-slate-800', accent: 'bg-indigo-600' },
  light: { name: 'الفاتح النقي (Pure Light)', bg: 'bg-white', text: 'text-slate-900', border: 'border-slate-200', accent: 'bg-indigo-600' },
  emerald: { name: 'أخضر زمردي (Corporate Emerald)', bg: 'bg-emerald-950', text: 'text-emerald-100', border: 'border-emerald-800', accent: 'bg-emerald-500' }
};

// مكون استوديو اختبار وإدارة السمات المتقدمة
export function AdvancedThemingStudio() {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const active = THEMES[currentTheme];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">معمارية إدارة السمات (Enterprise Theming Engine)</h3>
          <p className="text-xs text-slate-400">تطبيق السمات المتعددة والوضع المظلم دون إعادة بناء المكونات</p>
        </div>
        <span className="text-xs font-mono bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">
          CSS Variables Driven
        </span>
      </div>

      {/* خيارات اختيار السمة */}
      <div className="flex gap-2 mb-6">
        {Object.entries(THEMES).map(([key, t]) => (
          <button
            key={key}
            onClick={() => setCurrentTheme(key)}
            className={\`px-3 py-2 rounded-xl text-xs font-bold transition border \${
              currentTheme === key ? 'bg-indigo-600 text-white border-indigo-400 shadow' : 'bg-slate-950 text-slate-400 border-slate-800'
            }\`}
          >
            {t.name.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* مساحة العرض المتكيفة مع السمة */}
      <div className={\`p-6 rounded-2xl border transition-all duration-300 \${active.bg} \${active.text} \${active.border}\`}>
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-bold text-sm">معاينة بطاقة المكون تحت سمة: {active.name}</h4>
          <span className={\`text-[10px] px-2 py-0.5 rounded text-white font-bold \${active.accent}\`}>
            شارة نشطة
          </span>
        </div>
        <p className="text-xs opacity-75 leading-relaxed mb-4">
          يتم تطبيق السمة عبر متغيرات CSS دلالية؛ المكون البرمجي لا يعرف شيئاً عن الألوان المشفرة ويثق في عقد السمة الخارجي.
        </p>

        <button className={\`px-4 py-2 rounded-xl text-xs font-bold text-white transition \${active.accent}\`}>
          زر تفاعلي متناسق مع السمة
        </button>
      </div>
    </div>
  );
}`,
      outputExplanation: "يشرح هذا النموذج كيف تبنى معمارية السمات الحديثة باستخدام متغيرات CSS الدلالية؛ حيث يتمكن التطبيق من التبديل الفوري بين الوضع الفاتح والمظلم وسمات العلامات التجارية دون الحاجة لإعادة تصيير الشجرة البرمجية أو إعادة تحميل الصفحة.",
      commonMistakes: [
        {
          mistake: "استخدام ألوان صلبة ومشفرة مثل text-black وbg-white في مكونات مكتبة التصميم.",
          why: "يؤدي ذلك إلى صعوبة قراءة النصوص في الوضع المظلم وظهور نصوص سوداء فوق خلفيات داكنة.",
          fix: "استخدم دائماً متغيرات الألوان الدلالية المعتمدة مثل text-foreground وbg-background."
        },
        {
          mistake: "الاعتماد على useState فقط لحفظ السمة دون قراءة وحفظ القيمة في localStorage ومطابقة تفضيلات النظام.",
          why: "يعود التطبيق للوضع الافتراضي مع كل تحديث للصفحة ويتجاهل رغبة المستخدم المحددة في إعدادات حاسوبه.",
          fix: "احفظ السمة في localStorage واستمع لاستعلام window.matchMedia('(prefers-color-scheme: dark)') لتحديد السمة تلقائياً."
        }
      ],
      bestPractices: [
        "ضع سكربت صغير وسريع في وسم <head> في ملف index.html لقراءة السمة وتطبيقها فوراً لمنع وميض الشاشة البيضاء (FOUC).",
        "وفّر خياراً ثالثاً للمستخدم بعنوان 'تلقائي / متوافق مع النظام' (System Default) بجانب الفاتح والمظلم.",
        "اختبر تباين الألوان في كلا الوضعين باستخدام أدوات فحص الوصولية للتأكد من سهولة القراءة.",
        "وثّق كافة الحالات في Storybook عبر إضافة @storybook/addon-themes للتبديل بين السمات بنقرة واحدة أثناء التطوير."
      ],
      visualInfographic: {
        title: "معمارية دعم السمات والوضع المظلم (Theming Architecture)",
        description: "كيف يتم تطبيق السمات المتعددة بسلاسة وأمان",
        visualSteps: [
          "فحص تفضيلات النظام 🖥️ (استعلام prefers-color-scheme وقراءة التخزين المحلي)",
          "حقن الفئة على الجذر 🏷️ (تطبيق class='dark' أو data-theme على <html>)",
          "تنشيط متغيرات الـ CSS 🎨 (تبديل قيم المتغيرات الدلالية لحظياً)",
          "تكيف المكونات التلقائي 📱 (المكونات تستهلك المتغيرات وتغير مظهرها بـ 0ms)",
          "حفظ التفضيل المستمر 💾 (مزامنة خيار الزائر في localStorage للجلسات القادمة)"
        ]
      }
    },
    {
      id: "30.2.i",
      title: "نشر Storybook كوثائق حية (Publishing Storybook as Live Docs)",
      englishTerm: {
        term: "Publishing Storybook Live Docs",
        pronunciation: "ببليشنغ ستوري بوك لايف دوكس",
        meaning: "بناء وتصدير ونشر وثائق Storybook كموقع ويب ثابت وحي"
      },
      description: "تحويل Storybook من مجرد أداة محلية على جهاز المطور إلى موقع ويب تفاعلي حي ومنشور سحابياً (Live Documentation Portal) يمثل الخطوة الفارقة لنضج نظام التصميم في المؤسسات. باستخدام أمر البناء build-storybook، يتم تصدير كامل بيئة Storybook وقصصها ومستنداتها إلى مجلد يحتوي على ملفات ويب ثابتة نقية (Static HTML, JS, CSS) في مجلد storybook-static. يمكن نشر هذا الموقع الثابت مجاناً وفورياً عبر منصات استضافة مثل GitHub Pages أو Vercel أو AWS S3 وCloudflare Pages، مع ربطه بمسارات الـ CI/CD ليتم تحديث الموقع تلقائياً مع كل دمج في الفرع الرئيسي main، مما يمنح المصممين والمطورين في الشركة مرجعاً حياً ودائماً يمكن تجربته من أي متصفح.",
      realWorldAnalogy: "يشبه نشر Storybook كوثائق حية إصدار الكتالوج السنوي الفاخر لمنتجات شركة أثاث عالمية (مثل IKEA) وعرضه إلكترونياً على الإنترنت؛ يمكن لأي عميل في أي مكان في العالم تصفح غرف النوم، قياس أبعاد الخزائن، ورؤية كافة الألوان المتاحة قبل اتخاذ قرار الشراء.",
      whyItMatters: "يقضي نشر Storybook الحي على أسئلة المطورين المتكررة: 'هل لدينا مكون جدول يدعم الفرز؟'؛ حيث يتصفح المطور الموقع الحي، ويجرب المكون، وينسخ كود الاستخدام فوراً. كما يمكن مشاركة الرابط مع فرق التدقيق الخارجي ومصممي الواجهات لاعتماد التعديلات البصرية دون الحاجة لتثبيت بيئة التطوير محلياً.",
      syntax: "# بناء حزمة Storybook الثابتة:\nnpm run build-storybook\n\n# نشر مجلد storybook-static عبر GitHub Pages:\nnpx gh-pages -d storybook-static",
      simpleExample: `// استعراض محاكاة خطوة البناء والنشر الثابت لـ Storybook في ملف package.json
// package.json scripts:
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build -o storybook-static",
    "deploy-storybook": "gh-pages -d storybook-static"
  }
}`,
      advancedExample: `// مسار أتمتة النشر الكامل لـ Storybook على GitHub Pages عبر GitHub Actions
// .github/workflows/deploy-storybook.yml
name: نشر وثائق Storybook الحية

on:
  push:
    branches:
      - main # يتم التشغيل تلقائياً فور الدمج في الفرع الرئيسي

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: سحب كود المشروع من Git
        uses: actions/checkout@v4

      - name: تهيئة بيئة Node.js الحديثة
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: التثبيت الصارم للاعتماديات
        run: npm ci

      - name: بناء وثائق Storybook كموقع ثابت
        run: npm run build-storybook

      - name: رفع ونشر الموقع الثابت على GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages # الفرع المخصص لاستضافة الموقع
          folder: storybook-static # المجلد الناتج عن عملية البناء`,
      outputExplanation: "يوضح هذا الملف مسار النشر المؤتمت (CI/CD Pipeline)؛ حيث يتم سحب الكود عند الدمج في main، وتثبيت الحزم بصرامة عبر npm ci، ثم بناء ملفات Storybook الثابتة في مجلد storybook-static، وأخيراً نشرها أوتوماتيكياً على استضافة GitHub Pages لإنتاج رابط عام ومحدث باستمرار.",
      commonMistakes: [
        {
          mistake: "نسيان تعيين المسار الأساسي (Base Path) إذا كان موقع Storybook منشوراً في مسار فرعي على GitHub Pages (مثل /my-repo/).",
          why: "يؤدي ذلك إلى فشل تنزيل ملفات الـ JS والـ CSS وظهور شاشة بيضاء بسبب خطأ 404 في الروابط النسبية.",
          fix: "مرر وسيط الرابط الأساسي أثناء البناء: storybook build -o storybook-static --base-path /my-repo/."
        },
        {
          mistake: "تضمين أسرار أو روابط API خاصة بالإنتاج الحساس داخل قصص Storybook المنشورة للعامة.",
          why: "أي كود يتم بناؤه في Storybook يصبح متاحاً لأي شخص يزور الموقع العام ويمكن قراءته في أدوات المطورين.",
          fix: "استخدم بيانات وهمية تماماً (Mock Data) وافحص الكود للتأكد من خلوه من أي مفاتيح خاصة."
        }
      ],
      bestPractices: [
        "أمّن موقع الوثائق بكلمة مرور أو بوابة مصادقة SSO (مثل Vercel Password Protection) إذا كانت مكتبة المكونات خاصة وسرية للشركة.",
        "أضف رابط موقع Storybook الحي في ترويسة ملف README.md الخاص بالمستودع لسهولة وصول المطورين إليه.",
        "فعّل ميزة Deploy Previews في Pull Requests لمعاينة الوثائق قبل دمج أي ميزة جديدة.",
        "استخدم وسم autodocs لتوليد صفحات التوثيق التلقائية لتظهر كوثائق مكتملة ومنسقة للزوار."
      ],
      visualInfographic: {
        title: "مسار نشر وثائق Storybook الحية (Live Docs Deployment)",
        description: "كيف يتحول كود المكونات إلى بوابة وثائق إلكترونية عامة",
        visualSteps: [
          "دمج التعديل في Git 🚀 (Push to main branch)",
          "تشغيل سير عمل الـ CI/CD 🤖 (GitHub Actions يستلم المهمة)",
          "توليد الموقع الثابت 📦 (storybook build ينشئ مجلد storybook-static)",
          "النشر السحابي التلقائي 🌐 (الرفع إلى GitHub Pages أو Vercel)",
          "بوابة وثائق حية ومتاحة 📚 (رابط إلكتروني متاح للجميع لتجربة المكونات)"
        ]
      }
    },
    {
      id: "30.2.j",
      title: "إعداد المكتبة للنشر كحزمة npm (Library Packaging & Rollup)",
      englishTerm: {
        term: "NPM Package Bundling & Publishing",
        pronunciation: "إن بي إم باكيدج باندلينغ آند ببليشنغ",
        meaning: "حزم وتجهيز مكتبة المكونات وتصديرها كحزمة رسمية على npm"
      },
      description: "لكي تتمكن كافة مشاريع وتطبيقات الشركة من استهلاك مكتبة المكونات وتثبيتها بسهولة عبر npm install @my-company/ui، يجب إعداد وبناء المكتبة باستخدام وضع المكتبة (Library Mode) في Vite أو Rollup. يتطلب إعداد المكتبة الاحترافي: 1) استبعاد React وReact DOM من الحزمة النهائية واعتبارها اعتماديات نظيرة (peerDependencies) لتجنب مضاعفة حجم التثبيت؛ 2) تصدير كود المكتبة بصيغتي ES Modules (.mjs / .js) للتوافق مع أدوات التجميع الحديثة، وCommonJS (.cjs) للتوافق مع بيئات Node القديمة؛ 3) توليد وتصدير ملفات تعريف الأنواع (TypeScript Declarations - .d.ts) لتوفير الإكمال التلقائي الذكي؛ 4) ضبط حقول ملف package.json (مثل main, module, types, exports) بدقة متناهية.",
      realWorldAnalogy: "يشبه تجهيز المكتبة لنشرها على npm تعبئة وتغليف الأدوية في علب قياسية محكمة؛ فالعلبة تحتوي على الدواء الصافي المركز فقط، وتتضمن نشرة إرشادات طبية دقيقة (ملفات .d.ts)، مع كتابة تاريخ الصلاحية وطريقة الاستخدام على الغلاف الخارجي (ملف package.json) لتتمكن أي صيدلية في العالم من صرفه بأمان.",
      whyItMatters: "حزم المكتبة بشكل غير احترافي قد يؤدي إلى ظاهرة 'React المزدوج' (Duplicate React Error) التي تكسر كافة الخطافات (Hooks) في التطبيق المستهلك، أو تضخيم حجم ملفات الجافاسكريبت بحزم مكررة. التجهيز السليم يضمن صغر حجم المكتبة وسهولة استيرادها عبر تقنية Tree-shaking.",
      syntax: "// إعداد وضع المكتبة في vite.config.ts:\nbuild: {\n  lib: {\n    entry: 'src/index.ts',\n    name: 'MyCompanyUI',\n    formats: ['es', 'cjs'],\n    fileName: (format) => `index.${format}.js`\n  },\n  rollupOptions: {\n    external: ['react', 'react-dom']\n  }\n}",
      simpleExample: `// استعراض محتويات ملف vite.config.js المخصص لحزم مكتبة مكونات React
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // تفعيل وضع المكتبة
    lib: {
      entry: './src/index.js', // نقطة التصدير المركزية للمكتبة
      name: 'SuperUI',
      fileName: (format) => \`super-ui.\${format}.js\`
    },
    rollupOptions: {
      // استبعاد React من الحزمة النهائية ليتم تثبيتها عبر التطبيق المستهلك
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});`,
      advancedExample: `// ملف package.json الشامل والمعياري لإعداد مكتبة مكونات تجارية للنشر على NPM
{
  "name": "@my-company/ui-core",
  "version": "1.0.0",
  "description": "نظام التصميم والمكتبة الموحدة لمكونات React في الشركة",
  "type": "module",
  // نقطة الدخول لبيئات CommonJS القديمة
  "main": "./dist/index.cjs",
  // نقطة الدخول لبيئات ES Modules الحديثة
  "module": "./dist/index.js",
  // مسار ملفات تعريف الأنواع لـ TypeScript
  "types": "./dist/index.d.ts",
  // الخريطة الحديثة لتعريف نقاط التصدير (Modern Exports Map)
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    },
    "./styles.css": "./dist/style.css"
  },
  // تحديد الملفات المرفوعة إلى npm فقط وتجاهل كود المصدر
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  // تفريغ الحزم التابعة وجعل React اعتماد نظير إلزامي
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  },
  "scripts": {
    "build": "vite build && tsc --emitDeclarationOnly",
    "prepublishOnly": "npm run build && npm test"
  }
}`,
      outputExplanation: "يوضح هذا الملف المعماري كيفية إعداد package.json بدقة للنشر على npm؛ حيث يفعل حقل exports لتمكين التوافق المزدوج مع بيئات ESM وCJS، ويوجه حقل types إلى تعريفات TypeScript، ويعزل React داخل peerDependencies لحماية المشاريع المستهلكة من أخطاء تعدد نسخ React.",
      commonMistakes: [
        {
          mistake: "وضع React وReact DOM داخل dependencies بدلاً من peerDependencies في ملف package.json الخاص بالمكتبة.",
          why: "هذا يسبب تنزيل نسختين مختلفتين من React في مشروع العميل، مما يؤدي فوراً لخطأ: 'Invalid hook call: Hooks can only be called inside the body of a function component'.",
          fix: "ضع React وReact-DOM دائماً داخل peerDependencies لتضمن أن المكتبة تستخدم نفس نسخة React المثبتة في التطبيق الرئيسي."
        },
        {
          mistake: "نسيان تصدير ملفات الأنماط CSS أو نسيان تضمين مجلد dist داخل حقل files في package.json.",
          why: "سيتم رفع الحزمة بدون كود البناء النهائي أو بدون ملفات التنسيق، وتظهر المكونات بدون تنسيق عند تثبيتها في مشاريع أخرى.",
          fix: "تأكد من وجود مجلد dist في حقل files واشرح في README طريقة استيراد ملف الـ CSS: import '@my-company/ui-core/styles.css'."
        }
      ],
      bestPractices: [
        "استخدم خاصية sideEffects: false في ملف package.json لتمكين ميزة تقليم الكود الميت (Tree-shaking) في مشاريع العملاء.",
        "شغّل أداة npm pack محلياً لفحص محتويات الأرشيف المضغوط والتأكد من عدم تسريب أي ملفات سرية قبل النشر الفعلي.",
        "أنشئ وثيقة README.md احترافية تحتوي على أمثلة واضحة لطريقة التثبيت والاستخدام المباشر.",
        "أتمت عملية النشر عبر GitHub Actions باستخدام مفتاح NPM Automation Token مع حماية النشر بالفرع الرئيسي."
      ],
      visualInfographic: {
        title: "دورة تجهيز ونشر مكتبة React على NPM",
        description: "كيف يتم حزم كود المكونات وتصديره للاستهلاك العالمي",
        visualSteps: [
          "تحديد نقطة الدخول المركزية 📄 (src/index.ts يجمع كافة المكونات)",
          "حزم الكود عبر Vite / Rollup ⚙️ (توليد نسخ ESM وCJS خفيفة)",
          "استخراج ملفات الأنواع 📝 (tsc يولد ملفات .d.ts للإكمال التلقائي)",
          "عزل React في peerDependencies 🛡️ (منع أخطاء تكرار نسخ React)",
          "النشر الرسمي على npm 🚀 (npm publish يتيح تثبيت الحزمة عالمياً)"
        ]
      }
    },
    {
      id: "30.2.k",
      title: "استخدام Semantic Versioning مع المكتبة (Changesets & SemVer)",
      englishTerm: {
        term: "SemVer & Changesets Management",
        pronunciation: "سيمفير آند تشينجسيتس مانيجمنت",
        meaning: "إدارة الإصدارات الدلالية وأتمتة سجلات التغيير وإطلاق الحزم"
      },
      description: "بمجرد نشر مكتبة المكونات وبدء استخدامها في مشاريع متعددة داخل الشركة، يصبح أي تعديل غير محسوب تهديداً بتعطيل أعمال الفرق الأخرى. هنا تبرز أهمية الالتزام الصارم بقواعد الترقيم الدلالي للإصدارات Semantic Versioning (SemVer: MAJOR.MINOR.PATCH) بالاشتراك مع أدوات أتمتة حديثة مثل Changesets. يتيح نظام Changesets للمطور إضافة ملف توثيق نصي صغير مع كل Pull Request يوضح نوع التغيير (هل هو إصلاح خطأ patch، أم ميزة جديدة متوافقة minor، أم تغيير جذري major) مع شرح موجز للأثر. عند دمج التعديلات في main، تقوم أداة Changesets تلقائياً برفع رقم الإصدار المناسب، وتحديث ملف CHANGELOG.md، ونشر النسخة الجديدة على npm دون أي تدخل يدوي.",
      realWorldAnalogy: "يشبه نظام Changesets وسجل التغييرات شريط الأخبار العاجلة ومجلة التحديثات في المطارات؛ فإذا كان هناك تعديل بسيط في رقم بوابة الصعود (Patch)، يعلن في الشاشات بهدوء؛ وإذا تم فتح صالة سفر جديدة ومريحة (Minor)، يهنأ المسافرون بالميزة؛ أما إذا تم إغلاق المطار للصيانة الجذرية (Major)، يتم إخطار الجميع مسبقاً لاتخاذ الترتيبات البديلة.",
      whyItMatters: "يقضي Changesets على الفوضى في إدارة الإصدارات، ويمنع النشر العشوائي للإصدارات الجذرية (Breaking Changes) دون تنبيه مسبق، ويحافظ على سجل تاريخي شفاف وموثق لكل سطر تم تعديله في مكتبة المكونات.",
      syntax: "# إضافة سجل تغيير للـ Pull Request الحالي:\nnpx changeset\n# تطبيق التحديث ورفع الإصدارات وتوليد سجل Changelog:\nnpx changeset version\n# النشر النهائي على npm:\nnpx changeset publish",
      simpleExample: `// استعراض محاكاة ملف التغيير الصغير الذي تولده أداة Changesets داخل مجلد .changeset
// .changeset/green-dragons-sing.md
---
"@my-company/ui-core": minor
---

إضافة خاصية \`isLoading\` الجديدة لمكون الزر \`Button\` مع مؤشر تحميل متحرك ودعم تعطيل النقرات أثناء المعالجة.`,
      advancedExample: `// سير عمل GitHub Actions المتكامل لأتمتة إصدارات المكتبة ونشرها على NPM عبر Changesets
// .github/workflows/release.yml
name: أتمتة إصدارات المكتبة ونشرها (Release Pipeline)

on:
  push:
    branches:
      - main # يتم التشغيل عند دمج التعديلات في الفرع الرئيسي

concurrency: \${{ github.workflow }}-\${{ github.ref }}

jobs:
  release:
    name: فحص التغييرات والنشر التلقائي
    runs-on: ubuntu-latest
    steps:
      - name: سحب كود المشروع
        uses: actions/checkout@v4

      - name: تهيئة بيئة Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: تثبيت الاعتماديات
        run: npm ci

      - name: بناء حزم المكتبة
        run: npm run build

      # خطوة Changesets الذكية: إما تفتح PR لتحديث الإصدارات أو تنشر لـ NPM فوراً
      - name: إنشاء طلب سحب الإصدار أو النشر الرسمي
        uses: changesets/action@v1
        with:
          publish: npm run release-packages
          commit: "chore(release): تحديث إصدارات المكتبة وسجل CHANGELOG.md"
          title: "🚀 تحديث إصدارات حزم نظام التصميم"
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: \${{ secrets.NPM_TOKEN }}`,
      outputExplanation: "يوضح هذا السير المؤتمت كيف تدير أداة Changesets دورة حياة الإصدارات تلقائياً؛ حيث تجمع ملفات التغيير المعلقة في طلب سحب آلي (Version PR) يرفع أرقام الإصدارات ويحدث ملف CHANGELOG.md، وفور دمج هذا الطلب، تقوم بنشر الحزم المحدثة مباشرة على npm باستخدام NPM_TOKEN المشفر.",
      commonMistakes: [
        {
          mistake: "تعديل حقل version يدوياً في ملف package.json دون تحديث سجل التغييرات CHANGELOG.md.",
          why: "هذا يجعل المطورين الآخرين في حيرة تامة لمعرفة ما تم إصلاحه أو إضافته في هذا الإصدار الجديد.",
          fix: "استخدم دائماً أداة مثل Changesets لرفع الإصدار وتوليد سجل التغييرات الرسمي تلقائياً."
        },
        {
          mistake: "إطلاق تغيير جذري (Breaking Change) كإصدار فرعي Minor أو Patch.",
          why: "هذا يكسر تطبيقات المطورين الذين يعتمدون على التحديثات المتوافقة (^1.0.0) تلقائياً ويتسبب في توقف تطبيقاتهم في الإنتاج.",
          fix: "أي تغيير يكسر الواجهة السابقة أو يحذف خصائص إلزامية يجب أن يرفع الرقم الرئيسي MAJOR حصراً (مثال: من 1.4.2 إلى 2.0.0)."
        }
      ],
      bestPractices: [
        "فرض إضافة changeset كشرط إلزامي لاجتياز فحص الـ PR لأي تعديل يمس المكونات عبر Changeset Bot.",
        "اكتب شروحات واضحة ومفيدة في ملفات التغيير تصف القيمة المضافة للمطور وليس مجرد كلام عام مثل 'fix bug'.",
        "وفّر دليلاً للانتقال (Migration Guide) داخل سجل التغييرات عند إطلاق أي إصدار رئيسي Major.",
        "استخدم ميزة Canary / Prerelease Versions لتجربة الإصدارات التجريبية قبل اعتمادها رسمياً."
      ],
      visualInfographic: {
        title: "دورة إدارة الإصدارات الدلالية المؤتمتة (Changesets Lifecycle)",
        description: "كيف تدار وتطلق إصدارات مكتبات المكونات بأمان مطلق",
        visualSteps: [
          "تعديل كود المكون ✍️ (إضافة ميزة أو إصلاح خطأ في فرع فرعي)",
          "توثيق الأثر عبر Changeset 📝 (اختيار patch / minor / major مع وصف مختصر)",
          "توليد طلب سحب الإصدار 🤖 (Changesets يجمع التحديثات في Version PR)",
          "تحديث سجل CHANGELOG.md 📚 (توثيق تاريخي آلي لكافة التعديلات)",
          "النشر الرسمي على npm 🚀 (رفع الإصدار المعتمد وتوفيره للمطورين)"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-30-2-1",
      question: "ما هو الفارق الأساسي بين تطوير المكونات داخل تطبيق React وتطويرها معزولة في Storybook؟",
      options: [
        "لا يوجد أي فرق على الإطلاق؛ كلاهما يتطلب تشغيل نفس خادم الواجهة الخلفية.",
        "يتيح Storybook تطوير وفحص المكون في عزلة تامة ومستقلة عن الخوادم وقواعد البيانات، ومحاكاة كافة حالاته البصرية والحدية بضغطة زر.",
        "Storybook يدعم فقط لغة HTML القديمة ولا يدعم مكونات React الحديثة.",
        "Storybook مخصص فقط لتصميم قواعد بيانات SQL."
      ],
      correctAnswer: 1,
      explanation: "يمثل Storybook بيئة تطوير معزولة تتيح بناء المكونات واختبار حالاتها البصرية والحدية ببيانات وهمية دون الحاجة لتشغيل التطبيق الكامل أو الاعتماد على خوادم الـ API."
    },
    {
      id: "quiz-30-2-2",
      question: "لماذا يجب وضع حزمتي react و react-dom داخل peerDependencies في ملف package.json الخاص بمكتبة المكونات؟",
      options: [
        "لتقليل استهلاك الإنترنت بنسبة 90%.",
        "لمنع تنزيل نسخة مكررة ثانية من React في تطبيق العميل المستهلك، وهو ما يؤدي لخطأ انهيار الخطافات (Invalid Hook Call).",
        "لأن npm تحظر رفع أي حزمة تحتوي على كلمة React.",
        "لتشفير كود المشروع ومنع سرقته."
      ],
      correctAnswer: 1,
      explanation: "تضمن peerDependencies أن المكتبة تشترك في نفس نسخة React المثبتة في التطبيق الرئيسي المستهلك، وتمنع تكرار تثبيت نسخ متعددة تكسر عمل خطافات React."
    },
    {
      id: "quiz-30-2-3",
      question: "ما هي الوظيفة الجوهرية لأدوات اختبار الانحدار البصري مثل Chromatic في مكتبات المكونات؟",
      options: [
        "إعادة كتابة كود الجافاسكريبت بلغة بايثون.",
        "التقاط لقطات شاشة بكسل تلو الآخر لقصص Storybook ومقارنتها بالنسخ السابقة لاكتشاف أي تشوه أو زحف غير مقصود في كود الـ CSS.",
        "إرسال رسائل بريد تسويقية لعملاء الشركة.",
        "ضغط الصور وتحويلها لصيغة GIF."
      ],
      correctAnswer: 1,
      explanation: "تقوم أدوات الفحص البصري بمقارنة لقطات الشاشة لكل قصة ومطابقتها مع النسخة المرجعية المعتمدة لاكتشاف أي تشوه بصري أو انكسار في التنسيقات قبل دمج الكود."
    }
  ],
  practicalExercise: {
    id: "exercise-30-2",
    title: "تمرين تطبيقي: بناء مكون شارة تنبيه (AlertBadge) مع قصة CSF 3 ودعم الوضعين الفاتح والمظلم",
    scenario: "أنت مهندس واجهات في فريق نظام التصميم للشركة؛ المطلوب منك بناء مكون شارة تنبيهية AlertBadge يعتمد على رموز التصميم، وكتابة ملف قصة Storybook كامل وفق معيار CSF 3 يغطي حالتي النجاح والتحذير، مع دعم التبديل السلس بين الوضع الفاتح والوضع المظلم.",
    tasks: [
      "بناء مكون AlertBadge يستقبل label وvariant ('success' | 'warning') وisDark.",
      "كتابة تعريف قصة CSF 3 يتضمن التصدير الافتراضي meta مع وسم autodocs.",
      "تصدير قصتين مستقلتين: SuccessStory وWarningStory مع تمرير الخصائص المناسبة.",
      "التحقق من تباين الألوان في كلا الوضعين."
    ],
    hints: [
      "في CSF 3، عرّف التصدير الافتراضي ككائن يحوي title وcomponent.",
      "استخدم كائنات Args المباشرة داخل القصص المسماة.",
      "استخدم فئات Tailwind الدلالية لتنسيق الحالات."
    ],
    solution: `// الحل النموذجي للتمرين التطبيقي: مكون وشارة بنظام CSF 3
import React from 'react';

// ==========================================
// 1. مكون الشارة التنبيهية (AlertBadge Component)
// ==========================================
export function AlertBadge({ label, variant = 'success', isDark = false }) {
  const styles = {
    success: isDark 
      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40' 
      : 'bg-emerald-100 text-emerald-800 border-emerald-300',
    warning: isDark 
      ? 'bg-amber-950/80 text-amber-300 border-amber-500/40' 
      : 'bg-amber-100 text-amber-800 border-amber-300'
  };

  return (
    <span className={\`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border transition-colors \${styles[variant]}\`}>
      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
      <span>{label}</span>
    </span>
  );
}

// ==========================================
// 2. ملف قصة Storybook وفق معيار CSF 3
// ==========================================
export const AlertBadgeStoriesMeta = {
  title: 'نظام التصميم/شارات/AlertBadge',
  component: AlertBadge,
  tags: ['autodocs'],
  args: {
    isDark: true,
  },
};

// قصة حالة النجاح
export const SuccessBadgeStory = {
  args: {
    label: 'الخدمة تعمل بكفاءة 100%',
    variant: 'success',
    isDark: true
  },
};

// قصة حالة التحذير
export const WarningBadgeStory = {
  args: {
    label: 'ضغط مرتفع على الخوادم',
    variant: 'warning',
    isDark: true
  },
};`
  },
  visualInfographic: {
    title: "خارطة طريق بناء ونشر أنظمة التصميم وStorybook",
    description: "الأعمدة الأربعة لنظام التصميم المتكامل في المؤسسات التقنية",
    visualSteps: [
      "مختبر التطوير المعزول 🏝️ (Storybook 8 مع CSF 3 واختبار التفاعلات play function)",
      "نظام رموز التصميم 🎨 (Design Tokens عبر Style Dictionary ومصادر الحقيقة)",
      "التحقق البصري المؤتمت 📸 (Chromatic Visual Regression & CI Gate)",
      "الحزم والنشر كحزمة NPM 📦 (Rollup Library Mode, Changesets & SemVer)"
    ]
  }
};

