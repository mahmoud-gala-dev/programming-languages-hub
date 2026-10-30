// src/data/sections/section16/index.js
// القسم 16: أنماط التصميم وتنظيم التطبيقات (Design Patterns & Application Architecture)

import { topic1 } from './topic1';
import { topic2 } from './topic2';
import { topic3 } from './topic3';
import { topic4 } from './topic4';
import { section16Meta } from './section16Meta';

export const SECTION_16 = {
  ...section16Meta,
  topics: [
    topic1,
    topic2,
    topic3,
    topic4,
  ],
};

export default SECTION_16;
