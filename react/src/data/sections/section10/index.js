// src/data/sections/section10/index.js
// تجميع وتصدير القسم العاشر: التعامل مع APIs والبيانات الخارجية

import { topic1 } from './topic1.js';
import { topic2 } from './topic2.js';
import { topic3 } from './topic3.js';
import { topic4 } from './topic4.js';
import { SECTION_10_META } from './section10Meta.js';

export const SECTION_10 = {
  ...SECTION_10_META,
  topics: [
    topic1,
    topic2,
    topic3,
    topic4
  ]
};

export default SECTION_10;
