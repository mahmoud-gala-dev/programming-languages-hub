// src/data/sections/section27/index.js
// تصدير بيانات القسم 27 بالكامل: Git وGitHub والعمل الجماعي (Git, GitHub & Team Collaboration)

import { topic1 } from './topic1';
import { topic2 } from './topic2';
import { topic3 } from './topic3';
import { section27Meta } from './section27Meta';

export const SECTION_27 = {
  id: "27",
  title: "Git وGitHub والعمل الجماعي",
  englishTitle: "Git, GitHub & Team Collaboration",
  description:
    "الدليل الشامل والمرجع المتكامل لنظام التحكم في الإصدارات Git والتعاون السحابي عبر GitHub: بدءاً من بنية المستودع والمناطق الثلاث، وإدارة الفروع والدمج وحل التعارضات البرمجية Merge Conflicts، ومروراً بدورة طلبات السحب Pull Requests ومراجعة الكود، ولوحات المشاريع بنمط كانبان، وتوحيد الجودة عبر معيار Conventional Commits، وأتمتة الفحص المحلي عبر Husky وlint-staged، وسجلات القرارات المعمارية ADRs وإدارة دورات العمل الرشيقة Agile Sprints.",
  topics: [topic1, topic2, topic3],
  ...section27Meta,
};

export default SECTION_27;

