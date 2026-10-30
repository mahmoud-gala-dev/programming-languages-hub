// src/data/sections/section9/section9Meta.js
// بيانات القسم 9: الملخص، جدول المرجع السريع، والمشروع المصغر

export const SECTION_9_META = {
  id: "section-9",
  title: "القسم 9: تنسيق واجهات React",
  englishTerm: "Styling React Applications, Tailwind CSS & Design Systems",
  description: "المرجع الشامل لهندسة وتصميم واجهات React الحديثة: المقارنة المعمارية بين CSS Modules و Tailwind CSS، دمج الأصناف بـ clsx و tailwind-merge، بناء التخطيطات المعقدة والتصاميم المتجاوبة بنهج Mobile-First، تفعيل الوضع الداكن، استكشاف ثورة Headless UI و shadcn/ui و Radix UI، وبناء نظام تصميم احترافي متكامل مع دعم فطري للاتجاه العربي RTL.",
  summary: [
    "العزل النطاقي بـ CSS Modules: يحل مشكلة تضارب الأسماء العامة بتوليد هويات فريدة مشفرة للكلاسات أثناء البناء، مع الحفاظ على حرية كتابة CSS تقليدي متقدم.",
    "فلسفة Utility-First في Tailwind CSS: توفير مئات الأصناف المعيارية الصغيرة لتصميم الواجهات مباشرة في JSX، مما يلغي عناء التفكير في أسماء الكلاسات ويحقق حجماً بالغ الصغر في الإنتاج عبر محرك JIT.",
    "دالة الدمج المعيارية cn() = clsx + tailwind-merge: المعيار الأهم في React الحديثة لتنظيف الشروط والقيم الزائفة وحل تضاربات فئات Tailwind المتعارضة تلقائياً.",
    "التصميم المتجاوب بنهج Mobile-First: الكلاسات المجردة تطبق على الهواتف المحمولة أولاً، وتستخدم البادئات (sm:, md:, lg:, xl:) لترقية وتكييف التصميم للشاشات الأكبر.",
    "معمارية الوضع الداكن (Dark Mode): استخدام darkMode: 'class' مع بادئة dark: يمنحك تحكماً برمجياً كاملاً بالتبديل اليدوي وحفظ تفضيلات المستخدم في الذاكرة المحلية.",
    "ثورة المكونات غير المقيدة بالتنسيق (Headless UI): مكتبات مثل Radix UI تقدم منطق التفاعل وحبس التركيز وسهولة الوصول (a11y) بنقاء تام دون فرض سطر CSS واحد.",
    "نموذج ملكية الكود في shadcn/ui: نسخ الكود المصدري للمكون مباشرة داخل مجلد مشروعك مع Tailwind و Radix بدلاً من تقييده داخل حزم npm المغلقة.",
    "الاتجاه العربي الفطري (RTL-First): الاعتماد الحصري على الخصائص المنطقية (ms-, me-, ps-, pe-) بدلاً من الاتجاهات الفيزيائية القديمة (left/right) لدعم ثنائي اللغة ببراعة."
  ],
  cheatSheet: [
    {
      concept: "استيراد ملف CSS عام Global Import",
      syntax: "import './styles.css';",
      note: "يؤثر على شجرة DOM كاملة بدون أي عزل؛ ممتاز لـ Reset وضبط الخطوط و :root فقط."
    },
    {
      concept: "استيراد CSS Modules Scoped",
      syntax: "import styles from './Button.module.css';\n<button className={styles.btn}>...",
      note: "يولد أسماء كلاسات فريدة ومشفرة لمنع تضارب الأسماء بين المكونات بنسبة 100%."
    },
    {
      concept: "التنسيقات المضمنة Inline Styles",
      syntax: "<div style={{ width: `${percent}%`, backgroundColor: '#4f46e5' }} />",
      note: "تكتب ككائن جافاسكريبت بنمط camelCase؛ مثالية للقيم المحسوبة ديناميكياً أثناء الرندر."
    },
    {
      concept: "دالة الدمج المعيارية cn Utility",
      syntax: "import clsx from 'clsx';\nimport { twMerge } from 'tailwind-merge';\nexport const cn = (...i) => twMerge(clsx(i));",
      note: "تجمع مزايا clsx في تنظيف الشروط ومزايا tailwind-merge في حل التضاربات المتعارضة."
    },
    {
      concept: "مقاييس المسافات في Tailwind",
      syntax: "p-4 = 16px (4 * 4px)\ngap-6 = 24px (6 * 4px)",
      note: "تعتمد معادلة الضرب في 4 بكسل لضمان تناغم المسافات في كافة أرجاء التطبيق."
    },
    {
      concept: "تخطيط Flexbox التلقائي",
      syntax: "<div className=\"flex items-center justify-between gap-4\">...</div>",
      note: "محاذاة العناصر الخطية في بعد واحد (صفوف أو أعمدة) مع تباعد متسق عبر gap."
    },
    {
      concept: "تخطيط الشبكة CSS Grid",
      syntax: "<div className=\"grid grid-cols-12 gap-4\">\n  <div className=\"col-span-8\">...</div>\n</div>",
      note: "توزيع ثنائي الأبعاد في شبكة معمارية متعددة الأعمدة مثالية للوحات التحكم."
    },
    {
      concept: "نقاط كسر الشاشات Mobile-First",
      syntax: "<div className=\"w-full md:w-1/2 lg:w-1/3\">...</div>",
      note: "جوال أولاً بدون بادئة -> md: للشاشات فوق 768px -> lg: للشاشات فوق 1024px."
    },
    {
      concept: "الحالات التفاعلية Hover & Active",
      syntax: "<button className=\"hover:bg-indigo-500 active:scale-95 transition-all\">",
      note: "تغذية راجعة فورية: تفتيح اللون عند التحويم وتصغير بنسبة 95% عند الضغط باللمس."
    },
    {
      concept: "حلقات التركيز لسهولة الوصول a11y",
      syntax: "<button className=\"focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none\">",
      note: "تظهر حلقة التركيز فقط عند التنقل بمفتاح Tab في لوحة المفاتيح وتختفي عند النقر بالفأرة."
    },
    {
      concept: "تفاعل المجموعات group-hover",
      syntax: "<div className=\"group\">\n  <span className=\"group-hover:rotate-12 transition-transform\">🚀</span>\n</div>",
      note: "تحريك وتغيير شكل العناصر الفرعية عند تحويم الفأرة فوق الحاوية الأب في أي مكان."
    },
    {
      concept: "تفعيل المظهر الداكن dark: modifier",
      syntax: "<div className=\"bg-white text-slate-900 dark:bg-slate-950 dark:text-white\">",
      note: "يتفعل تلقائياً عند وجود كلاس 'dark' في عنصر <html> الأعلى في المتصفح."
    },
    {
      concept: "توسيع السمات في tailwind.config.js",
      syntax: "theme: {\n  extend: {\n    colors: { brand: '#6366f1' }\n  }\n}",
      note: "استخدم extend دائماً للحفاظ على ألوان وخطوط ومسافات Tailwind الافتراضية."
    },
    {
      concept: "منطق Headless UI بدون تنسيق",
      syntax: "<Dialog.Root>\n  <Dialog.Trigger>افتح</Dialog.Trigger>\n  <Dialog.Portal><Dialog.Content className=\"...\">...",
      note: "منطق معقد وسهولة وصول كاملة (Radix UI) مع حرية تصميم وتنسيق مطلقة للمطور."
    },
    {
      concept: "أداة توليد الأشكال CVA",
      syntax: "const btn = cva('base', { variants: { size: { sm: '...', lg: '...' } } });",
      note: "مكتبة Class Variance Authority لإدارة تنوعات وأشكال المكونات بنقاء نوعي Type-Safe."
    },
    {
      concept: "تظليل النوافذ Backdrop Blur",
      syntax: "<div className=\"fixed inset-0 bg-black/60 backdrop-blur-sm z-50\">",
      note: "تغطية الشاشة كاملة بتشويش زجاجي ناعم لعزل النوافذ المنبثقة والقوائم الجانبية."
    },
    {
      concept: "عزل النقر الداخلي stopPropagation",
      syntax: "<div onClick={e => e.stopPropagation()}>\n  محتوى النافذة\n</div>",
      note: "يمنع صعود الحدث للخلفية المعتمة حتى لا تُغلق النافذة عند النقر داخل محتواها."
    },
    {
      concept: "الهيكل العظمي للتحميل Skeleton Loading",
      syntax: "<div className=\"w-full h-8 bg-slate-800 rounded-xl animate-pulse\" />",
      note: "محاكاة أبعاد المكون الحقيقي بكتل رمادية نابضة لمنع قفز العناصر (Zero CLS)."
    },
    {
      concept: "المسافات المنطقية للاتجاه العربي RTL",
      syntax: "ms-4 (Margin Inline Start) | pe-3 (Padding Inline End)",
      note: "تتغير تلقائياً بين اليمين واليسار وفق خاصية dir='rtl' أو 'ltr' دون تعديل الكود."
    },
    {
      concept: "عكس اتجاه الأسهم في العربية",
      syntax: "<span className=\"rtl:-scale-x-100 transition-transform\">➔</span>",
      note: "تقلب أيقونات الأسهم تلقائياً لتشير لليسار في الواجهات العربية دون صور إضافية."
    }
  ],
  miniProject: {
    id: "mini-project-section-9",
    title: "منصة DesignCraft Studio: استوديو أنظمة التصميم وواجهات RTL الحديثة",
    englishTitle: "DesignCraft Studio: Interactive Design System, Component Sandbox & RTL-First Suite",
    description: "استوديو هندسي وبصري متكامل يجمع كافة مهارات القسم التاسع في تطبيق واحد فائق الإبهار: محرك سمات حي لتبديل لوحات الألوان المركزية (Design Tokens)، مبدل الوضع الداكن/المشرق اللحظي، مبدل الاتجاه العربي (RTL/LTR) مع تفعيل الخصائص المنطقية وانقلاب الأسهم، صندوق اختبار المكونات المعيارية (أزرار بحالات التحميل و active:scale-95، بطاقات بارتقاء ثلاثي الأبعاد، محاكي Skeleton Loading تفاعلي، نافذة منبثقة زجاجية بـ backdrop-blur وعزل النقر، ونظام إشعارات التوست الحركي).",
    code: `import React, { useState, useEffect } from "react";

// ==========================================
// 1. تعريف رموز أنظمة التصميم (Design Tokens)
// ==========================================
const THEME_PALETTES = {
  indigo: { name: "البنفسجي الملكي (Indigo)", primary: "bg-indigo-600 hover:bg-indigo-500", text: "text-indigo-400", border: "border-indigo-500/40", shadow: "shadow-indigo-950/50" },
  emerald: { name: "الزمردي الحيوي (Emerald)", primary: "bg-emerald-600 hover:bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/40", shadow: "shadow-emerald-950/50" },
  amber: { name: "العنبري الدافئ (Amber)", primary: "bg-amber-600 hover:bg-amber-500", text: "text-amber-400", border: "border-amber-500/40", shadow: "shadow-amber-950/50" },
  rose: { name: "الياقوتي الجريء (Rose)", primary: "bg-rose-600 hover:bg-rose-500", text: "text-rose-400", border: "border-rose-500/40", shadow: "shadow-rose-950/50" }
};

// ==========================================
// 2. المكون الرئيسي: DesignCraft Studio
// ==========================================
export function DesignCraftStudio() {
  // حالة السمة اللونية المركزية
  const [activePalette, setActivePalette] = useState("indigo");
  const theme = THEME_PALETTES[activePalette];

  // حالة الوضع الداكن / المشرق
  const [isDarkMode, setIsDarkMode] = useState(true);

  // حالة اتجاه المستند (RTL vs LTR)
  const [docDir, setDocDir] = useState("rtl");

  // حالات النوافذ والتحميل والإشعارات
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSkeleton, setIsSkeleton] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [activeTab, setActiveTab] = useState("components"); // components | tokens | responsive

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  return (
    <div
      dir={docDir}
      className={\`p-6 rounded-3xl border transition-all duration-300 max-w-4xl mx-auto space-y-6 shadow-2xl font-sans \${
        isDarkMode
          ? "bg-slate-950 border-slate-800 text-white"
          : "bg-slate-50 border-slate-200 text-slate-900 shadow-xl"
      }\`}
    >
      {/* الترويسة الرئيسية ولوحة التحكم المركزية بالسمات */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-slate-800/60 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <span className={\`p-2.5 rounded-2xl text-xl \${theme.primary} text-white shadow-md\`}>
            🎨
          </span>
          <div>
            <h3 className="text-lg font-black">منصة DesignCraft Studio التفاعلية</h3>
            <p className="text-xs opacity-70">
              استوديو أنظمة التصميم: Design Tokens, Tailwind Architecture, RTL First & Headless Components
            </p>
          </div>
        </div>

        {/* أدوات التحكم السريعة في السمات والاتجاه والمظهر */}
        <div className="flex items-center gap-2 text-xs flex-wrap">
          {/* زر تبديل الاتجاه RTL / LTR */}
          <button
            onClick={() => setDocDir((d) => (d === "rtl" ? "ltr" : "rtl"))}
            className="px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl font-bold transition-all flex items-center gap-1.5"
            title="تبديل الاتجاه بين العربية والإنجليزية"
          >
            <span>🌐</span>
            <span>{docDir === "rtl" ? "RTL (عربي)" : "LTR (Eng)"}</span>
          </button>

          {/* زر تبديل الوضع الداكن */}
          <button
            onClick={() => setIsDarkMode((m) => !m)}
            className="px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl font-bold transition-all flex items-center gap-1.5"
          >
            <span>{isDarkMode ? "🌙 داكن" : "☀️ مشرق"}</span>
          </button>
        </div>
      </div>

      {/* شريط اختيار لوحة الألوان المركزية (Color Tokens Picker) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-3.5 bg-slate-900/60 dark:bg-slate-900/40 rounded-2xl border border-slate-800/80 text-xs">
        <span className="font-bold opacity-80">اختر السمة اللونية الرئيسية (Primary Token):</span>
        <div className="flex gap-2">
          {Object.keys(THEME_PALETTES).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActivePalette(key);
                showToast(\`تم تفعيل سمة \${THEME_PALETTES[key].name} بنجاح!\`);
              }}
              className={\`px-3 py-1.5 rounded-xl font-bold border transition-all \${
                activePalette === key
                  ? \`\${THEME_PALETTES[key].primary} text-white border-transparent shadow-lg\`
                  : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
              }\`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* شريط التبويبات الرئيسي للاستوديو */}
      <div className="flex border-b border-slate-800 text-xs">
        {[
          { id: "components", label: "معرض المكونات التفاعلية ⚡" },
          { id: "tokens", label: "رموز نظام التصميم (Tokens) 📐" },
          { id: "responsive", label: "محاكي التجاوب والحاوية 📱" }
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={\`flex-1 py-2.5 font-bold transition-all relative \${
              activeTab === t.id ? theme.text : "opacity-60 hover:opacity-100"
            }\`}
          >
            <span>{t.label}</span>
            {activeTab === t.id && (
              <span className={\`absolute bottom-0 inset-x-0 h-0.5 \${theme.primary} rounded-full animate-fadeIn\`} />
            )}
          </button>
        ))}
      </div>

      {/* التبويب 1: معرض المكونات التفاعلية */}
      {activeTab === "components" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
          {/* بطاقة الأزرار وحقول الإدخال */}
          <div className="p-5 bg-slate-900/40 border border-slate-800 rounded-3xl space-y-3.5 text-xs">
            <h4 className={\`font-bold \${theme.text}\`}>1. الأزرار وحقول الإدخال التفاعلية</h4>

            <div>
              <label className="block mb-1 opacity-70 font-semibold">حقل إدخال بالخصائص المنطقية (ms- / pe-):</label>
              <div className="relative">
                <span className="absolute start-3 top-2.5 opacity-40">🔍</span>
                <input
                  type="text"
                  placeholder="ابحث هنا مع مسافات start و end التلقائية..."
                  className="w-full ps-9 pe-3 py-2 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => showToast("تم النقر على الزر الرئيسي بنجاح! ✓")}
                className={\`py-2.5 text-white rounded-xl font-bold transition-all active:scale-95 shadow-md \${theme.primary}\`}
              >
                الزر الرئيسي (Primary)
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl font-bold transition-all active:scale-95"
              >
                فتح النافذة المنبثقة 🪟
              </button>
            </div>
          </div>

          {/* بطاقة الهيكل العظمي والتحميل التفاعلي */}
          <div className="p-5 bg-slate-900/40 border border-slate-800 rounded-3xl space-y-3 text-xs flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className={\`font-bold \${theme.text}\`}>2. محاكي الهيكل العظمي (Skeleton Loading)</h4>
                <button
                  onClick={() => setIsSkeleton((s) => !s)}
                  className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 font-bold transition-colors"
                >
                  {isSkeleton ? "إيقاف الـ Skeleton" : "تشغيل الـ Skeleton 🔄"}
                </button>
              </div>

              {isSkeleton ? (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2.5 animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-slate-800 rounded-full" />
                    <div className="space-y-1.5 flex-1">
                      <div className="h-3 bg-slate-800 rounded w-1/2" />
                      <div className="h-2.5 bg-slate-800 rounded w-1/4" />
                    </div>
                  </div>
                  <div className="h-3 bg-slate-800 rounded w-3/4" />
                </div>
              ) : (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-sm">
                      ✓
                    </span>
                    <div>
                      <h5 className="font-bold text-white text-xs">تمت مزامنة كافة البيانات السحابية</h5>
                      <p className="text-[10px] opacity-60">زمن الاستجابة: 24ms فقط</p>
                    </div>
                  </div>
                  <span className="text-slate-400 rtl:-scale-x-100 transition-transform">➔</span>
                </div>
              )}
            </div>

            <p className="text-[10px] opacity-60">
              💡 يقلل الـ Skeleton من زمن الانتظار النفسي بنسبة 30% ويمنع تكسر وتذبذب التخطيط.
            </p>
          </div>
        </div>
      )}

      {/* التبويب 2: رموز نظام التصميم (Tokens) */}
      {activeTab === "tokens" && (
        <div className="p-5 bg-slate-900/40 border border-slate-800 rounded-3xl space-y-4 text-xs animate-fadeIn">
          <h4 className={\`font-bold \${theme.text}\`}>سلم مقاييس نظام التصميم المعتمد (Design Tokens Scale)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] opacity-60 block">المسافات (Spacing):</span>
              <span className="font-mono font-bold text-white">4px -> 32px</span>
              <span className="text-[9px] text-emerald-400 block font-mono">p-1 to p-8</span>
            </div>
            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] opacity-60 block">الحواف (Radius):</span>
              <span className="font-mono font-bold text-white">12px, 16px, 24px</span>
              <span className="text-[9px] text-indigo-400 block font-mono">rounded-xl / 3xl</span>
            </div>
            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] opacity-60 block">الظلال (Shadows):</span>
              <span className="font-mono font-bold text-white">Soft Glow Layer</span>
              <span className="text-[9px] text-amber-400 block font-mono">shadow-xl colored</span>
            </div>
            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] opacity-60 block">الاتجاه (Direction):</span>
              <span className="font-mono font-bold text-white">RTL / LTR Safe</span>
              <span className="text-[9px] text-rose-400 block font-mono">ms-*, pe-*, start-*</span>
            </div>
          </div>
        </div>
      )}

      {/* التبويب 3: محاكي التجاوب والحاوية */}
      {activeTab === "responsive" && (
        <div className="p-5 bg-slate-900/40 border border-slate-800 rounded-3xl space-y-4 text-xs animate-fadeIn text-center">
          <h4 className={\`font-bold \${theme.text}\`}>محاكي نقاط كسر الشاشات Mobile-First</h4>
          <p className="opacity-70 text-[11px] max-w-md mx-auto">
            في الجوال عمود واحد، وفي التابلت عمودان، وفي شاشات الحواسيب 3 أعمدة تلقائياً:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 font-bold">📱 عمود الهاتف (w-full)</div>
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 font-bold">📟 عمود التابلت (sm:grid-cols-2)</div>
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 font-bold">💻 عمود الحاسوب (lg:grid-cols-3)</div>
          </div>
        </div>
      )}

      {/* النافذة المنبثقة التفاعلية Modal مع تظليل زجاجي وعزل النقر */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 border border-slate-800 p-6 rounded-3xl max-w-sm w-full text-white space-y-4 shadow-2xl"
          >
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h5 className={\`font-bold text-sm \${theme.text}\`}>نافذة منبثقة تفاعلية (Modal)</h5>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-xs font-bold"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              هذه النافذة معزولة بـ backdrop-blur مع تطبيق e.stopPropagation() لمنع الإغلاق العرضي عند النقر بالداخل.
            </p>
            <button
              onClick={() => {
                setIsModalOpen(false);
                showToast("تم تأكيد الإجراء من داخل النافذة المنبثقة بنجاح!");
              }}
              className={\`w-full py-2.5 text-white rounded-xl text-xs font-bold transition-all shadow-md \${theme.primary}\`}
            >
              تأكيد العملية وإغلاق النافذة
            </button>
          </div>
        </div>
      )}

      {/* إشعار التوست العائم المؤقت */}
      {toastMessage && (
        <div className="fixed bottom-5 start-5 bg-slate-900 border border-emerald-500/50 text-white px-4 py-3 rounded-2xl text-xs shadow-2xl flex items-center gap-2 animate-fadeIn z-50">
          <span className="text-emerald-400 font-bold">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
`,
    infographic: {
      title: "معمارية منصة DesignCraft Studio المتكاملة",
      description: "التنسيق الهرمي لرموز التصميم، مكونات Headless، أنظمة التجاوب، ودعم الاتجاه العربي.",
      sections: [
        {
          heading: "1. طبقة الرموز المركزية (Design Tokens)",
          bullets: [
            "Color Palettes: لوحات ألوان دلالية مركزية لتوحيد هوية المشروع.",
            "Spacing & Radius Scales: نسب رياضية ثابتة للمسافات وانحناءات الحواف."
          ]
        },
        {
          heading: "2. طبقة المكونات التفاعلية (Interactive Sandbox)",
          bullets: [
            "الأزرار والحقول: استجابات لمسية (active:scale-95) وحلقات تركيز a11y.",
            "Modals & Drawers: عزل النقر بـ stopPropagation وتظليل زجاجي backdrop-blur.",
            "Skeleton Loading: كتل نابضة بـ animate-pulse تمنع تكسر وتذبذب الشاشة."
          ]
        },
        {
          heading: "3. العالمية والتكيف (RTL & Responsiveness)",
          bullets: [
            "RTL First: استخدام الخصائص المنطقية (ms-, pe-, start-) وانقلاب الأسهم تلقائياً.",
            "Mobile-First: التدرج الطبيعي من شاشات الجوال إلى الحواسيب الضخمة."
          ]
        }
      ]
    }
  },
  infographic: {
    title: "خارطة تنسيق واجهات React الاحترافية",
    description: "الدليل الشامل لكتابة وتنسيق وتطوير واجهات React من الصفر إلى إتقان Tailwind و shadcn/ui.",
    sections: [
      {
        heading: "1. منهجيات كتابة CSS (Styling Paradigms)",
        bullets: [
          "CSS Modules: عزل نطاقي مشفر لمنع تصادم الأسماء.",
          "Tailwind CSS: فئات مساعدة ذرية لسرعة تطوير فائقة دون مغادرة JSX.",
          "دالة cn(): دمج clsx و tailwind-merge لحل تضاربات الفئات المتعارضة."
        ]
      },
      {
        heading: "2. المكونات الحديثة وثورة Headless",
        bullets: [
          "Radix UI: مكونات بدون مظهر توفر منطق وسهولة وصول كاملة (WAI-ARIA).",
          "shadcn/ui: نسخ الكود المصدري لملفات مشروعك الخاصة بملكية تامة 100%."
        ]
      },
      {
        heading: "3. الهندسة الاحترافية ودعم RTL",
        bullets: [
          "Design Tokens: توحيد الألوان والمسافات وانحناءات الحواف.",
          "RTL First: اعتماد الخصائص المنطقية (ms-, pe-) لدعم ثنائي اللغة ببراعة.",
          "UX Polish: شاشات Skeleton Loading، إشعارات Sonner، وتغذية راجعة لمسية."
        ]
      }
    ]
  }
};
