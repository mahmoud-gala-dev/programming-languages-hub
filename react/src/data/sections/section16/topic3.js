// src/data/sections/section16/topic3.js
// الموضوع 16.3: مبادئ كتابة كود قابل للصيانة في React (Maintainable Code & SOLID in React)

export const topic3 = {
  id: "16.3",
  title: "مبادئ كتابة كود قابل للصيانة (Maintainable Code Principles)",
  description:
    "دليل هندسي شامل لترسيخ أسس النظافة المعمارية في React: من تطبيق مبادئ SOLID (خاصة Single Responsibility) وDRY وKISS وYAGNI، مروراً بالفصل الصارم بين منطق العمل وواجهة المستخدم، وصولاً إلى تقليل الاقتران (Loose Coupling)، وتسمية الكيانات، وإدارة الاعتماديات، واستراتيجيات إعادة الهيكلة الآمنة (Refactoring) في بيئات الإنتاج الضخمة.",
  subtopics: [
    // 16.3.a
    {
      id: "16.3.a",
      title: "مبدأ المسؤولية الواحدة (Single Responsibility Principle - SRP)",
      englishTerm: "Single Responsibility Principle (سينغل ريسبونسبيلتي برينسيبل) - مبدأ المسؤولية الواحدة",
      description:
        "ينص مبدأ المسؤولية الواحدة (SRP) المنبثق من مبادئ SOLID على أن كل وحدة برمجية (مكون، دالة، أو مخصص Hook) يجب أن تمتلك سبباً واحداً فقط للتعديل (One Reason to Change). في عالم React، يُترجم هذا المبدأ إلى قاعدة ذهبية: لا تجعل المكون الواحد يقوم بجلب البيانات من الخادم، ومعالجة التحقق من صحة المدخلات، وتنسيق الأخطاء، وإدارة الحالة المعقدة، ورسم واجهة بصرية دقيقة في آنٍ واحد! عندما يجمع المكون عدة مسؤوليات، فإن أي تغيير طفيف في تصميم واجهة المستخدم قد يكسر منطق استدعاء الـ API بطريق الخطأ، وأي تغيير في بنية الرد الخلفي قد يتطلب تعديل شيفرة الرسوميات. المكون النظيف يركز حصرياً على مهمة محددة بوضوح: إما تمثيل واجهة عرض نقية، أو احتضان منطق عمل مفرز داخل Custom Hook.",
      analogy:
        "تخيل مطعماً راقياً: الطاهي يطبخ الطعام فقط، والنادل يوصل الطلبات للزبائن فقط، والمحاسب يدير الفواتير فقط. إذا قرر صاحب المطعم جعل شخص واحد يقوم بالطبخ وأخذ الطلبات وتقديم الطعام وغسل الأطباق وإصدار الفواتير في وقت واحد، فإن أي ارتباك في الفاتورة سيحرق الطعام في المطبخ! هكذا المكون الذي يفعل كل شيء: ينهار سريعاً ويصعب إصلاحه.",
      whyItMatters:
        "في الفرق البرمجية الكبيرة، المكونات المتوافقة مع SRP تكون سهلة الفهم لجميع المطورين، وسريعة الاختبار البرمجي (Unit Testing) لأنك تختبر وظيفة واحدة مستقلة، كما تقلل نزاعات الدمج (Git Merge Conflicts) لأن تعديل التصميم لا يتداخل مع ملفات تعديل منطق العمل.",
      syntax: `// فصل المسؤوليات: الخطاف للمنطق، والمكون للعرض
// 1. Hook مسؤول عن جلب وحفظ الحالة حصراً
function useUserData(userId) {
  // منطق جلب ومعالجة البيانات
  return { user, loading, error };
}

// 2. Component مسؤول عن رسم الواجهة حصراً
function UserProfileView({ user, loading, error }) {
  // واجهة بصرية نقية
  return <div>...</div>;
}`,
      simpleExample: `// مثال تطبيقي بسيط يوضح فصل جلب البيانات عن العرض التقديمي
import React, { useState, useEffect } from 'react';

// خطاف مخصص تقتصر مسؤوليته الوحيدة على إدارة منطق العد التنازلي
function useCountdown(initialSeconds) {
  // حالة تخزين الثواني المتبقية
  const [seconds, setSeconds] = useState(initialSeconds);

  // تأثير جانبي وحيد لتشغيل المؤقت
  useEffect(() => {
    // التحقق من انتهاء المؤقت
    if (seconds <= 0) return;
    // ضبط مؤقت زمني يتكرر كل ثانية
    const timerId = setInterval(() => {
      // إنقاص ثانية واحدة بالاعتماد على الحالة السابقة
      setSeconds((prev) => prev - 1);
    }, 1000);

    // تنظيف المؤقت عند تفكيك المكون لتفادي تسريب الذاكرة
    return () => clearInterval(timerId);
  }, [seconds]);

  // إرجاع قيمة الثواني المتبقية فقط
  return seconds;
}

// مكون بصري وظيفته الوحيدة عرض شارة العداد بالألوان المناسبة
export function CountdownBadge({ initialSeconds = 60 }) {
  // استهلاك المنطق من الخطاف المخصص
  const timeLeft = useCountdown(initialSeconds);

  // رسم الواجهة البصرية فقط دون القلق بشأن تفاصيل مؤقت setInterval
  return (
    <div className="p-4 bg-slate-900 rounded-lg text-center border border-slate-700">
      <span className="text-xs text-slate-400 block mb-1">الوقت المتبقي للجلسة</span>
      <span className="text-2xl font-mono font-bold text-amber-400">
        {timeLeft > 0 ? timeLeft + ' ثانية' : 'انتهت الجلسة!'}
      </span>
    </div>
  );
}`,
      advancedExample: `// تطبيق معماري متقدم يفصل مسؤوليات: جلب البيانات، التحقق، وتنسيق العرض
import React, { useState, useEffect } from 'react';

// المسؤولية الأولى: إدارة جلب بيانات المستخدم والأخطاء
function useUserProfile(userId) {
  // حالة تخزين كائن المستخدم
  const [profile, setProfile] = useState(null);
  // حالة مؤشر التحميل
  const [isLoading, setIsLoading] = useState(true);
  // حالة نص الخطأ
  const [errorMessage, setErrorMessage] = useState(null);

  // تنفيذ جلب البيانات عند تغير معرف المستخدم
  useEffect(() => {
    // تفعيل راية التحميل وتصفير الأخطاء السابقة
    setIsLoading(true);
    setErrorMessage(null);

    // محاكاة استدعاء API آمن
    const controller = new AbortController();
    fetch('/api/users/' + userId, { signal: controller.signal })
      .then((res) => {
        // التحقق من استجابة الشبكة
        if (!res.ok) throw new Error('فشل جلب الملف الشخصي');
        return res.json();
      })
      .then((data) => {
        // حفظ بيانات المستخدم
        setProfile(data);
        setIsLoading(false);
      })
      .catch((err) => {
        // إهمال الإلغاء المقصود
        if (err.name === 'AbortError') return;
        // تخزين رسالة الخطأ
        setErrorMessage(err.message);
        setIsLoading(false);
      });

    // دالة الإلغاء عند التفكيك
    return () => controller.abort();
  }, [userId]);

  // إرجاع كائن الحالة المعزول
  return { profile, isLoading, errorMessage };
}

// المسؤولية الثانية: مكون لعرض شاشة التحميل (Skeleton/Loader)
function ProfileSkeleton() {
  // رسم واجهة تحميل رمادية متحركة
  return (
    <div className="animate-pulse p-6 bg-slate-800 rounded-xl space-y-4">
      <div className="w-16 h-16 bg-slate-700 rounded-full" />
      <div className="h-4 bg-slate-700 rounded w-3/4" />
      <div className="h-3 bg-slate-700 rounded w-1/2" />
    </div>
  );
}

// المسؤولية الثالثة: مكون لعرض رسائل الأخطاء وزر إعادة المحاولة
function ProfileError({ message, onRetry }) {
  // رسم واجهة الخطأ التنبيهية
  return (
    <div className="p-6 bg-rose-950/40 border border-rose-500/40 rounded-xl text-center">
      <p className="text-rose-400 font-semibold mb-3">{message}</p>
      <button 
        onClick={onRetry}
        className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm rounded-lg transition"
      >
        إعادة المحاولة
      </button>
    </div>
  );
}

// المسؤولية الرابعة: مكون العرض التقديمي النهائي (Pure Presentational Component)
export function UserProfileCard({ userId }) {
  // استدعاء خطاف المنطق المعزول
  const { profile, isLoading, errorMessage } = useUserProfile(userId);

  // تفريع العرض بحسب حالة البيانات
  if (isLoading) return <ProfileSkeleton />;
  if (errorMessage) return <ProfileError message={errorMessage} onRetry={() => window.location.reload()} />;
  if (!profile) return null;

  // عرض بطاقة المستخدم النقية
  return (
    <article className="p-6 bg-slate-800/90 border border-slate-700 rounded-xl shadow-lg">
      <header className="flex items-center gap-4 mb-4">
        <img src={profile.avatarUrl} alt={profile.name} className="w-14 h-14 rounded-full border border-sky-400" />
        <div>
          <h3 className="text-lg font-bold text-white">{profile.name}</h3>
          <p className="text-sm text-sky-400">{profile.role}</p>
        </div>
      </header>
      <p className="text-sm text-slate-300 leading-relaxed">{profile.bio}</p>
    </article>
  );
}`,
      output:
        "مكون متماسك يعتمد على 4 وحدات مستقلة؛ كل وحدة تمتلك سبباً وحيداً للتغيير: الخطاف مسؤول عن الشبكة فقط، والمكونات الفرعية مسؤولة عن حالات العرض الخاصة بها فقط دون تشابك.",
      commonMistakes: [
        {
          mistake: "كتابة منطق جلب الشبكة والتحقق من الاستمارات والتصميم المباشر داخل نفس المكون في ملف واحد يتجاوز 500 سطر.",
          why: "يجعل الكود هشاً (Fragile) ومستحيلاً في كتابة اختبارات آلية دون عمل محاكاة (Mocking) معقدة لكل شيء.",
          fix: "استخرج منطق الحالة إلى Custom Hook معزول، وقسّم الواجهة الكبيرة إلى مكونات ذرية صغيرة مثل Avatar وUserBio وErrorBanner.",
        },
      ],
      bestPractices: [
        "إذا شعرت أن المكون يقوم بأكثر من وظيفة عند محاولة شرحه بصوت عالٍ (يحتوي على كلمة 'وأيضاً')، فهذه إشارة فورية لتفكيكه.",
        "اجعل معالجات الأحداث (Event Handlers) والتحويلات الحسابية الثقيلة خارج دالة المكون أو في أدوات مساعدة (Utilities) نقية.",
      ],
      infographic: {
        title: "مبدأ المسؤولية الواحدة (SRP) في React",
        caption: "تفكيك المسؤوليات إلى طبقات معمارية متخصصة ومستقلة",
        steps: [
          { number: 1, label: "Custom Hook", desc: "إدارة البيانات والحالة والشبكة حصرياً" },
          { number: 2, label: "Container Component", desc: "الربط بين المنطق ومكونات العرض الفرعية" },
          { number: 3, label: "Presentational Component", desc: "رسم واجهة مستخدم نقية تعتمد كلياً على Props" },
        ],
      },
    },

    // 16.3.b
    {
      id: "16.3.b",
      title: "مبدأ DRY (Don't Repeat Yourself)",
      englishTerm: "DRY: Don't Repeat Yourself (دونت ريبيت يورسيلف) - لا تكرر نفسك",
      description:
        "ينص مبدأ DRY على أن كل قطعة معرفة أو منطق برمجي في النظام يجب أن تمتلك تمثيلاً واحداً لا لبس فيه وموثوقاً (Single, Unambiguous Representation). في React، التكرار لا يقتصر على نسخ ولصق كود JSX المتطابق في عدة أماكن، بل يشمل أيضاً تكرار منطق الحسابات الرياضية، أو تكرار التحقق من صحة المدخلات، أو تكرار استدعاءات API المتماثلة في مكونات متعددة. ومع ذلك، يجب الحذر من التجريد المبكر (Premature Abstraction)؛ فالتكرار العرضي لثلاثة سطور من التصميم البصري أهون بكثير من إنشاء مكون عملاق متعدد المعاملات (Over-generalized Component) يحاول خدمة حالات استخدام غير متطابقة في الواقع.",
      analogy:
        "بدلاً من طباعة خريطة المدينة يدوياً باليد لكل سائح على حدة مع احتمالية ارتكاب أخطاء في كل نسخة، تقوم المطبعة بإنشاء قالب خريطة موحد وطباعة مئات النسخ منه بضغطة زر. إذا تغير اسم شارع، يتم تعديل القالب الأصلي مرة واحدة فقط لتتحدث جميع الخرائط تلقائياً.",
      whyItMatters:
        "تقليل التكرار يمنع ثغرات عدم الاتساق (Inconsistency Bugs): عندما يُكتشف خطأ في منطق احتساب الخصم أو الضريبة، يتم إصلاحه في دالة واحدة مركزية، بدلاً من البحث في 15 ملفاً مختلفاً للتأكد من تعديل كل النسخ المنسوخة يدوياً.",
      syntax: `// استخراج المنطق المتكرر إلى دالة نقية أو Custom Hook موحد
// قبل DRY: كود متكرر في عدة ملفات
// بعد DRY:
export function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('ar-SA', { style: 'currency', currency }).format(amount);
}`,
      simpleExample: `// تطبيق عملي لمبدأ DRY في توحيد تنسيق العملات والتواريخ
import React from 'react';

// دالة نفعية نقية مركزية لتنسيق الأرقام والعملات (DRY)
export function formatMoney(amount) {
  // استخدام ميزة التدويل القياسية للمتصفح
  return new Intl.NumberFormat('ar-EG', {
    style: 'currency',
    currency: 'EGP',
    maximumFractionDigits: 0,
  }).format(amount);
}

// مكون بطاقة سلعة يستفيد من الدالة الموحدة
export function ProductPriceRow({ title, price, discountPrice }) {
  // عرض الأسعار بصيغة موحدة دون تكرار كود التنسيق
  return (
    <div className="flex justify-between items-center py-2 border-b border-slate-700">
      <span className="text-slate-300 font-medium">{title}</span>
      <div className="flex items-center gap-3">
        {discountPrice && (
          <span className="text-sm line-through text-slate-500">
            {formatMoney(discountPrice)}
          </span>
        )}
        <span className="text-emerald-400 font-bold font-mono">
          {formatMoney(price)}
        </span>
      </div>
    </div>
  );
}`,
      advancedExample: `// تطبيق متقدم لمبدأ DRY: خطاف مخصص موحد لإدارة طلبات الحذف مع نافذة تأكيد
import React, { useState } from 'react';

// خطاف مخصص مركزي يمنع تكرار منطق التأكيد والحذف عبر عشرات الجداول في التطبيق
export function useConfirmAction() {
  // حالة تخزين العملية المطلوب تأكيدها
  const [pendingAction, setPendingAction] = useState(null);
  // حالة مؤشر تنفيذ العملية
  const [isExecuting, setIsExecuting] = useState(false);

  // دالة طلب تأكيد عملية معينة
  const requestAction = (title, description, actionCallback) => {
    // تخزين بيانات العملية
    setPendingAction({ title, description, callback: actionCallback });
  };

  // دالة إغلاق النافذة وإلغاء العملية
  const cancelAction = () => {
    // تفريغ العملية المعلقة
    setPendingAction(null);
  };

  // دالة تنفيذ العملية المؤكدة
  const executeAction = async () => {
    // التحقق من وجود عملية معلقة
    if (!pendingAction || isExecuting) return;
    // تفعيل راية التنفيذ
    setIsExecuting(true);
    try {
      // استدعاء دالة الإجراء المؤكدة
      await pendingAction.callback();
      // إغلاق النافذة عند النجاح
      setPendingAction(null);
    } catch (err) {
      // التعامل مع الخطأ
      console.error('فشلت العملية:', err);
    } finally {
      // إعادة تعيين راية التنفيذ
      setIsExecuting(false);
    }
  };

  // إرجاع واجهة التحكم والنافذة الموحدة
  return {
    requestAction,
    isExecuting,
    isOpen: Boolean(pendingAction),
    modalData: pendingAction,
    cancelAction,
    executeAction,
  };
}

// مكون جدول مستخدمين يستفيد من خطاف التأكيد الموحد دون كتابة حوار Modal يدوي مكرر
export function UsersTable({ users, onDeleteUser }) {
  // استدعاء منطق التأكيد الموحد
  const confirm = useConfirmAction();

  // معالج النقر على زر حذف مستخدم
  const handleDeleteClick = (user) => {
    // طلب تأكيد الحذف بنص مخصص
    confirm.requestAction(
      'تأكيد حذف الحساب',
      'هل أنت متأكد من رغبتك في حذف المستخدم ' + user.name + ' نهائياً؟',
      () => onDeleteUser(user.id)
    );
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative">
      <h2 className="text-xl font-bold text-white mb-4">قائمة المستخدمين</h2>
      <ul className="divide-y divide-slate-800">
        {users.map((user) => (
          <li key={user.id} className="py-3 flex justify-between items-center">
            <span className="text-slate-200">{user.name}</span>
            <button
              onClick={() => handleDeleteClick(user)}
              className="text-xs px-3 py-1.5 bg-rose-600/20 text-rose-400 hover:bg-rose-600/30 rounded border border-rose-500/30 transition"
            >
              حذف
            </button>
          </li>
        ))}
      </ul>

      {/* نافذة التأكيد الموحدة (DRY Modal) */}
      {confirm.isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-sm w-full space-y-4">
            <h3 className="text-lg font-bold text-white">{confirm.modalData?.title}</h3>
            <p className="text-sm text-slate-300">{confirm.modalData?.description}</p>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={confirm.cancelAction}
                disabled={confirm.isExecuting}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm rounded-lg"
              >
                إلغاء
              </button>
              <button
                onClick={confirm.executeAction}
                disabled={confirm.isExecuting}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm rounded-lg"
              >
                {confirm.isExecuting ? 'جارٍ التنفيذ...' : 'تأكيد'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}`,
      output:
        "توحيد منطق تنسيق الأرقام ونوافذ التأكيد الحوارية في كيانات قابلة للاستهلاك المتكرر يقلل أسطر الكود بأكثر من 60% ويضمن سلوكاً متناسقاً عبر كافة شاشات التطبيق.",
      commonMistakes: [
        {
          mistake: "التجريد المفرط (Over-Abstraction) ومحاولة دمج مكونين مختلفين في مكون واحد ضخم يحتوي على 20 خاصية وProps شرطية.",
          why: "يجعل صيانة المكون كابوساً. التكرار الطفيف (A little duplication is cheaper than the wrong abstraction) أفضل من تجريد خاطئ ومعقد.",
          fix: "طبق قاعدة الثلاثة (Rule of Three): لا تقم بتجريد المنطق إلى مكون أو خطاف مشترك إلا بعد أن يتكرر الكود في 3 أماكن متطابقة على الأقل.",
        },
      ],
      bestPractices: [
        "ضع الدوال المساعدة النقية التي لا تعتمد على حالة React داخل مجلد `src/utils/` أو `src/lib/`.",
        "اجعل الخطافات المشتركة عامة ومرنة ولكن ذات مدخلات ومخرجات واضحة وثابتة الأنواع.",
      ],
      infographic: {
        title: "تطبيق مبدأ DRY بذكاء",
        caption: "التوازن بين التجريد النافع وتجنب التعقيد الزائد",
        steps: [
          { number: 1, label: "المرحلة الأولى: الكود المباشر", desc: "كتابة المكون بالطريقة الأبسط لحل المشكلة الفورية" },
          { number: 2, label: "قاعدة الثلاثة (Rule of 3)", desc: "عند تكرار نفس المنطق ثلاث مرات، يحين وقت استخراجه" },
          { number: 3, label: "المستودع المشترك (Shared Hook/Util)", desc: "إنشاء دالة أو خطاف مركزي موثق ومختبر آلياً" },
        ],
      },
    },

    // 16.3.c
    {
      id: "16.3.c",
      title: "مبدأ KISS (Keep It Simple, Stupid)",
      englishTerm: "KISS: Keep It Simple, Stupid (كيب إت سيمبل ستوبيد) - اجعله بسيطاً ومباشراً",
      description:
        "يدعو مبدأ KISS إلى أن تكون معظم الأنظمة البرمجية تعمل بأعلى كفاءة وموثوقية عندما تظل بسيطة وخالية من التعقيدات غير المبررة. في تطوير تطبيقات React، يقع المطورون غالباً في فخ 'الإفراط الهندسي' (Over-engineering): استخدام Redux لإدارة حالة زر تبديل (Toggle) محلي، أو تغليف كل دالة وحساب بـ useMemo وuseCallback دون حاجة قياسية، أو إنشاء طبقات ومحولات لا نهائية لمعالجة كائن JSON بسيط قادم من الخادم. الكود الممتاز هو الكود البسيط والبديهي الذي يمكن لأي مطور مبتدئ قراءته وفهمه في غضون 30 ثانية دون الحاجة لفك ألغاز تجريدية غامضة.",
      analogy:
        "إذا كنت تريد إشعال شمعة صغيرة في غرفتك، فإنك تستخدم عود ثقاب أو ولاعة يدوية بسيطة. استخدام قاذف لهب هيدروليكي موجه بالأقمار الصناعية لإشعال الشمعة هو بالضبط ما يفعله المطور عندما يستخدم مكتبات معمارية معقدة لحل مشكلة تتطلب useState فقط!",
      whyItMatters:
        "الكود البسيط يحتوي على أسطر أقل، وبالتالي احتمالية ظهور أخطاء وثغرات أقل بنسبة طردية. كما أن الكود البسيط يوفر مئات الساعات عند انضمام أعضاء جدد للفريق (Onboarding) ويسرع تسليم الميزات للعملاء.",
      syntax: `// كود معقد وغير مبرر:
const [state, dispatch] = useReducer(toggleReducer, { isOpen: false });

// كود بسيط ومباشر يطبق KISS:
const [isOpen, setIsOpen] = useState(false);`,
      simpleExample: `// تطبيق مبدأ KISS: تبديل حالة الظهور بأبسط طريقة ممكنة
import React, { useState } from 'react';

// مكون إشعار قابل للطي يطبق البساطة الخالصة
export function SimpleAlert({ title, message }) {
  // حالة بسيطة ومباشرة لمعرفة هل الإشعار مرئي
  const [isVisible, setIsVisible] = useState(true);

  // إذا تم إغلاق الإشعار، لا ترسم شيئاً
  if (!isVisible) return null;

  // واجهة بسيطة ومباشرة دون تعقيدات معمارية
  return (
    <div className="p-4 bg-sky-950/40 border border-sky-500/30 rounded-lg flex justify-between items-start">
      <div>
        <h4 className="font-bold text-sky-400 text-sm">{title}</h4>
        <p className="text-xs text-slate-300 mt-1">{message}</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="text-slate-400 hover:text-white text-xs px-2 py-1"
        aria-label="إغلاق الإشعار"
      >
        ✕
      </button>
    </div>
  );
}`,
      advancedExample: `// مقارنة واقعية: تصفية وبحث في قائمة باستخدام KISS مقابل التعقيد المفرط
import React, { useState } from 'react';

// قائمة منتجات أولية بسيطة
const INITIAL_ITEMS = [
  { id: 1, name: 'لوحة مفاتيح ميكانيكية', category: 'عتاد', price: 120 },
  { id: 2, name: 'فأرة لاسلكية مريحة', category: 'عتاد', price: 60 },
  { id: 3, name: 'شاشة 4K فائقة الدقة', category: 'شاشات', price: 450 },
  { id: 4, name: 'حامل شاشة مزدوج', category: 'ملحقات', price: 80 },
];

export function ProductCatalogKISS() {
  // حالة نص البحث
  const [query, setQuery] = useState('');
  // حالة التصنيف المختار
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  // احتساب القائمة المفلترة مباشرة أثناء الرندر ببساطة (بدون useEffect وبدون useMemo طالما البيانات صغيرة)
  const filteredItems = INITIAL_ITEMS.filter((item) => {
    // التحقق من تطابق النص المبحوث عنه
    const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
    // التحقق من التصنيف المختار
    const matchesCategory = selectedCategory === 'الكل' || item.category === selectedCategory;
    // إرجاع النتيجة المشتركة
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
      <div className="flex flex-wrap gap-3 items-center justify-between">
        {/* حقل البحث المباشر */}
        <input
          type="text"
          placeholder="ابحث عن منتج..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500"
        />

        {/* أزرار التصنيف البسيطة */}
        <div className="flex gap-2">
          {['الكل', 'عتاد', 'شاشات', 'ملحقات'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={'px-3 py-1.5 text-xs rounded-lg transition ' + (
                selectedCategory === cat
                  ? 'bg-sky-600 text-white font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* عرض النتائج ببساطة */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
        {filteredItems.map((item) => (
          <div key={item.id} className="p-3 bg-slate-800/60 border border-slate-700/60 rounded-lg flex justify-between">
            <span className="text-sm font-medium text-slate-200">{item.name}</span>
            <span className="text-sm font-mono text-emerald-400 font-bold">\${item.price}</span>
          </div>
        ))}
      </div>

      {/* رسالة عند عدم العثور على نتائج */}
      {filteredItems.length === 0 && (
        <p className="text-center text-sm text-slate-500 py-4">لم يتم العثور على أي منتجات مطابقة.</p>
      )}
    </div>
  );
}`,
      output:
        "كود نظيف تماماً يخلو من التعقيد الزائد؛ لا وجود لمكتبات خارجية أو حالات متزامنة غير ضرورية مع useEffect، مما يجعل المكون فائق السرعة وسهل الصيانة بنسبة 100%.",
      commonMistakes: [
        {
          mistake: "استخدام useEffect لتحديث مصفوفة مفلترة وتخزينها في state منفصلة بدلاً من احتسابها مباشرة أثناء التصيير.",
          why: "يسبب تصييرين (Double Render) ويزيد تعقيد تتبع التزامن وأخطاء السباق البرمجي (Race Conditions).",
          fix: "احسب القيم المشتقة (Derived State) مباشرة في جسم الدالة كمتغير عادي.",
        },
      ],
      bestPractices: [
        "اختر دائماً الحل الأكثر بداهة والمكون من أقل عدد من الأجزاء المتحركة (Moving Parts).",
        "لا تستخدم نمطاً معمارياً معقداً لمجرد أنه عصري أو لأنك قرأت مقالاً عنه بالأمس ما لم تكن هناك حاجة حقيقية تفرضه.",
      ],
      infographic: {
        title: "مبدأ KISS: محاربة التعقيد",
        caption: "ثلاثة اختبارات سريعة للتأكد من بساطة الكود المكتوب",
        steps: [
          { number: 1, label: "اختبار الـ 30 ثانية", desc: "هل يمكن لمطور آخر فهم ما يفعله هذا المكون خلال نصف دقيقة؟" },
          { number: 2, label: "اختبار الاعتماديات", desc: "هل استخدمت أدوات React القياسية دون مكتبات إضافية غير ضرورية؟" },
          { number: 3, label: "اختبار الحالة المشتقة", desc: "هل تخلصت من useEffect لحساب المتغيرات المعتمدة على الـ Props؟" },
        ],
      },
    },

    // 16.3.d
    {
      id: "16.3.d",
      title: "مبدأ YAGNI (You Aren't Gonna Need It)",
      englishTerm: "YAGNI: You Aren't Gonna Need It (يو آرنت غونا نيد إت) - لن تحتاج إليها في الغالب",
      description:
        "ينص مبدأ YAGNI على أنه لا يجب على المبرمج أبداً إضافة ميزات أو خصائص أو طبقات مرونة معمارية إلا عندما تكون هناك حاجة فعلية وفورية ومطلوبة لها في الوقت الحالي، وليس بناءً على توقعات مستقبلية قد لا تحدث أبداً (Speculative Generality). في مشاريع React، يتجلى خرق هذا المبدأ عندما يقوم المطور بإنشاء زر بسيط للوحة التحكم، ولكنه يضيف له 15 خاصية مسبقاً (مثل دعم الأيقونات المتحركة، والدعم الصوتي، وتصدير PDF، والثيمات ثلاثية الأبعاد) بحجة 'ربما نحتاج ذلك في المستقبل!'. النتيجة هي كود ضخم ومربك يتطلب صيانة مستمرة واختبارات لسيناريوهات خيالية لن يطلبها المستخدم إطلاقاً.",
      analogy:
        "إذا كنت ذاهباً للتخييم لمدة ليلة واحدة في حديقة عامة مشمسة، فإنك تأخذ خيمة بسيطة وحقيبة نوم. حزم قارب مطاطي وجهاز إرسال فضائي وجهاز حفر بئر بحجة 'ربما نحتاج لحفر بئر نفط بالصدفة' سيرهق ظهرك ويضيع وقتك دون أي فائدة!",
      whyItMatters:
        "كل سطر كود تكتبه اليوم يتطلب صيانة، ومراجعة أمان، وتحديثاً عند ترقية المكتبات، وتكلفة في حجم حزمة الجافاسكريبت (Bundle Size). كتابة ما تحتاجه الآن فقط يوفر أكثر من 40% من وقت التطوير.",
      syntax: `// خرق YAGNI (خصائص تخمينية للمستقبل):
function Button({ label, onClick, supportsVR, aiAssistantTrigger, cryptoWalletSync }) { ... }

// احترام YAGNI (فقط ما يحتاجه التطبيق اليوم):
function Button({ label, onClick, variant = 'primary' }) { ... }`,
      simpleExample: `// مثال واقعي لتطبيق YAGNI على مكون حقل إدخال نصي
import React from 'react';

// مكون حقل إدخال مصمم لتلبية الاحتياج الفعلي الحالي فقط
export function SimpleInputField({ label, value, onChange, placeholder, error }) {
  return (
    <div className="space-y-1">
      {/* تسمية الحقل */}
      <label className="block text-xs font-semibold text-slate-300">{label}</label>
      {/* حقل الإدخال الأساسي فقط دون ميزات تخمينية مفرطة */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={'w-full px-3 py-2 bg-slate-800 border rounded-lg text-sm text-white focus:outline-none ' + (
          error ? 'border-rose-500 focus:border-rose-400' : 'border-slate-700 focus:border-sky-500'
        )}
      />
      {/* عرض رسالة الخطأ في حال وجودها */}
      {error && <p className="text-xs text-rose-400">{error}</p>}
    </div>
  );
}`,
      advancedExample: `// مثال يوضح كيف نطور النظام تدرجياً عند ظهور الاحتياج الفعلي بدلاً من التخمين المسبق
import React, { useState } from 'react';

// الخطوة 1 (اليوم): نموذج تواصل يحتاج فقط إلى الاسم والبريد الإلكتروني
// لم نقم ببناء نظام Forms معقد يدعم 50 نوع حقل، بل قمنا ببناء ما يريده العميل الآن
export function ContactFormYAGNI({ onSubmit }) {
  // حالة تخزين الحقول المطلوبة فعلياً اليوم
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // حالة التحقق المبسط
  const [status, setStatus] = useState('idle');

  // معالجة تغيير حقول الإدخال
  const handleChange = (e) => {
    // تحديث الخاصية المحددة في الكائن
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // معالجة إرسال النموذج
  const handleSubmit = async (e) => {
    // منع السلوك الافتراضي لتحديث الصفحة
    e.preventDefault();
    // تفعيل حالة التحميل
    setStatus('submitting');
    // إرسال البيانات للمعالج الخارجي
    await onSubmit(formData);
    // ضبط الحالة كمنجز
    setStatus('success');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 max-w-md">
      <h3 className="text-lg font-bold text-white">تواصل معنا</h3>

      <div>
        <label className="text-xs text-slate-400 block mb-1">الاسم الكامل</label>
        <input
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm"
        />
      </div>

      <div>
        <label className="text-xs text-slate-400 block mb-1">البريد الإلكتروني</label>
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm"
        />
      </div>

      <div>
        <label className="text-xs text-slate-400 block mb-1">الرسالة</label>
        <textarea
          name="message"
          rows={3}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-lg transition"
      >
        {status === 'submitting' ? 'جارٍ الإرسال...' : status === 'success' ? 'تم الإرسال بنجاح!' : 'إرسال الرسالة'}
      </button>
    </form>
  );
}`,
      output:
        "تطبيق مقتضب ومباشر يلبي احتياجات المنتج اليوم بنسبة 100%، خالي من أي ميزات ميتة (Dead Code) لم يطلبها المستخدمون، مما يقلل احتمالية الأخطاء إلى الصفر.",
      commonMistakes: [
        {
          mistake: "إنشاء طبقة محولات Generic Adapters معقدة لدعم 10 قواعد بيانات مختلفة بينما التطبيق يستخدم PostgreSQL حصراً.",
          why: "يهدر أسابيع من عمل الفريق في كتابة واختبار أكواد لن تعمل في الإنتاج قط.",
          fix: "قم بالبرمجة للمتطلبات الحالية الملموسة فقط، وعندما يطرأ متطلب جديد في المستقبل، أعد هيكلة الكود بسهولة.",
        },
      ],
      bestPractices: [
        "قاوم دائماً رغبة 'ماذا لو احتجنا كذا لاحقاً؟'. اسأل نفسك: هل هناك متطلب في تذكرة Jira الحالية يطلب هذا صراحة؟",
        "احذف فوراً أي كود تجريبي قديم أو خواص معلقة (Commented-out code) بدلاً من الاحتفاظ بها.",
      ],
      infographic: {
        title: "فلسفة YAGNI في هندسة React",
        caption: "وفر جهدك لما هو مطلوب فعلياً اليوم",
        steps: [
          { number: 1, label: "المتطلب الحالي فقط", desc: "ابنِ ما يحل مشكلة المستخدم الحالية الموثقة" },
          { number: 2, label: "تجنب التخمين", desc: "لا تضف معلمات أو حالات مرونة لسيناريوهات غير مؤكدة" },
          { number: 3, label: "التطور المستمر", desc: "عندما تطلب الميزة في المستقبل، ستضيفها بأفضل تصميم حينها" },
        ],
      },
    },

    // 16.3.e
    {
      id: "16.3.e",
      title: "فصل منطق العمل عن واجهة العرض (Separation of Concerns)",
      englishTerm: "Separation of Concerns: Business Logic vs Presentation (سيبريشن أوف كونسيرنز)",
      description:
        "يعد فصل منطق العمل (Business Logic) عن واجهة العرض التقديمية (Presentation) حجر الزاوية في بناء تطبيقات React احترافية وقابلة للتوسع. منطق العمل يشمل: استدعاءات الشبكة، والتحقق من صحة القواعد التجارية، والحسابات الرياضية، وإدارة دورة حياة البيانات وتخزينها المؤقت. أما واجهة العرض التقديمية فتشمل: هياكل عناصر HTML/JSX، وتنسيقات CSS، والاستجابة للنقر، وعرض النصوص والأيقونات. عندما يتم خلط هذين المستويين في ملف واحد، تصبح صيانة التطبيق كابوساً، وتفشل محاولات إعادة استخدام المكونات في منصات أخرى (مثل React Native)، وتصبح كتابة اختبارات الواجهة (UI Tests) مستحيلة دون محاكاة كاملة للشبكة.",
      analogy:
        "مثل مخرج المسرحية وكاتب السيناريو: كاتب السيناريو يكتب القصة والحوارات ومنطق الأحداث (منطق العمل)، بينما الممثل على خشبة المسرح يرتدي الملابس ويتحرك أمام الجمهور ليعرض المشهد (واجهة العرض). لا يتدخل الممثل في تغيير النص الأصلي، والكاتب لا يصعد للتمثيل أمام الجمهور!",
      whyItMatters:
        "يتيح لفرق العمل العمل بالتوازي: يمكن لمصممي الواجهات ومطوري CSS العمل على تجميل المكونات التقديمية بحرية تامة دون خوف من كسر استدعاءات API أو منطق الخصومات، بينما يمكن لمطوري المنطق كتابة وتطوير الخطافات المخصصة واختبارها عبر أدوات فحص الوحدات.",
      syntax: `// الفصل المعماري:
// 1. ملف المنطق: useCartLogic.js (Business Logic)
export function useCartLogic() { ... }

// 2. ملف العرض: CartView.jsx (Presentational Component)
export function CartView({ items, total, onRemove, onCheckout }) { ... }`,
      simpleExample: `// تطبيق مبسط لفصل منطق سلة الشراء عن واجهتها البصرية
import React, { useState } from 'react';

// 1. خطاف منطق العمل الخالص (Business Logic Hook)
export function useCartLogic(initialItems = []) {
  // حالة تخزين عناصر السلة
  const [items, setItems] = useState(initialItems);

  // دالة إضافة عنصر جديد
  const addItem = (product) => {
    setItems((prev) => [...prev, product]);
  };

  // دالة حذف عنصر بواسطة معرفه
  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // احتساب المجموع الإجمالي الخالص كمنطق عمل
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  // إرجاع واجهة التحكم والبيانات
  return { items, addItem, removeItem, totalPrice };
}

// 2. مكون العرض التقديمي النقي (Presentational Component)
export function CartView({ items, totalPrice, onRemove }) {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
      <h3 className="text-lg font-bold text-white">سلة التسوق ({items.length})</h3>
      <ul className="divide-y divide-slate-800">
        {items.map((item) => (
          <li key={item.id} className="py-2 flex justify-between items-center text-sm">
            <span className="text-slate-300">{item.name}</span>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 font-mono font-bold">\${item.price}</span>
              <button
                onClick={() => onRemove(item.id)}
                className="text-rose-400 hover:text-rose-300 text-xs"
              >
                حذف
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="pt-3 border-t border-slate-800 flex justify-between font-bold">
        <span className="text-white">الإجمالي:</span>
        <span className="text-emerald-400 font-mono">\${totalPrice}</span>
      </div>
    </div>
  );
}`,
      advancedExample: `// نظام تسجيل دخول متقدم مع فصل صارم بين منطق التحقق والشبكة وشاشة العرض
import React, { useState } from 'react';

// المستوى الأول: خطاف منطق العمل والتحقق واستدعاء الخادم
export function useAuthLogin(onSuccessRedirect) {
  // حالات حقول الاستمارة
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // حالات المعالجة
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [serverError, setServerError] = useState(null);

  // منطق التحقق التجاري الخالص من المدخلات
  const validateForm = () => {
    const errors = {};
    if (!email.includes('@')) errors.email = 'يرجى إدخال بريد إلكتروني صحيح';
    if (password.length < 8) errors.password = 'يجب ألا تقل كلمة المرور عن 8 خانات';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // دالة إرسال الطلب ومعالجة الرد
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setServerError(null);

    // فحص التحقق
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // محاكاة استدعاء الخادم
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'admin@test.com' && password === 'Secret1234') {
            resolve({ token: 'jwt-xyz-789' });
          } else {
            reject(new Error('البريد الإلكتروني أو كلمة المرور غير صحيحة'));
          }
        }, 1000);
      });

      // استدعاء دالة النجاح
      onSuccessRedirect?.();
    } catch (err) {
      setServerError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // إرجاع واجهة التحكم للمكون التقديمي
  return {
    email,
    setEmail,
    password,
    setPassword,
    fieldErrors,
    serverError,
    isLoading,
    handleLoginSubmit,
  };
}

// المستوى الثاني: مكون واجهة المستخدم الخالصة (Dumb/Presentational Component)
export function LoginFormPresentation({
  email,
  setEmail,
  password,
  setPassword,
  fieldErrors,
  serverError,
  isLoading,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm w-full space-y-4 shadow-xl">
      <h2 className="text-xl font-bold text-white text-center">تسجيل الدخول</h2>

      {/* تنبيه الخطأ العام من الخادم */}
      {serverError && (
        <div className="p-3 bg-rose-950/60 border border-rose-500/50 rounded-lg text-rose-300 text-xs text-center">
          {serverError}
        </div>
      )}

      {/* حقل البريد الإلكتروني */}
      <div>
        <label className="text-xs text-slate-300 block mb-1">البريد الإلكتروني</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@company.com"
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:border-sky-500 focus:outline-none"
        />
        {fieldErrors.email && <span className="text-xs text-rose-400 mt-1 block">{fieldErrors.email}</span>}
      </div>

      {/* حقل كلمة المرور */}
      <div>
        <label className="text-xs text-slate-300 block mb-1">كلمة المرور</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:border-sky-500 focus:outline-none"
        />
        {fieldErrors.password && <span className="text-xs text-rose-400 mt-1 block">{fieldErrors.password}</span>}
      </div>

      {/* زر تسجيل الدخول */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 disabled:bg-slate-700 text-white font-bold text-sm rounded-lg transition"
      >
        {isLoading ? 'جارٍ التحقق...' : 'دخول'}
      </button>
    </form>
  );
}

// المستوى الثالث: مكون التجميع النهائي (Container Component)
export function LoginFeaturePage() {
  // استدعاء الخطاف المخصص
  const auth = useAuthLogin(() => alert('تم تسجيل الدخول بنجاح!'));

  // ربط المعطيات بالمكون البصري
  return (
    <div className="flex justify-center items-center py-10">
      <LoginFormPresentation
        email={auth.email}
        setEmail={auth.setEmail}
        password={auth.password}
        setPassword={auth.setPassword}
        fieldErrors={auth.fieldErrors}
        serverError={auth.serverError}
        isLoading={auth.isLoading}
        onSubmit={auth.handleLoginSubmit}
      />
    </div>
  );
}`,
      output:
        "هيكل معماري نقي: تم إفراز كل منطق التحقق والشبكة داخل useAuthLogin مما يتيح اختباره دون شاشة، بينما LoginFormPresentation يمكن معاينتها بسهولة في Storybook دون الحاجة لخادم.",
      commonMistakes: [
        {
          mistake: "كتابة دوال `fetch()` مباشرة داخل معالج النقر `onClick` داخل زر في مكون العرض التقديمي.",
          why: "يجعل الزر مرتبطاً بشكل وثيق (Tightly Coupled) بنقطة نهاية شبكة معينة، ويمنع إعادة استخدام الزر في شاشات أخرى.",
          fix: "مرر دالة رد النداء `onAction` كخاصية للزر، ونفّذ استدعاء الشبكة في الحاوية أو الخطاف.",
        },
      ],
      bestPractices: [
        "استخدم نمط (Smart Container vs Dumb Component): المكون الذكي يدير البيانات والمكون البسيط يعرضها فقط.",
        "اجعل مكونات العرض التقديمي نادراً ما تستخدم useEffect، وفضّل أن تكون دوال نقية تعتمد بنسبة 100% على Props.",
      ],
      infographic: {
        title: "فصل منطق العمل عن واجهة العرض",
        caption: "طبقات هندسية معزولة لمرونة واختبارات فائقة",
        steps: [
          { number: 1, label: "Business Hook", desc: "استدعاءات API، التحقق من القواعد، الحسابات والبيانات" },
          { number: 2, label: "Container Page", desc: "استهلاك الخطافات وتمرير البيانات كـ Props للمكونات" },
          { number: 3, label: "Presentational View", desc: "هياكل JSX وتنسيقات CSS وعناصر الواجهة التفاعلية" },
        ],
      },
    },

    // 16.3.f
    {
      id: "16.3.f",
      title: "تقليل اقتران المكونات (Loose Coupling & High Cohesion)",
      englishTerm: "Loose Coupling & High Cohesion (لوس كابلينغ آند هاي كوهيجن) - الاقتران الضعيف والتماسك العالي",
      description:
        "الاقتران الضعيف (Loose Coupling) يعني أن المكونات والوحدات البرمجية لا تعتمد بشكل وثيق على التفاصيل الداخلية أو البنية التحتية للمكونات الأخرى؛ بل تتواصل فيما بينها عبر واجهات تعاقدية واضحة ومحدودة (مثل الـ Props). أما التماسك العالي (High Cohesion) فيعني أن كل العناصر الموجودة داخل المكون الواحد مترابطة وتعمل لخدمة هدف وظيفي موحد ومحدد بدقة. عندما يكون الاقتران شديداً (Tight Coupling)، فإن تعديل بنية كائن في المكون الأب يؤدي فوراً إلى انهيار وتلف خمسة مكونات أبناء. في المقابل، يتيح الاقتران الضعيف استبدال أي مكون بمكون آخر تماماً دون أن يتأثر بقية التطبيق.",
      analogy:
        "فكر في منفذ USB في حاسوبك الشخصي: المنفذ لا يهمه ما إذا كنت توصل به فأرة، أو لوحة مفاتيح، أو شاحن هاتف، أو مروحة صغيرة. طالما أن الجهاز يلتزم بمعيار USB (العقد)، سيعمل فوراً دون تعديل الحاسوب. هذا هو الاقتران الضعيف! في المقابل، لو كانت الفأرة ملحومة بأسلاك داخلية مباشرة في اللوحة الأم للحاسوب، فهذا اقتران شديد ومزعج.",
      whyItMatters:
        "يمنح النظام مرونة استثنائية (Agility): يمكنك استبدال مشغل الفيديو الافتراضي بمشغل فيديو متطور من مكتبة أخرى دون إعادة كتابة الشاشات التي تستضيفه، وتستطيع إعادة ترتيب المكونات وتعديل تصميمها دون خوف من الآثار الجانبية غير المتوقعة.",
      syntax: `// اقتران شديد (مرفوض): المكون يعتمد على بنية كائن معقد قادم من الخادم
function BadAvatar({ userApiResponse }) {
  return <img src={userApiResponse.data.attributes.profile.media.avatar} />;
}

// اقتران ضعيف (نظيف ومستحسن): المكون يعتمد على خصائص مباشرة فقط
function GoodAvatar({ src, alt, size = 'md' }) {
  return <img src={src} alt={alt} className={sizeMap[size]} />;
}`,
      simpleExample: `// تطبيق عملي لتقليل الاقتران في مكون البطاقة الإخبارية
import React from 'react';

// مكون بطاقة ذو اقتران ضعيف: لا يهتم من أين أتت البيانات، يطلب فقط ما يحتاجه للعرض
export function ArticleCard({ title, excerpt, date, authorName, onClickRead }) {
  return (
    <article className="p-5 bg-slate-850 border border-slate-700/80 rounded-xl space-y-3 hover:border-sky-500/50 transition">
      <div className="flex justify-between items-center text-xs text-slate-400">
        <span>{authorName}</span>
        <time>{date}</time>
      </div>
      <h3 className="text-base font-bold text-white">{title}</h3>
      <p className="text-xs text-slate-300 leading-relaxed">{excerpt}</p>
      <button
        onClick={onClickRead}
        className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-block pt-1"
      >
        اقرأ المزيد ←
      </button>
    </article>
  );
}`,
      advancedExample: `// نظام متقدم لمعالجة المدفوعات يوضح الاقتران الضعيف عبر نمط Inversion of Control
import React, { useState } from 'react';

// مكون بوابة الدفع: اقتران ضعيف جداً؛ يقبل أي وسيلة دفع طالما تحقق واجهة الدفع (Contract)
export function CheckoutPaymentProcessor({ orderAmount, paymentMethods, onPaymentSuccess }) {
  // وسيلة الدفع المختارة
  const [selectedMethodId, setSelectedMethodId] = useState(paymentMethods[0]?.id);
  // حالة المعالجة
  const [isProcessing, setIsProcessing] = useState(false);

  // العثور على مزود وسيلة الدفع النشطة
  const activeMethod = paymentMethods.find((m) => m.id === selectedMethodId);

  // تنفيذ عملية الدفع عبر المزود المختار دون معرفة تفاصيله المسبقة
  const handlePay = async () => {
    if (!activeMethod) return;
    setIsProcessing(true);
    try {
      // استدعاء دالة المعالجة المخصصة لمزود الدفع
      const result = await activeMethod.processPayment(orderAmount);
      onPaymentSuccess(result);
    } catch (err) {
      alert('فشلت عملية الدفع: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-5 max-w-md">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <h3 className="text-lg font-bold text-white">إتمام عملية الشراء</h3>
        <span className="text-emerald-400 font-mono font-bold">\${orderAmount}</span>
      </header>

      {/* خيارات وسائل الدفع المتاحة المحقونة خارجياً */}
      <div className="space-y-2">
        <label className="text-xs text-slate-400 block">اختر وسيلة الدفع:</label>
        <div className="grid grid-cols-2 gap-2">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethodId(method.id)}
              className={'p-3 rounded-lg border text-sm font-medium flex items-center gap-2 transition ' + (
                selectedMethodId === method.id
                  ? 'border-sky-500 bg-sky-950/40 text-white'
                  : 'border-slate-800 bg-slate-800/40 text-slate-400 hover:border-slate-700'
              )}
            >
              <span>{method.icon}</span>
              <span>{method.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* واجهة إضافية مخصصة للوسيلة المختارة (محقونة بمرونة) */}
      {activeMethod?.renderCustomFields?.()}

      {/* زر التأكيد العام */}
      <button
        onClick={handlePay}
        disabled={isProcessing}
        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-700 text-white font-bold text-sm rounded-lg transition"
      >
        {isProcessing ? 'جارٍ معالجة الدفع...' : 'تأكيد ودفع \${orderAmount}'}
      </button>
    </div>
  );
}

// مثال عملي لكيفية تهيئة المزودات المستقلة وحقنها في مكون المعالجة
export function PaymentIntegrationDemo() {
  // تعريف مزودات دفع مستقلة تماماً
  const availableGateways = [
    {
      id: 'credit_card',
      title: 'بطاقة ائتمان',
      icon: '💳',
      processPayment: async (amount) => {
        await new Promise((r) => setTimeout(r, 1200));
        return { transactionId: 'TX-CARD-99', status: 'PAID' };
      },
      renderCustomFields: () => (
        <input
          placeholder="رقم البطاقة: 4111 2222 3333 4444"
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white"
        />
      ),
    },
    {
      id: 'paypal',
      title: 'باي بال',
      icon: '🅿️',
      processPayment: async (amount) => {
        await new Promise((r) => setTimeout(r, 800));
        return { transactionId: 'TX-PP-55', status: 'PAID' };
      },
    },
  ];

  return (
    <div className="py-6 flex justify-center">
      <CheckoutPaymentProcessor
        orderAmount={199}
        paymentMethods={availableGateways}
        onPaymentSuccess={(res) => alert('نجح الدفع برقم العملية: ' + res.transactionId)}
      />
    </div>
  );
}`,
      output:
        "مكون دفع غير مقترن بأي بوابة بنكية محددة، مما يتيح إضافة بوابات دفع جديدة مستقبلاً مثل Apple Pay أو Stripe بمجرد تمرير كائن جديد دون تعديل سطر واحد في CheckoutPaymentProcessor.",
      commonMistakes: [
        {
          mistake: "تمرير كائنات بيانات خام مكدسة بالكامل مثل `user={rawBackendData}` بدلاً من تفكيك الخصائص المطلوبة فقط.",
          why: "يجعل المكون الصغير عالي التبعية لتركيبة بيانات الخادم، فإذا تغير اسم حقل في الخادم سينكسر المكون الصغير فوراً.",
          fix: "مرر فقط الحقول المحددة التي يستهلكها المكون صراحة: `<Avatar src={user.avatarUrl} name={user.name} />`.",
        },
      ],
      bestPractices: [
        "صمم واجهة الـ Props للمكون وكأنها مكتبة خارجية عامة ستنشرها على npm: مستقلة ولا تعرف شيئاً عن سياق تطبيقك الخاص.",
        "حافظ على التماسك العالي بجعل كل ملف يحتوي على وظيفة واضحة وأدوات متكاملة تخدم تلك الوظيفة حصراً.",
      ],
      infographic: {
        title: "الاقتران الضعيف والتماسك العالي",
        caption: "معايير تصميم مكونات مرنة وسهلة التبديل",
        steps: [
          { number: 1, label: "عقود محددة (Props Contracts)", desc: "المكون يطلب أقل قدر ممكن من البيانات للقيام بعمله" },
          { number: 2, label: "عزل التفاصيل (Information Hiding)", desc: "المكون الأب لا يحتاج لمعرفة البنية الداخلية للمكون الابن" },
          { number: 3, label: "سهولة الاستبدال (Pluggability)", desc: "إمكانية تبديل أي مكون بمكون بديل دون لمس بقية الشاشات" },
        ],
      },
    },

    // 16.3.g
    {
      id: "16.3.g",
      title: "اختيار أسماء واضحة ودلالية (Clean Naming Conventions)",
      englishTerm: "Clean Naming Conventions & Semantics (كلين نيمينغ كونفينشنز) - معايير التسمية النظيفة والدلالية",
      description:
        "يقول عالم الحاسوب الشهير فيل كارلتون: 'لا يوجد سوى أمرين صعبين في علوم الحاسوب: إبطال التخزين المؤقت وتسمية الأشياء'. التسمية الواضحة والمعبرة هي أهم وثيقة توثيقية في مشروعك البرمجي. في React، يساعد اتباع معايير تسمية قياسية ومتفق عليها الفريق في قراءة الكود كأنه لغة إنجليزية طبيعية: تبدأ المكونات بأحرف كبيرة بصيغة PascalCase، وتبدأ الخطافات المخصصة حصراً بكلمة 'use' متبوعة بفعل أو وصف، وتسمى معالجات الأحداث ببادئة 'handle' (مثل handleClick) بينما تسمى خواص ردود النداء ببادئة 'on' (مثل onClick أو onSubmit)، وتسمى المتغيرات المنطقية (Booleans) ببادئات مثل 'is' أو 'has' أو 'can' أو 'should'.",
      analogy:
        "تخيل دخولك إلى صيدلية كل زجاجات الأدوية فيها مكتوب عليها رموز غامضة مثل (x1 و d2 و temp). لن تستطيع إنقاذ أي مريض دون خوف من قتله بالخطأ! لكن عندما تكون العبوات مكتوبة بوضوح تام ودلالي: 'مسكن_ألم_خافض_حرارة' و'مضاد_حيوي_للالتهاب'، يصبح كل شيء آمناً وبديهياً.",
      whyItMatters:
        "تسميات الكود الواضحة تلغي الحاجة لكتابة مئات التعليقات الإيضاحية السطحية، وتقلل الأخطاء المنطقية الناتجة عن سوء فهم المتغيرات، وتسرع عمليات التدقيق البرمجي (Code Review).",
      syntax: `// القواعد القياسية للتسمية في React:
// 1. المكونات: PascalCase (اسم يعبر عن الكيان)
function UserProfileCard() { ... }

// 2. الخطافات: camelCase تبدأ بـ use
function useWindowDimensions() { ... }

// 3. الخواص والأحداث: onEvent مقابل handleEvent
function CustomButton({ onClick }) {
  const handleClick = () => { ... };
  return <button onClick={handleClick}>...</button>;
}

// 4. المتغيرات المنطقية: is/has/can/should
const [isLoading, setIsLoading] = useState(false);
const hasPermission = true;`,
      simpleExample: `// مقارنة سريعة بين التسميات السيئة والتسميات الاحترافية النظيفة
import React, { useState } from 'react';

// تسمية واضحة ودلالية للمكون
export function TaskToggleItem({ taskName, initialDone = false, onToggleStatus }) {
  // تسمية منطقية واضحة تبدأ بـ is
  const [isCompleted, setIsCompleted] = useState(initialDone);

  // تسمية المعالج الداخلي تبدأ بـ handle
  const handleCheckboxChange = (e) => {
    const nextStatus = e.target.checked;
    setIsCompleted(nextStatus);
    // استدعاء الخاصية الخارجية التي تبدأ بـ on
    onToggleStatus?.(nextStatus);
  };

  return (
    <label className="flex items-center gap-3 p-3 bg-slate-800/80 rounded-lg cursor-pointer">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange}
        className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500"
      />
      <span className={'text-sm ' + (isCompleted ? 'line-through text-slate-500' : 'text-slate-200')}>
        {taskName}
      </span>
    </label>
  );
}`,
      advancedExample: `// مثال متقدم يوضح التسميات النظيفة في الخطافات والمكونات المعقدة
import React, { useState, useEffect } from 'react';

// خطاف مخصص: يبدأ بـ use، أسماء الحالات بـ is/has، ودوال الإجراءات بأفعال واضحة
export function useNetworkStatusMonitor() {
  // حالة تعبر عن الاتصال ببادئة is
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  // حالة تعبر عن بطء الاتصال
  const [hasSlowConnection, setHasSlowConnection] = useState(false);

  useEffect(() => {
    // معالجات أحداث داخلية واضحة
    const handleOnlineEvent = () => setIsOnline(true);
    const handleOfflineEvent = () => setIsOnline(false);

    window.addEventListener('online', handleOnlineEvent);
    window.addEventListener('offline', handleOfflineEvent);

    return () => {
      window.removeEventListener('online', handleOnlineEvent);
      window.removeEventListener('offline', handleOfflineEvent);
    };
  }, []);

  return { isOnline, hasSlowConnection };
}

// مكون لوحة إشعارات النظام بتسميات دلالية صارمة
export function SystemConnectivityBanner({ onRetryConnection }) {
  const { isOnline } = useNetworkStatusMonitor();
  const [isDismissed, setIsDismissed] = useState(false);

  // إذا كان الاتصال متاحاً أو تم تجاهل التنبيه، لا نعرض شيئاً
  if (isOnline || isDismissed) return null;

  const handleDismissClick = () => {
    setIsDismissed(true);
  };

  const handleRetryClick = async () => {
    await onRetryConnection?.();
  };

  return (
    <div className="p-4 bg-amber-950/80 border border-amber-500/50 rounded-xl flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-xl">⚠️</span>
        <div>
          <h4 className="text-sm font-bold text-amber-300">أنت تعمل في وضع عدم الاتصال</h4>
          <p className="text-xs text-amber-200/70">قد لا تتم مزامنة بعض التعديلات الأخيرة حتى يعود الاتصال.</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleRetryClick}
          className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-lg transition"
        >
          إعادة المحاولة
        </button>
        <button
          onClick={handleDismissClick}
          className="px-2 py-1 text-slate-400 hover:text-white text-xs"
        >
          تجاهل
        </button>
      </div>
    </div>
  );
}`,
      output:
        "كود يقرأ بسلاسة ذاتية فائقة؛ لا يحتاج القارئ للتوقف والتساؤل 'ماذا يفعل هذا المتغير؟' لأن كل اسم يوضح نوعه وسلوكه وغايته فوراً.",
      commonMistakes: [
        {
          mistake: "استخدام أسماء مبهمة وغير واضحة مثل `const [data, setData] = useState()` أو `const temp = true;`.",
          why: "بعد شهر واحد أو عند قراءة زميلك للكود، لن يعرف أحد ماذا تحتوي 'data' وما هو نوعها.",
          fix: "كن محدداً ودقيقاً: استخدم `const [userList, setUserList] = useState([])` أو `const [isLoadingProfile, setIsLoadingProfile] = useState(false)`.",
        },
      ],
      bestPractices: [
        "اتبع دائماً قاعدة: Props الأحداث تبدأ بـ 'on' (مثل onSave)، والمعالجات داخل المكون تبدأ بـ 'handle' (مثل handleSave).",
        "اجعل أسماء الدوال تبدأ بفعل حركي صريح (fetchUsers, calculateTax, formatCurrency, validateInput).",
      ],
      infographic: {
        title: "قاموس التسميات القياسية في React",
        caption: "معايير التسمية المعتمدة في الفرق العالمية",
        steps: [
          { number: 1, label: "المكونات (Components)", desc: "PascalCase وصريحة (UserProfileCard, NavigationBar)" },
          { number: 2, label: "الخطافات (Custom Hooks)", desc: "تبدأ حصراً بـ use متبوعة بوصف (useAuth, useLocalStorage)" },
          { number: 3, label: "المنطق والخواص (Props & Booleans)", desc: "المتغيرات المنطقية: is/has، وأحداث الإدخال: onSave / handleSave" },
        ],
      },
    },

    // 16.3.h
    {
      id: "16.3.h",
      title: "تقليل وحل مشكلة Props Drilling",
      englishTerm: "Props Drilling Elimination Strategies (بروبس دريلينغ إليمينيشن)",
      description:
        "ظاهرة 'حفر الخواص' (Props Drilling) تحدث عندما يضطر المطور إلى تمرير بيانات أو دوال عبر مستويات متعددة من شجرة المكونات (مثلاً من الجد، إلى الأب، إلى الابن، إلى الحفيد)، على الرغم من أن المكونات الوسيطة في المنتصف لا تحتاج إلى تلك البيانات مطلقاً ولا تفعل بها شيئاً سوى تمريرها إلى المستوى الأدنى. هذا النمط يؤدي إلى تلوث واجهات المكونات الوسيطة، ويجعل إعادة هيكلة الكود أمراً بالغ الصعوبة لأن تعديل خاصية واحدة يتطلب تحديث 6 ملفات مختلفة في مسار الشجرة. للتخلص من Props Drilling، تتوفر ثلاثة أسلحة رئيسية: 1) تركيب المكونات (Component Composition عبر children)، 2) سياق React (Context API)، 3) مكتبات إدارة الحالة العامة (State Management مثل Zustand).",
      analogy:
        "تخيل أنك تريد إرسال طرد بريدي إلى ابنك في الدور الرابع في بناية سكنية. بدلاً من إرساله مع شركة توصيل توصله لبابه مباشرة، تطلب من الجار في الدور الأول تسليمه للجار في الدور الثاني ليسلمه للجار في الدور الثالث ليوصله أخيراً لابنك! هذا يرهق الجيران بلا مبرر وإذا غاب أحدهم ينقطع الاتصال.",
      whyItMatters:
        "حل Props Drilling يحرر المكونات الوسيطة من التبعيات غير الضرورية، مما يتيح إعادة استخدامها في أماكن أخرى بسهولة، ويمنع إعادة التصيير العشوائي (Unnecessary Re-renders) في المكونات التي لا تهتم أصلاً بتلك البيانات.",
      syntax: `// الحل الذكي باستخدام Composition (تركيب المكونات):
// بدلاً من تمرير user عبر Header إلى Nav إلى Avatar:
<Header>
  <Nav>
    <Avatar src={user.avatar} />
  </Nav>
</Header>

// أو باستخدام Context للحالات المشتركة الواسعة:
const UserContext = createContext();`,
      simpleExample: `// حل Props Drilling عبر تقنية تركيب المكونات (Component Composition)
import React, { useState } from 'react';

// المكون الوسيط (Card) لا يعرف شيئاً عن دالة الحذف أو بيانات المستخدم، يقبل children فقط!
function SimpleCard({ title, children }) {
  return (
    <div className="p-4 bg-slate-800 border border-slate-700 rounded-xl space-y-3">
      <h3 className="text-sm font-bold text-slate-300">{title}</h3>
      {/* عرض الأبناء مباشرة دون الحاجة لتمرير props مخصصة عبره */}
      <div>{children}</div>
    </div>
  );
}

// المكون الجذري يتحكم بالمكون النهائي مباشرة دون حفر
export function CompositionDemo() {
  const [currentUser, setCurrentUser] = useState({ name: 'أحمد محمود', role: 'مشرف' });

  const handleLogout = () => {
    alert('تم تسجيل خروج: ' + currentUser.name);
  };

  return (
    <div className="max-w-xs">
      {/* حل مشكلة الحفر: مررنا المكون النهائي كـ children للبطاقة مباشرة! */}
      <SimpleCard title="بيانات المشرف">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-bold text-white">{currentUser.name}</p>
            <p className="text-xs text-sky-400">{currentUser.role}</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-2.5 py-1 bg-rose-600/30 text-rose-300 hover:bg-rose-600 text-xs rounded transition"
          >
            خروج
          </button>
        </div>
      </SimpleCard>
    </div>
  );
}`,
      advancedExample: `// استراتيجية شاملة لحل Props Drilling باستخدام React Context المعزول ونمط Compound
import React, { createContext, useContext, useState } from 'react';

// 1. إنشاء سياق معزول خاص بمحرر الإعدادات
const SettingsContext = createContext(null);

// خطاف مخصص لاستهلاك السياق بأمان
function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings يجب استخدامه داخل نطاق SettingsProvider');
  }
  return context;
}

// 2. المكون المزود المركزي (Provider)
export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);

  const value = {
    theme,
    toggleTheme,
    notificationsEnabled,
    toggleNotifications,
  };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

// 3. مكونات وسيطة عميقة في الشجرة لا تعرف شيئاً عن الإعدادات ولا تمرر أي Props!
function SettingsPageLayout({ children }) {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-6">
      <header className="border-b border-slate-800 pb-3">
        <h2 className="text-xl font-bold text-white">مركز إعدادات الحساب</h2>
      </header>
      <main>{children}</main>
    </div>
  );
}

function SettingsSection({ title, children }) {
  return (
    <section className="p-4 bg-slate-800/50 rounded-xl space-y-3">
      <h3 className="text-sm font-semibold text-slate-300">{title}</h3>
      {children}
    </section>
  );
}

// 4. المكون النهائي في أعمق طبقة يستهلك البيانات مباشرة من السياق بضغطة زر
function ThemeSwitcherControl() {
  // استهلاك مباشر دون أي Props Drilling عبر الطبقات السابقة
  const { theme, toggleTheme } = useSettings();

  return (
    <div className="flex justify-between items-center">
      <span className="text-xs text-slate-300">مظهر الواجهة النشط: ({theme})</span>
      <button
        onClick={toggleTheme}
        className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition"
      >
        تبديل المظهر
      </button>
    </div>
  );
}

function NotificationToggleControl() {
  // استهلاك مباشر أيضاً
  const { notificationsEnabled, toggleNotifications } = useSettings();

  return (
    <div className="flex justify-between items-center">
      <span className="text-xs text-slate-300">إشعارات البريد الفورية:</span>
      <button
        onClick={toggleNotifications}
        className={'px-3 py-1.5 text-xs font-bold rounded-lg transition ' + (
          notificationsEnabled ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-400'
        )}
      >
        {notificationsEnabled ? 'مفعلة' : 'معطلة'}
      </button>
    </div>
  );
}

// التطبيق المجمع المتكامل
export function PropsDrillingSolutionDemo() {
  return (
    <SettingsProvider>
      <SettingsPageLayout>
        <SettingsSection title="تفضيلات المظهر">
          <ThemeSwitcherControl />
        </SettingsSection>
        <div className="h-4" />
        <SettingsSection title="تفضيلات التنبيهات">
          <NotificationToggleControl />
        </SettingsSection>
      </SettingsPageLayout>
    </SettingsProvider>
  );
}`,
      output:
        "المكونات الهيكلية الوسيطة (SettingsPageLayout و SettingsSection) أصبحت نظيفة بنسبة 100% وخالية من أي خصائص عبور؛ بينما وصلت البيانات للمكونات المستفيدة عبر Context بكل سلاسة.",
      commonMistakes: [
        {
          mistake: "القفز المباشر لتثبيت مكتبات ضخمة مثل Redux لحل تمرير خاصية عبر مستويين فقط.",
          why: "يضيف تعقيداً ووزناً زائداً للحزمة (Overkill).",
          fix: "استخدم Component Composition أولاً عبر خاصية `children`؛ فإن كان المستوى أعمق والشاشات متعددة، استخدم React Context البسيط.",
        },
      ],
      bestPractices: [
        "فضل دائماً نمط التكوين (Composition) على Context كلما أمكن ذلك؛ لأنه يحافظ على بساطة شجرة المكونات وتتبع البيانات.",
        "قسّم سياقات Context إلى سياقات صغيرة متخصصة (AuthContext, ThemeContext) وتجنب وضع كل حالة التطبيق في سياق عملاق واحد.",
      ],
      infographic: {
        title: "استراتيجيات التخلص من Props Drilling",
        caption: "ثلاث طرق متدرجة لحل مشكلة حفر الخواص",
        steps: [
          { number: 1, label: "Component Composition", desc: "تمرير المكونات كـ children أو Slots للطبقة الوسيطة" },
          { number: 2, label: "React Context API", desc: "إنشاء سياق مشترك للحالات المعقدة المشتركة بين فروع متعددة" },
          { number: 3, label: "Global State (Zustand)", desc: "إدارة الحالة العالمية خارج شجرة React للمشاريع الضخمة" },
        ],
      },
    },

    // 16.3.i
    {
      id: "16.3.i",
      title: "إدارة الاعتماديات بين الوحدات (Dependency Management & Inversion)",
      englishTerm: "Dependency Management & Inversion (ديبيندنسي مانجمنت آند إنفيرجن) - إدارة وعكس الاعتماديات",
      description:
        "إدارة الاعتماديات تعني التحكم الواعي في كيفية اعتماد المكونات والوحدات البرمجية على بعضها البعض. المبدأ المعماري الأبرز هنا هو مبدأ عكس التبعية (Dependency Inversion Principle - DIP): 'الوحدات عالية المستوى يجب ألا تعتمد على وحدات منخفضة المستوى، كلاهما يجب أن يعتمد على تجريدات (Abstractions)'. في React، إذا كان مكون واجهة المستخدم يستورد مباشرة مكتبة محددة مثل Axios أو Firebase داخل ملفه، فإنه يصبح أسيراً لتلك المكتبة. في المقابل، عندما نوفر طبقة وسيطة (API Client Abstraction) أو نحقن الخدمة عبر Props أو Context، يصبح بإمكاننا تغيير مكتبة الاتصال أو التخزين مستقبلاً دون تعديل سطر واحد في مكونات واجهة المستخدم.",
      analogy:
        "أجهزة المنزل الكهربائية (مصباح، ثلاجة، تلفاز) لا تعتمد مباشرة على أسلاك محطة توليد الكهرباء بالفحم؛ بل تعتمد جميعها على مقبس الجدار القياسي (التجريد). إذا غيرت الدولة محطة الفحم إلى طاقة شمسية، ستظل جميع أجهزتك تعمل دون أي تغيير في مقابسها!",
      whyItMatters:
        "يسهل إلى أقصى حد كتابة اختبارات آلية عبر حقن خدمات وهمية (Mock Services)، ويجعل التطبيق مقاوماً لتغيرات المكتبات الخارجية أو تبديل البنية التحتية للخوادم.",
      syntax: `// التبعية المعكوسة (DIP):
// بدلاً من الاستيراد المباشر: import { sendTelemetry } from 'segment-sdk';
// يتم حقن الخدمة أو قراءتها من سياق:
function AnalyticsButton({ trackingService, label, eventName }) {
  const handleClick = () => trackingService.track(eventName);
  return <button onClick={handleClick}>{label}</button>;
}`,
      simpleExample: `// مثال بسيط يوضح حقن خدمة التخزين بدلاً من الاعتماد المباشر على localStorage
import React, { useState } from 'react';

// مكون يقبل محول التخزين كمعتمد خارجي (Dependency Injection)
export function SimpleStorageToggle({ storageAdapter, storageKey = 'user_pref' }) {
  // قراءة القيمة الأولية من محول التخزين المحقون
  const [isEnabled, setIsEnabled] = useState(() => storageAdapter.getItem(storageKey) === 'true');

  const handleToggle = () => {
    const nextVal = !isEnabled;
    setIsEnabled(nextVal);
    // حفظ القيمة عبر المحول المجرد
    storageAdapter.setItem(storageKey, String(nextVal));
  };

  return (
    <div className="flex items-center justify-between p-4 bg-slate-850 border border-slate-700 rounded-lg">
      <span className="text-sm text-slate-200">تفعيل الوضع المتقدم</span>
      <button
        onClick={handleToggle}
        className={'px-3 py-1.5 text-xs font-bold rounded-md transition ' + (
          isEnabled ? 'bg-sky-600 text-white' : 'bg-slate-700 text-slate-400'
        )}
      >
        {isEnabled ? 'مفعل' : 'معطل'}
      </button>
    </div>
  );
}`,
      advancedExample: `// تطبيق معماري متقدم: واجهة برمجية موحدة لجلب البيانات مع حقن العميل (API Inversion)
import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. تجريد واجهة خدمة التغذية الإخبارية (Contract)
// العميل لا يعرف هل نستخدم fetch، axios، أو بيانات محلية تجريبية!
const FeedServiceContext = createContext(null);

// 2. مزود الخدمة الحقيقية عبر شبكة الإنترنت
export const HttpFeedService = {
  async getLatestArticles() {
    // محاكاة استدعاء خادم سحابي
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    if (!res.ok) throw new Error('فشل جلب المقالات من الخادم');
    return res.json();
  },
};

// 3. مزود بديل وهمي مخصص لبيئة الاختبارات أو التطوير دون إنترنت (Mock Service)
export const MockFeedService = {
  async getLatestArticles() {
    // إرجاع بيانات وهمية فورية ومستقرة
    return [
      { id: 101, title: 'دليل معماريات React النظيفة في 2026', body: 'ملخص شامل لأفضل ممارسات هندسة البرمجيات...' },
      { id: 102, title: 'كيف تتقن مبادئ SOLID مع خطافات React', body: 'شرح تطبيقي مع أمثلة عملية قابلة للصيانة...' },
    ];
  },
};

// 4. خطاف مخصص يعتمد على التجريد وليس على مزود محدد
export function useFeedArticles() {
  const service = useContext(FeedServiceContext);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    service
      .getLatestArticles()
      .then((data) => {
        if (isMounted) {
          setArticles(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [service]);

  return { articles, isLoading };
}

// 5. مكون العرض النظيف (يعتمد فقط على الخطاف المجرد)
export function ArticlesFeedWidget() {
  const { articles, isLoading } = useFeedArticles();

  if (isLoading) {
    return <p className="text-xs text-slate-400 p-4 animate-pulse">جارٍ تحميل المقالات عبر المزود المحقون...</p>;
  }

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
      <h3 className="text-base font-bold text-white border-b border-slate-800 pb-2">آخر المقالات المحدثة</h3>
      <div className="space-y-2">
        {articles.map((item) => (
          <div key={item.id} className="p-3 bg-slate-800/60 rounded-lg">
            <h4 className="text-sm font-semibold text-sky-400">{item.title}</h4>
            <p className="text-xs text-slate-300 mt-1 line-clamp-2">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// المكون الحاضن مع إمكانية تبديل المزود ديناميكياً
export function DependencyInversionDemo() {
  const [useMock, setUseMock] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-3 bg-slate-800/40 rounded-lg">
        <span className="text-xs text-slate-300">مزود البيانات النشط: {useMock ? 'وهمي محلي (Mock)' : 'خارجي (HTTP)'}</span>
        <button
          onClick={() => setUseMock((v) => !v)}
          className="px-3 py-1 bg-sky-600 hover:bg-sky-700 text-white text-xs rounded"
        >
          تبديل المزود
        </button>
      </div>

      {/* حقن المزود عبر السياق */}
      <FeedServiceContext.Provider value={useMock ? MockFeedService : HttpFeedService}>
        <ArticlesFeedWidget />
      </FeedServiceContext.Provider>
    </div>
  );
}`,
      output:
        "فصل كامل بين استدعاء البيانات ومكونات العرض؛ يمكن للمطورين تبديل مزود الخدمة من Mock إلى Live HTTP دون تعديل أي سطر كود داخل مكون ArticlesFeedWidget.",
      commonMistakes: [
        {
          mistake: "كتابة استيرادات مباشرة لمكتبات طرف ثالث في كل مكون صغير (مثل استيراد Firebase مباشرة في 40 زراً).",
          why: "عند رغبة الشركة في الانتقال إلى Supabase، سيتعين فتح وتعديل 40 ملفاً، مع احتمالية نسيان ملفات ووقوع أخطاء كارثية.",
          fix: "أنشئ واجهة خدمة مركزية (AuthService) واستوردها أو احقنها عبر Context أو Hooks مخصصة.",
        },
      ],
      bestPractices: [
        "برمج دائماً للاعتماد على الواجهات التعاقدية (Interfaces/Abstractions) وليس للتنفيذات الحرفية المحددة.",
        "اجعل الخدمات الخارجية قابلة للاستبدال عبر توحيد أسماء الدوال ومعاملاتها ومخرجاتها.",
      ],
      infographic: {
        title: "مبدأ عكس التبعية (DIP) في React",
        caption: "حقن الخدمات والاعتماد على التجريدات المعمارية",
        steps: [
          { number: 1, label: "طبقة التجريد (Abstraction Layer)", desc: "تعريف شكل الخدمة وواجهتها التعاقدية العامة" },
          { number: 2, label: "المزودات المتعددة (Providers)", desc: "تنفيذ الخدمة عبر HTTP أو Mock أو GraphQL بحرية" },
          { number: 3, label: "المكون المستهلك (Consumer)", desc: "استهلاك الخدمة النظيفة دون أدنى معرفة بتفاصيل بنيتها التحتية" },
        ],
      },
    },

    // 16.3.j
    {
      id: "16.3.j",
      title: "إعادة هيكلة الكود Refactoring",
      englishTerm: "Code Refactoring in React (كود ريفاكتورينغ) - إعادة هيكلة وتحسين الكود",
      description:
        "إعادة هيكلة الكود (Refactoring) هي عملية تحسين وتطهير البنية الداخلية للبرمجيات الحالية دون تغيير سلوكها الخارجي الملاحظ على الإطلاق (Preserving External Behavior). إعادة الهيكلة ليست إصلاحاً لعيوب برمجية (Bug Fixing) ولا إضافة لميزات جديدة، بل هي استثمار وقائي لتفكيك 'الدين التقني' (Technical Debt)، وجعل الكود أكثر قابلية للقراءة، وأسهل في التعديل، وأكثر جاهزية للتوسع المستقبلي. في React، تشمل تقنيات إعادة الهيكلة الشائعة: استخراج المكونات الفرعية (Extract Component)، واستخراج الخطافات المخصصة (Extract Custom Hook)، ودمج الحالات المتفرقة في Reducer، واستبدال الأنماط القديمة بأنماط حديثة.",
      analogy:
        "مثل إعادة ترتيب وتنظيم خزانة ملابسك: أنت لم تشترِ ملابس جديدة ولم تتخلص من ملابسك القديمة؛ لكنك قمت بفرزها وتعليق القمصان في جهة والجوارب في درج خاص. ملابسك ووظيفتها لم تتغير، ولكن أصبح بإمكانك العثور على ما تريده في ثانيتين بدلاً من البحث في كومة فوضوية لمدة نصف ساعة!",
      whyItMatters:
        "الكود الذي لا يخضع لإعادة هيكلة دورية يصاب بـ 'تعفن البرمجيات' (Software Rot)؛ وتصبح أي ميزة جديدة بسيطة تتطلب أضعاف الوقت المتوقع لتنفيذها بسبب تشابك الأكواد القديمة.",
      syntax: `// خطوات إعادة الهيكلة الآمنة:
// 1. تأكد من وجود اختبارات تغطي السلوك الحالي
// 2. أجرِ تغييراً صغيراً ومحدداً (Micro-Refactoring)
// 3. شغّل الاختبارات للتأكد من عدم كسر أي شيء
// 4. اعتمد التغيير (Commit) وكرر العملية`,
      simpleExample: `// مثال إعادة هيكلة: استخراج مكون فرعي لتحسين المقروءة
import React from 'react';

// قبل إعادة الهيكلة: كان هذا المكون يحتوي على وسم li معقد ومكرر عدة مرات
// بعد إعادة الهيكلة: استخراج مكون نقي معبر
function NotificationItem({ icon, text, time }) {
  return (
    <li className="flex items-start gap-3 p-3 bg-slate-850 hover:bg-slate-800 rounded-lg transition">
      <span className="text-base">{icon}</span>
      <div className="flex-1">
        <p className="text-xs text-slate-200">{text}</p>
        <span className="text-[10px] text-slate-500">{time}</span>
      </div>
    </li>
  );
}

// المكون الرئيسي أصبح بسيطاً جداً وسهل القراءة بعد إعادة الهيكلة
export function NotificationsListClean({ items }) {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
      <h3 className="text-sm font-bold text-white">مركز التنبيهات</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <NotificationItem key={item.id} icon={item.icon} text={item.text} time={item.time} />
        ))}
      </ul>
    </div>
  );
}`,
      advancedExample: `// مثال إعادة هيكلة متقدم: تحويل مكون استمارة فوضوي مكدس إلى خطاف ومكونات ذرية نظيفة
import React, { useState } from 'react';

// الخطوة 1 من إعادة الهيكلة: استخراج منطق الحالة والتسجيل إلى Custom Hook
function useFeedbackFormState(initialRating = 5) {
  const [rating, setRating] = useState(initialRating);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetForm = () => {
    setRating(initialRating);
    setComment('');
    setIsSuccess(false);
  };

  const submitFeedback = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // محاكاة إرسال التقييم
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return {
    rating,
    setRating,
    comment,
    setComment,
    isSubmitting,
    isSuccess,
    resetForm,
    submitFeedback,
  };
}

// الخطوة 2 من إعادة الهيكلة: استخراج محدد النجوم إلى مكون نقي قابل لإعادة الاستخدام
function StarRatingSelector({ value, onChange, maxStars = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxStars }).map((_, idx) => {
        const starNumber = idx + 1;
        const isSelected = starNumber <= value;
        return (
          <button
            key={starNumber}
            type="button"
            onClick={() => onChange(starNumber)}
            className={'text-xl transition-transform hover:scale-125 ' + (isSelected ? 'text-amber-400' : 'text-slate-600')}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}

// الخطوة 3: المكون النهائي المعاد هيكلته (قصير، مركز، وجميل المظهر)
export function RefactoredFeedbackWidget() {
  const form = useFeedbackFormState();

  if (form.isSuccess) {
    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center space-y-3">
        <span className="text-3xl">🎉</span>
        <h4 className="text-base font-bold text-white">شكراً على تقييمك القيّم!</h4>
        <button
          onClick={form.resetForm}
          className="text-xs text-sky-400 hover:underline"
        >
          إرسال تقييم آخر
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={form.submitFeedback} className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 max-w-sm">
      <h3 className="text-base font-bold text-white">شاركنا برأيك</h3>

      <div className="space-y-1">
        <label className="text-xs text-slate-400 block">تقييمك للخدمة:</label>
        <StarRatingSelector value={form.rating} onChange={form.setRating} />
      </div>

      <div className="space-y-1">
        <label className="text-xs text-slate-400 block">ملاحظاتك الإضافية:</label>
        <textarea
          rows={3}
          value={form.comment}
          onChange={(e) => form.setComment(e.target.value)}
          placeholder="أخبرنا كيف يمكننا التحسين..."
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs focus:outline-none focus:border-sky-500"
        />
      </div>

      <button
        type="submit"
        disabled={form.isSubmitting}
        className="w-full py-2 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-700 text-white font-bold text-xs rounded-lg transition"
      >
        {form.isSubmitting ? 'جارٍ الإرسال...' : 'إرسال التقييم'}
      </button>
    </form>
  );
}`,
      output:
        "تحول المكون الفوضوي إلى 3 كيانات مستقلة عالية التماسك: خطاف لإدارة النموذج، مكون نقي لاختيار النجوم، ومكون هيكلي جامع يسهل صيانة واختباره.",
      commonMistakes: [
        {
          mistake: "محاولة إعادة كتابة كل كود المشروع دفعة واحدة (Big Bang Refactoring) دون خطوات تدريجية.",
          why: "يؤدي إلى تعطل الإنتاج لأيام وكسر ميزات كانت تعمل بشكل ممتاز واستحالة مراجعة الـ Pull Request.",
          fix: "طبق قاعدة الكشافة (Boy Scout Rule): اترك الكود أفضل قليلاً مما وجدته في كل تذكرة تعمل عليها عبر خطوات صغيرة (Small Incremental Commits).",
        },
      ],
      bestPractices: [
        "لا تعيد هيكلة الكود وتضف ميزة جديدة في نفس الـ Commit البرمجي؛ افصل إعادة الهيكلة تماماً عن تطوير الميزات.",
        "تأكد دائماً من أن الاختبارات الآلية خضراء (Passing) قبل وبعد كل خطوة إعادة هيكلة.",
      ],
      infographic: {
        title: "دورة إعادة الهيكلة الآمنة (Safe Refactoring Loop)",
        caption: "المنهجية الموصى بها في بيئات العمل الاحترافية",
        steps: [
          { number: 1, label: "تأمين الاختبارات", desc: "التأكد من وجود اختبارات تغطي السلوك الحالي وتنجح تماماً" },
          { number: 2, label: "إجراء التغيير الدقيق", desc: "استخراج دالة أو خطاف أو مكون فرعي دون لمس المخرجات" },
          { number: 3, label: "التحقق والاعتماد", desc: "إعادة تشغيل الاختبارات ثم تسجيل Commit نظيف ومستقل" },
        ],
      },
    },
  ],

  // الاختبارات التفاعلية للموضوع
  quizzes: [
    {
      id: "q16.3.1",
      question: "ما هو التعريف الدقيق لمبدأ المسؤولية الواحدة (Single Responsibility Principle) في React؟",
      options: [
        "يجب ألا يحتوي الملف الواحد على أكثر من 50 سطراً برمجياً.",
        "يجب أن يكون للمكون أو الخطاف سبب واحد فقط للتغيير (One Reason to Change).",
        "يجب أن يعرض المكون نصاً واحداً فقط دون أي وسوم HTML إضافية.",
        "يجب ألا يستخدم المكون أكثر من خطاف واحد في الدالة.",
      ],
      correctAnswer: 1,
      explanation:
        "ينص مبدأ SRP على أن الوحدة البرمجية يجب أن تمتلك سبباً وحيداً للتعديل، مما يعني فصل منطق الشبكة والحسابات عن واجهة العرض التقديمية.",
    },
    {
      id: "q16.3.2",
      question: "ما الفرق الرئيسي بين مبدأ KISS ومبدأ YAGNI؟",
      options: [
        "KISS يركز على إبقاء الحل الحالي بسيطاً ومباشراً، بينما YAGNI يمنع إضافة ميزات تخمينية للمستقبل.",
        "KISS خاص بلغة CSS بينما YAGNI خاص بلغة JavaScript.",
        "لا يوجد أي فرق بينهما؛ كلاهما يعني حذف المكونات القديمة.",
        "YAGNI يجبرك على استخدام Redux دائماً، بينما KISS يمنع استخدام أي مكتبات.",
      ],
      correctAnswer: 0,
      explanation:
        "KISS (Keep It Simple) يركز على اختيار أبسط طريقة لحل المشكلة الحالية، بينما YAGNI (You Aren't Gonna Need It) يحث على عدم كتابة أكواد وميزات تخمينية للمستقبل لم يطلبها أحد اليوم.",
    },
    {
      id: "q16.3.3",
      question: "ما هو أفضل حل لتفادي مشكلة Props Drilling عبر 5 مستويات من شجرة المكونات؟",
      options: [
        "تخزين جميع الخصائص في متغيرات عامة window.props في المتصفح.",
        "استخدام Component Composition (عبر children) أو React Context API.",
        "تحويل جميع المكونات إلى Class Components قديمة.",
        "دمج جميع ملفات المشروع في ملف App.jsx واحد ضخم.",
      ],
      correctAnswer: 1,
      explanation:
        "أفضل الاستراتيجيات لحل Props Drilling هي تركيب المكونات عبر خاصية children لتخطي الطبقات الوسيطة، أو استخدام React Context للبيانات المشتركة الواسعة.",
    },
  ],

  // التمرين العملي للموضوع
  exercise: {
    id: "ex16.3",
    title: "تمرين تطبيقي: إعادة هيكلة مكون فوضوي وتطبيق مبادئ SRP وDRY",
    description:
      "لديك مكون يقوم بجلب بيانات الطقس من الخادم، وفحص التحقق، وعرض درجة الحرارة وتنسيق الألوان في ملف واحد متضخم. المطلوب: إعادة هيكلته بفصل منطق جلب الطقس في Custom Hook يسمى useWeatherData، وفصل عرض بطاقة الطقس في مكون نقي WeatherCard مع تنسيق درجات الحرارة بدالة نفعية موحدة.",
    hints: [
      "أنشئ خطاف useWeatherData(city) يتحكم في حالات data وisLoading وerror.",
      "اكتب دالة مساعدة نقية formatTemperature(celsius) تضع رمز الدرجة المئوية.",
      "اجعل WeatherCard يستقبل temperature وcity وdescription كـ props نقية تماماً دون أي useEffect.",
    ],
    solution: `// الحل النموذجي لإعادة الهيكلة وتطبيق مبادئ الكود النظيف
import React, { useState, useEffect } from 'react';

// 1. دالة مساعدة نقية موحدة (DRY)
export function formatTemperature(celsius) {
  return Math.round(celsius) + '° مئوية';
}

// 2. خطاف مخصص لمنطق جلب الطقس حصراً (Single Responsibility)
export function useWeatherData(city) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;
    setIsLoading(true);
    setError(null);

    // محاكاة استدعاء API الطقس
    const timer = setTimeout(() => {
      if (isCancelled) return;
      if (city === 'القاهرة') {
        setData({ temp: 28, condition: 'مشمس' });
      } else if (city === 'الرياض') {
        setData({ temp: 34, condition: 'صافٍ وحار' });
      } else {
        setError('تعذر العثور على بيانات المدينة');
      }
      setIsLoading(false);
    }, 800);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [city]);

  return { data, isLoading, error };
}

// 3. مكون العرض النقي (Pure Presentational Component)
export function WeatherCard({ city, temperature, condition }) {
  return (
    <div className="p-5 bg-gradient-to-br from-sky-900/60 to-slate-900 border border-sky-500/30 rounded-xl space-y-2 text-center">
      <h3 className="text-lg font-bold text-white">{city}</h3>
      <p className="text-3xl font-mono font-bold text-amber-300">{formatTemperature(temperature)}</p>
      <span className="text-xs text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-full inline-block">
        {condition}
      </span>
    </div>
  );
}

// 4. الحاوية التجميعية المتكاملة
export function CleanWeatherApp() {
  const [selectedCity, setSelectedCity] = useState('القاهرة');
  const { data, isLoading, error } = useWeatherData(selectedCity);

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl max-w-sm space-y-4">
      <div className="flex justify-center gap-2">
        {['القاهرة', 'الرياض', 'لندن'].map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={'px-3 py-1.5 text-xs rounded-lg transition ' + (
              selectedCity === city ? 'bg-sky-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
            )}
          >
            {city}
          </button>
        ))}
      </div>

      {isLoading && <p className="text-center text-xs text-slate-400 animate-pulse py-4">جارٍ جلب الطقس...</p>}
      {error && <p className="text-center text-xs text-rose-400 py-4">{error}</p>}
      {data && !isLoading && (
        <WeatherCard city={selectedCity} temperature={data.temp} condition={data.condition} />
      )}
    </div>
  );
}`,
  },

  // الإنفوجرافيك التوضيحي للموضوع
  infographic: {
    title: "الهرم المعماري لكتابة كود React قابل للصيانة",
    caption: "المبادئ الهندسية الأساسية التي تضمن استدامة المشاريع البرمجية لسنوات",
    steps: [
      { number: 1, label: "القاعدة: KISS & YAGNI", desc: "البساطة المطلقة وتجنب كتابة أكواد تخمينية للمستقبل" },
      { number: 2, label: "الوسط: SRP & Separation of Concerns", desc: "عزل منطق العمل في Custom Hooks والمحافظة على نقاء المكونات" },
      { number: 3, label: "القمة: Loose Coupling & Refactoring", desc: "تقليل اقتران الوحدات وإعادة الهيكلة الدورية الوقائية" },
    ],
  },
};
