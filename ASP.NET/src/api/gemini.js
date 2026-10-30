// src/api/gemini.js
// تكامل المعلم الذكي التفاعلي مع Google Gemini API
// يدعم مجمع المفاتيح المتعددة (Key Pool)، التبديل التلقائي عند انتهاء الحصة (429 Failover)، وتوليد الشروحات والاختبارات

const DEFAULT_API_KEY = "";

/**
 * الحصول على مصفوفة كافة المفاتيح المحفوظة في المجمع
 */
export function getGeminiKeysPool() {
  try {
    const raw = localStorage.getItem("aspnet_gemini_api_keys_pool");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.filter(k => k && k.trim());
      }
    }

    const single = localStorage.getItem("aspnet_gemini_user_api_key");
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
    localStorage.setItem("aspnet_gemini_api_keys_pool", JSON.stringify(cleanKeys));
    if (cleanKeys.length > 0) {
      localStorage.setItem("aspnet_gemini_user_api_key", cleanKeys[0]);
    } else {
      localStorage.removeItem("aspnet_gemini_user_api_key");
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
    saveGeminiKeysPool([DEFAULT_API_KEY]);
  } else {
    const pool = getGeminiKeysPool();
    const updated = [key.trim(), ...pool.filter(k => k !== key.trim())];
    saveGeminiKeysPool(updated);
  }
}

/**
 * فحص واختبار كافة المفاتيح في المجمع بالتوازي
 */
export function testGeminiKeysInParallel(keys) {
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
      } else {
        const errorData = await res.json().catch(() => ({}));
        const status = res.status === 429 ? "quota_exceeded" : "invalid";
        const message = res.status === 429 
          ? "تم استنفاد الحصة (429 Rate Limit)" 
          : (errorData?.error?.message || `خطأ (${res.status})`);
        return { key, status, latency, message };
      }
    } catch (err) {
      const isTimeout = err.name === "AbortError";
      return { 
        key, 
        status: "error", 
        latency: 7000, 
        message: isTimeout ? "انتهت مهلة الاتصال (Timeout)" : "فشل الاتصال بالشبكة" 
      };
    }
  });

  return Promise.all(promises);
}

/**
 * تدوير المفتاح الحالي ووضعه في نهاية المصفوفة عند حدوث خطأ 429
 */
function rotateFailedKey(failedKey) {
  try {
    const pool = getGeminiKeysPool();
    const filtered = pool.filter(k => k !== failedKey);
    const reordered = [...filtered, failedKey];
    saveGeminiKeysPool(reordered);
    console.warn("🔄 تم تدوير المفتاح واستبداله بالمفتاح التالي في المجمع.");
  } catch (e) {
    console.error("فشل تدوير المفتاح:", e);
  }
}

/**
 * إرسال طلب إلى Gemini مع تدوير تلقائي للمفاتيح ونماذج متعددة
 */
export async function askGemini(prompt, systemInstruction = "") {
  let pool = getGeminiKeysPool();
  if (pool.length === 0) {
    pool = [DEFAULT_API_KEY];
  }

  // تسلسل النماذج المتاحة
  const models = [
    "gemini-flash-latest",
    "gemini-3.8-flash",
    "gemini-3-flash-preview"
  ];

  let lastError = null;

  for (let kIdx = 0; kIdx < pool.length; kIdx++) {
    const currentKey = pool[kIdx];

    for (const model of models) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

      try {
        const payload = {
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2500,
          }
        };

        if (systemInstruction) {
          payload.systemInstruction = {
            parts: [{ text: systemInstruction }]
          };
        }

        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": currentKey
          },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          const data = await res.json();
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            return { success: true, text, model, key: currentKey };
          }
        }

        if (res.status === 429) {
          console.warn(`المفتاح (${currentKey.slice(0, 8)}...) استنفد الحصة على ${model}. جاري التدوير...`);
          rotateFailedKey(currentKey);
          break; // انتقل للمفتاح التالي
        }

        const errJson = await res.json().catch(() => ({}));
        lastError = errJson?.error?.message || `HTTP ${res.status}`;
      } catch (err) {
        lastError = err.message || "خطأ في الشبكة";
      }
    }
  }

  return {
    success: false,
    error: lastError || "تعذر الحصول على استجابة من كافة مفاتيح Gemini المتاحة."
  };
}

/**
 * معلم الذكاء الاصطناعي المتخصص في C# و ASP.NET Core MVC
 */
export async function askGeminiTutor(userQuestion, currentLesson) {
  const systemPrompt = `أنت "المعلم الذكي المساعد" في منصة خريطة طريق ASP.NET Core MVC (من الصفر للاحتراف).
مهمتك مساعدة المتعلم العربي وتبسيط كافة المفاهيم البرمجية كأنك تشرح لشخص مبتدئ تماماً.
القواعد الإرشادية:
1. استخدم لغة عربية فصيحة، محفزة وسلسة، مع إعطاء تشبيهات واقعية ذكية.
2. عند كتابة أكواد C#، ضع تعليقاً عربياً فوق كل سطر يوضح معناه.
3. التزم بأحدث معايير .NET 8 / .NET 9 و C# 12 / 13 ومعمارية ASP.NET Core MVC.
4. اذكر دائماً أفضل الممارسات وتفادي الأخطاء الشائعة.`;

  const prompt = `الدرس الحالي: ${currentLesson?.title || "أساسيات ASP.NET Core MVC"}
معرف الدرس: ${currentLesson?.subId || "1.1.1"}
سؤال أو طلب المتعلم:
"${userQuestion}"

اشرح للمتعلم بأسلوب مشوق ودقيق، واكتب كوداً توضيحياً بسيطاً مع تعليقات على كل سطر.`;

  return askGemini(prompt, systemPrompt);
}
