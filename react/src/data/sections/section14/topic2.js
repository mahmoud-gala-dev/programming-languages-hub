// src/data/sections/section14/topic2.js

export const topic2 = {
  id: "14-2",
  title: "إعداد وتهيئة React مع TypeScript",
  englishTitle: "React Setup & Core Typings with TypeScript",
  description:
    "دليل شامل لتأسيس وهندسة مشاريع React المبنية بلغة TypeScript: من تهيئة بيئة التطوير فائقة السرعة بـ Vite، وفهم الفارق المعماري بين امتدادات ملفات .ts و .tsx، وضبط ملف الإعدادات tsconfig.json وتفعيل الوضع الصارم Strict Mode، إلى صياغة العقود النمطية لخصائص المكونات (Typing Props)، والتمييز الدقيق بين ReactNode و ReactElement و JSX.Element عند تمرير children، وتوثيق أحداث المستخدم التفاعلية (Mouse, Change, Form Events)، وتمرير دوال النداء الراجع (Callback Functions) بسلامة نمطية مطلقة.",
  subtopics: [
    {
      id: "14-2-a",
      title: "إنشاء مشروع React TypeScript باستخدام Vite",
      englishTitle: "Bootstrapping a React + TypeScript Project with Vite",
      pronunciation: "بوتسترابنج أ ريأكت بلس تايب سكريبت بروجكت وذ فايت",
      meaning: "إنشاء بيئة تطوير متكاملة ومجهزة مسبقاً لدعم TypeScript وJSX في ثوانٍ معدودة",
      description:
        "يُعد Vite هو المعيار الحديث الرائد لإنشاء وتطوير مشاريع React وTypeScript؛ حيث يوفر سرعة تشغيل وإعادة تحميل لحظي (Hot Module Replacement - HMR) فائقة بفضل اعتماده على محرك `esbuild` المكتوب بلغة Go. لإنشاء مشروع جديد، يوفر Vite قالباً رسمياً جاهزاً يسمى `react-ts` يتضمن كافة إعدادات TypeScript والمترجم مسبقاً دون الحاجة لأي تهيئة يدوية معقدة. يقوم Vite بالتعامل مع TypeScript بذكاء: فهو يقوم فقط بـ 'تجريد الأنواع' (Transpilation) بسرعة خارقة أثناء تشغيل خادم التطوير، بينما يترك فحص الأنواع الصارم (Type Checking) لمحرر النصوص (VS Code) أو لأمر `tsc` قبل بناء نسخة الإنتاج عبر السكريبت القياسي `\"build\": \"tsc -b && vite build\"` لضمان عدم خروج أي خطأ إلى الإنتاج.",
      analogy:
        "إنشاء المشروع بـ Vite وقالب react-ts يشبه استئجار سيارة سباق مجهزة بكافة أنظمة الملاحة والأمان المسبقة؛ تدخل المفتاح وتنطلق فوراً في مضمار السباق، بدلاً من شراء قطع غيار منفصلة وقضاء أسابيع في تجميع المحرك وضبط الكهرباء يدوياً (Webpack القديم).",
      whyItMatters:
        "يوفر ساعات طويلة من التكوينات المعقدة لحزم Babel و Webpack، ويمنح المطور بيئة عمل سريعة جداً مع ضمان فحص الأنواع تلقائياً قبل إنشاء أي نسخة إنتاجية.",
      syntax: `// أوامر إنشاء مشروع React مع TypeScript بـ Vite:
npm create vite@latest my-react-ts-app -- --template react-ts

// الانتقال للمجلد وتثبيت الحزم:
cd my-react-ts-app
npm install

// تشغيل خادم التطوير المحلي:
npm run dev`,
      simpleExample: `// هيكل ملف package.json الناتج من قالب react-ts
{
  "name": "my-react-ts-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build", // فحص الأنواع أولاً ثم بناء الإنتاج
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.5",     // أنواع React الرسمية لـ TypeScript
    "@types/react-dom": "^18.3.0", // أنواع React DOM الرسمية
    "@vitejs/plugin-react": "^4.3.1",
    "typescript": "^5.5.3",        // محرك TypeScript الأساسي
    "vite": "^5.4.2"
  }
}`,
      advancedExample: `// محاكي سكربت البناء وفحص الأنواع المعماري في بيئات CI/CD
// في ملفات package.json، يتم تقسيم أوامر TypeScript لضمان الأمان في مسارات النشر:
export const BuildPipelineManifest = {
  // أمر الفحص النمطي الصافي بدون توليد ملفات جافاسكريبت (Type-Check Only)
  typeCheckScript: "tsc --noEmit",

  // أمر البناء المزدوج: فحص الأنواع الصارم أولاً ثم استدعاء Vite للتحزيم
  productionBuildScript: "tsc -b && vite build",

  // شرح فلسفة المعمارية
  architectureRationale: "إذا كان هناك خطأ واحد في الأنواع في أي ملف، سيفشل أمر tsc ويتوقف البناء فوراً لمنع نشر كود معطوب للإنتاج."
};

console.log("استراتيجية فحص الأنواع في Vite:", BuildPipelineManifest.productionBuildScript);`,
      outputExplanation:
        "يوضح المثالان حزمة الإعدادات المعمارية: حزم `@types/react` و `@types/react-dom` التي تزود TypeScript بالمعرفة الكاملة لكافة خطافات ومكونات وأحداث React، وسكريبت `tsc -b && vite build` الذي يحرس بوابة الإنتاج ويرفض إتمام عملية التحزيم إذا وجد أي خطأ نمطي.",
      commonMistakes: [
        {
          mistake: "نسيان تثبيت حزم @types/react و @types/react-dom، مما يجعل TypeScript تعترض على استيراد React وتجهل وجود JSX.",
          fix: "تأكد دائماً من وجود @types/react و @types/react-dom ضمن devDependencies في مشروعك."
        },
        {
          mistake: "حذف أمر tsc من سكريبت البناء والاعتماد على vite build فقط، مما يسمح للأكواد ذات أخطاء الأنواع بالمرور للإنتاج دون فحص.",
          fix: "حافظ دائماً على وجود tsc -b قبل vite build لضمان التدقيق النمطي الإلزامي قبل النشر."
        }
      ],
      bestPractices: [
        "استخدم دائماً القالب الرسمي react-ts عبر Vite كأساس لأي تطبيق React جديد.",
        "شغل أمر npx tsc --noEmit في بيئة التكامل المستمر (CI/CD) للتأكد من خلو المشروع بأكمله من أي أخطاء نمطية قبل الدمج.",
        "حافظ على تحديث إصدارات حزم @types/react لتتوافق دائماً مع إصدار React المثبت في مشروعك."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "منظومة React + TypeScript في بيئة Vite",
        items: [
          {
            title: "محرك Vite & esbuild",
            points: [
              "تجريد الأنواع في أجزاء من الثانية",
              "إعادة تحميل لحظي فائق السرعة HMR",
              "سرعة تشغيل تفوق الأدوات التقليدية بـ 20 ضعفاً"
            ]
          },
          {
            title: "حزم @types الرسمية",
            points: [
              "@types/react: توثيق نمطي لجميع مكونات وخطافات React",
              "@types/react-dom: توثيق عناصر DOM وطرق التصيير",
              "توفر الإكمال الذكي لكل خصائص HTML المدمجة"
            ]
          },
          {
            title: "حراسة الإنتاج (tsc -b)",
            points: [
              "فحص عميق وشامل لسلامة شجرة المكونات",
              "منع خروج أي كود يحتوي على تعارضات نمطية",
              "ضمان استقرار وموثوقية التطبيق أمام المستخدمين"
            ]
          }
        ]
      }
    },
    {
      id: "14-2-b",
      title: "فهم ملفات ts و tsx والفرق المعماري بينهما",
      englishTitle: "Understanding .ts vs .tsx Extensions in React",
      pronunciation: "أندرستاندنج دوت تي إس فيرسس دوت تي إس إكس إكستنشنز",
      meaning: "التمييز بين ملفات المنطق البرمجي الصافي وملفات واجهات المكونات التفاعلية",
      description:
        "في مشاريع React المبنية بـ TypeScript، يتم تقسيم الملفات بدقة إلى امتدادين متميزين: 1) `.tsx`: هو الامتداد المخصص للملفات التي تحتوي على كود واجهات مستخدم (JSX / TSX Elements)، مثل مكونات الصفحات، وبطاقات الواجهة، والمزودات (Providers). في هذه الملفات، يقوم المترجم بتفعيل معالج JSX الخاص برياكت للتعرف على وسوم الـ HTML والمكونات، 2) `.ts`: هو الامتداد المخصص لملفات المنطق والبرمجة الصافية التي 'لا تحتوي على أي وسوم JSX على الإطلاق'، مثل ملفات الدوال المساعدة (Utils)، وملفات الثوابت (Constants)، وطبقة استدعاءات الخادم (API Services)، ومتاجر الحالة (Zustand Stores / Redux Slices)، والأنواع المشتركة (types.ts). التمييز بينهما ضروري؛ لأن مترجم TypeScript في ملفات `.ts` يتعامل مع الأقواس المثلثة `<T>` كقوالب عامة (Generics) فقط، بينما في ملفات `.tsx` قد يلتبس الأمر بين الـ Generic ووسم JSX ما لم تكن الصياغة واضحة.",
      analogy:
        "الفرق يشبه الفرق بين كراج صيانة المحركات (ملفات .ts حيث العمل مقتصر على التروس والزيوت والمنطق الصافي)، وبين معرض السيارات الدائري الفاخر (ملفات .tsx حيث يتم عرض الهيكل الخارجي الجميل وتصميم الواجهة للزبائن).",
      whyItMatters:
        "استخدام الامتداد الصحيح يمنع أخطاء التصريف الغامضة، ويجعل هيكل المشروع نظيفاً وواضحاً لأي مهندس جديد ليعرف فوراً أين تقع المكونات وأين يقع المنطق.",
      syntax: `// ملف component.tsx: يحتوي على JSX
export function MyComponent() {
  return <div>مرحباً</div>; // مسموح في .tsx وممنوع في .ts
}

// ملف mathUtils.ts: منطق صافٍ فقط
export function add(a: number, b: number): number {
  return a + b;
}`,
      simpleExample: `// مثال لملف .ts صافٍ للمنطق البرمجي: src/utils/formatters.ts
// هذا الملف لا يحتوي على أي وسم JSX لذا يجب أن يكون امتداده .ts حصراً

export function formatCurrencySAR(amount: number): string {
  // تنسيق المبلغ بالريال السعودي
  return new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: 'SAR'
  }).format(amount);
}

export function truncateText(text: string, maxLength: number = 50): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}`,
      advancedExample: `// معضلة الأقواس المثلثة <T> في ملفات .tsx وكيفية حلها برمجياً
// في ملفات .tsx، إذا كتبت دالة سهمية معممة بهذا الشكل:
// const getFirst = <T>(arr: T[]) => arr[0];
// سيعترض المترجم ويظن أن <T> هو وسم JSX مفتوح لم يُغلق!

// الحل المعماري 1 في ملفات .tsx: إضافة فاصلة بعد T لإعلام المترجم بأنه Generic:
export const getFirstSafe = <T,>(arr: T[]): T | undefined => {
  return arr[0];
};

// الحل المعماري 2: استخدام كلمة extends لتقييد الـ Generic وتوضيحه للمترجم:
export const getLastSafe = <T extends unknown>(arr: T[]): T | undefined => {
  return arr[arr.length - 1];
};

// أو الأفضل معمارياً: وضع الدوال المعممة الصافية في ملف مستقل بامتداد .ts!`,
      outputExplanation:
        "يوضح المثال المتقدم إحدى أشهر المشاكل التقنية في ملفات `.tsx`: تصادم أقواس الـ Generics مع وسوم الـ JSX في الدوال السهمية، وكيف يتم حلها بوضع فاصلة `<T,>` أو تقييدها بـ `<T extends unknown>`، أو بنقلها إلى ملف `.ts` نقي.",
      commonMistakes: [
        {
          mistake: "محاولة كتابة وسم JSX مثل <div> داخل ملف ينتهي بامتداد .ts العادي والتعرض لخطأ Unexpected token.",
          fix: "أي ملف يحتوي على وسم JSX واحد على الأقل يجب أن ينتهي بامتداد .tsx دائماً."
        },
        {
          mistake: "تسمية جميع ملفات المشروع بـ .tsx حتى ملفات الدوال الحسابية والـ API.",
          fix: "احرص على استخدام .ts لملفات المنطق والأدوات والأنواع، واحصر .tsx فقط للمكونات والخطافات التي ترجع عناصر JSX."
        }
      ],
      bestPractices: [
        "استخدم امتداد .tsx لمكونات React والـ Layouts والـ Providers والمكونات المعممة.",
        "استخدم امتداد .ts لملفات الخدمات API، والـ Reducers، ومخازن Zustand، وملفات الثوابت والأدوات المساعدة.",
        "انقل الدوال المعممة الحسابية الصرفة إلى ملفات .ts لتفادي تعارض الأقواس المثلثة مع JSX."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "المقارنة المعمارية: ملفات .ts مقابل .tsx",
        items: [
          {
            title: "ملفات .ts (منطق نقي)",
            points: [
              "مخصصة لـ: الدوال المساعدة، الثوابت، API Services، Stores",
              "معالجة JSX: معطلة تماماً وغير مسموحة",
              "الـ Generics: تدعم <T> دون أي التباس بالأقواس",
              "المخرجات: منطق برمجي ورياضي صافٍ"
            ]
          },
          {
            title: "ملفات .tsx (واجهات تفاعلية)",
            points: [
              "مخصصة لـ: مكونات React، الصفحات، التخطيطات Layouts",
              "معالجة JSX: مفعلة بالكامل وترجم إلى React.createElement",
              "الـ Generics: تتطلب <T,> في الدوال السهمية لتفادي التداخل",
              "المخرجات: واجهات مستخدم بصرية مرسومة في الـ DOM"
            ]
          }
        ]
      }
    },
    {
      id: "14-2-c",
      title: "إعداد tsconfig.json والخيارات الجوهرية للإنتاج",
      englishTitle: "Configuring tsconfig.json & Production Compiler Options",
      pronunciation: "كونفيجرينج تي إس كونفيج دوت جيسون آند برودكشن كومبايلر أوبشنز",
      meaning: "الملف المركزي لضبط سلوك وقواعد مترجم TypeScript في المشروع",
      description:
        "`tsconfig.json` هو الدستور والملف المركزي الذي يحدد قواعد وسلوكيات مترجم TypeScript (`tsc`) في مشروعك. في بيئات React الحديثة المبنية بـ Vite، يتم تقسيم الإعدادات غالباً إلى ملفين: `tsconfig.json` الجذري، و `tsconfig.app.json` المخصص لكود التطبيق. يحتوي هذا الملف على حزمة من الخيارات المعمارية المصيرية: 1) `\"target\": \"ES2022\"`: يحدد إصدار جافاسكريبت الناتج، 2) `\"jsx\": \"react-jsx\"`: يفعل محول JSX الحديث لـ React 17+ دون الحاجة لاستيراد React في كل ملف، 3) `\"moduleResolution\": \"bundler\"`: يخبر المترجم بالاعتماد على أدوات التحزيم الحديثة مثل Vite، 4) `\"strict\": true`: يفعل الترسانة الكاملة للفحص الصارم، 5) `\"noUnusedLocals\"` و `\"noUnusedParameters\"`: يمنع وجود متغيرات أو معاملات مهجورة تلوث الذاكرة.",
      analogy:
        "ملف tsconfig.json يشبه كتاب القوانين واللوائح في مسابقة رياضية دولية؛ هو الذي يحدد معايير الحكام: هل التسلل يُحسب بالملليمتر (strict: true)، وما هو الزي المعتمد للاعبين، ومتى يتم إيقاف المباراة فوراً عند ارتكاب مخالفة.",
      whyItMatters:
        "الضبط السليم لملف tsconfig.json يضمن توافق كودك مع أحدث معايير الويب، ويمنع تراكم الأكواد المهملة، ويحقق أقصى استفادة من ميزات React الحديثة.",
      syntax: `// نموذج قياسي لملف tsconfig.app.json في React + Vite:
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": false,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}`,
      simpleExample: `// فحص أثر خاصية jsx: react-jsx على كود المكون
// بفضل إعداد "jsx": "react-jsx" في tsconfig.json:
// لم نعد بحاجة لكتابة: import React from 'react'; في أعلى كل ملف!

export function ModernHeader() {
  // يترجم تلقائياً إلى دالة jsx() الحديثة الخفيفة
  return (
    <header className="p-4 bg-slate-900 border-b border-slate-800">
      <h1 className="text-sm font-bold text-white">منصة الأكاديمية</h1>
    </header>
  );
}`,
      advancedExample: `// محاكي للتحقق من التزام الكود بقواعد tsconfig الصارمة
// 1. خاصية noUnusedLocals تمنع المتغيرات المعلقة غير المستخدمة:
export function ProcessOrderMetrics(orderId: number, amount: number): string {
  // const secretSalt = "12345"; // لو أزلنا التعليق سيطلق tsc خطأ: 'secretSalt' is declared but its value is never read!

  // 2. خاصية noUnusedParameters تمنع المعاملات المهملة:
  // إذا عرفنا معاملاً يجب استخدامه أو وضع شرطة سفلية قبله _unused:
  const formattedAmount = amount.toFixed(2);
  return \`طلب رقم #\${orderId}: إجمالي \${formattedAmount} ر.س\`;
}

// 3. خاصية noFallthroughCasesInSwitch تمنع الانزلاق غير المقصود بين حالات switch:
export function getStatusText(code: 1 | 2): string {
  switch (code) {
    case 1:
      return "قيد المعالجة";
      // نسيان break أو return هنا سيطلق خطأ تصريف صريح في tsconfig الصارم!
    case 2:
      return "مكتمل";
  }
}`,
      outputExplanation:
        "يوضح المثال المتقدم كيف تجبر خيارات `tsconfig.json` المطورين على كتابة كود نظيف وخالٍ من الهدر؛ فالمتغيرات غير المستهلكة يتم رصدها فوراً، والانزلاقات العرضية في جمل `switch` يتم حظرها، مما يحافظ على أعلى درجات الجودة الهندسية.",
      commonMistakes: [
        {
          mistake: "تعطيل خيار strict: false للتخلص من رسائل الأخطاء في مشروع جديد.",
          fix: "لا تعطل strict أبداً؛ فهو القلب الحقيقي لفائدة TypeScript، وتعطيله يفقدك أكثر من نصف قيمة اللغة."
        },
        {
          mistake: "استخدام إعداد jsx: react القديم بدلاً من react-jsx، مما يجبرك على استيراد React في كل ملف دون داعٍ.",
          fix: "تأكد من ضبط \"jsx\": \"react-jsx\" لاستخدام محول JSX التلقائي الحديث."
        }
      ],
      bestPractices: [
        "فعل noUnusedLocals و noUnusedParameters للحفاظ على نظافة الكود ومنع تراكم المتغيرات المهملة.",
        "استخدم \"skipLibCheck\": true لتسريع زمن فحص الأنواع عن طريق تخطي فحص ملفات .d.ts الخاصة بالمكتبات الخارجية.",
        "حدد مسارات الاستيراد المختصرة Path Aliases (مثل \"@/*\": [\"src/*\"]) داخل tsconfig لتسهيل قراءة الاستيرادات."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "أهم خيارات tsconfig.json في مشاريع React",
        items: [
          {
            title: "strict: true",
            points: [
              "تفعيل كافة فحوصات الأمان الصارمة",
              "تفعيل strictNullChecks لمنع أخطاء undefined",
              "حظر تحويل المتغيرات إلى any ضمنياً"
            ]
          },
          {
            title: "jsx: react-jsx",
            points: [
              "استخدام المحول الحديث لـ React 17+",
              "إلغاء إلزامية import React في كل ملف",
              "توليد كود إنتاج خفيف وسريع"
            ]
          },
          {
            title: "noUnusedLocals",
            points: [
              "رصد وحظر المتغيرات المهملة في الدوال",
              "تنظيف الذاكرة ومنع تلوث الملفات",
              "ضمان أن كل سطر كود له هدف ووظيفة"
            ]
          }
        ]
      }
    },
    {
      id: "14-2-d",
      title: "تفعيل وتطبيق الوضع الصارم (Strict Mode)",
      englishTitle: "Enforcing TypeScript Strict Mode & Zero-Tolerance Typings",
      pronunciation: "إنفورسنج تايب سكريبت ستريكت مود آند زيرو توليرانس تايبنجز",
      meaning: "الالتزام بأعلى معايير الأمان النمطي وغلق كافة الثغرات البرمجية في المشروع",
      description:
        "تفعيل `\"strict\": true` في TypeScript ليس مجرد خيار واحد؛ بل هو 'راية شاملة' (Master Umbrella Flag) تفعل تلقائياً حزمة من الفحوصات والقيود الصارمة التي تجعل الكود محصناً ضد الأعطال: 1) `strictNullChecks`: أهم قاعدة على الإطلاق، حيث تمنع اعتبار `null` و `undefined` كقيم صالحة للأنواع الأخرى، وتجبرك على التحقق الصريح قبل قراءة أي خاصية، 2) `noImplicitAny`: تمنع المترجم من استنتاج نوع `any` تلقائياً عندما يفشل في معرفة نوع المعاملات، وتجبرك على توثيق نوع كل مدخل، 3) `strictFunctionTypes`: تضمن تدقيقاً صارماً لمعاملات وتوافق الدوال، 4) `strictBindCallApply`: تضمن صحة المعاملات الممررة لدوال call و apply، 5) `noImplicitThis`: تمنع استخدام كلمة this دون سياق نمطي معلوم. العمل تحت مظلة Strict Mode يضمن القضاء التام على أخطاء 'Uncaught TypeError' الشهيرة.",
      analogy:
        "الوضع الصارم يشبه إجراءات التفتيش الأمني في المطارات الدولية؛ بدلاً من الاكتفاء بفحص التذكرة عند البوابة (كود متساهل)، يخضع كل مسافر وحقيبة لفحص الأشعة وتأكيد الهوية البيومترية، فلا يمكن لأي ثغرة أمنية أن تنفذ إلى الطائرة.",
      whyItMatters:
        "البرمجة في الوضع الصارم تجعل الكود قابلاً للصيانة لعشرات السنين؛ وتتيح لأي مطور في الفريق التعديل والابتكار بثقة تامة بأن النظام سيحميه من أي خطأ عرضي.",
      syntax: `// داخل tsconfig.json:
{
  "compilerOptions": {
    "strict": true // تفعيل الوضع الصارم الشامل
  }
}`,
      simpleExample: `// أثر strictNullChecks على فحص عناصر الـ DOM
// عند محاولة الوصول لعنصر في الصفحة:
const rootElement = document.getElementById('root');

// في الوضع غير الصارم (strict: false): يسمح بالتنفيذ وينهار إذا لم يوجد العنصر:
// rootElement.appendChild(myNode); // خطر خطأ تشغيلي!

// في الوضع الصارم (strict: true): نوع rootElement هو HTMLElement | null
// المترجم يمنع استدعاء appendChild حتى تفحص وجوده:
if (rootElement !== null) {
  rootElement.innerHTML = '<p>مرحباً بالعالم</p>'; // آمن تماماً ومصرح به
}`,
      advancedExample: `// أثر noImplicitAny و strictFunctionTypes على معالجات الأحداث
// 1. الدالة التالية ترفضها TypeScript في Strict Mode إذا لم نحدد نوع event:
// function handleInput(event) { ... } // Error: Parameter 'event' implicitly has an 'any' type!

// 2. الصياغة الصارمة المعتمدة التي تطلبها TypeScript:
function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>): void {
  const query = event.target.value;
  console.log("نص البحث الموثق:", query.trim());
}

// 3. منع استدعاء الدوال ذات المعاملات الاختيارية بشكل غير متوافق:
type CustomValidator = (input: string) => boolean;

const isEmailValidator: CustomValidator = (val) => {
  // المترجم يضمن هنا أن val هو string حصراً
  return val.includes('@') && val.includes('.');
};

console.log("نتيجة الفحص الصارم:", isEmailValidator("user@domain.com"));`,
      outputExplanation:
        "يوضح المثالان كيف يمنع Strict Mode تسرب القيم المجهولة أو غير الموثقة؛ فهو يجبر المطور على فحص عناصر الـ DOM القابلة للغياب، ويمنع ترك معلمات الأحداث كـ `any` مبهمة، مما يجعل كل دالة في التطبيق موثقة ومدققة.",
      commonMistakes: [
        {
          mistake: "محاولة تجاوز strictNullChecks باستخدام علامة التعجب غير الآمنة (Non-null assertion operator: element!) بكثرة.",
          fix: "استخدم if (element) أو Optional Chaining (?.) بدلاً من !؛ لأن علامة ! تسكت المترجم فقط وإذا كان العنصر null سينهار التطبيق أثناء التشغيل."
        },
        {
          mistake: "تأجيل تفعيل strict: true إلى نهاية المشروع، مما يجعل تفعيله لاحقاً كابوساً يتطلب تصحيح آلاف الأخطاء المتراكمة.",
          fix: "فعل strict: true من الدقيقة الأولى في إنشاء المشروع واعتد على الكتابة النظيفة منذ البداية."
        }
      ],
      bestPractices: [
        "حافظ دائماً على تفعيل \"strict\": true كمعيار غير قابل للتفاوض في كافة مشاريعك.",
        "تعامل مع رسائل Strict Mode كإرشادات ذكية تدلك على حالات حدية (Edge Cases) قد تكون غفلت عنها.",
        "تجنب استخدام المعامل غير الصارم ! إلا إذا كنت متأكداً بنسبة 100% أن العنصر موجود في DOM مسبقاً بصورة لا تقبل الشك."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "حزمة الفحوصات المفعلة داخل Strict Mode",
        items: [
          {
            title: "strictNullChecks",
            points: [
              "عزل null و undefined كأنواع مستقلة",
              "حظر قراءة الخصائص من متغيرات قد تكون فارغة",
              "إلغاء أخطاء Cannot read property of undefined"
            ]
          },
          {
            title: "noImplicitAny",
            points: [
              "حظر ترك معاملات الدوال بدون أنواع صريحة",
              "إجبار المطور على توثيق كافة المدخلات",
              "منع العودة غير المقصودة لفوضى جافاسكريبت"
            ]
          },
          {
            title: "strictFunctionTypes",
            points: [
              "تدقيق صارم لتوافق معاملات الدوال",
              "منع تمرير دوال تتوقع أنواعاً أوسع أو أضيق",
              "حماية استدعاءات الـ Callbacks من التضارب"
            ]
          }
        ]
      }
    },
    {
      id: "14-2-e",
      title: "تعريف أنواع خصائص المكونات (Typing Props)",
      englishTitle: "Typing React Component Props with Interfaces & Types",
      pronunciation: "تايبنج ريأكت كومبوننت بروبس وذ إنترفيسيز آند تايبس",
      meaning: "توثيق العقد النمطي الصارم للبيانات والخصائص التي يستقبلها المكون من الأب",
      description:
        "في React المبنية بـ TypeScript، تعتبر 'خصائص المكونات' (Props) هي نقطة التفاعل المركزية التي تستفيد بأقصى درجة من نظام الأنواع. بدلاً من تخمين الخصائص التي يحتاجها المكون، يتم تعريف `interface` أو `type` مخصص باسم المكون (مثل `interface UserCardProps`). يحدد هذا العقد بدقة: الخصائص الإلزامية، والخصائص الاختيارية (بـ `?`)، والأنواع الحرفية، والأنواع المعقدة. في React الحديثة (v18+)، يفضل مجتمع المطورين تعريف المكونات كدوال عادية مع كتابة النوع مباشرة في المعاملات بدلاً من استخدام النوع التاريخي `React.FC` (React.FunctionComponent)؛ لأن `React.FC` القديم كان يضيف `children` تلقائياً لكل المكونات حتى لو لم تكن تدعمه وسبب تعقيدات مع الـ Generics.",
      analogy:
        "عقد الـ Props يشبه كتالوج مواصفات قطعة غيار السيارات؛ يحدد لك بدقة قطر المسمار المطلوب، والجهد الكهربائي اللازم، والوزن؛ فإذا حاولت تركيب قطعة بجهد مختلف أو مسمار غير مطابق، تنبهك تعليمات الكتالوج فوراً قبل تشغيل المحرك.",
      whyItMatters:
        "يقضي على أخطاء تمرير خصائص مفقودة أو تمرير رقم بدلاً من نص، ويوفر إكمالاً تلقائياً ذكياً لكافة الخصائص بمجرد فتح وسم المكون `<MyComponent />`.",
      syntax: `// النمط الحديث الموصى به لتوثيق الـ Props:
interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  isDisabled?: boolean;
}

export function Button({ label, variant = 'primary', isDisabled = false }: ButtonProps) {
  return <button disabled={isDisabled} className={variant}>{label}</button>;
}`,
      simpleExample: `// مكون بطاقة مستخدم موثق بـ Interface صريحة
import React from 'react';

interface UserProfileCardProps {
  id: number;
  fullName: string;
  email: string;
  role: 'admin' | 'member';
  avatarUrl?: string; // خاصية اختيارية
}

export function UserProfileCard({
  id,
  fullName,
  email,
  role,
  avatarUrl = '/default-avatar.png'
}: UserProfileCardProps) {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <div className="flex items-center gap-3">
        <img src={avatarUrl} alt={fullName} className="w-10 h-10 rounded-full bg-slate-800" />
        <div>
          <h4 className="font-bold text-sm">{fullName}</h4>
          <p className="text-xs text-slate-400">{email}</p>
        </div>
      </div>
      <span className="text-[10px] text-emerald-400 font-mono mt-2 block">
        المعرف: #{id} ({role})
      </span>
    </div>
  );
}`,
      advancedExample: `// وراثة خصائص وسوم HTML القياسية (Component Props Inheritance)
import React from 'react';

// توسيع خصائص زر الـ HTML القياسي ليقبل كافة الخصائص المدمجة (onClick, disabled, type, etc.)
// بالإضافة للخصائص المخصصة الإضافية التي نريدها
interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost';
  isLoading?: boolean;
}

export function CustomButton({
  children,
  variant = 'solid',
  isLoading = false,
  className = '',
  disabled,
  ...restProps // استخراج وتمرير باقي خصائص HTML المدمجة تلقائياً
}: CustomButtonProps) {
  const baseClasses = "px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2";
  const variantClasses = variant === 'solid' ? "bg-indigo-600 text-white hover:bg-indigo-500" : "bg-transparent border border-slate-700 text-slate-300";

  return (
    <button
      disabled={disabled || isLoading}
      className={\`\${baseClasses} \${variantClasses} \${className} \${isLoading ? 'opacity-50 cursor-wait' : ''}\`}
      {...restProps}
    >
      {isLoading && <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />}
      {children}
    </button>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم قمة الاحتراف الهندسي في React + TS: وراثة `React.ButtonHTMLAttributes<HTMLButtonElement>` تجعل المكون يدعم تلقائياً أكثر من 50 خاصية مدمجة لزر الـ HTML (مثل `onClick`, `type`, `autoFocus`, `aria-*`) دون الحاجة لكتابتها يدوياً، مع إضافة الخصائص المخصصة `variant` و `isLoading`.",
      commonMistakes: [
        {
          mistake: "استخدام النمط القديم React.FC (مثل const Button: React.FC<Props> = ...) دون سبب وجيه في React الحديثة.",
          fix: "اكتب المكونات كدوال عادية function Button(props: ButtonProps)؛ فهي أبسط وتتعامل مع Generics و defaultProps بشكل أفضل."
        },
        {
          mistake: "إعادة كتابة خصائص أزرار أو حقول HTML يدوياً بدلاً من وراثة ComponentPropsWithoutRef أو ButtonHTMLAttributes.",
          fix: "استخدم الوراثة دائماً لمكونات الـ UI الأساسية لتمكين تمرير كافة خصائص المتصفح القياسية بأمان."
        }
      ],
      bestPractices: [
        "سمِّ واجهات الخصائص دائماً بنمط موحد: [ComponentName]Props (مثل CardProps, NavbarProps).",
        "وفر قيماً افتراضية للخصائص الاختيارية أثناء تفكيك الـ Props في رأس الدالة.",
        "استخدم ComponentPropsWithoutRef<'button'> لتوسيع عناصر الـ HTML الأصلية بنظافة وأمان كامل."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "أنماط توثيق الـ Props في React",
        items: [
          {
            title: "النمط البسيط المستقل",
            points: [
              "interface CardProps { title: string }",
              "يقتصر على الخصائص المخصصة للمكون فقط",
              "مثالي للمكونات المعقدة والبطاقات المستقلة"
            ]
          },
          {
            title: "نمط وراثة HTML Attributes",
            points: [
              "extends React.ButtonHTMLAttributes<T>",
              "يرث كافة خصائص الـ HTML القياسية (onClick, etc.)",
              "مثالي لأزرار وحقول ونماذج أنظمة التصميم Design Systems"
            ]
          },
          {
            title: "الخصائص الاختيارية والقيم الافتراضية",
            points: [
              "تمييز الحقول الثانوية بعلامة ?",
              "تفكيك المعاملات بقيم افتراضية: { size = 'md' }",
              "يمنع أخطاء undefined ويوفر مرونة للمستهلك"
            ]
          }
        ]
      }
    },
    {
      id: "14-2-f",
      title: "تعريف أنواع children والتمييز بين ReactNode و ReactElement",
      englishTitle: "Typing children: ReactNode vs ReactElement vs JSX.Element",
      pronunciation: "تايبنج تشيلدرن: ريأكت نود فيرسس ريأكت إليمنت فيرسس جيه إس إكس إليمنت",
      meaning: "المقارنة الدقيقة لتحديد نوع المحتوى المتداخل المحقون داخل المكونات",
      description:
        "خاصية `children` هي إحدى أكثر الخصائص استخداماً في معمارية المكونات التراكبية (Component Composition). عند توثيق نوع `children` في TypeScript، تتوفر ثلاثة خيارات متدرجة في السعة النمطية يجب على كل مهندس تمييزها بدقة: 1) `React.ReactNode`: هو النوع الأكثر شمولية وعمومية (The Golden Standard) لـ `children`؛ فهو يقبل كل ما يمكن لرياكت تصييره على الإطلاق (عناصر JSX، نصوص مجردة string، أرقام number، مصفوفات، فراغات boolean، null، و undefined)، 2) `React.ReactElement`: نوع أضيق يمثل حصراً 'عنصر JSX حقيقي' ناتج عن استدعاء مكون أو وسم HTML (كائن يحتوي على type و props)، ويرفض النصوص المجردة أو الأرقام، 3) `JSX.Element`: مكافئ مباشر لـ ReactElement ناتج عن مساحة الأسماء الشاملة. القاعدة المعمارية القياسية تنص على: 'استخدم دائماً React.ReactNode كنوع لـ children في كافة المكونات الحاوية ما لم تكن تشترط حصراً عنصراً برمجياً واحداً'.",
      analogy:
        "ReactNode يشبه صندوق شحن عالمي يقبل أي نوع من البضائع (طرود مغلفة، رسائل ورقية، أجهزة، أو حتى يبقى فارغاً). أما ReactElement فيشبه حقيبة كمبيوتر محمول صلبة مصممة خصيصاً لتتسع لجهاز إلكتروني واحد فقط وترفض وضع رسائل ورقية سائبة بداخلها.",
      whyItMatters:
        "اختيار النوع الصحيح يمنع أخطاء التعارض النمطي عند تمرير نصوص أو مصفوفات كأبناء لمكوناتك الحاوية، ويوفر أقصى درجات المرونة للمستهلك.",
      syntax: `// النمط القياسي لتوثيق children:
import React from 'react';

interface ContainerProps {
  title: string;
  children: React.ReactNode; // يقبل كل شيء صالح للرندر في React
}

export function Container({ title, children }: ContainerProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}`,
      simpleExample: `// مكون إطار زجاجي حاوٍ يستخدم React.ReactNode
import React from 'react';

interface GlassPanelProps {
  children: React.ReactNode; // يقبل نصوصاً أو عناصر أو مكونات متداخلة
  className?: string;
}

export function GlassPanel({ children, className = '' }: GlassPanelProps) {
  return (
    <div className={\`p-6 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl \${className}\`}>
      {children}
    </div>
  );
}

// يمكن استخدامه بنصوص، أو عناصر، أو مكونات متداخلة بأمان:
export function UsagePreview() {
  return (
    <GlassPanel>
      <h2 className="text-white font-bold text-sm">مرحباً بكم في الأكاديمية</h2>
      <p className="text-xs text-slate-400 mt-1">هذا نص مباشر صالح كـ ReactNode.</p>
    </GlassPanel>
  );
}`,
      advancedExample: `// المقارنة المتقدمة: متى نلزم المستهلك بـ ReactElement بدلاً من ReactNode؟
import React from 'react';

// في هذا المكون الخاص، نريد استنساخ العنصر بـ React.cloneElement وإضافة خصائص له
// لذلك نحن نشترط حصراً أن يكون الابن ReactElement حقيقي وليس نصاً مجرداً!
interface SingleActionSlotProps {
  // استخدام React.ReactElement يضمن أن الابن عنصر JSX حقيقي يحمل props
  children: React.ReactElement<{ className?: string; disabled?: boolean }>;
}

export function SingleActionSlot({ children }: SingleActionSlotProps) {
  // استنساخ العنصر بأمان مع حقن كلاسات إضافية
  return React.cloneElement(children, {
    className: \`\${children.props.className || ''} shadow-lg ring-2 ring-emerald-500/50\`
  });
}

// استهلاك صحيح: تمرير عنصر JSX حقيقي
export function ValidSlotUsage() {
  return (
    <SingleActionSlot>
      <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs">
        زر معتمد ومطابق
      </button>
    </SingleActionSlot>
  );
}

// لو حاول مطور تمرير نص مجرد: <SingleActionSlot>نص فقط</SingleActionSlot>
// ستعترض TypeScript فوراً لأن النص ليس ReactElement!`,
      outputExplanation:
        "يوضح المثالان الفرق بين السعة الشاملة لـ `ReactNode` (المستخدمة في 98% من المكونات الحاوية كـ GlassPanel)، وبين التقييد الصارم لـ `ReactElement` عند الحاجة لفحص أو استنساخ العنصر بـ `cloneElement`، مما يوضح متى نختار كل نوع بدقة.",
      commonMistakes: [
        {
          mistake: "استخدام JSX.Element كنوع لـ children في المكونات الحاوية، مما يمنع تمرير النصوص العادية أو الأرقام كأبناء ويطلق خطأ نمطي.",
          fix: "استخدم دائماً React.ReactNode لخاصية children؛ فهو النوع الأشمل والموصى به رسمياً في توثيق React."
        },
        {
          mistake: "افتراض أن TypeScript تضيف children تلقائياً للمكونات بدون تعريفها في الـ Props.",
          fix: "في React 18+ الحديثة، تم إلغاء الإضافة التلقائية لـ children؛ يجب عليك تعريف children?: React.ReactNode صراحة في واجهة الـ Props."
        }
      ],
      bestPractices: [
        "اجعل React.ReactNode هو خيارك الافتراضي الدائم لخاصية children.",
        "استخدم PropsWithChildren<T> المستوردة من react كطريقة مختصرة لإضافة children تلقائياً لأي واجهة: interface MyProps extends PropsWithChildren<{ title: string }>.",
        "استخدم React.ReactElement فقط عندما تشترط أن يكون الابن مكوناً أو عنصراً واحداً قابلاً للاستنساخ بـ cloneElement."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "التسلسل الهرمي لأنواع التصيير في React",
        items: [
          {
            title: "React.ReactNode (الأشمل)",
            points: [
              "يقبل: عناصر JSX، نصوص، أرقام، مصفوفات، null، undefined",
              "الاستخدام: الخيار المعياري الافتراضي لـ children",
              "يوفر أقصى درجات المرونة للمستهلك"
            ]
          },
          {
            title: "React.ReactElement (عنصر JSX فقط)",
            points: [
              "يقبل: كائن عنصر JSX حقيقي فقط (<button />, <MyComp />)",
              "يرفض: النصوص المجردة والأرقام والأشكال البدائية",
              "الاستخدام: عند الحاجة لقراءة props الابن أو cloneElement"
            ]
          },
          {
            title: "PropsWithChildren<T>",
            points: [
              "أداة مساعدة جاهزة من مكتبة react",
              "تضيف تلقائياً: children?: React.ReactNode",
              "تختصر كتابة تعريف children في كل واجهة"
            ]
          }
        ]
      }
    },
    {
      id: "14-2-g",
      title: "تعريف أنواع أحداث React التفاعلية (Event Handlers)",
      englishTitle: "Typing React Synthetic Events: Mouse, Change & Form Events",
      pronunciation: "تايبنج ريأكت سينثيتيك إيفنتس: ماوس، تشينج آند فورم إيفنتس",
      meaning: "التوثيق النمطي الدقيق لأحداث النقر والإدخال وإرسال النماذج",
      description:
        "توفر React نظام أحداث اصطناعياً موحداً (SyntheticEvent System) يغلف أحداث المتصفح الأصلية لضمان عملها بشكل متطابق عبر جميع المتصفحات. في TypeScript، تمتلك مكتبة `@types/react` أنواعاً مخصصة ومعممة لكل نوع من الأحداث: 1) `React.MouseEvent<HTMLButtonElement>`: لأحداث النقر على الأزرار، 2) `React.ChangeEvent<HTMLInputElement>`: لأحداث تغيير حقول الإدخال، 3) `React.FormEvent<HTMLFormElement>` أو `React.SubmitEvent`: لأحداث تسليم النماذج وتفعيل `preventDefault()`، 4) `React.KeyboardEvent<HTMLInputElement>`: لأحداث الضغط على لوحة المفاتيح. تتطلب هذه الأنواع تمرير 'النوع المعمم لعنصر الـ DOM المقابل' بين القوسين المثلثين (مثل `<HTMLInputElement>` أو `<HTMLSelectElement>`)، مما يتيح لك قراءة `e.target.value` أو `e.currentTarget` بإكمال تلقائي دقيق وبدون أي تحذيرات نمطية.",
      analogy:
        "أنواع الأحداث تشبه قفازات التعامل مع الأدوات في ورشة؛ لديك قفازات حرارية مخصصة للفرن، وقفازات جلدية مخصصة للتقطيع؛ فنوع الحدث يحدد بدقة نوع الأداة التي تتعامل معها، مما يمنعك من استخدام أداة في غير موضعها.",
      whyItMatters:
        "يمنع أخطاء قراءة خصائص غير موجودة في بعض العناصر (مثل محاولة قراءة value من زر عادي)، ويوفر وصولاً آمناً لكافة خصائص الحدث وعناصر الـ DOM المستهدفة.",
      syntax: `// 1. حدث تغيير حقل إدخال نصي:
const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

// 2. حدث تسليم النموذج:
const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

// 3. حدث النقر على زر:
const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.clientX, e.clientY);
};`,
      simpleExample: `// مكون نموذج تفاعلي موثق بأنواع الأحداث المعيارية
import React, { useState } from 'react';

export function TypedSearchForm() {
  const [searchTerm, setSearchTerm] = useState('');

  // توثيق حدث الإدخال بدقة مع تحديد عنصر HTMLInputElement
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // توثيق حدث إرسال النموذج مع تحديد HTMLFormElement
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    console.log("إرسال استعلام البحث:", searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-xl max-w-sm">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="ابحث عن درس..."
        className="w-full p-2 border rounded mb-2 text-xs"
      />
      <button type="submit" className="w-full py-1.5 bg-indigo-600 text-white rounded text-xs">
        بحث 🔍
      </button>
    </form>
  );
}`,
      advancedExample: `// التعامل مع القوائم المنسدلة وأحداث لوحة المفاتيح مع Type Inference المباشر
import React, { useState } from 'react';

export function AdvancedEventsManager() {
  const [selectedRole, setSelectedRole] = useState('developer');
  const [keyLog, setKeyLog] = useState('');

  // 1. حدث تغيير القائمة المنسدلة: HTMLSelectElement
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  // 2. حدث لوحة المفاتيح لرصد الضغط على زر Enter تحديداً
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setKeyLog(\`المفتاح المضغوط: \${e.key} (الكود: \${e.code})\`);
    if (e.key === 'Enter') {
      console.log("تم تأكيد الإدخال بـ Enter!");
    }
  };

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white space-y-3 text-xs">
      <div>
        <label className="text-slate-400 block mb-1">اختر الدور الوظيفي:</label>
        <select
          value={selectedRole}
          onChange={handleSelectChange}
          className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
        >
          <option value="developer">مهندس برمجيات</option>
          <option value="designer">مصمم واجهات</option>
          <option value="manager">مدير منتج</option>
        </select>
      </div>

      <div>
        <label className="text-slate-400 block mb-1">اختبار أزرار الكيبورد:</label>
        <input
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="اضغط أي زر هنا..."
          className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
        />
        {keyLog && <p className="text-[10px] text-emerald-400 font-mono mt-1">{keyLog}</p>}
      </div>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثالان كيف تمنح أحداث React المؤطرة بـ TypeScript دقة فائقة: مع `ChangeEvent<HTMLSelectElement>` يعرف المترجم خصائص القائمة المنسدلة، ومع `KeyboardEvent<HTMLInputElement>` يتيح قراءة `e.key` وإكمالها التلقائي دون أي أخطاء مطبعية.",
      commonMistakes: [
        {
          mistake: "استخدام نوع الحدث العام Event أو any بدلاً من React.ChangeEvent أو React.MouseEvent المخصصة لـ React.",
          fix: "استخدم دائماً أحداث مساحة الأسماء React.* (مثل React.ChangeEvent) لضمان توافق SyntheticEvent."
        },
        {
          mistake: "نسيان تمرير عنصر الـ DOM المعمم (مثل كتابة React.ChangeEvent فقط دون <HTMLInputElement>).",
          fix: "حدد دائماً العنصر المستهدف بين القوسين المثلثين: React.ChangeEvent<HTMLInputElement> لتتمكن من قراءة e.target.value."
        }
      ],
      bestPractices: [
        "إذا كتبت معالج الحدث بشكل مضمن (Inline) داخل JSX، تستنتج TypeScript نوع الحدث تلقائياً دون الحاجة لكتابته يدوياً: onChange={(e) => setVal(e.target.value)}.",
        "استخدم e.currentTarget بدلاً من e.target عندما تتعامل مع عناصر متداخلة لضمان الإشارة إلى العنصر الذي يحمل معالج الحدث نفسه.",
        "احتفظ بأنواع عناصر الـ DOM القياسية في ذهنك: HTMLInputElement, HTMLButtonElement, HTMLFormElement, HTMLSelectElement, HTMLTextAreaElement."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "أهم أنواع الأحداث في React + TypeScript",
        items: [
          {
            title: "React.ChangeEvent<T>",
            points: [
              "T = HTMLInputElement (حقول النصوص والخيارات)",
              "T = HTMLSelectElement (القوائم المنسدلة)",
              "T = HTMLTextAreaElement (مربعات النصوص الطويلة)",
              "تتيح قراءة e.target.value بأمان"
            ]
          },
          {
            title: "React.MouseEvent<T>",
            points: [
              "T = HTMLButtonElement أو HTMLDivElement",
              "توفر إحداثيات النقر: clientX, clientY",
              "أزرار الفأرة: button, altKey, shiftKey"
            ]
          },
          {
            title: "React.FormEvent<HTMLFormElement>",
            points: [
              "مخصصة لأحداث onSubmit في النماذج",
              "توفر دالة e.preventDefault() لمنع التحديث",
              "توفر الوصول لكافة حقول النموذج المجمعة"
            ]
          }
        ]
      }
    },
    {
      id: "14-2-h",
      title: "تعريف أنواع دوال النداء الراجع (Callback Functions Props)",
      englishTitle: "Typing Callback Functions, Handlers & Return Signatures",
      pronunciation: "تايبنج كول باك فنكشنز، هاندلرز آند ريتيرن سيجنيتشرز",
      meaning: "توثيق العقود النمطية للدوال التي يمررها المكون الأب إلى المكون الابن للتفاعل",
      description:
        "في React، يتدفق تدفق البيانات من الأعلى إلى الأسفل (Props)، بينما تتدفق الأحداث من الأسفل إلى الأعلى عبر 'دوال النداء الراجع' (Callback Functions). توثيق هذه الدوال في TypeScript هو أحد أهم أركان الأمان البرمجي؛ فالمكون الأب يحدد عقداً صارماً: 'ما هي المعاملات التي ستقبلها الدالة وما هو نوع القيمة التي سترجعها'. يتم تعريف توقيع الدالة بصيغة السهم: `(param: Type) => ReturnType`. إذا كانت الدالة مجرد معالج لحدث لا يرجع أي قيمة، يتم تحديد نوع الإرجاع كـ `void` (مثل `onClick: () => void`). تجنب تماماً استخدام نوع `Function` التاريخي العام؛ لأنه يقبل أي دالة بأي عدد عشوائي من المعاملات ويعطل حماية TypeScript تماماً.",
      analogy:
        "توقيع الدالة يشبه بروتوكول تسليم المهام بين المقاول الرئيسي ومقاول الباطن؛ يحدد المقاول الرئيسي: 'إذا واجهت صخرة في الحفر، اتصل بي وزودني بوزن الصخرة (number) ولونها (string)، ولن أطلب منك إرجاع أي شيء (void)'. فإذا اتصل مقاول الباطن بدون تقديم هذه البيانات يرفض المقاول الرئيسي استلام البلاغ.",
      whyItMatters:
        "يضمن أن المكون الابن سيمرر المعاملات الصحيحة بالترتيب الدقيق، ويمنع أخطاء نسيان تمرير المعرف (id) أو تمرير بيانات خاطئة إلى دوال الحذف والتعديل في المكون الأب.",
      syntax: `// 1. دالة بدون معاملات ولا ترجع قيمة:
onClick: () => void;

// 2. دالة تستقبل معاملاً وترجع قيمة منطقية:
onValidate: (input: string) => boolean;

// 3. دالة تستقبل معرفاً وكائناً:
onUpdateItem: (id: number, data: Partial<Todo>) => void;`,
      simpleExample: `// مكون زر تأكيد مخصص يوثق دالة callback
import React from 'react';

interface DeleteModalProps {
  itemId: number;
  itemName: string;
  onConfirmDelete: (id: number) => void; // تستقبل الرقم بدقة
  onCancel: () => void;                 // لا تستقبل معاملات
}

export function DeleteConfirmationCard({
  itemId,
  itemName,
  onConfirmDelete,
  onCancel
}: DeleteModalProps) {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <p className="text-xs mb-3">هل أنت متأكد من رغبتك في حذف: <strong>{itemName}</strong>؟</p>
      <div className="flex gap-2">
        <button
          onClick={() => onConfirmDelete(itemId)} // تمرير المعرف بدقة
          className="px-3 py-1 bg-rose-600 text-white rounded text-xs font-bold"
        >
          نعم، احذف
        </button>
        <button
          onClick={onCancel}
          className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs"
        >
          إلغاء
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: `// بناء مكون اختيار عناصر تفاعلي يدعم إرجاع وعود برمجية غير متزامنة (Async Callbacks)
import React, { useState } from 'react';

interface AsyncActionButtonProps {
  label: string;
  // دالة قد تكون متزامنة أو ترجع وعداً برمجياً Promise<void>
  onExecute: () => Promise<void> | void;
}

export function AsyncActionButton({ label, onExecute }: AsyncActionButtonProps) {
  const [isBusy, setIsBusy] = useState(false);

  const handleClick = async () => {
    setIsBusy(true);
    try {
      // انتظار اكتمال الدالة إذا كانت غير متزامنة
      await onExecute();
    } finally {
      setIsBusy(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isBusy}
      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2"
    >
      {isBusy && <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />}
      <span>{label}</span>
    </button>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم كيفية توثيق الدوال التي ترجع وعوداً غير متزامنة عبر `() => Promise<void> | void`؛ مما يتيح للمكون الابن تفعيل مؤشر التحميل الداخلي وانتظار اكتمال عملية الحفظ في الأب تلقائياً قبل إغلاق التحميل.",
      commonMistakes: [
        {
          mistake: "استخدام نوع Function العام (مثل onClick: Function) لتعريف دوال الـ Callbacks.",
          fix: "تجنب نوع Function دائماً؛ فهو غير آمن ولا يحدد المعاملات أو المخرجات. استخدم دائماً توقيع السهم: () => void."
        },
        {
          mistake: "الخلط بين نوع الإرجاع void ونوع undefined في توقيع الدوال.",
          fix: "استخدم void عندما لا تهتم الدالة بالقيمة المرتجعة، واستخدم undefined فقط إذا كنت تشترط صراحة أن تُرجع الدالة القيمة undefined تحديداً."
        }
      ],
      bestPractices: [
        "استخدم أسماء تبدأ بـ on للدوال في الـ Props (مثل: onSelect, onFilterChange, onDelete) لتوضيح أنها معالجات أحداث.",
        "حدد أنواع المعاملات بدقة داخل توقيع الدالة: (id: string, nextStatus: Status) => void.",
        "ادمج Promise<void> في نوع الإرجاع إذا كان المكون يدعم حالات التحميل أثناء تنفيذ العمليات غير المتزامنة."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "أنماط توثيق دوال الـ Callbacks في React",
        items: [
          {
            title: "إشعار بسيط () => void",
            points: [
              "لا يستقبل أي معاملات",
              "لا يرجع أي قيمة",
              "المثال: onClose, onToggle, onRefresh"
            ]
          },
          {
            title: "تمرير بيانات (data: T) => void",
            points: [
              "يستقبل معرفات أو كائنات من الابن",
              "يضمن تطابق نوع المعامل في المكون الأب",
              "المثال: onSelectUser(id), onSearch(query)"
            ]
          },
          {
            title: "دوال غير متزامنة () => Promise<void>",
            points: [
              "ترجع وعداً برمجياً يمكن انتظاره بـ await",
              "تتيح للمكون الابن تفعيل مؤشرات التحميل الذاتية",
              "المثال: onSubmitAsync, onSaveProfile"
            ]
          }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q14-2-1",
      question: "ما هو الفارق الجوهري بين ملف ينتهي بـ .ts وملف ينتهي بـ .tsx في مشروع React؟",
      options: [
        "ملفات .tsx تعمل فقط على خوادم Node.js",
        "ملفات .tsx تدعم وتحتوي على وسوم JSX/TSX التفاعلية، بينما ملفات .ts مخصصة للمنطق البرمجي الصافي والدوال المساعدة والأنواع دون أي وسوم JSX",
        "ملفات .ts تم إلغاؤها واستبدالها بالكامل بـ .tsx",
        "لا يوجد أي فرق ويتم معاملتهما بنفس الطريقة تماماً"
      ],
      correctAnswer: 1,
      explanation:
        "الامتداد .tsx يخبر المترجم بتفعيل محلل وسوم JSX الخاص برياكت، بينما .ts مخصص للمنطق الصافي والخدمات والأنواع حيث يتعامل مع الأقواس المثلثة <T> كـ Generics فقط."
    },
    {
      id: "q14-2-2",
      question: "لماذا يُعتبر React.ReactNode هو النوع الموصى به افتراضياً لخاصية children في معظم المكونات الحاوية؟",
      options: [
        "لأنه أصغر حجماً في الذاكرة",
        "لأنه النوع الأشمل الذي يقبل كل ما يمكن لرياكت تصييره (عناصر JSX، نصوص، أرقام، مصفوفات، null)",
        "لأنه يعمل فقط مع مكتبة Tailwind CSS",
        "لأنه يحذف المتغيرات المهملة تلقائياً"
      ],
      correctAnswer: 1,
      explanation:
        "React.ReactNode هو النوع الذهبي لـ children لأنه يشمل كافة المخرجات الصالحة في شجرة React بما فيها النصوص والأرقام والعناصر والمصفوفات، مما يمنح المكون الحاوي أقصى درجات المرونة."
    },
    {
      id: "q14-2-3",
      question: "كيف توثق دالة معالج حدث تغيير حقل إدخال نصي في React بدقة نمطية كاملة؟",
      options: [
        "(e: Event) => void",
        "(e: React.ChangeEvent<HTMLInputElement>) => void",
        "(e: any) => void",
        "(e: string) => void"
      ],
      correctAnswer: 1,
      explanation:
        "النوع المعياري السليم هو React.ChangeEvent<HTMLInputElement>؛ حيث يحدد أنه حدث تغيير اصطناعي من React مخصص لعنصر إدخال HTMLInputElement، مما يتيح قراءة e.target.value بأمان كامل."
    }
  ],
  exercise: {
    title: "تمرين تطبيقي: بناء مكون بطاقة مستخدم تفاعلية موثقة بالكامل بـ TypeScript",
    instruction:
      "قم ببناء مكون بطاقة مستخدم (UserCard) في ملف TSX، يستقبل واجهة UserCardProps تحتوي على: name (نص إلزامي)، role (نوع حرفي: 'admin' | 'member')، avatarUrl (اختياري)، ودالة onDeleteCallback تستقبل معرف المستخدم وتكون للقراءة فقط مع توثيق حدث النقر بدقة.",
    starterCode: `import React from 'react';

// TODO: 1. عرّف نوعاً حرفياً UserRole: 'admin' | 'member'

// TODO: 2. عرّف interface باسم UserCardProps يحتوي على:
// - id: number
// - name: string
// - role: UserRole
// - avatarUrl?: string
// - onDelete: (id: number) => void

// TODO: 3. ابنِ المكون UserCard مع تفكيك الخصائص وقيمة افتراضية لـ avatarUrl`,
    hints: [
      "استخدم: type UserRole = 'admin' | 'member';",
      "في واجهة الـ Props: onDelete: (id: number) => void;",
      "في رأس دالة المكون: export function UserCard({ id, name, role, avatarUrl = '...', onDelete }: UserCardProps)"
    ],
    solutionCode: `import React from 'react';

// 1. تعريف النوع الحرفي للأدوار الوظيفية
export type UserRole = 'admin' | 'member';

// 2. تعريف واجهة خصائص المكون المتكاملة
export interface UserCardProps {
  id: number;
  name: string;
  role: UserRole;
  avatarUrl?: string; // خاصية اختيارية
  onDelete: (id: number) => void; // دالة نداء راجع تستقبل المعرف
}

// 3. مكون React الموثق بنقاء وفق المعيار المعاصر
export function UserCard({
  id,
  name,
  role,
  avatarUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
  onDelete
}: UserCardProps) {
  // معالج حدث النقر الموثق صراحة
  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // منع انتشار الحدث
    onDelete(id);        // استدعاء دالة الأب بالمعرف
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-white max-w-sm flex items-center justify-between shadow-xl">
      <div className="flex items-center gap-3">
        <img
          src={avatarUrl}
          alt={name}
          className="w-11 h-11 rounded-full object-cover border border-slate-700"
        />
        <div>
          <h4 className="font-bold text-sm text-slate-100">{name}</h4>
          <span className={\`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold mt-1 inline-block \${
            role === 'admin' ? 'bg-purple-950 text-purple-300 border border-purple-800' : 'bg-slate-800 text-slate-400'
          }\`}>
            {role === 'admin' ? 'مدير عام 👑' : 'عضو مساهم'}
          </span>
        </div>
      </div>

      <button
        onClick={handleDeleteClick}
        className="px-3 py-1.5 bg-rose-600/80 hover:bg-rose-500 text-white rounded-lg text-xs font-bold transition-all shadow"
      >
        حذف 🗑️
      </button>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة إعداد وتهيئة React مع TypeScript",
    description: "الدليل الشامل لصياغة الـ Props وتوثيق الأحداث وهندسة ملفات tsx باحترافية.",
    elements: [
      {
        title: "1. المنظومة والامتدادات",
        subtitle: "Vite, .ts vs .tsx & tsconfig",
        badge: "التأسيس والبيئة",
        color: "blue",
        details: [
          ".tsx للمكونات والـ JSX، و .ts للمنطق الصافي والخدمات",
          "tsconfig.json الصارم: strict: true و jsx: react-jsx",
          "حراسة الإنتاج بـ tsc -b قبل أمر vite build"
        ]
      },
      {
        title: "2. هندسة الـ Props",
        subtitle: "Typing Props & Inheritance",
        badge: "العقود النمطية",
        color: "purple",
        details: [
          "تعريف interfaces صريحة لخصائص كل مكون",
          "تفكيك المعاملات مع توفير قيم افتراضية آمنة",
          "وراثة خصائص HTML المدمجة بـ ButtonHTMLAttributes"
        ]
      },
      {
        title: "3. توثيق المحتوى المتداخل",
        subtitle: "Typing children safely",
        badge: "المكونات التراكبية",
        color: "emerald",
        details: [
          "React.ReactNode: الخيار المعياري الذهبي الشامل لـ children",
          "React.ReactElement: للأبناء الحصريين من عناصر الـ JSX فقط",
          "PropsWithChildren<T>: إضافة سريعة لـ children لأي واجهة"
        ]
      },
      {
        title: "4. التفاعل والأحداث",
        subtitle: "Synthetic Events & Callbacks",
        badge: "التفاعل والتحكم",
        color: "amber",
        details: [
          "React.ChangeEvent<HTMLInputElement> لحقول الإدخال",
          "React.FormEvent<HTMLFormElement> لتسليم النماذج",
          "توقيعات الـ Callbacks: (id: number) => void بأمان تام"
        ]
      }
    ]
  }
};
