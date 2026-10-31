// src/utils/infographicRegistry.js
// سجل ومولد الإنفوجرافيك والمخططات المعمارية البصرية لخريطة طريق Node.js
// يدعم 5 ثيمات نيون ومحرك توليد رسومات SVG المعمارية الهندسية المتطورة (Event Loop, Streams, HTTP, Caching, JWT)

/**
 * الثيمات التصميمية النيون الخمسة (5 Distinct Neon Themes)
 */
export const INFOGRAPHIC_THEMES = {
  cyber: {
    id: "cyber",
    name: "سايبر نيون",
    icon: "⚡",
    primary: "#06b6d4",
    secondary: "#3b82f6",
    accent: "#22d3ee",
    bg: "#050811",
    bgCard: "#0b1120",
    glow: "rgba(6, 182, 212, 0.3)",
    glowColor: "rgba(6, 182, 212, 0.14)",
    borderClass: "border-cyan-500/40 hover:border-cyan-400",
    gradientHeader: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    tagColor: "text-cyan-400",
    cardBgAccent: "rgba(6, 182, 212, 0.05)",
    boxBg: "bg-slate-900/90 border-cyan-900/40"
  },
  emerald: {
    id: "emerald",
    name: "الماتريكس الزمردي",
    icon: "🌿",
    primary: "#10b981",
    secondary: "#14b8a6",
    accent: "#06b6d4",
    bg: "#061712",
    bgCard: "#061712",
    glow: "rgba(16, 185, 129, 0.3)",
    glowColor: "rgba(16, 185, 129, 0.14)",
    borderClass: "border-emerald-500/40 hover:border-emerald-400",
    gradientHeader: "linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #06b6d4 100%)",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    tagColor: "text-emerald-400",
    cardBgAccent: "rgba(16, 185, 129, 0.05)",
    boxBg: "bg-emerald-950/40 border-emerald-900/40"
  },
  sunset: {
    id: "sunset",
    name: "شفق الغروب",
    icon: "🌅",
    primary: "#f97316",
    secondary: "#ea580c",
    accent: "#fbbf24",
    bg: "#190e06",
    bgCard: "#190e06",
    glow: "rgba(249, 115, 22, 0.3)",
    glowColor: "rgba(249, 115, 22, 0.14)",
    borderClass: "border-amber-500/40 hover:border-amber-400",
    gradientHeader: "linear-gradient(135deg, #f97316 0%, #ea580c 50%, #fbbf24 100%)",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    tagColor: "text-amber-400",
    cardBgAccent: "rgba(249, 115, 22, 0.05)",
    boxBg: "bg-amber-950/40 border-amber-900/40"
  },
  cosmic: {
    id: "cosmic",
    name: "السديم الكوني",
    icon: "🌌",
    primary: "#8b5cf6",
    secondary: "#6366f1",
    accent: "#ec4899",
    bg: "#0f0c1d",
    bgCard: "#0f0c1d",
    glow: "rgba(139, 92, 246, 0.3)",
    glowColor: "rgba(139, 92, 246, 0.14)",
    borderClass: "border-indigo-500/40 hover:border-indigo-400",
    gradientHeader: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #ec4899 100%)",
    badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
    tagColor: "text-indigo-400",
    cardBgAccent: "rgba(139, 92, 246, 0.05)",
    boxBg: "bg-indigo-950/40 border-indigo-900/40"
  },
  ruby: {
    id: "ruby",
    name: "الياقوت القرمزي",
    icon: "🔥",
    primary: "#f43f5e",
    secondary: "#e11d48",
    accent: "#fbbf24",
    bg: "#1a080e",
    bgCard: "#1a080e",
    glow: "rgba(244, 63, 94, 0.3)",
    glowColor: "rgba(244, 63, 94, 0.14)",
    borderClass: "border-rose-500/40 hover:border-rose-400",
    gradientHeader: "linear-gradient(135deg, #f43f5e 0%, #e11d48 50%, #fbbf24 100%)",
    badgeBg: "bg-rose-500/20 text-rose-300 border-rose-500/40",
    tagColor: "text-rose-400",
    cardBgAccent: "rgba(244, 63, 94, 0.05)",
    boxBg: "bg-rose-950/40 border-rose-900/40"
  }
};

/**
 * تحديد الثيم الافتراضي للدرس
 */
