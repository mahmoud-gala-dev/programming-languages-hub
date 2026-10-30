// src/data/sections/section19/topic1.js

export const topic1 = {
  id: "19.1",
  title: "أساسيات الاختبارات (Testing Fundamentals)",
  description: "المدخل الشامل لفلسفة اختبار البرمجيات في React؛ لماذا نختبر، هرم الاختبارات (Testing Pyramid)، الفروق بين اختبارات الوحدات والتكامل وEnd-to-End، تغطية الكود (Test Coverage)، وكيفية اختيار الاستراتيجية المثلى لكل مشروع.",
  subtopics: [
    {
      id: "19.1.a",
      title: "أهمية اختبار التطبيقات",
      englishTerm: "Why Testing Matters (واي تيستينغ ماتر)",
      description: "اختبار البرمجيات هو شبكة الأمان التي تضمن أن كود التطبيق يؤدي الوظائف المطلوبة منه بدقة متناهية، ويمنع حدوث الانتكاسات البرمجية (Regressions) عند إضافة ميزات جديدة أو إعادة هيكلة الكود (Refactoring). يمنح الفرق البرمجية الثقة لنشر التحديثات بسرعة ودون خوف من تعطل بيئة الإنتاج.",
      analogy: "يشبه أحزمة الأمان والوسائد الهوائية في السيارة؛ قد تقود لسنوات دون أن تحتاج إليها كل دقيقة، ولكن وجودها يضمن لك النجاة والثقة التامة عند القيادة بسرعات عالية في المنعطفات الصعبة.",
      whyItMatters: "التطبيقات الخالية من الاختبارات الآلية تكلف الشركات أضعاف الوقت والمال في إصلاح أخطاء يكتشفها العملاء أنفسهم، وتجعل المطورين يخشون تعديل أي سطر كود قديم خوفاً من كسر أجزاء غير متوقعة.",
      syntax: "// المبدأ الأساسي: اختبار السلوك والمخرجات المتوقعة\nexpect(actualOutput).toBe(expectedOutput);",
      simpleExample: `// استيراد دالة الفحص التأكيدي البسيطة
function sum(a, b) {
  // دالة بسيطة لجمع رقمين
  return a + b;
}

// اختبار برمجي يدوي يتحقق من صحة الدالة
function testSumFunction() {
  // المدخلات التجريبية
  const result = sum(2, 3);
  // النتيجة المتوقعة
  const expected = 5;

  // التحقق وطباعة النتيجة
  if (result === expected) {
    console.log('✅ اختبار دالة الجمع ناجح!');
  } else {
    console.error('❌ فشل الاختبار: متوقع 5 ولكن الناتج:', result);
  }
}

// تشغيل الاختبار
testSumFunction();`,
      advancedExample: [
        "// إطار اختبار مصغر (Mini Test Runner) يوضح آلية عمل بيئات الاختبار الحديثة من الصفر",
        "export function createTestRunner() {",
        "  // مصفوفة لتسجيل نتائج الاختبارات",
        "  const results = [];",
        "",
        "  // دالة التوقع expect",
        "  function expect(actual) {",
        "    return {",
        "      toBe(expected) {",
        "        if (actual !== expected) {",
        "          throw new Error('متوقع: ' + expected + ' ولكن القيمة الفعلية هي: ' + actual);",
        "        }",
        "      },",
        "      toEqual(expected) {",
        "        const isMatch = JSON.stringify(actual) === JSON.stringify(expected);",
        "        if (!isMatch) {",
        "          throw new Error('الكائنات غير متطابقة في القيم الداخلية');",
        "        }",
        "      }",
        "    };",
        "  }",
        "",
        "  // دالة تعريف الحالة الاختبارية test / it",
        "  function test(testName, testFn) {",
        "    try {",
        "      testFn();",
        "      results.push({ name: testName, status: 'PASSED', error: null });",
        "      console.log('  ✔️ نجح: ' + testName);",
        "    } catch (err) {",
        "      results.push({ name: testName, status: 'FAILED', error: err.message });",
        "      console.error('  ❌ فشل: ' + testName + ' -> ' + err.message);",
        "    }",
        "  }",
        "",
        "  return { expect, test, getSummary: () => results };",
        "}",
        "",
        "// تجربة الإطار المصغر على دالة معالجة سلة المشتريات",
        "export function runCartBenchmark() {",
        "  const runner = createTestRunner();",
        "  const { test, expect } = runner;",
        "",
        "  test('حساب الإجمالي مع الضريبة 15%', () => {",
        "    const subtotal = 100;",
        "    const taxRate = 0.15;",
        "    const total = subtotal + (subtotal * taxRate);",
        "    expect(total).toBe(115);",
        "  });",
        "",
        "  test('خصم كوبون التخفيض بشكل صحيح', () => {",
        "    const total = 200;",
        "    const discount = 50;",
        "    expect(total - discount).toBe(150);",
        "  });",
        "}"
      ].join('\n'),
      output: "يقوم مشغل الاختبار بتنفيذ الحالات البرمجية تلقائياً، وطباعة علامة النجاح الخضراء إذا كانت النتائج مطابقة للتوقعات، أو إظهار الخطأ وتفاصيله بدقة.",
      commonMistakes: "التعامل مع كتابة الاختبارات على أنها 'مضيعة للوقت' أو تأجيلها لما بعد إطلاق المشروع؛ مما يجعل كتابتها لاحقاً شبه مستحيلة بسبب تراكم الاعتماديات المعقدة.",
      bestPractices: "اكتب الاختبارات بالتزامن مع كتابة الميزات الجديدة، وركز على اختبار سيناريوهات الاستخدام الحقيقية بدلاً من اختبار تفاصيل التنفيذ الداخلي للمكونات.",
      visualDiagram: "Testing Safety Net:\nCode Changes ──► Automated Test Suite (Fast Check)\n                    ├── All Pass  ──► Deploy with 100% Confidence! 🚀\n                    └── Test Fail ──► Catches Bug in Dev Environment! 🛑"
    },
    {
      id: "19.1.b",
      title: "مفهوم Unit Testing",
      englishTerm: "Unit Testing Concept (يونيت تيستينغ)",
      description: "اختبار الوحدات هو فحص أصغر جزء برمجي معزول ومستقل في التطبيق للتأكد من قيامه بعمله كما ينبغي تماماً بمعزل عن باقي المنظومة؛ مثل اختبار دالة حسابية مساعدة (Helper Function)، أو Custom Hook، أو مكوّن واجهة بسيط بمعزل عن الاتصال بالشبكة أو قواعد البيانات.",
      analogy: "يشبه فحص صواميل ومسامير وشمعات الاحتراق للسيارة وهي موضوعة على منضدة الورشة قبل تركيبها داخل المحرك؛ إذا كانت الصامولة معيبة بمفردها، فلن تعمل بأمان داخل السيارة.",
      whyItMatters: "تتميز اختبارات الوحدات بسرعتها الفائقة جداً (تنفذ آلاف الاختبارات في ثوانٍ معدودة) ودقتها المتناهية في تحديد سطر الكود المسبب للخطأ بالضبط دون أي تشويش.",
      syntax: "test('وصف السلوك الفردي', () => {\n  expect(pureFunction(input)).toBe(expectedOutput);\n});",
      simpleExample: `// دالة تنسيق السعر بالعملة المحلية (وحدة برمجية نقية)
export function formatCurrency(amount, currency = 'SAR') {
  // التحقق من صحة المدخلات
  if (typeof amount !== 'number' || isNaN(amount)) {
    return '0.00 ' + currency;
  }
  // تنسيق الرقم لمنزلتين عشريتين
  return amount.toFixed(2) + ' ' + currency;
}

// اختبار الوحدة المعزول
export function runUnitCheck() {
  const result1 = formatCurrency(150.5);
  console.assert(result1 === '150.50 SAR', 'فشل اختبار الرقم العادي');

  const result2 = formatCurrency(null);
  console.assert(result2 === '0.00 SAR', 'فشل اختبار القيمة الفارغة');
  
  console.log('✅ اكتملت جميع اختبارات الوحدة لدالة formatCurrency بنجاح!');
}`,
      advancedExample: [
        "// اختبار وحدة معقد لدالة تنقية وتصفية صلاحيات المستخدمين المستندة على القواعد",
        "export function canUserPerformAction(user, requiredPermission) {",
        "  // التحقق من وجود المستخدم وصلاحياته",
        "  if (!user || !Array.isArray(user.permissions)) return false;",
        "  // المستخدم ذو صلاحية المشرف العام له الحق دائماً",
        "  if (user.role === 'SUPER_ADMIN') return true;",
        "  // فحص ما إذا كانت الصلاحية المطلوبة موجودة في مصفوفة الصلاحيات",
        "  return user.permissions.includes(requiredPermission);",
        "}",
        "",
        "// مجموعة اختبارات وحدة شاملة تغطي كافة الحالات الحدية (Edge Cases)",
        "export function testUserPermissionsUnitSuite() {",
        "  const testCases = [",
        "    {",
        "      desc: 'إعطاء إذن للمشرف العام حتى لو لم تكن الصلاحية مضافة صراحة',",
        "      user: { role: 'SUPER_ADMIN', permissions: [] },",
        "      perm: 'DELETE_USERS',",
        "      expected: true",
        "    },",
        "    {",
        "      desc: 'إعطاء إذن للمستخدم العادي الذي يملك الصلاحية المحددة',",
        "      user: { role: 'EDITOR', permissions: ['EDIT_POSTS', 'VIEW_POSTS'] },",
        "      perm: 'EDIT_POSTS',",
        "      expected: true",
        "    },",
        "    {",
        "      desc: 'حظر المستخدم الذي يفتقر للصلاحية المطلوبة',",
        "      user: { role: 'VIEWER', permissions: ['VIEW_POSTS'] },",
        "      perm: 'DELETE_POSTS',",
        "      expected: false",
        "    },",
        "    {",
        "      desc: 'معالجة حالة المستخدم غير المسجل (null/undefined)',",
        "      user: null,",
        "      perm: 'VIEW_POSTS',",
        "      expected: false",
        "    }",
        "  ];",
        "",
        "  testCases.forEach((tc, idx) => {",
        "    const actual = canUserPerformAction(tc.user, tc.perm);",
        "    if (actual === tc.expected) {",
        "      console.log('  [PASS] ' + (idx + 1) + '. ' + tc.desc);",
        "    } else {",
        "      console.error('  [FAIL] ' + (idx + 1) + '. ' + tc.desc);",
        "    }",
        "  });",
        "}"
      ].join('\n'),
      output: "يقوم الفحص بالتأكد من كل مسار برمجي (Branch) وحالة حدية، معزولاً عن أي واجهة مستخدم أو استدعاءات سيرفر.",
      commonMistakes: "محاولة استدعاء واجهات الـ API الحقيقية أو قواعد البيانات داخل اختبارات الوحدات؛ يجب دائماً عزل الوحدة واستبدال الاعتماديات الخارجية بمحاكيات وهمية (Mocks / Stubs).",
      bestPractices: "اجعل دوال الـ Unit Tests نقية ومستقلة، واختبر السيناريو الطبيعي (Happy Path)، وسيناريو الأخطاء (Error Path)، والمدخلات غير المتوقعة (Edge Cases).",
      visualDiagram: "Unit Testing Scope:\n┌───────────────────────────────────────────────┐\n│ Function / Pure Hook (Isolated Under Test)    │\n│  Input: [x] ──► [Logic] ──► Output: [y]       │\n└───────────────────────────────────────────────┘\n(Zero Network / Zero Database / Zero External UI)"
    },
    {
      id: "19.1.c",
      title: "مفهوم Integration Testing",
      englishTerm: "Integration Testing Concept (إنتيجريشن تيستينغ)",
      description: "اختبار التكامل يركز على فحص كيفية تفاعل وتعاون وحدات متعددة مع بعضها البعض كنظام متناسق؛ مثل اختبار نموذج إدخال كامل في React يضم حقولاً وأزراراً وحالة محلية، واستجابة النموذج لتأكيد المستخدم مع إرسال الطلب لمحاكي الشبكة وتحديث الواجهة بالبيانات الراجعة.",
      analogy: "يشبه تركيب المحرك مع صندوق التروس والمكابح وتجربتها معاً في غرفة الاختبار للتأكد من أن الضغط على دواسة الوقود ينقل الحركة فعلياً إلى العجلات بسلاسة.",
      whyItMatters: "تعتبر اختبارات التكامل هي البقعة السحرية (Sweet Spot) في عالم React؛ لأن كل مكوّن قد يعمل بمفرده بنجاح، لكن الخلل يظهر عند تمرير البيانات والخصائص بين المكونات والأبناء وسياق Context.",
      syntax: "// اختبار تكامل مكوّن مع حالة وشبكة وهمية\nrender(<ParentDashboard />);\nawait user.click(screen.getByRole('button', { name: 'حفظ' }));\nexpect(screen.getByText('تم الحفظ بنجاح')).toBeInTheDocument();",
      simpleExample: `// استيراد React مع مكوّنين يتكاملان معاً
import React, { useState } from 'react';

// مكوّن فرعي
function ToggleSwitch({ onToggle }) {
  return (
    <button onClick={onToggle} className="px-3 py-1 bg-sky-600 text-white rounded text-xs">
      تبديل الوضع
    </button>
  );
}

// المكون الحاوي المتكامل
export default function ThemeIntegrationDemo() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "bg-slate-900 text-white p-4" : "bg-white text-slate-900 p-4"}>
      <p>الوضع الحالي: {isDark ? 'داكن' : 'فاتح'}</p>
      {/* هنا اختبار التكامل: هل النقر على الابن يغير حالة الأب بنجاح؟ */}
      <ToggleSwitch onToggle={() => setIsDark(d => !d)} />
    </div>
  );
}`,
      advancedExample: [
        "// اختبار تكاملي يحاكي تدفق إضافة مهمة جديدة وتحديث واجهة القائمة وإشعار النجاح",
        "import React, { useState } from 'react';",
        "",
        "// مكوّن نموذج الإضافة",
        "function AddTaskForm({ onAdd }) {",
        "  const [title, setTitle] = useState('');",
        "  const handleSubmit = (e) => {",
        "    e.preventDefault();",
        "    if (!title.trim()) return;",
        "    onAdd(title);",
        "    setTitle('');",
        "  };",
        "  return (",
        "    <form onSubmit={handleSubmit} className='flex gap-2 mb-4'>",
        "      <input",
        "        type='text'",
        "        value={title}",
        "        onChange={e => setTitle(e.target.value)}",
        "        placeholder='عنوان المهمة الجديدة...'",
        "        className='bg-slate-800 border border-slate-700 px-3 py-1.5 rounded text-white text-sm'",
        "      />",
        "      <button type='submit' className='px-4 py-1.5 bg-emerald-600 rounded text-sm text-white font-bold'>",
        "        إضافة",
        "      </button>",
        "    </form>",
        "  );",
        "}",
        "",
        "// المكون المتكامل الذي يدير القائمة والإشعارات",
        "export function TaskManagerIntegration() {",
        "  const [tasks, setTasks] = useState(['مراجعة كود الأداء']);",
        "  const [feedback, setFeedback] = useState('');",
        "",
        "  const handleAddTask = (newTitle) => {",
        "    setTasks(prev => [...prev, newTitle]);",
        "    setFeedback('تمت إضافة المهمة: ' + newTitle);",
        "  };",
        "",
        "  return (",
        "    <div className='p-6 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 max-w-md'>",
        "      <h3 className='font-bold text-white mb-3'>مدير المهام المتكامل</h3>",
        "      <AddTaskForm onAdd={handleAddTask} />",
        "      {feedback && <div className='p-2 bg-emerald-950/80 text-emerald-400 text-xs rounded mb-3'>{feedback}</div>}",
        "      <ul className='space-y-1 text-sm'>",
        "        {tasks.map((task, i) => (",
        "          <li key={i} className='p-2 bg-slate-900 border border-slate-800 rounded'>{task}</li>",
        "        ))}",
        "      </ul>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "في اختبار التكامل، نختبر التدفق الحقيقي: يكتب المستخدم في حقل الإدخال، يضغط على الزر، فتتكامل دالة الأب وتُضاف المهمة للقائمة ويظهر إشعار النجاح في وثيقة الـ DOM.",
      commonMistakes: "الإفراط في عزل كل مكوّن حتى داخل اختبارات التكامل؛ إذا قمت بعمل Mock لكل مكوّن فرعي، فإنك تحول اختبار التكامل إلى اختبار وحدة مفرغ من قيمته.",
      bestPractices: "استخدم مكتبة React Testing Library في كتابة اختبارات التكامل، واختبر المكونات كما يتفاعل معها المستخدم الحقيقي تماماً.",
      visualDiagram: "Integration Testing:\n┌──────────────────────────────────────────────┐\n│ Component Tree (Parent + Children + State)   │\n│  [User Event] ──► [Child Button]             │\n│                     │                        │\n│                     ▼                        │\n│       [Updates Parent State] ──► [Renders UI]│\n└──────────────────────────────────────────────┘"
    },
    {
      id: "19.1.d",
      title: "مفهوم End-to-End Testing",
      englishTerm: "End-to-End Testing (E2E) (إند تو إند تيستينغ)",
      description: "اختبارات الطرف إلى الطرف (E2E) تقوم باختبار التطبيق الكامل بشكله النهائي كما يختبره الزائر الفعلي في متصفح حقيقي (مثل Chromium أو Firefox أو WebKit)؛ حيث يتصل بالخادم الحقيقي وقاعدة البيانات الحقيقية لاختبار رحلة مستخدم كاملة (مثل تسجيل الدخول، واختيار منتج، وإدخال بطاقة الائتمان، وإتمام الشراء).",
      analogy: "يشبه تجربة قيادة السيارة على الطرق السريعة المفتوحة في المدينة تحت إشارات المرور والمطر؛ للتأكد من أن كافة أنظمة السيارة تعمل معاً بنجاح في بيئة العالم الواقعي.",
      whyItMatters: "هي الاختبارات التي تمنح أعلى درجات الثقة على الإطلاق؛ فإذا نجح اختبار الـ E2E فأنت متأكد 100% أن المستخدم الحقيقي يستطيع إكمال معاملاته بنجاح.",
      syntax: "// تشغيل متصفح حقيقي عبر Playwright:\nawait page.goto('https://myapp.com/login');\nawait page.fill('#username', 'ahmed');\nawait page.click('button[type=\"submit\"]');\nawait expect(page).toHaveURL('/dashboard');",
      simpleExample: `// مثال مفاهيمي لكيفية كتابة كود E2E يختبر مسار تسجيل الدخول
export const e2eConceptualSnippet = \`
// اختبار رحلة تسجيل الدخول الكاملة عبر Playwright
test('تسجيل دخول ناجح والانتقال للوحة التحكم', async ({ page }) => {
  // 1. التوجه إلى رابط الصفحة الحقيقي
  await page.goto('http://localhost:5173/login');

  // 2. تعبئة حقول الإدخال
  await page.getByLabel('البريد الإلكتروني').fill('admin@test.com');
  await page.getByLabel('كلمة المرور').fill('SecurePassword123!');

  // 3. النقر على زر الدخول
  await page.getByRole('button', { name: 'تسجيل الدخول' }).click();

  // 4. التحقق من انتقال الرابط وظهور رسالة الترحيب
  await expect(page).toHaveURL('http://localhost:5173/dashboard');
  await expect(page.getByText('مرحباً بك يا مدير النظام')).toBeVisible();
});
\`;`,
      advancedExample: [
        "// اختبار E2E شامل لرحلة تجارة إلكترونية كاملة: البحث، الإضافة للسلة، وإتمام الطلب",
        "export const e2eEcommerceFlowSnippet = [",
        "  'import { test, expect } from \"@playwright/test\";',",
        "  '',",
        "  'test.describe(\"رحلة الشراء الكاملة للمستخدم\", () => {',",
        "  '  test(\"البحث عن منتج وإضافته للسلة وإنشاء الفاتورة\", async ({ page }) => {',",
        "  '    // 1. فتح المتجر',",
        "  '    await page.goto(\"/\");',",
        "  '    await expect(page).toHaveTitle(/متجر المستقبل/);',",
        "  '',",
        "  '    // 2. البحث عن لابتوب',",
        "  '    const searchInput = page.getByPlaceholder(\"ابحث عن منتج...\");',",
        "  '    await searchInput.fill(\"MacBook Pro\");',",
        "  '    await searchInput.press(\"Enter\");',",
        "  '',",
        "  '    // 3. اختيار أول منتج من النتائج',",
        "  '    const productCard = page.locator(\".product-card\").first();',",
        "  '    await expect(productCard).toContainText(\"MacBook Pro\");',",
        "  '    await productCard.getByRole(\"button\", { name: \"أضف للسلة\" }).click();',",
        "  '',",
        "  '    // 4. التحقق من تحديث شارة السلة العلوية',",
        "  '    const cartBadge = page.locator(\"#cart-count\");',",
        "  '    await expect(cartBadge).toHaveText(\"1\");',",
        "  '',",
        "  '    // 5. التوجه للدفع والتحقق من المجموع',",
        "  '    await page.goto(\"/checkout\");',",
        "  '    await expect(page.locator(\"#checkout-total\")).not.toBeEmpty();',",
        "  '  });',",
        "  '});'",
        "].join('\\n');"
      ].join('\n'),
      output: "يفتح Playwright متصفحاً حقيقياً في الخلفية، ويقوم بالنقر والكتابة ومحاكاة الإنسان تماماً، ويسجل فيديو وصوراً لكل خطوة.",
      commonMistakes: "كتابة مئات اختبارات الـ E2E لتغطية كل تفصيلة صغيرة في التطبيق؛ اختبارات E2E بطيئة جداً في التنفيذ وعرضة للتذبذب (Flaky) بسبب تأخر الشبكة؛ استخدمها فقط للرحلات الحرجة للمستخدم (Critical User Journeys).",
      bestPractices: "حافظ على تطبيق هرم الاختبارات؛ اجعل قاعدة الهرم العريضة لاختبارات الوحدات السريعة، وأوسطه لاختبارات التكامل، وقمة الهرم لاختبارات E2E للوظائف الأساسية فقط.",
      visualDiagram: "Testing Pyramid:\n        /\\     E2E Tests (Few, Slow, High Confidence, Full Browser)\n       /  \\    ───────────────────────────────────────────────────\n      /    \\   Integration Tests (Balanced, Sweet Spot for React)\n     /______\\  Unit Tests (Many, Ultra Fast, Isolated Pure Logic)"
    },
    {
      id: "19.1.e",
      title: "الفرق بين الاختبارات اليدوية والآلية",
      englishTerm: "Manual vs Automated Testing (مانيوال فيرسس أوتوميتد)",
      description: "المقارنة بين قيام الإنسان بفتح المتصفح والنقر على الأزرار يدوياً في كل مرة يتم فيها تعديل الكود، وبين كتابة كود برمجي (Automated Scripts) يقوم بفتح المتصفح ومحاكاة السيناريوهات ومقارنة النتائج في أجزاء من الثانية تلقائياً عند كل عملية حفظ أو تعديل أو دمج للكود (CI/CD Pipeline).",
      analogy: "يشبه الفارق بين حراثة حقل قمح ضخم يدوياً بالمعول والمجرفة كل أسبوع، وبين استخدام جرار زراعي آلي حديث يقوم بحراثة الحقل بأكمله في نصف ساعة وبدقة متناهية.",
      whyItMatters: "مع نمو المشروع، يصبح الاختبار اليدوي لكل مسارات التطبيق أمراً مستحيلاً بشرياً ومكلفاً جداً، بينما الاختبار الآلي يمكن تشغيله مليون مرة دون أي تكلفة إضافية أو تعب.",
      syntax: "// تشغيل جميع الاختبارات آلياً عبر سطر الأوامر:\nnpm test -- --run",
      simpleExample: `// مثال يوضح كيف ينفذ الحاسوب التحقق الآلي في 2 مللي ثانية
const accounts = [
  { id: 1, balance: 500 },
  { id: 2, balance: 1200 }
];

function transfer(fromId, toId, amount) {
  const from = accounts.find(a => a.id === fromId);
  const to = accounts.find(a => a.id === toId);
  if (from.balance < amount) throw new Error('الرصيد غير كاف');
  from.balance -= amount;
  to.balance += amount;
}

// اختبار آلي فوري يغنيك عن فتح واجهة البنك يدوياً
function runAutomatedTest() {
  transfer(1, 2, 200);
  console.assert(accounts[0].balance === 300, 'خطأ في رصيد المرسل');
  console.assert(accounts[1].balance === 1400, 'خطأ في رصيد المستلم');
  console.log('✅ نجح التحقق الآلي من الحوالة!');
}

runAutomatedTest();`,
      advancedExample: [
        "// جدول مقارنة هندسي مبرمج يوضح الفروق الجوهرية ومواضع استخدام كل نوع",
        "export const TESTING_COMPARISON = [",
        "  {",
        "    aspect: 'سرعة التنفيذ',",
        "    manual: 'بطيئة جداً (ساعات وأيام لكل ميزة)',",
        "    automated: 'فائقة السرعة (ثوانٍ ودقائق عبر المعالج)'",
        "  },",
        "  {",
        "    aspect: 'التكرار والموثوقية',",
        "    manual: 'عرضة للخطأ البشري والنسيان والسهو',",
        "    automated: 'دقيقة 100% وتتكرر بنفس الصرامة دائماً'",
        "  },",
        "  {",
        "    aspect: 'التكلفة بمرور الوقت',",
        "    manual: 'تكلفة متصاعدة وخطية مع كل ميزة جديدة',",
        "    automated: 'استثمار أولي يتبعه تكلفة تشغيل شبه صفرية'",
        "  },",
        "  {",
        "    aspect: 'أفضل استخدام',",
        "    manual: 'الاختبار الاستكشافي وتقييم الجماليات وتجربة UX',",
        "    automated: 'منع الانتكاسات (Regressions)، المنطق الحسابي، ومسارات الدفع'",
        "  }",
        "];",
        "",
        "export function printComparisonMatrix() {",
        "  console.table(TESTING_COMPARISON);",
        "}"
      ].join('\n'),
      output: "جدول مقارنة تفصيلي يوضح تفوق الاختبارات الآلية في فحص المنطق والتكرار ومنع الأخطاء، مع بقاء الاختبار اليدوي لأغراض التقييم الجمالي والاستكشافي.",
      commonMistakes: "الاعتقاد بأن الاختبارات الآلية تلغي الحاجة للاختبار البشري تماماً؛ الاختبار الآلي يتحقق فقط مما كُتب له، بينما يحتاج التطبيق دائماً لنظرة بشرية استكشافية لفحص التناسق البصري وسلاسة الشعور بالتجربة.",
      bestPractices: "أتمت كل ما هو قابل للأتمتة (منطق الحسابات، صلاحيات الأمان، رحلات الشراء الحيوية)، واترك للعين البشرية استكشاف الميزات الجديدة والتأكد من ملاءمتها للمستخدم.",
      visualDiagram: "Manual vs Automated Testing Over Time:\nCost / Effort:\nManual:    / (Grows exponentially with project size!)\nAutomated: _/‾‾‾ (High upfront investment, then near-flat maintenance!)"
    },
    {
      id: "19.1.f",
      title: "مفهوم Test Coverage",
      englishTerm: "Test Coverage & Metrics (تيست كفردج)",
      description: "تغطية الاختبارات هي مقياس كمي (يُعبر عنه بنسبة مئوية من 0% إلى 100%) يُظهر كمية أسطر الكود والمسارات البرمجية التي تم تنفيذها وتغطيتها بواسطة مجموعة الاختبارات الآلية. تشمل تغطية الأسطر (Line Coverage)، وتغطية الدوال (Function Coverage)، وتغطية الشروط والتفرعات (Branch Coverage).",
      analogy: "يشبه دهان جدار الغرفة؛ النسبة المئوية للتغطية تخبرك كم متراً مربعاً من الجدار تم طلاؤه بالفرشاة، وكم بقعة لا تزال بيضاء لم تصلها يد الدهان بعد.",
      whyItMatters: "تكشف لك الأماكن العمياء (Blind Spots) في الكود التي نسيت اختبارها، مثل حالات معالجة الأخطاء (catch blocks) أو الشروط الاستثنائية التي قد تنهار في بيئة الإنتاج.",
      syntax: "// تشغيل تقرير التغطية في Vitest:\nnpx vitest run --coverage",
      simpleExample: `// مثال يوضح كيف تكشف التغطية فرعاً شرطياً غير مختبر (Branch Coverage)
function calculateTierDiscount(amount, isVip) {
  // الفرع 1: المدخلات غير الصالحة
  if (amount <= 0) return 0;

  // الفرع 2: عملاء VIP
  if (isVip) {
    return amount * 0.20; // خصم 20%
  }

  // الفرع 3: العملاء العاديين (إذا لم نختبره تكون التغطية ناقصة!)
  return amount * 0.05; // خصم 5%
}

// اختبار يغطي الفرع 2 فقط (تغطية 66% فقط من الفروع!)
console.assert(calculateTierDiscount(100, true) === 20, 'اختبار VIP');
// ⚠️ ينقصنا اختبار isVip = false واختبار amount <= 0 لتحقيق 100% Branch Coverage!`,
      advancedExample: [
        "// هيكل تكوين تقرير التغطية في Vitest (v8 coverage provider) وتحديد حدود الفشل (Thresholds)",
        "/* داخل vite.config.js أو vitest.config.js:",
        "export default defineConfig({",
        "  test: {",
        "    coverage: {",
        "      provider: 'v8', // محرك V8 المدمج في Node لسرعة خارقة",
        "      reporter: ['text', 'html', 'lcov'],",
        "      // وضع حد أدنى للتغطية؛ يفشل الـ Build إذا انخفضت النسبة عنه!",
        "      thresholds: {",
        "        statements: 80,",
        "        branches: 75,",
        "        functions: 80,",
        "        lines: 80",
        "      },",
        "      exclude: [",
        "        'node_modules/',",
        "        'src/main.jsx',",
        "        '**/*.d.ts'",
        "      ]",
        "    }",
        "  }",
        "});",
        "*/",
        "",
        "// دالة توضيحية لتقرير التغطية",
        "export function evaluateCoverageHealth(coveragePercentage) {",
        "  if (coveragePercentage >= 80) {",
        "    return { status: 'صحي وممتاز', color: 'emerald' };",
        "  } else if (coveragePercentage >= 60) {",
        "    return { status: 'مقبول ويحتاج لتحسين', color: 'amber' };",
        "  } else {",
        "    return { status: 'خطر - مناطق غير مؤمنة', color: 'rose' };",
        "  }",
        "}"
      ].join('\n'),
      output: "يُنشئ محرك الاختبار تقريراً تفاعلياً (coverage/index.html) يُبرز أسطر الكود غير المختبرة باللون الأحمر، لتعرف فوراً ما يجب اختباره.",
      commonMistakes: "الهوس بالوصول إلى 100% Test Coverage بأي ثمن؛ كتابة اختبارات سخيفة لمجرد رفع النسبة يؤدي إلى اختبار تفاصيل تافهة وزيادة عبء الصيانة دون تقديم أي قيمة أمان حقيقية. النسبة المثالية في كبرى الشركات هي بين 75% و 85%.",
      bestPractices: "ركز على تحقيق 100% Branch Coverage لمنطق الأعمال المعقد (Business Logic) ومسارات المصادقة والمالية، بدلاً من السعي الأعمى وراء التغطية الشاملة لملفات التنسيق والواجهات الثابتة.",
      visualDiagram: "Test Coverage Report Dimensions:\nStatements: [██████████░░] 85%\nBranches:   [████████░░░░] 76% ◄ CRITICAL: Catches unhandled if/else!\nFunctions:  [████████████] 95%\nLines:      [██████████░░] 84%"
    },
    {
      id: "19.1.g",
      title: "اختيار استراتيجية الاختبار المناسبة",
      englishTerm: "Choosing the Right Testing Strategy (تيستينغ ستراتيجي)",
      description: "الخطة الشاملة التي يضعها الفريق لتحديد: ماذا نختبر، وما هي الأدوات المستخدمة، وكيف نوزع الجهد والميزانية عبر أنواع الاختبارات المختلفة وفقاً لطبيعة المشروع (مثل تطبيق تجارة إلكترونية، أو لوحة تحكم داخلية، أو مكتبة مكونات عامة 오픈소스).",
      analogy: "يشبه خطة تأمين المبنى؛ بنك الذهب يحتاج لكاميرات ليزر وأبواب مصفحة وخزائن محصنة (أقصى اختبارات)، بينما كشك الزهور الصغير في الحديقة يكفيه قفل جيد وجرس باب بسيط.",
      whyItMatters: "بدون استراتيجية واضحة، ستضيع جهود الفريق في كتابة اختبارات بطيئة أو متكررة، مما يبطئ عجلة التطوير ويولد إحباطاً بين المطورين.",
      syntax: "// نموذج مصفوفة استراتيجية الاختبار (Testing Matrix)",
      simpleExample: `// مثال على تحديد أولوية الاختبار بناءً على أهمية الميزة
export function getTestingPriority(featureRisk, changeFrequency) {
  // إذا كانت الميزة عالية الخطورة (مثل الدفع أو المصادقة)
  if (featureRisk === 'HIGH') {
    return 'إلزامية: اختبارات وحدة + اختبارات تكامل + سيناريو E2E كامل';
  }
  // إذا كانت الميزة متكررة التغيير والواجهة تجريبية
  if (changeFrequency === 'FAST') {
    return 'اختبارات تكامل خفيفة للسلوك الأساسي فقط لتجنب كسر التست عند تعديل UI';
  }
  return 'اختبارات وحدة للمنطق المساعد';
}

console.log('استراتيجية بوابة الدفع:', getTestingPriority('HIGH', 'LOW'));`,
      advancedExample: [
        "// وثيقة استراتيجية الاختبار التفاعلية التي توجه المطور لاختيار نوع الاختبار الملائم",
        "export function decideTestTypeForComponent(criteria) {",
        "  const { isPureLogic, isUserInteractive, isCriticalPaymentFlow } = criteria;",
        "",
        "  if (isCriticalPaymentFlow) {",
        "    return {",
        "      strategy: 'E2E with Playwright + Integration with RTL',",
        "      reason: 'أي خلل في مسار الدفع يعني خسارة مالية مباشرة ويجب اختباره في متصفح حقيقي.',",
        "      priority: 1",
        "    };",
        "  }",
        "",
        "  if (isPureLogic) {",
        "    return {",
        "      strategy: 'Unit Test with Vitest',",
        "      reason: 'المنطق النقي والحسابي هو الأسرع والأرخص في اختبارات الوحدات المنعزلة.',",
        "      priority: 2",
        "    };",
        "  }",
        "",
        "  if (isUserInteractive) {",
        "    return {",
        "      strategy: 'Integration with React Testing Library',",
        "      reason: 'فحص تفاعل المستخدم وتحديث الحالة والرسائل هو تخصص RTL الأمثل.',",
        "      priority: 3",
        "    };",
        "  }",
        "",
        "  return {",
        "    strategy: 'Smoke Test / No dedicated test needed',",
        "    reason: 'المكونات الساكنة التي لا تحتوي على أي منطق لا تستحق تكلفة كتابة وتحديث التيست.',",
        "    priority: 4",
        "  };",
        "}"
      ].join('\n'),
      output: "يقدم توجيهاً واضحاً يمنع إهدار الوقت على اختبار المكونات الساكنة البسيطة ويوجه التركيز نحو مسارات الأعمال الحساسة.",
      commonMistakes: "تطبيق استراتيجية 'نسخ ولصق' واحدة على كل المشاريع؛ فمكتبة UI عامة مثل shadcn تحتاج 90% اختبارات تكامل، بينما خوارزمية ذكاء اصطناعي تحتاج 95% اختبارات وحدة، وموقع تجارة إلكتروني يحتاج تركيزاً قوياً على E2E.",
      bestPractices: "اعتمد مبدأ 'Testing Trophy' (ميدالية الاختبار التي اقترحها كينت سي دودز): ركز الجهد الأكبر على اختبارات التكامل (Integration Tests) فهي تمنح أعلى عائد على الاستثمار (ROI) في مشاريع React الحديثة.",
      visualDiagram: "Kent C. Dodds' Testing Trophy for React:\n          /\\      [E2E: Playwright]\n        /    \\    ─────────────────\n       / INTEGRATION \\  ◄ THE BIGGEST BODY! (RTL + MSW)\n      /________________\\ ─────────────────\n       [UNIT: Vitest]   (Helper functions, hooks)\n       [STATIC: ESLint/TS] (Type checking & linting)"
    }
  ],
  quizzes: [
    {
      id: "q19.1.1",
      question: "ما الفرق الجوهري بين Unit Testing و Integration Testing في تطبيقات React؟",
      options: [
        "اختبارات الوحدات تُكتب بلغة بايثون، بينما اختبارات التكامل تُكتب بـ JavaScript.",
        "اختبار الوحدات يفحص دالة أو مكوّن بشكل معزول تماماً عن أي اعتماديات، بينما اختبار التكامل يفحص تفاعل مكونات متعددة وتبادل البيانات بينها كنظام متكامل.",
        "اختبار التكامل لا يمكن تشغيله إلا على متصفح هاتف ذكي حقيقي.",
        "اختبار الوحدات يستغرق ساعات طويلة، بينما اختبار التكامل يستغرق ثوانٍ."
      ],
      correctAnswer: 1,
      explanation: "اختبارات الوحدات تعزل الكود عن أي عوامل خارجية، بينما اختبارات التكامل تركز على التحقق من أن الأجزاء المختلفة تتناغم وتتواصل مع بعضها البعض بنجاح."
    },
    {
      id: "q19.1.2",
      question: "لماذا يُعتبر السعي الأعمى وراء تحقيق نسبة 100% في Test Coverage ممارسة غير مستحبة هندسياً؟",
      options: [
        "لأن محركات الاختبار تتعطل تلقائياً عند تجاوز 90%.",
        "لأنه يؤدي إلى استهلاك وقت الفريق في كتابة اختبارات لتفاصيل تنفيذ تافهة أو أكواد ساكنة، مما يزيد عبء الصيانة عند تعديل التصميم دون تقديم قيمة أمان حقيقية.",
        "لأن نسبة 100% تمنع نشر التطبيق على خوادم الإنتاج.",
        "لأن Google تفرض غرامات على المشاريع التي تحقق 100% تغطية."
      ],
      correctAnswer: 1,
      explanation: "الهدف من الاختبارات هو الثقة وليس الأرقام المجردة؛ تغطية 80% من منطق الأعمال الحرج والمسارات الخطرة أهم بكثير من تغطية 100% تتضمن مكونات ساكنة أو تافهة."
    },
    {
      id: "q19.1.3",
      question: "ما الميزة الكبرى لنموذج Testing Trophy مقارنة بنموذج Testing Pyramid التقليدي في React؟",
      options: [
        "أنه يلغي اختبارات الأمان تماماً.",
        "أنه يضع ثقل الاستثمار الأكبر على اختبارات التكامل (Integration Tests) لأنها تعطي أعلى عائد على الاستثمار (ROI) وتختبر التطبيق كما يستخدمه العميل الفعلي.",
        "أنه يتطلب استخدام لغة C++ في كتابة الكود.",
        "أنه يعتمد فقط على الاختبارات اليدوية."
      ],
      correctAnswer: 1,
      explanation: "في بيئة React، غالباً ما تفشل التطبيقات عند نقاط الاتصال وتفاعل المكونات مع الـ State والشبكة، لذلك تعطي اختبارات التكامل أعلى درجات الثقة بأقل تكلفة صيانة مقارنة بـ E2E البطيء أو Unit فائق العزل."
    }
  ],
  exercise: {
    title: "تمرين عملي: بناء دالة فحص تأكيدي مخصصة مع تقرير نجاح/فشل ملون",
    description: "قم بإنشاء دالة testSuite بسيطة تختبر دالة لحساب خصم متجر، وتتحقق من 3 حالات مختلفة (خصم صحيح، قيمة سالبة، قيمة تتجاوز الحد)، وتطبع تقريراً ملوناً في وحدة التحكم يوضح عدد الاختبارات الناجحة والفاشلة.",
    hints: [
      "أنشئ دالة calculateDiscount(price, percentage).",
      "استخدم مصفوفة لتسجيل نتائج الاختبارات وحالات الفشل.",
      "اطبع النتائج باستخدام console.log و console.error."
    ],
    solution: `// الدالة الخاضعة للاختبار
export function calculateDiscount(price, percentage) {
  if (price < 0 || percentage < 0) return 0;
  if (percentage > 100) return 0;
  return price - (price * (percentage / 100));
}

// دالة مجموعة الاختبارات
export function runDiscountSuite() {
  const tests = [
    { name: 'حساب خصم 20% على 100', run: () => calculateDiscount(100, 20) === 80 },
    { name: 'معالجة السعر السالب بإرجاع 0', run: () => calculateDiscount(-50, 10) === 0 },
    { name: 'معالجة نسبة الخصم الأكبر من 100%', run: () => calculateDiscount(100, 150) === 0 }
  ];

  let passed = 0;
  let failed = 0;

  console.log('🧪 بدء تشغيل مجموعة اختبارات الخصم...');
  tests.forEach((t, i) => {
    try {
      if (t.run()) {
        console.log('  ✅ [' + (i + 1) + '] نجح: ' + t.name);
        passed++;
      } else {
        console.error('  ❌ [' + (i + 1) + '] فشل: ' + t.name);
        failed++;
      }
    } catch (e) {
      console.error('  💥 [' + (i + 1) + '] خطأ استثنائي: ' + t.name, e);
      failed++;
    }
  });

  console.log('📊 النتيجة النهائية: ' + passed + ' ناجح | ' + failed + ' فاشل');
}`
  },
  infographic: {
    title: "خريطة طريق فلسفة واختيار استراتيجيات الاختبار",
    subtitle: "الدليل الشامل للتمييز بين مستويات الاختبار الآلي في مشاريع الويب",
    steps: [
      { step: "1", title: "Unit Tests", desc: "اختبارات الوحدات المنعزلة للدوال النقية، والـ Hooks، والمنطق الحسابي بدقة متناهية وسرعة ميلي ثانية." },
      { step: "2", title: "Integration Tests", desc: "اختبارات التكامل بين المكونات والحالة والشبكة الوهمية، وتمثل حجر الزاوية الأكثر قيمة في React." },
      { step: "3", title: "End-to-End (E2E)", desc: "محاكاة تصفح حقيقي بالكامل على Playwright للتحقق من مسارات الدفع والتسجيل الحيوية." },
      { step: "4", title: "Coverage & Strategy", desc: "تحقيق توازن التغطية (75%-85%) والتركيز على مسارات الأعمال الأكثر خطورة وأهمية." }
    ]
  }
};
