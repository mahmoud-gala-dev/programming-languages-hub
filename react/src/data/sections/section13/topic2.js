// src/data/sections/section13/topic2.js

export const topic2 = {
  id: "13-2",
  title: "التخزين المؤقت وإعادة الجلب في TanStack Query",
  englishTitle: "Caching Mechanisms & Smart Refetching Strategies",
  description:
    "استكشاف معماري عميق لمحرك التخزين المؤقت (Query Cache) واستراتيجيات التحديث التلقائي في TanStack Query. يغطي هذا القسم الفوارق الجوهرية بين وقت الحداثة (staleTime) ووقت تنظيف الذاكرة (gcTime)، آليات إعادة الجلب التلقائية عند التركيز على نافذة المتصفح أو استعادة الإنترنت، ضبط سياسات إعادة المحاولة الذاتية بالانحدار الأسي (Exponential Backoff)، تنفيذ الاستعلامات المعتمدة والمتسلسلة بخاصية enabled، تقنيات إلغاء طلبات الشبكة تلقائياً لتوفير الموارد، والجلب المسبق الذكي (Prefetching) لتوفير تنقلات فورية بزمن 0 مللي ثانية.",
  subtopics: [
    {
      id: "13-2-a",
      title: "مفهوم Query Cache وبنية تخزين الاستعلامات",
      englishTitle: "Query Cache Architecture & Internal Memory Store",
      pronunciation: "كويري كاش آركيتكتشر آند إنترنال ميموري ستور",
      meaning: "الهيكل الداخلي في الذاكرة الذي يحفظ البيانات والاستعلامات واشتراكات المكونات",
      description:
        "`QueryCache` هو الكائن الداخلي في الذاكرة الذي يقوم عميل `QueryClient` بإنشائه وإدارته، وهو بمثابة خريطة مركزية متطورة (Key-Value Store) تخزن كافة الاستعلامات وحالاتها وبياناتها وسجلاتها الزمنية. كل عنصر في الكاش يُعرف باسم `Query`، ويحتوي على: 1) `queryKey`: المصفوفة المعرفة، 2) `queryHash`: بصمة تسلسلية فريدة للمفتاح تُستخدم للبحث السريع بزمن O(1)، 3) `state`: كائن الحالة الكامل الذي يحتوي على (data, status, error, dataUpdatedAt, errorUpdatedAt, fetchStatus)، 4) قائمة المشتركين (Observers): المكونات التي تستدعي useQuery وتستمع لهذا المفتاح حالياً. بمجرد إلغاء تركيب جميع المكونات المشتركة، يتحول الاستعلام إلى حالة خاملة (Inactive) ويبدأ عداد تنظيف الذاكرة في العمل. فهم هذه البنية يمنح المطور قدرة فائقة على التحكم في تدفق البيانات ومراقبة استهلاك الذاكرة بدقة.",
      analogy:
        "QueryCache يشبه خزانة أمانات مركزية في بنك؛ كل عميل (استعلام) لديه صندوق أمانات برقمه الخاص (queryHash)، وبداخله محتوياته القيمة (البيانات) وتاريخ آخر فحص، مع وجود سجل خارجي يوثق كم شخصاً يقف أمام هذا الصندوق الآن لمشاهدته (Observers).",
      whyItMatters:
        "إدراك كيفية تخزين الاستعلامات في الذاكرة يمكنك من مشاركة البيانات بين شاشات التطبيق المختلفة دون أي تكرار، واسترجاع البيانات المخزنة فورياً دون الحاجة لتمرير الخصائص بين المكونات.",
      syntax: `// الوصول المباشر لكاش الاستعلامات عبر عميل الكاش:
const cache = queryClient.getQueryCache();

// البحث عن استعلام محدد بالمفتاح:
const query = cache.find({ queryKey: ['users'] });

// استخراج كافة الاستعلامات المخزنة حالياً في الذاكرة:
const allQueries = cache.getAll();`,
      simpleExample: `// استعراض محتوى كاش الاستعلامات برمجياً في المكون
import React from 'react';
import { useQueryClient } from '@tanstack/react-query';

export function CacheStatsViewer() {
  // الحصول على عميل الاستعلامات من السياق
  const queryClient = useQueryClient();

  // استخراج كاش الاستعلامات
  const cache = queryClient.getQueryCache();
  // حساب عدد الاستعلامات المحفوظة حالياً في الذاكرة
  const queriesCount = cache.getAll().length;

  return (
    <div className="p-4 bg-slate-900 border rounded-xl text-white">
      <h4 className="font-bold text-sm mb-1">إحصائيات ذاكرة الكاش</h4>
      <p className="text-xs text-slate-400">
        عدد الاستعلامات النشطة والمخزنة مؤقتاً: <span className="font-mono text-emerald-400">{queriesCount}</span>
      </p>
    </div>
  );
}`,
      advancedExample: `// مراقبة أحداث وتغيرات الكاش المركزية عبر مستمع أحداث QueryCache
import React, { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export function RealtimeCacheObserver() {
  const queryClient = useQueryClient();
  const [cacheLog, setCacheLog] = useState([]);

  useEffect(() => {
    const cache = queryClient.getQueryCache();

    // الاشتراك في مستمع الأحداث العام لكاش الاستعلامات
    const unsubscribe = cache.subscribe((event) => {
      // بناء سجل بالحدث الجديد
      const logEntry = {
        id: Date.now() + Math.random(),
        type: event.type, // 'added' | 'removed' | 'updated'
        key: JSON.stringify(event.query.queryKey),
        timestamp: new Date().toLocaleTimeString()
      };

      // إضافة السجل للأحداث المعروضة
      setCacheLog((prev) => [logEntry, ...prev.slice(0, 4)]);
    });

    // إلغاء الاشتراك عند تفكيك المكون لمنع التسرب
    return () => unsubscribe();
  }, [queryClient]);

  return (
    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs">
      <h5 className="font-bold text-cyan-400 mb-2">مراقب نبضات الكاش (Cache Pulse):</h5>
      <div className="space-y-1">
        {cacheLog.map((log) => (
          <div key={log.id} className="flex justify-between text-slate-300 bg-slate-900/60 p-2 rounded border border-slate-800">
            <span className="text-emerald-400">[{log.type}]</span>
            <span className="truncate max-w-[200px]">{log.key}</span>
            <span className="text-slate-500">{log.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثالان البنية المفتوحة لكائن `QueryCache`؛ حيث يمكن للمطور قراءة جميع الاستعلامات المخزنة، بل والاشتراك عبر `cache.subscribe` لمراقبة إضافة أو إزالة أو تحديث أي مفتاح في الوقت الفعلي لبناء أدوات تشخيص وتتبع مخصصة.",
      commonMistakes: [
        {
          mistake: "محاولة تعديل محتوى الكاش مباشرة عبر كتابة queryCache.queries = ... يدوياً.",
          fix: "استخدم دائماً دوال العميل الرسمية مثل queryClient.setQueryData أو queryClient.removeQueries لتعديل الكاش بأمان."
        },
        {
          mistake: "الاعتقاد بأن مسح الكاش من المتصفح يحذف الاستعلامات النشطة التي يستمع إليها مكون معروض حالياً.",
          fix: "إذا كان المكون لا يزال مركباً على الشاشة، فإن إبطال أو مسح الكاش سيدفعه فوراً لإعادة جلب البيانات من الخادم مجدداً."
        }
      ],
      bestPractices: [
        "استغل وجود كاش الاستعلامات المركزي لمشاركة البيانات بين الشاشات دون الحاجة لإعادة طلبها من الـ API.",
        "استخدم دالة queryClient.getQueryData(['key']) لقراءة البيانات من الكاش متزامناً داخل الدوال والأحداث دون الحاجة لـ useQuery."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "التشريح الداخلي لكائن الاستعلام في QueryCache",
        items: [
          {
            title: "queryKey & queryHash",
            points: [
              "queryKey: المصفوفة الأصلية المعرفة من المطور",
              "queryHash: بصمة تسلسلية للبحث المباشر بزمن O(1)",
              "تضمن تطابق الكائنات بغض النظر عن ترتيب الخصائص"
            ]
          },
          {
            title: "state (حالة الاستعلام)",
            points: [
              "data: البيانات الفعلية المسترجعة من الخادم",
              "dataUpdatedAt: طابع زمني دقيق لوقت آخر تحديث",
              "status: حالة الاستعلام (pending, error, success)"
            ]
          },
          {
            title: "observers (المراقبون)",
            points: [
              "قائمة المكونات النشطة المشتركة في هذا المفتاح",
              "عندما يصل العدد لـ 0 يتحول الاستعلام إلى Inactive",
              "تبدأ مهلة gcTime لحذفه من الذاكرة إذا لم يعد أحد"
            ]
          }
        ]
      }
    },
    {
      id: "13-2-b",
      title: "إعداد وفهم staleTime وتأثيره على الشبكة",
      englishTitle: "Configuring staleTime & Network Conservation",
      pronunciation: "كونفيجرينج ستيل تايم آند نيتوورك كونزيرفيشن",
      meaning: "تحديد مدة حداثة البيانات التي تمنع إطلاق أي طلبات شبكة مكررة",
      description:
        "`staleTime` هي المعلمة الأهم على الإطلاق في ضبط أداء وتصرفات TanStack Query. تمثل هذه القيمة (بالمللي ثانية) 'المدة الزمنية التي تظل البيانات خلالها تعتبر طازجة وحديثة (Fresh) منذ لحظة وصولها من الخادم'. طالما أن الاستعلام في حالة 'Fresh' (أي أن الوقت المنقضي أقل من staleTime)، فإن أي استدعاء جديد للمكون أو إعادة تركيبه (Remount) أو إعادة التركيز على نافذة المتصفح سيقوم بإرجاع البيانات المحفوظة في الكاش فوراً في 0 مللي ثانية دون إرسال أي طلب إلى الشبكة نهائياً! وبمجرد انقضاء هذه المدة، تتحول البيانات إلى حالة 'Stale' (متقادمة)؛ وفي هذه الحالة، عند طلبها مجدداً، تُعرض البيانات القديمة فوراً لتفادي تجميد الواجهة مع إطلاق طلب شبكة صامت في الخلفية (Background Refetch) لتحديثها تلقائياً. القيمة الافتراضية هي 0، ويمكن تعيينها بقيمة خاصة لكل استعلام أو جعلها `Infinity` للبيانات الثابتة كقوائم الدول والعملات.",
      analogy:
        "staleTime تشبه تاريخ صلاحية الحليب الطازج؛ خلال الأيام الأولى للصلاحية تشرب منه فوراً دون تردد ودون الحاجة لفحصه في المعمل (Fresh). بعد انتهاء التاريخ، قد تتذوق رشفة سريعة للتأكد ولكنك تطلب زجاجة جديدة فوراً من المتجر (Stale & Refetch).",
      whyItMatters:
        "ضبط staleTime بقيمة مدروسة (مثل 3 إلى 5 دقائق) يوفر آلاف استدعاءات الـ API غير المبررة، ويخفض فواتير الخوادم السحابية، ويجعل الانتقال بين شاشات وصفحات التطبيق فورياً دون أي تأخير أو وميض تحميل.",
      syntax: `// ضبط staleTime في useQuery:
const { data } = useQuery({
  queryKey: ['countries'],
  queryFn: fetchCountries,
  staleTime: 1000 * 60 * 60, // صالحة لمدة ساعة كاملة
  // أو للبيانات التي لا تتغير أبداً:
  // staleTime: Infinity
});`,
      simpleExample: `// استعلام لبيانات ثابتة مع staleTime غير محدود
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export function CurrencySelector() {
  const { data: currencies = [] } = useQuery({
    queryKey: ['currencies'],
    queryFn: async () => {
      const res = await fetch('/api/currencies');
      return res.json();
    },
    // قائمة العملات ثابتة ولا تتغير، نجعلها صالحة للأبد طوال الجلسة
    staleTime: Infinity
  });

  return (
    <select className="p-2 border rounded">
      {currencies.map((c) => (
        <option key={c.code} value={c.code}>
          {c.name} ({c.symbol})
        </option>
      ))}
    </select>
  );
}`,
      advancedExample: `// استعلام يقارن عملياً بين البيانات الطازجة والمتقادمة مع مؤقت زمني حي
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

export function StaleTimeDemoWidget() {
  const STALE_LIMIT = 15; // 15 ثانية لتسهيل التجربة البصرية
  const [secondsLeft, setSecondsLeft] = useState(STALE_LIMIT);

  const { data, dataUpdatedAt, isFetching, refetch } = useQuery({
    queryKey: ['server-time-sample'],
    queryFn: async () => {
      // محاكاة تأخير شبكة 600ms
      await new Promise((r) => setTimeout(r, 600));
      return { timestamp: new Date().toLocaleTimeString(), randomVal: Math.floor(Math.random() * 1000) };
    },
    staleTime: 1000 * STALE_LIMIT
  });

  // حساب العد التنازلي للحداثة في الذاكرة
  useEffect(() => {
    const timer = setInterval(() => {
      if (dataUpdatedAt) {
        const elapsed = Math.floor((Date.now() - dataUpdatedAt) / 1000);
        const remaining = Math.max(0, STALE_LIMIT - elapsed);
        setSecondsLeft(remaining);
      }
    }, 500);
    return () => clearInterval(timer);
  }, [dataUpdatedAt]);

  const isFresh = secondsLeft > 0;

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-sm">مختبر staleTime الحي</h4>
        <span className={\`px-2 py-0.5 rounded text-xs font-bold font-mono \${
          isFresh ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-400 border border-amber-800'
        }\`}>
          {isFresh ? \`Fresh (طازج: \${secondsLeft}s)\` : 'Stale (متقادم)'}
        </span>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 text-xs">
        <p>القيمة المستلمة: <span className="font-mono text-emerald-400">{data?.randomVal}</span></p>
        <p>وقت جلب البيانات: <span className="font-mono text-slate-400">{data?.timestamp}</span></p>
      </div>

      <div className="mt-3 flex gap-2">
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-xs font-bold rounded-lg transition-all"
        >
          {isFetching ? 'جارٍ الجلب...' : 'إعادة الجلب اليدوي 🔄'}
        </button>
      </div>

      <p className="text-[11px] text-slate-400 mt-3">
        💡 طالما العداد &gt; 0، لن ترسل React Query أي طلب جديد حتى لو قمت بتبديل الصفحات!
      </p>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم سلوك `staleTime` عبر مؤقت حي: خلال الـ 15 ثانية الأولى تكون البيانات 'Fresh' ومحمية من أي طلب شبكة إضافي، وبمجرد وصول العداد للصفر تصبح 'Stale'، مما يجعل أي حدث قادم يتولى جلب نسخة حديثة بهدوء في الخلفية.",
      commonMistakes: [
        {
          mistake: "ترك staleTime بقيمته الافتراضية 0 في تطبيق كامل، ثم الشكوى من أن التطبيق يرسل طلبات شبكة كثيرة جداً مع كل نقرة.",
          fix: "حدد قيمة staleTime افتراضية معقولة في QueryClient (مثل دقيقة واحدة أو دقيقتين) لمعظم استعلامات التطبيق."
        },
        {
          mistake: "تعيين staleTime طويل جداً لبيانات مالية أو حجوزات متغيرة بالثانية.",
          fix: "للبيانات شديدة الحساسية للتزامن، اترك staleTime: 0 أو استخدم تقنيات الـ Polling وتدفقات WebSockets."
        }
      ],
      bestPractices: [
        "عيّن staleTime: Infinity للبيانات المرجعية الثابتة مثل قوائم الدول والمدن والعملات وإعدادات النظام الثابتة.",
        "عيّن staleTime بين 2 إلى 5 دقائق لبيانات لوحات التحكم (Dashboards) والملفات الشخصية وقوائم المقالات.",
        "تذكر: staleTime يتحكم في قرار 'هل نرسل طلب شبكة؟'، بينما gcTime يتحكم في 'هل نحذف البيانات من الذاكرة؟'."
      ],
      visualInfographic: {
        type: "flowchart",
        title: "منطق فحص staleTime عند استدعاء المكون",
        nodes: [
          { id: "1", label: "مكون يطلب مفتاح كاش معين\nuseQuery({ queryKey })", shape: "box", highlight: "purple" },
          { id: "2", label: "هل مضى وقت < staleTime\nمنذ آخر استلام؟", shape: "diamond" },
          { id: "3", label: "الحالة: Fresh (طازجة)", shape: "pill", highlight: "green" },
          { id: "4", label: "الحالة: Stale (متقادمة)", shape: "pill", highlight: "amber" },
          { id: "5", label: "إرجاع بيانات الكاش فوراً\nصفر طلبات شبكة (0ms)", shape: "box", highlight: "green" },
          { id: "6", label: "عرض بيانات الكاش القديمة فوراً\n+ إطلاق طلب شبكة صامت بالخلفية", shape: "box", highlight: "blue" }
        ],
        connections: [
          { from: "1", to: "2" },
          { from: "2", to: "3", label: "نعم" },
          { from: "2", to: "4", label: "لا" },
          { from: "3", to: "5" },
          { from: "4", to: "6" }
        ]
      }
    },
    {
      id: "13-2-c",
      title: "إعداد وفهم gcTime ودورة حياة تنظيف الذاكرة",
      englishTitle: "Configuring gcTime & Garbage Collection Lifecycle",
      pronunciation: "كونفيجرينج جي سي تايم آند جاربدج كوليكشن لايف سايكل",
      meaning: "إدارة زمن بقاء البيانات المهجورة في الذاكرة ومسحها التلقائي لتوفير الموارد",
      description:
        "`gcTime` (المعروف في الإصدارات القديمة باسم `cacheTime`) هو اختصار لـ 'Garbage Collection Time'، ويمثل المدة الزمنية (بالمللي ثانية) التي يحتفظ خلالها TanStack Query ببيانات الاستعلام في ذاكرة الكاش بعد أن يصبح الاستعلام 'خاملاً' (Inactive). يُصنف الاستعلام كخامل بمجرد إلغاء تركيب (Unmount) جميع المكونات التي كانت تستمع إليه في شجرة الواجهة (أي أن عدد الـ Observers أصبح صفراً، مثل انتقال المستخدم لصفحة أخرى). القيمة الافتراضية لـ `gcTime` هي 5 دقائق (300,000 مللي ثانية). إذا عاد المستخدم إلى الصفحة قبل انقضاء هذه الدقائق الخمس، يجد البيانات موجودة فوراً في الذاكرة دون أي وميض تحميل أبيض. أما إذا انقضت الدقائق الخمس دون أي استماع، يقوم المحرك بمسح الاستعلام بالكامل من الذاكرة الرامية لتحرير المساحة، وفي حال عاد المستخدم بعدها سيضطر لرؤية مؤشر التحميل الأولي (isLoading) مجدداً.",
      analogy:
        "gcTime يشبه مهلة حجز طاولة في مطعم بعد مغادرة الزبون؛ إذا خرج الزبون للرد على هاتفه وأبلغ الجرسون (Inactive)، يترك الجرسون الطاولة محجوزة له لمدة 10 دقائق (gcTime). إذا عاد خلالها يجد كرسيه بانتظاره، أما إذا تأخر لأكثر من 10 دقائق تُمسح الطاولة وتُعطى لزبون آخر.",
      whyItMatters:
        "حساب gcTime المناسب يضمن توازناً عبقرياً: توفير تجربة انتقال فورية وسريعة جداً عند الرجوع للصفحات السابقة، مع حماية متصفح المستخدم من استنزاف الذاكرة العشوائية وتجمد الجهاز عند تصفح مئات الصفحات.",
      syntax: `// ضبط gcTime للاحتفاظ بالبيانات في الذاكرة لمدة 15 دقيقة:
const { data } = useQuery({
  queryKey: ['large-dataset'],
  queryFn: fetchBigData,
  gcTime: 1000 * 60 * 15 // 15 دقيقة
});`,
      simpleExample: `// مثال لضبط مدة الاحتفاظ بالكاش في الذاكرة
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export function ProductDetailsQuick({ productId }) {
  const { data: product } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetch(\`/api/products/\${productId}\`).then((r) => r.json()),
    // الاحتفاظ بالمنتج في الذاكرة لـ 10 دقائق بعد مغادرة صفحة التفاصيل
    gcTime: 1000 * 60 * 10
  });

  return (
    <div className="p-4 border rounded">
      <h4>{product?.name}</h4>
      <p>{product?.price} ر.س</p>
    </div>
  );
}`,
      advancedExample: `// محاكاة توضح دورة حياة gcTime عند فك وإعادة تركيب المكون
import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

// المكون الذي يستمع للكاش
function TemporaryChildWidget() {
  const { data } = useQuery({
    queryKey: ['temp-session-data'],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 800));
      return { msg: 'بيانات الجلسة المؤقتة', generatedAt: new Date().toLocaleTimeString() };
    },
    // تفعيل gcTime لدقيقة واحدة فقط لاختبار التطهير
    gcTime: 1000 * 60,
    staleTime: 1000 * 30
  });

  return (
    <div className="p-3 bg-emerald-950/40 border border-emerald-800 rounded-lg text-emerald-300 text-xs">
      <p className="font-bold">{data?.msg}</p>
      <p className="text-[10px] text-slate-400">طابع الإنشاء: {data?.generatedAt}</p>
    </div>
  );
}

// المكون الأب الذي يتحكم في إظهار وإخفاء الابن
export function GcTimeLifecycleSimulator() {
  const [showChild, setShowChild] = useState(true);
  const queryClient = useQueryClient();

  // فحص حالة الاستعلام في كاش الذاكرة
  const query = queryClient.getQueryCache().find({ queryKey: ['temp-session-data'] });
  const isQueryInMemory = !!query;
  const isInactive = query ? query.getObserversCount() === 0 : false;

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-sm">محاكي دورة حياة gcTime</h4>
        <button
          onClick={() => setShowChild(!showChild)}
          className={\`px-3 py-1 text-xs font-bold rounded-lg transition-all \${
            showChild ? 'bg-rose-600 hover:bg-rose-500' : 'bg-emerald-600 hover:bg-emerald-500'
          }\`}
        >
          {showChild ? 'إلغاء تركيب المكون (Unmount)' : 'إعادة تركيب المكون (Mount)'}
        </button>
      </div>

      {/* عرض المكون الفرعي عند تفعيله */}
      <div className="my-3">
        {showChild ? (
          <TemporaryChildWidget />
        ) : (
          <div className="p-4 bg-slate-950 rounded-lg text-center text-xs text-slate-500">
            تم تفكيك المكون (المراقبون = 0). الاستعلام الآن Inactive وبدأ عداد gcTime!
          </div>
        )}
      </div>

      {/* لوحة مراقبة الذاكرة في الوقت الفعلي */}
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5 text-xs font-mono">
        <div className="flex justify-between">
          <span className="text-slate-400">هل البيانات موجودة في الذاكرة؟</span>
          <span className={isQueryInMemory ? 'text-emerald-400 font-bold' : 'text-rose-400'}>
            {isQueryInMemory ? 'نعم (مخزنة في الرام)' : 'لا (تم تطهيرها مسحاً)'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">حالة الاستعلام:</span>
          <span className="text-cyan-400">
            {isInactive ? 'Inactive (خامل بانتظار gcTime)' : 'Active (نشط ومستمع)'}
          </span>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال العملي كيف يتحول الاستعلام فور إلغاء تركيب المكون (`Unmount`) إلى حالة خاملة `Inactive`. تبقى البيانات في الذاكرة جاهزة للعرض الفوري إذا ضغط المستخدم على زر إعادة التركيب قبل مرور الدقيقة المحددة في `gcTime`، وتُمحى تلقائياً بعد مرورها.",
      commonMistakes: [
        {
          mistake: "تعيين gcTime بقيمة أقل من staleTime (مثال: staleTime: 60000 و gcTime: 10000).",
          fix: "اجعل دائماً gcTime أكبر من staleTime بكثير؛ لأن مسح الكاش من الذاكرة يبطل فائدة اعتبار البيانات حديثة."
        },
        {
          mistake: "استخدام التسمية القديمة cacheTime في الإصدار v5؛ حيث تم تغييرها رسمياً إلى gcTime.",
          fix: "استبدل كل ظهور لـ cacheTime بـ gcTime لتفادي تجاهل الإعداد في الإصدار الحديث."
        }
      ],
      bestPractices: [
        "اترك gcTime بالقيمة الافتراضية (5 دقائق) لمعظم التطبيقات؛ فهي قيمة نموذجية ومثالية للأداء والذاكرة.",
        "ارفع gcTime إلى 15-30 دقيقة للشاشات الكبيرة وجداول البيانات التي يعود إليها المستخدم كثيراً خلال جلسة العمل.",
        "قلل gcTime للبيانات الضخمة جداً (مثل الصور النقطية الثقيلة أو ملفات PDF في الذاكرة) لتجنب بطء المتصفح."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "الفارق المعماري الحاسم: staleTime مقابل gcTime",
        items: [
          {
            title: "staleTime (وقت الحداثة)",
            points: [
              "السؤال: هل البيانات موثوقة وطازجة؟",
              "يبدأ العد: فور وصول البيانات من الخادم",
              "عند انتهائه: تتحول البيانات لـ Stale وتُطلب نسخة أحدث عند الحاجة",
              "الافتراضي: 0 مللي ثانية"
            ]
          },
          {
            title: "gcTime (وقت تطهير الذاكرة)",
            points: [
              "السؤال: كم من الوقت نبقي البيانات في الرام بعد مغادرة الصفحة؟",
              "يبدأ العد: فور فك وإلغاء تركيب المكون (Inactive)",
              "عند انتهائه: تُحذف البيانات نهائياً من ذاكرة المتصفح",
              "الافتراضي: 5 دقائق (300,000ms)"
            ]
          }
        ]
      }
    },
    {
      id: "13-2-d",
      title: "إعادة الجلب التلقائي عند التركيز على النافذة (Window Focus)",
      englishTitle: "Window Focus Refetching & Background Synchronization",
      pronunciation: "ويندو فوكس ريفيتشنج آند باك جراوند سينكرونايزيشن",
      meaning: "تحديث البيانات تلقائياً بمجرد عودة المستخدم لتبويب المتصفح لضمان تزامنها",
      description:
        "إحدى أكثر الميزات إبهاراً في TanStack Query هي `Window Focus Refetching` (المفعلة افتراضياً عبر `refetchOnWindowFocus: true`). عندما يغادر المستخدم نافذة تطبيقك للتحقق من بريده الإلكتروني أو فتح تبويب آخر في المتصفح ثم يعود مجدداً، تقوم المكتبة باكتشاف حدث عودة التركيز (`visibilitychange` و `window.focus`). إذا كانت البيانات المعروضة حالياً قد أصبحت متقادمة (Stale)، يقوم المحرك فوراً بإرسال طلب صامت في الخلفية لجلب أحدث التعديلات التي قد يكون أجراها مستخدمون آخرون أثناء غيابه دون أي وميض في الشاشة. يمكن التحكم في هذا السلوك عالمياً عبر `QueryClient` أو محلياً في كل استعلام، وتعيينه كـ `false` أو جعله دالة مشروطة تقيم نوع الخطأ أو نوعية الشاشة.",
      analogy:
        "تشبه شاشة التلفاز الذكية التي تنطفئ مؤقتاً لتوفير الطاقة عندما تغادر الغرفة، وبمجرد أن تلتقط حساساتها عودتك وفتحك للباب تضيء فوراً وتحدث القنوات المعروضة دون أن تطلب منك البحث عن الريموت كونترول.",
      whyItMatters:
        "تضمن هذه الآلية بقاء تطبيقك متزامناً دائماً مع الحقيقة؛ فلو قام زميل عمل بتحديث حالة الطلب أو تعديل السعر، يرى المستخدم التعديل فور عودته للتبويب دون الحاجة للضغط اليدوي على زر F5 لإعادة تحميل الصفحة بالكامل.",
      syntax: `// تعطيل إعادة الجلب عند التركيز لاستعلام محدد:
const { data } = useQuery({
  queryKey: ['static-report'],
  queryFn: fetchReport,
  refetchOnWindowFocus: false // تعطيل الميزة هنا
});

// أو تفعيلها بشرط محدد (مثل التأكد من أن البيانات Stale فقط):
// refetchOnWindowFocus: 'always'`,
      simpleExample: `// تعطيل إعادة الجلب عند التركيز في نموذج إدخال بيانات لمنع تشتت المستخدم
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export function EditDraftForm() {
  const { data: draft } = useQuery({
    queryKey: ['user-draft'],
    queryFn: () => fetch('/api/draft').then((r) => r.json()),
    // تعطيل إعادة الجلب التلقائي عند تبديل النوافذ لكي لا يمسح تعديلات المستخدم أثناء الكتابة
    refetchOnWindowFocus: false
  });

  return (
    <div className="p-4 border rounded">
      <input defaultValue={draft?.title || ''} className="input-field" />
    </div>
  );
}`,
      advancedExample: `// محاكي حي يوضح أثر حدث التركيز على النافذة مع إحصائية لمرات التحديث
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export function WindowFocusDemoWidget() {
  const [focusRefetchEnabled, setFocusRefetchEnabled] = useState(true);

  const { data, dataUpdatedAt, isFetching, refetch } = useQuery({
    queryKey: ['window-focus-sample', focusRefetchEnabled],
    queryFn: async () => {
      return {
        quote: 'البيانات الحية تحافظ على موثوقية قراراتك.',
        fetchTime: new Date().toLocaleTimeString(),
        syncCount: Math.floor(Math.random() * 900) + 100
      };
    },
    // staleTime: 0 لتكون دائماً جاهزة للتحديث عند التركيز
    staleTime: 0,
    refetchOnWindowFocus: focusRefetchEnabled
  });

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-sm">محاكي Window Focus Refetch</h4>
        <div className="flex items-center gap-1.5">
          <span className={\`w-2 h-2 rounded-full \${isFetching ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}\`} />
          <span className="text-[10px] text-slate-400 font-mono">
            {isFetching ? 'جارٍ المزامنة...' : 'متزامن'}
          </span>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5 text-xs">
        <p className="text-slate-300 font-medium">"{data?.quote}"</p>
        <div className="flex justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
          <span>آخر مزامنة: <strong className="text-white font-mono">{data?.fetchTime}</strong></span>
          <span>معرف التحديث: <strong className="text-emerald-400 font-mono">#{data?.syncCount}</strong></span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between pt-2 border-t border-slate-800">
        <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
          <input
            type="checkbox"
            checked={focusRefetchEnabled}
            onChange={(e) => setFocusRefetchEnabled(e.target.checked)}
            className="w-4 h-4 accent-indigo-500 rounded cursor-pointer"
          />
          <span>تفعيل refetchOnWindowFocus</span>
        </label>

        <button
          onClick={() => refetch()}
          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-xs rounded transition-all"
        >
          جلب الآن
        </button>
      </div>

      <div className="mt-3 p-2 bg-indigo-950/30 border border-indigo-900/40 rounded-lg text-[11px] text-indigo-300">
        💡 <strong className="text-white">جرب الآن:</strong> انتقل لتبويب آخر في متصفحك وعد إلى هنا مجدداً؛ ستلاحظ تغير وقت المزامنة فوراً!
      </div>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال قوة الميزة: عندما تكون مفعلة، بمجرد انتقال المستخدم لتبويب آخر والعودة، يرصد TanStack Query عودة التركيز ويطلق طلباً صامتاً لتحديث البيانات في ثوانٍ معدودة.",
      commonMistakes: [
        {
          mistake: "ترك refetchOnWindowFocus مفعلاً في نماذج تحرير البيانات الطويلة، مما قد يؤدي لإعادة تحميل البيانات واستبدال مسودة المستخدم أثناء انشغاله.",
          fix: "عطل refetchOnWindowFocus في صفحات النماذج والتحرير (Forms) لحماية مدخلات المستخدم من الاستبدال العرضي."
        },
        {
          mistake: "الاعتقاد بأن عودة التركيز تطلق طلب شبكة حتى لو كانت البيانات طازجة (Fresh).",
          fix: "استوعب أن التركيز لا يطلق طلباً إلا إذا كانت البيانات متقادمة (Stale) بالفعل أو تم إبطالها صراحة."
        }
      ],
      bestPractices: [
        "اترك الميزة مفعلة للوحات التحكم، وقوائم الإشعارات، والرسائل، وحالات الطلبات لمزامنة التطبيق تلقائياً.",
        "عطل الميزة للشاشات الثابتة أو النماذج التحريرية لتوفير الباندويث ومنع تشتيت المستخدم.",
        "يمكنك أيضاً الاستفادة من refetchOnReconnect لإعادة الجلب فور استعادة اتصال الإنترنت بعد انقطاعه."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "محفزات إعادة الجلب التلقائي التلقائية",
        items: [
          {
            title: "Window Focus Refetch",
            points: [
              "الحدث: عودة المستخدم للتبويب من نافذة أخرى",
              "الشرط: البيانات أصبحت Stale في الكاش",
              "الأثر: تحديث هادئ بالخلفية دون إزعاج المستخدم"
            ]
          },
          {
            title: "Network Reconnect",
            points: [
              "الحدث: استعادة اتصال الإنترنت بعد انقطاعه",
              "الشرط: refetchOnReconnect: true (الافتراضي)",
              "الأثر: سحب أحدث السجلات فور عودة الاتصال"
            ]
          },
          {
            title: "Component Mount",
            points: [
              "الحدث: فتح الشاشة وتركيب المكون لأول مرة",
              "الشرط: refetchOnMount: true (الافتراضي)",
              "الأثر: فحص الكاش وإطلاق جلب إذا كانت Stale"
            ]
          }
        ]
      }
    },
    {
      id: "13-2-e",
      title: "التحكم في إعادة المحاولة التلقائية (Retry & Backoff)",
      englishTitle: "Controlling Retry Logic & Exponential Backoff",
      pronunciation: "كنترولينج ريتراي لوجيك آند إكسبونينشال باك أوف",
      meaning: "سياسات معالجة فشل الاتصال المؤقت وإعادة المحاولة بتأخير تصاعدي ذكي",
      description:
        "عندما يفشل طلب استعلام في TanStack Query بسبب خطأ شبكة أو انقطاع خادم، لا تستسلم المكتبة فوراً لإظهار رسالة الخطأ؛ بل تطبق تلقائياً 'استراتيجية إعادة المحاولة الذكية' (Smart Retry Strategy). افتراضياً في v5، تحاول المكتبة إعادة إرسال الطلب `3 مرات` قبل أن تنتقل لحالة `isError: true`. الأروع من ذلك أنها تستخدم خوارزمية 'الانحدار الأسي' (Exponential Backoff مع معامل تأخير عشوائي Jitter)؛ حيث تنتظر ثانية واحدة قبل المحاولة الأولى، ثم ثانيتين، ثم 4 ثوانٍ، وهكذا دواليك. هذه السياسة تمنع ما يُعرف بـ 'هجوم حجب الخدمة الذاتي' (Thundering Herd Problem) الذي يحدث عندما تحاول آلاف المتصفحات ضرب خادم متعثر في نفس المللي ثانية. يوفر TanStack Query مرونة كاملة لتخصيص خاصية `retry` إما برقم محدد، أو قيمة منطقية `false` لتعطيلها، أو دالة دقيقة تفحص نوع الخطأ وعدد المحاولات السابقة.",
      analogy:
        "إعادة المحاولة مع الانحدار الأسي تشبه الاتصال بصديق وجدته مشغولاً؛ إذا اتصلت كل ثانية بلا توقف ستزعجه ولن يستجيب، ولكن السلوك الذكي هو أن تنتظر دقيقة ثم تعاود الاتصال، فإن وجدته مشغولاً تنتظر 5 دقائق ثم 15 دقيقة قبل أن تقرر أنه لن يرد الآن.",
      whyItMatters:
        "تجاوز مشاكل انقطاع الإنترنت اللحظية (Blinks) دون أن يشعر المستخدم بأي خطأ، مع حماية خوادم الـ Backend من الانهيار عند حدوث تعثر مؤقت.",
      syntax: `// تخصيص دالة retry ذكية تفحص حالة الخطأ:
const { data } = useQuery({
  queryKey: ['order', orderId],
  queryFn: fetchOrder,
  retry: (failureCount, error) => {
    // عدم إعادة المحاولة لأخطاء العميل (400, 401, 404)
    if (error?.status >= 400 && error?.status < 500) return false;
    // المحاولة مرتين كحد أقصى لأخطاء الخادم (500) والشبكة
    return failureCount < 2;
  },
  // تخصيص مدة الانتظار بين المحاولات:
  retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
});`,
      simpleExample: `// تعطيل إعادة المحاولة لاستعلام سريع
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export function QuickPingDemo() {
  const { data, isError } = useQuery({
    queryKey: ['quick-ping'],
    queryFn: async () => {
      const res = await fetch('/api/ping');
      if (!res.ok) throw new Error('فشل الرد السريع');
      return res.json();
    },
    // إظهار الخطأ فوراً من أول محاولة دون انتظار
    retry: false
  });

  return <div>{isError ? 'الخدمة غير متوفرة' : 'متصل بنجاح'}</div>;
}`,
      advancedExample: `// محاكي تفاعلي يوضح آلية إعادة المحاولات وتصاعد العداد
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export function RetryBackoffSimulator() {
  const [shouldFail, setShouldFail] = useState(true);

  const {
    data,
    isLoading,
    isError,
    error,
    failureCount,
    failureReason,
    refetch
  } = useQuery({
    queryKey: ['simulated-unstable-api', shouldFail],
    queryFn: async () => {
      // محاكاة طلب شبكة يستغرق ثانية
      await new Promise((r) => setTimeout(r, 600));

      if (shouldFail) {
        throw new Error('تعذر الوصول للخادم السحابي (503 Service Unavailable)');
      }
      return { success: true, message: 'تم الاتصال بالخادم بنجاح فائق!' };
    },
    // ضبط المحاولات لـ 3 مرات مع تأخير زمني مخصص
    retry: 3,
    retryDelay: (attempt) => attempt * 1200 // زيادة التأخير تدريجياً
  });

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <h4 className="font-bold text-sm mb-3">محاكي سياسة إعادة المحاولات (Retry Monitor)</h4>

      {/* لوحة مراقبة المحاولات الحية */}
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-slate-400">عدد المحاولات الفاشلة حتى الآن:</span>
          <span className="font-mono font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
            {failureCount} / 3 محاولات
          </span>
        </div>

        {failureReason && (
          <p className="text-[11px] text-rose-400 bg-rose-950/30 p-2 rounded border border-rose-900/40">
            ⚠️ سبب التعثر الأخير: {failureReason.message}
          </p>
        )}
      </div>

      {/* عرض الحالة النهائية */}
      <div className="my-3">
        {isLoading && (
          <div className="p-3 bg-slate-800/40 rounded-lg text-xs text-amber-300 animate-pulse text-center">
            ⏳ جارية محاولة الاتصال... (المحاولة #{failureCount + 1})
          </div>
        )}
        {isError && (
          <div className="p-3 bg-rose-950/60 rounded-lg text-xs text-rose-300 border border-rose-800">
            ❌ استنفدت جميع المحاولات الثلاث ولم يستجب الخادم!
          </div>
        )}
        {data && (
          <div className="p-3 bg-emerald-950/60 rounded-lg text-xs text-emerald-300 border border-emerald-800">
            ✅ {data.message}
          </div>
        )}
      </div>

      {/* أزرار التحكم بالمحاكاة */}
      <div className="flex justify-between items-center pt-3 border-t border-slate-800">
        <button
          onClick={() => setShouldFail(!shouldFail)}
          className={\`px-3 py-1.5 text-xs font-bold rounded-lg transition-all \${
            shouldFail ? 'bg-amber-600 hover:bg-amber-500' : 'bg-emerald-600 hover:bg-emerald-500'
          }\`}
        >
          حالة الخادم: {shouldFail ? 'غير مستقر (سيفشل)' : 'يعمل بنجاح'}
        </button>

        <button
          onClick={() => refetch()}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition-all"
        >
          إعادة التجربة 🔄
        </button>
      </div>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم كيف يرصد TanStack Query متغيرات مثل `failureCount` و `failureReason`؛ فعند حدوث خطأ، لا ينهار المكون فوراً بل يعيد المحاولة تدريجياً ويوثق عدد المحاولات حتى ينجح الطلب أو يستنفد الحد الأقصى المسموح به.",
      commonMistakes: [
        {
          mistake: "السماح بإعادة المحاولة لطلبات ترجع خطأ 401 Unauthorized أو 404 Not Found.",
          fix: "استثنِ أخطاء 401 و 404 دائماً عبر دالة retry؛ لأن إعادة المحاولة لن تجعل المورد المفقود يظهر ولن تجعل الرمز غير الصالح صالحاً."
        },
        {
          mistake: "تفعيل retry في طفرات useMutation (مثل إنشاء منشور جديد)، مما قد يؤدي لإرسال وإنشاء سجلات مكررة على السيرفر.",
          fix: "اترك retry معطلاً افتراضياً في الطفرات (Mutations) واستخدمه فقط في الاستعلامات (Queries)."
        }
      ],
      bestPractices: [
        "استخدم دالة مخصصة لـ retry تفحص رمز حالة الـ HTTP وتسمح بالمحاولة فقط لأخطاء 5xx ومشاكل انقطاع الاتصال Network Errors.",
        "اضبط retry: 1 أو 2 لتسريع ظهور رسائل الأخطاء للمستخدم في التطبيقات الحساسة للوقت.",
        "استغل متغير failureCount لعرض رسالة تطمين للمستخدم مثل: 'جارٍ إعادة الاتصال بالخادم...'"
      ],
      visualInfographic: {
        type: "flowchart",
        title: "مسار الانحدار الأسي الذكي (Exponential Backoff)",
        nodes: [
          { id: "1", label: "فشل طلب الشبكة الأول\n(Network Failure)", shape: "box", highlight: "rose" },
          { id: "2", label: "فحص شرط retry\n(هل الخطأ مؤهل وهل المحاولات < الحد؟)", shape: "diamond" },
          { id: "3", label: "انتظار 1 ثانية\nثم إرسال المحاولة 1", shape: "pill", highlight: "amber" },
          { id: "4", label: "فشل مجدداً -> انتظار 2 ثانية\nثم إرسال المحاولة 2", shape: "pill", highlight: "amber" },
          { id: "5", label: "فشل مجدداً -> انتظار 4 ثوانٍ\nثم إرسال المحاولة 3", shape: "pill", highlight: "amber" },
          { id: "6", label: "إعلان الفشل النهائي\nisError = true وعرض التنبيه", shape: "box", highlight: "rose" }
        ],
        connections: [
          { from: "1", to: "2" },
          { from: "2", to: "3", label: "نعم" },
          { from: "2", to: "6", label: "لا (أو استنفد الحد)" },
          { from: "3", to: "4", label: "فشل" },
          { from: "4", to: "5", label: "فشل" },
          { from: "5", to: "6", label: "فشل أخير" }
        ]
      }
    },
    {
      id: "13-2-f",
      title: "الاستعلامات المعتمدة والمتسلسلة وخاصية enabled",
      englishTitle: "Dependent Queries & The enabled Option",
      pronunciation: "ديبندنت كويريز آند ذي إنيبلد أوبشن",
      meaning: "تنفيذ استعلام مشروط يعتمد انطلاقه على توفر نتيجة من استعلام سابق",
      description:
        "في كثير من سيناريوهات العالم الحقيقي، لا يمكن إطلاق استعلام معين إلا بعد اكتمال استعلام سابق بنجاح والحصول على بياناته؛ على سبيل المثال: جلب بيانات المستخدم أولاً للحصول على معرف المنظمة `orgId`، ثم استخدام هذا المعرف لجلب مشاريع تلك المنظمة. في React التقليدية، كان هذا يتطلب useEffect متداخلة وحالات وسيطة معقدة. في TanStack Query، يتم حل هذه المعضلة المعمارية ببراعة خارقة عبر خاصية `enabled`. تستقبل `enabled` قيمة منطقية (Boolean)؛ فطالما كانت `false`، يظل الاستعلام في حالة انتظار خاملة (Idle/Paused) ولا يطلق أي طلب شبكة إطلاقاً. وبمجرد أن تتحول القيمة إلى `true` (مثلاً: `enabled: !!user?.orgId`)، ينطلق الاستعلام فوراً وبشكل تلقائي وسلس.",
      analogy:
        "الاستعلام المعتمد يشبه استلام مفتاح الخزنة؛ لا يمكنك التوجه إلى الخزنة وفتح بابها (الاستعلام الثاني) إلا بعد أن تستلم المفتاح أولاً من يد موظف الاستقبال (الاستعلام الأول)؛ فخاصية enabled تمنعك من الذهاب حتى يصبح المفتاح في يدك.",
      whyItMatters:
        "تمنع خاصية enabled إرسال طلبات مشوهة بروابط ناقصة (مثل `/api/projects?orgId=undefined`) وتلغي أخطاء 400 Bad Request الناتجة عن إطلاق الاستعلامات قبل أوانها.",
      syntax: `// الاستعلام الأول: جلب المستخدم
const { data: user } = useQuery({
  queryKey: ['user', email],
  queryFn: () => fetchUserByEmail(email)
});

// الاستعلام الثاني: معتمد على نتيجة الاستعلام الأول
const { data: projects, isLoading: isProjectsLoading } = useQuery({
  queryKey: ['projects', user?.orgId],
  queryFn: () => fetchProjects(user.orgId),
  // لن ينطلق هذا الاستعلام إطلاقاً إلا إذا توفر orgId
  enabled: !!user?.orgId
});`,
      simpleExample: `// مثال بسيط لتعطيل الاستعلام حتى ينقر المستخدم على زر البحث
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export function LazySearchDemo() {
  const [queryText, setQueryText] = useState('');
  const [shouldSearch, setShouldSearch] = useState(false);

  // الاستعلام لا يعمل تلقائياً عند فتح الصفحة بفضل enabled
  const { data: results, isLoading } = useQuery({
    queryKey: ['search', queryText],
    queryFn: () => fetch(\`/api/search?q=\${queryText}\`).then((r) => r.json()),
    enabled: shouldSearch && queryText.length > 2
  });

  return (
    <div className="p-4 border rounded">
      <input
        value={queryText}
        onChange={(e) => {
          setQueryText(e.target.value);
          setShouldSearch(false);
        }}
        placeholder="اكتب 3 حروف على الأقل..."
        className="input-field"
      />
      <button onClick={() => setShouldSearch(true)} className="btn-primary mt-2">
        بحث الآن
      </button>
      {isLoading && <p>جارٍ البحث...</p>}
    </div>
  );
}`,
      advancedExample: `// تطبيق معماري لسلسلة استعلامات معتمدة متتالية (User -> Team -> Repos)
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export function DependentChainViewer({ userId }) {
  // 1. الاستعلام الأول: جلب الملف الشخصي للمستخدم
  const { data: user, isLoading: isUserLoading } = useQuery({
    queryKey: ['profile', userId],
    queryFn: async () => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
      return res.json();
    }
  });

  // 2. الاستعلام الثاني: جلب منشورات المستخدم (معتمد على توفر user.id)
  const {
    data: posts = [],
    isLoading: isPostsLoading,
    isFetching: isPostsFetching
  } = useQuery({
    queryKey: ['user-posts', user?.id],
    queryFn: async () => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${user.id}\`);
      return res.json();
    },
    // إيقاف الاستعلام تماماً حتى يتوفر معرف المستخدم
    enabled: !!user?.id
  });

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <h4 className="font-bold text-sm mb-3">سلسلة الاستعلامات المعتمدة (Dependent Queries)</h4>

      {/* عرض بيانات المستخدم الأساسية */}
      {isUserLoading ? (
        <div className="p-3 bg-slate-950 rounded-lg animate-pulse text-xs text-slate-400">
          جارٍ جلب الملف الشخصي للمستخدم...
        </div>
      ) : (
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 mb-4">
          <p className="font-bold text-emerald-400 text-sm">{user.name}</p>
          <p className="text-xs text-slate-400">اسم المستخدم: @{user.username}</p>
        </div>
      )}

      {/* عرض منشورات المستخدم التابعة */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-300">منشورات هذا المستخدم:</span>
          {isPostsFetching && <span className="text-[10px] text-amber-400 font-mono animate-pulse">جلب المنشورات...</span>}
        </div>

        {isPostsLoading ? (
          <div className="p-4 bg-slate-950/60 rounded-lg text-center text-xs text-slate-500">
            بانتظار وصول معرف المستخدم لإطلاق استعلام المنشورات...
          </div>
        ) : (
          <div className="space-y-1.5 max-h-40 overflow-y-auto">
            {posts.slice(0, 3).map((p) => (
              <div key={p.id} className="p-2 bg-slate-950/80 rounded border border-slate-800 text-xs">
                <p className="font-semibold text-slate-200 truncate">{p.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم كيف تنتظر دالة المنشورات بصبر حتى تكتمل دالة المستخدم؛ بفضل `enabled: !!user?.id`، لا يخرج أي طلب شبكة للمنشورات إلا والمعرف موجود بالفعل، مما يوفر تسلسلاً برمجياً نظيفاً ودقيقاً بنسبة 100%.",
      commonMistakes: [
        {
          mistake: "تمرير دالة داخل enabled مثل enabled: () => checkCondition() بدلاً من تمرير قيمة منطقية مباشرة.",
          fix: "خاصية enabled تتوقع قيمة Boolean مباشرة (مثل enabled: !!condition) وليس دالة."
        },
        {
          mistake: "نسيان تحويل المتغير إلى Boolean باستخدام !!، مما قد يجعلها تمرر undefined مسبباً سلوكاً غير متوقع.",
          fix: "استخدم دائماً معامل النفي المزدوج Boolean Casting: enabled: !!variable."
        }
      ],
      bestPractices: [
        "استخدم enabled لتعطيل الاستعلامات التي تعتمد على مدخلات المستخدم حتى تكتمل شروط معينة (مثل إدخال 3 أحرف على الأقل في البحث).",
        "وظف enabled مع النوافذ المنبثقة (Modals) لجلب بيانات النافذة فقط عندما تكون مفتوحة: enabled: isOpen.",
        "تذكر أن الاستعلام المعطل (enabled: false) يبقى في حالة status === 'pending' ومؤشر fetchStatus === 'idle'."
      ],
      visualInfographic: {
        type: "flowchart",
        title: "تدفق الاستعلامات المعتمدة عبر خاصية enabled",
        nodes: [
          { id: "1", label: "الاستعلام 1: جلب المستخدم\nuseQuery(['user', id])", shape: "box", highlight: "purple" },
          { id: "2", label: "هل توفرت بيانات المستخدم؟\n(!!user?.orgId)", shape: "diamond" },
          { id: "3", label: "الاستعلام 2 في حالة سكون\nenabled: false (fetchStatus: idle)", shape: "pill", highlight: "amber" },
          { id: "4", label: "تفعيل enabled: true\nإطلاق الاستعلام 2 لجلب المشاريع", shape: "pill", highlight: "green" },
          { id: "5", label: "عرض بيانات المشاريع المتزامنة بنجاح", shape: "box", highlight: "green" }
        ],
        connections: [
          { from: "1", to: "2" },
          { from: "2", to: "3", label: "لا (قيد التحميل)" },
          { from: "2", to: "4", label: "نعم متوفر" },
          { from: "4", to: "5" }
        ]
      }
    },
    {
      id: "13-2-g",
      title: "إلغاء الاستعلامات وتوفير موارد الشبكة (Cancellation)",
      englishTitle: "Automatic Query Cancellation with AbortSignal",
      pronunciation: "أوتوماتيك كويري كانسليشن وذ أوبورت سيجنال",
      meaning: "إلغاء طلبات الشبكة قيد التنفيذ تلقائياً عند مغادرة الصفحة أو تغير المعاملات",
      description:
        "عندما يتنقل المستخدم بسرعة فائقة بين صفحات التطبيق، أو عندما يكتب نصاً في حقل بحث سريع التغير، تنشأ مشكلتان خطيرتان: 1) إهدار حزمة البيانات (Bandwidth) وإثقال الخادم بطلبات قديمة لم يعد المستخدم بحاجة إليها، 2) حدوث 'سباق الشبكة' (Race Condition)؛ حيث قد يصل الرد لطلب قديم بعد وصول الرد لطلب جديد مما يؤدي لعرض بيانات خاطئة. يوفر TanStack Query حلاً معمارياً عبقرياً: 'الإلغاء التلقائي للاستعلامات' (Automatic Query Cancellation). تمرر دالة `queryFn` كائناً يحتوي على `signal` وهو مثيل رسمي من `AbortSignal` المدمج بالمتصفح. بمجرد أن يلغى تركيب المكون أو يتغير `queryKey`، يقوم TanStack Query فوراً بإطلاق إشارة الإلغاء (`abort()`)؛ وإذا تم تمرير هذه الإشارة إلى `fetch` أو `axios`، يقوم المتصفح فوراً بقطع الاتصال على مستوى بروتوكول HTTP وتوفير موارد العميل والخادم.",
      analogy:
        "إلغاء الاستعلامات يشبه طلب سيارة أجرة عبر تطبيق الهاتف؛ إذا غيرت وجهتك فجأة وألغيت الرحلة قبل وصول السائق، يقوم التطبيق بإرسال إشارة إلغاء فورية للسائق ليتوقف عن القدوم ويوفر الوقود والوقت بدلاً من أن يصل إلى منزلك بعد أن غادرته.",
      whyItMatters:
        "يحمي التطبيق من أخطاء الـ Race Conditions الخبيثة، ويوفر استهلاك بطارية الهاتف وحزم الإنترنت للمستخدم، ويخفف الحمل على خوادم الـ API بشكل دراماتيكي.",
      syntax: `// استخدام signal مع fetch:
const { data } = useQuery({
  queryKey: ['search', query],
  queryFn: async ({ signal }) => {
    const res = await fetch(\`/api/search?q=\${query}\`, { signal });
    return res.json();
  }
});

// استخدام signal مع axios:
queryFn: ({ signal }) => axios.get('/api/search', { signal }).then(r => r.data)`,
      simpleExample: `// تمرير signal إلى استدعاء fetch البسيط
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export function FastSearchInput() {
  const [term, setTerm] = useState('');

  const { data: results = [] } = useQuery({
    queryKey: ['fast-search', term],
    queryFn: async ({ signal }) => {
      // تمرير signal يضمن إلغاء الطلب السابق تلقائياً فور كتابة حرف جديد
      const res = await fetch(\`/api/search?q=\${term}\`, { signal });
      return res.json();
    },
    enabled: term.length > 1
  });

  return (
    <div>
      <input value={term} onChange={(e) => setTerm(e.target.value)} placeholder="بحث..." />
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}`,
      advancedExample: `// محاكاة توضح كيفية التقاط وتأكيد إلغاء طلبات الشبكة في وحدة التحكم
import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export function CancellationDemoStudio() {
  const [activeResourceId, setActiveResourceId] = useState(1);
  const queryClient = useQueryClient();
  const [cancelledCount, setCancelledCount] = useState(0);

  const { data, isFetching } = useQuery({
    queryKey: ['heavy-resource', activeResourceId],
    queryFn: async ({ signal }) => {
      console.log(\`بدأ جلب المورد رقم \${activeResourceId}...\`);

      // رصد حدث الإلغاء عبر المستمع
      signal.addEventListener('abort', () => {
        console.warn(\`تم بنجاح إلغاء طلب المورد رقم \${activeResourceId} فورياً عبر AbortSignal!\`);
        setCancelledCount((c) => c + 1);
      });

      // محاكاة طلب بطيء يستغرق ثانيتين ونصف
      const res = await fetch(\`https://jsonplaceholder.typicode.com/photos/\${activeResourceId}\`, {
        signal // ربط المتصفح بإشارة الإلغاء
      });
      return res.json();
    }
  });

  // إلغاء الاستعلام يدوياً عبر واجهة QueryClient
  const handleManualCancel = () => {
    queryClient.cancelQueries({ queryKey: ['heavy-resource', activeResourceId] });
  };

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-sm">مختبر إلغاء الاستعلامات (Cancellation)</h4>
        <span className="text-[10px] text-slate-400 font-mono">
          تم الإلغاء: <strong className="text-rose-400">{cancelledCount}</strong> مرات
        </span>
      </div>

      {/* أزرار التبديل السريع لاختبار الإلغاء التلقائي */}
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 mb-3">
        <p className="text-xs text-slate-400 mb-2">
          انقر بسرعة بين الأرقام لقطع الطلبات السابقة قبل اكتمالها:
        </p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((id) => (
            <button
              key={id}
              onClick={() => setActiveResourceId(id)}
              className={\`px-3 py-1 text-xs font-bold rounded-lg transition-all \${
                activeResourceId === id ? 'bg-indigo-600 text-white shadow' : 'bg-slate-800 text-slate-400'
              }\`}
            >
              مورد #{id}
            </button>
          ))}
        </div>
      </div>

      {/* مؤشر التحميل والنتيجة */}
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
        {isFetching ? (
          <div className="flex items-center justify-between text-amber-400">
            <span>جارٍ سحب المورد #{activeResourceId}...</span>
            <button
              onClick={handleManualCancel}
              className="px-2 py-0.5 bg-rose-900/60 hover:bg-rose-800 text-rose-200 rounded text-[10px]"
            >
              إلغاء يدوي الآن 🛑
            </button>
          </div>
        ) : (
          <div>
            <p className="font-bold text-emerald-400">المورد المحمل حالياً: #{data?.id}</p>
            <p className="text-slate-300 truncate mt-1">{data?.title}</p>
          </div>
        )}
      </div>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم كيف يتفاعل المتصفح مع `signal`: بمجرد أن ينقر المستخدم على زر معرف آخر بينما الطلب السابق قيد الإرسال، يطلق TanStack إشارة `abort` فورياً، ملغياً الاتصال السابق ومانعاً تضارب البيانات في وحدة التحكم.",
      commonMistakes: [
        {
          mistake: "نسيان استخراج ({ signal }) من دالة queryFn وتمريرها لأمر fetch أو axios.",
          fix: "تذكر دائماً أن الإلغاء لن يعمل مع المتصفح ما لم تربط signal بخيارات طلب الشبكة { signal }."
        },
        {
          mistake: "الخوف من أن إلغاء الطلب يعتبر خطأ فادحاً يكسر التطبيق.",
          fix: "يتعرف TanStack Query تلقائياً على أخطاء AbortError الناتجة عن الإلغاء ولا يتعامل معها كأخطاء برمجية ولا يعرض رسائل فشل للمستخدم."
        }
      ],
      bestPractices: [
        "مرر دائماً signal لجميع استدعاءات الشبكة داخل queryFn كعادة برمجية قياسية.",
        "استخدم queryClient.cancelQueries({ queryKey }) في العمليات الحساسة لإيقاف أي جلب قيد التنفيذ قبل بدء عملية تعديل تفاؤلية (Optimistic Update)."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "فوائد إلغاء الاستعلامات التلقائي بـ AbortSignal",
        items: [
          {
            title: "منع سباق البيانات (Race Conditions)",
            points: [
              "يمنع وصول رد استعلام قديم بعد رد استعلام حديث",
              "يضمن توافق محتوى الشاشة 100% مع أحدث خيار نقره المستخدم"
            ]
          },
          {
            title: "توفير الموارد وحزم البيانات",
            points: [
              "يقطع اتصال HTTP على الفور من طرف المتصفح",
              "يوفر استهلاك بطارية الهاتف وحزم بيانات الإنترنت"
            ]
          },
          {
            title: "تخفيف الضغط عن الخوادم",
            points: [
              "تتوقف خوادم الواجهة عن معالجة طلبات لم يعد أحد بانتظارها",
              "يحمي قواعد البيانات من الاستعلامات المعلقة والمهجورة"
            ]
          }
        ]
      }
    },
    {
      id: "13-2-h",
      title: "الجلب المسبق الذكي للبيانات (Prefetching)",
      englishTitle: "Smart Data Prefetching for Instant Navigation",
      pronunciation: "سمارت داتا بريفيتشنج فور إنستانت نافيجشن",
      meaning: "تحميل بيانات الشاشة القادمة في الكاش سلفاً قبل أن ينقر المستخدم عليها",
      description:
        "`Prefetching` (الجلب المسبق) هو أحد أقوى الأسلحة في ترسانة مهندسي الواجهات لبناء تجارب مستخدم تشبه السحر؛ حيث يتم جلب بيانات الشاشة أو الصفحة القادمة وتخزينها في الكاش قبل أن يفتحها المستخدم فعلياً. يوفر عميل الاستعلامات دالة مخصصة تسمى `queryClient.prefetchQuery({ queryKey, queryFn, staleTime })`. على سبيل المثال: عندما يحرك المستخدم مؤشر الفأرة فوق رابط منتج في القائمة (`onMouseEnter`) أو فوق زر الصفحة التالية في جدول مرقم، يطلق التطبيق فوراً دالة `prefetchQuery` في الخلفية. عندما يقرر المستخدم النقر على الرابط بعد نصف ثانية، يجد أن البيانات قد وصلت بالفعل ومخزنة في الكاش، فيتم عرض الصفحة في `0 ثانية` بدون أي مؤشر تحميل أو شاشة بيضاء.",
      analogy:
        "الجلب المسبق يشبه أن يرى النادل في المطعم أن طبقك شارف على الانتهاء، فيطلب من المطبخ تجهيز فنجان القهوة الذي تطلبه دائماً بعد الغداء؛ فبمجرد أن ترفع يدك لتطلب القهوة، يضع الفنجان أمامك ساخناً في نفس اللحظة دون أن تنتظر دقيقة واحدة.",
      whyItMatters:
        "يحول التطبيق من تطبيق ويب عادي ذي أوقات انتظار متكررة إلى تجربة فائقة السرعة تماثل أسرع تطبيقات سطح المكتب والهواتف الذكية.",
      syntax: `// استدعاء الجلب المسبق عبر queryClient:
await queryClient.prefetchQuery({
  queryKey: ['article', articleId],
  queryFn: () => fetchArticle(articleId),
  staleTime: 1000 * 60 * 5 // مدة الحداثة
});`,
      simpleExample: `// جلب الصفحة التالية مسبقاً عند تصفح الجداول
import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export function PaginatedPrefetchDemo() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const { data: items = [] } = useQuery({
    queryKey: ['items', page],
    queryFn: () => fetch(\`/api/items?page=\${page}\`).then((r) => r.json())
  });

  // جلب مسبق لبيانات الصفحة التالية بمجرد وضع الفأرة فوق زر 'التالي'
  const prefetchNextPage = () => {
    queryClient.prefetchQuery({
      queryKey: ['items', page + 1],
      queryFn: () => fetch(\`/api/items?page=\${page + 1}\`).then((r) => r.json()),
      staleTime: 1000 * 60
    });
  };

  return (
    <div>
      <p>الصفحة الحالية: {page}</p>
      <button
        onMouseEnter={prefetchNextPage}
        onClick={() => setPage((p) => p + 1)}
        className="btn-primary"
      >
        الصفحة التالية ➡️
      </button>
    </div>
  );
}`,
      advancedExample: `// نظام جلب مسبق متكامل لقائمة بطاقات المقالات مع مؤشر بصري للكاش
import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export function PrefetchArticleShowcase() {
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const queryClient = useQueryClient();

  // قاعدة بيانات تجريبية للمقالات
  const articlesList = [
    { id: 101, title: 'هندسة معمارية React الحديثة', views: '2.4k' },
    { id: 102, title: 'أسرار TanStack Query v5', views: '4.1k' },
    { id: 103, title: 'التحول من Redux إلى Zustand', views: '1.8k' }
  ];

  // دالة الجلب المسبق التي تنطلق عند تمرير الفأرة فوق البطاقة (Hover)
  const handleArticleHover = (id) => {
    queryClient.prefetchQuery({
      queryKey: ['article-detail', id],
      queryFn: async () => {
        // محاكاة جلب تفاصيل المقال من الخادم
        const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id - 100}\`);
        return res.json();
      },
      staleTime: 1000 * 60 * 5 // إبقاء البيانات طازجة لـ 5 دقائق
    });
  };

  // استعلام عرض المقال المحدد حالياً
  const { data: articleDetail, isFetching } = useQuery({
    queryKey: ['article-detail', selectedArticleId],
    queryFn: async () => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${selectedArticleId - 100}\`);
      return res.json();
    },
    enabled: !!selectedArticleId
  });

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-lg mx-auto text-white">
      <h4 className="font-bold text-sm mb-1 text-emerald-400">استوديو الجلب المسبق (Hover-to-Prefetch)</h4>
      <p className="text-xs text-slate-400 mb-4">
        مرر مؤشر الفأرة فوق أي مقال لتخزينه مسبقاً، ثم انقر عليه ولاحظ ظهوره الفوري بزمن 0ms!
      </p>

      {/* قائمة المقالات */}
      <div className="space-y-2 mb-5">
        {articlesList.map((art) => {
          // فحص هل هذا المقال مخزن مسبقاً في الكاش حالياً
          const isCached = !!queryClient.getQueryData(['article-detail', art.id]);

          return (
            <div
              key={art.id}
              onMouseEnter={() => handleArticleHover(art.id)}
              onClick={() => setSelectedArticleId(art.id)}
              className={\`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between \${
                selectedArticleId === art.id
                  ? 'bg-emerald-950/50 border-emerald-500 shadow-lg'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }\`}
            >
              <div>
                <p className="text-xs font-bold text-slate-200">{art.title}</p>
                <span className="text-[10px] text-slate-500">المشاهدات: {art.views}</span>
              </div>
              <div className="flex items-center gap-2">
                {isCached && (
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                    ⚡ مخزن مسبقاً (Cached)
                  </span>
                )}
                <span className="text-xs text-slate-400">عرض ←</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* عارض تفاصيل المقال المختار */}
      {selectedArticleId && (
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-emerald-400">محتوى المقال #{selectedArticleId}</span>
            {isFetching && <span className="text-[10px] text-amber-400 font-mono">تحديث صامت...</span>}
          </div>
          <p className="text-xs text-slate-300 capitalize font-medium">{articleDetail?.title}</p>
          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{articleDetail?.body}</p>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال قوة الـ Prefetching المعتمد على أحداث المرور `onMouseEnter`: بمجرد أن يحرك المستخدم الفأرة نحو البطاقة، تُخزن بياناتها مسبقاً في الكاش؛ وعند النقر، تُعرض التفاصيل فورياً في 0 ثانية دون أي وميض تحميل، مما يخلق تجربة تصفح سريعة وخاطفة.",
      commonMistakes: [
        {
          mistake: "إطلاق prefetchQuery لجميع الروابط في الصفحة دفعة واحدة، مما يرهق شبكة وخوادم التطبيق بطلبات لا يحتاجها المستخدم.",
          fix: "استخدم الجلب المسبق بذكاء فقط عند احتمال النقر العالي (مثل حدث onMouseEnter، أو الصفحة التالية في الترقيم)."
        },
        {
          mistake: "عدم تحديد staleTime في prefetchQuery، مما يجعل البيانات متقادمة (Stale) فور نقر المستخدم عليها إذا كان الافتراضي 0.",
          fix: "احرص على تعيين staleTime مناسب (مثلاً دقيقة واحدة) داخل خيارات prefetchQuery لضمان بقائها طازجة عند استهلاكها."
        }
      ],
      bestPractices: [
        "استخدم prefetchQuery للصفحة التالية في جداول البيانات (Pagination) لجعل تصفح الصفحات فورياً دون توقف.",
        "استغل حدث onMouseEnter على بطاقات وروابط المقالات والمنتجات لبدء الجلب قبل نقر المستخدم بـ 200-400 مللي ثانية.",
        "تذكر: دالة prefetchQuery لن تعيد الجلب إذا كانت البيانات موجودة بالفعل وطازجة في الكاش."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "استراتيجية الجلب المسبق الذكي (Prefetching Pipeline)",
        items: [
          {
            title: "1. رصد نية المستخدم (Intent Detection)",
            points: [
              "المحفز: تمرير الفأرة (Hover)، أو الاقتراب من نهاية الصفحة",
              "الحدث: onMouseEnter أو IntersectionObserver",
              "الأثر: التقاط نية النقر قبل حدوثها بـ 300ms"
            ]
          },
          {
            title: "2. الجلب الصامت للكاش (Silent Fetch)",
            points: [
              "الأداة: queryClient.prefetchQuery({ queryKey, queryFn })",
              "المعالجة: إرسال الطلب في الخلفية دون أي وميض أو تأثير على الشاشة",
              "التخزين: حفظ النتيجة فوراً في QueryCache"
            ]
          },
          {
            title: "3. العرض الفوري (Instant Render)",
            points: [
              "النقر: ينقر المستخدم على الزر أو الرابط",
              "النتيجة: useQuery يجد البيانات جاهزة في الكاش",
              "السرعة: ظهور الشاشة الجديدة في 0 ثانية كاملة!"
            ]
          }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q13-2-1",
      question: "ما هو الفارق الحاسم بين staleTime و gcTime في إدارة كاش TanStack Query؟",
      options: [
        "staleTime يتحكم في سرعة الإنترنت بينما gcTime يتحكم في حجم الشاشة",
        "staleTime يحدد مدة بقاء البيانات طازجة لتفادي طلبات الشبكة، بينما gcTime يحدد مدة الاحتفاظ بالبيانات الخاملة في الذاكرة قبل مسحها",
        "لا يوجد فرق وهما خياران لضبط نفس المدة الزمنية",
        "gcTime يعمل فقط في بيئة الإنتاج بينما staleTime يعمل في بيئة التطوير"
      ],
      correctAnswer: 1,
      explanation:
        "staleTime يحدد حداثة البيانات وهل نحتاج لإرسال طلب شبكة جديد عند طلبها، بينما gcTime يحدد متى يتم حذف البيانات المهجورة كلياً من ذاكرة المتصفح الرامية (Garbage Collection) بعد إلغاء تركيب المكونات المستمعة."
    },
    {
      id: "q13-2-2",
      question: "كيف تمنع استعلاماً من الانطلاق تلقائياً حتى تتوفر قيمة معرف معين مثل userId؟",
      options: [
        "باستخدام useState داخل دالة queryFn",
        "بوضع شرط enabled: !!userId داخل خيارات useQuery",
        "بتغيير اسم المفتاح إلى 'disabled'",
        "باستخدام خاصية stopPropagation"
      ],
      correctAnswer: 1,
      explanation:
        "خاصية enabled تستقبل قيمة منطقية Boolean؛ فعندما تكون false يتوقف الاستعلام عن العمل ويبقى في حالة انتظار خاملة (idle) ولا يرسل أي طلب شبكة حتى تتحول enabled إلى true."
    },
    {
      id: "q13-2-3",
      question: "ما هي الفائدة الأساسية من تمرير ({ signal }) من دالة queryFn إلى أمر fetch؟",
      options: [
        "تلوين البيانات في وحدة التحكم",
        "تمكين الإلغاء التلقائي لطلب الشبكة الجاري فورياً عند مغادرة الصفحة أو تغير المعاملات لمنع Race Conditions وتوفير الموارد",
        "تشفير البيانات برمز سري",
        "تسريع استجابة الخادم بمقدار الضعف"
      ],
      correctAnswer: 1,
      explanation:
        "تمرير signal يربط طلب الشبكة بمحرك AbortSignal في المتصفح؛ فعند إلغاء المكون أو تغير المفتاح، يُلغى الطلب فوراً على مستوى بروتوكول الشبكة مما يمنع تضارب البيانات ويوفر استهلاك الباندويث."
    }
  ],
  exercise: {
    title: "تمرين تطبيقي: بناء جدول مرقم مع الجلب المسبق التلقائي للصفحة القادمة",
    instruction:
      "قم ببناء مكون تصفح مقالات مرقم (Pagination)، يستخدم useQuery لعرض صفحة المقالات الحالية، ويقوم بالجلب المسبق (prefetchQuery) لبيانات الصفحة التالية بمجرد وضع مؤشر الفأرة (onMouseEnter) فوق زر 'الصفحة التالية'.",
    starterCode: `import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export function PaginatedArticlesExercise() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  // TODO: استدع useQuery لجلب 3 مقالات للصفحة الحالية من:
  // https://jsonplaceholder.typicode.com/posts?_page=\${page}&_limit=3

  // TODO: اكتب دالة prefetchNextPage التي تنفذ queryClient.prefetchQuery
  // للصفحة page + 1 مع staleTime لمدة دقيقة

  return (
    <div className="p-4 border rounded-xl max-w-md mx-auto">
      <h3 className="font-bold text-lg mb-2">جدول المقالات المرقم</h3>
      {/* واجهة العرض وأزرار التنقل */}
    </div>
  );
}`,
    hints: [
      "استخدم مصفوفة المفتاح ['articles', page].",
      "في دالة الجلب المسبق، استدع: queryClient.prefetchQuery({ queryKey: ['articles', page + 1], queryFn: ..., staleTime: 60000 }).",
      "اربط دالة الجلب المسبق بحدث onMouseEnter في زر الصفحة التالية.",
      "أظهر رقم الصفحة الحالية وأزرار السابق والتالي."
    ],
    solutionCode: `import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export function PaginatedArticlesExercise() {
  // حالة رقم الصفحة الحالية
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  // دالة جلب المقالات الموحدة
  const fetchArticlesByPage = async (pageNumber) => {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/posts?_page=\${pageNumber}&_limit=3\`);
    if (!res.ok) throw new Error('فشل جلب المقالات');
    return res.json();
  };

  // استعلام الصفحة الحالية
  const {
    data: articles = [],
    isLoading,
    isFetching,
    isError,
    error
  } = useQuery({
    queryKey: ['articles', page],
    queryFn: () => fetchArticlesByPage(page),
    staleTime: 1000 * 60 * 2 // حفظ الحداثة لدقيقتين
  });

  // دالة الجلب المسبق الذكي للصفحة التالية
  const prefetchNextPage = () => {
    queryClient.prefetchQuery({
      queryKey: ['articles', page + 1],
      queryFn: () => fetchArticlesByPage(page + 1),
      staleTime: 1000 * 60 * 2
    });
  };

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-bold text-base text-emerald-400">تصفح المقالات الذكي</h3>
          <span className="text-[10px] text-slate-400 font-mono">الصفحة الحالية: #{page}</span>
        </div>
        {isFetching && (
          <span className="text-[10px] text-amber-400 font-mono animate-pulse">
            ⚡ جارٍ المزامنة...
          </span>
        )}
      </div>

      {/* محتوى المقالات */}
      <div className="space-y-2 mb-4 min-h-[160px]">
        {isLoading ? (
          <div className="space-y-2 py-4">
            <div className="h-10 bg-slate-950 rounded-lg animate-pulse" />
            <div className="h-10 bg-slate-950 rounded-lg animate-pulse" />
            <div className="h-10 bg-slate-950 rounded-lg animate-pulse" />
          </div>
        ) : isError ? (
          <div className="p-3 bg-rose-950/40 text-rose-300 text-xs rounded-lg">
            خطأ: {error.message}
          </div>
        ) : (
          articles.map((item) => (
            <div key={item.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-[10px] text-emerald-400 font-mono block">المقال #{item.id}</span>
              <p className="text-xs font-semibold text-slate-200 truncate mt-0.5">{item.title}</p>
            </div>
          ))
        )}
      </div>

      {/* أزرار التنقل مع الجلب المسبق */}
      <div className="flex justify-between items-center pt-3 border-t border-slate-800">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-bold rounded-lg transition-all"
        >
          ⬅️ السابق
        </button>

        <span className="text-xs font-mono font-bold text-slate-300">صفحة {page}</span>

        <button
          onMouseEnter={prefetchNextPage}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow transition-all active:scale-95"
        >
          التالي ➡️ (Prefetch)
        </button>
      </div>

      <p className="text-[10px] text-slate-500 mt-3 text-center">
        💡 عند تمرير الفأرة فوق 'التالي'، تُجلب الصفحة {page + 1} وتُخزن في الكاش قبل النقر!
      </p>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة التخزين المؤقت وإعادة الجلب في TanStack Query",
    description: "الدليل الشامل للتحكم في دورة حياة الكاش واستراتيجيات التحديث والتحسين الشبكي.",
    elements: [
      {
        title: "1. إدارة الصلاحية والذاكرة",
        subtitle: "staleTime vs gcTime",
        badge: "التوقيت الزمني",
        color: "purple",
        details: [
          "staleTime: مدة الحداثة التي تمنع أي طلب شبكة مكرر",
          "gcTime: مدة الاحتفاظ بالبيانات الخاملة في الرام قبل مسحها",
          "القاعدة الذهبية: gcTime يجب أن يكون أكبر دائماً من staleTime"
        ]
      },
      {
        title: "2. المزامنة الذاتية الحية",
        subtitle: "Window Focus & Reconnect",
        badge: "التحديث التلقائي",
        color: "emerald",
        details: [
          "refetchOnWindowFocus: تحديث البيانات فور عودة المستخدم للتبويب",
          "refetchOnReconnect: إعادة الجلب التلقائي فور عودة الإنترنت",
          "تحديثات هادئة: تتم في الخلفية دون تجميد أو وميض الواجهة"
        ]
      },
      {
        title: "3. المقاومة والمرونة الشبكية",
        subtitle: "Smart Retry & AbortSignal",
        badge: "الأمان والاستقرار",
        color: "blue",
        details: [
          "Exponential Backoff: تصاعد فترات الانتظار لمنع إرهاق السيرفر",
          "دالة retry المخصصة: استثناء أخطاء 401 و 404 من الإعادة",
          "AbortSignal: قطع طلبات الشبكة القديمة فورياً لمنع تضارب البيانات"
        ]
      },
      {
        title: "4. الأداء الفائق والسرعة الفورية",
        subtitle: "Dependent Queries & Prefetching",
        badge: "السرعة الفورية",
        color: "amber",
        details: [
          "خاصية enabled: إيقاف الاستعلام حتى تتوفر مدخلات أو نتائج سابقة",
          "queryClient.prefetchQuery: جلب الشاشة القادمة قبل النقر",
          "0ms Navigation: عرض الشاشات التالية في صفر ثانية دون انتظار"
        ]
      }
    ]
  }
};
