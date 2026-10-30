// src/data/sections/section29/topic1.js
// القسم 29: مراقبة التطبيقات وصيانتها - الموضوع 1: مراقبة وتتبع الأخطاء البرمجية (Error Monitoring)

export const topic1 = {
  id: "29.1",
  title: "مراقبة وتتبع الأخطاء البرمجية في الإنتاج",
  englishTitle: "Production Error Monitoring & Tracking",
  description:
    "الدليل الهندسي الشامل لتتبع وتشخيص ومعالجة الأخطاء اللحظية في تطبيقات React الإنتاجية: فهم ضرورة المراقبة الاستباقية Error Monitoring، دمج وضبط منصة Sentry السحابية، تسجيل الأخطاء يدوياً وتلقائياً عبر Breadcrumbs، ترويض الوعود غير المعالجة Unhandled Promise Rejections، دمج حدود الأخطاء Error Boundaries مع منصات التتبع، فك تعمية الأخطاء عبر خرائط المصدر المشفرة، حماية وتطهير البيانات الحساسة PII، وتصنيف شدة الأعطال وإدارة التنبيهات الذكية.",
  subtopics: [
    {
      id: "29.1.a",
      title: "مفهوم مراقبة الأخطاء Error Monitoring وأهميتها",
      englishTerm: {
        term: "Production Error Monitoring",
        pronunciation: "برودكشن إيرور مونيتورينج",
        meaning: "الرصد اللحظي التلقائي للأعطال والانهيارات التي تصيب واجهة المستخدم في بيئة الإنتاج الحقيقية"
      },
      description:
        "في بيئة الإنتاج، 99% من المستخدمين الذين يواجهون عطلاً برمجياً (مثل شاشة بيضاء أو زر لا يستجيب) لا يتصلون بالدعم الفني ولا يرسلون بريداً للإبلاغ عن الخطأ؛ بل يقومون ببساطة بإغلاق التبويب ومغادرة الموقع إلى منافس آخر للأبد. تمثل مراقبة الأخطاء (Error Monitoring) الرادار الاستباقي الذي يرصد أي استثناء برمجي (Uncaught Exception) يحدث على هاتف أو متصفح أي زائر في العالم فور وقوعه، مع تسجيل كامل لملابسات الحادث: نوع الجهاز، المتصفح، نظام التشغيل، الخطوات التي نقر عليها المستخدم قبل الانهيار (Breadcrumbs)، ورقم السطر البرمجي المسبب في الكود المصدري.",
      realWorldAnalogy:
        "تشبه أجهزة التنبيه والمراقبة المركزية لمرضى العناية المركزة في المستشفيات؛ المريض الفاقد للوعي لا يستطيع الصراخ لطلب المساعدة، ولكن شاشات المراقبة ترصد أي هبوط مفاجئ في النبض أو الأكسجين وتطلق صفارة إنذار فورية ليتدخل الأطباء في الثواني الأولى لإنقاذ حياته.",
      whyItMatters:
        "تمنح فريق التطوير القدرة على معرفة وإصلاح العيوب البرمجية الحرجة قبل أن يلاحظها مدير الشركة أو يشتكي منها آلاف العملاء، مما يحافظ على ثقة المستخدمين والمبيعات.",
      syntax:
        "// رصد كافة الأخطاء غير الملتقطة على مستوى نافذة المتصفح:\nwindow.addEventListener('error', (event) => {\n  sendErrorToBackend(event.error);\n});",
      codeExample: `// مثال بسيط: محاكي نظام رصد وتسجيل الأخطاء في المتصفح
import React, { useEffect } from 'react';

function GlobalErrorWatcher() {
  useEffect(() => {
    // دالة التقاط الأخطاء العامة غير المعالجة
    const handleError = (event) => {
      console.warn('🚨 تم رصد خطأ برمجي في واجهة المستخدم!');
      console.log('رسالة الخطأ:', event.message);
      console.log('الملف والسطر:', event.filename, event.lineno);

      // في التطبيق الحقيقي: إرسال هذه البيانات لمنصة Sentry
    };

    // الاستماع لحدث الأخطاء العام في نافذة المتصفح
    window.addEventListener('error', handleError);

    // تنظيف المستمع عند إلغاء التركيب
    return () => window.removeEventListener('error', handleError);
  }, []);

  return null;
}

export default GlobalErrorWatcher;`,
      advancedExample: `// مثال متقدم: نظام تتبع مسار تفاعلات المستخدم (User Breadcrumbs Tracker) في React
import React, { useEffect } from 'react';

// فئة لإدارة وتخزين آخر 10 حركات قام بها المستخدم قبل وقوع أي انهيار
class UserActivityLogger {
  constructor() {
    this.breadcrumbs = [];
    this.maxItems = 10;
  }

  // إضافة خطوة للمسار (نقرة زر، تغيير صفحة، أو طلب شبكي)
  log(action, category = 'ui.click') {
    const entry = {
      timestamp: new Date().toISOString(),
      action,
      category
    };
    this.breadcrumbs.push(entry);
    // الاحتفاظ بآخر 10 أحداث فقط لتوفير الذاكرة
    if (this.breadcrumbs.length > this.maxItems) {
      this.breadcrumbs.shift();
    }
  }

  // إرسال المسار الكامل مع تفاصيل الخطأ للخادم
  captureCrash(error) {
    const payload = {
      errorMessage: error.message,
      stack: error.stack,
      recentSteps: [...this.breadcrumbs]
    };
    console.error('💥 تقرير الانهيار مع المسار التاريخي للمستخدم:', payload);
    // استدعاء API المراقبة
  }
}

export const activityTracker = new UserActivityLogger();

// مكون تجريبي يوثق تفاعل المستخدم
export function SampleButton() {
  const handleClick = () => {
    activityTracker.log('نقر المستخدم على زر شراء الدورة');
    // محاكاة حدوث خطأ غير متوقع
    try {
      throw new Error('فشل معالجة بطاقة الائتمان: الحساب غير معرف');
    } catch (err) {
      activityTracker.captureCrash(err);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold transition shadow"
    >
      تجربة محاكاة رصد الخطأ مع المسار
    </button>
  );
}`,
      output:
        "التقاط فوري لتفاصيل الخطأ مع سجل زمني مرتب بآخر ما قام به المستخدم قبل الانهيار، مما يجعل إعادة تكرار الخلل البرمجي وإصلاحه أمراً في غاية السهولة.",
      commonMistakes: [
        {
          mistake: "الاعتماد على شكاوى المستخدمين فقط لمعرفة الأخطاء البرمجية في بيئة الإنتاج.",
          fix: "تثبيت أدوات المراقبة اللحظية مثل Sentry لتسجيل الأعطال تلقائياً في أول ثانية لحدوثها."
        },
        {
          mistake: "إرسال كل تحذير صغير في وحدة التحكم مما يملأ المنصة بآلاف التقارير التافهة (Noise).",
          fix: "تصفية التقارير وحصر الإرسال في الاستثناءات غير المعالجة والأخطاء الحرجة التي توقف تجربة الزائر."
        }
      ],
      bestPractices: [
        "سجل هوية الإصدار الحالي (Release Version) مع كل تقرير خطأ لتعرف أي إيداع بالتحديد تسبب في المشكلة.",
        "اربط أداة المراقبة بقناة تنبيهات فورية في Slack أو Discord لتنبيه الفريق بالأخطاء الجديدة الحرجة فوراً.",
        "احرص على ألا يؤثر كود أداة المراقبة نفسها على أداء وسرعة تحميل تطبيق React."
      ],
      infographic: {
        title: "دورة تتبع وتشخيص الأخطاء الاستباقية",
        nodes: [
          { label: "1. وقوع الاستثناء 💥", desc: "خطأ غير معالج يحدث في متصفح المستخدم أثناء التصفح" },
          { label: "2. الالتقاط التلقائي", desc: "أداة المراقبة تجمع الخطأ وبيانات الجهاز والمسار Breadcrumbs" },
          { label: "3. الإرسال المشفر", desc: "إرسال تقرير الحادثة لخوادم Sentry في الخلفية بأقل استهلاك للباندويث" },
          { label: "4. التنبيه والإصلاح", desc: "تنبيه الفريق على Slack مع السطر المسبب والحل الهندسي الفوري" }
        ]
      }
    },
    {
      id: "29.1.b",
      title: "التعرف على منصة Sentry وإعدادها في تطبيق React",
      englishTerm: {
        term: "Sentry Platform Setup",
        pronunciation: "سنتري بلاتفورم سيت أب",
        meaning: "تهيئة منصة Sentry العالمية لمراقبة أداء وأخطاء تطبيقات React وربط مفتاح الـ DSN"
      },
      description:
        "تعد Sentry المنصة السحابية القياسية الأكثر انتشاراً وشهرة في العالم لتتبع الأخطاء في تطبيقات الواجهات الأمامية. توفر Sentry حزمة رسمية مخصصة لـ React (@sentry/react) تتكامل بسلاسة مع دورة حياة المكونات ومكتبات التوجيه. يتم تهيئة المنصة عبر استدعاء Sentry.init() في الملف المدخلي الأساسي للتطبيق (main.jsx)، وتمرير مفتاح الربط الرقمي الفريد (Data Source Name - DSN)، وتحديد اسم البيئة (environment مثل production أو staging)، ورقم الإصدار البرمجي (release)، ونسبة العينات المسجلة لتتبع الأداء (tracesSampleRate).",
      realWorldAnalogy:
        "مفتاح الـ DSN في Sentry يشبه رقم صندوق البريد السري الخاص بمكتب التحقيقات في شركتك؛ كلما حدث شجار أو حادث في أي فرع حول العالم، يقوم الحراس بوضع تقرير الحادث في هذا الصندوق المحدد لتصل كافة البلاغات إلى طاولة المحقق المركزي فوراً.",
      whyItMatters:
        "يوفر Sentry واجهة بصرية مذهلة تجمع الأخطاء المتشابهة تلقائياً في مجموعات (Issues Grouping)، وتحدد النسبة المئوية للمستخدمين المتأثرين، وتربط الخطأ بالـ Commit المسبب له على GitHub.",
      syntax:
        "// تثبيت الحزمة الرسمية:\nnpm install @sentry/react\n\n// التهيئة في main.jsx:\nSentry.init({\n  dsn: 'https://key@o0.ingest.sentry.io/project',\n  integrations: [Sentry.browserTracingIntegration()]\n});",
      codeExample: `// مثال عملي: تهيئة Sentry في الملف الرئيسي main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';
import App from './App';

// تهيئة Sentry حصراً في بيئة الإنتاج أو الاستضافة الحية
if (import.meta.env.PROD) {
  Sentry.init({
    // مفتاح الاتصال بمشروعك على Sentry
    dsn: import.meta.env.VITE_SENTRY_DSN,
    // تحديد البيئة الحالية لفرز الأخطاء بدقة
    environment: import.meta.env.MODE,
    // ربط رقم الإصدار لتتبع أثر التحديثات
    release: 'react-app@' + (import.meta.env.VITE_APP_VERSION || '1.0.0'),
    // نسبة تسجيل جلسات التتبع والأداء (10% من الزيارات لتوفير الحصة الشهرية)
    tracesSampleRate: 0.1,
    // التقاط أحداث التفاعل السريعة
    integrations: [Sentry.browserTracingIntegration()]
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
      advancedExample: `// مثال متقدم: تخصيص وتعيين سياق المستخدم الحالي (User Context & Tags) في Sentry
import * as Sentry from '@sentry/react';

// دالة يتم استدعاؤها فور تسجيل دخول المستخدم لربط هويته بتقارير الأخطاء
export function identifyUserInSentry(user) {
  // إرسال معرف المستخدم ونوع اشتراكه مع حظر البيانات الحساسة ككلمات المرور
  Sentry.setUser({
    id: user.id,
    email: user.email,
    username: user.name,
    // وسم مخصص لمعرفة ما إذا كان المستخدم عميلاً مميزاً (VIP)
    plan: user.isPremium ? 'Enterprise' : 'Free'
  });

  // إضافة وسوم تصنيفية إضافية (Tags) لتسهيل الفلترة في لوحة تحكم Sentry
  Sentry.setTag('company_tier', user.isPremium ? 'Tier-1' : 'Tier-3');
  Sentry.setTag('locale', navigator.language);
}

// دالة مسح بيانات المستخدم عند تسجيل الخروج
export function clearUserFromSentry() {
  Sentry.setUser(null);
}`,
      output:
        "ربط احترافي للمشروع مع Sentry؛ حيث تصبح كافة الأعطال مصنفة بدقة باسم المستخدم المتأثر ونوع حسابه ورقم إصدار الكود المسبب.",
      commonMistakes: [
        {
          mistake: "تعيين tracesSampleRate: 1.0 في بيئة الإنتاج لموقع ذي زيارات مليونية مما يؤدي لاستنزاف الحصة الشهرية لـ Sentry في أول 3 ساعات!",
          fix: "ضبط tracesSampleRate بنسبة مناسبة (مثل 0.05 إلى 0.1 أي 5% إلى 10%) في المشاريع ذات الزيارات الكثيفة."
        },
        {
          mistake: "الاعتماد على مفتاح DSN وهمي أو تركه فارغاً في ملف .env.production.",
          fix: "التأكد من حقن VITE_SENTRY_DSN السليم في إعدادات المنصة السحابية (Vercel/Netlify)."
        }
      ],
      bestPractices: [
        "استخدم خاصية Sentry.setUser() لتعرف فورياً أي عميل واجه المشكلة للتواصل معه ودعمه استباقياً.",
        "اضبط خاصية release لتطابق رقم التجزئة للـ commit (Git Commit SHA) لتحديد الإيداع المسبب بنقرة زر.",
        "عطّل Sentry أثناء التطوير المحلي لتجنب تسجيل أخطاء التجارب وإهدار الحصة السحابية."
      ],
      infographic: {
        title: "الخصائص الأساسية لتهيئة Sentry.init()",
        nodes: [
          { label: "DSN Key", desc: "رابط التوجيه الرقمي الخاص بمشروعك لاستقبال التقارير" },
          { label: "environment", desc: "تصنيف التقارير بحسب البيئة (production, staging, test)" },
          { label: "release", desc: "ربط الأخطاء برقم الإصدار وتاريخ نشر الكود بدقة" },
          { label: "tracesSampleRate", desc: "التحكم في نسبة عينات مراقبة الأداء وتوفير التكاليف" }
        ]
      }
    },
    {
      id: "29.1.c",
      title: "تسجيل أخطاء الواجهة والتفاعل برمجياً في Sentry",
      englishTerm: {
        term: "Manual Error Capturing & Breadcrumbs",
        pronunciation: "مانيوال إيرور كابتشرنج",
        meaning: "التقاط الاستثناءات داخل كتل try/catch وإرسالها يدوياً مع إضافة خطوات تتبع مخصصة"
      },
      description:
        "بالرغم من أن Sentry يلتقط الأخطاء غير المعالجة تلقائياً، إلا أن هناك العديد من الحالات التي تقوم فيها بمعالجة الخطأ برمجياً عبر try...catch أو فحص استجابات الـ API، ولكنك ترغب في تسجيل الحادثة في Sentry للمتابعة دون تعطيل واجهة المستخدم. توفر Sentry دالتين أساسيتين: 1) Sentry.captureException(error): لتسجيل كائن خطأ برمجياً مع كامل شجرة الاستدعاءات (Stack Trace). 2) Sentry.captureMessage(message, level): لتسجيل رسالة تنبيهية بنمط معين (warning أو info). كما تتيح دالة Sentry.addBreadcrumb() إضافة خطوات تتبع ذكية تشرح سياق ما كان يفعله المستخدم قبل وقوع الخطأ.",
      realWorldAnalogy:
        "يشبه إطلاق إنذار صامت في البنك؛ الصراف يتعامل بهدوء ولباقة مع الزبون المشبوه دون إثارة الرعب في الصالة، ولكنه يضغط بقدمه على زر الإنذار المخفي أسفل الطاولة لإرسال تقرير فوري لغرفة الأمن المركزية.",
      whyItMatters:
        "تتيح لك تسجيل المشاكل الصامتة (Silent Failures) كفشل مزامنة البيانات في الخلفية، مع الحفاظ على تجربة مستخدم سلسة وعرض رسائل بديلة ودودة للزائر.",
      syntax:
        "// تسجيل استثناء يدوي:\ntry {\n  processPayment();\n} catch (err) {\n  Sentry.captureException(err);\n}",
      codeExample: `// مثال بسيط: التقاط استثناء برمجي مخصص في معالج حدث
import React from 'react';
import * as Sentry from '@sentry/react';

function ExportDataButton({ reportData }) {
  const handleExport = () => {
    try {
      if (!reportData || reportData.length === 0) {
        throw new Error('فشل التصدير: لا توجد بيانات متاحة في التقرير');
      }
      // منطق تحويل البيانات وتنزيلها...
    } catch (error) {
      // 1. تسجيل الخطأ في Sentry يدوياً مع إرفاق سياق إضافي
      Sentry.captureException(error, {
        extra: {
          itemsCount: reportData?.length || 0,
          exportFormat: 'CSV'
        }
      });
      // 2. إظهار رسالة ودية للمستخدم دون انهيار الشاشة
      alert('عذراً، تعذر تصدير التقرير حالياً. تم إخطار فريق الهندسة للتحقيق.');
    }
  };

  return (
    <button onClick={handleExport} className="px-3 py-1.5 bg-slate-800 text-white rounded text-xs">
      📄 تصدير التقرير
    </button>
  );
}

export default ExportDataButton;`,
      advancedExample: `// مثال متقدم: إضافة مسار تتبع مخصص (Custom Breadcrumb) قبل إرسال طلبات الـ API الحساسة
import * as Sentry from '@sentry/react';

export async function processUserCheckout(cartItems, paymentMethod) {
  // 1. إضافة خطوة تتبع توضح نية المستخدم وسياق العملية
  Sentry.addBreadcrumb({
    category: 'checkout',
    message: \`بدء عملية الدفع لـ \${cartItems.length} عناصر عبر \${paymentMethod}\`,
    level: 'info',
    data: {
      totalItems: cartItems.length,
      method: paymentMethod
    }
  });

  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cartItems, method: paymentMethod })
    });

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(\`فشل السيرفر في معالجة الدفع: \${errorBody.message || response.statusText}\`);
    }

    return await response.json();
  } catch (error) {
    // تسجيل الخطأ مع توضيح مستوى الخطورة على أنه فادح (Fatal)
    Sentry.captureException(error, {
      level: 'fatal',
      tags: {
        feature: 'checkout-flow',
        paymentGateway: paymentMethod
      }
    });
    // إعادة رمي الخطأ ليتم التعامل معه في الواجهة
    throw error;
  }
}`,
      output:
        "ظهور تقرير دقيق في لوحة Sentry يشتمل على مسار الخطوات التمهيدية وبيانات العملية المشفرة مع تصنيف الخطورة على أنه Fatal.",
      commonMistakes: [
        {
          mistake: "التقاط الخطأ عبر try/catch وكتمه كلياً (Swallowing Errors) دون تسجيله في Sentry أو إشعار المستخدم.",
          fix: "إذا التقطت خطأً في try/catch وتريد تجنيب المستخدم الانهيار، سجله دائماً بـ Sentry.captureException لتتمكن من إصلاحه."
        },
        {
          mistake: "إرسال نصوص عادية إلى captureException بدلاً من كائن Error حقيقي، مما يحرمك من قراءة شجرة الاستدعاءات (Stack Trace).",
          fix: "استخدم Sentry.captureException(new Error('نص الخطأ')) أو استخدم Sentry.captureMessage() للنصوص العادية."
        }
      ],
      bestPractices: [
        "استخدم خاصية extra لتمرير بيانات توضيحية خالية من المعلومات الحساسة تساعد في تشخيص ملابسات الخطأ.",
        "استخدم Sentry.addBreadcrumb() لتوثيق محطات التنقل والقرارات المنطقية الكبرى في التطبيق.",
        "صنف الأخطاء المالية والأمنية بمستوى level: 'fatal' لتفعيل التنبيهات الفورية عبر الرسائل القصيرة والـ Webhooks."
      ],
      infographic: {
        title: "أنواع التسجيل البرمجي في منصة Sentry",
        nodes: [
          { label: "captureException", desc: "تسجيل كائن Error حقيقي مع كامل شجرة الاستدعاءات البرمجية Stack Trace" },
          { label: "captureMessage", desc: "تسجيل رسائل تحذيرية أو معلوماتية ذات أهمية تشغيلية دون انهيار الكود" },
          { label: "addBreadcrumb", desc: "إضافة فتات الخبز ومسار الإجراءات التمهيدية التي سبقت وقوع المشكلة" },
          { label: "Tags & Extra", desc: "إرفاق بيانات تصنيفية مخصصة لتسهيل الفلترة السريعة في لوحة التحكم" }
        ]
      }
    },
    {
      id: "29.1.d",
      title: "التعامل مع الوعود غير المعالجة Unhandled Promise Rejections",
      englishTerm: {
        term: "Unhandled Promise Rejections",
        pronunciation: "آن هاندلد بروميس ريجيكشنز",
        meaning: "الاستثناءات غير المتزامنة الناتجة عن فشل عمليات fetch أو async/await دون وجود كتلة catch"
      },
      description:
        "في تطبيقات React الحديثة، أكثر من 70% من العمليات المنطقية هي عمليات غير متزامنة (Asynchronous) مثل جلب البيانات من السيرفر، أو قراءة التخزين، أو استدعاءات الذكاء الاصطناعي. عندما يفشل وعد (Promise) مثل انقطاع الشبكة أثناء fetch() دون وجود دالة .catch() أو كتلة try/catch محيطة بـ await، يحدث ما يسمى بـ Unhandled Promise Rejection. في الماضي، كانت هذه الأخطاء تفلت بصمت داخل المتصفح دون أن يرصدها مستمع window.onerror العادي! لحل هذه المعضلة، يوفر المتصفح حدثاً مخصصاً يسمى onunhandledrejection لالتقاط هذه الأخطاء العائمة وتسجيلها فورياً.",
      realWorldAnalogy:
        "يشبه إرسال طرد بالبريد السريع دون كتابة عنوان المرسل؛ إذا تعذر تسليم الطرد للعنوان المطلوب، فإن ساعي البريد لن يجد مكاناً لإعادته، فيظل الطرد تائهاً في المستودع في صمت مريب ما لم تكن هناك غرفة خاصة للمفقودات (Unhandled Rejection Listener) تفحص وتوثق كافة الطرود التائهة.",
      whyItMatters:
        "يضمن عدم إفلات أخطاء انقطاع الاتصال وفشل استدعاءات الـ API الصامتة، مما يمنع تجمد أزرار التطبيق ودوائر التحميل المعلقة (Endless Spinners).",
      syntax:
        "// الاستماع للوعود المرفوضة غير المعالجة عالمياً:\nwindow.addEventListener('unhandledrejection', (event) => {\n  console.error('وعد مرفوض غير معالج:', event.reason);\n});",
      codeExample: `// مثال بسيط: رصد الوعود المرفوضة في مستمع أحداث المتصفح
import React, { useEffect } from 'react';

function UnhandledRejectionCatcher() {
  useEffect(() => {
    const handleRejection = (event) => {
      // منع ظهور الخطأ الافتراضي في وحدة تحكم المتصفح إن رغبت
      // event.preventDefault();

      console.warn('⚠️ تم رصد وعد غير متزامن فاشل بدون معالجة (Unhandled Promise):');
      console.log('سبب الرفض (Reason):', event.reason);

      // إرسال تقرير الخطأ إلى خادم المراقبة
    };

    window.addEventListener('unhandledrejection', handleRejection);
    return () => window.removeEventListener('unhandledrejection', handleRejection);
  }, []);

  return null;
}

export default UnhandledRejectionCatcher;`,
      advancedExample: `// مثال متقدم: نظام متكامل لترويض وفلترة الوعود الفاشلة وإرسالها لـ Sentry مع كشف أخطاء الشبكة
import * as Sentry from '@sentry/react';

export function setupUnhandledRejectionHandler() {
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;

    // 1. فحص ما إذا كان الخطأ مجرد إلغاء يدوي لطلب الشبكة عبر AbortController
    if (reason?.name === 'AbortError') {
      console.log('تم إلغاء الطلب الشبكي عمداً بواسطة المستخدم، تجاهل التقرير.');
      return;
    }

    // 2. فحص ما إذا كان الخطأ انقطاعاً في شبكة الإنترنت للمستخدم
    const isNetworkError = !navigator.onLine || reason?.message?.includes('Failed to fetch');

    // 3. إرسال الاستثناء لـ Sentry مع وسم دقيق لنوع الفشل
    Sentry.captureException(reason || new Error('Unhandled Promise Rejection'), {
      tags: {
        errorType: 'unhandled_promise_rejection',
        isNetworkError: String(isNetworkError)
      },
      extra: {
        promiseDetails: String(event.promise)
      }
    });

    console.error('🚨 تم توثيق رفض الوعد غير المتزامن بنجاح في Sentry.');
  });
}`,
      output:
        "رصد شامل لكافة العمليات غير المتزامنة الفاشلة، وتوثيقها في Sentry مع التمييز الذكي بين انقطاع الإنترنت الحقيقي والأخطاء البرمجية الداخلية.",
      commonMistakes: [
        {
          mistake: "نسيان استخدام await أمام دوال الـ Promises غير المتزامنة داخل معالجات الأحداث مما يجعل الخطأ يهرب خارج نطاق try/catch.",
          fix: "التأكد دائماً من إضافة await أمام كل وعد داخل دالة async ليتم التقاط الاستثناء بنجاح داخل كتلة catch المحلية."
        },
        {
          mistake: "تسجيل أخطاء AbortError الناتجة عن إلغاء المستخدم للطلبات السابقة في Sentry كأخطاء برمجية حرجة.",
          fix: "استثناء أخطاء AbortError صراحة في فلاتر Sentry لأنها سلوك مقصود وطبيعي لتوفير الباندويث."
        }
      ],
      bestPractices: [
        "استخدم مكتبات جلب بيانات حديثة مثل TanStack Query لأنها تدير دورة حياة الوعود والأخطاء تلقائياً دون أي إفلات صامت.",
        "احرص دائماً على إضافة .catch() عند كتابة سلاسل الوعود التقليدية Promise Chains.",
        "استخدم event.reason لمعرفة الكائن الدقيق الذي تم تمريره مع أمر reject() أو الاستثناء المرمي."
      ],
      infographic: {
        title: "مسار اعتراض الوعود غير المعالجة (Promise Rejection)",
        nodes: [
          { label: "1. فشل الوعد (Promise Reject)", desc: "عملية async تفشل دون وجود كتلة catch تحميها" },
          { label: "2. انطلاق unhandledrejection", desc: "المتصفح يطلق الحدث العام على مستوى نافذة window" },
          { label: "3. الفرز والتحليل", desc: "استبعاد أخطاء الإلغاء العمدية AbortError ورصد أخطاء الشبكة" },
          { label: "4. التوثيق في Sentry", desc: "تسجيل سبب الرفض وشجرة الاستدعاءات لحماية النظام من التجمد" }
        ]
      }
    },
    {
      id: "29.1.e",
      title: "دمج حدود الأخطاء Error Boundaries مع منصات المراقبة",
      englishTerm: {
        term: "Sentry Error Boundaries Integration",
        pronunciation: "سنتري إيرور باوندريز إنتجريشن",
        meaning: "تغليف شجرة مكونات React بحدود أخطاء ذكية تعزل الانهيار وترسله لمنصة المراقبة مع توفير زر إعادة المحاولة"
      },
      description:
        "حدود الأخطاء (Error Boundaries) في React هي الجدار العازل الذي يمنع انهيار كامل شجرة التطبيق عند تعطل مكون فرعي واحد (مثل تعطل بطاقة تعليق واحدة داخل صفحة تحوي 50 تعليقاً). دمج حدود الأخطاء مع منصة مراقبة مثل Sentry (عبر مكون Sentry.ErrorBoundary) يوفر حلاً متكاملاً فائق القوة: 1) التقاط الخطأ فور حدوثه في مرحلة الرندر. 2) إرساله فورياً إلى خوادم Sentry مع لقطة لشجرة المكونات (Component Stack). 3) عرض واجهة بديلة ودودة للمستخدم (Fallback UI). 4) توفير زر إعادة محاولة ذكي (Reset Button) يعيد تركيب المكون المتعطل بعد تنظيف حالته المعطوبة.",
      realWorldAnalogy:
        "تشبه أبواب الأمان المقاومة للحرائق في ناطحات السحاب؛ إذا اشتعل حريق في غرفة واحدة بالطابق الرابع، تغلق أبواب العزل الفولاذية تلقائياً لعزل الحريق في تلك الغرفة حصراً، وإرسال إشعار فوري لسيارات الإطفاء، بينما يواصل كافة الموظفين في باقي الطوابق عملهم بسلام وأمان تام.",
      whyItMatters:
        "يقضي نهائياً على ظاهرة 'الشاشة البيضاء القاتلة' (White Screen of Death) التي تصيب التطبيق عند حدوث خطأ بسيط في رندر أحد الأبناء، ويضمن استمرارية تجربة الزائر.",
      syntax:
        "// استخدام مكون Sentry المدمج:\n<Sentry.ErrorBoundary fallback={<ErrorFallback />} showDialog>\n  <MyComponent />\n</Sentry.ErrorBoundary>",
      codeExample: `// مثال بسيط: استخدام Sentry.ErrorBoundary المدمج لتغليف مسار معين
import React from 'react';
import * as Sentry from '@sentry/react';

// مكون الواجهة البديلة الأنيقة التي تظهر عند الانهيار
function FallbackComponent({ error, resetError }) {
  return (
    <div className="p-6 bg-slate-900 border border-rose-500/40 rounded-2xl text-center space-y-3 font-sans">
      <div className="text-3xl">💥</div>
      <h3 className="font-bold text-white text-sm">عذراً، حدث خطأ غير متوقع في هذا الجزء!</h3>
      <p className="text-xs text-slate-400 font-mono">{error?.message || 'خطأ غير معروف'}</p>
      <button
        onClick={resetError}
        className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold transition shadow"
      >
        إعادة المحاولة 🔄
      </button>
    </div>
  );
}

export function ProtectedFeatureView({ children }) {
  return (
    <Sentry.ErrorBoundary
      fallback={FallbackComponent}
      beforeCapture={(scope) => {
        scope.setTag('section', 'protected-feature');
      }}
    >
      {children}
    </Sentry.ErrorBoundary>
  );
}`,
      advancedExample: `// مثال متقدم: حدود أخطاء مخصصة متطورة تجمع بين تتبع Sentry وجمع آراء المستخدمين (User Feedback Dialog)
import React, { Component } from 'react';
import * as Sentry from '@sentry/react';

export class EnterpriseErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, eventId: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // التقاط الخطأ وإرساله مع شجرة المكونات إلى Sentry
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  handleOpenFeedback = () => {
    // فتح نافذة جمع آراء وتقارير المستخدمين المدمجة في Sentry
    if (this.state.eventId) {
      Sentry.showReportDialog({ eventId: this.state.eventId });
    }
  };

  handleReset = () => {
    this.setState({ hasError: false, eventId: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-slate-950 border border-slate-800 rounded-3xl text-center space-y-4 max-w-md mx-auto text-slate-100 font-sans">
          <div className="w-14 h-14 bg-rose-500/10 text-rose-400 rounded-2xl flex items-center justify-center text-2xl mx-auto">
            🛡️
          </div>
          <h3 className="font-bold text-white text-base">حدث خلل وتم احتواؤه بأمان</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            تم تسجيل الحادثة بنجاح لدى فريق الدعم الفني. يمكنك إعادة المحاولة أو إرسال ملاحظاتك لمساعدتنا في الحل.
          </p>

          <div className="flex justify-center gap-2 pt-2">
            <button
              onClick={this.handleReset}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow"
            >
              إعادة التحميل
            </button>
            <button
              onClick={this.handleOpenFeedback}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-medium transition"
            >
              إبلاغ عن المشكلة 📝
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}`,
      output:
        "عزل ذكي للأخطاء يمنع انهيار الصفحة بالكامل، مع إرسال تقرير مفصل لـ Sentry وفتح نافذة حوار للمستخدم للمشاركة في توضيح المشكلة.",
      commonMistakes: [
        {
          mistake: "وضع Error Boundary واحد فقط في جذر التطبيق (App Root) مما يجعل أي خطأ صغير في الفوتر يخفي كامل الموقع بشاشة الخطأ.",
          fix: "توزيع حدود الأخطاء بحكمة (Granular Boundaries) حول الأقسام المستقلة (مثل القائمة الجانبية، والرسوم البيانية، والمحتوى الرئيسي) ليعزل كل جزء مشاكله بمفرده."
        },
        {
          mistake: "الاعتقاد بأن Error Boundary تلتقط أخطاء معالجات الأحداث (onClick) أو أخطاء العمليات غير المتزامنة (setTimeout / fetch).",
          fix: "حدود الأخطاء تلتقط فقط أخطاء مرحلة التصيير (Rendering) ودورة حياة المكونات، بينما تتطلب الأحداث try/catch عادية."
        }
      ],
      bestPractices: [
        "استغل خاصية Sentry.showReportDialog({ eventId }) لجمع شهادات واقتراحات العملاء عند حدوث انهيار غير متوقع.",
        "وفر دائماً زر resetError لتنظيف الحالة وتمكين المستخدم من استعادة الواجهة دون الحاجة لإعادة تحميل الصفحة بالكامل.",
        "سجل اسم المكون المنهار في سياق Sentry عبر scope.setTag('failed_component', componentName) لتسهيل الفرز."
      ],
      infographic: {
        title: "استراتيجية توزيع حدود الأخطاء (Granular Error Boundaries)",
        nodes: [
          { label: "شجرة التطبيق الكاملة", desc: "تحتوي على شريط التنقل، والمحتوى الرئيسي، والتعليقات، والإعلانات" },
          { label: "انهيار قسم التعليقات 💥", desc: "حدود أخطاء التعليقات تعزل الخطأ فوراً وترسله إلى Sentry" },
          { label: "عرض Fallback بديل", desc: "يظهر زر 'إعادة تحميل التعليقات' في مربع التعليقات حصراً" },
          { label: "باقي الموقع يعمل 100% ✅", desc: "يواصل المستخدم تصفح المقال وشراء المنتجات دون أي مقاطعة!" }
        ]
      }
    },
    {
      id: "29.1.f",
      title: "إعداد خرائط المصدر Source Maps لفك تعمية الأخطاء في Sentry",
      englishTerm: {
        term: "Sentry Source Maps Integration",
        pronunciation: "سنتري سورس مابس إنتجريشن",
        meaning: "رفع ملفات الترجمة البرمجية سراً إلى Sentry لترجمة الكود المضغوط للأسطر الأصلية في TypeScript/JSX"
      },
      description:
        "بدون ربط خرائط المصدر (Source Maps) مع منصة Sentry، سيكون تقرير الخطأ شبه عديم الفائدة؛ حيث سيخبرك Sentry: 'حدث خطأ في الملف dist/assets/index-BrdVhbPP.js عند السطر 1 والعمود 42100' لأن الكود مضغوط ومعمى! عند إعداد إضافة Sentry الرسمية (مثل @sentry/vite-plugin)، يقوم محرك البناء برفع ملفات .map سراً إلى خوادم Sentry أثناء الـ CI/CD، ثم يقوم بحذفها من مجلد dist لمنع تسربها للجمهور. والنتيجة: عند وقوع أي حادث، يقوم Sentry بترجمة الخطأ فورياً ليعرض لك سطر الكود الأصلي المكتوب بخط يدك (مثل: UserProfile.tsx:45) مع تظليل المتغيرات والأسطر المحيطة بدقة مذهلة.",
      realWorldAnalogy:
        "يشبه إرسال رسالة مشفرة إلى المخابرات؛ الجمهور في الشارع يرى نصاً عشوائياً غير مفهوم، بينما يمتلك ضابط المخابرات في الغرفة المغلقة مفتاح فك التشفير الخاص الذي يعيد تحويل النص المشفر إلى تقرير واضح باللغة العربية الفصحى مع تحديد اسم كاتب الرسالة وساعتها بدقة.",
      whyItMatters:
        "يختصر زمن التحقيق في الأخطاء وإصلاحها من ساعات طويلة من التخمين والبحث في الكود المضغوط إلى ثوانٍ معدودة برؤية السطر الأصلي مباشرة.",
      syntax:
        "# تثبيت إضافة Sentry لـ Vite:\nnpm install --save-dev @sentry/vite-plugin\n\n# توليد خرائط المصدر كـ hidden في vite.config.js:\nbuild: { sourcemap: 'hidden' }",
      codeExample: `// مثال عملي: تكوين @sentry/vite-plugin في vite.config.js لرفع الخرائط سراً وحذفها
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    // تفعيل إضافة Sentry لرفع الخرائط تلقائياً أثناء البناء
    sentryVitePlugin({
      org: 'my-tech-academy',
      project: 'react-production-app',
      // قراءة توكن المصادقة من متغيرات البيئة السرية في خادم الـ CI
      authToken: process.env.SENTRY_AUTH_TOKEN,
      release: {
        name: process.env.VITE_APP_VERSION || '1.0.0'
      },
      sourcemaps: {
        // حذف ملفات .map من مجلد dist بعد اكتمال رفعها لـ Sentry بنجاح لمنع تسربها للعامة!
        filesToDeleteAfterUpload: ['dist/**/*.map']
      }
    })
  ],
  build: {
    // توليد ملفات الخرائط ولكن دون وضع رابط لها في أسفل ملفات الجافاسكريبت
    sourcemap: 'hidden'
  }
});`,
      advancedExample: `// مثال متقدم: مقارنة مظهر تقرير الخطأ في Sentry قبل وبعد ربط Source Maps
/*
=================================================================================
❌ تقرير الخطأ بدون Source Maps (مبهم ومجهد جداً):
---------------------------------------------------------------------------------
Error: Cannot read properties of undefined (reading 'avatar')
  at t.render (https://myapp.com/assets/index-D7x9L2.js:1:38421)
  at ya (https://myapp.com/assets/vendor-react-B4k1.js:2:1204)
  at Sa (https://myapp.com/assets/vendor-react-B4k1.js:2:3890)
---------------------------------------------------------------------------------
(يستحيل معرفة أي مكون تسبب في المشكلة أو أي سطر أصلي تم كسره!)
=================================================================================

✅ تقرير الخطأ مع Source Maps المربوطة سراً (واضح ومباشر 100%):
---------------------------------------------------------------------------------
Error: Cannot read properties of undefined (reading 'avatar')
  File: src/components/UserProfileCard.tsx (Line 42)
  
  40 | export function UserProfileCard({ user }) {
  41 |   return (
> 42 |     <img src={user.profile.avatar} alt={user.name} />
  43 |   );
  44 | }
---------------------------------------------------------------------------------
(الخلل واضح فوراً: الكائن user.profile غير موجود ويحتاج Optional Chaining ?.)
=================================================================================
*/`,
      output:
        "تحويل شاشات الأخطاء المبهمة إلى تقارير برمجية أنيقة تعرض السطر الأصلي المكتوب في ملفات TypeScript/JSX بدقة بالغة.",
      commonMistakes: [
        {
          mistake: "نسيان تمرير SENTRY_AUTH_TOKEN في أسرار الـ CI مما يؤدي لفشل رفع خرائط المصدر وبقاء الأخطاء مبهمة.",
          fix: "توليد Auth Token من إعدادات حساب Sentry وإضافته كسر في GitHub Secrets باسم SENTRY_AUTH_TOKEN."
        },
        {
          mistake: "ترك ملفات .map في مجلد dist/ بعد الرفع وتوزيعها علناً على خوادم الإنتاج.",
          fix: "تفعيل خيار filesToDeleteAfterUpload: ['dist/**/*.map'] لحذف الخرائط فور رفعها لسحابة Sentry المحمية."
        }
      ],
      bestPractices: [
        "احرص على تطابق قيمة release بين Sentry.init() في الكود وإعدادات sentryVitePlugin في ملف التكوين بدقة.",
        "استخدم sourcemap: 'hidden' لضمان عدم توليد تعليق //# sourceMappingURL في أسفل ملفات الإنتاج.",
        "تحقق من نجاح رفع الخرائط عبر فحص تبويب Settings -> Source Maps في لوحة تحكم مشروعك بـ Sentry."
      ],
      infographic: {
        title: "مسار فك تعمية الأخطاء عبر Sentry Source Maps",
        nodes: [
          { label: "1. البناء للإنتاج", desc: "توليد ملفات .map مع حزمة الجافاسكريبت المعماة" },
          { label: "2. رفع سري لـ Sentry", desc: "إضافة Sentry ترفع الخرائط لسيرفر Sentry المشفر" },
          { label: "3. حذف الخرائط محلياً", desc: "مسح ملفات .map من مجلد dist قبل النشر العام لحماية الكود" },
          { label: "4. فك التعمية اللحظي 🎯", desc: "عند وقوع خطأ، Sentry يطابق الحادثة مع الخريطة ويعرض السطر الأصلي" }
        ]
      }
    },
    {
      id: "29.1.g",
      title: "إخفاء البيانات الحساسة وتطهير التقارير Data Scrubbing",
      englishTerm: {
        term: "Data Scrubbing & PII Protection",
        pronunciation: "داتا سكرابينج آند بي آي آي بروتكشن",
        meaning: "تطهير وحجب أرقام البطاقات الائتمانية وكلمات المرور والبيانات الشخصية من تقارير الأخطاء للامتثال للخصوصية"
      },
      description:
        "الأمان والامتثال لقوانين حماية الخصوصية (مثل GDPR وHIPAA) يفرضان التزاماً صارماً: لا يجوز إرسال أي بيانات شخصية محددة للهوية (Personally Identifiable Information - PII) أو بيانات مالية أو أمنية إلى منصات المراقبة الخارجية. إذا كان المستخدم يكتب كلمة مروره أو رقم بطاقته في نموذج، وحدث خطأ برمجي، فقد تقوم أداة المراقبة بتسجيل نص النموذج بالكامل وإرساله في تقرير الخطأ إذا لم تكن محصنة! تتيح لك دالة beforeSend في Sentry فحص وتطهير (Data Scrubbing) كل تقرير خطأ قبل خروجه من المتصفح، واستبدال كلمات المرور والتوكنات وأرقام الهواتف بنجوم أو نصوص محجوبة ([REDACTED]).",
      realWorldAnalogy:
        "يشبه قلم الحبر الأسود العريض الذي يستخدمه جهاز الرقابة الحكومي لتظليل الأسماء السرية والأرقام الحساسة في الوثائق الاستخباراتية قبل الإفراج عنها ونشرها في الأرشيف العام، حتى لا تتسرب أسرار المواطنين الحساسة للعامة.",
      whyItMatters:
        "يحمي شركتك من الغرامات القانونية المليونية المترتبة على انتهاك قوانين الخصوصية العالمية، ويحمي بيانات عملائك المصرفية من التسرب خارج قواعد بياناتك الآمنة.",
      syntax:
        "// تطهير التقرير عبر خطاف beforeSend في Sentry.init:\nbeforeSend(event, hint) {\n  // فحص وتعديل محتوى الحدث قبل الإرسال\n  return sanitizeEvent(event);\n}",
      codeExample: `// مثال عملي: تكوين دالة beforeSend لحجب التوكنات وكلمات المرور من تقارير Sentry
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  // خطاف الفحص والتطهير قبل خروج أي تقرير للسحابة
  beforeSend(event, hint) {
    // 1. فحص رسالة الخطأ وحجب أي توكن Bearer محتمل
    if (event.message) {
      event.message = event.message.replace(/Bearer\\s+[A-Za-z0-9-_=.]+/gi, 'Bearer [REDACTED_TOKEN]');
    }

    // 2. تطهير البيانات الإضافية وحذف حقول كلمات المرور والبطاقات
    if (event.extra) {
      const sensitiveKeys = ['password', 'token', 'creditCard', 'cvv', 'secret'];
      for (const key of Object.keys(event.extra)) {
        if (sensitiveKeys.some(s => key.toLowerCase().includes(s))) {
          event.extra[key] = '[REDACTED_BY_SECURITY_POLICY]';
        }
      }
    }

    // إرجاع الحدث بعد تطهيره بالكامل
    return event;
  }
});`,
      advancedExample: `// مثال متقدم: نظام تطهير شامل لحجب أرقام البطاقات الائتمانية والبريد الإلكتروني باستخدام التعبيرات النمطية
function scrubSensitiveData(event) {
  // التعبير النمطي لأرقام البطاقات الائتمانية (16 رقماً بصيغ مختلفة)
  const creditCardRegex = /\\b(?:\\d[ -]*?){13,16}\\b/g;
  // التعبير النمطي للبريد الإلكتروني
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g;

  // تحويل كائن الحدث لنص لتطهيره بالكامل دفعة واحدة
  let eventString = JSON.stringify(event);

  // استبدال كافة البطاقات بنص محجوب
  eventString = eventString.replace(creditCardRegex, '💳 [CARD_NUMBER_REDACTED]');
  
  // استبدال الإيميلات مع الحفاظ على النطاق فقط للتصنيف
  eventString = eventString.replace(emailRegex, 'user@[DOMAIN_REDACTED]');

  return JSON.parse(eventString);
}

// دمج التطهير الشامل في Sentry:
// Sentry.init({ beforeSend: (event) => scrubSensitiveData(event) });`,
      output:
        "حماية تامة للخصوصية؛ حيث تصل تقارير الأخطاء إلى Sentry مطهرة تماماً من أي بيانات بنكية أو شخصية للمستخدمين.",
      commonMistakes: [
        {
          mistake: "إرسال كامل كائن استجابة الـ API في خاصية extra دون الانتباه إلى احتوائه على أرقام هواتف وعناوين المستخدمين الشخصية.",
          fix: "انتقاء الخصائص البرمجية غير الحساسة فقط (مثل error.code أو status) واستبعاد بيانات المستخدمين."
        },
        {
          mistake: "الاعتماد فقط على التطهير في السيرفر وتجاهل التطهير في متصفح العميل (Client-Side Scrubbing).",
          fix: "تطهير البيانات في دالة beforeSend داخل متصفح العميل أولاً قبل أن تغادر حزمة الشبكة جهاز المستخدم."
        }
      ],
      bestPractices: [
        "فعّل ميزة 'Data Scrubber' التلقائية المدمجة في لوحة إعدادات مشروعك على منصة Sentry السحابية كخط دفاع إضافي.",
        "أضف أسماء الحقول الحساسة (مثل national_id, iban, ssn) إلى قائمة الكلمات المحظورة التلقائية.",
        "درب فريقك على مراجعة عينات من تقارير Sentry شهرياً للتأكد من خلوها المطلق من أي تسريبات للمعلومات الشخصية."
      ],
      infographic: {
        title: "خطوات تطهير البيانات وحماية الخصوصية (Data Scrubbing)",
        nodes: [
          { label: "1. رصد الخطأ بالمتصفح", desc: "الخطأ قد يحتوي على نصوص مدخلات النموذج وبيانات الـ API" },
          { label: "2. فلتر beforeSend", desc: "فحص الحدث وتطبيق تعبيرات البحث عن البطاقات وكلمات المرور" },
          { label: "3. الاستبدال بـ [REDACTED]", desc: "حجب كافة المعلومات الحساسة والشخصية فورياً" },
          { label: "4. إرسال تقرير نظيف ✅", desc: "وصول تقرير هندسي آمن متوافق 100% مع معايير GDPR وHIPAA" }
        ]
      }
    },
    {
      id: "29.1.h",
      title: "تصنيف الأخطاء حسب الأولوية وإدارة التنبيهات الذكية",
      englishTerm: {
        term: "Error Severity & Alerting Rules",
        pronunciation: "إيرور سيفيريتي آند أليرتنج رولز",
        meaning: "فرز وتصنيف الأعطال حسب خطورتها وتكوين قواعد تنبيه ترسل الإشعارات للحالات الطارئة فقط"
      },
      description:
        "إذا تلقى فريق التطوير إشعاراً على الهاتف مع كل خطأ تافه في المتصفح، سيصاب الجميع بظاهرة 'إرهاق التنبيهات' (Alert Fatigue)، وسيقوم المطورون بتعطيل الإشعارات، مما يؤدي إلى تفويت الكوارث الحقيقية! لإدارة المراقبة بنجاح، يجب تصنيف الأخطاء وفق مستويات خطورة واضحة: 1) Fatal: عطل يمنع إتمام عملية الشراء أو تسجيل الدخول (يتطلب إيقاظ المناوب فوراً عبر PagerDuty أو اتصال هاتفي). 2) Error: خطأ يؤثر على ميزة فرعية ولكن التطبيق مستمر (إشعار في قناة Slack العامة). 3) Warning: تحذير في الأداء أو بطء شبكة (تذكرة في GitHub Issue لمراجعتها في السبرنت القادم). 4) Info: مجرد معلومة تشغيلية. وتتيح لك قواعد Sentry Alert Rules إرسال التنبيهات فقط إذا تكرر الخطأ أكثر من 50 مرة خلال 5 دقائق أو تأثر به أكثر من 10 مستخدمين في نفس اللحظة.",
      realWorldAnalogy:
        "يشبه طوارئ المستشفى وفرز الحالات (Triage)؛ الشخص الذي يعاني من أزمة قلبية حادة يدخل غرفة العمليات في التو واللحظة (Fatal)، بينما الشخص الذي يعاني من صداع خفيف أو خدش في إصبعه ينتظر دوره في العيادة الخارجية بهدوء (Warning/Info).",
      whyItMatters:
        "يحافظ على تركيز وراحة أعضاء الفريق، ويضمن استجابة فورية وحاسمة للأعطال الكبرى التي تهدد إيرادات وسمعة المنصة.",
      syntax:
        "# مستويات الخطورة المعتمدة في Sentry:\nSentry.captureMessage('رسالة تحذيرية', 'warning');\nSentry.captureException(err, { level: 'fatal' });",
      codeExample: `// مثال بسيط: تصنيف خطورة الأخطاء برمجياً في تطبيق React
import * as Sentry from '@sentry/react';

// دالة لمعالجة أخطاء النظام وفق سياق الميزة
export function handleApplicationError(error, context) {
  let severity = 'error';

  // إذا كان الخطأ في مسار الدفع المالي نعتبره قاتلاً فادحاً
  if (context === 'checkout' || context === 'auth') {
    severity = 'fatal';
  } else if (context === 'analytics' || context === 'social-share') {
    // إذا كان في التحليلات أو المشاركة نعتبره مجرد تحذير لا يعطل العمل
    severity = 'warning';
  }

  // إرسال الخطأ مع تحديد مستوى الخطورة الصريح
  Sentry.captureException(error, {
    level: severity,
    tags: { businessImpact: severity === 'fatal' ? 'critical' : 'minor' }
  });
}`,
      advancedExample: `// مثال متقدم: تكوين قواعد بصمات تجميع الأخطاء المخصصة (Fingerprinting) في Sentry
// في كثير من الأحيان، يقوم Sentry بإنشاء 100 تذكرة منفصلة لنفس المشكلة بسبب اختلاف تفاصيل طفيفة!
// باستخدام خاصية Fingerprinting، يمكنك إجبار Sentry على تجميعها في تذكرة واحدة موحدة:

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  beforeSend(event, hint) {
    const error = hint.originalException;

    // إذا كان الخطأ فشلاً في خادم قاعدة البيانات بالرمز 503
    if (error?.message?.includes('Database Unavailable')) {
      // إجبار Sentry على تجميع كافة هذه الأخطاء تحت بصمة واحدة مشتركة
      event.fingerprint = ['database-unavailable-503'];
      event.level = 'fatal';
    }

    // إذا كان الخطأ خاصاً بانتهاء صلاحية توكن المصادقة
    if (error?.status === 401 || error?.message?.includes('Token expired')) {
      event.fingerprint = ['user-auth-session-expired'];
      event.level = 'info'; // ليس خطأ برمجياً بل حالة طبيعية
    }

    return event;
  }
});`,
      output:
        "تنظيم استثنائي للوحة متابعة الأخطاء؛ حيث تُجمع مئات الحوادث المتكررة في تذاكر موحدة مع إطلاق التنبيهات الهاتفية فقط عند وقوع كوارث حقيقية تؤثر على الأعمال.",
      commonMistakes: [
        {
          mistake: "ربط كل خطأ برمجي بإشعار فوري على الهواتف مما يؤدي لإزعاج الفريق طوال الليل بأخطاء ناتجة عن انقطاع شبكة هاتف الزائر.",
          fix: "ضبط عتبات التنبيه في Sentry (مثلاً: إرسال تنبيه فقط إذا تجاوز عدد المتأثرين 10 مستخدمين خلال 5 دقائق)."
        },
        {
          mistake: "ترك كافة الأخطاء بالمستوى الافتراضي 'error' دون تمييز الأعطال المالية والحرجة.",
          fix: "تصنيف الأخطاء الحساسة بمستوى 'fatal' وتخصيص قنوات إشعار عاجلة لها."
        }
      ],
      bestPractices: [
        "استخدم خاصية Fingerprinting لتجميع أخطاء الـ API المتطابقة في بطاقة واحدة بدلاً من تلويث لوحة التحكم.",
        "راجع الأخطاء المفتوحة في بداية كل سبرنت وصنفها: (إصلاح فوري، تأجيل، أو تجاهل إذا كان خطأ نادراً من متصفح غير مدعوم).",
        "استخدم ميزة 'Ignore / Resolve in Next Release' في Sentry لإخفاء الأخطاء التي تم إصلاحها في كود التطوير حتى يتم نشر التحديث."
      ],
      infographic: {
        title: "هرم مستويات خطورة الأخطاء وإدارتها (Error Triage)",
        nodes: [
          { label: "1. Fatal (حرج وقاتل)", desc: "تعطل الدفع والمصادقة ➔ إيقاظ المهندس المناوب فوراً عبر اتصال طارئ 🚨" },
          { label: "2. Error (خطأ مؤثر)", desc: "فشل ميزة فرعية ➔ إرسال تنبيه لقناة Slack للحل خلال يوم العمل" },
          { label: "3. Warning (تحذير)", desc: "بطء أو استجابة غير مثالية ➔ تسجيل تذكرة في GitHub للمراجعة في السبرنت" },
          { label: "4. Info (معلومة)", desc: "سجلات تشغيلية ومسارات تتبع لا تتطلب أي تدخل برمجي" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-29-1-1",
      question: "لماذا تظهر أخطاء الإنتاج في Sentry على شكل 'at a.js:1:3800' إذا لم تكن خرائط المصدر (Source Maps) مربوطة؟",
      options: [
        "لأن منصة Sentry لا تدعم لغة React.",
        "لأن الكود في الإنتاج تم ضغطه وتعتيمه واختصار أسمائه لتقليص الحجم؛ وخرائط المصدر هي القاموس المترجم للأسطر الأصلية.",
        "لأن حاسوب المستخدم مصاب بفيروس إلكتروني.",
        "لأن المتصفح يمنع تشغيل جافاسكريبت."
      ],
      correctAnswer: 1,
      explanation:
        "كود الإنتاج يخضع لعملية Minification لتقليص حجمه؛ وبدون رفع خرائط المصدر (.map) لـ Sentry، سيعجز النظام عن ترجمة الإحداثيات المضغوطة إلى أسطر كود TypeScript/JSX الأصلية."
    },
    {
      id: "quiz-29-1-2",
      question: "ما الدور الذي تقوم به دالة 'beforeSend' في تكوين Sentry؟",
      options: [
        "إيقاف تشغيل الإنترنت في المتصفح.",
        "فحص وتطهير وتعديل تقرير الخطأ قبل خروجه من المتصفح لحجب كلمات المرور وأرقام البطاقات المصرفية امتثالاً للخصوصية.",
        "حذف كافة ملفات المشروع من السيرفر.",
        "إعادة تشغيل حاسوب المطور تلقائياً."
      ],
      correctAnswer: 1,
      explanation:
        "خطاف beforeSend يعمل كفلتر أمني محلي يفحص كل حدث قبل إرساله إلى Sentry، مما يتيح لك حجب البيانات الحساسة والشخصية (PII) أو إلغاء إرسال الأحداث التافهة."
    },
    {
      id: "quiz-29-1-3",
      question: "ما الفائدة المعمارية لدمج حد الأخطاء (Sentry.ErrorBoundary) حول مكون معين في واجهة React؟",
      options: [
        "عزل الخطأ في ذلك المكون ومنع انهيار كامل الصفحة بشاشة بيضاء، مع إرسال تقرير مفصل لـ Sentry وعرض واجهة بديلة ودودة.",
        "تسريع كارت الشاشة بنسبة 20%.",
        "تلوين أزرار التطبيق باللون الأحمر تلقائياً.",
        "حظر المستخدم من كتابة أي تعليق."
      ],
      correctAnswer: 0,
      explanation:
        "تقوم Error Boundary باحتواء الخطأ في مكانه المحلي وعرض Fallback UI أنيق وزر إعادة محاولة، مع التقاط الاستثناء وإرساله إلى Sentry في الخلفية، مما يحمي باقي شاشة التطبيق من الانهيار."
    }
  ],
  exercise: {
    id: "exercise-29-1",
    title: "تكوين نظام متكامل لمراقبة الأخطاء في React مع تطهير البيانات وحدود الأخطاء",
    description:
      "1) اكتب كود تهيئة Sentry داخل 'src/monitoring.js' مع تفعيل beforeSend لحجب كلمات المرور والتوكنات.\n2) قم بإنشاء مكون غلاف باسم 'MonitoredFeature' يدمج Sentry.ErrorBoundary مع واجهة بديلة ودودة وزر لإعادة المحاولة.",
    hints: [
      "استخدم Sentry.init مع beforeSend لفحص event.message وevent.extra.",
      "استخدم Sentry.ErrorBoundary مع خاصية fallback أو تمرير دالة تقبل { error, resetError }.",
      "تأكد من عدم كتم الأخطاء بل تطهيرها وإرسالها بنظافة."
    ],
    solution: `// 1. ملف src/monitoring.js:
import * as Sentry from '@sentry/react';

export function initMonitoring() {
  if (import.meta.env.PROD) {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      environment: import.meta.env.MODE,
      release: 'my-app@' + (import.meta.env.VITE_APP_VERSION || '1.0.0'),
      tracesSampleRate: 0.1,
      // تطهير البيانات الحساسة قبل الإرسال
      beforeSend(event) {
        if (event.extra) {
          const sensitiveFields = ['password', 'token', 'cvv', 'card'];
          for (const key of Object.keys(event.extra)) {
            if (sensitiveFields.some(s => key.toLowerCase().includes(s))) {
              event.extra[key] = '[REDACTED_SECURITY]';
            }
          }
        }
        return event;
      }
    });
  }
}

// 2. مكون الغلاف المحمي: src/components/MonitoredFeature.jsx
import React from 'react';
import * as Sentry from '@sentry/react';

function ErrorFallbackView({ error, resetError }) {
  return (
    <div className="p-6 bg-slate-900 border border-rose-500/50 rounded-2xl text-center space-y-3 font-sans">
      <div className="text-3xl">⚠️</div>
      <h4 className="font-bold text-white text-sm">عذراً، حدث خطأ في تحميل هذا الجزء</h4>
      <p className="text-xs text-slate-400 font-mono">{error?.message || 'خطأ غير متوقع'}</p>
      <button
        onClick={resetError}
        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow"
      >
        إعادة المحاولة 🔄
      </button>
    </div>
  );
}

export function MonitoredFeature({ children }) {
  return (
    <Sentry.ErrorBoundary fallback={ErrorFallbackView}>
      {children}
    </Sentry.ErrorBoundary>
  );
}`
  },
  infographic: {
    title: "خريطة منظومة مراقبة وتتبع الأخطاء في الإنتاج",
    subtitle: "المسار الهندسي الاستباقي من رصد الاستثناء وتطهير البيانات إلى فك التعمية وإدارة التنبيهات",
    nodes: [
      {
        id: "error-capture",
        title: "1. الرصد والاستيعاب",
        description: "التقاط الاستثناءات غير المعالجة والوعود المرفوضة unhandledrejection فور وقوعها.",
        badge: "Auto Capture"
      },
      {
        id: "boundaries",
        title: "2. حدود العزل Error Boundary",
        description: "حماية التطبيق من الشاشة البيضاء وعزل الانهيار محلياً مع زر إعادة محاولة أنيق.",
        badge: "Resilience"
      },
      {
        id: "source-maps",
        title: "3. فك التعمية بـ Source Maps",
        description: "مطابقة الأكواد المضغوطة بالأسطر الأصلية في TypeScript لتحديد سبب العطل في ثوانٍ.",
        badge: "Unminification"
      },
      {
        id: "data-scrubbing",
        title: "4. تطهير البيانات والخصوصية",
        description: "حجب التوكنات وأرقام البطاقات بـ beforeSend للامتثال الصارم لقوانين GDPR وHIPAA.",
        badge: "PII Protection"
      },
      {
        id: "smart-alerts",
        title: "5. تصنيف الأولويات والتنبيهات",
        description: "فرز الأعطال وتجميع البصمات وإطلاق الإنذار العاجل للأعطال القاتلة Fatal فقط.",
        badge: "Alert Rules"
      }
    ]
  }
};

export default topic1;

