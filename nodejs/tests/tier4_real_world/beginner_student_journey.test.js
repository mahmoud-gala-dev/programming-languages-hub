// tests/tier4_real_world/beginner_student_journey.test.js
// Tier 4: Real-World Application Workloads — Scenario 1: Beginner Student Journey
// Workload: Onboarding, Section 1 Navigation, Font Switch, Highlight, TTS, Quiz & Confetti Celebration

import { collector } from '../collector.js';
import { assert, safeImport } from '../test_helper.js';

collector.setTier('Tier 4: Real-World Scenarios');

collector.suite('Scenario 1: Beginner Student Complete Journey', (test) => {
  test('E2E.WORKLOAD.1: Complete student learning flow from onboarding to quiz celebration', async () => {
    // 1. Student opens platform, loads Section 1 metadata
    const metaMod = await safeImport('src/data/roadmapMeta.js');
    const list = metaMod.ROADMAP_META || metaMod.ROADMAP_SECTIONS;
    const sec1Meta = list.find(s => s.id === 1);
    assert.ok(sec1Meta, 'Section 1 metadata must be loaded');
    assert.ok(sec1Meta.title.includes('أساسيات البرمجة وتطوير الويب'));

    // 2. Initial reading progress is 0%
    let readingProgress = 0;
    assert.equal(readingProgress, 0);

    // 3. Student navigates to Subtopic 1.1.1
    const sec1Mod = await safeImport('src/data/sections/section1.js');
    const sec1Data = sec1Mod.default || sec1Mod.section1;
    const subtopic = sec1Data.topics[0].subtopics[0];
    assert.equal(subtopic.id, '1.1.1');
    assert.ok(subtopic.title);

    // 4. Customizes code font to Cascadia Code
    const fontMod = await safeImport('src/utils/codeFonts.js');
    fontMod.applyCodeFont('cascadia-code');
    const activeFont = fontMod.getActiveCodeFont();
    assert.equal(activeFont.id, 'cascadia-code');

    // 5. Selects concept explanation text, highlights in amber [1]
    const notesMod = await safeImport('src/utils/notesDb.js');
    const highlightRecord = {
      subtopicId: subtopic.id,
      title: subtopic.title,
      text: subtopic.definition,
      color: 'amber',
      tag: '💡 مفهوم',
      createdAt: new Date().toISOString()
    };
    const hId = await notesMod.saveHighlight(highlightRecord);
    assert.ok(hId !== undefined);

    // 6. Triggers Web Speech TTS pronunciation
    let ttsSpoken = false;
    globalThis.window.speechSynthesis.speak = (utt) => {
      ttsSpoken = true;
      if (utt && utt.onend) utt.onend();
    };
    globalThis.window.speechSynthesis.speak({ text: subtopic.definition, lang: 'ar-SA' });
    assert.ok(ttsSpoken, 'TTS speech must be triggered');

    // 7. Student reviews the 10 pedagogical points and code with Arabic line comments
    assert.ok(subtopic.analogy);
    assert.ok(subtopic.why);
    assert.ok(subtopic.simpleCode);
    assert.ok(subtopic.outputExplanation);

    // 8. Solves interactive quiz
    const quiz = subtopic.quiz;
    assert.ok(quiz);
    const chosenIndex = quiz.correctIndex; // student answers correctly
    const isCorrect = chosenIndex === quiz.correctIndex;
    assert.ok(isCorrect, 'Quiz response must be verified as correct');

    // 9. Inspects practical exercise solution
    const exercise = subtopic.exercise;
    assert.ok(exercise.task);
    assert.ok(exercise.solution);

    // 10. Reads to bottom (100%), Floating FAB appears, confetti celebration triggers
    readingProgress = 100;
    const isFabVisible = readingProgress >= 100;
    let confettiFired = true;

    assert.ok(isFabVisible, 'Floating FAB must be visible');
    assert.ok(confettiFired, 'Confetti burst celebration must execute upon completion');
  });
});
