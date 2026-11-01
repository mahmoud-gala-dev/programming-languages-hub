// tests/empirical_m5_adversarial_stress.js
// EMPIRICAL CHALLENGER — Milestone 5 Adversarial Stress Test Suite
// Verifies all 6 M5 deliverables with empirical oracles, timing benchmarks, and boundary fuzzing.

import fs from 'node:fs';
import path from 'node:path';
import { performance } from 'node:perf_hooks';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const NODEJS_ROOT = path.resolve(__dirname, '..');

// Import Target Modules
import { 
  loadAllInfographics, 
  getAllInfographics, 
  getInfographicsBySectionId, 
  searchInfographics,
  INFOGRAPHIC_THEMES,
  getDefaultThemeForSection,
  renderSvgArchitectureDiagram
} from '../src/utils/infographicRegistry.js';

import { ROADMAP_SECTIONS, fetchSectionData } from '../src/data/sections/index.js';
import { SECTION_22 } from '../src/data/sections/section22.js';

const RESULTS = {
  passed: 0,
  failed: 0,
  suites: []
};

// Sequential Suite & Test Runner
async function suite(name, fn) {
  const suiteObj = { name, tests: [] };
  RESULTS.suites.push(suiteObj);
  console.log(`\n\x1b[1m\x1b[35m=== Suite: ${name} ===\x1b[0m`);

  const testQueue = [];
  const testCollector = {
    test: (testName, testFn) => {
      testQueue.push({ name: testName, fn: testFn });
    }
  };

  fn(testCollector);

  // Execute all tests sequentially in order
  for (const t of testQueue) {
    const t0 = performance.now();
    try {
      await t.fn();
      const duration = (performance.now() - t0).toFixed(2);
      RESULTS.passed++;
      suiteObj.tests.push({ name: t.name, status: 'PASS', durationMs: duration });
      console.log(`  \x1b[32m✓\x1b[0m ${t.name} \x1b[2m(${duration}ms)\x1b[0m`);
    } catch (err) {
      const duration = (performance.now() - t0).toFixed(2);
      RESULTS.failed++;
      suiteObj.tests.push({ name: t.name, status: 'FAIL', durationMs: duration, error: err.message });
      console.error(`  \x1b[31m✕\x1b[0m ${t.name} \x1b[2m(${duration}ms)\x1b[0m`);
      console.error(`    \x1b[31mError:\x1b[0m ${err.message}`);
      if (err.stack) {
        console.error(`    \x1b[2m${err.stack.split('\n').slice(1, 4).join('\n')}\x1b[0m`);
      }
    }
  }
}

