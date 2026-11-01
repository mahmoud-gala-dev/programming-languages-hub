// auditRunner.mjs
// Independent Forensic Audit Script for Milestone 1
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nodejsDir = path.resolve(__dirname, '../../../nodejs');
const rawData = JSON.parse(fs.readFileSync(path.join(nodejsDir, 'src/data/roadmapRaw.json'), 'utf-8'));
const sectionsIndex = await import(`file://${nodejsDir.replace(/\\/g, '/')}/src/data/sections/index.js`);

console.log("=== INDEPENDENT FORENSIC AUDIT ENGINE (M1) ===");

const auditReport = {
  sectionsFound: 0,
  mainTopicsCount: 0,
  subtopicsCount: 0,
  totalQuizzes: 0,
  totalExercises: 0,
  totalMiniProjects: 0,
  arabicCommentStats: {
    totalSimpleCodeLines: 0,
    totalSimpleCommentLines: 0,
    totalAdvancedCodeLines: 0,
    totalAdvancedCommentLines: 0,
    minCommentLength: Infinity,
    dummyCommentsFound: 0
  },
  violations: [],
  adversarialFailures: []
};

// Check dynamic chunking exports
if (typeof sectionsIndex.fetchSectionData !== 'function') {
  auditReport.violations.push("CRITICAL: fetchSectionData is not exported as function");
}
if (!sectionsIndex.SECTION_LOADERS || Object.keys(sectionsIndex.SECTION_LOADERS).length !== 23) {
  auditReport.violations.push(`CRITICAL: SECTION_LOADERS count is ${Object.keys(sectionsIndex.SECTION_LOADERS || {}).length}, expected 23`);
}

const arabicRegex = /[\u0600-\u06FF]/;

for (let secId = 1; secId <= 23; secId++) {
  const rawSec = rawData.sections.find(s => s.id === secId);
  if (!rawSec) {
    auditReport.violations.push(`Section ${secId} missing from roadmapRaw.json`);
    continue;
  }

  let secData;
  try {
    secData = await sectionsIndex.fetchSectionData(secId);
  } catch (err) {
    auditReport.violations.push(`fetchSectionData(${secId}) threw error: ${err.message}`);
    continue;
  }

  auditReport.sectionsFound++;

  // 1. Audit Section Artifacts: summary, cheatSheet, miniProject
  if (!secData.summary || !Array.isArray(secData.summary.goldenRules) || secData.summary.goldenRules.length < 6) {
    auditReport.violations.push(`Sec ${secId}: invalid summary or goldenRules < 6`);
  }
  if (!secData.cheatSheet || !Array.isArray(secData.cheatSheet.entries) || secData.cheatSheet.entries.length < 8) {
    auditReport.violations.push(`Sec ${secId}: invalid cheatSheet or entries < 8`);
  }
  if (!secData.miniProject || !secData.miniProject.directoryStructure || !Array.isArray(secData.miniProject.codeFiles) || secData.miniProject.codeFiles.length < 1) {
    auditReport.violations.push(`Sec ${secId}: invalid miniProject`);
  } else {
    auditReport.totalMiniProjects++;
    // Verify mini project code files are not trivial stubs
    for (const cf of secData.miniProject.codeFiles) {
      if (!cf.filename || cf.code.length < 30 || !arabicRegex.test(cf.code)) {
        auditReport.adversarialFailures.push(`Sec ${secId} miniProject codeFile ${cf.filename} has suspicious stub or lacks Arabic comments`);
      }
    }
  }

  // 2. Audit Main Topics
  if (!Array.isArray(secData.topics) || secData.topics.length !== rawSec.mainIndices.length) {
    auditReport.violations.push(`Sec ${secId}: topics length mismatch. Expected ${rawSec.mainIndices.length}, got ${secData.topics?.length}`);
  }

  for (let tIdx = 0; tIdx < secData.topics.length; tIdx++) {
    const topic = secData.topics[tIdx];
    auditReport.mainTopicsCount++;

    // Quizzes: exactly 3
    if (!Array.isArray(topic.quizzes) || topic.quizzes.length !== 3) {
      auditReport.violations.push(`Topic ${topic.id}: quizzes count is ${topic.quizzes?.length}, expected 3`);
    } else {
      auditReport.totalQuizzes += 3;
      for (const q of topic.quizzes) {
        if (!q.question || q.question.length < 15 || !arabicRegex.test(q.question)) {
          auditReport.violations.push(`Topic ${topic.id}: Quiz question is empty or non-Arabic`);
        }
        if (!Array.isArray(q.options) || q.options.length !== 4) {
          auditReport.violations.push(`Topic ${topic.id}: Quiz options count is not 4`);
        }
        if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex > 3) {
          auditReport.violations.push(`Topic ${topic.id}: Quiz correctIndex invalid`);
        }
        if (!q.explanation || q.explanation.length < 15) {
          auditReport.violations.push(`Topic ${topic.id}: Quiz explanation too short`);
        }
      }
    }

    // Exercise: exactly 1 solved
    if (!topic.exercise || !topic.exercise.task || !topic.exercise.solution) {
      auditReport.violations.push(`Topic ${topic.id}: exercise missing or incomplete`);
    } else {
      auditReport.totalExercises++;
      if (!arabicRegex.test(topic.exercise.solution) || !topic.exercise.solution.includes('//')) {
        auditReport.adversarialFailures.push(`Topic ${topic.id}: exercise solution lacks Arabic comments`);
      }
    }

    // 3. Audit Subtopics
    for (let sIdx = 0; sIdx < topic.subtopics.length; sIdx++) {
      const sub = topic.subtopics[sIdx];
      auditReport.subtopicsCount++;

      // Check comments above code lines in simpleCode
      const simpleLines = sub.simpleCode.split('\n');
      for (let l = 0; l < simpleLines.length; l++) {
        const line = simpleLines[l].trim();
        if (line.startsWith('//')) {
          auditReport.arabicCommentStats.totalSimpleCommentLines++;
          const commentText = line.replace(/^\/\/\s*/, '');
          if (commentText.length < auditReport.arabicCommentStats.minCommentLength) {
            auditReport.arabicCommentStats.minCommentLength = commentText.length;
          }
          if (commentText.length < 4 || commentText === 'comment' || commentText === 'تعليق') {
            auditReport.arabicCommentStats.dummyCommentsFound++;
            auditReport.adversarialFailures.push(`Subtopic ${sub.id}: dummy comment found: "${commentText}"`);
          }
          if (!arabicRegex.test(commentText)) {
            auditReport.adversarialFailures.push(`Subtopic ${sub.id}: non-Arabic comment found: "${commentText}"`);
          }
        } else if (line.length > 0) {
          auditReport.arabicCommentStats.totalSimpleCodeLines++;
        }
      }

      // Check comments above code lines in advancedCode
      const advLines = sub.advancedCode.split('\n');
      for (let l = 0; l < advLines.length; l++) {
        const line = advLines[l].trim();
        if (line.startsWith('//')) {
          auditReport.arabicCommentStats.totalAdvancedCommentLines++;
          const commentText = line.replace(/^\/\/\s*/, '');
          if (!arabicRegex.test(commentText)) {
            auditReport.adversarialFailures.push(`Subtopic ${sub.id} advancedCode: non-Arabic comment: "${commentText}"`);
          }
        } else if (line.length > 0) {
          auditReport.arabicCommentStats.totalAdvancedCodeLines++;
        }
      }

      // Check definition, analogy, why
      if (!sub.definition || sub.definition.length < 25) {
        auditReport.violations.push(`Subtopic ${sub.id}: definition too short (${sub.definition?.length})`);
      }
      if (!sub.analogy || sub.analogy.length < 25) {
        auditReport.violations.push(`Subtopic ${sub.id}: analogy too short (${sub.analogy?.length})`);
      }
      if (!sub.why || sub.why.length < 25) {
        auditReport.violations.push(`Subtopic ${sub.id}: why too short (${sub.why?.length})`);
      }
      if (!Array.isArray(sub.terms) || sub.terms.length < 3) {
        auditReport.violations.push(`Subtopic ${sub.id}: terms < 3`);
      }
    }
  }
}

