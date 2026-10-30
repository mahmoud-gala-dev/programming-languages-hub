// src/data/sections/section11/index.js
// تجميع وتصدير القسم الحادي عشر: التوجيه والتنقل باستخدام React Router

import { topic1 } from './topic1.js';
import { topic2 } from './topic2.js';
import { topic3 } from './topic3.js';
import { topic4 } from './topic4.js';
import { SECTION_11_META } from './section11Meta.js';

export const SECTION_11 = {
  ...SECTION_11_META,
  topics: [
    topic1,
    topic2,
    topic3,
    topic4
  ]
};

export default SECTION_11;
