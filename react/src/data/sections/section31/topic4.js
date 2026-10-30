// src/data/sections/section31/topic4.js
// القسم 31: مشاريع تطبيقية للمبتدئين
// الموضوع 4: مشروع تطبيق الملاحظات (Notes Application)

export const topic4 = {
  id: "31.4",
  title: "مشروع تطبيق الملاحظات (Notes App)",
  description: "دليل معماري وعملي متكامل لتطوير تطبيق ملاحظات احترافي مستوحى من Google Keep وNotion؛ يغطي إنشاء الملاحظات الثرية، التثبيت في الأعلى (Pinning)، التصنيف بالوسوم، التحرير المباشر (Inline Editing)، البحث الفوري فائق السرعة، تصدير الملاحظات بصيغة Markdown، وتخصيص ألوان البطاقات.",
  subtopics: [
    {
      id: "31.4.a",
      title: "فكرة المشروع والمتطلبات (Project Scope & Requirements)",
      englishTerm: {
        term: "Project Scope & Domain Requirements",
        pronunciation: "بروجيكت سكوب آند دومين ريكوايرمنتس",
        meaning: "نطاق المشروع والمتطلبات الوظيفية لمجال الملاحظات"
      },
      description: "تطبيق الملاحظات (Notes App) هو مشروع قياسي لا غنى عنه للمطور المبتدئ؛ لأنه يتعامل مع عمليات إدارة البيانات الكاملة (CRUD: Create, Read, Update, Delete) على كائنات غير متجانسة وغنية بالتفاصيل. يتطلب المشروع دعماً لعناوين ونصوص الملاحظات متعددة الأسطر، وتمييز الملاحظات المهمة عبر التثبيت في الأعلى (Pinned Notes)، وتصنيفها بوسوم ملونة (Tags)، ودعم تغيير لون خلفية الملاحظة لسهولة التنظيم البصري، وحفظ البيانات الدائم في متصفح العميل عبر LocalStorage مع إمكانية تصديرها كملفات نصية.",
      analogy: "يشبه لوحة الملاحظات الفلينية المعلقة في مكتب عمل؛ حيث تثبت الأوراق المهمة بالدبابيس في القسم العلوي لتبقى تحت ناظريك، وتلون الأوراق باللون الأصفر للأفكار والوردي للمواعيد والأخضر للمشاريع، مع إمكانية نزع أي ورقة أو تعديلها بأي وقت.",
      whyItMatters: "يصقل هذا المشروع قدرة المطور على تصميم نماذج بيانات مرنة (Data Modeling)، وإدارة الترتيب والفرز المتعدد (Multi-criteria Sorting)، والتعامل مع النوافذ المنبثقة للتحرير (Modal Editing) أو التعديل الفوري.",
      syntax: `// نموذج بيانات الملاحظة الفردية
interface NoteItem {
  id: string;
  title: string;
  content: string;
  isPinned: boolean;
  color: string;
  tags: string[];
  createdAt: number;
  updatedAt: number;
}`,
      simpleExample: {
        title: "تعريف كائن مخطط الملاحظات والتحقق من صحة المدخلات",
        code: `// نموذج افتراضي لإنشاء ملاحظة جديدة
function createNoteModel(title, content, tags = [], color = "#ffffff") {
  // التحقق من وجود محتوى أو عنوان على الأقل
  if (!title.trim() && !content.trim()) {
    // رمي خطأ في حال كانت الملاحظة خاوية بالكامل
    throw new Error("لا يمكن إنشاء ملاحظة فارغة تماماً بدون عنوان أو نص.");
  }

  // إرجاع كائن الملاحظة المكتمل
  return {
    // معرف فريد للملاحظة
    id: "note_" + Date.now(),
    // عنوان الملاحظة
    title: title.trim(),
    // النص الرئيسي
    content: content.trim(),
    // حالة التثبيت في الأعلى
    isPinned: false,
    // لون خلفية البطاقة
    color: color,
    // مصفوفة الوسوم
    tags: Array.isArray(tags) ? tags : [],
    // توقيت الإنشاء
    createdAt: Date.now(),
    // توقيت آخر تعديل
    updatedAt: Date.now()
  };
}

// تجربة إنشاء ملاحظة نموذجية
const myNote = createNoteModel("خطة عطلة نهاية الأسبوع", "زيارة المعرض الفني وقراءة فصل من كتاب React", ["شخصي", "قراءة"], "#fef08a");
// طباعة الملاحظة في وحدة التحكم
console.log("الملاحظة المنشأة بنجاح:", myNote);`
      },
      advancedExample: {
        title: "مخطط هيكلي لمعمارية إدارة حالة الملاحظات مع الفرز والتجميع",
        code: `// فئة إدارة مخزن الملاحظات المنظم (Domain Store)
class NotesDomainManager {
  // المشيد يجهز مصفوفة الملاحظات
  constructor(initialNotes = []) {
    // مصفوفة حفظ الملاحظات
    this.notes = initialNotes;
  }

  // إضافة ملاحظة جديدة
  add(note) {
    // إضافة في بداية المصفوفة
    this.notes.unshift(note);
  }

  // فرز الملاحظات: الملاحظات المثبتة أولاً ثم حسب تاريخ التحديث الأحدث
  getSortedNotes() {
    // نسخ المصفوفة لتفادي تعديل الأصل
    return [...this.notes].sort((a, b) => {
      // إذا كانت الأولى مثبتة والثانية لا، تأتي الأولى أولاً
      if (a.isPinned && !b.isPinned) return -1;
      // إذا كانت الثانية مثبتة والأولى لا، تأتي الثانية أولاً
      if (!a.isPinned && b.isPinned) return 1;
      // في حال تساوت حالة التثبيت، نرتب بالأحدث تحديثاً
      return b.updatedAt - a.updatedAt;
    });
  }

  // تجميع الملاحظات إلى قسمين: مثبتة وعادية
  getPinnedAndOthers() {
    // استخراج الملاحظات المثبتة
    const pinned = this.notes.filter(n => n.isPinned);
    // استخراج الملاحظات العادية
    const others = this.notes.filter(n => !n.isPinned);
    // إرجاع الكائن المزدوج
    return { pinned, others };
  }
}

// اختبار عملي للفئة
const manager = new NotesDomainManager([
  { id: "1", title: "ملاحظة قديمة", content: "...", isPinned: false, updatedAt: 100 },
  { id: "2", title: "ملاحظة مثبتة مهمة", content: "...", isPinned: true, updatedAt: 150 },
  { id: "3", title: "فكرة سريعة", content: "...", isPinned: false, updatedAt: 200 }
]);

// طباعة نتائج التجميع
const grouped = manager.getPinnedAndOthers();
console.log("الملاحظات المثبتة في القمة:", grouped.pinned.map(n => n.title));
console.log("الملاحظات العادية:", grouped.others.map(n => n.title));`
      },
      outputExplanation: "يوضح هذا التأسيس تقسيم الملاحظات إلى مجموعتين حيويتين (Pinned و Others)، وتحديد الترتيب الأبجدي والزمني الصحيح؛ بحيث تظل الملاحظات المثبتة دوماً في صدارة الواجهة لتسهيل وصول المستخدم لأولوياته القصوى.",
      commonMistakes: [
        {
          wrong: "// تخزين نص الملاحظة كمتغير نصي مفرد دون كائن مركب يحمل id ولون وحالة التثبيت",
          correct: "// نمذجة الملاحظة ككائن بيانات شامل يحوي معرفاً وحالة تثبيت وألوان ووسوماً وطوابع زمنية للإنشاء والتعديل"
        }
      ],
      bestPractices: [
        "فصل الملاحظات المثبتة (Pinned) بصرياً عن بقية الملاحظات لتوضيح الأهمية للمستخدم",
        "تحديث حقل `updatedAt` تلقائياً في كل مرة يتم فيها تعديل أي حقل بالملاحظة لتسهيل الفرز الزمني",
        "التحقق من عدم السماح بحفظ ملاحظة خاوية تماماً من العنوان والمحتوى لتجنب تراكم البطاقات الفارغة"
      ],
      infographic: {
        title: "هندسة بيانات ودورة حياة الملاحظة (Note Architecture)",
        nodes: [
          { label: "نموذج الملاحظة (Model)", detail: "id, title, content, isPinned, color, tags, timestamps" },
          { label: "منطق الفرز (Sorting)", detail: "المثبتة في القمة أولاً ثم الترتيب الزمني للأحدث" },
          { label: "التصنيف (Taxonomy)", detail: "تصنيف عبر الألوان البصرية والوسوم النصية" },
          { label: "الحفظ الدائم (Persistence)", detail: "مزامنة فورية مع LocalStorage وتصدير كـ Markdown" }
        ]
      }
    },
    {
      id: "31.4.b",
      title: "إنشاء الملاحظات وعرضها بشبكة متجاوبة (Note Creation & Responsive Grid)",
      englishTerm: {
        term: "Note Creation & Responsive Masonry Grid",
        pronunciation: "نوت كرييشن آند ريسبونسيف ماسونري جريد",
        meaning: "إنشاء الملاحظات وعرضها بشبكة متجاوبة متداخلة"
      },
      description: "يتطلب نموذج إنشاء الملاحظات (Note Creator) تصميماً مرناً يحاكي سلوك تطبيقات الملاحظات الحديثة: يبدأ الحقل كشريط مدمج بسيط بنص 'أضف ملاحظة جديدة...'، وعند النقر عليه يتوسع بسلاسة ليكشف عن حقل العنوان، ومساحة النص متعدد الأسطر، وخيارات اختيار الألوان والوسوم وزر التثبيت. بعد الحفظ، تُعرض الملاحظات في شبكة متجاوبة (Responsive Grid أو Masonry-style) تتكيف مع الشاشات المختلفة (عمود واحد للهواتف، وعمودان إلى ثلاثة للأجهزة اللوحية والمكتبية).",
      analogy: "يشبه دفتر المذكرات الجلدي الصغير القابل للتوسيع؛ عند إغلاقه لا يشغل أي حيز في جيبك، وعند فتحه تتسع صفحاته لكتابة الفقرات والرسومات وتلوين الهوامش بحرية تامة.",
      whyItMatters: "يوفر تجربة كتابة سريعة دون مغادرة الصفحة الرئيسية (In-place Creation)، مع عرض جذاب يتجنب هدر المساحات البيضاء الشاغرة بفضل التخطيط الشبكي الذكي.",
      syntax: `// التخطيط الشبكي المتجاوب باستخدام Tailwind CSS
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {notes.map(note => <NoteCard key={note.id} note={note} />)}
</div>`,
      simpleExample: {
        title: "مكون نموذج إنشاء الملاحظة البسيط مع إمكانية التمدد",
        code: `import React, { useState } from "react";

// مكون نموذج إضافة الملاحظة السريعة
function SimpleNoteForm({ onAddNote }) {
  // حالة فتح النموذج المتسع
  const [isExpanded, setIsExpanded] = useState(false);
  // حالة العنوان
  const [title, setTitle] = useState("");
  // حالة النص
  const [content, setContent] = useState("");

  // معالجة إضافة الملاحظة
  const handleCreate = (e) => {
    // منع إعادة التحميل
    e.preventDefault();
    // التحقق من وجود محتوى
    if (!title.trim() && !content.trim()) return;

    // استدعاء دالة الإضافة
    onAddNote({
      id: "note_" + Date.now(),
      title: title.trim(),
      content: content.trim(),
      isPinned: false,
      color: "#ffffff"
    });

    // تفريغ الحقول وإغلاق التمدد
    setTitle("");
    setContent("");
    setIsExpanded(false);
  };

  return (
    <div style={{ maxWidth: "480px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <form
        onSubmit={handleCreate}
        style={{
          border: "1px solid #cbd5e1",
          borderRadius: "12px",
          padding: "12px 16px",
          boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
          backgroundColor: "#ffffff"
        }}
      >
        {/* حقل العنوان يظهر فقط عند التمدد */}
        {isExpanded && (
          <input
            type="text"
            placeholder="العنوان..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "8px 0", border: "none", outline: "none", fontWeight: "bold", fontSize: "16px" }}
          />
        )}

        {/* حقل النص الرئيسي */}
        <textarea
          placeholder="اكتب ملاحظة جديدة..."
          value={content}
          onFocus={() => setIsExpanded(true)}
          onChange={(e) => setContent(e.target.value)}
          rows={isExpanded ? 3 : 1}
          style={{ width: "100%", padding: "8px 0", border: "none", outline: "none", resize: "none", fontSize: "14px" }}
        />

        {/* أزرار الحفظ والإغلاق */}
        {isExpanded && (
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "10px" }}>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              style={{ background: "transparent", border: "none", color: "#64748b", cursor: "pointer", fontSize: "13px" }}
            >
              إلغاء
            </button>
            <button
              type="submit"
              style={{ backgroundColor: "#0284c7", color: "#fff", border: "none", padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold", fontSize: "13px" }}
            >
              حفظ الملاحظة
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default SimpleNoteForm;`
      },
      advancedExample: {
        title: "مكون نموذج الملاحظة الاحترافي المتوسع مع منتقي الألوان وشبكة البطاقات المتجاوبة",
        code: `import React, { useState, useRef, useEffect } from "react";

// لوحة الألوان المتاحة للملاحظات
const NOTE_PALETTES = [
  { name: "أبيض", hex: "#ffffff", border: "#e2e8f0" },
  { name: "أصفر دافئ", hex: "#fef08a", border: "#fde047" },
  { name: "أخضر نعناعي", hex: "#bbf7d0", border: "#86efac" },
  { name: "أزرق سماوي", hex: "#bae6fd", border: "#7dd3fc" },
  { name: "وردي ناعم", hex: "#fbcfe8", border: "#f9a8d4" },
  { name: "لافندر بنفسجي", hex: "#e9d5ff", border: "#d8b4fe" }
];

// نموذج إنشاء الملاحظة المتطور
export function ExpandableNoteComposer({ onSaveNote }) {
  // حالة تمدد الحاوية
  const [isOpen, setIsOpen] = useState(false);
  // حالة العنوان
  const [title, setTitle] = useState("");
  // حالة المحتوى
  const [content, setContent] = useState("");
  // حالة التثبيت الفوري
  const [isPinned, setIsPinned] = useState(false);
  // اللون المختار
  const [selectedColor, setSelectedColor] = useState(NOTE_PALETTES[0].hex);
  // نص الوسم المؤقت
  const [tagInput, setTagInput] = useState("");
  // مصفوفة الوسوم
  const [tags, setTags] = useState([]);

  // مرجع للحاوية لضبط سلوك النقر الخارجي
  const formRef = useRef(null);

  // إغلاق الحاوية تلقائياً عند النقر في الخارج إذا كانت فارغة
  useEffect(() => {
    const handleOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        if (!title.trim() && !content.trim()) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [title, content]);

  // إضافة وسم جديد عند الضغط على مفتاح Enter
  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  // تقديم وحفظ الملاحظة
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;

    onSaveNote({
      id: "note_" + Date.now(),
      title: title.trim(),
      content: content.trim(),
      isPinned,
      color: selectedColor,
      tags,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });

    // إعادة ضبط الحقول للوضع الأولي
    setTitle("");
    setContent("");
    setIsPinned(false);
    setSelectedColor(NOTE_PALETTES[0].hex);
    setTags([]);
    setIsOpen(false);
  };

  return (
    <div ref={formRef} className="w-full max-w-xl mx-auto mb-8 transition-all duration-300">
      <form
        onSubmit={handleSubmit}
        style={{ backgroundColor: selectedColor }}
        className="rounded-3xl border border-slate-200 dark:border-slate-700 shadow-md p-4 sm:p-5 text-slate-800 transition-colors"
      >
        {/* صف العنوان وزر التثبيت يظهران عند الفتح */}
        {isOpen && (
          <div className="flex items-center justify-between gap-2 mb-2">
            <input
              type="text"
              placeholder="عنوان الملاحظة..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full font-bold text-base bg-transparent border-none outline-none placeholder:text-slate-400"
            />
            {/* زر التثبيت في القمة */}
            <button
              type="button"
              onClick={() => setIsPinned(!isPinned)}
              title={isPinned ? "إلغاء التثبيت" : "تثبيت في القمة"}
              className={\`p-1.5 rounded-full text-base transition \${isPinned ? "bg-amber-400 text-white" : "text-slate-400 hover:text-slate-600"}\`}
            >
              📌
            </button>
          </div>
        )}

        {/* حقل كتابة النص الرئيسي للملاحظة */}
        <textarea
          placeholder="اكتب فكرة أو ملاحظة جديدة..."
          value={content}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => setContent(e.target.value)}
          rows={isOpen ? 3 : 1}
          className="w-full text-sm bg-transparent border-none outline-none resize-none placeholder:text-slate-400 leading-relaxed"
        />

        {/* عرض الوسوم المضافة */}
        {isOpen && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 my-2">
            {tags.map((t, i) => (
              <span key={i} className="text-xs bg-black/10 text-slate-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                #{t}
                <button type="button" onClick={() => setTags(tags.filter((_, idx) => idx !== i))} className="text-[10px]">✕</button>
              </span>
            ))}
          </div>
        )}

        {/* شريط الأدوات السفلي الموسع */}
        {isOpen && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-black/10 mt-2">
            {/* باليت اختيار الألوان وإضافة الوسوم */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* دوائر الألوان */}
              <div className="flex items-center gap-1.5">
                {NOTE_PALETTES.map((palette) => (
                  <button
                    key={palette.hex}
                    type="button"
                    onClick={() => setSelectedColor(palette.hex)}
                    style={{ backgroundColor: palette.hex, borderColor: palette.border }}
                    className={\`w-5 h-5 rounded-full border shadow-sm transition \${selectedColor === palette.hex ? "scale-125 ring-2 ring-sky-500" : "hover:scale-110"}\`}
                    title={palette.name}
                  />
                ))}
              </div>

              {/* حقل إدخال وسم سريع */}
              <input
                type="text"
                placeholder="# وسم (اضغط Enter)"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
                className="text-xs bg-white/50 border border-slate-300 rounded-lg px-2 py-1 outline-none w-28 placeholder:text-slate-400"
              />
            </div>

            {/* أزرار الإجراءات (إلغاء وحفظ) */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-xs text-slate-600 hover:text-slate-900 px-3 py-1.5"
              >
                إغلاق
              </button>
              <button
                type="submit"
                className="text-xs font-bold bg-slate-900 text-white dark:bg-sky-600 px-4 py-2 rounded-xl shadow hover:opacity-90 transition"
              >
                حفظ
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}`
      },
      outputExplanation: "يقدم هذا المكون تجربة إنشاء غنية ومتمددة تدمج كتابة العنوان، والنص متعدد الأسطر، ومنتقي ألوان البطاقات، وإضافة وسوم الكلمات الدلالية (#Tags) بأسلوب مريح بصرياً ودون ازدحام في الشاشة.",
      commonMistakes: [
        {
          wrong: "// استخدام حقل نموذج دائم الاتساع يستهلك مساحة عمودية ضخمة ويجعل رؤية الملاحظات السابقة صعبة على الشاشات الصغيرة",
          correct: "// استخدام نموذج إنشاء متمدد يبدأ كسطر إدخال رشيق ويتسع تلقائياً عند تركيز المؤشر (onFocus) عليه"
        }
      ],
      bestPractices: [
        "تمكين إضافة الوسوم عبر مفتاح Enter لتسريع عملية تصنيف الملاحظات بدون خطوات إضافية",
        "استخدام ألوان متباينة برفق (Soft Pastels) لتوفير تجربة قراءة مريحة للعين وتفادي الألوان الفاقعة المزعجة",
        "توفير زر إلغاء سريع يعيد طي النموذج عند الرغبة في التراجع"
      ],
      infographic: {
        title: "حالات نموذج إنشاء الملاحظة التفاعلي",
        nodes: [
          { label: "الحالة المغلقة (Collapsed)", detail: "حقل مدمج بعبارة 'اكتب ملاحظة جديدة...'" },
          { label: "حالة التمدد (Expanded)", detail: "إظهار حقل العنوان وتكبير مساحة الأسطر" },
          { label: "لوحة الأدوات (Toolbox)", detail: "منتقي ألوان الباستيل، إدخال الوسوم، ودبوس التثبيت" },
          { label: "الحفظ والانكماش (Submit)", detail: "توليد كائن الملاحظة وإعادة النموذج لحالته الرشيقة" }
        ]
      }
    },
    {
      id: "31.4.c",
      title: "تعديل الملاحظات وحذفها وتثبيتها في الأعلى (Editing, Deleting & Pinning)",
      englishTerm: {
        term: "Note Mutation: Edit, Delete & Pin Toggle",
        pronunciation: "نوت ميوتيشن: إيديت، ديليت آند بن توجل",
        meaning: "تعديل محتوى الملاحظات، الحذف، والتبديل بين التثبيت وعدمه"
      },
      description: "تحتاج بطاقة الملاحظة (Note Card) إلى مجموعة أدوات تفاعلية لإجراء التعديلات الفورية بسلاسة؛ يتضمن ذلك إمكانية النقر على أيقونة الدبوس 📌 لتبديل حالة التثبيت (Pin/Unpin) ونقل الملاحظة فورياً إلى قسم 'الملاحظات المثبتة' في القمة، وتوفير زر الحذف 🗑️ مع إشعار تراجع سريع (Undo Toast) لمنع الحذف العرضي، بالإضافة إلى ميزة فتح الملاحظة في نافذة منبثقة (Modal Dialog) أو التحرير المباشر الموضعي (Inline Editing) لإجراء التعديلات وحفظها بمجرد الخروج.",
      analogy: "تشبه لوحة المهام المغناطيسية؛ حيث يمكنك تحريك الملاحظة للأعلى بمغناطيس أحمر لتمييزها، أو رميها في سلة المهملات، أو إعادة فتحها بقلم لكتابة تفاصيل إضافية ثم تثبيتها مجدداً.",
      whyItMatters: "يوضح كيفية تطبيق عمليات التعديل غير المباشر (Immutable State Updates) على مصفوفات الكائنات في React باستخدام دالة `map` لتحديث عنصر معين، ودالة `filter` لحذف عنصر بناءً على الـ ID.",
      syntax: `// تبديل حالة التثبيت لملاحظة محددة
const togglePin = (id) => {
  setNotes(prev => prev.map(note => 
    note.id === id ? { ...note, isPinned: !note.isPinned, updatedAt: Date.now() } : note
  ));
};`,
      simpleExample: {
        title: "دوال التثبيت والحذف لملاحظات React باستخدام الدوال النقية",
        code: `// دالة مساعدة لتبديل التثبيت بشكل نقي
function toggleNotePin(notesList, targetId) {
  // استخدام map لإنشاء مصفوفة جديدة ومحدثة
  return notesList.map(note => {
    // التحقق من تطابق المعرف
    if (note.id === targetId) {
      // إرجاع كائن جديد بنسخة معدلة
      return {
        ...note,
        // قلب القيمة المنطقية للتثبيت
        isPinned: !note.isPinned,
        // تحديث الطابع الزمني
        updatedAt: Date.now()
      };
    }
    // إبقاء بقية الملاحظات دون تغيير
    return note;
  });
}

// دالة مساعدة لحذف ملاحظة بناءً على المعرف
function deleteNoteById(notesList, targetId) {
  // ترشيح المصفوفة لاستبعاد الملاحظة المطلوبة
  return notesList.filter(note => note.id !== targetId);
}

// تجربة الدوال
const initialNotes = [
  { id: "1", title: "ملاحظة أ", isPinned: false, updatedAt: 100 },
  { id: "2", title: "ملاحظة ب", isPinned: true, updatedAt: 200 }
];

// تبديل تثبيت الملاحظة الأولى
const updated = toggleNotePin(initialNotes, "1");
console.log("بعد التثبيت:", updated[0].isPinned); // true

// حذف الملاحظة الثانية
const afterDelete = deleteNoteById(updated, "2");
console.log("العدد المتبقي بعد الحذف:", afterDelete.length); // 1`
      },
      advancedExample: {
        title: "مكون بطاقة ملاحظة احترافي مع دعم التثبيت، والتحرير الموضعي الفوري، وإجراءات الحذف",
        code: `import React, { useState } from "react";

// مكون بطاقة الملاحظة الفردية التفاعلية
export function InteractiveNoteCard({ note, onUpdateNote, onDeleteNote, onTogglePin }) {
  // حالة تفعيل وضع التحرير المباشر
  const [isEditing, setIsEditing] = useState(false);
  // حالة العنوان أثناء التعديل
  const [editedTitle, setEditedTitle] = useState(note.title);
  // حالة النص أثناء التعديل
  const [editedContent, setEditedContent] = useState(note.content);

  // حفظ التعديلات والخروج من وضع التحرير
  const handleSaveEdit = () => {
    // التأكد من عدم ترك الملاحظة فارغة
    if (editedTitle.trim() || editedContent.trim()) {
      onUpdateNote(note.id, {
        title: editedTitle.trim(),
        content: editedContent.trim(),
        updatedAt: Date.now()
      });
    } else {
      // استعادة القيم السابقة في حال محاولة حفظ فراغ كامل
      setEditedTitle(note.title);
      setEditedContent(note.content);
    }
    setIsEditing(false);
  };

  return (
    <div
      style={{ backgroundColor: note.color || "#ffffff" }}
      className="group relative flex flex-col justify-between rounded-3xl p-5 border border-slate-200 dark:border-slate-750 shadow-sm hover:shadow-md transition-all duration-200"
    >
      {/* رأس البطاقة: العنوان أو حقل تحريره مع زر التثبيت */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full font-bold text-sm bg-black/5 dark:bg-white/10 rounded-lg px-2 py-1 outline-none"
              placeholder="العنوان..."
              autoFocus
            />
          ) : (
            <h3
              onClick={() => setIsEditing(true)}
              className="font-bold text-slate-900 text-sm cursor-pointer hover:opacity-80 line-clamp-2"
            >
              {note.title || "بدون عنوان"}
            </h3>
          )}

          {/* زر تبديل التثبيت الدبوسي */}
          <button
            onClick={() => onTogglePin(note.id)}
            title={note.isPinned ? "إلغاء التثبيت" : "تثبيت في القمة"}
            className={\`p-1 rounded-full text-sm transition \${note.isPinned ? "text-amber-500 scale-110" : "text-slate-300 hover:text-slate-500 opacity-60 group-hover:opacity-100"}\`}
          >
            📌
          </button>
        </div>

        {/* جسم الملاحظة: المحتوى أو حقل التعديل المتعدد */}
        {isEditing ? (
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            rows={4}
            className="w-full text-xs bg-black/5 dark:bg-white/10 rounded-lg p-2 outline-none resize-none leading-relaxed mt-1"
          />
        ) : (
          <p
            onClick={() => setIsEditing(true)}
            className="text-xs text-slate-700 leading-relaxed cursor-pointer hover:opacity-80 whitespace-pre-wrap line-clamp-6"
          >
            {note.content}
          </p>
        )}

        {/* عرض الوسوم المصاحبة */}
        {note.tags && note.tags.length > 0 && !isEditing && (
          <div className="flex flex-wrap gap-1 mt-3">
            {note.tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] bg-black/5 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ذيل البطاقة: أزرار الحفظ أو أدوات الإجراءات السريعة */}
      <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between">
        {isEditing ? (
          <div className="flex items-center gap-2 w-full justify-end">
            <button
              onClick={() => {
                setEditedTitle(note.title);
                setEditedContent(note.content);
                setIsEditing(false);
              }}
              className="text-[11px] text-slate-500 hover:text-slate-800 px-2 py-1"
            >
              إلغاء
            </button>
            <button
              onClick={handleSaveEdit}
              className="text-[11px] font-bold bg-slate-900 text-white px-3 py-1 rounded-lg"
            >
              تم
            </button>
          </div>
        ) : (
          <>
            {/* وقت آخر تعديل */}
            <span className="text-[10px] text-slate-400">
              {new Date(note.updatedAt).toLocaleDateString("ar-EG", { month: "short", day: "numeric" })}
            </span>

            {/* شريط الإجراءات يظهر عند تمرير الفأرة */}
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* زر التعديل */}
              <button
                onClick={() => setIsEditing(true)}
                title="تعديل"
                className="p-1 text-slate-400 hover:text-sky-600 text-xs"
              >
                ✏️
              </button>
              {/* زر الحذف */}
              <button
                onClick={() => onDeleteNote(note.id)}
                title="حذف"
                className="p-1 text-slate-400 hover:text-rose-600 text-xs"
              >
                🗑️
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}`
      },
      outputExplanation: "تتيح هذه البطاقة تحرير المحتوى مباشرة بمجرد النقر عليه (Inline Editing) دون الحاجة لفتح نوافذ منبثقة، وتخفي أدوات الحذف والتعديل حتى يمرر المستخدم الفأرة لتقليل الفوضى البصرية.",
      commonMistakes: [
        {
          wrong: "// تعديل كائن الملاحظة الأصلي مباشرة عبر note.isPinned = true ثم استدعاء setNotes(notes)، مما يكسر آلية رصد التغييرات في React",
          correct: "// دائماً استخدم تحديثاً نقياً (Pure Immutable Update) عبر دالة map وإرجاع كائن جديد بنسخة معدلة {...note, isPinned: !note.isPinned}"
        }
      ],
      bestPractices: [
        "إظهار شريط إجراءات البطاقة (الحذف والتعديل) عند التحويم (Hover) للحفاظ على نظافة وهدوء واجهة المستخدم",
        "تحديث تاريخ `updatedAt` عند كل عملية تعديل لضمان دقة فرز الملاحظات حسب أحدث نشاط",
        "توفير خيار تأكيد الحذف أو شريط تراجع (Undo Toast) لحماية بيانات المستخدم من الضغطات العفوية"
      ],
      infographic: {
        title: "إجراءات التحكم في بطاقة الملاحظة",
        nodes: [
          { label: "تبديل التثبيت 📌", detail: "نقل فوري بين قسم المثبتات والقسم العادي" },
          { label: "التحرير الموضعي ✏️", detail: "النقر للتحرير المباشر داخل نفس البطاقة" },
          { label: "الحذف الآمن 🗑️", detail: "إزالة الملاحظة مع إمكانية التراجع الفوري" },
          { label: "التصنيف البصري 🎨", detail: "تحديث لون البطاقة وتعيين الوسوم" }
        ]
      }
    },
    {
      id: "31.4.d",
      title: "تصنيف الملاحظات بالوسوم (Tags & Category Management)",
      englishTerm: {
        term: "Tags, Taxonomy & Category Management",
        pronunciation: "تاجز، تاكسونومي آند كاتيجوري مانجمنت",
        meaning: "إدارة الوسوم والتصنيف والتنظيم الموضوعي"
      },
      description: "مع تزايد عدد الملاحظات إلى العشرات والمئات، يصبح البحث والتصفح البسيط أمراً شاقاً. يوفر نظام الوسوم (Tags System) طبقة تصنيف أفقية مرنة (Non-hierarchical Taxonomy)؛ حيث يمكن للملاحظة الواحدة أن تحمل وسوماً متعددة مثل `#عمل` و `#أفكار` و `#مهم`. يتضمن هذا النظام شريط تصفية علوي يعرض قائمة بجميع الوسوم الفريدة المستخدمة في التطبيق مع عدد الملاحظات في كل وسم، مما يتيح للمستخدم النقر على أي وسم لفلترة الواجهة فورياً وعرض الملاحظات المتعلقة به فقط.",
      analogy: "تشبه بطاقات الفهرسة في المكتبات الجامعية الكبرى؛ حيث يُرفق مع الكتاب عدة وسوم كالمؤلف، وسنة النشر، والموضوع الرئيسي، فيستطيع الباحث الوصول لنفس الكتاب من عدة مداخل مختلفة.",
      whyItMatters: "يعلم المطور كيفية استخراج مصفوفة عناصر فريدة (Unique Items Array) باستخدام `Set` في JavaScript، وكيفية بناء علاقات الربط والفلترة المتقاطعة (Cross-filtering) في واجهات React.",
      syntax: `// استخراج جميع الوسوم الفريدة من جميع الملاحظات
const allTags = Array.from(new Set(notes.flatMap(note => note.tags || [])));`,
      simpleExample: {
        title: "استخراج قائمة الوسوم الفريدة مع عدد تكرار كل وسم",
        code: `// مصفوفة ملاحظات تجريبية
const NOTES_LIST = [
  { id: "1", title: "مخطط الأسبوع", tags: ["عمل", "تنظيم"] },
  { id: "2", title: "مشتريات المنزل", tags: ["شخصي", "منزل"] },
  { id: "3", title: "أفكار مشروع React", tags: ["عمل", "برمجة", "أفكار"] }
];

// دالة حساب الوسوم الفريدة مع تكرار كل منها
function getTagsSummary(notes) {
  // كائن لتجميع التكرارات
  const counts = {};

  // المرور على كل الملاحظات
  notes.forEach(note => {
    // التحقق من وجود وسوم
    (note.tags || []).forEach(tag => {
      // زيادة العداد
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });

  // تحويل القاموس إلى مصفوفة قابلة للعرض
  return Object.entries(counts).map(([tag, count]) => ({
    name: tag,
    count: count
  }));
}

// تشغيل الفحص
const tagsSummary = getTagsSummary(NOTES_LIST);
console.log("ملخص الوسوم:", tagsSummary);`
      },
      advancedExample: {
        title: "مكون شريط الوسوم التفاعلي مع تصفية الملاحظات وحساب الإحصائيات في الوقت الفعلي",
        code: `import React, { useMemo } from "react";

// مكون شريط تصفية الوسوم الذكي
export function TagsFilterPills({ notes = [], activeTag, onSelectTag }) {
  // حساب قائمة الوسوم الفريدة وتكراراتها باستخدام useMemo
  const tagStats = useMemo(() => {
    const map = new Map();

    notes.forEach((note) => {
      (note.tags || []).forEach((t) => {
        const cleanTag = t.trim();
        if (cleanTag) {
          map.set(cleanTag, (map.get(cleanTag) || 0) + 1);
        }
      });
    });

    // تحويل الـ Map إلى مصفوفة مرتبة تنازلياً حسب الأكثر استخداماً
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [notes]);

  // إخفاء الشريط في حال عدم وجود أي وسوم في كل الملاحظات
  if (tagStats.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      <span className="text-xs font-semibold text-slate-400 whitespace-nowrap ml-1">
        التصنيفات:
      </span>

      {/* زر عرض كل الملاحظات دون فلترة */}
      <button
        onClick={() => onSelectTag(null)}
        className={\`text-xs px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition \${
          activeTag === null
            ? "bg-slate-900 text-white dark:bg-sky-600 shadow-sm"
            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200"
        }\`}
      >
        الكل ({notes.length})
      </button>

      {/* توليد أزرار الوسوم الفردية */}
      {tagStats.map((item) => {
        const isSelected = activeTag === item.name;
        return (
          <button
            key={item.name}
            onClick={() => onSelectTag(isSelected ? null : item.name)}
            className={\`text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap flex items-center gap-1.5 transition \${
              isSelected
                ? "bg-sky-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }\`}
          >
            <span>#{item.name}</span>
            <span
              className={\`text-[10px] px-1.5 py-0.2 rounded-full font-bold \${
                isSelected ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-500"
              }\`}
            >
              {item.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}`
      },
      outputExplanation: "يقوم هذا المكون بمسح جميع ملاحظات التطبيق بشكل تذكيري عبر useMemo، واستخراج قائمة الوسوم وترتيبها تنازلياً بحسب كثرة الاستخدام مع إظهار عدد الملاحظات المرتبطة بكل وسم، مما يمنح المستخدم تحكماً فورياً بتصفية المحتوى.",
      commonMistakes: [
        {
          wrong: "// تخزين الوسوم المكررة واستخراجها في كل رندر بواسطة حلقة for دون useMemo مما يبطئ الواجهة عند كثرة الملاحظات",
          correct: "// استخدام Map أو Set مدمجة مع useMemo لاستخراج الوسوم الفريدة وحساب إحصائياتها بكفاءة عالية"
        }
      ],
      bestPractices: [
        "عرض عدد الملاحظات الموجودة داخل كل وسم لتزويد المستخدم ببيانات إحصائية فورية ومفيدة",
        "إتاحة زر 'الكل' في صدارة الشريط لإلغاء أي فلترة والعودة للمشهد العام بنقرة واحدة",
        "دعم التمرير الأفقي السلس (Horizontal Scroll) للشريط ليعمل بأناقة على شاشات الهواتف المحمولة"
      ],
      infographic: {
        title: "آلية استخراج وتصفية الوسوم",
        nodes: [
          { label: "مصفوفة الملاحظات", detail: "كل ملاحظة تحوي مصفوفة tags" },
          { label: "معالجة useMemo", detail: "استخراج العناصر الفريدة وحساب التكرار عبر Map" },
          { label: "شريط الفلترة (Pills)", detail: "أزرار وسوم تفاعلية تعرض العدادات" },
          { label: "حالة الفلترة النشطة", detail: "تحديث الواجهة لعرض الملاحظات المتطابقة فقط" }
        ]
      }
    },
    {
      id: "31.4.e",
      title: "البحث الفوري في نصوص الملاحظات (Instant Text Search & Filtering)",
      englishTerm: {
        term: "Instant Full-Text Note Search",
        pronunciation: "إنستانت فول تكست نوت سيرتش",
        meaning: "البحث الفوري في كامل نصوص وعناوين الملاحظات"
      },
      description: "يمثل محرك البحث الداخلي عصب الإنتاجية في تطبيقات الملاحظات. تتيح ميزة البحث الفوري للمستخدم العثور على أي فكرة في أجزاء من الثانية بمجرد كتابة أول حرفين؛ حيث يتم فحص عناوين الملاحظات، ونصوص المحتوى، والوسوم في آن واحد. يفضل استخدام الحالة المشتقة (Derived State) المحسوبة عبر `useMemo` بدلاً من إنشاء مصفوفة حالة جديدة للنتائج، مع دعم تمييز الكلمات المطابقة باللون الأصفر (Search Highlighting) لتسريع العثور على الموضع المطلوب.",
      analogy: "يشبه استخدام مصباح كشاف في غرفة أرشيف مظلمة؛ بمجرد توجيه الضوء نحو الرفوف تضيء الملفات التي تبحث عنها فوراً، بينما تبقى بقية الملفات في الظل حتى تطفئ الكشاف.",
      whyItMatters: "يحول التطبيق من مجرد حاوية للملاحظات إلى قاعدة معرفية شخصية (Second Brain) قابلة للاسترجاع الفوري، مع تجنب أخطاء مزامنة الحالة بتطبيق مفهوم الحالة المشتقة.",
      syntax: `// تصفية الملاحظات المشتقة عبر useMemo
const filteredNotes = useMemo(() => {
  if (!query.trim()) return notes;
  const q = query.toLowerCase();
  return notes.filter(n => n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q));
}, [notes, query]);`,
      simpleExample: {
        title: "دالة البحث البسيطة في العناوين والمحتوى والوسوم",
        code: `// دالة بحث شاملة للملاحظات
function searchNotesCollection(notes, searchQuery) {
  // التحقق من فراغ حقل البحث
  const cleanQuery = searchQuery.trim().toLowerCase();
  if (!cleanQuery) {
    // إرجاع كافة الملاحظات دون استبعاد
    return notes;
  }

  // فلترة الملاحظات
  return notes.filter(note => {
    // فحص العنوان
    const matchesTitle = (note.title || "").toLowerCase().includes(cleanQuery);
    // فحص نص المحتوى
    const matchesContent = (note.content || "").toLowerCase().includes(cleanQuery);
    // فحص الوسوم
    const matchesTag = (note.tags || []).some(t => t.toLowerCase().includes(cleanQuery));

    // إرجاع true إذا تحقق أي شرط من الثلاثة
    return matchesTitle || matchesContent || matchesTag;
  });
}

// اختبار دالة البحث
const demoNotes = [
  { id: "1", title: "تعلم React", content: "فهم دورات الحياة والهوكس", tags: ["برمجة"] },
  { id: "2", title: "مقابلة عمل", content: "مراجعة الأسئلة الشائعة", tags: ["وظيفة"] }
];

// البحث عن كلمة "هوكس"
console.log("النتائج المطابقة:", searchNotesCollection(demoNotes, "هوكس").length); // 1`
      },
      advancedExample: {
        title: "نظام بحث متقدم مع تمييز الكلمات المطابقة (Highlighting) والجمع بين الوسوم والبحث النصي",
        code: `import React, { useMemo } from "react";

// مكون تمييز النص المطابق للبحث بلون أصفر
export function HighlightedText({ text = "", highlight = "" }) {
  if (!highlight.trim() || !text) {
    return <span>{text}</span>;
  }

  // تقسيم النص بناءً على عبارة البحث مع تجاهل حساسية الحروف
  const escapeRegExp = (str) => str.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, "\\\\$&");
  const regex = new RegExp(\`(\${escapeRegExp(highlight)})\`, "gi");
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className="bg-amber-200 dark:bg-amber-500/40 text-inherit px-0.5 rounded">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
}

// هوك مخصص لحساب الملاحظات المفلترة متعددة المعايير
export function useFilteredNotes(notes, searchQuery, activeTag) {
  return useMemo(() => {
    let result = notes;

    // أولاً: التصفية بحسب الوسم المختار
    if (activeTag) {
      result = result.filter((n) => (n.tags || []).includes(activeTag));
    }

    // ثانياً: التصفية بحسب نص البحث
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter((n) => {
        const inTitle = (n.title || "").toLowerCase().includes(q);
        const inContent = (n.content || "").toLowerCase().includes(q);
        const inTags = (n.tags || []).some((t) => t.toLowerCase().includes(q));
        return inTitle || inContent || inTags;
      });
    }

    return result;
  }, [notes, searchQuery, activeTag]);
}

// مكون شريط البحث المتكامل مع زر المسح الفوري
export function NotesSearchBar({ query, onChangeQuery }) {
  return (
    <div className="relative w-full max-w-xl mx-auto mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => onChangeQuery(e.target.value)}
        placeholder="ابحث في العناوين، النصوص، أو الوسوم..."
        className="w-full pl-10 pr-11 py-3 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
      />
      {/* أيقونة البحث */}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
        🔍
      </span>
      {/* زر المسح السريع عند وجود نص */}
      {query && (
        <button
          onClick={() => onChangeQuery("")}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs bg-slate-100 dark:bg-slate-700 rounded-full w-5 h-5 flex items-center justify-center"
        >
          ✕
        </button>
      )}
    </div>
  );
}`
      },
      outputExplanation: "يدمج هذا النظام بين تصفية الوسوم والبحث النصي في آن واحد عبر دمج المعايير داخل useMemo، ويوفر مكون HighlightedText لتمييز الكلمات المطابقة داخل بطاقة الملاحظة بلون أصفر فوسفوري لسرعة القراءة.",
      commonMistakes: [
        {
          wrong: "// إنشاء حالة ثانوية مثل const [searchResults, setSearchResults] = useState([]) وتحديثها يدوياً مع كل إدخال",
          correct: "// الاعتماد على الحالة المشتقة (Derived State) عبر useMemo المحسوبة من الملاحظات الأصلية ونص البحث لتفادي تعارض البيانات"
        }
      ],
      bestPractices: [
        "البحث في جميع الحقول النصية للملاحظة (العنوان، المحتوى، والوسوم) لضمان تجربة مستخدم شاملة",
        "توفير زر مسح واضح وسريع لإعادة ضبط البحث بضغطة واحدة",
        "عرض رسالة ودية تعبر عن 'لم نتمكن من العثور على أي ملاحظات مطابقة' عند فراغ النتائج"
      ],
      infographic: {
        title: "محرك البحث والفلترة المشتقة",
        nodes: [
          { label: "المخزن الأصلي (Notes)", detail: "المصدر الوحيد للحقيقة (Single Source of Truth)" },
          { label: "شروط التصفية (Filters)", detail: "نص البحث (Query) + الوسم المختار (Tag)" },
          { label: "الحساب التذكيري (useMemo)", detail: "تصفية فورية مشتقة بدون نسخ أو تخزين مكرر" },
          { label: "التمييز البصري (Highlighter)", detail: "تظليل الكلمات المطابقة بـ <mark> أصفر" }
        ]
      }
    },
    {
      id: "31.4.f",
      title: "حفظ البيانات محلياً وتصدير الملاحظات كـ Markdown / Text (Persistence & Export)",
      englishTerm: {
        term: "Data Persistence & Markdown/Text Export",
        pronunciation: "داتا بيرسيستنس آند ماركداون/تكست إكسبورت",
        meaning: "الحفظ الدائم للبيانات وتصدير الملاحظات كملفات نصية"
      },
      description: "الملاحظات هي ممتلكات فكرية قيّمة للمستخدم؛ لذلك فإن حفظها المستمر ضد الإغلاق العرضي للمتصفح وتوفير آليات تصديرها (Exporting) دون حبس المستخدم في النظام (Vendor Lock-in) هما سمتان من سمات التطبيقات المحترفة. يغطي هذا الموضوع حفظ واسترجاع مصفوفة الملاحظات من `LocalStorage` مع معالجة البيانات الفاسدة، بالإضافة إلى بناء دالة متقدمة لتوليد ملفات Markdown بصيغة `.md` أو ملف نصي مجمع `.txt` لجميع الملاحظات وتحميلها مباشرة إلى حاسوب المستخدم عبر كائن `Blob` وعنصر الرابط المخفي.",
      analogy: "يشبه كتابة الملاحظات في كشكول مقاوم للماء مع وجود آلة تصوير مستندات ضوئية؛ أوراقك محفوظة في أمان، ويمكنك في أي لحظة تصوير نسخة ورقية كاملة وأخذها معك في حقيبتك إلى أي مكان آخر.",
      whyItMatters: "يعلم المطور كيفية التعامل الآمن مع واجهات تخزين المتصفح، وكيفية إنشاء وتحميل الملفات ديناميكياً من جانب العميل (Client-side File Generation) دون الحاجة لخادم خلفي.",
      syntax: `// تصدير وتحميل نص كملف Markdown
const blob = new Blob([markdownContent], { type: "text/markdown;charset=utf-8" });
const url = URL.createObjectURL(blob);
const link = document.createElement("a");
link.href = url;
link.download = "my-notes.md";
link.click();
URL.revokeObjectURL(url);`,
      simpleExample: {
        title: "تحويل ملاحظة إلى نص Markdown وتحميلها كملف للمستخدم",
        code: `// دالة تصدير ملاحظة فردية كملف Markdown
function exportSingleNoteAsMarkdown(note) {
  // بناء نص الماركداون المنسق
  const markdownText = \`# \${note.title || "ملاحظة بدون عنوان"}

> تاريخ التحديث: \${new Date(note.updatedAt).toLocaleString("ar-EG")}
> الوسوم: \${(note.tags || []).map(t => "#" + t).join(" ")}

---

\${note.content}
\`;

  // إنشاء كائن Blob نصي
  const blob = new Blob([markdownText], { type: "text/markdown;charset=utf-8" });
  // إنشاء رابط مؤقت في الذاكرة
  const downloadUrl = URL.createObjectURL(blob);
  // إنشاء عنصر الرابط المؤقت
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = \`\${note.title || "note"}.md\`;
  // النقر البرمجي لبدء التحميل
  link.click();
  // تحرير الرابط من الذاكرة
  URL.revokeObjectURL(downloadUrl);
}

// تجربة الاستدعاء
console.log("دالة التصدير جاهزة للاستدعاء عبر أحداث الأزرار");`
      },
      advancedExample: {
        title: "نظام متكامل للتخزين الدائم الآمن في LocalStorage وتصدير كل الملاحظات في ملف أرشيف واحد",
        code: `import React, { useState, useEffect } from "react";

const STORAGE_KEY = "REACT_APP_NOTES_STORAGE_V1";

// هوك مخصص للتخزين الدائم مع معالجة أخطاء JSON
export function usePersistentNotes(defaultNotes = []) {
  // حالة الملاحظات المبدئية
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultNotes;
    } catch (e) {
      console.error("فشل قراءة الملاحظات من LocalStorage:", e);
      return defaultNotes;
    }
  });

  // حفظ التعديلات فورياً في LocalStorage عند كل تغيير
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch (e) {
      console.error("فشل حفظ الملاحظات في LocalStorage:", e);
    }
  }, [notes]);

  return [notes, setNotes];
}

// دالة تصدير مجمع لكل الملاحظات في ملف Markdown واحد
export function exportAllNotesAsBundle(notes) {
  if (!notes || notes.length === 0) {
    alert("لا توجد ملاحظات لتصديرها!");
    return;
  }

  // تجميع الملاحظات بنص Markdown منسق
  let content = \`# أرشيف الملاحظات الشخصية\\nتم التصدير بتاريخ: \${new Date().toLocaleString("ar-EG")}\\nإجمالي الملاحظات: \${notes.length}\\n\\n---\\n\\n\`;

  notes.forEach((note, index) => {
    content += \`## \${index + 1}. \${note.title || "بدون عنوان"}\\n\`;
    content += \`- **حالة التثبيت:** \${note.isPinned ? "📌 نعم" : "لا"}\\n\`;
    content += \`- **تاريخ التحديث:** \${new Date(note.updatedAt).toLocaleString("ar-EG")}\\n\`;
    if (note.tags && note.tags.length > 0) {
      content += \`- **الوسوم:** \${note.tags.map((t) => \`#\${t}\`).join(" ")}\\n\`;
    }
    content += \`\\n\${note.content}\\n\\n---\\n\\n\`;
  });

  // إنشاء الملف وتحميله
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = \`Notes_Backup_\${new Date().toISOString().slice(0, 10)}.md\`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// مكون أزرار النسخ الاحتياطي والتصدير
export function NotesExportToolbar({ notes }) {
  return (
    <div className="flex items-center gap-2 justify-end mb-4">
      <button
        onClick={() => exportAllNotesAsBundle(notes)}
        className="text-xs flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition font-medium"
      >
        <span>📥</span>
        <span>تصدير كـ Markdown ({notes.length})</span>
      </button>
    </div>
  );
}`
      },
      outputExplanation: "يوضح هذا التصميم كيف يضمن هوك usePersistentNotes الحفظ التلقائي في LocalStorage دون أي تدخل يدوي، مع توفير أداة تصدير فورية تحول جميع الملاحظات إلى مستند Markdown منظم وجاهز للمشاركة والنسخ الاحتياطي.",
      commonMistakes: [
        {
          wrong: "// نسيان تحرير رابط الـ ObjectURL بعد النقر عبر URL.revokeObjectURL، مما يسبب تسرباً في ذاكرة المتصفح مع كثرة التصدير",
          correct: "// استدعاء URL.revokeObjectURL فور انتهاء التحميل لتحرير موارد الذاكرة المخصصة للـ Blob"
        }
      ],
      bestPractices: [
        "إحاطة قراءة وكتابة LocalStorage بكتل try/catch للتعامل مع أوضاع التصفح الخاص (Incognito) أو امتلاء السعة",
        "تنسيق الملاحظات المصدرة بعناوين ومؤشرات واضحة لتكون متوافقة تماماً مع برامج قراءة Markdown مثل Obsidian وNotion",
        "تضمين الطابع الزمني في اسم الملف المحمل (مثل Notes_Backup_2026-10-30.md) لسهولة أرشفته"
      ],
      infographic: {
        title: "دورة الحفظ الدائم وتصدير البيانات",
        nodes: [
          { label: "حالة React (Notes State)", detail: "إدارة البيانات في الذاكرة الحية" },
          { label: "تزامن LocalStorage", detail: "حفظ فوري مشفر بصيغة JSON مع كل تغيير" },
          { label: "بناء ملف Markdown", detail: "توليد نص مهيكل يحوي العناوين والوسوم" },
          { label: "تحميل العميل (Blob Download)", detail: "إنشاء رابط وتنزيل الملف للجهاز مباشرة" }
        ]
      }
    },
    {
      id: "31.4.g",
      title: "إضافة الوضع المظلم وتبديل الألوان المخصصة (Theming & Color Palette)",
      englishTerm: {
        term: "Theming, Dark Mode & Palette Harmonization",
        pronunciation: "ثيمينج، دارك مود آند باليت هارمونايزيشن",
        meaning: "السمات والمظهر الداكن وتناغم لوحة الألوان"
      },
      description: "تعتمد تجربة القراءة والكتابة الطويلة في تطبيقات الملاحظات على الراحة البصرية وتناغم الألوان. يتناول هذا الموضوع تطبيق الوضع المظلم (Dark Mode) بسلاسة عبر فئات Tailwind CSS مع حفظ تفضيل المستخدم في `LocalStorage` ومراعاة إعدادات نظام التشغيل (`prefers-color-scheme`). كما يعالج التحدي الهندسي المتمثل في تناغم ألوان بطاقات الملاحظات المخصصة (مثل الأصفر أو الوردي أو الأزرق) بحيث تحافظ على تباينها وقابليتها للقراءة في كلا الوضعين (الفاتح والمظلم) دون أن تفقد هويتها البصرية.",
      analogy: "يشبه إضاءة المصباح المكتبي الخافت ليلاً؛ حيث تنخفض إضاءة الغرفة المحيطة لحماية عينيك، بينما تظل البطاقات الملونة التي اخترتها واضحة بتباين متوازن لا يسبب الإجهاد البصري.",
      whyItMatters: "يوفر تجربة استخدام مريحة للعين في البيئات منخفضة الإضاءة، ويمنح المستخدم شعوراً بالتحكم في البيئة البصرية لبياناته الشخصية.",
      syntax: `// تفعيل الوضع المظلم عبر إضافة كلاس dark لـ documentElement
const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};`,
      simpleExample: {
        title: "زر تبديل الوضع الداكن مع مزامنة إعدادات المتصفح",
        code: `import React, { useState, useEffect } from "react";

// مكون زر تبديل الثيم الداكن والفاتح
function ThemeToggleDemo() {
  // حالة الثيم
  const [isDark, setIsDark] = useState(false);

  // تحديث كلاس الـ HTML عند تغير الحالة
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div style={{ padding: "16px", textAlign: "center", fontFamily: "sans-serif" }}>
      <button
        onClick={() => setIsDark(!isDark)}
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "1px solid #94a3b8",
          backgroundColor: isDark ? "#1e293b" : "#f8fafc",
          color: isDark ? "#ffffff" : "#0f172a",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        {isDark ? "☀️ تفعيل الوضع الفاتح" : "🌙 تفعيل الوضع المظلم"}
      </button>
    </div>
  );
}

export default ThemeToggleDemo;`
      },
      advancedExample: {
        title: "تطبيق ملاحظات مصغر متكامل يجمع جميع ميزات المشروع في واجهة واحدة متناسقة",
        code: `import React, { useState, useEffect } from "react";

// ألوان الملاحظات المتوافقة
const COLOR_OPTIONS = ["#ffffff", "#fef08a", "#bbf7d0", "#bae6fd", "#fbcfe8"];

export function SelfContainedNotesStudio() {
  // حالة الملاحظات
  const [notes, setNotes] = useState([
    { id: "1", title: "مرحباً بك في تطبيق الملاحظات", content: "تطبيق متكامل يدعم التثبيت والتصنيف والألوان والتصدير!", isPinned: true, color: "#fef08a", tags: ["ترحيب", "دليل"] },
    { id: "2", title: "مهمة برمجية", content: "إكمال مشروع الطقس والملاحظات في React", isPinned: false, color: "#bae6fd", tags: ["برمجة"] }
  ]);
  // حالة البحث
  const [search, setSearch] = useState("");
  // حالة الوسم المختار
  const [selectedTag, setSelectedTag] = useState(null);
  // حالة إنشاء ملاحظة جديدة
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newColor, setNewColor] = useState(COLOR_OPTIONS[0]);

  // إضافة ملاحظة جديدة
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTitle.trim() && !newContent.trim()) return;

    const newNote = {
      id: "note_" + Date.now(),
      title: newTitle.trim(),
      content: newContent.trim(),
      isPinned: false,
      color: newColor,
      tags: ["عام"],
      updatedAt: Date.now()
    };

    setNotes([newNote, ...notes]);
    setNewTitle("");
    setNewContent("");
    setNewColor(COLOR_OPTIONS[0]);
  };

  // تبديل التثبيت
  const togglePin = (id) => {
    setNotes(notes.map(n => n.id === id ? { ...n, isPinned: !n.isPinned } : n));
  };

  // حذف ملاحظة
  const handleDelete = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  // الفلترة بالبحث والوسم
  const filteredNotes = notes.filter(n => {
    const matchesSearch = (n.title + " " + n.content).toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag ? (n.tags || []).includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  // تقسيم الملاحظات إلى مثبتة وعادية
  const pinnedNotes = filteredNotes.filter(n => n.isPinned);
  const regularNotes = filteredNotes.filter(n => !n.isPinned);

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl font-sans">
      {/* رأس الاستوديو وحقل البحث */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <span>📝</span> تطبيق الملاحظات الذكي
        </h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="بحث في الملاحظات..."
          className="w-full sm:w-64 px-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 outline-none"
        />
      </div>

      {/* نموذج الإنشاء السريع */}
      <form onSubmit={handleAdd} style={{ backgroundColor: newColor }} className="p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 transition-colors">
        <input
          type="text"
          placeholder="عنوان جديد..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full font-bold text-sm bg-transparent outline-none mb-2"
        />
        <textarea
          placeholder="اكتب المحتوى..."
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          rows={2}
          className="w-full text-xs bg-transparent outline-none resize-none"
        />
        <div className="flex items-center justify-between pt-2 border-t border-black/10 mt-2">
          <div className="flex gap-1.5">
            {COLOR_OPTIONS.map(c => (
              <button
                key={c}
                type="button"
                onClick={() => setNewColor(c)}
                style={{ backgroundColor: c }}
                className={\`w-4 h-4 rounded-full border border-black/20 \${newColor === c ? "ring-2 ring-sky-500" : ""}\`}
              />
            ))}
          </div>
          <button type="submit" className="text-xs bg-slate-900 text-white px-4 py-1.5 rounded-lg font-bold">
            إضافة
          </button>
        </div>
      </form>

      {/* قسم الملاحظات المثبتة */}
      {pinnedNotes.length > 0 && (
        <div className="mb-6">
          <div className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-1">
            <span>📌</span> الملاحظات المثبتة ({pinnedNotes.length})
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pinnedNotes.map(n => (
              <div key={n.id} style={{ backgroundColor: n.color }} className="p-4 rounded-2xl border border-black/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-sm">{n.title}</h4>
                    <button onClick={() => togglePin(n.id)} className="text-amber-500 text-xs">📌</button>
                  </div>
                  <p className="text-xs text-slate-700 mt-2 leading-relaxed">{n.content}</p>
                </div>
                <div className="flex justify-between items-center mt-4 pt-2 border-t border-black/10 text-[10px]">
                  <span className="text-slate-500">#{n.tags.join(" #")}</span>
                  <button onClick={() => handleDelete(n.id)} className="text-rose-500 hover:underline">حذف</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* قسم بقية الملاحظات */}
      <div>
        <div className="text-xs font-bold text-slate-400 mb-3">
          {pinnedNotes.length > 0 ? "بقية الملاحظات" : "كل الملاحظات"} ({regularNotes.length})
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {regularNotes.map(n => (
            <div key={n.id} style={{ backgroundColor: n.color }} className="p-4 rounded-2xl border border-black/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-sm">{n.title}</h4>
                  <button onClick={() => togglePin(n.id)} className="text-slate-400 text-xs hover:text-amber-500">📌</button>
                </div>
                <p className="text-xs text-slate-700 mt-2 leading-relaxed">{n.content}</p>
              </div>
              <div className="flex justify-between items-center mt-4 pt-2 border-t border-black/10 text-[10px]">
                <span className="text-slate-500">#{n.tags.join(" #")}</span>
                <button onClick={() => handleDelete(n.id)} className="text-rose-500 hover:underline">حذف</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يقدم هذا الاستوديو الصغير تجربة تطبيق ملاحظات حية كاملة تبرهن على التناغم التام بين التثبيت العلوي، واختيار الألوان الباستيل، والبحث الفوري، وحذف وإضافة الملاحظات بأقل كود ممكن وبأعلى كفاءة.",
      commonMistakes: [
        {
          wrong: "// استخدام ألوان نصوص سوداء قاتمة وثابتة على بطاقات الملاحظات في الوضع المظلم، مما يسبب تبايناً حاداً ومزعجاً للعين",
          correct: "// ضبط درجات تباين ألوان النصوص والبطاقات بعناية (Color Harmonization) بحيث تريح العين في كلا الوضعين"
        }
      ],
      bestPractices: [
        "اختيار ألوان باستيل هادئة للبطاقات تحافظ على وضوح الخطوط في مختلف درجات الإضاءة",
        "تخزين اختيار الثيم في LocalStorage لتطبيقه فور فتح الصفحة وقبل بدء الرندر لمنع وميض الشاشة الفاتحة (FOUC)",
        "توفير زر واحد واضح وسهل الوصول لتبديل الثيم في ترويسة التطبيق"
      ],
      infographic: {
        title: "منظومة الثيمات وتناسق الألوان",
        nodes: [
          { label: "كشف النظام (prefers-color-scheme)", detail: "رصد التفضيل المبدئي لنظام التشغيل" },
          { label: "فئة dark في HTML", detail: "التبديل عبر Tailwind CSS ومزامنة LocalStorage" },
          { label: "بطاقات الباستيل (Soft Pastels)", detail: "ألوان مريحة متوافقة مع القراءة الطويلة" },
          { label: "تناغم التباين (Contrast Harmony)", detail: "نصوص واضحة دون إجهاد بصري في كلا الوضعين" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-31.4-1",
      question: "كيف نحقق ميزة فرز الملاحظات بحيث تظهر المثبتة (Pinned) دائماً في القمة ثم المرتبة حسب تاريخ التعديل؟",
      options: [
        "إنشاء مصفوفتي حالة منفصلتين في React ودمجهما في كل رندر",
        "استخدام دالة sort تقارن أولاً خاصية isPinned ثم تقارن updatedAt للأحدث",
        "إجبار المستخدم على عدم تعديل الملاحظات غير المثبتة",
        "تعديل مصفوفة الملاحظات الأصلية مباشرة بواسطة splice"
      ],
      correctAnswer: 1,
      explanation: "المقارنة المزدوجة في دالة sort (التحقق من a.isPinned vs b.isPinned أولاً ثم b.updatedAt - a.updatedAt) تضمن استقرار الملاحظات المثبتة في الصدارة دوماً يتبعها الأحدث زمناً."
    },
    {
      id: "quiz-31.4-2",
      question: "ما هي الطريقة الفضلى لتنفيذ البحث في نصوص وعناوين ووسوم الملاحظات في React؟",
      options: [
        "استخدام حالة مشتقة (Derived State) محسوبة عبر useMemo تعتمد على الملاحظات الأصلية ونص البحث",
        "تكرار حفظ الملاحظات المفلترة في LocalStorage مع كل ضغطة مفتاح",
        "إرسال طلب HTTP إلى خادم خارجي مع كل حرف يقوم المستخدم بكتابته",
        "حذف الملاحظات التي لا تطابق نص البحث من مصفوفة الحالة الرئيسية نهائياً"
      ],
      correctAnswer: 0,
      explanation: "الحالة المشتقة عبر useMemo هي النمط القياسي في React؛ حيث تحسب قائمة النتائج المطابقة آنياً عند تغير البحث أو الملاحظات، دون ازدواجية في الحالة أو خطر فقدان البيانات الأصلية."
    },
    {
      id: "quiz-31.4-3",
      question: "كيف يمكن تصدير الملاحظات كملف Markdown للتحميل في المتصفح دون الحاجة لخادم backend؟",
      options: [
        "استخدام كائن Blob بنوع text/markdown وإنشاء رابط مؤقت بواسطة URL.createObjectURL ثم النقر عليه برمجياً",
        "طباعة الملاحظات في وحدة تحكم المتصفح والطلب من المستخدم نسخها يدوياً",
        "إرسال البيانات عبر بروتوكول FTP مباشرة من متصفح العميل",
        "المتصفح لا يدعم إنشاء الملفات محلياً بدون خادم Node.js وسيط"
      ],
      correctAnswer: 0,
      explanation: "المتصفحات الحديثة تدعم واجهات Blob و URL.createObjectURL لإنشاء ملفات افتراضية في الذاكرة وتنزيلها برمجياً عبر عنصر <a> مخفي دون الحاجة لأي خادم وسيط."
    }
  ],
  exercise: {
    id: "exercise-31.4",
    title: "تمرين عملي: بناء مدير ملاحظات تفاعلي مع التثبيت والبحث والوسوم",
    description: "قم بإنشاء مكون React يحتوي على حقل لإضافة ملاحظة، وحقل بحث فوري، وخاصية تثبيت الملاحظة في الأعلى بنقرة زر، مع عرض شريط وسوم تفاعلي يقوم بتصفية الملاحظات بحسب الوسم المختار.",
    hints: [
      "استخدم useState لمصفوفة الملاحظات، ونص البحث، والوسم النشط",
      "استخدم useMemo لحساب قائمة الملاحظات المفلترة المشتقة",
      "قسّم العرض إلى قسمين: قسم الملاحظات المثبتة (📌) وقسم الملاحظات الأخرى"
    ],
    solution: `import React, { useState, useMemo } from "react";

export default function MiniNotesLab() {
  const [notes, setNotes] = useState([
    { id: "1", title: "شراء قهوة", isPinned: true, tag: "شخصي" },
    { id: "2", title: "مراجعة كود React", isPinned: false, tag: "عمل" }
  ]);
  const [inputTitle, setInputTitle] = useState("");
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState(null);

  const addNote = () => {
    if (!inputTitle.trim()) return;
    setNotes([{ id: Date.now().toString(), title: inputTitle.trim(), isPinned: false, tag: "عام" }, ...notes]);
    setInputTitle("");
  };

  const togglePin = (id) => {
    setNotes(notes.map(n => n.id === id ? { ...n, isPinned: !n.isPinned } : n));
  };

  const filtered = useMemo(() => {
    return notes.filter(n => {
      const matchText = n.title.toLowerCase().includes(search.toLowerCase());
      const matchTag = activeTag ? n.tag === activeTag : true;
      return matchText && matchTag;
    });
  }, [notes, search, activeTag]);

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "16px", fontFamily: "sans-serif" }}>
      <h3>مختبر الملاحظات المصغر</h3>
      <input
        type="text"
        placeholder="بحث..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: "100%", padding: "6px", marginBottom: "8px" }}
      />
      <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
        <input
          type="text"
          placeholder="عنوان الملاحظة..."
          value={inputTitle}
          onChange={e => setInputTitle(e.target.value)}
          style={{ flex: 1, padding: "6px" }}
        />
        <button onClick={addNote}>إضافة</button>
      </div>
      <div>
        {filtered.map(n => (
          <div key={n.id} style={{ display: "flex", justifyContent: "space-between", padding: "8px", borderBottom: "1px solid #ddd", background: n.isPinned ? "#fef9c3" : "#fff" }}>
            <span>{n.title} <small>({n.tag})</small></span>
            <button onClick={() => togglePin(n.id)}>{n.isPinned ? "📌 مثبت" : "ثبّت"}</button>
          </div>
        ))}
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "المخطط الهيكلي لمشروع تطبيق الملاحظات (Notes App Architecture)",
    nodes: [
      { label: "1. Expandable Composer", detail: "نموذج ذكي متمدد مع منتقي ألوان الباستيل ومولد الوسوم السريعة" },
      { label: "2. Pinning & Sorting", detail: "فرز ذكي يضع الملاحظات المثبتة في الصدارة متبوعة بالأحدث نشاطاً" },
      { label: "3. Inline Editing", detail: "تعديل فوري بمجرد النقر دون الحاجة لفتح نوافذ منبثقة معقدة" },
      { label: "4. Tagging & Instant Search", detail: "تصفية مشتقة بالوسوم وبحث نصي فائق السرعة عبر useMemo" },
      { label: "5. Persistence & Export", detail: "مزامنة تلقائية مع LocalStorage وتصدير كملفات Markdown" }
    ]
  }
};