export function getDefaultThemeForSection(sectionId, subtopic = null) {
  const num = parseInt(sectionId, 10);

  if (subtopic) {
    const text = `${subtopic.title || ''} ${subtopic.englishTitle || ''}`.toLowerCase();
    if (text.includes('stream') || text.includes('buffer') || text.includes('performance') || text.includes('cluster')) {
      return 'emerald';
    }
    if (text.includes('security') || text.includes('auth') || text.includes('jwt') || text.includes('error') || text.includes('test')) {
      return 'ruby';
    }
    if (text.includes('database') || text.includes('redis') || text.includes('prisma') || text.includes('sql') || text.includes('graphql')) {
      return 'cosmic';
    }
    if (text.includes('http') || text.includes('express') || text.includes('api') || text.includes('rest')) {
      return 'cyber';
    }
  }

  if (num <= 4) return 'sunset';   // الأساسيات ومعمارية V8/Node.js
  if (num <= 8) return 'cyber';    // وحدات Core والشبكات وExpress
  if (num <= 14) return 'emerald'; // Streams, Buffers, Async & Performance
  if (num <= 19) return 'cosmic';  // قواعد البيانات والمصادقة والـ Microservices
  return 'ruby';                   // الأمان والاختبارات والنشر السحابي
}

/**
 * محرك توليد المخططات المعمارية البصرية الحتمية بصيغة SVG
 * يدعم 5 أنماط رئيسية لهندسة Backend في Node.js
 */
