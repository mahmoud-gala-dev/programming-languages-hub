// src/utils/exportPptx.js
// محرك إنشاء وتصدير عروض تقديمية حقيقية بصيغة PowerPoint (.pptx)
import pptxgen from 'pptxgenjs';

/**
 * تصدير درس محدد إلى عرض تقديمي PowerPoint كامل ومنسق بـ 4 شرائح احترافية
 */
export async function exportLessonToPptx(subtopic, sectionData = null) {
  if (!subtopic) return;

  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9'; // 10" x 5.625"
  pres.author = 'React.js Professional Roadmap';
  pres.company = 'منصة مجمع لغات البرمجة والذكاء الاصطناعي';
  pres.title = subtopic.title || 'درس React البرمجي';

  const cleanColor = (hex) => hex.replace(/^#/, '');

  // ألوان المنصة الداكنة المتناسقة
  const C_BG_DARK = '07090E';
  const C_CARD_BG = '0F172A';
  const C_CYAN = '38BDF8';
  const C_PURPLE = 'A855F7';
  const C_EMERALD = '10B981';
  const C_TEXT_LIGHT = 'F8FAFC';
  const C_TEXT_MUTED = '94A3B8';
  const C_BORDER = '1E293B';

  // ==========================================
  // الشريحة 1: الغلاف الرئيسي للدرس (Title Slide)
  // ==========================================
  const slide1 = pres.addSlide();
  slide1.background = { color: C_BG_DARK };

  // شريط علوي ملون
  slide1.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.1,
    fill: { color: C_CYAN }
  });

  // شارة المسار
  slide1.addText(
    [
      { text: '⚛️ مسار الاحتراف البرمجي: ', options: { bold: true, color: C_CYAN } },
      { text: sectionData?.title || 'React 19 & Architecture', options: { color: C_TEXT_MUTED } }
    ],
    {
      x: 0.8,
      y: 1.2,
      w: 8.4,
      h: 0.4,
      fontSize: 14,
      fontFace: 'Arial',
      align: 'right',
      rtl: true
    }
  );

  // عنوان الدرس الرئيسي
  slide1.addText(subtopic.title || 'عنوان الدرس البرمجي', {
    x: 0.8,
    y: 1.7,
    w: 8.4,
    h: 1.2,
    fontSize: 28,
    bold: true,
    color: C_TEXT_LIGHT,
    fontFace: 'Arial',
    align: 'right',
    rtl: true
  });

  // وصف المفهوم
  slide1.addText(subtopic.description || 'شرح شامل للمفهوم التقني، معمارية العمل، وأفضل الممارسات البرمجية في المشاريع الحديثة.', {
    x: 0.8,
    y: 3.0,
    w: 8.4,
    h: 1.0,
    fontSize: 14,
    color: C_TEXT_MUTED,
    fontFace: 'Arial',
    align: 'right',
    rtl: true,
    lineSpacing: 22
  });

  // كبسولة رقم الدرس
  slide1.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 4.4,
    w: 2.2,
    h: 0.45,
    rectRadius: 0.1,
    fill: { color: C_CARD_BG },
    line: { color: C_CYAN, width: 1.5 }
  });
  slide1.addText(`كود الدرس: ${subtopic.id || 'REACT'}`, {
    x: 0.8,
    y: 4.4,
    w: 2.2,
    h: 0.45,
    fontSize: 11,
    bold: true,
    color: C_CYAN,
    align: 'center'
  });

  // ==========================================
  // الشريحة 2: الشرح المعماري والنقاط الجوهرية (Architecture)
  // ==========================================
  const slide2 = pres.addSlide();
  slide2.background = { color: C_BG_DARK };

  slide2.addText('📐 الركائز المعمارية ونموذج العمل (Architectural Concepts)', {
    x: 0.8,
    y: 0.6,
    w: 8.4,
    h: 0.5,
    fontSize: 20,
    bold: true,
    color: C_CYAN,
    align: 'right',
    rtl: true
  });

  // كارت الفكرة الأساسية
  slide2.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.4,
    w: 4.0,
    h: 3.4,
    rectRadius: 0.15,
    fill: { color: C_CARD_BG },
    line: { color: C_BORDER, width: 1 }
  });
  slide2.addText('💡 المفهوم المحوري', {
    x: 1.0,
    y: 1.6,
    w: 3.6,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: C_CYAN,
    align: 'right',
    rtl: true
  });
  slide2.addText(
    subtopic.explanation || subtopic.description || 'شرح تفصيلي لدور المكون في دورة حياة التطبيق وكيفية معالجة المتصفح للبيانات والتحديثات بشكل متزامن.',
    {
      x: 1.0,
      y: 2.1,
      w: 3.6,
      h: 2.5,
      fontSize: 12,
      color: C_TEXT_LIGHT,
      align: 'right',
      rtl: true,
      lineSpacing: 18
    }
  );

  // كارت كيف يفكر المحرك (Under the Hood)
  slide2.addShape(pres.ShapeType.roundRect, {
    x: 5.2,
    y: 1.4,
    w: 4.0,
    h: 3.4,
    rectRadius: 0.15,
    fill: { color: C_CARD_BG },
    line: { color: C_BORDER, width: 1 }
  });
  slide2.addText('⚡ ماذا يحدث خلف الكواليس؟', {
    x: 5.4,
    y: 1.6,
    w: 3.6,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: C_EMERALD,
    align: 'right',
    rtl: true
  });
  slide2.addText(
    [
      { text: 'مقارنة الشجرة الافتراضية بدقة O(n)', options: { bullet: true, breakLine: true } },
      { text: 'جدولة الأولويات باستخدام Fiber Reconciler', options: { bullet: true, breakLine: true } },
      { text: 'تحديث العقد المتأثرة فقط وتفادي إعادة الرسم الشامل', options: { bullet: true, breakLine: true } },
      { text: 'الحفاظ على سلاسة الحركة 60 إطار في الثانية', options: { bullet: true } }
    ],
    {
      x: 5.4,
      y: 2.2,
      w: 3.6,
      h: 2.4,
      fontSize: 12,
      color: C_TEXT_MUTED,
      align: 'right',
      rtl: true,
      lineSpacing: 20
    }
  );

  // ==========================================
  // الشريحة 3: الشفرة البرمجية النموذجية (Code Showcase)
  // ==========================================
  const slide3 = pres.addSlide();
  slide3.background = { color: C_BG_DARK };

  slide3.addText('💻 الشفرة البرمجية النموذجية (Golden Code Pattern)', {
    x: 0.8,
    y: 0.6,
    w: 8.4,
    h: 0.5,
    fontSize: 20,
    bold: true,
    color: C_PURPLE,
    align: 'right',
    rtl: true
  });

  const codeText = subtopic.codeSnippet || `import React, { useState } from 'react';\n\nexport default function Example() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;\n}`;

  slide3.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.3,
    w: 8.4,
    h: 3.7,
    rectRadius: 0.15,
    fill: { color: '05070B' },
    line: { color: C_PURPLE, width: 1.5 }
  });

  slide3.addText(codeText, {
    x: 1.1,
    y: 1.5,
    w: 7.8,
    h: 3.3,
    fontSize: 12,
    color: 'E2E8F0',
    fontFace: 'Courier New',
    align: 'left',
    lineSpacing: 18
  });

  // ==========================================
  // الشريحة 4: أفضل الممارسات والتحذيرات الشائعة (Best Practices)
  // ==========================================
  const slide4 = pres.addSlide();
  slide4.background = { color: C_BG_DARK };

  slide4.addText('🎯 أفضل الممارسات وتفادي الفخاخ الشائعة', {
    x: 0.8,
    y: 0.6,
    w: 8.4,
    h: 0.5,
    fontSize: 20,
    bold: true,
    color: C_EMERALD,
    align: 'right',
    rtl: true
  });

  // ما يجب فعله (Do)
  slide4.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.4,
    w: 4.0,
    h: 3.4,
    rectRadius: 0.15,
    fill: { color: '062419' },
    line: { color: C_EMERALD, width: 1 }
  });
  slide4.addText('✅ أفضل الممارسات المعتمدة:', {
    x: 1.0,
    y: 1.6,
    w: 3.6,
    h: 0.4,
    fontSize: 15,
    bold: true,
    color: C_EMERALD,
    align: 'right',
    rtl: true
  });
  slide4.addText(
    [
      { text: 'الاعتماد على التحديث الدالي (Functional State Updates)', options: { bullet: true, breakLine: true } },
      { text: 'عزل المكونات الثقيلة داخل React.memo عند الضرورة', options: { bullet: true, breakLine: true } },
      { text: 'كتابة اختبارات تغطي الحالات الحدية (Edge Cases)', options: { bullet: true } }
    ],
    {
      x: 1.0,
      y: 2.2,
      w: 3.6,
      h: 2.4,
      fontSize: 12,
      color: 'D1FAE5',
      align: 'right',
      rtl: true,
      lineSpacing: 18
    }
  );

  // ما يجب تجنبه (Don't)
  slide4.addShape(pres.ShapeType.roundRect, {
    x: 5.2,
    y: 1.4,
    w: 4.0,
    h: 3.4,
    rectRadius: 0.15,
    fill: { color: '2A0814' },
    line: { color: 'F43F5E', width: 1 }
  });
  slide4.addText('❌ فخاخ وأخطاء شائعة:', {
    x: 5.4,
    y: 1.6,
    w: 3.6,
    h: 0.4,
    fontSize: 15,
    bold: true,
    color: 'FB7185',
    align: 'right',
    rtl: true
  });
  slide4.addText(
    [
      { text: 'تعديل الحالة مباشرة دون استخدام دوال الـ Setter', options: { bullet: true, breakLine: true } },
      { text: 'إهمال مصفوفة الاعتماديات في useEffect (Infinite Loops)', options: { bullet: true, breakLine: true } },
      { text: 'تمرير كائنات جديدة في كل تصيير مما يكسر الـ Memoization', options: { bullet: true } }
    ],
    {
      x: 5.4,
      y: 2.2,
      w: 3.6,
      h: 2.4,
      fontSize: 12,
      color: 'FFE4E6',
      align: 'right',
      rtl: true,
      lineSpacing: 18
    }
  );

  // حفظ وتنزيل الملف في المتصفح
  const fileName = `React_Lesson_${(subtopic.id || 'lesson').replace(/[^a-zA-Z0-9_-]/g, '_')}.pptx`;
  await pres.writeFile({ fileName });
  return fileName;
}

