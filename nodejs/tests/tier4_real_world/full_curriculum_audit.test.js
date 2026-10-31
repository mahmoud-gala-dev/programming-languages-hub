// tests/tier4_real_world/full_curriculum_audit.test.js
// Tier 4: Real-World Application Workloads — Scenario 2: Complete 23-Section Curriculum Audit
// Workload: Audit all 23 sections, 126 main topics, and 981 subtopics for structural and pedagogical integrity

import { collector } from '../collector.js';
import { assert, safeImport } from '../test_helper.js';

collector.setTier('Tier 4: Real-World Scenarios');

collector.suite('Scenario 2: Full 23-Section Curriculum Audit', (test) => {
  test('E2E.WORKLOAD.2: Comprehensive audit of all 23 sections, 126 topics, and 981 subtopics', async () => {
    let totalTopics = 0;
    let totalSubtopics = 0;
    let verifiedQuizzes = 0;
    let verifiedExercises = 0;
    let verifiedSummaries = 0;
    let verifiedCheatSheets = 0;
    let verifiedProjects = 0;

    const arabicRegex = /[\u0600-\u06FF]/;

    for (let secId = 1; secId <= 23; secId++) {
      const secMod = await safeImport(`src/data/sections/section${secId}.js`);
      const secData = secMod.default || secMod[`section${secId}`];

      assert.ok(secData, `Section ${secId} data must load`);
      assert.equal(secData.id, secId);
      assert.ok(arabicRegex.test(secData.title), `Section ${secId} title must be in Arabic`);

      // Verify Section Summary
      if (secData.summary && secData.summary.overview && secData.summary.goldenRules) {
        verifiedSummaries++;
      }

      // Verify CheatSheet
      if (secData.cheatSheet && Array.isArray(secData.cheatSheet.items) && secData.cheatSheet.items.length > 0) {
        verifiedCheatSheets++;
      }

      // Verify Mini-Project
      if (secData.project && secData.project.title && secData.project.completeSolution) {
        verifiedProjects++;
      }

      // Audit topics and subtopics
      secData.topics.forEach((topic) => {
        totalTopics++;
        assert.ok(topic.id, `Topic missing id in section ${secId}`);
        assert.ok(topic.title, `Topic missing title in section ${secId}`);

        topic.subtopics.forEach((sub) => {
          totalSubtopics++;
          assert.ok(sub.id, `Subtopic missing id in topic ${topic.id}`);
          assert.ok(sub.title, `Subtopic missing title in ${sub.id}`);
          assert.ok(sub.definition, `Subtopic missing definition in ${sub.id}`);
          assert.ok(sub.simpleCode, `Subtopic missing simpleCode in ${sub.id}`);

          // Verify Arabic comments exist
          assert.ok(arabicRegex.test(sub.simpleCode), `Subtopic ${sub.id} simpleCode must have Arabic comments`);

          // Audit quiz
          if (sub.quiz && sub.quiz.question && Array.isArray(sub.quiz.options)) {
            verifiedQuizzes++;
          }

          // Audit exercise
          if (sub.exercise && sub.exercise.task && sub.exercise.solution) {
            verifiedExercises++;
          }
        });
      });
    }

    assert.equal(totalTopics, 126, 'Must audit exactly 126 main topics');
    assert.equal(totalSubtopics, 981, 'Must audit exactly 981 subtopics');
    assert.equal(verifiedSummaries, 23, 'Must verify all 23 section summaries');
    assert.equal(verifiedCheatSheets, 23, 'Must verify all 23 cheat sheets');
    assert.equal(verifiedProjects, 23, 'Must verify all 23 mini-projects');
    assert.ok(verifiedQuizzes >= 981, 'Must verify all subtopic quizzes');
    assert.ok(verifiedExercises >= 981, 'Must verify all subtopic exercises');
  });
});
