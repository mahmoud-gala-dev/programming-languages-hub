// topic1.js - القسم 16: أنماط التصميم وتنظيم التطبيقات
// الموضوع 1: أنماط بناء المكونات (Component Design Patterns)

export const topic1 = {
  id: "16.1",
  title: "أنماط بناء المكونات",
  englishTitle: "Component Design Patterns",
  description: "استعراض معماري شامل لأشهر أنماط تصميم وهندسة المكونات في React؛ من تركيب المكونات (Composition)، وفصل العرض عن المنطق (Container vs Presentational)، والمكونات المركبة (Compound Components)، وحتى الأنماط العصرية مثل Headless Components و Custom Hooks.",
  subtopics: [
    {
      id: "16.1.a",
      title: "تركيب المكونات (Component Composition)",
      englishTerm: {
        term: "Component Composition",
        pronunciation: "كومبوننت كومبوزيشن",
        meaning: "مبدأ بناء واجهات مستخدم معقدة عبر تجميع مكونات صغيرة وبسيطة ومستقلة كبديل عن الوراثة المعقدة"
      },
      description: "القاعدة المعمارية الذهبية في React هي 'تفضيل التركيب على الوراثة' (Composition over Inheritance). بدلاً من إنشاء مكون واحد ضخم يحتوي على عشرات الـ Props والشروط المعقدة مثل `isModal`, `hasHeader`, `showSidebar`، نقوم بتصميم مكونات صغيرة ومتخصصة (مثل `Dialog`, `DialogHeader`, `DialogBody`) وتجميعها معاً باستخدام خاصية `children` أو نمط الفتحات (Slots). هذا يمنح الواجهة مرونة لا نهائية ويمنع مشكلة تضخم المكونات (God Components).",
      analogy: "يشبه الأمر مكعبات الليغو (LEGO)؛ أنت لا تشتري قالباً بلاستيكياً ضخماً وثابتاً لشكل قلعة كاملة لا يمكنك تعديلها، بل تشتري قطع ليغو صغيرة ومنفصلة (مكعب الجدار، مكعب النافذة، مكعب الباب)، ويمكنك تركيبها معاً لبناء منزل، أو قلعة، أو سفينة فضاء بنفس القطع البسيطة!",
      whyItMatters: "يحميك التركيب من ظاهرة Props Drilling (تمرير الخصائص عبر طبقات متعددة)؛ فحينما تمرر المكون الابن جاهزاً كـ `children`، لا يحتاج المكون الأب لمعرفة أي تفاصيل عن البيانات أو الأحداث الخاصة بالابن، مما يفكك الترابط المعقد بين المكونات.",
      syntax: "// نمط التركيب عبر children والفتحات (Slots):\nfunction Modal({ header, children, footer }) {\n  return (\n    <div className='modal'>\n      {header}\n      {children}\n      {footer}\n    </div>\n  );\n}",
      simpleExample: `// مثال يوضح بساطة تركيب المكونات عبر children
import React, { ReactNode } from 'react';

// مكون إطار بطاقة بسيط وقابل لإعادة الاستخدام مع أي محتوى
export function SimpleCardFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      {/* رأس البطاقة الثابت */}
      <h3 className="font-bold text-sm text-cyan-400 mb-2 border-b border-slate-800 pb-1">
        {title}
      </h3>
      {/* محتوى مرن يُركب بحرية من الخارج عبر children */}
      <div className="text-xs text-slate-300">
        {children}
      </div>
    </div>
  );
}

// استخدام المكون بتركيب محتويات مختلفة دون تعديل الكود الأصلي
export function SimpleCompositionDemo() {
  return (
    <div className="space-y-3">
      {/* تركيب بطاقة تحتوي نموذجاً */}
      <SimpleCardFrame title="تسجيل الدخول">
        <input type="text" placeholder="اسم المستخدم" className="w-full p-1.5 bg-slate-800 rounded mb-2 text-xs" />
        <button className="px-3 py-1 bg-cyan-600 rounded text-xs font-bold">دخول</button>
      </SimpleCardFrame>

      {/* تركيب بطاقة تحتوي إحصائيات */}
      <SimpleCardFrame title="إحصائيات المبيعات">
        <p className="text-emerald-400 font-bold text-lg">14,250 $</p>
        <span className="text-[10px] text-slate-500">تم تحقيق الهدف الشهري بنجاح 🎉</span>
      </SimpleCardFrame>
    </div>
  );
}`,
      advancedExample: `// تطبيق متقدم لنمط الفتحات المسمى (Named Slots Pattern) لبناء بطاقة متجر غنية
import React, { ReactNode } from 'react';

// واجهة خصائص البطاقة المعتمدة على الفتحات
interface ProductCardSlotsProps {
  mediaSlot: ReactNode;
  headerSlot: ReactNode;
  bodySlot: ReactNode;
  actionsSlot: ReactNode;
}

// مكون الحاوية المعتمد على التركيب النقي
export function ProductCardContainer({
  mediaSlot,
  headerSlot,
  bodySlot,
  actionsSlot
}: ProductCardSlotsProps) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden text-white max-w-sm mx-auto shadow-2xl hover:border-slate-700 transition-all">
      {/* فتحة الوسائط (صورة أو فيديو) */}
      <div className="relative h-40 bg-slate-900 overflow-hidden">
        {mediaSlot}
      </div>

      {/* المحتوى النصي */}
      <div className="p-5 space-y-3">
        {/* فتحة الترويسة والوسوم */}
        <div>{headerSlot}</div>

        {/* فتحة الوصف والبيانات */}
        <div className="text-xs text-slate-400 leading-relaxed">
          {bodySlot}
        </div>

        {/* فتحة الأزرار والإجراءات */}
        <div className="pt-2 border-t border-slate-800/80 flex justify-between items-center">
          {actionsSlot}
        </div>
      </div>
    </div>
  );
}

// مكون المستهلك الذي يركب الأجزاء بحرية تامة
export function ComposedProductExample() {
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">تركيب المكونات بنمط الفتحات (Named Slots)</h3>

      <ProductCardContainer
        mediaSlot={
          <img
            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80"
            alt="ساعة ذكية"
            className="w-full h-full object-cover"
          />
        }
        headerSlot={
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-md">
                إلكترونيات
              </span>
              <h4 className="font-bold text-sm text-slate-100 mt-1">ساعة Pro الذكية الجيل الخامس</h4>
            </div>
            <span className="font-mono font-bold text-emerald-400 text-sm">299 $</span>
          </div>
        }
        bodySlot={
          <p>
            تتميز بشاشة AMOLED ساطعة، ومستشعرات دقيقة لنبض القلب، ومقاومة تامة للمياه حتى عمق 50 متراً مع بطارية تدوم 7 أيام.
          </p>
        }
        actionsSlot={
          <>
            <span className="text-[11px] text-slate-500">متوفر 12 قطعة في المخزن</span>
            <button className="px-4 py-1.5 bg-cyan-600 hover:bg-cyan-500 font-bold rounded-xl text-xs transition-colors">
              إضافة للسلة 🛒
            </button>
          </>
        }
      />
    </div>
  );
}`,
      outputExplanation: "من خلال نمط الفتحات (Named Slots)، لا يحتاج مكون `ProductCardContainer` لمعرفة أي تفاصيل حول كيفية جلب الصورة أو نوع العملة أو تصنيف المنتج؛ بل يقوم فقط بتنظيم وتخطيط الهيكل، ويترك للمكون المستهلك الحرية التامة في تركيب أي عناصر داخل الفتحات.",
      commonMistakes: [
        {
          mistake: "إضافة عشرات الـ Props البوليانية مثل `hasHeader`, `isWide`, `showPrice` داخل مكون واحد",
          fix: "استبدل هذه الخصائص بنمط التركيب `children` أو الفتحات لتقسيم المسؤوليات وجعل المكون مرناً وقابلاً للتوسع."
        },
        {
          mistake: "إعادة بناء المكون من الصفر لكل تعديل طفيف في التصميم",
          fix: "استخرج الهيكل المشترك واجعل الأجزاء المتغيرة تقبل عناصر ReactNode ممررة من الخارج."
        }
      ],
      bestPractices: [
        "فضل التركيب دائماً على الوراثة والمكونات الضخمة المعقدة.",
        "استخدم الفتحات المسماة (Named Slots) عندما يحتاج المكون لأكثر من موضع مخصص لعرض المحتوى المتغير."
      ],
      infographic: {
        title: "مقارنة المكون الضخم مقابل المكون المركب",
        points: [
          "المكون الضخم (God Component): عشرات الـ Props ➔ شروط معقدة `if/else` داخل JSX ➔ كود هش وصعب الصيانة.",
          "المكون المركب (Composed Component): مكونات صغيرة مستقلة ➔ تجميع سلس عبر `children` والفتحات ➔ مرونة مطلقة وسهولة إعادة استخدام.",
          "القاعدة الذهبية: 'اجعل المكونات كقطع الليغو؛ صغيرة، مستقلة، وتتصل ببعضها بسلاسة'."
        ]
      }
    },
    {
      id: "16.1.b",
      title: "Container و Presentational Components",
      englishTerm: {
        term: "Container & Presentational Components Pattern",
        pronunciation: "كونتينر آند بريزينتيشونال كومبوننتس باترن",
        meaning: "نمط فصل مسؤوليات المكونات بين مكونات ذكية تدير البيانات والمنطق ومكونات نقية تتولى العرض فقط"
      },
      description: "يعد نمط 'مكونات الحاوية والمكونات العارضة' (الذي صاغه المهندس Dan Abramov) من أشهر أنماط معمارية React الكلاسيكية. يقوم النمط على فصل المسؤوليات (Separation of Concerns):\n1. المكون العارض (Presentational / Dumb Component): يهتم حصراً بـ 'كيف يبدو الشكل' (How things look). لا يعرف شيئاً عن الـ API أو Redux، ولا يمتلك حالة معقدة، ويستقبل بياناته ودواله عبر الـ Props، مما يجعله نقيّاً وفائق السهولة في الاختبار وإعادة الاستخدام ومطابقة تصاميم Figma.\n2. مكون الحاوية (Container / Smart Component): يهتم بـ 'كيف تسير العمليات' (How things work). يتولى جلب البيانات من الشبكة، وإدارة الحالات، والتكامل مع المخازن، ثم يمرر البيانات المعالجة إلى المكون العارض.",
      analogy: "يشبه الأمر المطبخ وصالة الطعام في مطعم راقٍ؛ في المطبخ (Container) يعمل الطهاة على إشعال النيران، وغسل الخضار، وتتبيل اللحوم، وإدارة المخزون؛ بينما في صالة الطعام (Presentational)، يقدم النادل الطبق الأنيق المزخرف للزبون بابتسامة راقية دون أن يرى الزبون دخان المطبخ أو فوضى القدور!",
      whyItMatters: "حتى في عصر React Hooks الحديث، يظل هذا الفصل ضرورياً في المشاريع الكبرى؛ فهو يسمح لمطوري الواجهات (UI Designers/Frontends) بالعمل على المكونات العارضة بحرية وتوثيقها في Storybook، بينما يركز مهندسو المنطق على جلب البيانات والاختبارات المنطقية.",
      syntax: "// المكون العارض (نقي ومباشر):\nfunction UserListUI({ users, onSelect }) { ... }\n\n// مكون الحاوية (يجلب ويدير البيانات):\nfunction UserListContainer() {\n  const { data } = useUsers();\n  return <UserListUI users={data} onSelect={...} />;\n}",
      simpleExample: `// 1. المكون العارض (Presentational): يهتم بالتنسيق والشكل فقط
interface CounterUIProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function CounterUI({ count, onIncrement, onDecrement }: CounterUIProps) {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center text-white">
      <span className="text-3xl font-mono font-bold text-cyan-400 block mb-3">{count}</span>
      <div className="flex justify-center gap-2">
        <button onClick={onDecrement} className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold">-</button>
        <button onClick={onIncrement} className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-xs font-bold">+</button>
      </div>
    </div>
  );
}

// 2. مكون الحاوية (Container): يهتم بمنطق الحالة وحسابات الأعمال
import { useState } from 'react';

export function CounterContainer() {
  const [value, setValue] = useState(0);

  const increment = () => setValue((v) => v + 1);
  const decrement = () => setValue((v) => Math.max(0, v - 1));

  // تمرير البيانات للدالة العارضة
  return <CounterUI count={value} onIncrement={increment} onDecrement={decrement} />;
}`,
      advancedExample: `// تطبيق متكامل لقائمة مستخدمين يفصل تماماً بين جلب البيانات والشاشات المرئية
import React, { useState, useEffect } from 'react';

// ==========================================
// 1. المكون العارض النقي (Presentational Component)
// ==========================================

export interface UserRecord {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'suspended';
}

interface UserDirectoryUIProps {
  users: UserRecord[];
  isLoading: boolean;
  errorMessage: string | null;
  selectedId: string | null;
  onSelectUser: (id: string) => void;
  onRefresh: () => void;
}

export function UserDirectoryUI({
  users,
  isLoading,
  errorMessage,
  selectedId,
  onSelectUser,
  onRefresh
}: UserDirectoryUIProps) {
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-cyan-400">دليل المستخدمين (Presentational UI)</h3>
        <button
          onClick={onRefresh}
          className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg border border-slate-700"
        >
          تحديث 🔄
        </button>
      </div>

      {isLoading && (
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center text-xs text-cyan-400 animate-pulse">
          ⏳ جاري جلب المستخدمين...
        </div>
      )}

      {errorMessage && (
        <div className="p-3 bg-rose-950/40 border border-rose-800 text-rose-300 text-xs rounded-xl mb-3">
          ❌ {errorMessage}
        </div>
      )}

      {!isLoading && !errorMessage && (
        <div className="space-y-2">
          {users.map((u) => (
            <div
              key={u.id}
              onClick={() => onSelectUser(u.id)}
              className={\`p-3 rounded-xl border cursor-pointer transition-all flex justify-between items-center text-xs \${selectedId === u.id ? 'bg-cyan-950/40 border-cyan-500/60 ring-1 ring-cyan-500/30' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}\`}
            >
              <div>
                <p className="font-bold text-slate-200">{u.name}</p>
                <span className="text-[11px] text-slate-400">{u.role}</span>
              </div>
              <span
                className={\`px-2 py-0.5 rounded-full text-[10px] font-bold \${u.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}\`}
              >
                {u.status === 'active' ? 'نشط' : 'معلق'}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ==========================================
// 2. مكون الحاوية الذكي (Container Component)
// ==========================================

export function UserDirectoryContainer() {
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // دالة جلب البيانات المنطقية
  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await new Promise((r) => setTimeout(r, 600)); // محاكاة تأخير الشبكة
      setUsers([
        { id: 'usr-1', name: 'أحمد إبراهيم', role: 'Lead Architect', status: 'active' },
        { id: 'usr-2', name: 'سارة عبد الرحمن', role: 'Senior UX Researcher', status: 'active' },
        { id: 'usr-3', name: 'خالد الزهراني', role: 'Security Engineer', status: 'suspended' }
      ]);
    } catch {
      setError('تعذر تحميل بيانات المستخدمين من الخادم.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // ربط الحاوية بالعرض
  return (
    <UserDirectoryUI
      users={users}
      isLoading={isLoading}
      errorMessage={error}
      selectedId={selectedId}
      onSelectUser={(id) => setSelectedId(id)}
      onRefresh={loadData}
    />
  );
}`,
      outputExplanation: "يمكنك أخذ المكون العارض `UserDirectoryUI` وتشغيله في Storybook بدون الحاجة لإنشاء أي خادم وهمي (Mock Server)، وتجربة حالات التحميل والخطأ بتمرير Props مباشرة، في حين تتكفل الحاوية `UserDirectoryContainer` بالتنسيق مع الخوادم الحقيقية وإدارة دورة حياة الـ State.",
      commonMistakes: [
        {
          mistake: "خلط طلبات fetch والـ State المعقدة مع مئات أسطر Tailwind CSS في ملف واحد غير قابل للاختبار",
          fix: "افصل منطق جلب البيانات في Container أو Custom Hook واترك شفرة العرض نقية ومركزة على الـ JSX."
        },
        {
          mistake: "الإفراط في إنشاء Containers للمكونات البسيطة التي لا تحتاج أي منطق",
          fix: "طبق النمط على مستوى الشاشات والوحدات الوظيفية الكبرى فقط لتفادي التعقيد الزائد."
        }
      ],
      bestPractices: [
        "اجعل المكون العارض دالة نقية (Pure Component) تستقبل كل شيء عبر الـ Props.",
        "استغل المكونات العارضة في بناء مكتبة التصميم الخاصة بالشركة وتوثيقها بسهولة."
      ],
      infographic: {
        title: "تشريح نمط Container مقابل Presentational",
        points: [
          "المكون العارض (Presentational): JSX نقي، تنسيقات CSS، خالي من الـ State المعقدة، اختبارات مرئية سريعة.",
          "مكون الحاوية (Container): استدعاء Hooks، طلبات API، إدارة الحالة، لا يحتوي على تنسيقات بصرية مباشرة.",
          "الميزة الكبرى: إمكانية استبدال واجهة التصميم بالكامل دون المساس بسطر واحد من منطق البيانات."
        ]
      }
    },
    {
      id: "16.1.c",
      title: "Compound Components Pattern",
      englishTerm: {
        term: "Compound Components Pattern",
        pronunciation: "كومباوند كومبوننتس باترن",
        meaning: "نمط المكونات المركبة التي تشترك في حالة ضمنية مشتركة لتوفير واجهات مرنة تشبه عناصر HTML الأصلية"
      },
      description: "المكونات المركبة (Compound Components) هو نمط تصميم مستوحى من عناصر HTML القياسية مثل `<select>` و `<option>`، حيث تعمل مجموعة من المكونات معاً وتتشارك حالة داخلية ضمنية (Implicit State) دون الحاجة لتمرير الخصائص صراحة بينها. في React، نطبق هذا النمط باستخدام `React.createContext` لإنشاء سياق داخلي يربط المكون الأب بالأبناء؛ مثل مكون الأكورديون: `<Accordion><Accordion.Item><Accordion.Header /><Accordion.Body /></Accordion.Item></Accordion>`.",
      analogy: "يشبه الأمر جهاز المسرح المنزلي المتكامل؛ تشتري نظاماً صوتياً يتكون من وحدة تحكم رئيسية ومكبرات صوت محيطية لاسلكية؛ عند تشغيل زر رفع الصوت في الوحدة الرئيسية، ترتفع كل السماعات بالتناغم عبر التردد اللاسلكي المشترك دون الحاجة لمد أسلاك ظاهرة بين كل سماعة وسماعة!",
      whyItMatters: "يمنح هذا النمط المطور الذي يستهلك المكون أعلى درجات الحرية في ترتيب وتنسيق الأجزاء الداخلية دون قيود، وهو النمط المفضل لبناء مكتبات المكونات الاحترافية العالمية مثل Radix UI و Headless UI.",
      syntax: "// استخدام النمط الموجه للكائنات:\nconst Tabs = ({ children }) => <TabsContext.Provider>{children}</TabsContext.Provider>;\nTabs.List = TabsList;\nTabs.Tab = TabItem;\nTabs.Panel = TabPanel;",
      simpleExample: `// مثال بسيط لنمط المكونات المركبة لمفتاح التبديل Toggle
import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. إنشاء السياق الداخلي المشترك
interface ToggleContextType {
  on: boolean;
  toggle: () => void;
}
const ToggleContext = createContext<ToggleContextType | null>(null);

// 2. المكون الأب الرئيسي
export function Toggle({ children }: { children: ReactNode }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn((prev) => !prev);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl inline-block text-white">
        {children}
      </div>
    </ToggleContext.Provider>
  );
}

// 3. المكونات الفرعية التابعة
Toggle.On = function ToggleOn({ children }: { children: ReactNode }) {
  const ctx = useContext(ToggleContext);
  return ctx?.on ? <div>{children}</div> : null;
};

Toggle.Off = function ToggleOff({ children }: { children: ReactNode }) {
  const ctx = useContext(ToggleContext);
  return !ctx?.on ? <div>{children}</div> : null;
};

Toggle.Button = function ToggleButton() {
  const ctx = useContext(ToggleContext);
  return (
    <button
      onClick={ctx?.toggle}
      className="mt-2 px-3 py-1 bg-cyan-600 hover:bg-cyan-500 rounded text-xs font-bold"
    >
      تبديل الحالة
    </button>
  );
};`,
      advancedExample: `// تطبيق متقدم لقائمة أكورديون قابلة للتوسيع بنمط Compound Components الكامل
import React, { createContext, useContext, useState, ReactNode } from 'react';

// ==========================================
// 1. السياق المشترك وإدارة الحالة المفتوحة
// ==========================================

interface AccordionContextType {
  openId: string | null;
  toggleItem: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

function useAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error('يجب استدعاء عناصر الأكورديون داخل <Accordion /> فقط.');
  return ctx;
}

// ==========================================
// 2. مكون الأكورديون الرئيسي والمكونات الفرعية
// ==========================================

interface AccordionProps {
  children: ReactNode;
  defaultOpenId?: string | null;
}

export function Accordion({ children, defaultOpenId = null }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggleItem = (id: string) => {
    setOpenId((curr) => (curr === id ? null : id));
  };

  return (
    <AccordionContext.Provider value={{ openId, toggleItem }}>
      <div className="space-y-2 max-w-md mx-auto">{children}</div>
    </AccordionContext.Provider>
  );
}

// سياق فرعي للعنصر الواحد لمعرفة معرفه
const AccordionItemContext = createContext<string | null>(null);

// مكون العنصر الفرعي Item
Accordion.Item = function AccordionItem({ id, children }: { id: string; children: ReactNode }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all">
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

// مكون الترويسة Header
Accordion.Header = function AccordionHeader({ children }: { children: ReactNode }) {
  const { openId, toggleItem } = useAccordion();
  const itemId = useContext(AccordionItemContext);
  if (!itemId) throw new Error('Header must be within Accordion.Item');

  const isOpen = openId === itemId;

  return (
    <button
      onClick={() => toggleItem(itemId)}
      className="w-full p-4 flex justify-between items-center text-xs font-bold text-white hover:bg-slate-850 transition-colors text-right"
    >
      <span>{children}</span>
      <span className={\`text-cyan-400 font-mono transition-transform duration-200 \${isOpen ? 'rotate-180' : ''}\`}>
        ▼
      </span>
    </button>
  );
};

// مكون المحتوى Body
Accordion.Body = function AccordionBody({ children }: { children: ReactNode }) {
  const { openId } = useAccordion();
  const itemId = useContext(AccordionItemContext);
  if (!itemId) throw new Error('Body must be within Accordion.Item');

  const isOpen = openId === itemId;

  if (!isOpen) return null;

  return (
    <div className="p-4 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
      {children}
    </div>
  );
};

// ==========================================
// 3. استخدام المكون المركب بحرية وسلاسة
// ==========================================

export function CompoundAccordionDemo() {
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      <h3 className="text-xl font-bold text-amber-400 mb-2 text-center">أكورديون المكونات المركبة (Compound Pattern)</h3>
      <p className="text-xs text-slate-400 mb-4 text-center">تكامل ناعم بين الأجزاء دون الحاجة لتمرير Props يدوية.</p>

      <Accordion defaultOpenId="faq-1">
        <Accordion.Item id="faq-1">
          <Accordion.Header>ما هو نمط Compound Components؟</Accordion.Header>
          <Accordion.Body>
            هو نمط يسمح لعدة مكونات بالتواصل والتشارك في الحالة ضمنياً عبر Context، تماماً مثل عنصري select و option في HTML.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item id="faq-2">
          <Accordion.Header>ما هي الفائدة الأساسية للنمط؟</Accordion.Header>
          <Accordion.Body>
            يمنح المطور حرية كاملة في ترتيب الهيكل وتخصيصه دون كتابة خصائص Props مكررة في كل سطر.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item id="faq-3">
          <Accordion.Header>هل يدعم هذا النمط TypeScript؟</Accordion.Header>
          <Accordion.Body>
            نعم، وبكفاءة عالية عبر إرفاق المكونات الفرعية كخصائص ثابتة على الدالة الرئيسية أو تصديرها بشكل مستقل.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}`,
      outputExplanation: "من خلال نمط Compound Components، يستطيع المطور كتابة `<Accordion.Header>` و `<Accordion.Body>` بالترتيب الذي يراه مناسباً، وتقوم المكونات بالتواصل ذاتياً لمعرفة من هو العنصر المفتوح حالياً دون أي تدخل أو تمرير لـ `isOpen` باليد.",
      commonMistakes: [
        {
          mistake: "محاولة استخدام `React.Children.map` و `React.cloneElement` بدلاً من React Context",
          fix: "ابتعد عن cloneElement؛ فهو هش وينكسر فور إضافة عنصر `div` إضافي للتنسيق. استخدم React Context دائماً لمشاركة الحالة الضمنية."
        },
        {
          mistake: "نسيان فحص وجود الـ Context مما يسبب خطأ غامضاً إذا استدعي المكون الفرعي خارج الأب",
          fix: "اكتب Custom Hook مثل `useAccordion()` يتحقق من وجود السياق ويرمي خطأ توضيحياً صريحاً."
        }
      ],
      bestPractices: [
        "اربط المكونات الفرعية كخصائص ثابتة على المكون الأب مثل `Tabs.List = ...` لتقديم واجهة نظيفة ومجمعة.",
        "استخدم نمط Compound Components لبناء القوائم المنسدلة، التبويبات، الأكورديون، ونوافذ الحوار."
      ],
      infographic: {
        title: "آلية عمل المكونات المركبة Compound Components",
        points: [
          "المكون الأب الرئيسي: يمتلك الـ State وينشئ Context لتزويد الأبناء بها.",
          "المكونات الفرعية: تستهلك السياق داخلياً وتتشارك الحالة دون تمرير أي Props ظاهرة.",
          "تجربة المطور: كود تصريحي مرن ومقروء يضاهي عناصر HTML القياسية."
        ]
      }
    },
    {
      id: "16.1.d",
      title: "Render Props Pattern",
      englishTerm: {
        term: "Render Props Pattern",
        pronunciation: "ريندر بروبس باترن",
        meaning: "نمط مشاركة المنطق البرمجي بين المكونات عبر تمرير دالة كخاصية تقوم بإرجاع عناصر واجهة المستخدم"
      },
      description: "نمط دالة التصيير (Render Prop) هو أسلوب لمشاركة المنطق وحالة المكونات؛ حيث يقوم المكون بتغليف منطق متكرر (مثل تتبع حركة الفأرة، أو مراقبة التمرير، أو إدارة البيانات) ثم يستقبل خاصية تسمى `render` (أو دالة ممرة كـ `children`) ويمرر لها البيانات المحسوبة لتقوم هي بتحديد كيفية رسم الواجهة. ورغم أن الـ Custom Hooks حلت محل معظم استخدامات هذا النمط، إلا أنه يظل نمطاً حيوياً ومستخدماً في مكتبات كبرى مثل Formik و Downshift ومكونات الافتراضية (Virtualization).",
      analogy: "يشبه الأمر استئجار سيارة سياحية خاصة مع سائق محترف؛ السائق والسيارة يوفران لك خدمة القيادة وتجنب الزحام وصيانة المركبة (المنطق الداخلي للـ Render Prop)، بينما أنت في المقعد الخلفي تختار الوجهة التي تريد النزول عندها، والموسيقى التي تفضل الاستماع إليها (دالة التصيير المرنة)!",
      whyItMatters: "يتيح لك هذا النمط إعادة استخدام المنطق الحسابي مع منح المستهلك السيطرة المطلقة بنسبة 100% على هيكل وتنسيق الـ JSX المعروض.",
      syntax: "<DataProvider render={(data) => (\n  <div>{data.title}</div>\n)} />",
      simpleExample: `// مثال بسيط لنمط Render Props لتتبع حالة الفأرة
import React, { useState, ReactNode } from 'react';

interface MouseTrackerProps {
  // خاصية render تقبل دالة تستلم الإحداثيات وترجع JSX
  render: (coords: { x: number; y: number }) => ReactNode;
}

export function MouseTracker({ render }: MouseTrackerProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
      {/* استدعاء دالة التصيير وتمرير البيانات المحسوبة */}
      {render(coords)}
    </div>
  );
}

// الاستهلاك: نحدد شكل العرض بحرية تامة
export function SimpleRenderPropsDemo() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <p className="text-xs text-cyan-400 font-mono">
          موضع مؤشر الفأرة اللحظي: X={x}, Y={y}
        </p>
      )}
    />
  );
}`,
      advancedExample: `// مكون إدارة تصفية وبحث عام باستخدام نمط Render Props
import React, { useState, ReactNode } from 'react';

interface FilterManagerProps<T> {
  items: T[];
  filterFn: (item: T, query: string) => boolean;
  // دالة التصيير تستقبل البيانات المصفاة ودوال التحكم
  children: (props: {
    filteredItems: T[];
    query: string;
    setQuery: (q: string) => void;
    totalCount: number;
    matchCount: number;
  }) => ReactNode;
}

export function GenericFilterManager<T>({ items, filterFn, children }: FilterManagerProps<T>) {
  const [query, setQuery] = useState('');

  const filteredItems = items.filter((item) => filterFn(item, query));

  return (
    <>
      {children({
        filteredItems,
        query,
        setQuery,
        totalCount: items.length,
        matchCount: filteredItems.length
      })}
    </>
  );
}

// استهلاك المكون العام لعرض قائمة بطاقات مطورين
interface Developer {
  id: string;
  name: string;
  skill: string;
}

export function RenderPropsFilterStudio() {
  const devs: Developer[] = [
    { id: '1', name: 'ياسر القحطاني', skill: 'React & TypeScript' },
    { id: '2', name: 'هدى السالم', skill: 'UI/UX Design & Tailwind' },
    { id: '3', name: 'ماجد الشريف', skill: 'Node.js & DevOps' }
  ];

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">إدارة الفلترة بنمط Render Props</h3>
      <p className="text-xs text-slate-400 mb-4">
        منطق البحث معزول بالكامل، والواجهة مصممة بحرية عبر دالة children.
      </p>

      {/* استخدام المكون وتمرير دالة كـ children */}
      <GenericFilterManager
        items={devs}
        filterFn={(dev, q) => dev.name.includes(q) || dev.skill.includes(q)}
      >
        {({ filteredItems, query, setQuery, matchCount, totalCount }) => (
          <div>
            <div className="flex justify-between items-center mb-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث بالاسم أو المهارة..."
                className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
              />
              <span className="text-[10px] text-slate-500 mr-2 font-mono">
                {matchCount} من {totalCount}
              </span>
            </div>

            <div className="space-y-2 mt-3">
              {filteredItems.map((dev) => (
                <div key={dev.id} className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs flex justify-between">
                  <span className="font-bold text-slate-200">{dev.name}</span>
                  <span className="text-cyan-400 font-mono text-[11px]">{dev.skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </GenericFilterManager>
    </div>
  );
}`,
      outputExplanation: "من خلال نمط Render Props، يتكفل `GenericFilterManager` بالكامل بإدارة حالة `query` وتطبيق دالة الفلترة `filterFn`، ويمرر النتائج في معلمات الدالة إلى المكون المستهلك ليقوم برسم المدخلات والبطاقات بأي تنسيق يحلو له.",
      commonMistakes: [
        {
          mistake: "الاستمرار في استخدام Render Props لحالات يمكن حلها بسهولة أكبر بـ Custom Hooks",
          fix: "إذا كان الهدف مشاركة منطق فقط، فاستخدم Custom Hook؛ واستخدم Render Props فقط عندما تحتاج لمشاركة منطق مرتبط بهيكل تصيير معقد."
        },
        {
          mistake: "إنشاء دوال جديدة مضمنة داخل render prop تتسبب في كسر التخزين المؤقت",
          fix: "احرص على ثبات المكونات واستخدم التخزين المؤقت عند تمرير دوال التصيير المعقدة."
        }
      ],
      bestPractices: [
        "فضل استخدام `children` كدالة تصيير بدلاً من خاصية `render` منفصلة لتتماشى مع الأعراف الشائعة.",
        "وثق أنواع المعاملات المعادة من دالة التصيير بدقة في TypeScript لتوفير إكمال تلقائي مريح."
      ],
      infographic: {
        title: "هندسة نمط Render Props",
        points: [
          "تغليف المنطق: المكون الحاوي يدير الحالة (State) والأحداث الحسابية.",
          "تفويض العرض: بدلاً من رسم JSX ثابت، يستدعي `props.children(data)`.",
          "المرونة القصوى: المطور المستهلك يمتلك السيطرة بنسبة 100% على التصميم والتنسيق."
        ]
      }
    },
    {
      id: "16.1.e",
      title: "Higher-Order Components (HOC)",
      englishTerm: {
        term: "Higher-Order Components Pattern",
        pronunciation: "هاير أوردر كومبوننتس باترن",
        meaning: "دالة تستقبل مكوناً وتعيد مكوناً جديداً معززاً بخصائص أو سلوكيات إضافية (Component Wrapper)"
      },
      description: "المكون عالي الرتبة (HOC) هو نمط متقدم مستوحى من الدوال عالية الرتبة في البرمجة الوظيفية. الـ HOC ليس مكوناً في حد ذاته، بل هو دالة برمجية نقية تستقبل مكوناً كمعامل وتُرجع مكوناً جديداً محسناً ومحاطاً بسلوكيات إضافية (مثل: التحقق من المصادقة `withAuth`, أو التتبع والتحليلات `withAnalytics`). كان هذا النمط الأكثر انتشاراً في عهد Class Components قبل ظهور الـ Hooks، وما زال مستخدماً في العديد من المكتبات التراثية مثل Redux `connect()` وتوجيه Next.js القديم.",
      analogy: "يشبه الأمر ارتداء بدلة غوص أو درع حديدي؛ المحارب هو المكون الأصلي، وعندما يرتدي الدرع السحري (`withArmor(Warrior)`)، يكتسب قدرات خارقة مثل الحماية ضد النيران والتنفس تحت الماء، بينما يظل نفس المحارب الأصلي ويحتفظ بمهاراته القتالية دون تغيير!",
      whyItMatters: "فهم الـ HOC ضروري لقراءة وصيانة وترقية المشاريع الضخمة التي بنيت في السنوات السابقة، وللتعامل مع مكتبات شهيرة تعتمد عليه حتى اليوم.",
      syntax: "function withAuth(Component) {\n  return function AuthenticatedComponent(props) {\n    const isAuth = checkAuth();\n    if (!isAuth) return <Redirect />;\n    return <Component {...props} />;\n  };\n}",
      simpleExample: `// مثال بسيط لـ HOC يضيف حماية المصادقة
import React from 'react';

// الدالة عالية الرتبة withAuth
export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return function WithAuthComponent(props: P) {
    // محاكاة فحص المصادقة
    const isAuthenticated = true;

    if (!isAuthenticated) {
      return <div className="p-3 bg-rose-950 text-rose-300 text-xs rounded">يرجى تسجيل الدخول أولاً!</div>;
    }

    // تمرير كافة الخصائص للمكون الأصلي بعد اجتياز الفحص
    return <WrappedComponent {...props} />;
  };
}

// مكون عادي
function SecretDashboard({ user }: { user: string }) {
  return <div className="text-emerald-400 text-xs">مرحباً {user} في لوحة التحكم السرية.</div>;
}

// تعزيز المكون بـ HOC
export const ProtectedDashboard = withAuth(SecretDashboard);`,
      advancedExample: `// تطبيق HOC متقدم لتسجيل التحليلات وقياس زمن التصيير وحقن الخصائص
import React, { ComponentType, useEffect, useState } from 'react';

// واجهة الخصائص المحقونة بواسطة الـ HOC
export interface WithPerformanceMetricsProps {
  renderTimestamp: number;
  environment: 'production' | 'staging';
}

// دالة الـ HOC المعززة
export function withPerformanceTracker<P extends object>(
  WrappedComponent: ComponentType<P & WithPerformanceMetricsProps>,
  componentName: string
) {
  // المكون المغلف الجديد
  function EnhancedComponent(props: P) {
    const [mountTime] = useState(() => Date.now());

    useEffect(() => {
      console.log(\`📈 [HOC Tracker]: تم تصيير المكون \${componentName} في زمن: \${new Date(mountTime).toLocaleTimeString()}\`);
    }, [mountTime]);

    // حقن الخصائص الجديدة مع تمرير الخصائص الأصلية (Props Forwarding)
    return (
      <WrappedComponent
        {...props}
        renderTimestamp={mountTime}
        environment="production"
      />
    );
  }

  // ضبط الاسم التوضيحي للأداة في DevTools
  EnhancedComponent.displayName = \`withPerformanceTracker(\${componentName})\`;

  return EnhancedComponent;
}

// المكون الأصلي العادي
interface AnalyticsCardProps {
  title: string;
  metricValue: string;
}

function RawAnalyticsCard({
  title,
  metricValue,
  renderTimestamp,
  environment
}: AnalyticsCardProps & WithPerformanceMetricsProps) {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-xs text-slate-200">{title}</h4>
        <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-cyan-400 font-mono">
          {environment}
        </span>
      </div>
      <p className="text-2xl font-bold font-mono text-emerald-400">{metricValue}</p>
      <span className="text-[10px] text-slate-500 block">
        طابع وقت التصيير: {new Date(renderTimestamp).toLocaleTimeString()}
      </span>
    </div>
  );
}

// إنتاج المكون المعزز بـ HOC
const TrackedCard = withPerformanceTracker(RawAnalyticsCard, 'AnalyticsCard');

// المكون المستهلك
export function HOCDemoViewer() {
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">المكونات عالية الرتبة (HOC Pattern)</h3>
      <p className="text-xs text-slate-400 mb-4">
        تعزيز المكونات بخصائص وسلوكيات حماية وقياس دون تعديل شفرتها الأصلية.
      </p>

      <TrackedCard title="معدل الزيارات اليومية" metricValue="84,210" />
    </div>
  );
}`,
      outputExplanation: "يوضح الكود كيف استقبلت دالة `withPerformanceTracker` مكون `RawAnalyticsCard` وأرجعت نسخة معززة تحقن تلقائياً خصائص `renderTimestamp` و `environment`، مع تسجيل التحليلات في الـ Console دون أن يحتاج المكون الأصلي لكتابة أي كود تتبع داخله.",
      commonMistakes: [
        {
          mistake: "استدعاء الـ HOC داخل دالة تصيير المكون الأب مثل `const Comp = withAuth(Base); return <Comp />`",
          fix: "استدعِ الـ HOC خارج دوال المكونات في المستوى العام للملف؛ فاستدعاؤه في كل تصيير يعيد إنشاء المكون ويفقد حالته تماماً."
        },
        {
          mistake: "تضارب الخصائص (Props Collision) عندما يحقن الـ HOC خاصية بنفس اسم خاصية أصلية",
          fix: "اختر أسماء فريدة ومحددة للخصائص المحقونة أو فضل استخدام Custom Hooks لتفادي تضارب الأسماء."
        }
      ],
      bestPractices: [
        "استخدم Custom Hooks في المشاريع الحديثة كبديل أنظف وأسهل لـ HOC.",
        "اضبط دائماً `displayName` للمكون الناتج من الـ HOC لتسهيل تصحيحه في React DevTools."
      ],
      infographic: {
        title: "عيوب HOC القديم مقابل مزايا Custom Hooks",
        points: [
          "عيوب HOC: تضارب أسماء الـ Props، تعقيد أنواع TypeScript، تضخم شجرة المكونات بتغليفات وهمية (Wrapper Hell).",
          "مزايا Custom Hooks: شفرة خطية نظيفة، سهولة تمرير المعاملات، صفر تغليفات في شجرة الـ DOM.",
          "القاعدة: استخدم Custom Hooks لكل المشاريع الحديثة، وافهم HOC لصيانة الأنظمة التراثية."
        ]
      }
    },
    {
      id: "16.1.f",
      title: "Custom Hooks Pattern",
      englishTerm: {
        term: "Custom Hooks Pattern",
        pronunciation: "كاستم هوكس باترن",
        meaning: "النمط المعماري الأحدث والأنظف في React لاستخراج وإعادة استخدام منطق الحالة والآثار الجانبية"
      },
      description: "يعتبر نمط الخطافات المخصصة (Custom Hooks) هو الثورة المعمارية الأكبر التي حلت محل أنماط الـ HOC والـ Render Props القديمة. الخطاف المخصص هو دالة جافاسكربت عادية تبدأ كلمتها بـ `use`، وتستطيع استدعاء خطافات React الأخرى بداخلها (`useState`, `useEffect`, `useMemo`). يتيح هذا النمط استخراج منطق العمل والاتصال بالخادم في وحدات مستقلة ومختبرة، مما يجعل مكونات الواجهة نقية وتركز فقط على عرض الـ JSX.",
      analogy: "يشبه الأمر سكين الجيش السويسري المحمول (Swiss Army Knife) في جيبك؛ بدلاً من أن ترتدي درعاً كاملاً ثقيلاً في كل مرة تحتاج فيها لقطع حبل (HOC)، تسحب أداة صغيرة من جيبك تنجز بها المهمة في ثوانٍ، وتضعها في جيبك مجدداً دون أن يتغير مظهر ملابسك الأنيقة!",
      whyItMatters: "يقضي نمط Custom Hooks تماماً على جحيم التغليف (Wrapper Hell) وتضارب أسماء الخصائص، ويمنحك شفرة موثقة بالأنواع (Type-safe) وسهلة القراءة والاختبار بنسبة 100%.",
      syntax: "function useCounter(initial = 0) {\n  const [count, setCount] = useState(initial);\n  const inc = () => setCount(c => c + 1);\n  return { count, inc };\n}",
      simpleExample: `// خطاف مخصص بسيط لإدارة حالة التحميل
import { useState } from 'react';

export function useLoading(initial = false) {
  const [isLoading, setIsLoading] = useState(initial);
  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return { isLoading, startLoading, stopLoading };
}

// الاستهلاك في المكون بنظافة تامة
export function SimpleHookDemo() {
  const { isLoading, startLoading, stopLoading } = useLoading(false);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs">
      <p className="mb-2">حالة التحميل: {isLoading ? 'جاري العمل ⏳' : 'جاهز 🟢'}</p>
      <div className="flex gap-2">
        <button onClick={startLoading} className="px-3 py-1 bg-cyan-600 rounded">بدء</button>
        <button onClick={stopLoading} className="px-3 py-1 bg-slate-800 rounded">إيقاف</button>
      </div>
    </div>
  );
}`,
      advancedExample: `// خطاف مخصص متقدم لإدارة النسخ إلى الحافظة (Clipboard) مع مؤقت نجاح تلقائي
import { useState, useCallback } from 'react';

interface CopyStatus {
  isCopied: boolean;
  copyError: string | null;
  copyToClipboard: (text: string) => Promise<boolean>;
}

export function useClipboard(timeoutMs: number = 2000): CopyStatus {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [copyError, setCopyError] = useState<string | null>(null);

  const copyToClipboard = useCallback(
    async (text: string): Promise<boolean> => {
      if (!navigator?.clipboard) {
        setCopyError('خاصية الحافظة غير مدعومة في متصفحك');
        return false;
      }

      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setCopyError(null);

        // إعادة ضبط حالة النسخ بعد انقضاء المهلة المحددة
        setTimeout(() => {
          setIsCopied(false);
        }, timeoutMs);

        return true;
      } catch (err: unknown) {
        setCopyError('تعذر نسخ النص إلى الحافظة');
        setIsCopied(false);
        return false;
      }
    },
    [timeoutMs]
  );

  return { isCopied, copyError, copyToClipboard };
}

// مكون يستهلك الخطاف المخصص لنسخ كود برمجي بنقرة زر
export function CodeSnippetCard() {
  const snippet = "npm install @tanstack/react-query @reduxjs/toolkit";
  const { isCopied, copyError, copyToClipboard } = useClipboard(2500);

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">خطاف الحافظة useClipboard</h3>
      <p className="text-xs text-slate-400 mb-4">
        منطق النسخ والمؤقتات معزول بالكامل في Custom Hook قابل لإعادة الاستخدام.
      </p>

      {/* صندوق الشفرة البرمجية مع زر النسخ اللحظي */}
      <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center font-mono text-xs">
        <code className="text-emerald-300 overflow-x-auto">{snippet}</code>
        <button
          onClick={() => copyToClipboard(snippet)}
          className={\`px-3 py-1.5 rounded-lg text-xs font-bold transition-all mr-2 whitespace-nowrap \${isCopied ? 'bg-emerald-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}\`}
        >
          {isCopied ? 'تم النسخ! ✓' : 'نسخ 📋'}
        </button>
      </div>

      {copyError && <p className="text-xs text-rose-400 mt-2">❌ {copyError}</p>}
    </div>
  );
}`,
      outputExplanation: "يعزل الخطاف `useClipboard` كافة تفاصيل واجهة `navigator.clipboard` وإدارة مؤقتات `setTimeout` في 25 سطراً من الكود النظيف، مما يسمح لأي مكون في التطبيق باستدعاء `copyToClipboard()` بسلاسة دون تكرار سطر واحد.",
      commonMistakes: [
        {
          mistake: "نسيان بدء اسم الخطاف المخصص بكلمة `use` (مثل تسميته `createClipboard`)",
          fix: "يجب دائماً أن يبدأ الاسم بـ `use` لكي يتعرف عليه محلل React Linter ويطبق عليه قواعد الـ Hooks الصارمة."
        },
        {
          mistake: "الاعتقاد بأن استدعاء الخطاف المخصص في مكونين يجعلهما يتشاركان نفس الحالة",
          fix: "الخطافات المخصصة تعيد استخدام 'المنطق' وليس 'البيانات'؛ كل مكون يستدعي الخطاف يحصل على نسخته المستقلة تماماً من الـ State."
        }
      ],
      bestPractices: [
        "استخرج أي منطق يحتوي على أكثر من خطافين متكررين إلى Custom Hook مستقل.",
        "أرجع كائناً يحتوي على الدوال والبيانات لتسهيل التفكيك بالاسم وإضافة حقول مستقبلية دون كسر التوافق."
      ],
      infographic: {
        title: "لماذا تسيطر Custom Hooks على معمارية React الحديثة؟",
        points: [
          "إعادة استخدام المنطق بدون وراثة: فصل منطق الأعمال عن واجهة العرض تماماً.",
          "تكامل طبيعي مع TypeScript: استنتاج تلقائي دقيق للمدخلات والمخرجات.",
          "كود مقروء وخطي: بديل مباشر ومثالي لأنماط HOC و Render Props المعقدة."
        ]
      }
    },
    {
      id: "16.1.g",
      title: "Controlled Components Pattern",
      englishTerm: {
        term: "Controlled Components Pattern",
        pronunciation: "كونترولد كومبوننتس باترن",
        meaning: "نمط المكونات المتحكم بها حيث تكون حالة React هي المصدر الوحيد للحقيقة وتتحكم في كل قيمة وتغيير"
      },
      description: "المكون المتحكم به (Controlled Component) هو نمط تملي فيه حالة React القيمة المعروضة لعنصر الإدخال بشكل حصري عبر خاصية `value`، ويتم اعتراض كل تغيير يجريه المستخدم عبر معالج حدث `onChange` لتحديث الحالة. في هذا النمط، لا يحتفظ عنصر الـ DOM بأي حالة ذاتية، وتصبح حالة React هي 'المصدر الوحيد للحقيقة' (Single Source of Truth)، مما يمنح المطور القدرة على تنقية وتدقيق وتعديل كل حرف يكتبه المستخدم لحظياً.",
      analogy: "يشبه الأمر دمية الماريونيت الخشبية المعلقة بخيوط رفيعة يمسك بها محرك الدمى الماهر؛ لا تستطيع الدمية رفع ذراعها أو تحريك رأسها بمفردها، بل يتحكم المحرك في كل حركة عبر الخيوط بدقة بالغة وبحسب السيناريو المكتوب مسبقاً!",
      whyItMatters: "يتيح لك هذا النمط إمكانية التحقق اللحظي من صحة الحقول، وفرض أقنعة الإدخال (Input Masks مثل تنسيق أرقام البطاقات المصرفية والهواتف)، وتعطيل أزرار الإرسال تلقائياً، والتحكم المطلق في تدفق بيانات المستخدم.",
      syntax: "const [val, setVal] = useState('');\n<input value={val} onChange={(e) => setVal(e.target.value)} />",
      simpleExample: `// مثال لمكون متحكم به بسيط
import { useState } from 'react';

export function SimpleControlledInput() {
  const [name, setName] = useState('');

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <label className="block text-xs text-slate-400 mb-1">الاسم بالأحرف الكبيرة تلقائياً:</label>
      <input
        type="text"
        value={name}
        // تحويل النص تلقائياً لأحرف كبيرة في كل ضغطة مفتاح
        onChange={(e) => setName(e.target.value.toUpperCase())}
        className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs"
      />
      <p className="text-xs text-cyan-400 mt-2">القيمة المخزنة في الـ State: {name}</p>
    </div>
  );
}`,
      advancedExample: `// حقل إدخال بطاقة ائتمان متحكم به بالكامل مع قناع تنسيق لحظي وفحص أمني
import { useState, ChangeEvent } from 'react';

export function ControlledCreditCardField() {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardType, setCardType] = useState<'Visa' | 'MasterCard' | 'Unknown'>('Unknown');

  // معالج الإدخال المقيد بالقناع اللحظي
  const handleCardChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 1. استخراج الأرقام فقط وتجريد كافة الرموز والمسافات
    const rawDigits = e.target.value.replace(/\\D/g, '').slice(0, 16);

    // 2. تطبيق قناع التنسيق بوضع مسافة بعد كل 4 أرقام (#### #### #### ####)
    const formatted = rawDigits.match(/.{1,4}/g)?.join(' ') || '';
    setCardNumber(formatted);

    // 3. فحص نوع البطاقة بناء على أول رقم
    if (rawDigits.startsWith('4')) {
      setCardType('Visa');
    } else if (rawDigits.startsWith('5')) {
      setCardType('MasterCard');
    } else {
      setCardType('Unknown');
    }
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">حقل بطاقة ائتمان متحكم به (Controlled)</h3>
      <p className="text-xs text-slate-400 mb-4">
        تنسيق فوري للأرقام واكتشاف تلقائي لنوع البطاقة عبر التحكم الصارم بالـ State.
      </p>

      {/* حقل الإدخال المتحكم به */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs">
          <label className="text-slate-300 font-semibold">رقم البطاقة المصرفية:</label>
          <span className="font-bold text-amber-400 font-mono">نوع البطاقة: {cardType}</span>
        </div>
        <input
          type="text"
          value={cardNumber}
          onChange={handleCardChange}
          placeholder="4000 1234 5678 9010"
          className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm font-mono text-white focus:outline-none focus:border-cyan-500 tracking-wider"
        />
        <p className="text-[11px] text-slate-500">
          * يتم تنقية الرموز وتطبيق المسافات آلياً مع كل حرف يُكتب.
        </p>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح الكود قوة المكونات المتحكمة بها؛ حيث يمنع معالج `handleCardChange` كتابة أي حروف غير رقمية، ويقوم بتقسيم الأرقام إلى مجموعات رباعية وتحديث نوع البطاقة لحظياً قبل أن تظهر القيمة للمستخدم على الشاشة.",
      commonMistakes: [
        {
          mistake: "تمرير `value={undefined}` في البداية ثم تغييره إلى نص، مما يطلق تحذير تحول المكون من Uncontrolled إلى Controlled",
          fix: "ابدأ دائماً بقيمة نصية فارغة `useState('')` بدلاً من `undefined` أو `null` لتفادي هذا التحذير."
        },
        {
          mistake: "نسيان إضافة `onChange` عند تمرير خاصية `value` مما يجعل الحقل للقراءة فقط",
          fix: "اربط خاصية `value` دائماً بمعالج `onChange`، أو استخدم `readOnly` إذا كنت تقصد حقل عرض غير قابل للتعديل."
        }
      ],
      bestPractices: [
        "اعتمد على المكونات المتحكم بها (Controlled) لمعظم نماذج تطبيقك لضمان موثوقية التحقق.",
        "استخدم تقنيات الأقنعة (Masks) والـ Sanitization داخل معالج onChange لتنقية البيانات قبل حفظها."
      ],
      infographic: {
        title: "حلقة البيانات في المكونات المتحكم بها",
        points: [
          "1. إدخال المستخدم: الضغط على المفتاح ➔ إطلاق حدث `onChange`.",
          "2. الاعتراض والفلترة: دالة المعالج تنقي البيانات ➔ استدعاء `setState(cleanValue)`.",
          "3. إعادة التصيير: React تعيد رسم الحقل مع القيمة المعتمدة حصراً من خاصية `value`.",
          "النتيجة: مصدر وحيد للحقيقة وامتثال تام لمعايير الأمان وتنسيق المدخلات."
        ]
      }
    },
    {
      id: "16.1.h",
      title: "Headless Components Pattern",
      englishTerm: {
        term: "Headless Components Pattern",
        pronunciation: "هيدليس كومبوننتس باترن",
        meaning: "نمط تصميم المكونات التي تفصل المنطق والسلوك وإمكانية الوصول تماماً عن أي تنسيقات بصرية"
      },
      description: "المكونات عديمة الرأس (Headless Components) هي الثورة المعمارية الأبرز في صناعة واجهات الويب الحديثة (وهي الأساس الذي بنيت عليه مكتبات عملاقة مثل Radix UI و Headless UI و TanStack Table). في هذا النمط، يوفر المكون أو الخطاف كافة الوظائف المعقدة: إدارة الحالة، أحداث لوحة المفاتيح (Keyboard Navigation)، سمات إمكانية الوصول (ARIA Attributes)، وإدارة التركيز (Focus Management)، ولكنه لا يفرض أي كود CSS أو تنسيق بصري على الإطلاق! يمنح هذا المطورين حرية مطلقة في تصميم الواجهة باستخدام Tailwind CSS أو أي نظام تصميم خاص بشركتهم دون صراع مع تنسيقات جاهزة مسبقاً.",
      analogy: "يشبه الأمر شراء محرك سيارة سباق ونظام فرامل متطور وجهاز توجيه إلكتروني بدون هيكل خارجي (Headless Engine)؛ المحرك يوفر لك أقصى درجات القوة والأمان الميكانيكي، ولديك الحرية التامة في تصميم وتفصيل الهيكل الخارجي بألوان شركتك وشعارك الخاص دون أن تضطر لإزالة طلاء قديم لا يعجبك!",
      whyItMatters: "يقضي هذا النمط على أكبر مشكلة واجهت مطوري الويب مع مكتبات الواجهات الكلاسيكية (مثل Bootstrap و Material UI)؛ وهي صعوبة تخصيص التنسيقات والاضطرار لكتابة `!important` في CSS لتجاوز الألوان الافتراضية.",
      syntax: "// نمط Headless Hook:\nconst { getButtonProps, isOpen } = useDropdownLogic();\nreturn <button {...getButtonProps()} className='my-custom-tailwind'>...</button>;",
      simpleExample: `// مثال مبسط لمكون Headless يقدم المنطق والأمان ويفوض التنسيق بالكامل
import { useState } from 'react';

// خطاف Headless لمنطق قائمة الأكورديون البسيطة
export function useHeadlessAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  // دوال إرجاع الخصائص الموثقة بـ ARIA
  const getToggleProps = () => ({
    'aria-expanded': isOpen,
    onClick: () => setIsOpen((prev) => !prev)
  });

  const getPanelProps = () => ({
    role: 'region',
    hidden: !isOpen
  });

  return { isOpen, getToggleProps, getPanelProps };
}

// الاستهلاك: المطور يطبق أصناف Tailwind كما يحلو له دون قيود
export function SimpleHeadlessUsage() {
  const { isOpen, getToggleProps, getPanelProps } = useHeadlessAccordion();

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      {/* دمج الخصائص المنطقية مع أي تصميم خاص */}
      <button {...getToggleProps()} className="px-3 py-1 bg-cyan-600 rounded text-xs font-bold">
        {isOpen ? 'إخفاء التفاصيل ▲' : 'عرض التفاصيل ▼'}
      </button>
      <div {...getPanelProps()} className="mt-2 text-xs text-slate-300">
        هذا محتوى مؤمن بخصائص ARIA وقابل للتنسيق بحرية تامة!
      </div>
    </div>
  );
}`,
      advancedExample: `// بناء مكتبة مصغرة لقائمة منسدلة ذكية بنمط Headless Component مجهزة بإمكانية الوصول الكاملة
import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';

// 1. منطق الـ Headless Hook
export interface HeadlessMenuOption {
  id: string;
  label: string;
}

export function useHeadlessMenu(options: HeadlessMenuOption[]) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const menuRef = useRef<HTMLDivElement>(null);

  // إغلاق القائمة عند النقر في الخارج
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // إدارة التنقل بأسهم لوحة المفاتيح (a11y)
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'Enter')) {
      e.preventDefault();
      setIsOpen(true);
      setFocusedIndex(0);
      return;
    }

    if (isOpen) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % options.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + options.length) % options.length);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    }
  };

  // حزم الخصائص الجاهزة للمستهلك (Prop Getters)
  const getTriggerProps = () => ({
    'aria-haspopup': true,
    'aria-expanded': isOpen,
    onClick: () => setIsOpen((v) => !v),
    onKeyDown: handleKeyDown
  });

  const getMenuProps = () => ({
    ref: menuRef,
    role: 'menu',
    'aria-hidden': !isOpen
  });

  const getItemProps = (index: number) => ({
    role: 'menuitem',
    tabIndex: focusedIndex === index ? 0 : -1,
    'aria-selected': focusedIndex === index
  });

  return {
    isOpen,
    focusedIndex,
    getTriggerProps,
    getMenuProps,
    getItemProps
  };
}

