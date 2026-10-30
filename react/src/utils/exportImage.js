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
            .replace(/(linear-gradient|radial-gradient)\(([^,]+?)\s+in\s+[a-z0-9_-]+\s*,/gi, '$1($2,')
            .replace(/\s+in\s+[a-z0-9_-]+(?=\s*[,)])/gi, '');

            // 2. تحويل كافة دوال oklab, oklch, lab, lch, color إلى أرقام rgba حقيقية
            if (/(?:oklch|oklab|lab|lch|color|hwb)\(/i.test(cleaned)) {
              cleaned = cleaned.replace(/(?:oklch|oklab|lab|lch|color|hwb)\([^)]+\)/gi, (match) => {
                return convertAnyColorToRgba(match);
              });
            }

            return cleaned;
          }

            /**
             * محرك التصدير البديل المباشر عبر SVG ForeignObject في حال واجهت أي مكتبة طرف ثالث مشكلة في تحليل CSS
             */
            async function exportViaSvgForeignObject(element, fileName) {
              const rect = element.getBoundingClientRect();
              const width = Math.max(Math.ceil(rect.width), 600);
              const height = Math.max(Math.ceil(rect.height), 400);

              // استنساخ العنصر وتثبيت الأبعاد والخطوط
              const clone = element.cloneNode(true);
              clone.style.width = `${width}px`;
              clone.style.height = `${height}px`;
              clone.style.margin = '0';
              clone.style.transform = 'none';

              // تجميع الأنماط
              const xml = new XMLSerializer().serializeToString(clone);
              const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml" style="width:100%;height:100%;font-family:'Cairo',sans-serif;direction:rtl;">
        ${xml}
      </div>
    </foreignObject>
  </svg>`;

              const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
              const url = URL.createObjectURL(blob);

              return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'anonymous';

                img.onload = () => {
                  try {
                    const canvas = document.createElement('canvas');
                    canvas.width = width * 2;
                    canvas.height = height * 2;
                    const ctx = canvas.getContext('2d');
                    ctx.scale(2, 2);
                    ctx.drawImage(img, 0, 0);
                    URL.revokeObjectURL(url);

                    const imageUri = canvas.toDataURL('image/png');
                    triggerDownload(imageUri, fileName);
                    resolve(true);
                  } catch (err) {
                    URL.revokeObjectURL(url);
                    reject(err);
                  }
                };

                img.onerror = (e) => {
                  URL.revokeObjectURL(url);
                  reject(e);
                };

                img.src = url;
              });
            }

            function triggerDownload(uri, fileName) {
              const link = document.createElement('a');
              link.href = uri;
              link.download = fileName.endsWith('.png') ? fileName : `${fileName}.png`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }

            /**
             * تنزيل عنصر HTML أو بطاقة إنفوجرافيك كملف صورة PNG عالية الجودة
             * @param {HTMLElement} element العنصر المراد تصويره
             * @param {string} fileName اسم الملف المراد حفظه به
             * @param {function} onStatusChange دالة إشعار بحالة التنزيل (اختياري)
             */
            export async function downloadElementAsPng(element, fileName = "infographic.png", onStatusChange = null) {
              if (!element) return;

              if (onStatusChange) onStatusChange({ status: 'loading', message: 'جاري إعداد صورة الإنفوجرافيك عالية الدقة...' });

              // المحاولة الأولى: استخدام html2canvas مع تطهير البكسلات الكامل
              try {
                const canvas = await html2canvas(element, {
                  scale: 2,
                  useCORS: true,
                  backgroundColor: "#0b101d",
                  logging: false,
                  onclone: (clonedDoc, clonedElement) => {
                    try {
                      const win = clonedDoc.defaultView || window;

                      // 1. تطهير كافة وسوم <style> في المستند المستنسخ وتحويل ألوانها لـ RGBA حقيقي
                      const styleTags = clonedDoc.querySelectorAll('style');
                      styleTags.forEach(tag => {
                          if (tag.textContent) {
                            tag.textContent = sanitizeCssString(tag.textContent);
                          }
                        });

                      // 2. عزل محتوى الصفحة المستنسخة ليحتوي فقط على بطاقة الإنفوجرافيك
                      clonedDoc.body.innerHTML = '';
                      clonedDoc.body.style.backgroundColor = '#0b101d';
                      clonedDoc.body.style.padding = '0';
                      clonedDoc.body.style.margin = '0';
                      clonedDoc.body.appendChild(clonedElement);

                      // 3. تطهير الخصائص المحسوبة لجميع العناصر في شجرة الإنفوجرافيك
                      const allNodes = [clonedElement, ...clonedElement.querySelectorAll('*')];
                      allNodes.forEach(node => {
                        try {
                          const comp = win.getComputedStyle(node);

                            if (comp.backgroundImage && comp.backgroundImage !== 'none') {
                              node.style.backgroundImage = sanitizeCssString(comp.backgroundImage);
                            }

                              if (comp.backgroundColor && /(?:oklch|oklab|lab|lch)/i.test(comp.backgroundColor)) {
                                node.style.backgroundColor = convertAnyColorToRgba(comp.backgroundColor);
                              }

                                if (comp.color && /(?:oklch|oklab|lab|lch)/i.test(comp.color)) {
                                  node.style.color = convertAnyColorToRgba(comp.color);
                                }

                                  if (comp.borderColor && /(?:oklch|oklab|lab|lch)/i.test(comp.borderColor)) {
                                    node.style.borderColor = convertAnyColorToRgba(comp.borderColor);
                                  }

                                    const inline = node.getAttribute('style');
                                    if (inline) {
                                      node.setAttribute('style', sanitizeCssString(inline));
                                    }
                                  } catch (err) {
                                    // تجاهل العناصر الداخلية المعزولة
                                  }
                                });

                      clonedElement.style.backgroundColor = '#0b101d';
                      clonedElement.style.color = '#f1f5f9';
                    } catch (e) {
                      console.warn("تنبيه أثناء معالجة عناصر الإنفوجرافيك:", e);
                    }
                  }
                });

                const imageUri = canvas.toDataURL("image/png");
                triggerDownload(imageUri, fileName);

                if (onStatusChange) onStatusChange({ status: 'success', message: 'تم تنزيل صورة الإنفوجرافيك بنجاح! 📸' });
                return;
              } catch (error) {
                console.warn("تعذر التصدير عبر html2canvas، جاري التبديل للمحرك البديل المباشر:", error.message);
              }

              // المحاولة الثانية: التحول التلقائي للمحرك البديل المباشر (SVG ForeignObject Engine)
              try {
                await exportViaSvgForeignObject(element, fileName);
                if (onStatusChange) onStatusChange({ status: 'success', message: 'تم تنزيل صورة الإنفوجرافيك بنجاح! 📸' });
              } catch (fallbackError) {
                console.error("فشل التنزيل عبر المحرك البديل أيضاً:", fallbackError);
                if (onStatusChange) {
                  onStatusChange({ status: 'error', message: 'تعذر تنزيل الصورة، يرجى المحاولة مرة أخرى.' });
                } else {
                  alert("حدث خطأ أثناء تنزيل الصورة، يرجى المحاولة مرة أخرى.");
                }
              }
            }
