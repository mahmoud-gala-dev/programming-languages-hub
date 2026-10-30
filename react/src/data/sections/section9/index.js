// src/data/sections/section9/index.js
// تجميع وتصدير القسم التاسع: تنسيق واجهات React

import { SECTION_9_TOPIC_1 } from './topic1.js';
import { SECTION_9_TOPIC_2 } from './topic2.js';
import { SECTION_9_TOPIC_3 } from './topic3.js';
import { SECTION_9_TOPIC_4 } from './topic4.js';
import { SECTION_9_META } from './section9Meta.js';

export const SECTION_9 = {
  ...SECTION_9_META,
  topics: [
    SECTION_9_TOPIC_1,
    SECTION_9_TOPIC_2,
    SECTION_9_TOPIC_3,
    SECTION_9_TOPIC_4
  ]
};

export default SECTION_9;
