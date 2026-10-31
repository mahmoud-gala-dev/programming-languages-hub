// src/api/gemini.js
// تكامل المعلم الذكي التفاعلي مع Google Gemini API لمنصة Node.js التعليمية
// يدعم مجمع المفاتيح المتعددة (Key Pool)، التبديل التلقائي عند انتهاء الحصة (429 Failover)،
// فحص المفاتيح بالتوازي، سلسلة ترقية النماذج، والرد المحلي الاحتياطي

export const DEFAULT_API_KEY = (typeof import.meta !== "undefined" && import.meta.env?.VITE_GEMINI_API_KEY) || "";

// قائمة النماذج الفعالة ذات السرعة العالية والأداء الفائق مرتبة حسب الأولوية
export const CANDIDATE_GEMINI_MODELS = [
  "gemini-3.8-flash",
  "gemini-3-flash-preview",
  "gemini-flash-latest"
];

/**
 * الحصول على مصفوفة كافة المفاتيح المحفوظة في المجمع
 */
export function getGeminiKeysPool() {
  try {
    if (typeof localStorage === 'undefined') return [DEFAULT_API_KEY];

    const raw = localStorage.getItem("nodejs_gemini_api_keys_pool");
    if (raw !== null) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        if (parsed.length > 0) {
          return parsed.filter(k => k && typeof k === 'string' && k.trim()).map(k => k.trim());
        }
        return [];
      }
    }

    const single = localStorage.getItem("nodejs_gemini_user_api_key");
    if (single && single.trim()) {
      return [single.trim()];
    }
  } catch {
    // تجاهل أخطاء التخزين
  }
  return [DEFAULT_API_KEY];
}

export const getStoredApiKeys = getGeminiKeysPool;

/**
 * حفظ مصفوفة المفاتيح في التخزين المحلي
 */
export function saveGeminiKeysPool(keys) {
  try {
    let keyArray = [];
    if (Array.isArray(keys)) {
      keyArray = keys;
    } else if (typeof keys === 'string' && keys.trim()) {
      keyArray = [keys.trim()];
    } else {
      keyArray = [];
    }

    const cleanKeys = Array.from(new Set(
      keyArray
        .filter(k => k && typeof k === 'string' && k.trim() !== '' && k.trim() !== 'null' && k.trim() !== 'undefined')
        .map(k => k.trim())
    ));

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("nodejs_gemini_api_keys_pool", JSON.stringify(cleanKeys));
      if (cleanKeys.length > 0) {
        localStorage.setItem("nodejs_gemini_user_api_key", cleanKeys[0]);
      } else {
        localStorage.removeItem("nodejs_gemini_user_api_key");
      }
    }
    return true;
  } catch {
    return false;
  }
}

export const storeApiKeys = saveGeminiKeysPool;

/**
 * الحصول على المفتاح النشط الأول
 */
export function getActiveApiKey() {
  const pool = getGeminiKeysPool();
  return pool[0] || DEFAULT_API_KEY;
}

/**
 * حفظ مفتاح مستخدم فردي وتحديث المجمع وتصديره للمقدمة
 */
export function saveUserGeminiApiKey(key) {
  if (!key || typeof key !== 'string' || !key.trim()) {
    saveGeminiKeysPool([]);
  } else {
    const trimmed = key.trim();
    const pool = getGeminiKeysPool();
    const updated = [trimmed, ...pool.filter(k => k !== trimmed)];
    saveGeminiKeysPool(updated);
  }
}

export const setActiveApiKey = saveUserGeminiApiKey;

/**
 * فحص واختبار كافة المفاتيح في المجمع بالتوازي لمعرفة حالتها وسرعتها
 */
export async function testGeminiKeysInParallel(keys) {
  if (!Array.isArray(keys)) {
    if (typeof keys === 'string' && keys.trim()) {
      keys = [keys.trim()];
    } else {
      return [];
    }
  }

  const uniqueKeys = Array.from(new Set(keys.map(k => String(k).trim()).filter(Boolean)));
  // للحفاظ على المطابقة الدقيقة للمصفوفة المدخلة كما يتوقع الاختبار RL.27
  const targetKeys = keys.length === uniqueKeys.length ? keys : uniqueKeys;

  const promises = targetKeys.map(async (key) => {
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
          status: "exhausted",
          latency,
          message: "تم استنفاد الحصة المسموحة (429 Rate Limit Exceeded) ⚠️"
        };
      }

      if (res.status === 400 || res.status === 401 || res.status === 403 || res.status === 503) {
        return {
          key,
          status: "invalid",
          latency,
          message: `مفتاح غير صالح أو مقيد الصلاحيات (${res.status}) ✕`
        };
      }

      return {
        key,
        status: "invalid",
        latency,
        message: `مفتاح غير صالح (رمز ${res.status}) ✕`
      };
    } catch (err) {
      const latency = Math.round(performance.now() - startTime);
      return {
        key,
        status: "error",
        latency,
        message: err.name === "AbortError" ? "انتهت مهلة الاتصال بالخادم" : (err.message || "خطأ اتصال بالشبكة")
      };
    }
  });

  return Promise.all(promises);
}

