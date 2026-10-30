// src/data/sections/section5/index.js
// تجميع وتصدير القسم الخامس: JSX والمكونات

import { SECTION_5_TOPIC_1 } from './topic1.js';
import { SECTION_5_TOPIC_2 } from './topic2.js';
import { SECTION_5_TOPIC_3 } from './topic3.js';
import { SECTION_5_TOPIC_4 } from './topic4.js';
import { SECTION_5_META } from './section5Meta.js';

export const SECTION_5 = {
  ...SECTION_5_META,
  topics: [
    SECTION_5_TOPIC_1,
    SECTION_5_TOPIC_2,
    SECTION_5_TOPIC_3,
    SECTION_5_TOPIC_4
  ]
};

export default SECTION_5;