export function renderSvgArchitectureDiagram(schemaType, theme = INFOGRAPHIC_THEMES.cyber, subtopicData = {}) {
  const resolvedTheme = (typeof theme === 'string' ? INFOGRAPHIC_THEMES[theme] : theme) || INFOGRAPHIC_THEMES.cyber;
  const primary = resolvedTheme.primary || '#06b6d4';
  const secondary = resolvedTheme.secondary || '#3b82f6';
  const accent = resolvedTheme.accent || '#22d3ee';
  const bg = resolvedTheme.bg || '#050811';
  const safeData = subtopicData || {};
  const title = String(safeData.title || 'Node.js Architecture').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const engTitle = String(safeData.englishTitle || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const type = (schemaType || '').toLowerCase();

  // 1. مخطط حلقة الأحداث (Event Loop Phases Architecture)
  if (type.includes('event_loop') || type.includes('event loop') || type.includes('libuv') || type.includes('loop')) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${primary}" />
          <stop offset="100%" stop-color="${secondary}" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="${bg}" rx="16" />
      <rect x="20" y="20" width="760" height="360" fill="none" stroke="${primary}" stroke-width="1" stroke-opacity="0.2" rx="12" />

      <!-- العنوان العلوي -->
      <text x="400" y="55" fill="${accent}" font-family="Cairo, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">معمارية حلقة الأحداث • Node.js Event Loop Phases</text>

      <!-- المسار الدائري لحلقة الأحداث -->
      <circle cx="400" cy="220" r="110" stroke="${primary}" stroke-width="3" stroke-dasharray="8 6" fill="none" opacity="0.6" />
      
      <!-- المركز: Libuv & Microtasks -->
      <circle cx="400" cy="220" r="50" fill="${primary}" fill-opacity="0.15" stroke="${accent}" stroke-width="2" filter="url(#glow)" />
      <text x="400" y="215" fill="#ffffff" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">Microtasks</text>
      <text x="400" y="235" fill="${accent}" font-family="monospace" font-size="11" text-anchor="middle">nextTick / Promise</text>

      <!-- مراحل حلقة الأحداث الست -->
      <!-- Phase 1: Timers -->
      <g transform="translate(400, 110)">
        <circle cx="0" cy="0" r="28" fill="${bg}" stroke="${primary}" stroke-width="2" />
        <text x="0" y="-3" fill="#ffffff" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">1. Timers</text>
        <text x="0" y="12" fill="${accent}" font-family="monospace" font-size="9" text-anchor="middle">setTimeout</text>
      </g>

      <!-- Phase 2: Pending Callbacks -->
      <g transform="translate(500, 160)">
        <circle cx="0" cy="0" r="28" fill="${bg}" stroke="${primary}" stroke-width="2" />
        <text x="0" y="-3" fill="#ffffff" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">2. Pending</text>
        <text x="0" y="12" fill="${accent}" font-family="monospace" font-size="9" text-anchor="middle">I/O Callbacks</text>
      </g>

      <!-- Phase 3: Idle / Prepare -->
      <g transform="translate(500, 280)">
        <circle cx="0" cy="0" r="28" fill="${bg}" stroke="${primary}" stroke-width="2" />
        <text x="0" y="-3" fill="#ffffff" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">3. Idle</text>
        <text x="0" y="12" fill="${accent}" font-family="monospace" font-size="9" text-anchor="middle">Internal</text>
      </g>

      <!-- Phase 4: Poll -->
      <g transform="translate(400, 330)">
        <circle cx="0" cy="0" r="30" fill="${bg}" stroke="${accent}" stroke-width="2.5" filter="url(#glow)" />
        <text x="0" y="-4" fill="#ffffff" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">4. Poll</text>
        <text x="0" y="12" fill="${primary}" font-family="monospace" font-size="10" text-anchor="middle">Incoming I/O</text>
      </g>

      <!-- Phase 5: Check -->
      <g transform="translate(300, 280)">
        <circle cx="0" cy="0" r="28" fill="${bg}" stroke="${primary}" stroke-width="2" />
        <text x="0" y="-3" fill="#ffffff" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">5. Check</text>
        <text x="0" y="12" fill="${accent}" font-family="monospace" font-size="9" text-anchor="middle">setImmediate</text>
      </g>

      <!-- Phase 6: Close Callbacks -->
      <g transform="translate(300, 160)">
        <circle cx="0" cy="0" r="28" fill="${bg}" stroke="${primary}" stroke-width="2" />
        <text x="0" y="-3" fill="#ffffff" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">6. Close</text>
        <text x="0" y="12" fill="${accent}" font-family="monospace" font-size="9" text-anchor="middle">socket.close</text>
      </g>

      <!-- وسيلة الإيضاح السفلية -->
      <text x="400" y="375" fill="#94a3b8" font-family="Cairo, sans-serif" font-size="12" text-anchor="middle">تدور حلقة الأحداث باستمرار لمعالجة العمليات غير المتزامنة وتفريغ قائمة الـ Microtasks بين كل مرحلة وأخرى</text>
    </svg>`;
  }

  // 2. مخطط تدفق البيانات والأنابيب (Streams & Pipeline Architecture)
  if (type.includes('stream') || type.includes('pipeline') || type.includes('buffer')) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
      <defs>
        <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${primary}" />
          <stop offset="50%" stop-color="${secondary}" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="${bg}" rx="16" />
      <rect x="20" y="20" width="760" height="360" fill="none" stroke="${primary}" stroke-width="1" stroke-opacity="0.2" rx="12" />

      <!-- العنوان -->
      <text x="400" y="55" fill="${accent}" font-family="Cairo, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">مسار تدفق البيانات والأنابيب • Node.js Streams Pipeline</text>

      <!-- Box 1: Readable Stream -->
      <rect x="60" y="140" width="190" height="120" rx="10" fill="${primary}" fill-opacity="0.12" stroke="${primary}" stroke-width="2" />
      <text x="155" y="175" fill="#ffffff" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">Readable Stream</text>
      <text x="155" y="200" fill="${accent}" font-family="Cairo, sans-serif" font-size="13" text-anchor="middle">مصدر البيانات (Chunks)</text>
      <text x="155" y="235" fill="#94a3b8" font-family="monospace" font-size="11" text-anchor="middle">fs.createReadStream()</text>

      <!-- Arrow 1 -->
      <path d="M 250 200 L 310 200" stroke="${primary}" stroke-width="3" stroke-dasharray="6 4" marker-end="url(#arrow)" />
      <polygon points="310,195 320,200 310,205" fill="${primary}" />

      <!-- Box 2: Transform Stream -->
      <rect x="320" y="140" width="190" height="120" rx="10" fill="${secondary}" fill-opacity="0.12" stroke="${secondary}" stroke-width="2" />
      <text x="415" y="175" fill="#ffffff" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">Transform Stream</text>
      <text x="415" y="200" fill="${accent}" font-family="Cairo, sans-serif" font-size="13" text-anchor="middle">معالجة / ضغط / تشفير</text>
      <text x="415" y="235" fill="#94a3b8" font-family="monospace" font-size="11" text-anchor="middle">zlib.createGzip()</text>

      <!-- Arrow 2 -->
      <path d="M 510 200 L 570 200" stroke="${accent}" stroke-width="3" stroke-dasharray="6 4" />
      <polygon points="570,195 580,200 570,205" fill="${accent}" />

      <!-- Box 3: Writable Stream -->
      <rect x="580" y="140" width="160" height="120" rx="10" fill="${accent}" fill-opacity="0.12" stroke="${accent}" stroke-width="2" />
      <text x="660" y="175" fill="#ffffff" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">Writable Stream</text>
      <text x="660" y="200" fill="${accent}" font-family="Cairo, sans-serif" font-size="13" text-anchor="middle">الوجهة والهدف</text>
      <text x="660" y="235" fill="#94a3b8" font-family="monospace" font-size="11" text-anchor="middle">fs.createWriteStream()</text>

      <!-- شريط Backpressure السفلي -->
      <rect x="60" y="295" width="680" height="40" rx="8" fill="#0f172a" stroke="${primary}" stroke-width="1" />
      <text x="400" y="320" fill="#38bdf8" font-family="Cairo, sans-serif" font-size="13" text-anchor="middle">⚡ إدارة الضغط العكسي (Backpressure): تدفق Chunks على دفعات متزنة لحماية ذاكرة RAM من الامتلاء</text>
    </svg>`;
  }

  // 3. مخطط خادم الويب ومعالجة الطلبات (HTTP & Express Request/Response Flow)
  if (type.includes('http') || type.includes('express') || type.includes('api') || type.includes('rest')) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
      <rect width="800" height="400" fill="${bg}" rx="16" />
      <rect x="20" y="20" width="760" height="360" fill="none" stroke="${primary}" stroke-width="1" stroke-opacity="0.2" rx="12" />

      <!-- العنوان -->
      <text x="400" y="55" fill="${accent}" font-family="Cairo, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">مسار معالجة طلبات الـ HTTP • Request &amp; Response Flow</text>

      <!-- Client -->
      <rect x="50" y="150" width="140" height="100" rx="8" fill="#1e293b" stroke="${primary}" stroke-width="2" />
      <text x="120" y="190" fill="#ffffff" font-family="Cairo, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">العميل / المتصفح</text>
      <text x="120" y="215" fill="${accent}" font-family="monospace" font-size="11" text-anchor="middle">HTTP Client</text>

      <!-- Arrow Req -->
      <path d="M 190 180 L 260 180" stroke="${primary}" stroke-width="2.5" />
      <polygon points="260,176 270,180 260,184" fill="${primary}" />
      <text x="230" y="170" fill="${primary}" font-family="monospace" font-size="10" text-anchor="middle">Request</text>

      <!-- Middleware Pipeline -->
      <rect x="270" y="120" width="220" height="160" rx="10" fill="${primary}" fill-opacity="0.08" stroke="${primary}" stroke-width="1.5" stroke-dasharray="4 2" />
      <text x="380" y="145" fill="${accent}" font-family="Cairo, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">طبقة البرمجيات الوسيطة</text>
      <rect x="290" y="160" width="180" height="30" rx="4" fill="#0f172a" stroke="${secondary}" stroke-width="1" />
      <text x="380" y="180" fill="#e2e8f0" font-family="monospace" font-size="11" text-anchor="middle">1. CORS &amp; Helmet</text>
      <rect x="290" y="200" width="180" height="30" rx="4" fill="#0f172a" stroke="${secondary}" stroke-width="1" />
      <text x="380" y="220" fill="#e2e8f0" font-family="monospace" font-size="11" text-anchor="middle">2. express.json()</text>
      <rect x="290" y="240" width="180" height="30" rx="4" fill="#0f172a" stroke="${secondary}" stroke-width="1" />
      <text x="380" y="260" fill="#e2e8f0" font-family="monospace" font-size="11" text-anchor="middle">3. Auth Middleware</text>

      <!-- Arrow to Controller -->
      <path d="M 490 200 L 550 200" stroke="${accent}" stroke-width="2.5" />
      <polygon points="550,196 560,200 550,204" fill="${accent}" />

      <!-- Controller / Service -->
      <rect x="560" y="150" width="180" height="100" rx="8" fill="#1e293b" stroke="${accent}" stroke-width="2" />
      <text x="650" y="190" fill="#ffffff" font-family="Cairo, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">معالج المسار</text>
      <text x="650" y="215" fill="${accent}" font-family="monospace" font-size="11" text-anchor="middle">Route Controller</text>

      <!-- Arrow Res Return -->
      <path d="M 650 260 L 650 320 L 120 320 L 120 260" fill="none" stroke="${secondary}" stroke-width="2" stroke-dasharray="6 4" />
      <polygon points="124,260 120,250 116,260" fill="${secondary}" />
      <text x="400" y="340" fill="${secondary}" font-family="Cairo, sans-serif" font-size="12" text-anchor="middle">إرجاع الاستجابة (res.status(200).json(data)) بعد اكتمال المعالجة</text>
    </svg>`;
  }

  // 4. مخطط التخزين المؤقت والبيانات (Caching & Database Flow)
  if (type.includes('cache') || type.includes('redis') || type.includes('database') || type.includes('db')) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
      <rect width="800" height="400" fill="${bg}" rx="16" />
      <rect x="20" y="20" width="760" height="360" fill="none" stroke="${primary}" stroke-width="1" stroke-opacity="0.2" rx="12" />

      <!-- العنوان -->
      <text x="400" y="55" fill="${accent}" font-family="Cairo, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">نمط التخزين المؤقت الذكي • Cache-Aside Pattern (Redis &amp; DB)</text>

      <!-- App Server -->
      <rect x="60" y="160" width="160" height="90" rx="8" fill="#1e293b" stroke="${primary}" stroke-width="2" />
      <text x="140" y="200" fill="#ffffff" font-family="Cairo, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">تطبيق Node.js</text>
      <text x="140" y="225" fill="${accent}" font-family="monospace" font-size="11" text-anchor="middle">Backend Server</text>

      <!-- Redis Cache Box -->
      <rect x="320" y="100" width="180" height="90" rx="8" fill="${primary}" fill-opacity="0.15" stroke="${primary}" stroke-width="2" />
      <text x="410" y="135" fill="#ffffff" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">Redis Cache</text>
      <text x="410" y="160" fill="${accent}" font-family="Cairo, sans-serif" font-size="12" text-anchor="middle">ذاكرة RAM فائقة السرعة</text>
      <text x="410" y="178" fill="#38bdf8" font-family="monospace" font-size="10" text-anchor="middle">Latency &lt; 2ms</text>

      <!-- Database Box -->
      <rect x="560" y="220" width="180" height="90" rx="8" fill="${secondary}" fill-opacity="0.15" stroke="${secondary}" stroke-width="2" />
      <text x="650" y="255" fill="#ffffff" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">Database (SQL/NoSQL)</text>
      <text x="650" y="280" fill="${accent}" font-family="Cairo, sans-serif" font-size="12" text-anchor="middle">التخزين الدائم (Persistent)</text>

      <!-- Connections -->
      <!-- Check Cache -->
      <path d="M 220 180 L 320 145" stroke="${primary}" stroke-width="2" />
      <text x="270" y="150" fill="${primary}" font-family="monospace" font-size="10">1. GET key</text>

      <!-- Cache HIT / MISS -->
      <path d="M 320 165 L 220 200" stroke="${accent}" stroke-width="2" stroke-dasharray="4 2" />
      <text x="270" y="210" fill="${accent}" font-family="monospace" font-size="10">HIT: return</text>

      <!-- Query DB on MISS -->
      <path d="M 220 225 L 560 255" stroke="${secondary}" stroke-width="2" />
      <text x="380" y="255" fill="${secondary}" font-family="monospace" font-size="10">2. MISS: Query DB</text>

      <!-- Set Cache -->
      <path d="M 600 220 L 480 190" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 2" />
      <text x="560" y="195" fill="#f59e0b" font-family="monospace" font-size="10">3. SET key with TTL</text>

      <!-- وسيلة الإيضاح -->
      <text x="400" y="350" fill="#94a3b8" font-family="Cairo, sans-serif" font-size="12" text-anchor="middle">يحقق نمط Cache-Aside سرعة استجابة هائلة مع حماية قاعدة البيانات من ضغط الاستعلامات المتكررة</text>
    </svg>`;
  }

  // 5. مخطط التوثيق والمصادقة (JWT Auth Pipeline)
  if (type.includes('jwt') || type.includes('auth') || type.includes('security') || type.includes('أمان')) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
      <rect width="800" height="400" fill="${bg}" rx="16" />
      <rect x="20" y="20" width="760" height="360" fill="none" stroke="${primary}" stroke-width="1" stroke-opacity="0.2" rx="12" />

      <!-- العنوان -->
      <text x="400" y="55" fill="${accent}" font-family="Cairo, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">منظومة المصادقة وتوقيع الرموز • JWT Authentication Pipeline</text>

      <!-- Step 1: Login -->
      <rect x="50" y="140" width="180" height="120" rx="8" fill="#1e293b" stroke="${primary}" stroke-width="2" />
      <text x="140" y="175" fill="#ffffff" font-family="Cairo, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">1. تسجيل الدخول</text>
      <text x="140" y="200" fill="${accent}" font-family="monospace" font-size="11" text-anchor="middle">POST /api/login</text>
      <text x="140" y="225" fill="#94a3b8" font-family="Cairo, sans-serif" font-size="11" text-anchor="middle">التحقق من كلمة المرور (bcrypt)</text>

      <!-- Arrow to Sign -->
      <path d="M 230 200 L 290 200" stroke="${primary}" stroke-width="2.5" />
      <polygon points="290,196 300,200 290,204" fill="${primary}" />

      <!-- Step 2: Sign JWT -->
      <rect x="300" y="125" width="220" height="150" rx="10" fill="${primary}" fill-opacity="0.12" stroke="${primary}" stroke-width="2" />
      <text x="410" y="155" fill="#ffffff" font-family="Cairo, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">2. توقيع الرمز (Sign)</text>
      <rect x="320" y="170" width="180" height="25" rx="4" fill="#0f172a" stroke="${accent}" stroke-width="1" />
      <text x="410" y="187" fill="${accent}" font-family="monospace" font-size="10" text-anchor="middle">Header (Alg: HS256)</text>
      <rect x="320" y="200" width="180" height="25" rx="4" fill="#0f172a" stroke="${secondary}" stroke-width="1" />
      <text x="410" y="217" fill="${secondary}" font-family="monospace" font-size="10" text-anchor="middle">Payload (userId, role, exp)</text>
      <rect x="320" y="230" width="180" height="25" rx="4" fill="#0f172a" stroke="#f43f5e" stroke-width="1" />
      <text x="410" y="247" fill="#f43f5e" font-family="monospace" font-size="10" text-anchor="middle">Signature (HMACSHA256)</text>

      <!-- Arrow to Verify -->
      <path d="M 520 200 L 580 200" stroke="${accent}" stroke-width="2.5" />
      <polygon points="580,196 590,200 580,204" fill="${accent}" />

      <!-- Step 3: Verified Request -->
      <rect x="590" y="140" width="170" height="120" rx="8" fill="#1e293b" stroke="${accent}" stroke-width="2" />
      <text x="675" y="175" fill="#ffffff" font-family="Cairo, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">3. الطلبات المحمية</text>
      <text x="675" y="200" fill="${accent}" font-family="monospace" font-size="11" text-anchor="middle">Authorization: Bearer</text>
      <text x="675" y="225" fill="#94a3b8" font-family="Cairo, sans-serif" font-size="11" text-anchor="middle">jwt.verify(token, secret)</text>

      <!-- وسيلة الإيضاح -->
      <text x="400" y="335" fill="#94a3b8" font-family="Cairo, sans-serif" font-size="12" text-anchor="middle">Stateless Token: لا يحتاج الخادم لحفظ الجلسة في الذاكرة، ويتم التحقق من صحة التوقيع رياضياً فوراً</text>
    </svg>`;
  }

  // 6. المخطط المعماري الهندسي الافتراضي الشامل (Universal Flow Pipeline)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
    <rect width="800" height="400" fill="${bg}" rx="16" />
    <rect x="20" y="20" width="760" height="360" fill="none" stroke="${primary}" stroke-width="1" stroke-opacity="0.2" rx="12" />

    <!-- العنوان -->
    <text x="400" y="60" fill="${accent}" font-family="Cairo, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">${title}</text>
    ${engTitle ? `<text x="400" y="85" fill="#94a3b8" font-family="monospace" font-size="13" text-anchor="middle">${engTitle}</text>` : ''}

    <!-- 3 Tier Nodes -->
    <!-- Tier 1: Input -->
    <rect x="60" y="150" width="190" height="110" rx="10" fill="${primary}" fill-opacity="0.12" stroke="${primary}" stroke-width="2" />
    <text x="155" y="190" fill="#ffffff" font-family="Cairo, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">1. الإدخال والتهيئة</text>
    <text x="155" y="215" fill="${accent}" font-family="monospace" font-size="12" text-anchor="middle">Input &amp; Config</text>
    <text x="155" y="240" fill="#94a3b8" font-family="Cairo, sans-serif" font-size="10" text-anchor="middle">تعريف ومعالجة المدخلات</text>

    <!-- Arrow 1 -->
    <path d="M 250 205 L 310 205" stroke="${primary}" stroke-width="3" stroke-dasharray="6 4" />
    <polygon points="310,200 320,205 310,210" fill="${primary}" />

    <!-- Tier 2: Execution -->
    <rect x="320" y="150" width="190" height="110" rx="10" fill="${secondary}" fill-opacity="0.12" stroke="${secondary}" stroke-width="2" />
    <text x="415" y="190" fill="#ffffff" font-family="Cairo, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">2. محرك المعالجة</text>
    <text x="415" y="215" fill="${accent}" font-family="monospace" font-size="12" text-anchor="middle">V8 &amp; Libuv Engine</text>
    <text x="415" y="240" fill="#94a3b8" font-family="Cairo, sans-serif" font-size="10" text-anchor="middle">تنفيذ غير متزامن فائق السرعة</text>

    <!-- Arrow 2 -->
    <path d="M 510 205 L 570 205" stroke="${accent}" stroke-width="3" stroke-dasharray="6 4" />
    <polygon points="570,200 580,205 570,210" fill="${accent}" />

    <!-- Tier 3: Output -->
    <rect x="570" y="150" width="170" height="110" rx="10" fill="${accent}" fill-opacity="0.12" stroke="${accent}" stroke-width="2" />
    <text x="655" y="190" fill="#ffffff" font-family="Cairo, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">3. المخرجات والاستقرار</text>
    <text x="655" y="215" fill="${accent}" font-family="monospace" font-size="12" text-anchor="middle">Result &amp; Response</text>
    <text x="655" y="240" fill="#94a3b8" font-family="Cairo, sans-serif" font-size="10" text-anchor="middle">إرجاع النتيجة بثبات وأمان</text>

    <!-- وسيلة الإيضاح -->
    <text x="400" y="325" fill="#94a3b8" font-family="Cairo, sans-serif" font-size="12" text-anchor="middle">بناء معماري منظم يضمن الاستقرار العالي وسهولة الصيانة وكفاءة استهلاك الموارد</text>
  </svg>`;
}

