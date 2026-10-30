// src/data/sections/section27/topic2.js
// القسم 27: Git وGitHub والعمل الجماعي - الموضوع 2: العمل باستخدام GitHub

export const topic2 = {
  id: "27.2",
  title: "العمل باستخدام GitHub والتعاون السحابي",
  englishTitle: "Working with GitHub & Cloud Collaboration",
  description:
    "الدليل الشامل للعمل المشترك عبر منصة GitHub: إنشاء وربط المستودعات السحابية عبر بروتوكولات SSH وHTTPS، إتقان عمليات المزامنة الدفع git push والجلب والدمج git pull، إدارة دورة مراجعة الشيفرة الكاملة عبر طلبات السحب Pull Requests، تقنيات مراجعة الكود Code Review الاحترافية، تنظيم وتتبع المهام والعيوب عبر Issues وGitHub Projects، كتابة ملف README تسويقي جذاب، وأتمتة الفحص والبناء عبر سير عمل GitHub Actions.",
  subtopics: [
    {
      id: "27.2.a",
      title: "إنشاء مستودع سحابي على GitHub وإعداده",
      englishTerm: {
        term: "Creating a GitHub Repository",
        pronunciation: "كرييتنج إيه جيت هاب ريبوزيتوري",
        meaning: "استضافة مشروعك على سحابة GitHub العامة أو الخاصة لمشاركته والتعاون مع المطورين"
      },
      description:
        "منصة GitHub هي الشبكة الاجتماعية والمنصة السحابية الأضخم في العالم للمطورين، حيث تستضيف ملايين المستودعات البرمجية المفتوحة والخاصة. إنشاء مستودع سحابي (Remote Repository) يمنح مشروعك مقراً آمناً في السحابة مع واجهة رسومية لإدارة الأذونات، وتتبع الإصدارات، والمناقشات البرمجية. عند إنشاء مستودع جديد، يمكنك اختياره ليكون عاماً (Public) يراه ويساهم فيه الجميع، أو خاصاً (Private) مقتصراً عليك وعلى فريقك، مع خيارات تهيئة تلقائية تشمل ملف README تمهيدي، وملف .gitignore، ورخصة برمجية مفتوحة المصدر (مثل MIT License).",
      realWorldAnalogy:
        "المستودع المحلي على حاسوبك يشبه كتابة روايتك في دفتر خاص على مكتبك في المنزل؛ بينما المستودع السحابي على GitHub يشبه إيداع نسخة أصلية من الرواية في دار نشر عالمية أو مكتبة عامة مع خزانة محكمة، حيث يمكن للقراء أو فريق التحرير الاطلاع عليها والتعليق عليها وتطويرها معك بأمان.",
      whyItMatters:
        "يمثل GitHub السجل السحابي المعتمد لنسخ المشروع الاحتياطية، وهو البورتفوليو الحي الأكثر أهمية الذي ينظر إليه أصحاب العمل ومدراء التوظيف لتقييم كفاءتك البرمجية ومشاريعك الحقيقية.",
      syntax:
        "# استخدام أداة GitHub الرسمية gh لإنشاء مستودع سحابي من سطر الأوامر فوراً\ngh repo create my-react-app --public --source=. --remote=origin",
      codeExample: `// مثال سطر أوامر: خطوات إنشاء المستودع السحابي عبر GitHub CLI
# 1. تسجيل الدخول لحسابك على GitHub عبر الطرفية
gh auth login

# 2. إنشاء مستودع سحابي جديد عام وربطه بالمشروع الحالي
gh repo create learn-react-mastery --public --description "دليل تعلم React 19 الشامل"

# الناتج من الأداة:
# ✓ Created repository your-username/learn-react-mastery on GitHub
# ✓ Added remote https://github.com/your-username/learn-react-mastery.git`,
      advancedExample: `// مثال متقدم: محاكاة فحص أذونات المستودع ونوع الترخيص عبر GitHub REST API
import React, { useState, useEffect } from 'react';

// مكون يعرض بيانات المستودع السحابي عبر واجهة GitHub API
export function RepoMetaViewer({ owner = 'facebook', repo = 'react' }) {
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // جلب البيانات الوصفية للمستودع العام من خوادم GitHub
    fetch(\`https://api.github.com/repos/\${owner}/\${repo}\`)
      .then(res => res.json())
      .then(data => {
        setRepoData({
          name: data.full_name,
          stars: data.stargazers_count,
          forks: data.forks_count,
          license: data.license?.name || 'بدون رخصة صريحة',
          isPrivate: data.private
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [owner, repo]);

  if (loading) return <div className="text-slate-400 text-xs">جارٍ قراءة بيانات المستودع...</div>;
  if (!repoData) return <div className="text-rose-400 text-xs">تعذر جلب بيانات المستودع السحابي.</div>;

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs space-y-2 text-slate-200">
      <div className="flex justify-between items-center">
        <span className="font-bold text-white text-sm">{repoData.name}</span>
        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/50 font-mono">
          {repoData.isPrivate ? 'خاص Private' : 'عام Public'}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 pt-2 text-center">
        <div className="p-2 bg-slate-950 rounded border border-slate-800">
          <div className="text-amber-400 font-bold">⭐ {repoData.stars?.toLocaleString()}</div>
          <div className="text-slate-500 text-[10px]">النجوم</div>
        </div>
        <div className="p-2 bg-slate-950 rounded border border-slate-800">
          <div className="text-blue-400 font-bold">🍴 {repoData.forks?.toLocaleString()}</div>
          <div className="text-slate-500 text-[10px]">الاشتقاقات (Forks)</div>
        </div>
        <div className="p-2 bg-slate-950 rounded border border-slate-800">
          <div className="text-emerald-400 font-bold">{repoData.license}</div>
          <div className="text-slate-500 text-[10px]">الرخصة البرمجية</div>
        </div>
      </div>
    </div>
  );
}`,
      output:
        "يتم إنشاء المستودع السحابي بنجاح، مما يمنحه رابطاً رسمياً على GitHub لاستقبال التحديثات واستعراض الإحصائيات والرخص البرمجية.",
      commonMistakes: [
        {
          mistake: "تهيئة المستودع السحابي بملف README أو .gitignore على GitHub عندما يكون لديك مشروع محلي يحتوي بالفعل على تلك الملفات، مما يسبب تعارض 'unrelated histories'.",
          fix: "إذا كان لديك كود محلي، أنشئ مستودع GitHub فارغاً تماماً (بدون تفعيل README أو License) لتسهيل أول عملية رفع push."
        },
        {
          mistake: "اختيار رخصة برمجية صارمة مثل GPL لمشروع تجاري خاص أو شركة ناشئة دون فهم تبعاتها القانونية.",
          fix: "استخدام رخصة MIT المرنة للمشاريع مفتوحة المصدر التي تتيح للجميع استخدام وتعديل الكود بحرية."
        }
      ],
      bestPractices: [
        "اختر اسماً موجزاً ومعبراً للمستودع باستخدام الأحرف الصغيرة والشرطات (kebab-case) مثل: 'ecommerce-react-store'.",
        "احرص دائماً على إضافة وصف قصير (Description) وموضوعات تصنيفية (Topics) لزيادة سهولة اكتشاف مشروعك في بحث GitHub.",
        "فعّل خيار Private للمشاريع التجارية والبيانات الحساسة وأكواد العملاء."
      ],
      infographic: {
        title: "خيارات إعداد المستودع السحابي على GitHub",
        nodes: [
          { label: "Public vs Private", desc: "تحديد مستوى الرؤية (مفتوح للعامة أو مقيد لأعضاء الفريق)" },
          { label: "README.md", desc: "وثيقة الشرح والتعريف الأولى التي تظهر في واجهة المستودع" },
          { label: ".gitignore Template", desc: "قالب استبعاد الملفات الجاهز لبيئات مثل Node / React" },
          { label: "Open Source License", desc: "تحديد الحقوق القانونية لاستخدام وتعديل كود المشروع (مثل MIT)" }
        ]
      }
    },
    {
      id: "27.2.b",
      title: "ربط ورفع مشروع React المحلي إلى GitHub",
      englishTerm: {
        term: "git remote & git push",
        pronunciation: "جيت ريموت آند جيت بوش",
        meaning: "ربط المستودع المحلي بعنوان الخادم السحابي وإرسال الإيداعات إلى فرع origin الرئيسي"
      },
      description:
        "بعد بناء مشروع React محلياً وتهيئته بـ Git، تأتي خطوة الربط السحابي. يتم ذلك عبر إضافة خادم بعيد (Remote) يسمى اصطلاحاً origin باستخدام أمر git remote add origin <url>. يدعم GitHub بروتوكولين للاتصال: بروتوكول HTTPS (الذي يتطلب Personal Access Token - PAT)، وبروتوكول SSH (الموصى به تقنياً لأنه يستخدم مفاتيح تشفير غير متماثلة عامة وخاصة لتسجيل الدخول السلس والأكثر أماناً دون طلب كلمات مرور). بعد الربط، يتم رفع الكود لأول مرة باستخدام الأمر: git push -u origin main، حيث يربط خيار -u (upstream) الفرع المحلي بنظيره السحابي لتسهيل عمليات الدفع المستقبلية.",
      realWorldAnalogy:
        "أمر git remote add origin هو كحفظ رقم هاتف السيرفر السحابي في قائمة جهات الاتصال باسم 'origin'، وأمر git push هو كضغط زر الاتصال وإرسال الطرد البرمجي المحمل بالإيداعات إلى هذا العنوان.",
      whyItMatters:
        "يضمن تأمين كودك على السحابة ومشاركته فورياً، ويمهد الطريق لبدء خطوط البناء التلقائي والنشر المباشر (CI/CD) على Vercel أو Netlify.",
      syntax:
        "# 1. إضافة عنوان المستودع السحابي\ngit remote add origin git@github.com:username/repo.git\n\n# 2. التأكد من تسمية الفرع الحالي main\ngit branch -M main\n\n# 3. دفع التعديلات وربط الفرع التلقائي\ngit push -u origin main",
      codeExample: `// مثال سطر أوامر: التسلسل الكامل لربط مشروع React جديد ورفعه
# التأكد من وقوفك في مجلد المشروع
cd my-react-app

# 1. إضافة رابط المستودع السحابي البعيد (باستخدام بروتوكول SSH الموصى به)
git remote add origin git@github.com:ahmad-dev/react-pro-dashboard.git

# 2. التأكد من مسمى الفرع بأنه main
git branch -M main

# 3. إرسال كافة commits لأول مرة وتعيين origin/main كمرجع افتراضي
git push -u origin main

# الناتج النموذجي الناجح:
# Enumerating objects: 42, done.
# Counting objects: 100% (42/42), done.
# Writing objects: 100% (42/42), 85.40 KiB | 2.50 MiB/s, done.
# To github.com:ahmad-dev/react-pro-dashboard.git
#  * [new branch]      main -> main
# Branch 'main' set up to track remote branch 'main' from 'origin'.`,
      advancedExample: `// مثال متقدم: إعداد مفاتيح التشفير SSH السريعة للاتصال الآمن بـ GitHub بدون كلمات مرور
# 1. توليد زوج مفاتيح تشفير Ed25519 فائق الأمان
ssh-keygen -t ed25519 -C "your_email@example.com"
# (اضغط Enter للموافقة على المسار الافتراضي ~/.ssh/id_ed25519)

# 2. تشغيل وكيل SSH agent وتسجيل المفتاح فيه
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# 3. نسخ المفتاح العام Public Key إلى الحافظة
# لنظام Windows (PowerShell):
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard
# لنظام Mac:
# pbcopy < ~/.ssh/id_ed25519.pub

# 4. التوجه إلى GitHub: Settings -> SSH and GPG keys -> New SSH Key ولصق المفتاح

# 5. اختبار الاتصال الناجح مع خوادم GitHub
ssh -T git@github.com
# الناتج المنتظر:
# Hi username! You've successfully authenticated, but GitHub does not provide shell access.`,
      output:
        "يتم رفع كافة إيداعات وملفات مشروع React إلى GitHub وتظهر واجهة المشروع كاملة على السحابة مع وسم آخر إيداع.",
      commonMistakes: [
        {
          mistake: "محاولة كتابة كلمة مرور حساب GitHub العادية عند استخدام بروتوكول HTTPS وتلقي خطأ: Support for password authentication was removed.",
          fix: "GitHub ألغى كلمات المرور في سطر الأوامر؛ يجب إنشاء Personal Access Token (PAT) أو الانتقال لبروتوكول SSH الأكثر راحة وأماناً."
        },
        {
          mistake: "كتابة عنوان remote خاطئ والارتباك عند تلقي خطأ: remote origin already exists.",
          fix: "تعديل الرابط السحابي عبر: git remote set-url origin <new-url> أو حذفه عبر: git remote remove origin ثم إضافته مجدداً."
        }
      ],
      bestPractices: [
        "استخدم بروتوكول SSH دائماً لتفادي الحاجة لتجديد التوكنات الرقمية PAT كل شهرين.",
        "تأكد دائماً عبر الأمر git remote -v من الروابط السحابية المعتمدة للجلب (fetch) والدفع (push).",
        "لا تستخدم خيار git push -f (Force Push) إلا في فروعك التجريبية الخاصة التي لم يتم مشاركتها بعد."
      ],
      infographic: {
        title: "خطوات الربط والرفع السحابي (Push Workflow)",
        nodes: [
          { label: "1. git remote add", desc: "ربط المستودع المحلي بالخادم السحابي باسم origin" },
          { label: "2. SSH Authentication", desc: "المصادقة الآمنة بمفاتيح التشفير دون كلمات مرور" },
          { label: "3. git push -u", desc: "إرسال حزم التغييرات وتأسيس العلاقة التتبعية Upstream" },
          { label: "4. Cloud Availability", desc: "إتاحة الكود على GitHub وبدء مسارات النشر الآلي" }
        ]
      }
    },
    {
      id: "27.2.c",
      title: "استنساخ المستودعات باستخدام git clone",
      englishTerm: {
        term: "git clone",
        pronunciation: "جيت كلون",
        meaning: "تحميل نسخة كاملة ومتماثلة من مستودع سحابي على جهازك المحلي مع كامل تاريخ الإيداعات والفروع"
      },
      description:
        "أمر git clone هو البوابة لتحميل المشاريع من GitHub إلى جهازك للبدء في المساهمة أو التطوير. بخلاف تنزيل المشروع كملف مضغوط (Download ZIP) الذي يعطيك الملفات الحالية فقط ويفقدك كافة مزايا التحكم في الإصدارات، يقوم git clone بتحميل قاعدة بيانات Git الكاملة (.git) بما فيها كافة الفروع السابقة، وسجل الإيداعات، وإعداد خادم origin السحابي تلقائياً. ويوفر Git خيارات استنساخ سريعة مثل النسخ السطحي (Shallow Clone عبر --depth 1) الذي يجلب آخر إيداع فقط لتوفير استهلاك باقة الإنترنت وتسريع التحميل للمشاريع العملاقة.",
      realWorldAnalogy:
        "يشبه الفرق بين التقاط صورة فوتوغرافية لمبنى (تنزيل ملف ZIP كنسخة ثابتة ميتة)، وبين أخذ المخططات الهندسية الأصلية للمبنى مع دفتر التعديلات وتاريخ البناء وعقد الملكية الذي يتيح لك بناء طوابق جديدة وإعادة تشكيله (git clone).",
      whyItMatters:
        "هو الأمر الأول الذي ينفذه أي مهندس برمجيات عند انضمامه لشركة جديدة أو عند الرغبة في تجربة مكتبة مفتوحة المصدر وفحص كودها محلياً.",
      syntax:
        "# استنساخ المستودع بالكامل عبر SSH\ngit clone git@github.com:username/repository-name.git\n\n# استنساخ المستودع داخل مجلد محدد\ngit clone <url> my-custom-folder\n\n# استنساخ سطحي سريع لآخر commit فقط\ngit clone --depth 1 <url>",
      codeExample: `// مثال سطر أوامر: دورة استنساخ وتشغيل مشروع React لأول مرة
# 1. استنساخ المشروع من GitHub
git clone git@github.com:facebook/react.git

# 2. الدخول إلى مجلد المشروع المستنسخ
cd react

# 3. فحص الفروع والسجل التاريخي المتاح فورياً
git status
git log --oneline -n 3

# 4. تثبيت الحزم وتشغيل التطبيق (في مشاريعك)
npm install
npm run dev`,
      advancedExample: `// مثال متقدم: حيل وخيارات git clone الاحترافية للمشاريع الكبيرة
# 1. استنساخ فرع محدد فقط دون باقي الفروع لتوفير المساحة
git clone --branch feature/v2 --single-branch git@github.com:company/monorepo.git

# 2. الاستنساخ السطحي فائق السرعة لبيئات الـ CI/CD (أسرع بـ 10 أضعاف)
# يجلب آخر إيداع فقط دون تحميل تاريخ الـ 10 سنوات السابقة
git clone --depth 1 git@github.com:company/huge-project.git

# 💡 معلومة متقدمة: إذا احتجت لاحقاً لجلب كامل التاريخ بعد الاستنساخ السطحي:
git fetch --unshallow`,
      output:
        "يتم إنشاء مجلد محلي مطابق تماماً للمستودع السحابي، مع ربط تلقائي لفرع main وخادم origin جاهزاً للعمل والمزامنة فوراً.",
      commonMistakes: [
        {
          mistake: "استنساخ مستودع داخل مستودع آخر موجود بالفعل على جهازك (Nested Repositories).",
          fix: "التأكد دائماً من أنك تقف في مجلد المشاريع العام (مثل ~/projects) قبل تشغيل git clone."
        },
        {
          mistake: "محاولة تشغيل npm run dev فور الاستنساخ دون تنفيذ أمر npm install أولاً.",
          fix: "تذكر دائماً أن مجلد node_modules لا يتم رفعه إلى GitHub، ويجب تشغيل npm install أو pnpm install لتثبيت الحزم فور الاستنساخ."
        }
      ],
      bestPractices: [
        "استخدم رابط SSH دائماً في الاستنساخ إذا كنت تملك صلاحيات التعديل والدفع في المستودع.",
        "استخدم خيار --depth 1 عندما تريد فقط تجربة بناء المشروع أو في خوادم الفحص السريع Docker/CI.",
        "راجع ملف README.md الخاص بالمشروع فور استنساخه لمعرفة المتطلبات والخطوات اللازمة لتشغيله بنجاح."
      ],
      infographic: {
        title: "مقارنة: git clone مقابل تنزيل Download ZIP",
        nodes: [
          { label: "git clone", desc: "يحمل كامل قاعدة بيانات .git + سجل التاريخ + الفروع + إمكانية إرسال التحديثات" },
          { label: "Download ZIP", desc: "ملفات نصية ميتة بدون تاريخ أو تتبع أو إمكانية عمل pull/push" },
          { label: "Shallow Clone (--depth 1)", desc: "حل وسط ذكي: يجلب آخر نسخة مع الحفاظ على اتصال Git خفيف وسريع" }
        ]
      }
    },
    {
      id: "27.2.d",
      title: "مزامنة التعديلات باستخدام git push وgit pull وgit fetch",
      englishTerm: {
        term: "git push, fetch & pull",
        pronunciation: "جيت بوش، فيتش آند بول",
        meaning: "تبادل ومزامنة التحديثات البرمجية بين المستودع المحلي والخادم السحابي المشترك"
      },
      description:
        "في بيئات العمل الجماعية، يتغير المستودع السحابي باستمرار بإيداعات يرفعها زملاؤك في الفريق. لإبقاء كودك محدثاً، يوفر Git ثلاثة أوامر جوهرية: 1) git fetch: يقوم بالاتصال بالسيرفر السحابي وتنزيل كافة الفروع والإيداعات الجديدة إلى المستودع المحلي، ولكنه لا يلمس ولا يعدل أي سطر في مجلد عملك (فحص آمن غير تدميري). 2) git pull: يقوم بتنفيذ fetch متبوعاً بدمج مباشر (merge) للتعديلات في فرعك الحالي. 3) git push: يرفع إيداعاتك المحلية الجديدة إلى الخادم السحابي ليراها زملاؤك.",
      realWorldAnalogy:
        "أمر git fetch يشبه قيام ساعي البريد بوضع الرسائل في صندوق البريد الخارجي؛ الرسائل وصلت منزلك ولكنك لم تفتحها بعد. أمر git pull هو الخروج وفتح الصندوق وقراءة الرسائل ودمج تعليماتها في جدولك. وأمر git push هو تسليم رسالتك أنت لساعي البريد ليوصلها للآخرين.",
      whyItMatters:
        "هو عصب التزامن والتناغم بين أعضاء الفريق البرمجي؛ فالمطور المتميز يجلب تحديثات زملائه باستمرار لتقليل احتمالات التعارض البرمجي إلى الصفر تقريباً.",
      syntax:
        "# جلب التحديثات وفحصها بأمان دون دمج\ngit fetch origin\n\n# جلب ودمج التحديثات مع إعادة البناء الخطي (موصى به جداً)\ngit pull --rebase origin main\n\n# رفع التعديلات المحلية للفرع السحابي\ngit push origin feature/new-button",
      codeExample: `// مثال سطر أوامر: الروتين اليومي لجلب التعديلات ودفع الكود الجديد
# 1. جلب أحدث تعديلات الفريق من الخادم
git fetch origin

# 2. دمج أحدث ما في main السحابي بنقاء خطي
git pull --rebase origin main

# 3. إنجاز تعديلاتك المحلية والالتزام بها
git add src/App.jsx
git commit -m "feat: إضافة خاصية التصفية المتقدمة"

# 4. رفع التعديلات بأمان للمستودع السحابي
git push origin main`,
      advancedExample: `// مثال متقدم: لماذا يُفضل دائماً استخدام git pull --rebase بدلاً من git pull العادي؟
# عند تشغيل git pull التقليدي وكان فرعك المحلي متقدماً بإيداع والسيرفر متقدماً بإيداع:
# يقوم Git بإنشاء Merge Commit تلقائي قبيح ومزعج وغير ضروري:
# "Merge branch 'main' of github.com:company/repo"

# الحل الهندسي المعتمد في كبرى الشركات:
git pull --rebase origin main

# ما يحدث:
# 1. يضع إيداعاتك المحلية جانباً مؤقتاً
# 2. يطبق إيداعات زملائك القادمة من GitHub أولاً
# 3. يعيد تطبيق إيداعاتك فوقها بسلاسة وبشكل خطي مستقيم!

# لجعل خيار rebase هو السلوك الافتراضي دائماً لأمر pull في جهازك:
git config --global pull.rebase true`,
      output:
        "مزامنة مستمرة ونظيفة تحفظ تسلسل التاريخ البرمجي دون توليد إيداعات دمج وهمية عند كل عملية سحب دورية.",
      commonMistakes: [
        {
          mistake: "محاولة تنفيذ git push وتلقي خطأ الرفض الشهير: [rejected - non-fast-forward] والذعر من الرسالة.",
          fix: "الخطأ يعني ببساطة أن زميلك رفع تعديلاً للسيرفر قبلك؛ الحل هو تشغيل git pull --rebase origin <branch> أولاً ثم إعادة الـ push."
        },
        {
          mistake: "استخدام git push --force على فرع رئيسي لحل مشكلة رفض الدفع، مما يؤدي إلى مسح كود الزملاء.",
          fix: "حظر الـ force push نهائياً، واستخدام التحديث وإعادة البناء السلمي لحل التضارب."
        }
      ],
      bestPractices: [
        "اجعل git pull --rebase هي أول خطوة تقوم بها في بداية كل يوم عمل وأول خطوة قبل كل عملية push.",
        "استخدم git fetch بانتظام لمعاينة الفروع الجديدة دون مقاطعة تركيزك في الكود الحالي.",
        "افحص الفروقات قبل الدمج عبر: git log HEAD..origin/main لمعرفة ما كتبه زملاؤك بالضبط قبل دمجه."
      ],
      infographic: {
        title: "مثلث المزامنة السحابية: Fetch مقابل Pull مقابل Push",
        nodes: [
          { label: "git fetch", desc: "تنزيل الكود من السحابة إلى الذاكرة المحلية دون تعديل ملفات عملك (آمن 100%)" },
          { label: "git pull", desc: "تنزيل الكود ودمجه فورياً في ملفات عملك الحالية (Fetch + Merge/Rebase)" },
          { label: "git push", desc: "إرسال ورفع إيداعاتك المحلية الموثقة إلى السحابة ليراها الفريق" }
        ]
      }
    },
    {
      id: "27.2.e",
      title: "إنشاء وإدارة طلبات السحب Pull Requests الاحترافية",
      englishTerm: {
        term: "Pull Requests (PRs)",
        pronunciation: "بول ريكويستس",
        meaning: "طلب رسمي لمراجعة ودمج كود فرع ميزة في الفرع الرئيسي بعد فحصه واختباره والموافقة عليه"
      },
      description:
        "طلب السحب (Pull Request - PR على GitHub، أو Merge Request - MR على GitLab) هو القلب النابض للتعاون البرمجي الحديث. في الفرق المحترفة، لا يُسمح لأي مطور برفع كوده مباشرة إلى فرع main. بدلاً من ذلك، يطور المطور ميزته على فرع مستقل (feature branch)، ويرفعه إلى GitHub، ثم يفتح 'طلب سحب' يطلب فيه من زملائه مراجعة الكود، والتأكد من توافقه مع المعايير وخلوه من الثغرات ونجاح اختباراته الآلية قبل دمجه. يتضمن الـ PR عنواناً واضحاً، وشرحاً للتغييرات مع لقطات شاشة، وقائمة فحص، مع ربطه بأرقام التذاكر أو المشاكل (مثل: Resolves #42).",
      realWorldAnalogy:
        "طلب السحب يشبه تقديم مهندس الديكور لمخططاته المقترحة إلى لجنة المهندسين الاستشاريين في المشروع؛ تناقش اللجنة المخططات، وتطلب تعديل لون أو نقل جدار، وفقط بعد توقيع وموافقة الاستشاريين، يتم السماح لعمال البناء بتنفيذ المخطط في المبنى الحقيقي.",
      whyItMatters:
        "هو خط الدفاع الأول لجودة الكود؛ يمنع وصول الأخطاء والثغرات إلى بيئة الإنتاج، وينشر المعرفة البرمجية بين أعضاء الفريق عبر النقاشات التقنية البناءة.",
      syntax:
        "# إنشاء Pull Request مباشرة من سطر الأوامر عبر GitHub CLI\ngh pr create --title \"feat: إضافة شريط البحث الذكي\" --body \"شرح الميزة مع لقطات الشاشة\"",
      codeExample: `// مثال توضيحي: قالب طلب السحب الاحترافي (PULL_REQUEST_TEMPLATE.md)
<!-- يوضع هذا الملف في مجلد .github/PULL_REQUEST_TEMPLATE.md ليظهر تلقائياً -->

## 📋 وصف التعديلات (Description)
تمت إضافة مكون فلترة المنتجات حسب السعر والتقييم مع دعم التخزين المؤقت المحلي.

## 🎯 المشاكل المرتبطة (Related Issues)
- يحل المشكلة رقم: Closes #128

## 🧪 التحقق والاختبار (Testing)
- [x] تمت تجربة المكون على شاشات الجوال والحاسوب.
- [x] كافة اختبارات الوحدة تمر بنجاح (npm run test: 100% pass).
- [x] تم فحص الـ Lint والتنسيق (npm run lint).

## 📸 لقطات الشاشة (Screenshots)
![معاينة الفلتر الجديد](https://via.placeholder.com/600x300)`,
      advancedExample: `// مثال متقدم: أتمتة دورة حياة الـ PR عبر GitHub CLI في بيئة المطور
# 1. فحص قائمة الـ PRs المفتوحة في المشروع
gh pr list

# 2. إنشاء PR مسودة (Draft PR) للعمل قيد التنفيذ لمشاركة الرأي مع الفريق
gh pr create --draft --title "WIP: هيكل نظام التنبيهات الفورية" --body "العمل جارٍ على ربط WebSocket"

# 3. تحويل الـ Draft إلى PR جاهز للمراجعة الرسمية
gh pr ready

# 4. طلب المراجعة من زميل محدد
gh pr edit --add-reviewer "sarah-lead,omar-frontend"

# 5. التحقق من حالة الفحوصات الآلية (CI Checks) للـ PR الحالي
gh pr checks

# 6. دمج الـ PR تلقائياً بعد نجاح المراجعة والفحوصات
gh pr merge --squash --delete-branch`,
      output:
        "يتم إنشاء طلب سحب منظم ومكتمل الشروط، يسهل على المراجعين قراءته وفحصه والموافقة عليه ودمجه بسلاسة.",
      commonMistakes: [
        {
          mistake: "إنشاء PR ضخم يحتوي على آلاف الأسطر المعدلة وعشرات الملفات غير المترابطة (Monster PR) يستحيل على أي زميل مراجعته بتركيز.",
          fix: "الحفاظ على حجم طلب السحب صغيراً وموجزاً (Small PRs لا يتجاوز 200-400 سطر) لتسهيل مراجعته واكتشاف أخطائه بسرعة."
        },
        {
          mistake: "عدم إرفاق لقطات شاشة أو فيديو توضيحي (GIF) عند إجراء تعديلات في واجهات المستخدم UI.",
          fix: "تضمين صور أو تسجيلات قصيرة لحركة الواجهة قبل وبعد التعديل لتسريع موافقة فريق التصميم والواجهات."
        }
      ],
      bestPractices: [
        "استخدم الكلمات المفتاحية التلقائية مثل: 'Closes #15' أو 'Fixes #40' ليقوم GitHub بإغلاق التذكرة المرتبطة آلياً عند دمج الـ PR.",
        "أنشئ الـ PR كمسودة (Draft PR) أثناء عملك المبكر إذا كنت ترغب في تشغيل الـ CI أو طلب استشارة دون إزعاج المراجعين.",
        "احرص على ألا تدمج كودك بنفسك إلا بعد الحصول على الموافقة الرسمية (LGTM / Approval) من زميل واحد على الأقل."
      ],
      infographic: {
        title: "دورة حياة طلب السحب المثالي (Pull Request Flow)",
        nodes: [
          { label: "1. إنشاء الفرع والرفع", desc: "تطوير الميزة في فرع مستقل ورفعه إلى GitHub" },
          { label: "2. فتح الـ PR والتفاصيل", desc: "تعبئة القالب وربط التذكرة وإرفاق لقطات الشاشة" },
          { label: "3. مراجعة الكود الآلية والبشرية", desc: "تشغيل اختبارات CI ومراجعة الزملاء وتقديم الملاحظات" },
          { label: "4. الدمج وحذف الفرع", desc: "الموافقة والدمج بـ Squash Merge وحذف الفرع المنتهي" }
        ]
      }
    },
    {
      id: "27.2.f",
      title: "مراجعة الكود Code Review وثقافة التعاون الاحترافي",
      englishTerm: {
        term: "Code Review & Collaborative Feedback",
        pronunciation: "كود ريفيو آند كولابوراتيف فيدباك",
        meaning: "فحص الشيفرة البرمجية بواسطة أعضاء الفريق لاكتشاف العيوب وضمان الجودة ومشاركة المعرفة"
      },
      description:
        "مراجعة الكود (Code Review) ليست محكمة للتصيد ولا امتحاناً لإحراج الزملاء، بل هي حوار هندسي وتبادل معرفي يهدف إلى رفع جودة المنتج وتطوير مهارات الفريق ككل. توفر واجهة GitHub أدوات فائقة القوة للمراجعة: النقر على أي سطر لإضافة تعليق مخصص، استخدام ميزة المقترحات الفورية (```suggestion) التي تتيح لصاحب الـ PR تطبيق التعديل المقترح بنقرة زر واحدة، والتمييز بين التعليقات الإلزامية (Request Changes)، والملاحظات التفضيلية الاختيارية (Nitpicks)، والتشجيع والثناء على الحلول الذكية (Praise).",
      realWorldAnalogy:
        "تشبه تدقيق مسودة كتاب قبل طباعته في المطبعة؛ المراجع اللغوي لا يعادي الكاتب، بل يتعاون معه لتصحيح الأخطاء المطبعية، والتأكد من ترابط الأفكار، وصياغة الفقرات بأوضح أسلوب ممكن للقارئ.",
      whyItMatters:
        "تكتشف أكثر من 60% من العيوب المنطقية والثغرات الأمنية قبل وصولها للإنتاج، وتضمن الالتزام بمعايير الأداء والأنماط المعمارية الموحدة في الشركة.",
      syntax:
        "# استخدام كود المقترح التفاعلي داخل تعليقات GitHub:\n```suggestion\nconst formattedPrice = useMemo(() => formatCurrency(price), [price]);\n```",
      codeExample: `// مثال توضيحي: أسلوب التعليق الاحترافي وتقديم الاقتراحات في مراجعة كود React
// ❌ أسلوب مراجعة سيء ومحبط:
// "هذا الكود بطيء وسيء جداً! لماذا لم تستخدم useMemo؟ قم بتغييره فوراً!"

// ✅ أسلوب مراجعة احترافي ومهذب وبناء:
// "مجهود رائع في بناء المكون! لدي ملاحظة بخصوص الأداء:
// عملية حساب الضرائب المعقدة هنا تتكرر في كل رندر حتى لو لم تتغير الأسعار.
// ما رأيك في تغليفها بـ useMemo لتفادي إعادة الحساب الزائدة؟
// اقترح التعديل التالي:

\`\`\`suggestion
  // حفظ نتيجة الحساب وتحديثها فقط عند تغير مصفوفة العناصر
  const totalTax = useMemo(() => calculateTotalTax(items), [items]);
\`\`\`"`,
      advancedExample: `// مثال متقدم: تصنيف مستويات التعليقات في مراجعة الكود (Conventional Comments)
// تتبنى الفرق العالمية تصنيفاً قياسياً للتعليقات لتقليل سوء الفهم:

// 1. أمر إلزامي يجب إصلاحه قبل الدمج (Blocking):
// "issue: هناك ثغرة XSS محتملة هنا بسبب استخدام dangerouslySetInnerHTML دون تعقيم المحتوى بـ DOMPurify."

// 2. مقترح تحسين غير إلزامي (Nitpick - Non-blocking):
// "nit: ما رأيك في استخراج دالة التنسيق هذه إلى utils/formatters.js لإعادة استخدامها مستقبلاً؟ لا يعطل الدمج."

// 3. سؤال للاستيضاح (Question):
// "question: هل هناك سبب معين لاستخدام useEffect هنا بدلاً من معالجة الحدث مباشرة في زر onClick؟"

// 4. ثناء وتشجيع (Praise):
// "praise: تصميم ذكي جداً للخطاف المخصص واستخدام متقن لـ TypeScript Generics! أحسنت."`,
      output:
        "خلق بيئة عمل تشاركية إيجابية تركز على الارتقاء بجودة الكود البرمجي دون إحباط المطورين أو تأخير مواعيد التسليم.",
      commonMistakes: [
        {
          mistake: "أخذ الملاحظات البرمجية والتعليقات على أنها هجوم شخصي، والرد بانفعال أو عناد.",
          fix: "تذكر دائماً أن النقد موجه للكود المكتوب وليس لشخصك؛ فكل مبرمج مهما بلغت خبرته يخطئ ويتعلم من مراجعة زملائه."
        },
        {
          mistake: "إعطاء موافقة شكلية فورية (Approve) دون قراءة وفحص الكود بعناية (Rubber Stamping).",
          fix: "تخصيص وقت حقيقي لفحص المنطق، واختبار الكود محلياً عند الحاجة لضمان تحمل مسؤولية جودة المنتج المشترك."
        }
      ],
      bestPractices: [
        "استخدم ميزة GitHub Suggestions لتوفير وقت صاحب الـ PR وتمكينه من اعتماد التعديل بنقرة زر واحدة.",
        "إذا تجاوز النقاش على الـ PR أكثر من 5 تعليقات متبادلة، انتقل لمكالمة سريعة أو محادثة مباشرة لمدة 5 دقائق للاتفاق وتوفير الوقت.",
        "احرص دائماً على الإشادة بالأجزاء المكتوبة بإتقان ولا تقتصر مراجعتك على تصيد الأخطاء فقط."
      ],
      infographic: {
        title: "قواعد وأخلاقيات مراجعة الكود (Code Review Etiquette)",
        nodes: [
          { label: "1. النقد الموضوعي", desc: "ركز على الكود والمعايير الهندسية وليس على شخصية الكاتب" },
          { label: "2. تقديم الحلول (Suggestions)", desc: "لا تكتفِ بالإشارة للخطأ، بل وفر البديل الأفضل عبر كود صريح" },
          { label: "3. وضوح الأولوية", desc: "ميز بوضوح بين العيوب الحرجة (Issue) والملاحظات التفضيلية (Nitpick)" },
          { label: "4. التقدير والتشجيع", desc: "أثنِ على الحلول الأنيقة والابتكارات لتعزيز الروح الإيجابية للفريق" }
        ]
      }
    },
    {
      id: "27.2.g",
      title: "إدارة المشاكل والاقتراحات باستخدام GitHub Issues",
      englishTerm: {
        term: "GitHub Issues Management",
        pronunciation: "جيت هاب إيشوز مانجمنت",
        meaning: "نظام تتبع الأخطاء البرمجية وطلبات الميزات الجديدة والمناقشات التقنية داخل المستودع"
      },
      description:
        "نظام GitHub Issues هو مركز العمليات وبنك المهام للمشروع. يتيح للمستخدمين والمطورين الإبلاغ عن الأخطاء والعيوب (Bug Reports)، أو اقتراح ميزات جديدة (Feature Requests)، أو توثيق أسئلة تقنية. لتنظيم آلاف القضايا في المشاريع الكبيرة، يوفر GitHub نظام تصنيف قوي يشمل الوسوم الملونة (Labels مثل bug, enhancement, good first issue)، وتعيين المسؤولين (Assignees)، وربط التذاكر بمحطات التسليم الكبرى (Milestones)، وإعداد قوالب مخصصة (Issue Templates) تفرض على الكاتب توفير خطوات إعادة تكرار المشكلة وتفاصيل بيئة التشغيل.",
      realWorldAnalogy:
        "يشبه نظام تذاكر الدعم الفني والصيانة في الفنادق الكبرى؛ عندما يبلغ النزيل عن عطل في التكييف، يتم فتح تذكرة برقم محدد، وتصنيفها على أنها 'صيانة كهربائية عاجلة'، وتعيينها لمهندس الصيانة المسؤول، ولا تُغلق التذكرة إلا بعد إصلاح المكيف وتوقيع المشرف.",
      whyItMatters:
        "يضمن عدم نسيان أي عيب برمجي أو ميزة مطلوبة، ويوثق تاريخ النقاشات والقرارات التقنية المتخذة حول كل ميزة في مكان واحد شفاف ومتاح للجميع.",
      syntax:
        "# إنشاء Issue جديد مباشرة من سطر الأوامر عبر GitHub CLI\ngh issue create --title \"bug: زر تسجيل الدخول لا يستجيب في Safari\" --body \"تفاصيل الخطأ...\" --label \"bug\"",
      codeExample: `// مثال توضيحي: قالب الإبلاغ عن الأخطاء البرمجية (.github/ISSUE_TEMPLATE/bug_report.yml)
name: 🐛 إبلاغ عن مشكلة برمجية (Bug Report)
description: أنشئ تقريراً بمشكلة لمساعدتنا في إصلاحها
body:
  - type: markdown
    attributes:
      value: شكرًا لمساعدتنا في تحسين تطبيق React! يرجى تقديم معلومات دقيقة.
  - type: textarea
    id: what-happened
    attributes:
      label: ما الذي حدث بالضبط؟
      description: وصف واضح للمشكلة البرمجية التي واجهتها.
    validations:
      required: true
  - type: textarea
    id: steps-to-reproduce
    attributes:
      label: خطوات إعادة إظهار الخطأ
      description: كيف يمكننا تكرار هذه المشكلة على أجهزتنا؟
      placeholder: |
        1. الذهاب إلى صفحة '/cart'
        2. النقر على زر 'تأكيد الطلب'
        3. ظهور شاشة بيضاء في وحدة التحكم
    validations:
      required: true
  - type: input
    id: browser
    attributes:
      label: المتصفح ونظام التشغيل
      placeholder: Chrome 130 على macOS Sequoia`,
      advancedExample: `// مثال متقدم: استعراض وإدارة المشاكل البرمجية آلياً عبر GitHub CLI
# 1. استعراض كافة المشاكل المصنفة كأخطاء برمجية حرجة
gh issue list --label "bug" --state open

# 2. عرض تفاصيل التذكرة رقم #42 مع كافة التعليقات
gh issue view 42

# 3. تعيين التذكرة لنفسك للبدء في حلها
gh issue edit 42 --add-assignee "@me"

# 4. إضافة تعليق سريع يفيد ببدء التحقيق في المشكلة
gh issue comment 42 --body "تم رصد الخطأ؛ السبب يعود لـ hydration mismatch في صفحة الهبوط. جارٍ الحل."

# 5. إغلاق التذكرة بعد دمج الحل
gh issue close 42 --comment "تم الحل عبر PR #45 بنجاح."`,
      output:
        "تنظيم صارم وموثق لكافة الأخطاء والمهام البرمجية، مما يحول الفوضى إلى خطة عمل واضحة المعالم والمسؤوليات.",
      commonMistakes: [
        {
          mistake: "كتابة تقارير مشاكل مبهمة بدون توفير خطوات تكرار المشكلة (مثل كتابة: 'التطبيق لا يعمل!').",
          fix: "استخدام قوالب Issue Templates التي تلزم المبلغ بتسجيل الخطوات الدقيقة ورسائل الخطأ في وحدة التحكم DevTools."
        },
        {
          mistake: "ترك المشاكل القديمة المحلولة مفتوحة لشهور وسنوات دون إغلاق.",
          fix: "ربط الـ Issues بطلبات السحب عبر كلمات Closes #12 ليتم إغلاقها تلقائياً بمجرد دمج الحل."
        }
      ],
      bestPractices: [
        "استخدم وسم 'good first issue' في مشاريعك لتشجيع المطورين المبتدئين والمساهمين الجدد على حل المهام الخفيفة.",
        "أنشئ محطات تسليم (Milestones) بأهداف وتواريخ محددة (مثل: إطلاق الإصدار v2.0) ووزع التذاكر عليها.",
        "ثبت المشاكل الحيوية الشائعة (Pin Issue) في أعلى الصفحة لتفادي تكرار فتح تذاكر متطابقة من المستخدمين."
      ],
      infographic: {
        title: "عناصر ومكونات تذكرة الـ Issue الفعالة",
        nodes: [
          { label: "العنوان الدقيق", desc: "وصف موجز يحدد المشكلة أو الميزة ومكانها (bug: [auth] ...)" },
          { label: "خطوات التكرار (Repro)", desc: "1, 2, 3 بالترتيب ليتمكن المطور من فحص الخطأ محلياً" },
          { label: "الوسوم (Labels)", desc: "ألوان تصنيفية تحدد نوع المهمة وأولويتها (bug, priority: high)" },
          { label: "المسؤول (Assignee)", desc: "تحديد الشخص الذي يتولى كتابة الكود وحل المشكلة" }
        ]
      }
    },
    {
      id: "27.2.h",
      title: "إدارة المهام والمشاريع باستخدام لوحات GitHub Projects",
      englishTerm: {
        term: "GitHub Projects & Kanban Boards",
        pronunciation: "جيت هاب بروجكتس آند كانبان بوردز",
        meaning: "لوحات تفاعلية مرئية بنمط كانبان وجداول لتنظيم سير العمل البرمجي ومتابعة المراحل الزمنية"
      },
      description:
        "خاصية GitHub Projects هي أداة إدارة مشاريع رشيقة (Agile & Kanban) متكاملة ومدمجة ومجانية داخل GitHub. تتيح للفرق البرمجية نقل التذاكر والمهام بصرياً عبر أعمدة سير العمل التقليدية: 'قائمة الانتظار (Todo)'، 'قيد التنفيذ (In Progress)'، 'قيد المراجعة (In Review)'، و'مكتمل بنجاح (Done)'. يتميز الجيل الجديد من GitHub Projects بإمكانات أتمتة جبارة؛ مثل نقل التذكرة تلقائياً إلى 'In Progress' بمجرد فتح فرع عمل لها، أو نقلها إلى 'Done' فور دمج الـ Pull Request الخاص بها، مع دعم طرق عرض متعددة كاللوحات (Board)، والجداول المجدولة (Table)، ومخططات خطط العمل الزمنية (Roadmap Timeline).",
      realWorldAnalogy:
        "لوحة GitHub Projects تشبه السبورة البيضاء الكبيرة المعلقة في غرفة عمليات الشركة المغطاة ببطاقات الملاحظات الملونة (Post-it Notes)؛ حيث ينقل كل عضو بطاقة مهمته من عمود لآخر مع تقدم العمل، ليعرف مدير المشروع بلمحة بصرية واحدة أين يقف الفريق اليوم وما الذي سيعطل موعد الإطلاق.",
      whyItMatters:
        "تغنيك عن الاشتراك في أدوات خارجية منفصلة ومعقدة مثل Trello أو Jira للمشاريع الصغيرة والمتوسطة، وتضمن بقاء تخطيط المهام متصلاً مباشرة بالكود البرمجي وسجل الإيداعات.",
      syntax:
        "# أتمتة دورة العمل المدمجة في GitHub Projects:\nWhen Pull Request merged ➔ Move linked Issue to 'Done' automatically.",
      codeExample: `// مثال مفاهيمي: بنية لوحة الكانبان في GitHub Projects
const projectBoardWorkflow = {
  columns: [
    {
      name: "📋 المتطلبات (Backlog)",
      description: "كافة الأفكار والميزات المقترحة والمؤجلة للمستقبل"
    },
    {
      name: "🚀 المهام المعتمدة (Todo)",
      description: "المهام المختارة للتنفيذ في دورة العمل الحالية (Sprint)"
    },
    {
      name: "⚡ قيد البرمجة (In Progress)",
      description: "المهام التي يعمل عليها المطورون حالياً ولها فروع مفتوحة"
    },
    {
      name: "👀 قيد المراجعة (In Review)",
      description: "المهام التي تم فتح Pull Requests لها وتنتظر موافقة الزملاء"
    },
    {
      name: "✅ تم الإنجاز (Done)",
      description: "الميزات التي دُمجت في main وتم التحقق من استقرارها"
    }
  ]
};

console.log('مراحل سير العمل المعتمدة:', projectBoardWorkflow.columns.map(c => c.name));`,
      advancedExample: `// مثال متقدم: ربط وإدارة عناصر المشروع سحابياً عبر GitHub GraphQL API
// استعلام GraphQL لجلب بيانات لوحة المشروع مع الحقول المخصصة
const fetchProjectItemsQuery = \`
  query GetProjectData($org: String!, $number: Int!) {
    organization(login: $org) {
      projectV2(number: $number) {
        title
        items(first: 20) {
          nodes {
            id
            content {
              ... on Issue {
                title
                number
                state
                assignees(first: 3) {
                  nodes { login }
                }
              }
              ... on PullRequest {
                title
                number
                state
              }
            }
            fieldValueByName(name: "Status") {
              ... on ProjectV2ItemFieldSingleSelectValue {
                name
              }
            }
          }
        }
      }
    }
  }
\`;

console.log('استعلام لوحة المشاريع جاهز للتنفيذ عبر Octokit SDK');`,
      output:
        "الحصول على لوحة تحكم بصرية تفاعلية تنظم تدفق العمل البرمجي وتحدث حالات المهام تلقائياً مع كل عملية سحب أو دمج كود.",
      commonMistakes: [
        {
          mistake: "إنشاء لوحة مشاريع وتركها مهجورة دون تحديث حالات التذاكر يدوياً أو تفعيل الأتمتة التلقائية المدمجة.",
          fix: "تفعيل خيارات سير العمل التلقائي (Built-in Automations) لنقل التذاكر تلقائياً عند فتح وغلق طلبات السحب."
        },
        {
          mistake: "حشو عمود 'قيد التنفيذ In Progress' بعشرات المهام المفتوحة لنفس المطور مما يشتت تركيزه.",
          fix: "تطبيق مبدأ تقييد العمل قيد التنفيذ (WIP Limits) بحيث لا يعمل المبرمج على أكثر من مهمة أو مهمتين في نفس الوقت."
        }
      ],
      bestPractices: [
        "استخدم طريقة العرض الجدولية (Table View) لفرز المهام وتصفيتها حسب الأولوية وتاريخ الاستحقاق.",
        "استخدم طريقة عرض المخطط الزمني (Roadmap View) لعرض خطة الإطلاق الفصلية لأصحاب المصلحة والإدارة.",
        "اربط لوحة المشروع بالمستودعات المتعددة إذا كان نظامك مقسماً إلى Frontend وBackend منفصلين."
      ],
      infographic: {
        title: "لوحة كانبان الرشيقة في GitHub Projects",
        nodes: [
          { label: "1. Todo", desc: "المهام الجاهزة للتطوير في السبرنت الحالي" },
          { label: "2. In Progress", desc: "مهام قيد التطوير الفعلي ومربوطة بفروع عمل" },
          { label: "3. In Review", desc: "مهام مكتملة الكود ومفتوح لها طلب سحب PR" },
          { label: "4. Done", desc: "مهام مدمجة ومختبرة ومغلقة تلقائياً بنجاح" }
        ]
      }
    },
    {
      id: "27.2.i",
      title: "إنشاء ملف README احترافي وتسويقي للمشروع",
      englishTerm: {
        term: "Professional README.md",
        pronunciation: "بروفيشينال ريدمي دوت إم دي",
        meaning: "الواجهة التعريفية والوثيقة الترويجية والتوجيهية الرئيسية التي تشرح ماهية المشروع وكيفية تشغيله"
      },
      description:
        "ملف README.md هو واجهة العرض والمصافحة الأولى بين مشروعك والعالم الخارجي. عندما يزور أي شخص صفحة مستودعك على GitHub، فإن أول ما يراه هو المحتوى المنسق لهذا الملف. ملف الـ README الاحترافي ليس مجرد بضعة أسطر جافة؛ بل هو صفحة هبوط مصغرة (Landing Page) تحتوي على: شعار المشروع، وشارات الحالة الرقمية (Badges مثل حالة البناء ورقم الإصدار والرخصة)، وصورة أو فيديو متحرك (GIF) يوضح التطبيق أثناء عمله، وشرح المشكلة التي يحلها، وقائمة الميزات، والتقنيات المستخدمة، ودليل التثبيت والتشغيل خطوة بخطوة، وروابط المعاينة الحية (Live Demo).",
      realWorldAnalogy:
        "ملف README هو بمثابة الغلاف الفاخر والكتالوج الإرشادي المرفق مع الهاتف الذكي الجديد؛ يبرز لك ميزات الجهاز الرائعة على الغلاف الخارجي، ويشرح لك في الداخل خطوة بخطوة كيف تضع الشريحة وتشحن البطارية وتشغل الجهاز لأول مرة.",
      whyItMatters:
        "المشاريع ذات الـ README الاحترافي تحظى بـ 10 أضعاف النجوم (Stars) والاهتمام على GitHub، وتزيد بشكل حاسم من فرص قبولك في المقابلات الوظيفية لأنها تثبت قدرتك على التوثيق والتواصل المهني.",
      syntax:
        "# عنوان المشروع الرئيسي\\n\\n[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](link)\\n\\n## 🚀 نظرة عامة\\nشرح الفكرة...",
      codeExample: `// مثال عملي: الهيكل النموذجي الشامل لملف README.md لمشروع React احترافي
# ⚡ لوحة تحكم React Pro Dashboard

<p align="center">
  <img src="./public/banner.png" alt="شعار المشروع" width="800" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.0-blue?logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.0-38bdf8?logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen" alt="PRs Welcome" />
</p>

## 🌟 نظرة عامة (Overview)
منصة تحليلات وإدارة بيانات متكاملة مبنية باستخدام أحدث معايير **React 19** و**Tailwind CSS v4**، تدعم الوضع الليلي، الرسوم البيانية الفورية، والعمل بدون إنترنت (PWA).

🔗 **[معاينة النسخة الحية على السحابة (Live Demo)](https://dashboard-demo.example.com)**

## ✨ المميزات الرئيسية (Key Features)
- 🚀 **أداء فائق:** وقت تحميل أولي أقل من ثانية واحدة بفضل React Server Components.
- 🌓 **المظهر الداكن والفاتح:** دعم كامل للتنقل بين الأنماط مع حفظ خيار المستخدم.
- 📱 **دعم كامل للهواتف:** واجهة متجاوبة بالكامل مع دعم التثبيت كتطبيق PWA.
- 📊 **رسوم بيانية تفاعلية:** تحليلات حية لحظية باستخدام Recharts.

## 🛠️ حزمة التقنيات (Tech Stack)
- **الواجهة:** React 19, Vite, Tailwind CSS
- **إدارة الحالة:** TanStack Query & Zustand
- **الاختبارات:** Vitest, Playwright

## 🚀 التثبيت والتشغيل المحلي (Getting Started)

\`\`\`bash
# 1. استنساخ المستودع
git clone git@github.com:yourname/react-pro-dashboard.git

# 2. الدخول لمجلد المشروع
cd react-pro-dashboard

# 3. تثبيت الحزم
npm install

# 4. تشغيل خادم التطوير
npm run dev
\`\`\`

## 📄 الترخيص (License)
هذا المشروع مرخص تحت رخصة [MIT](LICENSE).`,
      advancedExample: `// مثال متقدم: توليد شارات الدروع الرقمية (Shields.io Badges) ديناميكياً
// يمكنك استخدام خدمة Shields.io لتوليد شارات تعكس إحصائيات المستودع الحية:

const badgesConfig = [
  // شارة إصدار الحزمة من npm
  { name: 'NPM Version', url: 'https://img.shields.io/npm/v/my-react-lib?color=crimson' },
  // شارة تغطية الاختبارات الآلية من Codecov
  { name: 'Coverage', url: 'https://img.shields.io/codecov/c/github/username/repo?logo=codecov' },
  // شارة نجاح الـ CI من GitHub Actions
  { name: 'CI Build', url: 'https://img.shields.io/github/actions/workflow/status/username/repo/ci.yml?branch=main' },
  // شارة عدد التنزيلات الكلي
  { name: 'Downloads', url: 'https://img.shields.io/npm/dt/my-react-lib?color=blue' }
];

console.log('روابط الشارات الجاهزة للحقن في ترويسة README:', badgesConfig.map(b => b.url));`,
      output:
        "ظهور صفحة مستودع بالغة الأناقة والاحترافية، تعرض كافة إمكانات المشروع وخطوات تشغيله، مما يجذب المطورين والشركات لدعمه واستخدامه.",
      commonMistakes: [
        {
          mistake: "ترك ملف README الافتراضي الذي يولده Vite أو Create React App دون تعديل أو تخصيص.",
          fix: "مسح النصوص الافتراضية وكتابة توثيق خاص بمشروعك الحقيقي وفكرته وميزاته وروابط تشغيله."
        },
        {
          mistake: "عدم توفير تعليمات التثبيت وإعداد ملفات .env مما يجعل تشغيل المشروع محلياً لغزاً مستحيلاً للزوار.",
          fix: "توفير قسم واضح يشرح أوامر npm install وnpm run dev والمتغيرات البيئية المطلوبة لتشغيل الكود."
        }
      ],
      bestPractices: [
        "ضمن دائماً صورة متحركة (GIF) أو لقطة شاشة عالية الدقة في بداية الـ README لإبراز شكل التطبيق قبل قراءة النصوص.",
        "ضع رابط المعاينة الحية (Live Demo URL) في أول 3 أسطر بخط عريض وواضح.",
        "استخدم جداول منسقة لعرض حزمة التقنيات (Tech Stack) والمساهمين في المشروع."
      ],
      infographic: {
        title: "التشريح الذهبي لملف README الاحترافي",
        nodes: [
          { label: "1. الشعار والشارات", desc: "هوية بصرية واضحة + شارات Shields.io لإثبات الاستقرار ورقم الإصدار" },
          { label: "2. المعاينة المرئية والوصف", desc: "صورة أو GIF حركي للتطبيق ورابط التجربة الحية Live Demo" },
          { label: "3. خطوات التشغيل (Setup)", desc: "أوامر سطر الأوامر الدقيقة للاستنساخ والتثبيت والتشغيل المحلي" },
          { label: "4. حزمة التقنيات والرخصة", desc: "الأدوات والمكتبات المستخدمة وحقوق الاستخدام القانونية MIT" }
        ]
      }
    },
    {
      id: "27.2.j",
      title: "مقدمة إلى GitHub Actions وأتمتة الاختبارات والبناء CI",
      englishTerm: {
        term: "GitHub Actions & CI Workflows",
        pronunciation: "جيت هاب أكشنز آند سي آي وورك فلوز",
        meaning: "منصة تشغيل المهام الآلية داخل GitHub لاختبار وبناء وفحص جودة الكود تلقائياً مع كل push أو PR"
      },
      description:
        "منصة GitHub Actions هي نظام التكامل المستمر (Continuous Integration - CI) المدمج مباشرة في GitHub. تتيح لك تشغيل خوادم افتراضية (Runners مثل Ubuntu أو Windows) لتنفيذ مهام آلية مع كل حدث يطرأ على المستودع (مثل رفع كود جديد git push أو فتح طلب سحب Pull Request). يتم تكوين سير العمل (Workflow) عبر ملف YAML يوضع داخل مجلد .github/workflows/ في المشروع. يضمن هذا النظام فحص الكود بأدوات ESLint وPrettier، وتشغيل اختبارات الوحدة، والتأكد من نجاح أمر npm run build قبل السماح بدمج أي كود في الفرع الرئيسي.",
      realWorldAnalogy:
        "يشبه روبوت الفحص الميكانيكي في خط إنتاج السيارات؛ قبل خروج السيارة من المصنع، يقوم الروبوت آلياً بفحص الفرامل، والتأكد من إحكام البراغي، وفحص المحرك. إذا كان هناك برغي واحد غير مثبت، يطلق الروبوت صافرة إنذار ويمنع خروج السيارة حتى يتم إصلاح الخلل.",
      whyItMatters:
        "يمنع دمج الأكواد المعطوبة التي تكسر بيئة الإنتاج، ويوفر ساعات طويلة من الفحص اليدوي المتكرر، ويمنح فريق التطوير ثقة مطلقة عند إطلاق التحديثات.",
      syntax:
        "# مسار ملف سير العمل في المشروع:\n.github/workflows/ci.yml\n\n# هيكل مشغل الأحداث:\non: [push, pull_request]",
      codeExample: `// مثال عملي: ملف سير عمل CI المتكامل لمشروع React (.github/workflows/ci.yml)
name: 🚀 React CI Pipeline

# تشغيل المهام التلقائية عند الدفع أو فتح PR على فرع main
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  validate-and-build:
    runs-on: ubuntu-latest

    steps:
      # 1. تنزيل كود المستودع في جهاز الخادم الافتراضي
      - name: Checkout Code
        uses: actions/checkout@v4

      # 2. تثبيت بيئة Node.js مع تفعيل التخزين المؤقت للحزم
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      # 3. تثبيت الاعتماديات النظيفة الصارمة
      - name: Install Dependencies
        run: npm ci

      # 4. فحص الأخطاء اللغوية والتنسيق
      - name: Run Linter
        run: npm run lint

      # 5. تشغيل اختبارات الوحدة الآلية
      - name: Run Unit Tests
        run: npm test -- --run

      # 6. التأكد من نجاح بناء نسخة الإنتاج
      - name: Build Production Bundle
        run: npm run build`,
      advancedExample: `// مثال متقدم: سير عمل متعدد الإصدارات (Matrix Strategy) لاختبار التطبيق عبر إصدارات Node متعددة
name: 🧪 Matrix Cross-Version Testing

on:
  pull_request:
    branches: [ main ]

jobs:
  test-matrix:
    runs-on: ubuntu-latest
    strategy:
      # اختبار التطبيق بالتوازي على 3 إصدارات مختلفة من Node.js
      matrix:
        node-version: [18.x, 20.x, 22.x]

    steps:
      - uses: actions/checkout@v4
      
      - name: Use Node.js \${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm'
          
      - run: npm ci
      - run: npm test -- --run
      
      # إرسال إشعار في حال فشل أي إصدار
      - name: Report Failure
        if: failure()
        run: echo "❌ فشل الاختبار على إصدار Node \${{ matrix.node-version }}"`,
      output:
        "يتم فحص الكود تلقائياً على خوادم GitHub مع كل تعديل، وظهور علامة الصح الخضراء ✅ عند النجاح أو علامة الخطأ الحمراء ❌ لمنع دمج الكود المعطوب.",
      commonMistakes: [
        {
          mistake: "استخدام npm install بدلاً من npm ci في بيئة الـ CI التلقائية.",
          fix: "استخدام npm ci دائماً في خوادم البناء لأنه يقوم بتثبيت النسخ المحددة بدقة في package-lock.json دون تعديلها وبسرعة أكبر."
        },
        {
          mistake: "نسيان إعداد أسرار الـ CI (Secrets) في إعدادات GitHub وتلقي أخطاء فشل البناء بسبب غياب متغيرات البيئة.",
          fix: "إضافة مفاتيح الـ API في Settings -> Secrets and variables -> Actions وتمريرها لسير العمل عبر secrets.ENV_VAR."
        }
      ],
      bestPractices: [
        "فعّل خيار 'Require status checks to pass before merging' في إعدادات حماية الفرع (Branch Protection Rules).",
        "احرص على تفعيل خاصية cache في خطوة setup-node لتسريع وقت تنفيذ الـ CI من دقائق إلى ثوانٍ معدودة.",
        "قسّم المهام الثقيلة (مثل البناء والاختبار والفحص الأمني) إلى وظائف متوازية (Parallel Jobs) لتوفير الوقت."
      ],
      infographic: {
        title: "خط أنابيب الفحص الآلي (GitHub Actions CI Pipeline)",
        nodes: [
          { label: "1. Trigger (الحدث)", desc: "إطلاق السير عند كل push أو فتح Pull Request" },
          { label: "2. Checkout & Setup", desc: "تجهيز الخادم الافتراضي وتثبيت Node.js والاعتماديات" },
          { label: "3. Lint & Test", desc: "فحص جودة الشيفرة وتشغيل الاختبارات الآلية" },
          { label: "4. Build & Status", desc: "بناء حزمة الإنتاج وإعطاء الضوء الأخضر للدمج ✅" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-27-2-1",
      question: "لماذا يُوصى باستخدام بروتوكول SSH بدلاً من HTTPS عند ربط مشروعك السحابي مع GitHub؟",
      options: [
        "لأن بروتوكول SSH يتيح لك الاتصال والمصادقة التلقائية الآمنة عبر أزواج مفاتيح التشفير دون الحاجة لإدخال كلمات مرور أو توكنات دورية.",
        "لأن بروتوكول HTTPS محظور رسمياً من قِبل مايكروسوفت.",
        "لأن SSH يقلل حجم ملفات React بنسبة 50%.",
        "لأن بروتوكول SSH يعمل فقط على أنظمة لينكس."
      ],
      correctAnswer: 0,
      explanation:
        "يوفر بروتوكول SSH مصادقة غير متماثلة فائقة الأمان والراحة عبر مفاتيح تشفير عامة وخاصة، مما يلغي عناء التعامل مع التوكنات الرقمية وانتهاء صلاحيتها المتكررة."
    },
    {
      id: "quiz-27-2-2",
      question: "ما الفائدة التقنية الرئيسية من تنفيذ أمر git pull --rebase بدلاً من git pull الافتراضي؟",
      options: [
        "حذف كافة الملفات المؤقتة في مجلد node_modules.",
        "تجنب إنشاء إيداعات دمج تلقائية غير ضرورية (Merge Commits) والحفاظ على سجل تاريخي خطي مستقيم.",
        "تسريع الاتصال بالإنترنت أثناء التحميل.",
        "إغلاق كافة التذاكر المفتوحة على GitHub تلقائياً."
      ],
      correctAnswer: 1,
      explanation:
        "الـ pull مع خيار rebase يقوم بتطبيق إيداعات السيرفر أولاً ثم يعيد تطبيق إيداعاتك المحلية فوقها بشكل خطي ونظيف، مما يقضي على إيداعات الدمج العشوائية التي تشوه السجل التاريخي."
    },
    {
      id: "quiz-27-2-3",
      question: "أين يجب وضع ملفات سير العمل الآلي (Workflows) لكي يتعرف عليها نظام GitHub Actions تلقائياً؟",
      options: [
        "داخل مجلد src/actions/",
        "داخل مجلد .github/workflows/ بصيغة ملفات YAML (.yml أو .yaml)",
        "في مجلد public/ci/",
        "في ملف package.json أسفل مفتاح 'scripts'"
      ],
      correctAnswer: 1,
      explanation:
        "يبحث محرك GitHub Actions عن ملفات سير العمل المكتوبة بصيغة YAML داخل المجلد القياسي المخصص: .github/workflows/ في جذر المستودع."
    }
  ],
  exercise: {
    id: "exercise-27-2",
    title: "إعداد دورة حياة PR متكاملة مع كتابة ملف سير عمل CI وإدارة المراجعة",
    description:
      "اكتب ملف سير عمل GitHub Actions باسم 'ci.yml' يقوم بفحص كود React عبر npm run lint ثم تشغيل الاختبارات npm test وبناء المشروع npm run build، مع توثيق الأوامر اللازمة لإنشاء الفرع ورفع الكود وفتح الـ PR عبر GitHub CLI.",
    hints: [
      "أنشئ ملف .github/workflows/ci.yml واستخدم uses: actions/checkout@v4 وactions/setup-node@v4.",
      "استخدم gh pr create لفتح طلب السحب من سطر الأوامر.",
      "استخدم أمر npm ci لتثبيت الحزم النظيفة في الخادم."
    ],
    solution: `# 1. ملف سير العمل: .github/workflows/ci.yml
name: Continuous Integration

on:
  pull_request:
    branches: [ main ]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - name: استنساخ الكود
        uses: actions/checkout@v4

      - name: إعداد بيئة Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: تثبيت الاعتماديات
        run: npm ci

      - name: فحص الأكواد والتنسيق
        run: npm run lint

      - name: تشغيل الاختبارات
        run: npm test -- --run

      - name: التحقق من نجاح البناء
        run: npm run build

# 2. أوامر إنشاء الفرع وفتح طلب السحب عبر الطرفية:
# إنشاء فرع ميزة جديد
git switch -c feature/auth-redesign

# حفظ التعديلات وإرسالها
git add .
git commit -m "feat(auth): إعادة تصميم واجهة تسجيل الدخول"
git push -u origin feature/auth-redesign

# فتح طلب السحب رسمياً عبر GitHub CLI
gh pr create --title "feat(auth): إعادة تصميم واجهة تسجيل الدخول" --body "تحديث الواجهة وفق الهوية الجديدة وربط الفحوصات الآلية. Closes #55"`
  },
  infographic: {
    title: "منظومة التعاون السحابي المتكاملة على GitHub",
    subtitle: "التنسيق بين المستودعات السحابية، وطلبات السحب، وإدارة المهام، والفحص الآلي المستمر",
    nodes: [
      {
        id: "repo",
        title: "1. المستودع والربط",
        description: "إنشاء المستودع السحابي والربط الآمن عبر مفاتيح تشفير SSH المعتمدة.",
        badge: "Remote Repo"
      },
      {
        id: "sync",
        title: "2. المزامنة والتدفق",
        description: "المزامنة الذكية عبر git push وgit pull --rebase للحفاظ على سجل خطي مستقيم.",
        badge: "Sync & Rebase"
      },
      {
        id: "pr-review",
        title: "3. طلبات السحب والمراجعة",
        description: "إنشاء Pull Requests ومراجعة الشيفرة بدقة عبر المقترحات الفورية Suggestions.",
        badge: "Code Review"
      },
      {
        id: "project-mgmt",
        title: "4. إدارة المهام الرشيقة",
        description: "تنظيم المهام عبر GitHub Issues ولوحات المشاريع بنمط Kanban المؤتمتة.",
        badge: "Kanban & Issues"
      },
      {
        id: "ci-automation",
        title: "5. الأتمتة والفحص الآلي",
        description: "خطوط أنابيب GitHub Actions لفحص الكود واختباره وبنائه قبل أي عملية دمج.",
        badge: "CI / CD Pipeline"
      }
    ]
  }
};

export default topic2;

