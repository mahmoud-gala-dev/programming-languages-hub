// src/data/sections/section9/topic4.js
// الموضوع 4: تصميم واجهات احترافية (Professional UI Engineering, Design Systems, Modals, Skeleton & RTL)

export const SECTION_9_TOPIC_4 = {
  id: "9.4",
  title: "تصميم واجهات احترافية",
  englishTerm: "Professional UI Engineering & Component Architecture",
  description: "الترسانة الهندسية التطبيقية لبناء واجهات ويب ترقى لمستوى الشركات العالمية: بناء نظام تصميم متسق (Design System Tokens)، هندسة الأزرار وحقول الإدخال فائقة الجمال، البطاقات والقوائم المتقنة، النوافذ المنبثقة (Modals) والقوائم الجانبية الساحبة (Drawers)، علامات التبويب (Tabs)، نظام إشعارات التوست الحركية (Toasts)، شاشات التحميل الهيكلية (Skeleton Loading)، الدعم الفطري للاتجاه العربي (RTL First)، وأرقى ممارسات تجربة المستخدم (UX Micro-Interactions).",
  subtopics: [
    {
      id: "9.4.a",
      title: "إنشاء Design System بسيط",
      englishTerm: "Building a Lightweight Design System (Tokens & Standards)",
      description: "المعمارية الأساسية لإنشاء نظام تصميم مبسط ومتماسك (Design System). يتضمن ذلك توحيد 'رموز التصميم' (Design Tokens): لوحة الألوان المعيارية (Primary, Secondary, Neutral, Accents)، مقاييس التباعد الصارمة (4px, 8px, 16px, 24px, 32px)، سلم أحجام الخطوط (Typography Scale)، ودرجات انحناء الحواف (Border Radius)، لضمان أن كل شاشة في التطبيق تتحدث نفس اللغة البصرية المتناغمة.",
      realLifeAnalogy: "مثل الهوية البصرية لشبكة فنادق عالمية؛ ألوان بطاقات الغرف، ونوع أقمشة الأسرّة، وتصميم قائمة الطعام، وطريقة الترحيب بالنزيل واحدة وموحدة في فرع طوكيو وفرع لندن وفرع الرياض.",
      whyItMatters: "التطبيقات التي لا تملك نظام تصميم تعاني من فوضى بصرية: زر حوافه دائرية وزر آخر مربع، خمس درجات مختلفة من اللون الأزرق، ومسافات عشوائية. نظام التصميم يرفع سرعة إنتاج المطورين بنسبة 50% ويمنح المنتج طابعاً موثوقاً وعالي الاحترافية.",
      syntax: "// تعريف رموز التصميم في ملف tokens.js أو tailwind.config.js:\nexport const tokens = {\n  colors: { brand: '#6366f1', surface: '#0f172a' },\n  radius: { sm: '8px', md: '12px', lg: '16px' }\n};",
      simpleExample: `// استخدام رموز التصميم المركزية الموحدة
import React from "react";

// تعريف ثوابت النظام البصري
const DESIGN_TOKENS = {
  primaryColor: "bg-indigo-600 text-white",
  cardRadius: "rounded-2xl",
  surfaceBg: "bg-slate-900 border border-slate-800"
};

export function SystemCard() {
  return (
    // تطبيق الرموز لضمان الاتساق الكامل
    <div className={\`p-5 \${DESIGN_TOKENS.surfaceBg} \${DESIGN_TOKENS.cardRadius}\`}>
      <h4 className="text-sm font-bold text-white mb-2">مكون ملتزم بنظام التصميم</h4>
      <button className={\`px-4 py-2 text-xs font-bold \${DESIGN_TOKENS.primaryColor} \${DESIGN_TOKENS.cardRadius}\`}>
        زر متسق
      </button>
    </div>
  );
}
`,
      advancedExample: `// لوحة استعراض رموز نظام التصميم (Design System Tokens Showcase)
import React from "react";

export function DesignTokensVisualizer() {
  const tokenGroups = [
    {
      category: "سلم الألوان الأساسي (Color Tokens)",
      items: [
        { name: "brand-primary", sample: "bg-indigo-600", desc: "أزرار الإجراءات الرئيسية والإبراز" },
        { name: "brand-surface", sample: "bg-slate-900 border border-slate-800", desc: "خلفيات البطاقات والنوافذ" },
        { name: "brand-accent", sample: "bg-emerald-500", desc: "شارات النجاح والتأكيد المالي" }
      ]
    },
    {
      category: "انحناءات الحواف (Border Radius Scale)",
      items: [
        { name: "rounded-xl (12px)", sample: "rounded-xl border border-indigo-500/40", desc: "حقول الإدخال والأزرار الصغيرة" },
        { name: "rounded-3xl (24px)", sample: "rounded-3xl border border-indigo-500/40", desc: "البطاقات الرئيسية والحاويات" }
      ]
    }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">رموز نظام التصميم (Design Tokens)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Unified Standards
        </span>
      </div>

      <div className="space-y-4 text-xs">
        {tokenGroups.map((group, idx) => (
          <div key={idx} className="space-y-2">
            <span className="font-bold text-slate-300 block">{group.category}</span>
            <div className="space-y-1.5">
              {group.items.map((item, i) => (
                <div key={i} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className={\`w-6 h-6 rounded-lg \${item.sample} flex-shrink-0\`} />
                    <div>
                      <span className="font-mono font-bold text-indigo-300 block text-[11px]">{item.name}</span>
                      <span className="text-[10px] text-slate-400">{item.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`,
      outputExplanation: "توفر رموز التصميم (Tokens) قاموساً موحداً بين مصممي Figma ومطوري React؛ فيتحدث الجميع بلغة الأرقام والرموز الثابتة بدلاً من الألوان العشوائية.",
      commonMistakes: [
        {
          mistake: "استخدام ألوان ومقاييس مسافات عشوائية مكتوبة باليد في كل مكون مثل bg-[#45a2b1] و p-[19px].",
          fix: "عرف ألوان ومسافات محددة في Design Tokens والتزم بها في كافة المكونات.",
          reason: "القيم العشوائية تفقد التطبيق هويته البصرية وتجعل صيانة الواجهة شبه مستحيلة."
        }
      ],
      bestPractices: [
        "استخدم المتغيرات المشتركة CSS Variables لتمكين التبديل اللحظي بين الثيمات المتعددة.",
        "وثق رموز التصميم في ملف Markdown مرجعي يسهل وصول كافة المطورين إليه."
      ],
      infographicCard: {
        title: "أعمدة نظام التصميم Design System",
        points: [
          "Color Tokens: لوحة ألوان دلالية (Primary, Surface, Accent).",
          "Spacing Scale: مضاعفات الـ 4px لتناغم المسافات.",
          "Typography Tokens: مقاييس خطوط محددة للعناوين والنصوص."
        ]
      }
    },
    {
      id: "9.4.b",
      title: "تصميم الأزرار وحقول الإدخال",
      englishTerm: "Engineering Reusable Buttons & Inputs",
      description: "المعايير الاحترافية لتصميم حجر الأساس في أي واجهة: مكون الزر (Button) ومكون حقل الإدخال (Input). يشمل ذلك دعم كافة الحالات: الحجم (sm, md, lg)، التباين والنمط (Primary, Secondary, Outline, Ghost, Destructive)، الأيقونات المساعدة في البداية والنهاية، مؤشرات التحميل الدوارة المدمجة (Loading Spinners)، حلقات التركيز لمستخدمي لوحة المفاتيح، والتعطيل التلقائي (Disabled State).",
      realLifeAnalogy: "مثل مفاتيح ومقابض الأبواب في القصر الفاخر؛ تلمسها كل يوم عشرات المرات، فيجب أن تكون مريحة لليد، صلبة في التركيب، وناعمة في الحركة والصوت.",
      whyItMatters: "الأزرار وحقول الإدخال هي نقطة التماس المباشرة بين المستخدم والنظام. أي خلل في وضوح التركيز أو تأخر في ظهور مؤشر التحميل يسبب ارتباكاً مباشراً للمستخدم.",
      syntax: "// مكون زر احترافي:\n<Button variant=\"primary\" size=\"md\" isLoading={isPending} leftIcon={<Icon />}>\n  حفظ البيانات\n</Button>",
      simpleExample: `// مكون زر احترافي يدعم مؤشر التحميل المدمج
import React from "react";

export function ProfessionalButton({ children, isLoading, ...props }) {
  return (
    <button
      disabled={isLoading}
      className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-indigo-900/40 active:scale-95"
      {...props}
    >
      {isLoading && (
        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}
      <span>{children}</span>
    </button>
  );
}
`,
      advancedExample: `// استوديو اختبار الأزرار وحقول الإدخال الاحترافية
import React, { useState } from "react";

export function ButtonAndInputStudio() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مكونات الأزرار والإدخال الاحترافية</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Production Quality
        </span>
      </div>

      <div className="space-y-3 text-xs">
        {/* حقل إدخال بأيقونة داخلية مدمجة */}
        <div>
          <label className="text-slate-300 block mb-1 font-bold">حقل بحث بأيقونة مدمجة:</label>
          <div className="relative">
            <span className="absolute right-3 top-2.5 text-xs text-slate-500">🔍</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث في قاعدة البيانات..."
              className="w-full pr-9 pl-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
            />
          </div>
        </div>

        {/* استعراض تنوعات الأزرار */}
        <div className="space-y-1.5 pt-1">
          <label className="text-slate-300 block font-bold">أنماط الأزرار المعيارية:</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setLoading(true);
                setTimeout(() => setLoading(false), 2000);
              }}
              disabled={loading}
              className="py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white rounded-xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2 shadow-md shadow-indigo-900/30"
            >
              {loading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>جارٍ الحفظ...</span>
                </>
              ) : (
                <span>الزر الرئيسي (Primary)</span>
              )}
            </button>

            <button className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl font-bold transition-all active:scale-95">
              زر ثانوي (Secondary)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
`,
      outputExplanation: "من خلال دمج حالات hover و active:scale-95 ومؤشر التحميل animate-spin، يحصل المستخدم على استجابة فيزيائية فورية تطمئنه على تفاعل التطبيق مع كل نقرة.",
      commonMistakes: [
        {
          mistake: "إخفاء نص الزر تماماً أثناء التحميل مما يسبب تغير حجم الزر المفاجئ (Layout Shift).",
          fix: "حافظ على نفس أبعاد الزر واستبدل النص بمؤشر دوار مع نص توضيحي 'جارٍ التحميل...'.",
          reason: "تغير حجم الزر المفاجئ يسبب قفز العناصر المجاورة في الصفحة مما يشوه تجربة المستخدم."
        }
      ],
      bestPractices: [
        "أضف خاصية active:scale-95 دائماً لإعطاء إحساس بالعمق عند الضغط.",
        "اجعل حقول الإدخال تدعم وضع أيقونة في البداية (prefixIcon) أو النهاية (suffixIcon) بسلاسة."
      ],
      infographicCard: {
        title: "معايير الأزرار والحقول الاحترافية",
        points: [
          "تغذية راجعة حركية: active:scale-95 مع transition-all.",
          "مؤشر دوران مدمج: تعطيل الزر وعرض spinner أثناء المعالجة.",
          "حلقات التركيز a11y: focus:ring-2 لحماية مستخدمي لوحة المفاتيح."
        ]
      }
    },
    {
      id: "9.4.c",
      title: "تصميم البطاقات والقوائم",
      englishTerm: "Card & List UI Engineering (Micro-Interactions & Borders)",
      description: "المعايير الجمالية والهندسية لتصميم بطاقات المحتوى (Content Cards) وقوائم العناصر (Data Lists). يركز على تباين الخلفيات (Surfaces)، الحدود الدقيقة الشبه شفافة (Subtle Borders مثل border-white/10)، الظلال الناعمة متعددة الطبقات (Layered Shadows)، وحركات التحويم المبهجة (Hover Lift & Glow).",
      realLifeAnalogy: "مثل بطاقات الائتمان الفاخرة ذات الحواف المصقولة والملمس المعدني الأنيق؛ عندما تمسكها تشعر بالفخامة والمتانة والدقة في كل زاوية.",
      whyItMatters: "البطاقات هي الإطار الذي يقدم محتوى تطبيقك (المنتجات، المقالات، الإحصائيات، المستخدمين). البطاقات المصممة بعناية تجعل قراءة واستيعاب المعلومات مريحاً وسريعاً.",
      syntax: "<div className=\"p-5 bg-slate-900/60 border border-slate-800 hover:border-indigo-500/60 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40\">\n  {/* محتوى البطاقة */}\n</div>",
      simpleExample: `// بطاقة محتوى متقدمة ذات حواف وظلال مصقولة
import React from "react";

export function ElegantCardSnippet() {
  return (
    // بطاقة ترتفع للأعلى بمقدار 4px عند تحويم الفأرة مع وهج بنفسجي
    <div className="p-5 bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/50">
      <span className="text-xl">💎</span>
      <h4 className="font-bold text-sm text-white mt-2">بطاقة مميزة</h4>
      <p className="text-xs text-slate-400 mt-1">تنسيق راقٍ مع حركة ارتقاء ثلاثية الأبعاد.</p>
    </div>
  );
}
`,
      advancedExample: `// معرض بطاقات تفاعلية مع تأثيرات رفع ناعمة وقائمة متسقة
import React from "react";

export function CardAndListShowcase() {
  const items = [
    { title: "معمارية React 19 الحديثة", tag: "Architecture", icon: "⚡" },
    { title: "تصميم أنظمة الواجهات بـ Tailwind", tag: "Design", icon: "🎨" },
    { title: "أسرار تحسين الأداء و 60fps", tag: "Performance", icon: "🚀" }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">تصميم البطاقات والقوائم (Cards & Lists)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Hover Lift -translate-y-1
        </span>
      </div>

      <div className="space-y-2.5">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="p-3.5 bg-slate-950 border border-slate-800 hover:border-indigo-500/60 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-950/40 cursor-pointer flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg p-2 bg-slate-900 rounded-xl border border-slate-800">
                {it.icon}
              </span>
              <div>
                <h5 className="font-bold text-xs text-white hover:text-indigo-300 transition-colors">
                  {it.title}
                </h5>
                <span className="text-[10px] font-mono text-indigo-400">{it.tag}</span>
              </div>
            </div>
            <span className="text-slate-500 hover:text-indigo-400 transition-colors">➔</span>
          </div>
        ))}
      </div>
    </div>
  );
}
`,
      outputExplanation: "من خلال الجمع بين hover:-translate-y-1 و transition-all duration-300 والحدود شبه الشفافة، تشعر البطاقات بالحيوية والتفاعل مع كل حركة للفأرة.",
      commonMistakes: [
        {
          mistake: "استخدام حدود قاطعة بيضاء فاقعة border-white مما يسبب تشتيتاً بصرياً حاداً.",
          fix: "استخدم درجات معتمة وشفافة مثل border-slate-800 أو border-white/10.",
          reason: "الحدود شبه الشفافة تمنح الواجهة عمقاً مريحاً للعين وتبرز المحتوى الداخلي بأناقة."
        }
      ],
      bestPractices: [
        "استخدم duration-300 للحصول على حركة ارتقاء بطيئة ومريحة للعين.",
        "حافظ على تباعد داخلي p-4 إلى p-6 متسق في كافة بطاقات الموقع."
      ],
      infographicCard: {
        title: "هندسة البطاقات الحديثة Modern Cards",
        points: [
          "حدود ناعمة شبه شفافة: border-slate-800 أو border-white/10.",
          "تأثير الارتقاء: hover:-translate-y-1 للحركة ثلاثية الأبعاد.",
          "ظلال متناغمة: hover:shadow-indigo-950/50 بوهج لوني خفيف."
        ]
      }
    },
    {
      id: "9.4.d",
      title: "إنشاء Modal وDrawer",
      englishTerm: "Building Accessible Modals & Slide-out Drawers",
      description: "المعايير الهندسية لبناء النوافذ المنبثقة (Modal Dialogs) والقوائم الجانبية المنزلقة (Slide-out Drawers). يشمل ذلك: استخدام React Portals لنقل النافذة إلى نهاية وسم <body>، تظليل الخلفية مع تأثير البلور الزجاجي (backdrop-blur-sm)، إقفال التمرير في الصفحة الخلفية (Scroll Lock)، إغلاق النافذة بمفتاح ESC أو النقر على الخلفية، وحبس التركيز (Focus Trap).",
      realLifeAnalogy: "مثل إغلاق ستائر المسرح قبل بدء المشهد؛ يتم تعتيم القاعة بالكامل وتركيز بقعة ضوء ساطعة واحدة على الممثل الوحيد على خشبة المسرح لجذب كامل انتباه الجمهور.",
      whyItMatters: "الـ Modals المعطوبة تسمح للمستخدم بالتمرير في الصفحة الخلفية وتفتح نوافذ متعددة فوق بعضها وتمنع مستخدمي لوحة المفاتيح من الخروج. بناء نافذة منبثقة مطابقة للمواصفات يرفع أمان وتجربة التطبيق.",
      syntax: "// نقل النافذة عبر Portal:\ncreatePortal(\n  <div className=\"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50\">\n    <div className=\"bg-slate-900 p-6 rounded-3xl max-w-md w-full animate-fadeIn\">...</div>\n  </div>,\n  document.body\n);",
      simpleExample: `// نافذة منبثقة بسيطة ذات خلفية زجاجية معتمة
import React, { useState } from "react";

export function SimpleModalSnippet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold">
        فتح النافذة
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl max-w-sm w-full text-white space-y-3">
            <h4 className="font-bold text-sm">عنوان النافذة</h4>
            <p className="text-xs text-slate-300">محتوى النافذة المعزول بـ backdrop-blur.</p>
            <button onClick={() => setIsOpen(false)} className="w-full py-2 bg-slate-800 text-xs rounded-xl font-bold">
              إغلاق النافذة ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
`,
      advancedExample: `// محاكي القائمة الجانبية المنزلقة (Slide-out Drawer) والنافذة المنبثقة
import React, { useState } from "react";

export function ModalAndDrawerShowcase() {
  const [activeOverlay, setActiveOverlay] = useState(null); // 'modal' | 'drawer' | null

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">النوافذ والقوائم الساحبة (Modals & Drawers)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Backdrop Blur
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <button
          onClick={() => setActiveOverlay("modal")}
          className="py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all shadow-md shadow-indigo-900/30"
        >
          فتح النافذة (Modal) 🪟
        </button>
        <button
          onClick={() => setActiveOverlay("drawer")}
          className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold transition-all"
        >
          سحب القائمة (Drawer) 📑
        </button>
      </div>

      {/* النافذة المنبثقة Modal */}
      {activeOverlay === "modal" && (
        <div
          onClick={() => setActiveOverlay(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 border border-slate-800 p-6 rounded-3xl max-w-sm w-full text-white space-y-4 shadow-2xl"
          >
            <div className="flex justify-between items-center">
              <h5 className="font-bold text-sm text-indigo-400">تأكيد الإجراء النهائي ⚠️</h5>
              <button onClick={() => setActiveOverlay(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              هذه النافذة معزولة تماماً في مركز الشاشة مع تظليل الخلفية ومنع التفاعل بالخارج.
            </p>
            <button
              onClick={() => setActiveOverlay(null)}
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all"
            >
              فهمت ذلك ✓
            </button>
          </div>
        </div>
      )}

      {/* القائمة الجانبية المنزلقة Drawer */}
      {activeOverlay === "drawer" && (
        <div
          onClick={() => setActiveOverlay(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs flex justify-end z-50 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-950 border-r border-slate-800 w-72 h-full p-6 text-white space-y-4 shadow-2xl flex flex-col justify-between animate-slideLeft"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <h5 className="font-bold text-xs text-indigo-400">قائمة الإعدادات الجانبية</h5>
                <button onClick={() => setActiveOverlay(null)} className="text-slate-400 hover:text-white">✕</button>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <p className="p-2 bg-slate-900 rounded-xl hover:bg-slate-800 cursor-pointer">👤 الحساب الشخصي</p>
                <p className="p-2 bg-slate-900 rounded-xl hover:bg-slate-800 cursor-pointer">🔒 الأمان والخصوصية</p>
                <p className="p-2 bg-slate-900 rounded-xl hover:bg-slate-800 cursor-pointer">🔔 التنبيهات الفورية</p>
              </div>
            </div>

            <button
              onClick={() => setActiveOverlay(null)}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-xs rounded-xl font-bold"
            >
              إغلاق القائمة
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
`,
      outputExplanation: "تستخدم النوافذ المنبثقة fixed inset-0 لتغطية الشاشة كاملة مع backdrop-blur لتشويش العناصر الخلفية، واستدعاء e.stopPropagation() لمنع إغلاق النافذة عند النقر داخل محتواها.",
      commonMistakes: [
        {
          mistake: "نسيان استخدام e.stopPropagation() على الحاوية الداخلية مما يغلق النافذة عند النقر داخلها.",
          fix: "أضف دائماً onClick={(e) => e.stopPropagation()} على صندوق المحتوى الداخلي.",
          reason: "بدون إيقاف انتشار الحدث، ستصعد النقرة إلى الخلفية المعتمة وتفعل دالة الإغلاق."
        }
      ],
      bestPractices: [
        "أقفل التمرير في الصفحة الخلفية بإضافة overflow-hidden على وسم body أثناء فتح النافذة.",
        "ادعم دائماً مفتاح ESC للإغلاق السريع احتراماً لمعايير سهولة الوصول a11y."
      ],
      infographicCard: {
        title: "معمارية Modals و Drawers الاحترافية",
        points: [
          "fixed inset-0: تغطية الشاشة بالكامل مع backdrop-blur.",
          "stopPropagation: منع إغلاق النافذة عند النقر على محتواها الداخلي.",
          "إقفال التمرير: منع التمرير في الصفحة الخلفية أثناء فتح النافذة."
        ]
      }
    },
    {
      id: "9.4.e",
      title: "إنشاء Dropdown وTabs",
      englishTerm: "Building Accessible Dropdowns & Tabbed Interfaces",
      description: "المعايير الهندسية لتصميم القوائم المنسدلة (Dropdowns) والواجهات المبوبة (Tabs). تتيح التبويبات تنظيم المحتوى الكثيف في صفحة واحدة دون إغراق المستخدم بالتفاصيل، مع دعم التنقل بالأزرار ومفاتيح الأسهم، وتطبيق تأثيرات انسياب الخط السفلي المتحرك (Sliding Indicator).",
      realLifeAnalogy: "مثل مصنف الملفات المكتبي ذي البطاقات الملونة البارزة (File Tabs)؛ تسحب لسان تبويب 'الفواتير' لترى أوراق الفواتير، ثم تسحب لسان تبويب 'العقود' لترى العقود في نفس المكان دون ازدحام المكتب.",
      whyItMatters: "القوائم والتبويبات هي التقنية الأساسية لتقليص التشتت البصري وترتيب مئات الإعدادات والشاشات الفرعية في لوحات التحكم المعقدة.",
      syntax: "<Tabs.Root defaultValue=\"tab1\">\n  <Tabs.List>\n    <Tabs.Trigger value=\"tab1\">التبويب 1</Tabs.Trigger>\n    <Tabs.Trigger value=\"tab2\">التبويب 2</Tabs.Trigger>\n  </Tabs.List>\n  <Tabs.Content value=\"tab1\">المحتوى 1</Tabs.Content>\n</Tabs.Root>",
      simpleExample: `// واجهة مبوبة بسيطة وسريعة باستخدام useState و Tailwind
import React, { useState } from "react";

export function SimpleTabsSnippet() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-3">
      {/* شريط التبويبات */}
      <div className="flex bg-slate-900 p-1 rounded-xl gap-1 text-xs">
        <button
          onClick={() => setActiveTab("overview")}
          className={\`flex-1 py-1.5 rounded-lg font-bold transition-all \${
            activeTab === "overview" ? "bg-indigo-600 text-white" : "text-slate-400"
          }\`}
        >
          نظرة عامة
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={\`flex-1 py-1.5 rounded-lg font-bold transition-all \${
            activeTab === "settings" ? "bg-indigo-600 text-white" : "text-slate-400"
          }\`}
        >
          الإعدادات
        </button>
      </div>

      {/* محتوى التبويب النشط */}
      <div className="p-4 bg-slate-950 rounded-xl text-xs text-white">
        {activeTab === "overview" ? "محتوى النظرة العامة 📊" : "لوحة تعديل الإعدادات ⚙️"}
      </div>
    </div>
  );
}
`,
      advancedExample: `// نظام تبويبات متقدم مع خط مؤشر سفلي وتأثيرات ظهور متحركة
import React, { useState } from "react";

export function AdvancedTabsWithIndicator() {
  const [tab, setTab] = useState("account");

  const tabs = [
    { id: "account", label: "الحساب 👤", content: "إدارة الاسم والبريد وتفضيلات الأمان." },
    { id: "billing", label: "الفواتير 💳", content: "سجل العمليات المالية والبطاقات المحفوظة." },
    { id: "team", label: "الفريق 👥", content: "دعوة وإدارة صلاحيات أعضاء المنظمة." }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">واجهة التبويبات (Accessible Tabs)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Animated Tabs
        </span>
      </div>

      {/* شريط أزرار التبويبات المتناسق */}
      <div className="flex border-b border-slate-800 text-xs">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={\`flex-1 py-2.5 font-bold transition-all relative \${
              tab === t.id ? "text-indigo-400" : "text-slate-400 hover:text-white"
            }\`}
          >
            <span>{t.label}</span>
            {tab === t.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full animate-fadeIn" />
            )}
          </button>
        ))}
      </div>

      {/* عرض محتوى التبويب المختار */}
      <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 text-xs space-y-2 animate-fadeIn">
        <h5 className="font-bold text-slate-200">
          {tabs.find((t) => t.id === tab)?.label}
        </h5>
        <p className="text-slate-400 leading-relaxed">
          {tabs.find((t) => t.id === tab)?.content}
        </p>
      </div>
    </div>
  );
}
`,
      outputExplanation: "باستخدام الخط السفلي المشروط والمتحرك absolute bottom-0 h-0.5، يحصل المستخدم على دلالة بصرية فورية ومريحة توضح موقعه الحالي داخل واجهة التبويبات.",
      commonMistakes: [
        {
          mistake: "إعادة تحميل وتصيير كافة التبويبات في نفس اللحظة مما يبطئ الصفحة.",
          fix: "قم بتصيير محتوى التبويب النشط فقط بشكل مشروط {activeTab === id && <Content />} أو استخدم Radix Tabs.",
          reason: "تصيير محتوى كافة التبويبات دفعة واحدة يستهلك موارد الذاكرة دون فائدة للمستخدم."
        }
      ],
      bestPractices: [
        "استخدم role='tablist' و role='tab' و role='tabpanel' لمعايير قارئات الشاشة.",
        "ادعم التنقل بين أزرار التبويب عبر مفاتيح الأسهم ← → لسهولة الاستخدام بلوحة المفاتيح."
      ],
      infographicCard: {
        title: "دستور الواجهات المبوبة Tabs",
        points: [
          "شريط التبويبات: أزرار دلالية مع مؤشر سفلي نشط.",
          "التصيير الكسول: عرض محتوى التبويب النشط فقط لتسريع الأداء.",
          "معايير a11y: دعم التنقل بالأسهم وخصائص W3C Tabs."
        ]
      }
    },
    {
      id: "9.4.f",
      title: "إظهار Toast Notifications",
      englishTerm: "Toast Notifications Engineering & Sonner Library",
      description: "المعايير الهندسية لتصميم وإدارة الإشعارات المنبثقة المؤقتة (Toast Notifications / Snackbars). يشمل ذلك: وضع الإشعارات في زوايا الشاشة (مثل أعلى اليمين أو أسفل اليسار)، إخفاء الإشعار تلقائياً بعد مهلة زمنية (Auto-dismiss بعد 3-4 ثوانٍ)، دعم التفاعل باللمس للتمرير والإلغاء (Swipe to dismiss)، ومكتبة Sonner الأسطورية الأكثر شعبية في React.",
      realLifeAnalogy: "مثل خروج قطعة التوست المحمصة من جهاز التحميص الكهربائي (Toaster)؛ ترتفع للأعلى فجأة لتبلغك بأن وجبتك أصبحت جاهزة، ثم تأخذها ويختفي التوست دون تعطيل المطبخ.",
      whyItMatters: "تستخدم الإشعارات المنبثقة لإعلام المستخدم بنجاح الحفظ، فشل الاتصال، أو نسخ الرابط دون مقاطعة عمله أو إجباره على إغلاق نافذة منبثقة.",
      syntax: "// باستخدام مكتبة Sonner المعيارية:\nimport { toast } from 'sonner';\n\ntoast.success('تم حفظ التعديلات بنجاح!');\ntoast.error('تعذر إكمال الطلب!');",
      simpleExample: `// محاكي إشعار منبثق مؤقت يختفي تلقائياً بـ setTimeout
import React, { useState } from "react";

export function SimpleToastDemo() {
  const [toastMsg, setToastMsg] = useState("");

  const showToast = (msg) => {
    setToastMsg(msg);
    // إخفاء الإشعار تلقائياً بعد 3 ثوانٍ
    setTimeout(() => setToastMsg(""), 3000);
  };

  return (
    <div>
      <button onClick={() => showToast("تم نسخ الرابط للحافظة! 📋")} className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs">
        إظهار إشعار
      </button>

      {toastMsg && (
        <div className="fixed bottom-4 left-4 bg-slate-900 border border-emerald-500/40 text-emerald-300 p-3 rounded-xl text-xs shadow-xl animate-fadeIn">
          {toastMsg}
        </div>
      )}
    </div>
  );
}
`,
      advancedExample: `// استوديو إشعارات التوست المتكامل (Sonner Simulator) متعدد الحالات
import React, { useState } from "react";

export function ToastNotificationStudio() {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);

    // إزالة التوست تلقائياً بعد 3.5 ثانية
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">نظام إشعارات التوست (Toast System)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Sonner Style
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => addToast("success", "تم نشر المقال بنجاح في السيرفر!")}
          className="py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs font-bold transition-all"
        >
          نجاح ✓
        </button>
        <button
          onClick={() => addToast("error", "فشل الاتصال: تعذر العثور على الخادم!")}
          className="py-2 bg-rose-600 hover:bg-rose-500 rounded-xl text-xs font-bold transition-all"
        >
          خطأ ✕
        </button>
        <button
          onClick={() => addToast("info", "تحديث جديد متاح لـ React 19")}
          className="py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all"
        >
          تنبيه ℹ
        </button>
      </div>

      {/* منطقة عرض الإشعارات العائمة الثابتة */}
      <div className="space-y-2 pt-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={\`p-3.5 rounded-2xl border text-xs shadow-2xl flex justify-between items-center animate-fadeIn \${
              t.type === "success"
                ? "bg-slate-950 border-emerald-500/50 text-emerald-300"
                : t.type === "error"
                ? "bg-slate-950 border-rose-500/50 text-rose-300"
                : "bg-slate-950 border-indigo-500/50 text-indigo-300"
            }\`}
          >
            <div className="flex items-center gap-2.5">
              <span>{t.type === "success" ? "✓" : t.type === "error" ? "⚠" : "ℹ"}</span>
              <span className="font-medium text-white">{t.message}</span>
            </div>
            <button
              onClick={() => setToasts((prev) => prev.filter((item) => item.id !== t.id))}
              className="text-slate-500 hover:text-white text-xs px-1"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
`,
      outputExplanation: "توفر إشعارات التوست تنبيهاً بصرياً عائماً دون تعطيل تفاعل المستخدم، وتختفي بهدوء وتلقائية عبر مؤقتات setTimeout مع إمكانية إغلاقها يدوياً.",
      commonMistakes: [
        {
          mistake: "عرض أكثر من 5 إشعارات متراكمة تغطي نصف الشاشة وتمنع المستخدم من التفاعل.",
          fix: "حدد حداً أقصى لعدد الإشعارات المعروضة في نفس الوقت (مثل 3 إشعارات فقط).",
          reason: "تراكم الإشعارات يشتت المستخدم ويتحول من وسيلة إرشادية إلى مصدر إزعاج بصري."
        }
      ],
      bestPractices: [
        "استخدم مكتبة sonner المعتمدة رسمياً في shadcn/ui للأداء والحركات السلسة.",
        "اجعل الإشعار يقبل زراً فرعياً للتراجع السريع: toast('تم الحذف', { action: { label: 'تراجع', onClick } })."
      ],
      infographicCard: {
        title: "قواعد إشعارات التوست Toast Rules",
        points: [
          "اختفاء تلقائي: بعد 3 إلى 4 ثوانٍ دون إجبار المستخدم على النقر.",
          "تحديد السعة: عرض 2 إلى 3 إشعارات كحد أقصى في آن واحد.",
          "ألوان دلالية: الأخضر للنجاح، الأحمر للخطأ، والأزرق للإرشاد."
        ]
      }
    },
    {
      id: "9.4.g",
      title: "تصميم Skeleton Loading",
      englishTerm: "Skeleton Loading Screens & Shimmer Effects",
      description: "المعيار العالمي الحديث لتمثيل حالات انتظار البيانات: شاشات التحميل الهيكلية (Skeleton Screens) بدلاً من مؤشرات الدوران الكلاسيكية (Spinners). يتم رسم كتل رمادية تحاكي الأبعاد الحقيقية للعناصر القادمة (نصوص، صور، أزرار) مع تأثير وميض ناعم (Shimmer Animation عبر animate-pulse)، مما يمنح المستخدم شعوراً نفسياً بأن الصفحة سريعة التحميل.",
      realLifeAnalogy: "مثل الهيكل العظمي للمبنى أثناء الإنشاء؛ ترى الأعمدة والأسقف الخرسانية المصبوبة فتعرف مسبقاً شكل العمارة وغرفها ومداخلها حتى قبل تركيب الأبواب والدهان النهائي.",
      whyItMatters: "أثبتت دراسات علم نفس الواجهات (Perceived Performance) أن شاشات الـ Skeleton تقلل من شعور المستخدم بمدة الانتظار بنسبة تفوق 30% مقارنة بدوائر التحميل الدوارة التي تصيب المستخدم بالملل والشك في تعطل التطبيق.",
      syntax: "<div className=\"animate-pulse space-y-3\">\n  <div className=\"w-12 h-12 bg-slate-800 rounded-full\" />\n  <div className=\"h-4 bg-slate-800 rounded w-3/4\" />\n</div>",
      simpleExample: `// هيكل عظمي لتحميل بطاقة مستخدم بـ animate-pulse
import React from "react";

export function SkeletonUserCard() {
  return (
    // تأثير animate-pulse المدمج في Tailwind للوميض التلقائي
    <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-3 animate-pulse max-w-xs">
      <div className="flex items-center gap-3">
        {/* محاكاة الصورة الشخصية الدائرية */}
        <div className="w-10 h-10 bg-slate-800 rounded-full" />
        <div className="space-y-1.5 flex-1">
          {/* محاكاة سطر الاسم */}
          <div className="h-3 bg-slate-800 rounded w-2/3" />
          {/* محاكاة سطر الوظيفة */}
          <div className="h-2.5 bg-slate-800 rounded w-1/3" />
        </div>
      </div>
    </div>
  );
}
`,
      advancedExample: `// محاكي التبديل بين شاشة الهيكل العظمي (Skeleton) والبيانات الحقيقية
import React, { useState } from "react";

export function SkeletonToggleShowcase() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">محاكي الهيكل العظمي (Skeleton Loading)</h4>
        <button
          onClick={() => setIsLoading((l) => !l)}
          className="text-[10px] font-mono bg-indigo-600 hover:bg-indigo-500 px-2.5 py-1 rounded-lg text-white font-bold transition-all"
        >
          {isLoading ? "عرض البيانات الحقيقية ➔" : "إعادة تشغيل الـ Skeleton 🔄"}
        </button>
      </div>

      {isLoading ? (
        // شاشة الـ Skeleton مع وميض انسيابي
        <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-3 animate-pulse">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 bg-slate-800 rounded-2xl" />
            <div className="w-16 h-5 bg-slate-800 rounded-full" />
          </div>
          <div className="h-4 bg-slate-800 rounded w-3/4 mt-2" />
          <div className="h-3 bg-slate-800 rounded w-1/2" />
          <div className="pt-2 border-t border-slate-900 flex justify-between">
            <div className="w-20 h-4 bg-slate-800 rounded" />
            <div className="w-16 h-4 bg-slate-800 rounded" />
          </div>
        </div>
      ) : (
        // البيانات الحقيقية بعد اكتمال التحميل
        <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="text-2xl p-2 bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 rounded-2xl">
              💻
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
              متوفر للبيع
            </span>
          </div>
          <h5 className="font-bold text-sm text-white">حاسوب محمول فائق الأداء M3 Max</h5>
          <p className="text-xs text-slate-400">معالج 16 نواة، ذاكرة موحدة 64 جيجابايت، وشاشة Liquid Retina XDR.</p>
          <div className="pt-2 border-t border-slate-900 flex justify-between items-center text-xs">
            <span className="font-mono text-emerald-400 font-bold text-sm">12,500 ر.س</span>
            <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-xl text-xs font-bold">شراء الآن</button>
          </div>
        </div>
      )}
    </div>
  );
}
`,
      outputExplanation: "يحاكي الـ Skeleton الأبعاد الحقيقية تماماً للمكون المكتمل، مما يمنع ظاهرة قفز العناصر في الصفحة (Cumulative Layout Shift - CLS) عند وصول البيانات.",
      commonMistakes: [
        {
          mistake: "رسم هيكل عظمي بأبعاد تختلف كلياً عن أبعاد المكون الحقيقي (مثال: مستطيل بارتفاع 50px لمكون طوله 250px).",
          fix: "طابق أبعاد ومواقع كتل الـ Skeleton مع أبعاد ومواقع المكون النهائي بدقة.",
          reason: "اختلاف الأبعاد يؤدي لحدوث قفزات عنيفة في الشاشة (CLS) تضر بتجربة المستخدم وترتيب محركات البحث."
        }
      ],
      bestPractices: [
        "استخدم فئة animate-pulse المدمجة في Tailwind لتوفير حركة نبض انسيابية.",
        "أنشئ مكون [Component]Skeleton مخصص بجوار كل مكون معقد لاستخدامه في حالات الترقب والانتظار."
      ],
      infographicCard: {
        title: "أسرار شاشات Skeleton Loading",
        points: [
          "تقليل الشعور بمدة الانتظار بنسبة 30% (Perceived Performance).",
          "منع قفز العناصر المفاجئ في الشاشة (Zero Layout Shift).",
          "تأثير animate-pulse لوميض ناعم يعكس حيوية التطبيق."
        ]
      }
    },
    {
      id: "9.4.h",
      title: "دعم الشاشات المختلفة",
      englishTerm: "Cross-Device & Container Queries Architecture",
      description: "الهندسة المتقدمة لتوافق واجهات React عبر كافة الأجهزة: شاشات الهواتف الضيقة (360px)، الهواتف القابلة للطي (Foldables)، الأجهزة اللوحية، الحواسيب المحمولة، والشاشات العريضة جداً (Ultrawide 4K). يشمل ذلك استخدام Container Queries (@container) لتكييف المكون بناءً على حجم حاويته المباشرة وليس فقط عرض شاشة المتصفح بالكامل.",
      realLifeAnalogy: "مثل السائل الذي يتكيف مع شكل الإناء الذي يوضع فيه؛ إذا صببته في فنجان صغير يتشكل كالفنجان، وإذا صببته في إبريق كبير يتسع ويأخذ شكل الإبريق بكل مرونة.",
      whyItMatters: "قد تضع نفس مكون البطاقة في شريط جانبي ضيق بعرض 300px، أو في وسط الصفحة بعرض 900px. استخدام Container Queries يتيح للمكون تعديل شكله وتخطيطه بناءً على المساحة المتاحة له داخل مكانه الحالي.",
      syntax: "// في الحاوية الأب:\n<div className=\"@container\">\n  {/* في الابن يتكيف مع حجم حاويته المباشرة */}\n  <div className=\"flex flex-col @md:flex-row\">...</div>\n</div>",
      simpleExample: `// استخدام Container Queries في Tailwind
import React from "react";

export function ContainerQuerySnippet() {
  return (
    // تعريف الحاوية بـ @container
    <div className="@container p-4 bg-slate-900 rounded-2xl">
      {/* يتغير من عمود لأفقي عندما يتجاوز عرض الحاوية المباشرة 400px */}
      <div className="flex flex-col @sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white">مكون يتكيف مع حجم الحاوية الحاضنة</p>
        <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs">زر</button>
      </div>
    </div>
  );
}
`,
      advancedExample: `// محاكي التكيف مع الحاويات المختلفة (Container vs Viewport Queries)
import React, { useState } from "react";

export function ContainerQueriesSimulator() {
  const [containerWidth, setContainerWidth] = useState("w-full");

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">استعلامات الحاوية (Container Queries)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          @container
        </span>
      </div>

      <div className="flex gap-2 text-xs">
        <button
          onClick={() => setContainerWidth("w-full")}
          className={\`flex-1 py-1.5 rounded-xl font-bold border transition-all \${
            containerWidth === "w-full" ? "bg-indigo-600 border-indigo-500 text-white" : "bg-slate-950 border-slate-800 text-slate-400"
          }\`}
        >
          عرض كامل (واسع)
        </button>
        <button
          onClick={() => setContainerWidth("w-64")}
          className={\`flex-1 py-1.5 rounded-xl font-bold border transition-all \${
            containerWidth === "w-64" ? "bg-indigo-600 border-indigo-500 text-white" : "bg-slate-950 border-slate-800 text-slate-400"
          }\`}
        >
          شريط جانبي (ضيق)
        </button>
      </div>

      {/* الحاوية المتغيرة الحجم */}
      <div className={\`mx-auto p-4 bg-slate-950 rounded-2xl border border-slate-800 transition-all duration-300 \${containerWidth}\`}>
        <div className="space-y-2 text-center">
          <span className="text-xl">📊</span>
          <h5 className="font-bold text-xs text-white">إحصائيات المبيعات اللحظية</h5>
          <p className="text-[11px] text-slate-400">
            {containerWidth === "w-full"
              ? "في المساحة الواسعة تظهر التفاصيل كاملة مع المخططات البيانية."
              : "في الشريط الضيق يتقلص المحتوى تلقائياً لحفظ التناسق."}
          </p>
        </div>
      </div>
    </div>
  );
}
`,
      outputExplanation: "تتيح Container Queries إعادة استخدام نفس المكون في أي مكان داخل الصفحة دون القلق من تشوه التخطيط إذا تم وضعه في شريط جانبي ضيق.",
      commonMistakes: [
        {
          mistake: "الاعتماد حصراً على استعلامات الشاشة العامة (Viewport Breakpoints مثل md:) لمكونات الشريط الجانبي.",
          fix: "استخدم Container Queries (@container) للمكونات الجزئية القابلة للنقل.",
          reason: "شاشة الحاسوب قد تكون واسعة (1920px)، لكن الشريط الجانبي نفسه ضيق (280px) ويحتاج لتخطيط عمودي."
        }
      ],
      bestPractices: [
        "استخدم max-w-7xl مع mx-auto في الحاويات الرئيسية لمنع تمدد المحتوى المفرط على شاشات 4K.",
        "تأكد من اختبار قابلية النقر بالإبهام على الشاشات اللمسية بحجم أزرار لا يقل عن 44px * 44px."
      ],
      infographicCard: {
        title: "التكيف عبر كافة الأجهزة Cross-Device",
        points: [
          "Viewport Breakpoints: لتخطيط الصفحة العامة (Grid & Rows).",
          "Container Queries (@container): لتكيف المكون داخل حاويته المباشرة.",
          "حجم لمسي آمن: أزرار 44px على الأقل لسهولة النقر بالإبهام."
        ]
      }
    },
    {
      id: "9.4.i",
      title: "دعم الاتجاه من اليمين إلى اليسار RTL",
      englishTerm: "RTL-First Architecture & Logical Properties in CSS/Tailwind",
      description: "المعايير الهندسية الصارمة لدعم اللغات المكتوبة من اليمين إلى اليسار (مثل اللغة العربية) بنقاء بنسبة 100%. يشمل ذلك: تجنب استخدام الخصائص الفيزيائية القديمة (left / right)، والاعتماد الحصري على 'الخصائص المنطقية' (Logical Properties) في Tailwind مثل: ms- (Margin Start), me- (Margin End), ps- (Padding Start), pe- (Padding End), start-0, end-0، واستخدام البادئة rtl: لعكس حركات الأسهم والأيقونات.",
      realLifeAnalogy: "مثل قراءة الكتاب العربي؛ تبدأ من اليمين وتتجه لليسار، وتقلب الصفحات من اليسار لليمين، بعكس الكتب الإنجليزية تماماً؛ تغيير اتجاه الكتاب لا يعني تمزيق صفحاته، بل تصفحه في مساره الفطري الطبيعي.",
      whyItMatters: "استخدام ml-4 و pl-4 القديمة يخرب تخطيط المواقع العربية بالكامل لأن المسافة تضاف على اليسار بدلاً من اليمين! استخدام الخصائص المنطقية (ms- و ps-) يجعل نفس كود المكون يعمل بجمال واتساق خارق في اللغتين العربية والإنجليزية دون أي تعديل.",
      syntax: "// الخصائص المنطقية المعيارية:\nms-4    => margin-inline-start (يمين في العربي، يسار في الإنجليزي)\npe-3    => padding-inline-end\nstart-0 => inset-inline-start",
      simpleExample: `// مكون يدعم العربية والإنجليزية بنقاء عبر الخصائص المنطقية
import React from "react";

export function LogicalPropertiesDemo() {
  return (
    // ms-3 تعني مسافة في بداية العنصر حسب اتجاه dir الصفحة
    <div className="flex items-center p-3 bg-slate-900 rounded-xl">
      <span className="text-xl">🚀</span>
      {/* ms-3 تضيف هامشاً جهة اليمين في العربية وجهة اليسار في الإنجليزية تلقائياً! */}
      <span className="ms-3 text-xs font-bold text-white">
        نص بمسافة منطقية متكيفة (ms-3)
      </span>
    </div>
  );
}
`,
      advancedExample: `// محاكي تبديل اتجاه الصفحة (LTR vs RTL) واختبار تكيف الخصائص المنطقية
import React, { useState } from "react";

export function RTLArchitectureSimulator() {
  const [direction, setDirection] = useState("rtl");

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">هندسة الاتجاه العربي (RTL Architecture)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Logical Properties
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setDirection("rtl")}
          className={\`flex-1 py-1.5 rounded-xl text-xs font-bold border transition-all \${
            direction === "rtl" ? "bg-indigo-600 border-indigo-500 text-white" : "bg-slate-950 border-slate-800 text-slate-400"
          }\`}
        >
          الاتجاه العربي (RTL) 🇸🇦
        </button>
        <button
          onClick={() => setDirection("ltr")}
          className={\`flex-1 py-1.5 rounded-xl text-xs font-bold border transition-all \${
            direction === "ltr" ? "bg-indigo-600 border-indigo-500 text-white" : "bg-slate-950 border-slate-800 text-slate-400"
          }\`}
        >
          الاتجاه الإنجليزي (LTR) 🌐
        </button>
      </div>

      {/* حاوية محاكاة يتغير اتجاهها برمجياً عبر خاصية dir */}
      <div
        dir={direction}
        className="p-4 bg-slate-950 rounded-2xl border border-indigo-500/30 transition-all duration-300 space-y-3"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-500 flex items-center justify-center text-sm">
              👤
            </span>
            {/* استخدام ms-3 المنطقية بدلاً من mr-3 أو ml-3 */}
            <div className="ms-3 text-xs">
              <h5 className="font-bold text-white">عبدالعزيز الفهد</h5>
              <p className="text-[10px] text-slate-400">مهندس واجهات برمجية</p>
            </div>
          </div>

          {/* أيقونة السهم تنعكس تلقائياً بفضل rtl:-scale-x-100 */}
          <span className="text-slate-400 text-xs rtl:-scale-x-100 transition-transform">
            ➔
          </span>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400">
        ✓ <strong className="text-white">السر الهندسي:</strong> استخدمنا <code className="text-indigo-300 font-mono">ms-3</code> و <code className="text-indigo-300 font-mono">rtl:-scale-x-100</code> فعكست البطاقة اتجاهها وسهمها تلقائياً دون كتابة سطر كود إضافي!
      </div>
    </div>
  );
}
`,
      outputExplanation: "الخصائص المنطقية (Start / End) ترتبط باتجاه قراءة المستند (dir='rtl' أو dir='ltr') بدلاً من الاتجاهات الفيزيائية الثابتة للشاشة، مما يحقق دعماً سلساً ثنائي اللغة.",
      commonMistakes: [
        {
          mistake: "استخدام mr-* و ml-* و pr-* و pl-* في المشاريع العربية.",
          fix: "استبدلها فوراً بـ ms-* و me-* و ps-* و pe-*.",
          reason: "الخصائص الفيزيائية (left/right) تظل ثابتة ولا تعكس نفسها عند تحويل الموقع للغة العربية."
        }
      ],
      bestPractices: [
        "عكس أيقونات الاتجاهات والأسهم في العربية باستخدام فئة rtl:-scale-x-100.",
        "اضبط خاصية dir='rtl' على عنصر html الأعلى مع تحديد خط عربي معتمد مثل font-cairo."
      ],
      infographicCard: {
        title: "دستور الاتجاه العربي RTL First",
        points: [
          "وداعاً لـ left/right: استخدام ms- (Start) و me- (End) دائماً.",
          "عكس الأسهم التفاعلية: استخدام rtl:-scale-x-100 لانقلاب الأيقونة.",
          "دعم ثنائي اللغة: كود واحد يخدم العربية والإنجليزية ببراعة."
        ]
      }
    },
    {
      id: "9.4.j",
      title: "تحسين تجربة المستخدم UX",
      englishTerm: "UX Micro-Interactions, Feedback & Motion Polish",
      description: "اللمسات الأخيرة التي تحول التطبيق البرمجي العادي إلى تحفة فنية عالمية: التفاعلات الدقيقة (Micro-Interactions)، التغذية الراجعة اللمسية والبصرية الفورية، أصوات النقرات الهادئة، إبراز حالات النجاح، وتخفيف ارتباك المستخدم عبر تقليل الاحتكاك (Friction Reduction) ومراعاة سرعة الإدراك البصري.",
      realLifeAnalogy: "مثل إغلاق باب السيارة الفارهة؛ تسمع صوت 'تك' هادئاً وممتلئاً ومحكماً، يعطيك إحساساً فورياً بالأمان والمتانة دون أن تفكر في الأمر.",
      whyItMatters: "التفاصيل الصغيرة ليست مجرد ديكور؛ هي التي تبني الارتباط العاطفي وثقة العميل في منتجك، وتجعل استخدام تطبيقك تجربة ممتعة ومريحة تشجع على البقاء والتوصية به.",
      syntax: "// تفاعل ناعم ومتكامل:\n<button className=\"transition-all duration-200 active:scale-95 hover:shadow-lg focus-visible:ring-2 select-none\">\n  تجربة مستخدم ساحرة\n</button>",
      simpleExample: `// زر تفاعلي فائق النعومة مع تغذية راجعة فورية
import React, { useState } from "react";

export function DelightfulButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={\`px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 select-none active:scale-90 \${
        liked
          ? "bg-rose-600 text-white shadow-lg shadow-rose-900/40"
          : "bg-slate-800 hover:bg-slate-700 text-slate-300"
      }\`}
    >
      <span className={\`transition-transform duration-300 \${liked ? "scale-125 rotate-12" : "scale-100"}\`}>
        {liked ? "❤️" : "🤍"}
      </span>
      <span>{liked ? "أعجبني!" : "إعجاب"}</span>
    </button>
  );
}
`,
      advancedExample: `// لوحة تطبيق معايير صقل الواجهات UX Polish والمقارنة الحسية
import React, { useState } from "react";

export function UXPolishShowcase() {
  const [copyState, setCopyState] = useState(false);

  const handleCopy = () => {
    setCopyState(true);
    setTimeout(() => setCopyState(false), 2000);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">صقل تجربة المستخدم (UX Polish)</h4>
        <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold">
          Micro-Interactions
        </span>
      </div>

      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
        <span className="text-xs text-slate-300 font-bold block">مفتاح API السري للمشروع:</span>
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value="ak_live_9942a8b9c011e42f9"
            className="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-mono text-indigo-300 select-all outline-none"
          />
          <button
            onClick={handleCopy}
            className={\`px-3 py-2 rounded-xl text-xs font-bold transition-all duration-300 active:scale-95 flex items-center gap-1.5 \${
              copyState
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-950"
                : "bg-indigo-600 hover:bg-indigo-500 text-white"
            }\`}
          >
            <span>{copyState ? "✓" : "📋"}</span>
            <span>{copyState ? "تم النسخ!" : "نسخ"}</span>
          </button>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
        <span className="text-slate-200 font-bold block">معايير الصقل المطبقة في هذا الزر:</span>
        <p>1. <strong className="text-indigo-400">التغذية الفورية:</strong> تحول النص فوراً إلى "تم النسخ!" باللون الأخضر.</p>
        <p>2. <strong className="text-indigo-400">إحساس اللمس:</strong> تصغير بحجم 95% عند النقر (active:scale-95).</p>
        <p>3. <strong className="text-indigo-400">الاستعادة الذاتية:</strong> العودة للحالة الطبيعية تلقائياً بعد ثانيتين.</p>
      </div>
    </div>
  );
}
`,
      outputExplanation: "الجمع بين التغذية الراجعة اللونية والحركية والعودة التلقائية للحالة يمنح المستخدم تأكيداً حاسماً على نجاح الإجراء دون أي شك.",
      commonMistakes: [
        {
          mistake: "المبالغة في الحركات الطويلة والبطيئة (مثل أنيميشن يستغرق ثانية كاملة لكل نقرة زر).",
          fix: "اجعل مدة التفاعلات السريعة بين 150ms إلى 250ms كحد أقصى.",
          reason: "الحركات البطيئة تجعل التطبيق يبدو متثاقلاً وتعيق المستخدمين المحترفين عن أداء مهامهم بسرعة."
        }
      ],
      bestPractices: [
        "أضف خاصية select-none على كافة الأزرار وعناصر التحكم لمنع تظليل النصوص الزرقاء بالخطأ عند النقر المتكرر.",
        "حافظ على توفير مؤشرات واضحة لحالات الخطأ والنجاح والانتظار في كل عملية حساسة."
      ],
      infographicCard: {
        title: "عناصر صقل تجربة المستخدم UX Polish",
        points: [
          "Micro-Interactions: استجابة فورية بين 150ms إلى 200ms.",
          "تغذية راجعة ملونة: تحول الأخضر الفوري لتأكيد الإنجاز.",
          "select-none: حماية الأزرار من تظليل النصوص العرضي."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q9-4-1",
      question: "لماذا يُعتبر استخدام الخصائص المنطقية (مثل ms- و pe-) أفضل بكثير من الخصائص الفيزيائية (مثل mr- و pl-) في المواقع العربية؟",
      options: [
        "لأن الخصائص الفيزيائية تزيد من حرارة معالج الهاتف",
        "لأن الخصائص المنطقية تتكيف تلقائياً مع اتجاه الصفحة (dir='rtl' أو 'ltr') فتضع المسافة في جهة اليمين في العربية وجهة اليسار في الإنجليزية بنقاء",
        "لأن محرك بحث Google يحظر استخدام mr- نهائياً",
        "لا يوجد أي فرق بينهما سوى اسم الحرف الأول"
      ],
      correctAnswer: 1,
      explanation: "الخصائص المنطقية ترتبط ببداية ونهاية اتجاه النص، فعندما يكون dir='rtl' تعني ms- مسافة جهة اليمين تلقائياً دون الحاجة لكتابة كودين منفصلين."
    },
    {
      id: "q9-4-2",
      question: "ما هي الفائدة النفسية والتقنية الكبرى لاستخدام Skeleton Loading مقارنة بمؤشرات الدوران (Spinners)؟",
      options: [
        "أنها توفر استهلاك باقة الإنترنت بنسبة 90%",
        "أنها تقلل شعور المستخدم بمدة الانتظار بنسبة 30% وتمنع ظاهرة قفز العناصر المفاجئ (Layout Shift) في الشاشة",
        "أنها تعمل بدون كهرباء",
        "أنها تجبر السيرفر على الرد بسرعة الضعف"
      ],
      correctAnswer: 1,
      explanation: "تحاكي شاشات الـ Skeleton شكل الصفحة الحقيقي، مما يمنح المستخدم إحساساً مسبقاً بما سيراه ويمنع قفز العناصر (Cumulative Layout Shift) عند وصول البيانات."
    },
    {
      id: "q9-4-3",
      question: "ما الذي يجب إضافته على الحاوية الداخلية للنافذة المنبثقة لمنع إغلاقها عند النقر على محتواها الداخلي؟",
      options: [
        "خاصية window.alert()",
        "معالج النقر: onClick={(e) => e.stopPropagation()} لمنع انتشار الحدث للخلفية المعتمة",
        "إيقاف تشغيل فأرة المستخدم",
        "تغيير اسم الملف إلى Modal.safe.jsx"
      ],
      correctAnswer: 1,
      explanation: "دالة e.stopPropagation() تمنع فقاعة الحدث من الصعود إلى الحاوية الأب المعتمة الحاضنة لحدث الإغلاق."
    }
  ],
  exercise: {
    id: "ex9-4",
    title: "بناء مكون نافذة منبثقة تفاعلية كاملة مع خلفية زجاجية وخصائص RTL",
    description: "المطلوب بناء مكون نافذة منبثقة Modal متكاملة: تظليل الخلفية مع تأثير backdrop-blur، عزل النقر الداخلي بـ stopPropagation، دعم الاتجاه العربي بخصائص منطقية ms- و pe-، وزر إغلاق بمفتاح ESC وحركة ناعمة.",
    starterCode: `import React, { useState } from "react";

export function ProfessionalModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0">
      {/* ابنِ النافذة المنبثقة هنا مع التأثير الزجاجي وعزل النقر */}
    </div>
  );
}`,
    hints: [
      "ضع على الخلفية: className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn'.",
      "ضع على الحاوية الداخلية: onClick={(e) => e.stopPropagation()}.",
      "استخدم الخصائص المنطقية مثل ms-auto و text-start."
    ],
    solution: `import React, { useEffect } from "react";

export function ProfessionalModal({ isOpen, onClose, title, children }) {
  // إغلاق النافذة بمفتاح ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // إقفال التمرير الخلفي
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn"
    >
      {/* الحاوية الداخلية مع عزل النقر والخصائص المنطقية */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-800 p-6 rounded-3xl max-w-md w-full text-white space-y-4 shadow-2xl animate-scaleUp"
      >
        <div className="flex justify-between items-center pb-2 border-b border-slate-800">
          <h4 className="font-bold text-sm text-indigo-400">{title}</h4>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-xs font-bold transition-all"
          >
            ✕
          </button>
        </div>

        <div className="text-xs text-slate-300 leading-relaxed">
          {children}
        </div>

        <div className="pt-2 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl transition-all"
          >
            إلغاء
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-900/30"
          >
            تأكيد وحفظ ✓
          </button>
        </div>
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة تصميم واجهات React الاحترافية",
    description: "الدليل المرئي الشامل لـ Design Systems, Modals, Drawers, Skeleton Loading ودعم RTL.",
    sections: [
      {
        heading: "1. نظام التصميم والرموز (Design System Tokens)",
        bullets: [
          "Color Tokens: توحيد الألوان والدرجات في ملف مركزي.",
          "Spacing & Radius: مقاييس معيارية لانحناءات الحواف والمسافات.",
          "Typography Scale: سلم خطوط مدروس ومريح للعين."
        ]
      },
      {
        heading: "2. المكونات التفاعلية المتقدمة (Complex Components)",
        bullets: [
          "Modals & Drawers: تظليل زجاجي، عزل النقر، وإقفال التمرير الخلفي.",
          "Tabs: واجهات مبوبة مع خط مؤشر سفلي متحرك ومظهر انسيابي.",
          "Skeleton Loading: كتل تحاكي الأبعاد الحقيقية لمنع قفز العناصر CLS."
        ]
      },
      {
        heading: "3. العالمية وصقل التجربة (RTL & Polish)",
        bullets: [
          "RTL First: استخدام الخصائص المنطقية (ms-, me-, ps-, pe-) حصراً.",
          "عكس الأسهم: rtl:-scale-x-100 لانقلاب الأيقونات في العربية.",
          "UX Micro-Interactions: استجابات لمسية ولونية فورية بين 150-200ms."
        ]
      }
    ]
  }
};
