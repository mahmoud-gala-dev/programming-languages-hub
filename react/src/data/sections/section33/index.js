// src/data/sections/section33/index.js - تجميع وتصدير القسم 33 بالكامل
import { TOPIC_33_1 } from './topic1';
import { TOPIC_33_2 } from './topic2';
import { TOPIC_33_3 } from './topic3';
import { TOPIC_33_4 } from './topic4';
import { TOPIC_33_5 } from './topic5';
import { SECTION_33_META } from './section33Meta';

export const SECTION_33 = {
  id: "section-33",
  title: "القسم 33: مشاريع متقدمة واحترافية",
  description: "المشاريع الخمسة الكبرى الأكثر طلباً واحترافية في سوق العمل العالمي: منصة تجارة إلكترونية متكاملة مع Stripe، لوحة إدارة مشاريع كانبان بالسحب والإفلات والتحديث المتفائل، تطبيق محادثة فورية WebSockets مع التشفير، منصة تعليم إلكتروني LMS مع تتبع موضع التشغيل ومحركات البحث، وتطبيق SaaS مؤسسي متكامل باستخدام Next.js App Router وتعدد المستأجرين.",
  topics: [
    TOPIC_33_1,
    TOPIC_33_2,
    TOPIC_33_3,
    TOPIC_33_4,
    TOPIC_33_5
  ],
  summaryRules: SECTION_33_META.summaryRules,
  cheatSheet: SECTION_33_META.cheatSheet,
  capstoneProject: SECTION_33_META.capstoneProject,
  sectionInfographic: SECTION_33_META.sectionInfographic
};

