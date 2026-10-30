// src/data/sections/section28/topic4.js
// القسم 28: بناء التطبيقات ونشرها - الموضوع 4: Docker ومفاهيم النشر المتقدمة

export const topic4 = {
  id: "28.4",
  title: "Docker ومفاهيم النشر المتقدمة",
  englishTitle: "Docker & Advanced Deployment Architecture",
  description:
    "الدليل المعماري المتقدم لاحتراف حاويات Docker والنشر على البنى التحتية السحابية المستقلة: تحويل تطبيقات React إلى حاويات خفيفة ومعزولة، إتقان تقنية البناء متعدد المراحل Multi-Stage Builds لتقليص حجم الصورة من 1GB إلى 25MB، إعداد وتكوين خادم Nginx عالي الأداء لتقديم الملفات وضغط Gzip ومسارات الـ SPA، تنسيق الخدمات المتعددة عبر Docker Compose، فهم شبكات توزيع المحتوى العالمية CDN، هندسة ترويسات الكاش طويلة الأمد، وإدارة البيئات المتعددة (Development, Staging, Production) بأعلى درجات التوافق والموثوقية.",
  subtopics: [
    {
      id: "28.4.a",
      title: "مقدمة إلى Docker والحاويات في تطبيقات React",
      englishTerm: {
        term: "Docker & Containerization",
        pronunciation: "دوكر آند كونتينرايزيشن",
        meaning: "تقنية عزل برمجي تجمع التطبيق وكافة اعتمادياته وبيئته التشغيلية في حزمة معيارية واحدة تعمل على أي نظام"
      },
      description:
        "يعد Docker المعيار العالمي لتوحيد بيئات التشغيل والقضاء نهائياً على العبارة الشهيرة المحبطة: 'الكود كان يعمل على جهازي ولكنه تعطل على خادم الشركة!'. الحاوية (Container) هي بيئة معزولة وخفيفة الوزن تشترك مع نظام التشغيل المضيف في النواة (Kernel)، ولكنها تمتلك نظام ملفاتها وحزمها المستقلة تماماً. تختلف صورة Docker (Image) عن الحاوية (Container)؛ فالصورة هي المخطط الهندسي الثابت والمجمد (Blueprint)، بينما الحاوية هي النسخة الحية المشغلة من هذه الصورة. في عالم React، يتيح لك Docker حزم تطبيقك مع خادم ويب خفيف فائق الأداء ونشره على أي منصة سحابية (AWS ECS, Google Cloud Run, DigitalOcean, Kubernetes) دون القلق من اختلاف إصدارات Node.js أو أنظمة التشغيل.",
      realWorldAnalogy:
        "تشبه حاويات الشحن البحرية القياسية (Shipping Containers)؛ قبل اختراعها، كان تفريغ السفن يستغرق أياماً لأن كل بضاعة تأتي في صناديق وأكياس بأحجام عشوائية. أما اليوم، يتم وضع أي بضاعة داخل حاوية حديدية ذات أبعاد موحدة، فتستطيع أي رافعة في أي ميناء في العالم رفعها ونقلها إلى أي شاحنة أو قطار بلمح البصر دون الاكتراث بما بداخلها.",
      whyItMatters:
        "يضمن تطابق بيئة التشغيل بين جهاز المطور وخادم الإنتاج بنسبة 100%، ويسهل النقل بين مزودي السحابة المختلفين دون الارتباط بمنصة معينة (Vendor Lock-in).",
      syntax:
        "# أوامر Docker الأساسية:\ndocker build -t my-react-app .\ndocker run -p 80:80 my-react-app\ndocker ps",
      codeExample: `// مثال سطر أوامر: دورة حياة تشغيل حاوية Docker لمشروع React
# 1. بناء صورة Docker بالاسم والوسم المعتمد
docker build -t react-showcase:v1 .

# 2. تشغيل الحاوية وربط منفذ 80 الخارجي بمنفذ 80 الداخلي
docker run -d -p 80:80 --name my-running-app react-showcase:v1

# 3. استعراض الحاويات النشطة حالياً
docker ps

# 4. فحص سجلات الخادم داخل الحاوية
docker logs my-running-app

# 5. إيقاف الحاوية بعد الانتهاء
docker stop my-running-app`,
      advancedExample: `// مثال متقدم: ملف استبعاد ملفات Docker (.dockerignore) لتسريع البناء وحماية الأسرار
# هذا الملف يوضع بجانب Dockerfile تماماً لمنع نسخ الملفات غير المرغوبة إلى الصورة:

# استبعاد الاعتماديات المحلية (سيتم تثبيتها داخل الحاوية بنظافة)
node_modules/
npm-debug.log

# استبعاد مخرجات البناء المحلية القديمة
dist/
build/

# استبعاد الأسرار وملفات البيئة الحساسة
.env
.env.local
.env.*.local

# استبعاد ملفات Git والمحررات
.git/
.github/
.vscode/
.DS_Store

# استبعاد ملفات التوثيق والاختبارات
docs/
tests/
coverage/`,
      output:
        "عزل كامل للتطبيق داخل حاوية مستقلة تضمن عمل تطبيق React بنفس الكفاءة والسلوك عبر كافة الحواسيب والخوادم السحابية.",
      commonMistakes: [
        {
          mistake: "نسيان ملف .dockerignore مما يؤدي إلى نسخ مجلد node_modules المحلي الضخم إلى سياق البناء وإبطاء العملية لعدة دقائق.",
          fix: "إنشاء ملف .dockerignore دائماً واستبعاد node_modules/ وdist/ ومجلد .git/."
        },
        {
          mistake: "تشغيل خادم تطوير Node.js (مثل vite) داخل حاوية الإنتاج بدلاً من بناء الملفات الثابتة وتقديمها عبر Nginx.",
          fix: "استخدام تقنية البناء متعدد المراحل Multi-Stage لبناء الكود ثم تقديمه عبر خادم ويب حقيقي خفيف مثل Nginx."
        }
      ],
      bestPractices: [
        "استخدم صور Alpine Linux الخفيفة (مثل node:20-alpine) لتقليص مساحة الصورة وسرعة تنزيلها.",
        "اجعل الحاوية عديمة الحالة (Stateless) بحيث يمكن إيقافها واستبدالها في أي ثانية دون فقدان أي بيانات للعميل.",
        "احرص على ألا تعمل الحاوية بصلاحيات المستخدم الجذري (Root User) في الإنتاج لتعزيز الأمان."
      ],
      infographic: {
        title: "الفرق بين صورة Docker وحاوية Docker",
        nodes: [
          { label: "Dockerfile (الوصفة)", desc: "الملف النصي الذي يحتوي على تعليمات وخطوات بناء بيئة التطبيق" },
          { label: "Docker Image (المخطط المجمد)", desc: "الحزمة الثابتة الجاهزة القابلة للمشاركة والتخزين في السجل (Registry)" },
          { label: "Docker Container (الكائن الحي)", desc: "البيئة المعزولة النشطة التي تعمل بالفعل وتستقبل طلبات المستخدمين" }
        ]
      }
    },
    {
      id: "28.4.b",
      title: "إنشاء ملف Dockerfile وتكوين خطوات التجميع",
      englishTerm: {
        term: "Dockerfile Construction",
        pronunciation: "دوكرفايل كونستركشن",
        meaning: "كتابة الوثيقة الهندسية التي تصف طبقات بناء صورة النظام وتثبيت الاعتماديات وتجميع الكود"
      },
      description:
        "ملف Dockerfile هو الوصفة البرمجية الدقيقة التي يتبعها محرك Docker خطوة بخطوة لبناء الصورة. يتكون الملف من سلسلة من التعليمات بالأحرف الكبيرة: FROM لتحديد الصورة الأساسية (Base Image)، وWORKDIR لتحديد مجلد العمل داخل الحاوية، وCOPY لنقل الملفات من حاسوبك إلى الحاوية، وRUN لتنفيذ الأوامر (مثل تثبيت الحزم والبناء)، وEXPOSE للإعلان عن المنافذ المتاحة، وCMD لتحديد الأمر الافتراضي الذي سيعمل فور تشغيل الحاوية. السر الهندسي في تسريع بناء Docker يكمن في استغلال كاش الطبقات (Layer Caching)؛ عبر نسخ ملفات package.json وpackage-lock.json وتثبيت الحزم أولاً قبل نسخ باقي الكود، ليتجنب Docker إعادة تثبيت الاعتماديات إذا لم تتغير الحزم.",
      realWorldAnalogy:
        "يشبه كتيب خطوات تركيب قطع الأثاث؛ الخطوة 1: ثبت القاعدة، الخطوة 2: ركب المسامير في اللوح الأوسط، الخطوة 3: ثبت الرفوف. إذا أردت فقط تغيير لون المفرش في الخطوة الأخيرة (تعديل كود JSX)، فلن تحتاج لتفكيك المسامير والقاعدة وإعادة تركيبها من الصفر (استغلال كاش الطبقات).",
      whyItMatters:
        "كتابة Dockerfile متقن يقلل زمن البناء وإعادة النشر من 5 دقائق إلى 10 ثوانٍ، ويقلل حجم الصورة المستهلك في ذاكرة السيرفرات.",
      syntax:
        "# تعليمات Dockerfile الأساسية:\nFROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build",
      codeExample: `// مثال عملي: ملف Dockerfile بدائي يوضح ترتيب استغلال الكاش
# 1. استخدام صورة Node الرسمية خفيفة الوزن المبنية على Alpine Linux
FROM node:20-alpine

# 2. تحديد مجلد العمل الداخلي
WORKDIR /app

# 3. نسخ ملفات تعريف الحزم أولاً لاستغلال كاش الطبقات (Docker Layer Cache)
COPY package.json package-lock.json ./

# 4. تثبيت الاعتماديات النظيفة والصارمة
RUN npm ci

# 5. نسخ باقي الشيفرة المصدرية للمشروع
COPY . .

# 6. بناء حزمة الإنتاج
RUN npm run build

# 7. كشف منفذ خادم المعاينة
EXPOSE 4173

# 8. تشغيل خادم المعاينة عند انطلاق الحاوية
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]`,
      advancedExample: `// مثال متقدم: استغلال متغيرات البناء (Build Args) لحقن عناوين الـ API أثناء بناء الصورة
# يمكنك تمرير متغيرات بيئة وقت البناء دون كتابتها صراحة في الملف:
FROM node:20-alpine

WORKDIR /app

# استقبال متغيرات البناء من سطر الأوامر
ARG VITE_API_URL
ARG VITE_APP_TITLE="React Enterprise"

# تعيينها كمتغيرات بيئة ليقرأها Vite أثناء البناء
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_APP_TITLE=$VITE_APP_TITLE

COPY package*.json ./
RUN npm ci
COPY . .

# تشغيل البناء مع المتغيرات المحقونة
RUN npm run build

# أمر تشغيل البناء من سطر الأوامر مع تمرير القيمة:
# docker build --build-arg VITE_API_URL=https://api.mycompany.com -t react-app .`,
      output:
        "بناء صورة Docker منظمة ومحكمة تستغل ذاكرة الكاش السريعة لتحديث الأكواد في ثوانٍ معدودة.",
      commonMistakes: [
        {
          mistake: "كتابة سطر 'COPY . .' قبل سطر 'RUN npm install' مما يؤدي إلى إعادة تثبيت كافة الحزم بالكامل عند تعديل حرف واحد في كود المكونات!",
          fix: "نسخ package*.json وتشغيل npm ci أولاً بمفردهما للاستفادة من كاش الطبقات، ثم نسخ باقي الكود في طبقة تالية."
        },
        {
          mistake: "استخدام صور Node الضخمة الكاملة (مثل node:latest بحجم 1.1 جيجابايت) بدلاً من صور Alpine الخفيفة.",
          fix: "استخدام node:20-alpine دائماً لتخفيض حجم الصورة الأساسية إلى أقل من 150 ميجابايت."
        }
      ],
      bestPractices: [
        "اجمع الأوامر المتتالية في سطر RUN واحد باستخدام && لتقليل عدد طبقات الصورة الناتجة.",
        "استخدم npm ci دائماً بدلاً من npm install لضمان التثبيت النظيف السريع المطابق لـ package-lock.json.",
        "احرص على ألا تخزن أي أسرار دائمة داخل طبقات الصورة؛ لأن أي شخص يستطيع فحص طبقات Docker عبر أمر docker history."
      ],
      infographic: {
        title: "ترتيب استغلال كاش الطبقات في Dockerfile",
        nodes: [
          { label: "1. FROM & WORKDIR", desc: "طبقة نادرة التغير (يتم كاشها دائماً)" },
          { label: "2. COPY package*.json & npm ci", desc: "تتغير فقط عند إضافة أو حذف حزم برمجية (كاش ممتاز)" },
          { label: "3. COPY . .", desc: "تتغير باستمرار مع تعديل كود React اليومي" },
          { label: "4. RUN npm run build", desc: "إعادة بناء سريعة للأصول دون إعادة تحميل الحزم من الإنترنت" }
        ]
      }
    },
    {
      id: "28.4.c",
      title: "تقنية البناء متعدد المراحل Multi-Stage Builds",
      englishTerm: {
        term: "Multi-Stage Docker Builds",
        pronunciation: "مولتي ستيج دوكر بيلدز",
        meaning: "استخدام مراحل بناء متعددة لفصل أدوات التجميع الضخمة عن الصورة النهائية لتقليص الحجم للأدنى"
      },
      description:
        "المعضلة الكبرى في بناء تطبيقات React هي: لبناء التطبيق، نحتاج إلى بيئة Node.js ومترجمات TypeScript وحزم npm ومكتبات التطوير التي يتجاوز حجمها 1 جيجابايت. ولكن لتشغيل التطبيق للعملاء في الإنتاج، نحن لا نحتاج بيئة Node.js على الإطلاق! كل ما نحتاجه هو مجرد خادم ويب خفيف يقدم ملفات HTML وCSS وJS الثابتة الموجودة في مجلد dist/. تقنية البناء متعدد المراحل (Multi-Stage Builds) هي الحل المعماري العبقري: ننشئ مرحلة أولى اسمها 'build stage' تحتوي على Node.js لبناء وتجميع الكود، ثم ننشئ مرحلة ثانية خفيفة جداً تعتمد على خادم Nginx Alpine، وننسخ فقط مجلد dist/ الناتج من المرحلة الأولى ونتخلص من كل مخلفات Node.js وnode_modules بالكامل! والنتيجة: تقليص حجم الصورة من 1000 ميجابايت إلى أقل من 25 ميجابايت فقط!",
      realWorldAnalogy:
        "يشبه بناء سفينة داخل حوض جاف ضخم مليء بالرافعات واللحام والعمال (المرحلة الأولى البناء)؛ بمجرد اكتمال السفينة، تفتح البوابات وتخرج السفينة الأنيقة بمفردها إلى مياه المحيط العميقة (المرحلة النهائية التشغيل)، وتترك كل الرافعات والمعدات الثقيلة في الحوض الجاف دون أن تحملها السفينة معها في رحلتها البحرية.",
      whyItMatters:
        "يقلل وقت تنزيل الصورة ونشرها على السحابة بنسبة 95%، ويوفر مساحات التخزين، ويغلق 99% من الثغرات الأمنية بحذف بيئة Node.js وأدوات التطوير غير اللازمة في الإنتاج.",
      syntax:
        "# المرحلة 1: البناء\nFROM node:20-alpine AS build\n...\n# المرحلة 2: التقديم والتشغيل\nFROM nginx:alpine\nCOPY --from=build /app/dist /usr/share/nginx/html",
      codeExample: `// مثال عملي: ملف Dockerfile الكامل بتقنية Multi-Stage Build القياسية
# ==========================================
# المرحلة 1: مرحلة البناء والتجميع (Build Stage)
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# نسخ ملفات الاعتماديات وتثبيتها
COPY package.json package-lock.json ./
RUN npm ci

# نسخ كود المشروع وبناء حزمة الإنتاج
COPY . .
RUN npm run build

# ==========================================
# المرحلة 2: مرحلة الإنتاج والتقديم (Production Stage)
# ==========================================
FROM nginx:alpine

# نسخ ملفات الـ dist المبنية فقط من المرحلة السابقة!
COPY --from=builder /app/dist /usr/share/nginx/html

# نسخ إعدادات Nginx المخصصة لمسارات SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# كشف المنفذ الافتراضي لخادم الويب
EXPOSE 80

# تشغيل خادم Nginx في المقدمة
CMD ["nginx", "-g", "daemon off;"]`,
      advancedExample: `// مثال متقدم: مقارنة أحجام الصور الناتجة قبل وبعد تقنية Multi-Stage Build
/*
---------------------------------------------------------------------------------
نوع الصورة                       | الحجم على القرص (Image Size) | زمن التنزيل
---------------------------------------------------------------------------------
صورة Node.js التقليدية الكاملة    | 1.15 GB                      | 45 ثانية
صورة Node.js مع Alpine          | 380 MB                       | 15 ثانية
صورة Nginx Multi-Stage النهائية | 23.4 MB فقط! 🚀              | ثانية واحدة!
---------------------------------------------------------------------------------
*/

// فحص الحجم بالأمر:
// $ docker images
// REPOSITORY          TAG       IMAGE ID       SIZE
// react-single-stage  latest    a1b2c3d4e5f6   1.12GB
// react-multi-stage   latest    9f8e7d6c5b4a   23.4MB  <--- توفير 98% من الحجم!`,
      output:
        "إنتاج صورة Docker فائقة النحافة والأمان بحجم لا يتعدى 25 ميجابايت، تنطلق في أجزاء من الثانية وتتحمل آلاف الطلبات المتزامنة.",
      commonMistakes: [
        {
          mistake: "نسيان كلمة 'AS builder' في السطر الأول، مما يمنع التعليمة COPY --from=builder من العثور على ملفات مرحلة البناء.",
          fix: "التأكد من تسمية المرحلة الأولى صراحة بـ AS builder واستدعائها بنفس الاسم في المرحلة التالية."
        },
        {
          mistake: "نسيان استبدال إعدادات Nginx الافتراضية بملف nginx.conf يدعم مسارات React SPA.",
          fix: "نسخ ملف nginx.conf مخصص يحتوي على try_files لتفادي أخطاء 404 عند تحديث الصفحات."
        }
      ],
      bestPractices: [
        "اعتمد تقنية Multi-Stage كقاعدة معمارية إلزامية لكافة مشاريع React التي تنشرها عبر Docker.",
        "استخدم صورة nginx:alpine-slim للحصول على أصغر حجم ممكن وأعلى درجات الأمان.",
        "تأكد من فحص الصورة بأدوات فحص الثغرات (مثل docker scout أو trivy)؛ فصور Multi-Stage الصغيرة عادة ما تسجل 0 ثغرات أمنية."
      ],
      infographic: {
        title: "هندسة البناء متعدد المراحل (Multi-Stage Build)",
        nodes: [
          { label: "المرحلة 1: Builder (Node:20)", desc: "تثبيت الحزم وبناء وتجميع كود React في مجلد dist (حجم ثقيل 1GB)" },
          { label: "خطوة النقل الذكي ➔", desc: "COPY --from=builder /app/dist فقط إلى المرحلة التالية" },
          { label: "المرحلة 2: Runtime (Nginx:Alpine)", desc: "خادم ويب فائق الخفة يقدم الملفات الثابتة فقط (حجم نهائي 23MB 🚀)" },
          { label: "التخلص من النفايات", desc: "حذف بيئة Node.js ومجلد node_modules بالكامل من الصورة النهائية" }
        ]
      }
    },
    {
      id: "28.4.d",
      title: "تقديم ملفات React باستخدام خادم Nginx عالي الأداء",
      englishTerm: {
        term: "Serving React with Nginx",
        pronunciation: "سيرفينج رياكت وذ إنجن إكس",
        meaning: "تهيئة خادم الويب الأسرع في العالم لتقديم ملفات React الثابتة مع ضغط Gzip وإدارة مسارات SPA"
      },
      description:
        "يعد خادم Nginx المعيار الصناعي العالمي لخدمة الملفات الثابتة وعكس وكيل الطلبات (Reverse Proxy). يتميز Nginx بمعمارية غير متزامنة قائمة على الأحداث (Event-driven Architecture) تتيح له معالجة عشرات الآلاف من الطلبات المتزامنة بأقل استهلاك ممكن للذاكرة والمعالج. لتقديم تطبيق React بكفاءة قصوى، يجب تكوين ملف nginx.conf المخصص ليشمل: 1) قاعدة try_files $uri $uri/ /index.html لمنع أخطاء 404 في مسارات React Router. 2) تفعيل ضغط Gzip للملفات النصية لتوفير 70% من حجم الباندويث. 3) ضبط ترويسات الكاش طويلة الأمد لمجلد الأصول الثابتة /assets/.",
      realWorldAnalogy:
        "إذا كان خادم Node.js مثل طاهٍ بارع يصنع الأطباق المعقدة حسب الطلب (مناسب للـ API وقواعد البيانات)، فإن Nginx مثل كشك آلي فائق السرعة يوزع المجلات المعلبة والمطبوعة مسبقاً في أجزاء من الثانية بمجرد لمس الشاشة دون الحاجة لإشغال الطاهي بمهام التوزيع البسيطة.",
      whyItMatters:
        "يوفر أداءً أسرع بـ 10 أضعاف مقارنة بتقديم الملفات الثابتة عبر خوادم Node.js العادية، ويتحمل ضغط ملايين الزيارات المتزامنة بثبات أسطوري.",
      syntax:
        "# السطر الحاسم في تكوين Nginx لمسارات React:\nlocation / {\n    try_files $uri $uri/ /index.html;\n}",
      codeExample: `// مثال عملي: ملف nginx.conf المتقدم والمعد خصيصاً لمشاريع React SPA
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # 1. تفعيل ضغط Gzip الفائق لتسريع التنزيل
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml application/javascript application/json;
    gzip_disable "MSIE [1-6]\\.";

    # 2. حل معضلة الـ SPA وحماية المسارات
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 3. تخزين الأصول الثابتة ذات البصمات في الكاش لمدة عام كامل
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }

    # 4. منع كاش ملف index.html لضمان استلام التحديثات الجديدة فوراً
    location = /index.html {
        expires -1;
        add_header Cache-Control "no-store, no-cache, must-revalidate";
    }
}`,
      advancedExample: `// مثال متقدم: تكوين Nginx كخادم وكيل عكسي (Reverse Proxy) يربط الـ Frontend والـ Backend في نفس الحاوية
# Nginx يستقبل كافة الطلبات على المنفذ 80:
# - إذا كان الطلب يبدأ بـ /api/ يمرره لخادم Node.js الداخلي على المنفذ 5000
# - باقي الطلبات يخدمها كملفات React الثابتة!
server {
    listen 80;
    root /usr/share/nginx/html;

    # توجيه طلبات الـ API لخادم الـ Backend دون أي مشكلة CORS!
    location /api/ {
        proxy_pass http://backend-api:5000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # خدمة تطبيق React
    location / {
        try_files $uri $uri/ /index.html;
    }
}`,
      output:
        "خادم ويب إنتاجي فائق السرعة والاستقرار يقدم ملفات React بسرعة البرق مع حل مشكلة 404 وضغط الملفات تلقائياً.",
      commonMistakes: [
        {
          mistake: "نسيان سطر 'daemon off;' في أمر تشغيل Nginx داخل Dockerfile مما يؤدي لخروج الحاوية فوراً بعد تشغيلها.",
          fix: "التأكد من تشغيل Nginx في وضع المقدمة: CMD [\"nginx\", \"-g\", \"daemon off;\"]."
        },
        {
          mistake: "تطبيق كاش طويل الأمد على ملف index.html مما يمنع المستخدمين من رؤية التحديثات الجديدة عند نشرها.",
          fix: "استثناء index.html دائماً من الكاش الطويل وتعيين no-cache له، بينما يُطبق الكاش الطويل على ملفات مجلد assets فقط."
        }
      ],
      bestPractices: [
        "فعّل ضغط Gzip دائماً في Nginx لتقليص حجم ملفات JS وCSS بنسبة تزيد عن 70% أثناء النقل.",
        "عطّل سجلات الوصول للملفات الثابتة عبر access_log off في مسار /assets لتوفير عمليات القراءة والكتابة على القرص الصلب.",
        "أضف ترويسات الأمان (Security Headers) داخل تكوين Nginx لحماية موقعك من ثغرات Clickjacking وXSS."
      ],
      infographic: {
        title: "هندسة تكوين Nginx لتطبيقات React",
        nodes: [
          { label: "try_files $uri /index.html", desc: "إعادة توجيه كافة مسارات الراوتر لملف index.html برمز 200" },
          { label: "gzip on", desc: "ضغط الملفات النصية آلياً لتوفير 70% من باقة نقل البيانات" },
          { label: "Assets Caching (1y)", desc: "كاش طويل الأمد لمدة عام للملفات ذات البصمات المشفرة" },
          { label: "index.html (no-cache)", desc: "منع كاش الملف الرئيسي لضمان استلام التحديثات الجديدة فوراً" }
        ]
      }
    },
    {
      id: "28.4.e",
      title: "تنسيق الخدمات المتعددة باستخدام Docker Compose",
      englishTerm: {
        term: "Docker Compose Multi-Container Orchestration",
        pronunciation: "دوكر كومبوز",
        meaning: "أداة لتعريف وتشغيل تطبيقات متعددة الحاويات (واجهة أمامية وخلفية وقاعدة بيانات) بملف YAML واحد"
      },
      description:
        "في العالم الحقيقي، نادراً ما يعمل تطبيق React بمفرده؛ بل يتكامل مع خادم واجهة خلفية (Node.js أو Python أو Go) وقاعدة بيانات (مثل PostgreSQL أو MongoDB) وخادم كاش (مثل Redis). تشغيل كل هذه الحاويات يدوياً بأوامر docker run منفصلة وربط شبكاتها هو كابوس برمجي. أداة Docker Compose تتيح لك تعريف هذه المنظومة بأكملها في ملف نصي واحد: docker-compose.yml. بنقرة واحدة وتشغيل أمر docker compose up، يقوم النظام بإنشاء شبكة داخلية معزولة (Bridge Network)، وتشغيل كافة الخدمات بالترتيب الصحيح، وربط المنافذ، وتوفير التخزين الدائم (Volumes) لقاعدة البيانات.",
      realWorldAnalogy:
        "يشبه استئجار شقة مفروشة بالكامل بنقرة زر واحدة بدلاً من شراء الشقة ثم الذهاب لمعارض مختلفة لشراء السرير والمطبخ والتكييف وتركيب شبكة السباكة والكهرباء بنفسك قطعة قطعة؛ ملف Compose هو العقد الشامل الذي يجهز لك الشقة متكاملة بالكهرباء والماء فور دخولك الباب.",
      whyItMatters:
        "يتيح لأي مطور جديد في الفريق تشغيل كامل المنظومة البرمجية (Full Stack Environment) على جهازه في دقيقة واحدة بأمر واحد فقط: docker compose up دون الحاجة لتثبيت قواعد البيانات محلياً.",
      syntax:
        "# تشغيل كافة الخدمات في الخلفية:\ndocker compose up -d\n\n# إيقاف المنظومة وحذف الحاويات والشبكات:\ndocker compose down",
      codeExample: `// مثال عملي: ملف docker-compose.yml لتشغيل تطبيق React مع خادم API وقاعدة بيانات
version: '3.8'

services:
  # 1. خدمة الواجهة الأمامية (React + Nginx)
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "80:80"
    depends_on:
      - backend
    networks:
      - app-network

  # 2. خدمة الخادم الخلفي (Node.js API)
  backend:
    build:
      context: ./backend
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=postgres://user:secret@postgres:5432/mydb
    depends_on:
      - postgres
    networks:
      - app-network

  # 3. خدمة قاعدة البيانات
  postgres:
    image: postgres:16-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=secret
      - POSTGRES_DB=mydb
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - app-network

# تعريف الشبكة الداخلية المشتركة والتخزين الدائم
networks:
  app-network:
    driver: bridge

volumes:
  pgdata:`,
      advancedExample: `// مثال متقدم: تكوين Docker Compose لبيئة التطوير التفاعلية مع دعم Hot Reload (HMR)
# تشغيل خادم تطوير Vite داخل الحاوية مع مزامنة التعديلات من جهازك فورياً!
version: '3.8'

services:
  react-dev:
    image: node:20-alpine
    working_dir: /app
    ports:
      - "5173:5173"
    # ربط مجلد حاسوبك المحلي بمجلد الحاوية لمزامنة الكود اللحظية (Bind Mount)
    volumes:
      - .:/app
      - /app/node_modules # منع استبدال node_modules الخاص بالحاوية
    environment:
      - WATCHPACK_POLLING=true # ضمان التقاط التغييرات عبر أنظمة الملفات المختلفة
    command: npm run dev -- --host 0.0.0.0`,
      output:
        "تشغيل المنظومة الكاملة بتناغم وسلاسة عبر أمر واحد، مع تواصل الخدمات الداخلية بأسمائها (مثل الاتصال بـ postgres:5432) دون تعقيدات IP.",
      commonMistakes: [
        {
          mistake: "محاولة الاتصال بقاعدة البيانات عبر 'localhost:5432' من داخل حاوية الـ Backend وتلقي خطأ Connection Refused.",
          fix: "داخل شبكة Docker Compose، اسم الخدمة هو عنوان المضيف؛ لذا استخدم اسم الخدمة الصريح: 'postgres:5432' بدلاً من localhost."
        },
        {
          mistake: "نسيان تعريف وحدة التخزين (Volume) لقاعدة البيانات مما يؤدي لفقدان كافة البيانات المسجلة فور إيقاف الحاوية.",
          fix: "ربط مجلد بيانات قاعدة البيانات بـ Named Volume لضمان بقاء البيانات المخزنة للأبد حتى بعد إعادة تشغيل الحاويات."
        }
      ],
      bestPractices: [
        "استخدم خاصية depends_on لتحديد تسلسل بدء تشغيل الخدمات بحيث تبدأ قاعدة البيانات أولاً ثم الـ API ثم الواجهة الأمامية.",
        "افصل إعدادات الإنتاج عن التطوير باستخدام ملفين: docker-compose.yml و docker-compose.dev.yml.",
        "استخدم أمر docker compose logs -f لمراقبة مخرجات وسجلات كافة الخدمات بالتزامن في شاشة طرفية واحدة."
      ],
      infographic: {
        title: "بنية وتنسيق الخدمات في Docker Compose",
        nodes: [
          { label: "Frontend Service", desc: "React + Nginx يعمل على المنفذ الخارجي 80 لاستقبال الزوار" },
          { label: "Backend Service", desc: "Node.js REST API يعمل على المنفذ الداخلي 5000" },
          { label: "Database Service", desc: "PostgreSQL متصل بـ Volume لتخزين البيانات بشكل دائم" },
          { label: "Bridge Network", desc: "شبكة داخلية مشفرة تتيح للخدمات التخاطب بأسمائها الافتراضية" }
        ]
      }
    },
    {
      id: "28.4.f",
      title: "فهم واستغلال شبكات توصيل المحتوى العالمية CDN",
      englishTerm: {
        term: "Content Delivery Networks (CDNs)",
        pronunciation: "كونتنت ديليفري نيتووركس",
        meaning: "شبكة جغرافية موزعة من الخوادم الوسيطة تخزن ملفات موقعك الثابتة قريباً من المستخدمين لتسريع التصفح"
      },
      description:
        "الفيزياء تحكم سرعة الإنترنت؛ فإذا كان خادمك الأصلي (Origin Server) في ولاية كاليفورنيا الأمريكية، وقام مستخدم في الرياض أو القاهرة بفتح موقعك، ستستغرق حزمة البيانات ذهاباً وإياباً عبر كابلات المحيطات ما يزيد عن 250 ميلي ثانية لكل طلب! شبكات توصيل المحتوى (CDNs مثل Cloudflare وCloudFront وFastly) تحل هذه المشكلة عبر امتلاك خوادم وسيطة (Edge Servers / Points of Presence - PoPs) في كل عواصم ومدن العالم. عند زيارة أول مستخدم، تجلب الـ CDN نسخة من ملفات تطبيق React الثابتة وتخزنها في الخادم المحلي في الرياض؛ ليحصل كافة الزوار اللاحقين على الموقع في أقل من 10 ميلي ثوانٍ وكأن السيرفر يقف في نفس غرفتهم.",
      realWorldAnalogy:
        "يشبه شركة منتجات غذائية عملاقة تصنع المشروبات في مصنع مركزي واحد في ألمانيا؛ بدلاً من شحن كل زجاجة للزبائن بالبريد الدولي، تؤسس الشركة مستودعات توزيع إقليمية في الرياض ودبي وعمان وتملؤها بالمنتجات، ليشتريها الزبون من البقالة المجاورة لمنزله فورياً دون انتظار الشحن الدولي.",
      whyItMatters:
        "تخفض سرعة تحميل الموقع (TTFB وLCP) بنسبة تزيد عن 80%، وتحمي خادمك الأصلي من الانهيار عند حدوث طفرات مفاجئة في أعداد الزوار (Traffic Spikes).",
      syntax:
        "# التدفق الجغرافي للـ CDN:\nUser in Cairo ➔ Cairo CDN Edge Server (Cache Hit: 8ms!) ➔ Instant React Render",
      codeExample: `// مثال مفاهيمي: محاكاة فحص زمن الاستجابة مع وبدون شبكة CDN
const latencyComparison = {
  withoutCdn: {
    originLocation: "San Francisco, USA",
    userLocation: "Riyadh, Saudi Arabia",
    roundTripTime: "240ms (بطيء بسبب المسافة الجغرافية)",
    hops: 14
  },
  withCdn: {
    edgeLocation: "Riyadh Edge PoP (Cloudflare / CloudFront)",
    userLocation: "Riyadh, Saudi Arabia",
    roundTripTime: "12ms (سرعة لحظية فائقة!)",
    hops: 2
  }
};

console.log('مقارنة أثر الـ CDN الجغرافي:', latencyComparison);`,
      advancedExample: `// مثال متقدم: تكوين ترويسات التحكم بالـ CDN (CDN Cache Control Headers) في خوادم الإنتاج
// الفرق بين Cache-Control للمتصفح وCDN Cache:
const cdnOptimizationHeaders = {
  // s-maxage: يحدد مدة التخزين في خوادم الـ CDN حصراً (سنة كاملة)
  // max-age: يحدد مدة التخزين في متصفح المستخدم الفردي
  // stale-while-revalidate: يعرض النسخة المخزنة فوراً ويحدث الكاش في الخلفية
  'Cache-Control': 'public, max-age=3600, s-maxage=31536000, stale-while-revalidate=86400',

  // ترويسة تمنع تحويل الصور والملفات من قِبل شبكات الاتصال الرديئة
  'Surrogate-Control': 'max-age=31536000'
};

console.log('ترويسات كاش الـ CDN الاحترافية جاهزة للاستخدام');`,
      output:
        "تحقيق سرعة تحميل قصوى عالمياً واستقرار تام؛ حيث يتم خدمة أكثر من 95% من طلبات الموقع مباشرة من ذاكرة خوادم الـ CDN دون إزعاج السيرفر الأصلي.",
      commonMistakes: [
        {
          mistake: "تخزين صفحات البيانات المتغيرة في الـ CDN بمدد زمنية طويلة دون آلية لتفريغ الكاش (Purge Cache) عند التحديث.",
          fix: "تخصيص الكاش الطويل جداً للملفات الثابتة ذات البصمات (Hashed Assets في /assets/)، وتحديد مدد قصيرة أو no-cache للبيانات الحية."
        },
        {
          mistake: "نسيان تفعيل ميزة ضغط Brotli أو Gzip على مستوى لوحة تحكم الـ CDN.",
          fix: "تفعيل ضغط Brotli التلقائي في إعدادات Cloudflare أو CloudFront للحصول على ضغط إضافي بنسبة 20% أفضل من Gzip."
        }
      ],
      bestPractices: [
        "استغل ميزة الـ Cache Invalidation التلقائية عند نشر كود جديد لضمان سحب الملفات القديمة من كافة خوادم الـ CDN العالمية.",
        "اربط ميزة Origin Shield لتقليل الحمل على خادمك الأصلي عبر تجميع طلبات الـ Edge المتعددة في طلب واحد مركزي.",
        "استخدم أدوات التحليل لمراقبة نسبة نجاح الكاش (Cache Hit Ratio)؛ والهدف هو تحقيق نسبة تفوق 90% للملفات الثابتة."
      ],
      infographic: {
        title: "آلية عمل شبكات توصيل المحتوى العالمية (CDN Architecture)",
        nodes: [
          { label: "Origin Server", desc: "خادمك الأصلي الذي يحتوي على الشيفرة المصدرية الأساسية" },
          { label: "Global Edge Nodes (PoPs)", desc: "مئات الخوادم الوسيطة الموزعة جغرافياً في عواصم العالم" },
          { label: "Cache Hit (95%)", desc: "خدمة المستخدم من الخادم الأقرب لمدينته في ثوانٍ معدودة" },
          { label: "Lightning Speed ⚡", desc: "تقليص زمن الاستجابة من 250ms إلى أقل من 15ms" }
        ]
      }
    },
    {
      id: "28.4.g",
      title: "استراتيجيات التخزين المؤقت للأصول الثابتة Cache-Control",
      englishTerm: {
        term: "Static Assets Caching & Cache-Control",
        pronunciation: "كاش كنترول آند إيميوتابل",
        meaning: "هندسة ترويسات HTTP التي تأمر المتصفح وشبكات CDN بتخزين الملفات للأبد وتفريغها بذكاء"
      },
      description:
        "هندسة التخزين المؤقت للأصول الثابتة في تطبيقات React الحديثة تعتمد على مبدأ عبقري يسمى 'التخزين الأبدي غير القابل للتعديل' (Immutable Caching). كيف يعمل هذا التناغم؟ عندما تبني تطبيقك بـ Vite، يتم تسمية ملفات جافاسكريبت وCSS ببصمات تشفيرية تتغير إذا تغير محتوى الملف ولو بحرف واحد (مثل index-BrdVhbPP.js). بناءً على ذلك، نعطي هذه الملفات ترويسة: Cache-Control: public, max-age=31536000, immutable، مما يخبر المتصفح: 'خزن هذه الملفات على جهاز المستخدم لمدة عام كامل، ولا تعد لطلبها من الإنترنت أبداً!'. وفي المقابل، نعطي ملف index.html ترويسة: Cache-Control: no-cache، مما يعني أن المتصفح يسأل السيرفر دائماً عن index.html فقط؛ فإذا قمت بنشر نسخة جديدة، سيستلم index.html الذي يشير بدوره إلى أسماء الملفات الجديدة تلقائياً، فيحمل الجديد ويستفيد من كاش القديم!",
      realWorldAnalogy:
        "يشبه استبدال العملات؛ طالما أن العملة الورقية تحمل نفس الرقم التسلسلي، فإنها صالحة للأبد في جيبك ولا تسأل البنك عنها كل صباح. ولكن بمجرد أن يصدر البنك المركزي فئة جديدة بتصميم جديد ورقم جديد (بصمة تجزئة جديدة)، تأخذ الفئة الجديدة فوراً دون أن يحدث أي تضارب بين القديم والجديد.",
      whyItMatters:
        "يجعل الزيارات المتكررة لتطبيقك تفتح بسرعة خارقة بصفر ميلي ثانية وصفر استهلاك لباقة الإنترنت، لأن كافة الملفات تُقرأ مباشرة من الذاكرة المحلية (Memory / Disk Cache).",
      syntax:
        "# الترويسة المثالية للأصول الثابتة:\nCache-Control: public, max-age=31536000, immutable\n\n# الترويسة الإلزامية لملف index.html:\nCache-Control: no-cache, no-store, must-revalidate",
      codeExample: `// مثال عملي: مصفوفة استراتيجية التخزين المؤقت المزدوجة لتطبيقات React
/*
-----------------------------------------------------------------------------------
نوع الملف / المسار          | ترويسة Cache-Control المعتمدة             | الهدف
-----------------------------------------------------------------------------------
ملف index.html              | no-cache, no-store, must-revalidate        | فحص دائم للتحديثات
مجلد الأصول /assets/*       | public, max-age=31536000, immutable        | كاش أبدي لمدة عام كامل!
الصور التوضيحية والصور العامة| public, max-age=86400, stale-while-revalidate | كاش يومي مع تجديد خلفي
-----------------------------------------------------------------------------------
*/`,
      advancedExample: `// مثال متقدم: التحقق من مصدر تحميل الأصول (Cache Hit vs Network) في متصفح العميل
// كود جافاسكريبت لقياس كفاءة استرجاع الأصول من الكاش المحلي للمتصفح عبر Performance Navigation Timing:

export function measureCacheEfficiency() {
  // قراءة كافة الموارد التي تم تحميلها في الصفحة الحالية
  const resources = performance.getEntriesByType('resource');
  let cachedCount = 0;
  let networkCount = 0;

  resources.forEach((res) => {
    // إذا كان transferSize صفراً أو كان duration ضئيلاً جداً فهذا يعني قراءته من الكاش
    if (res.transferSize === 0 || res.deliveryType === 'cache') {
      cachedCount++;
    } else {
      networkCount++;
    }
  });

  const total = cachedCount + networkCount;
  const ratio = total > 0 ? Math.round((cachedCount / total) * 100) : 0;

  console.log(\`📊 كفاءة الكاش المحلي: \${ratio}% من الملفات قُرئت مباشرة من ذاكرة المستخدم!\`);
  console.log(\`✅ من الكاش: \${cachedCount} ملفات | 🌐 من الشبكة: \${networkCount} ملفات\`);
  return { ratio, cachedCount, networkCount };
}`,
      output:
        "تحقيق سرعة لحظية مذهلة في الزيارات المتكررة؛ حيث يتم تقديم ملفات الجافاسكريبت والأنماط من ذاكرة القرص الصلب (Disk Cache) بزمن 0ms تقريباً.",
      commonMistakes: [
        {
          mistake: "وضع ترويسة كاش طويلة (max-age=31536000) على ملف index.html مما يجعل المستخدمين محبوسين في النسخة القديمة حتى لو نشرت 100 تحديث جديد!",
          fix: "الاستثناء الصارم لملف index.html دائماً وتعيين no-cache له لكي يطلب المتصفح الملف المحدث في كل زيارة."
        },
        {
          mistake: "تسمية الصور أو الملفات بأسماء ثابتة (مثل logo.png) دون بصمة تجزئة وتفعيل كاش طويل الأمد عليها، مما يجعل تغيير الشعار لا يظهر للعملاء.",
          fix: "استيراد الصور داخل كود React لكي يقوم Vite بتوليد بصمة هاش فريدة لها (مثل logo-a8f9c.png)."
        }
      ],
      bestPractices: [
        "استخدم خاصية immutable في ترويسة Cache-Control لإخبار المتصفح بعدم إرسال طلب فحص التحديث شرطي (Conditional 304 Revalidation) أثناء التمرير والتنقل.",
        "تأكد من أن نظام البناء يقوم بتضمين تجزئة المحتوى (Content Hash) في أسماء كافة مخرجات مجلد assets.",
        "افحص ترويسات الاستجابة في تبويب Network بأدوات المطور DevTools للتأكد من تطبيق قواعد الكاش بالشكل السليم."
      ],
      infographic: {
        title: "منظومة التخزين المؤقت المزدوجة (Dual Caching Strategy)",
        nodes: [
          { label: "1. index.html (no-cache)", desc: "المتصفح يفحصه دائماً مع السيرفر لمعرفة أسماء أحدث الملفات" },
          { label: "2. /assets/* (immutable)", desc: "كاش أبدي لمدة سنة كاملة لأن الاسم يحمل بصمة المحتوى الفريدة" },
          { label: "3. نشر تحديث جديد 🚀", desc: "يتغير اسم الملف في index.html، فيطلب المتصفح الملف الجديد فقط ويستفيد من كاش الباقي!" }
        ]
      }
    },
    {
      id: "28.4.h",
      title: "إدارة البيئات المتعددة Development وStaging وProduction",
      englishTerm: {
        term: "Multi-Environment Parity (Dev, Stage, Prod)",
        pronunciation: "مولتي إنفيرونمنت باريتي",
        meaning: "تنظيم وعزل بيئات العمل المختلفة لضمان اختبار الميزات في بيئة تحاكي الإنتاج تماماً قبل إطلاقها للجمهور"
      },
      description:
        "في الشركات والأنظمة البرمجية الاحترافية، لا ينتقل الكود مباشرة من حاسوب المطور إلى المستخدمين؛ بل يمر عبر ثلاث بيئات منفصلة ومعزولة تضمن مبدأ التكافؤ البيئي (Environment Parity): 1) بيئة التطوير (Development): بيئة حواسيب المطورين مع خوادم محلية وسريعة وقواعد بيانات تجريبية وهمية. 2) بيئة المسرح والتجربة (Staging / Pre-production): بيئة سحابية مطابقة ومماثلة للإنتاج بنسبة 100% في البنية التحتية والخوادم ونفس قواعد الأمان، ولكنها مغلقة على الفريق والعملاء المختارين لاختبار الميزات والتأكد من عدم وجود أي خلل قبل الإطلاق. 3) بيئة الإنتاج الحية (Production): البيئة النهائية الرسمية التي يتعامل معها المستخدمون الحقيقيون وتحوي البيانات الفعلية وأعلى مستويات المراقبة والأمان.",
      realWorldAnalogy:
        "تشبه إطلاق مركبة فضائية جديدة؛ المرحلة الأولى هي التصاميم والمحاكاة على الحاسوب في مكتب المهندسين (Development). المرحلة الثانية هي إطلاق نموذج تجريبي غير مأهول في الصحراء لاختبار المحركات والفرامل في ظروف واقعية (Staging). والمرحلة الثالثة هي إطلاق الصاروخ الحقيقي الحامل لرواد الفضاء إلى القمر (Production).",
      whyItMatters:
        "يمنع وصول الأخطاء الكارثية إلى العملاء الحقيقيين، ويتيح لفريق المبيعات والدعم الفني والـ QA تجربة النظام وتدريب العملاء دون الخوف من تخريب بيانات الإنتاج.",
      syntax:
        "# توزيع المسارات والنطاقات النموذجية للبيئات الثلاث:\nDev:   localhost:5173\nStage: https://staging.mycompany.com\nProd:  https://mycompany.com",
      codeExample: `// مثال عملي: ملف إدارة التكوين المركزي للبيئات المتعددة (src/config/index.js)
// كائن تكوين يحدد الخصائص التلقائية لكل بيئة عمل
const ENV_CONFIG = {
  development: {
    apiUrl: 'http://localhost:5000/api',
    enableDebugTools: true,
    environmentBadge: 'DEV 🛠️',
    sentryDsn: null // تعطيل تتبع الأخطاء في التطوير
  },
  staging: {
    apiUrl: 'https://api-staging.mycompany.com',
    enableDebugTools: true,
    environmentBadge: 'STAGING 🧪',
    sentryDsn: 'https://public@sentry.io/staging-project'
  },
  production: {
    apiUrl: 'https://api.mycompany.com',
    enableDebugTools: false,
    environmentBadge: null, // لا تظهر أي شارة في الإنتاج
    sentryDsn: 'https://public@sentry.io/prod-project'
  }
};

// تحديد التكوين النشط بناءً على متغير MODE في Vite
const currentMode = import.meta.env.MODE || 'development';
export const config = ENV_CONFIG[currentMode] || ENV_CONFIG.development;

console.log(\`✅ تم تحميل تكوين بيئة: \${currentMode}\`);`,
      advancedExample: `// مثال متقدم: مكون شريط التمييز البصري للبيئات غير الإنتاجية لحماية المطورين
import React from 'react';
import { config } from '../config';

export function EnvironmentWatermarkBanner() {
  // إذا كنا في بيئة الإنتاج الرسمية لا نعرض أي شريط
  if (!config.environmentBadge) return null;

  return (
    <div className="bg-amber-600 text-slate-950 px-4 py-1 text-center text-xs font-black tracking-wider uppercase shadow-md flex items-center justify-center gap-2 font-mono select-none z-50">
      <span>⚠️ تنبيه بيئة تجريبية:</span>
      <span>{config.environmentBadge}</span>
      <span>- البيانات المسجلة هنا لا تؤثر على الإنتاج الحقيقي</span>
    </div>
  );
}`,
      output:
        "تنظيم صارم ومحمي يمنح الفريق بيئة تجربة سحابية حقيقية (Staging) لاكتشاف العيوب قبل أن يراها أي عميل حقيقي في الإنتاج.",
      commonMistakes: [
        {
          mistake: "ربط بيئة Staging بقاعدة بيانات الإنتاج الحقيقية مما يؤدي إلى مسح أو تعديل حسابات مستخدمين حقيقيين أثناء تجارب فريق الـ QA!",
          fix: "الفصل التام والمطلق بين قواعد بيانات البيئات الثلاث؛ لا تشترك Staging مع Production في أي قاعدة بيانات أو مفتاح سري إطلاقاً."
        },
        {
          mistake: "السماح لمحركات البحث (Googlebot) بالزحف وفهرسة موقع Staging مما يسبب عقوبات محتوى مكرر ويضر بـ SEO الموقع الأصلي.",
          fix: "وضع وسم <meta name='robots' content='noindex, nofollow'> في بيئة Staging أو حمايتها بنظام تسجيل دخول بكلمة مرور (Basic Auth)."
        }
      ],
      bestPractices: [
        "احرص على مبدأ التكافؤ البيئي (Dev/Prod Parity) بجعل إصدارات البرمجيات وقواعد البيانات في Staging مطابقة تماماً للإنتاج.",
        "احمِ بيئة Staging بنظام مصادقة موحد للموظفين (Single Sign-On عبر Google Workspace أو VPN الشركة).",
        "أتمتة نسخ نسخة منقحة وخالية من البيانات الحساسة (Sanitized DB Dump) من الإنتاج إلى Staging دورياً لاختبار البيانات الواقعية بأمان."
      ],
      infographic: {
        title: "خط سير الترقية عبر البيئات الثلاث (Promotion Flow)",
        nodes: [
          { label: "1. Development (المحلي)", desc: "بيئة التطوير السريعة بكود غير مضغوط ومحاكاة البيانات" },
          { label: "2. Staging (المسرح التجريبي)", desc: "بيئة سحابية مطابقة للإنتاج لاختبارات الجودة وموافقة العميل" },
          { label: "3. Production (الإنتاج الحي 🚀)", desc: "البيئة الرسمية للجمهور بأعلى سرعة وأمان ومراقبة أخطاء لحظية" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-28-4-1",
      question: "ما هي الفائدة المعمارية الكبرى لتطبيق تقنية البناء متعدد المراحل (Multi-Stage Builds) في Docker لمشاريع React؟",
      options: [
        "فصل أدوات البناء الضخمة وبيئة Node.js عن الصورة النهائية واستخدام خادم Nginx خفيف فقط، مما يقلص حجم الصورة من 1GB إلى أقل من 25MB.",
        "تمكين التطبيق من العمل على أنظمة التشغيل القديمة مثل Windows 98.",
        "توليد رسوم متحركة CSS ثلاثية الأبعاد تلقائياً.",
        "زيادة سرعة معالج بطاقة الرسوميات بنسبة 50%."
      ],
      correctAnswer: 0,
      explanation:
        "تسمح تقنية Multi-Stage ببناء التطبيق في مرحلة أولى كاملة، ثم نسخ المخرجات المجمعة في dist/ فقط إلى مرحلة نهائية تعتمد على Nginx Alpine النحيف، والتخلص من كافة مخلفات Node.js وnode_modules لإنتاج أصغر صورة ممكنة."
    },
    {
      id: "quiz-28-4-2",
      question: "لماذا نطبق ترويسة 'no-cache' على ملف index.html بينما نطبق 'max-age=31536000, immutable' على ملفات مجلد assets؟",
      options: [
        "لأن المتصفح يرفض حفظ ملفات HTML بطبيعته.",
        "لكي يفحص المتصفح ملف index.html في كل زيارة لمعرفة أسماء الملفات الجديدة، مع تخزين ملفات assets ذات البصمات المشفرة للأبد لتسريع التصفح بصفر ميلي ثانية.",
        "لحظر محركات البحث من قراءة ملفات الجافاسكريبت.",
        "لأن Nginx لا يدعم ترويسات الكاش على ملفات HTML."
      ],
      correctAnswer: 1,
      explanation:
        "هذه هي استراتيجية الكاش المزدوجة المثالية؛ فملفات assets تمتلك أسماء تحوي تجزئة المحتوى (Content Hash)، فإذا تغيرت نزل الجديد، وإذا لم تتغير تُقرأ من الكاش للأبد، بينما index.html يظل البوصلة المحدثة دائماً."
    },
    {
      id: "quiz-28-4-3",
      question: "ما هو الخطر الفادح لربط بيئة المسرح والتجربة (Staging Environment) بنفس قاعدة بيانات بيئة الإنتاج (Production)؟",
      options: [
        "توقف لوحة مفاتيح الحاسوب عن العمل.",
        "خطر قيام فريق الاختبارات بمسح أو تعديل أو كشف بيانات ومعاملات عملاء الإنتاج الحقيقيين عن طريق الخطأ.",
        "زيادة حجم ملفات الجافاسكريبت بمقدار الضعف.",
        "إغلاق حساب GitHub للمستودع."
      ],
      correctAnswer: 1,
      explanation:
        "يجب أن تكون بيئة Staging معزولة تماماً في قواعد البيانات والأسرار؛ لأن أي خطأ أو تجربة في Staging قد تؤدي لكارثة فقدان أو تلف بيانات العملاء الحقيقيين إذا كانت تشترك في نفس قاعدة البيانات."
    }
  ],
  exercise: {
    id: "exercise-28-4",
    title: "كتابة ملف Dockerfile متعدد المراحل مع تكوين Nginx وDocker Compose كامل",
    description:
      "1) اكتب ملف 'Dockerfile' متعدد المراحل (Multi-Stage) يستخدم node:20-alpine للبناء وnginx:alpine للتشغيل.\n2) اكتب ملف 'nginx.conf' يدعم ضغط Gzip وتوجيه try_files لمسارات SPA.\n3) اكتب ملف 'docker-compose.yml' يشغل الواجهة على المنفذ 80 ويربطها بشبكة داخلية مع خادم API.",
    hints: [
      "في المرحلة الأولى استخدم 'FROM node:20-alpine AS builder'.",
      "في المرحلة الثانية انسخ المخرجات عبر 'COPY --from=builder /app/dist /usr/share/nginx/html'.",
      "في nginx.conf ضع السطر الحاسم: 'try_files $uri $uri/ /index.html;'."
    ],
    solution: `# 1. ملف Dockerfile المتكامل متعدد المراحل:
# مرحلة البناء
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# مرحلة التقديم الخفيفة بـ Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# 2. ملف nginx.conf لمسارات React SPA:
/*
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
*/

# 3. ملف docker-compose.yml:
/*
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "80:80"
    restart: always
    networks:
      - app-net

networks:
  app-net:
    driver: bridge
*/`
  },
  infographic: {
    title: "منظومة Docker والنشر المتقدم لتطبيقات React",
    subtitle: "المسار الهندسي من بناء الحاويات النحيفة وإعداد Nginx إلى التوزيع العالمي عبر الـ CDN",
    nodes: [
      {
        id: "multi-stage",
        title: "1. البناء متعدد المراحل",
        description: "فصل مرحلة البناء الثقيلة عن Nginx لإنتاج صورة نحيفة جداً بحجم 23MB فقط.",
        badge: "Multi-Stage"
      },
      {
        id: "nginx-engine",
        title: "2. خادم Nginx عالي الأداء",
        description: "try_files لمسارات SPA وضغط Gzip السريع وتأمين الترويسات الأمنية.",
        badge: "Nginx Engine"
      },
      {
        id: "compose-orchestration",
        title: "3. تنسيق Docker Compose",
        description: "تشغيل Frontend وBackend وقواعد البيانات بملف تكوين وشبكة داخلية واحدة.",
        badge: "Compose Orchestration"
      },
      {
        id: "cdn-edge",
        title: "4. التوزيع الجغرافي بالـ CDN",
        description: "خوادم حافة عالمية تقدم الأصول من أقرب نقطة للعميل بزمن أقل من 15ms.",
        badge: "Global Edge"
      },
      {
        id: "environments-parity",
        title: "5. عزل وتكافؤ البيئات",
        description: "فصل Dev وStaging وProduction التام في قواعد البيانات لحماية الإنتاج.",
        badge: "Environment Parity"
      }
    ]
  }
};

export default topic4;

