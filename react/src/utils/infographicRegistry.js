// src/utils/infographicRegistry.js
// سجل ومولد الإنفوجرافيك الشامل فائق الجاذبية لجميع دروس خريطة طريق React.js (كافة الأقسام الـ 34)
// يولد لوحات بصرية متطورة متعددة الثيمات مع محرك المخططات المعمارية (Visual Concept Diagrams)

import { SECTIONS_MAP, AVAILABLE_SECTIONS } from '../data/sections/index.js';

/**
 * الثيمات التصميمية المتنوعة الخمسة (5 Distinct Visual Themes)
 */
export const INFOGRAPHIC_THEMES = {
  cyber: {
    id: "cyber",
    name: "سايبر نيون",
    icon: "⚡",
    primary: "#06b6d4",
    secondary: "#3b82f6",
    accent: "#8b5cf6",
    bgCard: "#0b1120",
    borderClass: "border-cyan-500/40 hover:border-cyan-400",
    gradientHeader: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
    glowColor: "rgba(6, 182, 212, 0.14)",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    tagColor: "text-cyan-400",
    cardBgAccent: "rgba(6, 182, 212, 0.05)",
    boxBg: "bg-slate-900/90 border-cyan-900/40"
  },
  emerald: {
    id: "emerald",
    name: "إميرالد برو",
    icon: "🌿",
    primary: "#10b981",
    secondary: "#14b8a6",
    accent: "#06b6d4",
    bgCard: "#061712",
    borderClass: "border-emerald-500/40 hover:border-emerald-400",
    gradientHeader: "linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #06b6d4 100%)",
    glowColor: "rgba(16, 185, 129, 0.14)",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    tagColor: "text-emerald-400",
    cardBgAccent: "rgba(16, 185, 129, 0.05)",
    boxBg: "bg-emerald-950/40 border-emerald-900/40"
  },
  sunset: {
    id: "sunset",
    name: "شروق العنبر",
    icon: "🌅",
    primary: "#f59e0b",
    secondary: "#f97316",
    accent: "#ea580c",
    bgCard: "#190e06",
    borderClass: "border-amber-500/40 hover:border-amber-400",
    gradientHeader: "linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ea580c 100%)",
    glowColor: "rgba(245, 158, 11, 0.14)",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    tagColor: "text-amber-400",
    cardBgAccent: "rgba(245, 158, 11, 0.05)",
    boxBg: "bg-amber-950/40 border-amber-900/40"
  },
  cosmic: {
    id: "cosmic",
    name: "كوزميك إنديجو",
    icon: "🌌",
    primary: "#6366f1",
    secondary: "#a855f7",
    accent: "#ec4899",
    bgCard: "#0f0c1d",
    borderClass: "border-indigo-500/40 hover:border-indigo-400",
    gradientHeader: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
    glowColor: "rgba(99, 102, 241, 0.14)",
    badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
    tagColor: "text-indigo-400",
    cardBgAccent: "rgba(99, 102, 241, 0.05)",
    boxBg: "bg-indigo-950/40 border-indigo-900/40"
  },
  ruby: {
    id: "ruby",
    name: "روبي القرمزي",
    icon: "🔥",
    primary: "#f43f5e",
    secondary: "#e11d48",
    accent: "#fbbf24",
    bgCard: "#1a080e",
    borderClass: "border-rose-500/40 hover:border-rose-400",
    gradientHeader: "linear-gradient(135deg, #f43f5e 0%, #e11d48 50%, #fbbf24 100%)",
    glowColor: "rgba(244, 63, 94, 0.14)",
    badgeBg: "bg-rose-500/20 text-rose-300 border-rose-500/40",
    tagColor: "text-rose-400",
    cardBgAccent: "rgba(244, 63, 94, 0.05)",
    boxBg: "bg-rose-950/40 border-rose-900/40"
  }
};

/**
 * تحديد الثيم التلقائي بناءً على رقم القسم ومحتوى الدرس
 */
