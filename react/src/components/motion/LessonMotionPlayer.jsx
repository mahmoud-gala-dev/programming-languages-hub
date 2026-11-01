// src/components/motion/LessonMotionPlayer.jsx
// مشغل Remotion المدمج لموشن جرافيك الدروس التفاعلي
import React, { useState } from 'react';
import { Player } from '@remotion/player';
import { Play, Pause, RotateCcw, Maximize2, Sparkles, Film, Image as ImageIcon } from 'lucide-react';
import ReactLessonComposition from './compositions/ReactLessonComposition.jsx';

export default function LessonMotionPlayer({ 
  subtopic, 
  topicTitle,
  onSwitchToInfographic 
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl bg-slate-950/80 border border-slate-800/80 overflow-hidden shadow-2xl relative transition-all duration-300">
      {/* شريط أدوات تحكم المشغل العلوي */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80 flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold">
            <Film className="size-3.5 text-sky-400" />
            <span>Remotion Motion Engine</span>
          </span>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            موشن جرافيك تفاعلي عالي الدقة (SVG + Code)
          </span>
        </div>

        {/* أزرار الإجراءات السريعة */}
        <div className="flex items-center gap-1.5">
          {onSwitchToInfographic && (
            <button
              onClick={onSwitchToInfographic}
              aria-label="التبديل إلى بطاقة الإنفوجرافيك الثابتة"
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition text-[11px] font-semibold cursor-pointer"
              title="التبديل إلى بطاقة الإنفوجرافيك الثابتة"
            >
              <ImageIcon className="size-3.5 text-purple-400" />
              <span>الإنفوجرافيك الثابت</span>
            </button>
          )}
        </div>
      </div>

      {/* حاوية المشغل الفعلي لـ Remotion */}
      <div className="w-full bg-slate-950 relative overflow-hidden flex items-center justify-center">
        <Player
          component={ReactLessonComposition}
          inputProps={{ subtopic, topicTitle }}
          durationInFrames={180}
          compositionWidth={1280}
          compositionHeight={720}
          fps={30}
          style={{
            width: '100%',
            aspectRatio: '16/9',
            maxHeight: '520px',
            borderRadius: '0 0 1rem 1rem'
          }}
          controls={true}
          autoPlay={false}
          loop={true}
          showVolumeControls={false}
          clickToPlay={true}
          acknowledgeRemotionLicense={true}
        />
      </div>
    </div>
  );
}

