// src/data/sections/section6/index.js
// تجميع وتصدير القسم السادس: الأحداث والحالة في React

import { SECTION_6_TOPIC_1 } from './topic1.js';
import { SECTION_6_TOPIC_2 } from './topic2.js';
import { SECTION_6_TOPIC_3 } from './topic3.js';
import { SECTION_6_TOPIC_4 } from './topic4.js';
import { SECTION_6_META } from './section6Meta.js';

export const SECTION_6 = {
  ...SECTION_6_META,
  topics: [
    SECTION_6_TOPIC_1,
    SECTION_6_TOPIC_2,
    SECTION_6_TOPIC_3,
    SECTION_6_TOPIC_4
  ]
};

export default SECTION_6;
