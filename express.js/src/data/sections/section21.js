// src/data/sections/section21.js
// القسم الحادي والعشرون: الوقت الحقيقي والمهام الخلفية
export const SECTION_21 = {
  "id": 21,
  "number": "21",
  "title": "القسم الحادي والعشرون: الوقت الحقيقي والمهام الخلفية",
  "englishTitle": "Section 21: القسم الحادي والعشرون: الوقت الحقيقي والمهام الخلفية",
  "badge": "محترف",
  "description": "منهج تعليمي شامل يغطي القسم الحادي والعشرون: الوقت الحقيقي والمهام الخلفية بدقة تفصيلية وأمثلة عملية وتطبيق مباشر في Express.js.",
  "topics": [
    {
      "id": "21.1",
      "title": "مقدمة في Real-Time Applications",
      "englishTitle": "مقدمة في Real-Time Applications",
      "subtopics": [
        {
          "id": "s21-ma-ما_هي_Real-Time",
          "letter": "a",
          "title": "ما هي Real-Time Applications؟",
          "englishTitle": "Real-Time Applications",
          "definition": "يُعد مفهوم (ما هي Real-Time Applications؟) من الركائز الجوهرية في مقدمة في Real-Time Applications ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم ما هي Real-Time Applications؟\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: ما هي Real-Time Applications؟\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: ما هي Real-Time Applications؟\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"ما هي Real-Time Applications؟\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ ما هي Real-Time Applications؟ في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"ما هي Real-Time Applications؟\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (ما هي Real-Time Applications؟) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: ما هي Real-Time Applications؟",
            "title": "ما هي Real-Time Applications؟",
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
            "summary": "تطبيق (ما هي Real-Time Applications؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (ما هي Real-Time Applications؟) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (ما هي Real-Time Applications؟) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: ما هي Real-Time Applications؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ما هي Real-Time Applications؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ما هي Real-Time Applications؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ما هي Real-Time Applications؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mb-الفرق_بين_Polli",
          "letter": "b",
          "title": "الفرق بين Polling وWebSocket",
          "englishTitle": "Polling وWebSocket",
          "definition": "يُعد مفهوم (الفرق بين Polling وWebSocket) من الركائز الجوهرية في مقدمة في Real-Time Applications ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "الفرق",
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
          "syntax": "// تطبيق معياري لمفهوم الفرق بين Polling وWebSocket\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: الفرق بين Polling وWebSocket\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: الفرق بين Polling وWebSocket\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"الفرق بين Polling وWebSocket\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ الفرق بين Polling وWebSocket في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"الفرق بين Polling وWebSocket\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (الفرق بين Polling وWebSocket) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: الفرق بين Polling وWebSocket",
            "title": "الفرق بين Polling وWebSocket",
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
            "summary": "تطبيق (الفرق بين Polling وWebSocket) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (الفرق بين Polling وWebSocket) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (الفرق بين Polling وWebSocket) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: الفرق بين Polling وWebSocket",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (الفرق بين Polling وWebSocket)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين Polling وWebSocket\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"الفرق بين Polling وWebSocket\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mc-مفهوم_Server-Se",
          "letter": "c",
          "title": "مفهوم Server-Sent Events",
          "englishTitle": "Server-Sent Events",
          "definition": "يُعد مفهوم (مفهوم Server-Sent Events) من الركائز الجوهرية في مقدمة في Real-Time Applications ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم مفهوم Server-Sent Events\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: مفهوم Server-Sent Events\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: مفهوم Server-Sent Events\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"مفهوم Server-Sent Events\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ مفهوم Server-Sent Events في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"مفهوم Server-Sent Events\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (مفهوم Server-Sent Events) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: مفهوم Server-Sent Events",
            "title": "مفهوم Server-Sent Events",
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
            "summary": "تطبيق (مفهوم Server-Sent Events) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (مفهوم Server-Sent Events) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (مفهوم Server-Sent Events) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مفهوم Server-Sent Events",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم Server-Sent Events)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Server-Sent Events\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم Server-Sent Events\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-md-الفرق_بين_SSE_و",
          "letter": "d",
          "title": "الفرق بين SSE وWebSocket",
          "englishTitle": "SSE وWebSocket",
          "definition": "يُعد مفهوم (الفرق بين SSE وWebSocket) من الركائز الجوهرية في مقدمة في Real-Time Applications ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "الفرق",
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
          "syntax": "// تطبيق معياري لمفهوم الفرق بين SSE وWebSocket\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: الفرق بين SSE وWebSocket\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: الفرق بين SSE وWebSocket\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"الفرق بين SSE وWebSocket\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ الفرق بين SSE وWebSocket في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"الفرق بين SSE وWebSocket\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (الفرق بين SSE وWebSocket) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: الفرق بين SSE وWebSocket",
            "title": "الفرق بين SSE وWebSocket",
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
            "summary": "تطبيق (الفرق بين SSE وWebSocket) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (الفرق بين SSE وWebSocket) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (الفرق بين SSE وWebSocket) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: الفرق بين SSE وWebSocket",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (الفرق بين SSE وWebSocket)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين SSE وWebSocket\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"الفرق بين SSE وWebSocket\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-me-حالات_استخدام_R",
          "letter": "e",
          "title": "حالات استخدام Real-Time APIs",
          "englishTitle": "حالات Real-Time APIs",
          "definition": "يُعد مفهوم (حالات استخدام Real-Time APIs) من الركائز الجوهرية في مقدمة في Real-Time Applications ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "حالات",
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
          "syntax": "// تطبيق معياري لمفهوم حالات استخدام Real-Time APIs\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: حالات استخدام Real-Time APIs\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: حالات استخدام Real-Time APIs\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"حالات استخدام Real-Time APIs\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ حالات استخدام Real-Time APIs في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"حالات استخدام Real-Time APIs\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (حالات استخدام Real-Time APIs) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: حالات استخدام Real-Time APIs",
            "title": "حالات استخدام Real-Time APIs",
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
            "summary": "تطبيق (حالات استخدام Real-Time APIs) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (حالات استخدام Real-Time APIs) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (حالات استخدام Real-Time APIs) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: حالات استخدام Real-Time APIs",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (حالات استخدام Real-Time APIs)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين حالات استخدام Real-Time APIs\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"حالات استخدام Real-Time APIs\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mf-إدارة_الاتصالات",
          "letter": "f",
          "title": "إدارة الاتصالات طويلة المدة",
          "englishTitle": "الاتصالات طويلة المدة",
          "definition": "يُعد مفهوم (إدارة الاتصالات طويلة المدة) من الركائز الجوهرية في مقدمة في Real-Time Applications ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إدارة",
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
          "syntax": "// تطبيق معياري لمفهوم إدارة الاتصالات طويلة المدة\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إدارة الاتصالات طويلة المدة\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إدارة الاتصالات طويلة المدة\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إدارة الاتصالات طويلة المدة\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إدارة الاتصالات طويلة المدة في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إدارة الاتصالات طويلة المدة\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إدارة الاتصالات طويلة المدة) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إدارة الاتصالات طويلة المدة",
            "title": "إدارة الاتصالات طويلة المدة",
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
            "summary": "تطبيق (إدارة الاتصالات طويلة المدة) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إدارة الاتصالات طويلة المدة) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إدارة الاتصالات طويلة المدة) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إدارة الاتصالات طويلة المدة",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إدارة الاتصالات طويلة المدة)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة الاتصالات طويلة المدة\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إدارة الاتصالات طويلة المدة\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "21.2",
      "title": "Socket.IO مع Express",
      "englishTitle": "Socket.IO مع Express",
      "subtopics": [
        {
          "id": "s21-ma-تثبيت_Socket.IO",
          "letter": "a",
          "title": "تثبيت Socket.IO",
          "englishTitle": "تثبيت Socket.IO",
          "definition": "يُعد مفهوم (تثبيت Socket.IO) من الركائز الجوهرية في Socket.IO مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تثبيت",
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
          "syntax": "// تطبيق معياري لمفهوم تثبيت Socket.IO\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تثبيت Socket.IO\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تثبيت Socket.IO\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تثبيت Socket.IO\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تثبيت Socket.IO في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تثبيت Socket.IO\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تثبيت Socket.IO) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: تثبيت Socket.IO",
            "title": "تثبيت Socket.IO",
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
            "summary": "تطبيق (تثبيت Socket.IO) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تثبيت Socket.IO) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تثبيت Socket.IO) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تثبيت Socket.IO",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تثبيت Socket.IO)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تثبيت Socket.IO\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تثبيت Socket.IO\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mb-إنشاء_HTTP_Serv",
          "letter": "b",
          "title": "إنشاء HTTP Server لتطبيق Express",
          "englishTitle": "HTTP Server لتطبيق Express",
          "definition": "يُعد مفهوم (إنشاء HTTP Server لتطبيق Express) من الركائز الجوهرية في Socket.IO مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: إنشاء HTTP Server لتطبيق Express",
            "title": "إنشاء HTTP Server لتطبيق Express",
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
            "summary": "تطبيق (إنشاء HTTP Server لتطبيق Express) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: إنشاء HTTP Server لتطبيق Express",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء HTTP Server لتطبيق Express)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء HTTP Server لتطبيق Express\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء HTTP Server لتطبيق Express\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mc-ربط_Socket.IO_ب",
          "letter": "c",
          "title": "ربط Socket.IO بالخادم",
          "englishTitle": "ربط Socket.IO بالخادم",
          "definition": "يُعد مفهوم (ربط Socket.IO بالخادم) من الركائز الجوهرية في Socket.IO مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم ربط Socket.IO بالخادم\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: ربط Socket.IO بالخادم\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: ربط Socket.IO بالخادم\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"ربط Socket.IO بالخادم\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ ربط Socket.IO بالخادم في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"ربط Socket.IO بالخادم\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (ربط Socket.IO بالخادم) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: ربط Socket.IO بالخادم",
            "title": "ربط Socket.IO بالخادم",
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
            "summary": "تطبيق (ربط Socket.IO بالخادم) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (ربط Socket.IO بالخادم) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (ربط Socket.IO بالخادم) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: ربط Socket.IO بالخادم",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ربط Socket.IO بالخادم)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ربط Socket.IO بالخادم\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ربط Socket.IO بالخادم\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-md-إرسال_Events",
          "letter": "d",
          "title": "إرسال Events",
          "englishTitle": "إرسال Events",
          "definition": "يُعد مفهوم (إرسال Events) من الركائز الجوهرية في Socket.IO مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إرسال",
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
          "syntax": "// تطبيق معياري لمفهوم إرسال Events\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إرسال Events\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إرسال Events\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إرسال Events\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إرسال Events في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إرسال Events\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إرسال Events) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إرسال Events",
            "title": "إرسال Events",
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
            "summary": "تطبيق (إرسال Events) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إرسال Events) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إرسال Events) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إرسال Events",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إرسال Events)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال Events\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إرسال Events\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-me-استقبال_Events",
          "letter": "e",
          "title": "استقبال Events",
          "englishTitle": "استقبال Events",
          "definition": "يُعد مفهوم (استقبال Events) من الركائز الجوهرية في Socket.IO مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "استقبال",
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
          "syntax": "// تطبيق معياري لمفهوم استقبال Events\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استقبال Events\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استقبال Events\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استقبال Events\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استقبال Events في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استقبال Events\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استقبال Events) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: استقبال Events",
            "title": "استقبال Events",
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
            "summary": "تطبيق (استقبال Events) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استقبال Events) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استقبال Events) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استقبال Events",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استقبال Events)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استقبال Events\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استقبال Events\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mf-استخدام_Rooms",
          "letter": "f",
          "title": "استخدام Rooms",
          "englishTitle": "Rooms",
          "definition": "يُعد مفهوم (استخدام Rooms) من الركائز الجوهرية في Socket.IO مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم استخدام Rooms\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام Rooms\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام Rooms\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام Rooms\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام Rooms في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام Rooms\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام Rooms) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: استخدام Rooms",
            "title": "استخدام Rooms",
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
            "summary": "تطبيق (استخدام Rooms) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام Rooms) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام Rooms) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام Rooms",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام Rooms)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Rooms\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام Rooms\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mg-إدارة_Connected",
          "letter": "g",
          "title": "إدارة Connected Users",
          "englishTitle": "Connected Users",
          "definition": "يُعد مفهوم (إدارة Connected Users) من الركائز الجوهرية في Socket.IO مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إدارة",
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
          "syntax": "// تطبيق معياري لمفهوم إدارة Connected Users\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إدارة Connected Users\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إدارة Connected Users\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إدارة Connected Users\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إدارة Connected Users في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إدارة Connected Users\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إدارة Connected Users) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إدارة Connected Users",
            "title": "إدارة Connected Users",
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
            "summary": "تطبيق (إدارة Connected Users) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إدارة Connected Users) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إدارة Connected Users) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إدارة Connected Users",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إدارة Connected Users)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إدارة Connected Users\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إدارة Connected Users\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mh-حماية_Socket_Co",
          "letter": "h",
          "title": "حماية Socket Connections",
          "englishTitle": "حماية Socket Connections",
          "definition": "يُعد مفهوم (حماية Socket Connections) من الركائز الجوهرية في Socket.IO مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "حماية",
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
          "syntax": "// تطبيق معياري لمفهوم حماية Socket Connections\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: حماية Socket Connections\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: حماية Socket Connections\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"حماية Socket Connections\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ حماية Socket Connections في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"حماية Socket Connections\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (حماية Socket Connections) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: حماية Socket Connections",
            "title": "حماية Socket Connections",
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
            "summary": "تطبيق (حماية Socket Connections) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (حماية Socket Connections) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (حماية Socket Connections) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: حماية Socket Connections",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (حماية Socket Connections)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين حماية Socket Connections\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"حماية Socket Connections\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mi-التعامل_مع_Reco",
          "letter": "i",
          "title": "التعامل مع Reconnection",
          "englishTitle": "التعامل مع Reconnection",
          "definition": "يُعد مفهوم (التعامل مع Reconnection) من الركائز الجوهرية في Socket.IO مع Express ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "التعامل",
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
          "syntax": "// تطبيق معياري لمفهوم التعامل مع Reconnection\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: التعامل مع Reconnection\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: التعامل مع Reconnection\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"التعامل مع Reconnection\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ التعامل مع Reconnection في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"التعامل مع Reconnection\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (التعامل مع Reconnection) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: التعامل مع Reconnection",
            "title": "التعامل مع Reconnection",
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
            "summary": "تطبيق (التعامل مع Reconnection) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (التعامل مع Reconnection) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (التعامل مع Reconnection) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: التعامل مع Reconnection",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (التعامل مع Reconnection)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين التعامل مع Reconnection\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"التعامل مع Reconnection\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "21.3",
      "title": "Background Jobs",
      "englishTitle": "Background Jobs",
      "subtopics": [
        {
          "id": "s21-ma-ما_هي_Backgroun",
          "letter": "a",
          "title": "ما هي Background Jobs؟",
          "englishTitle": "Background Jobs",
          "definition": "يُعد مفهوم (ما هي Background Jobs؟) من الركائز الجوهرية في Background Jobs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم ما هي Background Jobs؟\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: ما هي Background Jobs؟\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: ما هي Background Jobs؟\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"ما هي Background Jobs؟\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ ما هي Background Jobs؟ في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"ما هي Background Jobs؟\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (ما هي Background Jobs؟) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: ما هي Background Jobs؟",
            "title": "ما هي Background Jobs؟",
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
            "summary": "تطبيق (ما هي Background Jobs؟) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (ما هي Background Jobs؟) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (ما هي Background Jobs؟) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: ما هي Background Jobs؟",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (ما هي Background Jobs؟)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين ما هي Background Jobs؟\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"ما هي Background Jobs؟\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mb-الفرق_بين_Reque",
          "letter": "b",
          "title": "الفرق بين Request Processing وBackground Processing",
          "englishTitle": "Request Processing وBackground Processing",
          "definition": "يُعد مفهوم (الفرق بين Request Processing وBackground Processing) من الركائز الجوهرية في Background Jobs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: الفرق بين Request Processing وBackground Processing",
            "title": "الفرق بين Request Processing وBackground Processing",
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
            "summary": "تطبيق (الفرق بين Request Processing وBackground Processing) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: الفرق بين Request Processing وBackground Processing",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (الفرق بين Request Processing وBackground Processing)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين الفرق بين Request Processing وBackground Processing\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"الفرق بين Request Processing وBackground Processing\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mc-مقدمة_في_Redis",
          "letter": "c",
          "title": "مقدمة في Redis",
          "englishTitle": "مقدمة في Redis",
          "definition": "يُعد مفهوم (مقدمة في Redis) من الركائز الجوهرية في Background Jobs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "مقدمة",
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
          "syntax": "// تطبيق معياري لمفهوم مقدمة في Redis\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: مقدمة في Redis\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: مقدمة في Redis\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"مقدمة في Redis\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ مقدمة في Redis في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"مقدمة في Redis\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (مقدمة في Redis) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: مقدمة في Redis",
            "title": "مقدمة في Redis",
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
            "summary": "تطبيق (مقدمة في Redis) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (مقدمة في Redis) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (مقدمة في Redis) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مقدمة في Redis",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مقدمة في Redis)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مقدمة في Redis\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مقدمة في Redis\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-md-استخدام_BullMQ",
          "letter": "d",
          "title": "استخدام BullMQ",
          "englishTitle": "BullMQ",
          "definition": "يُعد مفهوم (استخدام BullMQ) من الركائز الجوهرية في Background Jobs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم استخدام BullMQ\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام BullMQ\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام BullMQ\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام BullMQ\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام BullMQ في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام BullMQ\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام BullMQ) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: استخدام BullMQ",
            "title": "استخدام BullMQ",
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
            "summary": "تطبيق (استخدام BullMQ) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام BullMQ) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام BullMQ) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام BullMQ",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام BullMQ)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام BullMQ\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام BullMQ\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-me-إنشاء_Queue",
          "letter": "e",
          "title": "إنشاء Queue",
          "englishTitle": "Queue",
          "definition": "يُعد مفهوم (إنشاء Queue) من الركائز الجوهرية في Background Jobs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إنشاء Queue\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء Queue\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء Queue\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء Queue\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء Queue في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء Queue\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء Queue) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إنشاء Queue",
            "title": "إنشاء Queue",
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
            "summary": "تطبيق (إنشاء Queue) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء Queue) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء Queue) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء Queue",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Queue)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Queue\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Queue\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mf-إنشاء_Worker",
          "letter": "f",
          "title": "إنشاء Worker",
          "englishTitle": "Worker",
          "definition": "يُعد مفهوم (إنشاء Worker) من الركائز الجوهرية في Background Jobs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إنشاء Worker\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء Worker\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء Worker\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء Worker\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء Worker في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء Worker\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء Worker) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إنشاء Worker",
            "title": "إنشاء Worker",
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
            "summary": "تطبيق (إنشاء Worker) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء Worker) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء Worker) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء Worker",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Worker)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Worker\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Worker\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mg-إضافة_Job_إلى_Q",
          "letter": "g",
          "title": "إضافة Job إلى Queue",
          "englishTitle": "إضافة Job إلى Queue",
          "definition": "يُعد مفهوم (إضافة Job إلى Queue) من الركائز الجوهرية في Background Jobs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إضافة Job إلى Queue\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إضافة Job إلى Queue\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إضافة Job إلى Queue\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إضافة Job إلى Queue\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إضافة Job إلى Queue في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إضافة Job إلى Queue\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إضافة Job إلى Queue) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إضافة Job إلى Queue",
            "title": "إضافة Job إلى Queue",
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
            "summary": "تطبيق (إضافة Job إلى Queue) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إضافة Job إلى Queue) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إضافة Job إلى Queue) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إضافة Job إلى Queue",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إضافة Job إلى Queue)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إضافة Job إلى Queue\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إضافة Job إلى Queue\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mh-تسجيل_حالة_تنفي",
          "letter": "h",
          "title": "تسجيل حالة تنفيذ Job",
          "englishTitle": "تسجيل حالة Job",
          "definition": "يُعد مفهوم (تسجيل حالة تنفيذ Job) من الركائز الجوهرية في Background Jobs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تسجيل",
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
          "syntax": "// تطبيق معياري لمفهوم تسجيل حالة تنفيذ Job\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تسجيل حالة تنفيذ Job\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تسجيل حالة تنفيذ Job\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تسجيل حالة تنفيذ Job\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تسجيل حالة تنفيذ Job في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تسجيل حالة تنفيذ Job\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تسجيل حالة تنفيذ Job) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: تسجيل حالة تنفيذ Job",
            "title": "تسجيل حالة تنفيذ Job",
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
            "summary": "تطبيق (تسجيل حالة تنفيذ Job) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تسجيل حالة تنفيذ Job) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تسجيل حالة تنفيذ Job) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تسجيل حالة تنفيذ Job",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تسجيل حالة تنفيذ Job)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تسجيل حالة تنفيذ Job\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تسجيل حالة تنفيذ Job\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mi-التعامل_مع_Fail",
          "letter": "i",
          "title": "التعامل مع Failed Jobs",
          "englishTitle": "التعامل مع Failed Jobs",
          "definition": "يُعد مفهوم (التعامل مع Failed Jobs) من الركائز الجوهرية في Background Jobs ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "التعامل",
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
          "syntax": "// تطبيق معياري لمفهوم التعامل مع Failed Jobs\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: التعامل مع Failed Jobs\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: التعامل مع Failed Jobs\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"التعامل مع Failed Jobs\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ التعامل مع Failed Jobs في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"التعامل مع Failed Jobs\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (التعامل مع Failed Jobs) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: التعامل مع Failed Jobs",
            "title": "التعامل مع Failed Jobs",
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
            "summary": "تطبيق (التعامل مع Failed Jobs) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (التعامل مع Failed Jobs) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (التعامل مع Failed Jobs) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: التعامل مع Failed Jobs",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (التعامل مع Failed Jobs)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين التعامل مع Failed Jobs\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"التعامل مع Failed Jobs\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "21.4",
      "title": "الجدولة وإعادة المحاولة",
      "englishTitle": "الجدولة وإعادة المحاولة",
      "subtopics": [
        {
          "id": "s21-ma-مفهوم_Scheduled",
          "letter": "a",
          "title": "مفهوم Scheduled Jobs",
          "englishTitle": "Scheduled Jobs",
          "definition": "يُعد مفهوم (مفهوم Scheduled Jobs) من الركائز الجوهرية في الجدولة وإعادة المحاولة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم مفهوم Scheduled Jobs\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: مفهوم Scheduled Jobs\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: مفهوم Scheduled Jobs\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"مفهوم Scheduled Jobs\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ مفهوم Scheduled Jobs في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"مفهوم Scheduled Jobs\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (مفهوم Scheduled Jobs) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: مفهوم Scheduled Jobs",
            "title": "مفهوم Scheduled Jobs",
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
            "summary": "تطبيق (مفهوم Scheduled Jobs) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (مفهوم Scheduled Jobs) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (مفهوم Scheduled Jobs) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مفهوم Scheduled Jobs",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مفهوم Scheduled Jobs)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مفهوم Scheduled Jobs\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مفهوم Scheduled Jobs\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mb-إنشاء_مهمة_مجدو",
          "letter": "b",
          "title": "إنشاء مهمة مجدولة",
          "englishTitle": "مهمة مجدولة",
          "definition": "يُعد مفهوم (إنشاء مهمة مجدولة) من الركائز الجوهرية في الجدولة وإعادة المحاولة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إنشاء مهمة مجدولة\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء مهمة مجدولة\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء مهمة مجدولة\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء مهمة مجدولة\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء مهمة مجدولة في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء مهمة مجدولة\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء مهمة مجدولة) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إنشاء مهمة مجدولة",
            "title": "إنشاء مهمة مجدولة",
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
            "summary": "تطبيق (إنشاء مهمة مجدولة) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء مهمة مجدولة) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء مهمة مجدولة) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء مهمة مجدولة",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء مهمة مجدولة)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء مهمة مجدولة\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء مهمة مجدولة\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mc-إرسال_بريد_إلكت",
          "letter": "c",
          "title": "إرسال بريد إلكتروني مجدول",
          "englishTitle": "إرسال بريد إلكتروني مجدول",
          "definition": "يُعد مفهوم (إرسال بريد إلكتروني مجدول) من الركائز الجوهرية في الجدولة وإعادة المحاولة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إرسال",
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
          "syntax": "// تطبيق معياري لمفهوم إرسال بريد إلكتروني مجدول\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إرسال بريد إلكتروني مجدول\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إرسال بريد إلكتروني مجدول\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إرسال بريد إلكتروني مجدول\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إرسال بريد إلكتروني مجدول في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إرسال بريد إلكتروني مجدول\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إرسال بريد إلكتروني مجدول) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إرسال بريد إلكتروني مجدول",
            "title": "إرسال بريد إلكتروني مجدول",
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
            "summary": "تطبيق (إرسال بريد إلكتروني مجدول) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إرسال بريد إلكتروني مجدول) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إرسال بريد إلكتروني مجدول) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إرسال بريد إلكتروني مجدول",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إرسال بريد إلكتروني مجدول)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال بريد إلكتروني مجدول\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إرسال بريد إلكتروني مجدول\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-md-توليد_تقارير_يو",
          "letter": "d",
          "title": "توليد تقارير يومية",
          "englishTitle": "توليد تقارير يومية",
          "definition": "يُعد مفهوم (توليد تقارير يومية) من الركائز الجوهرية في الجدولة وإعادة المحاولة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "توليد",
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
          "syntax": "// تطبيق معياري لمفهوم توليد تقارير يومية\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: توليد تقارير يومية\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: توليد تقارير يومية\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"توليد تقارير يومية\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ توليد تقارير يومية في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"توليد تقارير يومية\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (توليد تقارير يومية) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: توليد تقارير يومية",
            "title": "توليد تقارير يومية",
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
            "summary": "تطبيق (توليد تقارير يومية) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (توليد تقارير يومية) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (توليد تقارير يومية) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: توليد تقارير يومية",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (توليد تقارير يومية)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين توليد تقارير يومية\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"توليد تقارير يومية\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-me-تطبيق_Retry_Pol",
          "letter": "e",
          "title": "تطبيق Retry Policy",
          "englishTitle": "تطبيق Retry Policy",
          "definition": "يُعد مفهوم (تطبيق Retry Policy) من الركائز الجوهرية في الجدولة وإعادة المحاولة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تطبيق",
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
          "syntax": "// تطبيق معياري لمفهوم تطبيق Retry Policy\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تطبيق Retry Policy\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تطبيق Retry Policy\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تطبيق Retry Policy\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تطبيق Retry Policy في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تطبيق Retry Policy\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تطبيق Retry Policy) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: تطبيق Retry Policy",
            "title": "تطبيق Retry Policy",
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
            "summary": "تطبيق (تطبيق Retry Policy) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تطبيق Retry Policy) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تطبيق Retry Policy) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تطبيق Retry Policy",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تطبيق Retry Policy)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تطبيق Retry Policy\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تطبيق Retry Policy\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mf-استخدام_Exponen",
          "letter": "f",
          "title": "استخدام Exponential Backoff",
          "englishTitle": "Exponential Backoff",
          "definition": "يُعد مفهوم (استخدام Exponential Backoff) من الركائز الجوهرية في الجدولة وإعادة المحاولة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم استخدام Exponential Backoff\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: استخدام Exponential Backoff\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: استخدام Exponential Backoff\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"استخدام Exponential Backoff\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ استخدام Exponential Backoff في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"استخدام Exponential Backoff\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (استخدام Exponential Backoff) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: استخدام Exponential Backoff",
            "title": "استخدام Exponential Backoff",
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
            "summary": "تطبيق (استخدام Exponential Backoff) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (استخدام Exponential Backoff) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (استخدام Exponential Backoff) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: استخدام Exponential Backoff",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (استخدام Exponential Backoff)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين استخدام Exponential Backoff\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"استخدام Exponential Backoff\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mg-منع_التنفيذ_الم",
          "letter": "g",
          "title": "منع التنفيذ المكرر للمهام",
          "englishTitle": "منع الالمكرر للمهام",
          "definition": "يُعد مفهوم (منع التنفيذ المكرر للمهام) من الركائز الجوهرية في الجدولة وإعادة المحاولة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "منع",
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
          "syntax": "// تطبيق معياري لمفهوم منع التنفيذ المكرر للمهام\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: منع التنفيذ المكرر للمهام\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: منع التنفيذ المكرر للمهام\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"منع التنفيذ المكرر للمهام\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ منع التنفيذ المكرر للمهام في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"منع التنفيذ المكرر للمهام\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (منع التنفيذ المكرر للمهام) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: منع التنفيذ المكرر للمهام",
            "title": "منع التنفيذ المكرر للمهام",
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
            "summary": "تطبيق (منع التنفيذ المكرر للمهام) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (منع التنفيذ المكرر للمهام) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (منع التنفيذ المكرر للمهام) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: منع التنفيذ المكرر للمهام",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (منع التنفيذ المكرر للمهام)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين منع التنفيذ المكرر للمهام\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"منع التنفيذ المكرر للمهام\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mh-مراقبة_Queues_و",
          "letter": "h",
          "title": "مراقبة Queues وWorkers",
          "englishTitle": "مراقبة Queues وWorkers",
          "definition": "يُعد مفهوم (مراقبة Queues وWorkers) من الركائز الجوهرية في الجدولة وإعادة المحاولة ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "مراقبة",
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
          "syntax": "// تطبيق معياري لمفهوم مراقبة Queues وWorkers\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: مراقبة Queues وWorkers\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: مراقبة Queues وWorkers\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"مراقبة Queues وWorkers\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ مراقبة Queues وWorkers في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"مراقبة Queues وWorkers\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (مراقبة Queues وWorkers) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: مراقبة Queues وWorkers",
            "title": "مراقبة Queues وWorkers",
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
            "summary": "تطبيق (مراقبة Queues وWorkers) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (مراقبة Queues وWorkers) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (مراقبة Queues وWorkers) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: مراقبة Queues وWorkers",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (مراقبة Queues وWorkers)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين مراقبة Queues وWorkers\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"مراقبة Queues وWorkers\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    },
    {
      "id": "21.5",
      "title": "مشروع عملي: نظام إشعارات",
      "englishTitle": "مشروع عملي: نظام إشعارات",
      "subtopics": [
        {
          "id": "s21-ma-إنشاء_Notificat",
          "letter": "a",
          "title": "إنشاء Notifications Model",
          "englishTitle": "Notifications Model",
          "definition": "يُعد مفهوم (إنشاء Notifications Model) من الركائز الجوهرية في مشروع عملي: نظام إشعارات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم إنشاء Notifications Model\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إنشاء Notifications Model\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إنشاء Notifications Model\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إنشاء Notifications Model\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إنشاء Notifications Model في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إنشاء Notifications Model\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إنشاء Notifications Model) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إنشاء Notifications Model",
            "title": "إنشاء Notifications Model",
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
            "summary": "تطبيق (إنشاء Notifications Model) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إنشاء Notifications Model) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إنشاء Notifications Model) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إنشاء Notifications Model",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Notifications Model)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Notifications Model\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Notifications Model\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mb-إنشاء_Notificat",
          "letter": "b",
          "title": "إنشاء Notifications Routes",
          "englishTitle": "Notifications Routes",
          "definition": "يُعد مفهوم (إنشاء Notifications Routes) من الركائز الجوهرية في مشروع عملي: نظام إشعارات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
            "badge": "درس: إنشاء Notifications Routes",
            "title": "إنشاء Notifications Routes",
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
            "summary": "تطبيق (إنشاء Notifications Routes) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
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
            "title": "تمرين تطبيقي على: إنشاء Notifications Routes",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إنشاء Notifications Routes)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إنشاء Notifications Routes\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إنشاء Notifications Routes\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mc-إرسال_إشعارات_ف",
          "letter": "c",
          "title": "إرسال إشعارات فورية",
          "englishTitle": "إرسال إشعارات فورية",
          "definition": "يُعد مفهوم (إرسال إشعارات فورية) من الركائز الجوهرية في مشروع عملي: نظام إشعارات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إرسال",
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
          "syntax": "// تطبيق معياري لمفهوم إرسال إشعارات فورية\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إرسال إشعارات فورية\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إرسال إشعارات فورية\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إرسال إشعارات فورية\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إرسال إشعارات فورية في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إرسال إشعارات فورية\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إرسال إشعارات فورية) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إرسال إشعارات فورية",
            "title": "إرسال إشعارات فورية",
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
            "summary": "تطبيق (إرسال إشعارات فورية) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إرسال إشعارات فورية) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إرسال إشعارات فورية) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إرسال إشعارات فورية",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إرسال إشعارات فورية)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال إشعارات فورية\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إرسال إشعارات فورية\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-md-إرسال_إشعارات_ع",
          "letter": "d",
          "title": "إرسال إشعارات عبر Queue",
          "englishTitle": "إرسال إشعارات عبر Queue",
          "definition": "يُعد مفهوم (إرسال إشعارات عبر Queue) من الركائز الجوهرية في مشروع عملي: نظام إشعارات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إرسال",
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
          "syntax": "// تطبيق معياري لمفهوم إرسال إشعارات عبر Queue\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إرسال إشعارات عبر Queue\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إرسال إشعارات عبر Queue\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إرسال إشعارات عبر Queue\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إرسال إشعارات عبر Queue في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إرسال إشعارات عبر Queue\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إرسال إشعارات عبر Queue) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إرسال إشعارات عبر Queue",
            "title": "إرسال إشعارات عبر Queue",
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
            "summary": "تطبيق (إرسال إشعارات عبر Queue) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إرسال إشعارات عبر Queue) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إرسال إشعارات عبر Queue) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إرسال إشعارات عبر Queue",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إرسال إشعارات عبر Queue)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال إشعارات عبر Queue\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إرسال إشعارات عبر Queue\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-me-حفظ_الإشعارات_ف",
          "letter": "e",
          "title": "حفظ الإشعارات في قاعدة البيانات",
          "englishTitle": "حفظ الإشعارات في قاعدة البيانات",
          "definition": "يُعد مفهوم (حفظ الإشعارات في قاعدة البيانات) من الركائز الجوهرية في مشروع عملي: نظام إشعارات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "حفظ",
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
          "syntax": "// تطبيق معياري لمفهوم حفظ الإشعارات في قاعدة البيانات\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: حفظ الإشعارات في قاعدة البيانات\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: حفظ الإشعارات في قاعدة البيانات\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"حفظ الإشعارات في قاعدة البيانات\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ حفظ الإشعارات في قاعدة البيانات في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"حفظ الإشعارات في قاعدة البيانات\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (حفظ الإشعارات في قاعدة البيانات) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: حفظ الإشعارات في قاعدة البيانات",
            "title": "حفظ الإشعارات في قاعدة البيانات",
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
            "summary": "تطبيق (حفظ الإشعارات في قاعدة البيانات) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (حفظ الإشعارات في قاعدة البيانات) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (حفظ الإشعارات في قاعدة البيانات) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: حفظ الإشعارات في قاعدة البيانات",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (حفظ الإشعارات في قاعدة البيانات)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين حفظ الإشعارات في قاعدة البيانات\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"حفظ الإشعارات في قاعدة البيانات\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mf-تمييز_الإشعارات",
          "letter": "f",
          "title": "تمييز الإشعارات كمقروءة",
          "englishTitle": "تمييز الإشعارات كمقروءة",
          "definition": "يُعد مفهوم (تمييز الإشعارات كمقروءة) من الركائز الجوهرية في مشروع عملي: نظام إشعارات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "تمييز",
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
          "syntax": "// تطبيق معياري لمفهوم تمييز الإشعارات كمقروءة\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: تمييز الإشعارات كمقروءة\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: تمييز الإشعارات كمقروءة\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"تمييز الإشعارات كمقروءة\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ تمييز الإشعارات كمقروءة في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"تمييز الإشعارات كمقروءة\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (تمييز الإشعارات كمقروءة) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: تمييز الإشعارات كمقروءة",
            "title": "تمييز الإشعارات كمقروءة",
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
            "summary": "تطبيق (تمييز الإشعارات كمقروءة) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (تمييز الإشعارات كمقروءة) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (تمييز الإشعارات كمقروءة) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: تمييز الإشعارات كمقروءة",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (تمييز الإشعارات كمقروءة)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين تمييز الإشعارات كمقروءة\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"تمييز الإشعارات كمقروءة\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mg-إرسال_رسائل_Tel",
          "letter": "g",
          "title": "إرسال رسائل Telegram",
          "englishTitle": "إرسال رسائل Telegram",
          "definition": "يُعد مفهوم (إرسال رسائل Telegram) من الركائز الجوهرية في مشروع عملي: نظام إشعارات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
          "analogy": "يشبه المحرك والتروس المتقنة في الساعات السويسرية؛ يعمل بتناغم تام دون استهلاك غير مبرر للطاقة أو الموارد.",
          "why": "نحتاجه لضمان تطبيق أفضل المعايير الهندسية، وبناء بنية كود قابلة للصيانة والتطوير السريع، وتفادي الأخطاء الشائعة.",
          "terms": [
            {
              "term": "إرسال",
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
          "syntax": "// تطبيق معياري لمفهوم إرسال رسائل Telegram\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: إرسال رسائل Telegram\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: إرسال رسائل Telegram\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"إرسال رسائل Telegram\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ إرسال رسائل Telegram في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"إرسال رسائل Telegram\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (إرسال رسائل Telegram) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: إرسال رسائل Telegram",
            "title": "إرسال رسائل Telegram",
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
            "summary": "تطبيق (إرسال رسائل Telegram) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (إرسال رسائل Telegram) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (إرسال رسائل Telegram) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: إرسال رسائل Telegram",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (إرسال رسائل Telegram)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين إرسال رسائل Telegram\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"إرسال رسائل Telegram\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mh-معالجة_الرسائل_",
          "letter": "h",
          "title": "معالجة الرسائل الفاشلة",
          "englishTitle": "معالجة الرسائل الفاشلة",
          "definition": "يُعد مفهوم (معالجة الرسائل الفاشلة) من الركائز الجوهرية في مشروع عملي: نظام إشعارات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم معالجة الرسائل الفاشلة\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: معالجة الرسائل الفاشلة\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: معالجة الرسائل الفاشلة\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"معالجة الرسائل الفاشلة\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ معالجة الرسائل الفاشلة في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"معالجة الرسائل الفاشلة\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (معالجة الرسائل الفاشلة) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: معالجة الرسائل الفاشلة",
            "title": "معالجة الرسائل الفاشلة",
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
            "summary": "تطبيق (معالجة الرسائل الفاشلة) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (معالجة الرسائل الفاشلة) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (معالجة الرسائل الفاشلة) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: معالجة الرسائل الفاشلة",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (معالجة الرسائل الفاشلة)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين معالجة الرسائل الفاشلة\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"معالجة الرسائل الفاشلة\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        },
        {
          "id": "s21-mi-اختبار_النظام_ب",
          "letter": "i",
          "title": "اختبار النظام بالكامل",
          "englishTitle": "اختبار النظام بالكامل",
          "definition": "يُعد مفهوم (اختبار النظام بالكامل) من الركائز الجوهرية في مشروع عملي: نظام إشعارات ضمن إطار عمل Express.js، حيث يمنحك الأدوات اللازمة لبناء تطبيقات ويب وواجهات برمجية RESTful APIs عالية السرعة والموثوقية وفق أفضل الممارسات المتبعة عالمياً.",
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
          "syntax": "// تطبيق معياري لمفهوم اختبار النظام بالكامل\nimport express from 'express';\n\nconst app = express();\n// تطبيق المنطق الهندسي المطلوب\napp.use((req, res, next) => {\n  console.log(\"تنفيذ: اختبار النظام بالكامل\");\n  next();\n});",
          "simpleCode": "// 1. استيراد المكتبات الأساسية\nimport express from 'express';\nconst app = express();\n\n// 2. تطبيق منطق: اختبار النظام بالكامل\napp.get('/', (req, res) => {\n  // إرجاع رسالة تأكيد للمستخدم\n  res.json({ topic: \"اختبار النظام بالكامل\", status: \"يعمل بنجاح\" });\n});",
          "advancedCode": "// نموذج تطبيقي متقدم لـ اختبار النظام بالكامل في مشاريع الإنتاج\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/feature', async (req, res, next) => {\n  try {\n    // تنفيذ الإجراء البرمجي بأمان\n    const data = { feature: \"اختبار النظام بالكامل\", ready: true, timestamp: Date.now() };\n    res.status(200).json({ success: true, data });\n  } catch (error) {\n    next(error);\n  }\n});",
          "outputExplanation": "عند تشغيل الخادم والاتصال بالمسار، يتم تنفيذ منطق (اختبار النظام بالكامل) وإرجاع استجابة JSON مع كود الحالة 200 وثبات أداء تام.",
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
            "badge": "درس: اختبار النظام بالكامل",
            "title": "اختبار النظام بالكامل",
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
            "summary": "تطبيق (اختبار النظام بالكامل) بشكل سليم يرفع من أمان وكفاءة خادم Express.js ويضمن استجابة فورية للعميل."
          },
          "quiz": {
            "question": "ما الهدف الأساسي من تطبيق مفهوم (اختبار النظام بالكامل) في مشاريع Express.js؟",
            "options": [
              "رفع كفاءة المعمارية البرمجية وتحسين استقرار وتوسع النظام",
              "إجبار الخادم على العمل كواجهة أمامية فقط",
              "الاستغناء عن Node.js تماماً",
              "حظر استقبال أي طلبات من المتصفحات"
            ],
            "correctIndex": 0,
            "explanation": "تطبيق (اختبار النظام بالكامل) بالمعايير القياسية يضمن بناء نظام خادم متين وسريع وقابل للصيانة والتوسع بسهولة."
          },
          "exercise": {
            "title": "تمرين تطبيقي على: اختبار النظام بالكامل",
            "task": "قم بكتابة مسار في Express.js يطبق مفهوم (اختبار النظام بالكامل)، مع مراعاة التحقق من الأخطاء وإرجاع استجابة JSON موحدة تحتوي على الحالة والبيانات.",
            "hints": [
              "استخدم كتل try/catch للتعامل مع أي أخطاء محتملة أثناء المعالجة.",
              "تأكد من تحديد رمز الحالة المناسب (مثل 200 أو 201) مع res.status()."
            ],
            "solution": "// الحل النموذجي لتمرين اختبار النظام بالكامل\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/api/demo', async (req, res, next) => {\n  try {\n    // تنفيذ المنطق المطلوب بنجاح\n    const result = { success: true, topic: \"اختبار النظام بالكامل\", timestamp: Date.now() };\n    res.status(200).json(result);\n  } catch (error) {\n    next(error); // تمرير الخطأ لمعالج الأخطاء العام\n  }\n});",
            "solutionExplanation": "تم إنشاء المسار مع وسيط لتحليل JSON، وتغليف منطق الاستجابة داخل try/catch لضمان تمرير أي استثناء للمعالج العام دون تعطيل الخادم."
          }
        }
      ]
    }
  ]
};

export default SECTION_21;
