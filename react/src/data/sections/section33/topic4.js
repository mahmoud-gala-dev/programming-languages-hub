// topic4.js - القسم 33، الموضوع 4: مشروع 13: منصة تعليم إلكتروني E-learning (Comprehensive Learning Management System)
// يحتوي على 12 موضوعاً فرعياً مفصلاً وفق معايير الجودة الصارمة والشرح من الصفر

export const TOPIC_33_4 = {
  id: "topic-33-4",
  title: "مشروع 13: منصة تعليم إلكتروني E-learning",
  description: "دليل معماري وهندسي شامل لبناء منصة تعليم إلكتروني متكاملة (LMS) مستوحاة من Udemy وCoursera، تشمل كتالوج الدورات، مشغل فيديو ذكي يحفظ نقاط التقدم، اختبارات تفاعلية تقيم أداء الطلاب، لوحة تحكم متقدمة للمدربين، وتحسين كامل لمحركات البحث والتدويل (i18n).",
  subtopics: [
    {
      id: "33.4.a",
      title: "إنشاء واجهة تصفح الدورات (Course Discovery & Catalog Grid)",
      technicalTerm: {
        english: "Course Catalog & Responsive Grid System",
        pronunciation: "كورس كاتالوج آند ريسبونسيف جريد سيستم",
        arabicMeaning: "كتالوج الدورات ونظام الشبكة المتجاوبة"
      },
      description: "تعتبر واجهة تصفح الدورات (Catalog Browse) نقطة البداية لتجربة المتعلم. تتطلب هذه الواجهة تصميماً شبكياً عالي الاستجابة (`CSS Grid`) يعرض بطاقات الدورات التدريبية مع صور الغلاف المميزة، أسماء المدربين، تقييمات النجوم، ومستويات الدورة (مبتدئ/متوسط/متقدم)، بالإضافة إلى أشرطة تصنيف أفقية قابلة للتمرير (Category Pills) لاختيار مجالات التعلم المختلفة.",
      realWorldAnalogy: "مثل معرض الكتب الدولي؛ توجد أروقة مقسمة حسب التخصصات (البرمجة، التصميم، الأعمال)، وعلى كل طاولة تجد أغلفة الكتب بأسماء مؤلفيها وملخصات مشوقة تدفعك للاقتناء.",
      whyItMatters: "التصفح السلس للكتالوج يخفض معدل الارتداد (Bounce Rate) ويزيد من معدل تحويل الزائرين العاديين إلى طلاب مسجلين بالدورات.",
      syntax: "/* شبكة الدورات المتجاوبة بالـ Tailwind */\n<div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6\" />",
      simpleExample: `// مكون بطاقة الدورة في كتالوج المنصة
import React from 'react';

export function CourseCard({ course, onSelect }) {
  const { title, instructor, thumbnail, rating, studentsCount, level, price } = course;

  return (
    <div 
      onClick={() => onSelect(course.id)}
      className="bg-slate-800 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-indigo-500 hover:shadow-xl transition-all cursor-pointer flex flex-col group"
    >
      {/* صورة غلاف الدورة مع تأثير التكبير عند التحليق */}
      <div className="relative aspect-video overflow-hidden bg-slate-900">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/80 backdrop-blur text-indigo-300 border border-indigo-500/30">
          {level}
        </span>
      </div>

      {/* تفاصيل الدورة */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 className="font-bold text-sm text-white line-clamp-2 group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-slate-400 mt-1">{instructor}</p>
        </div>

        <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-700/40">
          <div className="flex items-center gap-1 text-amber-400 font-bold">
            <span>⭐ {rating.toFixed(1)}</span>
            <span className="text-slate-500 text-[10px]">({studentsCount})</span>
          </div>
          <span className="text-sm font-black text-white">{price === 0 ? 'مجاناً' : \`\${price} $\`}</span>
        </div>
      </div>
    </div>
  );
}`,
      advancedExample: `// صفحة كتالوج الدورات المتكاملة مع الفرز والتصنيفات المتجاوبة
import React, { useState, useMemo } from 'react';

const CATEGORIES = ['الكل', 'تطوير الويب', 'React & Next.js', 'علوم البيانات', 'تصميم UI/UX', 'الذكاء الاصطناعي'];

export function CourseCatalog({ courses, onSelectCourse }) {
  const [selectedCat, setSelectedCat] = useState('الكل');
  const [sortBy, setSortBy] = useState('popular');

  // ترشيح وفرز الدورات بكفاءة مع useMemo
  const filteredCourses = useMemo(() => {
    return courses
      .filter(c => selectedCat === 'الكل' || c.category === selectedCat)
      .sort((a, b) => {
        if (sortBy === 'popular') return b.studentsCount - a.studentsCount;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'price-low') return a.price - b.price;
        return 0;
      });
  }, [courses, selectedCat, sortBy]);

  return (
    <div className="space-y-6">
      {/* شريط التصنيفات وفلترة الفرز */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={\`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all \${
                selectedCat === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-350 hover:bg-slate-750 hover:text-white'
              }\`}
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-slate-800 text-slate-200 border border-slate-700 rounded-xl px-3 py-1.5 text-xs focus:outline-none"
        >
          <option value="popular">الأكثر شعبية</option>
          <option value="rating">الأعلى تقييماً</option>
          <option value="price-low">الأقل سعراً</option>
        </select>
      </div>

      {/* شبكة البطاقات المتجاوبة */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredCourses.map(course => (
          <div key={course.id} onClick={() => onSelectCourse(course.id)}>
            {/* عرض بطاقة الدورة */}
            <div className="p-4 bg-slate-800 rounded-xl hover:ring-2 hover:ring-indigo-500 cursor-pointer">
              <h4 className="font-bold text-white text-xs">{course.title}</h4>
              <p className="text-[10px] text-slate-400 mt-1">{course.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوفر الكود واجهة كتالوج تفاعلية فائقة السرعة تتيح تصفية الدورات فورياً حسب التصنيف والترتيب دون إحداث أي ارتداد أو إعادة تحميل.",
      commonMistakes: "استخدام صور بأحجام ضخمة غير مضغوطة في بطاقات الكتالوج، مما يبطئ تحميل الصفحة الأولى ويهدر باقة إنترنت الهاتف.",
      bestPractices: "استخدم صوراً مصغرة (Thumbnails) بأبعاد متناسبة ومضغوطة بصيغة WebP مع تفعيل خاصية `loading=\"lazy\"` للصور البعيدة عن الشاشة الأولى.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="25" y="25" width="550" height="35" rx="6" fill="#1e293b" />
  <rect x="35" y="32" width="60" height="20" rx="10" fill="#6366f1" />
  <text x="65" y="46" fill="#ffffff" fontSize="10" textAnchor="middle">All</text>
  <rect x="105" y="32" width="80" height="20" rx="10" fill="#334155" />
  <text x="145" y="46" fill="#94a3b8" fontSize="10" textAnchor="middle">React.js</text>
  <rect x="195" y="32" width="80" height="20" rx="10" fill="#334155" />
  <text x="235" y="46" fill="#94a3b8" fontSize="10" textAnchor="middle">Next.js</text>
  <rect x="25" y="75" width="125" height="105" rx="8" fill="#1e293b" stroke="#334155" />
  <rect x="35" y="85" width="105" height="50" rx="4" fill="#334155" />
  <rect x="165" y="75" width="125" height="105" rx="8" fill="#1e293b" stroke="#334155" />
  <rect x="175" y="85" width="105" height="50" rx="4" fill="#334155" />
  <rect x="305" y="75" width="125" height="105" rx="8" fill="#1e293b" stroke="#334155" />
  <rect x="315" y="85" width="105" height="50" rx="4" fill="#334155" />
  <rect x="445" y="75" width="125" height="105" rx="8" fill="#1e293b" stroke="#334155" />
  <rect x="455" y="85" width="105" height="50" rx="4" fill="#334155" />
</svg>`
    },
    {
      id: "33.4.b",
      title: "إنشاء صفحة تفاصيل الدورة (Course Landing & Syllabus Accordion)",
      technicalTerm: {
        english: "Curriculum Accordion & Enrollment Sticky CTA",
        pronunciation: "كوريكيولوم أكورديون آند إنرولمينت ستيكي سي تي إيه",
        arabicMeaning: "قائمة المنهاج القابلة للطي وزر التسجيل المثبت"
      },
      description: "صفحة تفاصيل الدورة (Course Details / Syllabus) هي صفحة البيع والتحويل الأساسية. تنقسم إلى قسمين رئيسيين: عمود المحتوى العريض الذي يحتوي على نظرة عامة، ومخرجات التعلم (What you'll learn)، وقائمة الوحدات والدروس القابلة للطي (Curriculum Accordion)، وعمود جانبي مثبت (Sticky Card) يحتوي على فيديو المعاينة الترويجي السريع، السعر، ضمان الاسترجاع، وزر الشراء أو التسجيل الفوري (Enroll CTA).",
      realWorldAnalogy: "مثل واجهة متجر بيع السيارات الفاخرة؛ تجد كتيباً مفصلاً يوضح سعة المحرك ومواصفات الأمان (المنهاج)، وشاشة مضيئة بجانبها توضح السعر والضمان وخيارات التقسيط (البطاقة الجانبية).",
      whyItMatters: "عرض المنهاج التعليمي بشفافية واحترافية يمنح الطالب الثقة في جودة المحتوى ويشجعه على الالتحاق بالدورة فوراً.",
      syntax: "/* قائمة الدروس القابلة للطي باستخدام تفاصيل HTML5 أو Accordion المخصص */\n<div className=\"border border-slate-800 rounded-xl overflow-hidden\">\n  <button onClick={toggleModule} className=\"w-full flex justify-between p-4 bg-slate-850\" />\n  {isOpen && <div className=\"p-4 bg-slate-900 space-y-2\" />}\n</div>",
      simpleExample: `// وحدة المنهج القابلة للطي (Curriculum Section Accordion)
import React, { useState } from 'react';

export function SyllabusSection({ sectionNumber, title, duration, lessons = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-700/60 rounded-xl overflow-hidden bg-slate-800/80 mb-3">
      {/* رأس الوحدة التعليمية */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between text-start hover:bg-slate-750 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-indigo-400 font-bold text-xs">الوحدة {sectionNumber}:</span>
          <h4 className="text-xs font-bold text-white">{title}</h4>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span>{lessons.length} دروس ({duration})</span>
          <span className={\`transition-transform duration-200 \${isOpen ? 'rotate-180' : ''}\`}>▼</span>
        </div>
      </button>

      {/* قائمة الدروس الداخلية */}
      {isOpen && (
        <div className="p-4 bg-slate-900 border-t border-slate-700/40 space-y-2.5">
          {lessons.map((lesson, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs text-slate-300 py-1">
              <div className="flex items-center gap-2">
                <span>📹</span>
                <span>{lesson.title}</span>
              </div>
              <span className="text-slate-500 font-mono text-[11px]">{lesson.duration}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`,
      advancedExample: `// هيكل صفحة تفاصيل الدورة الكاملة مع البطاقة الجانبية المثبتة (Sticky Card)
import React from 'react';

export function CourseDetailsView({ course, onEnroll }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* العمود الرئيسي: تفاصيل الدورة والمنهاج */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">{course.category}</span>
            <h1 className="text-2xl lg:text-3xl font-black text-white mt-2 leading-tight">{course.title}</h1>
            <p className="text-sm text-slate-350 mt-3 leading-relaxed">{course.description}</p>
          </div>

          {/* مخرجات التعلم */}
          <div className="p-6 bg-slate-850 border border-slate-800 rounded-2xl">
            <h3 className="text-sm font-bold text-white mb-4">ماذا ستتعلم في هذه الدورة؟</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              {course.learningOutcomes?.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* المنهاج الدراسي */}
          <div>
            <h3 className="text-base font-bold text-white mb-4">محتوى الدورة التدريبية</h3>
            <div className="space-y-3">
              {course.curriculum?.map((sec, idx) => (
                <div key={idx} className="p-3 bg-slate-800 rounded-xl text-xs text-white">
                  الوحدة {idx + 1}: {sec.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* العمود الجانبي المثبت: بطاقة التسجيل والفيديو الترويجي */}
        <div className="lg:sticky lg:top-8 bg-slate-850 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-5">
          <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative group cursor-pointer">
            <img src={course.thumbnail} alt="Preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg pl-1 shadow-lg group-hover:scale-110 transition-transform">
                ▶
              </span>
            </div>
          </div>

          <div className="text-2xl font-black text-white">
            {course.price === 0 ? 'مجاناً' : \`\${course.price} $\`}
          </div>

          <button
            onClick={() => onEnroll(course.id)}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-indigo-600/30"
          >
            التسجيل في الدورة الآن
          </button>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "يقدم هذا النموذج معمارية صفحات تحويل قياسية، تجمع بين تصفح مريح لمنهاج الدروس وبطاقة شراء عائمة ثابتة في شاشات الحواسيب لتعظيم معدلات التسجيل.",
      commonMistakes: "نسيان جعل بطاقة الشراء الجانبية `sticky` في الشاشات الكبيرة، مما يجبر المستخدم على العودة يدوياً لأعلى الصفحة بعد قراءة المنهاج الطويل للضغط على زر الشراء.",
      bestPractices: "استخدم `lg:sticky lg:top-8` على بطاقة التحويل الجانبية، مع تضمين فيديو معاينة قصير ومجاني (Free Preview) لرفع معدل اقتناع الطالب.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="340" height="140" rx="8" fill="#1e293b" stroke="#334155" />
  <text x="50" y="55" fill="#38bdf8" fontSize="12" fontWeight="bold">Main Content (2 Columns)</text>
  <rect x="50" y="70" width="300" height="30" rx="4" fill="#334155" />
  <text x="65" y="90" fill="#cbd5e1" fontSize="10">Course Hero & Description</text>
  <rect x="50" y="110" width="300" height="45" rx="4" fill="#334155" />
  <text x="65" y="135" fill="#94a3b8" fontSize="10">Curriculum Accordion (Modules 1..10)</text>
  <rect x="390" y="30" width="180" height="140" rx="8" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="480" y="55" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">Sticky CTA Sidebar</text>
  <rect x="405" y="70" width="150" height="35" rx="4" fill="#0f172a" />
  <text x="480" y="92" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">$49.99</text>
  <rect x="405" y="115" width="150" height="30" rx="6" fill="#6366f1" />
  <text x="480" y="135" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Enroll Now ▶</text>
</svg>`
    },
    {
      id: "33.4.c",
      title: "تنفيذ نظام حسابات المستخدمين والتسجيل (Student Auth & Profiles)",
      technicalTerm: {
        english: "Student Profile & Enrolled Courses State",
        pronunciation: "ستيودنت بروفايل آند إنرولد كورسيز ستيت",
        arabicMeaning: "ملف الطالب وسجل الدورات المسجلة"
      },
      description: "تعتمد منصات التعليم على نظام إدارة جلسات المستخدمين (Authentication & Session Tokens) مع توفير لوحة خاصة بكل طالب (Student Portal). فور التسجيل في دورة معينة، يتم ربط معرف الدورة بملف الطالب (`enrolledCourses: string[]`). كما يتيح النظام إدارة الحساب الشخصي، وتغيير كلمة المرور، واستعراض شهادات التخرج التي تم الحصول عليها.",
      realWorldAnalogy: "مثل استخراج بطاقة جامعية؛ تتيح لك الدخول إلى قاعات المحاضرات الخاصة بك فقط، وتُسجل عليها المقررات التي سددت رسومها والشهادات التي اجتزتها.",
      whyItMatters: "حماية المحتوى التعليمي المدفوع من الوصول غير المصرح به، وتخصيص تجربة التعلم لكل طالب بشكل فريد.",
      syntax: "// نموذج حساب الطالب وسجل التسجيل\ninterface StudentProfile {\n  id: string;\n  name: string;\n  email: string;\n  enrolledCourses: { courseId: string; enrolledAt: string; progress: number; }[];\n}",
      simpleExample: `// عرض شارة التحاق الطالب بالدورة
import React from 'react';

export function EnrollmentStatusBadge({ isEnrolled, progressPercent }) {
  if (isEnrolled) {
    return (
      <div className="flex items-center gap-2 text-xs">
        <span className="text-emerald-400 font-bold">✓ مسجل بالدورة</span>
        <span className="text-slate-400 font-mono">({progressPercent}% مكتمل)</span>
      </div>
    );
  }

  return <span className="text-xs text-slate-400">غير مسجل بعد</span>;
}`,
      advancedExample: `// سياق إدارة جلسة الطالب والدورات المشترك بها
import { createContext, useContext, useState, useEffect } from 'react';

const StudentAuthContext = createContext(null);

export function StudentAuthProvider({ children }) {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // محاكاة قراءة جلسة الطالب من التخزين المحلي
    const savedSession = localStorage.getItem('student_session');
    if (savedSession) {
      setStudent(JSON.parse(savedSession));
    }
    setLoading(false);
  }, []);

  // دالة تسجيل الطالب في دورة جديدة فوراً
  const enrollInCourse = (courseId) => {
    if (!student) throw new Error('يرجى تسجيل الدخول أولاً');

    const updatedStudent = {
      ...student,
      enrolledCourses: [
        ...student.enrolledCourses,
        { courseId, enrolledAt: new Date().toISOString(), progress: 0 }
      ]
    };

    setStudent(updatedStudent);
    localStorage.setItem('student_session', JSON.stringify(updatedStudent));
  };

  const isEnrolled = (courseId) => {
    return student?.enrolledCourses?.some(c => c.courseId === courseId) || false;
  };

  return (
    <StudentAuthContext.Provider value={{ student, loading, enrollInCourse, isEnrolled }}>
      {children}
    </StudentAuthContext.Provider>
  );
}

export function useStudentAuth() {
  const ctx = useContext(StudentAuthContext);
  if (!ctx) throw new Error('useStudentAuth must be used within StudentAuthProvider');
  return ctx;
}`,
      outputExplanation: "يوفر هذا السياق وصولاً عالمياً لحالة تسجيل الطالب؛ مما يسمح للأزرار بالتحول تلقائياً من 'شراء الدورة' إلى 'متابعة التعلم' فور تأكيد التسجيل.",
      commonMistakes: "الاعتماد فقط على التخزين المحلي للمتصفح دون التحقق من صلاحية التسجيل عبر استدعاء آمن لخادم الـ Backend، مما يسمح بتعديل بيانات LocalStorage والوصول للمحتوى.",
      bestPractices: "اجعل واجهة الخادم تفحص دائماً جدول الاشتراكات في قاعدة البيانات قبل منح الطالب رابط بث الفيديو الخاص بالدرس.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <circle cx="80" cy="90" r="35" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="80" y="95" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">Student</text>
  <path d="M 125 90 L 225 90" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="175" y="80" fill="#818cf8" fontSize="10" textAnchor="middle">Enroll</text>
  <rect x="230" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="310" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Enrollments Table</text>
  <text x="310" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">student_id + course_id</text>
  <text x="310" y="115" fill="#94a3b8" fontSize="9" textAnchor="middle">status: 'active'</text>
  <path d="M 395 90 L 475 90" stroke="#10b981" strokeWidth="2" />
  <rect x="480" y="45" width="90" height="90" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="525" y="95" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Unlocked 🔓</text>
</svg>`
    },
    {
      id: "33.4.d",
      title: "إدارة الدورات والدروس (Course & Lesson Schema)",
      technicalTerm: {
        english: "Hierarchical Course-Module-Lesson Schema",
        pronunciation: "هايراركي كال كورس موديول ليسن سكيما",
        arabicMeaning: "مخطط البيانات الهرمي للدورة والوحدات والدروس"
      },
      description: "يتطلب بناء منصة تعليمية متقدمة مخطط بيانات هرمي منظم: الدورة (Course) تضم مصفوفة من الوحدات التعليمية (Modules/Sections)، وكل وحدة تضم مصفوفة مرتبة من الدروس (Lessons). يمكن للدرس أن يكون مقطع فيديو (Video)، أو مقالاً نصياً (Article/Markdown)، أو اختباراً سريعاً (Quiz)، مع تزويد كل درس بمعرف فريد `lessonId` وترتيب تسلسلي `orderIndex` لتحديد الدرس التالي والسابق تلقائياً.",
      realWorldAnalogy: "مثل هيكل الكتاب المدرسي؛ الكتاب يتكون من فصول رئيسية (الوحدات)، وكل فصل يتكون من مباحث متسلسلة (الدروس)، ولا يمكنك الانتقال للدرس الثاني دون معرفة سياق الدرس الأول.",
      whyItMatters: "التنظيم الهيكلي الصارم يسهل حساب نسب الإنجاز التلقائية، والتنقل السلس للدرس التالي (Next Lesson Autoplay)، وتصدير المنهج كشجرة بيانات.",
      syntax: "// نموذج شجرة الدورة والدروس\ninterface Lesson { id: string; title: string; type: 'video' | 'quiz'; durationSeconds: number; }\ninterface Module { id: string; title: string; lessons: Lesson[]; }\ninterface Course { id: string; title: string; modules: Module[]; }",
      simpleExample: `// دالة إيجاد الدرس التالي والسابق تلقائياً في شجرة الدورة
export function getSurroundingLessons(course, currentLessonId) {
  // تفكيك جميع الدروس في مصفوفة مسطحة واحدة
  const flatLessons = course.modules.flatMap(m => m.lessons);
  const currentIndex = flatLessons.findIndex(l => l.id === currentLessonId);

  return {
    prevLesson: currentIndex > 0 ? flatLessons[currentIndex - 1] : null,
    nextLesson: currentIndex < flatLessons.length - 1 ? flatLessons[currentIndex + 1] : null
  };
}`,
      advancedExample: `// محول شجرة الدورة مع حساب المدد الإجمالية وإجمالي الدروس
import { useMemo } from 'react';

export function useCourseMetadata(course) {
  return useMemo(() => {
    if (!course?.modules) return { totalLessons: 0, formattedDuration: '0 دقيقة', flatLessons: [] };

    let totalSeconds = 0;
    const flat = [];

    course.modules.forEach((mod, modIdx) => {
      mod.lessons.forEach((les, lesIdx) => {
        totalSeconds += les.durationSeconds || 0;
        flat.push({
          ...les,
          moduleIndex: modIdx,
          lessonIndex: lesIdx,
          moduleTitle: mod.title
        });
      });
    });

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const formattedDuration = hours > 0 ? \`\${hours} ساعة و\${minutes} دقيقة\` : \`\${minutes} دقيقة\`;

    return {
      totalLessons: flat.length,
      totalDurationSeconds: totalSeconds,
      formattedDuration,
      flatLessons: flat
    };
  }, [course]);
}`,
      outputExplanation: "يقوم هذا الكود بحساب الإحصائيات الشاملة للدورة (عدد الدروس الإجمالي، والمدة الزمنية المجمعة بالساعات والدقائق) تلقائياً من شجرة البيانات المتداخلة.",
      commonMistakes: "تكرار حساب تسطيح الدروس (Flat Mapping) داخل كل حدث نقرة زر في مشغل الفيديو بدلاً من حفظها في `useMemo`.",
      bestPractices: "قم بتسطيح مصفوفة الدروس (Flattened Array) مرة واحدة في الذاكرة لتسهيل منطق التنقل `Next / Previous` بسرعة O(1).",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="130" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="95" y="75" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Course</text>
  <text x="95" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle">id, title, modules[]</text>
  <path d="M 165 90 L 235 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="40" width="130" height="100" rx="8" fill="#1e293b" stroke="#818cf8" />
  <text x="305" y="75" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">Module</text>
  <text x="305" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle">title, lessons[]</text>
  <path d="M 375 90 L 445 90" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="450" y="40" width="120" height="100" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="510" y="75" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Lesson</text>
  <text x="510" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle">videoUrl, duration</text>
</svg>`
    },
    {
      id: "33.4.e",
      title: "عرض محتوى الفيديو ومتابعة التشغيل (Video Player & Playback State)",
      technicalTerm: {
        english: "HTML5 Custom Video Player & Playhead Resume",
        pronunciation: "إتش تي إم إل فايف كاستم فيديو بلاير آند بلاي هيد ريزيوم",
        arabicMeaning: "مشغل فيديو HTML5 المخصص واستئناف موضع المشاهدة"
      },
      description: "مشغل الفيديو التعليمي هو قلب منصة الـ LMS. يتطلب المشغل ميزات خاصة: إمكانية التحكم في سرعة التشغيل (0.75x, 1x, 1.25x, 1.5x, 2x)، وميزة التخزين التلقائي لموضع مؤشر التشغيل (Playhead Timestamp) كل 5 ثوانٍ في الـ LocalStorage أو الخادم، بحيث إذا أغلق الطالب الصفحة وعاد غداً، يستأنف الفيديو تلقائياً من نفس الثانية التي توقف عندها مع إظهار رسالة 'استئناف من دقيقة 04:12'.",
      realWorldAnalogy: "مثل وضع علامة شريطية مرجعية داخل كتاب تقرؤه؛ عندما تغلق الكتاب وتفتحه مجدداً في اليوم التالي، تعود فوراً إلى نفس السطر دون البحث من جديد.",
      whyItMatters: "يوفر راحة استثنائية للطلاب ويشجعهم على التعلم المتقطع في أي وقت دون إحباط إعادة البحث عن موضع توقفهم.",
      syntax: "// حفظ واسترجاع موضع تشغيل الفيديو\nvideoElement.currentTime = savedTime;\nvideoElement.ontimeupdate = () => throttleSave(videoElement.currentTime);",
      simpleExample: `// مشغل فيديو بسيط يحفظ موضع التوقف محلياً
import React, { useRef, useEffect } from 'react';

export function SimpleResumePlayer({ videoUrl, lessonId }) {
  const videoRef = useRef(null);

  // استرجاع موضع التوقف السابق عند فتح الفيديو
  useEffect(() => {
    const savedTime = localStorage.getItem(\`lesson_time_\${lessonId}\`);
    if (savedTime && videoRef.current) {
      videoRef.current.currentTime = parseFloat(savedTime);
    }
  }, [lessonId]);

  // حفظ الموضع عند تحديث وقت التشغيل
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      localStorage.setItem(\`lesson_time_\${lessonId}\`, videoRef.current.currentTime.toString());
    }
  };

  return (
    <video
      ref={videoRef}
      src={videoUrl}
      controls
      onTimeUpdate={handleTimeUpdate}
      className="w-full aspect-video rounded-2xl bg-black shadow-2xl"
    />
  );
}`,
      advancedExample: `// مشغل فيديو متقدم مع التحكم في السرعة وحفظ نقطة الاستئناف الذكية
import React, { useRef, useState, useEffect } from 'react';

export function SmartLmsVideoPlayer({ src, lessonId, onComplete }) {
  const videoRef = useRef(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showResumeBanner, setShowResumeBanner] = useState(false);
  const [resumeTime, setResumeTime] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(\`lms_playhead_\${lessonId}\`);
    if (saved) {
      const time = parseFloat(saved);
      if (time > 10) { // إظهار التنبيه فقط إذا شاهد أكثر من 10 ثوانٍ
        setResumeTime(time);
        setShowResumeBanner(true);
      }
    }
  }, [lessonId]);

  const handleResume = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = resumeTime;
      videoRef.current.play();
    }
    setShowResumeBanner(false);
  };

  const handleRateChange = (rate) => {
    setPlaybackRate(rate);
    if (videoRef.current) videoRef.current.playbackRate = rate;
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black aspect-video group">
      <video
        ref={videoRef}
        src={src}
        controls
        onEnded={onComplete}
        className="w-full h-full object-contain"
      />

      {/* شريط الاستئناف الذكي المنبثق */}
      {showResumeBanner && (
        <div className="absolute top-4 left-4 right-4 bg-slate-900/90 backdrop-blur border border-slate-700 p-3 rounded-xl flex items-center justify-between z-20">
          <span className="text-xs text-slate-200">
            توقفت سابقاً عند الدقيقة {Math.floor(resumeTime / 60)}:{Math.floor(resumeTime % 60).toString().padStart(2, '0')}. هل ترغب في الاستئناف؟
          </span>
          <div className="flex gap-2">
            <button onClick={handleResume} className="px-3 py-1 bg-indigo-600 text-white rounded text-xs font-bold">
              استئناف
            </button>
            <button onClick={() => setShowResumeBanner(false)} className="px-2 py-1 text-slate-400 text-xs">
              تجاهل
            </button>
          </div>
        </div>
      )}

      {/* مبدل سرعات التشغيل السريع */}
      <div className="absolute top-4 right-4 z-10 flex gap-1 bg-slate-900/80 backdrop-blur p-1 rounded-lg">
        {[1, 1.25, 1.5, 2].map(rate => (
          <button
            key={rate}
            onClick={() => handleRateChange(rate)}
            className={\`px-2 py-0.5 rounded text-[10px] font-bold \${
              playbackRate === rate ? 'bg-indigo-600 text-white' : 'text-slate-350 hover:text-white'
            }\`}
          >
            {rate}x
          </button>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوفر هذا المشغل بيئة دراسة احترافية؛ تكتشف موضع التوقف السابق وتمنح الطالب خيار الاستئناف الفوري، مع تحكم سريع في سرعة الإلقاء الصوتي.",
      commonMistakes: "كتابة موضع التشغيل في `localStorage` أو قاعدة البيانات عند كل إطار لحدث `onTimeUpdate` (والذي يطلق 4 مرات في الثانية الواحدة)، مما يثقل أداء المتصفح.",
      bestPractices: "استخدم التقييد الزمني (Throttling) لحفظ الموضع الزمني كل 5 ثوانٍ فقط، واحفظ الموضع فوراً عند حدث `pause` أو `ended`.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="540" height="140" rx="10" fill="#090d16" stroke="#334155" />
  <circle cx="300" cy="100" r="30" fill="#6366f1" />
  <polygon points="293,88 293,112 313,100" fill="#ffffff" />
  <rect x="40" y="40" width="220" height="35" rx="6" fill="#1e293b" stroke="#38bdf8" />
  <text x="55" y="62" fill="#38bdf8" fontSize="10" fontWeight="bold">Resume at 04:12? [Yes] [No]</text>
  <rect x="470" y="40" width="90" height="25" rx="4" fill="#1e293b" />
  <text x="515" y="56" fill="#cbd5e1" fontSize="9" textAnchor="middle">1x | 1.25x | 1.5x</text>
  <rect x="45" y="150" width="510" height="6" rx="3" fill="#334155" />
  <rect x="45" y="150" width="240" height="6" rx="3" fill="#6366f1" />
</svg>`
    },
    {
      id: "33.4.f",
      title: "تتبع تقدم المتعلم واحتساب النسب (Progress Tracking & Completion Percentage)",
      technicalTerm: {
        english: "Deterministic Course Progress Calculator",
        pronunciation: "ديتيرمينستك كورس بروجريس كالكيولاتور",
        arabicMeaning: "حاسبة تقدم الدورة الحتمية"
      },
      description: "تعتمد دورة التعلم على وسم الدروس كمكتملة (`completedLessons: Set<lessonId>`). يتم حساب النسبة المئوية لإنجاز الدورة بمعادلة حتمية: `(عدد الدروس المكتملة / إجمالي دروس الدورة) * 100`. عندما تصل النسبة إلى 100%، يتم إطلاق طفرة فتح شهادة التخرج الرسمية (Issue Certificate Event).",
      realWorldAnalogy: "مثل شريط شحن البطارية في الهاتف؛ كلما أنهيت درساً يزداد مؤشر الشحن الأخضر بنسبة مئوية محسوبة بدقة، حتى يمتلئ الشريط تماماً وتصدر شارة الاكتمال.",
      whyItMatters: "التحفيز البصري (Gamification) وإشعار الطالب بإنجازه المستمر هما المحرك الأساسي لإكمال الدورات وتقليل نسب التسرب الدراسي.",
      syntax: "// حساب نسبة الإنجاز المئوية\nconst progressPercent = Math.round((completedLessonIds.length / totalLessonsCount) * 100);",
      simpleExample: `// شريط التقدم البصري للدورة
import React from 'react';

export function ProgressBar({ percent }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs text-slate-350">
        <span>نسبة الإنجاز</span>
        <span className="font-mono font-bold text-white">{percent}%</span>
      </div>
      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
        <div 
          className="bg-indigo-600 h-full transition-all duration-300 rounded-full"
          style={{ width: \`\${percent}%\` }}
        />
      </div>
    </div>
  );
}`,
      advancedExample: `// Hook لإدارة وسم اكتمال الدروس وفتح الشهادة التلقائي
import { useState, useCallback, useMemo } from 'react';

export function useCourseProgressTracker(courseId, totalLessonIds = []) {
  const [completedIds, setCompletedIds] = useState(() => {
    const saved = localStorage.getItem(\`progress_\${courseId}\`);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  // وسم درس كمكتمل أو غير مكتمل
  const toggleLessonComplete = useCallback((lessonId) => {
    setCompletedIds(prev => {
      const next = new Set(prev);
      if (next.has(lessonId)) {
        next.delete(lessonId);
      } else {
        next.add(lessonId);
      }
      localStorage.setItem(\`progress_\${courseId}\`, JSON.stringify(Array.from(next)));
      return next;
    });
  }, [courseId]);

  // حساب النسبة المئوية
  const percent = useMemo(() => {
    if (totalLessonIds.length === 0) return 0;
    return Math.round((completedIds.size / totalLessonIds.length) * 100);
  }, [completedIds, totalLessonIds]);

  const isCourseFinished = percent === 100;

  return { completedIds, toggleLessonComplete, percent, isCourseFinished };
}`,
      outputExplanation: "يحسب هذا النظام تقدم الطالب فورياً بدقة، ويخزن معرفات الدروس المكتملة في مجموعة `Set` لضمان سرعة بحث O(1)، ويتحقق من استحقاق الشهادة.",
      commonMistakes: "الاعتماد على رقم فهرس الدرس لحساب النسبة بدلاً من مصفوفة المعرفات الفريدة، مما يفسد حساب النسبة إذا تم إضافة دروس جديدة للمنهج لاحقاً.",
      bestPractices: "استخدم دائماً كائن `Set` أو مصفوفة معرفات فريدة لحساب الدروس المكتملة، ونفذ احتفالية بصرية بتأثير القصاصات (Confetti) عند الوصول إلى 100%.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="50" width="160" height="80" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="80" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Completed: 15 / 20</text>
  <text x="110" y="105" fill="#cbd5e1" fontSize="10" textAnchor="middle">Unique Lesson IDs</text>
  <path d="M 200 90 L 260 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="270" y="50" width="160" height="80" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="350" y="80" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Progress: 75%</text>
  <rect x="290" y="100" width="120" height="8" rx="4" fill="#334155" />
  <rect x="290" y="100" width="90" height="8" rx="4" fill="#10b981" />
  <path d="M 440 90 L 490 90" stroke="#10b981" strokeWidth="2" />
  <rect x="500" y="50" width="70" height="80" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="535" y="95" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">🎓 Cert</text>
</svg>`
    },
    {
      id: "33.4.g",
      title: "إنشاء اختبارات تفاعلية وتقييم الإجابات (Interactive Quizzes & Scoring Engine)",
      technicalTerm: {
        english: "Interactive Quiz State Machine & Assessment",
        pronunciation: "إنترأكتيف كويز ستيت ماشين آند أسيسمنت",
        arabicMeaning: "آلة حالة الاختبار التفاعلي ونظام التقييم"
      },
      description: "تتضمن منصات التعليم اختبارات تقييمية (Quizzes) بنهاية كل وحدة للتأكد من استيعاب الطالب. تعتمد دورة الاختبار على آلة حالة واضحة: عرض السؤال الحالي، قفل الاختيارات فور تحديد الإجابة، إظهار التعليل الفوري للإجابة الصحيحة والخاطئة، واحتساب النتيجة الإجمالية بنهاية الاختبار مع تحديد شرط النجاح (مثلاً 80% لاجتياز الوحدة).",
      realWorldAnalogy: "مثل اختبار إشارات المرور الإلكتروني؛ تختار الإشارة، ويضيء النظام فوراً باللون الأخضر أو الأحمر مع شرح القاعدة المرورية، ويظهر لك في النهاية إشعار النجاح أو إعادة الاختبار.",
      whyItMatters: "يعزز ترسيخ المعلومات في ذهن الطالب عبر الاسترجاع النشط (Active Recall) ويوفر معياراً موضوعياً لمنح شهادات الإتمام.",
      syntax: "// هيكل سؤال الاختبار\ninterface Question {\n  id: string;\n  question: string;\n  options: string[];\n  correctAnswer: number;\n  explanation: string;\n}",
      simpleExample: `// مكون سؤال اختبار تفاعلي فردي
import React, { useState } from 'react';

export function QuizQuestionCard({ q, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (idx) => {
    if (selected !== null) return; // قفل الاختيار بعد أول نقرة
    setSelected(idx);
    onAnswer(idx === q.correctAnswer);
  };

  return (
    <div className="p-5 bg-slate-850 rounded-2xl border border-slate-700/60 space-y-4">
      <h3 className="text-sm font-bold text-white">{q.question}</h3>
      <div className="space-y-2">
        {q.options.map((opt, idx) => {
          let style = 'bg-slate-800 text-slate-350 hover:bg-slate-750';
          if (selected !== null) {
            if (idx === q.correctAnswer) style = 'bg-emerald-600 text-white font-bold';
            else if (idx === selected) style = 'bg-rose-600 text-white';
          }

          return (
            <button
              key={idx}
              disabled={selected !== null}
              onClick={() => handleSelect(idx)}
              className={\`w-full text-start p-3 rounded-xl text-xs transition-colors \${style}\`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <p className="text-xs text-slate-350 bg-slate-900 p-3 rounded-xl border border-slate-800">
          💡 {q.explanation}
        </p>
      )}
    </div>
  );
}`,
      advancedExample: `// محرك الاختبار المتكامل مع احتساب النتيجة وشاشة التقييم النهائية
import React, { useState } from 'react';

export function FullLmsQuizEngine({ questions, passingScore = 80, onQuizPassed }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleQuestionAnswer = (isCorrect) => {
    if (isCorrect) setScore(prev => prev + 1);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const finalPercentage = Math.round((score / questions.length) * 100);
  const isPassed = finalPercentage >= passingScore;

  if (isFinished) {
    return (
      <div className="p-8 bg-slate-850 border border-slate-700 rounded-2xl text-center space-y-4">
        <span className="text-4xl">{isPassed ? '🎉' : '📚'}</span>
        <h3 className="text-lg font-bold text-white">
          {isPassed ? 'تهانينا! لقد اجتزت الاختبار بنجاح' : 'للأسف لم تجتز الاختبار هذه المرة'}
        </h3>
        <p className="text-sm text-slate-350 font-mono">
          درجتك: {finalPercentage}% (درجة النجاح: {passingScore}%)
        </p>
        {isPassed ? (
          <button onClick={onQuizPassed} className="px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-xs">
            متابعة إلى الوحدة التالية ➔
          </button>
        ) : (
          <button onClick={() => { setIsFinished(false); setCurrentIndex(0); setScore(0); }} className="px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-xl text-xs">
            إعادة محاولة الاختبار 🔄
          </button>
        )}
      </div>
    );
  }

  const q = questions[currentIndex];

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-xs text-slate-400">
        <span>السؤال {currentIndex + 1} من {questions.length}</span>
        <span>النتيجة الحالية: {score}</span>
      </div>
      <div className="p-6 bg-slate-850 rounded-2xl border border-slate-700">
        <h4 className="text-sm font-bold text-white mb-4">{q.question}</h4>
        <div className="space-y-2">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleQuestionAnswer(idx === q.correctAnswer)}
              className="w-full text-start p-3 bg-slate-800 hover:bg-indigo-600/40 text-slate-200 hover:text-white rounded-xl text-xs transition-colors"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "يدير هذا الكود سيناريو الاختبار التفاعلي خطوة بخطوة، ويقدم تقييماً حاسماً للدرجة يحدد أحقية الطالب في اجتياز الوحدة التعليمية.",
      commonMistakes: "كشف الإجابة الصحيحة `correctAnswer` في كود العميل (Client Bundle) أثناء الاختبارات الرسمية الحساسة، مما يتيح للطلاب معرفتها عبر أدوات المطور (DevTools).",
      bestPractices: "في الاختبارات الرسمية والنهائية، أرسل الإجابة المختارة إلى الخادم ليقوم بتقييمها وإرجاع النتيجة دون تضمين فهرس الإجابة الصحيحة في كائن السؤال الأولي.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="150" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="105" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Question Presenter</text>
  <text x="105" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle">Options Locked on click</text>
  <path d="M 190 90 L 250 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="45" width="140" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="330" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Evaluation Engine</text>
  <text x="330" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle">Score >= 80% ?</text>
  <path d="M 410 90 L 470 90" stroke="#10b981" strokeWidth="2" />
  <rect x="480" y="45" width="90" height="90" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="525" y="85" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Passed 🎉</text>
  <text x="525" y="105" fill="#10b981" fontSize="9" textAnchor="middle">Unlock Next</text>
</svg>`
    },
    {
      id: "33.4.h",
      title: "إنشاء لوحة تحكم المدرب (Instructor Dashboard & Course Builder)",
      technicalTerm: {
        english: "Instructor Studio & Curriculum Builder",
        pronunciation: "إنستراكتور ستوديو آند كوريكيولوم بيلدر",
        arabicMeaning: "استوديو المدرب وباني المناهج التعليمية"
      },
      description: "يحتاج صانعو المحتوى والمدربون إلى لوحة تحكم خاصة (Instructor Studio) تتيح لهم: استعراض إحصائيات المبيعات والأرباح، متابعة عدد الطلاب النشطين، وبناء المناهج التعليمية عبر محرر سحب وإفلات لترتيب الوحدات وإضافة مقاطع الفيديو والمرفقات ونشر الدورة (Draft vs Published State).",
      realWorldAnalogy: "مثل استوديو البث التلفزيوني؛ خلف الشاشة توجد غرفة تحكم معقدة للمخرج لإعداد الفقرات، وترتيب ظهور الضيوف، ومراقبة نسب المشاهدة التلفزيونية في الوقت الفعلي.",
      whyItMatters: "سهولة أدوات إنشاء المحتوى تجذب أفضل المدربين للمنصة وتسرع وتيرة إنتاج الدورات الجديدة.",
      syntax: "// نموذج حالة الدورة في استوديو المدرب\ninterface CourseDraft {\n  title: string;\n  status: 'draft' | 'under_review' | 'published';\n  modules: Module[];\n  earningsTotal: number;\n}",
      simpleExample: `// شريط حالة نشر الدورة في استوديو المدرب
import React from 'react';

export function CoursePublishStatus({ status, onPublishToggle }) {
  const isPublished = status === 'published';

  return (
    <div className="flex items-center justify-between p-4 bg-slate-800 rounded-xl border border-slate-700">
      <div>
        <span className="text-xs text-slate-400 block">حالة الدورة</span>
        <span className={\`text-xs font-bold \${isPublished ? 'text-emerald-400' : 'text-amber-400'}\`}>
          {isPublished ? 'منشورة ومتاحة للطلاب 🟢' : 'مسودة غير منشورة 🟡'}
        </span>
      </div>
      <button
        onClick={onPublishToggle}
        className={\`px-4 py-2 rounded-lg text-xs font-bold transition-colors \${
          isPublished ? 'bg-slate-700 text-slate-350 hover:bg-slate-600' : 'bg-emerald-600 text-white hover:bg-emerald-500'
        }\`}
      >
        {isPublished ? 'تحويل إلى مسودة' : 'نشر الدورة الآن'}
      </button>
    </div>
  );
}`,
      advancedExample: `// باني المنهج التعليمي للمدرب مع إضافة وحذف الوحدات والدروس
import React, { useState } from 'react';

export function CurriculumBuilder({ initialModules = [], onSave }) {
  const [modules, setModules] = useState(initialModules);

  // إضافة وحدة تعليمية جديدة
  const addModule = () => {
    const newMod = {
      id: \`mod-\${Date.now()}\`,
      title: 'وحدة تعليمية جديدة',
      lessons: []
    };
    setModules(prev => [...prev, newMod]);
  };

  // إضافة درس داخل وحدة معينة
  const addLessonToModule = (moduleId) => {
    setModules(prev => prev.map(m => {
      if (m.id === moduleId) {
        return {
          ...m,
          lessons: [
            ...m.lessons,
            { id: \`les-\${Date.now()}\`, title: 'درس جديد', durationSeconds: 300 }
          ]
        };
      }
      return m;
    }));
  };

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-white">هيكلة محتوى ومنهاج الدورة</h3>
        <button onClick={addModule} className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold">
          + إضافة وحدة جديدة
        </button>
      </div>

      <div className="space-y-4">
        {modules.map((m, idx) => (
          <div key={m.id} className="p-4 bg-slate-850 border border-slate-700 rounded-xl space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-indigo-400">الوحدة {idx + 1}: {m.title}</span>
              <button
                onClick={() => addLessonToModule(m.id)}
                className="text-[11px] text-slate-350 hover:text-white bg-slate-800 px-2.5 py-1 rounded"
              >
                + إضافة درس
              </button>
            </div>

            <div className="space-y-1.5 pl-4 border-l border-slate-700">
              {m.lessons.map(les => (
                <div key={les.id} className="p-2 bg-slate-900 rounded text-xs text-slate-300 flex justify-between">
                  <span>📹 {les.title}</span>
                  <span className="text-slate-500 text-[10px]">5 دقائق</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوفر الكود أدوات تحكم مرنة تتيح للمدرب بناء هيكل دورته وتعديل محاورها بمرونة وسهولة مع الحفاظ على الربط الهرمي للبيانات.",
      commonMistakes: "السماح بنشر الدورة دون التحقق من احتوائها على وحدة واحدة ودرس واحد على الأقل، مما يسبب أخطاء في واجهة الطلاب المسجلين.",
      bestPractices: "أضف شريط فحص متطلبات النشر (Publishing Checklist) مثل: إضافة غلاف، تحديد سعر، وإضافة 3 دروس على الأقل قبل تفعيل زر النشر.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="140" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="100" y="70" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">KPI Overview</text>
  <text x="100" y="95" fill="#cbd5e1" fontSize="10" textAnchor="middle">Students: 1,420</text>
  <text x="100" y="115" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Revenue: $14,200</text>
  <path d="M 180 90 L 250 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="40" width="180" height="100" rx="8" fill="#1e293b" stroke="#6366f1" />
  <text x="350" y="70" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">Curriculum Studio</text>
  <text x="350" y="95" fill="#94a3b8" fontSize="10" textAnchor="middle">Add Modules & Lessons</text>
  <text x="350" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Upload Videos / Assets</text>
  <path d="M 450 90 L 500 90" stroke="#10b981" strokeWidth="2" />
  <rect x="510" y="40" width="60" height="100" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="540" y="95" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Publish</text>
</svg>`
    },
    {
      id: "33.4.i",
      title: "إدارة صلاحيات المدربين والطلاب (Instructor vs Student RBAC)",
      technicalTerm: {
        english: "Multi-Role LMS Access Control Matrix",
        pronunciation: "ملتي رول إل إم إس أكسيس كنترول ماتريكس",
        arabicMeaning: "مصفوفة التحكم في الوصول متعددة الأدوار لمنصة التعليم"
      },
      description: "تتطلب منصات التعليم عزلاً صارماً للأدوار (RBAC): 'الطالب' (Student) يملك صلاحيات المشاهدة والتعليق وتقديم الاختبارات للدورات التي التحق بها فقط؛ 'المدرب' (Instructor) يملك صلاحية تعديل وحذف دوراته هو فقط (Owner-scoped authorization) دون المساس بدورات زملائه المدربين؛ بينما يملك 'مدير النظام' (Super Admin) صلاحية مراجعة الدورات، والموافقة على النشر، وإدارة المدفوعات.",
      realWorldAnalogy: "مثل الصلاحيات في الجامعة؛ الطالب يملك مفتاح خزانته فقط، والأستاذ يملك مفتاح مكتبه ومختبره، بينما يملك عميد الكلية المفتاح الرئيسي (Master Key) لجميع القاعات.",
      whyItMatters: "حماية حقوق الملكية الفكرية للمدربين ومنع وصول الطلاب لمسودات الامتحانات غير المعتمدة.",
      syntax: "// التحقق من ملكية الدورة للمدرب\nconst canEditCourse = (user, course) => {\n  if (user.role === 'admin') return true;\n  return user.role === 'instructor' && course.instructorId === user.id;\n};",
      simpleExample: `// حارس زر تعديل الدورة المعتمد على الملكية
import React from 'react';

export function EditCourseButton({ currentUser, course, onEdit }) {
  const canEdit = currentUser.role === 'admin' || 
    (currentUser.role === 'instructor' && course.instructorId === currentUser.id);

  if (!canEdit) return null;

  return (
    <button onClick={onEdit} className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded text-xs">
      تعديل محتوى الدورة ✏️
    </button>
  );
}`,
      advancedExample: `// Hook للتحقق من صلاحيات استهلاك وإدارة محتوى الدورة
import { useMemo } from 'react';

export function useCoursePermissions(user, course) {
  return useMemo(() => {
    if (!user) {
      return { canView: false, canEdit: false, canManageGrades: false, isEnrolled: false };
    }

    const isAdmin = user.role === 'admin';
    const isOwnerInstructor = user.role === 'instructor' && course.instructorId === user.id;
    const isEnrolled = user.enrolledCourses?.includes(course.id) || false;

    return {
      // الطالب يشاهد إذا كان مسجلاً، والمدرب يشاهد دورته، والأدمن يشاهد الكل
      canViewContent: isAdmin || isOwnerInstructor || isEnrolled,
      canEditCourse: isAdmin || isOwnerInstructor,
      canManageGrades: isAdmin || isOwnerInstructor,
      isEnrolled
    };
  }, [user, course]);
}`,
      outputExplanation: "يوفر هذا الـ Hook فحصاً شاملاً للصلاحيات، مما يمنع المدربين من العبث بدورات بعضهم البعض، ويضمن عدم عرض فيديوهات الدروس إلا للطلاب المسجلين رسمياً.",
      commonMistakes: "التحقق من الصلاحيات بالاعتماد فقط على مسار الـ URL (مثل إخفاء زر التعديل في الواجهة) دون فحص الـ JWT وحقل `instructorId` في خادم الـ API.",
      bestPractices: "قم دائماً بربط عمليات التعديل والحذف في الخادم بفحص `WHERE course_id = $1 AND instructor_id = $2` لفرض الأمان على مستوى قاعدة البيانات.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <g transform="translate(40, 40)">
    <rect width="130" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" />
    <text x="65" y="30" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Student</text>
    <text x="65" y="55" fill="#cbd5e1" fontSize="9" textAnchor="middle">Enrolled Only</text>
    <text x="65" y="75" fill="#cbd5e1" fontSize="9" textAnchor="middle">Quizzes & Certs</text>
  </g>
  <g transform="translate(230, 40)">
    <rect width="140" height="100" rx="8" fill="#1e293b" stroke="#818cf8" strokeWidth="2" />
    <text x="70" y="30" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">Instructor</text>
    <text x="70" y="55" fill="#cbd5e1" fontSize="9" textAnchor="middle">Own Courses Only</text>
    <text x="70" y="75" fill="#cbd5e1" fontSize="9" textAnchor="middle">Curriculum Edit</text>
  </g>
  <g transform="translate(430, 40)">
    <rect width="130" height="100" rx="8" fill="#1e293b" stroke="#f59e0b" />
    <text x="65" y="30" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Admin</text>
    <text x="65" y="55" fill="#cbd5e1" fontSize="9" textAnchor="middle">All Courses</text>
    <text x="65" y="75" fill="#cbd5e1" fontSize="9" textAnchor="middle">Payouts & Audits</text>
  </g>
</svg>`
    },
    {
      id: "33.4.j",
      title: "إضافة البحث والتصنيفات (Faceted Search & Multi-filter Engine)",
      technicalTerm: {
        english: "Multi-Faceted Search & URL Syncing",
        pronunciation: "ملتي فاستيد سيرش آند يو آر إل سينكينج",
        arabicMeaning: "البحث متعدد الأوجه ومزامنة الرابط"
      },
      description: "يحتاج الطلاب للعثور على الدورات المناسبة عبر محرك بحث فوري يدعم التصفية متعددة الأوجه (Faceted Search): تصفية حسب المستوى (مبتدئ/متقدم)، المدة الزمنية (أقل من 3 ساعات / أكثر من 10 ساعات)، السعر (مجاني/مدفوع)، واللغة. يتم تخزين هذه الفلاتر في معلمات رابط الـ URL (`URLSearchParams`) لتمكين مشاركة نتائج البحث وحفظها.",
      realWorldAnalogy: "مثل فلاتر البحث في مواقع حجز الفنادق؛ تحدد المدينة، وعدد النجوم، والحد الأقصى للسعر، ووجود مسبح، وتظهر لك فوراً الفنادق المطابقة مع رابط يمكنك إرساله لصديقك.",
      whyItMatters: "يسهل على المتعلمين إيجاد ما يبحثون عنه بدقة من بين آلاف الدورات المتاحة دون إضاعة الوقت.",
      syntax: "// مزامنة فلاتر البحث في الرابط\nconst params = new URLSearchParams();\nparams.set('q', query);\nparams.set('level', 'beginner');\nhistory.pushState(null, '', \`?\${params.toString()}\`);",
      simpleExample: `// شريط البحث النصي المقيد زمنياً (Debounced Search Input)
import React, { useState, useEffect } from 'react';

export function SearchInput({ value, onSearchChange }) {
  const [term, setTerm] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearchChange(term);
    }, 300);
    return () => clearTimeout(handler);
  }, [term, onSearchChange]);

  return (
    <div className="relative">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="ابحث عن دورة أو مهارة أو مدرب..."
        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
      />
    </div>
  );
}`,
      advancedExample: `// محرك الفلترة متعدد الأوجه مع مطابقة الكلمات المفتاحية
import { useMemo } from 'react';

export function useFacetedCourseFilter(courses, filters) {
  return useMemo(() => {
    const { query = '', level = 'all', priceType = 'all', minRating = 0 } = filters;

    const normalizedQuery = query.trim().toLowerCase();

    return courses.filter(course => {
      // 1. فلتر البحث النصي (في العنوان أو اسم المدرب أو الوصف)
      if (normalizedQuery) {
        const matchesTitle = course.title.toLowerCase().includes(normalizedQuery);
        const matchesInstructor = course.instructor.toLowerCase().includes(normalizedQuery);
        if (!matchesTitle && !matchesInstructor) return false;
      }

      // 2. فلتر المستوى
      if (level !== 'all' && course.level !== level) {
        return false;
      }

      // 3. فلتر السعر (مجاني أم مدفوع)
      if (priceType === 'free' && course.price > 0) return false;
      if (priceType === 'paid' && course.price === 0) return false;

      // 4. فلتر الحد الأدنى للتقييم
      if (minRating > 0 && course.rating < minRating) {
        return false;
      }

      return true;
    });
  }, [courses, filters]);
}`,
      outputExplanation: "يقوم هذا المحرك بدمج جميع معايير البحث والفرز في دورة فحص واحدة سريعة، مما ينتج قائمة دورات مطابقة تماماً لرغبة الطالب وبسرعة 60 إطاراً في الثانية.",
      commonMistakes: "تنفيذ الفلترة متعددة الأوجه عبر استدعاءات API متعددة متتالية، مما يسبب بطء الاستجابة واستهلاكاً كبيراً لقاعدة البيانات.",
      bestPractices: "قم بإجراء الفلترة في جانب العميل (Client-side) إذا كان عدد الدورات في حدود بضع مئات، وانتقل إلى فهارس البحث المخصصة (Elasticsearch / Meilisearch) في المنصات العملاقة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="70" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Query: "React"</text>
  <text x="110" y="92" fill="#94a3b8" fontSize="10" textAnchor="middle">Level: Beginner</text>
  <text x="110" y="112" fill="#94a3b8" fontSize="10" textAnchor="middle">Price: Free</text>
  <path d="M 195 90 L 255 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#6366f1" />
  <text x="340" y="80" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">Faceted Filter Pipe</text>
  <text x="340" y="105" fill="#cbd5e1" fontSize="9" textAnchor="middle">Single Pass (O(N))</text>
  <path d="M 425 90 L 485 90" stroke="#10b981" strokeWidth="2" />
  <rect x="490" y="45" width="80" height="90" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="530" y="95" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">12 Results</text>
</svg>`
    },
    {
      id: "33.4.k",
      title: "تحسين صفحات الدورات لمحركات البحث (SEO & JSON-LD Structured Data)",
      technicalTerm: {
        english: "Course Schema JSON-LD & Dynamic OpenGraph",
        pronunciation: "كورس سكيما جيسون إل دي آند دايناميك أوبن جراف",
        arabicMeaning: "بيانات الدورة المنظمة JSON-LD وبطاقات OpenGraph الديناميكية"
      },
      description: "تعتمد المنصات التعليمية الكبرى على الزيارات القادمة من جوجل (Organic Traffic). يتطلب تحسين محركات البحث تضمين بيانات منظمة معتمدة من Schema.org بنوع `\"@type\": \"Course\"` بصيغة JSON-LD. تشمل هذه البيانات اسم الدورة، اسم المدرب، الوصف، والتقييم الإجمالي، مما يجعل جوجل يعرض الدورة كبطاقة غنية (Rich Result) تحتوي على النجوم وسعر الدورة مباشرة في نتائج البحث.",
      realWorldAnalogy: "مثل وضع بطاقة معلومات معيارية ملونة على باب متجرك؛ لا يحتاج زائر الشارع لدخول المتجر لمعرفة أوقات العمل والأسعار، بل يراها بوضوح من الخارج فيقرر الدخول فوراً.",
      whyItMatters: "ظهور التقييمات والنجوم وسعر الدورة في نتائج بحث جوجل يرفع معدل النقر (CTR) بنسبة تصل إلى 30% مقارنة بالروابط النصية العادية.",
      syntax: "// بيانات Schema.org للدورة بصيغة JSON-LD\n<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Course\",\n  \"name\": \"دورة React الاحترافية\",\n  \"description\": \"تعلم React من الصفر...\",\n  \"provider\": { \"@type\": \"Organization\", \"name\": \"LMS Platform\" }\n}\n</script>",
      simpleExample: `// مكون وسوم OpenGraph للمشاركة على وسائل التواصل الاجتماعي
import React from 'react';
import { Helmet } from 'react-helmet-async';

export function CourseSocialMeta({ course }) {
  return (
    <Helmet>
      <title>{course.title} | منصة التعليم</title>
      <meta name="description" content={course.description} />
      <meta property="og:title" content={course.title} />
      <meta property="og:description" content={course.description} />
      <meta property="og:image" content={course.thumbnail} />
      <meta property="og:type" content="article" />
    </Helmet>
  );
}`,
      advancedExample: `// توليد وسم Schema.org Course JSON-LD الكامل والمعتمد من جوجل
import React from 'react';

export function CourseStructuredData({ course }) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'أكاديمية البرمجة الحديثة',
      sameAs: 'https://example.com'
    },
    instructor: {
      '@type': 'Person',
      name: course.instructor
    },
    offers: {
      '@type': 'Offer',
      price: course.price,
      priceCurrency: 'USD',
      category: 'Paid'
    },
    aggregateRating: course.rating ? {
      '@type': 'AggregateRating',
      ratingValue: course.rating.toFixed(1),
      reviewCount: course.studentsCount || 10
    } : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}`,
      outputExplanation: "يقوم هذا المكون بحقن شفرة JSON-LD في ترويسة الصفحة بصمت، مما يسمح لعناكب محركات البحث بقراءة مواصفات الدورة وتقييماتها بدقة وعرضها كبطاقات مميزة.",
      commonMistakes: "كتابة نصوص غير متطابقة بين وسم JSON-LD والمحتوى الظاهر للمستخدم على الصفحة، مما قد يعرض الموقع لعقوبة 'التضليل' من محركات البحث.",
      bestPractices: "استخدم دائماً أداة Google Rich Results Test للتحقق من خلو وسوم `Course` من الأخطاء التحذيرية.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Course JSON-LD</text>
  <text x="110" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">@type: "Course"</text>
  <text x="110" y="115" fill="#94a3b8" fontSize="9" textAnchor="middle">aggregateRating: 4.9</text>
  <path d="M 195 90 L 255 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="45" width="130" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="325" y="75" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">Google Bot</text>
  <text x="325" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle">Schema Parser</text>
  <path d="M 395 90 L 455 90" stroke="#10b981" strokeWidth="2" />
  <rect x="460" y="45" width="110" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="515" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Rich Snippet</text>
  <text x="515" y="95" fill="#facc15" fontSize="10" textAnchor="middle">⭐⭐⭐⭐⭐</text>
  <text x="515" y="115" fill="#cbd5e1" fontSize="9" textAnchor="middle">4.9 (1.2k votes)</text>
</svg>`
    },
    {
      id: "33.4.l",
      title: "دعم اللغة العربية والإنجليزية وتغيير الاتجاه (Internationalization & RTL/LTR)",
      technicalTerm: {
        english: "Bi-directional i18n & Logical CSS Properties",
        pronunciation: "باي دايريكشنال آي إيتين إن آند لوجيكال سي إس إس بروبرتيز",
        arabicMeaning: "التدويل ثنائي الاتجاه وخصائص CSS المنطقية"
      },
      description: "تحتاج المنصات التعليمية الموجهة للعالم العربي إلى دعم كامل للغتين العربية والإنجليزية. لا يقتصر ذلك على ترجمة النصوص فقط، بل يتطلب دعماً معمارياً ثنائياً لتخطيط الواجهة (Bi-directional Layout): تبديل اتجاه المستند `dir=\"rtl\"` و`dir=\"ltr\"`، واستخدام خصائص CSS المنطقية الحديثة مثل `margin-inline-start` و`text-align: start` بدلاً من `margin-left` و`text-align: right`، لضمان قلب واجهة العرض وانعكاس الأشرطة الجانبية بسلاسة فائقة.",
      realWorldAnalogy: "مثل تصميم كتاب يطبع بنسختين متطابقتين؛ النسخة العربية تُفتح أوراقها من اليمين إلى اليسار، والنسخة الإنجليزية تُفتح من اليسار إلى اليمين، دون تشويه الرسوم التوضيحية أو أماكن العناوين.",
      whyItMatters: "يوفر تجربة أصيلة ومريحة للمتعلم العربي تضاهي المنتجات العالمية، مع سهولة التوسع لجمهور دولي عبر لغات متعددة.",
      syntax: "// تبديل اتجاه المستند في جذر التطبيق\ndocument.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';\ndocument.documentElement.lang = language;",
      simpleExample: `// زر التبديل السريع بين اللغتين العربية والإنجليزية
import React from 'react';

export function LanguageToggle({ currentLang, onToggle }) {
  return (
    <button
      onClick={() => onToggle(currentLang === 'ar' ? 'en' : 'ar')}
      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold border border-slate-700 transition-colors"
    >
      <span>🌐</span>
      <span>{currentLang === 'ar' ? 'English' : 'العربية'}</span>
    </button>
  );
}`,
      advancedExample: `// سياق التدويل الشامل مع ملفات القواميس وتحديث سمات المستند
import { createContext, useContext, useState, useEffect } from 'react';

const DICTIONARY = {
  ar: {
    browseCourses: 'تصفح الدورات',
    enrollNow: 'سجل الآن',
    completed: 'مكتمل',
    nextLesson: 'الدرس التالي',
    searchPlaceholder: 'ابحث عن مهارة جديدة...'
  },
  en: {
    browseCourses: 'Browse Courses',
    enrollNow: 'Enroll Now',
    completed: 'Completed',
    nextLesson: 'Next Lesson',
    searchPlaceholder: 'Search for a new skill...'
  }
};

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('app_lang') || 'ar');

  useEffect(() => {
    // تحديث اتجاه ولغة المستند في الـ HTML Root
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    localStorage.setItem('app_lang', lang);
  }, [lang]);

  // دالة ترجمة المفاتيح
  const t = (key) => DICTIONARY[lang]?.[key] || key;

  return (
    <I18nContext.Provider value={{ lang, setLang, t, isRtl: lang === 'ar' }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}`,
      outputExplanation: "يدير هذا السياق التدويل المزدوج بدقة؛ فيغير نصوص التطبيق ويوجه سمات `dir` و`lang` في جذر المستند تلقائياً، مما يجعل كافة المكونات تنعكس يمنة ويسرة بانسيابية.",
      commonMistakes: "استخدام فئات مثل `mr-4` و`ml-4` الثابتة في Tailwind بدلاً من فئات الخصائص المنطقية `me-4` (margin-inline-end) و`ms-4` (margin-inline-start).",
      bestPractices: "استخدم دائماً فئات Tailwind المنطقية مثل `ps-*` و`pe-*` و`text-start` لتتكيف الواجهة تلقائياً مع اتجاهي RTL وLTR دون تكرار قواعد الـ CSS.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="240" height="120" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="50" y="55" fill="#38bdf8" fontSize="11" fontWeight="bold">RTL (dir="rtl") - العربية</text>
  <rect x="50" y="70" width="40" height="60" rx="4" fill="#6366f1" />
  <rect x="100" y="70" width="150" height="25" rx="4" fill="#334155" />
  <rect x="100" y="105" width="150" height="25" rx="4" fill="#334155" />
  <path d="M 285 90 L 325 90" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="340" y="30" width="230" height="120" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="360" y="55" fill="#34d399" fontSize="11" fontWeight="bold">LTR (dir="ltr") - English</text>
  <rect x="360" y="70" width="140" height="25" rx="4" fill="#334155" />
  <rect x="360" y="105" width="140" height="25" rx="4" fill="#334155" />
  <rect x="510" y="70" width="40" height="60" rx="4" fill="#6366f1" />
</svg>`
    }
  ],
  quizzes: [
    {
      id: "quiz-33-4-1",
      question: "لماذا يُفضل استخدام خصائص CSS المنطقية (مثل margin-inline-start / ms-*) بدلاً من الخصائص المادية (ml-*)؟",
      options: [
        "لأن الخصائص المنطقية تعمل أسرع على متصفحات Safari القديمة فقط",
        "لأنها تتكيف تلقائياً مع تغيير اتجاه الصفحة بين RTL (العربية) وLTR (الإنجليزية) دون الحاجة لكتابة قواعد CSS إضافية",
        "لأنها مخصصة للطباعة على الورق فقط",
        "لأنها تلغي الحاجة لاستخدام Flexbox"
      ],
      correctAnswer: 1,
      explanation: "الخصائص المنطقية تعتمد على بداية ونهاية تدفق النص (Inline Flow)؛ فتكون جهة اليمين في العربية وجهة اليسار في الإنجليزية تلقائياً دون أي تكرار للكود."
    },
    {
      id: "quiz-33-4-2",
      question: "ما الأثر التسويقي والتقني الأبرز لتضمين Schema.org JSON-LD من نوع Course في صفحات الدورات؟",
      options: [
        "تشفير فيديوهات الدورة لمنع التحميل",
        "تمكين محركات البحث مثل Google من عرض بيانات غنية (Rich Snippets) تشمل النجوم، التقييمات، والسعر مباشرة في صفحة النتائج",
        "تسريع تحميل مقاطع الفيديو بنسبة 90%",
        "إجبار الطلاب على التسجيل في الدورة قبل تصفحها"
      ],
      correctAnswer: 1,
      explanation: "البيانات المنظمة تفهمها عناكب البحث وتظهرها كنتائج مميزة (Rich Cards) بجانب النجوم والأسعار مما يعزز مصداقية الدورة ومعدل النقر عليها."
    },
    {
      id: "quiz-33-4-3",
      question: "ما الطريقة الفضلى لمتابعة موضع تشغيل الفيديو (Playhead) وحفظه دون إرهاق المتصفح؟",
      options: [
        "إرسال طلب خادم عند كل إطار للفيديو (60 مرة في الثانية)",
        "تقييد الحفظ زمنياً (Throttling) كل 5 ثوانٍ، مع الحفظ الفوري عند حدثي الإيقاف المؤقت (pause) أو نهاية الدرس (ended)",
        "تخزين الفيديو كاملاً في LocalStorage",
        "منع المستخدم من إيقاف الفيديو حتى ينتهي"
      ],
      correctAnswer: 1,
      explanation: "تقييد الحفظ زمنياً كل بضع ثوانٍ وعند أحداث التوقف يحفظ نقطة الاستئناف بدقة ممتازة دون استهلاك موارد المعالج أو إغراق الشبكة بالطلبات."
    }
  ],
  practicalExercise: {
    id: "exercise-33-4",
    title: "بناء مشغل درس تعليمي متكامل مع تتبع التقدم التلقائي",
    description: "قم بإنشاء مكون مشغل درس تعليمي يحتوي على شاشة عرض محتوى محاكاة، زر لوضع علامة 'مكتمل'، شريط لحساب نسبة التقدم، والتنقل التلقائي للدرس التالي.",
    hints: [
      "احتفظ بقائمة دروس تحتوي على id وtitle.",
      "استخدم حالة currentLessonIndex لتحديد الدرس المعروض حالياً.",
      "احرص على كتابة تعليق عربي فوق كل سطر برمجي يوضح الغرض من الكود."
    ],
    solution: `// الحل النموذجي لمشغل الدرس التفاعلي مع تتبع التقدم
import React, { useState } from 'react';

// مصفوفة الدروس التجريبية
const LESSONS = [
  { id: 'l1', title: 'مقدمة في بناء تطبيقات الويب الحديثة', duration: '08:30' },
  { id: 'l2', title: 'هيكلة المكونات وإدارة الحالة الفعالة', duration: '14:20' },
  { id: 'l3', title: 'ربط واجهات برمجة التطبيقات والتعامل مع الأخطاء', duration: '12:00' },
  { id: 'l4', title: 'الاختبارات الآلية ونشر المشروع للإنتاج', duration: '10:45' }
];

export function InteractiveLessonPlayer() {
  // حالة فهرس الدرس الحالي
  const [currentIdx, setCurrentIdx] = useState(0);
  // حالة مجموعة معرفات الدروس المكتملة
  const [completedIds, setCompletedIds] = useState(new Set());

  const currentLesson = LESSONS[currentIdx];

  // وسم الدرس الحالي كمكتمل
  const markCurrentAsCompleted = () => {
    setCompletedIds(prev => {
      const next = new Set(prev);
      next.add(currentLesson.id);
      return next;
    });

    // الانتقال للدرس التالي إذا وُجد
    if (currentIdx + 1 < LESSONS.length) {
      setCurrentIdx(prev => prev + 1);
    }
  };

  // احتساب النسبة المئوية لإنجاز الدورة
  const progressPercent = Math.round((completedIds.size / LESSONS.length) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6 font-sans">
      {/* رأس المشغل وشريط التقدم */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-indigo-400 font-bold">دورة تطوير الواجهات المتقدمة</span>
          <span className="text-white font-mono font-bold">{progressPercent}% مكتمل</span>
        </div>
        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
          <div className="bg-indigo-600 h-full transition-all duration-300" style={{ width: \`\${progressPercent}%\` }} />
        </div>
      </div>

      {/* مساحة شاشة الفيديو المحاكية */}
      <div className="aspect-video bg-black rounded-xl border border-slate-800 flex flex-col items-center justify-center relative p-6 text-center">
        <span className="text-4xl mb-3">📹</span>
        <h3 className="text-base font-bold text-white mb-1">{currentLesson.title}</h3>
        <p className="text-xs text-slate-400 font-mono">المدة: {currentLesson.duration}</p>

        {completedIds.has(currentLesson.id) && (
          <span className="absolute top-3 right-3 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full">
            ✓ تم إكمال هذا الدرس
          </span>
        )}
      </div>

      {/* أزرار التحكم والتنقل */}
      <div className="flex items-center justify-between pt-2">
        <button
          disabled={currentIdx === 0}
          onClick={() => setCurrentIdx(prev => prev - 1)}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white rounded-xl text-xs font-semibold"
        >
          السابق ➔
        </button>

        <button
          onClick={markCurrentAsCompleted}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-emerald-600/20"
        >
          {completedIds.has(currentLesson.id) ? 'إكمال والانتقال للتالي' : 'وسم كمكتمل والمتابعة ✓'}
        </button>

        <button
          disabled={currentIdx === LESSONS.length - 1}
          onClick={() => setCurrentIdx(prev => prev + 1)}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white rounded-xl text-xs font-semibold"
        >
          التالي ➔
        </button>
      </div>
    </div>
  );
}`
  },
  topicInfographic: `<svg viewBox="0 0 600 240" className="w-full h-auto">
  <rect width="600" height="240" rx="16" fill="#0f172a" />
  <text x="300" y="35" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">LMS Enterprise Architecture Blueprint</text>
  <rect x="40" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="115" y="85" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Learner Portal</text>
  <text x="115" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Curriculum Accordion</text>
  <text x="115" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Playhead Resume</text>
  <text x="115" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Interactive Quizzes</text>
  <text x="115" y="185" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Frictionless Study</text>
  <path d="M 195 135 L 235 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#818cf8" strokeWidth="2" />
  <text x="315" y="85" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">Instructor Studio</text>
  <text x="315" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Curriculum Builder</text>
  <text x="315" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Revenue & Analytics</text>
  <text x="315" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Publishing Checklist</text>
  <text x="315" y="185" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle">Empowered Authors</text>
  <path d="M 395 135 L 435 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="440" y="60" width="130" height="150" rx="10" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="505" y="85" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Growth & Reach</text>
  <text x="505" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Course JSON-LD</text>
  <text x="505" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Faceted Search</text>
  <text x="505" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Bi-dir RTL/LTR</text>
  <text x="505" y="185" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Global Scalability</text>
</svg>`
};

