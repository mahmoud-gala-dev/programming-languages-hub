// src/data/sections/section27/topic3.js
// القسم 27: Git وGitHub والعمل الجماعي - الموضوع 3: معايير العمل الجماعي وهندسة الجودة

export const topic3 = {
  id: "27.3",
  title: "معايير العمل الجماعي وهندسة الجودة",
  englishTitle: "Team Collaboration Standards & Quality Engineering",
  description:
    "الدليل القياسي لبناء ثقافة برمجية مشتركة وعالية الإنتاجية داخل الفرق التقنية: صياغة رسائل الإيداع الموحدة وفق معيار Conventional Commits، اختيار استراتيجية التفريع المثلى بين GitHub Flow وTrunk-Based Development، توحيد جودة وتنسيق الكود عبر ESLint وPrettier، أتمتة الفحص المحلي الإلزامي عبر Husky وlint-staged، توثيق القرارات الهندسية الكبرى عبر سجلات ADRs، وتنظيم مهام التطوير ضمن دورات العمل الرشيقة Agile Sprints.",
  subtopics: [
    {
      id: "27.3.a",
      title: "كتابة رسائل إيداع Commit Messages واضحة ومعبرة",
      englishTerm: {
        term: "Clear Commit Messages",
        pronunciation: "كلير كوميت ميسيجيز",
        meaning: "صياغة رسائل توثيق دقيقة وموجزة تشرح الأسباب المنطقية وراء التعديلات البرمجية"
      },
      description:
        "رسائل الإيداع هي وثيقة التواصل التاريخية بينك وبين زملائك وبين نفسك في المستقبل. الكود يشرح 'كيف' تم الحل، بينما رسالة الإيداع تشرح 'لماذا' تم التعديل وما هي المشكلة التي استدعت التدخل. رسالة الـ Commit الاحترافية تتكون من ثلاثة أجزاء رئيسية: السطر الأول (العنوان) وهو ملخص بأقل من 50 حرفاً يبدأ بفعل أمر حاسم في زمن الحاضر، ثم سطر فارغ فاصل، يليه متن الرسالة (Body) لشرح الدوافع وسياق القرار والخيارات البديلة التي تم استبعادها، وأخيراً التذييل (Footer) الذي يربط الإيداع برقم التذكرة أو يوثق التغييرات الجذرية (Breaking Changes).",
      realWorldAnalogy:
        "تشبه كتابة التاريخ المرضي في الملف الطبي للمريض؛ الطبيب لا يكتب فقط 'أعطيته دواء'، بل يكتب بدقة: 'تم خفض الجرعة إلى 50mg بسبب ظهور حساسية في الجلد مع استقرار نبضات القلب'، ليعرف أي طبيب آخر يستلم المناوبة القادمة سبب القرار وتفاصيل الحالة.",
      whyItMatters:
        "تسهل مراجعة التغييرات وتجعل البحث في سجل Git عبر git log أو git bisect سريعاً ودقيقاً، وتمكن أدوات الأتمتة من توليد سجل التغييرات (Release Changelog) بنقرة زر واحدة دون تدخل بشري.",
      syntax:
        "# الهيكل القياسي لرسالة الإيداع:\n<نوع التعديل>: <ملخص موجز بصيغة الأمر الحاضر>\n\n<شرح تفصيلي للأسباب والمنطق وسياق المشكلة>\n\n<روابط التذاكر والمراجع>",
      codeExample: `// مثال سطر أوامر: صياغة رسالة إيداع كاملة ومحترفة
git commit -m "fix: منع إعادة رندر القائمة الجانبية عند التمرير

- استبدال معالج التمرير المباشر بـ IntersectionObserver
- عزل حالة التمرير داخل خطاف مخصص useScrollSpy
- تحسين معدل الإطارات من 35fps إلى 60fps على الهواتف

Resolves #104"`,
      advancedExample: `// مثال متقدم: تكوين قالب رسائل الإيداع الموحد للفريق (.gitmessage)
# يمكنك فرض قالب توجيهي يظهر تلقائياً لكل مطور عند فتح محرر الـ Commit:

# 1. إنشاء ملف القالب في المشروع: .gitmessage
# ----------------------------------------------------
# <النوع>: <عنوان موجز بأقل من 50 حرفاً>
# |--- سطر فارغ إلزامي ---|
# الشرح والدافع: لماذا هذا التعديل ضروري؟ وما المشكلة التي يحلها؟
#
# التغييرات الجذرية (Breaking Changes إن وجدت):
#
# التذاكر المرتبطة: Closes #123
# ----------------------------------------------------

# 2. ربط القالب بإعدادات المستودع عبر سطر الأوامر:
git config --local commit.template .gitmessage

# الآن عند كتابة أمر git commit بدون -m، سيفتح المحرر هذا القالب كمرجع للمطور!`,
      output:
        "توحيد صياغة الرسائل في كامل سجل المستودع، مما يضمن فهماً فورياً للتعديلات ويقضي على الرسائل العشوائية المبهمة.",
      commonMistakes: [
        {
          mistake: "كتابة ملخص في زمن الماضي (مثل: 'fixed bug' أو 'added button').",
          fix: "استخدام زمن الأمر الحاضر (Imperative Mood) دائماً (مثل: 'fix bug' أو 'add button') تماشياً مع نمط Git الافتراضي في رسائل الدمج."
        },
        {
          mistake: "حشو كل تفاصيل الكود في السطر الأول وتجاوز 100 حرف مما يؤدي لاقتطاعه في واجهة GitHub وGitKraken.",
          fix: "الالتزام بقاعدة 50/72: العنوان أقل من 50 حرفاً، والأسطر في المتن لا تتجاوز 72 حرفاً لتفادي التمرير الأفقي."
        }
      ],
      bestPractices: [
        "أجب دائماً في العنوان على الجملة: 'إذا طُبق هذا الإيداع، فإنه سيقوم بـ: [عنوان رسالتك]'.",
        "اشرح 'لماذا' اتخذت هذا المسار وليس 'ماذا' كتبت في الأسطر؛ فالكود يوضح ما كُتب بينما الرسالة توضح الدافع.",
        "اربط رقم تذكرة المشكلة دائماً في تذييل الرسالة (مثل: Fixes #89) لتمكين التتبع الشفاف."
      ],
      infographic: {
        title: "الهيكل الهندسي للرسالة الثلاثية (Commit Structure)",
        nodes: [
          { label: "1. Subject (العنوان)", desc: "أقل من 50 حرفاً بصيغة الأمر الحاضر يلخص جوهر التعديل" },
          { label: "2. Blank Line", desc: "سطر فارغ فاصل إلزامي يفصل العنوان عن التفاصيل التقنية" },
          { label: "3. Body (المتن)", desc: "شرح معمق لدوافع التعديل والبدائل المستبعدة والتأثير على الأداء" },
          { label: "4. Footer (التذييل)", desc: "أرقام التذاكر المغلقة والإشارات للتغييرات الجذرية Breaking Changes" }
        ]
      }
    },
    {
      id: "27.3.b",
      title: "تطبيق معيار الالتزامات الاصطلاحية Conventional Commits",
      englishTerm: {
        term: "Conventional Commits Specification",
        pronunciation: "كونفينشينال كوميتس سبيسيفيكيشن",
        meaning: "اتفاقية صياغة معيارية لرسائل الإيداع تسهل قراءتها بشرياً وبرمجياً لأتمتة إصدار النسخ"
      },
      description:
        "معيار Conventional Commits هو الاتفاقية الأكثر انتشاراً واعتماداً بين كبرى الشركات والمنظمات التقنية ومشاريع المصدر المفتوح. يعتمد المعيار على تصنيف كل إيداع ببادئة صريحة تحدد طبيعته الدلالية: feat (ميزة جديدة للعميل)، fix (إصلاح عيب)، docs (تعديل في التوثيق)، style (تعديل في التنسيق والفواصل لا يؤثر على المنطق)، refactor (إعادة هيكلة للكود دون إضافة ميزة أو إصلاح عيب)، perf (تحسين الأداء)، test (إضافة أو تعديل اختبارات)، chore (مهام روتينية وتحديث حزم)، وci (تعديل ملفات الأتمتة). كما يتيح وضع علامة تعجب (!) بعد النوع للإشارة الصريحة لوجود تغيير جذري يكسر التوافقية السابقة (Breaking Change).",
      realWorldAnalogy:
        "يشبه نظام حاويات فرز النفايات الملونة في المدن الذكية (الورق في الأزرق، البلاستيك في الأصفر، والزجاج في الأخضر)؛ هذا الفرز المسبق الصارم يتيح لمصانع إعادة التدوير (أدوات الأتمتة) معالجة كل نوع آلياً وتوليد المنتجات الجديدة دون أي خلط أو ارتباك.",
      whyItMatters:
        "يمكّن أدوات مثل Semantic Release من قراءة سجل Git وتحديد رقم الإصدار القادم تلقائياً وفق معيار SemVer (تحديث فرعي Minor عند وجود feat، وتحديث تصحيحي Patch عند وجود fix، وتحديث رئيسي Major عند وجود Breaking Change).",
      syntax:
        "# صياغة معيارية مع تحديد النطاق Scope:\n<type>(<scope>): <description>\n\n# مثال لميزة مع تغيير جذري:\nfeat(api)!: إعادة هيكلة استجابة نقطة النهاية /users",
      codeExample: `// مثال سطر أوامر: نماذج واقعية لتطبيق معيار Conventional Commits
# 1. إضافة ميزة جديدة لمكون معين
git commit -m "feat(cart): إضافة زر الحفظ لوقت لاحق في سلة المشتريات"

# 2. إصلاح عيب في مسار المصادقة
git commit -m "fix(auth): معالجة انتهاء جلسة المستخدم التلقائية عند تحديث التبويب"

# 3. تحسين الأداء بدون تغيير في الواجهة
git commit -m "perf(images): تحويل صيغ صور المنتجات تلقائياً إلى AVIF"

# 4. تعديل مهام الصيانة وتحديث النسخ
git commit -m "chore(deps): ترقية مكتبة Tailwind CSS إلى الإصدار 4.0.0"

# 5. إيداع يحتوي على تغيير جذري يكسر التوافقية السابقة (Major Change)
git commit -m "feat(api)!: تغيير معيار التاريخ في استجابات JSON إلى ISO 8601

BREAKING CHANGE: تم إيقاف دعم صيغة التاريخ القديمة (UNIX timestamp)."`,
      advancedExample: `// مثال متقدم: كيف تستغل أدوات CI معيار Conventional Commits لتوليد CHANGELOG.md آلياً
// محاكاة لعمل مكتبة semantic-release في قراءة سجل الإيداعات:

function determineNextVersion(currentVersion, commits) {
  let [major, minor, patch] = currentVersion.split('.').map(Number);
  let hasBreaking = false;
  let hasFeature = false;
  let hasFix = false;

  commits.forEach(commit => {
    // فحص ما إذا كان هناك تغيير جذري
    if (commit.includes('!') || commit.includes('BREAKING CHANGE')) {
      hasBreaking = true;
    } else if (commit.startsWith('feat')) {
      hasFeature = true;
    } else if (commit.startsWith('fix')) {
      hasFix = true;
    }
  });

  if (hasBreaking) return \`\${major + 1}.0.0 (Major Release)\`;
  if (hasFeature) return \`\${major}.\${minor + 1}.0 (Minor Feature Release)\`;
  if (hasFix) return \`\${major}.\${minor}.\${patch + 1} (Patch Bugfix)\`;
  return \`\${currentVersion} (No release needed)\`;
}

// تجربة فحص الإيداعات
const mockCommits = [
  "fix(login): إصلاح مشكلة الزر المعطل",
  "feat(dashboard): إضافة مخطط بياني للمبيعات",
  "docs: تحديث خطوات التثبيت"
];

console.log('الإصدار التلقائي القادم:', determineNextVersion('1.4.2', mockCommits));`,
      output:
        "يتم استنتاج الإصدار القادم آلياً (1.5.0) وتوليد قائمة التغييرات الرسمية دون أي تدخل يدوي، بفضل الانضباط في استخدام البادئات المعيارية.",
      commonMistakes: [
        {
          mistake: "استخدام بادئات مجهولة أو غير قياسية مثل 'update:' أو 'change:' مما يعطل عمل أدوات الأتمتة.",
          fix: "الالتزام بالقائمة الرسمية: feat, fix, docs, style, refactor, perf, test, build, ci, chore."
        },
        {
          mistake: "استخدام feat عند إصلاح عيب برمجي لمجرد أن التعديل استغرق وقتاً طويلاً.",
          fix: "تذكر أن التصنيف يعتمد على 'أثر التعديل على المستخدم النهائي'؛ فإصلاح العيب يصنف fix، والميزة الإضافية الجديدة تصنف feat."
        }
      ],
      bestPractices: [
        "استخدم النطاق (Scope) بين قوسين لتحديد المجلد أو الوحدة البرمجية المتأثرة بدقة، مثل: feat(navbar) أو fix(checkout).",
        "اكتب الأحرف بالبادئة صغيرة دائماً (lowercase) مثل feat وليس Feat.",
        "استخدم أداة Commitlint عبر Git Hooks لمنع أي إيداع لا يتبع هذا المعيار من الدخول إلى المستودع."
      ],
      infographic: {
        title: "أنواع البادئات في معيار Conventional Commits",
        nodes: [
          { label: "feat:", desc: "إضافة ميزة برمجية جديدة تزيد رقم الإصدار الفرعي (Minor Bump)" },
          { label: "fix:", desc: "إصلاح عيب برمجي قائم يزيد رقم الإصدار التصحيحي (Patch Bump)" },
          { label: "refactor: / perf:", desc: "إعادة هيكلة أو تسريع للأداء دون تغيير وظيفة الكود للعميل" },
          { label: "BREAKING CHANGE (!)", desc: "تغيير جذري يكسر التوافقية السابقة ويزيد رقم الإصدار الرئيسي (Major)" }
        ]
      }
    },
    {
      id: "27.3.c",
      title: "اختيار استراتيجية التفريع المثلى Branching Strategy",
      englishTerm: {
        term: "Branching Strategies (GitHub Flow vs Trunk-Based)",
        pronunciation: "برانشنج ستراتيجيز",
        meaning: "النموذج التنظيمي المعتمد في الفريق لإدارة دورات حياة الفروع وتوقيت دمجها وإطلاقها للإنتاج"
      },
      description:
        "استراتيجية التفريع هي بروتوكول المرور الذي ينظم حركة المطورين على المستودع المشترك. هناك ثلاثة نماذج تاريخية شهيرة: 1) Git Flow: نموذج تقليدي معقد يحتوي على فروع متعددة (main, develop, release, hotfix) يناسب التطبيقات التي تصدر نسخاً موسمية على أقراص أو متاجر مقيدة. 2) GitHub Flow: نموذج رشيق وسريع ومثالي لتطبيقات الويب؛ يعتمد على فرع واحد دائم ومستقر (main) تتفرع منه فروع ميزات قصيرة العمر (feature branches) تُدمج وتُنشر فورياً بعد اجتياز المراجعة والـ CI. 3) Trunk-Based Development: الاستراتيجية الأكثر حداثة لدى عمالقة التقنية (مثل جوجل وميتا)؛ حيث يدمج كافة المطورين تعديلاتهم مباشرة في الفرع الرئيسي عدة مرات يومياً باستخدام أعلام الميزات (Feature Flags) لتفعيل أو إخفاء الميزات قيد الإنشاء.",
      realWorldAnalogy:
        "استراتيجية Git Flow تشبه بناء قطار طويل جداً بمقطورات متعددة ينتظر في المحطة أشهراً حتى يكتمل تحميل كافة البضائع ثم ينطلق دفعة واحدة، بينما GitHub Flow تشبه أسطولاً من سيارات التوصيل السريعة التي تنطلق فورا لتسليم كل طرد بمجرد تجهيزه دون أي تأخير.",
      whyItMatters:
        "اختيار الاستراتيجية الملائمة يحدد سرعة وصول ميزاتك إلى العملاء؛ فالاستراتيجيات الرشيقة ترفع معدل النشر إلى عشرات المرات يومياً وتقلل وقت حل المشاكل إلى دقائق.",
      syntax:
        "# مسار GitHub Flow الكلاسيكي السريع:\n1. git switch -c feature/my-feature\n2. Work & Commit\n3. Push & Open PR\n4. Review & CI Pass ➔ Merge to main ➔ Auto Deploy to Production",
      codeExample: `// مثال توضيحي: محاكاة فكرة أعلام الميزات (Feature Flags) في Trunk-Based Development
import React from 'react';

// كائن للتحكم في الميزات المفعلة في بيئة الإنتاج
const FEATURE_FLAGS = {
  // ميزة جديدة تحت التطوير في الفرع الرئيسي ولكنها معطلة عن الجمهور
  ENABLE_AI_RECOMMENDATIONS: false,
  ENABLE_NEW_CHECKOUT: true
};

export function ProductPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">صفحة المنتج</h1>

      {/* بفضل Feature Flag، يمكن دمج الكود الجديد في main دون خوف من ظهوره للعملاء */}
      {FEATURE_FLAGS.ENABLE_AI_RECOMMENDATIONS ? (
        <section className="mt-4 p-4 bg-purple-900/30 border border-purple-500 rounded-xl">
          <h3 className="font-bold text-purple-300">🤖 توصيات الذكاء الاصطناعي لك</h3>
          <p className="text-xs text-slate-300">ميزة جديدة قيد الاختبار الداخلي.</p>
        </section>
      ) : (
        <section className="mt-4 text-xs text-slate-500">
          (التوصيات التقليدية النشطة حالياً)
        </section>
      )}
    </div>
  );
}`,
      advancedExample: `// مثال متقدم: جدول مقارنة استراتيجيات التفريع لاختيار الأنسب لفريقك
const branchingStrategiesComparison = [
  {
    strategy: "GitHub Flow",
    complexity: "منخفضة وبسيطة جداً",
    releaseCadence: "نشر مستمر عدة مرات يومياً (Continuous Deployment)",
    mainBranchState: "دائماً مستقر وقابل للنشر الفوري (Deployable at any second)",
    bestFor: "تطبيقات الويب السحابية الحديثة وتطبيقات React وNext.js والشركات الناشئة"
  },
  {
    strategy: "Trunk-Based Development",
    complexity: "متوسطة (تتطلب ثقافة CI عالية وأعلام ميزات)",
    releaseCadence: "دمج متكرر ومستمر عدة مرات يومياً في فرع main مباشرة",
    mainBranchState: "نشط جداً ويتحكم في ظهور الميزات عبر Feature Toggles",
    bestFor: "الفرق البرمجية عالية النضج والشركات التقنية الكبرى"
  },
  {
    strategy: "Git Flow",
    complexity: "عالية جداً (فروع متعددة develop, release, hotfix)",
    releaseCadence: "إصدارات متباعدة كل شهرين أو فصلياً",
    mainBranchState: "لا يحوي سوى الإصدارات الرسمية النهائية",
    bestFor: "تطبيقات الأنظمة المدمجة (Embedded) وبرمجيات الأجهزة المقيدة بمتاجر بطيئة"
  }
];

console.table(branchingStrategiesComparison);`,
      output:
        "تحديد استراتيجية تفريع واضحة تمنع تراكم الفروع المتنازعة وتضمن وصول التحديثات إلى خوادم الإنتاج بسرعة البرق.",
      commonMistakes: [
        {
          mistake: "تطبيق تعقيدات Git Flow على تطبيق ويب حديث يُنشر على Vercel أو AWS، مما يعطل سرعة التطوير ببيروقراطية فروع لا فائدة منها.",
          fix: "اعتماد GitHub Flow البسيط؛ فرع main مستقر وفروع ميزات قصيرة تدمج وتُنشر فوراً."
        },
        {
          mistake: "ترك فروع الميزات مفتوحة لأسابيع وشهور طويلة دون دمجها (Stale Branches) مما يجعل دمجها لاحقاً كابوساً برمجياً.",
          fix: "الحرص على ألا يتجاوز عمر أي فرع ميزة يومين إلى 3 أيام عمل على الأكثر قبل دمجه."
        }
      ],
      bestPractices: [
        "اعتمد GitHub Flow كاستراتيجية قياسية لمشاريع React وفرق الواجهات الأمامية.",
        "احمِ فرع main بقواعد الحماية (Branch Protection) لمنع الدفع المباشر وفرض مراجعة الأقران واجتياز الـ CI.",
        "احذف فروع الميزات فور دمجها تلقائياً عبر تفعيل خيار 'Automatically delete head branches' في إعدادات المستودع."
      ],
      infographic: {
        title: "مقارنة استراتيجيات التفريع البرمجية",
        nodes: [
          { label: "GitHub Flow (الأفضل للويب)", desc: "main مستقر ➔ فرع ميزة قصير ➔ PR ومراجعة ➔ دمج ونشر فوري 🚀" },
          { label: "Trunk-Based Dev", desc: "كافة المطورين يدمجون يومياً في main مع إخفاء الميزات غير المكتملة بـ Flags" },
          { label: "Git Flow (كلاسيكي)", desc: "تعقيد فروع develop وrelease وhotfix للمشاريع بطيئة الإصدار" }
        ]
      }
    },
    {
      id: "27.3.d",
      title: "قواعد وإرشادات مراجعة طلبات السحب PR Etiquette",
      englishTerm: {
        term: "Pull Request Guidelines & Etiquette",
        pronunciation: "بول ريكويست جايدلاينز آند إيتيكيت",
        meaning: "القواعد التنظيمية والزمنية والأخلاقية لإدارة طلبات المراجعة وتسريع اعتماد الكود المشترك"
      },
      description:
        "عملية مراجعة الكود تحكمها قواعد وإتيكيت هندسي يضمن تدفق العمل دون تعطيل الزملاء أو نشوب خلافات شخصية. يشمل ذلك: الالتزام باتفاقية مستوى الخدمة للمراجعة (Review SLA؛ مثل الرد على أي PR خلال 24 ساعة كحد أقصى لمنع تعطيل زملائك)، والحرص على أن يكون حجم الـ PR صغيراً وموجزاً (أقل من 300 سطر)، والابتعاد عن التعديلات التجميلية غير المتفق عليها مسبقاً، وفصل النقاشات التقنية الكبرى إلى اجتماعات سريعة أو قضايا مستقلة، وإغلاق المناقشات (Resolve Conversations) بأسلوب مهني بعد التحقق من معالجة الملاحظات.",
      realWorldAnalogy:
        "تشبه آداب المرور على الطرق السريعة؛ حتى لو كانت سيارتك سريعة، يجب عليك استخدام الإشارات الضوئية عند تغيير المسار، وترك مسافة أمان، وعدم التوقف المفاجئ في منتصف الطريق لتعطيل الآخرين.",
      whyItMatters:
        "يمنع تراكم طلبات السحب المعلقة وتضخمها، ويخلق بيئة عمل يسودها الاحترام المتبادل والإنتاجية العالية بدلاً من الإحباط والتعطيل.",
      syntax:
        "// إغلاق النقاش بعد التعديل في تعليقات GitHub:\n\"تم تعديل التسمية وتطبيق المقترح في Commit رقم 7f8a9b. شكراً لك! [Resolve Conversation]\"",
      codeExample: `// مثال توضيحي: مصفوفة إرشادات المراجع وصاحب الـ PR
// واجبات صاحب الـ PR (Author):
// 1. فحص الكود بنفسه أولاً (Self-Review) قبل طلب المراجعة من الآخرين.
// 2. شرح أي قرارات غير بديهية في تعليقات تمهيدية على الأسطر.
// 3. تقبل الملاحظات بروح رياضية والرد على كل ملاحظة باحترام وتوضيح.

// واجبات المراجع (Reviewer):
// 1. مراجعة الـ PR في غضون 24 ساعة من تكليفه به (Review SLA).
// 2. البدء بالإيجابيات وتقدير المجهود المبذول.
// 3. شرح 'السبب' وراء كل تعديل مطلوب وتقديم كود بديل (Suggestion).
// 4. عدم حظر الـ PR لمجرد تفضيلات شخصية في التنسيق ما لم تنص عليها معايير الفريق.`,
      advancedExample: `// مثال متقدم: لوحة فحص جاهزية الـ PR الذكية للمطورين في React
import React, { useState } from 'react';

export function PrReadinessInspector() {
  const [checks, setChecks] = useState([
    { id: 1, text: 'حجم الـ PR صغير وموجز (أقل من 400 سطر معدل)', done: true },
    { id: 2, text: 'قمت بمراجعة التعديلات بنفسي أولاً (Self-Review)', done: true },
    { id: 3, text: 'كافة اختبارات الوحدة تمر بنجاح محلياً', done: true },
    { id: 4, text: 'أرفقت لقطة شاشة للواجهات المعدلة قبل وبعد التعديل', done: false },
    { id: 5, text: 'قمت بربط المشكلة المغلقة (Closes #Issue)', done: true }
  ]);

  const toggleCheck = (id) => {
    setChecks(prev => prev.map(c => c.id === id ? { ...c, done: !c.done } : c));
  };

  const completedCount = checks.filter(c => c.done).length;
  const isReady = completedCount === checks.length;

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-100 font-sans">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-white text-sm">قائمة فحص جاهزية الـ PR قبل طلب المراجعة</h4>
        <span className={'px-2 py-0.5 rounded font-mono font-bold ' + (isReady ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/50' : 'bg-amber-950 text-amber-300 border border-amber-700/50')}>
          {completedCount} / {checks.length} مكتمل
        </span>
      </div>

      <div className="space-y-2">
        {checks.map(item => (
          <label key={item.id} className="flex items-center gap-2.5 p-2 bg-slate-950 rounded-lg border border-slate-800 cursor-pointer hover:border-slate-700 transition">
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleCheck(item.id)}
              className="w-4 h-4 rounded text-emerald-600 focus:ring-0 bg-slate-900 border-slate-700 cursor-pointer"
            />
            <span className={item.done ? 'text-slate-300 line-through opacity-70' : 'text-white'}>
              {item.text}
            </span>
          </label>
        ))}
      </div>

      {isReady ? (
        <div className="mt-3 p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-center font-bold">
          🎉 طلب السحب جاهز تماماً للمراجعة! يمكنك إرساله للفريق الآن.
        </div>
      ) : (
        <div className="mt-3 p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 text-center">
          ⚠️ يرجى استكمال كافة البنود أعلاه لتسريع موافقة زملائك على الكود.
        </div>
      )}
    </div>
  );
}`,
      output:
        "ترسيخ عادات احترافية لدى أعضاء الفريق تؤدي إلى تسريع دورة مراجعة الكود وتقليل المشاحنات وتحسين جودة المنتج.",
      commonMistakes: [
        {
          mistake: "تجاهل طلبات مراجعة الزملاء لعدة أيام وتركهم معطلين في انتظار موافقتك.",
          fix: "تخصيص وقت يومي محدد لمراجعة طلبات السحب (مثلاً أول نصف ساعة في الصباح وبعد الغداء) للالتزام بـ SLA المراجعة."
        },
        {
          mistake: "استخدام أسلوب اعتراضي حاد في المراجعة دون توضيح البديل الهندسي المناسب.",
          fix: "التحلي باللباقة وشرح 'لماذا' هذا البديل أفضل من زاوية الأداء أو الأمان أو سهولة الصيانة."
        }
      ],
      bestPractices: [
        "إذا كان طلب السحب كبيراً بطبيعته، نظمه على شكل سلسلة من الإيداعات الصغيرة المرتبة منطقياً واطلب مراجعته إيداعاً تلو الآخر.",
        "استخدم ميزة Review Draft في GitHub لجمع كافة ملاحظاتك وإرسالها دفعة واحدة بدلاً من إرسال 20 إشعاراً منفصلاً يزعج الزميل.",
        "احرص دائماً على الضغط على زر 'Resolve Conversation' بعد تطبيق التعديل للتأكيد على إنهاء النقطة."
      ],
      infographic: {
        title: "ركائز إتيكيت مراجعة الكود الاحترافية",
        nodes: [
          { label: "1. سرعة الاستجابة (SLA)", desc: "مراجعة الـ PR في غضون 24 ساعة لعدم تعطيل مسار عمل زملائك" },
          { label: "2. فحص الذات أولاً", desc: "مراجعة كودك بنفسك على GitHub قبل استدعاء الزملاء" },
          { label: "3. الاقتراحات الصريحة", desc: "تقديم الحلول عبر كود جاهز للاعتماد الفوري بـ suggestion" },
          { label: "4. روح الفريق الإيجابية", desc: "التركيز على تطوير المشروع وليس إثبات الذات أو فرض الآراء" }
        ]
      }
    },
    {
      id: "27.3.e",
      title: "توحيد جودة وتنسيق الكود عبر ESLint وPrettier المشترك",
      englishTerm: {
        term: "Shared ESLint & Prettier Standards",
        pronunciation: "شيرد إي إس لينت آند بريتيير ستاندردز",
        meaning: "توحيد القواعد البرمجية والتنسيق البصري للأسطر والفواصل عبر إعدادات موحدة تلتزم بها كافة بيئات التطوير"
      },
      description:
        "أكبر مضيعة لوقت المطورين في مراجعات الكود هي النقاشات العقيمة حول التنسيق الشكلي: هل نستخدم الفاصلة المنقوطة (;)؟ هل نستخدم علامات الاقتباس الفردية أم المزدوجة؟ هل نترك مسافة فارغة هنا؟ الحل الهندسي الحاسم هو فصل المسؤوليات وأتمتة الفحص بالكامل: 1) Prettier: يتولى التنسيق البصري التلقائي الموحد (Code Formatting) مثل أطوال الأسطر، والمسافات البادئة، والأقواس. 2) ESLint: يتولى الفحص المنطقي وتحليل جودة الكود (Code Quality & Bug Prevention) مثل اكتشاف المتغيرات غير المستخدمة، والاعتماديات المفقودة في خطافات useEffect، والأخطاء البرمجية الشائعة. وتوحيد هذه الإعدادات في ملفات المشروع يضمن أن الكود ينسق بنفس الأسلوب تماماً بغض النظر عن نظام تشغيل المطور أو محرره.",
      realWorldAnalogy:
        "يشبه الزي العسكري أو المدرسي الموحد؛ عندما يرتدي الجميع نفس الزي، تختفي الفروقات الشكلية والنقاشات السطحية حول المظهر، وينصب تركيز الجميع بنسبة 100% على الأداء الحقيقي والجوهر.",
      whyItMatters:
        "يقضي نهائياً على التعارضات البرمجية الناتجة عن تغييرات المسافات والفواصل (Formatting Diff Noise)، ويوفر مئات الساعات في مراجعات الكود للتركيز على المنطق المعماري.",
      syntax:
        "# تشغيل الفحص والتنسيق الآلي في المشروع:\nnpm run lint\nnpm run format",
      codeExample: `// مثال عملي: ملف إعدادات التنسيق الموحد للفريق (.prettierrc)
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf"
}`,
      advancedExample: `// مثال متقدم: تكوين ESLint الحديث الموحد لمشاريع React 19 (eslint.config.js - Flat Config)
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierConfig from 'eslint-config-prettier';

export default [
  // استثناء مجلدات البناء والحزم
  { ignores: ['dist', 'node_modules', '.next'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // تحذير المطور عند وجود متغيرات غير مستخدمة
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      // منع استخدام console.log في بيئة الإنتاج
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // إلزامية القواعد الصارمة لخطافات React
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  },
  // دمج تكوين Prettier لمنع أي تضارب بين القواعد والتنسيق
  prettierConfig
];`,
      output:
        "تنسيق تلقائي للشيفرة عند كل عملية حفظ داخل محرر VS Code، واكتشاف فوري للأخطاء المنطقية دون الحاجة لتذكير بشري.",
      commonMistakes: [
        {
          mistake: "حدوث تضارب بين قواعد ESLint وقواعد Prettier مما يسبب وميض الكود وتنازع الأدوات في تصحيحه.",
          fix: "تثبيت حزمة eslint-config-prettier وتعطيل كافة قواعد ESLint المسؤولة عن التنسيق الشكلي لصالح Prettier."
        },
        {
          mistake: "عدم تفعيل خاصية 'Format on Save' في محرر VS Code والاعتماد على التنسيق اليدوي.",
          fix: "تضمين ملف .vscode/settings.json في المشروع لتفعيل editor.formatOnSave: true تلقائياً لكافة أعضاء الفريق."
        }
      ],
      bestPractices: [
        "ضع ملف .editorconfig في جذر المستودع لتوحيد نهايات الأسطر (LF) ونوع المسافات عبر كافة المحررات المختلفة.",
        "أضف أوامر npm run lint و npm run format داخل package.json لتسهيل تشغيلها يدوياً وعبر الـ CI.",
        "لا تستخدم خيار eslint-disable إلا في حالات استثنائية للغاية مع كتابة تعليق صريح يبرر سبب الاستثناء."
      ],
      infographic: {
        title: "فصل المسؤوليات: ESLint مقابل Prettier",
        nodes: [
          { label: "ESLint (جودة الكود)", desc: "فحص القواعد المنطقية: المتغيرات المهملة، اعتمادات useEffect، وثغرات الأمان" },
          { label: "Prettier (المظهر البصري)", desc: "التنسيق الشكلي الصارم: المسافات، الفواصل، طول الأسطر، والأقواس" },
          { label: "eslint-config-prettier", desc: "الجسر الذي يعطل تضارب القواعد لضمان تناغم الأداتين بسلام تام" }
        ]
      }
    },
    {
      id: "27.3.f",
      title: "استخدام خطافات Git Hooks لأتمتة الفحص المحلي",
      englishTerm: {
        term: "Git Hooks Automation",
        pronunciation: "جيت هوكس أوتوميشن",
        meaning: "نصوص برمجية يطلقها Git تلقائياً عند وقوع أحداث رئيسية كالإيداع أو الرفع لتنفيذ مهام التحقق"
      },
      description:
        "خطافات Git (Git Hooks) هي صمامات أمان محلية تنفذ مهام برمجية تلقائية قبل إتمام عمليات Git الحيوية. توجد هذه الخطافات كملفات نصية تنفيذية داخل مجلد .git/hooks/. ومن أشهر هذه الخطافات: 1) pre-commit: يعمل قبل إنشاء الإيداع مباشرة، ويستخدم لفحص الكود المجهز بأدوات ESLint وPrettier، وإذا وُجد خطأ يلغي عملية الإيداع فوراً. 2) commit-msg: يعمل للتأكد من أن رسالة الإيداع تلتزم بمعيار Conventional Commits. 3) pre-push: يعمل قبل رفع الكود إلى GitHub للتأكد من نجاح تشغيل اختبارات الوحدة. العيب التاريخي لخطافات Git هو أنها موجودة داخل مجلد .git المخفي ولا يتم مشاركتها تلقائياً عبر المستودع السحابي، وهو ما استدعى ظهور أدوات مثل Husky لحل هذه المعضلة.",
      realWorldAnalogy:
        "تشبه بوابات التفتيش الأمني في المطارات؛ قبل أن تصعد إلى الطائرة (تنفيذ git push)، تمر عبر جهاز الكشف عن المعادن وتفتيش الحقائب؛ إذا نسيت غرضاً ممنوعاً (مثل خطأ برمجي أو مفتاح سري)، تغلق البوابة في وجهك فوراً لتصحيح وضعك قبل الصعود للطائرة.",
      whyItMatters:
        "تمنع وصول الأخطاء البرمجية التافهة ورسائل الإيداع العشوائية إلى خوادم السحابة، مما يوفر وقت سير عمل الـ CI ويحمي الفريق من تعطل البناء المشترك.",
      syntax:
        "# ملف الخطاف المحلي pre-commit:\n#!/bin/sh\nnpm run lint\n# إذا كان كود الخروج غير صفري، يلغى الإيداع تلقائياً",
      codeExample: `// مثال سطر أوامر: إنشاء خطاف محلي pre-commit يدوياً في Git
# 1. إنشاء ملف الخطاف في مجلد الخطافات الداخلي
cat << 'EOF' > .git/hooks/pre-commit
#!/bin/sh
echo "🔍 جلب أدوات الفحص: جارٍ التحقق من كود React قبل الإيداع..."

# تشغيل الفحص اللغوي
npm run lint

# قراءة كود خروج الأمر السابق
if [ $? -ne 0 ]; then
  echo "❌ فشل الفحص! يرجى إصلاح أخطاء ESLint قبل إتمام الإيداع."
  exit 1
fi

echo "✅ الكود سليم وموثوق. جارٍ إتمام الإيداع..."
exit 0
EOF

# 2. منح الملف صلاحية التنفيذ
chmod +x .git/hooks/pre-commit`,
      advancedExample: `// مثال متقدم: خطاف commit-msg لفحص رسائل الإيداع والتحقق من التزامها بمعيار Conventional Commits
#!/bin/sh
# مسار الملف: .git/hooks/commit-msg

# قراءة مسار ملف الرسالة المؤقت الذي يمرره Git
COMMIT_MSG_FILE=$1
COMMIT_MSG=$(cat "$COMMIT_MSG_FILE")

# التعبير النمطي لمعيار Conventional Commits القياسي
PATTERN="^(feat|fix|docs|style|refactor|perf|test|build|ci|chore)(\\(.+\\))?(!)?: .+$"

if ! echo "$COMMIT_MSG" | grep -qE "$PATTERN"; then
  echo "❌ رسالة الإيداع المكتوبة تخالف معيار Conventional Commits!"
  echo "مثال صحيح: feat(auth): إضافة التحقق بخطوتين"
  echo "الرسالة المدخلة: $COMMIT_MSG"
  exit 1
fi

exit 0`,
      output:
        "حماية المستودع المحلي؛ حيث يتوقف Git تلقائياً عن إتمام الإيداع إذا احتوى الكود على أخطاء برمجية أو رسالة غير متوافقة مع المعايير.",
      commonMistakes: [
        {
          mistake: "نسيان إعطاء صلاحيات التشغيل (chmod +x) لملف الخطاف على أنظمة Linux وmacOS مما يجعله غير فعال.",
          fix: "تنفيذ أمر chmod +x .git/hooks/<hook-name> للتأكد من قدرة نظام التشغيل على تشغيله."
        },
        {
          mistake: "تجاوز فحص الخطافات عمداً باستخدام git commit --no-verify ورفع كود معطوب.",
          fix: "تجنب استخدام علم --no-verify إلا في حالات الطوارئ القصوى المصرح بها هندسياً."
        }
      ],
      bestPractices: [
        "اجعل خطافات pre-commit سريعة وخفيفة جداً (أقل من 3 ثوانٍ) لعدم إحباط المطور أثناء الإيداع المتكرر.",
        "لا تضع الاختبارات الشاملة الثقيلة (E2E Tests) في pre-commit؛ بل انقلها لخطاف pre-push أو خوادم الـ CI.",
        "استخدم مكتبة Husky الحديثة لإدارة الخطافات ومشاركتها تلقائياً مع كافة أعضاء الفريق عبر المستودع."
      ],
      infographic: {
        title: "أنواع ومحطات تشغيل Git Hooks الشائعة",
        nodes: [
          { label: "1. pre-commit", desc: "يعمل قبل الـ Commit لفحص التنسيق والـ Lint ومنع الأخطاء مبكراً" },
          { label: "2. commit-msg", desc: "يفحص نص رسالة الإيداع ويفرض الالتزام بـ Conventional Commits" },
          { label: "3. pre-push", desc: "يعمل قبل رفع الكود للسحابة لتشغيل اختبارات الوحدة السريعة" },
          { label: "4. post-merge", desc: "يعمل بعد الـ pull/merge لتثبيت الحزم الجديدة npm install تلقائياً" }
        ]
      }
    },
    {
      id: "27.3.g",
      title: "أتمتة الفحص المحلي الإلزامي باستخدام Husky وlint-staged",
      englishTerm: {
        term: "Husky & lint-staged Integration",
        pronunciation: "هاسكي آند لينت ستيجد إنتجريشن",
        meaning: "الحزمة المعيارية لمشاركة خطافات Git وفحص وتنسيق الملفات المجهزة حصراً قبل كل إيداع"
      },
      description:
        "المشكلة الكبرى في فحص الكود قبل الإيداع (pre-commit) هي البطء؛ فإذا كان مشروعك يحتوي على 2000 ملف، فإن تشغيل ESLint على كامل المشروع عند كل commit سيستغرق دقيقة كاملة، وهو أمر مستحيل عملياً! هنا يأتي الثنائي الذهبي الأقوى في عالم جافاسكريبت: 1) Husky: يقوم بربط وإدارة مجلد خطافات Git (.husky/) ومشاركته مع كامل الفريق تلقائياً عبر مستودع GitHub. 2) lint-staged: أداة ذكية تقوم بتشغيل ESLint وPrettier حصراً على الملفات الموجودة في منطقة التجهيز (Staged Files فقط) التي تم تعديلها للتو. فإذا عدلت ملفاً واحداً، سيستغرق الفحص والتنسيق الآلي نصف ثانية فقط، مما يوفر سرعة مذهلة وانضباطاً تاماً.",
      realWorldAnalogy:
        "يشبه الفرق بين تفتيش كافة سكان المدينة عند كل صباح (فحص كامل المشروع البطيء)، وبين تفتيش الشخص الوحيد الذي يعبر بوابة المبنى حالياً فقط (فحص الملفات المجهزة بـ lint-staged السريع والمحدد).",
      whyItMatters:
        "يضمن عدم دخول سطر كود واحد غير منسق أو معيب إلى مستودع المشروع، ويوفر تجربة تطوير فائقة السرعة والسلاسة لكافة أعضاء الفريق دون أي إبطاء.",
      syntax:
        "# تثبيت Husky وlint-staged:\nnpm install --save-dev husky lint-staged\nnpx husky init",
      codeExample: `// مثال عملي: تكوين lint-staged داخل ملف package.json
{
  "name": "react-enterprise-app",
  "scripts": {
    "prepare": "husky"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.{json,css,md}": [
      "prettier --write"
    ]
  }
}`,
      advancedExample: `// مثال متقدم: الإعداد الكامل المتطور لـ Husky v9 مع فحص الرسائل عبر Commitlint
# 1. تثبيت الحزم اللازمة في مشروع React
npm install --save-dev husky lint-staged @commitlint/cli @commitlint/config-conventional

# 2. تهيئة Husky في المشروع (ينشئ مجلد .husky/ وأمر prepare في package.json)
npx husky init

# 3. إعداد خطاف pre-commit لتشغيل lint-staged
echo "npx lint-staged" > .husky/pre-commit

# 4. إعداد خطاف commit-msg لفرض معيار Conventional Commits
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg

# 5. إنشاء ملف تكوين commitlint.config.js
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js

# النتيجة:
# الآن أصبح المستودع محصناً محلياً بنسبة 100%!
# - أي ملف معدل يُنسق ويُفحص تلقائياً بـ Prettier وESLint قبل الـ Commit.
# - أي رسالة تخالف feat: أو fix: تُرفض فوراً من قِبل Commitlint!`,
      output:
        "أتمتة محلية متطورة؛ لا يمكن لأي مطور في الفريق إنشاء إيداع دون تنسيق كوده وفحصه والتزامه بالمعايير العالمية.",
      commonMistakes: [
        {
          mistake: "نسيان إضافة سطر 'prepare': 'husky' في scripts بملف package.json، مما يجعل الخطافات غير مفعلة للزملاء بعد تنفيذ npm install.",
          fix: "التأكد من وجود 'prepare': 'husky' ليقوم npm بتثبيت خطافات Husky تلقائياً لكل زميل يستنسخ المشروع."
        },
        {
          mistake: "تشغيل اختبارات الوحدة الكاملة داخل lint-staged مما يبطئ عمليات الإيداع بشكل كبير.",
          fix: "قصر مهام lint-staged على التنسيق والـ lint، وترك الاختبارات الكاملة لخطاف pre-push أو خوادم الـ CI."
        }
      ],
      bestPractices: [
        "استخدم eslint --fix وprettier --write معاً داخل lint-staged لتصحيح التنسيقات والأخطاء البسيطة تلقائياً دون إيقاف المطور.",
        "احرص على إضافة مجلد .husky/ إلى المستودع لمشاركته مع الفريق، وتأكد من أن ملفاته تملك صلاحيات التنفيذ.",
        "اختبر عمل الخطافات عبر محاولة إنشاء إيداع برسالة خاطئة مثل 'test commit' للتأكد من رفضها السليم."
      ],
      infographic: {
        title: "تدفق العمل المشترك بين Husky وlint-staged",
        nodes: [
          { label: "1. git commit", desc: "المطور يحاول تنفيذ إيداع التغييرات المجهزة في Staging Area" },
          { label: "2. Husky Trigger", desc: "Husky يعترض الأمر ويطلق خطاف .husky/pre-commit فوراً" },
          { label: "3. lint-staged", desc: "تشغيل Prettier وESLint حصراً على الملفات المعدلة وتصحيحها" },
          { label: "4. commitlint", desc: "التحقق من صحة صياغة الرسالة والسماح بالإيداع النهائي" }
        ]
      }
    },
    {
      id: "27.3.h",
      title: "توثيق القرارات المعمارية باستخدام سجلات ADRs",
      englishTerm: {
        term: "Architectural Decision Records (ADRs)",
        pronunciation: "آركيتكتشرال ديسيجن ريكوردز",
        meaning: "وثائق تقنية قصيرة وموثقة تسجل القرارات الهندسية الكبرى وسياقها وبدائلها داخل المستودع"
      },
      description:
        "في الفرق البرمجية، أكبر لغز يواجه المهندسين الجدد هو: 'لماذا اختار الفريق مكتبة Zustand بدلاً من Redux؟' أو 'لماذا اعتمدنا Tailwind بدلاً من Styled-Components؟'. سجلات القرارات المعمارية (Architecture Decision Records - ADRs) هي وثائق Markdown قصيرة ومحكمة توضع داخل مجلد docs/adr/ في المستودع. توثق كل وثيقة: العنوان، والحالة (مقترح Proposed، معتمد Accepted، ملغى Deprecated)، والسياق والمشكلة (Context)، والقرار المتخذ (Decision)، والنتائج الإيجابية والسلبية المترتبة على القرار (Consequences). هذا السجل يحفظ الذاكرة المؤسسية للمشروع ويمنع إعادة النقاشات المنتهية مراراً وتكراراً.",
      realWorldAnalogy:
        "تشبه مضابط الجلسات الرسمية في البرلمان أو سجلات المحكمة العليا؛ يتم توثيق نص القانون، والظروف التي استدعت تشريعه، وتصويت الأعضاء، وتفسير القضاة لأسباب اعتماد هذا الحكم، ليكون مرجعاً تاريخياً قاطعاً لا يمكن الجدال فيه بعد سنوات.",
      whyItMatters:
        "يحافظ على استمرارية المعرفة عند مغادرة مهندسي الفريق القدامى، ويسرع انضمام المطورين الجدد (Onboarding) بنسبة 70%، ويمنع القرارات العشوائية القائمة على الآراء الفردية غير المدروسة.",
      syntax:
        "# مسار مجلد السجلات في المشروع:\ndocs/adr/0001-use-zustand-for-state.md\n\n# هيكل الوثيقة:\n# [الرقم]. [العنوان]\n## الحالة (Status)\n## السياق (Context)\n## القرار (Decision)\n## العواقب (Consequences)",
      codeExample: `// مثال عملي: نموذج لسجل قرار معماري حقيقي (docs/adr/0003-adopt-tailwind-v4.md)
# 3. اعتماد Tailwind CSS v4 لتنسيق واجهات المستخدم

## الحالة (Status)
معتمد (Accepted) - تاريخ: 2026-10-29

## السياق والمشكلة (Context)
كان التطبيق يعتمد على CSS Modules التقليدية، مما أدى إلى تضخم ملفات التنسيق، وتكرار أسماء الأصناف، وصعوبة توحيد الهوية البصرية بين أعضاء الفريق المطورين لـ 15 شاشة مختلفة.

## القرار (Decision)
قررنا اعتماد **Tailwind CSS v4** كنظام التنسيق القياسي الوحيد للمشروع للأسباب التالية:
1. التوافق العالي مع React 19 والسرعة الفائقة لمحرك Lightning CSS المدمج.
2. توحيد نظام الرموز (Design Tokens) للألوان والمسافات عبر ملف CSS مركزي واحد.
3. التخلص من مشاكل تضارب أسماء الأصناف (Specificity Wars).

## العواقب والآثار (Consequences)
### الإيجابيات:
- انخفاض حجم حزمة الإنتاج بنسبة 45%.
- تسريع بناء الواجهات الجديدة بمقدار الضعف.
### السلبيات المحتملة:
- حاجة بعض المطورين الجدد لفترة تدريب قصيرة لإتقان أصناف Tailwind.`,
      advancedExample: `// مثال متقدم: أداة سطر أوامر لإدارة وتوليد سجلات ADRs آلياً (adr-tools)
# 1. تهيئة مجلد القرارات المعمارية في المشروع
npx adr-log init

# 2. إنشاء قرار معماري جديد
# يقوم الأمر بإنشاء ملف جديد مرقم تسلسلياً: docs/adr/0004-use-tanstack-query.md
npx adr new "استخدام TanStack Query لجلب بيانات الخادم والتخزين المؤقت"

# 3. تحديث حالة قرار سابق إذا تم استبداله بقرار أحدث
# استبدال القرار رقم 2 بالقرار رقم 5:
# Status: Deprecated by ADR-0005

# 4. توليد فهرس ملخص لكافة القرارات المعمارية في ملف docs/adr/README.md
npx adr-log generate > docs/adr/README.md`,
      output:
        "توثيق هندسي مؤسسي عالي الشفافية، يوضح بوضوح أسباب كافة الاختيارات البرمجية الكبرى في المشروع.",
      commonMistakes: [
        {
          mistake: "اتخاذ قرارات معمارية كبرى في محادثات شات سريعة على Slack أو WhatsApp دون توثيقها في المستودع.",
          fix: "تحويل أي نقاش معماري ينتهي باتفاق إلى وثيقة ADR موثقة ومدمجة عبر Pull Request رسمي."
        },
        {
          mistake: "تعديل أو مسح وثائق ADR القديمة بعد تغيير القرار مستقبلاً.",
          fix: "سجلات ADR لا تُمسح أبداً؛ إذا تغير القرار، ننشئ ADR جديداً يحدد أن القرار القديم أصبح (Superseded by ADR-XXXX) للحفاظ على التاريخ."
        }
      ],
      bestPractices: [
        "اجعل وثيقة الـ ADR قصيرة وموجزة (صفحة واحدة فقط) لضمان قراءتها وفهمها السريع من الجميع.",
        "ناقش مسودة الـ ADR في Pull Request قبل اعتمادها لإتاحة الفرصة لكافة أعضاء الفريق لإبداء آرائهم.",
        "وثق السلبيات المحتملة للقرار بكل شفافية وشجاعة؛ فلا يوجد حل هندسي مثالي بدون مقايضات (Trade-offs)."
      ],
      infographic: {
        title: "الأركان الأربعة لسجل القرار المعماري (ADR)",
        nodes: [
          { label: "1. Status (الحالة)", desc: "مقترح (Proposed) أو معتمد (Accepted) أو ملغى (Deprecated)" },
          { label: "2. Context (السياق)", desc: "ما هي المشكلة الواقعية والضغوط الفنية التي استدعت هذا القرار؟" },
          { label: "3. Decision (القرار)", desc: "ما هو الحل الهندسي الذي اخترناه وما هي الأسباب الفنية لترجيحه؟" },
          { label: "4. Consequences (العواقب)", desc: "المكاسب المحققة والمقايضات والسلبيات التي قبلنا التعامل معها" }
        ]
      }
    },
    {
      id: "27.3.i",
      title: "إدارة المهام البرمجية ضمن دورات العمل الرشيقة Agile Sprints",
      englishTerm: {
        term: "Agile Sprints & Task Management",
        pronunciation: "أجايل سبرينتس آند تاسك مانجمنت",
        meaning: "تنظيم العمل البرمجي في دورات زمنية محددة وقصيرة لضمان التسليم المستمر وتقييم التقدم"
      },
      description:
        "إدارة المشاريع بالمنهجية الرشيقة (Agile & Scrum) هي الإطار التنظيمي السائد في كبرى شركات التقنية. بدلاً من التخطيط لستة أشهر قادمة في بيئة سريعة التغير، يتم تقسيم العمل إلى دورات زمنية مغلقة تسمى سبرنتات (Sprints) تستغرق عادة من أسبوع إلى أسبوعين. تبدأ الدورة باجتماع التخطيط (Sprint Planning) لتقدير جهد المهام بنقاط القصة (Story Points)، يتخللها الاجتماع اليومي القصير (Daily Standup لمدة 15 دقيقة) للإجابة على: ماذا أنجزت أمس؟ ماذا سأفعل اليوم؟ وهل هناك عوائق (Blockers)؟ وتختتم الدورة باجتماع مراجعة الإنجاز (Sprint Review & Demo) واجتماع تحسين أداء الفريق والدروس المستفادة (Sprint Retrospective).",
      realWorldAnalogy:
        "يشبه سباق التتابع في ألعاب القوى؛ بدلاً من أن يركض عداء واحد ماراثوناً شاقاً لمسافة 42 كيلومتراً وحيداً حتى ينهار، يركض أربعة متسابقين مسافات قصيرة ومكثفة وسريعة، ويسلم كل منهم الراية للآخر في توقيت محسوب بدقة مع تقييم السرعة باستمرار.",
      whyItMatters:
        "تمنع الاحتراق الوظيفي للمطورين، وتتيح للشركات التكيف الفوري مع متطلبات السوق والعملاء، وتجعل وتيرة تسليم الميزات البرمجية منتظمة وقابلة للتنبؤ.",
      syntax:
        "# أسئلة الاجتماع اليومي السريع الثلاثة (Daily Standup):\n1. What did I achieve yesterday?\n2. What will I work on today?\n3. Are there any blockers in my way?",
      codeExample: `// مثال مفاهيمي: نموذج دورة السبرنت الرشيقة (Agile Sprint Flow)
const sprintLifecycle = {
  duration: "أسبوعان (10 أيام عمل)",
  ceremonies: [
    {
      name: "1. تخطيط السبرنت (Sprint Planning)",
      goal: "اختيار المهام من الـ Backlog وتقدير جهدها بنقاط القصة (Story Points)"
    },
    {
      name: "2. الموقف اليومي (Daily Standup)",
      goal: "مزامنة سريعة لمدة 15 دقيقة لكشف العوائق وتحديد أولويات اليوم"
    },
    {
      name: "3. العرض التوضيحي (Sprint Demo)",
      goal: "عرض الميزات الحية لأصحاب المصلحة وجمع ردود الفعل"
    },
    {
      name: "4. المراجعة الاسترجاعية (Retrospective)",
      goal: "مناقشة: ما الذي سار بشكل رائع؟ ما الذي نحتاج لتحسينه في السبرنت القادم؟"
    }
  ]
};

console.log('مراسم السبرنت المعتمدة:', sprintLifecycle.ceremonies.map(c => c.name));`,
      advancedExample: `// مثال متقدم: لوحة محاكاة سرعة إنجاز الفريق (Team Velocity Simulator)
import React, { useState } from 'react';

export function SprintVelocityTracker() {
  const [sprints, setSprints] = useState([
    { id: 'S1', name: 'سبرنت 1: الأساسيات', committed: 30, completed: 28 },
    { id: 'S2', name: 'سبرنت 2: المصادقة', committed: 35, completed: 32 },
    { id: 'S3', name: 'سبرنت 3: لوحة التحكم', committed: 40, completed: 38 },
    { id: 'S4', name: 'سبرنت 4: السلة والدفع', committed: 42, completed: 42 }
  ]);

  // حساب متوسط سرعة الفريق الحالية (Average Velocity)
  const averageVelocity = Math.round(
    sprints.reduce((acc, s) => acc + s.completed, 0) / sprints.length
  );

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-slate-100 font-sans">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
        <div>
          <h3 className="text-base font-bold text-white">مؤشر سرعة إنجاز الفريق (Team Velocity)</h3>
          <p className="text-xs text-slate-400">تتبع نقاط القصة المكتملة في كل سبرنت لتقدير القدرة المستقبلية</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold font-mono text-emerald-400">{averageVelocity} نقطة</div>
          <div className="text-[10px] text-slate-500">متوسط السبرنت الواحد</div>
        </div>
      </div>

      <div className="space-y-3">
        {sprints.map(s => {
          const rate = Math.round((s.completed / s.committed) * 100);
          return (
            <div key={s.id} className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5 text-xs">
              <div className="flex justify-between font-medium">
                <span className="text-white">{s.name}</span>
                <span className="font-mono text-slate-400">{s.completed} / {s.committed} نقطة ({rate}%)</span>
              </div>
              {/* شريط تقدم الإنجاز */}
              <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{ width: \`\${rate}%\` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}`,
      output:
        "تنظيم صارم ومريح للجهود البرمجية يحدد القدرة الحقيقية للفريق بالأرقام الملموسة لتفادي الوعود غير الواقعية ومشاكل التأخير.",
      commonMistakes: [
        {
          mistake: "تحويل الاجتماع اليومي Standup إلى جلسة تحقيق مطولة ومناقشات تفصيلية تتجاوز 45 دقيقة.",
          fix: "الالتزام الصارم بـ 15 دقيقة فقط، وتأجيل أي نقاش تقني ثنائي إلى ما بعد الاجتماع (Take it offline)."
        },
        {
          mistake: "إضافة مهام جديدة مفاجئة في منتصف السبرنت (Scope Creep) دون إزالة مهام موازية لها في الجهد.",
          fix: "حماية نطاق السبرنت المتفق عليه؛ وأي ميزة جديدة غير طارئة توضع في Backlog السبرنت القادم."
        }
      ],
      bestPractices: [
        "استخدم أسلوب Planning Poker وتقديرات متتالية فيبوناتشي (1, 2, 3, 5, 8, 13) لتقدير الجهد بدقة.",
        "احرص على ألا تتجاوز أي مهمة واحدة أكثر من 5 إلى 8 نقاط قصة؛ وإذا كانت أكبر، قسمها إلى مهام فرعية أصغر.",
        "اجعل جلسة الـ Retrospective مساحة آمنة وصادقة لمناقشة المشاكل الهندسية والتنظيمية لتحسين أداء الفريق في الدورة التالية."
      ],
      infographic: {
        title: "الدورة الرشيقة المتكاملة (Agile Sprint Cycle)",
        nodes: [
          { label: "1. Sprint Planning", desc: "تحديد أهداف الدورة وتقدير نقاط القصة من الـ Backlog" },
          { label: "2. Daily Standup (15m)", desc: "متابعة يومية سريعة وتفكيك العوائق البرمجية" },
          { label: "3. Sprint Review & Demo", desc: "استعراض الميزات الحية المكتملة وتلقي الملاحظات" },
          { label: "4. Retrospective", desc: "تقييم أداء الفريق والاتفاق على تحسينات الدورة القادمة" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-27-3-1",
      question: "ما هو الغرض من إضافة بادئة 'feat:' في بداية رسالة الإيداع وفق معيار Conventional Commits؟",
      options: [
        "للإشارة إلى أن هذا التعديل يمثل ميزة جديدة تم إضافتها للمستخدم وتستدعي زيادة رقم الإصدار الفرعي (Minor Version).",
        "للإشارة إلى وجود عيب برمجي فادح يجب حذفه.",
        "لتنسيق الفواصل والمسافات في كود CSS فقط.",
        "لتجاوز فحص خطافات Git Hooks تلقائياً."
      ],
      correctAnswer: 0,
      explanation:
        "تُخصص البادئة 'feat' للإشارة الصريحة إلى ميزات المستخدم الجديدة، وتستغلها أدوات الأتمتة (مثل semantic-release) لتوليد سجل التغييرات ورفع رقم الإصدار الفرعي (Minor bump) تلقائياً."
    },
    {
      id: "quiz-27-3-2",
      question: "لماذا يُعتبر الدمج بين Husky وlint-staged هو الحل الأمثل لفحص جودة الكود قبل الـ Commit بدلاً من فحص المشروع كاملاً؟",
      options: [
        "لأنه يفحص فقط الملفات التي تم تعديلها وتجهيزها في الـ Staging Area، مما يجعل الفحص يستغرق جزءاً من الثانية بدلاً من دقائق طويلة.",
        "لأنه يلغي الحاجة تماماً لكتابة الاختبارات الآلية.",
        "لأنه يعمل بدون تثبيت بيئة Node.js.",
        "لأنه يقوم برفع الكود إلى السيرفر مجاناً وبدون حساب GitHub."
      ],
      correctAnswer: 0,
      explanation:
        "تقوم lint-staged بتمرير الملفات المجهزة للإيداع فقط (Staged files) إلى أدوات ESLint وPrettier، مما يضمن أقصى سرعة ممكنة للتطوير دون إرهاق المبرمج بالانتظار الطويل."
    },
    {
      id: "quiz-27-3-3",
      question: "ما هي وثيقة ADR (Architecture Decision Record) وما فائدتها في فرق التطوير؟",
      options: [
        "وثيقة سرية تحوي كلمات مرور قواعد البيانات الخاصة بالإنتاج.",
        "وثيقة Markdown قصيرة تسجل سياق وأسباب القرارات الهندسية الكبرى والبدائل المستبعدة لحفظ الذاكرة المؤسسية للمشروع.",
        "فاتورة شهرية بقيمة استهلاك خوادم السحابة في AWS.",
        "ملف تنفيذي لتثبيت نظام تشغيل Linux على جهاز المطور."
      ],
      correctAnswer: 1,
      explanation:
        "وثائق ADRs تسجل التاريخ والمنطق وراء كافة الخيارات المعمارية للمشروع (مثل اختيار مكتبة معينة أو أسلوب نمذجة محدد)، مما يحمي الفريق من ضياع المعرفة ويوضح للمطورين الجدد أسباب بناء النظام بهذا الشكل."
    }
  ],
  exercise: {
    id: "exercise-27-3",
    title: "إعداد تكوين Husky وlint-staged وكتابة وثيقة قرار معماري ADR متكاملة",
    description:
      "1) اكتب إعدادات lint-staged داخل ملف package.json لتنسيق وفحص ملفات React.\n2) اكتب وثيقة ADR كاملة باسم '0001-use-zustand-for-global-state.md' توضح سبب اختيار Zustand لإدارة الحالة بدلاً من Redux Toolkit.",
    hints: [
      "في lint-staged استخدم نمط '*.{js,jsx}' لتشغيل prettier --write وeslint --fix.",
      "في وثيقة ADR اتبع الأقسام القياسية الأربعة: الحالة (Status)، السياق (Context)، القرار (Decision)، والعواقب (Consequences)."
    ],
    solution: `// 1. جزء تكوين package.json:
{
  "lint-staged": {
    "*.{js,jsx}": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.{css,json,md}": [
      "prettier --write"
    ]
  }
}

// 2. ملف وثيقة القرار المعماري: docs/adr/0001-use-zustand-for-global-state.md
/*
# 1. اعتماد مكتبة Zustand لإدارة الحالة العامة للتطبيق

## الحالة (Status)
معتمد (Accepted) - تاريخ: 2026-10-29

## السياق والمشكلة (Context)
يحتاج تطبيقنا إلى إدارة حالة عامة للمستخدم (سلة المشتريات وبيانات تسجيل الدخول والمظهر الداكن).
مكتبة Redux Toolkit توفر بنية قوية ولكنها تفرض كوداً مكرراً (Boilerplate) ضخماً وتعقيداً غير مبرر لحجم مشروعنا الحالي، بينما يسبب React Context إعادة رندر لكامل شجرة المكونات غير المرتبطة.

## القرار (Decision)
قررنا اعتماد **Zustand** للأسباب التالية:
1. حجم حزمة فائق الصغر (أقل من 2KB).
2. بساطة مطلقة في التعريف بدون الحاجة لموفر Context Provider في جذر التطبيق.
3. دعم تلقائي لخاصية الانتقاء الدقيق (Atomic Selectors) لمنع إعادة الرندر غير الضرورية.

## العواقب (Consequences)
### الإيجابيات:
- سرعة عالية في كتابة المتاجر (Stores) وسهولة صيانتها.
- أداء فائق في رندر الواجهات الحساسة.
### السلبيات:
- تتطلب التزاماً طوعياً من الفريق بعدم وضع الحالات المحلية البسيطة داخل الحالة العامة.
*/`
  },
  infographic: {
    title: "أعمدة ثقافة وهندسة الجودة في العمل الجماعي",
    subtitle: "التكامل بين المعايير الصارمة للصياغة، والأتمتة المحلية، وتوثيق القرارات المعمارية",
    nodes: [
      {
        id: "commit-standards",
        title: "1. Conventional Commits",
        description: "توحيد صياغة الرسائل ببادئات feat وfix لأتمتة إصدار النسخ والـ Changelog.",
        badge: "Commit Standards"
      },
      {
        id: "flow-choice",
        title: "2. GitHub Flow & Trunk",
        description: "اعتماد مسارات تفريع رشيقة قائمة على فروع قصيرة ودمج مستمر للإنتاج.",
        badge: "Branching Model"
      },
      {
        id: "local-automation",
        title: "3. Husky & lint-staged",
        description: "فحص وتنسيق الكود المجهز محلياً في نصف ثانية لمنع الأخطاء قبل خروجها.",
        badge: "Automated Hooks"
      },
      {
        id: "adr-docs",
        title: "4. سجلات الـ ADRs",
        description: "توثيق الأسباب والبدائل والسلبيات للقرارات المعمارية لحفظ المعرفة المؤسسية.",
        badge: "Architecture Docs"
      },
      {
        id: "agile-cadence",
        title: "5. وتيرة السبرنت الرشيقة",
        description: "دورات عمل قصيرة وتقدير نقاط القصة لضمان تسليم مستمر وموثوق للميزات.",
        badge: "Agile Sprints"
      }
    ]
  }
};

export default topic3;

