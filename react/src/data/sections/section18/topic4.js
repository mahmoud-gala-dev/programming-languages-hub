// src/data/sections/section18/topic4.js

export const topic4 = {
  id: "18.4",
  title: "تحسين عرض البيانات الكبيرة (List Virtualization & Infinite Scrolling)",
  description: "المرجع الشامل للتعامل مع القوائم الضخمة والجداول العملاقة؛ تقنيات التمثيل الافتراضي للقوائم عبر TanStack Virtual، التمرير اللانهائي (Infinite Scroll)، ترقيم الصفحات، كبح تضخم عدد عناصر الـ DOM، ومنع تسريبات الذاكرة في التطبيقات كثيفة البيانات.",
  subtopics: [
    {
      id: "18.4.a",
      title: "مفهوم Virtualization",
      englishTerm: "Virtualization & Windowing Concept (فيرتشوالايزيشن)",
      description: "تقنية برمجية ذكية لعرض القوائم التي تحتوي على آلاف أو ملايين العناصر، تقوم بحساب العناصر المرئية حالياً فقط داخل نافذة العرض للمستخدم (Viewport) ورسمها في الـ DOM، مع إزالة أو عدم رسم العناصر التي تقع خارج الشاشة، واستخدام إزاحة (Transform / Absolute Positioning) للحفاظ على شريط التمرير بالحجم الطبيعي.",
      analogy: "يشبه شباك التذاكر في محطة القطار؛ يوجد في الطابور 10,000 مسافر، لكن الموظف لا يرى ويتحدث إلا مع الـ 3 مسافرين الواقفين أمام النافذة مباشرة، ولا يحتاج لرؤية باقي الـ 10,000 في نفس اللحظة.",
      whyItMatters: "محاولة رسم 10,000 عنصر HTML في صفحة واحدة يؤدي إلى استهلاك مئات الميجابايتات من الذاكرة (RAM)، وتجمد المتصفح، وتعطل التمرير بالكامل. تقنية Virtualization تجعل تصفح 100,000 عنصر خفيفاً وسلساً تماماً مثل تصفح 10 عناصر فقط.",
      syntax: "// المبدأ الرياضي:\nconst startIndex = Math.floor(scrollTop / itemHeight);\nconst visibleCount = Math.ceil(viewportHeight / itemHeight);\nconst visibleItems = items.slice(startIndex, startIndex + visibleCount);",
      simpleExample: `// استيراد React مع نموذج رياضي مبسط لتوضيح فكرة Windowing
import React, { useState } from 'react';

export default function PrimitiveVirtualList({ items, itemHeight = 40, windowHeight = 200 }) {
  // حالة لمتابعة موضع التمرير
  const [scrollTop, setScrollTop] = useState(0);

  // حساب الارتفاع الإجمالي الكلي للنافذة الوهمية
  const totalHeight = items.length * itemHeight;
  // حساب مؤشر أول عنصر مرئي
  const startIndex = Math.floor(scrollTop / itemHeight);
  // عدد العناصر التي تسعها الشاشة
  const visibleCount = Math.ceil(windowHeight / itemHeight);
  // استخراج العناصر المرئية فقط
  const visibleItems = items.slice(startIndex, startIndex + visibleCount + 1);

  return (
    <div 
      onScroll={e => setScrollTop(e.currentTarget.scrollTop)}
      style={{ height: windowHeight, overflowY: 'auto', position: 'relative' }}
      className="border border-slate-700 bg-slate-900 rounded text-white"
    >
      {/* عنصر وهمي فارغ بارتفاع القائمة الكاملة لخلق شريط تمرير طبيعي */}
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map((item, idx) => (
          <div 
            key={startIndex + idx}
            style={{ 
              position: 'absolute', 
              top: (startIndex + idx) * itemHeight, 
              height: itemHeight,
              width: '100%' 
            }}
            className="p-2 border-b border-slate-800 text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}`,
      advancedExample: [
        "// محرك Virtualization مخصص فائق الأداء مع نطاق أمان علوي وسفلي (Overscan Buffer)",
        "import React, { useState, useRef, useEffect, useMemo } from 'react';",
        "",
        "export function AdvancedWindowList({ items, itemHeight = 50, containerHeight = 350, overscan = 3 }) {",
        "  const [scrollTop, setScrollTop] = useState(0);",
        "  const containerRef = useRef(null);",
        "",
        "  // حساب العناصر المرئية مع إضافة عناصر إضافية في الأعلى والأسفل لمنع وميض الفراغ أثناء التمرير السريع",
        "  const { visibleRange, totalHeight } = useMemo(() => {",
        "    const total = items.length * itemHeight;",
        "    const count = Math.ceil(containerHeight / itemHeight);",
        "    ",
        "    // حساب بداية ونهاية النطاق مع الـ Buffer",
        "    const start = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);",
        "    const end = Math.min(items.length, Math.floor((scrollTop + containerHeight) / itemHeight) + overscan);",
        "    ",
        "    return { visibleRange: { start, end }, totalHeight: total };",
        "  }, [items.length, itemHeight, containerHeight, scrollTop, overscan]);",
        "",
        "  const visibleItems = items.slice(visibleRange.start, visibleRange.end);",
        "",
        "  return (",
        "    <div",
        "      ref={containerRef}",
        "      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}",
        "      style={{ height: containerHeight }}",
        "      className='relative overflow-y-auto border border-slate-800 rounded-xl bg-slate-950 text-slate-100 shadow-inner'",
        "    >",
        "      {/* الصندوق الوهمي بارتفاع القائمة الكاملة */}",
        "      <div style={{ height: totalHeight, width: '100%', position: 'relative' }}>",
        "        {visibleItems.map((item, index) => {",
        "          const realIndex = visibleRange.start + index;",
        "          return (",
        "            <div",
        "              key={realIndex}",
        "              style={{",
        "                position: 'absolute',",
        "                top: realIndex * itemHeight,",
        "                height: itemHeight,",
        "                left: 0,",
        "                right: 0",
        "              }}",
        "              className='px-4 flex items-center justify-between border-b border-slate-900 hover:bg-slate-900/50 transition-colors'",
        "            >",
        "              <span className='font-mono text-xs text-sky-400'>#{realIndex + 1}</span>",
        "              <span className='text-sm text-slate-200'>{item.title}</span>",
        "              <span className='text-xs text-emerald-400 font-bold'>{item.value} ر.س</span>",
        "            </div>",
        "          );",
        "        })}",
        "      </div>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "حتى لو احتوت المصفوفة على 500,000 عنصر، فإن الـ DOM لن يحتوي أبداً على أكثر من 15 عنصراً في أي لحظة، وتظل حركة التمرير بسرعة 60 إطاراً في الثانية وثابتة دون أي استهلاك للذاكرة.",
      commonMistakes: "محاولة تطبيق Virtualization بدون تحديد ارتفاع ثابت أو قابل للحساب لعناصر القائمة، مما يجعل المتصفح غير قادر على حساب شريط التمرير بدقة مسبقة.",
      bestPractices: "استخدم دائماً منطقة عازلة (Overscan Buffer) تتراوح بين 3 إلى 5 عناصر فوق وتحت الشاشة؛ لكي لا يرى المستخدم أي وميض فارغ أبيض إذا قام بتمرير العجلة بسرعة فائقة.",
      visualDiagram: "Virtualization Window Concept:\n[Out of View (Above) - NOT IN DOM]\n┌────────────────────────────────────────┐ ◄ scrollTop\n│ Item #42 (Visible in DOM)              │\n│ Item #43 (Visible in DOM)              │ ◄ Viewport Height (~300px)\n│ Item #44 (Visible in DOM)              │\n└────────────────────────────────────────┘ ◄ scrollTop + Height\n[Out of View (Below) - NOT IN DOM]"
    },
    {
      id: "18.4.b",
      title: "استخدام TanStack Virtual",
      englishTerm: "TanStack Virtual Library (@tanstack/react-virtual) (تان-ستاك فيرتشوال)",
      description: "المكتبة المعيارية والحديثة رقم 1 في منظومة React (والتي كانت تُعرف سابقاً باسم react-virtual) لتطبيق الـ Windowing على القوائم والجداول والشبكات الشبكية (Grids). تتميز بالدعم التلقائي للأحجام الديناميكية (Dynamic Heights) ودعم الوضعين الرأسي والأفقي ومعدل استهلاك شبه معدوم للحجم (Headless & Zero-dependency).",
      analogy: "يشبه مهندس الديكور الخارق الذي يقيس أبعاد كل قطعة أثاث بالليزر في ثوانٍ، ويعرف بالضبط متى يدخلها للغرفة ومتى يخرجها دون أن يُسقط أي قطعة على الأرض.",
      whyItMatters: "تتعامل بكفاءة خارقة مع النصوص متغيرة الأطوال والصور التي لا يُعرف ارتفاعها مسبقاً، وتوفر واجهة برمجية معتمدة على الخطافات (useVirtualizer) سهلة ومريحة للغاية.",
      syntax: "const rowVirtualizer = useVirtualizer({\n  count: 10000,\n  getScrollElement: () => parentRef.current,\n  estimateSize: () => 50,\n});",
      simpleExample: `// استيراد خطاف useVirtualizer من مكتبة TanStack Virtual الرسمية
import React, { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

export default function TanStackBasicList({ count = 10000 }) {
  // مرجع لعنصر الحاوية القابل للتمرير
  const parentRef = useRef(null);

  // إعداد كائن الـ Virtualizer
  const rowVirtualizer = useVirtualizer({
    count, // إجمالي عدد العناصر
    getScrollElement: () => parentRef.current, // إرجاع عنصر التمرير
    estimateSize: () => 45, // الارتفاع التقريبي لكل عنصر بالبكسل
  });

  return (
    <div
      ref={parentRef}
      style={{ height: '300px', overflowY: 'auto' }}
      className="border border-slate-700 bg-slate-900 rounded p-2 text-white"
    >
      {/* الصندوق الكلي بارتفاع محسوب تلقائياً */}
      <div style={{ height: rowVirtualizer.getTotalSize() + 'px', width: '100%', position: 'relative' }}>
        {rowVirtualizer.getVirtualItems().map(virtualRow => (
          <div
            key={virtualRow.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: virtualRow.size + 'px',
              transform: 'translateY(' + virtualRow.start + 'px)'
            }}
            className="p-2 border-b border-slate-800 text-sm flex items-center"
          >
            العنصر الافتراضي رقم: {virtualRow.index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}`,
      advancedExample: [
        "// قائمة ديناميكية ذكية مع TanStack Virtual تقيس الارتفاع الحقيقي المتغير للمحتوى تلقائياً (Dynamic Element Measurement)",
        "import React, { useRef } from 'react';",
        "import { useVirtualizer } from '@tanstack/react-virtual';",
        "",
        "export function DynamicHeightVirtualFeed({ posts }) {",
        "  const parentRef = useRef(null);",
        "",
        "  // ضبط الـ Virtualizer مع قياس العناصر الديناميكية تلقائياً",
        "  const virtualizer = useVirtualizer({",
        "    count: posts.length,",
        "    getScrollElement: () => parentRef.current,",
        "    estimateSize: () => 100, // تقدير أولي",
        "    overscan: 4 // عدد العناصر الاحتياطية",
        "  });",
        "",
        "  return (",
        "    <div",
        "      ref={parentRef}",
        "      className='h-96 overflow-y-auto border border-slate-800 rounded-xl bg-slate-950 p-4 text-slate-100 shadow-2xl'",
        "    >",
        "      <div",
        "        style={{",
        "          height: virtualizer.getTotalSize() + 'px',",
        "          width: '100%',",
        "          position: 'relative'",
        "        }}",
        "      >",
        "        {virtualizer.getVirtualItems().map((item) => {",
        "          const post = posts[item.index];",
        "          return (",
        "            <div",
        "              key={item.key}",
        "              // خاصية ref للقياس التلقائي التي توفرها المكتبة",
        "              ref={virtualizer.measureElement}",
        "              data-index={item.index}",
        "              style={{",
        "                position: 'absolute',",
        "                top: 0,",
        "                left: 0,",
        "                width: '100%',",
        "                transform: 'translateY(' + item.start + 'px)'",
        "              }}",
        "              className='pb-3'",
        "            >",
        "              <div className='p-4 bg-slate-900 border border-slate-800/80 rounded-lg space-y-2'>",
        "                <div className='flex justify-between items-center text-xs text-sky-400'>",
        "                  <span className='font-bold'>{post.author}</span>",
        "                  <span>#{item.index + 1}</span>",
        "                </div>",
        "                {/* نص متغير الطول قد يشغل سطراً أو 10 أسطر، ستقيسه المكتبة بدقة فورية */}",
        "                <p className='text-sm text-slate-300 leading-relaxed'>{post.content}</p>",
        "              </div>",
        "            </div>",
        "          );",
        "        })}",
        "      </div>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "يقوم خطاف useVirtualizer بحساب إزاحة العناصر وقياس الارتفاع الحقيقي لكل بطاقة بعد رسمها، وتحديث إجمالي الارتفاع بسلاسة مذهلة دون أي وميض.",
      commonMistakes: "استخدام خاصية `top: virtualRow.start + 'px'` بدلاً من خاصية `transform: translateY(...)`؛ التحريك عبر transform يتم في طبقة كارت الشاشة (GPU Compositor Layer) مما يجعله فائق السلاسة، بينما التغيير في top يُجبر المتصفح على إعادة التخطيط (Layout Reflow).",
      bestPractices: "مرر دالة `ref={virtualizer.measureElement}` وخاصية `data-index={virtualItem.index}` في العنصر الداخلي عندما تكون أطوال النصوص غير متطابقة لتمكين القياس التلقائي فائق الدقة.",
      visualDiagram: "TanStack Virtual Architecture:\nuseVirtualizer Hook ──► Observes parentRef scroll event\n                    ├── Computes current scroll offset\n                    ├── Identifies range: [startIndex ... endIndex]\n                    └── Returns virtualItems with precise transform coordinates"
    },
    {
      id: "18.4.c",
      title: "عرض القوائم الطويلة بكفاءة",
      englishTerm: "Efficient Long List Rendering (إفيشنت لونغ ليستس)",
      description: "الممارسات المتقدمة المتبعة عند بناء وعرض القوائم الطويلة في React؛ وتشمل دمج الـ Virtualization مع خفة المكونات، وتجنب استخدام معالجات الأحداث المفرطة لكل عنصر عبر تفويض الأحداث (Event Delegation)، واستخدام مفاتيح فريدة ومستقرة، وتجنب الرندرة غير المرئية.",
      analogy: "يشبه شريط الأخبار العاجلة في القنوات الإخبارية؛ الأخبار تمر بسلاسة وتختفي وراء الشاشة ولا تبقى مكدسة للأبد في الاستوديو.",
      whyItMatters: "يحمي تجربة المستخدم من البطء الشديد عند تصفح سجلات الرسائل، أو جهات الاتصال، أو الكتالوجات المليئة بالمنتجات.",
      syntax: "// الاعتماد على Event Delegation عند النقر على عناصر القائمة:\n<div onClick={(e) => {\n  const id = e.target.closest('[data-id]')?.dataset.id;\n}}>",
      simpleExample: `// استيراد React مع تطبيق نمط Event Delegation لتخفيف مئات الدوال
import React from 'react';

export default function DelegatedList({ items }) {
  // معالج حدث موحد في الحاوية الأب بدلاً من إنشاء دالة لكل عنصر
  function handleContainerClick(e) {
    const itemElement = e.target.closest('li[data-id]');
    if (itemElement) {
      const itemId = itemElement.getAttribute('data-id');
      console.log('تم النقر على العنصر:', itemId);
    }
  }

  return (
    <ul 
      onClick={handleContainerClick}
      className="p-3 bg-slate-900 border border-slate-800 rounded-lg space-y-1 text-white"
    >
      {items.map(item => (
        <li 
          key={item.id} 
          data-id={item.id}
          className="p-2 bg-slate-800 hover:bg-slate-700 rounded cursor-pointer text-sm flex justify-between"
        >
          <span>{item.name}</span>
          <span className="text-xs text-sky-400">انقر للتفاصيل</span>
        </li>
      ))}
    </ul>
  );
}`,
      advancedExample: [
        "// بنية قائمة متقدمة تجمع بين الـ Memoization والذاكرة المؤقتة للصور وتفويض الأحداث",
        "import React, { memo, useCallback } from 'react';",
        "",
        "// بطاقة العنصر مغلفة بـ memo ومصممة بأبعاد ثابتة",
        "const LightweightRow = memo(function LightweightRow({ id, label, date, category }) {",
        "  return (",
        "    <div ",
        "      data-id={id}",
        "      className='h-12 flex items-center justify-between px-4 border-b border-slate-800 hover:bg-slate-800/40 text-slate-200 select-none cursor-pointer'",
        "    >",
        "      <div className='flex items-center gap-3'>",
        "        <span className='w-2 h-2 rounded-full bg-emerald-500'></span>",
        "        <span className='text-sm font-medium'>{label}</span>",
        "      </div>",
        "      <div className='flex items-center gap-4 text-xs text-slate-400'>",
        "        <span>{category}</span>",
        "        <span>{date}</span>",
        "      </div>",
        "    </div>",
        "  );",
        "});",
        "",
        "export function HighCapacityListContainer({ dataset, onItemOpen }) {",
        "  // تفويض الحدث عند مستوى الحاوية",
        "  const handleClick = useCallback((e) => {",
        "    const row = e.target.closest('[data-id]');",
        "    if (row) {",
        "      const id = row.getAttribute('data-id');",
        "      onItemOpen(id);",
        "    }",
        "  }, [onItemOpen]);",
        "",
        "  return (",
        "    <div ",
        "      onClick={handleClick}",
        "      className='bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-xl'",
        "    >",
        "      <div className='p-3 bg-slate-900 border-b border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider flex justify-between'>",
        "        <span>السجل</span>",
        "        <span>المعلومات</span>",
        "      </div>",
        "      <div className='max-h-80 overflow-y-auto'>",
        "        {dataset.map(item => (",
        "          <LightweightRow",
        "            key={item.id}",
        "            id={item.id}",
        "            label={item.label}",
        "            date={item.date}",
        "            category={item.category}",
        "          />",
        "        ))}",
        "      </div>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "تعمل القائمة بكفاءة عالية وبدون إنشاء مئات مستمعي الأحداث في الذاكرة، ويتم التقاط النقر بدقة وسرعة.",
      commonMistakes: "استخدام فهرس المصفوفة index كمفتاح key (key={index}) في القوائم التي تدعم الحذف أو الفرز؛ هذا يُجبر React على إعادة تصيير عناصر الـ DOM بالكامل بدلاً من نقلها.",
      bestPractices: "استخدم دائماً معرفاً فريداً ومستقراً قادماً من قاعدة البيانات (مثل id أو uuid) كمفتاح key، واستخدم Event Delegation عند التعامل مع القوائم الضخمة.",
      visualDiagram: "Event Delegation in Long Lists:\n[Container: Single onClick Listener]\n  ▲\n  └── Click Events Bubble Up from any of the 1,000 <li> elements\n      └── Extracts data-id with event.target.closest()"
    },
    {
      id: "18.4.d",
      title: "عرض الجداول الضخمة",
      englishTerm: "Virtualizing Massive Data Tables (فيرتشوالايزينغ تيبلز)",
      description: "تقنيات تمثيل الجداول المعقدة التي تحتوي على آلاف الصفوف ومئات الأعمدة؛ تطبيق Virtualization في بُعدين (2D Windowing: رأسياً للصفوف وأفقياً للأعمدة)، وتثبيت الأعمدة المهمة (Sticky Columns & Headers)، والتكامل بين TanStack Table و TanStack Virtual.",
      analogy: "يشبه التجول في برنامج Excel؛ يمكنك تمرير ملايين الخلايا والأعمدة، ولكن الشاشة تعرض فقط الخلايا الـ 30 التي تقع في مجال رؤيتك الحالية.",
      whyItMatters: "الجداول هي العمود الفقري لتطبيقات الأعمال، وعرض مئات الصفوف في عناصر <table> أصلية بدون Virtualization يُعتبر المسبب الأول لانهيار لوحات التحكم وذاكرة المتصفح.",
      syntax: "// التكامل بين TanStack Table و TanStack Virtual:\nconst { rows } = table.getRowModel();\nconst rowVirtualizer = useVirtualizer({ count: rows.length, ... });",
      simpleExample: `// استيراد React مع هيكل جدول افتراضي مبسط
import React, { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

export default function VirtualSimpleTable({ data }) {
  const tableContainerRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 38,
    overscan: 5
  });

  return (
    <div 
      ref={tableContainerRef} 
      className="h-64 overflow-auto border border-slate-700 bg-slate-900 rounded text-xs text-white"
    >
      <div style={{ height: rowVirtualizer.getTotalSize() + 'px', position: 'relative' }}>
        {rowVirtualizer.getVirtualItems().map(virtualRow => {
          const row = data[virtualRow.index];
          return (
            <div
              key={virtualRow.key}
              style={{
                position: 'absolute',
                top: 0,
                transform: 'translateY(' + virtualRow.start + 'px)',
                height: virtualRow.size + 'px',
                width: '100%'
              }}
              className="flex items-center border-b border-slate-800 px-3 hover:bg-slate-800"
            >
              <div className="w-16 font-mono text-slate-400">#{row.id}</div>
              <div className="w-40 font-bold">{row.customer}</div>
              <div className="w-28 text-emerald-400">{row.amount} ر.س</div>
              <div className="w-24 text-slate-400">{row.status}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}`,
      advancedExample: [
        "// جدول أعمال افتراضي متطور يدعم الترويسة الثابتة (Sticky Header) والأعمدة الموزونة",
        "import React, { useRef } from 'react';",
        "import { useVirtualizer } from '@tanstack/react-virtual';",
        "",
        "export function EnterpriseDataTable({ records }) {",
        "  const parentRef = useRef(null);",
        "",
        "  const virtualizer = useVirtualizer({",
        "    count: records.length,",
        "    getScrollElement: () => parentRef.current,",
        "    estimateSize: () => 44,",
        "    overscan: 6",
        "  });",
        "",
        "  return (",
        "    <div className='border border-slate-800 rounded-xl overflow-hidden bg-slate-950 shadow-2xl'>",
        "      {/* الترويسة الثابتة التي لا تختفي أثناء التمرير */}",
        "      <div className='grid grid-cols-4 bg-slate-900 border-b border-slate-800 p-3 text-xs font-bold text-sky-400 tracking-wider sticky top-0 z-20'>",
        "        <span>المعرف</span>",
        "        <span>اسم العميل</span>",
        "        <span>قيمة الصفقة</span>",
        "        <span>تاريخ الإنشاء</span>",
        "      </div>",
        "",
        "      {/* منطقة التمرير الافتراضي للصفوف */}",
        "      <div",
        "        ref={parentRef}",
        "        className='h-80 overflow-y-auto relative'",
        "      >",
        "        <div",
        "          style={{",
        "            height: virtualizer.getTotalSize() + 'px',",
        "            width: '100%',",
        "            position: 'relative'",
        "          }}",
        "        >",
        "          {virtualizer.getVirtualItems().map((vRow) => {",
        "            const item = records[vRow.index];",
        "            return (",
        "              <div",
        "                key={vRow.key}",
        "                style={{",
        "                  position: 'absolute',",
        "                  top: 0,",
        "                  left: 0,",
        "                  width: '100%',",
        "                  height: vRow.size + 'px',",
        "                  transform: 'translateY(' + vRow.start + 'px)'",
        "                }}",
        "                className='grid grid-cols-4 items-center px-3 border-b border-slate-900 hover:bg-slate-900/60 text-xs text-slate-200 transition-colors'",
        "              >",
        "                <span className='font-mono text-slate-400'>#{item.code}</span>",
        "                <span className='font-semibold text-white'>{item.client}</span>",
        "                <span className='text-emerald-400 font-bold'>{item.revenue} ر.س</span>",
        "                <span className='text-slate-400'>{item.date}</span>",
        "              </div>",
        "            );",
        "          })}",
        "        </div>",
        "      </div>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "يتم تمرير جدول يحتوي على أكثر من 50,000 سجل تجاري بأقصى سرعة ممكنة وبدون أي وميض أو تأخر مع بقاء الترويسة ثابتة في الأعلى دائماً.",
      commonMistakes: "استخدام وسوم HTML الجدولية الصارمة <table> و <tbody> و <tr> لتطبيق الـ Virtualization؛ لأن وسوم الجدول تعتمد على خوارزميات تخطيط معقدة في المتصفح تصعّب الـ Absolute Positioning. الأفضل هو استخدام <div> مع Grid أو Flexbox.",
      bestPractices: "اعتمد على CSS Grid مع تقسيم أعمدة صريح لتمكين التوافق التام مع نمط التحويل المطلق المستخدم في محركات الـ Virtualization.",
      visualDiagram: "2D Table Virtualization:\nSticky Header: [ Col 1 | Col 2 | Col 3 | Col 4 ] ◄ ALWAYS PINNED\n-------------------------------------------------\nScrollable Window:\n  [Row #200]  ──► (Virtual DOM Mounted)\n  [Row #201]  ──► (Virtual DOM Mounted)\n  [Row #202]  ──► (Virtual DOM Mounted)"
    },
    {
      id: "18.4.e",
      title: "التمرير اللانهائي Infinite Scroll",
      englishTerm: "Infinite Scroll Pattern (إنفينيت سكرول)",
      description: "نمط لتحميل وعرض البيانات تدريجياً؛ حيث يتم جلب دفعة جديدة من البيانات (Batch / Page) من الخادم تلقائياً عندما يقترب المستخدم من نهاية الصفحة أو نهاية منطقة التمرير، باستخدام Intersection Observer API لمراقبة عنصر استشعار (Sentinel Element).",
      analogy: "يشبه قارئ الرواية الممتعة؛ كلما اقترب من قراءة آخر سطر في الصفحة اليمنى، يقلب الورقة تلقائياً ليجد الصفحة التالية دون أن يحتاج لإغلاق الكتاب والبحث عن فصل جديد.",
      whyItMatters: "يوفر تجربة تصفح غامرة ومستمرة (Seamless Browsing) مشابهة لمنصات التواصل الاجتماعي، ويمنع تحميل كل البيانات دفعة واحدة على الخادم وقاعدة البيانات.",
      syntax: "const observer = new IntersectionObserver((entries) => {\n  if (entries[0].isIntersecting && hasMore) fetchNextPage();\n});\nobserver.observe(sentinelRef.current);",
      simpleExample: `// استيراد React مع خطاف التأثير ومرجع الاستشعار
import React, { useState, useEffect, useRef } from 'react';

export default function BasicInfiniteScroll() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);
  // مرجع لعنصر الحارس في نهاية القائمة
  const sentinelRef = useRef(null);

  useEffect(() => {
    // إنشاء مراقب التقاطع
    const observer = new IntersectionObserver(entries => {
      // إذا أصبح عنصر الحارس مرئياً في الشاشة ولم نكن نجلب بيانات حالياً
      if (entries[0].isIntersecting && !loading) {
        setLoading(true);
        // محاكاة جلب 5 عناصر إضافية من الخادم
        setTimeout(() => {
          setItems(prev => [...prev, prev.length + 1, prev.length + 2, prev.length + 3]);
          setLoading(false);
        }, 800);
      }
    }, { threshold: 1.0 });

    if (sentinelRef.current) observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="p-4 bg-slate-900 text-white rounded-lg max-h-60 overflow-y-auto">
      {items.map(num => (
        <div key={num} className="p-3 bg-slate-800 my-1 rounded text-sm">عنصر رقم: {num}</div>
      ))}
      {/* عنصر الحارس الذي نراقبه */}
      <div ref={sentinelRef} className="py-2 text-center text-xs text-sky-400">
        {loading ? 'جاري جلب المزيد من العناصر...' : 'اسحب لأسفل للتحميل'}
      </div>
    </div>
  );
}`,
      advancedExample: [
        "// دمج TanStack Query (useInfiniteQuery) مع Intersection Observer لبناء تمرير لانهائي متين ضد الأخطاء",
        "import React, { useEffect, useRef } from 'react';",
        "",
        "// خطاف مخصص لإدارة استشعار التمرير اللانهائي",
        "export function useIntersectionSentinel(onIntersect, enabled = true) {",
        "  const sentinelRef = useRef(null);",
        "",
        "  useEffect(() => {",
        "    if (!enabled) return;",
        "    ",
        "    const observer = new IntersectionObserver(",
        "      (entries) => {",
        "        if (entries[0].isIntersecting) {",
        "          onIntersect();",
        "        }",
        "      },",
        "      { rootMargin: '200px' } // استشعار قبل الوصول للنهاية بـ 200px لتحميل مسبق فوري!",
        "    );",
        "",
        "    const el = sentinelRef.current;",
        "    if (el) observer.observe(el);",
        "",
        "    return () => {",
        "      if (el) observer.unobserve(el);",
        "      observer.disconnect();",
        "    };",
        "  }, [onIntersect, enabled]);",
        "",
        "  return sentinelRef;",
        "}",
        "",
        "export function InfiniteFeedView({ pages, isFetchingNextPage, hasNextPage, fetchNextPage }) {",
        "  // تشغيل الجلب التلقائي عبر الخطاف الذكي",
        "  const sentinelRef = useIntersectionSentinel(() => {",
        "    if (hasNextPage && !isFetchingNextPage) {",
        "      fetchNextPage();",
        "    }",
        "  }, hasNextPage && !isFetchingNextPage);",
        "",
        "  return (",
        "    <div className='p-6 bg-slate-950 text-slate-100 rounded-xl space-y-3'>",
        "      <h3 className='font-bold text-lg text-white'>التغذية الإخبارية اللانهائية</h3>",
        "      <div className='space-y-2'>",
        "        {pages.map((page, pIdx) => (",
        "          <React.Fragment key={pIdx}>",
        "            {page.items.map(item => (",
        "              <div key={item.id} className='p-4 bg-slate-900 border border-slate-800 rounded-lg'>",
        "                <h4 className='font-semibold text-sky-400'>{item.title}</h4>",
        "                <p className='text-xs text-slate-400 mt-1'>{item.snippet}</p>",
        "              </div>",
        "            ))}",
        "          </React.Fragment>",
        "        ))}",
        "      </div>",
        "",
        "      {/* عنصر الاستشعار مع هامش مسبق */}",
        "      <div ref={sentinelRef} className='py-4 text-center'>",
        "        {isFetchingNextPage ? (",
        "          <span className='text-xs text-emerald-400 font-mono animate-pulse'>جاري جلب الصفحة التالية...</span>",
        "        ) : hasNextPage ? (",
        "          <span className='text-xs text-slate-500'>مرر لجلب المزيد</span>",
        "        ) : (",
        "          <span className='text-xs text-slate-600'>وصلت إلى نهاية السجل بالكامل.</span>",
        "        )}",
        "      </div>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "يقوم التطبيق بجلب الدفعة التالية تلقائياً قبل أن يصل المستخدم إلى الحافة بـ 200px، مما يجعل التحميل يبدو فورياً وخالياً من أي توقف.",
      commonMistakes: "الاستماع إلى حدث التمرير التقليدي window.addEventListener('scroll', ...) بدون Throttle أو Debounce؛ هذا يُنفذ مئات العمليات الحسابية في كل ثانية تمرير، مما يؤدي إلى تقطيع فادح. الحل الأمثل دائماً هو IntersectionObserver.",
      bestPractices: "حدد rootMargin: '200px' في خيارات IntersectionObserver لجلب البيانات مسبقاً قبل وصول المستخدم الفعلي لنهاية القائمة، مما يعطي تجربة تصفح بدون أي شاشات انتظار.",
      visualDiagram: "Infinite Scroll Trigger Flow:\nScroll Viewport ──► Moves Downwards\n                      │\n                      ▼ (Reaches 200px above sentinel)\nIntersectionObserver: isIntersecting === true ──► Trigger fetchNextPage()\n                      │\n                      ▼\nAppends New Batch to State ──► Sentinel Pushed Further Down"
    },
    {
      id: "18.4.f",
      title: "تقسيم البيانات إلى صفحات Pagination",
      englishTerm: "Client & Server Pagination (باجينيشن)",
      description: "تقنية تنظيمية لعرض البيانات عبر تقسيمها إلى صفحات مرقمة منفصلة (مثل: صفحة 1، 2، 3) بدلاً من عرضها في تدفق واحد مستمر. يُحدد عدد العناصر في كل صفحة (Page Size) ويتم طلب أو تصفية العناصر الخاصة بالصفحة المحددة فقط.",
      analogy: "يشبه الفهرس والصفحات في الكتاب المطبوع؛ تقرأ الصفحة 45 ثم تنتقل إلى 46، وتستطيع القفز مباشرة إلى الصفحة 100 بنقرة واحدة دون الحاجة لتمرير كل الصفحات السابقة.",
      whyItMatters: "ممتاز للتطبيقات الإدارية، ولوحات البحث، والمعاملات المالية؛ حيث يحتاج المستخدم للوصول إلى عنصر محدد ومعرفة العدد الإجمالي، ومشاركة رابط الصفحة مع زملائه (?page=3).",
      syntax: "const paginatedItems = items.slice((page - 1) * pageSize, page * pageSize);",
      simpleExample: `// استيراد useState
import React, { useState } from 'react';

export default function SimplePagination({ totalItems = 100, pageSize = 10 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div className="p-4 bg-slate-900 text-white rounded-lg space-y-3">
      <p className="text-sm">أنت في الصفحة: {currentPage} من أصل {totalPages}</p>
      
      {/* أزرار التحكم في التنقل بين الصفحات */}
      <div className="flex gap-2">
        <button 
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-slate-800 disabled:opacity-40 rounded text-xs"
        >
          السابق
        </button>
        <button 
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-slate-800 disabled:opacity-40 rounded text-xs"
        >
          التالي
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: [
        "// مكوّن ترقيم صفحات احترافي متزامن مع معلمات الرابط (URL Search Params) مع توليد أزرار الصفحات الذكية",
        "import React from 'react';",
        "",
        "export function SmartPaginationBar({ currentPage, totalPages, onPageChange }) {",
        "  // خوارزمية ذكية لعرض أرقام الصفحات مع علامات الحذف (...) لمنع تزاحم الأزرار",
        "  const getPageNumbers = () => {",
        "    const delta = 2;",
        "    const range = [];",
        "    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {",
        "      range.push(i);",
        "    }",
        "",
        "    if (currentPage - delta > 2) range.unshift('...');",
        "    if (currentPage + delta < totalPages - 1) range.push('...');",
        "",
        "    range.unshift(1);",
        "    if (totalPages > 1) range.push(totalPages);",
        "    return range;",
        "  };",
        "",
        "  const pages = getPageNumbers();",
        "",
        "  return (",
        "    <div className='flex items-center justify-center gap-1.5 p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs'>",
        "      <button",
        "        onClick={() => onPageChange(currentPage - 1)}",
        "        disabled={currentPage === 1}",
        "        className='px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 disabled:opacity-30 hover:bg-slate-800 text-slate-300 font-semibold'",
        "      >",
        "        السابق",
        "      </button>",
        "",
        "      {pages.map((p, idx) => (",
        "        typeof p === 'number' ? (",
        "          <button",
        "            key={idx}",
        "            onClick={() => onPageChange(p)}",
        "            className={'w-8 h-8 rounded-lg font-bold transition-colors ' + (p === currentPage ? 'bg-sky-600 text-white shadow-md' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800')}",
        "          >",
        "            {p}",
        "          </button>",
        "        ) : (",
        "          <span key={idx} className='px-1 text-slate-600 font-bold'>...</span>",
        "        )",
        "      ))}",
        "",
        "      <button",
        "        onClick={() => onPageChange(currentPage + 1)}",
        "        disabled={currentPage === totalPages}",
        "        className='px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 disabled:opacity-30 hover:bg-slate-800 text-slate-300 font-semibold'",
        "      >",
        "        التالي",
        "      </button>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "شريط ترقيم مدمج وأنيق يتيح القفز بين آلاف الصفحات بسهولة مع منع التكدس، وتحديث الرابط لحفظ الموضع.",
      commonMistakes: "تطبيق الترقيم في جانب العميل (Client-side) على 200,000 سجل؛ تنزيل الـ 200,000 سجل من السيرفر عبر JSON يستهلك وقتاً طائلاً، ويجب دائماً تطبيق الترقيم على الخادم وقاعدة البيانات (Server-side Pagination عبر SQL LIMIT / OFFSET أو Cursor).",
      bestPractices: "استخدم Cursor-based Pagination لقواعد البيانات الضخمة بدلاً من Offset-based Pagination؛ لأن Offset يصبح بطيئاً جداً في الصفحات المتقدمة.",
      visualDiagram: "Pagination Methods:\nOffset Pagination: [LIMIT 10 OFFSET 50000] ──► Database scans 50,000 rows (Slow!)\nCursor Pagination: [WHERE id > 50000 LIMIT 10] ──► Direct B-Tree Index Jump (Instant!)"
    },
    {
      id: "18.4.g",
      title: "تحسين DOM Node Count",
      englishTerm: "Optimizing DOM Node Count (أوبتيمايزينغ دوم نودز)",
      description: "تقليل عدد عناصر وعقد الـ HTML الموجودة في الصفحة لتجنب تضخم شجرة الـ DOM (DOM Bloat). تنص معايير أداء Google Lighthouse على ألا يتجاوز إجمالي عدد عقد الصفحة 1400 عقدة، وألا يزيد عمق الشجرة عن 32 مستوى، للحفاظ على سرعة محرك التخطيط والرسم في المتصفح.",
      analogy: "يشبه بناء بيت بدون جدران زائدة لا فائدة منها؛ بدلاً من وضع 5 جدران جبسية متتالية بدون أبواب داخل غرفة واحدة، تترك المساحة مفتوحة وواسعة.",
      whyItMatters: "كل عقدة إضافية في الـ DOM تستهلك ذاكرة في المتصفح، وتضاعف من زمن حساب الأنماط (Style Recalculation) وزمن إعادة التخطيط (Reflow)، وتجعل استجابة الصفحة للحركات بطيئة.",
      syntax: "// خطأ: الإفراط في وسوم div المفرغة (Wrapper Hell)\n<div><div><div><p>نص</p></div></div></div>\n// صواب: استخدام React.Fragment واستغلال CSS الحديث\n<React.Fragment><p>نص</p></React.Fragment>",
      simpleExample: `// استيراد React مع استخدام Fragments لإلغاء الـ Divs الزائدة
import React, { Fragment } from 'react';

// ❌ طريقة سيئة تزيد عدد العقد في الـ DOM بدون فائدة
function BadWrapperHell({ title, desc }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="title-container">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="card-body">
        <div className="text-container">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ✅ طريقة نظيفة ومثالية خالية من العقد الزائدة
export default function OptimizedCleanNodes({ title, desc }) {
  return (
    <article className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-white">
      <h3 className="font-bold text-base">{title}</h3>
      <p className="text-sm text-slate-400 mt-1">{desc}</p>
    </article>
  );
}`,
      advancedExample: [
        "// أداة برمجية لفحص وتنبيه المطور عند تجاوز الحد المسموح لعقد الـ DOM في الصفحة",
        "import React, { useEffect, useState } from 'react';",
        "",
        "export function DomSizeAuditor() {",
        "  const [stats, setStats] = useState({ totalNodes: 0, maxDepth: 0, status: 'ممتاز' });",
        "",
        "  useEffect(() => {",
        "    // قياس إجمالي عدد العقد في الصفحة كاملة",
        "    const totalNodes = document.getElementsByTagName('*').length;",
        "    ",
        "    // خوارزمية لحساب أقصى عمق للشجرة",
        "    function getDepth(node) {",
        "      let depth = 1;",
        "      let child = node.firstElementChild;",
        "      let maxChildDepth = 0;",
        "      while (child) {",
        "        maxChildDepth = Math.max(maxChildDepth, getDepth(child));",
        "        child = child.nextElementSibling;",
        "      }",
        "      return depth + maxChildDepth;",
        "    }",
        "",
        "    const maxDepth = getDepth(document.body);",
        "    const status = totalNodes > 1400 ? 'خطر (تضخم DOM)' : totalNodes > 800 ? 'متوسط' : 'ممتاز';",
        "",
        "    setStats({ totalNodes, maxDepth, status });",
        "    console.log('[DOM Audit] إجمالي العقد:', totalNodes, '| أقصى عمق:', maxDepth);",
        "  }, []);",
        "",
        "  return (",
        "    <div className='p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs space-y-1 text-slate-300'>",
        "      <div className='font-bold text-white'>تقرير شجرة الـ DOM المباشر:</div>",
        "      <div className='flex justify-between'>",
        "        <span>عدد العقد الكلي:</span>",
        "        <span className='font-mono text-sky-400'>{stats.totalNodes} عقدة</span>",
        "      </div>",
        "      <div className='flex justify-between'>",
        "        <span>أقصى عمق تداخل:</span>",
        "        <span className='font-mono text-amber-400'>{stats.maxDepth} مستوى</span>",
        "      </div>",
        "      <div className='flex justify-between'>",
        "        <span>الحالة:</span>",
        "        <span className={'font-bold ' + (stats.status === 'ممتاز' ? 'text-emerald-400' : 'text-rose-400')}>{stats.status}</span>",
        "      </div>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "يقيس بدقة عدد العقد في المتصفح ويعطي تقريراً يساعد على التخلص من الحاويات الفارغة والحفاظ على معايير Lighthouse الخضراء.",
      commonMistakes: "استخدام مكونات مكتبات UI بدون تفكيك؛ بعض مكتبات المكونات الجاهزة تضيف 10 عناصر <div> حول زر بسيط لتطبيق الظلال والحدود، مما يرفع عدد عقد الصفحة بسرعة رهيبة.",
      bestPractices: "استخدم فئات Tailwind الحديثة ووسوم Semantic HTML الأصلية (مثل <article>, <section>, <button>) واستبدل الحاويات الزائدة بـ <>...</> (Fragments).",
      visualDiagram: "DOM Bloat vs Clean Architecture:\nBloated Tree: <div> ──► <div> ──► <div> ──► <span> (4 Nodes for 1 text!)\nClean Tree:   <p className=\"...\"> (1 Node only!) ──► 75% Less Memory!"
    },
    {
      id: "18.4.h",
      title: "تجنب تسريب الذاكرة Memory Leaks",
      englishTerm: "Preventing Memory Leaks in React (ميموري ليكس بريفينشن)",
      description: "تسريب الذاكرة يحدث عندما يحتفظ التطبيق بمراجع لكائنات أو مستمعي أحداث (Event Listeners) أو مؤقتات (Timers مثل setInterval) بعد إزالة المكون من الشاشة (Unmount). بمرور الوقت وتكرار التصفح، تمتلئ ذاكرة المتصفح وتصل إلى حد الانهيار (Crash / Out of Memory).",
      analogy: "يشبه صنبور ماء يقطر نقطة ماء كل دقيقة في خزان مغلق بإحكام؛ في البداية لا تلاحظ شيئاً، ولكن بعد يومين ينفجر الخزان وتغرق الغرفة بالكامل.",
      whyItMatters: "تطبيقات الويب الحديثة (SPAs) تظل مفتوحة في تبويب المستخدم لأيام وأسابيع؛ وجود تسريب للذاكرة يعني أن الصفحة ستصبح أبطأ فأبطأ تدريجياً حتى تنهار وتجبر المستخدم على إغلاقها.",
      syntax: "useEffect(() => {\n  const timer = setInterval(...);\n  return () => clearInterval(timer); // دالة التنظيف الحيوية لمنع التسريب!\n}, []);",
      simpleExample: `// استيراد React مع خطاف التأثير والتنظيف الإلزامي
import React, { useEffect, useState } from 'react';

export default function SafeTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // إنشاء مؤقت يعمل كل ثانية
    const intervalId = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // ⚠️ دالة التنظيف: تضمن حذف المؤقت من الذاكرة فور تفكيك المكون
    return () => {
      clearInterval(intervalId);
      console.log('تم تنظيف المؤقت بنجاح ومنع تسريب الذاكرة!');
    };
  }, []); // مصفوفة فارغة تعني بدء التشغيل عند التركيب فقط

  return <div className="p-3 bg-slate-900 text-white rounded">الثواني: {seconds}</div>;
}`,
      advancedExample: [
        "// منع تسريب الذاكرة عند إلغاء طلبات الشبكة (AbortController) ومستمعي أحداث النوافذ",
        "import React, { useState, useEffect } from 'react';",
        "",
        "export function SafeNetworkUserCard({ userId }) {",
        "  const [userData, setUserData] = useState(null);",
        "  const [error, setError] = useState(null);",
        "",
        "  useEffect(() => {",
        "    // إنشاء جهاز التحكم في إلغاء طلبات الشبكة",
        "    const abortController = new AbortController();",
        "",
        "    async function loadData() {",
        "      try {",
        "        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + userId, {",
        "          signal: abortController.signal // ربط إشارة الإلغاء بالطلب",
        "        });",
        "        if (!res.ok) throw new Error('فشل جلب البيانات');",
        "        const data = await res.json();",
        "        // هذا التحديث لن يحدث إذا تم تفكيك المكون لأن الطلب تم إلغاؤه!",
        "        setUserData(data);",
        "      } catch (err) {",
        "        if (err.name !== 'AbortError') {",
        "          setError(err.message);",
        "        }",
        "      }",
        "    }",
        "",
        "    loadData();",
        "",
        "    // إضافة مستمع حدث للنافذة",
        "    const handleResize = () => console.log('حجم النافذة تغير');",
        "    window.addEventListener('resize', handleResize);",
        "",
        "    // دالة التنظيف الحتمية: إلغاء الطلب وحذف مستمع الحدث",
        "    return () => {",
        "      abortController.abort(); // إلغاء طلب الشبكة المعلق",
        "      window.removeEventListener('resize', handleResize); // إزالة مستمع الحدث",
        "      console.log('✅ تم تحرير كافة الموارد والمستمعين من الذاكرة.');",
        "    };",
        "  }, [userId]);",
        "",
        "  if (error) return <div className='text-rose-400 text-xs'>{error}</div>;",
        "  if (!userData) return <div className='text-slate-400 text-xs animate-pulse'>جاري التحميل...</div>;",
        "",
        "  return (",
        "    <div className='p-4 bg-slate-900 rounded-lg text-white text-sm'>",
        "      <p className='font-bold'>{userData.name}</p>",
        "      <p className='text-xs text-sky-400'>{userData.email}</p>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "إذا غادر المستخدم الصفحة قبل انتهاء الـ Fetch أو أُغلق المودال، يتم إلغاء طلب الـ HTTP فوراً وتحرير مستمع الحدث والذاكرة دون حدوث خطأ 'Can't perform a React state update on an unmounted component'.",
      commonMistakes: "نسيان إرجاع دالة التنظيف (Cleanup function) في useEffect عند استخدام setInterval أو window.addEventListener أو الاشتراك في WebSocket؛ هذا هو المصدر الكلاسيكي لتسريبات الذاكرة في React.",
      bestPractices: "استخدم دوماً أداة Chrome DevTools Memory Panel وافحص لقطات الـ Heap Snapshots للتأكد من عدم وجود كائنات محتجزة (Retained Objects) بعد الانتقال بين الشاشات.",
      visualDiagram: "Memory Leak vs Clean Lifecycle:\nWithout Cleanup: Mount ──► Timer Started ──► Unmount (Timer STILL RUNS in background indefinitely!)\nWith Cleanup:    Mount ──► Timer Started ──► Unmount ──► clearInterval() ──► Memory FREED!"
    }
  ],
  quizzes: [
    {
      id: "q18.4.1",
      question: "ما الفكرة الأساسية لتقنية الـ Virtualization (أو Windowing) في القوائم؟",
      options: [
        "تحويل كود المكون إلى كود بلغة C++ لزيادة سرعته.",
        "رسم العناصر المرئية فقط داخل شاشة العرض (Viewport) في شجرة الـ DOM، مع حساب الارتفاع الإجمالي افتراضياً.",
        "حفظ جميع عناصر القائمة كملف PDF في المتصفح.",
        "تكرار عناصر القائمة مرتين لضمان استقرار العرض."
      ],
      correctAnswer: 1,
      explanation: "تعتمد الـ Virtualization على فكرة عبقرية وبسيطة: لا حاجة لإبقاء 10,000 عقدة HTML في المتصفح بينما المستخدم لا يرى سوى 10 عناصر في نافذة العرض، بل نقوم بتبديل بيانات تلك الـ 10 عناصر بناءً على موضع التمرير."
    },
    {
      id: "q18.4.2",
      question: "لماذا يُفضل استخدام transform: translateY(...) بدلاً من top في تحريك العناصر الافتراضية؟",
      options: [
        "لأن transform يعمل مباشرة على كارت الشاشة (GPU Compositor Layer) دون التسبب في إعادة حساب التخطيط (Layout Reflow).",
        "لأن top غير مدعوم في متصفح كروم.",
        "لأن transform يمنع المستخدم من تحديد النصوص.",
        "لأن خاصية top تزيد من استهلاك البطارية بنسبة 90%."
      ],
      correctAnswer: 0,
      explanation: "تغيير خاصية top يُجبر المتصفح على إعادة حساب أبعاد وتخطيط كل العناصر المجاورة (Reflow)، بينما خاصية transform تتعامل مع طبقة رسم مستقلة عبر معالج الرسوميات (GPU)، مما يضمن حركة بمعدل 60 FPS سلس."
    },
    {
      id: "q18.4.3",
      question: "ما أهم خطوة يجب اتخاذها داخل useEffect عند الاشتراك في حدث خارجي مثل window.addEventListener لمنع تسريب الذاكرة؟",
      options: [
        "استدعاء window.close() فوراً.",
        "إرجاع دالة تنظيف (Cleanup function) تقوم باستدعاء window.removeEventListener.",
        "إيقاف تشغيل JavaScript في المتصفح.",
        "تمرير كائن null بدلاً من اسم الدالة."
      ],
      correctAnswer: 1,
      explanation: "دالة التنظيف التي تُرجعها من useEffect تُنفذ تلقائياً عند إزالة المكون من الشاشة (Unmount)، وحذف مستمع الحدث فيها يحرر المرجع ويسمح لجامع القمامة (Garbage Collector) بتحرير الذاكرة."
    }
  ],
  exercise: {
    title: "تمرين عملي: بناء مراقب تمرير لانهائي ذكي باستخدام IntersectionObserver",
    description: "قم بإنشاء خطاف مخصص useInfiniteScroll يستقبل دالة onLoadMore وقيمة منطقية hasMore، ويقوم بمراقبة عنصر حارس (Sentinel) وتفعيل دالة الجلب عندما يصبح العنصر مرئياً مع تنظيف المراقب عند التفكيك.",
    hints: [
      "أنشئ مرجعاً sentinelRef لعنصر الاستشعار وأرجعه من الخطاف.",
      "استخدم IntersectionObserver داخل useEffect مع شرط entry.isIntersecting.",
      "احرص على استدعاء observer.disconnect() داخل دالة التنظيف."
    ],
    solution: `import { useEffect, useRef } from 'react';

export function useInfiniteScroll(onLoadMore, hasMore, isLoading) {
  const sentinelRef = useRef(null);

  useEffect(() => {
    // لا تقم بالمراقبة إذا لم يكن هناك المزيد من البيانات أو إذا كان الجلب جارياً
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onLoadMore();
      }
    }, { rootMargin: '100px' }); // بدء الجلب قبل الوصول بـ 100px

    const el = sentinelRef.current;
    if (el) observer.observe(el);

    // تنظيف المراقب لمنع تسريب الذاكرة
    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, [onLoadMore, hasMore, isLoading]);

  return sentinelRef;
}`
  },
  infographic: {
    title: "خريطة تحسين البيانات الضخمة والقوائم في React",
    subtitle: "استراتيجيات السيطرة على استهلاك الذاكرة وتسهيل التمرير",
    steps: [
      { step: "1", title: "List Virtualization", desc: "استخدام TanStack Virtual لعرض العناصر المرئية فقط وحصر عقد الـ DOM في نطاق ضيق." },
      { step: "2", title: "2D Table Windowing", desc: "تمثيل الجداول الضخمة عبر CSS Grid مع ترويسة مثبتة وتمرير عمودي وأفقي فائق السرعة." },
      { step: "3", title: "Infinite Scroll & Sentinel", desc: "مراقبة نهاية المحتوى عبر IntersectionObserver وتحميل دفعات البيانات دون تجميد الواجهة." },
      { step: "4", title: "Leak Prevention & Cleanups", desc: "تنظيف المؤقتات والمستمعين وإلغاء طلبات الشبكة عبر AbortController عند تفكيك المكونات." }
    ]
  }
};
