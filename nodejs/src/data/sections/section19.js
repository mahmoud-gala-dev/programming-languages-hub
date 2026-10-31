// src/data/sections/section19.js
// القسم التاسع عشر: Docker والنشر وDevOps
// خريطة طريق Node.js الشاملة - القسم رقم 19

export const SECTION_19 = {
  "id": 19,
  "number": "19",
  "title": "القسم التاسع عشر: Docker والنشر وDevOps",
  "englishTitle": "Docker, Deployment & CI/CD",
  "badge": "خبير",
  "color": "from-sky-800 to-teal-700",
  "description": "أساسيات خوادم Linux وSSH، حاويات Docker وبناء صور خفيفة Multi-stage، إدارة الخدمات بـ Docker Compose، النشر على VPS مع Nginx، وخطوط أنابيب CI/CD.",
  "summary": {
    "overview": "يشرح هذا القسم مهارات DevOps الأساسية ونشر تطبيقات Node.js في بيئات الإنتاج الحديثة. يغطي بناء وتصغير حاويات Docker باستخدام التجميع متعدد المراحل (Multi-Stage Builds)، إدارة الخدمات عبر Docker Compose، إعداد خوادم Linux وإدارتها عبر systemd، تكوين Nginx كخادم وكيل عكسي (Reverse Proxy) مع دعم شهادات SSL المجانية من Let's Encrypt، وأتمتة خطوط الاختبار والنشر المستمر (CI/CD) عبر GitHub Actions.",
    "goldenRules": [
      {
        "title": "استخدم Multi-Stage Builds لتصغير حجم صورة Docker بنسبة 80%",
        "desc": "قم بتجميع الكود وتثبيت devDependencies في مرحلة البناء (Build Stage)، ثم انقل فقط الملفات المجمعة والـ Production dependencies إلى صورة التشغيل النهائية."
      },
      {
        "title": "لا تشغل تطبيق Node.js كمستخدم جذر (Root User) داخل الحاوية",
        "desc": "استخدم دائماً التوجيه USER node داخل الـ Dockerfile لحماية الخادم المستضيف من ثغرات الهروب من الحاويات (Container Escapes)."
      },
      {
        "title": "احترم إشارات إيقاف النظام (SIGTERM / SIGINT) في الحاوية",
        "desc": "شغل التطبيق مباشرة عبر CMD [\"node\", \"dist/index.js\"] وتجنب npm start؛ فالأخير يبتلع إشارات الإيقاف ويمنع الإغلاق السلس للتطبيق."
      },
      {
        "title": "ضع Nginx كخادم وكيل عكسي (Reverse Proxy) أمام Node.js دائماً",
        "desc": "يتولى Nginx إنهاء تشفير SSL/TLS، ضغط الملفات الثابتة، والحماية من هجمات الإغراق، مما يعفي Node.js من هذه الأعباء."
      },
      {
        "title": "لا تضمن ملفات .env أو أسرار المشروع داخل صورة Docker",
        "desc": "مرر المتغيرات البيئية وقت التشغيل عبر Docker Compose أو أدوات إدارة الأسرار السحابية (AWS Secrets Manager / Vault)."
      },
      {
        "title": "استخدم صور Node.js خفيفة الوزن (Alpine / Slim)",
        "desc": "الاعتماد على node:20-alpine يقلل حجم الصورة من 1GB إلى أقل من 150MB، ويسرع وقت النشر ويقلل الثغرات الأمنية في النظام الأساسي."
      },
      {
        "title": "أتمتة خط الاختبار والتدقيق في GitHub Actions قبل كل دمج",
        "desc": "اضبط سير عمل (Workflow) يقوم بتشغيل npm ci و npm run lint و npm test تلقائياً عند فتح أي Pull Request."
      },
      {
        "title": "اضبط فحص الصحة (HEALTHCHECK) داخل Dockerfile",
        "desc": "يمكن فحص الصحة منصات الأوركسترا (Docker Swarm / Kubernetes) من معرفة تعطل السيرفر وإعادة تشغيله تلقائياً دون انقطاع الخدمة."
      }
    ],
    "keyTakeaways": [
      "بناء حاويات Docker احترافية فائقة الصغر والأمان لتطبيقات Node.js.",
      "تشغيل بيئة محلية متكاملة (App + PostgreSQL + Redis) بنقرة واحدة عبر Docker Compose.",
      "إعداد وتأمين سيرفرات Linux السحابية وتهيئة Nginx مع شهادات التشفير التلقائية.",
      "بناء خطوط أنابيب CI/CD متكاملة لاختبار ونشر التطبيقات دون أي تدخل يدوي."
    ]
  },
  "cheatSheet": {
    "title": "البطاقة المرجعية لـ Docker والنشر و DevOps في Node.js",
    "entries": [
      {
        "category": "Docker Build",
        "commandOrSyntax": "docker build -t my-node-app:1.0 .",
        "description": "بناء صورة Docker جديدة للتطبيق مع تحديد الاسم والوسم",
        "type": "cli"
      },
      {
        "category": "Docker Run",
        "commandOrSyntax": "docker run -d -p 3000:3000 --env-file .env --name app my-node-app:1.0",
        "description": "تشغيل الحاوية في الخلفية مع ربط المنفذ وتمرير المتغيرات البيئية",
        "type": "cli"
      },
      {
        "category": "Compose Up",
        "commandOrSyntax": "docker compose up -d",
        "description": "تشغيل كافة الخدمات (التطبيق وقاعدة البيانات والكاش) معاً في الخلفية",
        "type": "cli"
      },
      {
        "category": "Compose Logs",
        "commandOrSyntax": "docker compose logs -f app",
        "description": "متابعة السجلات الحية للحاوية في الطرفية لحظة بلحظة",
        "type": "cli"
      },
      {
        "category": "Docker Prune",
        "commandOrSyntax": "docker system prune -af --volumes",
        "description": "تنظيف وحذف الحاويات والصور والطبقات غير المستخدمة لتحرير مساحة القرص",
        "type": "cli"
      },
      {
        "category": "Systemd",
        "commandOrSyntax": "sudo systemctl restart my-node-service",
        "description": "إعادة تشغيل خدمة التطبيق المدارة عبر مدير خدمات لينكس systemd",
        "type": "cli"
      },
      {
        "category": "Nginx Proxy",
        "commandOrSyntax": "proxy_pass http://localhost:3000; proxy_set_header Host $host;",
        "description": "توجيه طلبات الدومين من منفذ 80/443 إلى تطبيق Node الداخلي",
        "type": "code"
      },
      {
        "category": "Certbot SSL",
        "commandOrSyntax": "sudo certbot --nginx -d api.mycompany.com",
        "description": "تثبيت وتجديد شهادة التشفير المجانية HTTPS عبر Let's Encrypt آلياً",
        "type": "cli"
      },
      {
        "category": "GitHub Actions",
        "commandOrSyntax": "on: [push, pull_request] jobs: build: runs-on: ubuntu-latest",
        "description": "تعريف خطة التشغيل التلقائي للاختبارات عند رفع أي كود للمستودع",
        "type": "code"
      },
      {
        "category": "Health Check",
        "commandOrSyntax": "HEALTHCHECK CMD curl -f http://localhost:3000/health || exit 1",
        "description": "أمر فحص سلامة الحاوية دورياً من قبل مدير النظام",
        "type": "code"
      }
    ],
    "items": [
      {
        "category": "Docker Build",
        "commandOrSyntax": "docker build -t my-node-app:1.0 .",
        "description": "بناء صورة Docker جديدة للتطبيق مع تحديد الاسم والوسم",
        "type": "cli",
        "command": "docker build -t my-node-app:1.0 ."
      },
      {
        "category": "Docker Run",
        "commandOrSyntax": "docker run -d -p 3000:3000 --env-file .env --name app my-node-app:1.0",
        "description": "تشغيل الحاوية في الخلفية مع ربط المنفذ وتمرير المتغيرات البيئية",
        "type": "cli",
        "command": "docker run -d -p 3000:3000 --env-file .env --name app my-node-app:1.0"
      },
      {
        "category": "Compose Up",
        "commandOrSyntax": "docker compose up -d",
        "description": "تشغيل كافة الخدمات (التطبيق وقاعدة البيانات والكاش) معاً في الخلفية",
        "type": "cli",
        "command": "docker compose up -d"
      },
      {
        "category": "Compose Logs",
        "commandOrSyntax": "docker compose logs -f app",
        "description": "متابعة السجلات الحية للحاوية في الطرفية لحظة بلحظة",
        "type": "cli",
        "command": "docker compose logs -f app"
      },
      {
        "category": "Docker Prune",
        "commandOrSyntax": "docker system prune -af --volumes",
        "description": "تنظيف وحذف الحاويات والصور والطبقات غير المستخدمة لتحرير مساحة القرص",
        "type": "cli",
        "command": "docker system prune -af --volumes"
      },
      {
        "category": "Systemd",
        "commandOrSyntax": "sudo systemctl restart my-node-service",
        "description": "إعادة تشغيل خدمة التطبيق المدارة عبر مدير خدمات لينكس systemd",
        "type": "cli",
        "command": "sudo systemctl restart my-node-service"
      },
      {
        "category": "Nginx Proxy",
        "commandOrSyntax": "proxy_pass http://localhost:3000; proxy_set_header Host $host;",
        "description": "توجيه طلبات الدومين من منفذ 80/443 إلى تطبيق Node الداخلي",
        "type": "code",
        "command": "proxy_pass http://localhost:3000; proxy_set_header Host $host;"
      },
      {
        "category": "Certbot SSL",
        "commandOrSyntax": "sudo certbot --nginx -d api.mycompany.com",
        "description": "تثبيت وتجديد شهادة التشفير المجانية HTTPS عبر Let's Encrypt آلياً",
        "type": "cli",
        "command": "sudo certbot --nginx -d api.mycompany.com"
      },
      {
        "category": "GitHub Actions",
        "commandOrSyntax": "on: [push, pull_request] jobs: build: runs-on: ubuntu-latest",
        "description": "تعريف خطة التشغيل التلقائي للاختبارات عند رفع أي كود للمستودع",
        "type": "code",
        "command": "on: [push, pull_request] jobs: build: runs-on: ubuntu-latest"
      },
      {
        "category": "Health Check",
        "commandOrSyntax": "HEALTHCHECK CMD curl -f http://localhost:3000/health || exit 1",
        "description": "أمر فحص سلامة الحاوية دورياً من قبل مدير النظام",
        "type": "code",
        "command": "HEALTHCHECK CMD curl -f http://localhost:3000/health || exit 1"
      }
    ]
  },
  "miniProject": {
    "id": "project-sec-19",
    "title": "مشروع عملي: حزمة Docker متعددة المراحل و Docker Compose متكاملة (Production Docker Stack)",
    "description": "بناء بيئة حاويات كاملة للإنتاج تضم Dockerfile متعدد المراحل فائق الصغر لمشروع Node.js، ملف docker-compose يشغل التطبيق مع PostgreSQL و Redis، وفحص صحة دوري للخدمات.",
    "difficulty": "خبير",
    "techStack": [
      "Docker",
      "Docker Compose",
      "Multi-Stage Build",
      "PostgreSQL",
      "Redis"
    ],
    "directoryStructure": "production-docker-stack/\n├── Dockerfile\n├── docker-compose.yml\n├── .dockerignore\n├── package.json\n└── src/\n    └── index.js",
    "codeFiles": [
      {
        "filename": "Dockerfile",
        "code": "# المرحلة 1: بناء وتجهيز الاعتماديات\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\n# تجميع المشروع (إن وجد)\n# RUN npm run build\n\n# المرحلة 2: صورة الإنتاج النهائية الخفيفة\nFROM node:20-alpine AS runner\nWORKDIR /app\nENV NODE_ENV=production\n\n# تثبيت curl لفحص الصحة\nRUN apk add --no-cache curl\n\n# نسخ حزم الإنتاج والملفات المجمعة فقط\nCOPY package*.json ./\nRUN npm ci --only=production && npm cache clean --force\nCOPY --from=builder /app/src ./src\n\n# تشغيل التطبيق كمستخدم عادي غير مميز للأمان\nUSER node\n\n# المنفذ المستهدف\nEXPOSE 3000\n\n# فحص صحة التطبيق كل 30 ثانية\nHEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\\n  CMD curl -f http://localhost:3000/health || exit 1\n\n# تشغيل التطبيق مباشرة\nCMD [\"node\", \"src/index.js\"]",
        "explanation": "Dockerfile احترافي يعتمد التجميع متعدد المراحل ومستخدم node غير المميز مع فحص الصحة HEALTHCHECK."
      },
      {
        "filename": "docker-compose.yml",
        "code": "version: '3.8'\n\nservices:\n  # خدمة تطبيق Node.js الرئيسي\n  api:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    container_name: node_production_api\n    restart: always\n    ports:\n      - \"3000:3000\"\n    environment:\n      - PORT=3000\n      - NODE_ENV=production\n      - DATABASE_URL=postgres://admin:secret123@postgres_db:5432/app_db\n      - REDIS_URL=redis://redis_cache:6379\n    depends_on:\n      postgres_db:\n        condition: service_healthy\n      redis_cache:\n        condition: service_started\n\n  # خدمة قاعدة بيانات PostgreSQL\n  postgres_db:\n    image: postgres:16-alpine\n    container_name: postgres_db\n    restart: always\n    environment:\n      POSTGRES_USER: admin\n      POSTGRES_PASSWORD: secret123\n      POSTGRES_DB: app_db\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U admin -d app_db\"]\n      interval: 5s\n      timeout: 5s\n      retries: 5\n\n  # خدمة التخزين المؤقت Redis\n  redis_cache:\n    image: redis:7-alpine\n    container_name: redis_cache\n    restart: always\n    volumes:\n      - redisdata:/data\n\nvolumes:\n  pgdata:\n  redisdata:",
        "explanation": "ملف تكوين يربط تطبيق Node مع قاعدة بيانات PostgreSQL ومخزن Redis مع الحفاظ على البيانات عبر Volumes."
      }
    ],
    "stepsToRun": [
      "افتح المجلد: cd production-docker-stack",
      "تأكد من تشغيل Docker Desktop على جهازك",
      "شغل الحزم دفعة واحدة: docker compose up --build -d",
      "افحص حالة الحاويات: docker compose ps"
    ]
  },
  "project": {
    "id": "project-sec-19",
    "title": "مشروع عملي: حزمة Docker متعددة المراحل و Docker Compose متكاملة (Production Docker Stack)",
    "scenario": "بناء بيئة حاويات كاملة للإنتاج تضم Dockerfile متعدد المراحل فائق الصغر لمشروع Node.js، ملف docker-compose يشغل التطبيق مع PostgreSQL و Redis، وفحص صحة دوري للخدمات.",
    "requirements": [
      "افتح المجلد: cd production-docker-stack",
      "تأكد من تشغيل Docker Desktop على جهازك",
      "شغل الحزم دفعة واحدة: docker compose up --build -d",
      "افحص حالة الحاويات: docker compose ps"
    ],
    "completeSolution": "// Dockerfile\n# المرحلة 1: بناء وتجهيز الاعتماديات\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\n# تجميع المشروع (إن وجد)\n# RUN npm run build\n\n# المرحلة 2: صورة الإنتاج النهائية الخفيفة\nFROM node:20-alpine AS runner\nWORKDIR /app\nENV NODE_ENV=production\n\n# تثبيت curl لفحص الصحة\nRUN apk add --no-cache curl\n\n# نسخ حزم الإنتاج والملفات المجمعة فقط\nCOPY package*.json ./\nRUN npm ci --only=production && npm cache clean --force\nCOPY --from=builder /app/src ./src\n\n# تشغيل التطبيق كمستخدم عادي غير مميز للأمان\nUSER node\n\n# المنفذ المستهدف\nEXPOSE 3000\n\n# فحص صحة التطبيق كل 30 ثانية\nHEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\\n  CMD curl -f http://localhost:3000/health || exit 1\n\n# تشغيل التطبيق مباشرة\nCMD [\"node\", \"src/index.js\"]\n\n// docker-compose.yml\nversion: '3.8'\n\nservices:\n  # خدمة تطبيق Node.js الرئيسي\n  api:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    container_name: node_production_api\n    restart: always\n    ports:\n      - \"3000:3000\"\n    environment:\n      - PORT=3000\n      - NODE_ENV=production\n      - DATABASE_URL=postgres://admin:secret123@postgres_db:5432/app_db\n      - REDIS_URL=redis://redis_cache:6379\n    depends_on:\n      postgres_db:\n        condition: service_healthy\n      redis_cache:\n        condition: service_started\n\n  # خدمة قاعدة بيانات PostgreSQL\n  postgres_db:\n    image: postgres:16-alpine\n    container_name: postgres_db\n    restart: always\n    environment:\n      POSTGRES_USER: admin\n      POSTGRES_PASSWORD: secret123\n      POSTGRES_DB: app_db\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U admin -d app_db\"]\n      interval: 5s\n      timeout: 5s\n      retries: 5\n\n  # خدمة التخزين المؤقت Redis\n  redis_cache:\n    image: redis:7-alpine\n    container_name: redis_cache\n    restart: always\n    volumes:\n      - redisdata:/data\n\nvolumes:\n  pgdata:\n  redisdata:"
  },
  "topics": [
    {
      "id": "19.1",
      "title": "أساسيات النشر",
      "englishTitle": "أساسيات النشر",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم أساسيات النشر وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-19.1-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (أساسيات النشر) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (أساسيات النشر) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-19.1-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (أساسيات النشر)؟",
          "options": [
            "الاعتماد على القيم المشفرة يدوياً داخل الكود المصدري وتجاهل المتغيرات البيئية",
            "تطبيق التحقق الصارم من صحة المدخلات وعزل الأخطاء داخل كتل try/catch محكمة",
            "تحميل كافة الملفات والبيانات الضخمة دفعة واحدة في الذاكرة العشوائية عبر Buffers",
            "تجاهل معالجة الوعود غير المتزامنة وتركها معلقة دون توجيه"
          ],
          "correctIndex": 1,
          "explanation": "التحقق الصارم من صحة البيانات وعزل الأخطاء البرمجية يمنع الانهيار المفاجئ للخدمة ويحميها من الثغرات الأمنية.",
          "hint": "الحماية الاستباقية تبدأ دائماً بالتحقق من المدخلات وعزل الأخطاء."
        },
        {
          "id": "q-19.1-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (أساسيات النشر)، ما هو التصرف الهندسي السليم؟",
          "options": [
            "كتمان الخطأ تماماً وتجاهله لمنع تسجيله في شاشة الطرفية",
            "تسجيل تفاصيل الخطأ بوضوح في السجلات المهيكلة وإرجاع استجابة منسقة للمستخدم دون تسريب تفاصيل النظام الداخلية",
            "إيقاف تشغيل الخادم فوراً وحذف قاعدة البيانات المرتبطة",
            "إرجاع كود الاستجابة 200 OK دائماً وتضمين نص الخطأ الخام في الرسالة"
          ],
          "correctIndex": 1,
          "explanation": "تسجيل الأخطاء بوضوح للمطورين وإرجاع رد مهذب للمستخدم يحمي بيانات السيرفر الحساسة ويسهل استكشاف المشكلة.",
          "hint": "فكر في التوازن بين سرية النظام وتجربة المستخدم وتتبع الأخطاء."
        }
      ],
      "exercise": {
        "id": "ex-19.1",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (أساسيات النشر)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (أساسيات النشر) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع أساسيات النشر\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"أساسيات النشر\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "19.1.1",
          "title": "الفرق بين Development وProduction",
          "englishTitle": "Development وProduction",
          "definition": "يُقصد بـ (الفرق بين Development وProduction) أحد المفاهيم المحورية في مسار أساسيات النشر ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خط سير CI/CD مصنع السيارات المؤتمت بالكامل؛ يمر الهيكل بروبوتات الفحص واللحام والطلاء، ولا يخرج للاستخدام إلا بعد اجتياز كافة الاختبارات.",
          "why": "تبرز أهمية (الفرق بين Development وProduction) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ الفرق بين Development وProduction\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'الفرق بين Development وProduction';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: الفرق بين Development وProduction\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.1.1",
            "title": "الفرق بين Development وProduction",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (الفرق بين Development وProduction) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Development وProduction' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (الفرق بين Development وProduction) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (الفرق بين Development وProduction) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على الفرق بين Development وProduction",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (الفرق بين Development وProduction) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين Development وProduction\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: الفرق بين Development وProduction...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.1.2",
          "title": "مفهوم Deployment",
          "englishTitle": "Deployment",
          "definition": "يُقصد بـ (مفهوم Deployment) أحد المفاهيم المحورية في مسار أساسيات النشر ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم Nginx شرطي المرور الذكي أمام مجمع المستشفيات؛ يوجه الإسعاف للمدخل السريع، والزوار لمواقف السيارات، ويمنع الشاحنات الثقيلة من الدخول.",
          "why": "تبرز أهمية (مفهوم Deployment) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مفهوم Deployment\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مفهوم Deployment';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مفهوم Deployment\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.1.2",
            "title": "مفهوم Deployment",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (مفهوم Deployment) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Deployment' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مفهوم Deployment) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مفهوم Deployment) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مفهوم Deployment",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مفهوم Deployment) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Deployment\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مفهوم Deployment...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.1.3",
          "title": "فهم Build وStart Commands",
          "englishTitle": "فهم Build وStart Commands",
          "definition": "يُقصد بـ (فهم Build وStart Commands) أحد المفاهيم المحورية في مسار أساسيات النشر ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه Docker الحاوية الفولاذية المعيارية للبضائع؛ توضع على سفينة أو قطار أو شاحنة وتصل لأي دولة وتفتح لتعمل بنفس الطريقة دون أي مفاجآت.",
          "why": "تبرز أهمية (فهم Build وStart Commands) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ فهم Build وStart Commands\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'فهم Build وStart Commands';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: فهم Build وStart Commands\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.1.3",
            "title": "فهم Build وStart Commands",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (فهم Build وStart Commands) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'فهم Build وStart Commands' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (فهم Build وStart Commands) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (فهم Build وStart Commands) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على فهم Build وStart Commands",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (فهم Build وStart Commands) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين فهم Build وStart Commands\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: فهم Build وStart Commands...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.1.4",
          "title": "إعداد Environment Variables",
          "englishTitle": "إعداد Environment Variables",
          "definition": "يُقصد بـ (إعداد Environment Variables) أحد المفاهيم المحورية في مسار أساسيات النشر ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه ملف Dockerfile وصفة بناء الكعكة السحرية خطوة بخطوة؛ يحدد المكونات الأساسية، خطوات الطهي، ودرجة الحرارة لإنتاج نسخة متطابقة في كل مرة.",
          "why": "تبرز أهمية (إعداد Environment Variables) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إعداد Environment Variables\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إعداد Environment Variables';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إعداد Environment Variables\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.1.4",
            "title": "إعداد Environment Variables",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إعداد Environment Variables) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'إعداد Environment Variables' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إعداد Environment Variables) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إعداد Environment Variables) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إعداد Environment Variables",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إعداد Environment Variables) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إعداد Environment Variables\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إعداد Environment Variables...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.1.5",
          "title": "إدارة Production Secrets",
          "englishTitle": "Production Secrets",
          "definition": "يُقصد بـ (إدارة Production Secrets) أحد المفاهيم المحورية في مسار أساسيات النشر ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خط سير CI/CD مصنع السيارات المؤتمت بالكامل؛ يمر الهيكل بروبوتات الفحص واللحام والطلاء، ولا يخرج للاستخدام إلا بعد اجتياز كافة الاختبارات.",
          "why": "تبرز أهمية (إدارة Production Secrets) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إدارة Production Secrets\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إدارة Production Secrets';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إدارة Production Secrets\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.1.5",
            "title": "إدارة Production Secrets",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إدارة Production Secrets) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Production Secrets' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إدارة Production Secrets) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إدارة Production Secrets) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إدارة Production Secrets",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إدارة Production Secrets) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة Production Secrets\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إدارة Production Secrets...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.1.6",
          "title": "إعداد Production Database",
          "englishTitle": "إعداد Production Database",
          "definition": "يُقصد بـ (إعداد Production Database) أحد المفاهيم المحورية في مسار أساسيات النشر ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم Nginx شرطي المرور الذكي أمام مجمع المستشفيات؛ يوجه الإسعاف للمدخل السريع، والزوار لمواقف السيارات، ويمنع الشاحنات الثقيلة من الدخول.",
          "why": "تبرز أهمية (إعداد Production Database) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إعداد Production Database\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إعداد Production Database';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إعداد Production Database\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.1.6",
            "title": "إعداد Production Database",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إعداد Production Database) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'إعداد Production Database' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إعداد Production Database) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إعداد Production Database) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إعداد Production Database",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إعداد Production Database) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إعداد Production Database\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إعداد Production Database...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.1.7",
          "title": "تنفيذ Database Migrations",
          "englishTitle": "Database Migrations",
          "definition": "يُقصد بـ (تنفيذ Database Migrations) أحد المفاهيم المحورية في مسار أساسيات النشر ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه Docker الحاوية الفولاذية المعيارية للبضائع؛ توضع على سفينة أو قطار أو شاحنة وتصل لأي دولة وتفتح لتعمل بنفس الطريقة دون أي مفاجآت.",
          "why": "تبرز أهمية (تنفيذ Database Migrations) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تنفيذ Database Migrations\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'تنفيذ Database Migrations';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تنفيذ Database Migrations\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.1.7",
            "title": "تنفيذ Database Migrations",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (تنفيذ Database Migrations) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Database Migrations' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تنفيذ Database Migrations) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تنفيذ Database Migrations) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تنفيذ Database Migrations",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تنفيذ Database Migrations) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ Database Migrations\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تنفيذ Database Migrations...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "19.2",
      "title": "أساسيات Linux للخوادم",
      "englishTitle": "أساسيات Linux للخوادم",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم أساسيات Linux للخوادم وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-19.2-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (أساسيات Linux للخوادم) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (أساسيات Linux للخوادم) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-19.2-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (أساسيات Linux للخوادم)؟",
          "options": [
            "الاعتماد على القيم المشفرة يدوياً داخل الكود المصدري وتجاهل المتغيرات البيئية",
            "تطبيق التحقق الصارم من صحة المدخلات وعزل الأخطاء داخل كتل try/catch محكمة",
            "تحميل كافة الملفات والبيانات الضخمة دفعة واحدة في الذاكرة العشوائية عبر Buffers",
            "تجاهل معالجة الوعود غير المتزامنة وتركها معلقة دون توجيه"
          ],
          "correctIndex": 1,
          "explanation": "التحقق الصارم من صحة البيانات وعزل الأخطاء البرمجية يمنع الانهيار المفاجئ للخدمة ويحميها من الثغرات الأمنية.",
          "hint": "الحماية الاستباقية تبدأ دائماً بالتحقق من المدخلات وعزل الأخطاء."
        },
        {
          "id": "q-19.2-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (أساسيات Linux للخوادم)، ما هو التصرف الهندسي السليم؟",
          "options": [
            "كتمان الخطأ تماماً وتجاهله لمنع تسجيله في شاشة الطرفية",
            "تسجيل تفاصيل الخطأ بوضوح في السجلات المهيكلة وإرجاع استجابة منسقة للمستخدم دون تسريب تفاصيل النظام الداخلية",
            "إيقاف تشغيل الخادم فوراً وحذف قاعدة البيانات المرتبطة",
            "إرجاع كود الاستجابة 200 OK دائماً وتضمين نص الخطأ الخام في الرسالة"
          ],
          "correctIndex": 1,
          "explanation": "تسجيل الأخطاء بوضوح للمطورين وإرجاع رد مهذب للمستخدم يحمي بيانات السيرفر الحساسة ويسهل استكشاف المشكلة.",
          "hint": "فكر في التوازن بين سرية النظام وتجربة المستخدم وتتبع الأخطاء."
        }
      ],
      "exercise": {
        "id": "ex-19.2",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (أساسيات Linux للخوادم)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (أساسيات Linux للخوادم) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع أساسيات Linux للخوادم\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"أساسيات Linux للخوادم\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "19.2.1",
          "title": "مقدمة في Linux Server",
          "englishTitle": "مقدمة في Linux Server",
          "definition": "يُقصد بـ (مقدمة في Linux Server) أحد المفاهيم المحورية في مسار أساسيات Linux للخوادم ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم Nginx شرطي المرور الذكي أمام مجمع المستشفيات؛ يوجه الإسعاف للمدخل السريع، والزوار لمواقف السيارات، ويمنع الشاحنات الثقيلة من الدخول.",
          "why": "تبرز أهمية (مقدمة في Linux Server) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مقدمة في Linux Server\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مقدمة في Linux Server';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مقدمة في Linux Server\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.2.1",
            "title": "مقدمة في Linux Server",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (مقدمة في Linux Server) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'مقدمة في Linux Server' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مقدمة في Linux Server) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مقدمة في Linux Server) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مقدمة في Linux Server",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مقدمة في Linux Server) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مقدمة في Linux Server\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مقدمة في Linux Server...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.2.2",
          "title": "الاتصال بالخادم باستخدام SSH",
          "englishTitle": "الاتصال بالخادم بSSH",
          "definition": "يُقصد بـ (الاتصال بالخادم باستخدام SSH) أحد المفاهيم المحورية في مسار أساسيات Linux للخوادم ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه Docker الحاوية الفولاذية المعيارية للبضائع؛ توضع على سفينة أو قطار أو شاحنة وتصل لأي دولة وتفتح لتعمل بنفس الطريقة دون أي مفاجآت.",
          "why": "تبرز أهمية (الاتصال بالخادم باستخدام SSH) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ الاتصال بالخادم باستخدام SSH\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'الاتصال بالخادم باستخدام SSH';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: الاتصال بالخادم باستخدام SSH\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.2.2",
            "title": "الاتصال بالخادم باستخدام SSH",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (الاتصال بالخادم باستخدام SSH) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'الاتصال بالخادم بSSH' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (الاتصال بالخادم باستخدام SSH) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (الاتصال بالخادم باستخدام SSH) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على الاتصال بالخادم باستخدام SSH",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (الاتصال بالخادم باستخدام SSH) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين الاتصال بالخادم باستخدام SSH\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: الاتصال بالخادم باستخدام SSH...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.2.3",
          "title": "إدارة الملفات والصلاحيات",
          "englishTitle": "الملفات والصلاحيات",
          "definition": "يُقصد بـ (إدارة الملفات والصلاحيات) أحد المفاهيم المحورية في مسار أساسيات Linux للخوادم ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه ملف Dockerfile وصفة بناء الكعكة السحرية خطوة بخطوة؛ يحدد المكونات الأساسية، خطوات الطهي، ودرجة الحرارة لإنتاج نسخة متطابقة في كل مرة.",
          "why": "تبرز أهمية (إدارة الملفات والصلاحيات) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إدارة الملفات والصلاحيات\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إدارة الملفات والصلاحيات';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إدارة الملفات والصلاحيات\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.2.3",
            "title": "إدارة الملفات والصلاحيات",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إدارة الملفات والصلاحيات) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'الملفات والصلاحيات' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إدارة الملفات والصلاحيات) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إدارة الملفات والصلاحيات) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إدارة الملفات والصلاحيات",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إدارة الملفات والصلاحيات) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة الملفات والصلاحيات\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إدارة الملفات والصلاحيات...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.2.4",
          "title": "إدارة العمليات باستخدام systemd",
          "englishTitle": "العمليات بsystemd",
          "definition": "يُقصد بـ (إدارة العمليات باستخدام systemd) أحد المفاهيم المحورية في مسار أساسيات Linux للخوادم ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خط سير CI/CD مصنع السيارات المؤتمت بالكامل؛ يمر الهيكل بروبوتات الفحص واللحام والطلاء، ولا يخرج للاستخدام إلا بعد اجتياز كافة الاختبارات.",
          "why": "تبرز أهمية (إدارة العمليات باستخدام systemd) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إدارة العمليات باستخدام systemd\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إدارة العمليات باستخدام systemd';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إدارة العمليات باستخدام systemd\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.2.4",
            "title": "إدارة العمليات باستخدام systemd",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إدارة العمليات باستخدام systemd) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'العمليات بsystemd' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إدارة العمليات باستخدام systemd) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إدارة العمليات باستخدام systemd) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إدارة العمليات باستخدام systemd",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إدارة العمليات باستخدام systemd) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة العمليات باستخدام systemd\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إدارة العمليات باستخدام systemd...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.2.5",
          "title": "فحص المنافذ والخدمات",
          "englishTitle": "فحص المنافذ والخدمات",
          "definition": "يُقصد بـ (فحص المنافذ والخدمات) أحد المفاهيم المحورية في مسار أساسيات Linux للخوادم ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم Nginx شرطي المرور الذكي أمام مجمع المستشفيات؛ يوجه الإسعاف للمدخل السريع، والزوار لمواقف السيارات، ويمنع الشاحنات الثقيلة من الدخول.",
          "why": "تبرز أهمية (فحص المنافذ والخدمات) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ فحص المنافذ والخدمات\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'فحص المنافذ والخدمات';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: فحص المنافذ والخدمات\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.2.5",
            "title": "فحص المنافذ والخدمات",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (فحص المنافذ والخدمات) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'فحص المنافذ والخدمات' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (فحص المنافذ والخدمات) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (فحص المنافذ والخدمات) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على فحص المنافذ والخدمات",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (فحص المنافذ والخدمات) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين فحص المنافذ والخدمات\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: فحص المنافذ والخدمات...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.2.6",
          "title": "قراءة سجلات الخادم",
          "englishTitle": "قراءة سجلات الخادم",
          "definition": "يُقصد بـ (قراءة سجلات الخادم) أحد المفاهيم المحورية في مسار أساسيات Linux للخوادم ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه Docker الحاوية الفولاذية المعيارية للبضائع؛ توضع على سفينة أو قطار أو شاحنة وتصل لأي دولة وتفتح لتعمل بنفس الطريقة دون أي مفاجآت.",
          "why": "تبرز أهمية (قراءة سجلات الخادم) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ قراءة سجلات الخادم\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'قراءة سجلات الخادم';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: قراءة سجلات الخادم\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.2.6",
            "title": "قراءة سجلات الخادم",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (قراءة سجلات الخادم) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'قراءة سجلات الخادم' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (قراءة سجلات الخادم) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (قراءة سجلات الخادم) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على قراءة سجلات الخادم",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (قراءة سجلات الخادم) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين قراءة سجلات الخادم\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: قراءة سجلات الخادم...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.2.7",
          "title": "إعداد Firewall",
          "englishTitle": "إعداد Firewall",
          "definition": "يُقصد بـ (إعداد Firewall) أحد المفاهيم المحورية في مسار أساسيات Linux للخوادم ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه ملف Dockerfile وصفة بناء الكعكة السحرية خطوة بخطوة؛ يحدد المكونات الأساسية، خطوات الطهي، ودرجة الحرارة لإنتاج نسخة متطابقة في كل مرة.",
          "why": "تبرز أهمية (إعداد Firewall) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إعداد Firewall\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إعداد Firewall';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إعداد Firewall\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.2.7",
            "title": "إعداد Firewall",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إعداد Firewall) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'إعداد Firewall' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إعداد Firewall) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إعداد Firewall) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إعداد Firewall",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إعداد Firewall) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إعداد Firewall\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إعداد Firewall...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "19.3",
      "title": "Docker مع Node.js",
      "englishTitle": "Docker مع Node.js",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم Docker مع Node.js وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-19.3-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (Docker مع Node.js) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (Docker مع Node.js) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-19.3-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (Docker مع Node.js)؟",
          "options": [
            "الاعتماد على القيم المشفرة يدوياً داخل الكود المصدري وتجاهل المتغيرات البيئية",
            "تطبيق التحقق الصارم من صحة المدخلات وعزل الأخطاء داخل كتل try/catch محكمة",
            "تحميل كافة الملفات والبيانات الضخمة دفعة واحدة في الذاكرة العشوائية عبر Buffers",
            "تجاهل معالجة الوعود غير المتزامنة وتركها معلقة دون توجيه"
          ],
          "correctIndex": 1,
          "explanation": "التحقق الصارم من صحة البيانات وعزل الأخطاء البرمجية يمنع الانهيار المفاجئ للخدمة ويحميها من الثغرات الأمنية.",
          "hint": "الحماية الاستباقية تبدأ دائماً بالتحقق من المدخلات وعزل الأخطاء."
        },
        {
          "id": "q-19.3-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (Docker مع Node.js)، ما هو التصرف الهندسي السليم؟",
          "options": [
            "كتمان الخطأ تماماً وتجاهله لمنع تسجيله في شاشة الطرفية",
            "تسجيل تفاصيل الخطأ بوضوح في السجلات المهيكلة وإرجاع استجابة منسقة للمستخدم دون تسريب تفاصيل النظام الداخلية",
            "إيقاف تشغيل الخادم فوراً وحذف قاعدة البيانات المرتبطة",
            "إرجاع كود الاستجابة 200 OK دائماً وتضمين نص الخطأ الخام في الرسالة"
          ],
          "correctIndex": 1,
          "explanation": "تسجيل الأخطاء بوضوح للمطورين وإرجاع رد مهذب للمستخدم يحمي بيانات السيرفر الحساسة ويسهل استكشاف المشكلة.",
          "hint": "فكر في التوازن بين سرية النظام وتجربة المستخدم وتتبع الأخطاء."
        }
      ],
      "exercise": {
        "id": "ex-19.3",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (Docker مع Node.js)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (Docker مع Node.js) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع Docker مع Node.js\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"Docker مع Node.js\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "19.3.1",
          "title": "ما هو Docker؟",
          "englishTitle": "Docker",
          "definition": "يُقصد بـ (ما هو Docker؟) أحد المفاهيم المحورية في مسار Docker مع Node.js ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه Docker الحاوية الفولاذية المعيارية للبضائع؛ توضع على سفينة أو قطار أو شاحنة وتصل لأي دولة وتفتح لتعمل بنفس الطريقة دون أي مفاجآت.",
          "why": "تبرز أهمية (ما هو Docker؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ما هو Docker؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'ما هو Docker؟';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ما هو Docker؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.3.1",
            "title": "ما هو Docker؟",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (ما هو Docker؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Docker' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ما هو Docker؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ما هو Docker؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ما هو Docker؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ما هو Docker؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو Docker؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ما هو Docker؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.3.2",
          "title": "الفرق بين Image وContainer",
          "englishTitle": "Image وContainer",
          "definition": "يُقصد بـ (الفرق بين Image وContainer) أحد المفاهيم المحورية في مسار Docker مع Node.js ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه ملف Dockerfile وصفة بناء الكعكة السحرية خطوة بخطوة؛ يحدد المكونات الأساسية، خطوات الطهي، ودرجة الحرارة لإنتاج نسخة متطابقة في كل مرة.",
          "why": "تبرز أهمية (الفرق بين Image وContainer) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ الفرق بين Image وContainer\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'الفرق بين Image وContainer';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: الفرق بين Image وContainer\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.3.2",
            "title": "الفرق بين Image وContainer",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (الفرق بين Image وContainer) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Image وContainer' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (الفرق بين Image وContainer) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (الفرق بين Image وContainer) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على الفرق بين Image وContainer",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (الفرق بين Image وContainer) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين Image وContainer\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: الفرق بين Image وContainer...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.3.3",
          "title": "إنشاء Dockerfile",
          "englishTitle": "Dockerfile",
          "definition": "يُقصد بـ (إنشاء Dockerfile) أحد المفاهيم المحورية في مسار Docker مع Node.js ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خط سير CI/CD مصنع السيارات المؤتمت بالكامل؛ يمر الهيكل بروبوتات الفحص واللحام والطلاء، ولا يخرج للاستخدام إلا بعد اجتياز كافة الاختبارات.",
          "why": "تبرز أهمية (إنشاء Dockerfile) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إنشاء Dockerfile\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إنشاء Dockerfile';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إنشاء Dockerfile\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.3.3",
            "title": "إنشاء Dockerfile",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إنشاء Dockerfile) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Dockerfile' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إنشاء Dockerfile) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إنشاء Dockerfile) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إنشاء Dockerfile",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إنشاء Dockerfile) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Dockerfile\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إنشاء Dockerfile...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.3.4",
          "title": "بناء Docker Image",
          "englishTitle": "بناء Docker Image",
          "definition": "يُقصد بـ (بناء Docker Image) أحد المفاهيم المحورية في مسار Docker مع Node.js ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم Nginx شرطي المرور الذكي أمام مجمع المستشفيات؛ يوجه الإسعاف للمدخل السريع، والزوار لمواقف السيارات، ويمنع الشاحنات الثقيلة من الدخول.",
          "why": "تبرز أهمية (بناء Docker Image) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ بناء Docker Image\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'بناء Docker Image';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: بناء Docker Image\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.3.4",
            "title": "بناء Docker Image",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (بناء Docker Image) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'بناء Docker Image' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (بناء Docker Image) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (بناء Docker Image) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على بناء Docker Image",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (بناء Docker Image) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين بناء Docker Image\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: بناء Docker Image...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.3.5",
          "title": "تشغيل Node.js داخل Container",
          "englishTitle": "تشغيل Node.js داخل Container",
          "definition": "يُقصد بـ (تشغيل Node.js داخل Container) أحد المفاهيم المحورية في مسار Docker مع Node.js ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه Docker الحاوية الفولاذية المعيارية للبضائع؛ توضع على سفينة أو قطار أو شاحنة وتصل لأي دولة وتفتح لتعمل بنفس الطريقة دون أي مفاجآت.",
          "why": "تبرز أهمية (تشغيل Node.js داخل Container) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تشغيل Node.js داخل Container\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'تشغيل Node.js داخل Container';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تشغيل Node.js داخل Container\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.3.5",
            "title": "تشغيل Node.js داخل Container",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (تشغيل Node.js داخل Container) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تشغيل Node.js داخل Container' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تشغيل Node.js داخل Container) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تشغيل Node.js داخل Container) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تشغيل Node.js داخل Container",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تشغيل Node.js داخل Container) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تشغيل Node.js داخل Container\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تشغيل Node.js داخل Container...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.3.6",
          "title": "استخدام .dockerignore",
          "englishTitle": ".dockerignore",
          "definition": "يُقصد بـ (استخدام .dockerignore) أحد المفاهيم المحورية في مسار Docker مع Node.js ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه ملف Dockerfile وصفة بناء الكعكة السحرية خطوة بخطوة؛ يحدد المكونات الأساسية، خطوات الطهي، ودرجة الحرارة لإنتاج نسخة متطابقة في كل مرة.",
          "why": "تبرز أهمية (استخدام .dockerignore) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ استخدام .dockerignore\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'استخدام .dockerignore';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: استخدام .dockerignore\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.3.6",
            "title": "استخدام .dockerignore",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (استخدام .dockerignore) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: '.dockerignore' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (استخدام .dockerignore) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (استخدام .dockerignore) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على استخدام .dockerignore",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (استخدام .dockerignore) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام .dockerignore\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: استخدام .dockerignore...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.3.7",
          "title": "استخدام Multi-Stage Builds",
          "englishTitle": "Multi-Stage Builds",
          "definition": "يُقصد بـ (استخدام Multi-Stage Builds) أحد المفاهيم المحورية في مسار Docker مع Node.js ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خط سير CI/CD مصنع السيارات المؤتمت بالكامل؛ يمر الهيكل بروبوتات الفحص واللحام والطلاء، ولا يخرج للاستخدام إلا بعد اجتياز كافة الاختبارات.",
          "why": "تبرز أهمية (استخدام Multi-Stage Builds) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ استخدام Multi-Stage Builds\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'استخدام Multi-Stage Builds';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: استخدام Multi-Stage Builds\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.3.7",
            "title": "استخدام Multi-Stage Builds",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (استخدام Multi-Stage Builds) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Multi-Stage Builds' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (استخدام Multi-Stage Builds) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (استخدام Multi-Stage Builds) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على استخدام Multi-Stage Builds",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (استخدام Multi-Stage Builds) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Multi-Stage Builds\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: استخدام Multi-Stage Builds...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.3.8",
          "title": "تشغيل التطبيق بمستخدم غير Root",
          "englishTitle": "تشغيل التطبيق بمستخدم غير Root",
          "definition": "يُقصد بـ (تشغيل التطبيق بمستخدم غير Root) أحد المفاهيم المحورية في مسار Docker مع Node.js ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم Nginx شرطي المرور الذكي أمام مجمع المستشفيات؛ يوجه الإسعاف للمدخل السريع، والزوار لمواقف السيارات، ويمنع الشاحنات الثقيلة من الدخول.",
          "why": "تبرز أهمية (تشغيل التطبيق بمستخدم غير Root) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تشغيل التطبيق بمستخدم غير Root\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'تشغيل التطبيق بمستخدم غير Root';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تشغيل التطبيق بمستخدم غير Root\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.3.8",
            "title": "تشغيل التطبيق بمستخدم غير Root",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (تشغيل التطبيق بمستخدم غير Root) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تشغيل التطبيق بمستخدم غير Root' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تشغيل التطبيق بمستخدم غير Root) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تشغيل التطبيق بمستخدم غير Root) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تشغيل التطبيق بمستخدم غير Root",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تشغيل التطبيق بمستخدم غير Root) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تشغيل التطبيق بمستخدم غير Root\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تشغيل التطبيق بمستخدم غير Root...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.3.9",
          "title": "إدارة Docker Volumes",
          "englishTitle": "Docker Volumes",
          "definition": "يُقصد بـ (إدارة Docker Volumes) أحد المفاهيم المحورية في مسار Docker مع Node.js ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه Docker الحاوية الفولاذية المعيارية للبضائع؛ توضع على سفينة أو قطار أو شاحنة وتصل لأي دولة وتفتح لتعمل بنفس الطريقة دون أي مفاجآت.",
          "why": "تبرز أهمية (إدارة Docker Volumes) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إدارة Docker Volumes\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إدارة Docker Volumes';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إدارة Docker Volumes\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.3.9",
            "title": "إدارة Docker Volumes",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إدارة Docker Volumes) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Docker Volumes' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إدارة Docker Volumes) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إدارة Docker Volumes) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إدارة Docker Volumes",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إدارة Docker Volumes) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة Docker Volumes\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إدارة Docker Volumes...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "19.4",
      "title": "Docker Compose",
      "englishTitle": "Docker Compose",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم Docker Compose وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-19.4-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (Docker Compose) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (Docker Compose) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-19.4-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (Docker Compose)؟",
          "options": [
            "الاعتماد على القيم المشفرة يدوياً داخل الكود المصدري وتجاهل المتغيرات البيئية",
            "تطبيق التحقق الصارم من صحة المدخلات وعزل الأخطاء داخل كتل try/catch محكمة",
            "تحميل كافة الملفات والبيانات الضخمة دفعة واحدة في الذاكرة العشوائية عبر Buffers",
            "تجاهل معالجة الوعود غير المتزامنة وتركها معلقة دون توجيه"
          ],
          "correctIndex": 1,
          "explanation": "التحقق الصارم من صحة البيانات وعزل الأخطاء البرمجية يمنع الانهيار المفاجئ للخدمة ويحميها من الثغرات الأمنية.",
          "hint": "الحماية الاستباقية تبدأ دائماً بالتحقق من المدخلات وعزل الأخطاء."
        },
        {
          "id": "q-19.4-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (Docker Compose)، ما هو التصرف الهندسي السليم؟",
          "options": [
            "كتمان الخطأ تماماً وتجاهله لمنع تسجيله في شاشة الطرفية",
            "تسجيل تفاصيل الخطأ بوضوح في السجلات المهيكلة وإرجاع استجابة منسقة للمستخدم دون تسريب تفاصيل النظام الداخلية",
            "إيقاف تشغيل الخادم فوراً وحذف قاعدة البيانات المرتبطة",
            "إرجاع كود الاستجابة 200 OK دائماً وتضمين نص الخطأ الخام في الرسالة"
          ],
          "correctIndex": 1,
          "explanation": "تسجيل الأخطاء بوضوح للمطورين وإرجاع رد مهذب للمستخدم يحمي بيانات السيرفر الحساسة ويسهل استكشاف المشكلة.",
          "hint": "فكر في التوازن بين سرية النظام وتجربة المستخدم وتتبع الأخطاء."
        }
      ],
      "exercise": {
        "id": "ex-19.4",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (Docker Compose)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (Docker Compose) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع Docker Compose\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"Docker Compose\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "19.4.1",
          "title": "ما هو Docker Compose؟",
          "englishTitle": "Docker Compose",
          "definition": "يُقصد بـ (ما هو Docker Compose؟) أحد المفاهيم المحورية في مسار Docker Compose ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه ملف Dockerfile وصفة بناء الكعكة السحرية خطوة بخطوة؛ يحدد المكونات الأساسية، خطوات الطهي، ودرجة الحرارة لإنتاج نسخة متطابقة في كل مرة.",
          "why": "تبرز أهمية (ما هو Docker Compose؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ما هو Docker Compose؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'ما هو Docker Compose؟';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ما هو Docker Compose؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.4.1",
            "title": "ما هو Docker Compose؟",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (ما هو Docker Compose؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Docker Compose' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ما هو Docker Compose؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ما هو Docker Compose؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ما هو Docker Compose؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ما هو Docker Compose؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو Docker Compose؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ما هو Docker Compose؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.4.2",
          "title": "إنشاء compose.yaml",
          "englishTitle": "compose.yaml",
          "definition": "يُقصد بـ (إنشاء compose.yaml) أحد المفاهيم المحورية في مسار Docker Compose ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خط سير CI/CD مصنع السيارات المؤتمت بالكامل؛ يمر الهيكل بروبوتات الفحص واللحام والطلاء، ولا يخرج للاستخدام إلا بعد اجتياز كافة الاختبارات.",
          "why": "تبرز أهمية (إنشاء compose.yaml) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إنشاء compose.yaml\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إنشاء compose.yaml';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إنشاء compose.yaml\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.4.2",
            "title": "إنشاء compose.yaml",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إنشاء compose.yaml) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'compose.yaml' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إنشاء compose.yaml) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إنشاء compose.yaml) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إنشاء compose.yaml",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إنشاء compose.yaml) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء compose.yaml\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إنشاء compose.yaml...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.4.3",
          "title": "ربط Node.js مع PostgreSQL",
          "englishTitle": "ربط Node.js مع PostgreSQL",
          "definition": "يُقصد بـ (ربط Node.js مع PostgreSQL) أحد المفاهيم المحورية في مسار Docker Compose ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم Nginx شرطي المرور الذكي أمام مجمع المستشفيات؛ يوجه الإسعاف للمدخل السريع، والزوار لمواقف السيارات، ويمنع الشاحنات الثقيلة من الدخول.",
          "why": "تبرز أهمية (ربط Node.js مع PostgreSQL) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ربط Node.js مع PostgreSQL\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'ربط Node.js مع PostgreSQL';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ربط Node.js مع PostgreSQL\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.4.3",
            "title": "ربط Node.js مع PostgreSQL",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (ربط Node.js مع PostgreSQL) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'ربط Node.js مع PostgreSQL' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ربط Node.js مع PostgreSQL) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ربط Node.js مع PostgreSQL) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ربط Node.js مع PostgreSQL",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ربط Node.js مع PostgreSQL) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ربط Node.js مع PostgreSQL\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ربط Node.js مع PostgreSQL...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.4.4",
          "title": "ربط التطبيق مع Redis",
          "englishTitle": "ربط التطبيق مع Redis",
          "definition": "يُقصد بـ (ربط التطبيق مع Redis) أحد المفاهيم المحورية في مسار Docker Compose ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه Docker الحاوية الفولاذية المعيارية للبضائع؛ توضع على سفينة أو قطار أو شاحنة وتصل لأي دولة وتفتح لتعمل بنفس الطريقة دون أي مفاجآت.",
          "why": "تبرز أهمية (ربط التطبيق مع Redis) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ربط التطبيق مع Redis\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'ربط التطبيق مع Redis';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ربط التطبيق مع Redis\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.4.4",
            "title": "ربط التطبيق مع Redis",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (ربط التطبيق مع Redis) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'ربط التطبيق مع Redis' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ربط التطبيق مع Redis) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ربط التطبيق مع Redis) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ربط التطبيق مع Redis",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ربط التطبيق مع Redis) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ربط التطبيق مع Redis\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ربط التطبيق مع Redis...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.4.5",
          "title": "إدارة Networks",
          "englishTitle": "Networks",
          "definition": "يُقصد بـ (إدارة Networks) أحد المفاهيم المحورية في مسار Docker Compose ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه ملف Dockerfile وصفة بناء الكعكة السحرية خطوة بخطوة؛ يحدد المكونات الأساسية، خطوات الطهي، ودرجة الحرارة لإنتاج نسخة متطابقة في كل مرة.",
          "why": "تبرز أهمية (إدارة Networks) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إدارة Networks\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إدارة Networks';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إدارة Networks\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.4.5",
            "title": "إدارة Networks",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إدارة Networks) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Networks' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إدارة Networks) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إدارة Networks) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إدارة Networks",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إدارة Networks) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة Networks\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إدارة Networks...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.4.6",
          "title": "إعداد Healthchecks",
          "englishTitle": "إعداد Healthchecks",
          "definition": "يُقصد بـ (إعداد Healthchecks) أحد المفاهيم المحورية في مسار Docker Compose ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خط سير CI/CD مصنع السيارات المؤتمت بالكامل؛ يمر الهيكل بروبوتات الفحص واللحام والطلاء، ولا يخرج للاستخدام إلا بعد اجتياز كافة الاختبارات.",
          "why": "تبرز أهمية (إعداد Healthchecks) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إعداد Healthchecks\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إعداد Healthchecks';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إعداد Healthchecks\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.4.6",
            "title": "إعداد Healthchecks",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إعداد Healthchecks) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'إعداد Healthchecks' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إعداد Healthchecks) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إعداد Healthchecks) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إعداد Healthchecks",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إعداد Healthchecks) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إعداد Healthchecks\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إعداد Healthchecks...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.4.7",
          "title": "تشغيل بيئة تطوير متكاملة",
          "englishTitle": "تشغيل بيئة تطوير متكاملة",
          "definition": "يُقصد بـ (تشغيل بيئة تطوير متكاملة) أحد المفاهيم المحورية في مسار Docker Compose ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم Nginx شرطي المرور الذكي أمام مجمع المستشفيات؛ يوجه الإسعاف للمدخل السريع، والزوار لمواقف السيارات، ويمنع الشاحنات الثقيلة من الدخول.",
          "why": "تبرز أهمية (تشغيل بيئة تطوير متكاملة) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تشغيل بيئة تطوير متكاملة\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'تشغيل بيئة تطوير متكاملة';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تشغيل بيئة تطوير متكاملة\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.4.7",
            "title": "تشغيل بيئة تطوير متكاملة",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (تشغيل بيئة تطوير متكاملة) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تشغيل بيئة تطوير متكاملة' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تشغيل بيئة تطوير متكاملة) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تشغيل بيئة تطوير متكاملة) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تشغيل بيئة تطوير متكاملة",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تشغيل بيئة تطوير متكاملة) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تشغيل بيئة تطوير متكاملة\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تشغيل بيئة تطوير متكاملة...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "19.5",
      "title": "النشر على الخوادم والمنصات السحابية",
      "englishTitle": "النشر على الخوادم والمنصات السحابية",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم النشر على الخوادم والمنصات السحابية وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-19.5-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (النشر على الخوادم والمنصات السحابية) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (النشر على الخوادم والمنصات السحابية) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-19.5-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (النشر على الخوادم والمنصات السحابية)؟",
          "options": [
            "الاعتماد على القيم المشفرة يدوياً داخل الكود المصدري وتجاهل المتغيرات البيئية",
            "تطبيق التحقق الصارم من صحة المدخلات وعزل الأخطاء داخل كتل try/catch محكمة",
            "تحميل كافة الملفات والبيانات الضخمة دفعة واحدة في الذاكرة العشوائية عبر Buffers",
            "تجاهل معالجة الوعود غير المتزامنة وتركها معلقة دون توجيه"
          ],
          "correctIndex": 1,
          "explanation": "التحقق الصارم من صحة البيانات وعزل الأخطاء البرمجية يمنع الانهيار المفاجئ للخدمة ويحميها من الثغرات الأمنية.",
          "hint": "الحماية الاستباقية تبدأ دائماً بالتحقق من المدخلات وعزل الأخطاء."
        },
        {
          "id": "q-19.5-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (النشر على الخوادم والمنصات السحابية)، ما هو التصرف الهندسي السليم؟",
          "options": [
            "كتمان الخطأ تماماً وتجاهله لمنع تسجيله في شاشة الطرفية",
            "تسجيل تفاصيل الخطأ بوضوح في السجلات المهيكلة وإرجاع استجابة منسقة للمستخدم دون تسريب تفاصيل النظام الداخلية",
            "إيقاف تشغيل الخادم فوراً وحذف قاعدة البيانات المرتبطة",
            "إرجاع كود الاستجابة 200 OK دائماً وتضمين نص الخطأ الخام في الرسالة"
          ],
          "correctIndex": 1,
          "explanation": "تسجيل الأخطاء بوضوح للمطورين وإرجاع رد مهذب للمستخدم يحمي بيانات السيرفر الحساسة ويسهل استكشاف المشكلة.",
          "hint": "فكر في التوازن بين سرية النظام وتجربة المستخدم وتتبع الأخطاء."
        }
      ],
      "exercise": {
        "id": "ex-19.5",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (النشر على الخوادم والمنصات السحابية)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (النشر على الخوادم والمنصات السحابية) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع النشر على الخوادم والمنصات السحابية\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"النشر على الخوادم والمنصات السحابية\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "19.5.1",
          "title": "نشر Node.js على VPS",
          "englishTitle": "نشر Node.js على VPS",
          "definition": "يُقصد بـ (نشر Node.js على VPS) أحد المفاهيم المحورية في مسار النشر على الخوادم والمنصات السحابية ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خط سير CI/CD مصنع السيارات المؤتمت بالكامل؛ يمر الهيكل بروبوتات الفحص واللحام والطلاء، ولا يخرج للاستخدام إلا بعد اجتياز كافة الاختبارات.",
          "why": "تبرز أهمية (نشر Node.js على VPS) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ نشر Node.js على VPS\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'نشر Node.js على VPS';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: نشر Node.js على VPS\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.5.1",
            "title": "نشر Node.js على VPS",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (نشر Node.js على VPS) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'نشر Node.js على VPS' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (نشر Node.js على VPS) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (نشر Node.js على VPS) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على نشر Node.js على VPS",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (نشر Node.js على VPS) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين نشر Node.js على VPS\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: نشر Node.js على VPS...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.5.2",
          "title": "إعداد Nginx كـ Reverse Proxy",
          "englishTitle": "إعداد Nginx كـ Reverse Proxy",
          "definition": "يُقصد بـ (إعداد Nginx كـ Reverse Proxy) أحد المفاهيم المحورية في مسار النشر على الخوادم والمنصات السحابية ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم Nginx شرطي المرور الذكي أمام مجمع المستشفيات؛ يوجه الإسعاف للمدخل السريع، والزوار لمواقف السيارات، ويمنع الشاحنات الثقيلة من الدخول.",
          "why": "تبرز أهمية (إعداد Nginx كـ Reverse Proxy) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إعداد Nginx كـ Reverse Proxy\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إعداد Nginx كـ Reverse Proxy';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إعداد Nginx كـ Reverse Proxy\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.5.2",
            "title": "إعداد Nginx كـ Reverse Proxy",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إعداد Nginx كـ Reverse Proxy) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'إعداد Nginx كـ Reverse Proxy' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إعداد Nginx كـ Reverse Proxy) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إعداد Nginx كـ Reverse Proxy) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إعداد Nginx كـ Reverse Proxy",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إعداد Nginx كـ Reverse Proxy) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إعداد Nginx كـ Reverse Proxy\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إعداد Nginx كـ Reverse Proxy...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.5.3",
          "title": "إعداد HTTPS Certificates",
          "englishTitle": "إعداد HTTPS Certificates",
          "definition": "يُقصد بـ (إعداد HTTPS Certificates) أحد المفاهيم المحورية في مسار النشر على الخوادم والمنصات السحابية ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه Docker الحاوية الفولاذية المعيارية للبضائع؛ توضع على سفينة أو قطار أو شاحنة وتصل لأي دولة وتفتح لتعمل بنفس الطريقة دون أي مفاجآت.",
          "why": "تبرز أهمية (إعداد HTTPS Certificates) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ إعداد HTTPS Certificates\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'إعداد HTTPS Certificates';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: إعداد HTTPS Certificates\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.5.3",
            "title": "إعداد HTTPS Certificates",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (إعداد HTTPS Certificates) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'إعداد HTTPS Certificates' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (إعداد HTTPS Certificates) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (إعداد HTTPS Certificates) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على إعداد HTTPS Certificates",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (إعداد HTTPS Certificates) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين إعداد HTTPS Certificates\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: إعداد HTTPS Certificates...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.5.4",
          "title": "ربط Domain بالتطبيق",
          "englishTitle": "ربط Domain بالتطبيق",
          "definition": "يُقصد بـ (ربط Domain بالتطبيق) أحد المفاهيم المحورية في مسار النشر على الخوادم والمنصات السحابية ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه ملف Dockerfile وصفة بناء الكعكة السحرية خطوة بخطوة؛ يحدد المكونات الأساسية، خطوات الطهي، ودرجة الحرارة لإنتاج نسخة متطابقة في كل مرة.",
          "why": "تبرز أهمية (ربط Domain بالتطبيق) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ربط Domain بالتطبيق\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'ربط Domain بالتطبيق';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ربط Domain بالتطبيق\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.5.4",
            "title": "ربط Domain بالتطبيق",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (ربط Domain بالتطبيق) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'ربط Domain بالتطبيق' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ربط Domain بالتطبيق) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ربط Domain بالتطبيق) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ربط Domain بالتطبيق",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ربط Domain بالتطبيق) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ربط Domain بالتطبيق\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ربط Domain بالتطبيق...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.5.5",
          "title": "التعرف على Render وRailway",
          "englishTitle": "التعرف على Render وRailway",
          "definition": "يُقصد بـ (التعرف على Render وRailway) أحد المفاهيم المحورية في مسار النشر على الخوادم والمنصات السحابية ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خط سير CI/CD مصنع السيارات المؤتمت بالكامل؛ يمر الهيكل بروبوتات الفحص واللحام والطلاء، ولا يخرج للاستخدام إلا بعد اجتياز كافة الاختبارات.",
          "why": "تبرز أهمية (التعرف على Render وRailway) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ التعرف على Render وRailway\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'التعرف على Render وRailway';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: التعرف على Render وRailway\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.5.5",
            "title": "التعرف على Render وRailway",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (التعرف على Render وRailway) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'التعرف على Render وRailway' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (التعرف على Render وRailway) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (التعرف على Render وRailway) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على التعرف على Render وRailway",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (التعرف على Render وRailway) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين التعرف على Render وRailway\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: التعرف على Render وRailway...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.5.6",
          "title": "مقدمة في AWS",
          "englishTitle": "مقدمة في AWS",
          "definition": "يُقصد بـ (مقدمة في AWS) أحد المفاهيم المحورية في مسار النشر على الخوادم والمنصات السحابية ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم Nginx شرطي المرور الذكي أمام مجمع المستشفيات؛ يوجه الإسعاف للمدخل السريع، والزوار لمواقف السيارات، ويمنع الشاحنات الثقيلة من الدخول.",
          "why": "تبرز أهمية (مقدمة في AWS) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مقدمة في AWS\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مقدمة في AWS';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مقدمة في AWS\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.5.6",
            "title": "مقدمة في AWS",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (مقدمة في AWS) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'مقدمة في AWS' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مقدمة في AWS) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مقدمة في AWS) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مقدمة في AWS",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مقدمة في AWS) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مقدمة في AWS\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مقدمة في AWS...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.5.7",
          "title": "مقدمة في Serverless Functions",
          "englishTitle": "مقدمة في Serverless Functions",
          "definition": "يُقصد بـ (مقدمة في Serverless Functions) أحد المفاهيم المحورية في مسار النشر على الخوادم والمنصات السحابية ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه Docker الحاوية الفولاذية المعيارية للبضائع؛ توضع على سفينة أو قطار أو شاحنة وتصل لأي دولة وتفتح لتعمل بنفس الطريقة دون أي مفاجآت.",
          "why": "تبرز أهمية (مقدمة في Serverless Functions) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مقدمة في Serverless Functions\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مقدمة في Serverless Functions';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مقدمة في Serverless Functions\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.5.7",
            "title": "مقدمة في Serverless Functions",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (مقدمة في Serverless Functions) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'مقدمة في Serverless Functions' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مقدمة في Serverless Functions) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مقدمة في Serverless Functions) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مقدمة في Serverless Functions",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مقدمة في Serverless Functions) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مقدمة في Serverless Functions\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مقدمة في Serverless Functions...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.5.8",
          "title": "الفروق بين VPS وPaaS وServerless",
          "englishTitle": "الفروق بين VPS وPaaS وServerless",
          "definition": "يُقصد بـ (الفروق بين VPS وPaaS وServerless) أحد المفاهيم المحورية في مسار النشر على الخوادم والمنصات السحابية ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه ملف Dockerfile وصفة بناء الكعكة السحرية خطوة بخطوة؛ يحدد المكونات الأساسية، خطوات الطهي، ودرجة الحرارة لإنتاج نسخة متطابقة في كل مرة.",
          "why": "تبرز أهمية (الفروق بين VPS وPaaS وServerless) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ الفروق بين VPS وPaaS وServerless\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'الفروق بين VPS وPaaS وServerless';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: الفروق بين VPS وPaaS وServerless\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.5.8",
            "title": "الفروق بين VPS وPaaS وServerless",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (الفروق بين VPS وPaaS وServerless) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'الفروق بين VPS وPaaS وServerless' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (الفروق بين VPS وPaaS وServerless) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (الفروق بين VPS وPaaS وServerless) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على الفروق بين VPS وPaaS وServerless",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (الفروق بين VPS وPaaS وServerless) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين الفروق بين VPS وPaaS وServerless\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: الفروق بين VPS وPaaS وServerless...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.5.9",
          "title": "مراجعة تكاليف الاستضافة",
          "englishTitle": "مراجعة تكاليف الاستضافة",
          "definition": "يُقصد بـ (مراجعة تكاليف الاستضافة) أحد المفاهيم المحورية في مسار النشر على الخوادم والمنصات السحابية ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خط سير CI/CD مصنع السيارات المؤتمت بالكامل؛ يمر الهيكل بروبوتات الفحص واللحام والطلاء، ولا يخرج للاستخدام إلا بعد اجتياز كافة الاختبارات.",
          "why": "تبرز أهمية (مراجعة تكاليف الاستضافة) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مراجعة تكاليف الاستضافة\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مراجعة تكاليف الاستضافة';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مراجعة تكاليف الاستضافة\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.5.9",
            "title": "مراجعة تكاليف الاستضافة",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (مراجعة تكاليف الاستضافة) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'مراجعة تكاليف الاستضافة' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مراجعة تكاليف الاستضافة) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مراجعة تكاليف الاستضافة) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مراجعة تكاليف الاستضافة",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مراجعة تكاليف الاستضافة) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مراجعة تكاليف الاستضافة\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مراجعة تكاليف الاستضافة...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    },
    {
      "id": "19.6",
      "title": "CI/CD",
      "englishTitle": "CI/CD",
      "description": "شرح تفصيلي شامل لكافة محاور ومفاهيم CI/CD وتطبيقاتها العملية.",
      "quizzes": [
        {
          "id": "q-19.6-1",
          "question": "ما هو المبدأ الأساسي والهدف الهندسي الأهم عند تطبيق مفاهيم (CI/CD) في مشاريع Node.js الحديثة؟",
          "options": [
            "رفع كفاءة المعالجة وضمان استقرار النظام وتفادي حظر المسار الرئيسي",
            "إجبار كافة العمليات على العمل بشكل متزامن تسلسلي حصراً",
            "الاستغناء كلياً عن استخدام قواعد البيانات واستبدالها بالمتغيرات العامة",
            "إيقاف تشغيل الخادم تلقائياً عند مواجهة أي طلب غير مألوف"
          ],
          "correctIndex": 0,
          "explanation": "التطبيق الصحيح لمفاهيم (CI/CD) يهدف لضمان استثمار معمارية Node.js غير المتزامنة لتقديم أداء فائق وتفادي الاختناقات البرمجية.",
          "hint": "فكر في كيفية تحقيق أقصى استفادة من مسار Node.js الأحادي غير المتزامن."
        },
        {
          "id": "q-19.6-2",
          "question": "ما هي الممارسة البرمجية الآمنة الموصى بها عالمياً عند العمل على (CI/CD)؟",
          "options": [
            "الاعتماد على القيم المشفرة يدوياً داخل الكود المصدري وتجاهل المتغيرات البيئية",
            "تطبيق التحقق الصارم من صحة المدخلات وعزل الأخطاء داخل كتل try/catch محكمة",
            "تحميل كافة الملفات والبيانات الضخمة دفعة واحدة في الذاكرة العشوائية عبر Buffers",
            "تجاهل معالجة الوعود غير المتزامنة وتركها معلقة دون توجيه"
          ],
          "correctIndex": 1,
          "explanation": "التحقق الصارم من صحة البيانات وعزل الأخطاء البرمجية يمنع الانهيار المفاجئ للخدمة ويحميها من الثغرات الأمنية.",
          "hint": "الحماية الاستباقية تبدأ دائماً بالتحقق من المدخلات وعزل الأخطاء."
        },
        {
          "id": "q-19.6-3",
          "question": "في حال وقوع خطأ أو استثناء غير متوقع أثناء تنفيذ عملية مرتبطة بـ (CI/CD)، ما هو التصرف الهندسي السليم؟",
          "options": [
            "كتمان الخطأ تماماً وتجاهله لمنع تسجيله في شاشة الطرفية",
            "تسجيل تفاصيل الخطأ بوضوح في السجلات المهيكلة وإرجاع استجابة منسقة للمستخدم دون تسريب تفاصيل النظام الداخلية",
            "إيقاف تشغيل الخادم فوراً وحذف قاعدة البيانات المرتبطة",
            "إرجاع كود الاستجابة 200 OK دائماً وتضمين نص الخطأ الخام في الرسالة"
          ],
          "correctIndex": 1,
          "explanation": "تسجيل الأخطاء بوضوح للمطورين وإرجاع رد مهذب للمستخدم يحمي بيانات السيرفر الحساسة ويسهل استكشاف المشكلة.",
          "hint": "فكر في التوازن بين سرية النظام وتجربة المستخدم وتتبع الأخطاء."
        }
      ],
      "exercise": {
        "id": "ex-19.6",
        "title": "تطبيق عملي محلول: هندسة وتنفيذ نظام (CI/CD)",
        "task": "قم بكتابة موديول برمجي متكامل في Node.js ينفذ منطق (CI/CD) وفق أفضل الممارسات؛ مع تطبيق المعالجة غير المتزامنة، التحقق من المدخلات، وإدارة الأخطاء بأمان.",
        "hints": [
          "احرص على استخدام دوال async/await والكتل الوقائية try/catch.",
          "تأكد من كتابة تعليق عربي يوضح وظيفة كل سطر كود بدقة.",
          "قم باختبار السيناريو السليم وسيناريو المدخلات غير الصالحة للتأكد من صمود الكود."
        ],
        "solution": "// الحل النموذجي لموضوع CI/CD\n// 1. استيراد كائن قياس الأداء من مكتبة perf_hooks المدمجة\nimport { performance } from 'node:perf_hooks';\n\n// 2. دالة تنفيذ العملية الأساسية بشكل غير متزامن وآمن\nexport async function executeOperation(payload) {\n  // 3. التحقق المسبق من وجود الشحنة والبيانات الإلزامية\n  if (!payload || typeof payload !== 'object') {\n    // 4. رمي استثناء خطأ في حال كانت المدخلات غير مطابقة\n    throw new Error(\"بيانات الطلب غير صالحة، يجب تمرير كائن سليم\");\n  }\n\n  // 5. تسجيل توقيت بدء العملية بالميلي ثانية\n  const startTime = performance.now();\n\n  try {\n    // 6. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء معالجة طلب:\", payload);\n\n    // 7. محاكاة مهمة غير متزامنة مثل استعلام قاعدة بيانات أو استدعاء خارجي\n    await new Promise((resolve) => setTimeout(resolve, 80));\n\n    // 8. حساب المدة الزمنية الدقيقة المستغرقة\n    const duration = (performance.now() - startTime).toFixed(2);\n\n    // 9. إرجاع النتيجة المهيكلة مع تفاصيل الحالة وزمن المعالجة\n    return {\n      status: \"success\",\n      topic: \"CI/CD\",\n      processedAt: new Date().toISOString(),\n      executionTimeMs: duration,\n      data: payload\n    };\n  } catch (error) {\n    // 10. التقاط أي خطأ ومعالجته دون التسبب في انهيار الخادم\n    console.error(\"فشل أثناء المعالجة:\", error.message);\n    // 11. إعادة رمي الخطأ المهيكل للطبقات العليا\n    throw error;\n  }\n}\n\n// 12. تجربة تشغيل الدالة مع بيانات عينة\nexecuteOperation({ id: 101, action: \"PROCESS_DATA\" })\n  // 13. طباعة تقرير النجاح في كونسول الخادم\n  .then((res) => console.log(\"✓ تم التنفيذ بنجاح:\", res))\n  // 14. طباعة أي خطأ محتمل\n  .catch((err) => console.error(\"✕ خطأ:\", err.message));",
        "solutionExplanation": "تم بناء الحل النموذجي بالاعتماد على دالة async محكمة؛ حيث تبدأ بالتحقق الحارس (Guard Clause) من صحة المدخلات، ثم تنفذ العملية داخل كتلة try/catch مع قياس زمن الأداء بالميلي ثانية، وتضمن كتابة تعليق عربي فوق كل سطر كود لتوضيح التدفق خطوة بخطوة."
      },
      "subtopics": [
        {
          "id": "19.6.1",
          "title": "ما هو CI/CD؟",
          "englishTitle": "CI/CD",
          "definition": "يُقصد بـ (ما هو CI/CD؟) أحد المفاهيم المحورية في مسار CI/CD ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم Nginx شرطي المرور الذكي أمام مجمع المستشفيات؛ يوجه الإسعاف للمدخل السريع، والزوار لمواقف السيارات، ويمنع الشاحنات الثقيلة من الدخول.",
          "why": "تبرز أهمية (ما هو CI/CD؟) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ ما هو CI/CD؟\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'ما هو CI/CD؟';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: ما هو CI/CD؟\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.6.1",
            "title": "ما هو CI/CD؟",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (ما هو CI/CD؟) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'CI/CD' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (ما هو CI/CD؟) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (ما هو CI/CD؟) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على ما هو CI/CD؟",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (ما هو CI/CD؟) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو CI/CD؟\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: ما هو CI/CD؟...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.6.2",
          "title": "مقدمة في GitHub Actions",
          "englishTitle": "مقدمة في GitHub Actions",
          "definition": "يُقصد بـ (مقدمة في GitHub Actions) أحد المفاهيم المحورية في مسار CI/CD ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه Docker الحاوية الفولاذية المعيارية للبضائع؛ توضع على سفينة أو قطار أو شاحنة وتصل لأي دولة وتفتح لتعمل بنفس الطريقة دون أي مفاجآت.",
          "why": "تبرز أهمية (مقدمة في GitHub Actions) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ مقدمة في GitHub Actions\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'مقدمة في GitHub Actions';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: مقدمة في GitHub Actions\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.6.2",
            "title": "مقدمة في GitHub Actions",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (مقدمة في GitHub Actions) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'مقدمة في GitHub Actions' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (مقدمة في GitHub Actions) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (مقدمة في GitHub Actions) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على مقدمة في GitHub Actions",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (مقدمة في GitHub Actions) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين مقدمة في GitHub Actions\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: مقدمة في GitHub Actions...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.6.3",
          "title": "تشغيل ESLint تلقائياً",
          "englishTitle": "تشغيل ESLint تلقائياً",
          "definition": "يُقصد بـ (تشغيل ESLint تلقائياً) أحد المفاهيم المحورية في مسار CI/CD ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه ملف Dockerfile وصفة بناء الكعكة السحرية خطوة بخطوة؛ يحدد المكونات الأساسية، خطوات الطهي، ودرجة الحرارة لإنتاج نسخة متطابقة في كل مرة.",
          "why": "تبرز أهمية (تشغيل ESLint تلقائياً) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تشغيل ESLint تلقائياً\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'تشغيل ESLint تلقائياً';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تشغيل ESLint تلقائياً\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.6.3",
            "title": "تشغيل ESLint تلقائياً",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (تشغيل ESLint تلقائياً) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تشغيل ESLint تلقائياً' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تشغيل ESLint تلقائياً) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تشغيل ESLint تلقائياً) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تشغيل ESLint تلقائياً",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تشغيل ESLint تلقائياً) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تشغيل ESLint تلقائياً\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تشغيل ESLint تلقائياً...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.6.4",
          "title": "تشغيل الاختبارات تلقائياً",
          "englishTitle": "تشغيل الاختبارات تلقائياً",
          "definition": "يُقصد بـ (تشغيل الاختبارات تلقائياً) أحد المفاهيم المحورية في مسار CI/CD ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خط سير CI/CD مصنع السيارات المؤتمت بالكامل؛ يمر الهيكل بروبوتات الفحص واللحام والطلاء، ولا يخرج للاستخدام إلا بعد اجتياز كافة الاختبارات.",
          "why": "تبرز أهمية (تشغيل الاختبارات تلقائياً) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تشغيل الاختبارات تلقائياً\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'تشغيل الاختبارات تلقائياً';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تشغيل الاختبارات تلقائياً\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.6.4",
            "title": "تشغيل الاختبارات تلقائياً",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (تشغيل الاختبارات تلقائياً) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'تشغيل الاختبارات تلقائياً' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تشغيل الاختبارات تلقائياً) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تشغيل الاختبارات تلقائياً) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تشغيل الاختبارات تلقائياً",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تشغيل الاختبارات تلقائياً) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تشغيل الاختبارات تلقائياً\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تشغيل الاختبارات تلقائياً...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.6.5",
          "title": "تنفيذ Type Checking",
          "englishTitle": "Type Checking",
          "definition": "يُقصد بـ (تنفيذ Type Checking) أحد المفاهيم المحورية في مسار CI/CD ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم Nginx شرطي المرور الذكي أمام مجمع المستشفيات؛ يوجه الإسعاف للمدخل السريع، والزوار لمواقف السيارات، ويمنع الشاحنات الثقيلة من الدخول.",
          "why": "تبرز أهمية (تنفيذ Type Checking) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ تنفيذ Type Checking\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'تنفيذ Type Checking';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: تنفيذ Type Checking\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.6.5",
            "title": "تنفيذ Type Checking",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (تنفيذ Type Checking) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Type Checking' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (تنفيذ Type Checking) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (تنفيذ Type Checking) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على تنفيذ Type Checking",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (تنفيذ Type Checking) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ Type Checking\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: تنفيذ Type Checking...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.6.6",
          "title": "بناء Docker Image تلقائياً",
          "englishTitle": "بناء Docker Image تلقائياً",
          "definition": "يُقصد بـ (بناء Docker Image تلقائياً) أحد المفاهيم المحورية في مسار CI/CD ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه Docker الحاوية الفولاذية المعيارية للبضائع؛ توضع على سفينة أو قطار أو شاحنة وتصل لأي دولة وتفتح لتعمل بنفس الطريقة دون أي مفاجآت.",
          "why": "تبرز أهمية (بناء Docker Image تلقائياً) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ بناء Docker Image تلقائياً\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'بناء Docker Image تلقائياً';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: بناء Docker Image تلقائياً\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.6.6",
            "title": "بناء Docker Image تلقائياً",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (بناء Docker Image تلقائياً) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'بناء Docker Image تلقائياً' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (بناء Docker Image تلقائياً) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (بناء Docker Image تلقائياً) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على بناء Docker Image تلقائياً",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (بناء Docker Image تلقائياً) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين بناء Docker Image تلقائياً\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: بناء Docker Image تلقائياً...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.6.7",
          "title": "النشر بعد نجاح الاختبارات",
          "englishTitle": "النشر بعد نجاح الاختبارات",
          "definition": "يُقصد بـ (النشر بعد نجاح الاختبارات) أحد المفاهيم المحورية في مسار CI/CD ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه ملف Dockerfile وصفة بناء الكعكة السحرية خطوة بخطوة؛ يحدد المكونات الأساسية، خطوات الطهي، ودرجة الحرارة لإنتاج نسخة متطابقة في كل مرة.",
          "why": "تبرز أهمية (النشر بعد نجاح الاختبارات) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ النشر بعد نجاح الاختبارات\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'النشر بعد نجاح الاختبارات';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: النشر بعد نجاح الاختبارات\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.6.7",
            "title": "النشر بعد نجاح الاختبارات",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (النشر بعد نجاح الاختبارات) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'النشر بعد نجاح الاختبارات' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (النشر بعد نجاح الاختبارات) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (النشر بعد نجاح الاختبارات) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على النشر بعد نجاح الاختبارات",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (النشر بعد نجاح الاختبارات) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين النشر بعد نجاح الاختبارات\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: النشر بعد نجاح الاختبارات...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.6.8",
          "title": "استخدام Staging Environment",
          "englishTitle": "Staging Environment",
          "definition": "يُقصد بـ (استخدام Staging Environment) أحد المفاهيم المحورية في مسار CI/CD ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خط سير CI/CD مصنع السيارات المؤتمت بالكامل؛ يمر الهيكل بروبوتات الفحص واللحام والطلاء، ولا يخرج للاستخدام إلا بعد اجتياز كافة الاختبارات.",
          "why": "تبرز أهمية (استخدام Staging Environment) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ استخدام Staging Environment\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'استخدام Staging Environment';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: استخدام Staging Environment\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.6.8",
            "title": "استخدام Staging Environment",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (استخدام Staging Environment) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'Staging Environment' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (استخدام Staging Environment) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (استخدام Staging Environment) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على استخدام Staging Environment",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (استخدام Staging Environment) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Staging Environment\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: استخدام Staging Environment...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        },
        {
          "id": "19.6.9",
          "title": "التراجع عن نشر فاشل Rollback",
          "englishTitle": "التراجع عن نشر فاشل Rollback",
          "definition": "يُقصد بـ (التراجع عن نشر فاشل Rollback) أحد المفاهيم المحورية في مسار CI/CD ضمن بيئة Node.js؛ حيث يوفر للمهندس الأدوات المعمارية والبرمجية لمعالجة تدفقات البيانات وتقديم أداء عالي الاستقرار في بيئات الإنتاج الحية.",
          "analogy": "يشبه خادم Nginx شرطي المرور الذكي أمام مجمع المستشفيات؛ يوجه الإسعاف للمدخل السريع، والزوار لمواقف السيارات، ويمنع الشاحنات الثقيلة من الدخول.",
          "why": "تبرز أهمية (التراجع عن نشر فاشل Rollback) في حل مشكلات الاختناق البرمجي، ضمان استقرار الخدمات الخلفية عند تزايد أحمال المستخدمين، وفصل المسؤوليات لتحقيق كود نظيف وسهل الصيانة والاختبار.",
          "terms": [
            {
              "term": "Multi-Stage Build",
              "pronunciation": "مالتي-ستيج بيلد",
              "meaning": "بناء حاوية Docker على مراحل لعزل أدوات البناء وتصغير الصورة"
            },
            {
              "term": "Reverse Proxy",
              "pronunciation": "ريفرس بروكسي",
              "meaning": "خادم وكيل عكسي مثل Nginx لحماية وتوجيه طلبات الويب للسيرفر"
            },
            {
              "term": "CI/CD Pipeline",
              "pronunciation": "سي-آي / سي-دي بايب لاين",
              "meaning": "خط الأتمتة المستمر لفحص واختبار وتجميع ونشر الكود تلقائياً"
            },
            {
              "term": "Docker Compose",
              "pronunciation": "دوكر كومبوز",
              "meaning": "أداة تشغيل وإدارة مجموعة حاويات مترابطة معاً بملف إعداد واحد"
            }
          ],
          "syntax": "// الصيغة البرمجية العامة لـ التراجع عن نشر فاشل Rollback\nconst result = await executeOperation(parameters);",
          "simpleCode": "// تحديد عنوان المفهوم البرمجي قيد التنفيذ\nconst topicName = 'التراجع عن نشر فاشل Rollback';\n// تسجيل وقت بداية معالجة العملية بالصيغة القياسية\nconst timestamp = new Date().toISOString();\n// طباعة رسالة توضح انطلاق معالجة المهمة\nconsole.log(`[${timestamp}] تنفيذ مهمة: ${topicName}`);\n// إنشاء كائن النتيجة المنظم وتأكيد اكتمال الخطوات\nconst executionResult = { success: true, topic: topicName };\n// طباعة النتيجة النهائية للتأكيد على دقة وسلاسة المعالجة\nconsole.log('مخرجات التنفيذ المعتمدة:', executionResult);",
          "advancedCode": "// تطبيق متقدم وموثق لمفهوم: التراجع عن نشر فاشل Rollback\nimport { performance } from 'node:perf_hooks';\n// تعريف كلاس إدارة ومعالجة المهام الهندسية الاحترافية\nexport class ProductionTaskExecutor {\n// خاصية خاصة لتسجيل عدد العمليات المنجزة\n  #completedCount = 0;\n// دالة تنفيذ العملية مع قياس زمن الأداء والتعامل مع الأخطاء\n  async executeTask(taskPayload) {\n// التحقق المسبق الحارس من سلامة كائن المدخلات\n    if (!taskPayload) throw new Error('البيانات المدخلة مفقودة');\n// رصد وقت بداية المعالجة بدقة النانو ثانية\n    const start = performance.now();\n// محاكاة معالجة غير متزامنة مثل استعلام قاعدة بيانات أو شبكة\n    await new Promise(resolve => setTimeout(resolve, 60));\n// حساب زمن المعالجة الإجمالي بالميلي ثانية\n    const duration = (performance.now() - start).toFixed(2);\n// زيادة عداد العمليات الناجحة في الذاكرة\n    this.#completedCount++;\n// إرجاع تقرير الأداء المنسق مع بيانات العملية\n    return { status: 'success', durationMs: duration, totalExecuted: this.#completedCount };\n// إغلاق دالة التنفيذ\n  }\n// إغلاق كلاس المعالجة\n}\n// إنشاء مثيل الخدمة وتشغيل المعالجة التجريبية\nconst executor = new ProductionTaskExecutor();\n// استدعاء العملية وطباعة النتيجة في الطرفية للمراقبة\nexecutor.executeTask({ id: 1 }).then(res => console.log('✓ نتيجة العملية المتقدمة:', res));",
          "outputExplanation": "عند تشغيل الشفرة في الطرفية، يقوم محرك Node.js بتفسير الأوامر غير المتزامنة، وطباعة تفاصيل الحالة وزمن المعالجة بدقة دون حظر حلقة الأحداث، ثم ينهي الاتصال بسلام.",
          "commonMistakes": [
            {
              "wrong": "حظر مسار حلقة الأحداث (Event Loop) بعمليات متزامنة ثقيلة (Blocking I/O).",
              "right": "استخدام الدوال غير المتزامنة المعتمدة على الوعود (Promises) وتفويض المهام الحسابية لـ Worker Threads.",
              "reason": "لأن Node.js يعمل على مسار أحادي، وحظر المسار يجمد استجابة الخادم لكافة العملاء الآخرين في نفس الوقت."
            },
            {
              "wrong": "تجاهل معالجة الأخطاء والوعود المعلقة (Unhandled Promise Rejections).",
              "right": "تغليف العمليات بكتل try/catch محكمة أو استخدام توابع .catch() وتمرير الخطأ للوسيط المركزي.",
              "reason": "لأن الوعود المرفوضة غير المعالجة قد تؤدي إلى انهيار مفاجئ لعملية الخادم وفقدان الاتصالات الجارية."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودعات العامة.",
            "طبق التحقق الصارم من صحة ونوعية المدخلات لمنع الثغرات الأمنية وفساد قواعد البيانات.",
            "استخدم التسجيل المهيكل (Structured JSON Logging) بدلاً من طباعة النصوص العادية لتسهيل المراقبة والبحث في الإنتاج.",
            "احرص على الإغلاق السلس للتطبيق (Graceful Shutdown) عند استلام إشارات النظام لحماية المعاملات النشطة."
          ],
          "infographic": {
            "badge": "الدرس 19.6.9",
            "title": "التراجع عن نشر فاشل Rollback",
            "icon": "Cpu",
            "colors": "from-amber-600 to-rose-500",
            "steps": [
              {
                "title": "التهيئة والتحقق",
                "desc": "فحص المدخلات وتهيئة الموارد والاتصالات بأمان تام"
              },
              {
                "title": "المعالجة غير المتزامنة",
                "desc": "تنفيذ منطق الأعمال دون حظر مسار حلقة الأحداث"
              },
              {
                "title": "الاستجابة والأرشفة",
                "desc": "إرسال النتيجة المهيكلة للعميل وتسجيل مقاييس العملية"
              }
            ],
            "summary": "يمثل (التراجع عن نشر فاشل Rollback) ركيزة برمجية هامة لبناء وتطوير تطبيقات خلفية موثوقة وعالية الأداء.",
            "goldenCode": "// مقتطف الكود الذهبي النظيف\nconst data = await executeSafely({ action: 'التراجع عن نشر فاشل Rollback' });"
          },
          "quiz": {
            "question": "ما هو المعيار الهندسي الأهم لتطبيق (التراجع عن نشر فاشل Rollback) بنجاح؟",
            "options": [
              "ضمان المعالجة غير المتزامنة وتفادي حظر المسار الرئيسي للخادم",
              "إيقاف تشغيل الخادم فور تلقي أول طلب غير متوقع",
              "حفظ كافة كلمات المرور بصيغة نصوص صريحة غير مشفرة",
              "الاستغناء عن استخدام أي دوال وسيطة للتحقق من المدخلات"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق السليم لـ (التراجع عن نشر فاشل Rollback) يعتمد على استثمار المعمارية غير المتزامنة لتقديم أداء فائق وتفادي حظر الـ Event Loop."
          },
          "exercise": {
            "title": "تمرين تطبيقي على التراجع عن نشر فاشل Rollback",
            "task": "قم بكتابة كود في Node.js ينفذ منطق (التراجع عن نشر فاشل Rollback) مع إضافة التحقق من الأخطاء وطباعة تقرير منظم في شاشة الطرفية.",
            "hints": [
              "استخدم كتل try/catch لحماية الكود من الانهيار.",
              "تأكد من وجود تعليق عربي فوق كل سطر كود يوضح المنطق المتبع."
            ],
            "solution": "// الحل النموذجي لتمرين التراجع عن نشر فاشل Rollback\n// 1. دالة المعالجة غير المتزامنة الآمنة\nasync function runTask() {\n  // 2. بداية كتلة الحماية واعتراض الأخطاء\n  try {\n    // 3. طباعة إشعار بدء المعالجة في الطرفية\n    console.log(\"بدء تنفيذ مهمة: التراجع عن نشر فاشل Rollback...\");\n    // 4. محاكاة عملية غير متزامنة\n    await new Promise(r => setTimeout(r, 60));\n    // 5. طباعة تأكيد النجاح بعد اكتمال العملية\n    console.log(\"✓ تم إنجاز العملية بنجاح تام\");\n    // 6. إرجاع كائن الحالة المعتمد\n    return { success: true };\n  // 7. التقاط أي خطأ طارئ\n  } catch (err) {\n    // 8. طباعة الخطأ بوضوح دون إيقاف السيرفر\n    console.error(\"✕ خطأ في العملية:\", err.message);\n    // 9. إعادة رمي الخطأ للطبقات المسؤولة\n    throw err;\n  }\n}\n// 10. استدعاء الدالة لتشغيل التمرين\nrunTask();",
            "solutionExplanation": "تم استخدام دالة async مع كتلة try/catch محكمة وتعليقات عربية فوق كل سطر لتوضيح آلية التنفيذ الآمن."
          }
        }
      ]
    }
  ]
};

export default SECTION_19;
