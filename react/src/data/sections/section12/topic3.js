// src/data/sections/section12/topic3.js
// القسم 12: إدارة الحالة المتقدمة - الموضوع 3: RTK Query

export const topic3 = {
  id: "12.3",
  title: "RTK Query",
  description: "المحرك المتقدم والمدمج في Redux Toolkit لإدارة حالة الخادم (Server State): إنشاء شرائح الـ API عبر createApi، وتعريف الاستعلامات (Queries) والعمليات (Mutations)، والتخزين المؤقت الذكي (Caching)، وإبطال البيانات بالوسوم (Tags Invalidation)، والتحديثات المتفائلة (Optimistic Updates)، والترقيم.",
  subtopics: [
    {
      id: "12.3.a",
      title: "مفهوم RTK Query",
      englishTerm: "RTK Query Overview (مَفْهُومُ آرْ تِي كِيه كْوِيرِي: محرك جلب وتخزين بيانات الخادم)",
      description: "حزمة RTK Query هي أداة متطورة مدمجة داخل `@reduxjs/toolkit` مصممة خصيصاً لتبسيط عمليات جلب وتخزين بيانات الخادم المؤقتة (Server State Caching). تقضي على كتابة Thunks يدوية أو إدارة `isLoading` و `error` و `data` في Redux؛ وتوفر توليداً تلقائياً لخطافات React مثل `useGetUsersQuery()` التي تدير دورة حياة جلب البيانات والتخزين المؤقت وإعادة المحاولة وإلغاء الطلبات المكررة (Deduplication) تلقائياً.",
      analogy: "مثل التعاقد مع شركة تموين متكاملة لمطعمك: بدلاً من الذهاب للسوق كل صباح ومساومة التجار وتخزين البضائع في المستودع بنفسك (Manual Thunks)، تتولى شركة التموين توريد الخضار الطازج في الموعد المحدد، واستبدال التالف تلقائياً، وإبقاء الثلاجة ممتلئة دائماً دون أي عناء منك.",
      whyItMatters: "توفر أكثر من 80% من الكود المكتوب في تطبيقات Redux التقليدية الخاصة بالاتصال بالـ API، وتمنحك أداءً خارقاً في التخزين المؤقت وتخفيف ضغط الشبكة على الخوادم.",
      syntax: "import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';",
      simpleExample: `import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// تعريف شريحة API أساسية بـ RTK Query
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    // استعلام لجلب المنتجات
    getProducts: builder.query({
      query: () => 'products?limit=5',
    }),
  }),
});

// RTK Query تولد هذا الخطاف تلقائياً بمجرد تسمية الدالة getProducts!
export const { useGetProductsQuery } = productsApi;`,
      advancedExample: `// استخدام الخطاف المولد في مكون React والاستفادة من كافة الحالات التلقائية
import React from 'react';
import { useGetProductsQuery } from './productsApi';

export function ProductsRTKViewer() {
  // استدعاء الخطاف المولد: يوفر data, error, isLoading, isFetching تلقائياً!
  const { data, error, isLoading, isFetching, refetch } = useGetProductsQuery();

  if (isLoading) {
    return <div className="p-6 text-center text-blue-500 font-bold">جاري جلب البيانات من الخادم... ⏳</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500 font-bold">تعذر الاتصال بالـ API ⚠️</div>;
  }

  return (
    <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 max-w-md mx-auto text-right">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-emerald-400">قائمة المنتجات عبر RTK Query</h4>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition"
        >
          {isFetching ? 'تحديث...' : '🔄 تحديث'}
        </button>
      </div>

      <ul className="space-y-2 text-xs">
        {data?.products?.map((p) => (
          <li key={p.id} className="p-2 bg-slate-800/60 rounded-xl flex justify-between">
            <span>{p.title}</span>
            <span className="text-emerald-400 font-bold font-mono">{p.price} $</span>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      output: "إدارة متكاملة وأوتوماتيكية لحالات التحميل والأخطاء والبيانات والتحديث اليدوي بسطر برمجي واحد.",
      commonMistakes: [
        {
          mistake: "استيراد createApi من '@reduxjs/toolkit/query' بدلاً من '@reduxjs/toolkit/query/react'.",
          fix: "استورد دائماً من مسار '/react' للحصول على التوليد التلقائي لخطافات React مثل use...Query.",
          explanation: "المسار الأساسي يحتوي على النواة المجردة فقط بدون توليد React Hooks."
        }
      ],
      bestPractices: [
        "أنشئ شريحة API مركزية واحدة لكل عنوان خادم أساسي (Single Base URL) بدلاً من إنشاء عشرات الـ APIs المنفصلة.",
        "استغل ميزة usePrefetch للتحميل المسبق لبيانات الصفحة التالية عند تحويم مؤشر الفأرة على الروابط."
      ],
      infographic: {
        title: "ماذا تقدم حزمة RTK Query للمطور؟",
        elements: [
          { label: "توليد Hooks تلقائياً", role: "useGetItemsQuery و useAddItemMutation مولدة أوتوماتيكياً", color: "blue" },
          { label: "التخزين المؤقت الذكي", role: "حفظ استجابات الخادم في Cache ومنع تكرار نفس الطلب", color: "emerald" },
          { label: "إدارة الحالات الأربعة", role: "توفير isLoading, isFetching, isSuccess, isError جاهزة", color: "amber" },
          { label: "Revalidation بالوسوم", role: "تحديث تلقائي وفوري للقوائم بعد أي عملية تعديل أو حذف", color: "purple" }
        ]
      }
    },
    {
      id: "12.3.b",
      title: "إنشاء API Slice",
      englishTerm: "Creating an API Slice with createApi (إِنْشَاءُ شَرِيحَةِ الخِدْمَاتِ المَرْكَزِيَّة)",
      description: "شريحة الـ API (API Slice) هي نقطة التحديد المركزية لكافة اتصالات التطبيق بالواجهة الخلفية. تُنشأ بواسطة دالة `createApi` وتتطلب: 1) `reducerPath` (المفتاح الذي ستُخزن فيه بيانات الـ Cache في متجر Redux)، 2) `baseQuery` (محرك الاتصال المعتمد على `fetchBaseQuery` لتحديد الرابط الأساسي والترويسات والرموز)، و 3) `endpoints` (دالة بناء تُعرف كافة الاستعلامات والعمليات).",
      analogy: "مثل تأسيس سفارة رسمية للتعامل مع دولة أجنبية: السفارة لها مقر رسمي دائم (Base URL)، ومكتب استعلامات للمواطنين (Queries)، ومكتب قنصلي لإصدار التأشيرات والوثائق (Mutations).",
      whyItMatters: "توحيد كافة إعدادات الشبكة، والترويسات، وإدارة التوثيق في ملف واحد، مما يمنع تشتت الروابط عبر عشرات الملفات.",
      syntax: "export const apiSlice = createApi({\n  reducerPath: 'api',\n  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),\n  endpoints: (builder) => ({ ... }),\n});",
      simpleExample: `import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// إنشاء شريحة الـ API المركزية
export const apiSlice = createApi({
  // المفتاح في مخزن Redux
  reducerPath: 'api',
  // إعداد الرابط الأساسي
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.myproject.com/v1' }),
  // تعريف نقاط النهاية
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
  }),
});

// ربطها في store.js:
// configureStore({
//   reducer: { [apiSlice.reducerPath]: apiSlice.reducer },
//   middleware: (g) => g().concat(apiSlice.middleware),
// });`,
      advancedExample: `// شريحة API متطورة مع ترويسات التوثيق التلقائية وإعدادات المهلة
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const secureApiSlice = createApi({
  reducerPath: 'secureApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.enterpriseshop.com/v1',
    // إرفاق رمز التوثيق تلقائياً مع كل طلب يخرج من التطبيق
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', 'Bearer ' + token);
      }
      headers.set('Accept', 'application/json');
      return headers;
    },
    timeout: 10000, // مهلة 10 ثوانٍ
  }),
  // تعريف وسوم التخزين المؤقت لإبطال البيانات لاحقاً
  tagTypes: ['Products', 'Orders', 'User'],
  endpoints: (builder) => ({
    // سيتم تعريف الاستعلامات هنا لاحقاً
  }),
});`,
      output: "بنية تحتية متكاملة للاتصال بالشبكة موحدة الترويسات ومحمية برموز التوثيق وجاهزة لربط نقاط النهاية.",
      commonMistakes: [
        {
          mistake: "نسيان إضافة api.middleware إلى دالة configureStore.",
          fix: "تأكد دائماً من كتابة: middleware: (g) => g().concat(apiSlice.middleware).",
          explanation: "بدون وسيطة RTK Query لن تعمل ميزات التخزين المؤقت، وإلغاء الصلاحية، ودورات حياة الاشتراكات."
        }
      ],
      bestPractices: [
        "أنشئ API Slice واحدة أساسية واستخدم خاصية injectEndpoints لتوسيعها عبر ملفات الميزات المستقلة.",
        "استغل دالة prepareHeaders لحقن رموز Bearer Tokens تلقائياً دون تكرار في كل استدعاء."
      ],
      infographic: {
        title: "هيكل شريحة createApi()",
        elements: [
          { label: "reducerPath", role: "اسم الشريحة في شجرة Redux Store المركزية", color: "blue" },
          { label: "fetchBaseQuery", role: "تحديد الرابط الأساسي baseUrl وحقن الترويسات في prepareHeaders", color: "emerald" },
          { label: "tagTypes", role: "مصفوفة وسوم البيانات المستخدمة في إبطال التخزين المؤقت تلقائياً", color: "purple" },
          { label: "endpoints", role: "دالة المصنع لتعريف الاستعلامات والعمليات وتوليد الخطافات", color: "amber" }
        ]
      }
    },
    {
      id: "12.3.c",
      title: "تعريف Queries",
      englishTerm: "Defining Queries (تَعْرِيفُ الاِسْتِعْلَامَاتِ: قراءة وجلب البيانات الآمنة)",
      description: "الاستعلام (Query) في RTK Query يُستخدم حصراً لعمليات القراءة واسترجاع البيانات (HTTP GET). يُعرّف باستخدام دالة `builder.query()` داخل كائن `endpoints`. يستقبل معاملات برمجية (مثل رقم الصفحة أو معرف المورد)، ويحدد مسار الرابط أو خيارات الطلب، ويقوم RTK Query تلقائياً بتوليد خطاف باسم `use[EndpointName]Query` يدير التخزين المؤقت وتتبع دورة حياة الطلب.",
      analogy: "مثل طلب كشف حساب من البنك: تقدم رقم الحساب (معامل الاستعلام)، فيرجع لك الموظف ورقة تحتوي على الحركات المالية لقراءتها والاطلاع عليها دون إجراء أي خصم أو تعديل.",
      whyItMatters: "يوفر خطافات قراءة غاية في القوة تتولى فحص الكاش، فإذا كانت البيانات موجودة مسبقاً تُعرض في 0ms دون إرهاق الشبكة.",
      syntax: "getUserById: builder.query({\n  query: (id) => '/users/' + id,\n})",
      simpleExample: `import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    // استعلام يقبل معاملاً واحداً (معرف المنتج)
    getProductById: builder.query({
      query: (id) => 'products/' + id,
    }),
  }),
});

// تصدير الخطاف المولد تلقائياً
export const { useGetProductByIdQuery } = api;`,
      advancedExample: `import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const advancedPostsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    // استعلام يقبل كائن معاملات للبحث والترقيم مع معالجة النتيجة المرجعة (TransformResponse)
    searchPosts: builder.query({
      query: ({ searchTerm, page = 1, limit = 5 }) => ({
        url: 'posts',
        params: {
          q: searchTerm,
          _page: page,
          _limit: limit,
        },
      }),
      // تحويل وتنظيف البيانات قبل تسليمها لمكونات React
      transformResponse: (rawResponse, meta) => {
        return {
          posts: rawResponse,
          totalCount: Number(meta?.response?.headers.get('x-total-count')) || rawResponse.length,
        };
      },
    }),
  }),
});

export const { useSearchPostsQuery } = advancedPostsApi;`,
      output: "خطاف React ذكي يقبل معاملات الفلترة والترقيم ويعيد بيانات منظمة ومصفاة مع إدارة الكاش.",
      commonMistakes: [
        {
          mistake: "استخدام builder.query لعمليات التعديل أو الحذف (POST/DELETE).",
          fix: "استخدم builder.query لطلبات GET فقط، واستخدم builder.mutation للعمليات التي تعدل البيانات.",
          explanation: "الاستعلامات مصممة للقراءة والتخزين المؤقت، بينما الطفرات Mutations مصممة للتعديل وإبطال الكاش."
        }
      ],
      bestPractices: [
        "استغل دالة transformResponse لإعادة هيكلة وتنظيف بيانات الـ API قبل وصولها للواجهة.",
        "مرر كائناً كمعامل عند وجود أكثر من متغير في الاستعلام: query: ({ id, filter }) => ... ."
      ],
      infographic: {
        title: "تشريح دالة builder.query()",
        elements: [
          { label: "query: (arg) => ...", role: "تحديد مسار الرابط ومعاملات الاستعلام params وطريقة الطلب", color: "blue" },
          { label: "transformResponse", role: "تنقية وفرز وهندسة البيانات قبل تخزينها في الـ Cache", color: "emerald" },
          { label: "providesTags", role: "ربط الاستعلام بوسوم Caching لإعادة جلبه لاحقاً عند التعديل", color: "purple" },
          { label: "Auto Generated Hook", role: "توليد use[Name]Query للربط المباشر بمكونات الواجهة", color: "amber" }
        ]
      }
    },
    {
      id: "12.3.d",
      title: "تعريف Mutations",
      englishTerm: "Defining Mutations (تَعْرِيفُ العَمَلِيَّاتِ وَالطَّفَرَات: إرسال طلبات POST و PUT و DELETE)",
      description: "العملية أو الطفرة (Mutation) في RTK Query هي نقطة النهاية المخصصة لتعديل البيانات في الخادم (إنشاء، تحديث، أو حذف). تُعرّف بواسطة `builder.mutation()`، وتولد خطافاً يعيد مصفوفة `[triggerFunction, resultObject]` تشبه تماماً خطاف useState؛ حيث يتيح الأول استدعاء العملية برمجياً متى شئنا وتمرير البيانات، بينما يحتوي الثاني على حالات التنفيذ `{ isLoading, isSuccess, error }`.",
      analogy: "مثل إيداع أو سحب نقود من الصراف الآلي: تضغط على زر 'سحب 500 ريال' (Trigger)، فيقوم الصراف بالاتصال بالبنك وخصم المبلغ وتحديث رصيدك الفعلي في قاعدة البيانات.",
      whyItMatters: "توفر طريقة متجانسة لإرسال البيانات للخادم مع تحديث فوري لحالات الأزرار، والقدرة الفطرية على إبطال الكاش وتحديث القوائم المرتبطة.",
      syntax: "addPost: builder.mutation({\n  query: (body) => ({ url: '/posts', method: 'POST', body }),\n})",
      simpleExample: `import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    // تعريف عملية إنشاء مهمة جديدة POST
    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: 'todos',
        method: 'POST',
        body: newTodo,
      }),
    }),
  }),
});

// RTK Query تولد خطاف الطفرة useAddTodoMutation تلقائياً
export const { useAddTodoMutation } = todosApi;`,
      advancedExample: `// استخدام خطاف الطفرة في واجهة المستخدم مع إدارة التحميل والنجاح
import React, { useState } from 'react';
import { useAddTodoMutation } from './todosApi';

export function AddTodoForm() {
  const [title, setTitle] = useState('');
  // الخطاف يعيد: دالة الإطلاق (addTodo) وكائن الحالة (status)
  const [addTodo, { isLoading, isSuccess, isError, error }] = useAddTodoMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      // إطلاق العملية وانتظار نتيجتها عبر unwrap()
      await addTodo({ title, completed: false, userId: 1 }).unwrap();
      setTitle(''); // تصفير الحقل عند النجاح
    } catch (err) {
      console.error('فشلت عملية الإضافة:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-3 max-w-sm">
      <h4 className="font-bold text-xs text-blue-400">إضافة مهمة جديدة (Mutation Trigger)</h4>
      {isSuccess && <p className="text-emerald-400 text-xs">تمت الإضافة بنجاح وتحديث الكاش! ✔️</p>}
      {isError && <p className="text-rose-400 text-xs">خطأ: {error?.data || 'تعذر الحفظ'}</p>}

      <input
        type="text"
        placeholder="عنوان المهمة..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none"
        disabled={isLoading}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition disabled:opacity-50"
      >
        {isLoading ? 'جاري الحفظ بالخادم...' : 'حفظ المهمة (POST)'}
      </button>
    </form>
  );
}`,
      output: "إرسال أنيق للبيانات مع تحكم كامل بحالات التعطيل وإظهار رسائل النجاح التلقائية.",
      commonMistakes: [
        {
          mistake: "نسيان استخدام .unwrap() عند محاولة التقاط أخطاء الـ Mutation داخل كتلة try/catch.",
          fix: "استخدم دائماً await trigger(data).unwrap() للوصول للقيمة الحقيقية أو قذف الخطأ في catch.",
          explanation: "دوال Mutations ترجع وعداً ينجح دائماً لتمكين فحص isError؛ استخدام .unwrap() يرجع الوعد الأصلي."
        }
      ],
      bestPractices: [
        "استخدم خاصية invalidatesTags داخل Mutation لإعلام RTK Query بضرورة إعادة جلب الاستعلامات المرتبطة تلقائياً.",
        "عطل أزرار النماذج باستخدام disabled={isLoading} لمنع نقرات الإرسال المتعددة."
      ],
      infographic: {
        title: "آلية عمل دوال الطفرات builder.mutation()",
        elements: [
          { label: "1. تعريف Mutation", role: "تحديد method: 'POST'/'DELETE' والحمولة body", color: "blue" },
          { label: "2. خطاف [trigger, result]", role: "يعيد دالة الاستدعاء اليدوية وكائن الحالة الحالية", color: "emerald" },
          { label: "3. trigger().unwrap()", role: "تنفيذ الطلب وفك النتيجة للتعامل مع try/catch", color: "purple" },
          { label: "4. invalidatesTags", role: "إبطال الكاش وتحديث القوائم تلقائياً في نفس اللحظة", color: "amber" }
        ]
      }
    },
    {
      id: "12.3.e",
      title: "التخزين المؤقت Caching",
      englishTerm: "Cache Management & Lifetime (إِدَارَةُ الذَّاكِرَةِ المُؤَقَّتَةِ: زمن البقاء وإلغاء الاشتراكات)",
      description: "التخزين المؤقت (Caching) هو القلب النابض لـ RTK Query: عند استدعاء أي استعلام، يتم حفظ نتيجته في ذاكرة المتجر المرتبطة باسم المسار ومعاملاته. إذا طلب مكون آخر في الصفحة نفس البيانات بنفس المعاملات، يسلمها له RTK Query فوراً من الـ Cache في 0 ثانية دون إرسال طلب شبكي مكرر (Request Deduplication). كما يدير المحرك زمن بقاء الكاش عبر خاصية `keepUnusedDataFor` (الافتراضي 60 ثانية بعد إلغاء تركيب آخر مكون مشترك).",
      analogy: "مثل تخزين نتائج الحسابات في ذاكرة الآلة الحاسبة: إذا طلبت حساب جذر 144 وأعطتك 12، ثم سألها زميلك بجانبك بعد ثانية عن جذر 144، فلن تعيد إجراء العملية الرياضية المضنية، بل تقرأ الرقم 12 فوراً من شاشتها.",
      whyItMatters: "يوفر أكثر من 70% من استهلاك الشبكة، ويلغي وميض التحميل تماماً عند تنقل المستخدم بين التبويبات والصفحات السابقة.",
      syntax: "getUsers: builder.query({\n  query: () => '/users',\n  keepUnusedDataFor: 300, // الاحتفاظ بالكاش لمدة 5 دقائق\n})",
      simpleExample: `import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cachedApi = createApi({
  reducerPath: 'cachedApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  // ضبط مهلة التخزين المؤقت العامة لكافة استعلامات الشريحة (مثلاً 120 ثانية)
  keepUnusedDataFor: 120,
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'products/categories',
      // تخصيص مهلة خاصة بهذا الاستعلام بالذات (ساعة كاملة لأن الفئات نادراً ما تتغير)
      keepUnusedDataFor: 3600,
    }),
  }),
});`,
      advancedExample: `// محاكي يوضح سلوك التخزين المؤقت ومشاركة البيانات بين مكونين متباعدين
import React, { useState } from 'react';

// تخيل أن المكون (أ) والمكون (ب) يستدعيان نفس الخطاف في شاشتين مختلفتين
export function CacheDeduplicationDemo() {
  const [componentAVisible, setComponentAVisible] = useState(true);
  const [componentBVisible, setComponentBVisible] = useState(false);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white text-right space-y-4 font-sans">
      <h4 className="font-bold text-sm text-blue-400">محاكي التخزين المؤقت ومنع التكرار</h4>
      <p className="text-xs text-slate-400 leading-relaxed">
        عندما يطلب المكونان نفس الرابط، يرسل RTK Query طلباً شبكياً واحداً فقط، ويشارك الاستجابة فوراً بينهما!
      </p>

      <div className="flex gap-2 text-xs">
        <button
          onClick={() => setComponentAVisible(!componentAVisible)}
          className={"px-3 py-1.5 rounded-xl font-bold " + (componentAVisible ? "bg-blue-600" : "bg-slate-800")}
        >
          المكون الأول (أ): {componentAVisible ? 'نشط' : 'معطل'}
        </button>
        <button
          onClick={() => setComponentBVisible(!componentBVisible)}
          className={"px-3 py-1.5 rounded-xl font-bold " + (componentBVisible ? "bg-emerald-600" : "bg-slate-800")}
        >
          المكون الثاني (ب): {componentBVisible ? 'نشط' : 'معطل'}
        </button>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-emerald-400">
        حالة الكاش: {componentAVisible || componentBVisible ? 'مشترك ونشط (Subscribed)' : 'بدأ عداد الإتلاف 60s (Garbage Collection)'}
      </div>
    </div>
  );
}`,
      output: "إدارة ذاتية عبقرية لذاكرة المتصفح تمنع التكرار وتفرغ البيانات غير المستخدمة تلقائياً بعد انقضاء المهلة.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن البيانات تحذف من الكاش فور إغلاق المكون أو التنقل لصفحة أخرى.",
          fix: "البيانات تبقى محفوظة في الكاش لمدة keepUnusedDataFor (افتراضياً 60 ثانية) تحسباً لعودة المستخدم السريعة.",
          explanation: "هذا السلوك يضمن عودة فورية وسلسة للبيانات دون تحميل إذا رجع المستخدم للصفحة السابقة."
        }
      ],
      bestPractices: [
        "ارفع زمن keepUnusedDataFor للبيانات الثابتة (مثل قوائم الدول أو الأقسام) لتقليل استهلاك السيرفر.",
        "استخدم refetchOnMountOrArgChange إذا كنت تريد إجبار المكون على التحقق دائماً عند تركيبه."
      ],
      infographic: {
        title: "دورة حياة التخزين المؤقت في RTK Query",
        elements: [
          { label: "1. أول استدعاء", role: "إرسال طلب HTTP وحفظ البيانات في الكاش تحت مفتاح الاستعلام", color: "blue" },
          { label: "2. استدعاءات متزامنة", role: "مشاركة نفس الرد مع باقي المكونات في 0 ثانية بدون أي طلب إضافي", color: "emerald" },
          { label: "3. إلغاء التركيب Unmount", role: "المستخدم يغادر الصفحة -> يبدأ عداد keepUnusedDataFor التنازلي", color: "amber" },
          { label: "4. تنظيف الذاكرة GC", role: "إتلاف الكاش بعد 60 ثانية إذا لم يشترك أي مكون جديد لحماية الذاكرة", color: "rose" }
        ]
      }
    },
    {
      id: "12.3.f",
      title: "إبطال البيانات باستخدام Tags",
      englishTerm: "Automated Re-fetching with Cache Tags (إِبْطَالُ البَيَانَاتِ بِالْوُسُوم: المزامنة الآلية للكاش)",
      description: "نظام الوسوم (Tags System) هو الميزة الأكثر عبقرية في RTK Query لحل أصعب مشكلة في علوم الحاسوب (Cache Invalidation). يعمل بطريقة بديهية للغاية: 1) نعطي الاستعلامات وسوماً تدل على ما تعرضه عبر `providesTags: ['Posts']`؛ 2) عندما تنفذ دالة تعديل (Mutation مثل إضافة أو حذف منشور)، نعلمها بالوسم المتأثر عبر `invalidatesTags: ['Posts']`؛ 3) يكتشف RTK Query هذا الربط تلقائياً، ويقوم فوراً بإعادة جلب استعلام المنشورات وتحديث الواجهة دون أن تكتب سطراً واحداً إضافياً.",
      analogy: "مثل جرس التنبيه في مطعم الوجبات السريعة: عندما تقدم طلبك يعطيك الموظف جهازاً صغيراً برقم 42 (Tag)؛ وعندما ينتهي الطاهي من إعداد الوجبة يضغط على الزر 42 (Invalidate)، فيهتز جهازك فوراً لتعلم أن وجبتك أصبحت جاهزة وتذهب لاستلامها.",
      whyItMatters: "يقضي تماماً على الحاجة لتحديث الـ State يدوياً بعد كل إضافة أو حذف، ويضمن بقاء كافة أجزاء الواجهة متزامنة دائماً مع الخادم.",
      syntax: "// Query: providesTags: ['Item']\n// Mutation: invalidatesTags: ['Item']",
      simpleExample: `import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tagsApi = createApi({
  reducerPath: 'tagsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  // تعريف أسماء الوسوم المعتمدة
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    // الاستعلام يوفر وسم 'Posts'
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Posts'],
    }),

    // عملية الإنشاء تبطل وسم 'Posts' مما يجبر getPosts على إعادة الجلب فوراً!
    addPost: builder.mutation({
      query: (body) => ({ url: '/posts', method: 'POST', body }),
      invalidatesTags: ['Posts'],
    }),
  }),
});`,
      advancedExample: `// استخدام الوسوم التفصيلية المتقدمة (Entity-Level Granular Tags)
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const granularApi = createApi({
  reducerPath: 'granularApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Articles'],
  endpoints: (builder) => ({
    // وسم لكل مقال مفرد بالمعرف + وسم للقائمة التجميعية
    getArticles: builder.query({
      query: () => '/articles',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Articles', id })),
              { type: 'Articles', id: 'LIST' },
            ]
          : [{ type: 'Articles', id: 'LIST' }],
    }),

    // تعديل مقال محدد يبطل ذلك المقال فقط دون إعادة تحميل القائمة كلها!
    updateArticle: builder.mutation({
      query: ({ id, ...patch }) => ({ url: '/articles/' + id, method: 'PATCH', body: patch }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Articles', id }],
    }),

    // إضافة مقال جديد تبطل القائمة التجميعية فقط
    createArticle: builder.mutation({
      query: (body) => ({ url: '/articles', method: 'POST', body }),
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }],
    }),
  }),
});`,
      output: "إعادة جلب موجهة وفائقة الدقة للبيانات المتأثرة فقط دون أي هدر في حركة مرور الشبكة.",
      commonMistakes: [
        {
          mistake: "نسيان تسجيل اسم الوسم داخل مصفوفة tagTypes في إعدادات createApi.",
          fix: "تأكد من كتابة tagTypes: ['MyTag'] في جذر الشريحة.",
          explanation: "إذا لم يكن الوسم مسجلاً في tagTypes، سيتجاهله RTK Query ولن تتم إعادة الجلب التلقائي."
        }
      ],
      bestPractices: [
        "استخدم نمط الوسوم التفصيلية { type: 'Item', id } عند بناء تطبيقات كبيرة ذات جداول متعددة لتحديث السجل المعدل فقط.",
        "استخدم الوسم التجميعي id: 'LIST' لعمليات الإنشاء لضمان ظهور العنصر الجديد في القائمة الرئيسية."
      ],
      infographic: {
        title: "منظومة إبطال الكاش بالوسوم (Tag Invalidation Architecture)",
        elements: [
          { label: "1. providesTags", role: "الاستعلام يعلن: 'أنا أعرض بيانات تحمل وسم Posts'", color: "blue" },
          { label: "2. عملية Mutation", role: "المستخدم يحذف أو يضيف عنصراً عبر دالة الطفرة", color: "rose" },
          { label: "3. invalidatesTags", role: "الطفرة تعلن: 'لقد قمت بتعديل البيانات؛ وسم Posts أصبح باطلاً!'", color: "amber" },
          { label: "4. Auto Re-fetch", role: "RTK Query يعيد جلب الاستعلام في الخلفية وتحديث الشاشة فوراً", color: "emerald" }
        ]
      }
    },
    {
      id: "12.3.g",
      title: "تحديث البيانات تلقائياً",
      englishTerm: "Automated Polling & Revalidation (التَّحْدِيثُ الدَّوْرِيُّ التِّلْقَائِيّ: فحص التغييرات بالخادم)",
      description: "يوفر RTK Query آليات مدمجة فائقة السلاسة لتحديث البيانات تلقائياً وإبقائها حية: 1) التحديث الدوري (Polling عبر خاصية `pollingInterval`): إعادة إرسال الطلب تلقائياً كل عدد محدد من المللي ثوانٍ (مثل كل 10 ثوانٍ)؛ 2) إعادة الجلب عند تركيز النافذة (`refetchOnFocus`): إعادة التحقق فور عودة المستخدم لتصفح تبويب المتصفح؛ 3) إعادة الجلب عند استعادة الاتصال بالإنترنت (`refetchOnReconnect`).",
      analogy: "مثل مذياع نشرة الأخبار العاجلة: كل 15 دقيقة (Polling Interval) يقطع المذيع البث ليقول: 'إليكم موجز بأحدث الأنباء'، لتظل على اطلاع فوري بكل ما يحدث في العالم دون أن تبحث بنفسك.",
      whyItMatters: "يحافظ على تزامن التطبيق في لوحات التحكم اللحظية (Dashboards)، وأنظمة تتبع الشحنات، وأسعار الأسهم والعملات الرقمية دون الحاجة لتقنيات WebSockets المعقدة في البداية.",
      syntax: "const { data } = useGetOrdersQuery(undefined, {\n  pollingInterval: 10000, // إعادة الجلب كل 10 ثوانٍ\n  refetchOnFocus: true\n});",
      simpleExample: `import React from 'react';
import { useGetServerStatusQuery } from './api';

function LiveStatusBadge() {
  // تحديث حالة الخادم كل 5 ثوانٍ تلقائياً
  const { data, isFetching } = useGetServerStatusQuery(undefined, {
    pollingInterval: 5000, // 5000ms = 5 ثوانٍ
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ color: isFetching ? 'orange' : 'green' }}>●</span>
      <span>حالة الخادم: {data?.status || 'متصل'}</span>
    </div>
  );
}`,
      advancedExample: `// تكوين شامل للتحديث اللحظي المتقدم مع احترام تركيز الصفحة والاتصال
import React from 'react';
import { useGetLiveCryptoPricesQuery } from './cryptoApi';

export function LiveCryptoTicker() {
  const { data, isFetching, isError } = useGetLiveCryptoPricesQuery(undefined, {
    // 1. فحص دوري كل 8 ثوانٍ
    pollingInterval: 8000,
    // 2. إعادة الجلب فوراً عندما يعود المستخدم لتبويب التطبيق بعد زيارة موقع آخر
    refetchOnFocus: true,
    // 3. إعادة الجلب فوراً عندما يعود اتصال Wi-Fi بعد انقطاع
    refetchOnReconnect: true,
  });

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm text-white text-right space-y-2">
      <div className="flex justify-between items-center text-xs">
        <span className="font-bold text-slate-300">أسعار العملات المباشرة</span>
        <span className={"text-[10px] flex items-center gap-1 " + (isFetching ? "text-amber-400" : "text-emerald-400")}>
          <span className={"w-1.5 h-1.5 rounded-full " + (isFetching ? "bg-amber-400 animate-ping" : "bg-emerald-400")}></span>
          {isFetching ? 'جاري التحديث...' : 'حي ومباشر'}
        </span>
      </div>

      <div className="text-xl font-black font-mono text-emerald-400">
        BTC: {data?.bitcoin?.usd || '67,450'} $
      </div>
    </div>
  );
}`,
      output: "شاشات حية تتحدث بانتظام مريح دون كتابة أي مؤقتات setTimeout يدوية أو إدارة اشتراكات معقدة.",
      commonMistakes: [
        {
          mistake: "تعيين pollingInterval بقيمة قصيرة جداً مثل 500ms مما يسبب إغراق الخادم بالطلبات (Server Overload).",
          fix: "اختر زمناً منطقياً (بين 5000ms إلى 30000ms) وتوقف عن الـ Polling عند مغادرة الصفحة.",
          explanation: "الاستدعاء السريع جداً يستهلك بطارية الهاتف وباقة البيانات ويؤدي لحظر IP المستخدم في خوادم الإنتاج."
        }
      ],
      bestPractices: [
        "فعل setupListeners(store.dispatch) في ملف store.js لتمكين ميزات refetchOnFocus و refetchOnReconnect.",
        "اضبط pollingInterval فقط في الشاشات الحيوية التي تتطلب متابعة مستمرة وتجنب تفعيلها في كافة الصفحات."
      ],
      infographic: {
        title: "خيارات التحديث التلقائي في RTK Query",
        elements: [
          { label: "pollingInterval", role: "تكرار الطلب دورياً كل X مللي ثانية طالما المكون معروض", color: "blue" },
          { label: "refetchOnFocus", role: "إعادة جلب أحدث البيانات فور نقر المستخدم وعودته لتبويب المتصفح", color: "emerald" },
          { label: "refetchOnReconnect", role: "استعادة الاتصال بالإنترنت بعد انقطاعه يطلق إعادة تحقق فورية", color: "amber" },
          { label: "Zero Memory Leaks", role: "إيقاف العدادات تلقائياً عند تفكيك المكون لمنع تسريب الذاكرة", color: "purple" }
        ]
      }
    },
    {
      id: "12.3.h",
      title: "التحديث المتفائل Optimistic Updates",
      englishTerm: "Optimistic Updates with onQueryStarted (التَّحْدِيثُ المُتَفَائِل: استجابة فورية 0ms مع التراجع)",
      description: "التحديث المتفائل (Optimistic Update) في RTK Query يتيح تعديل بيانات الكاش محلياً فور إطلاق دالة الـ Mutation دون انتظار رد الخادم؛ مما يجعل التفاعل يبدو لحظياً بسرعة 0 ثانية (مثل الإعجاب بالمنشورات أو تبديل حالة المهام). يتم ذلك عبر دالة `onQueryStarted` حيث نقوم بتحديث الكاش يدوياً بـ `dispatch(api.util.updateQueryData(...))`، وفي حال رفض الخادم الطلب يتم استدعاء دالة التراجع `patchResult.undo()` لاستعادة الحالة الأصلية بدقة.",
      analogy: "مثل كبسة مفتاح المصباح الكهربائي: يضيء المصباح فوراً في نفس اللحظة التي تضغط فيها على المفتاح (استجابة فورية)؛ وفي حال انقطاع التيار الكهربائي ينطفئ المصباح وتدرك أن الكهرباء مقطوعة دون أن يعلق المفتاح في المنتصف.",
      whyItMatters: "هو السر الحقيقي وراء سلاسة تطبيقات المليارات مثل تويتر وإنستغرام؛ فالانتظار نصف ثانية لكل نقرة إعجاب يفسد متعة التصفح كلياً.",
      syntax: "onQueryStarted: async (args, { dispatch, queryFulfilled }) => {\n  const patch = dispatch(api.util.updateQueryData(...));\n  try { await queryFulfilled; } catch { patch.undo(); }\n}",
      simpleExample: `import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getPost: builder.query({ query: (id) => '/posts/' + id }),

    // عملية إعجاب متفائلة
    likePost: builder.mutation({
      query: (id) => ({ url: '/posts/' + id + '/like', method: 'POST' }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        // 1. تحديث الكاش فوراً في الصفر ثانية
        const patchResult = dispatch(
          api.util.updateQueryData('getPost', id, (draft) => {
            draft.likes += 1;
          })
        );
        try {
          // 2. انتظار تأكيد الخادم
          await queryFulfilled;
        } catch {
          // 3. في حال فشل الخادم نتراجع فوراً
          patchResult.undo();
        }
      },
    }),
  }),
});`,
      advancedExample: `// تحديث متفائل متكامل لحذف عنصر من قائمة مقالات مع التراجع السلس
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getArticles: builder.query({ query: () => 'posts?limit=10' }),

    deleteArticleOptimistic: builder.mutation({
      query: (id) => ({ url: 'posts/' + id, method: 'DELETE' }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        // تحديث كاش قائمة المقالات واستبعاد المقال المحذوف فوراً
        const patchResult = dispatch(
          articlesApi.util.updateQueryData('getArticles', undefined, (draft) => {
            draft.posts = draft.posts.filter((post) => post.id !== id);
          })
        );

        try {
          // انتظار الرد الشبكي
          await queryFulfilled;
        } catch (err) {
          // عند الفشل نستعيد المقال المحذوف فورياً ونشعر المستخدم
          patchResult.undo();
          alert('تعذر إتمام الحذف على السيرفر! تمت استعادة المقال للقائمة.');
        }
      },
    }),
  }),
});`,
      output: "تحديث الشاشة في 0ms مع استقرار وحصانة تامة من الأعطال بفضل دالة التراجع patchResult.undo().",
      commonMistakes: [
        {
          mistake: "نسيان استدعاء patchResult.undo() داخل كتلة catch في onQueryStarted.",
          fix: "تأكد دائماً من وجود catch { patchResult.undo(); } للتراجع الفوري عند فشل الشبكة.",
          explanation: "بدون undo ستبقى الواجهة تعرض بيانات خاطئة مضللة للمستخدم تختلف عن محتوى قاعدة البيانات الفعلي."
        }
      ],
      bestPractices: [
        "استخدم مسودة Immer المسماة draft داخل updateQueryData لكتابة كود تعديل مباشر نظيف.",
        "احتفظ بالتحديث المتفائل للعمليات الشائعة خفيفة المخاطر مثل تبديل الحالات والإعجابات."
      ],
      infographic: {
        title: "خطوات التحديث المتفائل في RTK Query",
        elements: [
          { label: "1. انطلاق Mutation", role: "المستخدم ينقر زر الحذف أو الإعجاب", color: "blue" },
          { label: "2. updateQueryData", role: "تعديل مسودة الكاش فوراً في 0ms لتشعر الواجهة بالسرعة", color: "emerald" },
          { label: "3. await queryFulfilled", role: "الانتظار الصامت لاستجابة الخادم في الخلفية", color: "purple" },
          { label: "4. التراجع عند الفشل", role: "في حال العطل: patchResult.undo() يعيد البيانات السابقة فوراً", color: "rose" }
        ]
      }
    },
    {
      id: "12.3.i",
      title: "الترقيم والتحميل التدريجي",
      englishTerm: "Pagination & Infinite Queries in RTK Query (التَّرْقِيمُ وَالتَّحْمِيلُ التَّدْرِيجِيّ: تقسيم المجموعات)",
      description: "يدعم RTK Query ترقيم الصفحات والتحميل التدريجي بسهولة عبر تمرير معاملات الصفحة في الاستعلام: `useGetPostsQuery({ page, limit })`. لكل تركيبة معاملات فريدة، ينشئ RTK Query مدخلاً مستقلاً في الـ Cache؛ كما يوفر خيارات متقدمة مثل `serializeQueryArgs` و `merge` لدمج الدفعات الجديدة بأسفل القائمة الحالية لتنفيذ التمرير اللانهائي (Infinite Scrolling) دون تعقيد.",
      analogy: "مثل قراءة فهرس موسوعة ضخمة مقسمة إلى أجزاء: تسحب المجلد الأول (Page 1) وتضعه في الرف الأول؛ ثم تسحب المجلد الثاني (Page 2) وتضعه بجانبه، فتصبح الموسوعة مرتبة ومفهرسة جزءاً بجزء.",
      whyItMatters: "يتيح تصفح آلاف السجلات بخفة وسرعة دون استنزاف ذاكرة المتصفح، مع تخزين مؤقت مستقل لكل صفحة زارها المستخدم.",
      syntax: "const { data, isFetching } = useGetItemsQuery({ page, limit: 10 });",
      simpleExample: `import React, { useState } from 'react';
import { useGetProductsPageQuery } from './api';

function SimplePaginatedProducts() {
  const [page, setPage] = useState(1);
  // استدعاء الاستعلام مع تمرير رقم الصفحة الحالية
  const { data, isFetching } = useGetProductsPageQuery({ page, limit: 4 });

  return (
    <div>
      <h4>المنتجات المعروضة (صفحة {page})</h4>
      {isFetching && <p>جاري تحديث الصفحة...</p>}
      <ul>
        {data?.items?.map((it) => (
          <li key={it.id}>{it.name}</li>
        ))}
      </ul>
      <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>السابق</button>
      <button onClick={() => setPage((p) => p + 1)}>التالي</button>
    </div>
  );
}`,
      advancedExample: `// تكوين استعلام تمرير لانهائي متقدم يدمج الصفحات الجديدة تلقائياً بـ merge
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const infiniteFeedApi = createApi({
  reducerPath: 'infiniteFeedApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getInfiniteProducts: builder.query({
      query: (page = 0) => 'products?limit=5&skip=' + page * 5,
      // توحيد مفتاح الكاش لكافة الصفحات ليعامل كقائمة واحدة
      serializeQueryArgs: ({ endpointName }) => endpointName,
      // دمج المنتجات الجديدة في نهاية القائمة المخزنة في الكاش
      merge: (currentCache, newItems) => {
        currentCache.products.push(...newItems.products);
      },
      // إعادة الجلب فقط إذا تغير رقم الصفحة
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetInfiniteProductsQuery } = infiniteFeedApi;`,
      output: "تصفح تدريجي للمجموعات الضخمة مع دمج الدفعات بسلاسة والحفاظ على التخزين المؤقت في الذاكرة.",
      commonMistakes: [
        {
          mistake: "نسيان تعطيل زر 'السابق' عندما تكون في الصفحة الأولى page === 1.",
          fix: "استخدم disabled={page <= 1} لمنع إرسال معاملات صفحات غير صالحة.",
          explanation: "طلب صفحات سالبة أو صفرية يسبب أخطاء 400 Bad Request من خوادم الـ API."
        }
      ],
      bestPractices: [
        "استغل ميزة الجلب المسبق (Prefetching) للصفحة التالية (page + 1) لتظهر فوراً في 0ms عند نقر المستخدم زر 'التالي'.",
        "استخدم خاصية isFetching لإظهار مؤشر خفيف أثناء تبديل الصفحات دون إخفاء البيانات الحالية."
      ],
      infographic: {
        title: "أنماط الترقيم في RTK Query",
        elements: [
          { label: "1. Page-based Cache", role: "تخزين كل صفحة بمفتاح كاش مستقل: { page: 1 }, { page: 2 }", color: "blue" },
          { label: "2. Infinite Merge", role: "دمج الدفعات الجديدة بأسفل القائمة عبر خاصية merge", color: "emerald" },
          { label: "3. Prefetch Next Page", role: "جلب الصفحة القادمة في الخلفية مسبقاً لتوفير زمن الانتظار", color: "purple" },
          { label: "4. Smooth UX", role: "استخدام isFetching لإظهار مؤشر شفاف مع بقاء الصفحة القديمة مرئية", color: "amber" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q12.3.1",
      question: "ما الفارق الأساسي بين builder.query و builder.mutation في RTK Query؟",
      options: [
        "الـ query مخصص لعمليات القراءة (GET) والتخزين المؤقت، بينما الـ mutation مخصص لعمليات التعديل (POST/PUT/DELETE) وإبطال الكاش.",
        "الـ query يعمل باللغة الإنجليزية والـ mutation بالعربية.",
        "الـ mutation أبطأ بـ 10 مرات من query.",
        "لا يوجد فرق بينهما وهما اسمان لنفس الوظيفة."
      ],
      correctAnswer: 0,
      explanation: "الاستعلامات queries مخصصة لجلب وقراءة البيانات وتخزينها، بينما الطفرات mutations مخصصة لإرسال التعديلات وتحديث الخادم."
    },
    {
      id: "q12.3.2",
      question: "كيف يعمل نظام الوسوم (Tags System) لإعادة جلب البيانات تلقائياً بعد التعديل؟",
      options: [
        "يقوم بحذف قاعدة البيانات بالكامل.",
        "الاستعلام يعلن عن وسومه بـ providesTags، وعندما تنفذ طفرة تعلن invalidatesTags لنفس الوسم، يعيد RTK Query جلب الاستعلام تلقائياً.",
        "يتطلب كتابة أحداث WebSocket يدوية.",
        "يقوم بإعادة تحميل نافذة المتصفح بالكامل F5."
      ],
      correctAnswer: 1,
      explanation: "نظام الوسوم يربط الاستعلامات بالطفرات؛ فإذا أعلنت الطفرة إبطال وسم معين، يقوم المحرك بإعادة جلب الاستعلامات المرتبطة بذلك الوسم فوراً."
    },
    {
      id: "q12.3.3",
      question: "ما هي الفائدة من استخدام patchResult.undo() في التحديث المتفائل (Optimistic Updates)؟",
      options: [
        "لإعادة تشغيل حاسوب المستخدم.",
        "لاسترجاع الحالة الأصلية السابقة في الكاش والتراجع عن التعديل الفوري إذا رفض الخادم العملية أو فشلت الشبكة.",
        "لمسح سجل المتصفح.",
        "لزيادة عدد الإعجابات للضعف."
      ],
      correctAnswer: 1,
      explanation: "دالة undo() تضمن الأمان التام؛ فإذا فشل الخادم، تتراجع الواجهة عن التحديث المتفائل وتستعيد البيانات الحقيقية السابقة."
    }
  ],
  exercise: {
    id: "ex-12.3",
    title: "بناء شريحة API كاملة بـ RTK Query مع Caching و Tags وإبطال تلقائي (RTK Query Product Suite)",
    description: "قم بإنشاء شريحة API متكاملة باسم `productsApi` تحتوي على: 1) baseQuery يشير لـ https://dummyjson.com/، 2) tagTypes باسم 'Products'، 3) استعلام `getProducts` يوفر وسم 'Products'، و 4) طفرة `addProduct` ترسل POST وتبطل وسم 'Products'.",
    starterCode: `import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 1. أنشئ productsApi
// 2. عرف getProducts مع providesTags
// 3. عرف addProduct مع invalidatesTags
// 4. صدّر الخطافات المولدة تلقائياً
`,
    hints: [
      "في الشريحة: استخدم tagTypes: ['Products'].",
      "في getProducts: استخدم providesTags: ['Products'].",
      "في addProduct: استخدم method: 'POST', body: newProduct, و invalidatesTags: ['Products']."
    ],
    solution: `import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  // تعريف وسوم التخزين المؤقت
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    // 1. استعلام جلب المنتجات (يوفر وسم Products)
    getProducts: builder.query({
      query: (limit = 5) => 'products?limit=' + limit,
      providesTags: ['Products'],
    }),

    // 2. طفرة إضافة منتج جديد (تبطل وسم Products لإعادة الجلب التلقائي)
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: 'products/add',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: newProduct,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

// تصدير الخطافات المولدة تلقائياً
export const { useGetProductsQuery, useAddProductMutation } = productsApi;`
  },
  infographic: {
    title: "خريطة معمارية RTK Query المتطورة",
    description: "المحرك الأقوى لجلب وتخزين وإبطال بيانات الخادم في منظومة Redux",
    steps: [
      { step: "1", title: "createApi & Base", desc: "تأسيس الشريحة وضبط baseUrl والترويسات ووسوم tagTypes" },
      { step: "2", title: "Queries & Cache", desc: "تعريف الاستعلامات وتخزين الردود مؤقتاً ومنع الطلبات المكررة" },
      { step: "3", title: "Mutations & Send", desc: "تعريف عمليات التعديل POST/PUT/DELETE واستدعاؤها كـ Hooks" },
      { step: "4", title: "Tags Invalidation", desc: "المزامنة السحرية: الطفرة تبطل الوسم فيعاد جلب البيانات فوراً" }
    ]
  }
};
