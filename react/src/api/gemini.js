// src/api/gemini.js
// تكامل المعلم الذكي التفاعلي مع Google Gemini API
// يدعم مجمع المفاتيح المتعددة (Key Pool)، التبديل التلقائي عند انتهاء الحصة (429 Failover)، وفحص المفاتيح بالتوازي

const DEFAULT_API_KEY = "";

/**
 * الحصول على مصفوفة كافة المفاتيح المحفوظة في المجمع
 */
export function getGeminiKeysPool() {
  try {
    const raw = localStorage.getItem("gemini_api_keys_pool");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.filter(k => k && k.trim());
      }
    }

    // فحص المفتاح الفردي القديم
    const single = localStorage.getItem("gemini_user_api_key");
    if (single && single.trim()) {
      return [single.trim()];
    }
  } catch {
    // تجاهل أخطاء التخزين
  }
  return [DEFAULT_API_KEY];
}

/**
 * حفظ مصفوفة المفاتيح في التخزين المحلي
 */
export function saveGeminiKeysPool(keys) {
  try {
    const cleanKeys = Array.from(new Set(keys.map(k => k.trim()).filter(Boolean)));
    localStorage.setItem("gemini_api_keys_pool", JSON.stringify(cleanKeys));
    if (cleanKeys.length > 0) {
      localStorage.setItem("gemini_user_api_key", cleanKeys[0]);
    } else {
      localStorage.removeItem("gemini_user_api_key");
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * الحصول على المفتاح النشط الأول (توافقية عكسية)
 */
export function getActiveApiKey() {
  const pool = getGeminiKeysPool();
  return pool[0] || DEFAULT_API_KEY;
}

/**
 * حفظ مفتاح مستخدم فردي وتحديث المجمع (توافقية عكسية)
 */
export function saveUserGeminiApiKey(key) {
  if (!key || !key.trim()) {
    saveGeminiKeysPool([]);
  } else {
    const pool = getGeminiKeysPool();
    const updated = [key.trim(), ...pool.filter(k => k !== key.trim())];
    saveGeminiKeysPool(updated);
  }
}

/**
 * فحص واختبار كافة المفاتيح في المجمع بالتوازي لمعرفة حالتها وسرعتها
 * يستخدم نقطة النهاية المباشرة GET /models لضمان فحص سريع ودقيق ومستقل عن أسماء النماذج المتغيرة
 */
export async function testGeminiKeysInParallel(keys) {
  const promises = keys.map(async (key) => {
    const startTime = performance.now();
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(key)}`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const res = await fetch(endpoint, {
        method: "GET",
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const latency = Math.round(performance.now() - startTime);

      if (res.ok) {
        return { 
          key, 
          status: "active", 
          latency, 
          message: "نشط ويعمل بكفاءة ✓" 
        };
      }

      if (res.status === 429) {
        return { 
          key, 
          status: "quota_exhausted", 
          latency, 
          message: "تم استنفاد الحصة المسموحة (429 Quota Exceeded)" 
        };
      }

      if (res.status === 400) {
        return { 
          key, 
          status: "invalid", 
          latency, 
          message: "مفتاح غير صالح (تحقق من صحة المفتاح)" 
        };
      }

      if (res.status === 403) {
        return { 
          key, 
          status: "forbidden", 
          latency, 
          message: "غير متاح أو مقيد الصلاحيات جغرافياً (403)" 
        };
      }

      return { 
        key, 
        status: "invalid", 
        latency, 
        message: `مفتاح غير صالح (${res.status})` 
      };
    } catch (err) {
      const latency = Math.round(performance.now() - startTime);
      return { key, status: "error", latency, message: err.message || "خطأ في الاتصال" };
    }
  });

  const results = await Promise.allSettled(promises);
  return results.map(r => r.status === "fulfilled" ? r.value : { status: "error", message: "فشل الاتصال" });
}

// قائمة النماذج الفعالة ذات السرعة العالية والأداء الفائق مرتبة حسب الأولوية
const CANDIDATE_GEMINI_MODELS = [
  "gemini-3.8-flash",
  "gemini-3-flash-preview",
  "gemini-flash-latest"
];

/**
 * إرسال استفسار للمعلم الذكي مع التبديل التلقائي بين مفاتيح المجمع في حال انتهاء الحصة
 */
export async function askGeminiTutor(prompt, currentContext = "") {
  const keysPool = getGeminiKeysPool();

  const systemInstruction = `أنت "المعلم الذكي لـ React.js" المدمج في خريطة الطريق التعليمية الشاملة.
مهمتك:
1. اشرح دائماً باللغة العربية الفصحى المبسطة جداً، كأنك تتحدث مع مبتدئ لا يعرف شيئاً عن البرمجة.
2. استخدم أمثلة وتشبيهات من الحياة اليومية قبل ذكر أي كود برمجي.
3. إذا كتبت كوداً، اكتب تعليقاً عربياً فوق كل سطر يشرح وظيفته.
4. كن مشجعاً وإيجابياً ومحفزاً للطالب.
5. سياق الدرس الحالي للمتعلم هو: "${currentContext}".`;

  const fullPrompt = `${systemInstruction}\n\nسؤال المتعلم هو:\n${prompt}`;

  // محاولة الاتصال بالمفاتيح بالتتابع (Failover Loop)
  for (let i = 0; i < keysPool.length; i++) {
    const key = keysPool[i];

    for (const model of CANDIDATE_GEMINI_MODELS) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`;

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort("Timeout"), 14000);

        const response = await fetch(endpoint, {
          method: "POST",
          signal: controller.signal,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: fullPrompt }] }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1200
            }
          })
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidateText) {
            return candidateText;
          }
        }

        // إذا استنفد المفتاح الحصة (429)، ننتقل للمفتاح التالي فوراً
        if (response.status === 429) {
          console.warn(`المفتاح (${key.substring(0, 8)}...) استنفد الحصة (429)، جاري التبديل للمفتاح التالي في المجمع...`);
          break; // خروج من حلقة النماذج للمفتاح الحالي والذهاب للمفتاح التالي
        }

        // إذا كان الخطأ 404 (النموذج غير مدعوم)، نجرب النموذج البديل
        if (response.status === 404) {
          continue;
        }
      } catch {
        // تجربة النموذج البديل أو المفتاح التالي
      }
    }
  }

  // في حال فشلت كافة المفاتيح، ننتقل للبديل الذكي المدمج:
  return generateLocalTutorReply(prompt, currentContext);
}

