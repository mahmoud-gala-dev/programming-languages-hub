// src/data/sections/section13/topic4.js

export const topic4 = {
  id: "13-4",
  title: "المفاهيم المتقدمة في TanStack Query",
  englishTitle: "Advanced TanStack Query Architectural Patterns",
  description:
    "استكشاف شامل للأنماط المتقدمة في TanStack Query: بناء التمرير اللانهائي (Infinite Scrolling) عبر useInfiniteQuery و getNextPageParam، إدارة الترقيم المتقدم وتثبيت الشاشة بـ placeholderData، الفرق المعماري بين Initial Data و Placeholder Data، تنفيذ الاستعلامات المتوازية الديناميكية بـ useQueries، دعم العمل دون اتصال بشبكة الإنترنت (Offline Mode & Network Modes)، تقنيات التجفيف والتمييه (Dehydration & Hydration) للتكامل مع خوادم SSR (Next.js / Remix)، وبناء طبقة خطافات مخصصة نظيفة (Custom Data Hooks Architecture) تعزل منطق الاستعلامات عن واجهة المستخدم.",
  subtopics: [
    {
      id: "13-4-a",
      title: "الاستعلامات اللانهائية والتمرير المتواصل (useInfiniteQuery)",
      englishTitle: "Infinite Queries & Seamless Infinite Scrolling",
      pronunciation: "إنفينيت كويريز آند سيملس إنفينيت سكرولينج",
      meaning: "جلب وتكديس صفحات إضافية من البيانات تلقائياً مع تمرير المستخدم للشاشة",
      description:
        "`useInfiniteQuery` هو الخطاف المتخصص في بناء تجارب 'التمرير اللانهائي' (Infinite Scrolling) وتحميل المزيد (Load More) الشبيهة بتطبيقات إنستغرام وتويتر. بدلاً من استبدال البيانات القديمة عند جلب صفحة جديدة (كما يحدث في useQuery العادي)، يقوم `useInfiniteQuery` بدمج وحفظ كافة الصفحات السابقة في مصفوفة متسلسلة تحت كائن البيانات: `{ pages: [...], pageParams: [...] }`. يتطلب الخطاف تحديد دالة `getNextPageParam(lastPage, allPages)` التي تستقبل آخر صفحة تم جلبها وتحسب رقم أو مؤشر الصفحة التالية (Cursor / Page Number)، أو تُرجع `undefined` عند الوصول لنهاية البيانات. يوفر الخطاف دوال ومؤشرات بالغة الأهمية: 1) `fetchNextPage`: دالة استدعاء الصفحة التالية عند التمرير، 2) `hasNextPage`: مؤشر منطقي يوضح هل توجد صفحات أخرى متبقية، 3) `isFetchingNextPage`: مؤشر يوضح هل يتم جلب صفحة إضافية حالياً لعرض دوران خفيف في أسفل القائمة.",
      analogy:
        "useInfiniteQuery يشبه قراءة لفافة ورقية تاريخية طويلة؛ كلما فككت جزءاً من اللفافة وقرأته (fetchNextPage)، لا تقطع الجزء القديم وترميه، بل تواصل فرده لتستعرض النص بأكمله متصلاً من البداية وحتى الموضع الحالي.",
      whyItMatters:
        "يوفر مئات الأسطر من الكود المعقد لإدارة تجميع المصفوفات والتأكد من عدم تكرار العناصر أو فقدان موضع التمرير (Scroll Position) عند جلب صفحات إضافية.",
      syntax: `// بنية useInfiniteQuery في v5:
import { useInfiniteQuery } from '@tanstack/react-query';

const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage
} = useInfiniteQuery({
  queryKey: ['projects', 'infinite'],
  queryFn: ({ pageParam }) => fetchProjectsByPage(pageParam),
  initialPageParam: 1, // الصفحة الابتدائية في v5
  getNextPageParam: (lastPage, allPages) => {
    // حساب الصفحة القادمة أو إرجاع undefined عند النهاية
    return lastPage.hasMore ? allPages.length + 1 : undefined;
  }
});`,
      simpleExample: `// مثال بسيط لزر 'تحميل المزيد من المنشورات'
import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

export function SimpleInfiniteFeed() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading
  } = useInfiniteQuery({
    queryKey: ['infinite-posts'],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/posts?_page=\${pageParam}&_limit=3\`);
      return res.json();
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // إيقاف الجلب عند الوصول لـ 4 صفحات
      return allPages.length < 4 ? allPages.length + 1 : undefined;
    }
  });

  if (isLoading) return <div>جارٍ تحميل الخلاصة...</div>;

  return (
    <div className="p-4 space-y-3">
      {/* دمج واستعراض كافة الصفحات في قائمة متصلة */}
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.map((post) => (
            <div key={post.id} className="p-3 bg-slate-900 border rounded-lg text-white">
              <h5 className="font-bold text-xs">{post.title}</h5>
            </div>
          ))}
        </React.Fragment>
      ))}

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="w-full py-2 bg-indigo-600 disabled:opacity-50 text-white rounded text-xs font-bold"
        >
          {isFetchingNextPage ? 'جارٍ جلب المزيد...' : 'تحميل منشورات إضافية ⬇️'}
        </button>
      )}
    </div>
  );
}`,
      advancedExample: `// استوديو تمرير لانهائي متقدم يدمج IntersectionObserver للتمرير التلقائي بدون نقر
import React, { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

export function InfiniteScrollObserverStudio() {
  // مرجع لعنصر الحراسة في أسفل القائمة لرصد اقتراب التمرير
  const loadMoreRef = useRef(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error
  } = useInfiniteQuery({
    queryKey: ['infinite-photos-feed'],
    queryFn: async ({ pageParam }) => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/photos?_page=\${pageParam}&_limit=4\`);
      if (!res.ok) throw new Error('فشل جلب ألبوم الصور');
      return res.json();
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // محاكاة انتهاء البيانات بعد 5 صفحات
      return allPages.length < 5 ? allPages.length + 1 : undefined;
    }
  });

  // تفعيل IntersectionObserver لمراقبة ظهور العنصر السفلي
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // إذا ظهر عنصر الحراسة وكان هناك صفحات تالية وليست قيد الجلب
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.8 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-sm text-emerald-400">خلاصة الصور بالتمرير التلقائي</h4>
        <span className="text-[10px] text-slate-400 font-mono">
          صفحات: {data?.pages.length || 0} / 5
        </span>
      </div>

      {isLoading && <p className="text-xs text-slate-400 text-center py-4">جارٍ التحميل الأولي...</p>}
      {isError && <p className="text-xs text-rose-400 text-center py-4">{error.message}</p>}

      {/* قائمة العناصر في حاوية قابلة للتمرير */}
      <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.map((item) => (
              <div key={item.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center font-bold text-xs">
                  #{item.id}
                </span>
                <p className="text-xs text-slate-200 font-medium truncate flex-1">{item.title}</p>
              </div>
            ))}
          </React.Fragment>
        ))}

        {/* عنصر الحراسة السفلي الذي يراقبه IntersectionObserver */}
        <div ref={loadMoreRef} className="py-3 text-center">
          {isFetchingNextPage ? (
            <span className="text-xs text-amber-400 font-mono animate-pulse">
              ⏳ جلب الصفحة التالية تلقائياً...
            </span>
          ) : hasNextPage ? (
            <span className="text-[11px] text-slate-500">مرر للأسفل لجلب المزيد...</span>
          ) : (
            <span className="text-[11px] text-emerald-400 font-bold">🎉 وصلت إلى نهاية السجلات!</span>
          )}
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم المعمارية القياسية للتمرير اللانهائي (Infinite Scrolling) في التطبيقات الحديثة: يراقب `IntersectionObserver` ظهور العنصر السفلي `loadMoreRef`، وبمجرد اقتراب المستخدم من نهاية القائمة يتم استدعاء `fetchNextPage()` تلقائياً دون الحاجة لأي نقر يدوي، مع دمج الصفحات بسلاسة في كائن `data.pages`.",
      commonMistakes: [
        {
          mistake: "نسيان تمرير الخاصية الإلزامية initialPageParam في الإصدار v5، مما يسبب خطأ تشغيلياً صريحاً.",
          fix: "في الإصدار الخامس من TanStack Query، أصبحت initialPageParam خاصية إجبارية يجب تعريفها دائماً."
        },
        {
          mistake: "محاولة تكرار data مباشرة عبر data.map(...) وتوقع أن تكون مصفوفة مسطحة.",
          fix: "تذكر دائماً أن كائن data في الاستعلام اللانهائي يحتوي على مصفوفة صفحات data.pages ويجب تكرارها بمستويين (أو تسطيحها بـ data.pages.flatMap(p => p))."
        }
      ],
      bestPractices: [
        "استخدم data.pages.flatMap((page) => page) لتسطيح البيانات إلى مصفوفة واحدة نظيفة وسهلة التكرار في واجهة العرض.",
        "ادمج IntersectionObserver مع مؤشر hasNextPage لمنع إرسال طلبات فارغة بعد الوصول لنهاية البيانات.",
        "استغل isFetchingNextPage لعرض مؤشر تحميل صغير وموضعي في أسفل القائمة دون تعطيل استعراض العناصر السابقة."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "هيكل كائن البيانات في useInfiniteQuery",
        items: [
          {
            title: "data.pages (مصفوفة الصفحات)",
            points: [
              "تحتوي على النتائج المسترجعة مقسمة حسب رقم كل صفحة",
              "الصفحة 1: data.pages[0]",
              "الصفحة 2: data.pages[1]",
              "تتراكم الصفحات الجديدة دون مسح القديمة"
            ]
          },
          {
            title: "getNextPageParam (حساب التالي)",
            points: [
              "دالة تقيم آخر صفحة مستلمة",
              "تُرجع رقم الصفحة التالية (Cursor / Page)",
              "إرجاع undefined أو null يوقف الجلب (hasNextPage = false)"
            ]
          },
          {
            title: "دوال التحكم (Actions & State)",
            points: [
              "fetchNextPage(): جلب الصفحة التالية",
              "hasNextPage: هل توجد صفحات أخرى؟",
              "isFetchingNextPage: مؤشر تحميل مخصص للأسفل"
            ]
          }
        ]
      }
    },
    {
      id: "13-4-b",
      title: "استعلامات الترقيم وتثبيت الشاشة بـ placeholderData",
      englishTitle: "Smooth Pagination Queries & keepPreviousData Pattern",
      pronunciation: "سمووث باجينيشن كويريز آند كيب بريفيوس داتا باترن",
      meaning: "الحفاظ على عرض محتوى الصفحة السابقة ومنع وميض التحميل الأبيض أثناء جلب الصفحة الجديدة",
      description:
        "عند بناء جداول بيانات مرقمة تقليدية (Pagination)، يؤدي تغيير رقم الصفحة (`page`) إلى تغير مصفوفة `queryKey`؛ مما يدفع TanStack Query افتراضياً إلى الانتقال لحالة `isLoading` وإفراغ `data` وإظهار شاشة تحميل بيضاء مزعجة حتى تكتمل الصفحة الجديدة. لحل هذه المعضلة في تجربة المستخدم، قدمت المكتبة في الإصدار الخامس دالة `keepPreviousData` المستوردة من الحزمة والتي تُمرر لخاصية `placeholderData: keepPreviousData`. بفضل هذا النمط، عندما يضغط المستخدم على الصفحة 2، تظل الصفحة 1 معروضة أمامه بثبات كامل على الشاشة بينما يتم جلب الصفحة 2 في الخلفية، وفور اكتمالها تُستبدل في جزء من الثانية دون أي وميض أو اهتزاز في هيكل الصفحة، مع توفير مؤشر `isPlaceholderData` المنطقي الذي يسمح للمطور بتطبيق شفافية خفيفة على الجدول لطمأنة المستخدم بأن التحديث جارٍ.",
      analogy:
        "تشبه شاشات السينما ذات العارض المزدوج؛ بدلاً من إظهار شاشة سوداء تماماً أثناء تبديل بكرة الفيلم (وميض التحميل)، يظل المشهد الأخير ثابتاً أمام الجمهور حتى تنطلق البكرة الجديدة بسلاسة تامة دون انقطاع.",
      whyItMatters:
        "يمنح جداول الأعمال المعقدة ولوحات التحكم ثباتاً واحترافية فائقة؛ فالشاشة لا ترتعش ولا يقفز شريط التمرير لأعلى مع كل نقرة على أزرار الترقيم.",
      syntax: `// نمط الترقيم السلس في TanStack Query v5:
import { useQuery, keepPreviousData } from '@tanstack/react-query';

const { data, isPlaceholderData } = useQuery({
  queryKey: ['users', page],
  queryFn: () => fetchUsers(page),
  // الحفاظ على الصفحة القديمة أثناء جلب الجديدة:
  placeholderData: keepPreviousData
});`,
      simpleExample: `// جدول مرقم بسيط بدون أي وميض تحميل بفضل keepPreviousData
import React, { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

export function SmoothPaginationSimple() {
  const [page, setPage] = useState(1);

  const { data: users = [], isPlaceholderData } = useQuery({
    queryKey: ['paginated-users', page],
    queryFn: async () => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/users?_page=\${page}&_limit=3\`);
      return res.json();
    },
    // تفعيل تثبيت الصفحة السابقة
    placeholderData: keepPreviousData
  });

  return (
    <div className="p-4 border rounded-xl max-w-sm">
      {/* تطبيق شفافية أثناء جلب الصفحة الجديدة */}
      <div className={\`space-y-2 transition-opacity \${isPlaceholderData ? 'opacity-50' : 'opacity-100'}\`}>
        {users.map((u) => (
          <p key={u.id} className="text-xs font-bold">{u.name}</p>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="btn-sm">السابق</button>
        <span className="text-xs">صفحة {page}</span>
        <button onClick={() => setPage((p) => p + 1)} className="btn-sm">التالي</button>
      </div>
    </div>
  );
}`,
      advancedExample: `// استوديو ترقيم متكامل مع مؤشر تقدم ومقارنة بصرية بين النمط التقليدي والنمط السلس
import React, { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

export function PaginationArchitectureStudio() {
  const [page, setPage] = useState(1);
  const [useSmoothMode, setUseSmoothMode] = useState(true);

  const {
    data: posts = [],
    isLoading,
    isFetching,
    isPlaceholderData
  } = useQuery({
    queryKey: ['smooth-posts-demo', page, useSmoothMode],
    queryFn: async () => {
      // محاكاة تأخير شبكة 700ms لملاحظة الفارق بوضوح
      await new Promise((r) => setTimeout(r, 700));
      const res = await fetch(\`https://jsonplaceholder.typicode.com/posts?_page=\${page}&_limit=3\`);
      return res.json();
    },
    // التبديل الشرطي بين keepPreviousData والوضع الافتراضي
    placeholderData: useSmoothMode ? keepPreviousData : undefined
  });

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-sm text-cyan-400">مختبر الترقيم السلس (keepPreviousData)</h4>
        {isFetching && (
          <span className="text-[10px] text-amber-400 font-mono animate-pulse">
            ⚡ جلب صفحة #{page}...
          </span>
        )}
      </div>

      {/* خيار التبديل لاختبار الفارق الحقيقي */}
      <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 mb-3 flex items-center justify-between">
        <span className="text-xs text-slate-300">نمط الترقيم السلس:</span>
        <button
          onClick={() => setUseSmoothMode(!useSmoothMode)}
          className={\`px-2.5 py-1 text-xs font-bold rounded transition-all \${
            useSmoothMode ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'
          }\`}
        >
          {useSmoothMode ? 'مفعل (keepPreviousData) ✨' : 'معطل (وميض تحميل)'}
        </button>
      </div>

      {/* منطقة عرض السجلات مع تأثير الشفافية عند تحميل الصفحة التالية */}
      <div className="min-h-[150px] relative">
        {isLoading ? (
          <div className="p-8 text-center text-xs text-slate-400 animate-pulse">
            ⏳ وميض التحميل التقليدي المزعج...
          </div>
        ) : (
          <div className={\`space-y-2 transition-all duration-200 \${isPlaceholderData ? 'opacity-40 scale-[0.99]' : 'opacity-100 scale-100'}\`}>
            {posts.map((post) => (
              <div key={post.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] text-cyan-400 font-mono">سجل #{post.id}</span>
                <p className="text-xs font-semibold text-slate-200 truncate mt-0.5">{post.title}</p>
              </div>
            ))}
          </div>
        )}

        {isPlaceholderData && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-3 py-1 bg-slate-900/90 text-cyan-300 text-xs font-bold rounded-full border border-cyan-500/50 shadow-lg">
              جارٍ سحب صفحة {page}...
            </span>
          </div>
        )}
      </div>

      {/* أزرار التنقل */}
      <div className="flex justify-between items-center pt-4 border-t border-slate-800 mt-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1 || isFetching}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-bold rounded-lg transition-all"
        >
          ⬅️ السابق
        </button>

        <span className="text-xs font-mono font-bold text-slate-300">صفحة {page}</span>

        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={isFetching}
          className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 text-white text-xs font-bold rounded-lg shadow transition-all"
        >
          التالي ➡️
        </button>
      </div>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم المقارنة المباشرة: عندما تكون `keepPreviousData` مفعلة، تظل بيانات الصفحة السابقة ثابتة على الشاشة مع شفافية أنيقة أثناء جلب الصفحة الجديدة في الخلفية، بينما بدونها يعاني المستخدم من وميض اختفاء الجدول وعودة شاشة التحميل عند كل نقرة.",
      commonMistakes: [
        {
          mistake: "استخدام الخاصية القديمة keepPreviousData: true المحذوفة في الإصدار الخامس.",
          fix: "في الإصدار v5، استورد الدالة: import { keepPreviousData } واستخدمها كـ placeholderData: keepPreviousData."
        },
        {
          mistake: "نسيان تعطيل زر 'التالي' أثناء وجود isPlaceholderData إذا كان التطبيق يعتمد على مؤشرات صفحات صارمة.",
          fix: "استخدم isPlaceholderData لمنع المستخدم من النقر السريع المتكرر على زر الصفحة التالية قبل اكتمال الصفحة السابقة."
        }
      ],
      bestPractices: [
        "استخدم placeholderData: keepPreviousData كمعيار إلزامي لجميع استعلامات الجداول المرقمة والرسوم البيانية المعتمدة على فلتر التواريخ.",
        "استغل isPlaceholderData لتطبيق فئة CSS خفيفة مثل opacity-60 لإشعار المستخدم بصرياً بأن البيانات قيد التحديث.",
        "ادمج نمط keepPreviousData مع prefetchQuery للصفحة التالية لتقديم أفضل تجربة تصفح ممكنة في الوجود."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "مقارنة الترقيم التقليدي مقابل نمط keepPreviousData",
        items: [
          {
            title: "الترقيم التقليدي (Default)",
            points: [
              "السلوك: حذف الصفحة 1 فور النقر على الصفحة 2",
              "المظهر: ظهور شاشة بيضاء أو هيكل تحميل Skeleton",
              "الأثر: ارتعاش الشاشة وتشتت انتباه المستخدم"
            ]
          },
          {
            title: "الترقيم السلس (keepPreviousData)",
            points: [
              "السلوك: بقاء الصفحة 1 معروضة بثبات كامل",
              "المظهر: تطبيق شفافية خفيفة (isPlaceholderData)",
              "الأثر: استبدال فوري وناعم بالصفحة 2 دون أي وميض"
            ]
          }
        ]
      }
    },
    {
      id: "13-4-c",
      title: "البيانات النائبة والبديلة: Placeholder Data مقابل Initial Data",
      englishTitle: "Placeholder Data vs Initial Data Architecture",
      pronunciation: "بليس هولدر داتا فيرسس إنيشيال داتا آركيتكتشر",
      meaning: "التمييز المعماري بين البيانات الأولية الدائمة في الكاش والبيانات الوهمية المؤقتة",
      description:
        "يخلط كثير من المطورين بين خاصيتي `initialData` و `placeholderData` في TanStack Query رغم الفارق المعماري الجذري بينهما. `initialData` تمثل بيانات حقيقية وموثوقة يمتلكها التطبيق سلفاً (مثل بيانات مسترجعة من الخادم أثناء SSR أو تم تمريرها من شاشة سابقة)؛ لذا يقوم TanStack Query بحفظها في الـ `QueryCache` كبيانات حقيقية كاملة الصلاحية ويطبق عليها `staleTime`، ولا يطلق طلب شبكة طالما لم تنتهِ مدة حداثتها. في المقابل، `placeholderData` تمثل مجرد 'بيانات مؤقتة أو وهمية' (Fake / Stand-in Data) تُعرض للمستخدم فقط أثناء انتظار اكتمال طلب الشبكة ولا يتم حفظها في الكاش نهائياً، كما يظل الاستعلام يعتبر نفسه في حالة جلب نشطة ويطلق طلب الشبكة فوراً دون تردد. يمكن أيضاً استخدام `placeholderData` لاستعارة بيانات جزئية من قائمة سابقة لعرض العنوان والصورة فوراً بينما يتم جلب التفاصيل الكاملة.",
      analogy:
        "initialData تشبه استلام سيارة مستعملة بحالة ممتازة كهدية؛ هي سيارة حقيقية تماماً وتُسجل باسمك في المرور (الكاش) وتستخدمها حتى تحتاج لصيانة. أما placeholderData فتشبه صورة سيارة مطبوعة على ورق كرتون وضعتها في كراجك لتتخيل شكلها بينما تنتظر وصول سيارتك الجديدة من الميناء.",
      whyItMatters:
        "اختيار الخاصية المناسبة يمنع تلوث الكاش ببيانات وهمية، ويضمن انطلاق طلبات الشبكة في موعدها الصحيح مع توفير تجربة واجهة فورية للمستخدم.",
      syntax: `// 1. Initial Data (تُحفظ في الكاش وتوقف الطلب):
const { data } = useQuery({
  queryKey: ['user', id],
  queryFn: fetchUser,
  initialData: cachedUserFromSSR,
  staleTime: 1000 * 60 * 5
});

// 2. Placeholder Data (مؤقتة ولا تُحفظ في الكاش):
const { data } = useQuery({
  queryKey: ['user', id],
  queryFn: fetchUser,
  placeholderData: { name: 'جارٍ التحميل...', email: 'loading...' }
});`,
      simpleExample: `// استعارة بيانات جزئية من قائمة سابقة كـ placeholderData
import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export function UserDetailQuickPreview({ userId }) {
  const queryClient = useQueryClient();

  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetch(\`/api/users/\${userId}\`).then((r) => r.json()),
    // استعارة بيانات المستخدم من كاش قائمة المستخدمين العامة كعنصر نائب
    placeholderData: () => {
      const usersList = queryClient.getQueryData(['users']);
      return usersList?.find((u) => u.id === userId);
    }
  });

  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold">{user?.name}</h3>
      <p className="text-xs text-slate-400">{user?.bio || 'جارٍ جلب السيرة الكاملة...'}</p>
    </div>
  );
}`,
      advancedExample: `// مقارنة عملية توضح متى يطلق المتصفح طلب شبكة مع Initial Data مقابل Placeholder Data
import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export function InitialVsPlaceholderComparison() {
  const [activeMode, setActiveMode] = useState('placeholder'); // 'placeholder' | 'initial'
  const queryClient = useQueryClient();

  const { data, dataUpdatedAt, isFetching, isPlaceholderData } = useQuery({
    queryKey: ['demo-data-mode', activeMode],
    queryFn: async () => {
      // محاكاة تأخير شبكة 1 ثانية
      await new Promise((r) => setTimeout(r, 1000));
      return { text: 'بيانات حقيقية قادمة من الخادم السحابي', source: 'Remote Server', time: new Date().toLocaleTimeString() };
    },
    staleTime: 1000 * 30, // 30 ثانية حداثة

    // تطبيق النمط بناءً على اختيار المستخدم
    ...(activeMode === 'initial'
      ? {
          initialData: { text: 'بيانات أولية موثوقة (SSR Seed)', source: 'Initial Cache', time: 'محفوظة مسبقاً' }
        }
      : {
          placeholderData: { text: 'بيانات نائبة مؤقتة (Skeleton Mock)', source: 'Placeholder Stand-in', time: 'مؤقتة' }
        })
  });

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <h4 className="font-bold text-sm mb-3">مختبر Initial Data مقابل Placeholder Data</h4>

      {/* أزرار التبديل لاختبار السلوك */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveMode('placeholder')}
          className={\`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all \${
            activeMode === 'placeholder' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400'
          }\`}
        >
          اختبار Placeholder Data
        </button>
        <button
          onClick={() => setActiveMode('initial')}
          className={\`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all \${
            activeMode === 'initial' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
          }\`}
        >
          اختبار Initial Data
        </button>
      </div>

      {/* لوحة عرض البيانات والتشخيص */}
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
        <p className="font-bold text-slate-200">{data?.text}</p>
        <div className="flex justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
          <span>المصدر: <strong className="text-cyan-400">{data?.source}</strong></span>
          <span>طبيعة البيانات: <strong className={isPlaceholderData ? 'text-amber-400' : 'text-emerald-400'}>
            {isPlaceholderData ? 'نائبة مؤقتة' : 'حقيقية في الكاش'}
          </strong></span>
        </div>
        <p className="text-[10px] text-slate-500 font-mono">
          حالة الشبكة: {isFetching ? '⚡ جارية المزامنة مع السيرفر...' : 'خاملة (لا توجد طلبات)'}
        </p>
      </div>

      <div className="mt-3 p-2 bg-slate-950/60 rounded-lg text-[11px] text-slate-400">
        💡 <strong className="text-white">الفارق الجوهري:</strong> مع Initial Data لا ينطلق طلب شبكة لأن البيانات طازجة في الكاش، بينما مع Placeholder Data ينطلق طلب الشبكة فوراً!
      </div>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم المقارنة بوضوح: مع `initialData` يعتبر TanStack الكاش ممتلئاً وبياناته صالحة لمدة 30 ثانية فلا يرسل طلب شبكة إطلاقاً، بينما مع `placeholderData` يعرض القيمة المؤقتة ويطلق طلب الشبكة في نفس اللحظة لجلب النسخة الحقيقية.",
      commonMistakes: [
        {
          mistake: "استخدام initialData لبيانات وهمية غير مكتملة، مما يجعل التطبيق يمتنع عن جلب البيانات الحقيقية من الخادم إذا كان staleTime > 0.",
          fix: "استخدم placeholderData للبيانات الوهمية أو النائبة، واقصر initialData على البيانات الحقيقية والمكتملة فقط."
        },
        {
          mistake: "تضمين كائنات ضخمة في initialData دون تعيين staleTime، مما يجعلها تصبح Stale فورياً وتطلق طلب شبكة في نفس الثانية.",
          fix: "إذا مررت initialData، احرص على تعيين staleTime بقيمة معقولة لكي يستفيد التطبيق من وجودها دون إطلاق طلب فوري."
        }
      ],
      bestPractices: [
        "استخدم initialData عندما تستقبل بيانات مسبقة من الخادم عبر Next.js Server Components أو Remix Loaders.",
        "استخدم placeholderData كدالة لاستعارة عنوان وصورة العنصر من كاش القائمة السابقة لتوفير انتقال بصري فوري.",
        "افحص دائماً مؤشر isPlaceholderData إذا كنت ترغب في إظهار أيقونة تحميل صغيرة بجوار البيانات المؤقتة."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "المقارنة المعمارية: Initial Data مقابل Placeholder Data",
        items: [
          {
            title: "initialData (بيانات حقيقية في الكاش)",
            points: [
              "الحفظ: تُحفظ وتُسجل كبيانات رسمية في QueryCache",
              "الطلب الشبكي: لا ينطلق طالما لم تنتهِ مدة staleTime",
              "المصدر: قادمة من SSR أو من شاشة سابقة موثوقة",
              "الأثر: تُعامل كحقيقة مطلقة ومصدر حقيقي"
            ]
          },
          {
            title: "placeholderData (بيانات نائبة مؤقتة)",
            points: [
              "الحفظ: لا تُحفظ في الكاش نهائياً بل تُعرض كقناع مؤقت",
              "الطلب الشبكي: ينطلق فوراً في نفس اللحظة في الخلفية",
              "المصدر: بيانات افتراضية، أو هيكل وهمي Skeleton Mock",
              "الأثر: تُستبدل فور وصول البيانات الحقيقية من الخادم"
            ]
          }
        ]
      }
    },
    {
      id: "13-4-d",
      title: "الاستعلامات المتوازية والديناميكية باستخدام useQueries",
      englishTitle: "Dynamic & Parallel Queries with useQueries",
      pronunciation: "دايناميك آند باراليل كويريز وذ يوز كويريز",
      meaning: "إطلاق عدد متغير ومجهول مسبقاً من الاستعلامات بالتوازي وفق مصفوفة ديناميكية",
      description:
        "في React، تحظر 'قواعد الخطافات الصارمة' (Rules of Hooks) استدعاء `useQuery` داخل حلقات تكرارية (Loops) أو شروط (Conditions). إذاً، كيف يمكنك جلب تفاصيل 10 مستخدمين مجهولي المعرفات في مصفوفة ديناميكية `userIds = [1, 5, 8, ...]` دون خرق قواعد React؟ الحل الهندسي المخصص هو خطاف `useQueries`. يستقبل `useQueries` كائناً يحتوي على مصفوفة من خيارات الاستعلامات `{ queries: userIds.map(id => ({ queryKey: ['user', id], queryFn: ... })) }`، ويقوم بتنفيذ كافة هذه الاستعلامات 'بالتوازي الكامل' (Parallel Execution)، ثم يُرجع مصفوفة مطابقة من نتائج كل استعلام تحتوي على `data` و `isLoading` و `isError` لكل عنصر على حدة. في الإصدار الخامس، يدعم `useQueries` خاصية `combine` التي تتيح دمج نتائج كافة الاستعلامات وتصفيتها في مصفوفة نهائية واحدة ونظيفة بنقرة واحدة.",
      analogy:
        "useQueries يشبه إرسال أسطول من 10 دراجات توصيل في نفس اللحظة؛ بدلاً من أن يذهب سائق واحد ويعود 10 مرات متتالية (بطء شلالي)، ينطلق السائقون جميعاً بالتوازي ويصلون معاً في جزء من الثانية.",
      whyItMatters:
        "يتيح جلب تفاصيل مجموعات متباينة من الموارد المحددة في واجهات السلات والمفضلات ولوحات الإحصائيات المتعددة دون خرق قواعد الخطافات وبأعلى سرعة ممكنة عبر الشبكة.",
      syntax: `// استخدام useQueries في الإصدار v5:
import { useQueries } from '@tanstack/react-query';

const userQueries = useQueries({
  queries: userIds.map((id) => ({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id),
    staleTime: 1000 * 60
  })),
  // ميزة دمج النتائج في v5:
  combine: (results) => {
    return {
      data: results.map((r) => r.data),
      isPending: results.some((r) => r.isPending)
    };
  }
});`,
      simpleExample: `// جلب مستخدمين متعددين بالتوازي عبر useQueries
import React from 'react';
import { useQueries } from '@tanstack/react-query';

export function ParallelUsersPreview({ userIds = [1, 2, 3] }) {
  // جلب تفاصيل جميع المستخدمين المحددين بالتوازي
  const results = useQueries({
    queries: userIds.map((id) => ({
      queryKey: ['user-parallel', id],
      queryFn: () => fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`).then((r) => r.json())
    }))
  });

  const isLoadingAny = results.some((r) => r.isLoading);

  if (isLoadingAny) return <div>جارٍ تحميل الحسابات بالتوازي...</div>;

  return (
    <ul className="p-4 space-y-1">
      {results.map((res, index) => (
        <li key={userIds[index]} className="text-xs font-bold text-white">
          {res.data?.name}
        </li>
      ))}
    </ul>
  );
}`,
      advancedExample: `// تطبيق معماري متقدم يوظف دالة combine لدمج مبيعات عدة فروع بالتوازي
import React, { useState } from 'react';
import { useQueries } from '@tanstack/react-query';

export function MultiBranchDashboard() {
  const [selectedBranches, setSelectedBranches] = useState([101, 102, 103]);

  // استخدام useQueries مع دالة combine الحديثة لدمج النتائج والإحصائيات
  const { combinedBranches, isAllLoading, totalRevenue } = useQueries({
    queries: selectedBranches.map((branchId) => ({
      queryKey: ['branch-sales', branchId],
      queryFn: async () => {
        await new Promise((r) => setTimeout(r, 600));
        return {
          id: branchId,
          name: \`فرع الرياض #\${branchId}\`,
          revenue: Math.floor(Math.random() * 50000) + 20000
        };
      },
      staleTime: 1000 * 60 * 3
    })),
    // دمج النتائج تلقائياً في كائن نهائي واحد نظيف
    combine: (results) => {
      const branchesData = results.map((r) => r.data).filter(Boolean);
      const total = branchesData.reduce((sum, b) => sum + b.revenue, 0);

      return {
        combinedBranches: branchesData,
        isAllLoading: results.some((r) => r.isLoading),
        totalRevenue: total
      };
    }
  });

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-sm text-purple-400">لوحة مبيعات الفروع (Parallel useQueries)</h4>
        <span className="text-[10px] text-slate-400 font-mono">
          فروع نشطة: {selectedBranches.length}
        </span>
      </div>

      {isAllLoading ? (
        <div className="p-6 text-center text-xs text-slate-400 animate-pulse">
          جارٍ جلب إحصائيات كافة الفروع بالتوازي عبر الشبكة...
        </div>
      ) : (
        <div className="space-y-2">
          {combinedBranches.map((branch) => (
            <div key={branch.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-200">{branch.name}</span>
              <span className="font-mono text-xs text-emerald-400 font-bold">
                {branch.revenue.toLocaleString()} ر.س
              </span>
            </div>
          ))}

          {/* الإجمالي المجمع من دالة combine */}
          <div className="p-3 bg-purple-950/40 border border-purple-800 rounded-xl flex justify-between items-center font-bold text-xs mt-3">
            <span>إجمالي إيرادات الفروع:</span>
            <span className="font-mono text-sm text-purple-300">{totalRevenue.toLocaleString()} ر.س</span>
          </div>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم كيف يحل `useQueries` معضلة جلب مصفوفة ديناميكية من الموارد بالتوازي الكامل؛ فبفضل دالة `combine`، يتم تجميع مصفوفة نتائج الفروع وحساب إجمالي الإيرادات في كائن نظيف، دون كتابة أي حلقات غير قانونية للخطافات.",
      commonMistakes: [
        {
          mistake: "محاولة استدعاء useQuery داخل مصفوفة items.map(id => useQuery(...)) وكسر قواعد الخطافات في React.",
          fix: "استخدم دائماً useQueries للمصفوفات المتغيرة والدايناميكية فهو مصمم حصراً لهذا الغرض."
        },
        {
          mistake: "تجاهل دالة combine في الإصدار الخامس والقيام بعمليات الـ map والـ reduce المعقدة داخل جسم المكون في كل ريندر.",
          fix: "استغل خاصية combine المدمجة؛ فهي مفهرسة وميموية تمنع تكرار الحسابات غير الضرورية."
        }
      ],
      bestPractices: [
        "استخدم useQueries عندما تكون معرفات الاستعلامات مصفوفة ديناميكية تتغير أطوالها (مثل سلة المشتريات، المفضلة، أو مقارنة المنتجات).",
        "وظف دالة combine لتجهيز وتصفية البيانات واستخراج مؤشرات مثل isPending العام لتبسيط كود JSX في واجهة المكون.",
        "تأكد من أن كل عنصر داخل مصفوفة queries يمتلك queryKey فريداً ومميزاً بمعرفه الخاص."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "هندسة الاستعلامات المتوازية بـ useQueries",
        items: [
          {
            title: "1. المصفوفة الديناميكية (Queries Array)",
            points: [
              "تقبل مصفوفة من خيارات الاستعلامات المتشابهة أو المختلفة",
              "متوافقة 100% مع قواعد خطافات React الرسمية",
              "تتغير أطوالها مع إضافة أو حذف المعرفات بسلاسة"
            ]
          },
          {
            title: "2. التنفيذ المتوازي (Parallel Execution)",
            points: [
              "تنطلق جميع استدعاءات الشبكة في نفس اللحظة",
              "تستفيد من الكاش المستقل لكل مفتاح على حدة",
              "أعلى سرعة ممكنة دون اختناق شلالي (No Waterfall)"
            ]
          },
          {
            title: "3. الدمج الذكي (combine)",
            points: [
              "دالة ميموية تدمج مصفوفة النتائج",
              "حساب الإجماليات والمؤشرات العامة تلقائياً",
              "إرجاع كائن مهيأ للاستهلاك المباشر في الواجهة"
            ]
          }
        ]
      }
    },
    {
      id: "13-4-e",
      title: "التعامل مع انقطاع الإنترنت وأنماط الشبكة (Network Modes)",
      englishTitle: "Offline-First Support & Network Modes",
      pronunciation: "أوفلاين فيرست سابورت آند نيتوورك مودز",
      meaning: "التحكم في تصرفات الكاش وإطلاق الطلبات أثناء فقدان أو ضعف اتصال الإنترنت",
      description:
        "في العالم الحقيقي، يتعرض المستخدمون لانقطاع مفاجئ في الإنترنت أثناء ركوب القطار أو في المصاعد. افتراضياً في الإصدار الحديث (v5)، يتبنى TanStack Query نهج 'Offline-First' الرصين عبر خاصية `networkMode` التي تقبل ثلاث قيم معمارية حاسمة: 1) `online` (الافتراضي للاستعلامات): إذا انقطع اتصال الإنترنت، لا يطلق الاستعلام أي طلب ولا يعتبر الأمر خطأ، بل ينتقل لحالة `fetchStatus: 'paused'` (معلق مؤقتاً)، وبمجرد عودة الإنترنت يستأنف المحرك الطلب تلقائياً، 2) `always`: يطلق الاستعلام دائماً حتى لو كان المتصفح غير متصل، وهو مفيد للخدمات التي تعمل محلياً أو تعتمد على Service Workers للتخزين المحلي، 3) `offlineFirst`: يحاول أولاً تشغيل دالة queryFn، فإذا فشلت بسبب انقطاع الإنترنت يعلق الطلب بانتظار عودة الشبكة. فهم هذه الأنماط يمنح التطبيق مرونة تمنع عرض رسائل أخطاء حمراء مرعبة للمستخدم عند انقطاع الإنترنت اللحظي.",
      analogy:
        "networkMode: 'online' يشبه تطبيق المراسلة (مثل واتساب)؛ عندما ترسل رسالة في نفق بدون شبكة، لا يحذف رسالتك ولا يعرض خطأ أحمر فورياً، بل يضع عليها علامة 'ساعة' (Paused)، وبمجرد خروجك من النفق وعودة الإشارة يرسلها تلقائياً إلى الخادم.",
      whyItMatters:
        "يحول التطبيق إلى تطبيق موثوق يعمل في أصعب ظروف الاتصال دون أن يفقد المستخدم بياناته أو يشهد انهياراً في واجهة الاستخدام.",
      syntax: `// تخصيص networkMode لاستعلام معين:
const { data, fetchStatus } = useQuery({
  queryKey: ['local-sync'],
  queryFn: fetchSyncData,
  networkMode: 'offlineFirst' // 'online' | 'always' | 'offlineFirst'
});`,
      simpleExample: `// فحص حالة التعليق بسبب انقطاع الإنترنت
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export function OfflineSensitiveWidget() {
  const { data, fetchStatus } = useQuery({
    queryKey: ['sensitive-data'],
    queryFn: () => fetch('/api/data').then((r) => r.json())
  });

  return (
    <div className="p-4 border rounded">
      {fetchStatus === 'paused' && (
        <div className="p-2 bg-amber-500/20 text-amber-300 text-xs rounded mb-2">
          ⏸️ الاتصال منقطع؛ تم تعليق الطلب وسيتم استئنافه فور عودة الإنترنت تلقائياً.
        </div>
      )}
      <p>{data?.title || 'محتوى الشاشة'}</p>
    </div>
  );
}`,
      advancedExample: `// محاكي حي لحالة انقطاع الشبكة ورصد حالة fetchStatus: paused
import React, { useState, useEffect } from 'react';
import { useQuery, onlineManager } from '@tanstack/react-query';

export function OfflineNetworkSimulator() {
  const [isSimulatedOnline, setIsSimulatedOnline] = useState(true);

  // التحكم اليدوي في مدير حالة الشبكة لـ TanStack Query
  useEffect(() => {
    onlineManager.setOnline(isSimulatedOnline);
  }, [isSimulatedOnline]);

  const { data, fetchStatus, isLoading, refetch } = useQuery({
    queryKey: ['simulated-offline-query'],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 600));
      return { timestamp: new Date().toLocaleTimeString(), status: 'متصل بالخادم' };
    },
    // النمط الافتراضي الذكي: online
    networkMode: 'online',
    staleTime: 0
  });

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-sm text-amber-400">محاكي أنماط الشبكة (Network Modes)</h4>
        <span className={\`px-2 py-0.5 rounded text-[10px] font-bold font-mono \${
          isSimulatedOnline ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800'
        }\`}>
          {isSimulatedOnline ? 'متصل بالإنترنت 🌐' : 'منقطع عن الإنترنت 📴'}
        </span>
      </div>

      {/* لوحة مراقبة الحالة في الوقت الفعلي */}
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5 text-xs font-mono mb-4">
        <div className="flex justify-between">
          <span className="text-slate-400">حالة نشاط الجلب (fetchStatus):</span>
          <span className={\`font-bold \${
            fetchStatus === 'paused' ? 'text-amber-400' : fetchStatus === 'fetching' ? 'text-cyan-400' : 'text-slate-300'
          }\`}>
            {fetchStatus === 'paused' ? '⏸️ معلق (Paused بانتظار الشبكة)' : fetchStatus}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">آخر وقت اتصال ناجح:</span>
          <span className="text-emerald-400">{data?.timestamp || 'لم يتم بعد'}</span>
        </div>
      </div>

      {/* أزرار التحكم بالمحاكاة */}
      <div className="flex gap-2">
        <button
          onClick={() => setIsSimulatedOnline(!isSimulatedOnline)}
          className={\`flex-1 py-2 text-xs font-bold rounded-lg transition-all \${
            isSimulatedOnline ? 'bg-rose-600 hover:bg-rose-500' : 'bg-emerald-600 hover:bg-emerald-500'
          }\`}
        >
          {isSimulatedOnline ? 'محاكاة قطع الإنترنت 📴' : 'استعادة الاتصال بالإنترنت 🌐'}
        </button>

        <button
          onClick={() => refetch()}
          className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-lg"
        >
          طلب تحديث 🔄
        </button>
      </div>

      <p className="text-[11px] text-slate-400 mt-3">
        💡 عندما تقطع الإنترنت وتطلب تحديثاً، يتحول الاستعلام إلى <span className="text-amber-300 font-mono">paused</span> دون إظهار خطأ، ويستأنف فور استعادة الاتصال!
      </p>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم ميزة تعليق الاستعلامات (fetchStatus: 'paused')؛ فعند قطع الإنترنت ومحاولة إعادة الجلب، لا يتعطل التطبيق ولا تظهر رسالة خطأ، بل يظل الطلب معلقاً بهدوء، وبمجرد استعادة الاتصال ينطلق الطلب تلقائياً وتحدث الشاشة في ثوانٍ.",
      commonMistakes: [
        {
          mistake: "معاملة fetchStatus === 'paused' كخطأ برمجي وعرض تنبيهات حمراء للمستخدم.",
          fix: "استوعب أن حالة paused هي سلوك طبيعي متعمد ومصمم لحماية التطبيق أثناء فقدان الشبكة المؤقت."
        },
        {
          mistake: "استخدام networkMode: 'always' مع استدعاءات API عادية لا تملك كاش محلي Service Worker، مما يؤدي لأخطاء فورية عند انقطاع الشبكة.",
          fix: "اترك networkMode بالقيمة الافتراضية 'online' لمعظم استعلامات الـ HTTP القياسية."
        }
      ],
      bestPractices: [
        "استغل متغير fetchStatus وعارض onlineManager لبناء شريط إشعار علوي هادئ يوضح للمستخدم: 'أنت غير متصل حالياً، سنقوم بالمزامنة فور عودة الإنترنت'.",
        "احرص على استخدام مكتبة persistQueryClient لحفظ كاش الاستعلامات في IndexedDB لتوفير تجربة أوفلاين حقيقية 100%."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "قيم وخيارات networkMode في TanStack Query",
        items: [
          {
            title: "online (الافتراضي)",
            points: [
              "لا يطلق أي طلب شبكة إذا كان المتصفح غير متصل",
              "يتحول الاستعلام فوراً لحالة fetchStatus: 'paused'",
              "يستأنف الإرسال التلقائي فور استعادة الاتصال"
            ]
          },
          {
            title: "always (دائماً)",
            points: [
              "يطلق الطلب في كافة الظروف بغض النظر عن حالة الشبكة",
              "مثالي للـ Service Workers والاتصال بـ Localhost و Mock APIs"
            ]
          },
          {
            title: "offlineFirst (أوفلاين أولاً)",
            points: [
              "يحاول إرسال الطلب مرة أولى، فإن تعثر يعلق الاستعلام بانتظار عودة الشبكة",
              "توازن ممتاز للتطبيقات الهجينة"
            ]
          }
        ]
      }
    },
    {
      id: "13-4-f",
      title: "التجفيف والتمييه المعماري (Dehydration & Hydration)",
      englishTitle: "Dehydration & Hydration Pipeline for Full-Stack State",
      pronunciation: "ديهايدريشن آند هايدريشن بايبلاين فور فول ستاك ستيت",
      meaning: "تحويل كاش الخادم لسلسلة بيانات آمنة وحقنها في كاش العميل دون تكرار الطلبات",
      description:
        "`Dehydration` (التجفيف) و `Hydration` (التمييه/الإرواء) هما الجسر المعماري الذي يربط بين خوادم التصيير (Server-Side Rendering في Next.js أو Remix أو Astro) وبين متصفح العميل (Client Browser). 'التجفيف' (Dehydration) هو عملية أخذ لقطة كاملة من كاش الاستعلامات المنفذة بنجاح على الخادم وتحويلها إلى كائن JSON تسلسلي قابل للإرسال داخل كود الـ HTML الأولي للصفحة (`dehydrate(queryClient)`). وعندما تصل الصفحة للمتصفح، تبدأ عملية 'التمييه' (Hydration عبر مكون `<HydrationBoundary state={dehydratedState}>`)؛ حيث يأخذ الكائن المجفف ويعيد ضخه فوراً في كاش عميل المتصفح المحلي. النتيجة السحرية: عندما يقوم أول مكون في المتصفح باستدعاء `useQuery(['posts'])`، يجد البيانات موجودة في الكاش وجاهزة فوراً في `0 ثانية` دون الحاجة لإعادة طلبها من الـ API للمرة الثانية!",
      analogy:
        "التجفيف والتمييه يشبه تجفيف الفواكه أو حبوب القهوة سريعة التحضير؛ على الخادم يتم تجفيف القهوة واستخراج الماء منها لتصبح مسحوقاً خفيفاً يسهل شحنه في الصندوق (Dehydration). وعندما تصل لمنزلك، تصب عليها الماء الساخن فتعود فوراً قهوة طازجة ولذيذة في ثوانٍ معدودة (Hydration).",
      whyItMatters:
        "يقضي تماماً على ظاهرة 'الطلب المزدوج' (Double Fetching)؛ حيث كان المطور يجلب البيانات على السيرفر، ثم يعيد المتصفح جلبها مجدداً في الريندر الأول، مما يهدر موارد الخوادم ويبطئ ظهور الموقع.",
      syntax: `// 1. على الخادم (Next.js Server Component أو Loader):
import { QueryClient, dehydrate } from '@tanstack/react-query';

const queryClient = new QueryClient();
await queryClient.prefetchQuery({ queryKey: ['posts'], queryFn: fetchPosts });
const dehydratedState = dehydrate(queryClient);

// 2. على العميل (Client Component):
import { HydrationBoundary } from '@tanstack/react-query';

export default function Page({ dehydratedState }) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <PostsList />
    </HydrationBoundary>
  );
}`,
      simpleExample: `// مثال مفاهيمي لاستخدام HydrationBoundary في صفحة عميل
import React from 'react';
import { HydrationBoundary, useQuery } from '@tanstack/react-query';

function PostsFeed() {
  // هذا الخطاف سيجد البيانات جاهزة فوراً في الكاش ولن يطلق أي طلب شبكة أولي!
  const { data: posts = [] } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('/api/posts').then((r) => r.json())
  });

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export function PageWrapper({ serverDehydratedState }) {
  return (
    <HydrationBoundary state={serverDehydratedState}>
      <PostsFeed />
    </HydrationBoundary>
  );
}`,
      advancedExample: `// محاكاة معمارية لكامل دورة Dehydration & Hydration برمجياً في الذاكرة
import React, { useState } from 'react';
import { QueryClient, dehydrate, HydrationBoundary, useQuery } from '@tanstack/react-query';

// مكون مستهلك في جانب العميل
function ClientConsumerComponent() {
  const { data, dataUpdatedAt } = useQuery({
    queryKey: ['ssr-hydrated-post'],
    queryFn: async () => ({ title: 'طلب عميل احتياطي', id: 999 })
  });

  return (
    <div className="p-3 bg-emerald-950/40 border border-emerald-800 rounded-xl text-xs space-y-1">
      <p className="font-bold text-emerald-300">محتوى الكاش في العميل: {data?.title}</p>
      <p className="text-[10px] text-slate-400">
        تم توريد البيانات بنجاح في الرام دون أي طلب شبكة إضافي!
      </p>
    </div>
  );
}

export function HydrationSimulatorStudio() {
  const [pipelineState, setPipelineState] = useState({
    serverCacheCreated: false,
    dehydratedJson: null
  });

  // محاكاة مرحلة الخادم (Server Execution)
  const handleServerPreload = async () => {
    // 1. إنشاء عميل استعلامات خاص بالخادم
    const serverClient = new QueryClient();

    // 2. جلب وتخزين البيانات مسبقاً على السيرفر
    await serverClient.prefetchQuery({
      queryKey: ['ssr-hydrated-post'],
      queryFn: async () => ({
        id: 101,
        title: 'مقال مجفف من السيرفر بنجاح تام 🚀',
        serverGeneratedAt: new Date().toLocaleTimeString()
      }),
      staleTime: 1000 * 60 * 5
    });

    // 3. تجفيف كاش السيرفر إلى كائن تسلسلي آمن (Dehydration)
    const dehydrated = dehydrate(serverClient);

    setPipelineState({
      serverCacheCreated: true,
      dehydratedJson: dehydrated
    });
  };

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <h4 className="font-bold text-sm mb-2 text-indigo-400">محاكي دورة التجفيف والتمييه (Dehydration Pipeline)</h4>
      <p className="text-xs text-slate-400 mb-4">
        شاهد كيف تنتقل بيانات الكاش من بيئة الخادم إلى كاش العميل بسلاسة:
      </p>

      {/* زر محاكاة السيرفر */}
      <button
        onClick={handleServerPreload}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl shadow transition-all mb-4"
      >
        1. تشغيل جلب وتجفيف الخادم (Server Dehydrate) ⚡
      </button>

      {/* عرض كائن الـ JSON المجفف */}
      {pipelineState.dehydratedJson && (
        <div className="mb-4">
          <span className="text-[10px] font-mono text-slate-400 block mb-1">
            2. كائن JSON المجفف المرفق بـ HTML:
          </span>
          <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[10px] text-amber-300 max-h-24 overflow-y-auto">
            <pre>{JSON.stringify(pipelineState.dehydratedJson, null, 2)}</pre>
          </div>
        </div>
      )}

      {/* مرحلة التمييه في العميل */}
      {pipelineState.dehydratedJson && (
        <div>
          <span className="text-[10px] font-mono text-slate-400 block mb-1">
            3. تمييه الكاش داخل المتصفح (HydrationBoundary):
          </span>
          <HydrationBoundary state={pipelineState.dehydratedJson}>
            <ClientConsumerComponent />
          </HydrationBoundary>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم معمارية Full-Stack State: يقوم الخادم بـ `prefetchQuery` ثم `dehydrate()`، فيتحول الكاش إلى كائن JSON آمن؛ وبمجرد حقنه في `<HydrationBoundary>` على العميل، يجد مكون `useQuery` البيانات بانتظاره في الذاكرة دون الحاجة لإرسال أي طلب شبكة.",
      commonMistakes: [
        {
          mistake: "استخدام مكون Hydrate القديم المحذوف في الإصدار الخامس.",
          fix: "في v5، تم استبدال مكون Hydrate رسمياً بـ HydrationBoundary."
        },
        {
          mistake: "مشاركة كائن QueryClient واحد بين كافة طلبات الخادم في SSR، مما يسبب تسرب بيانات المستخدمين بين بعضهم البعض (Cross-Request State Leakage).",
          fix: "أنشئ دائماً مثيلاً جديداً من QueryClient لكل طلب خادم فردي (Per-Request QueryClient) في بيئات SSR."
        }
      ],
      bestPractices: [
        "عيّن staleTime مناسباً (مثل دقيقة فما فوق) في خيارات الخادم؛ لكي لا يعتبر العميل البيانات متقادمة (Stale) فور إروائها ويعيد طلبها.",
        "استخدم نمط التجفيف دائماً في Next.js App Router مع Server Components للحصول على أقصى درجات سرعة الـ SEO والـ TTFB.",
        "مرر كائن state مجففاً بدقة إلى HydrationBoundary ولا تعدل بنيته الداخلية."
      ],
      visualInfographic: {
        type: "flowchart",
        title: "خط إنتاج التجفيف والتمييه من الخادم إلى العميل",
        nodes: [
          { id: "1", label: "خادم الويب (SSR / Loader)\nQueryClient جديد لكل طلب", shape: "box", highlight: "purple" },
          { id: "2", label: "جلب مسبق للبيانات على الخادم\nawait prefetchQuery(['posts'])", shape: "box", highlight: "blue" },
          { id: "3", label: "التجفيف (Dehydration)\nconst state = dehydrate(client)", shape: "pill", highlight: "amber" },
          { id: "4", label: "إرسال HTML متضمناً JSON المجفف للمتصفح", shape: "box" },
          { id: "5", label: "التمييه (Hydration)\n<HydrationBoundary state={state}>", shape: "pill", highlight: "green" },
          { id: "6", label: "useQuery في العميل يجد البيانات فوراً\nصفر طلبات شبكة إضافية (0ms)", shape: "box", highlight: "green" }
        ],
        connections: [
          { from: "1", to: "2" },
          { from: "2", to: "3" },
          { from: "3", to: "4" },
          { from: "4", to: "5" },
          { from: "5", to: "6" }
        ]
      }
    },
    {
      id: "13-4-g",
      title: "التكامل مع بيئات التصيير من جانب الخادم (SSR / Next.js)",
      englishTitle: "SSR & Full-Stack Integration with Next.js App Router",
      pronunciation: "إس إس آر آند فول ستاك إنتجريشن وذ نكست جاي إس آب راوتر",
      meaning: "الهيكلة المتوافقة مع أطر العمل الحديثة ومكونات الخادم والعميل",
      description:
        "التكامل بين TanStack Query وأطر عمل الـ Full-Stack الحديثة (مثل Next.js App Router) هو المعيار الصناعي الأكثر طلباً في سوق العمل المعاصر. التحدي الأساسي في هذه البيئات يكمن في الفصل بين 'مكونات الخادم' (Server Components) التي تعمل فقط على السيرفر ولا تدعم الـ State أو الخطافات، وبين 'مكونات العميل' (Client Components المسبوقة بـ 'use client') التي تتفاعل مع المستخدم في المتصفح. النمط المعماري الذهبي هو: 1) إنشاء دالة مساعدة على الخادم تُرجع مثيلاً من `QueryClient` معزولاً لكل طلب (Request-scoped)، 2) جلب البيانات مسبقاً داخل Server Component عبر `prefetchQuery`، 3) تجفيف الكاش بـ `dehydrate(queryClient)`، 4) تغليف مكون العميل بـ `<HydrationBoundary state={dehydratedState}>`، 5) استهلاك البيانات داخل مكون العميل بـ `useQuery` العادي. يجمع هذا النهج بين سرعة تصيير الـ HTML المبدئي لـ SEO والسرعة التفاعلية اللحظية للكاش في المتصفح.",
      analogy:
        "يشبه طباعة كتاب مع تزويده بباركود تفاعلي؛ يطبع السيرفر النص الأولي كاملاً على الورق ليقرأه الجميع فوراً ومحركات البحث (SSR HTML)، وعندما يمسح القارئ الباركود بهاتفه (Hydration) يحصل فوراً على تحديثات حية وفيديوهات تفاعلية مرتبطة بالكتاب في لحظتها.",
      whyItMatters:
        "يوفر أفضل تقييم ممكن في مؤشرات أداء الويب الحيوية (Core Web Vitals: LCP و FCP)، ويمنح محركات البحث (SEO) محتوى حقيقياً مع الحفاظ على ميزات الكاش التفاعلي المتقدمة لـ TanStack Query.",
      syntax: `// ملف server-query-client.js:
import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

// دالة تضمن إنشاء عميل واحد فقط لكل طلب خادم معزول
export const getQueryClient = cache(() => new QueryClient());`,
      simpleExample: `// مكون صفحة Server Component في Next.js
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient } from './getQueryClient';
import { PostsClientView } from './PostsClientView';

export default async function PostsPage() {
  const queryClient = getQueryClient();

  // جلب مسبق للبيانات على الخادم مباشرة
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('https://api.example.com/posts').then((r) => r.json())
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsClientView />
    </HydrationBoundary>
  );
}`,
      advancedExample: `// هيكل معماري متكامل لإنشاء عميل متوافق مع SSR و Browser Cache
import { QueryClient, isServer } from '@tanstack/react-query';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // في بيئة SSR، من الأفضل دائماً تعيين staleTime أكبر من 0
        // لكي لا يقوم العميل بإعادة طلب البيانات فور فتح الصفحة
        staleTime: 60 * 1000
      }
    }
  });
}

// متغير لتخزين العميل في المتصفح فقط
let browserQueryClient = undefined;

export function getSmartQueryClient() {
  if (isServer) {
    // على الخادم: دائماً ننشئ عميلاً جديداً معزولاً لمنع تسرب البيانات بين الزوار
    return makeQueryClient();
  } else {
    // في المتصفح: نحتفظ بمثيل واحد مشترك طوال الجلسة
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}`,
      outputExplanation:
        "يوضح المثال المتقدم 'النمط المفرد الذكي' (Smart Singleton Pattern) الموصى به رسمياً في توثيق TanStack Query v5 لـ Next.js: على السيرفر يتم دائماً إنشاء عميل جديد لكل طلب زائر عبر `isServer`، بينما في المتصفح يُعاد استخدام نفس العميل لضمان استمرار الكاش طوال فترة تصفح المستخدم.",
      commonMistakes: [
        {
          mistake: "ترك staleTime بقيمته الافتراضية 0 في خادم SSR، مما يجعل العميل يعتبر البيانات متقادمة فور وصول الـ HTML ويعيد جلبها فوراً من المتصفح.",
          fix: "عيّن دائماً staleTime: 60 * 1000 على الأقل عند تهيئة كاش الـ SSR لتفادي الـ Refetch الفوري في أول ثانية."
        },
        {
          mistake: "نسيان استخدام await مع prefetchQuery داخل مكونات الخادم، مما يؤدي لتجفيف كاش فارغ قبل وصول رد الشبكة.",
          fix: "تأكد دائماً من كتابة await queryClient.prefetchQuery(...) لضمان اكتمال تحميل البيانات قبل استدعاء dehydrate()."
        }
      ],
      bestPractices: [
        "استخدم دالة getQueryClient المعزولة لمنع تسرب بيانات الجلسات بين المستخدمين في بيئات Node.js المشتركة.",
        "اجعل مكونات الخادم تركز على prefetchQuery و dehydrate، واترك لمكونات العميل مسؤولية useQuery والتفاعل البصري.",
        "حافظ على تطابق تام بين مفاتيح queryKey على الخادم ومفاتيح queryKey على العميل لضمان التعرف على الكاش."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "معمارية TanStack Query في Next.js App Router",
        items: [
          {
            title: "Server Component (خادم)",
            points: [
              "إنشاء QueryClient معزول عبر getQueryClient()",
              "جلب البيانات مسبقاً: await prefetchQuery()",
              "تجفيف الكاش: dehydrate(queryClient)",
              "تغليف العميل بـ HydrationBoundary"
            ]
          },
          {
            title: "Client Component (عميل)",
            points: [
              "موسوم بـ 'use client'",
              "استدعاء useQuery(['posts']) المألوف",
              "يجد البيانات جاهزة فوراً في 0 ثانية",
              "يوفر ميزات التفاعل وإعادة الجلب والـ Mutations"
            ]
          }
        ]
      }
    },
    {
      id: "13-4-h",
      title: "بناء طبقة خطافات مخصصة نظيفة (Custom Query Hooks)",
      englishTitle: "Engineering a Clean Custom Query Hooks Layer",
      pronunciation: "إنجينيرينج أ كلين كاستم كويري هوكس لاير",
      meaning: "عزل منطق استدعاءات الخادم والكاش في خطافات قابلة لإعادة الاستخدام",
      description:
        "من أسوأ الممارسات المعمارية في تطبيقات الإنتاج استدعاء `useQuery` و `useMutation` مباشرة داخل مكونات العرض مع كتابة روابط الـ API ومفاتيح الكاش بصورة مبعثرة في كل ملف. الحل المعماري الاحترافي المتبع في كبرى الشركات الهندسية هو 'بناء طبقة خطافات مخصصة' (Custom Hooks Architecture Layer). في هذا النمط، يُنشأ مجلد مخصص مثل `src/features/users/hooks/` يحتوي على خطافات مخصصة نظيفة مثل: `useUsers()`, `useUser(id)`, `useCreateUser()`, و `useDeleteUser()`. يقوم الخطاف بتغليف `queryKey`, دالة الجلب `queryFn`, خيارات الـ `staleTime`, وإبطال الكاش في مكان واحد موحد. تصبح مكونات الـ JSX حينها شديدة النقاء والبساطة؛ حيث تستدعي فقط `const { users, isLoading } = useUsers()` دون أن تعرف أي تفاصيل عن روابط الـ URL أو مفاتيح الكاش أو سياسات التخزين المؤقت.",
      analogy:
        "بناء طبقة الخطافات المخصصة يشبه استخدام مقود ودواسات قيادة قياسية في سيارتك؛ أنت تضغط دواسة الوقود لتنطلق السيارة دون أن تحتاج لمعرفة تفاصيل ضخ الوقود ونظام الإشعال الداخلي في المحرك؛ فالخطاف المخصص يخفي تعقيدات المحرك ويمنحك واجهة قيادة مريحة وأنيقة.",
      whyItMatters:
        "يوفر صيانة فائقة السهولة؛ فإذا تغير مسار الـ API أو رغبت في تعديل staleTime، تعدله في سطر واحد داخل الخطاف المخصص فينعكس التعديل تلقائياً على عشرات الشاشات والمكونات التي تستهلكه.",
      syntax: `// تعريف الخطاف المخصص النظيف:
export function useUsers(filters) {
  return useQuery({
    queryKey: userKeys.list(filters),
    queryFn: () => fetchUsersApi(filters),
    staleTime: 1000 * 60 * 3
  });
}

// استهلاكه في أي مكون بسطر واحد فقط:
const { data: users, isLoading } = useUsers(filters);`,
      simpleExample: `// ملف useUserProfile.js مخصص
import { useQuery } from '@tanstack/react-query';

export function useUserProfile(userId) {
  const queryInfo = useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
      if (!res.ok) throw new Error('فشل جلب الملف الشخصي');
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!userId
  });

  // إرجاع واجهة نظيفة ومخصصة
  return {
    user: queryInfo.data,
    isLoadingUser: queryInfo.isLoading,
    userError: queryInfo.error
  };
}`,
      advancedExample: `// بنية معمارية احترافية متكاملة لطبقة الخطافات المخصصة لوحدة المنتجات (Products Feature Layer)
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// 1. مفاتيح الكاش المركزية للوحدة
export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (category) => [...productKeys.lists(), { category }] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (id) => [...productKeys.details(), id] as const
};

// 2. خطاف جلب المنتجات المفلترة
export function useProducts(category = 'all') {
  return useQuery({
    queryKey: productKeys.list(category),
    queryFn: async () => {
      const url = category === 'all'
        ? 'https://jsonplaceholder.typicode.com/posts?_limit=4'
        : \`https://jsonplaceholder.typicode.com/posts?userId=\${category}&_limit=4\`;
      const res = await fetch(url);
      return res.json();
    },
    staleTime: 1000 * 60 * 3
  });
}

// 3. خطاف طفرة إضافة منتج جديد مع إبطال الكاش الداخلي
export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newProduct) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });
      return res.json();
    },
    onSuccess: () => {
      // إبطال كاش كافة قوائم المنتجات تلقائياً
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    }
  });
}

// 4. استهلاك الخطافات في مكون واجهة المستخدم بمنتهى النقاء والأناقة
export function CleanProductsView() {
  const { data: products = [], isLoading } = useProducts('all');
  const createProductMutation = useCreateProduct();

  const handleQuickAdd = () => {
    createProductMutation.mutate({ title: 'منتج هندسي جديد' });
  };

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-sm text-emerald-400">طبقة الخطافات المخصصة النظيفة</h4>
        <button
          onClick={handleQuickAdd}
          disabled={createProductMutation.isPending}
          className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-xs font-bold rounded-lg shadow"
        >
          {createProductMutation.isPending ? 'إضافة...' : '➕ إضافة سريعة'}
        </button>
      </div>

      {isLoading ? (
        <p className="text-xs text-slate-400 py-4 text-center">جارٍ سحب المنتجات...</p>
      ) : (
        <div className="space-y-1.5">
          {products.map((p) => (
            <div key={p.id} className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-xs">
              <span className="font-bold text-slate-200 truncate block">{p.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم النمط القياسي في الشركات الهندسية العالمية؛ مكون الواجهة `CleanProductsView` أصبح خفيفاً ونظيفاً تماماً وخالياً من أي كود شبكة أو مفاتيح كاش، حيث يستدعي فقط `useProducts()` و `useCreateProduct()` اللذين يتكفلان بكافة التفاصيل المعمارية خلف الكواليس.",
      commonMistakes: [
        {
          mistake: "إرجاع data فقط من الخطاف المخصص وحرمان المكون من مؤشرات isLoading و isError و refetch.",
          fix: "أعد كائن الاستعلام كاملاً (...queryInfo) أو استخرج المؤشرات الضرورية (data, isLoading, error, refetch) لتمكين المكون من التفاعل معها."
        },
        {
          mistake: "كتابة منطق الـ UI (مثل التوجيه والـ Modals) داخل الخطاف المخصص، مما يجعله مرتبطاً بشاشة واحدة.",
          fix: "احرص على أن تكون الخطافات المخصصة نقية وتركز فقط على البيانات والكاش، واترك منطق الواجهة للمكون المستهلك."
        }
      ],
      bestPractices: [
        "ضع خطافات كل مجال أو ميزة في مجلد مخصص مثل src/features/auth/api/ أو src/hooks/api/.",
        "اجمع مفاتيح الكاش في كائن Query Key Factory لكل وحدة بجوار الخطافات المخصصة.",
        "سمِّ الخطافات بأسماء واضحة تتبع سياق العمل مثل useCart(), useInvoice(id), useUpdateUserProfile()."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "معمارية طبقة الخطافات المخصصة النظيفة",
        items: [
          {
            title: "1. طبقة المفاتيح (Key Factory)",
            points: [
              "كائن مركزي يولد مصفوفات المفاتيح",
              "يمنع الأخطاء الإملائية ويوحد صيغ التخزين",
              "يسهل عمليات الإبطال والتحديث الهرمي"
            ]
          },
          {
            title: "2. طبقة الخطافات (Custom Hooks)",
            points: [
              "useUsers, useUserDetail, useUpdateUser",
              "تغليف useQuery و useMutation مع استدعاءات الـ API",
              "إدارة خيارات staleTime والإبطال في مكان واحد"
            ]
          },
          {
            title: "3. طبقة الواجهات (Pure UI Components)",
            points: [
              "مكونات JSX خالية من أي روابط API أو تفاصيل كاش",
              "استهلاك سلس بسطر واحد فقط",
              "أعلى درجات سهولة القراءة وإعادة الاستخدام والصيانة"
            ]
          }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q13-4-1",
      question: "في الإصدار الخامس من TanStack Query، كيف يتم تحقيق نمط الترقيم السلس ومنع وميض الشاشة أثناء جلب الصفحة الجديدة؟",
      options: [
        "باستخدام useState لحفظ الصفحة القديمة يدوياً",
        "بتمرير دالة placeholderData: keepPreviousData داخل خيارات useQuery",
        "بتعطيل الكاش تماماً",
        "باستخدام خاصية scrollRestoration"
      ],
      correctAnswer: 1,
      explanation:
        "في الإصدار v5، يتم استيراد الدالة المخصصة keepPreviousData وتمريرها كـ placeholderData: keepPreviousData؛ مما يضمن بقاء الصفحة السابقة معروضة بثبات حتى تكتمل الصفحة الجديدة في الخلفية دون أي وميض."
    },
    {
      id: "q13-4-2",
      question: "ما هو الفارق الجوهري بين initialData و placeholderData في TanStack Query؟",
      options: [
        "initialData تُحفظ في الكاش كبيانات حقيقية وتوقف طلب الشبكة طالما لم تنتهِ مدة حداثتها، بينما placeholderData مجرد بديل مؤقت لا يُحفظ في الكاش ولا يوقف طلب الشبكة",
        "placeholderData تعمل فقط في تطبيقات الهواتف الذكية",
        "initialData تتطلب دائماً استخدام مكتبة Axios",
        "لا يوجد فرق بينهما إطلاقاً"
      ],
      correctAnswer: 0,
      explanation:
        "initialData تُعتبر بيانات حقيقية وموثوقة تُسجل في الكاش وتخضع لقواعد staleTime (فلا ينطلق طلب شبكة إذا كانت طازجة)، بينما placeholderData مجرد قناع مؤقت للعرض الفوري ولا يُسجل في الكاش وينطلق طلب الشبكة فوراً في نفس اللحظة."
    },
    {
      id: "q13-4-3",
      question: "لماذا يُنصح ببناء طبقة خطافات مخصصة (Custom Query Hooks Layer) بدلاً من استدعاء useQuery مباشرة في المكونات؟",
      options: [
        "لأن React تمنع استدعاء useQuery داخل المكونات",
        "لعزل روابط الـ API ومفاتيح الكاش وسياسات staleTime في مكان مركزي واحد يسهل صيانته وإعادة استخدامه",
        "لتقليل استهلاك البطارية بنسبة 90%",
        "لتحويل الكود إلى لغة WebAssembly"
      ],
      correctAnswer: 1,
      explanation:
        "طبقة الخطافات المخصصة تعزل منطق الشبكة والكاش عن كود الواجهة؛ مما يجعل مكونات JSX نقية، ويسمح بتعديل روابط الـ API أو سياسات الكاش في ملف واحد دون الحاجة للبحث في عشرات الشاشات."
    }
  ],
  exercise: {
    title: "تمرين تطبيقي: بناء خلاصة تمرير لانهائي متكاملة باستخدام useInfiniteQuery",
    instruction:
      "قم ببناء مكون خلاصة منشورات يدعم التمرير اللانهائي (useInfiniteQuery)، يحدد initialPageParam بـ 1، ويستخدم getNextPageParam لحساب الصفحة التالية، ويوفر زراً لتحميل المزيد يظهر مؤشر isFetchingNextPage أثناء جلب الصفحة التالية.",
    starterCode: `import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

export function InfiniteExerciseFeed() {
  // TODO: استدع useInfiniteQuery لجلب صفحات المنشورات من:
  // https://jsonplaceholder.typicode.com/posts?_page=\${pageParam}&_limit=3
  // مع initialPageParam: 1
  // و getNextPageParam يوقف الجلب عند 3 صفحات (allPages.length < 3 ? allPages.length + 1 : undefined)

  return (
    <div className="p-4 border rounded-xl max-w-md mx-auto">
      <h3 className="font-bold text-lg mb-2">خلاصة التمرير اللانهائي</h3>
      {/* عرض المنشورات وزر تحميل المزيد */}
    </div>
  );
}`,
    hints: [
      "في useInfiniteQuery: حدد initialPageParam: 1.",
      "في دالة queryFn: استقبل ({ pageParam }).",
      "في getNextPageParam: (lastPage, allPages) => allPages.length < 3 ? allPages.length + 1 : undefined.",
      "كرر الصفحات عبر data?.pages.map((page, i) => ...) ثم page.map(post => ...)."
    ],
    solutionCode: `import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

export function InfiniteExerciseFeed() {
  // استدعاء useInfiniteQuery وفق المعايير القياسية للإصدار v5
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error
  } = useInfiniteQuery({
    queryKey: ['exercise-infinite-feed'],
    queryFn: async ({ pageParam }) => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/posts?_page=\${pageParam}&_limit=3\`);
      if (!res.ok) throw new Error('فشل جلب المنشورات');
      return res.json();
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // إيقاف الجلب بعد اكتمال 3 صفحات
      return allPages.length < 3 ? allPages.length + 1 : undefined;
    }
  });

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-base text-emerald-400">خلاصة التمرير اللانهائي المكتملة</h3>
        <span className="text-[10px] text-slate-400 font-mono">
          صفحات محملة: {data?.pages.length || 0} / 3
        </span>
      </div>

      {/* معالجة الحالات الأولية */}
      {isLoading && <p className="text-xs text-slate-400 text-center py-6 animate-pulse">جارٍ تحميل الخلاصة الأولية...</p>}
      {isError && <p className="text-xs text-rose-400 text-center py-4">خطأ: {error.message}</p>}

      {/* استعراض قائمة المنشورات مجمعة عبر كافة الصفحات */}
      <div className="space-y-2 mb-4">
        {data?.pages.map((page, pageIdx) => (
          <React.Fragment key={pageIdx}>
            {page.map((post) => (
              <div key={post.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] text-emerald-400 font-mono block">منشور #{post.id}</span>
                <p className="text-xs font-semibold text-slate-200 truncate mt-0.5">{post.title}</p>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      {/* زر جلب الصفحة التالية أو رسالة النهاية */}
      <div className="pt-2 border-t border-slate-800">
        {hasNextPage ? (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow transition-all active:scale-95"
          >
            {isFetchingNextPage ? 'جارٍ جلب المزيد من السيرفر...' : 'تحميل منشورات إضافية ⬇️'}
          </button>
        ) : (
          <p className="text-xs text-slate-500 text-center py-2 font-mono">
            🎉 تم تحميل كافة المنشورات المتاحة بنجاح!
          </p>
        )}
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة المفاهيم المتقدمة في TanStack Query",
    description: "الدليل الشامل للأنماط المعمارية المتقدمة: التمرير اللانهائي، الترقيم السلس، الـ SSR، وطبقة الخطافات.",
    elements: [
      {
        title: "1. التمرير والترقيم اللانهائي",
        subtitle: "useInfiniteQuery & keepPreviousData",
        badge: "التصفح السلس",
        color: "purple",
        details: [
          "useInfiniteQuery: تجميع الصفحات المتتالية في data.pages",
          "keepPreviousData: تثبيت الصفحة السابقة ومنع وميض التحميل الأبيض",
          "IntersectionObserver: رصد الاقتراب من نهاية القائمة والجلب التلقائي"
        ]
      },
      {
        title: "2. كفاءة البيانات والاستعلامات",
        subtitle: "Placeholder vs Initial & useQueries",
        badge: "الأداء المتوازي",
        color: "emerald",
        details: [
          "initialData: بيانات حقيقية في الكاش وتوقف طلب الشبكة المكرر",
          "placeholderData: قناع بديل مؤقت ولا يُحفظ في الكاش",
          "useQueries: جلب مصفوفة ديناميكية من الموارد بالتوازي الكامل"
        ]
      },
      {
        title: "3. معمارية الـ Full-Stack و SSR",
        subtitle: "Dehydration & Hydration",
        badge: "التصيير المزدوج",
        color: "blue",
        details: [
          "dehydrate: تحويل كاش الخادم لسلسلة JSON آمنة مرافقة لـ HTML",
          "HydrationBoundary: تمييه الكاش في المتصفح بزمن 0ms",
          "منع الطلب المزدوج: العميل يستفيد من بيانات السيرفر دون إعادة طلبها"
        ]
      },
      {
        title: "4. طبقة الخطافات المخصصة النظيفة",
        subtitle: "Custom Query Hooks Architecture",
        badge: "الهندسة النظيفة",
        color: "amber",
        details: [
          "عزل كود الشبكة: إخفاء تفاصيل useQuery وروابط الـ URL خلف خطافات نقية",
          "Query Key Factory: توحيد توليد وإبطال المفاتيح في مكان مركزي",
          "مكونات JSX نقية: استدعاء نظيف بسطر واحد مثل useProducts()"
        ]
      }
    ]
  }
};