/**
 * توليد مخطط وصفي مبسط للمفاهيم لاستخدامه في بطاقة الإنفوجرافيك
 */
export function generateVisualDiagramForConcept(subtopic, sectionId) {
  const title = (subtopic?.title || "").toLowerCase();
  const eng = (subtopic?.englishTitle || "").toLowerCase();

  if (title.includes('event loop') || eng.includes('event loop') || title.includes('حلقة الأحداث') || eng.includes('libuv')) {
    return {
      type: "event_loop",
      label: "معمارية حلقة الأحداث (Node.js Event Loop)",
      flowDescription: "معالجة غير متزامنة أحادية المسار مدعومة بـ Libuv Thread Pool."
    };
  }

  if (title.includes('stream') || eng.includes('stream') || title.includes('تدفق') || eng.includes('buffer')) {
    return {
      type: "streams_pipeline",
      label: "مسار تدفق البيانات (Streams Pipeline)",
      flowDescription: "معالجة البيانات كـ Chunks لتوفير الذاكرة مع إدارة الضغط العكسي."
    };
  }

  if (title.includes('http') || eng.includes('http') || title.includes('express') || eng.includes('express') || eng.includes('rest')) {
    return {
      type: "http_flow",
      label: "مسار طلبات واستجابات HTTP (Request-Response Flow)",
      flowDescription: "سلسلة معالجة عبر البرمجيات الوسيطة وتوجيه المسارات السريع."
    };
  }

  if (title.includes('redis') || eng.includes('redis') || title.includes('cache') || eng.includes('cache') || eng.includes('sql') || eng.includes('database')) {
    return {
      type: "db_caching",
      label: "نمط التخزين المؤقت (Cache-Aside with Redis)",
      flowDescription: "تسريع استجابة البيانات وتقليل الحمل على قاعدة البيانات الدائمة."
    };
  }

  if (title.includes('jwt') || eng.includes('jwt') || title.includes('auth') || eng.includes('auth') || eng.includes('security')) {
    return {
      type: "jwt_auth",
      label: "منظومة التوثيق الرقمي (JWT Authentication)",
      flowDescription: "رموز آمنة موقعة رقمياً للتحقق من هوية المستخدم دون جلسات مركزية."
    };
  }

  return {
    type: "universal_flow",
    label: "المخطط الهيكلي الهندسي (Universal Backend Flow)",
    flowDescription: "معمارية معيارية عالية الأداء لمنظومة Node.js."
  };
}

