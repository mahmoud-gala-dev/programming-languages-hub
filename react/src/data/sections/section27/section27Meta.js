// src/data/sections/section27/section27Meta.js
// بيانات وملخص القسم 27: Git وGitHub والعمل الجماعي (Git, GitHub & Team Collaboration)

export const section27Meta = {
  summary: [
    "التحكم الموزع في الإصدارات: نظام Git يوفر قاعدة بيانات تاريخية محلية مشفرة (.git) تمنح المطور سرعة واستقلالية تامة في العمل دون الحاجة لاتصال مستمر بالإنترنت.",
    "الانضباط في دورة حياة الملفات: التمييز الدقيق بين مجلد العمل، ومنطقة التجهيز Staging Area، والمستودع الدائم يضمن إيداعات برمجية ذرية ونظيفة (Atomic Commits).",
    "التفرع الخفيف والآمن: الفروع في Git مجرد مؤشرات رقمية رشيقة تتيح بناء الميزات في مسارات متوازية دون المساس بالفرع الرئيسي المستقر.",
    "احتراف حل التعارضات البرمجية: تعارض الدمج Merge Conflict ليس خطأً، بل تصرف أمني لحماية الشيفرة يتطلب تدخلاً بشرياً واعياً لاتخاذ القرار الصائب.",
    "التعاون السحابي عبر GitHub: استخدام مفاتيح تشفير SSH الآمنة، والمزامنة الذكية عبر git pull --rebase للحفاظ على سجل خطي ناصع وخالٍ من إيداعات الدمج العشوائية.",
    "ثقافة طلبات السحب ومراجعة الكود: الـ Pull Request هو خط الدفاع الأول للجودة، ومراجعة الكود حوار هندسي بناء يركز على التطوير والارتقاء بالمستوى العام.",
    "معيار الالتزامات الاصطلاحية (Conventional Commits): استخدام البادئات القياسية (feat, fix, refactor) لأتمتة إصدار النسخ SemVer وتوليد سجل التغييرات آلياً.",
    "أتمتة الجودة وتوثيق المعرفة: فرض التنسيق والفحص المحلي عبر Husky وlint-staged، وتوثيق الخيارات الهندسية في سجلات ADRs، وتنظيم التطوير ضمن سبرنتات Agile الرشيقة."
  ],
  cheatSheet: [
    {
      term: "git init",
      category: "أساسيات Git",
      syntax: "git init -b main",
      description: "تهيئة مستودع Git محلي جديد داخل المجلد وإنشاء مجلد .git المخفي."
    },
    {
      term: "git add",
      category: "أساسيات Git",
      syntax: "git add .  أو  git add -p",
      description: "نقل الملفات المعدلة من مساحة العمل إلى منطقة التجهيز المؤقتة Staging Area."
    },
    {
      term: "git commit",
      category: "أساسيات Git",
      syntax: "git commit -m 'feat: رسالة الإيداع'",
      description: "حفظ لقطة دائمة وموثقة من التغييرات المجهزة مع بصمة SHA ورسالة تفسيرية."
    },
    {
      term: "git status",
      category: "أساسيات Git",
      syntax: "git status -s",
      description: "فحص الحالة اللحظية لملفات المشروع والفرع النشط والملفات غير المتتبعة."
    },
    {
      term: "git log",
      category: "أساسيات Git",
      syntax: "git log --oneline --graph --all",
      description: "استعراض السجل الزمني للإيداعات السابقة مع رسم بياني لتشعب الفروع."
    },
    {
      term: ".gitignore",
      category: "إعدادات المستودع",
      syntax: "node_modules/\n.env*\ndist/",
      description: "ملف نصي يحدد المجلدات والملفات التي يجب على Git تجاهلها وعدم تتبعها."
    },
    {
      term: "git switch",
      category: "إدارة الفروع",
      syntax: "git switch -c feature/login",
      description: "إنشاء فرع برمجي جديد والانتقال إليه فورياً للعمل في مسار متوازٍ معزول."
    },
    {
      term: "git merge",
      category: "إدارة الفروع",
      syntax: "git merge feature/cart --no-ff",
      description: "دمج تعديلات فرع فرعي داخل الفرع الحالي مع توثيق إيداع الدمج."
    },
    {
      term: "git rebase",
      category: "إدارة الفروع",
      syntax: "git rebase main",
      description: "إعادة بناء وتطبيق إيداعات الفرع فوق أحدث إيداع في main لخط زمني مستقيم."
    },
    {
      term: "git remote",
      category: "المزامنة السحابية",
      syntax: "git remote add origin git@github.com:user/repo.git",
      description: "ربط المستودع المحلي بالخادم السحابي البعيد على GitHub أو GitLab."
    },
    {
      term: "git push",
      category: "المزامنة السحابية",
      syntax: "git push -u origin main",
      description: "رفع وإرسال الإيداعات المحلية الموثقة إلى الفرع السحابي المشترك."
    },
    {
      term: "git pull",
      category: "المزامنة السحابية",
      syntax: "git pull --rebase origin main",
      description: "جلب أحدث تعديلات السيرفر وتطبيق الإيداعات المحلية فوقها بنقاء خطي."
    },
    {
      term: "git clone",
      category: "المزامنة السحابية",
      syntax: "git clone git@github.com:user/repo.git",
      description: "تحميل نسخة كاملة من مستودع سحابي على جهازك مع كامل التاريخ والفروع."
    },
    {
      term: "Pull Request (PR)",
      category: "تعاون GitHub",
      syntax: "gh pr create --title 'feat: ...'",
      description: "طلب رسمي لمراجعة كود فرع الميزة ومناقشته واختباره قبل دمجه في main."
    },
    {
      term: "GitHub Issues",
      category: "تعاون GitHub",
      syntax: "gh issue create --label 'bug'",
      description: "نظام تتبع الأخطاء البرمجية وطلبات الميزات والمناقشات الفنية في المشروع."
    },
    {
      term: "GitHub Projects",
      category: "تعاون GitHub",
      syntax: "Kanban Board: Todo ➔ In Progress ➔ Done",
      description: "لوحة كانبان تفاعلية ومؤتمتة لتنظيم وإدارة المهام وسير عمل الفريق الرشيق."
    },
    {
      term: "Conventional Commits",
      category: "معايير الفريق",
      syntax: "feat(auth): إضافة ميزة التحقق الثنائي",
      description: "معيار صياغة موحد للرسائل (feat, fix, docs, refactor) لأتمتة إصدار النسخ."
    },
    {
      term: "ESLint & Prettier",
      category: "معايير الفريق",
      syntax: "npm run lint && npm run format",
      description: "توحيد جودة الكود البرمجي والتنسيق الشكلي للأسطر والفواصل لكافة المطورين."
    },
    {
      term: "Husky",
      category: "أتمتة الجودة",
      syntax: ".husky/pre-commit  و  .husky/commit-msg",
      description: "إدارة ومشاركة خطافات Git Hooks مع كامل الفريق عبر المستودع السحابي."
    },
    {
      term: "lint-staged",
      category: "أتمتة الجودة",
      syntax: "npx lint-staged (في خطاف pre-commit)",
      description: "تشغيل أدوات الفحص والتنسيق حصراً على الملفات المعدلة والمجهزة بسرعة فائقة."
    },
    {
      term: "ADR",
      category: "التوثيق المعماري",
      syntax: "docs/adr/0001-use-zustand.md",
      description: "سجل القرار المعماري: وثيقة Markdown تسجل سياق وقرار وعواقب الخيارات التقنية."
    },
    {
      term: "Agile Sprint",
      category: "إدارة العمل الرشيق",
      syntax: "دورة عمل من أسبوعين: Planning ➔ Standup ➔ Review ➔ Retro",
      description: "تقسيم العمل إلى دورات زمنية قصيرة قابلة للتنبؤ والتقييم المستمر للسرعة."
    }
  ],
  project: {
    id: "gitflow-forge-pro",
    title: "GitFlow Forge Pro - استوديو محاكاة Git التفاعلي وإدارة فروع العمل الجماعي",
    level: "متقدم وشامل",
    duration: "4 ساعات",
    description:
      "تطبيق تفاعلي حي يحاكي بيئة Git وGitHub كاملة في متصفحك: شجرة بصرية تفاعلية للإيداعات والفروع (Commit Graph Visualizer)، محاكي تنفيذ أوامر git commit وgit branch وgit switch، محاكي تفاعلي لحل تعارض الدمج (Interactive Merge Conflict Resolver)، مدقق رسائل الإيداع وفق معيار Conventional Commits، ولوحة تتبع سبرنت Agile متكاملة.",
    features: [
      "محاكي شجرة Git البصرية الحية وتتبع تقدم مؤشر HEAD والفروع بالتوازي.",
      "محرر وفاحص رسائل الإيداع الذكي (Conventional Commits Validator) مع كشف نوع التعديل وتأثير SemVer.",
      "محاكي حل تعارض الدمج البرمجي مع أزرار Accept Current وAccept Incoming وAccept Both.",
      "لوحة كانبان مصغرة لإدارة مهام السبرنت مع نقل المهام آلياً عند الإيداع.",
      "محاكي فحص سير عمل CI واختبار مرور اختبارات الجودة وبناء الحزم بنجاح."
    ],
    techStack: [
      "React 19 & State Management",
      "Git Visual Graph Engine",
      "Conventional Commits Regex Engine",
      "Interactive 3-Way Merge Simulation",
      "Tailwind CSS Dark Theme"
    ],
    files: [
      "src/components/GitVisualizer.jsx",
      "src/components/CommitBuilder.jsx",
      "src/components/ConflictResolver.jsx",
      "src/components/SprintKanban.jsx",
      "src/App.jsx"
    ],
    code: `import React, { useState } from 'react';

// استوديو محاكاة Git والعمل الجماعي التفاعلي GitFlow Forge Pro
export default function GitFlowForgePro() {
  // الفروع المتاحة في المستودع
  const [branches, setBranches] = useState(['main', 'feature/login', 'bugfix/cart']);
  const [currentBranch, setCurrentBranch] = useState('main');
  
  // شجرة الإيداعات التاريخية
  const [commits, setCommits] = useState([
    { id: 'c1', branch: 'main', hash: 'e4f2a1b', message: 'feat: تهيئة مشروع React 19 الأولي', time: 'منذ يومين' },
    { id: 'c2', branch: 'main', hash: '8a9c3d4', message: 'feat(nav): بناء شريط التنقل المتجاوب', time: 'منذ يوم' },
    { id: 'c3', branch: 'feature/login', hash: '7b6d5e1', message: 'feat(auth): بناء نموذج تسجيل الدخول', time: 'منذ 3 ساعات' },
    { id: 'c4', branch: 'bugfix/cart', hash: '9c0a2b8', message: 'fix(cart): معالجة خطأ حساب الخصم', time: 'منذ ساعة' }
  ]);

  // إدخال الإيداع الجديد
  const [commitMsg, setCommitMsg] = useState('');
  const [scope, setScope] = useState('');
  const [type, setType] = useState('feat');

  // حالة محاكاة تعارض الدمج
  const [showConflictModal, setShowConflictModal] = useState(false);
  const [resolvedCode, setResolvedCode] = useState(null);

  // التحقق من صحة الرسالة وفق Conventional Commits
  const fullCommitMessage = scope ? type + '(' + scope + '): ' + commitMsg : type + ': ' + commitMsg;
  const isMessageValid = commitMsg.trim().length >= 5;

  // تنفيذ إيداع جديد
  const handleCommit = (e) => {
    e.preventDefault();
    if (!isMessageValid) return;
    const newHash = Math.random().toString(36).substring(2, 9);
    const newCommit = {
      id: 'c-' + Date.now(),
      branch: currentBranch,
      hash: newHash,
      message: fullCommitMessage,
      time: 'الآن'
    };
    setCommits(prev => [newCommit, ...prev]);
    setCommitMsg('');
    setScope('');
  };

  // إنشاء فرع جديد
  const handleCreateBranch = () => {
    const branchName = window.prompt('أدخل اسم الفرع الجديد (مثال: feature/profile):');
    if (branchName && !branches.includes(branchName)) {
      setBranches(prev => [...prev, branchName]);
      setCurrentBranch(branchName);
    }
  };

  return (
    <div className="p-6 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans" dir="rtl">
      {/* الترويسة الرئيسية */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <h2 className="text-xl font-bold text-white tracking-wide">GitFlow Forge Pro</h2>
            <span className="bg-emerald-950 text-emerald-300 border border-emerald-700/50 text-xs px-2.5 py-0.5 rounded-full font-mono">Git & Teamwork</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">محاكاة حية لسجل Git، إدارة الفروع، صياغة Conventional Commits، وحل تعارضات الدمج.</p>
        </div>

        {/* أزرار العمليات السريعة */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCreateBranch}
            className="px-3 py-1.5 bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 border border-blue-500/40 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
          >
            🌿 فرع جديد
          </button>
          <button
            onClick={() => setShowConflictModal(true)}
            className="px-3 py-1.5 bg-amber-600/20 text-amber-300 hover:bg-amber-600/30 border border-amber-500/40 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
          >
            ⚠️ محاكاة تعارض دمج
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* العمود الأول: الفروع ومنشئ الإيداعات الموحدة */}
        <div className="space-y-6">
          {/* محدد الفروع */}
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex justify-between">
              <span>الفروع المحلية (Branches)</span>
              <span className="text-emerald-400 font-mono">HEAD ➔ {currentBranch}</span>
            </div>
            <div className="space-y-1.5">
              {branches.map(b => (
                <button
                  key={b}
                  onClick={() => setCurrentBranch(b)}
                  className={'w-full text-right px-3 py-2 rounded-xl text-xs font-mono flex items-center justify-between transition ' + 
                    (currentBranch === b ? 'bg-emerald-600 text-white font-bold shadow' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800/80')}
                >
                  <span className="flex items-center gap-2">
                    <span>{b === 'main' ? '⭐' : '🌿'}</span>
                    <span>{b}</span>
                  </span>
                  {currentBranch === b && <span className="text-[10px] bg-emerald-800 px-1.5 py-0.5 rounded">النشط</span>}
                </button>
              ))}
            </div>
          </div>

          {/* منشئ رسائل Conventional Commits */}
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-3 text-xs">
            <h4 className="font-bold text-white">منشئ إيداعات Conventional Commits</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-slate-400 mb-1">النوع (Type):</label>
                <select
                  value={type}
                  onChange={e => setType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 p-2 rounded-lg text-white font-mono"
                >
                  <option value="feat">feat (ميزة جديدة)</option>
                  <option value="fix">fix (إصلاح عيب)</option>
                  <option value="refactor">refactor (تحسين هيكلي)</option>
                  <option value="docs">docs (توثيق)</option>
                  <option value="perf">perf (تسريع أداء)</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-400 mb-1">النطاق Scope (اختياري):</label>
                <input
                  type="text"
                  value={scope}
                  onChange={e => setScope(e.target.value)}
                  placeholder="auth, cart, ui"
                  className="w-full bg-slate-950 border border-slate-800 p-2 rounded-lg text-white font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">رسالة التعديل (Subject):</label>
              <input
                type="text"
                value={commitMsg}
                onChange={e => setCommitMsg(e.target.value)}
                placeholder="اكتب ما تم إنجازه بصيغة الحاضر..."
                className="w-full bg-slate-950 border border-slate-800 p-2 rounded-lg text-white"
              />
            </div>

            <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[11px] text-emerald-300 break-all">
              git commit -m "{fullCommitMessage}"
            </div>

            <button
              onClick={handleCommit}
              disabled={!isMessageValid}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl font-bold transition shadow"
            >
              حفظ الالتزام في {currentBranch}
            </button>
          </div>
        </div>

        {/* العمود الثاني والثالث: شجرة الإيداعات التاريخية وسجل Git */}
        <div className="md:col-span-2 bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-bold text-white text-sm">سجل الإيداعات التاريخي (Git Commit Graph)</h3>
            <span className="text-xs text-slate-400 font-mono">إجمالي: {commits.length} إيداعات</span>
          </div>

          <div className="space-y-3">
            {commits.map((c, index) => {
              const isHead = index === 0;
              return (
                <div
                  key={c.id}
                  className={'p-3 rounded-xl border transition-all ' + 
                    (c.branch === currentBranch ? 'bg-slate-900 border-emerald-500/40' : 'bg-slate-950 border-slate-800/80')}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={'w-2 h-2 rounded-full ' + (c.branch === 'main' ? 'bg-blue-400' : 'bg-purple-400')}></span>
                      <span className="font-mono text-xs font-bold text-emerald-400">{c.hash}</span>
                      <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                        {c.branch}
                      </span>
                      {isHead && (
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.2 rounded font-bold">
                          HEAD
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-500">{c.time}</span>
                  </div>
                  <p className="text-xs text-slate-200 mt-2 font-medium">{c.message}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* نافذة محاكاة حل تعارض الدمج (Merge Conflict Modal) */}
      {showConflictModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full p-6 text-slate-100 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                <h3 className="font-bold text-white text-base">محاكي حل تعارض الدمج (src/App.jsx)</h3>
              </div>
              <button onClick={() => setShowConflictModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              قام زميلك بتعديل السطر في فرع main بينما قمت أنت بتعديله في فرعك. اختر الحل المناسب:
            </p>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-2 text-left" dir="ltr">
              <div className="text-blue-400">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Current Change - main)</div>
              <div className="bg-blue-950/40 p-2 rounded text-blue-200">
                const theme = 'dark'; // الوضع الليلي المعتمد في main
              </div>
              <div className="text-slate-500">=======</div>
              <div className="bg-emerald-950/40 p-2 rounded text-emerald-200">
                const theme = 'system'; // خيار النظام القادم من فرعك
              </div>
              <div className="text-emerald-400">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/theme (Incoming Change)</div>
            </div>

            {resolvedCode && (
              <div className="p-3 bg-emerald-950/40 border border-emerald-600/40 rounded-xl text-xs text-emerald-300">
                ✅ الكود المعتمد بعد الحل: <span className="font-mono font-bold">{resolvedCode}</span>
              </div>
            )}

            <div className="flex flex-wrap gap-2 pt-2 justify-end">
              <button
                onClick={() => setResolvedCode("const theme = 'dark';")}
                className="px-3 py-1.5 bg-blue-600/30 text-blue-300 hover:bg-blue-600/40 border border-blue-500/40 rounded-xl text-xs font-bold transition"
              >
                Accept Current (dark)
              </button>
              <button
                onClick={() => setResolvedCode("const theme = 'system';")}
                className="px-3 py-1.5 bg-emerald-600/30 text-emerald-300 hover:bg-emerald-600/40 border border-emerald-500/40 rounded-xl text-xs font-bold transition"
              >
                Accept Incoming (system)
              </button>
              <button
                onClick={() => setResolvedCode("const theme = userPref || 'system';")}
                className="px-3 py-1.5 bg-purple-600/30 text-purple-300 hover:bg-purple-600/40 border border-purple-500/40 rounded-xl text-xs font-bold transition"
              >
                Accept Both (دمج ذكي)
              </button>
              <button
                onClick={() => {
                  if (resolvedCode) {
                    setShowConflictModal(false);
                    setResolvedCode(null);
                  }
                }}
                disabled={!resolvedCode}
                className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition shadow"
              >
                تأكيد الإيداع وإنهاء الدمج
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
`
  },
  infographic: {
    title: "خارطة منظومة Git وGitHub والعمل الجماعي الاحترافي",
    subtitle: "المسار الهندسي الموحد من تهيئة المستودع والتحكم بالفروع إلى مراجعة الكود وأتمتة الجودة",
    nodes: [
      {
        id: "git-core",
        title: "1. أساسيات Git والمناطق الثلاث",
        description: "مجلد العمل ➔ منطقة Staging ➔ المستودع التاريخي .git وإيداعات ذرية مشفرة.",
        badge: "Git Engine"
      },
      {
        id: "branches-merge",
        title: "2. الفروع وحل التعارضات",
        description: "مؤشر HEAD والتفريع السريع Fast-Forward وحل Merge Conflicts باحترافية وهدوء.",
        badge: "Branching & Merge"
      },
      {
        id: "github-collab",
        title: "3. التعاون السحابي وPRs",
        description: "مزامنة SSH وطلبات السحب Pull Requests ومراجعة الشيفرة بمقترحات suggestions.",
        badge: "GitHub Workflow"
      },
      {
        id: "standards-hooks",
        title: "4. معايير الجودة وGit Hooks",
        description: "Conventional Commits وESLint وPrettier مع أتمتة Husky وlint-staged المحلية.",
        badge: "Code Quality"
      },
      {
        id: "architecture-agile",
        title: "5. توثيق ADRs وسبرنتات Agile",
        description: "توثيق القرارات المعمارية في سجلات رسمية وإدارة وتيرة التطوير الرشيقة.",
        badge: "Agile & Docs"
      }
    ]
  }
};

export default section27Meta;

