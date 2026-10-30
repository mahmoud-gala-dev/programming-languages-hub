// src/data/sections/section4/index.js
// تجميع وتصدير محتوى القسم الرابع كاملاً

import { SECTION_4_TOPIC_1 } from './topic1.js';
import { SECTION_4_TOPIC_2 } from './topic2.js';
import { SECTION_4_TOPIC_3 } from './topic3.js';
import { SECTION_4_META } from './section4Meta.js';

export const SECTION_4 = {
  ...SECTION_4_META,
  topics: [
    SECTION_4_TOPIC_1,
    SECTION_4_TOPIC_2,
    SECTION_4_TOPIC_3
  ]
};

export default SECTION_4;
