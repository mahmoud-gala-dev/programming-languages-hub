// src/data/sections/index.js
// فهرس تجميعي لكافة الأقسام الـ 33
import { section1Data } from './section1.js';
import { section2Data } from './section2.js';
import { section3Data } from './section3.js';
import { section4Data } from './section4.js';
import { section5Data } from './section5.js';
import { section6Data } from './section6.js';
import { section7Data } from './section7.js';
import { section8Data } from './section8.js';
import { section9Data } from './section9.js';
import { section10Data } from './section10.js';
import { section11Data } from './section11.js';
import { section12Data } from './section12.js';
import { section13Data } from './section13.js';
import { section14Data } from './section14.js';
import { section15Data } from './section15.js';
import { section16Data } from './section16.js';
import { section17Data } from './section17.js';
import { section18Data } from './section18.js';
import { section19Data } from './section19.js';
import { section20Data } from './section20.js';
import { section21Data } from './section21.js';
import { section22Data } from './section22.js';
import { section23Data } from './section23.js';
import { section24Data } from './section24.js';
import { section25Data } from './section25.js';
import { section26Data } from './section26.js';
import { section27Data } from './section27.js';
import { section28Data } from './section28.js';
import { section29Data } from './section29.js';
import { section30Data } from './section30.js';
import { section31Data } from './section31.js';
import { section32Data } from './section32.js';
import { section33Data } from './section33.js';

export const ALL_SECTIONS_DATA = {
  1: section1Data,
  2: section2Data,
  3: section3Data,
  4: section4Data,
  5: section5Data,
  6: section6Data,
  7: section7Data,
  8: section8Data,
  9: section9Data,
  10: section10Data,
  11: section11Data,
  12: section12Data,
  13: section13Data,
  14: section14Data,
  15: section15Data,
  16: section16Data,
  17: section17Data,
  18: section18Data,
  19: section19Data,
  20: section20Data,
  21: section21Data,
  22: section22Data,
  23: section23Data,
  24: section24Data,
  25: section25Data,
  26: section26Data,
  27: section27Data,
  28: section28Data,
  29: section29Data,
  30: section30Data,
  31: section31Data,
  32: section32Data,
  33: section33Data,
};

export function getSectionData(sectionId) {
  return ALL_SECTIONS_DATA[sectionId] || ALL_SECTIONS_DATA[1];
}

export default ALL_SECTIONS_DATA;
