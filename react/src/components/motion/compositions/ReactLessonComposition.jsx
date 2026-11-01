// src/components/motion/compositions/ReactLessonComposition.jsx
// تركيبة Remotion السينمائية للموشن جرافيك التعليمي المتجاوب
// معالجة متكاملة لتلوين الأكواد البرمجية (Syntax Highlighting)، تباعد واحتواء المكونات، وتزامن المراحل التعليمية الثلاث
import React from 'react';
import { 
  useCurrentFrame, 
  useVideoConfig, 
  interpolate, 
  spring 
} from 'remotion';
import SvgMotionDiagram, { detectDiagramType } from './SvgMotionDiagram.jsx';
import { highlightCodeLine } from '../../../utils/codeHighlighter.jsx';

export default function ReactLessonComposition({ 
  subtopic, 
  topicTitle = "مفهوم برمجي في React" 
}) {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // انتقال الدخول بالزنبرك المهدئ والناعم (Smooth Calm Spring Physics)
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 60 }
  });

  const opacityFade = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: 'clamp'
  });

  const diagramType = detectDiagramType(subtopic);

  // الكود الذهبي الفعلي المقتبس من الدرس (مع دعم كامل لكافة التسميات المعتمدة codeSimple و simpleCode و syntax)
  const rawCode = 
    subtopic?.codeSimple || 
    subtopic?.simpleCode || 
    subtopic?.codeSnippet || 
    subtopic?.syntax || 
    subtopic?.codeAdvanced || 
    subtopic?.advancedCode || 
    '';

  const sampleCode = (() => {
    if (!rawCode) {
      return `// ${subtopic?.title || 'React Concept'}\nfunction App() {\n  return <h1>${subtopic?.title || 'React 19'}</h1>;\n}`;
    }
    const lines = rawCode
      .split('\n')
      .map(l => l.trimEnd())
      .filter(l => !l.trim().startsWith('<!--') && !l.trim().endsWith('-->') && !l.trim().startsWith('<div class="simulation-card'));
    
    const picked = lines.slice(0, 5);
    return picked.length > 0 
      ? picked.join('\n') 
      : `// ${subtopic?.title || 'React Concept'}\nconsole.log("Ready!");`;
  })();

  // تقسيم زمن المحاكاة إلى 3 مراحل تعليمية سينمائية متتابعة (10 ثوانٍ / 300 إطار لكل مرحلة)
  const totalFrames = durationInFrames || 900;
  const phaseDuration = totalFrames / 3;
  const currentPhaseIndex = Math.min(Math.floor(frame / phaseDuration), 2);
  const phaseProgress = Math.min(Math.max(((frame % phaseDuration) / phaseDuration) * 100, 0), 100);

  // استخراج المحتوى الغني الشامل لكل مرحلة من بيانات الدرس
  const phases = [
    {
      id: 1,
      badge: "المرحلة 1: المفهوم التأسيسي والنموذج الذهني",
      enBadge: "Foundation & Mental Model",
      icon: "💡",
      color: "border-sky-500/40 bg-sky-500/10 text-sky-300",
      activePillColor: "bg-sky-500 text-slate-950 font-black",
      progressBg: "bg-sky-400",
      title: subtopic?.infographic?.steps?.[0]?.title || "المفهوم الجوهري",
      desc: subtopic?.infographic?.steps?.[0]?.desc || "تأسيس المفهوم والهدف منه",
      primaryExplanation: subtopic?.definition || subtopic?.why || 'مفهوم جوهري في بنية وتطوير تطبيقات React الاحترافية.',
      secondaryInsight: subtopic?.mentalModel 
        ? `النموذج الذهني: ${subtopic.mentalModel}` 
        : (subtopic?.analogy ? `تشبيه واقعي: ${subtopic.analogy}` : (subtopic?.why ? `الهدف المعماري: ${subtopic.why}` : 'معمارية تصريحية مرنة لبناء واجهات المستخدم السريعة.')),
      tag: "UI = f(State)"
    },
    {
      id: 2,
      badge: "المرحلة 2: ما وراء الكواليس وآلية التنفيذ",
      enBadge: "Under the Hood & Engine Execution",
      icon: "⚙️",
      color: "border-purple-500/40 bg-purple-500/10 text-purple-300",
      activePillColor: "bg-purple-500 text-white font-black",
      progressBg: "bg-purple-400",
      title: subtopic?.infographic?.steps?.[1]?.title || "آلية العمل والكواليس",
      desc: subtopic?.infographic?.steps?.[1]?.desc || "خوارزمية المعالجة والتنفيذ الداخلي",
      primaryExplanation: subtopic?.executionFlow 
        ? `مسار التنفيذ: ${subtopic.executionFlow}` 
        : (subtopic?.why || 'يقوم محرك React بحساب التعديلات الصافية عبر الـ Virtual DOM لتحديث العناصر المتأثرة فقط بأقصى سرعة ممكنة.'),
      secondaryInsight: subtopic?.deepDiveFaqs?.[0]
        ? `سؤال معماري: ${subtopic.deepDiveFaqs[0].q} ➔ ${subtopic.deepDiveFaqs[0].a}`
        : 'كفاءة الذاكرة: لا يتم لمس شجرة الـ DOM الحقيقية إلا في العقد المتغيرة لتجنب الـ Layout Thrashing.',
      tag: "Virtual DOM Diffing"
    },
    {
      id: 3,
      badge: "المرحلة 3: نصائح المحترفين وأسرار الإنتاج",
      enBadge: "Production Mastery & Best Practices",
      icon: "🚀",
      color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
      activePillColor: "bg-emerald-500 text-slate-950 font-black",
      progressBg: "bg-emerald-400",
      title: subtopic?.infographic?.steps?.[2]?.title || "أسرار الإنتاج والأداء",
      desc: subtopic?.infographic?.steps?.[2]?.desc || "أفضل الممارسات وتفادي الفخاخ",
      primaryExplanation: subtopic?.performanceSecrets?.[0]
        ? `🚀 سر الأداء العالي: ${subtopic.performanceSecrets[0]}`
        : (subtopic?.bestPractices?.[0] ? `أفضل ممارسة: ${subtopic.bestPractices[0]}` : 'احرص على عزل المكونات لتقليل إعادة التصيير الزائدة.'),
      secondaryInsight: subtopic?.productionPitfalls?.[0]
        ? `⚠️ فخ شائع تجنبه: ${subtopic.productionPitfalls[0]}`
        : 'تجنب تعديل الـ DOM يدوياً واعتمد كلياً على الحالة التصريحية (Declarative State).',
      tag: "Production Ready"
    }
  ];

  const currentPhase = phases[currentPhaseIndex];

  return (
    <div 
      className="w-full h-full flex flex-col justify-between p-4 sm:p-5.5 text-white overflow-hidden relative font-sans select-none"
      style={{
        background: 'linear-gradient(135deg, #07090e 0%, #0d1527 50%, #050b14 100%)',
        direction: 'rtl'
      }}
    >
      {/* شبكة هندسية خلفية متحركة ببطء وانسيابية */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.4) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          transform: `translateY(${interpolate(frame, [0, durationInFrames], [0, -24])}px)`
        }}
      />

      {/* الرأس: شارة الدرس والعنوان مع حركة دخول سلسة وحماية BiDi للغة */}
      <div 
        className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-3"
        style={{
          opacity: opacityFade,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [-30, 0])}px)`
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl shadow-lg shadow-cyan-500/30">
            ⚛️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span dir="ltr" className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {subtopic?.id || 'REACT'}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {topicTitle}
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-extrabold text-white mt-0.5 text-balance">
              <bdi>{subtopic?.title || 'موشن جرافيك تعليمي متقدم'}</bdi>
            </h1>
          </div>
        </div>

        {/* مؤشر الإطار والـ FPS الحي */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Remotion 60FPS</span>
        </div>
      </div>

      {/* شريط المراحل التعليمية الثلاث السينمائية المتزامنة مع الـ 30 ثانية */}
      <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-3 my-1.5 px-0.5">
        {phases.map((phase, idx) => {
          const isPhaseActive = idx === currentPhaseIndex;
          const isCompleted = idx < currentPhaseIndex;
          return (
            <div 
              key={phase.id}
              className={`flex flex-col p-2 sm:p-2.5 rounded-xl border transition-all duration-500 relative overflow-hidden ${
                isPhaseActive 
                  ? 'bg-slate-900/90 border-cyan-400/80 shadow-lg shadow-cyan-500/20 scale-[1.01]' 
                  : isCompleted
                  ? 'bg-slate-900/60 border-slate-700/60 text-slate-300'
                  : 'bg-slate-950/40 border-slate-800/40 text-slate-500'
              }`}
            >
              <div className="flex items-center justify-between gap-1.5 mb-1">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-bold font-mono ${
                    isPhaseActive ? phase.activePillColor : isCompleted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {isCompleted ? '✓' : phase.id}
                  </div>
                  <span className={`text-[11px] sm:text-xs font-bold truncate ${isPhaseActive ? 'text-white' : isCompleted ? 'text-slate-300' : 'text-slate-500'}`}>
                    {phase.title}
                  </span>
                </div>
                <span className="text-[10px] hidden md:inline font-mono text-slate-400">
                  {idx === 0 ? '0s-10s' : idx === 1 ? '10s-20s' : '20s-30s'}
                </span>
              </div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 truncate pr-6.5">
                {phase.desc}
              </div>
              
              {/* شريط تقدم ناعم يعرض الوقت المتبقي في المرحلة الحالية */}
              <div className="w-full h-1 bg-slate-800/80 rounded-full overflow-hidden mt-1.5">
                <div 
                  className={`h-full ${phase.progressBg} transition-all duration-200`}
                  style={{ width: `${isPhaseActive ? phaseProgress : isCompleted ? 100 : 0}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* المنتصف: مشهد المخطط المعماري الحركي SVG متمركز تماماً ومتجاوب بنسبة 100% وبدون أي فيض للنصوص */}
      <div className="relative z-10 flex-1 w-full flex items-center justify-center my-1 overflow-hidden mx-auto">
        <SvgMotionDiagram 
          type={diagramType}
          subtopic={subtopic}
          frame={frame} 
          fps={fps} 
        />
      </div>

      {/* الشريط السفلي: الشفرة النموذجية مع التلوين النحوي الكامل + كبسولة الشرح المعماري المتقدم */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 border-t border-slate-800/80 pt-2.5">
        {/* صندوق كود تفاعلي متحرك مع التلوين النحوي الكامل Syntax Highlighting */}
        <div 
          className="bg-slate-950/95 border border-slate-800/90 rounded-2xl p-3 sm:p-3.5 shadow-2xl flex flex-col justify-between"
          style={{
            opacity: interpolate(frame, [40, 80], [0, 1], { extrapolateRight: 'clamp' }),
            transform: `translateY(${interpolate(frame, [40, 80], [15, 0], { extrapolateRight: 'clamp' })}px)`
          }}
        >
          {/* شريط أدوات IDE أنيق لملف الكود */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5 border-b border-slate-800/80 pb-1.5" dir="ltr">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-sm" />
              <span className="text-slate-300 font-mono text-[11px] font-bold ml-2">App.jsx</span>
            </div>
            <div className="flex items-center gap-2">
              <span dir="rtl" className="text-cyan-400 font-bold font-sans text-[11px]"><bdi>الشفرة النموذجية (Golden Code)</bdi></span>
              <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono text-[10px] font-bold">JSX</span>
            </div>
          </div>

          {/* محتوى الشفرة الملونة نحوياً مع أرقام الأسطر وحماية اتجاه الـ LTR الكامل */}
          <div 
            className="text-[11px] font-mono overflow-x-auto select-none space-y-1 py-1"
            dir="ltr"
            style={{ direction: 'ltr', textAlign: 'left' }}
          >
            {sampleCode.split('\n').map((line, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="text-slate-600 select-none text-[10px] w-4 text-right tabular-nums pt-0.5">{idx + 1}</span>
                <span className="flex-1 font-mono text-slate-200 leading-relaxed" style={{ unicodeBidi: 'isolate' }}>
                  {highlightCodeLine(line)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-800/60 pt-1.5 mt-1.5 font-mono" dir="ltr">
            <span>React 19 Core</span>
            <span dir="rtl" className="text-emerald-400 font-sans font-bold"><bdi>✓ كود تنفيذي أصيل ومختبر</bdi></span>
          </div>
        </div>

        {/* كبسولة الشرح المعماري العميق المتجددة ديناميكياً مع مراحل الـ 30 ثانية */}
        <div 
          className="bg-slate-900/95 border border-cyan-500/30 rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between shadow-2xl transition-all duration-500"
          style={{
            opacity: interpolate(frame, [20, 50], [0, 1], { extrapolateRight: 'clamp' }),
            transform: `translateY(${interpolate(frame, [20, 50], [15, 0], { extrapolateRight: 'clamp' })}px)`
          }}
        >
          {/* رأس البطاقة مع شارة المرحلة النشطة */}
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-1.5">
            <div className="flex items-center gap-2 text-xs font-black text-cyan-300 font-sans">
              <span className="text-sm">{currentPhase.icon}</span>
              <span>{currentPhase.badge}</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold font-mono">
              {currentPhase.enBadge}
            </span>
          </div>
          
          {/* الشرح الجوهري الرئيسي للمرحلة */}
          <div className="my-1.5 space-y-1.5">
            <p className="text-xs text-slate-100 leading-relaxed font-medium text-pretty line-clamp-3">
              {currentPhase.primaryExplanation}
            </p>

            {/* الإضاءة الإضافية والتحذير/النموذج الذهني */}
            <div className="bg-slate-950/80 border border-slate-800 p-2 rounded-xl text-[10.5px] text-cyan-200/90 leading-relaxed flex items-start gap-1.5">
              <span className="text-xs mt-0.5">🔹</span>
              <span className="line-clamp-2 text-pretty">{currentPhase.secondaryInsight}</span>
            </div>
          </div>

          {/* التذييل مع الشارات والمؤشرات */}
          <div className="flex items-center justify-between pt-1.5 border-t border-slate-800/80 text-[10px] text-slate-400 font-mono">
            <span className="text-emerald-400 font-bold">✓ {currentPhase.tag}</span>
            <span className="text-slate-600">•</span>
            <span className="text-sky-400 font-bold">Concurrent React 19</span>
            <span className="text-slate-600">•</span>
            <span className="text-purple-400 font-bold">30s • 60FPS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
