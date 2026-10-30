// src/data/sections/section20/topic2.js

export const topic2 = {
  id: "20.2",
  title: "إمكانية الوصول في مكونات React (Accessible React Components)",
  description: "الدليل العملي لبناء مكونات React التفاعلية المعقدة وفق أعلى معايير الوصول العالمية؛ بناء نافذة منبثقة (Accessible Modal) بحبس التركيز، وقوائم Dropdowns، وتبويبات Tabs، وإدارة التركيز بعد التنقل، وإشعار قارئات الشاشة لحظياً عبر aria-live، ودعم تقليل الحركة (Reduced Motion)، وفحص المكونات بمكتبة axe-core.",
  subtopics: [
    {
      id: "20.2.a",
      title: "إنشاء Modal قابل للوصول",
      englishTerm: "Accessible Modal Dialog (أكسيسيبل مودال)",
      description: "بناء نافذة منبثقة (Modal Dialog) متوافقة 100% مع معايير WAI-ARIA؛ تتطلب 4 شروط إلزامية: 1) استخدام `role=\"dialog\"` و `aria-modal=\"true\"`، 2) حبس مؤشر التركيز داخل النافذة (Focus Trap) لمنع خروج الـ Tab للصفحة الخلفية، 3) إمكانية الإغلاق بمفتاح `Escape`، 4) إعادة مؤشر التركيز للزر المشغل فور إغلاق النافذة.",
      analogy: "يشبه الدخول إلى غرفة اجتماعات خاصة مغلقة؛ عندما تدخل وتغلق الباب، يتحاور الموجودون داخل الغرفة فقط، ولا يمكن لمن في الصالة الخارجية مقاطعتكم، وعندما تنتهي وتخرج، تعود لنفس مقعدك الأصلي في الصالة.",
      whyItMatters: "النوافذ المنبثقة غير المتاحة هي الكابوس رقم 1 لمستخدمي الكيبورد والمكفوفين؛ إذا لم يُحبس التركيز، سيتنقل المستخدم بزر Tab خلف النافذة دون أن يدري ما الذي يضغط عليه!",
      syntax: "<div role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-title\">\n  <h2 id=\"modal-title\">العنوان</h2>\n</div>",
      simpleExample: `// استيراد React مع خطاف التأثير والمرجع
import React, { useEffect, useRef } from 'react';

export default function SimpleAccessibleModal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // 1. إغلاق النافذة فور الضغط على مفتاح Escape
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    // توجيه التركيز لداخل النافذة عند فتحها
    modalRef.current?.focus();

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        tabIndex={-1}
        className="bg-slate-900 border border-slate-700 p-6 rounded-2xl max-w-md w-full text-white outline-none"
      >
        <h2 id="dialog-title" className="text-lg font-bold mb-3">{title}</h2>
        <div className="mb-4 text-sm text-slate-300">{children}</div>
        <button onClick={onClose} className="px-4 py-2 bg-rose-600 rounded-lg text-xs font-bold">
          إغلاق النافذة
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: [
        "// مكوّن Modal احترافي متكامل مع Focus Trap حقيقي يمنع دوران مفتاح Tab خارج حدود النافذة",
        "import React, { useEffect, useRef } from 'react';",
        "import { createPortal } from 'react-dom';",
        "",
        "export function FullyAccessibleModal({ isOpen, onClose, titleId, title, children }) {",
        "  const modalContainerRef = useRef(null);",
        "  const previousActiveElementRef = useRef(null);",
        "",
        "  useEffect(() => {",
        "    if (isOpen) {",
        "      // 1. حفظ العنصر الذي كان مركزاً عليه قبل فتح المودال لإعادته لاحقاً",
        "      previousActiveElementRef.current = document.activeElement;",
        "",
        "      // 2. استخراج كافة العناصر القابلة للتركيز داخل المودال (Focus Trap Logic)",
        "      const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])';",
        "      const modalNode = modalContainerRef.current;",
        "",
        "      const handleTrapTab = (e) => {",
        "        if (e.key === 'Escape') {",
        "          onClose();",
        "          return;",
        "        }",
        "        if (e.key !== 'Tab') return;",
        "",
        "        const focusableElements = modalNode.querySelectorAll(focusableSelector);",
        "        if (focusableElements.length === 0) return;",
        "",
        "        const firstEl = focusableElements[0];",
        "        const lastEl = focusableElements[focusableElements.length - 1];",
        "",
        "        if (e.shiftKey) { // Shift + Tab (الرجوع للخلف)",
        "          if (document.activeElement === firstEl) {",
        "            e.preventDefault();",
        "            lastEl.focus(); // الدوران نحو آخر عنصر",
        "          }",
        "        } else { // Tab عادي (التقدم للأمام)",
        "          if (document.activeElement === lastEl) {",
        "            e.preventDefault();",
        "            firstEl.focus(); // الدوران نحو أول عنصر",
        "          }",
        "        }",
        "      };",
        "",
        "      window.addEventListener('keydown', handleTrapTab);",
        "      // توجيه التركيز لأول عنصر تفاعلي داخل المودال فوراً",
        "      const firstFocusable = modalNode.querySelector(focusableSelector);",
        "      if (firstFocusable) firstFocusable.focus();",
        "",
        "      return () => {",
        "        window.removeEventListener('keydown', handleTrapTab);",
        "        // 3. إعادة التركيز للزر الأصلي فور إغلاق المودال",
        "        if (previousActiveElementRef.current) {",
        "          previousActiveElementRef.current.focus();",
        "        }",
        "      };",
        "    }",
        "  }, [isOpen, onClose]);",
        "",
        "  if (!isOpen) return null;",
        "",
        "  // استخدام Portal لتركيب المودال في جذر الوثيقة",
        "  return createPortal(",
        "    <div className='fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4' onClick={onClose}>",
        "      <div",
        "        ref={modalContainerRef}",
        "        role='dialog'",
        "        aria-modal='true'",
        "        aria-labelledby={titleId}",
        "        onClick={e => e.stopPropagation()} // منع إغلاق المودال عند النقر داخله",
        "        className='bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-lg w-full shadow-2xl text-slate-100 space-y-4'",
        "      >",
        "        <div className='flex justify-between items-center'>",
        "          <h3 id={titleId} className='text-lg font-bold text-white'>{title}</h3>",
        "          <button onClick={onClose} aria-label='إغلاق النافذة' className='text-slate-400 hover:text-white text-sm'>✕</button>",
        "        </div>",
        "        <div className='text-sm text-slate-300'>{children}</div>",
        "      </div>",
        "    </div>,",
        "    document.body",
        "  );",
        "}"
      ].join('\n'),
      output: "نافذة منبثقة مثالية هندسياً؛ تحبس مفتاح Tab داخلها، وتغلق بـ Escape وبنقر الخلفية، وتعيد التركيز لمكانه الأصلي بدقة.",
      commonMistakes: "نسيان حبس التركيز (Focus Trap)؛ مما يسمح لمستخدم الكيبورد بالضغط على زر Tab والخروج من المودال للتفاعل مع أزرار وروابط تقع خلف الخلفية المعتمة دون أن يراها.",
      bestPractices: "استخدم مكتبات المكونات المتاحة بدون تنسيق مسبق (Headless UI) مثل Radix UI Primitives أو React Aria إذا كنت تريد مكونات Modal و Dialog معقدة دون إعادة اختراع خوارزميات الـ Focus Trap بنفسك.",
      visualDiagram: "Modal Focus Trap Cycle:\n[First Input in Modal] ──► Tab Key ──► [Second Input] ──► Tab Key ──► [Close Button]\n         ▲                                                               │\n         └───────────────────────── Tab Key Loops Back ──────────────────┘"
    },
    {
      id: "20.2.b",
      title: "إنشاء Dropdown قابل للوصول",
      englishTerm: "Accessible Dropdown Menu (أكسيسيبل دروب داون)",
      description: "بناء قائمة منسدلة مطابقة لمعايير WAI-ARIA Menu Button Pattern؛ تشمل تزويد الزر المشغل بـ `aria-haspopup=\"true\"` و `aria-expanded` لتوثيق حالة الفتح، وتزويد القائمة بـ `role=\"menu\"` وعناصرها بـ `role=\"menuitem\"`، ودعم الملاحة بالأسهم (ArrowUp و ArrowDown).",
      analogy: "يشبه قائمة طعام مطوية؛ يقدمها لك النادل مغلقة، وعندما تفتحها تستعرض الأصناف واحداً تلو الآخر، وتغلقها فور اختيار وجبتك.",
      whyItMatters: "القوائم المنسدلة التي تُفتح وتُغلق فقط عبر hover الفأرة تمنع مستخدمي الهواتف ومستخدمي لوحة المفاتيح من فتحها نهائياً.",
      syntax: "<button aria-haspopup=\"true\" aria-expanded={isOpen}>\n  خيارات الحساب\n</button>\n<ul role=\"menu\">...</ul>",
      simpleExample: `// استيراد React مع قائمة منسدلة تدعم الكيبورد
import React, { useState } from 'react';

export default function AccessibleDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-right">
      {/* زر القائمة المنسدلة الموثق بـ ARIA */}
      <button
        onClick={() => setIsOpen(v => !v)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm border border-slate-700 flex items-center gap-2"
      >
        <span>خيارات الملف الشخصي</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>

      {/* القائمة المشروطة بدور menu */}
      {isOpen && (
        <ul
          role="menu"
          aria-label="خيارات الحساب"
          className="absolute left-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-xl p-1 shadow-2xl z-20 text-white text-xs space-y-1"
        >
          <li role="none">
            <button role="menuitem" onClick={() => setIsOpen(false)} className="w-full text-right p-2 rounded hover:bg-slate-800">
              تعديل الملف الشخصي
            </button>
          </li>
          <li role="none">
            <button role="menuitem" onClick={() => setIsOpen(false)} className="w-full text-right p-2 rounded hover:bg-rose-950 text-rose-400">
              تسجيل الخروج
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}`,
      advancedExample: [
        "// قائمة منسدلة متكاملة تدعم الملاحة الكاملة بالأسهم ومفتاح Escape والإغلاق عند النقر بالخارج",
        "import React, { useState, useRef, useEffect } from 'react';",
        "",
        "export function AdvancedAccessibleMenu({ triggerLabel, items }) {",
        "  const [isOpen, setIsOpen] = useState(false);",
        "  const [focusedIndex, setFocusedIndex] = useState(-1);",
        "  const containerRef = useRef(null);",
        "  const triggerRef = useRef(null);",
        "  const menuItemsRef = useRef([]);",
        "",
        "  // الإغلاق عند النقر خارج القائمة",
        "  useEffect(() => {",
        "    const handleClickOutside = (e) => {",
        "      if (containerRef.current && !containerRef.current.contains(e.target)) {",
        "        setIsOpen(false);",
        "      }",
        "    };",
        "    document.addEventListener('mousedown', handleClickOutside);",
        "    return () => document.removeEventListener('mousedown', handleClickOutside);",
        "  }, []);",
        "",
        "  // التحكم بمفاتيح الكيبورد للتنقل بالأسهم",
        "  const handleKeyDown = (e) => {",
        "    if (!isOpen) {",
        "      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {",
        "        e.preventDefault();",
        "        setIsOpen(true);",
        "        setFocusedIndex(0);",
        "      }",
        "      return;",
        "    }",
        "",
        "    if (e.key === 'Escape') {",
        "      e.preventDefault();",
        "      setIsOpen(false);",
        "      triggerRef.current?.focus(); // استعادة التركيز للزر المشغل",
        "    } else if (e.key === 'ArrowDown') {",
        "      e.preventDefault();",
        "      setFocusedIndex(prev => (prev + 1) % items.length);",
        "    } else if (e.key === 'ArrowUp') {",
        "      e.preventDefault();",
        "      setFocusedIndex(prev => (prev - 1 + items.length) % items.length);",
        "    }",
        "  };",
        "",
        "  // تحديث التركيز الفعلي عند تغير المؤشر",
        "  useEffect(() => {",
        "    if (isOpen && focusedIndex >= 0 && menuItemsRef.current[focusedIndex]) {",
        "      menuItemsRef.current[focusedIndex].focus();",
        "    }",
        "  }, [isOpen, focusedIndex]);",
        "",
        "  return (",
        "    <div ref={containerRef} onKeyDown={handleKeyDown} className='relative inline-block'>",
        "      <button",
        "        ref={triggerRef}",
        "        onClick={() => setIsOpen(v => !v)}",
        "        aria-haspopup='menu'",
        "        aria-expanded={isOpen}",
        "        className='px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-white flex items-center gap-2 focus:ring-2 focus:ring-sky-400'",
        "      >",
        "        <span>{triggerLabel}</span>",
        "        <span>▾</span>",
        "      </button>",
        "",
        "      {isOpen && (",
        "        <ul",
        "          role='menu'",
        "          className='absolute right-0 mt-2 w-52 bg-slate-950 border border-slate-800 rounded-2xl p-1.5 shadow-2xl z-30 space-y-1'",
        "        >",
        "          {items.map((item, idx) => (",
        "            <li key={item.id} role='none'>",
        "              <button",
        "                ref={el => menuItemsRef.current[idx] = el}",
        "                role='menuitem'",
        "                tabIndex={-1}",
        "                onClick={() => { item.onClick(); setIsOpen(false); }}",
        "                className='w-full text-right px-3 py-2 rounded-xl text-xs text-slate-200 hover:bg-slate-900 focus:bg-sky-600 focus:text-white focus:outline-none transition-colors'",
        "              >",
        "                {item.label}",
        "              </button>",
        "            </li>",
        "          ))}",
        "        </ul>",
        "      )}",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "قائمة منسدلة مطابقة لمعايير W3C الرسمية؛ تفتح بزر المسافة أو السهم لأسفل، ويتنقل المستخدم بين عناصرها بالأسهم بسلاسة تامة، وتغلق بـ Escape.",
      commonMistakes: "الاعتماد على حدث `onMouseEnter` و `onMouseLeave` لفتح وإغلاق القائمة؛ مستخدمو لوحة المفاتيح والهواتف اللمسية لن يستطيعوا فتح هذه القوائم إطلاقاً.",
      bestPractices: "اجعل الفتح دائماً عبر حدث النقر `onClick` لدعم اللمس والفأرة والكيبورد بالتساوي، وزود الزر دائماً بـ `aria-expanded={isOpen}`.",
      visualDiagram: "WAI-ARIA Menu Keyboard Flow:\n[Menu Button] ──► Press ArrowDown ──► Opens Menu & focuses First MenuItem\n                      │\n                      ├──► Press ArrowDown ──► Moves focus to Next Item\n                      └──► Press Escape    ──► Closes Menu & returns focus to Trigger Button"
    },
    {
      id: "20.2.c",
      title: "إنشاء Tabs قابلة للوصول",
      englishTerm: "Accessible Tabs Pattern (أكسيسيبل تابس)",
      description: "بناء مكون تبويبات يلتزم بنمط WAI-ARIA Tabs Pattern؛ يشمل حاوية التبويبات `role=\"tablist\"`، وكل زر تبويب `role=\"tab\"` مع `aria-selected`، ولوحة المحتوى المرتبطة `role=\"tabpanel\"` مع `aria-labelledby`، والتنقل السلس بالأسهم يميناً ويساراً بين التبويبات.",
      analogy: "يشبه الفواصل الملونة في مجلد الأوراق المكتبي؛ كل فاصل بارز يحمل عنواناً (Tab)، وعندما تسحب الفاصل تفتح الصفحات التابعة له مباشرة (TabPanel).",
      whyItMatters: "يوفر هيكلة دلالية مترابطة؛ بحيث يعلم قارئ الشاشة الكفيف فوراً: 'أنت في التبويب 2 من أصل 4، ومحتواه معروض بالأسفل'.",
      syntax: "<div role=\"tablist\">\n  <button role=\"tab\" aria-selected={isActive} aria-controls=\"panel-1\">التبويب</button>\n</div>\n<div role=\"tabpanel\" id=\"panel-1\">المحتوى</div>",
      simpleExample: `// استيراد React
import React, { useState } from 'react';

export default function SimpleAccessibleTabs() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      {/* قائمة التبويبات */}
      <div role="tablist" aria-label="أقسام الدورة" className="flex border-b border-slate-800 gap-2 mb-4">
        <button
          role="tab"
          id="tab-overview"
          aria-selected={activeTab === 'overview'}
          aria-controls="panel-overview"
          onClick={() => setActiveTab('overview')}
          className={'pb-2 px-3 text-xs font-bold border-b-2 ' + (activeTab === 'overview' ? 'border-sky-400 text-sky-400' : 'border-transparent text-slate-400')}
        >
          نظرة عامة
        </button>
        <button
          role="tab"
          id="tab-curriculum"
          aria-selected={activeTab === 'curriculum'}
          aria-controls="panel-curriculum"
          onClick={() => setActiveTab('curriculum')}
          className={'pb-2 px-3 text-xs font-bold border-b-2 ' + (activeTab === 'curriculum' ? 'border-sky-400 text-sky-400' : 'border-transparent text-slate-400')}
        >
          المنهج الدراسي
        </button>
      </div>

      {/* لوحات المحتوى */}
      <div
        role="tabpanel"
        id="panel-overview"
        aria-labelledby="tab-overview"
        hidden={activeTab !== 'overview'}
        className="text-sm text-slate-300"
      >
        محتوى النظرة العامة: دورة متقدمة في React.js تغطي 34 قسماً احترافياً.
      </div>
      <div
        role="tabpanel"
        id="panel-curriculum"
        aria-labelledby="tab-curriculum"
        hidden={activeTab !== 'curriculum'}
        className="text-sm text-slate-300"
      >
        محتوى المنهج: يتكون من 137 موضوعاً رئيسياً وأكثر من 1200 مفهوم تفصيلي.
      </div>
    </div>
  );
}`,
      advancedExample: [
        "// مكون Tabs متطور مع دعم التنقل بالأزرار ArrowLeft و ArrowRight التلقائي",
        "import React, { useState, useRef } from 'react';",
        "",
        "export function AdvancedAccessibleTabs({ tabs }) {",
        "  const [selectedIndex, setSelectedIndex] = useState(0);",
        "  const tabsRef = useRef([]);",
        "",
        "  const handleKeyDown = (e) => {",
        "    let nextIndex = selectedIndex;",
        "    if (e.key === 'ArrowLeft') {",
        "      // في اللغة العربية (RTL): السهم لليسار يتقدم للتبويب التالي",
        "      nextIndex = (selectedIndex + 1) % tabs.length;",
        "    } else if (e.key === 'ArrowRight') {",
        "      // السهم لليمين يعود للتبويب السابق",
        "      nextIndex = (selectedIndex - 1 + tabs.length) % tabs.length;",
        "    } else if (e.key === 'Home') {",
        "      nextIndex = 0;",
        "    } else if (e.key === 'End') {",
        "      nextIndex = tabs.length - 1;",
        "    } else {",
        "      return;",
        "    }",
        "",
        "    e.preventDefault();",
        "    setSelectedIndex(nextIndex);",
        "    tabsRef.current[nextIndex]?.focus();",
        "  };",
        "",
        "  return (",
        "    <div className='p-6 bg-slate-950 border border-slate-800 rounded-3xl space-y-4'>",
        "      {/* شريط التبويبات tablist */}",
        "      <div",
        "        role='tablist'",
        "        aria-label='لوحة المعلومات التفاعلية'",
        "        onKeyDown={handleKeyDown}",
        "        className='flex gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl'",
        "      >",
        "        {tabs.map((tab, idx) => {",
        "          const isSelected = selectedIndex === idx;",
        "          return (",
        "            <button",
        "              key={tab.id}",
        "              ref={el => tabsRef.current[idx] = el}",
        "              role='tab'",
        "              id={'tab-' + tab.id}",
        "              aria-selected={isSelected}",
        "              aria-controls={'panel-' + tab.id}",
        "              tabIndex={isSelected ? 0 : -1}",
        "              onClick={() => setSelectedIndex(idx)}",
        "              className={'flex-1 py-2 px-4 rounded-xl text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 ' + (isSelected ? 'bg-sky-600 text-white shadow-lg' : 'text-slate-400 hover:text-white')}",
        "            >",
        "              {tab.label}",
        "            </button>",
        "          );",
        "        })}",
        "      </div>",
        "",
        "      {/* عرض لوحة المحتوى للتبويب النشط */}",
        "      {tabs.map((tab, idx) => {",
        "        const isSelected = selectedIndex === idx;",
        "        return (",
        "          <div",
        "            key={tab.id}",
        "            role='tabpanel'",
        "            id={'panel-' + tab.id}",
        "            aria-labelledby={'tab-' + tab.id}",
        "            tabIndex={0} // إتاحة لوحة المحتوى للتركيز إذا كانت تحتوي على نصوص طويلة",
        "            hidden={!isSelected}",
        "            className='p-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500'",
        "          >",
        "            {tab.content}",
        "          </div>",
        "        );",
        "      })}",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "نظام تبويبات قياسي يتيح للقارئ الكفيف والمستخدم العادي التنقل بين التبويبات بالأسهم مع ربط كل تبويب بمحتواه بدقة.",
      commonMistakes: "نسيان خاصية `aria-controls` وخاصية `aria-labelledby`؛ هذا يقطع الرابط البرمجي بين الزر ولوحة المحتوى الخاصة به في شجرة الـ Accessibility.",
      bestPractices: "ضع `tabIndex={0}` على عنصر `role=\"tabpanel\"` إذا كان المحتوى يحتوي على نصوص طويلة قابلة للتمرير؛ لتمكين مستخدم الكيبورد من تمرير النص بالأسهم.",
      visualDiagram: "ARIA Tabs Architecture:\n[role=\"tablist\"]\n  ├── <button role=\"tab\" aria-selected=\"true\"  aria-controls=\"p1\">Tab 1</button>\n  └── <button role=\"tab\" aria-selected=\"false\" aria-controls=\"p2\">Tab 2</button>\n\n[role=\"tabpanel\" id=\"p1\" aria-labelledby=\"tab1\"] ◄── Shows content for active tab"
    },
    {
      id: "20.2.d",
      title: "إدارة Focus بعد التنقل",
      englishTerm: "Route Focus Management (إدارة التركيز عند الانتقال)",
      description: "حل مشكلة ضياع التركيز في تطبيقات الصفحة الواحدة (SPAs) عند الانتقال بين المسارات عبر React Router. في مواقع الويب التقليدية، يعيد المتصفح قراءة الصفحة وتوجيه التركيز لأعلى الصفحة عند الانتقال؛ بينما في React SPA لا يحدث تحميل كامل، مما يتطلب نقل التركيز برمجياً إلى عنوان الصفحة الجديد `<h1>` لإعلام قارئات الشاشة بالانتقال.",
      analogy: "يشبه دخول قاعة جديدة في معرض؛ بدلاً من أن تظل واقفاً تنظر للأرض، يتقدم المرشد ويوجه كشاف النور نحو لوحة الاستقبال الترحيبية للقاعة الجديدة لتعرف أين وصلت.",
      whyItMatters: "بدون نقل التركيز، يظل مستخدم قارئ الشاشة معلقاً في الرابط الذي نقر عليه في الفوتر أو الهيدر دون أي تنبيه بأن محتوى الشاشة قد تغير كلياً!",
      syntax: "useEffect(() => {\n  document.getElementById('page-title')?.focus();\n}, [location.pathname]);",
      simpleExample: `// استيراد React مع hook لتوجيه التركيز عند تغيير المسار
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteFocusManager({ children }) {
  const location = useLocation();
  const headingRef = useRef(null);

  useEffect(() => {
    // 1. نقل التركيز لعنوان الصفحة الجديدة فور تغير الرابط
    headingRef.current?.focus();
    // 2. تحديث شريط التمرير لأعلى الصفحة
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      {/* عنوان رئيسي يملك tabIndex={-1} ليقبل التركيز برمجياً بدون التأثير على مفتاح Tab */}
      <h1 ref={headingRef} tabIndex={-1} className="outline-none text-2xl font-bold text-white mb-4">
        العنوان التلقائي للصفحة
      </h1>
      {children}
    </div>
  );
}`,
      advancedExample: [
        "// مكوّن عام احترافي يعلن عن تغيير المسار لقارئات الشاشة (Route Announcer) وينقل التركيز",
        "import React, { useEffect, useState, useRef } from 'react';",
        "import { useLocation } from 'react-router-dom';",
        "",
        "export function RouteAccessibilityAnnouncer() {",
        "  const location = useLocation();",
        "  const [announcement, setAnnouncement] = useState('');",
        "  const mainContentRef = useRef(null);",
        "",
        "  useEffect(() => {",
        "    // استخراج اسم الصفحة من document.title",
        "    const pageTitle = document.title || 'صفحة جديدة';",
        "    ",
        "    // 1. تحديث نص الإعلان في منطقة aria-live",
        "    setAnnouncement('تم الانتقال إلى: ' + pageTitle);",
        "",
        "    // 2. توجيه التركيز البرمجي لحاوية المحتوى الرئيسي <main>",
        "    const mainElement = document.querySelector('main');",
        "    if (mainElement) {",
        "      mainElement.setAttribute('tabindex', '-1');",
        "      mainElement.focus();",
        "      mainElement.style.outline = 'none';",
        "    }",
        "  }, [location.pathname]);",
        "",
        "  return (",
        "    <div",
        "      role='status'",
        "      aria-live='assertive'",
        "      aria-atomic='true'",
        "      className='sr-only'",
        "    >",
        "      {announcement}",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "بمجرد تنقل المستخدم بين المسارات، ينطق قارئ الشاشة فوراً: 'تم الانتقال إلى: صفحة الإعدادات'، وينتقل التركيز لبداية المحتوى الجديد.",
      commonMistakes: "إهمال إدارة التركيز بعد التنقل والاعتقاد بأن React Router يتولى ذلك تلقائياً؛ مكتبات التوجيه في جانب العميل لا تنقل التركيز بمفردها ويجب على المطور ضبطها برمجياً.",
      bestPractices: "استخدم وسم `tabIndex={-1}` على عنصر `<h1>` أو `<main>`؛ فهو يتيح توجيه التركيز إليه برمجياً بـ `.focus()` دون إدراجه في تسلسل مفتاح Tab العادي للمستخدم.",
      visualDiagram: "Route Transition Flow:\nUser clicks Nav Link ──► URL changes to `/profile`\n                              │\n                              ▼\nRouteAnnouncer fires ──► Announces new page title via aria-live\n                              │\n                              ▼\nFocus shifted to `<main tabIndex=\"-1\">` ──► User starts reading from top!"
    },
    {
      id: "20.2.e",
      title: "إظهار رسائل الأخطاء بوضوح",
      englishTerm: "Accessible Form Error Messages (إتاحة رسائل الأخطاء)",
      description: "الربط البرمجي بين حقول النماذج ورسائل الخطأ الناتجة عن التحقق (Validation)؛ استخدام `aria-invalid=\"true\"` لإخبار قارئ الشاشة بأن القيمة المدخلة معيبة، وربط حقل الإدخال بنص الخطأ عبر `aria-describedby=\"error-id\"` ليقرأه المتصفح فوراً عند الوقوف على الحقل.",
      analogy: "يشبه ملء استمارة في البنك وعندما تسلمها للموظف لا يكتفي بهز رأسه بصمت، بل يضع علامة قلم حمراء صريحة على خانة رقم الهاتف ويكتب بجانبها بخط واضح: 'ناقص رقم واحد'.",
      whyItMatters: "يحول دون إرسال المستخدم للنموذج عدة مرات في حيرة؛ فبدون هذا الربط، يرى المستخدم العادي نصاً أحمر بينما الكفيف يسمع فقط 'حقل البريد' دون أن يعلم أن هناك خطأ أو ما هو سببه.",
      syntax: "<input \n  aria-invalid={hasError} \n  aria-describedby={hasError ? \"email-error-msg\" : undefined} \n/>\n{hasError && <p id=\"email-error-msg\" role=\"alert\">البريد غير صحيح</p>}",
      simpleExample: `// استيراد React مع نموذج متاح للأخطاء
import React, { useState } from 'react';

export default function AccessibleErrorInput() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleBlur() {
    if (password.length < 8) {
      setError('كلمة المرور يجب ألا تقل عن 8 محارف.');
    } else {
      setError('');
    }
  }

  const hasError = Boolean(error);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl max-w-sm text-white space-y-2">
      <label htmlFor="user-pass" className="block text-xs font-semibold">
        كلمة المرور:
      </label>
      <input
        id="user-pass"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        onBlur={handleBlur}
        aria-invalid={hasError}
        aria-describedby={hasError ? 'pass-error-text' : undefined}
        className={'w-full p-2 bg-slate-800 rounded border text-sm ' + (hasError ? 'border-rose-500 focus:ring-2 focus:ring-rose-500' : 'border-slate-700')}
      />
      {/* رسالة الخطأ المرتبطة برمجياً */}
      {hasError && (
        <p id="pass-error-text" role="alert" className="text-xs text-rose-400 font-medium">
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}`,
      advancedExample: [
        "// ملخص أخطاء النموذج الشامل (Accessible Error Summary) وتوجيه التركيز التلقائي",
        "import React, { useState, useRef } from 'react';",
        "",
        "export function AccessibleFormWithSummary() {",
        "  const [errors, setErrors] = useState({});",
        "  const errorSummaryRef = useRef(null);",
        "",
        "  const handleSubmit = (e) => {",
        "    e.preventDefault();",
        "    const formErrors = {};",
        "    const formData = new FormData(e.currentTarget);",
        "",
        "    if (!formData.get('fullName')) formErrors.fullName = 'الاسم الكامل حقل إلزامي.';",
        "    if (!formData.get('userEmail')) formErrors.userEmail = 'البريد الإلكتروني حقل إلزامي.';",
        "",
        "    setErrors(formErrors);",
        "",
        "    // إذا وجدت أخطاء: نقل التركيز فوراً لملخص الأخطاء في الأعلى",
        "    if (Object.keys(formErrors).length > 0) {",
        "      setTimeout(() => {",
        "        errorSummaryRef.current?.focus();",
        "      }, 50);",
        "    }",
        "  };",
        "",
        "  return (",
        "    <form onSubmit={handleSubmit} noValidate className='p-6 bg-slate-950 border border-slate-800 rounded-3xl max-w-md space-y-4 text-white'>",
        "      {/* ملخص الأخطاء العلوي الإلزامي في معايير WCAG */}",
        "      {Object.keys(errors).length > 0 && (",
        "        <div",
        "          ref={errorSummaryRef}",
        "          tabIndex={-1}",
        "          role='alert'",
        "          aria-labelledby='summary-title'",
        "          className='p-4 bg-rose-950/80 border border-rose-500 rounded-2xl outline-none space-y-2'",
        "        >",
        "          <h4 id='summary-title' className='font-bold text-rose-200 text-sm'>",
        "            يرجى تصحيح الأخطاء التالية قبل المتابعة ({Object.keys(errors).length}):",
        "          </h4>",
        "          <ul className='list-disc list-inside text-xs text-rose-300 space-y-1'>",
        "            {Object.entries(errors).map(([field, msg]) => (",
        "              <li key={field}>",
        "                <a href={'#' + field} className='underline hover:text-white'>{msg}</a>",
        "              </li>",
        "            ))}",
        "          </ul>",
        "        </div>",
        "      )}",
        "",
        "      <div>",
        "        <label htmlFor='fullName' className='block text-xs mb-1'>الاسم الكامل:</label>",
        "        <input",
        "          id='fullName'",
        "          name='fullName'",
        "          aria-invalid={Boolean(errors.fullName)}",
        "          aria-describedby={errors.fullName ? 'fn-err' : undefined}",
        "          className='w-full p-2 bg-slate-900 border border-slate-700 rounded-xl text-sm'",
        "        />",
        "        {errors.fullName && <p id='fn-err' className='text-xs text-rose-400 mt-1'>{errors.fullName}</p>}",
        "      </div>",
        "",
        "      <button type='submit' className='px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-xl text-xs font-bold'>",
        "        إرسال البيانات",
        "      </button>",
        "    </form>",
        "  );",
        "}"
      ].join('\n'),
      output: "يقدم نمط Error Summary المعتمد في الهيئات الحكومية؛ يجمع الأخطاء في الأعلى بروابط داخلية تقفز مباشرة للحقل المعيب، مع قراءة الخطأ فورياً.",
      commonMistakes: "الاعتماد على إطار أحمر فقط حول الحقل دون وضع نص رسالة خطأ، أو وضع نص خطأ بدون ربطه بالحقل عبر `aria-describedby`؛ في الحالتين الكفيف لن يعلم أبداً ما هي المشكلة.",
      bestPractices: "وفر دائماً `aria-invalid=\"true\"` على الحقول غير الصالحة، واستخدم `aria-describedby` لربط الحقل بنص المساعدة ونص الخطأ معاً.",
      visualDiagram: "Accessible Error Linkage:\n[ <input id=\"email\" aria-invalid=\"true\" aria-describedby=\"email-err\"> ]\n                     │\n                     ▼ (Screen Reader announces together: \"Email, invalid entry, error: Email format is wrong\")\n[ <p id=\"email-err\" role=\"alert\">Email format is wrong</p> ]"
    },
    {
      id: "20.2.f",
      title: "استخدام aria-live للإشعارات",
      englishTerm: "Live Regions (aria-live) (المناطق الحية)",
      description: "خاصية برمجية تخبر قارئات الشاشة بمراقبة عنصر معين ونطق أي نصوص أو محتوى جديد يظهر بداخله تلقائياً وفور حدوثه دون الحاجة لأن يقوم المستخدم بتحريك مؤشر التركيز إليه. تنقسم إلى نوعين: `aria-live=\"polite\"` (ينتظر حتى ينهي المستخدم كلامه ثم يقرأ التنبيه)، و `aria-live=\"assertive\"` (يقاطع القراءة فوراً للتنبيهات العاجلة والحرجة).",
      analogy: "يشبه صوت مكبر الصوت في محطة القطار؛ `polite` مثل صوت خافت يعلن: 'المشروبات متوفرة في العربة رقم 3'، بينما `assertive` مثل جرس إنذار الحريق العاجل الذي يقاطع الجميع ويأمرهم بالإخلاء فوراً.",
      whyItMatters: "المحتوى التفاعلي في React يظهر ويختفي ديناميكياً (مثل إشعار إضافة للسلة Toast Notification، أو نتيجة بحث فورية)؛ بدون aria-live لن يعلم المكفوفون بحدوث هذه التغييرات أبداً.",
      syntax: "<div aria-live=\"polite\" aria-atomic=\"true\">\n  {toastMessage}\n</div>",
      simpleExample: `// استيراد React
import React, { useState } from 'react';

export default function CartToastNotification() {
  const [message, setMessage] = useState('');

  function handleAddToCart() {
    setMessage('تمت إضافة كورس React 19 إلى سلة مشترياتك بنجاح!');
    setTimeout(() => setMessage(''), 4000);
  }

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white space-y-3">
      <button
        onClick={handleAddToCart}
        className="px-4 py-2 bg-emerald-600 rounded-lg text-xs font-bold"
      >
        إضافة للسلة
      </button>

      {/* منطقة حية تعلن التنبيه فور ظهوره بصوت مسموع */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="min-h-[24px] text-xs text-emerald-400 font-semibold"
      >
        {message}
      </div>
    </div>
  );
}`,
      advancedExample: [
        "// نظام إدارة التنبيهات المنبثقة (Toast System) مع التمييز بين الإشعارات الهادئة والحرجة",
        "import React, { useState, createContext, useContext } from 'react';",
        "",
        "const ToastContext = createContext(null);",
        "",
        "export function ToastProvider({ children }) {",
        "  const [toasts, setToasts] = useState([]);",
        "",
        "  const notify = (text, type = 'info') => {",
        "    const id = Date.now();",
        "    setToasts(prev => [...prev, { id, text, type }]);",
        "    // حذف الإشعار تلقائياً بعد 5 ثوانٍ",
        "    setTimeout(() => {",
        "      setToasts(prev => prev.filter(t => t.id !== id));",
        "    }, 5000);",
        "  };",
        "",
        "  return (",
        "    <ToastContext.Provider value={notify}>",
        "      {children}",
        "      {/* حاوية الإشعارات الحية المتاحة */}",
        "      <div className='fixed bottom-4 left-4 z-50 space-y-2 max-w-sm'>",
        "        {/* منطقة هادئة للإشعارات العادية */}",
        "        <div aria-live='polite' aria-atomic='true' className='space-y-2'>",
        "          {toasts.filter(t => t.type !== 'error').map(t => (",
        "            <div key={t.id} className='p-3 bg-slate-900 border border-slate-700 text-white rounded-xl shadow-2xl text-xs'>",
        "              ℹ️ {t.text}",
        "            </div>",
        "          ))}",
        "        </div>",
        "        {/* منطقة قاطعة للتنبيهات والأخطاء الحرجة */}",
        "        <div aria-live='assertive' aria-atomic='true' className='space-y-2'>",
        "          {toasts.filter(t => t.type === 'error').map(t => (",
        "            <div key={t.id} role='alert' className='p-3 bg-rose-950 border border-rose-500 text-rose-200 rounded-xl shadow-2xl text-xs font-bold'>",
        "              🚨 {t.text}",
        "            </div>",
        "          ))}",
        "        </div>",
        "      </div>",
        "    </ToastContext.Provider>",
        "  );",
        "}"
      ].join('\n'),
      output: "يقوم قارئ الشاشة بالتقاط الإشعار ونطقه للمستخدم في اللحظة المناسبة دون مقاطعة مهامه إذا كان polite، أو مقاطعته إذا كان assertive.",
      commonMistakes: "الإفراط في استخدام `aria-live=\"assertive\"` لكافة الإشعارات العادية؛ هذا يقطع صوت قارئ الشاشة في منتصف الجملة ويزعج المستخدم بشدة. استخدم `polite` لـ 95% من الإشعارات وخصص `assertive` لحالات الطوارئ وقطع الخادم فقط.",
      bestPractices: "أضف دائماً `aria-atomic=\"true\"` مع `aria-live`؛ لتخبر قارئ الشاشة بنطق الرسالة كاملة ككتلة واحدة بدلاً من نطق الكلمات المضافة حديثاً فقط.",
      visualDiagram: "aria-live Modes:\naria-live=\"polite\"    ──► Waits for user to finish current speech ──► Reads notification gently\naria-live=\"assertive\" ──► INTERRUPTS immediately! ──► Critical warnings / Security alerts"
    },
    {
      id: "20.2.g",
      title: "دعم Reduced Motion",
      englishTerm: "Prefers-Reduced-Motion Support (تقليل الحركة)",
      description: "احترام تفضيلات المستخدمين الذين قاموا بتفعيل خيار 'تقليل الحركة' (Reduce Motion) في إعدادات نظام التشغيل (Windows, macOS, iOS, Android). يعاني هؤلاء المستخدمون من اضطرابات الدهليز في الأذن الداخلية (Vestibular Disorders) حيث تسبب لهم الحركات والتحليق السريع والأنيميشن الدوار والغثيان وفقدان التوازن.",
      analogy: "يشبه توفير مسار هادئ وسلس في الملاهي أو الحديقة للأشخاص الذين يصابون بدوار البحر ولا يفضلون ركوب قطار الموت السريع والألعاب الدوارة.",
      whyItMatters: "يحمي صحة وسلامة زوار موقعك الجسدية؛ تطبيق تأثير انزلاق سريع قد يسبب دواراً وصداعاً لمستخدم يعاني من مشاكل في الأذن الداخلية.",
      syntax: "/* في Tailwind CSS: */\nclassName=\"transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none\"\n/* في CSS: */\n@media (prefers-reduced-motion: reduce) { ... }",
      simpleExample: `// استيراد React
import React from 'react';

export default function ReducedMotionCard() {
  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white">
      {/* 
        زر يستخدم فئات Tailwind الذكية:
        حركة وتكبير عادي للمستخدم الطبيعي، وإلغاء الحركة تلقائياً لمن فعل تقليل الحركة!
      */}
      <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-xs font-bold transition-transform duration-300 hover:scale-105 active:scale-95 motion-reduce:hover:scale-100 motion-reduce:transition-none">
        زر يحترم خيارات الحركة (Reduced Motion)
      </button>
    </div>
  );
}`,
      advancedExample: [
        "// خطاف React مخصص لاكتشاف تفضيل تقليل الحركة برمجياً في الرسوم المتحركة المعقدة (Framer Motion / Canvas)",
        "import { useState, useEffect } from 'react';",
        "",
        "export function usePrefersReducedMotion() {",
        "  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);",
        "",
        "  useEffect(() => {",
        "    // الاستعلام عن خاصية الميديا كويري لنظام التشغيل",
        "    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');",
        "    setPrefersReducedMotion(mediaQuery.matches);",
        "",
        "    const listener = (event) => {",
        "      setPrefersReducedMotion(event.matches);",
        "    };",
        "",
        "    mediaQuery.addEventListener('change', listener);",
        "    return () => mediaQuery.removeEventListener('change', listener);",
        "  }, []);",
        "",
        "  return prefersReducedMotion;",
        "}",
        "",
        "// استخدام الخطاف في مكون رسومي",
        "export function AnimatedPromoBanner() {",
        "  const shouldReduceMotion = usePrefersReducedMotion();",
        "",
        "  // إذا طلب المستخدم تقليل الحركة: نلغي الانتقال الحركي ونعتمد التلاشي البسيط فقط",
        "  const animationStyle = shouldReduceMotion",
        "    ? { opacity: 1 }",
        "    : { transform: 'translateY(0)', opacity: 1, transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' };",
        "",
        "  return (",
        "    <div style={animationStyle} className='p-6 bg-gradient-to-r from-sky-950 to-indigo-950 rounded-2xl border border-sky-500/30 text-white'>",
        "      <h3 className='text-lg font-bold'>واجهات مستجيبة للصحة البصرية</h3>",
        "      <p className='text-xs text-slate-300 mt-1'>",
        "        حالة تقليل الحركة في جهازك: {shouldReduceMotion ? 'مفعلة (تم إيقاف التحليق)' : 'غير مفعلة (الحركات تعمل)'}",
        "      </p>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "يتعرف التطبيق فوراً على تفضيلات نظام تشغيل المستخدم؛ فيلغي التحليق والدوران السريع ويستبدلها بانتقالات فورية أو تلاشٍ هادئ.",
      commonMistakes: "الاعتقاد بأن تقليل الحركة يعني حذف كل ألوان وتنسيقات التطبيق؛ المطلوب فقط هو إيقاف الحركات الكبيرة (مثل التحليق والدوران والانزلاق الطويل Parallax)، بينما التلاشي البسيط للشفافية (Fade Opacity) مسموح وآمن.",
      bestPractices: "استخدم بادئة `motion-reduce:` المدمجة في Tailwind CSS v3/v4 على كافة فئات التحريك والانتقالات لجعل موقعك آمناً وصحياً للجميع.",
      visualDiagram: "Prefers-Reduced-Motion Strategy:\nOS Setting: (prefers-reduced-motion: reduce)\n  ├── Normal User:   [Slide from left + Spin 360deg + Scale 1.2x]\n  └── Sensitive User: [Simple Instant Fade In (Zero Dizziness!) 🎯]"
    },
    {
      id: "20.2.h",
      title: "اختبار المكونات باستخدام axe-core",
      englishTerm: "Automated a11y Testing with axe-core (أكس-كور)",
      description: "محرك التدقيق الآلي لإمكانية الوصول رقم 1 عالمياً والمطور من شركة Deque Systems. يُدمج مع Vitest و React Testing Library عبر حزمة `vitest-axe` أو `jest-axe` لفحص كود الـ HTML الناتج عن أي مكوّن آلياً والتأكد من خلوه من مخالفات WCAG (مثل غياب الـ alt، أو تباين الألوان الضعيف، أو سمات ARIA غير الصالحة).",
      analogy: "يشبه الفحص الأوتوماتيكي بالأشعة السينية للحقائب في المطار؛ يمر الصندوق في ثانية واحدة ليكتشف أي مادة محظورة أو مخالفة للوائح الأمنية تلقائياً دون تدخل بشري.",
      whyItMatters: "يمنع ارتكاب أخطاء إمكانية الوصول البديهية ويكتشف 40% إلى 50% من مشاكل a11y الشائعة فوراً في بيئة الاختبار قبل دمج الكود في الـ Git.",
      syntax: "import { axe, toHaveNoViolations } from 'vitest-axe';\nexpect.extend(toHaveNoViolations);\nconst { container } = render(<MyComponent />);\nexpect(await axe(container)).toHaveNoViolations();",
      simpleExample: `// استيراد vitest-axe ومطابقات الفحص الآلي
import React from 'react';
import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import { axe, toHaveNoViolations } from 'vitest-axe';

// توسيع مطابقات expect لدعم فحص خلو الانتهاكات
expect.extend(toHaveNoViolations);

function SampleCard() {
  return (
    <article>
      <h2>عنوان المقال</h2>
      <button type="button">قراءة المزيد</button>
    </article>
  );
}

test('التأكد التلقائي من خلو المكون من أي مخالفات إمكانية وصول عبر axe', async () => {
  const { container } = render(<SampleCard />);

  // فحص شجرة الـ HTML بواسطة محرك axe
  const results = await axe(container);

  // التأكيد الصريح: صفر انتهاكات لمعايير WCAG!
  expect(results).toHaveNoViolations();
});`,
      advancedExample: [
        "// فحص مكوّن معيب بواسطة axe وكيفية التقاط الانتهاكات وإصلاحها",
        "import React from 'react';",
        "import { render } from '@testing-library/react';",
        "import { describe, it, expect } from 'vitest';",
        "import { axe, toHaveNoViolations } from 'vitest-axe';",
        "",
        "expect.extend(toHaveNoViolations);",
        "",
        "// ❌ مكوّن يحتوي على انتهاكين: صورة بدون alt وزر بدون اسم",
        "function FlawedCard() {",
        "  return (",
        "    <div>",
        "      <img src='/pic.png' />",
        "      <button><span className='icon-search'></span></button>",
        "    </div>",
        "  );",
        "}",
        "",
        "// ✅ المكون المصحح المطابق للمواصفات",
        "function CompliantCard() {",
        "  return (",
        "    <div>",
        "      <img src='/pic.png' alt='شعار المنصة التعليمية' />",
        "      <button aria-label='بحث'><span className='icon-search' aria-hidden='true'></span></button>",
        "    </div>",
        "  );",
        "}",
        "",
        "describe('التدقيق الآلي عبر axe-core', () => {",
        "  it('المكون المصحح يجب أن يجتاز كافة قواعد axe بنجاح', async () => {",
        "    const { container } = render(<CompliantCard />);",
        "    const results = await axe(container);",
        "    expect(results).toHaveNoViolations();",
        "  });",
        "});"
      ].join('\n'),
      output: "يقوم محرك axe بفحص عشرات القواعد (image-alt, button-name, color-contrast) ويُرجع تقريراً مفصلاً بروابط إرشادية لكل خطأ.",
      commonMistakes: "الظن بأن اجتياز اختبار `axe` بنسبة 100% يعني أن الموقع أصبح متاحاً بالكامل؛ axe تكتشف فقط المشاكل البرمجية الآلية (Syntax & Rules) لكنها لا تفهم هل التفاعل منطقي وهل النص البديل مفهوم بشرياً.",
      bestPractices: "ادمج `vitest-axe` في كل اختبار مكوّن كوحدة فحص أوتوماتيكية أساسية تمنع الأخطاء البديهية قبل أن تصل إلى المراجع البشري.",
      visualDiagram: "axe-core Automated Audit:\nRendered DOM ──► axe(container) ──► Rules Engine Check (100+ Rules)\n                                        ├── All Pass ──► `toHaveNoViolations()` ✅\n                                        └── Rule Violated ──► Detailed Help URL & Element Pointer ❌"
    }
  ],
  quizzes: [
    {
      id: "q20.2.1",
      question: "ما هو الشرط الأهم لمكون النافذة المنبثقة (Modal Dialog) لمنع تشتت مستخدمي لوحة المفاتيح؟",
      options: [
        "أن تحتوي على 5 أزرار ملونة.",
        "حبس مؤشر التركيز داخل النافذة (Focus Trap) لمنع مفتاح Tab من الخروج للصفحة الخلفية، وإعادة التركيز للزر المشغل فور الإغلاق.",
        "أن تغلق تلقائياً بعد 3 ثوانٍ.",
        "أن تعمل بدون كود JavaScript."
      ],
      correctAnswer: 1,
      explanation: "بدون خاصية Focus Trap، سيتنقل مستخدم لوحة المفاتيح عبر عناصر الصفحة الخلفية دون أن يراها مما يسبب ارتباكاً شديداً. كما أن إعادة التركيز للزر المشغل تحافظ على سياق تصفح المستخدم."
    },
    {
      id: "q20.2.2",
      question: "ما الفرق الأساسي بين aria-live=\"polite\" و aria-live=\"assertive\"؟",
      options: [
        "polite تعمل فقط في متصفح كروم.",
        "polite تنتظر حتى ينتهي قارئ الشاشة من قراءة الجملة الحالية قبل نطق التنبيه، بينما assertive تقاطع القراءة فوراً في جزء من الثانية للتنبيهات الحرجة والطارئة.",
        "assertive مخصصة لتطبيقات الألعاب فقط.",
        "لا يوجد فرق بينهما وهما متطابقتان تماماً."
      ],
      correctAnswer: 1,
      explanation: "خاصية polite هي الخيار الهادئ الموصى به لمعظم التنبيهات العادية لعدم إزعاج المستخدم، بينما تخصص assertive للحالات الطارئة مثل انقطاع الاتصال أو أخطاء الأمان."
    },
    {
      id: "q20.2.3",
      question: "لماذا يجب دعم استعلام prefers-reduced-motion في تطبيقات الواجهات التفاعلية؟",
      options: [
        "لتوفير مساحة القرص الصلب.",
        "حماية المستخدمين الذين يعانون من اضطرابات الدهليز في الأذن الداخلية من الدوار والغثيان الناتج عن الحركات السريعة والتحليق البصري.",
        "لأن الحركات ممنوعة في كود React 19.",
        "لزيادة سرعة معالج الرسوميات بنسبة 500%."
      ],
      correctAnswer: 1,
      explanation: "الحركات السريعة والانزلاقات والتحليق تسبب اضطرابات جسدية حقيقية للمصابين باضطرابات الدهليز؛ احترام تفضيلهم بإلغاء أو تبسيط الحركات واجب صحي وهندسي."
    }
  ],
  exercise: {
    title: "تمرين عملي: إنشاء نافذة تأكيد حذف متاح بالكامل مع Focus Trap ومفتاح Escape",
    description: "قم ببناء مكوّن ConfirmDeleteModal يستقبل isOpen و onConfirm و onCancel. يجب أن يحبس المودال التركيز بين زر 'حذف' وزر 'إلغاء'، ويغلق عند الضغط على مفتاح Escape، ويحمل سمات role=\"dialog\" و aria-modal=\"true\".",
    hints: [
      "استمع لحدث keydown على window لفحص مفتاح Escape.",
      "استخدم getElementById أو querySelectorAll لعمل حلقة الدوران لمفتاح Tab.",
      "استخدم createPortal لعرض المودال في document.body."
    ],
    solution: `import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export function ConfirmDeleteModal({ isOpen, onConfirm, onCancel, itemName }) {
  const cancelBtnRef = useRef(null);
  const confirmBtnRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // توجيه التركيز لزر الإلغاء فور الفتح كخيار آمن
    cancelBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onCancel();
      } else if (e.key === 'Tab') {
        // حلقة Focus Trap بسيطة بين الزرين
        if (e.shiftKey && document.activeElement === cancelBtnRef.current) {
          e.preventDefault();
          confirmBtnRef.current?.focus();
        } else if (!e.shiftKey && document.activeElement === confirmBtnRef.current) {
          e.preventDefault();
          cancelBtnRef.current?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-dialog-title"
        className="bg-slate-900 border border-slate-700 p-6 rounded-2xl max-w-sm w-full space-y-4 text-white"
      >
        <h3 id="delete-dialog-title" className="text-base font-bold text-rose-400">
          تأكيد الحذف النهائي
        </h3>
        <p className="text-xs text-slate-300">
          هل أنت متأكد من رغبتك في حذف "{itemName}"؟ لا يمكن التراجع عن هذه العملية.
        </p>
        <div className="flex justify-end gap-2 pt-2">
          <button
            ref={cancelBtnRef}
            onClick={onCancel}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-lg border border-slate-600"
          >
            إلغاء
          </button>
          <button
            ref={confirmBtnRef}
            onClick={onConfirm}
            className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-xs font-bold rounded-lg"
          >
            تأكيد الحذف
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}`
  },
  infographic: {
    title: "هندسة مكونات React المتاحة قياسياً",
    subtitle: "الدليل الشامل للتحكم في التركيز والأدوار الدلالية ومحاكاة الشاشات",
    steps: [
      { step: "1", title: "Focus Trap & Modals", desc: "حبس مفتاح Tab داخل النوافذ المنبثقة ودعم الإغلاق بـ Escape واستعادة موضع التركيز." },
      { step: "2", title: "Dropdown & Tabs ARIA", desc: "تطبيق أنماط WAI-ARIA للملاحة بالأسهم وتوثيق الحالات بـ aria-expanded و aria-selected." },
      { step: "3", title: "Live Regions (aria-live)", desc: "إشعار المكفوفين بتحديثات السلة والرسائل اللحظية بنمط polite الهادئ أو assertive الحرج." },
      { step: "4", title: "Reduced Motion & axe", desc: "احترام الصحة البصرية بإلغاء التحليق السريع والتدقيق التلقائي المستمر عبر محرك axe-core." }
    ]
  }
};
