// src/data/sections/section20.js
// القسم العشرون: توثيق APIs وGraphQL والتقنيات البديلة
export const SECTION_20 = {
  "id": 20,
  "number": "20",
  "title": "القسم العشرون: توثيق APIs وGraphQL والتقنيات البديلة",
  "englishTitle": "Section 20: القسم العشرون: توثيق APIs وGraphQL والتقنيات البديلة",
  "badge": "محترف",
  "description": "منهج تعليمي شامل يغطي القسم العشرون: توثيق APIs وGraphQL والتقنيات البديلة بدقة تفصيلية وأمثلة عملية وتطبيق مباشر في Express.js.",
  "topics": [
    {
      "id": "20.1",
      "title": "توثيق REST API",
      "englishTitle": "توثيق REST API",
      "subtopics": [
        {
          "id": "s20-ma-أهمية_API_Docum",
          "letter": "a",
          "title": "أهمية API Documentation",
          "englishTitle": "أهمية API Documentation",
          "definition": "يُعد مفهوم (أهمية API Documentation) من الركائز الجوهرية في توثيق REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "أهمية",
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
          "syntax": "// تطبيق معياري لمفهوم أهمية API Documentation\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: أهمية API Documentation\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: أهمية API Documentation\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"أهمية API Documentation\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ أهمية API Documentation في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"أهمية API Documentation\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (أهمية API Documentation) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: أهمية API Documentation",
            "title": "أهمية API Documentation",
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
            "summary": "تطبيق (أهمية API Documentation) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (أهمية API Documentation) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (أهمية API Documentation) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: أهمية API Documentation",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (أهمية API Documentation)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين أهمية API Documentation\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"أهمية API Documentation\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mb-ما_هو_OpenAPI؟",
          "letter": "b",
          "title": "ما هو OpenAPI؟",
          "englishTitle": "OpenAPI",
          "definition": "يُعد مفهوم (ما هو OpenAPI؟) من الركائز الجوهرية في توثيق REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "ما",
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
          "syntax": "// تطبيق معياري لمفهوم ما هو OpenAPI؟\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: ما هو OpenAPI؟\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: ما هو OpenAPI؟\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"ما هو OpenAPI؟\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ ما هو OpenAPI؟ في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"ما هو OpenAPI؟\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (ما هو OpenAPI؟) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: ما هو OpenAPI؟",
            "title": "ما هو OpenAPI؟",
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
            "summary": "تطبيق (ما هو OpenAPI؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (ما هو OpenAPI؟) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (ما هو OpenAPI؟) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: ما هو OpenAPI؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ما هو OpenAPI؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو OpenAPI؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ما هو OpenAPI؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mc-ما_هو_Swagger_U",
          "letter": "c",
          "title": "ما هو Swagger UI؟",
          "englishTitle": "Swagger UI",
          "definition": "يُعد مفهوم (ما هو Swagger UI؟) من الركائز الجوهرية في توثيق REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "ما",
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
          "syntax": "// تطبيق معياري لمفهوم ما هو Swagger UI؟\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: ما هو Swagger UI؟\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: ما هو Swagger UI؟\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"ما هو Swagger UI؟\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ ما هو Swagger UI؟ في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"ما هو Swagger UI؟\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (ما هو Swagger UI؟) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: ما هو Swagger UI؟",
            "title": "ما هو Swagger UI؟",
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
            "summary": "تطبيق (ما هو Swagger UI؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (ما هو Swagger UI؟) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (ما هو Swagger UI؟) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: ما هو Swagger UI؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ما هو Swagger UI؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو Swagger UI؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ما هو Swagger UI؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-md-إنشاء_OpenAPI_S",
          "letter": "d",
          "title": "إنشاء OpenAPI Specification",
          "englishTitle": "OpenAPI Specification",
          "definition": "يُعد مفهوم (إنشاء OpenAPI Specification) من الركائز الجوهرية في توثيق REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إنشاء OpenAPI Specification\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء OpenAPI Specification\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء OpenAPI Specification\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء OpenAPI Specification\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء OpenAPI Specification في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء OpenAPI Specification\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء OpenAPI Specification) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إنشاء OpenAPI Specification",
            "title": "إنشاء OpenAPI Specification",
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
            "summary": "تطبيق (إنشاء OpenAPI Specification) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء OpenAPI Specification) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء OpenAPI Specification) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء OpenAPI Specification",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء OpenAPI Specification)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء OpenAPI Specification\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء OpenAPI Specification\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-me-توثيق_Request_P",
          "letter": "e",
          "title": "توثيق Request Parameters",
          "englishTitle": "توثيق Request Parameters",
          "definition": "يُعد مفهوم (توثيق Request Parameters) من الركائز الجوهرية في توثيق REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه استمارة الطلب التي يملؤها الزبون في المطعم، يحدد فيها طلبه (Body)، رقم طاولته (Params)، وأي إضافات خاصة (Query).",
          "why": "نحتاجه لقراءة وفحص كل ما يرسله العميل للخادم من معطيات وبيانات لنتخذ القرار المناسب بشأنها.",
          "terms": [
            {
              "term": "Request (req)",
              "pronunciation": "ريكويست",
              "meaning": "كائن الطلب القادم من المتصفح حاملاً البيانات والرؤوس والمعاملات"
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
          "syntax": "// قراءة بيانات الطلب في Express\napp.post('/api/users/:id', (req, res) => {\n  const userId = req.params.id;      // المعاملات في الرابط\n  const query = req.query.filter;     // معلمات الاستعلام\n  const { name, email } = req.body;   // البيانات المرسلة\n  const token = req.headers.authorization; // ترويسة المصادقة\n});",
          "simpleCode": "// 1. استيراد express\nimport express from 'express';\n// 2. إنشاء التطبيق وتفعيل قراءة JSON\nconst app = express();\napp.use(express.json());\n\n// 3. معالجة طلب يقرأ بيانات req\napp.get('/info', (req, res) => {\n  // قراءة معلومات الطلب\n  const userAgent = req.get('User-Agent');\n  // إرجاع النتيجة\n  res.json({ client: userAgent, message: 'تم استلام الطلب' });\n});",
          "advancedCode": "// معالجة متقدمة لبيانات الطلب مع التحقق والتأمين\nimport express from 'express';\n\nconst app = express();\napp.use(express.json({ limit: '1mb' })); // حماية الخادم من الحزم الضخمة\n\napp.post('/api/orders/:orderId', (req, res) => {\n  // 1. استخراج المعاملات ورقم الطلب\n  const { orderId } = req.params;\n  // 2. استخراج خيارات التصفية أو الترتيب\n  const { priority = 'normal' } = req.query;\n  // 3. قراءة بيانات السلة\n  const { items, total } = req.body;\n\n  // 4. الرد بحالة 200 وبيانات منظمة\n  res.status(200).json({\n    success: true,\n    orderId,\n    priority,\n    receivedItems: items?.length || 0,\n    timestamp: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يقوم الخادم باستخراج البيانات وتفكيكها من كائن req، ثم يعيد استجابة بصيغة JSON تؤكد معالجة الطلب بنجاح مع الحالة 200.",
          "commonMistakes": [
            {
              "wrong": "محاولة قراءة req.body دون تفعيل وسيط express.json() في بداية التطبيق فيظهر undefined.",
              "right": "إضافة app.use(express.json()) قبل تعريف المسارات التي تستقبل بيانات POST أو PUT.",
              "reason": "افتراضياً لا يقوم Express بتحليل جسم الطلب القادم بصيغة JSON إلا بعد تمريره على الوسيط المخصص."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: توثيق Request Parameters",
            "title": "توثيق Request Parameters",
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
            "summary": "تطبيق (توثيق Request Parameters) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ماذا سيحدث لو حاولت قراءة req.body دون استدعاء app.use(express.json())؟",
            "options": [
              "ستكون قيمة req.body غير معرفة (undefined)",
              "سيتوقف خادم Node.js عن العمل تماماً",
              "سيقوم Express بتحويلها تلقائياً إلى نص",
              "سيتم إرجاع خطأ 404 Not Found"
            ],
            "correctIndex": 0,
            "explanation": "بدون express.json()، يظل دفق البيانات غير مفسر وتكون قيمة req.body غير معرفة undefined."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: توثيق Request Parameters",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (توثيق Request Parameters)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين توثيق Request Parameters\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"توثيق Request Parameters\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mf-توثيق_Request_B",
          "letter": "f",
          "title": "توثيق Request Body",
          "englishTitle": "توثيق Request Body",
          "definition": "يُعد مفهوم (توثيق Request Body) من الركائز الجوهرية في توثيق REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه استمارة الطلب التي يملؤها الزبون في المطعم، يحدد فيها طلبه (Body)، رقم طاولته (Params)، وأي إضافات خاصة (Query).",
          "why": "نحتاجه لقراءة وفحص كل ما يرسله العميل للخادم من معطيات وبيانات لنتخذ القرار المناسب بشأنها.",
          "terms": [
            {
              "term": "Request (req)",
              "pronunciation": "ريكويست",
              "meaning": "كائن الطلب القادم من المتصفح حاملاً البيانات والرؤوس والمعاملات"
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
          "syntax": "// قراءة بيانات الطلب في Express\napp.post('/api/users/:id', (req, res) => {\n  const userId = req.params.id;      // المعاملات في الرابط\n  const query = req.query.filter;     // معلمات الاستعلام\n  const { name, email } = req.body;   // البيانات المرسلة\n  const token = req.headers.authorization; // ترويسة المصادقة\n});",
          "simpleCode": "// 1. استيراد express\nimport express from 'express';\n// 2. إنشاء التطبيق وتفعيل قراءة JSON\nconst app = express();\napp.use(express.json());\n\n// 3. معالجة طلب يقرأ بيانات req\napp.get('/info', (req, res) => {\n  // قراءة معلومات الطلب\n  const userAgent = req.get('User-Agent');\n  // إرجاع النتيجة\n  res.json({ client: userAgent, message: 'تم استلام الطلب' });\n});",
          "advancedCode": "// معالجة متقدمة لبيانات الطلب مع التحقق والتأمين\nimport express from 'express';\n\nconst app = express();\napp.use(express.json({ limit: '1mb' })); // حماية الخادم من الحزم الضخمة\n\napp.post('/api/orders/:orderId', (req, res) => {\n  // 1. استخراج المعاملات ورقم الطلب\n  const { orderId } = req.params;\n  // 2. استخراج خيارات التصفية أو الترتيب\n  const { priority = 'normal' } = req.query;\n  // 3. قراءة بيانات السلة\n  const { items, total } = req.body;\n\n  // 4. الرد بحالة 200 وبيانات منظمة\n  res.status(200).json({\n    success: true,\n    orderId,\n    priority,\n    receivedItems: items?.length || 0,\n    timestamp: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يقوم الخادم باستخراج البيانات وتفكيكها من كائن req، ثم يعيد استجابة بصيغة JSON تؤكد معالجة الطلب بنجاح مع الحالة 200.",
          "commonMistakes": [
            {
              "wrong": "محاولة قراءة req.body دون تفعيل وسيط express.json() في بداية التطبيق فيظهر undefined.",
              "right": "إضافة app.use(express.json()) قبل تعريف المسارات التي تستقبل بيانات POST أو PUT.",
              "reason": "افتراضياً لا يقوم Express بتحليل جسم الطلب القادم بصيغة JSON إلا بعد تمريره على الوسيط المخصص."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: توثيق Request Body",
            "title": "توثيق Request Body",
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
            "summary": "تطبيق (توثيق Request Body) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ماذا سيحدث لو حاولت قراءة req.body دون استدعاء app.use(express.json())؟",
            "options": [
              "ستكون قيمة req.body غير معرفة (undefined)",
              "سيتوقف خادم Node.js عن العمل تماماً",
              "سيقوم Express بتحويلها تلقائياً إلى نص",
              "سيتم إرجاع خطأ 404 Not Found"
            ],
            "correctIndex": 0,
            "explanation": "بدون express.json()، يظل دفق البيانات غير مفسر وتكون قيمة req.body غير معرفة undefined."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: توثيق Request Body",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (توثيق Request Body)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين توثيق Request Body\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"توثيق Request Body\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mg-توثيق_Response_",
          "letter": "g",
          "title": "توثيق Response Schemas",
          "englishTitle": "توثيق Response Schemas",
          "definition": "يُعد مفهوم (توثيق Response Schemas) من الركائز الجوهرية في توثيق REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: توثيق Response Schemas",
            "title": "توثيق Response Schemas",
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
            "summary": "تطبيق (توثيق Response Schemas) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: توثيق Response Schemas",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (توثيق Response Schemas)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين توثيق Response Schemas\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"توثيق Response Schemas\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mh-توثيق_Authentic",
          "letter": "h",
          "title": "توثيق Authentication",
          "englishTitle": "توثيق Authentication",
          "definition": "يُعد مفهوم (توثيق Authentication) من الركائز الجوهرية في توثيق REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه بطاقة الصعود للطائرة (Boarding Pass) المشفرة بالباركود؛ تثبت هويتك ورقم مقعدك وتسمح لك بالدخول لبوابة محددة.",
          "why": "نحتاجه لتأمين بيانات المستخدمين وحظر المتطفلين وفصل صلاحيات المشرفين عن المستخدمين العاديين.",
          "terms": [
            {
              "term": "Authentication & JWT",
              "pronunciation": "أوثينتيكيشن وجيه-دبليو-تي",
              "meaning": "التحقق من هوية المستخدم والتأكد من هويته وصلاحياته للوصول للموارد المحمية"
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
          "syntax": "// توليد والتحقق من رموز JWT\nimport jwt from 'jsonwebtoken';\n\n// إنشاء التوكن\nconst token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });\n// التحقق من التوكن\nconst decoded = jwt.verify(token, process.env.JWT_SECRET);",
          "simpleCode": "// 1. وسيط حماية المسارات برمز JWT\nimport jwt from 'jsonwebtoken';\n\nconst authMiddleware = (req, res, next) => {\n  // قراءة التوكن من ترويسة الطلب\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'يرجى تسجيل الدخول أولاً' });\n  \n  try {\n    // فك التشفير والتأكد من الصلاحية\n    req.user = jwt.verify(token, 'SECRET_KEY');\n    next();\n  } catch (err) {\n    res.status(403).json({ error: 'رمز الدخول غير صالح أو منتهي الصلاحية' });\n  }\n};",
          "advancedCode": "// نظام مصادقة وصلاحيات متكامل (RBAC)\nexport const authorizeRoles = (...roles) => {\n  return (req, res, next) => {\n    // 1. التحقق من وجود المستخدم وصلاحيته\n    if (!req.user || !roles.includes(req.user.role)) {\n      return res.status(403).json({\n        success: false,\n        message: 'ليس لديك الصلاحية الكافية للقيام بهذا الإجراء'\n      });\n    }\n    // 2. السماح بالمرور للمسار الإداري\n    next();\n  };\n};",
          "outputExplanation": "يقوم النظام بفك تشفير توكن JWT، والتحقق من التوقيع الرقمي وصلاحية الوقت، ثم يرفق كائن user بالطلب ليستخدمه المعالج.",
          "commonMistakes": [
            {
              "wrong": "تخزين كلمات المرور بصيغة نص عادي (Plain Text) دون تشفيرها باستخدام مكتبة تشفير مثل bcryptjs أو argon2.",
              "right": "تشفير كلمة المرور عبر bcrypt.hash(password, 12) قبل حفظها في قاعدة البيانات ومقارنتها بـ bcrypt.compare.",
              "reason": "تخزين كلمات المرور بدون تشفير يعتبر كارثة أمنية كبرى تكشف أسرار المستخدمين في حال حدوث أي تسريب للبيانات."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: توثيق Authentication",
            "title": "توثيق Authentication",
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
            "summary": "تطبيق (توثيق Authentication) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الخوارزمية القياسية لتشفير وتأمين كلمات المرور في Node.js و Express؟",
            "options": [
              "Bcrypt أو Argon2",
              "Base64 Encoding",
              "MD5 Hash",
              "JSON.stringify"
            ],
            "correctIndex": 0,
            "explanation": "Bcrypt وArgon2 هما المعيار العالمي لتشفير كلمات المرور عبر التمليح الصارم Slow Salted Hashing."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: توثيق Authentication",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (توثيق Authentication)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين توثيق Authentication\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"توثيق Authentication\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mi-توثيق_Error_Res",
          "letter": "i",
          "title": "توثيق Error Responses",
          "englishTitle": "توثيق Error Responses",
          "definition": "يُعد مفهوم (توثيق Error Responses) من الركائز الجوهرية في توثيق REST API ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: توثيق Error Responses",
            "title": "توثيق Error Responses",
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
            "summary": "تطبيق (توثيق Error Responses) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: توثيق Error Responses",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (توثيق Error Responses)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين توثيق Error Responses\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"توثيق Error Responses\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "20.2",
      "title": "استخدام Postman باحتراف",
      "englishTitle": "استخدام Postman باحتراف",
      "subtopics": [
        {
          "id": "s20-ma-إنشاء_Postman_C",
          "letter": "a",
          "title": "إنشاء Postman Collection",
          "englishTitle": "Postman Collection",
          "definition": "يُعد مفهوم (إنشاء Postman Collection) من الركائز الجوهرية في استخدام Postman باحتراف ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: إنشاء Postman Collection",
            "title": "إنشاء Postman Collection",
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
            "summary": "تطبيق (إنشاء Postman Collection) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: إنشاء Postman Collection",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Postman Collection)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Postman Collection\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Postman Collection\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mb-إعداد_Environme",
          "letter": "b",
          "title": "إعداد Environment Variables",
          "englishTitle": "إعداد Environment Variables",
          "definition": "يُعد مفهوم (إعداد Environment Variables) من الركائز الجوهرية في استخدام Postman باحتراف ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إعداد",
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
          "syntax": "// تطبيق معياري لمفهوم إعداد Environment Variables\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إعداد Environment Variables\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إعداد Environment Variables\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إعداد Environment Variables\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إعداد Environment Variables في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إعداد Environment Variables\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إعداد Environment Variables) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إعداد Environment Variables",
            "title": "إعداد Environment Variables",
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
            "summary": "تطبيق (إعداد Environment Variables) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إعداد Environment Variables) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إعداد Environment Variables) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إعداد Environment Variables",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إعداد Environment Variables)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إعداد Environment Variables\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إعداد Environment Variables\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mc-استخدام_Collect",
          "letter": "c",
          "title": "استخدام Collection Variables",
          "englishTitle": "Collection Variables",
          "definition": "يُعد مفهوم (استخدام Collection Variables) من الركائز الجوهرية في استخدام Postman باحتراف ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم استخدام Collection Variables\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام Collection Variables\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام Collection Variables\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام Collection Variables\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام Collection Variables في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام Collection Variables\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام Collection Variables) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: استخدام Collection Variables",
            "title": "استخدام Collection Variables",
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
            "summary": "تطبيق (استخدام Collection Variables) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام Collection Variables) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام Collection Variables) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام Collection Variables",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام Collection Variables)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Collection Variables\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام Collection Variables\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-md-إرسال_Authentic",
          "letter": "d",
          "title": "إرسال Authentication Tokens",
          "englishTitle": "إرسال Authentication Tokens",
          "definition": "يُعد مفهوم (إرسال Authentication Tokens) من الركائز الجوهرية في استخدام Postman باحتراف ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه بطاقة الصعود للطائرة (Boarding Pass) المشفرة بالباركود؛ تثبت هويتك ورقم مقعدك وتسمح لك بالدخول لبوابة محددة.",
          "why": "نحتاجه لتأمين بيانات المستخدمين وحظر المتطفلين وفصل صلاحيات المشرفين عن المستخدمين العاديين.",
          "terms": [
            {
              "term": "Authentication & JWT",
              "pronunciation": "أوثينتيكيشن وجيه-دبليو-تي",
              "meaning": "التحقق من هوية المستخدم والتأكد من هويته وصلاحياته للوصول للموارد المحمية"
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
          "syntax": "// توليد والتحقق من رموز JWT\nimport jwt from 'jsonwebtoken';\n\n// إنشاء التوكن\nconst token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });\n// التحقق من التوكن\nconst decoded = jwt.verify(token, process.env.JWT_SECRET);",
          "simpleCode": "// 1. وسيط حماية المسارات برمز JWT\nimport jwt from 'jsonwebtoken';\n\nconst authMiddleware = (req, res, next) => {\n  // قراءة التوكن من ترويسة الطلب\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'يرجى تسجيل الدخول أولاً' });\n  \n  try {\n    // فك التشفير والتأكد من الصلاحية\n    req.user = jwt.verify(token, 'SECRET_KEY');\n    next();\n  } catch (err) {\n    res.status(403).json({ error: 'رمز الدخول غير صالح أو منتهي الصلاحية' });\n  }\n};",
          "advancedCode": "// نظام مصادقة وصلاحيات متكامل (RBAC)\nexport const authorizeRoles = (...roles) => {\n  return (req, res, next) => {\n    // 1. التحقق من وجود المستخدم وصلاحيته\n    if (!req.user || !roles.includes(req.user.role)) {\n      return res.status(403).json({\n        success: false,\n        message: 'ليس لديك الصلاحية الكافية للقيام بهذا الإجراء'\n      });\n    }\n    // 2. السماح بالمرور للمسار الإداري\n    next();\n  };\n};",
          "outputExplanation": "يقوم النظام بفك تشفير توكن JWT، والتحقق من التوقيع الرقمي وصلاحية الوقت، ثم يرفق كائن user بالطلب ليستخدمه المعالج.",
          "commonMistakes": [
            {
              "wrong": "تخزين كلمات المرور بصيغة نص عادي (Plain Text) دون تشفيرها باستخدام مكتبة تشفير مثل bcryptjs أو argon2.",
              "right": "تشفير كلمة المرور عبر bcrypt.hash(password, 12) قبل حفظها في قاعدة البيانات ومقارنتها بـ bcrypt.compare.",
              "reason": "تخزين كلمات المرور بدون تشفير يعتبر كارثة أمنية كبرى تكشف أسرار المستخدمين في حال حدوث أي تسريب للبيانات."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إرسال Authentication Tokens",
            "title": "إرسال Authentication Tokens",
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
            "summary": "تطبيق (إرسال Authentication Tokens) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الخوارزمية القياسية لتشفير وتأمين كلمات المرور في Node.js و Express؟",
            "options": [
              "Bcrypt أو Argon2",
              "Base64 Encoding",
              "MD5 Hash",
              "JSON.stringify"
            ],
            "correctIndex": 0,
            "explanation": "Bcrypt وArgon2 هما المعيار العالمي لتشفير كلمات المرور عبر التمليح الصارم Slow Salted Hashing."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إرسال Authentication Tokens",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إرسال Authentication Tokens)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال Authentication Tokens\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إرسال Authentication Tokens\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-me-إنشاء_Automated",
          "letter": "e",
          "title": "إنشاء Automated Tests",
          "englishTitle": "Automated Tests",
          "definition": "يُعد مفهوم (إنشاء Automated Tests) من الركائز الجوهرية في استخدام Postman باحتراف ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إنشاء Automated Tests\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء Automated Tests\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء Automated Tests\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء Automated Tests\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء Automated Tests في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء Automated Tests\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء Automated Tests) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إنشاء Automated Tests",
            "title": "إنشاء Automated Tests",
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
            "summary": "تطبيق (إنشاء Automated Tests) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء Automated Tests) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء Automated Tests) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء Automated Tests",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Automated Tests)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Automated Tests\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Automated Tests\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mf-تنظيم_Requests_",
          "letter": "f",
          "title": "تنظيم Requests داخل Folders",
          "englishTitle": "تنظيم Requests داخل Folders",
          "definition": "يُعد مفهوم (تنظيم Requests داخل Folders) من الركائز الجوهرية في استخدام Postman باحتراف ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه استمارة الطلب التي يملؤها الزبون في المطعم، يحدد فيها طلبه (Body)، رقم طاولته (Params)، وأي إضافات خاصة (Query).",
          "why": "نحتاجه لقراءة وفحص كل ما يرسله العميل للخادم من معطيات وبيانات لنتخذ القرار المناسب بشأنها.",
          "terms": [
            {
              "term": "Request (req)",
              "pronunciation": "ريكويست",
              "meaning": "كائن الطلب القادم من المتصفح حاملاً البيانات والرؤوس والمعاملات"
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
          "syntax": "// قراءة بيانات الطلب في Express\napp.post('/api/users/:id', (req, res) => {\n  const userId = req.params.id;      // المعاملات في الرابط\n  const query = req.query.filter;     // معلمات الاستعلام\n  const { name, email } = req.body;   // البيانات المرسلة\n  const token = req.headers.authorization; // ترويسة المصادقة\n});",
          "simpleCode": "// 1. استيراد express\nimport express from 'express';\n// 2. إنشاء التطبيق وتفعيل قراءة JSON\nconst app = express();\napp.use(express.json());\n\n// 3. معالجة طلب يقرأ بيانات req\napp.get('/info', (req, res) => {\n  // قراءة معلومات الطلب\n  const userAgent = req.get('User-Agent');\n  // إرجاع النتيجة\n  res.json({ client: userAgent, message: 'تم استلام الطلب' });\n});",
          "advancedCode": "// معالجة متقدمة لبيانات الطلب مع التحقق والتأمين\nimport express from 'express';\n\nconst app = express();\napp.use(express.json({ limit: '1mb' })); // حماية الخادم من الحزم الضخمة\n\napp.post('/api/orders/:orderId', (req, res) => {\n  // 1. استخراج المعاملات ورقم الطلب\n  const { orderId } = req.params;\n  // 2. استخراج خيارات التصفية أو الترتيب\n  const { priority = 'normal' } = req.query;\n  // 3. قراءة بيانات السلة\n  const { items, total } = req.body;\n\n  // 4. الرد بحالة 200 وبيانات منظمة\n  res.status(200).json({\n    success: true,\n    orderId,\n    priority,\n    receivedItems: items?.length || 0,\n    timestamp: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يقوم الخادم باستخراج البيانات وتفكيكها من كائن req، ثم يعيد استجابة بصيغة JSON تؤكد معالجة الطلب بنجاح مع الحالة 200.",
          "commonMistakes": [
            {
              "wrong": "محاولة قراءة req.body دون تفعيل وسيط express.json() في بداية التطبيق فيظهر undefined.",
              "right": "إضافة app.use(express.json()) قبل تعريف المسارات التي تستقبل بيانات POST أو PUT.",
              "reason": "افتراضياً لا يقوم Express بتحليل جسم الطلب القادم بصيغة JSON إلا بعد تمريره على الوسيط المخصص."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: تنظيم Requests داخل Folders",
            "title": "تنظيم Requests داخل Folders",
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
            "summary": "تطبيق (تنظيم Requests داخل Folders) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ماذا سيحدث لو حاولت قراءة req.body دون استدعاء app.use(express.json())؟",
            "options": [
              "ستكون قيمة req.body غير معرفة (undefined)",
              "سيتوقف خادم Node.js عن العمل تماماً",
              "سيقوم Express بتحويلها تلقائياً إلى نص",
              "سيتم إرجاع خطأ 404 Not Found"
            ],
            "correctIndex": 0,
            "explanation": "بدون express.json()، يظل دفق البيانات غير مفسر وتكون قيمة req.body غير معرفة undefined."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تنظيم Requests داخل Folders",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تنظيم Requests داخل Folders)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تنظيم Requests داخل Folders\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تنظيم Requests داخل Folders\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mg-تصدير_ومشاركة_C",
          "letter": "g",
          "title": "تصدير ومشاركة Collections",
          "englishTitle": "تصدير ومشاركة Collections",
          "definition": "يُعد مفهوم (تصدير ومشاركة Collections) من الركائز الجوهرية في استخدام Postman باحتراف ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تصدير",
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
          "syntax": "// تطبيق معياري لمفهوم تصدير ومشاركة Collections\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تصدير ومشاركة Collections\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تصدير ومشاركة Collections\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تصدير ومشاركة Collections\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تصدير ومشاركة Collections في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تصدير ومشاركة Collections\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تصدير ومشاركة Collections) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: تصدير ومشاركة Collections",
            "title": "تصدير ومشاركة Collections",
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
            "summary": "تطبيق (تصدير ومشاركة Collections) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تصدير ومشاركة Collections) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تصدير ومشاركة Collections) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تصدير ومشاركة Collections",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تصدير ومشاركة Collections)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تصدير ومشاركة Collections\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تصدير ومشاركة Collections\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mh-تشغيل_Collectio",
          "letter": "h",
          "title": "تشغيل Collection Tests",
          "englishTitle": "تشغيل Collection Tests",
          "definition": "يُعد مفهوم (تشغيل Collection Tests) من الركائز الجوهرية في استخدام Postman باحتراف ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تشغيل",
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
          "syntax": "// تطبيق معياري لمفهوم تشغيل Collection Tests\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تشغيل Collection Tests\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تشغيل Collection Tests\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تشغيل Collection Tests\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تشغيل Collection Tests في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تشغيل Collection Tests\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تشغيل Collection Tests) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: تشغيل Collection Tests",
            "title": "تشغيل Collection Tests",
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
            "summary": "تطبيق (تشغيل Collection Tests) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تشغيل Collection Tests) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تشغيل Collection Tests) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تشغيل Collection Tests",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تشغيل Collection Tests)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تشغيل Collection Tests\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تشغيل Collection Tests\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "20.3",
      "title": "GraphQL مع Express",
      "englishTitle": "GraphQL مع Express",
      "subtopics": [
        {
          "id": "s20-ma-ما_هو_GraphQL؟",
          "letter": "a",
          "title": "ما هو GraphQL؟",
          "englishTitle": "GraphQL",
          "definition": "يُعد مفهوم (ما هو GraphQL؟) من الركائز الجوهرية في GraphQL مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "ما",
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
          "syntax": "// تطبيق معياري لمفهوم ما هو GraphQL؟\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: ما هو GraphQL؟\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: ما هو GraphQL؟\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"ما هو GraphQL؟\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ ما هو GraphQL؟ في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"ما هو GraphQL؟\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (ما هو GraphQL؟) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: ما هو GraphQL؟",
            "title": "ما هو GraphQL؟",
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
            "summary": "تطبيق (ما هو GraphQL؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (ما هو GraphQL؟) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (ما هو GraphQL؟) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: ما هو GraphQL؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ما هو GraphQL؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو GraphQL؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ما هو GraphQL؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mb-الفرق_بين_REST_",
          "letter": "b",
          "title": "الفرق بين REST وGraphQL",
          "englishTitle": "REST وGraphQL",
          "definition": "يُعد مفهوم (الفرق بين REST وGraphQL) من الركائز الجوهرية في GraphQL مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: الفرق بين REST وGraphQL",
            "title": "الفرق بين REST وGraphQL",
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
            "summary": "تطبيق (الفرق بين REST وGraphQL) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: الفرق بين REST وGraphQL",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (الفرق بين REST وGraphQL)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين REST وGraphQL\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"الفرق بين REST وGraphQL\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mc-مفهوم_GraphQL_S",
          "letter": "c",
          "title": "مفهوم GraphQL Schema",
          "englishTitle": "GraphQL Schema",
          "definition": "يُعد مفهوم (مفهوم GraphQL Schema) من الركائز الجوهرية في GraphQL مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم مفهوم GraphQL Schema\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: مفهوم GraphQL Schema\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: مفهوم GraphQL Schema\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"مفهوم GraphQL Schema\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ مفهوم GraphQL Schema في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"مفهوم GraphQL Schema\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (مفهوم GraphQL Schema) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: مفهوم GraphQL Schema",
            "title": "مفهوم GraphQL Schema",
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
            "summary": "تطبيق (مفهوم GraphQL Schema) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (مفهوم GraphQL Schema) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (مفهوم GraphQL Schema) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مفهوم GraphQL Schema",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم GraphQL Schema)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم GraphQL Schema\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم GraphQL Schema\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-md-مفهوم_Query_وMu",
          "letter": "d",
          "title": "مفهوم Query وMutation",
          "englishTitle": "Query وMutation",
          "definition": "يُعد مفهوم (مفهوم Query وMutation) من الركائز الجوهرية في GraphQL مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه استمارة الطلب التي يملؤها الزبون في المطعم، يحدد فيها طلبه (Body)، رقم طاولته (Params)، وأي إضافات خاصة (Query).",
          "why": "نحتاجه لقراءة وفحص كل ما يرسله العميل للخادم من معطيات وبيانات لنتخذ القرار المناسب بشأنها.",
          "terms": [
            {
              "term": "Request (req)",
              "pronunciation": "ريكويست",
              "meaning": "كائن الطلب القادم من المتصفح حاملاً البيانات والرؤوس والمعاملات"
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
          "syntax": "// قراءة بيانات الطلب في Express\napp.post('/api/users/:id', (req, res) => {\n  const userId = req.params.id;      // المعاملات في الرابط\n  const query = req.query.filter;     // معلمات الاستعلام\n  const { name, email } = req.body;   // البيانات المرسلة\n  const token = req.headers.authorization; // ترويسة المصادقة\n});",
          "simpleCode": "// 1. استيراد express\nimport express from 'express';\n// 2. إنشاء التطبيق وتفعيل قراءة JSON\nconst app = express();\napp.use(express.json());\n\n// 3. معالجة طلب يقرأ بيانات req\napp.get('/info', (req, res) => {\n  // قراءة معلومات الطلب\n  const userAgent = req.get('User-Agent');\n  // إرجاع النتيجة\n  res.json({ client: userAgent, message: 'تم استلام الطلب' });\n});",
          "advancedCode": "// معالجة متقدمة لبيانات الطلب مع التحقق والتأمين\nimport express from 'express';\n\nconst app = express();\napp.use(express.json({ limit: '1mb' })); // حماية الخادم من الحزم الضخمة\n\napp.post('/api/orders/:orderId', (req, res) => {\n  // 1. استخراج المعاملات ورقم الطلب\n  const { orderId } = req.params;\n  // 2. استخراج خيارات التصفية أو الترتيب\n  const { priority = 'normal' } = req.query;\n  // 3. قراءة بيانات السلة\n  const { items, total } = req.body;\n\n  // 4. الرد بحالة 200 وبيانات منظمة\n  res.status(200).json({\n    success: true,\n    orderId,\n    priority,\n    receivedItems: items?.length || 0,\n    timestamp: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يقوم الخادم باستخراج البيانات وتفكيكها من كائن req، ثم يعيد استجابة بصيغة JSON تؤكد معالجة الطلب بنجاح مع الحالة 200.",
          "commonMistakes": [
            {
              "wrong": "محاولة قراءة req.body دون تفعيل وسيط express.json() في بداية التطبيق فيظهر undefined.",
              "right": "إضافة app.use(express.json()) قبل تعريف المسارات التي تستقبل بيانات POST أو PUT.",
              "reason": "افتراضياً لا يقوم Express بتحليل جسم الطلب القادم بصيغة JSON إلا بعد تمريره على الوسيط المخصص."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: مفهوم Query وMutation",
            "title": "مفهوم Query وMutation",
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
            "summary": "تطبيق (مفهوم Query وMutation) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ماذا سيحدث لو حاولت قراءة req.body دون استدعاء app.use(express.json())؟",
            "options": [
              "ستكون قيمة req.body غير معرفة (undefined)",
              "سيتوقف خادم Node.js عن العمل تماماً",
              "سيقوم Express بتحويلها تلقائياً إلى نص",
              "سيتم إرجاع خطأ 404 Not Found"
            ],
            "correctIndex": 0,
            "explanation": "بدون express.json()، يظل دفق البيانات غير مفسر وتكون قيمة req.body غير معرفة undefined."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مفهوم Query وMutation",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم Query وMutation)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Query وMutation\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم Query وMutation\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-me-مفهوم_Resolvers",
          "letter": "e",
          "title": "مفهوم Resolvers",
          "englishTitle": "Resolvers",
          "definition": "يُعد مفهوم (مفهوم Resolvers) من الركائز الجوهرية في GraphQL مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: مفهوم Resolvers",
            "title": "مفهوم Resolvers",
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
            "summary": "تطبيق (مفهوم Resolvers) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: مفهوم Resolvers",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم Resolvers)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Resolvers\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم Resolvers\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mf-ربط_GraphQL_Ser",
          "letter": "f",
          "title": "ربط GraphQL Server مع Express",
          "englishTitle": "ربط GraphQL Server مع Express",
          "definition": "يُعد مفهوم (ربط GraphQL Server مع Express) من الركائز الجوهرية في GraphQL مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: ربط GraphQL Server مع Express",
            "title": "ربط GraphQL Server مع Express",
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
            "summary": "تطبيق (ربط GraphQL Server مع Express) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: ربط GraphQL Server مع Express",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ربط GraphQL Server مع Express)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ربط GraphQL Server مع Express\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ربط GraphQL Server مع Express\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mg-إضافة_Authentic",
          "letter": "g",
          "title": "إضافة Authentication إلى GraphQL",
          "englishTitle": "إضافة Authentication إلى GraphQL",
          "definition": "يُعد مفهوم (إضافة Authentication إلى GraphQL) من الركائز الجوهرية في GraphQL مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه بطاقة الصعود للطائرة (Boarding Pass) المشفرة بالباركود؛ تثبت هويتك ورقم مقعدك وتسمح لك بالدخول لبوابة محددة.",
          "why": "نحتاجه لتأمين بيانات المستخدمين وحظر المتطفلين وفصل صلاحيات المشرفين عن المستخدمين العاديين.",
          "terms": [
            {
              "term": "Authentication & JWT",
              "pronunciation": "أوثينتيكيشن وجيه-دبليو-تي",
              "meaning": "التحقق من هوية المستخدم والتأكد من هويته وصلاحياته للوصول للموارد المحمية"
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
          "syntax": "// توليد والتحقق من رموز JWT\nimport jwt from 'jsonwebtoken';\n\n// إنشاء التوكن\nconst token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });\n// التحقق من التوكن\nconst decoded = jwt.verify(token, process.env.JWT_SECRET);",
          "simpleCode": "// 1. وسيط حماية المسارات برمز JWT\nimport jwt from 'jsonwebtoken';\n\nconst authMiddleware = (req, res, next) => {\n  // قراءة التوكن من ترويسة الطلب\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'يرجى تسجيل الدخول أولاً' });\n  \n  try {\n    // فك التشفير والتأكد من الصلاحية\n    req.user = jwt.verify(token, 'SECRET_KEY');\n    next();\n  } catch (err) {\n    res.status(403).json({ error: 'رمز الدخول غير صالح أو منتهي الصلاحية' });\n  }\n};",
          "advancedCode": "// نظام مصادقة وصلاحيات متكامل (RBAC)\nexport const authorizeRoles = (...roles) => {\n  return (req, res, next) => {\n    // 1. التحقق من وجود المستخدم وصلاحيته\n    if (!req.user || !roles.includes(req.user.role)) {\n      return res.status(403).json({\n        success: false,\n        message: 'ليس لديك الصلاحية الكافية للقيام بهذا الإجراء'\n      });\n    }\n    // 2. السماح بالمرور للمسار الإداري\n    next();\n  };\n};",
          "outputExplanation": "يقوم النظام بفك تشفير توكن JWT، والتحقق من التوقيع الرقمي وصلاحية الوقت، ثم يرفق كائن user بالطلب ليستخدمه المعالج.",
          "commonMistakes": [
            {
              "wrong": "تخزين كلمات المرور بصيغة نص عادي (Plain Text) دون تشفيرها باستخدام مكتبة تشفير مثل bcryptjs أو argon2.",
              "right": "تشفير كلمة المرور عبر bcrypt.hash(password, 12) قبل حفظها في قاعدة البيانات ومقارنتها بـ bcrypt.compare.",
              "reason": "تخزين كلمات المرور بدون تشفير يعتبر كارثة أمنية كبرى تكشف أسرار المستخدمين في حال حدوث أي تسريب للبيانات."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: إضافة Authentication إلى GraphQL",
            "title": "إضافة Authentication إلى GraphQL",
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
            "summary": "تطبيق (إضافة Authentication إلى GraphQL) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما هي الخوارزمية القياسية لتشفير وتأمين كلمات المرور في Node.js و Express؟",
            "options": [
              "Bcrypt أو Argon2",
              "Base64 Encoding",
              "MD5 Hash",
              "JSON.stringify"
            ],
            "correctIndex": 0,
            "explanation": "Bcrypt وArgon2 هما المعيار العالمي لتشفير كلمات المرور عبر التمليح الصارم Slow Salted Hashing."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إضافة Authentication إلى GraphQL",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إضافة Authentication إلى GraphQL)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إضافة Authentication إلى GraphQL\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إضافة Authentication إلى GraphQL\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mh-معالجة_N+1_Quer",
          "letter": "h",
          "title": "معالجة N+1 Queries",
          "englishTitle": "معالجة N+1 Queries",
          "definition": "يُعد مفهوم (معالجة N+1 Queries) من الركائز الجوهرية في GraphQL مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم معالجة N+1 Queries\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: معالجة N+1 Queries\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: معالجة N+1 Queries\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"معالجة N+1 Queries\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ معالجة N+1 Queries في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"معالجة N+1 Queries\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (معالجة N+1 Queries) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: معالجة N+1 Queries",
            "title": "معالجة N+1 Queries",
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
            "summary": "تطبيق (معالجة N+1 Queries) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (معالجة N+1 Queries) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (معالجة N+1 Queries) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: معالجة N+1 Queries",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (معالجة N+1 Queries)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين معالجة N+1 Queries\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"معالجة N+1 Queries\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mi-التحكم_في_Query",
          "letter": "i",
          "title": "التحكم في Query Complexity",
          "englishTitle": "التحكم في Query Complexity",
          "definition": "يُعد مفهوم (التحكم في Query Complexity) من الركائز الجوهرية في GraphQL مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه استمارة الطلب التي يملؤها الزبون في المطعم، يحدد فيها طلبه (Body)، رقم طاولته (Params)، وأي إضافات خاصة (Query).",
          "why": "نحتاجه لقراءة وفحص كل ما يرسله العميل للخادم من معطيات وبيانات لنتخذ القرار المناسب بشأنها.",
          "terms": [
            {
              "term": "Request (req)",
              "pronunciation": "ريكويست",
              "meaning": "كائن الطلب القادم من المتصفح حاملاً البيانات والرؤوس والمعاملات"
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
          "syntax": "// قراءة بيانات الطلب في Express\napp.post('/api/users/:id', (req, res) => {\n  const userId = req.params.id;      // المعاملات في الرابط\n  const query = req.query.filter;     // معلمات الاستعلام\n  const { name, email } = req.body;   // البيانات المرسلة\n  const token = req.headers.authorization; // ترويسة المصادقة\n});",
          "simpleCode": "// 1. استيراد express\nimport express from 'express';\n// 2. إنشاء التطبيق وتفعيل قراءة JSON\nconst app = express();\napp.use(express.json());\n\n// 3. معالجة طلب يقرأ بيانات req\napp.get('/info', (req, res) => {\n  // قراءة معلومات الطلب\n  const userAgent = req.get('User-Agent');\n  // إرجاع النتيجة\n  res.json({ client: userAgent, message: 'تم استلام الطلب' });\n});",
          "advancedCode": "// معالجة متقدمة لبيانات الطلب مع التحقق والتأمين\nimport express from 'express';\n\nconst app = express();\napp.use(express.json({ limit: '1mb' })); // حماية الخادم من الحزم الضخمة\n\napp.post('/api/orders/:orderId', (req, res) => {\n  // 1. استخراج المعاملات ورقم الطلب\n  const { orderId } = req.params;\n  // 2. استخراج خيارات التصفية أو الترتيب\n  const { priority = 'normal' } = req.query;\n  // 3. قراءة بيانات السلة\n  const { items, total } = req.body;\n\n  // 4. الرد بحالة 200 وبيانات منظمة\n  res.status(200).json({\n    success: true,\n    orderId,\n    priority,\n    receivedItems: items?.length || 0,\n    timestamp: new Date().toISOString()\n  });\n});",
          "outputExplanation": "يقوم الخادم باستخراج البيانات وتفكيكها من كائن req، ثم يعيد استجابة بصيغة JSON تؤكد معالجة الطلب بنجاح مع الحالة 200.",
          "commonMistakes": [
            {
              "wrong": "محاولة قراءة req.body دون تفعيل وسيط express.json() في بداية التطبيق فيظهر undefined.",
              "right": "إضافة app.use(express.json()) قبل تعريف المسارات التي تستقبل بيانات POST أو PUT.",
              "reason": "افتراضياً لا يقوم Express بتحليل جسم الطلب القادم بصيغة JSON إلا بعد تمريره على الوسيط المخصص."
            }
          ],
          "bestPractices": [
            "احرص دائماً على عزل الأسرار والمفاتيح داخل متغيرات بيئية (.env) ولا ترفعها أبداً للمستودع العام.",
            "استخدم التحقق الصارم من صحة المدخلات (Schema Validation) لمنع الثغرات الأمنية واختراق النظام.",
            "قم بتنظيم منطق العمليات في طبقات منفصلة (Controllers, Services, Repositories) للحفاظ على كود نظيف."
          ],
          "infographic": {
            "badge": "درس: التحكم في Query Complexity",
            "title": "التحكم في Query Complexity",
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
            "summary": "تطبيق (التحكم في Query Complexity) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ماذا سيحدث لو حاولت قراءة req.body دون استدعاء app.use(express.json())؟",
            "options": [
              "ستكون قيمة req.body غير معرفة (undefined)",
              "سيتوقف خادم Node.js عن العمل تماماً",
              "سيقوم Express بتحويلها تلقائياً إلى نص",
              "سيتم إرجاع خطأ 404 Not Found"
            ],
            "correctIndex": 0,
            "explanation": "بدون express.json()، يظل دفق البيانات غير مفسر وتكون قيمة req.body غير معرفة undefined."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: التحكم في Query Complexity",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (التحكم في Query Complexity)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين التحكم في Query Complexity\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"التحكم في Query Complexity\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "20.4",
      "title": "gRPC والتواصل بين الخدمات",
      "englishTitle": "gRPC والتواصل بين الخدمات",
      "subtopics": [
        {
          "id": "s20-ma-ما_هو_gRPC؟",
          "letter": "a",
          "title": "ما هو gRPC؟",
          "englishTitle": "gRPC",
          "definition": "يُعد مفهوم (ما هو gRPC؟) من الركائز الجوهرية في gRPC والتواصل بين الخدمات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "ما",
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
          "syntax": "// تطبيق معياري لمفهوم ما هو gRPC؟\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: ما هو gRPC؟\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: ما هو gRPC؟\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"ما هو gRPC؟\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ ما هو gRPC؟ في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"ما هو gRPC؟\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (ما هو gRPC؟) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: ما هو gRPC؟",
            "title": "ما هو gRPC؟",
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
            "summary": "تطبيق (ما هو gRPC؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (ما هو gRPC؟) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (ما هو gRPC؟) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: ما هو gRPC؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ما هو gRPC؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ما هو gRPC؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ما هو gRPC؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mb-مفهوم_Protocol_",
          "letter": "b",
          "title": "مفهوم Protocol Buffers",
          "englishTitle": "Protocol Buffers",
          "definition": "يُعد مفهوم (مفهوم Protocol Buffers) من الركائز الجوهرية في gRPC والتواصل بين الخدمات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم مفهوم Protocol Buffers\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: مفهوم Protocol Buffers\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: مفهوم Protocol Buffers\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"مفهوم Protocol Buffers\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ مفهوم Protocol Buffers في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"مفهوم Protocol Buffers\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (مفهوم Protocol Buffers) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: مفهوم Protocol Buffers",
            "title": "مفهوم Protocol Buffers",
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
            "summary": "تطبيق (مفهوم Protocol Buffers) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (مفهوم Protocol Buffers) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (مفهوم Protocol Buffers) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مفهوم Protocol Buffers",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم Protocol Buffers)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Protocol Buffers\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم Protocol Buffers\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mc-إنشاء_gRPC_Serv",
          "letter": "c",
          "title": "إنشاء gRPC Service",
          "englishTitle": "gRPC Service",
          "definition": "يُعد مفهوم (إنشاء gRPC Service) من الركائز الجوهرية في gRPC والتواصل بين الخدمات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إنشاء gRPC Service\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء gRPC Service\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء gRPC Service\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء gRPC Service\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء gRPC Service في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء gRPC Service\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء gRPC Service) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إنشاء gRPC Service",
            "title": "إنشاء gRPC Service",
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
            "summary": "تطبيق (إنشاء gRPC Service) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء gRPC Service) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء gRPC Service) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء gRPC Service",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء gRPC Service)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء gRPC Service\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء gRPC Service\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-md-إنشاء_gRPC_Clie",
          "letter": "d",
          "title": "إنشاء gRPC Client",
          "englishTitle": "gRPC Client",
          "definition": "يُعد مفهوم (إنشاء gRPC Client) من الركائز الجوهرية في gRPC والتواصل بين الخدمات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إنشاء gRPC Client\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء gRPC Client\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء gRPC Client\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء gRPC Client\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء gRPC Client في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء gRPC Client\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء gRPC Client) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إنشاء gRPC Client",
            "title": "إنشاء gRPC Client",
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
            "summary": "تطبيق (إنشاء gRPC Client) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء gRPC Client) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء gRPC Client) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء gRPC Client",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء gRPC Client)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء gRPC Client\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء gRPC Client\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-me-ربط_Express_بخد",
          "letter": "e",
          "title": "ربط Express بخدمة gRPC",
          "englishTitle": "ربط Express بخدمة gRPC",
          "definition": "يُعد مفهوم (ربط Express بخدمة gRPC) من الركائز الجوهرية في gRPC والتواصل بين الخدمات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: ربط Express بخدمة gRPC",
            "title": "ربط Express بخدمة gRPC",
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
            "summary": "تطبيق (ربط Express بخدمة gRPC) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: ربط Express بخدمة gRPC",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ربط Express بخدمة gRPC)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ربط Express بخدمة gRPC\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ربط Express بخدمة gRPC\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mf-التعامل_مع_Erro",
          "letter": "f",
          "title": "التعامل مع Errors وDeadlines",
          "englishTitle": "التعامل مع Errors وDeadlines",
          "definition": "يُعد مفهوم (التعامل مع Errors وDeadlines) من الركائز الجوهرية في gRPC والتواصل بين الخدمات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: التعامل مع Errors وDeadlines",
            "title": "التعامل مع Errors وDeadlines",
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
            "summary": "تطبيق (التعامل مع Errors وDeadlines) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: التعامل مع Errors وDeadlines",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (التعامل مع Errors وDeadlines)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين التعامل مع Errors وDeadlines\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"التعامل مع Errors وDeadlines\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s20-mg-مقارنة_REST_وGr",
          "letter": "g",
          "title": "مقارنة REST وGraphQL وgRPC",
          "englishTitle": "مقارنة REST وGraphQL وgRPC",
          "definition": "يُعد مفهوم (مقارنة REST وGraphQL وgRPC) من الركائز الجوهرية في gRPC والتواصل بين الخدمات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: مقارنة REST وGraphQL وgRPC",
            "title": "مقارنة REST وGraphQL وgRPC",
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
            "summary": "تطبيق (مقارنة REST وGraphQL وgRPC) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: مقارنة REST وGraphQL وgRPC",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مقارنة REST وGraphQL وgRPC)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مقارنة REST وGraphQL وgRPC\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مقارنة REST وGraphQL وgRPC\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    }
  ]
};

export default SECTION_20;
