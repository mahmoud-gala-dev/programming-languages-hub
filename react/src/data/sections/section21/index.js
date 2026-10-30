// src/data/sections/section21/index.js
// تجميع وتصدير القسم 21: الترجمة والتطبيقات متعددة اللغات (i18n & RTL)

import { topic1 } from './topic1';
import { topic2 } from './topic2';
import { topic3 } from './topic3';
import { section21Meta } from './section21Meta';

export const SECTION_21 = {
  id: 21,
  sectionId: 'section-21',
  title: 'القسم 21: الترجمة والتطبيقات متعددة اللغات',
  englishTitle: 'Internationalization (i18n) & RTL Engineering',
  description: 'الدليل المعماري والعملي الشامل لتدويل وتوطين تطبيقات React وفق أحدث المعايير الدولية؛ يشمل استخدام مكتبة react-i18next، واجهات Intl لتنسيق الأرقام والعملات والتواريخ وقواعد الجمع العربية، هندسة التخطيط من اليمين إلى اليسار (RTL)، الخصائص المنطقية في CSS، والطباعة الرقمية العربية.',
  topics: [
    topic1,
    topic2,
    topic3
  ],
  meta: section21Meta
};

export default SECTION_21;

