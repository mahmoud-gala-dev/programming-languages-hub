// src/api/gemini.js
// تكامل المعلم الذكي التفاعلي مع Google Gemini API
// يدعم مجمع المفاتيح المتعددة (Key Pool)، التبديل التلقائي عند انتهاء الحصة (429 Failover)، وتوليد الشروحات والاختبارات

const DEFAULT_API_KEY = "";

/**
 * الحصول على مصفوفة كافة المفاتيح المحفوظة في المجمع
 */
export function getGeminiKeysPool() {
  try {
    const raw = localStorage.getItem("nodejs_gemini_api_keys_pool");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.filter(k => k && k.trim());
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

/**
 * حفظ مصفوفة المفاتيح في التخزين المحلي
 */
export function saveGeminiKeysPool(keys) {
  try {
    const cleanKeys = Array.from(new Set(keys.map(k => k.trim()).filter(Boolean)));
    localStorage.setItem("nodejs_gemini_api_keys_pool", JSON.stringify(cleanKeys));
    if (cleanKeys.length > 0) {
      localStorage.setItem("nodejs_gemini_user_api_key", cleanKeys[0]);
    } else {
      localStorage.removeItem("nodejs_gemini_user_api_key");
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * الحصول على المفتاح النشط الأول
 */
export function getActiveApiKey() {
  const pool = getGeminiKeysPool();
  return pool[0] || DEFAULT_API_KEY;
}

/**
 * حفظ مفتاح مستخدم فردي وتحديث المجمع
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
 * فحص واختبار كافة المفاتيح في المجمع بالتوازي
 */
export async function testGeminiKeysInParallel(keys) {
  const testPrompt = "رد بكلمة واحدة: جاهز";

  const promises = keys.map(async (key) => {
    const startTime = performance.now();
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7000);

      const res = await fetch(endpoint, {
        method: "POST",
        signal: controller.signal,
        headers: { 
          "Content-Type": "application/json",
          "X-goog-api-key": key
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: testPrompt }] }],
          generationConfig: { maxOutputTokens: 10 }
        })
      });

      clearTimeout(timeoutId);
      const latency = Math.round(performance.now() - startTime);

      if (res.ok) {
        return { key, status: "active", latency, message: "نشط ويعمل بكفاءة ✓" };
      }

      if (res.status === 429) {
        return { key, status: "exhausted", latency, message: "نفدت الحصة الحالية (Rate Limit) ⚠️" };
      }

      return { key, status: "invalid", latency, message: `مفتاح غير صالح (رمز ${res.status}) ✕` };
    } catch (err) {
      const latency = Math.round(performance.now() - startTime);
      return { key, status: "error", latency, message: err.name === "AbortError" ? "انتهت مهلة الاتصال" : "خطأ اتصال بالشبكة" };
    }
  });

  return Promise.all(promises);
}

/**
 * إرسال استفسار أو طلب إلى Google Gemini مع دعم التبديل التلقائي لمفاتيح المجمع
 */
export async function askGeminiTutor(prompt, systemInstruction = "") {
  const pool = getGeminiKeysPool();
  let lastError = null;

  for (let i = 0; i < pool.length; i++) {
    const key = pool[i];
    // ندعم نموذج gemini-flash-latest مع رأس X-goog-api-key ورابط البديل
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${key}`;

    const bodyPayload = {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1500
      }
    };

    if (systemInstruction) {
      bodyPayload.systemInstruction = {
        parts: [{ text: systemInstruction }]
      };
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-goog-api-key": key
        },
        body: JSON.stringify(bodyPayload)
      });

      if (response.status === 429) {
        console.warn(`المفتاح رقم ${i + 1} مستنفذ الحصة، جاري الانتقال للمفتاح التالي...`);
        lastError = new Error("نفدت حصة الاستخدام للمفتاح الحالي.");
        continue;
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `خطأ استجابة من خادم Gemini (${response.status})`);
      }

      const data = await response.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!reply) throw new Error("لم يتم استلام نص من نموذج الذكاء الاصطناعي");

      return reply;
    } catch (err) {
      lastError = err;
      if (err.message.includes("حصة") || err.message.includes("Quota") || err.message.includes("429")) {
        continue;
      }
      break;
    }
  }

  throw lastError || new Error("تعذر الاتصال بـ Google Gemini. يرجى التحقق من اتصال الإنترنت أو تجربة مفتاح آخر.");
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

  const res = await askGeminiTutor(prompt);
  try {
    const cleaned = res.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(cleaned);
  } catch {
    return null;
  }
}

