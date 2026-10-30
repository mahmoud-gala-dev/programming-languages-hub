// section14Meta.js - القسم 14: TypeScript مع React

export const section14Meta = {
  id: 14,
  title: "TypeScript مع React",
  englishTitle: "TypeScript with React",
  description: "المرجع الشامل لاحتراف كتابة تطبيقات React قوية، آمنة، وخالية من أخطاء زمن التشغيل باستخدام TypeScript، بدءاً من المبادئ والأنواع الأساسية والـ Generics، مروراً بتوثيق المكونات والخصائص والخطافات، وصولاً إلى الأنماط المعمارية الكبرى وتكامل Zod و Redux و TanStack Query.",
  summary: [
    "تفعيل Strict Mode في tsconfig.json أمر غير قابل للتفاوض لضمان كشف الأخطاء وحماية الشفرة من انهيارات null و undefined.",
    "استخدم `interface` لتعريف هياكل الكائنات وProps القابلة للتوسيع، واستخدم `type` لتعريف الـ Unions والبدائيات والحسابات المركبة.",
    "احظر استخدام `any` في مشروعك تماماً؛ استبدله بـ `unknown` مع حراس الأنواع (Type Guards) لفرض الأمان المطلق.",
    "استعن بـ `ReactNode` لتمثيل أي محتوى يقبل التصيير في React (نصوص، أرقام، عناصر، مصفوفات)، واستخدم `ReactElement` عند الرغبة في تقييد الخاصية بعنصر JSX وحيد.",
    "احرص على استخدام `as const` عند إرجاع مصفوفات Tuples من الخطافات المخصصة، وعند تعريف مفاتيح استعلامات TanStack Query.",
    "طبّق نمط الاتحادات المميزة (Discriminated Unions) في حالات الواجهة غير المتزامنة لمنع اجتماع حالات مستحيلة مثل التحميل والخطأ في آن واحد.",
    "وحّد استجابات الخادم والشبكة عبر أغلفة عامة `ApiResponse<T>`، واستخدم `import type` لمنع تضمين أي كود وهمي في حزمة الإنتاج.",
    "عامل كافة البيانات القادمة من الخارج (الشبكة، التخزين المحلي، النماذج) كبيانات مجهولة، وقم بفحصها في زمن التشغيل باستخدام Zod أو دوال التحقق المخصصة."
  ],
  cheatSheet: [
    {
      concept: "Primitive Types",
      syntax: "let count: number = 10; let name: string = 'React';",
      description: "الأنواع البدائية الأساسية في TypeScript (number, string, boolean)."
    },
    {
      concept: "Array & Tuple",
      syntax: "const list: string[] = []; const pair: [string, number] = ['Age', 25];",
      description: "المصفوفات العادية تقبل عناصر من نفس النوع، بينما Tuple يحدد نوع كل موضع بدقة."
    },
    {
      concept: "Interface vs Type",
      syntax: "interface User { id: string; } | type Status = 'open' | 'closed';",
      description: "تُفضل الواجهات للكائنات وProps، والـ Types للاتحادات والأنواع البدائية."
    },
    {
      concept: "Union Types",
      syntax: "type Theme = 'light' | 'dark' | 'system';",
      description: "تقييد المتغير بمجموعة محددة من القيم الحرفية المسموحة."
    },
    {
      concept: "Optional Properties",
      syntax: "interface CardProps { title: string; subtitle?: string; }",
      description: "إضافة علامة الاستفهام `?` تجعل الخاصية اختيارية ومسموحاً بإغفالها."
    },
    {
      concept: "Generics",
      syntax: "function wrap<T>(val: T): { data: T } { return { data: val }; }",
      description: "إنشاء دوال ومكونات عامة تقبل وتتعامل مع أي نوع بيانات مع الحفاظ على دقته."
    },
    {
      concept: "Typing Props",
      syntax: "interface ButtonProps { label: string; onClick: () => void; }",
      description: "تحديد واجهة خصائص المكون بوضوح لضمان تمرير كافة البيانات الإلزامية."
    },
    {
      concept: "children Prop",
      syntax: "interface LayoutProps { children: React.ReactNode; }",
      description: "النوع الشامل لكل ما يمكن تصييره داخل عناصر React كأبناء."
    },
    {
      concept: "Synthetic Events",
      syntax: "const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... };",
      description: "أحداث React المسبقة المعرفة والمقيدة بعنصر الـ HTML المستهدف."
    },
    {
      concept: "useState Inference",
      syntax: "const [count, setCount] = useState(0); // number تلقائياً",
      description: "استنتاج تلقائي للبدائيات، ولكن يحتاج generic للمصفوفات: `useState<Item[]>([])`."
    },
    {
      concept: "useRef (DOM)",
      syntax: "const inputRef = useRef<HTMLInputElement>(null);",
      description: "مرجع عنصر واجهة حقيقي في DOM؛ تبدأ قيمته بـ null وتكون للقراءة فقط."
    },
    {
      concept: "useRef (Mutable)",
      syntax: "const timerRef = useRef<number | null>(null);",
      description: "مرجع لمتغير داخلي يمكن قراءته وتعديله دون إطلاق إعادة تصيير."
    },
    {
      concept: "useReducer Discriminated Union",
      syntax: "type Action = { type: 'ADD'; payload: Item } | { type: 'RESET' };",
      description: "ربط كل نوع إجراء بحمولته الدقيقة لمنع إرسال معاملات ناقصة."
    },
    {
      concept: "useContext Guard Pattern",
      syntax: "const ctx = useContext(Context); if (!ctx) throw new Error(...); return ctx;",
      description: "فحص وجود المزود داخل Custom Hook يرمي خطأ ويزيل undefined من النوع العائد."
    },
    {
      concept: "Custom Hook Tuple as const",
      syntax: "return [state, setState] as const;",
      description: "تثبيت نوع وترتيب عناصر المصفوفة الثنائية المعادة من الخطاف."
    },
    {
      concept: "Discriminated Union UI State",
      syntax: "type State = { status: 'loading' } | { status: 'success'; data: T };",
      description: "جعل الحالات المستحيلة والتناقضات غير قابلة للتمثيل برمجياً في الواجهة."
    },
    {
      concept: "Form Errors Partial Record",
      syntax: "type Errors = Partial<Record<keyof FormValues, string>>;",
      description: "اشتقاق كائن أخطاء الحقول تلقائياً لمنع أي أخطاء إملائية في أسماء الحقول."
    },
    {
      concept: "Zod Schema & z.infer",
      syntax: "const Schema = z.object({ ... }); type User = z.infer<typeof Schema>;",
      description: "مصدر وحيد للحقيقة يجمع بين فحص زمن التشغيل واستخراج نوع TypeScript."
    },
    {
      concept: "import type",
      syntax: "import type { User, Order } from './types';",
      description: "استيراد الأنواع بدون إضافة بايت واحد في كود الجافاسكربت النهائي."
    },
    {
      concept: "unknown vs any",
      syntax: "function parse(val: unknown) { if (typeof val === 'string') ... }",
      description: "unknown يفرض التحقق قبل الاستخدام، بينما any يعطل الرقابة تماماً."
    },
    {
      concept: "Exhaustiveness Checking",
      syntax: "function assertUnreachable(x: never): never { throw new Error(); }",
      description: "استخدام نوع never في فحص default لضمان معالجة كافة الحالات في switch."
    }
  ],
  miniProject: {
    id: "typecraft-pro",
    title: "مشروع TypeCraft Pro: استوديو تفاعلي لاحتراف TypeScript مع React",
    englishTitle: "TypeCraft Pro: Interactive TypeScript & React Studio",
    description: "تطبيق استوديو متكامل يجمع كافة مهارات القسم 14 في بيئة عمل حية: إدارة مهام بنمط Discriminated Unions، ومكونات Generics مرنة، وخطافات مخصصة بـ as const، وفحص فوري للمدخلات بنمط Zod Schema وحراس الأنواع.",
    code: `// TypeCraft Pro - Interactive TypeScript & React Studio
// تطبيق تفاعلي متكامل يوضح قوة الأنواع الصارمة في React

import React, { useState, useReducer, useRef, useEffect, ReactNode, ChangeEvent, FormEvent } from 'react';

// ==========================================
// 1. الأنواع والنماذج الأساسية
// ==========================================

export type TaskPriority = 'low' | 'medium' | 'high';
export type TaskCategory = 'frontend' | 'backend' | 'devops' | 'testing';

export interface TaskItem {
  id: string;
  title: string;
  category: TaskCategory;
  priority: TaskPriority;
  completed: boolean;
  createdAt: Date;
}

// نمط Discriminated Union لإدارة حالة جلب البيانات أو العمليات
export type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading'; timestamp: number }
  | { status: 'success'; data: T; message: string }
  | { status: 'error'; error: string };

// نقابة الأفعال المميزة لـ useReducer
export type TaskAction =
  | { type: 'ADD_TASK'; payload: Omit<TaskItem, 'id' | 'completed' | 'createdAt'> }
  | { type: 'TOGGLE_TASK'; payload: { id: string } }
  | { type: 'DELETE_TASK'; payload: { id: string } }
  | { type: 'RESET_TASKS' };

// ==========================================
// 2. المخفض الصارم دقيق الأنواع
// ==========================================

function taskReducer(state: TaskItem[], action: TaskAction): TaskItem[] {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask: TaskItem = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        category: action.payload.category,
        priority: action.payload.priority,
        completed: false,
        createdAt: new Date()
      };
      return [newTask, ...state];
    }
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      );
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload.id);
    case 'RESET_TASKS':
      return [];
    default:
      return state;
  }
}

// ==========================================
// 3. مكون Generic عام قابل لإعادة الاستخدام
// ==========================================

interface GenericDataListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  emptyMessage?: string;
  keyExtractor: (item: T) => string;
}

function GenericDataList<T>({
  items,
  renderItem,
  emptyMessage = 'لا توجد بيانات متاحة حالياً',
  keyExtractor
}: GenericDataListProps<T>) {
  if (items.length === 0) {
    return <p className="text-slate-500 text-center py-6">{emptyMessage}</p>;
  }

  return (
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={keyExtractor(item)}>{renderItem(item, idx)}</div>
      ))}
    </div>
  );
}

// ==========================================
// 4. خطاف مخصص موثق بـ as const
// ==========================================

function useToggle(initial: boolean = false) {
  const [value, setValue] = useState<boolean>(initial);
  const toggle = () => setValue((v) => !v);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  return [value, toggle, setTrue, setFalse] as const;
}

// ==========================================
// 5. المكون الرئيسي: TypeCraftProApp
// ==========================================

export default function TypeCraftProApp() {
  // حالة المهام عبر useReducer
  const [tasks, dispatch] = useReducer(taskReducer, [
    {
      id: 'task-1',
      title: 'إعداد TypeScript في مشروع Vite React',
      category: 'frontend',
      priority: 'high',
      completed: true,
      createdAt: new Date()
    },
    {
      id: 'task-2',
      title: 'بناء مخططات التحقق للـ API باستخدام Zod',
      category: 'backend',
      priority: 'medium',
      completed: false,
      createdAt: new Date()
    }
  ]);

  // حالة النموذج الموثقة
  const [formValues, setFormValues] = useState<{
    title: string;
    category: TaskCategory;
    priority: TaskPriority;
  }>({
    title: '',
    category: 'frontend',
    priority: 'medium'
  });

  // حالة الأخطاء الموثقة
  const [formError, setFormError] = useState<string | null>(null);

  // مرجع عنصر الإدخال
  const titleInputRef = useRef<HTMLInputElement>(null);

  // خطاف التبديل المخصص لفتح وإغلاق لوحة الإحصائيات
  const [showStats, toggleStats] = useToggle(true);

  // حالة المحاكاة غير المتزامنة بنمط Discriminated Union
  const [syncState, setSyncState] = useState<AsyncState<{ syncedCount: number }>>({ status: 'idle' });

  // معالج إرسال النموذج
  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    if (!formValues.title.trim()) {
      setFormError('يرجى كتابة عنوان المهمة قبل الإضافة!');
      titleInputRef.current?.focus();
      return;
    }

    dispatch({
      type: 'ADD_TASK',
      payload: {
        title: formValues.title,
        category: formValues.category,
        priority: formValues.priority
      }
    });

    setFormValues({ title: '', category: 'frontend', priority: 'medium' });
    setFormError(null);
    titleInputRef.current?.focus();
  };

  // محاكاة مزامنة الخادم غير المتزامنة
  const simulateCloudSync = async () => {
    setSyncState({ status: 'loading', timestamp: Date.now() });
    await new Promise((r) => setTimeout(r, 800));

    if (tasks.length === 0) {
      setSyncState({ status: 'error', error: 'لا توجد مهام لمزامنتها مع الخادم!' });
    } else {
      setSyncState({
        status: 'success',
        data: { syncedCount: tasks.length },
        message: 'تمت مزامنة كافة المهام بنجاح وبأمان نوعي تام.'
      });
    }
  };

  // إرجاع واجهة الاستوديو
  return (
    <div className="p-6 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl max-w-4xl mx-auto font-sans" dir="rtl">
      {/* شريط العنوان التفاعلي */}
      <div className="flex flex-wrap justify-between items-center pb-6 border-b border-slate-800 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg">
            React 19 + TypeScript 5
          </span>
          <h1 className="text-2xl font-black text-white mt-2">استوديو TypeCraft Pro</h1>
          <p className="text-xs text-slate-400">بيئة اختبار وتطبيق الأنماط الصارمة لـ TypeScript في واجهات React</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleStats}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-xl transition-colors"
          >
            {showStats ? 'إخفاء الإحصائيات' : 'عرض الإحصائيات'}
          </button>
          <button
            onClick={simulateCloudSync}
            disabled={syncState.status === 'loading'}
            className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-xs font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20"
          >
            {syncState.status === 'loading' ? 'جاري المزامنة...' : 'مزامنة مع السحابة ☁️'}
          </button>
        </div>
      </div>

      {/* لوحة حالة المزامنة (Discriminated Union Status) */}
      {syncState.status !== 'idle' && (
        <div className="mt-4">
          {syncState.status === 'loading' && (
            <div className="p-3 bg-blue-950/40 border border-blue-800/60 rounded-xl text-blue-300 text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              جاري مزامنة المهام مع الخادم السحابي...
            </div>
          )}
          {syncState.status === 'success' && (
            <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-emerald-300 text-xs flex justify-between items-center">
              <span>✅ {syncState.message} ({syncState.data.syncedCount} مهمة)</span>
              <button onClick={() => setSyncState({ status: 'idle' })} className="text-slate-400 hover:text-white">✕</button>
            </div>
          )}
          {syncState.status === 'error' && (
            <div className="p-3 bg-rose-950/40 border border-rose-800/60 rounded-xl text-rose-300 text-xs flex justify-between items-center">
              <span>❌ {syncState.error}</span>
              <button onClick={() => setSyncState({ status: 'idle' })} className="text-slate-400 hover:text-white">✕</button>
            </div>
          )}
        </div>
      )}

      {/* بطاقات الإحصائيات */}
      {showStats && (
        <div className="grid grid-cols-3 gap-3 my-6">
          <div className="p-3 bg-slate-900 border border-slate-800/80 rounded-2xl">
            <span className="text-xs text-slate-400 block">إجمالي المهام</span>
            <span className="text-2xl font-black text-cyan-400">{tasks.length}</span>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-800/80 rounded-2xl">
            <span className="text-xs text-slate-400 block">المهام المكتملة</span>
            <span className="text-2xl font-black text-emerald-400">{tasks.filter((t) => t.completed).length}</span>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-800/80 rounded-2xl">
            <span className="text-xs text-slate-400 block">مهام عالية الأهمية</span>
            <span className="text-2xl font-black text-rose-400">{tasks.filter((t) => t.priority === 'high' && !t.completed).length}</span>
          </div>
        </div>
      )}

      {/* نموذج إضافة مهمة جديدة مع تحكم صارم بالأنواع */}
      <form onSubmit={handleAddTask} className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl mb-6 space-y-3">
        <h3 className="text-sm font-bold text-slate-300">إضافة مهمة جديدة مؤمنة بالأنواع:</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <input
            ref={titleInputRef}
            type="text"
            value={formValues.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFormValues({ ...formValues, title: e.target.value })
            }
            placeholder="عنوان المهمة..."
            className="md:col-span-2 px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:border-blue-500 focus:outline-none"
          />
          <select
            value={formValues.category}
            onChange={(e) => setFormValues({ ...formValues, category: e.target.value as TaskCategory })}
            className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:border-blue-500 focus:outline-none"
          >
            <option value="frontend">واجهة أمامية</option>
            <option value="backend">خلفية برمجية</option>
            <option value="devops">عمليات نشر</option>
            <option value="testing">اختبارات</option>
          </select>
          <select
            value={formValues.priority}
            onChange={(e) => setFormValues({ ...formValues, priority: e.target.value as TaskPriority })}
            className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:border-blue-500 focus:outline-none"
          >
            <option value="low">أولوية منخفضة</option>
            <option value="medium">أولوية متوسطة</option>
            <option value="high">أولوية عالية</option>
          </select>
        </div>
        {formError && <p className="text-xs text-rose-400">{formError}</p>}
        <div className="flex justify-end gap-2 pt-1">
          <button
            type="button"
            onClick={() => dispatch({ type: 'RESET_TASKS' })}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-xl"
          >
            تفريغ القائمة
          </button>
          <button
            type="submit"
            className="px-5 py-1.5 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs rounded-xl transition-colors"
          >
            + إضافة المهمة
          </button>
        </div>
      </form>

      {/* قائمة المهام باستخدام المكون العام GenericDataList<TaskItem> */}
      <div>
        <h3 className="text-sm font-bold text-slate-300 mb-3">قائمة المهام المسجلة (Generic Component):</h3>
        <GenericDataList<TaskItem>
          items={tasks}
          keyExtractor={(item) => item.id}
          emptyMessage="لا توجد أي مهام مسجلة حالياً، أضف مهمتك الأولى بالأعلى!"
          renderItem={(task) => (
            <div
              className={\`p-3.5 bg-slate-900 border rounded-2xl flex items-center justify-between transition-all \${task.completed ? 'border-slate-800/40 opacity-60' : 'border-slate-800'}\`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: { id: task.id } })}
                  className="w-4 h-4 rounded text-blue-600 bg-slate-950 border-slate-700"
                />
                <div>
                  <p className={\`text-xs font-semibold \${task.completed ? 'line-through text-slate-500' : 'text-slate-200'}\`}>
                    {task.title}
                  </p>
                  <div className="flex gap-2 mt-1">
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-400">
                      {task.category}
                    </span>
                    <span
                      className={\`text-[10px] px-2 py-0.5 rounded-md font-bold \${task.priority === 'high' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : task.priority === 'medium' ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-400'}\`}
                    >
                      {task.priority === 'high' ? 'عالية' : task.priority === 'medium' ? 'متوسطة' : 'عادية'}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => dispatch({ type: 'DELETE_TASK', payload: { id: task.id } })}
                className="px-2.5 py-1 text-[11px] text-rose-400 hover:bg-rose-950/40 rounded-lg transition-colors"
              >
                حذف
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة إتقان TypeScript مع React في المشاريع الكبرى",
    nodes: [
      { id: "1", title: "الأساسيات والـ Generics", desc: "Type Inference, Interfaces, Unions, Generics" },
      { id: "2", title: "مكونات وأحداث React", desc: "Typing Props, ReactNode, Synthetic Events" },
      { id: "3", title: "إتقان الـ Hooks", desc: "useState, useRef, useReducer, useContext, as const" },
      { id: "4", title: "المشاريع الكبيرة ومخططات Zod", desc: "Discriminated Unions, z.infer, RTK withTypes, TanStack Query" }
    ]
  }
};
