// src/data/sections/section10/topic2.js
// القسم 10: التعامل مع APIs والبيانات الخارجية - الموضوع 2: جلب البيانات في React

export const topic2 = {
  id: "10.2",
  title: "جلب البيانات في React",
  description: "إتقان التقنيات والأنماط المعمارية لجلب واستهلاك البيانات الخارجية في React، وإدارة دورة حياة الطلبات (Loading, Error, Empty, Success)، ومنع سباق البيانات والتسريبات، وبناء طبقة خدمات API احترافية.",
  subtopics: [
    {
      id: "10.2.a",
      title: "استخدام Fetch API",
      englishTerm: "Fetch API in React (فِتْش إيه بي آي فِي رِياكْت: واجهة الجلب الأصلية للمتصفح)",
      description: "دالة `fetch` هي الواجهة القياسية المدمجة في كافة المتصفحات الحديثة لإرسال طلبات الشبكة غير المتزامنة دون الحاجة لتثبيت أي مكتبات خارجية. في React، يُستخدم `fetch` عادةً داخل خطاف `useEffect` مع مصفوفة اعتماديات فارغة `[]` لجلب البيانات بمجرد تركيب المكون على الشاشة (Component Mount)، ثم تخزين البيانات المستلمة في الحالة (State) لإعادة تصيير الواجهة.",
      analogy: "استخدام fetch داخل useEffect يشبه إرسال ساعي بريد لجلب الجريدة اليومية فور استيقاظك وفتح باب منزلك صباحاً: ترسل الساعي، وتنتظر قليلاً، وعندما يعود بالجريدة تضعها على طاولة الإفطار (State) ليقرأها الجميع في البيت.",
      whyItMatters: "هي الطريقة الأصلية الافتراضية المتاحة في كل بيئة تشغيل جافاسكريبت حديثة. معرفتها تمنحك فهماً عميقاً لآليات الشبكة الصرفة قبل الاعتماد على مكتبات خارجية.",
      syntax: "useEffect(() => {\n  fetch('/api/data')\n    .then(res => res.json())\n    .then(data => setData(data));\n}, []);",
      simpleExample: `import React, { useState, useEffect } from 'react';

// مكون يعرض قائمة بالمستخدمين باستخدام fetch
function UsersList() {
  // حالة لتخزين مصفوفة المستخدمين القادمة من الـ API
  const [users, setUsers] = useState([]);

  // تنفيذ طلب الجلب مرة واحدة عند تحميل المكون
  useEffect(() => {
    // استدعاء رابط الـ API
    fetch('https://jsonplaceholder.typicode.com/users')
      // تحويل الاستجابة إلى كائن JSON
      .then((response) => response.json())
      // تحديث الحالة بالبيانات الجديدة
      .then((data) => setUsers(data));
  }, []); // مصفوفة اعتماديات فارغة تعني التنفيذ مرة واحدة فقط

  // رسم واجهة المستخدم
  return (
    <div>
      <h3>قائمة المستخدمين</h3>
      <ul>
        {/* تكرار وعرض أسماء المستخدمين */}
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}`,
      advancedExample: `import React, { useState, useEffect } from 'react';

// مكون احترافي لجلب وعرض بيانات مقال مع فحص حالة الاستجابة والأخطاء
function ArticleViewer({ articleId }) {
  // حالة البيانات
  const [article, setArticle] = useState(null);
  // حالة مؤشر التحميل
  const [isLoading, setIsLoading] = useState(true);
  // حالة رسالة الخطأ
  const [errorMsg, setErrorMsg] = useState(null);

  // إعادة الجلب كلما تغير معرف المقال articleId
  useEffect(() => {
    // تفعيل حالة التحميل وتصفير الأخطاء السابقة
    setIsLoading(true);
    setErrorMsg(null);

    // تعريف دالة غير متزامنة داخل التأثير
    async function loadArticle() {
      try {
        // إرسال طلب الجلب للمقال المحدد
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + articleId);
        
        // التحقق من صحة كود HTTP
        if (!res.ok) {
          throw new Error('تعذر العثور على المقال رقم: ' + articleId);
        }

        // استخراج البيانات
        const data = await res.json();
        // تحديث حالة المقال
        setArticle(data);
      } catch (err) {
        // تسجيل الخطأ وعرضه للمستخدم
        setErrorMsg(err.message);
      } finally {
        // إيقاف مؤشر التحميل في كل الأحوال
        setIsLoading(false);
      }
    }

    // استدعاء دالة الجلب
    loadArticle();
  }, [articleId]); // يتم التنفيذ كلما تغير articleId

  // عرض شاشة التحميل
  if (isLoading) return <p>جاري تحميل المقال...</p>;
  // عرض شاشة الخطأ
  if (errorMsg) return <p style={{ color: 'red' }}>خطأ: {errorMsg}</p>;
  // عرض المقال عند النجاح
  return (
    <article>
      <h2>{article?.title}</h2>
      <p>{article?.body}</p>
    </article>
  );
}`,
      output: "عرض شاشة تحميل مؤقتة، ثم إما ظهور المقال بنجاح أو رسالة خطأ واضحة باللون الأحمر في حال عدم وجود المقال.",
      commonMistakes: [
        {
          mistake: "جعل دالة الـ useEffect نفسها async مثل: useEffect(async () => {...}).",
          fix: "عرف دالة async منفصلة بداخل useEffect واستدعها، أو استخدم صيغة .then().catch().",
          explanation: "دالة useEffect يجب أن ترجع دالة تنظيف (cleanup function) أو undefined؛ جعلها async يجعلها ترجع Promise مما يربك محرك React."
        },
        {
          mistake: "نسيان مصفوفة الاعتماديات [] في useEffect مما يسبب حلقة استدعاءات لا نهائية (Infinite Loop).",
          fix: "مرر مصفوفة الاعتماديات الصحيحة [] دائماً إذا كنت ترغب في الجلب عند التحميل فقط.",
          explanation: "بدون مصفوفة اعتماديات، سينفذ useEffect بعد كل عملية تصيير، وتحديث الـ State يسبب تصييراً جديداً فيتكرر الاستدعاء بلا نهاية."
        }
      ],
      bestPractices: [
        "استخدم كتلة try/catch/finally دائماً لضمان إيقاف حالة التحميل (isLoading = false) حتى لو فشل الاتصال.",
        "تحقق دائماً من خاصية response.ok يدوياً لأن fetch لا تعتبر كود 404 أو 500 كخطأ شبكي مقذوف."
      ],
      infographic: {
        title: "خطوات جلب البيانات باستخدام Fetch في React",
        elements: [
          { label: "1. Mount", role: "تركيب المكون وبدء تنفيذ useEffect مع اعتماديات مناسبة", color: "blue" },
          { label: "2. Fetch Request", role: "إرسال طلب HTTP إلى الخادم وضبط isLoading = true", color: "amber" },
          { label: "3. Check & Parse", role: "التحقق من response.ok وتحويل الرد إلى JSON", color: "purple" },
          { label: "4. Update State", role: "تحديث الحالة بالبيانات وتعيين isLoading = false", color: "emerald" }
        ]
      }
    },
    {
      id: "10.2.b",
      title: "استخدام Axios",
      englishTerm: "Axios (أَكْسِيُوسْ: مكتبة استدعاءات HTTP المتقدمة القائمة على الوعود)",
      description: "مكتبة Axios هي أشهر عميل HTTP مخصص لبيئات جافاسكريبت وReact. تتفوق على `fetch` الأصلية بالعديد من الميزات الجوهرية: تحويل الـ JSON تلقائياً في الطلب والاستجابة دون الحاجة لاستدعاء `.json()`، إطلاق أخطاء تلقائياً عند أي كود HTTP خارج نطاق 2xx (مثل 404 أو 500)، إمكانية ضبط رابط أساسي موحد (Base URL) وترويسات مشتركة، ودعم المعترضات (Interceptors) لتسجيل الأحداث وتجديد الرموز الأمنية.",
      analogy: "إذا كانت fetch مثل قيادة دراجة هوائية يدوية تتطلب منك كل شيء بنفسك، فإن Axios هي سيارة فاخرة بناقل حركة أوتوماتيكي ومكيف هواء ونظام ملاحة؛ تقوم بفك تشفير البيانات وتفعيل الفرامل عند الخطر تلقائياً.",
      whyItMatters: "تعتمد الشركات الكبرى والمشاريع الضخمة على Axios لتوفير كود نظيف وتوحيد مسارات الاتصال ومعالجة انتهاء الجلسات (Token Expiry) في نقطة مركزية واحدة دون تكرار.",
      syntax: "import axios from 'axios';\nconst response = await axios.get('/api/users');\n// البيانات جاهزة في: response.data",
      simpleExample: `import React, { useState, useEffect } from 'react';
// استيراد مكتبة axios
import axios from 'axios';

// مكون يعرض قائمة المنشورات بواسطة Axios
function PostsViewer() {
  // حالة المنشورات
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // إرسال طلب GET باستخدام axios
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      // استلام البيانات مباشرة من خاصية data دون الحاجة لـ response.json()
      .then((res) => {
        setPosts(res.data);
      })
      // التقاط الأخطاء تلقائياً حتى لو كان الكود 404 أو 500
      .catch((err) => {
        console.error('فشل الجلب عبر Axios:', err.message);
      });
  }, []);

  return (
    <div>
      <h4>آخر المنشورات عبر Axios:</h4>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}`,
      advancedExample: `// إنشاء عميل Axios مركزي مخصص مع إعدادات وتوثيق ومعترضات (Interceptors)
import axios from 'axios';

// إنشاء نسخة مخصصة من Axios
export const apiClient = axios.create({
  // الرابط الأساسي لجميع الطلبات
  baseURL: 'https://api.myproject.com/v1',
  // المهلة الزمنية القصوى بالمللي ثانية قبل إلغاء الطلب
  timeout: 10000,
  // ترويسات موحدة لكافة الاستدعاءات
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// معترض الطلبات: إضافة رمز التوثيق تلقائياً قبل خروج الطلب
apiClient.interceptors.request.use(
  (config) => {
    // قراءة الرمز من التخزين
    const token = localStorage.getItem('token');
    if (token) {
      // إرفاق الرمز في ترويسة الطلب
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// معترض الاستجابات: معالجة الأخطاء الشائعة مثل انتهاء الجلسة 401 مركزياً
apiClient.interceptors.response.use(
  (response) => response.data, // إرجاع data مباشرة لتنظيف الكود في المكونات
  (error) => {
    if (error.response && error.response.status === 401) {
      // مسح الرمز وتوجيه المستخدم لتسجيل الدخول
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);`,
      output: "نظام اتصالات فائق القوة يغذي كافة مكونات التطبيق مع مصادقة أوتوماتيكية ومعالجة أخطاء موحدة.",
      commonMistakes: [
        {
          mistake: "محاولة استدعاء response.json() مع Axios.",
          fix: "في Axios البيانات مفكوكة التشفير وجاهزة في خاصية response.data مباشرة.",
          explanation: "دالة .json() خاصة بـ Fetch API فقط وليست موجودة في كائن استجابة Axios."
        },
        {
          mistake: "الاعتقاد بأن Axios تطلق خطأ فقط عند انقطاع الإنترنت.",
          fix: "Axios تطلق خطأ عند أي رد برمز 4xx أو 5xx، لذا تعامل معها داخل كتلة catch وقراءة error.response.",
          explanation: "هذا السلوك يجعل معالجة أخطاء الخادم والتحقق أكثر بديهية مقارنة بـ Fetch."
        }
      ],
      bestPractices: [
        "استخدم axios.create() لإنشاء نسخة مركزية موحدة لتطبيقك مع baseURL ومعترضات.",
        "حدد خاصية timeout دائماً لمنع بقاء الطلبات معلقة للأبد عند بطء الشبكة."
      ],
      infographic: {
        title: "مقارنة جوهرية: Fetch API مقابل Axios",
        elements: [
          { label: "تحويل البيانات", role: "Fetch: يدوي عبر res.json() | Axios: تلقائي في res.data", color: "blue" },
          { label: "معالجة الأخطاء 4xx/5xx", role: "Fetch: لا تطلق خطأ | Axios: تطلق استثناء يذهب للـ catch تلقائياً", color: "rose" },
          { label: "المعترضات (Interceptors)", role: "Fetch: غير مدعومة أصلياً | Axios: مدعومة بقوة للطلبات والردود", color: "emerald" },
          { label: "الحجم والتثبيت", role: "Fetch: مدمجة بالمتصفح (0kb) | Axios: حزمة إضافية خفيفة ممتازة", color: "amber" }
        ]
      }
    },
    {
      id: "10.2.c",
      title: "عرض حالة Loading",
      englishTerm: "Displaying Loading State (عَرْضُ حَالَةِ التَّحْمِيل: مؤشرات الانتظار وشاشات التجهيز)",
      description: "حالة التحميل (Loading State) هي المؤشر البصري الذي يخبر المستخدم بأن هناك عملية جلب بيانات جارية في الخلفية، مما يمنع الشعور بأن التطبيق تجمد أو توقف عن الاستجابة. يتم إدارتها عادة بمتغير حالة منطقي `isLoading` يبدأ بالقيمة `true` عند إطلاق الطلب، ويتحول إلى `false` فور استلام الرد أو حدوث خطأ، وتتراوح أشكالها من دوائر التحميل الدوارة (Spinners) إلى الهياكل العظمية التوضيحية (Skeletons).",
      analogy: "مثل شاشة انتظار المصعد: إذا ضغطت على الزر وأضاء مصباح المصعد باللون الأخضر، ستعلم أنه قادم وستنتظر بهدوء؛ أما إذا لم يضئ أي شيء، فستعتقد أنه معطل وستضغط الزر عشر مرات متتالية بدافع الإحباط.",
      whyItMatters: "تقديم تغذية راجعة فورية للمستخدم يعزز إدراك السرعة ويحسن تجربة المستخدم (UX) بشكل حاسم ويمنع نقرات المستخدم المتكررة التي قد تجهد الخادم.",
      syntax: "const [isLoading, setIsLoading] = useState(true);\n// داخل الواجهة:\n{isLoading ? <Spinner /> : <DataList />}",
      simpleExample: `import React, { useState, useEffect } from 'react';

// مكون يعرض مؤشر تحميل دائري بسيط أثناء انتظار البيانات
function SimpleLoader() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // محاكاة تأخير الشبكة لمدة 2 ثانية
    setTimeout(() => {
      setData('تم استلام البيانات بنجاح من الخادم!');
      setIsLoading(false); // إيقاف التحميل
    }, 2000);
  }, []);

  // إذا كانت العملية جارية، اعرض شاشة الانتظار
  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-blue-600">
        <span className="animate-spin text-2xl">⏳</span>
        <span>جاري جلب البيانات من الخادم...</span>
      </div>
    );
  }

  // عرض البيانات بعد اكتمال التحميل
  return <div className="p-4 bg-green-50 text-green-800">{data}</div>;
}`,
      advancedExample: `import React, { useState, useEffect } from 'react';

// مكون يعرض بطاقات هيكلية نابضة (Skeleton Cards) لمنع الارتجاج البصري Layout Shift
function ProductGridWithSkeleton() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // جلب قائمة منتجات حقيقية
    fetch('https://dummyjson.com/products?limit=4')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products);
      })
      .finally(() => {
        // إيقاف التحميل دائماً حتى عند الخطأ
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {isLoading
        ? // رسم 4 هياكل عظمية متطابقة مع حجم البطاقة أثناء التحميل
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-100 rounded-xl p-4 border border-gray-200">
              <div className="bg-gray-300 h-40 rounded-lg mb-3"></div>
              <div className="bg-gray-300 h-5 w-3/4 rounded mb-2"></div>
              <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
            </div>
          ))
        : // عرض البطاقات الحقيقية للمنتجات عند اكتمال البيانات
          products.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <img src={item.thumbnail} alt={item.title} className="h-40 w-full object-cover rounded-lg mb-3" />
              <h4 className="font-bold text-gray-800 truncate">{item.title}</h4>
              <p className="text-emerald-600 font-semibold">{item.price} $</p>
            </div>
          ))}
    </div>
  );
}`,
      output: "عرض هياكل عظمية رمادية نابضة بالحجم الفعلي للمنتجات أثناء التحميل، يليها ظهور سلس للمنتجات دون ارتباك بصري.",
      commonMistakes: [
        {
          mistake: "وضع setIsLoading(false) داخل كتلة then فقط وتجاهل catch.",
          fix: "استخدم كتلة finally() أو تأكد من وضع setIsLoading(false) في كتلتي النجاح والخطأ معاً.",
          explanation: "إذا حدث خطأ ولم تكن هناك كتلة catch تقوم بإلغاء التحميل، فسيظل مؤشر التحميل يدور إلى الأبد أمام المستخدم."
        }
      ],
      bestPractices: [
        "فضل استخدام الهياكل العظمية (Skeletons) على دوائر التحميل (Spinners) في الشاشات الرئيسية لتقليل انزياح التخطيط التراكمي (CLS).",
        "احرص على تعطيل أزرار الحفظ والإرسال (disabled={isLoading}) أثناء التحميل لمنع تكرار الإرسال."
      ],
      infographic: {
        title: "أنماط عرض حالة التحميل (Loading Patterns)",
        elements: [
          { label: "Spinner الدائري", role: "مناسب للعمليات السريعة وتحديثات الأزرار الفرعية", color: "blue" },
          { label: "Skeleton Screen", role: "يحاكي شكل الواجهة المتوقع ويمنع قفزات الشاشة Layout Shift", color: "purple" },
          { label: "Progress Bar", role: "مناسب لرفع الملفات والعمليات متعددة المراحل", color: "emerald" },
          { label: "Overlay Blocker", role: "تعتيم جزئي مع تجميد التفاعل لمنع التكرار أثناء المعاملات الحساسة", color: "amber" }
        ]
      }
    },
    {
      id: "10.2.d",
      title: "عرض حالة Error",
      englishTerm: "Displaying Error State (عَرْضُ حَالَةِ الخَطَأ: التغذية الراجعة للأعطال وإمكانية إعادة المحاولة)",
      description: "حالة الخطأ هي تمثيل واجهة المستخدم في حال فشل طلب الشبكة لأي سبب كان، سواء كان انقطاعاً في اتصال الإنترنت، أو عطلاً في الخادم (500)، أو بيانات غير مصرح بها (401). يجب أن تتضمن حالة الخطأ رسالة واضحة وصديقة للمستخدم غير تقنية تشرح ما حدث، مع توفير زر 'إعادة المحاولة' (Retry) يمنح المستخدم فرصة تصحيح الموقف دون الحاجة لتحديث الصفحة بالكامل.",
      analogy: "مثل شاشة جهاز الصراف الآلي: إذا فشل سحب النقود بسبب عطل مؤقت، لا تترك الشاشة فارغة أو تظهر للمستخدم كود لغة C++ مبهماً، بل تظهر شاشة واضحة تقول: 'تعذر إتمام العملية حالياً، هل ترغب في المحاولة مرة أخرى؟' مع زر تأكيد.",
      whyItMatters: "الأخطاء والشبكات غير المستقرة حقيقة لا مفر منها في عالم الويب. التطبيقات الاحترافية لا تنهار بل تتعامل مع الأخطاء برقي وتحافظ على هدوء وثقة المستخدم.",
      syntax: "const [error, setError] = useState(null);\n// في العرض:\n{error && <ErrorAlert message={error} onRetry={refetch} />}",
      simpleExample: `import React, { useState, useEffect } from 'react';

// مكون يعرض رسالة خطأ مع زر لإعادة المحاولة
function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    setError(null);
    // استدعاء رابط مقصود أن يفشل للتجربة
    fetch('https://invalid-api-domain-example.com/weather')
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => {
        // تسجيل رسالة الخطأ
        setError('تعذر الاتصال بخدمة الطقس. يرجى التحقق من اتصال الإنترنت.');
      });
  }, [retryCount]); // تتكرر المحاولة عند زيادة عداد المحاولات

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
        <p className="font-bold">⚠️ تنبيه خطأ:</p>
        <p className="mb-3">{error}</p>
        <button
          onClick={() => setRetryCount((prev) => prev + 1)}
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
        >
          🔄 إعادة المحاولة
        </button>
      </div>
    );
  }

  return <div>درجة الحرارة الحالية: {weather ? weather.temp : '--'}</div>;
}`,
      advancedExample: `import React, { useState, useEffect, useCallback } from 'react';

// مكون مرن ومتقدم لعرض وتصنيف مختلف أنواع الأخطاء (شبكة، تصريح، خادم)
function OrdersViewer() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorDetails, setErrorDetails] = useState(null);

  // دالة جلب البيانات المغلفة بـ useCallback لإعادة استخدامها بأمان
  const fetchOrders = useCallback(async () => {
    setLoading(true);
    setErrorDetails(null);

    try {
      const response = await fetch('https://api.example.com/orders', {
        headers: { Authorization: 'Bearer invalid-token' }
      });

      if (!response.ok) {
        // تصنيف الخطأ بناءً على كود الحالة
        if (response.status === 401) {
          throw { code: 401, message: 'انتهت جلستك الحالية، يرجى تسجيل الدخول مجدداً.' };
        } else if (response.status >= 500) {
          throw { code: 500, message: 'خادم الطلبات يواجه ضغطاً كبيراً، جاري العمل على حله.' };
        } else {
          throw { code: response.status, message: 'تعذر جلب الطلبات: ' + response.statusText };
        }
      }

      const data = await response.json();
      setOrders(data);
    } catch (err) {
      // التعامل مع أخطاء انقطاع الشبكة غير المتوقعة
      const fallbackError = err.message
        ? err
        : { code: 0, message: 'فشل الاتصال بالشبكة تماماً، تحقق من الراوتر.' };
      setErrorDetails(fallbackError);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  if (errorDetails) {
    return (
      <div className="p-6 bg-amber-50 border-r-4 border-amber-500 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold text-amber-800 mb-1">
          {errorDetails.code === 401 ? '🔒 جلسة غير صالحة' : '⚠️ تعذر تحميل البيانات'}
        </h3>
        <p className="text-amber-700 mb-4">{errorDetails.message}</p>
        <div className="flex gap-3">
          <button
            onClick={fetchOrders}
            className="px-4 py-2 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition"
          >
            إعادة المحاولة الآن
          </button>
          {errorDetails.code === 401 && (
            <button
              onClick={() => (window.location.href = '/login')}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              تسجيل الدخول
            </button>
          )}
        </div>
      </div>
    );
  }

  return <div>عدد الطلبات النشطة: {orders.length}</div>;
}`,
      output: "عرض صندوق خطأ أنيق ومخصص مع أزرار ملائمة وفق طبيعة الخطأ وإمكانية المحاولة الفورية.",
      commonMistakes: [
        {
          mistake: "عرض الخطأ التقني الخام مثل TypeError: Failed to fetch للمستخدم العادي.",
          fix: "ترجم الأخطاء دائماً إلى رسائل ودية وبسيطة ومفهومة باللغة العربية مع إرشادات لما يجب فعله.",
          explanation: "المصطلحات البرمجية الإنجليزية تربك المستخدم وتشوه المظهر الاحترافي للتطبيق."
        }
      ],
      bestPractices: [
        "قدم زر 'إعادة المحاولة' (Retry Button) دائماً لتمكين المستخدم من تكرار الطلب دون الحاجة لإعادة تحميل الصفحة.",
        "استخدم تقنية Exponential Backoff إذا كان نظامك يقوم بإعادة المحاولة أوتوماتيكياً في الخلفية."
      ],
      infographic: {
        title: "ركائز شاشة الخطأ الاحترافية (Resilient Error UI)",
        elements: [
          { label: "الأيقونة والوضوح", role: "أيقونة تنبيه وعنوان مقتضب يحدد طبيعة المشكلة", color: "rose" },
          { label: "الرسالة الإنسانية", role: "نص عربي مبسط يبتعد عن المصطلحات التقنية المعقدة", color: "amber" },
          { label: "زر الحل (Action)", role: "زر 'إعادة المحاولة' أو رابط للدعم الفني أو تسجيل الدخول", color: "blue" },
          { label: "حفظ السياق", role: "عدم تدمير المدخلات السابقة أو مسح النموذج بالكامل", color: "emerald" }
        ]
      }
    },
    {
      id: "10.2.e",
      title: "عرض حالة Empty",
      englishTerm: "Displaying Empty State (عَرْضُ الحَالَةِ الفَارِغَة: واجهة انعدام السجلات والنتائج)",
      description: "الحالة الفارغة (Empty State) هي الشاشة التي تظهر عندما ينجح طلب الـ API بنسبة 100%، وتكون استجابة الخادم ناجحة (كود 200 OK)، ولكن مصفوفة البيانات المستلمة خالية تماماً من العناصر (مثل `items.length === 0`). في هذه الحالة، لا يجوز ترك الصفحة بيضاء أو إظهار جدول خاوٍ، بل يجب تقديم تصميم مبهج يوضح للمستخدم سبب خلو القائمة ويوجهه لاتخاذ إجراء كـ 'أضف أول عنصر' أو 'جرّب كلمة بحث أخرى'.",
      analogy: "مثل خزانة ملابس جديدة اشتريتها وفرغتها في غرفتك: إنها ليست مكسورة وليست معطلة (لا يوجد خطأ)، لكنها فارغة ببساطة؛ أفضل تصرف هو وضع ملصق لطيف يقول: 'خزانتك جاهزة، ابدأ بتعليق ملابسك الجديدة هنا'.",
      whyItMatters: "الحالة الفارغة هي فرصة ذهبية لتوجيه المستخدمين الجدد وتدريبهم على كيفية استخدام التطبيق (Onboarding)، وتجنب الظن الخاطئ بأن التطبيق معطل.",
      syntax: "if (!isLoading && !error && items.length === 0) {\n  return <EmptyState onAction={createNew} />;\n}",
      simpleExample: `import React, { useState } from 'react';

// مكون بسيط يوضح إدارة الحالة الفارغة
function BookmarksList() {
  // مصفوفة علامات مرجعية فارغة في البداية
  const [bookmarks, setBookmarks] = useState([]);

  // فحص هل القائمة فارغة
  if (bookmarks.length === 0) {
    return (
      <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-xl">
        <span className="text-4xl">🔖</span>
        <h4 className="text-lg font-bold text-gray-700 mt-2">لا توجد إشارات مرجعية محفوظة</h4>
        <p className="text-gray-500 text-sm mt-1 mb-4">
          يمكنك حفظ المقالات المفضلة لديك هنا للرجوع إليها لاحقاً بكل سهولة.
        </p>
        <button
          onClick={() => setBookmarks([{ id: 1, title: 'مقال تعلم React من الصفر' }])}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
        >
          ➕ أضف أول مقال مفضل
        </button>
      </div>
    );
  }

  // عرض القائمة في حال وجود عناصر
  return (
    <ul>
      {bookmarks.map((b) => (
        <li key={b.id}>{b.title}</li>
      ))}
    </ul>
  );
}`,
      advancedExample: `import React, { useState, useEffect } from 'react';

// مكون متقدم يميز بين فراغ البحث (Search Not Found) وفراغ المورد العام (No Records)
function SearchableTasksView() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // محاكاة جلب قائمة مهام فارغة من الخادم
    setTimeout(() => {
      setTasks([]);
      setIsLoading(false);
    }, 600);
  }, []);

  // ترشيح المهام بحسب نص البحث
  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <p>جاري تحميل المهام...</p>;

  // 1. إذا كان الخادم لا يحتوي على أي مهام من الأساس
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-4">
          📋
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">قائمة المهام فارغة تماماً</h3>
        <p className="text-gray-500 max-w-sm mb-6">
          لم تقم بإنشاء أي مهمة بعد في هذا المشروع. ابدأ بإضافة مهمتك الأولى لتنظيم عملك اليومي.
        </p>
        <button className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition">
          + إنشاء مهمة جديدة
        </button>
      </div>
    );
  }

  // 2. إذا كانت هناك مهام لكن كلمة البحث لم تطابق أياً منها
  if (filteredTasks.length === 0) {
    return (
      <div className="p-8 text-center bg-gray-50 rounded-xl">
        <p className="text-2xl mb-2">🔍</p>
        <h4 className="font-bold text-gray-800">لا توجد نتائج مطابقة لـ "{searchTerm}"</h4>
        <p className="text-sm text-gray-500 mb-3">تأكد من كتابة الكلمات بشكل صحيح أو امسح حقل البحث.</p>
        <button
          onClick={() => setSearchTerm('')}
          className="text-blue-600 text-sm font-semibold hover:underline"
        >
          مسح البحث وعرض كافة المهام
        </button>
      </div>
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="ابحث في المهام..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <ul>{filteredTasks.map(t => <li key={t.id}>{t.title}</li>)}</ul>
    </div>
  );
}`,
      output: "تجربة مستخدم راقية وموجهة تقدم إرشادات إيجابية وتسهل بدء العمل بدلاً من واجهات رمادية مهجورة.",
      commonMistakes: [
        {
          mistake: "فحص مصفوفة البيانات قبل انتهاء التحميل مما يسبب ظهور الحالة الفارغة لثانية واحدة خاطفة (Flicker).",
          fix: "تأكد دائماً من أن شرط الحالة الفارغة يأتي بعد التأكد من !isLoading و!error.",
          explanation: "المصفوفة تبدأ فارغة افتراضياً [] أثناء التحميل، لذلك فحص length قبل اكتمال الطلب يعرض واجهة الفراغ مؤقتاً."
        }
      ],
      bestPractices: [
        "اجعل الحالة الفارغة تفاعلية وتحتوي على دعوة لاتخاذ إجراء (Call to Action - CTA) لزيادة تفاعل المستخدم.",
        "فرق دائماً بين 'لا توجد بيانات بالمطلق' وبين 'لا توجد نتائج مطابقة لكلمة البحث الحالية'."
      ],
      infographic: {
        title: "التسلسل المنطقي لعرض حالات الواجهة الأربعة",
        elements: [
          { label: "1. حالة Loading", role: "إذا كان isLoading === true يتم إظهار المؤشر أو الهيكل العظمي", color: "blue" },
          { label: "2. حالة Error", role: "إذا كان error !== null يتم إظهار التنبيه وزر إعادة المحاولة", color: "rose" },
          { label: "3. حالة Empty", role: "إذا كانت data.length === 0 يتم إظهار رسالة الفراغ والـ CTA", color: "amber" },
          { label: "4. حالة Success", role: "إذا توفرت البيانات يتم رسم القائمة والجدول بالكامل", color: "emerald" }
        ]
      }
    },
    {
      id: "10.2.f",
      title: "إلغاء الطلبات غير المطلوبة",
      englishTerm: "Canceling Unneeded Requests with AbortController (إِلْغَاءُ الطَّلَبَاتِ بِاسْتِخْدَامِ أَبُورْت كُنْتْرُولَرْ)",
      description: "واجهة `AbortController` هي معيار أصيل في متصفحات الويب يتيح للمطور إلغاء طلبات HTTP قيد التنفيذ عند عدم الحاجة إليها. في React، تعتبر ضرورية للغاية في دالة التنظيف (Cleanup function) داخل `useEffect`: فعندما يغادر المستخدم الصفحة أو يتم إلغاء تركيب المكون (Unmount) قبل وصول استجابة الخادم، يتم استدعاء `controller.abort()` لإيقاف الطلب فوراً وتوفير استهلاك الشبكة ومنع تسريب الذاكرة وتحذيرات تحديث الحالة بعد إلغاء التركيب.",
      analogy: "تخيل أنك طلبت وجبة سريعة للتوصيل إلى الفندق، ولكن اضطررت فجأة لتسجيل الخروج ومغادرة المدينة: المنطقي فوراً هو الاتصال بالمطعم وإلغاء الطلب وهو في الطريق، بدلاً من وصول السائق للغرفة الخالية.",
      whyItMatters: "يحمي تطبيقك من محاولة تحديث مكونات غير موجودة على الشاشة، ويوفر موارد الخادم وحزم بيانات الهواتف المحمولة عند التنقل السريع بين الصفحات.",
      syntax: "const controller = new AbortController();\nfetch(url, { signal: controller.signal });\n// للإلغاء:\ncontroller.abort();",
      simpleExample: `import React, { useState, useEffect } from 'react';

// مكون يوضح إلغاء طلب fetch عند تفكيك المكون
function UserProfileWidget({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 1. إنشاء وحدة تحكم الإلغاء
    const abortController = new AbortController();

    // 2. تمرير إشارة الإلغاء signal للطلب
    fetch('https://jsonplaceholder.typicode.com/users/' + userId, {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => {
        // تجاهل الخطأ إذا كان ناتجاً عن الإلغاء المتعمد
        if (err.name === 'AbortError') {
          console.log('تم إلغاء الطلب بنجاح نظراً لمغادرة المكون!');
        } else {
          console.error('خطأ شبكي حقيقي:', err);
        }
      });

    // 3. دالة التنظيف: تعمل عند تفكيك المكون أو قبل تنفيذ التأثير التالي
    return () => {
      abortController.abort();
    };
  }, [userId]);

  return <div>المستخدم الحالي: {user?.name || 'جاري التحميل...'}</div>;
}`,
      advancedExample: `import React, { useState, useEffect } from 'react';
import axios from 'axios';

// مثال متقدم باستخدام Axios و AbortController لإلغاء طلبات البحث المتلاحقة
function LiveSearchWithCancel() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // إذا كان حقل البحث فارغاً فلا داعي لإرسال أي طلب
    if (!query.trim()) {
      setResults([]);
      return;
    }

    // إنشاء مراقب الإلغاء
    const controller = new AbortController();

    // إرسال الطلب مع إرفاق الإشارة signal
    axios
      .get('https://dummyjson.com/products/search?q=' + encodeURIComponent(query), {
        signal: controller.signal,
      })
      .then((res) => {
        setResults(res.data.products);
      })
      .catch((err) => {
        // فحص هل تم الإلغاء عبر axios.isCancel أو CanceledError
        if (axios.isCancel(err) || err.name === 'CanceledError') {
          console.log('تم إحباط الطلب السابق لصالح طلب البحث الأحدث');
        } else {
          console.error('خطأ في استعلام البحث:', err);
        }
      });

    // عند كتابة حرف جديد، يتم إلغاء الطلب السابق فوراً قبل إرسال الجديد
    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="ابحث فورياً..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded-lg"
      />
      <ul className="mt-2">
        {results.map((item) => (
          <li key={item.id} className="py-1 border-b text-sm">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      output: "إلغاء الطلبات السابقة تلقائياً في شبكة المتصفح (يظهر status: canceled في DevTools) مع استقرار النتائج وظهور أحدث كلمة فقط.",
      commonMistakes: [
        {
          mistake: "معاملة AbortError كخطأ فادح وعرضه للمستخدم في الشاشة كـ 'فشل الطلب'.",
          fix: "افحص دائماً if (err.name === 'AbortError') أو axios.isCancel(err) وتجاهله تماماً.",
          explanation: "إلغاء الطلب هو إجراء طبيعي مقصود لمنع تسريب الموارد وليس عطلاً في الخادم."
        }
      ],
      bestPractices: [
        "اربط دائماً أي استدعاء داخل useEffect بإشارة controller.signal ونفذ controller.abort() في دالة التنظيف.",
        "في Axios الإصدار 0.22 وما بعده، استخدم AbortController الأصلي وتجنب استخدام CancelToken القديم الملغي."
      ],
      infographic: {
        title: "آلية عمل AbortController في React",
        elements: [
          { label: "1. new AbortController", role: "توليد كائن المراقبة واستخراج إشارة signal", color: "blue" },
          { label: "2. Attach Signal", role: "تمرير signal في خيارات fetch أو axios", color: "purple" },
          { label: "3. Component Unmount", role: "المستخدم يتنقل لصفحة أخرى قبل وصول البيانات", color: "amber" },
          { label: "4. controller.abort()", role: "إيقاف تيار الشبكة فوراً وحماية الذاكرة من التسريب", color: "rose" }
        ]
      }
    },
    {
      id: "10.2.g",
      title: "معالجة الطلبات المتزامنة",
      englishTerm: "Concurrent Requests Handling (مُعَالَجَةُ الطَّلَبَاتِ الْمُتَزَامِنَة: الجلب المتوازي المتعدد)",
      description: "في العديد من شاشات React (مثل لوحات التحكم وموجزات الحسابات)، يحتاج المكون لجلب عدة مصادر بيانات في نفس الوقت (مثل جلب بيانات المستخدم، وقائمة إشعاراته، وإحصائيات مبيعاته). بدلاً من استدعائها بشكل تسلسلي بطيء (Sequential Chaining)، نستخدم تقنيات الجلب المتوازي مثل `Promise.all` أو `Promise.allSettled` لتشغيل كافة الطلبات معاً على التوازي وتوفير وقت الانتظار الكلي.",
      analogy: "مثل تجهيز حفلة شاي: بدلاً من الذهاب للبقالة لشراء الشاي أولاً، والعودة للمنزل، ثم الذهاب ثانية لشراء السكر، ثم الذهاب ثالثة لشراء الحليب؛ ترسل ثلاثة أصدقاء في نفس اللحظة كل واحد منهم يشتري صنفاً، فيكتمل التجهيز في ثلث الوقت.",
      whyItMatters: "تقليل زمن تحميل الواجهة (Page Load Time) بنسبة قد تصل إلى 70%، حيث يصبح زمن التحميل مساوياً لأطول طلب فردي فقط بدلاً من مجموع أزمنة الطلبات مجتمعة.",
      syntax: "const [res1, res2] = await Promise.all([\n  fetch('/api/users'),\n  fetch('/api/settings')\n]);",
      simpleExample: `import React, { useState, useEffect } from 'react';

// مكون يجلب بيانات المستخدم ومنشوراته بالتوازي بواسطة Promise.all
function UserSummary({ userId }) {
  const [data, setData] = useState({ user: null, posts: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAllData() {
      try {
        // إطلاق الطلبين معاً بالتوازي والانتظار حتى اكتمال كليهما
        const [userRes, postsRes] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/users/' + userId),
          fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId),
        ]);

        // استخراج JSON من كليهما بالتوازي أيضاً
        const [userData, postsData] = await Promise.all([
          userRes.json(),
          postsRes.json(),
        ]);

        setData({ user: userData, posts: postsData });
      } catch (err) {
        console.error('فشل في أحد الطلبات المتزامنة:', err);
      } finally {
        setLoading(false);
      }
    }

    loadAllData();
  }, [userId]);

  if (loading) return <p>جاري تجهيز بيانات الصفحة...</p>;

  return (
    <div>
      <h2>اسم العميل: {data.user?.name}</h2>
      <p>عدد المنشورات: {data.posts.length}</p>
    </div>
  );
}`,
      advancedExample: `import React, { useState, useEffect } from 'react';