export function getDefaultThemeForSection(sectionId, subtopic = null) {
  const num = parseInt(sectionId, 10);
  
  if (subtopic) {
    const text = `${subtopic.title} ${subtopic.englishTitle || ''}`.toLowerCase();
    if (text.includes('hook') || text.includes('performance') || text.includes('memo') || text.includes('callback')) {
      return 'emerald';
    }
    if (text.includes('test') || text.includes('error') || text.includes('security') || text.includes('bug')) {
      return 'ruby';
    }
    if (text.includes('redux') || text.includes('zustand') || text.includes('state') || text.includes('router') || text.includes('next')) {
      return 'cosmic';
    }
  }

  if (num <= 3) return 'sunset';   // جافاسكريبت والأساسيات
  if (num <= 8) return 'cyber';    // جوهر React والمكونات
  if (num <= 14) return 'emerald'; // الخطافات والأداء
  if (num <= 22) return 'cosmic';  // إدارة الحالة والتوجيه وNext.js
  return 'ruby';                   // الأمان والاختبارات والهندسة المتقدمة
}

/**
 * محرك توليد المخططات المعمارية البصرية SVG (Visual Concept Diagram Generator)
 */
export function generateVisualDiagramForConcept(subtopic, sectionId) {
  const title = (subtopic.title || "").toLowerCase();
  const eng = (subtopic.englishTitle || "").toLowerCase();

  // 1. مخطط صناديق الذاكرة (Memory Box Architecture)
  if (title.includes('متغير') || eng.includes('variable') || title.includes('ذاكرة') || eng.includes('memory') || eng.includes('const')) {
    return {
      type: "memory_boxes",
      label: "مخطط إدارة الذاكرة وتخصيص العناوين (RAM Allocation)",
      nodes: [
        { id: 1, title: "const (صندوق مغلق)", subtitle: "قيمة ثابتة لا تتغير", icon: "🔒", color: "#38bdf8", badge: "Read-Only" },
        { id: 2, title: "ذاكرة RAM الحية", subtitle: "عناوين المؤشرات (Pointers)", icon: "🧠", color: "#818cf8", badge: "0x7FFE" },
        { id: 3, title: "let (صندوق مفتوح)", subtitle: "قيمة مرنة تقبل التحديث", icon: "📦", color: "#34d399", badge: "Mutable" }
      ],
      flowDescription: "تضمن const عدم استبدال المؤشر في الذاكرة، بينما تسمح let بإعادة الإسناد بسلاسة."
    };
  }

  // 2. مخطط دورة حياة وتحديث الحالة (State Cycle Pipeline)
  if (title.includes('state') || title.includes('حالة') || eng.includes('usestate') || title.includes('hook') || eng.includes('dispatch')) {
    return {
      type: "state_cycle",
      label: "دورة تحديث الحالة ورد الفعل البصري (State Reaction Loop)",
      nodes: [
        { id: 1, title: "1. الحدث (Event)", subtitle: "تفاعل المستخدم (نقرة / إدخال)", icon: "👆", color: "#f59e0b", badge: "Trigger" },
        { id: 2, title: "2. الدالة المحدثة", subtitle: "setCount / Dispatch Action", icon: "⚡", color: "#38bdf8", badge: "Dispatch" },
        { id: 3, title: "3. لقطة الحالة (Snapshot)", subtitle: "إنشاء نسخة جديدة غير معدلة", icon: "📸", color: "#a855f7", badge: "Immutable" },
        { id: 4, title: "4. إعادة التصيير (Re-render)", subtitle: "تحديث الشاشة بدقة فائقة", icon: "✨", color: "#10b981", badge: "DOM Update" }
      ],
      flowDescription: "تجمع React التحديثات في دفعات وتعتمد على مقارنة السطح لإعادة تصيير الأجزاء المتأثرة فقط."
    };
  }

  // 3. مخطط تدفق المكونات والخصائص (Component Hierarchy & Props Flow)
  if (title.includes('مكون') || eng.includes('component') || title.includes('props') || eng.includes('props') || title.includes('شجرة')) {
    return {
      type: "component_tree",
      label: "مسار تدفق البيانات الأحادي (Unidirectional Data Flow)",
      nodes: [
        { id: 1, title: "المكون الأب (Parent)", subtitle: "مالك الحالة ومصدر الحقيقة", icon: "👑", color: "#38bdf8", badge: "State Owner" },
        { id: 2, title: "قناة الخصائص (Props)", subtitle: "بيانات للقراءة فقط (Read-only)", icon: "🌊", color: "#818cf8", badge: "Downwards" },
        { id: 3, title: "المكون الابن (Child)", subtitle: "تصيير الواجهة وإرسال الإشارات", icon: "🧩", color: "#34d399", badge: "Pure View" }
      ],
      flowDescription: "تتدفق البيانات من الأعلى إلى الأسفل دائماً، وتصعد الإشارات فقط عبر دوال رد الاتصال (Callbacks)."
    };
  }

  // 4. مخطط الأثر الجانبي والاتصال الخارجي (Effect & Lifecycle Timeline)
  if (title.includes('effect') || title.includes('تأثير') || title.includes('api') || eng.includes('fetch') || title.includes('اتصال')) {
    return {
      type: "lifecycle_pipeline",
      label: "خط زمني للآثار الجانبية والمزامنة (Side Effects Timeline)",
      nodes: [
        { id: 1, title: "ظهور المكون (Mount)", subtitle: "اكتمال بناء واجهة الـ DOM", icon: "🌱", color: "#34d399", badge: "Paint" },
        { id: 2, title: "تنفيذ الأثر (Effect)", subtitle: "جلب البيانات / المزامنة", icon: "📡", color: "#38bdf8", badge: "Async IO" },
        { id: 3, title: "دالة التنظيف (Cleanup)", subtitle: "إلغاء الاشتراكات والمهام", icon: "🧹", color: "#f43f5e", badge: "Unmount" }
      ],
      flowDescription: "يعمل useEffect بعد اكتمال رسم الشاشة لتفادي تجميد واجهة المستخدم أثناء جلب البيانات."
    };
  }

  // 5. المخطط المعماري الهندسي الافتراضي الشامل (Universal Flow Pipeline)
  return {
    type: "universal_flow",
    label: "المخطط الهيكلي الهندسي وتدفق التنفيذ (Architectural Flow)",
    nodes: [
      { id: 1, title: "1. الإعلان والتهيئة", subtitle: subtopic.definition ? subtopic.definition.slice(0, 40) + '...' : "تعريف المفهوم", icon: "🎯", color: "#38bdf8", badge: "Input" },
      { id: 2, title: "2. المعالجة والتحويل", subtitle: "تطبيق المنطق وتفادي التعديل المباشر", icon: "⚙️", color: "#818cf8", badge: "Process" },
      { id: 3, title: "3. المخرجات والاستقرار", subtitle: "تحديث الشاشة وكتابة كود نقي ومستقر", icon: "🚀", color: "#10b981", badge: "Result" }
    ],
    flowDescription: "بناء معماري منظم يحافظ على سهولة الصيانة والأداء العالي والاستقرار."
  };
}

