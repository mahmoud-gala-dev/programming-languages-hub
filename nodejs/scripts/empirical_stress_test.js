// scripts/empirical_stress_test.js
// Independent Empirical Stress Test & Verification Suite for Milestone 1
// Authored by Empirical Challenger 1

import { performance } from 'node:perf_hooks';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runEmpiricalStressTest() {
  console.log("================================================================================");
  console.log("🔥 EMPIRICAL STRESS TEST HARNESS — MILESTONE 1: CURRICULUM ARCHITECTURE");
  console.log("================================================================================\n");

  const results = {
    timestamp: new Date().toISOString(),
    concurrency: {},
    caching: {},
    boundaries: {},
    deepInspection: {
      totalSections: 0,
      totalMainTopics: 0,
      totalSubtopics: 0,
      subtopicsWithMissingFields: [],
      subtopicsWithoutArabicCommentsInSimpleCode: [],
      mainTopicsWithoutExactly3Quizzes: [],
      mainTopicsWithoutExercise: [],
      sectionsMissingSummary: [],
      sectionsMissingCheatSheet: [],
      sectionsMissingMiniProject: []
    },
    schemaCompatibility: {
      cheatSheetHasItems: 0,
      cheatSheetHasEntries: 0,
      sectionHasProjectKey: 0,
      sectionHasMiniProjectKey: 0
    },
    summaryMetrics: {}
  };

  // Import dynamic chunking module
  const sectionsIndex = await import('../src/data/sections/index.js');
  const { fetchSectionData, sectionCache, SECTION_LOADERS, SECTIONS_META } = sectionsIndex;

  // Clear cache before test to measure cold load
  sectionCache.clear();

  // ---------------------------------------------------------------------------
  // TEST 1: CONCURRENT FETCH OF ALL 23 SECTIONS (Cold Load)
  // ---------------------------------------------------------------------------
  console.log("▶ TEST 1: Concurrently fetching all 23 sections via Promise.all()...");
  const t0 = performance.now();
  const sectionIds = Array.from({ length: 23 }, (_, i) => i + 1);

  let loadedSections = [];
  try {
    loadedSections = await Promise.all(sectionIds.map(id => fetchSectionData(id)));
    const t1 = performance.now();
    results.concurrency = {
      status: 'PASS',
      totalDurationMs: +(t1 - t0).toFixed(2),
      loadedCount: loadedSections.length,
      averagePerSectionMs: +((t1 - t0) / 23).toFixed(2),
      allSectionsReturned: loadedSections.every((sec, idx) => sec && sec.id === (idx + 1))
    };
    console.log(`  ✓ Successfully loaded 23 sections concurrently in ${results.concurrency.totalDurationMs} ms (avg ${results.concurrency.averagePerSectionMs} ms/sec)`);
  } catch (err) {
    results.concurrency = {
      status: 'FAIL',
      error: err.message
    };
    console.error(`  ✕ Concurrent fetch failed: ${err.message}`);
  }

  // ---------------------------------------------------------------------------
  // TEST 2: CACHE HITS & RE-FETCH LATENCY (Warm Load)
  // ---------------------------------------------------------------------------
  console.log("\n▶ TEST 2: Verifying cache hits and re-fetch latency...");
  const cacheDurations = [];
  let cacheIdentitiesMatch = true;

  const tWarmStart = performance.now();
  for (let id = 1; id <= 23; id++) {
    const tStart = performance.now();
    const cachedSec = await fetchSectionData(id);
    const tEnd = performance.now();
    const duration = +(tEnd - tStart).toFixed(3);
    cacheDurations.push(duration);

    if (cachedSec !== loadedSections[id - 1]) {
      cacheIdentitiesMatch = false;
    }
  }
  const tWarmTotal = performance.now() - tWarmStart;

  results.caching = {
    status: (cacheIdentitiesMatch && tWarmTotal < 50) ? 'PASS' : 'WARN',
    totalWarmFetchMs: +tWarmTotal.toFixed(2),
    minFetchMs: Math.min(...cacheDurations),
    maxFetchMs: Math.max(...cacheDurations),
    avgFetchMs: +(cacheDurations.reduce((a, b) => a + b, 0) / 23).toFixed(3),
    cacheIdentitiesMatch,
    cacheSize: sectionCache.size
  };
  console.log(`  ✓ Cache verification: 23/23 hits, total warm time = ${results.caching.totalWarmFetchMs} ms, avg = ${results.caching.avgFetchMs} ms/sec, reference equality = ${cacheIdentitiesMatch}`);

  // ---------------------------------------------------------------------------
  // TEST 3: BOUNDARY INPUTS & ERROR HANDLING
  // ---------------------------------------------------------------------------
  console.log("\n▶ TEST 3: Testing boundary inputs and error handling...");
  const boundaryCases = [
    { label: '0 (Lower out of bounds)', input: 0, shouldReject: true },
    { label: '24 (Upper out of bounds)', input: 24, shouldReject: true },
    { label: '"invalid" (String NaN)', input: 'invalid', shouldReject: true },
    { label: '-1 (Negative number)', input: -1, shouldReject: true },
    { label: '999999 (Extreme number)', input: 999999, shouldReject: true },
    { label: 'null (Null input)', input: null, shouldReject: true },
    { label: 'undefined (Undefined input)', input: undefined, shouldReject: true },
    { label: '1.5 (Float input)', input: 1.5, shouldReject: true },
    { label: '"1" (Valid numeric string)', input: "1", shouldReject: false }
  ];

  for (const bCase of boundaryCases) {
    let threw = false;
    let thrownError = null;
    let returnedData = null;

    try {
      returnedData = await fetchSectionData(bCase.input);
    } catch (err) {
      threw = true;
      thrownError = err.message;
    }

    const behavior = threw ? `THREW_ERROR: "${thrownError}"` : `RETURNED_DATA (Section ID: ${returnedData?.id})`;
    const passed = bCase.shouldReject ? threw : (!threw && returnedData?.id === 1);

    results.boundaries[bCase.label] = {
      input: bCase.input,
      shouldReject: bCase.shouldReject,
      threw,
      thrownError,
      returnedSectionId: returnedData?.id,
      behavior,
      pass: passed
    };

    const mark = passed ? '✓' : '✕';
    console.log(`  ${mark} Input [${bCase.label}]: Expected ${bCase.shouldReject ? 'REJECT' : 'RESOLVE'} -> Actual: ${behavior}`);
  }

  // ---------------------------------------------------------------------------
  // TEST 4: DEEP INSPECTION OF ALL 23 SECTIONS, 126 TOPICS, 981 SUBTOPICS
  // ---------------------------------------------------------------------------
  console.log("\n▶ TEST 4: Deep inspection of all sections, topics, subtopics...");
  const arabicRegex = /[\u0600-\u06FF]/;

  results.deepInspection.totalSections = loadedSections.length;

  for (const section of loadedSections) {
    // 4.1 Section Summary, CheatSheet, MiniProject
    if (!section.summary || !section.summary.overview || !Array.isArray(section.summary.goldenRules) || section.summary.goldenRules.length < 6) {
      results.deepInspection.sectionsMissingSummary.push(section.id);
    }

    if (!section.cheatSheet || !section.cheatSheet.title) {
      results.deepInspection.sectionsMissingCheatSheet.push(section.id);
    } else {
      if (Array.isArray(section.cheatSheet.items)) results.schemaCompatibility.cheatSheetHasItems++;
      if (Array.isArray(section.cheatSheet.entries)) results.schemaCompatibility.cheatSheetHasEntries++;
    }

    if (section.project) results.schemaCompatibility.sectionHasProjectKey++;
    if (section.miniProject) results.schemaCompatibility.sectionHasMiniProjectKey++;

    if (!section.miniProject && !section.project) {
      results.deepInspection.sectionsMissingMiniProject.push(section.id);
    }

    // 4.2 Topics
    const topics = section.topics || [];
    for (const topic of topics) {
      results.deepInspection.totalMainTopics++;

      // Check quizzes (must be exactly 3)
      if (!Array.isArray(topic.quizzes) || topic.quizzes.length !== 3) {
        results.deepInspection.mainTopicsWithoutExactly3Quizzes.push({
          topicId: topic.id,
          actualQuizCount: topic.quizzes ? topic.quizzes.length : 0
        });
      } else {
        // Validate each quiz
        topic.quizzes.forEach((q, qIdx) => {
          if (!q.question || !Array.isArray(q.options) || q.options.length !== 4 || typeof q.correctIndex !== 'number' || !q.explanation) {
            results.deepInspection.mainTopicsWithoutExactly3Quizzes.push({
              topicId: topic.id,
              issue: `Quiz ${qIdx + 1} invalid structure`
            });
          }
        });
      }

      // Check exercise (must have task, solution)
      if (!topic.exercise || !topic.exercise.task || !topic.exercise.solution) {
        results.deepInspection.mainTopicsWithoutExercise.push(topic.id);
      }

      // 4.3 Subtopics
      const subtopics = topic.subtopics || [];
      for (const sub of subtopics) {
        results.deepInspection.totalSubtopics++;

        const requiredFields = ['definition', 'analogy', 'why', 'simpleCode', 'advancedCode'];
        const missing = [];
        for (const f of requiredFields) {
          if (!sub[f] || typeof sub[f] !== 'string' || sub[f].trim().length === 0) {
            missing.push(f);
          }
        }
        if (missing.length > 0) {
          results.deepInspection.subtopicsWithMissingFields.push({
            subtopicId: sub.id,
            missingFields: missing
          });
        }

        // Verify Arabic comments in simpleCode
        if (sub.simpleCode) {
          const hasComment = sub.simpleCode.includes('//');
          const hasArabic = arabicRegex.test(sub.simpleCode);
          if (!hasComment || !hasArabic) {
            results.deepInspection.subtopicsWithoutArabicCommentsInSimpleCode.push(sub.id);
          }
        }
      }
    }
  }

  console.log(`  - Total sections inspected: ${results.deepInspection.totalSections} (Expected: 23)`);
  console.log(`  - Total main topics inspected: ${results.deepInspection.totalMainTopics} (Expected: 126)`);
  console.log(`  - Total subtopics inspected: ${results.deepInspection.totalSubtopics} (Expected: 981)`);
  console.log(`  - Subtopics missing core strings: ${results.deepInspection.subtopicsWithMissingFields.length}`);
  console.log(`  - Subtopics missing Arabic comments in simpleCode: ${results.deepInspection.subtopicsWithoutArabicCommentsInSimpleCode.length}`);
  console.log(`  - Main topics missing exactly 3 quizzes: ${results.deepInspection.mainTopicsWithoutExactly3Quizzes.length}`);
  console.log(`  - Main topics missing exercise: ${results.deepInspection.mainTopicsWithoutExercise.length}`);
  console.log(`  - Sections missing summary: ${results.deepInspection.sectionsMissingSummary.length}`);
  console.log(`  - Sections missing cheatSheet: ${results.deepInspection.sectionsMissingCheatSheet.length}`);
  console.log(`  - Sections missing miniProject: ${results.deepInspection.sectionsMissingMiniProject.length}`);

  console.log("\n▶ SCHEMA COMPATIBILITY CHECK:");
  console.log(`  - cheatSheet has .entries: ${results.schemaCompatibility.cheatSheetHasEntries} / 23`);
  console.log(`  - cheatSheet has .items:   ${results.schemaCompatibility.cheatSheetHasItems} / 23`);
  console.log(`  - section has .miniProject:${results.schemaCompatibility.sectionHasMiniProjectKey} / 23`);
  console.log(`  - section has .project:    ${results.schemaCompatibility.sectionHasProjectKey} / 23`);

  // Write out results to JSON file
  const outPath = path.resolve(__dirname, 'empirical_stress_results.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\nDetailed empirical results exported to: ${outPath}`);

  return results;
}

runEmpiricalStressTest().catch(err => {
  console.error("FATAL ERROR IN STRESS TEST:", err);
  process.exit(1);
});
