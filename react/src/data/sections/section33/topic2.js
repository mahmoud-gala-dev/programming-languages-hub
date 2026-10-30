// topic2.js - القسم 33، الموضوع 2: مشروع 11: منصة إدارة مشاريع Kanban (Kanban Project Management Platform)
// يحتوي على 12 موضوعاً فرعياً مفصلاً وفق معايير الجودة الصارمة والشرح من الصفر

export const TOPIC_33_2 = {
  id: "topic-33-2",
  title: "مشروع 11: منصة إدارة مشاريع Kanban",
  description: "دليل معماري وهندسي شامل لبناء منصة إدارة مهام رشيقة (Kanban Board) مستوحاة من Trello وJira، تدعم السحب والإفلات السلس، مساحات العمل المتعددة، الصلاحيات الدقيقة، والتحديثات المتفائلة.",
  subtopics: [
    {
      id: "33.2.a",
      title: "تصميم واجهة شبيهة بتطبيقات Kanban",
      technicalTerm: {
        english: "Kanban Board UI Layout Architecture",
        pronunciation: "كانبان بورد يو آي لاي آوت آركيتكتشر",
        arabicMeaning: "معمارية تخطيط واجهة لوحة كانبان"
      },
      description: "تتطلب واجهات تطبيقات الكانبان (مثل Trello وLinear) تصميماً أفقياً متدفقاً (Horizontal Overflow Scrolling) يسمح للمستخدم بتصفح الأعمدة والبطاقات بسهولة دون تشويه التمرير العمودي العام للصفحة. يتكون الهيكل الأساسي من شريط تنقل علوي ثابت (Header)، وشريط فرعي للمشروع (Board Sub-header)، متبوعاً بحاوية أعمدة مرنة (Board Canvas) تستخدم Flexbox مع `overflow-x-auto` و`overflow-y-hidden`، بينما يمتلك كل عمود (Column) شريط تمرير عمودي خاص به (`overflow-y-auto`) لبطاقاته الداخلية.",
      realWorldAnalogy: "لوحة كانبان تشبه سبورة مكتبية مقسمة إلى أشرطة لاصقة عمودية، لكل شريط مساحة رأسية خاصة به لوضع قصاصات المهام، ويمكن للمدير التحرك يميناً ويساراً أمام السبورة دون أن تسقط أي ورقة.",
      whyItMatters: "توزيع حاويات التمرير (Scroll Containers) بشكل خاطئ يؤدي إلى حدوث 'تضارب التمرير' (Scroll Chaining) وفقدان تجربة المستخدم الطبيعية، وتجربة السحب السلس تعتمد كلياً على ثبات الهيكل البصري.",
      syntax: "/* تخطيط كانبان القياسي باستخدام Tailwind */\n<div className=\"flex flex-col h-screen\">\n  <header className=\"h-14 flex-shrink-0 border-b\" />\n  <main className=\"flex-1 flex overflow-x-auto p-4 gap-4 items-start\" />\n</div>",
      simpleExample: `// مكون تخطيط لوحة كانبان الأساسي
import React from 'react';

// تعريف المكون الحاوي للوحة
export function KanbanLayout({ title, children }) {
  // إرجاع هيكل الشاشة الكاملة
  return (
    // حاوية تمتد على كامل الشاشة بارتفاع ثابت
    <div className="flex flex-col h-screen bg-slate-900 text-slate-100 font-sans">
      {/* شريط الأدوات العلوي للمشروع */}
      <header className="h-14 border-b border-slate-850 px-6 flex items-center justify-between bg-slate-900/80 backdrop-blur-md flex-shrink-0">
        {/* عنوان اللوحة */}
        <h1 className="text-lg font-bold tracking-tight">{title}</h1>
        {/* زر إجراءات سريع */}
        <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-xs font-semibold">
          لوحة جديدة
        </button>
      </header>

      {/* مساحة الأعمدة القابلة للتمرير الأفقي */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden p-6 flex gap-6 items-start scrollbar-thin scrollbar-thumb-slate-700">
        {/* عرض الأعمدة الممررة */}
        {children}
      </main>
    </div>
  );
}`,
      advancedExample: `// معمارية تخطيط اللوحة المتكاملة مع الأعمدة والتحكم في التمرير
import React from 'react';

// واجهة خصائص العمود الواحد
export function KanbanColumnShell({ id, title, count, colorClass, children, onAddTask }) {
  return (
    // حاوية العمود ذات العرض الثابت والمرونة العمودية
    <div 
      data-column-id={id}
      className="w-80 flex-shrink-0 max-h-full flex flex-col bg-slate-800/90 rounded-2xl border border-slate-700/60 shadow-xl backdrop-blur-md"
    >
      {/* رأس العمود مع مؤشر اللون وعدد المهام */}
      <div className="p-4 flex items-center justify-between border-b border-slate-700/40">
        {/* الحاوية الجانبية للعنوان والشارة */}
        <div className="flex items-center gap-2.5">
          {/* مؤشر لوني للحالة */}
          <span className={\`w-2.5 h-2.5 rounded-full \${colorClass}\`} />
          {/* عنوان العمود */}
          <h2 className="font-bold text-sm text-slate-200 tracking-wide">{title}</h2>
          {/* عداد المهام في العمود */}
          <span className="px-2 py-0.5 rounded-full bg-slate-700 text-xs font-mono text-slate-350">
            {count}
          </span>
        </div>

        {/* زر إضافة مهمة سريعة في هذا العمود */}
        <button 
          onClick={onAddTask}
          className="p-1 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          title="إضافة بطاقة جديدة"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* منطقة البطاقات القابلة للتمرير العمودي فقط */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3.5 min-h-[140px] scrollbar-thin scrollbar-thumb-slate-650">
        {children}
      </div>
    </div>
  );
}`,
      outputExplanation: "يقوم الكود ببناء قماش عمل كانبان احترافي (Kanban Canvas)، حيث تتدفق الأعمدة أفقياً بانسيابية عالية دون أن يخرج محتوى البطاقات عن الإطار، مع تخصيص شريط تمرير عمودي لكل عمود على حدة.",
      commonMistakes: "استخدام `overflow-scroll` على الحاوية الأبوية مما يظهر شريطي تمرير متعارضين (أفقي وعمودي معاً) ويؤدي إلى تجربة استخدام مربكة على الشاشات المحمولة وذات اللمس.",
      bestPractices: "اجعل حاوية قماش الأعمدة مرنة مع `overflow-x-auto` و`overflow-y-hidden`، واضبط كل عمود ليكون `flex-shrink-0` مع عرض محدد مسبقاً (عادة بين 280px إلى 340px).",
      visualInfographic: `<svg viewBox="0 0 600 240" className="w-full h-auto">
  <rect width="600" height="240" rx="16" fill="#0f172a" />
  <rect x="20" y="20" width="560" height="35" rx="8" fill="#1e293b" stroke="#334155" />
  <text x="40" y="42" fill="#94a3b8" fontSize="12" fontWeight="bold">Header (Fixed)</text>
  <rect x="20" y="70" width="170" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" />
  <text x="35" y="95" fill="#38bdf8" fontSize="12" fontWeight="bold">Column 1 (To Do)</text>
  <rect x="35" y="110" width="140" height="40" rx="6" fill="#334155" />
  <rect x="35" y="160" width="140" height="40" rx="6" fill="#334155" />
  <rect x="210" y="70" width="170" height="150" rx="10" fill="#1e293b" stroke="#f59e0b" />
  <text x="225" y="95" fill="#f59e0b" fontSize="12" fontWeight="bold">Column 2 (In Progress)</text>
  <rect x="225" y="110" width="140" height="40" rx="6" fill="#334155" />
  <rect x="400" y="70" width="170" height="150" rx="10" fill="#1e293b" stroke="#10b981" />
  <text x="415" y="95" fill="#10b981" fontSize="12" fontWeight="bold">Column 3 (Done)</text>
  <rect x="415" y="110" width="140" height="40" rx="6" fill="#334155" />
</svg>`
    },
    {
      id: "33.2.b",
      title: "إنشاء مساحات العمل والمشاريع (Workspaces & Projects)",
      technicalTerm: {
        english: "Workspaces and Projects Data Hierarchy",
        pronunciation: "ويرك سبيسيز آند بروجيكتس داتا هايراركي",
        arabicMeaning: "التسلسل الهرمي لمساحات العمل والمشاريع"
      },
      description: "تعتمد أنظمة المؤسسات على هيكلة بيانات ثلاثية المستويات: مساحة العمل (Workspace) التي تضم عدة مستخدمين وفريقاً كاملاً، وتحتوي مساحة العمل على مشاريع متعددة (Projects)، وكل مشروع يحتوي على لوحة كانبان واحدة أو أكثر (Boards). يتم تنظيم هذا التسلسل من خلال علاقات المعرفات (Foreign Keys) وإدارة حالة التطبيق باستخدام مسارات ديناميكية متداخلة مثل `/w/:workspaceId/p/:projectId/b/:boardId`.",
      realWorldAnalogy: "مساحة العمل مثل المقر الرئيسي لشركة ما، والمشاريع هي الأقسام المختلفة داخل الشركة (التسويق، التطوير)، بينما اللوحات هي غرف العمليات التكتيكية المخصصة لكل قسم.",
      whyItMatters: "العزل الهيكلي للبيانات يضمن إمكانية توسع التطبيق لخدمة آلاف الشركات دون خلط البيانات، كما يسهل تطبيق سياسات العزل والأمان والفوترة على مستوى مساحة العمل.",
      syntax: "// نموذج واجهات TypeScript للمساحات والمشاريع\ninterface Workspace { id: string; name: string; slug: string; members: string[]; }\ninterface Project { id: string; workspaceId: string; name: string; key: string; }",
      simpleExample: `// إدارة تحديد مساحة العمل والمشروع الحالي عبر React State
import React, { useState } from 'react';

// مكون مبدل مساحات العمل والمشاريع
export function WorkspaceSelector({ workspaces, onSelectProject }) {
  // حالة مساحة العمل المختارة حالياً
  const [selectedWsId, setSelectedWsId] = useState(workspaces[0]?.id);

  // إيجاد كائن مساحة العمل الحالية
  const currentWs = workspaces.find(w => w.id === selectedWsId);

  return (
    // حاوية أزرار التبديل
    <div className="flex items-center gap-3 bg-slate-800 p-2 rounded-xl">
      {/* قائمة اختيار مساحة العمل */}
      <select 
        value={selectedWsId}
        onChange={(e) => setSelectedWsId(e.target.value)}
        className="bg-slate-700 text-white rounded-lg px-3 py-1.5 text-sm font-medium border border-slate-600"
      >
        {workspaces.map(ws => (
          <option key={ws.id} value={ws.id}>{ws.name}</option>
        ))}
      </select>

      {/* قائمة مشاريع مساحة العمل المحددة */}
      <div className="flex items-center gap-1.5">
        {currentWs?.projects.map(proj => (
          <button
            key={proj.id}
            onClick={() => onSelectProject(proj.id)}
            className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-md text-xs font-semibold"
          >
            {proj.name}
          </button>
        ))}
      </div>
    </div>
  );
}`,
      advancedExample: `// Hook مخصص لإدارة سياق مساحة العمل والمشاريع مع مزامنة الـ URL
import { createContext, useContext, useMemo } from 'react';

// إنشاء سياق مساحة العمل
const WorkspaceContext = createContext(null);

// مزود سياق مساحات العمل المتقدم
export function WorkspaceProvider({ activeWorkspaceId, activeProjectId, data, children }) {
  // استخراج مساحة العمل الحالية بكفاءة
  const activeWorkspace = useMemo(() => {
    // العثور على الكائن بالمعرف
    return data.workspaces.find(w => w.id === activeWorkspaceId) || null;
  }, [data.workspaces, activeWorkspaceId]);

  // استخراج المشروع النشط
  const activeProject = useMemo(() => {
    // التحقق من وجود مساحة العمل
    if (!activeWorkspace) return null;
    // العثور على المشروع المرتبط
    return activeWorkspace.projects.find(p => p.id === activeProjectId) || null;
  }, [activeWorkspace, activeProjectId]);

  // القيمة المجمعة للسياق
  const contextValue = useMemo(() => ({
    workspace: activeWorkspace,
    project: activeProject,
    allWorkspaces: data.workspaces,
    isEnterprise: activeWorkspace?.plan === 'enterprise'
  }), [activeWorkspace, activeProject, data.workspaces]);

  return (
    // توفير السياق للمكونات الفرعية
    <WorkspaceContext.Provider value={contextValue}>
      {children}
    </WorkspaceContext.Provider>
  );
}

// Hook مخصص لاستهلاك مساحة العمل في أي مكان
export function useWorkspaceContext() {
  const ctx = useContext(WorkspaceContext);
  if (!ctx) throw new Error("useWorkspaceContext must be used within WorkspaceProvider");
  return ctx;
}`,
      outputExplanation: "يضمن هذا الهيكل ربط بيانات كل لوحة كانبان بمشروع محدد ومساحة عمل محددة، مما يمنع تسرب البيانات بين الحسابات ويوفر سياقاً مركزياً لاستهلاك معرّفات المسار في كامل شجرة المكونات.",
      commonMistakes: "تخزين معرّف المشروع الحالي في حالة محلية منعزلة داخل مكون الواجهة فقط بدلاً من ربطه بعنوان URL أو سياق شامل، مما يعطل ميزة تحديث الصفحة (Refresh) أو مشاركة الروابط مع أعضاء الفريق.",
      bestPractices: "اجعل URL هو المصدر الوحيد للحقيقة (Single Source of Truth) لمعرّفات Workspace وProject وBoard لضمان إمكانية حفظ الروابط في المفضلة والمشاركة السلسة.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="30" y="35" width="160" height="130" rx="10" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="45" y="70" fill="#818cf8" fontSize="13" fontWeight="bold">Workspace</text>
  <text x="45" y="95" fill="#94a3b8" fontSize="11">Company Level</text>
  <text x="45" y="125" fill="#cbd5e1" fontSize="11">ACME Corp</text>
  <path d="M 195 100 L 235 100" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="35" width="150" height="130" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="255" y="70" fill="#38bdf8" fontSize="13" fontWeight="bold">Project</text>
  <text x="255" y="95" fill="#94a3b8" fontSize="11">Team Level</text>
  <text x="255" y="125" fill="#cbd5e1" fontSize="11">Mobile App Redesign</text>
  <path d="M 395 100 L 435 100" stroke="#38bdf8" strokeWidth="2" />
  <rect x="440" y="35" width="130" height="130" rx="10" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="455" y="70" fill="#10b981" fontSize="13" fontWeight="bold">Board (Kanban)</text>
  <text x="455" y="95" fill="#94a3b8" fontSize="11">Execution Level</text>
  <text x="455" y="125" fill="#cbd5e1" fontSize="11">Sprint 24</text>
</svg>`
    },
    {
      id: "33.2.c",
      title: "إدارة الأعمدة واللوحات (Boards and Columns State)",
      technicalTerm: {
        english: "Normalized Column State & Ordering",
        pronunciation: "نورمالايزد كولوم ستيت آند أوردرينج",
        arabicMeaning: "حالة الأعمدة المعيارية وخوارزمية الترتيب"
      },
      description: "لإدارة الأعمدة داخل اللوحة بكفاءة عالية، يجب تجنب تخزين البطاقات مباشرة داخل مصفوفة الأعمدة (Nested Arrays) لأن تعديل بطاقة واحدة سيجبر العمود بالكامل على إعادة التصيير. الممارسة المعمارية الفضلى هي تطبيع البيانات (Data Normalization): تخزين الأعمدة ككائن معجمي مفهرس بالمعرفات `columns: { [colId]: Column }` ومصفوفة مرتبة لمعرفات الأعمدة `columnOrder: string[]`، ومصفوفة معرفات البطاقات لكل عمود `taskIds: string[]`.",
      realWorldAnalogy: "مثل نظام الفهرسة في المكتبة العامة؛ بدلاً من وضع الكتب المادية كلها داخل بطاقة الفهرس، يتم تسجيل أرقام الكتب فقط في الفهرس، مما يسهل نقل الأرقام أو إعادة ترتيبها دون حمل الكتب الثقيلة.",
      whyItMatters: "تطبيع البيانات يمنع تعقيد التعديل من الدرجة O(n) ويحوله إلى O(1) عند تحديث عنوان عمود أو إضافة بطاقة، ويوفر أداءً استثنائياً أثناء السحب والإفلات.",
      syntax: "// نموذج اللوحة المعيارية (Normalized Board State)\nconst boardState = {\n  columns: { 'col-1': { id: 'col-1', title: 'To Do', taskIds: ['task-1', 'task-2'] } },\n  columnOrder: ['col-1', 'col-2', 'col-3']\n};",
      simpleExample: `// إدارة الأعمدة وإعادة تسميتها في لوحة كانبان
import React, { useState } from 'react';

// بيانات الأعمدة المبدئية
const initialColumns = [
  { id: 'c1', title: 'قيد الانتظار', color: 'border-slate-500' },
  { id: 'c2', title: 'جاري العمل', color: 'border-amber-500' },
  { id: 'c3', title: 'مكتمل', color: 'border-emerald-500' }
];

export function ColumnManager() {
  // حالة مصفوفة الأعمدة
  const [columns, setColumns] = useState(initialColumns);

  // دالة لتعديل عنوان العمود
  const handleRename = (id, newTitle) => {
    // تحديث العمود المحدد بشكل غير قابل للتعديل المباشر
    setColumns(prev => prev.map(c => c.id === id ? { ...c, title: newTitle } : c));
  };

  return (
    // قائمة الأعمدة وإمكانية تحرير أسمائها
    <div className="flex gap-4 p-4 bg-slate-900 rounded-xl">
      {columns.map(col => (
        <div key={col.id} className={\`p-4 bg-slate-800 rounded-lg border-t-4 \${col.color} w-64\`}>
          <input
            type="text"
            value={col.title}
            onChange={(e) => handleRename(col.id, e.target.value)}
            className="w-full bg-transparent text-white font-bold focus:outline-none focus:bg-slate-700/50 px-2 py-1 rounded"
          />
        </div>
      ))}
    </div>
  );
}`,
      advancedExample: `// مُخفض الحالة المعياري (Normalized Reducer) لإدارة الأعمدة واللوحات
import { useReducer } from 'react';

// تعريف أنواع الإجراءات
const ACTIONS = {
  MOVE_COLUMN: 'MOVE_COLUMN',
  ADD_COLUMN: 'ADD_COLUMN',
  DELETE_COLUMN: 'DELETE_COLUMN',
  RENAME_COLUMN: 'RENAME_COLUMN'
};

// دالة تخفيض الحالة
function boardReducer(state, action) {
  switch (action.type) {
    case ACTIONS.MOVE_COLUMN: {
      const { sourceIndex, destinationIndex } = action.payload;
      // استنساخ مصفوفة الترتيب
      const newOrder = Array.from(state.columnOrder);
      // إزالة العنصر من موقعه الأصلي
      const [removedId] = newOrder.splice(sourceIndex, 1);
      // إدراجه في الموقع الجديد
      newOrder.splice(destinationIndex, 0, removedId);
      // إرجاع الحالة المحدثة
      return { ...state, columnOrder: newOrder };
    }
    case ACTIONS.RENAME_COLUMN: {
      const { columnId, title } = action.payload;
      return {
        ...state,
        columns: {
          ...state.columns,
          [columnId]: { ...state.columns[columnId], title }
        }
      };
    }
    default:
      return state;
  }
}

// Hook مخصص للوحة المعيارية
export function useNormalizedBoard(initialState) {
  const [state, dispatch] = useReducer(boardReducer, initialState);

  // دالة تحريك ترتيب العمود
  const reorderColumn = (sourceIndex, destinationIndex) => {
    dispatch({ type: ACTIONS.MOVE_COLUMN, payload: { sourceIndex, destinationIndex } });
  };

  // دالة إعادة التسمية
  const renameColumn = (columnId, title) => {
    dispatch({ type: ACTIONS.RENAME_COLUMN, payload: { columnId, title } });
  };

  return { state, reorderColumn, renameColumn };
}`,
      outputExplanation: "يعمل هذا النظام المعياري على عزل تحديثات الأعمدة، بحيث لا يضطر النظام لإعادة حساب أو تصيير بيانات المهام الداخلية عند إعادة ترتيب الأعمدة أو تعديل أسمائها.",
      commonMistakes: "الاعتماد على رقم الفهرس (Index) كمعرف للأعمدة بدلاً من UUID فريد ومستقر، مما يؤدي إلى خلط مهام الأعمدة عند حذف أحد الأعمدة أو سحبه.",
      bestPractices: "استخدم دائماً كائنات مفهرسة بالمعرفات (Hash Maps) للمجموعات ومصفوفة منفصلة لإدارة الترتيب (`columnOrder`)، مما يسهل حفظ الترتيب في قاعدة البيانات كأرقام تسلسلية.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="240" height="140" rx="10" fill="#1e293b" stroke="#334155" />
  <text x="50" y="55" fill="#f87171" fontSize="12" fontWeight="bold">❌ Un-normalized (Deep Nesting)</text>
  <text x="50" y="85" fill="#94a3b8" fontSize="11">[{ id: 'c1', tasks: [{ id: 't1' }, { id: 't2' }] }]</text>
  <text x="50" y="115" fill="#ef4444" fontSize="11">Updating t2 re-renders c1 and all tasks</text>
  <rect x="310" y="30" width="260" height="140" rx="10" fill="#1e293b" stroke="#10b981" />
  <text x="330" y="55" fill="#34d399" fontSize="12" fontWeight="bold">✅ Normalized (Separated IDs)</text>
  <text x="330" y="85" fill="#94a3b8" fontSize="11">columns: { c1: { taskIds: ['t1', 't2'] } }</text>
  <text x="330" y="115" fill="#94a3b8" fontSize="11">tasks: { t1: { ... }, t2: { ... } }</text>
  <text x="330" y="145" fill="#10b981" fontSize="11">Updating t2 only re-renders Task(t2)!</text>
</svg>`
    },
    {
      id: "33.2.d",
      title: "إضافة المهام وتعديلها وحذفها (Task CRUD Operations)",
      technicalTerm: {
        english: "Task CRUD & State Mutators",
        pronunciation: "تاسك كرود آند ستيت ميوتيتورز",
        arabicMeaning: "عمليات إنشاء وقراءة وتعديل وحذف المهام ومغيرات الحالة"
      },
      description: "تتضمن عمليات الـ CRUD للبطاقات في لوحات كانبان إنشاء بطاقة سريعة داخل عمود محدد، وتحديث حقول البطاقة (العنوان، الوصف، تاريخ الاستحقاق، الأولوية)، وحذفها الآمن، مع ضرورة إبقاء مصفوفة `taskIds` في العمود متزامنة تماماً مع سجل البطاقات العام `tasks`. عند الحذف، يجب إزالة معرف البطاقة من العمود وحذف الكائن من سجل المهام لتفادي تسرب الذاكرة والمراجع اليتيمة (Orphaned Keys).",
      realWorldAnalogy: "إنشاء البطاقة يشبه كتابة ملاحظة جديدة على ورقة لاصقة ولصقها في اللوحة، وتعديلها هو شطب كلمة وإضافة تفاصيل، بينما حذفها هو نزع الورقة وتمزيقها نهائياً وإلقاؤها في سلة المهملات.",
      whyItMatters: "تعتبر عمليات المهام الشريان الأساسي لتطبيقات إدارة المشاريع، وأي خلل في تزامن معرف البطاقة بين العمود والكيان يسبب أخطاء فادحة في شجرة React مثل 'Cannot read properties of undefined'.",
      syntax: "// نموذج إنشاء مهمة معيارية\nconst newTask = { id: crypto.randomUUID(), title, priority: 'medium', columnId, createdAt: Date.now() };",
      simpleExample: `// إضافة مهمة سريعة إلى عمود معين
import React, { useState } from 'react';

export function QuickTaskCreator({ columnId, onAddTask }) {
  // حالة نص المهمة الجديدة
  const [title, setTitle] = useState('');
  // حالة إظهار نموذج الإدخال السريع
  const [isOpen, setIsOpen] = useState(false);

  // معالجة الحفظ
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    // استدعاء دالة الإضافة
    onAddTask(columnId, title.trim());
    // إعادة التعيين
    setTitle('');
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full text-start px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg text-xs font-semibold"
      >
        + إضافة بطاقة
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-2 bg-slate-700/80 rounded-xl space-y-2">
      <textarea
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="أدخل عنوان هذه البطاقة..."
        className="w-full p-2 text-xs bg-slate-800 text-white rounded border border-slate-600 focus:outline-none focus:border-indigo-500 resize-none h-16"
      />
      <div className="flex gap-2">
        <button type="submit" className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded">
          إضافة
        </button>
        <button type="button" onClick={() => setIsOpen(false)} className="px-2 py-1 text-slate-400 text-xs">
          إلغاء
        </button>
      </div>
    </form>
  );
}`,
      advancedExample: `// إدارة دورة حياة المهمة الكاملة مع الحذف الآمن وتحديث الخصائص
import { useState, useCallback } from 'react';

export function useTaskOperations(initialState) {
  const [boardData, setBoardData] = useState(initialState);

  // دالة إنشاء مهمة جديدة
  const createTask = useCallback((columnId, taskData) => {
    const newTaskId = \`task-\${Date.now()}\`;
    const newTask = {
      id: newTaskId,
      columnId,
      title: taskData.title,
      description: taskData.description || '',
      priority: taskData.priority || 'medium',
      assignees: taskData.assignees || [],
      createdAt: new Date().toISOString()
    };

    setBoardData(prev => ({
      ...prev,
      tasks: { ...prev.tasks, [newTaskId]: newTask },
      columns: {
        ...prev.columns,
        [columnId]: {
          ...prev.columns[columnId],
          taskIds: [...prev.columns[columnId].taskIds, newTaskId]
        }
      }
    }));
  }, []);

  // دالة حذف مهمة بشكل كامل وآمن
  const deleteTask = useCallback((taskId, columnId) => {
    setBoardData(prev => {
      // حذف المعرف من مصفوفة العمود
      const updatedTaskIds = prev.columns[columnId].taskIds.filter(id => id !== taskId);
      // حذف الكائن من سجل المهام العام
      const remainingTasks = { ...prev.tasks };
      delete remainingTasks[taskId];

      return {
        ...prev,
        tasks: remainingTasks,
        columns: {
          ...prev.columns,
          [columnId]: { ...prev.columns[columnId], taskIds: updatedTaskIds }
        }
      };
    });
  }, []);

  return { boardData, createTask, deleteTask };
}`,
      outputExplanation: "يوفر هذا الكود عمليات CRUD نظيفة ومعيارية، تضمن الحفاظ على تكامل البيانات (Referential Integrity) بحيث لا تبقى أي مهام يتيمة بعد الحذف، مع دعم إنشاء فوري وسلس.",
      commonMistakes: "تعديل نص المهمة مباشرة داخل `boardData.tasks[id].title = val` بدون استنساخ الكائن، مما يكسر آلية رصد التغييرات في React ولا يطلق إعادة التصيير.",
      bestPractices: "استخدم دائماً التحديثات غير القابلة للتغيير (Immutability) واعتمد معرّفات UUID مستقلة للمهام ولا تعتمد على الفهرس الزمني البسيط في بيئات الإنتاج الحقيقية.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="160" height="120" rx="10" fill="#1e293b" stroke="#38bdf8" />
  <text x="45" y="70" fill="#38bdf8" fontSize="13" fontWeight="bold">Create</text>
  <text x="45" y="95" fill="#94a3b8" fontSize="11">Generate UUID</text>
  <text x="45" y="120" fill="#94a3b8" fontSize="11">Append to column</text>
  <rect x="220" y="40" width="160" height="120" rx="10" fill="#1e293b" stroke="#f59e0b" />
  <text x="235" y="70" fill="#f59e0b" fontSize="13" fontWeight="bold">Update</text>
  <text x="235" y="95" fill="#94a3b8" fontSize="11">Shallow clone</text>
  <text x="235" y="120" fill="#94a3b8" fontSize="11">Preserve history</text>
  <rect x="410" y="40" width="160" height="120" rx="10" fill="#1e293b" stroke="#ef4444" />
  <text x="425" y="70" fill="#ef4444" fontSize="13" fontWeight="bold">Delete</text>
  <text x="425" y="95" fill="#94a3b8" fontSize="11">Filter taskIds</text>
  <text x="425" y="120" fill="#94a3b8" fontSize="11">Delete from dictionary</text>
</svg>`
    },
    {
      id: "33.2.e",
      title: "تنفيذ السحب والإفلات (Drag and Drop Architecture)",
      technicalTerm: {
        english: "Drag and Drop Reordering Engine",
        pronunciation: "دراج آند دروب ري أوردرينج إنجين",
        arabicMeaning: "محرك إعادة الترتيب بالسحب والإفلات"
      },
      description: "السحب والإفلات هو جوهر تجربة كانبان. يمكن تنفيذه إما باستخدام مكتبة متخصصة مثل `@hello-pangea/dnd` (الوريث الشرعي لـ `react-beautiful-dnd`) أو `@dnd-kit/core`، أو عبر واجهة HTML5 Drag and Drop API الأصلية. يتضمن السحب حالتين: إعادة الترتيب داخل نفس العمود (Reorder in same column)، أو النقل بين عمودين مختلفين (Move between columns). تعتمد الخوارزمية على التقاط حدث `onDragEnd`، والتحقق من وجهة الإسقاط (`destination`)، وتحديث مصفوفات `taskIds` المقابلة بشكل متفائل فوري.",
      realWorldAnalogy: "مثل نقل ملف ورقي من درج 'المعاملات الواردة' إلى درج 'المعاملات المنجزة'؛ يدك تلتقط الملف، وتتحرك به، ثم تسقطه في الدرج الآخر ليعاد ترتيب الملفات في كلا الدرجين فوراً.",
      whyItMatters: "أي بطء أو تأخير في استجابة السحب والإفلات يسبب شعوراً فورياً بالثقل وضعف الجودة، لذلك يجب أن تكون حسابات المصفوفة في حدث `onDragEnd` فورية وبأقل قدر من عمليات إعادة التصيير.",
      syntax: "// حدث إنهاء السحب الأساسي في @hello-pangea/dnd\nconst onDragEnd = (result) => {\n  const { source, destination, draggableId } = result;\n  if (!destination) return;\n  if (source.droppableId === destination.droppableId && source.index === destination.index) return;\n  // تنفيذ منطق النقل وإعادة الترتيب\n};",
      simpleExample: `// مثال توضيحي لسحب وإفلات بسيط باستخدام HTML5 DnD الأصلي
import React, { useState } from 'react';

export function SimpleDragList() {
  const [items, setItems] = useState(['مهمة 1', 'مهمة 2', 'مهمة 3', 'مهمة 4']);
  const [draggedIdx, setDraggedIdx] = useState(null);

  const handleDragStart = (idx) => setDraggedIdx(idx);

  const handleDrop = (targetIdx) => {
    if (draggedIdx === null || draggedIdx === targetIdx) return;
    const newItems = [...items];
    const [moved] = newItems.splice(draggedIdx, 1);
    newItems.splice(targetIdx, 0, moved);
    setItems(newItems);
    setDraggedIdx(null);
  };

  return (
    <div className="space-y-2 w-64 bg-slate-900 p-4 rounded-xl">
      {items.map((item, idx) => (
        <div
          key={item}
          draggable
          onDragStart={() => handleDragStart(idx)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(idx)}
          className="p-3 bg-slate-800 text-white rounded-lg cursor-grab active:cursor-grabbing border border-slate-700 hover:border-indigo-500 transition-all select-none"
        >
          {item}
        </div>
      ))}
    </div>
  );
}`,
      advancedExample: `// خوارزمية السحب والإفلات الشاملة بين الأعمدة وفي نفس العمود
import { useCallback } from 'react';

export function useKanbanDragEngine(boardState, setBoardState, onServerPersist) {
  // دالة معالجة انتهاء السحب
  const handleDragEnd = useCallback((result) => {
    const { source, destination, draggableId, type } = result;

    // حالة 1: تم الإفلات خارج أي منطقة صالحة
    if (!destination) return;

    // حالة 2: الإفلات في نفس المكان تماماً دون أي تغيير
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // حالة 3: سحب عمود كامل لإعادة ترتيب الأعمدة
    if (type === 'COLUMN') {
      const newColumnOrder = Array.from(boardState.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setBoardState(prev => ({ ...prev, columnOrder: newColumnOrder }));
      onServerPersist?.({ type: 'REORDER_COLUMNS', newColumnOrder });
      return;
    }

    // حالة 4: سحب مهمة داخل نفس العمود
    const sourceCol = boardState.columns[source.droppableId];
    const destCol = boardState.columns[destination.droppableId];

    if (sourceCol === destCol) {
      const newTaskIds = Array.from(sourceCol.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const updatedColumn = { ...sourceCol, taskIds: newTaskIds };
      setBoardState(prev => ({
        ...prev,
        columns: { ...prev.columns, [updatedColumn.id]: updatedColumn }
      }));
      onServerPersist?.({ type: 'REORDER_TASK', columnId: sourceCol.id, newTaskIds });
      return;
    }

    // حالة 5: نقل مهمة من عمود إلى عمود آخر مختلف
    const sourceTaskIds = Array.from(sourceCol.taskIds);
    sourceTaskIds.splice(source.index, 1);
    const updatedSourceCol = { ...sourceCol, taskIds: sourceTaskIds };

    const destTaskIds = Array.from(destCol.taskIds);
    destTaskIds.splice(destination.index, 0, draggableId);
    const updatedDestCol = { ...destCol, taskIds: destTaskIds };

    // تحديث عمود المهمة في كيان المهمة نفسه
    const updatedTask = { ...boardState.tasks[draggableId], columnId: destCol.id };

    setBoardState(prev => ({
      ...prev,
      tasks: { ...prev.tasks, [draggableId]: updatedTask },
      columns: {
        ...prev.columns,
        [updatedSourceCol.id]: updatedSourceCol,
        [updatedDestCol.id]: updatedDestCol
      }
    }));

    onServerPersist?.({
      type: 'MOVE_TASK_ACROSS_COLUMNS',
      taskId: draggableId,
      sourceColId: sourceCol.id,
      destColId: destCol.id,
      newIndex: destination.index
    });
  }, [boardState, setBoardState, onServerPersist]);

  return { handleDragEnd };
}`,
      outputExplanation: "تغطي هذه الخوارزمية جميع حالات السحب والإفلات المعقدة: السحب داخل العمود الواحد، ونقل البطاقات بين أعمدة مختلفة، وسحب الأعمدة ذاتها، مع عزل كل حالة لضمان الأداء الفوري.",
      commonMistakes: "تعديل مصفوفة الحالة مباشرة في كائن `sourceCol.taskIds` دون استخدام `Array.from()` أو معامل الانتشار `[...taskIds]`، مما يسبب تشوهات بصرية في مكان البطاقة المسحوبة.",
      bestPractices: "قم دائماً بإرسال التحديث المتفائل لواجهة المستخدم فوراً قبل استدعاء واجهة برمجة التطبيقات (API)، وسجل مؤشر الحركة لتمكين التراجع إذا فشل الاتصال بالخادم.",
      visualInfographic: `<svg viewBox="0 0 600 220" className="w-full h-auto">
  <rect width="600" height="220" rx="14" fill="#0f172a" />
  <rect x="40" y="30" width="220" height="160" rx="10" fill="#1e293b" stroke="#6366f1" />
  <text x="60" y="55" fill="#818cf8" fontSize="12" fontWeight="bold">Source Column</text>
  <rect x="60" y="70" width="180" height="35" rx="6" fill="#334155" />
  <text x="75" y="92" fill="#e2e8f0" fontSize="11">Task A</text>
  <rect x="60" y="115" width="180" height="35" rx="6" fill="#4338ca" stroke="#818cf8" strokeDasharray="4 4" />
  <text x="75" y="137" fill="#c7d2fe" fontSize="11">Task B (Dragging...)</text>
  <path d="M 245 132 C 300 132, 300 90, 345 90" stroke="#818cf8" strokeWidth="2" strokeDasharray="6 6" />
  <rect x="340" y="30" width="220" height="160" rx="10" fill="#1e293b" stroke="#10b981" />
  <text x="360" y="55" fill="#34d399" fontSize="12" fontWeight="bold">Destination Column</text>
  <rect x="360" y="70" width="180" height="35" rx="6" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="375" y="92" fill="#34d399" fontSize="11">Drop Target Placeholder</text>
  <rect x="360" y="115" width="180" height="35" rx="6" fill="#334155" />
  <text x="375" y="137" fill="#e2e8f0" fontSize="11">Task C</text>
</svg>`
    },
    {
      id: "33.2.f",
      title: "إضافة المستخدمين إلى المشاريع (Project Members & Invitations)",
      technicalTerm: {
        english: "Project Member Management & Invites",
        pronunciation: "بروجيكت ميمبر مانيجمينت آند إنفايتس",
        arabicMeaning: "إدارة أعضاء المشروع ونظام الدعوات"
      },
      description: "تعتمد المشاريع التعاونية على إمكانية دعوة مستخدمين جدد عبر البريد الإلكتروني أو روابط الدعوة المشتركة، مع ربط كل مستخدم بسجل عضويات المشروع (Project Memberships). تتطلب هذه الوحدة مكونات لاختيار الأعضاء وتعيينهم في البطاقات (Assignee Avatar Stack)، والتحقق من صلاحية البريد الإلكتروني، وإرسال الدعوات المعلقة (Pending Invitations)، وإمكانية إزالة العضو من المشروع وسحب صلاحياته.",
      realWorldAnalogy: "مثل إصدار بطاقة مرور لموظف جديد في مقر المشروع؛ يتم تسجيل اسمه وصورته، وتحديد المكاتب التي يُسمح له بدخولها، وتظهر صورته ضمن فريق العمل في البهو الرئيسي.",
      whyItMatters: "التعاون هو الهدف الأساسي من لوحات كانبان، وإدارة الأعضاء تمنح الشفافية الكاملة لمعرفة من يعمل على ماذا، ومن المسؤول عن كل بطاقة وموعد تسليمها.",
      syntax: "// نموذج عضو المشروع\ninterface ProjectMember {\n  id: string;\n  userId: string;\n  name: string;\n  email: string;\n  avatarUrl: string;\n  role: 'owner' | 'admin' | 'member' | 'viewer';\n}",
      simpleExample: `// كومبوننت عرض وتعيين الموظف على البطاقة (Avatar Stack)
import React from 'react';

export function AssigneeStack({ members, assignees = [], onToggleAssignee }) {
  return (
    <div className="flex items-center -space-x-2 rtl:space-x-reverse">
      {assignees.map(userId => {
        const member = members.find(m => m.id === userId);
        if (!member) return null;
        return (
          <img
            key={member.id}
            src={member.avatarUrl}
            alt={member.name}
            title={member.name}
            className="w-7 h-7 rounded-full border-2 border-slate-800 object-cover ring-1 ring-slate-600"
          />
        );
      })}
      {/* زر إضافة مسؤول جديد */}
      <button
        onClick={onToggleAssignee}
        className="w-7 h-7 rounded-full bg-slate-700 hover:bg-slate-600 border-2 border-slate-800 flex items-center justify-center text-slate-300 text-xs font-bold transition-colors"
        title="تعيين عضو"
      >
        +
      </button>
    </div>
  );
}`,
      advancedExample: `// نافذة دعوة الأعضاء للمشروع مع التحقق والتحكم في الأدوار
import React, { useState } from 'react';

export function InviteMemberModal({ isOpen, onClose, onSendInvite }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('member');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('يرجى إدخال عنوان بريد إلكتروني صالح');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await onSendInvite({ email, role });
      setEmail('');
      onClose();
    } catch (err) {
      setError(err.message || 'حدث خطأ أثناء إرسال الدعوة');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl space-y-5">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-bold text-white">دعوة عضو جديد إلى المشروع</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
        </div>

        {error && <div className="p-3 bg-rose-500/20 text-rose-350 text-xs rounded-lg">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-350 mb-1.5">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="colleague@company.com"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-350 mb-1.5">الدور في المشروع</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="viewer">مشاهد فقط (Viewer) - قراءة وملاحظات</option>
              <option value="member">عضو (Member) - إنشاء وتحريك المهام</option>
              <option value="admin">مسؤول (Admin) - تحكم كامل بالأعمدة واللوحة</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
            >
              إلغاء
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all disabled:opacity-50"
            >
              {loading ? 'جاري الإرسال...' : 'إرسال الدعوة'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوفر الكود واجهة لإدارة فريق العمل داخل المشروع وإرسال دعوات آمنة مع تحديد مسبق للدور، بالإضافة إلى عرض مرئي للأعضاء الموكلين بالمهام مع ميزة التراص (Avatar Overlap).",
      commonMistakes: "تخزين معلومات المستخدم الكاملة (مثل الاسم والصورة) مكررة داخل كل كائن مهمة، مما يؤدي إلى عدم تحديث صورة المستخدم في البطاقات إذا قام بتغيير صورته في الملف الشخصي.",
      bestPractices: "خزن فقط `userIds: string[]` داخل البطاقة، واسترجع بيانات المستخدمين دائماً من جدول أو قاموس مركزي `users: { [id]: User }` لضمان التزامن الفوري.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <circle cx="80" cy="90" r="30" fill="#6366f1" />
  <text x="80" y="95" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">SA</text>
  <circle cx="125" cy="90" r="30" fill="#0ea5e9" stroke="#0f172a" strokeWidth="4" />
  <text x="125" y="95" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">MK</text>
  <circle cx="170" cy="90" r="30" fill="#10b981" stroke="#0f172a" strokeWidth="4" />
  <text x="170" y="95" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">RY</text>
  <circle cx="215" cy="90" r="30" fill="#f59e0b" stroke="#0f172a" strokeWidth="4" />
  <text x="215" y="95" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">+3</text>
  <line x1="280" y1="40" x2="280" y2="140" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
  <rect x="310" y="55" width="250" height="70" rx="8" fill="#1e293b" stroke="#475569" />
  <text x="330" y="85" fill="#38bdf8" fontSize="13" fontWeight="bold">Single Source of Truth</text>
  <text x="330" y="108" fill="#94a3b8" fontSize="11">Card stores [userId], UI resolves details</text>
</svg>`
    },
    {
      id: "33.2.g",
      title: "تحديد الأدوار والصلاحيات (Granular Role-Based Permissions)",
      technicalTerm: {
        english: "Granular Board Permissions & Gatekeeping",
        pronunciation: "جرانيولار بورد بيرميشنز آند جيت كيبينج",
        arabicMeaning: "صلاحيات اللوحة الدقيقة وحراسة الإجراءات"
      },
      description: "تتطلب لوحات كانبان في الشركات نظام صلاحيات دقيق (Role-Based Access Control - RBAC) يحدد ما يمكن لكل مستخدم تنفيذه. على سبيل المثال: 'المشاهد' (Viewer) يمكنه فقط استعراض البطاقات والتعليق عليها دون سحبها أو نقلها، بينما 'العضو' (Member) يمكنه نقل المهام وتعديل حالتها وإضافة بطاقات جديدة، في حين يمتلك 'المسؤول' (Admin) والمالك (Owner) صلاحيات حذف الأعمدة وتغيير إعدادات المشروع وحذف اللوحة بالكامل.",
      realWorldAnalogy: "مثل متحف عام؛ الزوار العاديون (Viewers) يمكنهم فقط النظر إلى المعروضات والتقاط الصور، والمرشدون (Members) يمكنهم ترتيب الجولات، وأمين المتحف (Admin) فقط هو من يملك مفاتيح نقل اللوحات الأثرية وتغيير الصالات.",
      whyItMatters: "حماية اللوحات من العبث غير المقصود؛ منع الموظفين الجدد أو العملاء المشاهدين من حذف أعمدة الإنتاج أو مسح مهام حساسة بالخطأ.",
      syntax: "// مصفوفة صلاحيات كانبان\nconst PERMISSIONS = {\n  MOVE_TASK: ['owner', 'admin', 'member'],\n  DELETE_COLUMN: ['owner', 'admin'],\n  INVITE_MEMBERS: ['owner', 'admin']\n};\nconst canUser = (role, action) => PERMISSIONS[action]?.includes(role);",
      simpleExample: `// مكون لحراسة إجراءات اللوحة بناءً على الصلاحيات
import React from 'react';

export function ProtectedAction({ userRole, requiredRole = 'member', children, fallback = null }) {
  // سلم الرتب
  const roleHierarchy = { viewer: 1, member: 2, admin: 3, owner: 4 };

  const hasPermission = roleHierarchy[userRole] >= roleHierarchy[requiredRole];

  if (!hasPermission) {
    return fallback;
  }

  return <>{children}</>;
}`,
      advancedExample: `// Hook مخصص لفحص الصلاحيات الدقيقة للوحة كانبان
import { useMemo } from 'react';

// تعريف الصلاحيات المتاحة في لوحة كانبان
export const BOARD_CAPABILITIES = {
  CAN_REORDER_COLUMNS: 'CAN_REORDER_COLUMNS',
  CAN_DELETE_COLUMN: 'CAN_DELETE_COLUMN',
  CAN_DRAG_TASKS: 'CAN_DRAG_TASKS',
  CAN_EDIT_TASK: 'CAN_EDIT_TASK',
  CAN_DELETE_TASK: 'CAN_DELETE_TASK',
  CAN_MANAGE_SETTINGS: 'CAN_MANAGE_SETTINGS'
};

// خريطة الصلاحيات لكل دور
const ROLE_PERMISSIONS_MAP = {
  owner: Object.values(BOARD_CAPABILITIES),
  admin: [
    BOARD_CAPABILITIES.CAN_REORDER_COLUMNS,
    BOARD_CAPABILITIES.CAN_DELETE_COLUMN,
    BOARD_CAPABILITIES.CAN_DRAG_TASKS,
    BOARD_CAPABILITIES.CAN_EDIT_TASK,
    BOARD_CAPABILITIES.CAN_DELETE_TASK
  ],
  member: [
    BOARD_CAPABILITIES.CAN_DRAG_TASKS,
    BOARD_CAPABILITIES.CAN_EDIT_TASK
  ],
  viewer: []
};

export function useBoardPermissions(currentRole) {
  // حساب الصلاحيات النشطة للدور الحالي
  const permissions = useMemo(() => {
    return new Set(ROLE_PERMISSIONS_MAP[currentRole] || []);
  }, [currentRole]);

  // دالة فحص وجود صلاحية معينة
  const can = (capability) => permissions.has(capability);

  return {
    can,
    isReadOnly: currentRole === 'viewer',
    isAdmin: currentRole === 'admin' || currentRole === 'owner'
  };
}`,
      outputExplanation: "يوفر هذا الـ Hook آلية معيارية لفحص قدرات المستخدم في أي مكون (مثل تعطيل السحب والإفلات لـ Viewer، أو إخفاء زر حذف العمود لغير الـ Admin).",
      commonMistakes: "الاعتماد فقط على إخفاء الأزرار في الواجهة دون التحقق من الصلاحيات في معالج الأحداث `handleDragEnd`، مما يسمح للمستخدم المتقدم بالالتفاف على الحماية عبر فحص المتصفح.",
      bestPractices: "عطل خاصية `isDragDisabled` في مكتبات السحب والإفلات إذا كان المستخدم بدور `viewer`، وافحص الصلاحية دائماً في كل من الواجهة والخادم (Defense in Depth).",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <g transform="translate(30, 40)">
    <rect width="120" height="120" rx="8" fill="#1e293b" stroke="#64748b" />
    <text x="60" y="35" fill="#94a3b8" fontSize="13" fontWeight="bold" textAnchor="middle">Viewer</text>
    <text x="60" y="65" fill="#e2e8f0" fontSize="10" textAnchor="middle">👁 Read Only</text>
    <text x="60" y="85" fill="#e2e8f0" fontSize="10" textAnchor="middle">💬 Comments</text>
  </g>
  <g transform="translate(170, 40)">
    <rect width="120" height="120" rx="8" fill="#1e293b" stroke="#38bdf8" />
    <text x="60" y="35" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">Member</text>
    <text x="60" y="65" fill="#e2e8f0" fontSize="10" textAnchor="middle">✨ Create Tasks</text>
    <text x="60" y="85" fill="#e2e8f0" fontSize="10" textAnchor="middle">🖐 Drag & Drop</text>
  </g>
  <g transform="translate(310, 40)">
    <rect width="120" height="120" rx="8" fill="#1e293b" stroke="#818cf8" />
    <text x="60" y="35" fill="#818cf8" fontSize="13" fontWeight="bold" textAnchor="middle">Admin</text>
    <text x="60" y="65" fill="#e2e8f0" fontSize="10" textAnchor="middle">📋 Manage Cols</text>
    <text x="60" y="85" fill="#e2e8f0" fontSize="10" textAnchor="middle">🗑 Delete Tasks</text>
  </g>
  <g transform="translate(450, 40)">
    <rect width="120" height="120" rx="8" fill="#1e293b" stroke="#f59e0b" />
    <text x="60" y="35" fill="#f59e0b" fontSize="13" fontWeight="bold" textAnchor="middle">Owner</text>
    <text x="60" y="65" fill="#e2e8f0" fontSize="10" textAnchor="middle">⚙️ Board Settings</text>
    <text x="60" y="85" fill="#e2e8f0" fontSize="10" textAnchor="middle">🔐 Full Control</text>
  </g>
</svg>`
    },
    {
      id: "33.2.h",
      title: "إضافة التعليقات والمرفقات (Card Comments & Attachments)",
      technicalTerm: {
        english: "Card Discussion Thread & Asset Pipeline",
        pronunciation: "كارد ديسكشن ثريد آند أسيت بايبلاين",
        arabicMeaning: "سلسلة مناقشات البطاقة ومسار إدارة المرفقات"
      },
      description: "تحتوي كل بطاقة كانبان على تفاصيل داخلية تُعرض في نافذة مشروطة (Modal) أو درج جانبي (Slide-over Drawer). تشمل هذه التفاصيل سلسلة محادثات وتعليقات (Discussion Thread) تدعم الإشارات بالـ @mentions والتنسيق بنص Markdown، بالإضافة إلى مرفقات الملفات والصور مع معاينة مصغرة وإمكانية التنزيل والرفع المباشر إلى سحابة التخزين (S3/Cloudinary/Firebase).",
      realWorldAnalogy: "مثل ملف القضية في المحكمة؛ الغلاف الخارجي يحمل الاسم والعنوان فقط، لكن بفتح الملف تجد شهادات الشهود (التعليقات)، والمستندات والأدلة المصورة المرفقة (المرفقات).",
      whyItMatters: "يحول تطبيق الكانبان من مجرد قائمة مهام صامتة إلى بيئة عمل حية ونشطة تقلل من الحاجة للاجتماعات المطولة ورسائل البريد المتفرقة.",
      syntax: "// نموذج التعليق والمرفق\ninterface Comment { id: string; authorId: string; text: string; createdAt: string; }\ninterface Attachment { id: string; name: string; url: string; size: number; mimeType: string; }",
      simpleExample: `// قسم إضافة وعرض التعليقات داخل البطاقة
import React, { useState } from 'react';

export function CardComments({ comments = [], onAddComment }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddComment(text);
    setText('');
  };

  return (
    <div className="space-y-4">
      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">النشاط والتعليقات</h4>
      
      {/* نموذج كتابة تعليق جديد */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="اكتب تعليقاً..."
          className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
        />
        <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold">
          إرسال
        </button>
      </form>

      {/* قائمة التعليقات السابقة */}
      <div className="space-y-3">
        {comments.map(c => (
          <div key={c.id} className="p-3 bg-slate-900/60 rounded-lg text-xs border border-slate-800">
            <div className="flex justify-between text-slate-400 text-[10px] mb-1">
              <span className="font-semibold text-slate-200">{c.authorName}</span>
              <span>{new Date(c.createdAt).toLocaleTimeString('ar-EG')}</span>
            </div>
            <p className="text-slate-300 leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      advancedExample: `// معالج رفع المرفقات مع المعاينة وشريط التقدم
import React, { useState } from 'react';

export function CardAttachmentUploader({ taskId, onUploadComplete }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      setProgress(10);

      // محاكاة رفع الملف إلى السحابة مع تقدم زمني
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 20;
        });
      }, 150);

      // إنشاء كائن الملف المرفق
      setTimeout(() => {
        clearInterval(interval);
        setProgress(100);
        setUploading(false);

        const newAttachment = {
          id: \`att-\${Date.now()}\`,
          name: file.name,
          size: file.size,
          type: file.type,
          url: URL.createObjectURL(file),
          uploadedAt: new Date().toISOString()
        };

        onUploadComplete(taskId, newAttachment);
      }, 900);
    } catch (err) {
      console.error(err);
      setUploading(false);
    }
  };

  return (
    <div className="border border-dashed border-slate-700 hover:border-slate-500 rounded-xl p-4 text-center transition-colors">
      <input
        type="file"
        id={\`file-upload-\${taskId}\`}
        onChange={handleFileChange}
        disabled={uploading}
        className="hidden"
      />
      <label htmlFor={\`file-upload-\${taskId}\`} className="cursor-pointer space-y-1 block">
        <svg className="w-6 h-6 mx-auto text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
        <span className="text-xs font-semibold text-indigo-400 hover:text-indigo-300">انقر لرفع ملف أو صورة</span>
        <p className="text-[10px] text-slate-500">PNG, JPG, PDF بحد أقصى 10MB</p>
      </label>

      {uploading && (
        <div className="mt-3 w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
          <div className="bg-indigo-500 h-full transition-all duration-200" style={{ width: \`\${progress}%\` }} />
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "يوفر هذا الحل مكونين متكاملين: الأول لسجل نقاشات حي ومتفاعل للبطاقة، والآخر لمسار رفع ملفات مرن يزود المستخدم بتغذية راجعة فورية عن حالة الرفع والتقدم.",
      commonMistakes: "رفع الملفات كبيانات مشفرة بصيغة Base64 وتخزينها في قاعدة البيانات مباشرة بدلاً من استخدام خوادم التخزين السحابية المخصصة (Object Storage).",
      bestPractices: "قم بإنشاء عناوين URL موقعة مسبقاً (Presigned URLs) للرفع المباشر من المتصفح إلى السحابة لتفادي إرهاق خادم التطبيق الرئيسي.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="260" height="140" rx="10" fill="#1e293b" stroke="#334155" />
  <text x="50" y="55" fill="#38bdf8" fontSize="12" fontWeight="bold">Card Modal - Activity Stream</text>
  <rect x="50" y="70" width="220" height="35" rx="6" fill="#0f172a" />
  <text x="65" y="92" fill="#e2e8f0" fontSize="10">@Sara please review the UI spec</text>
  <rect x="50" y="115" width="220" height="35" rx="6" fill="#0f172a" />
  <text x="65" y="137" fill="#e2e8f0" fontSize="10">@Ahmed Done! Attached new mockups</text>
  <rect x="320" y="30" width="250" height="140" rx="10" fill="#1e293b" stroke="#334155" />
  <text x="340" y="55" fill="#a855f7" fontSize="12" fontWeight="bold">Attachments & Media</text>
  <rect x="340" y="75" width="105" height="75" rx="8" fill="#334155" />
  <text x="365" y="118" fill="#94a3b8" fontSize="11">design.png</text>
  <rect x="455" y="75" width="105" height="75" rx="8" fill="#334155" />
  <text x="480" y="118" fill="#94a3b8" fontSize="11">brief.pdf</text>
</svg>`
    },
    {
      id: "33.2.i",
      title: "إنشاء إشعارات فورية (Realtime Activity & Board Notifications)",
      technicalTerm: {
        english: "Realtime Event Subscriptions & Toasts",
        pronunciation: "ريال تايم إيفينت سبسكريبشنز آند توستس",
        arabicMeaning: "اشتراكات الأحداث اللحظية وتنبيهات الإشعارات"
      },
      description: "في البيئات التعاونية متعددة المستخدمين، يجب أن تنعكس تغييرات الآخرين فوراً على لوحة كانبان. عند قيام زميل بسحب بطاقة أو تعيينك في مهمة، يتم إرسال إشعار لحظي عبر WebSockets أو Server-Sent Events (SSE). يتضمن ذلك تحديث موقع البطاقة تلقائياً في واجهتك مع ظهور إشعار منبثق (Toast Notification) وقائمة مركزية للإشعارات غير المقروءة (Notification Bell).",
      realWorldAnalogy: "مثل جرس باب المنزل المزود بكاميرا ذكية؛ حين يصل زائر أو طرد، يصدر الجرس تنبيهاً صوتياً فورياً، وتظهر صورته على هاتفك، مع تسجيل وصوله في سجل الزيارات.",
      whyItMatters: "يمنع تضارب العمل (Concurrent Conflicts) كأن يقوم عضوان في الفريق بالعمل على نفس المهمة دون علمهما بنقلها إلى قائمة أخرى.",
      syntax: "// الاشتراك في أحداث اللوحة اللحظية\nsocket.on('BOARD_UPDATED', (payload) => {\n  applyExternalChange(payload);\n  showToast(\`\${payload.actorName} \${payload.actionDescription}\`);\n});",
      simpleExample: `// مكون جرس الإشعارات مع شارة العداد غير المقروء
import React, { useState } from 'react';

export function NotificationBell({ notifications = [], onMarkAsRead }) {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl bg-slate-800 text-slate-350 hover:text-white hover:bg-slate-700 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-[10px] font-bold text-white rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-72 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-3 z-50 space-y-2">
          <div className="flex justify-between items-center pb-2 border-b border-slate-700">
            <span className="text-xs font-bold text-white">الإشعارات اللحظية</span>
            <button onClick={onMarkAsRead} className="text-[10px] text-indigo-400 hover:underline">قراءة الكل</button>
          </div>
          <div className="max-h-60 overflow-y-auto space-y-2">
            {notifications.map(n => (
              <div key={n.id} className="p-2 bg-slate-900 rounded-lg text-xs text-slate-300">
                {n.message}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}`,
      advancedExample: `// Hook لإدارة استقبال التغييرات اللحظية وتطبيقها بذكاء مع تجنب تكرار الصوت
import { useEffect, useRef } from 'react';

export function useRealtimeBoardSync(boardId, currentUserId, onRemoteUpdate) {
  const audioRef = useRef(typeof Audio !== 'undefined' ? new Audio('/notification.mp3') : null);

  useEffect(() => {
    // محاكاة الاتصال بقناة WebSocket للوحة المحددة
    const ws = new WebSocket(\`wss://api.kanban.dev/boards/\${boardId}/ws\`);

    ws.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);

        // تجاهل التحديثات الصادرة من المستخدم نفسه لتجنب الوميض المزدوج
        if (payload.userId === currentUserId) return;

        // تطبيق التحديث الخارجي في شجرة المكونات
        onRemoteUpdate(payload);

        // تشغيل صوت تنبيه ناعم
        audioRef.current?.play().catch(() => {});
      } catch (e) {
        console.error("Failed to parse realtime event", e);
      }
    };

    return () => {
      ws.close();
    };
  }, [boardId, currentUserId, onRemoteUpdate]);
}`,
      outputExplanation: "يحافظ هذا النظام على تزامن اللوحة عبر الإنترنت، ويتجاهل بذكاء أحداث المستخدم نفسه لمنع التكرار البصري المربك، مع إخطاره فورياً بأي تغيير يقوم به زملاؤه.",
      commonMistakes: "تطبيق التحديث الخارجي القادم من الخادم فوق البطاقة التي يقوم المستخدم الحالي بسحبها في نفس الثانية، مما يؤدي إلى قطع السحب وارتداد البطاقة لمكانها الأصلي.",
      bestPractices: "قم بحظر تحديثات العمود (Lock Column Drops) أو تجميد موضع البطاقة النشطة التي يسحبها المستخدم حالياً حتى يكتمل حدث الإفلات الخاص به.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="40" y="45" width="140" height="90" rx="10" fill="#1e293b" stroke="#38bdf8" />
  <text x="60" y="75" fill="#38bdf8" fontSize="12" fontWeight="bold">User A (Cairo)</text>
  <text x="60" y="105" fill="#94a3b8" fontSize="11">Moves Task to Done</text>
  <path d="M 185 90 L 255 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <circle cx="300" cy="90" r="35" fill="#4338ca" />
  <text x="300" y="94" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">WebSocket</text>
  <path d="M 340 90 L 410 90" stroke="#10b981" strokeWidth="2" />
  <rect x="415" y="45" width="150" height="90" rx="10" fill="#1e293b" stroke="#10b981" />
  <text x="435" y="75" fill="#34d399" fontSize="12" fontWeight="bold">User B (Dubai)</text>
  <text x="435" y="105" fill="#94a3b8" fontSize="11">Instant Toast & Move</text>
</svg>`
    },
    {
      id: "33.2.j",
      title: "إدارة البيانات والتخزين المؤقت (Data Management & TanStack Query)",
      technicalTerm: {
        english: "Server State Caching & Persistence",
        pronunciation: "سيرفر ستيت كاشينج آند بيرسيستنس",
        arabicMeaning: "التخزين المؤقت لحالة الخادم واستدامتها"
      },
      description: "تحتاج لوحات المشاريع الضخمة إلى استراتيجية تخزين مؤقت قوية تعتمد على مكتبة إدارة حالة الخادم مثل TanStack Query (React Query). يتم تخزين اللوحة تحت مفتاح استعلام `['board', boardId]` مع ضبط `staleTime` مدروس لمنع إرسال طلبات شبكة غير ضرورية مع كل تفاعل، واستخدام ميزة `queryClient.setQueryData` لتحديث الذاكرة المؤقتة محلياً دون انتظار الخادم.",
      realWorldAnalogy: "مثل حافظة الأوراق المؤقتة في يد مدير المشروع؛ ينظر فيها فوراً لمعرفة حالة المشروع دون الحاجة للاتصال بالأرشيف في كل ثانية، ويقوم الأرشيف بتحديث حافظته بهدوء في الخلفية.",
      whyItMatters: "يحول التطبيق من تجربة بطيئة تعتمد على مؤشرات التحميل (Spinners) في كل حركة إلى تطبيق فائق السرعة يمنح انطباع التطبيقات المكتبية الأصلية (Native Desktop App Feel).",
      syntax: "// استعلام اللوحة مع TanStack Query\nconst { data: board, isLoading } = useQuery({\n  queryKey: ['board', boardId],\n  queryFn: () => fetchBoard(boardId),\n  staleTime: 1000 * 60 * 5\n});",
      simpleExample: `// استرجاع بيانات اللوحة مع معالجة التحميل والأخطاء
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export function BoardContainer({ boardId }) {
  const { data: board, isLoading, isError, error } = useQuery({
    queryKey: ['board', boardId],
    queryFn: async () => {
      const res = await fetch(\`/api/boards/\${boardId}\`);
      if (!res.ok) throw new Error('فشل تحميل اللوحة');
      return res.json();
    }
  });

  if (isLoading) {
    return <div className="p-8 text-center text-slate-400 font-medium">جاري تحميل لوحة المشروع...</div>;
  }

  if (isError) {
    return <div className="p-8 text-center text-rose-400 font-bold">{error.message}</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-white mb-4">{board.title}</h2>
      <div className="text-sm text-slate-400">عدد الأعمدة: {board.columns.length}</div>
    </div>
  );
}`,
      advancedExample: `// إدارة استعلامات وطفرات اللوحة مع إبطال الذاكرة المؤقتة الذكي
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useBoardMutations(boardId) {
  const queryClient = useQueryClient();

  // طفرة إضافة عمود جديد
  const addColumnMutation = useMutation({
    mutationFn: async (columnData) => {
      const res = await fetch(\`/api/boards/\${boardId}/columns\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(columnData)
      });
      return res.json();
    },
    // عند نجاح الإضافة يتم تحديث الكاش وإبطال الاستعلام المتأثر
    onSuccess: (newColumn) => {
      queryClient.setQueryData(['board', boardId], (old) => {
        if (!old) return old;
        return {
          ...old,
          columnOrder: [...old.columnOrder, newColumn.id],
          columns: { ...old.columns, [newColumn.id]: newColumn }
        };
      });
    }
  });

  return { addColumn: addColumnMutation.mutate };
}`,
      outputExplanation: "يوضح الكود كيفية الحفاظ على حداثة بيانات اللوحة وتكاملها التام بين الذاكرة المؤقتة والخادم عبر استعلامات وطفرات TanStack Query المعيارية.",
      commonMistakes: "إعادة جلب (Refetch) بيانات اللوحة كاملة بعد كل عملية سحب بطاقة صغيرة، مما يسبب وميضاً في الشاشة وهدراً في استهلاك الخادم والشبكة.",
      bestPractices: "اضبط `staleTime` على دقيقتين على الأقل للوحات الكانبان، واعتمد على طفرات التحديث المباشر للذاكرة المؤقتة (Direct Cache Invalidation) بدلاً من إعادة الجلب القسرية.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <circle cx="100" cy="90" r="45" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
  <text x="100" y="85" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">React UI</text>
  <text x="100" y="105" fill="#94a3b8" fontSize="10" textAnchor="middle">Instant Render</text>
  <path d="M 150 90 L 230 90" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="235" y="45" width="130" height="90" rx="10" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="300" y="85" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">TanStack Cache</text>
  <text x="300" y="105" fill="#94a3b8" fontSize="10" textAnchor="middle">['board', id]</text>
  <path d="M 370 90 L 450 90" stroke="#10b981" strokeWidth="2" />
  <circle cx="495" cy="90" r="45" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="495" y="85" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">Backend DB</text>
  <text x="495" y="105" fill="#94a3b8" fontSize="10" textAnchor="middle">Sync & Persist</text>
</svg>`
    },
    {
      id: "33.2.k",
      title: "تطبيق التحديثات المتفائلة (Optimistic Drag Updates with Rollback)",
      technicalTerm: {
        english: "Optimistic UI & Mutation Rollbacks",
        pronunciation: "أوبتيميستك يو آي آند ميوتيشن رول باكس",
        arabicMeaning: "واجهة المستخدم المتفائلة والتراجع عند فشل الطفرات"
      },
      description: "التحديث المتفائل (Optimistic Update) هو التقنية التي تجعل تطبيقات مثل Linear وTrello تبدو سريعة بصورة خيالية. عند سحب مهمة من عمود إلى آخر، يتم تحديث الواجهة فوراً دون انتظار استجابة الخادم. وفي حال انقطاع الإنترنت أو حدوث خطأ 500 في الخادم، يتم التقاط الاستثناء والتراجع فوراً (Rollback) عن الحالة المحلية لإعادة البطاقة إلى موقعها الأصلي الدقيق مع إظهار تنبيه يوضح سبب الفشل.",
      realWorldAnalogy: "مثل إرسال رسالة في تطبيق واتساب؛ تظهر الرسالة فوراً في الدردشة مع علامة ساعة، وإذا فشل الاتصال تظهر علامة تعجب حمراء بجانبها مع زر إعادة المحاولة، بدلاً من منعك من الكتابة حتى يتأكد الخادم.",
      whyItMatters: "يزيل زمن استجابة الشبكة (Network Latency) البالغ مئات الأجزاء من الثانية من تجربة المستخدم، مما يمنحه شعوراً بالتحكم التام والسرعة الخاطفة.",
      syntax: "// نمط التحديث المتفائل مع TanStack Query\nuseMutation({\n  onMutate: async (newOrder) => {\n    await queryClient.cancelQueries({ queryKey });\n    const previousState = queryClient.getQueryData(queryKey);\n    queryClient.setQueryData(queryKey, applyOptimisticChange(previousState, newOrder));\n    return { previousState };\n  },\n  onError: (err, newOrder, context) => {\n    queryClient.setQueryData(queryKey, context.previousState);\n  }\n});",
      simpleExample: `// مثال مبسط لمفهوم التراجع عند فشل التحديث
import React, { useState } from 'react';

export function SimpleOptimisticToggle() {
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState(null);

  const handleToggle = async () => {
    const previous = isDone;
    // تحديث متفائل فوري للواجهة
    setIsDone(!previous);
    setError(null);

    try {
      // محاكاة طلب خادم قد يفشل
      await new Promise((resolve, reject) => {
        setTimeout(() => (Math.random() > 0.5 ? resolve() : reject(new Error('فشل حفظ الحالة!'))), 700);
      });
    } catch (err) {
      // التراجع الفوري عن الحالة السابقة
      setIsDone(previous);
      setError(err.message);
    }
  };

  return (
    <div className="p-4 bg-slate-800 rounded-xl space-y-2">
      <button 
        onClick={handleToggle}
        className={\`px-4 py-2 rounded-lg text-xs font-bold \${isDone ? 'bg-emerald-600' : 'bg-slate-700'} text-white\`}
      >
        {isDone ? '✓ مكتملة (متفائل)' : '○ غير مكتملة'}
      </button>
      {error && <p className="text-rose-400 text-xs">{error} (تم التراجع)</p>}
    </div>
  );
}`,
      advancedExample: `// طفرة سحب كانبان المتفائلة الكاملة مع التراجع التلقائي
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useOptimisticTaskMove(boardId) {
  const queryClient = useQueryClient();
  const queryKey = ['board', boardId];

  return useMutation({
    // دالة استدعاء الخادم الفعلية
    mutationFn: async ({ taskId, sourceColId, destColId, newIndex }) => {
      const res = await fetch(\`/api/boards/\${boardId}/tasks/\${taskId}/move\`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sourceColId, destColId, newIndex })
      });
      if (!res.ok) throw new Error('فشل تحديث موضع المهمة على الخادم');
      return res.json();
    },

    // 1. قبل استدعاء الخادم: تطبيق التغيير فوراً وحفظ النسخة الاحتياطية
    onMutate: async ({ taskId, sourceColId, destColId, newIndex }) => {
      // إلغاء أي استعلامات سارية لعدم الكتابة فوق التحديث المتفائل
      await queryClient.cancelQueries({ queryKey });

      // التقاط لقطة للحالة السابقة (Snapshot)
      const previousBoard = queryClient.getQueryData(queryKey);

      // تحديث الكاش متفائلاً
      queryClient.setQueryData(queryKey, (old) => {
        if (!old) return old;
        const sourceTaskIds = Array.from(old.columns[sourceColId].taskIds).filter(id => id !== taskId);
        const destTaskIds = Array.from(old.columns[destColId].taskIds);
        destTaskIds.splice(newIndex, 0, taskId);

        return {
          ...old,
          columns: {
            ...old.columns,
            [sourceColId]: { ...old.columns[sourceColId], taskIds: sourceTaskIds },
            [destColId]: { ...old.columns[destColId], taskIds: destTaskIds }
          }
        };
      });

      // إرجاع السياق المحتوي على النسخة السابقة
      return { previousBoard };
    },

    // 2. في حال حدوث خطأ: التراجع الدقيق للقطة السابقة
    onError: (err, variables, context) => {
      if (context?.previousBoard) {
        queryClient.setQueryData(queryKey, context.previousBoard);
      }
      alert(\`تعذر حفظ ترتيب البطاقات: \${err.message}\`);
    },

    // 3. عند انتهاء العملية دائماً: إعادة مزامنة الكاش للتأكد من الاتساق
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    }
  });
}`,
      outputExplanation: "يوفر هذا الكود أماناً بنكياً لتجربة المستخدم؛ حيث تتحرك البطاقات بلمح البصر دون أي بطء، وفي حال تعثر الشبكة يتم استرجاع الترتيب الأصلي تلقائياً دون فقدان بيانات.",
      commonMistakes: "نسيان إلغاء الاستعلامات الجارية (`cancelQueries`) في دالة `onMutate`، مما يؤدي إلى استلام استجابة استعلام قديم في منتصف السحب ومسح التحديث المتفائل.",
      bestPractices: "احرص دائماً على إرجاع كائن `{ previousBoard }` في `onMutate` ليتم تسليمه كمعامل ثالث في `onError` لإجراء التراجع الدقيق.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="30" y="35" width="160" height="130" rx="10" fill="#1e293b" stroke="#38bdf8" />
  <text x="45" y="65" fill="#38bdf8" fontSize="12" fontWeight="bold">1. onMutate</text>
  <text x="45" y="90" fill="#cbd5e1" fontSize="11">Take Snapshot</text>
  <text x="45" y="115" fill="#10b981" fontSize="11">Render Instantly (0ms)</text>
  <path d="M 195 100 L 235 100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="35" width="150" height="130" rx="10" fill="#1e293b" stroke="#f59e0b" />
  <text x="255" y="65" fill="#f59e0b" fontSize="12" fontWeight="bold">2. Server Request</text>
  <text x="255" y="90" fill="#cbd5e1" fontSize="11">Async HTTP PATCH</text>
  <text x="255" y="115" fill="#94a3b8" fontSize="11">Network in flight...</text>
  <path d="M 395 100 L 435 100" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
  <rect x="440" y="35" width="130" height="130" rx="10" fill="#1e293b" stroke="#ef4444" />
  <text x="455" y="65" fill="#f87171" fontSize="12" fontWeight="bold">3. onError Rollback</text>
  <text x="455" y="90" fill="#ef4444" fontSize="11">Network Failed!</text>
  <text x="455" y="115" fill="#38bdf8" fontSize="11">Restore Snapshot</text>
</svg>`
    },
    {
      id: "33.2.l",
      title: "كتابة اختبارات End-to-End الشاملة لتطبيق Kanban",
      technicalTerm: {
        english: "End-to-End Testing with Playwright",
        pronunciation: "إند تو إند تيستنج وذ بلاي رايت",
        arabicMeaning: "اختبارات النهاية إلى النهاية باستخدام بلاي رايت"
      },
      description: "نظراً لاعتماد لوحات كانبان على تفاعلات السحب والإفلات المعقدة التي يصعب محاكاتها بدقة في بيئة jsdom العادية، تعتبر اختبارات النهاية إلى النهاية (E2E) باستخدام Playwright أو Cypress هي المعيار الذهبي. يختبر سيناريو E2E تدفق العمل الحقيقي: تسجيل الدخول، إنشاء عمود جديد، إضافة بطاقة، سحب البطاقة بالماوس وإفلاتها في عمود آخر، والتحقق من حفظ الموضع الجديد بعد إعادة تحديث الصفحة.",
      realWorldAnalogy: "مثل تجربة قيادة سيارة جديدة على مضمار اختبار حقيقي بوجود مطبات ومنعطفات حادة، للتأكد من ثبات العجلات والمكابح في ظروف الاستخدام الواقعية.",
      whyItMatters: "يضمن عدم حدوث انكسار في تجربة المستخدم الحرجة (Critical User Journey) قبل إطلاق التحديثات لبيئة الإنتاج، خصوصاً بعد تعديل خوارزميات السحب أو هيكلة الأعمدة.",
      syntax: "// اختبار السحب والإفلات بواسطة Playwright\ntest('should drag card to another column', async ({ page }) => {\n  await page.dragAndDrop('[data-testid=\"card-1\"]', '[data-testid=\"column-done\"]');\n  await expect(page.locator('[data-testid=\"column-done\"]')).toContainText('Task 1');\n});",
      simpleExample: `// اختبار Playwright للتحقق من إضافة عمود ومهمة بنجاح
import { test, expect } from '@playwright/test';

test('Kanban: إضافة بطاقة جديدة إلى عمود قيد الانتظار', async ({ page }) => {
  // 1. الانتقال إلى صفحة لوحة المشروع
  await page.goto('http://localhost:3000/boards/demo-board');

  // 2. النقر على زر إضافة بطاقة
  await page.click('[data-testid="add-task-btn-col-todo"]');

  // 3. كتابة عنوان المهمة والضغط على إدخال
  await page.fill('[data-testid="task-title-input"]', 'كتابة مواصفات واجهة المستخدم');
  await page.keyboard.press('Enter');

  // 4. التحقق من ظهور البطاقة في العمود الصحيح
  const taskCard = page.locator('[data-testid="column-todo"]').getByText('كتابة مواصفات واجهة المستخدم');
  await expect(taskCard).toBeVisible();
});`,
      advancedExample: `// سيناريو اختبار E2E متقدم لاختبار سحب البطاقة واستمراريتها بعد التحديث
import { test, expect } from '@playwright/test';

test.describe('Kanban Drag & Drop End-to-End Suite', () => {
  test('تحريك بطاقة بين الأعمدة واستمرار الموضع بعد Refresh', async ({ page }) => {
    // 1. الدخول إلى اللوحة
    await page.goto('/boards/project-apollo');
    await page.waitForSelector('[data-column-id="in-progress"]');

    // 2. تحديد موقع البطاقة المصدر وحاوية الهدف
    const sourceCard = page.locator('[data-task-id="task-42"]');
    const targetColumn = page.locator('[data-column-id="done"] [data-droppable-area="true"]');

    // التحقق المبدئي من وجود البطاقة في عمود قيد الإنجاز
    await expect(page.locator('[data-column-id="in-progress"]')).toContainText('إعداد خادم WebSockets');

    // 3. تنفيذ عملية السحب والإفلات بالماوس عبر Playwright DragTo API
    await sourceCard.dragTo(targetColumn);

    // 4. التحقق المتفائل من انتقال البطاقة إلى عمود مكتمل فوراً
    await expect(page.locator('[data-column-id="done"]')).toContainText('إعداد خادم WebSockets');

    // 5. محاكاة تحديث الصفحة للتحقق من استمرار البيانات في الخادم
    await page.reload();

    // 6. التحقق من بقاء البطاقة في عمود 'مكتمل' بعد إعادة التحميل
    const persistedCard = page.locator('[data-column-id="done"]').getByText('إعداد خادم WebSockets');
    await expect(persistedCard).toBeVisible();
  });
});`,
      outputExplanation: "يقوم هذا الاختبار بمحاكاة نقرات وسحبات المستخدم الحقيقية، والتحقق من انتقال البطاقة بصرياً، ثم التأكد الحاسم من حفظ الحالة واستقرارها بعد إعادة تحميل الصفحة.",
      commonMistakes: "استخدام مهلات زمنية ثابتة مثل `page.waitForTimeout(3000)` بدلاً من انتظار ظهور العناصر الذاتي (`await expect(locator).toBeVisible()`)، مما يبطئ الاختبارات ويجعلها غير مستقرة (Flaky).",
      bestPractices: "استخدم خصائص مخصصة للاختبار مثل `data-testid` أو `data-task-id` بدلاً من الاعتماد على فئات CSS التابعة لـ Tailwind التي تتغير مع إعادة التصميم.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="30" y="35" width="160" height="130" rx="10" fill="#1e293b" stroke="#38bdf8" />
  <text x="50" y="65" fill="#38bdf8" fontSize="12" fontWeight="bold">Step 1: Action</text>
  <text x="50" y="90" fill="#cbd5e1" fontSize="11">dragTo(targetCol)</text>
  <text x="50" y="115" fill="#94a3b8" fontSize="10">Simulate Real Mouse</text>
  <path d="M 195 100 L 235 100" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="35" width="150" height="130" rx="10" fill="#1e293b" stroke="#10b981" />
  <text x="255" y="65" fill="#34d399" fontSize="12" fontWeight="bold">Step 2: Assert UI</text>
  <text x="255" y="90" fill="#cbd5e1" fontSize="11">toBeVisible()</text>
  <text x="255" y="115" fill="#94a3b8" fontSize="10">Verify Optimistic State</text>
  <path d="M 395 100 L 435 100" stroke="#10b981" strokeWidth="2" />
  <rect x="440" y="35" width="130" height="130" rx="10" fill="#1e293b" stroke="#f59e0b" />
  <text x="455" y="65" fill="#f59e0b" fontSize="12" fontWeight="bold">Step 3: Persistence</text>
  <text x="455" y="90" fill="#cbd5e1" fontSize="11">page.reload()</text>
  <text x="455" y="115" fill="#94a3b8" fontSize="10">Confirm Backend Saved</text>
</svg>`
    }
  ],
  quizzes: [
    {
      id: "quiz-33-2-1",
      question: "لماذا يُفضل تطبيع بيانات الأعمدة والمهام (Data Normalization) في لوحات كانبان المعقدة؟",
      options: [
        "لتقليل استهلاك الإنترنت فقط",
        "لعزل إعادة التصيير، حيث يؤدي تعديل بطاقة واحدة إلى إعادة تصيير تلك البطاقة فقط بدلاً من إعادة تصيير العمود بأكمله",
        "لأن React تمنع استخدام المصفوفات المتداخلة بشكل قاطع",
        "لإجبار المتصفح على تشغيل تقنية GPU التلقائية"
      ],
      correctAnswer: 1,
      explanation: "تطبيع البيانات يكسر الاعتماديات المتداخلة؛ مما يجعل تعديل أي بطاقة عملية فورية تستهدف معرف البطاقة فقط دون إجبار مصفوفة العمود أو شجرة اللوحة على إعادة التصيير غير الضرورية."
    },
    {
      id: "quiz-33-2-2",
      question: "ما الدور الجوهري للخاصية `onMutate` عند تنفيذ السحب المتفائل مع TanStack Query؟",
      options: [
        "إرسال رسالة بريد إلكتروني للمستخدم فوراً",
        "إلغاء الاستعلامات الجارية، والتقاط لقطة احتياطية (Snapshot) للحالة السابقة، وتطبيق الموضع الجديد فوراً في الكاش",
        "حذف قاعدة البيانات وإعادة بنائها",
        "تشغيل ملف الصوت الخاص بالحركة فقط"
      ],
      correctAnswer: 1,
      explanation: "تسمح `onMutate` بالتقاط نسخة الحالة السابقة لحفظها كشبكة أمان، وتطبيق التعديل في الواجهة محلياً في 0 ميلي ثانية، لإرجاعها في دالة `onError` في حال فشل الخادم."
    },
    {
      id: "quiz-33-2-3",
      question: "ما أفضل استراتيجية لمعالجة تضارب السحب اللحظي عندما يقوم زميل آخر بنقل مهمة تسحبها أنت حالياً؟",
      options: [
        "إغلاق التطبيق فوراً وحذف الجلسة",
        "تجميد أو تجاهل التحديثات الواردة لتلك البطاقة بعينها طالما كانت بحوزة المستخدم وسحبها جاري حتى انتهاء حدث onDragEnd",
        "تحديث الصفحة قسرياً ومسح كل التغييرات",
        "منع جميع المستخدمين من استخدام اللوحة في نفس الوقت"
      ],
      correctAnswer: 1,
      explanation: "حظر تحديث البطاقة النشطة التي يسحبها المستخدم محلياً يمنع انهيار الواجهة وارتداد المؤشر، ويتم حل أي تضارب حقيقي بمجرد اكتمال عملية الإفلات."
    }
  ],
  practicalExercise: {
    id: "exercise-33-2",
    title: "بناء لوحة كانبان مصغرة مع السحب والإفلات والتحديث المتفائل",
    description: "قم بإنشاء مكون كانبان تفاعلي متكامل يحتوي على 3 أعمدة (قيد الانتظار، جاري العمل، مكتمل)، يدعم إضافة مهمة جديدة وتغيير موضعها بين الأعمدة مع مؤشر لوني للحالة وحفظ الترتيب في LocalStorage.",
    hints: [
      "استخدم كائناً يحتوي على columns وtasks مع معرفات فريدة.",
      "استخدم HTML5 onDragStart وonDragOver وonDrop للتبسيط دون مكتبات خارجية.",
      "احرص على كتابة تعليق عربي فوق كل سطر برمجي يوضح الغرض من الكود."
    ],
    solution: `// الحل النموذجي لمكون لوحة كانبان التفاعلية مع حفظ الحالة
import React, { useState, useEffect } from 'react';

// الحالة الافتراضية الأولية للوحة
const DEFAULT_BOARD = {
  columns: {
    'col-1': { id: 'col-1', title: 'قيد الانتظار', color: 'border-amber-500', taskIds: ['t-1', 't-2'] },
    'col-2': { id: 'col-2', title: 'جاري العمل', color: 'border-sky-500', taskIds: ['t-3'] },
    'col-3': { id: 'col-3', title: 'مكتمل', color: 'border-emerald-500', taskIds: [] }
  },
  tasks: {
    't-1': { id: 't-1', title: 'تصميم هيكل البيانات', tag: 'Architect' },
    't-2': { id: 't-2', title: 'إعداد مكونات Tailwind', tag: 'UI' },
    't-3': { id: 't-3', title: 'برمجة محرك السحب', tag: 'Core' }
  },
  columnOrder: ['col-1', 'col-2', 'col-3']
};

export function MiniKanbanBoard() {
  // حالة اللوحة المحملة من التخزين المحلي أو الافتراضية
  const [board, setBoard] = useState(() => {
    // قراءة البيانات من التخزين المحلي
    const saved = localStorage.getItem('mini_kanban_data');
    // إرجاع المحفوظ أو الافتراضي
    return saved ? JSON.parse(saved) : DEFAULT_BOARD;
  });

  // حالة لتتبع المهمة التي يتم سحبها حالياً
  const [draggedTaskId, setDraggedTaskId] = useState(null);
  // حالة العمود المصدر للسحب
  const [sourceColId, setSourceColId] = useState(null);

  // مزامنة التغييرات مع LocalStorage عند كل تعديل
  useEffect(() => {
    localStorage.setItem('mini_kanban_data', JSON.stringify(board));
  }, [board]);

  // بدء عملية السحب
  const handleDragStart = (taskId, colId) => {
    setDraggedTaskId(taskId);
    setSourceColId(colId);
  };

  // السماح بالإفلات فوق العمود
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // معالجة الإسقاط داخل العمود المستهدف
  const handleDrop = (targetColId) => {
    if (!draggedTaskId || !sourceColId || sourceColId === targetColId) return;

    setBoard(prev => {
      // إزالة المعرف من العمود المصدر
      const newSourceIds = prev.columns[sourceColId].taskIds.filter(id => id !== draggedTaskId);
      // إضافة المعرف إلى العمود الهدف
      const newTargetIds = [...prev.columns[targetColId].taskIds, draggedTaskId];

      return {
        ...prev,
        columns: {
          ...prev.columns,
          [sourceColId]: { ...prev.columns[sourceColId], taskIds: newSourceIds },
          [targetColId]: { ...prev.columns[targetColId], taskIds: newTargetIds }
        }
      };
    });

    // إعادة تصفير مؤشرات السحب
    setDraggedTaskId(null);
    setSourceColId(null);
  };

  return (
    <div className="flex gap-4 p-6 bg-slate-900 rounded-2xl overflow-x-auto min-h-[420px] font-sans">
      {board.columnOrder.map(colId => {
        const column = board.columns[colId];
        return (
          <div
            key={column.id}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(column.id)}
            className={\`w-72 bg-slate-800/90 rounded-xl p-4 flex flex-col border-t-4 \${column.color} shadow-lg\`}
          >
            {/* عنوان العمود وعدد المهام */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm text-slate-100">{column.title}</h3>
              <span className="text-xs bg-slate-700 px-2 py-0.5 rounded-full text-slate-300 font-mono">
                {column.taskIds.length}
              </span>
            </div>

            {/* مساحة البطاقات */}
            <div className="space-y-3 flex-1 min-h-[160px]">
              {column.taskIds.map(taskId => {
                const task = board.tasks[taskId];
                if (!task) return null;
                return (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={() => handleDragStart(task.id, column.id)}
                    className="p-3 bg-slate-750 hover:bg-slate-700 rounded-lg cursor-grab active:cursor-grabbing border border-slate-650 transition-all select-none shadow"
                  >
                    <div className="text-xs font-semibold text-white mb-2">{task.title}</div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                      {task.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}`
  },
  topicInfographic: `<svg viewBox="0 0 600 240" className="w-full h-auto">
  <rect width="600" height="240" rx="16" fill="#0f172a" />
  <text x="300" y="35" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">Kanban Enterprise Architecture Blueprint</text>
  <rect x="40" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="115" y="85" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">State Layer</text>
  <text x="115" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Normalized Store</text>
  <text x="115" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Hash Map ID Lookups</text>
  <text x="115" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Ordered taskIds[]</text>
  <text x="115" y="185" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">O(1) Mutations</text>
  <path d="M 195 135 L 235 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="315" y="85" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">DND & Optimistic</text>
  <text x="315" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Instant 0ms Move</text>
  <text x="315" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">State Snapshotting</text>
  <text x="315" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Automatic Rollback</text>
  <text x="315" y="185" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">Zero Latency UI</text>
  <path d="M 395 135 L 435 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="440" y="60" width="130" height="150" rx="10" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="505" y="85" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Sync & Security</text>
  <text x="505" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">WebSockets Sync</text>
  <text x="505" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Granular RBAC</text>
  <text x="505" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Playwright E2E</text>
  <text x="505" y="185" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Enterprise Grade</text>
</svg>`
};

