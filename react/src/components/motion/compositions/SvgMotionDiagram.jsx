// src/components/motion/compositions/SvgMotionDiagram.jsx
// محرك الرسوم التوضيحية والمعمارية SVG الحركية المتوافقة مع Remotion
// ديناميكي 100% ومحتوى موجّه (Content-Driven) يتغير لكل درس تلقائياً
// معالجة معمارية شاملة: احتواء النصوص بالكامل داخل المكونات ومنع الانقلاب والفيض (Zero Text Overflow & BiDi Safe)
import React from 'react';
import { interpolate } from 'remotion';

/**
 * تحديد نوع المخطط المعماري المناسب تلقائياً وبدقة بناءً على عنوان وهوية الدرس
 */
export function detectDiagramType(subtopic) {
  if (!subtopic) return 'universal-engine';

  const id = (subtopic.id || '').toLowerCase();
  const title = (subtopic.title || '').toLowerCase();
  const eng = (subtopic.englishTitle || '').toLowerCase();

  // 1. المقارنات الثنائية الصريحة (Comparison Diagrams)
  if (
    !title.includes('vs code') && !eng.includes('vs code') &&
    (
      title.includes('الفرق بين') ||
      title.includes('مقارنة') ||
      /\bvs\b/i.test(eng) ||
      eng.includes('difference between') ||
      (title.includes('frontend') && title.includes('backend')) ||
      (title.includes('http') && title.includes('https')) ||
      (title.includes('csr') && title.includes('ssr'))
    )
  ) {
    return 'comparison';
  }

  // 2. شبكة الاتصال والخادم والعميل (Client-Server & Network Protocols)
  if (
    id === '1.1.c' || id === '1.1.d' ||
    title.includes('عمل المتصفح والخادم') ||
    title.includes('http وhttps') ||
    title.includes('بروتوكول') ||
    (eng.includes('browser and server') || eng.includes('http protocol'))
  ) {
    return 'client-server';
  }

  // 3. ثلاثي الويب (HTML / CSS / JavaScript)
  if (
    id.startsWith('1.2.') ||
    id.startsWith('1.3.') ||
    title.includes('html') ||
    title.includes('css') ||
    title.includes('javascript') ||
    title.includes('نموذج الصندوق') ||
    title.includes('flexbox') ||
    title.includes('grid') ||
    title.includes('العناصر الدلالية') ||
    title.includes('المحددات') ||
    title.includes('التموضع')
  ) {
    return 'web-trio';
  }

  // 4. شجرة الـ DOM والـ Virtual DOM ومطابقة الـ Diffing
  if (
    title.includes('virtual dom') ||
    title.includes('vdom') ||
    title.includes('diffing') ||
    title.includes('reconciliation') ||
    title.includes('شجرة dom') ||
    eng.includes('dom')
  ) {
    return 'dom-tree';
  }

  // 5. المكونات، JSX، وتدفق البيانات أحادي الاتجاه (Props & State Flow)
  if (
    title.includes('props') ||
    title.includes('مكون') ||
    title.includes('jsx') ||
    eng.includes('component') ||
    eng.includes('props') ||
    eng.includes('jsx')
  ) {
    return 'component-flow';
  }

  // 6. خطافات React ودورة الحياة (Hooks, useState, useEffect, Lifecycle)
  if (
    title.includes('hook') ||
    title.includes('useeffect') ||
    title.includes('usestate') ||
    title.includes('دورة حياة') ||
    title.includes('حالة') ||
    eng.includes('hook') ||
    eng.includes('lifecycle') ||
    eng.includes('state')
  ) {
    return 'hooks-lifecycle';
  }

  // 7. مسار التدفق والتنفيذ المتسلسل (Pipeline Execution Flow)
  if (
    subtopic.executionFlow &&
    (title.includes('مسار') || title.includes('تدفق') || title.includes('كيفية') || title.includes('rendering') || title.includes('csr') || title.includes('spa'))
  ) {
    return 'pipeline-flow';
  }

  // 8. المحرك المفهومي المداري الديناميكي الشامل لجميع الدروس الأخرى
  return 'universal-engine';
}

