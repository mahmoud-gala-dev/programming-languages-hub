// src/data/sections/section6/section6Meta.js
// بيانات القسم 6: الملخص، جدول المرجع السريع، والمشروع المصغر

export const SECTION_6_META = {
  id: "section-6",
  title: "القسم 6: الأحداث والحالة في React",
  englishTitle: "React Events, State & Render Architecture",
  description: "القلب النابض لتطبيقات React التفاعلية: الاستجابة لنوايا المستخدم، كائنات الأحداث الاصطناعية (SyntheticEvent)، إدارة الذاكرة المحلية بـ useState، القواعد الصارمة لعدم تعديل الأصل (Immutability)، دورة التصيير والمطابقة (Reconciliation)، وهندسة رفع ومشاركة الحالة (Lifting State Up).",
  summary: [
    "تُكتب معالجات الأحداث في React بصيغة camelCase (مثل onClick, onChange, onSubmit)، ويجب تمرير مرجع الدالة مجرداً دون أقواس لتأجيل التنفيذ لوقت وقوع الحدث.",
    "لتمرير معاملات مخصصة إلى معالج الحدث، يجب تغليفه بدالة سهمية () => fn(arg) لتفادي تنفيذه الفوري أثناء مرحلة الرندر.",
    "تغلف React أحداث المتصفح داخل كائن موحد W3C يُدعى SyntheticEvent؛ ويُستخدم e.preventDefault() لمنع إعادة تحميل الصفحة و e.stopPropagation() لمنع صعود الحدث للأب.",
    "الحالة (State) هي ذاكرة المكون الخاصة؛ أي تغيير فيها عبر دالة الـ Setter يطلق عملية إعادة تصيير (Re-render) فورية لتحديث شجرة العناصر.",
    "التعديل المباشر للحالة (Direct Mutation) خطأ قاتل؛ يجب دائماً إنشاء كائنات جديدة بنسخ الخصائص القديمة بالـ Spread (...) وتحديث المصفوفات بالدوال النقية (filter, map).",
    "الحالة في كل رندر هي عبارة عن 'لقطة زمنية ثابتة' (State Snapshot)؛ لتسلسل التحديثات المتتالية بأمان استخدم دائماً الصيغة الوظيفية: setState(prev => prev + 1).",
    "تتكون دورة التحديث من مرحلتين: Render Phase (حساب Virtual DOM والمقارنة Diffing دون لمس المتصفح) ومرحلة Commit Phase (تطبيق الفروقات السريعة في DOM الحقيقي).",
    "مشاركة الحالة بين المكونات الشقيقة تتم برفعها إلى أقرب مكون أب مشترك (Lifting State Up)؛ وتجنب دائماً تخزين حالات مشتقة يمكن حسابها في سطر واحد أثناء الرندر."
  ],
  cheatSheet: [
    {
      concept: "تمرير مرجع الدالة Function Reference",
      syntax: "<button onClick={handleClick}>اضغط</button>",
      note: "بدون أقواس ()؛ وضع الأقواس يعني استدعاء الدالة فوراً في الرندر مما يسبب أخطاء فادحة."
    },
    {
      concept: "تمرير المعاملات للمعالج Passing Args",
      syntax: "<button onClick={() => handleDelete(user.id)}>حذف</button>",
      note: "استخدم الدالة السهمية لتأجيل التنفيذ حتى لحظة النقر الفعلية وتمرير المتغيرات المطلوبة."
    },
    {
      concept: "منع السلوك الافتراضي preventDefault",
      syntax: "function handleSubmit(e) { e.preventDefault(); ... }",
      note: "إلزامي في أول سطر في نماذج onSubmit لمنع المتصفح من إعادة تحميل الصفحة (Reload)."
    },
    {
      concept: "إيقاف صعود الحدث stopPropagation",
      syntax: "function onChildClick(e) { e.stopPropagation(); ... }",
      note: "يمنع انتشار الحدث وفقاعته إلى العناصر الآباء في شجرة DOM عند النقر على أزرار داخلية."
    },
    {
      concept: "قراءة نصوص الحقول onChange",
      syntax: "<input onChange={(e) => setText(e.target.value)} />",
      note: "e.target.value تعيد النص المكتوب في الحقل لحظة بلحظة مع كل ضغطة مفتاح."
    },
    {
      concept: "إنشاء الحالة useState",
      syntax: "const [state, setState] = useState(initialValue);",
      note: "يأخذ قيمة ابتدائية ويرجع مصفوفة من عنصرين: القيمة الحالية ودالة التحديث."
    },
    {
      concept: "التهيئة الكسولة Lazy Initial State",
      syntax: "const [data, setData] = useState(() => computeHeavy());",
      note: "تمرير دالة لـ useState يجعل React تنفذ الحسابات الثقيلة في أول رندر فقط وتتجاهلها لاحقاً."
    },
    {
      concept: "التحديث الوظيفي Functional Updater",
      syntax: "setCount(prev => prev + 1);",
      note: "يضمن استلام أحدث قيمة في طابور التحديثات ويمنع ضياع التحديثات المتتالية."
    },
    {
      concept: "تحديث الكائنات اللاتبديلي Spread Object",
      syntax: "setUser(prev => ({ ...prev, name: 'فهد' }));",
      note: "يُحظر user.name = 'فهد'؛ يجب دائماً إنشاء كائن جديد وتمريره للـ Setter."
    },
    {
      concept: "إضافة عنصر لمصفوفة Array Append",
      syntax: "setList(prev => [...prev, newItem]);",
      note: "تجنب list.push() واستخدم معامل الانتشار لتوليد مصفوفة جديدة بنقاء تام."
    },
    {
      concept: "حذف عنصر من مصفوفة Array Remove",
      syntax: "setList(prev => prev.filter(item => item.id !== targetId));",
      note: "دالة filter تُرجع مصفوفة جديدة مستثنى منها العنصر المستهدف بالمعرف."
    },
    {
      concept: "تعديل عنصر في مصفوفة Array Update",
      syntax: "setList(prev => prev.map(it => it.id === id ? { ...it, done: true } : it));",
      note: "دالة map تُرجع مصفوفة جديدة وتعدل فقط العنصر المطابق وتبقي بقية العناصر سليمة."
    },
    {
      concept: "التجميع التلقائي Automatic Batching",
      syntax: "// سطران متتاليان:\nsetA(1); setB(2); // -> رندر موحد واحد فقط!",
      note: "مدمج تلقائياً في React 18+ في كافة معالجات الأحداث والوعود ومؤقتات setTimeout."
    },
    {
      concept: "مرحلة التصيير Render Phase",
      syntax: "// حساب Virtual DOM والمقارنة (Diffing)",
      note: "مرحلة حسابية نقية تماماً لا تلمس شجرة DOM للمتصفح؛ خالية من الآثار الجانبية."
    },
    {
      concept: "مرحلة التثبيت Commit Phase",
      syntax: "// تطبيق التعديلات الصافية فقط في DOM الحقيقي",
      note: "سريعة جداً وتقتصر على العقد التي اختلفت فعلياً بين الشجرتين السابقة والحالية."
    },
    {
      concept: "تصفير الحالة بالمفتاح Key Reset",
      syntax: "<Form key={selectedUserId} userId={selectedUserId} />",
      note: "تغيير مفتاح key يهدم المكون القديم ويصفر كافة حالات useState الداخلية تلقائياً."
    },
    {
      concept: "المكون المضبوط Controlled Input",
      syntax: "<input value={val} onChange={e => setVal(e.target.value)} />",
      note: "حالة React هي مصدر الحقيقة الوحيد للقيمة؛ تتيح التحقق والتنسيق الفوري أثناء الكتابة."
    },
    {
      concept: "المكون غير المضبوط Uncontrolled Input",
      syntax: "<input ref={inputRef} defaultValue='أصلي' />",
      note: "متصفح DOM هو من يحتفظ بالقيمة؛ نصل إليها وقت الحاجة فقط عبر مرجع useRef."
    },
    {
      concept: "رفع الحالة للأب Lifting State Up",
      syntax: "// نقل الحالة للأب المشترك وتمريرها للشقيقين كـ Props و Callbacks",
      note: "الحل المعماري القياسي لمزامنة مكونين شقيقين ومنع تضارب البيانات."
    },
    {
      concept: "تجنب الحالة المشتقة Derived State",
      syntax: "const total = price * quantity; // بدون useState ولا useEffect!",
      note: "أي قيمة يمكن حسابها في سطر واحد من الخصائص أو الحالات الحالية لا يجوز تخزينها في State."
    }
  ],
  miniProject: {
    id: "mini-project-section-6",
    title: "منصة TaskMatrix الذكية: إدارة المشاريع وتتبع دورة التصيير",
    englishTitle: "TaskMatrix Studio: Interactive State & Render Lifecycle Suite",
    description: "تطبيق متكامل لإدارة المشاريع ومصفوفة المهام التفاعلية يجمع كل مفاهيم القسم السادس: التعامل مع الأحداث الاصطناعية (onClick, onChange, onSubmit)، منع إعادة التحميل بـ preventDefault، عزل النقرات بـ stopPropagation، تطبيق مبادئ Immutability الصارمة في إضافة وحذف وتبديل المهام بـ (Spread, filter, map)، شريط إحصائيات مشتقة نقية بدون تكرار الحالة، تصفير تفاصيل المهمة بالمفتاح key={taskId}، ومزامنة الشقيقين بنمط Lifting State Up.",
    code: `import { useState } from "react";

// بيانات ابتدائية للمهام النموذجية
const INITIAL_TASKS = [
  { id: "tsk-101", title: "مراجعة وتدقيق معمارية المكونات في React 19", priority: "high", status: "completed", assignee: "سارة المنصور" },
  { id: "tsk-102", title: "إصلاح ثغرات التعديل المباشر في نماذج الدفع", priority: "urgent", status: "in-progress", assignee: "فهد العتيبي" },
  { id: "tsk-103", title: "تطبيق التجميع التلقائي Automatic Batching للخادم", priority: "medium", status: "todo", assignee: "ريم القحطاني" }
];

// 1. مكون شارة الأولوية المشروطة
function PriorityBadge({ priority }) {
  const styles = {
    urgent: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    high: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    medium: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
  };

  const labels = {
    urgent: "عاجل جداً",
    high: "أولوية عالية",
    medium: "أولوية متوسطة"
  };

  return (
    <span className={\`text-[10px] font-bold px-2 py-0.5 rounded-full border \${styles[priority]}\`}>
      {labels[priority]}
    </span>
  );
}

// 2. المكون الشقيق 1: قائمة المهام مع تفويض الأحداث وعزل النقر (stopPropagation)
function TaskListPanel({ tasks, selectedTaskId, onSelectTask, onToggleStatus, onDeleteTask }) {
  return (
    <div className="space-y-2">
      {tasks.length === 0 ? (
        <div className="p-8 text-center text-slate-500 text-xs border border-dashed border-slate-800 rounded-2xl">
          لا توجد مهام مسجلة حالياً؛ استخدم النموذج بالأعلى لإنشاء أول مهمة!
        </div>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => onSelectTask(task.id)}
            className={\`p-3.5 rounded-2xl border transition-all cursor-pointer flex justify-between items-center text-xs \${
              selectedTaskId === task.id
                ? "bg-indigo-950/60 border-indigo-500/80 shadow-lg shadow-indigo-950/50"
                : "bg-slate-900 border-slate-800/80 hover:border-slate-700"
            }\`}
          >
            <div className="flex items-center gap-3">
              {/* زر تبديل الإنجاز مع عزل النقر بـ stopPropagation */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // منع فتح تفاصيل المهمة عند الضغط على زر الإنجاز!
                  onToggleStatus(task.id);
                }}
                className={\`w-5 h-5 rounded-lg flex items-center justify-center font-bold text-xs transition-colors \${
                  task.status === "completed"
                    ? "bg-emerald-500 text-slate-950"
                    : "border border-slate-600 hover:border-slate-400 text-transparent"
                }\`}
              >
                ✓
              </button>

              <div>
                <p className={\`font-bold \${task.status === "completed" ? "line-through text-slate-500" : "text-slate-100"}\`}>
                  {task.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <PriorityBadge priority={task.priority} />
                  <span className="text-[10px] text-slate-400">المسؤول: {task.assignee}</span>
                </div>
              </div>
            </div>

            {/* زر الحذف المعزول بـ stopPropagation */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // منع فتح التفاصيل عند الضغط على حذف
                onDeleteTask(task.id);
              }}
              className="text-slate-500 hover:text-rose-400 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
              title="حذف المهمة"
            >
              ✕
            </button>
          </div>
        ))
      )}
    </div>
  );
}

// 3. المكون الشقيق 2: شاشة تفاصيل المهمة ذات الحالة المصفرة بالمفتاح key={taskId}
function TaskDetailEditor({ task, onUpdateAssignee }) {
  // حالة محلية لمسودة الملاحظات الداخلية للمهمة (تُصفر تلقائياً بالـ key عند تبديل المهمة!)
  const [internalNote, setInternalNote] = useState("");

  if (!task) {
    return (
      <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 text-center text-slate-500 text-xs">
        اختر مهمة من القائمة لعرض تفاصيلها ومحررها السريع.
      </div>
    );
  }

  return (
    <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-4 text-xs">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <span className="font-mono text-[10px] text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded">
          {task.id}
        </span>
        <span className="text-[10px] font-mono text-emerald-400">محرر تفصيلي معزول</span>
      </div>

      <div>
        <h4 className="font-bold text-sm text-slate-100 mb-1">{task.title}</h4>
        <p className="text-slate-400 text-[11px]">الحالة: {task.status === "completed" ? "مكتملة ✅" : "قيد التنفيذ ⏳"}</p>
      </div>

      <div className="space-y-1">
        <label className="text-slate-400 block font-semibold">تغيير المسؤول التنفيذي (Controlled):</label>
        <input
          type="text"
          value={task.assignee}
          onChange={(e) => onUpdateAssignee(task.id, e.target.value)}
          className="w-full p-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
        />
      </div>

      {/* حقل الملاحظات ذو الحالة المصفرة بالـ key */}
      <div className="space-y-1 pt-2 border-t border-slate-800">
        <label className="text-slate-400 block font-semibold">ملاحظات العمل (حالة محلية تُصفر تلقائياً بالـ Key):</label>
        <textarea
          rows={2}
          value={internalNote}
          onChange={(e) => setInternalNote(e.target.value)}
          placeholder="اكتب ملاحظة هنا ولاحظ تصفيرها فوراً عند اختيار مهمة أخرى..."
          className="w-full p-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500"
        />
      </div>
    </div>
  );
}

// 4. المكون الرئيسي المنظم (Parent Hub & State Owner)
export default function TaskMatrixStudio() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [selectedTaskId, setSelectedTaskId] = useState(INITIAL_TASKS[0]?.id || null);
  const [newTitle, setNewTitle] = useState("");
  const [newPriority, setNewPriority] = useState("high");
  const [newAssignee, setNewAssignee] = useState("");

  // معالج إرسال نموذج إضافة مهمة جديدة مع منع السلوك التلقائي
  const handleCreateTask = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة!
    if (!newTitle.trim()) return;

    const newTask = {
      id: \`tsk-\${Date.now()}\`,
      title: newTitle,
      priority: newPriority,
      status: "todo",
      assignee: newAssignee || "غير محدد"
    };

    // تحديث لاتبديلي نقي بالـ Spread
    setTasks((prev) => [newTask, ...prev]);
    setSelectedTaskId(newTask.id);
    setNewTitle("");
    setNewAssignee("");
  };

  // تبديل حالة المهمة بين مكتملة وغير مكتملة (map)
  const handleToggleStatus = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "completed" ? "todo" : "completed" }
          : t
      )
    );
  };

  // حذف مهمة بالـ filter
  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    if (selectedTaskId === id) {
      setSelectedTaskId(null);
    }
  };

  // تعديل اسم المسؤول التنفيذي
  const handleUpdateAssignee = (id, newAssigneeName) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, assignee: newAssigneeName } : t))
    );
  };

  // حساب الحالات المشتقة فورياً أثناء الرندر (بدون تكرار الحالة!)
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === "completed").length;
  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const selectedTask = tasks.find((t) => t.id === selectedTaskId);

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 font-sans space-y-6">
      {/* الترويسة العليا ولوحة الإحصائيات المشتقة */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            <h1 className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              استوديو TaskMatrix لإدارة المهام
            </h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">تطبيق متكامل يجسد دورة التصيير، الأحداث الاصطناعية، واللاتبديلية التامة</p>
        </div>

        {/* شريط الإنجاز المشتق تلقائياً */}
        <div className="flex items-center gap-4 w-full md:w-auto bg-slate-900 px-4 py-2.5 rounded-2xl border border-slate-800">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase">نسبة الإنجاز:</span>
            <span className="text-base font-black font-mono text-emerald-400">{progressPercent}%</span>
          </div>
          <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              style={{ width: \`\${progressPercent}%\` }}
              className="h-full bg-emerald-500 transition-all duration-300"
            />
          </div>
          <span className="text-xs font-mono text-slate-300 font-bold">({completedTasks}/{totalTasks})</span>
        </div>
      </header>

      {/* نموذج إنشاء مهمة جديدة (Controlled Form مع preventDefault) */}
      <form onSubmit={handleCreateTask} className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex flex-wrap gap-2 text-xs">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="عنوان المهمة الجديدة..."
          className="flex-1 min-w-[200px] p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          required
        />
        <input
          type="text"
          value={newAssignee}
          onChange={(e) => setNewAssignee(e.target.value)}
          placeholder="المسؤول التنفيذي..."
          className="w-36 p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
        />
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
          className="p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500"
        >
          <option value="medium">أولوية متوسطة</option>
          <option value="high">أولوية عالية</option>
          <option value="urgent">عاجل جداً</option>
        </select>
        <button
          type="submit"
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-md shadow-indigo-900/40"
        >
          + إضافة المهمة
        </button>
      </form>

      {/* شاشتا العرض المتزامنتان برفع الحالة للأب */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        {/* الشقيق 1: قائمة المهام */}
        <div>
          <h3 className="font-bold text-xs text-slate-400 mb-2 flex items-center justify-between">
            <span>مصفوفة المهام المسجلة:</span>
            <span className="font-mono text-indigo-400">{tasks.length} مهام</span>
          </h3>
          <TaskListPanel
            tasks={tasks}
            selectedTaskId={selectedTaskId}
            onSelectTask={setSelectedTaskId}
            onToggleStatus={handleToggleStatus}
            onDeleteTask={handleDeleteTask}
          />
        </div>

        {/* الشقيق 2: محرر التفاصيل المعزول والمصفر تلقائياً بالـ key={selectedTaskId} */}
        <div>
          <h3 className="font-bold text-xs text-slate-400 mb-2">محرر التفاصيل والملاحظات:</h3>
          <TaskDetailEditor
            key={selectedTaskId || "empty"}
            task={selectedTask}
            onUpdateAssignee={handleUpdateAssignee}
          />
        </div>
      </main>
    </div>
  );
}`
  },
  infographic: {
    title: "المخطط الهيكلي الشامل للأحداث والحالة ودورة التصيير",
    description: "نظرة شمولية تلخص منظومة التفاعل، الحالات اللاتبديلية، وتنسيق تدفق البيانات.",
    pillars: [
      {
        title: "1. منظومة الأحداث (Event Pipeline)",
        points: [
          "SyntheticEvent: كائن موحد W3C عبر كافة المتصفحات دون استثناء.",
          "preventDefault: إلزامية لمنع إعادة تحميل الصفحة في نماذج onSubmit.",
          "stopPropagation: تعزل الأزرار الفرعية الداخلية وتمنع تفعيل أحداث الأب."
        ]
      },
      {
        title: "2. قانون اللاتبديلية (Immutability Law)",
        points: [
          "حظر التعديل المباشر: state.prop = val يدمر المقارنة ولا يطلق رندراً.",
          "توليد مراجع جديدة: دائماً كائنات جديدة بـ Spread (...) ومصفوفات بـ filter/map.",
          "اللقطة الزمنية: الحالة ثابتة في كل رندر؛ اعتمد على prev للحسابات المتسلسلة."
        ]
      },
      {
        title: "3. هندسة ومشاركة الحالة (State Architecture)",
        points: [
          "Lifting State Up: ارفع الحالة للأب المشترك ومكن الشقيقين من التزامن.",
          "الحسابات المشتقة: احسب البيانات أثناء الرندر ولا تكررها في useState.",
          "التصفير بالـ key: تغيير مفتاح المكون يعيد تهيئة حالته بالكامل في ثانية واحدة."
        ]
      }
    ]
  }
};
