// scripts/sectionGenerators/meta9to16.js
// بيانات الأقسام 9 إلى 16: الملخصات والقواعد الذهبية والبطاقات المرجعية والمشاريع المصغرة

export const META_9_TO_16 = {
  9: {
    summary: {
      overview: "يشرح هذا القسم كيفية كتابة تطبيقات Node.js و Express متينة ومحمية من أخطاء وقت التشغيل باستخدام لغة TypeScript. يغطي نظام الأنواع الصارم (Static Typing)، الواجهات البرمجية (Interfaces)، الأنواع العامة (Generics)، إعداد tsconfig.json، كتابة الـ Type Definitions، واستخدام الأدوات الحديثة مثل tsx و tsup لبناء وتطوير المشاريع بكفاءة فائقة.",
      goldenRules: [
        {
          title: "فعّل وضع التدقيق الصارم strict: true في tsconfig.json",
          desc: "يضمن الوضع الصارم فحص القيم الخالية (Strict Null Checks) ويمنع تمرير undefined أو null في الأماكن غير المخصصة لها."
        },
        {
          title: "تجنب استخدام النوع any بأي شكل من الأشكال",
          desc: "استخدام any يلغي فائدة TypeScript تماماً؛ استخدم unknown عند عدم معرفة نوع البيانات مسبقاً مع تطبيق تقييد الأنواع (Type Narrowing)."
        },
        {
          title: "استخدم Interface لتعريف هياكل الكائنات و Type للاتحادات (Unions)",
          desc: "الواجهات قابلة للتوسعة عبر التوريث (extends)، بينما الـ Type aliases ممتازة لتعريف الحالات المتعددة والـ Union Types."
        },
        {
          title: "استخدم حزم الأنواع الرسمية @types لـ Node و Express",
          desc: "تثبيت @types/node و @types/express في devDependencies يمنحك ميزة الإكمال التلقائي واكتشاف الأخطاء اللحظي في المحرر."
        },
        {
          title: "توسيع واجهات Express لإضافة المستخدم الموثق (req.user)",
          desc: "استخدم دمج الإعلانات (Declaration Merging) لتوسيع واجهة Request في Express ليشمل بيانات الجلسة والمستخدم الموثق بنوع صارم."
        },
        {
          title: "استثمر الـ Generics لبناء دوال ومستودعات بيانات مرنة",
          desc: "تمكنك الأنواع العامة (Generics) من كتابة كود قابل لإعادة الاستخدام مع الحفاظ التام على أمان الأنواع للمدخلات والمخرجات."
        },
        {
          title: "افصل كود التطوير src عن مخرجات التجميع dist",
          desc: "اضبط outDir: './dist' و rootDir: './src' لتشغيل شفرة JavaScript النظيفة فقط في بيئة الإنتاج دون تشويش الملفات الأصلية."
        }
      ],
      keyTakeaways: [
        "إتقان تهيئة مشاريع Node.js مدعومة بالكامل بلغة TypeScript.",
        "القدرة على كتابة واجهات ومتحكمات Express آمنة ومحددة الأنواع بنسبة 100%.",
        "تطبيق تقنيات Type Narrowing و Type Guards لضمان صحة البيانات في وقت التشغيل.",
        "تحويل وتجميع الكود البرمجي لبيئة الإنتاج بكفاءة عالية عبر tsc أو tsup."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية لاستخدام TypeScript مع Node.js و Express",
      entries: [
        { category: "Init TS", commandOrSyntax: "npx tsc --init", description: "توليد ملف التكوين القياسي tsconfig.json مع الإعدادات المعيارية", type: "cli" },
        { category: "Dev Runner", commandOrSyntax: "npx tsx watch src/index.ts", description: "تشغيل ملفات TypeScript فوراً مع إعادة التحميل التلقائي السريع جداً", type: "cli" },
        { category: "Build", commandOrSyntax: "npx tsc", description: "فحص وتجميع ملفات المشروع إلى JavaScript قياسي داخل مجلد dist", type: "cli" },
        { category: "Express Types", commandOrSyntax: "import { Request, Response, NextFunction } from 'express';", description: "استيراد الأنواع الرسمية لمعاملات مسارات Express", type: "code" },
        { category: "Interface", commandOrSyntax: "interface User { id: string; email: string; role?: 'admin' | 'user'; }", description: "تعريف هيكل بيانات كائن مع خاصية اختيارية ونوع اتحادي صارم", type: "code" },
        { category: "Generics", commandOrSyntax: "async function fetchApi<T>(url: string): Promise<T> { /* ... */ }", description: "دالة عامة ترجع Promise يحتوي على النوع المحدد وقت الاستدعاء", type: "code" },
        { category: "Type Guard", commandOrSyntax: "if (typeof val === 'string') { val.toUpperCase(); }", description: "تضييق النوع البرمجي بأمان داخل كتلة شرطية", type: "code" },
        { category: "Zod Inference", commandOrSyntax: "type UserDTO = z.infer<typeof userSchema>;", description: "استخراج النوع تلقائياً من مخطط التحقق في مكتبة Zod", type: "code" },
        { category: "Declaration Merge", commandOrSyntax: "declare global { namespace Express { interface Request { user?: AuthUser; } } }", description: "توسيع كائن Request في Express ليحتوي على كائن user الموثق", type: "code" },
        { category: "Strict Config", commandOrSyntax: "\"strict\": true, \"noImplicitAny\": true", description: "إعدادات الأمان القصوى في tsconfig لمنع الأنواع المجهولة تماماً", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-9",
      title: "مشروع عملي: خادم مهام ذكي محمي بالأنواع الصارمة (Type-Safe Task Service)",
      description: "بناء واجهة برمجية مصغرة بلغة TypeScript لإدارة المهام مع نموذج بيانات محكم، كلاس خدمة يعتمد على الـ Generics، ومتحكمات ذات أنواع دقيقة للمدخلات والمخرجات.",
      difficulty: "متوسط - متقدم",
      techStack: ["Node.js", "TypeScript", "Express.js", "Type Definitions"],
      directoryStructure: `type-safe-task-service/
├── tsconfig.json
├── package.json
├── src/
│   ├── types/
│   │   └── task.ts
│   ├── services/
│   │   └── taskService.ts
│   └── index.ts
└── dist/`,
      codeFiles: [
        {
          filename: "src/types/task.ts",
          code: `// تعريف حالة المهمة كنوع اتحادي صارم
export type TaskPriority = 'low' | 'medium' | 'high';

// واجهة تمثل كائن المهمة في النظام
export interface ITask {
  id: string;
  title: string;
  priority: TaskPriority;
  isCompleted: boolean;
  createdAt: Date;
}

// واجهة تمثل بيانات إنشاء مهمة جديدة
export interface CreateTaskDTO {
  title: string;
  priority?: TaskPriority;
}`,
          explanation: "تحدد هذه الوحدة عقود البيانات والأنواع الصارمة لجميع أجزاء التطبيق."
        },
        {
          filename: "src/services/taskService.ts",
          code: `// استيراد الواجهات من مجلد الأنواع
import { ITask, CreateTaskDTO } from '../types/task.js';
import crypto from 'node:crypto';

// كلاس خدمة إدارة المهام المحمي بالأنواع
export class TaskService {
  // مصفوفة خاصة لتخزين المهام في الذاكرة
  private tasks: ITask[] = [];

  // جلب كافة المهام المخزنة
  public async getAllTasks(): Promise<ITask[]> {
    return [...this.tasks];
  }

  // إنشاء مهمة جديدة مع تطبيق القيم الافتراضية
  public async createTask(dto: CreateTaskDTO): Promise<ITask> {
    const newTask: ITask = {
      id: crypto.randomUUID(),
      title: dto.title,
      priority: dto.priority ?? 'medium',
      isCompleted: false,
      createdAt: new Date()
    };
    this.tasks.push(newTask);
    return newTask;
  }
}`,
          explanation: "خدمة تعتمد أمان الأنواع البرمجية للتعامل مع العمليات دون أي احتمال لحدوث أخطاء غير متوقعة."
        }
      ],
      stepsToRun: [
        "توجه للمجلد: cd type-safe-task-service",
        "ثبت الاعتماديات: npm install express && npm install -D typescript @types/node @types/express tsx",
        "شغل الخادم بنمط التطوير: npx tsx src/index.ts",
        "قم بتجميع المشروع للإنتاج: npx tsc"
      ]
    }
  },
  10: {
    summary: {
      overview: "يغطي هذا القسم ركيزة قواعد البيانات العلائقية (Relational Databases) وتكاملها مع Node.js. يشرح لغة SQL ومعايير تصميم الجداول والمفاتيح الأساسية والأجنبية (Primary & Foreign Keys)، معالجة العلاقات (One-to-Many, Many-to-Many)، الاتصال بقاعدة بيانات PostgreSQL، إدارة مجمع الاتصالات (Connection Pool)، تنفيذ المعاملات الذرية (ACID Transactions)، واستخدام أحدث أداة ORM في مجتمع Node.js وهي Prisma.",
      goldenRules: [
        {
          title: "استخدم دائماً الاستعلامات المعلمة (Parameterized Queries)",
          desc: "لا تقم أبداً بدمج نصوص إدخال المستخدم داخل جمل SQL مباشرة بالسلاسل النصية؛ فهذا هو المصدر رقم 1 لثغرات حقن SQL القاتلة."
        },
        {
          title: "أدر اتصالات القاعدة عبر Connection Pooling حصراً",
          desc: "إنشاء اتصال جديد في كل طلب يدمر أداء الخادم؛ استخدم مجمع اتصالات مشترك يحدد الحد الأدنى والأقصى للاتصالات النشطة."
        },
        {
          title: "المعاملات المالية والعمليات المرتبطة تتطلب Transactions",
          desc: "إذا كانت العملية تتضمن خطوتين (مثل خصم رصيد وإضافة طلب)، نفذها داخل Transaction لضمان إلغاء كل شيء (Rollback) في حال فشل أي خطوة."
        },
        {
          title: "ضع الفهارس (Indexes) على الحقول الأكثر بحثاً وترشيحاً",
          desc: "إضافة فهارس على حقول البريد الإلكتروني أو المفاتيح الأجنبية يحول وقت البحث من مسح كامل للجدول (Full Scan) إلى بحث لحظي فائق السرعة."
        },
        {
          title: "احذر من كارثة استعلامات N+1 في الـ ORM",
          desc: "عند جلب مستخدمين ومنشوراتهم، احرص على استخدام Eager Loading (مثل include في Prisma) بدلاً من الاستعلام في حلقة تكرارية."
        },
        {
          title: "إدارة تغييرات المخطط عبر ترحيلات قواعد البيانات (Migrations)",
          desc: "لا تعدل جداول الإنتاج يدوياً؛ سجل كل تعديل في ملف Migration تحت إدارة Git ليتم تطبيقه آلياً وموثوقاً في السيرفر."
        },
        {
          title: "استخدم UUIDs للمفاتيح الأساسية في الأنظمة الموزعة",
          desc: "الأرقام المتسلسلة (Auto-increment IDs) قابلة للتخمين وتكشف حجم بياناتك للمنافسين؛ اعتمد UUID v4 أو ULID للأمان."
        },
        {
          title: "تطبيق قواعد حظر الحذف الشلالي غير المقصود (ON DELETE RESTRICT)",
          desc: "احمِ البيانات الحيوية من الحذف العرضي بضبط قيود المفاتيح الأجنبية لمنع حذف سجل يرتبط به مستندات مالية أو فواتير."
        }
      ],
      keyTakeaways: [
        "إتقان كتابة استعلامات SQL المتقدمة (JOINs, Aggregations, Subqueries).",
        "بناء مخططات قواعد بيانات محكمة وتطبيق الترحيلات عبر Prisma Schema.",
        "تنفيذ المعاملات الآمنة لحماية اتساق البيانات ومبدأ الذرية ACID.",
        "ضبط أداء الاستعلامات وتجنب الاختناقات في خوادم PostgreSQL."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية لقواعد بيانات SQL و PostgreSQL و Prisma ORM",
      entries: [
        { category: "Prisma CLI", commandOrSyntax: "npx prisma init --datasource-provider postgresql", description: "تهيئة بيئة Prisma مع محرك PostgreSQL وملف .env", type: "cli" },
        { category: "Prisma CLI", commandOrSyntax: "npx prisma migrate dev --name init_schema", description: "توليد وتطبيق ملف ترحيل جديد لقاعدة البيانات في بيئة التطوير", type: "cli" },
        { category: "Prisma CLI", commandOrSyntax: "npx prisma studio", description: "فتح لوحة تحكم بصرية تفاعلية في المتصفح لاستعراض وتعديل الجداول", type: "cli" },
        { category: "Prisma Query", commandOrSyntax: "await prisma.user.findUnique({ where: { email } });", description: "البحث عن سجل فريد ومفهرس باستخدام Prisma Client", type: "code" },
        { category: "Prisma Rel", commandOrSyntax: "await prisma.user.findMany({ include: { posts: true } });", description: "جلب المستخدمين مع منشوراتهم دفعة واحدة وحل مشكلة N+1", type: "code" },
        { category: "Prisma Tx", commandOrSyntax: "await prisma.$transaction([stepOne, stepTwo]);", description: "تنفيذ مجموعة عمليات داخل معاملة ذرية تضمن التراجع عند أي فشل", type: "code" },
        { category: "Raw SQL", commandOrSyntax: "await pool.query('SELECT * FROM users WHERE id = $1', [userId]);", description: "استعلام SQL مباشر مع تمرير المعاملات بأمان تام لمنع ثغرات الـ Injection", type: "code" },
        { category: "Indexes", commandOrSyntax: "CREATE INDEX idx_users_email ON users(email);", description: "إنشاء فهرس على حقل البريد لرفع سرعة استعلامات البحث والمصادقة", type: "code" },
        { category: "Constraints", commandOrSyntax: "FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE", description: "ربط السجلات بمفتاح أجنبي مع الحذف التلقائي للسجلات التابعة", type: "code" },
        { category: "Pagination", commandOrSyntax: "SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 20;", description: "تقسيم نتائج الاستعلام إلى صفحات باستخدام LIMIT و OFFSET", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-10",
      title: "مشروع عملي: خدمة الفواتير والمعاملات المالية الآمنة (Transactional Billing API)",
      description: "بناء خدمة تحويل رصيد مصرفي وإصدار فواتير تستخدم المعاملات الذرية (Atomic Transactions) وتضمن عدم ضياع الأموال أو حدوث تضارب في الأرصدة عند تكرار الطلبات.",
      difficulty: "متقدم",
      techStack: ["Node.js", "PostgreSQL", "Prisma ORM", "Transactions", "ACID"],
      directoryStructure: `transactional-billing/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── billingService.js
│   └── index.js
└── package.json`,
      codeFiles: [
        {
          filename: "src/billingService.js",
          code: `// دالة محاكاة تنفيذ المعاملة الذرية لتحويل الأموال
export async function transferFunds(dbClient, fromAccountId, toAccountId, amount) {
  // التحقق من صحة القيمة المالية
  if (amount <= 0) {
    throw new Error("المبلغ المراد تحويله يجب أن يكون موجباً");
  }

  // تنفيذ المعاملة المالية ضمن سياق ذري موحد
  return await dbClient.$transaction(async (tx) => {
    // 1. جلب حساب المرسل مع قفل السجل للتحقق
    const sender = await tx.account.findUnique({ where: { id: fromAccountId } });
    if (!sender || sender.balance < amount) {
      throw new Error("الرصيد الحالي غير كافٍ لإتمام العملية");
    }

    // 2. خصم المبلغ من حساب المرسل
    const updatedSender = await tx.account.update({
      where: { id: fromAccountId },
      data: { balance: { decrement: amount } }
    });

    // 3. إضافة المبلغ لحساب المستلم
    const updatedReceiver = await tx.account.update({
      where: { id: toAccountId },
      data: { balance: { increment: amount } }
    });

    // 4. تسجيل حركة التحويل في سجل المعاملات
    const log = await tx.transactionLog.create({
      data: { fromAccountId, toAccountId, amount, status: 'COMPLETED' }
    });

    return { success: true, transactionId: log.id, newBalance: updatedSender.balance };
  });
}`,
          explanation: "تضمن هذه الدالة عبر $transaction أن تتم خطوات التحويل الأربع مجتمعة أو تلغى بالكامل في حال حدوث أي خطأ."
        },
        {
          filename: "src/index.js",
          code: `// استيراد خدمة الفواتير
import { transferFunds } from './billingService.js';

// محاكاة عميل قاعدة بيانات Prisma تجريبي
const mockPrisma = {
  $transaction: async (callback) => {
    // تنفيذ رد الاتصال وتمرير سياق المعاملة
    return await callback({
      account: {
        findUnique: async ({ where }) => ({ id: where.id, balance: 1000 }),
        update: async ({ where, data }) => ({ id: where.id, balance: 800 })
      },
      transactionLog: {
        create: async ({ data }) => ({ id: 'tx_987654321', ...data })
      }
    });
  }
};

async function runDemo() {
  console.log("=== تجربة نظام التحويل المالي الذري في Node.js ===");
  try {
    const result = await transferFunds(mockPrisma, 'acc_001', 'acc_002', 200);
    console.log("✓ اكتمل التحويل بنجاح تام!");
    console.log(\`رقم الإشعار: \${result.transactionId} | الرصيد المتبقي: \${result.newBalance} ريال\`);
  } catch (err) {
    console.error("✕ فشلت العملية وتم التراجع عن كافة التغييرات:", err.message);
  }
}

runDemo();`,
          explanation: "ملف التشغيل يختبر مسار التحويل الناجح ويتحقق من سلامة الأرصدة والبيانات."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd transactional-billing",
        "شغل الاختبار التجريبي للمعاملة: node src/index.js",
        "شاهد التأكيد الفوري لاكتمال المعاملة الذرية وتحديث الأرصدة"
      ]
    }
  },
  11: {
    summary: {
      overview: "يشرح هذا القسم قواعد البيانات غير العلائقية (NoSQL) وتحديداً نظام المستندات المرنة MongoDB، ومحرك التخزين المؤقت فائق السرعة في الذاكرة Redis. يغطي تصميم المخططات عبر Mongoose، الفهارس وأنماط التجميع (Aggregation Pipeline)، استراتيجيات التخزين المؤقت (Cache-Aside)، إدارة عمر البيانات المنتهية (TTL)، ونظام النشر والاشتراك (Pub/Sub) لتطوير خوادم عالية الإنتاجية.",
      goldenRules: [
        {
          title: "تصميم مخطط MongoDB يعتمد على طريقة استعلام التطبيق",
          desc: "في NoSQL، لا تركز على تقليل التكرار (Normalization)؛ بل صمم المستندات لتخدم الشاشات والطلبات بأقل عدد من الاستعلامات."
        },
        {
          title: "استخدم التضمين (Embedding) للعلاقات الوثيقة والمرجعية (Referencing) للبيانات المتضخمة",
          desc: "ضمن العناوين داخل مستند المستخدم، بينما استخدم المعرفات للمنشورات والتعليقات لتفادي تجاوز حد 16MB لحجم المستند."
        },
        {
          title: "التخزين المؤقت عبر نمط Cache-Aside في Redis",
          desc: "ابحث في Redis أولاً؛ إذا وجدت البيانات (Cache Hit) أرجعها فوراً، وإذا لم تجدها (Cache Miss) اجلبها من القاعدة وخزنها في Redis."
        },
        {
          title: "حدد دائماً مدة انتهاء صلاحية (TTL) لكل مفتاح في Redis",
          desc: "عدم ضبط TTL يؤدي إلى تراكم البيانات الميتة في الذاكرة العشوائية (RAM) والتسبب في انهيار السيرفر بسبب امتلاء الذاكرة."
        },
        {
          title: "استخدم خط أنابيب التجميع (Aggregation) للتقارير المعقدة",
          desc: "تتيح لك مراحل $match و $group و $project إجراء عمليات إحصائية وتحليلية فائقة السرعة على مستوى محرك قاعدة البيانات."
        },
        {
          title: "احمِ Redis بتطبيق سياسة إخلاء الذاكرة (maxmemory-policy)",
          desc: "اضبط سياسة allkeys-lru ليقوم Redis بحذف أقدم المفاتيح غير المستخدمة تلقائياً عندما تقترب الذاكرة من الحد الأقصى."
        },
        {
          title: "إلغاء التخزين المؤقت عند تحديث البيانات (Cache Invalidation)",
          desc: "تذكر المقولة الشهيرة: 'أصعب أمرين في البرمجة هما تسمية الأشياء وإبطال الكاش'؛ احرص على مسح مفتاح الكاش فور تعديل السجل الأصلي."
        }
      ],
      keyTakeaways: [
        "بناء وتصميم مخططات Mongoose متقدمة مع الـ Middlewares والـ Virtuals.",
        "تنفيذ استعلامات التجميع والتحليل الإحصائي الضخم عبر MongoDB Aggregation.",
        "تسريع استجابة الخوادم بنسبة تصل إلى 90% عبر دمج Redis Caching.",
        "استخدام أنواع بيانات Redis المتقدمة (Strings, Hashes, Lists, Sets, Sorted Sets)."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية لقواعد بيانات MongoDB و Mongoose و Redis",
      entries: [
        { category: "Mongoose", commandOrSyntax: "await mongoose.connect(process.env.MONGO_URI);", description: "إنشاء الاتصال الدائم بقاعدة بيانات MongoDB عبر Mongoose", type: "code" },
        { category: "Mongoose Model", commandOrSyntax: "const User = mongoose.model('User', userSchema);", description: "إنشاء نموذج Mongoose لإجراء عمليات البحث والإضافة على المجموعة", type: "code" },
        { category: "Aggregation", commandOrSyntax: "await Order.aggregate([{ $match: { status: 'PAID' } }, { $group: { _id: '$userId', total: { $sum: '$amount' } } }]);", description: "تجميع المبيعات وحساب الإجمالي لكل مستخدم عبر الـ Pipeline", type: "code" },
        { category: "Redis Set", commandOrSyntax: "await redis.set('user:101', JSON.stringify(data), 'EX', 3600);", description: "تخزين قيمة في الكاش مع تحديد مدة صلاحية TTL بساعة واحدة (3600 ثانية)", type: "code" },
        { category: "Redis Get", commandOrSyntax: "const cached = await redis.get('user:101');", description: "جلب القيمة المخزنة مؤقتاً في الذاكرة فائقة السرعة لمفتاح محدد", type: "code" },
        { category: "Redis Del", commandOrSyntax: "await redis.del('user:101');", description: "مسح مفتاح الكاش فور تحديث بيانات المستخدم في قاعدة البيانات", type: "code" },
        { category: "Redis Incr", commandOrSyntax: "const currentRequests = await redis.incr('rate:ip:127.0.0.1');", description: "زيادة عداد رقمي ذرياً لاستخدامه في تحديد معدل الطلبات Rate Limiting", type: "code" },
        { category: "Redis Pub/Sub", commandOrSyntax: "await redis.publish('notifications', JSON.stringify(msg));", description: "نشر رسالة عبر قناة Redis لكافة الخوادم المشتركة في اللحظة نفسها", type: "code" },
        { category: "Mongo Indexes", commandOrSyntax: "userSchema.index({ email: 1 }, { unique: true });", description: "إنشاء فهرس فريد يمنع تكرار البريد ويسرع البحث اللحظي", type: "code" },
        { category: "Lean Query", commandOrSyntax: "await User.find().lean();", description: "جلب كائنات JavaScript نقية بدون أعباء توابع Mongoose لتسريع القراءة", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-11",
      title: "مشروع عملي: نظام التخزين المؤقت وحماية الخوادم من الضغط (Cache-Aside & Rate Limiter)",
      description: "بناء وسيط Express ذكي للتحقق من الكاش في Redis مع تحديد معدل الطلبات (Rate Limiting) لكل عنوان IP لحماية الخوادم من الهجمات وتوفير موارد قاعدة البيانات.",
      difficulty: "متقدم",
      techStack: ["Node.js", "Express.js", "Redis", "Cache-Aside Pattern", "Rate Limiting"],
      directoryStructure: `cache-rate-limiter/
├── package.json
├── src/
│   ├── redisClient.js
│   ├── cacheMiddleware.js
│   └── index.js
└── README.md`,
      codeFiles: [
        {
          filename: "src/cacheMiddleware.js",
          code: `// وسيط التخزين المؤقت الذكي (Cache-Aside Middleware)
export const cacheAside = (redisClient, durationSeconds = 60) => {
  return async (req, res, next) => {
    // نتجاهل الطلبات التي ليست GET لأنها تعدل البيانات
    if (req.method !== 'GET') return next();

    // بناء مفتاح فريد يعتمد على مسار الطلب
    const cacheKey = \`cache:\${req.originalUrl}\`;

    try {
      // 1. فحص وجود البيانات مسبقاً في الذاكرة
      const cachedData = await redisClient.get(cacheKey);
      if (cachedData) {
        // طباعة إشعار بوجود النتيجة في الكاش
        console.log(\`⚡ Cache Hit: استرجاع البيانات فوراً لمفتاح: \${cacheKey}\`);
        return res.status(200).json(JSON.parse(cachedData));
      }

      // 2. إذا لم تكن موجودة نعترض دالة res.json لحفظها فور توليدها
      console.log(\`🔍 Cache Miss: جلب البيانات من المصدر الأصلي: \${cacheKey}\`);
      const originalJson = res.json.bind(res);
      res.json = (body) => {
        // حفظ النتيجة في Redis مع تحديد مدة الصلاحية TTL
        redisClient.set(cacheKey, JSON.stringify(body), 'EX', durationSeconds).catch(console.error);
        return originalJson(body);
      };

      next();
    } catch (error) {
      console.error("فشل الاتصال بـ Redis، الاستمرار بدون كاش:", error.message);
      next();
    }
  };
};`,
          explanation: "يقوم هذا الوسيط باعتراض طلبات GET واسترجاع النتيجة من Redis مباشرة أو حفظ النتيجة الناتجة تلقائياً."
        },
        {
          filename: "src/index.js",
          code: `// استيراد Express والوسيط
import express from 'express';
import { cacheAside } from './cacheMiddleware.js';

const app = express();

// محاكي Redis في الذاكرة للتجربة السريعة
const inMemoryRedis = new Map();
const mockRedis = {
  get: async (k) => inMemoryRedis.get(k) || null,
  set: async (k, v, mode, ttl) => {
    inMemoryRedis.set(k, v);
    setTimeout(() => inMemoryRedis.delete(k), (ttl || 60) * 1000);
  }
};

// تفعيل وسيط الكاش لمدة 30 ثانية
app.use(cacheAside(mockRedis, 30));

// مسار يستغرق وقتاً طويلاً لمحاكاة استعلام ثقيل
app.get('/api/analytics', async (req, res) => {
  // محاكاة تأخير معالجة لمدة 500 ميلي ثانية
  await new Promise(r => setTimeout(r, 500));
  res.json({
    timestamp: new Date().toISOString(),
    activeUsers: 1420,
    revenue: "$84,200",
    serverStatus: "Optimal"
  });
});

console.log("=== تم تشغيل الخادم التجريبي مع الكاش الذكي ===");`,
          explanation: "خادم تجريبي يوضح الفارق بين أول طلب (بطيء) والطلبات اللاحقة (لحظية عبر الكاش)."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd cache-rate-limiter",
        "شغل الخادم: node src/index.js",
        "أرسل طلب للمسار ولاحظ رسالة Cache Miss في أول مرة ثم Cache Hit في المرات التالية"
      ]
    }
  },
  12: {
    summary: {
      overview: "يشرح هذا القسم الركائز الجوهرية لأمن التطبيقات الخلفية والمصادقة والتفويض. يغطي التشفير غير العكوس لكلمات المرور عبر Bcrypt مع تطبيق الأملاح (Salt Rounds)، هندسة رموز JWT وتأمينها، استراتيجية الفصل بين Access Token و Refresh Token المخزن في HttpOnly Cookies، تطبيق التحكم بالصلاحيات القائم على الأدوار (RBAC)، والدفاع ضد أشهر ثغرات الويب عبر Helmet و CORS و Rate Limiting وتطهير المدخلات من هجمات XSS و NoSQL Injection.",
      goldenRules: [
        {
          title: "لا تخزن كلمات المرور كنصوص صريحة أبداً",
          desc: "استخدم مكتبة bcrypt مع معامل ملح (Salt Rounds) لا يقل عن 10 إلى 12 لتشفير كلمات المرور وحمايتها من هجمات Rainbow Tables."
        },
        {
          title: "Access Token قصير الأجل و Refresh Token محمي بـ HttpOnly Cookie",
          desc: "اجعل صلاحية Access Token لا تتعدى 15 دقيقة، وخزن Refresh Token في Cookie محمية بـ HttpOnly و Secure لمنع سرقتها عبر سكريبتات XSS."
        },
        {
          title: "الفرق الجوهري بين المصادقة (Authentication) والتفويض (Authorization)",
          desc: "المصادقة هي التأكد من هوية المستخدم (من أنت؟)، بينما التفويض هو فحص صلاحيات المستخدم الموثق لتنفيذ إجراء محدد (ماذا يحق لك أن تفعل؟)."
        },
        {
          title: "تأمين الترويسات الأمنية فورياً باستخدام Helmet",
          desc: "استدعاء app.use(helmet()) يضبط ترويسات حيوية مثل Content-Security-Policy ويخفي ترويسة X-Powered-By لحجب هوية التقنيات المستخدمة."
        },
        {
          title: "تقييد تبادل الموارد عبر النطاقات المختلفة (CORS)",
          desc: "لا تضع origin: '*' في بيئة الإنتاج المفتوحة؛ حدد نطاقات الواجهات الأمامية الموثوقة حصراً واضبط Credentials بدقة."
        },
        {
          title: "التحقق الصارم من صحة ونوعية الرموز وتوقيعها السري (JWT_SECRET)",
          desc: "احفظ المفتاح السري لتوقيع الرموز في متغيرات بيئية مشفرة بقوة ولا تستخدم كلمات مرور ضعيفة قابلة للكسر."
        },
        {
          title: "تطبيق التراجع الفوري عن الجلسات (Token Blacklisting)",
          desc: "عند تسجيل الخروج أو اختراق الحساب، سجل معرف الرمز المخترق في Redis مع وقت انتهاء صلاحيته لرفضه فورياً قبل اكتمال مدته."
        },
        {
          title: "تحديد معدل الطلبات (Rate Limiting) على مسارات تسجيل الدخول",
          desc: "ضع حداً أقصى لعدد محاولات تسجيل الدخول الخاطئة (مثل 5 محاولات لكل 15 دقيقة) لمنع هجمات القوة الغاشمة (Brute Force)."
        }
      ],
      keyTakeaways: [
        "إتقان تشفير وفحص كلمات المرور بأحدث المعايير الأمنية المعتمدة عالمياً.",
        "بناء دورة مصادقة متكاملة بـ Access Tokens و Refresh Tokens وتجديد الجلسات.",
        "تطبيق وسائط حماية المسارات وفحص الأدوار RBAC (Admin, Manager, User).",
        "تأمين تطبيقات Node.js و Express ضد ثغرات OWASP Top 10 الشائعة."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية للمصادقة والأمان في Node.js (Auth & Security)",
      entries: [
        { category: "Bcrypt", commandOrSyntax: "const hash = await bcrypt.hash(password, 12);", description: "تشفير كلمة المرور مع 12 جولة ملح لحمايتها من الكسر", type: "code" },
        { category: "Bcrypt", commandOrSyntax: "const isMatch = await bcrypt.compare(plainPwd, hash);", description: "مقارنة كلمة المرور المدخلة مع البصمة المشفرة المخزنة بأمان", type: "code" },
        { category: "JWT Sign", commandOrSyntax: "jwt.sign({ userId, role }, process.env.JWT_SECRET, { expiresIn: '15m' });", description: "توقيع رمز وصول رقمي مشفر تنتهي صلاحيته بعد 15 دقيقة", type: "code" },
        { category: "JWT Verify", commandOrSyntax: "const decoded = jwt.verify(token, process.env.JWT_SECRET);", description: "التحقق من صحة وسلامة الرمز وعدم التلاعب بمحتوياته", type: "code" },
        { category: "Cookie Security", commandOrSyntax: "res.cookie('refreshToken', token, { httpOnly: true, secure: true, sameSite: 'strict' });", description: "إرسال الرمز في كوكي آمنة غير قابلة للقراءة عبر جافاسكريبت المتصفح", type: "code" },
        { category: "Helmet", commandOrSyntax: "import helmet from 'helmet'; app.use(helmet());", description: "تفعيل الترويسات الأمنية المعيارية لحماية الخادم بنقرة واحدة", type: "code" },
        { category: "CORS", commandOrSyntax: "app.use(cors({ origin: 'https://myapp.com', credentials: true }));", description: "السماح بالطلبات القادمة من دومين الواجهة الأمامية المعتمد فقط", type: "code" },
        { category: "Rate Limiting", commandOrSyntax: "app.use('/api/auth/', rateLimit({ windowMs: 15 * 60 * 1000, max: 5 }));", description: "تقييد محاولات الدخول إلى 5 محاولات لكل عنوان IP كل ربع ساعة", type: "code" },
        { category: "RBAC", commandOrSyntax: "const authorize = (...roles) => (req, res, next) => roles.includes(req.user.role) ? next() : res.sendStatus(403);", description: "وسيط التحقق من رتبة المستخدم وصلاحيته لدخول المسار", type: "code" },
        { category: "Sanitize", commandOrSyntax: "import mongoSanitize from 'express-mongo-sanitize'; app.use(mongoSanitize());", description: "تطهير مدخلات الطلب من علامات الدولار $ لمنع هجمات NoSQL Injection", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-12",
      title: "مشروع عملي: خدمة المصادقة وحماية المسارات بالأدوار (JWT Auth & RBAC Microservice)",
      description: "بناء نظام متكامل لتسجيل المستخدمين بتشفير Bcrypt، تسجيل الدخول وتوليد Access و Refresh Tokens، ووسيط حماية يتحقق من الصلاحيات والأدوار (User / Admin).",
      difficulty: "متقدم",
      techStack: ["Node.js", "Express.js", "jsonwebtoken", "bcrypt", "RBAC Architecture"],
      directoryStructure: `jwt-rbac-auth/
├── package.json
├── src/
│   ├── middlewares/
│   │   ├── authenticate.js
│   │   └── authorize.js
│   ├── authService.js
│   └── index.js
└── README.md`,
      codeFiles: [
        {
          filename: "src/middlewares/authenticate.js",
          code: `// وسيط التحقق من هوية المستخدم عبر Bearer Token
export const authenticate = (jwtSecret) => {
  return (req, res, next) => {
    // استخراج ترويسة المصادقة Authorization
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ status: 'error', message: 'رمز المصادقة غير موجود أو غير صالح' });
    }

    const token = authHeader.split(' ')[1];
    try {
      // محاكاة أو فحص توقيع الرمز المشفر
      const payload = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));
      // إلحاق بيانات المستخدم الموثق بكائن الطلب
      req.user = payload;
      next();
    } catch (e) {
      return res.status(401).json({ status: 'error', message: 'انتهت صلاحية الرمز أو تم التلاعب به' });
    }
  };
};`,
          explanation: "يستخرج هذا الوسيط الرمز من ترويسة الطلب ويتحقق من صحته ويدمج بيانات المستخدم في req.user."
        },
        {
          filename: "src/middlewares/authorize.js",
          code: `// وسيط التحقق من أدوار وصلاحيات المستخدم (RBAC)
export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ status: 'error', message: 'يجب تسجيل الدخول أولاً' });
    }

    // التحقق من احتواء أدوار المسار على دور المستخدم الحالي
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        status: 'error',
        message: 'ليس لديك الصلاحيات الكافية للوصول إلى هذا المورد'
      });
    }

    next();
  };
};`,
          explanation: "يضمن هذا الوسيط عدم السماح بالمرور إلا للمستخدمين الذين يحملون الأدوار المصرح لها فقط."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd jwt-rbac-auth",
        "ثبت الحزم: npm install express",
        "شغل الخادم: node src/index.js",
        "جرب مسار لوحة الإدارة برمز مستخدم عادي وتحقق من ظهور الخطأ 403 Forbidden"
      ]
    }
  },
  13: {
    summary: {
      overview: "يشرح هذا القسم كيفية التعامل الاحترافي مع رفع الملفات والبيانات الضخمة في Node.js باستخدام مكتبة Multer وتدفقات البيانات المتقدمة (Streams). يغطي الفرق بين Readable و Writable و Transform Streams، إدارة الضغط الارتدادي (Backpressure)، استخدام pipeline لنقل البيانات بأمان دون تسريب الذاكرة، ورفع الملفات إلى خدمات التخزين السحابية (AWS S3 و Cloudinary).",
      goldenRules: [
        {
          title: "لا تحمل الملفات الكبيرة في الذاكرة عبر Buffers نهائياً",
          desc: "تحميل ملف بحجم 500MB في متغير واحد يستهلك ذاكرة الخادم وقد يؤدي إلى انهياره؛ استخدم Streams لقراءة ومعالجة وكتابة البيانات أجزاءً متدفقة (Chunks)."
        },
        {
          title: "استخدم pipeline من node:stream/promises دائماً",
          desc: "تجنب استخدام .pipe() القديم لأنه لا يدير إغلاق التدفقات تلقائياً عند حدوث أخطاء؛ بينما تتولى دالة pipeline تنظيف الموارد بالكامل."
        },
        {
          title: "التحقق الصارم من نوع وحجم الملف المرفوع في Multer",
          desc: "لا تعتمد على امتداد الملف فقط؛ افحص نوع المايم (MIME type) وحدد حداً أقصى للحجم (limits.fileSize) لمنع هجمات حجب الخدمة (DoS)."
        },
        {
          title: "أعد تسمية الملفات المرفوعة بأسماء فريدة وعشوائية",
          desc: "تجنب حفظ الملف باسمه الأصلي المرسل من العميل؛ استخدم crypto.randomUUID() مع الامتداد المناسب لمنع استبدال الملفات أو حقن مسارات خبيثة."
        },
        {
          title: "إدارة الضغط الارتدادي (Backpressure) تلقائياً",
          desc: "عندما تكون سرعة القراءة أعلى من سرعة الكتابة على القرص أو الشبكة، يقوم نظام الـ Streams بوقف القراءة مؤقتاً لحماية الذاكرة."
        },
        {
          title: "احفظ الملفات في التخزين السحابي وليس على سيرفر التطبيق",
          desc: "في البيئات السحابية القابلة للتوسع (Stateless Containers)، تختفي الملفات المحلية مع كل إعادة نشر؛ استخدم S3 أو GCS لتخزين دائم وموثوق."
        },
        {
          title: "تدفقات التحويل (Transform Streams) لمعالجة البيانات أثناء النقل",
          desc: "استخدم Transform Stream لضغط الملفات عبر Gzip أو تشفيرها أثناء التدفق دون الحاجة لكتابتها على القرص أولاً."
        }
      ],
      keyTakeaways: [
        "بناء مسارات رفع ملفات آمنة باستخدام وسيط Multer مع فلترة صارمة للأنواع.",
        "التحكم الكامل في تدفقات البيانات الأربعة: Readable, Writable, Duplex, Transform.",
        "ربط التدفقات ومعالجة الأخطاء السلسة باستخدام stream.pipeline الحديثة.",
        "تكامل الخادم مع خدمات التخزين السحابي لرفع وإدارة الوسائط بكفاءة."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية لرفع الملفات والتعامل مع Streams والتخزين السحابي",
      entries: [
        { category: "Multer Upload", commandOrSyntax: "const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 * 1024 * 1024 } });", description: "إعداد وسيط Multer لحفظ الملفات مع تحديد حد أقصى للحجم 5 ميجابايت", type: "code" },
        { category: "Single Upload", commandOrSyntax: "app.post('/api/avatar', upload.single('avatar'), (req, res) => { console.log(req.file); });", description: "استقبال ملف فردي وتخزين بياناته في كائن req.file", type: "code" },
        { category: "Pipeline", commandOrSyntax: "import { pipeline } from 'node:stream/promises'; await pipeline(srcStream, destStream);", description: "ربط تدفق قراءة بتدفق كتابة مع إدارة الأخطاء والإغلاق التلقائي الآمن", type: "code" },
        { category: "FS Streams", commandOrSyntax: "const readStream = fs.createReadStream('large.csv', { highWaterMark: 64 * 1024 });", description: "إنشاء تدفق قراءة لملف ضخم مع ضبط حجم الشحنة الواحدة بـ 64 كيلوبايت", type: "code" },
        { category: "Gzip Stream", commandOrSyntax: "import zlib from 'node:zlib'; await pipeline(readStream, zlib.createGzip(), writeStream);", description: "ضغط ملف ضخم أثناء التدفق لحظياً وحفظه كأرشيف gz مضغوط", type: "code" },
        { category: "File Filter", commandOrSyntax: "fileFilter: (req, file, cb) => cb(null, file.mimetype.startsWith('image/'))", description: "تصفية الملفات المرفوعة وقبول ملفات الصور فقط ورفض ما دون ذلك", type: "code" },
        { category: "Memory Storage", commandOrSyntax: "const storage = multer.memoryStorage();", description: "تخزين الملف مؤقتاً في الذاكرة كـ Buffer لرفعه مباشرة للسحابة دون لمس القرص", type: "code" },
        { category: "S3 Upload", commandOrSyntax: "new PutObjectCommand({ Bucket: 'my-bucket', Key: filename, Body: stream });", description: "إرسال تدفق الملف مباشرة إلى حاوية التخزين السحابية AWS S3", type: "code" },
        { category: "Backpressure", commandOrSyntax: "const canWrite = dest.write(chunk); if (!canWrite) src.pause();", description: "مبدأ التحكم بالضغط الارتدادي يدوياً عند امتلاء حاجز الذاكرة المؤقتة", type: "code" },
        { category: "Transform", commandOrSyntax: "class UpperCaseTransform extends Transform { _transform(chunk, enc, cb) { cb(null, chunk.toString().toUpperCase()); } }", description: "بناء تدفق تحويل مخصص لمعالجة البيانات وتعديلها أثناء النقل", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-13",
      title: "مشروع عملي: معالج ملفات CSV الضخمة المتدفق (Streaming CSV Parser & Compressor)",
      description: "بناء أداة تقوم بقراءة ملفات بيانات ضخمة بالميجابايت تدفقياً، تحويل كل صف إلى كائن JSON وتصفيته، ثم ضغطه عبر Gzip وكتابته في ملف مخرجات دون استهلاك أكثر من 30MB من الذاكرة.",
      difficulty: "متقدم",
      techStack: ["Node.js", "node:stream/promises", "node:zlib", "node:fs"],
      directoryStructure: `streaming-csv-parser/
├── package.json
├── src/
│   ├── transformer.js
│   └── index.js
└── data/`,
      codeFiles: [
        {
          filename: "src/transformer.js",
          code: `// استيراد كلاس تدفق التحويل المدمج
import { Transform } from 'node:stream';

// كلاس تحويل أسطر البيانات إلى صيغة JSON مضغوطة
export class LineToJsonTransform extends Transform {
  #buffer = '';

  constructor() {
    super({ objectMode: true });
  }

  // معالجة كل كتلة بيانات متدفقة
  _transform(chunk, encoding, callback) {
    this.#buffer += chunk.toString();
    const lines = this.#buffer.split('\\n');
    // نحتفظ بآخر سطر غير مكتمل في الحافظة
    this.#buffer = lines.pop();

    for (const line of lines) {
      if (line.trim()) {
        const [id, name, score] = line.split(',');
        const record = JSON.stringify({ id, name, score: Number(score) }) + '\\n';
        this.push(record);
      }
    }
    callback();
  }

  // إنهاء المعالجة عند اكتمال التدفق
  _flush(callback) {
    if (this.#buffer.trim()) {
      const [id, name, score] = this.#buffer.split(',');
      this.push(JSON.stringify({ id, name, score: Number(score) }) + '\\n');
    }
    callback();
  }
}`,
          explanation: "يقوم كلاس التحويل بتقسيم البيانات إلى أسطر وتحويلها إلى JSON تدفقياً دون تحميل الملف كاملاً في الذاكرة."
        },
        {
          filename: "src/index.js",
          code: `// استيراد أدوات التدفق والملفات والضغط
import fs from 'node:fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { LineToJsonTransform } from './transformer.js';

async function processStream() {
  console.log("=== بدء معالجة التدفق التدفقي والضغط الآني ===");
  const memoryBefore = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
  console.log(\`الذاكرة المستخدمة قبل البدء: \${memoryBefore} MB\`);

  // ربط تدفق القراءة مع التحويل والضغط وتدفق الكتابة
  await pipeline(
    fs.createReadStream('./data/large-sample.txt'),
    new LineToJsonTransform(),
    zlib.createGzip(),
    fs.createWriteStream('./data/processed-output.json.gz')
  );

  const memoryAfter = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
  console.log(\`الذاكرة المستخدمة بعد انتهاء العملية: \${memoryAfter} MB\`);
  console.log("✓ تم تحويل وضغط وتدفق البيانات بنجاح تام وبأقل استهلاك للذاكرة!");
}

processStream().catch(console.error);`,
          explanation: "يقوم هذا الملف بربط خط أنابيب التدفق pipeline ومراقبة استهلاك الذاكرة لإثبات كفاءة المعالجة التدفقية."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd streaming-csv-parser",
        "تأكد من وجود مجلد data وملف العينة",
        "شغل المعالجة التدفقية: node src/index.js",
        "لاحظ استقرار استهلاك الذاكرة طوال فترة معالجة وضغط الملف"
      ]
    }
  },
  14: {
    summary: {
      overview: "يشرح هذا القسم المعمارية الهندسية النظيفة لتطبيقات Backend القابلة للتوسع والصيانة طويلة الأجل. يغطي مبادئ SOLID الخمسة، المعمارية الطبقية ثلاثية المستويات (3-Tier Layered Architecture: Controllers, Services, Repositories)، حقن الاعتماديات (Dependency Injection)، معمارية الكود النظيف (Clean Architecture)، إدارة أخطاء منطق الأعمال (Domain Errors)، وفصل الأنظمة الموزعة ومبادئ Domain-Driven Design (DDD).",
      goldenRules: [
        {
          title: "افصل منطق الأعمال (Business Logic) عن طبقة النقل (HTTP)",
          desc: "لا تكتب استعلامات قواعد البيانات أو الحسابات داخل الـ Controller؛ فالـ Controller مسؤول فقط عن فحص الطلب وإرجاع الاستجابة."
        },
        {
          title: "طبّق نمط المستودع (Repository Pattern) لعزل الوصول للبيانات",
          desc: "عزل استعلامات قاعدة البيانات داخل Repositories يمكنك من تغيير محرك البيانات (من PostgreSQL إلى MongoDB مثلاً) دون لمس سطر واحد من منطق الأعمال."
        },
        {
          title: "مبدأ المسؤولية الواحدة (Single Responsibility Principle - SRP)",
          desc: "يجب أن يكون لكل كلاس أو دالة سبب واحد فقط للتغيير؛ تجزئة المهام المعقدة لخدمات متخصصة يرفع قابلية الاختبار والصيانة."
        },
        {
          title: "حقن الاعتماديات (Dependency Injection) يسهل الاختبارات الوهمية (Mocking)",
          desc: "مرر الاعتماديات (كعميل قاعدة البيانات أو خدمة البريد) عبر دالة البناء (Constructor) بدلاً من استيرادها المباشر الثابت."
        },
        {
          title: "مبدأ عكس الاعتماديات (Dependency Inversion Principle - DIP)",
          desc: "يجب أن تعتمد الطبقات العليا (Services) على التجريدات والواجهات (Interfaces) وليس على التفاصيل التنفيذية الملموسة للطبقات الدنيا."
        },
        {
          title: "عرّف أخطاء منطق أعمال مخصصة (Custom Domain Errors)",
          desc: "أنشئ كلاسات أخطاء خاصة مثل InsufficientFundsError أو UserNotFoundError لتحديد المعنى التقني بدقة وسهولة توجيهها لكود HTTP المناسب."
        },
        {
          title: "التحقق من صحة كائنات القيمة (Value Objects) في طبقة النطاق",
          desc: "اجعل الكيانات تتحقق من صحة حالتها ذاتياً (مثل التأكد من أن البريد الإلكتروني يحوي @ ومبلغ الشراء ليس سالباً)."
        },
        {
          title: "تجنب الاعتماديات الدائرية (Circular Dependencies)",
          desc: "اجعل تدفق الاستدعاءات يسير في اتجاه واحد هابط دائماً: Controllers -> Services -> Repositories -> Database."
        }
      ],
      keyTakeaways: [
        "القدرة على هيكلة مشاريع Node.js الضخمة بأسلوب الشركات التقنية العالمية.",
        "تطبيق مبادئ SOLID البرمجية وتفادي الشفرات المتشابكة (Spaghetti Code).",
        "بناء خدمات قابلة للاختبار المعزول بنسبة 100% باستخدام حقن الاعتماديات.",
        "عزل قواعد البيانات وأطر العمل الخارجية عن جوهر منطق الأعمال."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية لهندسة التطبيقات النظيفة والمعمارية الطبقية",
      entries: [
        { category: "Architecture", commandOrSyntax: "Controller -> Service -> Repository", description: "التسلسل المعماري القياسي ثلاثي الطبقات لفصل المسؤوليات", type: "concept" },
        { category: "Dependency Injection", commandOrSyntax: "class UserService { constructor(userRepo, emailService) { this.repo = userRepo; } }", description: "حقن المستودعات والخدمات عبر الباني لسهولة الاستبدال والاختبار", type: "code" },
        { category: "Domain Error", commandOrSyntax: "class AppError extends Error { constructor(msg, statusCode) { super(msg); this.statusCode = statusCode; } }", description: "كلاس أخطاء مخصص يحمل رمز الحالة ودلالة الخطأ المهنية", type: "code" },
        { category: "Interface", commandOrSyntax: "interface IUserRepository { findById(id: string): Promise<User | null>; }", description: "عقد برمجي مجرد يحدد توابع المستودع المستقلة عن تفاصيل القاعدة", type: "code" },
        { category: "DTO", commandOrSyntax: "class CreateUserDTO { constructor({ email, name }) { this.email = email; this.name = name; } }", description: "كائن نقل البيانات وتنقيتها بين طبقة العرض وطبقة الخدمات", type: "code" },
        { category: "Factory Pattern", commandOrSyntax: "const makeUserService = () => new UserService(new PrismaUserRepo());", description: "دالة مصنع مسؤولة عن تجميع وحقن الاعتماديات لتهيئة الخدمة", type: "code" },
        { category: "Entity", commandOrSyntax: "class User { constructor(id, email) { this.id = id; this.email = email; } }", description: "كيان النطاق الجوهري الذي يحمل القواعد المنطقية الثابتة للأعمال", type: "code" },
        { category: "Single Responsibility", commandOrSyntax: "AuthService / PaymentService / NotificationService", description: "فصل الخدمات المتخصصة بدلاً من حشر كل العمليات في خدمة واحدة متضخمة", type: "concept" },
        { category: "Mapper", commandOrSyntax: "UserMapper.toDomain(rawDbRow) / UserMapper.toResponse(entity)", description: "تحويل هياكل البيانات بين جداول القاعدة وكيانات النطاق واستجابات الـ API", type: "code" },
        { category: "Value Object", commandOrSyntax: "class Email { constructor(value) { if(!isValid(value)) throw new Error(); this.value = value; } }", description: "كائن قيمة غير قابل للتعديل يضمن صحة البيانات المدخلة ذاتياً", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-14",
      title: "مشروع عملي: معمارية نظيفة ثلاثية الطبقات لحجز التذاكر (Clean Architecture Booking Engine)",
      description: "بناء نظام حجز تذاكر مقسم معمارياً إلى طبقة العرض (Routes & Controllers)، طبقة منطق الأعمال (Services مع Custom Domain Errors)، وطبقة البيانات (Repositories مع DI الكامل).",
      difficulty: "متقدم - خبير",
      techStack: ["Node.js", "Clean Architecture", "Dependency Injection", "Domain-Driven Design"],
      directoryStructure: `clean-booking-engine/
├── package.json
├── src/
│   ├── domain/
│   │   └── errors.js
│   ├── repositories/
│   │   └── bookingRepository.js
│   ├── services/
│   │   └── bookingService.js
│   ├── controllers/
│   │   └── bookingController.js
│   └── app.js
└── index.js`,
      codeFiles: [
        {
          filename: "src/services/bookingService.js",
          code: `// استيراد أخطاء النطاق المخصصة
import { SeatAlreadyBookedError, InvalidSeatError } from '../domain/errors.js';

// طبقة منطق الأعمال المعزولة تماماً عن HTTP وقواعد البيانات
export class BookingService {
  #repository;
  #notifier;

  // حقن المستودع وخدمة الإشعارات عبر الباني
  constructor(repository, notifier) {
    this.#repository = repository;
    this.#notifier = notifier;
  }

  // تنفيذ منطق حجز المقعد
  async bookSeat(userId, seatNumber) {
    // 1. التحقق من صلاحية رقم المقعد
    if (seatNumber < 1 || seatNumber > 100) {
      throw new InvalidSeatError(\`رقم المقعد \${seatNumber} غير متاح في هذه الصالة\`);
    }

    // 2. التحقق من عدم حجز المقعد مسبقاً
    const existing = await this.#repository.findBySeat(seatNumber);
    if (existing) {
      throw new SeatAlreadyBookedError(\`المقعد رقم \${seatNumber} محجوز بالفعل لمستخدم آخر\`);
    }

    // 3. حفظ الحجز الجديد
    const booking = await this.#repository.save({
      userId,
      seatNumber,
      bookedAt: new Date(),
      status: 'CONFIRMED'
    });

    // 4. إرسال إشعار للمستخدم في الخلفية
    await this.#notifier.sendConfirmation(userId, booking);

    return booking;
  }
}`,
          explanation: "الخدمة تطبق منطق الأعمال النقي وتعتمد على حقن الاعتماديات وترمي أخطاء نطاق مخصصة."
        },
        {
          filename: "src/domain/errors.js",
          code: `// أخطاء منطق الأعمال المخصصة
export class DomainError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}

export class SeatAlreadyBookedError extends DomainError {
  constructor(message) {
    super(message, 409); // Conflict
  }
}

export class InvalidSeatError extends DomainError {
  constructor(message) {
    super(message, 422); // Unprocessable Entity
  }
}`,
          explanation: "كلاسات أخطاء النطاق تحدد نوع المشكلة برمجياً ورمز الـ HTTP المقابل لها بدقة."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd clean-booking-engine",
        "شغل التطبيق: node index.js",
        "لاحظ كيف يعالج النظام استثناءات النطاق المخصصة ويعزل طبقات التطبيق بكفاءة"
      ]
    }
  },
  15: {
    summary: {
      overview: "يشرح هذا القسم منظومة الاختبارات وضمان الجودة (Quality Assurance) وتصحيح الأخطاء في بيئة Node.js. يغطي هرم الاختبارات (Testing Pyramid)، كتابة اختبارات الوحدة (Unit Testing) باستخدام Vitest أو Jest، اختبارات التكامل لواجهات API باستخدام Supertest، تقنيات المحاكاة الوهمية (Mocking & Spying)، قياس نسبة تغطية الكود (Code Coverage)، تصحيح الأخطاء عبر Node Inspector وأدوات VS Code Debugger، وأتمتة الجودة عبر Linters.",
      goldenRules: [
        {
          title: "اختبر السلوك والنتائج وليس التفاصيل التنفيذية الداخلية",
          desc: "ركز على مخرجات الدالة وحالات الخطأ المتوقعة؛ فالتركيز على التفاصيل الداخلية يجعل الاختبارات هشة وتنكسر مع أي إعادة هيكلة (Refactoring)."
        },
        {
          title: "هرم الاختبارات: كثرة اختبارات الوحدة وتوازن اختبارات التكامل",
          desc: "اجعل 70% من اختباراتك Unit Tests سريعة ورخيصة، و20% Integration Tests لمسارات الـ API مع القاعدة، و10% E2E للسيناريوهات الحيوية."
        },
        {
          title: "استخدم Supertest لاختبار مسارات Express دون تشغيل خادم حقيقي",
          desc: "يتيح لك Supertest إرسال طلبات وهمية مباشرة لكائن تطبيق Express وفحص رموز الحالة وترويسات الاستجابة وجسم JSON بدقة وسرعة هائلة."
        },
        {
          title: "عزل الاختبارات وتنظيف قاعدة البيانات بعد كل فحص (Isolation)",
          desc: "استخدم خطافات beforeEach و afterEach لتصفية السجلات المؤقتة حتى لا يؤثر نجاح اختبار على نتائج اختبار آخر."
        },
        {
          title: "المحاكاة الوهمية (Mocking) للخدمات الخارجية وبوابات الدفع",
          desc: "لا ترسل إيميلات حقيقية أو استدعاءات لواجهات Stripe أو OpenAI في الاختبارات؛ استخدم vi.fn() و vi.mock() لمحاكاة الردود."
        },
        {
          title: "الهدف ليس 100% تغطية شكلية بل تغطية الحالات الحرجة والحدودية",
          desc: "اختبر السيناريوهات الخاطئة والمدخلات الشاذة (Edge Cases) مثل القيم الفارغة والأعداد السالبة ومحاولات الاختراق."
        },
        {
          title: "استخدم المصحح المدمج node --inspect لتتبع الأعطال",
          desc: "توقف عن وضع console.log في كل مكان؛ استخدم نقاط التوقف (Breakpoints) وفحص الـ Call Stack عبر أدوات التصحيح المتطورة."
        },
        {
          title: "دمج الاختبارات في مسار التكامل المستمر (CI Pipeline)",
          desc: "امنع دمج أي كود في الفرع الرئيسي ما لم تجتز جميع الاختبارات الآلية بنسبة 100% وتستوفي عتبة التغطية المحددة."
        }
      ],
      keyTakeaways: [
        "بناء أجنحة اختبارات متكاملة تغطي كافة مسارات التطبيق باستخدام أحدث أدوات الفحص.",
        "القدرة على محاكاة الاتصالات بالشبكة وقواعد البيانات بكفاءة عالية.",
        "فحص مسارات Express وضمان سلامة رموز الاستجابة وهياكل الـ JSON عبر Supertest.",
        "تصحيح الأخطاء المعقدة وتتبع تسريب الذاكرة والـ Breakpoints عبر Node Inspector."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية للاختبارات وتصحيح الأخطاء وجودة الكود (Testing & QA)",
      entries: [
        { category: "Test Runner", commandOrSyntax: "npx vitest run --coverage", description: "تشغيل كافة الاختبارات واستخراج تقرير نسبة تغطية الأكواد البرمجية", type: "cli" },
        { category: "Supertest", commandOrSyntax: "const res = await request(app).get('/api/users').expect(200);", description: "إرسال طلب تجريبي لمسار Express والتحقق التلقائي من رمز الحالة 200", type: "code" },
        { category: "Assertions", commandOrSyntax: "expect(res.body.data).toHaveLength(3);", description: "التحقق من أن مصفوفة النتائج المسترجعة تحتوي على 3 عناصر بالضبط", type: "code" },
        { category: "Mocking", commandOrSyntax: "const mockSend = vi.fn().mockResolvedValue({ sent: true });", description: "إنشاء دالة وهمية لمحاكاة استدعاء خدمة خارجية وتحديد قيمتها المعادة", type: "code" },
        { category: "Spying", commandOrSyntax: "const spy = vi.spyOn(logger, 'error'); expect(spy).toHaveBeenCalled();", description: "مراقبة دالة والتأكد من أنها تم استدعاؤها بالفعل أثناء الاختبار", type: "code" },
        { category: "Debugging", commandOrSyntax: "node --inspect-brk index.js", description: "تشغيل التطبيق مع إيقاف التنفيذ عند السطر الأول لربط المصحح في Chrome DevTools", type: "cli" },
        { category: "Hooks", commandOrSyntax: "beforeAll(async () => await db.connect()); afterAll(async () => await db.disconnect());", description: "خطافات تهيئة الاتصال قبل بدء الاختبارات وتنظيف الموارد بعد انتهائها", type: "code" },
        { category: "Exception Test", commandOrSyntax: "await expect(service.pay(-50)).rejects.toThrow('مبلغ غير صالح');", description: "التحقق من أن الدالة ترمي استثناء الخطأ المتوقع عند تمرير مدخل غير سليم", type: "code" },
        { category: "Snapshot", commandOrSyntax: "expect(output).toMatchSnapshot();", description: "مقارنة مخرجات الكود مع لقطة سابقة موثقة لاكتشاف التغييرات غير المقصودة", type: "code" },
        { category: "Watch Mode", commandOrSyntax: "npx vitest watch", description: "تشغيل الاختبارات في وضع المراقبة اللحظية وإعادة الفحص عند تعديل أي ملف", type: "cli" }
      ]
    },
    miniProject: {
      id: "project-sec-15",
      title: "مشروع عملي: جناح اختبارات تكاملي شامل لواجهات REST API (Supertest Test Suite)",
      description: "بناء جناح اختبارات آلي متكامل يختبر واجهة المنتجات والمستخدمين، يتحقق من الحالات السليمة والأخطاء، يحاكي خدمة قاعدة البيانات، ويولد تقرير تغطية يتجاوز 90%.",
      difficulty: "متقدم",
      techStack: ["Node.js", "Express.js", "Supertest", "Vitest/Jest", "Mocking"],
      directoryStructure: `supertest-suite/
├── package.json
├── src/
│   ├── app.js
│   └── userService.js
├── tests/
│   ├── userApi.test.js
│   └── userService.test.js
└── vitest.config.js`,
      codeFiles: [
        {
          filename: "tests/userApi.test.js",
          code: `// كود اختبار تكاملي لمسار إنشاء المستخدمين باستخدام Supertest
import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { app } from '../src/app.js';
import * as userService from '../src/userService.js';

describe('POST /api/users - اختبارات واجهة المستخدمين', () => {
  it('يجب أن ينشئ مستخدماً جديداً ويرجع الرمز 201 عند إرسال بيانات صحيحة', async () => {
    // محاكاة دالة حفظ المستخدم في قاعدة البيانات
    vi.spyOn(userService, 'createUser').mockResolvedValue({
      id: 'usr_123',
      name: 'علي حسن',
      email: 'ali@example.com'
    });

    // إرسال الطلب عبر Supertest
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'علي حسن', email: 'ali@example.com' });

    // التحقق من رمز الحالة والمخرجات
    expect(response.status).toBe(201);
    expect(response.body.status).toBe('success');
    expect(response.body.data.id).toBe('usr_123');
  });

  it('يجب أن يرجع الرمز 400 عند إرسال بريد إلكتروني غير صالح', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'علي حسن', email: 'invalid-email' });

    expect(response.status).toBe(400);
    expect(response.body.message).toContain('بريد غير صالح');
  });
});`,
          explanation: "يختبر هذا الملف المسار السليم ومسار الخطأ باستخدام محاكاة الدوال الوهمية وفحص استجابة HTTP."
        },
        {
          filename: "src/app.js",
          code: `// تطبيق Express المخصص للاختبار
import express from 'express';
import { createUser } from './userService.js';

export const app = express();
app.use(express.json());

app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ status: 'error', message: 'بريد غير صالح' });
  }
  const user = await createUser({ name, email });
  res.status(201).json({ status: 'success', data: user });
});`,
          explanation: "تطبيق Express مصمم لاختباره بسلاسة دون الحاجة لربطه بمنفذ حقيقي أثناء تشغيل الاختبارات."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd supertest-suite",
        "ثبت حزم الاختبار: npm install express && npm install -D vitest supertest",
        "شغل الاختبارات: npx vitest run",
        "شاهد اجتياز الاختبارات وتأكيد حماية المسارات من الأخطاء البرمجية"
      ]
    }
  },
  16: {
    summary: {
      overview: "يشرح هذا القسم كيفية بناء تطبيقات الوقت الفعلي فائقة السرعة ومعالجة المهام الخلفية غير المتزامنة. يغطي بروتوكول WebSocket المزدوج وثنائي الاتجاه (Full-Duplex)، مكتبة Socket.IO وإدارة الغرف (Rooms) والأحداث المخصصة، بناء طوابير الرسائل والمهام الثقيلة في الخلفية باستخدام BullMQ ومخزن Redis، وجدولة المهام الدورية (Cron Jobs) لمعالجة البيانات وأتمتة التقارير.",
      goldenRules: [
        {
          title: "استخدم WebSockets للتحديثات اللحظية والـ HTTP للعمليات العادية",
          desc: "لا تستبدل REST APIs بـ WebSockets؛ استخدم HTTP للعمليات المعتادة وخصص اتصال WebSocket للمحادثات الحية والمؤشرات اللحظية والإشعارات."
        },
        {
          title: "فوض المهام الثقيلة إلى طوابير المعالجة الخلفية (Job Queues)",
          desc: "إرسال رسائل البريد، معالجة ملفات PDF، وتوليد الفيديوهات يجب ألا تنفذ في مسار الطلب؛ أضف المهمة لطابور BullMQ ودع الـ Worker يعالجها بهدوء."
        },
        {
          title: "نظم اتصالات Socket.IO في غرف (Rooms) لتفادي البث العشوائي",
          desc: "بدلاً من إرسال الإشعار لجميع المتصلين (io.emit)، أرسله للغرفة المخصصة (io.to(roomId).emit) لتقليل استهلاك الشبكة وحماية الخصوصية."
        },
        {
          title: "تأمين مصادقة اتصالات WebSocket عبر Middleware",
          desc: "تحقق من صحة JWT Token أثناء مصافحة الاتصال (Handshake) في Socket.IO؛ وارفض الاتصال فوراً إذا كان الرمز غير صالح أو منتهي الصلاحية."
        },
        {
          title: "استخدم معمارية Redis Adapter لتوسيع Socket.IO عبر خوادم متعددة",
          desc: "عند تشغيل عدة حاويات من السيرفر خلف Load Balancer، يضمن Redis Adapter وصول الرسالة بين مستخدمين متصلين بسيرفرات مختلفة."
        },
        {
          title: "تحديد سياسة إعادة المحاولة (Retry Policy) في طوابير المهام",
          desc: "اضبط التراجع الأسي (Exponential Backoff) للمهام التي قد تفشل بسبب تعثر مؤقت في الشبكة لمنع تكرار المحاولات العنيف وفقدان البيانات."
        },
        {
          title: "جدولة المهام عبر Cron بحذر مع حماية التنفيذ المزدوج (Locking)",
          desc: "عند تشغيل خوادم مكررة، استخدم قفل Redlock لمنع تشغيل نفس المهمة المجدولة (مثل إرسال كشوف الحسابات) مرتين في اللحظة نفسها."
        },
        {
          title: "تنظيف الذاكرة وإغلاق اتصالات الـ Sockets المنقطعة",
          desc: "استمع دائماً لحدث disconnect لتنظيف مراجع المستخدمين وإزالتهم من الغرف النشطة لمنع تسريب الذاكرة."
        }
      ],
      keyTakeaways: [
        "بناء غرف محادثة وأنظمة إشعارات حية ثنائية الاتجاه باستخدام Socket.IO.",
        "تأمين مصافحات اتصالات الوقت الفعلي بالتحقق من رموز الـ JWT.",
        "بناء ومعالجة طوابير المهام الخلفية الموثوقة باستخدام BullMQ و Redis.",
        "جدولة المهام المؤتمتة باستخدام node-cron وإدارتها بأمان وموثوقية."
      ]
    },
    cheatSheet: {
      title: "البطاقة المرجعية لتطبيقات الوقت الحقيقي وطوابير المهام الخلفية",
      entries: [
        { category: "Socket.IO Server", commandOrSyntax: "import { Server } from 'socket.io'; const io = new Server(httpServer, { cors: { origin: '*' } });", description: "تهيئة خادم Socket.IO وربطه بخادم HTTP مع إعدادات CORS", type: "code" },
        { category: "Socket Connect", commandOrSyntax: "io.on('connection', (socket) => { console.log('عميل متصل:', socket.id); });", description: "الاستماع لاتصال عميل جديد والحصول على معرف الجلسة الفريد socket.id", type: "code" },
        { category: "Join Room", commandOrSyntax: "socket.join('room_101');", description: "ضم العميل إلى غرفة مخصصة لاستقبال رسائلها الحصرية فقط", type: "code" },
        { category: "Room Emit", commandOrSyntax: "io.to('room_101').emit('new_message', payload);", description: "إرسال حدث مخصص لكافة المشتركين في غرفة محددة دون غيرهم", type: "code" },
        { category: "BullMQ Queue", commandOrSyntax: "const emailQueue = new Queue('emails', { connection: redisConfig });", description: "إنشاء طابور مهام جديد مدعوم باتصال Redis", type: "code" },
        { category: "Add Job", commandOrSyntax: "await emailQueue.add('welcome_email', { to: 'user@test.com' }, { attempts: 3, backoff: 5000 });", description: "إضافة مهمة للطابور مع محاولة إعادة المحاولة 3 مرات عند الفشل", type: "code" },
        { category: "BullMQ Worker", commandOrSyntax: "const worker = new Worker('emails', async job => { await sendMail(job.data); }, { connection: redisConfig });", description: "معالج المهام في الخلفية الذي يستلم المهام من الطابور وينفذها", type: "code" },
        { category: "Cron Schedule", commandOrSyntax: "cron.schedule('0 0 * * *', () => { /* Daily at Midnight */ });", description: "جدولة مهمة دورية تنفذ يومياً في منتصف الليل بدقة", type: "code" },
        { category: "Socket Auth", commandOrSyntax: "io.use((socket, next) => { const token = socket.handshake.auth.token; next(); });", description: "وسيط التحقق من مصادقة العميل قبل السماح له بإتمام اتصال الـ Socket", type: "code" },
        { category: "Disconnect", commandOrSyntax: "socket.on('disconnect', () => { console.log('انقطع الاتصال'); });", description: "الاستماع لانقطاع اتصال العميل وإجراء عمليات التنظيف اللازمة", type: "code" }
      ]
    },
    miniProject: {
      id: "project-sec-16",
      title: "مشروع عملي: مركز الإشعارات الحية وطوابير المعالجة الخلفية (Real-Time Notification & BullMQ Center)",
      description: "بناء نظام إشعارات متكامل يتلقى طلبات إرسال الإشعارات عبر REST API، يضعها في طابور BullMQ، ويعالجها عامل خلفي (Worker) ثم يبثها لحظياً للمستخدمين عبر Socket.IO.",
      difficulty: "متقدم - خبير",
      techStack: ["Node.js", "Socket.IO", "BullMQ", "Redis", "Real-Time Architecture"],
      directoryStructure: `realtime-notification-center/
├── package.json
├── src/
│   ├── queue/
│   │   ├── notificationQueue.js
│   │   └── notificationWorker.js
│   ├── sockets/
│   │   └── socketManager.js
│   └── server.js
└── index.js`,
      codeFiles: [
        {
          filename: "src/queue/notificationQueue.js",
          code: `// محاكي طابور المهام في الذاكرة لتوضيح التدفق
export class InMemoryQueue {
  #jobs = [];
  #handler = null;

  // تسجيل دالة معالج المهام
  process(handler) {
    this.#handler = handler;
  }

  // إضافة مهمة جديدة للطابور وتشغيل المعالجة غير المتزامنة
  async add(name, data) {
    const job = { id: \`job_\${Date.now()}\`, name, data, createdAt: new Date() };
    this.#jobs.push(job);
    console.log(\`📥 أُضيفت مهمة جديدة للطابور: [\${name}] المعرف: \${job.id}\`);

    // محاكاة استلام العامل للمهمة في الخلفية بعد لحظات
    setTimeout(async () => {
      if (this.#handler) {
        try {
          await this.#handler(job);
          console.log(\`✓ اكتملت معالجة المهمة بنجاح: \${job.id}\`);
        } catch (e) {
          console.error(\`✕ فشل معالجة المهمة \${job.id}:\`, e.message);
        }
      }
    }, 200);

    return job;
  }
}`,
          explanation: "يحاكي هذا الكلاس طابور المهام BullMQ ويفصل استقبال الطلبات عن معالجتها في الخلفية."
        },
        {
          filename: "src/server.js",
          code: `// تطبيق محاكاة مركز الإشعارات اللحظية
import { InMemoryQueue } from './queue/notificationQueue.js';

const queue = new InMemoryQueue();

// ربط معالج المهام الخلفي لبث الإشعار
queue.process(async (job) => {
  const { recipientId, title, message } = job.data;
  console.log(\`⚡ [العامل الخلفي] جاري بث الإشعار للمستخدم \${recipientId} عبر WebSocket...\`);
  console.log(\`📢 إشعار مباشر: "\${title}" -> \${message}\`);
});

// محاكاة وصول طلبات متعددة من واجهات الـ API
async function simulateIncomingEvents() {
  console.log("=== تشغيل مركز الإشعارات اللحظية وطوابير المعالجة ===");
  await queue.add('SEND_ALERT', {
    recipientId: 'user_401',
    title: 'طلب جديد',
    message: 'تم استلام طلب شراء جديد برقم #9821'
  });
  await queue.add('SECURITY_NOTICE', {
    recipientId: 'user_401',
    title: 'تنبيه أمني',
    message: 'تم تسجيل دخول جديد من متصفح غير معروف'
  });
}

simulateIncomingEvents();`,
          explanation: "يوضح هذا الملف كيف يتم تسليم المهام للطابور ومعالجتها وبثها للمستخدم دون تعطيل الخادم."
        }
      ],
      stepsToRun: [
        "افتح المجلد: cd realtime-notification-center",
        "شغل المركز التجريبي: node src/server.js",
        "شاهد في الشاشة كيف يستقبل الطابور المهام فورياً ثم يعالجها العامل في الخلفية ويبثها للمستخدمين"
      ]
    }
  }
};