/**
 * توليد هيكل إنفوجرافيك متكامل وشامل لأي درس
 */
export function buildInfographicForSubtopic(subtopic, sectionData = null) {
  if (!subtopic) return null;

  const existing = subtopic.infographic || {};
  const sectionId = sectionData?.id || (typeof subtopic.id === 'string' ? parseInt(subtopic.id.split('.')[0], 10) : 1);
  const sectionTitle = sectionData?.title || `القسم ${sectionId}`;

  // تحديد الثيم الافتراضي
  const defaultTheme = existing.theme || getDefaultThemeForSection(sectionId, subtopic);

  // توليد المخطط المعماري البصري
  const visualDiagram = existing.visualDiagram || generateVisualDiagramForConcept(subtopic, sectionId);

  // توليد الخطوات الثلاثية
  let steps = existing.steps;
  if (!steps || !Array.isArray(steps) || steps.length === 0) {
    if (subtopic.howItWorks && Array.isArray(subtopic.howItWorks) && subtopic.howItWorks.length >= 3) {
      steps = subtopic.howItWorks.slice(0, 3).map((hw, idx) => ({
        title: typeof hw === 'string' ? `خطوة ${idx + 1}` : (hw.title || `المرحلة ${idx + 1}`),
        desc: typeof hw === 'string' ? hw : (hw.desc || hw.text || '')
      }));
    } else {
      steps = [
        {
          title: "1. التهيئة والإعلان (Declaration & Setup)",
          desc: subtopic.definition ? subtopic.definition.slice(0, 110) + '...' : `تحديد وحجز مساحة المفهوم وتمرير القيم المبدئية بدقة.`
        },
        {
          title: "2. مسار التنفيذ والمعالجة (Execution Flow)",
          desc: subtopic.why ? subtopic.why.slice(0, 110) + '...' : `تتبع التفاعل وتحديث البيانات دون تعديل المتغيرات الأصلية مباشرة.`
        },
        {
          title: "3. رد الفعل والتصيير (Reaction & Render)",
          desc: `مزامنة الواجهة المرئية تلقائياً مع أحدث حالة لضمان تجربة مستخدم سلسة وفورية.`
        }
      ];
    }
  }

  // الملخص التنفيذي المركز
  const executiveSummary = existing.summary || 
    (subtopic.definition ? subtopic.definition.slice(0, 180) + '...' : "مفهوم برمجي أساسي في تطوير تطبيقات الويب الحديثة.");

  // القاعدة الذهبية والمحاذير
  const goldenRule = existing.goldenRule || 
    (subtopic.rules && subtopic.rules[0]) || 
    (subtopic.goldenRule) || 
    "افهم فلسفة المفهوم أولاً، واكتب كوداً نقياً وصريحاً يتفادى الآثار الجانبية المباشرة.";

  const pitfall = existing.pitfall || 
    (subtopic.pitfalls && subtopic.pitfalls[0]) || 
    "تجنب التعديل المباشر أو استدعاء الأنماط غير المتزامنة خارج دورة حياة React.";

  return {
    id: subtopic.id,
    sectionId,
    sectionTitle,
    topicTitle: subtopic.topicTitle || "",
    title: subtopic.title,
    englishTitle: subtopic.englishTitle || subtopic.technicalTerm?.english || "React Concept",
    badge: existing.badge || `الدرس ${subtopic.id} • ${sectionTitle}`,
    theme: defaultTheme,
    visualDiagram,
    executiveSummary,
    definition: subtopic.definition || "مفهوم أساسي لبناء تطبيقات تفاعلية فائقة السرعة.",
    analogy: subtopic.analogy || "مثل تروس الساعة الدقيقة؛ كل جزء يؤدي وظيفة محددة لتدور المنظومة كاملة بتناغم.",
    why: subtopic.why || "حل جذري لمشاكل إدارة الحالة وتكرار الكود وتسريع تطوير واجهات الويب.",
    codeSnippet: subtopic.simpleCode || subtopic.syntax || "// كود توضيحي للمفهوم\nconst example = true;",
    steps,
    goldenRule,
    pitfall,
    terms: subtopic.terms || []
  };
}

