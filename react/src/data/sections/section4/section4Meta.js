// src/data/sections/section4/section4Meta.js
// ملخص القسم الرابع، جدول المرجع السريع، المشروع التطبيقي الشامل، وبطاقة الإنفوجرافيك العامة

export const SECTION_4_META = {
  id: 4,
  title: "القسم 4: التعرف على React وإعداد البيئة",
  englishTitle: "Section 4: Introduction to React & Setup",
  summary: [
    "فلسفة React الثورية: الواجهة هي مجرد انعكاس لحالة البيانات (UI = f(State))، والبرمجة التصريحية (Declarative) تحررك تماماً من التعديل اليدوي للـ DOM.",
    "معمارية المكونات (Component Architecture): تقسيم الواجهة إلى قطع ليجو مستقلة وقابلة لإعادة الاستخدام يسهل الصيانة ويقضي على تكرار الكود.",
    "شجرة المكونات وتدفق البيانات: هيكل هرمي يبدأ من المكون الجذري App، وتتدفق فيه البيانات في اتجاه واحد هابط (Top-Down) عبر الـ Props.",
    "المراحل الثلاث لتحديث الشاشة: 1) إطلاق التحديث بتغير الحالة (Trigger)، 2) حساب الفروقات في الذاكرة (Render & Diffing)، 3) تطبيق التعديل الصافي فقط على الشاشة الحقيقية (Commit).",
    "تثبيت التطبيق بـ ReactDOM: دالة createRoot() الحديثة تثبت شجرة المكونات داخل العنصر الحاضن <div id=\"root\"> في ملف index.html.",
    "أداة Vite الحديثة: تفوقت على Create React App بفضل تشغيل خادم التطوير الفوري في أجزاء من الثانية واستغلال وحدات Native ES Modules.",
    "تشريح ملفات المشروع: مجلد src يحتوي على 100% من كود المكونات، و public للأصول الثابتة، و package.json يدير الحزم وأوامر التشغيل.",
    "متغيرات البيئة VITE_: تبدأ إجبارياً بـ VITE_ لحمايتها من التسريب، وتُقرأ في كود React عبر كائن import.meta.env.",
    "ترسانة أدوات المطور (React DevTools): إضافة المتصفح الرسمية لاستكشاف الشجرة، فحص وتعديل Props و State حياً، وإبراز وميض إعادة التصيير لكشف البطء.",
    "الحراس الأوفياء: خاصية Fast Refresh تحفظ قيم الـ State الحية أثناء تعديل الكود، و StrictMode يختبر نقاء الدوال في بيئة التطوير بالتشغيل المزدوج."
  ],
  cheatSheet: [
    { category: "أوامر سطر الأوامر (Vite)", syntax: "npm create vite@latest my-app -- --template react", description: "إنشاء مشروع React حديث بقالب JavaScript في ثانية واحدة" },
    { category: "أوامر سطر الأوامر (Vite)", syntax: "npm create vite@latest my-app -- --template react-ts", description: "إنشاء مشروع React بقالب TypeScript" },
    { category: "أوامر سطر الأوامر (Vite)", syntax: "npm run dev", description: "تشغيل خادم التطوير المحلي فائق السرعة على localhost:5173" },
    { category: "أوامر سطر الأوامر (Vite)", syntax: "npm run dev -- --host", description: "إتاحة خادم التطوير للشبكة المحلية لمعاينته من شاشة الهاتف" },
    { category: "أوامر سطر الأوامر (Vite)", syntax: "npm run build", description: "توليد كود الإنتاج المضغوط والمحسن في مجلد dist" },
    { category: "أوامر سطر الأوامر (Vite)", syntax: "npm run preview", description: "معاينة واختبار مجلد dist الإنتاجي محلياً قبل نشره" },
    { category: "نقطة الدخول (main.jsx)", syntax: "ReactDOM.createRoot(el).render(<App />)", description: "إنشاء جذر React وتثبيت شجرة المكونات في الـ DOM" },
    { category: "نقطة الدخول (main.jsx)", syntax: "<React.StrictMode><App /></React.StrictMode>", description: "تغليف التطبيق بحارس الفحص الصارم لاكتشاف الدوال غير النقية" },
    { category: "متغيرات البيئة", syntax: "VITE_API_URL=https://api.com", description: "تعريف متغير بيئة يبدأ بـ VITE_ في ملف .env" },
    { category: "متغيرات البيئة", syntax: "import.meta.env.VITE_API_URL", description: "قراءة قيمة متغير البيئة داخل كود مكونات React" },
    { category: "متغيرات البيئة", syntax: "import.meta.env.MODE / .DEV / .PROD", description: "معرفة وضع التشغيل الحالي (تطوير أم إنتاج)" },
    { category: "معمارية المكونات", syntax: "function MyComponent({ title }) { ... }", description: "تعريف مكون وظيفي يبدأ بحرف كبير PascalCase" },
    { category: "معمارية المكونات", syntax: "export default MyComponent;", description: "تصدير المكون الافتراضي لملف مستقل" },
    { category: "أدوات DevTools", syntax: "تبويب Components", description: "استكشاف الشجرة الهرمية للمكونات وفحص الـ Props والـ State" },
    { category: "أدوات DevTools", syntax: "تبويب Profiler", description: "قياس زمن وتكلفة إعادة تصيير كل مكون بالميلي ثانية" },
    { category: "أدوات DevTools", syntax: "$r في الكونسول", description: "المتغير السحري الذي يمثل المكون المحدد حالياً في DevTools" },
    { category: "أدوات DevTools", syntax: "Highlight updates when components render", description: "تفعيل الإطار الوميضي الملون لاكتشاف إعادات التصيير المهدرة" }
  ],
  miniProject: {
    title: "مشروع القسم الرابع: محاكي بنية React ومولد قوالب Vite التفاعلي (React Architecture & Vite Studio)",
    description: "بناء تطبيق تفاعلي تعليمي يجسد مفاهيم القسم الرابع بالكامل: استكشاف شجرة المكونات بصرياً بنمط شجري تفاعلي، فحص الـ Props والـ State وتعديلها حياً في المتصفح، محاكاة وميض إعادة التصيير عند كل نقرة، ومولد أوامر وإعدادات Vite وملفات .env بنقرة زر واحدة.",
    livePreviewCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>محاكي بنية React وأدوات Vite التفاعلية</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #0f172a;
      color: #f8fafc;
      min-height: 100vh;
      padding: 24px 16px;
    }
    .container { max-width: 960px; margin: 0 auto; }
    header { text-align: center; margin-bottom: 24px; }
    header h1 { font-size: 1.85rem; color: #38bdf8; margin-bottom: 6px; }
    header p { color: #94a3b8; font-size: 0.95rem; }

    .tabs {
      display: flex;
      gap: 8px;
      margin-bottom: 20px;
      border-bottom: 1px solid #334155;
      padding-bottom: 12px;
    }
    .tab-btn {
      background: #1e293b;
      border: 1px solid #334155;
      color: #94a3b8;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.85rem;
      transition: all 0.2s;
    }
    .tab-btn.active {
      background: #38bdf8;
      color: #0f172a;
      border-color: #38bdf8;
    }

    .panel {
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 20px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      display: none;
    }
    .panel.active { display: block; }

    /* تبويب شجرة المكونات */
    .tree-view {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .tree-node {
      border: 1px solid #334155;
      border-radius: 10px;
      padding: 12px 16px;
      background: #1e293b;
      transition: all 0.25s;
      position: relative;
    }
    .tree-node.highlight-render {
      outline: 2px solid #10b981;
      box-shadow: 0 0 15px rgba(16, 185, 129, 0.5);
      animation: flash 0.6s ease-out;
    }
    @keyframes flash {
      0% { background-color: rgba(16, 185, 129, 0.2); }
      100% { background-color: #1e293b; }
    }
    .node-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .node-tag {
      font-family: monospace;
      color: #38bdf8;
      font-weight: 700;
      font-size: 1rem;
    }
    .node-badge {
      font-size: 0.75rem;
      padding: 2px 8px;
      border-radius: 999px;
      background: rgba(56, 189, 248, 0.15);
      color: #38bdf8;
    }
    .props-box {
      font-size: 0.85rem;
      color: #cbd5e1;
      background: #0f172a;
      padding: 8px 12px;
      border-radius: 6px;
      font-family: monospace;
    }
    .sub-tree {
      margin-right: 24px;
      border-right: 2px dashed #475569;
      padding-right: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
    }

    /* تبويب مولد Vite */
    .form-row {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 16px;
    }
    label { font-size: 0.85rem; color: #94a3b8; font-weight: 600; }
    input[type="text"], select {
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid #334155;
      background: #0f172a;
      color: #f8fafc;
      font-size: 0.9rem;
      outline: none;
    }
    .code-preview {
      background: #090d16;
      border: 1px solid #1e293b;
      border-radius: 8px;
      padding: 14px;
      font-family: monospace;
      font-size: 0.85rem;
      color: #34d399;
      white-space: pre-wrap;
      overflow-x: auto;
      margin-top: 16px;
      direction: ltr;
      text-align: left;
    }
    .btn-copy {
      background: #2563eb;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 600;
      margin-top: 10px;
    }
    .btn-copy:hover { background: #1d4ed8; }
  </style>
</head>
<body>

  <div class="container">
    <header>
      <h1>استوديو بنية React ومولد قوالب Vite ⚛️</h1>
      <p>محاكاة بصرية تفاعلية لشجرة المكونات وتوليد أوامر ومشاريع Vite المعتمدة</p>
    </header>

    <div class="tabs">
      <button class="tab-btn active" data-tab="tree">🌳 استكشاف شجرة المكونات وتعديل الـ State</button>
      <button class="tab-btn" data-tab="vite">🚀 مولد أوامر وإعدادات Vite السريعة</button>
    </div>

    <!-- 1. لوحة شجرة المكونات ومحاكاة DevTools -->
    <div id="panel-tree" class="panel active">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h3 style="color: #f1f5f9; font-size: 1.1rem;">شجرة تطبيق المتجر الحية (Component Tree)</h3>
        <button id="trigger-render-btn" style="background: #10b981; color: #0f172a; border: none; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-weight: 700; font-size: 0.8rem;">
          ⚡ وميض إعادة التصيير (Highlight Updates)
        </button>
      </div>

      <div class="tree-view">
        <!-- Root: App -->
        <div id="node-app" class="tree-node">
          <div class="node-header">
            <span class="node-tag">&lt;App /&gt;</span>
            <span class="node-badge">المكون الجذري (Root)</span>
          </div>
          <div class="props-box">
            State: { appName: "<span id="app-name-val">متجري الحديث</span>", theme: "dark" }
          </div>

          <div class="sub-tree">
            <!-- Navbar Child -->
            <div id="node-nav" class="tree-node">
              <div class="node-header">
                <span class="node-tag">&lt;Navbar /&gt;</span>
                <span class="node-badge">مكون ابن</span>
              </div>
              <div class="props-box">
                Props: { title: "<span id="nav-title-val">متجري الحديث</span>" }
              </div>
            </div>

            <!-- ProductGrid Child -->
            <div id="node-grid" class="tree-node">
              <div class="node-header">
                <span class="node-tag">&lt;ProductGrid /&gt;</span>
                <span class="node-badge">مكون ابن</span>
              </div>
              <div class="props-box">
                State: { itemsCount: <span id="cart-count">2</span> }
              </div>

              <div class="sub-tree">
                <!-- ProductCard Grandchildren -->
                <div id="node-card-1" class="tree-node">
                  <div class="node-header">
                    <span class="node-tag">&lt;ProductCard id={1} /&gt;</span>
                    <span class="node-badge">حفيد (Leaf)</span>
                  </div>
                  <div class="props-box">Props: { title: "كاميرا ذكية", price: 650 }</div>
                </div>

                <div id="node-card-2" class="tree-node">
                  <div class="node-header">
                    <span class="node-tag">&lt;ProductCard id={2} /&gt;</span>
                    <span class="node-badge">حفيد (Leaf)</span>
                  </div>
                  <div class="props-box">Props: { title: "سماعة محيطية", price: 180 }</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 18px; padding: 12px; background: #0f172a; border-radius: 8px; border: 1px solid #334155; display: flex; gap: 10px; align-items: center;">
        <span style="font-size: 0.85rem; color: #94a3b8;">جرّب تعديل اسم المتجر في الـ State حياً:</span>
        <input type="text" id="live-state-input" value="متجري الحديث" style="padding: 6px 10px; width: 200px;">
        <button id="apply-state-btn" class="btn-copy" style="margin: 0; padding: 6px 12px;">تطبيق State</button>
      </div>
    </div>

    <!-- 2. لوحة مولد Vite -->
    <div id="panel-vite" class="panel">
      <h3 style="color: #f1f5f9; font-size: 1.1rem; margin-bottom: 16px;">تخصيص وتوليد أوامر مشروع Vite</h3>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div class="form-row">
          <label>اسم المشروع:</label>
          <input type="text" id="vite-app-name" value="react-pro-app">
        </div>

        <div class="form-row">
          <label>القالب البرمجي (Template):</label>
          <select id="vite-template">
            <option value="react">JavaScript (.jsx) - موصى به للتعلم</option>
            <option value="react-ts">TypeScript (.tsx) - للمشاريع التجارية</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <label>رابط خادم الـ API (لملف .env):</label>
        <input type="text" id="vite-api-url" value="https://api.my-domain.com/v1">
      </div>

      <label>أوامر الطرفية (Terminal Commands) الجاهزة للنسخ:</label>
      <div id="commands-output" class="code-preview"></div>
      <button id="copy-btn" class="btn-copy">📋 نسخ الأوامر للـ Terminal</button>
    </div>
  </div>

  <script>
    // 1. التبديل بين التبويبات
    const tabBtns = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.panel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
      });
    });

    // 2. محاكاة وميض إعادة التصيير
    const triggerBtn = document.getElementById('trigger-render-btn');
    const nodes = document.querySelectorAll('.tree-node');

    triggerBtn.addEventListener('click', () => {
      nodes.forEach((n, idx) => {
        setTimeout(() => {
          n.classList.add('highlight-render');
          setTimeout(() => n.classList.remove('highlight-render'), 600);
        }, idx * 100);
      });
    });

    // 3. التعديل الحي للـ State
    const liveInput = document.getElementById('live-state-input');
    const applyBtn = document.getElementById('apply-state-btn');
    const appNameVal = document.getElementById('app-name-val');
    const navTitleVal = document.getElementById('nav-title-val');

    applyBtn.addEventListener('click', () => {
      const newVal = liveInput.value.trim() || 'متجر جديد';
      appNameVal.textContent = newVal;
      navTitleVal.textContent = newVal;

      // وميض المكونين المتأثرين فقط (App و Navbar)
      const appNode = document.getElementById('node-app');
      const navNode = document.getElementById('node-nav');
      [appNode, navNode].forEach(n => {
        n.classList.add('highlight-render');
        setTimeout(() => n.classList.remove('highlight-render'), 600);
      });
    });

    // 4. توليد كود Vite
    const appNameInput = document.getElementById('vite-app-name');
    const templateSelect = document.getElementById('vite-template');
    const apiUrlInput = document.getElementById('vite-api-url');
    const commandsOutput = document.getElementById('commands-output');
    const copyBtn = document.getElementById('copy-btn');

    function updateViteCommands() {
      const name = appNameInput.value.trim() || 'my-app';
      const template = templateSelect.value;
      const api = apiUrlInput.value.trim();

      const text = \`# 1. إنشاء المشروع بقالب Vite الرسمي السريع:
npm create vite@latest \${name} -- --template \${template}

# 2. الانتقال للمجلد وتثبيت الحزم:
cd \${name}
npm install

# 3. إعداد متغيرات البيئة في ملف .env:
echo "VITE_API_URL=\${api}" > .env

# 4. تشغيل خادم التطوير المحلي فائق السرعة:
npm run dev\`;

      commandsOutput.textContent = text;
    }

    appNameInput.addEventListener('input', updateViteCommands);
    templateSelect.addEventListener('change', updateViteCommands);
    apiUrlInput.addEventListener('input', updateViteCommands);
    updateViteCommands();

    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(commandsOutput.textContent).then(() => {
        copyBtn.textContent = '✅ تم النسخ إلى الحافظة بنجاح!';
        setTimeout(() => copyBtn.textContent = '📋 نسخ الأوامر للـ Terminal', 2000);
      });
    });
  </script>
</body>
</html>`
  },
  sectionInfographic: {
    title: "إنفوجرافيك القسم الرابع: مدخل الاحتراف إلى عالم React وأدوات Vite الحديثة",
    badge: "محطة الانطلاق 4.0",
    overview: "القسم الرابع هو البوابة التي تعبر منها رسمياً من مطور JavaScript إلى مهندس واجهات React معتمد: فهم المكونات، شجرة التسلسل الهرمي، استغلال خفة وسرعة Vite، والسيطرة الكاملة على أدوات التشخيص والمراقبة.",
    stages: [
      { step: "1", title: "فلسفة React العصرية", desc: "التفكير التصريحي Declarative ومعمارية المكونات والشجرة الهرمية" },
      { step: "2", title: "مراحل تحديث الـ DOM", desc: "الإطلاق Trigger، حساب الفروقات في الذاكرة Render، والتثبيت الصافي Commit" },
      { step: "3", title: "منظومة أدوات Vite", desc: "إنشاء المشاريع الفوري، إدارة متغيرات البيئة VITE_، ونسخة الإنتاج dist" },
      { step: "4", title: "ترسانة فحص DevTools", desc: "تشريح الشجرة، تعديل الـ State حياً، مراقبة وميض التحديثات، وأمان StrictMode" }
    ],
    goldenRule: "لا تبدأ بكتابة سطر واحد من كود React دون فتح إضافة React DevTools في متصفحك؛ فهي عينك التي تبصر بها حقيقة شجرة المكونات وتدفق البيانات الحية."
  }
};
