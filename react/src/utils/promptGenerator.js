// src/utils/promptGenerator.js
// أداة توليد برومبتات الشرح البيداغوجي المتقدم وتحويلها فوراً إلى ChatGPT

/**
 * توليد نص برومبت احترافي ومفصل للمفهوم الحالي
 * @param {Object} subtopic بيانات الدرس
 * @param {string} sectionTitle عنوان القسم
 * @returns {string} نص البرومبت المهندس بعناية
 */
export function generateChatGptPrompt(subtopic, sectionTitle = "خريطة طريق React.js الاحترافية") {
  if (!subtopic) return "";

  const englishTerm = subtopic.technicalTerm?.english || subtopic.englishTitle || "";
  const pronunciation = subtopic.technicalTerm?.pronunciation || "";
  const arabicMeaning = subtopic.technicalTerm?.arabicMeaning || "";

  return `أنت كبير مهندسي واجهات الويب ومحترف React.js (Staff Frontend Engineer) وأستاذ تعليمي رائد.
أريدك أن تشرح لي الدرس التالي بالتفصيل الممل من الصفر التأسيسي المطلق:

📌 بيانات الدرس:
- عنوان الدرس: "${subtopic.title}"
- المصطلح التقني الإنجليزي: "${englishTerm}"
${pronunciation ? `- النطق الصوتي بالعربية: "${pronunciation}"` : ""}
${arabicMeaning ? `- المعنى اللغوي والتقني: "${arabicMeaning}"` : ""}
- السياق: ${sectionTitle}

🎯 العناصر السبعة الإلزامية التي أريدها في ردك:
1. [التعريف التأسيسي]: اشرح المفهوم بأسلوب مبسط جداً من الصفر لطفل أو شخص لم يتعلم البرمجة من قبل.
2. [التشبيه من الحياة اليومية]: اضرب تشبيهاً مادياً ملموساً من واقعنا يقرب المعنى المعماري في الذهن.
3. [الأهمية الهندسية]: لماذا ابتكر مطورو React هذا المفهوم؟ وما هي المشكلة التي كان يعاني منها المطورون قبله؟
4. [مثال عملي بسيط]: اكتب كوداً برمجياً سهلاً ومباشراً مع **تعليق عربي كامل فوق كل سطر كود بدون استثناء**.
5. [مثال عملي متقدم]: سيناريو واقعي لمعالجة مشاكل التزامن أو الأداء في المشاريع الكبرى مع **تعليق عربي فوق كل سطر كود**.
6. [الأخطاء الشائعة وحلولها]: اذكر أهم 3 أخطاء شائعة يقع فيها المبرمجون في هذا الجزء مع بيان الكود الخاطئ والصحيح والسبب المعماري.
7. [اختبر فهمي]: اختبرني بـ 3 أسئلة متنوعة:
   - سؤال 1: أكمل الفراغ.
   - سؤال 2: صح أم خطأ.
   - سؤال 3: توقع ناتج كود ومخرجاته.

اشرح باللغة العربية الفصحى الأنيقة والمشجعة.`;
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

