// src/data/sections/section2/index.js
// تجميع وتصدير محتوى القسم الثاني كاملاً

import { SECTION_2_TOPIC_1 } from './topic1.js';
import { SECTION_2_TOPIC_2 } from './topic2.js';
import { SECTION_2_TOPIC_3 } from './topic3.js';
import { SECTION_2_META } from './section2Meta.js';

export const SECTION_2 = {
  ...SECTION_2_META,
  topics: [
    SECTION_2_TOPIC_1,
    SECTION_2_TOPIC_2,
    SECTION_2_TOPIC_3
  ]
};

export default SECTION_2;
