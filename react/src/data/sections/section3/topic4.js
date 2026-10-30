// src/data/sections/section3/topic4.js
// الموضوع 4: التخزين وواجهات المتصفح (Browser Storage & Modern Web APIs)

export const SECTION_3_TOPIC_4 = {
  id: "3.4",
  title: "التخزين وواجهات المتصفح",
  englishTitle: "Browser Storage & Modern Web APIs",
  description: "الاستفادة من القدرات الخارقة المدمجة في متصفحات الويب: آليات التخزين المحلي (LocalStorage و SessionStorage و Cookies)، التلاعب بالروابط بـ URLSearchParams، ومراقبات الأداء الحديثة (Intersection Observer و Resize Observer)، وتقنيات Debounce و Throttle.",
  icon: "Database",
  subtopics: [
    {
      id: "3.4.a",
      title: "Local Storage",
      englishTitle: "Local Storage: Persistent Key-Value Browser Storage",
      definition: "التخزين المحلي (LocalStorage) هو آلية مدمجة في المتصفح تسمح بحفظ بيانات بسيطة بنمط (مفتاح: قيمة Key-Value) بشكل دائم على جهاز المستخدم؛ حيث تظل البيانات محفوظة حتى لو أغلق المستخدم المتصفح أو أطفأ الحاسوب بالكامل، بسعة تصل لحوالي 5 إلى 10 ميجابايت لكل نطاق.",
      analogy: "تخيل أن لديك 'درج مكتب مقفل برقم سري' في غرفتك: تضع فيه بطاقة العضوية أو إعدادات الإضاءة المفضلة لديك وتغادر للمنزل لشهور؛ عندما تعود وتفتح الدرج تجد كل شيء في مكانه تماماً كما تركته دون أن يمسحه أحد!",
      why: "بدون التخزين المحلي، سيضطر المستخدم لإعادة ضبط تفضيلاته (مثل الوضع المظلم Dark Mode، أو لغة الموقع، أو العناصر الموجودة في سلة التسوق كزائر) في كل مرة يدخل فيها للموقع أو يعيد تحميل الصفحة.",
      terms: [
        { term: "LocalStorage", pronunciation: "لوكال ستوريدج", meaning: "مساحة التخزين المحلي الدائمة في المتصفح" },
        { term: "setItem(key, value)", pronunciation: "سيت آيتم", meaning: "دالة تخزين أو تحديث قيمة مرتبطة بمفتاح محدد" },
        { term: "getItem(key)", pronunciation: "جيت آيتم", meaning: "دالة استرجاع القيمة المخزنة بواسطة المفتاح" },
        { term: "removeItem(key)", pronunciation: "ريموف آيتم", meaning: "دالة حذف عنصر محدد من التخزين" },
        { term: "clear()", pronunciation: "كلير", meaning: "دالة محو وتصفير كافة البيانات المخزنة لهذا النطاق" }
      ],
      syntax: "// 1. حفظ البيانات (كنص فقط)\nlocalStorage.setItem('theme', 'dark');\n\n// 2. قراءة البيانات\nconst theme = localStorage.getItem('theme');\n\n// 3. حفظ كائن بدمجه مع JSON\nlocalStorage.setItem('user', JSON.stringify({ name: 'عمر' }));",
      codeSimple: `// حفظ إعداد تفضيل الوضع المظلم للمستخدم
localStorage.setItem('app_theme', 'dark');

// استرجاع الإعداد لاحقاً
const savedTheme = localStorage.getItem('app_theme');
console.log('الثيم المسترجع من الذاكرة المحلية:', savedTheme);

// حذف الإعداد
localStorage.removeItem('app_theme');
console.log('بعد الحذف:', localStorage.getItem('app_theme')); // يعيد null بأمان`,
      codeAdvanced: `// نمط احترافي: غلاف آمن لحفظ واسترجاع الكائنات المعقدة في React
const StorageManager = {
  // حفظ آمن مع التحويل لـ JSON واصطياد الأخطاء (مثل امتلاء المساحة QuotaExceededError)
  set(key, value) {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
      return true;
    } catch (err) {
      console.error(\`فشل حفظ المفتاح \${key} في LocalStorage:\`, err.message);
      return false;
    }
  },

  // استرجاع آمن مع فك الـ JSON وتوفير قيمة افتراضية بديلة
  get(key, fallbackValue = null) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return fallbackValue;
      return JSON.parse(raw);
    } catch (err) {
      console.warn(\`تعذر فك بيانات المفتاح \${key}؛ تم استخدام القيمة البديلة:\`, err.message);
      return fallbackValue;
    }
  }
};

// استخدام الغلاف لحفظ وتفضيلات سلة مشتريات كاملة
StorageManager.set('cart_items', [
  { id: 1, title: 'كتاب React 19', price: 30 }
]);

const currentCart = StorageManager.get('cart_items', []);
console.log('محتويات السلة المسترجعة بأمان:', currentCart);`,
      output: `الثيم المسترجع من الذاكرة المحلية: dark\nبعد الحذف: null\nمحتويات السلة المسترجعة بأمان: [ { id: 1, title: 'كتاب React 19', price: 30 } ]`,
      mistakes: [
        {
          wrong: `// محاولة حفظ كائن مباشرة دون JSON.stringify\nconst user = { name: 'طارق' };\nlocalStorage.setItem('user', user);\nconsole.log(localStorage.getItem('user')); // ❌ سيطبع النص الميت: "[object Object]"!`,
          correct: `// تحويل الكائن دائماً إلى نص JSON قبل الحفظ\nlocalStorage.setItem('user', JSON.stringify(user));\nconst retrieved = JSON.parse(localStorage.getItem('user')); // ✅ سليم وكائن حي`,
          explanation: "الـ LocalStorage تخزن نصوصاً فقط (Strings)؛ وإذا مررت كائناً تحوله JavaScript تلقائياً بالدالة toString() إلى النص غير المفيد `[object Object]`."
        }
      ],
      bestPractices: [
        "لا تخزن أبداً بيانات حساسة جداً (مثل كلمات المرور، أو بطاقات الائتمان، أو توكنات الدخول البنكية) في LocalStorage لأنها عرضة للاختراق عبر هجمات XSS.",
        "غلف عمليات الحفظ والاسترجاع بـ try/catch دائماً؛ فقد يعطل المستخدم التخزين أو تنفد سعة التخزين في المتصفح.",
        "في React، استخدم نمط الـ Custom Hook مثل `useLocalStorage` لمزامنة الحالة (State) مع LocalStorage تلقائياً."
      ],
      infographic: {
        title: "إنفوجرافيك: خصائص ومحاذير الـ Local Storage في المتصفح",
        concept: "LocalStorage Mechanics & Security Rules",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 خصائص الـ Local Storage في المتصفح           │
└─────────────────────────────────────────────────────────────┘
  • البقاء:       دائم تماماً (لا يُمحى بإغلاق المتصفح أو إطفاء الجهاز)
  • السعة:        كبيرة نسبياً (~ 5MB إلى 10MB لكل نطاق)
  • النوع:        نصوص فقط (Strings) ──> استخدم JSON دائماً!
  
  ⚠️ قاعدة الأمان الذهبية:
  مسموح:  الوضع المظلم، لغة الموقع، إعدادات العرض، السلة المؤقتة ✅
  ممنوع:  كلمات المرور، التوكنات المصرفية، البيانات بالغة الحساسية ❌`
      }
    },
    {
      id: "3.4.b",
      title: "Session Storage",
      englishTitle: "Session Storage: Tab-Scoped Temporary Storage",
      definition: "تخزين الجلسة (SessionStorage) هو آلية تخزين مؤقتة في المتصفح تشبه LocalStorage تماماً في الدوال وطريقة الاستخدام، ولكن مع اختلاف جوهري واحد: تدوم البيانات فقط طالما أن 'تبويب المتصفح' (Tab) مفتوح؛ وفور إغلاق التبويب تُحذف وتُمحى كافة البيانات تلقائياً، وتكون معزولة لكل تبويب على حدة.",
      analogy: "تخيل خزانة أمانات رقمية في حديقة ألعاب: تضع فيها حقيبتك أثناء وجودك في الحديقة (التبويب مفتوح). بمجرد خروجك من بوابة الحديقة بنهاية اليوم (إغلاق التبويب)، تفتح الخزانة تلقائياً وتُفرغ محتوياتها بالكامل استعداداً لزائر جديد!",
      why: "مثالية لتخزين البيانات الحساسة المرتبطة بجلسة واحدة محددة؛ مثل خطوات نموذج تسجيل متعدد المراحل (Wizard Form)، أو حالة فلترة نتائج بحث مؤقتة، حيث لا تريد بقاء هذه البيانات للأبد على جهاز المشترك أو انتقالها لتبويبات أخرى.",
      terms: [
        { term: "SessionStorage", pronunciation: "سيشن ستوريدج", meaning: "تخزين الجلسة المؤقت المرتبط بتبويب المتصفح" },
        { term: "Tab Isolation", pronunciation: "تاب آيسوليشن", meaning: "عزل البيانات؛ كل تبويب يملك SessionStorage مستقلة خاصة به" },
        { term: "Session Lifecycle", pronunciation: "سيشن لايف سايكل", meaning: "دورة حياة الجلسة التي تنتهي بمجرد إغلاق نافذة التبويب" }
      ],
      syntax: "// نفس واجهة LocalStorage بالضبط:\nsessionStorage.setItem('tempStep', '3');\nconst step = sessionStorage.getItem('tempStep');\nsessionStorage.removeItem('tempStep');",
      codeSimple: `// حفظ رقم الخطوة الحالية في استمارة تسجيل مؤلفة من 4 خطوات
sessionStorage.setItem('registration_step', '2');

// استرجاع الخطوة عند تحديث الصفحة (Refresh)
const currentStep = sessionStorage.getItem('registration_step');
console.log('الخطوة الحالية في التبويب الحالي:', currentStep);

// عند إغلاق التبويب نهائياً ستختفي هذه القيمة للأبد!`,
      codeAdvanced: `// محاكاة لحفظ مسودة نموذج متعدد الخطوات في SessionStorage
function saveFormDraft(stepNumber, formData) {
  const draft = {
    step: stepNumber,
    data: formData,
    lastSaved: new Date().toLocaleTimeString('ar-EG')
  };

  sessionStorage.setItem('wizard_draft', JSON.stringify(draft));
  console.log(\`✅ تم حفظ مسودة الخطوة \${stepNumber} في جلسة التبويب بنجاح.\`);
}

function restoreFormDraft() {
  const saved = sessionStorage.getItem('wizard_draft');
  if (!saved) {
    console.log('لا توجد مسودة سابقة في هذا التبويب، بدء نموذج جديد.');
    return null;
  }

  const parsed = JSON.parse(saved);
  console.log(\`📋 استرجاع المسودة المحفوظة في وقت \${parsed.lastSaved}:\`, parsed.data);
  return parsed;
}

// اختبار حفظ واسترجاع المسودة
saveFormDraft(1, { fullName: 'ياسين محمود', email: 'yassin@dev.com' });
restoreFormDraft();`,
      output: `الخطوة الحالية في التبويب الحالي: 2\n✅ تم حفظ مسودة الخطوة 1 في جلسة التبويب بنجاح.\n📋 استرجاع المسودة المحفوظة في وقت 10:15:30 م: { fullName: 'ياسين محمود', email: 'yassin@dev.com' }`,
      mistakes: [
        {
          wrong: `// توقع أن فتح نفس الرابط في تبويب جديد سيشارك نفس بيانات الـ SessionStorage\n// تبويب 1: sessionStorage.setItem('auth', 'yes');\n// تبويب 2 جديد: console.log(sessionStorage.getItem('auth')); // ❌ يعيد null!`,
          correct: `// فهم أن SessionStorage معزولة تماماً لكل تبويب؛ إذا أردت مشاركة البيانات بين التبويبات استخدم LocalStorage\n// التبويب 2 يبدأ بجلسة فارغة ومستقلة تماماً ✅`,
          explanation: "كل تبويب في المتصفح يملك سياق SessionStorage منفصلاً حتى لو كان لنفس الموقع؛ البيانات لا تنتقل بين التبويبات إطلاقاً."
        }
      ],
      bestPractices: [
        "استخدم SessionStorage لمسودات النماذج الحساسة لمنع بقائها على الأجهزة العامة المشتركة.",
        "تذكر أن تحديث الصفحة (Page Refresh) لا يمسح SessionStorage؛ المسح يحدث فقط عند إغلاق التبويب.",
        "استخدمها للبيانات التي تخص جلسة تصفح واحدة فقط ولا معنى لبقائها في الغد."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة حاسمة بين LocalStorage و SessionStorage",
        concept: "LocalStorage vs SessionStorage Comparison",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│             مقارنة: LocalStorage مقابل SessionStorage       │
└─────────────────────────────────────────────────────────────┘
  الميزة                 LocalStorage             SessionStorage
  ─────────────────────────────────────────────────────────────
  مدة البقاء             دائم للأبد               ينتهي بإغلاق التبويب
  إغلاق المتصفح          تبقى البيانات محفوة       تُمحى البيانات فوراً
  المشاركة بين التبويبات مشتركة بين كل التبويبات  معزولة لكل تبويب على حدة
  السعة الحجمية          ~ 5MB - 10MB             ~ 5MB
  الاستخدام المثالي      الثيم واللغة الدائمة     مسودات النماذج المؤقتة`
      }
    },
    {
      id: "3.4.c",
      title: "Cookies",
      englishTitle: "Cookies: Server-Client Communication & Security Flags",
      definition: "ملفات تعريف الارتباط (Cookies) هي حزم بيانات نصية صغيرة جداً (حوالي 4 كيلوبايت كحد أقصى) تُرسل تلقائياً مع كل طلب HTTP بين المتصفح والخادم ذهاباً وإياباً. تُستخدم أساساً لإدارة جلسات تسجيل الدخول وتوثيق المستخدمين عبر أعلام أمان هامة مثل `HttpOnly` و `Secure` و `SameSite`.",
      analogy: "تخيل بطاقة فندقية ممغنطة: في كل مرة تدخل فيها الفندق أو تصعد المصعد، تمرر البطاقة أمام القارئ للتأكد من هويتك وصلاحية غرفتك. الخادم (الفندق) هو من برمج البطاقة، والمتصفح يحملها في جيبه ويقدمها تلقائياً عند كل باب!",
      why: "هي المعيار الأمني العالمي لإدارة جلسات الدخول (Authentication Sessions)؛ فبفضل علم `HttpOnly`، يستحيل على أي كود JavaScript (بما في ذلك أكواد القراصنة عبر ثغرات XSS) قراءة توكن الدخول، مما يجعلها أكثر أماناً بمراحل من تخزين التوكنات في LocalStorage.",
      terms: [
        { term: "Cookie", pronunciation: "كوكي", meaning: "ملف نصي صغير يُتبادل تلقائياً في ترويسات طلبات الشبكة" },
        { term: "HttpOnly Flag", pronunciation: "إتش تي تي بي أونلي", meaning: "علم أمان يمنع JavaScript من قراءة الكوكي ويحصره بالخادم فقط" },
        { term: "Secure Flag", pronunciation: "سيكيور فلاج", meaning: "علم أمان يشترط نقل الكوكي عبر بروتوكول HTTPS المشفر فقط" },
        { term: "SameSite (Strict/Lax)", pronunciation: "سيم سايت", meaning: "علم أمان يحمي من هجمات تزوير الطلبات عبر المواقع (CSRF)" }
      ],
      syntax: "// 1. قراءة وكتابة الكوكيز غير المحمية في JS (المحمية بـ HttpOnly لا تظهر هنا!)\ndocument.cookie = \"username=أحمد; max-age=86400; path=/\";\n\n// 2. ترويسة الخادم لضبط الكوكي الآمنة:\n// Set-Cookie: token=xyz123; HttpOnly; Secure; SameSite=Strict",
      codeSimple: `// قراءة كافة الكوكيز المتاحة لـ JavaScript في المستند الحالي
console.log('الكوكيز الحالية في الصفحة:', document.cookie);

// إنشاء كوكي تجريبية تنتهي بعد ساعة (3600 ثانية)
document.cookie = "preferred_lang=ar; max-age=3600; path=/";

console.log('تم تعيين كوكي اللغة بنجاح.');`,
      codeAdvanced: `// دالة مساعدة احترافية لقراءة قيمة كوكي محددة بالاسم من سلسلة document.cookie
function getCookieValue(cookieName) {
  const cookies = document.cookie.split(';');

  for (let cookie of cookies) {
    const [key, val] = cookie.trim().split('=');
    if (key === cookieName) {
      return decodeURIComponent(val);
    }
  }

  return null;
}

// اختبار الدالة
console.log('قيمة كوكي اللغة المستخرجة:', getCookieValue('preferred_lang'));`,
      output: `الكوكيز الحالية في الصفحة: \nتم تعيين كوكي اللغة بنجاح.\nقيمة كوكي اللغة المستخرجة: ar`,
      mistakes: [
        {
          wrong: `// تخزين توكن المصادقة وجلسة الدخول الحساسة في LocalStorage\nlocalStorage.setItem('auth_token', token); // ❌ شديد الخطورة ومعرض للسرقة الفورية في ثغرات XSS!`,
          correct: `// جعل الخادم يعين التوكن في Cookie مزودة بعلم HttpOnly و Secure\n// Set-Cookie: auth_token=...; HttpOnly; Secure; SameSite=Lax; // ✅ حصن أمان منيع ضد XSS`,
          explanation: "الكوكيز الموسومة بـ HttpOnly لا يمكن لأي كود JavaScript قراءتها إطلاقاً، مما يعني أنه حتى لو نجح مخترق في حقن كود خبيث في صفحتك فلن يتمكن من سرقة التوكن."
        }
      ],
      bestPractices: [
        "استخدم كوكيز `HttpOnly` لتوكنات تسجيل الدخول الحساسة دائماً ودع الخادم يديرها.",
        "تجنب تخزين بيانات كبيرة في الكوكيز لأنها تُرسل مع كل طلب شبكة مما يثقل حجم الترويسات ويهدر البيانات.",
        "اضبط دائماً علم `SameSite=Lax` أو `Strict` لحماية موقعك من هجمات تزوير الطلبات عبر المواقع (CSRF)."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح أعلام الأمان في ملفات الكوكيز",
        concept: "Cookie Security Flags Architecture",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 أعلام الأمان الثلاثية للكوكيز (Security Flags)│
└─────────────────────────────────────────────────────────────┘
  Set-Cookie: session_id=abc; HttpOnly; Secure; SameSite=Lax
                               │        │         │
    ┌──────────────────────────┘        │         └──────────────────┐
    ▼                                   ▼                            ▼
  [ HttpOnly ]                    [ Secure ]                  [ SameSite ]
  يمنع قراءة الكوكي بـ JS       يشترط الاتصال عبر         يحمي موقعك من هجمات
  (يحمي من هجمات XSS) ✅        بروتوكول HTTPS المشفر ✅  تزوير الطلبات (CSRF) ✅`
      }
    },
    {
      id: "3.4.d",
      title: "URL و URLSearchParams",
      englishTitle: "The URL & URLSearchParams API: Managing Query Strings",
      definition: "واجهة `URL` و `URLSearchParams` هي واجهات برمجية حديثة مدمجة في المتصفح تتيح لك قراءة، وإنشاء، وتعديل معلمات روابط الويب واستعلاماتها (Query Strings مثل `?page=2&sort=price`) بسهولة واحترافية دون الحاجة لتفكيك النصوص يدوياً بسلاسل معقدة.",
      analogy: "تخيل أن الرابط هو عنوان بريدي مكتوب على ظرف: واجهة URL هي موظف بريد ذكي يفصل العنوان إلى (اسم الشارع، رقم العمارة، والرمز البريدي). يمكنك أن تقول له: 'غير رقم العمارة إلى 5' فيقوم بمسحه وتحديثه في ثانية واحدة دون أن يمزق الظرف!",
      why: "هي العمود الفقري لنظام التوجيه والفلترة في تطبيقات React و React Router! فعندما يقوم المستخدم بتصفية المنتجات حسب السعر أو البحث عن كلمة، نقوم بحفظ الفلتر في رابط الـ URL حتى يتمكن من نسخ الرابط ومشاركته مع أصدقائه أو حفظه في المفضلة.",
      terms: [
        { term: "Query String / Search Params", pronunciation: "كويري سترينغ", meaning: "معلمات الاستعلام في الرابط التي تبدأ بعلامة الاستفهام ?" },
        { term: "URLSearchParams", pronunciation: "يو آر إل سيرش بارامز", meaning: "الواجهة البرمجية لمعالجة وتعديل معلمات الرابط" },
        { term: "set() & get()", pronunciation: "سيت وجيت", meaning: "دوال لتعيين واسترجاع قيمة معلمة محددة في الرابط" },
        { term: "encodeURIComponent", pronunciation: "إنكود كومبوننت", meaning: "تشفير الحروف العربية والخاصة لتكون صالحة في الروابط" }
      ],
      syntax: "// 1. قراءة معلمات الرابط الحالي\nconst params = new URLSearchParams(window.location.search);\nconst page = params.get('page');\n\n// 2. تعديل معلمات الرابط\nparams.set('sort', 'asc');\nconsole.log(params.toString()); // 'page=1&sort=asc'",
      codeSimple: `// محاكاة رابط متجر إلكتروني مع معلمات بحث وفلاتر
const rawUrl = 'https://my-store.com/products?category=phones&minPrice=500&sort=desc';

// إنشاء كائن URL متكامل
const parsedUrl = new URL(rawUrl);

// قراءة معلمات محددة عبر searchParams
console.log('التصنيف المطلوب:', parsedUrl.searchParams.get('category'));
console.log('أقل سعر:', parsedUrl.searchParams.get('minPrice'));

// تعديل المعلمات برمجياً
parsedUrl.searchParams.set('sort', 'asc'); // تغيير الترتيب
parsedUrl.searchParams.append('brand', 'apple'); // إضافة معلمة جديدة

console.log('الرابط المحدث بالكامل:', parsedUrl.toString());`,
      codeAdvanced: `// محاكاة لخطاف useSearchParams الشهير في React Router
class CustomQuerySync {
  constructor(initialQuery = '?page=1') {
    this.params = new URLSearchParams(initialQuery);
  }

  // تحديث فلتر معين مع إعادة ضبط الصفحة للأولى
  setFilter(filterName, value) {
    if (value === null || value === '') {
      this.params.delete(filterName); // حذف المعلمة إذا كانت فارغة
    } else {
      this.params.set(filterName, value);
    }
    this.params.set('page', '1'); // إعادة التصفح للصفحة الأولى دائماً عند الفلترة
  }

  // الحصول على الرابط النهائي المشفر
  buildUrl(basePath) {
    return \`\${basePath}?\${this.params.toString()}\`;
  }
}

const sync = new CustomQuerySync('?category=laptops&page=3');
sync.setFilter('search', 'macbook pro');
sync.setFilter('inStock', 'true');

console.log('الرابط الجديد النظيف لمكونات React:', sync.buildUrl('/shop'));`,
      output: `التصنيف المطلوب: phones\nأقل سعر: 500\nالرابط المحدث بالكامل: https://my-store.com/products?category=phones&minPrice=500&sort=asc&brand=apple\nالرابط الجديد النظيف لمكونات React: /shop?category=laptops&page=1&search=macbook+pro&inStock=true`,
      mistakes: [
        {
          wrong: `// دمج النصوص العربية والرموز يدوياً في روابط الـ URL\nconst url = 'https://site.com/search?q=' + 'شاشة 4k'; // ❌ قد تسبب مشاكل تشفير وأخطاء 400!`,
          correct: `// الاعتماد على URLSearchParams؛ فهو يتكفل بتشفير الحروف والمسافات تلقائياً\nconst params = new URLSearchParams();\nparams.set('q', 'شاشة 4k'); // ✅ سيحولها إلى q=%D8%B4%D8%A7%D8%B4%D8%A9+4k بأمان`,
          explanation: "محرك URLSearchParams يقوم تلقائياً بترميز الحروف الخاصة والمسافات إلى صيغة Percent-Encoding الآمنة عالمياً في الروابط."
        }
      ],
      bestPractices: [
        "استخدم معلمات الـ URL (Query Params) لتخزين حالات الفلترة والبحث والترتيب لتسهيل مشاركة الروابط بين المستخدمين.",
        "احذف المعلمة باستخدام `delete()` إذا اختار المستخدم القيمة الافتراضية للحفاظ على نظافة الرابط وقصره.",
        "في React Router، اعتمد على خطاف `useSearchParams` الذي يوفر كائن URLSearchParams مدمجاً بالحالة."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح الروابط والـ URLSearchParams",
        concept: "URL Components & Query Manipulation",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 تشريح الرابط الكامل (URL Anatomy)            │
└─────────────────────────────────────────────────────────────┘
  https://store.com:8080/products/list?sort=new&page=2#reviews
  ├── protocol: 'https:'
  ├── host:     'store.com:8080'
  ├── pathname: '/products/list'
  ├── search:   '?sort=new&page=2'  ◄── URLSearchParams يتولى هذا!
  └── hash:     '#reviews'
  
  دوال URLSearchParams السريعة:
  .get('page')  ──> '2'     |  .set('page', '3')  ──> تعديل
  .has('sort')  ──> true    |  .delete('sort')    ──> حذف`
      }
    },
    {
      id: "3.4.e",
      title: "History API",
      englishTitle: "The History API: pushState, replaceState & SPA Routing",
      definition: "واجهة سجل التصفح (History API) في المتصفح تسمح لتطبيقات الويب بالتنقل البرمجي وتغيير عنوان الرابط (URL) في شريط المتصفح دون إعادة تحميل الصفحة بالكامل، باستخدام دالتي `history.pushState()` لإضافة صفحة جديدة للسجل، و `history.replaceState()` لاستبدال الصفحة الحالية.",
      analogy: "تخيل أنك تقرأ كتاباً سحرياً: بدلاً من إغلاق الكتاب والذهاب للمكتبة لشراء كتاب جديد في كل مرة تريد فيها قراءة فصل جديد (إعادة تحميل الصفحة)، يقوم الساحر بتبديل الحبر والألوان على نفس الصفحة في يدك وتحديث رقم الصفحة في الأعلى في غمضة عين!",
      why: "هي الأساس التقني السري الذي بُنيت عليه كل تطبيقات الصفحة الواحدة (Single Page Applications - SPAs) وكل مكتبات التوجيه مثل React Router و Next.js! بفضلها، يتغير الرابط ويتحرك زرا الرجوع والتقدم في المتصفح بينما يظل التطبيق حياً وسريعاً دون وميض إعادة التحميل.",
      terms: [
        { term: "History API", pronunciation: "هيستوري إيه بي آي", meaning: "واجهة إدارة سجل تنقلات المتصفح برمجياً" },
        { term: "pushState()", pronunciation: "بوش ستيت", meaning: "تغيير الرابط وإضافة مدخل جديد لسجل التراجع" },
        { term: "replaceState()", pronunciation: "ريبليس ستيت", meaning: "تغيير الرابط مع استبدال الصفحة الحالية دون زيادة سجل التراجع" },
        { term: "popstate event", pronunciation: "بوب ستيت إيفنت", meaning: "حدث ينطلق عندما ينقر المستخدم على زر الرجوع أو التقدم بالمتصفح" }
      ],
      syntax: "// 1. إضافة مسار جديد لسجل المتصفح بدون تحميل\nhistory.pushState({ page: 'profile' }, '', '/profile');\n\n// 2. استبدال المسار الحالي (مفيد لتحديث الفلاتر)\nhistory.replaceState(null, '', '/shop?filter=sale');\n\n// 3. الاستماع لزر الرجوع\nwindow.addEventListener('popstate', (e) => { ... });",
      codeSimple: `// محاكاة التنقل السلس لتطبيق React دون إعادة تحميل
function navigateTo(urlPath, pageTitle) {
  // تغيير مسار الرابط في شريط المتصفح بأناقة تامة
  history.pushState({ path: urlPath }, pageTitle, urlPath);
  console.log(\`✅ تم تحديث الرابط في المتصفح إلى: \${urlPath} (دون أي وميض أو إعادة تحميل!)\`);
}

// الاستماع لنقر المستخدم على زر 'الرجوع للخلف' في المتصفح
window.addEventListener('popstate', (event) => {
  console.log('⬅️ المستخدم نقر على زر الرجوع في المتصفح! بيانات الحالة:', event.state);
});

// تجربة التنقل البرمجي
navigateTo('/dashboard', 'لوحة التحكم');
navigateTo('/settings', 'الإعدادات');`,
      codeAdvanced: `// بناء موجه صفحات مصغر متكامل (Mini SPA Router) بنقاء JavaScript
class MiniRouter {
  constructor() {
    this.routes = {};
    // الاستماع لزر الرجوع والتقدم بالمتصفح
    window.addEventListener('popstate', () => this.handleRoute());
  }

  // تسجيل مسار والمكون المرتبط به
  addRoute(path, renderFn) {
    this.routes[path] = renderFn;
  }

  // التنقل البرمجي
  push(path) {
    history.pushState(null, '', path);
    this.handleRoute();
  }

  // تشغيل المكون المناسب للمسار الحالي
  handleRoute() {
    const currentPath = window.location.pathname;
    const view = this.routes[currentPath] || this.routes['*'];
    if (view) view();
  }
}

// تهيئة الموجه الصغير
const router = new MiniRouter();
router.addRoute('/', () => console.log('عرض الصفحة الرئيسية 🏠'));
router.addRoute('/about', () => console.log('عرض صفحة عن الشركة ℹ️'));
router.addRoute('*', () => console.log('صفحة 404: غير موجودة ⚠️'));

console.log('تم بناء نواة راوتر الـ SPA بنجاح عبر History API!');`,
      output: `✅ تم تحديث الرابط في المتصفح إلى: /dashboard (دون أي وميض أو إعادة تحميل!)\n✅ تم تحديث الرابط في المتصفح إلى: /settings (دون أي وميض أو إعادة تحميل!)\nتم بناء نواة راوتر الـ SPA بنجاح عبر History API!`,
      mistakes: [
        {
          wrong: `// استخدام وسوم الروابط التقليدية <a href="/page"> في تطبيقات الـ SPA دون اعتراض النقر\n// <a href="/about">عن الشركة</a> // ❌ سيؤدي لإعادة تحميل الصفحة بالكامل وإعادة تنزيل حزم JS!`,
          correct: `// اعتراض النقر بـ e.preventDefault() واستخدام pushState (وهذا ما يفعله مكون <Link> في React Router)\ne.preventDefault();\nhistory.pushState(null, '', '/about'); // ✅ تنقل خاطف دون إعادة تحميل`,
          explanation: "الروابط التقليدية ترسل طلب HTTP جديد للخادم لإعادة بناء الصفحة، بينما الـ SPA يعترض النقر ويحدث شريط العنوان فقط بـ pushState مع تبديل المكون في الذاكرة."
        }
      ],
      bestPractices: [
        "استخدم دائماً مكونات التوجيه المخصصة في React (مثل `<Link>` من `react-router-dom`) بدلاً من وسوم `<a>` المباشرة.",
        "استخدم `replaceState` لتحديث فلاتر البحث أو الخطوات الانتقالية لكي لا يضطر المستخدم للنقر 10 مرات على زر الرجوع للخروج من الصفحة.",
        "تأكد من ضبط خادم الإنتاج (Nginx, Netlify, Vercel) ليعيد توجيه كافة المسارات إلى `index.html` (SPA Fallback) حتى لا يواجه الزوار خطأ 404 عند تحديث الصفحة."
      ],
      infographic: {
        title: "إنفوجرافيك: كيف تصنع History API سحر تطبيقات الـ SPA؟",
        concept: "History API & SPA Seamless Navigation",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 سحر الـ Single Page Application (SPA)        │
└─────────────────────────────────────────────────────────────┘
  المستخدم ينقر على رابط في القائمة:
                 │
  e.preventDefault() ──> إيقاف إعادة تحميل الصفحة التقليدية 🛑
                 │
  history.pushState() ──> تحديث الرابط في شريط المتصفح بأناقة 🔗
                 │
  React Router ──> تبديل المكون المعروض على الشاشة في أجزاء من الثانية ⚡
                 │
                 ▼
  نتيجة خارقة: سرعة فائقة تشبه تطبيقات الهواتف المحمولة!`
      }
    },
    {
      id: "3.4.f",
      title: "Intersection Observer",
      englishTitle: "Intersection Observer: Performant Visibility Detection",
      definition: "واجهة مراقب التقاطع (Intersection Observer) هي واجهة حديثة عالية الأداء تراقب ظهور أو اختفاء عنصر HTML داخل نافذة العرض في المتصفح (Viewport). تعمل في مسار خلفي منفصل دون التسبب في إجهاد المعالج، وتعتبر الأداة القياسية للتحميل الكسول للصور (Lazy Loading) والتمرير اللانهائي (Infinite Scroll).",
      analogy: "تخيل حارس أمن ذكياً يقف عند بوابة مجمع تجاري: بدلاً من أن تركض بنفسك كل نصف ثانية وتسأل: 'هل وصل الزائر الفلاني؟' (أحداث التمرير القديمة المرهقة)، تجلس مرتاحاً في مكتبك، ويقوم الحارس برن الجرس فقط عندما يمر الزائر من البوابة أمام عينيه!",
      why: "قديماً، كان المبرمجون يربطون أحداث التمرير (scroll event listener) لحساب موضع العنصر بالرياضيات المعقدة، مما كان يسبب تهنيجاً وتقطيعاً مرئياً كارثياً في المتصفح (Scroll Jank / Layout Thrashing). الـ Intersection Observer حلت هذه المعاناة كلياً بأعلى كفاءة في استهلاك الطاقة.",
      terms: [
        { term: "Intersection Observer", pronunciation: "إنترسكشن أوبزيرفر", meaning: "مراقب تقاطع وظهور العناصر في شاشة العرض" },
        { term: "Viewport", pronunciation: "فيو بورت", meaning: "نافذة العرض المرئية للمستخدم حالياً على الشاشة" },
        { term: "Threshold", pronunciation: "ثريش هولد", meaning: "عتبة ونسبة الجزء المرئي من العنصر المطلوبة لإطلاق المراقب (0.0 إلى 1.0)" },
        { term: "isIntersecting", pronunciation: "إز إنترسكتينغ", meaning: "قيمة منطقية تشير إلى ما إذا كان العنصر ظاهراً على الشاشة حالياً" }
      ],
      syntax: "const observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      console.log('العنصر ظهر على الشاشة!');\n    }\n  });\n}, { threshold: 0.5 }); // 50% من العنصر يجب أن يظهر\n\nobserver.observe(targetElement);",
      codeSimple: `// محاكاة مراقبة ظهور إعلان تجاري لتسجيل المشاهدات بدقة
const mockObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // التحقق هل دخل العنصر في نطاق الرؤية
    if (entry.isIntersecting) {
      console.log('👁️ الإعلان التجاري ظهر بالكامل أمام عين المستخدم الآن!');
      // التوقف عن المراقبة بعد أول ظهور لتوفير الموارد
      mockObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.8 }); // يتفعل عندما يظهر 80% من الإعلان

console.log('تم إعداد مراقب الظهور بنجاح.');`,
      codeAdvanced: `// نمط عملي حقيقي: بناء محرك تحميل الصور الكسول (Image Lazy Loader)
function setupLazyLoading() {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // قراءة الرابط الأصلي من data-src وتعيينه لـ src الفعلي
        const realSrc = img.getAttribute('data-src');
        if (realSrc) {
          img.src = realSrc;
          img.classList.add('fade-in-loaded');
          console.log(\`🖼️ بدأ تحميل الصورة الحقيقية: \${realSrc}\`);
        }
        // إلغاء مراقبة الصورة بعد تحميلها بنجاح
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '200px' // بدء التحميل مسبقاً قبل وصول المستخدم للصورة بـ 200 بكسل لتجربة فائقة النعومة!
  });

  return imageObserver;
}

const lazyLoader = setupLazyLoading();
console.log('محرك التحميل الكسول جاهز لحماية استهلاك باقة الإنترنت!');`,
      output: `تم إعداد مراقب الظهور بنجاح.\nمحرك التحميل الكسول جاهز لحماية استهلاك باقة الإنترنت!`,
      mistakes: [
        {
          wrong: `// استخدام window.addEventListener('scroll') مع getBoundingClientRect للكشف عن العناصر\nwindow.addEventListener('scroll', () => {\n  const rect = el.getBoundingClientRect(); // ❌ كارثة أداء! تجبر المتصفح على إعادة حساب تخطيط الصفحة في كل بكسل تمرير!\n});`,
          correct: `// استخدام IntersectionObserver بدلاً منها بالكامل\nconst obs = new IntersectionObserver(callback);\nobs.observe(el); // ✅ يعمل في مسار خلفي منفصل دون أي تقطيع في التمرير`,
          explanation: "استدعاء getBoundingClientRect المتكرر داخل حدث التمرير يسبب ظاهرة تقطيع وتجميد التمرير القاتلة (Layout Thrashing)، بينما المراقب الحديث معزول تماماً ومحسن بالهاردوير."
        }
      ],
      bestPractices: [
        "استخدم `unobserve(element)` دائماً بمجرد إنجاز المهمة (مثل تحميل الصورة الكسولة) لإيقاف هدر الموارد.",
        "في React، انتبه لإلغاء المراقبة عبر `observer.disconnect()` داخل دالة التنظيف في `useEffect`.",
        "استخدم خاصية `rootMargin` لتحميل العناصر مبكراً قليلاً قبل وصول عين المستخدم إليها لمنع إحساسه بالتأخير."
      ],
      infographic: {
        title: "إنفوجرافيك: سحر كفاءة Intersection Observer",
        concept: "Intersection Observer vs Scroll Event",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 المراقب الحديث مقابل أحداث التمرير القديمة   │
└─────────────────────────────────────────────────────────────┘
  الأسلوب القديم البائس (Scroll Event):
  تتحرك الفأرة 1 ملم ──> 60 استدعاء في الثانية ──> تقطيع الشاشة (Jank) ❌

  الأسلوب الحديث الذكي (Intersection Observer):
  المتصفح يراقب تقاطع العنصر في الخلفية بأقل استهلاك للطاقة
  العنصر يدخل الشاشة ──> إطلاق إشعار واحد دقيق وسلس فوراً! ✅`
      }
    },
    {
      id: "3.4.g",
      title: "Resize Observer",
      englishTitle: "Resize Observer: Component-Level Responsive Design",
      definition: "مراقب الأبعاد (Resize Observer) هو واجهة متطورة تتيح لك مراقبة تغير أبعاد وحجم (العرض والارتفاع) أي عنصر HTML محدد بدقة، والتفاعل مع تلك التغيرات برمجياً؛ مما يمكننا من بناء تصميم متجاوب على مستوى المكون ذاته (Component-Level Responsiveness) بدلاً من الاعتماد الحصري على حجم شاشة المتصفح الكاملة.",
      analogy: "تخيل أن لديك ودجة طقس (Weather Widget): إذا وضعها المستخدم في الشريط الجانبي الضيق، تصبح صغيرة وتعرض درجة الحرارة فقط. وإذا سحبها ووضعها في قلب الشاشة العريضة، تتمدد تلقائياً وتعرض توقعات أسبوع كامل وتفاصيل الرياح. المكون يتكيف مع مساحة غرفته المتاحة له، وليس مع مساحة المنزل كله!",
      why: "استعلامات الوسائط التقليدية في CSS (`@media`) تنظر فقط لحجم شاشة الجهاز بالكامل، وهذا غير كافٍ في عصر مكونات React المستقلة القابلة لإعادة الاستخدام. الـ Resize Observer يتيح للمكون أن يعرف متى صغر حجم صندوقه ليغير تصميمه تلقائياً.",
      terms: [
        { term: "Resize Observer", pronunciation: "ريسايز أوبزيرفر", meaning: "مراقب تغير أبعاد وحجم عناصر الـ HTML" },
        { term: "contentRect", pronunciation: "كونتنت ريكت", meaning: "كائن يحتوي على العرض والارتفاع والحدود الصافية للعنصر" },
        { term: "Container Queries", pronunciation: "كونتينر كويريز", meaning: "استعلامات الحاوية الحديثة التي تشبه Resize Observer في CSS" }
      ],
      syntax: "const resizeObserver = new ResizeObserver((entries) => {\n  for (let entry of entries) {\n    const { width, height } = entry.contentRect;\n    console.log(`أبعاد العنصر تغيرت: ${width}x${height}`);\n  }\n});\n\nresizeObserver.observe(widgetElement);",
      codeSimple: `// إعداد مراقب لتغيير أبعاد عنصر رسم بياني في لوحة التحكم
const chartObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const newWidth = Math.round(entry.contentRect.width);
    console.log(\`📏 تم تغيير حجم الحاوية إلى عرض جديد: \${newWidth}px\`);
    
    // التكيف الذكي: إذا كان العرض صغيراً، تقليل عدد الأعمدة
    if (newWidth < 400) {
      console.log('تبديل وضع العرض إلى: الوضع المصغر البسيط (Compact Mode)');
    } else {
      console.log('تبديل وضع العرض إلى: الوضع التفصيلي الكامل (Expanded Mode)');
    }
  }
});

console.log('مراقب الأبعاد جاهز لحراسة تجاوب المكونات.');`,
      codeAdvanced: `// محاكاة لخطاف useResizeObserver المخصص في React
function simulateUseResizeObserver(elementId, onResize) {
  const observer = new ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry) {
      const { width, height } = entry.contentRect;
      onResize({ width, height });
    }
  });

  return {
    cleanup() {
      observer.disconnect();
      console.log('🧹 تم تنظيف وإيقاف مراقب الأبعاد بنجاح عند إزالة المكون.');
    }
  };
}

// اختبار عمل الخطاف
const hookInstance = simulateUseResizeObserver('card-1', ({ width, height }) => {
  console.log(\`تم استلام الأبعاد الجديدة: \${width}x\${height}\`);
});

hookInstance.cleanup();`,
      output: `مراقب الأبعاد جاهز لحراسة تجاوب المكونات.\n🧹 تم تنظيف وإيقاف مراقب الأبعاد بنجاح عند إزالة المكون.`,
      mistakes: [
        {
          wrong: `// استخدام window.addEventListener('resize') لمعرفة هل تغير حجم المكون\nwindow.addEventListener('resize', () => { ... }); // ❌ لن يتفعل إذا تغير حجم المكون بسبب فتح قائمة جانبية دون تحريك نافذة المتصفح!`,
          correct: `// استخدام ResizeObserver لمراقبة العنصر ذاته مباشرة بغض النظر عن حجم المتصفح\nconst observer = new ResizeObserver(callback);\nobserver.observe(myComponentRef); // ✅ يتفعل فوراً مع أي تغيير في مساحة المكون`,
          explanation: "المكون قد يتغير حجمه لأسباب متعددة (انكماش عمود، طي قائمة، تبديل تبويب) دون أن تتغير نافذة المتصفح نهائياً؛ لذا فإن مراقبة العنصر نفسه عبر ResizeObserver هي الحل الأدق."
        }
      ],
      bestPractices: [
        "استخدم ResizeObserver لبناء الرسوم البيانية المتجاوبة (Responsive Data Visualizations كـ D3 و Recharts).",
        "تأكد دائماً من استدعاء `disconnect()` عند خروج مكون React من الواجهة في دالة تنظيف `useEffect` لتفادي تسريب الذاكرة.",
        "ادرس تقنية CSS Container Queries الحديثة؛ فكثير من المهام التصميمية البسيطة أصبحت تُحل بـ CSS المباشر بفضلها."
      ],
      infographic: {
        title: "إنفوجرافيك: التجاوب على مستوى المكون عبر Resize Observer",
        concept: "Window Resize vs Component Resize",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 ثورة التجاوب على مستوى المكون                │
└─────────────────────────────────────────────────────────────┘
  الماضي: التجاوب على مستوى النافذة فقط (Window Media Queries):
  يتحكم في الصفحة ككل بناءً على شاشة الجوال أو الديسكتوب.
  
  الحاضر: التجاوب المستقل للمكون (Resize Observer):
  [ المكون في عمود رئيسي عريض ] ──> يعرض جدول بيانات متكامل
  [ نفس المكون في شريط جانبي ضيق ] ──> يتحول تلقائياً لبطاقة ملخصة!`
      }
    },
    {
      id: "3.4.h",
      title: "الفرق بين Debouncing و Throttling",
      englishTitle: "Debouncing vs Throttling: Controlling Event Frequency",
      definition: "تقنيتا الديباونس (Debouncing) والثراتلينغ (Throttling) هما نمطان برمجيان متقدمان للتحكم في معدل تكرار تنفيذ الدوال المكلفة استجابة للأحداث السريعة والمتكررة (مثل الكتابة في حقل البحث، أو التمرير، أو تغيير أبعاد النافذة). الديباونس تؤجل التنفيذ حتى 'يتوقف المستخدم عن الفعل' لفترة زمنية محددة، بينما الثراتلينغ تضمن تنفيذ الدالة 'مرة واحدة كل فاصل زمني ثابت' طوال فترة استمرار الحدث.",
      analogy: "تخيل موقفين في الحياة اليومية:\n1. مصعد الفندق (Debouncing): كلما دخل شخص يضغط زر إغلاق الباب، فيفتح الباب من جديد وينتظر 5 ثوانٍ؛ لا ينطلق المصعد إلا إذا توقف الناس عن الدخول وهدأ الممر لـ 5 ثوانٍ كاملة!\n2. مدفع الرشاش الآلي (Throttling): مهما ضغطت على الزناد بسرعة ألف مرة في الثانية، فإن المدفع يطلق طلقة واحدة فقط كل نصف ثانية بانتظام محسوب دون زيادة.",
      why: "بدونهما، سينهار خادمك ويتجمد متصفح المستخدم! إذا كان لديك حقل بحث حي وكتب المستخدم كلمة 'كمبيوتر'، فبدون Debouncing سيرسل المتصفح 8 طلبات شبكة مكلفة في أقل من ثانية واحدة لكل حرف! وبفضل Debouncing يرسل طلباً واحداً فقط بعد أن يكمل المستخدم كتابة الكلمة بهدوء.",
      terms: [
        { term: "Debouncing", pronunciation: "ديباونسينغ", meaning: "تأجيل التنفيذ حتى تنتهي حركة المستخدم تماماً لفترة محددة" },
        { term: "Throttling", pronunciation: "ثراتلينغ", meaning: "خنق ومحاصرة التنفيذ ليعمل بمعدل تكرار ثابت أقصى في الثانية" },
        { term: "Rate Limiting", pronunciation: "ريت ليميتينغ", meaning: "تحديد وتقييد معدل تكرار العمليات البرمجية" },
        { term: "Input Lag", pronunciation: "إنبوت لاج", meaning: "ثقل وتأخر استجابة الواجهة لحركات المستخدم" }
      ],
      syntax: "// دالة Debounce البسيطة بالـ Closure والمؤقت\nfunction debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}",
      codeSimple: `// دالة Debounce الكلاسيكية الأنيقة
function debounce(func, delayMs = 300) {
  let timeoutId;

  return (...args) => {
    // إلغاء المؤقت السابق في كل مرة يضغط فيها المستخدم حرفاً جديداً
    clearTimeout(timeoutId);

    // بدء مؤقت جديد
    timeoutId = setTimeout(() => {
      func(...args);
    }, delayMs);
  };
}

// دالة محاكاة إرسال طلب البحث للخادم
const sendSearchQuery = (query) => {
  console.log(\`🚀 إرسال طلب بحث واحد فقط للخادم للكلمة: "\${query}"\`);
};

// إنشاء النسخة المهذبة بـ Debounce
const debouncedSearch = debounce(sendSearchQuery, 500);

// محاكاة مستخدم يكتب حروف كلمة "React" بسرعة
debouncedSearch('R');
debouncedSearch('Re');
debouncedSearch('Rea');
debouncedSearch('React'); // هذا هو الاستدعاء الوحيد الذي سينفذ فعلياً بعد 500ms!`,
      codeAdvanced: `// دالة Throttle المتقدمة للتحكم في أحداث التمرير وتحريك الفأرة
function throttle(func, limitMs = 400) {
  let inThrottle = false;

  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      // فتح القفل بعد مرور الفاصل الزمني المحدد
      setTimeout(() => {
        inThrottle = false;
      }, limitMs);
    }
  };
}

// محاكاة حدث تمرير متكرر ينطلق 100 مرة في الثانية
const handleScrollPosition = (scrollY) => {
  console.log(\`📜 تسجيل موضع التمرير بمعدل منظم: \${scrollY}px\`);
};

const throttledScroll = throttle(handleScrollPosition, 200);

// تجربة محاكاة التمرير المكثف
throttledScroll(10);
throttledScroll(25);
throttledScroll(50); // الاستدعاءات الوسيطة تُحجب بذكاء لحماية المعالج`,
      output: `📜 تسجيل موضع التمرير بمعدل منظم: 10px\n🚀 إرسال طلب بحث واحد فقط للخادم للكلمة: "React"`,
      mistakes: [
        {
          wrong: `// إنشاء دالة debounced جديدة داخل جسم دالة مكون React في كل تصيير\nfunction SearchBox() {\n  // ❌ خطأ كارثي! في كل إعادة تصيير تُولد دالة debounce جديدة بمؤقت مستقل فيفشل الديباونس تماماً!\n  const handleSearch = debounce(searchApi, 300);\n}`,
          correct: `// تثبيت الدالة باستخدام useMemo أو useCallback أو useRef لضمان الاحتفاظ بنفس المؤقت\nconst handleSearch = useMemo(() => debounce(searchApi, 300), []); // ✅ سليم ومثالي`,
          explanation: "الـ Debounce يعتمد على الـ Closure واحتفاظ المتغير timer في الذاكرة؛ فإذا أعدت إنشاء الدالة في كل تصيير ضاع المؤقت ونُفذت الدالة في كل حرف كأنك لم تفعل شيئاً."
        }
      ],
      bestPractices: [
        "استخدم `Debouncing` لحقول البحث والإكمال التلقائي (Autocomplete) والتحقق من صلاحية الحقول بعد انتهاء كتابة المستخدم.",
        "استخدم `Throttling` لأحداث التمرير (Scroll) وأحداث تغيير أبعاد الشاشة (Resize) وأحداث إطلاق الألعاب (Shooting).",
        "احرص دائماً على إلغاء المؤقتات المعلقة عند إزالة المكون من الواجهة لتفادي تشغيل دوال على مكونات ملغاة."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة الديباونس (Debounce) والثراتلينغ (Throttle)",
        concept: "Debounce vs Throttle Timing Diagram",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 الديباونس (Debounce) مقابل الثراتلينغ (Throttle)│
└─────────────────────────────────────────────────────────────┘
  الأحداث المتتالية السريعة:   ||||||||||||||||||||||||||||||
  
  Debouncing (انتظار الهدوء):
  |||||||||||||||||||||||||||||| ──────── (توقف 400ms) ──> [ تنفيذ واحد! ]
  (مثالي لحقول البحث وحفظ المسودات)
  
  Throttling (معدل تكرار ثابت):
  [ تنفيذ ] ──200ms──> [ تنفيذ ] ──200ms──> [ تنفيذ ] ──200ms──> [ تنفيذ ]
  (مثالي للتمرير وألعاب إطلاق النار ومتابعة مؤشر الفأرة)`
      }
    }
  ],
  quiz: [
    {
      id: "q3.4.1",
      question: "ما الفرق الجوهري بين LocalStorage و SessionStorage في المتصفح؟",
      options: [
        "LocalStorage تحفظ الأرقام فقط بينما SessionStorage تحفظ النصوص فقط.",
        "بيانات LocalStorage دائمة وتبقى بعد إغلاق المتصفح، بينما SessionStorage تُمحى فور إغلاق تبويب المتصفح ومعزولة لكل تبويب.",
        "SessionStorage أسرع بألف مرة من LocalStorage.",
        "لا يوجد فرق بينهما؛ هما اسمان لنفس الميزة القديمة."
      ],
      correctAnswer: 1,
      explanation: "الـ LocalStorage دائمة ولا تموت إلا بحذف المستخدم لها، بينما الـ SessionStorage مؤقتة جداً وتزول وتُمحى تلقائياً بمجرد إغلاق نافذة التبويب."
    },
    {
      id: "q3.4.2",
      question: "لماذا يعتبر علم HttpOnly في ملفات الكوكيز أمراً حاسماً لأمان المستخدم؟",
      options: [
        "لأنه يجعل الكوكي ملونة بالأخضر داخل شريط المتصفح.",
        "لأنه يمنع كود JavaScript من قراءة أو سرقة الكوكي؛ مما يحمي توكنات تسجيل الدخول من ثغرات XSS.",
        "لأنه يسمح بحفظ ملفات بحجم 500 جيجابايت داخل المتصفح.",
        "لأنه يمنع الخادم من إرسال أي ردود خاطئة للمتصفح."
      ],
      correctAnswer: 1,
      explanation: "العلم HttpOnly يجعل الكوكي محجوبة تماماً عن لغة JavaScript وعن خاصية document.cookie، مما يحميها من السرقة في حال نجاح هجوم حقن نصوص برمجية (XSS)."
    },
    {
      id: "q3.4.3",
      question: "في أي الحالات البرمجية نفضل استخدام تقنية Debouncing بدلاً من Throttling؟",
      options: [
        "عند التعامل مع حركة مؤشر الفأرة في لعبة سريعة.",
        "عند بناء حقل بحث حي (Live Search) نريد إرسال الطلب بعد أن يتوقف المستخدم عن الكتابة تماماً.",
        "عند الاستماع لحدث التمرير لحساب النسبة المئوية لقراءة المقال.",
        "عند محاولة تسريع عملية تحميل الصور من السيرفر."
      ],
      correctAnswer: 1,
      explanation: "الديباونس مثالي لحقول البحث؛ فهو ينتظر حتى يهدأ المستخدم ويتوقف عن ضغط الحروف لفترة محددة (مثل 400ms) ثم يرسل طلباً واحداً نظيفاً للخادم."
    }
  ],
  exercise: {
    title: "تمرين عملي: بناء حقل بحث وحفظ سجل الكلمات المفتاحية في LocalStorage مع Debounce",
    description: "المطلوب بناء نظام بحث مصغر يجمع بين ميزات المتصفح الحديثة: استخدام دالة `debounce` لتأخير البحث أثناء كتابة المستخدم، وحفظ الكلمات المبحوث عنها في مصفوفة داخل `LocalStorage` باستخدام `JSON.stringify`، واسترجاع سجل الكلمات بأمان بـ `JSON.parse` وتحديث واجهة السجل.",
    starterCode: `// 1. اكتب دالة debounce بسيطة
function debounce(fn, delayMs) {
  // كود المؤقت...
}

// 2. دالة حفظ كلمة البحث في LocalStorage دون تكرار
function saveSearchHistory(keyword) {
  // اجلب السجل القديم من LocalStorage
  // أضف الكلمة الجديدة في البداية وتجنب التكرار
  // احفظ السجل الجديد كنص JSON
}

// 3. دالة محاكاة البحث بعد انتهاء الديباونس
const handleSearch = debounce((text) => {
  if (!text.trim()) return;
  console.log('تنفيذ البحث للكلمة:', text);
  saveSearchHistory(text);
}, 400);`,
    hints: [
      "في LocalStorage: اقرأ بـ `localStorage.getItem('search_history')` واستخدم `JSON.parse` مع مصفوفة فارغة كبديل `|| []`.",
      "تجنب التكرار باستخدام `Set`: `const updated = [...new Set([keyword, ...oldList])];`",
      "احفظ بـ `localStorage.setItem('search_history', JSON.stringify(updated));`"
    ],
    solution: `// 1. دالة Debounce الذكية
function debounce(fn, delayMs = 300) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delayMs);
  };
}

// 2. إدارة التخزين المحلي لسجل البحث بنقاء واحترافية
const SearchHistoryStorage = {
  KEY: 'user_search_history',

  // قراءة السجل بأمان
  getAll() {
    try {
      const raw = localStorage.getItem(this.KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  // إضافة كلمة جديدة بأمان مع منع التكرار والاحتفاظ بآخر 5 كلمات
  add(keyword) {
    const cleanWord = keyword.trim();
    if (!cleanWord) return;

    const currentHistory = this.getAll();
    // تصفية الكلمة القديمة إن وجدت ووضع الجديدة في المقدمة
    const filtered = currentHistory.filter(item => item !== cleanWord);
    const updated = [cleanWord, ...filtered].slice(0, 5);

    try {
      localStorage.setItem(this.KEY, JSON.stringify(updated));
      console.log('✅ تم حفظ الكلمة في سجل LocalStorage:', cleanWord);
    } catch (err) {
      console.error('فشل الحفظ:', err.message);
    }
  }
};

// 3. معالج البحث المهذب بـ Debounce
const executeSearch = debounce((query) => {
  console.log(\`🔍 إطلاق البحث الفعلي في السيرفر عن: "\${query}"\`);
  SearchHistoryStorage.add(query);
  console.log('أحدث 5 كلمات بحث مخزنة في الذاكرة:', SearchHistoryStorage.getAll());
}, 400);

// تجربة محاكاة سريعة
executeSearch('React 19');
executeSearch('React 19 Hooks'); // هذا فقط سينفذ بعد 400ms!`
  },
  infographic: {
    title: "إنفوجرافيك الموضوع: خريطة واجهات المتصفح الحديثة لمطوري React",
    badge: "ترسانة واجهات المتصفح",
    summary: "المتصفح ليس مجرد قارئ صفحات، بل هو نظام تشغيل حقيقي في يدك: التخزين المحلي، التلاعب بالروابط، مراقبات الأداء (Intersection/Resize)، والتحكم في توقيت الأحداث بـ Debounce و Throttle.",
    points: [
      "LocalStorage & SessionStorage: تخزين محلي بنمط المفتاح والقيمة وسرعة فائقة.",
      "Cookies: تواصل آمن بين العميل والخادم بحصانة علم HttpOnly.",
      "URLSearchParams: التلاعب بالـ Query Strings وبناء فلاتر قابلة للمشاركة.",
      "History API: المحرك السري لتنقلات الـ SPA السريعة دون إعادة تحميل.",
      "Intersection Observer: التحميل الكسول للصور ومراقبة الظهور بأعلى كفاءة.",
      "Debounce & Throttle: كبح الأحداث المتكررة لحماية معالج المتصفح وخوادم الـ APIs."
    ]
  }
};
