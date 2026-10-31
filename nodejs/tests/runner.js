// tests/runner.js
// Central Test Orchestrator & Reporter for Node.js Educational Roadmap Platform
// Executes 4-tier opaque-box E2E test suite and outputs formatted results.

import { performance } from 'node:perf_hooks';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { setupMockEnvironment } from './test_helper.js';

// Setup Mock DOM/Browser environment globally before loading tests
setupMockEnvironment();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI Colors for formatted terminal output
const COLORS = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgDark: '\x1b[40m'
};

import { collector } from './collector.js';
export { collector };

// Central runner entry point
export async function runAllTests() {
  console.log(`\n${COLORS.bold}${COLORS.cyan}======================================================================${COLORS.reset}`);
  console.log(`${COLORS.bold}${COLORS.white} 🚀 Node.js Educational Platform — Opaque-Box E2E Test Runner${COLORS.reset}`);
  console.log(`${COLORS.dim} Platform Architecture: React 19 / Vite / Tailwind v4 / Node v${process.versions.node}${COLORS.reset}`);
  console.log(`${COLORS.cyan}======================================================================${COLORS.reset}\n`);

  const startTime = performance.now();
  let totalTests = 0;
  let totalPassed = 0;
  let totalFailed = 0;
  const failureDetails = [];
  const tierStats = {};

  for (const [tierName, suites] of Object.entries(collector.tiers)) {
    console.log(`\n${COLORS.bold}${COLORS.magenta}▶ ${tierName}${COLORS.reset}`);
    console.log(`${COLORS.dim}----------------------------------------------------------------------${COLORS.reset}`);
    
    let tierTotal = 0;
    let tierPassed = 0;
    let tierFailed = 0;

    for (const suite of suites) {
      console.log(`  ${COLORS.bold}${COLORS.yellow}• Suite:${COLORS.reset} ${suite.name} (${suite.tests.length} tests)`);
      
      for (const t of suite.tests) {
        totalTests++;
        tierTotal++;
        const testStart = performance.now();
        try {
          await t.fn();
          const duration = (performance.now() - testStart).toFixed(1);
          tierPassed++;
          totalPassed++;
          console.log(`    ${COLORS.green}✓${COLORS.reset} ${t.name} ${COLORS.dim}(${duration}ms)${COLORS.reset}`);
        } catch (err) {
          const duration = (performance.now() - testStart).toFixed(1);
          tierFailed++;
          totalFailed++;
          console.log(`    ${COLORS.red}✕${COLORS.reset} ${t.name} ${COLORS.dim}(${duration}ms)${COLORS.reset}`);
          failureDetails.push({
            tier: tierName,
            suite: suite.name,
            test: t.name,
            error: err.message || String(err),
            stack: err.stack
          });
        }
      }
    }

    tierStats[tierName] = {
      total: tierTotal,
      passed: tierPassed,
      failed: tierFailed,
      passRate: tierTotal > 0 ? ((tierPassed / tierTotal) * 100).toFixed(1) : '0.0'
    };
  }

  const totalDuration = ((performance.now() - startTime) / 1000).toFixed(2);

  // Formatted Terminal Summary Table
  console.log(`\n${COLORS.bold}${COLORS.cyan}======================================================================${COLORS.reset}`);
  console.log(`${COLORS.bold}${COLORS.white} 📊 E2E Test Suite Execution Summary${COLORS.reset}`);
  console.log(`${COLORS.cyan}======================================================================${COLORS.reset}`);

  console.log(`\n${COLORS.bold}${'Tier Name'.padEnd(38)} | ${'Total'.padStart(6)} | ${'Passed'.padStart(7)} | ${'Failed'.padStart(7)} | ${'Pass %'.padStart(7)}${COLORS.reset}`);
  console.log(`${COLORS.dim}${''.padEnd(38, '-')}-+--------+---------+---------+--------${COLORS.reset}`);

  for (const [tier, stats] of Object.entries(tierStats)) {
    const rateColor = stats.failed === 0 ? COLORS.green : (stats.passed > 0 ? COLORS.yellow : COLORS.red);
    console.log(`${tier.padEnd(38)} | ${String(stats.total).padStart(6)} | ${String(stats.passed).padStart(7)} | ${String(stats.failed).padStart(7)} | ${rateColor}${stats.passRate}%${COLORS.reset}`);
  }

  console.log(`${COLORS.dim}${''.padEnd(38, '-')}-+--------+---------+---------+--------${COLORS.reset}`);
  const overallRate = totalTests > 0 ? ((totalPassed / totalTests) * 100).toFixed(1) : '0.0';
  const overallColor = totalFailed === 0 ? COLORS.green : COLORS.yellow;
  console.log(`${COLORS.bold}${'TOTAL'.padEnd(38)} | ${String(totalTests).padStart(6)} | ${String(totalPassed).padStart(7)} | ${String(totalFailed).padStart(7)} | ${overallColor}${overallRate}%${COLORS.reset}`);

  console.log(`\n${COLORS.bold}Execution Time:${COLORS.reset} ${totalDuration}s`);
  console.log(`${COLORS.bold}Total Status:${COLORS.reset} ${totalFailed === 0 ? `${COLORS.green}100% ALL TESTS PASSING ✓${COLORS.reset}` : `${COLORS.yellow}${totalPassed} PASSED, ${totalFailed} FAILED / PENDING MILESTONES${COLORS.reset}`}`);

  if (failureDetails.length > 0) {
    console.log(`\n${COLORS.bold}${COLORS.red}📋 Failure / Pending Milestones Breakdown (${failureDetails.length}):${COLORS.reset}`);
    failureDetails.slice(0, 15).forEach((f, idx) => {
      console.log(`  ${COLORS.dim}${idx + 1}.${COLORS.reset} [${f.tier}] ${COLORS.yellow}${f.suite}${COLORS.reset} -> ${f.test}`);
      console.log(`     ${COLORS.red}${f.error}${COLORS.reset}`);
    });
    if (failureDetails.length > 15) {
      console.log(`  ${COLORS.dim}... and ${failureDetails.length - 15} more failures.${COLORS.reset}`);
    }
  }

  console.log(`\n${COLORS.cyan}======================================================================${COLORS.reset}\n`);

  return {
    totalTests,
    totalPassed,
    totalFailed,
    totalDuration,
    tierStats,
    failureDetails
  };
}

