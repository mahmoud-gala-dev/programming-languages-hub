// src/data/sections/section8/index.js
// تجميع وتصدير القسم الثامن: النماذج والتعامل مع المستخدم

import { SECTION_8_TOPIC_1 } from './topic1.js';
import { SECTION_8_TOPIC_2 } from './topic2.js';
import { SECTION_8_TOPIC_3 } from './topic3.js';
import { SECTION_8_TOPIC_4 } from './topic4.js';
import { SECTION_8_META } from './section8Meta.js';

export const SECTION_8 = {
  ...SECTION_8_META,
  topics: [
    SECTION_8_TOPIC_1,
    SECTION_8_TOPIC_2,
    SECTION_8_TOPIC_3,
    SECTION_8_TOPIC_4
  ]
};

export default SECTION_8;
