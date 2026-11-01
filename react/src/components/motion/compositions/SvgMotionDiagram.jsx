// src/components/motion/compositions/SvgMotionDiagram.jsx
// محرك الرسوم التوضيحية والمعمارية SVG الحركية المتوافقة مع Remotion
// ديناميكي 100% ومحتوى موجّه (Content-Driven) يتغير لكل درس تلقائياً
import React from 'react';
import { interpolate, spring } from 'remotion';

/**
 * تحديد نوع المخطط المعماري المناسب تلقائياً وبدقة بناءً على عنوان وهوية الدرس
 */
export function detectDiagramType(subtopic) {
  if (!subtopic) return 'universal-engine';

  const id = (subtopic.id || '').toLowerCase();
  const title = (subtopic.title || '').toLowerCase();
  const eng = (subtopic.englishTitle || '').toLowerCase();

  // 1. المقارنات الثنائية الصريحة (Comparison Diagrams)
  // دروس المقارنة والفرق بين مفهومين (تستثني VS Code كأداة تطوير)
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
  // مخصصة حصراً لدروس المتصفح والخادم، بروتوكولات الشبكة، واستدعاءات API
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
  // دروس HTML (1.2.*) ودروس CSS (1.3.*) ومفاهيم التصميم والتنسيق
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
  const pulse = interpolate(Math.sin((frame / (fps * 2)) * Math.PI), [-1, 1], [0.96, 1.04]);
  
  // استخراج بيانات الدرس الحالية بشكل ديناميكي كامل
  const steps = subtopic?.infographic?.steps || [];
  const terms = subtopic?.terms || [];

  const step1Title = steps[0]?.title || terms[0]?.term || '1. الخطوة الأولى';
  const step1Desc = steps[0]?.desc || terms[0]?.meaning || 'التهيئة والبدء';
  const step2Title = steps[1]?.title || terms[1]?.term || '2. الخطوة الثانية';
  const step2Desc = steps[1]?.desc || terms[1]?.meaning || 'المعالجة والتنفيذ';
  const step3Title = steps[2]?.title || terms[2]?.term || '3. الخطوة الثالثة';
  const step3Desc = steps[2]?.desc || terms[2]?.meaning || 'النتيجة والتفاعل';

  const safeTitle = subtopic?.title || 'مفهوم في خريطة React';
  const shortTitle = safeTitle.length > 22 ? safeTitle.slice(0, 20) + '..' : safeTitle;
  const engTitle = subtopic?.englishTitle || 'React Concept';

  // -------------------------------------------------------------
  // 1. مخطط المقارنة الثنائية الحركية (Comparison & Contrast Motion)
  // -------------------------------------------------------------
  if (type === 'comparison') {
    const termA = terms[0]?.term || steps[0]?.title || 'المفهوم الأول (A)';
    const descA = terms[0]?.meaning || steps[0]?.desc || 'الخصائص والوظيفة الأساسية';
    const termB = terms[1]?.term || steps[1]?.title || 'المفهوم الثاني (B)';
    const descB = terms[1]?.meaning || steps[1]?.desc || 'الخصائص المعاكسة والمهام المكملة';

    // تبادل تسليط الضوء الهادئ بين الجانبين (كل 10 ثوانٍ جانب ليناسب الـ 30 ثانية)
    const isSideA = Math.floor(frame / (fps * 10)) % 2 === 0;

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
          <filter id="compGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* عنوان المقارنة الرئيسي */}
        <text x="400" y="38" fill="#f8fafc" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
          ⚖️ {safeTitle}
        </text>
        <text x="400" y="58" fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="middle">
          {engTitle}
        </text>

        {/* الجانب الأيمن / المفهوم الأول (Side A) */}
        <g transform="translate(40, 75)">
          <rect 
            width="320" 
            height="275" 
            rx="20" 
            fill="#0b1329" 
            stroke={isSideA ? "#38bdf8" : "#1e293b"} 
            strokeWidth={isSideA ? "3.5" : "1.5"} 
            filter={isSideA ? "url(#compGlow)" : ""}
          />
          <rect x="0" y="0" width="320" height="50" rx="20" fill="url(#compGradA)" />
          {/* شارة رقم 1 مستقلة لمنع انقلاب الأرقام */}
          <circle cx="30" cy="25" r="13" fill="#0b1329" />
          <text x="30" y="30" fill="#38bdf8" fontSize="12" fontWeight="900" textAnchor="middle">1</text>
          <text x="175" y="31" fill="#fff" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="Cairo" direction="ltr">
            {termA.length > 24 ? termA.slice(0, 22) + '..' : termA}
          </text>

          {/* محتويات وخصائص الجانب الأول */}
          <rect x="20" y="68" width="280" height="85" rx="12" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
          <text x="160" y="94" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            📌 الدور والوظيفة الأساسية:
          </text>
          <text x="160" y="122" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="Cairo">
            {descA.length > 32 ? descA.slice(0, 30) + '..' : descA}
          </text>

          {/* كبسولة ميزات تفاعلية متسعة بدون تكرار */}
          <g transform="translate(20, 168)">
            <rect width="280" height="85" rx="12" fill="#030712" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 3" />
            <text x="140" y="32" fill="#7dd3fc" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
              🎯 {step1Title.length > 26 ? step1Title.slice(0, 24) + '..' : step1Title}
            </text>
            <text x="140" y="60" fill="#94a3b8" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
              {step1Desc.length > 34 ? step1Desc.slice(0, 32) + '..' : step1Desc}
            </text>
          </g>
        </g>

        {/* الفاصل المركزي وعلامة VS الحركية */}
        <g transform="translate(370, 175)">
          <circle cx="30" cy="30" r={26 * pulse} fill="#0f172a" stroke="#f59e0b" strokeWidth="3" filter="url(#compGlow)" />
          <text x="30" y="36" fill="#fbbf24" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
            VS
          </text>
          {/* أسهم تبادل البيانات بين الطرفين */}
          <line x1="-30" y1="30" x2="0" y2="30" stroke="#38bdf8" strokeWidth="3" strokeDasharray="4 3" />
          <line x1="60" y1="30" x2="90" y2="30" stroke="#c084fc" strokeWidth="3" strokeDasharray="4 3" />
        </g>

        {/* الجانب الأيسر / المفهوم الثاني (Side B) */}
        <g transform="translate(440, 75)">
          <rect 
            width="320" 
            height="275" 
            rx="20" 
            fill="#120c24" 
            stroke={!isSideA ? "#c084fc" : "#1e293b"} 
            strokeWidth={!isSideA ? "3.5" : "1.5"} 
            filter={!isSideA ? "url(#compGlow)" : ""}
          />
          <rect x="0" y="0" width="320" height="50" rx="20" fill="url(#compGradB)" />
          {/* شارة رقم 2 مستقلة لمنع انقلاب الأرقام */}
          <circle cx="30" cy="25" r="13" fill="#120c24" />
          <text x="30" y="30" fill="#c084fc" fontSize="12" fontWeight="900" textAnchor="middle">2</text>
          <text x="175" y="31" fill="#fff" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="Cairo" direction="ltr">
            {termB.length > 24 ? termB.slice(0, 22) + '..' : termB}
          </text>

          {/* محتويات وخصائص الجانب الثاني */}
          <rect x="20" y="68" width="280" height="85" rx="12" fill="#1e113a" stroke="#7e22ce" strokeWidth="1" />
          <text x="160" y="94" fill="#c084fc" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            📌 الدور والوظيفة المكملة:
          </text>
          <text x="160" y="122" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="Cairo">
            {descB.length > 32 ? descB.slice(0, 30) + '..' : descB}
          </text>

          {/* كبسولة ميزات تفاعلية متسعة بدون تكرار */}
          <g transform="translate(20, 168)">
            <rect width="280" height="85" rx="12" fill="#030712" stroke="#c084fc" strokeWidth="1" strokeDasharray="4 3" />
            <text x="140" y="32" fill="#e9d5ff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
              🚀 {step2Title.length > 26 ? step2Title.slice(0, 24) + '..' : step2Title}
            </text>
            <text x="140" y="60" fill="#94a3b8" fontSize="10.5" textAnchor="middle" fontFamily="Cairo">
              {step2Desc.length > 34 ? step2Desc.slice(0, 32) + '..' : step2Desc}
            </text>
          </g>
        </g>

        {/* الشريط السفلي: قاعدة التوافق والتكامل المعماري منضبطة الأبعاد 100% داخل الإطار */}
        <g transform="translate(60, 365)">
          <rect width="680" height="52" rx="14" fill="#0b1329" stroke="#0284c7" strokeWidth="1.5" />
          <text x="340" y="23" fill="#38bdf8" fontSize="12" fontWeight="black" textAnchor="middle" fontFamily="Cairo">
            💡 الخلاصة المعمارية للمقارنة
          </text>
          <text x="340" y="42" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {(() => {
              const fullText = subtopic?.infographic?.summary || subtopic?.why || 'تكامل متناغم بين المفهومين لضمان أعلى أداء وكفاءة';
              return fullText.length > 76 ? fullText.slice(0, 74) + '...' : fullText;
            })()}
          </text>
        </g>
      </svg>
    );
  }

  // -------------------------------------------------------------
  // 2. مخطط تدفق مسار التنفيذ المتسلسل (Pipeline Execution Flow)
  // -------------------------------------------------------------
  if (type === 'pipeline-flow') {
    const cycleFrames = fps * 10;
    const progress = (frame % cycleFrames) / cycleFrames;
    const activeIndex = Math.floor(progress * 3);
    const tokenX = interpolate(progress, [0, 0.33, 0.66, 1], [150, 400, 650, 700]);

    return (
      <svg 
        viewBox="0 0 800 450" 
        preserveAspectRatio="xMidYMid meet" 
        className="w-full h-full max-h-[380px] drop-shadow-2xl font-sans mx-auto block"
      >
        <text x="400" y="38" fill="#f8fafc" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
          🔄 مسار تدفق وتنفيذ: {shortTitle}
        </text>
        <text x="400" y="58" fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="middle">
          Execution Lifecycle &amp; Rendering Pipeline
        </text>

        {/* خط الأنبوب الموصل الأساسي */}
        <line x1="120" y1="200" x2="680" y2="200" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
        <line x1="120" y1="200" x2={tokenX} y2="200" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" />

        {/* حزمة البيانات المتحركة على المسار */}
        <circle cx={tokenX} cy="200" r={16 * pulse} fill="#38bdf8" filter="drop-shadow(0 0 8px #38bdf8)" />
        <circle cx={tokenX} cy="200" r="6" fill="#fff" />

        {/* المحطة 1 */}
        <g transform="translate(50, 110)">
          <rect 
            width="200" 
            height="180" 
            rx="16" 
            fill="#0b1329" 
            stroke={activeIndex === 0 ? "#38bdf8" : "#334155"} 
            strokeWidth={activeIndex === 0 ? "3.5" : "1.5"} 
          />
          <circle cx="100" cy="40" r="22" fill={activeIndex === 0 ? "#0284c7" : "#1e293b"} />
          <text x="100" y="46" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">1</text>
          <text x="100" y="95" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {step1Title}
          </text>
          <text x="100" y="125" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="Cairo">
            {step1Desc.length > 24 ? step1Desc.slice(0, 22) + '..' : step1Desc}
          </text>
        </g>

        {/* المحطة 2 */}
        <g transform="translate(300, 110)">
          <rect 
            width="200" 
            height="180" 
            rx="16" 
            fill="#0f172a" 
            stroke={activeIndex === 1 ? "#a855f7" : "#334155"} 
            strokeWidth={activeIndex === 1 ? "3.5" : "1.5"} 
          />
          <circle cx="100" cy="40" r="22" fill={activeIndex === 1 ? "#7e22ce" : "#1e293b"} />
          <text x="100" y="46" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">2</text>
          <text x="100" y="95" fill="#c084fc" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {step2Title}
          </text>
          <text x="100" y="125" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="Cairo">
            {step2Desc.length > 24 ? step2Desc.slice(0, 22) + '..' : step2Desc}
          </text>
        </g>

        {/* المحطة 3 */}
        <g transform="translate(550, 110)">
          <rect 
            width="200" 
            height="180" 
            rx="16" 
            fill="#061c14" 
            stroke={activeIndex === 2 ? "#10b981" : "#334155"} 
            strokeWidth={activeIndex === 2 ? "3.5" : "1.5"} 
          />
          <circle cx="100" cy="40" r="22" fill={activeIndex === 2 ? "#059669" : "#1e293b"} />
          <text x="100" y="46" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">3</text>
          <text x="100" y="95" fill="#34d399" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {step3Title}
          </text>
          <text x="100" y="125" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="Cairo">
            {step3Desc.length > 24 ? step3Desc.slice(0, 22) + '..' : step3Desc}
          </text>
        </g>

        {/* الشريط السفلي: المسار التنفيذي الشامل للدرس منضبط الأبعاد */}
        <g transform="translate(50, 360)">
          <rect width="700" height="50" rx="14" fill="#0b1329" stroke="#0284c7" strokeWidth="1.5" />
          <text x="350" y="30" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            ⚡ {(() => {
              const flow = subtopic?.executionFlow || 'المتصفح ➔ تحليل الكود ➔ بناء الشجرة ➔ التصيير الفعلي والتفاعل السلس';
              return flow.length > 78 ? flow.slice(0, 76) + '...' : flow;
            })()}
          </text>
        </g>
      </svg>
    );
  }

  // -------------------------------------------------------------
  // 3. مخطط شبكة الاتصال والخادم والعميل (Client-Server & Network Protocols)
  // -------------------------------------------------------------
  if (type === 'client-server') {
    const cycleFrames = fps * 10;
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
        <defs>
          <linearGradient id="clientGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="serverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        {/* جانب العميل والمتصفح (Frontend / Client) */}
        <g transform="translate(40, 45)">
          <rect width="250" height="340" rx="20" fill="#0b1329" stroke="#38bdf8" strokeWidth="2.5" />
          <rect x="0" y="0" width="250" height="42" rx="20" fill="#1e293b" />
          <circle cx="25" cy="21" r="5" fill="#f43f5e" />
          <circle cx="42" cy="21" r="5" fill="#fbbf24" />
          <circle cx="59" cy="21" r="5" fill="#10b981" />
          <text x="145" y="26" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">
            {clientTerm}
          </text>

          {/* محتويات المتصفح المستخرجة من الدرس */}
          <rect x="25" y="65" width="200" height="90" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 3" />
          <text x="125" y="98" fill="#38bdf8" fontSize="14" fontWeight="black" textAnchor="middle" fontFamily="Cairo">
            {step1Title}
          </text>
          <text x="125" y="125" fill="#7dd3fc" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {clientDesc.length > 26 ? clientDesc.slice(0, 24) + '..' : clientDesc}
          </text>

          {/* شاشة العرض التفاعلية */}
          <rect x="25" y="175" width="200" height="110" rx="12" fill="#030712" />
          <rect x="40" y="195" width="80" height="14" rx="4" fill="#38bdf8" opacity="0.8" />
          <rect x="40" y="218" width="140" height="8" rx="3" fill="#334155" />
          <rect x="40" y="233" width="110" height="8" rx="3" fill="#334155" />
          <rect x="40" y="255" width="85" height="20" rx="6" fill="#10b981" />
          <text x="82" y="269" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">إرسال الطلب</text>

          <rect x="25" y="300" width="200" height="24" rx="6" fill="#0284c7" opacity="0.2" />
          <text x="125" y="316" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {subtopic?.title || 'واجهة العميل والتفاعل'}
          </text>
        </g>

        {/* خط اتصال الشبكة والـ HTTP Protocols */}
        <g transform="translate(300, 190)">
          <line x1="0" y1="20" x2="200" y2="20" stroke="#334155" strokeWidth="4" strokeDasharray="8 6" />
          
          {/* حزمة البيانات المتحركة (HTTP Request / Response) */}
          <g transform={`translate(${packetX - 300}, 0)`}>
            <rect x="-45" y="0" width="90" height="40" rx="10" fill={isGoingRight ? "#0284c7" : "#10b981"} />
            <text x="0" y="18" fill="#fff" fontSize="10" fontWeight="black" textAnchor="middle" fontFamily="Cairo">
              {isGoingRight ? "طلب HTTP ➔" : "⟵ استجابة 200"}
            </text>
            <text x="0" y="32" fill="#e2e8f0" fontSize="8" textAnchor="middle" fontFamily="monospace">
              {isGoingRight ? "GET /resource" : "JSON Data"}
            </text>
          </g>

          <text x="100" y="-12" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            شبكة الويب والبروتوكول (HTTP / APIs)
          </text>
        </g>

        {/* جانب الخادم وقواعد البيانات (Backend / Server) */}
        <g transform="translate(510, 45)">
          <rect width="250" height="340" rx="20" fill="#120c24" stroke="#a855f7" strokeWidth="2.5" />
          <rect x="0" y="0" width="250" height="42" rx="20" fill="#2e1065" />
          <text x="125" y="26" fill="#c084fc" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {serverTerm}
          </text>

          {/* محرك المعالجة والأمان */}
          <rect x="25" y="65" width="200" height="85" rx="12" fill="#1e113a" stroke="#a855f7" strokeWidth="1" strokeDasharray="4 3" />
          <text x="125" y="98" fill="#c084fc" fontSize="14" fontWeight="black" textAnchor="middle" fontFamily="Cairo">
            {step2Title}
          </text>
          <text x="125" y="122" fill="#e9d5ff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {serverDesc.length > 26 ? serverDesc.slice(0, 24) + '..' : serverDesc}
          </text>

          {/* أسطوانة قاعدة البيانات (Database) */}
          <g transform="translate(55, 175)">
            <rect x="0" y="15" width="140" height="80" rx="8" fill="#2e1065" stroke="#c084fc" strokeWidth="2" />
            <ellipse cx="70" cy="15" rx="70" ry="18" fill="#581c87" stroke="#c084fc" strokeWidth="2" />
            <ellipse cx="70" cy="50" rx="70" ry="16" fill="none" stroke="#7e22ce" strokeWidth="1.5" strokeDasharray="5 3" />
            <ellipse cx="70" cy="95" rx="70" ry="18" fill="#3b0764" stroke="#c084fc" strokeWidth="2" />
            <text x="70" y="60" fill="#f5d0fe" fontSize="13" fontWeight="bold" textAnchor="middle">Database 🗄️</text>
          </g>

          <rect x="25" y="300" width="200" height="24" rx="6" fill="#7c3aed" opacity="0.2" />
          <text x="125" y="316" fill="#c084fc" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            معالجة البيانات والتحقق والأمان
          </text>
        </g>
      </svg>
    );
  }

  // -------------------------------------------------------------
  // 4. مخطط ثلاثي الويب مع إبراز عمود الدرس (Web Trio: HTML, CSS, JS)
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
        <g transform="translate(40, 50)">
          <rect 
            width="220" 
            height="340" 
            rx="20" 
            fill="#0f172a" 
            stroke={isHtml ? "#ea580c" : "#334155"} 
            strokeWidth={isHtml ? "4" : "1.5"} 
          />
          <rect x="0" y="0" width="220" height="50" rx="20" fill="#431407" />
          <text x="110" y="32" fill="#fb923c" fontSize="16" fontWeight="black" textAnchor="middle">1. HTML 🦴</text>
          <text x="110" y="95" fill="#f97316" fontSize="17" fontWeight="black" textAnchor="middle" fontFamily="Cairo">
            {isHtml ? shortTitle : 'الهيكل العظمي'}
          </text>
          <text x="110" y="125" fill="#cbd5e1" fontSize="11" textAnchor="middle">
            Structure &amp; Semantics
          </text>
          
          <rect x="20" y="150" width="180" height="125" rx="10" fill="#1c1917" />
          <text x="30" y="180" fill="#ea580c" fontSize="11" fontFamily="monospace" direction="ltr" unicodeBidi="embed">&lt;main role="app"&gt;</text>
          <text x="40" y="205" fill="#fdba74" fontSize="11" fontFamily="monospace" direction="ltr" unicodeBidi="embed">&lt;h1&gt;{shortTitle.slice(0, 10)}&lt;/h1&gt;</text>
          <text x="40" y="230" fill="#fdba74" fontSize="11" fontFamily="monospace" direction="ltr" unicodeBidi="embed">&lt;section&gt;{step1Title.slice(0, 10)}&lt;/section&gt;</text>
          <text x="30" y="255" fill="#ea580c" fontSize="11" fontFamily="monospace" direction="ltr" unicodeBidi="embed">&lt;/main&gt;</text>

          <text x="110" y="310" fill="#fdba74" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {isHtml ? '★ محور تركيز الدرس الحالي' : 'بناء العناصر والمحتوى'}
          </text>
        </g>

        {/* سهم تكاملي 1 */}
        <g transform="translate(268, 200)">
          <circle cx="15" cy="15" r="16" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          <text x="15" y="21" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">+</text>
        </g>

        {/* العمود 2: CSS المظهر والتنسيق */}
        <g transform="translate(290, 50)">
          <rect 
            width="220" 
            height="340" 
            rx="20" 
            fill="#0f172a" 
            stroke={isCss ? "#0284c7" : "#334155"} 
            strokeWidth={isCss ? "4" : "1.5"} 
          />
          <rect x="0" y="0" width="220" height="50" rx="20" fill="#082f49" />
          <text x="110" y="32" fill="#38bdf8" fontSize="16" fontWeight="black" textAnchor="middle">2. CSS 🎨</text>
          <text x="110" y="95" fill="#0284c7" fontSize="17" fontWeight="black" textAnchor="middle" fontFamily="Cairo">
            {isCss ? shortTitle : 'المظهر والتصميم'}
          </text>
          <text x="110" y="125" fill="#cbd5e1" fontSize="11" textAnchor="middle">
            Styles &amp; Responsive Layout
          </text>
          
          <rect x="20" y="150" width="180" height="125" rx="10" fill="#0c2338" />
          <text x="30" y="180" fill="#38bdf8" fontSize="11" fontFamily="monospace" direction="ltr" unicodeBidi="embed">.layout &#123;</text>
          <text x="40" y="205" fill="#bae6fd" fontSize="11" fontFamily="monospace" direction="ltr" unicodeBidi="embed">display: flex;</text>
          <text x="40" y="230" fill="#bae6fd" fontSize="11" fontFamily="monospace" direction="ltr" unicodeBidi="embed">gap: 16px; padding: 20px;</text>
          <text x="30" y="255" fill="#38bdf8" fontSize="11" fontFamily="monospace" direction="ltr" unicodeBidi="embed">&#125;</text>

          <text x="110" y="310" fill="#7dd3fc" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {isCss ? '★ محور تركيز الدرس الحالي' : 'الألوان، المسافات، والتجاوب'}
          </text>
        </g>

        {/* سهم تكاملي 2 */}
        <g transform="translate(518, 200)">
          <circle cx="15" cy="15" r="16" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          <text x="15" y="21" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">+</text>
        </g>

        {/* العمود 3: JavaScript العقل والتفاعل */}
        <g transform="translate(540, 50)">
          <rect 
            width="220" 
            height="340" 
            rx="20" 
            fill="#0f172a" 
            stroke={isJs ? "#eab308" : "#334155"} 
            strokeWidth={isJs ? "4" : "1.5"} 
          />
          <rect x="0" y="0" width="220" height="50" rx="20" fill="#422006" />
          <text x="110" y="32" fill="#fde047" fontSize="16" fontWeight="black" textAnchor="middle">3. JavaScript 🧠</text>
          <text x="110" y="95" fill="#eab308" fontSize="17" fontWeight="black" textAnchor="middle" fontFamily="Cairo">
            {isJs ? shortTitle : 'العقل والتفاعل'}
          </text>
          <text x="110" y="125" fill="#cbd5e1" fontSize="11" textAnchor="middle">
            Logic, Reactivity &amp; APIs
          </text>
          
          <rect x="20" y="150" width="180" height="125" rx="10" fill="#291e0a" />
          <text x="30" y="180" fill="#facc15" fontSize="11" fontFamily="monospace" direction="ltr" unicodeBidi="embed">const render = () =&gt; &#123;</text>
          <text x="40" y="205" fill="#fef08a" fontSize="11" fontFamily="monospace" direction="ltr" unicodeBidi="embed">updateUI('{shortTitle.slice(0, 8)}');</text>
          <text x="40" y="230" fill="#fef08a" fontSize="11" fontFamily="monospace" direction="ltr" unicodeBidi="embed">listenEvents();</text>
          <text x="30" y="255" fill="#facc15" fontSize="11" fontFamily="monospace" direction="ltr" unicodeBidi="embed">&#125;</text>

          <text x="110" y="310" fill="#fde047" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {isJs ? '★ محور تركيز الدرس الحالي' : 'المنطق والتفاعل الحي'}
          </text>
        </g>
      </svg>
    );
  }

  // -------------------------------------------------------------
  // 5. مخطط شجرة الـ Virtual DOM ومطابقة الـ Diffing
  // -------------------------------------------------------------
  if (type === 'dom-tree') {
    const diffHighlight = Math.floor(frame / (fps * 3.5)) % 2 === 0;
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
        </defs>

        {/* جانب Virtual DOM */}
        <g transform="translate(40, 30)">
          <rect width="320" height="380" rx="20" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 4" opacity="0.8" />
          <text x="160" y="45" fill="#38bdf8" fontSize="17" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            شجرة Virtual DOM الافتراضية
          </text>
          
          <line x1="160" y1="100" x2="100" y2="180" stroke="#38bdf8" strokeWidth="3" opacity="0.7" />
          <line x1="160" y1="100" x2="220" y2="180" stroke="#38bdf8" strokeWidth="3" opacity="0.7" />
          <line x1="100" y1="180" x2="70" y2="270" stroke="#38bdf8" strokeWidth="3" opacity="0.7" />
          <line x1="100" y1="180" x2="130" y2="270" stroke="#38bdf8" strokeWidth="3" opacity="0.7" />

          {/* Root Component */}
          <circle cx="160" cy="100" r={26 * pulse} fill="url(#vdomGrad)" />
          <text x="160" y="105" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle" direction="ltr">&lt;App /&gt;</text>

          {/* Child 1 */}
          <circle cx="100" cy="180" r="22" fill="#0284c7" />
          <text x="100" y="184" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" direction="ltr">&lt;Header /&gt;</text>

          {/* Child 2 (العقدة التي تتغير - Diff) - كبسولة متسعة تحمي النص من الخروج */}
          <rect 
            x="165" 
            y="162" 
            width="100" 
            height="36" 
            rx="12" 
            fill={diffHighlight ? "#f43f5e" : "#0284c7"} 
            stroke="#fff" 
            strokeWidth={diffHighlight ? 3 : 1}
          />
          <text x="215" y="185" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle" direction="ltr">
            &lt;Card /&gt;
          </text>

          {/* Leafs */}
          <circle cx="70" cy="270" r="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="70" y="275" fill="#94a3b8" fontSize="10" textAnchor="middle" direction="ltr">logo</text>

          <circle cx="130" cy="270" r="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="130" y="275" fill="#94a3b8" fontSize="10" textAnchor="middle" direction="ltr">nav</text>
        </g>

        {/* محرك المقارنة Diffing Engine */}
        <g transform="translate(370, 200)">
          <circle cx="30" cy="20" r="32" fill="#1e293b" stroke="#a855f7" strokeWidth="3" />
          <text x="30" y="20" fill="#c084fc" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">Diffing</text>
          <text x="30" y="34" fill="#cbd5e1" fontSize="9" textAnchor="middle">O(n)</text>
          <path d="M 68 20 L 95 20 M 85 10 L 95 20 L 85 30" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" fill="none" />
        </g>

        {/* جانب Real DOM في المتصفح */}
        <g transform="translate(440, 30)">
          <rect width="320" height="380" rx="20" fill="#0f172a" stroke="#10b981" strokeWidth="2" opacity="0.8" />
          <text x="160" y="45" fill="#10b981" fontSize="17" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            شجرة المتصفح Real DOM
          </text>
          
          <line x1="160" y1="100" x2="100" y2="180" stroke="#10b981" strokeWidth="3" opacity="0.6" />
          <line x1="160" y1="100" x2="220" y2="180" stroke="#10b981" strokeWidth="3" opacity="0.6" />

          {/* Root */}
          <circle cx="160" cy="100" r="24" fill="#059669" />
          <text x="160" y="105" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle" direction="ltr">&lt;div#root&gt;</text>

          <circle cx="100" cy="180" r="20" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
          <text x="100" y="184" fill="#94a3b8" fontSize="10" textAnchor="middle" direction="ltr">header</text>

          {/* Only this node gets updated in Real DOM! */}
          <rect 
            x="165" 
            y="162" 
            width="100" 
            height="36" 
            rx="12" 
            fill={diffHighlight ? "#10b981" : "#059669"} 
            stroke="#34d399" 
            strokeWidth={diffHighlight ? 4 : 1}
          />
          <text x="215" y="185" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle" direction="ltr">
            span#val
          </text>

          {/* التحديث الفعلي فقط */}
          <rect x="50" y="320" width="220" height="38" rx="10" fill="#064e3b" stroke="#34d399" strokeWidth="1" />
          <text x="160" y="344" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            ✓ تحديث العقدة المعدلة فقط!
          </text>
        </g>
      </svg>
    );
  }

  // -------------------------------------------------------------
  // 6. مخطط تدفق المكونات والبيانات (Component Props & Data Flow)
  // -------------------------------------------------------------
  if (type === 'component-flow') {
    const flowProgress = interpolate(frame % (fps * 7.5), [0, fps * 7.5], [0, 120]);
    return (
      <svg 
        viewBox="0 0 800 450" 
        preserveAspectRatio="xMidYMid meet" 
        className="w-full h-full max-h-[380px] drop-shadow-2xl mx-auto block"
      >
        {/* Parent Component */}
        <g transform="translate(240, 40)">
          <rect width="320" height="110" rx="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
          <text x="160" y="38" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            المكون الأب: {shortTitle}
          </text>
          
          <rect x="20" y="55" width="280" height="40" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
          <text x="160" y="79" fill="#f8fafc" fontSize="12" textAnchor="middle" fontFamily="JetBrains Mono" direction="ltr" unicodeBidi="embed">
            const [data, setData] = useState(...)
          </text>
        </g>

        {/* سهم تدفق الـ Props لأسفل */}
        <g transform="translate(400, 155)">
          <line x1="0" y1="0" x2="0" y2="125" stroke="#38bdf8" strokeWidth="5" strokeDasharray="8 6" />
          <circle cx="0" cy={flowProgress} r="10" fill="#38bdf8" />
          <rect x="-85" y="45" width="170" height="32" rx="8" fill="#0284c7" />
          <text x="0" y="66" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            Props تتدفق للأسفل ⬇️
          </text>
        </g>

        {/* Child Components */}
        <g transform="translate(90, 285)">
          <rect width="270" height="105" rx="16" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
          <text x="135" y="38" fill="#c084fc" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {step1Title.length > 24 ? step1Title.slice(0, 22) + '..' : step1Title}
          </text>
          <text x="135" y="74" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono" direction="ltr" unicodeBidi="embed">
            &lt;Child data={'{value}'} /&gt;
          </text>
        </g>

        <g transform="translate(440, 285)">
          <rect width="270" height="105" rx="16" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
          <text x="135" y="38" fill="#34d399" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            {step2Title.length > 24 ? step2Title.slice(0, 22) + '..' : step2Title}
          </text>
          <text x="135" y="74" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono" direction="ltr" unicodeBidi="embed">
            &lt;Action onSave={'{handleSave}'} /&gt;
          </text>
        </g>

        {/* مسار وشارة رفع الحدث Event Callback للأعلى */}
        <path 
          d="M 575 285 C 655 215, 655 145, 565 115" 
          fill="none" 
          stroke="#f59e0b" 
          strokeWidth="3" 
          strokeDasharray="6 4" 
        />
        <g transform="translate(615, 195)">
          <rect width="80" height="26" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="40" y="17" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
            Events ⬆️
          </text>
        </g>
      </svg>
    );
  }

  // -------------------------------------------------------------
  // 7. مخطط دورة حياة الـ Hooks والتأثيرات الجانبية
  // -------------------------------------------------------------
  if (type === 'hooks-lifecycle') {
    const activeStep = Math.floor((frame / (fps * 10)) % 3);
    return (
      <svg 
        viewBox="0 0 800 450" 
        preserveAspectRatio="xMidYMid meet" 
        className="w-full h-full max-h-[380px] drop-shadow-2xl mx-auto block"
      >
        <text x="400" y="45" fill="#f8fafc" fontSize="20" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
          دورة حياة React Hooks &amp; Lifecycle: {shortTitle}
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
          <text x="100" y="110" fill="#38bdf8" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">التركيب (Mount)</text>
          <text x="100" y="145" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">{step1Title}</text>
          <text x="100" y="175" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">رسم الـ JSX الأولي</text>
          <rect x="25" y="205" width="150" height="30" rx="8" fill="#0369a1" />
          <text x="100" y="225" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle" direction="ltr" unicodeBidi="embed">useEffect(..., [])</text>
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
          <text x="100" y="110" fill="#c084fc" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">التحديث (Update)</text>
          <text x="100" y="145" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">{step2Title}</text>
          <text x="100" y="175" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">إعادة تصيير Re-render</text>
          <rect x="25" y="205" width="150" height="30" rx="8" fill="#6b21a8" />
          <text x="100" y="225" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle" direction="ltr" unicodeBidi="embed">useEffect(..., [deps])</text>
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
          <text x="85" y="110" fill="#fb7185" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">الإزالة (Unmount)</text>
          <text x="85" y="145" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">{step3Title}</text>
          <text x="85" y="175" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo">تنظيف الاشتراكات والذاكرة</text>
          <rect x="20" y="205" width="130" height="30" rx="8" fill="#9f1239" />
          <text x="85" y="225" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle" direction="ltr" unicodeBidi="embed">return () =&gt; cleanup</text>
        </g>
      </svg>
    );
  }

  // -------------------------------------------------------------
  // 8. المحرك المفهومي المداري الديناميكي الشامل (Universal Concept Engine)
  // -------------------------------------------------------------
  // مستخدم لكل درس آخر: يقرأ خطوات ومصطلحات الدرس الفعلي في كبسولات مدارية متحركة
  const focusPod = Math.floor(frame / (fps * 7.5)) % 4; // كل 7.5 ثانية تركيز على محطة على مدار الـ 30 ثانية

  return (
    <svg 
      viewBox="0 0 800 450" 
      preserveAspectRatio="xMidYMid meet" 
      className="w-full h-full max-h-[380px] drop-shadow-2xl mx-auto block"
    >
      <defs>
        <radialGradient id="univCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* خلفية الإشعاع التفاعلية */}
      <circle cx="400" cy="225" r="220" fill="url(#univCenterGlow)" />

      {/* قلب المحرك المركزي: عنوان وهوية الدرس الفعلية مع مسارات مدارية هادئة */}
      <g transform="translate(300, 145)">
        <ellipse 
          cx="100" 
          cy="80" 
          rx="120" 
          ry="50" 
          fill="none" 
          stroke="#38bdf8" 
          strokeWidth="3.5" 
          strokeDasharray="10 6" 
          transform={`rotate(${frame * 0.12} 100 80)`} 
        />
        <ellipse 
          cx="100" 
          cy="80" 
          rx="120" 
          ry="50" 
          fill="none" 
          stroke="#a855f7" 
          strokeWidth="3.5" 
          strokeDasharray="10 6" 
          transform={`rotate(${-frame * 0.1} 100 80)`} 
        />
        <circle cx="100" cy="80" r={42 * pulse} fill="#0284c7" stroke="#38bdf8" strokeWidth="2.5" />
        <text x="100" y="78" fill="#fff" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
          {shortTitle}
        </text>
        <text x="100" y="94" fill="#bae6fd" fontSize="9" fontWeight="bold" textAnchor="middle" direction="ltr">
          {engTitle.length > 20 ? engTitle.slice(0, 18) + '..' : engTitle}
        </text>
      </g>

      {/* المحطة المدارية 1 (الركن الأيمن العلوي) */}
      <g transform="translate(40, 40)">
        <rect 
          width="230" 
          height="100" 
          rx="16" 
          fill="#0b1329" 
          stroke={focusPod === 0 ? "#38bdf8" : "#1e293b"} 
          strokeWidth={focusPod === 0 ? "3.5" : "1.5"} 
        />
        <circle cx="28" cy="28" r="14" fill="#0284c7" />
        <text x="28" y="32" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">1</text>
        <text x="135" y="33" fill="#38bdf8" fontSize="13" fontWeight="black" textAnchor="middle" fontFamily="Cairo">
          {step1Title}
        </text>
        <text x="115" y="68" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="Cairo">
          {step1Desc.length > 28 ? step1Desc.slice(0, 26) + '..' : step1Desc}
        </text>
      </g>

      {/* المحطة المدارية 2 (الركن الأيسر العلوي) */}
      <g transform="translate(530, 40)">
        <rect 
          width="230" 
          height="100" 
          rx="16" 
          fill="#061c14" 
          stroke={focusPod === 1 ? "#10b981" : "#1e293b"} 
          strokeWidth={focusPod === 1 ? "3.5" : "1.5"} 
        />
        <circle cx="28" cy="28" r="14" fill="#059669" />
        <text x="28" y="32" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">2</text>
        <text x="135" y="33" fill="#34d399" fontSize="13" fontWeight="black" textAnchor="middle" fontFamily="Cairo">
          {step2Title}
        </text>
        <text x="115" y="68" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="Cairo">
          {step2Desc.length > 28 ? step2Desc.slice(0, 26) + '..' : step2Desc}
        </text>
      </g>

      {/* المحطة المدارية 3 (الركن الأيمن السفلي) */}
      <g transform="translate(40, 280)">
        <rect 
          width="230" 
          height="100" 
          rx="16" 
          fill="#1b0e2b" 
          stroke={focusPod === 2 ? "#a855f7" : "#1e293b"} 
          strokeWidth={focusPod === 2 ? "3.5" : "1.5"} 
        />
        <circle cx="28" cy="28" r="14" fill="#7e22ce" />
        <text x="28" y="32" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">3</text>
        <text x="135" y="33" fill="#c084fc" fontSize="13" fontWeight="black" textAnchor="middle" fontFamily="Cairo">
          {step3Title}
        </text>
        <text x="115" y="68" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="Cairo">
          {step3Desc.length > 28 ? step3Desc.slice(0, 26) + '..' : step3Desc}
        </text>
      </g>

      {/* المحطة المدارية 4 (الركن الأيسر السفلي): مصطلحات أو ميزات الدرس */}
      <g transform="translate(530, 280)">
        <rect 
          width="230" 
          height="100" 
          rx="16" 
          fill="#241403" 
          stroke={focusPod === 3 ? "#f59e0b" : "#1e293b"} 
          strokeWidth={focusPod === 3 ? "3.5" : "1.5"} 
        />
        <circle cx="28" cy="28" r="14" fill="#d97706" />
        <text x="28" y="32" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">★</text>
        <text x="135" y="33" fill="#fbbf24" fontSize="13" fontWeight="black" textAnchor="middle" fontFamily="Cairo">
          {terms[0]?.term ? terms[0].term : 'الأداء 60FPS'}
        </text>
        <text x="115" y="68" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="Cairo">
          {terms[0]?.meaning ? (terms[0].meaning.length > 28 ? terms[0].meaning.slice(0, 26) + '..' : terms[0].meaning) : 'كفاءة وسلاسة العرض'}
        </text>
      </g>
    </svg>
  );
}
