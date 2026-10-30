// topic4.js - القسم 15: React Hooks المتقدمة ومفاهيم React الحديثة
// الموضوع 4: التحديثات والانتقالات (Transitions)

export const topic4 = {
  id: "15.4",
  title: "التحديثات والانتقالات",
  englishTitle: "Updates & Transitions in React",
  description: "التحكم في أولويات المعالجة المتزامنة في React: التمييز بين التحديثات العاجلة والانتقالات، واستخدام useTransition و startTransition و useDeferredValue لتقديم واجهات فائقة الاستجابة وسلسة حتى مع أثقل عمليات الفلترة والعرض.",
  subtopics: [
    {
      id: "15.4.a",
      title: "مفهوم التحديثات العاجلة وغير العاجلة",
      englishTerm: {
        term: "Urgent vs Non-Urgent (Transition) Updates",
        pronunciation: "أورجنت فيرسس نون أورجنت أبديتس",
        meaning: "تصنيف تحديثات الحالة في React بين تفاعلات فورية تستلزم استجابة لحظية وبين معالجات ثانوية يمكن تأجيلها"
      },
      description: "في معمارية المعالجة المتزامنة (Concurrent React)، ليست كل تحديثات الحالة متساوية في الأهمية:\n1. التحديثات العاجلة (Urgent Updates): تشمل تفاعلات المستخدم المباشرة التي يتوقع منها استجابة فورية بدون أي تأخير (0ms)؛ مثل الكتابة في حقل نصي، النقر على زر، أو فتح قائمة منسدلة. إذا تأخرت هذه التحديثات يشعر المستخدم بأن التطبيق متجمد أو تالف.\n2. تحديثات الانتقال غير العاجلة (Transition / Non-Urgent Updates): تشمل العمليات الثقيلة الناتجة عن التفاعل؛ مثل تصفية جدول يحتوي على 10 آلاف منتج، أو إعادة رسم رسم بياني معقد، أو تبديل شاشة كاملة. يمكن لـ React مقاطعة هذه التحديثات لإعطاء الأولوية للنقرات والكتابة الحية.",
      analogy: "يشبه الأمر قسم الطوارئ في مستشفى؛ مريض يدخل مصاباً بنزيف حاد (تحديث عاجل) يتجه له الأطباء فوراً دون انتظار. بينما شخص جاء لتجديد بطاقة التأمين السنوية (تحديث غير عاجل) يُطلب منه الجلوس في قاعة الانتظار، ولا مانع من تأجيل معاملته دقيقة ريثما يتم إنقاذ المصاب!",
      whyItMatters: "قبل إدخال ميزة Transitions في React 18، كان تحديث قائمة تضم آلاف العناصر يجبر المتصفح على معالجة القائمة فوراً، مما يعطل حقل الإدخال ويتسبب في تأخر ظهور الحروف المكتوبة (Typing Lag). التمييز بين النوعين يقضي على هذا التأخير تماماً.",
      syntax: "// تحديث عاجل (افتراضي في React):\nsetInputValue(e.target.value);\n\n// تحديث غير عاجل (انتقال مقيد):\nstartTransition(() => {\n  setFilterCriteria(e.target.value);\n});",
      simpleExample: `// مثال يوضح تقسيم الحالة إلى عاجلة وغير عاجلة
import { useState, useTransition } from 'react';

export function SimpleUrgentDemo() {
  // 1. حالة عاجلة: نص الحقل يجب أن يظهر فوراً مع كل حرف يُكتب
  const [text, setText] = useState<string>('');
  // 2. حالة غير عاجلة: الفلترة والبحث الثقيل
  const [query, setQuery] = useState<string>('');

  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // تحديث عاجل: تحديث الحقل فوراً (Urgent)
    setText(e.target.value);

    // تحديث غير عاجل: معالجة البحث في الخلفية دون تجميد الكتابة (Transition)
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="اكتب بسرعة هنا..."
        className="w-full px-3 py-1.5 bg-slate-800 rounded-lg text-xs border border-slate-700 mb-2"
      />
      <p className="text-xs text-slate-400">
        الحالة غير العاجلة: {isPending ? 'جاري المعالجة في الخلفية...' : query}
      </p>
    </div>
  );
}`,
      advancedExample: `// تطبيق محاكاة يوضح تجميد الواجهة بدون تقسيم الأولويات مقابل السلاسة التامة
import { useState, useTransition } from 'react';

export function PriorityUpdatesLab() {
  const [mode, setMode] = useState<'blocking' | 'concurrent'>('concurrent');
  const [inputVal, setInputVal] = useState<string>('');
  const [filteredCount, setFilteredCount] = useState<number>(0);
  const [isPending, startTransition] = useTransition();

  // معالج الإدخال في كلا الوضعين
  const handleTyping = (value: string) => {
    setInputVal(value);

    // دالة محاكاة معالجة ثقيلة جداً (آلاف العناصر)
    const runHeavyFiltering = () => {
      const start = performance.now();
      let matchCount = 0;
      // حلقة مصطنعة تستهلك وقت المعالج
      for (let i = 0; i < 2000000; i++) {
        if (i % 100 === 0 && String(i).includes(value)) matchCount++;
      }
      setFilteredCount(matchCount);
    };

    if (mode === 'blocking') {
      // ❌ في الوضع العادي المحجوب: تشغيل الحساب الثقيل مباشرة مما يجمد الحقل!
      runHeavyFiltering();
    } else {
      // ✅ في وضع الانتقال: وضع الحساب الثقيل داخل startTransition
      startTransition(() => {
        runHeavyFiltering();
      });
    }
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">مختبر أولويات التحديث (Transitions)</h3>
      <p className="text-xs text-slate-400 mb-4">
        جرب الكتابة السريعة في الوضع المحجوب ثم انتقل لوضع المعالجة المتزامنة ولاحظ الفرق!
      </p>

      {/* خيارات الوضع */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => { setMode('concurrent'); setInputVal(''); setFilteredCount(0); }}
          className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${mode === 'concurrent' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          وضع الانتقال المتزامن (سلس ✅)
        </button>
        <button
          onClick={() => { setMode('blocking'); setInputVal(''); setFilteredCount(0); }}
          className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${mode === 'blocking' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          الوضع المحجوب (تجميد ❌)
        </button>
      </div>

      {/* حقل الإدخال */}
      <div className="mb-4">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => handleTyping(e.target.value)}
          placeholder="اكتب أرقاماً بسرعة هنا..."
          className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
        />
      </div>

      {/* شاشة النتائج والمؤشرات */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-slate-400">حالة المعالجة:</span>
          <span className={\`font-bold \${isPending ? 'text-amber-400 animate-pulse' : 'text-emerald-400'}\`}>
            {isPending ? '⏳ جاري المعالجة في الخلفية...' : 'مكتملة وجاهزة ✅'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400">العناصر المطابقة:</span>
          <span className="font-mono font-bold text-cyan-300">{filteredCount} عنصر</span>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "في وضع المعالجة المتزامنة (Concurrent Mode)، يستجيب حقل الإدخال لكل حرف فوراً دون أي شعور بالبطء، بينما يقوم محرك React بتنفيذ تصفية المليوني عنصر في الخلفية، ويقاطعها فوراً إذا ضغط المستخدم على حرف جديد لتحديث الحقل أولاً.",
      commonMistakes: [
        {
          mistake: "تغليف حالة الحقل النصي نفسه داخل startTransition",
          fix: "اترك تحديث حقل الإدخال `setInputValue` عاجلاً ومباشراً، وضع فقط العمليات المشتقة الثقيلة داخل startTransition."
        },
        {
          mistake: "استخدام Transitions لعمليات غير متزامنة مثل async/await أو setTimeout بدون دعم مناسب",
          fix: "دالة startTransition مخصصة لتحديثات الحالة التزامنية المتزامنة (Synchronous State Updates) في شجرة المكونات."
        }
      ],
      bestPractices: [
        "افصل دائماً بين حالة الإدخال السريعة وحالة التصفية أو العرض المشتقة.",
        "اجعل الأولوية القصوى دائماً لنقرات المستخدم وحروف الكتابة للحفاظ على مؤشر INP (Interaction to Next Paint) ممتازاً."
      ],
      infographic: {
        title: "هرم الأولويات في معمارية Concurrent React",
        points: [
          "القمة (أولوية فائقة - Urgent): الكتابة في الـ Input، النقر، التمرير، التحويم ➔ استجابة 0ms.",
          "القاعدة (أولوية ثانوية - Transitions): فلترة الجداول، رسوم بيانية، تغيير الصفحات ➔ قابلة للمقاطعة والاستئناف.",
          "السر التقني: React تقاطع معالجة الانتقال فوراً لإنجاز التحديث العاجل، ثم تستأنف الانتقال بأحدث البيانات."
        ]
      }
    },
    {
      id: "15.4.b",
      title: "استخدام useTransition",
      englishTerm: {
        term: "Using useTransition Hook",
        pronunciation: "يوزينغ يوز ترانزيشن هوك",
        meaning: "خطاف مدمج يتيح تمييز تحديثات الحالة كـ Transitions وتوفير مؤشر انتظار مرئي isPending"
      },
      description: "خطاف `useTransition` هو البوابة الرئيسية لاستخدام ميزة الانتقالات في React. يُرجع الخطاف مصفوفة ثنائية تحتوي على:\n1. القيمة المنطقية `isPending`: تكون `true` طالما أن التحديث غير العاجل قيد المعالجة في الخلفية، مما يسمح لك بعرض مؤشر تحميل خفيف أو تخفيف شفافية المحتوى القديم لإشعار المستخدم.\n2. الدالة التنفيذية `startTransition`: دالة تغليف تستقبل رد نداء (Callback) تضع بداخله دوال تحديث الحالة التي تريد اعتبارها ذات أولوية منخفضة وقابلة للمقاطعة.",
      analogy: "يشبه الأمر التبديل بين قنوات التلفاز الفضائي؛ أثناء ضغطك على زر القناة التالية في جهاز التحكم، يظهر مؤشر رقم القناة فوراً في زاوية الشاشة (`isPending`)، وتبقى الصورة القديمة معروضة بسلاسة دون أن تسود الشاشة، حتى يكتمل استقبال بث القناة الجديدة وتنتقل إليها بنعومة تامة!",
      whyItMatters: "يحول `useTransition` تجربة التطبيق من تجربة متقطعة ومليئة بشاشات التحميل المزعجة (Full-page Spinners) إلى تجربة انسيابية وراقية تحتفظ بالسياق الحالي للمستخدم أثناء تجهيز الشاشة التالية.",
      syntax: "const [isPending, startTransition] = useTransition();\n\nstartTransition(() => {\n  setHeavyState(newValue);\n});",
      simpleExample: `// استيراد useTransition من React
import { useState, useTransition } from 'react';

export function TabSwitcherSimple() {
  const [activeTab, setActiveTab] = useState<'home' | 'heavy'>('home');
  // استدعاء الخطاف للحصول على حالة الانتظار ودالة الانتقال
  const [isPending, startTransition] = useTransition();

  const selectTab = (tab: 'home' | 'heavy') => {
    // تغليف تحديث التبويب ليكون انتقالاً سلساً
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => selectTab('home')}
          className="px-3 py-1 bg-slate-800 rounded text-xs font-semibold"
        >
          الرئيسية
        </button>
        <button
          onClick={() => selectTab('heavy')}
          className="px-3 py-1 bg-slate-800 rounded text-xs font-semibold"
        >
          التبويب الثقيل {isPending && '⏳'}
        </button>
      </div>

      <div className={\`transition-opacity \${isPending ? 'opacity-50' : 'opacity-100'}\`}>
        {activeTab === 'home' ? <p>مرحباً بك في الصفحة الرئيسية.</p> : <p>محتوى التبويب الثقيل المعقد.</p>}
      </div>
    </div>
  );
}`,
      advancedExample: `// تطبيق متكامل لتبديل التبويبات المعقدة مع مؤشرات بصرية ذكية
import React, { useState, useTransition } from 'react';

// مكون تبويب ثقيل يحتوي على آلاف العمليات الحسابية
const HeavyAnalyticsTab = React.memo(() => {
  // توليد مئات العمليات الحسابية لمحاكاة تبويب ثقيل
  const items = Array.from({ length: 4000 }, (_, i) => ({
    id: i,
    val: Math.sqrt(i * 12345).toFixed(2)
  }));

  return (
    <div className="space-y-2 max-h-56 overflow-y-auto p-2 bg-slate-950 rounded-xl border border-slate-800 text-xs">
      <p className="text-cyan-400 font-bold mb-2">سجلات التحليلات المعقدة ({items.length} عنصر):</p>
      <div className="grid grid-cols-3 gap-1.5 font-mono text-[10px]">
        {items.map((it) => (
          <div key={it.id} className="p-1 bg-slate-900 rounded text-slate-300">
            #{it.id}: {it.val}
          </div>
        ))}
      </div>
    </div>
  );
});

// مكون إدارة التبويبات المتطور
export function AdvancedTransitionTabs() {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'settings'>('overview');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: 'overview' | 'analytics' | 'settings') => {
    // استخدام startTransition لتبديل التبويب دون تجميد الأزرار
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-amber-400">نظام التبويبات المتقدم بـ useTransition</h3>
        {isPending && (
          <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-bold animate-pulse">
            جاري المعالجة في الخلفية...
          </span>
        )}
      </div>

      {/* أشرطة أزرار التبويبات التي تظل مستجيبة 100% للنقرات في أي لحظة */}
      <div className="flex gap-2 mb-4">
        {(['overview', 'analytics', 'settings'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all \${activeTab === tab ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}\`}
          >
            {tab === 'overview' ? 'نظرة عامة' : tab === 'analytics' ? 'التحليلات الضخمة 📊' : 'الإعدادات'}
          </button>
        ))}
      </div>

      {/* منطقة عرض المحتوى مع خفض الشفافية أثناء حالة isPending بدلاً من إخفاء الشاشة */}
      <div className={\`transition-opacity duration-200 \${isPending ? 'opacity-40 cursor-wait' : 'opacity-100'}\`}>
        {activeTab === 'overview' && (
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300">
            لوحة البيانات العامة: كافة الأنظمة تعمل بكفاءة قصوى ومستقرة.
          </div>
        )}

        {activeTab === 'analytics' && <HeavyAnalyticsTab />}

        {activeTab === 'settings' && (
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300">
            خيارات الحساب والتفضيلات وتكوين الأمان.
          </div>
        )}
      </div>
    </div>
  );
}`,
      outputExplanation: "عند النقر على تبويب 'التحليلات الضخمة'، لا تتجمد الواجهة على الإطلاق؛ بل يظل الزر متفاعلاً وتتحول قيمة `isPending` إلى `true`، مما يتيح إظهار شارة تحميل خفيفة وخفض شفافية الشاشة الحالية بسلاسة حتى يكتمل تجهيز آلاف العناصر المعقدة في الذاكرة.",
      commonMistakes: [
        {
          mistake: "استبدال المحتوى بالكامل بدوارة تحميل (Spinner) أثناء isPending مما يسبب وميضاً حاداً",
          fix: "احتفظ بالمحتوى القديم مرئياً وقم بخفض شفافيته `opacity-50` فقط لتقديم تجربة انتقال مريحة بصرياً."
        },
        {
          mistake: "محاولة استخدام startTransition لمعالجة دوال خارج تحديثات React State",
          fix: "تأكد من أن الدالة الممرة لـ startTransition تقوم باستدعاء `setState` لتتمكن React من جدولة الأولوية."
        }
      ],
      bestPractices: [
        "استغل `isPending` دائماً لتزويد المستخدم بمؤشر مرئي خفيف يوضح أن العملية قيد التحضير.",
        "استخدم `useTransition` في تبديل الشاشات، وتصفية القوائم الكبرى، والتنقل بين الصفحات المعقدة."
      ],
      infographic: {
        title: "تشريح مخرجات خطاف useTransition",
        points: [
          "`isPending`: مؤشر منطقي (boolean) يعبر عن انشغال React بمعالجة الانتقال في الخلفية.",
          "`startTransition(fn)`: دالة لتسجيل تحديثات الحالة منخفضة الأولوية والقابلة للمقاطعة.",
          "السلوك البصري الأمثل: الحفاظ على الشاشة القديمة مع خفض الشفافية حتى تصبح الشاشة الجديدة جاهزة تماماً."
        ]
      }
    },
    {
      id: "15.4.c",
      title: "استخدام startTransition",
      englishTerm: {
        term: "Standalone startTransition Function",
        pronunciation: "ستاند ألون ستارت ترانزيشن فنكشن",
        meaning: "دالة startTransition المستقلة والمستوردة مباشرة من React للاستخدام عندما لا نحتاج لحالة isPending"
      },
      description: "بالإضافة إلى خطاف `useTransition`، توفر React دالة عامة ومستقلة تماماً تُستورد مباشرة كـ `import { startTransition } from 'react'`. هذه الدالة تؤدي نفس وظيفة جدولة التحديثات منخفضة الأولوية والقابلة للمقاطعة، ولكنها لا توفر حالة `isPending`. تُعد هذه الدالة ممتازة في السيناريوهات التي لا تحتاج فيها لعرض مؤشر انتظار، أو عندما تريد تشغيل انتقال من داخل مكتبات أو خطافات مخصصة أو ملفات خدمات خارجية دون الحاجة لاستدعاء خطاف كامل.",
      analogy: "يشبه الأمر إرسال خطاب بالبريد العادي دون طلب إشعار بالاستلام أو رسالة تتبع؛ أنت تعلم أن الخطاب سيصل في وقته المناسب دون استعجال، ولا تحتاج لدفع رسوم إضافية للحصول على رسالة SMS تخبرك بكل خطوة في الطريق!",
      whyItMatters: "تسمح لك `startTransition` المستقلة بتخفيف تعقيد الكود وعدم استهلاك حالة إضافية (`isPending`) عندما تكون غير ضرورية في الواجهة، كما تسمح باستخدام ميزة الانتقالات في مسارات التنقل لمكتبات مثل React Router و TanStack Router.",
      syntax: "import { startTransition } from 'react';\n\nstartTransition(() => {\n  navigate('/new-route');\n  setGlobalFilter(value);\n});",
      simpleExample: `// استيراد startTransition مباشرة كدالة عامة
import { startTransition, useState } from 'react';

export function StandaloneTransitionDemo() {
  const [filter, setFilter] = useState('');

  const updateSearch = (keyword: string) => {
    // استخدام دالة startTransition المستقلة بدون حاجة لخطاف useTransition
    startTransition(() => {
      setFilter(keyword);
    });
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <h4 className="font-bold text-cyan-400 mb-2">startTransition المستقلة</h4>
      <button
        onClick={() => updateSearch('تقنية React 19')}
        className="px-3 py-1.5 bg-blue-600 rounded-lg text-xs font-semibold"
      >
        تطبيق الفلترة السلسة
      </button>
      <p className="text-xs text-slate-400 mt-2">الفلترة الحالية: {filter}</p>
    </div>
  );
}`,
      advancedExample: `// استخدام startTransition المستقلة في إدارة تحديثات سلة التسوق
import { startTransition, useState } from 'react';

interface CartSummary {
  itemCount: number;
  totalDiscount: number;
}

export function StandaloneStoreCheckout() {
  const [itemCount, setItemCount] = useState<number>(1);
  const [calculationSummary, setCalculationSummary] = useState<CartSummary>({
    itemCount: 1,
    totalDiscount: 10
  });

  const handleQuantityChange = (newCount: number) => {
    // 1. تحديث عاجل فوري للعدد المعروض في العداد
    setItemCount(newCount);

    // 2. تحديث غير عاجل باستخدام startTransition لحساب الضرائب والخصومات المعقدة
    startTransition(() => {
      // محاكاة حسابات ضريبية متقدمة
      const discount = newCount > 5 ? 25 : newCount > 2 ? 15 : 5;
      setCalculationSummary({
        itemCount: newCount,
        totalDiscount: discount
      });
    });
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-emerald-400 mb-2">سلة المشتريات (startTransition)</h3>
      <p className="text-xs text-slate-400 mb-4">
        تحديث فوري لعداد القطع مع جدولة حسابات الخصم التلقائية في الخلفية.
      </p>

      {/* عداد الكمية التفاعلي الفوري */}
      <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl mb-4">
        <span className="text-xs text-slate-300">الكمية المطلوبة:</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleQuantityChange(Math.max(1, itemCount - 1))}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center font-bold text-sm"
          >
            -
          </button>
          <span className="font-mono font-bold text-cyan-300 text-base">{itemCount}</span>
          <button
            onClick={() => handleQuantityChange(itemCount + 1)}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center font-bold text-sm"
          >
            +
          </button>
        </div>
      </div>

      {/* ملخص الحسابات المحدث عبر startTransition */}
      <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-slate-400">القطع المعتمدة في الفاتورة:</span>
          <span className="font-bold text-slate-200">{calculationSummary.itemCount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">نسبة الخصم المكتسبة:</span>
          <span className="font-bold text-emerald-400">{calculationSummary.totalDiscount}%</span>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح الكود كيف تم استخدام `startTransition` المستقلة دون الحاجة لخطاف أو استدعاء `isPending`، مما مكن العداد من الاستجابة اللحظية للنقرات المتتالية، بينما تولت React جدولة حسابات الخصومات التراكمية في الخلفية دون أي تعارض.",
      commonMistakes: [
        {
          mistake: "محاولة كتابة دوال غير متزامنة مثل `startTransition(async () => { ... })` في React 18 القديمة",
          fix: "في React 18 كانت startTransition تقبل دوالاً تزامنية فقط؛ أما في React 19 فأصبح بالإمكان استخدام Async Transitions مع ميزات الـ Actions الحديثة."
        },
        {
          mistake: "استخدام startTransition عندما تحتاج الشاشة لإظهار دوارة تحميل واضحة للمستخدم",
          fix: "إذا كنت بحاجة لحالة مؤشر التحميل `isPending`، فاستخدم خطاف `useTransition` بدلاً من الدالة المستقلة."
        }
      ],
      bestPractices: [
        "استخدم `startTransition` المستقلة عندما لا تكون هناك حاجة لعرض مؤشر انتظار على الواجهة.",
        "استخدمها في مكتبات الملاحة وتغيير الروابط لتأمين تنقل سلس بين المسارات."
      ],
      infographic: {
        title: "مقارنة useTransition مقابل startTransition المستقلة",
        points: [
          "`useTransition()`: خطاف ➔ يوفر `[isPending, startTransition]` ➔ مثالي للواجهات التي تعرض مؤشر انتظار.",
          "`startTransition()`: دالة مستوردة مباشرة ➔ توفر `startTransition` فقط ➔ ممتازة للكود النظيف عندما لا يلزم مؤشر.",
          "القاعدة: كلاهما يشترك في نفس آلية الجدولة والمقاطعة الدقيقة في معمارية Concurrent React."
        ]
      }
    },
    {
      id: "15.4.d",
      title: "استخدام useDeferredValue",
      englishTerm: {
        term: "Using useDeferredValue Hook",
        pronunciation: "يوزينغ يوز ديفيرد فاليو هوك",
        meaning: "خطاف لتأجيل تحديث قيمة معينة حتى تنتهي التحديثات العاجلة مما يحقق سلاسة فائقة كبديل عصري لـ Debouncing"
      },
      description: "بينما يعمل `useTransition` على تغليف دوال تحديث الحالة (`setState`)، يعمل خطاف `useDeferredValue` على مستوى 'القيمة' نفسها (`value`). يستقبل الخطاف قيمة سريعة التغير (مثل نص حقل الإدخال)، ويُرجع نسخة مؤجلة من هذه القيمة. أثناء التحديثات السريعة، تحتفظ القيمة المؤجلة بنسختها القديمة ريثما ينتهي المتصفح من إنجاز العمليات العاجلة، ثم تلحق بالقيمة الحديثة بسلاسة في أول لحظة فراغ للمعالج. هذا يجعله البديل الأمثل لتقنيات الـ Debouncing القديمة المبنية على المؤقتات.",
      analogy: "يشبه الأمر شخصاً يمشي وفي يده بالون هيليوم مربوط بخيط طويل؛ عندما يبدأ الشخص بالركض السريع (تحديث الحقل العاجل)، قد يتأخر البالون بضعة سنتيمترات للخلف بسبب مقاومة الهواء (`useDeferredValue`). وبمجرد أن يهدئ الشخص سرعته، يلحق البالون به فوراً ويستقر فوق رأسه دون أن يعثر خطوات قدميه!",
      whyItMatters: "ميزة `useDeferredValue` العظمى على الـ Debouncing التقليدي هي أنها تتكيف تلقائياً مع سرعة جهاز المستخدم: على الحاسوب السريع تلحق القيمة فوراً بدون أي تأخير اصطناعي، وعلى الهاتف الضعيف تتأخر بقدر ما يلزم فقط لمنع تجمد الشاشة!",
      syntax: "const deferredQuery = useDeferredValue(query);\n// deferredQuery يتأخر تلقائياً ريثما يهدأ إدخال المستخدم",
      simpleExample: `// استيراد useDeferredValue من React
import { useState, useDeferredValue } from 'react';

export function SimpleDeferredDemo() {
  const [text, setText] = useState<string>('');
  // إنشاء قيمة مؤجلة من نص الحقل
  const deferredText = useDeferredValue(text);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="اكتب هنا..."
        className="w-full px-3 py-1.5 bg-slate-800 rounded-lg text-xs mb-2 text-white"
      />
      <p className="text-xs text-slate-400">القيمة الفورية: <span className="text-cyan-400">{text}</span></p>
      <p className="text-xs text-slate-400">القيمة المؤجلة: <span className="text-emerald-400">{deferredText}</span></p>
    </div>
  );
}`,
      advancedExample: `// تصفية قائمة ضخمة باستخدام useDeferredValue والمقارنة الحية
import React, { useState, useDeferredValue, useMemo } from 'react';

// مكون قائمة النتائج المعقدة
const HeavyResultsList = React.memo(({ query }: { query: string }) => {
  // مصفوفة ضخمة محاكاة
  const items = useMemo(() => {
    return Array.from({ length: 3000 }, (_, i) => \`عنصر بيانات رقم #\${i} - مسجل في قاعدة البيانات\`);
  }, []);

  // تصفية مكلفة
  const filtered = useMemo(() => {
    if (!query) return items.slice(0, 15);
    return items.filter((item) => item.includes(query)).slice(0, 15);
  }, [items, query]);

  return (
    <div className="space-y-1.5 max-h-48 overflow-y-auto p-2 bg-slate-900 rounded-xl border border-slate-800 text-xs">
      {filtered.length === 0 ? (
        <p className="text-slate-500 text-center py-2">لا توجد نتائج مطابقة</p>
      ) : (
        filtered.map((item, idx) => (
          <div key={idx} className="p-1.5 bg-slate-950 rounded text-slate-300 font-mono text-[11px]">
            {item}
          </div>
        ))
      )}
    </div>
  );
});

// المكون الرئيسي الذي يستهلك useDeferredValue
export function DeferredSearchExplorer() {
  const [search, setSearch] = useState<string>('');
  // استخدام useDeferredValue لتأجيل استعلام الفلترة
  const deferredSearch = useDeferredValue(search);

  // معرفة ما إذا كانت النتيجة متأخرة حالياً عن المدخل الفعلي
  const isStale = search !== deferredSearch;

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold text-cyan-400">البحث المرن بـ useDeferredValue</h3>
        {isStale && (
          <span className="text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full font-bold animate-pulse">
            جاري المزامنة ⚡
          </span>
        )}
      </div>

      <p className="text-xs text-slate-400 mb-4">
        بديل ذكي لـ Debounce؛ يتكيف مع سرعة جهازك تلقائياً دون مؤقتات ثابتة.
      </p>

      {/* حقل الإدخال الفوري */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="ابحث برقم العنصر (مثال: 55)..."
        className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500 mb-4"
      />

      {/* عرض القائمة وتخفيف الشفافية إذا كانت النتائج لا تزال تتطابق مع القيمة السابقة */}
      <div className={\`transition-opacity duration-150 \${isStale ? 'opacity-40' : 'opacity-100'}\`}>
        {/* نمرر deferredSearch بدلاً من search للقائمة الثقيلة */}
        <HeavyResultsList query={deferredSearch} />
      </div>
    </div>
  );
}`,
      outputExplanation: "من خلال تمرير `deferredSearch` للمكون الفرعي `HeavyResultsList`، يستمتع المستخدم بكتابة فورية في حقل الإدخال دون أي تقطيع، بينما يتم تصفية وعرض القائمة في الخلفية، مع الاستدلال بـ `search !== deferredSearch` لخفض شفافية النتائج القديمة مؤقتاً.",
      commonMistakes: [
        {
          mistake: "نسيان تغليف المكون المستهلك بـ `React.memo` عند استخدام useDeferredValue",
          fix: "يجب تغليف المكون الابن بـ React.memo حتى يستفيد من ثبات القيمة المؤجلة ويتخطى إعادة التصيير ريثما تتغير."
        },
        {
          mistake: "استخدام Debounce يدوي طويل (مثل 500ms) بالتزامن مع useDeferredValue",
          fix: "استغنِ عن الـ Debounce المصطنع تماماً؛ فـ useDeferredValue يقدم استجابة أسرع وأكثر ذكاءً تتكيف مع حمل المعالج."
        }
      ],
      bestPractices: [
        "استخدم `isStale = value !== deferredValue` لتقديم مؤشر بصري ذكي للمستخدم أثناء معالجة النتائج.",
        "مرر القيمة المؤجلة إلى المكونات الفرعية المعقدة المغلفة بـ `React.memo` لحصد أفضل مكاسب الأداء."
      ],
      infographic: {
        title: "مقارنة useDeferredValue مقابل Debouncing القديم",
        points: [
          "Debouncing القديم: يفرض تأخيراً ثابتاً ومصطنعاً (مثلاً 400ms) حتى على الحواسيب الخارقة فائقة السرعة.",
          "useDeferredValue الحديث: يتكيف مع قدرة الجهاز؛ سريع وفوري على الأجهزة القوية، ويتأخر فقط بقدر ما يلزم على الأجهزة الضعيفة.",
          "صفر مؤقتات: يعمل في قلب دورة معالجة React دون الحاجة لـ `setTimeout` أو إلغاء مؤقتات."
        ]
      }
    },
    {
      id: "15.4.e",
      title: "تحسين استجابة البحث",
      englishTerm: {
        term: "Optimizing Search Responsiveness",
        pronunciation: "أوبتيميزينغ سيرش ريسبونسيفنس",
        meaning: "الاستراتيجية المعمارية المتكاملة لضمان استجابة لحظية لحقول البحث في التطبيقات الضخمة"
      },
      description: "حقول البحث هي أكثر عناصر واجهة المستخدم حساسية لتأخير الأداء؛ فحينما يكتب المستخدم استعلاماً، يتوقع أن تظهر الحروف فور ضغط أصابعه على لوحة المفاتيح. إذا كانت عملية تصفية البيانات في القائمة ثقيلة وتجري بشكل متزامن، سيتجمد مؤشر الكتابة ويتأخر ظهور الحروف، وهو ما يفسد تجربة الاستخدام ويدمر تقييم تفاعل الصفحة INP. استراتيجية البحث المتزامن تجمع بين `useDeferredValue` أو `useTransition` مع مكونات فرعية مغلفة بـ `React.memo` لتحقيق استجابة كتابة لحظية مطلقة.",
      analogy: "يشبه الأمر كاتب ضبط الجلسات في المحكمة؛ الكاتب يدون كل كلمة ينطق بها القاضي فوراً بقلمه السريع على دفتره (`search`), بينما يقوم طاقم الأرشيف في الخلفية بالبحث عن السجلات القديمة وترتيب الأوراق بهدوء (`deferredSearch`) دون أن يطلبوا من القاضي التوقف عن الكلام!",
      whyItMatters: "حقول البحث البطيئة تترك انطباعاً فورياً لدى المستخدم بأن التطبيق رديء وبدائي؛ وتطبيق استراتيجية البحث المتزامن يمنح تطبيقك طابع السرعة والاحترافية التي تضاهي كبرى محركات البحث العالمية.",
      syntax: "const [search, setSearch] = useState('');\nconst deferred = useDeferredValue(search);\n// <HeavySearchResults query={deferred} />",
      simpleExample: `// مثال لنمط البحث السلس الشائع
import { useState, useDeferredValue } from 'react';

export function ResponsiveSearchField() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="ابحث بسلاسة..."
        className="w-full px-3 py-1.5 bg-slate-800 rounded-lg text-xs"
      />
      <p className="text-xs text-slate-400 mt-2">البحث الفعلي المطبق: {deferredQuery}</p>
    </div>
  );
}`,
      advancedExample: `// نظام بحث متكامل في دليل موظفين ضخم يحتوي على 50,000 سجل
import React, { useState, useDeferredValue, useMemo } from 'react';

interface Employee {
  id: number;
  name: string;
  department: string;
  email: string;
}

// توليد قاعدة بيانات ضخمة للمحاكاة
const MOCK_EMPLOYEES: Employee[] = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: \`الموظف \${i + 1} الشمري\`,
  department: i % 4 === 0 ? 'الهندسة البرمجية' : i % 3 === 0 ? 'التسويق الرقمي' : 'الموارد البشرية',
  email: \`emp\${i + 1}@company.com\`
}));

// مكون عرض نتائج البحث المحسن بـ React.memo
const EmployeeDirectoryResults = React.memo(({ filterQuery }: { filterQuery: string }) => {
  // تصفية مكثفة عبر آلاف السجلات
  const filtered = useMemo(() => {
    if (!filterQuery.trim()) return MOCK_EMPLOYEES.slice(0, 8);
    return MOCK_EMPLOYEES.filter(
      (emp) =>
        emp.name.includes(filterQuery) ||
        emp.department.includes(filterQuery) ||
        emp.email.includes(filterQuery)
    ).slice(0, 8);
  }, [filterQuery]);

  return (
    <div className="space-y-2">
      {filtered.length === 0 ? (
        <div className="p-4 text-center text-xs text-slate-500 bg-slate-900 rounded-xl">
          لم يتم العثور على أي موظف يطابق البحث.
        </div>
      ) : (
        filtered.map((emp) => (
          <div key={emp.id} className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center text-xs">
            <div>
              <p className="font-bold text-slate-200">{emp.name}</p>
              <span className="text-[11px] text-slate-400">{emp.department}</span>
            </div>
            <span className="font-mono text-cyan-400 text-[11px]">{emp.email}</span>
          </div>
        ))
      )}
    </div>
  );
});

// المكون الرئيسي لبوابة البحث السريع
export function EnterpriseSearchPortal() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const isSearching = searchTerm !== deferredSearchTerm;

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold text-emerald-400">دليل الموظفين (10,000 سجل)</h3>
        {isSearching && (
          <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
            جاري التصفية...
          </span>
        )}
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="ابحث بالاسم أو القسم أو البريد..."
          className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
          >
            ✕
          </button>
        )}
      </div>

      <div className={\`transition-opacity duration-150 \${isSearching ? 'opacity-50' : 'opacity-100'}\`}>
        <EmployeeDirectoryResults filterQuery={deferredSearchTerm} />
      </div>
    </div>
  );
}`,
      outputExplanation: "توضح البوابة استجابة فائقة السرعة؛ فحتى مع تصفية 10,000 سجل موظف في الذاكرة، يستطيع المستخدم كتابة ومسح الحروف بسرعة قصوى دون أي تقطيع في لوحة المفاتيح، وتتولى React تحديث القائمة فور استقرار إدخال المستخدم.",
      commonMistakes: [
        {
          mistake: "القيام بطلب شبكة API جديد مع كل حرف في useDeferredValue دون إدارة الإلغاء",
          fix: "استخدم TanStack Query أو AbortController عند إرسال طلبات الشبكة، واقصر useDeferredValue على التصفية المحلية في الذاكرة."
        },
        {
          mistake: "نسيان توفير زر لمسح حقل البحث بسرعة",
          fix: "أضف زر مسح فوري لإعادة الحقل إلى القيمة الفارغة بسهولة وسرعة."
        }
      ],
      bestPractices: [
        "استخدم `useDeferredValue` دوماً مع حقول البحث التي تقوم بتصفية بيانات محلية ضخمة.",
        "حدد عدد النتائج المعروضة (مثلاً أول 20 نتيجة عبر `slice(0, 20)`) لتخفيف العبء على متصفح المستخدم."
      ],
      infographic: {
        title: "معمارية البحث فائق السرعة",
        points: [
          "حقل الإدخال (Input): يقرأ ويحدث `search` فوراً وبدون أي عوائق (0ms).",
          "القناة المؤجلة: تنتج `deferredSearch` في خلفية المعالجة المتزامنة.",
          "مكون النتائج: مغلف بـ `React.memo` ويعتمد حصراً على `deferredSearch`.",
          "النتيجة: تجربة كتابة سلسة واستجابة INP ممتازة تفوق التوقعات!"
        ]
      }
    },
    {
      id: "15.4.f",
      title: "فهم حالات Pending",
      englishTerm: {
        term: "Understanding Pending States & UI Feedback",
        pronunciation: "أندرستاندينغ بيندينغ ستيتس آند يو آي فيدباك",
        meaning: "كيفية تقديم تغذية راجعة بصرية احترافية للمستخدم أثناء وجود معالجة معلقة دون إرباك الواجهة"
      },
      description: "عند تشغيل انتقال بواسطة `useTransition`، توفر React الراية المنطقية `isPending`. فهم كيفية استغلال هذه الحالة بصرياً هو الفارق بين التطبيق البدائي والتطبيق فائق الاحترافية. في التطبيقات البدائية، يتم إخفاء الصفحة بالكامل ووضع دوارة تحميل كبيرة، مما يسبب ارتعاشاً للعين. بينما في التطبيقات الاحترافية، تُستخدم `isPending` لتقديم إشارات بصرية ناعمة وغير معطلة؛ مثل خفض شفافية المحتوى القديم بنسبة طفيفة (`opacity-60`)، أو إظهار شريط تقدم نحيف في أعلى الشاشة (Top Progress Bar)، أو تلوين حواف الزر بنبض ضوئي خفيف.",
      analogy: "يشبه الأمر شريط تحميل تنزيل الملفات في متصفح Chrome؛ الشريط يظهر صغيراً في أسفل أو أعلى المتصفح بينما تواصل تصفح الموقع بحرية، ولا يقوم المتصفح بحجب الشاشة بالكامل بقناع أسود حتى ينتهي التحميل!",
      whyItMatters: "يحافظ الاستخدام الذكي لحالة `isPending` على تركيز المستخدم (Cognitive Context) ويمنعه من الشعور بأن التطبيق قد تعطل أو تجمد أثناء العمليات الكبيرة.",
      syntax: "<div className={isPending ? 'opacity-50 pointer-events-none' : 'opacity-100'}>\n  {content}\n</div>",
      simpleExample: `// مثال يوضح الاستخدام الناعم لـ isPending
import { useState, useTransition } from 'react';

export function SoftPendingDemo() {
  const [data, setData] = useState('البيانات الحالية');
  const [isPending, startTransition] = useTransition();

  const handleUpdate = () => {
    startTransition(() => {
      // تحديث الحالة
      setData('البيانات المحدثة الجديدة');
    });
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      {/* خفض الشفافية بنعومة أثناء الانتظار */}
      <div className={\`p-3 bg-slate-950 rounded-lg mb-3 transition-opacity \${isPending ? 'opacity-40' : 'opacity-100'}\`}>
        <p className="text-xs">{data}</p>
      </div>
      <button onClick={handleUpdate} className="px-3 py-1 bg-cyan-600 rounded text-xs font-semibold">
        {isPending ? 'جاري التحديث...' : 'تحديث المحتوى'}
      </button>
    </div>
  );
}`,
      advancedExample: `// استوديو التغذية الراجعة البصرية لحالات Pending المتنوعة
import { useState, useTransition } from 'react';

export function PendingFeedbackStudio() {
  const [styleType, setStyleType] = useState<'dim' | 'progressBar' | 'skeletonPulse'>('dim');
  const [contentIndex, setContentIndex] = useState<number>(1);
  const [isPending, startTransition] = useTransition();

  const triggerHeavyChange = () => {
    startTransition(() => {
      // محاكاة عملية ثقيلة تستهلك وقتاً ملحوظاً
      const start = performance.now();
      while (performance.now() - start < 80) { /* تأخير مصطنع لإبراز الـ Pending */ }
      setContentIndex((i) => i + 1);
    });
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">استوديو تصميم حالات Pending</h3>
      <p className="text-xs text-slate-400 mb-4">
        اختر الأسلوب البصري المفضل لتمثيل حالة الانتظار واختبر النعومة.
      </p>

      {/* شريط التقدم العلوي إذا كان الأسلوب مختاراً وحالة isPending نشطة */}
      {styleType === 'progressBar' && isPending && (
        <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-cyan-400 animate-pulse w-3/4 transition-all"></div>
        </div>
      )}

      {/* خيارات الأسلوب البصري */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setStyleType('dim')}
          className={\`px-2.5 py-1 rounded-lg text-xs font-semibold \${styleType === 'dim' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          تخفيف الشفافية (Dim)
        </button>
        <button
          onClick={() => setStyleType('progressBar')}
          className={\`px-2.5 py-1 rounded-lg text-xs font-semibold \${styleType === 'progressBar' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          شريط علوي
        </button>
      </div>

      {/* بطاقة المحتوى الخاضعة للتأثير البصري */}
      <div
        className={\`p-4 bg-slate-900 border border-slate-800 rounded-xl mb-4 transition-all duration-200 \${
          isPending && styleType === 'dim' ? 'opacity-40 scale-[0.99]' : 'opacity-100 scale-100'
        }\`}
      >
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-bold text-sm text-slate-200">التقرير الإحصائي رقم #{contentIndex}</h4>
          {isPending && (
            <span className="text-[10px] text-amber-400 font-mono animate-bounce">⏳ تحضير...</span>
          )}
        </div>
        <p className="text-xs text-slate-400">
          تم تحديث هذا التقرير في بيئة المعالجة المتزامنة دون حجب الصفحة أو تجميد أزرار المستخدم.
        </p>
      </div>

      <button
        onClick={triggerHeavyChange}
        disabled={isPending}
        className="w-full py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-xs font-bold rounded-xl border border-slate-700"
      >
        إطلاق عملية انتقال ثقيلة 🔄
      </button>
    </div>
  );
}`,
      outputExplanation: "يوضح الاستوديو كيف يمكن تحويل حالة `isPending` إلى تجربة استخدام مريحة وراقية عبر تخفيف الشفافية بلطف أو عرض شريط تقدم نحيف، مع الحفاظ على بقاء المحتوى القديم مرئياً للمستخدم وتجنب الشاشات البيضاء الفارغة.",
      commonMistakes: [
        {
          mistake: "تعطيل كامل الصفحة ومنع نقرات المستخدم أثناء isPending",
          fix: "تذكر أن ميزة الانتقالات صممت لتبقى الصفحة تفاعلية؛ لا تمنع النقرات إلا على الزر المشغل نفسه لمنع التكرار المفرط."
        },
        {
          mistake: "إظهار نصوص مزعجة ووميض مفاجئ إذا كانت المعالجة تنتهي في أجزاء خاطفة من الثانية",
          fix: "استخدم انتقالات CSS الناعمة (`transition-opacity duration-150`) لمنع الوميض السريع للعمليات اللحظية."
        }
      ],
      bestPractices: [
        "استخدم `opacity-50` أو `opacity-60` كمعيار قياسي عالمي للمحتوى المعلق.",
        "أضف مؤشر فأرة مناسب مثل `cursor-wait` أو شريط تقدم خفيف لتأكيد استلام الطلب."
      ],
      infographic: {
        title: "أنماط التغذية الراجعة لحالة isPending",
        points: [
          "تخفيف الشفافية (Dimming): الأسلوب الأفضل والأكثر شيوعاً، يحافظ على مقروئية الصفحة ويشعر المستخدم بالسلاسة.",
          "شريط التقدم العلوي (Top Bar): مثالي للتنقل بين الصفحات والمسارات الكبرى.",
          "التحذير الأكبر: تجنب حجب الصفحة بشاشات سوداء أو دوارات عملاقة تؤذي أعين المستخدمين."
        ]
      }
    },
    {
      id: "15.4.g",
      title: "حدود Transition في حقول الإدخال",
      englishTerm: {
        term: "Transition Limitations in Controlled Inputs",
        pronunciation: "ترانزيشن ليميتيشنز إن كونترولد إنبوتس",
        meaning: "القاعدة الصارمة التي تحظر تغليف حالة حقل الإدخال المتحكم به مباشرة بـ Transition لمنع قفز المؤشر والتأخر"
      },
      description: "هناك قاعدة هندسية صارمة لا تقبل الاستثناء في React: **ممنوع تماماً وضع تحديث حالة حقل الإدخال المتحكم به (`e.target.value`) داخل `startTransition`!**\nإذا قمت بكتابة `startTransition(() => setText(e.target.value))`، فستتسبب في كوارث برمجية فورية:\n1. تأخر ظهور الحروف المكتوبة للمستخدم (Typing Stutter).\n2. ارتداد مؤشر الكتابة (Cursor Jump) وقفزه إلى نهاية الحقل أو أوله بعد كل حرف!\n3. فقدان التزامن بين قيمة الـ DOM الحقيقية وحالة React.\nالحل الصحيح دائماً هو الاحتفاظ بحالة الحقل عاجلة وفورية، وتأجيل الحالة المشتقة فقط.",
      analogy: "يشبه الأمر مقود قيادة السيارة؛ حركة المقود يجب أن تكون ميكانيكية فورية ومتصلة بالعجلات مباشرة (تحديث عاجل). تخيل لو وضعت نظاماً حاسوبياً يقوم بتأجيل استجابة المقود 3 ثوانٍ في الخلفية لأن السيارة مشغولة بحساب كمية الوقود المتبقية! ستكون النتيجة حادثاً كارثياً مؤكداً!",
      whyItMatters: "تعد هذه القاعدة السبب الأكثر شيوعاً في تقارير الأخطاء التي يقدمها مطورو React المبتدئون عند محاولة استخدام Transitions لأول مرة؛ ومعرفتها تحميك من إفساد أهم عناصر التفاعل في موقعك.",
      syntax: "// ❌ خطأ كارثي ومحرم قطعاً:\nconst onChange = (e) => {\n  startTransition(() => setValue(e.target.value)); // كارثة في مؤشر الكتابة!\n};\n\n// ✅ الأسلوب الصحيح السليم:\nconst onChange = (e) => {\n  setValue(e.target.value); // عاجل فوري للحقل\n  startTransition(() => setDeferredSearch(e.target.value)); // غير عاجل للحسابات\n};",
      simpleExample: `// مثال يوضح الحل السليم لتفادي فخ حقول الإدخال
import { useState, useTransition } from 'react';

export function CorrectInputHandling() {
  // حالة الحقل الفورية
  const [inputValue, setInputValue] = useState('');
  // حالة الفلترة غير العاجلة
  const [filterQuery, setFilterQuery] = useState('');

  const [, startTransition] = useTransition();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 1. تحديث الحقل بشكل عاجل وفوري 100% (ممنوع startTransition هنا!)
    setInputValue(e.target.value);

    // 2. تحديث الفلترة أو الحسابات في الانتقال غير العاجل
    startTransition(() => {
      setFilterQuery(e.target.value);
    });
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <input
        type="text"
        value={inputValue}
        onChange={handleTextChange}
        placeholder="كتابة سليمة بدون قفز المؤشر..."
        className="w-full px-3 py-1.5 bg-slate-800 rounded-lg text-xs"
      />
    </div>
  );
}`,
      advancedExample: `// معمل المقارنة التفاعلي لإثبات مشكلة قفز المؤشر في حقول الإدخال
import { useState, useTransition } from 'react';

export function InputTransitionTrapLab() {
  const [mode, setMode] = useState<'correct' | 'broken'>('correct');

  // حالات الوضع الصحيح
  const [correctInput, setCorrectInput] = useState<string>('مرحباً بك في React');
  const [correctFilter, setCorrectFilter] = useState<string>('');

  // حالات الوضع الخاطئ
  const [brokenInput, setBrokenInput] = useState<string>('مرحباً بك في React');

  const [, startTransition] = useTransition();

  // معالج الوضع الخاطئ (يقع في الفخ)
  const handleBrokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // ❌ خطأ: تأجيل قيمة الحقل نفسه يسبب تأخيراً وقفزاً للمؤشر في المنتصف!
    startTransition(() => {
      setBrokenInput(val);
    });
  };

  // معالج الوضع الصحيح
  const handleCorrectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // ✅ تحديث الحقل فوراً
    setCorrectInput(val);
    // تأجيل الفلترة فقط
    startTransition(() => {
      setCorrectFilter(val);
    });
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-rose-400 mb-2">فخ Transitions في حقول الإدخال</h3>
      <p className="text-xs text-slate-400 mb-4">
        جرب وضع المؤشر في منتصف النص وحاول الكتابة في كلا الحقلين ولاحظ حركة المؤشر!
      </p>

      {/* خيارات الوضع */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode('correct')}
          className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${mode === 'correct' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          الأسلوب الصحيح (فصل الحالتين ✅)
        </button>
        <button
          onClick={() => setMode('broken')}
          className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${mode === 'broken' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          الأسلوب الخاطئ (فخ قفز المؤشر ❌)
        </button>
      </div>

      {mode === 'correct' ? (
        <div className="p-4 bg-slate-900 border border-emerald-500/30 rounded-xl space-y-2">
          <label className="text-xs text-emerald-400 font-semibold block">حقل الإدخال السليم:</label>
          <input
            type="text"
            value={correctInput}
            onChange={handleCorrectChange}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
          />
          <p className="text-[11px] text-slate-400">
            * مؤشر الفأرة يبقى ثابتاً في مكانه وتظهر الحروف فورياً وبسلاسة تامة.
          </p>
        </div>
      ) : (
        <div className="p-4 bg-slate-900 border border-rose-500/30 rounded-xl space-y-2">
          <label className="text-xs text-rose-400 font-semibold block">حقل الإدخال المعيب (startTransition):</label>
          <input
            type="text"
            value={brokenInput}
            onChange={handleBrokenChange}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
          />
          <p className="text-[11px] text-rose-300">
            * ستلاحظ تأخراً في استجابة الحروف وقفز المؤشر لآخر السطر عند محاولة التعديل في المنتصف!
          </p>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "يوضح المعمل بشكل ملموس أن تغليف قيمة الحقل بـ `startTransition` يكسر التزامن اللحظي للـ DOM، مما يجعل المتصفح يعيد ضبط موضع مؤشر الفأرة لنهاية الحقل مع كل حرف، في حين أن فصل حالة الحقل العاجلة عن حالة الفلترة يضمن تجربة كتابة مثالية وطبيعية بنسبة 100%.",
      commonMistakes: [
        {
          mistake: "وضع `setValue(e.target.value)` داخل startTransition بحجة تسريع التطبيق",
          fix: "قيمة الحقل المتحكم به يجب أن تكون دائماً فورية وعاجلة دون أي استثناء."
        },
        {
          mistake: "دمج نص الحقل مع مصفوفة الفلترة في State واحدة غير قابلة للتجزئة",
          fix: "افصل الحالة إلى حالتين مستقلتين: `searchTerm` للحقل، و `filterQuery` للنتائج."
        }
      ],
      bestPractices: [
        "احفظ القاعدة الذهبية: 'Never defer the controlled input value itself, only defer the downstream expensive work'.",
        "استخدم `useDeferredValue` لتوليد قيمة مؤجلة من نص الحقل كأسهل وأأمن حل لتفادي هذا الفخ."
      ],
      infographic: {
        title: "القاعدة الذهبية لحقول الإدخال والـ Transitions",
        points: [
          "❌ ممنوع: `startTransition(() => setInput(e.target.value))` ➔ بطء كتابة وقفز المؤشر لآخر السطر.",
          "✅ سليم: `setInput(e.target.value)` فوراً + `startTransition(() => setFilter(val))` في الخلفية.",
          "النتيجة: حقل سريع 100% بدون أي تعليق ومعالجة ذكية للبيانات في أول فرصة فراغ للمعالج."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q15.4.1",
      question: "ما هو الفارق الأساسي بين useTransition و useDeferredValue في React؟",
      options: [
        "useTransition يعمل مع الأرقام فقط، بينما useDeferredValue يعمل مع النصوص فقط",
        "useTransition يغلف دالة تحديث الحالة (State Setter)، بينما useDeferredValue يغلف القيمة نفسها (Value)",
        "useDeferredValue يوقف طلبات الشبكة، بينما useTransition يقوم بتشغيلها",
        "لا يوجد أي فرق وهما مجرد اسمين بديلين لنفس الوظيفة"
      ],
      correctAnswer: 1,
      explanation: "يُستخدم `useTransition` عند امتلاكك لدالة تحديث الحالة وتريد تغليفها بـ `startTransition(() => setState())`، بينما يُستخدم `useDeferredValue(val)` عندما تستلم قيمة جاهزة (مثل Props أو State) وتريد اشتقاق نسخة مؤجلة منها."
    },
    {
      id: "q15.4.2",
      question: "لماذا يُحظر تماماً تغليف تحديث حقل الإدخال المتحكم به (Controlled Input) داخل startTransition؟",
      options: [
        "لأن React ستطلق خطأ تجميع يمنع بناء المشروع فوراً",
        "لأنه يتسبب في تأخر ظهور الحروف المكتوبة وارتداد مؤشر الكتابة (Cursor Jump) إلى نهاية الحقل بعد كل ضغطة مفتاح",
        "لأن حقول الإدخال لا تدعم ميزات React 18",
        "لأن ذلك يؤدي لإغلاق المتصفح تلقائياً"
      ],
      correctAnswer: 1,
      explanation: "حقول الإدخال تحتاج إلى تزامن لحظي فوري مع الـ DOM؛ وتأجيل تحديث قيمتها يجعل المتصفح يفقد موضع مؤشر الكتابة ويعيده للوراء أو للنهاية، مما يفسد تجربة الإدخال تماماً."
    },
    {
      id: "q15.4.3",
      question: "ما هي الميزة الكبرى لـ useDeferredValue مقارنة بتقنيات الـ Debouncing التقليدية المبنية على setTimeout؟",
      options: [
        "أنه يقوم بتشفير النصوص تلقائياً",
        "أنه يتكيف مع سرعة جهاز المستخدم تلقائياً؛ سريع وفوري على الأجهزة القوية ويتأخر فقط بقدر ما يلزم على الأجهزة الضعيفة دون فرض تأخير اصطناعي ثابت",
        "أنه لا يعمل إلا في متصفح جوجل كروم",
        "أنه يلغي الحاجة لكتابة CSS في المشروع"
      ],
      correctAnswer: 1,
      explanation: "الـ Debounce يفرض تأخيراً ثابتاً ومصطنعاً (مثل 400ms) حتى لو كان المعالج خالياً، بينما `useDeferredValue` يتكامل مع معمارية Concurrent React وينفذ التحديث فور فراغ المعالج دون أي انتظار وهمي."
    }
  ],
  exercise: {
    id: "ex-15.4",
    title: "تمرين عملي: بناء بوابة بحث سريعة لكتالوج منتجات ضخم باستخدام useTransition و useDeferredValue",
    description: "قم بإنشاء مكونين متكاملين:\n1. مكون `ProductSearchCatalog` يتيح للمستخدم البحث في قائمة من 5,000 منتج محاكى.\n2. استخدام `useDeferredValue` لتأجيل استعلام البحث الممرر لقائمة النتائج المغلفة بـ `React.memo`.\n3. إضافة مؤشر `isStale` لتخفيف شفافية النتائج القديمة بنسبة `opacity-50` أثناء معالجة النتائج الجديدة مع ضمان بقاء حقل الإدخال سريعاً ولحظياً 100%.",
    hints: [
      "احرص على أن تكون حالة الحقل `search` عاجلة وفورية وتتحدث عبر `onChange` مباشرة.",
      "اشتق القيمة المؤجلة: `const deferredQuery = useDeferredValue(search);`.",
      "احسب مؤشر التأخر: `const isStale = search !== deferredQuery;`.",
      "غلف مكون القائمة بـ `React.memo` ومرر له `deferredQuery`.",
      "طبق صنف `opacity-50 transition-opacity` على حاوية القائمة عندما يكون `isStale` صحيحاً."
    ],
    solution: `// استيراد الأدوات من React
import React, { useState, useDeferredValue, useMemo } from 'react';

// تعريف نوع المنتج
interface ProductItem {
  id: number;
  title: string;
  category: string;
  price: number;
}

// 1. توليد 5000 منتج للمحاكاة
const MOCK_PRODUCTS: ProductItem[] = Array.from({ length: 5000 }, (_, i) => ({
  id: i + 1,
  title: \`منتج تقني برقم كودي #\${i + 1}\`,
  category: i % 3 === 0 ? 'إلكترونيات' : i % 2 === 0 ? 'ملحقات' : 'برمجيات',
  price: Math.floor((i * 17) % 500) + 20
}));

// 2. مكون قائمة النتائج المعزول والمغلف بـ React.memo
interface ResultsProps {
  query: string;
}

const ProductResultsGrid = React.memo(({ query }: ResultsProps) => {
  // تصفية مكلفة على 5000 عنصر
  const filtered = useMemo(() => {
    if (!query.trim()) return MOCK_PRODUCTS.slice(0, 10);
    return MOCK_PRODUCTS.filter((p) =>
      p.title.includes(query) || p.category.includes(query)
    ).slice(0, 10);
  }, [query]);

  return (
    <div className="space-y-2">
      {filtered.length === 0 ? (
        <p className="text-slate-500 text-xs text-center py-4">لا توجد منتجات مطابقة للبحث</p>
      ) : (
        filtered.map((prod) => (
          <div key={prod.id} className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center text-xs">
            <div>
              <p className="font-semibold text-slate-200">{prod.title}</p>
              <span className="text-[10px] text-slate-500">{prod.category}</span>
            </div>
            <span className="font-mono text-emerald-400 font-bold">{prod.price} $</span>
          </div>
        ))
      )}
    </div>
  );
});

// 3. المكون الرئيسي للبوابة
export function ProductSearchCatalog() {
  // حالة الإدخال الفورية العاجلة
  const [searchTerm, setSearchTerm] = useState('');
  // القيمة المؤجلة المشتقة تلقائياً
  const deferredSearchTerm = useDeferredValue(searchTerm);

  // فحص ما إذا كانت المعالجة معلقة حالياً
  const isStale = searchTerm !== deferredSearchTerm;

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold text-cyan-400">كتالوج المنتجات السريع (5,000 منتج)</h3>
        {isStale && (
          <span className="text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full font-bold animate-pulse">
            جاري المزامنة...
          </span>
        )}
      </div>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="ابحث برقم المنتج أو التصنيف..."
        className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500 mb-4"
      />

      <div className={\`transition-opacity duration-150 \${isStale ? 'opacity-40' : 'opacity-100'}\`}>
        <ProductResultsGrid query={deferredSearchTerm} />
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة طريق التحديثات والانتقالات في React",
    nodes: [
      { id: "1", title: "أولويات التحديث", desc: "عاجل (الكتابة والنقر = 0ms) مقابل غير عاجل (تصفية وعرض ثقيل)" },
      { id: "2", title: "useTransition", desc: "تغليف State Setters وتوفير حالة isPending البصرية" },
      { id: "3", title: "startTransition", desc: "دالة مستقلة لتسجيل الانتقالات بدون استهلاك حالة isPending" },
      { id: "4", title: "useDeferredValue", desc: "تأجيل القيمة ذاتها كبديل ذكي لـ Debounce يتكيف مع سرعة المعالج" },
      { id: "5", title: "البحث فائق الاستجابة", desc: "حقل إدخال فوري + قائمة نتائج مؤجلة مغلفة بـ React.memo" },
      { id: "6", title: "ممنوع في حقول الإدخال", desc: "حظر تغليف قيمة الحقل مباشرة لتفادي قفز مؤشر الفأرة" }
    ]
  }
};
