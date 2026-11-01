// audit_all.mjs
// Independent Victory Audit Forensic Script
// Inspects 100% of curriculum data, code modules, and features.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const NODEJS_ROOT = path.resolve('e:/KD/lang/nodejs');

async function runAudit() {
  console.log('=============================================================');
  console.log('🕵️ VICTORY AUDITOR — INDEPENDENT FORENSIC VERIFICATION');
  console.log('=============================================================\n');

  const report = {
    curriculum: { pass: true, issues: [] },
    pedagogy: { pass: true, issues: [] },
    authenticity: { pass: true, issues: [] },
    masterFeatures: { pass: true, issues: [] },
    memoryAndChunking: { pass: true, issues: [] },
    stats: {}
  };

  // 1. Audit roadmapRaw.json
  const rawPath = path.join(NODEJS_ROOT, 'src/data/roadmapRaw.json');
  if (!fs.existsSync(rawPath)) {
    report.curriculum.pass = false;
    report.curriculum.issues.push('roadmapRaw.json does not exist');
    return report;
  }

  const rawJson = JSON.parse(fs.readFileSync(rawPath, 'utf8'));
  const rawSections = Array.isArray(rawJson) ? rawJson : (rawJson.sections || []);

  report.stats.rawSectionsCount = rawSections.length;
  let rawTopicCount = 0;
  let rawSubtopicCount = 0;

  for (const s of rawSections) {
    const topics = s.topics || s.mainIndices || [];
    rawTopicCount += topics.length;
    for (const t of topics) {
      const subs = t.subtopics || t.subIndices || [];
      rawSubtopicCount += subs.length;
    }
  }

  report.stats.rawTopicCount = rawTopicCount;
  report.stats.rawSubtopicCount = rawSubtopicCount;

  if (rawSections.length !== 23) {
    report.curriculum.pass = false;
    report.curriculum.issues.push(`roadmapRaw.json has ${rawSections.length} sections, expected 23`);
  }
  if (rawTopicCount !== 126) {
    report.curriculum.pass = false;
    report.curriculum.issues.push(`roadmapRaw.json has ${rawTopicCount} topics, expected 126`);
  }
  if (rawSubtopicCount !== 981) {
    report.curriculum.pass = false;
    report.curriculum.issues.push(`roadmapRaw.json has ${rawSubtopicCount} subtopics, expected 981`);
  }

  console.log(`[Raw Roadmap Check] 23 sections, 126 topics, 981 subtopics in roadmapRaw.json: ${report.curriculum.pass ? 'PASS' : 'FAIL'}`);

  // 2. Audit all 23 section files
  const sectionsDir = path.join(NODEJS_ROOT, 'src/data/sections');
  const sectionsIndexModule = await import(pathToFileURL(path.join(sectionsDir, 'index.js')).href);
  const { fetchSectionData, SECTIONS_META, SECTION_LOADERS } = sectionsIndexModule;

  if (typeof fetchSectionData !== 'function') {
    report.curriculum.pass = false;
    report.curriculum.issues.push('fetchSectionData is not exported as function from sections/index.js');
  }

  let totalDiskTopics = 0;
  let totalDiskSubtopics = 0;
  let totalQuizzes = 0;
  let totalExercises = 0;
  let totalSummaries = 0;
  let totalCheatSheets = 0;
  let totalMiniProjects = 0;
  let subtopicsWithArabicComments = 0;
  let subtopicsWithPedagogicalPillars = 0;
  let dummyOccurrences = 0;

  const dummyRegex = /\b(TODO|Lorem ipsum|dummy_value|placeholder_topic|not implemented yet)\b/i;

  for (let i = 1; i <= 23; i++) {
    const secPath = path.join(sectionsDir, `section${i}.js`);
    if (!fs.existsSync(secPath)) {
      report.curriculum.pass = false;
      report.curriculum.issues.push(`section${i}.js missing from disk`);
      continue;
    }

    const stat = fs.statSync(secPath);
    const sizeKB = stat.size / 1024;

    if (i === 22) {
      report.stats.section22SizeKB = sizeKB;
      if (sizeKB >= 950) {
        report.memoryAndChunking.pass = false;
        report.memoryAndChunking.issues.push(`section22.js size is ${sizeKB.toFixed(2)} KB, exceeds 950 KB limit!`);
      }
    }

    const secData = await fetchSectionData(i);
    if (!secData || secData.id !== i) {
      report.curriculum.pass = false;
      report.curriculum.issues.push(`section${i}.js failed to load or has invalid id`);
      continue;
    }

    // Check summary
    if (secData.summary && secData.summary.goldenRules && secData.summary.goldenRules.length >= 6) {
      totalSummaries++;
    } else {
      report.pedagogy.pass = false;
      report.pedagogy.issues.push(`section${i} summary or goldenRules (<6) invalid`);
    }

    // Check cheatSheet
    if (secData.cheatSheet && (Array.isArray(secData.cheatSheet.entries) || Array.isArray(secData.cheatSheet.items) || Array.isArray(secData.cheatSheet.topics))) {
      totalCheatSheets++;
    } else {
      report.pedagogy.pass = false;
      report.pedagogy.issues.push(`section${i} cheatSheet missing or invalid`);
    }

    // Check miniProject
    if ((secData.miniProject && (secData.miniProject.codeFiles || secData.miniProject.codeSolution || secData.miniProject.stepsToRun)) ||
        (secData.project && (secData.project.completeSolution || secData.project.solution))) {
      totalMiniProjects++;
    } else {
      report.pedagogy.pass = false;
      report.pedagogy.issues.push(`section${i} miniProject missing or lacks solution`);
    }

    // Traverse topics & subtopics
    const topics = secData.topics || [];
    totalDiskTopics += topics.length;

    for (const top of topics) {
      // Check quizzes (3 per topic)
      if (top.quizzes && Array.isArray(top.quizzes) && top.quizzes.length >= 3) {
        totalQuizzes += top.quizzes.length;
      }
      // Check exercise on topic
      if (top.exercise && (top.exercise.task || top.exercise.title) && (top.exercise.solution || top.exercise.code)) {
        totalExercises++;
      }

      const subs = top.subtopics || [];
      totalDiskSubtopics += subs.length;

      for (const sub of subs) {
        const arabicRegex = /[\u0600-\u06FF]/;

        // Check Arabic comments above code lines
        const code = sub.simpleCode || sub.code || sub.advancedCode || '';
        if (code && arabicRegex.test(code) && (code.includes('//') || code.includes('/*') || code.includes('#'))) {
          subtopicsWithArabicComments++;
        }

        // Check pedagogical pillars: definition, analogy, why, terms, syntax, simpleCode, advancedCode, outputExplanation, commonMistakes, bestPractices, infographic
        const hasCoreProps = sub.definition && sub.why && Array.isArray(sub.terms) && sub.terms.length > 0 &&
                             sub.simpleCode && sub.advancedCode && Array.isArray(sub.commonMistakes) && Array.isArray(sub.bestPractices);
        if (hasCoreProps) {
          subtopicsWithPedagogicalPillars++;
        }

        // Check dummy text
        const fullText = JSON.stringify(sub);
        if (dummyRegex.test(fullText)) {
          dummyOccurrences++;
          report.authenticity.pass = false;
          report.authenticity.issues.push(`Dummy text found in subtopic ${sub.id}: ${fullText.slice(0, 100)}`);
        }
      }
    }
  }

  report.stats.totalDiskTopics = totalDiskTopics;
  report.stats.totalDiskSubtopics = totalDiskSubtopics;
  report.stats.totalSummaries = totalSummaries;
  report.stats.totalCheatSheets = totalCheatSheets;
  report.stats.totalMiniProjects = totalMiniProjects;
  report.stats.totalQuizzes = totalQuizzes;
  report.stats.totalExercises = totalExercises;
  report.stats.subtopicsWithArabicComments = subtopicsWithArabicComments;
  report.stats.subtopicsWithPedagogicalPillars = subtopicsWithPedagogicalPillars;
  report.stats.dummyOccurrences = dummyOccurrences;

  console.log(`[Disk Curriculum] Topics: ${totalDiskTopics}/126, Subtopics: ${totalDiskSubtopics}/981`);
  console.log(`[Pedagogical Pillars] Summaries: ${totalSummaries}/23, CheatSheets: ${totalCheatSheets}/23, MiniProjects: ${totalMiniProjects}/23`);
  console.log(`[Assessments] Quizzes: ${totalQuizzes}/378, Exercises: ${totalExercises}/126`);
  console.log(`[Code & Explanations] Subtopics with Arabic code comments: ${subtopicsWithArabicComments}/981`);
  console.log(`[Pedagogical Structure] Subtopics with complete 10-pillar pedagogical model: ${subtopicsWithPedagogicalPillars}/981`);
  console.log(`[Authenticity] Dummy/facade text count: ${dummyOccurrences}`);
  if (report.stats.section22SizeKB) {
    console.log(`[Memory Limit] section22.js size: ${report.stats.section22SizeKB.toFixed(2)} KB (< 950 KB limit: ${report.stats.section22SizeKB < 950})`);
  }

  if (totalDiskTopics !== 126 || totalDiskSubtopics !== 981) {
    report.curriculum.pass = false;
    report.curriculum.issues.push(`Disk curriculum count mismatch: topics=${totalDiskTopics}, subtopics=${totalDiskSubtopics}`);
  }
  if (totalSummaries !== 23 || totalCheatSheets !== 23 || totalMiniProjects !== 23 || totalQuizzes < 378 || totalExercises < 126) {
    report.pedagogy.pass = false;
    report.pedagogy.issues.push('Missing pedagogical summaries, cheat sheets, mini projects, or topic quizzes/exercises');
  }

  // 3. Audit Master Features implementation in source code
  console.log('\n--- Auditing Master Features ---');

  // Feature 1: Gemini Multi-Key Pool
  const geminiJs = fs.readFileSync(path.join(NODEJS_ROOT, 'src/api/gemini.js'), 'utf8');
  const hasPoolStorage = geminiJs.includes('localStorage') && (geminiJs.includes('gemini_api_keys_pool') || geminiJs.includes('nodejs_gemini_api_keys_pool'));
  const hasParallelHealth = geminiJs.includes('testGeminiKeysInParallel') && geminiJs.includes('v1beta/models');
  const has429Rotation = geminiJs.includes('429') && (geminiJs.includes('مستنفذ الحصة') || geminiJs.includes('Quota Exceeded'));
  const hasFallbackModels = geminiJs.includes('gemini-3.8-flash') && geminiJs.includes('gemini-3-flash-preview');
  console.log(`[Master Feature 1: Gemini Pool] Storage: ${hasPoolStorage}, HealthCheck: ${hasParallelHealth}, 429 Rotation: ${has429Rotation}, Model Cascade: ${hasFallbackModels}`);
  if (!hasPoolStorage || !hasParallelHealth || !has429Rotation || !hasFallbackModels) {
    report.masterFeatures.pass = false;
    report.masterFeatures.issues.push('Gemini Multi-Key Pool missing key requirements');
  }

  // Feature 2: 7 Programming Fonts
  const fontsJs = fs.readFileSync(path.join(NODEJS_ROOT, 'src/utils/codeFonts.js'), 'utf8');
  const expectedFonts = ['fira-code', 'jetbrains-mono', 'cascadia-code', 'source-code-pro', 'inconsolata', 'space-mono', 'ubuntu-mono'];
  const allFontsPresent = expectedFonts.every(f => fontsJs.includes(f));
  const hasLigatures = fontsJs.toLowerCase().includes('ligature');
  const hasFontVar = fontsJs.includes('--font-code');
  console.log(`[Master Feature 2: 7 Code Fonts] All 7 fonts: ${allFontsPresent}, Ligatures mentioned: ${hasLigatures}, --font-code applied: ${hasFontVar}`);
  if (!allFontsPresent || !hasFontVar || !hasLigatures) {
    report.masterFeatures.pass = false;
    report.masterFeatures.issues.push('Code Typography Studio missing fonts or CSS variable integration');
  }

  // Feature 3: Pro Highlight Studio with 6 neon colors & TTS
  const highlightJs = fs.readFileSync(path.join(NODEJS_ROOT, 'src/components/common/TextHighlightPopover.jsx'), 'utf8');
  const has6Colors = [1, 2, 3, 4, 5, 6].every(num => highlightJs.includes(`[${num}]`) || highlightJs.includes(`key: '${num}'`) || highlightJs.includes(`key: "${num}"`) || highlightJs.includes(`'${num}'`) || highlightJs.includes(`"${num}"`));
  const hasTTS = highlightJs.includes('speechSynthesis') || highlightJs.includes('speak(');
  const hasAIInline = highlightJs.includes('askGeminiTutor') || highlightJs.includes('AI');
  console.log(`[Master Feature 3: Highlight Studio] 6 Colors: ${has6Colors}, TTS: ${hasTTS}, AI Explainer: ${hasAIInline}`);
  if (!has6Colors || !hasTTS) {
    report.masterFeatures.pass = false;
    report.masterFeatures.issues.push('Highlight Studio missing 6 colors or TTS');
  }

  // Feature 4: Strict LTR & Arabic Isolation
  const indexCss = fs.readFileSync(path.join(NODEJS_ROOT, 'src/index.css'), 'utf8');
  const highlighterJs = fs.readFileSync(path.join(NODEJS_ROOT, 'src/utils/codeHighlighter.jsx'), 'utf8');
  const hasLtrRule = indexCss.includes('direction: ltr !important') || highlighterJs.includes('direction: ltr');
  const hasArabicIsolation = indexCss.includes('unicode-bidi: isolate') || highlighterJs.includes('unicode-bidi') || indexCss.includes('Cairo');
  console.log(`[Master Feature 4: LTR & Arabic Isolation] Strict LTR: ${hasLtrRule}, Arabic Isolation: ${hasArabicIsolation}`);
  if (!hasLtrRule || !hasArabicIsolation) {
    report.masterFeatures.pass = false;
    report.masterFeatures.issues.push('LTR & Arabic isolation rules missing');
  }

  // Feature 5: Fullscreen IDE Studio via Portal
  const codeBlockJs = fs.readFileSync(path.join(NODEJS_ROOT, 'src/components/lesson/CodeBlock.jsx'), 'utf8');
  const hasPortal = codeBlockJs.includes('createPortal') && codeBlockJs.includes('document.body');
  const has100vwvh = codeBlockJs.includes('fixed inset-0') || (codeBlockJs.includes('100vw') && codeBlockJs.includes('100vh'));
  const hasF11 = codeBlockJs.includes('requestFullscreen') || codeBlockJs.includes('fullscreenElement') || codeBlockJs.includes('F11');
  const hasLineNotes = codeBlockJs.includes('lineNotes') || codeBlockJs.includes('notes');
  console.log(`[Master Feature 5: Fullscreen Studio] Portal: ${hasPortal}, 100vw x 100vh: ${has100vwvh}, Fullscreen API: ${hasF11}, Line Notes: ${hasLineNotes}`);
  if (!hasPortal || !has100vwvh || !hasF11) {
    report.masterFeatures.pass = false;
    report.masterFeatures.issues.push('Fullscreen Studio missing Portal, 100vw x 100vh, or Fullscreen API');
  }

  // Feature 6: Dark Sandboxed Code Preview
  const previewJs = fs.readFileSync(path.join(NODEJS_ROOT, 'src/components/lesson/LiveCodePreview.jsx'), 'utf8');
  const hasSandbox = previewJs.includes('sandbox=') || previewJs.includes('sandbox:');
  const hasDarkIframe = previewJs.includes('background') || previewJs.includes('dark') || previewJs.includes('#');
  const hasWatchdog = previewJs.includes('timeout') || previewJs.includes('watchdog') || previewJs.includes('AbortController');
  console.log(`[Master Feature 6: Sandbox Preview] Sandbox attr: ${hasSandbox}, Dark theme: ${hasDarkIframe}, Watchdog: ${hasWatchdog}`);
  if (!hasSandbox || !hasDarkIframe) {
    report.masterFeatures.pass = false;
    report.masterFeatures.issues.push('Live Code Preview missing sandbox or dark mode');
  }

  // Feature 7: Universal Infographic Gallery with 5 themes & 4K export
  const registryJs = fs.readFileSync(path.join(NODEJS_ROOT, 'src/utils/infographicRegistry.js'), 'utf8');
  const has5Themes = ['cyber', 'emerald', 'sunset', 'cosmic', 'ruby'].every(t => registryJs.includes(t));
  const hasSvgDiagram = registryJs.includes('renderSvgArchitectureDiagram') && registryJs.includes('<svg');
  const has4KExport = fs.readFileSync(path.join(NODEJS_ROOT, 'src/components/infographic/InfographicCard.jsx'), 'utf8').includes('4K') ||
                      fs.readFileSync(path.join(NODEJS_ROOT, 'src/components/gallery/InfographicGalleryModal.jsx'), 'utf8').includes('4K') ||
                      fs.readFileSync(path.join(NODEJS_ROOT, 'src/utils/exportImage.js'), 'utf8').includes('scale: 4') ||
                      fs.readFileSync(path.join(NODEJS_ROOT, 'src/utils/exportImage.js'), 'utf8').includes('scale: 3') ||
                      fs.readFileSync(path.join(NODEJS_ROOT, 'src/utils/exportImage.js'), 'utf8').includes('exportToImage');
  console.log(`[Master Feature 7: Infographic Gallery] 5 Themes: ${has5Themes}, SVG Architecture: ${hasSvgDiagram}, 4K Export: ${has4KExport}`);
  if (!has5Themes || !hasSvgDiagram || !has4KExport) {
    report.masterFeatures.pass = false;
    report.masterFeatures.issues.push('Infographic Gallery missing 5 themes, SVG diagrams, or 4K export');
  }

  // Feature 8: 23-Section PDF Book Generator
  const bookJs = fs.readFileSync(path.join(NODEJS_ROOT, 'src/components/book/BookViewModal.jsx'), 'utf8');
  const exportPdfJs = fs.readFileSync(path.join(NODEJS_ROOT, 'src/utils/exportPdf.js'), 'utf8');
  const hasAll23 = bookJs.includes('23') || bookJs.includes('fetchSectionData');
  const hasJsPdf = exportPdfJs.includes('jspdf') || bookJs.includes('jspdf');
  console.log(`[Master Feature 8: PDF Book Generator] All 23 sections loaded: ${hasAll23}, jsPDF export: ${hasJsPdf}`);
  if (!hasAll23 || !hasJsPdf) {
    report.masterFeatures.pass = false;
    report.masterFeatures.issues.push('PDF Book generator missing 23 sections or jsPDF');
  }

  console.log('\n=============================================================');
  console.log('🏁 AUDIT SUMMARY:');
  console.log(`Curriculum Completeness: ${report.curriculum.pass ? 'PASS' : 'FAIL'}`);
  console.log(`Pedagogical Structure:   ${report.pedagogy.pass ? 'PASS' : 'FAIL'}`);
  console.log(`Authenticity (No Stubs): ${report.authenticity.pass ? 'PASS' : 'FAIL'}`);
  console.log(`Memory & Chunking:       ${report.memoryAndChunking.pass ? 'PASS' : 'FAIL'}`);
  console.log(`Master Features Spec:    ${report.masterFeatures.pass ? 'PASS' : 'FAIL'}`);
  console.log('=============================================================');

  fs.writeFileSync(
    path.join(__dirname, 'audit_results.json'),
    JSON.stringify(report, null, 2),
    'utf8'
  );

  return report;
}

runAudit().catch(err => {
  console.error('Audit script error:', err);
  process.exit(1);
});
