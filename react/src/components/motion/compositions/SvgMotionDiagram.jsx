// src/components/motion/compositions/SvgMotionDiagram.jsx
// محرك الرسوم التوضيحية والمعمارية SVG الحركية المتوافقة مع Remotion
import React from 'react';
import { interpolate, spring } from 'remotion';

/**
 * تحديد نوع المخطط المعماري المناسب تلقائياً بناءً على محتوى وعنوان الدرس
 */
export function detectDiagramType(subtopic) {
  const text = `${subtopic?.id || ''} ${subtopic?.title || ''} ${subtopic?.description || ''} ${subtopic?.concept || ''}`.toLowerCase();

  if (text.includes('vdom') || text.includes('virtual dom') || text.includes('dom') || text.includes('reconciliation') || text.includes('diffing')) {
    return 'vdom';
  }
  if (text.includes('hook') || text.includes('useeffect') || text.includes('usestate') || text.includes('lifecycle') || text.includes('دورة حياة')) {
    return 'hooks';
  }
  if (text.includes('context') || text.includes('redux') || text.includes('zustand') || text.includes('state management') || text.includes('حالة')) {
    return 'context';
  }
  if (text.includes('router') || text.includes('route') || text.includes('spa') || text.includes('توجيه') || text.includes('مسار')) {
    return 'routing';
  }
  if (text.includes('memo') || text.includes('callback') || text.includes('performance') || text.includes('أداء') || text.includes('تسريع')) {
    return 'performance';
  }
  if (text.includes('props') || text.includes('component') || text.includes('مكون') || text.includes('بيانات')) {
    return 'state-props';
  }
  return 'architecture';
}

export default function SvgMotionDiagram({ type = 'architecture', frame, fps }) {
  // نبضات حركية مستمرة
  const pulse = interpolate(Math.sin((frame / fps) * Math.PI * 2), [-1, 1], [0.85, 1.15]);
  const progress = interpolate(frame % (fps * 3), [0, fps * 3], [0, 100]);
  const wave = Math.sin((frame / 15)) * 12;

  // 1. مخطط شجرة الـ Virtual DOM ومطابقة الـ Diffing
  if (type === 'vdom') {
    const diffHighlight = Math.floor(frame / 20) % 2 === 0;
    return (
      <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-2xl">
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
    return (
      <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-2xl">
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
          <circle cx="0" cy={progress * 1.2} r="10" fill="#38bdf8" />
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
    const activeStep = Math.floor((frame / 30) % 3);
    return (
      <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-2xl">
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

  // 4. المخطط العام الافتراضي (معمارية React Fiber ومحرك الأداء)
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-2xl">
      <defs>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* خلفية الإشعاع التفاعلية */}
      <circle cx="400" cy="225" r="200" fill="url(#centerGlow)" />

      {/* قلب محرك React 19 */}
      <g transform="translate(320, 145)">
        <ellipse cx="80" cy="80" rx="100" ry="40" fill="none" stroke="#38bdf8" strokeWidth="4" strokeDasharray="12 8" transform={`rotate(${frame * 2} 80 80)`} />
        <ellipse cx="80" cy="80" rx="100" ry="40" fill="none" stroke="#a855f7" strokeWidth="4" strokeDasharray="12 8" transform={`rotate(${-frame * 1.5} 80 80)`} />
        <ellipse cx="80" cy="80" rx="100" ry="40" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="12 8" transform={`rotate(${frame * 2.5 + 60} 80 80)`} />
        <circle cx="80" cy="80" r={28 * pulse} fill="#0284c7" />
        <text x="80" y="86" fill="#fff" fontSize="15" fontWeight="bold" textAnchor="middle">⚛️ React</text>
      </g>

      {/* الأعمدة المعمارية الأربعة */}
      <g transform="translate(60, 60)">
        <rect width="180" height="90" rx="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <text x="90" y="38" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">المكونات الذكية</text>
        <text x="90" y="65" fill="#94a3b8" fontSize="12" textAnchor="middle">Components &amp; JSX</text>
      </g>

      <g transform="translate(560, 60)">
        <rect width="180" height="90" rx="14" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
        <text x="90" y="38" fill="#34d399" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">إدارة الحالة</text>
        <text x="90" y="65" fill="#94a3b8" fontSize="12" textAnchor="middle">Reactive State Engine</text>
      </g>

      <g transform="translate(60, 300)">
        <rect width="180" height="90" rx="14" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
        <text x="90" y="38" fill="#c084fc" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">تزامن وتزاحم الـ Fiber</text>
        <text x="90" y="65" fill="#94a3b8" fontSize="12" textAnchor="middle">Concurrent Rendering</text>
      </g>

      <g transform="translate(560, 300)">
        <rect width="180" height="90" rx="14" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
        <text x="90" y="38" fill="#fbbf24" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">كفاءة الأداء 60FPS</text>
        <text x="90" y="65" fill="#94a3b8" fontSize="12" textAnchor="middle">Zero Unneeded Renders</text>
      </g>
    </svg>
  );
}