// Self-executing runner when executed via `node tests/runner.js`
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  // Dynamically load all test files
  const testFiles = [
    // Tier 1
    './tier1_features/curriculum_coverage.test.js',
    './tier1_features/gemini_pool.test.js',
    './tier1_features/code_fonts.test.js',
    './tier1_features/highlight_studio.test.js',
    './tier1_features/ltr_engine.test.js',
    './tier1_features/fullscreen_studio.test.js',
    './tier1_features/sandbox_preview.test.js',
    './tier1_features/infographic_studio.test.js',
    './tier1_features/pdf_export.test.js',
    './tier1_features/responsive_layout.test.js',
    // Tier 2
    './tier2_boundaries/boundary_inputs.test.js',
    './tier2_boundaries/rate_limit_and_timeouts.test.js',
    './tier2_boundaries/memory_and_chunking.test.js',
    './tier2_boundaries/dom_color_sanitization.test.js',
    // Tier 3
    './tier3_interactions/font_and_fullscreen.test.js',
    './tier3_interactions/highlight_and_tts.test.js',
    './tier3_interactions/theme_and_infographic_export.test.js',
    './tier3_interactions/drawer_and_navigation.test.js',
    // Tier 4
    './tier4_real_world/beginner_student_journey.test.js',
    './tier4_real_world/full_curriculum_audit.test.js',
    './tier4_real_world/pdf_book_compilation.test.js',
    './tier4_real_world/shortcuts_and_ai_study.test.js',
    // Tier 5: Adversarial Hardening
    './tier5_adversarial/whitebox_hardening_1.test.js',
    './tier5_adversarial/whitebox_hardening_2.test.js'
  ];

  try {
    for (const file of testFiles) {
      await import(file);
    }
    const results = await runAllTests();
    // Set exit code: 0 if all pass, 1 if any failure
    if (results.totalFailed > 0) {
      process.exitCode = 1;
    }
  } catch (err) {
    console.error(`\n${COLORS.red}Fatal Error in Test Runner:${COLORS.reset}`, err);
    process.exitCode = 2;
  }
}
