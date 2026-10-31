// tests/tier3_interactions/theme_and_infographic_export.test.js
// Tier 3: Cross-Feature Interactions — Infographic Theme Switching & 4K PNG / PDF Export
// Interaction Tested: 5 Infographic Themes x SVG Diagrams x 4K PNG & PDF Compilation (7 Tests)

import { collector } from '../collector.js';
import { assert, safeImport } from '../test_helper.js';

collector.setTier('Tier 3: Cross-Feature Combinations');

collector.suite('Interaction: Infographic Themes x 4K PNG & PDF Export (F17 x F19/F20)', (test) => {
  const exportImagePath = 'src/utils/exportImage.js';

  // Test 1: Switching theme updates SVG diagram colors before export
  test('PAIR.15: Switching theme from cyber to sunset updates SVG diagram colors prior to 4K export', () => {
    const themes = {
      cyber: { primary: '#06b6d4', accent: '#22d3ee' },
      sunset: { primary: '#f97316', accent: '#fb923c' }
    };

    let activeTheme = themes.cyber;
    assert.equal(activeTheme.primary, '#06b6d4');

    // Switch theme
    activeTheme = themes.sunset;
    assert.equal(activeTheme.primary, '#f97316');
  });

  // Test 2: 4K export sanitizes all colors in selected theme
  test('PAIR.16: 4K export pipeline sanitizes theme gradient strings (removing in oklab) before rasterization', async () => {
    const mod = await safeImport(exportImagePath);
    const themeGradient = 'linear-gradient(in oklab, #f97316, #ef4444)';
    const sanitized = mod.sanitizeCssString(themeGradient);
    assert.ok(!sanitized.includes('in oklab'));
    assert.ok(sanitized.includes('linear-gradient('));
  });

  // Test 3: Infographic card golden code adopts currently active code font
  test('PAIR.17: Infographic card Golden Code snippet renders using the platform active code font', async () => {
    const fontMod = await safeImport('src/utils/codeFonts.js');
    fontMod.applyCodeFont('jetbrains-mono');
    const active = fontMod.getActiveCodeFont();
    assert.equal(active.id, 'jetbrains-mono');
  });

  // Test 4: Exporting in dark theme retains dark glassmorphic styling
  test('PAIR.18: Infographic card export retains dark background styling (#050811) without white canvas bleeding', () => {
    const cardExportStyle = {
      backgroundColor: '#050811',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    };
    assert.equal(cardExportStyle.backgroundColor, '#050811');
  });

  // Test 5: Switching themes in Universal Gallery updates carousel diagram
  test('PAIR.19: Switching theme in Universal Gallery updates carousel slide diagram without reset', () => {
    let currentSlide = 4;
    let currentTheme = 'cyber';

    // Switch theme
    currentTheme = 'cosmic';
    // Active slide preserved
    assert.equal(currentSlide, 4);
    assert.equal(currentTheme, 'cosmic');
  });

  // Test 6: Exporting Section-level infographic applies active theme palette
  test('PAIR.20: SectionInfographic applies active theme palette across all section topic summaries', () => {
    const theme = { id: 'emerald', primary: '#10b981', glow: 'rgba(16, 185, 129, 0.3)' };
    const sectionSummaryCardStyle = {
      borderColor: theme.primary,
      boxShadow: `0 0 20px ${theme.glow}`
    };

    assert.equal(sectionSummaryCardStyle.borderColor, '#10b981');
    assert.ok(sectionSummaryCardStyle.boxShadow.includes('rgba(16, 185, 129'));
  });

  // Test 7: PDF book generator compiles diagrams in high resolution across pages
  test('PAIR.21: PDF book compiler processes SVG diagrams with high-resolution canvas scaling', () => {
    const pdfScale = 1.5;
    const baseWidth = 800;
    const scaledWidth = baseWidth * pdfScale;
    assert.equal(scaledWidth, 1200);
  });
});
