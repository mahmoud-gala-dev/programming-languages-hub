// src/utils/exportImage.js
// أداة تصدير بطاقات الإنفوجرافيك إلى صور عالية الدقة PNG
// معالجة جذرية لكافة دوال الألوان الحديثة (oklab, oklch, lab, lch) مع محرك بديل فوري

import html2canvas from 'html2canvas';

// كانفاس مساعدة لاستخراج قيم RGBA الحقيقية من البكسلات مباشرة
let pixelCanvas = null;
let pixelCtx = null;

function getPixelContext() {
  if (!pixelCtx && typeof document !== 'undefined') {
    pixelCanvas = document.createElement('canvas');
    pixelCanvas.width = 1;
    pixelCanvas.height = 1;
    pixelCtx = pixelCanvas.getContext('2d', { willReadFrequently: true });
  }
  return pixelCtx;
}

/**
 * تحويل أي لون CSS حديث (oklab, oklch, lab, lch, color) إلى صيغة rgba قياسية
 * بالاعتماد على قراءة قيم البكسلات الحقيقية (Raster Buffer) لتفادي احتفاظ المتصفح بكلمة oklab
 */
function convertAnyColorToRgba(colorStr) {
  const ctx = getPixelContext();
  if (!ctx) return 'rgba(30, 41, 59, 1)';

  try {
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = '#000000';
    ctx.fillStyle = colorStr;
    ctx.fillRect(0, 0, 1, 1);
    const d = ctx.getImageData(0, 0, 1, 1).data;
    const alpha = (d[3] / 255).toFixed(3);
    return `rgba(${d[0]}, ${d[1]}, ${d[2]}, ${alpha})`;
  } catch (err) {
    return 'rgba(30, 41, 59, 1)';
  }
}

/**
 * تطهير النصوص وقواعد التدرجات من أي عبارات غير مدعومة مثل in oklab وتحويل الألوان لـ RGBA
 */
export function sanitizeCssString(text) {
  if (!text || typeof text !== 'string') return text;

  // 1. حذف عبارات فضاءات الألوان من التدرجات مثل (in oklab, in oklch, in srgb)
  let cleaned = text
    .replace(/(linear-gradient|radial-gradient)\(\s*in\s+[a-z0-9_-]+\s*,\s*/gi, '$1(')
    .replace(/(conic-gradient)\(\s*in\s+[a-z0-9_-]+\s*,\s*/gi, '$1(');

  // 2. البحث عن دوال oklab, oklch, lab, lch وتحويلها إلى rgba
  cleaned = cleaned.replace(/(?:oklab|oklch|lab|lch)\([^)]+\)/gi, (match) => {
    return convertAnyColorToRgba(match);
  });

  return cleaned;
}

/**
 * فحص وتطهير شجرة الـ DOM بالكامل قبل التقاط الكانفاس لتجنب تعطل html2canvas
 */
export function sanitizeDomColors(rootElement) {
  if (!rootElement) return;

  const elements = [rootElement, ...rootElement.querySelectorAll('*')];
  const colorProps = [
    'color',
    'backgroundColor',
    'borderColor',
    'borderTopColor',
    'borderBottomColor',
    'borderLeftColor',
    'borderRightColor',
    'outlineColor'
  ];

  elements.forEach((el) => {
    try {
      const computed = window.getComputedStyle(el);

      // تطهير خصائص الألوان المباشرة
      colorProps.forEach((prop) => {
        const val = computed[prop];
        if (val && /(oklab|oklch|lab|lch)/i.test(val)) {
          el.style[prop] = convertAnyColorToRgba(val);
        }
      });

      // تطهير تدرجات وصور الخلفية
      const bgImage = computed.backgroundImage;
      if (bgImage && bgImage !== 'none' && /(oklab|oklch|lab|lch|in\s+)/i.test(bgImage)) {
        el.style.backgroundImage = sanitizeCssString(bgImage);
      }
    } catch (e) {
      // مواصلة المعالجة دون تعطيل
    }
  });
}

/**
 * تصدير وتنزيل أي عنصر مرئي (مثل بطاقة الإنفوجرافيك) كصورة PNG عالية الدقة
 */
export async function downloadElementAsPng(element, fileName = "infographic.png") {
  if (!element) return;

  try {
    // تطهير استباقي لكافة ألوان العنصر
    sanitizeDomColors(element);

    const canvas = await html2canvas(element, {
      scale: 2, // دقة مضاعفة فائقة النقاء
      useCORS: true,
      backgroundColor: "#0b0f17",
      logging: false,
      onclone: (clonedDoc, clonedEl) => {
        sanitizeDomColors(clonedEl);
        clonedEl.style.transform = 'none';
        clonedEl.style.boxShadow = 'none';
        clonedEl.style.borderRadius = '16px';
        clonedEl.style.backgroundColor = '#0b0f17';
      }
    });

    const link = document.createElement('a');
    link.download = fileName;
    link.href = canvas.toDataURL('image/png', 1.0);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("فشل تصدير الإنفوجرافيك كصورة:", error);
    alert("تعذر تنزيل الصورة تلقائياً، يمكنك أخذ لقطة شاشة للشاشة بدلاً من ذلك.");
  }
}
