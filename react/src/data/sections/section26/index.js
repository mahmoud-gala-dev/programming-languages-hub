// src/data/sections/section26/index.js
// تصدير بيانات القسم 26 بالكامل: SEO وتطبيقات الويب التقدمية (SEO & Progressive Web Apps)

import { topic1 } from './topic1';
import { topic2 } from './topic2';
import { section26Meta } from './section26Meta';

export const SECTION_26 = {
  id: "26",
  title: "SEO وتطبيقات الويب التقدمية",
  englishTitle: "SEO & Progressive Web Apps (PWA)",
  description:
    "الدليل الشامل والمتكامل لإتقان تحسين محركات البحث (SEO) وتحويل تطبيقات React إلى تطبيقات ويب تقدمية (PWA) فائقة السرعة والموثوقية: من ضبط وسوم الرأس، والروابط المعيارية، وبطاقات Open Graph، والبيانات المنظمة JSON-LD، إلى تكوين ملف Web App Manifest، وبرمجة Service Workers، واستراتيجيات التخزين المؤقت، ودعم العمل دون إنترنت Offline Mode، والتثبيت المباشر على الأجهزة.",
  topics: [topic1, topic2],
  ...section26Meta,
};

export default SECTION_26;

