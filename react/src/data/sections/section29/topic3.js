// e:\KD\lang\react\src\data\sections\section29\topic3.js
// الموضوع الثالث من القسم 29: صيانة المشروع والاعتماديات (Maintenance, Dependency Hygiene, Security, Codemods & Tech Debt)

export const topic3 = {
  id: "topic-29-3",
  title: "صيانة المشروع وإدارة الاعتماديات والديون التقنية",
  description: "دليل تطبيقي شامل لإتقان استراتيجيات صيانة مشاريع React الكبيرة على المدى الطويل: ترقية الإصدارات والاعتماديات بأمان (npm outdated / update)، تثبيت التبعيات المطابقة عبر Lockfiles، الفحص الأمني التلقائي ومكافحة الثغرات (Security Audits & Dependabot)، تنظيف الحزم الميتة (depcheck)، أتمتة الترقية عبر Codemods وjscodeshift، خفض وإدارة الديون التقنية (Technical Debt)، وإعادة هيكلة المكونات المتضخمة وتوثيقها وفق معايير TSDoc/JSDoc.",
  subtopics: [
    {
      id: "29.3.a",
      title: "تحديث React والاعتماديات بانتظام (npm outdated & update)",
      englishTerm: {
        term: "Dependency Updating & Maintenance",
        pronunciation: "ديبندنسي أبديتنغ آند مينتينانس",
        meaning: "التحديث الدوري لحزم المشروع ومتابعة التوافقية"
      },
      description: "عالم منظومة React وJavaScript يتحرك بسرعة استثنائية؛ حيث تُطلق أسبوعياً تحديثات أمنية، تحسينات في سرعة الأداء، وميزات جديدة في المكتبات الأساسية. يعني تحديث الاعتماديات بانتظام فحص الحزم المثبتة في المشروع باستخدام أدوات مثل npm outdated للكشف عن الحزم التي توفرت لها إصدارات أحدث، وفهم دلالات الترميز الدلالي للإصدارات (Semantic Versioning - SemVer المكون من MAJOR.MINOR.PATCH)، وتطبيق التحديثات بحكمة وأمان عبر npm update أو أدوات متقدمة مثل npm-check-updates (ncu). يمنع التحديث الدوري المنتظم تراكم الفجوة الزمنية بين كود مشروعك والبيئة البرمجية الحديثة، مما يجنبك كابوس الترقية الإجبارية المؤلمة بعد فوات الأوان.",
      realWorldAnalogy: "يشبه التحديث الدوري للاعتماديات إجراء الصيانة الدورية وتغيير زيت وفلاتر سيارتك كل 5000 كيلومتر؛ فإذا حافظت على هذه الصيانة الروتينية الخفيفة، ستعمل السيارة بكفاءة لسنوات طويلة؛ أما إذا أهملتها لسنوات متتالية، فسيتعطل المحرك فجأة وتتحول تكلفة الإصلاح إلى مبلغ باهظ وتوقف كامل للعمل.",
      whyItMatters: "المشاريع التي تظل حبيسة إصدارات قديمة من React ومكتباتها تفقد ميزات الأداء الحديثة مثل React Compiler وServer Components ومحركات الترطيب المتطورة، وتصبح فريسة سهلة للثغرات الأمنية المكتشفة، ويعاني مطوروها من صعوبة استقطاب كفاءات جديدة ترغب بالعمل بأحدث التقنيات. علاوة على ذلك، فإن القفز عبر ثلاثة إصدارات رئيسية دفعة واحدة يستغرق أشهراً من العمل المضني لإصلاح المشاكل.",
      syntax: "# فحص الحزم التي تمتلك إصدارات أحدث\nnpm outdated\n\n# تحديث الحزم المتوافقة مع قيود package.json (Minor & Patch)\nnpm update\n\n# أداة الترقية الشاملة للإصدارات الكبرى\nnpx npm-check-updates -u\nnpm install",
      simpleExample: `// استعراض محاكاة فحص وتحديث الاعتماديات البرمجية في React
import React, { useState } from 'react';

// مكون لوحة فحص حالة الحزم البرمجية
export function DependencyUpdateDemo() {
  // قائمة الحزم وحالتها الحالية
  const [packages, setPackages] = useState([
    { name: 'react', current: '18.2.0', wanted: '18.3.1', latest: '19.0.0', type: 'major' },
    { name: 'clsx', current: '2.0.0', wanted: '2.1.1', latest: '2.1.1', type: 'patch' },
    { name: 'lucide-react', current: '0.300.0', wanted: '0.344.0', latest: '0.344.0', type: 'minor' }
  ]);

  // دالة محاكاة التحديث للحزم المتوافقة
  const handleUpdateSafe = () => {
    // تحديث الحزم إلى الإصدار المطلوب (Wanted)
    setPackages((prev) =>
      prev.map((pkg) => (pkg.type !== 'major' ? { ...pkg, current: pkg.wanted } : pkg))
    );
  };

  // إرجاع واجهة الفحص
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-md">
      <h3 className="font-bold text-sm mb-3">حالة اعتماديات المشروع (npm outdated)</h3>
      <div className="space-y-2 mb-4">
        {packages.map((pkg) => (
          <div key={pkg.name} className="flex justify-between items-center text-xs p-2 bg-slate-950 rounded">
            <span className="font-mono text-slate-300">{pkg.name}</span>
            <div className="font-mono text-slate-400">
              <span className="text-slate-500">{pkg.current}</span> &rarr;{' '}
              <span className={pkg.type === 'major' ? 'text-amber-400 font-bold' : 'text-emerald-400 font-bold'}>
                {pkg.wanted}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={handleUpdateSafe}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-bold rounded-lg transition"
      >
        تنفيذ npm update للحزم الآمنة
      </button>
    </div>
  );
}`,
      advancedExample: `// نظام متكامل لإدارة وتحليل خطة ترقية الاعتماديات وفق المعيار الدلالي SemVer
import React, { useState } from 'react';

// فئة تحليل الإصدارات وتحديد درجة خطورة الترقية
class SemVerAuditor {
  // فحص الفرق بين الإصدار الحالي والإصدار الأحدث
  static evaluateRisk(current, latest) {
    const [cMajor, cMinor, cPatch] = current.split('.').map(Number);
    const [lMajor, lMinor, lPatch] = latest.split('.').map(Number);

    // إذا اختلف الرقم الأول فهو تغيير جذري (Major)
    if (lMajor > cMajor) {
      return { level: 'HIGH', label: 'تغيير جذري (Breaking Changes)', color: 'text-rose-400 bg-rose-500/10 border-rose-500/30' };
    }
    // إذا اختلف الرقم الثاني فهو ميزات جديدة متوافقة (Minor)
    if (lMinor > cMinor) {
      return { level: 'MEDIUM', label: 'ميزات جديدة متوافقة (Safe)', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
    }
    // إذا اختلف الرقم الثالث فهو إصلاح أخطاء وأمان (Patch)
    if (lPatch > cPatch) {
      return { level: 'LOW', label: 'إصلاحات أمنية وتصحيحات (Patch)', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
    }
    // في حال تطابق الإصدار
    return { level: 'NONE', label: 'محدث لآخر إصدار', color: 'text-slate-400 bg-slate-800 border-slate-700' };
  }
}

// مكون لوحة التحكم في خطة ترقية الاعتماديات
export function DependencyUpgradeStudio() {
  // قائمة الاعتماديات في مشروع حقيقي
  const [dependencies, setDependencies] = useState([
    { name: 'react', current: '18.3.1', latest: '19.0.0', peerMismatch: false },
    { name: 'react-dom', current: '18.3.1', latest: '19.0.0', peerMismatch: false },
    { name: 'tailwindcss', current: '3.4.1', latest: '4.0.0', peerMismatch: true },
    { name: 'axios', current: '1.6.2', latest: '1.7.4', peerMismatch: false },
    { name: 'zod', current: '3.22.4', latest: '3.23.8', peerMismatch: false }
  ]);

  // حالة ترقية حزمة مفردة تجريبياً
  const upgradeSingle = (pkgName, targetVersion) => {
    setDependencies((prev) =>
      prev.map((item) => (item.name === pkgName ? { ...item, current: targetVersion } : item))
    );
  };

  // إرجاع واجهة الاستوديو
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold">محلل ترقيات الحزم البرمجية (SemVer Upgrade Advisor)</h3>
          <p className="text-xs text-slate-400 mt-1">تقييم مخاطر الترقية والتعامل مع التغييرات الجذرية وتضارب Peer Dependencies</p>
        </div>
        <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20">
          SemVer Guard
        </span>
      </div>

      {/* جدول الحزم */}
      <div className="space-y-3">
        {dependencies.map((pkg) => {
          // حساب مستوى الخطورة عبر فئة التحليل
          const risk = SemVerAuditor.evaluateRisk(pkg.current, pkg.latest);
          const isUpToDate = pkg.current === pkg.latest;

          return (
            <div key={pkg.name} className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-slate-200">{pkg.name}</span>
                  {pkg.peerMismatch && (
                    <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-mono">
                      تضارب اعتماديات محتمل
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  الحالي: <span className="text-slate-300">{pkg.current}</span> | الأحدث:{' '}
                  <span className="text-cyan-400">{pkg.latest}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={\`text-xs px-2.5 py-1 rounded-md border font-medium \${risk.color}\`}>
                  {risk.label}
                </span>

                {!isUpToDate && (
                  <button 
                    onClick={() => upgradeSingle(pkg.name, pkg.latest)}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-xs font-bold rounded-lg transition"
                  >
                    ترقية
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* نصيحة للمطورين */}
      <div className="mt-6 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
        📌 <strong className="text-slate-200">القاعدة الذهبية:</strong> ابدأ دائماً بترقية تصحيحات Patch أولاً، ثم الميزات Minor، وأخيراً اختبر التغييرات الجذرية Major في فرع Git منفصل مع تشغيل كامل لاختبارات الوحدات.
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال المعماري كيفية تحليل حزم المشروع باستخدام قواعد Semantic Versioning؛ حيث يصنف التحديثات بناءً على أرقام الإصدارات إلى تصحيحات آمنة (Patch)، ميزات جديدة متوافقة (Minor)، وتغييرات جذرية (Major) تتطلب اختبارات يدوية وفحص التوافق بين الحزم التابعة.",
      commonMistakes: [
        {
          mistake: "تشغيل أمر npx npm-check-updates -u وتحديث كل حزم المشروع إلى أحدث إصدار رئيسي في خطوة واحدة عشوائية.",
          why: "الترقية الجماعية للإصدارات الكبرى تكسر توافق المكتبات ببعضها وتتسبب في مئات الأخطاء المعقدة التي يصعب تتبع أصلها.",
          fix: "حدّث الحزم تدريجياً: ابدأ بالحزم الصغيرة المساعدة، ثم مكتبات التنسيق، واترك إطار العمل الأساسي (React / Next.js) كخطوة مستقلة مخصصة."
        },
        {
          mistake: "استخدام علامة النجمة (*) أو الرمز (>) في حقل الإصدار بملف package.json لتنزيل أحدث نسخة دائماً.",
          why: "يؤدي ذلك إلى تنزيل إصدارات غير مستقرة فجأة في بيئة الإنتاج أثناء عملية النشر التلقائي، مما يكسر التطبيق تماماً دون أي تغيير في كودك.",
          fix: "استخدم دائماً رمز الكاريت (^) للسماح بالتحديثات المتوافقة فقط أو ثبت الإصدار بدقة تامة دون رموز للمكتبات الحساسة."
        }
      ],
      bestPractices: [
        "شغّل أمر npm outdated أسبوعياً لاكتشاف التحديثات المتراكمة أولاً بأول.",
        "راجع دائماً سجل التغييرات الرسمي (CHANGELOG.md أو GitHub Releases) قبل ترقية أي إصدار Major.",
        "تأكد من تشغيل كافة اختبارات الوحدات والتكامل (Unit & E2E Tests) بنجاح كامل فور ترقية أي مكتبة.",
        "استخدم فروع Git مخصصة للترقيات (مثل chore/upgrade-react-19) ولا تقم بدمجها إلا بعد مراجعة دقيقة وتجربة شاملة."
      ],
      visualInfographic: {
        title: "هرم ترقية الاعتماديات وفق المعيار الدلالي (SemVer)",
        description: "دلالات أرقام الإصدارات ومستوى المخاطرة عند الترقية",
        visualSteps: [
          "الإصدار التصحيحي PATCH 🟢 (1.0.0 &rarr; 1.0.1 - إصلاحات أمان وأخطاء بلا مخاطر)",
          "الإصدار الإضافي MINOR 🟡 (1.0.0 &rarr; 1.1.0 - ميزات جديدة مع توافقية رجعية كاملة)",
          "الإصدار الجذري MAJOR 🔴 (1.0.0 &rarr; 2.0.0 - تغييرات جذرية وكسر للدوال القديمة)",
          "الفحص الدوري 🔍 (تشغيل npm outdated ومراجعة سجل Changelog)",
          "الدمج الآمن 🛡️ (التشغيل في فرع تجريبي مع تحقق الاختبارات المؤتمتة)"
        ]
      }
    },
    {
      id: "29.3.b",
      title: "استخدام Lockfiles وضمان تطابق التثبيت (package-lock.json & npm ci)",
      englishTerm: {
        term: "Lockfiles & Deterministic Installs",
        pronunciation: "لوك فايلز آند ديتيرمينيستك إنستولز",
        meaning: "ملفات القفل وضمان تثبيت نسخ مطابقة ومضمونة بنسبة 100%"
      },
      description: "ملف القفل (Lockfile ويتمثل في package-lock.json مع npm، أو pnpm-lock.yaml مع pnpm، أو yarn.lock مع Yarn) هو مستند سجل صارم وشديد الدقة يسجل الشجرة الكاملة لجميع الحزم والاعتماديات المباشرة وغير المباشرة (Transitive Dependencies) التي تم تنزيلها، مع توثيق أرقام إصداراتها المحددة وقيم التجزئة المشفرة (Integrity Hash) ومصدر تحميلها. تكمن القوة القصوى لملف القفل في منع معضلة 'لكنه يعمل على جهازي!'؛ حيث يضمن أن كل مطور في الفريق، وكل خادم بناء في بيئة CI/CD، وخادم الإنتاج النهائي، يقومون بتثبيت الكود البرمجي ذاته بالبايت الواحد. كما يتيح استخدام الأمر المخصص npm ci تثبيتاً فائق السرعة وموثوقاً يتجاوز الحسابات التقديرية لـ npm install العادي.",
      realWorldAnalogy: "يشبه ملف package.json قائمة المكونات العامة لطبخة معينة (مثال: سكر، دقيق، بيض)؛ بينما يشبه package-lock.json الوصفة الكيميائية بالغة الدقة (مثال: 50.2 جرام سكر نقي من العلامة التجارية س، مخزنة في درجة حرارة 22 مئوية برقم تسلسلي محدد)؛ مما يضمن أن الطبخة ستخرج بنفس الطعم والجودة بالضبط أينما طُبخت في العالم.",
      whyItMatters: "بدون ملف القفل أو عند تجاهل إدراجه في Git، قد يقوم خادم النشر بتنزيل إصدار فرعي جديد من مكتبة تابعة يحتوي على خطأ برمجي غير مقصود، مما يؤدي إلى انهيار مفاجئ للتطبيق في الإنتاج ليلة الجمعة دون أن يكون أي مبرمج قد عدل سطراً واحداً في الكود المصدري!",
      syntax: "# التثبيت الصارم والمطابق لملف القفل في خوادم الإنتاج والـ CI\nnpm ci\n\n# التحقق من سلامة ملف القفل وعدم تعارضه\ngit status package-lock.json",
      simpleExample: `// مقارنة برمجية ومفاهيمية بين أسلوب npm install وأسلوب npm ci
import React from 'react';

// مكون يعرض الفرق الجوهري بين أمري التثبيت
export function LockfileComparisonTable() {
  // بيانات المقارنة
  const comparisons = [
    { feature: 'الهدف الأساسي', npmInstall: 'تثبيت حزم جديدة وتحديث package-lock', npmCi: 'تثبيت صارم ومطابق للملف الحالي' },
    { feature: 'تعديل package-lock.json', npmInstall: 'نعم، يمكن أن يعدله', npmCi: 'مستحيل، يفشل فوراً إذا وجد تعارضاً' },
    { feature: 'حذف مجلد node_modules', npmInstall: 'لا يحذفه، يدمج التعديلات', npmCi: 'يحذفه بالكامل ويضمن تثبيتاً نظيفاً' },
    { feature: 'سرعة التنفيذ في CI/CD', npmInstall: 'أبطأ (يقوم بحل شجرة الاعتماديات)', npmCi: 'فائق السرعة (أسرع بنسبة 2x إلى 5x)' }
  ];

  // إرجاع واجهة الجدول
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl max-w-lg text-white">
      <h3 className="text-base font-bold mb-3">مقارنة التثبيت: npm install مقابل npm ci</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-right border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400">
              <th className="py-2 px-2">الخاصية</th>
              <th className="py-2 px-2 text-amber-400">npm install</th>
              <th className="py-2 px-2 text-emerald-400">npm ci</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {comparisons.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-950/40">
                <td className="py-2 px-2 font-medium text-slate-300">{row.feature}</td>
                <td className="py-2 px-2 font-mono text-slate-400">{row.npmInstall}</td>
                <td className="py-2 px-2 font-mono text-emerald-300">{row.npmCi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}`,
      advancedExample: `// محاكي فحص النزاهة والتطابق المشفر لملف package-lock.json (Integrity Hash Checker)
import React, { useState } from 'react';

// فئة محاكاة فحص أمان وتطابق التجزئة المشفرة SHA-512 للحزم
class IntegrityVerifier {
  // فحص ما إذا كانت حزمة معينة تطابق تجزئة النزاهة المسجلة في القفل
  static verifyPackage(packageName, installedHash, lockfileHash) {
    if (installedHash === lockfileHash) {
      return { status: 'MATCH', message: 'التجزئة مطابقة تماماً؛ الحزمة أصلية ومحمية.', valid: true };
    }
    return { status: 'TAMPERED', message: 'تحذير: تم التلاعب بالحزمة أو تغير محتواها عن ملف القفل!', valid: false };
  }
}

// مكون لوحة فحص تطابق ملف القفل في بيئة العمل الجماعي
export function LockfileGuardStudio() {
  // قائمة حزم تجريبية وتجزئتها المشفرة
  const [lockRecords, setLockRecords] = useState([
    {
      name: 'react',
      version: '18.3.1',
      lockHash: 'sha512-uV/example-react-hash-valid==',
      diskHash: 'sha512-uV/example-react-hash-valid==',
    },
    {
      name: 'next',
      version: '14.2.5',
      lockHash: 'sha512-next-official-hash-xyz==',
      diskHash: 'sha512-next-tampered-fake-hash==', // محاكاة تلاعب أو تعارض
    },
    {
      name: 'zustand',
      version: '4.5.2',
      lockHash: 'sha512-zustand-secure-hash-abc==',
      diskHash: 'sha512-zustand-secure-hash-abc==',
    }
  ]);

  // حالة الرسالة الإرشادية
  const [outputNotice, setOutputNotice] = useState('');

  // تشغيل محاكاة أمر npm ci
  const simulateNpmCI = () => {
    // فحص جميع الحزم
    const hasTampering = lockRecords.some(r => r.lockHash !== r.diskHash);
    if (hasTampering) {
      setOutputNotice('❌ فشل أمر npm ci: تم اكتشاف تعارض في تجزئة النزاهة (Integrity Check Failed). عملية البناء متوقفة لحماية بيئة الإنتاج.');
    } else {
      setOutputNotice('✅ نجح أمر npm ci: تم التحقق من تطابق جميع الحزم 100%. البيئة مطابقة للمطورين.');
    }
  };

  // إصلاح التعارض بإعادة التوليد النظيف
  const fixConflict = () => {
    setLockRecords(prev =>
      prev.map(item => ({ ...item, diskHash: item.lockHash }))
    );
    setOutputNotice('🔄 تم إصلاح وتطابق الحزم مع ملف package-lock.json.');
  };

  // إرجاع واجهة الفحص
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold">حارس ملفات القفل (Deterministic Lockfile Guard)</h3>
          <p className="text-xs text-slate-400 mt-1">التحقق من قيم التجزئة المشفرة ومنع تعارضات بيئات النشر</p>
        </div>
        <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
          Strict CI Mode
        </span>
      </div>

      {/* استعراض السجلات */}
      <div className="space-y-3 mb-6">
        {lockRecords.map((pkg) => {
          const check = IntegrityVerifier.verifyPackage(pkg.name, pkg.diskHash, pkg.lockHash);
          return (
            <div key={pkg.name} className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono font-bold text-sm text-slate-200">{pkg.name}@{pkg.version}</span>
                <span className={\`text-[11px] px-2 py-0.5 rounded font-bold \${check.valid ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}\`}>
                  {check.status}
                </span>
              </div>
              <p className="text-xs text-slate-400">{check.message}</p>
            </div>
          );
        })}
      </div>

      {/* أزرار الإجراءات */}
      <div className="flex gap-2">
        <button 
          onClick={simulateNpmCI}
          className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl transition shadow-lg"
        >
          محاكاة أمر npm ci في خادم الإنتاج
        </button>
        <button 
          onClick={fixConflict}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 font-semibold text-xs rounded-xl transition border border-slate-700"
        >
          مزامنة نظيفة
        </button>
      </div>

      {outputNotice && (
        <div className="mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono leading-relaxed">
          {outputNotice}
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "يشرح هذا النموذج المعماري كيف يعمل ملف package-lock.json على حماية المشاريع من التلاعب بالاعتماديات عبر مطابقة تجزئة التشفير integrity hash، ويوضح لماذا يعتبر أمر npm ci إلزامياً في بيئات CI/CD لضمان التطابق المطلق ورفض أي تعارض مشبوه.",
      commonMistakes: [
        {
          mistake: "إضافة ملف package-lock.json إلى ملف .gitignore وتجاهل رفعه إلى مستودع Git.",
          why: "تجاهل رفع ملف القفل يدمر ضمانات التطابق، ويجعل كل مطور وخادم إنتاج يعمل على مجموعة مختلفة تماماً من الإصدارات الفرعية للحزم التابعة.",
          fix: "احرص دائماً على تضمين وحفظ package-lock.json أو pnpm-lock.yaml داخل مستودع Git والتأكد من مراجعته في كل Pull Request."
        },
        {
          mistake: "حل تعارضات الدمج (Merge Conflicts) في ملف package-lock.json يدوياً عبر تعديل نصوص الـ JSON.",
          why: "ملف القفل يحتوي على مصفوفات وهياكل تجزئة رياضية معقدة؛ والتعديل اليدوي العشوائي يفسد بنية الملف ويجعل npm يفشل في قراءته.",
          fix: "لحل التعارض، اسحب أحدث نسخة من الفرع الأساسي وشغّل npm install لإعادة بناء وحساب شجرة القفل تلقائياً ثم قم بعمل commit."
        }
      ],
      bestPractices: [
        "استخدم دائماً أمر npm ci في جميع مسارات GitHub Actions وخوادم الإنتاج بدلاً من npm install.",
        "احرص على ألا يحتوي الـ Pull Request على تعديلات غير مبررة في ملف package-lock.json إذا لم يتم إضافة أو ترقية حزمة فعلياً.",
        "استخدم محركات حزم حديثة مثل pnpm لربط الاعتماديات بروابط صلبة (Hard links) وتوفير مساحات القرص وتسريع التثبيت بنسبة 300%.",
        "فعّل التحقق من سلامة التثبيت قبل بدء البناء لضمان عدم وجود حزم مفقودة أو غير مطابقة."
      ],
      visualInfographic: {
        title: "منظومة الثقة والتطابق عبر Lockfiles",
        description: "كيف يضمن ملف القفل استنساخاً برمجياً مطابقاً 100% بين المطورين وخوادم الإنتاج",
        visualSteps: [
          "تثبيت الحزمة محلياً 💻 (إنشاء وتحديث package-lock.json مع التجزئة المشفرة)",
          "حفظ ملف القفل في Git 📦 (الالتزام بعدم تجاهله في .gitignore)",
          "سحب الكود في الـ CI/CD 🚀 (تنفيذ أمر npm ci فائق السرعة والأمان)",
          "مطابقة التجزئة المشفرة 🛡️ (التحقق من سلامة كل بايت تم تنزيله من npm)",
          "بيئة إنتاج متطابقة 🏆 (القضاء التام على أخطاء 'لكنه يعمل على جهازي')"
        ]
      }
    },
    {
      id: "29.3.c",
      title: "فحص ومعالجة الثغرات الأمنية (npm audit, Snyk & Dependabot)",
      englishTerm: {
        term: "Security Vulnerability Audits",
        pronunciation: "سيكيوريتي فولنيرابيليتي أوديتس",
        meaning: "الفحص الدوري التلقائي ومعالجة الثغرات الأمنية في الاعتماديات"
      },
      description: "تحتوي تطبيقات React الحديثة في المتوسط على مئات أو آلاف الحزم الفرعية داخل مجلد node_modules؛ ومع مرور الوقت، يكتشف باحثو الأمن ثغرات أمنية خطيرة في هذه الحزم مثل حقن الأوامر (Remote Code Execution - RCE)، وتجاوز الذاكرة، وهجمات حجب الخدمة عبر التعبيرات النمطية (ReDoS)، وتلوث النماذج الأولية (Prototype Pollution). يتضمن فحص ومعالجة الثغرات استخدام أدوات متقدمة مثل npm audit، وربط مستودع المشروع بخدمات الفحص الآلي مثل Snyk وGitHub Dependabot التي ترسل تنبيهات فورية وتفتح طلبات سحب مؤتمتة (Automated Security PRs) مع ترقية الحزمة المصابة إلى إصدار محصن دون أي تدخل يدوي معقد.",
      realWorldAnalogy: "يشبه الفحص الأمني التلقائي للاعتماديات أجهزة المسح بالأشعة السينية ومطابقة البصمات في بوابات المطار الدولية؛ حيث تفحص كل حقيبة وحزمة قادمة من مصادر خارجية وتقارنها بقاعدة بيانات دولية للممنوعات والثغرات المعروفة لإيقافها ومعالجتها قبل أن تدخل صالة الركاب.",
      whyItMatters: "قد يؤدي وجود ثغرة أمنية واحدة مهملة في إحدى مكتبات معالجة الصور أو قراءة ملفات JSON التابعة لتطبيق React إلى اختراق خادم العرض أو تسريب بيانات المستخدمين وجلساتهم الحساسة. كما أن تقارير الفحص الأمني الصفرية (Zero High/Critical Vulnerabilities) أصبحت شرطاً إلزامياً للحصول على شهادات الامتثال العالمية مثل SOC2 وISO 27001.",
      syntax: "# فحص الثغرات الأمنية في حزم المشروع\nnpm audit\n\n# إصلاح الثغرات المتوافقة تلقائياً\nnpm audit fix\n\n# فرض الترقية حتى لو تضمنت تغييرات جذرية (يجب الحذر!)\nnpm audit fix --force",
      simpleExample: `// استعراض محاكاة تقرير فحص الثغرات الأمنية وتصنيف خطورتها في React
import React, { useState } from 'react';

// مكون لوحة الفحص الأمني السريع
export function SecurityAuditBanner() {
  // حالة الثغرات المكتشفة في المشروع
  const [vulnerabilities, setVulnerabilities] = useState([
    { id: 1, pkg: 'minimist', severity: 'critical', desc: 'Prototype Pollution vulnerability' },
    { id: 2, pkg: 'semver', severity: 'moderate', desc: 'Regular Expression Denial of Service' }
  ]);

  // دالة محاكاة الإصلاح التلقائي
  const handleAutoFix = () => {
    // إزالة الثغرات بعد ترقية الحزم المحصنة
    setVulnerabilities([]);
  };

  // إرجاع واجهة التنبيه
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl max-w-md text-white">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-sm">تقرير الثغرات الأمنية (npm audit)</h3>
        <span className="text-xs px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold">
          {vulnerabilities.length} ثغرات
        </span>
      </div>

      {vulnerabilities.length === 0 ? (
        <p className="text-xs text-emerald-400 font-semibold py-2">
          🛡️ جميع الاعتماديات آمنة ومحدثة بنسبة 100%. لا توجد ثغرات معروفة.
        </p>
      ) : (
        <div className="space-y-2 mb-4">
          {vulnerabilities.map((v) => (
            <div key={v.id} className="p-2 bg-slate-950 rounded border border-slate-800 text-xs">
              <div className="flex justify-between font-mono font-bold">
                <span className="text-slate-200">{v.pkg}</span>
                <span className={v.severity === 'critical' ? 'text-rose-400 uppercase' : 'text-amber-400 uppercase'}>
                  {v.severity}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">{v.desc}</p>
            </div>
          ))}
        </div>
      )}

      {vulnerabilities.length > 0 && (
        <button 
          onClick={handleAutoFix}
          className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs rounded-lg transition"
        >
          تنفيذ الإصلاح التلقائي (npm audit fix)
        </button>
      )}
    </div>
  );
}`,
      advancedExample: `// نظام متقدم لمحاكاة ومراقبة تنبيهات Dependabot وSnyk مع سياسات الحظر الصارم (Security Gate)
import React, { useState } from 'react';

// درجات خطورة الثغرات وفق مقياس CVSS العالمي
const SEVERITY_LEVELS = {
  CRITICAL: { weight: 4, badge: 'bg-rose-500 text-white', label: 'حرج للغاية (Critical)' },
  HIGH: { weight: 3, badge: 'bg-orange-500/20 text-orange-400 border border-orange-500/30', label: 'عالي الخطورة (High)' },
  MODERATE: { weight: 2, badge: 'bg-amber-500/20 text-amber-400 border border-amber-500/30', label: 'متوسط (Moderate)' },
  LOW: { weight: 1, badge: 'bg-blue-500/20 text-blue-400 border border-blue-500/30', label: 'منخفض (Low)' }
};

// مكون استوديو بوابات الأمان ومنع النشر عند وجود ثغرات حرجة
export function DependabotSecurityStudio() {
  // سجل الثغرات المكتشفة في المشروع
  const [securityIssues, setSecurityIssues] = useState([
    {
      cve: 'CVE-2024-37890',
      package: 'ws',
      installedVersion: '8.17.0',
      fixedVersion: '8.17.1',
      severity: 'HIGH',
      summary: 'DoS vulnerability when handling malicious WebSocket frames',
      source: 'GitHub Dependabot'
    },
    {
      cve: 'CVE-2024-21501',
      package: 'path-to-regexp',
      installedVersion: '0.1.7',
      fixedVersion: '0.1.10',
      severity: 'CRITICAL',
      summary: 'Regular Expression Denial of Service in route matching',
      source: 'Snyk Security Guard'
    }
  ]);

  // فحص هل توجد أي ثغرة حرجة تعطل بوابة النشر (CI Gate Block)
  const hasCriticalOrHigh = securityIssues.some(
    (issue) => issue.severity === 'CRITICAL' || issue.severity === 'HIGH'
  );

  // دالة محاكاة قبول طلب السحب المؤتمت وتطبيق الترقية المحصنة
  const resolveSecurityPR = (cveId) => {
    setSecurityIssues((prev) => prev.filter((item) => item.cve !== cveId));
  };

  // إرجاع واجهة استوديو الأمان
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold">بوابة الأمان ومكافحة الثغرات (DevSecOps Gate)</h3>
          <p className="text-xs text-slate-400 mt-1">تكامل Snyk وDependabot لمنع دمج أي كود يحتوي على ثغرات High أو Critical</p>
        </div>
        <div className="text-right">
          <span className={\`text-xs font-bold px-3 py-1 rounded-full border \${hasCriticalOrHigh ? 'bg-rose-500/10 text-rose-400 border-rose-500/30' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'}\`}>
            {hasCriticalOrHigh ? '⛔ بوابة النشر محظورة' : '✅ آمن للنشر في الإنتاج'}
          </span>
        </div>
      </div>

      {/* قائمة التنبيهات الأمنية */}
      <div className="space-y-3 mb-6">
        {securityIssues.length === 0 ? (
          <div className="p-8 text-center bg-slate-950 rounded-xl border border-slate-800">
            <span className="text-3xl block mb-2">🎉</span>
            <p className="text-sm font-bold text-emerald-400">سجل الاعتماديات نظيف تماماً!</p>
            <p className="text-xs text-slate-500 mt-1">تم إغلاق ومعالجة كافة الثغرات؛ مشروعك متوافق مع معايير SOC2.</p>
          </div>
        ) : (
          securityIssues.map((issue) => (
            <div key={issue.cve} className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-200 text-sm">{issue.package}</span>
                    <span className="text-xs font-mono text-slate-500">({issue.cve})</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{issue.summary}</p>
                </div>
                <span className={\`text-[10px] font-bold px-2 py-0.5 rounded uppercase \${SEVERITY_LEVELS[issue.severity].badge}\`}>
                  {issue.severity}
                </span>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-slate-800/80 mt-3 text-xs">
                <span className="font-mono text-slate-400">
                  الترقية المقترحة: <span className="text-rose-400 line-through">{issue.installedVersion}</span> &rarr;{' '}
                  <span className="text-emerald-400 font-bold">{issue.fixedVersion}</span>
                </span>
                <button 
                  onClick={() => resolveSecurityPR(issue.cve)}
                  className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 font-bold rounded-lg text-white transition text-xs shadow"
                >
                  دمج ترقية Dependabot
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* نصيحة الأمان */}
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
        💡 <strong className="text-slate-300">أفضل ممارسة في CI/CD:</strong> قم بإضافة فحص <code className="text-indigo-300">npm audit --audit-level=high</code> كخطوة إلزامية في GitHub Actions تفشل مسار البناء فوراً إذا تم اكتشاف أي ثغرة خطيرة.
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية تطبيق بوابات الحماية الأمنية (DevSecOps Security Gates) في مشاريع React؛ حيث يتم تصنيف الثغرات وفق خطورتها، وحظر عملية النشر التلقائي فور اكتشاف ثغرات بمستوى High أو Critical حتى يتم تطبيق ترقيات الإصلاح التلقائية من خلال أدوات مثل Snyk أو Dependabot.",
      commonMistakes: [
        {
          mistake: "تشغيل أمر npm audit fix --force بشكل أعمى ودون مراجعة يدوية دقيقة.",
          why: "خيار --force يقوم بترقية الحزم عبر قفزات رئيسية (Breaking Major Changes) لإصلاح الثغرة، مما يكسر أجزاء حيوية من كود تطبيقك ويتسبب في أعطال صامتة في الإنتاج.",
          fix: "استخدم npm audit fix العادي أولاً للتحديثات المتوافقة؛ وإذا بقيت ثغرة تتطلب --force، اختبرها في فرع منفصل وراجع التغييرات الجذرية بدقة."
        },
        {
          mistake: "تجاهل تنبيهات Dependabot في GitHub وتراكم عشرات الـ Pull Requests الأمنية المفتوحة دون دمجها.",
          why: "تراكم التنبيهات يترك تطبيقك مكشوفاً للثغرات العلنية المعروفة للمخترقين، ويزيد من صعوبة دمجها لاحقاً بسبب تعارضات ملفات القفل.",
          fix: "خصص وقتاً أسبوعياً (مثلاً صباح كل يوم إثنين) لمراجعة ودمج طلبات سحب Dependabot بعد تأكدك من اجتياز اختبارات الـ CI."
        }
      ],
      bestPractices: [
        "أنشئ ملف .github/dependabot.yml في مستودعك لتفعيل الفحص الدوري الأسبوعي للاعتماديات تلقائياً.",
        "استخدم ميزة overrides في ملف package.json لفرض إصدار محصن لحزمة فرعية عميقة (Transitive Dependency) دون انتظار تحديث الحزمة الأصلية.",
        "اربط أداة Snyk أو GitHub Advanced Security لفحص الشفرة المصدرية أيضاً وليس حزم npm فقط.",
        "احرص على ألا تتجاوز مدة معالجة الثغرات الحرجة (Critical Vulnerabilities) أكثر من 24 إلى 48 ساعة من تاريخ اكتشافها."
      ],
      visualInfographic: {
        title: "دورة حياة الفحص الأمني المؤتمت (DevSecOps)",
        description: "كيف يتم اكتشاف الثغرات ومعالجتها تلقائياً في خطوط الإنتاج الحديثة",
        visualSteps: [
          "اكتشاف الثغرة 🕵️ (إدراج الثغرة الجديدة في قاعدة بيانات CVE العالمية)",
          "المسح الآلي المستمر 🤖 (Dependabot / Snyk يفحص شجرة package-lock.json)",
          "توليد طلب السحب المؤتمت 📝 (إنشاء Security PR مع ترقية الإصدار المحصن)",
          "اختبارات الـ CI التلقائية 🧪 (التحقق من عدم انكسار وظائف React)",
          "الدمج والحصانة الفورية 🛡️ (إغلاق الثغرة ونشر النسخة المحمية في الإنتاج)"
        ]
      }
    },
    {
      id: "29.3.d",
      title: "إزالة الحزم غير المستخدمة واكتشاف التبعيات الميتة (depcheck)",
      englishTerm: {
        term: "Unused Dependencies & Dead Code Pruning",
        pronunciation: "أن يوزد ديبندنسيز آند ديد كود برونينغ",
        meaning: "تنظيف الحزم الميتة واكتشاف الاعتماديات المهملة في المشروع"
      },
      description: "مع نمو تطبيق React على مدار شهور وسنوات ومشاركة العديد من المطورين، تتراكم عشرات المكتبات داخل ملف package.json التي تم تثبيتها في الماضي لتجربة ميزة معينة أو لحل مشكلة تم استبدالها لاحقاً، ولكن لم يتذكر أحد إزالتها. تُعرف هذه بالحزم المهملة أو التبعيات الميتة (Dead / Ghost Dependencies). تعمل أدوات التحليل الثابت مثل depcheck على إجراء مسح شامل لكامل ملفات الشفرة المصدرية في المشروع ومقارنة عبارات الاستيراد الفعلية (import / require) مع قائمة الحزم المسجلة في package.json، لتكشف بدقة عن الحزم غير المستخدمة تماماً، وكذلك الحزم المستخدمة في الكود ولكنها غير مسجلة في ملف الحزم (Missing Dependencies).",
      realWorldAnalogy: "يشبه تراكم الحزم غير المستخدمة تراكم الأثاث القديم والكراتين الفارغة في مخزن منزلك؛ لم تعد تستخدمها منذ سنوات ولكنها لا تزال تشغل مساحة، تجمع الغبار، وتزيد من صعوبة تنظيف وترتيب المكان عند الرغبة في الانتقال أو التجديد.",
      whyItMatters: "تتسبب الحزم غير المستخدمة في تضخيم مجلد node_modules، وإبطاء زمن التثبيت في مسارات الـ CI/CD، وزيادة احتمالية الإصابة بالثغرات الأمنية دون أي فائدة، وتضليل المطورين الجدد الذين يعتقدون أن هذه المكتبات قيد الاستخدام الفعلي. تنظيف هذه التبعيات يقلل حجم الحزم ويجعل المشروع رشيقاً وواضح المعالم.",
      syntax: "# فحص الحزم غير المستخدمة عبر depcheck بدون تثبيت دائم\nnpx depcheck\n\n# حذف حزمة ميتة تم اكتشافها\nnpm uninstall <package-name>",
      simpleExample: `// استعراض محاكاة فحص واكتشاف الحزم غير المستخدمة في React
import React, { useState } from 'react';

// مكون بسيط لمحاكاة نتائج أداة depcheck
export function DepcheckSimulator() {
  // قائمة الحزم وحالة استخدامها الفعلي في الكود
  const [dependencies, setDependencies] = useState([
    { name: 'lodash', status: 'unused', reason: 'تم استبدالها بدوال JavaScript الحديثة الأصلية' },
    { name: 'moment', status: 'unused', reason: 'تم التحول لاستخدام مكتبة date-fns الأخف وزناً' },
    { name: 'clsx', status: 'used', reason: 'مستخدمة في 42 مكوناً لتنسيق الفئات' },
    { name: 'zod', status: 'used', reason: 'مستخدمة للتحقق من صحة مدخلات النماذج' }
  ]);

  // دالة تنظيف الحزم غير المستخدمة
  const handlePruneUnused = () => {
    // إبقاء الحزم المستخدمة فقط
    setDependencies(prev => prev.filter(d => d.status === 'used'));
  };

  // إرجاع واجهة الفحص
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-md">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-sm">كاشف الحزم الميتة (depcheck)</h3>
        <span className="text-xs text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded font-mono">
          {dependencies.filter(d => d.status === 'unused').length} حزم مهملة
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {dependencies.map((pkg) => (
          <div key={pkg.name} className="p-2 bg-slate-950 rounded border border-slate-800 text-xs">
            <div className="flex justify-between items-center">
              <span className="font-mono font-bold text-slate-200">{pkg.name}</span>
              <span className={\`text-[10px] px-2 py-0.5 rounded font-bold \${pkg.status === 'unused' ? 'bg-rose-500/20 text-rose-400' : 'bg-emerald-500/20 text-emerald-400'}\`}>
                {pkg.status === 'unused' ? 'غير مستخدمة' : 'قيد الاستخدام'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">{pkg.reason}</p>
          </div>
        ))}
      </div>

      <button 
        onClick={handlePruneUnused}
        className="w-full py-2 bg-rose-600 hover:bg-rose-500 text-xs font-bold rounded-lg transition"
      >
        تنظيف وحذف الحزم غير المستخدمة فوراً
      </button>
    </div>
  );
}`,
      advancedExample: `// أداة متطورة لتحليل الاعتماديات واكتشاف الحزم الميتة والناقصة وتوفير مساحات البناء
import React, { useState } from 'react';

// فئة محاكاة محلل depcheck الشامل
class ProjectDependencyAuditor {
  // فحص حزم المشروع وتصنيفها
  static auditDependencies(rawPackages) {
    const unused = rawPackages.filter(p => !p.hasImport);
    const missing = rawPackages.filter(p => p.hasImport && !p.isInstalled);
    const totalWastedKb = unused.reduce((acc, curr) => acc + curr.sizeKb, 0);

    return { unused, missing, totalWastedKb };
  }
}

// مكون استوديو تنظيف الحزم المتقدم
export function DepcheckPruningStudio() {
  // قائمة الحزم المسجلة والتحليل المصدري لها
  const [packageInventory, setPackageInventory] = useState([
    { name: 'moment', sizeKb: 280, hasImport: false, isInstalled: true },
    { name: 'jquery', sizeKb: 85, hasImport: false, isInstalled: true },
    { name: 'canvas-confetti', sizeKb: 30, hasImport: false, isInstalled: true },
    { name: 'lucide-react', sizeKb: 65, hasImport: true, isInstalled: true },
    { name: 'tailwind-merge', sizeKb: 15, hasImport: true, isInstalled: true }
  ]);

  // تشغيل التحليل
  const auditReport = ProjectDependencyAuditor.auditDependencies(packageInventory);

  // إزالة حزمة محددة
  const removePackage = (name) => {
    setPackageInventory(prev => prev.filter(p => p.name !== name));
  };

  // إزالة جميع الحزم الميتة دفعة واحدة
  const removeAllUnused = () => {
    setPackageInventory(prev => prev.filter(p => p.hasImport));
  };

  // إرجاع واجهة استوديو التنظيف
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold">استوديو تنظيف التبعيات الميتة (depcheck Studio)</h3>
          <p className="text-xs text-slate-400 mt-1">اكتشاف الحزم المسجلة في package.json والتي لا يوجد لها أي استيراد في كود المشروع</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-black text-rose-400 font-mono">
            {auditReport.totalWastedKb} KB
          </span>
          <span className="block text-[10px] text-slate-400 font-semibold">مساحة مهدرة يمكن توفيرها</span>
        </div>
      </div>

      {/* قائمة الحزم غير المستخدمة */}
      <div className="space-y-3 mb-6">
        {auditReport.unused.length === 0 ? (
          <div className="p-6 text-center bg-slate-950 rounded-xl border border-slate-800">
            <span className="text-3xl block mb-2">✨</span>
            <p className="text-sm font-bold text-emerald-400">مشروعك رشيق ونظيف تماماً!</p>
            <p className="text-xs text-slate-500 mt-1">لا توجد أي حزم ميتة أو غير مستخدمة داخل package.json.</p>
          </div>
        ) : (
          auditReport.unused.map((pkg) => (
            <div key={pkg.name} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-sm text-slate-200">{pkg.name}</span>
                  <span className="text-xs text-slate-500 font-mono">({pkg.sizeKb} KB)</span>
                </div>
                <p className="text-xs text-rose-400 mt-1">⚠️ تم العثور عليها في package.json لكن لا يوجد أي import لها في الكود.</p>
              </div>
              <button 
                onClick={() => removePackage(pkg.name)}
                className="px-3 py-1.5 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-xs font-bold rounded-lg border border-rose-500/30 transition"
              >
                حذف الحزمة
              </button>
            </div>
          ))
        )}
      </div>

      {/* زر التنظيف الجماعي */}
      {auditReport.unused.length > 0 && (
        <div className="flex justify-end">
          <button 
            onClick={removeAllUnused}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-500 font-bold text-xs rounded-xl transition shadow-lg"
          >
            تنظيف وحذف جميع الحزم الميتة ({auditReport.unused.length})
          </button>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "يقدم هذا الاستوديو محاكاة واقعية لما تنجزه أداة depcheck؛ حيث يفحص نصوص الاستيراد في المشروع، ويكتشف الحزم المهملة التي تستهلك مساحات القرص وتبطيء التثبيت، ويحسب إجمالي المساحة الضائعة ويوفر آلية سهلة لحذفها وتطهير package.json.",
      commonMistakes: [
        {
          mistake: "حذف أدوات التكوين مثل Tailwind CSS أو PostCSS أو Prettier بمجرد أن depcheck صنفها كحزم غير مستخدمة.",
          why: "أدوات التكوين يتم استدعاؤها عبر ملفات الضبط (مثل tailwind.config.js) أو سطر الأوامر دون كتابة import داخل ملفات .jsx، لذلك قد يعتبرها depcheck غير مستخدمة خطأً.",
          fix: "استخدم ملف تكوين .depcheckrc واستثني الحزم المساعدة عبر خيار 'ignores': ['prettier', 'autoprefixer', 'eslint-*']."
        },
        {
          mistake: "استخدام حزم في الكود (مثل lodash) دون تسجيلها في package.json والاعتماد على وجودها صدفة كحزمة تابعة لمكتبة أخرى.",
          why: "تسمى هذه بالحزم الشبحية (Phantom / Missing Dependencies)؛ وإذا قامت المكتبة الأم بتحديث نفسها وحذف تلك التبعية، سينهار كود تطبيقك فوراً.",
          fix: "أي حزمة تستوردها صراحة في الكود يجب أن تثبتها بنفسك: npm install <package> لضمان وجودها المستقل."
        }
      ],
      bestPractices: [
        "شغّل أداة npx depcheck كل نهاية شهر كجزء من روتين النظافة الهندسية للمشروع.",
        "احرص على مراجعة قسم devDependencies وفصل حزم التطوير عن حزم التشغيل الأساسية dependencies.",
        "استخدم ميزة Bundle Analyzer لفحص أثر الحزم المتبقية على الحجم النهائي لملفات الجافاسكريبت.",
        "وثق سبب وجود الحزم الغريبة أو المكتبات المؤقتة في وثيقة README لتفادي الحيرة مستقبلاً."
      ],
      visualInfographic: {
        title: "آلية فحص وتطهير التبعيات الميتة (depcheck)",
        description: "كيف يتم اكتشاف الحزم المهملة والناقصة في مشاريع React",
        visualSteps: [
          "مسح كود المصدر 🔍 (استخراج جميع جمل import وrequire في ملفات التطبيق)",
          "قراءة ملف package.json 📋 (حصر كافة التبعيات المسجلة رسمياً)",
          "المطابقة والتقاطع ⚖️ (مقارنة ما هو مستورد فعلياً بما هو مسجل في القائمة)",
          "عزل الحزم المهملة 🗑️ (تحديد التبعيات الميتة وحساب المساحة المهدرة)",
          "تنظيف package.json 🧼 (إلغاء تثبيت الحزم وحفظ ملف قفل رشيق وسريع)"
        ]
      }
    },
    {
      id: "29.3.e",
      title: "متابعة ومراجعة التغييرات الجذرية (Breaking Changes)",
      englishTerm: {
        term: "Breaking Changes Management",
        pronunciation: "بريكينغ تشينجيز مانيجمنت",
        meaning: "متابعة ومراجعة التغييرات الجذرية التي تعطل التوافقية السابقة"
      },
      description: "التغييرات الجذرية (Breaking Changes) هي التعديلات البرمجية التي تطرأ على إصدار رئيسي جديد لمكتبة ما (مثل الانتقال من React 18 إلى React 19) وتتضمن حذف دوال سابقة (Deprecations)، أو تعديل في وسائط ومعاملات الدوال والخطافات، أو تغيير في سلوك المعالجة الافتراضي، مما يعني أن الكود القديم سيتوقف عن العمل أو سيعطي نتائج خاطئة إذا لم تتم مراجعته وتعديله. تتضمن الإدارة الاحترافية للتغييرات الجذرية دراسة وثائق الترقية الرسمية (Upgrade Guides)، مراجعة سجلات التغيير (Changelogs)، إعداد استراتيجية ترقية متدرجة، وإنشاء بيئة معزولة لتجربة الكود والتأكد من مطابقة جميع المكونات للمواصفات الجديدة قبل إطلاقها للمستخدمين.",
      realWorldAnalogy: "يشبه التعامل مع التغييرات الجذرية تغيير معايير مقابس الكهرباء في بلد كامل؛ لا يمكنك فجأة إجبار المواطنين على رمي جميع أجهزتهم الكهربائية؛ بل يتم الإعلان عن المعيار الجديد مسبقاً، وتوفير محولات مؤقتة (Adapters)، ومنح مهلة زمنية كافية للجميع لاستبدال الأجهزة القديمة بأخرى حديثة ومتوافقة.",
      whyItMatters: "تجاهل دراسة التغييرات الجذرية قبل الترقية هو السبب الأول لفشل ترقيات المشاريع الضخمة وانهيار بيئات الإنتاج. الفهم المسبق للتغييرات يوفر أسابيع من التخبط ويمنح الفريق خريطة طريق واضحة للمكونات التي تحتاج إلى تعديل، مما يضمن ترقية سلسة دون أي مفاجآت غير سارة.",
      syntax: "// مثال على تغيير جذري شهير: إلغاء دعم كائن ref المباشر واستبداله بتمريره كخاصية عادية\n// القديم (React 18 وما قبل):\nconst Input = forwardRef((props, ref) => <input ref={ref} {...props} />);\n// الحديث (React 19):\nfunction Input({ ref, ...props }) { return <input ref={ref} {...props} />; }",
      simpleExample: `// استعراض محاكاة التعامل مع تغيير جذري شهير في واجهات React
import React, { useState } from 'react';

// مكون يعرض التغيير الجذري بين نسختين من React
export function BreakingChangeCard() {
  // حالة لاختيار وضع المقارنة
  const [version, setVersion] = useState('react19');

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-md">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-sm">تغيير جذري: تمرير ref في المكونات</h3>
        <div className="flex gap-1">
          <button 
            onClick={() => setVersion('react18')}
            className={\`px-2 py-0.5 text-xs rounded font-mono \${version === 'react18' ? 'bg-amber-500 text-black font-bold' : 'bg-slate-800'}\`}
          >
            React 18
          </button>
          <button 
            onClick={() => setVersion('react19')}
            className={\`px-2 py-0.5 text-xs rounded font-mono \${version === 'react19' ? 'bg-emerald-500 text-black font-bold' : 'bg-slate-800'}\`}
          >
            React 19
          </button>
        </div>
      </div>

      {version === 'react18' ? (
        <div className="p-3 bg-slate-950 rounded border border-amber-500/30 text-xs font-mono">
          <p className="text-amber-400 mb-1">// أسلوب React 18 القديم (إلزامي استخدام forwardRef):</p>
          <pre className="text-slate-300">
{\`const MyInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));\`}
          </pre>
        </div>
      ) : (
        <div className="p-3 bg-slate-950 rounded border border-emerald-500/30 text-xs font-mono">
          <p className="text-emerald-400 mb-1">// أسلوب React 19 الحديث (تمرير ref كـ prop عادي دون forwardRef!):</p>
          <pre className="text-slate-300">
{\`function MyInput({ ref, ...props }) {
  return <input ref={ref} {...props} />;
}\`}
          </pre>
        </div>
      )}
    </div>
  );
}`,
      advancedExample: `// لوحة تفاعلية لإدارة خطة الترقية ومراجعة التغييرات الجذرية في React 19 (Migration Playbook)
import React, { useState } from 'react';

// قائمة التغييرات الجذرية الرئيسية في React 19 ومسار معالجتها
const REACT_19_BREAKING_CHANGES = [
  {
    id: 'bc-1',
    feature: 'إلغاء forwardRef',
    impact: 'عالي',
    description: 'أصبح بالإمكان تمرير ref كخاصية عادية (prop) لجميع مكونات الدوال مباشرة.',
    actionRequired: 'إزالة استخدام forwardRef تدريجياً واستقبال ref في معلمات المكون.',
    status: 'COMPLETED'
  },
  {
    id: 'bc-2',
    feature: 'استبدال useMemo في حسابات الواجهة بـ React Compiler',
    impact: 'متوسط',
    description: 'المترجم الجديد يقوم بتحسين الحفظ المؤقت تلقائياً دون الحاجة لكتابة useMemo وuseCallback يدوياً.',
    actionRequired: 'تفعيل خيار React Compiler وفحص المكونات التي تعتمد على مساواة مرجعية صارمة.',
    status: 'IN_PROGRESS'
  },
  {
    id: 'bc-3',
    feature: 'إلغاء useMemo / useEffect لجلب البيانات لصالح use() Hook',
    impact: 'عالي',
    description: 'خطاف use() يتيح قراءة الـ Promises وسياقات React بشكل شرطي ومباشر في سياق العرض.',
    actionRequired: 'تحديث آليات جلب البيانات القديمة لدعم Suspense وuse().',
    status: 'PENDING'
  }
];

// مكون استوديو متابعة خطة معالجة التغييرات الجذرية
export function BreakingChangesPlanner() {
  // حالة عناصر الترقية
  const [tasks, setTasks] = useState(REACT_19_BREAKING_CHANGES);

  // تحديث حالة المهمة
  const toggleTaskStatus = (id) => {
    setTasks(prev =>
      prev.map(task => {
        if (task.id === id) {
          const nextStatus = task.status === 'COMPLETED' ? 'IN_PROGRESS' : task.status === 'IN_PROGRESS' ? 'PENDING' : 'COMPLETED';
          return { ...task, status: nextStatus };
        }
        return task;
      })
    );
  };

  // إرجاع واجهة المخطط
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold">خطة مراجعة التغييرات الجذرية (Breaking Changes Playbook)</h3>
          <p className="text-xs text-slate-400 mt-1">تتبع التغييرات المعمارية لترقية React 19 وضمان استقرار المكونات</p>
        </div>
        <span className="text-xs font-mono bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">
          React 19 Migration
        </span>
      </div>

      {/* قائمة التغييرات */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="p-4 bg-slate-950 rounded-xl border border-slate-800">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="font-bold text-sm text-slate-200 block">{task.feature}</span>
                <span className="text-xs text-slate-400 mt-1 block">{task.description}</span>
              </div>
              <span className={\`text-[10px] font-bold px-2 py-0.5 rounded font-mono \${task.impact === 'عالي' ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-500/20 text-amber-400'}\`}>
                أثر: {task.impact}
              </span>
            </div>

            <div className="p-2.5 bg-slate-900/60 rounded-lg text-xs text-indigo-300 font-mono mt-3 border border-slate-800">
              🛠️ الإجراء المطلوب: {task.actionRequired}
            </div>

            <div className="flex justify-between items-center mt-3 pt-2 border-t border-slate-800/80">
              <span className="text-xs text-slate-500">حالة التحديث المعماري:</span>
              <button 
                onClick={() => toggleTaskStatus(task.id)}
                className={\`px-3 py-1 rounded-lg text-xs font-bold transition \${task.status === 'COMPLETED' ? 'bg-emerald-600 text-white' : task.status === 'IN_PROGRESS' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
              >
                {task.status === 'COMPLETED' ? 'تم الإنجاز (Done)' : task.status === 'IN_PROGRESS' ? 'قيد التنفيذ (In Progress)' : 'معلق (Pending)'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "تستعرض هذه الشاشة نموذجاً عملياً لإدارة ومتابعة التغييرات الجذرية المصاحبة لترقية React 19؛ حيث توثق كل ميزة طرأ عليها تغيير جذري، وتقيم مستوى أثرها، وتحدد الإجراء البرمجي المطلوب مع تتبع تقدم الفريق في تكييف الكود مع المعايير الأحدث.",
      commonMistakes: [
        {
          mistake: "محاولة إعادة كتابة وتعديل كل المكونات دفعة واحدة للتوافق مع الإصدار الجديد في فرع التطوير الرئيسي.",
          why: "هذا الأسلوب يجمد عمل باقي الفريق لأسابيع ويزيد من مخاطر ظهور تعارضات دمج هائلة (Merge Conflicts) مع الميزات الجاري تطويرها.",
          fix: "استخدم نهج الترقية التراكمية (Strangler Pattern)؛ وقم بترقية المكونات تدريجياً عبر فروع مخصصة ومدمجة بانتظام."
        },
        {
          mistake: "الاعتماد فقط على نجاح عملية البناء (Build Success) كدليل وحيد على عدم وجود مشاكل ناتجة عن التغييرات الجذرية.",
          why: "كثير من التغييرات الجذرية تؤثر على السلوك أثناء التشغيل (Runtime Behavior) ولا تمنع نجاح عملية التجميع TypeScript أو Vite.",
          fix: "شغّل اختبارات التكامل والنهاية إلى النهاية (Cypress / Playwright) وقم بإجراء فحص يدوي دقيق للشاشات الحيوية قبل الإطلاق."
        }
      ],
      bestPractices: [
        "اقرأ دليل الترقية الرسمي للمكتبة (Migration Guide) كلمة بكلمة ودوّن التغييرات التي تمس مشروعك.",
        "فعّل دائماً نمط React StrictMode في بيئة التطوير؛ فهو مصمم خصيصاً لتحذيرك من استخدام أي دوال أو أنماط مهددة بالحذف مستقبلاً.",
        "استخدم أدوات الفحص الثابت (ESLint Plugins) المخصصة للإصدار الجديد لتنبيه المطورين بالكود القديم تلقائياً.",
        "قم بعمل اختبار مرئي (Visual Regression Testing) لضمان عدم تأثر تنسيقات الواجهة بالتغييرات الجذرية."
      ],
      visualInfographic: {
        title: "استراتيجية إدارة التغييرات الجذرية (Breaking Changes)",
        description: "الخطوات الأربع لاحتواء التغييرات الكبرى والانتقال الآمن بين الإصدارات",
        visualSteps: [
          "دراسة دليل الترقية 📖 (فهم وحصر التغييرات والتحذيرات الرسمية Deprecations)",
          "تقييم الأثر التقني 📊 (حصر المكونات المتأثرة وتقدير الوقت والجهد)",
          "الترقية في فرع معزول 🧪 (إجراء التعديلات وتحديث كود الدوال القديمة)",
          "تشغيل الاختبارات الشاملة 🚀 (E2E & Integration Tests للتأكد من سلامة السلوك)",
          "الإطلاق والمراقبة الحية 📈 (نشر تدريجي مع رصد Sentry لاكتشاف أي مفاجآت)"
        ]
      }
    },
    {
      id: "29.3.f",
      title: "استخدام Codemods عند الترقية (jscodeshift & React Codemods)",
      englishTerm: {
        term: "Automated Codemods & AST Migrations",
        pronunciation: "أوتوميتد كودمودز آند إيه إس تي مايجريشنز",
        meaning: "التحويل البرمجي التلقائي للكود عبر شجرة القواعد النحوية المجردة"
      },
      description: "عندما تطلق فرق تطوير المكتبات الكبرى مثل فريق React أو Next.js إصداراً جديداً يتضمن تغييرات جذرية تؤثر على آلاف الملفات في مشروعك، فإن تعديل هذه الملفات يدوياً واحداً تلو الآخر يعتبر عملاً مرهقاً للغاية وعرضة للأخطاء البشرية. هنا تأتي قوة Codemods؛ وهي برامج وأدوات نصية فائقة الذكاء (تعتمد على مكتبات مثل jscodeshift) تقوم بقراءة الكود المصدري لمشروعك، تحليله وتحويله إلى شجرة قواعد نحوية مجردة (Abstract Syntax Tree - AST)، ثم إجراء التعديلات وإعادة كتابة الكود المصدري وفق أحدث المعايير البرمجية الجديدة خلال ثوانٍ معدودة وبدقة متناهية ودون المساس بتنسيقات الكود الأصلية.",
      realWorldAnalogy: "يشبه استخدام Codemods ميزة 'البحث والاستبدال الذكي' في محررات النصوص ولكن مع عقل مهندس برمجيات خارق؛ فهو لا يستبدل الكلمات حرفياً كآلة عمياء، بل يفهم سياق الجملة وقواعد اللغة؛ فيعرف أن الكلمة هنا هي اسم متغير وليست نصاً عادياً، ويقوم بتعديلها بدقة نحوية تامة.",
      whyItMatters: "تختصر Codemods أشهراً من العمل اليدوي الرتيب إلى دقائق معدودة؛ فبدلاً من تكليف 5 مهندسين بتعديل 1000 مكون يدpipeياً لإلغاء forwardRef أو تحديث واجهات Hooks، يقوم أمر Codemod واحد بتنفيذ التعديل عبر كامل المشروع بدقة رياضية مذهلة، مما يمنح الفريق وقتاً للتركيز على منطق الأعمال الأساسي.",
      syntax: "# تشغيل أداة ترقية React الرسمية عبر npx\nnpx @react/codemod <transform-name> <path>\n\n# مثال: تحويل مكونات forwardRef إلى دوال عادية في مجلد المكونات\nnpx @react/codemod ref-as-prop src/components",
      simpleExample: `// استعراض محاكاة تحويل كود React القديم إلى الحديث بواسطة Codemod
import React, { useState } from 'react';

// مكون يعرض عملية التحويل التلقائي للكود بواسطة Codemod
export function CodemodTransformDemo() {
  // حالة عرض الكود: قبل أو بعد
  const [isTransformed, setIsTransformed] = useState(false);

  // الكود القديم
  const oldCode = \`// قبل تشغيل Codemod (أسلوب قديم):
import { forwardRef } from 'react';

export const CustomButton = forwardRef((props, ref) => {
  return <button ref={ref} {...props} />;
});\`;

  // الكود بعد التحويل التلقائي
  const newCode = \`// بعد تشغيل Codemod (محدث لـ React 19 تلقائياً):
export function CustomButton({ ref, ...props }) {
  return <button ref={ref} {...props} />;
}\`;

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-md">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-sm">محاكاة التحويل الآلي (Codemod)</h3>
        <button 
          onClick={() => setIsTransformed(!isTransformed)}
          className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-xs font-bold rounded-lg transition"
        >
          {isTransformed ? 'عرض الكود الأصلي' : 'تشغيل npx @react/codemod'}
        </button>
      </div>

      <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs">
        <pre className={isTransformed ? 'text-emerald-400' : 'text-slate-300'}>
          {isTransformed ? newCode : oldCode}
        </pre>
      </div>
      <p className="text-[11px] text-slate-400 mt-2">
        {isTransformed ? '✅ تم تحديث الشجرة النحوية بنجاح وبدون أي أخطاء يدوية!' : 'اضغط الزر لتشغيل التحويل الآلي.'}
      </p>
    </div>
  );
}`,
      advancedExample: `// استوديو محاكاة محرك jscodeshift وتحليل شجرة AST للتحويل البرمجي الآلي
import React, { useState } from 'react';

// فئة محاكاة عمل محرك تحويل شجرة القواعد النحوية المجردة (AST Engine)
class ASTCodemodEngine {
  // دالة تحويل نصوص استيراد React القديمة إلى الصيغة الحديثة
  static transformPropTypesToTypes(sourceCode) {
    let transformed = sourceCode;
    // استبدال تعريف PropTypes واستيراده
    transformed = transformed.replace(/import PropTypes from 'prop-types';?\\n?/g, '');
    transformed = transformed.replace(/\\w+\\.propTypes = \\{[^}]+\\};?\\n?/g, '// [Codemod]: تم استبدال PropTypes بتعريفات TypeScript تلقائياً.\\n');
    return transformed;
  }
}

// مكون استوديو تشغيل الـ Codemods في المشاريع الضخمة
export function CodemodStudio() {
  // كود الإدخال الأصلي
  const [sourceInput, setSourceInput] = useState(
\`import React from 'react';
import PropTypes from 'prop-types';

export function UserBadge({ name, role }) {
  return <div className="badge">{name} - {role}</div>;
}

UserBadge.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string
};\`);

  // كود المخرجات بعد التحويل
  const [outputResult, setOutputResult] = useState('');
  // إحصائية الملفات المحولة
  const [stats, setStats] = useState(null);

  // تشغيل المحول البرمجي
  const runCodemod = () => {
    const result = ASTCodemodEngine.transformPropTypesToTypes(sourceInput);
    setOutputResult(result);
    setStats({ filesScanned: 142, filesModified: 38, executionTimeMs: 420 });
  };

  // إرجاع واجهة الاستوديو
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold">محرك التحويل البرمجي الآلي (jscodeshift AST Runner)</h3>
          <p className="text-xs text-slate-400 mt-1">تعديل آلاف الملفات وإعادة صياغة الكود عبر شجرة القواعد النحوية المجردة</p>
        </div>
        <span className="text-xs font-mono bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">
          AST Powered
        </span>
      </div>

      {/* لوحة المقارنة */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <span className="text-xs font-semibold text-slate-400 block mb-2">الكود قبل التحويل (Legacy Source):</span>
          <textarea 
            value={sourceInput}
            onChange={(e) => setSourceInput(e.target.value)}
            rows={10}
            className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-400 block mb-2">الكود بعد التحويل التلقائي (AST Transformed):</span>
          <textarea 
            value={outputResult || 'اضغط زر تشغيل التحويل لاستعراض النتيجة...'}
            readOnly
            rows={10}
            className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-emerald-400 focus:outline-none"
          />
        </div>
      </div>

      {/* تفاصيل الإحصائيات بعد التشغيل */}
      {stats && (
        <div className="grid grid-cols-3 gap-3 mb-6 p-3 bg-slate-950 rounded-xl border border-slate-800 text-center">
          <div>
            <span className="text-[11px] text-slate-500 block">الملفات المفحوصة</span>
            <span className="text-sm font-bold font-mono text-white">{stats.filesScanned} ملف</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 block">الملفات المعدلة تلقائياً</span>
            <span className="text-sm font-bold font-mono text-emerald-400">{stats.filesModified} ملف</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 block">زمن التحويل الإجمالي</span>
            <span className="text-sm font-bold font-mono text-cyan-400">{stats.executionTimeMs} ms</span>
          </div>
        </div>
      )}

      {/* زر التشغيل */}
      <button 
        onClick={runCodemod}
        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl transition shadow-lg"
      >
        تنفيذ تحويل الـ AST عبر كامل شجرة المشروع
      </button>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال المعماري كيف تعمل أدوات Codemod ومكتبة jscodeshift على التعديل التلقائي لملفات الكود المصدري؛ حيث تحلل الشجرة النحوية وتنفذ عمليات التحويل المعقدة (مثل إزالة التبعيات القديمة وتحديث صيغ المكونات) في أجزاء من الثانية مع الحفاظ على سلامة الكود.",
      commonMistakes: [
        {
          mistake: "تشغيل أمر Codemod على مستودع Git يحتوي على تعديلات غير محفوظة (Uncommitted Changes).",
          why: "يقوم الـ Codemod بتعديل مئات الملفات دفعة واحدة؛ وإذا لم تكن شجرة Git نظيفة تماماً، فلن تتمكن من معرفة الفارق أو التراجع عن التعديل إذا حدث خطأ ما.",
          fix: "تأكد دائماً أن git status نظيف تماماً وأنك تعمل في فرع جديد مخصص للترقية قبل تشغيل أي أداة Codemod."
        },
        {
          mistake: "عدم تشغيل أدوات التنسيق (Prettier & ESLint) بعد تشغيل الـ Codemod.",
          why: "أحياناً يترك التحويل الآلي مسافات فارغة غير متناسقة أو فواصل منقوطة زائدة في بعض الأسطر المعدلة.",
          fix: "شغّل دائماً npm run format أو npx prettier --write . فور الانتهاء من التحويل الآلي لإعادة ضبط التنسيق."
        }
      ],
      bestPractices: [
        "راجع دائماً git diff بعناية فائقة لعدة ملفات نموذجية بعد تشغيل Codemod للتأكد من دقة التحويل.",
        "استخدم أدوات Codemods الرسمية الصادرة من فريق تطوير React أو Next.js وتجنب السكربتات المجهولة.",
        "شغّل مجموعة الاختبارات الآلية (Test Suite) فور انتهاء التحويل للتأكد من سلامة منطق التطبيق.",
        "قسّم عملية الترقية: شغّل كل أداة تحويل منفردة في commit مستقل لتسهيل المراجعة وتتبع التغييرات."
      ],
      visualInfographic: {
        title: "آلية عمل التحويل الآلي للكود (Codemods Architecture)",
        description: "كيف يحول محرك AST الكود المصدري بدقة نحوية فائقة",
        visualSteps: [
          "قراءة الكود المصدري 📄 (تحليل ملفات JavaScript / JSX)",
          "بناء شجرة القواعد النحوية 🌳 (تحويل النصوص إلى Abstract Syntax Tree - AST)",
          "إجراء التحويلات البرمجية ⚙️ (تعديل العقد النحوية واستبدال الأنماط القديمة)",
          "إعادة توليد الكود النظيف ✍️ (كتابة الكود الجديد مع الحفاظ على التنسيق)",
          "تنسيق وحفظ التعديلات 🚀 (تشغيل Prettier وحفظ الـ Commit في Git)"
        ]
      }
    },
    {
      id: "29.3.g",
      title: "إدارة وتقليص الديون التقنية (Technical Debt Management)",
      englishTerm: {
        term: "Technical Debt & Refactoring",
        pronunciation: "تيكنيكالف ديت آند ريفاكتورينغ",
        meaning: "إدارة الديون التقنية وإعادة الهيكلة لضمان استدامة الكود"
      },
      description: "الدين التقني (Technical Debt) هو مصطلح مجازي ابتكره رائد البرمجيات Ward Cunningham لوصف التكلفة المستقبلية المتراكمة الناتجة عن اختيار حلول برمجية سريعة وغير متقنة اليوم بدلاً من اعتماد الحلول الهندسية الصحيحة والمستدامة. في مشاريع React، يتراكم الدين التقني في صور متعددة: مكونات ضخمة تحوي آلاف الأسطر، تكرار الكود عبر الشاشات (Copy-Paste)، تجاهل كتابة الاختبارات، استخدام Type Assertions عشوائية في TypeScript (مثل as any)، وتجاهل معالجة الأخطاء. تتضمن الإدارة الفعالة للدين التقني رصد هذه المشكلات وتوثيقها بانتظام، تخصيص نسبة ثابتة من وقت كل دورة تطوير (Sprint) لإعادة الهيكلة (Refactoring)، ومكافحة تدهور جودة الكود البرمجي.",
      realWorldAnalogy: "يشبه الدين التقني القرض المالي ذو الفائدة المتراكمة؛ قد يساعدك الاقتراض في شراء سيارة سريعة اليوم، ولكن إذا لم تسدد الأقساط الشهرية بانتظام، ستتراكم الفوائد المركبة حتى تلتهم كامل راتبك الشهري وتعجز عن شراء حتى طعام يومك؛ كذلك الدين التقني: إذا أهملته، سيصبح إضافة أي زر جديد في React أمراً يستغرق أسابيع بدلاً من دقائق!",
      whyItMatters: "الشركات التي تتجاهل سداد ديونها التقنية تصل في النهاية إلى مرحلة تسمى 'شلل الكود' (Codebase Bankruptcy)؛ حيث يخشى المطورون تعديل أي ملف خوفاً من انهيار الشاشات الأخرى، وتتباطأ وتيرة إطلاق الميزات الجديدة بنسبة 80%، وترتفع معدلات استقالة المبرمجين بسبب الإحباط من العمل في بيئة فوضوية.",
      syntax: "// تخصيص وسم واضح لتوثيق وتتبع الديون التقنية داخل الكود\n// TECH-DEBT(2026-Q1): يحتاج هذا المكون لإعادة هيكلة وفصل منطق الأعمال عن واجهة العرض.\n// التذكرة المرتبطة في Jira: PROJ-1042",
      simpleExample: `// استعراض محاكاة بطاقة تتبع وإدارة الدين التقني في فريق React
import React, { useState } from 'react';

// مكون لوحة متابعة الديون التقنية
export function TechDebtTrackerDemo() {
  // قائمة بنود الدين التقني الحالية
  const [debtItems, setDebtItems] = useState([
    { id: 1, title: 'مكون الدفع متضخم (1400 سطر)', severity: 'high', sprintAllocated: 'Sprint 24' },
    { id: 2, title: 'استخدام any في 35 موضعاً في كود النماذج', severity: 'medium', sprintAllocated: 'Sprint 25' },
    { id: 3, title: 'غياب اختبارات الوحدات لخطاف useAuth', severity: 'high', sprintAllocated: 'Sprint 24' }
  ]);

  // دالة تسديد ومعالجة الدين
  const handlePayDebt = (id) => {
    setDebtItems(prev => prev.filter(item => item.id !== id));
  };

  // إرجاع واجهة التتبع
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-md">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-sm">سجل الديون التقنية (Tech Debt Ledger)</h3>
        <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-mono">
          {debtItems.length} بنود معلقة
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {debtItems.map((item) => (
          <div key={item.id} className="p-2.5 bg-slate-950 rounded border border-slate-800 text-xs flex justify-between items-center">
            <div>
              <p className="font-medium text-slate-200">{item.title}</p>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">مخصص للسداد في: {item.sprintAllocated}</span>
            </div>
            <button 
              onClick={() => handlePayDebt(item.id)}
              className="px-2.5 py-1 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white rounded text-[11px] font-bold transition border border-emerald-500/30"
            >
              تمت المعالجة
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      advancedExample: `// استوديو احترافي لحساب مؤشر الدين التقني ومعدل الفائدة الهندسية (Technical Debt Index)
import React, { useState } from 'react';

// فئة حساب مؤشر صحة الكود والديون التقنية
class TechDebtEngine {
  // حساب مؤشر جودة الكود من 100
  static calculateHealthScore(totalDebtHours, teamVelocity) {
    const ratio = (totalDebtHours / (teamVelocity * 4)) * 100;
    return Math.max(10, Math.round(100 - ratio));
  }
}

// مكون استوديو إدارة الديون التقنية
export function TechDebtStudio() {
  // بنود الدين التقني وساعات العمل المقدرة لمعالجتها
  const [debts, setDebts] = useState([
    { id: 'td-1', category: 'الهيكلة والتصميم', title: 'مكون سلة الشراء يعاني من Prop Drilling مفرط', hours: 16, interestLevel: 'عالي' },
    { id: 'td-2', category: 'الأمان والأنواع', title: 'إزالة 45 استخدام لكلمة any في كود التوثيق', hours: 8, interestLevel: 'متوسط' },
    { id: 'td-3', category: 'الأداء والتخزين', title: 'عدم وجود تفعيل للـ Virtualization في القوائم الطويلة', hours: 12, interestLevel: 'عالي' },
    { id: 'td-4', category: 'الاختبارات', title: 'تغطية اختبارات معالج الدفع أقل من 40%', hours: 20, interestLevel: 'حرج' }
  ]);

  // إجمالي الساعات المطلوبة لسداد الديون
  const totalHours = debts.reduce((sum, d) => sum + d.hours, 0);
  // سرعة الفريق الإنتاجية في الأسبوع
  const teamVelocity = 40; 
  // مؤشر صحة الكود
  const healthScore = TechDebtEngine.calculateHealthScore(totalHours, teamVelocity);

  // دالة تسديد بند دين
  const resolveDebt = (id) => {
    setDebts(prev => prev.filter(d => d.id !== id));
  };

  // إرجاع واجهة الاستوديو
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold">لوحة إدارة وتقليص الديون التقنية (Tech Debt Radar)</h3>
          <p className="text-xs text-slate-400 mt-1">تتبع الوقت المقدر لإعادة الهيكلة ومكافحة تدهور جودة كود React</p>
        </div>
        <div className="text-right">
          <span className={\`text-2xl font-black font-mono \${healthScore > 75 ? 'text-emerald-400' : 'text-amber-400'}\`}>
            {healthScore}/100
          </span>
          <span className="block text-[10px] text-slate-400 font-semibold">مؤشر رشاقة الكود</span>
        </div>
      </div>

      {/* شريط الإجمالي والتوصية الهندسية */}
      <div className="mb-6 p-4 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
        <div>
          <span className="text-xs text-slate-400 block">إجمالي الساعات المطلوبة لإعادة الهيكلة:</span>
          <span className="text-xl font-bold font-mono text-cyan-400">{totalHours} ساعة عمل هندسية</span>
        </div>
        <div className="text-right">
          <span className="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20 font-semibold">
            قاعدة الـ 20%: خصص 8 ساعات أسبوعياً للسداد
          </span>
        </div>
      </div>

      {/* قائمة بنود الدين */}
      <div className="space-y-3">
        {debts.map((item) => (
          <div key={item.id} className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <span className="font-bold text-sm text-slate-200">{item.title}</span>
              </div>
              <div className="text-xs text-slate-500 font-mono mt-1">
                تقدير الجهد: <span className="text-slate-300 font-bold">{item.hours} ساعة</span> | درجة الفائدة:{' '}
                <span className={item.interestLevel === 'حرج' ? 'text-rose-400 font-bold' : 'text-amber-400'}>
                  {item.interestLevel}
                </span>
              </div>
            </div>

            <button 
              onClick={() => resolveDebt(item.id)}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs rounded-lg transition text-white shadow"
            >
              تسديد الدين (Refactor)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية إدارة الديون التقنية بطريقة علمية؛ حيث يتم توثيق المشاكل المعمارية وتصنيفها وتقدير الساعات المطلوبة لعلاجها، وحساب مؤشر صحة الكود الإجمالي، مع تذكير الفريق بتطبيق 'قاعدة الـ 20%' التي تضمن تخصيص خمس وقت كل Sprint لسداد الديون التقنية.",
      commonMistakes: [
        {
          mistake: "إيقاف تطوير الميزات الجديدة بالكامل لمدة 6 أشهر بحجة 'إعادة بناء وتطوير المشروع كاملاً من الصفر' (Full Rewrite).",
          why: "إعادة البناء الكاملة من الصفر تكاد تكون فاشلة دائماً في عالم البرمجيات؛ حيث تستنزف ميزانية الشركة وتؤدي لظهور أخطاء جديدة وتأخر عن المنافسين.",
          fix: "اعتمد دائماً أسلوب إعادة الهيكلة التدريجية المستمرة (Incremental Refactoring) بالتوازي مع تسليم الميزات الجديدة."
        },
        {
          mistake: "كتابة تعليقات TODO وFIXME في الكود دون ربطها بتذاكر عمل رسمية في نظام إدارة المشاريع (مثل Jira أو GitHub Issues).",
          why: "تعليقات TODO المهملة في الكود تتحول إلى مقابر نصوص لا يقرؤها أحد وتتراكم لسنوات دون علاج.",
          fix: "اربط كل تعليق برقم تذكرة محدد: // TODO(PROJ-123) وناقش إدراجه في خطة السبرنت القادم مع مدير المنتج."
        }
      ],
      bestPractices: [
        "طبّق 'قاعدة الكشافة' (Boy Scout Rule): اترك الملف البرمجي دائماً أنظف مما وجدته عند دخوله.",
        "اتفق مع إدارة المنتج على تخصيص ما بين 15% إلى 20% من وقت كل دورة Sprint لمعالجة الديون التقنية والبنية التحتية.",
        "قس حجم الدين التقني عبر أدوات الفحص الثابت مثل SonarQube لاكتشاف التعقيد الدوري (Cyclomatic Complexity).",
        "احرص على كتابة اختبارات تغطي السلوك الحالي للمكون القديم قبل الشروع في إعادة هيكلته لضمان عدم كسر أي وظيفة."
      ],
      visualInfographic: {
        title: "دورة إدارة وتصفية الديون التقنية (Tech Debt Management)",
        description: "كيف تحافظ على رشاقة وسرعة تطبيق React على المدى الطويل",
        visualSteps: [
          "رصد وتوثيق الدين 📝 (تسجيل المشاكل المعمارية وحساب الجهد المطلوب)",
          "تخصيص ميزانية السبرنت ⏱️ (تطبيق قاعدة الـ 20% الهندسية في التخطيط)",
          "كتابة اختبارات الأمان 🛡️ (تأمين السلوك الحالي باختبارات قبل التعديل)",
          "إعادة الهيكلة الجراحية ✂️ (تفكيك الكود المتضخم وتبسيط العلاقات)",
          "تأكيد النزاهة 🏆 (رفع مؤشر صحة الكود والاحتفال برشاقة المشروع)"
        ]
      }
    },
    {
      id: "29.3.h",
      title: "إعادة هيكلة وتفكيك المكونات الكبيرة (Component Decomposition)",
      englishTerm: {
        term: "Component Decomposition & God Component Refactoring",
        pronunciation: "كومبوننت ديكومبوزيشن آند جود كومبوننت ريفاكتورينغ",
        meaning: "تفكيك المكونات المتضخمة وفصل المسؤوليات وفق مبدأ SRP"
      },
      description: "المكون المتضخم (المعروف باسم God Component) هو مضاد نمط (Anti-pattern) كلاسيكي في React؛ حيث يبدأ المكون صغيراً، ومع مرور الوقت وإضافة الميزات المستمرة يتضخم ليصل إلى 1000 أو 2000 سطر من الكود، ليحتوي على: جلب البيانات من الشبكة، إدارة 15 حالة useState مختلفة، التعامل مع النماذج، التحقق من الصحة، وتصيير واجهات معقدة ومتشعبة. تتضمن إعادة هيكلة وتفكيك المكونات الكبيرة تطبيق مبدأ المسؤولية الواحدة (Single Responsibility Principle - SRP) من خلال: 1) استخراج منطق إدارة الحالة والعمليات غير المتزامنة إلى خطافات مخصصة (Custom Hooks)، 2) استخراج أجزاء العرض المستقلة إلى مكونات أبناء صغيرة وقابلة لإعادة الاستخدام، 3) فصل المكونات الذكية (Container Components) عن المكونات البصرية الغبية (Presentational Components).",
      realWorldAnalogy: "يشبه المكون المتضخم موظفاً واحداً في مطعم يعمل في آن واحد كطاهٍ، نادل يقدم الطعام، محاسب عند الصندوق، وعامل نظافة للمطعم؛ حتماً سيختنق تحت الضغط ويرتكب أخطاء فادحة؛ بينما يشبه التفكيك الصحي تقسيم العمل بين فريق متخصص: طاهٍ في المطبخ، نادل للزبائن، ومحاسب للصندوق، مما يرفع الكفاءة والسرعة والجودة.",
      whyItMatters: "المكونات المتضخمة تعاني من إعادة تصيير (Re-renders) متكررة ومفرطة لأن أي تغيير في أي حالة صغيرة يجبر المكون العملاق بكامل تفاصيله على إعادة الحساب. تفكيك المكون يجعل الكود سهل القراءة والفهم، قابل للاختبار المعزول بنسبة 100%، ويسمح لعدة مطورين بالعمل على نفس الشاشة دون حدوث تعارضات دمج معقدة.",
      syntax: "// نموذج تفكيك المكون المتضخم إلى Hook منطقي ومكونات عرض مصغرة\n// 1. استخراج المنطق:\nconst { data, loading, handleSubmit } = useCheckoutLogic();\n// 2. تجميع العرض المصغر:\nreturn (\n  <CheckoutLayout>\n    <OrderSummary items={data.items} />\n    <PaymentForm onSubmit={handleSubmit} loading={loading} />\n  </CheckoutLayout>\n);",
      simpleExample: `// مقارنة بين مكون متضخم فوضوي ومكون مفكك بأناقة في React
import React, { useState } from 'react';

// الخطوة 1: استخراج الخطاف المخصص لعزل المنطق والحالة
function useCounterLogic() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}

// الخطوة 2: مكون عرض نقي وبسيط لعرض الرقم
function CounterDisplay({ value }) {
  return (
    <div className="text-3xl font-black font-mono text-cyan-400 py-3 text-center">
      {value}
    </div>
  );
}

// الخطوة 3: مكون أزرار التحكم المستقل
function CounterControls({ onIncrement, onDecrement }) {
  return (
    <div className="flex gap-2">
      <button onClick={onDecrement} className="flex-1 py-1.5 bg-slate-800 rounded font-bold text-xs">-</button>
      <button onClick={onIncrement} className="flex-1 py-1.5 bg-indigo-600 rounded font-bold text-xs">+</button>
    </div>
  );
}

// الخطوة 4: المكون المنسق النهائي الرشيق والنظيف
export function DecomposedCounter() {
  const { count, increment, decrement } = useCounterLogic();

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs mx-auto">
      <h4 className="text-xs font-bold text-slate-400 text-center">عداد مفكك وفق مبدأ SRP</h4>
      <CounterDisplay value={count} />
      <CounterControls onIncrement={increment} onDecrement={decrement} />
    </div>
  );
}`,
      advancedExample: `// إعادة هيكلة وتفكيك شاشة كاملة لإدارة المستخدمين من مكون متضخم (God Component) إلى معمارية متناسقة
import React, { useState } from 'react';

// 1. الخطاف المخصص: مسؤول حصراً عن البيانات والعمليات المنطقية (Data & Logic Layer)
function useUserManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: 'أحمد علي', role: 'مدير النظام', active: true },
    { id: 2, name: 'سارة خالد', role: 'مطور واجهات', active: true },
    { id: 3, name: 'خالد عمر', role: 'مصمم تجربة', active: false }
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  // تصفية المستخدمين بناءً على نص البحث
  const filteredUsers = users.filter(u => u.name.includes(searchQuery));

  // تبديل حالة نشاط المستخدم
  const toggleUserStatus = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, active: !u.active } : u));
  };

  return { filteredUsers, searchQuery, setSearchQuery, toggleUserStatus };
}

// 2. المكون الفرعي الأول: شريط البحث المستقل (Presentational Component)
function UserSearchBar({ query, onQueryChange }) {
  return (
    <input 
      type="text" 
      placeholder="بحث عن موظف..." 
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 mb-4"
    />
  );
}

// 3. المكون الفرعي الثاني: صف المستخدم المفرد القابل لإعادة الاستخدام
function UserListItem({ user, onToggle }) {
  return (
    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
      <div>
        <span className="font-bold text-sm text-slate-200 block">{user.name}</span>
        <span className="text-xs text-slate-400 font-mono">{user.role}</span>
      </div>
      <button 
        onClick={() => onToggle(user.id)}
        className={\`px-3 py-1 rounded-lg text-xs font-bold transition \${user.active ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400 border border-slate-700'}\`}
      >
        {user.active ? 'نشط' : 'معطل'}
      </button>
    </div>
  );
}

// 4. المكون الرئيسي المنسق (Orchestrator Container Component)
export function UserManagementDashboard() {
  // استدعاء المنطق من الخطاف المعزول
  const { filteredUsers, searchQuery, setSearchQuery, toggleUserStatus } = useUserManagement();

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-4">
        <div>
          <h3 className="text-lg font-bold">إدارة فريق العمل (Refactored View)</h3>
          <p className="text-xs text-slate-400 mt-0.5">مكون مفكك بالكامل وفق مبدأ المسؤولية الواحدة (SRP)</p>
        </div>
        <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
          Clean Architecture
        </span>
      </div>

      {/* مكون شريط البحث */}
      <UserSearchBar query={searchQuery} onQueryChange={setSearchQuery} />

      {/* قائمة المستخدمين المفككة */}
      <div className="space-y-2">
        {filteredUsers.length === 0 ? (
          <p className="text-center text-xs text-slate-500 py-4">لا توجد نتائج مطابقة لبحثك.</p>
        ) : (
          filteredUsers.map((user) => (
            <UserListItem key={user.id} user={user} onToggle={toggleUserStatus} />
          ))
        )}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية تحويل شاشة إدارة المستخدمين من مكون واحد متضخم إلى هيكل نقي: خطاف مخصص useUserManagement لعزل المنطق، ومكون UserSearchBar لحقل البحث، ومكون UserListItem للعناصر الفردية، وأخيراً مكون منسق UserManagementDashboard رشيق لا يتجاوز 30 سطراً.",
      commonMistakes: [
        {
          mistake: "تفكيك المكونات بشكل مفرط وغير مبرر (Over-decomposition) حتى تصبح أبسط سطرين من الـ HTML مكوناً مستقلاً في ملف منفصل.",
          why: "التجريد المفرط يؤدي إلى تشتيت الانتباه وصعوبة التنقل بين عشرات الملفات الصغيرة دون أي فائدة ملموسة في إعادة الاستخدام.",
          fix: "فكك المكون عندما يحقق أحد ثلاثة شروط: 1) تجاوز 250-300 سطر، 2) الحاجة لإعادة استخدامه في مكان آخر، 3) الرغبة في عزل إعادة التصيير (Re-render Isolation)."
        },
        {
          mistake: "تعريف مكونات الدوال الفرعية داخل جسم دالة المكون الرئيسي مباشرة (Defining components inside components).",
          why: "إعادة تعريف الدالة داخل الدالة ينشئ مرجعاً جديداً تماماً مع كل تصيير، مما يجبر React على تدمير شجرة DOM وإعادة بنائها وفقدان حالة التركيز والحقول.",
          fix: "عرّف دائماً المكونات الفرعية خارج المكون الرئيسي، إما في نفس الملف في الأسفل أو في ملفات مستقلة."
        }
      ],
      bestPractices: [
        "استخرج العمليات الحسابية ومنطق جلب البيانات إلى Custom Hook مستقل يحمل اسم use[Feature].",
        "احرص على أن تكون المكونات الفرعية Presentational نقيّة قدر الإمكان تعتمد على الـ Props فقط.",
        "استخدم ميزة Component Composition وتمرير الخاصية children لتفادي مشكلات تعمق الخصائص (Prop Drilling).",
        "سمِّ المكونات بأسماء واضحة تدل على وظيفتها بدقة مثل OrderSummary وPaymentDetails."
      ],
      visualInfographic: {
        title: "خريطة تفكيك المكونات المتضخمة (Decomposition Flow)",
        description: "كيف يتم تقسيم المكون العملاق إلى طبقات هندسية نقية",
        visualSteps: [
          "المكون المتضخم 🦖 (1500 سطر يجمع بين الـ State والـ API والـ JSX)",
          "استخراج منطق الحالة 🧠 (Custom Hook يدير العمليات المنطقية useLogic)",
          "فصل واجهات العرض 🎨 (مكونات Presentational نقية تستقبل Props فقط)",
          "المكون المنسق 🎼 (Container خفيف يربط الـ Hook بالمكونات)",
          "العزل والأداء الفائق ⚡ (إعادة تصيير محصورة واختبارات معزولة بنسبة 100%)"
        ]
      }
    },
    {
      id: "29.3.i",
      title: "توثيق المكونات والدوال للمطورين (TSDoc & JSDoc Standards)",
      englishTerm: {
        term: "Component Documentation & TSDoc",
        pronunciation: "كومبوننت دوكيومينتيشن آند تي إس دوك",
        meaning: "التوثيق المعياري للمكونات والدوال البرمجية عبر TSDoc وJSDoc"
      },
      description: "التوثيق البرمجي المعياري باستخدام معايير TSDoc وJSDoc هو الممارسة الاحترافية لكتابة تعليقات منظمة وقابلة للقراءة آلياً فوق المكونات، والخطافات، والدوال البرمجية في React. تتيح هذه المعايير لمحررات الأكواد الحديثة مثل VS Code توليد تلميحات سياقية ذكية وتفاعلية (IntelliSense Hover Tooltips) تشرح للمطور الآخر وظيفة المكون، ومعنى كل خاصية (Prop)، والقيم الافتراضية، وأمثلة الاستخدام الحي، مع إبراز تحذيرات الدوال المهددة بالإلغاء (@deprecated). كما تتيح هذه التعليقات استخراج وتوليد مواقع توثيق كاملة وتلقائية لمكتبة المكونات باستخدام أدوات مثل TypeDoc وStorybook.",
      realWorldAnalogy: "يشبه توثيق TSDoc للمكونات كتالوج الإرشادات المرفق مع الأجهزة الإلكترونية المعقدة؛ فبدلاً من أن يفتح العميل الجهاز ويحاول تخمين وظيفة كل سلك وزر، يقرأ الدليل الواضح الذي يشرح وظيفة كل زر وفولتية الكهرباء المسموح بها، فيستخدم الجهاز بأمان وسرعة دون إتلافه.",
      whyItMatters: "في المشاريع الكبيرة وفرق العمل المتعددة، يقضي المطورون وقتاً في قراءة وفهم كود زملائهم أكثر بكثير من الوقت الذي يقضونه في كتابة كود جديد. التوثيق المعياري يمنع سوء الفهم، ويقلل أسئلة الدعم المتكررة في سلاك، ويمكّن أي مطور جديد من استخدام مكونات النظام فوراً وبثقة تامة مع استعراض تلميحات المحرر دون الحاجة لفتح الملف الأصلي وفحص تفاصيله الداخلية.",
      syntax: "/**\n * مكون زر تفاعلي يدعم حالات التحميل والأنماط المتعددة.\n *\n * @param {ButtonProps} props - خصائص الزر\n * @param {string} props.label - النص الظاهر على الزر\n * @param {boolean} [props.isLoading=false] - حالة مؤشر التحميل\n * @returns {JSX.Element} عنصر زر مهيأ للوصولية\n *\n * @example\n * <Button label=\"حفظ\" isLoading={false} onClick={handleSave} />\n */",
      simpleExample: `// توثيق مكون بطاقة مستخدم وفق معايير JSDoc التفاعلية
import React from 'react';

/**
 * مكون لعرض بطاقة موجزة لبيانات المستخدم مع شارة التحقق.
 *
 * @component
 * @param {Object} props - خصائص المكون
 * @param {string} props.name - الاسم الكامل للمستخدم
 * @param {string} props.email - البريد الإلكتروني المعتمد
 * @param {boolean} [props.isVerified=false] - هل الحساب موثق رسمياً؟
 * @param {() => void} [props.onSelect] - دالة اختيار البطاقة
 * @returns {JSX.Element} بطاقة مستخدم منسقة
 *
 * @example
 * <UserCard name="سارة أحمد" email="sara@example.com" isVerified={true} />
 */
export function UserCard({ name, email, isVerified = false, onSelect }) {
  return (
    <div 
      onClick={onSelect}
      className="p-3 bg-slate-900 border border-slate-800 rounded-xl max-w-xs text-white hover:border-indigo-500 cursor-pointer transition"
    >
      <div className="flex items-center gap-2">
        <span className="font-bold text-sm text-slate-200">{name}</span>
        {isVerified && <span className="text-cyan-400 text-xs" title="موثق">✓</span>}
      </div>
      <p className="text-xs text-slate-400 font-mono mt-1">{email}</p>
    </div>
  );
}`,
      advancedExample: `// استوديو توثيق متقدم يستعرض محاكاة نافذة تلميحات VS Code IntelliSense المولدة عبر TSDoc
import React, { useState } from 'react';

// كود توثيق المكون المعياري بصيغة TSDoc
const SAMPLE_TSDOC = \`/**
 * مكون حقل إدخال مخصص مع دعم التحقق الفوري وعرض رسائل الخطأ.
 *
 * @remarks
 * هذا المكون متوافق بنسبة 100% مع معايير الوصولية WCAG 2.1 AA ويدعم قارئات الشاشة عبر aria-invalid.
 *
 * @param {InputFieldProps} props - خصائص حقل الإدخال
 * @property {string} props.label - العنوان التوضيحي البارز أعلى الحقل
 * @property {string} [props.errorMessage] - رسالة الخطأ عند فشل التحقق
 * @property {boolean} [props.required=false] - هل الحقل إلزامي؟
 *
 * @deprecated يرجى استخدام \`ValidatedInput\` بدلاً من هذا المكون في الإصدارات القادمة.
 *
 * @returns {JSX.Element} عنصر حقل الإدخال
 */\`;

// مكون استعراض التوثيق البرمجي الذكي
export function TSDocIntelliSenseViewer() {
  // حالة محاكاة تمرير مؤشر الفأرة (Hover) لإظهار التلميح
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold">التوثيق المعياري للمكونات (TSDoc & IntelliSense)</h3>
          <p className="text-xs text-slate-400 mt-1">توليد التلميحات البرمجية الذكية في محررات الأكواد وتوثيق الخصائص والـ Hooks</p>
        </div>
        <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
          TSDoc Standard
        </span>
      </div>

      {/* استعراض كود التوثيق المعياري */}
      <div className="mb-6 p-4 bg-slate-950 rounded-xl border border-slate-800">
        <span className="text-xs font-semibold text-slate-400 block mb-2">شكل التوثيق المعياري في الكود:</span>
        <pre className="font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
          {SAMPLE_TSDOC}
        </pre>
      </div>

      {/* منطقة محاكاة محرر الأكواد VS Code */}
      <div className="relative p-6 bg-slate-950 rounded-xl border border-slate-800">
        <span className="text-xs text-slate-500 block mb-3 font-mono">// مرر الفأرة فوق اسم المكون لتجربة نافذة التلميح الذكي:</span>
        
        <div className="inline-block relative">
          <span 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-indigo-400 font-mono font-bold text-sm cursor-help underline decoration-dotted underline-offset-4"
          >
            &lt;InputField /&gt;
          </span>

          {/* نافذة التلميح التفاعلية المحاكية لـ VS Code Tooltip */}
          {isHovered && (
            <div className="absolute bottom-full left-0 mb-2 w-80 p-4 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-50 text-xs">
              <div className="flex items-center gap-1.5 text-rose-400 font-bold mb-1.5 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 text-[10px]">
                <span>⚠️ @deprecated:</span>
                <span>استخدم ValidatedInput بدلاً منه</span>
              </div>
              <p className="text-slate-200 font-medium mb-2">
                مكون حقل إدخال مخصص مع دعم التحقق الفوري وعرض رسائل الخطأ.
              </p>
              <div className="border-t border-slate-700 pt-2 text-[11px] text-slate-400 space-y-1 font-mono">
                <div><span className="text-indigo-300">@param</span> label (string) - العنوان التوضيحي</div>
                <div><span className="text-indigo-300">@param</span> errorMessage? (string)</div>
                <div><span className="text-indigo-300">@param</span> required? (boolean = false)</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال المعماري كيف تتحول تعليقات TSDoc المنظمة إلى تلميحات سياقية تفاعلية ذكية (Hover Tooltips) في محررات الأكواد، موضحة نوع كل خاصية وتنبيهات الإلغاء (@deprecated) والروابط الإرشادية لزملائك في الفريق.",
      commonMistakes: [
        {
          mistake: "كتابة تعليقات توثيق تشرح البديهيات المكررة (مثل: @param name - the name of user).",
          why: "التعليقات السطحية التافهة تزيد من ضوضاء الملف دون تقديم أي قيمة مضافة عن سياق الاستخدام أو الحالات الخاصة.",
          fix: "ركز في التوثيق على القيود، والقيم الافتراضية، والحالات الاستثنائية، والأمثلة التطبيقية الحية."
        },
        {
          mistake: "تعديل سلوك المكون أو حذف خصائص منه دون تحديث تعليقات الـ TSDoc المكتوبة فوقه.",
          why: "التوثيق القديم المضلل أسوأ بمراحل من عدم وجود توثيق على الإطلاق؛ لأنه يقود المطور الآخر لارتكاب أخطاء كارثية.",
          fix: "اجعل مراجعة وتحديث تعليقات التوثيق خطوة إلزامية في مراجعة الكود (Code Review) عند تعديل أي واجهة برمجية."
        }
      ],
      bestPractices: [
        "استخدم الوسم @deprecated مع توجيه صريح للبديل الأحدث عند عزمك على الاستغناء عن دالة أو مكون.",
        "وفّر دائماً نموذج استخدام حي عبر وسم @example لتمكين المطورين من نسخ الكود السليم فوراً.",
        "وثق دوال الخطافات المخصصة (Custom Hooks) موضحاً معلمات الإدخال والقيم المعادة والآثار الجانبية (Side Effects).",
        "استخدم أداة TypeDoc لأتمتة توليد موقع توثيق إلكتروني لمشروعك البرمجي في كل عملية دمج بالـ Main."
      ],
      visualInfographic: {
        title: "منظومة التوثيق المعياري للمكونات (TSDoc Ecosystem)",
        description: "كيف تنعكس تعليقات TSDoc على تجربة تطوير الفريق وجودة الشفرة",
        visualSteps: [
          "كتابة التوثيق المعياري ✍️ (استخدام @param و@returns و@example و@deprecated)",
          "توليد التلميحات الذكية 💡 (VS Code IntelliSense يظهر الشرح التفاعلي فور تمرير الفأرة)",
          "التحقق التلقائي من الأنواع 🛡️ (مواءمة الـ TSDoc مع واجهات TypeScript)",
          "توليد المواقع التوثيقية 📚 (بناء صفحات التوثيق الإلكترونية تلقائياً عبر TypeDoc)",
          "تسهيل انضمام المطورين 🚀 (تسريع Onboarding وتقليل أخطاء استخدام المكونات)"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-29-3-1",
      question: "ما هو الفارق الجوهري بين أمري npm install و npm ci في إدارة اعتماديات React؟",
      options: [
        "أمر npm ci مخصص لتشغيل اختبارات الوحدات فقط ولا يثبت أي حزمة.",
        "أمر npm ci يقوم بتثبيت صارم ومطابق 100% لملف package-lock.json ويفشل فوراً إذا وجد أي تعارض، بينما يمكن لـ npm install تعديل ملف القفل وتثبيت إصدارات فرعية أحدث.",
        "أمر npm install يعمل فقط على نظام التشغيل ويندوز.",
        "لا يوجد أي فرق بينهما؛ كلاهما أسماء مستعارة لنفس العملية الداخلية."
      ],
      correctAnswer: 1,
      explanation: "أمر npm ci (Clean Install) مخصص لخوادم الإنتاج والـ CI/CD؛ حيث يضمن تثبيتاً نظيفاً ومطابقاً لملف package-lock.json دون أي تغيير، ويفشل إذا كان هناك عدم تطابق في التجزئة."
    },
    {
      id: "quiz-29-3-2",
      question: "كيف تقوم أدوات التحويل الآلي (Codemods) بتحديث آلاف ملفات الكود المصدري بدقة وسرعة؟",
      options: [
        "باستخدام تقنية البحث والاستبدال النصي الأعمى لجميع الكلمات المطابقة.",
        "بتحليل الكود المصدري إلى شجرة قواعد نحوية مجردة (Abstract Syntax Tree - AST) وتعديل العقد البرمجية ثم إعادة توليد الكود النظيف.",
        "بإرسال الكود إلى خوادم الترجمة الفورية باللغة الإنجليزية.",
        "بإعادة كتابة الكود البرمجي بلغة C++ أولاً."
      ],
      correctAnswer: 1,
      explanation: "تعتمد أدوات Codemod (مثل jscodeshift) على فك شفرة الكود إلى شجرة AST، مما يمكنها من فهم سياق المتغيرات والمكونات البرمجية وتعديلها بأمان رياضي دقيق دون المساس بالتنسيقات الأخرى."
    },
    {
      id: "quiz-29-3-3",
      question: "ما هي القاعدة الهندسية الذهبية الموصى بها في منهجيات Agile لإدارة وتقليص الديون التقنية بانتظام؟",
      options: [
        "إيقاف كافة أعمال الشركة والميزات الجديدة لمدة عام كامل لإعادة كتابة الكود من الصفر.",
        "تجاهل الديون التقنية تماماً والتركيز فقط على المبيعات.",
        "تخصيص نسبة تتراوح بين 15% إلى 20% من وقت كل دورة تطوير (Sprint) لمعالجة المشاكل المعمارية وإعادة الهيكلة المستمرة.",
        "حذف جميع ملفات الاختبارات لتقليل حجم المشروع."
      ],
      correctAnswer: 2,
      explanation: "توصي أفضل الممارسات الهندسية بتخصيص قرابة 20% من وقت الفريق في كل Sprint لسداد الديون التقنية وإعادة الهيكلة، مما يمنع تراكم المشاكل ويحافظ على رشاقة التطبيق."
    }
  ],
  practicalExercise: {
    id: "exercise-29-3",
    title: "تمرين تطبيقي: تفكيك مكون متضخم وتوثيقه مع فحص الاعتماديات (Code Refactoring & TSDoc)",
    scenario: "لديك في مشروعك مكون قديم متضخم يجمع بين حقل إدخال، زر حفظ، ومنطق التحقق والتخزين، دون أي توثيق للمطورين. المطلوب منك تفكيك هذا المكون إلى Custom Hook مستقل ومكونين فرعيين وفق مبدأ المسؤولية الواحدة (SRP)، وتوثيق المكون الناتج بمعيار TSDoc الاحترافي مع توفير وسم @example.",
    tasks: [
      "استخراج منطق الحالة والتحقق من صحة النص إلى خطاف مخصص باسم useNoteInput.",
      "إنشاء مكون فرعي مستقل لحقل الإدخال وزر الحفظ.",
      "توثيق المكون النهائي بتعليقات TSDoc كاملة توضح معلمات الخصائص والوسوم القياسية.",
      "ضمان خلو المكون من أي عمليات إعادة تصيير غير مبررة."
    ],
    hints: [
      "اجعل الـ Hook يعيد القيمة المدخلة، ودالة التغيير، ودالة الحفظ، وحالة الخطأ.",
      "استخدم وسم @param لوصف كل خاصية يستقبلها المكون، ووسم @example لبيان طريقة استدعائه.",
      "احرص على أن تكون المكونات الفرعية نقيّة وسهلة القراءة."
    ],
    solution: `// الحل النموذجي للتمرين التطبيقي: تفكيك وتوثيق المكون وفق المعايير العالمية
import React, { useState } from 'react';

// 1. استخراج الخطاف المخصص لعزل المنطق والتحقق (Logic Layer)
export function useNoteInput(initialValue = '', onSave) {
  const [text, setText] = useState(initialValue);
  const [error, setError] = useState('');

  // دالة معالجة التغيير
  const handleChange = (val) => {
    setText(val);
    if (error) setError('');
  };

  // دالة الحفظ مع التحقق
  const handleSave = () => {
    if (!text.trim()) {
      setError('لا يمكن حفظ ملاحظة فارغة.');
      return;
    }
    if (onSave) onSave(text.trim());
    setText('');
  };

  return { text, error, handleChange, handleSave };
}

/**
 * مكون حقل إدخال الملاحظات السريعة مع التحقق المدمج وتفكيك المسؤوليات.
 *
 * @component
 * @param {NoteInputProps} props - خصائص المكون
 * @param {string} [props.placeholder='اكتب ملاحظتك هنا...'] - النص الإرشادي داخل الحقل
 * @param {(note: string) => void} props.onSaveNote - دالة استدعاء تنفذ عند حفظ الملاحظة بنجاح
 * @returns {JSX.Element} عنصر إدخال الملاحظة المنسق
 *
 * @example
 * <RefactoredNoteInput 
 *   placeholder="أدخل فكرة جديدة..." 
 *   onSaveNote={(note) => console.log('تم الحفظ:', note)} 
 * />
 */
export function RefactoredNoteInput({ placeholder = 'اكتب ملاحظتك هنا...', onSaveNote }) {
  // استدعاء المنطق من الخطاف المخصص
  const { text, error, handleChange, handleSave } = useNoteInput('', onSaveNote);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl max-w-md text-white">
      <h4 className="text-xs font-bold text-slate-400 mb-2">تسجيل ملاحظة سريعة (TSDoc Documented)</h4>
      
      <div className="flex gap-2 mb-1">
        <input 
          type="text"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500"
        />
        <button 
          onClick={handleSave}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-lg transition"
        >
          حفظ
        </button>
      </div>

      {error && (
        <span className="text-[11px] text-rose-400 font-semibold block mt-1">
          ⚠️ {error}
        </span>
      )}
    </div>
  );
}`
  },
  visualInfographic: {
    title: "خارطة صيانة مشاريع React واستدامة الاعتماديات",
    description: "الأركان الأربعة لإدارة وصيانة المشروعات البرمجية الكبرى",
    visualSteps: [
      "إدارة الاعتماديات والترقيات 📦 (تحديث SemVer، وفحص الثغرات مع Dependabot وSnyk)",
      "التطابق الصارم عبر Lockfiles 🛡️ (استخدام npm ci المشفر وضمان النزاهة)",
      "الأتمتة عبر Codemods 🤖 (تحويل الكود آلياً عند الترقية عبر jscodeshift)",
      "إعادة الهيكلة وتوثيق TSDoc 📚 (تقليص الديون التقنية وتفكيك المكونات الكبيرة)"
    ]
  }
};