export default function SvgMotionDiagram({ type = 'universal-engine', subtopic, frame, fps = 30 }) {
  // دورة نبض وتنفس هادئة ومريحة للمتعلم (4 ثوانٍ كاملة)
  const pulse = interpolate(Math.sin((frame / (fps * 2)) * Math.PI), [-1, 1], [0.97, 1.03]);

  // استخراج بيانات الدرس الحالية بشكل ديناميكي ومحكم
  const steps = subtopic?.infographic?.steps || [];
  const terms = subtopic?.terms || [];

  const step1Title = steps[0]?.title || terms[0]?.term || 'التهيئة والبدء';
  const step1Desc = steps[0]?.desc || terms[0]?.meaning || 'تأسيس وبناء المفهوم المعماري';
  const step2Title = steps[1]?.title || terms[1]?.term || 'المعالجة والتنفيذ';
  const step2Desc = steps[1]?.desc || terms[1]?.meaning || 'معالجة التفاعل وحساب التعديلات';
  const step3Title = steps[2]?.title || terms[2]?.term || 'النتيجة والتصيير';
  const step3Desc = steps[2]?.desc || terms[2]?.meaning || 'تحديث الواجهة بسرعة 60 إطاراً';

  const safeTitle = subtopic?.title || 'مفهوم في خريطة React';
  const shortTitle = safeTitle.length > 24 ? safeTitle.slice(0, 22) + '..' : safeTitle;
  const engTitle = subtopic?.englishTitle || 'React Concept';
  const shortEng = engTitle.length > 26 ? engTitle.slice(0, 24) + '..' : engTitle;

  // -------------------------------------------------------------
  // 1. مخطط المقارنة الثنائية المتوازنة (Comparison & Contrast)
  // -------------------------------------------------------------
  if (type === 'comparison') {
    const termA = terms[0]?.term || steps[0]?.title || 'المفهوم الأول (A)';
    const descA = terms[0]?.meaning || steps[0]?.desc || 'الخصائص والوظيفة الأساسية';

    // استخدام مصطلح مميز للبطاقة الثانية لمنع التكرار نهائياً
    const featA = terms[2]?.term ? `${terms[2].term}: ${terms[2].meaning}` : (steps[2]?.desc || 'سرعة التطوير والسهولة المباشرة');

    const termB = terms[1]?.term || steps[1]?.title || 'المفهوم الثاني (B)';
    const descB = terms[1]?.meaning || steps[1]?.desc || 'الخصائص المعاكسة والمهام المكملة';

    const featB = terms[3]?.term ? `${terms[3].term}: ${terms[3].meaning}` : (steps[3]?.desc || 'أمان واستقرار الأنواع للمشاريع الضخمة');

    // تبادل تسليط الضوء الهادئ بين الجانبين (كل 6 ثوانٍ جانب)
    const isSideA = Math.floor(frame / (fps * 6)) % 2 === 0;

    const summaryText = subtopic?.infographic?.summary || subtopic?.why || 'تكامل متناغم بين المفهومين لضمان أعلى أداء وكفاءة برمجية.';
    const safeSummary = summaryText.length > 72 ? summaryText.slice(0, 70) + '...' : summaryText;

    return (
      <svg
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-h-[380px] drop-shadow-2xl font-sans mx-auto block"
      >
        <defs>
          <linearGradient id="compGradA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="compGradB" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>
          <filter id="compGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* عنوان المقارنة الرئيسي */}
        <text x="400" y="34" fill="#f8fafc" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
          ⚖️ {safeTitle}
        </text>
        <text x="400" y="52" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle" direction="ltr">
          {shortEng}
        </text>

        {/* الجانب الأيمن / المفهوم الأول (Side A) */}
        <g transform="translate(45, 68)">
          <rect
            width="315"
            height="285"
            rx="18"
            fill="#0b1329"
            stroke={isSideA ? "#38bdf8" : "#1e293b"}
            strokeWidth={isSideA ? "3" : "1.5"}
            filter={isSideA ? "url(#compGlow)" : undefined}
          />
          <rect x="0" y="0" width="315" height="46" rx="18" fill="url(#compGradA)" />
          
          {/* شارة رقم 1 دائرية نظيفة ومفصولة هندسياً */}
          <circle cx="26" cy="23" r="12" fill="#0b1329" />
          <text x="26" y="27" fill="#38bdf8" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="Cairo">1</text>
          
          {/* عنوان الطرف الأول محمي LTR/RTL */}
          <text x="170" y="29" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="Cairo" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
            {termA.length > 24 ? termA.slice(0, 22) + '..' : termA}
          </text>

          {/* محتويات الصندوق الأول (الدور الأساسي) */}
          <g transform="translate(18, 60)">
            <rect width="279" height="92" rx="12" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
            <text x="140" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
              📌 الدور والوظيفة الجوهرية:
            </text>
            <text x="140" y="48" fill="#e2e8f0" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
              {descA.length > 34 ? descA.slice(0, 32) + '..' : descA}
            </text>
            <text x="140" y="70" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="Cairo">
              تركيز عالٍ على الإنتاجية وسهولة البدء السريع
            </text>
          </g>

          {/* محتويات الصندوق الثاني (الميزة المميزة دون تكرار) */}
          <g transform="translate(18, 166)">
            <rect width="279" height="92" rx="12" fill="#030712" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 3" />
            <text x="140" y="24" fill="#7dd3fc" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
              ✨ نقطة القوة المعمارية:
            </text>
            <text x="140" y="48" fill="#cbd5e1" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
              {featA.length > 34 ? featA.slice(0, 32) + '..' : featA}
            </text>
            <text x="140" y="70" fill="#38bdf8" fontSize="9.5" textAnchor="middle" fontFamily="Cairo" fontWeight="bold">
              ✓ خيار معتمد وموصى به عالمياً
            </text>
          </g>
        </g>

        {/* الفاصل المركزي وعلامة VS الحركية مع تباعد كامل */}
        <g transform="translate(370, 180)">
          <circle cx="30" cy="30" r={25 * pulse} fill="#0f172a" stroke="#f59e0b" strokeWidth="2.5" filter="url(#compGlow)" />
          <text x="30" y="35" fill="#fbbf24" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
            VS
          </text>
          <line x1="-18" y1="30" x2="-2" y2="30" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="62" y1="30" x2="78" y2="30" stroke="#c084fc" strokeWidth="2" strokeDasharray="3 3" />
        </g>

        {/* الجانب الأيسر / المفهوم الثاني (Side B) */}
        <g transform="translate(440, 68)">
          <rect
            width="315"
            height="285"
            rx="18"
            fill="#120c24"
            stroke={!isSideA ? "#c084fc" : "#1e293b"}
            strokeWidth={!isSideA ? "3" : "1.5"}
            filter={!isSideA ? "url(#compGlow)" : undefined}
          />
          <rect x="0" y="0" width="315" height="46" rx="18" fill="url(#compGradB)" />
          
          {/* شارة رقم 2 دائرية نظيفة ومفصولة هندسياً */}
          <circle cx="26" cy="23" r="12" fill="#120c24" />
          <text x="26" y="27" fill="#c084fc" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="Cairo">2</text>
          
          {/* عنوان الطرف الثاني محمي LTR/RTL */}
          <text x="170" y="29" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="Cairo" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
            {termB.length > 24 ? termB.slice(0, 22) + '..' : termB}
          </text>

          {/* محتويات الصندوق الأول (الدور المكمل) */}
          <g transform="translate(18, 60)">
            <rect width="279" height="92" rx="12" fill="#1e113a" stroke="#7e22ce" strokeWidth="1" />
            <text x="140" y="24" fill="#c084fc" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
              📌 الدور والوظيفة المكملة:
            </text>
            <text x="140" y="48" fill="#e2e8f0" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
              {descB.length > 34 ? descB.slice(0, 32) + '..' : descB}
            </text>
            <text x="140" y="70" fill="#a855f7" fontSize="9.5" textAnchor="middle" fontFamily="Cairo">
              استقرار معماري مضاعف للمشاريع الكبيرة
            </text>
          </g>

          {/* محتويات الصندوق الثاني (الميزة المميزة دون تكرار) */}
          <g transform="translate(18, 166)">
            <rect width="279" height="92" rx="12" fill="#030712" stroke="#c084fc" strokeWidth="1" strokeDasharray="4 3" />
            <text x="140" y="24" fill="#e9d5ff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
              🚀 نقطة القوة المعمارية:
            </text>
            <text x="140" y="48" fill="#cbd5e1" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
              {featB.length > 34 ? featB.slice(0, 32) + '..' : featB}
            </text>
            <text x="140" y="70" fill="#c084fc" fontSize="9.5" textAnchor="middle" fontFamily="Cairo" fontWeight="bold">
              ✓ أمان عالي وعقود برمجية صارمة للـ Props
            </text>
          </g>
        </g>

        {/* الشريط السفلي: قاعدة التوافق والتكامل المعماري بدون أي قطع للنصوص */}
        <g transform="translate(45, 370)">
          <rect width="710" height="58" rx="14" fill="#0b1329" stroke="#0284c7" strokeWidth="1.5" />
          <text x="355" y="24" fill="#38bdf8" fontSize="11.5" fontWeight="black" textAnchor="middle" fontFamily="Cairo">
            💡 الخلاصة المعمارية والقرار الهندسي:
          </text>
          <text x="355" y="44" fill="#e2e8f0" fontSize="10.5" fontWeight="medium" textAnchor="middle" fontFamily="Cairo">
            {safeSummary}
          </text>
        </g>
      </svg>
    );
  }

  // -------------------------------------------------------------
  // 2. مخطط تدفق المكونات والبيانات (Component Props & Events Flow)
  // -------------------------------------------------------------
  if (type === 'component-flow') {
    const flowProgress = interpolate(frame % (fps * 4), [0, fps * 4], [0, 95]);
    return (
      <svg
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-h-[380px] drop-shadow-2xl mx-auto block font-sans"
      >
        <defs>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* بطاقة المكون الأب الرئيسي (Parent Component Card) */}
        <g transform="translate(200, 20)">
          <rect width="400" height="120" rx="18" fill="#0b1329" stroke="#38bdf8" strokeWidth="2.5" filter="url(#nodeGlow)" />
          <rect x="0" y="0" width="400" height="38" rx="18" fill="#0284c7" />
          <text x="200" y="24" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            📦 المكون الأب: {shortTitle}
          </text>

          {/* صندوق الشفرة البرمجية مع حماية LTR صارمة تمنع انقلاب الأقواس */}
          <g transform="translate(20, 50)">
            <rect width="360" height="55" rx="10" fill="#030712" stroke="#1e293b" />
            <text x="180" y="24" fill="#38bdf8" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono, Fira Code, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
              const [data, setData] = useState(initialValue);
            </text>
            <text x="180" y="44" fill="#94a3b8" fontSize="10.5" textAnchor="middle" fontFamily="JetBrains Mono, Fira Code, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
              &lt;Child data=&#123;data&#125; onUpdate=&#123;setData&#125; /&gt;
            </text>
          </g>
        </g>

        {/* سهم تدفق الـ Props لأسفل مع وسيط حركي أنيق */}
        <g transform="translate(320, 142)">
          <line x1="0" y1="0" x2="0" y2="105" stroke="#38bdf8" strokeWidth="4" strokeDasharray="6 4" />
          <circle cx="0" cy={flowProgress} r="7" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)" />
          <rect x="-85" y="38" width="170" height="28" rx="8" fill="#0284c7" />
          <text x="0" y="56" fill="#fff" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            ⬇️ Props تتدفق للأسفل
          </text>
        </g>

        {/* سهم رفع الحدث Event Callback للأعلى */}
        <path
          d="M 580 250 C 650 195, 650 145, 595 110"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="3"
          strokeDasharray="6 4"
        />
        <g transform="translate(605, 175)">
          <rect width="90" height="28" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="45" y="18" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            Events ⬆️
          </text>
        </g>

        {/* المكونات الأبناء (Child Components) - تباعد كامل واحتواء 100% للنصوص */}
        <g transform="translate(50, 252)">
          <rect width="320" height="120" rx="16" fill="#120c24" stroke="#a855f7" strokeWidth="2" />
          <rect x="0" y="0" width="320" height="34" rx="16" fill="#581c87" />
          <text x="160" y="22" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            🧩 {step1Title.length > 22 ? step1Title.slice(0, 20) + '..' : step1Title}
          </text>
          
          <g transform="translate(15, 45)">
            <rect width="290" height="60" rx="8" fill="#030712" stroke="#2e1065" />
            <text x="145" y="24" fill="#c084fc" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono, Fira Code, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
              &lt;Child data=&#123;data&#125; /&gt;
            </text>
            <text x="145" y="46" fill="#e9d5ff" fontSize="10" textAnchor="middle" fontFamily="Cairo">
              يستقبل الـ Props للعرض النقي (Read-Only)
            </text>
          </g>
        </g>

        <g transform="translate(430, 252)">
          <rect width="320" height="120" rx="16" fill="#061c14" stroke="#10b981" strokeWidth="2" />
          <rect x="0" y="0" width="320" height="34" rx="16" fill="#065f46" />
          <text x="160" y="22" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            ⚡ {step2Title.length > 22 ? step2Title.slice(0, 20) + '..' : step2Title}
          </text>
          
          <g transform="translate(15, 45)">
            <rect width="290" height="60" rx="8" fill="#030712" stroke="#064e3b" />
            <text x="145" y="24" fill="#34d399" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono, Fira Code, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
              &lt;Action onSave=&#123;handleSave&#125; /&gt;
            </text>
            <text x="145" y="46" fill="#a7f3d0" fontSize="10" textAnchor="middle" fontFamily="Cairo">
              يطلق حدث الـ Callback لتحديث حالة الأب
            </text>
          </g>
        </g>

        {/* الشريط السفلي المعماري */}
        <g transform="translate(50, 390)">
          <rect width="700" height="42" rx="12" fill="#0b1329" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="350" y="26" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            💡 القاعدة الذهبية: تدفق البيانات أحادي الاتجاه (Unidirectional) يمنع الأخطاء العشوائية بنسبة 100%
          </text>
        </g>
      </svg>
    );
  }

  // -------------------------------------------------------------
  // 3. مخطط شجرة الـ Virtual DOM ومطابقة الـ Diffing
  // -------------------------------------------------------------
  if (type === 'dom-tree') {
    const diffHighlight = Math.floor(frame / (fps * 2)) % 2 === 0;
    return (
      <svg
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-h-[380px] drop-shadow-2xl mx-auto block font-sans"
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
        </defs>

        {/* جانب Virtual DOM (Left Container) */}
        <g transform="translate(40, 30)">
          <rect width="320" height="385" rx="18" fill="#0b1329" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 4" opacity="0.9" />
          <text x="160" y="42" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            شجرة Virtual DOM الافتراضية
          </text>
          <text x="160" y="60" fill="#94a3b8" fontSize="10" textAnchor="middle">
            (In-Memory Tree &amp; Reconciliation)
          </text>

          {/* خطوط الشجرة الواضحة */}
          <line x1="160" y1="120" x2="90" y2="175" stroke="#38bdf8" strokeWidth="2.5" opacity="0.8" />
          <line x1="160" y1="120" x2="230" y2="175" stroke="#38bdf8" strokeWidth="2.5" opacity="0.8" />
          <line x1="90" y1="210" x2="55" y2="265" stroke="#38bdf8" strokeWidth="2" opacity="0.7" />
          <line x1="90" y1="210" x2="125" y2="265" stroke="#38bdf8" strokeWidth="2" opacity="0.7" />

          {/* Root Component (App) */}
          <g transform="translate(95, 82)">
            <rect width="130" height="38" rx="12" fill="url(#vdomGrad)" stroke="#7dd3fc" strokeWidth="2" />
            <text x="65" y="24" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
              &lt;App /&gt;
            </text>
          </g>

          {/* Child 1 (Header) */}
          <g transform="translate(30, 175)">
            <rect width="120" height="36" rx="10" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
            <text x="60" y="23" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
              &lt;Header /&gt;
            </text>
          </g>

          {/* Child 1 Leaves (Logo & Nav) */}
          <g transform="translate(20, 265)">
            <rect width="70" height="28" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
            <text x="35" y="18" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
              &lt;Logo /&gt;
            </text>
          </g>
          <g transform="translate(100, 265)">
            <rect width="70" height="28" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
            <text x="35" y="18" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
              &lt;Nav /&gt;
            </text>
          </g>

          {/* Child 2 (العقدة التي تتغير - Diff Target) */}
          <g transform="translate(165, 175)">
            <rect
              width="135"
              height="38"
              rx="12"
              fill={diffHighlight ? "#881337" : "#0f172a"}
              stroke={diffHighlight ? "#f43f5e" : "#0284c7"}
              strokeWidth={diffHighlight ? "3" : "1.5"}
            />
            <text x="67" y="24" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
              &lt;Card count=&#123;n&#125; /&gt;
            </text>
          </g>

          {/* إشعار حالة المقارنة السريعة */}
          <g transform="translate(30, 325)">
            <rect width="260" height="38" rx="10" fill="#030712" stroke="#1e293b" />
            <text x="130" y="24" fill="#38bdf8" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
              ⚡ خوارزمية Diffing تحسب الفروق الصافية
            </text>
          </g>
        </g>

        {/* محرك المقارنة المركزي Diffing Engine O(n) */}
        <g transform="translate(365, 190)">
          <circle cx="35" cy="25" r={28 * pulse} fill="#1e293b" stroke="#a855f7" strokeWidth="2.5" />
          <text x="35" y="22" fill="#c084fc" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">Diffing</text>
          <text x="35" y="36" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="monospace">O(n)</text>
          <path d="M 68 25 L 90 25 M 82 17 L 90 25 L 82 33" stroke="#a855f7" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </g>

        {/* جانب Real DOM في المتصفح (Right Container) */}
        <g transform="translate(440, 30)">
          <rect width="320" height="385" rx="18" fill="#061c14" stroke="#10b981" strokeWidth="2" opacity="0.9" />
          <text x="160" y="42" fill="#10b981" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            شجرة المتصفح Real DOM
          </text>
          <text x="160" y="60" fill="#a7f3d0" fontSize="10" textAnchor="middle">
            (Browser DOM Tree)
          </text>

          <line x1="160" y1="120" x2="90" y2="175" stroke="#10b981" strokeWidth="2.5" opacity="0.6" />
          <line x1="160" y1="120" x2="230" y2="175" stroke="#10b981" strokeWidth="2.5" opacity="0.6" />

          {/* Root Component (div#root) */}
          <g transform="translate(95, 82)">
            <rect width="130" height="38" rx="12" fill="url(#domGrad)" stroke="#34d399" strokeWidth="2" />
            <text x="65" y="24" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
              &lt;div id="root"&gt;
            </text>
          </g>

          {/* Unchanged Header in DOM */}
          <g transform="translate(30, 175)">
            <rect width="120" height="36" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <text x="60" y="23" fill="#64748b" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
              &lt;header&gt; (ثابت)
            </text>
          </g>

          {/* العقدة الوحيدة التي تتحدث في DOM الفعلي! */}
          <g transform="translate(165, 175)">
            <rect
              width="135"
              height="38"
              rx="12"
              fill={diffHighlight ? "#065f46" : "#0f172a"}
              stroke={diffHighlight ? "#34d399" : "#334155"}
              strokeWidth={diffHighlight ? "3.5" : "1.5"}
            />
            <text x="67" y="24" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
              &lt;span#val&gt;
            </text>
          </g>

          {/* التحديث الفعلي فقط بدون وميض */}
          <g transform="translate(30, 325)">
            <rect width="260" height="38" rx="10" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
            <text x="130" y="24" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
              ✓ تم تحديث العقدة المعدلة فقط (0ms)!
            </text>
          </g>
        </g>
      </svg>
    );
  }

  // -------------------------------------------------------------
  // 4. مخطط ثلاثي الويب (Web Trio: HTML, CSS, JavaScript)
  // -------------------------------------------------------------
  if (type === 'web-trio') {
    const isHtml = (subtopic?.id || '').startsWith('1.2.') || safeTitle.toLowerCase().includes('html');
    const isCss = (subtopic?.id || '').startsWith('1.3.') || safeTitle.toLowerCase().includes('css') || safeTitle.includes('تنسيق') || safeTitle.includes('نموذج');
    const isJs = safeTitle.toLowerCase().includes('javascript') || (!isHtml && !isCss);

    return (
      <svg
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-h-[380px] drop-shadow-2xl font-sans mx-auto block"
      >
        {/* العمود 1: HTML الهيكل */}
        <g transform="translate(40, 45)">
          <rect
            width="220"
            height="350"
            rx="18"
            fill="#0f172a"
            stroke={isHtml ? "#ea580c" : "#334155"}
            strokeWidth={isHtml ? "3.5" : "1.5"}
          />
          <rect x="0" y="0" width="220" height="46" rx="18" fill="#431407" />
          <text x="110" y="29" fill="#fb923c" fontSize="14" fontWeight="black" textAnchor="middle">1. HTML 🦴</text>
          <text x="110" y="85" fill="#f97316" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {isHtml ? shortTitle : 'الهيكل والوسوم'}
          </text>
          <text x="110" y="110" fill="#cbd5e1" fontSize="10.5" textAnchor="middle">
            Structure &amp; Semantics
          </text>

          <rect x="18" y="135" width="184" height="135" rx="10" fill="#1c1917" />
          <text x="28" y="165" fill="#ea580c" fontSize="11" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>&lt;main class="app"&gt;</text>
          <text x="38" y="195" fill="#fdba74" fontSize="11" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>&lt;h1&gt;{shortTitle.slice(0, 10)}&lt;/h1&gt;</text>
          <text x="38" y="225" fill="#fdba74" fontSize="11" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>&lt;section&gt;UI&lt;/section&gt;</text>
          <text x="28" y="255" fill="#ea580c" fontSize="11" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>&lt;/main&gt;</text>

          <text x="110" y="315" fill="#fdba74" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {isHtml ? '★ محور تركيز الدرس الحالي' : 'بناء العناصر والمحتوى الدلالي'}
          </text>
        </g>

        {/* سهم تكاملي 1 */}
        <g transform="translate(268, 195)">
          <circle cx="15" cy="15" r="15" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          <text x="15" y="21" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">+</text>
        </g>

        {/* العمود 2: CSS المظهر والتنسيق */}
        <g transform="translate(290, 45)">
          <rect
            width="220"
            height="350"
            rx="18"
            fill="#0f172a"
            stroke={isCss ? "#0284c7" : "#334155"}
            strokeWidth={isCss ? "3.5" : "1.5"}
          />
          <rect x="0" y="0" width="220" height="46" rx="18" fill="#082f49" />
          <text x="110" y="29" fill="#38bdf8" fontSize="14" fontWeight="black" textAnchor="middle">2. CSS 🎨</text>
          <text x="110" y="85" fill="#0284c7" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {isCss ? shortTitle : 'المظهر والتصميم'}
          </text>
          <text x="110" y="110" fill="#cbd5e1" fontSize="10.5" textAnchor="middle">
            Styles &amp; Responsive Layout
          </text>

          <rect x="18" y="135" width="184" height="135" rx="10" fill="#0c2338" />
          <text x="28" y="165" fill="#38bdf8" fontSize="11" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>.layout &#123;</text>
          <text x="38" y="195" fill="#bae6fd" fontSize="11" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>display: flex;</text>
          <text x="38" y="225" fill="#bae6fd" fontSize="11" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>gap: 16px; padding: 20px;</text>
          <text x="28" y="255" fill="#38bdf8" fontSize="11" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>&#125;</text>

          <text x="110" y="315" fill="#7dd3fc" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {isCss ? '★ محور تركيز الدرس الحالي' : 'الألوان، المسافات، والتجاوب'}
          </text>
        </g>

        {/* سهم تكاملي 2 */}
        <g transform="translate(518, 195)">
          <circle cx="15" cy="15" r="15" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          <text x="15" y="21" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">+</text>
        </g>

        {/* العمود 3: JavaScript العقل والتفاعل */}
        <g transform="translate(540, 45)">
          <rect
            width="220"
            height="350"
            rx="18"
            fill="#0f172a"
            stroke={isJs ? "#eab308" : "#334155"}
            strokeWidth={isJs ? "3.5" : "1.5"}
          />
          <rect x="0" y="0" width="220" height="46" rx="18" fill="#422006" />
          <text x="110" y="29" fill="#fde047" fontSize="14" fontWeight="black" textAnchor="middle">3. JavaScript 🧠</text>
          <text x="110" y="85" fill="#eab308" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {isJs ? shortTitle : 'المنطق والتفاعل'}
          </text>
          <text x="110" y="110" fill="#cbd5e1" fontSize="10.5" textAnchor="middle">
            Logic, Reactivity &amp; APIs
          </text>

          <rect x="18" y="135" width="184" height="135" rx="10" fill="#291e0a" />
          <text x="28" y="165" fill="#facc15" fontSize="11" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>const render = () =&gt; &#123;</text>
          <text x="38" y="195" fill="#fef08a" fontSize="11" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>updateUI('Active');</text>
          <text x="38" y="225" fill="#fef08a" fontSize="11" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>listenEvents();</text>
          <text x="28" y="255" fill="#facc15" fontSize="11" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>&#125;;</text>

          <text x="110" y="315" fill="#fde047" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {isJs ? '★ محور تركيز الدرس الحالي' : 'المنطق والتفاعل الحي'}
          </text>
        </g>
      </svg>
    );
  }

  // -------------------------------------------------------------
  // 5. مخطط شبكة الاتصال والخادم والعميل (Client-Server & Protocols)
  // -------------------------------------------------------------
  if (type === 'client-server') {
    const cycleFrames = fps * 6;
    const packetProgress = (frame % cycleFrames) / cycleFrames;
    const easeProgress = 0.5 - 0.5 * Math.cos(packetProgress * Math.PI * 2);
    const packetX = interpolate(easeProgress, [0, 1], [270, 520]);
    const isGoingRight = packetProgress <= 0.5;

    const clientTerm = terms[0]?.term || 'Client (العميل)';
    const clientDesc = terms[0]?.meaning || 'المتصفح وتفاعل المستخدم';
    const serverTerm = terms[1]?.term || 'Server (الخادم)';
    const serverDesc = terms[1]?.meaning || 'معالجة المنطق والبيانات';

    return (
      <svg
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-h-[380px] drop-shadow-2xl font-sans mx-auto block"
      >
        {/* جانب العميل والمتصفح (Frontend / Client) */}
        <g transform="translate(45, 45)">
          <rect width="250" height="345" rx="18" fill="#0b1329" stroke="#38bdf8" strokeWidth="2.5" />
          <rect x="0" y="0" width="250" height="42" rx="18" fill="#1e293b" />
          <circle cx="25" cy="21" r="5" fill="#f43f5e" />
          <circle cx="42" cy="21" r="5" fill="#fbbf24" />
          <circle cx="59" cy="21" r="5" fill="#10b981" />
          <text x="150" y="26" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">
            {clientTerm}
          </text>

          <rect x="25" y="65" width="200" height="90" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 3" />
          <text x="125" y="98" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {step1Title}
          </text>
          <text x="125" y="125" fill="#7dd3fc" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
            {clientDesc.length > 26 ? clientDesc.slice(0, 24) + '..' : clientDesc}
          </text>

          {/* شاشة العرض التفاعلية */}
          <rect x="25" y="175" width="200" height="110" rx="12" fill="#030712" />
          <rect x="40" y="195" width="80" height="14" rx="4" fill="#38bdf8" opacity="0.8" />
          <rect x="40" y="218" width="140" height="8" rx="3" fill="#334155" />
          <rect x="40" y="233" width="110" height="8" rx="3" fill="#334155" />
          <rect x="40" y="255" width="85" height="20" rx="6" fill="#10b981" />
          <text x="82" y="269" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">إرسال الطلب</text>

          <rect x="25" y="300" width="200" height="26" rx="6" fill="#0284c7" opacity="0.2" />
          <text x="125" y="317" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {subtopic?.title || 'واجهة العميل والتفاعل'}
          </text>
        </g>

        {/* خط اتصال الشبكة والـ HTTP Protocols */}
        <g transform="translate(300, 190)">
          <line x1="0" y1="20" x2="200" y2="20" stroke="#334155" strokeWidth="4" strokeDasharray="8 6" />

          {/* حزمة البيانات المتحركة (HTTP Request / Response) */}
          <g transform={`translate(${packetX - 300}, 0)`}>
            <rect x="-45" y="0" width="90" height="40" rx="10" fill={isGoingRight ? "#0284c7" : "#10b981"} />
            <text x="0" y="18" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
              {isGoingRight ? "طلب HTTP ➔" : "⟵ استجابة 200"}
            </text>
            <text x="0" y="32" fill="#e2e8f0" fontSize="8" textAnchor="middle" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
              {isGoingRight ? "GET /api/data" : "JSON 200 OK"}
            </text>
          </g>

          <text x="100" y="-12" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            شبكة الويب والبروتوكول (HTTP / APIs)
          </text>
        </g>

        {/* جانب الخادم وقواعد البيانات (Backend / Server) */}
        <g transform="translate(505, 45)">
          <rect width="250" height="345" rx="18" fill="#120c24" stroke="#a855f7" strokeWidth="2.5" />
          <rect x="0" y="0" width="250" height="42" rx="18" fill="#2e1065" />
          <text x="125" y="26" fill="#c084fc" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {serverTerm}
          </text>

          <rect x="25" y="65" width="200" height="85" rx="12" fill="#1e113a" stroke="#a855f7" strokeWidth="1" strokeDasharray="4 3" />
          <text x="125" y="98" fill="#c084fc" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {step2Title}
          </text>
          <text x="125" y="122" fill="#e9d5ff" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
            {serverDesc.length > 26 ? serverDesc.slice(0, 24) + '..' : serverDesc}
          </text>

          {/* أسطوانة قاعدة البيانات (Database) */}
          <g transform="translate(55, 175)">
            <rect x="0" y="15" width="140" height="80" rx="8" fill="#2e1065" stroke="#c084fc" strokeWidth="2" />
            <ellipse cx="70" cy="15" rx="70" ry="18" fill="#581c87" stroke="#c084fc" strokeWidth="2" />
            <ellipse cx="70" cy="50" rx="70" ry="16" fill="none" stroke="#7e22ce" strokeWidth="1.5" strokeDasharray="5 3" />
            <ellipse cx="70" cy="95" rx="70" ry="18" fill="#3b0764" stroke="#c084fc" strokeWidth="2" />
            <text x="70" y="60" fill="#f5d0fe" fontSize="12" fontWeight="bold" textAnchor="middle">Database 🗄️</text>
          </g>

          <rect x="25" y="300" width="200" height="26" rx="6" fill="#7c3aed" opacity="0.2" />
          <text x="125" y="317" fill="#c084fc" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            معالجة البيانات والتحقق والأمان
          </text>
        </g>
      </svg>
    );
  }

  // -------------------------------------------------------------
  // 6. مخطط دورة حياة الـ Hooks والتأثيرات الجانبية
  // -------------------------------------------------------------
  if (type === 'hooks-lifecycle') {
    const activeStep = Math.floor((frame / (fps * 3)) % 3);
    return (
      <svg
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-h-[380px] drop-shadow-2xl mx-auto block font-sans"
      >
        <text x="400" y="38" fill="#f8fafc" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
          دورة حياة React Hooks &amp; Lifecycle: {shortTitle}
        </text>

        {/* 1. Mount Phase */}
        <g transform="translate(55, 75)">
          <rect
            width="205"
            height="295"
            rx="18"
            fill="#0f172a"
            stroke={activeStep === 0 ? "#38bdf8" : "#334155"}
            strokeWidth={activeStep === 0 ? "3.5" : "1.5"}
          />
          <circle cx="102" cy="45" r="26" fill="#0284c7" />
          <text x="102" y="52" fill="#fff" fontSize="15" fontWeight="bold" textAnchor="middle">1</text>
          <text x="102" y="105" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">التركيب (Mount)</text>
          <text x="102" y="140" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">{step1Title}</text>
          <text x="102" y="170" fill="#cbd5e1" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">رسم الـ JSX الأولي</text>
          
          <rect x="20" y="210" width="165" height="42" rx="10" fill="#0369a1" />
          <text x="102" y="236" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
            useEffect(..., [])
          </text>
        </g>

        {/* سهم انتقال 1 */}
        <path d="M 270 220 L 310 220" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />

        {/* 2. Update Phase */}
        <g transform="translate(320, 75)">
          <rect
            width="205"
            height="295"
            rx="18"
            fill="#0f172a"
            stroke={activeStep === 1 ? "#a855f7" : "#334155"}
            strokeWidth={activeStep === 1 ? "3.5" : "1.5"}
          />
          <circle cx="102" cy="45" r="26" fill="#7e22ce" />
          <text x="102" y="52" fill="#fff" fontSize="15" fontWeight="bold" textAnchor="middle">2</text>
          <text x="102" y="105" fill="#c084fc" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">التحديث (Update)</text>
          <text x="102" y="140" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">{step2Title}</text>
          <text x="102" y="170" fill="#cbd5e1" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">إعادة تصيير Re-render</text>
          
          <rect x="20" y="210" width="165" height="42" rx="10" fill="#6b21a8" />
          <text x="102" y="236" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
            useEffect(..., [deps])
          </text>
        </g>

        {/* سهم انتقال 2 */}
        <path d="M 535 220 L 575 220" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" />

        {/* 3. Unmount Phase */}
        <g transform="translate(585, 75)">
          <rect
            width="170"
            height="295"
            rx="18"
            fill="#0f172a"
            stroke={activeStep === 2 ? "#f43f5e" : "#334155"}
            strokeWidth={activeStep === 2 ? "3.5" : "1.5"}
          />
          <circle cx="85" cy="45" r="26" fill="#be123c" />
          <text x="85" y="52" fill="#fff" fontSize="15" fontWeight="bold" textAnchor="middle">3</text>
          <text x="85" y="105" fill="#fb7185" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">الإزالة (Unmount)</text>
          <text x="85" y="140" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">{step3Title}</text>
          <text x="85" y="170" fill="#cbd5e1" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">تنظيف الذاكرة</text>
          
          <rect x="15" y="210" width="140" height="42" rx="10" fill="#9f1239" />
          <text x="85" y="236" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono, monospace" direction="ltr" style={{ unicodeBidi: 'isolate' }}>
            return () =&gt; cleanup;
          </text>
        </g>
      </svg>
    );
  }

  // -------------------------------------------------------------
  // 7. مخطط مسار التدفق والتنفيذ المتسلسل (Pipeline Execution Flow)
  // -------------------------------------------------------------
  if (type === 'pipeline-flow') {
    const cycleFrames = fps * 6;
    const progress = (frame % cycleFrames) / cycleFrames;
    const activeIndex = Math.floor(progress * 3);
    const tokenX = interpolate(progress, [0, 0.33, 0.66, 1], [150, 400, 650, 700]);

    return (
      <svg
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-h-[380px] drop-shadow-2xl font-sans mx-auto block"
      >
        <text x="400" y="34" fill="#f8fafc" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
          🔄 مسار تدفق وتنفيذ: {shortTitle}
        </text>
        <text x="400" y="52" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">
          Execution Lifecycle &amp; Rendering Pipeline
        </text>

        {/* خط الأنبوب الموصل الأساسي */}
        <line x1="120" y1="195" x2="680" y2="195" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
        <line x1="120" y1="195" x2={tokenX} y2="195" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" />

        {/* حزمة البيانات المتحركة على المسار */}
        <circle cx={tokenX} cy="195" r={15 * pulse} fill="#38bdf8" filter="drop-shadow(0 0 8px #38bdf8)" />
        <circle cx={tokenX} cy="195" r="5" fill="#fff" />

        {/* المحطة 1 */}
        <g transform="translate(50, 105)">
          <rect
            width="200"
            height="185"
            rx="16"
            fill="#0b1329"
            stroke={activeIndex === 0 ? "#38bdf8" : "#334155"}
            strokeWidth={activeIndex === 0 ? "3.5" : "1.5"}
          />
          <circle cx="100" cy="38" r="20" fill={activeIndex === 0 ? "#0284c7" : "#1e293b"} />
          <text x="100" y="44" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">1</text>
          <text x="100" y="90" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {step1Title}
          </text>
          <text x="100" y="122" fill="#cbd5e1" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
            {step1Desc.length > 24 ? step1Desc.slice(0, 22) + '..' : step1Desc}
          </text>
        </g>

        {/* المحطة 2 */}
        <g transform="translate(300, 105)">
          <rect
            width="200"
            height="185"
            rx="16"
            fill="#0f172a"
            stroke={activeIndex === 1 ? "#a855f7" : "#334155"}
            strokeWidth={activeIndex === 1 ? "3.5" : "1.5"}
          />
          <circle cx="100" cy="38" r="20" fill={activeIndex === 1 ? "#7e22ce" : "#1e293b"} />
          <text x="100" y="44" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">2</text>
          <text x="100" y="90" fill="#c084fc" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {step2Title}
          </text>
          <text x="100" y="122" fill="#cbd5e1" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
            {step2Desc.length > 24 ? step2Desc.slice(0, 22) + '..' : step2Desc}
          </text>
        </g>

        {/* المحطة 3 */}
        <g transform="translate(550, 105)">
          <rect
            width="200"
            height="185"
            rx="16"
            fill="#061c14"
            stroke={activeIndex === 2 ? "#10b981" : "#334155"}
            strokeWidth={activeIndex === 2 ? "3.5" : "1.5"}
          />
          <circle cx="100" cy="38" r="20" fill={activeIndex === 2 ? "#059669" : "#1e293b"} />
          <text x="100" y="44" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">3</text>
          <text x="100" y="90" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {step3Title}
          </text>
          <text x="100" y="122" fill="#cbd5e1" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
            {step3Desc.length > 24 ? step3Desc.slice(0, 22) + '..' : step3Desc}
          </text>
        </g>

        {/* الشريط السفلي: المسار التنفيذي الشامل للدرس */}
        <g transform="translate(50, 365)">
          <rect width="700" height="46" rx="12" fill="#0b1329" stroke="#0284c7" strokeWidth="1.5" />
          <text x="350" y="28" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            ⚡ {(() => {
              const flow = subtopic?.executionFlow || 'المتصفح ➔ تحليل الكود ➔ بناء شجرة Virtual DOM ➔ حساب الفروق الصافية ➔ تحديث الشاشة بسلاسة';
              return flow.length > 78 ? flow.slice(0, 76) + '...' : flow;
            })()}
          </text>
        </g>
      </svg>
    );
  }

  // -------------------------------------------------------------
  // 8. المحرك المفهومي المداري الديناميكي الشامل لجميع الدروس الأخرى
  // -------------------------------------------------------------
  const focusPod = Math.floor(frame / (fps * 4)) % 4; // كل 4 ثوانٍ تركيز على محطة

  return (
    <svg
      viewBox="0 0 800 450"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full max-h-[380px] drop-shadow-2xl mx-auto block font-sans"
    >
      <defs>
        <radialGradient id="univCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* خلفية الإشعاع التفاعلية */}
      <circle cx="400" cy="225" r="220" fill="url(#univCenterGlow)" />

      {/* قلب المحرك المركزي: عنوان وهوية الدرس الفعلية */}
      <g transform="translate(300, 145)">
        <ellipse
          cx="100"
          cy="80"
          rx="120"
          ry="50"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="3"
          strokeDasharray="10 6"
          transform={`rotate(${frame * 0.3} 100 80)`}
        />
        <ellipse
          cx="100"
          cy="80"
          rx="120"
          ry="50"
          fill="none"
          stroke="#a855f7"
          strokeWidth="3"
          strokeDasharray="10 6"
          transform={`rotate(${-frame * 0.25} 100 80)`}
        />
        <circle cx="100" cy="80" r={42 * pulse} fill="#0284c7" stroke="#38bdf8" strokeWidth="2.5" />
        <text x="100" y="78" fill="#fff" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
          {shortTitle}
        </text>
        <text x="100" y="94" fill="#bae6fd" fontSize="9" fontWeight="bold" textAnchor="middle" direction="ltr">
          {shortEng}
        </text>
      </g>

      {/* المحطة المدارية 1 (الركن الأيمن العلوي) */}
      <g transform="translate(40, 35)">
        <rect
          width="235"
          height="105"
          rx="16"
          fill="#0b1329"
          stroke={focusPod === 0 ? "#38bdf8" : "#1e293b"}
          strokeWidth={focusPod === 0 ? "3.5" : "1.5"}
        />
        <circle cx="28" cy="28" r="14" fill="#0284c7" />
        <text x="28" y="32" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">1</text>
        <text x="135" y="32" fill="#38bdf8" fontSize="12.5" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
          {step1Title}
        </text>
        <text x="120" y="68" fill="#cbd5e1" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
          {step1Desc.length > 28 ? step1Desc.slice(0, 26) + '..' : step1Desc}
        </text>
      </g>

      {/* المحطة المدارية 2 (الركن الأيسر العلوي) */}
      <g transform="translate(525, 35)">
        <rect
          width="235"
          height="105"
          rx="16"
          fill="#061c14"
          stroke={focusPod === 1 ? "#10b981" : "#1e293b"}
          strokeWidth={focusPod === 1 ? "3.5" : "1.5"}
        />
        <circle cx="28" cy="28" r="14" fill="#059669" />
        <text x="28" y="32" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">2</text>
        <text x="135" y="32" fill="#34d399" fontSize="12.5" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
          {step2Title}
        </text>
        <text x="120" y="68" fill="#cbd5e1" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
          {step2Desc.length > 28 ? step2Desc.slice(0, 26) + '..' : step2Desc}
        </text>
      </g>

      {/* المحطة المدارية 3 (الركن الأيمن السفلي) */}
      <g transform="translate(40, 285)">
        <rect
          width="235"
          height="105"
          rx="16"
          fill="#1b0e2b"
          stroke={focusPod === 2 ? "#a855f7" : "#1e293b"}
          strokeWidth={focusPod === 2 ? "3.5" : "1.5"}
        />
        <circle cx="28" cy="28" r="14" fill="#7e22ce" />
        <text x="28" y="32" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">3</text>
        <text x="135" y="32" fill="#c084fc" fontSize="12.5" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
          {step3Title}
        </text>
        <text x="120" y="68" fill="#cbd5e1" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
          {step3Desc.length > 28 ? step3Desc.slice(0, 26) + '..' : step3Desc}
        </text>
      </g>

      {/* المحطة المدارية 4 (الركن الأيسر السفلي): مصطلحات أو ميزات الدرس */}
      <g transform="translate(525, 285)">
        <rect
          width="235"
          height="105"
          rx="16"
          fill="#241403"
          stroke={focusPod === 3 ? "#f59e0b" : "#1e293b"}
          strokeWidth={focusPod === 3 ? "3.5" : "1.5"}
        />
        <circle cx="28" cy="28" r="14" fill="#d97706" />
        <text x="28" y="32" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">★</text>
        <text x="135" y="32" fill="#fbbf24" fontSize="12.5" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
          {terms[0]?.term ? terms[0].term : 'الأداء 60FPS'}
        </text>
        <text x="120" y="68" fill="#cbd5e1" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
          {terms[0]?.meaning ? (terms[0].meaning.length > 28 ? terms[0].meaning.slice(0, 26) + '..' : terms[0].meaning) : 'كفاءة وسلاسة العرض'}
        </text>
      </g>
    </svg>
  );
}
