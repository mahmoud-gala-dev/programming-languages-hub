// src/data/sections/index.js
// سجل ومجمع كافة الأقسام التعليمية الـ 27 لخريطة طريق Express.js

import { SECTION_1 } from './section1.js';
import { SECTION_2 } from './section2.js';
import { SECTION_3 } from './section3.js';
import { SECTION_4 } from './section4.js';
import { SECTION_5 } from './section5.js';
import { SECTION_6 } from './section6.js';
import { SECTION_7 } from './section7.js';
import { SECTION_8 } from './section8.js';
import { SECTION_9 } from './section9.js';
import { SECTION_10 } from './section10.js';
import { SECTION_11 } from './section11.js';
import { SECTION_12 } from './section12.js';
import { SECTION_13 } from './section13.js';
import { SECTION_14 } from './section14.js';
import { SECTION_15 } from './section15.js';
import { SECTION_16 } from './section16.js';
import { SECTION_17 } from './section17.js';
import { SECTION_18 } from './section18.js';
import { SECTION_19 } from './section19.js';
import { SECTION_20 } from './section20.js';
import { SECTION_21 } from './section21.js';
import { SECTION_22 } from './section22.js';
import { SECTION_23 } from './section23.js';
import { SECTION_24 } from './section24.js';
import { SECTION_25 } from './section25.js';
import { SECTION_26 } from './section26.js';
import { SECTION_27 } from './section27.js';

export const SECTIONS_MAP = {
  1: SECTION_1,
  2: SECTION_2,
  3: SECTION_3,
  4: SECTION_4,
  5: SECTION_5,
  6: SECTION_6,
  7: SECTION_7,
  8: SECTION_8,
  9: SECTION_9,
  10: SECTION_10,
  11: SECTION_11,
  12: SECTION_12,
  13: SECTION_13,
  14: SECTION_14,
  15: SECTION_15,
  16: SECTION_16,
  17: SECTION_17,
  18: SECTION_18,
  19: SECTION_19,
  20: SECTION_20,
  21: SECTION_21,
  22: SECTION_22,
  23: SECTION_23,
  24: SECTION_24,
  25: SECTION_25,
  26: SECTION_26,
  27: SECTION_27
};

export const AVAILABLE_SECTIONS = [
  SECTION_1,
  SECTION_2,
  SECTION_3,
  SECTION_4,
  SECTION_5,
  SECTION_6,
  SECTION_7,
  SECTION_8,
  SECTION_9,
  SECTION_10,
  SECTION_11,
  SECTION_12,
  SECTION_13,
  SECTION_14,
  SECTION_15,
  SECTION_16,
  SECTION_17,
  SECTION_18,
  SECTION_19,
  SECTION_20,
  SECTION_21,
  SECTION_22,
  SECTION_23,
  SECTION_24,
  SECTION_25,
  SECTION_26,
  SECTION_27
];

export function getSectionById(id) {
  return SECTIONS_MAP[Number(id)] || SECTIONS_MAP[1];
}
