// src/data/sections/section25/index.js
// تصدير بيانات القسم 25 بالكامل: تعلم Next.js مع React (Next.js App Router Masterclass)

import { topic1 } from './topic1';
import { topic2 } from './topic2';
import { topic3 } from './topic3';
import { topic4 } from './topic4';
import { topic5 } from './topic5';
import { section25Meta } from './section25Meta';

export const SECTION_25 = {
  id: "25",
  title: "تعلم Next.js مع React",
  englishTitle: "Next.js & App Router Masterclass",
  description:
    "الدليل الهندسي الشامل والعملي لاحتراف إطار العمل Next.js بأحدث معمارية App Router: من فهم بنية الملفات والمسارات المتداخلة وRoute Groups، إلى جلب البيانات والتخزين المؤقت Multi-tier Caching، والعمليات الخادمة Server Actions مع التحديثات المتفائلة useOptimistic، وتحسين الصور والخطوط والوسوم الوصفية Dynamic Metadata والنشر على السحاب.",
  topics: [topic1, topic2, topic3, topic4, topic5],
  ...section25Meta,
};

export default SECTION_25;