// استخدام Promise.allSettled لجلب عدة أجزاء مستقلة بحيث لا يفشل الكل إذا فشل جزء واحد
function ResilientDashboard() {
  const [stats, setStats] = useState({
    sales: null,
    visitors: null,
    inventory: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboardWidgets() {
      // إرسال ثلاثة استدعاءات مختلفة
      const results = await Promise.allSettled([
        fetch('https://dummyjson.com/products?limit=1').then((r) => r.json()),
        fetch('https://dummyjson.com/users?limit=1').then((r) => r.json()),
        fetch('https://invalid-endpoint-fail.com/stats').then((r) => r.json()),
      ]);

      // تفكيك النتائج المستقلة: ما نجح نأخذ قيمته، وما فشل نعين خطأه
      setStats({
        sales: results[0].status === 'fulfilled' ? results[0].value : 'غير متاح',
        visitors: results[1].status === 'fulfilled' ? results[1].value : 'غير متاح',
        inventory: results[2].status === 'fulfilled' ? results[2].value : 'فشل التحديث',
      });

      setLoading(false);
    }

    fetchDashboardWidgets();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="p-4 bg-blue-50 rounded">المبيعات: {JSON.stringify(stats.sales?.total || 'غير متاح')}</div>
      <div className="p-4 bg-green-50 rounded">الزوار: {JSON.stringify(stats.visitors?.total || 'غير متاح')}</div>
      <div className="p-4 bg-red-50 rounded">المخزون: {stats.inventory}</div>
    </div>
  );
}`,
      output: "تحميل أجزاء لوحة التحكم بشكل مستقل دون أن يؤدي فشل خدمة فرعية (مثل المخزون) لتعطل الشاشة بأكملها.",
      commonMistakes: [
        {
          mistake: "استخدام Promise.all عندما تكون الطلبات معتمدة على بعضها (Dependent).",
          fix: "إذا كان الطلب الثاني يحتاج لمعرف قادم من نتيجة الطلب الأول، فاستدعِهما بتسلسل await عادي.",
          explanation: "Promise.all مخصصة للطلبات المستقلة كلياً التي يمكن تنفيذها في نفس اللحظة."
        },
        {
          mistake: "الاعتماد على Promise.all في الشاشات الكبيرة مما يجعل فشل طلب واحد ينهار المجموعة كاملة.",
          fix: "استخدم Promise.allSettled لعزل الأعطال وعرض ما نجح والتنبيه على ما تعثر.",
          explanation: "طبيعة Promise.all هي Fail-Fast (ترفض فور فشل أول وعد)."
        }
      ],
      bestPractices: [
        "استخدم Promise.all للبيانات المترابطة التي لا معنى لعرض الصفحة بدونها معاً.",
        "استخدم Promise.allSettled لعناصر لوحات التحكم المستقلة لضمان مرونة الواجهة."
      ],
      infographic: {
        title: "الطلبات المتسلسلة مقابل المتزامنة (Parallel vs Sequential)",
        elements: [
          { label: "Sequential (متسلسلة)", role: "الطلب 1 (2 ث) ثم الطلب 2 (3 ث) = الإجمالي 5 ثواني بطء", color: "rose" },
          { label: "Promise.all (متزامنة)", role: "الطلب 1 + الطلب 2 في نفس اللحظة = الإجمالي 3 ثواني فقط", color: "emerald" },
          { label: "Promise.allSettled", role: "توازي آمن يضمن عرض الناجح وعزل الفاشل برقي", color: "blue" },
          { label: "تحسين الأداء", role: "خفض معدلات الانتظار وتسريع تفاعل المستخدم الأولي TTI", color: "purple" }
        ]
      }
    },
    {
      id: "10.2.h",
      title: "التعامل مع Race Conditions",
      englishTerm: "Handling Race Conditions (مُعَالَجَةُ سِبَاقِ البَيَانَاتِ: ضمان تناسق الردود المتأخرة)",
      description: "حالة سباق البيانات (Race Condition) هي واحدة من أخطر المشاكل الخفية في تطبيقات الواجهات الأمامية: تحدث عندما يُرسل المستخدم طلبين متتاليين بسرعة (مثلاً: نقر على زر التبويب 'الإلكترونيات' ثم نقر فوراً على 'الملابس')؛ فإذا استغرق طلب 'الإلكترونيات' ثانيتين بينما استغرق طلب 'الملابس' نصف ثانية، سيصل رد 'الملابس' أولاً وتظهر الملابس، ثم يصل رد 'الإلكترونيات' المتأخر ثانياً فيستبدل الواجهة بالإلكترونيات بالخطأ رغم أن المستخدم يقف على تبويب الملابس!",
      analogy: "تخيل أنك طلبت من موظفين اثنين في المكتب: قلت للموظف (أ): 'احضر لي ملف مبيعات 2024'، وبعد 3 ثوانٍ غيرت رأيك وقلت للموظف (ب): 'احضر لي ملف 2025 فأنا في عجلة'. الموظف (ب) أسرع وسلمك ملف 2025. بعد دقيقة يأتي الموظف (أ) ويضع ملف 2024 فوق ملفك الجديد فيفسد جدولك!",
      whyItMatters: "حالات السباق تسبب أخطاء منطقية محرجة وغير متوقعة في نتائج البحث، وتبويبات المنتجات، وتفاصيل المستخدمين، وتفقد المستخدم الثقة في دقة النظام.",
      syntax: "let isCurrent = true;\nfetch(...).then(data => {\n  if (isCurrent) setData(data);\n});\nreturn () => { isCurrent = false; };",
      simpleExample: `import React, { useState, useEffect } from 'react';

// حل سباق البيانات باستخدام متغير الراية (Boolean Flag) في دالة التنظيف
function CategoryTabViewer({ categoryId }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    // 1. راية تدل على أن هذا التأثير هو الأحدث والمطلوب حالياً
    let isCurrent = true;

    // إرسال الطلب
    fetch('https://api.example.com/category/' + categoryId)
      .then((res) => res.json())
      .then((data) => {
        // 2. لا تحدث الـ State إلا إذا كان هذا الطلب لا يزال هو الأحدث
        if (isCurrent) {
          setContent(data.title);
        }
      });

    // 3. عند انتقال المستخدم لتبويب آخر يتم إلغاء فعالية هذا الطلب القديم
    return () => {
      isCurrent = false;
    };
  }, [categoryId]);

  return <div>محتوى التبويب النشط: {content || 'جاري التحميل...'}</div>;
}`,
      advancedExample: `import React, { useState, useEffect, useRef } from 'react';

