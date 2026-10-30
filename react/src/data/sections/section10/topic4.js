// src/data/sections/section10/topic4.js
// القسم 10: التعامل مع APIs والبيانات الخارجية - الموضوع 4: البحث والترقيم والفلترة

export const topic4 = {
  id: "10.4",
  title: "البحث والترقيم والفلترة",
  description: "احتراف بناء واجهات الاستكشاف والبحث والترشيح المتقدمة في React، واستخدام تقنية Debounce لتخفيف العبء على الخادم، وتنفيذ الترقيم (Pagination) والتمرير اللانهائي (Infinite Scrolling)، ومزامنة الفلاتر مع عنوان URL لتوفير تجربة مستخدم لا تضاهى.",
  subtopics: [
    {
      id: "10.4.a",
      title: "تنفيذ البحث باستخدام Query Parameters",
      englishTerm: "Search with Query Parameters (تَنْفِيذُ البَحْثِ بِاسْتِخْدَامِ مُعَامِلَاتِ الاِسْتِعْلَامِ)",
      description: "البحث القائم على الخادم (Server-Side Search) يعتمد على إرسال مصطلح البحث الذي يكتبه المستخدم كمعامل استعلام (Query Parameter مثل `?q=laptop` أو `?search=react`) في طلب HTTP GET. يقوم الخادم بالبحث في قاعدة البيانات وإرجاع النتائج المطابقة فقط، مما يوفر ذاكرة المتصفح ويسمح بالبحث الفعال حتى لو كانت قاعدة البيانات تضم ملايين السجلات.",
      analogy: "مثل الاستعلام لدى موظف الاستعلامات في مكتبة ضخمة تضم مئة ألف كتاب: بدلاً من جلب كل الكتب إلى طاولتك للبحث فيها بنفسك، تعطي الموظف ورقة صغيرة عليها كلمة 'خوارزميات' (Query Param)، فيذهب للمستودع ويعود لك بالكتب الثلاثة المطابقة فقط.",
      whyItMatters: "البحث من جانب العميل (Client-Side) ينهار ويفشل عند زيادة حجم البيانات؛ بينما البحث بالـ Query Params هو المعيار المعتمد عالمياً في محركات البحث ومتاجر التجارة الإلكترونية الضخمة.",
      syntax: "GET /api/items?q=${encodeURIComponent(query)}",
      simpleExample: `import React, { useState, useEffect } from 'react';

// مكون بحث بسيط يرسل كلمة البحث في الـ URL
function SimpleSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // إذا كان مربع البحث فارغاً فلا نبحث
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    // إرسال طلب البحث عبر Query Parameter
    fetch('https://dummyjson.com/products/search?q=' + encodeURIComponent(searchTerm))
      .then((res) => res.json())
      .then((data) => setResults(data.products));
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="ابحث عن منتج..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}`,
      advancedExample: `import React, { useState, useEffect } from 'react';

// مكون بحث متقدم يدمج عدة معاملات استعلام (البحث + الفئة + الحد الأقصى)
function AdvancedSearchFilter() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    // بناء معاملات الاستعلام ديناميكياً
    const params = new URLSearchParams();
    if (query.trim()) params.append('q', query.trim());
    if (category) params.append('category', category);
    params.append('limit', '8');

    // تحديد مسار الـ API المناسب
    const endpoint = query.trim()
      ? 'https://dummyjson.com/products/search?' + params.toString()
      : 'https://dummyjson.com/products?' + params.toString();

    fetch(endpoint, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') console.error('خطأ في البحث:', err);
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [query, category]);

  return (
    <div className="p-4 border rounded-xl max-w-lg bg-white">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="ابحث بالاسم..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-lg bg-white"
        >
          <option value="">كافة الأقسام</option>
          <option value="smartphones">هواتف ذكية</option>
          <option value="laptops">حواسيب محمولة</option>
        </select>
      </div>

      {isLoading ? (
        <p className="text-gray-500 text-sm">جاري جلب النتائج المطابقة...</p>
      ) : (
        <ul className="divide-y text-sm">
          {products.map((p) => (
            <li key={p.id} className="py-2 flex justify-between">
              <span>{p.title}</span>
              <span className="text-emerald-600 font-bold">{p.price} $</span>
            </li>
          ))}
          {products.length === 0 && <p className="text-gray-400 py-3 text-center">لا توجد نتائج</p>}
        </ul>
      )}
    </div>
  );
}`,
      output: "عرض نتائج البحث المحدثة التي ترجع من الخادم مباشرة مع دعم الفلترة متعددة المعاملات.",
      commonMistakes: [
        {
          mistake: "إهمال تشفير نص البحث encodeURIComponent(query).",
          fix: "استخدم encodeURIComponent أو URLSearchParams دائماً عند تمرير نصوص يبحث عنها المستخدم.",
          explanation: "المحارف مثل المسافات، علامات & و # و ؟ ستكسر الـ URL وتؤدي إلى نتائج بحث خاطئة أو أخطاء خادم 400."
        }
      ],
      bestPractices: [
        "استخدم كائن URLSearchParams لبناء الروابط بدلاً من تجميع النصوص يدوياً عبر الجمع (+).",
        "احرص دائماً على مسح المسافات الزائدة من البداية والنهاية عبر .trim() قبل إرسال الطلب."
      ],
      infographic: {
        title: "هيكل استعلامات البحث بالـ Query Parameters",
        elements: [
          { label: "Base URL", role: "عنوان المورد الأساسي: /api/products", color: "blue" },
          { label: "Separator (?)", role: "علامة الاستفهام لبدء جزء الاستعلام", color: "amber" },
          { label: "Key=Value", role: "زوج المعامل والقيمة مثل q=iphone", color: "emerald" },
          { label: "Concatenator (&)", role: "الربط بين معايير متعددة مثل &category=electronics&limit=10", color: "purple" }
        ]
      }
    },
    {
      id: "10.4.b",
      title: "إضافة Debounced Search",
      englishTerm: "Debounced Search (البَحْثُ الْمُؤَجَّلُ التَّلْقَائِيُّ: خفض استهلاك الشبكة بالانتظار الذكي)",
      description: "تقنية الـ Debouncing هي نمط برمجي حاسم يضمن عدم إطلاق دالة البحث إلا بعد أن يتوقف المستخدم عن الكتابة لفترة زمنية محددة (عادة 300 إلى 500 مللي ثانية). بدون Debounce، فإذا كتب المستخدم كلمة 'Playstation' المكونة من 11 حرفاً، فسيطلق المتصفح 11 طلب HTTP متتالي للخادم، مما يهدر سرعة الشبكة ويجهد قاعدة البيانات ويسبب تداخلاً بالنتائج. مع Debounce، يُرسل طلب واحد فقط بعد اكتمال الكلمة.",
      analogy: "مثل مصعد المبنى الذكي: إذا صعد شخص ورأى أشخاصاً آخرين قادمين من الممر، لا يغلق الباب فوراً ويتحرك، بل ينتظر 5 ثوانٍ؛ فإذا دخل شخص آخر يعيد عداد الـ 5 ثوانٍ من البداية، ولا يتحرك المصعد إلا بعد أن يتوقف تدفق القادمين تماماً.",
      whyItMatters: "يوفر أكثر من 90% من استهلاك الشبكة وطلبات الـ API، ويمنع هجمات الحرمان من الخدمة غير المقصودة (DoS) على خوادمك الخاصة.",
      syntax: "useEffect(() => {\n  const timer = setTimeout(() => { search(val); }, 400);\n  return () => clearTimeout(timer);\n}, [val]);",
      simpleExample: `import React, { useState, useEffect } from 'react';

// بحث مؤجل ذكي باستخدام setTimeout و clearTimeout في useEffect
function DebouncedSearchInput() {
  const [inputVal, setInputVal] = useState('');
  const [debouncedVal, setDebouncedVal] = useState('');

  useEffect(() => {
    // 1. بدء مؤقت تأخير لمدة 500 مللي ثانية
    const timer = setTimeout(() => {
      setDebouncedVal(inputVal);
    }, 500);

    // 2. دالة التنظيف: إذا كتب المستخدم حرفاً جديداً قبل انتهاء الـ 500ms، يُلغى المؤقت القديم
    return () => {
      clearTimeout(timer);
    };
  }, [inputVal]);

  useEffect(() => {
    // هذا التأثير يعمل فقط عندما تستقر القيمة المؤجلة
    if (debouncedVal) {
      console.log('إرسال طلب API للبحث عن:', debouncedVal);
    }
  }, [debouncedVal]);

  return (
    <input
      type="text"
      placeholder="اكتب للبحث (مع تأجيل ذكي 500ms)..."
      value={inputVal}
      onChange={(e) => setInputVal(e.target.value)}
      className="p-2 border rounded"
    />
  );
}`,
      advancedExample: `import React, { useState, useEffect } from 'react';

// خطاف مخصص لإعادة استخدام منطق الـ Debounce في أي مكان بالتطبيق
function useDebounce(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// تطبيق عملي متكامل مع مؤشر حالة الانتظار
function LiveDebouncedProductFinder() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // هل المستخدم يكتب حالياً ولم يمر وقت الـ Debounce بعد؟
  const isTyping = query !== debouncedQuery;

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    fetch('https://dummyjson.com/products/search?q=' + encodeURIComponent(debouncedQuery))
      .then((res) => res.json())
      .then((data) => setResults(data.products || []))
      .finally(() => setIsSearching(false));
  }, [debouncedQuery]);

  return (
    <div className="p-4 border rounded-xl max-w-md bg-white">
      <div className="relative">
        <input
          type="text"
          placeholder="ابحث عن أجهزة إلكترونية..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 border rounded-xl pl-10 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <div className="absolute left-3 top-3.5 text-gray-400">
          {isTyping ? '⏳' : isSearching ? '🔄' : '🔍'}
        </div>
      </div>

      <div className="mt-3">
        {isTyping && <p className="text-xs text-amber-600">في انتظار توقف الكتابة...</p>}
        {isSearching && <p className="text-xs text-blue-600">جاري الاتصال بقاعدة البيانات...</p>}
        
        <ul className="mt-2 space-y-1">
          {results.map((r) => (
            <li key={r.id} className="p-2 bg-gray-50 rounded text-sm hover:bg-gray-100">
              {r.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}`,
      output: "إرسال استدعاء API واحد فقط للخادم بعد توقف أصابع المستخدم عن لوحة المفاتيح بـ 500 مللي ثانية.",
      commonMistakes: [
        {
          mistake: "تطبيق دالة debounce العادية مثل lodash.debounce داخل جسم المكون دون استخدام useMemo أو useCallback.",
          fix: "استخدم خطاف useDebounce المخصص، أو غلف دالة lodash بـ useCallback/useMemo لضمان عدم إعادة إنشائها مع كل تصيير.",
          explanation: "إعادة إنشاء دالة debounce مع كل تصيير يلغي المؤقت السابق ويفقدها وظيفتها تماماً."
        }
      ],
      bestPractices: [
        "اختر زمناً مثالياً بين 300ms إلى 500ms؛ فالتأخير الأقصر يرهق الخادم والأطول يشعر المستخدم بالبطء.",
        "أظهر مؤشر كتابة بصري لطيف (Typing Indicator) لإعلام المستخدم بأن النظام في انتظار انتهائه."
      ],
      infographic: {
        title: "آلية عمل البحث المؤجل (Debounce Timeline)",
        elements: [
          { label: "بدون Debounce", role: "R -> E -> A -> C -> T = 5 طلبات شبكية متتالية ترهق الخادم", color: "rose" },
          { label: "مع Debounce", role: "R (مؤقت) -> E (إعادة تصفير) -> ... -> T (سكون 500ms) -> طلب 1 فقط!", color: "emerald" },
          { label: "حماية الخادم", role: "توفير حركة مرور الشبكة وتقليل تكاليف البنية التحتية للخوادم", color: "blue" },
          { label: "سلاسة الواجهة", role: "منع ارتباك الشاشة بالنتائج الجزئية المتقطعة", color: "purple" }
        ]
      }
    },
    {
      id: "10.4.c",
      title: "تنفيذ Pagination",
      englishTerm: "Pagination Implementation (تَنْفِيذُ تَرْقِيمِ الصَّفَحَاتِ: تقسيم المجموعات الضخمة لصفحات)",
      description: "ترقيم الصفحات (Pagination) هو النمط المعياري لتقسيم مجموعات البيانات الكبيرة (مثل 10,000 منتج) إلى صفحات صغيرة سهلة التصفح (مثل 20 منتجاً في كل صفحة). يتم ذلك بإرسال معاملي `page` و `limit` (أو `skip/offset` و `limit`) في استعلام الـ API، حيث يعيد الخادم مصفوفة الصفحة المطلوبة مع بيانات وصفية (Metadata) تشمل: إجمالي السجلات `total`، وإجمالي الصفحات `totalPages`، ورقم الصفحة الحالية.",
      analogy: "مثل قراءة رواية من 500 صفحة: لن تطبع الرواية كاملة على لافتة إعلانية واحدة بطول 10 أمتار لتقرأها؛ بل تقرأ صفحة بصفحة، وتتنقل بين الصفحات عبر أرقام الصفحات السفلية (1، 2، 3...).",
      whyItMatters: "يحمي ذاكرة المتصفح من الانهيار عند تحميل كميات هائلة من البيانات، ويسرع استجابة الخادم بنقل حزم صغيرة وخفيفة.",
      syntax: "GET /api/items?page=2&limit=10\n// أو Offset-based:\nGET /api/items?skip=20&limit=10",
      simpleExample: `import React, { useState, useEffect } from 'react';

// مكون ترقيم بسيط يتنقل بين الصفحات بالأزرار السابق/التالي
function SimplePagination() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const limit = 5;

  useEffect(() => {
    // حساب التخطي: skip = (page - 1) * limit
    const skip = (page - 1) * limit;
    fetch('https://dummyjson.com/posts?limit=' + limit + '&skip=' + skip)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, [page]);

  return (
    <div>
      <h4>الصفحة الحالية: {page}</h4>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
          ⬅️ السابق
        </button>
        <button onClick={() => setPage((p) => p + 1)}>
          التالي ➡️
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: `import React, { useState, useEffect } from 'react';

// شريط ترقيم أرقام صفحات احترافي مع مؤشرات وأزرار رقمية ذكية
function NumberedPaginationTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({ products: [], total: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 5;

  useEffect(() => {
    setIsLoading(true);
    const skip = (currentPage - 1) * pageSize;
    fetch('https://dummyjson.com/products?limit=' + pageSize + '&skip=' + skip)
      .then((res) => res.json())
      .then((json) => {
        setData({ products: json.products, total: json.total });
      })
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  // حساب إجمالي عدد الصفحات
  const totalPages = Math.ceil(data.total / pageSize) || 1;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border max-w-xl">
      <h3 className="font-bold text-gray-800 mb-4">جدول المنتجات بالصفحات</h3>

      {isLoading ? (
        <div className="py-12 text-center text-gray-500">جاري تحميل الصفحة {currentPage}...</div>
      ) : (
        <table className="w-full text-right mb-6">
          <thead>
            <tr className="border-b text-gray-500 text-xs">
              <th className="pb-2">الرقم</th>
              <th className="pb-2">المنتج</th>
              <th className="pb-2">السعر</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {data.products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="py-2.5 text-gray-400">#{p.id}</td>
                <td className="py-2.5 font-medium">{p.title}</td>
                <td className="py-2.5 text-emerald-600 font-bold">{p.price} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* شريط أزرار الصفحات التفاعلي */}
      <div className="flex items-center justify-between pt-4 border-t">
        <span className="text-xs text-gray-500">
          صفحة {currentPage} من أصل {totalPages} (إجمالي {data.total} منتج)
        </span>

        <div className="flex gap-1.5">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1 || isLoading}
            className="px-3 py-1.5 border rounded-lg text-sm disabled:opacity-30 hover:bg-gray-100"
          >
            السابق
          </button>

          {/* رسم أزرار الصفحات */}
          {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                disabled={isLoading}
                className={
                  "w-8 h-8 rounded-lg text-sm font-medium transition " +
                  (currentPage === pageNum ? "bg-blue-600 text-white" : "border hover:bg-gray-50 text-gray-700")
                }
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages || isLoading}
            className="px-3 py-1.5 border rounded-lg text-sm disabled:opacity-30 hover:bg-gray-100"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
}`,
      output: "جدول بيانات منظم وسريع يتنقل بين الصفحات مع تعطيل الأزرار عند الحدود القصوى وعرض أرقام الصفحات النشطة.",
      commonMistakes: [
        {
          mistake: "نسيان تعطيل زر 'السابق' عندما تكون في الصفحة الأولى page === 1.",
          fix: "استخدم disabled={page <= 1} لمنع إرسال طلبات بأرقام صفحات سالبة أو صفرية.",
          explanation: "إرسال page=0 أو أرقام سالبة قد يسبب خطأ 400 Bad Request من خوادم الـ API."
        },
        {
          mistake: "عدم تصفير رقم الصفحة إلى 1 عند تغيير المستخدم لكلمة البحث أو الفلتر.",
          fix: "عندما تتغير معايير البحث، استدعِ دائماً setCurrentPage(1).",
          explanation: "إذا كان المستخدم في الصفحة 10 وقام بالبحث عن كلمة ليس لها سوى صفحة واحدة، فستظهر الشاشة فارغة بالخطأ إذا بقيت في الصفحة 10."
        }
      ],
      bestPractices: [
        "استخدم Math.ceil(total / pageSize) لحساب إجمالي عدد الصفحات بشكل دقيق.",
        "احرص على التمرير لأعلى الجدول (Scroll to Top) تلقائياً عند انتقال المستخدم لصفحة جديدة."
      ],
      infographic: {
        title: "هندسة ترقيم الصفحات (Pagination Architecture)",
        elements: [
          { label: "Limit / PageSize", role: "عدد العناصر المراد استلامها في الدفعة الواحدة (مثلاً 10)", color: "blue" },
          { label: "Page / Skip", role: "رقم الصفحة أو عدد السجلات التي يتم تجاوزها: (page - 1) * limit", color: "amber" },
          { label: "Total Records", role: "إجمالي السجلات في قاعدة البيانات لمعرفة متى ينتهي الترقيم", color: "emerald" },
          { label: "Navigation Controls", role: "أزرار السابق، التالي، والأرقام المباشرة", color: "purple" }
        ]
      }
    },
    {
      id: "10.4.d",
      title: "تنفيذ Infinite Scrolling",
      englishTerm: "Infinite Scrolling (التَّمْرِيرُ اللانهَائِيُّ: التحميل التلقائي المستمر عند النزول)",
      description: "التمرير اللانهائي (Infinite Scrolling) هو نمط تصفح حديث وشائع جداً في تطبيقات التواصل الاجتماعي والمتاجر؛ فبدلاً من النقر اليدوي على أزرار أرقام الصفحات، يقوم المتصفح تلقائياً بمراقبة وصول المستخدم إلى أسفل الصفحة عبر واجهة `IntersectionObserver`، وعند اقتراب المستخدم من القاع، يتم جلب الدفعة التالية من البيانات في الخلفية وإلحاقها بأسفل القائمة الحالية بسلاسة متصلة.",
      analogy: "مثل شريط الأخبار المتدحرج على شاشات التلفاز، أو بوفيه مفتوح يقوم الطهاة بوضع أطباق جديدة على نهايته كلما اقتربت من ملء صحنك، دون أن تضطر لمغادرة الصالة.",
      whyItMatters: "يرفع معدل بقاء وتفاعل المستخدم (Engagement) بشكل هائل، ويقدم تجربة تصفح هاتفية طبيعية وممتعة للغاية.",
      syntax: "const observer = new IntersectionObserver(([entry]) => {\n  if (entry.isIntersecting && hasMore) loadMore();\n});\nobserver.observe(sentinelRef.current);",
      simpleExample: `import React, { useState, useEffect, useRef } from 'react';

// مكون تمرير لانهائي بسيط باستخدام مراقب التقاطع IntersectionObserver
function SimpleInfiniteScroll() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [page, setPage] = useState(1);
  // عنصر المراقبة الحارس في قاع القائمة
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // إذا أصبح العنصر الحارس مرئياً في شاشة المستخدم
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // إضافة المزيد عند زيادة رقم الصفحة
  useEffect(() => {
    if (page > 1) {
      const newItems = Array.from({ length: 5 }, (_, i) => items.length + i + 1);
      setItems((prev) => [...prev, ...newItems]);
    }
  }, [page]);

  return (
    <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
      {items.map((it) => (
        <div key={it} style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          عنصر رقم #{it}
        </div>
      ))}
      {/* العنصر الحارس الذي يشير للمراقب */}
      <div ref={sentinelRef} style={{ height: '20px', textAlign: 'center', color: '#999' }}>
        جاري تحميل المزيد...
      </div>
    </div>
  );
}`,
      advancedExample: `import React, { useState, useEffect, useRef, useCallback } from 'react';

// تطبيق تمرير لانهائي حقيقي متكامل يتصل بـ REST API مع إدارة نهاية البيانات
function InfiniteProductFeed() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0); // استخدام skip/offset
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 6;

  // جلب دفعة جديدة من المنتجات
  const loadMoreProducts = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    try {
      const skip = page * limit;
      const res = await fetch('https://dummyjson.com/products?limit=' + limit + '&skip=' + skip);
      const data = await res.json();

      setProducts((prev) => [...prev, ...data.products]);
      setPage((prev) => prev + 1);

      // فحص هل وصلنا لنهاية بيانات الخادم
      if (skip + limit >= data.total) {
        setHasMore(false);
      }
    } catch (err) {
      console.error('فشل جلب المنتجات:', err);
    } finally {
      setIsLoading(false);
    }
  }, [page, isLoading, hasMore]);

  // مراقب العنصر الأخير بواسطة useRef callback
  const observerRef = useRef(null);
  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreProducts();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasMore, loadMoreProducts]
  );

  return (
    <div className="max-w-md mx-auto p-4 bg-white border rounded-2xl shadow-sm">
      <h3 className="font-bold text-lg mb-4 text-gray-800">موجز المنتجات اللانهائي</h3>

      <div className="space-y-3">
        {products.map((product, index) => {
          // إذا كان هذا العنصر هو الأخير في المصفوفة، نربطه بـ lastElementRef
          const isLast = index === products.length - 1;
          return (
            <div
              key={product.id + '-' + index}
              ref={isLast ? lastElementRef : null}
              className="p-3 border rounded-xl flex items-center justify-between hover:bg-gray-50"
            >
              <div>
                <p className="font-medium text-gray-900">{product.title}</p>
                <p className="text-xs text-gray-500">#{product.id} - {product.category}</p>
              </div>
              <span className="text-emerald-600 font-bold">{product.price} $</span>
            </div>
          );
        })}
      </div>

      {isLoading && (
        <div className="py-4 text-center text-blue-600 text-sm animate-pulse font-medium">
          ⏳ جاري جلب دفعة جديدة...
        </div>
      )}

      {!hasMore && (
        <div className="py-6 text-center text-gray-400 text-xs">
          ✨ لقد وصلت إلى نهاية كافة المنتجات المتوفرة ({products.length} منتج)
        </div>
      )}
    </div>
  );
}`,
      output: "تدفق سلس ومستمر للمنتجات يظهر تلقائياً كلما نزل المستخدم لأسفل القائمة مع إشعار أنيق عند نفاد البيانات.",
      commonMistakes: [
        {
          mistake: "استخدام أحداث التمرير window.onscroll بدلاً من IntersectionObserver.",
          fix: "استخدم IntersectionObserver دائماً لأنه يعمل خارج خيط المتصفح الرئيسي ويضمن أداء 60 إطاراً بالثانية دون تهنيج.",
          explanation: "أحداث onscroll تطلق مئات المرات في الثانية وتسبب انخفاضاً حاداً في الأداء (Jank)."
        },
        {
          mistake: "نسيان فحص hasMore وإطلاق طلبات جلب لا نهائية حتى بعد نفاد عناصر قاعدة البيانات.",
          fix: "تأكد من مقارنة إجمالي العناصر المستلمة بـ total وإيقاف المراقب عندما hasMore === false.",
          explanation: "الاستمرار في الجلب سيرهق الخادم بطلبات ترجع مصفوفات فارغة [] بلا طائل."
        }
      ],
      bestPractices: [
        "افصل مفاتيح العناصر بواسطة معرف فريد حقيقي لتجنب تحذير duplicate keys.",
        "وفر زراً احتياطياً باسم 'تحميل المزيد يدوياً' في حال تعطل أو بطء مراقبة الشاشة على بعض الأجهزة القديمة."
      ],
      infographic: {
        title: "آلية عمل التمرير اللانهائي (Intersection Observer Flow)",
        elements: [
          { label: "1. Sentinel Node", role: "عنصر حارس غير مرئي يوضع في قاع قائمة العرض", color: "blue" },
          { label: "2. Intersection Event", role: "المتصفح يكتشف دخول الحارس في نافذة الرؤية Viewport", color: "emerald" },
          { label: "3. Fetch Next Chunk", role: "إرسال طلب لجلب الصفحة التالية (skip += limit) وإلحاقها", color: "purple" },
          { label: "4. Check hasMore", role: "إذا استنفدت السجلات يتم إيقاف المراقب وعرض شارة النهاية", color: "amber" }
        ]
      }
    },
    {
      id: "10.4.e",
      title: "فلترة البيانات",
      englishTerm: "Data Filtering (فَلْتَرَةُ وتَصْفِيَةُ البَيَانَاتِ: ترشيح المجموعات بمعايير محددة)",
      description: "الفلترة (Filtering) هي عملية تقليص البيانات المعروضة لتطابق معايير محددة يختارها المستخدم (مثل الفئة، النطاق السعري، التقييم، أو التوفر). يمكن تنفيذها إما في الواجهة الأمامية (Client-Side Filtering عبر دالة `array.filter()`) للمجموعات الصغيرة، أو في الخادم (Server-Side Filtering عبر Query Parameters مثل `?minPrice=100&category=tech`) للمجموعات الضخمة.",
      analogy: "مثل مصفاة القهوة: تصب الخليط بالكامل (البيانات)، فتحتجز المصفاة الشوائب غير المرغوبة (الفلاتر) وتمرر لك فنجان القهوة النقي الصافي الذي طلبته فقط.",
      whyItMatters: "تساعد المستخدم على الوصول لما يريد في ثوانٍ معدودة وسط آلاف المنتجات، مما يرفع معدلات التحويل التجاري والرضا العام.",
      syntax: "const filtered = items.filter(item => item.price <= maxPrice && item.category === selectedCategory);",
      simpleExample: `import React, { useState } from 'react';