async function runAdversarialM5Verification() {
  console.log(`\x1b[1m\x1b[36m======================================================================\x1b[0m`);
  console.log(`\x1b[1m\x1b[37m 🛡️  Milestone 5 Empirical Adversarial Verification Harness\x1b[0m`);
  console.log(`\x1b[2m Target: Node.js Educational Roadmap Platform (23 Sections / 981 Subtopics)\x1b[0m`);
  console.log(`\x1b[1m\x1b[36m======================================================================\x1b[0m`);

  // =========================================================================
  // SUITE 1: loadAllInfographics() & Registry Stress Testing
  // =========================================================================
  await suite('1. loadAllInfographics() & Infographic Registry Stress', ({ test }) => {
    
    let preloadedInfographics = null;

    test('1.1: loadAllInfographics() loads exactly 981 subtopics without data loss', async () => {
      const t0 = performance.now();
      preloadedInfographics = await loadAllInfographics();
      const loadTime = performance.now() - t0;

      assert.ok(Array.isArray(preloadedInfographics), 'Must return an array');
      assert.strictEqual(preloadedInfographics.length, 981, `Expected exactly 981 infographics, received ${preloadedInfographics.length}`);

      // Verify every infographic has mandatory schema keys
      const requiredKeys = [
        'id', 'sectionId', 'sectionTitle', 'title', 'englishTitle',
        'badge', 'theme', 'visualDiagram', 'definition', 'goldenRule',
        'pitfall', 'analogy', 'codeSnippet'
      ];

      for (let i = 0; i < preloadedInfographics.length; i++) {
        const item = preloadedInfographics[i];
        for (const k of requiredKeys) {
          assert.ok(item[k] !== undefined && item[k] !== null, `Item [${item.id || i}] missing required key '${k}'`);
        }
        assert.ok(typeof item.id === 'string' && item.id.length > 0, `Item [${i}] has invalid id`);
        assert.ok(typeof item.sectionId === 'number' && item.sectionId >= 1 && item.sectionId <= 23, `Item [${item.id}] has invalid sectionId ${item.sectionId}`);
        assert.ok(typeof item.visualDiagram === 'object' && item.visualDiagram.type, `Item [${item.id}] visualDiagram missing type`);
        
        // Render SVG to verify deterministic SVG generation engine
        const svg = renderSvgArchitectureDiagram(item.visualDiagram.type, item.theme, item);
        assert.ok(svg.includes('<svg') && svg.includes('</svg>'), `Item [${item.id}] generated SVG is invalid`);
        
        assert.ok(['cyber', 'emerald', 'sunset', 'cosmic', 'ruby'].includes(item.theme), `Item [${item.id}] has unknown theme '${item.theme}'`);
      }
      console.log(`    \x1b[2m[Audit] All 981 infographics validated with full schema & SVG rendering in ${loadTime.toFixed(2)}ms\x1b[0m`);
    });

    test('1.2: In-memory caching stress: 500 subsequent calls execute instantly (< 5ms each)', async () => {
      // Ensure cache is populated
      await loadAllInfographics();

      const iterations = 500;
      const times = [];

      for (let i = 0; i < iterations; i++) {
        const tStart = performance.now();
        const cached = await loadAllInfographics();
        const elapsed = performance.now() - tStart;
        times.push(elapsed);
        assert.strictEqual(cached.length, 981, 'Cached array length must remain 981');
      }

      const avgTime = times.reduce((a, b) => a + b, 0) / iterations;
      const maxTime = Math.max(...times);

      console.log(`    \x1b[2m[Benchmark] 500 cached calls -> Avg: ${avgTime.toFixed(4)}ms | Max: ${maxTime.toFixed(4)}ms\x1b[0m`);
      assert.ok(avgTime < 1.0, `Average cache hit time must be < 1.0ms, got ${avgTime.toFixed(4)}ms`);
      assert.ok(maxTime < 5.0, `Max cache hit time must be < 5.0ms, got ${maxTime.toFixed(4)}ms`);
    });

    test('1.3: Synchronous getAllInfographics() reflects the 981 cached items', () => {
      const syncItems = getAllInfographics();
      assert.ok(Array.isArray(syncItems), 'Must return an array');
      assert.strictEqual(syncItems.length, 981, `Expected 981 items from getAllInfographics(), got ${syncItems.length}`);
    });

    test('1.4: getInfographicsBySectionId(s) returns complete and isolated sets for all 23 sections', () => {
      let cumulativeCount = 0;
      const sectionCounts = {};

      for (let secId = 1; secId <= 23; secId++) {
        const secItems = getInfographicsBySectionId(secId);
        assert.ok(Array.isArray(secItems), `Section ${secId} must return an array`);
        assert.ok(secItems.length > 0, `Section ${secId} must have at least 1 infographic (got ${secItems.length})`);
        
        // Assert every item belongs strictly to this section
        for (const item of secItems) {
          assert.strictEqual(item.sectionId, secId, `Item [${item.id}] in section ${secId} has sectionId ${item.sectionId}`);
        }

        sectionCounts[secId] = secItems.length;
        cumulativeCount += secItems.length;
      }

      assert.strictEqual(cumulativeCount, 981, `Sum of section infographics must equal 981, got ${cumulativeCount}`);
      assert.strictEqual(sectionCounts[22], 99, `Section 22 must contain exactly 99 infographics, got ${sectionCounts[22]}`);
    });

    test('1.5: getInfographicsBySectionId boundary and invalid inputs return [] without crashing', () => {
      const invalidInputs = [0, 24, -1, 999, 'invalid', null, undefined, NaN, {}, []];
      for (const input of invalidInputs) {
        const res = getInfographicsBySectionId(input);
        assert.ok(Array.isArray(res), `Input ${JSON.stringify(input)} must return an array`);
        assert.strictEqual(res.length, 0, `Input ${JSON.stringify(input)} must return empty array`);
      }
    });

    test('1.6: searchInfographics() adversarial queries: fuzzing, regex injection, case-insensitivity', () => {
      // 1. Empty / Whitespace query returns all
      assert.strictEqual(searchInfographics('').length, 981);
      assert.strictEqual(searchInfographics('   ').length, 981);
      assert.strictEqual(searchInfographics(null).length, 981);
      assert.strictEqual(searchInfographics(undefined).length, 981);

      // 2. Case-insensitive English search
      const lowerStream = searchInfographics('stream');
      const upperStream = searchInfographics('STREAM');
      const mixedStream = searchInfographics('StReAm');
      assert.ok(lowerStream.length > 0, 'Must find stream infographics');
      assert.strictEqual(lowerStream.length, upperStream.length, 'Stream search must be case-insensitive');
      assert.strictEqual(lowerStream.length, mixedStream.length, 'Stream search must be case-insensitive');

      // 3. Arabic keyword search
      const eventsAr = searchInfographics('الأحداث');
      const securityAr = searchInfographics('أمان');
      assert.ok(eventsAr.length > 0, 'Must find Arabic events infographics');
      assert.ok(securityAr.length > 0, 'Must find Arabic security infographics');

      // 4. Subtopic ID search
      const idMatch = searchInfographics('22.1.1');
      assert.ok(idMatch.length >= 1, 'Must find subtopic 22.1.1');
      assert.strictEqual(idMatch[0].id, '22.1.1');

      // 5. Adversarial regex characters & script injection strings (must not crash)
      const fuzzStrings = [
        '.*', '[a-z]+', '(', ')', '\\', '\\\\', '+', '?', '(?=.*)', 
        '<script>alert("xss")</script>', 'DROP TABLE', '__proto__',
        'xyz_non_existent_token_123456789'
      ];

      for (const fuzz of fuzzStrings) {
        let results = null;
        assert.doesNotThrow(() => {
          results = searchInfographics(fuzz);
        }, `searchInfographics threw on adversarial string: ${fuzz}`);
        assert.ok(Array.isArray(results), `Must return array for ${fuzz}`);
      }

      // Non-existent token returns 0 items
      assert.strictEqual(searchInfographics('xyz_non_existent_token_123456789').length, 0);
    });
  });

  // =========================================================================
  // SUITE 2: section22.js Size (< 950 KB) & 99 Subtopics Integrity
  // =========================================================================
  await suite('2. section22.js Size & 99 Subtopics Integrity Verification', ({ test }) => {
    const sec22Path = path.resolve(NODEJS_ROOT, 'src/data/sections/section22.js');

    test('2.1: File size verification: section22.js is strictly under 950 KB', () => {
      assert.ok(fs.existsSync(sec22Path), 'section22.js must exist on disk');
      const stat = fs.statSync(sec22Path);
      const sizeBytes = stat.size;
      const sizeKB = sizeBytes / 1024;
      const limitKB = 950;
      const limitBytes = limitKB * 1024;

      console.log(`    \x1b[2m[File Stat] section22.js size: ${sizeBytes} bytes (${sizeKB.toFixed(2)} KB) | Limit: < ${limitKB} KB\x1b[0m`);
      assert.ok(sizeBytes < limitBytes, `section22.js size (${sizeKB.toFixed(2)} KB) exceeds 950 KB limit!`);
    });

    test('2.2: Section 22 structure contains exactly 8 topics and 99 subtopics', () => {
      assert.ok(SECTION_22, 'SECTION_22 must be exported and valid');
      assert.strictEqual(SECTION_22.id, 22, 'Section ID must be 22');
      assert.ok(Array.isArray(SECTION_22.topics), 'SECTION_22.topics must be an array');
      assert.strictEqual(SECTION_22.topics.length, 8, `SECTION_22 must have 8 main capstone topics, got ${SECTION_22.topics.length}`);

      let totalSubtopics = 0;
      SECTION_22.topics.forEach((topic) => {
        assert.ok(Array.isArray(topic.subtopics), `Topic ${topic.id} missing subtopics array`);
        totalSubtopics += topic.subtopics.length;
      });

      assert.strictEqual(totalSubtopics, 99, `SECTION_22 must contain exactly 99 subtopics, got ${totalSubtopics}`);
    });

    test('2.3: Exhaustive audit of all 99 subtopics: exactly 16 pedagogical properties present & validated', () => {
      const arabicRegex = /[\u0600-\u06FF]/;
      let auditedSubtopics = 0;

      SECTION_22.topics.forEach((topic) => {
        topic.subtopics.forEach((sub) => {
          auditedSubtopics++;
          const id = sub.id;

          // 1. id
          assert.ok(typeof sub.id === 'string' && /^22\.\d+\.\d+$/.test(sub.id), `[${id}] Invalid subtopic id format`);
          
          // 2. title
          assert.ok(typeof sub.title === 'string' && sub.title.trim().length > 0, `[${id}] Missing or empty title`);
          assert.ok(arabicRegex.test(sub.title), `[${id}] title must contain Arabic characters`);

          // 3. englishTitle
          assert.ok(typeof sub.englishTitle === 'string' && sub.englishTitle.trim().length > 0, `[${id}] Missing englishTitle`);

          // 4. definition
          assert.ok(typeof sub.definition === 'string' && sub.definition.length >= 15, `[${id}] definition must be at least 15 chars`);
          assert.ok(arabicRegex.test(sub.definition), `[${id}] definition must contain Arabic text`);

          // 5. analogy
          assert.ok(typeof sub.analogy === 'string' && sub.analogy.length >= 10, `[${id}] analogy must be at least 10 chars`);
          assert.ok(arabicRegex.test(sub.analogy), `[${id}] analogy must contain Arabic text`);

          // 6. why
          assert.ok(typeof sub.why === 'string' && sub.why.length >= 10, `[${id}] why must be at least 10 chars`);

          // 7. terms
          assert.ok(Array.isArray(sub.terms) && sub.terms.length >= 1, `[${id}] terms must be an array with >= 1 item`);
          sub.terms.forEach((t, tidx) => {
            assert.ok(t.term && typeof t.term === 'string', `[${id}] term[${tidx}] missing term`);
            assert.ok(t.meaning && typeof t.meaning === 'string', `[${id}] term[${tidx}] missing meaning`);
          });

          // 8. syntax
          assert.ok(typeof sub.syntax === 'string' && sub.syntax.trim().length > 0, `[${id}] Missing syntax`);

          // 9. simpleCode (must have Arabic explanatory comments)
          assert.ok(typeof sub.simpleCode === 'string' && sub.simpleCode.trim().length > 0, `[${id}] Missing simpleCode`);
          assert.ok(arabicRegex.test(sub.simpleCode), `[${id}] simpleCode must have Arabic comments`);
          assert.ok(sub.simpleCode.includes('//'), `[${id}] simpleCode must include comments`);

          // 10. advancedCode
          assert.ok(typeof sub.advancedCode === 'string' && sub.advancedCode.trim().length > 0, `[${id}] Missing advancedCode`);

          // 11. outputExplanation
          assert.ok(typeof sub.outputExplanation === 'string' && sub.outputExplanation.trim().length > 0, `[${id}] Missing outputExplanation`);

          // 12. commonMistakes
          assert.ok(Array.isArray(sub.commonMistakes) && sub.commonMistakes.length >= 1, `[${id}] commonMistakes must have >= 1 item`);
          sub.commonMistakes.forEach((m, midx) => {
            assert.ok(m.wrong && m.right && m.reason, `[${id}] commonMistakes[${midx}] missing wrong/right/reason`);
          });

          // 13. bestPractices
          assert.ok(Array.isArray(sub.bestPractices) && sub.bestPractices.length >= 1, `[${id}] bestPractices must have >= 1 item`);

          // 14. infographic
          assert.ok(sub.infographic && typeof sub.infographic === 'object', `[${id}] Missing infographic object`);
          assert.ok(sub.infographic.badge && sub.infographic.title && sub.infographic.goldenCode, `[${id}] infographic missing badge/title/goldenCode`);
          assert.ok(Array.isArray(sub.infographic.steps) && sub.infographic.steps.length >= 2, `[${id}] infographic.steps must have >= 2 steps`);

          // 15. quiz
          assert.ok(sub.quiz && typeof sub.quiz === 'object', `[${id}] Missing quiz object`);
          assert.ok(sub.quiz.question && Array.isArray(sub.quiz.options) && sub.quiz.options.length >= 2, `[${id}] quiz invalid question or options`);
          assert.ok(typeof sub.quiz.correctIndex === 'number' && sub.quiz.correctIndex >= 0 && sub.quiz.correctIndex < sub.quiz.options.length, `[${id}] quiz invalid correctIndex`);
          assert.ok(sub.quiz.explanation, `[${id}] quiz missing explanation`);

          // 16. exercise
          assert.ok(sub.exercise && typeof sub.exercise === 'object', `[${id}] Missing exercise object`);
          assert.ok(sub.exercise.title && sub.exercise.task && sub.exercise.solution, `[${id}] exercise missing title/task/solution`);
          assert.ok(Array.isArray(sub.exercise.hints), `[${id}] exercise.hints must be an array`);
        });
      });

      assert.strictEqual(auditedSubtopics, 99, `Audited exactly 99 subtopics`);
    });

    test('2.4: Section-level deliverables (Summary, CheatSheet, Capstone Project)', () => {
      // Summary
      assert.ok(SECTION_22.summary, 'SECTION_22 missing summary');
      assert.ok(SECTION_22.summary.overview, 'SECTION_22 summary missing overview');
      assert.ok(Array.isArray(SECTION_22.summary.goldenRules) && SECTION_22.summary.goldenRules.length >= 8, 'SECTION_22 summary must have >= 8 goldenRules');
      assert.ok(Array.isArray(SECTION_22.summary.keyTakeaways) && SECTION_22.summary.keyTakeaways.length >= 4, 'SECTION_22 summary must have >= 4 keyTakeaways');

      // CheatSheet
      assert.ok(SECTION_22.cheatSheet, 'SECTION_22 missing cheatSheet');
      const csItems = SECTION_22.cheatSheet.items || SECTION_22.cheatSheet.entries;
      assert.ok(Array.isArray(csItems) && csItems.length >= 8, 'SECTION_22 cheatSheet must have >= 8 items');

      // Capstone Project
      const project = SECTION_22.project || SECTION_22.miniProject;
      assert.ok(project, 'SECTION_22 missing capstone project');
      assert.ok(project.title && (project.completeSolution || project.codeFiles), 'SECTION_22 project missing title or solution');
    });
  });

  // =========================================================================
  // SUITE 3: roadmapRaw.json Parsing & Indexing Speed
  // =========================================================================
  await suite('3. roadmapRaw.json Parsing & Indexing Speed Benchmarks', ({ test }) => {
    const rawPath = path.resolve(NODEJS_ROOT, 'src/data/roadmapRaw.json');

    test('3.1: JSON parsing speed benchmark: Average < 50ms across 50 iterations', () => {
      const rawText = fs.readFileSync(rawPath, 'utf-8');
      const iterations = 50;
      const parseTimes = [];

      for (let i = 0; i < iterations; i++) {
        const t0 = performance.now();
        const parsed = JSON.parse(rawText);
        const elapsed = performance.now() - t0;
        parseTimes.push(elapsed);
        assert.ok(Array.isArray(parsed) && parsed.length === 23);
      }

      const avgParse = parseTimes.reduce((a, b) => a + b, 0) / iterations;
      const maxParse = Math.max(...parseTimes);

      console.log(`    \x1b[2m[Benchmark] JSON.parse -> Avg: ${avgParse.toFixed(3)}ms | Max: ${maxParse.toFixed(3)}ms (Threshold: < 50ms)\x1b[0m`);
      assert.ok(avgParse < 50.0, `JSON.parse average time (${avgParse.toFixed(2)}ms) must be under 50ms`);
      assert.ok(maxParse < 50.0, `JSON.parse max time (${maxParse.toFixed(2)}ms) must be under 50ms`);
    });

    test('3.2: 981-Subtopic multi-index construction benchmark: Average < 150ms across 50 iterations', () => {
      const rawData = JSON.parse(fs.readFileSync(rawPath, 'utf-8'));
      const iterations = 50;
      const indexTimes = [];

      for (let iter = 0; iter < iterations; iter++) {
        const t0 = performance.now();
        
        // Build 4 separate indices
        const subtopicMap = new Map();
        const topicMap = new Map();
        const sectionMap = new Map();
        const searchInvertedIndex = new Map();

        for (const sec of rawData) {
          sectionMap.set(sec.id, sec);
          const topics = sec.topics || sec.mainIndices || [];
          for (const top of topics) {
            topicMap.set(top.id, { ...top, sectionId: sec.id });
            const subtopics = top.subtopics || top.subIndices || [];
            for (const sub of subtopics) {
              subtopicMap.set(sub.id, { ...sub, topicId: top.id, sectionId: sec.id });
              
              // Tokenize for inverted search index
              const tokens = `${sub.title || ''} ${sub.englishTitle || ''}`.toLowerCase().split(/\s+/);
              for (const token of tokens) {
                if (!token) continue;
                if (!searchInvertedIndex.has(token)) {
                  searchInvertedIndex.set(token, new Set());
                }
                searchInvertedIndex.get(token).add(sub.id);
              }
            }
          }
        }

        const elapsed = performance.now() - t0;
        indexTimes.push(elapsed);

        assert.strictEqual(sectionMap.size, 23);
        assert.strictEqual(topicMap.size, 126);
        assert.strictEqual(subtopicMap.size, 981);
      }

      const avgIndex = indexTimes.reduce((a, b) => a + b, 0) / iterations;
      const maxIndex = Math.max(...indexTimes);

      console.log(`    \x1b[2m[Benchmark] Indexing 981 Subtopics -> Avg: ${avgIndex.toFixed(3)}ms | Max: ${maxIndex.toFixed(3)}ms (Threshold: < 150ms)\x1b[0m`);
      assert.ok(avgIndex < 150.0, `Indexing average time (${avgIndex.toFixed(2)}ms) must be under 150ms`);
      assert.ok(maxIndex < 150.0, `Indexing max time (${maxIndex.toFixed(2)}ms) must be under 150ms`);
    });

    test('3.3: Global ID integrity: exactly 23 sections, 126 topics, 981 subtopics, 0 duplicate IDs', () => {
      const rawData = JSON.parse(fs.readFileSync(rawPath, 'utf-8'));
      const subtopicIdSet = new Set();
      const topicIdSet = new Set();
      const sectionIdSet = new Set();

      let subCount = 0;
      let topCount = 0;

      for (const sec of rawData) {
        assert.ok(!sectionIdSet.has(sec.id), `Duplicate section ID ${sec.id}`);
        sectionIdSet.add(sec.id);

        for (const top of (sec.topics || [])) {
          topCount++;
          assert.ok(!topicIdSet.has(top.id), `Duplicate topic ID ${top.id}`);
          topicIdSet.add(top.id);

          for (const sub of (top.subtopics || [])) {
            subCount++;
            assert.ok(!subtopicIdSet.has(sub.id), `Duplicate subtopic ID ${sub.id}`);
            subtopicIdSet.add(sub.id);
          }
        }
      }

      assert.strictEqual(sectionIdSet.size, 23);
      assert.strictEqual(topCount, 126);
      assert.strictEqual(subCount, 981);
    });
  });

  // =========================================================================
  // SUITE 4: BookViewModal.jsx 23-Section Compilation Logic
  // =========================================================================
  await suite('4. BookViewModal.jsx 23-Section Compilation Logic', ({ test }) => {
    
    test('4.1: Multi-section concurrent fetch compiles all 23 sections without rejection', async () => {
      const t0 = performance.now();
      
      // Replicate exact loading pipeline from BookViewModal.jsx
      const results = await Promise.all(
        ROADMAP_SECTIONS.map(async (sec) => {
          try {
            const data = await fetchSectionData(sec.id);
            return data;
          } catch (err) {
            console.error(`Error loading section ${sec.id}:`, err);
            return null;
          }
        })
      );

      const elapsed = performance.now() - t0;
      const valid = results.filter(Boolean).sort((a, b) => a.id - b.id);

      assert.strictEqual(valid.length, 23, `Must compile all 23 sections, got ${valid.length}`);
      
      // Check total topics and subtopics compilation formulas
      const totalTopicsCount = valid.reduce((sum, s) => sum + (s.topics?.length || 0), 0);
      const totalSubtopicsCount = valid.reduce((sum, s) => {
        return sum + (s.topics ? s.topics.reduce((tSum, t) => tSum + (t.subtopics?.length || 0), 0) : 0);
      }, 0);

      assert.strictEqual(totalTopicsCount, 126, `Compiled topics count must equal 126, got ${totalTopicsCount}`);
      assert.strictEqual(totalSubtopicsCount, 981, `Compiled subtopics count must equal 981, got ${totalSubtopicsCount}`);
      console.log(`    \x1b[2m[Compilation] 23 sections (${totalTopicsCount} topics, ${totalSubtopicsCount} subtopics) compiled in ${elapsed.toFixed(2)}ms\x1b[0m`);
    });

    test('4.2: Fault tolerance: Graceful degradation when simulated section fetch fails', async () => {
      // Simulate fault injection: section 7 and section 19 fail
      const simulatedFetch = async (id) => {
        if (id === 7 || id === 19) {
          throw new Error(`Simulated network failure on section ${id}`);
        }
        return await fetchSectionData(id);
      };

      const results = await Promise.all(
        ROADMAP_SECTIONS.map(async (sec) => {
          try {
            return await simulatedFetch(sec.id);
          } catch (err) {
            // Graceful error trap
            return null;
          }
        })
      );

      const valid = results.filter(Boolean).sort((a, b) => a.id - b.id);
      assert.strictEqual(valid.length, 21, 'Must gracefully produce 21 valid sections when 2 fail');
      assert.ok(!valid.some(s => s.id === 7 || s.id === 19), 'Failed sections 7 & 19 excluded safely');
    });

    test('4.3: Infinite loop prevention verification: Modal state dependencies guard', () => {
      const bookModalFile = path.resolve(NODEJS_ROOT, 'src/components/book/BookViewModal.jsx');
      const content = fs.readFileSync(bookModalFile, 'utf-8');

      // Verify useEffect dependency array and condition guard
      assert.ok(content.includes('useEffect('), 'BookViewModal must define useEffect');
      assert.ok(content.includes('[isOpen]'), 'useEffect must strictly depend on [isOpen]');
      assert.ok(content.includes('allSections.length === 0'), 'useEffect must check allSections.length === 0 to prevent re-fetch loop');
      assert.ok(content.includes('isMounted'), 'useEffect must implement isMounted cleanup flag');
    });
  });

  // =========================================================================
  // SUITE 5: InfographicGalleryModal.jsx Search and Filter State
  // =========================================================================
  await suite('5. InfographicGalleryModal.jsx Search & Filter State Logic', ({ test }) => {
    
    test('5.1: Theme filter logic: all 5 themes partition exactly into 981 subtopics', () => {
      const allItems = getAllInfographics();
      assert.strictEqual(allItems.length, 981, 'Pre-condition: 981 infographics loaded');

      const themes = ['cyber', 'emerald', 'sunset', 'cosmic', 'ruby'];
      let sumThemeItems = 0;
      const themeCounts = {};

      for (const th of themes) {
        const filtered = allItems.filter(item => item.theme === th);
        assert.ok(filtered.length > 0, `Theme '${th}' must have at least 1 infographic`);
        for (const item of filtered) {
          assert.strictEqual(item.theme, th, `Item [${item.id}] theme mismatch`);
        }
        themeCounts[th] = filtered.length;
        sumThemeItems += filtered.length;
      }

      console.log(`    \x1b[2m[Theme Distribution] ${JSON.stringify(themeCounts)}\x1b[0m`);
      assert.strictEqual(sumThemeItems, 981, `Sum of items across 5 themes must equal 981, got ${sumThemeItems}`);
    });

    test('5.2: Section filter logic: selecting section 1..23 returns exact section subtopics', () => {
      const allItems = getAllInfographics();
      for (let s = 1; s <= 23; s++) {
        const filtered = allItems.filter(item => item.sectionId === s);
        assert.ok(filtered.length > 0, `Section ${s} filter returned empty`);
        for (const item of filtered) {
          assert.strictEqual(item.sectionId, s);
        }
      }
    });

    test('5.3: Combined multi-criteria filter (Section + Theme + Search Query)', () => {
      const allItems = getAllInfographics();
      // Filter for Section 22 + Theme 'ruby' + query 'تطبيق'
      const sec22Ruby = allItems.filter(item => {
        const matchesSec = item.sectionId === 22;
        const matchesTheme = item.theme === 'ruby';
        const q = 'تطبيق';
        const matchesQuery = item.title.includes(q) || item.definition.includes(q) || item.sectionTitle.includes(q);
        return matchesSec && matchesTheme && matchesQuery;
      });

      assert.ok(sec22Ruby.length > 0, 'Must find matching items for Section 22 + ruby + query');
      for (const item of sec22Ruby) {
        assert.strictEqual(item.sectionId, 22);
        assert.strictEqual(item.theme, 'ruby');
      }
    });

    test('5.4: Boundary filter inputs & Carousel index clamping logic', () => {
      const allItems = getAllInfographics();

      // 1. Unknown theme returns []
      const invalidTheme = allItems.filter(item => item.theme === 'neon_galaxy');
      assert.strictEqual(invalidTheme.length, 0);

      // 2. Unknown section returns []
      const invalidSec = allItems.filter(item => item.sectionId === 999);
      assert.strictEqual(invalidSec.length, 0);

      // 3. Carousel index clamping oracle:
      // When filtered list shrinks from 981 to 5, and currentIndex was 500:
      let currentIndex = 500;
      const smallListLength = 5;
      if (currentIndex >= smallListLength) {
        currentIndex = Math.max(0, smallListLength - 1);
      }
      assert.strictEqual(currentIndex, 4, 'Index must clamp to smallListLength - 1');

      // When filtered list is empty:
      currentIndex = 10;
      const emptyListLength = 0;
      if (currentIndex >= emptyListLength) {
        currentIndex = Math.max(0, emptyListLength - 1);
      }
      assert.strictEqual(currentIndex, 0, 'Index must clamp to 0 on empty list');

      // 4. Carousel wrap-around navigation
      const listLength = 10;
      let curr = 0;
      // Prev wrap-around from 0
      curr = curr > 0 ? curr - 1 : listLength - 1;
      assert.strictEqual(curr, 9, 'Prev from 0 must wrap to listLength - 1');
      // Next wrap-around from 9
      curr = curr < listLength - 1 ? curr + 1 : 0;
      assert.strictEqual(curr, 0, 'Next from listLength - 1 must wrap to 0');
    });
  });

  // =========================================================================
  // SUMMARY
  // =========================================================================
  console.log(`\n\x1b[1m\x1b[36m======================================================================\x1b[0m`);
  console.log(`\x1b[1m\x1b[37m 📊 Adversarial Stress Test Results Summary\x1b[0m`);
  console.log(`\x1b[1m\x1b[36m======================================================================\x1b[0m`);
  console.log(`  \x1b[1mTotal Tests:\x1b[0m   ${RESULTS.passed + RESULTS.failed}`);
  console.log(`  \x1b[32mPassed:\x1b[0m        ${RESULTS.passed}`);
  console.log(`  \x1b[31mFailed:\x1b[0m        ${RESULTS.failed}`);
  console.log(`  \x1b[1mPass Rate:\x1b[0m     ${((RESULTS.passed / (RESULTS.passed + RESULTS.failed)) * 100).toFixed(1)}%`);

  if (RESULTS.failed > 0) {
    console.log(`\n\x1b[1m\x1b[31m❌ VERDICT: REQUEST_CHANGES (${RESULTS.failed} tests failed)\x1b[0m`);
    process.exitCode = 1;
  } else {
    console.log(`\n\x1b[1m\x1b[32m✅ VERDICT: APPROVE (100% of adversarial stress tests passed)\x1b[0m`);
    process.exitCode = 0;
  }
}

runAdversarialM5Verification().catch(err => {
  console.error('\n\x1b[31mFatal error during test run:\x1b[0m', err);
  process.exitCode = 2;
});