// حل سباق البيانات باستخدام معرف الطلب المتزايد (Request ID Counter Ref)
function FastSearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  
  // مرجع يحتفظ بأحدث معرف طلب تم إرساله
  const latestRequestId = useRef(0);

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    // زيادة العداد وتخزين معرف هذا الطلب المحدد
    latestRequestId.current += 1;
    const currentRequestId = latestRequestId.current;

    // استدعاء البحث
    fetch('https://dummyjson.com/products/search?q=' + encodeURIComponent(searchTerm))
      .then((res) => res.json())
      .then((data) => {
        // فحص حاسم: هل هذا الرد يتبع لآخر طلب تم إرساله؟
        if (currentRequestId === latestRequestId.current) {
          // نعم هو الأحدث: اعتمد النتائج
          setResults(data.products);
        } else {
          // طلب متأخر ومهمل: تجاهله تماماً دون المساس بالواجهة
          console.warn('تم تجاهل رد قديم بسبب وصول طلب أحدث منه');
        }
      });
  }, [searchTerm]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="ابحث بسرعة فائقة..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded"
      />
      <ul>
        {results.map((r) => (
          <li key={r.id}>{r.title}</li>
        ))}
      </ul>
    </div>
  );
}`,
      output: "ظهور نتائج أحدث كلمة بحث دائماً على الشاشة دون وميض أو تداخل للنتائج السابقة البطيئة.",
      commonMistakes: [
        {
          mistake: "الافتراض بأن الطلبات التي تخرج أولاً ستصل إجاباتها من الخادم أولاً بالضرورة.",
          fix: "تذكر دائماً أن شبكة الويب غير متزامنة تماماً؛ قد يتأخر طلب حجمه 10KB ويسبقه طلب حجمه 1MB بسبب توجيه المسارات أو عبء قاعدة البيانات.",
          explanation: "السرعة تعتمد على معالجة الخادم والشبكة ولا توجد ضمانات للترتيب الزمني بدون رقابة من العميل."
        }
      ],
      bestPractices: [
        "استخدم إما نمط الراية let isSubscribed = true في cleanup أو استخدم AbortController لإلغاء الطلب الشبكي ذاته.",
        "في التطبيقات التجارية الكبيرة، الاعتماد على مكتبات متطورة مثل TanStack Query يقضي على مشاكل Race Conditions تلقائياً."
      ],
      infographic: {
        title: "سيناريو حدوث وحل سباق البيانات (Race Condition)",
        elements: [
          { label: "المشكلة", role: "طلب (أ) يخرج أولاً ويتأخر -> طلب (ب) يخرج ثانياً ويصل سريعاً -> طلب (أ) يصل متأخراً ويخرب الشاشة", color: "rose" },
          { label: "الحل بالراية (Flag)", role: "تعيين isCurrent = false في دالة تنظيف useEffect لمنع تنفيذ setState القديم", color: "emerald" },
          { label: "الحل بـ Abort", role: "قطع اتصال الطلب القديم فيزيائياً من المتصفح عند بدء الطلب الجديد", color: "blue" },
          { label: "النتيجة", role: "واجهة منضبطة تعكس دائماً آخر نقرة للمستخدم بنسبة 100%", color: "purple" }
        ]
      }
    },
    {
      id: "10.2.i",
      title: "فصل منطق API عن الواجهة",
      englishTerm: "Separating API Logic from UI (فَصْلُ مَنْطِقِ الـ API عَنِ الوَاجِهَة: مبدأ المسؤولية الواحدة)",
      description: "من أسوأ الممارسات البرمجية الشائعة هي كتابة روابط الـ API وطلبات `fetch/axios` المباشرة والترويسات داخل مكونات واجهة المستخدم (JSX Components). الفصل المعماري يقتضي تطبيق مبدأ المسؤولية الواحدة (Single Responsibility Principle): المكونات مسؤولة فقط عن رسم الشاشة والتفاعل مع المستخدم، بينما يتم عزل كافة استدعاءات الشبكة والترويسات ومعالجة البيانات الخام داخل دوال وخدمات مستقلة (API Services أو Custom Hooks).",
      analogy: "مثل المطعم الراقي: الطاهي في المطبخ يعد الطعام، والنادل يقدمه للزبائن؛ لا يمكن للزبون أن يرى أنابيب الغاز ومستودعات اللحوم فوق طاولة الطعام في الصالة. كل شيء له مكانه المخصص.",
      whyItMatters: "يسهل اختبار الكود (Unit Testing)، وإعادة استخدام نفس دوال الـ API عبر عدة صفحات، وتغيير عناوين الخادم أو استبدال مكتبة fetch بـ axios في ملف واحد بدلاً من تعديل 50 صفحة!",
      syntax: "// في ملف الخدمات: export const getUsers = () => api.get('/users');\n// في المكون: const users = await getUsers();",
      simpleExample: `// 1. ملف الخدمات: src/services/userService.js
