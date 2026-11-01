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

export default function ReactLessonComposition({ 
  subtopic, 
  topicTitle = "مفهوم برمجي في React" 
}) {
  const frame = useCurrentFrame();
  const { fps, width, height, durationInFrames } = useVideoConfig();

  // انتقال الدخول بالزنبرك (Spring Physics)
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 }
  });

  const opacityFade = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp'
  });

  const diagramType = detectDiagramType(subtopic);

  // الكود الذهبي المصغر للعرض داخل التايم لاين
  const sampleCode = subtopic?.codeSnippet 
    ? subtopic.codeSnippet.split('\n').slice(0, 5).join('\n')
    : `function ${subtopic?.title?.replace(/[^a-zA-Z0-9]/g, '') || 'Component'}() {\n  return <div>⚛️ React 19 Engine</div>;\n}`;

  return (
    <div 
      className="w-full h-full flex flex-col justify-between p-8 sm:p-12 text-white overflow-hidden relative font-sans"
      style={{
        background: 'linear-gradient(135deg, #07090e 0%, #0d1527 50%, #050b14 100%)',
        direction: 'rtl'
      }}
    >
      {/* شبكة هندسية خلفية متحركة */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.4) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          transform: `translateY(${interpolate(frame, [0, durationInFrames], [0, -32])}px)`
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
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {subtopic?.id || 'REACT'}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {topicTitle}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              {subtopic?.title || 'موشن جرافيك تعليمي متقدم'}
            </h1>
          </div>
        </div>

        {/* مؤشر الإطار والـ FPS الحي */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Remotion 60FPS</span>
        </div>
      </div>

      {/* المنتصف: مشهد المخطط المعماري الحركي SVG */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-4 max-h-[58%] overflow-hidden">
        <SvgMotionDiagram 
          type={diagramType} 
          frame={frame} 
          fps={fps} 
        />
      </div>

      {/* الشريط السفلي: الكود الذهبي + النتيجة أو الملاحظة الذهبية */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-800/80 pt-4">
        {/* صندوق كود تفاعلي متحرك */}
        <div 
          className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 shadow-inner"
          style={{
            opacity: interpolate(frame, [25, 45], [0, 1], { extrapolateRight: 'clamp' }),
            transform: `translateY(${interpolate(frame, [25, 45], [20, 0], { extrapolateRight: 'clamp' })}px)`
          }}
        >
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1 border-b border-slate-800/60 pb-1">
            <span className="text-cyan-400 font-bold">💻 الشفرة النموذجية (Golden Code):</span>
            <span className="font-mono text-[10px] text-slate-500">JSX / React 19</span>
          </div>
          <pre 
            className="text-[11px] text-slate-200 font-mono overflow-x-auto select-none"
            dir="ltr"
            style={{ direction: 'ltr' }}
          >
            <code>{sampleCode}</code>
          </pre>
        </div>

        {/* كبسولة الفهم العميق وخلف الكواليس */}
        <div 
          className="bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-3 flex flex-col justify-between"
          style={{
            opacity: interpolate(frame, [40, 60], [0, 1], { extrapolateRight: 'clamp' }),
            transform: `translateY(${interpolate(frame, [40, 60], [20, 0], { extrapolateRight: 'clamp' })}px)`
          }}
        >
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
            <span>💡</span>
            <span>القاعدة المعمارية الذهبية:</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-medium mt-1">
            {subtopic?.description || 'يعتمد React على مقارنة الأشجار الافتراضية بدقة O(n) وتحديث العقد المتأثرة فقط بأعلى سرعة وأقل استهلاك لذاكرة المتصفح.'}
          </p>
          <div className="flex items-center gap-2 mt-2 pt-1 border-t border-cyan-500/20 text-[10px] text-slate-400">
            <span className="text-emerald-400 font-bold">✓ Zero Overhead</span>
            <span>•</span>
            <span className="text-sky-400 font-bold">Concurrent Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}
