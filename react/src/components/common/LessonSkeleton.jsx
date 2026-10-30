// src/components/common/LessonSkeleton.jsx
// شاشة هيكلية متحركة (Skeleton Loader) أثناء التنقل السلس بين الدروس والمواضيع
import React from 'react';

export default function LessonSkeleton() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-fadeIn select-none" dir="rtl">
      {/* 1. ترويسة الدرس الهيكلية */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
          <div className="space-y-3 w-full sm:w-2/3">
            <div className="flex items-center gap-2">
              <div className="h-5 w-20 rounded-full skeleton-shimmer"></div>
              <div className="h-4 w-32 rounded-md skeleton-shimmer"></div>
            </div>
            <div className="h-8 w-3/4 rounded-xl skeleton-shimmer"></div>
          </div>
          <div className="h-10 w-32 rounded-xl skeleton-shimmer"></div>
        </div>

        {/* 1. هيكل التعريف */}
        <div className="space-y-2.5">
          <div className="h-4 w-36 rounded skeleton-shimmer"></div>
          <div className="h-4 w-full rounded skeleton-shimmer"></div>
          <div className="h-4 w-5/6 rounded skeleton-shimmer"></div>
        </div>

        {/* 2. هيكل التشبيه */}
        <div className="bg-slate-950/50 rounded-2xl p-5 border-r-4 border-slate-700 space-y-2.5">
          <div className="h-4 w-44 rounded skeleton-shimmer"></div>
          <div className="h-3.5 w-full rounded skeleton-shimmer"></div>
          <div className="h-3.5 w-4/5 rounded skeleton-shimmer"></div>
        </div>

        {/* 3. هيكل لماذا نحتاجه */}
        <div className="space-y-2">
          <div className="h-4 w-40 rounded skeleton-shimmer"></div>
          <div className="h-3.5 w-full rounded skeleton-shimmer"></div>
        </div>
      </div>

      {/* 4. هيكل المصطلحات */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="h-4 w-48 rounded skeleton-shimmer"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="h-16 rounded-xl skeleton-shimmer"></div>
          <div className="h-16 rounded-xl skeleton-shimmer"></div>
        </div>
      </div>

      {/* 5. هيكل الصيغة العامة */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
        <div className="h-4 w-40 rounded skeleton-shimmer"></div>
        <div className="h-20 rounded-xl skeleton-shimmer"></div>
      </div>

      {/* 6. هيكل صندوق الكود البرمجي */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl space-y-3">
        <div className="h-10 bg-slate-850 skeleton-shimmer"></div>
        <div className="p-4 space-y-2">
          <div className="h-4 w-5/6 rounded skeleton-shimmer"></div>
          <div className="h-4 w-2/3 rounded skeleton-shimmer"></div>
          <div className="h-4 w-3/4 rounded skeleton-shimmer"></div>
          <div className="h-4 w-1/2 rounded skeleton-shimmer"></div>
        </div>
      </div>

      {/* 7. هيكل بطاقة الإنفوجرافيك */}
      <div className="h-48 rounded-3xl skeleton-shimmer"></div>
    </div>
  );
}

