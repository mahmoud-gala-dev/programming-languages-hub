// src/data/sections/section28/index.js
// تصدير بيانات القسم 28 بالكامل: بناء التطبيقات ونشرها (Building & Deploying React Applications)

import { topic1 } from './topic1';
import { topic2 } from './topic2';
import { topic3 } from './topic3';
import { topic4 } from './topic4';
import { section28Meta } from './section28Meta';

export const SECTION_28 = {
  id: "28",
  title: "بناء التطبيقات ونشرها",
  englishTitle: "Building & Deploying React Applications",
  description:
    "الدليل الهندسي المعماري المتكامل لإعداد وبناء ونشر تطبيقات React على السحاب: من فهم آليات البناء والضغط وTree Shaking وتحليل أوزان الحزم وحظر الأسرار، إلى استضافة التطبيقات على منصات Vercel وNetlify وCloudflare وحل مشاكل مسارات الـ SPA وربط النطاقات وشهادات SSL، وصولاً إلى بناء خطوط أنابيب التكامل والنشر المستمر CI/CD عبر GitHub Actions، وتشغيل الحاويات النحيفة بـ Docker وNginx والتوزيع العالمي عبر الـ CDN.",
  topics: [topic1, topic2, topic3, topic4],
  ...section28Meta,
};

export default SECTION_28;

