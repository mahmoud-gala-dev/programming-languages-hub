// src/utils/promptGenerator.js
// أداة توليد برومبتات الشرح البيداغوجي المتقدم والمعماري العميق وتحويلها فوراً إلى ChatGPT و Gemini و Claude

/**
 * توليد نص برومبت احترافي ومعماري فائق الدقة للمفهوم الحالي
 * يغطي الركائز السبع للبيداغوجيا الحديثة وخبايا محرك React 19 ومعايير الإنتاج
 * @param {Object} subtopic بيانات الدرس
 * @param {string} sectionTitle عنوان القسم
 * @returns {string} نص البرومبت المهندس بعناية
 */
export function generateChatGptPrompt(subtopic, sectionTitle = "خريطة طريق React.js الاحترافية") {
  if (!subtopic) return "";

  const englishTerm = subtopic.technicalTerm?.english || subtopic.englishTitle || "";
  const pronunciation = subtopic.technicalTerm?.pronunciation || "";
  const arabicMeaning = subtopic.technicalTerm?.arabicMeaning || "";

  return `🚀 أنت كبير مهندسي واجهات الويب ومحترف معماريات React.js (Staff Frontend & React Core Systems Architect) وأستاذ تعليمي بيداغوجي استثنائي.
المطلوب منك شرح الدرس التالي للمتعلم بدقة هندسية مطلقة مع التأسيس من الصفر الممتع حتى أسرار بيئة الإنتاج:

========================================
📌 بيانات الدرس والسياق المعماري:
========================================
- عنوان الدرس: "${subtopic.title}"
- المصطلح التقني الإنجليزي: "${englishTerm}"
${pronunciation ? `- طريقة النطق بالعربية: "${pronunciation}"` : ""}
${arabicMeaning ? `- المعنى اللغوي والهندسي: "${arabicMeaning}"` : ""}
- المسار والمستوى: ${sectionTitle}

========================================
🎯 الركائز التعليمية والمعمارية الإلزامية في ردك:
========================================

1. 💡 [التعريف التأسيسي والنموذج الذهني (Mental Model & Origin)]:
   - اشرح المفهوم بأسلوب مبسط وشيق من الصفر التأسيسي المطلق كأنك تخاطب مبتدئاً لا يملك أي خلفية مسبقة.
   - وضح: لماذا قامت شركة Meta (Facebook) أو مجتمع React بابتكار هذا المفهوم تحديداً؟ ما هي المشكلة المؤلمة التي كانت تؤرق المطورين قبله؟

2. 🌍 [التشبيه الملموس من واقع الحياة اليومية (Real-World Analogy)]:
   - اضرب مثالاً مادياً حسياً ملموساً من بيئتنا وحياتنا اليومية يرسخ الفكرة في العقل الباطن للمتعلم ويجعل المفهوم الهندسي بديهياً.

3. ⚙️ [خلف كواليس المحرك وكيف يعمل في الذاكرة (Under the Hood)]:
   - كيف يتعامل محرك React ومفسر الـ JavaScript مع هذا الجزء في الذاكرة؟
   - ما الذي يحدث في شجرة الـ Virtual DOM وعقد الـ Fiber ومرحلتي الـ Render و Commit؟
   - كيف تتأثر شجرة المكونات ودورة حياة البيانات؟

4. 💻 [الكود الذهبي القياسي النظيف (Clean Golden Code)]:
   - اكتب كود React 19 قياسي وعصري يطبق هذا المفهوم في واجهة تفاعلية واقعية.
   - ⚠️ **شرط صارم:** اكتب تعليقاً عربياً تعليمياً كاملاً فوق كل سطر كود بدون أي استثناء يشرح وظيفته المعمارية.
   - احرص على استخدام معايير Clean Code والأسماء الدلالية والتعامل السليم مع اتجاه LTR للكود.

5. ⚡ [أسرار وقواعد الأداء العالي (Performance & 60 FPS Secrets)]:
   - كيف نمنع عمليات إعادة التصيير غير الضرورية (Re-renders)؟
   - متى نستخدم التخزين المؤقت، وكيف يتعامل React Compiler الحديث مع هذا المفهوم؟
   - تأثير ذلك على مؤشرات أداء الويب الحيوية (Core Web Vitals: INP, LCP, CLS).

6. ⚠️ [أفخاخ بيئة الإنتاج والأخطاء القاتلة (Production Pitfalls & Anti-Patterns)]:
   - اذكر أخطر 3 أخطاء شائعة يقع فيها المبرمجون في هذا الدرس بالذات (مثل: Stale Closures، التعديل المباشر على الحالة، إهمال مصفوفة الاعتماديات، أو تسريب الذاكرة Memory Leaks).
   - لكل خطأ، اعرض: [الكود الخاطئ ❌]، [الكود الصحيح المعتمد ✅]، و[التعليل الهندسي وراء الخطأ 🔍].

7. 🧪 [مختبر الفهم والاختبار الذكي (Interactive Knowledge Check)]:
   - اختبر استيعاب المتعلم بـ 3 أسئلة دقيقة مع تزويدي بالإجابات والشرح في النهاية:
     * السؤال الأول: أكمل الفراغ [Fill in the blank] حول حقيقة معمارية جوهرية.
     * السؤال الثاني: صح أم خطأ [True / False] يختبر مفهوماً دقيقاً يقع فيه الكثيرون.
     * السؤال الثالث: توقع ناتج كود ومخرجاته [Output Prediction Challenge] مع سيناريو تتابعي.

قدم الشرح باللغة العربية الفصحى السلسة والمحفزة، مع تنسيق Markdown أنيق وواضح يسهل قراءته ومراجعته.`;
}

/**
 * نسخ البرومبت للحافظة وفتح صفحة ChatGPT في علامة تبويب جديدة فوراً
 * @param {Object} subtopic بيانات الدرس
 * @param {string} sectionTitle عنوان القسم
 * @param {function} onToast دالة الإشعار
 */
export async function copyAndOpenChatGPT(subtopic, sectionTitle, onToast = null) {
  const prompt = generateChatGptPrompt(subtopic, sectionTitle);
  if (!prompt) return;

  try {
    // 1. نسخ البرومبت للحافظة
    await navigator.clipboard.writeText(prompt);

    if (onToast) {
      onToast("تم نسخ برومبت الدرس بنجاح! جاري التوجيه إلى ChatGPT... 🚀", "success");
    }

    // 2. تجهيز الرابط المباشر لـ ChatGPT
    const encodedPrompt = encodeURIComponent(prompt);
    const chatGptUrl = `https://chatgpt.com/?q=${encodedPrompt}`;

    // 3. فتح الرابط في نافذة جديدة
    const newWindow = window.open(chatGptUrl, '_blank', 'noopener,noreferrer');
    
    // إذا حظر المتصفح النوافذ المنبثقة، نفتح الرابط الأساسي
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.open('https://chatgpt.com/', '_blank');
    }
  } catch (err) {
    console.error("فشل نسخ البرومبت:", err);
    // محاولة بديلة لفتح ChatGPT مباشرة
    window.open('https://chatgpt.com/', '_blank');
    if (onToast) {
      onToast("تم فتح ChatGPT، يمكنك نسخ السؤال يدوياً", "info");
    }
  }
}

