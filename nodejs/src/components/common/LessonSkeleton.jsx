// src/components/common/LessonSkeleton.jsx
import React from 'react';

export default function LessonSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6 animate-pulse" dir="rtl">
      {/* رأس الصفحة والهيدر */}
      <div className="space-y-3">
        <div className="h-6 w-32 bg-slate-800 rounded-full"></div>
        <div className="h-10 w-3/4 bg-slate-800 rounded-xl"></div>
        <div className="h-4 w-1/2 bg-slate-800/60 rounded-md"></div>
      </div>

      {/* بطاقة التعريف */}
      <div className="h-28 bg-slate-900 border border-slate-800 rounded-2xl p-6"></div>

      {/* بطاقة التشبيه */}
      <div className="h-24 bg-slate-900 border border-slate-800 rounded-2xl p-6"></div>

      {/* بطاقة الإنفوجرافيك */}
      <div className="h-64 bg-slate-900 border border-slate-800 rounded-2xl p-6"></div>

      {/* صندوق الأكواد */}
      <div className="h-48 bg-slate-900 border border-slate-800 rounded-2xl p-6"></div>
    </div>
  );
}