console.log("\n=== AUDIT SUMMARY RESULTS ===");
console.log(`Sections Verified: ${auditReport.sectionsFound} / 23`);
console.log(`Main Topics Verified: ${auditReport.mainTopicsCount} / 126`);
console.log(`Subtopics Verified: ${auditReport.subtopicsCount} / 981`);
console.log(`Total Quizzes: ${auditReport.totalQuizzes} (3 per main topic)`);
console.log(`Total Exercises: ${auditReport.totalExercises} (1 per main topic)`);
console.log(`Total Mini-Projects: ${auditReport.totalMiniProjects} (1 per section)`);
console.log(`Total Simple Comment Lines: ${auditReport.arabicCommentStats.totalSimpleCommentLines}`);
console.log(`Total Simple Code Lines: ${auditReport.arabicCommentStats.totalSimpleCodeLines}`);
console.log(`Total Advanced Comment Lines: ${auditReport.arabicCommentStats.totalAdvancedCommentLines}`);
console.log(`Total Advanced Code Lines: ${auditReport.arabicCommentStats.totalAdvancedCodeLines}`);
console.log(`Shortest Comment Length: ${auditReport.arabicCommentStats.minCommentLength} chars`);
console.log(`Dummy Comments Found: ${auditReport.arabicCommentStats.dummyCommentsFound}`);
console.log(`Critical Violations: ${auditReport.violations.length}`);
console.log(`Adversarial Failures: ${auditReport.adversarialFailures.length}`);

if (auditReport.violations.length > 0) {
  console.error("\nCRITICAL VIOLATIONS:");
  auditReport.violations.slice(0, 10).forEach(v => console.error(" - " + v));
}
if (auditReport.adversarialFailures.length > 0) {
  console.warn("\nADVERSARIAL FAILURES:");
  auditReport.adversarialFailures.slice(0, 10).forEach(f => console.warn(" - " + f));
}

const verdict = (auditReport.violations.length === 0 && auditReport.adversarialFailures.length === 0) 
  ? "CLEAN" 
  : "INTEGRITY VIOLATION";

console.log(`\nFINAL FORENSIC VERDICT: ${verdict}`);

fs.writeFileSync(
  path.join(__dirname, 'auditResults.json'),
  JSON.stringify(auditReport, null, 2),
  'utf-8'
);