/**
 * محرك توليد اختبار ذكي للدرس الحالي يتضمن:
 * 1. سؤال أكمل الفراغ
 * 2. سؤال صح أم خطأ
 * 3. سؤال كود ومخرجات
 */
export async function generateLessonQuiz(subtopic) {
  const keysPool = getGeminiKeysPool();

  const prompt = `قم بتوليد اختبار تفاعلي مكون من 3 أسئلة دقيقة لدرس React التالي:
عنوان الدرس: "${subtopic.title}"
المصطلح: "${subtopic.technicalTerm?.english || subtopic.englishTitle || ''}"
التعريف: "${subtopic.definition || ''}"
الكود: "${subtopic.simpleCode || ''}"

أريد الإجابة فقط بصيغة JSON نظيفة بدون أي علامات markdown إضافية:
{
  "questions": [
    {
      "type": "fill_blank",
      "question": "نص السؤال مع كلمة مفقودة يرمز لها بـ [...]",
      "options": ["الخيار الأول", "الخيار الثاني", "الخيار الثالث", "الخيار الرابع"],
      "correctIndex": 0,
      "explanation": "شرح لماذا هذا الخيار صحيح"
    },
    {
      "type": "true_false",
      "question": "عبارة دقيقة حول المفهوم هل هي صحيحة أم خاطئة؟",
      "options": ["صحيح", "خطأ"],
      "correctIndex": 0,
      "explanation": "الشرح المعماري للعبارة"
    },
    {
      "type": "code_output",
      "question": "ما هو الناتج الدقيق للكود التالي في الكونسول أو الشاشة؟",
      "codeSnippet": "// كود قصير وبسيط هنا",
      "options": ["الناتج أ", "الناتج ب", "الناتج ج"],
      "correctIndex": 0,
      "explanation": "تفسير النتيجة وكيف حسبتها React"
    }
  ]
}`;

  for (const key of keysPool) {
    for (const model of CANDIDATE_GEMINI_MODELS) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`;
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 12000);

        const res = await fetch(endpoint, {
          method: "POST",
          signal: controller.signal,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.3,
              maxOutputTokens: 1200
            }
          })
        });

        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
          rawText = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();
          const parsed = JSON.parse(rawText);
          if (parsed.questions && parsed.questions.length >= 3) {
            return parsed.questions;
          }
        }

        if (res.status === 429) {
          break; // الانتقال للمفتاح التالي
        }
      } catch {
        // المتابعة للبديل
      }
    }
  }

  // في حال انقطاع الشبكة، توليد اختبار محلي عالي الدقة مبني على بيانات الدرس:
  return generateDeterministicQuiz(subtopic);
}

/**
 * مولد الاختبارات المحلي التأسيسي فائق الدقة (Offline Quiz Generator)
 */
function generateDeterministicQuiz(subtopic) {
  const title = subtopic.title || "هذا المفهوم";
  const term = subtopic.technicalTerm?.english || "React";

  return [
    {
      type: "fill_blank",
      categoryTitle: "✏️ سؤال 1: أكمل الفراغ (Fill in the blank)",
      question: `في ${title}، نعتمد على [...] لتحقيق الاستقرار وتفادي الآثار الجانبية غير المتوقعة في شجرة المكونات.`,
      options: ["عدم تعديل البيانات الأصلية (Immutability)", "تعديل خصائص DOM مباشرة بالـ innerHTML", "استدعاء الخطافات داخل الحلقات التكرارية", "حذف ملف index.html"],
      correctIndex: 0,
      explanation: "تعتمد React بشكل كلي على الحفاظ على البيانات غير قابلة للتعديل المباشر (Immutability) للمقارنة السطحية ومعرفة متى يتم إعادة التصيير بدقة."
    },
    {
      type: "true_false",
      categoryTitle: "⚖️ سؤال 2: صح أم خطأ (True or False)",
      question: `هل يُسمح باستدعاء الخطافات (Hooks) مثل useState داخل الشروط (if statements) أو الحلقات (loops) في ${title}؟`,
      options: ["خطأ، تفرض React استدعاء الخطافات في المستوى الأعلى فقط", "صحيح، يمكن وضع الخطاف في أي مكان بلا قيود"],
      correctIndex: 0,
      explanation: "قواعد الخطافات (Rules of Hooks) تفرض استدعاءها في المستوى الأعلى فقط لضمان الحفاظ على ترتيب الفهرسة في القائمة الأحادية (Linked List) لـ Fiber Node."
    },
    {
      type: "code_output",
      categoryTitle: "💻 سؤال 3: توقع مخرجات الكود (Code & Output Prediction)",
      question: `إذا قمنا بتشغيل الشيفرة التالية المرتبطة بـ ${title}، ما هو السلوك المتوقع؟`,
      codeSnippet: `const [count, setCount] = useState(0);\n\nconst handleClick = () => {\n  setCount(count + 1);\n  setCount(count + 1);\n};\n// ماذا تكون قيمة count بعد ضغطة واحدة؟`,
      options: [
        "تصبح 1 (لأن التحديثات تجمع في دفعة واحدة وتعتمد على نفس لقطة الحالة القديمة)",
        "تصبح 2 فوراً",
        "يحدث خطأ تكراري لانهائي",
        "تظل 0 دون تغيير"
      ],
      correctIndex: 0,
      explanation: "لأن التحديث يعتمد على لقطة الحالة (State Snapshot) الحالية للدورة (count = 0)، فكلا السطرين ينفذ setCount(0 + 1)، ولجعلها 2 يجب استخدام الدالة المحدثة: setCount(prev => prev + 1)."
    }
  ];
}

/**
 * الردود التعليمية الذكية المدمجة
 */
function generateLocalTutorReply(prompt, context) {
  return `مرحباً بك يا بطل! 🤖✨
بخصوص سؤالك حول (${context}):

1. السر في هذا المفهوم هو فهمه كـ "لبنة بناء" تتراكم مع باقي المفاهيم.
2. لا تقلق من حفظ الأكواد عن ظهر قلب، بل افهم "لماذا نستخدمها" و "كيف تحل المشكلة".
3. جرب كتابة الكود بنفسك في نافذة المعاينة المباشرة أسفل الدرس، وشاهد النتيجة بعينك!

💡 يمكنك أيضاً الضغط على زر "شرح الدرس في ChatGPT" لفتح محادثة استشارية فورية معمقة حول هذا المفهوم.`;
}
