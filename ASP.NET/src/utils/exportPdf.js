// src/utils/exportPdf.js
// أداة تصدير وتوليد كتاب الـ PDF الإلكتروني الشامل للدروس والإنفوجرافيكس

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { sanitizeDomColors } from './exportImage.js';

/**
 * توليد وتنزيل كتاب الـ PDF من عنصر الكتاب المنسق
 * @param {HTMLElement} element حاوية كتاب الـ PDF
 * @param {string} title اسم الملف الناتج
 */
export async function downloadBookAsPdf(element, title = "كتاب_خريطة_طريق_ASPNET_Core_MVC.pdf") {
  if (!element) return;

  try {
    sanitizeDomColors(element);

    const canvas = await html2canvas(element, {
      scale: 1.5,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      onclone: (clonedDoc, clonedEl) => {
        sanitizeDomColors(clonedEl);
        clonedEl.style.backgroundColor = '#ffffff';
        clonedEl.style.color = '#000000';
      }
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // إضافة الصفحة الأولى
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // تقسيم باقي الارتفاع على صفحات متتالية
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(title);
  } catch (error) {
    console.error("فشل توليد كتاب الـ PDF:", error);
    // كخطة بديلة فائقة الدقة: تشغيل نافذة الطباعة المجهزة للـ PDF
    window.print();
  }
}