/**
 * توليد كائن إنفوجرافيك كامل للدرس
 */
export function buildInfographicForSubtopic(subtopic, sectionData = null) {
  if (!subtopic) return null;

  const sectionId = sectionData?.id || (typeof subtopic.id === 'string' ? parseInt(subtopic.id.split('.')[0], 10) : 1);
  const sectionTitle = sectionData?.title || `القسم ${sectionId}`;
  const theme = getDefaultThemeForSection(sectionId, subtopic);
  const visualDiagram = generateVisualDiagramForConcept(subtopic, sectionId);

  return {
    id: subtopic.id,
    sectionId,
    sectionTitle,
    title: subtopic.title,
    englishTitle: subtopic.englishTitle || subtopic.technicalTerm?.english || "Node.js Concept",
    badge: `الدرس ${subtopic.id} • ${sectionTitle}`,
    theme,
    visualDiagram,
    definition: subtopic.definition || "مفهوم برمجي أساسي في تطوير أنظمة Backend بـ Node.js.",
    goldenRule: subtopic.rules?.[0] || subtopic.goldenRule || "افهم سلوك حلقة الأحداث أولاً واعتمد البرمجة غير المتزامنة async/await دائماً.",
    pitfall: subtopic.pitfalls?.[0] || subtopic.pitfall || "تجنب حجب المسار الرئيسي (Blocking Event Loop) بالعمليات الحسابية المتزامنة الثقيلة.",
    analogy: subtopic.analogy || "مثل موظف الاستقبال الذكي الذي يستلم الطلبات ويوكل تنفيذها للفرق المساعدة دون أن يتعطل.",
    codeSnippet: subtopic.simpleCode || "// كود تطبيقي للمفهوم\nconsole.log('Node.js ready');"
  };
}

