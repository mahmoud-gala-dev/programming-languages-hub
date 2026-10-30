// src/data/sections/section24/index.js
// تصدير بيانات القسم 24 بالكامل: Server-Side Rendering وReact Server Components

import { topic1 } from './topic1';
import { topic2 } from './topic2';
import { topic3 } from './topic3';
import { section24Meta } from './section24Meta';

export const SECTION_24 = {
  id: "24",
  title: "Server-Side Rendering وReact Server Components",
  englishTitle: "SSR & React Server Components (RSC)",
  description:
    "المرجع المعماري المتقدم والشامل لاستراتيجيات تصيير وعرض صفحات React: مقارنة CSR وSSR وSSG وISR، واستخدام دوال التدفق الحديثة renderToPipeableStream وrenderToReadableStream، وعملية الترطيب الانتقائي عبر hydrateRoot، والتحصين ضد أخطاء Hydration Mismatch، وصولاً إلى ثورة React Server Components بصفر جافاسكريبت وتوجيهات use client وuse server وإدارة حدود تسلسل البيانات.",
  topics: [topic1, topic2, topic3],
  ...section24Meta,
};

export default SECTION_24;

