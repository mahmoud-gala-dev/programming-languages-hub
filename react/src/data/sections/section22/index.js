// src/data/sections/section22/index.js
// تجميع وتصدير القسم 22: الرسوم المتحركة والواجهات التفاعلية (Animations & Gestures)

import { topic1 } from './topic1';
import { topic2 } from './topic2';
import { topic3 } from './topic3';
import { section22Meta } from './section22Meta';

export const SECTION_22 = {
  id: 22,
  sectionId: 'section-22',
  title: 'القسم 22: الرسوم المتحركة والواجهات التفاعلية',
  englishTitle: 'Animations & Interactive Gestures',
  description: 'الدليل الهندسي المعمق لتحريك واجهات React وهندسة التفاعلات المتقدمة؛ يشمل الانتقالات الخفيفة بالـ CSS، الإطارات المفتاحية @keyframes، مكتبة Motion for React الشاملة، حركات الخروج عبر AnimatePresence، التخطيط التلقائي layout و layoutId، وحركات السحب والإفلات المتقدمة (dnd-kit) ولوحات كانبان مع دعم الهواتف اللمسية وإمكانية الوصول.',
  topics: [
    topic1,
    topic2,
    topic3
  ],
  meta: section22Meta
};

export default SECTION_22;

