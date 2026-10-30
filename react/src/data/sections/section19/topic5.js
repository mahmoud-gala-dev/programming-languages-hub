// src/data/sections/section19/topic5.js

export const topic5 = {
  id: "19.5",
  title: "اختبارات End-to-End مع Playwright",
  description: "الدليل الشامل لاختبارات الطرف إلى الطرف (E2E) باستخدام Playwright؛ تثبيته وتكوينه، محاكاة تصفح حقيقي للمستخدم، اختبار التنقل والنماذج الحيوية، اختبار التصميم المتجاوب على شاشات الهواتف والحواسب، التشغيل المتوازي على Chromium و Firefox و WebKit، وتحليل لقطات الفيديو والـ Traces لتتبع الأخطاء.",
  subtopics: [
    {
      id: "19.5.a",
      title: "مقدمة إلى Playwright",
      englishTerm: "Introduction to Playwright (بلاي-رايت)",
      description: "Playwright هو أحدث وأقوى إطار عمل مفتوح المصدر من شركة Microsoft لأتمتة واختبار المتصفحات الحديثة من البداية إلى النهاية (End-to-End). يتيح التحكم الكامل في متصفحات Chromium و Firefox و WebKit (Safari) عبر كود برمجي واحد وبسرعة فائقة وثبات استثنائي ضد أخطاء التذبذب (Flakiness).",
      analogy: "يشبه سائق اختبار سيارات محترف يجلس في قمرة قيادة سيارة حقيقية ويسير بها على كافة أنواع الطرق، ويختبر استجابة المكابح والأنوار والتكييف في ظروف الطقس الحقيقية تماماً.",
      whyItMatters: "يتميز بخاصية الانتظار التلقائي (Auto-waiting) التي تنتظر ظهور العناصر وقابليتها للنقر قبل الضغط عليها تلقائياً، مما يقضي على أخطاء `sleep` و `wait` المؤرقة التي عانى منها المطورون لسنوات مع أدوات قديمة مثل Selenium.",
      syntax: "import { test, expect } from '@playwright/test';\ntest('basic e2e', async ({ page }) => {\n  await page.goto('https://myapp.com');\n  await expect(page).toHaveTitle(/موقعي/);\n});",
      simpleExample: `// مثال على أول اختبار E2E بسيط باستخدام Playwright
import { test, expect } from '@playwright/test';

test('التحقق من تحميل الصفحة الرئيسية وظهور العنوان', async ({ page }) => {
  // 1. التوجه للرابط الحقيقي في المتصفح
  await page.goto('http://localhost:5173');

  // 2. التحقق من نص العنوان الرئيسي في علامة تبويب المتصفح
  await expect(page).toHaveTitle(/منصة التعليم المتقدمة/);

  // 3. التحقق من وجود زر الدخول البصري
  const loginButton = page.getByRole('button', { name: 'تسجيل الدخول' });
  await expect(loginButton).toBeVisible();
});`,
      advancedExample: [
        "// بنية سيناريو E2E متقدم يوضح ميزات Playwright الحصرية: التوثيق، والتزامن التلقائي",
        "import { test, expect } from '@playwright/test';",
        "",
        "test.describe('بوابة المطورين - التحقق من سلامة الواجهة الأولية', () => {",
        "  test('فحص الاستجابة الفورية وسرعة التحميل وشارة النظام', async ({ page }) => {",
        "    // تسجيل توقيت بدء التصفح",
        "    const startTime = Date.now();",
        "    ",
        "    // فتح الصفحة والانتظار حتى اكتمال شبكة الاتصال (networkidle)",
        "    await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' });",
        "",
        "    // فحص زمن التحميل",
        "    const loadDuration = Date.now() - startTime;",
        "    expect(loadDuration).toBeLessThan(3000); // أقل من 3 ثوانٍ",
        "",
        "    // البحث عن الترويسة الرئيسية",
        "    const mainHeading = page.getByRole('heading', { level: 1 });",
        "    await expect(mainHeading).toBeVisible();",
        "    await expect(mainHeading).toContainText('React.js');",
        "",
        "    // التحقق من حالة المظهر الداكن التلقائي",
        "    const body = page.locator('body');",
        "    await expect(body).toHaveClass(/bg-slate-950/);",
        "  });",
        "});"
      ].join('\n'),
      output: "يقوم Playwright بتشغيل متصفح خفي (Headless Browser) أو مرئي، وينفذ الاختبار في كسر من الثانية مع تقرير ملون.",
      commonMistakes: "كتابة أوامر انتظار زمنية صلبة مثل `await page.waitForTimeout(5000)`؛ هذا يُبطئ الاختبارات بشدة ويُعتبر ممارسة سيئة جداً. استعن دائماً بمطابقات Playwright الذكية التي تنتظر تلقائياً مثل `await expect(locator).toBeVisible()`.",
      bestPractices: "استخدم محددات إمكانية الوصول في Playwright مثل `page.getByRole` و `page.getByLabel` تماماً كما تفعل في React Testing Library لتوحيد أسلوب الفحص في مشروعك.",
      visualDiagram: "Playwright Architecture:\nTest Script (Node.js) ──► DevTools Protocol / CDP ──► Real Browser (Chromium / Firefox / WebKit)\n                          (Single WebSocket Connection: Blazing Fast & No Drivers needed!)"
    },
    {
      id: "19.5.b",
      title: "إعداد مشروع الاختبارات",
      englishTerm: "Setting up Playwright Project (بلاي-رايت كونفيج)",
      description: "تهيئة بيئة Playwright في مشروع React؛ تشمل تشغيل معالج التثبيت التلقائي `npm init playwright@latest`، وتكوين ملف `playwright.config.js` لتحديد رابط الخادم المحلي (baseURL)، وتفعيل خادم التطوير التلقائي (webServer)، وضبط التقاط الفيديو والصور وسجلات التتبع (Tracing).",
      analogy: "يشبه إعداد حلبة سباق السيارات؛ تخطيط المسار، تركيب حواجز الأمان، وضع كاميرات التسجيل البطيء، والتأكد من وجود ورشة الصيانة بجانب المضمار.",
      whyItMatters: "ميزة `webServer` في Playwright تقوم بتشغيل خادم Vite تلقائياً قبل بدء الاختبارات وإغلاقه فور انتهائها، مما يجعل الاختبارات تعمل بسلاسة في بيئة الـ CI/CD بدون خطوات يدوية.",
      syntax: "# تشغيل التثبيت التفاعلي الرسمي:\nnpm init playwright@latest\n# تشغيل الاختبارات بالواجهة الرسومية:\nnpx playwright test --ui",
      simpleExample: `// تكوين مبسط لملف playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // مسار مجلد اختبارات الـ E2E
  testDir: './e2e',
  // الرابط الأساسي للتطبيق أثناء الاختبار
  use: {
    baseURL: 'http://localhost:5173',
    // تسجيل فيديو فقط عند فشل الاختبار
    video: 'retain-on-failure',
    // التقاط صورة للشاشة عند الفشل
    screenshot: 'only-on-failure'
  },
  // تشغيل خادم التطوير Vite تلقائياً قبل الاختبارات
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI
  }
});`,
      advancedExample: [
        "// إعداد متقدم لـ playwright.config.js يشمل بيئات متعددة ومحاكاة الأجهزة المحمولة وسجلات Trace",
        "import { defineConfig, devices } from '@playwright/test';",
        "",
        "export default defineConfig({",
        "  testDir: './e2e',",
        "  // تشغيل الاختبارات بالتوازي لأقصى سرعة",
        "  fullyParallel: true,",
        "  // عدد مرات إعادة المحاولة في بيئة CI عند التذبذب",
        "  retries: process.env.CI ? 2 : 0,",
        "  // عدد المسارات المتوازية",
        "  workers: process.env.CI ? 1 : undefined,",
        "  // منسق التقارير: HTML تفاعلي + ملخص في الكونسول",
        "  reporter: [['html', { open: 'never' }], ['list']],",
        "  ",
        "  use: {",
        "    baseURL: 'http://localhost:5173',",
        "    // تسجيل الـ Trace الكامل (DOM, Network, Console) عند إعادة المحاولة أو الفشل",
        "    trace: 'on-first-retry',",
        "    screenshot: 'only-on-failure',",
        "    video: 'on-first-retry',",
        "  },",
        "",
        "  // المشاريع والمحركات المستهدفة للاختبار",
        "  projects: [",
        "    { name: 'Desktop Chrome', use: { ...devices['Desktop Chrome'] } },",
        "    { name: 'Desktop Safari', use: { ...devices['Desktop Safari'] } },",
        "    { name: 'Mobile iPhone',  use: { ...devices['iPhone 14'] } }",
        "  ],",
        "",
        "  webServer: {",
        "    command: 'npm run build && npm run preview', // اختبار نسخة الإنتاج الحقيقية!",
        "    port: 4173,",
        "    reuseExistingServer: !process.env.CI,",
        "  }",
        "});"
      ].join('\n'),
      output: "يتم بناء المشروع وتشغيل خادم Preview واختبار كافة الصفحات على ثلاثة متصفحات وأجهزة مختلفة بالتوازي.",
      commonMistakes: "تشغيل اختبارات E2E على بيئة التطوير `npm run dev` في خوادم الـ CI؛ الأفضل دائماً هو اختبار كود الإنتاج المبني والمضغوط `npm run build && npm run preview` لاكتشاف مشاكل الإنتاج الحقيقية.",
      bestPractices: "استخدم أداة `npx playwright test --ui` الرائعة في جهازك المحلي؛ تمنحك واجهة مستخدم مرئية لمشاهدة المتصفح ينقر ويكتب في الزمن الفعلي مع سجل زمني لكل خطوة.",
      visualDiagram: "Playwright Config Architecture:\nplaywright.config.js\n  ├── webServer: (Starts Vite Preview server at port 4173)\n  ├── projects:  (Chromium, Firefox, WebKit, Mobile Safari)\n  └── reporter:  (Generates interactive HTML trace report)"
    },
    {
      id: "19.5.c",
      title: "اختبار التنقل بين الصفحات",
      englishTerm: "Testing Multi-Page Navigation (نافيجيشن تيستينغ)",
      description: "اختبار تدفقات التنقل بين صفحات ومسارات التطبيق في متصفح حقيقي؛ يشمل النقر على روابط القائمة (Navbar)، والتنقل عبر التاريخ البرمجي (الرجوع للخلف والتقدم للأمام)، وفحص تحديث عنوان الـ URL في شريط المتصفح، واختبار الروابط المعطلة وتأكيد عدم وجود أخطاء 404 غير مقصودة.",
      analogy: "يشبه مفتش المترو الذي يركب في المحطة المركزية، وينتقل بين الخط الأحمر والأخضر والأزرق، ليتأكد من أن كافة اللوحات الإرشادية تشير للمحطات الصحيحة.",
      whyItMatters: "يضمن سلامة تجربة التصفح الكاملة للزائر، وأن الانتقال بين الصفحات يتم بسلاسة تطبيق الصفحة الواحدة (SPA) دون إعادة تحميل كاملة للشاشة (Hard Reload).",
      syntax: "await page.getByRole('link', { name: 'المتجر' }).click();\nawait expect(page).toHaveURL(/\\/shop/);",
      simpleExample: `// اختبار التنقل البسيط عبر Playwright
import { test, expect } from '@playwright/test';

test('الانتقال من الصفحة الرئيسية إلى صفحة الأسعار والعودة', async ({ page }) => {
  // فتح التطبيق
  await page.goto('/');

  // النقر على رابط صفحة الأسعار في شريط التنقل
  await page.getByRole('link', { name: 'الأسعار والخطط' }).click();

  // التحقق من تحديث الرابط في شريط المتصفح
  await expect(page).toHaveURL('/pricing');
  // التحقق من ظهور ترويسة صفحة الأسعار
  await expect(page.getByRole('heading', { name: 'اختر الخطة المناسبة' })).toBeVisible();

  // الضغط على زر الرجوع في المتصفح (Browser Back Button)
  await page.goBack();
  await expect(page).toHaveURL('/');
});`,
      advancedExample: [
        "// اختبار شامل يتأكد من سلامة كافة روابط شريط التنقل العلوي وتجنب الشاشات البيضاء",
        "import { test, expect } from '@playwright/test';",
        "",
        "test.describe('فحص تكامل شريط التنقل العام', () => {",
        "  const navLinks = [",
        "    { name: 'الرئيسية', expectedUrl: '/', expectedTitle: /الرئيسية/ },",
        "    { name: 'الكورسات', expectedUrl: '/courses', expectedTitle: /المسارات التعليمية/ },",
        "    { name: 'المدونة', expectedUrl: '/blog', expectedTitle: /أحدث المقالات/ },",
        "    { name: 'تواصل معنا', expectedUrl: '/contact', expectedTitle: /اتصل بنا/ }",
        "  ];",
        "",
        "  for (const item of navLinks) {",
        "    test('الانتقال السليم إلى صفحة: ' + item.name, async ({ page }) => {",
        "      // البدء من الصفحة الرئيسية",
        "      await page.goto('/');",
        "",
        "      // استهداف الرابط في ترويسة الموقع",
        "      const nav = page.getByRole('navigation', { name: 'القائمة الرئيسية' });",
        "      const link = nav.getByRole('link', { name: item.name });",
        "      ",
        "      // النقر مع التأكد من عدم حدوث أخطاء جافاسكربت في الكونسول",
        "      await link.click();",
        "",
        "      // التحقق من الرابط والترويسة وظهور المحتوى",
        "      await expect(page).toHaveURL(item.expectedUrl);",
        "      await expect(page.getByRole('heading', { level: 1 })).toHaveText(item.expectedTitle);",
        "",
        "      // التأكد من أن الصفحة لا تحتوي على رسائل خطأ عامة",
        "      await expect(page.getByText(/حدث خطأ غير متوقع/)).toBeHidden();",
        "    });",
        "  }",
        "});"
      ].join('\n'),
      output: "يتم فحص كل صفحات الموقع الرئيسية واحدة تلو الأخرى والتأكد من مطابقة الروابط والعناوين وخلوها من الأخطاء.",
      commonMistakes: "كتابة الروابط بنطاق كامل صلب مثل `await page.goto('http://localhost:5173/about')` في كل اختبار؛ استخدم دائماً الروابط النسبية `await page.goto('/about')` ليعتمد Playwright على `baseURL` المعرف في الإعدادات ويعمل الاختبار على السيرفر المحلي والإنتاج بنفس السهولة.",
      bestPractices: "استمع إلى أخطاء الكونسول أثناء التنقل عبر `page.on('pageerror', ...)` للتأكد من عدم وجود أي Unhandled Exceptions غير مرئية أثناء انتقال الصفحات.",
      visualDiagram: "E2E Navigation Verification:\nHome Page (/) ──► Click Link ('/courses') ──► URL: /courses ──► Heading Verified ──► goBack() ──► Home Page (/)"
    },
    {
      id: "19.5.d",
      title: "اختبار تسجيل الدخول",
      englishTerm: "Testing Authentication Journeys (أوث جورني E2E)",
      description: "اختبار تدفق تسجيل الدخول وتخزين الجلسة ومشاركة حالة الدخول بين الصفحات في متصفح حقيقي؛ يشمل: إدخال البريد وكلمة المرور، النقر على زر الدخول، والتحقق من حفظ ملفات تعريف الارتباط (Cookies) أو localStorage، واستخدام ميزة حفظ حالة الجلسة (Storage State) لتجنب إعادة تسجيل الدخول في كل اختبار.",
      analogy: "يشبه بطاقة الدخول الذكية للمبنى؛ تسجل بصمتك عند الباب الرئيسي مرة واحدة في الصباح، وتفتح لك كافة المكاتب والمصاعد طوال اليوم دون أن تطلب منك التبصيم في كل غرفة.",
      whyItMatters: "تسجيل الدخول هو عنق الزجاجة لأي نظام؛ إذا تعطل الدخول يتوقف العمل بالكامل. استخدام Storage State في Playwright يوفر 80% من زمن تشغيل الاختبارات بتخطي خطوة تسجيل الدخول المتكررة.",
      syntax: "// حفظ حالة الجلسة بعد تسجيل الدخول لاستخدامها في باقي الاختبارات:\nawait page.context().storageState({ path: 'playwright/.auth/user.json' });",
      simpleExample: `// اختبار تسجيل دخول مستخدم حقيقي عبر Playwright
import { test, expect } from '@playwright/test';

test('تسجيل دخول ناجح للمستخدم وظهور لوحة التحكم', async ({ page }) => {
  await page.goto('/login');

  // تعبئة الحقول عبر محددات واضحة
  await page.getByLabel('البريد الإلكتروني').fill('student@academy.com');
  await page.getByLabel('كلمة المرور').fill('SuperSecret123!');

  // النقر على زر تسجيل الدخول
  await page.getByRole('button', { name: 'تسجيل الدخول' }).click();

  // التحقق من الانتقال للوحة التحكم وظهور اسم المستخدم
  await expect(page).toHaveURL('/dashboard');
  await expect(page.getByText('مرحباً بك يا طالب العلم')).toBeVisible();
});`,
      advancedExample: [
        "// إعداد التوثيق التلقائي المسبق (Authentication Setup Project) في Playwright لتسجيل الدخول مرة واحدة فقط",
        "// e2e/auth.setup.js",
        "import { test as setup, expect } from '@playwright/test';",
        "",
        "const authFile = 'playwright/.auth/user.json';",
        "",
        "setup('تسجيل الدخول وحفظ حالة الجلسة في ملف JSON', async ({ page }) => {",
        "  // 1. التوجه لصفحة الدخول",
        "  await page.goto('/login');",
        "",
        "  // 2. إدخال بيانات الاعتماد المعتمدة في بيئة الاختبار",
        "  await page.getByLabel('البريد الإلكتروني').fill('testuser@company.com');",
        "  await page.getByLabel('كلمة المرور').fill('TestPassword2026!');",
        "  await page.getByRole('button', { name: 'دخول' }).click();",
        "",
        "  // 3. انتظار اكتمال الانتقال وظهور لوحة الإدارة",
        "  await expect(page).toHaveURL('/dashboard');",
        "",
        "  // 4. حفظ ملف تعريف الارتباط والـ localStorage لاستخدامه في كل الاختبارات اللاحقة بدون تكرار الدخول!",
        "  await page.context().storageState({ path: authFile });",
        "  console.log('✅ تم حفظ جلسة التوثيق بنجاح في:', authFile);",
        "});",
        "",
        "// الآن يمكن لأي اختبار في المشروع استخدام الجلسة الجاهزة فوراً:",
        "/*",
        "test('الوصول المباشر للمسار المحمي دون شاشة تسجيل الدخول', async ({ page }) => {",
        "  await page.goto('/settings');",
        "  await expect(page.getByRole('heading', { name: 'إعدادات الحساب' })).toBeVisible();",
        "});",
        "*/"
      ].join('\n'),
      output: "يتم تسجيل الدخول مرة واحدة فقط عند بدء تشغيل الاختبارات، وتبدأ كافة الاختبارات الأخرى وهي مسجلة الدخول مسبقاً في أجزاء من الثانية.",
      commonMistakes: "كتابة خطوات تسجيل الدخول (ملء الحقول والضغط على الزر) في كتلة `beforeEach` لكل اختبار في المشروع؛ هذا يضيع 80% من وقت الاختبارات في تكرار عملية تسجيل الدخول بلا فائدة. الحل الاحترافي هو Playwright Auth Setup.",
      bestPractices: "اختبر سيناريوهات الأمان الحقيقية في اختبار مخصص للمصادقة: إدخال كلمة مرور خاطئة، الحساب المغلق، ورابط استعادة كلمة المرور المنسية.",
      visualDiagram: "Playwright Auth Setup Workflow:\n[auth.setup.js] ──► Performs Login once ──► Saves cookies to `.auth/user.json`\n                                                  │\n                                                  ▼ (Reused instantly)\n[Dashboard Tests] ◄── [Settings Tests] ◄── [Billing Tests] (All start logged in!)"
    },
    {
      id: "19.5.e",
      title: "اختبار إرسال النماذج",
      englishTerm: "Testing Complex Forms E2E (فورمز E2E)",
      description: "اختبار استمارات الإدخال التفاعلية متعددة الخطوات (Multi-step Wizards) في متصفح حقيقي؛ يشمل: ملء حقول النصوص، واختيار التواريخ عبر منتقي التواريخ (Date Picker)، ورفع الملفات (File Uploading)، والتحقق من رسائل الخطأ الحية، ومحاكاة النقر بزر الفأرة على خيارات القوائم المنسدلة.",
      analogy: "يشبه تقديم طلب تجديد جواز السفر في مكتب الجوازات؛ تملأ الاستمارة، ترفق صورتك الشخصية، تختار موعد الاستلام، وتستلم رقم المعاملة الرسمي مطبوعاً.",
      whyItMatters: "النماذج في المتصفح الحقيقي قد تتأثر بخصائص التحقق الأصلية في HTML5 (مثل required و pattern)، واختبارها بـ E2E يضمن عملها عبر كافة محركات المتصفحات.",
      syntax: "await page.locator('input[type=\"file\"]').setInputFiles('path/to/test-doc.pdf');\nawait page.getByRole('button', { name: 'إرسال' }).click();",
      simpleExample: `// اختبار رفع ملف وإرسال نموذج في Playwright
import { test, expect } from '@playwright/test';
import path from 'path';

test('رفع صورة الهوية وإرسال نموذج التوثيق', async ({ page }) => {
  await page.goto('/kyc-verification');

  // تعبئة البيانات
  await page.getByLabel('رقم الهوية الوطنية').fill('1098765432');

  // محاكاة رفع ملف محلي عبر setInputFiles
  const testFile = path.resolve('e2e/fixtures/sample-id.png');
  await page.locator('input[type="file"]').setInputFiles(testFile);

  // إرسال النموذج
  await page.getByRole('button', { name: 'تقديم الطلب' }).click();

  // التحقق من ظهور رسالة النجاح ورقم الطلب
  await expect(page.getByRole('alert')).toContainText('تم استلام مستنداتك بنجاح');
});`,
      advancedExample: [
        "// اختبار نموذج شراء متعدد الخطوات (Multi-Step Wizard) مع التحقق من كل خطوة",
        "import { test, expect } from '@playwright/test';",
        "",
        "test.describe('معالج الاشتراك المتعدد الخطوات', () => {",
        "  test('إكمال الخطوات الثلاث: البيانات الشخصية، اختيار الخطة، وتأكيد الدفع', async ({ page }) => {",
        "    await page.goto('/subscribe');",
        "",
        "    // ===== الخطوة 1: البيانات الأساسية =====",
        "    await expect(page.getByText('الخطوة 1 من 3')).toBeVisible();",
        "    await page.getByLabel('الاسم').fill('سلمان العتيبي');",
        "    await page.getByLabel('رقم الجوال').fill('0551234567');",
        "    await page.getByRole('button', { name: 'المتابعة للخطوة التالية' }).click();",
        "",
        "    // ===== الخطوة 2: اختيار الخطة =====",
        "    await expect(page.getByText('الخطوة 2 من 3')).toBeVisible();",
        "    // اختيار بطاقة الخطة السنوية",
        "    const annualPlanCard = page.locator('.plan-card').filter({ hasText: 'الاشتراك السنوي' });",
        "    await annualPlanCard.getByRole('button', { name: 'اختيار هذه الخطة' }).click();",
        "",
        "    // ===== الخطوة 3: ملخص الطلب والتأكيد =====",
        "    await expect(page.getByText('الخطوة 3 من 3')).toBeVisible();",
        "    await expect(page.getByText('سلمان العتيبي')).toBeVisible();",
        "    await expect(page.getByText('الاشتراك السنوي')).toBeVisible();",
        "",
        "    // تأكيد الطلب النهائي",
        "    await page.getByRole('button', { name: 'تأكيد ودفع' }).click();",
        "",
        "    // التحقق من الانتقال لصفحة الشكر",
        "    await expect(page).toHaveURL('/order-success');",
        "    await expect(page.getByRole('heading', { name: 'تهانينا! تم تفعيل اشتراكك' })).toBeVisible();",
        "  });",
        "});"
      ].join('\n'),
      output: "يتم اختبار رحلة المستخدم عبر الشاشات المتتالية وتأكيد انتقال البيانات بين الخطوات بنجاح حتى اكتمال المعاملة.",
      commonMistakes: "محاولة النقر على نافذة نظام التشغيل المنبثقة لاختيار الملفات؛ نافذة اختيار الملفات في الويندوز أو الماك لا يمكن للمتصفح التحكم فيها برمجياً، والحل الصحيح دائماً هو استخدام `locator.setInputFiles(...)` في Playwright.",
      bestPractices: "استخدم مجلد `e2e/fixtures/` لتخزين ملفات الاختبار المؤقتة (ملفات PDF، صور تجريبية) لتجربة الرفع دون الاعتماد على ملفات جهازك الشخصي.",
      visualDiagram: "Multi-Step Form E2E:\nStep 1 (Personal Info) ──► Validates ──► Step 2 (Select Plan) ──► Step 3 (Review & Pay) ──► Success Screen!"
    },
    {
      id: "19.5.f",
      title: "اختبار العمليات الأساسية للمستخدم",
      englishTerm: "Testing Critical User Journeys (كريتيكال جورنيز)",
      description: "التركيز على اختبار المسارات الحيوية والتجارية الأكثر ربحية وأهمية في التطبيق (Critical User Journeys - CUJs)؛ مثل مسار: تسجيل الدخول ➔ البحث عن كورس ➔ إضافة الكورس للسلة ➔ تطبيق كوبون خصم ➔ الدفع بالبطاقة ➔ استلام فاتورة الدورة.",
      analogy: "يشبه فحص شريان الحياة الرئيسي للمستشفى (المولد الكهربائي وخزان الأكسجين)؛ هذه هي الأشياء التي إذا تعطلت تتوقف الحياة فوراً.",
      whyItMatters: "حماية إيرادات الشركة وسمعتها؛ تعطل زر تافه في شريط الفوتر لا يضر، لكن تعطل زر 'إتمام الشراء' يعني خسارة آلاف الدولارات في كل دقيقة.",
      syntax: "// اختبار التدفق الكامل من البداية للنهاية في ملف واحد متماسك:\ntest('Critical Purchase Flow', async ({ page }) => { ... });",
      simpleExample: `// اختبار مسار المستخدم الحرج لشراء كورس
import { test, expect } from '@playwright/test';

test('رحلة شراء كورس كاملة للمستخدم', async ({ page }) => {
  // 1. فتح كتالوج الكورسات
  await page.goto('/courses');

  // 2. البحث عن كورس React
  await page.getByPlaceholder('ابحث عن كورس...').fill('React');
  await page.keyboard.press('Enter');

  // 3. فتح صفحة الكورس
  await page.getByRole('link', { name: 'دورة React الشاملة 2026' }).click();

  // 4. النقر على اشترك الآن
  await page.getByRole('button', { name: 'اشترك الآن' }).click();

  // 5. التحقق من الوصول لصفحة الدفع
  await expect(page).toHaveURL(/\\/checkout/);
  await expect(page.getByText('المجموع الإجمالي:')).toBeVisible();
});`,
      advancedExample: [
        "// اختبار سيناريو تجاري معقد يضم إضافة منتج، تطبيق كوبون، والتحقق من حساب الخصم لحظياً",
        "import { test, expect } from '@playwright/test';",
        "",
        "test.describe('رحلة المبيعات والتخفيضات التجارية', () => {",
        "  test('تطبيق كوبون تخفيض 20% والتحقق من خصم السعر الإجمالي في شاشة الدفع', async ({ page }) => {",
        "    // فتح صفحة سلة المشتريات مسبقة التعبئة",
        "    await page.goto('/cart');",
        "",
        "    // التحقق من السعر المبدئي (مثلاً 500 ريال)",
        "    const totalEl = page.locator('#cart-subtotal');",
        "    await expect(totalEl).toHaveText('500.00 ر.س');",
        "",
        "    // إدخال كوبون تخفيض",
        "    const couponInput = page.getByPlaceholder('رمز الكوبون');",
        "    await couponInput.fill('REACT20');",
        "    await page.getByRole('button', { name: 'تطبيق الكوبون' }).click();",
        "",
        "    // التحقق من ظهور شارة نجاح الكوبون",
        "    await expect(page.getByText('تم تطبيق خصم 20% بنجاح')).toBeVisible();",
        "",
        "    // التحقق من حساب السعر الجديد بدقة (400 ريال)",
        "    const finalTotal = page.locator('#cart-final-total');",
        "    await expect(finalTotal).toHaveText('400.00 ر.س');",
        "",
        "    // المتابعة للدفع",
        "    await page.getByRole('button', { name: 'المتابعة للدفع' }).click();",
        "    await expect(page).toHaveURL('/checkout');",
        "  });",
        "});"
      ].join('\n'),
      output: "يتم التأكد من سلامة الحسابات المالية والخصومات وسلاسة مسار الشراء في متصفح حقيقي.",
      commonMistakes: "كتابة اختبارات E2E للوظائف الثانوية مثل تغيير الصورة الشخصية أو تبديل اللغة في الفوتر؛ اختبارات E2E مكلفة وبطيئة ويجب حصرها حصرياً في المسارات التجارية الحساسة (CUJs).",
      bestPractices: "اجعل لكل مشروع ما بين 5 إلى 15 اختبار E2E فقط يغطون مسارات العمل الرئيسية، واعتمد على اختبارات التكامل (RTL) لباقي تفاصيل الواجهة.",
      visualDiagram: "Critical User Journey (CUJ):\nSearch Course ──► Add to Cart ──► Apply Coupon (-20%) ──► Checkout ──► Stripe Payment ──► Receipt"
    },
    {
      id: "19.5.g",
      title: "اختبار أحجام الشاشات المختلفة",
      englishTerm: "Responsive & Mobile Testing (ريسبونسف تيستينغ E2E)",
      description: "اختبار التطبيق على أبعاد وأحجام شاشات متباينة (الهواتف الذكية Mobile، الأجهزة اللوحية Tablets، والشاشات العريضة Desktop)؛ والتحقق من تحول شريط التنقل إلى قائمة هامبورجر (Hamburger Menu)، وسلاسة التمرير باللمس، وتوافق العناصر اللمسية (Touch targets).",
      analogy: "يشبه فحص ملائمة البذلة؛ تجربتها وأنت واقف، وأنت جالس، وأنت تتحرك للتأكد من أنها مريحة ومقاسها مثالي في كل وضعيات الجسم.",
      whyItMatters: "أكثر من 65% من زيارات الويب اليوم تأتي عبر الهواتف الذكية؛ أي خلل في القائمة المتجاوبة أو تداخل النصوص على الشاشات الصغيرة يؤدي لفقدان العملاء فوراً.",
      syntax: "test.use({ viewport: { width: 375, height: 667 } }); // محاكاة شاشة هاتف محمول\n// أو استخدام أجهزة Playwright الجاهزة: devices['iPhone 13']",
      simpleExample: `// اختبار قائمة الهاتف المتنقلة عبر Playwright
import { test, expect, devices } from '@playwright/test';

// ضبط الاختبار ليعمل بمحاكاة شاشة آيفون
test.use({ ...devices['iPhone 13'] });

test('ظهور زر قائمة الهامبورجر وفتح القائمة الجانبية في الهاتف', async ({ page }) => {
  await page.goto('/');

  // في شاشة الهاتف: الروابط الأفقية العادية يجب أن تختفي
  await expect(page.getByRole('link', { name: 'المدونة' })).toBeHidden();

  // يجب أن يظهر زر القائمة (Hamburger Menu)
  const menuButton = page.getByRole('button', { name: 'فتح القائمة' });
  await expect(menuButton).toBeVisible();

  // النقر على زر القائمة وفتح الشريط الجانبي
  await menuButton.click();

  // الآن رابط المدونة يظهر داخل القائمة المفتوحة
  await expect(page.getByRole('link', { name: 'المدونة' })).toBeVisible();
});`,
      advancedExample: [
        "// اختبار مقارنة متجاوبة متعدد الأبعاد يتحقق من سلوك الجداول والشبكات على الجوال والحاسوب",
        "import { test, expect } from '@playwright/test';",
        "",
        "const VIEWPORTS = [",
        "  { name: 'Mobile', width: 390, height: 844, isMobile: true },",
        "  { name: 'Tablet', width: 768, height: 1024, isMobile: false },",
        "  { name: 'Desktop', width: 1440, height: 900, isMobile: false }",
        "];",
        "",
        "for (const vp of VIEWPORTS) {",
        "  test('فحص تناسق لوحة التحكم على شاشة: ' + vp.name, async ({ page }) => {",
        "    // ضبط أبعاد الشاشة الحالية",
        "    await page.setViewportSize({ width: vp.width, height: vp.height });",
        "    await page.goto('/dashboard');",
        "",
        "    if (vp.isMobile) {",
        "      // على الهاتف: الشريط الجانبي مغلق افتراضياً",
        "      await expect(page.locator('#desktop-sidebar')).toBeHidden();",
        "      // الجدول يتحول لكروت عمودية أو تمرير أفقي مخصص",
        "      await expect(page.locator('.mobile-card-view')).toBeVisible();",
        "    } else {",
        "      // على الحاسوب والتابلت: الشريط الجانبي مفتوح دائماً",
        "      await expect(page.locator('#desktop-sidebar')).toBeVisible();",
        "      await expect(page.locator('.desktop-table-view')).toBeVisible();",
        "    }",
        "  });",
        "}",
        ""
      ].join('\n'),
      output: "يتم فحص نفس الكود على كافة مقاسات الشاشات للتأكد من عمل الميديا كويري وقوائم الهامبورجر بنجاح.",
      commonMistakes: "الاعتماد فقط على تغيير عرض الشاشة `setViewportSize` دون محاكاة أحداث اللمس `hasTouch: true`؛ بعض المكونات تتصرف بطريقة مختلفة عند وجود شاشة لمس حقيقية. استخدم دائماً قوالب `devices['...']` الجاهزة في Playwright.",
      bestPractices: "عرف مشاريع مستقلة في ملف `playwright.config.js` لكل جهاز رئيسي (Desktop Chrome و Mobile Safari) لتشغيل الاختبارات المتجاوبة تلقائياً وبشكل متوازٍ.",
      visualDiagram: "Responsive Viewport Matrix:\nDesktop (1440px) ──► Full Navigation Bar + Multi-column Grid\nTablet  (768px)  ──► Collapsible Sidebar\nMobile  (375px)  ──► Hamburger Menu Button + Single Column Stack"
    },
    {
      id: "19.5.h",
      title: "تشغيل الاختبارات على المتصفحات المختلفة",
      englishTerm: "Cross-Browser Testing (كروس براوزر تيستينغ)",
      description: "تشغيل نفس مجموعة الاختبارات بالتوازي على كافة محركات المتصفحات الثلاثة الكبرى في العالم: Chromium (Google Chrome, Microsoft Edge, Brave)، و Gecko (Mozilla Firefox)، و WebKit (Apple Safari على iOS و macOS) للتأكد من خلو الموقع من أي أخطاء خاصة بمتصفح محدد.",
      analogy: "يشبه إطلاق دواء جديد في 3 قارات مختلفة للتأكد من فعاليته ومأمونيته مع كافة الأعراق والبيئات دون أي آثار جانبية نادرة في منطقة معينة.",
      whyItMatters: "توجد فروق حقيقية بين محرك Safari (WebKit) ومحرك Chrome (Chromium) في دعم خصائص CSS الحديثة والتنسيقات؛ تشغيل الاختبارات عليها يضمن تجربة متطابقة لكافة الزوار.",
      syntax: "# تشغيل الاختبارات على محرك سفاري فقط:\nnpx playwright test --project=\"Desktop Safari\"\n# تشغيل كافة المتصفحات بالتوازي:\nnpx playwright test",
      simpleExample: `// مثال على أمر تشغيل كافة المتصفحات في سطر الأوامر
/*
# تشغيل كروم وفايرفوكس وسفاري معاً:
npx playwright test

# تشغيل متصفح فايرفوكس فقط:
npx playwright test --project="firefox"

# تشغيل متصفح سفاري بالواجهة الرسومية:
npx playwright test --project="webkit" --headed
*/

// داخل كود الاختبار يمكن التحقق من اسم المتصفح إذا لزم الأمر
import { test, expect } from '@playwright/test';

test('فحص دعم ميزة محددة عبر المتصفحات', async ({ page, browserName }) => {
  console.log('الاختبار يعمل حالياً على محرك:', browserName);
  await page.goto('/');
  await expect(page.locator('body')).toBeVisible();
});`,
      advancedExample: [
        "// اختبار متقدم لفحص التوافقية العابرة للمتصفحات (Cross-Browser Date & Input Handling)",
        "import { test, expect } from '@playwright/test';",
        "",
        "test.describe('فحص التوافقية مع محركات المتصفحات الثلاثة', () => {",
        "  test('معالجة منتقي التواريخ وتنسيقات الألوان في محركات Chromium و WebKit و Firefox', async ({ page, browserName }) => {",
        "    await page.goto('/booking');",
        "",
        "    // فحص حقل التاريخ",
        "    const dateInput = page.getByLabel('تاريخ الحجز');",
        "    await expect(dateInput).toBeVisible();",
        "    ",
        "    // إدخال التاريخ بالصيغة المعيارية ISO",
        "    await dateInput.fill('2026-05-15');",
        "    await expect(dateInput).toHaveValue('2026-05-15');",
        "",
        "    // فحص دعم تنسيق خطوط وتأثيرات الـ CSS الحديثة (مثل backdrop-filter)",
        "    const modal = page.locator('.glass-modal');",
        "    if (await modal.isVisible()) {",
        "      const backdrop = await modal.evaluate((el) => {",
        "        return window.getComputedStyle(el).backdropFilter || window.getComputedStyle(el).webkitBackdropFilter;",
        "      });",
        "      // يجب أن يدعم المتصفح تأثير الزجاج المصنفر",
        "      expect(backdrop).toBeDefined();",
        "      console.log('[' + browserName + '] خاصية Backdrop Filter مدعومة بنجاح.');",
        "    }",
        "  });",
        "});"
      ].join('\n'),
      output: "يقوم Playwright بتشغيل 3 جلسات متصفح مستقلة في الخلفية، ويُظهر نتائج نجاح خضراء منفصلة لكل محرك: ✓ [Chromium] (1.2s) | ✓ [Firefox] (1.5s) | ✓ [WebKit] (1.8s).",
      commonMistakes: "تجاهل اختبار محرك WebKit (سفاري) بدعوى أن المطور يعمل على ويندوز؛ الميزة الكبرى لـ Playwright هي أنه يقوم بتجميع وتشغيل محرك WebKit الحقيقي على نظام Windows و Linux بكفاءة تامة دون الحاجة لجهاز Mac!",
      bestPractices: "فعل تشغيل كافة المتصفحات في اختبارات الـ Pull Requests على GitHub Actions لضمان عدم تمرير أي كود يكسر تجربة مستخدمي أجهزة Apple.",
      visualDiagram: "Cross-Browser Matrix in Playwright:\nTest Spec ──► Chromium (Chrome, Edge, Brave) ──► [PASS]\n          ──► Firefox  (Gecko engine)          ──► [PASS]\n          ──► WebKit   (Safari on macOS/iOS)   ──► [PASS]"
    },
    {
      id: "19.5.i",
      title: "تحليل Screenshots و Traces عند الفشل",
      englishTerm: "Debugging with Screenshots & Trace Viewer (تريس فيور)",
      description: "الأداة الأكثر إبهاراً في Playwright لتصحيح أخطاء الاختبارات المعطلة؛ ميزة `Trace Viewer` تسجل لقطة كاملة لكل ميلي ثانية من الاختبار (DOM Snapshots، لقطات الشاشة لكل نقرة، طلبات واستجابات الشبكة Network، وسجلات الكونسول Console Logs) لتتمكن من السفر عبر الزمن ورؤية سبب الفشل بالضبط.",
      analogy: "يشبه إعادة لقطة الفيديو التلفزيونية بتقنية الفار (VAR) بزاوية 360 درجة وبالحركة البطيئة فائقة الدقة لمعرفة هل لامست الكرة يد اللاعب في منطقة الجزاء أم لا.",
      whyItMatters: "يقضي على غموض الاختبارات التي تفشل فجأة على خوادم الـ CI؛ تفتح ملف الـ Trace لترى شاشة المتصفح ورسائل الخطأ في نفس اللحظة التي فشل فيها الاختبار وكأنك كنت تجلس أمامه.",
      syntax: "# فتح تقرير التتبع التفاعلي المسجل:\nnpx playwright show-trace trace.zip",
      simpleExample: `// التقاط صورة للشاشة يدوياً أو تلقائياً في كود الاختبار
import { test, expect } from '@playwright/test';

test('التقاط لقطة شاشة مرئية لصفحة الفاتورة', async ({ page }) => {
  await page.goto('/invoices/inv-2026');

  // التقاط صورة وحفظها في مجلد الصور
  await page.screenshot({ path: 'e2e/screenshots/invoice-proof.png', fullPage: true });

  await expect(page.getByRole('heading', { name: 'فاتورة ضريبية' })).toBeVisible();
});`,
      advancedExample: [
        "// إعداد التقاط الـ Traces الذكي ومقارنة الصور المرئية (Visual Regression Testing)",
        "import { test, expect } from '@playwright/test';",
        "",
        "test.describe('الاختبار البصري وتتبع الأخطاء الدقيق', () => {",
        "  test('مقارنة لقطة الشاشة البصرية لكارت المنتج ومنع التشوهات التنسيقية', async ({ page }) => {",
        "    await page.goto('/products/sample');",
        "",
        "    // استهداف العنصر المراد مقارنته بصرياً",
        "    const productCard = page.locator('.product-hero-card');",
        "    await expect(productCard).toBeVisible();",
        "",
        "    // مقارنة لقطة الشاشة بالصورة المرجعية المخزنة (Pixel-by-pixel visual diff)",
        "    // إذا اختلف التنسيق أو تحرك بكسل واحد سيفشل الاختبار ويولد صورة الفروقات!",
        "    await expect(productCard).toHaveScreenshot('product-hero-baseline.png', {",
        "      maxDiffPixelRatio: 0.02 // السماح بتفاوت طفيف 2% لاختلاف معالجة الخطوط",
        "    });",
        "  });",
        "});"
      ].join('\n'),
      output: "في حال حدوث أي خطأ، ينشئ Playwright ملف trace.zip وتقرير HTML تفاعلي يتيح لك تحريك مؤشر التمرير لرؤية حالة المتصفح قبل وبعد كل نقرة.",
      commonMistakes: "تفعيل خيار `trace: 'on'` بشكل دائم على كافة الاختبارات الناجحة والفاشلة في بيئة CI الكبيرة؛ هذا يُنتج ملفات مضغوطة بمئات الميجابايتات. الإعداد الأمثل هو `trace: 'on-first-retry'` أو `'retain-on-failure'`.",
      bestPractices: "عند فشل اختبار في GitHub Actions، قم بتحميل ملف الـ `trace.zip` من مرفقات الـ Artifacts وشغله محلياً عبر `npx playwright show-trace` لحل المشكلة في دقائق معدودة.",
      visualDiagram: "Playwright Trace Viewer GUI:\n┌────────────────────────────────────────────────────────┐\n│ Timeline: [0.0s] ➔ [0.5s Click] ➔ [1.2s Network] ➔ [FAIL]│\n├──────────────────────────┬─────────────────────────────┤\n│ Action Log & DOM Snapshot│ Live Screenshot at Failure  │\n│ - locator.click()        │ [🔴 Button was disabled!]   │\n│ - Network: 500 Error     │                             │\n└──────────────────────────┴─────────────────────────────┘"
    }
  ],
  quizzes: [
    {
      id: "q19.5.1",
      question: "ما الفائدة الكبرى لخاصية Auto-waiting في Playwright؟",
      options: [
        "أنها تجعل المتصفح يعمل بدون كهرباء.",
        "أنها تنتظر تلقائياً حتى يصبح العنصر مرئياً ومستقراً وقابلاً للنقر في الـ DOM قبل محاولة التفاعل معه، مما يلغي الحاجة لكتابة أوامر sleep اليدوية المؤرقة.",
        "أنها تقوم بإلغاء الاختبارات البطيئة فوراً.",
        "أنها تقوم بتحديث كود React تلقائياً."
      ],
      correctAnswer: 1,
      explanation: "تقوم Playwright بعمليات تحقق داخلية صارمة (Actionability Checks) قبل أي نقرة أو كتابة، فتتأكد من أن العنصر مرئي ومفعل ومستقر وغير مغطى بعنصر آخر، مما يقضي على مشاكل التذبذب."
    },
    {
      id: "q19.5.2",
      question: "كيف توفر ميزة Storage State في Playwright وقتاً هائلاً في اختبارات الأنظمة التي تتطلب تسجيل دخول؟",
      options: [
        "بإلغاء كلمات المرور من النظام.",
        "بتسجيل الدخول مرة واحدة فقط في البداية وحفظ الـ Cookies والـ Storage في ملف JSON، لتبدأ باقي مئات الاختبارات وجلستها مسجلة الدخول مسبقاً دون تكرار تعبئة النموذج.",
        "بحذف ملفات تعريف الارتباط بعد كل ثانية.",
        "بتحويل المستخدم إلى مشرف عام تلقائياً."
      ],
      correctAnswer: 1,
      explanation: "بدلاً من أن يستغرق كل اختبار 3 ثوانٍ في كتابة البريد وكلمة المرور وتخزين التوكن، تبدأ الاختبارات مباشرة بالملف المحفوظ مما يوفر دقائق وساعات من زمن الـ CI."
    },
    {
      id: "q19.5.3",
      question: "ماذا يقدم لك برنامج Playwright Trace Viewer عند فحص اختبار معطل؟",
      options: [
        "يقوم بإرسال رسالة اعتذار للعميل.",
        "يقدم تسجيلاً زمنياً كاملاً وتفاعلياً للـ DOM، ولقطات الشاشة، وطلبات الشبكة، وسجلات الكونسول لكل خطوة من خطوات الاختبار قبل وبعد الفشل.",
        "يقوم بحذف ملف الاختبار المعطل من المشروع.",
        "يقوم بإعادة تشغيل الكمبيوتر."
      ],
      correctAnswer: 1,
      explanation: "أداة Trace Viewer هي أشبه بالصندوق الأسود للطائرة؛ تسمح لك بإعادة تشغيل الاختبار ثانية بثانية والتنقل بين الحالات واستعراض استجابات الشبكة بدقة متناهية."
    }
  ],
  exercise: {
    title: "تمرين عملي: كتابة سيناريو E2E كامل لنموذج إضافة مقال جديد والتحقق من ظهوره",
    description: "اكتب اختبار Playwright متكامل يتوجه إلى صفحة /new-post، ويقوم بتعبئة عنوان المقال والمحتوى واختيار تصنيف من القائمة، ثم ينقر على زر 'نشر'، ويتأكد من الانتقال إلى صفحة المقال وظهور العنوان والكاتب بنجاح.",
    hints: [
      "استخدم page.goto('/new-post').",
      "استخدم page.getByLabel لملء العنوان والمحتوى.",
      "استخدم page.getByRole('button', { name: 'نشر' }).click().",
      "تحقق من الرابط عبر expect(page).toHaveURL(/\\/posts\\//)."
    ],
    solution: `import { test, expect } from '@playwright/test';

test('رحلة كتابة ونشر مقال جديد بنجاح عبر Playwright', async ({ page }) => {
  // 1. التوجه لصفحة إنشاء المقال
  await page.goto('/new-post');

  // 2. تعبئة البيانات
  await page.getByLabel('عنوان المقال').fill('دليل أداء React 19 الشامل');
  await page.getByLabel('محتوى المقال').fill('في هذا المقال سنتناول أحدث تقنيات تحسين الأداء...');
  
  // اختيار التصنيف
  await page.getByLabel('التصنيف').selectOption('web-dev');

  // 3. النقر على زر النشر
  await page.getByRole('button', { name: 'نشر المقال' }).click();

  // 4. التحقق من الانتقال التلقائي لصفحة المقال المنشور
  await expect(page).toHaveURL(/\\/posts\\/dlyl-ada-react/);

  // 5. التحقق من ظهور الترويسة الرئيسية بالمحتوى المدخل
  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toHaveText('دليل أداء React 19 الشامل');
  await expect(page.getByText('تم النشر بواسطة: الكاتب')).toBeVisible();
});`
  },
  infographic: {
    title: "منظومة اختبارات الطرف إلى الطرف (E2E) مع Playwright",
    subtitle: "الدليل الشامل لاختبار المتصفحات الحديثة برمجياً بثقة مطلقة",
    steps: [
      { step: "1", title: "محاكاة المتصفحات الثلاثة", desc: "تشغيل متوازي على محركات Chromium و Firefox و WebKit (Safari) بكود موحد." },
      { step: "2", title: "الانتظار الذكي Auto-waiting", desc: "استقرار تام ضد أخطاء التذبذب دون الحاجة لكتابة أوامر sleep يدوية." },
      { step: "3", title: "تسريع التوثيق Auth Storage", desc: "تسجيل الدخول مرة واحدة ومشاركة حالة الجلسة لتسريع كافة الاختبارات بـ 80%." },
      { step: "4", title: "Trace Viewer السحري", desc: "تسجيل كامل للـ DOM والشبكة والفيديو للرجوع بالزمن وحل الأخطاء المعقدة فوراً." }
    ]
  }
};
