// src/data/sections/section13/index.js
// تجميع وتصدير القسم الثالث عشر: إدارة Server State باستخدام TanStack Query

import { topic1 } from './topic1.js';
import { topic2 } from './topic2.js';
import { topic3 } from './topic3.js';
import { topic4 } from './topic4.js';
import { SECTION_13_META } from './section13Meta.js';

export const SECTION_13 = {
  ...SECTION_13_META,
  topics: [
    topic1,
    topic2,
    topic3,
    topic4
  ]
};

export default SECTION_13;
