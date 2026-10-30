// src/data/sections/section19/topic4.js

export const topic4 = {
  id: "19.4",
  title: "محاكاة الشبكة والاختبارات المتكاملة (Network Mocking & Integration)",
  description: "الدليل المتقدم لمحاكاة اتصالات الشبكة واختبار التكامل في React؛ استخدام Mock Service Worker (MSW 2.0)، اعتراض طلبات REST API، فحص حالات التحميل والأخطاء، اختبار عمليات CRUD كاملة، اختبار التنقل عبر React Router، وتأكيد تدفقات المصادقة الحساسة.",
  subtopics: [
    {
      id: "19.4.a",
      title: "مقدمة إلى Mock Service Worker",
      englishTerm: "Mock Service Worker (MSW 2.0) (إم إس دبليو)",
      description: "المكتبة المعيارية رقم 1 في العالم لمحاكاة واجهات برمجة التطبيقات (API Mocking). تعمل MSW باعتراض طلبات الشبكة الصادرة على مستوى الشبكة نفسها (Network Level) باستخدام تقنية Service Worker في المتصفح أو تقنية Node Interceptor في بيئة الاختبارات، مما يسمح لكود التطبيق باستخدام دوال fetch أو axios الطبيعية 100% دون أن يدري بأن الشبكة محاكاة.",
      analogy: "يشبه برج مراقبة الاتصالات الذي يستقبل إشارات الراديو الصادرة من الطائرات ويرد عليها بأصوات مراقبي الطيران دون أن يغير أي سلك داخل قمرة قيادة الطائرة نفسها.",
      whyItMatters: "يلغي الحاجة لعمل Mock لدوال `fetch` أو `axios` يدوياً؛ مما يمنع الأخطاء الوهمية ويجعل كود اختباراتك مطابقاً لكود بيئة الإنتاج الحقيقية.",
      syntax: "// تعريف معالج اعتراض طلب GET في MSW v2:\nimport { http, HttpResponse } from 'msw';\nexport const handlers = [\n  http.get('/api/user', () => HttpResponse.json({ name: 'أحمد' }))\n];",
      simpleExample: `// استيراد أدوات MSW الحديثة (الإصدار 2.0)
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

// 1. تعريف معالجات الطلبات المحاكية (Request Handlers)
export const handlers = [
  // اعتراض طلب GET إلى مسار المستخدم
  http.get('https://api.example.com/user', () => {
    // إرجاع استجابة JSON وهمية مع كود نجاح 200
    return HttpResponse.json({
      id: 101,
      name: 'سارة المنصور',
      role: 'مطور واجهات'
    });
  })
];

// 2. إعداد خادم الاختبار الخاص بـ Node/Vitest
export const server = setupServer(...handlers);`,
      advancedExample: [
        "// إعداد دورة حياة MSW المتكاملة في ملف setup.js الخاص بـ Vitest لمنع تسريب الردود",
        "// src/test/setup.js",
        "import { beforeAll, afterEach, afterAll } from 'vitest';",
        "import { setupServer } from 'msw/node';",
        "import { http, HttpResponse } from 'msw';",
        "",
        "// تعريف المعالجات الافتراضية العامة",
        "export const defaultHandlers = [",
        "  http.get('/api/config', () => {",
        "    return HttpResponse.json({ environment: 'test', version: '2026.1' });",
        "  })",
        "];",
        "",
        "export const server = setupServer(...defaultHandlers);",
        "",
        "// 1. بدء تشغيل الخادم الوهمي قبل بدء كافة الاختبارات",
        "beforeAll(() => {",
        "  // onUnhandledRequest: 'error' لتنبيه المطور فوراً إذا تم إرسال طلب غير معالج في الـ Mock!",
        "  server.listen({ onUnhandledRequest: 'error' });",
        "});",
        "",
        "// 2. إعادة ضبط المعالجات بعد كل اختبار لإزالة أي Mock مؤقت تم تعريفه",
        "afterEach(() => {",
        "  server.resetHandlers();",
        "});",
        "",
        "// 3. إغلاق الخادم بالكامل بعد انتهاء كل ملفات الاختبار",
        "afterAll(() => {",
        "  server.close();",
        "});"
      ].join('\n'),
      output: "يقوم MSW باعتراض كافة طلبات الشبكة في صمت، ويرجع بيانات JSON المحددة بسرعة فائقة، ويمنع تماماً خروج أي اتصال شبكي حقيقي خارج جهاز المطور.",
      commonMistakes: "الاستمرار في استخدام توقيعات MSW 1.0 القديمة مثل: `rest.get(...)` و `res(ctx.json(...))`؛ تم تحديث المكتبة في MSW 2.0 لاستخدام معايير Fetch القياسية مثل `http.get(...)` و `HttpResponse.json(...)`.",
      bestPractices: "اضبط خيار `onUnhandledRequest: 'error'` دائماً؛ لكي يفشل الاختبار فوراً إذا حاول مكوّن استدعاء رابط API غير موجود في قائمة الـ Mock بدلاً من ترك الطلب معلقاً.",
      visualDiagram: "MSW Architecture:\nReact Component ──► Calls fetch('/api/users')\n                          │\n                          ▼ [Intercepted at Network Layer by MSW]\n             Matches http.get('/api/users') Handler\n                          │\n                          ▼\n             Returns fake HttpResponse.json(...) seamlessly! (0ms Network latency)"
    },
    {
      id: "19.4.b",
      title: "محاكاة طلبات API",
      englishTerm: "Mocking REST APIs with MSW (موكينغ إيه بي آي)",
      description: "بناء معالجات شاملة ومحاكية لكافة عمليات الـ REST API (GET, POST, PUT, DELETE, PATCH)؛ تشمل استخراج معلمات الرابط الديناميكية (URL Path Parameters مثل `:id`)، واستخراج معلمات البحث (Search Queries مثل `?page=2`)، وقراءة محتوى جسم الطلب المرسل (Request Body).",
      analogy: "يشبه محاكي الطيران التفاعلي للطيارين؛ يمكن لمدرب المحاكاة ضبط سرعة الرياح، أو إطفاء محرك وهمي، أو تشغيل عاصفة مطرية ليرى كيف سيتصرف الطيار بدقة تامة.",
      whyItMatters: "يمكنك من اختبار كافة سيناريوهات البيانات المعقدة التي يصعب تكرارها على السيرفر الحقيقي (مثل: حساب بنكي فارغ، أو سلة مشتريات تحتوي على 1000 صنف).",
      syntax: "http.get('/api/products/:id', ({ params }) => {\n  return HttpResponse.json({ id: params.id, title: 'منتج تجريبي' });\n});",
      simpleExample: `// استيراد معالجات MSW
import { http, HttpResponse } from 'msw';

export const productHandlers = [
  // معالج يستخرج المعرف من الرابط
  http.get('/api/products/:id', ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      id: Number(id),
      name: 'هاتف ذكي 2026',
      price: 2500
    });
  }),

  // معالج استقبال وإضافة منتج جديد عبر POST
  http.post('/api/products', async ({ request }) => {
    // قراءة البيانات المرسلة في جسم الطلب
    const newProduct = await request.json();
    return HttpResponse.json({ id: 999, ...newProduct }, { status: 201 });
  })
];`,
      advancedExample: [
        "// معالج API ذكي يحاكي التصفية والترقيم والبحث لقائمة موظفين في الذاكرة",
        "import { http, HttpResponse } from 'msw';",
        "",
        "// قاعدة بيانات وهمية في الذاكرة",
        "const dbEmployees = [",
        "  { id: 1, name: 'فهد السالم', department: 'الهندسة' },",
        "  { id: 2, name: 'نورة العلي', department: 'التصميم' },",
        "  { id: 3, name: 'ماجد الحربي', department: 'الهندسة' }",
        "];",
        "",
        "export const enterpriseHandlers = [",
        "  http.get('/api/employees', ({ request }) => {",
        "    const url = new URL(request.url);",
        "    // استخراج معلمات البحث من الرابط ?dept=الهندسة",
        "    const deptFilter = url.searchParams.get('dept');",
        "    ",
        "    let result = dbEmployees;",
        "    if (deptFilter) {",
        "      result = result.filter(e => e.department === deptFilter);",
        "    }",
        "    ",
        "    return HttpResponse.json({",
        "      data: result,",
        "      total: result.length",
        "    });",
        "  }),",
        "",
        "  http.delete('/api/employees/:id', ({ params }) => {",
        "    const id = Number(params.id);",
        "    const index = dbEmployees.findIndex(e => e.id === id);",
        "    if (index === -1) {",
        "      return new HttpResponse(null, { status: 404, statusText: 'Not Found' });",
        "    }",
        "    return HttpResponse.json({ success: true, deletedId: id });",
        "  })",
        "];"
      ].join('\n'),
      output: "يتعامل MSW مع الرابط كخادم مصغر متكامل؛ يقرأ معلمات الـ Query والـ Params ويعيد الاستجابات المناسبة مع رموز الحالة (Status Codes).",
      commonMistakes: "نسيان كتابة الرابط بنفس النطاق (Absolute vs Relative URL)؛ إذا كان كود React يستدعي `fetch('/api/users')`، فيجب أن يكون مسار MSW مطابقاً له `/api/users` ليعترضه بنجاح.",
      bestPractices: "نظم معالجات الـ Handlers في ملفات منفصلة بحسب الميزات (مثل: authHandlers.js, cartHandlers.js) واجمعها في مصفوفة موحدة في ملف `handlers.js`.",
      visualDiagram: "MSW Request Matching:\nIncoming: GET /api/employees?dept=الهندسة\n     │\n     ▼\nMatches: http.get('/api/employees', ({ request }) => ...)\n     │\n     └── Extracts searchParams.get('dept') ➔ Returns filtered JSON"
    },
    {
      id: "19.4.c",
      title: "اختبار حالات Loading",
      englishTerm: "Testing Loading States (تيستينغ لودينغ)",
      description: "التأكد من أن المكوّن يُظهر مؤشرات التحميل الصحيحة (مثل رسالة 'جاري التحميل...'، أو حركات الدوران Spinners، أو الهياكل الرمادية Skeletons) فور إرسال الطلب وقبل وصول الاستجابة، واختفاء هذه المؤشرات بسلاسة فور اكتمال جلب البيانات.",
      analogy: "يشبه الضغط على زر استدعاء المصعد؛ تتوقع أن يضيء زر المصعد فوراً ليخبرك أنه في طريقه إليك، ولا ترغب في البقاء أمام باب المصعد في حيرة دون معرفة هل استجاب أم لا.",
      whyItMatters: "حالة التحميل هي أول ما يراه المستخدم الحقيقي عند فتح أي شاشة؛ التأكد من ثباتها يمنع الشاشات الفارغة والارتباك البصري.",
      syntax: "server.use(\n  http.get('/api/data', async () => {\n    await delay(150); // تأخير متعمد\n    return HttpResponse.json({...});\n  })\n);",
      simpleExample: `// استيراد الأدوات
import React, { useState, useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

function UserList() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div role="status">جاري جلب قائمة المستخدمين...</div>;
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

test('ظهور مؤشر التحميل في البداية ثم اختفاؤه بعد وصول البيانات', async () => {
  render(<UserList />);

  // 1. التحقق الفوري من ظهور مؤشر التحميل في أول إطار
  expect(screen.getByRole('status')).toHaveTextContent('جاري جلب قائمة المستخدمين...');

  // 2. انتظار ظهور أول مستخدم بعد اكتمال المحاكاة
  const firstUser = await screen.findByText('سارة المنصور');
  expect(firstUser).toBeInTheDocument();

  // 3. التأكد التام من اختفاء مؤشر التحميل
  expect(screen.queryByRole('status')).toBeNull();
});`,
      advancedExample: [
        "// استخدام دالة delay('infinite') من MSW لتجميد حالة التحميل وفحص أزرار ومؤشرات الـ Spinner بدقة",
        "import React from 'react';",
        "import { render, screen } from '@testing-library/react';",
        "import { test, expect } from 'vitest';",
        "import { http, HttpResponse, delay } from 'msw';",
        "import { server } from '../test/setup';",
        "import { FeedComponent } from './FeedComponent';",
        "",
        "test('التحقق من بقاء هيكل التحميل (Skeleton) وتعطيل التفاعل أثناء انتظار استجابة السيرفر', async () => {",
        "  // تعديل مؤقت للمعالج لتأخير الاستجابة عمداً أو جعلها معلقة",
        "  server.use(",
        "    http.get('/api/feed', async () => {",
        "      // تأخير لمدة 200 مللي ثانية لاختبار حالة التحميل بأمان",
        "      await delay(200);",
        "      return HttpResponse.json([",
        "        { id: 1, title: 'خبر تقني حصري' }",
        "      ]);",
        "    })",
        "  );",
        "",
        "  render(<FeedComponent />);",
        "",
        "  // 1. التحقق من وجود الهيكل العظمي للتحميل (Skeleton Loader)",
        "  const skeleton = screen.getByTestId('feed-skeleton');",
        "  expect(skeleton).toBeInTheDocument();",
        "  expect(skeleton).toHaveClass('animate-pulse');",
        "",
        "  // 2. التحقق من أن زر التحديث معطل أثناء التحميل",
        "  const refreshBtn = screen.getByRole('button', { name: 'تحديث' });",
        "  expect(refreshBtn).toBeDisabled();",
        "",
        "  // 3. انتظار انتهاء التأخير وظهور الخبر الحقيقي",
        "  const postTitle = await screen.findByText('خبر تقني حصري');",
        "  expect(postTitle).toBeInTheDocument();",
        "  expect(refreshBtn).toBeEnabled();",
        "});"
      ].join('\n'),
      output: "يتم التحقق من دقة حالة التحميل وعناصر الـ Skeleton بدقة متناهية ودون تسرع في إنهاء الاختبار.",
      commonMistakes: "الاعتماد على افتراض أن البيانات ستصل فوراً واختبار النتيجة النهائية فقط؛ هذا يترك كود حالة التحميل غير مختبر (Zero coverage on loading branch)، وقد يسبب انهياراً للمستخدم الحقيقي إذا تأخر السيرفر لثوانٍ.",
      bestPractices: "استخدم `role=\"status\"` أو `aria-busy=\"true\"` على عناصر التحميل لتسهيل الوصول إليها برمجياً بـ getByRole واختبارها بكفاءة متوافقة مع معايير الوصول.",
      visualDiagram: "Loading State Lifecycle in Tests:\n1. render(<Component />) ──► Assert `screen.getByRole('status')` is visible\n2. Network finishes     ──► Assert `await screen.findByText(...)` appears\n3. Completion Assert    ──► Assert `screen.queryByRole('status')` is NULL"
    },
    {
      id: "19.4.d",
      title: "اختبار حالات Error",
      englishTerm: "Testing Error States & Resilience (تيستينغ إيرور ستيتس)",
      description: "التأكد من متانة وصلابة التطبيق عند حدوث أخطاء في الشبكة أو الخادم (مثل خطأ 500 Internal Server Error، أو 404 Not Found، أو انقطاع الاتصال Network Error)؛ والتحقق من عرض رسائل خطأ ودية للمستخدم بدلاً من الشاشات البيضاء، وتوفير زر 'إعادة المحاولة'.",
      analogy: "يشبه تدريب رواد الفضاء على محاكاة انقطاع الأكسجين أو عطل في نظام الملاحة؛ لمعرفة هل سيطلق النظام صفارة الإنذار المناسبة ويشغل النظام الاحتياطي أم سينهار دون سابق إنذار.",
      whyItMatters: "الخوادم وشبكات الإنترنت تسقط وتتعطل حتماً في العالم الحقيقي؛ التطبيق الاحترافي هو الذي يتعامل مع الأخطاء بأناقة ويقدم حلولاً للمستخدم.",
      syntax: "server.use(\n  http.get('/api/data', () => {\n    return new HttpResponse(null, { status: 500 });\n  })\n);",
      simpleExample: `// استيراد أدوات RTL و MSW
import React, { useState, useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { http, HttpResponse } from 'msw';
import { server } from '../test/setup';

function ProductListWithError() {
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then(r => {
        if (!r.ok) throw new Error('فشل جلب المنتجات');
        return r.json();
      })
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div role="alert">حدث خطأ: {error}</div>;
  return <div>عرض المنتجات</div>;
}

test('إظهار رسالة خطأ صريحة عند رد السيرفر بكود 500', async () => {
  // إعادة توجيه المعالج لإرجاع خطأ 500 لهذا الاختبار فقط
  server.use(
    http.get('/api/products', () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<ProductListWithError />);

  // انتظار ظهور التنبيه
  const alertEl = await screen.findByRole('alert');
  expect(alertEl).toHaveTextContent('حدث خطأ: فشل جلب المنتجات');
});`,
      advancedExample: [
        "// اختبار سيناريو انقطاع الشبكة الكامل (Network Error) واختبار زر إعادة المحاولة",
        "import React, { useState } from 'react';",
        "import { render, screen } from '@testing-library/react';",
        "import userEvent from '@testing-library/user-event';",
        "import { test, expect } from 'vitest';",
        "import { http, HttpResponse } from 'msw';",
        "import { server } from '../test/setup';",
        "",
        "function ResilientPaymentWidget() {",
        "  const [status, setStatus] = useState('idle');",
        "  const [errorMsg, setErrorMsg] = useState('');",
        "",
        "  const handlePay = async () => {",
        "    setStatus('loading');",
        "    setErrorMsg('');",
        "    try {",
        "      const res = await fetch('/api/pay', { method: 'POST' });",
        "      if (!res.ok) throw new Error('رفض البنك العملية');",
        "      setStatus('success');",
        "    } catch (e) {",
        "      setStatus('error');",
        "      setErrorMsg(e.message || 'انقطع الاتصال بالإنترنت');",
        "    }",
        "  };",
        "",
        "  return (",
        "    <div>",
        "      {status === 'error' && (",
        "        <div role='alert' className='text-rose-500'>",
        "          <span>{errorMsg}</span>",
        "          <button onClick={handlePay}>إعادة المحاولة</button>",
        "        </div>",
        "      )}",
        "      {status === 'success' && <p>تم الدفع بنجاح!</p>}",
        "      {status === 'idle' && <button onClick={handlePay}>دفع الآن</button>}",
        "      {status === 'loading' && <span>جاري معالجة الدفع...</span>}",
        "    </div>",
        "  );",
        "}",
        "",
        "test('التعامل مع خطأ الشبكة ثم نجاح الدفع بعد إعادة المحاولة', async () => {",
        "  const user = userEvent.setup();",
        "",
        "  // 1. المحاكاة الأولى: محاكاة خطأ شبكة حقيقي عبر HttpResponse.error()",
        "  server.use(",
        "    http.post('/api/pay', () => {",
        "      return HttpResponse.error(); // يحاكي انقطاع الإنترنت أو DNS failure",
        "    })",
        "  );",
        "",
        "  render(<ResilientPaymentWidget />);",
        "",
        "  // بدء الدفع الأولي",
        "  await user.click(screen.getByRole('button', { name: 'دفع الآن' }));",
        "",
        "  // التحقق من ظهور التنبيه مع زر إعادة المحاولة",
        "  const alertBox = await screen.findByRole('alert');",
        "  expect(alertBox).toBeInTheDocument();",
        "  const retryButton = screen.getByRole('button', { name: 'إعادة المحاولة' });",
        "  expect(retryButton).toBeInTheDocument();",
        "",
        "  // 2. المحاكاة الثانية: استعادة الشبكة والرد بنجاح",
        "  server.use(",
        "    http.post('/api/pay', () => {",
        "      return HttpResponse.json({ transactionId: 'tx_881' });",
        "    })",
        "  );",
        "",
        "  // النقر على إعادة المحاولة",
        "  await user.click(retryButton);",
        "",
        "  // التأكد من وصول رسالة النجاح واختفاء الخطأ",
        "  expect(await screen.findByText('تم الدفع بنجاح!')).toBeInTheDocument();",
        "  expect(screen.queryByRole('alert')).toBeNull();",
        "});"
      ].join('\n'),
      output: "يتم التأكد من قدرة التطبيق على استيعاب أخطاء الشبكة الصادمة دون تجمد الشاشة، واستعادة العمل بنجاح فور عودة الاتصال.",
      commonMistakes: "نسيان استخدام `server.resetHandlers()` في afterEach؛ إذا لم تقم بتنظيف معالج الخطأ، سيستمر خطأ 500 في الظهور في كافة الاختبارات اللاحقة مما يُفشلها بالكامل.",
      bestPractices: "استخدم `HttpResponse.error()` لمحاكاة فشل الشبكة وانقطاع الكيبل، واستخدم `new HttpResponse(null, { status: 400/500 })` لمحاكاة استجابات أخطاء السيرفر المنظمة.",
      visualDiagram: "Error Simulation Flow:\nserver.use(http.get(..., () => new HttpResponse(null, { status: 500 })))\n       │\n       ▼\nComponent triggers catch block ──► Renders `<div role=\"alert\">` ──► Displays retry button"
    },
    {
      id: "19.4.e",
      title: "اختبار عمليات CRUD",
      englishTerm: "Testing CRUD Operations (تيستينغ سي آر يو دي)",
      description: "اختبار دورة حياة إدارة البيانات الكاملة في الواجهة: الإنشاء (Create)، القراءة (Read)، التحديث (Update)، والحذف (Delete). يتم محاكاة قاعدة بيانات محلية في الذاكرة (In-memory array) داخل MSW والتحقق من تحديث الواجهة فورياً عند كل إجراء.",
      analogy: "يشبه تجربة سجل الأسماء في هاتفك الجديد؛ تضيف اسماً، تقرأه في القائمة، تعدل رقم هاتفه، ثم تحذفه، لتتأكد من أن السجل يعمل بكفاءة في كل خطوة.",
      whyItMatters: "عمليات CRUD تمثل 90% من وظائف تطبيقات الويب؛ اختبار تكاملها يضمن سلامة دورة حياة البيانات وتزامن الشاشة مع السيرفر.",
      syntax: "// محاكاة قاعدة بيانات في الذاكرة:\nlet items = [{ id: 1, name: 'صنف' }];\nhttp.delete('/api/items/:id', ({ params }) => { ... });",
      simpleExample: `// استيراد الأدوات
import { http, HttpResponse } from 'msw';

// مصفوفة تحاكي جدول قاعدة البيانات في الاختبار
let mockTodos = [
  { id: 1, text: 'شراء حليب' },
  { id: 2, text: 'مراجعة الكود' }
];

export const crudHandlers = [
  // Read
  http.get('/api/todos', () => HttpResponse.json(mockTodos)),

  // Create
  http.post('/api/todos', async ({ request }) => {
    const body = await request.json();
    const newTodo = { id: Date.now(), text: body.text };
    mockTodos.push(newTodo);
    return HttpResponse.json(newTodo, { status: 201 });
  }),

  // Delete
  http.delete('/api/todos/:id', ({ params }) => {
    mockTodos = mockTodos.filter(t => t.id !== Number(params.id));
    return HttpResponse.json({ success: true });
  })
];`,
      advancedExample: [
        "// اختبار تكامل CRUD كامل لمكوّن إدارة الملاحظات (Create, Read, Delete)",
        "import React, { useState, useEffect } from 'react';",
        "import { render, screen } from '@testing-library/react';",
        "import userEvent from '@testing-library/user-event';",
        "import { test, expect } from 'vitest';",
        "import { http, HttpResponse } from 'msw';",
        "import { server } from '../test/setup';",
        "",
        "function NotesManager() {",
        "  const [notes, setNotes] = useState([]);",
        "  const [title, setTitle] = useState('');",
        "",
        "  const load = () => fetch('/api/notes').then(r => r.json()).then(setNotes);",
        "  useEffect(() => { load(); }, []);",
        "",
        "  const handleAdd = async (e) => {",
        "    e.preventDefault();",
        "    if (!title) return;",
        "    await fetch('/api/notes', { method: 'POST', body: JSON.stringify({ title }) });",
        "    setTitle('');",
        "    load();",
        "  };",
        "",
        "  const handleDelete = async (id) => {",
        "    await fetch('/api/notes/' + id, { method: 'DELETE' });",
        "    load();",
        "  };",
        "",
        "  return (",
        "    <div>",
        "      <form onSubmit={handleAdd}>",
        "        <input aria-label='ملاحظة جديدة' value={title} onChange={e => setTitle(e.target.value)} />",
        "        <button type='submit'>إضافة</button>",
        "      </form>",
        "      <ul>",
        "        {notes.map(n => (",
        "          <li key={n.id}>",
        "            <span>{n.title}</span>",
        "            <button onClick={() => handleDelete(n.id)}>حذف {n.title}</button>",
        "          </li>",
        "        ))}",
        "      </ul>",
        "    </div>",
        "  );",
        "}",
        "",
        "test('دورة CRUD الكاملة: قراءة الملاحظات وإضافة ملاحظة جديدة ثم حذفها بنجاح', async () => {",
        "  const user = userEvent.setup();",
        "  let db = [{ id: 1, title: 'ملاحظة أولى' }];",
        "",
        "  server.use(",
        "    http.get('/api/notes', () => HttpResponse.json(db)),",
        "    http.post('/api/notes', async ({ request }) => {",
        "      const { title } = await request.json();",
        "      const item = { id: 2, title };",
        "      db.push(item);",
        "      return HttpResponse.json(item, { status: 201 });",
        "    }),",
        "    http.delete('/api/notes/:id', ({ params }) => {",
        "      db = db.filter(n => n.id !== Number(params.id));",
        "      return HttpResponse.json({ success: true });",
        "    })",
        "  );",
        "",
        "  render(<NotesManager />);",
        "",
        "  // 1. READ: التأكد من قراءة الملاحظة الأولى",
        "  expect(await screen.findByText('ملاحظة أولى')).toBeInTheDocument();",
        "",
        "  // 2. CREATE: كتابة ملاحظة جديدة وإرسالها",
        "  await user.type(screen.getByLabelText('ملاحظة جديدة'), 'ملاحظة ثانية');",
        "  await user.click(screen.getByRole('button', { name: 'إضافة' }));",
        "  expect(await screen.findByText('ملاحظة ثانية')).toBeInTheDocument();",
        "  expect(screen.getAllByRole('listitem')).toHaveLength(2);",
        "",
        "  // 3. DELETE: حذف الملاحظة الأولى",
        "  await user.click(screen.getByRole('button', { name: 'حذف ملاحظة أولى' }));",
        "  await screen.findByText('ملاحظة ثانية'); // انتظار استقرار القائمة",
        "  expect(screen.queryByText('ملاحظة أولى')).toBeNull();",
        "  expect(screen.getAllByRole('listitem')).toHaveLength(1);",
        "});"
      ].join('\n'),
      output: "يتم التحقق من تكامل دورة حياة البيانات بالكامل؛ الإضافة تظهر فوراً في الـ DOM، والحذف يزيل العنصر بدون أي خلل.",
      commonMistakes: "تعديل مصفوفة قاعدة البيانات الوهمية خارج نطاق الاختبار دون إعادة تهيئتها؛ مما يجعل التعديلات التي أجراها اختبار سابق تؤثر على الاختبار التالي. أعد تهيئة البيانات دائماً في `beforeEach`.",
      bestPractices: "استخدم معالجات CRUD محاكية للواقع تعيد رمز 201 عند الإنشاء و 204 أو 200 عند الحذف لضمان تطابق كامل مع بروتوكولات REST القياسية.",
      visualDiagram: "CRUD Test Flow:\n[Initial State: 1 Item] ──► POST New Item ──► [DOM Updates to 2 Items]\n                               │\n                               ▼\n                          DELETE Item ──► [DOM Updates to 1 Item]"
    },
    {
      id: "19.4.f",
      title: "اختبار React Router",
      englishTerm: "Testing React Router & Navigation (تيستينغ راوتر)",
      description: "منهجية اختبار مسارات التنقل والروابط وحماية الصفحات؛ استخدام `createMemoryRouter` أو `<MemoryRouter>` لتوفير بيئة توجيه تعمل بالكامل في الذاكرة دون الحاجة لمتصفح حقيقي، واختبار الانتقال بين الصفحات، وتمرير المعلمات الديناميكية (`useParams`) واستعلامات الـ URL.",
      analogy: "يشبه قيادة قطار على خطوط سكك حديدية مصغرة في غرفة المعرض؛ تتأكد من أن تحويل مفتاح السكة ينقل القطار إلى المسار الصحيح تماماً قبل بناء الخط الحديدي الفعلي في الجبال.",
      whyItMatters: "يحميك من الروابط المعطلة وظهور شاشات 404 للمستخدمين، ويتأكد من أن الانتقال البرمجي (navigate) يعمل كما ينبغي.",
      syntax: "import { createMemoryRouter, RouterProvider } from 'react-router-dom';\nconst router = createMemoryRouter(routes, { initialEntries: ['/products/123'] });\nrender(<RouterProvider router={router} />);",
      simpleExample: `// استيراد أدوات الملاحة
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';
import { test, expect } from 'vitest';

function NavigationApp() {
  return (
    <div>
      <nav>
        <Link to="/">الرئيسية</Link>
        <Link to="/about">من نحن</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>الصفحة الرئيسية</h1>} />
        <Route path="/about" element={<h1>عن المنصة</h1>} />
      </Routes>
    </div>
  );
}

test('التنقل بين الصفحات بنجاح عبر MemoryRouter', async () => {
  const user = userEvent.setup();
  // تغليف التطبيق بـ MemoryRouter وتحديد الصفحة الابتدائية
  render(
    <MemoryRouter initialEntries={['/']}>
      <NavigationApp />
    </MemoryRouter>
  );

  // التحقق من الصفحة الرئيسية في البداية
  expect(screen.getByRole('heading', { name: 'الصفحة الرئيسية' })).toBeInTheDocument();

  // النقر على رابط 'من نحن'
  await user.click(screen.getByRole('link', { name: 'من نحن' }));

  // التحقق من تغير العنوان وظهور صفحة 'عن المنصة'
  expect(screen.getByRole('heading', { name: 'عن المنصة' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'الصفحة الرئيسية' })).toBeNull();
});`,
      advancedExample: [
        "// اختبار استخراج معلمات الرابط useParams ومعالجة المسار غير الموجود (404 Not Found) عبر createMemoryRouter",
        "import React from 'react';",
        "import { render, screen } from '@testing-library/react';",
        "import { createMemoryRouter, RouterProvider, useParams } from 'react-router-dom';",
        "import { test, expect } from 'vitest';",
        "",
        "// مكون صفحة تفاصيل المنتج",
        "function ProductDetailView() {",
        "  const { productId } = useParams();",
        "  return <div>عرض تفاصيل المنتج رقم: {productId}</div>;",
        "}",
        "",
        "function NotFoundPage() {",
        "  return <h1 role='alert'>خطأ 404: الصفحة غير موجودة</h1>;",
        "}",
        "",
        "// تعريف المسارات المشتركة",
        "const routesConfig = [",
        "  { path: '/products/:productId', element: <ProductDetailView /> },",
        "  { path: '*', element: <NotFoundPage /> }",
        "];",
        "",
        "test('التحقق من تمرير وقراءة useParams بشكل صحيح من الرابط', () => {",
        "  // تشغيل الراوتر في الذاكرة مع إدخال رابط يحمل المعرف 8854",
        "  const router = createMemoryRouter(routesConfig, {",
        "    initialEntries: ['/products/8854']",
        "  });",
        "",
        "  render(<RouterProvider router={router} />);",
        "",
        "  expect(screen.getByText('عرض تفاصيل المنتج رقم: 8854')).toBeInTheDocument();",
        "});",
        "",
        "test('الانتقال التلقائي لصفحة 404 عند إدخال رابط غير معرف', () => {",
        "  const router = createMemoryRouter(routesConfig, {",
        "    initialEntries: ['/unknown-random-route']",
        "  });",
        "",
        "  render(<RouterProvider router={router} />);",
        "",
        "  expect(screen.getByRole('alert')).toHaveTextContent('خطأ 404: الصفحة غير موجودة');",
        "});"
      ].join('\n'),
      output: "يتم محاكاة التوجيه وتغير المسارات بالكامل في الذاكرة دون فتح نافذة متصفح، مع اختبار دقيق لـ useParams و 404 routes.",
      commonMistakes: "استخدام `<BrowserRouter>` في الاختبارات؛ سيعتمد على `window.location` الخاص بالمتصفح الحقيقي ويتعارض مع بيئة jsdom. استخدم دائماً `<MemoryRouter>` أو `createMemoryRouter` في بيئة الاختبار.",
      bestPractices: "استخدم `createMemoryRouter` مع مصفوفة `initialEntries` لاختبار أي مسار معقد بضغطة زر واحدة دون الحاجة للنقر على روابط متتالية للوصول إليه.",
      visualDiagram: "MemoryRouter Testing Flow:\ncreateMemoryRouter(routes, { initialEntries: ['/checkout?coupon=SAVE20'] })\n       │\n       ▼\nMounts Component directly at `/checkout` URL context without manual clicks!"
    },
    {
      id: "19.4.g",
      title: "اختبار تدفقات المصادقة",
      englishTerm: "Testing Authentication Flows (تيستينغ أوث فلو)",
      description: "اختبار التدفق الأمني الأكثر حساسية في التطبيق؛ ويشمل: فحص حماية المسارات (Protected Routes)، وإعادة توجيه المستخدم غير المسجل إلى صفحة تسجيل الدخول (`/login`)، والتحقق من تخزين الرمز المميز (Token)، وظهور بيانات الحساب بعد تسجيل الدخول بنجاح، والتعامل مع انتهاء الجلسة (401).",
      analogy: "يشبه اختبار بطاقات المفاتيح الإلكترونية في الفندق؛ تتأكد من أن الباب لا يفتح أبداً بالبطاقة القديمة، ويفتح فوراً بالبطاقة الجديدة، ويغلق تلقائياً بمجرد انتهاء فترة الحجز.",
      whyItMatters: "حماية بيانات المستخدمين ومنع التسريبات الأمنية؛ أي خلل في مسار المصادقة قد يسمح للمتسللين بالوصول لصفحات المشرفين أو يعطل حسابات العملاء.",
      syntax: "// اختبار تحويل المستخدم غير المسجل تلقائياً:\nexpect(screen.getByRole('heading', { name: 'تسجيل الدخول' })).toBeInTheDocument();",
      simpleExample: `// استيراد الأدوات
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import { test, expect } from 'vitest';

// مكوّن حماية المسار
function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) return <Navigate to="/login" replace />;
  return children;
}

test('إعادة توجيه الزائر غير المسجل من المسار المحمي إلى صفحة الدخول', () => {
  render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <Routes>
        <Route path="/login" element={<h1>صفحة تسجيل الدخول</h1>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuth={false}>
              <h1>لوحة التحكم السرية</h1>
            </ProtectedRoute>
          }
        />
      </Routes>
    </MemoryRouter>
  );

  // يجب ألا تظهر لوحة التحكم نهائياً
  expect(screen.queryByText('لوحة التحكم السرية')).toBeNull();
  // يجب أن يتم التوجيه لصفحة تسجيل الدخول
  expect(screen.getByRole('heading', { name: 'صفحة تسجيل الدخول' })).toBeInTheDocument();
});`,
      advancedExample: [
        "// اختبار تدفق مصادقة حقيقي متكامل مع MSW؛ إرسال بيانات الدخول، استلام التوكن، وظهور لوحة التحكم",
        "import React, { useState } from 'react';",
        "import { render, screen } from '@testing-library/react';",
        "import userEvent from '@testing-library/user-event';",
        "import { test, expect } from 'vitest';",
        "import { http, HttpResponse } from 'msw';",
        "import { server } from '../test/setup';",
        "",
        "function AuthFlowApp() {",
        "  const [user, setUser] = useState(null);",
        "  const [email, setEmail] = useState('');",
        "  const [password, setPassword] = useState('');",
        "  const [error, setError] = useState('');",
        "",
        "  const handleLogin = async (e) => {",
        "    e.preventDefault();",
        "    setError('');",
        "    const res = await fetch('/api/auth/login', {",
        "      method: 'POST',",
        "      body: JSON.stringify({ email, password })",
        "    });",
        "    if (res.ok) {",
        "      const data = await res.json();",
        "      setUser(data.user);",
        "    } else {",
        "      setError('بيانات الدخول غير صحيحة');",
        "    }",
        "  };",
        "",
        "  if (user) {",
        "    return (",
        "      <div>",
        "        <h2>مرحباً بك، {user.name}</h2>",
        "        <p>صلاحيتك: {user.role}</p>",
        "      </div>",
        "    );",
        "  }",
        "",
        "  return (",
        "    <form onSubmit={handleLogin}>",
        "      {error && <p role='alert'>{error}</p>}",
        "      <label htmlFor='em'>البريد:</label>",
        "      <input id='em' value={email} onChange={e => setEmail(e.target.value)} />",
        "      <label htmlFor='pw'>كلمة المرور:</label>",
        "      <input id='pw' type='password' value={password} onChange={e => setPassword(e.target.value)} />",
        "      <button type='submit'>دخول</button>",
        "    </form>",
        "  );",
        "}",
        "",
        "test('اختبار تدفق المصادقة الكامل مع السيرفر المحاكي: رفض ثم قبول', async () => {",
        "  const user = userEvent.setup();",
        "",
        "  // إعداد معالج المصادقة الذكي",
        "  server.use(",
        "    http.post('/api/auth/login', async ({ request }) => {",
        "      const { email, password } = await request.json();",
        "      if (email === 'admin@test.com' && password === 'secret123') {",
        "        return HttpResponse.json({",
        "          token: 'jwt-token-991',",
        "          user: { name: 'المهندس رامي', role: 'ADMIN' }",
        "        });",
        "      }",
        "      return new HttpResponse(null, { status: 401 });",
        "    })",
        "  );",
        "",
        "  render(<AuthFlowApp />);",
        "",
        "  // 1. محاولة إدخال كلمة مرور خاطئة",
        "  await user.type(screen.getByLabelText('البريد:'), 'admin@test.com');",
        "  await user.type(screen.getByLabelText('كلمة المرور:'), 'wrong-password');",
        "  await user.click(screen.getByRole('button', { name: 'دخول' }));",
        "",
        "  // التحقق من ظهور رسالة الرفض",
        "  expect(await screen.findByRole('alert')).toHaveTextContent('بيانات الدخول غير صحيحة');",
        "",
        "  // 2. إدخال كلمة المرور الصحيحة",
        "  const pwInput = screen.getByLabelText('كلمة المرور:');",
        "  await user.clear(pwInput);",
        "  await user.type(pwInput, 'secret123');",
        "  await user.click(screen.getByRole('button', { name: 'دخول' }));",
        "",
        "  // 3. التحقق من اختفاء النموذج وظهور لوحة الإدارة للمستخدم",
        "  expect(await screen.findByText('مرحباً بك، المهندس رامي')).toBeInTheDocument();",
        "  expect(screen.getByText('صلاحيتك: ADMIN')).toBeInTheDocument();",
        "});"
      ].join('\n'),
      output: "يتم محاكاة تدفق أمني حقيقي بالكامل؛ رفض أولي برمز 401، ثم إرسال بيانات صحيحة والتحقق من فتح اللوحة بصلاحيات المشرف.",
      commonMistakes: "تخزين كلمات المرور كنصوص صريحة في كود الاختبار؛ استخدم دائماً قيم اعتماديات تجريبية وهمية (مثل `admin@test.com` و `secret123`) ولا تستخدم أي بيانات سرية حقيقية في ملفات الاختبار.",
      bestPractices: "اختبر حالات الحافة الأمنية دائماً: انتهاء صلاحية الرمز المميز (Expired Token)، وتغيير الصلاحيات أثناء الجلسة، والتحقق من إعادة التوجيه للرابط المقصود عبر state: { from: location }.",
      visualDiagram: "Auth Testing Flow:\nUnauthenticated ──► Protected Route ──► Redirects to `/login`\n                                            │\n                                            ▼ [User Submits Valid Credentials]\nSets Auth Token ──► Redirects back to Target Page ──► Protected UI Rendered!"
    }
  ],
  quizzes: [
    {
      id: "q19.4.1",
      question: "ما الميزة الكبرى لاستخدام Mock Service Worker (MSW) مقارنة بعمل mock لدالة fetch يدوياً؟",
      options: [
        "أن MSW يعمل على تسريع الإنترنت في المنزل.",
        "أن MSW يعترض الطلبات على مستوى الشبكة الحقيقي (Network Level)، مما يسمح لكود التطبيق باستخدام fetch أو axios بشكل طبيعي 100% دون أي تغيير في الكود المصدري.",
        "أن MSW يلغي الحاجة لكتابة كود HTML.",
        "أن MSW يكتب الاختبارات آلياً بدلاً من المطور."
      ],
      correctAnswer: 1,
      explanation: "الاعتراض على مستوى الشبكة يمنحك أعلى درجات المصداقية؛ لأنك تختبر كود الـ API والتحويلات الحقيقية في تطبيقك بدلاً من استبدال دالة fetch بدالة وهمية."
    },
    {
      id: "q19.4.2",
      question: "كيف تختبر سيناريو انقطاع الإنترنت أو فشل الـ DNS في MSW 2.0؟",
      options: [
        "فصل كابل الإنترنت من جهاز الكمبيوتر أثناء الاختبار.",
        "استخدام HttpResponse.error() داخل معالج الـ Mock ليرمي خطأ شبكة حقيقي.",
        "إرجاع كود 200 مع نص فارغ.",
        "حذف مكتبة vitest من المشروع."
      ],
      correctAnswer: 1,
      explanation: "توفر دالة `HttpResponse.error()` في MSW 2.0 محاكاة فورية لخطأ الشبكة (Network Error / TypeError: Failed to fetch) دون الحاجة لفصل الإنترنت الحقيقي."
    },
    {
      id: "q19.4.3",
      question: "لماذا يجب استخدام MemoryRouter بدلاً من BrowserRouter عند اختبار مكونات React Router؟",
      options: [
        "لأن MemoryRouter يدعم الوضع الليلي.",
        "لأن MemoryRouter يدير سجل التنقل والمسارات بالكامل داخل الذاكرة (In-memory) دون الاعتماد على متصفح حقيقي، ويسمح بتحديد مسار البداية initialEntries بحرية.",
        "لأن BrowserRouter تم إيقاف دعمه رسمياً.",
        "لأن MemoryRouter يحفظ البيانات في قاعدة بيانات سحابية."
      ],
      correctAnswer: 1,
      explanation: "بيئة الاختبار (jsdom) لا تمتلك متصفحاً حقيقياً بشريط عنوان URL مستقل، ولذلك يوفر MemoryRouter مسارات منعزلة وقابلة للتحكم التام داخل كل اختبار."
    }
  ],
  exercise: {
    title: "تمرين عملي: اختبار مكوّن جلب منشورات مع حالة الخطأ وإعادة المحاولة",
    description: "قم ببناء مكوّن PostFeed يقوم بجلب المنشورات من /api/posts. اكتب اختبارين باستخدام Vitest و MSW و RTL: الأول يتحقق من ظهور المنشور عند النجاح، والثاني يتحقق من ظهور رسالة 'تعذر تحميل المنشورات' عند رد السيرفر بكود 500.",
    hints: [
      "استخدم server.use داخل الاختبار الثاني لإرجاع new HttpResponse(null, { status: 500 }).",
      "استخدم await screen.findByText لانتظار ظهور العنوان في اختبار النجاح.",
      "استخدم await screen.findByRole('alert') في اختبار الفشل."
    ],
    solution: `import React, { useState, useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { http, HttpResponse } from 'msw';
import { server } from '../test/setup';

// المكون
function PostFeed() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/posts')
      .then(r => {
        if (!r.ok) throw new Error('fail');
        return r.json();
      })
      .then(setPosts)
      .catch(() => setError(true));
  }, []);

  if (error) return <p role="alert">تعذر تحميل المنشورات</p>;
  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}

// 1. اختبار النجاح
test('ظهور المنشور بنجاح عند استجابة السيرفر السليمة', async () => {
  server.use(
    http.get('/api/posts', () => {
      return HttpResponse.json([{ id: 1, title: 'مقال برمجي مميز' }]);
    })
  );

  render(<PostFeed />);
  expect(await screen.findByText('مقال برمجي مميز')).toBeInTheDocument();
});

// 2. اختبار الفشل
test('ظهور رسالة الخطأ التنبيهية عند رد السيرفر بخطأ 500', async () => {
  server.use(
    http.get('/api/posts', () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<PostFeed />);
  const alert = await screen.findByRole('alert');
  expect(alert).toHaveTextContent('تعذر تحميل المنشورات');
});`
  },
  infographic: {
    title: "منظومة محاكاة الشبكة والاختبارات المتكاملة",
    subtitle: "الدليل الشامل لمحاكاة واجهات REST والمسارات والمصادقة في React",
    steps: [
      { step: "1", title: "اعتراض MSW 2.0", desc: "اعتراض الطلبات على مستوى الشبكة بدوال http.get و HttpResponse بدون لمس الكود المصدري." },
      { step: "2", title: "اختبار دورات CRUD", desc: "محاكاة قواعد بيانات كاملة في الذاكرة لفحص الإضافة والتعديل والحذف وتزامن الواجهة." },
      { step: "3", title: "محاكاة الأعطال والشبكة", desc: "فحص متانة التطبيق ضد أخطاء 500 وانقطاع الإنترنت بـ HttpResponse.error()." },
      { step: "4", title: "MemoryRouter & Auth", desc: "محاكاة التنقل وحماية المسارات وقراءة معلمات الرابط في الذاكرة دون فتح متصفح." }
    ]
  }
};
