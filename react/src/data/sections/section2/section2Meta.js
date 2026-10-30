// src/data/sections/section2/section2Meta.js
// ملخص القسم الثاني، جدول المرجع السريع، المشروع التطبيقي الشامل، وبطاقة الإنفوجرافيك العامة

export const SECTION_2_META = {
  id: 2,
  title: "القسم 2: أساسيات JavaScript",
  englishTitle: "Section 2: JavaScript Fundamentals",
  summary: [
    "المتغيرات الحديثة: استخدم const دائماً كخيار افتراضي لحماية المراجع من التغيير العرضي، واستخدم let فقط عندما تحتاج لتغيير القيمة لاحقاً، وتجنب var تماماً لأنها تعاني من مشاكل النطاق العام والتسريب.",
    "الأنواع البدائية مقابل المرجعية: الأرقام والنصوص والقيم المنطقية تُمرر بالنسخ (Pass by Value)، بينما المصفوفات والكائنات تُمرر بالمرجع (Pass by Reference) وتتشارك نفس العنوان في الذاكرة.",
    "المساواة الصارمة (===): تقارن القيمة والنوع معاً دون تحويل خفي، مما يحميك من ألغاز المقارنة الشهيرة في JavaScript التي يسببها المشغل المتساهل (==).",
    "دوال المصفوفات التحويلية: دوال map و filter و find و reduce هي العمود الفقري لمطوري React؛ فهي تعالج البيانات بأسلوب وظيفي نظيف وتعيد مصفوفات جديدة دون المساس بالمصفوفة الأصلية.",
    "مبدأ عدم التعديل المباشر (Immutability): تعديل الكائنات والمصفوفات يجب أن يتم بنسخها أولاً عبر معامل الانتشار (...) أو دوال النسخ، لأن React تعتمد على مقارنة المراجع السطحية لاكتشاف التغييرات.",
    "شجرة DOM والأحداث: متصفح الويب يحول كود HTML إلى شجرة كائنات حية في الذاكرة، وربط معالجات الأحداث (Event Handlers) يسمح بالتفاعل مع نقرات المستخدم وحركات الفأرة ومدخلات النماذج.",
    "انتشار الأحداث وسلوكيات المتصفح: الأحداث تصعد تلقائياً من العنصر المستهدف إلى آبائه (Bubbling) ويمكن إيقافها بـ stopPropagation، كما نستخدم preventDefault لمنع السلوك الافتراضي للمتصفح مثل إعادة تحميل الصفحة عند إرسال النماذج.",
    "من DOM الحقيقي إلى Virtual DOM: التعديل اليدوي المتكرر على عناصر صفحة الويب الحقيقية بطيء ومكلف؛ لذا ابتكرت React الـ Virtual DOM لحساب الفروقات في الذاكرة وتحديث الشاشة بأقل عدد ممكن من العمليات."
  ],
  cheatSheet: [
    { category: "المتغيرات والثوابت", syntax: "const PI = 3.14;", description: "تعريف ثابت لا يمكن إعادة إسناد قيمة جديدة له أبداً" },
    { category: "المتغيرات والثوابت", syntax: "let score = 0;", description: "تعريف متغير ذو نطاق كتلي (Block Scope) يقبل التغيير" },
    { category: "المقارنات والشروط", syntax: "a === b", description: "مقارنة صارمة تطابق القيمة والنوع معاً (تجنب == دائماً)" },
    { category: "المقارنات والشروط", syntax: "condition ? val1 : val2", description: "المعامل الثلاثي (Ternary Operator) للاختصار الشرطي" },
    { category: "المقارنات والشروط", syntax: "value || 'Default'", description: "إعطاء قيمة افتراضية إذا كانت الأولى Falsy" },
    { category: "المصفوفات (تحويل)", syntax: "arr.map(x => x * 2)", description: "تحويل كل عنصر في المصفوفة وإرجاع مصفوفة جديدة بنفس الطول" },
    { category: "المصفوفات (تصفية)", syntax: "arr.filter(x => x > 10)", description: "تصفية العناصر وفق شرط محدد وإرجاع مصفوفة بالعناصر المطابقة فقط" },
    { category: "المصفوفات (بحث)", syntax: "arr.find(x => x.id === 5)", description: "إرجاع أول عنصر يطابق الشرط أو undefined إذا لم يوجد" },
    { category: "المصفوفات (تجميع)", syntax: "arr.reduce((acc, x) => acc + x, 0)", description: "تجميع قيم المصفوفة في قيمة واحدة (مثل حساب المجموع)" },
    { category: "المصفوفات (تحقق)", syntax: "arr.some(x => x.done)", description: "إرجاع true إذا طابق عنصر واحد على الأقل الشرط المحدد" },
    { category: "المصفوفات (نسخ)", syntax: "const copy = [...arr];", description: "نسخ سطحي سريع للمصفوفة دون تعديل المصفوفة الأصلية" },
    { category: "الكائنات (نسخ وتعديل)", syntax: "const updated = { ...user, age: 25 };", description: "نسخ خصائص الكائن مع تعديل خاصية محددة بأسلوب غير مدمر" },
    { category: "الكائنات (مفاتيح وقيم)", syntax: "Object.keys(obj)", description: "استخراج جميع أسماء الخصائص كمصفوفة نصوص" },
    { category: "الكائنات (مفاتيح وقيم)", syntax: "Object.values(obj)", description: "استخراج جميع قيم الخصائص كمصفوفة" },
    { category: "معالجة الأخطاء", syntax: "try { ... } catch (e) { ... }", description: "التقاط الأخطاء البرمجية لمنع انهيار وتوقف التطبيق" },
    { category: "تحديد عناصر DOM", syntax: "document.querySelector('.btn')", description: "جلب أول عنصر يطابق محدد الـ CSS المطلوب" },
    { category: "تحديد عناصر DOM", syntax: "document.querySelectorAll('li')", description: "جلب جميع العناصر المطابقة كقائمة عقد NodeList" },
    { category: "تعديل عناصر DOM", syntax: "el.textContent = 'نص جديد';", description: "تعديل النص الداخلي للعنصر بأمان تام ضد هجمات XSS" },
    { category: "تعديل عناصر DOM", syntax: "el.classList.add('active');", description: "إضافة فئة CSS جديدة للعنصر برمجياً" },
    { category: "تعديل عناصر DOM", syntax: "el.classList.toggle('dark');", description: "تبديل فئة الـ CSS (إضافتها إن لم توجد أو حذفها إن وجدت)" },
    { category: "إنشاء عناصر DOM", syntax: "document.createElement('div')", description: "توليد عنصر HTML جديد في الذاكرة قبل إضافته للصفحة" },
    { category: "إضافة عناصر DOM", syntax: "parent.appendChild(child)", description: "إدراج العنصر المولود كآخر ابن داخل العنصر الأب" },
    { category: "الاستماع للأحداث", syntax: "btn.addEventListener('click', fn)", description: "ربط دالة معالجة تنفذ فور نقر المستخدم على الزر" },
    { category: "التحكم بالأحداث", syntax: "e.preventDefault();", description: "إلغاء السلوك التلقائي للمتصفح (مثل إرسال النموذج)" },
    { category: "التحكم بالأحداث", syntax: "e.stopPropagation();", description: "إيقاف صعود الحدث إلى العناصر الأب (منع الـ Bubbling)" }
  ],
  miniProject: {
    title: "مشروع القسم الثاني: لوحة تحكم المهام والمصاريف التفاعلية (Task & Expense Manager)",
    description: "بناء تطبيق تفاعلي متكامل يجسد كل مفاهيم JavaScript الأساسية: إدارة المهام مع التصفية التفاعلية، حساب المصاريف التراكمية باستخدام reduce، تحديث عناصر الـ DOM في الذاكرة الحية، تفادي تعديل المصفوفات الأصلية، ومنع السلوك الافتراضي للنماذج بـ preventDefault.",
    livePreviewCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>لوحة المهام والميزانية الذكية</title>
  <style>
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
      color: #f8fafc;
      min-height: 100vh;
      padding: 24px 16px;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
    }
    header {
      text-align: center;
      margin-bottom: 28px;
    }
    header h1 {
      font-size: 1.85rem;
      color: #38bdf8;
      margin-bottom: 6px;
    }
    header p {
      color: #94a3b8;
      font-size: 0.95rem;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    @media (min-width: 768px) {
      .grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    .card {
      background: rgba(30, 41, 59, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 20px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
    }
    .card h2 {
      font-size: 1.25rem;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
      color: #f1f5f9;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 10px;
    }
    .form-group {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
    }
    input[type="text"], input[type="number"] {
      flex: 1;
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid #334155;
      background: #0f172a;
      color: #f8fafc;
      font-size: 0.9rem;
      outline: none;
      transition: border-color 0.2s;
    }
    input:focus {
      border-color: #38bdf8;
    }
    button.btn-add {
      background: #2563eb;
      color: white;
      border: none;
      padding: 10px 18px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.9rem;
      transition: background 0.2s, transform 0.1s;
    }
    button.btn-add:hover {
      background: #1d4ed8;
      transform: translateY(-1px);
    }
    .filters {
      display: flex;
      gap: 6px;
      margin-bottom: 14px;
    }
    .filter-btn {
      background: #1e293b;
      border: 1px solid #334155;
      color: #94a3b8;
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .filter-btn.active {
      background: #38bdf8;
      color: #0f172a;
      border-color: #38bdf8;
      font-weight: 600;
    }
    ul.item-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      max-height: 280px;
      overflow-y: auto;
      padding-left: 4px;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #0f172a;
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      animation: fadeIn 0.25s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .item.completed span {
      text-decoration: line-through;
      color: #64748b;
    }
    .item-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .btn-delete {
      background: transparent;
      border: none;
      color: #ef4444;
      cursor: pointer;
      font-size: 1rem;
      padding: 4px 8px;
      border-radius: 4px;
      transition: background 0.2s;
    }
    .btn-delete:hover {
      background: rgba(239, 68, 68, 0.15);
    }
    .stat-badge {
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.2);
      border-radius: 8px;
      padding: 12px;
      margin-top: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.95rem;
    }
    .stat-badge strong {
      color: #38bdf8;
      font-size: 1.15rem;
    }
    .empty-notice {
      text-align: center;
      color: #64748b;
      padding: 20px 0;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>

  <div class="container">
    <header>
      <h1>لوحة المهام والميزانية الذكية 🚀</h1>
      <p>تطبيق تطبيقي شامل لأساسيات JavaScript: المصفوفات، الكائنات، معالجة الـ DOM، والأحداث</p>
    </header>

    <div class="grid">
      <!-- البطاقة الأولى: إدارة المهام (Tasks) -->
      <section class="card">
        <h2>📋 قائمة المهام اليومية</h2>
        
        <form id="task-form" class="form-group">
          <input type="text" id="task-input" placeholder="أدخل مهمة جديدة..." required>
          <button type="submit" class="btn-add">إضافة</button>
        </form>

        <div class="filters">
          <button type="button" class="filter-btn active" data-filter="all">الكل</button>
          <button type="button" class="filter-btn" data-filter="active">قيد التنفيذ</button>
          <button type="button" class="filter-btn" data-filter="completed">المكتملة</button>
        </div>

        <ul id="task-list" class="item-list"></ul>

        <div class="stat-badge">
          <span>المهام المتبقية:</span>
          <strong id="tasks-remaining">0</strong>
        </div>
      </section>

      <!-- البطاقة الثانية: متتبع المصاريف (Expenses) -->
      <section class="card">
        <h2>💰 متتبع المصاريف</h2>
        
        <form id="expense-form" class="form-group">
          <input type="text" id="expense-desc" placeholder="بند المصروف (مثال: كتب)" required style="flex: 2;">
          <input type="number" id="expense-amount" placeholder="المبلغ ($)" min="1" required style="flex: 1;">
          <button type="submit" class="btn-add">تسجيل</button>
        </form>

        <ul id="expense-list" class="item-list"></ul>

        <div class="stat-badge">
          <span>إجمالي الإنفاق (محسوب بـ reduce):</span>
          <strong id="total-expenses">$0</strong>
        </div>
      </section>
    </div>
  </div>

  <script>
    // 1. حالة التطبيق في الذاكرة (In-Memory State)
    let tasks = [
      { id: 1, title: 'دراسة دوال المصفوفات map و filter', completed: true },
      { id: 2, title: 'فهم انتشار الأحداث Event Bubbling', completed: false },
      { id: 3, title: 'بناء مشروع القسم الثاني', completed: false }
    ];

    let expenses = [
      { id: 1, title: 'اشتراك دورة تقنية', amount: 45 },
      { id: 2, title: 'قهوة برمجة', amount: 5 }
    ];

    let currentFilter = 'all';

    // 2. مراجع عناصر واجهة المستخدم (DOM Selectors)
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const tasksRemaining = document.getElementById('tasks-remaining');
    const filterButtons = document.querySelectorAll('.filter-btn');

    const expenseForm = document.getElementById('expense-form');
    const expenseDesc = document.getElementById('expense-desc');
    const expenseAmount = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalExpenses = document.getElementById('total-expenses');

    // 3. دوال تصيير المهام (Render Functions)
    function renderTasks() {
      // تفريغ المحتوى القديم بأمان
      taskList.innerHTML = '';

      // تطبيق التصفية باستخدام filter دون المساس بالمصفوفة الأصلية
      const filtered = tasks.filter(task => {
        if (currentFilter === 'active') return !task.completed;
        if (currentFilter === 'completed') return task.completed;
        return true;
      });

      if (filtered.length === 0) {
        taskList.innerHTML = '<li class="empty-notice">لا توجد مهام تطابق هذا التصنيف 🌿</li>';
      } else {
        filtered.forEach(task => {
          const li = document.createElement('li');
          li.className = \`item \${task.completed ? 'completed' : ''}\`;

          // بناء العنصر بالـ DOM النظيف
          li.innerHTML = \`
            <div class="item-left">
              <input type="checkbox" \${task.completed ? 'checked' : ''} data-id="\${task.id}" class="task-checkbox">
              <span>\${escapeHtml(task.title)}</span>
            </div>
            <button class="btn-delete" data-id="\${task.id}" title="حذف المهمة">✕</button>
          \`;
          taskList.appendChild(li);
        });
      }

      // حساب المهام المتبقية بدالة filter
      const activeCount = tasks.filter(t => !t.completed).length;
      tasksRemaining.textContent = activeCount;
    }

    // 4. دوال تصيير المصاريف وحساب الإجمالي بـ reduce
    function renderExpenses() {
      expenseList.innerHTML = '';

      if (expenses.length === 0) {
        expenseList.innerHTML = '<li class="empty-notice">سجل مصاريفك الأولى للبدء 🪙</li>';
      } else {
        expenses.forEach(exp => {
          const li = document.createElement('li');
          li.className = 'item';
          li.innerHTML = \`
            <div class="item-left">
              <span>\${escapeHtml(exp.title)}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-weight: 600; color: #38bdf8;">$\${exp.amount}</span>
              <button class="btn-delete" data-exp-id="\${exp.id}" title="حذف البند">✕</button>
            </div>
          \`;
          expenseList.appendChild(li);
        });
      }

      // حساب المجموع التراكمي بدالة reduce الوظيفية
      const total = expenses.reduce((sum, item) => sum + item.amount, 0);
      totalExpenses.textContent = '$' + total.toLocaleString();
    }

    // دالة حماية من هجمات XSS
    function escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }

    // 5. الاستماع لأحداث النماذج والنقرات
    // إضافة مهمة جديدة
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault(); // منع المتصفح من إعادة تحميل الصفحة
      const text = taskInput.value.trim();
      if (!text) return;

      // إضافة الكائن الجديد بأسلوب غير مدمر (نسخ المصفوفة)
      tasks = [...tasks, { id: Date.now(), title: text, completed: false }];
      taskInput.value = '';
      renderTasks();
    });

    // إدارة أحداث قائمة المهام عبر التفويض (Event Delegation)
    taskList.addEventListener('click', (e) => {
      // تبديل حالة الإكمال
      if (e.target.classList.contains('task-checkbox')) {
        const id = Number(e.target.dataset.id);
        tasks = tasks.map(task => 
          task.id === id ? { ...task, completed: !task.completed } : task
        );
        renderTasks();
      }

      // حذف مهمة
      if (e.target.classList.contains('btn-delete')) {
        const id = Number(e.target.dataset.id);
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
      }
    });

    // أزرار تصفية المهام
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTasks();
      });
    });

    // إضافة مصروف جديد
    expenseForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const desc = expenseDesc.value.trim();
      const amount = Number(expenseAmount.value);
      if (!desc || amount <= 0) return;

      expenses = [...expenses, { id: Date.now(), title: desc, amount }];
      expenseDesc.value = '';
      expenseAmount.value = '';
      renderExpenses();
    });

    // حذف مصروف
    expenseList.addEventListener('click', (e) => {
      if (e.target.dataset.expId) {
        const id = Number(e.target.dataset.expId);
        expenses = expenses.filter(exp => exp.id !== id);
        renderExpenses();
      }
    });

    // 6. التشغيل الأولي عند تحميل الصفحة
    renderTasks();
    renderExpenses();
  </script>
</body>
</html>`
  },
  sectionInfographic: {
    title: "إنفوجرافيك القسم الثاني: قلب JavaScript ومحرك الويب التفاعلي",
    badge: "محطة JavaScript 2.0",
    overview: "JavaScript تحول صفحات الويب من مجرد نصوص ثابتة إلى تطبيقات ذكية تفاعلية نابضة بالحياة. إن إتقان المتغيرات، الدوال الوظيفية للمصفوفات، ومبدأ عدم التعديل المباشر يمهد لك الطريق السريع لاحتراف React.",
    stages: [
      { step: "1", title: "المفاهيم والتحكم", desc: "let و const وحماية النطاق، المساواة الصارمة (===)، والشروط والحلقات" },
      { step: "2", title: "المصفوفات والكائنات", desc: "الدوال الوظيفية التحويلية (map/filter/reduce) ومبدأ عدم تعديل الأصل" },
      { step: "3", title: "معالجة DOM والأحداث", desc: "التقاط العناصر بـ querySelector، صعود الأحداث Bubbling، وتفادي السلوك الافتراضي" },
      { step: "4", title: "الجسر نحو React", desc: "فهم الـ Virtual DOM وكيف تنقلنا React من التعديل اليدوي للـ DOM إلى إدارة الـ State" }
    ],
    goldenRule: "في React لن تلمس شجرة الـ DOM بيدك أبداً؛ ستدير البيانات (State) بمصفوفات وكائنات نظيفة، ودع React تتكفل بمزامنة الشاشة بكفاءة مذهلة."
  }
};
