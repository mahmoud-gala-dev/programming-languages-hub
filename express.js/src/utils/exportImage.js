// src/utils/exportImage.js
// أداة تصدير بطاقات الإنفوجرافيك إلى صور عالية الدقة PNG لـ Express.js
import html2canvas from 'html2canvas';

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

export function sanitizeCssString(text) {
  if (!text || typeof text !== 'string') return text;

  let cleaned = text
    .replace(/(linear-gradient|radial-gradient)\(\s*in\s+[a-z0-9_-]+\s*,\s*/gi, '$1(')
    .replace(/(conic-gradient)\(\s*in\s+[a-z0-9_-]+\s*,\s*/gi, '$1(');

  cleaned = cleaned.replace(/(?:oklab|oklch|lab|lch)\([^)]+\)/gi, (match) => {
    return convertAnyColorToRgba(match);
  });

  return cleaned;
}

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

      colorProps.forEach((prop) => {
        const val = computed[prop];
        if (val && /(oklab|oklch|lab|lch)/i.test(val)) {
          el.style[prop] = convertAnyColorToRgba(val);
        }
      });

      const bgImage = computed.backgroundImage;
      if (bgImage && bgImage !== 'none' && /(oklab|oklch|lab|lch|in\s+)/i.test(bgImage)) {
        el.style.backgroundImage = sanitizeCssString(bgImage);
      }
    } catch (e) {
      // ignore
    }
  });
}

export async function downloadElementAsPng(element, fileName = "infographic.png") {
  if (!element) return;

  try {
    sanitizeDomColors(element);

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#07090e",
      logging: false,
      onclone: (clonedDoc, clonedEl) => {
        sanitizeDomColors(clonedEl);
        clonedEl.style.transform = 'none';
        clonedEl.style.boxShadow = 'none';
        clonedEl.style.borderRadius = '16px';
        clonedEl.style.backgroundColor = '#07090e';
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
    alert("تعذر تنزيل الصورة تلقائياً، يمكنك أخذ لقطة للشاشة كبديل.");
  }
}
