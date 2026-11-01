// src/components/motion/compositions/SvgMotionDiagram.jsx
// محرك الرسوم التوضيحية والمعمارية SVG الحركية المتوافقة مع Remotion
import React from 'react';
import { interpolate, spring } from 'remotion';

/**
 * تحديد نوع المخطط المعماري المناسب تلقائياً بناءً على محتوى وعنوان الدرس
 */
export function detectDiagramType(subtopic) {
  const text = `${subtopic?.id || ''} ${subtopic?.title || ''} ${subtopic?.englishTitle || ''} ${subtopic?.definition || ''} ${subtopic?.description || ''} ${subtopic?.concept || ''}`.toLowerCase();

  // 1. أساسيات الويب: الواجهة والخادم والشبكة
  if (text.includes('frontend') || text.includes('backend') || text.includes('client') || text.includes('server') || text.includes('http') || text.includes('خادم') || text.includes('عميل') || text.includes('واجهة')) {
    return 'client-server';
  }
  // 2. ثلاثي الويب: HTML, CSS, JavaScript
  if (text.includes('html') || text.includes('css') || text.includes('javascript') || text.includes('js') || text.includes('هيكل') || text.includes('تنسيق')) {
    return 'html-css-js';
  }
  // 3. Virtual DOM والـ Diffing
  if (text.includes('vdom') || text.includes('virtual dom') || text.includes('dom') || text.includes('reconciliation') || text.includes('diffing')) {
    return 'vdom';
  }
  // 4. Hooks ودورة الحياة
  if (text.includes('hook') || text.includes('useeffect') || text.includes('usestate') || text.includes('lifecycle') || text.includes('دورة حياة')) {
    return 'hooks';
  }
  // 5. إدارة الحالة وContext
  if (text.includes('context') || text.includes('redux') || text.includes('zustand') || text.includes('state') || text.includes('حالة')) {
    return 'context';
  }
  // 6. التوجيه ومسارات SPA
  if (text.includes('router') || text.includes('route') || text.includes('spa') || text.includes('توجيه') || text.includes('مسار')) {
    return 'routing';
  }
  // 7. الأداء والتسريع
  if (text.includes('memo') || text.includes('callback') || text.includes('performance') || text.includes('أداء') || text.includes('تسريع')) {
    return 'performance';
  }
  // 8. المكونات والـ Props
  if (text.includes('props') || text.includes('component') || text.includes('مكون') || text.includes('بيانات')) {
    return 'state-props';
  }
  return 'architecture';
}