// ذاكرة تخزين مؤقت لجميع إنفوجرافيكس الدروس لتسريع التصفح
let cachedAllInfographics = null;

/**
 * استخراج مصفوفة كاملة لكافة بطاقات الإنفوجرافيك عبر جميع الأقسام المتاحة
 */
export function getAllInfographics() {
  if (cachedAllInfographics) return cachedAllInfographics;

  const list = [];

  AVAILABLE_SECTIONS.forEach(section => {
    if (!section || !section.topics) return;

    section.topics.forEach(topic => {
      if (!topic || !topic.subtopics) return;

      topic.subtopics.forEach(sub => {
        const enrichedSub = {
          ...sub,
          topicTitle: topic.title,
          topicId: topic.id
        };
        const info = buildInfographicForSubtopic(enrichedSub, section);
        if (info) {
          list.push(info);
        }
      });
    });
  });

  cachedAllInfographics = list;
  return list;
}

/**
 * الحصول على إنفوجرافيكس قسم محدد
 */
export function getInfographicsBySectionId(sectionId) {
  const all = getAllInfographics();
  const numericId = parseInt(sectionId, 10);
  return all.filter(item => item.sectionId === numericId);
}

/**
 * البحث في الإنفوجرافيك بالكلمات المفتاحية
 */
export function searchInfographics(query) {
  const all = getAllInfographics();
  if (!query || !query.trim()) return all;

  const q = query.trim().toLowerCase();
  return all.filter(item => {
    return (
      item.title.toLowerCase().includes(q) ||
      item.englishTitle.toLowerCase().includes(q) ||
      item.id.toLowerCase().includes(q) ||
      item.sectionTitle.toLowerCase().includes(q) ||
      item.definition.toLowerCase().includes(q) ||
      (item.analogy && item.analogy.toLowerCase().includes(q))
    );
  });
}