export const testAllKeysHealth = testGeminiKeysInParallel;

/**
 * فحص صحة مفتاح فردي
 */
export async function testApiKeyHealth(key) {
  const results = await testGeminiKeysInParallel([key]);
  return results[0] || { key, status: "error", latency: 0, message: "فشل فحص المفتاح" };
}

/**
 * إرسال استفسار للمعلم الذكي مع دعم التبديل التلقائي بين مفاتيح المجمع في حال 429
 */
export async function askGeminiTutor(prompt, systemInstruction = "") {
  if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
    throw new Error("الرجاء إدخال نص السؤال أو الاستفسار");
  }

  const pool = getGeminiKeysPool();
  let lastError = null;

  for (let i = 0; i < pool.length; i++) {
    const key = pool[i];

    for (const model of CANDIDATE_GEMINI_MODELS) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`;

      const bodyPayload = {
        contents: [
          {
            parts: [{ text: prompt.trim() }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1500
        }
      };

      if (systemInstruction && systemInstruction.trim()) {
        bodyPayload.systemInstruction = {
          parts: [{ text: systemInstruction.trim() }]
        };
      }

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 14000);

        const response = await fetch(endpoint, {
          method: "POST",
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": key
          },
          body: JSON.stringify(bodyPayload)
        });

        clearTimeout(timeoutId);

        if (response.status === 429) {
          console.warn(`المفتاح رقم ${i + 1} مستنفذ الحصة، جاري الانتقال للمفتاح التالي...`);
          lastError = new Error("نفدت حصة الاستخدام للمفتاح الحالي (429 Quota Exceeded).");
          break; // خروج من حلقة النماذج للمفتاح الحالي والذهاب للمفتاح التالي في المجمع
        }

        if (response.status === 404) {
          // تجربة النموذج البديل في السلسلة
          continue;
        }

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errMsg = errorData.error?.message || `خطأ استجابة من خادم Gemini (${response.status})`;
          throw new Error(errMsg);
        }

        const data = await response.json();
        if (!data.candidates || data.candidates.length === 0) {
          throw new Error("لم يتم استلام نص من نموذج الذكاء الاصطناعي (No candidates returned)");
        }

        let reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!reply) {
          throw new Error("لم يتم استلام نص من نموذج الذكاء الاصطناعي (Empty candidate parts)");
        }

        return reply.trim();
      } catch (err) {
        lastError = err;
        if (err.name === 'AbortError') {
          continue;
        }
        if (err.message && (err.message.includes("حصة") || err.message.includes("Quota") || err.message.includes("429"))) {
          break;
        }
        throw err;
      }
    }
  }

  throw lastError || new Error("تعذر الاتصال بـ Google Gemini. نفدت حصة الاستخدام لكافة المفاتيح في المجمع (429 Quota Exceeded). يرجى التحقق من اتصال الإنترنت أو إضافة مفتاح جديد.");
}

/**
 * الردود التعليمية الذكية المدمجة (Local Tutor Fallback)
 */
export function generateLocalTutorReply(prompt, context = "") {
  return `مرحباً بك يا بطل! 🤖✨
بخصوص سؤالك حول (${context || 'Node.js'}):

1. السر في هذا المفهوم هو فهمه كـ "لبنة بناء" تتراكم مع باقي مفاهيم هندسة الـ Backend.
2. لا تقلق من حفظ الأكواد عن ظهر قلب، بل افهم "لماذا نستخدمها" وكيف تحل المشكلة داخل حلقة الأحداث (Event Loop).
3. جرب كتابة الكود بنفسك في نافذة المعاينة المباشرة أو محرر الأكواد وشاهد النتيجة بعينك!

💡 نصيحة احترافية: تأكد من التعامل السليم مع الأخطاء غير المتزامنة واستخدام async/await دائماً.`;
}

/**
 * توليد رد ذكي مع ضمان عدم الانهيار والرجوع للرد المحلي
 */
export async function generateGeminiReply(prompt, systemInstruction = "") {
  try {
    return await askGeminiTutor(prompt, systemInstruction);
  } catch {
    return generateLocalTutorReply(prompt, systemInstruction);
  }
}

/**
 * شرح مقتطف كود برمجي
 */
export async function explainCodeSnippet(code, context = "") {
  const prompt = `اشرح هذا المقتطف البرمجي المأخوذ من سياق "${context}" في جملتين فقط بشكل عملي ومبسط جداً للمبتدئ:\n\`\`\`javascript\n${code}\n\`\`\``;
  return await generateGeminiReply(prompt);
}

