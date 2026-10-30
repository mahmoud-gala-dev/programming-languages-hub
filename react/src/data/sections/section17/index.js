// src/data/sections/section17/index.js
// القسم 17: المصادقة والصلاحيات والأمان (Authentication, Authorization & Security)

import { topic1 } from './topic1';
import { topic2 } from './topic2';
import { topic3 } from './topic3';
import { topic4 } from './topic4';
import { section17Meta } from './section17Meta';

export const SECTION_17 = {
  ...section17Meta,
  topics: [
    topic1,
    topic2,
    topic3,
    topic4,
  ],
};

export default SECTION_17;
