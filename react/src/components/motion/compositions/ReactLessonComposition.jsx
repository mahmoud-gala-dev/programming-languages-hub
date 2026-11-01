// src/components/motion/compositions/ReactLessonComposition.jsx
// تركيبة Remotion السينمائية للموشن جرافيك التعليمي المتجاوب
import React from 'react';
import { 
  useCurrentFrame, 
  useVideoConfig, 
  interpolate, 
  spring, 
  Sequence 
} from 'remotion';
import SvgMotionDiagram, { detectDiagramType } from './SvgMotionDiagram.jsx';
import { highlightCodeLine } from '../../../utils/codeHighlighter.jsx';

export default function ReactLessonComposition({ 
  subtopic, 
  topicTitle = "مفهوم برمجي في React" 
}) {
  const frame = useCurrentFrame();
  const { fps, width, height, durationInFrames } = useVideoConfig();

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

  // الكود الذهبي الفعلي المقتبس من الدرس
  const rawCode = subtopic?.simpleCode || subtopic?.syntax || subtopic?.codeSnippet || '';
  const sampleCode = rawCode
    ? rawCode.trim().split('\n').slice(0, 5).join('\n')
    : `// ${subtopic?.title || 'React Concept'}\nconsole.log("Ready!");`;

  // الفهم العميق والتعريف المعماري الفعلي للدرس
  const explanationText = subtopic?.definition || subtopic?.why || subtopic?.description || 'مفهوم جوهري في خريطة طريق React الاحترافية.';

  return (
    <div 
      className="w-full h-full flex flex-col justify-between p-6 sm:p-8 text-white overflow-hidden relative font-sans select-none"
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

      {/* الرأس: شارة الدرس والعنوان مع حركة دخول سلسة */}
      <div 
        className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-4"
        style={{
          opacity: opacityFade,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [-30, 0])}px)`
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl shadow-lg shadow-cyan-500/30">
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
            <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-1 text-balance">
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

      {/* شريط خطوات المفهوم الحركية المتتابعة التابع لمحتوى الدرس الحالي بتوقيت مهدئ ومريح */}
      {subtopic?.infographic?.steps && subtopic.infographic.steps.length > 0 && (
        <div className="relative z-10 flex items-center justify-between gap-2 sm:gap-3 mt-2 sm:mt-3 px-1">
          {subtopic.infographic.steps.slice(0, 3).map((step, idx) => {
            // كل خطوة تأخذ 85 إطاراً كاملاً (قرابة 3 ثوانٍ لكل خطوة) لتركيز المتعلم
            const stepStart = idx * 85;
            const stepActive = frame >= stepStart && frame < (stepStart + 85);
            const isCompleted = frame >= (stepStart + 85);
            return (
              <div 
                key={idx}
                className={`flex-1 flex items-center gap-2 p-1.5 sm:p-2 rounded-xl border transition-all duration-500 ${
                  stepActive 
                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/20 scale-[1.02]' 
                    : isCompleted
                    ? 'bg-slate-900/60 border-slate-700/60 text-slate-300'
                    : 'bg-slate-950/40 border-slate-800/40 text-slate-500'
                }`}
              >
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center text-[10px] sm:text-xs font-bold font-mono ${
                  stepActive ? 'bg-cyan-400 text-slate-950 font-black' : isCompleted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  {isCompleted ? '✓' : idx + 1}
                </div>
                <div className="truncate">
                  <div className="text-[11px] sm:text-xs font-bold truncate">{step.title}</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400 truncate">{step.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* المنتصف: مشهد المخطط المعماري الحركي SVG متمركز تماماً ومتجاوب بنسبة 100% */}
      <div className="relative z-10 flex-1 w-full flex items-center justify-center my-1 sm:my-2 overflow-hidden mx-auto">
        <SvgMotionDiagram 
          type={diagramType}
          subtopic={subtopic}
          frame={frame} 
          fps={fps} 
        />
      </div>

      {/* الشريط السفلي: الكود الذهبي المتألق مع التلوين النحوي + الملاحظة الذهبية (ظهور هادئ بتوقيت مريح) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 border-t border-slate-800/80 pt-3.5">
        {/* صندوق كود تفاعلي متحرك مع التلوين النحوي الكامل Syntax Highlighting */}
        <div 
          className="bg-slate-950/95 border border-slate-800/90 rounded-2xl p-3.5 shadow-2xl flex flex-col justify-between"
          style={{
            opacity: interpolate(frame, [50, 90], [0, 1], { extrapolateRight: 'clamp' }),
            transform: `translateY(${interpolate(frame, [50, 90], [20, 0], { extrapolateRight: 'clamp' })}px)`
          }}
        >
          {/* شريط أدوات IDE أنيق لملف الكود */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 border-b border-slate-800/80 pb-2" dir="ltr">
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

          {/* محتوى الشفرة الملونة نحوياً مع أرقام الأسطر */}
          <div 
            className="text-[11px] font-mono overflow-x-auto select-none space-y-1 py-1"
            dir="ltr"
            style={{ direction: 'ltr', textAlign: 'left' }}
          >
            {sampleCode.split('\n').map((line, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-slate-600 select-none text-[10px] w-4 text-right tabular-nums pt-0.5">{idx + 1}</span>
                <span className="flex-1 font-mono text-slate-200 leading-relaxed">{highlightCodeLine(line)}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-800/60 pt-2 mt-2 font-mono" dir="ltr">
            <span>React 19 Core</span>
            <span dir="rtl" className="text-emerald-400 font-sans font-bold"><bdi>✓ كود تنفيذي أصيل ومختبر</bdi></span>
          </div>
        </div>

        {/* كبسولة الفهم العميق والقاعدة المعمارية الذهبية */}
        <div 
          className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-3.5 flex flex-col justify-between shadow-2xl"
          style={{
            opacity: interpolate(frame, [80, 120], [0, 1], { extrapolateRight: 'clamp' }),
            transform: `translateY(${interpolate(frame, [80, 120], [20, 0], { extrapolateRight: 'clamp' })}px)`
          }}
        >
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
            <div className="flex items-center gap-2 text-xs font-black text-cyan-300 font-sans">
              <span className="text-sm">💡</span>
              <span>القاعدة المعمارية الذهبية (Architecture Rule):</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold font-mono">
              BEST PRACTICE
            </span>
          </div>
          
          <p className="text-xs text-slate-200 leading-relaxed font-medium mt-2.5 line-clamp-4 text-pretty">
            {explanationText}
          </p>

          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 font-mono">
            <span className="text-emerald-400 font-bold">✓ Zero Overhead</span>
            <span className="text-slate-600">•</span>
            <span className="text-sky-400 font-bold">Concurrent React 19</span>
            <span className="text-slate-600">•</span>
            <span className="text-purple-400 font-bold">60FPS Motion</span>
          </div>
        </div>
      </div>
    </div>
  );
}

