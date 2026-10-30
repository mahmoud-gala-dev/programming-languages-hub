// e:\KD\lang\react\src\data\sections\section31\topic2.js
// الموضوع الثاني من القسم 31: مشروع تطبيق قائمة المهام (Advanced To-Do List Project)

export const topic2 = {
  id: "topic-31-2",
  title: "مشروع تطبيق قائمة المهام (Advanced To-Do List App)",
  description: "بناء مشروع تطبيقي شامل لقائمة مهام تفاعلية متطورة: تصميم نموذج البيانات الصارم، العمليات الأساسية (إضافة، تعديل، حذف، وتحديد الإنجاز)، خوارزميات التصفية والبحث اللحظي، الحفظ التلقائي في LocalStorage، والتوافق الكامل مع معايير الوصولية WCAG وتجربة المستخدم الحديثة.",
  subtopics: [
    {
      id: "31.2.a",
      title: "فكرة المشروع والمتطلبات الوظيفية (To-Do App Requirements)",
      englishTerm: {
        term: "Project Scope & Feature Specifications",
        pronunciation: "بروجكت سكوب آند فيتشر سبيسيفيكيشنز",
        meaning: "نطاق المشروع والمتطلبات الوظيفية لقائمة المهام الإنتاجية"
      },
      description: "تعتبر قائمة المهام (To-Do List) الاختبار المعياري العالمي الأول لقدرة مطور React على إدارة البيانات المعقدة والحالات المتعددة. يتضمن نطاق المشروع الاحترافي: 1) إضافة مهام جديدة مع منع المهام الفارغة والتحقق من صحة النص؛ 2) تبديل حالة اكتمال المهمة (Toggle Complete) مع إشارات بصرية دلالية؛ 3) إمكانية تعديل نص المهمة مباشرة (Inline Editing)؛ 4) حذف المهمة الفردية أو تفريغ كافة المهام المكتملة دفعة واحدة؛ 5) تصفية المهام حسب الحالة (الكل، النشطة، المكتملة) والبحث اللحظي بالاسم؛ 6) حفظ البيانات في LocalStorage لضمان استمراريتها؛ 7) دعم معايير الوصولية وقارئات الشاشة بالكامل.",
      realWorldAnalogy: "يشبه تطبيق قائمة المهام لوحة المهام التفاعلية (Kanban Board) في مكاتب إدارة المشاريع؛ حيث يدون الموظف مهامه اليومية، وينقل المهمة التي أنجزها إلى قسم المكتمل، ويستطيع البحث بالكلمات المفتاحية عن أي مهمة سابقة أو أرشفة المهام القديمة لتنظيم يومه.",
      whyItMatters: "يجمع مشروع قائمة المهام كافة العمليات الأساسية للبيانات (CRUD: Create, Read, Update, Delete) في واجهة تفاعلية واحدة؛ وإتقان هذا المشروع يمنح المطور الأساس المتين لبناء أي تطبيق ويب يتعامل مع المصفوفات وقواعد البيانات.",
      syntax: "// نموذج واجهة المهمة البرمجية:\ninterface Task {\n  id: string;\n  text: string;\n  completed: boolean;\n  createdAt: string;\n  category?: string;\n}",
      simpleExample: `// استعراض محاكاة فكرة قائمة المهام الأساسية في React
import React, { useState } from 'react';

export function SimpleTodoDemo() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'تعلم أساسيات React', done: true },
    { id: 2, text: 'بناء مشروع قائمة المهام', done: false }
  ]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }]);
    setInput('');
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs">
      <h4 className="font-bold text-xs text-indigo-400 mb-2">قائمة مهام مبسطة</h4>
      <div className="flex gap-1 mb-3">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="مهمة جديدة..." 
          className="flex-1 p-1 bg-slate-950 border border-slate-700 rounded text-xs text-white"
        />
        <button onClick={addTodo} className="px-2 py-1 bg-indigo-600 rounded text-xs font-bold">+</button>
      </div>
      <div className="space-y-1 text-xs">
        {todos.map(t => (
          <div key={t.id} className={t.done ? 'line-through text-slate-500' : 'text-slate-200'}>
            • {t.text}
          </div>
        ))}
      </div>
    </div>
  );
}`,
      advancedExample: `// استعراض لوحة متطلبات قائمة المهام الاحترافية مع مؤشرات الإنجاز والإحصائيات الحية
import React, { useState } from 'react';

export function AdvancedTodoRequirementsStudio() {
  const [tasks] = useState([
    { id: '1', title: 'مراجعة معمارية المكونات', completed: true, priority: 'عالية' },
    { id: '2', title: 'كتابة اختبارات الوحدات لنموذج الإدخال', completed: false, priority: 'متوسطة' },
    { id: '3', title: 'ربط التخزين المحلي LocalStorage', completed: false, priority: 'عالية' }
  ]);

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
        <div>
          <h4 className="font-bold text-sm text-slate-200">مدير المهام الاحترافي (Task Engine)</h4>
          <p className="text-[11px] text-slate-400">إدارة دورة حياة المهام مع إحصائيات الإنجاز الفورية</p>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
          {progressPercent}% مكتمل
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {tasks.map(task => (
          <div key={task.id} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
            <div className="flex items-center gap-2">
              <span className={\`w-2 h-2 rounded-full \${task.completed ? 'bg-emerald-500' : 'bg-amber-500'}\`} />
              <span className={task.completed ? 'line-through text-slate-500' : 'text-slate-200'}>
                {task.title}
              </span>
            </div>
            <span className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
              أولوية {task.priority}
            </span>
          </div>
        ))}
      </div>

      <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400 flex justify-between">
        <span>إجمالي المهام: {tasks.length}</span>
        <span className="text-emerald-400">المنجزة: {completedCount}</span>
        <span className="text-amber-400">المتبقية: {tasks.length - completedCount}</span>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية تخطيط المتطلبات الوظيفية لقائمة المهام؛ حيث يربط بين تتبع الحالات الفردية وعرض إحصائيات عامة فورية (نسبة الإنجاز وعدد المهام المتبقية) لإعطاء المستخدم سياقاً واضحاً ومحفزاً للإنتاجية.",
      commonMistakes: [
        {
          mistake: "السماح بإضافة مهام فارغة أو تحتوي على مسافات بيضاء فقط دون تنظيف النص عبر trim().",
          why: "هذا يؤدي إلى ملء القائمة بأسطر فارغة مشوهة للتصميم وتجربة استخدام سيئة.",
          fix: "تحقق دائماً من الشرط: if (!text.trim()) return قبل إضافة أي مهمة جديدة."
        },
        {
          mistake: "استخدام فهرس المصفوفة (index) كـ key لعناصر قائمة المهام عند عرضها بـ map.",
          why: "حذف أو إعادة ترتيب المهام باستخدام الفهرس يسبب أخطاء بصرية وتحديثاً خاطئاً لحقول الإدخال ومربعات الاختيار.",
          fix: "استخدم دائماً معرفاً فريداً ومستقراً لكل مهمة مثل crypto.randomUUID() أو Date.now().toString()."
        }
      ],
      bestPractices: [
        "عيّن معرفاً فريداً ثابتاً (id: crypto.randomUUID()) لكل مهمة فور إنشائها.",
        "وفّر شريط تقدم يوضح نسبة المهام المكتملة لتحفيز المستخدم.",
        "قسّم المهام منطقياً بحسب الأولوية أو الفئة لسهولة الفرز.",
        "احرص على تنظيف وتطهير نصوص الإدخال لمنع المشاكل البصرية."
      ],
      visualInfographic: {
        title: "هندسة متطلبات تطبيق قائمة المهام",
        description: "الخصائص الوظيفية الست لقائمة المهام الإنتاجية",
        visualSteps: [
          "الإضافة والتحقق ➕ (التحقق من صحة النص وتوليد معرف فريد id)",
          "تبديل الإنجاز ✓ (تحديث حالة completed مع إشارات بصرية دلالية)",
          "التعديل المباشر ✏️ (Inline Editing لتحديث النص دون حذف)",
          "التصفية والبحث 🔍 (تصفية حسب الحالة وبحث فوري بالكلمات)",
          "الحفظ الدائم 💾 (مزامنة فورية مع LocalStorage في المتصفح)",
          "إمكانية الوصول ♿ (دعم قارئات الشاشة والتحكم الكامل بالأسهم)"
        ]
      }
    },
    {
      id: "31.2.b",
      title: "تصميم هيكل البيانات (Data Model & Schema Design)",
      englishTerm: {
        term: "Data Model & Schema Design",
        pronunciation: "داتا موديل آند سكيما ديزاين",
        meaning: "تصميم بنية كائن المهمة الصارمة ونماذج التحقق"
      },
      description: "التصميم السليم لهيكل البيانات هو العمود الفقري لنجاح التطبيق واستقراره على المدى الطويل. يجب ألا تقتصر بنية المهمة على مصفوفة نصوص بسيطة (مثل ['مهمة 1', 'مهمة 2'])، بل يجب تصميم كائن مهمة غني ومنظم (Task Object) يضم: 1) معرفاً فريداً غير قابل للتكرار (id: string)؛ 2) نص المهمة المنظف (title: string)؛ 3) حالة الإنجاز المنطقية (completed: boolean)؛ 4) تاريخ ووقت الإنشاء (createdAt: ISO String) لحساب الأقدمية؛ 5) مستوى الأولوية (priority: 'low' | 'medium' | 'high')؛ 6) وسوم التصنيف الاختيارية (tags: string[]). كما يفضل استخدام مكتبة Zod لتعريف مخطط التحقق الصارم وحماية التطبيق من أي بيانات تالفة قادمة من التخزين المحلي.",
      realWorldAnalogy: "يشبه تصميم هيكل البيانات استمارة بيانات المريض في المستشفيات؛ لا يكتفي الطبيب بكتابة اسم المريض فقط على قصاصة ورق؛ بل يملأ استمارة قياسية تضم الرقم القومي، فصيلة الدم، تاريخ الدخول، وسجل الحساسية الدوائية لضمان العلاج السليم والدقيق.",
      whyItMatters: "يمنع التصميم المتقن لهيكل البيانات الحاجة لإعادة كتابة الكود عند إضافة ميزات جديدة لاحقاً (مثل الترتيب حسب التاريخ، أو التصفية حسب الأولوية)، ويضمن سهولة مزامنة البيانات مع قواعد البيانات السحابية مستقبلاً.",
      syntax: "// مخطط Zod للتحقق من كائن المهمة:\nimport { z } from 'zod';\nexport const TaskSchema = z.object({\n  id: z.string().uuid(),\n  title: z.string().min(1).max(200),\n  completed: z.boolean().default(false),\n  createdAt: z.string().datetime()\n});",
      simpleExample: `// تعريف واستعراض كائن المهمة المنظم في React
import React from 'react';

// نموذج كائن مهمة معياري
const sampleTask = {
  id: 'tsk_101',
  title: 'إتقان هياكل البيانات في React',
  completed: false,
  createdAt: '2026-10-30T10:00:00Z',
  priority: 'high'
};

export function TaskModelDemo() {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs text-xs font-mono">
      <div className="flex justify-between items-center text-indigo-400 font-bold mb-2">
        <span>هيكل كائن المهمة</span>
        <span>{sampleTask.id}</span>
      </div>
      <p className="text-slate-200 mb-1">{sampleTask.title}</p>
      <div className="text-[10px] text-slate-500 space-y-0.5">
        <div>الحالة: {sampleTask.completed ? 'مكتملة' : 'قيد الانتظار'}</div>
        <div>الأولوية: {sampleTask.priority}</div>
      </div>
    </div>
  );
}`,
      advancedExample: `// نظام إدارة المهام المبني على فئة معيارية ومحرك توليد نماذج البيانات (Task Factory)
import React, { useState } from 'react';

// فئة بناء وتوليد كائنات المهام النظيفة (Task Factory)
export class TaskFactory {
  static create(title, priority = 'medium') {
    return {
      id: crypto.randomUUID ? crypto.randomUUID() : 'task_' + Date.now(),
      title: title.trim(),
      completed: false,
      priority: priority,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }

  static toggle(task) {
    return {
      ...task,
      completed: !task.completed,
      updatedAt: new Date().toISOString()
    };
  }
}

// مكون تجريبي لاختبار مولد المهام
export function TaskSchemaStudio() {
  const [tasks, setTasks] = useState([
    TaskFactory.create('تصميم واجهات المستخدم الحديثة', 'high')
  ]);

  const addNewTask = () => {
    const newTask = TaskFactory.create(\`مهمة جديدة رقم \${tasks.length + 1}\`, 'medium');
    setTasks(prev => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? TaskFactory.toggle(t) : t));
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
        <h4 className="font-bold text-xs text-slate-300">مصنع نماذج البيانات (Task Factory)</h4>
        <button 
          onClick={addNewTask}
          className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-xs font-bold transition"
        >
          + توليد مهمة
        </button>
      </div>

      <div className="space-y-2">
        {tasks.map(t => (
          <div 
            key={t.id}
            onClick={() => toggleTask(t.id)}
            className="p-3 bg-slate-950 rounded-xl border border-slate-800 cursor-pointer hover:border-slate-700 transition text-xs"
          >
            <div className="flex justify-between items-center mb-1">
              <span className={t.completed ? 'line-through text-slate-500' : 'text-slate-200 font-bold'}>
                {t.title}
              </span>
              <span className={\`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold \${
                t.priority === 'high' ? 'bg-rose-500/20 text-rose-300' : 'bg-blue-500/20 text-blue-300'
              }\`}>
                {t.priority}
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono block">
              معرف فريد: {t.id.slice(0, 13)}...
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا النموذج استخدام نمط المصنع (TaskFactory) لإنشاء وتعديل كائنات المهام بأسلوب كبسلي منظم؛ حيث يضمن توليد معرفات UUID فريدة، وتتبع تواريخ الإنشاء والتعديل، وضبط الأولويات دون كتابة كود مكرر في المكونات.",
      commonMistakes: [
        {
          mistake: "تخزين البيانات في مصفوفة نصوص بسيطة ['مهمة 1', 'مهمة 2'].",
          why: "الاعتماد على النصوص المجردة يجعل من المستحيل تتبع حالة الاكتمال أو تعديل الاسم أو فرز المهام حسب التاريخ.",
          fix: "استخدم دائماً كائنات مهام كاملة تحتوي على id و title و completed."
        },
        {
          mistake: "تعديل خصائص كائن المهمة مباشرة مثل task.completed = true دون إنشاء كائن جديد.",
          why: "التعديل المباشر يكسر مبدأ عدم قابلية التعديل (Immutability) في React ويمنع إعادة التصيير التلقائي للشاشة.",
          fix: "استخدم دائماً معامل الانتشار لإنشاء كائن جديد: { ...task, completed: !task.completed }."
        }
      ],
      bestPractices: [
        "سجل تاريخ إنشاء المهمة بصيغة ISO String لتسهيل حفظها وقراءتها في أي بيئة.",
        "استخدم فئات أو دوال مساعدة لإنشاء وتحديث كائنات المهام للحفاظ على الاتساق المعماري.",
        "حدّد مستويات أولوية واضحة ومحدودة (مثل: 'low' | 'medium' | 'high').",
        "احرص على ألا تكون حمولة كائن المهمة ضخمة بلا داعٍ لتسريع القراءة من الذاكرة."
      ],
      visualInfographic: {
        title: "تشريح هيكل كائن المهمة المعياري (Task Schema Anatomy)",
        description: "الحقول الأساسية لبناء كائن مهمة متين وقابل للتوسع",
        visualSteps: [
          "المعرف الفريد id 🆔 (UUID غير مكرر لضمان ثبات مفتاح الـ key)",
          "العنوان النظيف title 📝 (نص المهمة المنظف من المسافات الزائدة)",
          "حالة الاكتمال completed ⚖️ (قيمة منطقية تحدد الإنجاز)",
          "درجة الأولوية priority 🚦 (low / medium / high لتسهيل الفرز)",
          "الطابع الزمني createdAt ⏱️ (تاريخ التدوين بصيغة ISO القياسية)"
        ]
      }
    },
    {
      id: "31.2.c",
      title: "إضافة وحذف المهام (Create & Delete Operations)",
      englishTerm: {
        term: "Create & Delete Operations",
        pronunciation: "كرييت آند ديليت أوبريشنز",
        meaning: "عمليات إضافة المهام الجديدة وحذف المهام بأمان وسلاسة"
      },
      description: "عمليتا الإضافة والحذف هما الركنان الأساسيان لدورة حياة بيانات المهام. تتطلب عملية الإضافة الناجحة: التقاط نص الإدخال، تنظيف المسافات الزائدة (trimming)، التحقق من عدم فراغ الحقل، توليد كائن المهمة بهيكل سليم، وإضافته في بداية المصفوفة [newTask, ...prev] ليظهر في أعلى القائمة للمستخدم فوراً، ثم تصفير حقل الإدخال وإعادة التركيز عليه. في المقابل، تتطلب عملية الحذف استخدام دالة filter النقية لاستبعاد المهمة المحددة بناءً على معرفها الفريد id: prev.filter(t => t.id !== targetId)، مع إمكانية إضافة تأكيد حذف (Confirmation) أو زر تراجع سريع (Undo Toast) لمنع الحذف العرضي غير المقصود.",
      realWorldAnalogy: "يشبه إضافة وحذف المهام استخدام لوحة الملاحظات الورقية اللاصقة (Sticky Notes)؛ عندما تخطر ببالك فكرة، تكتبها على ورقة جديدة وتلصقها في أعلى اللوحة أمام عينيك؛ وإذا انتهت المهمة أو أصبحت غير مهمة، تنزع الورقة وتلقيها في سلة المهملات بهدوء.",
      whyItMatters: "تعد عمليات الإضافة والحذف التدريب العملي المباشر على معالجة النماذج وتحديث المصفوفات دون تعديل الأصل (Immutable Array Updates)؛ وهو التكنيك الأساسي الذي يحتاجه مطور React يومياً في أي تطبيق تجاري.",
      syntax: "// الإضافة النظيفة:\nsetTasks(prev => [newTask, ...prev]);\n// الحذف النظيف:\nsetTasks(prev => prev.filter(task => task.id !== targetId));",
      simpleExample: `// تطبيق عمليتي الإضافة والحذف بأمان تام في React
import React, { useState } from 'react';

export function AddDeleteTodoDemo() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'مهمة تجريبية أولى' }
  ]);
  const [inputVal, setInputVal] = useState('');

  // دالة الإضافة
  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setTasks(prev => [{ id: Date.now().toString(), title: inputVal.trim() }, ...prev]);
    setInputVal('');
  };

  // دالة الحذف
  const handleDelete = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs text-xs">
      <form onSubmit={handleAdd} className="flex gap-1 mb-3">
        <input 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="أضف مهمة جديدة..."
          className="flex-1 p-1.5 bg-slate-950 border border-slate-700 rounded text-white"
        />
        <button type="submit" className="px-3 bg-indigo-600 rounded font-bold">+</button>
      </form>

      <div className="space-y-1.5">
        {tasks.map(t => (
          <div key={t.id} className="p-2 bg-slate-950 rounded flex justify-between items-center">
            <span>{t.title}</span>
            <button onClick={() => handleDelete(t.id)} className="text-rose-400 hover:text-rose-300 font-bold">✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      advancedExample: `// نظام متقدم للإضافة مع التحقق من التكرار والحذف مع ميزة استرجاع المحذوف (Undo Delete Toast)
import React, { useState } from 'react';

export function AdvancedAddDeleteStudio() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'مراجعة أداء التطبيق' },
    { id: '2', title: 'تجهيز ملفات العرض التقديمي' }
  ]);
  const [input, setInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [deletedTaskBackup, setDeletedTaskBackup] = useState(null);

  // إضافة مع التحقق الصارم ومنع التكرار
  const handleAddTask = (e) => {
    e.preventDefault();
    const cleanText = input.trim();
    if (!cleanText) {
      setErrorMsg('لا يمكن إضافة مهمة فارغة.');
      return;
    }
    // فحص هل المهمة مكررة
    const isDuplicate = tasks.some(t => t.title.toLowerCase() === cleanText.toLowerCase());
    if (isDuplicate) {
      setErrorMsg('هذه المهمة موجودة بالفعل في القائمة.');
      return;
    }

    setTasks(prev => [{ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), title: cleanText }, ...prev]);
    setInput('');
    setErrorMsg('');
  };

  // حذف المهمة مع الاحتفاظ بنسخة احتياطية للتراجع
  const handleDeleteTask = (task) => {
    setDeletedTaskBackup(task);
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  // استرجاع المهمة المحذوفة
  const handleUndoDelete = () => {
    if (deletedTaskBackup) {
      setTasks(prev => [deletedTaskBackup, ...prev]);
      setDeletedTaskBackup(null);
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto shadow-2xl text-white">
      <h4 className="font-bold text-sm text-slate-200 mb-3">إدارة المهام مع ميزة التراجع عن الحذف</h4>

      <form onSubmit={handleAddTask} className="flex gap-2 mb-2">
        <input 
          type="text"
          value={input}
          onChange={(e) => { setInput(e.target.value); setErrorMsg(''); }}
          placeholder="اكتب المهمة الجديدة..."
          className="flex-1 p-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
        />
        <button type="submit" className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl transition">
          إضافة
        </button>
      </form>

      {errorMsg && <p className="text-[11px] text-rose-400 mb-3">{errorMsg}</p>}

      {/* قائمة المهام */}
      <div className="space-y-2 mt-3 mb-4">
        {tasks.length === 0 ? (
          <p className="text-center text-xs text-slate-500 py-3">لا توجد مهام حالياً. أضف مهمتك الأولى!</p>
        ) : (
          tasks.map(t => (
            <div key={t.id} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-200">{t.title}</span>
              <button 
                onClick={() => handleDeleteTask(t)}
                className="text-slate-500 hover:text-rose-400 text-sm font-bold transition px-1"
                title="حذف المهمة"
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>

      {/* شريط التراجع عن الحذف (Undo Toast) */}
      {deletedTaskBackup && (
        <div className="p-2.5 bg-indigo-950/60 border border-indigo-500/40 rounded-xl text-xs flex justify-between items-center">
          <span className="text-indigo-200 text-[11px] truncate max-w-[180px]">
            تم حذف "{deletedTaskBackup.title}"
          </span>
          <button 
            onClick={handleUndoDelete}
            className="text-xs font-bold text-cyan-400 hover:underline font-mono"
          >
            تراجع ↩
          </button>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية إدارة الإضافة والحذف مع معالجة الأخطاء الواقعية؛ حيث يمنع إضافة النصوص المكررة، ويوفر شريط تنبيه تفاعلي (Undo Toast) يسمح للمستخدم باسترجاع المهمة المحذوفة فوراً بنقرة واحدة في حال حذفها بالخطأ.",
      commonMistakes: [
        {
          mistake: "استخدام دالة splice لتعديل مصفوفة المهام مباشرة: tasks.splice(index, 1).",
          why: "دالة splice تعدل في المصفوفة الأصلية مباشرة (Mutation) وتمنع React من اكتشاف التغيير وإعادة التصيير.",
          fix: "استخدم دائماً دالة filter النقية لإنشاء مصفوفة جديدة ومستبعد منها العنصر المطلوب."
        },
        {
          mistake: "إهمال إعادة تعيين حقل الإدخال setInput('') بعد نجاح إضافة المهمة.",
          why: "بقاء النص القديم في الحقل يجبر المستخدم على مسحه يدوياً في كل مرة ويسبب تجربة استخدام مزعجة.",
          fix: "صفّر قيمة الحقل فوراً بعد إضافة المهمة: setInput('') وأعد التركيز على الحقل."
        }
      ],
      bestPractices: [
        "أضف المهمة الجديدة في بداية المصفوفة [newTask, ...prev] لتظهر في الأعلى فوراً دون الحاجة للتمرير للأسفل.",
        "وفّر ميزة التراجع السريع (Undo Toast) لتخفيف قلق المستخدم من الحذف غير المقصود.",
        "تحقق من عدم تكرار المهام المتطابقة لتفادي الارتباك في القائمة.",
        "اضبط حقل الإدخال داخل وسم <form> لتمكين المستخدم من الإضافة بالضغط على مفتاح Enter."
      ],
      visualInfographic: {
        title: "دورة حياة إضافة وحذف المهام",
        description: "كيف تتم معالجة البيانات غير القابلة للتعديل بأسلوب نقي",
        visualSteps: [
          "إدخال النص والتحقق ⌨️ (تنظيف المسافات وفحص منع التكرار)",
          "توليد كائن المهمة 📄 (إنشاء الكائن بهيكل معرف وتاريخ محدد)",
          "التحديث غير القابل للتعديل ➕ (إدراج المهمة في قمة المصفوفة [new, ...old])",
          "الحذف الآمن عبر filter 🗑️ (استبعاد المهمة بواسطة id وحفظ نسخة تراجع)",
          "شريط استرجاع المحذوف ↩️ (إتاحة فرصة التراجع الفوري للمستخدم)"
        ]
      }
    },
    {
      id: "31.2.d",
      title: "تعديل المهام وتحديد المكتمل (Update & Toggle Complete)",
      englishTerm: {
        term: "Update & Toggle Operations",
        pronunciation: "أبديت آند توغل أوبريشنز",
        meaning: "تبديل حالة الإنجاز والتعديل المباشر للنص في مكانه"
      },
      description: "تمثل عمليات التحديث (Update) قلب التفاعل الحيوي لتطبيق المهام. تشمل هذه العمليات جانبين رئيسيين: 1) تبديل حالة الاكتمال (Toggle Complete): حيث يؤدي النقر على مربع الاختيار (Checkbox) إلى قلب قيمة completed: !task.completed، مع تطبيق تأثير الشطب النصي (line-through) وتعتيم اللون لمنح المستخدم شعوراً فورياً بالإنجاز؛ 2) التعديل المباشر للنص (Inline Editing): حيث يتيح النقر المزدوج (Double Click) على نص المهمة أو الضغط على زر التعديل تحويل النص إلى حقل إدخال نشط في مكانه، مما يسمح للمستخدم بتصحيح الكلمات والضغط على Enter أو النقر خارج الحقل (onBlur) لحفظ التعديل الجديد دون تعقيد.",
      realWorldAnalogy: "يشبه التعديل المباشر وتبديل الإنجاز شطب المهمة بالقلم الرصاص على المفكرة الورقية مع إمكانية استخدام الممحاة لتعديل صياغة العبارة إذا طرأ تغيير على تفاصيل الموعد.",
      whyItMatters: "بدون ميزة التعديل المباشر، يضطر المستخدم لحذف المهمة وإعادة كتابتها من الصفر إذا ارتكب خطأ إملائياً بسيطاً، مما يقلل من جاذبية التطبيق وسهولة استخدامه اليومي.",
      syntax: "// تبديل حالة الإنجاز النظيف عبر map:\nsetTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));",
      simpleExample: `// تطبيق تبديل حالة الإنجاز مع تأثير الشطب البصري في React
import React, { useState } from 'react';

export function ToggleTodoDemo() {
  const [task, setTask] = useState({ id: 1, title: 'تعلم خطافات React', completed: false });

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs text-xs">
      <div 
        onClick={() => setTask(t => ({ ...t, completed: !t.completed }))}
        className="flex items-center gap-2 cursor-pointer p-2 bg-slate-950 rounded"
      >
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => {}} 
          className="accent-emerald-500 rounded"
        />
        <span className={task.completed ? 'line-through text-slate-500' : 'text-slate-200'}>
          {task.title}
        </span>
      </div>
    </div>
  );
}`,
      advancedExample: `// نظام متكامل للتعديل المباشر في المكان (Inline Editing on Double Click) وتبديل الإنجاز
import React, { useState } from 'react';

export function InlineEditTodoStudio() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'شراء حاسوب محمول جديد', completed: false },
    { id: '2', title: 'مراجعة فواتير السحابة الشهرية', completed: true }
  ]);

  // تتبع المهمة الجاري تعديلها حالياً
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // بدء وضع التعديل
  const startEditing = (task) => {
    setEditingId(task.id);
    setEditText(task.title);
  };

  // حفظ التعديل
  const saveEditing = (id) => {
    if (!editText.trim()) return;
    setTasks(prev => prev.map(t => t.id === id ? { ...t, title: editText.trim() } : t));
    setEditingId(null);
  };

  // تبديل حالة الاكتمال
  const toggleComplete = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto shadow-2xl text-white">
      <h4 className="font-bold text-xs text-slate-300 mb-1">التعديل المباشر (انقر مرتين للتعديل)</h4>
      <p className="text-[11px] text-slate-500 mb-3">Double Click to Edit | Enter to Save</p>

      <div className="space-y-2">
        {tasks.map(t => (
          <div key={t.id} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs">
            {editingId === t.id ? (
              // حقل التعديل المباشر النشط
              <div className="flex gap-1">
                <input 
                  type="text"
                  value={editText}
                  autoFocus
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && saveEditing(t.id)}
                  onBlur={() => saveEditing(t.id)}
                  className="flex-1 p-1 bg-slate-900 border border-indigo-500 rounded text-xs text-white focus:outline-none"
                />
                <button 
                  onClick={() => saveEditing(t.id)}
                  className="px-2 py-0.5 bg-emerald-600 rounded text-[11px] font-bold"
                >
                  حفظ
                </button>
              </div>
            ) : (
              // عرض المهمة الطبيعي مع استماع النقر المزدوج
              <div className="flex items-center justify-between">
                <div 
                  onClick={() => toggleComplete(t.id)}
                  onDoubleClick={() => startEditing(t)}
                  className="flex items-center gap-2 cursor-pointer flex-1 select-none"
                >
                  <input 
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => {}}
                    className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                  />
                  <span className={t.completed ? 'line-through text-slate-500' : 'text-slate-200'}>
                    {t.title}
                  </span>
                </div>
                <button 
                  onClick={() => startEditing(t)}
                  className="text-slate-500 hover:text-indigo-400 text-xs ml-2"
                  title="تعديل"
                >
                  ✏️
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية بناء ميزة التعديل المباشر في المكان (Inline Editing)؛ حيث يتحول النص تلقائياً إلى حقل إدخال عند النقر المزدوج مع تفعيل ميزة autoFocus، ويتم حفظ التعديل إما بالضغط على زر Enter أو عند فقدان التركيز (onBlur) لراحة المستخدم القصوى.",
      commonMistakes: [
        {
          mistake: "نسيان إلغاء وضع التعديل إذا قام المستخدم بمسح النص بالكامل والضغط على Enter.",
          why: "هذا قد يؤدي لحفظ مهمة فارغة بدون عنوان.",
          fix: "تحقق دائماً من الشرط: if (!editText.trim()) return واحتفظ بالنص القديم إذا ترك المستخدم الحقل فارغاً."
        },
        {
          mistake: "تفعيل وضع التعديل لكافة المهام في آن واحد بسبب استخدام متغير حالة منطقي بسيط بدلاً من معرف المهمة.",
          why: "إذا استخدمت isEditing: true فستتحول جميع المهام في الشاشة إلى حقول إدخال في نفس اللحظة!",
          fix: "خزن معرف المهمة الجاري تعديلها حصراً: const [editingId, setEditingId] = useState(null)."
        }
      ],
      bestPractices: [
        "استخدم خاصية autoFocus على حقل التعديل ليتمكن المستخدم من الكتابة فوراً دون الحاجة للنقر مجدداً.",
        "ادعم حفظ التعديل عند الضغط على Enter والإلغاء عند الضغط على مفتاح Escape.",
        "أضف فئة select-none للنص لمنع تحديده بالخطأ عند النقر المزدوج السريع.",
        "طبق تأثيرات الشطب والتعتيم البصري بنعومة باستخدام فئات الانتقال transition-all."
      ],
      visualInfographic: {
        title: "آلية التعديل المباشر وتبديل الإنجاز",
        description: "كيفية تحديث عناصر المصفوفة بدقة في واجهة React",
        visualSteps: [
          "نقر مربع الاختيار 🖱️ (استدعاء toggleComplete وقلب قيمة completed)",
          "تأثير الشطب الفوري ✏️ (تطبيق فئة line-through وتعتيم النص)",
          "النقر المزدوج لبدء التعديل 📝 (تعيين editingId وتفعيل autoFocus)",
          "كتابة الصياغة الجديدة ⌨️ (تعديل النص في الحقل النشط)",
          "الحفظ التلقائي عند الخروج 💾 (حفظ التعديل بـ Enter أو حدث onBlur)"
        ]
      }
    },
    {
      id: "31.2.e",
      title: "تصفية المهام والبحث اللحظي (Filter & Realtime Search)",
      englishTerm: {
        term: "Task Filtering & Realtime Search",
        pronunciation: "تاسك فيلترينغ آند ريل تايم سيرتش",
        meaning: "تصفية المهام حسب الحالة والبحث الفوري بالاسم"
      },
      description: "مع تزايد عدد المهام إلى العشرات، يصبح البحث والتصفية أمراً حيوياً لتنظيم العمل. يتم تطبيق هذه الميزة عبر حساب مشتق ونقي (Derived State) باستخدام دالة useMemo؛ بحيث يتم استخراج المهام المعروضة (filteredTasks) بناءً على معيارين متزامنين: 1) نوع التصفية المختار (Tab: 'all' | 'active' | 'completed')؛ 2) كلمة البحث المكتوبة في حقل البحث اللحظي (searchQuery) مع تحويل النصوص لحروف موحدة (toLowerCase). الأسلوب الهندسي الأهم هنا هو 'عدم إنشاء حالة منفصلة للمهام المفلترة'؛ بل اشتقاقها حسابياً مباشرة من مصفوفة المهام الأصلية، مما يمنع حدوث أي تناقض في البيانات.",
      realWorldAnalogy: "يشبه الفلتر والبحث في المهام استخدام عدسة مكبرة متخصصة؛ فالأوراق كلها موجودة على الطاولة، ولكن العدسة الخضراء تريك فقط الأوراق المكتملة، وإذا وضعت كلمة 'اجتماع' أمام العدسة، تبرز لك فقط الأوراق التي تحتوي على تلك الكلمة دون إتلاف أو تغيير ترتيب باقي الأوراق.",
      whyItMatters: "يحمي حساب المهام المشتقة عبر useMemo التطبيق من مشكلات مزامنة الحالات المعقدة؛ فإذا تم حذف أو إكمال مهمة أثناء البحث، تتحدث النتائج فوراً وبسلاسة تامة دون كتابة أي كود إضافي.",
      syntax: "// الاشتقاق الحسابي النقي للمهام المصفاة:\nconst filteredTasks = useMemo(() => {\n  return tasks\n    .filter(t => filter === 'all' || (filter === 'active' ? !t.completed : t.completed))\n    .filter(t => t.title.toLowerCase().includes(search.toLowerCase()));\n}, [tasks, filter, search]);",
      simpleExample: `// استعراض تصفية المهام حسب الحالة في React
import React, { useState } from 'react';

export function SimpleFilterDemo() {
  const [tasks] = useState([
    { id: 1, title: 'تصميم الشعار', done: true },
    { id: 2, title: 'برمجة الواجهة', done: false },
    { id: 3, title: 'إطلاق التطبيق', done: false }
  ]);
  const [tab, setTab] = useState('all');

  const visible = tasks.filter(t => tab === 'all' ? true : tab === 'done' ? t.done : !t.done);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs text-xs">
      <div className="flex gap-1 mb-3">
        {['all', 'active', 'done'].map(f => (
          <button 
            key={f} 
            onClick={() => setTab(f)}
            className={\`flex-1 py-1 rounded text-[11px] \${tab === f ? 'bg-indigo-600 font-bold' : 'bg-slate-800 text-slate-400'}\`}
          >
            {f === 'all' ? 'الكل' : f === 'active' ? 'النشطة' : 'المكتملة'}
          </button>
        ))}
      </div>
      <div className="space-y-1">
        {visible.map(t => (
          <div key={t.id} className={t.done ? 'line-through text-slate-500' : 'text-slate-200'}>
            • {t.title}
          </div>
        ))}
      </div>
    </div>
  );
}`,
      advancedExample: `// استوديو تصفية وبحث متكامل مع تحسين الأداء بـ useMemo وعرض رسائل الحالات الفارغة
import React, { useState, useMemo } from 'react';

export function FilterAndSearchStudio() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'تعلم تقنيات Next.js 14', completed: true },
    { id: '2', title: 'بناء مشروع التخرج النهائي', completed: false },
    { id: '3', title: 'مراجعة مفاهيم Clean Architecture', completed: false },
    { id: '4', title: 'تحسين سرعة Core Web Vitals', completed: true }
  ]);

  const [filterType, setFilterType] = useState('all'); // 'all' | 'active' | 'completed'
  const [searchTerm, setSearchTerm] = useState('');

  // الاشتقاق الحسابي النقي المحسن عبر useMemo
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      // تطبيق شرط التبويب
      const matchesTab = 
        filterType === 'all' ? true :
        filterType === 'active' ? !task.completed :
        task.completed;

      // تطبيق شرط البحث
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.trim().toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [tasks, filterType, searchTerm]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto shadow-2xl text-white">
      <h4 className="font-bold text-xs text-slate-300 mb-3">البحث والتصفية اللحظية (Derived State)</h4>

      {/* حقل البحث اللحظي */}
      <input 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="ابحث عن مهمة بالاسم..."
        className="w-full p-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 mb-3"
      />

      {/* أزرار التبويبات الثلاثة */}
      <div className="flex gap-1.5 mb-4">
        {[
          { id: 'all', label: 'الكل' },
          { id: 'active', label: 'النشطة' },
          { id: 'completed', label: 'المكتملة' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterType(tab.id)}
            className={\`flex-1 py-1 rounded-lg text-xs font-bold transition \${
              filterType === tab.id ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
            }\`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* قائمة النتائج المشتقة */}
      <div className="space-y-1.5 min-h-[120px]">
        {filteredTasks.length === 0 ? (
          <div className="p-6 text-center text-xs text-slate-500 bg-slate-950 rounded-xl border border-slate-800">
            🔍 لا توجد نتائج مطابقة لمعايير البحث.
          </div>
        ) : (
          filteredTasks.map((t) => (
            <div key={t.id} className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-xs flex justify-between items-center">
              <span className={t.completed ? 'line-through text-slate-500' : 'text-slate-200'}>
                {t.title}
              </span>
              <span className={\`text-[9px] px-1.5 py-0.5 rounded font-mono \${t.completed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}\`}>
                {t.completed ? 'منجز' : 'نشط'}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية استخدام دالة useMemo لاشتقاق المهام المعروضة حسابياً بناءً على كلمة البحث ونوع التبويب المختار معاً؛ مما يضمن أداءً فائقاً وتحديثاً لحظياً دون الحاجة لتخزين مصفوفة فلترة مكررة في الذاكرة.",
      commonMistakes: [
        {
          mistake: "إنشاء مصفوفة حالة جديدة منفصلة للمهام المفلترة مثل const [filtered, setFiltered] = useState([]).",
          why: "إنشاء حالة مكررة يجبرك على تحديث مصفوفتين في كل عملية إضافة أو حذف، وهو ما يؤدي دائماً إلى أخطاء عدم تطابق وتناقض البيانات.",
          fix: "لا تخزن ما يمكن اشتقاقه برمجياً؛ احسب القائمة المصفاة في متغير عادي أو باستخدام useMemo."
        },
        {
          mistake: "تجاهل استخدام toLowerCase() أثناء مقارنة نص البحث مع عنوان المهمة.",
          why: "المقارنة الحساسة لحالة الأحرف تجعل البحث يفشل إذا كتب المستخدم بحروف كبيرة أو صغيرة في الإنجليزية.",
          fix: "وحّد دائماً النصوص باستخدام toLowerCase() قبل فحص includes()."
        }
      ],
      bestPractices: [
        "اشتق المهام المفلترة برمجياً (Derived State) ولا تضعها في useState مستقل أبداً.",
        "استخدم useMemo لحفظ نتيجة الفلترة إذا كانت قائمة المهام تحتوي على مئات العناصر لتجنب تكرار التصفية في كل تصيير.",
        "اعرض واجهة بديلة واضحة وجذابة (Empty State) عند عدم وجود نتائج مطابقة للبحث.",
        "وفّر زر مسح سريع لحقل البحث لإعادة ضبط القائمة فوراً بنقرة واحدة."
      ],
      visualInfographic: {
        title: "منظومة الاشتقاق الحسابي للتصفية والبحث (Derived State Flow)",
        description: "كيف يتم استخراج النتائج من المصدر الوحيد للحقيقة",
        visualSteps: [
          "المصدر الوحيد للحقيقة 📦 (مصفوفة المهام الأصلية tasks في الحالة المركزية)",
          "مدخلات التصفية والبحث 🎛️ (نوع التبويب tab + كلمة البحث searchTerm)",
          "المعالجة الحسابية عبر useMemo 🧠 (تصفية متسلسلة ونقية دون تعديل الأصل)",
          "مصفوفة النتائج المشتقة 📄 (قائمة filteredTasks المعروضة فقط)",
          "تزامن واستقرار مطلق ⚡ (أي إضافة أو حذف ينعكس فوراً بلا تناقض)"
        ]
      }
    },
    {
      id: "31.2.f",
      title: "حفظ البيانات في Local Storage (Data Persistence & Hydration)",
      englishTerm: {
        term: "LocalStorage Persistence & Safe Hydration",
        pronunciation: "لوكال ستوريدج بيرسيستنس آند سيف هايدريشن",
        meaning: "حفظ واستعادة المهام من التخزين المحلي مع المعالجة الآمنة للأخطاء"
      },
      description: "بدون ميزة حفظ البيانات الدائم، يفقد تطبيق المهام قيمته الحقيقية بمجرد تحديث الصفحة أو إغلاق المتصفح. تتضمن معمارية الحفظ الدائم في LocalStorage: 1) استخدام مفتاح تخزين ثابت ومميز (مثل 'prod_tasks_v1')؛ 2) استعادة البيانات المخزنة بأمان عبر دالة التهيئة الكسولة useState(() => ...)؛ 3) إحاطة عمليات القراءة والكتابة والتحويل JSON.parse بكتل try/catch لحماية التطبيق من الانهيار إذا كانت البيانات التالفة أو إذا كان المتصفح يعمل في وضع التصفح الخاص المحظور؛ 4) الاستماع لحدث 'storage' على كائن window لمزامنة المهام بين التبويبات المتعددة المفتوحة لنفس الموقع في نفس اللحظة (Cross-tab Synchronization).",
      realWorldAnalogy: "يشبه حفظ المهام في LocalStorage وجود درج مكتبي مقفل بمفتاح خاص بك؛ في نهاية يوم العمل، تضع أوراقك في الدرج وتقفله؛ وفي صباح اليوم التالي تفتح الدرج لتجد كل ورقة في مكانها الصحيح تماماً كما تركتها أمس.",
      whyItMatters: "يحول الحفظ المحلي التطبيق إلى أداة إنتاجية يعتمد عليها المستخدم بثقة يومياً، ويضمن صمود التطبيق في بيئات العمل غير المتصلة بالإنترنت (Offline First).",
      syntax: "// القراءة الآمنة من LocalStorage:\nconst [tasks, setTasks] = useState(() => {\n  try {\n    const item = localStorage.getItem('my_tasks');\n    return item ? JSON.parse(item) : [];\n  } catch {\n    return [];\n  }\n});",
      simpleExample: `// استعراض الحفظ والاسترجاع الآمن لقائمة المهام في LocalStorage
import React, { useState, useEffect } from 'react';

export function PersistentTodoDemo() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('demo_todos_data');
      return saved ? JSON.parse(saved) : [{ id: 1, title: 'مهمة محفوظة سحابياً' }];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('demo_todos_data', JSON.stringify(tasks));
    } catch (e) {
      console.warn('تعذر الحفظ في LocalStorage:', e);
    }
  }, [tasks]);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs text-xs">
      <span className="text-[10px] text-emerald-400 font-mono block mb-2">LocalStorage Synced ✓</span>
      <div className="space-y-1">
        {tasks.map(t => (
          <div key={t.id} className="p-1 bg-slate-950 rounded">• {t.title}</div>
        ))}
      </div>
    </div>
  );
}`,
      advancedExample: `// خطاف مخصص متكامل لإدارة التخزين المحلي الآمن مع مزامنة التبويبات المتعددة (useLocalStorage)
