// src/data/sections/section32/index.js
// القسم 32: مشاريع تطبيقية للمستوى المتوسط

import { topic1 } from "./topic1.js";
import { topic2 } from "./topic2.js";
import { topic3 } from "./topic3.js";
import { topic4 } from "./topic4.js";
import { section32Meta } from "./section32Meta.js";

export const SECTION_32 = {
  id: "section-32",
  number: 32,
  title: "مشاريع تطبيقية للمستوى المتوسط",
  description: "أربعة مشاريع برمجية متقدمة للمستوى المتوسط؛ تشمل بناء متجر إلكتروني متكامل مع سلة تسوق ومحاكاة بوابة الدفع، لوحة تحكم إدارية تفاعلية ببطاقات KPI ومخططات ورسوم وجداول TanStack، نظام إدارة مستخدمين وصلاحيات بالتحقق الصارم مع Zod و TanStack Query، وتطبيق تتبع مصروفات وميزانية احترافي مع useReducer ومحرك تصدير ملفات CSV الحقيقي باللغة العربية.",
  icon: "💼",
  topics: [
    topic1,
    topic2,
    topic3,
    topic4
  ],
  summary: section32Meta.summary,
  cheatSheet: section32Meta.cheatSheet,
  capstoneProject: section32Meta.capstoneProject,
  infographic: section32Meta.infographic
};

export default SECTION_32;

