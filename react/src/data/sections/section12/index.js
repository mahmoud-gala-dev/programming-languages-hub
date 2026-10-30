// src/data/sections/section12/index.js
// تجميع وتصدير القسم الثاني عشر: إدارة الحالة المتقدمة

import { topic1 } from './topic1.js';
import { topic2 } from './topic2.js';
import { topic3 } from './topic3.js';
import { topic4 } from './topic4.js';
import { topic5 } from './topic5.js';
import { SECTION_12_META } from './section12Meta.js';

export const SECTION_12 = {
  ...SECTION_12_META,
  topics: [
    topic1,
    topic2,
    topic3,
    topic4,
    topic5
  ]
};

export default SECTION_12;
