// scripts/sectionGenerators/sectionMetadata.js
// تجميع وتصدير البيانات الوصفية والملخصات والبطاقات المرجعية والمشاريع لجميع الأقسام الـ 23

import { META_1_TO_8 } from './meta1to8.js';
import { META_9_TO_16 } from './meta9to16.js';
import { META_17_TO_23 } from './meta17to23.js';

export const SECTION_METADATA = {
  ...META_1_TO_8,
  ...META_9_TO_16,
  ...META_17_TO_23
};

export default SECTION_METADATA;
