// scripts/generateAllSections.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawDataPath = path.join(__dirname, '../src/data/roadmapRaw.json');
const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf-8'));

const sectionsDir = path.join(__dirname, '../src/data/sections');
if (!fs.existsSync(sectionsDir)) {
  fs.mkdirSync(sectionsDir, { recursive: true });
}

// محرك القواميس المعرفية لتوليد شروحات تقنية دقيقة واحترافية متوافقة مع C# و ASP.NET Core MVC
function getTopicDetails(sectionId, sectionTitle, topicTitle, subTitle, sIdx, tIdx, subIdx) {
  const subId = `${sectionId}.${tIdx + 1}.${subIdx + 1}`;
  
  // استخراج المصطلح التقني بالإنجليزية
  let englishClean = subTitle
    .replace(/[؟?]/g, '')
    .replace(/ما هو |ما هي |مفهوم |الفرق بين |استخدام |إنشاء |إدارة |تنفيذ |تطبيق |شرح /g, '')
    .trim();

  // تخصيص الأكواد والشروحات بحسب طبيعة القسم وموضوعه
  let categoryTheme = "dotnet";
  let lang = "csharp";
  let iconName = "Code";
  let gradient = "from-purple-600 via-indigo-600 to-cyan-500";

  let definition = "";
  let analogy = "";
  let why = "";
  let syntax = "";
  let simpleCode = "";
  let advancedCode = "";
  let outputExplanation = "";
  let commonMistakes = [];
  let bestPractices = [];
  let terms = [];
  let infographicSteps = [];

  // ==========================================
  // تخصيصات دقيقة لكل قسم من الأقسام الـ 33
  // ==========================================

  if (sectionId === 1) {
    // القسم الأول: أساسيات البرمجة وتطوير الويب
    categoryTheme = "web-basics";
    iconName = "Globe";
    gradient = "from-blue-600 via-indigo-500 to-cyan-400";

    definition = `يُقصد بـ (${subTitle}) أحد المفاهيم الجوهرية والمدخل الأساسي لفهم كيفية بناء البرمجيات ومواقع الويب الحديثة، حيث يمثل الأساس الذي تبنى عليه كل التطبيقات الخادمة (Backend) وتطبيقات المتصفح (Frontend).`;
    analogy = `تخيل أن البرمجة تشبه كتابة وصفة طبخ دقيقة جداً لروبوت ذكي؛ إذا أخبرته "أحضر الملح" دون تحديد المكان أو الكمية، فلن يعرف ماذا يفعل. (${subTitle}) هو جزء من لغة التفاهم والتنظيم التي تضمن وصول الفكرة من عقلك إلى الحاسوب ليعمل بدقة متناهية.`;
    why = `نحتاج إلى فهم (${subTitle}) لأن عالم الويب ليس مجرد صفحات جميلة تراها في المتصفح، بل هو شبكة مترابطة من الخوادم، والبيانات، والبروتوكولات التي تتواصل في أجزاء من الثانية. بدون هذا الأساس، ستواجه مشاكل مستمرة عند معالجة طلبات المستخدمين وحفظ بياناتهم.`;
    
    terms = [
      { term: "Software", pronunciation: "سوفت وير", meaning: "البرمجيات والتطبيقات غير الملموسة" },
      { term: "Hardware", pronunciation: "هارد وير", meaning: "العتاد الملموس كالمعالج والذاكرة والشاشة" },
      { term: "Client", pronunciation: "كلاينت", meaning: "العميل أو متصفح المستخدم الذي يطلب الصفحة" },
      { term: "Server", pronunciation: "سيرفر", meaning: "الخادم القوي الذي يعالج الطلبات ويخزن البيانات" }
    ];

    syntax = `// تمثيل تسلسلي لمنطق: ${subTitle}\n// 1. استقبال المدخلات -> 2. المعالجة في الخادم -> 3. إرجاع النتيجة للعميل\nResponse processStep(Request userRequest);`;

    simpleCode = `// مثال توضيحي تمهيدي يوضح فكرة: ${subTitle}
// هذا البرنامج يمثل أبسط شكل من أشكال معالجة الأوامر
// 1. طباعة رسالة ترحيبية وتوضيح بدء العملية
Console.WriteLine("مرحباً بك في عالم تطوير الويب و C#!");

// 2. تعريف متغير لتخزين اسم المستخدم كنص
string developerName = "مبرمج ASP.NET الصاعد"; // متغير نصي بسيط

// 3. طباعة رسالة تشجيعية مدمجة مع اسم المتغير
Console.WriteLine($"خطوتك الأولى في فهم: {developerName}");

// 4. تأكيد نجاح تنفيذ المفهوم
Console.WriteLine("تم تنفيذ الأمر بنجاح ودون أخطاء! ✓");`;

    advancedCode = `// تطبيق متقدم يحاكي خادماً يتلقى الطلبات ويتعامل مع: ${subTitle}
using System;
using System.Threading.Tasks;

namespace WebFundamentalsDemo
{
    // تعريف نموذج طلب المستخدم الوارد إلى الخادم
    public class WebClientRequest
    {
        // عنوان الـ IP الخاص بجهاز المستخدم
        public string ClientIpAddress { get; set; } = "192.168.1.100";
        
        // المسار الذي يطلبه المتصفح
        public string RequestedUrl { get; set; } = "/home/index";
    }

    public class Program
    {
        // الدالة الرئيسية غير المتزامنة لمحاكاة الخادم
        public static async Task Main(string[] args)
        {
            // إنشاء كائن طلب جديد
            var request = new WebClientRequest();
            
            // تسجيل بدء معالجة الطلب في سجلات الخادم
            Console.WriteLine($"[سجل الخادم] تم استقبال طلب جديد من: {request.ClientIpAddress}");
            
            // محاكاة وقت المعالجة والاتصال بالشبكة (100 ميلي ثانية)
            await Task.Delay(100);
            
            // إرسال كود الحالة 200 OK للمتصفح
            Console.WriteLine($"[الاستجابة] الحالة: 200 OK - تم تسليم صفحة {request.RequestedUrl} بنجاح!");
        }
    }
}`;

    outputExplanation = `عند تشغيل الكود، يقوم النظام بتهيئة المتغيرات في الذاكرة، ثم طباعة الرسائل التسلسلية التي تؤكد استقبال الطلب ومعالجته، مبيناً دور الخادم في تحويل الشفرة البرمجية إلى استجابة حية يراها المستخدم.`;

    commonMistakes = [
      {
        wrong: "الاعتقاد بأن المتصفح هو من يقوم بمعالجة قواعد البيانات ومصادقة المستخدمين.",
        right: "المتصفح (Client) يعرض فقط ما يرسله الخادم (Server)، والعمليات الحساسة تتم دوماً في الخادم لحمايتها.",
        reason: "لأن كود المتصفح يمكن لأي مستخدم الاطلاع عليه والتعديل عليه عبر أدوات المطورين F12."
      },
      {
        wrong: "الخلط بين لغة الـ HTML واللغات البرمجية الحقيقية مثل C#.",
        right: "HTML هي لغة هيكلة وتوصيف (Markup Language) وليست لغة برمجة لأنها لا تحتوي على منطق أو شروط أو حلقات.",
        reason: "لغات البرمجة تملك منطقاً لاتخاذ القرارات (Logic & Decision Making)، بينما HTML تحدد هيكل النصوص والصور فقط."
      }
    ];

    bestPractices = [
      "افصل دائماً بين مسؤوليات الواجهة الأمامية (Frontend) والمنطق البرمجي في الخلفية (Backend).",
      "لا تثق أبداً في البيانات القادمة من المتصفح، وافحص كل مدخل في الخادم بدقة.",
      "تعلم قراءة رسائل الأخطاء (Error Messages) بعناية؛ فهي دليلك الأسرع لحل المشكلات."
    ];

    infographicSteps = [
      { title: "مدخلات المستخدم", desc: "المتصفح يرسل طلباً HTTP عبر الشبكة إلى الخادم" },
      { title: "المعالجة البرمجية", desc: "محرك .NET يقوم بتنفيذ المنطق البرمجي وفحص الشروط" },
      { title: "الاستجابة النهائية", desc: "إرجاع النتيجة (HTML أو JSON) لتعرض للمستخدم بأمان" }
    ];
  } 
  else if (sectionId >= 2 && sectionId <= 4) {
    // أقسام لغة C# والـ OOP والمفاهيم المتقدمة
    categoryTheme = "csharp-core";
    iconName = "Code2";
    gradient = "from-purple-600 via-fuchsia-600 to-indigo-500";

    definition = `يعد (${subTitle}) أحد الركائز البرمجية الأساسية في لغة C# الحديثة (.NET 8/9/10)، حيث يوفر قواعد قوية للأمان النمطي (Type Safety)، ويسرّع كتابة شفرات خالية من العيوب وسهلة الصيانة.`;
    analogy = `يشبه مفهوم (${subTitle}) القوالب الهندسية في مصانع السيارات؛ فبدلاً من صنع كل برغي ومحرك يدوياً من الصفر لكل سيارة، يتم بناء تصميم قياسي متين يعاد استخدامه ملايين المرات بدقة متناهية.`;
    why = `الهدف المباشر من (${subTitle}) هو كتابة كود نظيف (Clean Code) يسهل توسعته، ويمنع أخطاء الذاكرة الشائعة (مثل NullReferenceException)، ويوفر أداءً استثنائياً بفضل التصريف الفوري (JIT Compilation).`;

    terms = [
      { term: "Type Safety", pronunciation: "تايب سيفتي", meaning: "أمان التحقق من أنواع البيانات أثناء الترجمة لمنع الأخطاء" },
      { term: "Memory Allocation", pronunciation: "ميموري ألوكيشن", meaning: "حجز مساحة في ذاكرة الحاسوب (Stack أو Heap)" },
      { term: "Garbage Collector", pronunciation: "جاربدج كوليكتور", meaning: "جامع القمامة الآلي الذي يفرغ الذاكرة غير المستخدمة" }
    ];

    syntax = `// القالب النمطي العام في C# لـ ${subTitle}\npublic class FeatureExample\n{\n    // خاصية نمطية مشفرة\n    public string PropertyName { get; set; }\n}`;

    simpleCode = `// مثال C# مبسط يوضح: ${subTitle}
// 1. الإعلان عن متغير يمثل المفهوم
string conceptTitle = "${subTitle}"; // متغير نصي

// 2. فحص القيمة باستخدام الجمل الشرطية المتقدمة
if (!string.IsNullOrWhiteSpace(conceptTitle))
{
    // طباعة الاسم بعد التأكد من وجود قيمة
    Console.WriteLine($"تم تفعيل مفهوم: {conceptTitle}");
}
else
{
    // التعامل مع الحالة الفارغة بأمان
    Console.WriteLine("القيمة غير محددة!");
}`;

    advancedCode = `// تطبيق C# متقدم وفق معايير Clean Code لـ ${subTitle}
using System;
using System.Collections.Generic;

namespace AdvancedCSharpConcepts
{
    // تعريف واجهة برمجية لضمان العزل وتقليل الترابط
    public interface IProcessor<T>
    {
        // دالة لمعالجة العنصر وإرجاع الحالة
        bool Process(T item);
    }

    // فئة تنفيذية تطبق المفهوم بأمان
    public class DataHandler : IProcessor<string>
    {
        // قائمة داخلية لحفظ العناصر المعالجة
        private readonly List<string> _processedItems = new();

        // تنفيذ دالة المعالجة مع التحقق الصارم
        public bool Process(string item)
        {
            // التحقق من صحة المدخل ومنع القيم الفارغة
            ArgumentException.ThrowIfNullOrWhiteSpace(item);

            // إضافة العنصر إلى السجل
            _processedItems.Add(item);
            
            // طباعة إشعار نجاح المعالجة في الطرفية
            Console.WriteLine($"[معالجة ناجحة]: {item} تم حفظه في الذاكرة بنجاح.");
            return true;
        }
    }
}`;

    outputExplanation = `تقوم بيئة تشغيل .NET بتشغيل الشفرة بكفاءة، وتطبيق القيود الصارمة للتحقق من صحة الأنواع، مما يمنع حدوث انهيار في التطبيق عند إدخال بيانات غير متوقعة.`;

    commonMistakes = [
      {
        wrong: "تجاهل القيم الفارغة (Null) مما يتسبب في خطأ الانهيار الشهير NullReferenceException.",
        right: "تفعيل Nullable Reference Types واستخدام عامل الأمان (?) مثل string? name.",
        reason: "لأن محاولة الوصول لخاصية داخل كائن غير موجود في الذاكرة تؤدي لإيقاف التطبيق فوراً."
      }
    ];

    bestPractices = [
      "اعتمد دائماً على أسماء واضحة ودلالية للمتغيرات والدوال وفق نمط PascalCase و camelCase.",
      "استخدم كتل using للتعامل مع الموارد غير المدارة لضمان تحرير الذاكرة بسرعة.",
      "طبق مبادئ SOLID لضمان سهولة صيانة واختبار الكود لاحقاً."
    ];

    infographicSteps = [
      { title: "التصريح والتعريف", desc: "بناء الفئات والأنماط في C# بدقة" },
      { title: "إدارة الذاكرة", desc: "تخزين البيانات في Stack أو Heap ومراقبتها" },
      { title: "التنفيذ الآمن", desc: "معالجة العمليات وحماية النظام من الأخطاء" }
    ];
  }
  else if (sectionId >= 5 && sectionId <= 14) {
    // أقسام ASP.NET Core MVC: من الإعداد حتى الـ Views و Controllers و CRUD
    categoryTheme = "aspnet-mvc";
    iconName = "Layers";
    gradient = "from-indigo-600 via-purple-600 to-pink-500";

    definition = `يعد (${subTitle}) أحد المكونات المركزية في معمارية ASP.NET Core MVC، حيث ينسق حركة البيانات بين نماذج البيانات (Models) وواجهات العرض (Views) ووحدات التحكم (Controllers) بكفاءة معمارية صارمة.`;
    analogy = `تخيل مطعماً فاخراً؛ وحدة التحكم (Controller) هي النادل اللبق الذي يأخذ طلبك، والنموذج (Model) هو كتاب الوصفات ومخزن المكونات في المطبخ، وواجهة العرض (View) هي الطبق المزين الأنيق الذي يقدم لك على الطاولة. (${subTitle}) هو الآلية المنظمة لإعداد وتقديم هذه الوجبة المتكاملة.`;
    why = `نستخدم (${subTitle}) في ASP.NET Core MVC لضمان فصل المسؤوليات (Separation of Concerns)، مما يتيح لفريق العمل تطوير الواجهات وقواعد البيانات والمنطق البرمجي بالتوازي دون تداخل أو فوضى برمجية.`;

    terms = [
      { term: "Routing", pronunciation: "راوتينج", meaning: "توجيه رابط المتصفح URL إلى الإجراء المناسب في الكنترولر" },
      { term: "Action Result", pronunciation: "أكشن ريزلت", meaning: "الاستجابة التي يرجعها الكنترولر (صفحة View، ملف، أو JSON)" },
      { term: "Tag Helper", pronunciation: "تاج هيلبر", meaning: "وسوم خادمة ذكية في Razor تدمج كود C# مع عناصر HTML القياسية" },
      { term: "Model Binding", pronunciation: "موديل بايندينج", meaning: "التحويل التلقائي للبيانات القادمة من الفورم أو الرابط إلى كائنات C#" }
    ];

    syntax = `// تمثيل وحدة تحكم Controller لـ ${subTitle}\npublic class SampleController : Controller\n{\n    // إجراء Action يستجيب لطلب المتصفح\n    public IActionResult Index()\n    {\n        return View();\n    }\n}`;

    simpleCode = `// مثال توضيحي لوحدة تحكم (Controller) في ASP.NET Core MVC
using Microsoft.AspNetCore.Mvc;

namespace MvcBasicsDemo.Controllers
{
    // يرث الكنترولر من فئة Controller الأساسية
    public class HomeController : Controller
    {
        // 1. إجراء Action يستقبل طلب الصفحة الرئيسية GET /Home/Index
        [HttpGet] // محدد نوع الطلب
        public IActionResult Index()
        {
            // 2. تمرير رسالة ترحيبية إلى الواجهة عبر ViewData
            ViewData["Title"] = "شرح: ${subTitle}"; // عنوان الصفحة
            
            // 3. إرجاع واجهة العرض View المطابقة لاسم الإجراء
            return View(); // يبحث عن Views/Home/Index.cshtml
        }
    }
}`;

    advancedCode = `// تطبيق عملي متكامل لإدارة البيانات في ASP.NET Core MVC
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace AdvancedMvcDemo.Controllers
{
    // نموذج إدخال بيانات مع التحقق الصارم Data Annotations
    public class ProductInputModel
    {
        [Required(ErrorMessage = "حقل الاسم إجباري لا يمكن تركه فارغاً")]
        [StringLength(100, MinimumLength = 3, ErrorMessage = "يجب أن يتراوح الاسم بين 3 و 100 حرف")]
        public string Name { get; set; } = string.Empty;

        [Range(1, 100000, ErrorMessage = "السعر يجب أن يكون أكبر من صفر")]
        public decimal Price { get; set; }
    }

    public class ProductsController : Controller
    {
        // استقبال طلب الحفظ POST مع حماية من تزوير الطلبات CSRF
        [HttpPost]
        [ValidateAntiForgeryToken] // حماية أمنية ضد ثغرات CSRF
        public IActionResult Create(ProductInputModel model)
        {
            // التحقق من مطابقة المدخلات لقواعد التحقق
            if (!ModelState.IsValid)
            {
                // إعادة عرض النموذج مع إظهار رسائل الأخطاء للمستخدم
                return View(model);
            }

            // حفظ البيانات (محاكاة) وإعادة التوجيه بنمط Post-Redirect-Get
            TempData["SuccessMessage"] = "تم إضافة المنتج بنجاح!";
            return RedirectToAction(nameof(Index));
        }
    }
}`;

    outputExplanation = `عند إرسال المستخدم للنموذج، يقوم خادم ASP.NET Core بفحص التوكن الأمني، وربط حقول الفورم بالـ ViewModel، وإذا كانت البيانات صحيحة يتم تحويل المستخدم لمنع التكرار (PRG Pattern).`;

    commonMistakes = [
      {
        wrong: "إرجاع View مباشرة بعد عملية POST الناجحة بدلاً من RedirectToAction.",
        right: "استخدام نمط Post-Redirect-Get (PRG) دوماً بعد العمليات الناجحة.",
        reason: "لأنه إذا قام المستخدم بالضغط على F5 أو تحديث الصفحة بعد الـ POST سيتكرر إرسال النموذج والبيانات مرة أخرى في قاعدة البيانات."
      },
      {
        wrong: "نسيان وسم [ValidateAntiForgeryToken] على دوال الـ POST.",
        right: "إضافة هذا الوسم دائماً لحماية النماذج من هجمات تزوير الطلبات Cross-Site Request Forgery.",
        reason: "لضمان أن الطلب تم إنشاؤه من موقعك الأصلي وليس من رابط أو موقع خبيث خارجي."
      }
    ];

    bestPractices = [
      "لا تضع منطق العمليات المعقدة أو استعلامات قواعد البيانات المباشرة داخل الـ Controllers.",
      "استخدم الـ ViewModels دائماً ولا ترسل كائنات قاعدة البيانات الحساسة (Entities) مباشرة للـ View.",
      "استفد من ميزات Tag Helpers مثل asp-for و asp-action لجعل كود Razor نظيفاً ومتطابقاً مع HTML."
    ];

    infographicSteps = [
      { title: "استقبال الطلب", desc: "الـ Routing يوجه الطلب للكنترولر والإجراء المناسب" },
      { title: "ربط البيانات", desc: "Model Binder يفكك بيانات الطلب ويحولها لكائنات C#" },
      { title: "توليد الواجهة", desc: "محرك Razor يدمج البيانات بالقالب ويرجع كود HTML للمتصفح" }
    ];
  }
  else if (sectionId >= 15 && sectionId <= 17) {
    // أقسام قواعد البيانات و Entity Framework Core
    categoryTheme = "database-efcore";
    iconName = "Database";
    gradient = "from-cyan-600 via-teal-600 to-emerald-500";

    definition = `يعد (${subTitle}) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.`;
    analogy = `يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (${subTitle}) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.`;
    why = `نعتمد على (${subTitle}) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.`;

    terms = [
      { term: "ORM", pronunciation: "أو-آر-إم", meaning: "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات" },
      { term: "DbContext", pronunciation: "دي-بي كونتكست", meaning: "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات" },
      { term: "Migration", pronunciation: "مايجريشن", meaning: "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server" },
      { term: "LINQ", pronunciation: "لينك", meaning: "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي" }
    ];

    syntax = `// استعلام EF Core نموذجي لـ ${subTitle}\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();`;

    simpleCode = `// مثال بسيط لتعريف جدول واستعلامه عبر EF Core
using Microsoft.EntityFrameworkCore;

// 1. تعريف نموذج يمثل جدول في قاعدة البيانات
public class Student
{
    // المفتاح الأساسي التلقائي
    public int Id { get; set; } // Primary Key
    
    // اسم الطالب
    public string FullName { get; set; } = string.Empty;
}

// 2. فئة سياق قاعدة البيانات
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    // جدول الطلاب في SQL Server
    public DbSet<Student> Students => Set<Student>();
}`;

    advancedCode = `// استعلام متقدم ومحسن الأداء في EF Core يوضح: ${subTitle}
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public class OrderQueryService
{
    private readonly AppDbContext _context;

    public OrderQueryService(AppDbContext context)
    {
        _context = context; // حقن سياق البيانات عبر DI
    }

    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء 
    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)
    {
        return await _context.Orders
            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة
            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)
            .OrderByDescending(o => o.CreatedAt)
            .Take(10) // جلب آخر 10 طلبات فقط
            .Select(o => new OrderSummaryDto
            {
                OrderId = o.Id,
                TotalAmount = o.TotalAmount,
                ItemCount = o.Items.Count
            })
            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة
    }
}`;

    outputExplanation = `يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.`;

    commonMistakes = [
      {
        wrong: "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
        right: "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
        reason: "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
      },
      {
        wrong: "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
        right: "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
        reason: "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
      }
    ];

    bestPractices = [
      "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
      "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
      "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
    ];

    infographicSteps = [
      { title: "صياغة استعلام LINQ", desc: "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة" },
      { title: "الترجمة إلى SQL", desc: "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة" },
      { title: "تنفيذ الخادم", desc: "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#" }
    ];
  }
  else if (sectionId >= 18 && sectionId <= 23) {
    // أقسام المعمارية: Dependency Injection, Identity, Authorization, Security, State & Filters
    categoryTheme = "architecture-security";
    iconName = "ShieldCheck";
    gradient = "from-emerald-600 via-teal-600 to-cyan-500";

    definition = `يمثل (${subTitle}) ركناً أساسياً في بنية وتأمين التطبيقات الموجهة لبيئات العمل الحقيقية، حيث يوفر حلولاً هندسية مرنة للحقن (DI)، وإدارة الهويات والأذونات، والتصدي للهجمات السيبرانية الحديثة.`;
    analogy = `يشبه نظام الصلاحيات والأمان بطاقة الدخول الذكية في المنشآت الحساسة؛ الموظف العادي يفتح بوابات المكاتب العامة، والمدير يدخل غرف الاجتماعات، بينما غرفة الخوادم المركزية لا يدخلها إلا مهندس النظام مع التحقق الثنائي (2FA). (${subTitle}) هو العقل المدبر الذي يبرمج صلاحيات هذه البطاقات بدقة.`;
    why = `نحتاج (${subTitle}) لحماية بيانات المستخدمين والشركات من السرقة والتعديل غير المصرح به، ولبناء تطبيقات قابلة للاختبار (Unit Testing) وسهلة الصيانة عبر تفكيك الارتباط المباشر بين المكونات.`;

    terms = [
      { term: "Dependency Injection", pronunciation: "ديبندنسي إنجيكشن", meaning: "حقن التبعيات: نمط تصميم يمرر الخدمات للفئات دون إنشائها يدوياً" },
      { term: "Scoped Lifetime", pronunciation: "سكوبد لايف تايم", meaning: "فترة حياة الخدمة: تنشأ نسخة واحدة لكل طلب HTTP وارد وتدمر بعده" },
      { term: "Claims", pronunciation: "كلايمز", meaning: "ادعاءات ومعلومات موثقة عن هوية المستخدم (كالبريد، الدور، أو القسم)" },
      { term: "Policy", pronunciation: "بوليسي", meaning: "سياسة أمان مخصصة تفحص شروطاً متعددة قبل السماح بالدخول" }
    ];

    syntax = `// تسجيل خدمة وحقنها في Program.cs\nbuilder.Services.AddScoped<IProductService, ProductService>();\n\n// حماية الإجراء بالصلاحية\n[Authorize(Roles = "Admin")]\npublic IActionResult Dashboard() => View();`;

    simpleCode = `// مثال بسيط يوضح تسجيل واستخدام خدمة بالحقن Dependency Injection
using Microsoft.AspNetCore.Mvc;

// 1. تعريف واجهة برمجية للخدمة
public interface IMessageService
{
    string GetWelcomeNote();
}

// 2. الفئة التنفيذية للخدمة
public class EmailMessageService : IMessageService
{
    public string GetWelcomeNote() => "أهلاً بك في نظامنا الآمن!";
}

// 3. حقن الخدمة داخل الكنترولر عبر الباني Constructor
public class SecureController : Controller
{
    private readonly IMessageService _messageService;

    // حقن التبعية في المنشئ
    public SecureController(IMessageService messageService)
    {
        _messageService = messageService; // تخزين المرجع
    }

    public IActionResult Welcome()
    {
        // استخدام الخدمة بسهولة وأمان
        ViewBag.Message = _messageService.GetWelcomeNote();
        return View();
    }
}`;

    advancedCode = `// تطبيق أمان متقدم: حماية الموارد عبر السياسات القائمة على الشروط Custom Policy
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace EnterpriseSecurityDemo
{
    // وحدة تحكم محمية بالكامل
    [Authorize] // تتطلب تسجيل دخول أولي
    public class FinanceController : Controller
    {
        // هذا الإجراء محمي بسياسة خاصة تطلب دور محاسب وتأكيد بريد
        [Authorize(Policy = "RequireVerifiedAccountant")]
        [HttpGet]
        public IActionResult FinancialReports()
        {
            // استخراج معرف المستخدم الحالي من الـ Claims بأمان
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var userEmail = User.FindFirstValue(ClaimTypes.Email);

            // تسجيل العملية في السجلات الأمنية Audit Log
            Console.WriteLine($"[سجل تدقيق أمني]: وصل المستخدم {userEmail} إلى التقارير المالية.");

            return View();
        }
    }
}`;

    outputExplanation = `يقوم محرك الأمان في ASP.NET Core بفحص هوية المستخدم المسجلة في الـ Cookie أو Token، والتأكد من مطابقتها لكافة بنود السياسة المحددة، فإن لم تطابق يعيد كود 403 Forbidden تلقائياً.`;

    commonMistakes = [
      {
        wrong: "حقن خدمة Scoped (مثل DbContext) داخل خدمة من نوع Singleton (Captive Dependency).",
        right: "احرص على ألا تعتمد خدمة ذات فترة حياة طويلة على خدمة ذات فترة حياة قصيرة.",
        reason: "لأن الخدمة القصيرة ستظل محبوسة في الذاكرة ولن يتم إغلاق الاتصال بقاعدة البيانات مما يسبب تسريب الذاكرة."
      }
    ];

    bestPractices = [
      "طبق مبدأ الحد الأدنى من الصلاحيات (Least Privilege) بحيث لا يمنح أي مستخدم صلاحية لا يحتاجها عمله.",
      "عزل أسرار التطبيق والمفاتيح داخل Secret Manager أو Environment Variables وتجنب كتابتها في الكود.",
      "استخدم التشفير الآمن لكلمات المرور عبر خوارزميات Identity الافتراضية (PBKDF2 مع Salt)."
    ];

    infographicSteps = [
      { title: "التسجيل في الحاوية", desc: "تسجيل الخدمات وفترات حياتها (Transient, Scoped, Singleton) في Program.cs" },
      { title: "التحقق والترخيص", desc: "فحص الصلاحيات والـ Claims والتوكن قبل السماح بالوصول" },
      { title: "الحقن والتنفيذ", desc: "تمرير الكائنات الجاهزة للكنترولر وتنفيذ العملية بأمان تام" }
    ];
  }
  else {
    // الأقسام المتقدمة: APIs, Testing, Real-Time SignalR, Clean Architecture, Docker, DevOps & Projects
    categoryTheme = "enterprise-advanced";
    iconName = "Rocket";
    gradient = "from-fuchsia-600 via-purple-600 to-cyan-500";

    definition = `يمثل (${subTitle}) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.`;
    analogy = `يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (${subTitle}) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.`;
    why = `الهدف الرئيسي من (${subTitle}) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.`;

    terms = [
      { term: "Clean Architecture", pronunciation: "كلين أركيتكتشر", meaning: "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات" },
      { term: "SignalR Hub", pronunciation: "سيجنال-آر هاب", meaning: "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets" },
      { term: "Docker Container", pronunciation: "دوكر كونتينر", meaning: "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم" },
      { term: "CI/CD Pipeline", pronunciation: "سي-آي / سي-دي", meaning: "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري" }
    ];

    syntax = `// تمثيل معماري متقدم لـ ${subTitle}\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }`;

    simpleCode = `// مثال يوضح تطبيق النمط في ASP.NET Core
using System;
using System.Threading.Tasks;

// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل
public record NotificationMessage(string Title, string Content, DateTime SentAt);

// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة
public class SimpleAlertService
{
    public Task SendAlertAsync(NotificationMessage message)
    {
        // طباعة الإشعار وتاريخه
        Console.WriteLine($"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}");
        return Task.CompletedTask;
    }
}`;

    advancedCode = `// تطبيق متقدم لمعمارية متكاملة توضح: ${subTitle}
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace EnterpriseWorkerDemo
{
    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة
    public class QueueProcessorBackgroundService : BackgroundService
    {
        private readonly ILogger<QueueProcessorBackgroundService> _logger;

        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)
        {
            _logger = logger;
        }

        // تنفيذ الحلقة التكرارية للخدمة الخلفية
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀");

            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج
            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));

            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))
            {
                try
                {
                    // محاكاة معالجة المهام في الطابور
                    _logger.LogInformation("فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...");
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!");
                }
            }
        }
    }
}`;

    outputExplanation = `عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.`;

    commonMistakes = [
      {
        wrong: "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
        right: "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
        reason: "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
      }
    ];

    bestPractices = [
      "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
      "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
      "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
    ];

    infographicSteps = [
      { title: "التخطيط والتجريد", desc: "فصل الطبقات وبناء نماذج الأعمال المستقلة" },
      { title: "التشغيل غير المتزامن", desc: "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة" },
      { title: "المراقبة والنشر", desc: "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة" }
    ];
  }

  // بناء بيانات الإنفوجرافيك التفاعلية للدرس
  const infographic = {
    badge: `الدرس ${subId}`,
    title: subTitle,
    topicTitle: topicTitle,
    sectionTitle: sectionTitle,
    icon: iconName,
    colors: gradient,
    steps: infographicSteps,
    summary: `يمثل (${subTitle}) أحد المعايير التقنية الحيوية في مسار ${topicTitle} ضمن بيئة تطوير ASP.NET Core MVC الشاملة.`
  };

  // بناء 3 أسئلة تفاعلية (اختبر فهمك)
  const quiz = [
    {
      question: `ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (${subTitle})؟`,
      options: [
        `تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام`,
        `إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه`,
        `الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة`,
        `إجبار كافة العمليات على العمل بشكل متزامن وبطيء`
      ],
      correctIndex: 0,
      explanation: `التطبيق الصحيح لـ (${subTitle}) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع.`
    },
    {
      question: `ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (${subTitle})؟`,
      options: [
        `تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات`,
        `كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم`,
        `تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها`,
        `استخدام متغيرات عامة مشتركة دون حماية في الذاكرة`
      ],
      correctIndex: 0,
      explanation: `اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً.`
    },
    {
      question: `أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (${subTitle})؟`,
      options: [
        `إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة`,
        `كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة`,
        `فصل منطق العمليات عن واجهة المستخدم`,
        `استخدام اختبارات الوحدة للتحقق من سلامة المخرجات`
      ],
      correctIndex: 0,
      explanation: `إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية.`
    }
  ];

  // بناء التمرين العملي والحل النموذجي المشروح
  const exercise = {
    title: `تمرين تطبيقي على: ${subTitle}`,
    task: `قم بكتابة برنامج بلغة C# يجسد منطق (${subTitle})، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.`,
    hints: [
      `تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.`,
      `تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة.`
    ],
    solution: `// الحل النموذجي الموصى به لتمرين ${subTitle}
using System;

namespace RoadmapExerciseSolution
{
    public class ExerciseRunner
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("=== بدء تنفيذ حل تمرين: ${subTitle} ===");

            try
            {
                // 1. تعريف المدخلات مع التحقق الأولي
                string inputData = "بيانات تجريبية صالحة"; // مدخل تجريبي

                // 2. فحص الشرط لضمان سلامة المدخل
                if (string.IsNullOrWhiteSpace(inputData))
                {
                    throw new ArgumentException("البيانات المدخلة لا يمكن أن تكون فارغة!");
                }

                // 3. محاكاة المعالجة الناجحة
                Console.WriteLine($"[معالجة ناجحة]: تم تطبيق منطق (${subTitle}) على المدخل: '{inputData}'.");
                Console.WriteLine("✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!");
            }
            catch (Exception ex)
            {
                // معالجة آمنة في حال حدوث أي استثناء
                Console.WriteLine($"[خطأ]: فشل التنفيذ بسبب: {ex.Message}");
            }
        }
    }
}`,
    solutionExplanation: `تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج.`
  };

  return {
    subId,
    title: subTitle,
    englishTitle: englishClean,
    definition,
    analogy,
    why,
    terms,
    syntax,
    simpleCode,
    advancedCode,
    outputExplanation,
    commonMistakes,
    bestPractices,
    infographic,
    quiz,
    exercise
  };
}

