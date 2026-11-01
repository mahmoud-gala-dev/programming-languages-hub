import React, { useState, useMemo, useEffect } from 'react';
import { 
  X, Search, Sparkles, Terminal, Palette, Wrench, 
  Keyboard, Copy, Check, Zap, ArrowRight, Lightbulb, BookOpen
} from 'lucide-react';

const SHORTCUTS_DATA = [
  // 1. AI Core & Strategy
  {
    id: 'plan',
    command: '/plan',
    category: 'ai',
    categoryLabel: 'تخطيط وهيكلة',
    title: 'التخطيط المعماري المتأني',
    icon: Sparkles,
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    baladi: 'لما تيجي تعمل تعديل تقيل في الكود، متدخلش تكسر الدنيا! بتكتب /plan عشان الـ AI يقعد يفكر ويرسم خريطة تفصيلية بالملفات والسطور قبل ما يلمس أي سطر كود، وتوافق عليها إنت الأول.',
    promptExample: '/plan عاوزين ننقل نظام حفظ التوكن من LocalStorage لـ HttpOnly Cookies ونربطه مع Axios Interceptor',
    codeSnippet: `// الخطة بترسم التعديلات خطوة بخطوة بالـ Diffs والـ Tests قبل التنفيذ
export const api = axios.create({
  baseURL: '/api/v1',
  withCredentials: true,
});`
  },
  {
    id: 'goal',
    command: '/goal',
    category: 'ai',
    categoryLabel: 'مهام مستمرة',
    title: 'المهمة المستمرة حتى الاكتمال 100%',
    icon: Zap,
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    baladi: 'عارف لما تدّي للمبرمج مهمة وتقوله "متروحش إلا لما تخلصها بنسبة 100%"؟ هو ده بالظبط! بيفضل شغال ويصلح أي Error بنفسه وميوقفش لحد ما الهدف يكتمل تماماً.',
    promptExample: '/goal اكتبلي اختبارات شاملة لكل الفانكشنز اللي في مجلد src/utils/ وافضل شغال لحد ما npm test ينجح 100%',
    codeSnippet: `// الـ AI يواصل فحص الاختبارات وتصحيح الأخطاء تلقائياً حتى ظهور:
// <!-- GOAL_COMPLETE -->`
  },
  {
    id: 'boost',
    command: '/boost',
    category: 'ai',
    categoryLabel: 'تحليل عميق',
    title: 'التفكير الاستراتيجي والتحقق الصارم',
    icon: Lightbulb,
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    baladi: 'عصر دماغ وتفكير تكتيكي! في المسائل المعقدة اللي فيها احتمالات غلط أو Race Conditions أو تسريب بيانات، بيفكر من كذا زاوية قبل ما يقترح الحل.',
    promptExample: '/boost عاوزين حل لمشكلة الـ Race Condition في حجز التذاكر بحيث نضمن إن المقعد ميتباعش مرتين لليوزرز المتزامنين',
    codeSnippet: `BEGIN TRANSACTION;
SELECT * FROM Seats WHERE Id = @SeatId AND IsBooked = 0 FOR UPDATE;
UPDATE Seats SET IsBooked = 1, BookedBy = @UserId WHERE Id = @SeatId;
COMMIT TRANSACTION;`
  },
  {
    id: 'teamwork',
    command: '/teamwork',
    category: 'ai',
    categoryLabel: 'فرق متوازية',
    title: 'فريق الوكلاء الذاتيين المتوازيين',
    icon: Terminal,
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    baladi: 'بدل ما تستنى واحد بس يخلص، ده بيشغل كذا وكيل AI مع بعض؛ واحد ماسك الـ Frontend، وواحد ماسك الـ Backend، وواحد بيكتب الـ Tests بالتوازي.',
    promptExample: '/teamwork ابنولي صفحة User Profile كاملة: وكيل يجهز الـ Prisma Schema والـ API، ووكيل تاني يبني الـ React Components',
    codeSnippet: `// وكيل 1: schema.prisma + Express Routes
// وكيل 2: ProfileCard.jsx + Tailwind UI`
  },
  {
    id: 'grill-me',
    command: '/grill-me',
    category: 'ai',
    categoryLabel: 'استجواب هندسي',
    title: 'المقابلة الاستقصائية وحسم القرارات',
    icon: Sparkles,
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    baladi: 'اسألني قبل ما أتورط! الـ AI يتقمص دور Senior Architect ويسألك أسئلة ذكية عن حجم الداتا، الترافيك، والـ Scalability عشان تختاروا الـ Stack الصح من الأول.',
    promptExample: '/grill-me استجوبني عشان نحدد أفضل داتابيز لمشروع منصة تجارة إلكترونية فيها مزادات حية وتغييرات أسعار سريعة',
    codeSnippet: `? ما هو معدل القراءة مقابل الكتابة المتوقع في الثانية؟
? هل تحتاج إلى دعم ACID transactions صارمة أم يكفي eventual consistency؟`
  },
  {
    id: 'compact',
    command: '/compact',
    category: 'ai',
    categoryLabel: 'إدارة الذاكرة',
    title: 'تنظيف وضغط سياق المحادثة',
    icon: BookOpen,
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    baladi: 'لما تلاقي الشات طول وبقى فيه 100 رسالة وبدأ الـ AI يرد ببطء، بتكتب /compact يقوم يلخص القرارات المهمة ويفضي الذاكرة في ثانية عشان تكملوا بسرعة.',
    promptExample: '/compact لخصلي كل القرارات والتعديلات اللي اتفقنا عليها وفضي الذاكرة عشان نكمل شغل بسرعة',
    codeSnippet: `// يتم تلخيص المحادثة وضغطها مع الاحتفاظ بكافة المتغيرات وقرارات التصميم`
  },

  // 2. Automation & Web
  {
    id: 'browser',
    command: '/browser',
    category: 'automation',
    categoryLabel: 'أتمتة وويب',
    title: 'المتصفح التفاعلي وفحص الويب الحي',
    icon: Terminal,
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    baladi: 'الـ AI معاه متصفح حقيقي يقدر يفتحه، يكتب URL، يدوس على الزراير، ياخد Screenshots، ويشوف أخطاء الـ Console والـ Network عشان يتأكد إن كل حاجة شغالة 100%.',
    promptExample: '/browser ادخل على http://localhost:5173/lesson/react واضغط على زرار تحميل التلخيص وشوفلي هل بيحصل Error في الـ Console',
    codeSnippet: `await page.goto('http://localhost:5173');
await page.click('#download-summary-btn');
const errors = await page.evaluate(() => window.consoleErrors);`
  },
  {
    id: 'schedule',
    command: '/schedule',
    category: 'automation',
    categoryLabel: 'أتمتة وويب',
    title: 'جدولة المؤقت والمهام الدورية (Cron)',
    icon: Zap,
    badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
    baladi: 'منبه ومساعد شخصي للمطور! يفضل شغال في الخلفية ويصحي نفسه بعد وقت محدد (مثلاً: "فكرني بعد ساعتين أعمل Deploy"، أو "كل نص ساعة شيك على الـ API").',
    promptExample: '/schedule كل 30 دقيقة شيكلي على لوجات الـ Server ونبهني لو ظهر أي خطأ 500',
    codeSnippet: `// Cron: */30 * * * *
// يتم تشغيل التحقق تلقائياً في الخلفية وإرسال تقرير عند أي طارئ`
  },
  {
    id: 'automation',
    command: '/automation',
    category: 'automation',
    categoryLabel: 'أتمتة وويب',
    title: 'بناء الأتمتة المخصصة للروتين',
    icon: Wrench,
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    baladi: 'دليل خطوة بخطوة عشان تبني سكريبت شغال في الخلفية يعمل الشغل الممل المتكرر بدالك (زي ضغط الصور، تحويل الـ JSON، أو تنظيف ملفات الكاش القديمة).',
    promptExample: '/automation ابنيلنا سكريبت يراقب فولدر public/uploads وأي صورة تنزل يحولها فوراً لـ WebP بنسبة جودة 85%',
    codeSnippet: `chokidar.watch('public/uploads').on('add', async (path) => {
  await sharp(path).webp({ quality: 85 }).toFile(getWebpPath(path));
});`
  },
  {
    id: 'learn',
    command: '/learn',
    category: 'automation',
    categoryLabel: 'أتمتة وويب',
    title: 'تثبيت وتوريث المعرفة والقواعد',
    icon: Lightbulb,
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    baladi: 'احفظ القاعدة دي ومتغلطش فيها تاني! لما تلاحظ إن الـ AI بيستخدم طريقة إنت مش حاببها، بتكتب /learn فيحفظ القاعدة دي في إعدادات المشروع للأبد.',
    promptExample: '/learn في المشروع ده دايماً نستخدم Lucide React للأيقونات، وممنوع استخدام inline SVG أو أي مكتبة تانية',
    codeSnippet: `// تم حفظ القاعدة في .gemini/rules/AGENTS.md
// سيتم الالتزام بها تلقائياً في جميع المحادثات القادمة`
  },
  {
    id: 'plugin',
    command: '/plugin',
    category: 'automation',
    categoryLabel: 'أتمتة وويب',
    title: 'مدير الإضافات ومزودات MCP',
    icon: Wrench,
    badgeColor: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30',
    baladi: 'متجر التطبيقات للـ AI! تقدر تضيف وتفعل مزودات خارجية زي Canva للتصاميم، أو Chrome DevTools للاختبار، أو Atlassian Jira لمتابعة التاسكات.',
    promptExample: '/plugin وريلي الإضافات المتاحة لتوليد وتعديل التصاميم التلقائية في مشروعنا',
    codeSnippet: `// إدارة الإضافات وحزم الـ MCP عبر أوامر مباشرة`
  },

  // 3. UI & Craft Skills
  {
    id: 'ui-skills-root',
    command: '/ui-skills-root',
    category: 'ui',
    categoryLabel: 'واجهات وتصميم',
    title: 'بوابة توجيه مهارات الواجهات',
    icon: Palette,
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    baladi: 'المعلم الكبير بتاع الواجهات! لما تكون عندك مشكلة في الـ UI ومش عارف تستخدم مهارة إيه، بتكتب الأمر ده وهو يختار أصغر مهارة وأدقها ويحل المشكلة.',
    promptExample: '/ui-skills-root عاوزين نحسن شكل كروت الكورسات في الصفحة الرئيسية عشان تبان عصرية وأنيقة',
    codeSnippet: `// يقوم بفحص الهدف وتوجيهه تلقائياً نحو:
// baseline-ui أو frontend-design أو fixing-accessibility`
  },
  {
    id: 'baseline-ui',
    command: '/baseline-ui',
    category: 'ui',
    categoryLabel: 'واجهات وتصميم',
    title: 'التلميع السريع وضبط الهيراركي',
    icon: Palette,
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    baladi: 'المكواة السحرية! لما تلاقي الصفحة شكلها مفركش، العناوين مش متناسقة في الأحجام، والمسافات عشوائية، ده بيدخل ينظفها في ثواني بدون ما يغير الألوان أو يكسر الهوية.',
    promptExample: '/baseline-ui ظبط المسافات الداخلية والتسلسل الهرمي في كارت عرض الدرس LessonViewer',
    codeSnippet: `// ✅ تطبيق شبكة الـ 8pt والمسافات المتوازنة:
<div className="p-6 my-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
  <h3 className="text-xl font-bold text-white">عنوان الدرس</h3>
  <p className="text-sm text-slate-400 leading-relaxed">الوصف هنا</p>
</div>`
  },
  {
    id: 'frontend-design',
    command: '/frontend-design',
    category: 'ui',
    categoryLabel: 'واجهات وتصميم',
    title: 'التصميم المميز وغير النمطي',
    icon: Sparkles,
    badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    baladi: 'إبداع بره الصندوق! بدل ما الـ AI يطلّعلك صفحة شبه قوالب الـ Bootstrap الميتة، بتستخدم الأمر ده عشان يعملك واجهة ليها روح وطابع فريد (Cyberpunk أو Glassmorphism).',
    promptExample: '/frontend-design صمملي كارت إحصائيات لعدد الطلاب بطابع Cyberpunk مع نيون ولمعة زجاجية خفيفة',
    codeSnippet: `// تصميم مخصص بعيداً عن القوالب النمطية الجاهزة`
  },
  {
    id: 'create-design-md',
    command: '/create-design-md',
    category: 'ui',
    categoryLabel: 'واجهات وتصميم',
    title: 'توثيق نظام التصميم DESIGN.md',
    icon: BookOpen,
    badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    baladi: 'بيمر على كود المشروع كله، يستخرج درجات الألوان اللي بتستخدمها، أنواع الخطوط، مقاسات الـ Radius والـ Shadows، ويحفظهم في ملف DESIGN.md.',
    promptExample: '/create-design-md استخرجلي كل الـ Design Tokens والألوان المستخدمة في المشروع واعملي بيها ملف DESIGN.md',
    codeSnippet: `// يولد ملف DESIGN.md متكامل يحتوي على كافة Tokens الواجهة`
  },
  {
    id: 'fixing-accessibility',
    command: '/fixing-accessibility',
    category: 'ui',
    categoryLabel: 'واجهات وتصميم',
    title: 'إمكانية الوصول والتباين (A11y)',
    icon: Wrench,
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    baladi: 'عشان موقعك يبقى متاح لكل الناس، بما فيهم ضعاف البصر ومستخدمي قارئات الشاشة والكيبورد. بيعدل تباين الألوان الباهتة ويضيف aria-label و focus states.',
    promptExample: '/fixing-accessibility افحصلي كل أزرار الشريط العلوي والـ Sidebar وضيف الـ aria-labels وظبط الـ Focus',
    codeSnippet: `<button 
  onClick={toggleSearch}
  aria-label="فتح نافذة البحث السريع"
  className="focus:outline-none focus:ring-2 focus:ring-sky-500"
>
  <Search aria-hidden="true" />
</button>`
  },
  {
    id: 'fixing-motion-performance',
    command: '/fixing-motion-performance',
    category: 'ui',
    categoryLabel: 'واجهات وتصميم',
    title: 'علاج تعثر وبطء الأنيميشن (60FPS)',
    icon: Zap,
    badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    baladi: 'علاج الـ Lag! لما تلاقي الحركة بتعلثم وتثقل الموبايل، الأمر ده بيحول كل الحركات لـ transform و opacity اللي بتشتغل مباشرة على كارت الشاشة (GPU) بسلاسة فائقة.',
    promptExample: '/fixing-motion-performance عدل الأنيميشن بتاع الـ Mobile Drawer عشان يفتح ويفل بسلاسة 60FPS بدون تقطيع',
    codeSnippet: `.drawer {
  transform: translateX(100%);
  will-change: transform;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}`
  },

  // 4. Clean Code & Ponytail
  {
    id: 'ponytail-audit',
    command: '/ponytail-audit',
    category: 'code',
    categoryLabel: 'تنظيف الأكواد',
    title: 'فحص المستودع لاكتشاف التعقيد الزائد',
    icon: Wrench,
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    baladi: 'كشف الترهلات والمكتبات العيانة! بيمسح الكود بتاعك ويطلعلك قايمة بالحاجات اللي تم كتابتها بتعقيد زائد ملوش لازمة، أو مكتبات كان ممكن تتبدل بسطرين JS أصليين.',
    promptExample: '/ponytail-audit فحص شامل للمشروع عشان نشوف إيه اللي نقدر نحذفه ونبسطه ونوفر حجم الباندل',
    codeSnippet: `// تقرير شامل بالترهلات البرمجية والحلول البديلة`
  },
  {
    id: 'ponytail-review',
    command: '/ponytail-review',
    category: 'code',
    categoryLabel: 'تنظيف الأكواد',
    title: 'مراجعة الأكواد التبسيطية والحذف',
    icon: Terminal,
    badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    baladi: 'عكس الـ Code Review العادي اللي بيدور على أخطاء؛ ده بيدور على: "إيه اللي ممكن نمسحه وميأثرش على الوظيفة؟" زي استبدال مكتبة lodash بـ Vanilla JS مدمج.',
    promptExample: '/ponytail-review راجع التعديلات الأخيرة واحذف أي كود متعقد أو مكتبة ليها بديل مدمج في اللغة',
    codeSnippet: `// ❌ قبل: import cloneDeep from 'lodash/cloneDeep';
// ✅ بعد: سطر أصلي بدون مكتبات:
const copy = structuredClone(originalData);`
  },
  {
    id: 'ponytail-gain',
    command: '/ponytail-gain',
    category: 'code',
    categoryLabel: 'تنظيف الأكواد',
    title: 'لوحة قياس أثر التبسيط والتوفير',
    icon: Lightbulb,
    badgeColor: 'bg-lime-500/10 text-lime-400 border-lime-500/30',
    baladi: 'لوحة النتيجة السريعة! بتوريك إحنا كسبنا إيه بعد التبسيط: مسحنا كام سطر كود، وفرنا كام ميجابايت من حجم الموقع، وسرعة التحميل زادت بقد إيه.',
    promptExample: '/ponytail-gain',
    codeSnippet: `// Scoreboard: Less Code, Less Cost, More Speed`
  },
  {
    id: 'ponytail-debt',
    command: '/ponytail-debt',
    category: 'code',
    categoryLabel: 'تنظيف الأكواد',
    title: 'حصر وتتبع الديون الفنية والمهام المؤجلة',
    icon: BookOpen,
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    baladi: 'عارف تعليقات TODO اللي بننساها وتفضل سنين في الكود؟ الأمر ده بيجمع كل الـ ponytail comments في الكود في لستة منظمة عشان تتراجع ومتروحش في داهية.',
    promptExample: '/ponytail-debt طلعلي كل التاسكات والديون الفنية المؤجلة في الكود',
    codeSnippet: `// ponytail: defer pagination until table exceeds 500 rows`
  },

  // 5. Platform Hotkeys
  {
    id: 'hotkeys-1-6',
    command: '[ 1 ] - [ 6 ]',
    category: 'keys',
    categoryLabel: 'اختصارات المنصة',
    title: 'التظليل النيون الفوري أثناء المذاكرة',
    icon: Keyboard,
    badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    baladi: 'وإنت بتقرأ الدرس أو بتذاكر الكود، حدد أي جملة ودوس على رقم من 1 لـ 6 على الكيبورد، هيتظلل فوراً بلون نيون دلالي ويتحفظ في جهازك بدون ما تحتاج حتى تفتح الماوس!',
    promptExample: 'اضغط [1] للأصفر (تعاريف)، [2] للأخضر (ممارسات)، [3] للسماوي (أمثلة)، [4] للبنفسجي (أسئلة)، [5] للوردي (تحذيرات)، [6] للبرتقالي (مراجعة).',
    codeSnippet: `// 1: Yellow (مفهوم أساسي)
// 2: Green (ميزة أو أفضل ممارسة)
// 3: Cyan (شرح عملي)
// 4: Purple (سؤال وبحث)
// 5: Pink (تحذير أو خطأ شائع)
// 6: Orange (مهم للمذاكرة)`
  },
  {
    id: 'hotkey-esc',
    command: 'ESC',
    category: 'keys',
    categoryLabel: 'اختصارات المنصة',
    title: 'الخروج السريع وإغلاق النوافذ',
    icon: Keyboard,
    badgeColor: 'bg-slate-500/10 text-slate-400 border-slate-500/30',
    baladi: 'إغلاق فوري بدون تأخير لأي نافذة منبثقة (استوديو الخطوط، شريط التظليل، استوديو الأكواد ملء الشاشة، أو نافذة الاختصارات).',
    promptExample: 'اضغط ESC في أي وقت لإغلاق النوافذ والرجوع لمتابعة الدرس',
    codeSnippet: `useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [onClose]);`
  },
  {
    id: 'hotkey-guide',
    command: 'Ctrl + /  أو  ?',
    category: 'keys',
    categoryLabel: 'اختصارات المنصة',
    title: 'فتح دليل وموسوعة الاختصارات',
    icon: Keyboard,
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    baladi: 'في أي وقت وإنت شغال على المنصة، اضغط على زرار ? أو Ctrl + / عشان تفتح النافذة التفاعلية دي وتبحث عن اللي عاوزه وتنسخ برومبته بنقرة واحدة!',
    promptExample: 'اضغط Ctrl + / لفتح هذا الدليل في أي وقت',
    codeSnippet: `// Toggle Shortcuts Guide Modal`
  }
];

