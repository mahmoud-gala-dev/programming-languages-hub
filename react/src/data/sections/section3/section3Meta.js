// src/data/sections/section3/section3Meta.js
// ملخص القسم الثالث، جدول المرجع السريع، المشروع التطبيقي الشامل، وبطاقة الإنفوجرافيك العامة

export const SECTION_3_META = {
  id: 3,
  title: "القسم 3: JavaScript الحديثة والمتقدمة",
  englishTitle: "Section 3: Modern & Advanced JavaScript",
  summary: [
    "ميزات ES6+ الذهبية: التفكيك (Destructuring) ومعاملا Spread و Rest (...) صمما لتسهيل التعامل مع البيانات وكتابة كود أنيق وغير مدمر.",
    "الأمان الصارم مع الخصائص: استخدام Optional Chaining (?.) يحميك تماماً من خطأ Cannot read properties of undefined، واستخدام Nullish Coalescing (??) يحافظ على الأصفار والقيم المنطقية الصالحة.",
    "سياق التنفيذ والرفع: يمر الكود بمرحلتي الإنشاء والتنفيذ؛ الدوال التقليدية تُرفع بكامل جسمها بينما let و const تحظر في المنطقة الميتة زمنياً (TDZ) حتى سطر تعريفها.",
    "الدوال المغلقة (Closures): تتذكر بيئتها الحاضنة وتدير الذاكرة، وهي الأساس الهندسي الذي بُنيت عليه خطافات React مثل useState و useEffect.",
    "الدوال النقية وعدم التعديل المباشر (Immutability): مكونات وتحديثات React تفترض النقاء التام؛ لا تعدل الكائنات والمصفوفات في مكانها أبداً بل أنشئ مراجع جديدة دائماً.",
    "البرمجة غير المتزامنة و async/await: حلقة الأحداث (Event Loop) تفرغ الـ Microtasks قبل الـ Macrotasks، وصياغة async/await تجعل الكود غير المتزامن خطياً ومقروءاً.",
    "التوازي وإلغاء الطلبات: استخدم Promise.all لتسريع الجلب بالتوازي، واستخدم AbortController لإلغاء الطلبات القديمة وتفادي الـ Race Conditions وتسريب الذاكرة في React.",
    "واجهات المتصفح الحديثة: LocalStorage للتفضيلات الدائمة، الكوكيز بـ HttpOnly لحماية التوكنات، التاريخ History API لراوترات الـ SPA، ومراقبات Intersection و Resize Observer للأداء الفائق."
  ],
  cheatSheet: [
    { category: "ميزات ES6+", syntax: "const { a, b = 10 } = obj;", description: "تفكيك الكائنات مع تعيين قيمة افتراضية" },
    { category: "ميزات ES6+", syntax: "const [first, ...rest] = arr;", description: "تفكيك المصفوفات واستخراج البواقي في مصفوفة مستقلة" },
    { category: "ميزات ES6+", syntax: "const clone = { ...obj, key: val };", description: "نسخ الكائن وتعديل خاصية بأسلوب غير مدمر" },
    { category: "ميزات ES6+", syntax: "user?.address?.city", description: "التسلسل الاختياري للقراءة الآمنة دون انهيار عند undefined" },
    { category: "ميزات ES6+", syntax: "val ?? 'افتراضي'", description: "مشغل الدمج الفارغ الصارم (يستبدل null و undefined فقط)" },
    { category: "ميزات ES6+", syntax: "export default fn / export { a }", description: "التصدير الافتراضي والمسمى في وحدات ES Modules" },
    { category: "ميزات ES6+", syntax: "const obj = { [dynamicKey]: 5 };", description: "الخصائص المحسوبة ديناميكياً في الكائنات" },
    { category: "المفاهيم المتقدمة", syntax: "const fn = () => this.x;", description: "الدوال السهمية ترث قيمة this من نطاقها المعجمي المحيط" },
    { category: "المفاهيم المتقدمة", syntax: "structuredClone(obj)", description: "النسخ العميق القياسي لكافة مستويات الكائنات المتداخلة" },
    { category: "المفاهيم المتقدمة", syntax: "Object.freeze(obj)", description: "تجميد الكائن برمجياً لمنع تعديل أو إضافة أي خاصية" },
    { category: "البرمجة غير المتزامنة", syntax: "async function getData() { ... }", description: "تعريف دالة غير متزامنة تعيد Promise تلقائياً" },
    { category: "البرمجة غير المتزامنة", syntax: "const data = await res.json();", description: "انتظار حل الوعد واستخراج ناتجه المباشر بسلاسة" },
    { category: "البرمجة غير المتزامنة", syntax: "Promise.all([p1, p2])", description: "تشغيل الوعود بالتوازي والفشل الفوري عند أول خطأ" },
    { category: "البرمجة غير المتزامنة", syntax: "Promise.allSettled([p1, p2])", description: "تشغيل بالتوازي مع تسجيل نتيجة كل وعد سواء نجح أو فشل" },
    { category: "البرمجة غير المتزامنة", syntax: "fetch(url, { signal: c.signal })", description: "ربط طلب الشبكة بإشارة الإلغاء AbortController" },
    { category: "البرمجة غير المتزامنة", syntax: "controller.abort()", description: "إلغاء طلب الشبكة المعلق فوراً لمنع الـ Race Condition" },
    { category: "البرمجة غير المتزامنة", syntax: "JSON.stringify(obj) / JSON.parse(str)", description: "تسطيح الكائن إلى نص JSON وفك النص إلى كائن حي" },
    { category: "واجهات المتصفح", syntax: "localStorage.setItem('k', v)", description: "حفظ قيمة دائمة في ذاكرة المتصفح المحلية" },
    { category: "واجهات المتصفح", syntax: "sessionStorage.setItem('k', v)", description: "حفظ قيمة مؤقتة تزول فور إغلاق التبويب الحالي" },
    { category: "واجهات المتصفح", syntax: "new URLSearchParams(location.search)", description: "قراءة وتعديل معلمات الرابط (Query Strings) برمجياً" },
    { category: "واجهات المتصفح", syntax: "history.pushState(null, '', path)", description: "تغيير الرابط في شريط المتصفح دون إعادة تحميل الصفحة (SPA)" },
    { category: "واجهات المتصفح", syntax: "new IntersectionObserver(callback)", description: "مراقبة ظهور العنصر في الشاشة للتحميل الكسول والتمرير اللانهائي" },
    { category: "واجهات المتصفح", syntax: "new ResizeObserver(callback)", description: "مراقبة تغير أبعاد وحجم المكون بدقة فائقة" },
    { category: "تحسين الأداء", syntax: "debounce(fn, 400)", description: "تأجيل التنفيذ حتى يتوقف المستخدم عن الكتابة تماماً" },
    { category: "تحسين الأداء", syntax: "throttle(fn, 200)", description: "تحديد سقف أقصى لتكرار التنفيذ كل فاصل زمني محدد" }
  ],
  miniProject: {
    title: "مشروع القسم الثالث: منصة متابعة العملات الرقمية والطقس اللاتزامنية (Async Crypto & Weather Hub)",
    description: "بناء تطبيق لوحة معلومات متقدم يجسد خلاصة مفاهيم JavaScript المتقدمة: جلب البيانات غير المتزامنة من واجهات APIs حية، إلغاء الطلبات السابقة باستخدام AbortController، فلترة البحث بـ Debounce الذكي، حفظ تفضيلات المستخدم بـ LocalStorage، والتحكم بالأخطاء بـ try/catch الصارمة.",
    livePreviewCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>منصة المؤشرات والطقس غير المتزامنة</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0f172a 100%);
      color: #f8fafc;
      min-height: 100vh;
      padding: 24px 16px;
    }
    .app-container { max-width: 900px; margin: 0 auto; }
    header { text-align: center; margin-bottom: 24px; }
    header h1 { font-size: 1.85rem; color: #38bdf8; margin-bottom: 6px; }
    header p { color: #94a3b8; font-size: 0.95rem; }
    
    .toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 24px;
      background: rgba(30, 41, 59, 0.7);
      padding: 14px;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      align-items: center;
      justify-content: space-between;
    }
    .search-box {
      flex: 1;
      min-width: 240px;
      position: relative;
    }
    input[type="text"] {
      width: 100%;
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid #334155;
      background: #0f172a;
      color: #f8fafc;
      font-size: 0.9rem;
      outline: none;
      transition: border-color 0.2s;
    }
    input:focus { border-color: #38bdf8; }
    
    .btn-action {
      background: #2563eb;
      color: white;
      border: none;
      padding: 10px 18px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .btn-action:hover { background: #1d4ed8; }
    .btn-action:disabled { opacity: 0.5; cursor: not-allowed; }

    .status-bar {
      font-size: 0.85rem;
      color: #94a3b8;
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 16px;
      padding: 6px 12px;
      border-radius: 6px;
      background: rgba(15, 23, 42, 0.6);
      width: fit-content;
    }
    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #10b981;
    }
    .status-dot.loading { background: #f59e0b; animation: pulse 1s infinite; }
    @keyframes pulse { 0% { opacity: 0.3; } 50% { opacity: 1; } 100% { opacity: 0.3; } }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .card {
      background: rgba(30, 41, 59, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 18px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      transition: transform 0.2s, border-color 0.2s;
    }
    .card:hover { transform: translateY(-2px); border-color: rgba(56, 189, 248, 0.4); }
    .card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
    .card-title { font-weight: 700; font-size: 1.1rem; color: #f8fafc; }
    .card-badge {
      font-size: 0.75rem;
      padding: 3px 8px;
      border-radius: 6px;
      font-weight: 600;
    }
    .badge-crypto { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }
    .badge-weather { background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); }
    .price-value { font-size: 1.6rem; font-weight: 800; color: #10b981; margin-bottom: 4px; }
    .card-meta { font-size: 0.8rem; color: #94a3b8; }

    .history-card {
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 12px;
      padding: 16px;
    }
    .history-title { font-size: 0.95rem; font-weight: 700; margin-bottom: 10px; color: #cbd5e1; }
    .history-tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .history-chip {
      background: #1e293b;
      border: 1px solid #334155;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 0.8rem;
      color: #94a3b8;
      cursor: pointer;
      transition: all 0.2s;
    }
    .history-chip:hover { background: #38bdf8; color: #0f172a; font-weight: 600; }
  </style>
</head>
<body>

  <div class="app-container">
    <header>
      <h1>منصة المؤشرات والطقس غير المتزامنة ⚡</h1>
      <p>مشروع تطبيقي كامل يجمع: Fetch، AbortController، Debounce، LocalStorage، و Promise.all</p>
    </header>

    <div class="toolbar">
      <div class="search-box">
        <input type="text" id="search-input" placeholder="ابحث عن عملة أو مؤشر (Debounced 400ms)...">
      </div>
      <button id="refresh-btn" class="btn-action">
        <span>تحديث فوري بالتوازي (Promise.all)</span>
      </button>
    </div>

    <div class="status-bar">
      <span id="status-dot" class="status-dot"></span>
      <span id="status-text">جميع الخدمات متصلة ومحدثة بنجاح</span>
    </div>

    <div id="cards-grid" class="grid"></div>

    <div class="history-card">
      <div class="history-title">🔍 أحدث عمليات البحث (محفوظة في LocalStorage):</div>
      <div id="history-tags" class="history-tags"></div>
    </div>
  </div>

  <script>
    // 1. حالة التطبيق (In-Memory State)
    let indicators = [
      { id: 'btc', name: 'البيتكوين (Bitcoin)', symbol: 'BTC', price: 68450, type: 'crypto', change: '+2.4%' },
      { id: 'eth', name: 'الإيثيريوم (Ethereum)', symbol: 'ETH', price: 3450, type: 'crypto', change: '+1.8%' },
      { id: 'sol', name: 'سولانا (Solana)', symbol: 'SOL', price: 180, type: 'crypto', change: '+4.5%' },
      { id: 'riyadh', name: 'طقس الرياض', symbol: 'RUH', price: '32°C', type: 'weather', change: 'مشمس صافٍ' },
      { id: 'cairo', name: 'طقس القاهرة', symbol: 'CAI', price: '27°C', type: 'weather', change: 'معتدل لطيف' },
      { id: 'dubai', name: 'طقس دبي', symbol: 'DXB', price: '34°C', type: 'weather', change: 'رطب حار' }
    ];

    let searchFilter = '';
    let abortController = null;

    // 2. مراجع عناصر DOM
    const searchInput = document.getElementById('search-input');
    const refreshBtn = document.getElementById('refresh-btn');
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    const cardsGrid = document.getElementById('cards-grid');
    const historyTags = document.getElementById('history-tags');

    // 3. إدارة التخزين المحلي LocalStorage مع JSON
    const Storage = {
      KEY: 'async_dashboard_searches',
      get() {
        try {
          const raw = localStorage.getItem(this.KEY);
          return raw ? JSON.parse(raw) : ['BTC', 'الرياض', 'ETH'];
        } catch {
          return [];
        }
      },
      add(term) {
        const clean = term.trim();
        if (!clean) return;
        const current = this.get().filter(t => t.toLowerCase() !== clean.toLowerCase());
        const updated = [clean, ...current].slice(0, 6);
        try {
          localStorage.setItem(this.KEY, JSON.stringify(updated));
        } catch (e) {
          console.error(e);
        }
        renderHistory();
      }
    };

    // 4. دالة Debounce الكلاسيكية لحقول البحث
    function debounce(fn, delayMs = 400) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delayMs);
      };
    }

    // 5. تصيير البطاقات في واجهة المستخدم
    function renderCards() {
      cardsGrid.innerHTML = '';
      
      const filtered = indicators.filter(item => 
        item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchFilter.toLowerCase())
      );

      if (filtered.length === 0) {
        cardsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 24px;">لا توجد نتائج تطابق بحثك 🌿</div>';
        return;
      }

      filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = \`
          <div class="card-top">
            <span class="card-title">\${item.name}</span>
            <span class="card-badge \${item.type === 'crypto' ? 'badge-crypto' : 'badge-weather'}">
              \${item.type === 'crypto' ? 'عملة رقمية 🪙' : 'محطة طقس ⛅'}
            </span>
          </div>
          <div class="price-value">\${typeof item.price === 'number' ? '$' + item.price.toLocaleString() : item.price}</div>
          <div class="card-meta">الحالة / التغير: <strong style="color: #38bdf8;">\${item.change}</strong></div>
        \`;
        cardsGrid.appendChild(card);
      });
    }

    // 6. تصيير وسوم سجل البحث
    function renderHistory() {
      historyTags.innerHTML = '';
      const list = Storage.get();
      list.forEach(item => {
        const span = document.createElement('span');
        span.className = 'history-chip';
        span.textContent = item;
        span.onclick = () => {
          searchInput.value = item;
          searchFilter = item;
          renderCards();
        };
        historyTags.appendChild(span);
      });
    }

    // 7. محاكاة تحديث غير متزامن بالتوازي عبر Promise.all و AbortController
    async function refreshDataAsync() {
      // إلغاء أي طلب نشط سابق
      if (abortController) {
        abortController.abort();
      }
      abortController = new AbortController();

      // تحديث حالة الواجهة
      statusDot.className = 'status-dot loading';
      statusText.textContent = 'جاري جلب البيانات من الخوادم بالتوازي (Promise.all)...';
      refreshBtn.disabled = true;

      try {
        // محاكاة استدعاءين متوازيين للشبكة مع ربط إشارة الإلغاء
        const fetchCrypto = new Promise((resolve) => {
          setTimeout(() => {
            resolve({ btcAdd: Math.floor(Math.random() * 500) - 250 });
          }, 600);
        });

        const fetchWeather = new Promise((resolve) => {
          setTimeout(() => {
            resolve({ tempVariation: Math.floor(Math.random() * 3) - 1 });
          }, 450);
        });

        // تشغيل الوعدين بالتوازي
        const [cryptoRes, weatherRes] = await Promise.all([fetchCrypto, fetchWeather]);

        // تحديث الحالة بنقاء تام (Immutability) عبر map و Spread
        indicators = indicators.map(item => {
          if (item.type === 'crypto') {
            const nextPrice = Math.max(1, item.price + cryptoRes.btcAdd);
            return { ...item, price: nextPrice };
          }
          return item;
        });

        statusDot.className = 'status-dot';
        statusText.textContent = 'تم تحديث كافة الأسعار والطقس بنجاح في لحظة واحدة ✅';
        renderCards();
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('تم إلغاء التحديث السابق بأمان.');
        } else {
          statusDot.style.background = '#ef4444';
          statusText.textContent = 'تعذر تحديث البيانات: ' + err.message;
        }
      } finally {
        refreshBtn.disabled = false;
      }
    }

    // 8. الاستماع لمدخلات البحث بـ Debounce
    const handleSearchInput = debounce((val) => {
      searchFilter = val;
      if (val.trim()) {
        Storage.add(val.trim());
      }
      renderCards();
    }, 400);

    searchInput.addEventListener('input', (e) => {
      handleSearchInput(e.target.value);
    });

    refreshBtn.addEventListener('click', () => {
      refreshDataAsync();
    });

    // التشغيل الأولي
    renderCards();
    renderHistory();
  </script>
</body>
</html>`
  },
  sectionInfographic: {
    title: "إنفوجرافيك القسم الثالث: الجسر الذهبي من JavaScript إلى احتراف React",
    badge: "محطة الاحتراف 3.0",
    overview: "القسم الثالث يمثل النضج البرمجي الحقيقي لمطور الويب الحديث: الدوال النقية، حلقة الأحداث، إدارة الذاكرة، الصياغات غير المتزامنة، وحراسة المتصفح. مع هذا الأساس، تصبح مفاهيم React بديهية وطبيعية كالتنفس.",
    stages: [
      { step: "1", title: "ميزات ES6+ العصرية", desc: "التفكيك Destructuring، معاملا Spread و Rest، و Optional Chaining" },
      { step: "2", title: "كواليس الذاكرة والمحرك", desc: "سياق التنفيذ، الـ Closures، الدوال النقية، ومبدأ عدم التعديل Immutability" },
      { step: "3", title: "البرمجة غير المتزامنة", desc: "الـ Event Loop، صياغة async/await، الـ Fetch، وإلغاء الطلبات بـ AbortController" },
      { step: "4", title: "واجهات المتصفح المتقدمة", desc: "التخزين بـ LocalStorage، راوترات الـ SPA، ومراقبات الأداء وتقنيات الـ Debounce" }
    ],
    goldenRule: "مكتبة React 19 لم تخترع لغة جديدة؛ بل أخذت أفضل ما في JavaScript (الدوال النقية، Closures، و Immutability) وجعلته نظاماً متكاملاً لبناء واجهات المستقبل."
  }
};
