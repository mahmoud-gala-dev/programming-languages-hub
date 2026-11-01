// scripts/challenger_stress_harness.js
// Independent Empirical Stress & Verification Harness — Milestone 1 Re-Verification (Iteration 2)
// Authored by Empirical Challenger 3

import { performance } from 'node:perf_hooks';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runChallengerStress() {
  console.log("================================================================================");
  console.log("🕵️  CHALLENGER 3 INDEPENDENT EMPIRICAL STRESS & DUAL-SCHEMA HARNESS");
  console.log("================================================================================\n");

  const sectionsIndex = await import('../src/data/sections/index.js');
  const { fetchSectionData, getSectionById, SECTIONS_MAP, sectionCache, SECTION_LOADERS, SECTIONS_META } = sectionsIndex;

  let totalAssertions = 0;
  let passedAssertions = 0;
  let failedAssertions = [];

  function assert(condition, message) {
    totalAssertions++;
    if (condition) {
      passedAssertions++;
    } else {
      failedAssertions.push(message);
      console.error(`  ❌ FAILED: ${message}`);
    }
  }

  // ---------------------------------------------------------------------------
  // 1. EXTENDED BOUNDARY & ADVERSARIAL INPUT TEST ON fetchSectionData
  // ---------------------------------------------------------------------------
  console.log("▶ [PHASE 1] Extended Boundary & Adversarial Inputs for fetchSectionData()...");
  sectionCache.clear();

  const adversarialCases = [
    // [input, shouldReject, description]
    [0, true, "Number 0 (lower out of bounds)"],
    [24, true, "Number 24 (upper out of bounds)"],
    [-1, true, "Number -1 (negative integer)"],
    [-23, true, "Number -23 (negative lower bound)"],
    [999999, true, "Number 999999 (large positive integer)"],
    [-999999, true, "Number -999999 (large negative integer)"],
    [1.5, true, "Float 1.5 (non-integer within range)"],
    [0.999, true, "Float 0.999 (just below valid range)"],
    [23.001, true, "Float 23.001 (just above valid range)"],
    [NaN, true, "NaN literal"],
    [Infinity, true, "Infinity"],
    [-Infinity, true, "-Infinity"],
    [null, true, "null"],
    [undefined, true, "undefined"],
    [true, true, "boolean true"],
    [false, true, "boolean false"],
    ["", true, "empty string"],
    ["   ", true, "whitespace string"],
    ["invalid", true, "string 'invalid'"],
    ["0", true, "string '0'"],
    ["24", true, "string '24'"],
    ["-1", true, "string '-1'"],
    ["1.5", true, "string '1.5'"],
    [{}, true, "empty object {}"],
    [{ id: 1 }, true, "object { id: 1 }"],
    [[], true, "empty array []"],
    [[1, 2], true, "multi-element array [1, 2]"],
    // Note: in JS Number([1]) coerces to 1, tested separately
    [Symbol("sec"), true, "Symbol('sec')"],
    [() => 1, true, "function returning 1"],
    // Valid cases
    [1, false, "Integer 1 (lower valid boundary)"],
    [23, false, "Integer 23 (upper valid boundary)"],
    [12, false, "Integer 12 (mid valid boundary)"],
    ["1", false, "Numeric string '1' (valid section 1)"],
    ["23", false, "Numeric string '23' (valid section 23)"],
    ["12", false, "Numeric string '12' (valid section 12)"]
  ];

  for (const [input, shouldReject, desc] of adversarialCases) {
    let threw = false;
    let thrownError = null;
    let result = null;

    try {
      result = await fetchSectionData(input);
    } catch (err) {
      threw = true;
      thrownError = err;
    }

    if (shouldReject) {
      assert(threw === true, `${desc}: Expected rejection, but resolved with id ${result?.id}`);
      if (threw) {
        // Either custom error regex or TypeError (e.g. Symbol string conversion)
        const isExpectedMessage = /invalid|not found|Must be an integer between 1 and 23/i.test(thrownError.message) ||
          /Cannot convert a Symbol value to a string/i.test(thrownError.message);
        assert(
          isExpectedMessage,
          `${desc}: Thrown error message should contain expected keywords. Got: "${thrownError.message}"`
        );
      }
    } else {
      const expectedId = Number(input);
      assert(threw === false, `${desc}: Expected resolution, but threw "${thrownError?.message}"`);
      assert(result !== null && typeof result === 'object', `${desc}: Result should be object`);
      assert(result?.id === expectedId, `${desc}: Result.id (${result?.id}) should equal expected (${expectedId})`);
    }
  }
  console.log(`  ✓ Phase 1 complete: ${passedAssertions}/${totalAssertions} assertions passed.`);

  // ---------------------------------------------------------------------------
  // 2. CONCURRENCY & RACE CONDITION STRESS TEST
  // ---------------------------------------------------------------------------
  console.log("\n▶ [PHASE 2] Concurrency & Race Condition Stress Testing...");
  sectionCache.clear();

  // Test 2A: 50 simultaneous calls to fetchSectionData(5) on cold cache
  const raceCount = 50;
  const raceTargetId = 5;
  const raceStart = performance.now();
  const raceResults = await Promise.all(
    Array.from({ length: raceCount }, () => fetchSectionData(raceTargetId))
  );
  const raceDuration = performance.now() - raceStart;

  assert(raceResults.length === raceCount, `All ${raceCount} concurrent calls resolved`);
  const firstRef = raceResults[0];
  const allRefsMatch = raceResults.every(r => r === firstRef && r.id === raceTargetId);
  assert(allRefsMatch, `All ${raceCount} concurrent calls returned the EXACT same reference instance`);
  console.log(`  ✓ 50 concurrent calls to fetchSectionData(${raceTargetId}) resolved in ${raceDuration.toFixed(2)} ms with 100% reference identity.`);

  // Test 2B: Full concurrent cold fetch across all 23 sections
  sectionCache.clear();
  const coldStart = performance.now();
  const allCold = await Promise.all(
    Array.from({ length: 23 }, (_, i) => fetchSectionData(i + 1))
  );
  const coldDuration = performance.now() - coldStart;

  assert(allCold.length === 23, "All 23 sections loaded concurrently in cold test");
  assert(allCold.every((s, i) => s && s.id === (i + 1)), "All 23 sections match index sequence 1..23");
  assert(sectionCache.size === 23, `sectionCache has exactly 23 items. Got: ${sectionCache.size}`);
  console.log(`  ✓ Concurrent cold load of all 23 sections took ${coldDuration.toFixed(2)} ms (average ${(coldDuration / 23).toFixed(2)} ms/section).`);

  // Test 2C: Full warm fetch latency & identity
  const warmStart = performance.now();
  const allWarm = await Promise.all(
    Array.from({ length: 23 }, (_, i) => fetchSectionData(i + 1))
  );
  const warmDuration = performance.now() - warmStart;

  assert(allWarm.length === 23, "All 23 sections loaded in warm test");
  assert(allWarm.every((s, i) => s === allCold[i]), "All warm instances maintain 100% reference equality with cold instances");
  console.log(`  ✓ Concurrent warm load of all 23 sections took ${warmDuration.toFixed(3)} ms (average ${(warmDuration / 23).toFixed(3)} ms/section).`);

  // ---------------------------------------------------------------------------
  // 3. DUAL-SCHEMA COMPATIBILITY AUDIT ACROSS ALL 23 SECTIONS
  // ---------------------------------------------------------------------------
  console.log("\n▶ [PHASE 3] Comprehensive Dual-Schema Verification Across All 23 Sections...");

  let totalCheatSheetItems = 0;
  let totalCheatSheetEntries = 0;
  let totalProjectSolutions = 0;
  let totalMiniProjectFiles = 0;

  for (let i = 1; i <= 23; i++) {
    const sec = allCold[i - 1];

    // Check CheatSheet Dual Schema
    assert(sec.cheatSheet != null, `Section ${i} has cheatSheet`);
    assert(Array.isArray(sec.cheatSheet.entries), `Section ${i} cheatSheet.entries is an Array`);
    assert(Array.isArray(sec.cheatSheet.items), `Section ${i} cheatSheet.items is an Array`);
    assert(sec.cheatSheet.entries.length > 0, `Section ${i} cheatSheet.entries has elements (${sec.cheatSheet.entries?.length})`);
    assert(sec.cheatSheet.items.length > 0, `Section ${i} cheatSheet.items has elements (${sec.cheatSheet.items?.length})`);
    assert(sec.cheatSheet.items.length === sec.cheatSheet.entries.length, `Section ${i} cheatSheet.items length matches .entries length`);

    totalCheatSheetItems += sec.cheatSheet.items.length;
    totalCheatSheetEntries += sec.cheatSheet.entries.length;

    // Verify item fields
    for (const item of sec.cheatSheet.items) {
      assert(typeof item.commandOrSyntax === 'string' || typeof item.command === 'string', `Section ${i} cheatSheet item has commandOrSyntax or command`);
    }

    // Check Project Dual Schema
    assert(sec.miniProject != null && typeof sec.miniProject === 'object', `Section ${i} has miniProject`);
    assert(sec.project != null && typeof sec.project === 'object', `Section ${i} has project`);

    // Verify miniProject structure
    assert(typeof sec.miniProject.id === 'string' || typeof sec.miniProject.id === 'number', `Section ${i} miniProject.id is present`);
    assert(typeof sec.miniProject.title === 'string' && sec.miniProject.title.length > 0, `Section ${i} miniProject.title is non-empty`);
    assert(Array.isArray(sec.miniProject.codeFiles) && sec.miniProject.codeFiles.length > 0, `Section ${i} miniProject.codeFiles has files`);
    assert(Array.isArray(sec.miniProject.stepsToRun) && sec.miniProject.stepsToRun.length > 0, `Section ${i} miniProject.stepsToRun has steps`);
    totalMiniProjectFiles += sec.miniProject.codeFiles.length;

    // Verify project structure (required by E2E tests F5.3 and WORKLOAD.2)
    assert(typeof sec.project.id === 'string' || typeof sec.project.id === 'number', `Section ${i} project.id is present`);
    assert(typeof sec.project.title === 'string' && sec.project.title.length > 0, `Section ${i} project.title is non-empty`);
    assert(typeof sec.project.scenario === 'string' && sec.project.scenario.length > 0, `Section ${i} project.scenario is non-empty`);
    assert(Array.isArray(sec.project.requirements) && sec.project.requirements.length > 0, `Section ${i} project.requirements is non-empty Array`);
    assert(typeof sec.project.completeSolution === 'string' && sec.project.completeSolution.length > 0, `Section ${i} project.completeSolution is non-empty string`);
    totalProjectSolutions++;
  }

  console.log(`  ✓ Dual-Schema Verified:`);
  console.log(`    - cheatSheet.items exists on 23/23 sections (Total items: ${totalCheatSheetItems})`);
  console.log(`    - cheatSheet.entries exists on 23/23 sections (Total entries: ${totalCheatSheetEntries})`);
  console.log(`    - section.project exists on 23/23 sections (Total solutions: ${totalProjectSolutions})`);
  console.log(`    - section.miniProject exists on 23/23 sections (Total files: ${totalMiniProjectFiles})`);

  // ---------------------------------------------------------------------------
  // 4. getSectionById AND SECTIONS_MAP PROXY BEHAVIOR
  // ---------------------------------------------------------------------------
  console.log("\n▶ [PHASE 4] Synchronous Fallback API Verification (getSectionById & SECTIONS_MAP)...");

  // Valid calls
  const sec1Sync = getSectionById(1);
  assert(sec1Sync != null && sec1Sync.id === 1, "getSectionById(1) returns section 1");
  const sec1Proxy = SECTIONS_MAP[1];
  assert(sec1Proxy != null && sec1Proxy.id === 1, "SECTIONS_MAP[1] returns section 1");

  // Invalid calls
  const invalidInputs = [0, 24, -1, 'invalid', null, undefined, 1.5, true];
  for (const inv of invalidInputs) {
    const resGet = getSectionById(inv);
    assert(resGet === undefined, `getSectionById(${JSON.stringify(inv)}) must return undefined. Got: ${resGet}`);
    const resProxy = SECTIONS_MAP[inv];
    assert(resProxy === undefined, `SECTIONS_MAP[${JSON.stringify(inv)}] must return undefined. Got: ${resProxy}`);
  }
  console.log(`  ✓ Phase 4 complete: getSectionById and SECTIONS_MAP safely return undefined for invalid keys without throwing or defaulting to Section 1.`);

  // ---------------------------------------------------------------------------
  // 5. SUMMARY METRICS
  // ---------------------------------------------------------------------------
  console.log("\n================================================================================");
  console.log(`TOTAL ASSERTIONS: ${totalAssertions}`);
  console.log(`PASSED: ${passedAssertions}`);
  console.log(`FAILED: ${failedAssertions.length}`);
  console.log("================================================================================");

  if (failedAssertions.length > 0) {
    console.error("\nFAILURES ENCOUNTERED:");
    failedAssertions.forEach(f => console.error(" - " + f));
    process.exit(1);
  } else {
    console.log("🎉 ALL CHALLENGER ASSERTIONS PASSED WITH ZERO FAILURES!");
  }
}

runChallengerStress().catch(err => {
  console.error("FATAL ERROR IN CHALLENGER HARNESS:", err);
  process.exit(1);
});