// عزل دالة الجلب كلياً عن مكونات React
export async function fetchAllUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('فشل جلب المستخدمين');
  }
  return response.json();
}

// 2. ملف المكون: src/components/UsersPage.jsx
import React, { useState, useEffect } from 'react';
// استيراد الخدمة فقط دون أي ذكر لروابط أو ترويسات
import { fetchAllUsers } from './userService';

export function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // استدعاء دالة الخدمة النظيفة
    fetchAllUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>المستخدمون المعتمدون:</h2>
      <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
    </div>
  );
}`,
      advancedExample: `// دمج الفصل المعماري مع Custom Hook مخصص: src/hooks/useProducts.js
import { useState, useEffect, useCallback } from 'react';
// استيراد طبقة الـ API المستقلة
import { getProductsList } from '../services/productService';

// خطاف مخصص يعزل كل حالات التحميل والأخطاء والجلب عن المكون تماماً
export function useProducts(category = '') {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const reload = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getProductsList(category);
      setProducts(data);
    } catch (err) {
      setError(err.message || 'حدث خطأ في جلب المنتجات');
    } finally {
      setIsLoading(false);
    }
  }, [category]);

  useEffect(() => {
    reload();
  }, [reload]);

  // إرجاع كائن منظم يحتاجه أي مكون واجهة
  return { products, isLoading, error, refetch: reload };
}

