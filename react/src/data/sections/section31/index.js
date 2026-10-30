// src/data/sections/section31/index.js
// القسم 31: مشاريع تطبيقية للمبتدئين

import { topic1 } from "./topic1.js";
import { topic2 } from "./topic2.js";
import { topic3 } from "./topic3.js";
import { topic4 } from "./topic4.js";
import { topic5 } from "./topic5.js";
import { section31Meta } from "./section31Meta.js";

export const SECTION_31 = {
  id: "section-31",
  number: 31,
  title: "مشاريع تطبيقية للمبتدئين",
  description: "خمسة مشاريع عملية تطبيقية شاملة ومتدرجة في الصعوبة للمستوى المبتدئ؛ تشمل بناء عداد متقدم بنظام التراجع الزمني، تطبيق قائمة مهام تفاعلي متكامل مع الحفظ الدائم، تطبيق طقس يستدعي واجهات الـ REST الخارجية مع ميزة الـ Debounce، تطبيق ملاحظات غني يدعم التثبيت والتصنيف بالوسوم وتصدير الـ Markdown، وتطبيق اختبارات قصيرة تفاعلي مع مؤقت تنازلي وشاشة تقييم ومراجعة شاملة.",
  icon: "🚀",
  topics: [
    topic1,
    topic2,
    topic3,
    topic4,
    topic5
  ],
  summary: section31Meta.summary,
  cheatSheet: section31Meta.cheatSheet,
  capstoneProject: section31Meta.capstoneProject,
  infographic: section31Meta.infographic
};

export default SECTION_31;

