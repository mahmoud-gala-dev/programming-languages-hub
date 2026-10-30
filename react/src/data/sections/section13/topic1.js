// src/data/sections/section13/topic1.js

export const topic1 = {
  id: "13-1",
  title: "أساسيات TanStack Query",
  englishTitle: "TanStack Query Fundamentals",
  description:
    "مقدمة تأسيسية شاملة لمحرك إدارة وتخزين بيانات الخادم المؤقتة الأكثر شهرة في منظومة React الحديثة: TanStack Query (المعروف سابقاً باسم React Query). يغطي هذا القسم الفهم الجوهري لطبيعة حالة الخادم (Server State)، خطوات التثبيت والتهيئة المعمارية لـ QueryClient وQueryClientProvider، كيفية استدعاء واستخدام خطاف useQuery لجلب البيانات، إدارة دورة حياة حالات التحميل والخطأ والنجاح، التسمية الهندسية لمفاتيح الاستعلام (Query Keys) ومصفوفات التحديد، وكيفية توظيف أدوات المطورين الرسمية (TanStack Query Devtools) لفحص الكاش وحالات الاستعلام في الوقت الفعلي.",
  subtopics: [
    {
      id: "13-1-a",
      title: "مفهوم Server State وخصائصه الجوهرية",
      englishTitle: "Understanding Server State & Its Core Nature",
      pronunciation: "أندرستاندنج سيرفر ستيت آند إتس كور نيتشر",
      meaning: "طبيعة البيانات المستعارة من الخوادم السحابية واختلافها عن حالة العميل",
      description:
        "حالة الخادم (Server State) ليست مجرد مصفوفة أو كائن نحفظه في الذاكرة المحلية لتطبيق المتصفح؛ بل هي 'نسخة مؤقتة مستعارة' (Cached Snapshot) لبيانات تقيم فعلياً على قاعدة بيانات أو خادم بعيد، وتخضع لقواعد فيزيائية وبرمجية مختلفة تماماً عن حالة العميل المحلية (Client State). تتسم حالة الخادم بأنها: 1) غير متزامنة (Asynchronous) وتتطلب استدعاءات شبكة تستغرق وقتاً غير مضمون، 2) خارجة عن سيطرة العميل المنفرد؛ إذ قد يقوم مستخدم آخر في نفس الثانية بتعديل أو حذف السجل على الخادم دون علم التطبيق المحلي، 3) معرضة للتلف والتقادم (Stale) بمرور الوقت، 4) تتطلب إدارة مستمرة لحالات التحميل المؤقت (Loading)، وأخطاء الاتصال وفقدان الإنترنت (Errors)، ومحاولات إعادة الإرسال الذاتية (Retries)، والتخزين المؤقت في الذاكرة (Memory Caching). محاولة إدارة هذه الطبيعة الديناميكية باستخدام useState وuseEffect تؤدي حتماً إلى شفرات نمطية متكررة (Boilerplate) وشلالات شبكة معطوبة (Network Waterfalls) ومشاكل تنافس غير متوقعة (Race Conditions).",
      analogy:
        "حالة العميل (Client State) تشبه ورقة ملاحظات خاصة في جيبك؛ أنت وحدك من يكتب فيها وتتغير في لحظتها بمجرد شطبك لكلمة. أما حالة الخادم (Server State) فتشبه لوحة أسعار الذهب والعملات في واجهة البورصة؛ أنت لا تملك الأرقام بل تنظر لشاشة تعرض لقطة منها قد تتغير كل ثانية من قبل مديري البورصة، وإذا انقطع تيار الشاشة لا تعرف السعر الحالي بدقة.",
      whyItMatters:
        "استيعاب الفارق الفلسفي بين Server State وClient State هو الخطوة التي نقلت مجتمع مطوري React من كتابة آلاف الأسطر في Redux Thunk أو useEffect إلى الاعتماد على محركات إدارة الكاش المتخصصة، مما يوفر أكثر من 70% من الكود ويضمن تجربة مستخدم فورية ودقيقة.",
      syntax: `// طبيعة Server State:
// 1. لا يملكها العميل محلياً بل يستعير نسخة منها
// 2. تحتاج مفتاح كاش (Query Key) ودالة جلب (Query Fn)
// 3. تحتاج تتبع حالات: isLoading, isError, isFetching, isStale`,
      simpleExample: `// مقارنة مفهومية بين المتغير المحلي واستعارة حالة الخادم
import React, { useState } from 'react';

export function StateNatureDemo() {
  // حالة عميل خالصة: يملكها المكون وتتغير تزامناً مع نقرة المستخدم
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // حالة خادم: تمثل بيانات خارجية تحتاج فحص الاتصال والتحميل والخطأ
  // لا ينبغي خلطها في نفس النمط البسيط دون محرك كاش متخصص
  return (
    <div className="p-4 border rounded-xl">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn-toggle">
        القائمة الجانبية: {isMenuOpen ? 'مفتوحة' : 'مغلقة'}
      </button>
      <p className="text-xs text-slate-400 mt-2">
        حالة القائمة هي Client State. بيانات المستخدمين داخلها هي Server State.
      </p>
    </div>
  );
}`,
      advancedExample: `// محاكاة توضح الفارق في التعقيد البرمجي لإدارة حالة الخادم يدوياً
import React, { useState, useEffect } from 'react';

// الأسلوب اليدوي القديم المليء بالمخاطر (بدون TanStack Query)
export function ManualServerStateManager({ userId }) {
  // 1. حالة تخزين البيانات
  const [data, setData] = useState(null);
  // 2. حالة تتبع التحميل الأولي
  const [isLoading, setIsLoading] = useState(true);
  // 3. حالة الخطأ
  const [error, setError] = useState(null);
  // 4. حالة تتبع إعادة الجلب في الخلفية
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // راية حراسة لمنع Race Conditions
    let isCancelled = false;
    // تفعيل مؤشر التحميل
    setIsLoading(true);

    // استدعاء الخادم
    fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
      .then((res) => {
        if (!res.ok) throw new Error('فشل جلب بيانات المستخدم');
        return res.json();
      })
      .then((userData) => {
        // التحقق من أن المكون لم يلغ تركيبه أو تغير المعرف
        if (!isCancelled) {
          setData(userData);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          setError(err.message);
          setIsLoading(false);
        }
      });

    // دالة التنظيف
    return () => {
      isCancelled = true;
    };
  }, [userId]);

  if (isLoading) return <div>جارٍ الاتصال بالخادم...</div>;
  if (error) return <div className="text-rose-500">خطأ: {error}</div>;

  return <div>مرحباً، {data?.name}</div>;
}`,
      outputExplanation:
        "يوضح المثال المتقدم كمية الكود الهائل والمعقد (أعلام الإلغاء، حالات التحميل، معالجة الاستثناءات) الذي يضطر المطور لكتابته يدوياً مع كل استدعاء خادم، وهو الكود الذي يتكفل TanStack Query باختزاله بالكامل في سطرين فقط مع مميزات إضافية تفوق القدرة اليدوية كالكاش وإعادة الجلب التلقائي.",
      commonMistakes: [
        {
          mistake: "معاملة بيانات الخادم وكأنها حالة محلية دائمة وتحديثها يدوياً وتوقع بقائها متزامنة للأبد مع قاعدة البيانات.",
          fix: "تذكر دائماً أن بيانات الخادم هي مجرد لقطة مؤقتة (Cache)؛ اعتمد على آليات Invalidation وإعادة الجلب الدورية لضمان دقتها."
        },
        {
          mistake: "تخزين Server State داخل Redux أو Zustand بدون إدارة أوقات الصلاحية (staleTime) وحالات الخطأ المتقدمة.",
          fix: "افصل تماماً بين حالة العميل وحالة الخادم؛ استخدم TanStack Query حصراً لكل ما يُجلب من الشبكة."
        }
      ],
      bestPractices: [
        "صنف كل جزء من حالة تطبيقك إلى: حالة خادم (Server) أو حالة عميل (Client) قبل كتابة سطر كود واحد.",
        "لا تستخدم useState لتخزين نتائج الـ API إلا في حالات نادرة جداً ومؤقتة في صفحات الهبوط الثابتة.",
        "اعتمد على TanStack Query كمصدر حقيقة وحيد (Single Source of Truth) لكافة البيانات القادمة من الخوادم السحابية."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "الخصائص الجوهرية لحالة الخادم (Server State)",
        items: [
          {
            title: "ملكية خارجية (Remotely Owned)",
            points: [
              "تقيم في قواعد بيانات وخوادم سحابية",
              "المتصفح لا يملك البيانات بل يستعير نسخة كاش فقط",
              "يمكن تعديلها من مستخدمين آخرين في أي لحظة"
            ]
          },
          {
            title: "غير متزامنة ومتقادمة (Stale & Async)",
            points: [
              "تتطلب وقتاً للسفر عبر الشبكة وتحتمل الفشل",
              "تصبح قديمة وتفقد صلاحيتها بمرور الثواني أو الدقائق",
              "تحتاج استراتيجية إعادة جلب دورية وذكية"
            ]
          },
          {
            title: "تشارك واسع (Shared Impact)",
            points: [
              "تتشاركها شاشات متعددة في نفس التطبيق",
              "تحديث عنصر في شاشة يتطلب مزامنة شاشات أخرى فوراً",
              "تتطلب تسوية ذكية وتخزيناً مؤقتاً في الذاكرة"
            ]
          }
        ]
      }
    },
    {
      id: "13-1-b",
      title: "تثبيت TanStack Query وحزم الدعم",
      englishTitle: "Installing TanStack Query & Core Packages",
      pronunciation: "إنستولينج تان ستاك كويري آند كور باكيدجز",
      meaning: "طريقة تنزيل وتثبيت مكتبة إدارة الكاش الحديثة وأدوات التطوير المساعدة",
      description:
        "TanStack Query (الإصدار v5 الحالي) هي مكتبة متعددة الأطر، وتتوفر حزمتها الرسمية لبيئة React تحت الاسم البرمجي `@tanstack/react-query`. بالإضافة إلى الحزمة الأساسية، من الضروري جداً في بيئة التطوير تثبيت حزمة أدوات المطورين الرسمية `@tanstack/react-query-devtools` التي توفر لوحة تحكم تفاعلية في المتصفح لفحص حالة الكاش، ومعرفة الاستعلامات النشطة والراكدة (Fresh, Stale, Inactive, Fetching)، وإجراء اختبارات التراجع اليدوي وإعادة الجلب بنقرة زر. يتم تثبيت هذه الحزم عبر مديري الحزم القياسيين (npm أو pnpm أو yarn)، وتتميز الحزمة بأنها مصممة لدعم شجرة التخلص من الشفرات الزائدة (Tree-shaking) وخفيفة الوزن ومتوافقة بالكامل مع React 18 و 19 وأنظمة TypeScript الحديثة.",
      analogy:
        "تثبيت TanStack Query يشبه تزويد مكتبك بمحطة استقبال طرود ذكية مجهزة بنظام تبريد وتتبع إلكتروني (Devtools)؛ بدلاً من أن يجري الموظف إلى الباب في كل مرة يصل فيها طرد، تفرز المحطة الطرود وتفحص صلاحيتها وتخطر الشخص المعني بدقة تامة.",
      whyItMatters:
        "بدء المشروع بالتثبيت الصحيح للحزمة الأساسية مع أدوات DevTools يختصر مئات الساعات في تصحيح أخطاء الشبكة والكاش ويوفر رؤية بصرية كاملة لما يحدث خلف الكواليس في الذاكرة.",
      syntax: `// التثبيت عبر مدير الحزم npm:
npm install @tanstack/react-query

// تثبيت أدوات المطورين المساعدة للتصحيح:
npm install @tanstack/react-query-devtools -D`,
      simpleExample: `// ملف package.json يوضح تثبيت حزم TanStack Query في تطبيق React
{
  "name": "react-query-app",
  "private": true,
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@tanstack/react-query": "^5.59.0" // حزمة الاستعلامات والكاش الأساسية
  },
  "devDependencies": {
    "@tanstack/react-query-devtools": "^5.59.0", // حزمة فحص وتصحيح الكاش
    "vite": "^5.4.0"
  }
}`,
      advancedExample: `// التحقق من إصدار الحزمة وضبط استيرادات TypeScript القياسية
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// طباعة تأكيد تحميل الحزمة في وحدة التحكم
console.log("TanStack Query v5 تم استيرادها بنجاح!");

// استعراض الكائنات الأساسية المتوفرة في الحزمة
export const QueryCoreManifest = {
  clientClass: QueryClient,
  devtoolsComponent: ReactQueryDevtools,
  isV5Compatible: true
};`,
      outputExplanation:
        "يوضح المثال الحزمتين الضروريتين: حزمة الإنتاج `@tanstack/react-query` المسؤولة عن منطق الجلب والكاش والاشتراكات، وحزمة التطوير `@tanstack/react-query-devtools` المسؤولة عن توفير لوحة المراقبة التفاعلية في شاشة المتصفح دون زيادة حجم نسخة الإنتاج.",
      commonMistakes: [
        {
          mistake: "محاولة تثبيت الحزمة القديمة المهجورة باسم `react-query` بدلاً من النطاق الرسمي الحديث `@tanstack/react-query`.",
          fix: "استخدم دائماً `@tanstack/react-query` للإصدار 5 الحديث، وتجنب استخدام react-query (v3 القديمة)."
        },
        {
          mistake: "تضمين ReactQueryDevtools في نسخة الإنتاج النهائية دون تقييدها ببيئة التطوير process.env.NODE_ENV === 'development'.",
          fix: "في الإصدار 5، يتم استبعاد أدوات DevTools تلقائياً من حزم الإنتاج ما لم يتم استيرادها صراحة، ومن الأفضل حمايتها بشرط البيئة دائماً."
        }
      ],
      bestPractices: [
        "ثبت دائماً الإصدار الأحدث من `@tanstack/react-query` و `@tanstack/react-query-devtools` بنفس رقم الإصدار لتفادي أي تعارض في واجهات البرمجة.",
        "احرص على تثبيت DevTools كحزمة تطوير `-D` أو التعامل معها بحذر لضمان خفة ملفات الإنتاج النهائية."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "حزم TanStack Query في المشروع",
        items: [
          {
            title: "@tanstack/react-query",
            points: [
              "الحزمة الأساسية المسؤولة عن دورة حياة الكاش",
              "توفر الخطافات الرئيسية: useQuery, useMutation, useQueryClient",
              "تدعم التخزين المؤقت، والمحاولات التلقائية، وإلغاء الطلبات"
            ]
          },
          {
            title: "@tanstack/react-query-devtools",
            points: [
              "لوحة تحكم بصرية عائمة تدمج في شاشة التطبيق",
              "تعرض خريطة الاستعلامات وحالاتها (Fresh, Stale, Fetching)",
              "تتيح إعادة الجلب اليدوي وحذف الكاش ومحاكاة التحميل"
            ]
          }
        ]
      }
    },
    {
      id: "13-1-c",
      title: "إعداد وتهيئة QueryClient بالخيارات الافتراضية",
      englishTitle: "Configuring QueryClient with Global Default Options",
      pronunciation: "كونفيجرينج كويري كلاينت وذ جلوبال ديفولت أوبشنز",
      meaning: "إنشاء المحرك المركزي للكاش وضبط السلوكيات الافتراضية للمشروع بأكمله",
      description:
        "`QueryClient` هو القلب النابض والعقل المدبر لمنظومة TanStack Query بأكملها؛ فهو الكائن المسؤول عن تخزين وإدارة `QueryCache` و `MutationCache`، وتحديد السياسات الافتراضية لكافة استعلامات المشروع. عند إنشاء كائن `new QueryClient()`، يمكن تمرير كائن إعدادات افتراضية `defaultOptions` يتحكم في: 1) `staleTime`: المدة الزمنية التي تعتبر البيانات خلالها 'طازجة وحديثة' ولا تتطلب أي إعادة جلب من الخادم (القيمة الافتراضية في v5 هي 0)، 2) `gcTime`: مدة بقاء البيانات غير المستخدمة في الذاكرة المؤقتة (Garbage Collection Time) قبل حذفها لتوفير الذاكرة (الافتراضي 5 دقائق)، 3) `refetchOnWindowFocus`: إعادة الجلب التلقائي للبيانات عند رجوع المستخدم لتبويب المتصفح (الافتراضي true)، 4) `retry`: عدد المحاولات التلقائية عند فشل طلب الشبكة (الافتراضي 3 مرات مع تأخير أسي متزايد). ضبط هذه الخيارات بذكاء في مستوى QueryClient يوفر تجربة فائقة السلاسة دون الحاجة لتكرار الخيارات في كل خطاف فردي.",
      analogy:
        "QueryClient يشبه مدير المستودع المركزي؛ هو الذي يحدد القوانين العامة للعمل: كم دقيقة تبقى البضاعة على الرف قبل فحص جودتها (staleTime)، ومتى يتم التخلص من الصناديق المهجورة (gcTime)، وكم مرة يحاول السائق الاتصال بالمورد إذا كان الخط مشغولاً (retry).",
      whyItMatters:
        "التهيئة الصحيحة لـ QueryClient تمنع إغراق خوادم الـ API بطلبات متكررة غير ضرورية (Over-fetching)، وتحافظ على استهلاك ذاكرة المتصفح من التسرب (Memory Leaks)، وتمنح تجربة تصفح فورية وسلسة للمستخدمين.",
      syntax: `// إنشاء وضبط عميل الاستعلامات المركزي
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2, // دقيقتان
      gcTime: 1000 * 60 * 10,   // 10 دقائق
      refetchOnWindowFocus: false, // تعطيل إعادة الجلب عند التركيز
      retry: 2 // محاولتان فقط عند الفشل
    }
  }
});`,
      simpleExample: `// ملف إعداد عميل الاستعلامات البسيط
import { QueryClient } from '@tanstack/react-query';

// إنشاء مثيل مفرد لعميل الاستعلامات
export const appQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // تعيين البيانات كحديثة لمدة دقيقة واحدة لتفادي تكرار الطلبات المتطابقة
      staleTime: 60 * 1000,
      // محاولة واحدة فقط عند حدوث خطأ في الاتصال
      retry: 1
    }
  }
});`,
      advancedExample: `// تهيئة معمارية احترافية لعميل الاستعلامات مع معالجة شاملة للأخطاء
import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';

// إنشاء عميل الاستعلامات مع معترضات عامة للكاش والطفرات
export const enterpriseQueryClient = new QueryClient({
  // معالج أخطاء الكاش المركزي لكافة الاستعلامات
  queryCache: new QueryCache({
    onError: (error, query) => {
      // طباعة تقرير مفصل عن الاستعلام المعطوب ومفتاحه
      console.error(\`فشل استعلام الخادم للمفتاح [\${query.queryKey.join(', ')}]:\`, error.message);
    }
  }),

  // معالج أخطاء الطفرات المركزي (POST / PUT / DELETE)
  mutationCache: new MutationCache({
    onError: (error) => {
      // إمكانية إطلاق توست إشعار عام للمستخدم
      console.error("فشلت عملية تعديل البيانات على الخادم:", error.message);
    }
  }),

  // الخيارات القياسية المطبقة على جميع استعلامات وطفرات المشروع
  defaultOptions: {
    queries: {
      // البيانات تعتبر حديثة لمدة 5 دقائق كاملة
      staleTime: 1000 * 60 * 5,
      // الاحتفاظ بالبيانات غير المستخدمة في الكاش لمدة 15 دقيقة
      gcTime: 1000 * 60 * 15,
      // عدم إزعاج السيرفر بإعادة الجلب التلقائي عند تبديل نوافذ النظام
      refetchOnWindowFocus: false,
      // منع إعادة الجلب التلقائي عند استعادة اتصال الشبكة إلا للضرورة
      refetchOnReconnect: true,
      // إعادة المحاولة مرتين مع تصاعد زمني
      retry: (failureCount, error) => {
        // عدم تكرار المحاولة إذا كان الخطأ 404 (المورد غير موجود نهائياً)
        if (error?.status === 404) return false;
        // المحاولة حتى مرتين كحد أقصى لأخطاء الشبكة والخادم الأخرى
        return failureCount < 2;
      }
    },
    mutations: {
      // عمليات التعديل لا تعاد تلقائياً لتفادي تكرار إنشاء السجلات
      retry: false
    }
  }
});`,
      outputExplanation:
        "يوضح المثال المتقدم كيفية تهيئة عميل مؤسسي صلب يتحكم في السلوك الافتراضي لجميع استعلامات التطبيق: ضبط منطق ذكي لإعادة المحاولات يستثني أخطاء 404، وتسجيل الأخطاء مركزياً في QueryCache وMutationCache، وضبط مدة الحداثة (staleTime) لـ 5 دقائق لحماية الخادم من الطلبات العبثية.",
      commonMistakes: [
        {
          mistake: "إنشاء مثيل جديد من QueryClient داخل دالة المكون (مثلاً: const queryClient = new QueryClient()) في كل عملية تصيير.",
          fix: "قم بإنشاء كائن QueryClient خارج شجرة المكونات كمتغير مفرد (Singleton) في أعلى الملف أو باستخدام useState/useRef لحمايته من إعادة الإنشاء."
        },
        {
          mistake: "الخلط بين staleTime و gcTime وتعيين gcTime أقل من staleTime.",
          fix: "تأكد دائماً أن gcTime أكبر من staleTime؛ لأنه من غير المنطقي اعتبار البيانات صالحة بينما تم حذفها ومسحها من ذاكرة الكاش."
        }
      ],
      bestPractices: [
        "أنشئ مثيلاً واحداً فقط من QueryClient وشاركه عبر التطبيق بأكمله.",
        "حدد قيمة مناسبة لـ staleTime (مثل دقيقة إلى 5 دقائق) لتطبيقات لوحات التحكم والمتاجر لتوفير سرعة فائقة وتخفيف الضغط على واجهات الـ API.",
        "عطل refetchOnWindowFocus إذا كانت بيانات تطبيقك ثابتة نسبياً ولا تحتاج لتحديث لحظي في كل مرة ينقر فيها المستخدم على نافذة المتصفح."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "الخيارات الافتراضية الحاسمة في QueryClient",
        items: [
          {
            title: "staleTime (فترة الحداثة)",
            points: [
              "الافتراضي: 0 مللي ثانية (تعتبر البيانات قديمة فور وصولها)",
              "الأثر: طالما البيانات لم تنتهِ مدتها، لا يتم إرسال طلب شبكة جديد",
              "الموصى به: دقيقة إلى 5 دقائق لمعظم التطبيقات"
            ]
          },
          {
            title: "gcTime (فترة تنظيف الذاكرة)",
            points: [
              "الافتراضي: 5 دقائق (300,000 مللي ثانية)",
              "الأثر: مدة الاحتفاظ بالبيانات في الكاش بعد إلغاء تركيب آخر مكون يستمع إليها",
              "الموصى به: 10 إلى 15 دقيقة لتجربة عودة فورية للشاشات"
            ]
          },
          {
            title: "retry (سياسة إعادة المحاولة)",
            points: [
              "الافتراضي: 3 محاولات تصاعدية عند الخطأ",
              "الأثر: يساعد في تجاوز انقطاعات الشبكة اللحظية بذكاء",
              "الموصى به: محاولة أو محاولتان مع استثناء أخطاء 401/404"
            ]
          }
        ]
      }
    },
    {
      id: "13-1-d",
      title: "إعداد وبث QueryClientProvider في قمة التطبيق",
      englishTitle: "Setting Up & Broadcasting QueryClientProvider at App Root",
      pronunciation: "سيتنج أب آند برودكاستنج كويري كلاينت بروفايدر آت آب روت",
      meaning: "تغليف شجرة المكونات بالمزود الذي يبث سياق عميل الكاش لكافة الشاشات",
      description:
        "`QueryClientProvider` هو مكون موفر السياق (Context Provider) الرسمي الذي يقوم بربط وبث مثيل `QueryClient` إلى كامل شجرة مكونات React. بدون تغليف التطبيق بهذا الموفر في أعلى نقطة ممكنة (عادة في `main.jsx` أو `App.jsx`)، لن تتمكن أي من الخطافات المخصصة مثل `useQuery` أو `useMutation` أو `useQueryClient` من العمل وستطلق خطأ صريحاً يوضح عدم العثور على عميل الاستعلامات في السياق. يتم تمرير كائن العميل عبر الخاصية الإلزامية `client={queryClient}`، ويمكن تضمين أدوات التطوير `ReactQueryDevtools` كابن مباشر للمزود ليتم عرضها في أسفل زاوية الشاشة أثناء التطوير دون التأثير على هيكلية الواجهة العامة.",
      analogy:
        "QueryClientProvider يشبه شبكة الأسلاك الكهربائية التي تُمد في جدران المبنى؛ العميل QueryClient هو المحول الكهربائي الرئيسي، والمزود يوصل التيار لجميع الغرف؛ فبمجرد أن يوصل أي جهاز قابسه في أي جدار (useQuery)، يجد الطاقة والبيانات متوفرة فوراً.",
      whyItMatters:
        "يضمن هذا النمط توفير نقطة وصول واحدة ومستقرة للكاش عبر التطبيق، مما يسمح بمشاركة ومزامنة نفس البيانات بين عشرات المكونات المتباعدة في الشجرة دون الحاجة لتمرير الخصائص (Props Drilling).",
      syntax: `// تغليف التطبيق بالمزود
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}`,
      simpleExample: `// إعداد المزود في ملف المدخل main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.jsx';

// 1. إنشاء مثيل عميل الكاش خارج المكون لضمان استقراره
const queryClient = new QueryClient();

// 2. تصيير التطبيق مغلفاً بمزود الاستعلامات
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);`,
      advancedExample: `// تهيئة معمارية آمنة للمزود مع حماية ضد إعادة الإنشاء ودمج Devtools المشروطة
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { DashboardLayout } from './components/DashboardLayout.jsx';

export function ApplicationRoot() {
  // حيلة معمارية: استخدام useState لضمان بقاء العميل ثابتاً طوال دورة حياة التطبيق
  // حتى لو حدث Hot Module Reloading أو إعادة رندر للمكون الأب
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 3, // 3 دقائق
            refetchOnWindowFocus: false
          }
        }
      })
  );

  return (
    // توفير سياق الكاش لجميع المكونات والأبناء
    <QueryClientProvider client={queryClient}>
      {/* شجرة المكونات الرئيسية للتطبيق */}
      <DashboardLayout />

      {/* لوحة أدوات التطوير تعرض فقط في بيئة التطوير لتصحيح الكاش */}
      {process.env.NODE_ENV !== 'production' && (
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      )}
    </QueryClientProvider>
  );
}`,
      outputExplanation:
        "يوضح المثال كيفية تغليف جذر التطبيق بمزود `QueryClientProvider` باستخدام نمط `useState(() => new QueryClient())` لضمان عدم إعادة إنشاء العميل وضياع الكاش أثناء التطوير، مع دمج أدوات `ReactQueryDevtools` في أسفل يسار الشاشة بصورة مشروطة لبيئة التطوير فقط.",
      commonMistakes: [
        {
          mistake: "نسيان تمرير الخاصية client للمزود (مثل كتابة <QueryClientProvider> فقط)، مما يؤدي لتعطل التطبيق كلياً.",
          fix: "تأكد دائماً من كتابة <QueryClientProvider client={queryClient}> وتمرير كائن العميل المنشأ."
        },
        {
          mistake: "استدعاء خطافات الاستعلام مثل useQuery في مكون يقع خارج نطاق شجرة QueryClientProvider (كاستدعائها في نفس المكون الذي يعرف المزود).",
          fix: "يجب أن تكون الخطافات داخل مكونات فرعية تقع داخل وسم <QueryClientProvider> لتتمكن من قراءة السياق."
        }
      ],
      bestPractices: [
        "ضع المزود في أعلى نقطة في شجرة التطبيق (main.jsx أو index.jsx) لضمان استفادة كافة الشاشات والمسارات منه.",
        "ضمّن دائماً ReactQueryDevtools بجوار المكون الرئيسي لمساعدتك في اختبار وفهم سلوك الكاش أثناء التطوير.",
        "استخدم دالة التهيئة الكسولة useState(() => new QueryClient()) إذا كنت تنشئ العميل داخل مكون React لضمان بقائه مرجعياً."
      ],
      visualInfographic: {
        type: "flowchart",
        title: "تدفق سياق QueryClientProvider في شجرة التطبيق",
        nodes: [
          { id: "1", label: "QueryClient Instance\n(المحرك المركزي للكاش)", shape: "box", highlight: "purple" },
          { id: "2", label: "<QueryClientProvider client={queryClient}>\n(مزود السياق الشجري في main.jsx)", shape: "box", highlight: "blue" },
          { id: "3", label: "<App /> وجميع المسارات والشاشات", shape: "box" },
          { id: "4", label: "المكون الفرعي A\nuseQuery(['users'])", shape: "pill", highlight: "green" },
          { id: "5", label: "المكون الفرعي B\nuseQuery(['posts'])", shape: "pill", highlight: "green" },
          { id: "6", label: "ReactQueryDevtools\nلوحة فحص الكاش العائمة", shape: "pill", highlight: "amber" }
        ],
        connections: [
          { from: "1", to: "2", label: "حقن العميل" },
          { from: "2", to: "3", label: "بث السياق" },
          { from: "2", to: "6", label: "مراقبة حية" },
          { from: "3", to: "4", label: "استهلاك فوري" },
          { from: "3", to: "5", label: "استهلاك فوري" }
        ]
      }
    },
    {
      id: "13-1-e",
      title: "استخدام الخطاف الأساسي useQuery لجلب البيانات",
      englishTitle: "Using Core useQuery Hook for Declarative Data Fetching",
      pronunciation: "يوزنج كور يوز كويري هوك فور ديكلاراتيف داتا فيتشنج",
      meaning: "الخطاف الأساسي والأقوى في تان ستاك لجلب وحفظ واشتراك بيانات الخادم",
      description:
        "`useQuery` هو الخطاف المحوري الأكثر استخداماً في TanStack Query لجلب بيانات الخادم التقريرية (Declarative Data Fetching). في الإصدار الحديث (v5)، يستقبل `useQuery` كائناً يحتوي على خاصيتين إلزاميتين رئيسيتين: 1) `queryKey`: مصفوفة فريدة تمثل المعرف الحصري للاستعلام في الكاش وتحدد متى يُعاد تشغيله بناءً على تغير متغيراته، 2) `queryFn`: دالة غير متزامنة (Async Function) مسؤولة عن إرسال طلب الشبكة (باستخدام fetch أو axios أو أي عميل HTTP آخر)، ويجب أن تُرجع البيانات النهائية أو تطلق خطأً صريحاً (throw new Error) عند فشل الطلب. يقوم `useQuery` تلقائياً بالاشتراك في الكاش المركزي؛ فإذا كانت البيانات موجودة وحديثة يعرضها فوراً بزمن 0 مللي ثانية، وإذا لم تكن موجودة يُطلق طلب الشبكة ويدير مؤشرات التحميل والخطأ تلقائياً.",
      analogy:
        "استدعاء useQuery يشبه الاشتراك في خدمة توصيل صحف يومية باسم عنوانك (queryKey) ومطبعة محددة (queryFn)؛ في الصباح الأول يذهب الساعي لجلبها، وفي الأيام التالية إذا طلبت الصحيفة تجدها فوراً أمام بابك دون انتظار، مع قيام الساعي بجلب النسخة الأحدث في الخلفية بهدوء.",
      whyItMatters:
        "يلغي useQuery الحاجة لكتابة useEffect لجلب البيانات نهائياً؛ حيث يتكفل بحالات السباق، وإلغاء الطلبات عند مغادرة الصفحة، والتخزين المؤقت، وإعادة الجلب التلقائي دون أي كود يدوي معقد.",
      syntax: `// بنية استدعاء useQuery في الإصدار v5:
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, isError, error } = useQuery({
  queryKey: ['todos', filterId], // مفتاح الكاش الفرعي
  queryFn: async () => {
    const res = await fetch('/api/todos');
    if (!res.ok) throw new Error('فشل جلب المهام');
    return res.json();
  }
});`,
      simpleExample: `// جلب قائمة المستخدمين باستخدام useQuery البسيط
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// دالة جلب البيانات المستقلة
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('حدث خطأ أثناء تحميل المستخدمين من الخادم');
  }
  return response.json();
}

export function SimpleUsersList() {
  // استخدام useQuery لتوفير البيانات وحالات التحميل
  const { data: users, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  // معالجة حالة التحميل الأولي
  if (isLoading) return <div className="p-4 text-slate-400">جارٍ التحميل...</div>;
  // معالجة حالة الخطأ
  if (isError) return <div className="p-4 text-rose-500">خطأ: {error.message}</div>;

  // عرض البيانات بنجاح
  return (
    <ul className="p-4 space-y-2">
      {users.map((user) => (
        <li key={user.id} className="p-2 bg-slate-900 border rounded-lg text-white">
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}`,
      advancedExample: `// استدعاء متقدم لـ useQuery مع معلمات ديناميكية وإلغاء تلقائي عبر AbortSignal
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export function UserProfileViewer() {
  // حالة المعرف المحدد محلياً
  const [selectedId, setSelectedId] = useState(1);

  // useQuery مع تمرير signal للإلغاء التلقائي عند تبديل المستخدم سريعاً
  const {
    data: profile,
    isLoading,
    isError,
    error,
    isFetching,
    refetch
  } = useQuery({
    // المفتاح يشمل المعرف المتغير؛ فعند تغير selectedId يُعاد الاستعلام فوراً
    queryKey: ['user', selectedId],
    // queryFn تستقبل تلقائياً سياق الاستعلام شاملاً AbortSignal الخاص بالمتصفح
    queryFn: async ({ signal }) => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${selectedId}\`, {
        signal // تمرير إشارة الإلغاء لمنع سباق الشبكة وتوفير الباندويث
      });
      if (!res.ok) {
        throw new Error(\`تعذر العثور على المستخدم رقم \${selectedId}\`);
      }
      return res.json();
    },
    // تخصيص مدة حداثة هذا الاستعلام تحديداً لـ 3 دقائق
    staleTime: 1000 * 60 * 3
  });

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto">
      {/* شريط أزرار تبديل المعرف */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-white text-sm">الملف الشخصي للمستخدم</h3>
        <div className="flex gap-1">
          {[1, 2, 3].map((id) => (
            <button
              key={id}
              onClick={() => setSelectedId(id)}
              className={\`px-2.5 py-1 text-xs font-bold rounded \${
                selectedId === id ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
              }\`}
            >
              #{id}
            </button>
          ))}
        </div>
      </div>

      {/* مؤشر إعادة الجلب في الخلفية (Background Refetch Indicator) */}
      {isFetching && !isLoading && (
        <span className="text-[10px] text-amber-400 font-mono block mb-2 animate-pulse">
          ⚡ تحديث صامت للبيانات في الخلفية...
        </span>
      )}

      {/* عرض حالات التحميل والخطأ والمحتوى */}
      {isLoading ? (
        <div className="p-4 bg-slate-950 rounded-xl text-center text-xs text-slate-400">
          جارٍ سحب البيانات من الخادم...
        </div>
      ) : isError ? (
        <div className="p-4 bg-rose-950/40 border border-rose-800 rounded-xl text-xs text-rose-300">
          ⚠️ {error.message}
          <button onClick={() => refetch()} className="block mt-2 underline text-white font-bold">
            إعادة المحاولة الآن
          </button>
        </div>
      ) : (
        <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
          <p className="font-bold text-white text-sm">{profile.name}</p>
          <p className="text-xs text-slate-400">البريد: {profile.email}</p>
          <p className="text-xs text-slate-400">الشركة: {profile.company?.name}</p>
          <p className="text-xs text-slate-400">المدينة: {profile.address?.city}</p>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم كيف يربط useQuery بين `queryKey: ['user', selectedId]` وحالة العميل المحلية؛ بمجرد نقر المستخدم على زر معرّف آخر، يفحص TanStack Query الكاش فوراً، فإن وجد بيانات سابقة عرضها في 0ms، وإلا جلبها بالتوازي مع تمرير `signal` لإلغاء أي طلب سابق قيد التشغيل تلقائياً.",
      commonMistakes: [
        {
          mistake: "استخدام كائن بدون دالة تطلق استثناءً (مثل إرجاع fetch دون فحص res.ok)، مما يجعل React Query تظن أن الخطأ هو رد ناجح.",
          fix: "تأكد دائماً مع fetch من فحص if (!res.ok) throw new Error(...)؛ لأن fetch لا تطلق استثناءات عند أخطاء 404 أو 500 افتراضياً."
        },
        {
          mistake: "استخدام الشكل القديم لـ useQuery(key, fn) الذي تم حذفه في الإصدار v5.",
          fix: "استخدم دائماً نمط الكائن المفرد useQuery({ queryKey: [...], queryFn: ... }) المتوافق مع v5."
        }
      ],
      bestPractices: [
        "مرر دائماً المعاملات المتغيرة إلى مصفوفة queryKey (مثل ['users', userId]) لضمان إعادة الجلب عند تغيرها.",
        "استغل خاصية ({ signal }) التي توفرها دالة queryFn ومررها إلى fetch أو axios لتمكين الإلغاء التلقائي الفوري.",
        "فرّق في واجهة المستخدم بين isLoading (لا توجد بيانات نهائياً في الكاش) و isFetching (يتم تحديث البيانات في الخلفية مع توفر كاش سابق)."
      ],
      visualInfographic: {
        type: "flowchart",
        title: "دورة استدعاء useQuery والتعامل مع الكاش",
        nodes: [
          { id: "1", label: "استدعاء useQuery({ queryKey })", shape: "box", highlight: "purple" },
          { id: "2", label: "هل البيانات موجودة في الكاش؟", shape: "diamond" },
          { id: "3", label: "هل البيانات ما زالت طازجة (Fresh)؟\n(الوقت < staleTime)", shape: "diamond" },
          { id: "4", label: "إرجاع بيانات الكاش فوراً\n(0ms بدون أي طلب شبكة)", shape: "pill", highlight: "green" },
          { id: "5", label: "عرض بيانات الكاش القديمة فوراً\n+ إطلاق طلب شبكة في الخلفية (Background Fetch)", shape: "pill", highlight: "blue" },
          { id: "6", label: "تفعيل isLoading\n+ إطلاق طلب الشبكة الأولي", shape: "pill", highlight: "amber" }
        ],
        connections: [
          { from: "1", to: "2" },
          { from: "2", to: "3", label: "نعم موجودة" },
          { from: "2", to: "6", label: "لا توجد في الكاش" },
          { from: "3", to: "4", label: "نعم طازجة" },
          { from: "3", to: "5", label: "لا (أصبحت Stale)" }
        ]
      }
    },
    {
      id: "13-1-f",
      title: "إدارة حالات التحميل والخطأ والنجاح باحترافية",
      englishTitle: "Managing Loading, Error & Success Lifecycle States",
      pronunciation: "مانيجينج لودينج إيرور آند سكسيس لايف سايكل ستيتس",
      meaning: "التحكم الشامل في مختلف مؤشرات دورة حياة الاستعلام والتمييز بين الحالات المتقاربة",
      description:
        "يوفر TanStack Query ترسانة من المؤشرات المنطقية الدقيقة التي تتيح بناء تجربة مستخدم (UX) فائقة الاحترافية. من المهم جداً للمهندس المتقدم فهم الفروق الدقيقة بين هذه الحالات: 1) `status`: الحالة العامة للاستعلام وقيمها الثلاث ('pending' | 'error' | 'success')، 2) `isLoading`: يكافئ (status === 'pending' && isFetching) ويعني أن الاستعلام يُنفذ لأول مرة على الإطلاق ولا توجد أي بيانات مؤقتة في الكاش لعرضها، 3) `isFetching`: يشير إلى أن هناك طلباً قيد التنفيذ حالياً عبر الشبكة، سواء كان طلباً أولياً أو تحديثاً صامتاً في الخلفية (Background Refetch)، 4) `isError` و `error`: مؤشر الخطأ وكائن الاستثناء المرتجع، 5) `isSuccess`: نجاح الاستعلام وتوفر البيانات، 6) `isPlaceholderData`: يشير إلى أن البيانات المعروضة حالياً هي مجرد بيانات نائبة مؤقتة بينما يتم جلب الصفحة التالية. التمييز الذكي بين `isLoading` و `isFetching` يسمح بعرض واجهات دون تجميد الشاشة أو وميض محتوى التحميل المزعج.",
      analogy:
        "الفرق بين isLoading و isFetching يشبه الفرق بين افتتاح مطعم جديد تماماً حيث لا يوجد طعام على الطاولات إطلاقاً ويجب الانتظار (isLoading)، وبين مطعم يعمل بالفعل وأنت تتناول طبق المقبلات بينما الطاهي يحضر الطبق الرئيسي على مهل في المطبخ (isFetching).",
      whyItMatters:
        "الخلط بين isLoading و isFetching يؤدي إلى وميض شاشات التحميل (Skeleton/Spinners) المزعج عند كل تحديث في الخلفية، بينما الاستخدام الصحيح يتيح عرض الواجهة فوراً من الكاش مع مؤشر تحديث أنيق ودقيق في زاوية الشاشة.",
      syntax: `// استخراج حالات دورة الحياة من useQuery:
const {
  data,
  status,       // 'pending' | 'error' | 'success'
  isLoading,    // أول طلب فقط بدون كاش سابق
  isFetching,   // أي طلب شبكة نشط حالياً
  isError,      // هل حدث استثناء
  error,        // كائن الخطأ
  isSuccess     // نجاح العملية
} = useQuery({ queryKey, queryFn });`,
      simpleExample: `// مثال يعكس إدارة الحالات الثلاث الأساسية بوضوح تام
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export function StatusManagerDemo() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['system-status'],
    queryFn: async () => {
      const res = await fetch('/api/health');
      if (!res.ok) throw new Error('فشل فحص حالة النظام');
      return res.json();
    }
  });

  // 1. حالة التحميل الأولي
  if (isLoading) {
    return <div className="animate-pulse text-amber-400">⏳ جارٍ فحص صحة النظام...</div>;
  }

  // 2. حالة الخطأ
  if (isError) {
    return <div className="text-rose-500 font-bold">❌ تنبيه: {error.message}</div>;
  }

  // 3. حالة النجاح التام
  return <div className="text-emerald-400 font-bold">✅ النظام يعمل بكفاءة: {data.status}</div>;
}`,
      advancedExample: `// بناء واجهة ذكية توظف isFetching لتحديث الخلفية مع زر إعادة المحاولة اليدوية
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export function LiveAnalyticsWidget() {
  const {
    data: stats,
    isLoading,
    isFetching,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['analytics-live'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');
      if (!res.ok) throw new Error('تعذر جلب إحصائيات المنصة اللحظية');
      return res.json();
    },
    // إجبار الكاش على الاعتبار كـ Stale فورياً لتجربة الـ Refetch
    staleTime: 1000 * 10
  });

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl relative overflow-hidden">
      {/* شريط حالة الشبكة العلوي الأنيق */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <span className={\`w-2 h-2 rounded-full \${isFetching ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}\`} />
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            مؤشرات النشاط اللحظي
          </h4>
        </div>

        <div className="flex items-center gap-2">
          {/* مؤشر الجلب في الخلفية الخفيف */}
          {isFetching && (
            <span className="text-[10px] text-amber-400 font-mono">
              جارٍ المزامنة...
            </span>
          )}
          <button
            onClick={() => refetch()}
            disabled={isFetching}
            className="px-2 py-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-300 text-xs rounded transition-all"
          >
            تحديث يدوي 🔄
          </button>
        </div>
      </div>

      {/* الحالة 1: التحميل الأولي الكامل (لا توجد بيانات على الإطلاق) */}
      {isLoading && (
        <div className="space-y-2 py-4">
          <div className="h-4 bg-slate-800 rounded animate-pulse w-3/4" />
          <div className="h-4 bg-slate-800 rounded animate-pulse w-1/2" />
        </div>
      )}

      {/* الحالة 2: حدوث خطأ في الاتصال */}
      {isError && (
        <div className="p-3 bg-rose-950/40 border border-rose-800/60 rounded-xl text-rose-300 text-xs">
          <p className="font-bold">فشل تحديث الإحصائيات</p>
          <p className="text-[11px] opacity-80">{error.message}</p>
        </div>
      )}

      {/* الحالة 3: توفر البيانات وعرضها بسلاسة */}
      {stats && (
        <div className="grid grid-cols-2 gap-2 mt-2">
          {stats.map((item) => (
            <div key={item.id} className="p-2.5 bg-slate-950/70 border border-slate-800 rounded-lg">
              <span className="text-[10px] text-slate-500 font-mono block">سجل #{item.id}</span>
              <p className="text-xs text-slate-200 font-medium truncate mt-0.5">{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم كيفية استغلال `isLoading` فقط عند فتح الصفحة لأول مرة لرسم هياكل التحميل (Skeletons)، بينما يُستخدم `isFetching` كنبضة ضوئية أنيقة في الأعلى أثناء التحديثات اللاحقة دون إخفاء البيانات الموجودة أو إزعاج المستخدم.",
      commonMistakes: [
        {
          mistake: "استخدام isLoading لإخفاء البيانات وإظهار شاشة تحميل كاملة عند كل عملية إعادة جلب في الخلفية (Background Refetch).",
          fix: "استخدم isLoading فقط للشاشة الافتتاحية الأولى، واستخدم isFetching كمؤشر ثانوي صغير في زاوية الشاشة أثناء بقاء البيانات القديمة معروضة."
        },
        {
          mistake: "الاعتماد على data === undefined للتحقق من انتهاء التحميل بدلاً من التحقق الصريح عبر isLoading أو isPending.",
          fix: "اعتمد دائماً على الحالات المنطقية الصريحة isLoading و isError لتفادي مشاكل الحالات الحدية عندما تكون البيانات المرتجعة null أو مصفوفة فارغة []."
        }
      ],
      bestPractices: [
        "صمم دائماً واجهات منفصلة للحالات الثلاث: التحميل الأولي (Skeleton)، الخطأ مع زر إعادة المحاولة (Error Alert)، والنجاح (Data Content).",
        "استخدم حالة status لمطابقة الحالات بواسطة عبارة switch نظيفة في المكونات المعقدة.",
        "وفر دائماً زراً لإعادة المحاولة (refetch()) عندما يفشل الاستعلام لتمكين المستخدم من تدارك انقطاع الإنترنت اللحظي."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "مصفوفة حالات الاستعلام في TanStack Query",
        items: [
          {
            title: "isLoading (التحميل الأولي)",
            points: [
              "يحدث فقط عند أول طلب قبل وجود أي كاش",
              "المكافئ: status === 'pending' && isFetching",
              "الاستخدام: عرض شاشات الهيكل المؤقت Skeleton Screens"
            ]
          },
          {
            title: "isFetching (نشاط الشبكة)",
            points: [
              "يتحقق كلما كان هناك طلب يسافر عبر الشبكة حالياً",
              "يشمل الطلب الأولي والتحديثات الصامتة الخلفية",
              "الاستخدام: عرض مؤشر دوران أو شريط تقدم خفيف"
            ]
          },
          {
            title: "isError (حالة التعثر)",
            points: [
              "يتحقق عند فشل دالة queryFn وإطلاق استثناء",
              "يوفر كائن error المتضمن لرسالة وتفاصيل الخلل",
              "الاستخدام: عرض رسالة تنبيه وزر إعادة المحاولة refetch()"
            ]
          }
        ]
      }
    },
    {
      id: "13-1-g",
      title: "قواعد وهندسة مفاتيح الاستعلام (Query Keys)",
      englishTitle: "Engineering Robust Query Keys & Array Dependencies",
      pronunciation: "إنجينيرينج روبست كويري كيز آند أراي ديبندنسيز",
      meaning: "الهيكلة المنهجية لمفاتيح الكاش ومزامنتها التلقائية مع معلمات البحث والترقيم",
      description:
        "في TanStack Query، تعتبر `Query Keys` هي العمود الفقري لتحديد هوية الكاش؛ فالمكتبة تتعامل مع كل مفتاح كمعرف فريد لا لبس فيه لتخزين واسترجاع وإبطال البيانات. في الإصدار الحديث (v5)، يجب أن تكون مفاتيح الاستعلام دائماً على هيئة مصفوفة (Array) حتى لو كانت مكونة من عنصر واحد (مثل: `['todos']`). القوة العظمى لمصفوفة المفتاح تكمن في قدرتها على احتواء أنواع بيانات متعددة: نصوص مجردة، وأرقام، وكائنات فلاتر معقدة (مثل: `['todos', 'list', { status: 'done', page: 2 }]`). تُعامل مكتبة TanStack الكائنات داخل المفتاح بمقارنة تسلسلية ذكية (Deterministic Hash)؛ أي أن الترتيب الداخلي لحقول الكائن لا يغير هوية المفتاح (`{ a: 1, b: 2 }` يطابق تماماً `{ b: 2, a: 1 }`). الأهم من ذلك: كلما تغيرت أي قيمة أو متغير موجود داخل مصفوفة المفتاح، يعتبر TanStack Query أن هناك استعلاماً جديداً تماماً ويقوم بجلب بياناته وتخزينه في مسار كاش منفصل تلقائياً دون الحاجة لكتابة أي useEffect.",
      analogy:
        "مفاتيح الاستعلام تشبه نظام العنونة البريدية الهرمي المتسلسل: [الدولة، المدينة، الشارع، رقم الشقة]؛ تغيير رقم الشقة فقط ينقلك فوراً إلى ساكن مختلف تماماً مع بقاء الدولة والمدينة ثابتين، وهذا بالضبط ما يفعله ['users', 'detail', userId] عند تغيير userId.",
      whyItMatters:
        "الهيكلة غير الصحيحة لمفاتيح الكاش تؤدي إما إلى تداخل البيانات وتخزين نتائج مختلفة تحت نفس الاسم، أو إلى فشل التحديث التلقائي عند تغير معايير البحث والصفحات.",
      syntax: `// القواعد المعيارية لتسمية Query Keys:
// 1. مفتاح عام لقائمة:
['todos']

// 2. مفتاح مع فلاتر فرعية:
['todos', 'list', { status: 'completed', search: 'react' }]

// 3. مفتاح تفصيلي لمورد فردي:
['todos', 'detail', todoId]`,
      simpleExample: `// مفتاح يعتمد على متغير الفئة
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export function CategoryProductsViewer() {
  const [category, setCategory] = useState('electronics');

  // يتم تضمين category في مصفوفة المفتاح لضمان إعادة الجلب التلقائي عند تبديلها
  const { data: products } = useQuery({
    queryKey: ['products', category],
    queryFn: () => fetch(\`/api/products?cat=\${category}\`).then((r) => r.json())
  });

  return (
    <div>
      <button onClick={() => setCategory('clothing')}>ملابس</button>
      <button onClick={() => setCategory('electronics')}>إلكترونيات</button>
      <p>عدد المنتجات: {products?.length || 0}</p>
    </div>
  );
}`,
      advancedExample: `// نمط مصنع مفاتيح الكاش المعماري (Query Key Factory Pattern)
// ملف مركزي يمنع الأخطاء الإملائية ويوحد استعلامات وإبطال الكاش في كل المشروع

export const todoKeys = {
  // المفتاح الجذري الشامل لكافة استعلامات المهام
  all: ['todos'] as const,
  // كافة القوائم
  lists: () => [...todoKeys.all, 'list'] as const,
  // قائمة مخصصة بفلتر محدد
  list: (filters: { status?: string; page?: number }) => [...todoKeys.lists(), filters] as const,
  // كافة تفاصيل المهام الفردية
  details: () => [...todoKeys.all, 'detail'] as const,
  // تفاصيل مهمة فردية محددة برقمها
  detail: (id: number | string) => [...todoKeys.details(), id] as const
};

// ================= استخدام المصنع داخل المكون =================
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export function AdvancedFilterView() {
  const [filters, setFilters] = useState({ status: 'active', page: 1 });

  // استخدام المفتاح المولّد من المصنع بأمان نمطي كامل
  const { data: todos } = useQuery({
    queryKey: todoKeys.list(filters),
    queryFn: async () => {
      const res = await fetch(\`/api/todos?status=\${filters.status}&page=\${filters.page}\`);
      return res.json();
    }
  });

  return (
    <div className="p-4 bg-slate-900 border rounded-xl text-white">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilters((prev) => ({ ...prev, status: 'active' }))}
          className="btn-filter"
        >
          النشطة فقط
        </button>
        <button
          onClick={() => setFilters((prev) => ({ ...prev, status: 'completed' }))}
          className="btn-filter"
        >
          المنجزة
        </button>
      </div>
      <p className="text-xs text-slate-400 font-mono">
        المفتاح الحالي في الذاكرة: {JSON.stringify(todoKeys.list(filters))}
      </p>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال نمط 'Query Key Factory' وهو المعيار المعماري الأقوى في الشركات الكبرى؛ حيث يتم حصر جميع أشكال المفاتيح في كائن مركزي موحد، مما يجعل استدعاء البيانات وإبطالها لاحقاً (invalidateQueries) آمناً ومحمياً من أخطاء الطباعة العشوائية.",
      commonMistakes: [
        {
          mistake: "تمرير المفتاح كسلسلة نصية مجردة مثل useQuery({ queryKey: 'todos' }) في الإصدار الخامس.",
          fix: "يجب دائماً أن يكون المفتاح مصفوفة في الإصدار v5: queryKey: ['todos']."
        },
        {
          mistake: "استخدام متغيرات داخل دالة queryFn دون تضمينها في مصفوفة queryKey (مثل استخدام userId في الرابط مع بقاء المفتاح ['user']).",
          fix: "أي متغير تعتمد عليه دالة الجلب ويؤثر على النتيجة يجب أن يوضع صراحة داخل مصفوفة المفتاح لضمان تجديد الكاش عند تغيره."
        }
      ],
      bestPractices: [
        "اتبع الترتيب الهرمي من العام إلى الخاص في مصفوفة المفاتيح: [المجال، النوع، المعرف/الفلاتر].",
        "طبق نمط Query Key Factory في المشاريع المتوسطة والكبيرة لتنظيم المفاتيح في مكان مركزي واحد.",
        "تذكر أن الكائنات داخل المصفوفة تقارن بمحتواها وليس بترتيب حقولها، فلا تقلق من ترتيب الخصائص داخل كائن الفلتر."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "الهيكل الهرمي لمفاتيح الاستعلام (Query Keys Hierarchy)",
        items: [
          {
            title: "المستوى العام (Root Level)",
            points: [
              "الشكل: ['todos']",
              "الغرض: يطابق كل شيء يخص المهام",
              "الاستخدام: لإبطال وتحديث كل استعلامات المهام دفعة واحدة"
            ]
          },
          {
            title: "مستوى القوائم (Lists Level)",
            points: [
              "الشكل: ['todos', 'list', { page, status }]",
              "الغرض: يطابق قائمة محددة بفلتر وترقيم معين",
              "الأثر: تغيير page أو status يولد كاشاً مستقلاً فورياً"
            ]
          },
          {
            title: "مستوى الكيان المفرد (Item Level)",
            points: [
              "الشكل: ['todos', 'detail', todoId]",
              "الغرض: يطابق سجلاً واحداً بتفاصيله الدقيقة",
              "الأثر: تعديل المهمة يبطل تفاصيلها دون التأثير على مهام أخرى"
            ]
          }
        ]
      }
    },
    {
      id: "13-1-h",
      title: "استخدام أدوات المطورين الرسمية (TanStack Query Devtools)",
      englishTitle: "Leveraging TanStack Query Devtools for Real-Time Cache Debugging",
      pronunciation: "ليفريجينج تان ستاك كويري ديف تولز فور ريل تايم كاش ديباجينج",
      meaning: "لوحة الفحص والتصحيح البصرية المدمجة في المتصفح لمراقبة سلوك الكاش",
      description:
        "`TanStack Query Devtools` هي الأداة الأكثر قيمة للمطورين أثناء بناء وتطوير تطبيقات React المعتمدة على خوادم الويب. تظهر الأداة كأيقونة عائمة صغيرة في زاوية الشاشة (عادة بشعار TanStack المميز)، وبمجرد النقر عليها تنبثق لوحة تحكم كاملة تعرض: 1) قائمة حية ومصنفة لونياً بكافة الاستعلامات الموجودة في الذاكرة حالياً، 2) حالة كل استعلام (Fresh بالأخضر، Stale بالأصفر، Fetching بالأزرق، Inactive بالرمادي، Paused بالبنفسجي)، 3) عارض JSON تفاعلي لمحتوى البيانات المحفوظة في الكاش في اللحظة الراهنة، 4) لوحة تحكم تسمح بإعادة الجلب اليدوي (Refetch)، أو إبطال الصلاحية (Invalidate)، أو إعادة التعيين (Reset)، أو الحذف الكامل من الذاكرة (Remove)، أو محاكاة حالات التحميل البطيء لاختبار تجربة المستخدم. تعمل الأداة تلقائياً في بيئة التطوير وتُستبعد ذاتياً في بيئة الإنتاج.",
      analogy:
        "لوحة Devtools تشبه لوحة العدادات وأجهزة القياس التشخيصية في طائرة حديثة؛ تخبر الطيار في كل لحظة بكمية الوقود في كل خزان (بيانات الكاش)، وضغط المحركات (طلبات الشبكة الجارية)، ودرجة الحرارة، مما يتيح له اكتشاف وتصحيح أي خلل في ثوانٍ معدودة.",
      whyItMatters:
        "توفر ساعات طويلة من التخمين واستخدام `console.log` العشوائي؛ إذ تكشف لك في الحال لماذا تم إرسال طلب شبكة إضافي، ولماذا تعتبر البيانات قديمة (Stale)، وما هي المعاملات الفعلية المخزنة في مفتاح الكاش.",
      syntax: `// دمج لوحة Devtools في التطبيق:
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools
    initialIsOpen={false}        // هل تفتح اللوحة تلقائياً
    buttonPosition="bottom-left" // موقع زر الفتح
  />
</QueryClientProvider>`,
      simpleExample: `// مثال دمج Devtools في تطبيق React بسيط
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SimpleUsersList } from './SimpleUsersList.jsx';

const queryClient = new QueryClient();

export function AppWithDevtools() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">تطبيق فحص الكاش</h1>
        <SimpleUsersList />
      </div>
      {/* ظهور زر Devtools في أسفل يسار الشاشة لتصحيح الكاش */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}`,
      advancedExample: `// محاكاة بصرية تفاعلية تجسد عمل لوحة Devtools داخل واجهة المستخدم
import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export function SimulatedDevtoolsInspector() {
  const queryClient = useQueryClient();
  const [filterMode, setFilterMode] = useState('all');

  // استخراج ملخص الاستعلامات الحالية من كاش المحرك المركزي
  const queryCache = queryClient.getQueryCache();
  const allQueries = queryCache.getAll();

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs font-mono text-slate-300 max-w-xl mx-auto shadow-2xl">
      {/* ترويسة محاكي Devtools */}
      <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-white text-sm">TanStack Query Inspector</span>
        </div>
        <span className="text-[11px] text-slate-500">
          إجمالي الاستعلامات: {allQueries.length}
        </span>
      </div>

      {/* قائمة الاستعلامات المسجلة في الكاش حالياً */}
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {allQueries.length === 0 ? (
          <p className="text-slate-500 text-center py-4">لا توجد استعلامات نشطة في الكاش حالياً.</p>
        ) : (
          allQueries.map((q) => {
            const keyStr = JSON.stringify(q.queryKey);
            const state = q.state;
            const isStale = q.isStale();

            return (
              <div
                key={keyStr}
                className="p-2.5 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center justify-between"
              >
                <div>
                  <span className="text-emerald-400 font-bold block">{keyStr}</span>
                  <div className="flex gap-2 mt-1 text-[10px]">
                    <span className={\`px-1.5 py-0.5 rounded \${
                      isStale ? 'bg-amber-950 text-amber-300' : 'bg-emerald-950 text-emerald-300'
                    }\`}>
                      {isStale ? 'Stale (متقادم)' : 'Fresh (طازج)'}
                    </span>
                    <span className="text-slate-400">الحالة: {state.status}</span>
                    <span className="text-slate-400">مرات التحديث: {state.dataUpdateCount}</span>
                  </div>
                </div>

                <div className="flex gap-1.5">
                  <button
                    onClick={() => q.fetch()}
                    className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-[10px]"
                  >
                    Refetch
                  </button>
                  <button
                    onClick={() => queryClient.invalidateQueries({ queryKey: q.queryKey })}
                    className="px-2 py-1 bg-rose-950 hover:bg-rose-900 text-rose-300 rounded text-[10px]"
                  >
                    Invalidate
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال كيفية دمج ReactQueryDevtools واستغلال واجهات QueryClient البرمجية لفحص الكاش برمجياً واستعراض الاستعلامات المسجلة وحالات الصلاحية (Fresh/Stale) مع إمكانية إطلاق أفعال التحكم اليدوية.",
      commonMistakes: [
        {
          mistake: "الخوف من أن ReactQueryDevtools ستزيد حجم التطبيق في بيئة الإنتاج للمستخدمين النهائيين.",
          fix: "في الإصدار v5، يتم التخلص التلقائي من DevTools (Dead Code Elimination) أثناء بناء الإنتاج في معظم أدوات التحزيم الحديثة مثل Vite و Next.js."
        },
        {
          mistake: "إهمال مراقبة عمود 'Stale' في Devtools وملاحظة تحول الاستعلام للأصفر فورياً بسبب ترك staleTime بالقيمة الافتراضية 0.",
          fix: "استخدم Devtools لمراقبة متى تنتهي صلاحية البيانات واضبط staleTime بقيم واقعية تلائم كل شاشة."
        }
      ],
      bestPractices: [
        "افتح لوحة Devtools أثناء مرحلة التطوير دائماً لمراقبة عدد طلبات الشبكة الفعلية الناتجة عن تنقلاتك بين الشاشات.",
        "جرب زر 'Invalidate' داخل Devtools لتتأكد من أن مكوناتك قادرة على إعادة الجلب والتحديث بسلاسة دون انهيار الواجهة.",
        "اضبط موقع الزر عبر buttonPosition='bottom-left' أو 'bottom-right' بما لا يتعارض مع الأزرار العائمة في تصميم تطبيقك."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "الحالات اللونية في TanStack Query Devtools",
        items: [
          {
            title: "الأخضر: Fresh (طازج)",
            points: [
              "البيانات حديثة ولم تنتهِ مدة staleTime",
              "لن يتم إرسال أي طلب شبكة إذا طُلبت مجدداً",
              "تُسترجع من الذاكرة فوراً في 0 مللي ثانية"
            ]
          },
          {
            title: "الأصفر: Stale (متقادم)",
            points: [
              "انتهت مدة staleTime وتعتبر البيانات قديمة محلياً",
              "ستُعرض فوراً للمستخدم ولكن مع جلب نسخة أحدث في الخلفية",
              "الحالة الافتراضية فور وصول أي بيانات إذا staleTime = 0"
            ]
          },
          {
            title: "الأزرق: Fetching (قيد الجلب)",
            points: [
              "يوجد طلب شبكة نشط حالياً لجلب هذا المفتاح",
              "تظهر أثناء التحميل الأولي أو التحديث في الخلفية",
              "مؤشر حي على التواصل مع الخادم السحابي"
            ]
          },
          {
            title: "الرمادي: Inactive (خامل)",
            points: [
              "البيانات محفوظة في الكاش ولكن لا يوجد أي مكون يستمع إليها حالياً",
              "يبدأ عداد gcTime في العد التنازلي لحذفها",
              "إذا عاد المكون إليها قبل انتهاء gcTime تُسترجع فوراً"
            ]
          }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q13-1-1",
      question: "ما هو الفارق الجوهري بين isLoading و isFetching في TanStack Query؟",
      options: [
        "لا يوجد أي فرق بينهما وهما اسمان لنفس الخاصية",
        "isLoading يكون true فقط في أول طلب شبكة عندما لا توجد أي بيانات سابقة في الكاش، بينما isFetching يكون true مع كل طلب شبكة حتى أثناء التحديث في الخلفية",
        "isLoading يخص دالة fetch فقط بينما isFetching يخص مكتبة axios",
        "isFetching يعمل فقط في بيئة الإنتاج"
      ],
      correctAnswer: 1,
      explanation:
        "isLoading يمثل مرحلة الحرمان من البيانات (الطلب الأولي المطلق)، بينما isFetching يمثل أي حركة نشطة على الشبكة لجلب البيانات سواء للمرة الأولى أو أثناء التحديث الخلفي الصامت (Background Refetch) مع بقاء البيانات القديمة معروضة للمستخدم."
    },
    {
      id: "q13-1-2",
      question: "ماذا يحدث عند تغيير قيمة متغير موجود داخل مصفوفة queryKey (مثل تغيير id في ['user', id])؟",
      options: [
        "يحدث خطأ ويتوقف التطبيق لأن المفاتيح يجب أن تكون نصوصاً ثابتة",
        "يتجاهل TanStack Query التغيير ويحتفظ بنفس البيانات السابقة",
        "يعتبر TanStack Query أن هناك استعلاماً جديداً تماماً ويقوم بجلب بياناته وتخزينها تحت المفتاح الجديد تلقائياً",
        "يتم مسح كامل الكاش في التطبيق"
      ],
      correctAnswer: 2,
      explanation:
        "في TanStack Query، تعتبر مصفوفة queryKey مصفوفة تبعيات (Dependencies Array) شبيهة بتبعيات useEffect؛ فأي تغير في عناصرها يدفع المكتبة للتعامل مع المفتاح الجديد كاستعلام منفصل وجلب بياناته ومزامنتها تلقائياً."
    },
    {
      id: "q13-1-3",
      question: "ما هي القيمة الافتراضية لخاصية staleTime في TanStack Query v5 إذا لم تُعدل يدوياً؟",
      options: [
        "5 دقائق (300,000 مللي ثانية)",
        "دقيقة واحدة (60,000 مللي ثانية)",
        "0 مللي ثانية (تعتبر البيانات متقادمة Stale فور وصولها من الخادم)",
        "ساعة كاملة"
      ],
      correctAnswer: 2,
      explanation:
        "القيمة الافتراضية لـ staleTime هي 0 مللي ثانية؛ وهذا يعني أنه بمجرد وصول البيانات وعرضها، تعتبر 'Stale' فوراً، وأي محاولة وصول لاحقة ستؤدي إلى إطلاق طلب تحديث في الخلفية مع عرض البيانات الموجودة، ما لم يقم المطور برفع قيمة staleTime."
    }
  ],
  exercise: {
    title: "تمرين تطبيقي: بناء قارئ مقالات ذكي باستخدام useQuery وربط المفاتيح الديناميكية",
    instruction:
      "قم ببناء مكون قارئ منشورات تفاعلي يستخدم useQuery لجلب المنشور بناءً على معرف ديناميكي (postId). قم بالتعامل مع حالات التحميل والخطأ وإظهار مؤشر تحديث الخلفية (isFetching)، وتمرير إشارة الإلغاء signal إلى دالة fetch.",
    starterCode: `import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export function PostReaderExercise() {
  const [postId, setPostId] = useState(1);

  // TODO: استدع useQuery لجلب بيانات المقال من:
  // https://jsonplaceholder.typicode.com/posts/\${postId}
  // مع تضمين postId في مصفوفة المفتاح وتمرير signal في queryFn

  return (
    <div className="p-4 border rounded-xl max-w-md mx-auto">
      <h3 className="font-bold text-lg mb-2">قارئ المقالات الذكي</h3>
      {/* واجهة التبديل والعرض */}
    </div>
  );
}`,
    hints: [
      "استخدم هيكل useQuery v5: useQuery({ queryKey: ['post', postId], queryFn: ({ signal }) => ... })",
      "افحص if (!res.ok) throw new Error(...) داخل دالة الجلب.",
      "استخرج كلاً من: data, isLoading, isError, error, isFetching.",
      "أظهر نص 'جارٍ التحديث في الخلفية' عندما يكون isFetching صحيحاً بينما isLoading خاطئ."
    ],
    solutionCode: `import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export function PostReaderExercise() {
  // حالة المعرف المحدد محلياً
  const [postId, setPostId] = useState(1);

  // استدعاء useQuery المكتمل وفق المعايير القياسية
  const {
    data: post,
    isLoading,
    isFetching,
    isError,
    error,
    refetch
  } = useQuery({
    // المفتاح يشمل المعرف المتغير لضمان إعادة الجلب عند تغيره
    queryKey: ['post', postId],
    // دالة الجلب مع تمرير signal لمنع تضارب الطلبات
    queryFn: async ({ signal }) => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${postId}\`, {
        signal
      });
      if (!res.ok) {
        throw new Error(\`تعذر تحميل المقال رقم \${postId}\`);
      }
      return res.json();
    },
    // تعيين فترة الحداثة لدقيقتين
    staleTime: 1000 * 60 * 2
  });

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white shadow-xl">
      {/* شريط الأزرار والتنقل */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-base text-emerald-400">قارئ المقالات الذكي</h3>
        <div className="flex gap-1">
          {[1, 2, 3, 4].map((id) => (
            <button
              key={id}
              onClick={() => setPostId(id)}
              className={\`px-2.5 py-1 text-xs font-bold rounded transition-all \${
                postId === id ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }\`}
            >
              #{id}
            </button>
          ))}
        </div>
      </div>

      {/* مؤشر الجلب في الخلفية الخفيف */}
      {isFetching && !isLoading && (
        <div className="text-[11px] text-amber-400 font-mono mb-2 flex items-center gap-1.5 animate-pulse">
          <span>⚡ يتم تحديث المقال في الخلفية...</span>
        </div>
      )}

      {/* معالجة حالة التحميل الأولي */}
      {isLoading && (
        <div className="p-6 bg-slate-950 rounded-xl text-center space-y-2">
          <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-slate-400">جارٍ جلب المقال من الخادم...</p>
        </div>
      )}

      {/* معالجة حالة الخطأ */}
      {isError && (
        <div className="p-4 bg-rose-950/50 border border-rose-800 rounded-xl text-xs text-rose-300 space-y-2">
          <p className="font-bold">⚠️ عذراً، حدث خطأ:</p>
          <p>{error.message}</p>
          <button
            onClick={() => refetch()}
            className="px-3 py-1 bg-rose-700 hover:bg-rose-600 text-white rounded text-[11px] font-bold"
          >
            إعادة المحاولة
          </button>
        </div>
      )}

      {/* عرض محتوى المقال الناجح */}
      {post && !isLoading && (
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 space-y-2">
          <span className="text-[10px] text-emerald-400 font-mono font-bold block">
            المقال الموثق #{post.id}
          </span>
          <h4 className="font-bold text-sm text-slate-100 capitalize">{post.title}</h4>
          <p className="text-xs text-slate-400 leading-relaxed">{post.body}</p>
        </div>
      )}
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة أساسيات TanStack Query في منظومة React",
    description: "الدليل التأسيسي الشامل لتهيئة العميل واستدعاء useQuery وإدارة دورة حياة الكاش.",
    elements: [
      {
        title: "1. النواة والمزود (Core & Provider)",
        subtitle: "QueryClient & QueryClientProvider",
        badge: "التأسيس المعماري",
        color: "purple",
        details: [
          "QueryClient: العقل المركزي لإدارة QueryCache والسياسات الافتراضية",
          "QueryClientProvider: تغليف جذر التطبيق لبث سياق الكاش للشاشات",
          "Devtools: لوحة الفحص البصرية في أسفل الشاشة لتشخيص الكاش"
        ]
      },
      {
        title: "2. خطاف الاستعلام (useQuery)",
        subtitle: "Declarative Data Fetching",
        badge: "محرك الجلب",
        color: "emerald",
        details: [
          "queryKey: مصفوفة فريدة تمثل عنوان الكاش ومصفوفة التبعيات",
          "queryFn: دالة غير متزامنة تجلب البيانات وتدعم AbortSignal",
          "الاشتراك التلقائي: استرجاع فوري من الكاش ومزامنة في الخلفية"
        ]
      },
      {
        title: "3. دورة الحياة والمؤشرات (Lifecycle)",
        subtitle: "Loading, Fetching & Error",
        badge: "مؤشرات الحالة",
        color: "blue",
        details: [
          "isLoading: أول طلب فقط بدون أي بيانات سابقة لعرض الهياكل",
          "isFetching: أي نشاط شبكة جارٍ حالياً لعرض مؤشر صامت",
          "isError & refetch: استخراج الخطأ وتوفير زر إعادة المحاولة اليدوية"
        ]
      },
      {
        title: "4. هندسة المفاتيح (Key Architecture)",
        subtitle: "Array Keys & Key Factories",
        badge: "هوية الكاش",
        color: "amber",
        details: [
          "مصفوفات المفاتيح: دعم النصوص والأرقام وكائنات الفلاتر",
          "مقارنة حتمية: الترتيب داخل الكائن لا يؤثر على هوية المفتاح",
          "Key Factory: تنظيم المفاتيح في مكان موحد لمنع التضارب"
        ]
      }
    ]
  }
};