import { fetchSectionData, sectionCache, ROADMAP_SECTIONS } from '../data/sections/index.js';

let cachedAllInfographics = null;

/**
 * تحميل واستخراج كافة بطاقات الإنفوجرافيك الـ 981 لجميع الأقسام الـ 23 بشكل غير متزامن
 */
export async function loadAllInfographics() {
  if (cachedAllInfographics && cachedAllInfographics.length >= 900) {
    return cachedAllInfographics;
  }

  const promises = [];
  for (let i = 1; i <= 23; i++) {
    promises.push(fetchSectionData(i).catch(err => {
      console.warn(`تعذر تحميل القسم ${i} للإنفوجرافيك:`, err);
      return null;
    }));
  }

  const sections = await Promise.all(promises);
  const list = [];

  sections.forEach((sec) => {
    if (!sec || !sec.topics) return;
    sec.topics.forEach(topic => {
      if (!topic || !topic.subtopics) return;
      topic.subtopics.forEach(sub => {
        const enrichedSub = {
          ...sub,
          topicTitle: topic.title,
          topicId: topic.id
        };
        const info = buildInfographicForSubtopic(enrichedSub, sec);
        if (info) list.push(info);
      });
    });
  });

  cachedAllInfographics = list;
  return list;
}

/**
 * الحصول على بطاقات الإنفوجرافيك المتوفرة متزامناً
 */