// فلترة فورية للمنتجات في جانب العميل حسب الفئة
function CategoryFilter() {
  const [selectedCat, setSelectedCat] = useState('الكل');
  
  const allProducts = [
    { id: 1, title: 'هاتف آيفون', cat: 'إلكترونيات' },
    { id: 2, title: 'قميص قطني', cat: 'ملابس' },
    { id: 3, title: 'ماك بوك برو', cat: 'إلكترونيات' },
    { id: 4, title: 'حذاء رياضي', cat: 'ملابس' },
  ];

  // تصفية المصفوفة بناءً على الخيار المحدد
  const filteredProducts = selectedCat === 'الكل'
    ? allProducts
    : allProducts.filter((p) => p.cat === selectedCat);

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        {['الكل', 'إلكترونيات', 'ملابس'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCat(category)}
            style={{ fontWeight: selectedCat === category ? 'bold' : 'normal' }}
          >
            {category}
          </button>
        ))}
      </div>
      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>{p.title} - ({p.cat})</li>
        ))}
      </ul>
    </div>
  );
}`,
      advancedExample: `import React, { useState, useMemo } from 'react';

// نظام فلترة متعدد المعايير فائق السرعة باستخدام useMemo
function MultiCriteriaFilter() {
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 2000,
    inStockOnly: false,
  });

  const rawProducts = [
    { id: 1, name: 'سماعات بلوتوث', cat: 'audio', price: 150, inStock: true },
    { id: 2, name: 'شاشة ألعاب 4K', cat: 'screens', price: 600, inStock: false },
    { id: 3, name: 'حاسوب محمول فائق', cat: 'computers', price: 1800, inStock: true },
    { id: 4, name: 'مكبر صوت ذكي', cat: 'audio', price: 80, inStock: true },
    { id: 5, name: 'شاشة مكتبية', cat: 'screens', price: 250, inStock: true },
  ];

  // استخدام useMemo لضمان عدم إعادة حساب الفلترة إلا عند تغير الفلاتر
  const visibleProducts = useMemo(() => {
    return rawProducts.filter((item) => {
      // 1. فلتر الفئة
      if (filters.category !== 'all' && item.cat !== filters.category) return false;
      // 2. فلتر الحد الأقصى للسعر
      if (item.price > filters.maxPrice) return false;
      // 3. فلتر التوفر في المخزون
      if (filters.inStockOnly && !item.inStock) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="p-4 bg-gray-50 border rounded-2xl max-w-lg">
      <h4 className="font-bold mb-3 text-gray-800">تصفية المنتجات المتقدمة</h4>

      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
        <div>
          <label className="block text-xs text-gray-500 mb-1">الفئة:</label>
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="w-full p-2 border rounded bg-white"
          >
            <option value="all">كافة الفئات</option>
            <option value="audio">صوتيات</option>
            <option value="screens">شاشات</option>
            <option value="computers">حواسيب</option>
          </select>
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">
            أقصى سعر: ({filters.maxPrice} $)
          </label>
          <input
            type="range"
            min="50"
            max="2000"
            step="50"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
            className="w-full"
          />
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-gray-700 mb-4 cursor-pointer">
        <input
          type="checkbox"
          checked={filters.inStockOnly}
          onChange={(e) => setFilters({ ...filters, inStockOnly: e.target.checked })}
          className="rounded"
        />
        <span>عرض المتوفر في المخزون فقط</span>
      </label>

      <div className="bg-white p-3 rounded-xl border">
        <div className="text-xs text-gray-400 mb-2">النتائج المطابقة: ({visibleProducts.length})</div>
        <ul className="divide-y text-sm">
          {visibleProducts.map((p) => (
            <li key={p.id} className="py-2 flex justify-between">
              <span>{p.name}</span>
              <span className="font-bold text-blue-600">{p.price} $</span>
            </li>
          ))}
          {visibleProducts.length === 0 && (
            <p className="text-center text-gray-400 py-3 text-xs">لا توجد منتجات تطابق شروط الفلترة المحددة</p>
          )}
        </ul>
      </div>
    </div>
  );
}`,
      output: "تصفية ديناميكية فورية وسلسة تدمج خيارات الفئة وشريط تمرير السعر وحالة التوفر معاً.",
      commonMistakes: [
        {
          mistake: "تعديل مصفوفة البيانات الأصلية بدلاً من إرجاع مصفوفة جديدة من .filter().",
          fix: "تذكر دائماً أن دالة filter() لا تعدل الأصل، بل ترجع مصفوفة جديدة تماماً.",
          explanation: "التعديل المباشر على مصفوفة الـ State الأصلية يخرق مبدأ عدم التعديل (Immutability)."
        }
      ],
      bestPractices: [
        "استخدم useMemo لحساب المصفوفة المصفاة لمنع إعادة التصفية الثقيلة عند إعادة تصيير المكون لأسباب أخرى.",
        "وفر زراً واضحاً باسم 'إعادة ضبط الفلاتر' (Reset Filters) ليعود المستخدم للوضع الافتراضي بنقرة واحدة."
      ],
      infographic: {
        title: "خطوات المعالجة المتعددة في فلترة البيانات",
        elements: [
          { label: "1. الحالة المجمعة", role: "كائن واحد يضم كل الفلاتر: { cat, minPrice, inStock }", color: "blue" },
          { label: "2. المعالجة بـ useMemo", role: "تصفية المصفوفة فقط عند تغير قيم كائن الفلاتر", color: "emerald" },
          { label: "3. الشروط المتتالية", role: "فحص كل شرط، فإذا لم ينطبق يتم استبعاد العنصر فوراً", color: "purple" },
          { label: "4. النتيجة المرشحة", role: "عرض المنتجات المتوافقة مع كافة الشروط مجتمعة", color: "amber" }
        ]
      }
    },
    {
      id: "10.4.f",
      title: "ترتيب النتائج Sorting",
      englishTerm: "Sorting Results (تَرْتِيبُ النَّتَائِجِ: الفرز التصاعدي والتنازلي للأعمدة)",
      description: "ترتيب النتائج (Sorting) هو تنظيم عرض البيانات وفق ترتيب منطقي محدد (تصاعدي Ascending أو تنازلي Descending) بالاعتماد على حقل معين، مثل الترتيب حسب السعر (من الأرخص للأعلى أو العكس)، أو حسب التاريخ (الأحدث أولاً)، أو حسب الحروف الأبجدية. في React، نستخدم دالة `array.slice().sort()` محلياً، أو نمرر معاملات `sort=price&order=asc` إلى الخادم.",
      analogy: "مثل تنظيم الطلاب في طابور الصباح المدرسي: تطلب من الطلاب الاصطفاف 'بحسب الطول تصاعدياً' من الأقصر إلى الأطول، أو 'بحسب درجات الامتحان تنازلياً' من الأعلى إلى الأقل.",
      whyItMatters: "يمكن المستخدم من العثور على أفضل الصفقات (أرخص سعر)، أو أحدث التحديثات في لمح البصر دون تضييع وقته في تصفح عشوائي.",
      syntax: "// Client-side:\nconst sorted = [...items].sort((a, b) => a.price - b.price);\n// Server-side:\nGET /api/items?sortBy=price&order=desc",
      simpleExample: `import React, { useState } from 'react';

// فرز محلي بسيط للمنتجات حسب السعر
function SimpleSort() {
  const [sortOrder, setSortOrder] = useState('asc'); // asc أو desc
  
  const products = [
    { id: 1, name: 'شاحن سريع', price: 25 },
    { id: 2, name: 'شاشة حاسوب', price: 300 },
    { id: 3, name: 'فأرة لاسلكية', price: 40 },
  ];

  // نسخ المصفوفة قبل الفرز لمنع التعديل على الأصل
  const sortedProducts = [...products].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  return (
    <div>
      <div style={{ marginBottom: '8px' }}>
        <label>الترتيب حسب السعر: </label>
        <button onClick={() => setSortOrder('asc')}>من الأقل للأعلى ⬆️</button>
        <button onClick={() => setSortOrder('desc')} style={{ marginLeft: '6px' }}>من الأعلى للأقل ⬇️</button>
      </div>
      <ul>
        {sortedProducts.map((p) => (
          <li key={p.id}>{p.name} - {p.price} $</li>
        ))}
      </ul>
    </div>
  );
}`,
      advancedExample: `import React, { useState } from 'react';

// جدول بيانات ذكي يتيح النقر على رؤوس الأعمدة للفرز التصاعدي والتنازلي
function SortableTable() {
  const [data, setData] = useState([
    { id: 1, name: 'أحمد محمود', role: 'مطور واجهات', salary: 4500 },
    { id: 2, name: 'سارة خالد', role: 'مديرة منتج', salary: 7200 },
    { id: 3, name: 'عمر ياسين', role: 'مهندس DevOps', salary: 6100 },
    { id: 4, name: 'فاطمة علي', role: 'مصممة UX', salary: 4900 },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: 'salary', direction: 'desc' });

  // دالة تغيير اتجاه الترتيب عند النقر على العمود
  const handleSort = (columnKey) => {
    let direction = 'asc';
    if (sortConfig.key === columnKey && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key: columnKey, direction });
  };

  // تطبيق منطق الترتيب
  const sortedEmployees = [...data].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (typeof aValue === 'string') {
      return sortConfig.direction === 'asc'
        ? aValue.localeCompare(bValue, 'ar')
        : bValue.localeCompare(aValue, 'ar');
    }

    return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
  });

  // أيقونة الاتجاه للعمود
  const getSortIcon = (colKey) => {
    if (sortConfig.key !== colKey) return '↕️';
    return sortConfig.direction === 'asc' ? '🔼' : '🔽';
  };

  return (
    <div className="p-4 border rounded-xl max-w-lg bg-white shadow-sm">
      <h4 className="font-bold text-gray-800 mb-3">قائمة الموظفين (انقر على رأس العمود للترتيب):</h4>
      <table className="w-full text-right text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th onClick={() => handleSort('name')} className="p-2 cursor-pointer hover:bg-gray-200">
              الاسم {getSortIcon('name')}
            </th>
            <th onClick={() => handleSort('role')} className="p-2 cursor-pointer hover:bg-gray-200">
              الوظيفة {getSortIcon('role')}
            </th>
            <th onClick={() => handleSort('salary')} className="p-2 cursor-pointer hover:bg-gray-200">
              الراتب ($) {getSortIcon('salary')}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {sortedEmployees.map((emp) => (
            <tr key={emp.id} className="hover:bg-blue-50/50">
              <td className="p-2 font-medium">{emp.name}</td>
              <td className="p-2 text-gray-600">{emp.role}</td>
              <td className="p-2 text-emerald-600 font-bold">{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
      output: "جدول بيانات احترافي يغير ترتيب الصفوف بسلاسة فائقة عند النقر على رؤوس الأعمدة مع دعم الحروف العربية والأرقام.",
      commonMistakes: [
        {
          mistake: "استدعاء .sort() مباشرة على مصفوفة الـ State مثل items.sort().",
          fix: "انسخ المصفوفة أولاً باستخدام [...items].sort() أو items.slice().sort().",
          explanation: "دالة sort() في جافاسكريبت تقوم بتعديل المصفوفة الأصلية مكانياً (Mutating in-place)، مما يكسر تفاعل React."
        },
        {
          mistake: "مقارنة النصوص العربية باستخدام (a > b) بدلاً من localeCompare.",
          fix: "استخدم دائماً a.localeCompare(b, 'ar') للترتيب الأبجدي الدقيق للنصوص.",
          explanation: "المقارنات العادية تفشل في ترتيب الحروف العربية والهمزات وفق الترتيب المعجمي الصحيح."
        }
      ],
      bestPractices: [
        "استخدم دالة localeCompare دائماً لترتيب السلاسل النصية متعددة اللغات.",
        "قدم مؤشرات بصرية واضحة (أسهم صعود وهبوط) بجوار العمود المرتب حالياً."
      ],
      infographic: {
        title: "أنماط ترتيب البيانات (Sorting Strategies)",
        elements: [
          { label: "الأرقام", role: "طرح عددي مباشر: (a, b) => a.price - b.price", color: "blue" },
          { label: "النصوص والأسماء", role: "مقارنة لغوية سليمة: a.name.localeCompare(b.name, 'ar')", color: "emerald" },
          { label: "التواريخ", role: "مقارنة الطوابع الزمنية: new Date(a.date) - new Date(b.date)", color: "purple" },
          { label: "نسخ المصفوفة", role: "قاعدة ذهبية: انسخ دائماً [...items] قبل استدعاء sort", color: "amber" }
        ]
      }
    },
    {
      id: "10.4.g",
      title: "مزامنة الفلاتر مع عنوان URL",
      englishTerm: "Syncing Filters with URL (مُزَامَنَةُ الفَلَاتِرِ مَعَ الـ URL: روابط قابلة للمشاركة والحفظ)",
      description: "مزامنة الفلاتر مع شريط العنوان (URL Search Params) هي الممارسة الاحترافية التي تجعل حالة البحث والترشيح والصفحة الحالية تنعكس مباشرة في عنوان الرابط (مثل `?search=shoes&size=42&page=3`). عند قيام المستخدم بنسخ الرابط وإرساله لصديق أو حفظه في المفضلة، يُفتح الموقع بنفس النتائج والخيارات المحددة بدقة، كما تتيح زري 'الرجوع' و'التقدم' في المتصفح العمل بشكل طبيعي.",
      analogy: "مثل إرسال دبوس موقع جغرافي على خرائط جوجل: بدلاً من أن تقول لصديقك: 'افتح الخريطة وابحث عن الرياض ثم اتجه يميناً 5 كيلومترات ثم ابحث عن مطعم كذا'، ترسل له رابطاً واحداً يحتوي على خط الطول والعرض واسم المطعم فيفتحه مباشرة بنفس الإحداثيات.",
      whyItMatters: "تعتبر من أهم معايير الجودة في تطبيقات الويب الحديثة (Web Accessibility & Shareability) وتساعد في تحسين محركات البحث (SEO).",
      syntax: "const params = new URLSearchParams(window.location.search);\n// قراءة: params.get('q');\n// كتابة: window.history.replaceState(null, '', '?' + params.toString());",
      simpleExample: `import React, { useState, useEffect } from 'react';

// مزامنة حالة البحث مع URLSearchParams الأصلي في المتصفح
function UrlSyncedSearch() {
  // قراءة القيمة الأولية من رابط المتصفح
  const [query, setQuery] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('q') || '';
  });

  // تحديث شريط العنوان عند تغير كلمة البحث
  useEffect(() => {
    const params = new URLSearchParams();
    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }

    const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
    // تحديث الرابط دون إعادة تحميل الصفحة
    window.history.replaceState(null, '', newUrl);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="ابحث (يتم الحفظ في الرابط تلقائياً)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>جرب نسخ الرابط وفتحه في نافذة جديدة لرؤية الكلمة محفوظة!</p>
    </div>
  );
}`,
      advancedExample: `import React, { useState, useEffect, useCallback } from 'react';

// نظام متكامل لمزامنة الفلاتر والصفحات مع URL يدعم أزرار الرجوع والتقدم للمتصفح
function FullUrlFilterSyncEngine() {
  // دالة مساعدة لقراءة الحالة الحالية من الـ URL
  const getParamsFromUrl = useCallback(() => {
    const sp = new URLSearchParams(window.location.search);
    return {
      search: sp.get('search') || '',
      category: sp.get('category') || 'all',
      page: Number(sp.get('page')) || 1,
    };
  }, []);

  const [filterState, setFilterState] = useState(getParamsFromUrl);

  // الاستماع لحدث popstate (عند نقر المستخدم على زري الرجوع والتقدم في المتصفح)
  useEffect(() => {
    const handlePopState = () => {
      setFilterState(getParamsFromUrl());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [getParamsFromUrl]);

  // تحديث الـ URL وتاريخ التصفح عند تغير الفلاتر
  const updateFilters = (newFilters) => {
    const updated = { ...filterState, ...newFilters };
    setFilterState(updated);

    const sp = new URLSearchParams();
    if (updated.search) sp.set('search', updated.search);
    if (updated.category !== 'all') sp.set('category', updated.category);
    if (updated.page > 1) sp.set('page', updated.page.toString());

    const newRelativePath = window.location.pathname + (sp.toString() ? '?' + sp.toString() : '');
    // استخدام pushState لتسجيل خطوة جديدة في سجل التصفح History
    window.history.pushState(null, '', newRelativePath);
  };

  return (
    <div className="p-5 border rounded-2xl bg-white shadow-sm max-w-md">
      <h4 className="font-bold text-gray-800 mb-3">مزامنة الرابط الكاملة (URL Source of Truth)</h4>

      <div className="space-y-3 mb-4">
        <input
          type="text"
          placeholder="ابحث بالاسم..."
          value={filterState.search}
          onChange={(e) => updateFilters({ search: e.target.value, page: 1 })}
          className="w-full p-2 border rounded-lg"
        />

        <select
          value={filterState.category}
          onChange={(e) => updateFilters({ category: e.target.value, page: 1 })}
          className="w-full p-2 border rounded-lg bg-white"
        >
          <option value="all">كافة الفئات</option>
          <option value="tech">أجهزة تقنية</option>
          <option value="fashion">أزياء وموضة</option>
        </select>
      </div>

      <div className="flex justify-between items-center pt-3 border-t text-sm">
        <button
          onClick={() => updateFilters({ page: Math.max(filterState.page - 1, 1) })}
          disabled={filterState.page <= 1}
          className="px-3 py-1 border rounded disabled:opacity-40"
        >
          السابق
        </button>
        <span className="font-semibold text-blue-600">الصفحة {filterState.page}</span>
        <button
          onClick={() => updateFilters({ page: filterState.page + 1 })}
          className="px-3 py-1 border rounded"
        >
          التالي
        </button>
      </div>

      <div className="mt-4 p-2 bg-gray-50 rounded text-xs text-gray-500 font-mono break-all">
        عنوان الرابط الحالي: {window.location.search || '(بدون معلمات)'}
      </div>
    </div>
  );
}`,
      output: "تحديث عنوان الـ URL في المتصفح بالتزامن مع كل تعديل في الفلاتر، مع دعم كامل لزري الرجوع والتقدم.",
      commonMistakes: [
        {
          mistake: "استخدام window.location.href = newUrl مما يسبب إعادة تحميل الصفحة بالكامل (Full Page Refresh).",
          fix: "استخدم دائماً window.history.pushState أو replaceState لتحديث الرابط بدون إعادة تحميل الصفحة.",
          explanation: "تطبيقات SPA يجب أن تحافظ على حالة التطبيق في الذاكرة دون إعادة تحميل الصفحة كاملاً."
        }
      ],
      bestPractices: [
        "استخدم replaceState أثناء كتابة نصوص البحث لمنع ملء تاريخ المتصفح بمئات الروابط لكل حرف مكتوب.",
        "استخدم pushState عند الانتقال بين الصفحات أو تطبيق فلاتر الفئات لتمكين المستخدم من العودة بسهولة."
      ],
      infographic: {
        title: "فوائد مزامنة الفلاتر مع الـ URL",
        elements: [
          { label: "مشاركة الروابط (Shareability)", role: "إمكانية إرسال رابط المنتجات المصفاة لأي شخص بنفس النتيجة", color: "blue" },
          { label: "المفضلة (Bookmarking)", role: "حفظ رابط البحث المخصص في المفضلة والرجوع له لاحقاً", color: "emerald" },
          { label: "سجل المتصفح (History)", role: "عمل زري الرجوع والتقدم بسلاسة تامة", color: "purple" },
          { label: "استعادة الحالة (Persistence)", role: "عدم فقدان الفلاتر عند تحديث الصفحة بالزر F5", color: "amber" }
        ]
      }
    },
    {
      id: "10.4.h",
      title: "التعامل مع الصفحات الفارغة",
      englishTerm: "Handling Empty Search & Filter Pages (مُعَالَجَةُ صَفَحَاتِ النَّتَائِجِ الفَارِغَةِ بَعْدَ التَّصْفِيَة)",
      description: "عند قيام المستخدم بالبحث عن كلمة غير موجودة أو تطبيق توليفة فلاتر صارمة جداً لا يطابقها أي منتج، ينتج عن ذلك صفحة نتائج فارغة. التعامل الاحترافي مع هذه الحالة يقتضي: عدم إظهار شاشة خطأ مضللة، شرح سبب عدم وجود نتائج بوضوح، اقتراح كلمات بديلة، وتوفير زر فوري بنقرة واحدة بعنوان 'مسح كافة الفلاتر' لإعادة عرض المنتجات.",
      analogy: "مثل البحث عن كتاب نادر في مكتبة: يبتسم الموظف ويقول لك: 'للأسف هذه الطبعة بالتحديد غير متوفرة لدينا، ولكن لدينا طبعات أخرى مشابهة لنفس المؤلف، أو يمكنك الاطلاع على قائمة الكتب الأكثر مبيعاً'.",
      whyItMatters: "الصفحات الفارغة المسدودة (Dead Ends) هي السبب الأول في خروج المستخدم من المتجر الإلكتروني دون شراء (Drop-off)؛ تحويل الحالة الفارغة لتجربة إرشادية ينقذ المبيعات.",
      syntax: "if (filteredItems.length === 0) {\n  return <NoSearchResults query={q} onClear={clearFilters} />;\n}",
      simpleExample: `import React, { useState } from 'react';

// معالجة بسيطة لفراغ نتائج البحث
function SimpleNoResults({ query, onReset }) {
  return (
    <div style={{ textAlign: 'center', padding: '30px', border: '1px dashed #ccc', borderRadius: '12px' }}>
      <p style={{ fontSize: '32px' }}>🔍</p>
      <h4>لم نتمكن من العثور على أي نتائج لـ "{query}"</h4>
      <p style={{ color: '#666', fontSize: '14px' }}>تأكد من كتابة الكلمات بشكل صحيح أو جرب كلمات أكثر عمومية.</p>
      <button onClick={onReset} style={{ marginTop: '10px', padding: '6px 16px', cursor: 'pointer' }}>
        مسح البحث وعرض الكل
      </button>
    </div>
  );
}`,
      advancedExample: `import React from 'react';

// مكون متكامل وراقي للتعامل مع الفراغ الناتج عن الفلاتر المتشددة مع اقتراحات ذكية
export function ResilientEmptyFilterView({ activeFilters, onResetAll, onRemoveFilter }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white rounded-3xl border border-gray-100 shadow-sm text-center max-w-lg mx-auto">
      <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center text-4xl mb-4">
        🛍️
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">
        لا توجد منتجات تطابق خياراتك الحالية
      </h3>

      <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed">
        لقد قمت بتطبيق شروط تصفية محددة لم نجد معها أي منتج متطابق. جرب تخفيف الفلاتر أو حذف أحد الشروط أدناه.
      </p>

      {/* شارات الفلاتر النشطة مع إمكانية حذف كل فلتر على حدة */}
      {activeFilters && activeFilters.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {activeFilters.map((f) => (
            <span
              key={f.id}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              <span>{f.label}: <strong>{f.value}</strong></span>
              <button
                onClick={() => onRemoveFilter(f.id)}
                className="text-gray-400 hover:text-red-500 font-bold ml-1"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={onResetAll}
          className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition shadow-sm"
        >
          🔄 إعادة تعيين كافة الفلاتر
        </button>
      </div>
    </div>
  );
}`,
      output: "واجهة مرشدة ومريحة تحول الإحباط إلى تفاعل إيجابي وتسمح للمستخدم بإلغاء الفلاتر أو استئناف التصفح.",
      commonMistakes: [
        {
          mistake: "إظهار رسالة 'حدث خطأ في النظام' عندما ترجع مصفوفة البحث فارغة [].",
          fix: "تذكر دائماً أن نتيجة البحث الخالية هي استجابة ناجحة (كود 200) وليست خطأ برمجياً.",
          explanation: "إقناع المستخدم بوجود عطل تقني بينما المشكلة هي فقط عدم وجود نتائج يبعده عن الموقع."
        }
      ],
      bestPractices: [
        "اعرض نص البحث الذي كتبه المستخدم بين علامتي اقتباس لتأكيد ما تم البحث عنه بالضبط.",
        "قدم اقتراحات لمنتجات شائعة أو فئات بديلة أسفل رسالة الفراغ لمنع توقف التصفح."
      ],
      infographic: {
        title: "عناصر شاشة الفراغ الإرشادية الناجحة",
        elements: [
          { label: "الأيقونة الودودة", role: "أيقونة تعبيرية ملهمة وليست علامة خطأ حمراء منفرة", color: "blue" },
          { label: "التفسير الواضح", role: "بيان أن المعايير الحالية لم تسفر عن نتائج مطابقة", color: "amber" },
          { label: "تفكيك الشروط", role: "عرض الفلاتر الحالية كشارات (Chips) قابلة للحذف الفردي", color: "purple" },
          { label: "زر الإنقاذ (CTA)", role: "زر 'مسح كافة الفلاتر' لإعادة عرض الكتالوج بالكامل", color: "emerald" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q10.4.1",
      question: "ما هو الهدف الأساسي من تطبيق تقنية Debounce على حقل البحث في React؟",
      options: [
        "إيقاف كتابة المستخدم إذا تجاوز 10 أحرف.",
        "تأخير إرسال طلب الـ API حتى يتوقف المستخدم عن الكتابة لمهلة معينة، لتوفير استهلاك الخادم والشبكة.",
        "تحويل الحروف العربية إلى إنجليزية تلقائياً.",
        "إخفاء حقل البحث بعد 500 مللي ثانية."
      ],
      correctAnswer: 1,
      explanation: "تقنية الـ Debouncing تنتظر سكون أصابع المستخدم لفترة وجيزة (مثلاً 400ms) وترسل طلباً واحداً بدلاً من إرسال طلب مع كل نقرة حرف."
    },
    {
      id: "q10.4.2",
      question: "لماذا يعتبر IntersectionObserver أفضل من حدث window.onscroll لتنفيذ التمرير اللانهائي (Infinite Scrolling)؟",
      options: [
        "لأنه يعمل خارج خيط المعالجة الرئيسي ويفحص التقاطع بكفاءة عالية دون التسبب في هبوط معدل الإطارات (Jank).",
        "لأن أحداث onscroll محظورة في متصفحات الهواتف الذكية.",
        "لأن IntersectionObserver يقوم بتسريع سرعة الإنترنت 4 أضعاف.",
        "لأنه لا يحتاج إلى جافاسكريبت ويعمل بواسطة CSS فقط."
      ],
      correctAnswer: 0,
      explanation: "واجهة IntersectionObserver محسنة داخلياً من المتصفح لمراقبة الرؤية دون استنزاف المعالج، بينما scroll event يطلق استدعاءات متكررة تجهد الصفحة."
    },
    {
      id: "q10.4.3",
      question: "ما الفائدة الكبرى من مزامنة معاملات البحث والفلترة مع عنوان URL (URL Search Params)؟",
      options: [
        "تسمح بحفظ ومشاركة الرابط المفعل مع الأصدقاء، ودعم زري الرجوع والتقدم في المتصفح، واستعادة الحالة عند التحديث.",
        "تمنع الخادم من رؤية بيانات المستخدم نهائياً.",
        "تزيد من أمان كلمات المرور في النماذج.",
        "تغني عن استخدام قواعد البيانات في الخادم."
      ],
      correctAnswer: 0,
      explanation: "جعل الـ URL هو مصدر الحقيقة (Source of Truth) يتيح إمكانية مشاركة روابط البحث المحددة مسبقاً وتخزينها بالمفضلة والعمل مع تاريخ المتصفح."
    }
  ],
  exercise: {
    id: "ex-10.4",
    title: "بناء مستكشف منتجات متكامل مع بحث مؤجل، وفلترة، وترقيم (Master Product Explorer)",
    description: "قم بإنشاء مكون باسم `MasterProductExplorer` يدمج: 1) حقل بحث مؤجل (Debounced Search)، 2) قائمة منسدلة لاختيار الفئة، 3) ترقيم صفحات مع زرين (السابق والتالي)، و 4) معالجة الحالة الفارغة وزر إعادة التعيين.",
    starterCode: `import React, { useState, useEffect } from 'react';

export function MasterProductExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // اكتب كود البحث المؤجل والجلب هنا

  return (
    <div>
      {/* واجهة التحكم والعرض */}
    </div>
  );
}`,
    hints: [
      "استخدم useEffect مع setTimeout و clearTimeout لتطبيق تأجيل 400ms لكلمة البحث.",
      "عند تغير كلمة البحث أو الفئة، أعد ضبط الصفحة إلى setPage(1).",
      "استخدم https://dummyjson.com/products/search?q=... أو مسار الفئة لجلب البيانات."
    ],
    solution: `import React, { useState, useEffect } from 'react';

export function MasterProductExplorer() {
  const [inputVal, setInputVal] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const pageSize = 4;

  // 1. تطبيق Debounce على مدخلات البحث
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(inputVal);
      setPage(1); // إعادة الصفحة للأولى عند تغيير البحث
    }, 400);
    return () => clearTimeout(timer);
  }, [inputVal]);

  // 2. جلب البيانات من الخادم بناءً على الفلاتر والصفحة
  useEffect(() => {
    setLoading(true);
    const skip = (page - 1) * pageSize;
    let url = 'https://dummyjson.com/products?limit=' + pageSize + '&skip=' + skip;

    if (debouncedQuery.trim()) {
      url = 'https://dummyjson.com/products/search?q=' + encodeURIComponent(debouncedQuery) + '&limit=' + pageSize + '&skip=' + skip;
    } else if (category !== 'all') {
      url = 'https://dummyjson.com/products/category/' + category + '?limit=' + pageSize + '&skip=' + skip;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setTotal(data.total || 0);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [debouncedQuery, category, page]);

  const totalPages = Math.ceil(total / pageSize) || 1;

  const handleReset = () => {
    setInputVal('');
    setCategory('all');
    setPage(1);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md border">
      <h3 className="text-xl font-bold text-gray-800 mb-4">مستكشف المنتجات الشامل</h3>

      {/* عناصر التحكم */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="ابحث بالاسم (مؤجل 400ms)..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="flex-1 p-2 border rounded-xl"
        />
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          className="p-2 border rounded-xl bg-white"
        >
          <option value="all">كافة الأقسام</option>
          <option value="beauty">تجميل</option>
          <option value="fragrances">عطور</option>
          <option value="furniture">أثاث</option>
        </select>
      </div>

      {/* عرض المحتوى */}
      {loading ? (
        <div className="py-12 text-center text-blue-600 font-medium">جاري التحميل...</div>
      ) : products.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-xl">
          <p className="text-2xl mb-2">🔍</p>
          <h4 className="font-bold text-gray-700">لا توجد نتائج مطابقة</h4>
          <button
            onClick={handleReset}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
          >
            مسح الفلاتر وعرض الكل
          </button>
        </div>
      ) : (
        <div className="space-y-2 mb-4">
          {products.map((p) => (
            <div key={p.id} className="p-3 bg-gray-50 rounded-xl flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-800">{p.title}</p>
                <p className="text-xs text-gray-500">#{p.id} - {p.category}</p>
              </div>
              <span className="text-emerald-600 font-bold">{p.price} $</span>
            </div>
          ))}
        </div>
      )}

      {/* شريط الترقيم */}
      <div className="flex justify-between items-center pt-4 border-t text-sm">
        <span className="text-gray-500">
          صفحة {page} من {totalPages} (إجمالي {total} نتيجة)
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1 || loading}
            className="px-3 py-1.5 border rounded-lg disabled:opacity-40"
          >
            السابق
          </button>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page >= totalPages || loading}
            className="px-3 py-1.5 border rounded-lg disabled:opacity-40"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "منظومة الاستكشاف والتصفح المتكاملة في React",
    description: "تكامل عناصر البحث الذكي، والفرز، والترقيم لتوفير تجربة استكشاف استثنائية",
    steps: [
      { step: "1", title: "Debounced Query", desc: "انتظار 400ms قبل استدعاء الـ API لتوفير موارد الخادم بنسبة 90%" },
      { step: "2", title: "Query Parameters", desc: "بناء الروابط بواسطة URLSearchParams مع دعم الفئات والحدود" },
      { step: "3", title: "Pagination & Scroll", desc: "تجزئة البيانات لصفحات أو تفعيل التمرير اللانهائي بالمراقب" },
      { step: "4", title: "URL Sync & Fallback", desc: "مزامنة المعاملات مع شريط العنوان ومعالجة النتائج الفارغة برقي" }
    ]
  }
};
