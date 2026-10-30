// src/data/sections/section17/topic2.js
// الموضوع 17.2: تنفيذ واجهات المصادقة في React (Authentication UI & Flows Implementation)

export const topic2 = {
  id: "17.2",
  title: "تنفيذ واجهات وتدفقات المصادقة (Auth UI & Flows)",
  description:
    "الدليل التطبيقي المتكامل لتنفيذ رحلة المصادقة الاحترافية في تطبيقات React: من بناء صفحات تسجيل الدخول وإنشاء الحساب مع التحقق وقياس قوة كلمات المرور، إلى تدفقات استعادة الحساب المفقود، وإدارة حالة المستخدم المركزية عبر Auth Context، وتأمين مسارات التنقل المحمية (Protected Routes) مع تذكر رابط الوصول السابق، والتعامل مع انتهاء الجلسات وتسجيل الخروج الآمن، وصولاً إلى دمج مزودي الهوية السحابيين (Firebase, Supabase, Clerk).",
  subtopics: [
    // 17.2.a
    {
      id: "17.2.a",
      title: "إنشاء صفحة تسجيل الدخول (Login Page Implementation)",
      englishTerm: "Login Page Implementation (لوغن بيج إمبليمنتيشن) - بناء صفحة تسجيل الدخول",
      description:
        "صفحة تسجيل الدخول هي البوابة الأولى التي يقابلها المستخدم للوصول إلى حسابه. في React، تتطلب الصفحة الاحترافية مراعاة معايير صارمة: 1) استخدام المدخلات المنضبطة (Controlled Inputs) أو مكتبات النماذج (مثل React Hook Form) لربط حقول البريد الإلكتروني وكلمة المرور، 2) التحقق الاستباقي من صحة التنسيق (Client-Side Validation) قبل إرسال الطلب لمنع استدعاءات الشبكة غير المجدية، 3) زر إظهار/إخفاء كلمة المرور لتحسين تجربة المستخدم، 4) مؤشرات التحميل (Loading Spinners) وتعطيل الزر أثناء المعالجة لمنع الإرسال المتعدد (Double Submissions)، 5) دعم تسجيل الدخول بالضغط على زر Enter، وتقديم رسائل خطأ واضحة وآمنة.",
      analogy:
        "مثل كشك التذاكر عند مدخل مدينة الملاهي: الحارس يطلب منك إبراز تذكرتك وبطاقتك الشخصية. هناك حاجز يمنع دخول شخصين في نفس اللحظة عبر نفس التذكرة (منع Double Submit)، ومرآة صغيرة تتأكد فيها من اسمك ورقمك قبل تسليمها للحارس، وإذا كانت التذكرة تالفة، يخبرك الموظف فوراً بالخطأ دون إغلاق الشباك في وجهك.",
      whyItMatters:
        "تجربة تسجيل الدخول الرديئة أو البطيئة تدفع المستخدمين لمغادرة التطبيق نهائياً؛ وإدارة حالات الخطأ والتحميل تمنع إنشاء طلبات مكررة تثقل كاهل خوادم المصادقة.",
      syntax: `// هيكل معالجة تسجيل الدخول:
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    await loginUser({ email, password });
    navigate('/dashboard');
  } catch (err) {
    setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
  } finally {
    setIsLoading(false);
  }
};`,
      simpleExample: `// نموذج تسجيل دخول بسيط بنظام المدخلات المنضبطة وحالة التحميل
import React, { useState } from 'react';

export function SimpleLoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    // محاكاة استدعاء الخادم
    setTimeout(() => {
      if (email === 'user@example.com' && password === '12345678') {
        setIsLoading(false);
        onLoginSuccess?.();
      } else {
        setIsLoading(false);
        setErrorMsg('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      }
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm space-y-4">
      <h3 className="text-lg font-bold text-white text-center">تسجيل الدخول</h3>

      {errorMsg && (
        <div className="p-2.5 bg-rose-950/60 border border-rose-500/40 rounded-lg text-rose-300 text-xs text-center">
          {errorMsg}
        </div>
      )}

      <div>
        <label className="text-xs text-slate-300 block mb-1">البريد الإلكتروني</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@domain.com"
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500"
        />
      </div>

      <div>
        <label className="text-xs text-slate-300 block mb-1">كلمة المرور</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500 pl-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-2.5 top-2.5 text-xs text-slate-400 hover:text-white"
          >
            {showPassword ? 'إخفاء' : 'إظهار'}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-700 text-white font-bold text-xs rounded-lg transition"
      >
        {isLoading ? 'جارٍ تسجيل الدخول...' : 'دخول'}
      </button>
    </form>
  );
}`,
      advancedExample: `// شاشة تسجيل دخول احترافية متكاملة مع التحقق الميداني المتقدم وإمكانية الحفظ (Remember Me) ومحدد سرعة الإرسال
import React, { useState } from 'react';

export function ProductionLoginForm({ onNavigateForgotPassword }) {
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: true });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (status.loading) return;

    // فحص تنسيق البريد السريع
    if (!formData.email.includes('@') || formData.email.length < 5) {
      setStatus({ loading: false, error: 'يرجى إدخال عنوان بريد إلكتروني صحيح', success: false });
      return;
    }

    setStatus({ loading: true, error: null, success: false });

    // محاكاة استدعاء API المصادقة
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (formData.email === 'admin@demo.com' && formData.password === 'Admin1234') {
            resolve({ token: 'mock-jwt-token' });
          } else {
            reject(new Error('بيانات الدخول غير صحيحة، يرجى المحاولة ثانية'));
          }
        }, 1200);
      });

      setStatus({ loading: false, error: null, success: true });
    } catch (err) {
      setStatus({ loading: false, error: err.message, success: false });
    }
  };

  return (
    <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full mx-auto space-y-6 shadow-2xl">
      <header className="text-center space-y-1">
        <div className="w-12 h-12 bg-sky-600/20 text-sky-400 rounded-2xl flex items-center justify-center mx-auto text-xl mb-3 border border-sky-500/30">
          🔐
        </div>
        <h2 className="text-xl font-bold text-white">تسجيل الدخول إلى حسابك</h2>
        <p className="text-xs text-slate-400">أدخل بياناتك للمتابعة إلى لوحة التحكم</p>
      </header>

      {status.error && (
        <div className="p-3 bg-rose-950/60 border border-rose-500/50 rounded-xl text-rose-300 text-xs flex items-center gap-2">
          <span>⚠️</span>
          <span>{status.error}</span>
        </div>
      )}

      {status.success && (
        <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
          <span>✓</span>
          <span>تم تسجيل الدخول بنجاح! جارٍ توجيهك...</span>
        </div>
      )}

      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-slate-300 block mb-1">البريد الإلكتروني</label>
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="admin@demo.com"
            className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-sky-500 transition"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs font-semibold text-slate-300">كلمة المرور</label>
            <button
              type="button"
              onClick={onNavigateForgotPassword}
              className="text-[11px] text-sky-400 hover:underline"
            >
              نسيت كلمة المرور؟
            </button>
          </div>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={formData.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-sky-500 transition pl-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-2.5 text-xs text-slate-400 hover:text-white"
            >
              {showPassword ? 'إخفاء' : 'إظهار'}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              name="rememberMe"
              type="checkbox"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500"
            />
            <span className="text-xs text-slate-400">تذكرني على هذا الجهاز</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={status.loading || status.success}
          className="w-full py-3 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-700 text-white font-bold text-xs rounded-xl transition shadow-lg shadow-sky-600/20"
        >
          {status.loading ? 'جارٍ التحقق من الهوية...' : 'دخول إلى النظام'}
        </button>
      </form>
    </div>
  );
}`,
      output:
        "شاشة تسجيل دخول احترافية توفر تجربة مستخدم سلسة مع فحص مسبق، ومعالجة أخطاء مبسطة، وزر إظهار كلمة المرور، وخيار تذكر الجلسة.",
      commonMistakes: [
        {
          mistake: "إظهار رسالة خطأ دقيقة جداً ومكشوفة مثل: 'هذا البريد الإلكتروني غير مسجل لدينا في قاعدة البيانات'.",
          why: "ثغرة أمنية تسمى كشف الحسابات (Account Enumeration): تتيح للمهاجمين معرفة أي الحسابات مسجلة وأيها غير مسجلة لتنفيذ هجمات تخمين كلمات المرور.",
          fix: "استخدم دائماً رسالة خطأ عامة وموحدة: 'البريد الإلكتروني أو كلمة المرور غير صحيحة'.",
        },
      ],
      bestPractices: [
        "أضف خاصية `autoComplete='email'` و `autoComplete='current-password'` على الحقول لمساعدة مديري كلمات المرور بالمتصفح على الإكمال التلقائي.",
        "عطّل زر الإرسال دائماً أثناء حالة `isLoading` لمنع النقر المتكرر العشوائي.",
      ],
      infographic: {
        title: "عناصر صفحة تسجيل الدخول الاحترافية",
        caption: "معايير تجربة الاستخدام والأمان لبوابة الدخول",
        steps: [
          { number: 1, label: "المدخلات المنضبطة", desc: "ربط دقيق لحقول البريد وكلمة المرور مع إمكانية إظهار/إخفاء الرمز" },
          { number: 2, label: "التحقق المسبق", desc: "فحص تنسيق البريد ومطابقة القواعد قبل إرهاق الشبكة" },
          { number: 3, label: "الحماية ضد التكرار", desc: "تعطيل الأزرار وإظهار مؤشرات التحميل أثناء معالجة الخادم" },
        ],
      },
    },

    // 17.2.b
    {
      id: "17.2.b",
      title: "إنشاء صفحة إنشاء الحساب وقياس قوة كلمة المرور",
      englishTerm: "Signup Page & Password Strength Meter (ساين أب بيج) - صفحة التسجيل ومقياس قوة كلمة المرور",
      description:
        "صفحة إنشاء الحساب الجديد (Signup / Register) تتطلب اهتماماً هندسياً مضاعفاً لحماية النظام من الحسابات الوهمية وكلمات المرور الهشة. تتضمن المعايير الحديثة: 1) حقل تأكيد كلمة المرور للتأكد من عدم وجود أخطاء إملائية أثناء الكتابة، 2) مؤشر بصري تفاعلي حي لقياس قوة كلمة المرور (Password Strength Meter) بناءً على معايير الأمان (الطول الأدنى 8 خانات، أحرف كبيرة وصغيرة، أرقام، ورموز خاصة)، 3) خانة الموافقة على شروط الاستخدام وسياسة الخصوصية، 4) إرسال إشعار توجيهي واضح للمستخدم بالتحقق من بريده الإلكتروني لتفعيل الحساب بعد اكتمال التسجيل.",
      analogy:
        "مثل فتح حساب بنكي جديد: لا يكتفي البنك بأن تعين رمزاً بسيطاً مثل (1234)؛ بل يطلب الموظف بطاقة هوية مؤكدة، ويشترط كلمة سر معقدة تحتوي على بصمة وحروف وأرقام، ويطلب منك توقيع وثيقة الشروط، ويرسل رسالة تفعيل نصية لهاتفك قبل تسليمك دفتر الشيكات.",
      whyItMatters:
        "أكثر من 80% من حوادث اختراق الحسابات تحدث بسبب كلمات مرور ضعيفة وسهلة التخمين (مثل 123456 أو password)؛ فحص قوة كلمة المرور في واجهة التسجيل يرفع أمان النظام بالكامل.",
      syntax: `// احتساب قوة كلمة المرور برمجياً:
const checkStrength = (pass) => {
  let score = 0;
  if (pass.length >= 8) score++;
  if (/[A-Z]/.test(pass)) score++;
  if (/[0-9]/.test(pass)) score++;
  if (/[^A-Za-z0-9]/.test(pass)) score++;
  return score; // من 0 إلى 4
};`,
      simpleExample: `// مثال مبسط لمقياس قوة كلمة المرور أثناء الكتابة في React
import React, { useState } from 'react';

export function SimplePasswordStrength() {
  const [password, setPassword] = useState('');

  // فحص الشروط
  const hasMinLength = password.length >= 8;
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const passedCount = [hasMinLength, hasNumber, hasSpecial].filter(Boolean).length;

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-xs font-bold text-white">فحص قوة كلمة المرور</h4>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="اكتب كلمة مرور قوية..."
        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none"
      />

      {/* شريط القوة */}
      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <div
          className={'h-full transition-all ' + (
            passedCount === 3 ? 'bg-emerald-500 w-full' : passedCount === 2 ? 'bg-amber-500 w-2/3' : passedCount === 1 ? 'bg-rose-500 w-1/3' : 'w-0'
          )}
        />
      </div>

      <div className="space-y-1 text-[11px] text-slate-400">
        <p className={hasMinLength ? 'text-emerald-400' : ''}>• 8 خانات على الأقل</p>
        <p className={hasNumber ? 'text-emerald-400' : ''}>• تحتوي على رقم واحد على الأقل</p>
        <p className={hasSpecial ? 'text-emerald-400' : ''}>• تحتوي على رمز خاص (!@#$)</p>
      </div>
    </div>
  );
}`,
      advancedExample: `// استمارة تسجيل حساب كاملة مع مطابقة كلمتي المرور ومقياس القوة وشروط الاستخدام وتأكيد البريد
import React, { useState } from 'react';

export function ProductionSignupForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // احتساب قوة كلمة المرور بنقاط متعددة
  const calculatePasswordStrength = (pass) => {
    let score = 0;
    if (pass.length >= 8) score += 25;
    if (/[A-Z]/.test(pass)) score += 25;
    if (/[0-9]/.test(pass)) score += 25;
    if (/[^A-Za-z0-9]/.test(pass)) score += 25;
    return score;
  };

  const strength = calculatePasswordStrength(form.password);
  const passwordsMatch = form.password && form.password === form.confirmPassword;
  const isFormValid = form.fullName && form.email && strength >= 75 && passwordsMatch && form.agreedToTerms;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl max-w-sm mx-auto text-center space-y-4 animate-fadeIn">
        <span className="text-4xl block">📬</span>
        <h3 className="text-lg font-bold text-white">تحقق من بريدك الإلكتروني!</h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          أرسلنا رابط تفعيل الحساب إلى <strong className="text-sky-400">{form.email}</strong>. يرجى النقر على الرابط لإكمال تسجيل الدخول.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-xs text-slate-500 hover:text-white underline pt-2"
        >
          العودة للتعديل
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-slate-900 border border-slate-800 rounded-3xl max-w-sm mx-auto space-y-4 shadow-xl">
      <header className="text-center space-y-1">
        <h2 className="text-xl font-bold text-white">إنشاء حساب جديد</h2>
        <p className="text-xs text-slate-400">انضم إلينا في ثوانٍ معدودة</p>
      </header>

      <div>
        <label className="text-xs text-slate-300 block mb-1">الاسم الكامل</label>
        <input
          type="text"
          required
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          placeholder="أحمد محمد"
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-sky-500"
        />
      </div>

      <div>
        <label className="text-xs text-slate-300 block mb-1">البريد الإلكتروني</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="ahmed@company.com"
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-sky-500"
        />
      </div>

      <div>
        <label className="text-xs text-slate-300 block mb-1">كلمة المرور</label>
        <input
          type="password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="••••••••"
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-sky-500"
        />
        {/* شريط القوة المتدرج */}
        {form.password && (
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="text-slate-400">قوة كلمة المرور:</span>
              <span className={'font-bold ' + (strength >= 75 ? 'text-emerald-400' : strength >= 50 ? 'text-amber-400' : 'text-rose-400')}>
                {strength === 100 ? 'قوية جداً' : strength >= 75 ? 'جيدة' : strength >= 50 ? 'متوسطة' : 'ضعيفة'}
              </span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className={'h-full transition-all duration-300 ' + (
                  strength >= 75 ? 'bg-emerald-500' : strength >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                )}
                style={{ width: strength + '%' }}
              />
            </div>
          </div>
        )}
      </div>

      <div>
        <label className="text-xs text-slate-300 block mb-1">تأكيد كلمة المرور</label>
        <input
          type="password"
          required
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          placeholder="••••••••"
          className={'w-full px-3 py-2 bg-slate-800 border rounded-xl text-xs text-white focus:outline-none ' + (
            form.confirmPassword && !passwordsMatch ? 'border-rose-500' : 'border-slate-700 focus:border-sky-500'
          )}
        />
        {form.confirmPassword && !passwordsMatch && (
          <span className="text-[10px] text-rose-400 mt-1 block">كلمتا المرور غير متطابقتين</span>
        )}
      </div>

      <label className="flex items-start gap-2 pt-1 cursor-pointer">
        <input
          type="checkbox"
          checked={form.agreedToTerms}
          onChange={(e) => setForm({ ...form, agreedToTerms: e.target.checked })}
          className="w-4 h-4 mt-0.5 rounded text-sky-600 focus:ring-sky-500"
        />
        <span className="text-xs text-slate-400 leading-relaxed">
          أوافق على <span className="text-sky-400 underline">شروط الخدمة</span> و <span className="text-sky-400 underline">سياسة الخصوصية</span>.
        </span>
      </label>

      <button
        type="submit"
        disabled={!isFormValid}
        className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold text-xs rounded-xl transition shadow-lg"
      >
        إنشاء الحساب الآن
      </button>
    </form>
  );
}`,
      output:
        "شاشة تسجيل حساب متكاملة تمنع إرسال البيانات حتى تطابق الشروط بدقة، وتمنح المستخدم تقييماً فورياً لقوة كلمة المرور، وتوجهه لتفعيل البريد.",
      commonMistakes: [
        {
          mistake: "الاعتماد على فحص طول كلمة المرور في الواجهة الأمامية فقط دون فحص متطابق في الخادم.",
          why: "يستطيع أي مهاجم تجاوز واجهة React وإرسال طلب POST مباشر بكلمة مرور تتكون من حرف واحد فقط.",
          fix: "كرر دائماً نفس قواعد التحقق الصارمة في الخادم عبر مكتبات التحقق مثل Zod أو Joi.",
        },
      ],
      bestPractices: [
        "لا تفرض قيوداً تعسفية تمنع الرموز الخاصة أو تضع حداً أقصى سخيفاً لطول كلمة المرور (مثل ألا تزيد عن 16 حرفاً).",
        "احرص على تنظيف المسافات الفارغة غير المقصودة في حقل البريد عبر `.trim()` قبل الإرسال.",
      ],
      infographic: {
        title: "خطوات إنشاء حساب آمن في React",
        caption: "معايير تصميم استمارة تسجيل احترافية ومحمية",
        steps: [
          { number: 1, label: "فحص القوة الحي", desc: "تقييم كلمة المرور في الوقت الفعلي أثناء الكتابة" },
          { number: 2, label: "تأكيد التطابق", desc: "التأكد من تطابق كلمتي المرور لمنع الأخطاء المطبعية" },
          { number: 3, label: "تفعيل البريد", desc: "إرسال رابط التحقق السحابي لمنع إنشاء حسابات وهمية" },
        ],
      },
    },

    // 17.2.c
    {
      id: "17.2.c",
      title: "إنشاء واجهة استعادة كلمة المرور (Password Recovery Flow)",
      englishTerm: "Password Recovery Flow (باسوورد ريكفري فلو) - تدفق استعادة الحساب وكلمة المرور",
      description:
        "يعد تدفق استعادة كلمة المرور المنسية (Forgot / Reset Password Flow) من أكثر التدفقات حساسية للأمان؛ فهو هدف مفضل للمهاجمين للسيطرة على الحسابات. يتكون التدفق الآمن من مرحلتين رئيسيتين: 1) شاشة طلب الاستعادة (Forgot Password): يكتب فيها المستخدم بريده الإلكتروني، فيقوم الخادم بتوليد رمز آمن فريد مشفر مؤقت (Cryptographic Reset Token) ذو عمر قصير (15 دقيقة) ويرسله عبر رابط في البريد الإلكتروني، 2) شاشة تعيين كلمة المرور الجديدة (Reset Password): يصل إليها المستخدم عبر الرابط الذي يحتوي على الرمز في الـ Query Params (مثل `/reset-password?token=XYZ`)، حيث يكتب كلمة المرور الجديدة ويؤكدها لإبطال الرمز القديم وتحديث حسابه فورياً.",
      analogy:
        "مثل فقدان مفتاح خزنتك في الفندق: لا يعطيك الموظف مفتاحاً جديداً فوراً لمجرد أنك طلبت ذلك؛ بل يرسل رمز تحقق سرياً لرسائل هاتفك المسجل لديهم مسبقاً، ويطلب منك إبراز هذا الرمز خلال 10 دقائق لتسليمك مفتاحاً جديداً وإلغاء صلاحية المفتاح القديم المفقود.",
      whyItMatters:
        "تصميم هذا التدفق بشكل غير آمن قد يتيح للمخترقين الاستيلاء على حسابات المستخدمين الآخرين دون معرفة كلمات مرورهم الأصلية.",
      syntax: `// تدفق الاستعادة من جانب العميل:
// المرحلة 1: طلب رابط الاستعادة
POST /api/auth/forgot-password { email }

// المرحلة 2: تعيين كلمة المرور الجديدة
POST /api/auth/reset-password { token: queryToken, newPassword }`,
      simpleExample: `// شاشة طلب استعادة كلمة المرور بإرسال البريد الإلكتروني
import React, { useState } from 'react';

export function SimpleForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // محاكاة إرسال الرابط للبريد
    setIsSent(true);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm space-y-4">
      <h3 className="text-base font-bold text-white text-center">استعادة كلمة المرور</h3>

      {isSent ? (
        <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs text-center space-y-2">
          <p>إذا كان هذا البريد مسجلاً لدينا، فستصلك رسالة تحتوي على رابط الاستعادة خلال دقائق.</p>
          <button onClick={() => setIsSent(false)} className="text-[11px] underline text-sky-400">
            إرسال بريد آخر
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <p className="text-xs text-slate-400">أدخل بريدك الإلكتروني وسنرسل لك رابطاً لإعادة تعيين كلمة المرور:</p>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-lg transition"
          >
            إرسال رابط الاستعادة
          </button>
        </form>
      )}
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي متكامل لمرحلتي الاستعادة: طلب الرابط ثم إدخال كلمة المرور الجديدة عبر الرمز
import React, { useState } from 'react';

export function PasswordResetFlowSimulator() {
  const [stage, setStage] = useState('request'); // 'request' | 'sent' | 'reset' | 'completed'
  const [email, setEmail] = useState('');
  const [generatedToken, setGeneratedToken] = useState(null);
  const [newPassword, setNewPassword] = useState('');

  // المرحلة 1: طلب الرابط
  const handleRequestLink = (e) => {
    e.preventDefault();
    const token = 'rst_' + Math.random().toString(36).substring(2, 10);
    setGeneratedToken(token);
    setStage('sent');
  };

  // المرحلة 2: محاكاة نقر المستخدم على الرابط في بريده
  const handleSimulateEmailClick = () => {
    setStage('reset');
  };

  // المرحلة 3: حفظ كلمة المرور الجديدة
  const handleSaveNewPassword = (e) => {
    e.preventDefault();
    setStage('completed');
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-md mx-auto">
      <header className="pb-3 border-b border-slate-800 flex justify-between items-center">
        <div>
          <h3 className="text-sm font-bold text-white">محاكي دورة استعادة الحساب</h3>
          <p className="text-xs text-slate-400">رحلة إعادة تعيين كلمة المرور الكاملة</p>
        </div>
        <span className="text-xs font-mono font-bold text-sky-400">
          المرحلة: {stage}
        </span>
      </header>

      {/* الحالة 1: نموذج طلب الرابط */}
      {stage === 'request' && (
        <form onSubmit={handleRequestLink} className="space-y-3">
          <label className="text-xs text-slate-300 block">بريدك الإلكتروني المسجل:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
          />
          <button
            type="submit"
            className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition"
          >
            توليد وإرسال رابط الاستعادة
          </button>
        </form>
      )}

      {/* الحالة 2: محاكاة صندوق الوارد في البريد */}
      {stage === 'sent' && (
        <div className="p-4 bg-slate-850 rounded-xl border border-sky-500/30 space-y-3">
          <span className="text-xs font-bold text-sky-400 block">📩 وصلتك رسالة في البريد الإلكتروني:</span>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            مرحباً! لقد طلبت إعادة تعيين كلمة المرور لحسابك ({email}). انقر على الزر بالأسفل لتعيين كلمة مرور جديدة:
          </p>
          <div className="p-2 bg-slate-950 rounded font-mono text-[10px] text-slate-400 break-all">
            myapp.com/reset-password?token={generatedToken}
          </div>
          <button
            onClick={handleSimulateEmailClick}
            className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition"
          >
            محاكاة النقر على الرابط في البريد ←
          </button>
        </div>
      )}

      {/* الحالة 3: شاشة كتابة كلمة المرور الجديدة */}
      {stage === 'reset' && (
        <form onSubmit={handleSaveNewPassword} className="space-y-3">
          <div className="p-2 bg-slate-800 rounded text-[11px] text-slate-300">
            تم التحقق من الرمز: <span className="font-mono text-emerald-400">{generatedToken}</span>
          </div>
          <label className="text-xs text-slate-300 block">كلمة المرور الجديدة:</label>
          <input
            type="password"
            required
            minLength={8}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="كلمة مرور جديدة قوية..."
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
          />
          <button
            type="submit"
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition"
          >
            حفظ كلمة المرور الجديدة
          </button>
        </form>
      )}

      {/* الحالة 4: اكتمال العملية */}
      {stage === 'completed' && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-center space-y-3">
          <span className="text-3xl block">🎉</span>
          <h4 className="text-sm font-bold text-white">تم تحديث كلمة المرور بنجاح!</h4>
          <p className="text-xs text-emerald-300">تم إبطال الرمز القديم، يمكنك الآن تسجيل الدخول بكلمتك الجديدة.</p>
          <button
            onClick={() => setStage('request')}
            className="text-xs text-sky-400 hover:underline"
          >
            إعادة التجربة من البداية
          </button>
        </div>
      )}
    </div>
  );
}`,
      output:
        "محاكاة عملية كاملة توضح دورة استعادة كلمة المرور المعتمدة عالمياً: طلب عبر البريد الإلكتروني، رمز فريد لمرة واحدة، وتحديث آمن يبطل الجلسات السابقة.",
      commonMistakes: [
        {
          mistake: "إخبار المستخدم صراحة في الواجهة: 'هذا البريد غير مسجل لدينا' عند طلب استعادة كلمة المرور.",
          why: "ثغرة أمنية تفشي عناوين بريد المستخدمين المسجلين في الموقع لأي مهاجم يحاول تخمين القوائم.",
          fix: "أظهر دائماً رسالة حيادية: 'إذا كان البريد مسجلاً، فستصلك رسالة الاستعادة خلال لحظات'.",
        },
      ],
      bestPractices: [
        "اجعل صلاحية رابط الاستعادة قصيرة جداً (بين 10 إلى 15 دقيقة فقط) واجعله يعمل لمرة واحدة حصراً (Single-Use Token).",
        "قم بتسجيل الخروج من كافة الأجهزة الأخرى فور تغيير المستخدم لكلمة مروره لحمايته في حال كان الحساب مخترقاً.",
      ],
      infographic: {
        title: "دورة استعادة الحساب الآمنة",
        caption: "المراحل الثلاث لتأمين عملية إعادة تعيين كلمة المرور",
        steps: [
          { number: 1, label: "طلب الاستعادة", desc: "إدخال البريد الإلكتروني وإظهار رسالة حيادية موحدة" },
          { number: 2, label: "رمز التفعيل المؤقت", desc: "توليد رمز مشفر لمرة واحدة ينتهي بعد 15 دقيقة" },
          { number: 3, label: "تعيين كلمة جديدة", desc: "التحقق من الرمز وتحديث كلمة المرور وإبطال الجلسات السابقة" },
        ],
      },
    },

    // 17.2.d
    {
      id: "17.2.d",
      title: "إدارة حالة المستخدم المركزية (Auth Context & State)",
      englishTerm: "Centralized Auth State Management (أوث كونتيكست) - إدارة حالة المصادقة المركزية",
      description:
        "تحتاج جميع شاشات التطبيق تقريباً (من شريط التنقل العلوي، إلى المسارات المحمية، ومكونات الملف الشخصي) لمعرفة: هل المستخدم مسجل الدخول؟ ما هو اسمه ودوره وصورته؟ لذا، فإن إدارة حالة المصادقة في مكان مركزي موحد هي العمود الفقري لتطبيقات React. الطريقة القياسية هي إنشاء `AuthContext` مع خطاف مخصص `useAuth()`، يحتوي على: 1) كائن المستخدم الحالي `user`، 2) الراية المنطقية `isAuthenticated`، 3) حالة التحميل المبدئية `isLoading` (لمنع وميض الواجهة أثناء فحص الجلسة الأولي)، 4) دوال الإجراءات العامة: `login()` و `logout()`. يتم تغليف كامل شجرة المكونات بـ `<AuthProvider>` لضمان وصول كافة الصفحات لنفس الحالة بنقاوة تامة.",
      analogy:
        "مثل لوحة الإعلانات المركزية ومكبر الصوت في سفينة سياحية: بدلاً من أن يمر قبطان السفينة على كل غرفة ويخبر الركاب بحالة الطقس ووجهة الرحلة، يتم بث الإعلان مركزياً من غرفة القيادة ليسمعه الجميع في المطاعم والممرات والغرف في نفس اللحظة.",
      whyItMatters:
        "بدون سياق مصادقة مركزي، ستغرق في مشكلة Props Drilling المروعة وتضطر لتمرير كائن المستخدم عبر عشرات المستويات في شجرة المكونات.",
      syntax: `// استخدام خطاف المصادقة المركزي في أي مكون:
import { useAuth } from '@/context/AuthContext';

function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  return isAuthenticated ? <div>أهلاً {user.name} <button onClick={logout}>خروج</button></div> : <Link to="/login">دخول</Link>;
}`,
      simpleExample: `// تطبيق مبسط لسياق المصادقة AuthContext في React
import React, { createContext, useContext, useState } from 'react';

// 1. إنشاء السياق
const AuthContext = createContext(null);

// 2. الخطاف المخصص للاستهلاك السهل
export function useAuth() {
  return useContext(AuthContext);
}

// 3. المزود المركزي
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user), login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 4. مكون تجريبي يستهلك السياق
export function AuthConsumerDemo() {
  const { user, isAuthenticated, login, logout } = useAuth();

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-xs font-bold text-white">استهلاك AuthContext المركزي</h4>
      {isAuthenticated ? (
        <div className="space-y-2">
          <p className="text-xs text-emerald-400">مرحباً بك: {user.name} ({user.role})</p>
          <button
            onClick={logout}
            className="w-full py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg transition"
          >
            تسجيل الخروج
          </button>
        </div>
      ) : (
        <button
          onClick={() => login({ name: 'كريم محمود', role: 'محرر محتوى' })}
          className="w-full py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition"
        >
          تسجيل الدخول تجريبياً
        </button>
      )}
    </div>
  );
}`,
      advancedExample: `// تطبيق هندسي متكامل لـ AuthContext يدعم فحص الجلسة الأولي (Initial Bootstrapping) والتحميل ومنع الوميض
import React, { createContext, useContext, useState, useEffect } from 'react';

const FullAuthContext = createContext(null);

export function useFullAuth() {
  const context = useContext(FullAuthContext);
  if (!context) throw new Error('useFullAuth يجب استخدامه داخل FullAuthProvider');
  return context;
}

export function FullAuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);

  // الفحص المبدئي عند إقلاع التطبيق (فحص الجلسة والكوكي في الخادم)
  useEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      if (isMounted) {
        // محاكاة استعادة جلسة مستخدم نشطة سابقة
        setCurrentUser({
          id: 'usr_777',
          name: 'فاطمة الزهراء',
          email: 'fatima@company.com',
          role: 'ADMIN',
        });
        setIsInitializing(false);
      }
    }, 700);

    return () => {
      isMounted = false;
    };
  }, []);

  const login = async (email, password) => {
    // محاكاة تسجيل الدخول
    setCurrentUser({ id: 'usr_999', name: 'مستخدم نشط', email, role: 'USER' });
  };

  const logout = async () => {
    // محاكاة تسجيل الخروج
    setCurrentUser(null);
  };

  // شاشة تحميل مانعة للوميض (Splash / Initial Loader) أثناء الفحص المبدئي
  if (isInitializing) {
    return (
      <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl max-w-sm mx-auto text-center space-y-3">
        <div className="w-8 h-8 border-2 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-xs text-slate-400">جارٍ تهيئة الجلسة والتحقق من الهوية...</p>
      </div>
    );
  }

  const value = {
    user: currentUser,
    isAuthenticated: Boolean(currentUser),
    isAdmin: currentUser?.role === 'ADMIN',
    login,
    logout,
  };

  return <FullAuthContext.Provider value={value}>{children}</FullAuthContext.Provider>;
}

// مكون لوحة التحكم المستهلك للسياق المتكامل
export function FullAuthDashboardDemo() {
  return (
    <FullAuthProvider>
      <AuthDashboardInner />
    </FullAuthProvider>
  );
}

function AuthDashboardInner() {
  const { user, isAuthenticated, isAdmin, logout } = useFullAuth();

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto space-y-4">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <h4 className="text-sm font-bold text-white">لوحة معلومات الجلسة</h4>
        {isAdmin && <span className="text-[10px] bg-purple-600/30 text-purple-300 border border-purple-500/40 px-2 py-0.5 rounded-full font-bold">مشرف</span>}
      </header>

      {isAuthenticated ? (
        <div className="space-y-3">
          <div className="p-3 bg-slate-850 rounded-xl space-y-1">
            <p className="text-xs text-white font-bold">{user.name}</p>
            <p className="text-[11px] text-slate-400 font-mono">{user.email}</p>
          </div>
          <button
            onClick={logout}
            className="w-full py-2 bg-rose-600/30 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 text-xs font-bold rounded-xl transition"
          >
            تسجيل الخروج من الجلسة
          </button>
        </div>
      ) : (
        <p className="text-xs text-slate-400 text-center py-4">أنت غير مسجل الدخول حالياً.</p>
      )}
    </div>
  );
}`,
      output:
        "يوضح النموذج المعماري كيفية بناء مزود مركزي يحتوي على حالة التهيئة (isInitializing) لمنع إعادة توجيه المستخدم لصفحة الدخول بالخطأ قبل أن ينتهي فحص الجلسة الأولي من الخادم.",
      commonMistakes: [
        {
          mistake: "نسيان حالة `isInitializing` وتوجيه المستخدم فوراً لصفحة `/login` في أول ملي ثانية من فتح الموقع.",
          why: "يسبب وميضاً مزعجاً ومربكاً (Flickering): يرى المستخدم صفحة الدخول لجزء من الثانية قبل أن يتعرف الموقع على ملف الكوكي الصالح ويعيد توجيهه للوحة التحكم.",
          fix: "انتظر دائماً اكتمال الفحص الأولي واعرض شاشة تحميل مبسطة (Splash Spinner) حتى تنتهي استجابة الخادم.",
        },
      ],
      bestPractices: [
        "ضع دائماً فحص أمان للخطاف المخصص: `if (!context) throw new Error(...)` لتنبيه المطورين فوراً عند نسيان المزود.",
        "تجنب وضع بيانات غير متعلقة بالمصادقة (مثل قائمة المنتجات أو عربة التسوق) داخل AuthContext؛ حافظ على تخصصه ونقائه.",
      ],
      infographic: {
        title: "هيكلية AuthContext المركزية",
        caption: "تغذية شجرة المكونات ببيانات الجلسة ومنع وميض الشاشة",
        steps: [
          { number: 1, label: "الفحص المبدئي (Bootstrapping)", desc: "فحص الكوكي/الرمز عند الإقلاع وعرض شاشة تحميل سريعة" },
          { number: 2, label: "توزيع الحالة", desc: "توفير user و isAuthenticated و isAdmin عبر السياق" },
          { number: 3, label: "الاستهلاك السلس", desc: "استدعاء useAuth() في أي مكون دون الحاجة لـ Props Drilling" },
        ],
      },
    },

    // 17.2.e
    {
      id: "17.2.e",
      title: "التعامل مع انتهاء جلسة المستخدم والتنبيهات التلقائية",
      englishTerm: "Handling Expired Sessions (هاندلينغ إكسبايرد سيشنز) - معالجة انتهاء الجلسة",
      description:
        "عندما تنتهي صلاحية جلسة المستخدم أثناء استخدامه للتطبيق (بسبب مرور وقت طويل من عدم النشاط أو فشل تجديد الرمز)، فإن أسوأ ما يمكن فعله هو طرده فجأة ومسح البيانات التي كان يكتبها في استمارة طويلة! التعامل الاحترافي مع انتهاء الجلسات يتضمن: 1) شريط تنبيهي استباقي (Session Expiry Warning Banner): يظهر قبل انتهاء الجلسة بدقيقتين ينبه المستخدم لتمديد الجلسة، 2) نافذة حوارية منبثقة (Re-authentication Modal): تطلب من المستخدم إدخال كلمة المرور السريعة لتجديد الجلسة دون مغادرة الصفحة الحالية ودون فقدان البيانات المكتوبة، 3) إعادة التوجيه التلقائي الآمن لصفحة تسجيل الدخول عند الفشل مع حفظ الرابط الحالي في الذاكرة.",
      analogy:
        "مثل قراءة كتاب في مكتبة عامة توشك على الإغلاق: قبل موعد الإغلاق بـ 15 دقيقة، يعلن موظف المكتبة في مكبر الصوت: 'سنغلق بعد قليل، يرجى تمديد استعارة الكتاب أو التوجه للمكتب'. الموظف لا يطفئ الأنوار فجأة في وجهك وأنت تقرأ!",
      whyItMatters:
        "يحمي المستخدمين من فقدان بيانات مهمة (مثل كتابة مقال طويل أو إدخال بيانات فاتورة معقدة) ويمنح التطبيق طابعاً مؤسسياً احترافياً فائق الثقة.",
      syntax: `// كشف انتهاء الجلسة عبر كود الاستجابة 401 في معترض الشبكة:
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      showSessionExpiredModal();
    }
    return Promise.reject(error);
  }
);`,
      simpleExample: `// شريط تنبيهي بسيط ينبه باقتراب انتهاء الجلسة مع زر تمديد
import React, { useState } from 'react';

export function SessionWarningBanner() {
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleExtend = () => {
    setSecondsLeft(3600); // تمديد لساعة إضافية
    setIsDismissed(false);
  };

  if (secondsLeft > 120 || isDismissed) return null;

  return (
    <div className="p-3 bg-amber-950 border border-amber-500/50 rounded-xl flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-lg">⏳</span>
        <div>
          <h5 className="text-xs font-bold text-amber-300">ستنتهي جلستك قريباً!</h5>
          <p className="text-[10px] text-amber-200/80">متبقي {secondsLeft} ثانية قبل تسجيل الخروج التلقائي.</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleExtend}
          className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-lg transition"
        >
          تمديد الجلسة
        </button>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-slate-400 hover:text-white text-xs px-2"
        >
          ✕
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: `// نافذة منبثقة تفاعلية لإعادة المصادقة الفورية (Re-auth Modal) دون فقدان مدخلات الصفحة
import React, { useState } from 'react';

export function SessionTimeoutManagerDemo() {
  // محاكاة نموذج يكتب فيه المستخدم مقالاً مهماً
  const [articleDraft, setArticleDraft] = useState('مسودة تقرير مالي سري قيد الكتابة...');
  const [isSessionExpired, setIsSessionExpired] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [isReauthenticating, setIsReauthenticating] = useState(false);
  const [reauthError, setReauthError] = useState(null);

  // دالة محاكاة انتهاء الجلسة فجأة
  const triggerExpiry = () => {
    setIsSessionExpired(true);
  };

  // معالجة إعادة التحقق من كلمة المرور في النافذة المنبثقة
  const handleReauthSubmit = async (e) => {
    e.preventDefault();
    setIsReauthenticating(true);
    setReauthError(null);

    setTimeout(() => {
      if (passwordInput === '1234') {
        setIsSessionExpired(false);
        setPasswordInput('');
        setIsReauthenticating(false);
      } else {
        setIsReauthenticating(false);
        setReauthError('كلمة المرور غير صحيحة، حاول مجدداً');
      }
    }, 800);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 max-w-lg mx-auto relative">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">محرر المقالات والمسودات</h3>
          <p className="text-xs text-slate-400">حماية المسودات من الضياع عند انتهاء الجلسة</p>
        </div>
        <button
          onClick={triggerExpiry}
          className="px-2.5 py-1 bg-amber-600/20 hover:bg-amber-600 text-amber-400 hover:text-white border border-amber-500/30 text-xs rounded transition"
        >
          محاكاة انتهاء الجلسة (401)
        </button>
      </header>

      {/* منطقة الكتابة والمسودة الحية */}
      <div className="space-y-2">
        <label className="text-xs text-slate-300 block">نص المسودة الحالية:</label>
        <textarea
          rows={3}
          value={articleDraft}
          onChange={(e) => setArticleDraft(e.target.value)}
          className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none"
        />
      </div>

      {/* نافذة إعادة المصادقة المنبثقة فوق المحتوى (Re-Authentication Modal) */}
      {isSessionExpired && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-2xl">
            <div className="w-10 h-10 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center mx-auto text-lg border border-amber-500/30">
              🔒
            </div>
            <div className="text-center space-y-1">
              <h4 className="text-sm font-bold text-white">انتهت جلسة العمل الخاصة بك</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                لم يتم إغلاق مسودتك! أدخل كلمة المرور الخاصة بك لمتابعة العمل دون مغادرة الصفحة.
              </p>
            </div>

            {reauthError && (
              <div className="p-2 bg-rose-950/60 border border-rose-500/40 rounded text-rose-300 text-xs text-center">
                {reauthError}
              </div>
            )}

            <form onSubmit={handleReauthSubmit} className="space-y-3">
              <input
                type="password"
                required
                placeholder="أدخل كلمة المرور (التجربة: 1234)"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500"
              />
              <button
                type="submit"
                disabled={isReauthenticating}
                className="w-full py-2 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-700 text-white font-bold text-xs rounded-lg transition"
              >
                {isReauthenticating ? 'جارٍ التحقق...' : 'تجديد الجلسة والمتابعة'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}`,
      output:
        "يوضح الحل المعماري المتطور لحماية المستخدمين: بدلاً من تدمير بيانات المسودة وإعادة التوجيه القسري لصفحة الدخول، تظهر نافذة Modal تطلب تأكيد الهوية وتستأنف العمل فوراً.",
      commonMistakes: [
        {
          mistake: "إجراء إعادة توجيه قسرية مفاجئة لصفحة تسجيل الدخول `window.location.href = '/login'` عند استلام 401 دون تدرج.",
          why: "يفقد المستخدم كافة البيانات التي كان يكتبها في الصفحة، مما يسبب غضباً شديداً للمستخدمين.",
          fix: "استخدم نوافذ إعادة التحقق المنبثقة (Re-auth Modals) أو احفظ مسودة العمل في SessionStorage قبل التوجيه.",
        },
      ],
      bestPractices: [
        "ضع تنبيهاً بصرياً قبل انتهاء الجلسة بـ 2 إلى 5 دقائق ليتمكن المستخدم من تمديدها بضغطة زر واحدة.",
        "استمع لأحداث نشاط المستخدم (حركة الفأرة أو الضغط على لوحة المفاتيح) لتأخير انتهاء الجلسة طالما أن المستخدم يتفاعل فعلياً.",
      ],
      infographic: {
        title: "التعامل الذكي مع انتهاء الجلسات",
        caption: "حماية بيانات المستخدمين ومنع الانقطاع المفاجئ",
        steps: [
          { number: 1, label: "التنبيه الاستباقي", desc: "إظهار شريط تحذيري قبل انتهاء الجلسة بدقيقتين" },
          { number: 2, label: "نافذة Re-auth السريعة", desc: "طلب كلمة المرور في نافذة منبثقة دون مغادرة الصفحة" },
          { number: 3, label: "حفظ المسودات", desc: "الاحتفاظ بالمدخلات في التخزين المحلي حتى لا تضيع عند التوجيه" },
        ],
      },
    },

    // 17.2.f
    {
      id: "17.2.f",
      title: "تنفيذ تسجيل الخروج الكامل والآمن (Secure Logout)",
      englishTerm: "Implementing Secure Logout (إمبليمنتينغ سيكيور لوغ أوت) - تنفيذ تسجيل الخروج الآمن",
      description:
        "يظن الكثير من المطورين المبتدئين أن تسجيل الخروج يقتصر على كتابة سطر واحد في الواجهة الأمامية: `localStorage.removeItem('token')`. هذا خطأ أمني فادح! تسجيل الخروج الآمن والكامل (Complete Logout) هو عملية منسقة ومتعددة الخطوات: 1) إرسال استدعاء رسمي للخادم `POST /api/auth/logout` لإبطال رمز التحديث (Revoke Refresh Token) وإضافة الرمز الحالي إلى القائمة السوداء (Blacklist)، 2) توجيه الخادم لمسح ملفات الـ Cookies الآمنة عبر ترويسة `Set-Cookie: token=; Max-Age=0`, 3) تصفير ذاكرة التخزين المؤقت في الواجهة الأمامية (مسح TanStack Query Cache أو Redux Store) لمنع المستخدم التالي على نفس الجهاز من قراءة بيانات المستخدم السابق عبر زر الرجوع في المتصفح، 4) إعادة تعيين حالة المستخدم في `AuthContext` وتوجيهه لصفحة الدخول.",
      analogy:
        "مثل تسليم غرفتك في الفندق ومغادرتها: تسجيل الخروج ليس مجرد إغلاق باب الغرفة خلفك؛ بل يتضمن تسليم المفتاح لموظف الاستقبال ليلغي برمجته، وخروج عامل النظافة لتغيير ملاءات السرير وتطهير الحمام ومسح أثر أي أوراق نسيتها، حتى يدخل النزيل التالي لغرفة نظيفة تماماً دون أن يرى أي شيء يخصك!",
      whyItMatters:
        "إهمال مسح ذاكرة التخزين المؤقت (Query Cache) في المتصفح يتيح لأي شخص يجلس على نفس الجهاز المشترك (مثل مقهى إنترنت أو جهاز مكتبي) رؤية البيانات الحساسة المحفوظة بالمتصفح بمجرد الضغط على زر Back.",
      syntax: `// تدفق تسجيل الخروج الكامل:
const handleLogout = async () => {
  try {
    await api.post('/auth/logout'); // 1. إبطال الرمز في الخادم
  } finally {
    queryClient.clear();           // 2. مسح كاش البيانات بالمتصفح
    authContext.setUser(null);     // 3. تصفير حالة React
    navigate('/login', { replace: true }); // 4. إعادة التوجيه
  }
};`,
      simpleExample: `// مثال زر تسجيل خروج يقوم بالعمليات الأساسية لتطهير الحالة
import React, { useState } from 'react';

export function LogoutButtonComponent() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const performLogout = async () => {
    setIsLoggingOut(true);
    try {
      // 1. استدعاء الخادم لإنهاء الجلسة
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {
      console.log('فشل إخطار الخادم، المتابعة بالخروج المحلي');
    } finally {
      // 2. تطهير البيانات المحلية
      localStorage.clear();
      sessionStorage.clear();
      setIsLoggingOut(false);
      window.location.href = '/login';
    }
  };

  return (
    <button
      onClick={performLogout}
      disabled={isLoggingOut}
      className="px-4 py-2 bg-rose-600 hover:bg-rose-500 disabled:bg-slate-700 text-white font-bold text-xs rounded-xl transition"
    >
      {isLoggingOut ? 'جارٍ تسجيل الخروج...' : 'تسجيل خروج آمن'}
    </button>
  );
}`,
      advancedExample: `// نظام متقدم لتسجيل الخروج يطهر كاش الاستعلامات وذاكرة الحالات ويمنع الرجوع عبر زر المتصفح (History Replace)
import React, { useState } from 'react';

export function CompleteLogoutSuiteDemo() {
  const [cacheItems, setCacheItems] = useState([
    { key: 'user_profile', val: 'بيانات الحساب الشخصية الحساسة' },
    { key: 'billing_invoices', val: 'سجل الفواتير وأرقام البطاقات' },
  ]);
  const [sessionActive, setSessionActive] = useState(true);
  const [stepsLog, setStepsLog] = useState([]);

  const executeCompleteLogout = async () => {
    setStepsLog([]);

    // الخطوة 1: استدعاء الخادم
    setStepsLog((prev) => [...prev, '1. إرسال POST /api/auth/logout لإبطال الرمز في خادم Redis...']);
    await new Promise((r) => setTimeout(r, 600));

    // الخطوة 2: مسح كوكيز المتصفح
    setStepsLog((prev) => [...prev, '2. استلام ترويسة Set-Cookie بـ Max-Age=0 لتدمير ملف الكوكي...']);
    await new Promise((r) => setTimeout(r, 500));

    // الخطوة 3: تطهير الكاش المحلي لـ React Query / LocalStorage
    setStepsLog((prev) => [...prev, '3. تطهير ذاكرة التخزين المؤقت بالكامل (QueryClient.clear())...']);
    setCacheItems([]);
    await new Promise((r) => setTimeout(r, 500));

    // الخطوة 4: تصفير حالة المصادقة
    setStepsLog((prev) => [...prev, '4. تصفير حالة المستخدم وتوجيهه مع خيار replace: true لمنع زر الرجوع...']);
    setSessionActive(false);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 max-w-lg mx-auto">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">منظومة تسجيل الخروج الشاملة</h3>
          <p className="text-xs text-slate-400">تطهير الخادم والذاكرة والكاش لمنع تسريب البيانات</p>
        </div>
        <span className={'px-2 py-0.5 text-xs font-mono font-bold rounded ' + (
          sessionActive ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
        )}>
          {sessionActive ? 'جلسة متصلة' : 'تم الخروج بنجاح'}
        </span>
      </header>

      {/* استعراض محتويات الكاش في المتصفح */}
      <div className="p-3 bg-slate-850 rounded-xl space-y-2">
        <span className="text-xs font-bold text-slate-300 block">ذاكرة التخزين المؤقت الحساسة (Browser Cache):</span>
        {cacheItems.length > 0 ? (
          <div className="space-y-1">
            {cacheItems.map((item) => (
              <div key={item.key} className="p-2 bg-slate-950 rounded text-xs flex justify-between font-mono">
                <span className="text-sky-400">{item.key}</span>
                <span className="text-slate-300">{item.val}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-emerald-400 font-mono py-2 text-center">✓ تم تفريغ وتطهير الكاش بنسبة 100%.</p>
        )}
      </div>

      {sessionActive && (
        <button
          onClick={executeCompleteLogout}
          className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl transition shadow-lg shadow-rose-600/20"
        >
          بدء إجراءات تسجيل الخروج الأمني الشامل
        </button>
      )}

      {/* سجل خطوات التنفيذ */}
      {stepsLog.length > 0 && (
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1.5 font-mono text-[11px] text-slate-300">
          <span className="text-slate-500 block mb-1">تسلسل العمليات الأمنية:</span>
          {stepsLog.map((step, idx) => (
            <p key={idx} className="text-emerald-400/90">{step}</p>
          ))}
        </div>
      )}
    </div>
  );
}`,
      output:
        "يوضح النموذج الفارق بين تسجيل الخروج السطحي وتسجيل الخروج المتعمق؛ حيث يتم إبطال الرمز في الخادم ومسح الكوكيز وتطهير كاش الاستعلامات لمنع كشف البيانات عند نقر زر Back.",
      commonMistakes: [
        {
          mistake: "نسيان استخدام خيار `{ replace: true }` عند توجيه المستخدم بعد تسجيل الخروج إلى `/login`.",
          why: "يسمح للمستخدم بالضغط على زر الرجوع في المتصفح (Back Button) للعودة إلى الصفحة المحمية السابقة ورؤية البيانات المخزنة مؤقتاً في ذاكرة المتصفح.",
          fix: "استخدم دائماً `navigate('/login', { replace: true })` لاستبدال مدخل التاريخ في سجل المتصفح.",
        },
      ],
      bestPractices: [
        "ضع كود مسح الكاش المحلي دائماً في كتلة `finally` لضمان تطهير جهاز المستخدم حتى لو تعطل اتصال الخادم أثناء طلب الخروج.",
        "ادعم تسجيل الخروج المتزامن عبر كافة التبويبات المفتوحة في المتصفح باستخدام `window.addEventListener('storage', ...)` أو قناة `BroadcastChannel`.",
      ],
      infographic: {
        title: "المراحل الأربع لتسجيل الخروج الآمن",
        caption: "تطهير كامل لآثار الجلسة في الخادم والمتصفح",
        steps: [
          { number: 1, label: "إبطال الخادم", desc: "إرسال طلب POST /logout لإلغاء وتسويد الرمز في قاعدة البيانات" },
          { number: 2, label: "تدمير الكوكيز", desc: "توجيه المتصفح لحذف الـ Cookies الآمنة بـ Max-Age=0" },
          { number: 3, label: "تطهير الكاش المحلي", desc: "مسح ذاكرة استعلامات React Query و Redux بالكامل" },
          { number: 4, label: "استبدال التاريخ", desc: "التوجيه بـ replace: true لمنع استخدام زر الرجوع بالمتصفح" },
        ],
      },
    },

    // 17.2.g
    {
      id: "17.2.g",
      title: "حماية مسارات التنقل (Protected Routes)",
      englishTerm: "Protected Routes & Location Memory (بروتكتد روتس) - المسارات المحمية وتذكر الوجهة",
      description:
        "في تطبيقات الصفحة الواحدة (SPA)، تعد حماية المسارات (Protected Routes) الآلية الأساسية لمنع المستخدمين غير المصرح لهم من رؤية الشاشات المحمية (مثل `/dashboard` أو `/settings`). يتم ذلك بإنشاء مكون حارس (Route Guard) يتحقق من حالة المصادقة: إذا كان المستخدم مسجل الدخول، يُسمح له بالعبور وعرض المكونات عبر `<Outlet />`. أما إذا كان مجهولاً، فيقوم المكون بإعادة توجيهه تلقائياً إلى صفحة الدخول عبر `<Navigate to='/login' replace />`. الميزة الاحترافية الحاسمة هنا هي 'تذكر الوجهة' (Location Memory): حيث نمرر موقع الصفحة المطلوب زيارتها في خاصية `state: { from: location }`، ليتم بعد تسجيل الدخول بنجاح إعادة توجيهه مباشرة إلى الصفحة التي كان يقصدها بدلاً من الصفحة الرئيسية الافتراضية.",
      analogy:
        "مثل حارس أمن عند مدخل صالة كبار الزوار في المطار: عندما تحاول الدخول، يستوقفك الحارس ويسألك عن بطاقتك. إذا لم تكن معك بطاقة، يوجهك إلى شباك الاستقبال ويسلمك ورقة صغيرة تفيد بأنك كنت تحاول الدخول إلى الصالة رقم 5. بمجرد أن يختم لك موظف الاستقبال، يأخذك المرافق مباشرة إلى الصالة رقم 5 دون أن تضطر لشرح وجهتك من جديد!",
      whyItMatters:
        "تذكر الوجهة يحسن تجربة الاستخدام بشكل هائل: تخيل أنك نقرت على رابط لفاتورة معينة أرسلها زميلك في العمل، فطُلب منك تسجيل الدخول، ليعيدك الموقع بعد الدخول إلى الصفحة الرئيسية وتفقد رابط الفاتورة! هذا أمر محبط يمنعه استخدام `location.state.from`.",
      syntax: `// مكون المسار المحمي في React Router:
function ProtectedRoute() {
  const { isAuthenticated, isInitializing } = useAuth();
  const location = useLocation();

  if (isInitializing) return <LoadingSpinner />;
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}`,
      simpleExample: `// مثال بسيط لمكون حارس مسار محمي
import React from 'react';

export function SimpleProtectedGuard({ isAuthenticated, children, onRedirectToLogin }) {
  // إذا لم يكن مسجل الدخول، يمنع عرض المحتوى ويوجهه للدخول
  if (!isAuthenticated) {
    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center space-y-3 max-w-sm">
        <span className="text-2xl">🔒</span>
        <h4 className="text-sm font-bold text-white">هذه الصفحة محمية</h4>
        <p className="text-xs text-slate-400">يجب تسجيل الدخول أولاً للوصول إلى لوحة التحكم.</p>
        <button
          onClick={onRedirectToLogin}
          className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-lg transition"
        >
          الانتقال لصفحة تسجيل الدخول
        </button>
      </div>
    );
  }

  // إذا كان موثقاً، يعرض الصفحة المطلوبة
  return <div>{children}</div>;
}`,
      advancedExample: `// محاكي تفاعلي متكامل لنظام Protected Routes وتذكر الوجهة السابقة (Location State Redirect)
import React, { useState } from 'react';

export function ProtectedRoutesSimulator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPath, setCurrentPath] = useState('/invoices/inv_9988');
  const [intendedDestination, setIntendedDestination] = useState(null);

  // محاولة زيارة صفحة محمية
  const navigateToPage = (path) => {
    if (!isAuthenticated) {
      // حفظ الوجهة التي كان يحاول زيارتها
      setIntendedDestination(path);
      setCurrentPath('/login');
    } else {
      setCurrentPath(path);
      setIntendedDestination(null);
    }
  };

  // إتمام تسجيل الدخول في صفحة Login
  const handleLogin = () => {
    setIsAuthenticated(true);
    // إعادة التوجيه للوجهة السابقة إن وجدت، أو التوجيه الافتراضي لـ /dashboard
    const nextDestination = intendedDestination || '/dashboard';
    setCurrentPath(nextDestination);
    setIntendedDestination(null);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPath('/login');
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">محاكي المسارات المحمية وتذكر الوجهة</h3>
          <p className="text-xs text-slate-400">تتبع تدفق Navigate مع location.state.from</p>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 bg-slate-950 text-sky-400 border border-slate-800 rounded">
          المسار: {currentPath}
        </span>
      </header>

      {/* شريط ملاحة تجريبي لاختبار الروابط */}
      <div className="flex gap-2">
        <button
          onClick={() => navigateToPage('/dashboard')}
          className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 rounded-lg transition"
        >
          لوحة التحكم
        </button>
        <button
          onClick={() => navigateToPage('/invoices/inv_9988')}
          className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 rounded-lg transition"
        >
          فاتورة خاصة (مباشر)
        </button>
      </div>

      {/* محتوى الشاشة بناءً على المسار الحالي */}
      {currentPath === '/login' ? (
        <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl space-y-3 text-center">
          <span className="text-2xl">🔑</span>
          <h4 className="text-sm font-bold text-white">صفحة تسجيل الدخول</h4>
          {intendedDestination && (
            <div className="p-2.5 bg-amber-950/40 border border-amber-500/40 rounded text-amber-300 text-xs">
              سيتم نقلك تلقائياً بعد الدخول إلى: <span className="font-mono font-bold">{intendedDestination}</span>
            </div>
          )}
          <button
            onClick={handleLogin}
            className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-lg transition"
          >
            تسجيل الدخول والمتابعة للوجهة
          </button>
        </div>
      ) : (
        <div className="p-6 bg-slate-850 border border-emerald-500/30 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-emerald-400">✓ صفحة محمية معروضة بنجاح</span>
            <button
              onClick={handleLogout}
              className="text-xs text-rose-400 hover:text-rose-300 font-bold"
            >
              تسجيل خروج
            </button>
          </div>
          <h4 className="text-base font-bold text-white">محتوى: {currentPath}</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            تم السماح لك بالوصول لأن حالة المصادقة (isAuthenticated) نشطة وتم التحقق منها بنجاح.
          </p>
        </div>
      )}
    </div>
  );
}`,
      output:
        "يوضح النموذج الفائدة الفائقة لتذكر الوجهة السابقة؛ حيث يوجه النظام المستخدم لصفحة تسجيل الدخول ثم يعيده بذكاء إلى الفاتورة المحددة التي طلبها دون إعادته للصفحة الرئيسية.",
      commonMistakes: [
        {
          mistake: "فحص حالة `isAuthenticated` فقط وإهمال فحص `isLoading / isInitializing` في مكون الحارس.",
          why: "عند تحديث الصفحة (Refresh)، تكون حالة المصادقة في الـ state فارغة للحظات قبل انتهاء فحص الخادم، فيقوم الحارس بطرد المستخدم لصفحة الدخول بالخطأ.",
          fix: "ضع دائماً شرط: `if (isLoading) return <LoadingSpinner />` قبل اتخاذ قرار إعادة التوجيه إلى `/login`.",
        },
      ],
      bestPractices: [
        "استخدم دائماً خاصية `replace` عند التوجيه للدخول لمنع احتجاز المستخدم في حلقة تكرار عند الضغط على زر Back.",
        "اصنع مسارات عامة معكوسة (Public Only Routes مثل صفحة الدخول والتسجيل) تقوم بطرد المستخدم المسجل بالفعل إلى لوحة التحكم.",
      ],
      infographic: {
        title: "آلية عمل المسارات المحمية (Protected Routes Flow)",
        caption: "حراسة الشاشات وتذكر الوجهة المطلوبة",
        steps: [
          { number: 1, label: "فحص الحارس (Guard)", desc: "فحص حالة المصادقة واكتمال التهيئة الأولية" },
          { number: 2, label: "تذكر الوجهة", desc: "تخزين المسار المطلوب في state.from وإعادة التوجيه لـ /login" },
          { number: 3, label: "العودة الذكية", desc: "بعد نجاح تسجيل الدخول، يعاد توجيه المستخدم لوجهته الأصلية فوراً" },
        ],
      },
    },

    // 17.2.h
    {
      id: "17.2.h",
      title: "التعامل الاحترافي مع أخطاء تسجيل الدخول والتحديد الحركي",
      englishTerm: "Handling Auth Errors & Rate Limiting (هاندلينغ أوث إيرورز) - معالجة أخطاء المصادقة والحد من المحاولات",
      description:
        "معالجة أخطاء المصادقة تتطلب توازناً دقيقاً بين أمرين متعارضين: أمان النظام الصارم من جهة، ورضا وتوجيه المستخدم البشري من جهة أخرى. في عالم الأمان، لا يجب أبداً إخبار المستخدم هل المشكلة في اسم المستخدم أم في كلمة المرور (لمنع هجمات User Enumeration). من أهم حالات الخطأ التي يجب على تطبيق React التعامل معها باحترافية: 1) بيانات غير متطابقة (401 / Invalid Credentials): إظهار رسالة عامة لطيفة، 2) تجاوز الحد المسموح من المحاولات (HTTP 429 Too Many Requests): فرض مؤقت عد تنازلي (مثلاً 'تم تجميد المحاولات مؤقتاً لمدة 60 ثانية لحماية حسابك') مع تعطيل زر الدخول، 3) حساب مقفل أو معلق (403 Account Suspended): توجيه المستخدم لفريق الدعم الفني، 4) انقطاع اتصال الشبكة.",
      analogy:
        "مثل ماكينة الصراف الآلي (ATM): إذا كتبت رمز PIN خاطئ ثلاث مرات، لا تخبرك الماكينة 'الرقم الأول كان صحيحاً والباقي خطأ!'؛ بل تسحب البطاقة وتخبرك: 'تم تجميد المحاولات مؤقتاً لمخاوف أمنية، يرجى الانتظار أو مراجعة فرع البنك'. هذا التجميد يمنع اللصوص من تجربة ملايين الأرقام العشوائية.",
      whyItMatters:
        "بدون حماية من تجاوز معدل المحاولات (Rate Limiting)، يمكن للمهاجمين تجربة مئات آلاف كلمات المرور في الدقيقة (Brute Force Attack) واختراق حسابات المستخدمين.",
      syntax: `// معالجة أخطاء المصادقة و429 في React:
catch (err) {
  if (err.response?.status === 429) {
    const retryAfter = err.response.headers['retry-after'] || 60;
    startRateLimitCountdown(retryAfter);
  } else {
    setErrorMessage('البريد الإلكتروني أو كلمة المرور غير صحيحة');
  }
}`,
      simpleExample: `// مثال بسيط لمعالجة خطأ 429 وتفعيل مؤقت عد تنازلي يمنع النقر
import React, { useState, useEffect } from 'react';

export function RateLimitAlertDemo() {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => setCountdown((c) => c - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const triggerRateLimit = () => {
    setCountdown(30); // حظر لمدة 30 ثانية
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-xs font-bold text-white">معالجة خطأ 429 (تجاوز المحاولات)</h4>
      {countdown > 0 ? (
        <div className="p-3 bg-rose-950/60 border border-rose-500/50 rounded-lg text-rose-300 text-xs space-y-1 text-center">
          <p className="font-bold">تم تجاوز الحد المسموح من المحاولات!</p>
          <p className="text-[11px]">يرجى الانتظار <span className="font-mono font-bold text-white">{countdown}</span> ثانية قبل المحاولة مجدداً.</p>
        </div>
      ) : (
        <button
          onClick={triggerRateLimit}
          className="w-full py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-lg transition"
        >
          محاكاة حظر 429 (Too Many Requests)
        </button>
      )}
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي لمكافحة هجمات القوة الغاشمة (Brute Force Defender) مع حظر تدريجي وإحصائيات مباشرة
import React, { useState, useEffect } from 'react';

export function BruteForceDefenderSimulator() {
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutSeconds, setLockoutSeconds] = useState(0);
  const [alertInfo, setAlertInfo] = useState(null);

  // إدارة مؤقت الحظر
  useEffect(() => {
    if (lockoutSeconds <= 0) return;
    const interval = setInterval(() => {
      setLockoutSeconds((prev) => {
        if (prev <= 1) {
          setAlertInfo({ type: 'info', text: 'تم انتهاء فترة الحظر المؤقتة. يمكنك المحاولة الآن.' });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [lockoutSeconds]);

  // محاكاة محاولة تسجيل دخول فاشلة
  const handleFailedLogin = () => {
    if (lockoutSeconds > 0) return;

    const nextAttempts = failedAttempts + 1;
    setFailedAttempts(nextAttempts);

    if (nextAttempts >= 4) {
      // تفعيل الحظر المؤقت
      setLockoutSeconds(20);
      setAlertInfo({
        type: 'lockout',
        text: 'تم رصد محاولات دخول فاشلة متكررة! تم تجميد تسجيل الدخول لمدة 20 ثانية لحماية حسابك (HTTP 429).',
      });
    } else {
      setAlertInfo({
        type: 'error',
        text: 'بيانات الدخول غير صحيحة. متبقي ' + (4 - nextAttempts) + ' محاولات قبل التجميد المؤقت.',
      });
    }
  };

  const handleReset = () => {
    setFailedAttempts(0);
    setLockoutSeconds(0);
    setAlertInfo(null);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 max-w-md mx-auto">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">محاكي معالجة أخطاء المصادقة (Rate Limiting)</h3>
          <p className="text-xs text-slate-400">الحماية من هجمات التخمين التكرارية (Brute Force)</p>
        </div>
        <span className="text-xs font-mono font-bold text-amber-400">
          محاولات فاشلة: {failedAttempts}/4
        </span>
      </header>

      {/* التنبيه الديناميكي */}
      {alertInfo && (
        <div
          className={'p-3 rounded-xl border text-xs leading-relaxed ' + (
            alertInfo.type === 'lockout'
              ? 'bg-rose-950/60 border-rose-500/50 text-rose-300'
              : alertInfo.type === 'info'
              ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
              : 'bg-amber-950/60 border-amber-500/50 text-amber-300'
          )}
        >
          {alertInfo.text}
        </div>
      )}

      {/* نموذج المحاكاة */}
      <div className="space-y-3">
        <button
          onClick={handleFailedLogin}
          disabled={lockoutSeconds > 0}
          className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold text-xs rounded-xl transition"
        >
          {lockoutSeconds > 0
            ? 'الحساب مجمد مؤقتاً: متبقي ' + lockoutSeconds + ' ثانية'
            : 'محاكاة محاولة دخول ببيانات خاطئة'}
        </button>

        <button
          onClick={handleReset}
          className="w-full py-1 text-xs text-slate-500 hover:text-white transition"
        >
          إعادة تعيين المحاكي
        </button>
      </div>
    </div>
  );
}`,
      output:
        "يوضح كيفية التعامل مع هجمات التخمين المتكررة؛ حيث يقوم التطبيق بتجميد زر الإدخال تلقائياً وتقديم مؤقت عد تنازلي واضح مع رسائل توجيهية لطيفة دون تسريب أسرار الحساب.",
      commonMistakes: [
        {
          mistake: "ترك زر تسجيل الدخول مفعلًا وقابلاً للنقر أثناء استلام خطأ 429 من الخادم.",
          why: "سيستمر المستخدم في النقر بعصبية مما يطيل فترة الحظر في جدران حماية الـ API (مثل Cloudflare أو NGINX).",
          fix: "عطّل زر الدخول فوراً واقرأ قيمة ترويسة `Retry-After` واعرض عداداً تنازلياً دقيقاً.",
        },
      ],
      bestPractices: [
        "استخدم نصوص تنبيهات عربية ودودة ومهنية وتجنب إظهار نصوص استثناءات البرمجة (مثل 'TypeError' أو '500 Internal Error') للمستخدم النهائي.",
        "وفر دائماً رابطاً مباشراً لـ 'استعادة كلمة المرور' بجانب رسالة فشل تسجيل الدخول لمساعدة المستخدم الحقيقي المتعثر.",
      ],
      infographic: {
        title: "خارطة معالجة أخطاء المصادقة في React",
        caption: "الردود المناسبة لكل نوع من أنواع أخطاء الأمان",
        steps: [
          { number: 1, label: "بيانات خاطئة (401)", desc: "إظهار رسالة موحدة غير كاشفة للحساب مع رابط نسيت كلمة المرور" },
          { number: 2, label: "تجاوز المحاولات (429)", desc: "تجميد الحقول فوراً وتشغيل مؤقت العد التنازلي التلقائي" },
          { number: 3, label: "حساب معلق (403)", desc: "توجيه المستخدم بوضوح للتواصل مع فريق الدعم الفني" },
        ],
      },
    },

    // 17.2.i
    {
      id: "17.2.i",
      title: "دمج مزودي المصادقة السحابيين (Firebase, Supabase, Clerk, Auth0)",
      englishTerm: "Integrating Cloud Auth Providers (إنتيجريتينغ كلاود أوث) - دمج منصات المصادقة السحابية الجاهزة",
      description:
        "في الشركات الناشئة والمشاريع الحديثة، نادراً ما يقوم المطورون ببناء نظام مصادقة وتشفير وتخزين كلمات مرور من الصفر؛ بل يعتمدون على مزودي مصادقة سحابيين متكاملين ومطابقين لأعلى معايير الأمان العالمية (مثل SOC2 و GDPR و HIPAA). أشهر هذه المنصات: 1) **Firebase Auth**: حل جوجل السريع مع دعم المصادقة برقم الهاتف، 2) **Supabase Auth**: خيار مفتوح المصدر رائع مبني فوق PostgreSQL مع دعم Row Level Security (RLS)، 3) **Clerk**: أحدث المنصات انتشاراً في منظومة React، توفر مكونات واجهة جاهزة فائقة الجمال (`<SignIn />` و `<UserButton />`) وخطافات مخصصة (`useUser`, `useAuth`)، 4) **Auth0**: منصة كبرى متخصصة في متطلبات الشركات والمؤسسات العملاقة (SSO, SAML).",
      analogy:
        "بدلاً من استئجار عمال وتصميم خزنة حديدية بنفسك في متجرك الصغير مع مخاطرة ارتكاب خطأ في اللحام يسهل كسرها، تقوم بالتعاقد مع شركة أمن وحراسة عالمية (مثل Brink's) توفر لك خزنة مصفحة مضادة للرصاص مع حراس مدربين مدارين سحابياً على مدار الساعة!",
      whyItMatters:
        "يوفر مئات الساعات من التطوير في بناء استمارات التحقق، وتأمين استعادة الحسابات، ودعم تسجيل الدخول الاجتماعي (Google, Apple, GitHub)، ويوفر أماناً عالمياً يفوق ما يمكن لمطور فردي بناؤه بمفرده.",
      syntax: `// مثال دمج Clerk في React:
import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

function App() {
  return (
    <ClerkProvider publishableKey={CLERK_KEY}>
      <SignedIn><UserButton /><Dashboard /></SignedIn>
      <SignedOut><SignIn /></SignedOut>
    </ClerkProvider>
  );
}`,
      simpleExample: `// مثال واجهة بسيطة تحاكي نمط المكونات الشرطية الجاهزة (Signed In / Signed Out)
import React, { useState } from 'react';

export function CloudAuthPatternDemo() {
  const [user, setUser] = useState(null);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm space-y-4">
      <header className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="text-xs font-bold text-white">نمط مزودي السحاب (Clerk Pattern)</h4>
        <span className="text-[10px] text-sky-400 font-mono">SDK Simulator</span>
      </header>

      {user ? (
        // نمط <SignedIn>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-slate-850 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-sky-600 flex items-center justify-center font-bold text-white text-xs">
              {user.name[0]}
            </div>
            <div>
              <p className="text-xs font-bold text-white">{user.name}</p>
              <p className="text-[10px] text-slate-400 font-mono">{user.email}</p>
            </div>
          </div>
          <button
            onClick={() => setUser(null)}
            className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg transition"
          >
            تسجيل الخروج (&lt;SignOutButton /&gt;)
          </button>
        </div>
      ) : (
        // نمط <SignedOut>
        <div className="space-y-2">
          <p className="text-xs text-slate-400">سجل الدخول بضغطة زر واحدة:</p>
          <button
            onClick={() => setUser({ name: 'مروان كمال', email: 'marwan@cloud.io' })}
            className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition"
          >
            تسجيل الدخول عبر المزود السحابي
          </button>
        </div>
      )}
    </div>
  );
}`,
      advancedExample: `// لوحة مقارنة تفاعلية لأشهر أربعة مزودي مصادقة سحابية في بيئة React مع كود التهيئة الخاص بكل مزود
import React, { useState } from 'react';

const CLOUD_PROVIDERS = [
  {
    id: 'clerk',
    name: 'Clerk',
    tag: 'الأفضل لـ React و Next.js',
    icon: '⚡',
    pros: 'مكونات جاهزة فائقة الجمال، إدارة جلسات متطورة، تكامل مذهل مع Hooks.',
    codeSnippet: [
      "// 1. تثبيت: npm i @clerk/clerk-react",
      "import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';",
      "",
      "export default function App() {",
      "  return (",
      "    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_KEY}>",
      "      <header className='p-4 flex justify-between'>",
      "        <SignedOut><SignInButton /></SignedOut>",
      "        <SignedIn><UserButton /></SignedIn>",
      "      </header>",
      "    </ClerkProvider>",
      "  );",
      "}"
    ].join('\\n'),
  },
  {
    id: 'supabase',
    name: 'Supabase Auth',
    tag: 'مفتوح المصدر مع PostgreSQL',
    icon: '⚡',
    pros: 'تكامل مباشر مع Row Level Security لقاعدة البيانات، ودعم المصادقة بلا كلمات مرور (Magic Links).',
    codeSnippet: [
      "// 1. تثبيت: npm i @supabase/supabase-js",
      "import { createClient } from '@supabase/supabase-js';",
      "",
      "const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);",
      "",
      "// تسجيل الدخول بالبريد والرابط السحري:",
      "const { error } = await supabase.auth.signInWithOtp({",
      "  email: 'user@domain.com',",
      "});"
    ].join('\\n'),
  },
  {
    id: 'firebase',
    name: 'Firebase Auth',
    tag: 'حل جوجل السحابي',
    icon: '🔥',
    pros: 'دعم قوي للهواتف، مجاني في بدايته، دعم واسع لتسجيل الدخول برقم الهاتف والرسائل النصية.',
    codeSnippet: [
      "// 1. تثبيت: npm i firebase",
      "import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';",
      "",
      "const auth = getAuth(firebaseApp);",
      "const provider = new GoogleAuthProvider();",
      "",
      "const result = await signInWithPopup(auth, provider);",
      "const user = result.user;"
    ].join('\\n'),
  },
  {
    id: 'auth0',
    name: 'Auth0 by Okta',
    tag: 'معيار الشركات الكبرى (Enterprise)',
    icon: '🛡️',
    pros: 'دعم بروتوكولات SSO و SAML المتقدمة للشركات وحماية هجمات كلمات المرور المسربة.',
    codeSnippet: [
      "// 1. تثبيت: npm i @auth0/auth0-react",
      "import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';",
      "",
      "function LoginButton() {",
      "  const { loginWithRedirect } = useAuth0();",
      "  return <button onClick={() => loginWithRedirect()}>دخول</button>;",
      "}"
    ].join('\\n'),
  },
];

export function CloudProvidersShowcase() {
  const [activeProviderId, setActiveProviderId] = useState('clerk');
  const activeProvider = CLOUD_PROVIDERS.find((p) => p.id === activeProviderId);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-xl mx-auto">
      <header className="pb-3 border-b border-slate-800">
        <h3 className="text-base font-bold text-white">دليل مزودي المصادقة السحابية في React</h3>
        <p className="text-xs text-slate-400">اختر المزود المناسب لمشروعك واطلع على طريقة التكامل</p>
      </header>

      {/* أزرار اختيار المزود */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {CLOUD_PROVIDERS.map((provider) => (
          <button
            key={provider.id}
            onClick={() => setActiveProviderId(provider.id)}
            className={'p-2.5 rounded-xl border text-right transition ' + (
              activeProviderId === provider.id
                ? 'bg-sky-600 text-white border-sky-500 shadow-lg shadow-sky-600/30'
                : 'bg-slate-850 text-slate-300 border-slate-800 hover:border-slate-700'
            )}
          >
            <span className="text-sm block">{provider.icon}</span>
            <span className="text-xs font-bold block mt-1">{provider.name}</span>
          </button>
        ))}
      </div>

      {/* تفاصيل المزود المختار */}
      <div className="p-4 bg-slate-850 border border-slate-800 rounded-xl space-y-3">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-bold text-white">{activeProvider.name}</h4>
          <span className="text-[10px] bg-sky-950 text-sky-400 border border-sky-500/30 px-2 py-0.5 rounded-full font-bold">
            {activeProvider.tag}
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">{activeProvider.pros}</p>
      </div>

      {/* كود التهيئة النظيف */}
      <div className="space-y-1">
        <span className="text-xs font-bold text-slate-400 block font-mono">طريقة التهيئة والاستخدام:</span>
        <pre className="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-[11px] text-sky-300 overflow-x-auto leading-relaxed">
          {activeProvider.codeSnippet}
        </pre>
      </div>
    </div>
  );
}`,
      output:
        "دليل تفاعلي يتيح للمطور استكشاف أفضل مزودي الهوية السحابيين واختيار الأنسب لمتطلبات مشروعه (Clerk للمكونات الجاهزة، Supabase لقواعد البيانات، Firebase للتطبيقات السريعة، وAuth0 للشركات).",
      commonMistakes: [
        {
          mistake: "تضمين المفاتيح السرية الحساسة لمزودي المصادقة (مثل `SUPABASE_SERVICE_ROLE_KEY` أو `FIREBASE_ADMIN_KEY`) في الواجهة الأمامية React.",
          why: "أي مفتاح يوضع في كود React يتم تجميعه في ملفات الـ Bundle ويمكن لأي شخص استخراجه من الكونسول واستخدامه لمسح قاعدة بياناتك بالكامل!",
          fix: "استخدم فقط المفاتيح العامة (Publishable / Anon Keys) في React، واحتفظ بالمفاتيح السرية الحساسة في خادمك الخلفي حصراً.",
        },
      ],
      bestPractices: [
        "اختر المزود الذي يوفر React Hooks جاهزة لتقليل الحاجة لكتابة كود لإدارة دورة حياة الرموز بأنفسك.",
        "احرص دائماً على تخصيص ثيم المكونات الجاهزة (Theming) لتتناسب تماماً مع الهوية البصرية لتطبيقك.",
      ],
      infographic: {
        title: "منظومة مزودي المصادقة السحابيين",
        caption: "مقارنة سريعة لأشهر حلول الهوية الحديثة",
        steps: [
          { number: 1, label: "Clerk", desc: "أفضل تجربة تطوير وواجهات جاهزة مدمجة لبيئة React" },
          { number: 2, label: "Supabase Auth", desc: "أفضل تكامل مع قواعد بيانات PostgreSQL و Row Level Security" },
          { number: 3, label: "Firebase & Auth0", desc: "حلول جوجل السريعة أو متطلبات الـ Enterprise المعقدة" },
        ],
      },
    },
  ],

  // الاختبارات التفاعلية للموضوع 17.2
  quizzes: [
    {
      id: "q17.2.1",
      question: "لماذا يجب إظهار رسالة خطأ موحدة وعامة مثل 'البريد أو كلمة المرور غير صحيحة' بدلاً من تخصيص الخطأ؟",
      options: [
        "لتوفير مساحة الذاكرة في متصفح المستخدم.",
        "لمنع ثغرة كشف الحسابات (Account Enumeration) حتى لا يعرف المهاجم أي الحسابات مسجلة بالفعل في النظام.",
        "لأن لغة React لا تدعم النصوص الطويلة في التنبيهات.",
        "لتسريع تحميل صور الموقع.",
      ],
      correctAnswer: 1,
      explanation:
        "إذا أخبرت المهاجم أن 'البريد غير موجود'، سيعلم أي العناوين مسجلة وأيها غير مسجلة؛ الرسالة الموحدة تحجب هذه المعلومة الأمنية الحساسة.",
    },
    {
      id: "q17.2.2",
      question: "ما الفائدة المعمارية من تمرير `state: { from: location }` عند توجيه المستخدم لصفحة تسجيل الدخول في Protected Route؟",
      options: [
        "تحديث لون خلفية صفحة تسجيل الدخول.",
        "حفظ الصفحة التي كان يحاول المستخدم زيارتها لإعادة توجيهه إليها مباشرة بعد نجاح تسجيل الدخول دون إعادته للصفحة الرئيسية.",
        "إرسال نسخة من كلمة المرور إلى البريد الإلكتروني تلقائياً.",
        "حذف كافة ملفات الكاش في المتصفح.",
      ],
      correctAnswer: 1,
      explanation:
        "خاصية `from: location` تحتفظ بمسار الوجهة الأصلية حتى لا يفقد المستخدم مكانه بعد تسجيل الدخول.",
    },
    {
      id: "q17.2.3",
      question: "ما هو الإجراء الإلزامي عند استلام استجابة الخطأ HTTP 429 (Too Many Requests) في صفحة تسجيل الدخول؟",
      options: [
        "إعادة تحميل الصفحة فوراً كل ثانية.",
        "تعطيل زر الدخول وفرض مؤقت عد تنازلي يمنع إرسال طلبات جديدة لمنع هجمات التخمين التكرارية (Brute Force).",
        "تغيير اسم المستخدم عشوائياً.",
        "حذف حساب المستخدم نهائياً من قاعدة البيانات.",
      ],
      correctAnswer: 1,
      explanation:
        "خطأ 429 يعني أن الخادم رصد طلبات زائدة؛ يجب تعطيل الزر وعرض عداد تنازلي لمنع حظر عنوان IP الخاص بالمستخدم.",
    },
  ],

  // التمرين العملي للموضوع 17.2
  exercise: {
    id: "ex17.2",
    title: "تمرين تطبيقي: بناء مكون ProtectedRoute احترافي مع تذكر الوجهة وشاشة التحميل",
    description:
      "المطلوب: بناء مكون ProtectedRoute يتكامل مع AuthContext. المكون يفحص أولاً هل حالة المصادقة قيد التهيئة (isInitializing)، فإن كانت كذلك يعرض شاشة تحميل. فإن كان غير مسجل الدخول، يعيد توجيهه إلى صفحة `/login` مع تذكر رابط الوجهة الحالية عبر `state: { from: location }` وخاصية `replace`. وإذا كان موثقاً، يعرض الأبناء عبر `<Outlet />`.",
    hints: [
      "استورد useLocation و Navigate و Outlet من مكتبة react-router-dom.",
      "استهلك useAuth للحصول على isAuthenticated و isInitializing.",
      "تأكد من تمرير state={{ from: location }} مع خيار replace داخل Navigate.",
    ],
    solution: `// الحل النموذجي لبناء مكون مسار محمي متكامل واحترافي في React Router
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// خطاف سياق المصادقة المفترض
import { useAuth } from './AuthContext';

export function ProtectedRoute() {
  const { isAuthenticated, isInitializing } = useAuth();
  const location = useLocation();

  // 1. إذا كان التطبيق في مرحلة الفحص المبدئي (Bootstrapping)، نمنع الوميض
  if (isInitializing) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 space-y-3">
        <div className="w-10 h-10 border-3 border-sky-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-xs text-slate-400 font-mono">جارٍ التحقق من الجلسة الأمنية...</p>
      </div>
    );
  }

  // 2. إذا لم يكن المستخدم مسجل الدخول، نعيد توجيهه مع تذكر الوجهة
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. إذا كان موثقاً بنجاح، نسمح بعرض المسارات الفرعية
  return <Outlet />;
}`,
  },

  // الإنفوجرافيك التوضيحي للموضوع 17.2
  infographic: {
    title: "رحلة تدفقات واجهات المصادقة في React",
    caption: "الهندسة الشاملة لتجربة مستخدم آمنة وسلسة",
    steps: [
      { number: 1, label: "بوابة الدخول والتسجيل", desc: "مدخلات منضبطة، فحص قوة كلمة المرور، ومنع التخمين العشوائي" },
      { number: 2, label: "الحماية والتنقل", desc: "مكونات ProtectedRoute تمنع الدخول غير المصرح وتتذكر الوجهة السابقة" },
      { number: 3, label: "إدارة دورة الجلسة", desc: "تنبيهات استباقية قبل الانتهاء، ونوافذ Re-auth، وتسجيل خروج يطهر الكاش" },
    ],
  },
};