// استخدام الخطاف في مكون الواجهة بكل رشاقة:
// function ProductsView() {
//   const { products, isLoading, error, refetch } = useProducts('laptops');
//   if (isLoading) return <Spinner />;
//   return <Grid items={products} onRefresh={refetch} />;
// }`,
      output: "مكونات واجهة مستخدم غاية في النقاء والبساطة، قابلة للصيانة والاختبار بكل سهولة ومفصولة تماماً عن تفاصيل الاتصال.",
      commonMistakes: [
        {
          mistake: "كتابة الروابط الكاملة مثل 'https://api.mycompany.com/v1/users' مكررة في 20 مكوناً مختلفاً.",
          fix: "اجمع الروابط في ملف إعدادات مركزي وطبقة خدمات واحدة.",
          explanation: "عند تغيير نطاق الـ API أو الانتقال من بيئة التطوير للإنتاج، ستضطر لتعديل 20 ملفاً مع احتمال نسيان بعضها."
        }
      ],
      bestPractices: [
        "أنشئ مجلداً باسم `src/services` أو `src/api` وافصل فيه الخدمات حسب الموارد (userService, productService, authService).",
        "ابنِ Custom Hooks فوق طبقة الـ API لإدارة حالات Loading وError وتسهيل استهلاكها في مكونات JSX."
      ],
      infographic: {
        title: "الهندسة المعمارية النظيفة لفصل طبقات البيانات",
        elements: [
          { label: "UI Component (JSX)", role: "مسؤول عن العرض وتفاعل المستخدم فقط واستدعاء الخطافات", color: "blue" },
          { label: "Custom Hook Layer", role: "إدارة State (Loading, Error, Data, Refetch) وتنسيق التدفق", color: "emerald" },
          { label: "Service Layer (API)", role: "تنفيذ دوال الـ HTTP وتطبيق الـ Endpoints والمحددات", color: "purple" },
          { label: "HTTP Client (Axios/Fetch)", role: "التعامل مع الشبكة وإرفاق الترويسات ورموز التوثيق", color: "amber" }
        ]
      }
    },
    {
      id: "10.2.j",
      title: "إنشاء طبقة API Service",
      englishTerm: "Building an API Service Layer (بِنَاءُ طَبَقَةِ خِدْمَاتِ الـ API المَرْكَزِيَّة)",
      description: "طبقة خدمات الـ API (API Service Layer) هي النمط المعماري الأكثر نضجاً في هندسة تطبيقات الويب. تقوم بتجميع كافة استدعاءات الشبكة وتشكيل كائنات ووسائط برمجية موحدة تمثل كل كيان تجاري في التطبيق. تتكون الطبقة عادةً من عميل HTTP أساسي (Base Client) يحتوي على المعترضات وضبط النطاق، ومجموعة من الوحدات (Modules) المتخصصة لكل مورد تصدر دوالاً بديهية مثل `authService.login()` و`productService.create()`.",
      analogy: "مثل وزارة النقل في الدولة: بدلاً من أن يفتح كل مواطن طريقاً عشوائياً بسيارته، تضع الوزارة شبكة طرق موحدة وإشارات ومحطات وقود رسمية يمر عبرها الجميع بأمان وتنظيم صارم.",
      whyItMatters: "توحيد الكود بنسبة 100%، وسهولة تفعيل محاكاة البيانات للاختبارات (Mocking)، وضمان تطبيق قواعد الأمان والتوثيق عبر كل طلب يخرج من المتصفح.",
      syntax: "// apiClient.js -> base config\n// services/auth.js -> export const login = (creds) => api.post('/login', creds);\n// services/index.js -> export * from './auth';",
      simpleExample: `// نموذج مصغر لطبقة API Service متكاملة لمورد المقالات
// ملف: src/services/articleService.js
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const articleService = {
  // جلب كافة المقالات
  getAll: async () => {
    const res = await fetch(BASE_URL);
    return res.json();
  },

  // جلب مقال واحد بالمعرف
  getById: async (id) => {
    const res = await fetch(BASE_URL + '/' + id);
    return res.json();
  },

  // إنشاء مقال جديد
  create: async (newArticle) => {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newArticle),
    });
    return res.json();
  },

  // حذف مقال
  delete: async (id) => {
    const res = await fetch(BASE_URL + '/' + id, { method: 'DELETE' });
    return res.ok;
  },
};`,
      advancedExample: `// طبقة API Service متكاملة وعالمية مع دعم الأنواع وإلغاء الطلبات والمعترضات
// ملف: src/services/api/core.js
class HttpService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  // دالة طلب معيارية موحدة
  async request(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: 'Bearer ' + token }),
      ...options.headers,
    };

    const config = {
      ...options,
      headers,
    };

    const response = await fetch(this.baseUrl + endpoint, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const error = new Error(errorData.message || 'فشلت العملية برمز ' + response.status);
      error.status = response.status;
      error.data = errorData;
      throw error;
    }

    if (response.status === 204) return null;
    return response.json();
  }

  get(endpoint, options) {
    return this.request(endpoint, { method: 'GET', ...options });
  }

  post(endpoint, body, options) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      ...options,
    });
  }

  delete(endpoint, options) {
    return this.request(endpoint, { method: 'DELETE', ...options });
  }
}

// إنشاء خدمة النواة
export const http = new HttpService('https://api.myshop.com/v1');

// ملف: src/services/productService.js
export const productService = {
  list: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return http.get('/products' + (query ? '?' + query : ''));
  },
  details: (id) => http.get('/products/' + id),
  add: (data) => http.post('/products', data),
  remove: (id) => http.delete('/products/' + id),
};`,
      output: "بنية برمجية معيارية ترتقي بمشروعك لمستوى الشركات العالمية والمشاريع المستدامة طويلة الأمد.",
      commonMistakes: [
        {
          mistake: "خلط منطق الواجهة مثل استدعاء alert() أو navigate() داخل دوال الـ API Service.",
          fix: "اجعل طبقة الخدمات ترجع وعوداً (Promises) ناصعة أو تقذف أخطاء، ودع مكونات الواجهة تقرر كيف تتفاعل وتوجه المستخدم.",
          explanation: "إذا احتوت دالة الخدمة على منطق واجهة، فلن تتمكن من إعادة استخدامها في نصوص برمجية أخرى أو اختبارات تلقائية."
        }
      ],
      bestPractices: [
        "نظم مجلد الخدمات كالتالي: api/core.js للعميل العام، ثم ملفات منفصلة مثل authService.js وorderService.js.",
        "استخدم ملف index.js لتصدير كافة الخدمات بنقطة دخول واحدة ونظيفة: import { productService } from '@/services'."
      ],
      infographic: {
        title: "هيكل طبقة الـ API Service النموذجية",
        elements: [
          { label: "Core HTTP Client", role: "ملف الإعداد المركزي، الروابط الأساسية، ومعترضات التوثيق", color: "blue" },
          { label: "Resource Services", role: "ملفات متخصصة (authService, userService, cartService)", color: "emerald" },
          { label: "Uniform Methods", role: "دوال ذات أسماء واضحة (list, find, create, update, delete)", color: "purple" },
          { label: "Clean UI Integration", role: "المكونات تستدعي الخدمات دون أي تعقيد شبكي إطلاقاً", color: "amber" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q10.2.1",
      question: "لماذا يفضل استخدام كتلة finally() عند إدارة حالة التحميل setIsLoading(false)؟",
      options: [
        "لأن كتلة finally تزيد من سرعة نقل البيانات عبر كابلات الشبكة.",
        "لأن كتلة finally تنفذ في كافة الأحوال سواء نجح طلب الشبكة أو أطلق استثناء، مما يضمن عدم تجميد مؤشر التحميل.",
        "لأن جافاسكريبت تمنع تحديث الـ State خارج كتلة finally.",
        "لأنها تلغي طلب الـ fetch تلقائياً في حال تأخر الخادم."
      ],
      correctAnswer: 1,
      explanation: "كتلة finally تضمن تشغيل الكود بداخلها دائماً بعد انتهاء try أو catch، مما يحمي الواجهة من البقاء عالقة في وضع التحميل إلى ما لا نهاية عند حدوث أخطاء."
    },
    {
      id: "q10.2.2",
      question: "ما الفائدة الأساسية من استخدام AbortController في دالة تنظيف useEffect؟",
      options: [
        "حذف سجلات التصفح من ذاكرة المتصفح.",
        "إلغاء طلبات HTTP المعلقة عند إلغاء تركيب المكون لتوفير الموارد ومنع تحديث حالة مكون غير موجود.",
        "تحويل استجابات XML إلى صيغة JSON تلقائياً.",
        "تشفير رمز المصادقة JWT بمستوى عسكري."
      ],
      correctAnswer: 1,
      explanation: "عند انتقال المستخدم لصفحة أخرى قبل اكتمال الطلب، يقوم AbortController بإحباط الاتصال لمنع هدر حركة البيانات ومنع تسريب الذاكرة والتحذيرات غير المرغوبة."
    },
    {
      id: "q10.2.3",
      question: "كيف تحل تقنية 'متغير الراية' (Boolean Flag Pattern) مشكلة سباق البيانات (Race Condition)؟",
      options: [
        "تمنع المستخدم من كتابة أكثر من حرفين في حقل البحث.",
        "تقوم بإيقاف تشغيل الخادم ريثما تفرغ الواجهة من القراءة.",
        "تضمن أن نتائج الطلب المتأخر يتم تجاهلها ولا تحدث الـ State إذا تم إطلاق طلب أحدث منه.",
        "تقوم بتسريع الإنترنت تلقائياً للطلب الأقدم."
      ],
      correctAnswer: 2,
      explanation: "عند انتهاء تأثير قديم، تغير دالة التنظيف الراية إلى false (isCurrent = false)؛ وعندما يصل الرد المتأخر يجد الراية ملغاة فيتجاهل تحديث الحالة وتبقى الواجهة نظيفة ومطابقة لأحدث طلب."
    }
  ],
  exercise: {
    id: "ex-10.2",
    title: "بناء Custom Hook لجلب البيانات مع معالجة الحالات الأربع وإلغاء الطلب (useFetchApi)",
    description: "قم ببرمجة خطاف مخصص باسم `useFetchApi(url)` يدير بداخله الحالات الأربع: (data, isLoading, error, refetch). يجب أن يقوم الخطاف باستخدام AbortController لإلغاء الطلب عند إلغاء التركيب، والتحقق من response.ok، وتوفير دالة refetch لإعادة المحاولة عند الطلب.",
    starterCode: `// اكتب الكود الخاص بالخطاف المخصص useFetchApi
import { useState, useEffect, useCallback } from 'react';

export function useFetchApi(url) {
  // 1. عرف حالات data و isLoading و error
  
  // 2. اكتب دالة الجلب مع دعم AbortController
  
  // 3. أرجع كائن يحتوي على { data, isLoading, error, refetch }
}`,
    hints: [
      "تذكر إنشاء const controller = new AbortController() وتمرير controller.signal للطلب.",
      "تجاهل خطأ AbortError في كتلة catch ولا تعتبره خطأ للمستخدم.",
      "استخدم متغير اعتمادية للتحكم في إعادة المحاولة أو غلف دالة الجلب بـ useCallback."
    ],
    solution: `// الحل النموذجي لخطاف useFetchApi الاحترافي
import { useState, useEffect, useCallback, useRef } from 'react';

export function useFetchApi(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // عداد داخلي لتشغيل إعادة الجلب
  const [triggerCount, setTriggerCount] = useState(0);

  // دالة مخصصة لإعادة المحاولة يدوياً من الواجهة
  const refetch = useCallback(() => {
    setTriggerCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    // إذا لم يكن هناك عنوان URL صالح، لا تفعل شيئاً
    if (!url) return;

    const controller = new AbortController();
    setIsLoading(true);
    setError(null);

    async function executeFetch() {
      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error('فشل الطلب مع كود الحالة: ' + response.status);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        // تجاهل أخطاء الإلغاء المتعمدة
        if (err.name === 'AbortError') {
          return;
        }
        setError(err.message || 'حدث خطأ غير متوقع في الشبكة');
      } finally {
        // إيقاف التحميل إذا لم يتم إلغاء الطلب
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    executeFetch();

    // إلغاء الطلب عند فك المكون أو تغير الرابط
    return () => {
      controller.abort();
    };
  }, [url, triggerCount]);

  return { data, isLoading, error, refetch };
}`
  },
  infographic: {
    title: "دورة حياة استهلاك البيانات الكاملة في React",
    description: "الهيكل الهندسي المتين لجلب وإدارة البيانات وعزل الأعطال",
    steps: [
      { step: "1", title: "Mount & Signal", desc: "بدء الخطاف وتوليد AbortController لضبط أمان الذاكرة" },
      { step: "2", title: "State Setup", desc: "تفعيل isLoading=true ومسح الأخطاء وإظهار الهيكل العظمي" },
      { step: "3", title: "Service Call", desc: "استدعاء طبقة الخدمة المفصولة وفك ترميز الـ JSON" },
      { step: "4", title: "Render & Action", desc: "عرض البيانات أو شاشة الخطأ التفاعلية مع زر المحاولة" }
    ]
  }
};
