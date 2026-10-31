// src/components/common/ScrollToTopButton.jsx
// زر الصعود إلى الأعلى الذكي مع حلقة تقدم دائرية تفاعلية واحتفالية إتمام الدرس
import React, { useState, useEffect } from 'react';
import { ArrowUp, Check, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ScrollToTopButton({ scrollProgress = 0, subtopicTitle = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasCelebrated, setHasCelebrated] = useState(false);
  const [showCompletionPill, setShowCompletionPill] = useState(false);

  const clampedProgress = Math.min(Math.max(scrollProgress, 0), 100);

  // إظهار الزر بعد تجاوز 220px من التمرير الرأسي
  useEffect(() => {
    const handleScrollVisibility = () => {
      const scrollPos = window.scrollY || document.documentElement?.scrollTop || 0;
      if (scrollPos >= 220) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setShowCompletionPill(false);
      }
    };

    window.addEventListener('scroll', handleScrollVisibility, { passive: true });
    handleScrollVisibility();
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  // إعادة ضبط حالة الاحتفال عند الانتقال لدرس جديد
  useEffect(() => {
    setHasCelebrated(false);
    setShowCompletionPill(false);
  }, [subtopicTitle]);

  // تأثير تفاعلي عند الوصول لآخر جزء في الصفحة (98% فما فوق)
  useEffect(() => {
    if (clampedProgress >= 98 && !hasCelebrated) {
      setHasCelebrated(true);
      setShowCompletionPill(true);

      // إطلاق مفرقعات احتفالية ناعمة بألوان الثيم (Emerald / Teal / Cyan / Amber)
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { x: 0.12, y: 0.88 },
          colors: ['#10b981', '#14b8a6', '#06b6d4', '#f59e0b', '#8b5cf6']
        });
      } catch {
        // Fallback for non-browser or test environments
      }

      // إخفاء كبسولة الإشعار بعد 5 ثوانٍ تلقائياً
      const timer = setTimeout(() => {
        setShowCompletionPill(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [clampedProgress, hasCelebrated]);

  // التمرير السلس إلى أعلى الصفحة
  const scrollToTop = () => {
    if (typeof window !== 'undefined' && window.scrollTo) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // أبعاد حلقة التقدم الدائرية (SVG Progress Ring)
  const size = 52; // القطر بالبكسل
  const strokeWidth = 3.5;
  const radius = (size - strokeWidth * 2) / 2; // 22.5px
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (clampedProgress / 100) * circumference;

  const isCompleted = clampedProgress >= 98;

  return (
    <div 
      className={`fixed bottom-6 left-6 z-40 flex items-center gap-3 transition-all duration-300 select-none ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      dir="rtl"
    >
      {/* كبسولة الاحتفال التفاعلية عند الوصول لآخر الدرس */}
      {showCompletionPill && (
        <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-950/90 to-slate-900/95 border border-emerald-500/50 text-emerald-200 text-xs px-3.5 py-2 rounded-2xl shadow-2xl backdrop-blur-md animate-slideInUp">
          <PartyPopper className="w-4 h-4 text-emerald-400 animate-bounce shrink-0" />
          <span className="font-bold">أحسنت! أتممت قراءة كامل محتوى الدرس 100%</span>
          <button 
            onClick={() => setShowCompletionPill(false)}
            className="text-emerald-400/70 hover:text-emerald-300 mr-1 text-[11px] cursor-pointer"
            title="إغلاق الإشعار"
          >
            ✕
          </button>
        </div>
      )}

      {/* الزر الرئيسي مع الحلقة الدائرية */}
      <div className="relative group">
        
        {/* التلميح العائم عند التحويم */}
        <div 
          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-xl bg-slate-950/95 text-slate-200 border border-slate-800 text-[11px] font-sans font-bold shadow-xl whitespace-nowrap pointer-events-none transition-all duration-200 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
          }`}
        >
          {isCompleted ? "اكتمل الدرس 100% • صعود للأعلى" : `قراءة: ${clampedProgress}% • صعود للأعلى`}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950"></div>
        </div>

        {/* زر الصعود المدمج داخل دائرة الـ SVG */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative w-[52px] h-[52px] rounded-full bg-slate-900/90 hover:bg-slate-850 backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xl ${
            isCompleted 
              ? 'border-2 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.45)] text-emerald-300' 
              : 'border border-slate-700/80 hover:border-emerald-400 text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.35)]'
          }`}
          title="العودة إلى أعلى الصفحة بسهولة"
          aria-label="العودة لأعلى الصفحة"
        >
          {/* حلقة تقدم القراءة الدائرية SVG */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox={`0 0 ${size} ${size}`}
          >
            {/* المسار الخلفي الرمادي الخافت */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="rgba(51, 65, 85, 0.4)"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* المسار الفعلي المتدرج وفق تقدم القراءة */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={isCompleted ? "#10b981" : "#14b8a6"}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-150"
            />
          </svg>

          {/* الأيقونة المركزية مع تأثير التحويم والنسبة المئوية */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {isHovered ? (
              <span className="font-mono font-extrabold text-[10px] text-emerald-300 tracking-tighter">
                {clampedProgress}%
              </span>
            ) : isCompleted ? (
              <Check className="w-5 h-5 text-emerald-400 animate-pulse" />
            ) : (
              <ArrowUp className="w-5 h-5 text-emerald-400 group-hover:-translate-y-0.5 transition-transform duration-200" />
            )}
          </div>
        </button>

      </div>
    </div>
  );
}
