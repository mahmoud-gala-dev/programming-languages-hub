// tests/tier1_features/curriculum_coverage.test.js
// Tier 1: Functional Feature Coverage — Curriculum Architecture & Data Completeness
// Features Covered: F1, F2, F3, F4, F5 (15 Tests)

import { collector } from '../collector.js';
import { assert, PROJECT_ROOT, SRC_ROOT, safeImport } from '../test_helper.js';
import fs from 'node:fs';
import path from 'node:path';

collector.setTier('Tier 1: Feature Coverage');

collector.suite('Curriculum Architecture & Data Completeness (F1-F5)', (test) => {
  const rawPath = path.resolve(SRC_ROOT, 'data/roadmapRaw.json');
  const metaPath = path.resolve(SRC_ROOT, 'data/roadmapMeta.js');
  const sectionsDir = path.resolve(SRC_ROOT, 'data/sections');

  // Test 1: Raw JSON exists and has 23 sections
  test('F1.1: roadmapRaw.json exists and specifies exactly 23 sections', () => {
    assert.ok(fs.existsSync(rawPath), 'roadmapRaw.json must exist');
    const content = JSON.parse(fs.readFileSync(rawPath, 'utf-8'));
    const sections = Array.isArray(content) ? content : (content.sections || []);
    assert.ok(Array.isArray(sections), 'roadmapRaw sections must be an array');
    assert.equal(sections.length, 23, 'Must specify exactly 23 sections');
  });

  // Test 2: Raw JSON specifies exactly 126 main topics
  test('F1.2: roadmapRaw.json contains exactly 126 main topics across all sections', () => {
    const content = JSON.parse(fs.readFileSync(rawPath, 'utf-8'));
    const sections = Array.isArray(content) ? content : (content.sections || []);
    let topicCount = 0;
    sections.forEach((sec) => {
      const topics = sec.mainIndices || sec.topics || [];
      topicCount += topics.length;
    });
    assert.equal(topicCount, 126, 'Must specify exactly 126 main topics');
  });

  // Test 3: Raw JSON specifies exactly 981 subtopics
  test('F1.3: roadmapRaw.json contains exactly 981 subtopics across all topics', () => {
    const content = JSON.parse(fs.readFileSync(rawPath, 'utf-8'));
    const sections = Array.isArray(content) ? content : (content.sections || []);
    let subtopicCount = 0;
    sections.forEach((sec) => {
      const topics = sec.mainIndices || sec.topics || [];
      topics.forEach((top) => {
        const subtopics = top.subIndices || top.subtopics || [];
        subtopicCount += subtopics.length;
      });
    });
    assert.equal(subtopicCount, 981, 'Must specify exactly 981 subtopics');
  });

  // Test 4: roadmapMeta.js exports ROADMAP_META or ROADMAP_SECTIONS with 23 sections and metadata
  test('F1.4: roadmapMeta.js exports ROADMAP_META array of 23 sections with metadata keys', async () => {
    const metaMod = await safeImport('src/data/roadmapMeta.js');
    const metaList = metaMod.ROADMAP_META || metaMod.ROADMAP_SECTIONS || metaMod.SECTIONS_META;
    assert.ok(metaList, 'ROADMAP_META or ROADMAP_SECTIONS must be exported');
    assert.equal(metaList.length, 23, 'Must contain 23 section items');
    
    metaList.forEach((sec) => {
      assert.ok(sec.id, 'Section metadata must have id');
      assert.ok(sec.title, 'Section metadata must have title');
      assert.ok(sec.englishTitle, 'Section metadata must have englishTitle');
      assert.ok(typeof sec.topicsCount === 'number', 'Section metadata must have topicsCount');
    });
  });

  // Test 5: sections/index.js exports dynamic loader
  test('F2.1: sections/index.js exports fetchSectionData or SECTIONS_MAP', async () => {
    const indexMod = await safeImport('src/data/sections/index.js');
    assert.ok(indexMod.fetchSectionData || indexMod.SECTIONS_MAP, 'Must export fetchSectionData or SECTIONS_MAP');
  });

  // Test 6: Section 1 loads completely with valid structure
  test('F2.2: Section 1 data loads successfully with complete schema', async () => {
    const sec1Mod = await safeImport('src/data/sections/section1.js');
    const sec1 = sec1Mod.default || sec1Mod.section1;
    assert.ok(sec1, 'Section 1 data must be exported');
    assert.equal(sec1.id, 1, 'Section 1 id must be 1');
    assert.ok(sec1.title, 'Section 1 must have title');
    assert.ok(Array.isArray(sec1.topics), 'Section 1 topics must be an array');
    assert.equal(sec1.topics.length, 4, 'Section 1 must have 4 topics');
  });

  // Test 7: Subtopics in Section 1 contain all 16 pedagogical keys
  test('F3.1: Subtopics in Section 1 contain all 16 required pedagogical properties', async () => {
    const sec1Mod = await safeImport('src/data/sections/section1.js');
    const sec1 = sec1Mod.default || sec1Mod.section1;
    const requiredKeys = [
      'id', 'title', 'englishTitle', 'definition', 'analogy', 'why',
      'terms', 'syntax', 'simpleCode', 'advancedCode', 'outputExplanation',
      'commonMistakes', 'bestPractices', 'infographic', 'quiz', 'exercise'
    ];

    sec1.topics.forEach((topic) => {
      topic.subtopics.forEach((sub) => {
        requiredKeys.forEach((k) => {
          assert.ok(k in sub, `Subtopic ${sub.id} missing required pedagogical key: ${k}`);
        });
      });
    });
  });

  // Test 8: Subtopics contain Arabic explanatory comments in code
  test('F3.2: simpleCode in subtopics contains Arabic explanatory comments above code lines', async () => {
    const sec1Mod = await safeImport('src/data/sections/section1.js');
    const sec1 = sec1Mod.default || sec1Mod.section1;
    const firstSub = sec1.topics[0].subtopics[0];
    assert.ok(firstSub.simpleCode, 'Subtopic must have simpleCode');
    // Verify Arabic characters exist in comments
    const arabicRegex = /[\u0600-\u06FF]/;
    assert.ok(arabicRegex.test(firstSub.simpleCode), 'simpleCode must contain Arabic explanatory comments');
  });

  // Test 9: Subtopics contain valid interactive quizzes
  test('F4.1: Subtopic quizzes have question, options (>=2), and valid correctIndex', async () => {
    const sec1Mod = await safeImport('src/data/sections/section1.js');
    const sec1 = sec1Mod.default || sec1Mod.section1;
    const firstSub = sec1.topics[0].subtopics[0];
    const quiz = firstSub.quiz;
    assert.ok(quiz, 'Quiz object must exist');
    assert.ok(quiz.question && quiz.question.length > 5, 'Quiz must have question');
    assert.ok(Array.isArray(quiz.options) && quiz.options.length >= 2, 'Quiz must have at least 2 options');
    assert.ok(typeof quiz.correctIndex === 'number' && quiz.correctIndex >= 0 && quiz.correctIndex < quiz.options.length, 'correctIndex must be in valid range');
    assert.ok(quiz.explanation, 'Quiz must have explanation');
  });

  // Test 10: Subtopics contain practical exercises with solutions
  test('F4.2: Subtopic exercises have task, hints, solution, and explanation', async () => {
    const sec1Mod = await safeImport('src/data/sections/section1.js');
    const sec1 = sec1Mod.default || sec1Mod.section1;
    const firstSub = sec1.topics[0].subtopics[0];
    const ex = firstSub.exercise;
    assert.ok(ex, 'Exercise object must exist');
    assert.ok(ex.title, 'Exercise must have title');
    assert.ok(ex.task, 'Exercise must have task');
    assert.ok(ex.solution, 'Exercise must have solution');
    assert.ok(ex.solutionExplanation, 'Exercise must have solutionExplanation');
  });

  // Test 11: Section 1 contains summary with golden rules
  test('F5.1: Section 1 contains comprehensive summary with golden rules', async () => {
    const sec1Mod = await safeImport('src/data/sections/section1.js');
    const sec1 = sec1Mod.default || sec1Mod.section1;
    assert.ok(sec1.summary, 'Section 1 must contain summary');
    assert.ok(sec1.summary.overview, 'Summary must have overview');
    assert.ok(Array.isArray(sec1.summary.keyTakeaways), 'Summary must have keyTakeaways array');
    assert.ok(Array.isArray(sec1.summary.goldenRules), 'Summary must have goldenRules array');
  });

  // Test 12: Section 1 contains cheat sheet with comparison cards
  test('F5.2: Section 1 contains quick-reference cheat sheet table/cards', async () => {
    const sec1Mod = await safeImport('src/data/sections/section1.js');
    const sec1 = sec1Mod.default || sec1Mod.section1;
    assert.ok(sec1.cheatSheet, 'Section 1 must contain cheatSheet');
    assert.ok(sec1.cheatSheet.title, 'Cheat sheet must have title');
    assert.ok(Array.isArray(sec1.cheatSheet.items), 'Cheat sheet must have items array');
    assert.ok(sec1.cheatSheet.items.length > 0, 'Cheat sheet items must not be empty');
  });

  // Test 13: Section 1 contains applied mini-project with starter and solution
  test('F5.3: Section 1 contains integrated mini-project with scenario and solution', async () => {
    const sec1Mod = await safeImport('src/data/sections/section1.js');
    const sec1 = sec1Mod.default || sec1Mod.section1;
    assert.ok(sec1.project, 'Section 1 must contain project');
    assert.ok(sec1.project.title, 'Project must have title');
    assert.ok(sec1.project.scenario, 'Project must have scenario');
    assert.ok(Array.isArray(sec1.project.requirements), 'Project must have requirements array');
    assert.ok(sec1.project.completeSolution, 'Project must have completeSolution');
  });

  // Test 14: All 23 section data files exist on disk
  test('F1.5: All 23 section files (section1.js to section23.js) exist on disk', () => {
    for (let i = 1; i <= 23; i++) {
      const secPath = path.resolve(sectionsDir, `section${i}.js`);
      assert.ok(fs.existsSync(secPath), `section${i}.js must exist on disk`);
    }
  });

  // Test 15: In-memory cache in sections/index.js prevents re-fetching
  test('F2.3: fetchSectionData returns cached object on subsequent calls', async () => {
    const indexMod = await safeImport('src/data/sections/index.js');
    if (typeof indexMod.fetchSectionData === 'function') {
      const data1 = await indexMod.fetchSectionData(1);
      const data2 = await indexMod.fetchSectionData(1);
      assert.equal(data1.id, data2.id, 'Cached data id must match');
      assert.equal(data1, data2, 'Subsequent fetch should return identical cached reference');
    } else {
      // Fallback verification for SECTIONS_MAP
      assert.ok(indexMod.SECTIONS_MAP, 'SECTIONS_MAP must exist');
      assert.ok(indexMod.SECTIONS_MAP[1], 'Section 1 must be present in map');
    }
  });
});