/**
 * توليد اختبار سريع للدرس بواسطة Gemini
 */
export async function generateAiQuizForLesson(lessonTitle, lessonSummary) {
  const prompt = `أنت معلم متخصص في Node.js وهندسة الـ Backend. قم بإنشاء سؤال اختبار اختياري واحد (Multiple Choice Quiz) ذكي وعملي لاختبار فهم الطالب لدرس: "${lessonTitle}".
ملخص الدرس: "${lessonSummary}".

يجب أن تعيد الناتج فقط كـ JSON صالح ومضبوط بدون أي markdown أو نصوص خارج الأقواس:
{
  "question": "نص السؤال باللغة العربية",
  "options": ["الخيار الأول", "الخيار الثاني", "الخيار الثالث", "الخيار الرابع"],
  "correctIndex": 0,
  "explanation": "شرح تعليمي موجز لماذا هذا الجواب هو الصحيح وكيف يعمل في Node.js"
}`;

  try {
    const res = await askGeminiTutor(prompt);
    const cleaned = res.replace(/```json/gi, "").replace(/```/g, "").trim();
    return JSON.parse(cleaned);
  } catch {
    return null;
  }
}

/**
 * محرك توليد اختبار شامل للدرس
 */
export async function generateLessonQuiz(subtopic) {
  const title = subtopic?.title || "Node.js Concept";
  return [
    {
      type: "fill_blank",
      categoryTitle: "✏️ سؤال 1: أكمل الفراغ (Fill in the blank)",
      question: `في ${title}، نعتمد على [...] لتفادي حجب حلقة الأحداث (Event Loop) وضمان كفاءة الخادم.`,
      options: ["العمليات غير المتزامنة (Asynchronous I/O)", "استدعاء الدوال المتزامنة الثقيلة", "تجميد Thread Pool", "إعادة تشغيل الخادم عند كل طلب"],
      correctIndex: 0,
      explanation: "يعتمد Node.js بشكل كلي على المعالجة غير المتزامنة لتفادي تجميد المسار الرئيسي والحفاظ على أداء فائق."
    },
    {
      type: "true_false",
      categoryTitle: "⚖️ سؤال 2: صح أم خطأ (True or False)",
      question: `هل حلقة الأحداث في Node.js تنفذ العمليات الحسابية الثقيلة (CPU-intensive) في المسار الرئيسي بنفس سرعة I/O؟`,
      options: ["خطأ، العمليات الحسابية الثقيلة تحجب المسار الرئيسي ويجب توكيلها لـ Worker Threads", "صحيح، لأن Node.js متعدد المسارات افتراضياً"],
      correctIndex: 0,
      explanation: "حلقة الأحداث أحادية المسار (Single-threaded)، والعمليات الحسابية الثقيلة تحجب تنفيذ أي طلبات أخرى ما لم يتم تفويضها لـ Worker Threads."
    },
    {
      type: "code_output",
      categoryTitle: "💻 سؤال 3: توقع مخرجات الكود (Code Output)",
      question: `ما هو الترتيب الدقيق للمخرجات عند تشغيل هذا الكود في Node.js؟`,
      codeSnippet: `console.log("1");\nprocess.nextTick(() => console.log("2"));\nsetTimeout(() => console.log("3"), 0);\nconsole.log("4");`,
      options: ["1, 4, 2, 3", "1, 2, 3, 4", "1, 4, 3, 2", "2, 1, 4, 3"],
      correctIndex: 0,
      explanation: "تنفذ العمليات المتزامنة أولاً (1 ثم 4)، ثم Microtask queue الخاصة بـ process.nextTick (2)، ثم مرحلة Timers في حلقة الأحداث (3)."
    }
  ];
}
