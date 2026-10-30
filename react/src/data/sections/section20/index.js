// src/data/sections/section20/index.js
// تجميع وتصدير القسم 20: إمكانية الوصول وتجربة المستخدم

import { topic1 } from './topic1';
import { topic2 } from './topic2';
import { topic3 } from './topic3';
import { section20Meta } from './section20Meta';

export const SECTION_20 = {
  id: 20,
  sectionId: 'section-20',
  title: 'القسم 20: إمكانية الوصول وتجربة المستخدم',
  englishTitle: 'Accessibility (A11y) & User Experience (UX)',
  description: 'الدليل الهندسي الشامل لمعايير إمكانية الوصول العالمية (WCAG)، وتضمين أدوار ARIA السليمة، وإدارة التركيز ولوحة المفاتيح في مكونات React، وصولاً إلى بناء أرقى أنماط تجربة المستخدم الحديثة من شاشات الفراغ والهياكل العظمية إلى التحديثات المتفائلة والتوافق مع ضعف الإنترنت.',
  topics: [
    topic1,
    topic2,
    topic3
  ],
  meta: section20Meta
};

export default SECTION_20;