// توليد ملخص، جدول مرجعي، ومشروع تطبيقي لكل قسم
function getSectionSummary(section) {
  return {
    sectionId: section.id,
    title: section.title,
    englishTitle: section.englishTitle,
    summaryPoints: [
      `إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في ${section.title}.`,
      `القدرة على كتابة أكواد C# نظيفة وقوية متوافقة مع معايير الأمان والتوسعية الحديثة.`,
      `فهم آلية عمل المكونات خلف الكواليس وتطبيق أفضل الممارسات وتفادي الأخطاء الشائعة.`,
      `امتلاك الثقة الكاملة لحل المشكلات وتطبيق الحلول البرمجية في بيئات الإنتاج الحقيقية.`
    ],
    quickReferenceTable: [
      { command: "dotnet new mvc", purpose: "إنشاء مشروع ASP.NET Core MVC جديد جاهز للعمل" },
      { command: "dotnet run", purpose: "تشغيل التطبيق واستدعاء خادم Kestrel المحلي" },
      { command: "dotnet build", purpose: "التحقق من خلو الكود من الأخطاء وترجمته" },
      { command: "dotnet watch", purpose: "تشغيل التطبيق مع التحديث التلقائي الفوري Hot Reload" },
      { command: "AddDbContext<T>", purpose: "تسجيل سياق قاعدة البيانات EF Core في حاوية الخدمات DI" },
      { command: "MapControllerRoute", purpose: "تعريف مسارات التوجيه الافتراضية للكنترولرات" }
    ],
    miniProject: {
      title: `المشروع التطبيقي الشامل لـ ${section.title}`,
      description: `بناء نظام متكامل يجمع كافة مواضيع هذا القسم في تطبيق حقيقي مع واجهة تفاعلية، وتحقق صارم من البيانات، ومعالجة آمنة للأخطاء.`,
      requirements: [
        "تصميم النماذج وهيكلة الكود وفق أفضل ممارسات هندسة البرمجيات.",
        "تطبيق التحقق من صحة المدخلات Client-Side و Server-Side.",
        "تسجيل الأحداث الحساسة في السجلات وإدارة الأخطاء بأمان."
      ],
      deliverables: "مجلد كامل يحتوي على ملفات المشروع C# و Views مع توثيق README مفصل."
    }
  };
}

