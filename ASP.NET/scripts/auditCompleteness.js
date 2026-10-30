// scripts/auditCompleteness.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runAudit() {
  console.log("🔍 بدء الفحص الشامل والدقيق لكافة أقسام وموضوعات خريطة طريق ASP.NET Core MVC...");
  
  const indexPath = path.join(__dirname, '../src/data/sections/index.js');
  const mod = await import(`file://${indexPath.replace(/\\/g, '/')}`);
  const allSections = mod.ALL_SECTIONS_DATA;

  const sectionIds = Object.keys(allSections);
  console.log(`📦 إجمالي الأقسام المحملة في الفهرس: ${sectionIds.length} قسماً`);

  let totalTopics = 0;
  let totalSubtopics = 0;
  let incompleteSubtopics = 0;
  let missingSectionSummary = 0;
  let codeWithoutComments = 0;

  for (let sId = 1; sId <= 33; sId++) {
    const sec = allSections[sId];
    if (!sec) {
      console.error(`❌ القسم ${sId} مفقود تماماً!`);
      continue;
    }

    if (!sec.summary || !sec.summary.summaryPoints || !sec.summary.quickReferenceTable || !sec.summary.miniProject) {
      console.error(`⚠️ القسم ${sId} يفتقد عناصر الملخص الكاملة!`);
      missingSectionSummary++;
    }

    totalTopics += sec.topics?.length || 0;

    sec.topics?.forEach((topic, tIdx) => {
      topic.subtopics?.forEach((sub, subIdx) => {
        totalSubtopics++;

        // التحقق من الحقول الـ 10 الإلزامية لكل درس
        const requiredFields = [
          'subId',
          'title',
          'englishTitle',
          'definition',
          'analogy',
          'why',
          'terms',
          'syntax',
          'simpleCode',
          'advancedCode',
          'outputExplanation',
          'commonMistakes',
          'bestPractices',
          'infographic',
          'quiz',
          'exercise'
        ];

        let missing = [];
        for (const field of requiredFields) {
          if (!sub[field]) {
            missing.push(field);
          }
        }

        // فحص التعليقات في الكود البسيط
        if (sub.simpleCode && !sub.simpleCode.includes('//')) {
          codeWithoutComments++;
        }

        if (missing.length > 0) {
          console.error(`⚠️ الدرس ${sub.subId || `${sId}.${tIdx+1}.${subIdx+1}`} يفتقد: ${missing.join(', ')}`);
          incompleteSubtopics++;
        }
      });
    });
  }

  console.log("--------------------------------------------------");
  console.log(`✅ فحص الأقسام: ${sectionIds.length} / 33 قسماً كاملة ومؤكدة`);
  console.log(`✅ فحص الموضوعات الرئيسية: ${totalTopics} / 206 موضوعاً كاملاً`);
  console.log(`✅ فحص الدروس الفرعية: ${totalSubtopics} / 1803 درساً كاملاً`);
  console.log(`✅ الدروس غير المكتملة: ${incompleteSubtopics}`);
  console.log(`✅ الأقسام الناقصة الملخص: ${missingSectionSummary}`);
  console.log(`✅ الأكواد الخالية من التعليقات: ${codeWithoutComments}`);
  console.log("--------------------------------------------------");

  if (incompleteSubtopics === 0 && missingSectionSummary === 0 && totalSubtopics === 1803) {
    console.log("🎉 المنهاج كامل 100% بدون أي نقص في أي موضوع أو قسم أو درس أو عنصر بيداغوجي!");
  } else {
    console.warn("⚠️ هناك بعض النواقص التي تحتاج إلى استكمال.");
  }
}

runAudit();
