// src/data/sections/section28/topic3.js
// القسم 28: بناء التطبيقات ونشرها - الموضوع 3: التكامل والنشر المستمر (CI/CD)

export const topic3 = {
  id: "28.3",
  title: "التكامل والنشر المستمر (CI/CD)",
  englishTitle: "Continuous Integration & Continuous Deployment (CI/CD)",
  description:
    "الدليل الهندسي المتقدم لأتمتة خطوط أنابيب التكامل والنشر المستمر (CI/CD Pipelines) لتطبيقات React: فهم فلسفة CI وCD والفارق بين Continuous Delivery وContinuous Deployment، بناء خطوط أنابيب GitHub Actions متقدمة ومتوازية، أتمتة فحوصات ESLint وTypeScript واختبارات الوحدة مع تقارير التغطية، تشييد مراحل البناء المعتمدة على النجاح السابق، تأمين وإدارة الأسرار والمفاتيح الحساسة في السحابة، وتطبيق استراتيجيات التراجع الآلي السريع (Automated Rollback) لضمان موثوقية الإنتاج.",
  subtopics: [
    {
      id: "28.3.a",
      title: "مفهوم التكامل المستمر Continuous Integration",
      englishTerm: {
        term: "Continuous Integration (CI)",
        pronunciation: "كونتينوس إنتجريشن",
        meaning: "ممارسة هندسية تلزم المطورين بدمج تعديلاتهم البرمجية باستمرار مع فحصها واختبارها آلياً مع كل إيداع"
      },
      description:
        "التكامل المستمر (CI) هو الأساس المتين لهندسة البرمجيات الحديثة. في الطرق القديمة، كان كل مطور يعمل على فرعه بمعزل عن الفريق لأسابيع ثم يحاول الجميع دمج أكوادهم في نهاية الشهر فيما كان يُعرف بـ 'جحيم الدمج' (Merge Hell)، حيث تظهر مئات التعارضات والأخطاء الخفية. تعالج فلسفة الـ CI هذه المعضلة عبر دمج الكود بشكل متكرر (عدة مرات يومياً في الفرع المشترك)، مقترناً بخادم فحص آلي مستقل يقوم باستنساخ الكود، وتثبيت الحزم، وفحص التنسيق، وتشغيل كافة الاختبارات المؤتمتة مع كل عملية push. إذا انكسر أي اختبار، يتم تنبيه الفريق فوراً لإصلاحه في مهده قبل أن يتفاقم.",
      realWorldAnalogy:
        "يشبه مختبر فحص جودة المياه في شبكة مياه المدينة؛ بدلاً من فحص المياه مرة واحدة كل عام بعد أن يتسمم السكان، يتم تركيب حساسات رقمية تفحص كل لتر ماء يتدفق عبر الأنابيب في كل ثانية، وإذا تم رصد أي تلوث، يتم إغلاق الصمام فوراً وتنبيه طاقم الصيانة لمعالجة مصدر التلوث على الفور.",
      whyItMatters:
        "يكتشف العيوب البرمجية في أول 5 دقائق من كتابتها بدلاً من اكتشافها بعد أسابيع في الإنتاج، ويقلل تكلفة إصلاح الأخطاء بنسبة 90%، ويمنح الفريق ثقة كاملة في استقرار الفرع الرئيسي.",
      syntax:
        "# مسار تدفق الـ CI النموذجي في كل PR:\nCode Push ➔ Lint Check ➔ Type Check (TypeScript) ➔ Unit Tests ➔ Build Verification",
      codeExample: `// مثال مفاهيمي: محاكاة خط أنابيب الفحص الآلي CI Pipeline في JavaScript
async function runContinuousIntegrationPipeline() {
  console.log('🚀 [CI Runner] بدء خط أنابيب الفحص الآلي للكود...');

  // 1. مرحلة الفحص اللغوي والتنسيق
  const lintPass = await runTask('npm run lint');
  if (!lintPass) throw new Error('❌ فشل فحص ESLint: توجد أخطاء تنسيق أو متغيرات غير مستخدمة!');

  // 2. مرحلة فحص الأنظمة والأنواع
  const typesPass = await runTask('tsc --noEmit');
  if (!typesPass) throw new Error('❌ فشل فحص TypeScript: تعارض في أنواع البيانات الممررة للمكونات!');

  // 3. مرحلة تشغيل الاختبارات الآلية
  const testsPass = await runTask('npm test -- --run');
  if (!testsPass) throw new Error('❌ فشلت اختبارات الوحدة: هناك وظيفة قديمة انكسرت بسبب التعديل الجديد!');

  console.log('✅ [CI Runner] كافة الفحوصات نجحت بنسبة 100%! الفرع مؤهل تماماً للدمج.');
}

// دالة مساعدة لمحاكاة تنفيذ الأوامر
function runTask(command) {
  console.log('⏳ جارٍ تنفيذ:', command);
  return Promise.resolve(true);
}

runContinuousIntegrationPipeline();`,
      advancedExample: `// مثال متقدم: لوحة رصد نتائج خط أنابيب الـ CI اللحظية في React
import React, { useState } from 'react';

export function CiStatusDashboard() {
  const [pipeline] = useState([
    { id: 1, name: 'Lint & Formatting', tool: 'ESLint + Prettier', status: 'passed', duration: '12s' },
    { id: 2, name: 'Type Checking', tool: 'TypeScript (tsc)', status: 'passed', duration: '18s' },
    { id: 3, name: 'Unit Tests', tool: 'Vitest (48 tests)', status: 'passed', duration: '24s' },
    { id: 4, name: 'Bundle Build', tool: 'Vite Production Build', status: 'passed', duration: '15s' },
    { id: 5, name: 'Security Audit', tool: 'npm audit (0 vulnerabilities)', status: 'passed', duration: '8s' }
  ]);

  const totalTime = pipeline.reduce((acc, step) => acc + parseInt(step.duration), 0);

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-slate-100 font-sans">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-4">
        <div>
          <h3 className="font-bold text-white text-base">حالة خط أنابيب التكامل المستمر (CI Pipeline)</h3>
          <p className="text-xs text-slate-400">سجل الفحوصات الإلزامية لطلب السحب #84</p>
        </div>
        <div className="text-right">
          <span className="px-3 py-1 bg-emerald-950 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold font-mono">
            All Checks Passed ✅
          </span>
          <div className="text-[10px] text-slate-500 mt-1 font-mono">إجمالي الوقت: {totalTime} ثانية</div>
        </div>
      </div>

      <div className="space-y-2">
        {pipeline.map(step => (
          <div key={step.id} className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-bold text-white">{step.name}</span>
              <span className="text-slate-500 font-mono text-[11px]">({step.tool})</span>
            </div>
            <span className="font-mono text-slate-400">{step.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output:
        "حماية مؤتمتة للمستودع؛ حيث يتم التحقق من كل سطر كود جديد ومطابقته لكافة معايير الجودة والأداء قبل السماح بدخوله إلى المشروع.",
      commonMistakes: [
        {
          mistake: "الاعتماد على الفحص اليدوي من قِبل المراجعين وإهمال بناء خط أنابيب CI آلي في المشروع.",
          fix: "تفعيل GitHub Actions لفحص الكود آلياً لتفريغ وقت المراجعين البشريين لمراجعة المنطق المعماري وتجربة المستخدم فقط."
        },
        {
          mistake: "بناء خط أنابيب CI بطيء جداً يستغرق 30 دقيقة، مما يدفع المطورين للتململ ومحاولة تجاوزه.",
          fix: "تسريع الـ CI عبر تفعيل كاش الحزم (actions/setup-node cache) وتشغيل المهام غير المترابطة بالتوازي (Parallel Jobs)."
        }
      ],
      bestPractices: [
        "فعّل خيار 'Require status checks to pass before merging' في إعدادات حماية فرع main على GitHub.",
        "اجعل زمن تنفيذ خط أنابيب الـ CI أقل من 3 إلى 5 دقائق للحفاظ على سرعة وتيرة التطوير.",
        "إذا فشل الـ CI، يجب أن تكون الأولوية القصوى للمطور هي إصلاح الخلل فوراً قبل بدء أي مهمة جديدة."
      ],
      infographic: {
        title: "أركان خط أنابيب التكامل المستمر (CI)",
        nodes: [
          { label: "1. الفحص اللغوي (Lint)", desc: "التأكد من التنسيق وغياب الأخطاء التركيبية بـ ESLint" },
          { label: "2. فحص الأنواع (Types)", desc: "تشغيل tsc للتأكد من توافق أنواع البيانات والمكونات" },
          { label: "3. الاختبارات الآلية (Tests)", desc: "تشغيل كافة اختبارات الوحدة والتكامل بـ Vitest" },
          { label: "4. التحقق من البناء (Build)", desc: "التأكد من نجاح تجميع الحزمة دون أي خطأ تصيير مفقود" }
        ]
      }
    },
    {
      id: "28.3.b",
      title: "مفهوم النشر والتسليم المستمر Continuous Deployment",
      englishTerm: {
        term: "Continuous Delivery vs Deployment (CD)",
        pronunciation: "كونتينوس ديبلويمنت",
        meaning: "أتمتة عملية إطلاق ونشر الكود إلى خوادم الإنتاج بمجرد اجتياز كافة الفحوصات الآلية بنجاح"
      },
      description:
        "يمثل الـ CD النصف الثاني المكمل لمنظومة DevOps الحديثة. هناك فارق دقيق وحاسم بين مصطلحين: 1) التسليم المستمر (Continuous Delivery): يعني أن كل تعديل يجتاز خط أنابيب الـ CI يصبح جاهزاً ومؤهلاً تماماً للإطلاق في أي لحظة، ولكن عملية النشر الفعلي للإنتاج تتطلب نقرة موافقة بشرية واحدة (Manual Approval Gate). 2) النشر المستمر (Continuous Deployment): وهو المستوى الأعلى من الأتمتة والنضج الهندسي؛ حيث يتم نشر الكود إلى خوادم الإنتاج للعملاء تلقائياً وبشكل فوري بمجرد دمج الـ PR ونجاح الاختبارات، دون أي تدخل أو موافقة بشرية على الإطلاق.",
      realWorldAnalogy:
        "التسليم المستمر (Continuous Delivery) يشبه تجهيز شحنة البضائع وفحصها ووضعها على رصيف التحميل وربطها بالأحزمة، ولكن السائق ينتظر توقيع المشرف قبل الانطلاق. بينما النشر المستمر (Continuous Deployment) يشبه نظام سيور النقل الذكية الآلية بالكامل؛ بمجرد أن تجتاز الحقيبة الفحص الأمني، تنتقل آلياً إلى الطائرة فوراً دون انتظار أي توقيع.",
      whyItMatters:
        "يقضي على رهاب يوم الإطلاق (Release Day Fear)، ويقلل زمن وصول الميزات من شهور إلى دقائق، ويجعل كل إصدار صغيراً جداً ويسهل تتبعه والتراجع عنه في حال حدوث أي طارئ.",
      syntax:
        "# مسار النشر المستمر الآلي الكامل:\nPR Approved & Merged ➔ CI Passes ➔ Deploy to Production ➔ Health Check OK ➔ Live to Users!",
      codeExample: `// مثال توضيحي: مصفوفة المقارنة الفنية بين Delivery و Deployment
const cdComparison = {
  continuousDelivery: {
    name: "التسليم المستمر (Continuous Delivery)",
    trigger: "يدوي بعد اكتمال الفحص (One-click manual deploy)",
    riskLevel: "منخفض جداً (يناسب المؤسسات المالية والأنظمة البنكية الحذرة)",
    releaseFrequency: "أسبوعياً أو فصلياً بعد مراجعة الإدارة"
  },
  continuousDeployment: {
    name: "النشر المستمر (Continuous Deployment)",
    trigger: "آلي بالكامل 100% بمجرد الدمج في main",
    riskLevel: "يتطلب تغطية اختبارات تفوق 90% ومراقبة أخطاء لحظية",
    releaseFrequency: "عشرات المرات يومياً بمجرد إنجاز كل ميزة صغيرة"
  }
};

console.log('مستويات الأتمتة المعتمدة:', Object.keys(cdComparison));`,
      advancedExample: `// مثال متقدم: التحقق الآلي من سلامة الموقع بعد النشر (Automated Post-Deploy Health Check)
// كود نصي يتم تنفيذه في خطوة الـ CD بعد اكتمال النشر للتأكد من استجابة السيرفر:

async function verifyProductionHealth(productionUrl) {
  console.log(\`🔍 بدء فحص السلامة بعد النشر على: \${productionUrl}\`);
  const maxRetries = 5;
  let attempt = 0;

  while (attempt < maxRetries) {
    attempt++;
    try {
      // إرسال طلب فحص لصفحة الموقع أو نقطة نهاية /api/health
      const response = await fetch(\`\${productionUrl}/favicon.ico\`, { cache: 'no-store' });
      
      if (response.ok && response.status === 200) {
        console.log(\`✅ [Health Check] الموقع الحي يستجيب بنجاح برمز 200 OK في المحاولة رقم \${attempt}\`);
        return true;
      }
    } catch {
      console.warn(\`⏳ المحاولة رقم \${attempt}: السيرفر لم يستجب بعد، انتظار 5 ثوانٍ...\`);
    }
    // الانتظار 5 ثوانٍ قبل المحاولة التالية
    await new Promise(res => setTimeout(res, 5000));
  }

  // في حال فشلت كافة المحاولات نطلق استثناء لإيقاف المسار وتشغيل التراجع التلقائي
  throw new Error('💥 فشل فحص السلامة بعد النشر! السيرفر الحي لا يستجيب أو يعيد رمز خطأ!');
}

verifyProductionHealth('https://my-react-app.vercel.app');`,
      output:
        "أتمتة كاملة لدورة حياة الإطلاق مع صمام أمان يفحص استجابة السيرفر الحي قبل إعلان نجاح العملية رسمياً.",
      commonMistakes: [
        {
          mistake: "تطبيق النشر المستمر الآلي (Continuous Deployment) في مشروع لا يمتلك اختبارات آلية كافية.",
          fix: "البدء أولاً بـ Continuous Delivery مع زر نشر يدوي، وعدم الانتقال للنشر الآلي الكامل إلا بعد بناء شبكة اختبارات قوية وشاملة."
        },
        {
          mistake: "نشر التحديثات لجميع المستخدمين دفعة واحدة عند إطلاق ميزات جذرية خطيرة.",
          fix: "استخدام تقنيات الإطلاق التدريجي (Canary Releases أو Feature Flags) لتوزيع الميزة على 5% من الزوار أولاً ورصد الأخطاء."
        }
      ],
      bestPractices: [
        "اربط منصة مراقبة أخطاء حية مثل Sentry لتنبيهك فورياً إذا ارتفع معدل الأخطاء بعد أي عملية نشر تلقائية.",
        "اجعل كل PR صغيراً ومحدداً لتكون كل عملية نشر خفيفة ولا تؤثر إلا على جزء ضئيل من التطبيق.",
        "وفر آلية تراجع آلي (Automated Rollback) تعيد توجيه السيرفر إذا فشل فحص السلامة بعد النشر."
      ],
      infographic: {
        title: "الفرق بين Continuous Delivery و Continuous Deployment",
        nodes: [
          { label: "كود مدمج في main", desc: "نقطة البداية المشتركة بعد اجتياز خط الـ CI بنجاح" },
          { label: "Continuous Delivery", desc: "الكود جاهز للنشر ➔ انتظار ضغطة زر موافقة من مدير المنتج 🛑" },
          { label: "Continuous Deployment", desc: "النشر الآلي الفوري للإنتاج دون انتظار أي موافقة بشرية 🚀" }
        ]
      }
    },
    {
      id: "28.3.c",
      title: "إنشاء سير عمل GitHub Actions متكامل وشامل للـ CI/CD",
      englishTerm: {
        term: "Complete CI/CD Workflow Architecture",
        pronunciation: "كومبليت سي آي سي دي وورك فلو",
        meaning: "ملف تكوين YAML شامل ينظم تشغيل الفحوصات والاختبارات والبناء والنشر في وظائف متتابعة ومتوازية"
      },
      description:
        "ملف سير العمل المتكامل (.github/workflows/main.yml) هو المايسترو الذي يقود الأوركسترا الهندسية في مستودع GitHub. يتكون ملف سير العمل المتقن من مرحلتين رئيسيتين: 1) مرحلة التكامل (CI Stage): وتتضمن وظائف متوازية لفحص الـ Lint والـ Types وتشغيل الاختبارات للتأكد من سلامة الكود في وقت قياسي. 2) مرحلة النشر (CD Stage): وظيفة تعتمد صراحة على نجاح المرحلة السابقة (needs: [test, lint])، ولا تعمل إلا إذا كان الحدث دمجاً في فرع main، وتقوم ببناء نسخة الإنتاج، وتمرير الأسرار، ونشر المخرجات إلى خوادم السحابة مع إشعار الفريق بالنتيجة.",
      realWorldAnalogy:
        "يشبه خط التجميع في مصانع الطائرات؛ قسم يفحص المقاعد، وقسم يفحص أجهزة الملاحة بالتوازي، ولا يتم نقل الطائرة إلى مدرج الإقلاع النهائي إلا بعد توقيع كافة الأقسام على أوراق السلامة، فإذا تأخر فحص واحد، تظل الطائرة في ورشة الفحص ولا تغادر أبداً.",
      whyItMatters:
        "يوحد دورة التطوير بالكامل في مستند تكوين واحد موثق ومشارك، ويقضي على مقولة 'الكود يعمل على حاسوبي الشخصي ولكنه تعطل على السيرفر'.",
      syntax:
        "# علاقة التبعية بين الوظائف في YAML:\njobs:\n  test:\n    runs-on: ubuntu-latest\n    ...\n  deploy:\n    needs: [test] # لا تعمل إلا بعد نجاح وظيفة test\n    ...",
      codeExample: `// مثال عملي: هيكل ملف سير عمل CI/CD الاحترافي الكامل (.github/workflows/production.yml)
name: 🚀 Production CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

concurrency:
  group: \${{ github.workflow }}-\${{ github.ref }}
  cancel-in-progress: true

jobs:
  # الوظيفة الأولى: الفحص اللغوي والتنسيق
  lint:
    name: 🔍 Lint & Code Standards
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint

  # الوظيفة الثانية: فحص الأنواع واختبارات الوحدة (بالتوازي مع الـ Lint)
  test:
    name: 🧪 Automated Tests & Types
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npx tsc --noEmit
      - run: npm test -- --run

  # الوظيفة الثالثة: النشر التلقائي للإنتاج (تعتمد على نجاح الوظيفتين السابقتين حصراً على main)
  deploy:
    name: 🌐 Deploy to Production
    needs: [lint, test]
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
        env:
          VITE_API_URL: \${{ secrets.PROD_API_URL }}
      - name: تأكيد نجاح الإطلاق
        run: echo "🎉 تم بناء ونشر التحديث بنجاح في بيئة الإنتاج!"`,
      advancedExample: `// مثال متقدم: استخدام خاصية Concurrency لإلغاء عمليات البناء القديمة وتوفير الدقائق السحابية
# عندما يدفع المطور تعديلاً ثم يدفع تعديلاً آخر بعد 30 ثانية:
# في الوضع العادي، سيعمل السيرفران ويكلفانك دقائق باهظة في السحابة!

# الحل السحري عبر خاصية concurrency:
concurrency:
  # تجميع المهام بحسب اسم الفرع
  group: \${{ github.ref }}
  # إلغاء أي فحص سابق قيد التشغيل فور وصول إيداع جديد لنفس الفرع!
  cancel-in-progress: true

# النتيجة:
# خوادم GitHub تلغي فحص الإيداع القديم فوراً وتبدأ فحص الإيداع الأحدث، مما يوفر 70% من وقت وتكلفة الخوادم!`,
      output:
        "خط أنابيب متكامل يدير الفحوصات والاختبارات بالتوازي في سرعة فائقة، ويضمن النشر الآمن للإنتاج مع حماية موارد الخوادم من الهدر.",
      commonMistakes: [
        {
          mistake: "جعل وظيفة النشر deploy تعمل عند كل فتح لـ Pull Request مما يؤدي لنشر كود الميزات غير المكتملة إلى الإنتاج.",
          fix: "استخدام شرط صريح: if: github.ref == 'refs/heads/main' && github.event_name == 'push' لحصر النشر في فرع main المستقر."
        },
        {
          mistake: "تشغيل كافة الخطوات في وظيفة واحدة متسلسلة بطيئة بدلاً من فصلها إلى وظائف مستقلة متوازية.",
          fix: "فصل lint وtest في وظيفتين مستقلتين ليعملا معاً في نفس اللحظة عبر خادمين افتراضيين لتوفير نصف الوقت."
        }
      ],
      bestPractices: [
        "استخدم خاصية concurrency مع cancel-in-progress: true دائماً لتوفير دقائق GitHub Actions الشهرية المجانية.",
        "حدد إصدارات الحركات البرمجية بدقة (مثل actions/checkout@v4) لتفادي مفاجآت التحديثات التخريبية.",
        "احرص على ألا تطبع أي خطوة من خطوات سير العمل نصوص المفاتيح السرية في سجلات المخرجات العامة."
      ],
      infographic: {
        title: "هندسة خط أنابيب الـ CI/CD المتوازي",
        nodes: [
          { label: "Trigger (Push to main)", desc: "إطلاق سير العمل آلياً في بيئة خادم معزولة" },
          { label: "Job 1: Lint (متوازي)", desc: "فحص جودة وتنسيق الكود بـ ESLint" },
          { label: "Job 2: Test (متوازي)", desc: "فحص أنواع TypeScript وتشغيل اختبارات Vitest" },
          { label: "Job 3: Deploy (needs: 1 & 2)", desc: "البناء والنشر الآلي بعد نجاح كافة الفحوصات السابقة بنسبة 100%" }
        ]
      }
    },
    {
      id: "28.3.d",
      title: "أتمتة الفحص اللغوي وتنسيق الكود في خوادم الـ CI",
      englishTerm: {
        term: "Automated Linting in CI",
        pronunciation: "أوتوماتيد لينتنج إن سي آي",
        meaning: "تشغيل أدوات التدقيق البرمجي في السحابة لحظر دمج أي كود يحتوي على تحذيرات أو مخالفات للتنسيق"
      },
      description:
        "حتى لو كان المطورون يمتلكون أدوات فحص محلية، فقد يقوم أحدهم بتجاوزها عمداً باستخدام علم --no-verify أو قد تختلف إعدادات محرره. خادم الـ CI هو القاضي العادل المحايد الذي لا يمكن خداعه؛ حيث يتم تشغيل أمر فحص صارم مثل 'npm run lint -- --max-warnings=0'. هذا الخيار الحاسم يوجه أداة ESLint لاعتبار أي تحذير برمجي بسيط (Warning) بمثابة خطأ فادح (Fatal Error) يسقط خط الأنابيب ويمنع دمج طلب السحب، مما يجبر الفريق على تنظيف الكود أولاً بأول ومنع تراكم التحذيرات المهملة.",
      realWorldAnalogy:
        "يشبه جهاز قياس الوزن الدقيق في منافسات الملاكمة؛ لا يهم كم كان وزنك في منزلك أو ماذا قال مدربك، إذا تجاوز وزنك الجرام المحدد على الميزان الرسمي للبطولة بمقدار شعرة واحدة، فلن يسمح لك الحكم بالدخول إلى الحلبة حتى تصل للوزن القانوني الدقيق.",
      whyItMatters:
        "يضمن بقاء قاعدة الشيفرة البرمجية نظيفة وخالية من المتغيرات المهملة والأنماط المعيبة بنسبة 100%، ويمنع تحول التحذيرات الصغيرة بمرور الوقت إلى أخطاء كارثية.",
      syntax:
        "# تشغيل الفحص الصارم بصفر تحذيرات مسموحة:\nnpx eslint . --max-warnings=0",
      codeExample: `// مثال سطر أوامر: تشغيل الفحص الصارم ومخرجات الخطأ في الـ CI
$ npx eslint . --max-warnings=0

/home/runner/work/app/src/components/Header.jsx
  14:9  warning  'userName' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)
  0 errors and 1 warning potentially fixable with the '--fix' option.
ESLint found too many warnings (maximum: 0).
Error: Process completed with exit code 1. ❌`,
      advancedExample: `// مثال متقدم: تكوين خطوة الفحص في GitHub Actions مع التعليق التلقائي على أسطر الكود (Problem Matcher)
- name: 🔍 تشغيل الفحص الصارم لـ ESLint
  run: npm run lint -- --max-warnings=0

# إضافة إشعار ذكي في حال الفشل يوضح للمطور كيفية الإصلاح محلياً:
- name: إرشاد المطور للإصلاح
  if: failure()
  run: |
    echo "::error file=package.json::فشل فحص ESLint الصارم! يرجى تشغيل 'npm run lint -- --fix' محلياً لإصلاح التنسيق ثم رفع الكود مجدداً."`,
      output:
        "حظر فوري لدمج أي طلب سحب يحتوي على مخالفات برمجية، مع إبراز الأسطر المعيبة في واجهة GitHub لسهولة إصلاحها.",
      commonMistakes: [
        {
          mistake: "السماح بالتحذيرات في الـ CI بدعوى أنها 'مجرد تحذيرات وليست أخطاء'، مما يؤدي إلى تراكم مئات التحذيرات التي تخفي الأخطاء الحقيقية بينها.",
          fix: "تفعيل خيار --max-warnings=0 دائماً في بيئة الـ CI لفرض ثقافة الكود الخالي من أي شائبة."
        },
        {
          mistake: "نسيان فحص تنسيق ملفات JSON وCSS والـ Markdown واقتصار الفحص على ملفات JSX فقط.",
          fix: "تشغيل prettier --check . في خطوة الـ CI للتحقق من التنسيق الشامل لكافة ملفات المشروع."
        }
      ],
      bestPractices: [
        "استخدم إضافة reviewdog أو Problem Matchers المدمجة في GitHub لعرض أخطاء الـ Lint مباشرة كتعليقات فوق الأسطر في صفحة الـ PR.",
        "وفر أمر npm run lint:fix في package.json لتمكين المطور من معالجة معظم التحذيرات بلمسة زر.",
        "احرص على تثبيت نفس إصدارات ESLint وPrettier المحددة في package-lock.json عبر استخدام npm ci في الخادم."
      ],
      infographic: {
        title: "معايير الفحص الصارم في خوادم الـ CI",
        nodes: [
          { label: "1. npm ci", desc: "تثبيت النسخ المعتمدة الصارمة للحزم دون أي تفاوت في الإصدارات" },
          { label: "2. eslint --max-warnings=0", desc: "حظر التحذيرات واعتبار وجود أي تحذير بمثابة خطأ فادح يسقط الفحص" },
          { label: "3. prettier --check", desc: "التأكد من التزام كافة الملفات بالتنسيق البصري الموحد" },
          { label: "4. PR Blocking", desc: "منع زر الدمج من العمل حتى يتم إصلاح كافة المخالفات بنسبة 100%" }
        ]
      }
    },
    {
      id: "28.3.e",
      title: "أتمتة الفحص الثابت للأنواع TypeScript Checks في الـ CI",
      englishTerm: {
        term: "Automated TypeScript Checks in CI",
        pronunciation: "أوتوماتيد تايب سكريبت تشيكس",
        meaning: "تشغيل مدقق الأنواع tsc للتحقق من سلامة الواجهات والخصائص والعقود البرمجية قبل البناء"
      },
      description:
        "في مشاريع React التي تستخدم TypeScript أو JSDoc Type Checking، قد يقوم محرك Vite أثناء التطوير بتمرير الكود حتى لو كان يحوي أخطاء في الأنواع؛ لأن Vite يعتمد على Esbuild لتجريد الأنواع بسرعة خارقة دون فحصها لحظياً أثناء تشغيل dev server. لذلك، فإن خطوة الفحص الثابت (Static Type Checking عبر أمر tsc --noEmit) في خط أنابيب الـ CI هي صمام الأمان النهائي الذي يتحقق من: مطابقة أنواع الـ Props بين المكونات، وصحة استجابات الـ API، وعدم استخدام خصائص مفقودة في الكائنات، وعدم وجود قيم undefined غير معالجة قد تسبب انهيار التطبيق بشاشة بيضاء لدى المستخدم.",
      realWorldAnalogy:
        "يشبه فحص مطابقة مقابس ومفاتيح الكهرباء قبل توصيل التيار في برج سكني؛ يتأكد المهندس من أن كل مقبس يستقبل الجهد المناسب له تماماً وأن الأسلاك متطابقة الألوان، لمنع حدوث ماس كهربائي وحريق عند تشغيل المفتاح الرئيسي.",
      whyItMatters:
        "يقضي على أشهر أخطاء جافاسكريبت القاتلة في الإنتاج: 'TypeError: Cannot read properties of undefined'، ويضمن سلامة العقود البرمجية بين أعضاء الفريق.",
      syntax:
        "# تشغيل فحص الأنواع الصارم دون توليد ملفات:\nnpx tsc --noEmit",
      codeExample: `// مثال سطر أوامر: تشغيل فحص tsc ورصد خطأ عدم توافق الأنواع
$ npx tsc --noEmit

src/components/UserProfile.tsx:24:18 - error TS2322: Type 'string' is not assignable to type 'number'.
  The expected type comes from property 'age' which is declared here on type 'UserProps'
    24   <UserCard age="twenty-five" />
                   ~~~

Found 1 error in src/components/UserProfile.tsx:24 ❌`,
      advancedExample: `// مثال متقدم: تكوين tsconfig.json الصارم لبيئات الـ CI والإنتاج
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    // 🛡️ تفعيل أعلى درجات الصرامة لفحص الـ CI:
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    // منع توليد ملفات JS لأن Vite يتولى البناء
    "noEmit": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}`,
      output:
        "اكتشاف وتصحيح كافة التناقضات البرمجية وأخطاء الأنواع قبل وصولها للإنتاج، مما يضمن استقراراً برمجياً مطلقاً.",
      commonMistakes: [
        {
          mistake: "الاعتماد على أن نجاح أمر 'vite build' يعني بالضرورة خلو الكود من أخطاء TypeScript.",
          fix: "التأكد من كتابة الأمر المزدوج: 'tsc -b && vite build' في سكريبت البناء بملف package.json لأن Vite لا يفحص الأنواع تلقائياً."
        },
        {
          mistake: "استخدام نوع 'any' بشكل عشوائي للهروب من أخطاء الـ TypeScript في الـ PR.",
          fix: "تفعيل خيار noImplicitAny في tsconfig وتدريب الفريق على تعريف واجهات Interfaces محكمة لكل كائن."
        }
      ],
      bestPractices: [
        "شغل خطوة tsc --noEmit في بداية الـ CI لأنها سريعة جداً وتكتشف الأخطاء المعمارية في ثوانٍ معدودة.",
        "فعّل خاصية skipLibCheck: true في tsconfig لتفادي فحص ملفات حزم node_modules وتسريع الفحص بمقدار 5 أضعاف.",
        "استخدم أدوات مثل type-coverage لمراقبة نسبة تغطية الأنواع الصريحة في مشروعك وضمان عدم تراجعها."
      ],
      infographic: {
        title: "دور فحص الأنواع tsc --noEmit في الـ CI",
        nodes: [
          { label: "1. استدعاء tsc --noEmit", desc: "محرك TypeScript يفحص كافة الملفات والواجهات دون توليد ملفات JS" },
          { label: "2. فحص العقود والـ Props", desc: "التحقق من صحة الخصائص الممررة وعدم وجود قيم مجهولة any" },
          { label: "3. كشف Null & Undefined", desc: "منع أشهر أسباب انهيار واجهات React في الإنتاج" },
          { label: "4. إذن العبور للخطوة التالية", desc: "الانتقال لاختبارات الوحدة والبناء بثقة مطلقة ✅" }
        ]
      }
    },
    {
      id: "28.3.f",
      title: "أتمتة الاختبارات الآلية وتقارير التغطية Test Coverage",
      englishTerm: {
        term: "Automated Testing & Coverage in CI",
        pronunciation: "أوتوماتيد تيستينج آند كافرج",
        meaning: "تشغيل اختبارات الوحدة والمكونات آلياً وحساب النسبة المئوية للأسطر البرمجية المغطاة بالاختبارات"
      },
      description:
        "لا يمكن الوثوق بأي خط أنابيب CI لا يحتوي على مرحلة تشغيل الاختبارات الآلية (Automated Tests). باستخدام محركات اختبار حديثة وسريعة مثل Vitest، يقوم خادم الـ CI بتشغيل كافة اختبارات وحدات المكونات (Component Tests) واختبارات الخطافات (Custom Hooks) في وضع التشغيل غير التفاعلي (Run Mode). علاوة على ذلك، تحسب أدوات التغطية (Code Coverage عبر v8 أو istanbul) النسبة المئوية للأسطر والدوال والشروط المنطقية التي تم اختبارها بالفعل. وتتيح لك أدوات مثل Codecov حقن تقرير بصري تفاعلي داخل طلب السحب (PR Comment) يوضح بدقة: هل زادت التغطية أم انخفضت بسبب التعديل الجديد؟",
      realWorldAnalogy:
        "يشبه اختبارات الضغط والتحمل لسبائك الصلب في مصانع الجسور؛ قبل استخدام السبيكة في بناء الجسر، يضعها المهندسون تحت مكبس هيدروليكي لقياس قدرتها على تحمل الأوزان الثقيلة ودرجات الحرارة القصوى للتأكد من أنها لن تنكسر تحت أقدام المارة.",
      whyItMatters:
        "تمنع حدوث الانتكاسات البرمجية (Regressions)؛ حيث تضمن ألا يتسبب إصلاح عيب في صفحة الدفع في إفساد سلة المشتريات دون أن يدري المطور.",
      syntax:
        "# تشغيل الاختبارات وحساب نسبة التغطية في Vitest:\nnpx vitest run --coverage",
      codeExample: `// مثال سطر أوامر: تقرير تغطية الاختبارات الناتج في خادم الـ CI
$ npm test -- --coverage

 % Coverage report from v8
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |   94.12 |    88.88 |   91.66 |   94.12 |                   
 src/components    |     100 |      100 |     100 |     100 |                   
  Button.tsx       |     100 |      100 |     100 |     100 |                   
 src/hooks         |   88.88 |    75.00 |   85.71 |   88.88 |                   
  useDebounce.ts   |   88.88 |    75.00 |   85.71 |   88.88 | 18-20             
-------------------|---------|----------|---------|---------|-------------------
Test Files  4 passed (4)
Tests  28 passed (28)
Time  1.42s`,
      advancedExample: `// مثال متقدم: تكوين خطوة الاختبارات وحفظ تقرير التغطية ورفعه إلى Codecov في GitHub Actions
- name: 🧪 تشغيل الاختبارات وحساب التغطية
  run: npm run test:coverage

# رفع التقرير لمنصة التحليلات لمقارنة التغطية في الـ PR
- name: 📊 رفع تقرير التغطية إلى Codecov
  uses: codecov/codecov-action@v4
  with:
    token: \${{ secrets.CODECOV_TOKEN }}
    slug: my-org/react-enterprise-app
    fail_ci_if_error: true
    flags: unittests
    verbose: true`,
      output:
        "توليد تقرير تغطية مفصل يوضح الأسطر غير المختبرة، وتثبيت تعليق تفاعلي على الـ PR في GitHub يوضح تأثير الكود على جودة المشروع.",
      commonMistakes: [
        {
          mistake: "تشغيل أمر الاختبارات في الـ CI بوضع المراقبة الافتراضي (Watch Mode) مما يجعل الخادم ينتظر للأبد ويتعطل المسار!",
          fix: "إضافة علم --run أو تشغيل سكريبت Vitest المخصص لـ CI مثل: 'vitest run' لإنهاء العملية فور اكتمال الاختبارات."
        },
        {
          mistake: "الهوس بالوصول إلى نسبة تغطية 100% شكلية عبر اختبارات سطحية لا تفحص المنطق الحقيقي.",
          fix: "التركيز على تغطية المسارات المنطقية الحرجة (سلة الشراء، المصادقة، والعمليات الحسابية) بنسبة 80-85% ذات قيمة حقيقية."
        }
      ],
      bestPractices: [
        "استخدم محرك v8 المدمج في Node.js لحساب التغطية في Vitest لأنه أسرع بـ 3 أضعاف من مكتبة istanbul القديمة.",
        "اضبط حداً أدنى للتغطية في vite.config.js (Thresholds مثلاً 80%) يسقط البناء إذا انخفضت التغطية عن هذا الحد.",
        "احرص على ألا تعتمد اختبارات الوحدة في الـ CI على خوادم خارجية حية؛ بل استخدم المحاكاة عبر MSW (Mock Service Worker)."
      ],
      infographic: {
        title: "أنواع مقاييس تغطية الاختبارات (Coverage Metrics)",
        nodes: [
          { label: "Statements %", desc: "النسبة المئوية للأوامر والأسطر البرمجية التي تم تنفيذها أثناء الفحص" },
          { label: "Branches %", desc: "النسبة المئوية لفروع الشروط (if / else / switch) التي تم اختبار كلا احتماليها" },
          { label: "Functions %", desc: "النسبة المئوية للدوال والمكونات التي تم استدعاؤها واختبار مخرجاتها" },
          { label: "Lines %", desc: "عدد الأسطر الكلية التي خضعت للاختبار مقابل الأسطر المتروكة" }
        ]
      }
    },
    {
      id: "28.3.g",
      title: "إنشاء البناء الآلي وتخزين الأصول Build Artifacts",
      englishTerm: {
        term: "Automated Build & Artifacts Storage",
        pronunciation: "أوتوماتيد بيلد آند آرتيفاكتس",
        meaning: "تجميع حزمة الإنتاج وتخزين مجلد dist كأصل رقمي قابل للتنزيل والمشاركة بين مراحل الـ CI/CD"
      },
      description:
        "في خطوط الأنابيب الاحترافية المكونة من عدة وظائف (Multi-job Pipelines)، لا يجوز تكرار عملية البناء في كل مرحلة. الحل الهندسي هو بناء التطبيق مرة واحدة فقط في وظيفة البناء (Build Job)، وتخزين مجلد المخرجات (dist/) كأصل رقمي مؤقت (Build Artifact) في سحابة GitHub باستخدام إجراء actions/upload-artifact. بعد ذلك، تستطيع وظيفة النشر (Deploy Job) أو وظيفة اختبارات الـ E2E تنزيل هذا الأصل الجاهز عبر actions/download-artifact واستخدامه فورياً دون الحاجة لإعادة تشغيل npm run build مجدداً، مما يوفر الوقت ويضمن مطابقة النسخة المختبرة للنسخة المنشورة 100%.",
      realWorldAnalogy:
        "يشبه قيام المطبخ المركزي بتعبئة الوجبات وتجميدها في علب محكمة الإغلاق ونقلها إلى الثلاجة المركزية (Upload Artifact)؛ عندما تأتي شاحنات التوزيع في الصباح، فإنها تأخذ العلب الجاهزة مباشرة (Download Artifact) وتوزعها دون الحاجة لإعادة طهي الوجبات من الصفر في كل محطة.",
      whyItMatters:
        "يضمن مبدأ 'البناء مرة واحدة والنشر في كل مكان' (Build Once, Deploy Anywhere)، مما يمنع التفاوت والاختلافات التي قد تحدث عند إعادة البناء في أوقات أو خوادم مختلفة.",
      syntax:
        "# رفع المخرجات كأصل رقمي:\n- uses: actions/upload-artifact@v4\n  with:\n    name: production-dist\n    path: dist/\n\n# تنزيل الأصل في وظيفة لاحقة:\n- uses: actions/download-artifact@v4\n  with:\n    name: production-dist\n    path: dist/",
      codeExample: `// مثال عملي: تبادل مخرجات البناء بين وظيفتين مستقلتين في GitHub Actions
jobs:
  # 1. وظيفة البناء وتخزين الأصل
  build-application:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      
      # تخزين مجلد dist لمدة 7 أيام في سحابة GitHub
      - name: 📦 حفظ مجلد dist كأصل رقمي
        uses: actions/upload-artifact@v4
        with:
          name: react-dist-bundle
          path: dist/
          retention-days: 7

  # 2. وظيفة النشر التي تعتمد على الأصل السابق
  deploy-to-hosting:
    needs: [build-application]
    runs-on: ubuntu-latest
    steps:
      # تنزيل مجلد dist الجاهز مباشرة دون إعادة البناء!
      - name: 📥 تنزيل الأصل الرقمي
        uses: actions/download-artifact@v4
        with:
          name: react-dist-bundle
          path: dist/
      - run: echo "المجلد جاهز للنشر السريع بحجم:" && du -sh dist/`,
      advancedExample: `// مثال متقدم: استغلال التخزين المؤقت المتقدم (Advanced Caching) لحزم node_modules في الـ CI
# تسريع وقت الـ CI من 3 دقائق إلى 20 ثانية عبر تخزين كاش الحزم بناءً على بصمة package-lock.json:
- name: ⚡ فحص كاش الاعتماديات
  uses: actions/cache@v4
  id: npm-cache
  with:
    path: ~/.npm
    # المفتاح يتغير فقط عند تعديل ملف package-lock.json
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      \${{ runner.os }}-node-

- name: تثبيت الاعتماديات بذكاء
  run: npm ci --prefer-offline`,
      output:
        "تسريع استثنائي لزمن خط الأنابيب، مع ضمان أن الملفات التي تم فحصها واختبارها هي ذاتها حرفياً التي تم نشرها على السحابة.",
      commonMistakes: [
        {
          mistake: "تحديد retention-days طويلة جداً (مثل 90 يوماً) للأصول المؤقتة مما يستنزف سعة التخزين المجانية في حساب GitHub.",
          fix: "تعيين مدة الاحتفاظ بالأصول المؤقتة بين يوم إلى 7 أيام فقط لتوفير المساحة السحابية."
        },
        {
          mistake: "إعادة بناء الكود في وظيفة النشر بعد بنائه بالفعل في وظيفة الاختبارات.",
          fix: "البناء مرة واحدة فقط وحفظه كـ Artifact وإعادة استخدامه في مراحل النشر المتتالية."
        }
      ],
      bestPractices: [
        "استخدم اسم أصل فريد وواضح مثل react-build-\${{ github.sha }} لتفادي تداخل الأصول في عمليات التشغيل المتزامنة.",
        "احرص على ألا يحتوي مجلد dist المرفوع على أي ملفات سرية أو ملفات مؤقتة غير مرغوب فيها.",
        "استغل إمكانية تنزيل الـ Artifact يدوياً من صفحة الـ Action في GitHub لفحص محتويات حزمة الإنتاج وتشخيص مشاكلها محلياً."
      ],
      infographic: {
        title: "دورة تداول الأصول الرقمية (Artifacts Pipeline)",
        nodes: [
          { label: "1. Build Job", desc: "تشغيل npm run build وتوليد الملفات في dist/" },
          { label: "2. upload-artifact", desc: "ضغط وتخزين المجلد كأصل رقمي محمي في سحابة GitHub" },
          { label: "3. download-artifact", desc: "تنزيل نفس الحزمة الأصلية في وظيفة النشر دون أي إعادة بناء" },
          { label: "4. Deployment", desc: "نشر الحزمة الموثوقة والمختبرة إلى خوادم الإنتاج 🚀" }
        ]
      }
    },
    {
      id: "28.3.h",
      title: "النشر التلقائي بعد اجتياز الاختبارات وتكامل المراحل",
      englishTerm: {
        term: "Automated Deployment & Stage Dependencies",
        pronunciation: "أوتوماتيد ديبلويمنت آند ستيج ديبندنسيز",
        meaning: "ربط مرحلة النشر باجتياز كافة الفحوصات والاعتماديات الصارمة لضمان استحالة نشر كود معطوب"
      },
      description:
        "النشر التلقائي للإنتاج هو ثمرة خط الأنابيب بأكمله، ولكنه يتطلب حراسة معمارية مشددة. باستخدام خاصية التبعيات (Stage Dependencies عبر الكلمة المفتاحية needs)، نضمن ألا تبدأ خطوة النشر إلا بعد أن تنجح كافة الوظائف السابقة بنسبة 100% (Green Pipeline). يتم النشر عبر استدعاء واجهات المنصات السحابية (مثل Vercel CLI أو Netlify Action أو AWS S3 Sync) وتمرير توكنات المصادقة الآمنة المخزنة في أسرار المستودع، مع تحديث حالة طلب السحب وإرسال إشعار في قناة Slack الخاصة بالفريق لإعلام الجميع بنجاح إطلاق التحديث الجديد.",
      realWorldAnalogy:
        "يشبه إطلاق الصواريخ الفضائية في وكالة ناسا؛ هناك قائمة فحوصات صارمة (Checklist): ضغط الوقود سليم، أجهزة التوجيه تعمل، الطقس مستقر. إذا أعطت شاشة واحدة وميضاً باللون الأحمر، يتوقف العد التنازلي آلياً ولا تنطلق منصة الإطلاق حتى يتم التأكد من سلامة كل جزء بنسبة 100%.",
      whyItMatters:
        "يحول عملية النشر من مهمة مرعبة ومعقدة يقوم بها مهندس خبير في منتصف الليل إلى إجراء روتيني هادئ وموثوق يتم عشرات المرات في وضح النهار دون أي انقطاع للخدمة.",
      syntax:
        "# تكوين تبعية مرحلة النشر في YAML:\ndeploy-prod:\n  needs: [lint, test, build]\n  if: github.ref == 'refs/heads/main'",
      codeExample: `// مثال عملي: وظيفة النشر الآلي لمنصة Vercel عبر GitHub Actions
  deploy-to-vercel:
    name: 🚀 النشر إلى Vercel للإنتاج
    needs: [lint, test, build]
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      # 1. تثبيت أداة Vercel CLI
      - name: تثبيت Vercel CLI
        run: npm install --global vercel@latest

      # 2. جلب معلومات المشروع وسحب الإعدادات
      - name: سحب معلومات بيئة Vercel
        run: vercel pull --yes --environment=production --token=\${{ secrets.VERCEL_TOKEN }}

      # 3. بناء المشروع على خوادم Vercel
      - name: بناء حزمة الإنتاج
        run: vercel build --prod --token=\${{ secrets.VERCEL_TOKEN }}

      # 4. النشر النهائي واستبدال الرابط الحي
      - name: النشر المباشر للإنتاج
        run: vercel deploy --prebuilt --prod --token=\${{ secrets.VERCEL_TOKEN }}`,
      advancedExample: `// مثال متقدم: إرسال إشعار فوري لفريق العمل عبر Slack Webhook عند نجاح أو فشل النشر
- name: 📢 إرسال إشعار إلى قناة الفريق في Slack
  uses: slackapi/slack-github-action@v1.26.0
  if: always() # ينفذ دائماً لمعرفة النجاح أو الفشل
  with:
    payload: |
      {
        "text": "حالة نشر التحديث الجديد لمشروع React:",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*المستودع:* \${{ github.repository }}\\n*الفرع:* \${{ github.ref_name }}\\n*الحالة:* \${{ job.status == 'success' && '✅ تم النشر بنجاح للإنتاج!' || '❌ فشل النشر! يرجى التدخل.' }}\\n*بواسطة:* \${{ github.actor }}"
            }
          }
        ]
      }
  env:
    SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK_URL }}`,
      output:
        "نشر آلي فوري وموثوق؛ بمجرد دمج التعديلات في main، يتم بناء ونشر النسخة الحية وإشعار الفريق بالنتيجة دون أي تدخل يدوي.",
      commonMistakes: [
        {
          mistake: "نسيان كلمة 'needs: [test]' مما يجعل وظيفة النشر تبدأ بالتوازي مع وظيفة الاختبارات وتنشر الكود المعطوب حتى لو فشلت الاختبارات!",
          fix: "التأكد المشدد من إضافة needs: [test, lint] في وظيفة النشر deploy لربط انطلاقها بنجاح الفحوصات حصراً."
        },
        {
          mistake: "وضع التوكنات السحابية (Vercel Token أو AWS Key) كنصوص صريحة داخل ملف YAML.",
          fix: "استخدام أسرار GitHub Secrets المشفرة دائماً واستدعاؤها عبر secrets.TOKEN_NAME."
        }
      ],
      bestPractices: [
        "استخدم بيئات GitHub Environments (مثل Production Environment) لتفعيل قواعد الحماية وسجلات التدقيق.",
        "احرص على ألا يستغرق أمر النشر deploy أكثر من دقيقة واحدة عبر استخدام ميزة الحزم المبنية مسبقاً (--prebuilt).",
        "فعّل دائماً خطوة فحص السلامة (Health Check) كخطوة أخيرة في وظيفة النشر للتأكد من استجابة الموقع الحي."
      ],
      infographic: {
        title: "سلسلة الثقة في خط أنابيب النشر الآلي",
        nodes: [
          { label: "1. الفحص (Lint)", desc: "كود نظيف وخالٍ من الأخطاء التركيبية" },
          { label: "2. الاختبار (Test)", desc: "كافة الوظائف تعمل بنجاح ودون انتكاسات" },
          { label: "3. البناء (Build)", desc: "حزمة مضغوطة وخالية من أخطاء التصيير" },
          { label: "4. النشر (Deploy)", desc: "إطلاق فوري في الإنتاج مع إشعار الفريق 🚀" }
        ]
      }
    },
    {
      id: "28.3.i",
      title: "إدارة الأسرار والمفاتيح الحساسة في بيئات CI/CD",
      englishTerm: {
        term: "Secrets Management in CI/CD",
        pronunciation: "سيكرتس مانجمنت إن سي آي سي دي",
        meaning: "تخزين وإدارة وتمرير مفاتيح الـ API وتوكنات النشر بأمان مشفر دون كشفها في الشيفرة المصدرية"
      },
      description:
        "تتطلب عمليات البناء والنشر الآلية في خوادم الـ CI استخدام مفاتيح وتوكنات حساسة للغاية (مثل VERCEL_TOKEN لنشر الكود، أو SENTRY_AUTH_TOKEN لرفع خرائط المصدر، أو AWS_SECRET_ACCESS_KEY). وضع هذه المفاتيح في ملفات YAML أو الشيفرة المصدرية هو كارثة أمنية محققة. يوفر GitHub نظام أسرار مشفر فائق الأمان (GitHub Encrypted Secrets) يعتمد على تشفير Libsodium غير المتماثل. يتم تخزين المفاتيح في إعدادات المستودع أو البيئة (Environment Secrets)، ولا يمكن لأي شخص (حتى مدير المستودع نفسه) قراءتها بعد حفظها؛ بل تُحقن سراً داخل متغيرات بيئة الخادم الافتراضي أثناء تشغيل الـ Action مع حجبها تلقائياً بالنجوم (***) من سجلات المخرجات لمنع تسربها.",
      realWorldAnalogy:
        "يشبه صندوق الإيداع السري في البنك؛ يضع المدير الأموال والوثائق السرية عبر فتحة الصندوق المقفل، وعندما تأتي سيارة نقل الأموال المدرعة (خادم الـ CI)، يتصل النظام بالخزنة آلياً ليمرر المبالغ للشاحنة دون أن يتمكن الحارس أو أي موظف من رؤية ما بداخل الحقيبة.",
      whyItMatters:
        "يحمي حسابات السحابة وخدمات الشركة من الاختراق والسرقة، ويوفر الامتثال لمعايير الأمان العالمية (مثل SOC2 وISO 27001).",
      syntax:
        "# استدعاء السر المشفر في ملف YAML:\nenv:\n  VERCEL_TOKEN: \${{ secrets.VERCEL_TOKEN }}\n  API_SECRET: \${{ secrets.PROD_API_SECRET }}",
      codeExample: `// مثال سطر أوامر: إدارة أسرار المستودع بأمان عبر GitHub CLI دون فتح المتصفح
# 1. تعيين سر سحابي جديد في المستودع
gh secret set VERCEL_TOKEN --body "vck_123456789abcdef"

# 2. تعيين سر من ملف محلي مشفر
gh secret set PROD_ENV_FILE < .env.production

# 3. استعراض قائمة الأسرار الموجودة (تظهر الأسماء وتاريخ التعديل فقط دون كشف القيم)
gh secret list

# الناتج:
# NAME             UPDATED
# VERCEL_TOKEN     About 1 minute ago
# PROD_ENV_FILE    About 10 minutes ago`,
      advancedExample: `// مثال متقدم: استخدام أسرار البيئات المقيدة (Environment Secrets) لفرض موافقة المشرف قبل النشر للإنتاج
# في GitHub Enterprise وPro:
# يمكنك إنشاء بيئة اسمها 'production' وربط الأسرار بها حصراً:

jobs:
  deploy-production:
    runs-on: ubuntu-latest
    # ربط الوظيفة ببيئة الإنتاج المحمية:
    environment:
      name: production
      url: https://mycompany.com

    steps:
      - uses: actions/checkout@v4
      
      # هذه الأسرار لا يمكن الوصول إليها إلا بعد موافقة المهندس المسؤول (Required Reviewer) في واجهة GitHub!
      - name: النشر باستخدام أسرار الإنتاج المحمية
        run: |
          echo "جارٍ الاتصال بالسحابة باستخدام مفتاح الإنتاج المحمي..."
        env:
          DATABASE_URL: \${{ secrets.PRODUCTION_DATABASE_URL }}
          DEPLOY_KEY: \${{ secrets.PRODUCTION_DEPLOY_KEY }}`,
      output:
        "تأمين شامل لكافة المفاتيح وتوكنات السحابة، مع حظر طباعتها في السجلات وتشفيرها بالكامل أثناء الراحة والنقل.",
      commonMistakes: [
        {
          mistake: "محاولة طباعة قيمة السر في السجل عبر أمر 'echo $SECRET_KEY' للتحقق من وصوله.",
          fix: "يقوم GitHub بحجب السر بالنجوم (***) تلقائياً؛ وإذا قمت بتشفيره أو تجزئته قد يتسرب في السجلات، لذا تجنب طباعة الأسرار تماماً."
        },
        {
          mistake: "استخدام أسرار الإنتاج الحساسة في أحداث pull_request القادمة من مستودعات فرعية مشتقة (Forks) في المشاريع العامة.",
          fix: "GitHub يحظر تمرير الأسرار تلقائياً لطلبات السحب من الـ Forks لحماية المستودع من المخترقين."
        }
      ],
      bestPractices: [
        "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege)؛ أنشئ توكنات بصلاحيات مقيدة حصراً بالمشروع المطلوب بدلاً من التوكنات العامة.",
        "قم بتدوير وتغيير الأسرار الرقمية (Rotate Secrets) دورياً كل 90 يوماً لحمايتها من التسريبات القديمة.",
        "استخدم Environment Secrets لفصل أسرار بيئة الاختبار (Staging) عن بيئة الإنتاج الحقيقية (Production)."
      ],
      infographic: {
        title: "دورة حياة الأسرار المشفرة في GitHub Actions",
        nodes: [
          { label: "1. التشفير والحفظ", desc: "تشفير السر بمفاتيح Libsodium وتخزينه في إعدادات المستودع" },
          { label: "2. الحقن الآمن", desc: "تمرير السر كمتغير بيئة حصراً إلى الذاكرة المؤقتة للـ Runner" },
          { label: "3. الإخفاء التلقائي", desc: "حجب قيمة السر بالنجوم (***) تلقائياً من كافة سجلات المخرجات" },
          { label: "4. التدمير بعد الانتهاء", desc: "مسح الخادم الافتراضي وحذف كافة المتغيرات فور انتهاء الوظيفة" }
        ]
      }
    },
    {
      id: "28.3.j",
      title: "استراتيجيات التراجع السريع والتعافي الآلي Automated Rollback",
      englishTerm: {
        term: "Automated Rollback & Recovery Strategies",
        pronunciation: "أوتوماتيد رولباك آند ريكفري",
        meaning: "الآليات المؤتمتة لإعادة النظام إلى آخر حالة مستقرة سابقة فور رصد فشل أو انهيار بعد النشر"
      },
      description:
        "في العالم الحقيقي لهندسة البرمجيات، مهما بلغت دقة الاختبارات، قد يفلت عيب غير متوقع ويصل إلى بيئة الإنتاج. مقياس النضج الهندسي الحقيقي لأي فريق لا يقاس بعدم حدوث أخطاء إطلاقاً، بل بمدى سرعة التعافي من الخطأ (Mean Time to Recovery - MTTR). استراتيجية التراجع الآلي (Automated Rollback) تضمن أنه بمجرد أن يرصد فحص السلامة (Post-Deploy Health Check) أو نظام مراقبة الأخطاء (Sentry) ارتفاعاً مفاجئاً في أخطاء 500 أو شاشات بيضاء بعد النشر، يطلق خط الأنابيب أمراً عكسياً فورياً يوجه السيرفر أو الـ CDN للعودة إلى النسخة السابقة السليمة في ثوانٍ معدودة دون انتظار استيقاظ المطور أو اتخاذ قرارات يدوية متأخرة.",
      realWorldAnalogy:
        "يشبه القواطع الكهربائية الأوتوماتيكية (Circuit Breakers) في لوحة الكهرباء المنزلية؛ عندما يحدث ماس كهربائي مفاجئ في المطبخ، ينفصل القاطع آلياً في جزء من الثانية لعزل التيار وحماية المنزل بأكمله من الاحتراق، دون الحاجة لتدخل بشري سريع.",
      whyItMatters:
        "يخفض زمن تعطل الخدمة (Downtime) من ساعات طويلة إلى ثوانٍ معدودة، ويحمي سمعة المنصة وأموال الشركة من الخسائر المترتبة على انقطاع الخدمة.",
      syntax:
        "# التراجع البرمجي السليم عبر إنشاء إيداع عكسي في Git:\ngit revert HEAD --no-edit\ngit push origin main",
      codeExample: `// مثال سطر أوامر: إنشاء إيداع عكسي Revert بدلاً من حذف التاريخ
# إذا تم دمج PR معطوب في main ونشره للإنتاج:
# ❌ تجنب استخدام git reset --hard لأنه يمسح التاريخ ويعطل باقي المطورين!

# ✅ الحل الهندسي المعتمد: إنشاء إيداع معاكس (Revert Commit)
git revert HEAD --no-edit

# ما يفعله Git:
# يقوم بإنشاء commit جديد تماماً يحتوي على عكس كافة التعديلات التي حدثت في آخر commit!
# الناتج:
# [main 9f8e7d6] Revert "feat: بوابة الدفع الجديدة"
#  2 files changed, 5 insertions(+), 42 deletions(-)

# دفع التراجع للمستودع السحابي ليتم تفعيل الـ CI/CD ونشره فوراً:
git push origin main`,
      advancedExample: `// مثال متقدم: وظيفة التراجع الآلي في خط أنابيب GitHub Actions عند فشل فحص السلامة
  # وظيفة النشر مع التراجع التلقائي عند الفشل
  deploy-with-safety-net:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      
      # 1. تنفيذ النشر للإنتاج
      - name: نشر التحديث الجديد
        id: deploy_step
        run: |
          echo "جارٍ النشر للإنتاج..."
          # استدعاء أمر النشر الفعلي
          
      # 2. فحص السلامة بعد النشر
      - name: 🩺 فحص استجابة الموقع الحي
        id: health_check
        run: |
          # محاكاة فحص استجابة السيرفر
          curl --fail --silent --show-error https://mycompany.com/health || exit 1

      # 3. خطوة التراجع التلقائي: تنفذ حصراً في حال فشل خطوة فحص السلامة السابقة!
      - name: 🚨 تفعيل التراجع الآلي الطارئ (Automated Rollback)
        if: failure() && steps.deploy_step.outcome == 'success'
        run: |
          echo "💥 تم رصد فشل في فحص السلامة بعد النشر! تفعيل التراجع الفوري..."
          # أمر Vercel أو Netlify لاستعادة آخر نشرة مستقرة
          npx vercel rollback --yes --token=\${{ secrets.VERCEL_TOKEN }}
          echo "✅ تم استرجاع النسخة السابقة بنجاح وحماية المستخدمين من الانقطاع."`,
      output:
        "حماية ذاتية للإنتاج؛ حيث يتولى خط الأنابيب مراقبة الإطلاق والتراجع الفوري عن النسخ المعطوبة تلقائياً في ثوانٍ معدودة.",
      commonMistakes: [
        {
          mistake: "استخدام git reset --hard على فرع main للتراجع عن إيداع معطوب تم دفعه للسيرفر.",
          fix: "استخدام git revert دائماً لإنشاء إيداع جديد يعكس التعديلات مع الحفاظ على سلامة التاريخ المشترك للفريق."
        },
        {
          mistake: "الاعتماد على التراجع اليدوي المتأخر بعد تلقي شكاوى غاضبة من العملاء عبر وسائل التواصل الاجتماعي.",
          fix: "أتمتة فحص السلامة (Health Check) في الـ CI/CD لتفعيل التراجع في الثواني الأولى قبل أن يشعر معظم المستخدمين بالخلل."
        }
      ],
      bestPractices: [
        "تدرب مع فريقك على خطة الطوارئ والتراجع (Rollback Drill) مرة كل فصل للتأكد من جاهزية الجميع وسرعة التدخل.",
        "احرص على ألا تشتمل إيداعات الـ Revert على أي تعديلات إضافية؛ فقط اعكس الكود المعطوب لإعادة الاستقرار أولاً.",
        "افتح تذكرة تحقيق عاجلة (Post-Mortem Issue) بعد أي حادث تراجع لفهم السبب الجذري وكتابة اختبارات تمنع تكراره مستقبلاً."
      ],
      infographic: {
        title: "استراتيجية التراجع السريع والتعافي الآلي",
        nodes: [
          { label: "1. رصد الخلل 🚨", desc: "فشل فحص السلامة Health Check أو ارتفاع معدل الأخطاء في Sentry" },
          { label: "2. تفعيل التراجع الآلي", desc: "إطلاق أمر Rollback السحابي الفوري دون انتظار تدخل بشري" },
          { label: "3. توجيه الـ CDN للنسخة السابقة", desc: "استعادة النسخة السابقة المستقرة في أقل من 5 ثوانٍ" },
          { label: "4. التحقيق والإصلاح (Post-Mortem)", desc: "كتابة اختبارات تمنع تكرار الخطأ وإصلاحه بهدوء في فرع منفصل" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-28-3-1",
      question: "ما الفارق الجوهري بين التسليم المستمر (Continuous Delivery) والنشر المستمر (Continuous Deployment)؟",
      options: [
        "التسليم المستمر يتطلب وجود خادم محلي، بينما النشر المستمر يعمل في السحاب فقط.",
        "التسليم المستمر يجهز الكود ويختبره ولكنه يتطلب نقرة موافقة بشرية قبل إطلاقه للإنتاج، بينما النشر المستمر ينشر الكود آلياً وبشكل فوري بمجرد دمج التعديلات.",
        "النشر المستمر مخصص فقط للغات C++ وجافا.",
        "لا يوجد أي فرق بينهما؛ فهما اسمان لنفس المفهوم تماماً."
      ],
      correctAnswer: 1,
      explanation:
        "في Continuous Delivery يكون الكود جاهزاً ومختبراً وينتظر موافقة يدوية للإطلاق، بينما في Continuous Deployment تكون العملية مؤتمتة بنسبة 100% دون أي انتظار لقرار بشري."
    },
    {
      id: "quiz-28-3-2",
      question: "لماذا يُفضل استخدام أمر 'git revert' بدلاً من 'git reset --hard' عند الرغبة في التراجع عن إيداع معطوب تم نشره في فرع main؟",
      options: [
        "لأن git revert يحذف كافة ملفات المشروع من الخادم نهائياً.",
        "لأن git revert ينشئ إيداعاً جديداً يعكس التغييرات مع الحفاظ على السجل التاريخي دون تخريب مستودعات باقي أعضاء الفريق المتصلين بـ main.",
        "لأن git reset محظور استخدامه على نظام التشغيل ويندوز.",
        "لأن git revert يغير لغة الكود إلى TypeScript تلقائياً."
      ],
      correctAnswer: 1,
      explanation:
        "أمر git revert آمن للفروع العامة المشتركة لأنه يضيف إيداعاً جديداً يلغي أثر الإيداع السابق بطريقة تراكمية دون إعادة كتابة التاريخ أو التسبب في تعارضات لمستودعات الزملاء."
    },
    {
      id: "quiz-28-3-3",
      question: "ما الدور الذي تقوم به خاصية 'concurrency: { cancel-in-progress: true }' في ملفات سير عمل GitHub Actions؟",
      options: [
        "إلغاء كافة اشتراكات GitHub المدفوعة.",
        "إلغاء أي فحص قديم لا يزال قيد التشغيل لنفس الفرع فور وصول إيداع جديد، مما يوفر دقائق الخوادم السحابية ويسرع ظهور نتائج الكود الأحدث.",
        "حذف الملفات المؤقتة في مجلد node_modules فقط.",
        "إغلاق المتصفح تلقائياً عند ظهور خطأ برمجي."
      ],
      correctAnswer: 1,
      explanation:
        "خاصية Concurrency تمنع هدر موارد الـ CI؛ فعند دفع تعديلات متتالية، تقوم بإلغاء معالجة النسخ القديمة فوراً والتركيز على أحدث إيداع، مما يوفر دقائق الحوسبة السحابية."
    }
  ],
  exercise: {
    id: "exercise-28-3",
    title: "بناء خط أنابيب CI/CD متكامل ومتوازي في GitHub Actions مع فحص السلامة",
    description:
      "اكتب ملف سير عمل '.github/workflows/ci-cd.yml' يحتوي على:\n1) وظيفة فحص متوازية لاختبارات Vitest وفحص tsc.\n2) وظيفة فحص متوازية لـ ESLint بصفر تحذيرات.\n3) وظيفة نشر تعتمد على نجاح الوظيفتين وتعمل فقط على فرع main، وتقوم ببناء المشروع وفحص استجابة السيرفر بعد النشر.",
    hints: [
      "استخدم 'needs: [test, lint]' لربط وظيفة النشر بالوظائف السابقة.",
      "استخدم 'if: github.ref == 'refs/heads/main'' لقصر النشر على الفرع الرئيسي.",
      "استخدم 'curl --fail' لمحاكاة فحص استجابة السيرفر بعد النشر."
    ],
    solution: `name: Enterprise CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

concurrency:
  group: \${{ github.ref }}
  cancel-in-progress: true

jobs:
  # 1. فحص التنسيق والجودة
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint -- --max-warnings=0

  # 2. فحص الأنواع واختبارات الوحدة
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npx tsc --noEmit
      - run: npm test -- --run

  # 3. البناء والنشر وفحص السلامة
  deploy:
    needs: [lint, test]
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      
      - name: محاكاة النشر لخوادم الإنتاج
        run: echo "🚀 تم نشر الحزمة بنجاح للخوادم الحية!"

      - name: 🩺 فحص السلامة بعد النشر (Health Check)
        run: |
          echo "جارٍ التحقق من استجابة الموقع الحي..."
          # في البيئة الحقيقية: curl --fail https://my-app.com/health || exit 1
          echo "✅ الموقع الحي يستجيب بكفاءة تامة 200 OK!"`
  },
  infographic: {
    title: "خارطة طريق التكامل والنشر المستمر (CI/CD Architecture)",
    subtitle: "المسار الهندسي المؤتمت من أول سطر كود إلى خوادم الإنتاج العالمية واستراتيجيات التعافي",
    nodes: [
      {
        id: "ci-validation",
        title: "1. الفحص الآلي المتوازي (CI)",
        description: "تشغيل ESLint وTypeScript وVitest بالتوازي لحظر دمج أي عيب برمجي.",
        badge: "Validation Gate"
      },
      {
        id: "artifacts-caching",
        title: "2. تخزين الأصول والكاش",
        description: "بناء الحزمة مرة واحدة وتخزينها كـ Artifact مع كاش ذكي للحزم لتسريع الخط.",
        badge: "Build Once"
      },
      {
        id: "secrets-security",
        title: "3. إدارة الأسرار المشفرة",
        description: "حقن المفاتيح وتوكنات السحابة عبر GitHub Secrets دون كشفها في السجلات.",
        badge: "Encrypted Secrets"
      },
      {
        id: "automated-cd",
        title: "4. النشر التلقائي الآمن (CD)",
        description: "إطلاق الحزمة في الإنتاج فور اجتياز الفحوصات دون الحاجة لإجراءات يدوية.",
        badge: "Auto Deployment"
      },
      {
        id: "health-rollback",
        title: "5. فحص السلامة والتراجع",
        description: "فحص استجابة السيرفر الحي وتفعيل الـ Rollback التلقائي في ثوانٍ عند الطوارئ.",
        badge: "Resilience"
      }
    ]
  }
};

export default topic3;

