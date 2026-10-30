// src/data/sections/section7/index.js
// تجميع وتصدير القسم السابع: React Hooks الأساسية

import { SECTION_7_TOPIC_1 } from './topic1.js';
import { SECTION_7_TOPIC_2 } from './topic2.js';
import { SECTION_7_TOPIC_3 } from './topic3.js';
import { SECTION_7_TOPIC_4 } from './topic4.js';
import { SECTION_7_TOPIC_5 } from './topic5.js';
import { SECTION_7_TOPIC_6 } from './topic6.js';
import { SECTION_7_META } from './section7Meta.js';

export const SECTION_7 = {
  ...SECTION_7_META,
  topics: [
    SECTION_7_TOPIC_1,
    SECTION_7_TOPIC_2,
    SECTION_7_TOPIC_3,
    SECTION_7_TOPIC_4,
    SECTION_7_TOPIC_5,
    SECTION_7_TOPIC_6
  ]
};

export default SECTION_7;
