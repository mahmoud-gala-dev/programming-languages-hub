// src/components/common/LessonSkeleton.jsx
import React from 'react';

export default function LessonSkeleton() {
  return (
    <div className="space-y-6 animate-pulse p-4 max-w-5xl mx-auto" dir="rtl">
      {/* رأس الدرس */}
      <div className="bg-[#0b0f24]/60 border border-purple-500/10 rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20" />
          <div className="space-y-2 flex-1">
            <div className="h-6 bg-slate-800 rounded-md w-1/3" />
            <div className="h-4 bg-slate-800/60 rounded-md w-1/2" />
          </div>
        </div>
      </div>

      {/* بطاقة التعريف والتشبيه */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#0b0f24]/50 border border-slate-800/60 rounded-xl p-5 space-y-3">
          <div className="h-4 bg-slate-800 rounded w-1/4" />
          <div className="h-16 bg-slate-800/40 rounded" />
        </div>
        <div className="bg-[#0b0f24]/50 border border-slate-800/60 rounded-xl p-5 space-y-3">
          <div className="h-4 bg-slate-800 rounded w-1/4" />
          <div className="h-16 bg-slate-800/40 rounded" />
        </div>
      </div>

      {/* صندوق الأكواد */}
      <div className="bg-[#080b18] border border-purple-500/15 rounded-2xl p-6 space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-5 bg-slate-800 rounded w-32" />
          <div className="h-8 bg-slate-800 rounded w-20" />
        </div>
        <div className="h-48 bg-slate-900/60 rounded-xl" />
      </div>
    </div>
  );
}
