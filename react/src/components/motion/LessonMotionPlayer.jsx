// src/components/motion/LessonMotionPlayer.jsx
// مشغل Remotion المدمج لموشن جرافيك الدروس التفاعلي مع دعم وضع السينما المكبر والاستجابة الكاملة
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Player } from '@remotion/player';
import { Play, Pause, RotateCcw, Maximize2, Minimize2, Sparkles, Film, Image as ImageIcon, X } from 'lucide-react';
import ReactLessonComposition from './compositions/ReactLessonComposition.jsx';

export default function LessonMotionPlayer({ 
  subtopic, 
  topicTitle,
  onSwitchToInfographic 
}) {
  const [isCinemaOpen, setIsCinemaOpen] = useState(false);

  // إغلاق وضع السينما بالضغط على زر ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCinemaOpen) {
        setIsCinemaOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCinemaOpen]);

  // مفتاح التمييز لإعادة تشغيل وتحديث المشغل عند الانتقال بين الدروس
  const playerKey = subtopic?.id || subtopic?.title || 'remotion-motion';

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl bg-slate-950/90 border border-slate-800/80 overflow-hidden shadow-2xl relative transition-all duration-300">
      {/* شريط أدوات تحكم المشغل العلوي */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80 flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold">
            <Film className="size-3.5 text-sky-400" />
            <span>Remotion Motion Engine</span>
          </span>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            موشن جرافيك تفاعلي عالي الدقة ديناميكي لكل درس (SVG + Code)
          </span>
        </div>

        {/* أزرار الإجراءات السريعة وتكبير الشاشة */}
        <div className="flex items-center gap-2">
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

          {/* زر وضع السينما المكبر */}
          <button
            onClick={() => setIsCinemaOpen(true)}
            aria-label="تكبير المشغل إلى وضع السينما الكامل"
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white transition text-[11px] font-bold shadow-sm shadow-sky-500/20 cursor-pointer"
            title="تكبير المشغل - وضع السينما عالي الدقة"
          >
            <Maximize2 className="size-3.5" />
            <span>وضع السينما المكبر</span>
          </button>
        </div>
      </div>

      {/* حاوية المشغل الفعلي لـ Remotion في الوضع العادي (متجاوبة تماماً مع العرض 16/9 وتمركز مثالي LTR) */}
      <div 
        className="w-full bg-slate-950 relative overflow-hidden flex items-center justify-center aspect-video"
        dir="ltr"
        style={{ direction: 'ltr' }}
      >
        <Player
          key={playerKey}
          component={ReactLessonComposition}
          inputProps={{ subtopic, topicTitle }}
          durationInFrames={360}
          compositionWidth={1280}
          compositionHeight={720}
          fps={30}
          style={{
            width: '100%',
            height: '100%',
            aspectRatio: '16/9',
            margin: '0 auto'
          }}
          controls={true}
          autoPlay={false}
          loop={true}
          showVolumeControls={false}
          clickToPlay={true}
          acknowledgeRemotionLicense={true}
        />
      </div>

      {/* مودال وضع السينما المكبر (Cinema Mode Portal) */}
      {isCinemaOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-xl flex flex-col p-3 sm:p-6 text-white animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="وضع العرض السينمائي المكبر لموشن جرافيك الدرس"
        >
          {/* رأس مودال السينما */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800 gap-3">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
                <Film className="size-5" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">
                    {subtopic?.id || 'REACT'}
                  </span>
                  <h2 className="text-base sm:text-lg font-black text-white">
                    {subtopic?.title || 'موشن جرافيك الدرس'}
                  </h2>
                </div>
                <p className="text-xs text-slate-400 hidden sm:block mt-0.5">
                  عرض سينمائي متجاوب عالي الدقة (Full 1080p Remotion Motion Canvas)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 hidden md:inline">
                اضغط <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[10px]">ESC</kbd> للخروج
              </span>
              <button
                onClick={() => setIsCinemaOpen(false)}
                aria-label="إغلاق العرض السينمائي"
                className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-rose-900/60 text-slate-300 hover:text-rose-200 border border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
              >
                <X className="size-5" />
                <span className="text-xs font-bold hidden sm:inline">إغلاق السينما</span>
              </button>
            </div>
          </div>

          {/* مسرح المشغل السينمائي المتجاوب والمتمركز هندسياً */}
          <div className="flex-1 w-full max-w-6xl mx-auto flex items-center justify-center p-2 sm:p-4 min-h-0">
            <div 
              className="w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-black relative flex items-center justify-center"
              dir="ltr"
              style={{ direction: 'ltr' }}
            >
              <Player
                key={`cinema-${playerKey}`}
                component={ReactLessonComposition}
                inputProps={{ subtopic, topicTitle }}
                durationInFrames={360}
                compositionWidth={1280}
                compositionHeight={720}
                fps={30}
                style={{
                  width: '100%',
                  height: '100%',
                  aspectRatio: '16/9',
                  margin: '0 auto'
                }}
                controls={true}
                autoPlay={true}
                loop={true}
                showVolumeControls={false}
                clickToPlay={true}
                acknowledgeRemotionLicense={true}
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}