export default function SvgMotionDiagram({ type = 'architecture', subtopic, frame, fps }) {
  // نبضات حركية هادئة ومريحة للمتعلم (دورة تنفس هادئة كل 4 ثوانٍ)
  const pulse = interpolate(Math.sin((frame / (fps * 2)) * Math.PI), [-1, 1], [0.95, 1.05]);
  const progress = interpolate(frame % (fps * 5), [0, fps * 5], [0, 100]);
  const wave = Math.sin((frame / 30)) * 8;

  // استخراج الخطوات الديناميكية التابعة للدرس الحالي
  const steps = subtopic?.infographic?.steps || [];
  const step1Title = steps[0]?.title || 'المكونات الذكية';
  const step1Desc = steps[0]?.desc ? (steps[0].desc.length > 28 ? steps[0].desc.slice(0, 26) + '...' : steps[0].desc) : 'Components & JSX';
  const step2Title = steps[1]?.title || 'إدارة الحالة';
  const step2Desc = steps[1]?.desc ? (steps[1].desc.length > 28 ? steps[1].desc.slice(0, 26) + '...' : steps[1].desc) : 'Reactive State Engine';
  const step3Title = steps[2]?.title || 'التزامن والأداء';
  const step3Desc = steps[2]?.desc ? (steps[2].desc.length > 28 ? steps[2].desc.slice(0, 26) + '...' : steps[2].desc) : 'Zero Unneeded Renders';
  const centerTitle = subtopic?.title ? (subtopic.title.length > 16 ? subtopic.title.slice(0, 14) + '..' : subtopic.title) : '⚛️ React';

  // 1. مخطط تدفق العميل والخادم (Frontend vs Backend & Client-Server Flow)
  if (type === 'client-server') {
    // دورة حركة هادئة ومريحة للمتعلم: 6 ثوانٍ كاملة للطلب والاستجابة
    const cycleFrames = fps * 6;
    const packetProgress = (frame % cycleFrames) / cycleFrames;
    // حركة متدرجة سلسة عبر دالة جيب التمام المهدئة (Cosine Easing)
    const easeProgress = 0.5 - 0.5 * Math.cos(packetProgress * Math.PI * 2);
    const packetX = interpolate(easeProgress, [0, 1], [270, 520]);
    const isGoingRight = packetProgress <= 0.5;

    return (
      <svg 
        viewBox="0 0 800 450" 
        preserveAspectRatio="xMidYMid meet" 
        className="w-full h-full max-h-[380px] drop-shadow-2xl font-sans mx-auto block"
      >
        <defs>
          <linearGradient id="clientGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="serverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <filter id="neonPacket">
            <feGaussianBlur stdDeviation="5" result="glow"/>
            <feMerge>
              <feMergeNode in="glow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* جانب العميل والمتصفح (Frontend / Client) */}
        <g transform="translate(40, 45)">
          <rect width="250" height="340" rx="20" fill="#0b1329" stroke="#38bdf8" strokeWidth="2.5" />
          <rect x="0" y="0" width="250" height="42" rx="20" fill="#1e293b" />
          <circle cx="25" cy="21" r="5" fill="#f43f5e" />
          <circle cx="42" cy="21" r="5" fill="#fbbf24" />
          <circle cx="59" cy="21" r="5" fill="#10b981" />
          <text x="145" y="26" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">متصفح المستخدم (Client)</text>

          {/* محتويات المتصفح */}
          <rect x="25" y="65" width="200" height="90" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 3" />
          <text x="125" y="98" fill="#38bdf8" fontSize="15" fontWeight="black" textAnchor="middle" fontFamily="Cairo">الواجهة الأمامية</text>
          <text x="125" y="125" fill="#7dd3fc" fontSize="12" fontWeight="bold" textAnchor="middle">Frontend (UI / UX)</text>
          <text x="125" y="143" fill="#64748b" fontSize="10" textAnchor="middle">React • HTML • CSS • JS</text>

          {/* شاشة العرض التفاعلية */}
          <rect x="25" y="175" width="200" height="110" rx="12" fill="#030712" border="1" />
          <rect x="40" y="195" width="80" height="14" rx="4" fill="#38bdf8" opacity="0.8" />
          <rect x="40" y="218" width="140" height="8" rx="3" fill="#334155" />
          <rect x="40" y="233" width="110" height="8" rx="3" fill="#334155" />
          <rect x="40" y="255" width="65" height="18" rx="6" fill="#10b981" />
          <text x="72" y="268" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">زر إرسال</text>

          <rect x="25" y="300" width="200" height="24" rx="6" fill="#0284c7" opacity="0.2" />
          <text x="125" y="316" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">كل ما يراه ويتفاعل معه المستخدم</text>
        </g>

        {/* خط اتصال الشبكة والـ HTTP Protocols */}
        <g transform="translate(300, 190)">
          <line x1="0" y1="20" x2="200" y2="20" stroke="#334155" strokeWidth="4" strokeDasharray="8 6" />
          
          {/* حزمة البيانات المتحركة (HTTP Request / Response) */}
          <g transform={`translate(${packetX - 300}, 0)`}>
            <rect x="-45" y="0" width="90" height="40" rx="10" fill={isGoingRight ? "#0284c7" : "#10b981"} filter="url(#neonPacket)" />
            <text x="0" y="18" fill="#fff" fontSize="10" fontWeight="black" textAnchor="middle" fontFamily="Cairo">
              {isGoingRight ? "طلب HTTP ➔" : "⟵ استجابة JSON"}
            </text>
            <text x="0" y="32" fill="#e2e8f0" fontSize="8" textAnchor="middle" fontFamily="monospace">
              {isGoingRight ? "GET /api/data" : "Status: 200 OK"}
            </text>
          </g>

          <text x="100" y="-12" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            شبكة الإنترنت (Internet / APIs)
          </text>
        </g>

        {/* جانب الخادم وقواعد البيانات (Backend / Server) */}
        <g transform="translate(510, 45)">
          <rect width="250" height="340" rx="20" fill="#120c24" stroke="#a855f7" strokeWidth="2.5" />
          <rect x="0" y="0" width="250" height="42" rx="20" fill="#2e1065" />
          <text x="125" y="26" fill="#c084fc" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">الخادم السحابي (Backend Server)</text>

          {/* محرك المعالجة والأمان */}
          <rect x="25" y="65" width="200" height="85" rx="12" fill="#1e113a" stroke="#a855f7" strokeWidth="1" strokeDasharray="4 3" />
          <text x="125" y="98" fill="#c084fc" fontSize="15" fontWeight="black" textAnchor="middle" fontFamily="Cairo">الواجهة الخلفية</text>
          <text x="125" y="122" fill="#e9d5ff" fontSize="12" fontWeight="bold" textAnchor="middle">Backend (Logic &amp; DB)</text>
          <text x="125" y="140" fill="#a855f7" fontSize="10" textAnchor="middle">Node.js • Python • APIs</text>

          {/* أسطوانة قاعدة البيانات (Database) */}
          <g transform="translate(55, 175)">
            <rect x="0" y="15" width="140" height="80" rx="8" fill="#2e1065" stroke="#c084fc" strokeWidth="2" />
            <ellipse cx="70" cy="15" rx="70" ry="18" fill="#581c87" stroke="#c084fc" strokeWidth="2" />
            <ellipse cx="70" cy="50" rx="70" ry="16" fill="none" stroke="#7e22ce" strokeWidth="1.5" strokeDasharray="5 3" />
            <ellipse cx="70" cy="95" rx="70" ry="18" fill="#3b0764" stroke="#c084fc" strokeWidth="2" />
            <text x="70" y="60" fill="#f5d0fe" fontSize="13" fontWeight="bold" textAnchor="middle">Database 🗄️</text>
          </g>

          <rect x="25" y="300" width="200" height="24" rx="6" fill="#7c3aed" opacity="0.2" />
          <text x="125" y="316" fill="#c084fc" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">معالجة الحسابات، الأمان، وحفظ البيانات</text>
        </g>
      </svg>
    );
  }

  // 2. مخطط ثلاثي الويب (HTML + CSS + JavaScript)
  if (type === 'html-css-js') {
    return (
      <svg 
        viewBox="0 0 800 450" 
        preserveAspectRatio="xMidYMid meet" 
        className="w-full h-full max-h-[380px] drop-shadow-2xl font-sans mx-auto block"
      >
        {/* العمود 1: HTML الهيكل */}
        <g transform="translate(50, 60)">
          <rect width="210" height="320" rx="20" fill="#0f172a" stroke="#ea580c" strokeWidth="2.5" />
          <rect x="0" y="0" width="210" height="50" rx="20" fill="#431407" />
          <text x="105" y="32" fill="#fb923c" fontSize="16" fontWeight="black" textAnchor="middle">1. HTML 🦴</text>
          <text x="105" y="95" fill="#f97316" fontSize="18" fontWeight="black" textAnchor="middle" fontFamily="Cairo">الهيكل العظمي</text>
          <text x="105" y="125" fill="#cbd5e1" fontSize="12" textAnchor="middle">Structure &amp; Semantics</text>
          
          <rect x="25" y="150" width="160" height="120" rx="10" fill="#1c1917" />
          <text x="35" y="175" fill="#ea580c" fontSize="11" fontFamily="monospace">&lt;header&gt;</text>
          <text x="45" y="200" fill="#fdba74" fontSize="11" fontFamily="monospace">&lt;h1&gt;العنوان&lt;/h1&gt;</text>
          <text x="45" y="225" fill="#fdba74" fontSize="11" fontFamily="monospace">&lt;button&gt;نقرة&lt;/button&gt;</text>
          <text x="35" y="250" fill="#ea580c" fontSize="11" fontFamily="monospace">&lt;/header&gt;</text>

          <text x="105" y="300" fill="#fdba74" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">بناء العظام والفقرات</text>
        </g>

        {/* سهم تكاملي 1 */}
        <g transform="translate(268, 200)">
          <circle cx="15" cy="15" r="16" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          <text x="15" y="21" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">+</text>
        </g>

        {/* العمود 2: CSS المظهر والتنسيق */}
        <g transform="translate(300, 60)">
          <rect width="210" height="320" rx="20" fill="#0f172a" stroke="#0284c7" strokeWidth="2.5" />
          <rect x="0" y="0" width="210" height="50" rx="20" fill="#082f49" />
          <text x="105" y="32" fill="#38bdf8" fontSize="16" fontWeight="black" textAnchor="middle">2. CSS 🎨</text>
          <text x="105" y="95" fill="#0284c7" fontSize="18" fontWeight="black" textAnchor="middle" fontFamily="Cairo">المظهر والملابس</text>
          <text x="105" y="125" fill="#cbd5e1" fontSize="12" textAnchor="middle">Styles, Layout &amp; Colors</text>
          
          <rect x="25" y="150" width="160" height="120" rx="10" fill="#0c2338" />
          <text x="35" y="175" fill="#38bdf8" fontSize="11" fontFamily="monospace">header &#123;</text>
          <text x="45" y="200" fill="#bae6fd" fontSize="11" fontFamily="monospace">background: #000;</text>
          <text x="45" y="225" fill="#bae6fd" fontSize="11" fontFamily="monospace">color: #cyan;</text>
          <text x="35" y="250" fill="#38bdf8" fontSize="11" fontFamily="monospace">&#125;</text>

          <text x="105" y="300" fill="#7dd3fc" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">الألوان، الظلال، والتجاوب</text>
        </g>

        {/* سهم تكاملي 2 */}
        <g transform="translate(518, 200)">
          <circle cx="15" cy="15" r="16" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          <text x="15" y="21" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">+</text>
        </g>

        {/* العمود 3: JavaScript العقل والتفاعل */}
        <g transform="translate(550, 60)">
          <rect width="210" height="320" rx="20" fill="#0f172a" stroke="#eab308" strokeWidth="2.5" />
          <rect x="0" y="0" width="210" height="50" rx="20" fill="#422006" />
          <text x="105" y="32" fill="#fde047" fontSize="16" fontWeight="black" textAnchor="middle">3. JavaScript 🧠</text>
          <text x="105" y="95" fill="#eab308" fontSize="18" fontWeight="black" textAnchor="middle" fontFamily="Cairo">العقل والتفاعل</text>
          <text x="105" y="125" fill="#cbd5e1" fontSize="12" textAnchor="middle">Logic, Events &amp; API</text>
          
          <rect x="25" y="150" width="160" height="120" rx="10" fill="#291e0a" />
          <text x="35" y="175" fill="#facc15" fontSize="11" fontFamily="monospace">btn.onclick = () =&gt; &#123;</text>
          <text x="45" y="200" fill="#fef08a" fontSize="11" fontFamily="monospace">fetch('/api/user')</text>
          <text x="45" y="225" fill="#fef08a" fontSize="11" fontFamily="monospace">.then(renderUI);</text>
          <text x="35" y="250" fill="#facc15" fontSize="11" fontFamily="monospace">&#125;</text>

          <text x="105" y="300" fill="#fde047" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">الحركة، التفكير، والاتصال</text>
        </g>
      </svg>
    );
  }

  // 3. مخطط شجرة الـ Virtual DOM ومطابقة الـ Diffing
  if (type === 'vdom') {
    // تبديل هادئ كل ثانيتين بدلاً من الوميض السريع
    const diffHighlight = Math.floor(frame / (fps * 2)) % 2 === 0;
    return (
      <svg 
        viewBox="0 0 800 450" 
        preserveAspectRatio="xMidYMid meet" 
        className="w-full h-full max-h-[380px] drop-shadow-2xl mx-auto block"
      >
        <defs>
          <linearGradient id="vdomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="domGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* جانب Virtual DOM */}
        <g transform="translate(40, 30)">
          <rect width="320" height="380" rx="20" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 4" opacity="0.8" />
          <text x="160" y="45" fill="#38bdf8" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">شجرة Virtual DOM الافتراضية</text>
          
          {/* عقد الشجرة */}
          <line x1="160" y1="100" x2="100" y2="180" stroke="#38bdf8" strokeWidth="3" opacity="0.7" />
          <line x1="160" y1="100" x2="220" y2="180" stroke="#38bdf8" strokeWidth="3" opacity="0.7" />
          <line x1="100" y1="180" x2="70" y2="270" stroke="#38bdf8" strokeWidth="3" opacity="0.7" />
          <line x1="100" y1="180" x2="130" y2="270" stroke="#38bdf8" strokeWidth="3" opacity="0.7" />

          {/* Root Component */}
          <circle cx="160" cy="100" r={26 * pulse} fill="url(#vdomGrad)" filter="url(#neonGlow)" />
          <text x="160" y="106" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">&lt;App /&gt;</text>

          {/* Child 1 */}
          <circle cx="100" cy="180" r="22" fill="#0284c7" />
          <text x="100" y="185" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">&lt;Header&gt;</text>

          {/* Child 2 (العقدة التي تتغير - Diff) */}
          <circle 
            cx="220" 
            cy="180" 
            r={diffHighlight ? 25 : 22} 
            fill={diffHighlight ? "#f43f5e" : "#0284c7"} 
            stroke="#fff" 
            strokeWidth={diffHighlight ? 3 : 1}
            filter={diffHighlight ? "url(#neonGlow)" : ""}
          />
          <text x="220" y="185" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">&lt;Count /&gt;</text>

          {/* Leafs */}
          <circle cx="70" cy="270" r="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="70" y="275" fill="#94a3b8" fontSize="10" textAnchor="middle">Logo</text>

          <circle cx="130" cy="270" r="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="130" y="275" fill="#94a3b8" fontSize="10" textAnchor="middle">Nav</text>
        </g>

        {/* سهم محرك المقارنة السريعة Diffing Engine */}
        <g transform="translate(370, 200)">
          <circle cx="30" cy="20" r="32" fill="#1e293b" stroke="#a855f7" strokeWidth="3" filter="url(#neonGlow)" />
          <text x="30" y="20" fill="#c084fc" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">Diffing</text>
          <text x="30" y="34" fill="#cbd5e1" fontSize="9" textAnchor="middle">O(n)</text>
          <path d="M 68 20 L 95 20 M 85 10 L 95 20 L 85 30" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" fill="none" />
        </g>

        {/* جانب Real DOM في المتصفح */}
        <g transform="translate(440, 30)">
          <rect width="320" height="380" rx="20" fill="#0f172a" stroke="#10b981" strokeWidth="2" opacity="0.8" />
          <text x="160" y="45" fill="#10b981" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">شجرة المتصفح Real DOM</text>
          
          <line x1="160" y1="100" x2="100" y2="180" stroke="#10b981" strokeWidth="3" opacity="0.6" />
          <line x1="160" y1="100" x2="220" y2="180" stroke="#10b981" strokeWidth="3" opacity="0.6" />

          {/* Root */}
          <circle cx="160" cy="100" r="24" fill="#059669" />
          <text x="160" y="105" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle">&lt;div#root&gt;</text>

          <circle cx="100" cy="180" r="20" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
          <text x="100" y="185" fill="#94a3b8" fontSize="10" textAnchor="middle">header</text>

          {/* Only this node gets updated in Real DOM! */}
          <circle 
            cx="220" 
            cy="180" 
            r={diffHighlight ? 26 : 22} 
            fill={diffHighlight ? "#10b981" : "#059669"} 
            stroke="#34d399" 
            strokeWidth={diffHighlight ? 4 : 1}
            filter={diffHighlight ? "url(#neonGlow)" : ""}
          />
          <text x="220" y="185" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">span#val</text>

          {/* التحديث الفعلي فقط */}
          <rect x="50" y="320" width="220" height="38" rx="10" fill="#064e3b" stroke="#34d399" strokeWidth="1" />
          <text x="160" y="344" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            ✓ تحديث العقدة المعدلة فقط!
          </text>
        </g>
      </svg>
    );
  }

  // 2. مخطط تدفق البيانات أحادي الاتجاه (State & Props Unidirectional Flow)
  if (type === 'state-props') {
    // حركة انسيابية هادئة للبيانات كل 5 ثوانٍ
    const flowProgress = interpolate(frame % (fps * 5), [0, fps * 5], [0, 120]);
    return (
      <svg 
        viewBox="0 0 800 450" 
        preserveAspectRatio="xMidYMid meet" 
        className="w-full h-full max-h-[380px] drop-shadow-2xl mx-auto block"
      >
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {/* Parent Component */}
        <g transform="translate(250, 40)">
          <rect width="300" height="110" rx="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
          <text x="150" y="40" fill="#38bdf8" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">المكون الأب (Parent Component)</text>
          
          <rect x="40" y="60" width="220" height="34" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
          <text x="150" y="82" fill="#f8fafc" fontSize="13" textAnchor="middle" fontFamily="JetBrains Mono">
            const [data, setData] = useState(...)
          </text>
        </g>

        {/* سهم تدفق الـ Props لأسفل */}
        <g transform="translate(400, 160)">
          <line x1="0" y1="0" x2="0" y2="120" stroke="#38bdf8" strokeWidth="5" strokeDasharray="8 6" />
          <circle cx="0" cy={flowProgress} r="10" fill="#38bdf8" />
          <rect x="-80" y="45" width="160" height="30" rx="8" fill="#0284c7" />
          <text x="0" y="65" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            Props تتدفق للأسفل ⬇️
          </text>
        </g>

        {/* Child Components */}
        <g transform="translate(100, 290)">
          <rect width="260" height="100" rx="16" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
          <text x="130" y="38" fill="#c084fc" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">المكون الابن (Child A)</text>
          <text x="130" y="72" fill="#cbd5e1" fontSize="12" textAnchor="middle" fontFamily="JetBrains Mono">&lt;Child user={'{user}'} /&gt;</text>
        </g>

        <g transform="translate(440, 290)">
          <rect width="260" height="100" rx="16" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
          <text x="130" y="38" fill="#34d399" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">المكون الابن (Child B)</text>
          <text x="130" y="72" fill="#cbd5e1" fontSize="12" textAnchor="middle" fontFamily="JetBrains Mono">&lt;Action onSave={'{handleSave}'} /&gt;</text>
        </g>

        {/* سهم رفع الحدث Event Callback للأعلى */}
        <path 
          d="M 570 290 C 650 220, 650 150, 560 120" 
          fill="none" 
          stroke="#f59e0b" 
          strokeWidth="3" 
          strokeDasharray="6 4" 
        />
        <text x="640" y="210" fill="#fbbf24" fontSize="12" fontWeight="bold" fontFamily="Cairo">Events ⬆️</text>
      </svg>
    );
  }

  // 3. مخطط دورة حياة الـ Hooks والتأثيرات الجانبية
  if (type === 'hooks') {
    // حركة متأنية: كل مرحلة تبقى لـ 3 ثوانٍ كاملة
    const activeStep = Math.floor((frame / (fps * 3)) % 3);
    return (
      <svg 
        viewBox="0 0 800 450" 
        preserveAspectRatio="xMidYMid meet" 
        className="w-full h-full max-h-[380px] drop-shadow-2xl mx-auto block"
      >
        <text x="400" y="45" fill="#f8fafc" fontSize="22" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
          دورة حياة React Hooks &amp; Component Lifecycle
        </text>

        {/* 1. Mount Phase */}
        <g transform="translate(60, 100)">
          <rect 
            width="200" 
            height="260" 
            rx="18" 
            fill="#0f172a" 
            stroke={activeStep === 0 ? "#38bdf8" : "#334155"} 
            strokeWidth={activeStep === 0 ? "4" : "1.5"} 
          />
          <circle cx="100" cy="50" r="28" fill="#0284c7" />
          <text x="100" y="56" fill="#fff" fontSize="16" fontWeight="bold" textAnchor="middle">1</text>
          <text x="100" y="110" fill="#38bdf8" fontSize="17" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">التركيب (Mount)</text>
          <text x="100" y="145" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="Cairo">تهيئة الحالة useState</text>
          <text x="100" y="175" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="Cairo">رسم الـ JSX الأولي</text>
          <rect x="25" y="205" width="150" height="30" rx="8" fill="#0369a1" />
          <text x="100" y="225" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">useEffect(..., [])</text>
        </g>

        {/* سهم انتقال 1 */}
        <path d="M 270 230 L 310 230" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />

        {/* 2. Update Phase */}
        <g transform="translate(320, 100)">
          <rect 
            width="200" 
            height="260" 
            rx="18" 
            fill="#0f172a" 
            stroke={activeStep === 1 ? "#a855f7" : "#334155"} 
            strokeWidth={activeStep === 1 ? "4" : "1.5"} 
          />
          <circle cx="100" cy="50" r="28" fill="#7e22ce" />
          <text x="100" y="56" fill="#fff" fontSize="16" fontWeight="bold" textAnchor="middle">2</text>
          <text x="100" y="110" fill="#c084fc" fontSize="17" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">التحديث (Update)</text>
          <text x="100" y="145" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="Cairo">تغير State أو Props</text>
          <text x="100" y="175" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="Cairo">إعادة تصيير Re-render</text>
          <rect x="25" y="205" width="150" height="30" rx="8" fill="#6b21a8" />
          <text x="100" y="225" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">useEffect(..., [deps])</text>
        </g>

        {/* سهم انتقال 2 */}
        <path d="M 530 230 L 570 230" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" />

        {/* 3. Unmount Phase */}
        <g transform="translate(580, 100)">
          <rect 
            width="170" 
            height="260" 
            rx="18" 
            fill="#0f172a" 
            stroke={activeStep === 2 ? "#f43f5e" : "#334155"} 
            strokeWidth={activeStep === 2 ? "4" : "1.5"} 
          />
          <circle cx="85" cy="50" r="28" fill="#be123c" />
          <text x="85" y="56" fill="#fff" fontSize="16" fontWeight="bold" textAnchor="middle">3</text>
          <text x="85" y="110" fill="#fb7185" fontSize="17" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">الإزالة (Unmount)</text>
          <text x="85" y="145" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="Cairo">حذف المكون من الـ DOM</text>
          <text x="85" y="175" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="Cairo">تنظيف الاشتراكات والذاكرة</text>
          <rect x="20" y="205" width="130" height="30" rx="8" fill="#9f1239" />
          <text x="85" y="225" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">return () =&gt; cleanup</text>
        </g>
      </svg>
    );
  }

  // 4. المخطط العام الافتراضي (معمارية React Fiber ومحرك الأداء بحركة دوران هادئة)
  return (
    <svg 
      viewBox="0 0 800 450" 
      preserveAspectRatio="xMidYMid meet" 
      className="w-full h-full max-h-[380px] drop-shadow-2xl mx-auto block"
    >
      <defs>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* خلفية الإشعاع التفاعلية */}
      <circle cx="400" cy="225" r="200" fill="url(#centerGlow)" />

      {/* قلب محرك React 19 التفاعلي المعنون باسم الدرس بحركة دوران هادئة وغير متسارعة */}
      <g transform="translate(320, 145)">
        <ellipse cx="80" cy="80" rx="100" ry="40" fill="none" stroke="#38bdf8" strokeWidth="4" strokeDasharray="12 8" transform={`rotate(${frame * 0.4} 80 80)`} />
        <ellipse cx="80" cy="80" rx="100" ry="40" fill="none" stroke="#a855f7" strokeWidth="4" strokeDasharray="12 8" transform={`rotate(${-frame * 0.3} 80 80)`} />
        <ellipse cx="80" cy="80" rx="100" ry="40" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="12 8" transform={`rotate(${frame * 0.5 + 60} 80 80)`} />
        <circle cx="80" cy="80" r={32 * pulse} fill="#0284c7" />
        <text x="80" y="85" fill="#fff" fontSize="12" fontWeight="black" textAnchor="middle" fontFamily="Cairo">{centerTitle}</text>
      </g>

      {/* الأعمدة المعمارية الحركية المرتبطة بخطوات الدرس الحقيقي */}
      <g transform="translate(40, 50)">
        <rect width="210" height="95" rx="14" fill="#0b1329" stroke="#38bdf8" strokeWidth="2" />
        <text x="105" y="34" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">1. {step1Title}</text>
        <text x="105" y="65" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">{step1Desc}</text>
      </g>

      <g transform="translate(550, 50)">
        <rect width="210" height="95" rx="14" fill="#061c14" stroke="#10b981" strokeWidth="2" />
        <text x="105" y="34" fill="#34d399" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">2. {step2Title}</text>
        <text x="105" y="65" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">{step2Desc}</text>
      </g>

      <g transform="translate(40, 290)">
        <rect width="210" height="95" rx="14" fill="#1b0e2b" stroke="#a855f7" strokeWidth="2" />
        <text x="105" y="34" fill="#c084fc" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">3. {step3Title}</text>
        <text x="105" y="65" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">{step3Desc}</text>
      </g>

      <g transform="translate(550, 290)">
        <rect width="210" height="95" rx="14" fill="#241403" stroke="#f59e0b" strokeWidth="2" />
        <text x="105" y="34" fill="#fbbf24" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">4. كفاءة الأداء 60FPS</text>
        <text x="105" y="65" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">Zero Unneeded Renders</text>
      </g>
    </svg>
  );
}

