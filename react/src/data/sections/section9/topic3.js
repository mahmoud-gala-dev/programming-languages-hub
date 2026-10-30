// src/data/sections/section9/topic3.js
// الموضوع 3: مكتبات مكونات الواجهة (UI Libraries: Material UI, AntD, Chakra, shadcn/ui & Headless Radix)

export const SECTION_9_TOPIC_3 = {
  id: "9.3",
  title: "مكتبات مكونات الواجهة",
  englishTerm: "UI Component Libraries & Headless UI Architecture",
  description: "الدليل الشامل لاختيار واستخدام وتخصيص مكتبات مكونات React: استكشاف المكتبات الكلاسيكية الشاملة (Material UI, Ant Design, Chakra UI)، فهم التحول المعماري العظيم نحو المكونات غير المقيدة بالتنسيق (Headless UI) مثل Radix UI، الثورة الأسطورية لـ shadcn/ui ونسخ الكود المفتوح، ومعايير القرار الهندسي للمشاريع الناشئة والمؤسسية.",
  subtopics: [
    {
      id: "9.3.a",
      title: "مقدمة إلى Material UI",
      englishTerm: "Introduction to Material UI (MUI & Emotion Architecture)",
      description: "المكتبة الأقدم والأكثر انتشاراً عالمياً في بيئة React: مكتبة Material UI (MUI). تطبق مبادئ وقواعد تصميم Material Design المطورة من Google. توفر ترسانة ضخمة تضم أكثر من 60 مكوناً جاهزاً بكافة تفاصيلها (Buttons, Dialogs, Tables, Autocomplete, DataGrid). تعتمد معمارياً على نظام CSS-in-JS ومحرك Emotion/Styled لتوليد التنسيقات في وقت التشغيل.",
      realLifeAnalogy: "مثل شراء منزل مؤثث بالكامل من أفخم شركات الأثاث العالمية؛ كل كرسي وطاولة وستارة مصممة ومتناسقة مسبقاً بنفس النمط، وتدخل لتسكن فوراً دون الحاجة لشراء مسمار واحد.",
      whyItMatters: "تعد MUI الخيار الأسرع لبناء لوحات التحكم الداخلية (Internal Dashboards) والأنظمة الإدارية التي تحتاج مئات المكونات المجهزة مسبقاً دون الحاجة لتوظيف فريق تصميم واجهات كامل.",
      syntax: "import Button from '@mui/material/Button';\nimport TextField from '@mui/material/TextField';\n\n<Button variant=\"contained\" color=\"primary\">إرسال</Button>",
      simpleExample: `// استخدام مكونات Material UI الأساسية
import React from "react";
// استيراد المكونات من حزمة @mui/material
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export function SimpleMUIDemo() {
  return (
    // Stack هو مكون تخطيط جاهز من MUI للترتيب التلقائي
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="primary">
        تأكيد MUI
      </Button>
      <Button variant="outlined" color="secondary">
        إلغاء
      </Button>
    </Stack>
  );
}
`,
      advancedExample: `// استعراض معمارية Material UI وإيجابياتها وسلبياتها في المشاريع الحديثة
import React from "react";

export function MUIOverviewCard() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">نظرة عامة على Material UI (MUI)</h4>
        <span className="text-[10px] font-mono bg-blue-950 text-blue-300 px-2 py-0.5 rounded font-bold">
          Material Design
        </span>
      </div>

      <div className="space-y-3 text-xs">
        <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-emerald-400 font-bold block">✓ نقاط القوة:</span>
          <p className="text-slate-300">
            أكثر من 60 مكوناً جاهزاً للإنتاج، وثائق ضخمة، دعم كامل لسهولة الوصول (a11y)، وجداول بيانات متقدمة (MUI X DataGrid).
          </p>
        </div>

        <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-rose-400 font-bold block">⚠ التحديات والمآخذ:</span>
          <p className="text-slate-300">
            حجم الحزمة كبير نسبياً (Bundle Size)، الاعتماد على محرك CSS-in-JS (Emotion) الذي لا يتوافق بسلاسة مع React Server Components، وصعوبة الخروج من طابع تصميم Google.
          </p>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400">
        📌 <strong className="text-slate-300">الاستخدام الأمثل:</strong> منصات B2B، لوحات الإدارة الداخلية (Admin Dashboards)، والمشاريع التي لا تملك مصمم UI خاص.
      </div>
    </div>
  );
}
`,
      outputExplanation: "توفر MUI مكونات مكتملة الخصائص والحركات (Ripple Effect)، وتعتمد على خاصية sx={{ ... }} لتخصيص التنسيقات باستخدام رموز السمة المركزية Theme Tokens.",
      commonMistakes: [
        {
          mistake: "استيراد المكونات بشكل عام: import { Button } from '@mui/material' دون تفعيل Tree Shaking مما يزيد حجم ملف البناء.",
          fix: "استورد المكون من مساره المباشر: import Button from '@mui/material/Button'.",
          reason: "الاستيراد المباشر يضمن أن مجمع الحزم يستخرج فقط كود الزر دون تضمين مكتبة MUI بأكملها."
        }
      ],
      bestPractices: [
        "استخدم ThemeProvider لضبط الألوان الأساسية ونوع الخط لتطبيق هوية شركتك بدلاً من ترك ألوان Google الزرقاء الافتراضية.",
        "استخدم خاصية sx بدلاً من التنسيقات المضمنة للاستفادة من متغيرات السمة."
      ],
      infographicCard: {
        title: "هوية مكتبة Material UI (MUI)",
        points: [
          "الأقدم والأشمل: أكثر من 60 مكوناً معقداً جاهزاً للاستخدام الفوري.",
          "تطبيق Material Design: حركات وتموجات زر Google الرسمية.",
          "الأفضل لـ: لوحات التحكم الداخلية وأنظمة الإدارة والشركات الضخمة."
        ]
      }
    },
    {
      id: "9.3.b",
      title: "مقدمة إلى Ant Design",
      englishTerm: "Introduction to Ant Design (AntD Enterprise Architecture)",
      description: "المكتبة المؤسسية العملاقة Ant Design (AntD) المطورة من قِبل عملاق التجارة الإلكترونية Alibaba. صُممت خصيصاً للأنظمة والبرمجيات المؤسسية الضخمة (Enterprise Applications). تشتهر بأقوى مكونات الجداول والفلترة المتقدمة (Complex Tables, Tree View, Date Pickers, Transfer Lists) وتتبع فلسفة تصميم آسيوية دقيقة وعالية الكثافة للمعلومات (High Information Density).",
      realLifeAnalogy: "مثل شاشات مراقبة غرف العمليات أو منصات التداول المالي في البورصة؛ الشاشة مصممة لتعرض آلاف الأرقام والبيانات والجداول في مساحة واحدة دون أي مساحات فارغة مهدرة.",
      whyItMatters: "إذا كان تطبيقك عبارة عن نظام ERP متكامل أو نظام محاسبي يضم جداول عملاقة تحتاج لفرز وفلترة وتصدير لملفات Excel، فإن Ant Design هي الخيار الأكثر توفيراً للوقت وتجهيزاً لهذه المتطلبات المؤسسية.",
      syntax: "import { Button, Table, DatePicker } from 'antd';\n\n<Button type=\"primary\">حفظ المؤسسة</Button>",
      simpleExample: `// استخدام مكونات Ant Design الأساسية
import React from "react";
// استيراد المكونات من حزمة antd
import { Button, Space } from "antd";

export function SimpleAntDDemo() {
  return (
    // Space هو مكون التباعد المعياري في antd
    <Space>
      <Button type="primary">زر أساسي AntD</Button>
      <Button danger>زر تحذيري</Button>
    </Space>
  );
}
`,
      advancedExample: `// لوحة تحليل معمارية Ant Design والمقارنة المؤسسية
import React from "react";

export function AntDArchitectureCard() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">معمارية Ant Design (AntD)</h4>
        <span className="text-[10px] font-mono bg-rose-950 text-rose-300 px-2 py-0.5 rounded font-bold">
          Enterprise ERP
        </span>
      </div>

      <div className="space-y-3 text-xs">
        <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-emerald-400 font-bold block">✓ القوة الخارقة:</span>
          <p className="text-slate-300">
            أقوى مكون جدول في عالم React (AntD Table): ترتيب، فلترة متعددة، تثبيت الأعمدة (Pinned Columns)، ودمج الخلايا المتقدم.
          </p>
        </div>

        <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-amber-400 font-bold block">⚠ القيود والتحديات:</span>
          <p className="text-slate-300">
            كثافة عالية جداً في التنسيق قد لا تناسب مواقع المستهلكين (B2C)، وحجم حزمة كبير، مع بعض التحديات في تخصيص الاتجاه العربي RTL بدون إعدادات مسبقة.
          </p>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400">
        🏢 <strong className="text-slate-300">البيئة المثالية:</strong> منصات ERP، أنظمة المستودعات وإدارة المخزون، والأنظمة المالية والمحاسبية.
      </div>
    </div>
  );
}
`,
      outputExplanation: "تعتمد AntD في إصداراتها الحديثة (v5+) على محرك CSS-in-JS مبني على كائن سمة ديناميكي ConfigProvider يسهل تغيير الألوان وانحناءات الحواف عبر خوارزميات برمجية.",
      commonMistakes: [
        {
          mistake: "اختيار Ant Design لتطبيق هاتف محمول مخصص للمستهلكين (Consumer App).",
          fix: "استخدم مكتبات أخف وزناً مثل Tailwind CSS أو Ant Design Mobile المخصصة للهواتف.",
          reason: "نسخة Ant Design الأساسية مصممة خصيصاً لشاشات الحواسيب المكتبية وأنظمة الشركات المعقدة."
        }
      ],
      bestPractices: [
        "استخدم ConfigProvider لتفعيل دعم اللغة العربية والاتجاه من اليمين لليسار (direction='rtl').",
        "استفد من أيقونات @ant-design/icons المتنوعة والمتكاملة مع النظام."
      ],
      infographicCard: {
        title: "ملامح Ant Design المؤسسية",
        points: [
          "عملاق الـ Enterprise: أقوى جداول ونماذج استمارات معقدة في العالم.",
          "كثافة معلومات فائقة: استغلال أقصى مساحة ممكنة على الشاشة.",
          "الأفضل لـ: أنظمة ERP والمحاسبة والمستودعات والشركات الكبرى."
        ]
      }
    },
    {
      id: "9.3.c",
      title: "مقدمة إلى Chakra UI",
      englishTerm: "Introduction to Chakra UI (Style Props & Accessibility)",
      description: "المكتبة المحبوبة لدى مطوري React: مكتبة Chakra UI. تتميز بنظام خصائص التنسيق المباشرة (Style Props)، حيث تتيح لك كتابة التنسيق كخصائص مباشرة على المكون مثل <Box bg='teal.500' p={4} color='white'>. تضع المكتبة معايير سهولة الوصول (Accessibility / WAI-ARIA) ودعم الوضع الداكن في قمة أولوياتها كإعداد افتراضي.",
      realLifeAnalogy: "مثل سيارة ذكية حديثة وبسيطة؛ أزرارها واضحة ومقاعدها مريحة جداً وتتحرك بلمسة زر واحدة، فلا تشعر بالتعقيد أو التشتت أثناء قيادتها.",
      whyItMatters: "توفر Chakra UI سرعة تطوير مذهلة دون الحاجة لتعلم كلاسات غريبة أو كتابة CSS خارجي؛ التنسيق يعيش كخصائص جافاسكريبت طبيعية مع دعم كامل للـ Autocomplete.",
      syntax: "import { Box, Button, Text } from '@chakra-ui/react';\n\n<Box p={4} bg=\"blue.600\" rounded=\"xl\">\n  <Text color=\"white\">محتوى Chakra</Text>\n</Box>",
      simpleExample: `// استخدام نظام Style Props في Chakra UI
import React from "react";
// استيراد المكونات من حزمة @chakra-ui/react
import { Box, Button, Heading } from "@chakra-ui/react";

export function SimpleChakraDemo() {
  return (
    // التنسيق يُمرر كخصائص Props مباشرة
    <Box p={6} bg="teal.700" rounded="2xl" color="white">
      <Heading size="md" mb={2}>مرحباً بـ Chakra UI</Heading>
      <Button colorScheme="teal" variant="solid">
        زر ممتع
      </Button>
    </Box>
  );
}
`,
      advancedExample: `// لوحة استعراض مزايا وتحديات Chakra UI في المشهد الحديث
import React from "react";

export function ChakraEvaluationCard() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">تقييم معمارية Chakra UI</h4>
        <span className="text-[10px] font-mono bg-teal-950 text-teal-300 px-2 py-0.5 rounded font-bold">
          Style Props & a11y
        </span>
      </div>

      <div className="space-y-3 text-xs">
        <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-emerald-400 font-bold block">✓ تجربة المطور (DX):</span>
          <p className="text-slate-300">
            تنسيق سريع جداً عبر Style Props: <code className="text-indigo-400 font-mono">p={4} bg="blue.500"</code>، مع دعم فطري لمعايير إمكانية الوصول والتنقل بلوحة المفاتيح.
          </p>
        </div>

        <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-rose-400 font-bold block">⚠ تحديات الأداء والـ RSC:</span>
          <p className="text-slate-300">
            تعتمد على Emotion في حساب الخصائص في وقت التشغيل (Runtime Overhead) مما يسبب بطئاً طفيفاً في الصفحات الضخمة ويصعب توافقها مع Server Components في Next.js.
          </p>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400">
        🎯 <strong className="text-slate-300">المكان الأنسب:</strong> المشاريع المتوسطة، التطبيقات السريعة (MVPs)، والمطورين الذين يحبون كتابة التنسيق كـ Props.
      </div>
    </div>
  );
}
`,
      outputExplanation: "يقوم نظام Style Props في Chakra بتحويل خصائص المكون (مثل m={2} و bg='brand.500') إلى كود CSS فوري ومطابق لسمة الألوان والمسافات المعرفة مسبقاً.",
      commonMistakes: [
        {
          mistake: "استخدام Chakra UI في صفحات Next.js App Router المعتمدة على Server Components في الإصدارات القديمة.",
          fix: "تأكد من استخدام Chakra UI v3 الحديثة أو وضع 'use client' في قمة ملف المكون.",
          reason: "مكتبات CSS-in-JS المعتمدة على سياق React Context لا يمكن تشغيلها مباشرة على السيرفر."
        }
      ],
      bestPractices: [
        "استخدم مكون <Box> كبديل متطور لـ <div> و <Flex> كبديل لحاويات Flexbox.",
        "استفد من كائن extendTheme لتخصيص درجات الألوان وقيم التباعد."
      ],
      infographicCard: {
        title: "مميزات Chakra UI الرئيسية",
        points: [
          "Style Props: كتابة التنسيقات كخصائص Props في JSX مباشرة.",
          "إمكانية وصول عالمية (a11y): مطابقة معايير WAI-ARIA تلقائياً.",
          "تجربة تطوير فائقة السرعة للمشاريع الناشئة والمتوسطة."
        ]
      }
    },
    {
      id: "9.3.d",
      title: "مقدمة إلى shadcn/ui",
      englishTerm: "The shadcn/ui Revolution (Copy-Paste Component Model)",
      description: "الثورة الأكبر والأكثر تأثيراً في تاريخ تطوير واجهات React: منصة ومكتبة shadcn/ui. ليست مكتبة مكونات تقليدية يتم تثبيتها كحزمة مغلقة عبر npm (ليست npm dependency)، بل هي 'مجموعة مكونات مفتوحة المصدر قابلة للنسخ المباشر' (Copy-Paste Reusable Components). يتم نسخ كود المكون كاملاً ووضعه مباشرة في مجلد مشروعك (src/components/ui/) باستخدام أداة السطر البرمجي CLI، وتعتمد في جوهرها على Tailwind CSS و Radix UI.",
      realLifeAnalogy: "مثل الفرق بين 'استئجار سيارة مقفلة بغطاء محرك ملحوم لا يمكنك لمسه' (المكتبات التقليدية)، وبين 'شراء مخطط السيارة بالكامل ومحركها وقطع غيارها لتملكها بنسبة 100% في ورشتك الخاصة وتعدلها كما تشاء' (shadcn/ui).",
      whyItMatters: "تمنحك shadcn/ui ملكية كاملة ومطلقة (Ownership) لكود المكون؛ يمكنك تعديل أي سطر، حذف أي خاصية، أو تغيير أي كلاس دون مواجهة قيود حزم npm المغلقة. كما أنها متوافقة 100% مع React Server Components و Next.js و Tailwind CSS.",
      syntax: "// إضافة مكون الزر عبر سطر الأوامر:\nnpx shadcn@latest add button\n\n// الاستخدام المباشر من مجلد مشروعك:\nimport { Button } from '@/components/ui/button';\n<Button variant=\"outline\">زر shadcn</Button>",
      simpleExample: `// استخدام مكون shadcn/ui المستنسخ محلياً في المشروع
import React from "react";
// استيراد المكون من ملفات مشروعك الخاصة (وليس من node_modules!)
import { Button } from "./ui/button";

export function ShadcnButtonDemo() {
  return (
    // المكون يقبل فئات Tailwind وأشكاله المعرفة مسبقاً
    <Button variant="destructive" size="sm">
      حذف نهائي
    </Button>
  );
}
`,
      advancedExample: `// لوحة تحليل نموذج ملكية الكود الثوري لـ shadcn/ui
import React from "react";

export function ShadcnRevolutionVisualizer() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">ثورة shadcn/ui (Code Ownership)</h4>
        <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold">
          The New Standard
        </span>
      </div>

      <div className="space-y-3 text-xs">
        <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-slate-400 font-bold block">1. النموذج التقليدي القديم (npm package):</span>
          <p className="text-rose-400 text-[11px]">
            المكون مغلق داخل node_modules؛ إذا أردت تعديل تفصيلة صغيرة في الزر، تضطر لكتابة تجاوزات CSS قبيحة بـ !important.
          </p>
        </div>

        <div className="p-3 bg-slate-950 rounded-2xl border border-emerald-500/40 space-y-1">
          <span className="text-emerald-400 font-bold block">2. نموذج shadcn/ui (الملكية التامة):</span>
          <p className="text-slate-300 text-[11px]">
            الكود يعيش في <code className="text-indigo-300 font-mono">src/components/ui/button.tsx</code> تحت تصرفك الكامل؛ يمكنك تعديل الـ JSX والـ Tailwind بنقرة واحدة!
          </p>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-indigo-500/30 text-xs text-indigo-300 flex justify-between items-center">
        <span>الحلف التقني الأعظم:</span>
        <span className="font-mono text-emerald-400 font-bold">Radix UI + Tailwind CSS</span>
      </div>
    </div>
  );
}
`,
      outputExplanation: "مكونات shadcn/ui تعتمد على Radix UI لتوفير المنطق وسهولة الوصول وحركات المفاتيح، وتعتمد على Tailwind CSS لتوفير المظهر الجمالي القابل للتعديل، مع منح المطور الكود المصدري كاملاً.",
      commonMistakes: [
        {
          mistake: "محاولة تثبيت shadcn/ui كحزمة مستقلة عبر npm install shadcn-ui.",
          fix: "استخدم أداة التهيئة القياسية: npx shadcn@latest init ثم npx shadcn@latest add [component].",
          reason: "shadcn/ui ليست حزمة برمجية مغلقة في npm، بل هي أداة CLI تنسخ المكونات إلى داخل مشروعك مباشرة."
        }
      ],
      bestPractices: [
        "استخدم مكتبة class-variance-authority (cva) المدمجة لإضافة أشكال (variants) جديدة لمكوناتك.",
        "حافظ على تنظيم ملفات المكونات داخل مجلد components/ui/ لتفادي العشوائية."
      ],
      infographicCard: {
        title: "أركان ثورة shadcn/ui",
        points: [
          "ليست حزمة npm: الكود المصدري يعيش داخل مشروعك ملكاً لك 100%.",
          "Radix UI: يوفر المنطق وسهولة الوصول الصارمة (WCAG).",
          "Tailwind CSS: يوفر التنسيق الفائق والحرية الكاملة في التعديل."
        ]
      }
    },
    {
      id: "9.3.e",
      title: "مفهوم Headless UI Components",
      englishTerm: "Headless UI Architecture (Logic Without Styles)",
      description: "المفهوم الهندسي الأهم في صناعة الواجهات المعاصرة: المكونات غير المقيدة بالتنسيق (Headless UI). المكون الـ Headless هو مكون يوفر كافة الوظائف المنطقية المعقدة (State Management, Keyboard Navigation, Focus Trapping, ARIA Roles, Screen Reader Announcements)، دون أن يفرض عليك سطراً واحداً من CSS أو أي مظهر محدد. المطور يملك الحرية المطلقة لتلبيس هذا المكون أي مظهر يريده باستخدام Tailwind CSS أو CSS Modules.",
      realLifeAnalogy: "مثل محرك السيارة الهجين المعزول عن الهيكل؛ يمنحك قوة الدفع والفرامل ونظام التوجيه المتطور، ولديك كامل الحرية لتركيب هيكل سيارة سباق رياضية أو شاحنة نقل عملاقة فوقه.",
      whyItMatters: "تنسيق المكونات سهل، لكن برمجة سهولة الوصول (Accessibility) والتنقل بالأسهم ومفتاح ESC في القوائم المنسدلة والنوافذ المنبثقة يحتاج مئات الساعات من الاختبارات. المكونات الـ Headless تحل الجزء المعقد نيابة عنك وتترك لك متعة التنسيق.",
      syntax: "// مكون Headless بدون أي تنسيق يفرض نفسه:\n<Dialog.Root open={open} onOpenChange={setOpen}>\n  <Dialog.Trigger>افتح</Dialog.Trigger>\n  <Dialog.Content className=\"أنت من يحدد التنسيق هنا بـ Tailwind\">...</Dialog.Content>\n</Dialog.Root>",
      simpleExample: `// مثال لفلسفة Headless: منطق نقي مع تنسيق مخصص
import React from "react";

// محاكاة مكون Headless يمنحك المنطق فقط عبر Render Props
export function HeadlessToggle({ children }) {
  const [isOn, setIsOn] = React.useState(false);
  const toggle = () => setIsOn(!isOn);

  // يمرر المنطق الصافي للأبناء ليقرروا شكلهم وتنسيقهم بحرية
  return children({ isOn, toggle });
}

export function ToggleConsumer() {
  return (
    <HeadlessToggle>
      {({ isOn, toggle }) => (
        // المطور هنا يملك حرية اختيار أي فئات CSS
        <button
          onClick={toggle}
          className={\`px-4 py-2 rounded-xl text-xs font-bold \${
            isOn ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-400"
          }\`}
        >
          {isOn ? "مفعل 🟢" : "معطل 🔴"}
        </button>
      )}
    </HeadlessToggle>
  );
}
`,
      advancedExample: `// مقارنة بين المكون التقليدي المقيد والمكون الـ Headless الحر
import React from "react";

export function HeadlessComparisonMatrix() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">فلسفة Headless UI المعمارية</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded font-bold">
          Separation of Concerns
        </span>
      </div>

      <div className="space-y-3 text-xs">
        <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-slate-400 font-bold block">1. المكونات التقليدية المظهرية (Styled):</span>
          <p className="text-rose-400 text-[11px]">
            تأتي بتصميم وألوان وأحجام مفروضة مسبقاً، وتعديلها يتطلب صراعاً مريراً مع كلاسات CSS الخاصة بالمكتبة.
          </p>
        </div>

        <div className="p-3 bg-slate-950 rounded-2xl border border-indigo-500/30 space-y-1">
          <span className="text-emerald-400 font-bold block">2. المكونات غير المقيدة (Headless):</span>
          <p className="text-slate-300 text-[11px]">
            صفر CSS، ولكنها تقدم: دعم أسهم لوحة المفاتيح ↑ ↓، إغلاق بـ ESC، حبس التركيز Focus Trap، وخصائص ARIA كاملة.
          </p>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400">
        🚀 <strong className="text-slate-200">أشهر الأمثلة:</strong> Radix Primitives، Headless UI (من Tailwind)، و React Aria (من Adobe).
      </div>
    </div>
  );
}
`,
      outputExplanation: "من خلال فصل المنطق الوظيفي الصعب (Logic) عن المظهر البصري (Presentation)، تمنحك بنية Headless أفضل ما في العالمين: أمان إمكانية الوصول التام + حرية التصميم المطلقة.",
      commonMistakes: [
        {
          mistake: "توقع أن المكون الـ Headless سيعرض نافذة منبثقة منسقة وجميلة فور استيراده.",
          fix: "تذكر دائماً أن مكونات Headless تأتي خالية من التنسيق وعليك تطبيق فئات Tailwind عليها بنفسك.",
          reason: "فلسفة Headless تعني حرفياً 'بدون مظهر مسبق' لترك الإبداع بالكامل للمطور."
        }
      ],
      bestPractices: [
        "اعتمد على مكتبات Headless لبناء مكتبة مكونات شركتك الخاصة (Internal Design System).",
        "تأكد من اختبار التنقل عبر مفتاح Tab ومفاتيح الأسهم للتأكد من سلاسة تجربة المستخدم."
      ],
      infographicCard: {
        title: "معادلة Headless UI",
        points: [
          "منطق وسهولة وصول كاملة (Logic & a11y) من المكتبة.",
          "صفر CSS مفروض: حرية تنسيق مطلقة عبر Tailwind.",
          "الأساس التقني الذي بنيت عليه shadcn/ui وكبرى الأنظمة."
        ]
      }
    },
    {
      id: "9.3.f",
      title: "استخدام Radix UI",
      englishTerm: "Radix UI Primitives (Accessible, Unstyled Building Blocks)",
      description: "المكتبة القياسية الذهبية في عالم Headless UI: مكتبة Radix UI Primitives. توفر مكونات منخفضة المستوى وعالية التوافق (Low-level accessible primitives مثل Dialog, DropdownMenu, Popover, Tooltip, Accordion, Slider, Tabs). تتبع نمط التركيب (Composition Pattern) المريح عبر Root و Trigger و Portal و Content.",
      realLifeAnalogy: "مثل قطع الأساسات الفولاذية لناطحة السحاب؛ فولاذ متين مصبوب بدقة حسابية هندسية، ثم يأتي المهندس المعماري ليزين واجهاتها بالزجاج والرخام والأضواء كما يشاء.",
      whyItMatters: "تعد Radix UI المحرك الأساسي الذي يعتمد عليه shadcn/ui. إتقان استخدامها يمكنك من بناء أكثر المكونات تعقيداً (مثل القوائم المتداخلة والنوافذ المنبثقة) بمطابقة كاملة لمواصفات W3C دون كتابة مئات أسطر مستمعات الأحداث.",
      syntax: "import * as Dialog from '@radix-ui/react-dialog';\n\n<Dialog.Root>\n  <Dialog.Trigger>فتح</Dialog.Trigger>\n  <Dialog.Portal>\n    <Dialog.Overlay />\n    <Dialog.Content>المحتوى</Dialog.Content>\n  </Dialog.Portal>\n</Dialog.Root>",
      simpleExample: `// استخدام نافذة منبثقة تفاعلية عبر Radix Dialog
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

export function RadixDialogSnippet() {
  return (
    <Dialog.Root>
      {/* زر تفعيل النافذة */}
      <Dialog.Trigger className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold">
        فتح النافذة
      </Dialog.Trigger>

      {/* بوابة النقل لخارج شجرة DOM لتفادي مشاكل z-index */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-6 rounded-2xl text-white max-w-sm w-full">
          <Dialog.Title className="font-bold text-sm">تأكيد العملية</Dialog.Title>
          <Dialog.Description className="text-xs text-slate-400 mt-2">
            تمت إدارة التركيز وغلق النافذة بـ ESC تلقائياً بواسطة Radix UI.
          </Dialog.Description>
          <Dialog.Close className="mt-4 px-3 py-1.5 bg-slate-800 text-xs rounded-lg">
            إغلاق
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
`,
      advancedExample: `// محاكي قائمة Radix المنسدلة الذكية مع اختصارات لوحة المفاتيح
import React, { useState } from "react";

export function RadixDropdownSimulator() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">قائمة منسدلة بنمط Radix UI</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Keyboard Accessible
        </span>
      </div>

      <div className="relative flex justify-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md shadow-indigo-900/30"
        >
          <span>خيارات الحساب والمشروع</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>

        {/* محاكاة قائمة Radix المنسدلة */}
        {isOpen && (
          <div className="absolute top-12 w-56 p-1.5 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl space-y-1 text-xs animate-fadeIn z-50">
            <button
              onClick={() => { setSelectedAction("تعديل البيانات الشخصية"); setIsOpen(false); }}
              className="w-full text-right px-3 py-2 rounded-xl hover:bg-indigo-600/30 hover:text-indigo-300 transition-colors flex justify-between"
            >
              <span>تعديل الملف</span>
              <span className="text-[10px] text-slate-500 font-mono">⌘P</span>
            </button>
            <button
              onClick={() => { setSelectedAction("دعوة أعضاء جدد للفريق"); setIsOpen(false); }}
              className="w-full text-right px-3 py-2 rounded-xl hover:bg-indigo-600/30 hover:text-indigo-300 transition-colors flex justify-between"
            >
              <span>دعوة أعضاء</span>
              <span className="text-[10px] text-slate-500 font-mono">⌘I</span>
            </button>
            <div className="h-px bg-slate-800 my-1" />
            <button
              onClick={() => { setSelectedAction("تسجيل الخروج"); setIsOpen(false); }}
              className="w-full text-right px-3 py-2 rounded-xl hover:bg-rose-950/60 text-rose-400 transition-colors flex justify-between"
            >
              <span>تسجيل الخروج</span>
              <span className="text-[10px] text-rose-500 font-mono">⇧⌘Q</span>
            </button>
          </div>
        )}
      </div>

      {selectedAction && (
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-300 text-center animate-fadeIn">
          تم تنفيذ الإجراء: <strong className="text-emerald-400">{selectedAction}</strong>
        </div>
      )}
    </div>
  );
}
`,
      outputExplanation: "تستخدم Radix وسم <Dialog.Portal> لنقل محتوى النافذة المنبثقة مباشرة إلى نهاية وسم <body> لحمايتها من التداخل مع خصائص z-index أو overflow: hidden في العناصر الآباء.",
      commonMistakes: [
        {
          mistake: "نسيان استخدام Dialog.Portal ومحاولة تصيير النافذة المنبثقة داخل حاوية ذات overflow: hidden.",
          fix: "غلف دائماً محتوى النوافذ المنبثقة والقوائم بـ <Portal>.",
          reason: "بدون Portal، قد يتم قص أطراف النافذة المنبثقة إذا كان العنصر الأب يمتلك خاصية overflow: hidden."
        }
      ],
      bestPractices: [
        "استفد من خصائص data-[state=open] و data-[state=closed] التي تحقنها Radix لتنفيذ حركات ظهور وانسياب رائعة بـ Tailwind.",
        "احرص دائماً على تضمين Dialog.Title و Dialog.Description لمنع تحذيرات قارئات الشاشة في الكونسول."
      ],
      infographicCard: {
        title: "معمارية Radix UI المتقنة",
        points: [
          "نمط التركيب: Root -> Trigger -> Portal -> Content.",
          "نقل الـ Portal: يمنع مشاكل z-index وقص الحواف المشوه.",
          "حالات الـ Data Attributes: data-[state=open] للتحريك السلس بـ Tailwind."
        ]
      }
    },
    {
      id: "9.3.g",
      title: "تخصيص المكونات الجاهزة",
      englishTerm: "Customizing Pre-built Components & Theme Overrides",
      description: "الاستراتيجيات الهندسية المتبعة لتخصيص وإعادة تشكيل المكونات الجاهزة لتتوافق بدقة 100% مع تصاميم Figma الخاصة بفريقك. يشمل ذلك: استخدام مكتبة CVA (Class Variance Authority) لتوليد أشكال جديدة (Variants)، دمج الكلاسات المخصصة عبر خاصية className الممررة، وتعديل متغيرات CSS Variables في أنظمة التصميم المركزية.",
      realLifeAnalogy: "مثل شراء بدلة رسمية فاخرة وأخذها إلى خياط ماهر ليعدل أطوال أكمامها ومقاسات خصرها لتلائم جسمك بالضبط، فتجمع بين جودة القماش والمقاس المثالي.",
      whyItMatters: "المطور المحترف لا يترك المكونات بمظهرها الافتراضي؛ القدرة على تطويع المكونات الجاهزة وتغيير تفاصيلها يضمن احتفاظ شركتك بهويتها البصرية المميزة دون إعادة اختراع العجلة.",
      syntax: "import { cva } from 'class-variance-authority';\n\nconst badgeVariants = cva('base-classes', {\n  variants: {\n    variant: { default: '...', success: '...' }\n  }\n});",
      simpleExample: `// تخصيص مكون جاهز باستخدام خاصية className الإضافية
import React from "react";
import { cn } from "./utils";

// المكون يقبل className من الخارج ويدمجها مع التنسيق الأساسي
export function CustomStyledButton({ className, children, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md",
        className // هنا تندمج التعديلات الخارجية وتحل التضاربات
      )}
      {...props}
    >
      {children}
    </button>
  );
}
`,
      advancedExample: `// استوديو تخصيص الأنماط باستخدام Class Variance Authority (CVA)
import React, { useState } from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// تعريف معمارية الأشكال بـ CVA
const alertVariants = cva(
  "p-4 rounded-2xl border text-xs transition-all duration-300 flex items-start gap-3",
  {
    variants: {
      intent: {
        info: "bg-indigo-950/40 border-indigo-500/40 text-indigo-300",
        success: "bg-emerald-950/40 border-emerald-500/40 text-emerald-300",
        danger: "bg-rose-950/40 border-rose-500/40 text-rose-300"
      },
      emphasis: {
        subtle: "border-opacity-40",
        bold: "border-2 shadow-lg"
      }
    },
    defaultVariants: {
      intent: "info",
      emphasis: "subtle"
    }
  }
);

export function CVACustomizerDemo() {
  const [intent, setIntent] = useState("info");
  const [isBold, setIsBold] = useState(false);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">تخصيص الأشكال بـ CVA Architecture</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Design System
        </span>
      </div>

      {/* المكون المخصص بناءً على CVA */}
      <div className={cn(alertVariants({ intent, emphasis: isBold ? "bold" : "subtle" }))}>
        <span className="text-base">{intent === "success" ? "✓" : intent === "danger" ? "✕" : "ℹ"}</span>
        <div>
          <h5 className="font-bold mb-0.5 capitalize">تنبيه {intent}</h5>
          <p className="opacity-90">هذا المكون تم ضبط أشكاله وخصائصه بنقاء تام عبر CVA و Tailwind.</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {["info", "success", "danger"].map((t) => (
          <button
            key={t}
            onClick={() => setIntent(t)}
            className={\`py-1.5 rounded-xl text-xs font-bold border transition-all \${
              intent === t ? "bg-indigo-600 border-indigo-500 text-white" : "bg-slate-950 border-slate-800 text-slate-400"
            }\`}
          >
            {t}
          </button>
        ))}
      </div>

      <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer pt-1">
        <input
          type="checkbox"
          checked={isBold}
          onChange={(e) => setIsBold(e.target.checked)}
          className="w-4 h-4 accent-indigo-500 rounded"
        />
        <span>تفعيل النمط البارز (emphasis: bold)</span>
      </label>
    </div>
  );
}
`,
      outputExplanation: "توفر CVA طريقة معمارية صارمة ومدعومة بالكامل بأنواع TypeScript لتحديد أشكال وتنوعات المكونات وحالاتها الافتراضية بنقاء وسهولة صيانة فائقة.",
      commonMistakes: [
        {
          mistake: "استخدام !important في ملفات CSS لتعديل كلاسات المكونات الجاهزة بالقوة.",
          fix: "استخدم tailwind-merge ودالة cn() أو ميزات CVA لتجاوز الكلاسات بسلاسة وأناقة.",
          reason: "استخدام !important يخلق حروب أولويات (Specificity Wars) في CSS ويجعل تعديل التصميم لاحقاً بالغ الصعوبة."
        }
      ],
      bestPractices: [
        "مرر دائماً خاصية className اختيارية في كل مكون تبنيه لتمكين المكونات الآباء من تخصيص المسافات الخارجية.",
        "استخدم المتغيرات المشتركة CSS Variables لضبط سمات الألوان الموحدة."
      ],
      infographicCard: {
        title: "استراتيجيات تخصيص المكونات",
        points: [
          "CVA (Class Variance Authority): لإدارة منظومة الأشكال والأحجام.",
          "دالة cn(): لدمج وحل تضاربات الكلاسات الخارجية الممررة.",
          "تجنب !important: الاعتماد على مرونة Tailwind بدلاً من كسر الأولويات."
        ]
      }
    },
    {
      id: "9.3.h",
      title: "معايير اختيار مكتبة UI",
      englishTerm: "UI Library Decision Framework & Evaluation Criteria",
      description: "المصفوفة الهندسية المنهجية لاختيار مكتبة مكونات الواجهة المناسبة للمشروع الجديد. تشمل المعايير: حجم الحزمة (Bundle Size)، دعم React Server Components و Next.js App Router، درجة سهولة التخصيص لتصاميم Figma المبتكرة، جاهزية معايير سهولة الوصول (Accessibility / a11y)، دعم الاتجاه العربي (RTL)، وسرعة التطوير المطلوبة لفريق العمل.",
      realLifeAnalogy: "مثل اختيار سيارة لنشاط تجاري؛ إذا كنت توزع بضائع ثقيلة تختار شاحنة نقل (AntD)، وإذا كنت تريد سيارة سباق خفيفة ومخصصة تعدلها بنفسك تختار شاسيه مفتوح المصدر (shadcn/ui + Radix).",
      whyItMatters: "الارتباط بمكتبة UI هو أحد القرارات المعمارية التي يصعب جداً التراجع عنها لاحقاً (Vendor Lock-in). الخطأ في الاختيار يسبب إعادة كتابة آلاف الأسطر البرمجية إذا تعارضت المكتبة مع متطلبات المشروع.",
      syntax: "// مصفوفة القرار المعتمدة:\n// 1. تطبيقات الويب الحديثة والشركات الناشئة: shadcn/ui + Radix + Tailwind (الخيار الأفضل!)\n// 2. لوحات إدارة داخلية سريعة بدون مصمم: Material UI (MUI)\n// 3. أنظمة ERP وجداول بيانات محاسبية معقدة: Ant Design\n// 4. مشاريع بسيطة وسريعة: Chakra UI",
      simpleExample: `// دليل مصفوفة القرار السريعة في ملف الملاحظات
// السؤال 1: هل لديك تصميم Figma فريد ومخصص؟
// -> نعم: اختر shadcn/ui + Tailwind بلا تردد!

// السؤال 2: هل هو نظام إدارة داخلي بدون مصمم وتريد 50 مكون جاهز فوراً؟
// -> نعم: اختر Material UI أو Ant Design.
`,
      advancedExample: `// مستعرض مصفوفة المقارنة التفاعلية لاختيار مكتبة الـ UI
import React, { useState } from "react";

export function UILibraryDecisionTool() {
  const [selectedLib, setSelectedLib] = useState("shadcn");

  const libraries = {
    shadcn: {
      name: "shadcn/ui + Radix UI",
      bestFor: "الخيار الأول لكافة مشاريع الويب الحديثة وتطبيقات Next.js و SaaS",
      bundle: "خفيف جداً (كودك فقط)",
      rsc: "متوافق 100% مع Server Components",
      rtl: "دعم RTL ممتاز بفضل Tailwind",
      verdict: "المعيار الحديث الأول عالمياً ⭐⭐⭐⭐⭐"
    },
    mui: {
      name: "Material UI (MUI)",
      bestFor: "الأنظمة الإدارية ولوحات التحكم التي تحتاج عشرات المكونات الجاهزة فوراً",
      bundle: "كبير نسبياً (Full Library)",
      rsc: "يحتاج ضبطاً مسبقاً مع Emotion",
      rtl: "مدعوم عبر إعدادات rtlPlugin",
      verdict: "عملاق الأنظمة الإدارية الكلاسيكية"
    },
    antd: {
      name: "Ant Design",
      bestFor: "أنظمة ERP، المحاسبة، والبيانات ذات الجداول الكثيفة",
      bundle: "كبير جداً",
      rsc: "يحتاج 'use client'",
      rtl: "مدعوم بـ ConfigProvider",
      verdict: "الأقوى للجداول والبيانات المؤسسية المعقدة"
    }
  };

  const current = libraries[selectedLib];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">بوصلة اختيار مكتبة الـ UI</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Decision Engine
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {Object.keys(libraries).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedLib(key)}
            className={\`py-2 rounded-xl text-xs font-bold border transition-all \${
              selectedLib === key
                ? "bg-indigo-600 border-indigo-500 text-white"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
            }\`}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="p-4 bg-slate-950 rounded-2xl border border-indigo-500/30 space-y-2 text-xs">
        <h5 className="font-bold text-emerald-400 text-sm">{current.name}</h5>
        <p className="text-slate-300"><strong className="text-slate-400">الاستخدام:</strong> {current.bestFor}</p>
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-900 text-[11px]">
          <div>
            <span className="text-slate-500 block">حجم الحزمة:</span>
            <span className="font-mono text-indigo-300">{current.bundle}</span>
          </div>
          <div>
            <span className="text-slate-500 block">توافق الـ RSC:</span>
            <span className="font-mono text-indigo-300">{current.rsc}</span>
          </div>
        </div>
        <p className="text-[11px] text-emerald-400 font-bold pt-1">التقييم: {current.verdict}</p>
      </div>
    </div>
  );
}
`,
      outputExplanation: "توضح هذه الأداة أسباب تصدر shadcn/ui المشهد البرمجي اليوم بفضل خفة حجمها ودعمها المطلق للـ Server Components، مع بقاء MUI و AntD خيارات ممتازة للأنظمة الإدارية الداخلية الجاهزة.",
      commonMistakes: [
        {
          mistake: "اختيار مكتبة UI بناءً على الشعبية فقط دون التحقق من توافقها مع إطار العمل (مثل Next.js 15 و React 19).",
          fix: "افحص دعم المكتبة لـ React Server Components و CSS-in-JS قبل اعتمادها.",
          reason: "العديد من المكتبات القديمة تعاني من مشاكل Hydration وبطء شديد عند تشغيلها داخل Next.js App Router."
        }
      ],
      bestPractices: [
        "اختر shadcn/ui + Radix كخيارك الافتراضي الأول لمعظم المشاريع المعاصرة.",
        "تأكد دائماً من سهولة دعم اتجاه النصوص العربية (RTL) في المكتبة قبل البدء."
      ],
      infographicCard: {
        title: "مصفوفة الاختيار المعماري لمكتبات UI",
        points: [
          "shadcn/ui: للمشاريع الحديثة وتطبيقات Next.js و SaaS والتصاميم الفريدة.",
          "Material UI (MUI): للوحات الإدارة الجاهزة بدون مصمم UI متخصص.",
          "Ant Design: للأنظمة المؤسسية الكبرى (ERP) ذات الجداول العملاقة."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q9-3-1",
      question: "ما هو الفارق الجوهري بين shadcn/ui ومكتبات المكونات التقليدية مثل Material UI؟",
      options: [
        "أن shadcn/ui تعمل فقط على خوادم لينكس",
        "أن shadcn/ui ليست حزمة مغلقة في npm، بل تُنسخ أكواد مكوناتها مباشرة داخل مجلد مشروعك لتملكها وتعدلها بنسبة 100%",
        "أن shadcn/ui لا تدعم لغة جافاسكريبت وتعتمد على بايثون",
        "لا يوجد أي فرق بينهما سوى شعار الشركة"
      ],
      correctAnswer: 1,
      explanation: "تعتمد shadcn/ui على نموذج ملكية الكود (Copy-Paste Component Model)؛ حيث تنسخ أداة السطر البرمجي كود المكون لملفات مشروعك الخاصة مما يمنحك حرية مطلقة لتعديله وتخصيصه."
    },
    {
      id: "q9-3-2",
      question: "ماذا يقصد بمصطلح 'Headless UI Components' في هندسة واجهات المستخدم؟",
      options: [
        "مكونات تعمل بدون الحاجة لمتصفح إنترنت",
        "مكونات توفر كافة الوظائف المنطقية وحركات المفاتيح وسهولة الوصول (a11y) دون أن تفرض أي كود CSS أو مظهر محدد",
        "مكونات تفتقد لوجود وسم <head> في ملف HTML",
        "مكونات خاصة بالروبوتات ومحركات البحث فقط"
      ],
      correctAnswer: 1,
      explanation: "المكونات الـ Headless (مثل Radix UI) تقدم المنطق، وسهولة الوصول، وحبس التركيز، والتنقل بالأسهم بنقاء تام دون فرض أي تنسيق لتتيح للمطور تلبيسها أي مظهر يريده بـ Tailwind."
    },
    {
      id: "q9-3-3",
      question: "لماذا تواجه مكتبات CSS-in-JS التقليدية (مثل Emotion المعتمدة في MUI القديمة) صعوبات مع أطر العمل الحديثة كـ Next.js App Router؟",
      options: [
        "لأن السيرفر لا يفهم لغة CSS إطلاقاً",
        "لأنها تعتمد على حقن التنسيقات في وقت التشغيل (Runtime Injection) عبر سياق React Context، وهو ما يتعارض مع React Server Components",
        "لأن شركة مايكروسوفت حظرت استخدامها",
        "لأنها تزيد من درجة حرارة معالج الحاسوب"
      ],
      correctAnswer: 1,
      explanation: "مكتبات CSS-in-JS الكلاسيكية تحتاج لسياق متصفح لحساب وحقن الأنماط في الذاكرة أثناء الرندر، وهو ما لا يتوافق مع مكونات الخادم (RSC) التي تُعالج على السيرفر قبل وصولها للمتصفح."
    }
  ],
  exercise: {
    id: "ex9-3",
    title: "بناء مكون أكورديون مطوي تفاعلي بنمط Headless Composition",
    description: "المطلوب بناء مكون Accordion تفاعلي يعتمد على نمط التركيب (Composition Pattern): مكون AccordionItem يقبل title ومحتوى children، ويدير حالة الفتح والإغلاق بسلاسة مع دعم دوران سهم المؤشر بـ Tailwind وحفظ إمكانية الوصول.",
    starterCode: `import React, { useState } from "react";

// ابنِ مكون AccordionItem بنمط التركيب
export function AccordionItem({ title, children }) {
  // أدر حالة الفتح والإغلاق
  return (
    <div className="border rounded-xl">
      {/* رأس الأكورديون وزر التبديل */}
    </div>
  );
}

// المكون التجريبي الحاضن
export function AccordionDemo() {
  return (
    <div className="space-y-2 p-4">
      {/* استخدم مكون الأكورديون هنا */}
    </div>
  );
}`,
    hints: [
      "استخدم useState(false) لإدارة حالة الفتح لكل عنصر.",
      "أضف transition-transform duration-300 مع rotate-180 للسهم عند الفتح.",
      "استخدم aria-expanded={isOpen} على زر التبديل لمعايير سهولة الوصول."
    ],
    solution: `import React, { useState } from "react";

export function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-800 bg-slate-950 rounded-2xl overflow-hidden transition-all">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full p-4 flex justify-between items-center text-xs font-bold text-white hover:bg-slate-900/60 transition-colors text-right"
      >
        <span>{title}</span>
        <span
          className={\`text-indigo-400 text-xs transition-transform duration-300 transform \${
            isOpen ? "rotate-180" : "rotate-0"
          }\`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 pt-1 text-xs text-slate-300 border-t border-slate-900/80 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}

export function AccordionDemo() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <h4 className="font-bold text-sm text-indigo-400">أكورديون تفاعلي بنمط التركيب</h4>

      <div className="space-y-2">
        <AccordionItem title="ما هو الفرق بين shadcn/ui والمكتبات العادية؟" defaultOpen={true}>
          تمنحك shadcn/ui الكود المصدري كاملاً في مشروعك لتعدله بحرية مطلقة دون التقيد بحزم npm المغلقة.
        </AccordionItem>

        <AccordionItem title="لماذا تُفضل مكونات Radix UI الـ Headless؟">
          لأنها تحل كافة معضلات إمكانية الوصول والتنقل بالأسهم وتترك لك الحرية الكاملة في التنسيق بـ Tailwind.
        </AccordionItem>
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة منظومة مكتبات مكونات React",
    description: "الدليل المرئي الشامل لـ MUI, AntD, Chakra, shadcn/ui وثورة Headless UI.",
    sections: [
      {
        heading: "1. المكتبات الكلاسيكية المقيدة (Styled)",
        bullets: [
          "Material UI (MUI): تصاميم Google المكتملة؛ ممتازة للوحات الإدارة السريعة.",
          "Ant Design: عملاق الأنظمة المؤسسية الضخمة والجداول المعقدة.",
          "Chakra UI: تجربة تطوير ممتعة بنظام Style Props في JSX."
        ]
      },
      {
        heading: "2. المكونات غير المقيدة (Headless UI)",
        bullets: [
          "Radix UI: منطق وسهولة وصول كاملة (WAI-ARIA) دون أي كود CSS مفروض.",
          "نمط التركيب: Root -> Trigger -> Portal -> Content."
        ]
      },
      {
        heading: "3. المعيار الحديث (The New Standard)",
        bullets: [
          "shadcn/ui: نسخ الكود المصدري مباشرة في مشروعك مع Tailwind و Radix.",
          "ملكية تامة 100%: تعديل أي سطر دون قيود حزم npm المغلقة."
        ]
      }
    ]
  }
};
