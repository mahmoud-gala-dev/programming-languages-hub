// scripts/verifyCurriculumIntegrity.js
// سكربت التدقيق والتحقق الجنائي الشامل من سلامة وجودة المنهاج وهيكلية التحميل الكسول

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawDataPath = path.join(__dirname, '../src/data/roadmapRaw.json');
const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf-8'));

async function runIntegrityAudit() {
  console.log("=======================================================");
  console.log("🔍 بدء التدقيق الجنائي لهيكلية وبيانات منهاج Node.js...");
  console.log("=======================================================\n");

  const errors = [];
  const warnings = [];

  // 1. فحص محرك التحميل الكسول index.js
  const sectionsIndex = await import('../src/data/sections/index.js');
  
  if (typeof sectionsIndex.fetchSectionData !== 'function') {
    errors.push("دالة fetchSectionData غير مصدرة أو ليست دالة في sections/index.js");
  }
  if (!sectionsIndex.SECTION_LOADERS || typeof sectionsIndex.SECTION_LOADERS !== 'object') {
    errors.push("كائن SECTION_LOADERS مفقود في sections/index.js");
  } else {
    const loaderKeys = Object.keys(sectionsIndex.SECTION_LOADERS);
    if (loaderKeys.length !== 23) {
      errors.push(`عدد مسجلات التحميل في SECTION_LOADERS هو ${loaderKeys.length} وليس 23`);
    }
  }

  if (!Array.isArray(sectionsIndex.SECTIONS_META) || sectionsIndex.SECTIONS_META.length !== 23) {
    errors.push("مصفوفة SECTIONS_META مفقودة أو لا تحتوي على 23 قسماً");
  }

  if (typeof sectionsIndex.getSectionById !== 'function') {
    errors.push("دالة التوافق التراجعي getSectionById مفقودة");
  }

  if (!sectionsIndex.sectionCache || !(sectionsIndex.sectionCache instanceof Map)) {
    errors.push("الذاكرة المؤقتة sectionCache ليست من نوع Map");
  }

  console.log("✓ تم التحقق بنجاح من واجهات محرك التحميل الكسول (Dynamic Lazy Loading Engine)");

  // 2. فحص الأقسام الـ 23 والمحتوى البيداغوجي
  let validatedSectionsCount = 0;
  let validatedMainTopicsCount = 0;
  let validatedSubtopicsCount = 0;
  let totalQuizzesCount = 0;
  let totalExercisesCount = 0;
  let totalGoldenRulesCount = 0;

  const rawSections = Array.isArray(rawData) ? rawData : (rawData.sections || []);
  for (let secId = 1; secId <= 23; secId++) {
    const rawSec = rawSections.find(s => s.id === secId);
    if (!rawSec) {
      errors.push(`القسم ${secId} مفقود في roadmapRaw.json`);
      continue;
    }

    // جلب بيانات القسم عبر محرك التحميل الكسول
    let sectionData;
    try {
      sectionData = await sectionsIndex.fetchSectionData(secId);
    } catch (e) {
      errors.push(`فشل جلب القسم ${secId} عبر fetchSectionData: ${e.message}`);
      continue;
    }

    validatedSectionsCount++;

    // فحص بيانات القسم الأساسية
    if (sectionData.id !== secId) errors.push(`القسم ${secId}: حقل id غير مطابق (${sectionData.id})`);
    if (!sectionData.title) errors.push(`القسم ${secId}: حقل title مفقود`);
    if (!sectionData.englishTitle) errors.push(`القسم ${secId}: حقل englishTitle مفقود`);
    if (!sectionData.badge) errors.push(`القسم ${secId}: حقل badge مفقود`);

    // فحص ملخص القسم وقواعد الذهب
    if (!sectionData.summary || typeof sectionData.summary !== 'object') {
      errors.push(`القسم ${secId}: كائن summary مفقود`);
    } else {
      if (!sectionData.summary.overview) errors.push(`القسم ${secId}: summary.overview مفقود`);
      if (!Array.isArray(sectionData.summary.goldenRules) || sectionData.summary.goldenRules.length < 6) {
        errors.push(`القسم ${secId}: summary.goldenRules يحتوي على أقل من 6 قواعد (${sectionData.summary.goldenRules?.length || 0})`);
      } else {
        totalGoldenRulesCount += sectionData.summary.goldenRules.length;
        sectionData.summary.goldenRules.forEach((rule, rIdx) => {
          if (!rule.title || !rule.desc) {
            errors.push(`القسم ${secId}: القاعدة الذهبية رقم ${rIdx + 1} تنقصها title أو desc`);
          }
        });
      }
    }

    // فحص البطاقة المرجعية CheatSheet
    if (!sectionData.cheatSheet || typeof sectionData.cheatSheet !== 'object') {
      errors.push(`القسم ${secId}: كائن cheatSheet مفقود`);
    } else {
      if (!sectionData.cheatSheet.title) errors.push(`القسم ${secId}: cheatSheet.title مفقود`);
      if (!Array.isArray(sectionData.cheatSheet.entries) || sectionData.cheatSheet.entries.length < 8) {
        errors.push(`القسم ${secId}: cheatSheet.entries يحتوي على أقل من 8 عناصر (${sectionData.cheatSheet.entries?.length || 0})`);
      }
    }

    // فحص المشروع المصغر MiniProject
    if (!sectionData.miniProject || typeof sectionData.miniProject !== 'object') {
      errors.push(`القسم ${secId}: كائن miniProject مفقود`);
    } else {
      const proj = sectionData.miniProject;
      if (!proj.id || !proj.title || !proj.description || !proj.directoryStructure) {
        errors.push(`القسم ${secId}: miniProject ينقصه id أو title أو description أو directoryStructure`);
      }
      if (!Array.isArray(proj.codeFiles) || proj.codeFiles.length < 1) {
        errors.push(`القسم ${secId}: miniProject.codeFiles فارغ`);
      } else {
        proj.codeFiles.forEach((cf, cfIdx) => {
          if (!cf.filename || !cf.code || !cf.explanation) {
            errors.push(`القسم ${secId}: ملف الكود ${cfIdx} في miniProject ينقصه filename أو code أو explanation`);
          }
        });
      }
    }

    // فحص مطابقة عدد الموضوعات الرئيسية
    const rawTopics = rawSec.mainIndices || rawSec.topics || [];
    if (!Array.isArray(sectionData.topics) || sectionData.topics.length !== rawTopics.length) {
      errors.push(`القسم ${secId}: عدد الموضوعات (${sectionData.topics?.length}) لا يطابق المطلوب (${rawTopics.length})`);
    }

    // فحص كل موضوع رئيسي
    sectionData.topics.forEach((topic, tIdx) => {
      validatedMainTopicsCount++;
      const rawTopic = rawTopics[tIdx];

      // فحص كويزات الموضوع الرئيسي الثلاثة
      if (!Array.isArray(topic.quizzes) || topic.quizzes.length !== 3) {
        errors.push(`الموضوع ${topic.id}: quizzes لا يحتوي على 3 أسئلة بالضبط (${topic.quizzes?.length})`);
      } else {
        totalQuizzesCount += topic.quizzes.length;
        topic.quizzes.forEach((q, qIdx) => {
          if (!q.id || !q.question || !Array.isArray(q.options) || q.options.length !== 4 || typeof q.correctIndex !== 'number' || !q.explanation) {
            errors.push(`الموضوع ${topic.id}: سؤال الكويز ${qIdx + 1} غير مستوفٍ للشروط`);
          }
        });
      }

      // فحص التمرين العملي المحلول
      if (!topic.exercise || typeof topic.exercise !== 'object') {
        errors.push(`الموضوع ${topic.id}: كائن exercise مفقود`);
      } else {
        totalExercisesCount++;
        const ex = topic.exercise;
        if (!ex.id || !ex.title || !ex.task || !Array.isArray(ex.hints) || !ex.solution || !ex.solutionExplanation) {
          errors.push(`الموضوع ${topic.id}: exercise ينقصه أحد الحقول الإلزامية`);
        }
        if (!ex.solution.includes('//')) {
          warnings.push(`الموضوع ${topic.id}: حل التمرين لا يبدو أنه يحتوي على تعليقات عربية`);
        }
      }

      // فحص مطابقة عدد الدروس الفرعية
      const rawSubs = rawTopic.subIndices || rawTopic.subtopics || [];
      if (!Array.isArray(topic.subtopics) || topic.subtopics.length !== rawSubs.length) {
        errors.push(`الموضوع ${topic.id}: عدد الدروس الفرعية (${topic.subtopics?.length}) لا يطابق المطلوب (${rawSubs.length})`);
      }

      // فحص كل درس فرعي والركائز الـ 10
      topic.subtopics.forEach((sub, subIdx) => {
        validatedSubtopicsCount++;
        
        // 1. التعريف
        if (!sub.definition || sub.definition.length < 20) {
          errors.push(`الدرس ${sub.id}: definition مفقود أو قصير جداً`);
        }
        // 2. التشبيه اليومي
        if (!sub.analogy || sub.analogy.length < 20) {
          errors.push(`الدرس ${sub.id}: analogy مفقود أو قصير جداً`);
        }
        // 3. لماذا نحتاجه والمشكلة التي يحلها
        if (!sub.why || sub.why.length < 20) {
          errors.push(`الدرس ${sub.id}: why مفقود أو قصير جداً`);
        }
        // 4. جدول المصطلحات
        if (!Array.isArray(sub.terms) || sub.terms.length < 3) {
          errors.push(`الدرس ${sub.id}: terms يحتوي على أقل من 3 مصطلحات`);
        }
        // 5. الصيغة البرمجية العامة
        if (!sub.syntax) {
          errors.push(`الدرس ${sub.id}: syntax مفقود`);
        }
        // 6. كود مبسط مع تعليقات عربية فوق كل سطر
        if (!sub.simpleCode || !sub.simpleCode.includes('//')) {
          errors.push(`الدرس ${sub.id}: simpleCode مفقود أو يخلو من التعليقات العربية`);
        }
        // 7. كود متقدم
        if (!sub.advancedCode || !sub.advancedCode.includes('//')) {
          errors.push(`الدرس ${sub.id}: advancedCode مفقود أو يخلو من التعليقات`);
        }
        // 8. شرح مخرجات التشغيل
        if (!sub.outputExplanation) {
          errors.push(`الدرس ${sub.id}: outputExplanation مفقود`);
        }
        // 9. الأخطاء الشائعة
        if (!Array.isArray(sub.commonMistakes) || sub.commonMistakes.length < 1) {
          errors.push(`الدرس ${sub.id}: commonMistakes فارغ`);
        }
        // 10. نصائح المحترفين
        if (!Array.isArray(sub.bestPractices) || sub.bestPractices.length < 3) {
          errors.push(`الدرس ${sub.id}: bestPractices يحتوي على أقل من 3 نصائح`);
        }
        // 11. بيانات الإنفوجرافيك
        if (!sub.infographic || !sub.infographic.badge || !sub.infographic.title || !sub.infographic.steps) {
          errors.push(`الدرس ${sub.id}: infographic غير مكتمل`);
        }
        // 12. التوافق التراجعي للكويز والتمرين
        if (!sub.quiz || !sub.exercise) {
          errors.push(`الدرس ${sub.id}: حقول التوافق التراجعي quiz/exercise مفقودة`);
        }
      });
    });
  }

  // 3. فحص كفاءة الذاكرة المؤقتة (Caching Test)
  const cachedSec1 = sectionsIndex.sectionCache.get(1);
  if (!cachedSec1 || cachedSec1.id !== 1) {
    errors.push("فشل التحقق من حفظ القسم في الذاكرة المؤقتة sectionCache");
  }

  // طباعة النتائج والتقرير النهائي
  console.log("\n=======================================================");
  console.log("📊 نتائج تقرير تدقيق الجودة والنزاهة:");
  console.log(`- الأقسام المكتملة والمحققة: ${validatedSectionsCount} / 23`);
  console.log(`- الموضوعات الرئيسية المحققة: ${validatedMainTopicsCount} / 126`);
  console.log(`- الدروس والموضوعات الفرعية المحققة: ${validatedSubtopicsCount} / 981`);
  console.log(`- إجمالي أسئلة الكويز التفاعلية: ${totalQuizzesCount} (3 لكل موضوع رئيسي)`);
  console.log(`- إجمالي التمارين العملية المحلولة: ${totalExercisesCount} (1 لكل موضوع رئيسي)`);
  console.log(`- إجمالي القواعد الذهبية للأقسام: ${totalGoldenRulesCount} (معدل ${Math.round(totalGoldenRulesCount/23)} لكل قسم)`);
  console.log(`- عدد التحذيرات: ${warnings.length}`);
  console.log(`- عدد الأخطاء الحرجة: ${errors.length}`);
  console.log("=======================================================\n");

  if (warnings.length > 0) {
    console.warn("⚠️ التحذيرات المسجلة:");
    warnings.slice(0, 10).forEach(w => console.warn(`  - ${w}`));
  }

  if (errors.length > 0) {
    console.error("✕ الأخطاء الحرجة المكتشفة:");
    errors.slice(0, 20).forEach(e => console.error(`  - ${e}`));
    process.exit(1);
  }

  console.log("🎉 مبروك! المنهاج سليم بنسبة 100% ويستوفي كافة الشروط والمتطلبات بدقة لا تشوبها شائبة!");
  process.exit(0);
}

runIntegrityAudit().catch(err => {
  console.error("✕ استثناء غير معالج أثناء التدقيق:", err);
  process.exit(1);
});
