// src/utils/exportPdf.js
// أداة تصدير وتوليد كتاب الـ PDF الإلكتروني الشامل لـ Express.js
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { sanitizeDomColors } from './exportImage.js';

export async function downloadBookAsPdf(element, title = "كتاب_خريطة_طريق_Expressjs_الشاملة.pdf") {
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
      }
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(title);
  } catch (error) {
    console.error("فشل توليد كتاب الـ PDF:", error);
    window.print();
  }
}
