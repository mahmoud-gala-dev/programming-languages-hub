// src/data/sections/section19/topic2.js

export const topic2 = {
  id: "19.2",
  title: "الاختبارات باستخدام Vitest (Testing with Vitest)",
  description: "الدليل الشامل لاستخدام Vitest؛ أسرع وأحدث إطار اختبارات لوحدات وتكامل JavaScript و React مبني على بنية Vite التحتية، وتثبيته، واستخدام دوال describe و it و expect، والتعامل مع Mocks و Spies، واختبار الأكواد غير المتزامنة، وتوليد تقارير التغطية المتقدمة.",
  subtopics: [
    {
      id: "19.2.a",
      title: "تثبيت Vitest",
      englishTerm: "Installing Vitest (إنستولينغ فاي-تيست)",
      description: "Vitest هو إطار اختبارات الجيل القادم فائق السرعة، مصمم ليتكامل أصلياً مع مشاريع Vite. يتشارك مع Vite في نفس ملف الإعدادات والتحويلات والمكونات الإضافية (Plugins)، مما يجعله بديلاً خفيفاً وعصرياً لمكتبة Jest القديمة التي كانت تتطلب إعدادات Babel و Webpack معقدة وبطيئة.",
      analogy: "يشبه استخدام محرك نفاث يعمل بنفس الوقود ونظام التبريد الخاص بطائرتك، بدلاً من شراء محرك ديزل قديم يحتاج إلى محولات ومولدات إضافية معقدة ليثبت في الطائرة.",
      whyItMatters: "يوفر سرعة تنفيذ فورية (Instant HMR أثناء تشغيل التست)، ويدعم TypeScript و JSX فوراً بدون أي تكوين إضافي، ويتطابق بنسبة 99% مع دوال Jest البرمجية مما يسهل الانتقال إليه.",
      syntax: "# تثبيت Vitest وحزم الدعم اللازمة كمكتبات تطوير:\nnpm install -D vitest @testing-library/react @testing-library/jest-dom jsdom",
      simpleExample: `// مثال على أمر تثبيت الحزم وإضافتها إلى ملف package.json
/*
npm install -D vitest jsdom
*/

// إضافة أمر التشغيل السريع داخل قسم scripts في package.json
export const packageJsonScripts = {
  scripts: {
    // تشغيل الاختبارات في وضع المراقبة التفاعلي السريع (Watch Mode)
    "test": "vitest",
    // تشغيل الاختبارات لمرة واحدة فقط (مفيد لـ CI/CD)
    "test:run": "vitest run",
    // تشغيل الاختبارات مع توليد تقرير التغطية
    "test:coverage": "vitest run --coverage"
  }
};`,
      advancedExample: [
        "// سكربت فحص وتأكيد سلامة تثبيت Vitest والبيئة التجريبية في المشروع",
        "import { execSync } from 'child_process';",
        "import fs from 'fs';",
        "import path from 'path';",
        "",
        "export function verifyVitestInstallation() {",
        "  console.log('🔍 التحقق من جاهزية بيئة Vitest...');",
        "  ",
        "  // 1. فحص وجود الحزمة داخل ملف package.json",
        "  const pkgPath = path.resolve('package.json');",
        "  if (fs.existsSync(pkgPath)) {",
        "    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));",
        "    const hasVitest = (pkg.devDependencies && pkg.devDependencies.vitest) || (pkg.dependencies && pkg.dependencies.vitest);",
        "    ",
        "    if (hasVitest) {",
        "      console.log('✅ تم العثور على مكتبة Vitest بنجاح!');",
        "    } else {",
        "      console.warn('⚠️ حزمة Vitest غير مسجلة في package.json. قم بتثبيتها عبر: npm i -D vitest');",
        "    }",
        "  }",
        "",
        "  // 2. التحقق من رقم الإصدار المثبت عبر تشغيل الأمر السريع",
        "  try {",
        "    const version = execSync('npx vitest --version', { encoding: 'utf8' }).trim();",
        "    console.log('🚀 إصدار Vitest العامل حالياً:', version);",
        "  } catch (err) {",
        "    console.error('تعذر استدعاء vitest عبر npx:', err.message);",
        "  }",
        "}"
      ].join('\n'),
      output: "يتم تثبيت الحزم وتسجيل أمر 'npm test' في package.json، وعند تشغيله تظهر لوحة Vitest التفاعلية في أجزاء من الثانية.",
      commonMistakes: "محاولة تثبيت وإعداد Jest و ts-jest و babel-jest داخل مشروع مبني بواسطة Vite؛ هذا يُحدث تضارباً في معالجة الملفات واختلافاً في طريقة عمل الـ Plugins بين التطوير والاختبار. Vitest هو الخيار الطبيعي والأنسب لـ Vite.",
      bestPractices: "ثبت حزمة `jsdom` أو `happy-dom` مع Vitest لمحاكاة بيئة المتصفح وشجرة الـ DOM عند اختبار مكونات React.",
      visualDiagram: "Vitest vs Jest in Vite Projects:\nJest:   [Vite Project] ──► Needs Babel/ts-jest ──► Duplicate Config ──► Slower startup\nVitest: [Vite Project] ──► Uses SAME vite.config.js ──► 0 Config ──► 10x Faster! ⚡"
    },
    {
      id: "19.2.b",
      title: "إعداد بيئة الاختبار",
      englishTerm: "Configuring the Test Environment (كونفيجرينغ فاي-تيست)",
      description: "تكوين ملف إعدادات Vitest (عادة داخل `vite.config.js` أو `vitest.config.js`)؛ يتضمن ذلك تحديد بيئة المحاكاة (مثل `environment: 'jsdom'`)، وتحديد ملف التهيئة التلقائي (setupFiles)، وتفعيل الدوال العامة (globals: true) لتجنب استيراد describe و it و expect يدوياً في كل ملف اختبار.",
      analogy: "يشبه إعداد طاولة المختبر؛ تجهيز الأنابيب والمحاليل المعقمة وضبط المجهر وتوفير الدفاتر قبل وصول الباحث لبدء التجارب.",
      whyItMatters: "يضمن تشغيل اختبارات React في بيئة شبيهة بالمتصفح، ويوفر دوال التأكيد الإضافية مثل toBeInTheDocument() و toHaveClass() بشكل تلقائي.",
      syntax: "// في vite.config.js:\n/// <reference types=\"vitest\" />\nexport default defineConfig({\n  test: {\n    globals: true,\n    environment: 'jsdom',\n    setupFiles: './src/test/setup.js',\n  },\n});",
      simpleExample: `// تكوين ملف vite.config.js لدعم Vitest مع بيئة jsdom
// استيراد دالة التعريف من vite
import { defineConfig } from 'vite';
// استيراد إضافة React
import react from '@vitejs/plugin-react';

// تصدير الإعدادات المدمجة للاختبارات والبناء
export default defineConfig({
  plugins: [react()],
  // قسم إعدادات الاختبارات الخاص بـ Vitest
  test: {
    // جعل دوال الاختبار مثل test و expect عامة بدون الحاجة لاستيرادها
    globals: true,
    // محاكاة شجرة الـ DOM للمتصفح عبر مكتبة jsdom
    environment: 'jsdom',
    // ملف التشغيل الأولي لإضافة matchers إضافية
    setupFiles: './src/test/setup.js'
  }
});`,
      advancedExample: [
        "// ملف التهيئة setup.js المتقدم لتوسيع قدرات الفحص وتنظيف بيئة العمل بعد كل اختبار",
        "// src/test/setup.js",
        "",
        "// استيراد matchers المخصصة للـ DOM مثل toBeInTheDocument و toHaveValue",
        "import '@testing-library/jest-dom';",
        "// استيراد دوال دورة حياة الاختبارات من vitest",
        "import { afterEach, vi } from 'vitest';",
        "// استيراد دالة التنظيف التلقائي من React Testing Library",
        "import { cleanup } from '@testing-library/react';",
        "",
        "// تنظيف شجرة الـ DOM وإزالة المكونات المعروضة بعد كل اختبار لمنع تسريب الحالة",
        "afterEach(() => {",
        "  cleanup();",
        "  // إعادة تعيين كافة الـ Mocks للوضع الافتراضي",
        "  vi.clearAllMocks();",
        "});",
        "",
        "// محاكاة واجهات المتصفح التي لا تدعمها jsdom افتراضياً (مثل window.matchMedia)",
        "Object.defineProperty(window, 'matchMedia', {",
        "  writable: true,",
        "  value: vi.fn().mockImplementation(query => ({",
        "    matches: false,",
        "    media: query,",
        "    onchange: null,",
        "    addListener: vi.fn(),",
        "    removeListener: vi.fn(),",
        "    addEventListener: vi.fn(),",
        "    removeEventListener: vi.fn(),",
        "    dispatchEvent: vi.fn(),",
        "  })),",
        "});"
      ].join('\n'),
      output: "بيئة اختبار جاهزة ومستقرة تماماً، تدعم فحص عناصر الـ DOM والتنظيف التلقائي بين كل اختبار والآخر بدون أي تداخل.",
      commonMistakes: "نسيان استدعاء `cleanup()` في ملف الإعداد أو عدم استخدام jsdom؛ يؤدي ذلك إما لظهور خطأ 'document is not defined' أو بقاء عناصر الاختبار السابق في الصفحة مما يُفشل الاختبار التالي.",
      bestPractices: "استخدم `setupFiles` مركزي واحد لتعريف محاكيات المتصفح العامة (window.matchMedia و ResizeObserver) لضمان عدم تعطل المكونات التي تستخدمها.",
      visualDiagram: "Vitest Setup Pipeline:\nvite.config.js (environment: 'jsdom', globals: true)\n       │\n       ▼\nsrc/test/setup.js (Loads @testing-library/jest-dom + afterEach cleanup)\n       │\n       ▼\nExecutes *.test.jsx files with full DOM support!"
    },
    {
      id: "19.2.c",
      title: "كتابة أول اختبار",
      englishTerm: "Writing Your First Test (فيرست تيست)",
      description: "الخطوة الأولى في عالم الاختبارات؛ إنشاء ملف ينتهي بـ `.test.js` أو `.spec.jsx`، واستخدام دالة `test()` أو `it()` لتحديد السلوك المستهدف، ثم استدعاء دالة التأكيد `expect()` لمقارنة القيمة الفعلية مع القيمة المتوقعة باستخدام المقارنات (Matchers).",
      analogy: "يشبه كتابة أول سطر في دفتر التجارب العلمية: 'الفرضية: خلط المحلول أ مع ب ينتج سائلاً أزرق'، ثم إجراء التجربة ورؤية اللون الأزرق وتأكيد صحة الفرضية.",
      whyItMatters: "يكسر حاجز الخوف من أدوات الاختبار، ويعلمك النمط العالمي لكتابة أي حالة فحص برمجية: Arrange (التجهيز) ثم Act (التنفيذ) ثم Assert (التأكيد والتثبت).",
      syntax: "import { test, expect } from 'vitest';\n\ntest('يجب أن يعيد حاصل ضرب الرقمين', () => {\n  // Arrange & Act & Assert\n  expect(multiply(3, 4)).toBe(12);\n});",
      simpleExample: `// استيراد دالتي test و expect من vitest
import { test, expect } from 'vitest';

// دالة بسيطة للتحقق من صحة البريد الإلكتروني
function isValidEmail(email) {
  return email.includes('@') && email.includes('.');
}

// كتابة أول اختبار
test('التحقق من صحة بنية البريد الإلكتروني', () => {
  // 1. التجهيز والمدخلات (Arrange)
  const validEmail = 'ahmed@example.com';
  const invalidEmail = 'ahmed-without-at';

  // 2. التنفيذ والمقارنة (Act & Assert)
  expect(isValidEmail(validEmail)).toBe(true);
  expect(isValidEmail(invalidEmail)).toBe(false);
});`,
      advancedExample: [
        "// اختبار شامل يطبق نمط AAA القياسي (Arrange - Act - Assert) على محول العملات",
        "import { test, expect } from 'vitest';",
        "",
        "// وحدة تحويل العملات وتطبيق رسوم التحويل",
        "function convertCurrency(amount, rate, feePercentage = 0.02) {",
        "  if (amount <= 0) throw new Error('المبلغ يجب أن يكون أكبر من صفر');",
        "  const fee = amount * feePercentage;",
        "  const netAmount = amount - fee;",
        "  return Number((netAmount * rate).toFixed(2));",
        "}",
        "",
        "test('تحويل 1000 ريال سعودي إلى دولار أمريكي مع خصم رسوم 2%', () => {",
        "  // 1. Arrange: تجهيز المعطيات والشروط",
        "  const amountInSAR = 1000;",
        "  const exchangeRate = 0.27; // 1 ريال = 0.27 دولار تقريباً",
        "  const expectedNetUSD = 264.60; // (1000 - 20) * 0.27 = 980 * 0.27 = 264.60",
        "",
        "  // 2. Act: تنفيذ العملية الحسابية",
        "  const actualResult = convertCurrency(amountInSAR, exchangeRate);",
        "",
        "  // 3. Assert: التأكد من دقة المخرجات والكسور العشرية",
        "  expect(actualResult).toBe(expectedNetUSD);",
        "  expect(actualResult).toBeGreaterThan(0);",
        "});",
        "",
        "test('إطلاق استثناء عند إدخال مبلغ صفر أو سالب', () => {",
        "  // اختبار إطلاق الخطأ (Error Throwing)",
        "  expect(() => convertCurrency(0, 0.27)).toThrow('المبلغ يجب أن يكون أكبر من صفر');",
        "  expect(() => convertCurrency(-100, 0.27)).toThrow();",
        "});"
      ].join('\n'),
      output: "تشغيل vitest يُظهر شريطاً أخضر لامعاً: ✓ 2 tests passed (4ms) مع توضيح سرعة التنفيذ.",
      commonMistakes: "كتابة اختبارات بدون دالة expect صريحة؛ الكود سيمر بنجاح ظاهرياً طالما لم يطلق خطأ، لكنه لا يؤكد أي نتيجة ولا يحميك من أي خلل في المخرجات.",
      bestPractices: "اتبع دائماً نمط AAA: رتب المعطيات أولاً (Arrange)، ثم استدع الدالة (Act)، ثم افحص النتيجة بـ expect (Assert) ليكون اختبارك واضحاً ومقروءاً لأي زميل في الفريق.",
      visualDiagram: "The AAA Pattern:\n[1. ARRANGE] Prepare test inputs, mocks, and expected values\n       │\n       ▼\n[2. ACT]     Call the function or trigger the component event\n       │\n       ▼\n[3. ASSERT]  Verify result using expect(...).toBe(...)"
    },
    {
      id: "19.2.d",
      title: "استخدام describe وit وexpect",
      englishTerm: "Structuring Tests with describe, it, and expect (ديسكرايب آند إت)",
      description: "البنية التنظيمية القياسية لتجميع وهيكلة الاختبارات؛ تُستخدم `describe()` لإنشاء مجموعة اختبارية منطقية (Test Suite) تضم كل ما يتعلق بميزة معينة، بينما تُستخدم `it()` (أو مرادفتها `test()`) لوصف كل حالة استخدام فردية بأسلوب سردي مقروء، وتُستخدم `expect()` مع دوال المقارنة المتنوعة (Matchers).",
      analogy: "يشبه فهرس وأبواب الكتاب؛ `describe` هو عنوان الفصل الكبير (مثل: 'فصل المعاملات المالية')، و `it` هي الموضوعات الفرعية داخل الفصل (مثل: 'يجب أن يرفض السحب إذا كان الرصيد صفراً').",
      whyItMatters: "يحول نتائج الاختبارات إلى وثيقة توثيقية حية ومقروءة للمشروع؛ عند قراءة تقرير الاختبارات تفهم مواصفات النظام بالكامل بدون حتى قراءة كود التطبيق.",
      syntax: "describe('اسم الوحدة أو المكون', () => {\n  it('يجب أن يقوم بفعل كذا عند حدوث كذا', () => {\n    expect(val).toEqual(expected);\n  });\n});",
      simpleExample: `// استيراد describe و it و expect
import { describe, it, expect } from 'vitest';

describe('مجموعة اختبارات دالة اقتطاع النصوص truncateText', () => {
  function truncate(str, max = 10) {
    if (str.length <= max) return str;
    return str.slice(0, max) + '...';
  }

  it('يجب أن تعيد النص كما هو إذا كان طوله أقل من الحد الأقصى', () => {
    expect(truncate('مرحباً', 10)).toBe('مرحباً');
  });

  it('يجب أن تقتطع النص وتضيف ثلاث نقاط إذا تجاوز الحد', () => {
    expect(truncate('هذا النص طويل جداً للتجربة', 6)).toBe('هذا ال...');
  });
});`,
      advancedExample: [
        "// هيكل اختباري متقدم يوضح أشهر أدوات المقارنة (Matchers) مثل toEqual و toContain و toHaveLength",
        "import { describe, it, expect, beforeEach } from 'vitest';",
        "",
        "describe('إدارة سلة التسوق ShoppingCart Service', () => {",
        "  let cart = [];",
        "",
        "  // خطاف يُنفذ قبل كل اختبار لتهيئة السلة نظيفة تماماً",
        "  beforeEach(() => {",
        "    cart = [",
        "      { id: 'p1', name: 'شاشة كود 4K', price: 1200, qty: 1 },",
        "      { id: 'p2', name: 'لوحة مفاتيح ميكانيكية', price: 300, qty: 2 }",
        "    ];",
        "  });",
        "",
        "  it('يجب أن تحسب إجمالي عدد القطع في السلة', () => {",
        "    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);",
        "    expect(totalQty).toBe(3);",
        "  });",
        "",
        "  it('يجب أن تتحقق من تطابق كائن المنتج المضاف بعمق (toEqual)', () => {",
        "    const newItem = { id: 'p3', name: 'ماوس لاسلكي', price: 150, qty: 1 };",
        "    cart.push(newItem);",
        "    ",
        "    // toBe تفحص المساواة بالمرجع (تصلح للقيم البدائية)",
        "    // toEqual تفحص المحتوى الداخلي للكائنات والمصفوفات",
        "    expect(cart[2]).toEqual(newItem);",
        "    expect(cart).toHaveLength(3);",
        "  });",
        "",
        "  it('يجب أن تحتوي السلة على شاشة الكود (toContainEqual)', () => {",
        "    expect(cart).toContainEqual({ id: 'p1', name: 'شاشة كود 4K', price: 1200, qty: 1 });",
        "  });",
        "",
        "  it('يجب أن يكون الإجمالي المالي قيمة معرفة ومطابقة للمواصفات', () => {",
        "    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);",
        "    expect(totalAmount).toBeDefined();",
        "    expect(totalAmount).toBeGreaterThan(1000);",
        "    expect(totalAmount).toBeCloseTo(1800.00, 2);",
        "  });",
        "});"
      ].join('\n'),
      output: "ينتج تقريراً شجرياً رائعاً في الكونسول يوضح اسم المجموعة وحالاتها مع علامات النجاح الخضراء: ShoppingCart Service > يجب أن تحسب إجمالي عدد القطع (1ms).",
      commonMistakes: "استخدام toBe() لمقارنة كائنين أو مصفوفتين مثل: expect({ a: 1 }).toBe({ a: 1 })؛ هذا سيفشل دائماً لأن toBe تقارن المراجع في الذاكرة (===). استخدم toEqual() دائماً للكائنات.",
      bestPractices: "اجعل نصوص `it` تبدأ بـ 'يجب أن...' (should...) لتصف النتيجة السلوكية بوضوح وتتحول تلقائياً إلى مواصفات حية لنظامك.",
      visualDiagram: "describe & it Tree Structure:\ndescribe('Auth Service')\n  ├── it('should hash password with salt')     ──► [PASS]\n  ├── it('should reject invalid credentials')  ──► [PASS]\n  └── it('should issue JWT token on success')  ──► [PASS]"
    },
    {
      id: "19.2.e",
      title: "اختبار الدوال المساعدة",
      englishTerm: "Testing Utility Functions (تيستينغ يوتيليتيز)",
      description: "اختبار الدوال البرمجية النقية (Pure Helper Functions) التي تقوم بعمليات رياضية، أو تحويلات نصوص، أو معالجة تواريخ، أو تصفية مصفوفات. تمثل هذه الدوال أساس التطبيق وهي المرشح المثالي لتحقيق نسبة 100% اختبارات وحدة لأنها لا تعتمد على أي DOM أو اتصالات خارجية.",
      analogy: "يشبه فحص الأدوات في صندوق العدة (المفك، المطرقة، والمقياس) والتأكد من صلابتها ودقة قياسها قبل البدء في بناء المنزل.",
      whyItMatters: "أي خطأ في دالة مساعدة عامة (مثل دالة حساب ضريبة أو تنسيق تاريخ) ينتشر ويتكرر في 20 صفحة مختلفة داخل التطبيق؛ حمايتها بالاختبارات يحمي التطبيق بأكمله.",
      syntax: "test('slugify should convert title to url slug', () => {\n  expect(slugify('أكاديمية React')).toBe('أكاديمية-react');\n});",
      simpleExample: `// دالة مساعدة لتحويل النصوص إلى روابط صديقة لمحركات البحث (Slugify)
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\\s+/g, '-')     // استبدال المسافات بشرطات
    .replace(/[^\\w\\u0600-\\u06FF\\-]+/g, ''); // الحفاظ على الحروف العربية والإنجليزية
}

// اختبار الدالة المساعدة
import { test, expect } from 'vitest';

test('تحويل العناوين العربية إلى روابط slug صحيحة', () => {
  const input = '  تعلم ريآكت مع فيتست 2026!  ';
  const expected = 'تعلم-ريآكت-مع-فيتست-2026';
  expect(slugify(input)).toBe(expected);
});`,
      advancedExample: [
        "// اختبار وحدة متقدم لدالة تنقية الكلمات ومصفوفة المعاملات المالية المجمعة",
        "import { describe, it, expect } from 'vitest';",
        "",
        "// دالة مساعدة لتجميع المعاملات المالية وتصنيفها حسب العملة والحالة",
        "export function aggregateTransactions(transactions) {",
        "  if (!Array.isArray(transactions)) return { totalCount: 0, sumByCurrency: {}, successfulCount: 0 };",
        "",
        "  return transactions.reduce((acc, t) => {",
        "    acc.totalCount += 1;",
        "    ",
        "    if (t.status === 'COMPLETED') {",
        "      acc.successfulCount += 1;",
        "      const curr = t.currency || 'SAR';",
        "      acc.sumByCurrency[curr] = (acc.sumByCurrency[curr] || 0) + t.amount;",
        "    }",
        "    ",
        "    return acc;",
        "  }, { totalCount: 0, sumByCurrency: {}, successfulCount: 0 });",
        "}",
        "",
        "describe('دالة aggregateTransactions المساعدة', () => {",
        "  it('يجب أن تجمع المبالغ وتفصل العملات للحركات المكتملة فقط', () => {",
        "    const mockData = [",
        "      { id: 1, amount: 500, currency: 'SAR', status: 'COMPLETED' },",
        "      { id: 2, amount: 200, currency: 'SAR', status: 'FAILED' },",
        "      { id: 3, amount: 100, currency: 'USD', status: 'COMPLETED' },",
        "      { id: 4, amount: 250, currency: 'SAR', status: 'COMPLETED' }",
        "    ];",
        "",
        "    const result = aggregateTransactions(mockData);",
        "",
        "    expect(result.totalCount).toBe(4);",
        "    expect(result.successfulCount).toBe(3);",
        "    expect(result.sumByCurrency.SAR).toBe(750);",
        "    expect(result.sumByCurrency.USD).toBe(100);",
        "  });",
        "",
        "  it('يجب أن تتعامل بأمان مع المصفوفات الفارغة والمدخلات الخاطئة', () => {",
        "    expect(aggregateTransactions([])).toEqual({ totalCount: 0, sumByCurrency: {}, successfulCount: 0 });",
        "    expect(aggregateTransactions(null)).toEqual({ totalCount: 0, sumByCurrency: {}, successfulCount: 0 });",
        "  });",
        "});"
      ].join('\n'),
      output: "تضمن الاختبارات دقة العمليات الحسابية ومنع انهيار التطبيق عند تلقي مصفوفات فارغة أو بيانات ملغية من الخادم.",
      commonMistakes: "كتابة دوال مساعدة تعتمد سراً على كائنات المتصفح العامة مثل window.location أو localStorage دون تمريرها كمعاملات؛ مما يجعل اختبارها منعزلاً في غاية الصعوبة.",
      bestPractices: "صمم دوالك المساعدة دائماً لتكون 'دوالاً نقية' (Pure Functions): تأخذ مدخلات واضحة وتُرجع مخرجات محددة بدون أي آثار جانبية خارجية.",
      visualDiagram: "Pure Helper Function Testing:\n[Input Array of 1,000 items] ──► aggregateTransactions() ──► [Expected Summary Object]\n             (Pure Execution: No Network, No DOM, Runs in 0.5ms!)"
    },
    {
      id: "19.2.f",
      title: "استخدام Mocks و Spies",
      englishTerm: "Mocks, Stubs, and Spies with vi (فاي-تيست موكس آند سبايز)",
      description: "أدوات لمحاكاة ومراقبة سلوك الدوال والتبعيات الخارجية أثناء الاختبارات باستخدام كائن `vi` في Vitest؛ حيث يتيح لك الـ Mock استبدال دالة حقيقية (مثل دالة إرسال بريد أو طلب سيرفر) بدالة وهمية تعيد نتائج محددة، بينما يتيح لك الـ Spy التجسس على دالة أصلية لمعرفة: هل استدعيت؟ كم مرة؟ وما هي المعاملات التي تم تمريرها لها؟",
      analogy: "يشبه كاميرات المراقبة السرية والدمية البديلة للممثل في المشاهد الخطرة (Stunt Double)؛ الدمية تقوم بالحركة الخطرة دون إيذاء الممثل الحقيقي، بينما الكاميرا تسجل كل ثانية لتتأكد من تنفيذ المشهد بدقة.",
      whyItMatters: "يحميك من إرسال رسائل بريد حقيقية للعملاء أو استنزاف رصيد بطاقات بنكية أثناء تشغيل الاختبارات الآلية، ويعزل الوحدة المختبرة تماماً.",
      syntax: "const fakeFn = vi.fn().mockReturnValue(42);\nconst spy = vi.spyOn(console, 'log');\nexpect(fakeFn).toHaveBeenCalledTimes(1);",
      simpleExample: `// استيراد test و expect و vi من vitest
import { test, expect, vi } from 'vitest';

// دالة تنفذ رد نداء عند اكتمال التحميل
function processData(data, callback) {
  if (data.length > 0) {
    callback('نجاح: ' + data.length);
  }
}

test('محاكاة دالة رد النداء ومراقبة استدعائها', () => {
  // إنشاء دالة وهمية للمراقبة عبر vi.fn()
  const mockCallback = vi.fn();

  // تنفيذ العملية
  processData(['أ', 'ب', 'ج'], mockCallback);

  // التحقق من أن الدالة الوهمية استدعيت مرة واحدة بالضبط
  expect(mockCallback).toHaveBeenCalledTimes(1);
  // التحقق من المعامل الذي استلمته الدالة
  expect(mockCallback).toHaveBeenCalledWith('نجاح: 3');
});`,
      advancedExample: [
        "// استخدام vi.spyOn و vi.mock لمحاكاة وحدة استدعاء API والتحقق من التنبيهات",
        "import { describe, it, expect, vi, beforeEach } from 'vitest';",
        "",
        "// كائن يحاكي خدمة الرسائل والإشعارات",
        "export const notificationService = {",
        "  sendSMS(phone, message) {",
        "    // في الواقع يتصل بخدمة Twilio الحقيقية",
        "    console.log('إرسال SMS حقيقي مكلف مالياً إلى:', phone);",
        "    return { status: 'SENT', id: 'sms_991' };",
        "  }",
        "};",
        "",
        "// الدالة الخاضعة للفحص",
        "export function notifyUserOnOrderComplete(order) {",
        "  if (order.total > 500) {",
        "    return notificationService.sendSMS(order.userPhone, 'شكراً لك، تم شحن طلبك الكبير!');",
        "  }",
        "  return null;",
        "}",
        "",
        "describe('اختبار إشعارات الطلبات مع vi.spyOn', () => {",
        "  beforeEach(() => {",
        "    vi.restoreAllMocks();",
        "  });",
        "",
        "  it('يجب أن تستدعي sendSMS عند تجاوز الطلب 500 ريال دون إرسال رسالة حقيقية', () => {",
        "    // التجسس على الدالة واستبدال تنفيذها الحقيقي (Mock Implementation)",
        "    const smsSpy = vi.spyOn(notificationService, 'sendSMS').mockImplementation((phone, msg) => {",
        "      return { status: 'MOCKED_SUCCESS', phone, msg };",
        "    });",
        "",
        "    const mockOrder = { total: 750, userPhone: '+966500000000' };",
        "    const result = notifyUserOnOrderComplete(mockOrder);",
        "",
        "    // التحقق من استدعاء الدالة المحاكية",
        "    expect(smsSpy).toHaveBeenCalledTimes(1);",
        "    expect(smsSpy).toHaveBeenCalledWith('+966500000000', 'شكراً لك، تم شحن طلبك الكبير!');",
        "    expect(result.status).toBe('MOCKED_SUCCESS');",
        "  });",
        "",
        "  it('يجب ألا تستدعي sendSMS إذا كان الطلب أقل من 500 ريال', () => {",
        "    const smsSpy = vi.spyOn(notificationService, 'sendSMS');",
        "    notifyUserOnOrderComplete({ total: 300, userPhone: '+966500000000' });",
        "    expect(smsSpy).not.toHaveBeenCalled();",
        "  });",
        "});"
      ].join('\n'),
      output: "يقوم الاختبار بفحص منطق الشروط بدقة دون إرسال رسائل فعلية عبر الشبكة، والتأكد من المعاملات والأزمنة.",
      commonMistakes: "نسيان استدعاء `vi.clearAllMocks()` أو `vi.restoreAllMocks()` بين الاختبارات؛ مما يترك سجلات الاستدعاء متراكمة ويُفشل اختبارات `toHaveBeenCalledTimes(1)` في الاختبارات التالية.",
      bestPractices: "ضع `afterEach(() => vi.clearAllMocks())` في ملف setup.js للتخلص التلقائي من أي بقايا محاكاة بعد كل اختبار.",
      visualDiagram: "Mock vs Spy with vi:\nvi.fn():     [Fake Empty Function] ──► Records calls & returns fake data\nvi.spyOn():  [Wraps Real Function] ──► Can observe OR temporarily replace behavior\nResult:      Zero unwanted network calls / Full assertion control!"
    },
    {
      id: "19.2.g",
      title: "اختبار الدوال غير المتزامنة",
      englishTerm: "Testing Asynchronous Code (أسينكرونس تيستينغ)",
      description: "التقنيات المستخدمة لاختبار الوعود (Promises)، ودوال `async/await`، والمؤقتات الزمنية (Timers مثل setTimeout). يوفر Vitest دعماً أصلياً لانتظار الوعود وتوفير آليات متقدمة لتقديم عقارب الساعة الزمنية فوراً (Fake Timers عبر `vi.useFakeTimers()`) دون الحاجة لانتظار ثوانٍ حقيقية.",
      analogy: "يشبه آلة السفر عبر الزمن في أفلام الخيال العلمي؛ بدلاً من الجلوس والانتظار لمدة ساعتين حتى ينضج الخبز، تقوم بتقديم عقارب الساعة ساعتين للأمام في جزء من الثانية لترى النتيجة فوراً.",
      whyItMatters: "يحول دون بطء أجنحة الاختبارات؛ فبدلاً من أن يستغرق اختبار يحتوي على setTimeout(..., 5000) خمس ثوانٍ حقيقية، ينفذه Vitest في 1 مللي ثانية عبر Fake Timers.",
      syntax: "test('async data test', async () => {\n  const data = await fetchData();\n  expect(data).toBeDefined();\n});\n// تسريع الوقت:\nvi.useFakeTimers();\nvi.advanceTimersByTime(3000);",
      simpleExample: `// استيراد vitest
import { test, expect } from 'vitest';

// دالة غير متزامنة تحاكي جلب بيانات المستخدم
async function fetchUserProfile(id) {
  if (!id) throw new Error('معرف المستخدم مطلوب');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: 'سارة خالد', role: 'مبرمجة' });
    }, 100);
  });
}

test('جلب ملف المستخدم غير المتزامن بنجاح عبر async/await', async () => {
  // انتظار الدالة غير المتزامنة بشكل طبيعي
  const profile = await fetchUserProfile(10);
  expect(profile.name).toBe('سارة خالد');
  expect(profile.role).toBe('مبرمجة');
});

test('التحقق من رفض الوعد عند تمرير معرف مفقود', async () => {
  // اختبار الرفض غير المتزامن باستخدام rejects
  await expect(fetchUserProfile(null)).rejects.toThrow('معرف المستخدم مطلوب');
});`,
      advancedExample: [
        "// اختبار دوال المؤقتات والـ Debounce المعقدة باستخدام Fake Timers الفائقة في Vitest",
        "import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';",
        "",
        "// دالة تأخير التنفيذ الكلاسيكية Debounce",
        "function debounce(func, wait) {",
        "  let timeout;",
        "  return function(...args) {",
        "    clearTimeout(timeout);",
        "    timeout = setTimeout(() => func.apply(this, args), wait);",
        "  };",
        "}",
        "",
        "describe('اختبار دالة debounce مع Fake Timers', () => {",
        "  beforeEach(() => {",
        "    // تفعيل المؤقتات الوهمية للسيطرة على عقارب الساعة",
        "    vi.useFakeTimers();",
        "  });",
        "",
        "  afterEach(() => {",
        "    // إعادة المؤقتات الحقيقية",
        "    vi.useRealTimers();",
        "  });",
        "",
        "  it('يجب ألا تستدعي الدالة إلا بعد انقضاء زمن التأخير المحدد بالكامل', () => {",
        "    const mockAction = vi.fn();",
        "    const debouncedSearch = debounce(mockAction, 1000);",
        "",
        "    // استدعاء الدالة ثلاث مرات متتالية بسرعة",
        "    debouncedSearch('حرف 1');",
        "    debouncedSearch('حرف 2');",
        "    debouncedSearch('حرف 3');",
        "",
        "    // حتى الآن لم تنقضِ الـ 1000ms، فلا يجب أن تُنفذ الدالة",
        "    expect(mockAction).not.toHaveBeenCalled();",
        "",
        "    // تقديم الوقت 500 مللي ثانية (لا تزال في فترة الانتظار)",
        "    vi.advanceTimersByTime(500);",
        "    expect(mockAction).not.toHaveBeenCalled();",
        "",
        "    // تقديم الوقت 500 مللي ثانية إضافية (اكتملت الـ 1000ms)",
        "    vi.advanceTimersByTime(500);",
        "",
        "    // الآن يجب أن تكون قد استدعيت مرة واحدة فقط مع آخر قيمة",
        "    expect(mockAction).toHaveBeenCalledTimes(1);",
        "    expect(mockAction).toHaveBeenCalledWith('حرف 3');",
        "  });",
        "});"
      ].join('\n'),
      output: "يتم اختبار تأخير ثوانٍ ودقائق كاملة في أقل من 2 مللي ثانية من زمن المعالج الحقيقي بفضل السيطرة على Fake Timers.",
      commonMistakes: "نسيان كتابة كلمة `await` قبل استدعاء الدالة غير المتزامنة داخل الـ test؛ مما يجعل الاختبار ينتهي فوراً بنجاح زائف قبل أن تنتهي المعالجة وتطلق أخطائها.",
      bestPractices: "استخدم دائماً `vi.useFakeTimers()` و `vi.useRealTimers()` في كتل beforeEach و afterEach لتسريع اختبارات المؤقتات والـ animations دون انتظار زمني حقيقي.",
      visualDiagram: "Fake Timers Mechanism:\nReal Time: 0ms ──► vi.advanceTimersByTime(10000) ──► Real Time: 1ms!\n              (Simulates 10 seconds of timer ticks instantly)"
    },
    {
      id: "19.2.h",
      title: "إعداد تقارير التغطية",
      englishTerm: "Generating Coverage Reports with Vitest (كفردج ريبورتس)",
      description: "توليد تقارير بصرية وإحصائية دقيقة تكشف عن نسبة الأسطر والدوال والفروع المغطاة بالاختبارات في مشروعك. يعتمد Vitest على محرك `v8` فائق السرعة أو محرك `istanbul` لإنتاج تقارير تفاعلية بصيغة HTML تمكنك من تصفح ملفات المشروع ورؤية الأسطر غير المختبرة باللون الأحمر.",
      analogy: "يشبه التقرير الختامي لمفتش الجودة بعد فحص خط الإنتاج؛ يضع علامة خضراء على كل جهاز تم اختباره، ويضع ملصقاً برتقالياً على الأجهزة التي تحتاج لإعادة فحص.",
      whyItMatters: "يوفر معياراً موضوعياً موثوقاً يمكن ربطه مع خطوط الإنتاج والدمج المستمر (CI/CD) لمنع دمج أي كود لا يستوفي معايير التغطية المطلوبة.",
      syntax: "# تشغيل التغطية عبر سطر الأوامر:\nnpx vitest run --coverage\n# أو فتح المتصفح لمشاهدة التقرير التفاعلي:\nopen coverage/index.html",
      simpleExample: `// مثال على أمر تشغيل التغطية وتثبيت المحرك الداعم
/*
1. تثبيت محرك v8 للتغطية:
npm i -D @vitest/coverage-v8

2. تشغيل التقرير:
npx vitest run --coverage
*/

// مثال على مخرجات التقرير في الكونسول
export const mockCoverageCliOutput = \`
 % Coverage report from v8
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |   89.47 |    83.33 |   92.30 |   89.47 |                   
 src/utils/        |     100 |      100 |     100 |     100 |                   
  currency.js      |     100 |      100 |     100 |     100 |                   
  slugify.js       |     100 |      100 |     100 |     100 |                   
 src/services/     |   82.14 |       75 |   85.71 |   82.14 |                   
  auth.js          |   82.14 |       75 |   85.71 |   82.14 | 42-45,67          
-------------------|---------|----------|---------|---------|-------------------
\`;`,
      advancedExample: [
        "// إعداد متكامل لـ coverage داخل vite.config.js مع تخصيص المخرجات والحدود الدنيا الإلزامية",
        "import { defineConfig } from 'vite';",
        "import react from '@vitejs/plugin-react';",
        "",
        "export default defineConfig({",
        "  plugins: [react()],",
        "  test: {",
        "    globals: true,",
        "    environment: 'jsdom',",
        "    coverage: {",
        "      // 1. استخدام محرك v8 فائق السرعة",
        "      provider: 'v8',",
        "      // 2. تنسيقات التقارير المطلوبة",
        "      reporter: ['text', 'json', 'html', 'lcov'],",
        "      // 3. مسار مجلد حفظ التقارير",
        "      reportsDirectory: './coverage',",
        "      // 4. استبعاد ملفات التكوين والأنواع ومداخل التطبيق من الإحصائيات",
        "      exclude: [",
        "        'node_modules/',",
        "        'src/test/',",
        "        '**/*.d.ts',",
        "        'src/main.jsx',",
        "        'vite.config.js'",
        "      ],",
        "      // 5. وضع حواجز أمان صارمة تفشل البناء في CI إذا انخفضت النسبة",
        "      thresholds: {",
        "        lines: 80,       // 80% من الأسطر",
        "        branches: 75,    // 75% من الشروط والتفرعات",
        "        functions: 80,   // 80% من الدوال",
        "        statements: 80   // 80% من الجمل البرمجية",
        "      }",
        "    }",
        "  }",
        "});"
      ].join('\n'),
      output: "ينتج مجلد ./coverage/index.html يحتوي على واجهة ويب تفاعلية ممتعة تمكنك من النقر على أي ملف لمعرفة أي سطر كود أو شرط 'if' لم يمر عليه الاختبار بعد.",
      commonMistakes: "تضمين مجلد `coverage/` داخل مستودع Git البرمجي؛ مجلد التغطية ضخم وينتج آلاف الملفات المولدة تلقائياً، ويجب دائماً إضافته إلى ملف `.gitignore`.",
      bestPractices: "استخدم تقارير LCOV لربطها بخدمات مراقبة الجودة السحابية مثل Codecov أو SonarQube لإظهار شارات التغطية التلقائية في مستودعات GitHub.",
      visualDiagram: "Vitest Coverage Flow:\nvitest run --coverage\n         │\n         ├──► CLI Summary Table (Instant Feedback in Terminal)\n         ├──► coverage/lcov.info (For CI/CD and Codecov)\n         └──► coverage/index.html (Interactive Browser Explorer)"
    }
  ],
  quizzes: [
    {
      id: "q19.2.1",
      question: "ما الفارق الأساسي بين toBe() و toEqual() في مكتبة Vitest؟",
      options: [
        "toBe تعمل فقط مع الأرقام، بينما toEqual تعمل فقط مع النصوص.",
        "toBe تقارن المساواة المرجعية الصارمة (===)، بينما toEqual تفحص المحتوى الداخلي والقيم المتداخلة للكائنات والمصفوفات بعمق.",
        "لا يوجد أي فرق وهما متطابقتان تماماً.",
        "toEqual تقوم بحذف الكائن بعد مقارنته."
      ],
      correctAnswer: 1,
      explanation: "تعتمد toBe على مقارنة Object.is المرجعية (كأنهما نفس المؤشر في الذاكرة)، بينما toEqual تقوم بمقارنة تكرارية عميقة (Deep Equality) لمحتويات الكائنات والمصفوفات."
    },
    {
      id: "q19.2.2",
      question: "كيف تساعدك ميزة vi.useFakeTimers() عند اختبار دالة تحتوي على تأخير setTimeout لمدة 10 ثوانٍ؟",
      options: [
        "تقوم بإلغاء عمل المؤقت وتحويله إلى طلب شبكة.",
        "تسمح لك بتقديم عقارب الساعة الزمنية برمجياً عبر vi.advanceTimersByTime(10000) ليتم تنفيذ الاختبار فوراً في 1ms دون انتظار 10 ثوانٍ حقيقية.",
        "تمنع إطلاق الأخطاء في الكود.",
        "تقوم بزيادة سرعة معالج جهازك بمقدار 10 أضعاف."
      ],
      correctAnswer: 1,
      explanation: "المؤقتات الوهمية (Fake Timers) تستبدل مؤقتات المتصفح بدوال يمكن للمطور التلاعب بساعتها الزمنية وتسريع الوقت برمجياً، مما يوفر وقت تشغيل الاختبارات."
    },
    {
      id: "q19.2.3",
      question: "لماذا يُعتبر Vitest الخيار المفضل لمشاريع React المبنية على Vite مقارنة بـ Jest؟",
      options: [
        "لأن Vitest لا يدعم كتابة الاختبارات المعقدة.",
        "لأنه يتشارك مع Vite في نفس ملف الإعدادات vite.config.js والمحولات، ويدعم JSX و TypeScript بدون إعدادات Babel إضافية وبسرعة تفوق Jest بعدة مرات.",
        "لأن Jest تم حظرها رسمياً من متصفح كروم.",
        "لأن Vitest يعمل فقط بدون اتصال بالإنترنت."
      ],
      correctAnswer: 1,
      explanation: "التكامل الأصلي بين Vitest و Vite يلغي الحاجة لتكرار إعدادات التحويل (Babel/Webpack)، مما يمنح تشغيلاً لحظياً وتجربة تطوير فائقة السلاسة."
    }
  ],
  exercise: {
    title: "تمرين عملي: كتابة مجموعة اختبارات مع Fake Timers لدالة تأكيد العملية بعد مهلة",
    description: "لديك دالة `executeWithTimeout(fn, delay)` تقوم بتنفيذ الدالة الممررة بعد انقضاء المهلة المحددة. اكتب اختباراً كاملاً باستخدام Vitest و vi.useFakeTimers() يتأكد من أن الدالة لا تُستدعى قبل المهلة، وتُستدعى مرة واحدة بعدها مباشرة.",
    hints: [
      "فعل vi.useFakeTimers() في بداية الاختبار وألغها بـ vi.useRealTimers().",
      "أنشئ دالة وهمية عبر const mock = vi.fn().",
      "استخدم vi.advanceTimersByTime(delay) لتقديم الوقت والتأكد من الاستدعاء."
    ],
    solution: `import { test, expect, vi } from 'vitest';

// الدالة المستهدفة
function executeWithTimeout(fn, delayMs) {
  setTimeout(fn, delayMs);
}

test('اختبار executeWithTimeout باستخدام Fake Timers', () => {
  // 1. تفعيل المؤقتات الوهمية
  vi.useFakeTimers();

  // 2. إنشاء الدالة الوهمية
  const mockCallback = vi.fn();

  // 3. جدولة التنفيذ بعد 3000ms
  executeWithTimeout(mockCallback, 3000);

  // التأكد من عدم الاستدعاء الفوري
  expect(mockCallback).not.toHaveBeenCalled();

  // تقديم الوقت 2999ms (قبل الموعد بمللي ثانية واحدة)
  vi.advanceTimersByTime(2999);
  expect(mockCallback).not.toHaveBeenCalled();

  // تقديم مللي ثانية إضافية لاكتمال الـ 3000ms
  vi.advanceTimersByTime(1);
  expect(mockCallback).toHaveBeenCalledTimes(1);

  // إعادة المؤقتات الطبيعية
  vi.useRealTimers();
});`
  },
  infographic: {
    title: "منظومة الاختبارات الحديثة مع Vitest",
    subtitle: "أسرع بيئة اختبارات لوحدات وتكامل JavaScript و React في العالم",
    steps: [
      { step: "1", title: "تكامل Vite الفوري", desc: "تشارك كامل لنفس ملف vite.config.js ودعم تلقائي لـ JSX و TypeScript بدون Babel." },
      { step: "2", title: "هيكلة describe و it", desc: "بناء تقارير اختبار مقروءة ومرتبة باللغة الطبيعية مع مجموعة Matchers غنية." },
      { step: "3", title: "أدوات vi الخارقة", desc: "محاكاة الدوال بـ vi.fn() والتجسس بـ vi.spyOn() والسيطرة على الوقت بـ vi.useFakeTimers()." },
      { step: "4", title: "تقارير التغطية v8", desc: "فحص أسطر الكود والشروط وتوليد تقارير HTML تفاعلية لحماية جودة المشروع." }
    ]
  }
};
