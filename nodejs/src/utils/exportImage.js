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

  // 1. حذف عبارات فضاءات الألوان من التدرجات مثل (in oklab, in oklch, in srgb) بما في ذلك التدرجات ذات الزوايا (مثل in oklab 90deg)
  let cleaned = text
    .replace(/(linear-gradient|radial-gradient|conic-gradient)\(\s*in\s+[a-z0-9_-]+\s+([^,)]+),\s*/gi, '$1($2, ')
    .replace(/(linear-gradient|radial-gradient|conic-gradient)\(\s*in\s+[a-z0-9_-]+\s*,?\s*/gi, '$1(')
    .replace(/\s*in\s+(?:oklab|oklch|srgb|lab|lch)\b/gi, '');

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
  if (!rootElement || typeof rootElement.querySelectorAll !== 'function') return;

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
  if (!element) return false;

  try {
    // تطهير استباقي لكافة ألوان العنصر
    sanitizeDomColors(element);

    const canvas = await html2canvas(element, {
      scale: 2, // دقة مضاعفة فائقة النقاء
      useCORS: true,
      backgroundColor: "#050811",
      logging: false,
      onclone: (clonedDoc, clonedEl) => {
        sanitizeDomColors(clonedEl);
        clonedEl.style.transform = 'none';
        clonedEl.style.boxShadow = 'none';
        clonedEl.style.borderRadius = '16px';
        clonedEl.style.backgroundColor = '#050811';
      }
    });

    const link = document.createElement('a');
    link.download = fileName;
    link.href = canvas.toDataURL('image/png', 1.0);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch (error) {
    console.warn("فشل تصدير الإنفوجرافيك عبر html2canvas، جاري تجربة المحرك البديل:", error);
    try {
      return await exportViaSvgForeignObject(element, fileName);
    } catch (fallbackError) {
      console.error("فشل كافة محركات التصدير:", fallbackError);
      return false;
    }
  }
}

/**
 * محرك بديل فائق السرعة عبر SVG ForeignObject في حال تعذر html2canvas
 */
export async function exportViaSvgForeignObject(element, fileName = "infographic.png") {
  if (!element || typeof document === 'undefined') return false;

  const rect = element.getBoundingClientRect();
  const width = rect.width || 800;
  const height = rect.height || 1000;
  const scale = 2;

  const clone = element.cloneNode(true);
  sanitizeDomColors(clone);

  const wrapper = document.createElement('div');
  wrapper.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  wrapper.appendChild(clone);

  const svgData = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width * scale}" height="${height * scale}" viewBox="0 0 ${width} ${height}">
      <foreignObject width="100%" height="100%">
        ${new XMLSerializer().serializeToString(wrapper)}
      </foreignObject>
    </svg>
  `;

  const img = new Image();
  const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);

  return new Promise((resolve) => {
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width * scale;
      canvas.height = height * scale;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#050811';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        const link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        resolve(true);
      } else {
        URL.revokeObjectURL(url);
        resolve(false);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(false);
    };
    img.src = url;
  });
}

export const exportToImage = downloadElementAsPng;

