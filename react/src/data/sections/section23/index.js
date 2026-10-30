// src/data/sections/section23/index.js
// تصدير بيانات القسم 23 بالكامل: عرض البيانات والتطبيقات المتقدمة

import { topic1 } from './topic1';
import { topic2 } from './topic2';
import { topic3 } from './topic3';
import { topic4 } from './topic4';
import { section23Meta } from './section23Meta';

export const SECTION_23 = {
  id: "23",
  title: "عرض البيانات والتطبيقات المتقدمة",
  englishTitle: "Advanced Data Presentation, Visualizations & Real-Time",
  description:
    "المرجع المتقدم الشامل لبناء تطبيقات البيانات الضخمة في React: من الجداول الافتراضية المليونية (TanStack Table & Virtual)، والرسوم البيانية المتجاوبة المذهلة (Recharts)، وصولاً إلى بوابات رفع الملفات بالسحب والإفلات وتتبع التقدم، وهندسة تدفق البيانات الحية والفورية (WebSockets, Socket.IO, SSE) مع الصمود وحل التضارب المتزامن بأعلى معايير الأداء والموثوقية.",
  topics: [topic1, topic2, topic3, topic4],
  ...section23Meta,
};

export default SECTION_23;