export function getAllInfographics() {
  if (cachedAllInfographics) return cachedAllInfographics;

  const list = [];
  for (let i = 1; i <= 23; i++) {
    const sec = sectionCache.get(i);
    if (sec && sec.topics) {
      sec.topics.forEach(topic => {
        if (!topic || !topic.subtopics) return;
        topic.subtopics.forEach(sub => {
          const info = buildInfographicForSubtopic({ ...sub, topicTitle: topic.title, topicId: topic.id }, sec);
          if (info) list.push(info);
        });
      });
    }
  }
  return list;
}

/**
 * الحصول على إنفوجرافيكس قسم محدد
 */
export function getInfographicsBySectionId(sectionId) {
  const all = getAllInfographics();
  const numericId = parseInt(sectionId, 10);
  return all.filter(item => item.sectionId === numericId);
}

/**
 * البحث في الإنفوجرافيك بالكلمات المفتاحية
 */
export function searchInfographics(query) {
  const all = getAllInfographics();
  if (!query || !query.trim()) return all;

  const q = query.trim().toLowerCase();
  return all.filter(item => {
    return (
      (item.title && item.title.toLowerCase().includes(q)) ||
      (item.englishTitle && item.englishTitle.toLowerCase().includes(q)) ||
      (item.id && item.id.toLowerCase().includes(q)) ||
      (item.sectionTitle && item.sectionTitle.toLowerCase().includes(q)) ||
      (item.definition && item.definition.toLowerCase().includes(q)) ||
      (item.analogy && item.analogy.toLowerCase().includes(q))
    );
  });
}