// توليد ملفات الأقسام
console.log("⚡ بدء توليد بيانات الأقسام الـ 33...");

const exportList = [];

rawData.forEach((section, sIdx) => {
  const sectionId = section.id;
  const topicsData = [];

  section.topics.forEach((topic, tIdx) => {
    const subtopicsData = [];

    topic.subtopics.forEach((subTitle, subIdx) => {
      const details = getTopicDetails(sectionId, section.title, topic.title, subTitle, sIdx, tIdx, subIdx);
      subtopicsData.push(details);
    });

    topicsData.push({
      topicId: topic.id,
      title: topic.title,
      subtopics: subtopicsData
    });
  });

  const sectionSummary = getSectionSummary(section);

  const fileContent = `// src/data/sections/section${sectionId}.js
// محتوى تعليمي مفصل وشامل لـ: ${section.title}
export const section${sectionId}Data = {
  id: ${sectionId},
  title: ${JSON.stringify(section.title)},
  englishTitle: ${JSON.stringify(section.englishTitle)},
  icon: ${JSON.stringify(section.icon)},
  category: ${JSON.stringify(section.category)},
  description: ${JSON.stringify(section.description)},
  summary: ${JSON.stringify(sectionSummary, null, 2)},
  topics: ${JSON.stringify(topicsData, null, 2)}
};

export default section${sectionId}Data;
`;

  const outFilePath = path.join(sectionsDir, `section${sectionId}.js`);
  fs.writeFileSync(outFilePath, fileContent, 'utf-8');
  exportList.push(`section${sectionId}Data`);
  console.log(`✓ تم إنشاء قسم ${sectionId}: ${section.title}`);
});

// إنشاء ملف الفهرس src/data/sections/index.js
const indexContent = `// src/data/sections/index.js
// فهرس تجميعي لكافة الأقسام الـ 33
${rawData.map(s => `import { section${s.id}Data } from './section${s.id}.js';`).join('\n')}

export const ALL_SECTIONS_DATA = {
${rawData.map(s => `  ${s.id}: section${s.id}Data,`).join('\n')}
};

export function getSectionData(sectionId) {
  return ALL_SECTIONS_DATA[sectionId] || ALL_SECTIONS_DATA[1];
}

export default ALL_SECTIONS_DATA;
`;

fs.writeFileSync(path.join(sectionsDir, 'index.js'), indexContent, 'utf-8');
console.log("🎉 تم توليد كافة ملفات الأقسام الـ 33 وفهرسها بنجاح!");
