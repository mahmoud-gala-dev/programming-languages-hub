// src/data/sections/section1/index.js
// تجميع وتصدير محتوى القسم الأول كاملاً

import { TOPIC_1 } from './topic1.js';
import { TOPIC_2 } from './topic2.js';
import { TOPIC_3 } from './topic3.js';
import { TOPIC_4 } from './topic4.js';
import { SECTION_1_META } from './section1Meta.js';

export const SECTION_1 = {
  ...SECTION_1_META,
  topics: [
    TOPIC_1,
    TOPIC_2,
    TOPIC_3,
    TOPIC_4
  ]
};

export default SECTION_1;