import React, { useState, useEffect } from 'react';

// خطاف مخصص لإدارة أي قيمة في LocalStorage بأمان ومزامنة التبويبات
export function useLocalStorage(key, initialValue) {
  // القراءة الآمنة المبدئية
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(\`فشلت قراءة المفتاح \${key} من LocalStorage:\`, error);
      return initialValue;
    }
  });

  // الحفظ التلقائي عند تغير القيمة
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(\`فشل حفظ المفتاح \${key} في LocalStorage:\`, error);
    }
  }, [key, storedValue]);

  // الاستماع لحدث storage لمزامنة التعديلات عبر التبويبات المتعددة
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (err) {
          console.warn('تعذر تحليل بيانات المزامنة:', err);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setStoredValue];
}

// تطبيق قائمة المهام المستهلك للخطاف المخصص
export function LocalStorageStudio() {
  const [tasks, setTasks] = useLocalStorage('prod_tasks_v2', [
    { id: '1', title: 'مزامنة التخزين المحلي عبر Custom Hook' }
  ]);

  const addTask = () => {
    setTasks(prev => [{ id: Date.now().toString(), title: \`مهمة مضافة في \${new Date().toLocaleTimeString()}\` }, ...prev]);
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
        <h4 className="font-bold text-xs text-slate-300">التخزين الدائم (useLocalStorage)</h4>
        <span className="text-[10px] text-cyan-400 font-mono">Cross-Tab Ready</span>
      </div>

      <div className="flex gap-2 mb-3">
        <button onClick={addTask} className="flex-1 py-1.5 bg-indigo-600 rounded-lg text-xs font-bold transition">
          + إضافة مهمة
        </button>
        <button onClick={clearAll} className="px-3 py-1.5 bg-slate-800 hover:bg-rose-900/40 text-rose-300 rounded-lg text-xs font-bold transition">
          تفريغ
        </button>
      </div>

      <div className="space-y-1.5 max-h-48 overflow-y-auto">
        {tasks.map(t => (
          <div key={t.id} className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-xs">
            {t.title}
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال المعماري كيفية بناء خطاف مخصص useLocalStorage يعالج استثناءات المتصفح ويحمي التطبيق من الانهيار عند تلف البيانات، مع إضافة ميزة مزامنة التبويبات المتعددة عبر الاستماع لحدث window 'storage' لضمان اتساق البيانات عبر كافة نوافذ المستخدم.",
      commonMistakes: [
        {
          mistake: "استدعاء JSON.parse(localStorage.getItem('key')) بدون إحاطته بكتلة try/catch.",
          why: "إذا حدث خطأ في صيغة النص المخزن أو تم التلاعب به يدوياً، سينهار تطبيق React بالكامل عند محاولة التحليل.",
          fix: "أحط قراءة وتحليل JSON دائماً بكتلة try/catch ووفر قيمة افتراضية آمنة في حالة الفشل."
        },
        {
          mistake: "تخزين كميات هائلة من الصور والبيانات الثقيلة في LocalStorage.",
          why: "مساحة التخزين في LocalStorage محدودة بحوالي 5 ميجابايت فقط؛ وتجاوزها يؤدي لظهور خطأ QuotaExceededError.",
          fix: "استخدم LocalStorage فقط للبيانات النصية والإعدادات، واستخدم IndexedDB للبيانات الضخمة والملفات."
        }
      ],
      bestPractices: [
        "استخدم دالة التهيئة الكسولة داخل useState لتفادي قراءة التخزين المحلي مع كل تصيير.",
        "أضف رقم إصدار لمفتاح التخزين (مثل 'tasks_v2') لتسهيل ترحيل البيانات عند تغيير بنية الكائن مستقبلاً.",
        "استمع لحدث 'storage' لتحديث الواجهة فوراً إذا قام المستخدم بتعديل المهام في تبويب آخر لنفس الموقع.",
        "احرص على تنظيف المهام القديمة أو توفير خيار 'مسح البيانات' للمستخدم للتحكم في خصوصيته."
      ],
      visualInfographic: {
        title: "دورة حياة التخزين الدائم والمزامنة (LocalStorage Flow)",
        description: "كيف يتم حفظ واستعادة المهام بأمان ومزامنتها عبر التبويبات",
        visualSteps: [
          "التهيئة الكسولة الآمنة 💾 (قراءة وتحليل JSON داخل كتلة try/catch)",
          "تعديل الحالة في الواجهة ⚡ (المستخدم يضيف أو يعدل أو يحذف مهمة)",
          "المزامنة التلقائية 🔄 (useEffect يحفظ الكائن المحدث كسلسلة نصية)",
          "بث حدث التخزين المتعدد 🌐 (حدث window storage يخبر باقي التبويبات المفتوحة)",
          "استمرار البيانات الدائم 🛡️ (المهام تظل محفوظة حتى بعد إغلاق المتصفح)"
        ]
      }
    },
    {
      id: "31.2.g",
      title: "تحسين تجربة المستخدم وإمكانية الوصول (UX Polish & Accessibility)",
      englishTerm: {
        term: "UX Polish & Accessibility (WCAG 2.1 AA)",
        pronunciation: "يو إكس بوليش آند أكسيسبيليتي",
        meaning: "التحسينات الختامية لتجربة الاستخدام ومعايير الوصولية للمكفوفين"
      },
      description: "اللمسات الأخيرة (UX Polish) هي ما يحول تطبيق المهام إلى منتج منافس للتطبيقات العالمية مثل Todoist وTickTick. تشمل هذه التحسينات: 1) شريط إحصائي تفاعلي يوضح عدد المهام المتبقية ونسبة الإنجاز؛ 2) زر تنظيف وحذف كافة المهام المكتملة دفعة واحدة (Clear Completed) مع تأكيد؛ 3) إمكانية التحكم الكامل بلوحة المفاتيح عبر استخدام وسوم القوائم الدلالية <ul> و <li> مع خاصية role='list'؛ 4) ربط حقول التحديد بنصوصها عبر وسوم <label> وسمات htmlFor و id؛ 5) وسم aria-live='polite' لإخطار قارئات الشاشة بنجاح إضافة أو حذف المهام؛ 6) دعم التمرير السلس والحركات المصغرة عند شطب المهام.",
      realWorldAnalogy: "يشبه التحسين النهائي للوصولية وتجربة الاستخدام تجهيز المباني الحديثة بمنحدرات للكراسي المتحركة ومصاعد ناطقة ومقابض أبواب مريحة؛ المبنى يظل جميلاً وعصرياً، ولكنه أصبح مرحباً ومريحاً للجميع دون استثناء لأي فئة من أفراد المجتمع.",
      whyItMatters: "تضمن هذه التحسينات أن التطبيق متوافق مع معايير الوصولية الدولية WCAG 2.1 AA، مما يمنع التمييز ضد ذوي الاحتياجات الخاصة، ويرفع جودة الكود البرمجي في ملف أعمالك (Portfolio) ليلفت انتباه مدراء التوظيف في كبرى الشركات العالمية.",
      syntax: "// ربط مربع الاختيار بنص المهمة لسهولة النقر وقارئات الشاشة:\n<label htmlFor={task.id} className=\"flex items-center gap-2 cursor-pointer\">\n  <input id={task.id} type=\"checkbox\" checked={task.completed} />\n  <span>{task.title}</span>\n</label>",
      simpleExample: `// استعراض ربط مربع الاختيار بالوسم الدلالي label لدعم سهولة النقر وقارئات الشاشة
import React, { useState } from 'react';

export function AccessibleTodoItemDemo() {
  const [done, setDone] = useState(false);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs text-xs">
      {/* استخدام label مع htmlFor يتيح النقر على النص لتبديل المربع */}
      <label htmlFor="chk-task-1" className="flex items-center gap-2 cursor-pointer select-none">
        <input 
          id="chk-task-1"
          type="checkbox" 
          checked={done} 
          onChange={(e) => setDone(e.target.checked)}
          className="w-4 h-4 accent-emerald-500 rounded"
        />
        <span className={done ? 'line-through text-slate-500' : 'text-slate-200'}>
          مهمة متوافقة مع معايير الوصولية
        </span>
      </label>
    </div>
  );
}`,
      advancedExample: `// تطبيق قائمة مهام متكامل مع تدقيق تجربة الاستخدام وزر تفريغ المكتمل والوصولية الشاملة
import React, { useState } from 'react';

export function PolishedAccessibleTodoApp() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'مراجعة معايير الوصولية WCAG', completed: true },
    { id: '2', title: 'إضافة تأثيرات الحركة للأزرار', completed: false }
  ]);
  const [input, setInput] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTask = { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), title: input.trim(), completed: false };
    setTasks(prev => [newTask, ...prev]);
    setInput('');
    setStatusMessage(\`تمت إضافة المهمة: \${newTask.title}\`);
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const clearCompleted = () => {
    const remaining = tasks.filter(t => !t.completed);
    setTasks(remaining);
    setStatusMessage('تم مسح جميع المهام المكتملة.');
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto shadow-2xl text-white">
      {/* إشعار قارئ الشاشة المخفي */}
      <div role="status" aria-live="polite" className="sr-only">
        {statusMessage}
      </div>

      <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-3">
        <h4 className="font-bold text-sm text-slate-200">المهام اليومية (a11y Polished)</h4>
        <span className="text-[10px] text-slate-400 font-mono">
          {tasks.length - completedCount} متبقية
        </span>
      </div>

      <form onSubmit={handleAdd} className="flex gap-2 mb-3">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اكتب مهمة جديدة..."
          aria-label="عنوان المهمة الجديدة"
          className="flex-1 p-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
        />
        <button type="submit" className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl transition">
          إضافة
        </button>
      </form>

      {/* قائمة المهام الدلالية */}
      <ul role="list" className="space-y-1.5 mb-4">
        {tasks.map((task) => (
          <li key={task.id} className="p-2 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
            <label htmlFor={\`task-\${task.id}\`} className="flex items-center gap-2 cursor-pointer flex-1 select-none">
              <input 
                id={\`task-\${task.id}\`}
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
              />
              <span className={task.completed ? 'line-through text-slate-500' : 'text-slate-200'}>
                {task.title}
              </span>
            </label>
          </li>
        ))}
      </ul>

      {/* أزرار الإجراءات السريعة في الأسفل */}
      {completedCount > 0 && (
        <div className="pt-2 border-t border-slate-800 flex justify-end">
          <button 
            onClick={clearCompleted}
            className="text-[11px] text-rose-400 hover:text-rose-300 font-medium transition"
          >
            مسح المكتمل ({completedCount})
          </button>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية تطبيق معايير الوصولية WCAG 2.1؛ حيث يستخدم وسوم القوائم الدلالية ul و li مع role='list'، ويربط حقول الإدخال بنصوصها عبر label و htmlFor، ويستخدم فئة sr-only مع aria-live لإشعار المكفوفين بكل عملية إضافة أو حذف تجري في الشاشة.",
      commonMistakes: [
        {
          mistake: "استخدام مربعات div مخصصة للنقر بدلاً من عنصر input الحقيقي ذي النوع checkbox.",
          why: "المربعات الوهمية لا تفهمها قارئات الشاشة ولا يمكن التنقل إليها بمفتاح Tab في لوحة المفاتيح.",
          fix: "استخدم دائماً عنصر <input type='checkbox'> ونسقه بـ CSS لضمان إمكانية الوصول التامة."
        },
        {
          mistake: "إهمال سمة aria-label في حقول الإدخال التي لا تمتلك عنصراً نصياً ظاهراً كعنوان.",
          why: "المستخدم الكفيف سيصل إلى حقل إدخال صامت ولا يعرف ما المطلوب كتابته فيه.",
          fix: "أضف دائماً aria-label='عنوان المهمة الجديدة' لحقول الإدخال بدون نصوص خارجية."
        }
      ],
      bestPractices: [
        "اربط دائماً مربعات الاختيار بنصوصها عبر وسم <label htmlFor={id}> لسهولة النقر على كامل المساحة.",
        "أضف عنصراً غير مرئي بفئة sr-only يحمل خاصية aria-live لإخطار قارئات الشاشة بالتحديثات اللحظية.",
        "وفّر زر 'مسح المكتمل' (Clear Completed) لتنظيف القائمة بسهولة دون حذف المهام واحدة تلو الأخرى.",
        "اختبر التطبيق كاملاً بالاعتماد على لوحة المفاتيح فقط (مفتاح Tab والمسافة Enter) للتأكد من سهولة التنقل."
      ],
      visualInfographic: {
        title: "قائمة معايير إمكانية الوصول لتطبيق المهام (WCAG Checklist)",
        description: "كيف تجعل تطبيق المهام متاحاً ومريحاً لجميع المستخدمين",
        visualSteps: [
          "العناصر الدلالية الأصلية 🏷️ (استخدام <form>, <ul>, <li> و <input type='checkbox'>)",
          "ربط العناوين بالمدخلات 🔗 (ربط <label htmlFor> لسهولة النقر والتركيز)",
          "إشعارات الشاشة الحية 📢 (aria-live='polite' لإخطار المكفوفين بالتعديلات)",
          "التحكم الكامل بلوحة المفاتيح ⌨️ (التنقل بـ Tab والتفعيل بـ Space/Enter)",
          "التباين البصري والتفاعل 🎨 (تباين ألوان متوافق مع معايير AA وأزرار واضحة)"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-31-2-1",
      question: "لماذا يُعتبر اشتقاق المهام المصفاة حسابياً عبر useMemo أفضل من تخزينها في مصفوفة حالة منفصلة useState؟",
      options: [
        "لأن استخدام useMemo يحذف الملفات غير المستخدمة من الحاسوب.",
        "لأن اشتقاق الحالة (Derived State) يمنع حدوث أي تناقض أو عدم تطابق في البيانات، ويغني عن الحاجة لتحديث مصفوفتين معاً في كل عملية إضافة أو حذف.",
        "لأن React تحظر استخدام أكثر من useState واحد في نفس الملف.",
        "لأن useMemo يجعل الموقع يعمل بدون إنترنت دائماً."
      ],
      correctAnswer: 1,
      explanation: "اشتقاق البيانات (Derived State) من المصدر الوحيد للحقيقة (Single Source of Truth) يضمن اتساق البيانات المطلق ويقضي على أخطاء التناقض الناتجة عن مزامنة مصفوفتين منفصلتين."
    },
    {
      id: "quiz-31-2-2",
      question: "ما الفائدة المعمارية لربط مربع الاختيار بنص المهمة باستخدام وسم <label htmlFor={id}>؟",
      options: [
        "تلوين النص باللون الأزرق تلقائياً.",
        "إتاحة النقر على نص المهمة بالكامل لتبديل حالة مربع الاختيار، وتمكين برامج قارئات الشاشة من نطق عنوان المهمة عند التركيز على المربع.",
        "تشفير نص المهمة في قاعدة البيانات.",
        "تقليل حجم ملف JavaScript النهائي."
      ],
      correctAnswer: 1,
      explanation: "ربط label بـ htmlFor يوسع مساحة النقر لتشمل كامل النص، ويمكّن قارئات الشاشة من ربط حقل الاختيار بالعنوان المنطوق تلقائياً."
    },
    {
      id: "quiz-31-2-3",
      question: "ما هو الإجراء الإلزامي عند قراءة مصفوفة المهام المخزنة في LocalStorage لحماية التطبيق من الانهيار؟",
      options: [
        "إعادة تشغيل المتصفح ثلاث مرات.",
        "إحاطة دالة JSON.parse بكتلة try/catch وتوفير قيمة افتراضية فارغة [] في حال فشل التحليل أو تلف البيانات.",
        "كتابة كود بلغة C++ داخل ملف الـ JSX.",
        "حذف التخزين المحلي بعد كل دقيقة."
      ],
      correctAnswer: 1,
      explanation: "تحليل JSON.parse قد يفشل إذا تم التلاعب بالبيانات أو تلفها؛ واستخدام كتلة try/catch يوفر حماية صلبة تمنع انهيار شاشة التطبيق وتوفر مصفوفة افتراضية سليمة."
    }
  ],
  practicalExercise: {
    id: "exercise-31-2",
    title: "تمرين تطبيقي: بناء قائمة مهام متكاملة مع الحفظ المحلي والتصفية الثلاثية وتبديل الإنجاز",
    scenario: "المطلوب بناء مكون TodoApp متكامل يتيح للمستخدم إضافة مهام جديدة مع فحص منع الفراغ، وتبديل حالة الإنجاز مع خط الشطب، وتصفية المهام بين (الكل، النشطة، المكتملة)، وحفظ البيانات تلقائياً في LocalStorage مع استعادتها بأمان.",
    tasks: [
      "استعادة وحفظ المهام في LocalStorage بأمان عبر دالة تهيئة كسولة وكتلة try/catch.",
      "بناء نموذج لإضافة مهمة جديدة بمعرف فريد Date.now().toString() مع تنظيف النص بـ trim.",
      "تبديل حالة completed للمهمة المحددة دون تعديل الأصل.",
      "تطبيق التصفية الثلاثية (All, Active, Completed) وعرض النتائج بأناقة بـ Tailwind CSS."
    ],
    hints: [
      "استخدم setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)).",
      "استخدم tasks.filter(...) لاشتقاق المهام المعروضة حسابياً.",
      "نسق العنصر المكتمل بفئة line-through text-slate-500."
    ],
    solution: `// الحل النموذجي للتمرين التطبيقي: تطبيق قائمة مهام متكامل
import React, { useState, useEffect, useMemo } from 'react';

export function TodoApp() {
  // 1. استعادة البيانات من التخزين المحلي بأمان
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('my_todo_app_tasks');
      return saved ? JSON.parse(saved) : [
        { id: '1', title: 'إتقان خطافات React الأساسية', completed: true },
        { id: '2', title: 'بناء مشروع قائمة المهام', completed: false }
      ];
    } catch {
      return [];
    }
  });

  const [input, setInput] = useState('');
  const [tab, setTab] = useState('all'); // 'all' | 'active' | 'completed'

  // 2. مزامنة التخزين المحلي فور تغير المهام
  useEffect(() => {
    try {
      localStorage.setItem('my_todo_app_tasks', JSON.stringify(tasks));
    } catch (e) {
      console.warn('تعذر الحفظ في التخزين المحلي:', e);
    }
  }, [tasks]);

  // 3. إضافة مهمة جديدة
  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTask = {
      id: Date.now().toString(),
      title: input.trim(),
      completed: false
    };
    setTasks(prev => [newTask, ...prev]);
    setInput('');
  };

  // 4. تبديل حالة الاكتمال
  const toggleComplete = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  // 5. حذف مهمة
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  // 6. اشتقاق المهام المفلترة
  const visibleTasks = useMemo(() => {
    if (tab === 'active') return tasks.filter(t => !t.completed);
    if (tab === 'completed') return tasks.filter(t => t.completed);
    return tasks;
  }, [tasks, tab]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
        <h3 className="font-bold text-sm text-slate-200">قائمة المهام الذكية</h3>
        <span className="text-[10px] text-cyan-400 font-mono">
          {tasks.filter(t => !t.completed).length} متبقية
        </span>
      </div>

      {/* نموذج الإضافة */}
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="أدخل مهمة جديدة..."
          className="flex-1 p-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
        />
        <button type="submit" className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl transition">
          إضافة
        </button>
      </form>

      {/* أزرار التصفية */}
      <div className="flex gap-1 mb-4">
        {[
          { id: 'all', label: 'الكل' },
          { id: 'active', label: 'النشطة' },
          { id: 'completed', label: 'المكتملة' }
        ].map(b => (
          <button
            key={b.id}
            onClick={() => setTab(b.id)}
            className={\`flex-1 py-1 rounded-lg text-xs font-bold transition \${
              tab === b.id ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
            }\`}
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* قائمة المهام */}
      <div className="space-y-2">
        {visibleTasks.length === 0 ? (
          <p className="text-center text-xs text-slate-500 py-4">لا توجد مهام في هذا القسم.</p>
        ) : (
          visibleTasks.map(t => (
            <div key={t.id} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
              <label htmlFor={\`t-\${t.id}\`} className="flex items-center gap-2 cursor-pointer flex-1 select-none">
                <input 
                  id={\`t-\${t.id}\`}
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleComplete(t.id)}
                  className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                />
                <span className={t.completed ? 'line-through text-slate-500' : 'text-slate-200'}>
                  {t.title}
                </span>
              </label>
              <button 
                onClick={() => deleteTask(t.id)}
                className="text-slate-500 hover:text-rose-400 text-xs px-1 transition"
                title="حذف"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}`
  },
  visualInfographic: {
    title: "خارطة طريق مشروع قائمة المهام الاحترافية",
    description: "المراحل الهندسية الست لبناء وتطوير تطبيق المهام الكامل",
    visualSteps: [
      "نموذج البيانات المنظم 📄 (كائنات معيارية تضم id, title, completed, createdAt)",
      "عمليات CRUD الأساسية ⚙️ (إضافة، تعديل مباشر، حذف مع تراجع، وتبديل الإنجاز)",
      "التصفية والبحث اللحظي 🔍 (اشتقاق النتائج بحساب useMemo نقي دون تكرار)",
      "التخزين المحلي الدائم 💾 (حفظ واستعادة آمنة مع مزامنة التبويبات المتعددة)",
      "الوصولية واللمسات الختامية ♿ (دعم WCAG 2.1 AA ووسوم label و aria-live)"
    ]
  }
};