const CATEGORIES = [
  { id: 'all', label: 'الكل' },
  { id: 'ai', label: '🧠 ذكاء وتخطيط' },
  { id: 'automation', label: '⚡ أتمتة وويب' },
  { id: 'ui', label: '🎨 واجهات وتصميم' },
  { id: 'code', label: '🧹 تنظيف الكود' },
  { id: 'keys', label: '⌨️ كيبورد المنصة' }
];

export default function ShortcutsGuideModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedId, setCopiedId] = useState(null);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter items
  const filteredShortcuts = useMemo(() => {
    return SHORTCUTS_DATA.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = 
        !q ||
        item.command.toLowerCase().includes(q) ||
        item.title.toLowerCase().includes(q) ||
        item.baladi.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        item.promptExample.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [searchQuery, activeCategory]);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-200 h-dvh min-h-dvh"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-5xl bg-slate-900/95 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-right"
        style={{ maxHeight: '90dvh', height: '90dvh' }}
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
              <Sparkles className="size-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2 text-balance">
                <span>موسوعة الاختصارات وأوامر الذكاء الاصطناعي</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 font-mono tabular-nums">
                  بالعامية المصرية
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5 text-pretty">
                كل الـ Slash Commands واختصارات التطوير مشروحة بالبلدي مع كود عملي وبرومبت جاهز للنسخ
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="إغلاق نافذة موسوعة الاختصارات"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition cursor-pointer"
            title="إغلاق (ESC)"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Search & Categories Bar */}
        <div className="p-4 border-b border-slate-800/80 bg-slate-900/40 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between flex-shrink-0">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="size-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن اختصار، أمر، أو كلمة (مثال: plan, baseline, تظليل)..."
              className="w-full pl-4 pr-10 py-2 bg-slate-950/70 border border-slate-700/60 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                aria-label="مسح نص البحث"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                مسح
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                    active 
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20' 
                      : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Shortcuts Content List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredShortcuts.length === 0 ? (
            <div className="py-16 text-center text-slate-400 space-y-3">
              <Search className="size-12 mx-auto text-slate-600 opacity-60" />
              <p className="text-base font-semibold">لم يتم العثور على أي اختصار يطابق "{searchQuery}"</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="text-xs text-sky-400 hover:underline cursor-pointer"
              >
                إعادة ضبط البحث والفلاتر
              </button>
            </div>
          ) : (
            filteredShortcuts.map((item) => {
              const Icon = item.icon;
              const isCopied = copiedId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-4 sm:p-5 transition flex flex-col gap-3 group"
                >
                  {/* Top Bar of Card */}
                  <div className="flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-300">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span 
                            className={`font-mono text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded-md border tabular-nums ${item.badgeColor}`}
                            dir="ltr"
                            style={{ direction: 'ltr' }}
                          >
                            {item.command}
                          </span>
                          <h3 className="text-base font-bold text-white text-balance">
                            {item.title}
                          </h3>
                        </div>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {item.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Copy Button */}
                    <button
                      onClick={() => copyToClipboard(item.promptExample, item.id)}
                      aria-label={`نسخ برومبت ${item.command}`}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition cursor-pointer"
                      title="نسخ صيغة البرومبت للـ AI"
                    >
                      {isCopied ? (
                        <>
                          <Check className="size-3.5 text-emerald-400" />
                          <span className="text-emerald-400">تم النسخ!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3.5 text-slate-400 group-hover:text-white" />
                          <span>نسخ البرومبت</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Baladi Explanation */}
                  <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl p-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    <span className="text-amber-400 font-bold ml-1.5">💡 بالبلدي والمصري:</span>
                    {item.baladi}
                  </div>

                  {/* Prompt & Code Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-1">
                    {/* Prompt Box */}
                    <div className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-3 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                        <span className="font-semibold text-sky-400">🗣️ إزاي تقولهالو في الشات:</span>
                      </div>
                      <p className="text-xs text-slate-200 font-mono bg-slate-950/70 p-2.5 rounded-lg border border-slate-800 leading-normal select-all">
                        {item.promptExample}
                      </p>
                    </div>

                    {/* Code Snippet Box */}
                    {item.codeSnippet && (
                      <div className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-3">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                          <span className="font-semibold text-emerald-400">💻 مثال الكود:</span>
                        </div>
                        <pre 
                          className="text-[11px] text-slate-300 font-mono bg-slate-950/70 p-2.5 rounded-lg border border-slate-800 overflow-x-auto text-left"
                          dir="ltr"
                          style={{ direction: 'ltr' }}
                        >
                          <code>{item.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between text-xs text-slate-400 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">ESC</span>
            <span>للإغلاق في أي وقت</span>
          </div>
          <div className="text-slate-500 hidden sm:block">
            منصة مجمع لغات البرمجة والذكاء الاصطناعي &bull; {SHORTCUTS_DATA.length} اختصار وأمر جاهز
          </div>
        </div>
      </div>
    </div>
  );
}

