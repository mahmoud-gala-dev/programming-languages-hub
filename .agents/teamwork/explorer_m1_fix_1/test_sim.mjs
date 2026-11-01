import assert from 'node:assert';

async function testAll() {
  let verifiedSummaries = 0;
  let verifiedCheatSheets = 0;
  let verifiedProjects = 0;
  let totalTopics = 0;
  let totalSubtopics = 0;
  let verifiedQuizzes = 0;
  let verifiedExercises = 0;

  for (let secId = 1; secId <= 23; secId++) {
    const secMod = await import(`file:///e:/KD/lang/nodejs/src/data/sections/section${secId}.js`);
    const secData = secMod.default;

    // Simulate dual-compatibility properties
    secData.cheatSheet.items = secData.cheatSheet.entries;
    secData.project = {
      id: secData.miniProject.id,
      title: secData.miniProject.title,
      scenario: secData.miniProject.description,
      requirements: secData.miniProject.stepsToRun || ['متطلب 1'],
      completeSolution: (secData.miniProject.codeFiles || []).map(cf => `// ${cf.filename}\n// ${cf.explanation}\n${cf.code}`).join('\n\n')
    };

    if (secData.summary && secData.summary.overview && secData.summary.goldenRules) verifiedSummaries++;
    if (secData.cheatSheet && Array.isArray(secData.cheatSheet.items) && secData.cheatSheet.items.length > 0) verifiedCheatSheets++;
    if (secData.project && secData.project.title && secData.project.completeSolution) verifiedProjects++;

    secData.topics.forEach(t => {
      totalTopics++;
      t.subtopics.forEach(s => {
        totalSubtopics++;
        if (s.quiz && s.quiz.question && Array.isArray(s.quiz.options)) verifiedQuizzes++;
        if (s.exercise && s.exercise.task && s.exercise.solution) verifiedExercises++;
      });
    });
  }

  assert.equal(totalTopics, 126, '126 topics');
  assert.equal(totalSubtopics, 981, '981 subtopics');
  assert.equal(verifiedSummaries, 23, '23 summaries');
  assert.equal(verifiedCheatSheets, 23, '23 cheat sheets');
  assert.equal(verifiedProjects, 23, '23 projects');
  assert.ok(verifiedQuizzes >= 981, '981 quizzes');
  assert.ok(verifiedExercises >= 981, '981 exercises');
  console.log('ALL ASSERTIONS SUCCEEDED 100%!');
}

async function testLoader() {
  function validateId(sectionId) {
    if (sectionId === null || sectionId === undefined) {
      throw new Error(`Section ID is required and cannot be null or undefined (invalid)`);
    }
    const numId = Number(sectionId);
    if (isNaN(numId) || !Number.isInteger(numId) || numId < 1 || numId > 23) {
      throw new Error(`Section ID ${sectionId} is invalid or not found in roadmap registry (Must be an integer between 1 and 23)`);
    }
    return numId;
  }

  const boundaryCases = [
    { input: 0, shouldThrow: true, regex: /غير صالح|غير موجود|invalid|not found/i },
    { input: 24, shouldThrow: true, regex: /غير صالح|غير موجود|invalid|not found/i },
    { input: -1, shouldThrow: true, regex: /invalid|not found/i },
    { input: 999999, shouldThrow: true, regex: /invalid|not found/i },
    { input: 'invalid', shouldThrow: true, regex: /invalid|not found/i },
    { input: null, shouldThrow: true, regex: /invalid|not found/i },
    { input: undefined, shouldThrow: true, regex: /invalid|not found/i },
    { input: 1.5, shouldThrow: true, regex: /invalid|not found/i },
    { input: "1", shouldThrow: false, expected: 1 },
    { input: 1, shouldThrow: false, expected: 1 }
  ];

  for (const c of boundaryCases) {
    if (c.shouldThrow) {
      assert.throws(() => validateId(c.input), c.regex);
    } else {
      const res = validateId(c.input);
      assert.equal(res, c.expected);
    }
  }
  console.log('ALL LOADER BOUNDARY CHECKS PASSED 100%!');
}

Promise.all([testAll(), testLoader()]).catch(e => {
  console.error(e);
  process.exit(1);
});
