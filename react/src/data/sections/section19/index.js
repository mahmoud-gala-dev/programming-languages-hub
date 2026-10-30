// src/data/sections/section19/index.js
// القسم 19: الاختبارات وتصحيح الأخطاء (Testing & Debugging)

import { topic1 } from './topic1';
import { topic2 } from './topic2';
import { topic3 } from './topic3';
import { topic4 } from './topic4';
import { topic5 } from './topic5';
import { topic6 } from './topic6';
import { section19Meta } from './section19Meta';

export const SECTION_19 = {
  ...section19Meta,
  topics: [
    topic1,
    topic2,
    topic3,
    topic4,
    topic5,
    topic6,
  ],
};

export default SECTION_19;
