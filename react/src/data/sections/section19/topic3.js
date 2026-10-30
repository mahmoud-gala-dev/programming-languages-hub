// src/data/sections/section19/topic3.js

export const topic3 = {
  id: "19.3",
  title: "React Testing Library (RTL)",
  description: "المرجع الشامل لمكتبة React Testing Library؛ الفلسفة الذهبية لاختبار المكونات كما يراها ويستخدمها العميل، تقنيات العرض render، استعلامات getByRole والأولويات، محاكاة أحداث المستخدم عبر user-event، اختبار النماذج، اختبار التحديثات غير المتزامنة بـ waitFor، واختبار الخطافات المخصصة ومكونات Context.",
  subtopics: [
    {
      id: "19.3.a",
      title: "مقدمة إلى React Testing Library",
      englishTerm: "Introduction to React Testing Library (RTL) (آر تي إل)",
      description: "المكتبة القياسية والرسمية الموصى بها من فريق React لاختبار مكونات الواجهة. ترتكز فلسفتها على مبدأ ذهبي صاغه منشئها كينت سي دودز: 'كلما شابهت اختباراتك طريقة استخدام تطبيقك الحقيقية، كلما منحتك ثقة أكبر'. تشجع على اختبار ما يراه المستخدم على الشاشة (النصوص، الأزرار، الحقول) بدلاً من اختبار تفاصيل التنفيذ الداخلي (مثل أسماء الـ State أو الدوال الداخلية).",
      analogy: "يشبه مفتش قيادة السيارات الذي يجلس بجانبك في السيارة؛ لا يهمه ما نوع رقاقة الكمبيوتر التي تدير حقن الوقود داخل المحرك، ما يهمه فقط هو: عندما تضغط على الفرامل، هل تتوقف السيارة بأمان وسلاسة؟",
      whyItMatters: "تجعل اختباراتك مرنة وقوية ضد الكسر (Refactor-resilient)؛ يمكنك إعادة كتابة المكون بالكامل من useState إلى useReducer أو تغيير أسماء المتغيرات الداخلية ولن يفشل الاختبار طالما أن سلوك الشاشة للمستخدم لم يتغير.",
      syntax: "// القاعدة الذهبية:\n// The more your tests resemble the way your software is used,\n// the more confidence they can give you.",
      simpleExample: `// استيراد أدوات RTL الأساسية
import { render, screen } from '@testing-library/react';
import React from 'react';

// مكوّن بسيط
function WelcomeBadge({ name }) {
  return <div className="badge">أهلاً بك، {name}!</div>;
}

// اختبار يركز على ما يراه المستخدم بدلاً من التركيز على الكود الداخلي
export function runSimpleBadgeTest() {
  // 1. عرض المكون في الـ DOM الوهمي
  render(<WelcomeBadge name="عمر" />);

  // 2. البحث عن النص الذي يراه المستخدم على الشاشة
  const textElement = screen.getByText('أهلاً بك، عمر!');

  // 3. التحقق من وجود العنصر في الوثيقة
  console.assert(textElement !== null, 'فشل العثور على رسالة الترحيب');
  console.log('✅ نجح اختبار مكوّن الترحيب بأسلوب RTL!');
}`,
      advancedExample: [
        "// مقارنة بين الطريقة القديمة الخاطئة (اختبار تفاصيل التنفيذ) وطريقة RTL الصحيحة (اختبار السلوك)",
        "import React, { useState } from 'react';",
        "import { render, screen } from '@testing-library/react';",
        "import userEvent from '@testing-library/user-event';",
        "import { test, expect } from 'vitest';",
        "",
        "// مكوّن العداد التفاعلي",
        "function InteractiveCounter() {",
        "  // تفصيل داخلي: اسم الحالة count",
        "  const [count, setCount] = useState(0);",
        "",
        "  return (",
        "    <div>",
        "      <p aria-label='قيمة العداد الحالية'>القيمة: {count}</p>",
        "      <button onClick={() => setCount(c => c + 1)}>زيادة</button>",
        "    </div>",
        "  );",
        "}",
        "",
        "// ❌ الطريقة القديمة المعيبة (تختبر الحالة الداخلية وتتكسر عند إعادة التسمية):",
        "// expect(wrapper.state('count')).toBe(1);",
        "",
        "// ✅ أسلوب React Testing Library الحديث (يختبر ما يراه المستخدم وما يفعله):",
        "test('زيادة القيمة المعروضة للمستخدم عند النقر على زر الزيادة', async () => {",
        "  // تجهيز محاكي أحداث المستخدم",
        "  const user = userEvent.setup();",
        "  ",
        "  // 1. رندر المكون",
        "  render(<InteractiveCounter />);",
        "",
        "  // 2. التأكد من القيمة الابتدائية التي يراها المستخدم",
        "  expect(screen.getByText('القيمة: 0')).toBeInTheDocument();",
        "",
        "  // 3. محاكاة نقر المستخدم على الزر كما يفعل في الحقيقة",
        "  const incrementBtn = screen.getByRole('button', { name: 'زيادة' });",
        "  await user.click(incrementBtn);",
        "",
        "  // 4. التحقق من النتيجة البصرية المعروضة على الشاشة",
        "  expect(screen.getByText('القيمة: 1')).toBeInTheDocument();",
        "});"
      ].join('\n'),
      output: "يتم اختبار التفاعل من منظور المستخدم: يرى الزر، ينقر عليه، فتتغير القيمة المعروضة، مما يمنح ثقة كاملة في تجربة الاستخدام.",
      commonMistakes: "محاولة الوصول للحالة الداخلية للمكون أو استدعاء الدوال الداخلية مباشرة من الاختبار؛ هذا يربط الاختبار بطريقة كتابة الكود بدلاً من سلوكه، مما يؤدي لفشل الاختبار عند أي إعادة هيكلة برمجية بسيطة.",
      bestPractices: "فكر كالمستخدم؛ المستخدم لا يعرف ما هي State أو Props، هو يبحث عن زر بالاسم الظاهر عليه، وينقر عليه، وينتظر ظهور رسالة معينة.",
      visualDiagram: "Testing Approaches:\nShallow/Implementation Testing: [Checks component.state.count === 1] (Brittle! ⚠️)\nReact Testing Library:          [User clicks button ➔ Screen shows '1'] (Resilient! ⚡)"
    },
    {
      id: "19.3.b",
      title: "عرض المكونات داخل الاختبارات",
      englishTerm: "Rendering Components in Tests (ريندرينغ كومبوننتس)",
      description: "دالة `render()` المستوردة من `@testing-library/react` هي نقطة الانطلاق لكل اختبار واجهة؛ تقوم بتركيب مكوّن React وعرضه داخل شجرة DOM وهمية (jsdom)، وتوفر كائن `screen` للوصول لكافة عناصره، بالإضافة إلى دعم خيارات التغليف المخصصة (Custom Wrapper) لتمرير الـ Providers مثل Theme أو Router.",
      analogy: "يشبه تشغيل جهاز العرض (البروجكتور) وتسليط شاشته على الجدار؛ حيث تظهر الصورة كاملة بألوانها وعناصرها لتتمكن من فحص كل تفصيلة فيها.",
      whyItMatters: "تتولى إدارة دورة حياة المكون بالكامل أثناء الاختبار، وتقوم بتشغيل التأثيرات الجانبية (useEffect) بدقة كما تحدث في المتصفح الحقيقي.",
      syntax: "import { render, screen } from '@testing-library/react';\nrender(<MyComponent prop=\"value\" />);",
      simpleExample: `// استيراد أدوات الرندر
import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

function AlertBox({ message, type = 'info' }) {
  return (
    <div role="alert" className={'alert alert-' + type}>
      {message}
    </div>
  );
}

test('عرض صندوق التنبيه برسالة محددة ودور alert', () => {
  // رندر المكون داخل بيئة الاختبار
  render(<AlertBox message="تم حفظ التغييرات بنجاح" type="success" />);

  // فحص وجود عنصر التنبيه
  const alertEl = screen.getByRole('alert');
  expect(alertEl).toBeInTheDocument();
  expect(alertEl).toHaveTextContent('تم حفظ التغييرات بنجاح');
});`,
      advancedExample: [
        "// دالة رندر مخصصة (Custom Render) تغلف المكونات بكافة الموفرات (Providers) لإعادة الاستخدام",
        "import React from 'react';",
        "import { render } from '@testing-library/react';",
        "import { BrowserRouter } from 'react-router-dom';",
        "",
        "// موفر سياق تجريبي للمظهر واللغة",
        "const ThemeContext = React.createContext({ theme: 'dark', lang: 'ar' });",
        "",
        "// الغلاف العام المشترك لكل الاختبارات",
        "function AllTheProviders({ children }) {",
        "  return (",
        "    <BrowserRouter>",
        "      <ThemeContext.Provider value={{ theme: 'dark', lang: 'ar' }}>",
        "        {children}",
        "      </ThemeContext.Provider>",
        "    </BrowserRouter>",
        "  );",
        "}",
        "",
        "// دالة الرندر المخصصة الموصى بها رسمياً",
        "export function customRender(ui, options) {",
        "  return render(ui, { wrapper: AllTheProviders, ...options });",
        "}",
        "",
        "// إعادة تصدير كل شيء من RTL مع استبدال دالة render",
        "export * from '@testing-library/react';",
        "export { customRender as render };"
      ].join('\n'),
      output: "توفر دالة customRender القدرة على اختبار أي مكوّن يعتمد على التوجيه (Router) أو السياق (Context) دون الحاجة لتكرار أكواد التغليف في كل ملف اختبار.",
      commonMistakes: "استخراج دوال البحث من ناتج دالة render مثل: const { getByText } = render(...)؛ الطريقة القياسية والحديثة هي استخدام كائن `screen.getByText` العام دائماً لسهولة القراءة ودعم الإكمال التلقائي.",
      bestPractices: "قم بإنشاء ملف `test-utils.jsx` يجمع الـ Providers العامة وصدر منه دالة render مخصصة لتبسيط كافة اختبارات التطبيق.",
      visualDiagram: "RTL Render Pipeline:\n<ComponentUnderTest />\n       │\n       ▼\ncustomRender (Wraps with Router, Theme, QueryClient)\n       │\n       ▼\nVirtual DOM mounted in jsdom ──► Available via `screen` query object"
    },
    {
      id: "19.3.c",
      title: "البحث باستخدام getByRole",
      englishTerm: "Querying with getByRole (غيت باي رول)",
      description: "الاستعلام رقم 1 والأعلى أولوية في React Testing Library على الإطلاق. يبحث عن عناصر الصفحة اعتماداً على دورها الدلالي ومواصفات إمكانية الوصول (ARIA Role) واسمها البصري (Accessible Name) مثل: getByRole('button', { name: 'حفظ' }) أو getByRole('heading', { level: 2 }).",
      analogy: "يشبه طلب النادل في المطعم؛ لا تطلب منه 'الرجل الذي يرتدي قميصاً أحمر وموجود بجانب العمود الرابع'، بل تطلب 'المدير' أو 'الكاشير' بدوره الوظيفي الصريح.",
      whyItMatters: "يحقق فائدتين عظيمتين في آن واحد: 1) يختبر صحة منطق المكون، 2) يضمن أن تطبيقك متوافق مع قارئات الشاشة (Screen Readers) وذوي الاحتياجات الخاصة (Accessibility a11y).",
      syntax: "screen.getByRole('button', { name: /تأكيد الطلب/i });\nscreen.getByRole('heading', { level: 1, name: 'العنوان الرئيسي' });",
      simpleExample: `// استيراد React وأدوات الفحص
import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

function RegistrationHeader() {
  return (
    <header>
      <h1>إنشاء حساب جديد</h1>
      <button type="submit">تسجيل</button>
    </header>
  );
}

test('البحث عن الترويسة والزر باستخدام getByRole', () => {
  render(<RegistrationHeader />);

  // البحث عن العنوان الرئيسي بالدور والمستوى والاسم
  const heading = screen.getByRole('heading', { level: 1, name: 'إنشاء حساب جديد' });
  expect(heading).toBeInTheDocument();

  // البحث عن الزر بالاسم الصريح المكتوب عليه
  const button = screen.getByRole('button', { name: 'تسجيل' });
  expect(button).toBeInTheDocument();
});`,
      advancedExample: [
        "// استخدام getByRole لفحص واجهات معقدة تضم عناصر تحكم متباينة وحالات محددة (Checked, Disabled, Expanded)",
        "import React, { useState } from 'react';",
        "import { render, screen } from '@testing-library/react';",
        "import { test, expect } from 'vitest';",
        "",
        "function FilterPanel() {",
        "  const [inStockOnly, setInStockOnly] = useState(true);",
        "",
        "  return (",
        "    <section aria-label='فلترة المنتجات'>",
        "      <h2>خيارات التصفية</h2>",
        "      <label>",
        "        <input",
        "          type='checkbox'",
        "          checked={inStockOnly}",
        "          onChange={e => setInStockOnly(e.target.checked)}",
        "        />",
        "        المنتجات المتوفرة في المخزن فقط",
        "      </label>",
        "      <button disabled aria-disabled='true'>تطبيق الفلاتر</button>",
        "    </section>",
        "  );",
        "}",
        "",
        "test('فحص خيارات التصفية المعقدة بأدوار ARIA المتقدمة', () => {",
        "  render(<FilterPanel />);",
        "",
        "  // 1. البحث عن صندوق الاختيار والتحقق من أنه محدد (checked: true)",
        "  const checkbox = screen.getByRole('checkbox', { ",
        "    name: 'المنتجات المتوفرة في المخزن فقط',",
        "    checked: true ",
        "  });",
        "  expect(checkbox).toBeInTheDocument();",
        "",
        "  // 2. البحث عن زر معطل بالاسم والحالة",
        "  const disabledBtn = screen.getByRole('button', {",
        "    name: 'تطبيق الفلاتر',",
        "    disabled: true",
        "  });",
        "  expect(disabledBtn).toBeDisabled();",
        "",
        "  // 3. البحث عن قسم يحمل اسماً دلالياً (region)",
        "  const region = screen.getByRole('region', { name: 'فلترة المنتجات' });",
        "  expect(region).toBeInTheDocument();",
        "});"
      ].join('\n'),
      output: "يقوم getByRole بفحص عناصر الـ DOM بالمعايير الدلالية الدولية؛ فإذا فشل في العثور على الدور، يطبع دليلاً رائعاً لكافة الأدوار المتاحة في الشاشة لمساعدتك.",
      commonMistakes: "اللجوء إلى getByTestId أو البحث بفئات CSS (مثل container.querySelector('.btn-primary'))؛ هذا يجعل الاختبار هشاً ويتكسر عند تعديل التصميم، ولا يفيد إمكانية الوصول.",
      bestPractices: "اجعل `getByRole` خيارك الأول دائماً بنسبة 80% من استعلاماتك؛ وإذا لم تجد دوراً مناسباً فاستخدم `getByLabelText` لحقول النماذج ثم `getByText` للنصوص العادية.",
      visualDiagram: "RTL Query Priority Order:\n1. 🥇 getByRole        (Best for Accessibility & Resilient Behavior)\n2. 🥈 getByLabelText   (Best for Form Inputs)\n3. 🥉 getByText        (Best for Non-interactive text & paragraphs)\n4. 🚫 getByTestId      (Last Resort only when no visible text exists!)"
    },
    {
      id: "19.3.d",
      title: "استخدام Query APIs",
      englishTerm: "Query Types (get vs query vs find) (كويري إيه بي آيز)",
      description: "المصفوفة الثلاثية للاستعلامات في React Testing Library؛ لفهم الفروق الحاسمة بين: `getBy...` (يرمي خطأ فورياً إذا لم يجد العنصر)، و `queryBy...` (يعيد `null` إذا لم يجد العنصر وهو مثالي لنفي الوجود `toBeNull()`)، و `findBy...` (يعيد Promise وينتظر ظهور العنصر غير المتزامن لمدة تصل لـ 1000ms).",
      analogy: "يشبه سؤال موظف الاستقبال: `getBy` مثل صراخك 'أين جواز سفري؟!' فإذا لم يجده يتوقف العالم وتنهار الرحلة، بينما `queryBy` يسأل بهدوء 'هل وصل الطرد؟' فإذا لم يصل يقول 'لا' بسلام، بينما `findBy` يقول 'سأنتظر وصول الطرد خلال دقيقة'.",
      whyItMatters: "الخلط بين هذه الدوال الثلاث هو المسبب الأول للأخطاء الشائعة والانتظارات المعلقة في اختبارات الواجهة.",
      syntax: "// 1. للتأكد من الوجود الفوري:\nscreen.getByText('مرحباً');\n// 2. للتأكد من عدم الوجود (النفي):\nexpect(screen.queryByText('رسالة خطأ')).toBeNull();\n// 3. لانتظار ظهور عنصر غير متزامن:\nconst user = await screen.findByText('بيانات المستخدم');",
      simpleExample: `// استيراد أدوات الفحص
import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

function ConditionalMessage({ hasError }) {
  return (
    <div>
      <p>لوحة التحكم</p>
      {hasError && <span role="alert">حدث خطأ في النظام</span>}
    </div>
  );
}

test('المقارنة العملية بين getBy و queryBy', () => {
  // رندر بدون خطأ
  render(<ConditionalMessage hasError={false} />);

  // ✅ استخدام getBy للعنصر الموجود حتماً
  expect(screen.getByText('لوحة التحكم')).toBeInTheDocument();

  // ✅ استخدام queryBy للتحقق من عدم وجود رسالة الخطأ (getBy كانت ستفشل وترمي خطأ!)
  expect(screen.queryByRole('alert')).toBeNull();
  expect(screen.queryByText('حدث خطأ في النظام')).not.toBeInTheDocument();
});`,
      advancedExample: [
        "// اختبار شامل يوضح الحالات المثالية لاستخدام get و query و find (المفرد والجمع All)",
        "import React, { useState, useEffect } from 'react';",
        "import { render, screen } from '@testing-library/react';",
        "import { test, expect } from 'vitest';",
        "",
        "function AsyncNotifications() {",
        "  const [notifications, setNotifications] = useState([]);",
        "  const [loading, setLoading] = useState(true);",
        "",
        "  useEffect(() => {",
        "    const timer = setTimeout(() => {",
        "      setNotifications(['إشعار 1', 'إشعار 2']);",
        "      setLoading(false);",
        "    }, 200);",
        "    return () => clearTimeout(timer);",
        "  }, []);",
        "",
        "  return (",
        "    <div>",
        "      <h3>مركز الإشعارات</h3>",
        "      {loading && <p>جاري تحميل الإشعارات...</p>}",
        "      <ul>",
        "        {notifications.map((n, i) => <li key={i}>{n}</li>)}",
        "      </ul>",
        "    </div>",
        "  );",
        "}",
        "",
        "test('استخدام مصفوفة الاستعلامات الكاملة get و query و find', async () => {",
        "  render(<AsyncNotifications />);",
        "",
        "  // 1. getBy: عنصر موجود في أول إطار",
        "  expect(screen.getByText('مركز الإشعارات')).toBeInTheDocument();",
        "",
        "  // 2. queryBy: التأكد من أن القائمة فارغة في البداية",
        "  expect(screen.queryByText('إشعار 1')).toBeNull();",
        "",
        "  // 3. findBy (Async): انتظار ظهور الإشعار بعد انتهاء المؤقت",
        "  const firstItem = await screen.findByText('إشعار 1');",
        "  expect(firstItem).toBeInTheDocument();",
        "",
        "  // 4. findAllBy (Async Multi): انتظار وجلب جميع عناصر القائمة",
        "  const allItems = await screen.findAllByRole('listitem');",
        "  expect(allItems).toHaveLength(2);",
        "",
        "  // 5. queryBy بعد اكتمال التحميل: التأكد من اختفاء مؤشر التحميل",
        "  expect(screen.queryByText('جاري تحميل الإشعارات...')).not.toBeInTheDocument();",
        "});"
      ].join('\n'),
      output: "يوفر استخدام النوع الصحيح لكل استعلام استقراراً تاماً لاختباراتك؛ get للوجود الحاضر، query للغياب، و find للظهور المستقبلي.",
      commonMistakes: "كتابة `expect(screen.getByText('x')).not.toBeInTheDocument()`؛ هذا الاختبار سيفشل تلقائياً ولن يصل لـ expect لأن `getByText` ترمي خطأ وتوقف التنفيذ فوراً إذا لم تجد العنصر! الصواب دائماً للنفي هو `queryByText`.",
      bestPractices: "احفظ القاعدة: هل العنصر متوقع أن يكون غير موجود؟ استخدم `queryBy`. هل العنصر يظهر بعد انتظار أو طلب شبكة؟ استخدم `await findBy`. هل العنصر موجود الآن؟ استخدم `getBy`.",
      visualDiagram: "RTL Query Decision Matrix:\nCondition ──► Expected in DOM? ──► Synchronous? ──► USE: getBy...\n         ├──► NOT in DOM?     ──► Synchronous? ──► USE: queryBy... (assert null)\n         └──► Coming Later?   ──► Asynchronous? ──► USE: await findBy..."
    },
    {
      id: "19.3.e",
      title: "اختبار النصوص والعناصر",
      englishTerm: "Asserting Text and Elements (أكسبكت تيست آند إيليمنتس)",
      description: "استخدام دوال المطابقة المخصصة لـ DOM القادمة من مكتبة `@testing-library/jest-dom`؛ مثل `toBeVisible()` للتأكد من أن العنصر ليس مخفياً بـ CSS، و `toHaveTextContent()` لمطابقة النصوص حتى لو كانت مقسمة بين وسوم داخلية، و `toHaveClass()`، و `toHaveAttribute()`.",
      analogy: "يشبه فحص مواصفات المنتج في الجمارك؛ لا تكتفي بوجود الصندوق، بل تفتحه وتتأكد من أن وزنه ولونه ومواصفاته مطابقة للمستند المرفق.",
      whyItMatters: "يوفر رسائل خطأ واضحة ومفسرة للغاية عند فشل الاختبار، تشرح الفارق الدقيق بين ما وجدته في الـ DOM وما توقعته.",
      syntax: "expect(element).toBeVisible();\nexpect(element).toHaveTextContent(/مرحبا/i);\nexpect(button).toBeDisabled();",
      simpleExample: `// استيراد الأدوات
import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

function StatusCard({ isOnline, username }) {
  return (
    <div className="card">
      <span className={isOnline ? 'badge-online' : 'badge-offline'}>
        {username}
      </span>
      {/* عنصر مخفي بصرياً */}
      <span style={{ display: isOnline ? 'block' : 'none' }}>نشط الآن</span>
    </div>
  );
}

test('التحقق من الرؤية البصرية والفئات والنصوص', () => {
  render(<StatusCard isOnline={true} username="خالد" />);

  const userEl = screen.getByText('خالد');
  expect(userEl).toHaveClass('badge-online');

  const statusEl = screen.getByText('نشط الآن');
  // التحقق من أن العنصر مرئي فعلياً للمستخدم وليس display: none
  expect(statusEl).toBeVisible();
});`,
      advancedExample: [
        "// اختبار شامل يدمج التعبيرات النمطية (Regex) والمطابقات الجزئية وتطابق السمات المخصصة",
        "import React from 'react';",
        "import { render, screen } from '@testing-library/react';",
        "import { test, expect } from 'vitest';",
        "",
        "function ProductPricingCard({ product }) {",
        "  return (",
        "    <article data-testid='product-card' className='p-4 bg-slate-900 border rounded'>",
        "      <h4 className='text-lg font-bold'>{product.title}</h4>",
        "      <p className='price-tag'>",
        "        السعر: <strong className='text-emerald-400'>{product.price}</strong> <span>ر.س</span>",
        "      </p>",
        "      <a href={'/products/' + product.slug} target='_blank' rel='noopener noreferrer'>",
        "        معاينة المنتج",
        "      </a>",
        "    </article>",
        "  );",
        "}",
        "",
        "test('التحقق الدقيق من مطابقة النصوص المعقدة والروابط والسمات', () => {",
        "  const mockProduct = { title: 'دورة React المتقدمة', price: 450, slug: 'react-advanced-course' };",
        "  render(<ProductPricingCard product={mockProduct} />);",
        "",
        "  // 1. استخدام Regex لمطابقة النص حتى مع وجود فراغات أو تشكيل",
        "  expect(screen.getByText(/دورة React/i)).toBeInTheDocument();",
        "",
        "  // 2. toHaveTextContent تجمع النصوص من الأبناء المتداخلين (strong + span)",
        "  const priceContainer = screen.getByText(/السعر:/);",
        "  expect(priceContainer).toHaveTextContent('السعر: 450 ر.س');",
        "",
        "  // 3. فحص سمات الرابط href و target و rel لضمان الأمان",
        "  const link = screen.getByRole('link', { name: 'معاينة المنتج' });",
        "  expect(link).toHaveAttribute('href', '/products/react-advanced-course');",
        "  expect(link).toHaveAttribute('target', '_blank');",
        "  expect(link).toHaveAttribute('rel', 'noopener noreferrer');",
        "});"
      ].join('\n'),
      output: "تضمن مطابقات jest-dom فحص الحالة البصرية الحقيقية والسمات الأمنية بكفاءة لا مثيل لها.",
      commonMistakes: "استخدام toBeInTheDocument() للتأكد من أن العنصر مرئي؛ العنصر قد يكون موجوداً في شجرة الـ DOM ولكنه مخفي عبر CSS بـ `display: none` أو `visibility: hidden`. استخدم `toBeVisible()` دائماً للتأكد من الرؤية البصرية.",
      bestPractices: "استخدم التعبيرات النمطية غير الحساسة لحالة الأحرف مثل `/بحث/i` لجعل اختباراتك مرنة ضد التغييرات الطفيفة في الفراغات وتنسيق النصوص.",
      visualDiagram: "DOM Assertions:\ntoBeInTheDocument() ──► Exists anywhere in DOM tree (even if display: none)\ntoBeVisible()        ──► Verified visible on screen (display !== none && opacity !== 0)"
    },
    {
      id: "19.3.f",
      title: "محاكاة تفاعل المستخدم باستخدام user-event",
      englishTerm: "Simulating Interactions with @testing-library/user-event (يوزر إيفينت)",
      description: "حزمة `@testing-library/user-event` هي الأداة المتطورة والموصى بها لمحاكاة كافة أحداث وتفاعلات الإنسان مع المتصفح؛ تتفوق بمراحل على `fireEvent` القديمة لأنها تُطلق سلسلة الأحداث الطبيعية الكاملة التي يطلقها المتصفح الحقيقي (مثل: hover ثم focus ثم pointerDown ثم mouseDown ثم click ثم blur).",
      analogy: "يشبه الفارق بين أن يضع روبوت إصبعاً بلاستيكياً ميكانيكياً على زر الكيبورد ويضغط عليه بوزن حقيقي ودفء بشري، وبين إرسال إشارة كهربائية مفاجئة تخترق الدائرة الإلكترونية دون لمس الزر.",
      whyItMatters: "تضمن أن كافة معالجات الأحداث والتركيز (Focus) والتحديد المرتبطة بتفاعل الإنسان الحقيقي ستعمل بدقة كما تعمل في بيئة الإنتاج.",
      syntax: "const user = userEvent.setup();\nawait user.click(button);\nawait user.type(input, 'نص تجريبي');",
      simpleExample: `// استيراد userEvent مع React
import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';

function SimpleButtonDemo() {
  const [clicked, setClicked] = useState(false);
  return (
    <button onClick={() => setClicked(true)}>
      {clicked ? 'تم الضغط!' : 'اضغط هنا'}
    </button>
  );
}

test('محاكاة النقر الواقعي عبر userEvent', async () => {
  // تهيئة كائن userEvent قبل الرندر
  const user = userEvent.setup();

  render(<SimpleButtonDemo />);

  const btn = screen.getByRole('button', { name: 'اضغط هنا' });
  // محاكاة النقر الحقيقي مع انتظار الوعد
  await user.click(btn);

  expect(screen.getByRole('button', { name: 'تم الضغط!' })).toBeInTheDocument();
});`,
      advancedExample: [
        "// محاكاة تفاعلات لوحة المفاتيح المعقدة (الكتابة، زر Tab، زر Enter، وتفريغ الحقل)",
        "import React, { useState } from 'react';",
        "import { render, screen } from '@testing-library/react';",
        "import userEvent from '@testing-library/user-event';",
        "import { test, expect } from 'vitest';",
        "",
        "function InteractiveFormInput() {",
        "  const [tags, setTags] = useState([]);",
        "  const [text, setText] = useState('');",
        "",
        "  const handleKeyDown = (e) => {",
        "    if (e.key === 'Enter' && text.trim()) {",
        "      e.preventDefault();",
        "      setTags(prev => [...prev, text.trim()]);",
        "      setText('');",
        "    }",
        "  };",
        "",
        "  return (",
        "    <div>",
        "      <label htmlFor='tag-input'>أضف وسماً:</label>",
        "      <input",
        "        id='tag-input'",
        "        type='text'",
        "        value={text}",
        "        onChange={e => setText(e.target.value)}",
        "        onKeyDown={handleKeyDown}",
        "      />",
        "      <div role='list' aria-label='قائمة الوسوم'>",
        "        {tags.map((t, idx) => <span key={idx} role='listitem'>{t}</span>)}",
        "      </div>",
        "    </div>",
        "  );",
        "}",
        "",
        "test('محاكاة كتابة النص وضغط مفتاح Enter لإضافة وسوم متعددة', async () => {",
        "  const user = userEvent.setup();",
        "  render(<InteractiveFormInput />);",
        "",
        "  const input = screen.getByLabelText('أضف وسماً:');",
        "",
        "  // 1. محاكاة كتابة الوسم الأول والضغط على Enter",
        "  await user.type(input, 'React{enter}');",
        "  // 2. محاكاة كتابة الوسم الثاني والضغط على Enter",
        "  await user.type(input, 'Vitest{enter}');",
        "",
        "  // التحقق من تفريغ حقل الإدخال تلقائياً بعد كل إضافة",
        "  expect(input).toHaveValue('');",
        "",
        "  // التحقق من ظهور الوسوم في القائمة",
        "  const tagItems = screen.getAllByRole('listitem');",
        "  expect(tagItems).toHaveLength(2);",
        "  expect(tagItems[0]).toHaveTextContent('React');",
        "  expect(tagItems[1]).toHaveTextContent('Vitest');",
        "});"
      ].join('\n'),
      output: "يقوم user-event بمحاكاة تسلسل الأحداث وضغطات المفاتيح حرفاً بحرف مع إطلاق أحداث change و input و keydown بالتوقيت الصحيح.",
      commonMistakes: "نسيان استدعاء `userEvent.setup()` في بداية الاختبار أو نسيان كتابة `await` قبل استدعاء `user.click` أو `user.type`؛ كافة دوال user-event غير متزامنة ويجب انتظارها دائماً.",
      bestPractices: "استخدم دائماً `@testing-library/user-event` بدلاً من `fireEvent`؛ لأن fireEvent تُطلق حدث DOM معزول بدون إطلاق أحداث التركيز والمؤشر المصاحبة له.",
      visualDiagram: "fireEvent vs userEvent:\nfireEvent.click(btn): [Direct DOM dispatch: 'click'] (Unrealistic)\nuserEvent.click(btn): [pointerOver ➔ mouseOver ➔ pointerDown ➔ mouseDown ➔ focus ➔ click] (100% Real!)"
    },
    {
      id: "19.3.g",
      title: "اختبار النماذج",
      englishTerm: "Testing Forms & Validations (تيستينغ فورمز)",
      description: "منهجية اختبار نماذج الإدخال المعقدة؛ تشمل تعبئة الحقول المختلفة (نصوص، خيارات select، مربعات اختيار checkbox، أزرار راديو radio)، واختبار التحقق من صحة المدخلات (Form Validation)، وعرض رسائل الخطأ، وتعطيل زر الإرسال، وإرسال البيانات بنجاح.",
      analogy: "يشبه مراجعة استمارة التقدم للوظيفة؛ تتأكد من كتابة الاسم ورقم الهاتف، وإذا ترك المتقدم حقل البريد فارغاً، تضع له علامة حمراء تفيده بضرورة ملئه قبل قبول الاستمارة.",
      whyItMatters: "النماذج هي وسيلة التفاعل الأساسية التي يدخل من خلالها المستخدمون بياناتهم المالية والشخصية؛ أي خطأ في التحقق يعطل تسجيل العملاء أو يسمح بمرور بيانات فاسدة.",
      syntax: "await user.type(screen.getByLabelText('البريد'), 'test@test.com');\nawait user.selectOptions(screen.getByRole('combobox'), 'SA');\nawait user.click(screen.getByRole('button', { name: 'إرسال' }));",
      simpleExample: `// استيراد الأدوات
import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';

function SimpleLoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('البريد الإلكتروني غير صالح');
      return;
    }
    setError('');
    onLogin(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user-email">البريد:</label>
      <input id="user-email" value={email} onChange={e => setEmail(e.target.value)} />
      {error && <span role="alert">{error}</span>}
      <button type="submit">دخول</button>
    </form>
  );
}

test('إظهار خطأ عند إدخال بريد غير صالح، والإرسال عند التصحيح', async () => {
  const user = userEvent.setup();
  const mockLogin = vi.fn();
  render(<SimpleLoginForm onLogin={mockLogin} />);

  const input = screen.getByLabelText('البريد:');
  const submitBtn = screen.getByRole('button', { name: 'دخول' });

  // 1. تجربة بريد خاطئ
  await user.type(input, 'invalid-email');
  await user.click(submitBtn);
  expect(screen.getByRole('alert')).toHaveTextContent('البريد الإلكتروني غير صالح');
  expect(mockLogin).not.toHaveBeenCalled();

  // 2. تصحيح البريد
  await user.clear(input);
  await user.type(input, 'correct@test.com');
  await user.click(submitBtn);
  expect(screen.queryByRole('alert')).toBeNull();
  expect(mockLogin).toHaveBeenCalledWith('correct@test.com');
});`,
      advancedExample: [
        "// اختبار نموذج تسجيل متكامل يضم حقولاً متباينة (Checkbox, Select, Radio) وتحقق متزامن",
        "import React, { useState } from 'react';",
        "import { render, screen } from '@testing-library/react';",
        "import userEvent from '@testing-library/user-event';",
        "import { test, expect, vi } from 'vitest';",
        "",
        "function FullRegistrationForm({ onSubmit }) {",
        "  const [form, setForm] = useState({ name: '', country: 'EG', plan: 'free', acceptTerms: false });",
        "",
        "  const handleFormSubmit = (e) => {",
        "    e.preventDefault();",
        "    if (!form.acceptTerms) return;",
        "    onSubmit(form);",
        "  };",
        "",
        "  return (",
        "    <form onSubmit={handleFormSubmit} className='space-y-2'>",
        "      <label htmlFor='fullName'>الاسم الكامل:</label>",
        "      <input",
        "        id='fullName'",
        "        value={form.name}",
        "        onChange={e => setForm({ ...form, name: e.target.value })}",
        "      />",
        "",
        "      <label htmlFor='countrySelect'>الدولة:</label>",
        "      <select",
        "        id='countrySelect'",
        "        value={form.country}",
        "        onChange={e => setForm({ ...form, country: e.target.value })}",
        "      >",
        "        <option value='SA'>المملكة العربية السعودية</option>",
        "        <option value='EG'>مصر</option>",
        "        <option value='AE'>الإمارات</option>",
        "      </select>",
        "",
        "      <div>",
        "        <label>",
        "          <input",
        "            type='radio'",
        "            name='plan'",
        "            value='pro'",
        "            checked={form.plan === 'pro'}",
        "            onChange={() => setForm({ ...form, plan: 'pro' })}",
        "          />",
        "          الخطة الاحترافية",
        "        </label>",
        "      </div>",
        "",
        "      <div>",
        "        <label>",
        "          <input",
        "            type='checkbox'",
        "            checked={form.acceptTerms}",
        "            onChange={e => setForm({ ...form, acceptTerms: e.target.checked })}",
        "          />",
        "          أوافق على الشروط والأحكام",
        "        </label>",
        "      </div>",
        "",
        "      <button type='submit' disabled={!form.acceptTerms}>",
        "        تأكيد التسجيل",
        "      </button>",
        "    </form>",
        "  );",
        "}",
        "",
        "test('تعبئة كافة أنواع حقول النموذج وإرسال البيانات بنجاح', async () => {",
        "  const user = userEvent.setup();",
        "  const mockSubmit = vi.fn();",
        "  render(<FullRegistrationForm onSubmit={mockSubmit} />);",
        "",
        "  // 1. ملء حقل الاسم",
        "  await user.type(screen.getByLabelText('الاسم الكامل:'), 'يوسف العبدالله');",
        "",
        "  // 2. اختيار الدولة من القائمة المنسدلة",
        "  await user.selectOptions(screen.getByLabelText('الدولة:'), 'SA');",
        "",
        "  // 3. تحديد زر الراديو",
        "  await user.click(screen.getByRole('radio', { name: 'الخطة الاحترافية' }));",
        "",
        "  // زر الإرسال يجب أن يكون معطلاً قبل الموافقة على الشروط",
        "  const submitBtn = screen.getByRole('button', { name: 'تأكيد التسجيل' });",
        "  expect(submitBtn).toBeDisabled();",
        "",
        "  // 4. النقر على مربع الموافقة",
        "  await user.click(screen.getByRole('checkbox', { name: 'أوافق على الشروط والأحكام' }));",
        "  expect(submitBtn).toBeEnabled();",
        "",
        "  // 5. إرسال النموذج والتحقق من كائن البيانات النهائي",
        "  await user.click(submitBtn);",
        "  expect(mockSubmit).toHaveBeenCalledWith({",
        "    name: 'يوسف العبدالله',",
        "    country: 'SA',",
        "    plan: 'pro',",
        "    acceptTerms: true",
        "  });",
        "});"
      ].join('\n'),
      output: "يتم محاكاة رحلة تعبئة الاستمارة الحقيقية عبر مختلف أنواع الحقول والتحقق من تعطيل وتفعيل الأزرار بناءً على الشروط.",
      commonMistakes: "كتابة الحقول بدون ربطها بـ <label htmlFor=\"...\">؛ هذا يجبرك في الاختبار على استخدام selectors ضعيفة، بينما ربطها بالـ label يمكنك من استخدام `getByLabelText` النظيف ويحسن إمكانية الوصول.",
      bestPractices: "اربط كل حقل إدخال بـ label واضح واختبر دائماً رسائل التحقق (Validation Messages) وحالة تعطيل زر الإرسال أثناء التحميل.",
      visualDiagram: "Form Testing Flow:\nUser types in inputs ──► selectOptions in combobox ──► clicks checkbox\n       │\n       ▼\nsubmitButton state transitions from disabled ──► enabled ──► Submit Dispatched!"
    },
    {
      id: "19.3.h",
      title: "اختبار الحالة وتحديث الواجهة",
      englishTerm: "Testing State & UI Updates (تيستينغ ستيت آند يو آي)",
      description: "فحص كيفية انعكاس تغيرات الـ State (سواء كانت عبر useState أو useReducer) على شاشة المستخدم؛ والتأكد من ظهور المكونات المشروطة أو اختفائها، وتحديث القوائم، وتغيير الأنماط البصرية بدون الحاجة لمعرفة اسم متغير الحالة في كود المكون.",
      analogy: "يشبه النظر إلى شاشة عداد السرعة في السيارة؛ عندما تضغط على دواسة البنزين ترتفع إبرة السرعة من 0 إلى 80 كم/س، فأنت تختبر حركة الإبرة على الشاشة وليس تيار الحساس داخل لوحة القيادة.",
      whyItMatters: "هو جوهر اختبار تطبيقات React التفاعلية؛ فالمستخدم لا يرى الـ State، بل يرى النتائج البصرية لتحديثها.",
      syntax: "expect(screen.getByText('العداد: 0')).toBeInTheDocument();\nawait user.click(screen.getByRole('button', { name: '+' }));\nexpect(screen.getByText('العداد: 1')).toBeInTheDocument();",
      simpleExample: `// استيراد React وأدوات RTL
import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(v => !v)}>
        {title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && <div role="region">{content}</div>}
    </div>
  );
}

test('تبديل ظهور المحتوى عند النقر على الأكورديون', async () => {
  const user = userEvent.setup();
  render(<AccordionItem title="تفاصيل الكورس" content="يحتوي على 34 قسماً احترافياً" />);

  // في البداية: المحتوى غير موجود في الـ DOM
  expect(screen.queryByRole('region')).toBeNull();

  // النقر لفتح الأكورديون
  await user.click(screen.getByRole('button', { name: /تفاصيل الكورس/ }));

  // الآن: المحتوى يظهر بنجاح
  const content = screen.getByRole('region');
  expect(content).toHaveTextContent('يحتوي على 34 قسماً احترافياً');

  // النقر مرة أخرى للإغلاق
  await user.click(screen.getByRole('button', { name: /تفاصيل الكورس/ }));
  expect(screen.queryByRole('region')).toBeNull();
});`,
      advancedExample: [
        "// اختبار مكوّن إدارة الحالة المعقد (Reducer-based Shopping List) وتحديثات الحذف والإكمال",
        "import React, { useReducer } from 'react';",
        "import { render, screen } from '@testing-library/react';",
        "import userEvent from '@testing-library/user-event';",
        "import { test, expect } from 'vitest';",
        "",
        "function listReducer(state, action) {",
        "  switch (action.type) {",
        "    case 'TOGGLE':",
        "      return state.map(item => item.id === action.id ? { ...item, done: !item.done } : item);",
        "    case 'REMOVE':",
        "      return state.filter(item => item.id !== action.id);",
        "    default:",
        "      return state;",
        "  }",
        "}",
        "",
        "function StateDrivenList({ initialItems }) {",
        "  const [items, dispatch] = useReducer(listReducer, initialItems);",
        "",
        "  return (",
        "    <ul>",
        "      {items.map(item => (",
        "        <li key={item.id} className='flex items-center gap-2'>",
        "          <span className={item.done ? 'line-through' : ''}>{item.text}</span>",
        "          <button onClick={() => dispatch({ type: 'TOGGLE', id: item.id })}>",
        "            {item.done ? 'إلغاء الإكمال' : 'إكمال'}",
        "          </button>",
        "          <button onClick={() => dispatch({ type: 'REMOVE', id: item.id })}>",
        "            حذف",
        "          </button>",
        "        </li>",
        "      ))}",
        "    </ul>",
        "  );",
        "}",
        "",
        "test('فحص تحديثات الحالة المعقدة عبر useReducer وسلوك الشاشة', async () => {",
        "  const user = userEvent.setup();",
        "  const initialData = [",
        "    { id: 1, text: 'تعلم Vitest', done: false },",
        "    { id: 2, text: 'بناء مشروع E2E', done: false }",
        "  ];",
        "",
        "  render(<StateDrivenList initialItems={initialData} />);",
        "",
        "  // 1. التحقق من وجود العنصرين",
        "  expect(screen.getAllByRole('listitem')).toHaveLength(2);",
        "",
        "  // 2. إكمال المهمة الأولى والتحقق من تطبيق فئة line-through",
        "  const completeButtons = screen.getAllByRole('button', { name: 'إكمال' });",
        "  await user.click(completeButtons[0]);",
        "  expect(screen.getByText('تعلم Vitest')).toHaveClass('line-through');",
        "  expect(screen.getByRole('button', { name: 'إلغاء الإكمال' })).toBeInTheDocument();",
        "",
        "  // 3. حذف المهمة الثانية والتحقق من اختفائها تماماً ونقص عدد العناصر",
        "  const deleteButtons = screen.getAllByRole('button', { name: 'حذف' });",
        "  await user.click(deleteButtons[1]);",
        "",
        "  expect(screen.queryByText('بناء مشروع E2E')).toBeNull();",
        "  expect(screen.getAllByRole('listitem')).toHaveLength(1);",
        "});"
      ].join('\n'),
      output: "يتم التحقق من كافة انتقالات الحالة وسلوك القوائم وحذف العناصر بدقة كاملة مستندة إلى استجابة الواجهة فقط.",
      commonMistakes: "استدعاء `act()` يدوياً؛ مكتبة React Testing Library و user-event تغلف كافة عمليات الرندر والنقر بـ `act()` تلقائياً في الخلفية. استدعاء act يدوياً غير ضروري في 99% من الحالات ويشوه الكود.",
      bestPractices: "ركز على التأكد من نتائج الحالة في الـ DOM (مثل فئات التنسيق، والنصوص البديلة، والعناصر المحذوفة) وتجنب تماماً التفكير في بنية الحالة الداخلية.",
      visualDiagram: "State to DOM Observation:\n[User Interaction] ──► dispatch(action) ──► State Transitions\n                                                    │\n                                                    ▼\n                       Assertion checks: `screen.getByText(...)` matches new visual DOM!"
    },
    {
      id: "19.3.i",
      title: "اختبار المكونات غير المتزامنة",
      englishTerm: "Testing Async Components & waitFor (أسينك كومبوننتس)",
      description: "تقنيات اختبار المكونات التي تعتمد على جلب البيانات عبر الشبكة أو المؤقتات؛ استخدام استعلامات `findBy...` ودالة `waitFor()` من RTL. تقوم `waitFor` بتكرار تنفيذ دالة التحقق بشكل دوري وسريع حتى يمر الاختبار بنجاح أو تنتهي المهلة المحددة (Timeout الافتراضي 1000ms).",
      analogy: "يشبه مراقبة شاشة وصول الرحلات في المطار؛ تقف وتنظر إلى الشاشة بانتظام كل بضع ثوانٍ حتى تومض الرحلة القادمة وتتحول حالتها من 'في الجو' إلى 'وصلت بسلام'.",
      whyItMatters: "يحول دون حدوث أخطاء عدم التزامن الكلاسيكية (Race Conditions) وفشل الاختبارات بسبب تأخر رسم المكون بعد جلب البيانات.",
      syntax: "await waitFor(() => {\n  expect(screen.getByText('اكتمل التحميل')).toBeInTheDocument();\n});",
      simpleExample: `// استيراد أدوات RTL
import React, { useState, useEffect } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { test, expect } from 'vitest';

function AsyncGreeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // محاكاة تأخر استجابة الخادم
    const timer = setTimeout(() => {
      setGreeting('مرحباً بك في عالم React!');
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return <div>{greeting ? <h1>{greeting}</h1> : <p>جاري التحميل...</p>}</div>;
}

test('انتظار ظهور الترحيب غير المتزامن باستخدام findBy و waitFor', async () => {
  render(<AsyncGreeting />);

  // في البداية مؤشر التحميل موجود
  expect(screen.getByText('جاري التحميل...')).toBeInTheDocument();

  // الطريقة 1: استخدام findByRole (المفضلة والأقصر)
  const heading = await screen.findByRole('heading', { name: 'مرحباً بك في عالم React!' });
  expect(heading).toBeInTheDocument();

  // الطريقة 2: استخدام waitFor للتأكد من اختفاء المؤشر
  await waitFor(() => {
    expect(screen.queryByText('جاري التحميل...')).toBeNull();
  });
});`,
      advancedExample: [
        "// اختبار مكوّن جلب بيانات API غير متزامن مع معالجة الأخطاء وإعادة المحاولة",
        "import React, { useState, useEffect } from 'react';",
        "import { render, screen, waitFor } from '@testing-library/react';",
        "import userEvent from '@testing-library/user-event';",
        "import { test, expect, vi } from 'vitest';",
        "",
        "function UserDataFetcher({ fetcher }) {",
        "  const [user, setUser] = useState(null);",
        "  const [error, setError] = useState(null);",
        "  const [loading, setLoading] = useState(true);",
        "",
        "  const loadData = async () => {",
        "    setLoading(true);",
        "    setError(null);",
        "    try {",
        "      const data = await fetcher();",
        "      setUser(data);",
        "    } catch (err) {",
        "      setError('تعذر تحميل البيانات');",
        "    } finally {",
        "      setLoading(false);",
        "    }",
        "  };",
        "",
        "  useEffect(() => {",
        "    loadData();",
        "  }, []);",
        "",
        "  if (loading) return <div>جاري جلب البيانات...</div>;",
        "  if (error) return (",
        "    <div>",
        "      <span role='alert'>{error}</span>",
        "      <button onClick={loadData}>إعادة المحاولة</button>",
        "    </div>",
        "  );",
        "  return <div>مرحباً، {user.name} ({user.role})</div>;",
        "}",
        "",
        "test('التعامل مع فشل الشبكة ثم إعادة المحاولة بنجاح عبر waitFor', async () => {",
        "  const user = userEvent.setup();",
        "  // محاكاة تفشل في المرة الأولى وتنجح في المرة الثانية",
        "  const mockFetcher = vi.fn()",
        "    .mockRejectedValueOnce(new Error('Network error'))",
        "    .mockResolvedValueOnce({ name: 'ليلى أحمد', role: 'مديرة منتج' });",
        "",
        "  render(<UserDataFetcher fetcher={mockFetcher} />);",
        "",
        "  // 1. انتظار ظهور رسالة الخطأ بعد فشل المرة الأولى",
        "  const alert = await screen.findByRole('alert');",
        "  expect(alert).toHaveTextContent('تعذر تحميل البيانات');",
        "",
        "  // 2. النقر على زر إعادة المحاولة",
        "  const retryBtn = screen.getByRole('button', { name: 'إعادة المحاولة' });",
        "  await user.click(retryBtn);",
        "",
        "  // 3. انتظار ظهور الاسم واختفاء الخطأ ومؤشر التحميل",
        "  await waitFor(() => {",
        "    expect(screen.getByText('مرحباً، ليلى أحمد (مديرة منتج)')).toBeInTheDocument();",
        "    expect(screen.queryByRole('alert')).toBeNull();",
        "  });",
        "",
        "  expect(mockFetcher).toHaveBeenCalledTimes(2);",
        "});"
      ].join('\n'),
      output: "يتم محاكاة أزمنة الشبكة والـ Promises بدقة مع استخدام waitFor للتأكد من استقرار الواجهة وظهور البيانات بنجاح.",
      commonMistakes: "وضع استعلامات جانبية (Side Effects) مثل `user.click()` داخل دالة الـ `waitFor(() => ...)`؛ دالة waitFor تُنفذ عدة مرات في الثانية الواحدة، ووضع حدث النقر بداخلها سيؤدي إلى نقر الزر عشرات المرات والتسبب في سلوك كارثي! انقر خارج waitFor واستخدم waitFor فقط للتأكيدات (Expectations).",
      bestPractices: "فضل دائماً استخدام `await screen.findBy...` المباشرة بدلاً من كتابة `await waitFor(() => expect(screen.getBy...))`؛ فهي أقصر وأسرع وتنتج رسائل خطأ أكثر وضوحاً.",
      visualDiagram: "Async Wait Lifecycle:\nAction (Click / Mount) ──► Triggers Promise\n                             │\n                             ▼\nwaitFor() Polling loop: [Check DOM] ──► Not yet ──► [Check DOM] ──► MATCH! ──► Continues"
    },
    {
      id: "19.3.j",
      title: "اختبار Custom Hooks",
      englishTerm: "Testing Custom Hooks with renderHook (ريندر هوك)",
      description: "دالة `renderHook()` المستوردة من `@testing-library/react` لاختبار الخطافات المخصصة (Custom Hooks) بمعزل عن المكونات البصرية. تتيح لك قراءة أحدث قيمة يُرجعها الـ Hook عبر كائن `result.current`، وتشغيل دوال تحديث الحالة داخل دالة `act()` أو مراقبة التغيرات التلقائية.",
      analogy: "يشبه اختبار محرك صغير على منصة اختبار المعمل؛ لا تحتاج لتركيبه داخل هيكل سيارة كامل، بل تصله بالوقود وتقرأ سرعة دورانه ومخرجاته مباشرة على شاشة القياس.",
      whyItMatters: "يحميك من الحاجة لبناء مكوّن وهمي مصطنع فقط لتجربة Hook؛ مما يمنحك سرعة ودقة متناهية في اختبار منطق الأعمال المعزول.",
      syntax: "const { result } = renderHook(() => useMyHook(initialVal));\nact(() => {\n  result.current.increment();\n});\nexpect(result.current.count).toBe(1);",
      simpleExample: `// اختبار Custom Hook بسيط للعداد عبر renderHook
import { renderHook, act } from '@testing-library/react';
import { useState } from 'react';
import { test, expect } from 'vitest';

// الخطاف المخصص
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}

test('اختبار زيادة ونقصان العداد عبر renderHook', () => {
  // رندر الـ Hook مع تمرير قيمة ابتدائية 5
  const { result } = renderHook(() => useCounter(5));

  expect(result.current.count).toBe(5);

  // تنفيذ دالة التحديث داخل act
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(6);

  act(() => {
    result.current.decrement();
  });
  expect(result.current.count).toBe(5);
});`,
      advancedExample: [
        "// اختبار Custom Hook متقدم لإدارة التخزين المحلي (useLocalStorage) مع المزامنة",
        "import { renderHook, act } from '@testing-library/react';",
        "import { useState, useEffect } from 'react';",
        "import { describe, it, expect, beforeEach } from 'vitest';",
        "",
        "// خطاف التخزين المحلي المخصص",
        "function useLocalStorage(key, defaultValue) {",
        "  const [value, setValue] = useState(() => {",
        "    const saved = localStorage.getItem(key);",
        "    if (saved !== null) {",
        "      try { return JSON.parse(saved); } catch (e) { return saved; }",
        "    }",
        "    return defaultValue;",
        "  });",
        "",
        "  useEffect(() => {",
        "    localStorage.setItem(key, JSON.stringify(value));",
        "  }, [key, value]);",
        "",
        "  return [value, setValue];",
        "}",
        "",
        "describe('اختبار خطاف useLocalStorage المخصص', () => {",
        "  beforeEach(() => {",
        "    localStorage.clear();",
        "  });",
        "",
        "  it('يجب أن يسترجع القيمة الافتراضية ويحفظها في localStorage', () => {",
        "    const { result } = renderHook(() => useLocalStorage('user_theme', 'dark'));",
        "    const [theme] = result.current;",
        "",
        "    expect(theme).toBe('dark');",
        "    expect(JSON.parse(localStorage.getItem('user_theme'))).toBe('dark');",
        "  });",
        "",
        "  it('يجب أن يُحدث الحالة والـ localStorage عند استدعاء دالة setValue', () => {",
        "    const { result } = renderHook(() => useLocalStorage('user_theme', 'dark'));",
        "",
        "    act(() => {",
        "      const [, setTheme] = result.current;",
        "      setTheme('light');",
        "    });",
        "",
        "    const [updatedTheme] = result.current;",
        "    expect(updatedTheme).toBe('light');",
        "    expect(JSON.parse(localStorage.getItem('user_theme'))).toBe('light');",
        "  });",
        "});"
      ].join('\n'),
      output: "يتم اختبار منطق الـ Hook بالكامل وتفاعل الـ useEffect مع التخزين المحلي بدقة فائقة وبدون أي مكونات واجهة مستخدم.",
      commonMistakes: "تخزين دالة التحديث في متغير منفصل خارج الـ renderHook مثل: const { increment } = result.current؛ دالة result.current تتغير بعد كل تصيير ويجب دائماً قراءة الخصائص من `result.current.xxx` في كل فحص.",
      bestPractices: "استخدم `renderHook` فقط عندما يكون الـ Hook قابلاً لإعادة الاستخدام في مكونات متعددة، وتأكد من تغليف دوال التحديث بـ `act(() => ...)`.",
      visualDiagram: "renderHook Architecture:\nrenderHook(() => useMyHook())\n      │\n      ▼\nReturns: { result, rerender, unmount }\n      │\n      └──► Access latest state anytime via: `result.current`"
    },
    {
      id: "19.3.k",
      title: "اختبار المكونات المعتمدة على Context",
      englishTerm: "Testing Context Consumers & Providers (تيستينغ كونتكست)",
      description: "كيفية اختبار المكونات التي تستهلك سياقات React (مثل سياق المصادقة AuthContext، أو سياق السلة CartContext، أو سياق المظهر ThemeContext)؛ وتوفير قيم وهمية أو استخدام الـ Providers الحقيقية عبر خاصية `wrapper` في دالة `render` لضمان عمل المكون دون ظهور أخطاء السياق المفقود.",
      analogy: "يشبه تجربة قابس كهربائي ثلاثي مصمم للتيار 220 فولت؛ لا يمكنك اختباره في الهواء الطلق، بل يجب توصيله بمقبس جداري يوفر نفس الجهد الكهربائي المطلوب.",
      whyItMatters: "يحول دون ظهور خطأ 'useAuth must be used within an AuthProvider' الشهير أثناء تشغيل الاختبارات المنعزلة.",
      syntax: "render(<MyConsumerComponent />, {\n  wrapper: ({ children }) => (\n    <AuthContext.Provider value={mockAuthValue}>\n      {children}\n    </AuthContext.Provider>\n  ),\n});",
      simpleExample: `// استيراد React وأدوات RTL
import React, { createContext, useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

// سياق المظهر
const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={'btn-' + theme}>السمة: {theme}</button>;
}

test('اختبار استهلاك الـ Context مع تمرير موفر مخصص في الـ wrapper', () => {
  // رندر مع تغليف المكون بالـ Provider وتمرير قيمة dark
  render(<ThemedButton />, {
    wrapper: ({ children }) => (
      <ThemeContext.Provider value="dark">
        {children}
      </ThemeContext.Provider>
    )
  });

  const button = screen.getByRole('button');
  expect(button).toHaveClass('btn-dark');
  expect(button).toHaveTextContent('السمة: dark');
});`,
      advancedExample: [
        "// اختبار كامل لنظام المصادقة عبر Context؛ اختبار تدفق تسجيل الدخول وتحديث الواجهة للعميل",
        "import React, { createContext, useContext, useState } from 'react';",
        "import { render, screen } from '@testing-library/react';",
        "import userEvent from '@testing-library/user-event';",
        "import { test, expect } from 'vitest';",
        "",
        "const AuthContext = createContext(null);",
        "",
        "function AuthProvider({ children }) {",
        "  const [user, setUser] = useState(null);",
        "  const login = (name) => setUser({ name, isAuthenticated: true });",
        "  const logout = () => setUser(null);",
        "",
        "  return (",
        "    <AuthContext.Provider value={{ user, login, logout }}>",
        "      {children}",
        "    </AuthContext.Provider>",
        "  );",
        "}",
        "",
        "function UserHeader() {",
        "  const { user, login, logout } = useContext(AuthContext);",
        "",
        "  if (user) {",
        "    return (",
        "      <div>",
        "        <span>أهلاً بك يا {user.name}</span>",
        "        <button onClick={logout}>تسجيل الخروج</button>",
        "      </div>",
        "    );",
        "  }",
        "",
        "  return (",
        "    <button onClick={() => login('مهندس خالد')}>",
        "      تسجيل الدخول",
        "    </button>",
        "  );",
        "}",
        "",
        "test('اختبار تكامل دورة حياة الـ Context الحقيقي: تسجيل الدخول والخروج', async () => {",
        "  const user = userEvent.setup();",
        "",
        "  // رندر مع الموفر الحقيقي لاختبار التفاعل المتكامل",
        "  render(<UserHeader />, { wrapper: AuthProvider });",
        "",
        "  // 1. في البداية: المستخدم غير مسجل ويظهر زر الدخول",
        "  const loginBtn = screen.getByRole('button', { name: 'تسجيل الدخول' });",
        "  expect(loginBtn).toBeInTheDocument();",
        "",
        "  // 2. النقر على تسجيل الدخول وتحديث حالة الـ Context",
        "  await user.click(loginBtn);",
        "",
        "  // 3. التحقق من ظهور رسالة الترحيب وزر الخروج واختفاء زر الدخول",
        "  expect(screen.getByText('أهلاً بك يا مهندس خالد')).toBeInTheDocument();",
        "  const logoutBtn = screen.getByRole('button', { name: 'تسجيل الخروج' });",
        "  expect(logoutBtn).toBeInTheDocument();",
        "  expect(screen.queryByRole('button', { name: 'تسجيل الدخول' })).toBeNull();",
        "",
        "  // 4. النقر على تسجيل الخروج واستعادة الحالة الابتدائية",
        "  await user.click(logoutBtn);",
        "  expect(screen.getByRole('button', { name: 'تسجيل الدخول' })).toBeInTheDocument();",
        "});"
      ].join('\n'),
      output: "يتم التحقق من تكامل موفر السياق (Provider) والمستهلك (Consumer) وتبادل الإجراءات وتحديث الواجهة بسلاسة تامة.",
      commonMistakes: "تكرار كتابة الـ Context Providers يدوياً في كل ملف اختبار؛ الحل الاحترافي هو إنشاء دالة `renderWithProviders` عامة تغلف كافة الاختبارات بالموفرات الافتراضية.",
      bestPractices: "وفر قيماً افتراضية ذكية في دالة الرندر المخصصة مع إمكانية تعديلها أو تمرير قيم مخصصة لكل اختبار على حدة.",
      visualDiagram: "Context Provider Wrapper Pattern:\nrender(<ConsumerComponent />, {\n  wrapper: ({ children }) => (\n    <ThemeContext.Provider value={customValue}>\n      <AuthContext.Provider value={customAuth}>\n        {children}\n      </AuthContext.Provider>\n    </ThemeContext.Provider>\n  )\n})"
    }
  ],
  quizzes: [
    {
      id: "q19.3.1",
      question: "ما هو الاستعلام (Query) الأعلى أولوية والموصى به دائماً في React Testing Library؟",
      options: [
        "screen.getByTestId",
        "screen.getByRole",
        "screen.getByClassName",
        "document.querySelector"
      ],
      correctAnswer: 1,
      explanation: "توصي مكتبة RTL دائماً بالبدء بـ getByRole لأنها تختبر المكون من خلال إمكانية الوصول ودوره الدلالي كما يراه قارئ الشاشة والمستخدم الحقيقي."
    },
    {
      id: "q19.3.2",
      question: "متى يجب استخدام queryByText بدلاً من getByText؟",
      options: [
        "عندما نريد فحص عناصر الصور فقط.",
        "عندما نريد التأكد من عدم وجود العنصر في الصفحة (النفي: expect(...).toBeNull())، لأن getByText ترمي خطأ وتوقف الاختبار فوراً إذا لم تجد العنصر.",
        "عندما نريد اختبار الأكواد غير المتزامنة فقط.",
        "عند استخدام TypeScript."
      ],
      correctAnswer: 1,
      explanation: "دوال `getBy` ترمي استثناءً إذا لم تجد العنصر، ولذلك فإن محاولة نفي وجودها بـ expect(getByText).not.toBeInTheDocument ستفشل وتوقف الاختبار قبل أن تقيم الشرط. دالة `queryBy` هي الوحيدة المخصصة للنفي لأنها ترجع null."
    },
    {
      id: "q19.3.3",
      question: "لماذا يُفضل استخدام @testing-library/user-event بدلاً من fireEvent؟",
      options: [
        "لأن fireEvent تم حذفها من مكتبة npm.",
        "لأن user-event تحاكي سلسلة الأحداث الكاملة التي يُطلقها المتصفح الحقيقي عند تفاعل الإنسان (Hover, Pointer, Focus, Click)، بينما fireEvent تطلق حدث DOM مفرد فقط.",
        "لأن user-event تعمل بدون الحاجة لكتابة async/await.",
        "لأن fireEvent تستهلك ذاكرة أكبر بنسبة 500%."
      ],
      correctAnswer: 1,
      explanation: "حزمة user-event صممت لمحاكاة التفاعل البشري الحقيقي بكافة أبعاده ومراحله الدقيقة، مما يضمن اختبار كافة معالجات الأحداث الحقيقية."
    }
  ],
  exercise: {
    title: "تمرين عملي: اختبار نموذج بحث تفاعلي مع رسالة 'لا توجد نتائج'",
    description: "لديك مكوّن SearchFilter يستقبل مصفوفة أسماء وحقل بحث. عندما يكتب المستخدم اسماً غير موجود، تظهر رسالة 'لم يتم العثور على أي نتائج'. اكتب اختباراً متكاملاً باستخدام RTL و userEvent يتأكد من تصفية القائمة وظهور رسالة النفي بدقة.",
    hints: [
      "استخدم userEvent.setup() لمحاكاة كتابة النص في حقل البحث.",
      "استخدم getByLabelText أو getByRole('textbox') للوصول لحقل البحث.",
      "استخدم queryByRole للتأكد من عدم وجود العناصر المحذوفة."
    ],
    solution: `import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';

// المكون الخاضع للاختبار
function SearchFilter({ items = ['أحمد', 'محمد', 'سارة'] }) {
  const [query, setQuery] = useState('');

  const filtered = items.filter(name => name.includes(query));

  return (
    <div>
      <label htmlFor="search-input">البحث بالاسم:</label>
      <input
        id="search-input"
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {filtered.length > 0 ? (
        <ul>
          {filtered.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      ) : (
        <p role="status">لم يتم العثور على أي نتائج</p>
      )}
    </div>
  );
}

// الاختبار المتكامل
test('تصفية الأسماء بنجاح وإظهار رسالة عدم وجود نتائج عند البحث عن اسم مفقود', async () => {
  const user = userEvent.setup();
  render(<SearchFilter />);

  // 1. التأكد من ظهور الأسماء الثلاثة في البداية
  expect(screen.getAllByRole('listitem')).toHaveLength(3);

  const input = screen.getByLabelText('البحث بالاسم:');

  // 2. البحث عن 'سارة'
  await user.type(input, 'سارة');
  expect(screen.getAllByRole('listitem')).toHaveLength(1);
  expect(screen.getByText('سارة')).toBeInTheDocument();
  expect(screen.queryByText('أحمد')).toBeNull();

  // 3. كتابة نص غير موجود نهائياً
  await user.clear(input);
  await user.type(input, 'زياد');

  // 4. التحقق من اختفاء القائمة وظهور رسالة الحالة
  expect(screen.queryByRole('listitem')).toBeNull();
  const statusMsg = screen.getByRole('status');
  expect(statusMsg).toHaveTextContent('لم يتم العثور على أي نتائج');
});`
  },
  infographic: {
    title: "خارطة استعلامات وأدوات React Testing Library",
    subtitle: "الدليل الذهبي لاختبار مكونات الواجهة كالمستخدم الحقيقي",
    steps: [
      { step: "1", title: "getByRole أولوية أولى", desc: "استعلم بالأدوار الدلالية (button, heading, alert) لضمان إمكانية الوصول والتصميم المتين." },
      { step: "2", title: "user-event للتفاعل", desc: "محاكاة نقرات الفأرة وضغطات المفاتيح بسلسلة الأحداث الكاملة للأجهزة الواقعية." },
      { step: "3", title: "مصفوفة الاستعلامات", desc: "استخدم get للوجود الفوري، و query للنفي، و await findBy لانتظار الوعود وشبكات الـ API." },
      { step: "4", title: "Custom Hooks & Context", desc: "استخدم renderHook لفحص الخطافات المعزولة، وغلف المكونات بـ Providers لإعادة الاستخدام." }
    ]
  }
};
