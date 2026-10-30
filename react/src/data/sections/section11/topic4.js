// src/data/sections/section11/topic4.js
// القسم 11: التوجيه والتنقل باستخدام React Router - الموضوع 4: واجهات React Router الحديثة

export const topic4 = {
  id: "11.4",
  title: "واجهات React Router الحديثة",
  description: "التحول المعماري الشامل في React Router (v6.4+ وصولاً إلى v7): واجهات Data Routers، استخدام دوال التحميل المسبق (Loaders) وإلغاء شلالات البيانات، دوال الإرسال (Actions) لمعالجة النماذج، حدود الأخطاء الموضعية (Route Error Boundaries)، خطاف useNavigation لإدارة حالات الانتقال، ومحركات الجلب واستدعاءات Fetchers وإعادة التحقق التلقائي (Revalidation).",
  subtopics: [
    {
      id: "11.4.a",
      title: "الفرق بين Declarative وData وFramework Modes",
      englishTerm: "Declarative vs Data vs Framework Modes (أَنْمَاطُ التَّوْجِيهِ: التقريري، ومحرك البيانات، وإطار العمل)",
      description: "مرت مكتبة React Router بثلاث مراحل معمارية كبرى: 1) النمط التقريري القديم (Declarative Mode عبر BrowserRouter و Routes و Route): حيث يتم تحميل المكون أولاً، ثم يبدأ المكون في جلب بياناته داخل useEffect (مما يسبب شلالات بطء Network Waterfalls)؛ 2) نمط موجه البيانات الحديث (Data Router Mode عبر createBrowserRouter و RouterProvider): يتيح للمسار جلب البيانات بالتوازي مع تحميل كود الصفحة عبر loaders قبل بدء الرندر؛ 3) نمط إطار العمل المتكامل (Framework Mode مثل Remix / React Router v7): يوفر تصييراً من جانب الخادم (SSR) وتوليداً ثابتاً وتوحيداً كاملاً بين العميل والخادم.",
      analogy: "مثل السفر بالطائرة: النمط التقريري هو أن تحجز تذكرة الطائرة أولاً، وتسافر للمدينة، وتصل الفندق عند منتصف الليل، ثم تبدأ تبحث عن مطعم وتنتظر تجهيز العشاء (تأخير شلالي)؛ بينما نمط Data Router هو أن تحجز الطيران وتطلب وجبة العشاء لتكون جاهزة وساخنة على طاولتك فور وصولك إلى باب الفندق دون دقيقة انتظار واحدة.",
      whyItMatters: "يقضي على بطء الشلالات (Network Waterfalls)، ويسرع ظهور البيانات بنسبة تصل إلى 60%، ويمثل الأساس التقني المعاصر المعتمد في React Router v7 و Remix.",
      syntax: "// Declarative: <BrowserRouter><Routes>...</Routes></BrowserRouter>\n// Data Router: const router = createBrowserRouter([...]); <RouterProvider router={router} />",
      simpleExample: `// مثال يوضح الفرق البرمجي في التهيئة
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function Home() { return <h2>الصفحة الرئيسية</h2>; }

// تهيئة نمط Data Router الحديث الموصى به رسمياً
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  // استخدام RouterProvider بدلاً من BrowserRouter القديم
  return <RouterProvider router={router} />;
}`,
      advancedExample: `// مقارنة شلال البيانات في النمط القديم مقابل التوازي في نمط Data Router
import React from 'react';
import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';

// 1. دالة التحميل loader: تعمل بالتوازي في الخلفية فور نقر الرابط وقبل رسم المكون
async function usersLoader() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
  if (!res.ok) throw new Error('فشل جلب المستخدمين');
  return res.json(); // ترجع البيانات جاهزة فوراً
}

// 2. المكون يقرأ البيانات فوراً في أول سطر دون useEffect أو isLoading!
function UsersDataPage() {
  const users = useLoaderData(); // البيانات متوفرة ومحقونة فوراً

  return (
    <div className="p-4 bg-slate-900 text-white rounded-2xl">
      <h3 className="font-bold text-emerald-400 mb-2">قائمة المستخدمين (Zero-Waterfall Data):</h3>
      <ul className="text-xs space-y-1">
        {users.map((u) => (
          <li key={u.id}>{u.name} - ({u.email})</li>
        ))}
      </ul>
    </div>
  );
}

// 3. تعريف مصفوفة Data Router
export const modernRouter = createBrowserRouter([
  {
    path: '/users',
    element: <UsersDataPage />,
    loader: usersLoader, // ربط دالة الجلب بالمسار مباشرة
  },
]);`,
      output: "ظهور الصفحة والبيانات متكاملة معاً في لحظة واحدة دون ظهور شاشات تحميل رمادية متقطعة.",
      commonMistakes: [
        {
          mistake: "محاولة استخدام خطاف useLoaderData() داخل تطبيق يستخدم BrowserRouter العادي القديم.",
          fix: "يجب تهيئة التوجيه باستخدام createBrowserRouter و RouterProvider للاستفادة من loaders و actions.",
          explanation: "دوال التحميل والميزات البيانية مدعومة فقط في نمط Data Routers."
        }
      ],
      bestPractices: [
        "اعتمد نمط createBrowserRouter لجميع مشاريع React الجديدة للاستفادة من أفضل أداء ومعالجة أخطاء.",
        "عزل دوال الـ loaders في ملفات مستقلة أو بجوار الصفحة لتسهيل اختبارها وصيانتها."
      ],
      infographic: {
        title: "تطور أجيال التوجيه في React Router",
        elements: [
          { label: "1. Declarative (v4/v5/v6)", role: "JSX Routes -> Component Mounts -> useEffect Fetches (بطء شلالي)", color: "rose" },
          { label: "2. Data Router (v6.4+)", role: "Click Link -> Loader Fetches + Component Loads بالتوازي -> Render فوري", color: "emerald" },
          { label: "3. Framework Mode (v7)", role: "SSR كامل، توليد استاتيكي، توحيد خادم العميل، وأفضل SEO ممكن", color: "blue" },
          { label: "القضاء على Waterfalls", role: "جلب كافة بيانات المسارات المتداخلة بالتوازي في نفس اللحظة", color: "purple" }
        ]
      }
    },
    {
      id: "11.4.b",
      title: "استخدام Loaders",
      englishTerm: "Route Loaders with useLoaderData (دَوَالُ التَّحْمِيلِ المُسْبَقِ: جلب البيانات قبل تصيير الصفحة)",
      description: "دالة `loader` هي دالة غير متزامنة (Async Function) تُربط بالمسار مباشرة في مصفوفة المسارات. تبدأ بالعمل فور نقر المستخدم على الرابط وأثناء قيام المتصفح بتجهيز الصفحة، وتقوم بجلب كافة البيانات المطلوبة من الـ API وإرجاعها. داخل المكون، نقرأ هذه البيانات المحقونة فوراً عبر خطاف `useLoaderData()` دون الحاجة لـ `useState` أو `useEffect` أو إدارة `isLoading` يدوياً.",
      analogy: "مثل خدمة الغرف في فندق فخم: قبل أن تفتح باب غرفتك وتدخل، تكون الفاكهة والعصير البارد موجودة بالفعل فوق الطاولة بانتظارك، بدلاً من الدخول للغرفة الفارغة ثم الاتصال والاستلقاء منتظراً وصول الطلب.",
      whyItMatters: "تلغي مئات الأسطر المكررة من useEffect وحالات التحميل اليدوية، وتضمن أن الصفحة لا تظهر إلا وبياناتها مكتملة وجاهزة.",
      syntax: "const router = createBrowserRouter([{\n  path: '/items',\n  loader: async () => fetch('/api/items'),\n  element: <ItemList />\n}]);\n// في المكون: const items = useLoaderData();",
      simpleExample: `import React from 'react';
import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';

// 1. دالة الـ Loader لجلب المنشورات
async function postsLoader() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  return res.json();
}

// 2. المكون يقرأ البيانات مباشرة عبر useLoaderData
function PostsPage() {
  const posts = useLoaderData();

  return (
    <div>
      <h3>أحدث المنشورات:</h3>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

// 3. ربط الـ loader بالمسار
const router = createBrowserRouter([
  {
    path: '/posts',
    element: <PostsPage />,
    loader: postsLoader,
  },
]);`,
      advancedExample: `import React from 'react';
import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';

// دالة loader متقدمة تستقبل معاملات المسار params وطلب الـ request
export async function productDetailsLoader({ params, request }) {
  // استخراج المعرف :id من معاملات المسار
  const { id } = params;
  
  // استخراج معلمات الاستعلام إن وجدت
  const url = new URL(request.url);
  const currency = url.searchParams.get('currency') || 'USD';

  // جلب البيانات من الخادم
  const res = await fetch('https://dummyjson.com/products/' + id);

  // إذا كان المنتج غير موجود نرمي استجابة خطأ 404 موثقة ليعالجها ErrorBoundary
  if (!res.ok) {
    throw new Response('المنتج المطلوب غير موجود في مستودعاتنا', { status: 404 });
  }

  const product = await res.json();
  return { product, currency };
}

// مكون تفاصيل المنتج
export function ProductViewer() {
  const { product, currency } = useLoaderData();

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white text-right max-w-md mx-auto">
      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-mono">#{product.id}</span>
      <h2 className="text-xl font-bold mt-2">{product.title}</h2>
      <p className="text-xs text-slate-400 mt-1">{product.description}</p>
      <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
        <span className="text-emerald-400 font-black text-xl">{product.price} {currency}</span>
        <button className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold hover:bg-blue-500">
          إضافة للسلة 🛒
        </button>
      </div>
    </div>
  );
}`,
      output: "استلام بيانات الخادم قبل رندر المكون وتفادي حالات التحميل المؤقتة وتجنب وميض الواجهة.",
      commonMistakes: [
        {
          mistake: "محاولة استخدام خطافات React مثل useState أو useParams داخل دالة loader نفسها.",
          fix: "تذكر أن loader هي دالة جافاسكريبت عادية وليست مكون React؛ استخدم كائن { params, request } الممرر لها كمعامل.",
          explanation: "دوال الـ loaders تعمل قبل مرحلة بناء شجرة React ولا يمكنها استخدام React Hooks."
        }
      ],
      bestPractices: [
        "ألقِ كائنات Response حقيقية عند الخطأ (throw new Response(..., { status: 404 })) لتمكين معالج الأخطاء من قراءتها بدقة.",
        "احرص على ألا تضع دوال ثقيلة للغاية في loader لكي لا يتأخر انتقال المستخدم بين الصفحات."
      ],
      infographic: {
        title: "دورة عمل دالة الـ Loader",
        elements: [
          { label: "1. النقر على الرابط", role: "المستخدم ينقر <Link to='/product/5'>", color: "blue" },
          { label: "2. تشغيل Loader", role: "تشغيل دالة loader({ params }) بالتوازي مع تحميل كود الصفحة", color: "amber" },
          { label: "3. استلام البيانات", role: "الخادم يرجع البيانات وتُحقن في ذاكرة التوجيه", color: "purple" },
          { label: "4. useLoaderData", role: "المكون يقرأ البيانات فوراً في أول رندر بدون وميض", color: "emerald" }
        ]
      }
    },
    {
      id: "11.4.c",
      title: "استخدام Actions",
      englishTerm: "Route Actions with Form (دَوَالُ الإِرْسَالِ وَمُعَالَجَةِ النَّمَاذِج: استقبال طلبات POST)",
      description: "دالة `action` هي الشق المقابل لـ `loader`: فبينما يُخصص الـ loader للقراءة (GET)، تُخصص دالة الـ `action` لعمليات التعديل والكتابة (POST, PUT, DELETE). تُستدعى الـ action تلقائياً عندما يُرسل المستخدم نموذجاً باستخدام مكون `<Form method='post'>` الخاص بـ React Router. تقوم الدالة باستخراج بيانات الحقول عبر `request.formData()`، وإرسالها للخادم، ثم يقوم React Router تلقائياً بإعادة تشغيل كافة الـ loaders لتحديث بيانات الواجهة فوراً (Automatic Revalidation).",
      analogy: "مثل صندوق الشكاوى والمقترحات الحكومي: تضع استمارتك في الصندوق (Form submission)، فيقوم الموظف المختص (Action) بمعالجة الطلب في الأرشيف، وبمجرد ختم المعاملة، تتحدث لوحة الشاشات الإلكترونية في الصالة تلقائياً بالبيانات الجديدة دون أن تطلب ذلك.",
      whyItMatters: "تلغي الحاجة لكتابة e.preventDefault() و onSubmit يدوياً في كل نموذج، وتضمن تحديث البيانات المعروضة في الشاشة تلقائياً بعد كل تعديل أو إنشاء.",
      syntax: "export async function myAction({ request }) {\n  const formData = await request.formData();\n  await api.save(formData);\n  return redirect('/success');\n}",
      simpleExample: `import React from 'react';
import { Form, redirect } from 'react-router-dom';

// دالة الـ action التي تستقبل بيانات النموذج
export async function createTodoAction({ request }) {
  // استخراج بيانات الحقول المدخلة
  const formData = await request.formData();
  const title = formData.get('title');

  // إرسال البيانات للخادم
  await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({ title, completed: false }),
  });

  // إعادة توجيه المستخدم لصفحة المهام
  return redirect('/todos');
}

// مكون النموذج التقريري
export function NewTodoPage() {
  return (
    // استخدام وسم Form الخاص بـ React Router مع تحديد method="post"
    <Form method="post">
      <input type="text" name="title" placeholder="عنوان المهمة..." required />
      <button type="submit">حفظ المهمة</button>
    </Form>
  );
}`,
      advancedExample: `import React from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';

// دالة action متطورة تعالج التحقق وترجع أخطاء الحقول في حال عدم الصلاحية
export async function updateProfileSettingsAction({ request }) {
  const formData = await request.formData();
  const username = formData.get('username');
  const email = formData.get('email');

  // التحقق من صحة المدخلات من جانب العمليات
  const errors = {};
  if (!username || username.length < 3) {
    errors.username = 'اسم المستخدم يجب أن يتكون من 3 أحرف على الأقل';
  }
  if (!email || !email.includes('@')) {
    errors.email = 'يرجى إدخال عنوان بريد إلكتروني صحيح';
  }

  // إذا وجدت أخطاء نعيدها للمكون دون إعادة التوجيه
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  // محاكاة حفظ البيانات في الـ API
  await new Promise((r) => setTimeout(r, 600));

  return { success: true, message: 'تم تحديث الملف الشخصي بنجاح!' };
}

// مكون الواجهة الذي يستقبل أخطاء ونتائج الـ action
export function EditProfileSettingsView() {
  // قراءة ما ترجعه دالة الـ action
  const actionResult = useActionData();
  // مراقبة حالة الإرسال الحالية
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white text-right">
      <h3 className="font-bold mb-4">تعديل الملف الشخصي (Route Action)</h3>

      {actionResult?.success && (
        <div className="p-3 mb-4 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs">
          {actionResult.message}
        </div>
      )}

      <Form method="post" className="space-y-3">
        <div>
          <label className="block text-xs text-slate-400 mb-1">اسم المستخدم:</label>
          <input
            name="username"
            type="text"
            className="w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none"
          />
          {actionResult?.errors?.username && (
            <span className="text-rose-400 text-[11px]">{actionResult.errors.username}</span>
          )}
        </div>

        <div>
          <label className="block text-xs text-slate-400 mb-1">البريد الإلكتروني:</label>
          <input
            name="email"
            type="email"
            className="w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none"
          />
          {actionResult?.errors?.email && (
            <span className="text-rose-400 text-[11px]">{actionResult.errors.email}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition disabled:opacity-50"
        >
          {isSubmitting ? 'جاري الحفظ...' : 'حفظ التعديلات'}
        </button>
      </Form>
    </div>
  );
}`,
      output: "إرسال سلس للنموذج ومعالجة الأخطاء وإعادة التحقق التلقائي للبيانات دون أي كود ربط يدوي معقد.",
      commonMistakes: [
        {
          mistake: "استخدام وسم <form> العادي بحروف صغيرة بدلاً من <Form> المستورد من react-router-dom.",
          fix: "استورد <Form> بحرف كابيتال: import { Form } from 'react-router-dom'.",
          explanation: "وسم form العادي يسبب إعادة تحميل كاملة للصفحة في المتصفح، بينما Form يعترض الإرسال ويوجهه لدالة action."
        },
        {
          mistake: "نسيان إعطاء خاصية name لكل حقل إدخال داخل النموذج.",
          fix: "تأكد من وجود name='fieldName' في كل input ليتمكن formData.get('fieldName') من قراءته.",
          explanation: "واجهة FormData تعتمد على أسماء الحقول name لاستخراج قيمها."
        }
      ],
      bestPractices: [
        "استخدم دالة redirect('/path') التي تصدرها react-router-dom لإعادة التوجيه من داخل دالة action.",
        "استغل ميزة Revalidation التلقائية التي يطلقها React Router فور اكتمال action لتحديث الشاشات المرتبطة."
      ],
      infographic: {
        title: "دورة عمل دالة الـ Action وإعادة التحقق",
        elements: [
          { label: "1. إرسال النموذج", role: "المستخدم ينقر زر الحفظ في <Form method='post'>", color: "blue" },
          { label: "2. تشغيل Action", role: "استدعاء دالة action({ request }) واستخراج formData", color: "amber" },
          { label: "3. تحديث الخادم", role: "إرسال البيانات لقاعدة البيانات أو استدعاء الـ API", color: "purple" },
          { label: "4. Auto Revalidation", role: "إعادة تشغيل كافة الـ loaders وتحديث شاشات الموقع تلقائياً", color: "emerald" }
        ]
      }
    },
    {
      id: "11.4.d",
      title: "التعامل مع Error Boundaries للمسارات",
      englishTerm: "Route Error Boundaries with useRouteError (حُدُودُ أَعْطَالِ المَسَارَاتِ: عزل الانهيارات البرمجية)",
      description: "حدود أخطاء المسارات (Route Error Boundaries) هي جدران حماية معمارية توضع على مستوى كل مسار عبر خاصية `errorElement` في مصفوفة المسارات. عند حدوث أي استثناء برمجـي، أو فشل اتصال بالشبكة، أو رمي خطأ برمز 404 أو 500 داخل الـ loader أو أثناء رندر المكون، يقوم React Router باحتجاز الخطأ وعرض مكون `errorElement` الخاص بهذا المسار فقط، مما يمنع انهيار باقي شجرة التطبيق وشريط التنقل العام.",
      analogy: "مثل القواطع الكهربائية الذكية (Circuit Breakers) في المنزل: إذا حدث تماس كهربائي في مكيف غرفة النوم، يفصل قاطع تلك الغرفة فقط لحمايتها، بينما تظل أضواء الصالة وثلاجة المطبخ وتلفاز المعيشة تعمل بأمان تام دون انقطاع الكهرباء عن المنزل كله.",
      whyItMatters: "يمنع الشاشة البيضاء القاتلة (White Screen of Death) التي تصيب التطبيقات عند حدوث خطأ غير متوقع، ويحصر العطل في جزئه الموضعي مع توفير خيارات تعافي واضحة.",
      syntax: "{\n  path: '/invoices',\n  element: <Invoices />,\n  errorElement: <RouteErrorBoundary />,\n}",
      simpleExample: `import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

// مكون حدود الأخطاء المخصص للمسار
export function RouteErrorBoundary() {
  // قراءة كائن الخطأ الملتقط في هذا المسار
  const error = useRouteError();

  return (
    <div style={{ padding: '20px', background: '#fee2e2', borderRadius: '12px', color: '#991b1b' }}>
      <h3>⚠️ تعذر تحميل هذه الصفحة</h3>
      {isRouteErrorResponse(error) ? (
        <p>الخطأ: {error.status} - {error.statusText || error.data}</p>
      ) : (
        <p>التفاصيل: {error.message || 'حدث خطأ غير متوقع'}</p>
      )}
      <button onClick={() => window.location.reload()}>إعادة المحاولة</button>
    </div>
  );
}`,
      advancedExample: `import React from 'react';
import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';

// معالج أخطاء مسارات احترافي يميز بين أخطاء 404، وأخطاء الشبكة، وأخطاء الكود
export function ResilientRouteErrorView() {
  const error = useRouteError();
  const navigate = useNavigate();

  // هل الخطأ هو استجابة HTTP مقذوفة (Thrown Response)؟
  const isResponseError = isRouteErrorResponse(error);

  return (
    <div className="p-8 bg-slate-900 border border-rose-500/30 rounded-3xl max-w-lg mx-auto text-white text-right my-8 shadow-2xl">
      <div className="w-16 h-16 bg-rose-500/10 text-rose-500 rounded-2xl flex items-center justify-center text-3xl mb-4 border border-rose-500/20">
        💥
      </div>

      <span className="text-xs font-mono px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full border border-rose-500/30">
        ROUTE CRASH ISOLATED
      </span>

      <h3 className="text-xl font-bold mt-3 mb-1">
        {isResponseError && error.status === 404
          ? 'المورد المطلوب غير موجود (404)'
          : isResponseError && error.status === 401
          ? 'جلسة غير مصرح بها (401)'
          : 'تعذر عرض محتوى هذا القسم'}
      </h3>

      <p className="text-xs text-slate-400 mb-4 leading-relaxed">
        {isResponseError
          ? error.data?.message || error.statusText || 'فشلت معالجة الطلب في الخادم'
          : error.message || 'حدث استثناء غير متوقع أثناء معالجة البيانات.'}
      </p>

      <div className="flex gap-2 pt-2 border-t border-slate-800">
        <button
          onClick={() => navigate(-1)}
          className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition"
        >
          ⬅️ تراجع للصفحة السابقة
        </button>
        <button
          onClick={() => window.location.reload()}
          className="flex-1 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition"
        >
          🔄 تحديث الصفحة
        </button>
      </div>
    </div>
  );
}`,
      output: "عزل انهيار المسار المعطوب في مكانه وعرض واجهة تنبيه راقية مع بقاء شريط التطبيق والقوائم الأخرى حية وتعمل.",
      commonMistakes: [
        {
          mistake: "عدم فحص isRouteErrorResponse(error) والافتراض بأن الخطأ دائماً يمتلك error.message.",
          fix: "استخدم isRouteErrorResponse للتحقق مما إذا كان الخطأ Response مقذوفاً من loader (له status و data).",
          explanation: "في React Router الحديث، يمكن لدوال loaders أن تقذف استجابات new Response() بالإضافة لكائنات Error العادية."
        }
      ],
      bestPractices: [
        "ضع errorElement في المسار الجذري الأبوي كشبكة أمان عامة، وضع errorElement في المسارات الحساسة لعزل الأعطال موضعياً.",
        "وفر أزرار استرجاع واضحة في واجهة الخطأ لتمكين المستخدم من العودة أو إعادة المحاولة."
      ],
      infographic: {
        title: "آلية احتجاز الأخطاء عبر errorElement",
        elements: [
          { label: "حدوث الخطأ", role: "فشل في دالة الـ loader أو خطأ في رندر المكون الفرعي", color: "rose" },
          { label: "صعود الخطأ (Bubbling)", role: "يبحث React Router عن أقرب errorElement في الشجرة", color: "amber" },
          { label: "العزل الموضعي", role: "عرض واجهة الخطأ في مكان المسار المعطوب فقط", color: "purple" },
          { label: "سلامة التطبيق", role: "بقاء شريط التنقل والصفحات الأخرى سليمة وشغالة بنسبة 100%", color: "emerald" }
        ]
      }
    },
    {
      id: "11.4.e",
      title: "إدارة حالات Navigation",
      englishTerm: "Tracking Navigation State with useNavigation (تَتَبُّعُ حَالَاتِ الاِنْتِقَالِ: مؤشرات التقدم العامة)",
      description: "خطاف `useNavigation()` هو الأداة المركزية التي تخبرك بما يفعله React Router في كل لحظة عبر كامل التطبيق. يُرجع كائن ملاحة يحتوي على خاصية `navigation.state` التي تتخذ واحدة من ثلاث حالات: `'idle'` (التطبيق ساكن ومستقر)، `'submitting'` (يتم إرسال نموذج عبر action)، أو `'loading'` (يتم تنزيل كود صفحة جديدة أو تشغيل loader في الخلفية). يتيح هذا بناء أشرطة تقدم عامة (Global Progress Bars) ومؤشرات تحميل رشيقة أعلى الشاشة.",
      analogy: "مثل شريط التحميل الأزرق الرفيع أعلى شاشة متصفح سفاري أو موقع يوتيوب: عندما تنقر على فيديو، لا تختفي الشاشة، بل يسير شريط أزرق متوهج أعلى الصفحة ليعلمك بأن الفيديو قيد التجهيز في الخلفية.",
      whyItMatters: "يوفر تغذية راجعة فورية ومطمئنة للمستخدم عند النقر على أي رابط بطيء أو إرسال النماذج، مما يمنع النقر المتكرر ويزيد من إدراك السرعة.",
      syntax: "const navigation = useNavigation();\nconst isLoading = navigation.state === 'loading';\nconst isSubmitting = navigation.state === 'submitting';",
      simpleExample: `import React from 'react';
// استيراد خطاف حالة الملاحة
import { useNavigation } from 'react-router-dom';

function GlobalLoadingBar() {
  const navigation = useNavigation();

  // فحص هل هناك أي عملية جلب أو انتقال جارية حالياً
  if (navigation.state === 'idle') return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(to right, #3b82f6, #10b981)',
      zIndex: 9999,
      animation: 'pulse 1s infinite'
    }} />
  );
}`,
      advancedExample: `import React from 'react';
import { useNavigation, Outlet } from 'react-router-dom';

// تخطيط عام متكامل يدمج شريط تقدم متوهج وتعتيماً بصرياً أثناء الانتقال البطيء
export function RootLayoutWithGlobalNavigation() {
  const navigation = useNavigation();

  // تحديد ما إذا كان التطبيق في حالة انتقال
  const isNavigating = navigation.state !== 'idle';
  const isPostingData = navigation.state === 'submitting';

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans relative">
      {/* 1. شريط التقدم العلوي المتوهج المماثل ليوتيوب */}
      {isNavigating && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400 z-50 animate-pulse shadow-lg shadow-blue-500/50" />
      )}

      <header className="p-4 border-b border-slate-800 flex justify-between items-center">
        <span className="font-bold text-sm">منصة المشاريع المتقدمة</span>
        {isNavigating && (
          <span className="text-xs text-amber-400 flex items-center gap-1.5 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            {isPostingData ? 'جاري معالجة وإرسال البيانات...' : 'جاري تحميل الصفحة التالية...'}
          </span>
        )}
      </header>

      {/* 2. تخفيف شفافية المحتوى الحالي قليلاً أثناء انتظار الصفحة القادمة */}
      <main className={"transition-opacity duration-200 " + (isNavigating ? "opacity-60 pointer-events-none" : "opacity-100")}>
        <Outlet />
      </main>
    </div>
  );
}`,
      output: "ظهور شريط تقدم علوي جذاب متوهج وتعتيم خفيف للشاشة أثناء جلب بيانات الصفحة القادمة لمنع اللمسات المكررة.",
      commonMistakes: [
        {
          mistake: "الخلط بين useNavigation (لمراقبة حالة الملاحة والتحميل) وبين useNavigate (لتغيير المسار برمجياً).",
          fix: "تذكر: useNavigate هو فعل (Action) للانتقال، بينما useNavigation هو اسم (State) لمراقبة حالة الانتقال.",
          explanation: "استدعاء useNavigation() يعطيك كائن { state, location, formData } ولا يحتوي على دالة ملاحة."
        }
      ],
      bestPractices: [
        "ضع شريط التقدم المعتمد على useNavigation في المكون الأب الرئيسي (Root Layout) ليغطي كافة صفحات التطبيق.",
        "عطل الأزرار التفاعلية أثناء navigation.state === 'submitting' لمنع تكرار إرسال النماذج."
      ],
      infographic: {
        title: "حالات navigation.state الثلاث",
        elements: [
          { label: "1. idle", role: "التطبيق مستقر والصفحة مكتملة الرندر والبيانات متزامنة", color: "emerald" },
          { label: "2. submitting", role: "المستخدم أرسل نموذجاً و دالة الـ action قيد المعالجة الآن", color: "amber" },
          { label: "3. loading", role: "دالة loader للمسار القادم تعمل في الخلفية أو تتم إعادة التحقق", color: "blue" },
          { label: "التغذية الراجعة", role: "رسم شريط التقدم العلوي وإلغاء الحاجة لـ Spinner في كل صفحة", color: "purple" }
        ]
      }
    },
    {
      id: "11.4.f",
      title: "استخدام Fetchers",
      englishTerm: "Non-Navigating Mutations with useFetcher (اِسْتِخْدَامُ الفِتْشَرْ: التفاعل دون تغيير عنوان الصفحة)",
      description: "خطاف `useFetcher()` هو الأداة السحرية في React Router لإجراء عمليات التعديل (Mutations) واستدعاءات الـ API في الخلفية دون تغيير عنوان الصفحة (No URL Change). يُستخدم في التفاعلات الفرعية الشائعة: مثل الضغط على زر 'أعجبني' (Like Button)، أو تبديل حالة مهمة، أو إضافة منتج لسلة المشتريات دون مغادرة صفحة الكتالوج. يمتلك الـ fetcher مكون `<fetcher.Form>` خاص به، ويوفر حالات التحميل `fetcher.state` والبيانات `fetcher.data` الخاصة به بمعزل عن الصفحة.",
      analogy: "مثل خدمة التوصيل السريعة داخل الفندق: تطلب قهوة وأنت جالس في بهو الفندق، فيأتي النادل ويضعها بجانبك وأنت في نفس مكانك دون أن تضطر للوقوف والذهاب إلى الكافتيريا بنفسك ومغادرة مجلسك.",
      whyItMatters: "يسمح ببناء واجهات فائقة التفاعل (Micro-interactions) مثل القوائم المنسدلة التلقائية، وأزرار الحفظ المباشر، وتحديثات الجداول الموضعية دون إرباك مسار التصفح الرئيسي.",
      syntax: "const fetcher = useFetcher();\n// في الزر:\n<fetcher.Form method='post' action='/like-endpoint'>...",
      simpleExample: `import React from 'react';
// استيراد خطاف fetcher
import { useFetcher } from 'react-router-dom';

function LikeButton({ postId, initialLikes }) {
  const fetcher = useFetcher();

  // فحص هل الطلب قيد الإرسال حالياً
  const isLiking = fetcher.state !== 'idle';

  return (
    // استخدام fetcher.Form لإرسال طلب action دون تغيير عنوان الـ URL في المتصفح!
    <fetcher.Form method="post" action="/api/like">
      <input type="hidden" name="postId" value={postId} />
      <button type="submit" disabled={isLiking}>
        {isLiking ? 'جاري الإعجاب...' : '❤️ أعجبني'}
      </button>
    </fetcher.Form>
  );
}`,
      advancedExample: `import React from 'react';
import { useFetcher } from 'react-router-dom';

// مفتاح تبديل اشتراك الإشعارات دون مغادرة الصفحة مع دعم التحديث المتفائل
export function NewsletterSubscriptionToggle({ isSubscribedInitially }) {
  const fetcher = useFetcher();

  // قراءة القيمة المتفائلة: إذا كان الـ fetcher يرسل الآن بيانات، نقرأ قيمتها فوراً
  const isSubscribed = fetcher.formData
    ? fetcher.formData.get('subscribed') === 'true'
    : isSubscribedInitially;

  const isPending = fetcher.state !== 'idle';

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between max-w-sm text-right">
      <div>
        <p className="text-xs font-bold text-white">النشرة البريدية الأسبوعية</p>
        <p className="text-[10px] text-slate-400">تصلك أحدث المقالات والدروس كل خميس</p>
      </div>

      <fetcher.Form method="post" action="/api/newsletter">
        {/* إرسال القيمة المعاكسة */}
        <input type="hidden" name="subscribed" value={(!isSubscribed).toString()} />
        <button
          type="submit"
          disabled={isPending}
          className={
            "px-3 py-1.5 rounded-xl text-xs font-bold transition-all " +
            (isSubscribed
              ? "bg-emerald-600 text-white hover:bg-emerald-500"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700")
          }
        >
          {isPending ? '⏳...' : isSubscribed ? 'مشترك ✔️' : 'اشترك الآن'}
        </button>
      </fetcher.Form>
    </div>
  );
}`,
      output: "إرسال البيانات وتحديث الخادم بضغطة زر دون أي تغيير في شريط عنوان المتصفح ودون انقطاع لتصفح المستخدم.",
      commonMistakes: [
        {
          mistake: "استخدام مكون <Form> العادي للعمليات الصغيرة الموضعية مما يؤدي لتحويل المستخدم لمسار آخر.",
          fix: "استخدم <fetcher.Form> دائماً عندما تريد إرسال بيانات دون تغيير مسار الصفحة الحالية.",
          explanation: "المكون Form العادي يغير المسار؛ بينما fetcher.Form مصمم خصيصاً للعمليات الموضعية في الخلفية."
        }
      ],
      bestPractices: [
        "استغل خاصية fetcher.formData لبناء تحديثات متفائلة فورية (Optimistic UI) في الأزرار التفاعلية.",
        "يمكنك استخدام fetcher.load('/api/items') أيضاً لقراءة بيانات إضافية في الخلفية دون الانتقال."
      ],
      infographic: {
        title: "الفرق بين Form و fetcher.Form",
        elements: [
          { label: "المكون <Form>", role: "يغير عنوان الـ URL وينقل المستخدم لصفحة جديدة أو يعيد توجيهه", color: "blue" },
          { label: "المكون <fetcher.Form>", role: "يبقى في نفس الصفحة تماماً وينفذ العملية في الخلفية بهدوء", color: "emerald" },
          { label: "استخدامات Fetcher", role: "أزرار الإعجاب، مفاتيح التبديل (Toggles)، وإضافة المنتجات للسلة", color: "purple" },
          { label: "التزامن التلقائي", role: "يقوم fetcher بتحديث كافة الـ loaders في الصفحة الحالية تلقائياً", color: "amber" }
        ]
      }
    },
    {
      id: "11.4.g",
      title: "إعادة التحقق من البيانات Revalidation",
      englishTerm: "Automatic & Manual Revalidation (إِعَادَةُ التَّحَقُّقِ: التحديث التلقائي للبيانات بعد التعديلات)",
      description: "إعادة التحقق (Revalidation) هي الميزة الأقوى في معمارية Data Routers: فبمجرد انتهاء أي عملية تعديل (سواء عبر `<Form>` أو `<fetcher.Form>`)، يقوم React Router أوتوماتيكياً بإعادة تشغيل كافة دوال الـ `loaders` النشطة حالياً في الصفحة لجلب أحدث نسخة من البيانات من الخادم، مما يضمن أن واجهة المستخدم متزامنة بنسبة 100% مع قاعدة البيانات دون الحاجة لكتابة استدعاءات تحديث يدوية، كما يمكن التحكم فيها عبر خطاف `useRevalidator()`.",
      analogy: "مثل التحديث التلقائي لأسعار الذهب أو العملات على شاشات البورصة: عندما تتم صفقة شراء كبرى، تتحدث كافة الشاشات وأسعار المعروضات في نفس اللحظة تلقائياً دون أن يضغط كل متعامل على زر Refresh في لوحة مفاتيحه.",
      whyItMatters: "يقضي تماماً على ظاهرة 'البيانات البائتة' (Stale Data) ويجعل مزامنة البيانات بين العميل والخادم تعمل في تناغم تلقائي دون أي تعقيد برمجي.",
      syntax: "const revalidator = useRevalidator();\nrevalidator.revalidate(); // لإعادة التحقق يدوياً عند الحاجة",
      simpleExample: `import React from 'react';
// استيراد خطاف إعادة التحقق اليدوي
import { useRevalidator } from 'react-router-dom';

function RefreshDataButton() {
  const revalidator = useRevalidator();

  return (
    <button
      onClick={() => revalidator.revalidate()}
      disabled={revalidator.state === 'loading'}
      style={{ padding: '8px 16px', cursor: 'pointer' }}
    >
      {revalidator.state === 'loading' ? 'جاري التحديث...' : '🔄 تحديث البيانات اللحظي'}
    </button>
  );
}`,
      advancedExample: `import React, { useEffect } from 'react';
import { useRevalidator, useLoaderData } from 'react-router-dom';

// تحديث دوري ذكي (Polling / Auto-Revalidation) كل 15 ثانية للبيانات الحية
export function LiveMetricsDashboard() {
  const data = useLoaderData();
  const revalidator = useRevalidator();

  useEffect(() => {
    // إعداد مؤقت دوري لإعادة فحص وتحديث البيانات من الخادم
    const interval = setInterval(() => {
      // إعادة التحقق فقط إذا لم نكن نجلب بيانات حالياً وكانت الصفحة مرئية
      if (revalidator.state === 'idle' && document.visibilityState === 'visible') {
        revalidator.revalidate();
      }
    }, 15000); // كل 15 ثانية

    return () => clearInterval(interval);
  }, [revalidator]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white text-right max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-800">
        <h3 className="font-bold">المؤشرات المباشرة (Auto-Revalidation)</h3>
        <span className="text-xs flex items-center gap-1.5 text-emerald-400">
          <span className={"w-2 h-2 rounded-full " + (revalidator.state === 'loading' ? 'bg-amber-400 animate-ping' : 'bg-emerald-400')}></span>
          {revalidator.state === 'loading' ? 'تحديث حي...' : 'متصل ومحدث'}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-slate-800 rounded-xl">
          <p className="text-slate-400">الطلبات النشطة</p>
          <p className="text-lg font-black text-blue-400 mt-1">{data?.activeOrders || 42}</p>
        </div>
        <div className="p-3 bg-slate-800 rounded-xl">
          <p className="text-slate-400">إجمالي المبيعات</p>
          <p className="text-lg font-black text-emerald-400 mt-1">{data?.totalRevenue || 12850} $</p>
        </div>
      </div>
    </div>
  );
}`,
      output: "بيانات حية ومحدثة باستمرار تتزامن تلقائياً بعد كل عملية أو بصورة دورية ذكية.",
      commonMistakes: [
        {
          mistake: "محاولة استدعاء revalidator.revalidate() في حلقة تكرارية سريعة جداً دون فحص revalidator.state.",
          fix: "تأكد من أن revalidator.state === 'idle' قبل تشغيل إعادة التحقق.",
          explanation: "إطلاق طلبات متزامنة يرهق الخادم ويسبب ازدحاماً في شبكة المتصفح."
        }
      ],
      bestPractices: [
        "اعتمد على إعادة التحقق التلقائية الفطرية بعد كل Action كأفضل ممارسة لتحديث الواجهات.",
        "استخدم خاصية shouldRevalidate في تعريف المسار لتحسين الأداء وتخطي الـ loaders التي لا تتأثر بالعملية."
      ],
      infographic: {
        title: "آلية إعادة التحقق التلقائية (Revalidation Loop)",
        elements: [
          { label: "1. تعديل البيانات", role: "المستخدم يرسل نموذجاً عبر Action", color: "blue" },
          { label: "2. نجاح العملية", role: "الخادم يؤكد نجاح التعديل في قاعدة البيانات", color: "emerald" },
          { label: "3. إشارة Revalidate", role: "React Router يطلق إشارة إعادة فحص لكافة الـ Loaders النشطة", color: "purple" },
          { label: "4. تحديث الشاشة", role: "وصول أحدث بيانات وتحديث الـ UI فوراً دون رفرش", color: "amber" }
        ]
      }
    },
    {
      id: "11.4.h",
      title: "تنظيم المسارات في التطبيقات الكبيرة",
      englishTerm: "Scalable Route Architecture (تَنْظِيمُ وَهَيْكَلَةُ المَسَارَاتِ فِي المَشَارِيعِ الضَّخْمَة)",
      description: "في التطبيقات المؤسسية الكبرى التي تضم مئات الصفحات والوحدات (Modules)، يصبح وضع كافة المسارات في ملف واحد أمراً كارثياً يصعب صيانته. يقتضي التنظيم المعماري الاحترافي: تقسيم شجرة المسارات إلى ملفات فرعية حسب المجالات الوظيفية (مثل `authRoutes.js` و `dashboardRoutes.js` و `storeRoutes.js`)، واستخدام كائنات الإعدادات، واستخراج أسماء المسارات في ثوابت معيارية (Route Constants) لتجنب أخطاء الكتابة اليدوية (Typos).",
      analogy: "مثل تنظيم شبكة الطرق السريعة في دولة كبرى: لا ترسم كل شوارع وأزقة الدولة في خريطة حائط واحدة عملاقة؛ بل تقسم الخرائط إلى أقاليم ومحافظات ومناطق متخصصة لتسهيل القراءة والتنقل.",
      whyItMatters: "يسهل عمل الفرق البرمجية الكبيرة بالتوازي في نفس المستودع دون تضارب دمج (Merge Conflicts)، ويجعل إضافة أو تعديل أي مسار مستقبلي أمراً بديهياً في ثوانٍ.",
      syntax: "// src/routes/appRoutes.js -> export const routes = [...authRoutes, ...dashboardRoutes];\n// constants/routes.js -> export const ROUTES = { HOME: '/', LOGIN: '/login' };",
      simpleExample: `// 1. ملف ثوابت المسارات: src/constants/routes.js
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PRODUCTS: '/products',
  PRODUCT_DETAILS: (id) => '/products/' + id,
};

// 2. استخدام الثوابت في المكونات لمنع الأخطاء الإملائية:
import { Link } from 'react-router-dom';
import { ROUTES } from './routes';

function NavDemo() {
  return (
    <nav>
      <Link to={ROUTES.HOME}>الرئيسية</Link>
      <Link to={ROUTES.PRODUCT_DETAILS(42)}>المنتج 42</Link>
    </nav>
  );
}`,
      advancedExample: `// هيكلية معمارية احترافية لتطبيق مؤسسي كبير
// ملف: src/routes/modules/authRoutes.jsx
export const authRoutes = [
  {
    path: '/login',
    element: <div>صفحة الدخول</div>,
  },
  {
    path: '/register',
    element: <div>صفحة التسجيل</div>,
  },
];

// ملف: src/routes/modules/dashboardRoutes.jsx
export const dashboardRoutes = [
  {
    path: '/dashboard',
    element: <div>لوحة التحكم الرئيسية</div>,
    children: [
      { path: 'analytics', element: <div>الإحصائيات</div> },
      { path: 'billing', element: <div>الفواتير</div> },
    ],
  },
];

// ملف التجميع المركزي: src/routes/index.jsx
import { createBrowserRouter } from 'react-router-dom';

export const appRouter = createBrowserRouter([
  // مسار الموقع العام
  {
    path: '/',
    element: <div>الصفحة الرئيسية العامة</div>,
  },
  // دمج مسارات المصادقة
  ...authRoutes,
  // دمج مسارات لوحة التحكم
  ...dashboardRoutes,
  // مسار 404 الشامل
  {
    path: '*',
    element: <div>404 - صفحة غير موجودة</div>,
  },
]);`,
      output: "هيكل مسارات فائق النظافة وقابل للتوسع اللانهائي يدعم مئات المسارات والصفحات بكل يسر وسلاسة.",
      commonMistakes: [
        {
          mistake: "كتابة الروابط النصية مثل '/dashboard/analytics/reports' مكررة يدوياً في عشرات الملفات (Hardcoded Strings).",
          fix: "عرف كائن ثوابت مركزي ROUTES واستخدمه في كافة وسوم Link و navigate.",
          explanation: "عند الرغبة في تغيير مسار في المستقبل، ستعدله في سطر واحد بملف الثوابت بدلاً من البحث عنه في 50 ملفاً مختلفاً."
        }
      ],
      bestPractices: [
        "أنشئ مجلداً باسم `src/routes` يحتوي على ملفات المسارات الفرعية وملف index.jsx المجمع.",
        "استخدم TypeScript لتعريف أنواع المعاملات والمسارات لضمان عدم تمرير معرفات غير صالحة."
      ],
      infographic: {
        title: "الهيكل المعماري للمسارات في المشاريع الكبيرة",
        elements: [
          { label: "constants/routes.js", role: "ثوابت المسارات لمنع الأخطاء الإملائية وتسهيل الصيانة", color: "blue" },
          { label: "modules/authRoutes", role: "عزل مسارات الدخول والتسجيل واستعادة كلمة المرور", color: "emerald" },
          { label: "modules/dashboardRoutes", role: "عزل مسارات الإدارة والتقارير والإعدادات", color: "purple" },
          { label: "routes/index.js", role: "المجمع المركزي الذي يبني شجرة createBrowserRouter", color: "amber" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q11.4.1",
      question: "ما الفائدة الكبرى من استخدام دوال الـ loaders في React Router مقارنة بـ useEffect التقليدي؟",
      options: [
        "تقوم الـ loaders بجلب البيانات بالتوازي مع تحميل كود الصفحة قبل بدء الرندر، مما يقضي على شلالات البيانات (Network Waterfalls).",
        "الـ loaders تقوم بتسريع معالج الحاسوب فيزيائياً.",
        "الـ loaders تحذف قاعدة البيانات تلقائياً بعد كل استدعاء.",
        "لا يوجد فرق بينهما وهما خياران متطابقان تماماً."
      ],
      correctAnswer: 0,
      explanation: "دوال الـ loaders تجلب البيانات أثناء الانتقال وقبل رندر المكون، مما يلغي وميض التحميل وشلالات البطء الشبكية."
    },
    {
      id: "q11.4.2",
      question: "ماذا يحدث تلقائياً في React Router بعد اكتمال تنفيذ دالة Action بنجاح؟",
      options: [
        "يقوم بإعادة تشغيل كافة الـ loaders النشطة في الصفحة لتحديث البيانات المعروضة تلقائياً (Revalidation).",
        "يقوم بإغلاق المتصفح تماماً.",
        "يقوم بمسح ملف package.json.",
        "يقوم بتسجيل خروج المستخدم إجبارياً."
      ],
      correctAnswer: 0,
      explanation: "آلية Automatic Revalidation الفطرية تضمن إعادة جلب البيانات الحديثة فوراً بعد أي تعديل ناجح لتبقى الواجهة متزامنة."
    },
    {
      id: "q11.4.3",
      question: "متى نفضل استخدام <fetcher.Form> بدلاً من <Form> العادي؟",
      options: [
        "عندما نريد إرسال بيانات وتعديل الخادم دون تغيير عنوان المسار الحالي للمتصفح (مثل أزرار الإعجاب والإشعارات).",
        "عندما نريد تحميل ملف PDF كبير.",
        "عندما نريد تغيير لغة المتصفح.",
        "fetcher.Form محظور في الإصدارات الحديثة ولا يجوز استخدامه."
      ],
      correctAnswer: 0,
      explanation: "المكون fetcher.Form مخصص للعمليات الموضعية التفاعلية التي لا تتطلب مغادرة الصفحة الحالية أو تعديل شريط الـ URL."
    }
  ],
  exercise: {
    id: "ex-11.4",
    title: "بناء نظام تدوين مصغر باستخدام Data Router و Loader و Action و ErrorBoundary",
    description: "قم بإنشاء تطبيق تدوين مصغر بمعمارية Data Router الحديثة يضم: 1) دالة postsLoader لجلب المقالات، 2) دالة createPostAction لاستقبال المنشورات الجديدة بـ Form، 3) مكون حدود أخطاء errorElement، و 4) شاشة مراقبة حالة الإرسال بـ useNavigation.",
    starterCode: `import React from 'react';
import { createBrowserRouter, RouterProvider, useLoaderData, Form, useNavigation, useRouteError } from 'react-router-dom';

// 1. اكتب postsLoader
// 2. اكتب createPostAction
// 3. اكتب BlogErrorBoundary
// 4. اكتب BlogView وشغل createBrowserRouter
`,
    hints: [
      "في postsLoader: جلب البيانات وإرجاعها كـ JSON.",
      "في createPostAction: قراءة const data = await request.formData() ثم استخراج data.get('title').",
      "في المكون: استخدم const posts = useLoaderData() و const nav = useNavigation()."
    ],
    solution: `import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
  Form,
  useNavigation,
  useRouteError,
} from 'react-router-dom';

// مصفوفة ذاكرة محلية تحاكي الخادم
let LOCAL_POSTS = [
  { id: 1, title: 'مقدمة إلى Data Routers في React', author: 'أحمد' },
  { id: 2, title: 'القضاء على شلالات البيانات بـ Loaders', author: 'سارة' },
];

// 1. دالة التحميل المسبق Loader
export async function postsLoader() {
  // محاكاة تأخير شبكي طفيف 300ms
  await new Promise((r) => setTimeout(r, 300));
  return [...LOCAL_POSTS];
}

// 2. دالة الإرسال Action
export async function createPostAction({ request }) {
  const formData = await request.formData();
  const title = formData.get('title');
  const author = formData.get('author');

  if (!title || !author) {
    throw new Error('جميع الحقول مطلوبة لإتمام النشر!');
  }

  const newPost = {
    id: Date.now(),
    title: title.toString(),
    author: author.toString(),
  };

  LOCAL_POSTS.unshift(newPost);
  return { success: true };
}

// 3. مكون حماية الأخطاء الموضعي ErrorBoundary
export function BlogErrorBoundary() {
  const error = useRouteError();
  return (
    <div className="p-4 bg-red-100 border border-red-300 text-red-800 rounded-xl text-xs">
      <strong>⚠️ تنبيه في المدونة:</strong> {error.message || 'حدث خطأ في جلب أو نشر التدوينة.'}
    </div>
  );
}

// 4. مكون الواجهة الرئيسي
export function ModernBlogView() {
  const posts = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-lg mx-auto text-white text-right space-y-6 font-sans">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800">
        <h3 className="font-black text-blue-400">المدونة الحديثة (Data Router Suite)</h3>
        {navigation.state !== 'idle' && (
          <span className="text-xs text-amber-400 animate-pulse">جاري المزامنة... ⏳</span>
        )}
      </div>

      {/* نموذج الإرسال المتصل بـ Action */}
      <Form method="post" className="space-y-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
        <h4 className="text-xs font-bold text-slate-300">أضف تدوينة جديدة (Form Action):</h4>
        <input
          name="title"
          placeholder="عنوان التدوينة..."
          className="w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none"
          required
        />
        <input
          name="author"
          placeholder="اسم الكاتب..."
          className="w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition disabled:opacity-50"
        >
          {isSubmitting ? 'جاري النشر...' : 'نشر التدوينة فوراً'}
        </button>
      </Form>

      {/* قائمة التدوينات المحقونة من Loader */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-400">التدوينات المنشورة ({posts.length}):</h4>
        {posts.map((post) => (
          <div key={post.id} className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60">
            <h5 className="font-bold text-sm text-slate-100">{post.title}</h5>
            <p className="text-[11px] text-slate-400 mt-1">الكاتب: {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 5. ربط المسار بمصفوفة createBrowserRouter
export const blogRouter = createBrowserRouter([
  {
    path: '/',
    element: <ModernBlogView />,
    loader: postsLoader,
    action: createPostAction,
    errorElement: <BlogErrorBoundary />,
  },
]);

export function App() {
  return <RouterProvider router={blogRouter} />;
}`
  },
  infographic: {
    title: "منظومة Data Router المتكاملة في React Router",
    description: "الهيكل المعماري الحديث للقضاء على الشلالات وتحقيق أقصى استقرار وأداء",
    steps: [
      { step: "1", title: "createBrowserRouter", desc: "تأسيس موجه البيانات وربط loaders و actions وشبكات الأمان" },
      { step: "2", title: "Parallel Loaders", desc: "جلب كافة البيانات بالتوازي مع تحميل الكود قبل بدء رندر الصفحة" },
      { step: "3", title: "Declarative Actions", desc: "معالجة نماذج <Form> تلقائياً وإعادة التحقق التلقائي للبيانات" },
      { step: "4", title: "Error Boundaries", desc: "عزل الأعطال الموضعية وحماية استقرار باقي أجزاء شجرة التطبيق" }
    ]
  }
};