// 2. المكون المستهلك: تطبيق تصميم عصري وفخم باستخدام Tailwind
export function HeadlessMenuStudio() {
  const options: HeadlessMenuOption[] = [
    { id: 'opt-1', label: 'تعديل الملف الشخصي' },
    { id: 'opt-2', label: 'إعدادات الحساب والأمان' },
    { id: 'opt-3', label: 'تسجيل الخروج' }
  ];

  const { isOpen, focusedIndex, getTriggerProps, getMenuProps, getItemProps } = useHeadlessMenu(options);

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-emerald-400 mb-2">القوائم عديمة الرأس (Headless Pattern)</h3>
      <p className="text-xs text-slate-400 mb-4">
        منطق تنقل متكامل بالأسهم و ARIA مع حرية تصميم مطلقة بـ Tailwind.
      </p>

      {/* زر فتح القائمة */}
      <div {...getMenuProps()} className="relative inline-block text-right">
        <button
          {...getTriggerProps()}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-bold text-slate-200 flex items-center gap-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
        >
          <span>خيارات المستخدم</span>
          <span className="text-[10px] text-slate-500 font-mono">▼</span>
        </button>

        {/* صندوق القائمة المنبثقة المصمم بحرية */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-52 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in duration-100">
            {options.map((opt, idx) => (
              <div
                key={opt.id}
                {...getItemProps(idx)}
                className={\`px-3 py-2 text-xs rounded-lg cursor-pointer transition-colors \${focusedIndex === idx ? 'bg-emerald-600 text-white font-bold' : 'text-slate-300 hover:bg-slate-800'}\`}
              >
                {opt.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوفر نمط الـ Headless للمطور كل المنطق المعقد (التنقل بالأسهم لأعلى ولأسفل، إغلاق القائمة بمفتاح Escape، النقر خارج القائمة، وسمات ARIA)، ويترك التصميم البصري حراً 100% ليصممه المطور بأي فئات Tailwind تناسب هوية علامته التجارية.",
      commonMistakes: [
        {
          mistake: "إهمال سمات إمكانية الوصول (ARIA) داخل مكونات الـ Headless",
          fix: "الفائدة الكبرى لنمط Headless هي إدارة الـ a11y نيابة عن المطور؛ تأكد دائماً من تضمين أدوار وسمات ARIA القياسية."
        },
        {
          mistake: "تضمين أكواد CSS داخل مكتبات الـ Headless مما يفقدها جوهرها",
          fix: "اجعل مكتبة الـ Headless مجرد خطافات ومكونات وظيفية خالية تماماً من ملفات الـ CSS."
        }
      ],
      bestPractices: [
        "استخدم نمط Prop Getters (مثل `getTriggerProps()`) لتسهيل حقن الخصائص في عناصر الـ JSX.",
        "اعتمد على مكتبات Headless جاهزة وموثوقة (مثل Radix Primitives و TanStack) بدلاً من إعادة اختراع الدوال المعقدة."
      ],
      infographic: {
        title: "معمارية نمط Headless Components",
        points: [
          "طبقة المنطق والسلوك: إدارة الحالة، دعم لوحة المفاتيح (Keyboard Events)، معايير إمكانية الوصول (ARIA).",
          "طبقة العرض والتصميم: خالية تماماً ➔ يفصلها المطور باستخدام Tailwind أو CSS Modules بحرية مطلقة.",
          "المكسب: صفر صراع مع تنسيقات جاهزة وسرعة قصوى في مطابقة تصاميم Figma الدقيقة."
        ]
      }
    },
    {
      id: "16.1.i",
      title: "مقارنة الأنماط الحديثة والقديمة",
      englishTerm: {
        term: "Comparing Modern vs Legacy Patterns",
        pronunciation: "كومبيرينغ مودرن فيرسس ليغاسي باترنز",
        meaning: "المقارنة الشاملة لاختيار النمط المعماري الأنسب لكل حالة استخدام وفهم مسار التطور في بيئة React"
      },
      description: "مرت React بعدة أجيال معمارية لمشاركة المنطق وبناء المكونات؛ ففي الأيام الأولى كانت الوراثة والـ Mixins شائعة ثم تم التخلي عنها، وتلاها انتشار نمط Higher-Order Components (HOC) ثم Render Props، حتى وصلنا إلى عصر السيادة الكاملة لـ Custom Hooks و Compound Components و Headless UI. يعتمد اختيار النمط اليوم على طبيعة المشكلة:\n- لمشاركة منطق مجرد بدون JSX: استخدم **Custom Hooks** دائماً.\n- لمكونات مركبة تتشارك حالة وتنسيقاً مرناً: استخدم **Compound Components**.\n- لمكونات وظيفية معقدة تحتاج تصميمات مختلفة في كل مكان: استخدم **Headless Pattern**.",
      analogy: "يشبه الأمر تطور وسائل الاتصال؛ التلغراف اليدوي (Mixins و HOC القديمة) كان إنجازاً كبيراً في وقته لكنه معقد وأحادي الاتجاه. الهاتف الأرضي بأزراره (Render Props) قدم مرونة أكبر. وصولاً إلى الهواتف الذكية وتطبيقات التواصل الفورية (Custom Hooks و Headless UI) التي جمعت بين أقصى درجات المرونة والسرعة والسهولة في جهاز واحد!",
      whyItMatters: "اختيار النمط الخاطئ يورط المشروع في تعقيد لا نهائي؛ ومعرفة المقارنة الدقيقة تمنحك بوصلة هندسية واضحة لاختيار الأداة الأبسط والأكثر كفاءة لكل ميزة تبنيها.",
      syntax: "// دليل الاختيار السريع:\n// 1. منطق فقط؟ -> Custom Hook\n// 2. واجهة منسقة متكاملة؟ -> Component Composition\n// 3. أجزاء متعددة تتشارك حالة؟ -> Compound Component\n// 4. منطق معقد بدون ستايل؟ -> Headless Hook",
      simpleExample: `// دليل مرجعي مختصر لاختيار النمط المناسب
export function PatternSelectorGuide() {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs space-y-2">
      <p className="font-bold text-cyan-400 mb-2">دليل اختيار أنماط التصميم في React:</p>
      <div className="p-2 bg-slate-950 rounded border border-slate-850">
        <span className="font-bold text-emerald-400">Custom Hook:</span> لمشاركة المنطق والبيانات (مثل جلب البيانات، الحافظة، العداد).
      </div>
      <div className="p-2 bg-slate-950 rounded border border-slate-850">
        <span className="font-bold text-amber-400">Compound Components:</span> للأكورديون، التبويبات، القوائم المنسدلة.
      </div>
      <div className="p-2 bg-slate-950 rounded border border-slate-850">
        <span className="font-bold text-purple-400">Headless Components:</span> للجداول المعقدة ونظم التصميم المخصصة للشركات.
      </div>
    </div>
  );
}`,
      advancedExample: `// لوحة تفاعلية لمقارنة أنماط التصميم والخصائص الهندسية لكل نمط
import { useState } from 'react';

interface PatternDetail {
  id: string;
  name: string;
  bestFor: string;
  pros: string;
  cons: string;
  status: 'عصري موصى به' | 'كلاسيكي بديل' | 'تراثي مهجور';
}

const DESIGN_PATTERNS_COMPARISON: PatternDetail[] = [
  {
    id: 'hooks',
    name: 'Custom Hooks',
    bestFor: 'مشاركة منطق الأعمال والآثار الجانبية والبيانات',
    pros: 'بساطة فائقة، خالي من التغليف، أمان أنواع TypeScript ممتاز',
    cons: 'لا يعيد عناصر JSX مباشرة (مخصص للمنطق فقط)',
    status: 'عصري موصى به'
  },
  {
    id: 'compound',
    name: 'Compound Components',
    bestFor: 'عناصر الواجهة التفاعلية (Tabs, Accordion, Select)',
    pros: 'مرونة عالية في التنسيق الداخلي بدون Props Drilling',
    cons: 'يتطلب كتابة Context وفحص ارتباط المكونات الفرعية',
    status: 'عصري موصى به'
  },
  {
    id: 'headless',
    name: 'Headless Components',
    bestFor: 'مكتبات المكونات ونظم التصميم المعقدة (Design Systems)',
    pros: 'فصل تام بين السلوك والـ CSS، دعم أقصى درجات الـ a11y',
    cons: 'يتطلب من المطور كتابة كافة التنسيقات بيده',
    status: 'عصري موصى به'
  },
  {
    id: 'render-props',
    name: 'Render Props',
    bestFor: 'مشاركة منطق متداخل مع هيكل العرض',
    pros: 'مرونة عالية في تمرير البيانات المصفاة لدوال التصيير',
    cons: 'تعقيد في القراءة وصعوبة التخزين المؤقت أحياناً',
    status: 'كلاسيكي بديل'
  },
  {
    id: 'hoc',
    name: 'Higher-Order Components',
    bestFor: 'حقن سلوكيات عامة عبر المكونات في الكود التراثي',
    pros: 'إعادة استخدام كود الحماية والمصادقة في مكان واحد',
    cons: 'تضارب أسماء الخصائص، تعقيد شجرة المكونات، ضعف TypeScript',
    status: 'تراثي مهجور'
  }
];

export function PatternsComparisonMatrix() {
  const [selectedPattern, setSelectedPattern] = useState<string>('hooks');

  const current = DESIGN_PATTERNS_COMPARISON.find((p) => p.id === selectedPattern)!;

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-lg mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">مصفوفة مقارنة أنماط التصميم في React</h3>
      <p className="text-xs text-slate-400 mb-4">
        استكشف المزايا والعيوب الهندسية لكل نمط لتحديد الخيار الأمثل لمشروعك.
      </p>

      {/* أزرار اختيار الأنماط */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {DESIGN_PATTERNS_COMPARISON.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedPattern(p.id)}
            className={\`px-3 py-1.5 rounded-xl text-xs font-bold transition-all \${selectedPattern === p.id ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}\`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* بطاقة تفاصيل النمط المحدد */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
          <h4 className="font-bold text-sm text-slate-100">{current.name}</h4>
          <span
            className={\`text-[10px] px-2.5 py-0.5 rounded-full font-bold \${current.status === 'عصري موصى به' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : current.status === 'كلاسيكي بديل' ? 'bg-amber-500/20 text-amber-300' : 'bg-rose-500/20 text-rose-400'}\`}
          >
            {current.status}
          </span>
        </div>

        <div className="text-xs space-y-2">
          <div>
            <span className="text-slate-400 block font-semibold">أفضل استخدام:</span>
            <p className="text-slate-200">{current.bestFor}</p>
          </div>
          <div>
            <span className="text-slate-400 block font-semibold">أهم المزايا:</span>
            <p className="text-emerald-400">{current.pros}</p>
          </div>
          <div>
            <span className="text-slate-400 block font-semibold">أبرز التحديات:</span>
            <p className="text-rose-400">{current.cons}</p>
          </div>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "توفر المصفوفة تحليلاً هندسياً شاملاً يوضح لماذا تفوقت الـ Custom Hooks و Compound Components في المشاريع الحديثة على أنماط الـ HOC القديمة، مع تقديم معايير واضحة للاختيار بحسب متطلبات الواجهة ونظام التصميم.",
      commonMistakes: [
        {
          mistake: "محاولة تطبيق نمط واحد فقط على كافة أجزاء المشروع",
          fix: "استخدم المزيج الصحيح: Custom Hooks للمنطق، و Compound Components للعناصر المعقدة، و Composition البسيط للبطاقات."
        },
        {
          mistake: "التمسك بأنماط HOC في مشاريع React الحديثة لمجرد التعود عليها في السابق",
          fix: "حدث أسلوبك الهندسي وانتقل لـ Custom Hooks لحصد شفرة أنظف وأسرع وأسهل صيانة."
        }
      ],
      bestPractices: [
        "اختر الأداة الأبسط التي تحل المشكلة دون تعقيد غير ضروري (KISS).",
        "احرص على ألا تجعل الأنماط التصميمية غاية في حد ذاتها، بل وسيلة لكتابة كود مرن وسهل القراءة."
      ],
      infographic: {
        title: "شجرة قرارات اختيار نمط التصميم في React",
        points: [
          "هل تحتاج لمشاركة منطق وحالة بدون واجهة JSX؟ ➔ اختر **Custom Hook**.",
          "هل تبني مكوناً تفاعلياً له عدة أجزاء تتواصل معاً؟ ➔ اختر **Compound Components**.",
          "هل تبني مكتبة عناصر متوافقة مع الـ a11y وتترك التنسيق للمطور؟ ➔ اختر **Headless Components**.",
          "هل تحتاج فقط لتمرير عناصر متغيرة داخل إطار موحد؟ ➔ اختر **Component Composition (Slots)**."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q16.1.1",
      question: "ما هو المبدأ المعماري الأهم في بناء مكونات React القابلة للصيانة؟",
      options: [
        "تفضيل الوراثة العميقة (Inheritance) على تركيب المكونات",
        "تفضيل التركيب على الوراثة (Composition over Inheritance) وتجميع المكونات البسيطة عبر children والفتحات",
        "وضع كافة منطق وتنسيقات التطبيق في مكون واحد مركزي",
        "حظر استخدام React Context في المكونات المركبة"
      ],
      correctAnswer: 1,
      explanation: "تعتمد React أساساً على مبدأ 'تفضيل التركيب على الوراثة'؛ حيث يتيح تجميع المكونات البسيطة مرونة لا نهائية واستقراراً يفوق الوراثة الكلاسيكية المعقدة."
    },
    {
      id: "q16.1.2",
      question: "ما الفارق الأساسي بين المكونات العارضة (Presentational) ومكونات الحاوية (Container)؟",
      options: [
        "المكونات العارضة تهتم بالشكل والتنسيق وتستقبل كل شيء عبر Props، بينما الحاويات تهتم بالمنطق وجلب البيانات وإدارة الحالة",
        "المكونات العارضة تعمل فقط على الهواتف، بينما الحاويات تعمل على الحواسيب",
        "المكونات العارضة لا تستخدم إلا لغة JavaScript فقط",
        "لا يوجد أي فرق بينهما"
      ],
      correctAnswer: 0,
      explanation: "المكونات العارضة نقية وتركز على 'كيف تبدو الواجهة' وتتغذى بـ Props، بينما تركز الحاويات على 'كيف تعمل العمليات' بجلب البيانات وإدارة الحالات."
    },
    {
      id: "q16.1.3",
      question: "ما الذي يميز نمط Headless Components عن مكتبات المكونات الجاهزة الكلاسيكية؟",
      options: [
        "أنه يعمل بدون شفرة جافاسكربت",
        "أنه يفصل السلوك والمنطق وإمكانية الوصول تماماً عن التنسيقات البصرية، مما يمنح المطور حرية تامة في تصميم الواجهة بـ Tailwind أو نظامه الخاص",
        "أنه يلغي استخدام المتصفح تماماً",
        "أنه يفرض استخدام لغة CSS النقية القديمة فقط"
      ],
      correctAnswer: 1,
      explanation: "يوفر نمط الـ Headless المنطق والـ a11y كاملاً دون فرض أي CSS أو ألوان مسبقة، مما يقضي على مشاكل تخصيص التصاميم المعقدة."
    }
  ],
  exercise: {
    id: "ex-16.1",
    title: "تمرين عملي: بناء نافذة حوار منبثقة (Modal Dialog) بنمط Compound Components و Headless Logic",
    description: "قم بإنشاء مكون نافذة حوارية `Modal` بنمط المكونات المركبة يحتوي على:\n1. المكون الأب `Modal` الذي يدير حالة الفتح والإغلاق ويوفر السياق الداخلي.\n2. المكونات الفرعية: `Modal.Trigger`, `Modal.Content`, `Modal.Header`, `Modal.Close`.\n3. دعم إغلاق النافذة عند الضغط على مفتاح Escape أو النقر على الخلفية المعتمة، وتجربته في واجهة متناسقة.",
    hints: [
      "أنشئ `ModalContext` يحتوي على `isOpen` و `openModal` و `closeModal`.",
      "في `Modal.Content`، إذا كانت `isOpen` خاطئة أرجع `null`.",
      "في `Modal.Close` استخدم `closeModal` عند النقر على الزر.",
      "استمع لحدث `keydown` للتحقق من `e.key === 'Escape'`."
    ],
    solution: `// استيراد الأدوات من React
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 1. إنشاء السياق المشترك
interface ModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('يجب استدعاء مكونات Modal الفرعية داخل <Modal /> فقط.');
  return ctx;
}

// 2. المكون الأب الرئيسي
export function Modal({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  // إغلاق النافذة بمفتاح Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

// 3. المكونات الفرعية المركبة
Modal.Trigger = function ModalTrigger({ children }: { children: ReactNode }) {
  const { open } = useModal();
  return (
    <div onClick={open} className="inline-block cursor-pointer">
      {children}
    </div>
  );
};

Modal.Content = function ModalContent({ children }: { children: ReactNode }) {
  const { isOpen, close } = useModal();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* خلفية معتمة تغلق النافذة عند النقر */}
      <div
        onClick={close}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in"
      />
      {/* صندوق المحتوى الداخلي */}
      <div className="relative z-10 w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white shadow-2xl animate-in zoom-in-95">
        {children}
      </div>
    </div>
  );
};

Modal.Header = function ModalHeader({ children }: { children: ReactNode }) {
  const { close } = useModal();
  return (
    <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
      <h4 className="font-bold text-sm text-cyan-400">{children}</h4>
      <button onClick={close} className="text-slate-400 hover:text-white text-xs">✕</button>
    </div>
  );
};

Modal.Close = function ModalClose({ children }: { children: ReactNode }) {
  const { close } = useModal();
  return (
    <div onClick={close} className="inline-block cursor-pointer">
      {children}
    </div>
  );
};

// 4. استهلاك النافذة المركبة في شاشة تجريبية
export function CompoundModalDemo() {
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto text-center">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">نافذة حوار مركبة (Compound Modal)</h3>
      <p className="text-xs text-slate-400 mb-4">انقر لفتح النافذة واختبر الإغلاق بالخلفية أو بمفتاح Esc.</p>

      <Modal>
        <Modal.Trigger>
          <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 font-bold rounded-xl text-xs transition-colors">
            فتح نافذة التأكيد 🪟
          </button>
        </Modal.Trigger>

        <Modal.Content>
          <Modal.Header>تأكيد حذف الحساب</Modal.Header>
          <p className="text-xs text-slate-300 mb-4 leading-relaxed text-right">
            هل أنت متأكد تماماً من رغبتك في حذف الحساب نهائياً؟ لن يمكنك التراجع عن هذا الإجراء لاحقاً.
          </p>
          <div className="flex justify-end gap-2">
            <Modal.Close>
              <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold">
                إلغاء
              </button>
            </Modal.Close>
            <Modal.Close>
              <button className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 rounded-lg text-xs font-bold">
                نعم، احذف الحساب
              </button>
            </Modal.Close>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة أنماط بناء مكونات React",
    nodes: [
      { id: "1", title: "Composition", desc: "تجميع قطع بسيطة ومستقلة كبديل عن الوراثة المعقدة" },
      { id: "2", title: "Container vs Presentational", desc: "فصل منطق وجلب البيانات عن شاشات العرض النقية" },
      { id: "3", title: "Compound Components", desc: "مكونات تشترك في حالة ضمنية عبر Context بأسلوب select و option" },
      { id: "4", title: "Custom Hooks", desc: "النمط المهيمن لاستخراج ومشاركة منطق الحالة بدقة بالغة" },
      { id: "5", title: "Controlled Components", desc: "حالة React هي المصدر الوحيد للحقيقة لكل حرف يدخله المستخدم" },
      { id: "6", title: "Headless Components", desc: "فصل السلوك وإمكانية الوصول تماماً عن أي تنسيق بصري" }
    ]
  }
};
