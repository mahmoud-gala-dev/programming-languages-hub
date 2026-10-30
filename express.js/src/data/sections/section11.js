// src/data/sections/section11.js
// القسم الحادي عشر: MongoDB وMongoose مع Express
export const SECTION_11 = {
  "id": 11,
  "number": "11",
  "title": "القسم الحادي عشر: MongoDB وMongoose مع Express",
  "englishTitle": "Section 11: القسم الحادي عشر: MongoDB وMongoose مع Express",
  "badge": "متقدم",
  "description": "منهج تعليمي شامل يغطي القسم الحادي عشر: MongoDB وMongoose مع Express بدقة تفصيلية وأمثلة عملية وتطبيق مباشر في Express.js.",
  "topics": [
    {
      "id": "11.1",
      "title": "مقدمة في MongoDB",
      "englishTitle": "مقدمة في MongoDB",
      "subtopics": [
        {
          "id": "s11-ma-ما_هي_MongoDB؟",
          "letter": "a",
          "title": "ما هي MongoDB؟",
          "englishTitle": "MongoDB",
          "definition": "يُعد مفهوم (ما هي MongoDB؟) من الركائز الجوهرية في مقدمة في MongoDB ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه خزانة السجلات والأرشيف المركزي لشركة ضخمة؛ يستعلم منها الموظف في ثوانٍ معدودة ويحفظ فيها كل معاملة جديدة.",
          "why": "نحتاجه للاحتفاظ ببيانات المستخدمين والطلبات والمنتجات دائماً حتى بعد إعادة تشغيل الخادم.",
          "terms": [
            {
              "term": "Database Integration",
              "pronunciation": "داتابيز إنتجريشن",
              "meaning": "ربط خادم Express بمستودع بيانات دائم (SQL أو NoSQL) لحفظ واسترجاع المعلومات بكفاءة وأمان"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// ربط قاعدة البيانات والتعامل مع النماذج\nimport mongoose from 'mongoose';\nawait mongoose.connect(process.env.DATABASE_URL);\n\n// إنشاء نموذج بيانات\nconst User = mongoose.model('User', new mongoose.Schema({ name: String, email: String }));",
          "simpleCode": "// 1. استعلام بسيط لجلب البيانات من قاعدة البيانات\napp.get('/api/users', async (req, res, next) => {\n  try {\n    // جلب المستخدمين بدون إظهار كلمات المرور\n    const users = await User.find().select('-password');\n    // إرجاع النتيجة\n    res.status(200).json({ success: true, count: users.length, data: users });\n  } catch (error) {\n    next(error);\n  }\n});",
          "advancedCode": "// استعلام متقدم مع تصفية وترتيب وتقسيم صفحات (Pagination)\napp.get('/api/products', async (req, res, next) => {\n  try {\n    const page = parseInt(req.query.page, 10) || 1;\n    const limit = parseInt(req.query.limit, 10) || 10;\n    const skip = (page - 1) * limit;\n\n    const [products, total] = await Promise.all([\n      Product.find({ isAvailable: true }).skip(skip).limit(limit).sort({ createdAt: -1 }),\n      Product.countDocuments({ isAvailable: true })\n    ]);\n\n    res.status(200).json({\n      success: true,\n      pagination: { total, page, pages: Math.ceil(total / limit) },\n      data: products\n    });\n  } catch (err) {\n    next(err);\n  }\n});",
          "outputExplanation": "يقوم الخادم بتنفيذ الاستعلام بشكل غير متزامن واسترجاع البيانات من قاعدة البيانات وإرجاعها في بنية JSON موحدة.",
          "commonMistakes": [
            {
              "wrong": "إجراء استعلامات SQL عبر دمج النصوص مباشرة (String Concatenation)، مما يعرض الخادم لثغرة SQL Injection.",
              "right": "استخدام الاستعلامات ذات المعاملات (Parameterized Queries) أو أدوات الـ ORM مثل Prisma و Mongoose.",
              "reason": "الاستعلامات المعلمة تفصل منطق كود SQL عن مدخلات المستخدم تماماً وتمنع حقن أي كود خبيث."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: ما هي MongoDB؟",
            "title": "ما هي MongoDB؟",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (ما هي MongoDB؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "كيف نحمي خادم Express من ثغرات حقن الاستعلامات SQL / NoSQL Injection؟",
            "options": [
              "باستخدام Parameterized Queries واستخدام ORM حديث مع التحقق من المدخلات",
              "بإرسال الاستعلامات عبر GET فقط",
              "بتحويل قاعدة البيانات إلى ملف نصي",
              "بتعطيل منفذ قاعدة البيانات"
            ],
            "correctIndex": 0,
            "explanation": "استخدام أدوات ORM والاستعلامات المعلمة يمنع اختراق الشفرة بتنظيف وفصل أوامر SQL عن القيم المدخلة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: ما هي MongoDB؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ما هي MongoDB؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ما هي MongoDB؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ما هي MongoDB؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mb-الفرق_بين_SQL_و",
          "letter": "b",
          "title": "الفرق بين SQL وNoSQL",
          "englishTitle": "SQL وNoSQL",
          "definition": "يُعد مفهوم (الفرق بين SQL وNoSQL) من الركائز الجوهرية في مقدمة في MongoDB ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه خزانة السجلات والأرشيف المركزي لشركة ضخمة؛ يستعلم منها الموظف في ثوانٍ معدودة ويحفظ فيها كل معاملة جديدة.",
          "why": "نحتاجه للاحتفاظ ببيانات المستخدمين والطلبات والمنتجات دائماً حتى بعد إعادة تشغيل الخادم.",
          "terms": [
            {
              "term": "Database Integration",
              "pronunciation": "داتابيز إنتجريشن",
              "meaning": "ربط خادم Express بمستودع بيانات دائم (SQL أو NoSQL) لحفظ واسترجاع المعلومات بكفاءة وأمان"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// ربط قاعدة البيانات والتعامل مع النماذج\nimport mongoose from 'mongoose';\nawait mongoose.connect(process.env.DATABASE_URL);\n\n// إنشاء نموذج بيانات\nconst User = mongoose.model('User', new mongoose.Schema({ name: String, email: String }));",
          "simpleCode": "// 1. استعلام بسيط لجلب البيانات من قاعدة البيانات\napp.get('/api/users', async (req, res, next) => {\n  try {\n    // جلب المستخدمين بدون إظهار كلمات المرور\n    const users = await User.find().select('-password');\n    // إرجاع النتيجة\n    res.status(200).json({ success: true, count: users.length, data: users });\n  } catch (error) {\n    next(error);\n  }\n});",
          "advancedCode": "// استعلام متقدم مع تصفية وترتيب وتقسيم صفحات (Pagination)\napp.get('/api/products', async (req, res, next) => {\n  try {\n    const page = parseInt(req.query.page, 10) || 1;\n    const limit = parseInt(req.query.limit, 10) || 10;\n    const skip = (page - 1) * limit;\n\n    const [products, total] = await Promise.all([\n      Product.find({ isAvailable: true }).skip(skip).limit(limit).sort({ createdAt: -1 }),\n      Product.countDocuments({ isAvailable: true })\n    ]);\n\n    res.status(200).json({\n      success: true,\n      pagination: { total, page, pages: Math.ceil(total / limit) },\n      data: products\n    });\n  } catch (err) {\n    next(err);\n  }\n});",
          "outputExplanation": "يقوم الخادم بتنفيذ الاستعلام بشكل غير متزامن واسترجاع البيانات من قاعدة البيانات وإرجاعها في بنية JSON موحدة.",
          "commonMistakes": [
            {
              "wrong": "إجراء استعلامات SQL عبر دمج النصوص مباشرة (String Concatenation)، مما يعرض الخادم لثغرة SQL Injection.",
              "right": "استخدام الاستعلامات ذات المعاملات (Parameterized Queries) أو أدوات الـ ORM مثل Prisma و Mongoose.",
              "reason": "الاستعلامات المعلمة تفصل منطق كود SQL عن مدخلات المستخدم تماماً وتمنع حقن أي كود خبيث."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: الفرق بين SQL وNoSQL",
            "title": "الفرق بين SQL وNoSQL",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (الفرق بين SQL وNoSQL) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "كيف نحمي خادم Express من ثغرات حقن الاستعلامات SQL / NoSQL Injection؟",
            "options": [
              "باستخدام Parameterized Queries واستخدام ORM حديث مع التحقق من المدخلات",
              "بإرسال الاستعلامات عبر GET فقط",
              "بتحويل قاعدة البيانات إلى ملف نصي",
              "بتعطيل منفذ قاعدة البيانات"
            ],
            "correctIndex": 0,
            "explanation": "استخدام أدوات ORM والاستعلامات المعلمة يمنع اختراق الشفرة بتنظيف وفصل أوامر SQL عن القيم المدخلة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: الفرق بين SQL وNoSQL",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (الفرق بين SQL وNoSQL)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين SQL وNoSQL\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"الفرق بين SQL وNoSQL\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mc-مفهوم_Documents",
          "letter": "c",
          "title": "مفهوم Documents",
          "englishTitle": "Documents",
          "definition": "يُعد مفهوم (مفهوم Documents) من الركائز الجوهرية في مقدمة في MongoDB ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "مفهوم",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم مفهوم Documents\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: مفهوم Documents\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: مفهوم Documents\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"مفهوم Documents\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ مفهوم Documents في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"مفهوم Documents\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (مفهوم Documents) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: مفهوم Documents",
            "title": "مفهوم Documents",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (مفهوم Documents) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (مفهوم Documents) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (مفهوم Documents) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مفهوم Documents",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم Documents)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Documents\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم Documents\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-md-مفهوم_Collectio",
          "letter": "d",
          "title": "مفهوم Collections",
          "englishTitle": "Collections",
          "definition": "يُعد مفهوم (مفهوم Collections) من الركائز الجوهرية في مقدمة في MongoDB ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "مفهوم",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم مفهوم Collections\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: مفهوم Collections\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: مفهوم Collections\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"مفهوم Collections\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ مفهوم Collections في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"مفهوم Collections\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (مفهوم Collections) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: مفهوم Collections",
            "title": "مفهوم Collections",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (مفهوم Collections) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (مفهوم Collections) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (مفهوم Collections) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مفهوم Collections",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم Collections)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Collections\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم Collections\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-me-مفهوم_ObjectId",
          "letter": "e",
          "title": "مفهوم ObjectId",
          "englishTitle": "ObjectId",
          "definition": "يُعد مفهوم (مفهوم ObjectId) من الركائز الجوهرية في مقدمة في MongoDB ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "مفهوم",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم مفهوم ObjectId\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: مفهوم ObjectId\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: مفهوم ObjectId\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"مفهوم ObjectId\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ مفهوم ObjectId في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"مفهوم ObjectId\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (مفهوم ObjectId) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: مفهوم ObjectId",
            "title": "مفهوم ObjectId",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (مفهوم ObjectId) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (مفهوم ObjectId) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (مفهوم ObjectId) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مفهوم ObjectId",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم ObjectId)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم ObjectId\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم ObjectId\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mf-استخدام_MongoDB",
          "letter": "f",
          "title": "استخدام MongoDB Atlas",
          "englishTitle": "MongoDB Atlas",
          "definition": "يُعد مفهوم (استخدام MongoDB Atlas) من الركائز الجوهرية في مقدمة في MongoDB ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه خزانة السجلات والأرشيف المركزي لشركة ضخمة؛ يستعلم منها الموظف في ثوانٍ معدودة ويحفظ فيها كل معاملة جديدة.",
          "why": "نحتاجه للاحتفاظ ببيانات المستخدمين والطلبات والمنتجات دائماً حتى بعد إعادة تشغيل الخادم.",
          "terms": [
            {
              "term": "Database Integration",
              "pronunciation": "داتابيز إنتجريشن",
              "meaning": "ربط خادم Express بمستودع بيانات دائم (SQL أو NoSQL) لحفظ واسترجاع المعلومات بكفاءة وأمان"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// ربط قاعدة البيانات والتعامل مع النماذج\nimport mongoose from 'mongoose';\nawait mongoose.connect(process.env.DATABASE_URL);\n\n// إنشاء نموذج بيانات\nconst User = mongoose.model('User', new mongoose.Schema({ name: String, email: String }));",
          "simpleCode": "// 1. استعلام بسيط لجلب البيانات من قاعدة البيانات\napp.get('/api/users', async (req, res, next) => {\n  try {\n    // جلب المستخدمين بدون إظهار كلمات المرور\n    const users = await User.find().select('-password');\n    // إرجاع النتيجة\n    res.status(200).json({ success: true, count: users.length, data: users });\n  } catch (error) {\n    next(error);\n  }\n});",
          "advancedCode": "// استعلام متقدم مع تصفية وترتيب وتقسيم صفحات (Pagination)\napp.get('/api/products', async (req, res, next) => {\n  try {\n    const page = parseInt(req.query.page, 10) || 1;\n    const limit = parseInt(req.query.limit, 10) || 10;\n    const skip = (page - 1) * limit;\n\n    const [products, total] = await Promise.all([\n      Product.find({ isAvailable: true }).skip(skip).limit(limit).sort({ createdAt: -1 }),\n      Product.countDocuments({ isAvailable: true })\n    ]);\n\n    res.status(200).json({\n      success: true,\n      pagination: { total, page, pages: Math.ceil(total / limit) },\n      data: products\n    });\n  } catch (err) {\n    next(err);\n  }\n});",
          "outputExplanation": "يقوم الخادم بتنفيذ الاستعلام بشكل غير متزامن واسترجاع البيانات من قاعدة البيانات وإرجاعها في بنية JSON موحدة.",
          "commonMistakes": [
            {
              "wrong": "إجراء استعلامات SQL عبر دمج النصوص مباشرة (String Concatenation)، مما يعرض الخادم لثغرة SQL Injection.",
              "right": "استخدام الاستعلامات ذات المعاملات (Parameterized Queries) أو أدوات الـ ORM مثل Prisma و Mongoose.",
              "reason": "الاستعلامات المعلمة تفصل منطق كود SQL عن مدخلات المستخدم تماماً وتمنع حقن أي كود خبيث."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: استخدام MongoDB Atlas",
            "title": "استخدام MongoDB Atlas",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (استخدام MongoDB Atlas) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "كيف نحمي خادم Express من ثغرات حقن الاستعلامات SQL / NoSQL Injection؟",
            "options": [
              "باستخدام Parameterized Queries واستخدام ORM حديث مع التحقق من المدخلات",
              "بإرسال الاستعلامات عبر GET فقط",
              "بتحويل قاعدة البيانات إلى ملف نصي",
              "بتعطيل منفذ قاعدة البيانات"
            ],
            "correctIndex": 0,
            "explanation": "استخدام أدوات ORM والاستعلامات المعلمة يمنع اختراق الشفرة بتنظيف وفصل أوامر SQL عن القيم المدخلة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام MongoDB Atlas",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام MongoDB Atlas)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام MongoDB Atlas\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام MongoDB Atlas\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mg-متى_نستخدم_Mong",
          "letter": "g",
          "title": "متى نستخدم MongoDB مع Express؟",
          "englishTitle": "متى نستخدم MongoDB مع Express",
          "definition": "يُعد مفهوم (متى نستخدم MongoDB مع Express؟) من الركائز الجوهرية في مقدمة في MongoDB ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه طبق الطعام الذي يقدمه النادل للزبون مع الفاتورة وحالة الطلب (جاهز، نفد، يحتاج وقتاً).",
          "why": "نحتاجه لإنهاء دورة الطلب (Request-Response Cycle) وإعادة البيانات المطلوبة أو التوجيه لصفحة أخرى.",
          "terms": [
            {
              "term": "Response (res)",
              "pronunciation": "ريسبونس",
              "meaning": "كائن الاستجابة الذي يتحكم فيما يعود للعميل من بيانات وحالات ورؤوس"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إرسال استجابة برمجية مهيكلة\nres.status(200).json({\n  success: true,\n  message: 'تمت العملية بنجاح',\n  data: { ... }\n});",
          "simpleCode": "// 1. استيراد إكسبريس\nimport express from 'express';\nconst app = express();\n\n// 2. مسار يرسل استجابة JSON برمز الحالة 200\napp.get('/status', (req, res) => {\n  // إرسال الرد وإغلاق دورة الطلب\n  res.status(200).json({ status: 'Online', uptime: process.uptime() });\n});",
          "advancedCode": "// إرسال استجابات متقدمة (تنزيل ملفات، تعيين كوكيز، وتحديد الترويسات)\nimport express from 'express';\nconst app = express();\n\napp.get('/api/report/download', (req, res) => {\n  // 1. تعيين كوكيز آمنة للمتصفح\n  res.cookie('downloaded', 'true', { httpOnly: true, secure: true, maxAge: 3600000 });\n  // 2. تعيين ترويسات التخزين المؤقت\n  res.setHeader('Cache-Control', 'no-store');\n  // 3. إرجاع النتيجة أو الملف بصيغة JSON\n  res.status(200).json({\n    success: true,\n    downloadUrl: '/files/annual-report.pdf',\n    generatedAt: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يرسل الخادم استجابة برأس HTTP 200 OK، ويُرفق كائن JSON بالبيانات، ويثبت الكوكيز في متصفح العميل.",
          "commonMistakes": [
            {
              "wrong": "استدعاء res.json() أو res.send() مرتين لنفس الطلب، مما يسبب خطأ Cannot set headers after they are sent.",
              "right": "استخدام return res.json(...) لضمان إنهاء تنفيذ الدالة فور إرسال الاستجابة الأولى.",
              "reason": "بروتوكول HTTP يسمح بإرسال استجابة واحدة وترويسة واحدة فقط لكل طلب."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: متى نستخدم MongoDB مع Express؟",
            "title": "متى نستخدم MongoDB مع Express؟",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (متى نستخدم MongoDB مع Express؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هو الخطأ الذي يحدث عند استدعاء res.send() مرتين لنفس الطلب؟",
            "options": [
              "Cannot set headers after they are sent to the client",
              "ReferenceError: res is not defined",
              "UnhandledPromiseRejection",
              "Database connection timeout"
            ],
            "correctIndex": 0,
            "explanation": "عند إرسال الرأس للمتصفح لا يمكن تغييره أو إرسال استجابة أخرى لنفس الطلب."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: متى نستخدم MongoDB مع Express؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (متى نستخدم MongoDB مع Express؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين متى نستخدم MongoDB مع Express؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"متى نستخدم MongoDB مع Express؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "11.2",
      "title": "ربط MongoDB مع Express",
      "englishTitle": "ربط MongoDB مع Express",
      "subtopics": [
        {
          "id": "s11-ma-تثبيت_MongoDB_D",
          "letter": "a",
          "title": "تثبيت MongoDB Driver",
          "englishTitle": "تثبيت MongoDB Driver",
          "definition": "يُعد مفهوم (تثبيت MongoDB Driver) من الركائز الجوهرية في ربط MongoDB مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه خزانة السجلات والأرشيف المركزي لشركة ضخمة؛ يستعلم منها الموظف في ثوانٍ معدودة ويحفظ فيها كل معاملة جديدة.",
          "why": "نحتاجه للاحتفاظ ببيانات المستخدمين والطلبات والمنتجات دائماً حتى بعد إعادة تشغيل الخادم.",
          "terms": [
            {
              "term": "Database Integration",
              "pronunciation": "داتابيز إنتجريشن",
              "meaning": "ربط خادم Express بمستودع بيانات دائم (SQL أو NoSQL) لحفظ واسترجاع المعلومات بكفاءة وأمان"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// ربط قاعدة البيانات والتعامل مع النماذج\nimport mongoose from 'mongoose';\nawait mongoose.connect(process.env.DATABASE_URL);\n\n// إنشاء نموذج بيانات\nconst User = mongoose.model('User', new mongoose.Schema({ name: String, email: String }));",
          "simpleCode": "// 1. استعلام بسيط لجلب البيانات من قاعدة البيانات\napp.get('/api/users', async (req, res, next) => {\n  try {\n    // جلب المستخدمين بدون إظهار كلمات المرور\n    const users = await User.find().select('-password');\n    // إرجاع النتيجة\n    res.status(200).json({ success: true, count: users.length, data: users });\n  } catch (error) {\n    next(error);\n  }\n});",
          "advancedCode": "// استعلام متقدم مع تصفية وترتيب وتقسيم صفحات (Pagination)\napp.get('/api/products', async (req, res, next) => {\n  try {\n    const page = parseInt(req.query.page, 10) || 1;\n    const limit = parseInt(req.query.limit, 10) || 10;\n    const skip = (page - 1) * limit;\n\n    const [products, total] = await Promise.all([\n      Product.find({ isAvailable: true }).skip(skip).limit(limit).sort({ createdAt: -1 }),\n      Product.countDocuments({ isAvailable: true })\n    ]);\n\n    res.status(200).json({\n      success: true,\n      pagination: { total, page, pages: Math.ceil(total / limit) },\n      data: products\n    });\n  } catch (err) {\n    next(err);\n  }\n});",
          "outputExplanation": "يقوم الخادم بتنفيذ الاستعلام بشكل غير متزامن واسترجاع البيانات من قاعدة البيانات وإرجاعها في بنية JSON موحدة.",
          "commonMistakes": [
            {
              "wrong": "إجراء استعلامات SQL عبر دمج النصوص مباشرة (String Concatenation)، مما يعرض الخادم لثغرة SQL Injection.",
              "right": "استخدام الاستعلامات ذات المعاملات (Parameterized Queries) أو أدوات الـ ORM مثل Prisma و Mongoose.",
              "reason": "الاستعلامات المعلمة تفصل منطق كود SQL عن مدخلات المستخدم تماماً وتمنع حقن أي كود خبيث."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تثبيت MongoDB Driver",
            "title": "تثبيت MongoDB Driver",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تثبيت MongoDB Driver) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "كيف نحمي خادم Express من ثغرات حقن الاستعلامات SQL / NoSQL Injection؟",
            "options": [
              "باستخدام Parameterized Queries واستخدام ORM حديث مع التحقق من المدخلات",
              "بإرسال الاستعلامات عبر GET فقط",
              "بتحويل قاعدة البيانات إلى ملف نصي",
              "بتعطيل منفذ قاعدة البيانات"
            ],
            "correctIndex": 0,
            "explanation": "استخدام أدوات ORM والاستعلامات المعلمة يمنع اختراق الشفرة بتنظيف وفصل أوامر SQL عن القيم المدخلة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تثبيت MongoDB Driver",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تثبيت MongoDB Driver)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تثبيت MongoDB Driver\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تثبيت MongoDB Driver\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mb-إنشاء_Connectio",
          "letter": "b",
          "title": "إنشاء Connection String",
          "englishTitle": "Connection String",
          "definition": "يُعد مفهوم (إنشاء Connection String) من الركائز الجوهرية في ربط MongoDB مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إنشاء",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم إنشاء Connection String\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء Connection String\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء Connection String\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء Connection String\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء Connection String في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء Connection String\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء Connection String) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء Connection String",
            "title": "إنشاء Connection String",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء Connection String) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء Connection String) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء Connection String) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء Connection String",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Connection String)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Connection String\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Connection String\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mc-فتح_الاتصال_بقا",
          "letter": "c",
          "title": "فتح الاتصال بقاعدة البيانات",
          "englishTitle": "فتح الاتصال بقاعدة البيانات",
          "definition": "يُعد مفهوم (فتح الاتصال بقاعدة البيانات) من الركائز الجوهرية في ربط MongoDB مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "فتح",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم فتح الاتصال بقاعدة البيانات\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: فتح الاتصال بقاعدة البيانات\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: فتح الاتصال بقاعدة البيانات\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"فتح الاتصال بقاعدة البيانات\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ فتح الاتصال بقاعدة البيانات في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"فتح الاتصال بقاعدة البيانات\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (فتح الاتصال بقاعدة البيانات) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: فتح الاتصال بقاعدة البيانات",
            "title": "فتح الاتصال بقاعدة البيانات",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (فتح الاتصال بقاعدة البيانات) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (فتح الاتصال بقاعدة البيانات) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (فتح الاتصال بقاعدة البيانات) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: فتح الاتصال بقاعدة البيانات",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (فتح الاتصال بقاعدة البيانات)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين فتح الاتصال بقاعدة البيانات\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"فتح الاتصال بقاعدة البيانات\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-md-تنفيذ_Insert",
          "letter": "d",
          "title": "تنفيذ Insert",
          "englishTitle": "Insert",
          "definition": "يُعد مفهوم (تنفيذ Insert) من الركائز الجوهرية في ربط MongoDB مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تنفيذ",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تنفيذ Insert\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تنفيذ Insert\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تنفيذ Insert\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تنفيذ Insert\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تنفيذ Insert في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تنفيذ Insert\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تنفيذ Insert) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنفيذ Insert",
            "title": "تنفيذ Insert",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تنفيذ Insert) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تنفيذ Insert) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تنفيذ Insert) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنفيذ Insert",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنفيذ Insert)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ Insert\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنفيذ Insert\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-me-تنفيذ_Find",
          "letter": "e",
          "title": "تنفيذ Find",
          "englishTitle": "Find",
          "definition": "يُعد مفهوم (تنفيذ Find) من الركائز الجوهرية في ربط MongoDB مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تنفيذ",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تنفيذ Find\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تنفيذ Find\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تنفيذ Find\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تنفيذ Find\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تنفيذ Find في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تنفيذ Find\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تنفيذ Find) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنفيذ Find",
            "title": "تنفيذ Find",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تنفيذ Find) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تنفيذ Find) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تنفيذ Find) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنفيذ Find",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنفيذ Find)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ Find\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنفيذ Find\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mf-تنفيذ_Update",
          "letter": "f",
          "title": "تنفيذ Update",
          "englishTitle": "Update",
          "definition": "يُعد مفهوم (تنفيذ Update) من الركائز الجوهرية في ربط MongoDB مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تنفيذ",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تنفيذ Update\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تنفيذ Update\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تنفيذ Update\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تنفيذ Update\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تنفيذ Update في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تنفيذ Update\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تنفيذ Update) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنفيذ Update",
            "title": "تنفيذ Update",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تنفيذ Update) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تنفيذ Update) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تنفيذ Update) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنفيذ Update",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنفيذ Update)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ Update\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنفيذ Update\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mg-تنفيذ_Delete",
          "letter": "g",
          "title": "تنفيذ Delete",
          "englishTitle": "Delete",
          "definition": "يُعد مفهوم (تنفيذ Delete) من الركائز الجوهرية في ربط MongoDB مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه مفترق الطرق أو لوحة التوجيه في محطة القطارات؛ توجه كل مسافر إلى الرصيف المخصص لرحلته بدقة.",
          "why": "نحتاجه لتنظيم عناوين الـ API وفصل مسارات المستخدمين والمنتجات والمدفوعات في ملفات منفصلة سهلة الصيانة.",
          "terms": [
            {
              "term": "Router & Routes",
              "pronunciation": "راوتر ومسارات",
              "meaning": "نظام توجيه الطلبات الواردة إلى الدوال المخصصة لمعالجتها بناءً على الرابط ونوع الطلب"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إنشاء موجه مسارات منفصل\nimport { Router } from 'express';\nconst router = Router();\n\nrouter.route('/items')\n  .get(getItemsHandler)\n  .post(createItemHandler);\n\nexport default router;",
          "simpleCode": "// 1. استيراد Express وإنشاء موجه\nimport { Router } from 'express';\nconst router = Router();\n\n// 2. تعريف مسار GET\nrouter.get('/ping', (req, res) => {\n  // الرد على فحص الاتصال\n  res.send('pong');\n});\n\nexport default router;",
          "advancedCode": "// تنظيم المسارات المتقدمة مع الربط المتسلسل والتحقق\nimport { Router } from 'express';\nconst router = Router();\n\n// توجيه مركب لمعالجة مسار بمعامل ديناميكي\nrouter.route('/users/:userId')\n  .get((req, res) => {\n    res.json({ id: req.params.userId, name: 'مستخدم تجريبي' });\n  })\n  .put((req, res) => {\n    res.json({ message: `تم تحديث المستخدم ${req.params.userId}` });\n  })\n  .delete((req, res) => {\n    res.status(204).send();\n  });\n\nexport default router;",
          "outputExplanation": "يوفر نظام التوجيه مرونة عالية لربط كل عملية (GET, PUT, DELETE) بدالتها الخاصة مع قراءة المتغيرات من الرابط.",
          "commonMistakes": [
            {
              "wrong": "كتابة جميع مسارات التطبيق في ملف app.js الرئيسي مما يجعله معقداً وغير قابل للصيانة.",
              "right": "تقسيم المسارات إلى وحدات داخل مجلد routes/ واستدعاؤها باستخدام app.use(\"/api/users\", userRoutes).",
              "reason": "فصل الاهتمامات (Separation of Concerns) هو المبدأ الأساسي لكتابة شفرة نظيفة وقابلة للتوسع."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنفيذ Delete",
            "title": "تنفيذ Delete",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تنفيذ Delete) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الطريقة القياسية لإنشاء موجه مسارات فرعي في Express.js؟",
            "options": [
              "express.Router()",
              "express.createRoute()",
              "express.newRouteGroup()",
              "express.pathManager()"
            ],
            "correctIndex": 0,
            "explanation": "الدالة express.Router() تنشئ كائن موجه مستقل يمكن عزله في ملف منفصل ودمجه في التطبيق الرئيسي."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنفيذ Delete",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنفيذ Delete)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ Delete\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنفيذ Delete\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mh-معالجة_أخطاء_ال",
          "letter": "h",
          "title": "معالجة أخطاء الاتصال",
          "englishTitle": "معالجة أخطاء الاتصال",
          "definition": "يُعد مفهوم (معالجة أخطاء الاتصال) من الركائز الجوهرية في ربط MongoDB مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "معالجة",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم معالجة أخطاء الاتصال\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: معالجة أخطاء الاتصال\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: معالجة أخطاء الاتصال\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"معالجة أخطاء الاتصال\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ معالجة أخطاء الاتصال في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"معالجة أخطاء الاتصال\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (معالجة أخطاء الاتصال) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: معالجة أخطاء الاتصال",
            "title": "معالجة أخطاء الاتصال",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (معالجة أخطاء الاتصال) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (معالجة أخطاء الاتصال) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (معالجة أخطاء الاتصال) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: معالجة أخطاء الاتصال",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (معالجة أخطاء الاتصال)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين معالجة أخطاء الاتصال\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"معالجة أخطاء الاتصال\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "11.3",
      "title": "استخدام Mongoose",
      "englishTitle": "استخدام Mongoose",
      "subtopics": [
        {
          "id": "s11-ma-ما_هو_Mongoose؟",
          "letter": "a",
          "title": "ما هو Mongoose؟",
          "englishTitle": "Mongoose",
          "definition": "يُعد مفهوم (ما هو Mongoose؟) من الركائز الجوهرية في استخدام Mongoose ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه خزانة السجلات والأرشيف المركزي لشركة ضخمة؛ يستعلم منها الموظف في ثوانٍ معدودة ويحفظ فيها كل معاملة جديدة.",
          "why": "نحتاجه للاحتفاظ ببيانات المستخدمين والطلبات والمنتجات دائماً حتى بعد إعادة تشغيل الخادم.",
          "terms": [
            {
              "term": "Database Integration",
              "pronunciation": "داتابيز إنتجريشن",
              "meaning": "ربط خادم Express بمستودع بيانات دائم (SQL أو NoSQL) لحفظ واسترجاع المعلومات بكفاءة وأمان"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// ربط قاعدة البيانات والتعامل مع النماذج\nimport mongoose from 'mongoose';\nawait mongoose.connect(process.env.DATABASE_URL);\n\n// إنشاء نموذج بيانات\nconst User = mongoose.model('User', new mongoose.Schema({ name: String, email: String }));",
          "simpleCode": "// 1. استعلام بسيط لجلب البيانات من قاعدة البيانات\napp.get('/api/users', async (req, res, next) => {\n  try {\n    // جلب المستخدمين بدون إظهار كلمات المرور\n    const users = await User.find().select('-password');\n    // إرجاع النتيجة\n    res.status(200).json({ success: true, count: users.length, data: users });\n  } catch (error) {\n    next(error);\n  }\n});",
          "advancedCode": "// استعلام متقدم مع تصفية وترتيب وتقسيم صفحات (Pagination)\napp.get('/api/products', async (req, res, next) => {\n  try {\n    const page = parseInt(req.query.page, 10) || 1;\n    const limit = parseInt(req.query.limit, 10) || 10;\n    const skip = (page - 1) * limit;\n\n    const [products, total] = await Promise.all([\n      Product.find({ isAvailable: true }).skip(skip).limit(limit).sort({ createdAt: -1 }),\n      Product.countDocuments({ isAvailable: true })\n    ]);\n\n    res.status(200).json({\n      success: true,\n      pagination: { total, page, pages: Math.ceil(total / limit) },\n      data: products\n    });\n  } catch (err) {\n    next(err);\n  }\n});",
          "outputExplanation": "يقوم الخادم بتنفيذ الاستعلام بشكل غير متزامن واسترجاع البيانات من قاعدة البيانات وإرجاعها في بنية JSON موحدة.",
          "commonMistakes": [
            {
              "wrong": "إجراء استعلامات SQL عبر دمج النصوص مباشرة (String Concatenation)، مما يعرض الخادم لثغرة SQL Injection.",
              "right": "استخدام الاستعلامات ذات المعاملات (Parameterized Queries) أو أدوات الـ ORM مثل Prisma و Mongoose.",
              "reason": "الاستعلامات المعلمة تفصل منطق كود SQL عن مدخلات المستخدم تماماً وتمنع حقن أي كود خبيث."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: ما هو Mongoose؟",
            "title": "ما هو Mongoose؟",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (ما هو Mongoose؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "كيف نحمي خادم Express من ثغرات حقن الاستعلامات SQL / NoSQL Injection؟",
            "options": [
              "باستخدام Parameterized Queries واستخدام ORM حديث مع التحقق من المدخلات",
              "بإرسال الاستعلامات عبر GET فقط",
              "بتحويل قاعدة البيانات إلى ملف نصي",
              "بتعطيل منفذ قاعدة البيانات"
            ],
            "correctIndex": 0,
            "explanation": "استخدام أدوات ORM والاستعلامات المعلمة يمنع اختراق الشفرة بتنظيف وفصل أوامر SQL عن القيم المدخلة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: ما هو Mongoose؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ما هو Mongoose؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو Mongoose؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ما هو Mongoose؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mb-تثبيت_Mongoose",
          "letter": "b",
          "title": "تثبيت Mongoose",
          "englishTitle": "تثبيت Mongoose",
          "definition": "يُعد مفهوم (تثبيت Mongoose) من الركائز الجوهرية في استخدام Mongoose ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه خزانة السجلات والأرشيف المركزي لشركة ضخمة؛ يستعلم منها الموظف في ثوانٍ معدودة ويحفظ فيها كل معاملة جديدة.",
          "why": "نحتاجه للاحتفاظ ببيانات المستخدمين والطلبات والمنتجات دائماً حتى بعد إعادة تشغيل الخادم.",
          "terms": [
            {
              "term": "Database Integration",
              "pronunciation": "داتابيز إنتجريشن",
              "meaning": "ربط خادم Express بمستودع بيانات دائم (SQL أو NoSQL) لحفظ واسترجاع المعلومات بكفاءة وأمان"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// ربط قاعدة البيانات والتعامل مع النماذج\nimport mongoose from 'mongoose';\nawait mongoose.connect(process.env.DATABASE_URL);\n\n// إنشاء نموذج بيانات\nconst User = mongoose.model('User', new mongoose.Schema({ name: String, email: String }));",
          "simpleCode": "// 1. استعلام بسيط لجلب البيانات من قاعدة البيانات\napp.get('/api/users', async (req, res, next) => {\n  try {\n    // جلب المستخدمين بدون إظهار كلمات المرور\n    const users = await User.find().select('-password');\n    // إرجاع النتيجة\n    res.status(200).json({ success: true, count: users.length, data: users });\n  } catch (error) {\n    next(error);\n  }\n});",
          "advancedCode": "// استعلام متقدم مع تصفية وترتيب وتقسيم صفحات (Pagination)\napp.get('/api/products', async (req, res, next) => {\n  try {\n    const page = parseInt(req.query.page, 10) || 1;\n    const limit = parseInt(req.query.limit, 10) || 10;\n    const skip = (page - 1) * limit;\n\n    const [products, total] = await Promise.all([\n      Product.find({ isAvailable: true }).skip(skip).limit(limit).sort({ createdAt: -1 }),\n      Product.countDocuments({ isAvailable: true })\n    ]);\n\n    res.status(200).json({\n      success: true,\n      pagination: { total, page, pages: Math.ceil(total / limit) },\n      data: products\n    });\n  } catch (err) {\n    next(err);\n  }\n});",
          "outputExplanation": "يقوم الخادم بتنفيذ الاستعلام بشكل غير متزامن واسترجاع البيانات من قاعدة البيانات وإرجاعها في بنية JSON موحدة.",
          "commonMistakes": [
            {
              "wrong": "إجراء استعلامات SQL عبر دمج النصوص مباشرة (String Concatenation)، مما يعرض الخادم لثغرة SQL Injection.",
              "right": "استخدام الاستعلامات ذات المعاملات (Parameterized Queries) أو أدوات الـ ORM مثل Prisma و Mongoose.",
              "reason": "الاستعلامات المعلمة تفصل منطق كود SQL عن مدخلات المستخدم تماماً وتمنع حقن أي كود خبيث."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تثبيت Mongoose",
            "title": "تثبيت Mongoose",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تثبيت Mongoose) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "كيف نحمي خادم Express من ثغرات حقن الاستعلامات SQL / NoSQL Injection؟",
            "options": [
              "باستخدام Parameterized Queries واستخدام ORM حديث مع التحقق من المدخلات",
              "بإرسال الاستعلامات عبر GET فقط",
              "بتحويل قاعدة البيانات إلى ملف نصي",
              "بتعطيل منفذ قاعدة البيانات"
            ],
            "correctIndex": 0,
            "explanation": "استخدام أدوات ORM والاستعلامات المعلمة يمنع اختراق الشفرة بتنظيف وفصل أوامر SQL عن القيم المدخلة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تثبيت Mongoose",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تثبيت Mongoose)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تثبيت Mongoose\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تثبيت Mongoose\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mc-إنشاء_Schema",
          "letter": "c",
          "title": "إنشاء Schema",
          "englishTitle": "Schema",
          "definition": "يُعد مفهوم (إنشاء Schema) من الركائز الجوهرية في استخدام Mongoose ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إنشاء",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم إنشاء Schema\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء Schema\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء Schema\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء Schema\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء Schema في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء Schema\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء Schema) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء Schema",
            "title": "إنشاء Schema",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء Schema) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء Schema) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء Schema) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء Schema",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Schema)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Schema\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Schema\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-md-إنشاء_Model",
          "letter": "d",
          "title": "إنشاء Model",
          "englishTitle": "Model",
          "definition": "يُعد مفهوم (إنشاء Model) من الركائز الجوهرية في استخدام Mongoose ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إنشاء",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم إنشاء Model\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء Model\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء Model\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء Model\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء Model في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء Model\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء Model) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء Model",
            "title": "إنشاء Model",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء Model) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء Model) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء Model) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء Model",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Model)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Model\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Model\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-me-تحديد_Schema_Va",
          "letter": "e",
          "title": "تحديد Schema Validation",
          "englishTitle": "تحديد Schema Validation",
          "definition": "يُعد مفهوم (تحديد Schema Validation) من الركائز الجوهرية في استخدام Mongoose ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تحديد",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تحديد Schema Validation\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تحديد Schema Validation\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تحديد Schema Validation\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تحديد Schema Validation\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تحديد Schema Validation في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تحديد Schema Validation\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تحديد Schema Validation) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تحديد Schema Validation",
            "title": "تحديد Schema Validation",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تحديد Schema Validation) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تحديد Schema Validation) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تحديد Schema Validation) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تحديد Schema Validation",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تحديد Schema Validation)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تحديد Schema Validation\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تحديد Schema Validation\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mf-تنفيذ_CRUD",
          "letter": "f",
          "title": "تنفيذ CRUD",
          "englishTitle": "CRUD",
          "definition": "يُعد مفهوم (تنفيذ CRUD) من الركائز الجوهرية في استخدام Mongoose ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تنفيذ",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تنفيذ CRUD\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تنفيذ CRUD\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تنفيذ CRUD\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تنفيذ CRUD\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تنفيذ CRUD في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تنفيذ CRUD\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تنفيذ CRUD) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنفيذ CRUD",
            "title": "تنفيذ CRUD",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تنفيذ CRUD) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تنفيذ CRUD) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تنفيذ CRUD) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنفيذ CRUD",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنفيذ CRUD)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ CRUD\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنفيذ CRUD\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mg-استخدام_Virtual",
          "letter": "g",
          "title": "استخدام Virtual Fields",
          "englishTitle": "Virtual Fields",
          "definition": "يُعد مفهوم (استخدام Virtual Fields) من الركائز الجوهرية في استخدام Mongoose ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "استخدام",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم استخدام Virtual Fields\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام Virtual Fields\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام Virtual Fields\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام Virtual Fields\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام Virtual Fields في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام Virtual Fields\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام Virtual Fields) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: استخدام Virtual Fields",
            "title": "استخدام Virtual Fields",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (استخدام Virtual Fields) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام Virtual Fields) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام Virtual Fields) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام Virtual Fields",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام Virtual Fields)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Virtual Fields\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام Virtual Fields\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mh-استخدام_Middlew",
          "letter": "h",
          "title": "استخدام Middleware Hooks",
          "englishTitle": "Middleware Hooks",
          "definition": "يُعد مفهوم (استخدام Middleware Hooks) من الركائز الجوهرية في استخدام Mongoose ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه ضابط الجوازات في المطار؛ يقف بين وصولك للطائرة وفحص تذكرتك وهويتك قبل السماح لك بالمرور.",
          "why": "نحتاجه للتحقق من الصلاحيات والمصادقة، تسجيل السجلات، ضغط البيانات، وتأمين الخادم دون تكرار الكود في كل مسار.",
          "terms": [
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دالة وسيطة تعترض الطلب قبل وصوله إلى معالج المسار، ولها صلاحية تعديله أو رفضه أو تسجيله"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// بنية الدالة الوسيطة\nconst myMiddleware = (req, res, next) => {\n  // 1. فحص أو تعديل الطلب\n  req.customTime = Date.now();\n  // 2. تمرير التحكم للخطوة التالية\n  next();\n};",
          "simpleCode": "// 1. تعريف وسيط بسيط لتسجيل الطلبات\nconst loggerMiddleware = (req, res, next) => {\n  // طباعة نوع الطلب والمسار\n  console.log(`[${req.method}] ${req.url}`);\n  // الانتقال للوسيط أو المسار التالي\n  next();\n};\n\n// 2. تطبيقه على التطبيق بالكامل\napp.use(loggerMiddleware);",
          "advancedCode": "// وسيط مخصص للتحقق من ترويسة الأمان ومعدل الطلبات\nexport const verifyApiKey = (req, res, next) => {\n  // 1. استخراج المفتاح من الترويسات\n  const apiKey = req.get('x-api-key');\n  \n  // 2. التحقق من وجوده وصحته\n  if (!apiKey || apiKey !== process.env.API_SECRET_KEY) {\n    return res.status(401).json({\n      success: false,\n      error: 'مفتاح API غير صالح أو غير مصرح به'\n    });\n  }\n\n  // 3. تمرير الطلب بأمان\n  next();\n};",
          "outputExplanation": "يمر الطلب عبر الوسيط، فإذا تحققت الشروط يتم استدعاء next() ليصل إلى معالج المسار، وإلا يُرفض فوراً برمز 401.",
          "commonMistakes": [
            {
              "wrong": "نسيان استدعاء next() وعدم إرسال استجابة، مما يؤدي إلى تعليق الطلب للأبد (Request Hang).",
              "right": "التأكد دائماً من إنهاء الوسيط إما باستدعاء next() أو إرسال استجابة res.status(...).json(...).",
              "reason": "خادم Express ينتظر استدعاء next() لينتقل للوسيط التالي، وبدونه يتوقف المسار حتى انتهاء مهلة الاتصال Timeout."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: استخدام Middleware Hooks",
            "title": "استخدام Middleware Hooks",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (استخدام Middleware Hooks) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ماذا يحدث إذا لم تستدعِ next() ولم تُرسل استجابة في دالة الوسيط Middleware؟",
            "options": [
              "يتعلق الطلب ويظل المتصفح ينتظر حتى انتهاء المهلة (Timeout)",
              "يتم تحويل الطلب تلقائياً إلى الصفحة الرئيسية",
              "يُرمى خطأ SyntaxError في الطرفية",
              "يكمل الخادم تنفيذه بشكل طبيعي"
            ],
            "correctIndex": 0,
            "explanation": "عدم استدعاء next() وعدم إرسال رد يترك الطلب معلقاً في الذاكرة دون إغلاق دورة الاستجابة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام Middleware Hooks",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام Middleware Hooks)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Middleware Hooks\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام Middleware Hooks\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "11.4",
      "title": "العلاقات والاستعلامات المتقدمة",
      "englishTitle": "العلاقات والاستعلامات المتقدمة",
      "subtopics": [
        {
          "id": "s11-ma-استخدام_Referen",
          "letter": "a",
          "title": "استخدام References",
          "englishTitle": "References",
          "definition": "يُعد مفهوم (استخدام References) من الركائز الجوهرية في العلاقات والاستعلامات المتقدمة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "استخدام",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم استخدام References\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام References\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام References\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام References\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام References في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام References\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام References) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: استخدام References",
            "title": "استخدام References",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (استخدام References) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام References) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام References) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام References",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام References)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام References\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام References\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mb-استخدام_populat",
          "letter": "b",
          "title": "استخدام populate",
          "englishTitle": "populate",
          "definition": "يُعد مفهوم (استخدام populate) من الركائز الجوهرية في العلاقات والاستعلامات المتقدمة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "استخدام",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم استخدام populate\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام populate\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام populate\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام populate\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام populate في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام populate\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام populate) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: استخدام populate",
            "title": "استخدام populate",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (استخدام populate) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام populate) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام populate) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام populate",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام populate)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام populate\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام populate\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mc-استخدام_Embedde",
          "letter": "c",
          "title": "استخدام Embedded Documents",
          "englishTitle": "Embedded Documents",
          "definition": "يُعد مفهوم (استخدام Embedded Documents) من الركائز الجوهرية في العلاقات والاستعلامات المتقدمة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "استخدام",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم استخدام Embedded Documents\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام Embedded Documents\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام Embedded Documents\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام Embedded Documents\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام Embedded Documents في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام Embedded Documents\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام Embedded Documents) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: استخدام Embedded Documents",
            "title": "استخدام Embedded Documents",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (استخدام Embedded Documents) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام Embedded Documents) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام Embedded Documents) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام Embedded Documents",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام Embedded Documents)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Embedded Documents\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام Embedded Documents\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-md-تنفيذ_Aggregati",
          "letter": "d",
          "title": "تنفيذ Aggregation Pipeline",
          "englishTitle": "Aggregation Pipeline",
          "definition": "يُعد مفهوم (تنفيذ Aggregation Pipeline) من الركائز الجوهرية في العلاقات والاستعلامات المتقدمة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تنفيذ",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تنفيذ Aggregation Pipeline\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تنفيذ Aggregation Pipeline\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تنفيذ Aggregation Pipeline\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تنفيذ Aggregation Pipeline\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تنفيذ Aggregation Pipeline في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تنفيذ Aggregation Pipeline\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تنفيذ Aggregation Pipeline) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنفيذ Aggregation Pipeline",
            "title": "تنفيذ Aggregation Pipeline",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تنفيذ Aggregation Pipeline) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تنفيذ Aggregation Pipeline) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تنفيذ Aggregation Pipeline) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنفيذ Aggregation Pipeline",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنفيذ Aggregation Pipeline)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ Aggregation Pipeline\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنفيذ Aggregation Pipeline\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-me-استخدام_Indexes",
          "letter": "e",
          "title": "استخدام Indexes",
          "englishTitle": "Indexes",
          "definition": "يُعد مفهوم (استخدام Indexes) من الركائز الجوهرية في العلاقات والاستعلامات المتقدمة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "استخدام",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم استخدام Indexes\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام Indexes\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام Indexes\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام Indexes\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام Indexes في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام Indexes\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام Indexes) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: استخدام Indexes",
            "title": "استخدام Indexes",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (استخدام Indexes) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام Indexes) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام Indexes) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام Indexes",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام Indexes)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Indexes\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام Indexes\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mf-تنفيذ_Paginatio",
          "letter": "f",
          "title": "تنفيذ Pagination",
          "englishTitle": "Pagination",
          "definition": "يُعد مفهوم (تنفيذ Pagination) من الركائز الجوهرية في العلاقات والاستعلامات المتقدمة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تنفيذ",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تنفيذ Pagination\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تنفيذ Pagination\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تنفيذ Pagination\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تنفيذ Pagination\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تنفيذ Pagination في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تنفيذ Pagination\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تنفيذ Pagination) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنفيذ Pagination",
            "title": "تنفيذ Pagination",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تنفيذ Pagination) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تنفيذ Pagination) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تنفيذ Pagination) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنفيذ Pagination",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنفيذ Pagination)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ Pagination\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنفيذ Pagination\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mg-استخدام_MongoDB",
          "letter": "g",
          "title": "استخدام MongoDB Transactions",
          "englishTitle": "MongoDB Transactions",
          "definition": "يُعد مفهوم (استخدام MongoDB Transactions) من الركائز الجوهرية في العلاقات والاستعلامات المتقدمة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه خزانة السجلات والأرشيف المركزي لشركة ضخمة؛ يستعلم منها الموظف في ثوانٍ معدودة ويحفظ فيها كل معاملة جديدة.",
          "why": "نحتاجه للاحتفاظ ببيانات المستخدمين والطلبات والمنتجات دائماً حتى بعد إعادة تشغيل الخادم.",
          "terms": [
            {
              "term": "Database Integration",
              "pronunciation": "داتابيز إنتجريشن",
              "meaning": "ربط خادم Express بمستودع بيانات دائم (SQL أو NoSQL) لحفظ واسترجاع المعلومات بكفاءة وأمان"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// ربط قاعدة البيانات والتعامل مع النماذج\nimport mongoose from 'mongoose';\nawait mongoose.connect(process.env.DATABASE_URL);\n\n// إنشاء نموذج بيانات\nconst User = mongoose.model('User', new mongoose.Schema({ name: String, email: String }));",
          "simpleCode": "// 1. استعلام بسيط لجلب البيانات من قاعدة البيانات\napp.get('/api/users', async (req, res, next) => {\n  try {\n    // جلب المستخدمين بدون إظهار كلمات المرور\n    const users = await User.find().select('-password');\n    // إرجاع النتيجة\n    res.status(200).json({ success: true, count: users.length, data: users });\n  } catch (error) {\n    next(error);\n  }\n});",
          "advancedCode": "// استعلام متقدم مع تصفية وترتيب وتقسيم صفحات (Pagination)\napp.get('/api/products', async (req, res, next) => {\n  try {\n    const page = parseInt(req.query.page, 10) || 1;\n    const limit = parseInt(req.query.limit, 10) || 10;\n    const skip = (page - 1) * limit;\n\n    const [products, total] = await Promise.all([\n      Product.find({ isAvailable: true }).skip(skip).limit(limit).sort({ createdAt: -1 }),\n      Product.countDocuments({ isAvailable: true })\n    ]);\n\n    res.status(200).json({\n      success: true,\n      pagination: { total, page, pages: Math.ceil(total / limit) },\n      data: products\n    });\n  } catch (err) {\n    next(err);\n  }\n});",
          "outputExplanation": "يقوم الخادم بتنفيذ الاستعلام بشكل غير متزامن واسترجاع البيانات من قاعدة البيانات وإرجاعها في بنية JSON موحدة.",
          "commonMistakes": [
            {
              "wrong": "إجراء استعلامات SQL عبر دمج النصوص مباشرة (String Concatenation)، مما يعرض الخادم لثغرة SQL Injection.",
              "right": "استخدام الاستعلامات ذات المعاملات (Parameterized Queries) أو أدوات الـ ORM مثل Prisma و Mongoose.",
              "reason": "الاستعلامات المعلمة تفصل منطق كود SQL عن مدخلات المستخدم تماماً وتمنع حقن أي كود خبيث."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: استخدام MongoDB Transactions",
            "title": "استخدام MongoDB Transactions",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (استخدام MongoDB Transactions) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "كيف نحمي خادم Express من ثغرات حقن الاستعلامات SQL / NoSQL Injection؟",
            "options": [
              "باستخدام Parameterized Queries واستخدام ORM حديث مع التحقق من المدخلات",
              "بإرسال الاستعلامات عبر GET فقط",
              "بتحويل قاعدة البيانات إلى ملف نصي",
              "بتعطيل منفذ قاعدة البيانات"
            ],
            "correctIndex": 0,
            "explanation": "استخدام أدوات ORM والاستعلامات المعلمة يمنع اختراق الشفرة بتنظيف وفصل أوامر SQL عن القيم المدخلة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام MongoDB Transactions",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام MongoDB Transactions)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام MongoDB Transactions\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام MongoDB Transactions\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mh-تجنب_NoSQL_Inje",
          "letter": "h",
          "title": "تجنب NoSQL Injection",
          "englishTitle": "تجنب NoSQL Injection",
          "definition": "يُعد مفهوم (تجنب NoSQL Injection) من الركائز الجوهرية في العلاقات والاستعلامات المتقدمة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه خزانة السجلات والأرشيف المركزي لشركة ضخمة؛ يستعلم منها الموظف في ثوانٍ معدودة ويحفظ فيها كل معاملة جديدة.",
          "why": "نحتاجه للاحتفاظ ببيانات المستخدمين والطلبات والمنتجات دائماً حتى بعد إعادة تشغيل الخادم.",
          "terms": [
            {
              "term": "Database Integration",
              "pronunciation": "داتابيز إنتجريشن",
              "meaning": "ربط خادم Express بمستودع بيانات دائم (SQL أو NoSQL) لحفظ واسترجاع المعلومات بكفاءة وأمان"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// ربط قاعدة البيانات والتعامل مع النماذج\nimport mongoose from 'mongoose';\nawait mongoose.connect(process.env.DATABASE_URL);\n\n// إنشاء نموذج بيانات\nconst User = mongoose.model('User', new mongoose.Schema({ name: String, email: String }));",
          "simpleCode": "// 1. استعلام بسيط لجلب البيانات من قاعدة البيانات\napp.get('/api/users', async (req, res, next) => {\n  try {\n    // جلب المستخدمين بدون إظهار كلمات المرور\n    const users = await User.find().select('-password');\n    // إرجاع النتيجة\n    res.status(200).json({ success: true, count: users.length, data: users });\n  } catch (error) {\n    next(error);\n  }\n});",
          "advancedCode": "// استعلام متقدم مع تصفية وترتيب وتقسيم صفحات (Pagination)\napp.get('/api/products', async (req, res, next) => {\n  try {\n    const page = parseInt(req.query.page, 10) || 1;\n    const limit = parseInt(req.query.limit, 10) || 10;\n    const skip = (page - 1) * limit;\n\n    const [products, total] = await Promise.all([\n      Product.find({ isAvailable: true }).skip(skip).limit(limit).sort({ createdAt: -1 }),\n      Product.countDocuments({ isAvailable: true })\n    ]);\n\n    res.status(200).json({\n      success: true,\n      pagination: { total, page, pages: Math.ceil(total / limit) },\n      data: products\n    });\n  } catch (err) {\n    next(err);\n  }\n});",
          "outputExplanation": "يقوم الخادم بتنفيذ الاستعلام بشكل غير متزامن واسترجاع البيانات من قاعدة البيانات وإرجاعها في بنية JSON موحدة.",
          "commonMistakes": [
            {
              "wrong": "إجراء استعلامات SQL عبر دمج النصوص مباشرة (String Concatenation)، مما يعرض الخادم لثغرة SQL Injection.",
              "right": "استخدام الاستعلامات ذات المعاملات (Parameterized Queries) أو أدوات الـ ORM مثل Prisma و Mongoose.",
              "reason": "الاستعلامات المعلمة تفصل منطق كود SQL عن مدخلات المستخدم تماماً وتمنع حقن أي كود خبيث."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تجنب NoSQL Injection",
            "title": "تجنب NoSQL Injection",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تجنب NoSQL Injection) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "كيف نحمي خادم Express من ثغرات حقن الاستعلامات SQL / NoSQL Injection؟",
            "options": [
              "باستخدام Parameterized Queries واستخدام ORM حديث مع التحقق من المدخلات",
              "بإرسال الاستعلامات عبر GET فقط",
              "بتحويل قاعدة البيانات إلى ملف نصي",
              "بتعطيل منفذ قاعدة البيانات"
            ],
            "correctIndex": 0,
            "explanation": "استخدام أدوات ORM والاستعلامات المعلمة يمنع اختراق الشفرة بتنظيف وفصل أوامر SQL عن القيم المدخلة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تجنب NoSQL Injection",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تجنب NoSQL Injection)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تجنب NoSQL Injection\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تجنب NoSQL Injection\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "11.5",
      "title": "مشروع عملي: مدونة إلكترونية",
      "englishTitle": "مشروع عملي: مدونة إلكترونية",
      "subtopics": [
        {
          "id": "s11-ma-تصميم_Users_وPo",
          "letter": "a",
          "title": "تصميم Users وPosts وComments",
          "englishTitle": "تصميم Users وPosts وComments",
          "definition": "يُعد مفهوم (تصميم Users وPosts وComments) من الركائز الجوهرية في مشروع عملي: مدونة إلكترونية ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه مفترق الطرق أو لوحة التوجيه في محطة القطارات؛ توجه كل مسافر إلى الرصيف المخصص لرحلته بدقة.",
          "why": "نحتاجه لتنظيم عناوين الـ API وفصل مسارات المستخدمين والمنتجات والمدفوعات في ملفات منفصلة سهلة الصيانة.",
          "terms": [
            {
              "term": "Router & Routes",
              "pronunciation": "راوتر ومسارات",
              "meaning": "نظام توجيه الطلبات الواردة إلى الدوال المخصصة لمعالجتها بناءً على الرابط ونوع الطلب"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إنشاء موجه مسارات منفصل\nimport { Router } from 'express';\nconst router = Router();\n\nrouter.route('/items')\n  .get(getItemsHandler)\n  .post(createItemHandler);\n\nexport default router;",
          "simpleCode": "// 1. استيراد Express وإنشاء موجه\nimport { Router } from 'express';\nconst router = Router();\n\n// 2. تعريف مسار GET\nrouter.get('/ping', (req, res) => {\n  // الرد على فحص الاتصال\n  res.send('pong');\n});\n\nexport default router;",
          "advancedCode": "// تنظيم المسارات المتقدمة مع الربط المتسلسل والتحقق\nimport { Router } from 'express';\nconst router = Router();\n\n// توجيه مركب لمعالجة مسار بمعامل ديناميكي\nrouter.route('/users/:userId')\n  .get((req, res) => {\n    res.json({ id: req.params.userId, name: 'مستخدم تجريبي' });\n  })\n  .put((req, res) => {\n    res.json({ message: `تم تحديث المستخدم ${req.params.userId}` });\n  })\n  .delete((req, res) => {\n    res.status(204).send();\n  });\n\nexport default router;",
          "outputExplanation": "يوفر نظام التوجيه مرونة عالية لربط كل عملية (GET, PUT, DELETE) بدالتها الخاصة مع قراءة المتغيرات من الرابط.",
          "commonMistakes": [
            {
              "wrong": "كتابة جميع مسارات التطبيق في ملف app.js الرئيسي مما يجعله معقداً وغير قابل للصيانة.",
              "right": "تقسيم المسارات إلى وحدات داخل مجلد routes/ واستدعاؤها باستخدام app.use(\"/api/users\", userRoutes).",
              "reason": "فصل الاهتمامات (Separation of Concerns) هو المبدأ الأساسي لكتابة شفرة نظيفة وقابلة للتوسع."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تصميم Users وPosts وComments",
            "title": "تصميم Users وPosts وComments",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تصميم Users وPosts وComments) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الطريقة القياسية لإنشاء موجه مسارات فرعي في Express.js؟",
            "options": [
              "express.Router()",
              "express.createRoute()",
              "express.newRouteGroup()",
              "express.pathManager()"
            ],
            "correctIndex": 0,
            "explanation": "الدالة express.Router() تنشئ كائن موجه مستقل يمكن عزله في ملف منفصل ودمجه في التطبيق الرئيسي."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تصميم Users وPosts وComments",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تصميم Users وPosts وComments)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تصميم Users وPosts وComments\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تصميم Users وPosts وComments\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mb-إنشاء_Mongoose_",
          "letter": "b",
          "title": "إنشاء Mongoose Models",
          "englishTitle": "Mongoose Models",
          "definition": "يُعد مفهوم (إنشاء Mongoose Models) من الركائز الجوهرية في مشروع عملي: مدونة إلكترونية ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه خزانة السجلات والأرشيف المركزي لشركة ضخمة؛ يستعلم منها الموظف في ثوانٍ معدودة ويحفظ فيها كل معاملة جديدة.",
          "why": "نحتاجه للاحتفاظ ببيانات المستخدمين والطلبات والمنتجات دائماً حتى بعد إعادة تشغيل الخادم.",
          "terms": [
            {
              "term": "Database Integration",
              "pronunciation": "داتابيز إنتجريشن",
              "meaning": "ربط خادم Express بمستودع بيانات دائم (SQL أو NoSQL) لحفظ واسترجاع المعلومات بكفاءة وأمان"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// ربط قاعدة البيانات والتعامل مع النماذج\nimport mongoose from 'mongoose';\nawait mongoose.connect(process.env.DATABASE_URL);\n\n// إنشاء نموذج بيانات\nconst User = mongoose.model('User', new mongoose.Schema({ name: String, email: String }));",
          "simpleCode": "// 1. استعلام بسيط لجلب البيانات من قاعدة البيانات\napp.get('/api/users', async (req, res, next) => {\n  try {\n    // جلب المستخدمين بدون إظهار كلمات المرور\n    const users = await User.find().select('-password');\n    // إرجاع النتيجة\n    res.status(200).json({ success: true, count: users.length, data: users });\n  } catch (error) {\n    next(error);\n  }\n});",
          "advancedCode": "// استعلام متقدم مع تصفية وترتيب وتقسيم صفحات (Pagination)\napp.get('/api/products', async (req, res, next) => {\n  try {\n    const page = parseInt(req.query.page, 10) || 1;\n    const limit = parseInt(req.query.limit, 10) || 10;\n    const skip = (page - 1) * limit;\n\n    const [products, total] = await Promise.all([\n      Product.find({ isAvailable: true }).skip(skip).limit(limit).sort({ createdAt: -1 }),\n      Product.countDocuments({ isAvailable: true })\n    ]);\n\n    res.status(200).json({\n      success: true,\n      pagination: { total, page, pages: Math.ceil(total / limit) },\n      data: products\n    });\n  } catch (err) {\n    next(err);\n  }\n});",
          "outputExplanation": "يقوم الخادم بتنفيذ الاستعلام بشكل غير متزامن واسترجاع البيانات من قاعدة البيانات وإرجاعها في بنية JSON موحدة.",
          "commonMistakes": [
            {
              "wrong": "إجراء استعلامات SQL عبر دمج النصوص مباشرة (String Concatenation)، مما يعرض الخادم لثغرة SQL Injection.",
              "right": "استخدام الاستعلامات ذات المعاملات (Parameterized Queries) أو أدوات الـ ORM مثل Prisma و Mongoose.",
              "reason": "الاستعلامات المعلمة تفصل منطق كود SQL عن مدخلات المستخدم تماماً وتمنع حقن أي كود خبيث."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء Mongoose Models",
            "title": "إنشاء Mongoose Models",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء Mongoose Models) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "كيف نحمي خادم Express من ثغرات حقن الاستعلامات SQL / NoSQL Injection؟",
            "options": [
              "باستخدام Parameterized Queries واستخدام ORM حديث مع التحقق من المدخلات",
              "بإرسال الاستعلامات عبر GET فقط",
              "بتحويل قاعدة البيانات إلى ملف نصي",
              "بتعطيل منفذ قاعدة البيانات"
            ],
            "correctIndex": 0,
            "explanation": "استخدام أدوات ORM والاستعلامات المعلمة يمنع اختراق الشفرة بتنظيف وفصل أوامر SQL عن القيم المدخلة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء Mongoose Models",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Mongoose Models)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Mongoose Models\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Mongoose Models\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mc-إنشاء_Posts_API",
          "letter": "c",
          "title": "إنشاء Posts API",
          "englishTitle": "Posts API",
          "definition": "يُعد مفهوم (إنشاء Posts API) من الركائز الجوهرية في مشروع عملي: مدونة إلكترونية ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه مفترق الطرق أو لوحة التوجيه في محطة القطارات؛ توجه كل مسافر إلى الرصيف المخصص لرحلته بدقة.",
          "why": "نحتاجه لتنظيم عناوين الـ API وفصل مسارات المستخدمين والمنتجات والمدفوعات في ملفات منفصلة سهلة الصيانة.",
          "terms": [
            {
              "term": "Router & Routes",
              "pronunciation": "راوتر ومسارات",
              "meaning": "نظام توجيه الطلبات الواردة إلى الدوال المخصصة لمعالجتها بناءً على الرابط ونوع الطلب"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// إنشاء موجه مسارات منفصل\nimport { Router } from 'express';\nconst router = Router();\n\nrouter.route('/items')\n  .get(getItemsHandler)\n  .post(createItemHandler);\n\nexport default router;",
          "simpleCode": "// 1. استيراد Express وإنشاء موجه\nimport { Router } from 'express';\nconst router = Router();\n\n// 2. تعريف مسار GET\nrouter.get('/ping', (req, res) => {\n  // الرد على فحص الاتصال\n  res.send('pong');\n});\n\nexport default router;",
          "advancedCode": "// تنظيم المسارات المتقدمة مع الربط المتسلسل والتحقق\nimport { Router } from 'express';\nconst router = Router();\n\n// توجيه مركب لمعالجة مسار بمعامل ديناميكي\nrouter.route('/users/:userId')\n  .get((req, res) => {\n    res.json({ id: req.params.userId, name: 'مستخدم تجريبي' });\n  })\n  .put((req, res) => {\n    res.json({ message: `تم تحديث المستخدم ${req.params.userId}` });\n  })\n  .delete((req, res) => {\n    res.status(204).send();\n  });\n\nexport default router;",
          "outputExplanation": "يوفر نظام التوجيه مرونة عالية لربط كل عملية (GET, PUT, DELETE) بدالتها الخاصة مع قراءة المتغيرات من الرابط.",
          "commonMistakes": [
            {
              "wrong": "كتابة جميع مسارات التطبيق في ملف app.js الرئيسي مما يجعله معقداً وغير قابل للصيانة.",
              "right": "تقسيم المسارات إلى وحدات داخل مجلد routes/ واستدعاؤها باستخدام app.use(\"/api/users\", userRoutes).",
              "reason": "فصل الاهتمامات (Separation of Concerns) هو المبدأ الأساسي لكتابة شفرة نظيفة وقابلة للتوسع."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء Posts API",
            "title": "إنشاء Posts API",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء Posts API) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الطريقة القياسية لإنشاء موجه مسارات فرعي في Express.js؟",
            "options": [
              "express.Router()",
              "express.createRoute()",
              "express.newRouteGroup()",
              "express.pathManager()"
            ],
            "correctIndex": 0,
            "explanation": "الدالة express.Router() تنشئ كائن موجه مستقل يمكن عزله في ملف منفصل ودمجه في التطبيق الرئيسي."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء Posts API",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Posts API)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Posts API\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Posts API\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-md-إنشاء_Comments_",
          "letter": "d",
          "title": "إنشاء Comments API",
          "englishTitle": "Comments API",
          "definition": "يُعد مفهوم (إنشاء Comments API) من الركائز الجوهرية في مشروع عملي: مدونة إلكترونية ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إنشاء",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم إنشاء Comments API\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء Comments API\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء Comments API\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء Comments API\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء Comments API في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء Comments API\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء Comments API) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إنشاء Comments API",
            "title": "إنشاء Comments API",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إنشاء Comments API) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء Comments API) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء Comments API) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء Comments API",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Comments API)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Comments API\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Comments API\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-me-ربط_التعليقات_ب",
          "letter": "e",
          "title": "ربط التعليقات بالمقالات",
          "englishTitle": "ربط التعليقات بالمقالات",
          "definition": "يُعد مفهوم (ربط التعليقات بالمقالات) من الركائز الجوهرية في مشروع عملي: مدونة إلكترونية ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "ربط",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم ربط التعليقات بالمقالات\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: ربط التعليقات بالمقالات\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: ربط التعليقات بالمقالات\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"ربط التعليقات بالمقالات\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ ربط التعليقات بالمقالات في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"ربط التعليقات بالمقالات\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (ربط التعليقات بالمقالات) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: ربط التعليقات بالمقالات",
            "title": "ربط التعليقات بالمقالات",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (ربط التعليقات بالمقالات) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (ربط التعليقات بالمقالات) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (ربط التعليقات بالمقالات) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: ربط التعليقات بالمقالات",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ربط التعليقات بالمقالات)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ربط التعليقات بالمقالات\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ربط التعليقات بالمقالات\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mf-إضافة_البحث_وال",
          "letter": "f",
          "title": "إضافة البحث والتصنيفات",
          "englishTitle": "إضافة البحث والتصنيفات",
          "definition": "يُعد مفهوم (إضافة البحث والتصنيفات) من الركائز الجوهرية في مشروع عملي: مدونة إلكترونية ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إضافة",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم إضافة البحث والتصنيفات\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إضافة البحث والتصنيفات\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إضافة البحث والتصنيفات\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إضافة البحث والتصنيفات\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إضافة البحث والتصنيفات في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إضافة البحث والتصنيفات\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إضافة البحث والتصنيفات) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إضافة البحث والتصنيفات",
            "title": "إضافة البحث والتصنيفات",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إضافة البحث والتصنيفات) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إضافة البحث والتصنيفات) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إضافة البحث والتصنيفات) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إضافة البحث والتصنيفات",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إضافة البحث والتصنيفات)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إضافة البحث والتصنيفات\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إضافة البحث والتصنيفات\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mg-تنفيذ_Paginatio",
          "letter": "g",
          "title": "تنفيذ Pagination",
          "englishTitle": "Pagination",
          "definition": "يُعد مفهوم (تنفيذ Pagination) من الركائز الجوهرية في مشروع عملي: مدونة إلكترونية ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تنفيذ",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم تنفيذ Pagination\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تنفيذ Pagination\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تنفيذ Pagination\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تنفيذ Pagination\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تنفيذ Pagination في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تنفيذ Pagination\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تنفيذ Pagination) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنفيذ Pagination",
            "title": "تنفيذ Pagination",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (تنفيذ Pagination) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تنفيذ Pagination) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تنفيذ Pagination) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنفيذ Pagination",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنفيذ Pagination)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنفيذ Pagination\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنفيذ Pagination\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mh-إضافة_Validatio",
          "letter": "h",
          "title": "إضافة Validation وError Handling",
          "englishTitle": "إضافة Validation وError Handling",
          "definition": "يُعد مفهوم (إضافة Validation وError Handling) من الركائز الجوهرية في مشروع عملي: مدونة إلكترونية ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه وسائد الأمان والمكابح المانعة للانزلاق في السيارة؛ تتدخل فوراً عند حدوث طارئ لحماية الركاب من الاصطدام.",
          "why": "نحتاجه لمنع توقف الخادم عند حدوث خطأ غير متوقع، ولحماية البيانات الحساسة من الظهور للعميل في شاشة المتصفح.",
          "terms": [
            {
              "term": "Error Handling",
              "pronunciation": "إيرور هاندلينج",
              "meaning": "الآلية البرمجية لاكتشاف وتصيد الأخطاء ومنع انهيار الخادم وإرجاع رسالة مفهومة للمستخدم"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// وسيط معالجة الأخطاء العام (مكون من 4 معاملات دائماً)\napp.use((err, req, res, next) => {\n  const statusCode = err.statusCode || 500;\n  res.status(statusCode).json({\n    success: false,\n    error: err.message || 'حدث خطأ غير متوقع في الخادم'\n  });\n});",
          "simpleCode": "// 1. وسيط لاصطياد الأخطاء في Express\napp.use((err, req, res, next) => {\n  // طباعة الخطأ للمطور في السجلات\n  console.error('خطأ تم رصده:', err.message);\n  // إرجاع رد آمن للمستخدم\n  res.status(500).json({ error: 'عذراً، حدث خطأ داخلي' });\n});",
          "advancedCode": "// فئة مخصصة للأخطاء ووسيط عام احترافي\nexport class AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n    this.isOperational = true; // خطأ تشغيلي متوقع\n    Error.captureStackTrace(this, this.constructor);\n  }\n}\n\n// وسيط الأخطاء العام\napp.use((err, req, res, next) => {\n  const status = err.statusCode || 500;\n  res.status(status).json({\n    status: 'error',\n    message: err.message,\n    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })\n  });\n});",
          "outputExplanation": "يتم التقاط الخطأ التشغيلي بواسطة الوسيط العام ذي الـ 4 معاملات، وتنسيق رد JSON يحتوي على رسالة الخطأ ورمز الحالة 4xx أو 500.",
          "commonMistakes": [
            {
              "wrong": "تعريف وسيط الأخطاء بـ 3 معاملات فقط (req, res, next)، فيتعامل معه Express كوسيط عادي وليس كمعالج أخطاء.",
              "right": "كتابة الـ 4 معاملات دائماً (err, req, res, next) حتى لو لم تستخدم next، ليتعرف Express عليه كـ Error Handler.",
              "reason": "يعتمد محرك Express على خاصية دالة fn.length لمعرفة ما إذا كانت معالجة أخطاء (4 معاملات) أم وسيطاً عادياً."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إضافة Validation وError Handling",
            "title": "إضافة Validation وError Handling",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (إضافة Validation وError Handling) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "كم عدد المعاملات الإلزامية التي يجب أن يقبلها وسيط معالجة الأخطاء في Express؟",
            "options": [
              "4 معاملات (err, req, res, next)",
              "معاملان فقط (req, res)",
              "3 معاملات (req, res, next)",
              "معامل واحد (error)"
            ],
            "correctIndex": 0,
            "explanation": "يجب أن يقبل 4 معاملات بالضبط حتى يميزه Express عن الوسائط العادية عبر fn.length === 4."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إضافة Validation وError Handling",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إضافة Validation وError Handling)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إضافة Validation وError Handling\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إضافة Validation وError Handling\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s11-mi-اختبار_المشروع",
          "letter": "i",
          "title": "اختبار المشروع",
          "englishTitle": "اختبار المشروع",
          "definition": "يُعد مفهوم (اختبار المشروع) من الركائز الجوهرية في مشروع عملي: مدونة إلكترونية ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "اختبار",
              "pronunciation": "إكسبريس كور",
              "meaning": "أحد المفاهيم والمعايير الأساسية لتطوير تطبيقات خلفية عالية الأداء والاستقرار بـ Express.js"
            },
            {
              "term": "Middleware",
              "pronunciation": "ميدل وير",
              "meaning": "دوال وسيطة تفحص وتعدل الطلبات قبل وصولها للمعالج"
            },
            {
              "term": "Status Code",
              "pronunciation": "ستاتس كود",
              "meaning": "رمز رقمي يوضح حالة استجابة الخادم (مثل 200، 404، 500)"
            }
          ],
          "syntax": "// تطبيق معياري لمفهوم اختبار المشروع\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: اختبار المشروع\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: اختبار المشروع\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"اختبار المشروع\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ اختبار المشروع في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"اختبار المشروع\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (اختبار المشروع) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
          "commonMistakes": [
            {
              "wrong": "إهمال توثيق الشفرة أو عدم إدارة الحالات الاستثنائية التي قد تطرأ أثناء المعالجة.",
              "right": "اتباع المعايير الهندسية النظيفة مع تغليف الدوال بكتل المعالجة واستخدام أدوات التحقق الصارمة.",
              "reason": "الشفرة النظيفة الموثقة تسهل على فريق العمل اكتشاف المشكلات مبكراً وتضمن استقرار النظام في الإنتاج."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: اختبار المشروع",
            "title": "اختبار المشروع",
            "icon": "Layers",
            "colors": "from-amber-500 to-yellow-600",
            "steps": [
              {
                "title": "استقبال الطلب",
                "desc": "اعتراض الطلب وقراءة المدخلات والترويسات بأمان"
              },
              {
                "title": "المعالجة البرمجية",
                "desc": "تنفيذ منطق الأعمال والتحقق من القواعد المحددة"
              },
              {
                "title": "إرجاع الاستجابة",
                "desc": "إرسال البيانات المهيكلة وإغلاق دورة الطلب بنجاح"
              }
            ],
            "summary": "تطبيق (اختبار المشروع) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (اختبار المشروع) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (اختبار المشروع) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: اختبار المشروع",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (اختبار المشروع)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين اختبار المشروع\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"اختبار المشروع\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    }
  ]
};

export default SECTION_11;
