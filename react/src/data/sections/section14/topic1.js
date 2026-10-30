// src/data/sections/section14/topic1.js

export const topic1 = {
  id: "14-1",
  title: "أساسيات لغة TypeScript لمنظومة React",
  englishTitle: "TypeScript Fundamentals for React Ecosystem",
  description:
    "مدخل تأسيسي ومعماري شامل لاحتراف لغة TypeScript في بيئة React الحديثة. يغطي هذا القسم المفهوم الجوهري للغة كنظام نمطي صارم مبني فوق JavaScript، الفوارق بين بيئة التنفيذ الديناميكية والتحقق الثابت أثناء التحزيم، إتقان الأنواع الأساسية (Primitives, Arrays, Objects)، المقارنة الدقيقة بين Type Aliases و Interfaces، توظيف أنواع الاتحاد (Unions) والأنواع الحرفية (Literals) والخصائص الاختيارية، احتراف البرمجة المعممة (Generics)، تقنيات تضييق الأنواع (Type Narrowing)، واستغلال أدوات الأنواع الجاهزة (Utility Types)، مع الفهم العميق لسلامة الأنواع وتجنب مخاطر any والتعامل الآمن مع unknown و never.",
  subtopics: [
    {
      id: "14-1-a",
      title: "ما هو TypeScript وفلسفة نظام الأنواع الثابت",
      englishTitle: "What is TypeScript & Static Type System Philosophy",
      pronunciation: "وات إز تايب سكريبت آند ستاتيك تايب سيستم فيلوسوفي",
      meaning: "لغة برمجية فائقة مبنية فوق جافاسكريبت تضيف نظام فحص وتحقق صارم من الأنواع قبل التشغيل",
      description:
        "TypeScript هي مجموعة عليا من لغة JavaScript (Syntactic Superset) طورتها شركة Microsoft، مما يعني أن أي كود JavaScript صحيح هو بالضرورة كود TypeScript صالح. ومع ذلك، تضيف TypeScript ميزة جوهرية تغير قواعد اللعبة في هندسة البرمجيات: 'نظام الأنواع الثابت أثناء زمن التصريف' (Static Type Checking at Compile-Time). في JavaScript التقليدية، يتم تحديد ومعرفة نوع المتغيرات فقط أثناء تشغيل الكود في متصفح المستخدم النهائي (Dynamically Typed at Runtime)؛ فإذا استدعيت دالة بمعامل ناقص أو حاولت قراءة خاصية من كائن غير موجود، ينهار التطبيق فجأة أمام الزائر بالخطأ الشهير `TypeError: Cannot read properties of undefined`. في المقابل، تقوم TypeScript بتحليل وفحص الكود داخل محرر النصوص (VS Code) وأثناء مرحلة البناء، فترصد هذه الأخطاء المنطقية وتمنع خروجها إلى الإنتاج، ثم تقوم في النهاية بتجريد وحذف كافة الأنواع (Type Erasure) لإنتاج كود JavaScript صافٍ ومتوافق مع جميع المتصفحات.",
      analogy:
        "برمجة تطبيق ضخم بلغة JavaScript الصرفة تشبه البناء بدون مخطط هندسي مسبق وفحص للمتانة؛ تكتشف أن الجدار آيل للسقوط فقط بعد أن يسكن الملاك في الشقق. أما TypeScript فتشبه مهندساً معمارياً صارماً يفحص المخططات الإنشائية ويحسب الأحمال قبل صب خرسانة واحدة؛ فإذا وجد خطأ في المقاسات يوقفك فوراً ويجبرك على تصحيحه في المكتب الهندسي.",
      whyItMatters:
        "أكثر من 78% من الشركات التقنية العالمية وفرق هندسة React تعتبر TypeScript شرطاً إلزامياً للتوظيف وبناء المنتجات؛ لأنها تمنع أكثر من 40% من الأخطاء التشغيلية الشائعة، وتوفر إكمالاً تلقائياً ذكياً (IntelliSense)، وتجعل إعادة هيكلة المشاريع الضخمة (Refactoring) آمنة وموثوقة بنسبة 100%.",
      syntax: `// بنية كتابة الأنواع في TypeScript:
let userName: string = 'أحمد';
let userAge: number = 28;
let isActive: boolean = true;

// دالة تحدد أنواع المدخلات ونوع القيمة المرتجعة:
function calculateTotal(price: number, taxRate: number): number {
  return price + (price * taxRate);
}`,
      simpleExample: `// مثال يقارن بين غياب الحماية في JS والحماية الصارمة في TS
// تعريف دالة تستقبل نصاً وتطبع طوله بأمان
function printUserGreeting(name: string): string {
  // تضمن TypeScript أن name سيكون دائماً نصاً ولا يمكن تمرير null أو undefined بالخطأ
  return \`مرحباً بك يا \${name.trim()}!\`;
}

// استدعاء صحيح ومطابق للنوع
const greeting = printUserGreeting("  سارة  ");
console.log(greeting);

// الخطأ التالي تكتشفه TypeScript فوراً في المحرر وتمنع تشغيله:
// printUserGreeting(12345); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.`,
      advancedExample: `// مثال يوضح كيف تمنع TypeScript الأخطاء الإملائية وتدعم الإكمال الذكي في الكائنات
// تعريف عقد نمطي واضح لبيانات العضو
type OrganizationMember = {
  id: number;
  fullName: string;
  role: 'admin' | 'editor' | 'viewer';
  contact: {
    email: string;
    phone?: string; // خاصية اختيارية
  };
};

// إنشاء كائن يلتزم بالعقد النمطي
const leadDeveloper: OrganizationMember = {
  id: 101,
  fullName: 'عمر ياسين',
  role: 'admin',
  contact: {
    email: 'omar@cloud.tech'
  }
};

// دالة تقرأ الخصائص بثقة مطلقة وإكمال تلقائي
function renderMemberBadge(member: OrganizationMember): string {
  // المحرر يقترح fullName و role تلقائياً ويمنع الأخطاء المطبعية مثل full_name
  const roleLabel = member.role === 'admin' ? 'مدير النظام' : 'عضو مساهم';
  return \`[\${roleLabel}] \${member.fullName} (\${member.contact.email})\`;
}

console.log(renderMemberBadge(leadDeveloper));`,
      outputExplanation:
        "يوضح المثالان كيف تفرض TypeScript عقداً برمجياً صارماً؛ فالدالة الأولى ترفض تمرير أرقام لحقل يتوقع نصاً، والدالة الثانية تستغل عقد `OrganizationMember` لمنع كتابة خصائص خاطئة، مما يلغي تماماً فئة أخطاء `undefined` ويوفر توثيقاً حياً وموثوقاً للكود.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن TypeScript تضيف كوداً تشغيلياً ثقيلاً يبطئ سرعة المتصفح عند تشغيل الموقع.",
          fix: "استوعب أن نظام الأنواع في TypeScript يُحذف بالكامل (Type Erasure) أثناء البناء؛ والملف الناتج الذي يصل للمتصفح هو JavaScript نقي وفائق السرعة."
        },
        {
          mistake: "معاملة TypeScript كعائق يبطئ كتابة الأسطر الأولى بدلاً من رؤيتها كحماية توفر أياماً من تصحيح الأخطاء لاحقاً.",
          fix: "تذكر دائماً أن الثواني التي تقضيها في تعريف النوع تحميك من ساعات البحث عن أخطاء خفية في الإنتاج."
        }
      ],
      bestPractices: [
        "فعل خيار strict: true في ملف tsconfig.json دائماً للاستفادة الكاملة من قوة النظام ومنع الثغرات النمطية.",
        "دع TypeScript تستنتج الأنواع التلقائية (Type Inference) عندما تكون القيمة واضحة (مثل: const count = 10) ولا تكرر كتابة : number بدون داعٍ.",
        "تجنب التحايل على المترجم أو إسكاته بتعليقات مثل @ts-ignore إلا في حالات الطوارئ القصوى والموثقة."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "رحلة الكود من TypeScript إلى المتصفح",
        items: [
          {
            title: "1. مرحلة التطوير (VS Code)",
            points: [
              "فحص لحظي للأنواع في زمن الكتابة",
              "إكمال تلقائي ذكي IntelliSense لكافة الخصائص",
              "اكتشاف الأخطاء المطبعية قبل حفظ الملف"
            ]
          },
          {
            title: "2. مرحلة التصريف (tsc / Vite Build)",
            points: [
              "التحقق الصارم من صحة تدفق البيانات",
              "إيقاف البناء فوراً إذا وُجد أي تعارض نمطي",
              "حذف كافة تعريفات الأنواع (Type Erasure)"
            ]
          },
          {
            title: "3. مرحلة التشغيل (Browser Runtime)",
            points: [
              "تشغيل JavaScript قياسي ونقي 100%",
              "صفر حجم إضافي ناتج عن الأنواع في حزمة الإنتاج",
              "أداء فائق واستقرار استثنائي خالٍ من أخطاء الانهيار"
            ]
          }
        ]
      }
    },
    {
      id: "14-1-b",
      title: "الفرق بين JavaScript و TypeScript والمقارنة المعمارية",
      englishTitle: "JavaScript vs TypeScript: Deep Architectural Comparison",
      pronunciation: "جافاسكريبت فيرسس تايب سكريبت ديب آركيتكتشرال كومباريزون",
      meaning: "المقارنة التقنية والفلسفية الشاملة بين لغة الويب القياسية والنظام النمطي الممتد",
      description:
        "لفهم سبب اعتماد مجتمع React العالمي على TypeScript، يجب عقد مقارنة معمارية دقيقة مع JavaScript القياسية: 1) 'زمن فحص الأنواع' (Typing Time): جافاسكريبت لغة ديناميكية تفحص الأنواع أثناء التشغيل في المتصفح، بينما تايب سكريبت لغة ساكنة (Statically Typed) تفحص الأنواع أثناء التطوير قبل الإنتاج، 2) 'قابلية الصيانة والتوثيق' (Self-Documenting Code): في JavaScript تضطر لقراءة كامل كود الدالة لمعرفة ماذا تتوقع خصائص الـ Props، بينما في TypeScript تعمل الـ Interfaces والـ Types كعقد توثيقي صريح ومكتوب ذاتياً، 3) 'إعادة الهيكلة' (Safe Refactoring): إذا أردت تغيير اسم حقل مثل `user_id` إلى `id` في مشروع JS يحتوي على 200 ملف، فأنت تخاطر بكسر الموقع في شاشات قد تنساها؛ بينما في TS بمجرد تغيير الاسم في واجهة العقد، يضع لك المترجم خطاً أحمر دقيقاً تحت كل سطر في المشروع يحتاج للتعديل، 4) 'تجربة المطور' (DX): توفر TypeScript إكمالاً فورياً واقتراحات دقيقة وموثوقة للمكتبات الخارجية عبر حزم `@types/*`.",
      analogy:
        "الفرق يشبه الفرق بين السير في حقل ألغام بدون جهاز كاشف للمعادن (JavaScript)؛ قد تمر بسلام أحياناً ولكن خطوة واحدة خاطئة تفجر النظام فجأة. أما TypeScript فهي جهاز كشف متطور يكشف لك مواضع الألغام بدقة ويرسم لك مساراً آمناً لا يمكن أن تحيد عنه.",
      whyItMatters:
        "استيعاب هذه الفروق ينقل تفكير المبرمج من مرحلة كتابة كود عشوائي ينتظر تجريبه باليد في المتصفح إلى هندسة برمجية متماسكة مبنية على عقود نمطية رصينة ومحمية من الانهيارات.",
      syntax: `// JavaScript:
function getUserName(user) {
  return user.profile.name; // خطر الانهيار إذا كان profile غير موجود!
}

// TypeScript:
interface UserRecord {
  profile?: { name: string };
}
function getUserNameSafe(user: UserRecord): string {
  return user.profile?.name ?? 'مستخدم مجهول'; // فحص وحماية إلزامية
}`,
      simpleExample: `// مقارنة عملية لتمرير معاملات خاطئة بين JS و TS
// في JavaScript الصرفة: الكود يقبل أي شيء وينهار أثناء التشغيل
function divideNumbersJS(a, b) {
  return a / b;
}
console.log(divideNumbersJS("مئة", 2)); // النتيجة: NaN (خطأ حسابي صامت يفسد الواجهة)

// في TypeScript: المترجم يرفض الخطأ في ثوانٍ
function divideNumbersTS(a: number, b: number): number {
  if (b === 0) throw new Error('لا يمكن القسمة على صفر');
  return a / b;
}
console.log(divideNumbersTS(100, 2)); // 50 بنجاح وأمان
// divideNumbersTS("مئة", 2); // خطأ فوري في المحرر يمنع إطلاق الكود`,
      advancedExample: `// مقارنة أمان إعادة الهيكلة (Refactoring Safety) في مشروع React
// 1. تعريف عقد بيانات المنتج
interface ProductModel {
  sku: string; // المعرف المعياري للمنتج
  displayName: string;
  unitPrice: number;
  isAvailable: boolean;
}

// 2. مكون React يعتمد على هذا العقد الصارم
export function ProductPricingCard({ product }: { product: ProductModel }) {
  // إذا قرر الفريق مستقبلاً تغيير unitPrice إلى finalPrice،
  // ستقوم TypeScript بالإشارة لكل مكان في المشروع استخدم unitPrice فوراً!
  const formattedPrice = new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: 'SAR'
  }).format(product.unitPrice);

  return (
    <div className="p-4 border rounded-xl bg-slate-900 text-white">
      <h4 className="font-bold text-sm">{product.displayName}</h4>
      <p className="text-xs text-emerald-400 mt-1">{formattedPrice}</p>
      <span className={\`text-[10px] px-2 py-0.5 rounded font-mono \${product.isAvailable ? 'bg-emerald-950 text-emerald-300' : 'bg-rose-950 text-rose-300'}\`}>
        {product.isAvailable ? 'متوفر بالمخزون' : 'نفد من المخزون'}
      </span>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المقارن كيف توفر TypeScript ضماناً بأن الحسابات والخصائص لن تتلقى مدخلات غير منطقية، وكيف تصبح عملية تغيير أسماء الخصائص (Refactoring) في واجهات React محمية بإنذارات فورية ترشد المطور لكل ملف مرتبط دون ترك أي ثغرة خلفه.",
      commonMistakes: [
        {
          mistake: "الظن بأن TypeScript هي لغة منفصلة تماماً تتطلب تعلم كل مفاهيم البرمجة من الصفر.",
          fix: "استوعب أن كل ما تعرفه في JavaScript يعمل في TypeScript تماماً؛ فأنت فقط تضيف طبقة من أسماء الأنواع فوق كودك المألوف."
        },
        {
          mistake: "كتابة أنواع redundant عندما تكون TypeScript قادرة على استنتاجها بنفسها (مثل: let title: string = 'React').",
          fix: "اكتب ببساطة let title = 'React'؛ فالمترجم ذكي بما يكفي لاستنتاج أن نوعها string تلقائياً."
        }
      ],
      bestPractices: [
        "استغل استنتاج الأنواع (Type Inference) واقتصر في كتابة الأنواع الصريحة على معلمات الدوال وخصائص الكائنات والمكونات.",
        "استخدم ملفات التوثيق النمطي (.d.ts) ومستودع DefinitelyTyped (@types) لأي مكتبة خارجية لا تأتي بأنواع مدمجة.",
        "اجعل رسائل أخطاء المترجم صديقتك الأولى؛ اقرأ سياق الخطأ لتكتشف الثغرة في تدفق بياناتك."
      ],
      visualInfographic: {
        type: "comparison-table",
        title: "مقارنة معمارية شاملة: JavaScript مقابل TypeScript",
        columns: ["المعيار", "JavaScript القياسية", "TypeScript المعاصرة"],
        rows: [
          ["فحص الأنواع", "ديناميكي أثناء التشغيل (Runtime)", "ساكن أثناء التطوير والبناء (Compile-time)"],
          ["اكتشاف الأخطاء", "بعد نشر الموقع أمام المستخدمين", "داخل المحرر فور كتابة السطر في ثانية"],
          ["التوثيق الذاتي", "يتطلب قراءة الكود أو تعليقات JSDoc", "واجهات وعقود صريحة تدعم الإكمال الذكي"],
          ["أمان إعادة الهيكلة (Refactoring)", "محفوف بالمخاطر وتغييرات صامتة", "آمن 100% مع تحديد كل موقع معطوب بدقة"],
          ["سرعة وحجم الإنتاج", "حجم الكود المكتوب فقط", "مطابق تماماً لـ JS بعد تجريد الأنواع (0KB زيادة)"],
          ["دعم محررات الأكواد (IntelliSense)", "محدود ويعتمد على التخمين", "دقيق وشامل لكافة الدوال والخصائص والمكتبات"]
        ]
      }
    },
    {
      id: "14-1-c",
      title: "الأنواع الأساسية والبدائية (Primitive Types)",
      englishTitle: "Primitive Types: string, number, boolean & Special Values",
      pronunciation: "بريميتيف تايبس: سترينج، نمبر، بوليان آند سبيشال فاليوز",
      meaning: "اللبنات الأساسية لبناء كافة هياكل البيانات في تايب سكريبت",
      description:
        "تمتلك TypeScript مجموعة من الأنواع البدائية الأساسية التي تشكل حجر الأساس لكافة الهياكل والبيانات الأكثر تعقيداً: 1) `string`: للنصوص والأحرف (مثل `'React'`, `` `سعر: ${price}` ``)، 2) `number`: لكافة الأرقام سواء كانت صحيحة، أو عشرية، أو قيماً علمية (مثل `42`, `3.14`, `0xff`)، 3) `boolean`: للقيم الثنائية المنطقية (`true` أو `false`)، 4) `null`: لتمثيل غياب القيمة المقصود والمتعمد، 5) `undefined`: لتمثيل المتغيرات التي لم يتم إسناد قيمة لها بعد، 6) `bigint`: للأرقام الهائلة التي تتجاوز حدود الأمان للأرقام العادية (`2^53 - 1`)، 7) `symbol`: لتمثيل المعرفات الفريدة غير القابلة للتكرار. تفرض TypeScript قواعد صارمة جداً تمنع الخلط بين هذه الأنواع؛ فلا يمكن مثلاً إسناد `null` إلى متغير من نوع `string` ما لم يُصرّح بذلك صراحة عبر اتحاد الأنواع (Strict Null Checks).",
      analogy:
        "الأنواع البدائية تشبه فرز العملات النقدية؛ لديك عملات ورقية (string)، وعملات معدنية (number)، وبطاقات شحن إلكترونية (boolean)؛ مستحيل أن تضع عملة ورقية في فتحة العملات المعدنية في ماكينة البيع الآلي دون أن ترفضها الماكينة فوراً.",
      whyItMatters:
        "معرفة الأنواع البدائية بدقة والالتزام بضوابطها الصارمة يمنع ظواهر التحويل التلقائي الغريبة والشهيرة في JavaScript مثل جمع رقم مع نص (`10 + '5' = '105'`) وتفادي الأخطاء المنطقية في الحسابات المالية.",
      syntax: `// تعريف الأنواع البدائية الصريحة:
const websiteName: string = "أكاديمية React";
const coursePrice: number = 299.99;
const isPublished: boolean = true;
const discountCode: string | null = null; // يقبل نصاً أو null`,
      simpleExample: `// مثال يوضح منع التحويل التلقائي العشوائي للأنواع
function calculateDiscount(basePrice: number, discountAmount: number): number {
  // يضمن المترجم أن الطرفين أرقام حقيقية
  return basePrice - discountAmount;
}

const finalPrice = calculateDiscount(500, 50);
console.log("السعر النهائي:", finalPrice); // 450

// المحاولات التالية تمنعها TypeScript فوراً في المحرر:
// calculateDiscount("500", 50); // خطأ: نص غير مقبول
// calculateDiscount(500, "50"); // خطأ: نص غير مقبول`,
      advancedExample: `// التعامل الصارم مع القيم الخاصة null و undefined وتفادي الأخطاء الخفية
interface UserSessionConfig {
  sessionId: string;
  loginTimestamp: number;
  autoRenew: boolean;
  lastKnownIpAddress: string | null; // قد تكون غير متوفرة بعد
  customTheme: string | undefined;   // لم تُحدد بعد
}

function processSessionAudit(session: UserSessionConfig): string {
  // الحماية الصارمة من الانهيار عند التعامل مع null أو undefined
  const ipDisplay = session.lastKnownIpAddress !== null
    ? session.lastKnownIpAddress
    : 'عنوان IP مجهول ومحجوب';

  const themeDisplay = session.customTheme ?? 'السمة الافتراضية (Dark)';

  return \`جلسة #\${session.sessionId} | IP: \${ipDisplay} | السمة: \${themeDisplay}\`;
}

const activeSession: UserSessionConfig = {
  sessionId: 'sess_998124',
  loginTimestamp: Date.now(),
  autoRenew: true,
  lastKnownIpAddress: null,
  customTheme: undefined
};

console.log(processSessionAudit(activeSession));`,
      outputExplanation:
        "يوضح المثالان كيف تفرض TypeScript ضوابط صارمة تمنع الخلط بين الأرقام والنصوص، وتجبر المطور على التحقق المنطقي الحذر من القيم القابلة لأن تكون `null` أو `undefined` قبل استهلاكها، مما يمنع أعطال الانهيار المفاجئ.",
      commonMistakes: [
        {
          mistake: "استخدام الكلمات المكتوبة بحرف كبير String أو Number أو Boolean كأنواع للمتغيرات بدلاً من الأحرف الصغيرة string و number و boolean.",
          fix: "استخدم دائماً الأحرف الصغيرة (string, number, boolean)؛ فالكلمات ذات الأحرف الكبيرة تشير إلى كائنات التغليف (Wrapper Objects) في JavaScript وليست الأنواع البدائية."
        },
        {
          mistake: "إهمال تفعيل strictNullChecks مما يسمح بإسناد null و undefined لأي متغير دون تحذير.",
          fix: "تأكد من تفعيل strict: true في tsconfig.json لكي تجبرك TypeScript على التصريح الصريح عندما يكون المتغير يقبل null."
        }
      ],
      bestPractices: [
        "استخدم دائماً الأنواع البدائية ذات الأحرف الصغيرة string و number و boolean.",
        "إذا كانت الخاصية قد تكون غائبة أو فارغة، صرح بذلك صراحة عبر اتحاد الأنواع: string | null أو string | undefined.",
        "استغل معامل الدمج الخالي Nullish Coalescing (??) لتوفير قيم بديلة آمنة عند التعامل مع القيم المحتملة لـ null."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "الأنواع البدائية الأساسية في TypeScript",
        items: [
          {
            title: "string (النصوص)",
            points: [
              "النصوص العادية: 'hello', \"react\"",
              "القوالب النصية الديناميكية: `user: ${id}`",
              "يدعم كافة دوال السلاسل النصية بأمان"
            ]
          },
          {
            title: "number (الأرقام)",
            points: [
              "الأرقام الصحيحة: 100, -25",
              "الأرقام العشرية: 3.14159",
              "يمنع العمليات الحسابية مع النصوص تماماً"
            ]
          },
          {
            title: "boolean (القيم المنطقية)",
            points: [
              "القيمتان الحصريتان: true أو false فقط",
              "لا يقبل 1 أو 0 أو 'yes' كبدائل تلقائية",
              "مثالي للرايات والشروط وحالات التحميل"
            ]
          },
          {
            title: "null & undefined (الغياب)",
            points: [
              "null: غياب القيمة المتعمد والصريح",
              "undefined: متغير لم يتم تعيين قيمة له بعد",
              "يخضعان لفحص strictNullChecks الصارم"
            ]
          }
        ]
      }
    },
    {
      id: "14-1-d",
      title: "المصفوفات والكائنات (Arrays & Object Types)",
      englishTitle: "Typing Arrays, Tuples & Object Shapes",
      pronunciation: "تايبنج أرايز، تابلز آند أوبجكت شيبس",
      meaning: "الهندسة النمطية للمجموعات البيانية المركبة والمصفوفات المحددة",
      description:
        "تمثل المصفوفات والكائنات اللبنات المركزية لتخزين وإدارة البيانات في أي تطبيق React. في TypeScript، تتوفر طريقتان لكتابة نوع المصفوفة: النمط الكلاسيكي الشائع `T[]` (مثل `number[]`, `string[]`)، أو النمط المعمم `Array<T>`. تضمن TypeScript أن كل عنصر يضاف إلى المصفوفة (عبر push أو unshift أو الفهرس) يلتزم بدقة بنوع العناصر المعرفة. علاوة على ذلك، تقدم TypeScript نوعاً مميزاً للمصفوفات ثابتة الطول والأنواع يسمى `Tuple` (مثل `[string, number]` كحالة useState)، حيث يحدد هذا النوع عدد العناصر ونوع كل موقع بالترتيب الصارم. أما بالنسبة للكائنات، فيتم تعريف 'شكل الكائن' (Object Shape) إما عبر كائن مضمن `{ name: string; age: number }` أو عبر Type Aliases و Interfaces لتحديد الخصائص الإلزامية والاختيارية.",
      analogy:
        "المصفوفة العادية `string[]` تشبه صينية بيض؛ كل فتحة فيها مخصصة لبيضة واحدة ولا يمكن وضع تفاحة مكانها. أما الـ Tuple `[string, number]` فيشبه جواز السفر؛ الخانة الأولى مخصصة حصراً للاسم (string)، والخانة الثانية مخصصة حصراً للرقم القومي (number) بالترتيب الصارم.",
      whyItMatters:
        "يمنع تلوث المصفوفات بعناصر غير متجانسة بالخطأ، ويضمن أن كل دالة مثل `map` أو `filter` تتعامل مع عناصر معلومة الخصائص بنسبة 100% دون خوف من قراءة خصائص غير موجودة.",
      syntax: `// 1. مصفوفة نصوص عادية:
const tags: string[] = ['react', 'typescript', 'tailwind'];

// 2. مصفوفة ثابتة المواقع (Tuple):
const coordinate: [number, number] = [24.7136, 46.6753]; // خط الطول والعرض

// 3. شكل كائن مضمن:
const author: { name: string; articlesCount: number } = {
  name: 'أحمد',
  articlesCount: 15
};`,
      simpleExample: `// مثال لتطبيق الدوال العليا map بأمان نمطي كامل
interface CourseStudent {
  id: number;
  name: string;
  grade: number;
}

// مصفوفة من كائنات الطلاب
const studentsList: CourseStudent[] = [
  { id: 1, name: 'سارة خالد', grade: 95 },
  { id: 2, name: 'عمر ياسين', grade: 88 }
];

// استخدام دالة map - المترجم يعرف نوع s تلقائياً كـ CourseStudent
const studentBadges = studentsList.map((s) => {
  return \`الطالب: \${s.name} - الدرجة: \${s.grade}%\`;
});

console.log(studentBadges);`,
      advancedExample: `// محاكاة نوع Tuple مخصص يشبه خطاف useState تماماً
// دالة تحاكي useState مع توثيق صارم لـ Tuple
function createMiniState<T>(initialValue: T): [T, (newValue: T) => void] {
  let currentState = initialValue;

  const setState = (newValue: T) => {
    currentState = newValue;
    console.log(\`تم تحديث الحالة إلى:\`, currentState);
  };

  // إرجاع مصفوفة محددة المواقع والأنواع بدقة (Tuple)
  return [currentState, setState];
}

// استخدام الدالة: المترجم يستنتج النوعين بدقة
const [theme, setTheme] = createMiniState('dark'); // [string, (newValue: string) => void]
console.log("السمة الحالية:", theme);
setTheme('light');

// تمنع TypeScript تمرير أنواع غير مطابقة للقيمة الأولية:
// setTheme(12345); // Error: Argument of type 'number' is not assignable to parameter of type 'string'`,
      outputExplanation:
        "يوضح المثال المتقدم كيف يضمن نوع الـ Tuple `[T, (newValue: T) => void]` تطابقاً تاماً شبيه بنظام خطافات React: الموقع الأول يمثل القيمة بدقة، والموقع الثاني يمثل دالة التحديث التي تقبل حصراً نفس نوع القيمة، مانعاً أي تداخل في الأنواع.",
      commonMistakes: [
        {
          mistake: "تعريف مصفوفة فارغة بدون نوع مثل const items = [] ثم محاولة إضافة عناصر إليها والتعرض لخطأ never[].",
          fix: "حدد نوع عناصر المصفوفة دائماً عند تعريفها فارغة: const items: string[] = []."
        },
        {
          mistake: "الخلط بين المصفوفة العادية والـ Tuple ونسيان أن الـ Tuple محدد الطول والمواقع.",
          fix: "استخدم الـ Tuple فقط عندما يكون عدد العناصر ثابتاً وموقع كل نوع معروفاً (مثل إحداثيات [x, y] أو مخرجات useState)."
        }
      ],
      bestPractices: [
        "فضل استخدام صيغة T[] للمصفوفات العادية لبساطتها وسهولة قراءتها مقارنة بـ Array<T>.",
        "استخدم المصفوفات غير القابلة للتعديل readonly string[] لحماية القوائم الثابتة من التغيير المفاجئ بـ push أو splice.",
        "عرف عقود الكائنات المعقدة في interfaces أو types مستقلة بدلاً من كتابتها مضمنة في كل مكان لتسهيل إعادة الاستخدام."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "أنماط المصفوفات والكائنات في TypeScript",
        items: [
          {
            title: "المصفوفات العادية (T[])",
            points: [
              "الشكل: number[] أو string[]",
              "الطول: غير محدود وقابل للنمو",
              "التجانس: جميع العناصر من نفس النوع حصراً"
            ]
          },
          {
            title: "الـ Tuples (المصفوفات الثابتة)",
            points: [
              "الشكل: [string, number, boolean]",
              "الطول: محدد مسبقاً بعدد العناصر",
              "المواقع: كل موقع مخصص لنوع محدد بالترتيب"
            ]
          },
          {
            title: "هياكل الكائنات (Object Shapes)",
            points: [
              "تحدد أسماء الخصائص وأنواعها بدقة",
              "تدعم الخصائص الإلزامية والاختيارية",
              "تمنع تمرير خصائص مجهولة أو خاطئة إملائياً"
            ]
          }
        ]
      }
    },
    {
      id: "14-1-e",
      title: "تعريف type و interface والمقارنة بينهما",
      englishTitle: "Type Aliases vs Interfaces: Choosing the Right Tool",
      pronunciation: "تايب إيلياسيز فيرسس إنترفيسيز: تشوزنج ذي رايت توول",
      meaning: "المقارنة التقنية والفلسفية لاختيار الأداة الأنسب لتعريف العقود وهياكل البيانات",
      description:
        "في TypeScript، تتوفر وسيلتان أساسيتان لتعريف وتسمية الهياكل النمطية: `type` (الاسم المستعار للنوع Type Alias) و `interface` (الواجهة البينية). على الرغم من أنهما يتقاطعان في معظم الاستخدامات اليومية لكائنات React، إلا أن هناك فروقاً معمارية حاسمة تحدد متى تختار كل منهما: 1) 'دمج الإعلانات' (Declaration Merging): الميزة الحصرية لـ `interface`؛ حيث يمكن تعريف نفس الـ interface عدة مرات في ملفات مختلفة وتقوم TypeScript بدمج خصائصها معاً تلقائياً (وهو ما تعتمد عليه تعريفات مكتبات الـ DOM وReact لإضافة خصائص عامة)، بينما إعلان `type` بنفس الاسم مرتين يطلق خطأ تصريف صريح، 2) 'الوراثة والتوسيع' (Extensibility): يتم توسيع `interface` بالكلمة المفتاحية الواضحة `extends` (مثل `interface Admin extends User`)، بينما يوسع `type` عبر معامل التقاطع Intersection `&`، 3) 'تعدد الاستخدامات': `type` أكثر مرونة وشمولية؛ فهو قادر على تمثيل الاتحادات (Unions مثل `type Status = 'idle' | 'loading'`)، والأنواع البدائية، والـ Tuples، والعمليات الحسابية المتقدمة للأنواع (Mapped Types)، وهو ما لا تستطيع `interface` فعله بمفردها.",
      analogy:
        "الـ Interface تشبه إطار نافذة قياسي في منزل؛ يمكنك بسهولة إضافة شباك حماية فوقه أو ستارة دون تغيير الإطار نفسه (Declaration Merging). أما الـ Type فيشبه طينة صلصال سحرية شديدة المرونة؛ يمكنك تشكيلها كإطار، أو ككرة، أو مزج لونين معاً، أو دمجها في أشكال يستحيل صنعها بإطار الخشب الثابت.",
      whyItMatters:
        "معرفة الفارق الدقيق بين type و interface يمنع أخطاء التصميم المعماري في بناء أنظمة التصميم (Design Systems) ومكتبات المكونات المشتركة، ويوفر معياراً واضحاً ومتسقاً لكامل الفريق البرمجي.",
      syntax: `// 1. استخدام interface لكائن قابل للتوسيع:
interface UserProfile {
  id: number;
  name: string;
}
interface AdminProfile extends UserProfile {
  permissions: string[];
}

// 2. استخدام type لتمثيل اتحاد أو بنية معقدة:
type ActionStatus = 'idle' | 'pending' | 'success' | 'failed';
type Point = [number, number];`,
      simpleExample: `// مثال يقارن بين توسيع Interface وتقاطع Type
// أ. التوسيع بـ interface
interface BaseEntity {
  id: string;
  createdAt: Date;
}
interface BlogPost extends BaseEntity {
  title: string;
  content: string;
}

// ب. التقاطع بـ type
type Timestamped = {
  timestamp: number;
};
type LogMessage = Timestamped & {
  message: string;
  level: 'info' | 'warn' | 'error';
};

const appLog: LogMessage = {
  timestamp: Date.now(),
  message: 'تم تشغيل التطبيق بنجاح',
  level: 'info'
};`,
      advancedExample: `// مثال يوضح الميزة الحصرية لـ interface: دمج الإعلانات (Declaration Merging)
// 1. تعريف واجهة أولى لنافذة المتصفح المخصصة
interface WindowCustomConfig {
  appVersion: string;
}

// 2. تعريف ثانٍ في ملف أو موضع آخر يضيف خاصية جديدة دون كسر الأولى
interface WindowCustomConfig {
  isDebugMode: boolean;
}

// تقوم TypeScript تلقائياً بدمج الخصائص ليصبح الكائن يتوقع appVersion و isDebugMode معاً!
const currentConfig: WindowCustomConfig = {
  appVersion: '2.5.0',
  isDebugMode: true
};

// 3. المكافئ الذي يفشل تماماً مع type:
type UniqueDevice = { model: string };
// type UniqueDevice = { serialNumber: string }; // Error: Duplicate identifier 'UniqueDevice'!`,
      outputExplanation:
        "يوضح المثال المتقدم إحدى أهم الفروق المعمارية: تتيح `interface` دمج الإعلانات تلقائياً عبر ملفات متعددة دون نزاع، بينما يضمن `type` التفرد الصارم ويمنع التكرار العرضي، مما يجعله مثالياً للحالات التي تتطلب قفلاً نمطياً لا يقبل العبث.",
      commonMistakes: [
        {
          mistake: "محاولة استخدام interface لتعريف اتحاد نصوص (Union) مثل: interface Status = 'open' | 'closed'.",
          fix: "الاتحادات والـ Tuples والأنواع البدائية لا تُعرف إلا بـ type: type Status = 'open' | 'closed'."
        },
        {
          mistake: "التعصب لواحدة وإقصاء الأخرى تماماً في كامل المشروع.",
          fix: "اتبع أفضل الممارسات المعاصرة: استخدم interface لخصائص المكونات (Props) والكائنات الممتدة، واستخدم type للاتحادات والـ Tuples والبيانات المشتقة."
        }
      ],
      bestPractices: [
        "استخدم interface لتعريف كائنات الـ Props والـ State في مكونات React للاستفادة من وضوح رسائل الأخطاء ودعم الوراثة بـ extends.",
        "استخدم type عندما تحتاج لتمثيل Unions أو Literals أو Tuples أو Utility Types مركبة.",
        "كن متسقاً في مشروعك واتبع دليل أسلوب محدد (Style Guide) يتبناه جميع أفراد الفريق."
      ],
      visualInfographic: {
        type: "comparison-table",
        title: "جدول المفاضلة المعمارية: Interface مقابل Type Alias",
        columns: ["الخاصية", "interface", "type alias"],
        rows: [
          ["تعريف كائنات عادية", "مدعوم بقوة بـ syntax واضح", "مدعوم بقوة"],
          ["الوراثة والتوسيع", "باستخدام الكلمة المفتاحية extends", "باستخدام معامل التقاطع &"],
          ["دمج الإعلانات (Declaration Merging)", "نعم (مدعوم حصرياً)", "لا (يطلق خطأ تكرار المعرف)"],
          ["تعريف اتحادات (Union Types)", "غير ممكن نهائياً", "نعم (type Status = 'A' | 'B')"],
          ["تعريف مصفوفات Tuple", "غير عملي", "نعم (type Coord = [number, number])"],
          ["الملاءمة في React", "الأفضل لـ Props المكونات والمكتبات", "الأفضل للـ Reducers والـ Unions والحالات"]
        ]
      }
    },
    {
      id: "14-1-f",
      title: "أنواع الاتحاد (Union Types)",
      englishTitle: "Union Types: Composing Flexible Multi-Type Contracts",
      pronunciation: "يونيون تايبس: كومبوزنج فليكسيبل ملتي تايب كونتراكتس",
      meaning: "تمثيل المتغيرات والخصائص التي تقبل واحداً من عدة أنواع محددة مسبقاً",
      description:
        "`Union Types` (أنواع الاتحاد) هي إحدى أقوى وأروع ميزات TypeScript التي تتيح لقيمة معينة أن تكون واحداً من عدة أنواع مختلفة باستخدام الرمز العمودي `|` (يُقرأ 'أو'). على سبيل المثال، قد يكون معرف السجل `string | number` (يقبل نصاً أو رقماً)، أو قد تكون نتيجة استدعاء الخادم `TData | null`. تفرض TypeScript قاعدة أمان ذهبية عند التعامل مع الـ Union: لا يُسمح لك بالوصول المباشر إلا إلى الخصائص المشتركة بين كافة أطراف الاتحاد فقط، وإذا أردت الوصول لخاصية تنفرد بها إحدى الحالات، فإن المترجم يجبرك على كتابة كود فحص وتضييق للنوع (Type Narrowing) باستخدام `typeof` أو `in`، مما يحول دون وقوع أي خطأ استدعاء غير متوافق.",
      analogy:
        "نوع الاتحاد يشبه وسيلة دفع في متجر؛ يقبل الكاشير بطاقة ائتمانية (CreditCard) أو نقوداً ورقية (Cash)؛ فكلاهما وسيلة دفع مقبولة، ولكن لكل وسيلة طريقة معالجة مختلفة يفرزها الكاشير عند لحظة الدفع.",
      whyItMatters:
        "يلغي الحاجة لاستخدام any في الحالات المرنة التي تقبل أكثر من نوع، ويوفر نموذجاً دقيقاً يحاكي الواقع الفعلي للبيانات في تطبيقات React.",
      syntax: `// تعريف نوع اتحاد يقبل رقماً أو نصاً:
let recordIdentifier: string | number;
recordIdentifier = "USR-1049"; // صحيح
recordIdentifier = 1049;       // صحيح أيضاً

// اتحاد كائنات مختلفة:
type NetworkResponse = SuccessResult | ErrorResult;`,
      simpleExample: `// دالة تقبل معرفاً نصياً أو رقمياً وتنسقه بأمان
function formatUserId(id: string | number): string {
  // فحص النوع قبل استدعاء دوال السلاسل النصية (Type Guard)
  if (typeof id === 'string') {
    return id.toUpperCase();
  }
  // هنا تستنتج TypeScript تلقائياً أن id هو number حصراً!
  return \`ID-#\${id.toFixed(0)}\`;
}

console.log(formatUserId("emp-420")); // EMP-420
console.log(formatUserId(420));       // ID-#420`,
      advancedExample: `// اتحاد كائنات يمثل حالات استعلام الـ API (Discriminated Union Preview)
type LoadingState = {
  status: 'loading';
};
type SuccessState = {
  status: 'success';
  payload: string[];
};
type ErrorState = {
  status: 'error';
  errorMessage: string;
};

// نوع الاتحاد الجامع لكافة احتمالات الشاشة
type DashboardDataState = LoadingState | SuccessState | ErrorState;

function renderDashboardWidget(state: DashboardDataState): string {
  // فحص حقل status يحدد بدقة أي كائن نتعامل معه الآن
  switch (state.status) {
    case 'loading':
      return "⏳ جارٍ تحميل البيانات...";
    case 'success':
      // المترجم يتيح قراءة payload بأمان ويمنع errorMessage
      return \`✅ تم جلب \${state.payload.length} عناصر بنجاح\`;
    case 'error':
      // المترجم يتيح قراءة errorMessage بأمان
      return \`❌ تعذر التحميل: \${state.errorMessage}\`;
  }
}

console.log(renderDashboardWidget({ status: 'success', payload: ['مقال 1', 'مقال 2'] }));`,
      outputExplanation:
        "يوضح المثالان كيف توفر Union Types مرونة فائقة: تقبل الدالة الأولى نوعين بدائيين وتفرزهما بـ `typeof`، بينما توظف الدالة الثانية اتحاد كائنات يمثل دورة حياة الطلب؛ حيث يوجه المترجم المطور لقراءة الحقول الخاصة بكل حالة دون خوف من حدوث خطأ تشغيلي.",
      commonMistakes: [
        {
          mistake: "محاولة استدعاء دالة خاصة بنوع واحد من أطراف الاتحاد مباشرة دون تضييق (مثل استدعاء id.toUpperCase() على string | number).",
          fix: "استخدم دائماً typeof أو أدوات التحقق لفحص النوع أولاً قبل استدعاء الدوال الحصرية."
        },
        {
          mistake: "الاستسلام واستخدام any عندما تتشابك عدة أنواع محتملة بدلاً من كتابة Union Type دقيق.",
          fix: "حدد دائماً قائمة الأنواع المسموحة بـ Union Type (مثل string | number | null) لحفظ أمان النظام."
        }
      ],
      bestPractices: [
        "استخدم Union Types لتحديد الحالات المنطقية المتنافية (مثل حالات الخطوات، والأحجام 'sm' | 'md' | 'lg').",
        "استعن بحقل تمييز موحد (Discriminant Tag) مثل status أو type عند دمج عدة كائنات مختلفة في اتحاد واحد.",
        "وفر دائماً حالة افتراضية لمعالجة كافة أطراف الاتحاد بأمان تام."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "قواعد عمل أنواع الاتحاد (Union Types)",
        items: [
          {
            title: "1. المرونة في القبول",
            points: [
              "يسمح للمتغير بحمل أي قيمة تطابق أي طرف في الاتحاد",
              "المثال: type ID = string | number",
              "يقبل 'abc' أو 123 بدون أي اعتراض"
            ]
          },
          {
            title: "2. تقييد الوصول المشترك",
            points: [
              "المترجم يسمح فقط بقراءة الخصائص المشتركة بين الجميع",
              "المثال: الخصائص الموجودة في string و number معاً فقط",
              "يمنع الدوال الحصرية دون فحص مسبق"
            ]
          },
          {
            title: "3. التضييق الإلزامي (Narrowing)",
            points: [
              "استخدام typeof أو switch لفحص الحالة الفعلية",
              "بمجرد التأكد من النوع، يفتح المترجم كافة دواله الحصرية",
              "أعلى درجات الأمان البرمجي الخالي من الأعطال"
            ]
          }
        ]
      }
    },
    {
      id: "14-1-g",
      title: "الأنواع الحرفية والخيارات الصارمة (Literal Types)",
      englishTitle: "String, Numeric & Boolean Literal Types",
      pronunciation: "ليترال تايبس: سترينج، نيوميريك آند بوليان ليترال تايبس",
      meaning: "تقييد المتغير بقيم نصية أو رقمية محددة بعينها بدلاً من قبول أي نص أو رقم عام",
      description:
        "`Literal Types` (الأنواع الحرفية) هي إحدى أكثر ميزات TypeScript استخداماً في مكونات React لتحديد خيارات المظهر والأحجام والاتجاهات بدقة لا تقبل الخطأ. بدلاً من تعريف خاصية كـ `string` عام (مما يسمح بتمرير أي كلمة عشوائية)، يتيح لك النوع الحرفي حصر القيم المقبولة في نصوص محددة بعينها. عندما يتم دمج الأنواع الحرفية مع أنواع الاتحاد (Union of String Literals)، نحصل على ما يشبه القوائم المعدودة (Enums) ولكن بخفة تامة وصفر كود تشغيلي إضافي. على سبيل المثال: `type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'`. إذا حاول أي مبرمج كتابة `'primry'` بالخطأ، يضع المحرر خطاً أحمر فورياً ويقترح الكلمات الصحيحة تلقائياً.",
      analogy:
        "النوع الحرفي يشبه جهاز صراف آلي يقدم لك خيارات محددة فقط على الشاشة: [100 ر.س، 500 ر.س، 1000 ر.س]؛ مستحيل أن يقبل خياراً غير موجود بالقائمة، بخلاف ما لو كان حقل إدخال يقبل كتابة أي رقم عشوائي.",
      whyItMatters:
        "يوفر تجربة تطوير مذهلة لفرق هندسة الواجهات ومكتبات المكونات؛ فبمجرد فتح علامة التنصيص `variant=\"\"` يظهر لك المحرر قائمة بكافة الخيارات المتاحة دون الحاجة للرجوع إلى ملفات التوثيق.",
      syntax: `// تعريف نوع حرفي مدمج مع اتحاد:
type ButtonSize = 'sm' | 'md' | 'lg';
type Alignment = 'left' | 'center' | 'right';
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6; // أرقام حرفية حصراً`,
      simpleExample: `// مكون زر يستخدم أنواعاً حرفية لتقييد الخيارات
import React from 'react';

type VariantType = 'primary' | 'outline' | 'danger';

interface ActionBtnProps {
  label: string;
  variant: VariantType; // يقبل فقط هذه الكلمات الثلاث
  onClick: () => void;
}

export function ActionBtn({ label, variant, onClick }: ActionBtnProps) {
  // ربط النوع الحرفي بفئات Tailwind المقابلة
  const styleMap: Record<VariantType, string> = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-500',
    outline: 'border border-slate-700 text-slate-300 hover:bg-slate-800',
    danger: 'bg-rose-600 text-white hover:bg-rose-500'
  };

  return (
    <button onClick={onClick} className={\`px-4 py-2 rounded-lg text-xs font-bold transition-all \${styleMap[variant]}\`}>
      {label}
    </button>
  );
}`,
      advancedExample: `// استخدام الأنواع الحرفية المتقدمة لضبط أوضاع مشغل الوسائط مع exhaustive checking
type PlayerAction = 'PLAY' | 'PAUSE' | 'STOP' | 'FAST_FORWARD';

function handlePlayerCommand(action: PlayerAction): string {
  switch (action) {
    case 'PLAY':
      return "▶️ جارٍ بدء تشغيل المقطع الصوتي";
    case 'PAUSE':
      return "⏸️ تم إيقاف المقطع مؤقتاً";
    case 'STOP':
      return "⏹️ تم إيقاف المقطع وإعادة المؤشر للبداية";
    case 'FAST_FORWARD':
      return "⏩ تم تقديم المقطع بـ 15 ثانية";
    default: {
      // حيلة معمارية: نوع never يضمن في زمن التصريف أننا غطينا كافة الحالات الحرفية
      const _unhandledCase: never = action;
      throw new Error(\`أمر غير مدعوم: \${_unhandledCase}\`);
    }
  }
}

console.log(handlePlayerCommand('PLAY'));
console.log(handlePlayerCommand('FAST_FORWARD'));`,
      outputExplanation:
        "يوضح المثالان كيف تمنع Literal Types أي اجتهاد عشوائي في تمرير الخيارات لمكونات الواجهة، وكيف تضمن حيلة `const _unhandledCase: never = action` داخل بلوك `default` أن المطور لن ينسى معالجة أي كلمة حرفية مضافة مستقبلاً، حيث سيطلق المترجم خطأ فورياً إذا أضيفت حالة جديدة ولم تُعالج.",
      commonMistakes: [
        {
          mistake: "استخدام Enums التقليدية في TypeScript للمشروع بالكامل بدلاً من String Literal Unions البسيطة.",
          fix: "في معظم تطبيقات React الحديثة، يفضل مجتمع المطورين استخدام String Literal Unions (مثل 'sm' | 'md') على Enums؛ لأنها أخف وتتحول لصفر كود في JS وتعمل مباشرة مع نصوص عادية."
        },
        {
          mistake: "تعريف الخصائص كـ string عام في مكونات الواجهة بدلاً من تقييدها بأنواع حرفية.",
          fix: "استبدل أي string محدود الخيارات بأنواع حرفية صريحة لتمكين الإكمال التلقائي الذكي."
        }
      ],
      bestPractices: [
        "استخدم الأنواع الحرفية لخصائص المكونات مثل: variant, size, colorScheme, direction.",
        "ادمج الأنواع الحرفية مع كائنات المعاجم Record<LiteralType, string> لربط الخيارات بفئات CSS بسهولة وسرعة O(1).",
        "طبق فحص الشمولية (Exhaustive Check) بنوع never في جمل switch لضمان تغطية كافة الخيارات الحرفية دون سهو."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "مميزات الأنواع الحرفية (Literal Types)",
        items: [
          {
            title: "حصر الخيارات بدقة",
            points: [
              "يمنع تمرير نصوص أو أرقام عشوائية",
              "المثال: type Size = 'sm' | 'md' | 'lg'",
              "أي خطأ إملائي يُكتشف فوراً تحت المؤشر"
            ]
          },
          {
            title: "إكمال تلقائي فوري IntelliSense",
            points: [
              "المحرر يقترح الكلمات بمجرد فتح علامات التنصيص",
              "يلغي الحاجة لفتح ملفات التوثيق لمعرفة الخيارات",
              "يزيد سرعة إنتاجية المطور بنسبة كبيرة"
            ]
          },
          {
            title: "خفة متناهية وصفر كود زائد",
            points: [
              "تتحول إلى نصوص عادية في كود JavaScript النهائي",
              "تتفوق على Enums القديمة في البساطة والحجم",
              "معيار الصناعة لمكتبات المكونات الحديثة"
            ]
          }
        ]
      }
    },
    {
      id: "14-1-h",
      title: "الخصائص الاختيارية والافتراضية (Optional Properties)",
      englishTitle: "Optional Properties & Default Parameter Handling",
      pronunciation: "أوبشونال بروبرتيز آند ديفولت باراميتر هاندلينج",
      meaning: "تعريف الحقول والخصائص غير الإلزامية بعلامة الاستفهام وتوفير قيم بديلة آمنة",
      description:
        "في واجهات المستخدم ومكونات React، نادراً ما تكون كافة الخصائص (Props) إلزامية؛ فالكثير من المكونات توفر قيماً افتراضية (مثل زر بدون أيقونة، أو بطاقة بدون وصف فرعي، أو حقل إدخال بدون نص تلميحي placeholder). في TypeScript، يتم تمييز أي خاصية اختيارية بوضع علامة الاستفهام `?` مباشرة بعد اسم الخاصية (مثل `description?: string`). هذا الرمز السحري يخبر المترجم بأن هذه الخاصية تقبل نوعها المحدد أو `undefined` (`string | undefined`). يفرض هذا النظام على المطور التعامل الحذر عند استدعاء الخصائص الاختيارية، إما بتوفير قيم افتراضية أثناء التفكيك (Destructuring with Defaults)، أو باستخدام معامل التسلسل الاختياري (Optional Chaining `?.`) ومعامل الدمج الخالي (Nullish Coalescing `??`).",
      analogy:
        "الخاصية الاختيارية تشبه استمارة التسجيل في النادي؛ حقل 'الاسم' إلزامي ومطبوع بجواره نجمة حمراء (*)، بينما حقل 'رقم الهاتف الأرضي' اختياري يمكنك تركه فارغاً وسيتم قبول الاستمارة بكل ترحاب.",
      whyItMatters:
        "يمنح مكونات React مرونة عالية في الاستخدام، مع حماية الشاشات من الانهيار عند عدم تمرير خصائص ثانوية.",
      syntax: `// تعريف خاصية اختيارية بعلامة الاستفهام ?:
interface CardProps {
  title: string;        // إلزامية
  subtitle?: string;    // اختيارية (string | undefined)
  badgeCount?: number;  // اختيارية (number | undefined)
}

// توفير قيم افتراضية أثناء التفكيك:
function UserCard({ title, subtitle = 'لا يوجد وصف', badgeCount = 0 }: CardProps) { ... }`,
      simpleExample: `// مكون بطاقة مرن بخصائص اختيارية وقيم افتراضية
import React from 'react';

interface NotificationBadgeProps {
  message: string;
  count?: number;        // اختياري
  isUrgent?: boolean;    // اختياري
}

export function NotificationBadge({
  message,
  count = 1,           // قيمة افتراضية
  isUrgent = false      // قيمة افتراضية
}: NotificationBadgeProps) {
  return (
    <div className={\`p-3 rounded-xl border flex items-center justify-between \${
      isUrgent ? 'bg-rose-950 border-rose-800 text-rose-200' : 'bg-slate-900 border-slate-800 text-white'
    }\`}>
      <span className="text-xs font-semibold">{message}</span>
      <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-mono font-bold">
        {count}
      </span>
    </div>
  );
}`,
      advancedExample: `// فحص الخصائص الاختيارية المتداخلة بـ Optional Chaining الآمن
interface OrganizationDepartment {
  deptName: string;
  manager?: {
    name: string;
    officeLocation?: {
      building: string;
      floor?: number;
    };
  };
}

function printManagerLocation(dept: OrganizationDepartment): string {
  // استخدام ?. للغوص الآمن عبر المستويات الاختيارية المتعددة دون انهيار
  const building = dept.manager?.officeLocation?.building ?? 'المبنى الرئيسي العام';
  const floor = dept.manager?.officeLocation?.floor ?? 1;
  const managerName = dept.manager?.name ?? 'بدون مدير حالياً';

  return \`قسم: \${dept.deptName} | المدير: \${managerName} | الموقع: \${building} - طابق \${floor}\`;
}

// اختبار كائن بدون مدير على الإطلاق:
const designDept: OrganizationDepartment = { deptName: 'فريق تجربة المستخدم UX' };
console.log(printManagerLocation(designDept));
// النتيجة: قسم: فريق تجربة المستخدم UX | المدير: بدون مدير حالياً | الموقع: المبنى الرئيسي العام - طابق 1`,
      outputExplanation:
        "يوضح المثالان كيف تتيح علامة `?` تعريف خصائص مرنة، وكيف يتعاون معاملا `?.` و `??` مع نظام TypeScript لضمان الغوص في أعماق الكائنات المتداخلة بأمان مطلق حتى لو كانت الخصائص مفقودة أو غير معينة.",
      commonMistakes: [
        {
          mistake: "محاولة قراءة دوال من خاصية اختيارية دون فحص (مثل: props.subtitle.trim()) والتعرض لخطأ Object is possibly 'undefined'.",
          fix: "استخدم التسلسل الاختياري دائماً props.subtitle?.trim() أو وفر قيمة افتراضية عند التفكيك: { subtitle = '' }."
        },
        {
          mistake: "الخلط بين الخاصية الاختيارية (subtitle?: string) والخاصية التي تقبل null صراحة (subtitle: string | null).",
          fix: "الخاصية الاختيارية تعني إمكانية عدم تمرير الحقل نهائياً (undefined)، بينما string | null تفرض تمرير الحقل مع إمكانية إسناد قيمة null له."
        }
      ],
      bestPractices: [
        "وفر دائماً قيماً افتراضية للخصائص الاختيارية أثناء تفكيك الـ Props في مكونات React.",
        "اجعل الخصائص الاختيارية تقع في نهاية قائمة المعاملات في الدوال العادية.",
        "استغل معامل الدمج الخالي (??) بدلاً من (||) عند التعامل مع الأرقام والقيم المنطقية الاختيارية لكي لا تتجاهل 0 أو false."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "التعامل الآمن مع الخصائص الاختيارية (Optional Properties)",
        items: [
          {
            title: "1. علامة الاستفهام (?:)",
            points: [
              "توضع بعد اسم الخاصية في العقد",
              "المكافئ: Type | undefined",
              "تتيح للمستهلك عدم تمرير الخاصية تماماً"
            ]
          },
          {
            title: "2. القيم الافتراضية (Defaults)",
            points: [
              "تُعين أثناء تفكيك الخصائص: { size = 'md' }",
              "تضمن وجود قيمة حقيقية طوال عمل المكون",
              "تلغي الحاجة للفحص المتكرر لـ undefined"
            ]
          },
          {
            title: "3. التسلسل الاختياري (Optional Chaining)",
            points: [
              "استخدام ?. للوصول للخصائص المتداخلة",
              "يوقف التنفيذ ويعيد undefined فوراً إذا كان المسار مقطوعاً",
              "يمنع خطأ TypeError: Cannot read property"
            ]
          }
        ]
      }
    },
    {
      id: "14-1-i",
      title: "البرمجة المعممة والقوالب العامة (Generics)",
      englishTitle: "Generics: Building Reusable, Type-Safe Components & Functions",
      pronunciation: "جينيريكس: بيلدينج ريوزابل تايب سيف كومبوننتس آند فنكشنز",
      meaning: "إنشاء دوال ومكونات وواجهات تقبل أنواعاً كمعاملات متغيرة مع الحفاظ على الأمان النمطي الكامل",
      description:
        "`Generics` (الأنواع المعممة أو القوالب العامة) هي القوة الأعظم في TypeScript التي تمكن المطورين من بناء كود فائق المرونة وقابل لإعادة الاستخدام مع أنواع بيانات متعددة دون التضحية بذرة واحدة من أمان الأنواع. بدلاً من تثبيت نوع محدد (مثل `number` فقط) أو الاستسلام لنوع `any` العشوائي الذي يفقدنا كل حماية، تتيح لك Generics تمرير 'متغير يمثل النوع' يُرمز له عادة بالحرف `<T>` (اختصار لـ Type). عندما يستدعي المطور دالة معممة ويمرر لها مصفوفة مستخدمين، تلتقط TypeScript تلقائياً أن `T` هو `User`، وتضمن أن القيمة المرتجعة ستكون من نوع `User` بدقة. في عالم React، تشكل الـ Generics العمود الفقري لخطافات مثل `useState<T>()`, وخطافات React Query مثل `useQuery<TData>()`، ومكونات القوائم والجداول العامة (Generic Table Components).",
      analogy:
        "الـ Generic يشبه قالباً لصب الحلوى؛ القالب نفسه لا يحتوي على حلوى، بل يحدد الشكل الهندسي فقط؛ فإذا صببت فيه شوكولاتة ذائبة (T = Chocolate) يخرج لك قالب شوكولاتة متماسك، وإذا صببت فيه عصير توت مجمد (T = Berry) يخرج لك قالب توت بنفس الدقة ودون أن يختلط الطعمان.",
      whyItMatters:
        "تمكنك Generics من بناء مكتبات ومكونات عامة (مثل الجداول، ومحركات البحث، ومحولات الـ API) تعمل مع أي نوع بيانات مستقبلي دون تكرار الكود ودون فقدان الإكمال التلقائي الذكي.",
      syntax: `// دالة معممة تستقبل نوعاً متغيراً <T>:
function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}

// المترجم يستنتج نوع T تلقائياً بناءً على المدخل:
const firstNumber = getFirstItem([10, 20, 30]); // T = number
const firstString = getFirstItem(['a', 'b', 'c']); // T = string`,
      simpleExample: `// واجهة استجابة خادم عامة تطبق معيار Generics
interface ApiResponse<TData> {
  statusCode: number;
  message: string;
  data: TData; // البيانات متغيرة النوع حسب كل استدعاء
  timestamp: string;
}

// تطبيق الواجهة مع نوع المستخدم
interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  statusCode: 200,
  message: 'تم جلب البيانات بنجاح',
  data: { id: 101, name: 'أحمد السعيد' },
  timestamp: new Date().toISOString()
};

console.log("اسم المستخدم المسترجع بأمان:", userResponse.data.name);`,
      advancedExample: `// بناء مكون قائمة عام في React يستقبل مصفوفة من أي نوع ويعرضها بأمان
import React from 'react';

// واجهة خصائص مكون القائمة المعمم <T>
interface GenericListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
  emptyMessage?: string;
}

// مكون معمم يقبل أي نوع بيانات
export function GenericList<T>({
  items,
  renderItem,
  keyExtractor,
  emptyMessage = 'لا توجد بيانات متاحة حالياً.'
}: GenericListProps<T>) {
  if (items.length === 0) {
    return <p className="text-xs text-slate-500 py-4 text-center">{emptyMessage}</p>;
  }

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={keyExtractor(item)} className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}

// ================= استخدام المكون العام مع أنواع مختلفة =================
type Product = { sku: string; title: string; price: number };

export function CatalogConsumer() {
  const products: Product[] = [
    { sku: 'P-101', title: 'شاشة ألعاب 144Hz', price: 1200 },
    { sku: 'P-102', title: 'سماعة رأس احترافية', price: 450 }
  ];

  return (
    <GenericList<Product>
      items={products}
      keyExtractor={(p) => p.sku}
      renderItem={(p) => (
        <div className="flex justify-between items-center text-xs text-white">
          <span className="font-bold">{p.title}</span>
          <span className="text-emerald-400 font-mono">{p.price} ر.س</span>
        </div>
      )}
    />
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم قمة قوة الـ Generics في React: مكون `GenericList<T>` لا يعلم مسبقاً هل سيعرض منتجات أو مقالات أو مستخدمين، ومع ذلك، عندما استهلكناه مع `Product`، استنتجت TypeScript تلقائياً أن المعامل `p` داخل `renderItem` يمتلك خصائص `title` و `price` و `sku` مع فحص دقيق وإكمال تلقائي كامل.",
      commonMistakes: [
        {
          mistake: "الإفراط في استخدام Generics في كل دالة صغيرة حتى عندما يكون النوع معلوماً وثابتاً ولا يتغير.",
          fix: "استخدم Generics فقط عندما يكون هناك ارتباط وتطابق حقيقي بين أنواع المدخلات وأنواع المخرجات في أكثر من سياق."
        },
        {
          mistake: "استخدام أسماء غامضة ومربكة لمتغيرات الـ Generics عند وجود أكثر من نوع.",
          fix: "اتبع التسميات القياسية: T (Type), K (Key), V (Value), E (Element), أو أسماء واضحة مثل TData, TError."
        }
      ],
      bestPractices: [
        "قيد الـ Generics باستخدام extends عندما تحتاج لضمان وجود خصائص معينة (مثل: <T extends { id: string | number }>).",
        "وفر قيماً افتراضية للـ Generic عند الحاجة: interface ApiResponse<TData = unknown>.",
        "استغل استنتاج الأنواع التلقائي عند استدعاء الدوال المعممة ودع TypeScript تخمن T بدلاً من كتابتها يدوياً ما لم تكن مضطراً."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "فلسفة البرمجة المعممة (Generics)",
        items: [
          {
            title: "المتغير النمطي <T>",
            points: [
              "يمثل نوعاً مجهولاً وقت كتابة الكود",
              "يتم التقاطه وتثبيته وقت الاستدعاء الفعلي",
              "يحافظ على الرابط الوثيق بين المدخلات والمخرجات"
            ]
          },
          {
            title: "التقييد النمطي (Constraints)",
            points: [
              "استخدام <T extends BaseInterface>",
              "يضمن أن النوع المتغير يمتلك خصائص معينة كحد أدنى",
              "يجمع بين مرونة الـ Generic ودقة المتطلبات"
            ]
          },
          {
            title: "المكونات المعممة في React",
            points: [
              "بناء جداول وقوائم ونماذج عامة لأي كائن",
              "إكمال تلقائي كامل داخل دوال العرض renderItem",
              "معيار بناء أنظمة التصميم الاحترافية"
            ]
          }
        ]
      }
    },
    {
      id: "14-1-j",
      title: "تضييق وتدقيق الأنواع (Type Narrowing & Type Guards)",
      englishTitle: "Type Narrowing, Type Guards & Exhaustive Checks",
      pronunciation: "تايب ناروينج، تايب جاردز آند إكزوستيف تشيكس",
      meaning: "التقنيات المنطقية لتضييق مساحة الأنواع العامة إلى نوع دقيق محدد داخل كتل الشروط",
      description:
        "`Type Narrowing` (تضييق الأنواع) هو العملية الذكية التي تقوم خلالها TypeScript بتحليل كود التحقق المنطقي والشرطي الذي تكتبه في JavaScript، لتقوم تلقائياً بتضييق نطاق نوع المتغير من نوع واسع (مثل `string | number | null`) إلى نوع دقيق ومحدد داخل كتلة الشرط. توفر TypeScript ترسانة من 'حراس الأنواع' (Type Guards): 1) `typeof`: لفحص الأنواع البدائية (`typeof val === 'string'`), 2) `instanceof`: لفحص الكائنات المشتقة من فئات (مثل `err instanceof Error`), 3) عامل الفحص `in`: للتحقق من وجود خاصية معينة داخل الكائن (`'email' in contact`), 4) حراس الأنواع المخصصين (User-Defined Type Guards) باستخدام صيغة الإسناد `val is TargetType`، 5) فحص الشمولية التام (Exhaustiveness Checking) بنوع `never` للتأكد من تغطية كافة الحالات المحتملة.",
      analogy:
        "تضييق الأنواع يشبه قمع التصفية في المختبر؛ تدخل إليه سائلاً مختلطاً غير نقي (Union Type)، ثم تمرره عبر عدة فلاتر متتالية (Type Guards)؛ فبعد الفلتر الأول تتأكد أنه ماء نقي، وبعد الفلتر الثاني تستخرج الزيت بمفرده وتتعامل مع كل عنصر بخصائصه الكيميائية المستقلة.",
      whyItMatters:
        "يحول دون حدوث أكثر من 90% من استثناءات JavaScript الشهيرة أثناء التشغيل، ويمنحك ثقة مطلقة بأن الكائن الذي تتعامل معه يمتلك الحقول والدوال المطلوبة في تلك اللحظة.",
      syntax: `// 1. تضييق بالنوع typeof:
if (typeof val === 'string') { val.toUpperCase(); }

// 2. حارس نوع مخصص (Custom Type Guard):
function isApiResponseError(res: any): res is ApiError {
  return typeof res === 'object' && res !== null && 'errorCode' in res;
}`,
      simpleExample: `// مثال على تضييق مدخلات دالة تعالج التواريخ
function parseEventDate(input: string | Date | number): string {
  // 1. فحص هل هو كائن Date حقيقي
  if (input instanceof Date) {
    return input.toLocaleDateString('ar-SA');
  }

  // 2. فحص هل هو رقم طابع زمني Timestamp
  if (typeof input === 'number') {
    return new Date(input).toLocaleDateString('ar-SA');
  }

  // 3. المترجم يستنتج هنا تلقائياً وبثقة 100% أن input هو string حصراً!
  return new Date(input).toLocaleDateString('ar-SA');
}

console.log(parseEventDate(new Date()));
console.log(parseEventDate(Date.now()));
console.log(parseEventDate("2026-10-29"));`,
      advancedExample: `// بناء حارس نوع مخصص (User-Defined Type Guard) لفحص أخطاء الشبكة بأمان
interface HttpNetworkError {
  isNetworkError: true;
  statusCode: number;
  technicalMessage: string;
}

// دالة حراسة تعيد إسناد نوعي (target is HttpNetworkError)
function isHttpNetworkError(candidate: unknown): candidate is HttpNetworkError {
  return (
    typeof candidate === 'object' &&
    candidate !== null &&
    'isNetworkError' in candidate &&
    (candidate as Record<string, unknown>).isNetworkError === true
  );
}

// دالة معالجة الأخطاء في تطبيق React
function handleAppException(errorCandidate: unknown): string {
  // فحص استثنائي باستخدام حارس النوع المخصص
  if (isHttpNetworkError(errorCandidate)) {
    // هنا داخل البلوك، تتيح TypeScript قراءة statusCode و technicalMessage بأمان كامل!
    return \`خطأ شبكة [#\${errorCandidate.statusCode}]: \${errorCandidate.technicalMessage}\`;
  }

  // فحص أخطاء JavaScript القياسية
  if (errorCandidate instanceof Error) {
    return \`خطأ عام: \${errorCandidate.message}\`;
  }

  return "حدث خطأ غير معروف ومبهم في النظام.";
}

console.log(handleAppException({ isNetworkError: true, statusCode: 503, technicalMessage: 'الخادم تحت الصيانة' }));
console.log(handleAppException(new Error('فقدان الذاكرة العشوائية')));`,
      outputExplanation:
        "يوضح المثال المتقدم قوة حراس الأنواع المخصصين: دالة `candidate is HttpNetworkError` تأخذ متغيراً غامضاً من نوع `unknown`، وبمجرد اجتيازه للفحص المنطقي، يتحول المتغير تلقائياً داخل كتلة `if` إلى نوع `HttpNetworkError` بكل خصائصه الموثقة.",
      commonMistakes: [
        {
          mistake: "محاولة استخدام typeof للتحقق من كائنات أو مصفوفات وتوقع نتيجة مثل 'array' أو 'user'.",
          fix: "تذكر أن typeof في JS تُرجع 'object' لكل من الكائنات والمصفوفات و null؛ استخدم Array.isArray(val) للمصفوفات و in أو instanceof للكائنات."
        },
        {
          mistake: "استخدام التحويل القسري (Type Assertion: as MyType) بدلاً من الفحص الحقيقي بـ Type Guard.",
          fix: "التحويل بـ as يسكت المترجم فقط دون فحص حقيقي في المتصفح؛ استخدم Type Guards للتحقق الفعلي أثناء التشغيل."
        }
      ],
      bestPractices: [
        "اعتمد على Discriminated Unions بحقل تمييز موحد (مثل status) كلما أمكن ذلك؛ فهي أسهل وأسرع طريقة للتضييق.",
        "ابنِ حراس أنواع مخصصين (isType) لمعالجة البيانات القادمة من الخارج (APIs) لتأكيد صحتها قبل استخدامها.",
        "استغل كتلة default مع المتغير : never لضمان تغطية كافة الحالات المحتملة دون إغفال أي احتمال."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "ترسانة حراس الأنواع (Type Guards)",
        items: [
          {
            title: "typeof",
            points: [
              "فحص الأنواع البدائية البسيطة",
              "المطابقة مع: 'string', 'number', 'boolean'",
              "الأسرع والأخف في الشروط البسيطة"
            ]
          },
          {
            title: "instanceof",
            points: [
              "فحص الكائنات المشتقة من فئات Classes",
              "المطابقة مع: Date, Error, RegExp, HTMLElement",
              "يتتبع سلسلة الوراثة Prototype Chain"
            ]
          },
          {
            title: "عامل 'in' والحراس المخصصين",
            points: [
              "فحص وجود خاصية: 'id' in obj",
              "حراس مخصصون: fn(x): x is CustomType",
              "أقوى وسيلة لتأكيد كائنات الـ API الخارجية"
            ]
          }
        ]
      }
    },
    {
      id: "14-1-k",
      title: "أدوات الأنواع المساعدة الجاهزة (Utility Types)",
      englishTitle: "Core Utility Types: Partial, Pick, Omit, Record & ReturnType",
      pronunciation: "كور يوتيليتي تايبس: بارشيال، بيك، أوميت، ريكورد آند ريتيرن تايب",
      meaning: "الأدوات السحرية الجاهزة في تايب سكريبت لتحويل وتعديل واشتقاق الأنواع دون تكرار",
      description:
        "توفر TypeScript ترسانة من 'الأنواع المساعدة الجاهزة' (Utility Types) التي تتيح تحويل واشتقاق أنواع جديدة من أنواع موجودة سلفاً دون الحاجة لإعادة كتابتها يدوياً. من أهم وأشهر هذه الأدوات التي يستخدمها مطورو React يومياً: 1) `Partial<T>`: يحول كافة خصائص النوع إلى خصائص اختيارية (ممتاز لنماذج التعديل الجزئي PATCH)، 2) `Required<T>`: العكس تماماً، يحول كافة الخصائص إلى إلزامية، 3) `Readonly<T>`: يجعل كافة الخصائص للقراءة فقط ويمنع تعديلها، 4) `Pick<T, K>`: يختار ويستخرج خصائص محددة فقط من نوع كبير، 5) `Omit<T, K>`: يستبعد ويحذف خصائص محددة ويبقي على الباقي، 6) `Record<K, T>`: ينشئ كائن خريطة بروابط محددة بين المفاتيح والقيم، 7) `ReturnType<T>`: يستخرج نوع القيمة المرتجعة من دالة معينة تلقائياً.",
      analogy:
        "أدوات Utility Types تشبه أدوات تعديل الصور (Photoshop)؛ لديك الصورة الأصلية الكاملة (النوع الأصلي)، يمكنك اقتصاص جزء منها (Pick)، أو إخفاء عنصر معين (Omit)، أو جعلها شفافة واختيارية (Partial)، دون أن تضطر لإعادة رسم الصورة من الصفر.",
      whyItMatters:
        "تمنع تكرار كتابة الكود النمطي (DRY في مستوى الأنواع)، وتضمن أن تعديل أي حقل في النوع الرئيسي سينعكس تلقائياً وفوراً على كافة الأنواع المشتقة منه.",
      syntax: `// 1. Partial: جعل كل الخصائص اختيارية:
type UserUpdatePayload = Partial<User>;

// 2. Pick: استخراج خصائص معينة:
type UserSummary = Pick<User, 'id' | 'name'>;

// 3. Omit: استبعاد خصائص معينة:
type UserWithoutPassword = Omit<User, 'passwordHash'>;

// 4. Record: كائن معجمي بروابط مفاتيح محددة:
type RolesDirectory = Record<'admin' | 'editor', User[]>;`,
      simpleExample: `// مثال يوضح استخدام Partial لتحديث بيانات الملف الشخصي
interface FullUserProfile {
  id: number;
  fullName: string;
  email: string;
  avatarUrl: string;
  bio: string;
}

// استخدام Partial لنموذج التعديل؛ حيث يمكن للمستخدم تعديل حقل واحد فقط دون إرسال البقية
type EditProfileDto = Partial<FullUserProfile>;

function updateProfileApi(userId: number, updates: EditProfileDto) {
  console.log(\`تحديث المستخدم رقم \${userId} بالحقول الممررة:\`, updates);
}

// يمكن تمرير bio فقط، أو email فقط، بأمان تام:
updateProfileApi(101, { bio: "مهندس واجهات شغوف بـ React و TS" });`,
      advancedExample: `// توظيف متقدم لـ Omit و Pick و ReturnType في هندسة مكونات React
interface BaseButtonProps {
  id: string;
  title: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
  isDisabled: boolean;
  internalTrackingId: string; // خاصية داخلية لا نريد كشفها للمستهلك الخارجي
}

// 1. استبعاد المعرف الداخلي عبر Omit
type PublicButtonProps = Omit<BaseButtonProps, 'internalTrackingId'>;

// 2. استخراج خصائص النقر والحالة فقط عبر Pick
type InteractiveStateProps = Pick<BaseButtonProps, 'onClick' | 'isDisabled'>;

// 3. استخراج نوع القيمة المرتجعة من خطاف مخصص تلقائياً عبر ReturnType
function useThemeEngine() {
  return {
    mode: 'dark' as const,
    toggleMode: () => console.log('Toggled'),
    activeColors: ['#0f172a', '#3b82f6']
  };
}

// استخراج نوع الكائن المرتجع من الخطاف دون كتابته يدوياً!
type ThemeEngineReturn = ReturnType<typeof useThemeEngine>;

const themeState: ThemeEngineReturn = {
  mode: 'dark',
  toggleMode: () => {},
  activeColors: ['#000', '#fff']
};

console.log("استخرجنا النوع بنجاح بـ ReturnType:", themeState.mode);`,
      outputExplanation:
        "يوضح المثال المتقدم كيف تسمح أدوات `Omit` و `Pick` بصياغة أنواع مشتقة بالغة الدقة تحذف الحقول الحساسة، وكيف تتيح أداة `ReturnType<typeof useThemeEngine>` استخراج كائن مخرجات الخطافات المخصصة تلقائياً لمشاركته عبر شاشات التطبيق دون كتابته مرتين.",
      commonMistakes: [
        {
          mistake: "محاولة استخدام Omit أو Pick بتمرير مصفوفة مثل Omit<User, ['password']> بدلاً من مفاتيح نصية مفردة أو متحدة بـ |.",
          fix: "المعامل الثاني في Pick و Omit يقبل Union من أسماء المفاتيح: Omit<User, 'password' | 'salt'> وليس مصفوفة."
        },
        {
          mistake: "إعادة تعريف نوع مشابه يدوياً بنسخ ولصق 90% من حقوله بدلاً من اشتقاقه بـ Pick أو Omit.",
          fix: "اعتمد دائماً على مصدر حقيقة واحد واشتق الأنواع التابعة بأدوات Utility Types لمنع تناقض الحقول عند التعديل."
        }
      ],
      bestPractices: [
        "استخدم Partial<T> دائماً لدوال وطلبات التعديل الجزئي (PATCH endpoints).",
        "استخدم Record<Keys, Value> بدلاً من تعريف كائنات عشوائية مثل { [key: string]: any } للحفاظ على صرامة المفاتيح.",
        "استخدم ReturnType<typeof myHook> عندما تريد توثيق واستخراج مخرجات خطاف مخصص دون الحاجة لإنشاء interface منفصل يدوياً."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "خارطة أهم أدوات Utility Types في التطوير اليومي",
        items: [
          {
            title: "Partial<T> & Required<T>",
            points: [
              "Partial: تحويل كافة الحقول إلى اختيارية (?:)",
              "Required: إجبار كافة الحقول على أن تصبح إلزامية",
              "الملاءمة: نماذج التعديل وحفظ المسودات"
            ]
          },
          {
            title: "Pick<T, K> & Omit<T, K>",
            points: [
              "Pick: اختيار حقول محددة بعينها واستخراجها",
              "Omit: حذف واستبعاد حقول محددة وإبقاء البقية",
              "الملاءمة: تصفية كائنات الـ API وحماية الحقول الحساسة"
            ]
          },
          {
            title: "Record<K, T> & ReturnType<F>",
            points: [
              "Record: بناء قواميس ومعاجم مفهرسة بالمفاتيح",
              "ReturnType: استخراج نوع مخرجات أي دالة تلقائياً",
              "الملاءمة: جداول التنسيق ومخرجات الـ Custom Hooks"
            ]
          }
        ]
      }
    },
    {
      id: "14-1-l",
      title: "التعامل مع unknown و never وتجنب مخاطر any",
      englishTitle: "Safety with unknown & never vs Escaping with any",
      pronunciation: "سيفتي وذ أنون آند نيفر فيرسس إسكيبنج وذ إني",
      meaning: "الالتزام الصارم بسلامة الأنواع وفهم البدائل الآمنة للمتغيرات مجهولة المصدر",
      description:
        "في مجتمع مطوري TypeScript، يُطلق على استخدام نوع `any` وصف 'الخطيئة الكبرى' (The Escape Hatch)؛ لأن استخدام `any` يعطل محرك فحص الأنواع بالكامل للمتغير، مما يعيدك حرفياً إلى فوضى JavaScript الصرفة ويلغي كافة فوائد الأمان والإكمال الذكي. لحل معضلة التعامل مع البيانات مجهولة المصدر (مثل استجابات الـ API، أو كائنات JSON المحولة من LocalStorage)، قدمت TypeScript النوع الآمن `unknown`. نوع `unknown` يقبل أي قيمة في الوجود مثله مثل `any`، ولكنه يتميز بقاعدة أمان حديدية: 'يُحظر عليك استدعاء أي خاصية أو دالة منه حتى تثبت للمترجم نوعه الحقيقي عبر Type Narrowing'. أما نوع `never`، فهو النوع الذي يمثل 'استحالة الحدوث' برمجياً (مثل دالة تطلق استثناءً دائماً throw Error، أو حلقة لا نهائية، أو القيمة المتبقية بعد استنفاد كافة خيارات الـ switch)، ويُستخدم كأداة عبقرية للتحقق من الشمولية التامة (Exhaustiveness Check).",
      analogy:
        "نوع `any` يشبه شخصاً يفتح باب منزله لأي غريب دون حتى أن ينظر في العين السحرية للباب. أما نوع `unknown` فيشبه حارس أمن محترف يرى أن هناك شخصاً يقف أمام الباب، ولكنه يرفض إدخاله أو تسليمه أي شيء حتى يطلب منه إبراز هويته الرسمية وفحصها بدقة (Type Guard).",
      whyItMatters:
        "تجنب any واستبدالها بـ unknown يحمي التطبيق من أخطاء الانهيار غير المتوقعة الناتجة عن بيانات الـ API المشوهة، ويضمن أن كود TypeScript يظل صلباً ومحمياً بنسبة 100%.",
      syntax: `// خطر any (تعطيل كامل للفحص):
let unsafeVar: any = 10;
unsafeVar.toUpperCase(); // ينهار التطبيق أثناء التشغيل!

// أمان unknown (إلزام بالفحص المسبق):
let safeVar: unknown = "نص مجهول";
// safeVar.toUpperCase(); // خطأ فوري في المحرر: Object is of type 'unknown'
if (typeof safeVar === 'string') {
  safeVar.toUpperCase(); // آمن ومسموح بعد التحقق!
}`,
      simpleExample: `// قراءة آمنة لبيانات LocalStorage باستخدام unknown بدلاً من any
function safeParseJson(jsonString: string): unknown {
  try {
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
}

const rawData = safeParseJson('{"name": "سارة", "score": 100}');

// المترجم يمنع قراءة rawData.name مباشرة لأنها unknown
// يجب أولاً التحقق من أنها كائن سليم:
if (typeof rawData === 'object' && rawData !== null && 'name' in rawData) {
  console.log("الاسم المستخرج بأمان:", (rawData as { name: string }).name);
}`,
      advancedExample: `// توظيف نوع never في التحقق الشامل من الشمولية لمنع نسيان أي حالة (Exhaustive Testing)
type SystemEnvironment = 'development' | 'staging' | 'production';

function getApiEndpoint(env: SystemEnvironment): string {
  switch (env) {
    case 'development':
      return 'http://localhost:3000/api';
    case 'staging':
      return 'https://staging.cloud.com/api';
    case 'production':
      return 'https://api.cloud.com';
    default: {
      // إذا أضاف مطور مستقبلاً بيئة جديدة مثل 'testing' إلى SystemEnvironment
      // ولم يضف لها case هنا، سيضع المترجم خطاً أحمر فورياً تحت _unreachable!
      const _unreachable: never = env;
      throw new Error(\`بيئة غير معروفة تم تمريرها: \${_unreachable}\`);
    }
  }
}

console.log("رابط الإنتاج:", getApiEndpoint('production'));`,
      outputExplanation:
        "يوضح المثال المتقدم كيف يمثل `never` قمة الأمان الإنشائي؛ فبفضل تعيين `const _unreachable: never = env`، يضمن المترجم أن كل احتمال ممكن لـ `SystemEnvironment` قد تمت معالجته، فإذا نسي المطور أي خيار، سيعترض المترجم فوراً ويمنع خروج التطبيق إلى الإنتاج.",
      commonMistakes: [
        {
          mistake: "استخدام any كحل سريع وكسول للتخلص من رسائل الأخطاء في الكود.",
          fix: "استبدل any بنوع unknown واكتب حارس نوع Type Guard بسيط للتأكد من بنية البيانات."
        },
        {
          mistake: "تعطيل قاعدة noImplicitAny في ملف tsconfig.json، مما يسمح للأنواع بالتحول إلى any ضمنياً دون علمك.",
          fix: "حافظ على تفعيل strict: true و noImplicitAny: true لضمان بقاء النظام متماسكاً وخالياً من الثغرات."
        }
      ],
      bestPractices: [
        "ضع في اعتبارك أن 'unknown هو any الآمن والمحترم'؛ فاستخدمه دائماً للبيانات القادمة من JSON.parse أو الـ APIs الخارجية.",
        "استغل نوع never في كتل default لضمان شمولية فحص كافة خيارات الاتحادات (Exhaustive Checks).",
        "إذا اضطررت استثنائياً للتعامل مع مكتبة قديمة غير نمطية، اعزل استخدام any في ملف محول (Adapter) واحد ولا تدعها تتسرب لبقية التطبيق."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "المقارنة الثلاثية: any مقابل unknown مقابل never",
        items: [
          {
            title: "any (الخطر المطلق)",
            points: [
              "تعطيل كامل لفحص وحماية TypeScript",
              "يسمح باستدعاء أي دالة أو خاصية وهمية",
              "يعيد التطبيق لفوضى أخطاء الانهيار أثناء التشغيل"
            ]
          },
          {
            title: "unknown (البديل الآمن)",
            points: [
              "يقبل أي قيمة مجهولة المصدر",
              "يحظر استدعاء أي خاصية دون فحص مسبق (Narrowing)",
              "المعيار الأفضل لمدخلات الـ API والـ JSON"
            ]
          },
          {
            title: "never (استحالة الحدوث)",
            points: [
              "يمثل القيم التي لا يمكن أن تقع أبداً",
              "ينتج عن الدوال التي تطلق استثناءات مستمرة",
              "حارس الشمولية التامة (Exhaustiveness Check) في switch"
            ]
          }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q14-1-1",
      question: "ما هو الفارق الجوهري بين نوع any ونوع unknown في TypeScript؟",
      options: [
        "any يعمل فقط مع الأرقام بينما unknown يعمل مع النصوص",
        "any يعطل فحص الأنواع تماماً ويسمح بأي استدعاء، بينما unknown يجبرك على التحقق وتضييق النوع (Type Narrowing) قبل استخدام أي خاصية",
        "unknown تم حذفه في الإصدارات الحديثة لـ TypeScript",
        "لا يوجد فرق بينهما وهما اسمان لنفس النوع"
      ],
      correctAnswer: 1,
      explanation:
        "نوع any يعطل فحص المترجم تماماً ويسمح باستدعاء خصائص قد لا تكون موجودة مسبباً انهيار التطبيق، بينما unknown يقبل أي قيمة ولكنه يمنع استخدامها أو استدعاء دوالها حتى تثبت للمترجم نوعها الحقيقي عبر Type Narrowing."
    },
    {
      id: "q14-1-2",
      question: "ما هي الميزة الحصرية التي تمتلكها interface ولا يمكن لـ type alias القيام بها؟",
      options: [
        "دعم الأرقام والنصوص",
        "دمج الإعلانات التلقائي (Declaration Merging) عند تعريف نفس الاسم في ملفات متعددة",
        "تعريف مصفوفات الـ Tuples",
        "العمل داخل مكونات React"
      ],
      correctAnswer: 1,
      explanation:
        "الميزة الحصرية لـ interface هي Declaration Merging؛ حيث يمكن كتابة interface بنفس الاسم عدة مرات ويقوم المترجم بدمج خصائصها تلقائياً، بينما تكرار تعريف type alias يطلق خطأ برمجياً صريحاً يمنع تكرار المعرف."
    },
    {
      id: "q14-1-3",
      question: "ماذا تفعل أداة Partial<T> المدمجة في TypeScript؟",
      options: [
        "تحذف كافة خصائص الكائن",
        "تحول كافة خصائص النوع T إلى خصائص اختيارية (مسبوقة بـ ?)",
        "تجعل كافة الخصائص للقراءة فقط وتمنع تعديلها",
        "تحول الكائن إلى مصفوفة نصوص"
      ],
      correctAnswer: 1,
      explanation:
        "Partial<T> هي أداة مساعدة تقوم بالمرور على كافة خصائص النوع T وجعلها اختيارية (Optional)، وهي ممتازة لعمليات التحديث الجزئي وتعديل البيانات حيث لا يُشترط إرسال كامل الكائن."
    }
  ],
  exercise: {
    title: "تمرين تطبيقي: بناء واجهة بطاقة منتج متوافقة نمطياً مع فحص الشمولية",
    instruction:
      "قم بكتابة تعريفات TypeScript الصارمة لبيانات منتج تقني، تتضمن نوعاً حرفياً لحالة التوفر ('in_stock' | 'out_of_stock' | 'preorder')، واستخدم دالة فحص وتضييق تضمن إرجاع شارة الحالة المناسبة لكل نوع بدقة مع استخدام never لفحص الشمولية.",
    starterCode: `// TODO: 1. عرّف نوعاً حرفياً AvailabilityStatus يقبل: 'in_stock' | 'out_of_stock' | 'preorder'

// TODO: 2. عرّف interface باسم ProductItem يحتوي على:
// - id: رقم أو نص (Union)
// - title: نص
// - price: رقم
// - status: من نوع AvailabilityStatus
// - discountPercentage: رقم اختياري

// TODO: 3. اكتب دالة getStatusBadgeText(status: AvailabilityStatus): string
// تستخدم switch لمعالجة الحالات الثلاث مع block default يطبق Exhaustive Check بنوع never`,
    hints: [
      "استخدم: type AvailabilityStatus = 'in_stock' | 'out_of_stock' | 'preorder';",
      "استخدم: id: string | number و discountPercentage?: number;",
      "في بلوك default: const _exhaustiveCheck: never = status; throw new Error(...);"
    ],
    solutionCode: `// 1. تعريف النوع الحرفي للحالات المحددة
export type AvailabilityStatus = 'in_stock' | 'out_of_stock' | 'preorder';

// 2. تعريف واجهة المنتج المتكاملة
export interface ProductItem {
  id: string | number;
  title: string;
  price: number;
  status: AvailabilityStatus;
  discountPercentage?: number; // خاصية اختيارية
}

// 3. دالة فحص وتنسيق الشارات مع فحص الشمولية بنوع never
export function getStatusBadgeText(status: AvailabilityStatus): string {
  switch (status) {
    case 'in_stock':
      return 'متوفر بالمخزون للتسليم الفوري ✅';
    case 'out_of_stock':
      return 'نفد مؤقتاً من المخزون ❌';
    case 'preorder':
      return 'متاح للحجز المسبق ⏳';
    default: {
      // حارس الشمولية: المترجم يتأكد هنا أن كل قيمة ممكنة لـ AvailabilityStatus تمت معالجتها!
      const _exhaustiveCheck: never = status;
      throw new Error(\`حالة توفر غير مدعومة: \${_exhaustiveCheck}\`);
    }
  }
}

// تجربة استخدام الكود المطابق
const sampleProduct: ProductItem = {
  id: 'SKU-9921',
  title: 'حاسوب محمول فائق الأداء M3 Max',
  price: 8500,
  status: 'in_stock',
  discountPercentage: 10
};

console.log(sampleProduct.title);
console.log(getStatusBadgeText(sampleProduct.status));`
  },
  infographic: {
    title: "خارطة أساسيات TypeScript لمنظومة React",
    description: "الدليل التأسيسي الشامل لاحتراف نظام الأنواع الثابتة والعقود النمطية في تطبيقات React.",
    elements: [
      {
        title: "1. الأنواع واللبنات الأساسية",
        subtitle: "Primitives, Arrays & Tuples",
        badge: "حجر الأساس",
        color: "blue",
        details: [
          "الأنواع البدائية: string, number, boolean, null, undefined",
          "المصفوفات: T[] للمجموعات غير المحدودة",
          "الـ Tuples: [T1, T2] لمصفوفات المواقع الثابتة كـ useState"
        ]
      },
      {
        title: "2. العقود وهندسة الكائنات",
        subtitle: "interface vs type alias",
        badge: "صياغة الهياكل",
        color: "purple",
        details: [
          "interface: الأفضل للـ Props والتوسيع بـ extends ودمج الإعلانات",
          "type: الأفضل للاتحادات (Unions) والعمليات المعقدة والـ Tuples",
          "الخصائص الاختيارية: subtitle?: string للبيانات المرنة"
        ]
      },
      {
        title: "3. المرونة المعممة والتضييق",
        subtitle: "Generics & Type Narrowing",
        badge: "القوة المعمارية",
        color: "emerald",
        details: [
          "Generics <T>: إنشاء مكونات ودوال عامة تقبل أي نوع بأمان كامل",
          "Type Narrowing: تضييق الاتحادات بـ typeof, instanceof, in",
          "Custom Type Guards: التأكيد الشرطي بصيغة val is TargetType"
        ]
      },
      {
        title: "4. السلامة والأدوات المساعدة",
        subtitle: "Utility Types & Safe Types",
        badge: "الأمان المتقدم",
        color: "amber",
        details: [
          "Utility Types: Partial, Pick, Omit, Record, ReturnType",
          "unknown: بديل any الآمن للبيانات الخارجية مجهولة المصدر",
          "never: حارس الشمولية التامة (Exhaustiveness Check) في switch"
        ]
      }
    ]
  }
};
