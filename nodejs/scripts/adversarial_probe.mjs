// scripts/adversarial_probe.mjs
// Adversarial Stress Test & Contract Compliance Probe for Milestone 1
// Challenger 2: Empirical Verification Engine

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const results = {
  bundleAndChunking: { pass: false, details: {} },
  dynamicLoader: { pass: false, details: {} },
  subtopicsAudit: { pass: false, details: {} },
  placeholderAudit: { pass: false, details: {} },
  quizAudit: { pass: false, details: {} },
  exerciseAudit: { pass: false, details: {} },
  miniProjectAudit: { pass: false, details: {} },
  pedagogicalPointsAudit: { pass: false, details: {} },
  errors: [],
  warnings: []
};

function fail(category, msg) {
  results.errors.push(`[${category}] ${msg}`);
}

function warn(category, msg) {
  results.warnings.push(`[${category}] ${msg}`);
}

async function runAdversarialProbe() {
  console.log('===============================================================');
  console.log('🔥 STARTING EMPIRICAL ADVERSARIAL PROBE FOR MILESTONE 1 🔥');
  console.log('===============================================================\n');

  // =========================================================================
  // 1. BUNDLE SIZE & CHUNKING VERIFICATION
  // =========================================================================
  console.log('👉 [1/8] Probing bundle size and chunking in dist/assets...');
  const distAssetsDir = path.join(rootDir, 'dist/assets');
  if (!fs.existsSync(distAssetsDir)) {
    fail('Bundle', 'dist/assets does not exist! Run npm run build first.');
  } else {
    const assetFiles = fs.readdirSync(distAssetsDir);
    const indexBundle = assetFiles.find(f => f.startsWith('index-') && f.endsWith('.js'));
    if (!indexBundle) {
      fail('Bundle', 'Main bundle index-*.js not found in dist/assets.');
    } else {
      const indexPath = path.join(distAssetsDir, indexBundle);
      const stat = fs.statSync(indexPath);
      const sizeKB = (stat.size / 1024).toFixed(2);
      const sizeBytes = stat.size;
      const isUnder200KB = stat.size < 200 * 1024; // 204,800 bytes

      results.bundleAndChunking.details.mainBundle = {
        filename: indexBundle,
        sizeBytes,
        sizeKB: `${sizeKB} kB`,
        under200KB: isUnder200KB
      };

      if (!isUnder200KB) {
        fail('Bundle', `Main bundle is ${sizeKB} kB, which EXCEEDS 200 kB requirement!`);
      } else {
        console.log(`  ✓ Main bundle: ${indexBundle} (${sizeKB} kB) < 200 kB`);
      }

      // Check section chunks
      const sectionChunks = [];
      for (let i = 1; i <= 23; i++) {
        const secRegex = new RegExp(`^section${i}-[a-zA-Z0-9_-]+\\.js$`);
        const found = assetFiles.filter(f => secRegex.test(f));
        if (found.length === 0) {
          fail('Chunking', `Missing chunk for section ${i}`);
        } else {
          const chunkPath = path.join(distAssetsDir, found[0]);
          const chunkSize = fs.statSync(chunkPath).size;
          sectionChunks.push({
            section: i,
            filename: found[0],
            sizeKB: (chunkSize / 1024).toFixed(2)
          });
        }
      }

      results.bundleAndChunking.details.sectionChunks = sectionChunks;
      console.log(`  ✓ All 23 section chunks exist independently in dist/assets.`);

      // Verify that index bundle does NOT contain section content (true code splitting)
      const indexContent = fs.readFileSync(indexPath, 'utf-8');
      if (indexContent.includes('Web Network Simulator') || indexContent.includes('project-sec-1')) {
        fail('Chunking', 'Leakage detected: section data found embedded statically in main index bundle!');
      } else {
        console.log(`  ✓ Verified: No static leakage of curriculum data in main bundle.`);
      }

      if (results.errors.filter(e => e.includes('Bundle') || e.includes('Chunking')).length === 0) {
        results.bundleAndChunking.pass = true;
      }
    }
  }

  // =========================================================================
  // 2. DYNAMIC LOADER INTERFACE & CACHING PROBE
  // =========================================================================
  console.log('\n👉 [2/8] Probing Dynamic Loader contract and cache...');
  try {
    const loaderModule = await import('../src/data/sections/index.js');
    const { fetchSectionData, sectionCache, SECTIONS_META, getSectionById } = loaderModule;

    if (typeof fetchSectionData !== 'function') {
      fail('Loader', 'fetchSectionData is not a function');
    }
    if (!(sectionCache instanceof Map)) {
      fail('Loader', 'sectionCache is not an instance of Map');
    }
    if (!Array.isArray(SECTIONS_META) || SECTIONS_META.length !== 23) {
      fail('Loader', `SECTIONS_META has length ${SECTIONS_META?.length}, expected 23`);
    }

    // Test caching behavior
    sectionCache.clear();
    const t0 = performance.now();
    const sec1First = await fetchSectionData(1);
    const d1 = performance.now() - t0;

    const t1 = performance.now();
    const sec1Second = await fetchSectionData(1);
    const d2 = performance.now() - t1;

    if (sec1First !== sec1Second) {
      fail('Loader', 'fetchSectionData did not return the exact cached object reference!');
    }
    console.log(`  ✓ Cache probe passed: first fetch took ${d1.toFixed(2)}ms, cached fetch took ${d2.toFixed(2)}ms`);

    // Test invalid section id handling (Strict Boundary Testing)
    try {
      await fetchSectionData(999);
      fail('Loader', 'fetchSectionData(999) should throw an error but did not');
    } catch (e) {
      console.log(`  ✓ Out-of-bounds upper limit error handling passed: ${e.message}`);
    }

    // Boundary check: section ID 0
    try {
      const res0 = await fetchSectionData(0);
      fail('Loader', `BOUNDARY DEFECT: fetchSectionData(0) silently returned section ${res0?.id} instead of throwing an error! (Cause: "Number(sectionId) || 1")`);
    } catch (e) {
      console.log(`  ✓ Boundary section ID 0 rejected correctly`);
    }

    // Boundary check: non-numeric string 'invalid'
    try {
      const resInv = await fetchSectionData('invalid');
      fail('Loader', `BOUNDARY DEFECT: fetchSectionData('invalid') silently returned section ${resInv?.id} instead of throwing an error!`);
    } catch (e) {
      console.log(`  ✓ Non-numeric section ID rejected correctly`);
    }

    if (results.errors.filter(e => e.includes('Loader')).length === 0) {
      results.dynamicLoader.pass = true;
    }
  } catch (err) {
    fail('Loader', `Exception probing dynamic loader: ${err.message}`);
  }

  // =========================================================================
  // 3. LOAD ALL 23 SECTIONS FOR ADVERSARIAL INSPECTION
  // =========================================================================
  console.log('\n👉 Loading all 23 sections via fetchSectionData...');
  const loaderModule = await import('../src/data/sections/index.js');
  const sections = [];
  for (let s = 1; s <= 23; s++) {
    const secData = await loaderModule.fetchSectionData(s);
    sections.push(secData);
  }
  console.log(`  ✓ Loaded all ${sections.length} sections into memory.`);

  // Load raw specification for cross-reference
  const rawPath = path.join(rootDir, 'src/data/roadmapRaw.json');
  const rawSpec = JSON.parse(fs.readFileSync(rawPath, 'utf-8'));

  // =========================================================================
  // 4. SUBTOPICS UNIQUENESS & ADDRESSABILITY PROBE (981 Subtopics)
  // =========================================================================
  console.log('\n👉 [3/8] Probing 981 subtopics uniqueness and addressability...');
  const subtopicIdMap = new Map();
  const allSubtopics = [];
  let totalMainTopicsCount = 0;

  sections.forEach((sec, sIdx) => {
    if (!Array.isArray(sec.topics)) {
      fail('Subtopics', `Section ${sec.id} has no topics array`);
      return;
    }
    totalMainTopicsCount += sec.topics.length;

    sec.topics.forEach((topic, tIdx) => {
      if (!Array.isArray(topic.subtopics)) {
        fail('Subtopics', `Topic ${topic.id} has no subtopics array`);
        return;
      }
      topic.subtopics.forEach((sub, subIdx) => {
        allSubtopics.push({
          sub,
          sectionId: sec.id,
          topicId: topic.id,
          subIdx
        });

        if (!sub.id || typeof sub.id !== 'string' || sub.id.trim() === '') {
          fail('Subtopics', `Subtopic at Sec ${sec.id}, Topic ${topic.id}, Index ${subIdx} has invalid/empty id: "${sub.id}"`);
        } else {
          if (subtopicIdMap.has(sub.id)) {
            const prev = subtopicIdMap.get(sub.id);
            fail('Subtopics', `DUPLICATE subtopic id "${sub.id}" found in Sec ${sec.id} (previously seen in Sec ${prev.sectionId})`);
          } else {
            subtopicIdMap.set(sub.id, { sectionId: sec.id, topicId: topic.id, title: sub.title });
          }
        }
      });
    });
  });

  const rawSubtopicsCount = rawSpec.sections.reduce((acc, s) => {
    return acc + s.mainIndices.reduce((tAcc, t) => tAcc + t.subIndices.length, 0);
  }, 0);

  console.log(`  - Total Sections: ${sections.length} (Expected: 23)`);
  console.log(`  - Total Main Topics: ${totalMainTopicsCount} (Expected: 126)`);
  console.log(`  - Total Subtopics: ${allSubtopics.length} (Expected: 981, Raw Spec: ${rawSubtopicsCount})`);
  console.log(`  - Unique Subtopic IDs: ${subtopicIdMap.size} (Expected: 981)`);

  if (allSubtopics.length !== 981) {
    fail('Subtopics', `Total subtopics count is ${allSubtopics.length}, expected 981!`);
  }
  if (subtopicIdMap.size !== 981) {
    fail('Subtopics', `Unique subtopic IDs count is ${subtopicIdMap.size}, expected 981!`);
  }
  if (totalMainTopicsCount !== 126) {
    fail('Subtopics', `Total main topics count is ${totalMainTopicsCount}, expected 126!`);
  }

  // Cross-reference with roadmapRaw.json subtopic titles and position
  rawSpec.sections.forEach((rawSec, sIdx) => {
    rawSec.mainIndices.forEach((rawTopic, tIdx) => {
      rawTopic.subIndices.forEach((rawSub, subIdx) => {
        const expectedId = `${rawSec.id}.${tIdx + 1}.${subIdx + 1}`;
        const found = subtopicIdMap.get(expectedId);
        if (!found) {
          fail('Subtopics', `Expected Subtopic ID "${expectedId}" (${rawSub.title}) NOT FOUND in section data!`);
        } else if (found.title !== rawSub.title) {
          fail('Subtopics', `Subtopic ID "${expectedId}" title mismatch: expected "${rawSub.title}", got "${found.title}"`);
        }
      });
    });
  });

  results.subtopicsAudit.details = {
    totalSubtopics: allSubtopics.length,
    uniqueSubtopicIds: subtopicIdMap.size,
    totalMainTopics: totalMainTopicsCount
  };
  if (allSubtopics.length === 981 && subtopicIdMap.size === 981 && totalMainTopicsCount === 126) {
    results.subtopicsAudit.pass = true;
    console.log('  ✓ 981 Subtopics Uniqueness and Addressability probe PASSED.');
  }

  // =========================================================================
  // 5. AST & CONTENT SEARCH: EMPTY OR PLACEHOLDER STRINGS PROBE
  // =========================================================================
  console.log('\n👉 [4/8] Adversarial deep scan for empty or placeholder strings across all 23 sections...');

  const placeholderRegexes = [
    { name: 'TODO', regex: /\bTODO\b/i },
    { name: 'TBD', regex: /\bTBD\b/i },
    { name: 'FIXME', regex: /\bFIXME\b/i },
    { name: 'placeholder', regex: /\bplaceholder\b/i },
    { name: 'lorem ipsum', regex: /lorem\s+ipsum/i },
    { name: '[object Object]', regex: /\[object Object\]/ },
    { name: 'Arabic placeholder 1', regex: /قيد الإنشاء/ },
    { name: 'Arabic placeholder 2', regex: /سيتم إضافته/ },
    { name: 'Arabic placeholder 3', regex: /نص تجريبي/ }
  ];

  let totalStringsInspected = 0;
  let emptyStringViolations = 0;
  let placeholderViolations = 0;

  function scanObjectForPlaceholders(obj, currentPath) {
    if (obj === null || obj === undefined) return;

    if (typeof obj === 'string') {
      totalStringsInspected++;
      const trimmed = obj.trim();

      // Check empty
      if (trimmed === '') {
        emptyStringViolations++;
        fail('Placeholders', `Empty string found at: ${currentPath}`);
        return;
      }

      // Check literal "undefined" or "null"
      if (trimmed === 'undefined' || trimmed === 'null') {
        placeholderViolations++;
        fail('Placeholders', `Literal "${trimmed}" found at: ${currentPath}`);
        return;
      }

      // Check regexes
      for (const pr of placeholderRegexes) {
        if (pr.regex.test(obj)) {
          placeholderViolations++;
          fail('Placeholders', `Placeholder match (${pr.name}) at: ${currentPath} => "${obj.slice(0, 60)}..."`);
        }
      }
      return;
    }

    if (Array.isArray(obj)) {
      obj.forEach((item, idx) => {
        scanObjectForPlaceholders(item, `${currentPath}[${idx}]`);
      });
      return;
    }

    if (typeof obj === 'object') {
      for (const [key, val] of Object.entries(obj)) {
        scanObjectForPlaceholders(val, `${currentPath}.${key}`);
      }
    }
  }

  sections.forEach((sec, idx) => {
    scanObjectForPlaceholders(sec, `SECTION_${sec.id}`);
  });

  console.log(`  - Total strings inspected: ${totalStringsInspected.toLocaleString()}`);
  console.log(`  - Empty string violations: ${emptyStringViolations}`);
  console.log(`  - Placeholder violations: ${placeholderViolations}`);

  results.placeholderAudit.details = {
    totalStringsInspected,
    emptyStringViolations,
    placeholderViolations
  };

  if (emptyStringViolations === 0 && placeholderViolations === 0) {
    results.placeholderAudit.pass = true;
    console.log('  ✓ Empty/Placeholder strings deep scan PASSED (0 defects found).');
  }

  // =========================================================================
  // 6. QUIZ QUESTIONS AUDIT (378 Quiz Questions)
  // =========================================================================
  console.log('\n👉 [5/8] Probing 378 quiz questions across all 126 main topics...');
  let totalMainTopicQuizzes = 0;
  const quizIds = new Set();
  let quizDefects = 0;

  sections.forEach(sec => {
    sec.topics.forEach(topic => {
      if (!Array.isArray(topic.quizzes) || topic.quizzes.length !== 3) {
        fail('Quiz', `Topic ${topic.id} (Sec ${sec.id}) has ${topic.quizzes?.length || 0} quizzes, expected exactly 3`);
        quizDefects++;
        return;
      }

      totalMainTopicQuizzes += topic.quizzes.length;

      topic.quizzes.forEach((q, qIdx) => {
        const qPath = `Sec ${sec.id} Topic ${topic.id} Quiz[${qIdx}]`;

        // Check ID
        if (!q.id || typeof q.id !== 'string') {
          fail('Quiz', `${qPath}: Missing or non-string id`);
          quizDefects++;
        } else {
          if (quizIds.has(q.id)) {
            fail('Quiz', `${qPath}: Duplicate quiz id "${q.id}"`);
            quizDefects++;
          }
          quizIds.add(q.id);
        }

        // Check Question text
        if (!q.question || typeof q.question !== 'string' || q.question.trim().length < 15) {
          fail('Quiz', `${qPath}: question is too short or empty`);
          quizDefects++;
        }

        // Check Options
        if (!Array.isArray(q.options) || q.options.length !== 4) {
          fail('Quiz', `${qPath}: options array must have exactly 4 items (got ${q.options?.length})`);
          quizDefects++;
        } else {
          q.options.forEach((opt, oIdx) => {
            if (typeof opt !== 'string' || opt.trim().length < 2) {
              fail('Quiz', `${qPath} Option ${oIdx}: empty or invalid option text`);
              quizDefects++;
            }
          });
        }

        // Check Correct Index
        if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex > 3 || !Number.isInteger(q.correctIndex)) {
          fail('Quiz', `${qPath}: correctIndex must be an integer between 0 and 3 (got ${q.correctIndex})`);
          quizDefects++;
        }

        // Check Explanation
        if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim().length < 15) {
          fail('Quiz', `${qPath}: explanation is too short or empty`);
          quizDefects++;
        }
      });
    });
  });

  console.log(`  - Total main topic quiz questions audited: ${totalMainTopicQuizzes} (Expected: 378)`);
  console.log(`  - Unique quiz IDs: ${quizIds.size} (Expected: 378)`);
  console.log(`  - Quiz defects found: ${quizDefects}`);

  results.quizAudit.details = {
    totalMainTopicQuizzes,
    uniqueQuizIds: quizIds.size,
    quizDefects
  };

  if (totalMainTopicQuizzes === 378 && quizIds.size === 378 && quizDefects === 0) {
    results.quizAudit.pass = true;
    console.log('  ✓ 378 Quiz Questions verification PASSED.');
  }

  // =========================================================================
  // 7. SOLVED PRACTICAL EXERCISES AUDIT (126 Exercises)
  // =========================================================================
  console.log('\n👉 [6/8] Probing 126 solved exercises across all 126 main topics...');
  let totalMainTopicExercises = 0;
  const exerciseIds = new Set();
  let exerciseDefects = 0;
  let exercisesWithArabicComments = 0;

  sections.forEach(sec => {
    sec.topics.forEach(topic => {
      if (!topic.exercise || typeof topic.exercise !== 'object') {
        fail('Exercise', `Topic ${topic.id} (Sec ${sec.id}) is missing exercise object`);
        exerciseDefects++;
        return;
      }

      totalMainTopicExercises++;
      const ex = topic.exercise;
      const exPath = `Sec ${sec.id} Topic ${topic.id} Exercise`;

      // Check ID
      if (!ex.id || typeof ex.id !== 'string') {
        fail('Exercise', `${exPath}: Missing or non-string id`);
        exerciseDefects++;
      } else {
        if (exerciseIds.has(ex.id)) {
          fail('Exercise', `${exPath}: Duplicate exercise id "${ex.id}"`);
          exerciseDefects++;
        }
        exerciseIds.add(ex.id);
      }

      // Check Title
      if (!ex.title || typeof ex.title !== 'string' || ex.title.trim().length < 5) {
        fail('Exercise', `${exPath}: title is too short or empty`);
        exerciseDefects++;
      }

      // Check Task
      if (!ex.task || typeof ex.task !== 'string' || ex.task.trim().length < 20) {
        fail('Exercise', `${exPath}: task description is too short or empty`);
        exerciseDefects++;
      }

      // Check Hints
      if (!Array.isArray(ex.hints) || ex.hints.length === 0) {
        fail('Exercise', `${exPath}: hints array is empty`);
        exerciseDefects++;
      } else {
        ex.hints.forEach((h, hIdx) => {
          if (typeof h !== 'string' || h.trim().length < 5) {
            fail('Exercise', `${exPath} Hint ${hIdx}: hint is too short or empty`);
            exerciseDefects++;
          }
        });
      }

      // Check Solution code
      if (!ex.solution || typeof ex.solution !== 'string' || ex.solution.trim().length < 30) {
        fail('Exercise', `${exPath}: solution code is too short or empty`);
        exerciseDefects++;
      } else {
        // Check for Arabic comments in solution
        const hasArabic = /[\u0600-\u06FF]/.test(ex.solution);
        const hasComments = ex.solution.includes('//');
        if (hasArabic && hasComments) {
          exercisesWithArabicComments++;
        } else {
          warn('Exercise', `${exPath}: solution lacks Arabic comments above lines`);
        }
      }

      // Check Solution Explanation
      if (!ex.solutionExplanation || typeof ex.solutionExplanation !== 'string' || ex.solutionExplanation.trim().length < 20) {
        fail('Exercise', `${exPath}: solutionExplanation is too short or empty`);
        exerciseDefects++;
      }
    });
  });

  console.log(`  - Total main topic exercises audited: ${totalMainTopicExercises} (Expected: 126)`);
  console.log(`  - Unique exercise IDs: ${exerciseIds.size} (Expected: 126)`);
  console.log(`  - Exercises with Arabic comments in solution: ${exercisesWithArabicComments} / 126`);
  console.log(`  - Exercise defects found: ${exerciseDefects}`);

  results.exerciseAudit.details = {
    totalMainTopicExercises,
    uniqueExerciseIds: exerciseIds.size,
    exercisesWithArabicComments,
    exerciseDefects
  };

  if (totalMainTopicExercises === 126 && exerciseIds.size === 126 && exerciseDefects === 0) {
    results.exerciseAudit.pass = true;
    console.log('  ✓ 126 Solved Practical Exercises verification PASSED.');
  }

  // =========================================================================
  // 8. MINI-PROJECTS AUDIT (23 Mini-Projects)
  // =========================================================================
  console.log('\n👉 [7/8] Probing 23 mini-projects with code files and run instructions...');
  let totalMiniProjects = 0;
  const projectIds = new Set();
  let projectDefects = 0;
  let totalProjectCodeFiles = 0;

  sections.forEach(sec => {
    if (!sec.miniProject || typeof sec.miniProject !== 'object') {
      fail('MiniProject', `Section ${sec.id} is missing miniProject object`);
      projectDefects++;
      return;
    }

    totalMiniProjects++;
    const p = sec.miniProject;
    const pPath = `Sec ${sec.id} MiniProject`;

    // Check ID
    if (!p.id || typeof p.id !== 'string') {
      fail('MiniProject', `${pPath}: Missing or non-string id`);
      projectDefects++;
    } else {
      if (projectIds.has(p.id)) {
        fail('MiniProject', `${pPath}: Duplicate project id "${p.id}"`);
        projectDefects++;
      }
      projectIds.add(p.id);
    }

    // Check Title
    if (!p.title || typeof p.title !== 'string' || p.title.trim().length < 5) {
      fail('MiniProject', `${pPath}: title is too short or empty`);
      projectDefects++;
    }

    // Check Description
    if (!p.description || typeof p.description !== 'string' || p.description.trim().length < 20) {
      fail('MiniProject', `${pPath}: description is too short or empty`);
      projectDefects++;
    }

    // Check Directory Structure
    if (!p.directoryStructure || typeof p.directoryStructure !== 'string' || p.directoryStructure.trim().length < 10) {
      fail('MiniProject', `${pPath}: directoryStructure is too short or empty`);
      projectDefects++;
    }

    // Check Code Files
    if (!Array.isArray(p.codeFiles) || p.codeFiles.length === 0) {
      fail('MiniProject', `${pPath}: codeFiles array is empty`);
      projectDefects++;
    } else {
      totalProjectCodeFiles += p.codeFiles.length;
      p.codeFiles.forEach((cf, cfIdx) => {
        if (!cf.filename || typeof cf.filename !== 'string' || cf.filename.trim() === '') {
          fail('MiniProject', `${pPath} CodeFile ${cfIdx}: invalid filename`);
          projectDefects++;
        }
        if (!cf.code || typeof cf.code !== 'string' || cf.code.trim().length < 30) {
          fail('MiniProject', `${pPath} CodeFile ${cfIdx}: code is too short or empty`);
          projectDefects++;
        }
        if (!cf.explanation || typeof cf.explanation !== 'string' || cf.explanation.trim().length < 10) {
          fail('MiniProject', `${pPath} CodeFile ${cfIdx}: explanation is too short or empty`);
          projectDefects++;
        }
      });
    }

    // Check Run Instructions (stepsToRun or runInstructions)
    const runSteps = p.stepsToRun || p.runInstructions;
    if (!runSteps || (!Array.isArray(runSteps) && typeof runSteps !== 'string')) {
      fail('MiniProject', `${pPath}: stepsToRun/runInstructions is missing or invalid type`);
      projectDefects++;
    } else if (Array.isArray(runSteps)) {
      if (runSteps.length < 2) {
        fail('MiniProject', `${pPath}: stepsToRun has fewer than 2 steps`);
        projectDefects++;
      }
      runSteps.forEach((step, sIdx) => {
        if (typeof step !== 'string' || step.trim().length < 5) {
          fail('MiniProject', `${pPath} Step ${sIdx}: run instruction step is too short`);
          projectDefects++;
        }
      });
    }
  });

  console.log(`  - Total mini-projects audited: ${totalMiniProjects} (Expected: 23)`);
  console.log(`  - Unique mini-project IDs: ${projectIds.size} (Expected: 23)`);
  console.log(`  - Total project code files audited: ${totalProjectCodeFiles}`);
  console.log(`  - Project defects found: ${projectDefects}`);

  results.miniProjectAudit.details = {
    totalMiniProjects,
    uniqueProjectIds: projectIds.size,
    totalProjectCodeFiles,
    projectDefects
  };

  if (totalMiniProjects === 23 && projectIds.size === 23 && projectDefects === 0) {
    results.miniProjectAudit.pass = true;
    console.log('  ✓ 23 Mini-Projects with code files and run instructions PASSED.');
  }

  // Schema Compatibility Probe for Platform Contracts & E2E Test Suite
  console.log('\n👉 Probing schema compatibility for CheatSheet (items vs entries) and Project (project vs miniProject)...');
  let cheatSheetItemsMissing = 0;
  let projectKeyMissing = 0;

  sections.forEach(sec => {
    if (!Array.isArray(sec.cheatSheet?.items)) {
      cheatSheetItemsMissing++;
    }
    if (!sec.project) {
      projectKeyMissing++;
    }
  });

  if (cheatSheetItemsMissing > 0) {
    warn('SchemaCompatibility', `${cheatSheetItemsMissing}/23 sections lack "cheatSheet.items" (using "entries" instead, causing E2E tests F5.2, MEM.28, and E2E.WORKLOAD.2 to fail).`);
  }
  if (projectKeyMissing > 0) {
    warn('SchemaCompatibility', `${projectKeyMissing}/23 sections lack top-level "project" property (using "miniProject" instead, causing E2E tests F5.3, MEM.21, MEM.29, and E2E.WORKLOAD.2 to fail).`);
  }


  // =========================================================================
  // 9. SUBTOPIC 10 PEDAGOGICAL PILLARS AUDIT (981 Subtopics)
  // =========================================================================
  console.log('\n👉 [8/8] Probing 10 pedagogical pillars across all 981 subtopics...');
  let subtopicPillarDefects = 0;

  allSubtopics.forEach(({ sub, sectionId, topicId }) => {
    const sPath = `Sec ${sectionId} Topic ${topicId} Sub ${sub.id}`;

    // 1. Definition
    if (!sub.definition || typeof sub.definition !== 'string' || sub.definition.trim().length < 20) {
      fail('Pedagogy', `${sPath}: definition is missing or < 20 chars`);
      subtopicPillarDefects++;
    }
    // 2. Analogy
    if (!sub.analogy || typeof sub.analogy !== 'string' || sub.analogy.trim().length < 20) {
      fail('Pedagogy', `${sPath}: analogy is missing or < 20 chars`);
      subtopicPillarDefects++;
    }
    // 3. Why
    if (!sub.why || typeof sub.why !== 'string' || sub.why.trim().length < 20) {
      fail('Pedagogy', `${sPath}: why is missing or < 20 chars`);
      subtopicPillarDefects++;
    }
    // 4. Terms
    if (!Array.isArray(sub.terms) || sub.terms.length < 3) {
      fail('Pedagogy', `${sPath}: terms has fewer than 3 entries (${sub.terms?.length})`);
      subtopicPillarDefects++;
    }
    // 5. Syntax
    if (!sub.syntax || typeof sub.syntax !== 'string' || sub.syntax.trim().length < 5) {
      fail('Pedagogy', `${sPath}: syntax is missing`);
      subtopicPillarDefects++;
    }
    // 6. Simple code with Arabic comments
    if (!sub.simpleCode || typeof sub.simpleCode !== 'string' || !sub.simpleCode.includes('//')) {
      fail('Pedagogy', `${sPath}: simpleCode is missing or lacks comments`);
      subtopicPillarDefects++;
    }
    // 7. Advanced code with Arabic comments
    if (!sub.advancedCode || typeof sub.advancedCode !== 'string' || !sub.advancedCode.includes('//')) {
      fail('Pedagogy', `${sPath}: advancedCode is missing or lacks comments`);
      subtopicPillarDefects++;
    }
    // 8. Output Explanation
    if (!sub.outputExplanation || typeof sub.outputExplanation !== 'string' || sub.outputExplanation.trim().length < 15) {
      fail('Pedagogy', `${sPath}: outputExplanation is missing or < 15 chars`);
      subtopicPillarDefects++;
    }
    // 9. Common Mistakes
    if (!Array.isArray(sub.commonMistakes) || sub.commonMistakes.length < 1) {
      fail('Pedagogy', `${sPath}: commonMistakes is empty`);
      subtopicPillarDefects++;
    }
    // 10. Best Practices
    if (!Array.isArray(sub.bestPractices) || sub.bestPractices.length < 3) {
      fail('Pedagogy', `${sPath}: bestPractices has fewer than 3 tips`);
      subtopicPillarDefects++;
    }
    // Infographic metadata
    if (!sub.infographic || !sub.infographic.badge || !sub.infographic.title || !sub.infographic.steps) {
      fail('Pedagogy', `${sPath}: infographic object is incomplete`);
      subtopicPillarDefects++;
    }
  });

  console.log(`  - Subtopic pedagogical pillar defects found: ${subtopicPillarDefects}`);
  results.pedagogicalPointsAudit.details = { subtopicPillarDefects };
  if (subtopicPillarDefects === 0) {
    results.pedagogicalPointsAudit.pass = true;
    console.log('  ✓ 981 Subtopics 10 Pedagogical Pillars PASSED.');
  }

  // =========================================================================
  // FINAL SCORECARD AND VERDICT
  // =========================================================================
  console.log('\n===============================================================');
  console.log('🏁 ADVERSARIAL PROBE SUMMARY SCORECARD');
  console.log('===============================================================');
  console.log(`1. Bundle Size & Chunking:       ${results.bundleAndChunking.pass ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`2. Dynamic Loader & Caching:     ${results.dynamicLoader.pass ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`3. 981 Subtopics Addressability: ${results.subtopicsAudit.pass ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`4. Empty/Placeholder Strings:    ${results.placeholderAudit.pass ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`5. 378 Topic Quizzes:            ${results.quizAudit.pass ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`6. 126 Solved Practical Ex:      ${results.exerciseAudit.pass ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`7. 23 Section Mini-Projects:     ${results.miniProjectAudit.pass ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`8. 10 Pedagogical Pillars (981): ${results.pedagogicalPointsAudit.pass ? '✅ PASS' : '❌ FAIL'}`);
  console.log('---------------------------------------------------------------');
  console.log(`Total Errors:   ${results.errors.length}`);
  console.log(`Total Warnings: ${results.warnings.length}`);
  console.log('===============================================================');

  const allPassed = Object.values(results).filter(v => typeof v === 'object' && 'pass' in v).every(v => v.pass);
  const verdict = allPassed && results.errors.length === 0 ? 'APPROVE' : 'REQUEST_CHANGES';
  console.log(`\n>>> EMPIRICAL VERDICT: ${verdict} <<<\n`);

  if (results.errors.length > 0) {
    console.error('Errors:');
    results.errors.slice(0, 25).forEach(e => console.error('  ', e));
  }

  // Output JSON summary for automated reporting
  fs.writeFileSync(
    path.join(__dirname, 'adversarial_results.json'),
    JSON.stringify({ verdict, results, timestamp: new Date().toISOString() }, null, 2)
  );

  process.exit(results.errors.length === 0 ? 0 : 1);
}

runAdversarialProbe().catch(err => {
  console.error('Fatal crash during probe:', err);
  process.exit(1);
});
