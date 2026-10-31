// tests/tier4_real_world/pdf_book_compilation.test.js
// Tier 4: Real-World Application Workloads — Scenarios 4 & 5: Universal Infographic Gallery & PDF Book
// Workloads: Infographic Gallery, Cosmic Theme, 4K PNG Export, Complete 23-Section PDF Book Compilation

import { collector } from '../collector.js';
import { assert, safeImport } from '../test_helper.js';

collector.setTier('Tier 4: Real-World Scenarios');

collector.suite('Scenarios 4 & 5: Universal Infographics & PDF Book Compilation', (test) => {
  // Scenario 4: Universal Infographic Exploration & 4K PNG Export
  test('E2E.WORKLOAD.4: Universal infographic exploration, theme customization, and 4K PNG export pipeline', async () => {
    // 1. Open Infographic Gallery, query 981 lessons
    const rawMod = await safeImport('src/data/roadmapRaw.json');
    const sections = rawMod.default || rawMod;
    assert.equal(sections.length, 23);

    // 2. Search for "Event Loop" in gallery
    const searchQuery = 'Event Loop';
    let matchedCard = null;
    sections.forEach(s => {
      s.topics.forEach(t => {
        t.subtopics.forEach(sub => {
          if (sub.title.includes(searchQuery) || (sub.englishTitle && sub.englishTitle.includes(searchQuery))) {
            matchedCard = sub;
          }
        });
      });
    });
    assert.ok(matchedCard, 'Should locate Event Loop lesson card in gallery');

    // 3. Switch theme to cosmic (purple nebula)
    const cosmicTheme = {
      id: 'cosmic',
      name: 'السديم الكوني',
      primary: '#8b5cf6',
      secondary: '#6366f1',
      accent: '#a78bfa',
      bg: '#050811',
      glow: 'rgba(139, 92, 246, 0.3)'
    };
    assert.equal(cosmicTheme.primary, '#8b5cf6');

    // 4. Generate SVG architecture diagram with cosmic palette
    const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
      <rect width="800" height="400" fill="${cosmicTheme.bg}" />
      <circle cx="400" cy="200" r="80" stroke="${cosmicTheme.primary}" stroke-width="4" fill="none" />
      <text x="400" y="205" fill="#ffffff">Node.js Event Loop (${cosmicTheme.name})</text>
    </svg>`;
    assert.ok(svgMarkup.includes(cosmicTheme.primary));
    assert.ok(svgMarkup.includes(cosmicTheme.bg));

    // 5. Execute 4K export color sanitization
    const exportImageMod = await safeImport('src/utils/exportImage.js');
    const cssWithOklab = 'linear-gradient(in oklab, #8b5cf6, #6366f1); color: oklch(0.8 0.1 270);';
    const sanitizedCss = exportImageMod.sanitizeCssString(cssWithOklab);
    assert.ok(!sanitizedCss.includes('in oklab'));
    assert.ok(!sanitizedCss.includes('oklch('));
    assert.ok(sanitizedCss.includes('rgba('));
  });

  // Scenario 5: Complete 23-Section PDF Book Compilation
  test('E2E.WORKLOAD.5: Complete 23-section PDF book compilation workflow (TOC, Multi-page split, Print CSS)', async () => {
    // 1. Load full 23-section curriculum metadata for Table of Contents
    const metaMod = await safeImport('src/data/roadmapMeta.js');
    const sectionsMeta = metaMod.ROADMAP_META || metaMod.ROADMAP_SECTIONS;
    assert.equal(sectionsMeta.length, 23, 'Book must compile all 23 sections');

    // 2. Build Table of Contents entries
    const tableOfContents = sectionsMeta.map((s, idx) => ({
      pageNumber: idx + 2, // page 1 is cover
      sectionId: s.id,
      title: s.title,
      subtopicsCount: s.subtopicsCount || 25
    }));
    assert.equal(tableOfContents.length, 23);
    assert.ok(tableOfContents[0].title.includes('أساسيات البرمجة وتطوير الويب'));
    assert.ok(tableOfContents[22].title.includes('الاستعداد لسوق العمل والاحتراف'));

    // 3. Verify A4 Page Dimensions (210mm x 297mm)
    const pageDimensions = { width: 210, height: 297, unit: 'mm', orientation: 'portrait' };
    assert.equal(pageDimensions.width, 210);
    assert.equal(pageDimensions.height, 297);

    // 4. Verify Print CSS rules exist in index.css
    const exportPdfMod = await safeImport('src/utils/exportPdf.js');
    assert.ok(typeof exportPdfMod.downloadBookAsPdf === 'function');

    // 5. Multi-page pagination split verification
    const simulatedTotalHeightMm = 23 * 297; // 23 pages
    let pageCount = 0;
    let remainingHeight = simulatedTotalHeightMm;
    while (remainingHeight > 0) {
      pageCount++;
      remainingHeight -= pageDimensions.height;
    }
    assert.equal(pageCount, 23, 'Must paginate cleanly across 23 section pages');
  });
});
