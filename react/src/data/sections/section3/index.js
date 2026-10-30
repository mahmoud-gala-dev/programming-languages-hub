// src/data/sections/section3/index.js
// تجميع وتصدير محتوى القسم الثالث كاملاً

import { SECTION_3_TOPIC_1 } from './topic1.js';
import { SECTION_3_TOPIC_2 } from './topic2.js';
import { SECTION_3_TOPIC_3 } from './topic3.js';
import { SECTION_3_TOPIC_4 } from './topic4.js';
import { SECTION_3_META } from './section3Meta.js';

export const SECTION_3 = {
  ...SECTION_3_META,
  topics: [
    SECTION_3_TOPIC_1,
    SECTION_3_TOPIC_2,
    SECTION_3_TOPIC_3,
    SECTION_3_TOPIC_4
  ]
};

export default SECTION_3;
