// src/data/sections/section10/topic1.js
// القسم 10: التعامل مع APIs والبيانات الخارجية - الموضوع 1: أساسيات REST API

export const topic1 = {
  id: "10.1",
  title: "أساسيات REST API",
  description: "فهم البروتوكولات والركائز الأساسية التي تحكم تبادل البيانات عبر الويب، ومبادئ معمارية REST وطرق HTTP وأكواد الحالة والترويسات والرموز الأمنية.",
  subtopics: [
    {
      id: "10.1.a",
      title: "مفهوم API",
      englishTerm: "API (Application Programming Interface - إيه بي آي: واجهة برمجة التطبيقات)",
      description: "واجهة برمجة التطبيقات (API) هي جسر تواصل وعقد رقمي يسمح لبرنامجين أو نظامين مختلفين بالتحدث وتبادل البيانات بشكل آمن ومنظم، دون حاجة أي طرف لمعرفة التفاصيل الداخلية لكيفية بناء الطرف الآخر. في تطوير الويب الحديث، يعمل تطبيق React كواجهة أمامية (Frontend/Client) بينما يقدم الخادم (Backend/Server) واجهة API تزود React بالبيانات الخام (عادةً بتنسيق JSON).",
      analogy: "تخيل أنك جالس في مطعم: أنت الزبون (Frontend)، والمطبخ هو الخادم (Backend) الذي يمتلك كل المكونات وقواعد البيانات. النادل هو الـ API؛ يأخذ طلبك المحدد من قائمة الطعام (Endpoint)، ويوصله للمطبخ، ثم يعود إليك بالطبق الجاهز تماماً.",
      whyItMatters: "تطبيقات React في العالم الحقيقي ليست مجرد واجهات ساكنة؛ بل هي واجهات ديناميكية تعتمد بنسبة 100% على استهلاك APIs لعرض بيانات المستخدمين، المنتجات، المعاملات المالية، والدردشة الفورية.",
      syntax: "Client Request (HTTP) ---> API Endpoint ---> Server Response (JSON)",
      simpleExample: `// مثال بسيط يوضح استدعاء API عام لجلب بيانات مستخدم
// استدعاء دالة fetch المدمجة في المتصفح مع رابط الـ API
fetch('https://jsonplaceholder.typicode.com/users/1')
  // تحويل استجابة الخادم الأولية إلى كائن JSON قابل للقراءة في جافاسكريبت
  .then((response) => response.json())
  // طباعة بيانات المستخدم المستلمة في وحدة التحكم (Console)
  .then((userData) => console.log('بيانات المستخدم:', userData))
  // التقاط أي خطأ في الاتصال بالشبكة وطباعته
  .catch((error) => console.error('حدث خطأ في جلب البيانات:', error));`,
      advancedExample: `// مثال متقدم: دالة معيارية لجلب بيانات آمنة مع التحقق من استجابة الـ API
// تعريف دالة غير متزامنة تقبل عنوان نقطة النهاية (Endpoint)
async function fetchSecureApiData(endpoint) {
  // تغليف الطلب داخل كتلة try للتعامل الدقيق مع الاستثناءات
  try {
    // إرسال طلب HTTP مع تحديد مهلة زمنية ورؤوس مخصصة
    const response = await fetch(endpoint, {
      // تحديد طريقة الطلب
      method: 'GET',
      // إضافة ترويسات تطلب بيانات بتنسيق JSON
      headers: {
        'Accept': 'application/json',
      },
    });

    // التحقق مما إذا كانت حالة الاستجابة تقع في نطاق النجاح 200-299
    if (!response.ok) {
      // إطلاق خطأ يحتوي على كود الحالة في حال فشل الطلب
      throw new Error('فشل الطلب مع كود الحالة: ' + response.status);
    }

    // استخراج محتوى JSON بعد التأكد من سلامة الطلب
    const data = await response.json();
    // إرجاع البيانات للمستدعي
    return { success: true, data };
  } catch (error) {
    // إرجاع تفاصيل الخطأ بصورة منظمة
    return { success: false, error: error.message };
  }
}`,
      output: "كائن جافاسكريبت يحتوي على خصائص المستخدم مثل: { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' }.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن الـ API هو قاعدة البيانات نفسها مباشرة.",
          fix: "إدراك أن الـ API هو وسيط وطبقة أمان تفصل واجهة React عن قاعدة البيانات وتطبق قواعد الصلاحيات والمنطق التجاري.",
          explanation: "الواجهات الأمامية لا تتصل بقواعد البيانات مثل PostgreSQL أو MongoDB مباشرة لأسباب أمنية وهيكلية."
        },
        {
          mistake: "عدم فحص خاصية response.ok والاكتفاء بقراءة response.json().",
          fix: "التحقق دائماً من if (!response.ok) قبل محاولة فك تشفير الـ JSON.",
          explanation: "دالة fetch لا تطلق خطأ عند أكواد HTTP 404 أو 500؛ بل تطلق خطأ فقط عند انقطاع الشبكة الفعلي."
        }
      ],
      bestPractices: [
        "عامل الـ API كعقد رسمي (Contract) بين الواجهة الأمامية والخلفية مع تحديد شكل البيانات المتوقع بدقة.",
        "استخدم أدوات مثل Swagger أو Postman لاختبار نقاط النهاية وفهم نماذج الطلب والاستجابة قبل البرمجة."
      ],
      infographic: {
        title: "هيكلية الـ API كجسر تواصل",
        elements: [
          { label: "React Frontend", role: "إرسال طلب HTTP محدد وعرض الواجهة للمستخدم", color: "blue" },
          { label: "API Endpoint", role: "عقد التخاطب وعنوان المورد (URL + HTTP Method)", color: "amber" },
          { label: "Backend Server", role: "معالجة الأعمال، التوثيق، والتواصل مع قاعدة البيانات", color: "purple" },
          { label: "JSON Data", role: "حمولة البيانات الخفيفة المتبادلة بين الطرفين", color: "emerald" }
        ]
      }
    },
    {
      id: "10.1.b",
      title: "مفهوم REST",
      englishTerm: "REST (Representational State Transfer - ريست: نقل الحالة التمثيلية)",
      description: "معمارية REST هي نمط تصميمي قياسي لبناء خدمات الويب يعتمد على بروتوكول HTTP القياسي. في REST، يُعامل كل شيء على أنه 'مورد' (Resource) يمتلك عنواناً فريداً (URI/Endpoint)، ويتم التفاعل مع هذه الموارد باستخدام أفعال HTTP القياسية (GET, POST, PUT, DELETE) مع الالتزام بمبدأ انعدام الحالة (Statelessness)، حيث يحمل كل طلب جميع المعلومات اللازمة لتنفيذه.",
      analogy: "REST يشبه نظام الملفات في جهازك: لديك مجلد رئيسي اسمه /users، وكل مستخدم لديه ملف محدد باسم /users/42. يمكنك قراءة الملف أو استبداله أو حذفه بنفس الطريقة البديهية المتفق عليها عالمياً دون فوضى.",
      whyItMatters: "أغلب واجهات الـ Backend التي ستتعامل معها في مسيرتك المهنية مصممة وفق معايير RESTful. فهمك لقواعد التسمية والتنظيم يجعلك تتوقع مسارات الـ API وتتعامل معها بسرعة واحترافية.",
      syntax: "Base URL: https://api.example.com/v1\nResource Collection: /products\nSpecific Resource: /products/:id",
      simpleExample: `// أمثلة على تسميات مسارات RESTful القياسية
// جلب جميع المقالات (Collection)
// GET /api/articles

// جلب مقال معين بواسطة معرّفه الفريد
// GET /api/articles/15

// إنشاء مقال جديد
// POST /api/articles

// تعديل مقال بالكامل
// PUT /api/articles/15

// حذف مقال محدد
// DELETE /api/articles/15`,
      advancedExample: `// مثال متقدم: نموذج RESTful API Client منظم يدير مسارات المورد
// تعريف فئة تمثل واجهة مورد RESTful لمستخدمين
class RestClient {
  // الباني الذي يستقبل الرابط الأساسي للمورد
  constructor(resourceEndpoint) {
    // تخزين الرابط الأساسي
    this.endpoint = resourceEndpoint;
  }

  // دالة لجلب قائمة الموارد
  async getAll() {
    // إرسال طلب GET للمسار التجميعي
    const res = await fetch(this.endpoint);
    // إرجاع المصفوفة كـ JSON
    return res.json();
  }

  // دالة لجلب مورد مفرد بالمعرف
  async getById(id) {
    // إرسال طلب GET لمسار المورد المحدد
    const res = await fetch(this.endpoint + '/' + id);
    // إرجاع العنصر المطلوب
    return res.json();
  }

  // دالة لحذف مورد محدد
  async remove(id) {
    // إرسال طلب DELETE للمعرف
    const res = await fetch(this.endpoint + '/' + id, { method: 'DELETE' });
    // إرجاع حالة نجاح العملية
    return res.ok;
  }
}

// إنشاء عميل REST لمورد المنتجات
const productsApi = new RestClient('https://dummyjson.com/products');`,
      output: "نموذج برمجي نظيف وموحد للتفاعل مع أي مورد RESTful بنفس الطريقة المنطقية.",
      commonMistakes: [
        {
          mistake: "استخدام أفعال في مسار الـ URL مثل /api/deleteUser أو /api/getAllProducts.",
          fix: "استخدام أسماء الموارد في صيغة الجمع واستخدام أفعال HTTP للتعبير عن العملية: DELETE /api/users/1.",
          explanation: "في معمارية REST، الـ URL يحدد 'المورد' فقط، بينما تحدد 'طريقة HTTP' ما تفعله بهذا المورد."
        }
      ],
      bestPractices: [
        "استخدم صيغة الجمع للموارد دائماً: /articles بدلاً من /article.",
        "احرص على أن تكون الخوادم عديمة الحالة (Stateless) بحيث لا يعتمد الطلب الحالي على جلسة سابقة غير مرسلة في الرأس."
      ],
      infographic: {
        title: "مبادئ معمارية RESTful",
        elements: [
          { label: "الموارد (Resources)", role: "كل شيء هو مورد ذو معرف فريد (URI) مثل /orders", color: "blue" },
          { label: "انعدام الحالة (Stateless)", role: "كل طلب يحمل هويته وبياناته المستقلة بالكامل", color: "amber" },
          { label: "الواجهة الموحدة", role: "أفعال HTTP القياسية للتعبير عن العمليات CRUD", color: "emerald" },
          { label: "التمثيل (Representation)", role: "إرسال واستقبال البيانات غالباً بصيغة JSON", color: "purple" }
        ]
      }
    },
    {
      id: "10.1.c",
      title: "طرق GET وPOST وPUT وPATCH وDELETE",
      englishTerm: "HTTP Methods (أَتْش تِي تِي بِي مِيثُودْز: أفعال ووسائل بروتوكول نقل النص الفائق)",
      description: "طرق HTTP (وتسمى أيضاً أفعال HTTP Verbs) هي الكلمات المعيارية التي تخبر الخادم بنوع العملية المطلوب تنفيذها على المورد: GET للقراءة وجلب البيانات، POST لإنشاء مورد جديد، PUT لاستبدال وتحديث المورد بالكامل، PATCH لتحديث جزئي لحقول معينة فقط، وDELETE لحذف المورد. كما تنقسم هذه الطرق إلى Idempotent (التي تعطي نفس النتيجة مهما تكررت كالـ GET والـ PUT والـ DELETE) وغير Idempotent كالـ POST.",
      analogy: "مثل المعاملات الإدارية: GET مثل الاطلاع على بطاقة هوية، POST مثل تقديم طلب إصدار بطاقة جديدة لأول مرة، PUT مثل استبدال استمارة البيانات كاملة بنسخة جديدة، PATCH مثل تصحيح رقم هاتفك فقط في الاستمارة، وDELETE مثل تمزيق البطاقة نهائياً.",
      whyItMatters: "استخدام الطريقة الصحيحة يضمن أمان التطبيق وكفاءة التخزين المؤقت (Caching) وتوافق معايير الشبكة والبنى التحتية للمتصفحات وبوابات الـ API.",
      syntax: "GET /items (Read)\nPOST /items (Create)\nPUT /items/:id (Replace Full)\nPATCH /items/:id (Update Partial)\nDELETE /items/:id (Delete)",
      simpleExample: `// مثال يوضح إرسال طلب POST لإنشاء منشور جديد
fetch('https://jsonplaceholder.typicode.com/posts', {
  // تحديد طريقة الطلب كـ POST للإنشاء
  method: 'POST',
  // تحديد نوع المحتوى المرسل في الترويسة كـ JSON
  headers: {
    'Content-Type': 'application/json',
  },
  // تحويل كائن البيانات إلى نص JSON في جسم الطلب (Body)
  body: JSON.stringify({
    title: 'تعلم React المتقدم',
    body: 'دليل شامل لاحتراف إدارة البيانات',
    userId: 1,
  }),
})
  // معالجة الاستجابة
  .then((res) => res.json())
  // طباعة العنصر الذي تم إنشاؤه مع المعرف الجديد
  .then((newPost) => console.log('تم إنشاء المنشور بنجاح:', newPost));`,
      advancedExample: `// مقارنة برمجية دقيقة بين PUT و PATCH في تعديل مورد
// 1. استخدام PUT: استبدال كائن المستخدم بالكامل (يتطلب إرسال كل الخصائص)
async function replaceUserProfile(userId, completeProfile) {
  // إرسال طلب PUT
  const response = await fetch('https://api.example.com/users/' + userId, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    // إرسال كافة خصائص الكائن بالكامل
    body: JSON.stringify(completeProfile),
  });
  return response.json();
}

// 2. استخدام PATCH: تعديل حقل البريد الإلكتروني فقط دون المساس بباقي البيانات
async function updateUserEmail(userId, newEmail) {
  // إرسال طلب PATCH
  const response = await fetch('https://api.example.com/users/' + userId, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    // إرسال الحقل المراد تعديله فقط
    body: JSON.stringify({ email: newEmail }),
  });
  return response.json();
}`,
      output: "في POST وPUT وPATCH تعيد الـ API عادةً الكائن بعد تعديله، وفي DELETE تعيد غالباً كود 204 No Content أو { success: true }.",
      commonMistakes: [
        {
          mistake: "إرسال بيانات في خاصية body مع طلب GET أو DELETE.",
          fix: "طلب GET لا يحتوي على body في المعايير القياسية؛ مرر المعاملات عبر Query Parameters في الرابط.",
          explanation: "العديد من الخوادم وبوابات التخزين المؤقت تتجاهل أو ترفض أي body مع طلبات GET."
        },
        {
          mistake: "الخلط بين PUT و PATCH في التعديل الجزئي.",
          fix: "استخدم PATCH إذا كنت تعدل حقلاً واحداً أو حقولاً محددة، واستخدم PUT إذا كنت ترسل الكائن بكافة خصائصه لاستبداله.",
          explanation: "استخدام PUT مع حقل واحد قد يؤدي في بعض الخوادم إلى حذف باقي الحقول غير المرسلة واستبدال السجل بالكامل."
        }
      ],
      bestPractices: [
        "استخدم POST عندما تكون العملية غير قابلة للتكرار العشوائي (إنشاء طلب دفع مثلاً).",
        "احرص دائماً على إضافة ترويسة Content-Type: application/json عند إرسال body في طلبات POST/PUT/PATCH."
      ],
      infographic: {
        title: "مصفوفة طرق HTTP واستخداماتها",
        elements: [
          { label: "GET", role: "قراءة وجلب البيانات | آمنة | Idempotent | لا يوجد Body", color: "blue" },
          { label: "POST", role: "إنشاء مورد جديد | غير آمنة | غير Idempotent | يوجد Body", color: "emerald" },
          { label: "PUT", role: "استبدال المورد بالكامل | غير آمنة | Idempotent | يوجد Body", color: "amber" },
          { label: "PATCH", role: "تحديث جزئي للمورد | غير آمنة | غير Idempotent | يوجد Body", color: "purple" },
          { label: "DELETE", role: "حذف المورد المحدد | غير آمنة | Idempotent | نادراً يوجد Body", color: "rose" }
        ]
      }
    },
    {
      id: "10.1.d",
      title: "فهم HTTP Status Codes",
      englishTerm: "HTTP Status Codes (أَتْش تِي تِي بِي سْتَاتَسْ كُودْز: رموز وحالات استجابة الخادم)",
      description: "رموز حالة HTTP هي أرقام معيارية مكونة من 3 خانات يرجعها الخادم مع كل استجابة ليعلم المتصفح بنتيجة تنفيذ الطلب. تنقسم هذه الرموز إلى 5 فئات رئيسية بناءً على الرقم الأول: 1xx معلوماتية، 2xx نجاح (مثل 200 OK و201 Created)، 3xx إعادة توجيه، 4xx أخطاء من طرف العميل (مثل 400 Bad Request و401 Unauthorized و403 Forbidden و404 Not Found و422 Unprocessable Entity)، و5xx أخطاء في الخادم (مثل 500 Internal Server Error و503 Service Unavailable).",
      analogy: "رموز الحالة تشبه إشارات المرور أو لغة التواصل اللاسلكي: إذا قلت رسالة وأجابك الطرف الآخر بـ 'علم ونُفذ' (200 OK)، أو 'طلبك غير مفهوم' (400)، أو 'أنت لا تملك تصريح دخول' (403)، أو 'المبنى احترق في الداخل' (500).",
      whyItMatters: "تطبيقات React الاحترافية تبني تجربة المستخدم بالاعتماد على هذه الرموز: توجيه المستخدم لصفحة تسجيل الدخول عند 401، أو إظهار تنبيه نقص الصلاحيات عند 403، أو عرض صفحة خطأ عند 500.",
      syntax: "2xx = نجاح\n4xx = خطأ عميل (React/User)\n5xx = خطأ خادم (Backend/DB)",
      simpleExample: `// دالة تفحص كود الحالة وتعطي رسالة مناسبة بالعربية
function evaluateHttpStatus(statusCode) {
  // فحص كود الحالة
  switch (statusCode) {
    // حالة النجاح العامة
    case 200:
      return 'تمت العملية بنجاح (200 OK)';
    // حالة إنشاء مورد جديد بنجاح
    case 201:
      return 'تم إنشاء المورد بنجاح (201 Created)';
    // حالة عدم وجود صلاحية / غير مسجل دخول
    case 401:
      return 'يرجى تسجيل الدخول أولاً للمتابعة (401 Unauthorized)';
    // حالة ممنوع الوصول رغم تسجيل الدخول
    case 403:
      return 'ليس لديك صلاحية للوصول إلى هذا المورد (403 Forbidden)';
    // حالة المورد غير موجود
    case 404:
      return 'العنصر المطلوب غير موجود (404 Not Found)';
    // خطأ خادم عام
    case 500:
      return 'حدث عطل في الخادم، يرجى المحاولة لاحقاً (500 Server Error)';
    default:
      return 'حالة غير معروفة: ' + statusCode;
  }
}`,
      advancedExample: `// معالج احترافي لاستجابات HTTP داخل تطبيق React
async function apiRequestWithStatusHandling(url, options = {}) {
  try {
    // إرسال الطلب
    const response = await fetch(url, options);

    // 1. التعامل مع حالات النجاح (200-299)
    if (response.ok) {
      // إذا كان الكود 204 (لا يوجد محتوى مثل بعد الحذف)
      if (response.status === 204) {
        return { success: true, data: null };
      }
      const data = await response.json();
      return { success: true, data, status: response.status };
    }

    // 2. التعامل مع خطأ انتهاء الجلسة أو عدم المصادقة
    if (response.status === 401) {
      // توجيه المستخدم لتسجيل الدخول أو تجديد الرمز
      console.warn('انتهت الجلسة، يجب إعادة المصادقة');
      window.dispatchEvent(new CustomEvent('auth:expired'));
      throw new Error('انتهت الجلسة، يرجى تسجيل الدخول مجدداً');
    }

    // 3. التعامل مع أخطاء التحقق من البيانات (Form Validation)
    if (response.status === 422) {
      const validationErrors = await response.json();
      return { success: false, validationErrors, status: 422 };
    }

    // 4. أخطاء الخادم العامة (500+)
    if (response.status >= 500) {
      throw new Error('الخادم يواجه مشكلة مؤقتة. يرجى المحاولة بعد قليل.');
    }

    // خطأ افتراضي لأي كود آخر
    throw new Error('فشل الطلب مع كود: ' + response.status);
  } catch (error) {
    return { success: false, error: error.message };
  }
}`,
      output: "إرجاع نتائج مخصصة تتيح للواجهة توجيه المستخدم بدقة وفق النتيجة الواقعية للاستدعاء.",
      commonMistakes: [
        {
          mistake: "معاملة كود 404 أو 500 كأنه كود نجاح لأن fetch لم تقذف خطأ.",
          fix: "استخدم دائماً شرط if (!response.ok) للتحقق المسبق من نجاح الكود قبل استخراج البيانات.",
          explanation: "محرك المتصفح يعتبر الاتصال ناجحاً طالما وصل الرد من الخادم حتى لو كان محتوى الرد هو 500 Server Error."
        }
      ],
      bestPractices: [
        "فرق دائماً بين 401 (Unauthorized: أنت مجهول الهوية) و403 (Forbidden: أنت معروف الهوية ولكن لا تملك الصلاحية).",
        "استخدم كود 204 No Content لعمليات الحذف الناجحة بدلاً من إرجاع كائنات فارغة."
      ],
      infographic: {
        title: "تصنيف عائلات أكواد HTTP",
        elements: [
          { label: "2xx Success", role: "200 OK | 201 Created | 204 No Content (العملية نجحت تماماً)", color: "emerald" },
          { label: "3xx Redirection", role: "301 Moved | 304 Not Modified (تم نقل المورد أو التخزين المؤقت)", color: "blue" },
          { label: "4xx Client Error", role: "400 Bad Request | 401 Auth | 403 Forbidden | 404 Not Found | 422 Validation", color: "amber" },
          { label: "5xx Server Error", role: "500 Internal Error | 502 Bad Gateway | 503 Unavailable", color: "rose" }
        ]
      }
    },
    {
      id: "10.1.e",
      title: "استخدام Headers",
      englishTerm: "HTTP Headers (أَتْش تِي تِي بِي هِيدَرْز: ترويسات وبيانات الترويسة الوصفية للطلب)",
      description: "ترويسات HTTP هي أزواج من المفاتيح والقيم (Key-Value Pairs) يتم إرسالها مصاحبة للطلب والاستجابة لنقل معلومات وصفية وتقنية حول الرسالة، مثل نوع البيانات المنقولة (Content-Type)، الصيغ المقبولة للاستلام (Accept)، بيانات المصادقة والتحقق (Authorization)، وإعدادات التخزين المؤقت (Cache-Control). في React، تعتبر الترويسات الأداة الأساسية لإرسال مفاتيح الوصول JWT ومعرفة نوع المحتوى.",
      analogy: "ترويسة الـ HTTP تشبه ملصقات الشحن الموجودة على صندوق الطرد البريدي: الصندوق يحتوي على الهدية (Body)، بينما الملصق الخارجي يوضح اسم المرسل، الرمز السري للتسليم، تاريخ الصلاحية، وما إذا كان المحتوى قابلاً للكسر.",
      whyItMatters: "بدون الترويسات الصحيحة، قد يرفض الخادم قراءة جسم الطلب ويعتبره نصاً عشوائياً (بسبب غياب Content-Type)، أو يرفض إعطاء البيانات لعدم وجود رمز المصادقة (Authorization Header).",
      syntax: "headers: {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer <token>'\n}",
      simpleExample: `// مثال على طلب يتضمن ترويسات أساسية شائعة
fetch('https://api.example.com/profile', {
  // تحديد طريقة الطلب
  method: 'GET',
  // كائن الترويسات
  headers: {
    // إعلام الخادم بأننا نفضل استقبال بيانات بصيغة JSON
    'Accept': 'application/json',
    // إرسال رمز المصادقة Bearer Token
    'Authorization': 'Bearer my-secret-jwt-token-12345',
  },
})
  .then((res) => res.json())
  .then((data) => console.log('الملف الشخصي للمستخدم:', data));`,
      advancedExample: `// دالة مصنع (Factory) لإعداد الترويسات الموحدة لكافة طلبات التطبيق
function createAuthorizedHeaders(customHeaders = {}) {
  // جلب رمز المصادقة المخزن في LocalStorage أو الذاكرة
  const token = localStorage.getItem('access_token');
  // جلب لغة التطبيق الحالية لدعم التعدد اللغوي في الخادم
  const currentLang = localStorage.getItem('app_lang') || 'ar';

  // بناء كائن الترويسات الافتراضي
  const baseHeaders = {
    // تحديد نوع البيانات المرسلة كـ JSON
    'Content-Type': 'application/json',
    // تفضيل البيانات بصيغة JSON
    'Accept': 'application/json',
    // إعلام الخادم باللغة المفضلة لإرجاع رسائل الأخطاء بالعربية
    'Accept-Language': currentLang,
  };

  // إذا كان الرمز متوفراً، نضيف ترويسة Authorization
  if (token) {
    baseHeaders['Authorization'] = 'Bearer ' + token;
  }

  // دمج أي ترويسات إضافية خاصة بالطلب المحدد
  return {
    ...baseHeaders,
    ...customHeaders,
  };
}

// تجربة استخدام دالة الترويسات المجمعة
const headers = createAuthorizedHeaders({ 'X-Custom-Client-Id': 'web-dashboard-v2' });
console.log('ترويسات الطلب الجاهزة:', headers);`,
      output: "كائن ترويسات مكتمل يضم بيانات التوثيق واللغة ونوع المحتوى تلقائياً.",
      commonMistakes: [
        {
          mistake: "إضافة Content-Type: application/json عند رفع ملف بواسطة FormData.",
          fix: "اترك المتصفح يحدد Content-Type تلقائياً عند استخدام FormData لإضافة boundary المناسب.",
          explanation: "إذا قمت بضبط Content-Type يدوياً كـ application/json مع FormData، سيفشل الخادم في تفكيك الملفات المرفوعة متعددة الأجزاء (multipart/form-data)."
        }
      ],
      bestPractices: [
        "استخدم صيغة المعيار العالمي Bearer <token> لترويسة Authorization الخاصة برموز JWT.",
        "عزل بناء الترويسات داخل دالة أو Axios Interceptor لتجنب تكرار الكود عبر مئات ملفات الواجهة."
      ],
      infographic: {
        title: "أهم ترويسات HTTP في تطبيقات React",
        elements: [
          { label: "Content-Type", role: "يوضح صيغة البيانات المرسلة من العميل: application/json", color: "blue" },
          { label: "Authorization", role: "يحمل رخصة الدخول والتحقق: Bearer <JWT_TOKEN>", color: "emerald" },
          { label: "Accept", role: "يحدد الصيغة المتوقعة من الخادم في الرد", color: "purple" },
          { label: "Accept-Language", role: "يحدد لغة المستخدم المفضلة لإرجاع المحتوى مترجماً", color: "amber" }
        ]
      }
    },
    {
      id: "10.1.f",
      title: "الفرق بين Path Params وQuery Params",
      englishTerm: "Path Params vs Query Params (بَاثْ بَارَامْز ضِدْ كْوِيرِي بَارَامْز: معاملات المسار ومعاملات الاستعلام)",
      description: "كلا النوعين يستخدم لتمرير متغيرات ومعلومات إضافية في عنوان URL، لكن الغرض يختلف جذرياً: معاملات المسار (Path Parameters) هي جزء أصيل من هيكل الـ URL وتُستخدم لتحديد 'مورد فريد بعينه' (مثل /users/102)، بينما معاملات الاستعلام (Query Parameters) تبدأ بعلامة استفهام (?) وتُستخدم لـ 'تعديل أو ترشيح عرض الموارد' كالفلترة، الترتيب، والترقيم (مثل /products?category=electronics&sort=asc&page=2).",
      analogy: "Path Param مثل رقم الهوية أو رقم الغرفة في فندق (/rooms/305) لتحديد الغرفة بذاتها. أما Query Param فهو مثل طلب 'غرفة مطلة على البحر وذات سريرين' (/rooms?view=sea&beds=2) لترشيح النتائج.",
      whyItMatters: "التفريق الدقيق بينهما ضروري لتصميم عناوين URL نظيفة وسهلة المشاركة والتخزين المؤقت، ولبناء منطق التوجيه (Routing) والبحث بكفاءة تامة.",
      syntax: "Path Param:  https://api.com/users/:id\nQuery Param: https://api.com/users?role=admin&limit=10",
      simpleExample: `// مثال يوضح الفرق في الشكل البرمجي
// 1. Path Parameter: جلب منتج محدد بذاته بواسطة الـ ID
const productId = 42;
const productUrl = 'https://api.example.com/products/' + productId;
console.log('رابط الـ Path Param:', productUrl);

// 2. Query Parameters: فلترة وترتيب قائمة المنتجات
const searchParams = new URLSearchParams({
  category: 'smartphones',
  sort: 'price_asc',
  page: '1',
  limit: '20',
});
const filteredProductsUrl = 'https://api.example.com/products?' + searchParams.toString();
console.log('رابط الـ Query Params:', filteredProductsUrl);`,
      advancedExample: `// دالة مساعدة ذكية لبناء روابط RESTful متوافقة مع المعايير
function buildApiUrl(baseEndpoint, pathParams = {}, queryParams = {}) {
  // استبدال متغيرات المسار مثل :id بالقيم الحقيقية
  let resolvedUrl = baseEndpoint;
  Object.entries(pathParams).forEach(([key, value]) => {
    resolvedUrl = resolvedUrl.replace(':' + key, encodeURIComponent(value));
  });

  // بناء معلمات الاستعلام وتجاهل القيم الفارغة أو غير المعرفة
  const validQueryParams = Object.entries(queryParams).filter(
    ([, val]) => val !== undefined && val !== null && val !== ''
  );

  if (validQueryParams.length > 0) {
    const searchString = new URLSearchParams(validQueryParams).toString();
    resolvedUrl += '?' + searchString;
  }

  return resolvedUrl;
}

// تجربة الدالة: جلب تقييمات دورة تعليمية محددة مع ترشيح
const url = buildApiUrl(
  'https://api.edu.com/courses/:courseId/reviews',
  { courseId: 'react-mastery-2026' },
  { rating: 5, verified: true, page: 2 }
);
console.log('الرابط النهائي المتكامل:', url);
// النتيجة: https://api.edu.com/courses/react-mastery-2026/reviews?rating=5&verified=true&page=2`,
      output: "إنشاء روابط API ديناميكية تجمع بين المسار المخصص والاستعلامات المرشحة بمنتهى النظافة.",
      commonMistakes: [
        {
          mistake: "استخدام Query Params لجلب مورد فريد مثل /users?id=12 بدلاً من /users/12.",
          fix: "التزم بمعايير REST: المورد الفردي يُحدد في المسار /users/:id.",
          explanation: "معاملات المسار تعبر عن هوية الكيان، بينما معاملات الاستعلام تعبر عن خيارات العرض."
        },
        {
          mistake: "نسيان تشفير القيم في Query Params بواسطة encodeURIComponent أو URLSearchParams.",
          fix: "استخدم دائماً كائن new URLSearchParams() لتوليد نصوص الاستعلام بأمان وتجنب كسر الرابط بسبب المسافات أو الرموز الخاصة.",
          explanation: "المحارف الخاصة كالمسافات والرموز (&, =) قد تكسر بنية الرابط إذا لم تُشفر."
        }
      ],
      bestPractices: [
        "استخدم كائن URLSearchParams القياسي في جافاسكريبت دائماً لبناء وتفكيك Query Strings.",
        "اجعل قيم الـ Query Params اختيارية دائماً ولها قيم افتراضية في الواجهة والخادم."
      ],
      infographic: {
        title: "مقارنة Path Params مقابل Query Params",
        elements: [
          { label: "الموقع في الـ URL", role: "Path: جزء من المسار (/users/15) | Query: بعد علامة الاستفهام (?sort=asc)", color: "blue" },
          { label: "الوظيفة الأساسية", role: "Path: تحديد هوية الكيان | Query: فلترة، ترتيب، ترقيم، وبحث", color: "emerald" },
          { label: "الإلزامية", role: "Path: إلزامي للوصول للمورد | Query: اختياري وله قيم افتراضية", color: "amber" },
          { label: "التشفير", role: "Query Params تتطلب دائماً Percent Encoding للحروف الخاصة", color: "purple" }
        ]
      }
    },
    {
      id: "10.1.g",
      title: "التعامل مع JSON Responses",
      englishTerm: "Handling JSON Responses (مُعَالَجَة اِسْتِجَابَاتِ جِيسُون: قراءة وفك ترميز بيانات JSON)",
      description: "صيغة JSON (JavaScript Object Notation) هي المعيار العالمي لنقل وتبادل البيانات بين الخوادم والواجهات الأمامية لخفتها وسهولة قراءتها من البشر والآلات. عند استلام استجابة عبر fetch، ترجع كتيار بايتات (Stream)، ويتطلب استخراجها استدعاء دالة response.json() غير المتزامنة التي تحول النص المشفر إلى كائنات ومصفوفات جافاسكريبت أصلية جاهزة للاستخدام في React.",
      analogy: "استلام بيانات الـ JSON يشبه استلام أثاث من إيكيا في صندوق كرتوني مضغوط: الصندوق هو الـ JSON النصي المشفر، ودالة response.json() هي عملية فتح الصندوق وتركيب القطع لتصبح طاولة حقيقية جاهزة للاستخدام في غرفتك.",
      whyItMatters: "كل استدعاء شبكي تقريباً في React سيتعامل مع JSON. الفهم العميق لكيفية فك التشفير والتعامل مع الأخطاء الناتجة عن صيغ JSON غير الصالحة يمنع انهيار تطبيقك.",
      syntax: "const data = await response.json();\n// أو التحويل المعاكس:\nconst jsonString = JSON.stringify(dataObj);",
      simpleExample: `// مثال يوضح قراءة استجابة JSON بأمان
async function loadUserData() {
  // إرسال الطلب
  const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
  
  // فك ترميز تيار البيانات إلى كائن جافاسكريبت
  const user = await response.json();
  
  // استخدام الخصائص مباشرة في التطبيق
  console.log('اسم المستخدم:', user.name);
  console.log('المدينة:', user.address?.city);
}`,
      advancedExample: `// دالة متقدمة تضمن فك تشفير JSON حتى مع وجود ردود نصية أو أخطاء في الصيغة
async function safeJsonParseResponse(response) {
  // التحقق من ترويسة نوع المحتوى أولاً
  const contentType = response.headers.get('content-type');
  const isJson = contentType && contentType.includes('application/json');

  if (!isJson) {
    // إذا كان الرد ليس JSON (مثلاً رسالة خطأ نصية HTML من خادم nginx)
    const rawText = await response.text();
    return {
      isJson: false,
      rawContent: rawText,
      error: 'الاستجابة المستلمة ليست بتنسيق JSON صالح',
    };
  }

  try {
    // محاولة فك التشفير كـ JSON
    const data = await response.json();
    return { isJson: true, data };
  } catch (parseError) {
    // في حال فشل تحليل نص الـ JSON (SyntaxError)
    return {
      isJson: false,
      error: 'فشل في تحليل محتوى JSON المستلم: ' + parseError.message,
    };
  }
}`,
      output: "كائن جافاسكريبت منظم أو رسالة خطأ واضحة في حال كانت الاستجابة غير متوافقة مع JSON.",
      commonMistakes: [
        {
          mistake: "محاولة استدعاء response.json() مرتين على نفس كائن الاستجابة.",
          fix: "احفظ نتيجة استدعاء response.json() في متغير واستخدمه، ولا تستدعي الدالة مجدداً.",
          explanation: "تيار بيانات الاستجابة (Body Stream) يُقرأ مرة واحدة فقط؛ أي محاولة لقراءته مرة أخرى تقذف خطأ 'body stream already read'."
        },
        {
          mistake: "الافتراض الدائم بأن الخادم سيرجع JSON حتى في حالات الخطأ 500 أو 502.",
          fix: "تحقق من response.ok ونوع المحتوى Content-Type قبل استدعاء response.json().",
          explanation: "عند انهيار الخادم أو خطأ البوابة 502، قد يرجع الخادم صفحة HTML نصية تسبب SyntaxError عند تمريرها لـ .json()."
        }
      ],
      bestPractices: [
        "استخدم Optional Chaining (?.) دائماً عند قراءة خصائص عميقة من كائنات JSON لضمان عدم توقف التطبيق إذا كانت بعض الحقول غير موجودة.",
        "احرص على تعريف هياكل TypeScript أو مخططات Zod للتحقق من صحة حقول الـ JSON القادمة من الواجهة الخلفية."
      ],
      infographic: {
        title: "دورة حياة بيانات JSON في المتصفح",
        elements: [
          { label: "1. HTTP Body Stream", role: "تيار بايتات خام قادم عبر الشبكة", color: "amber" },
          { label: "2. Content-Type Check", role: "التحقق من ترويسة application/json", color: "blue" },
          { label: "3. response.json()", role: "فك الترميز والتحويل لكائن جافاسكريبت أصلي", color: "purple" },
          { label: "4. State & UI Render", role: "تخزين البيانات في React State وتحديث الشاشة", color: "emerald" }
        ]
      }
    },
    {
      id: "10.1.h",
      title: "مفهوم Authentication Tokens",
      englishTerm: "Authentication Tokens (أُوثَنْتِيكِيْشَن تُوكِنْز: رموز التوثيق والمصادقة الأمنية)",
      description: "رموز المصادقة (وأشهرها رموز JWT - JSON Web Tokens) هي سلاسل نصية مشفرة وموقعة رقمياً يولدها الخادم للعميل عند نجاح تسجيل الدخول. يحفظ العميل هذا الرمز، ويرسله مصاحباً لكل طلب HTTP لاحق (عادة في ترويسة Authorization: Bearer <token>) ليثبت للخادم هويته وصلاحياته دون الحاجة لإعادة إرسال اسم المستخدم وكلمة المرور مع كل طلب، وبما يحافظ على مبدأ انعدام الحالة (Stateless).",
      analogy: "رمز التوثيق يشبه شارة الدخول أو السوار الذكي في فندق أو مؤتمر: تبرز بطاقتك الشخصية لموظف الاستقبال لمرة واحدة فقط (تسجيل الدخول)، فيعطيك سواراً بلاستيكياً مختوماً تلبسه في يدك، ومن خلاله تدخل كافة القاعات والمسابح بدون إبراز بطاقتك كل دقيقة.",
      whyItMatters: "حماية بيانات المستخدمين، تأمين بوابات الـ API، ومنع المستخدمين غير المصرح لهم من قراءة أو تعديل بيانات الآخرين هي العمود الفقري لأي نظام معلوماتي تجاري.",
      syntax: "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.payload.signature",
      simpleExample: `// مثال يوضح إرسال الرمز للوصول لبيانات محمية
async function getMyPrivateDashboard() {
  // استرجاع الرمز المحفوظ
  const token = localStorage.getItem('user_auth_token');

  // إرسال الطلب مع الرمز
  const response = await fetch('https://api.example.com/me/dashboard', {
    headers: {
      // إرفاق الرمز في ترويسة Authorization
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  });

  // فحص ما إذا كان الرمز منتهي الصلاحية
  if (response.status === 401) {
    console.error('رمز التوثيق منتهي أو غير صالح!');
    return null;
  }

  return response.json();
}`,
      advancedExample: `// إدارة رموز التوثيق المزدوجة (Access Token & Refresh Token)
class TokenManager {
  // تخزين الرمز في الذاكرة (Memory) للحماية من ثغرات XSS
  static accessToken = null;

  // تعيين رمز الوصول الجديد
  static setAccessToken(token) {
    this.accessToken = token;
  }

  // الحصول على رمز الوصول الحالي
  static getAccessToken() {
    return this.accessToken;
  }

  // دالة لتجديد رمز الوصول عند انتهائه
  static async refreshAccessToken() {
    try {
      // إرسال طلب تجديد للخادم (يعتمد عادة على httpOnly cookie آمنة)
      const res = await fetch('https://api.example.com/auth/refresh', {
        method: 'POST',
        credentials: 'include', // إرسال كوكيز التجديد المشفرة
      });

      if (!res.ok) {
        throw new Error('فشل تجديد الجلسة');
      }

      const data = await res.json();
      // تحديث رمز الوصول في الذاكرة
      this.setAccessToken(data.newAccessToken);
      return data.newAccessToken;
    } catch (err) {
      // في حال فشل التجديد نقوم بتسجيل الخروج وتوجيه المستخدم
      this.setAccessToken(null);
      window.location.href = '/login';
      return null;
    }
  }
}`,
      output: "إدارة آمنة وذكية لجلسات المستخدمين دون تعريض البيانات الحساسة للاختراق.",
      commonMistakes: [
        {
          mistake: "تخزين الرموز الحساسة في LocalStorage في تطبيقات مالية عالية الأمان.",
          fix: "استخدم ملفات تعريف الارتباط الآمنة (httpOnly, secure Cookies) لحماية الرموز من هجمات XSS الخبيثة.",
          explanation: "ملفات LocalStorage يمكن قراءتها من أي كود جافاسكريبت خبيث يتم حقنه في الصفحة، بينما httpOnly cookies لا يمكن الوصول إليها عبر جافاسكريبت نهائياً."
        },
        {
          mistake: "نسيان كلمة 'Bearer ' قبل الرمز في ترويسة Authorization.",
          fix: "تأكد من كتابة: 'Authorization': `Bearer ${token}` مع مسافة فاصلة واحدة.",
          explanation: "معظم خوادم ومكتبات التوثيق مثل Passport وSpring Security تتوقع معيار Bearer للتعرف على الرمز."
        }
      ],
      bestPractices: [
        "اجعل عمر رمز الوصول (Access Token) قصيراً (مثلاً 15 دقيقة) واستخدم رمز تجديد (Refresh Token) لتجديده تلقائياً.",
        "احرص دائماً على تشغيل اتصالات الـ API عبر بروتوكول HTTPS المشفر لمنع التنصت على الرموز في الشبكة."
      ],
      infographic: {
        title: "آلية عمل رمز التوثيق Bearer Token",
        elements: [
          { label: "1. Login Request", role: "المستخدم يرسل بيانات الاعتماد (البريد + كلمة المرور)", color: "blue" },
          { label: "2. Issue JWT", role: "الخادم يتحقق وينشئ رمزا موقعاً رقمياً (Token)", color: "emerald" },
          { label: "3. Attach Bearer", role: "العميل يرفق الرمز في ترويسة كل طلب لاحق", color: "purple" },
          { label: "4. Verify & Serve", role: "الخادم يفك توقيع الرمز ويسلم البيانات المحمية", color: "amber" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q10.1.1",
      question: "ما الفرق الأساسي بين طريقتي PUT و PATCH في بروتوكول HTTP؟",
      options: [
        "PUT تستخدم للقراءة فقط بينما PATCH تستخدم للكتابة.",
        "PUT تستبدل المورد بالكامل بينما PATCH تقوم بتعديل جزئي لحقول محددة فقط.",
        "PATCH غير مدعومة في المتصفحات الحديثة وPUT هي البديل الوحيد.",
        "لا يوجد أي فرق بينهما وهما اسمان لنفس الوظيفة."
      ],
      correctAnswer: 1,
      explanation: "في معمارية REST القياسية، PUT تعني استبدال الكائن بالكامل مما يتطلب إرسال كافة الحقول، بينما PATCH مخصصة للتعديل الجزئي لحقل أو عدة حقول دون المساس ببقية الكائن."
    },
    {
      id: "q10.1.2",
      question: "إذا أرجع الخادم كود الحالة 401، فماذا يعني ذلك بالنسبة لتطبيق React؟",
      options: [
        "الخادم غير متصل بالإنترنت وعليك إعادة المحاولة لاحقاً.",
        "المورد المطلوب غير موجود في قاعدة البيانات.",
        "المستخدم غير مصادق عليه (Unauthorized) أو أن رمز التوثيق مفقود/منتهي الصلاحية.",
        "تم تنفيذ العملية بنجاح ولا يوجد محتوى للإرجاع."
      ],
      correctAnswer: 2,
      explanation: "رمز 401 Unauthorized يوضح أن الطلب يفتقر إلى بيانات اعتماد صالحة للمصادقة ويجب على المستخدم تسجيل الدخول."
    },
    {
      id: "q10.1.3",
      question: "لماذا نستخدم Query Parameters بدلاً من Path Parameters عند إجراء عمليات التصفية (Filtering) والترقيم (Pagination)؟",
      options: [
        "لأن Query Parameters اختيارية ومرنة وتسمح بتمرير معايير متعددة قابلة للدمج دون تغيير عنوان المورد الأساسي.",
        "لأن Path Parameters لا يمكنها نقل أرقام نهائياً في بروتوكول HTTP.",
        "لأن الخوادم ترفض معالجة أكثر من Path Parameter واحد.",
        "لأن Query Parameters تشفر البيانات تلقائياً وتمنع قراءتها."
      ],
      correctAnswer: 0,
      explanation: "معاملات الاستعلام بعد علامة الاستفهام (?) مصممة لتعديل وترشيح طريقة استرجاع وعرض المجموعات مع الاحتفاظ برابط أساسي نظيف وثابت."
    }
  ],
  exercise: {
    id: "ex-10.1",
    title: "بناء دالة استدعاء RESTful معيارية وشاملة (Universal API Caller)",
    description: "قم بإنشاء دالة باسم `callRestApi` تستقبل عنوان الرابط، طريقة HTTP، البيانات المراد إرسالها، ورمز التوثيق إن وجد. يجب أن تقوم الدالة بإعداد الترويسات الصحيحة، والتحقق من response.ok، ومعالجة مختلف أكواد الحالة، وإرجاع كائن منسق يحتوي على البيانات أو تفاصيل الخطأ بدقة.",
    starterCode: `// اكتب دالتك هنا لتنفيذ الطلبات بمعايير RESTful
async function callRestApi(url, method = 'GET', payload = null, token = null) {
  // 1. جهز الترويسات (Content-Type, Accept, Authorization)
  
  // 2. جهز خيارات fetch المناسبة
  
  // 3. نفذ الطلب وافحص response.ok وتولَّ استخراج الـ JSON
}`,
    hints: [
      "استخدم كائن Headers أو كائن جافاسكريبت عادي للترويسات وتأكد من إضافة Bearer للرمز.",
      "تذكر ألا تضع body إذا كانت الطريقة GET أو DELETE.",
      "إذا كان response.status هو 204 فلا تستدعِ response.json() لأنه لا يوجد محتوى."
    ],
    solution: `// الحل النموذجي لدالة الـ API المعيارية
async function callRestApi(url, method = 'GET', payload = null, token = null) {
  try {
    // 1. إعداد الترويسات الأساسية
    const headers = {
      'Accept': 'application/json',
    };

    // إضافة نوع المحتوى إذا كان هناك حمولة بيانات
    if (payload && method !== 'GET') {
      headers['Content-Type'] = 'application/json';
    }

    // إضافة رمز المصادقة إذا توفر
    if (token) {
      headers['Authorization'] = 'Bearer ' + token;
    }

    // 2. إعداد خيارات الطلب
    const options = {
      method: method.toUpperCase(),
      headers: headers,
    };

    // إرفاق جسم الطلب مع تحويله لنص JSON إذا لم يكن طلب GET
    if (payload && method !== 'GET') {
      options.body = JSON.stringify(payload);
    }

    // 3. إرسال الطلب عبر fetch
    const response = await fetch(url, options);

    // التعامل مع كود 204 (نجاح بدون محتوى)
    if (response.status === 204) {
      return { success: true, status: 204, data: null };
    }

    // استخراج محتوى JSON إن وجد
    const data = await response.json().catch(() => null);

    // التحقق من حالة النجاح
    if (!response.ok) {
      return {
        success: false,
        status: response.status,
        error: (data && data.message) || 'حدث خطأ في استدعاء الخادم: ' + response.status,
      };
    }

    // إرجاع النتيجة بنجاح
    return {
      success: true,
      status: response.status,
      data: data,
    };
  } catch (networkError) {
    // التقاط انقطاع الاتصال أو أخطاء الشبكة
    return {
      success: false,
      status: 0,
      error: 'فشل الاتصال بالشبكة: ' + networkError.message,
    };
  }
}`
  },
  infographic: {
    title: "خارطة طريق إتقان أساسيات REST API في React",
    description: "دليلك الشامل لفهم التخاطب بين الواجهة الأمامية والخوادم وفق المعايير العالمية",
    steps: [
      { step: "1", title: "تحديد المورد وطريقة HTTP", desc: "اختر GET للقراءة، POST للإنشاء، PATCH للتعديل، وDELETE للحذف" },
      { step: "2", title: "إعداد الترويسات والرموز", desc: "أرفق Content-Type المناسب ورمز التوثيق Bearer Token في Authorization" },
      { step: "3", title: "إرسال البيانات وضبط المعاملات", desc: "استخدم Path Params للمعرفات وQuery Params للترشيح والترقيم" },
      { step: "4", title: "معالجة كود الحالة وJSON", desc: "افحص response.ok واقرأ أكواد 2xx و4xx و5xx وفك ترميز الرد بأمان" }
    ]
  }
};
