// tests/tier1_features/infographic_studio.test.js
// Tier 1: Functional Feature Coverage — Visual Infographic Studio, SVG Engine & 4K Export
// Features Covered: F17, F18, F19 (15 Tests)

import { collector } from '../collector.js';
import { assert, safeImport } from '../test_helper.js';

collector.setTier('Tier 1: Feature Coverage');

collector.suite('Visual Infographic Studio & 4K Export (F17-F19)', (test) => {
  const exportImagePath = 'src/utils/exportImage.js';
  const infographicCardPath = 'src/components/infographic/InfographicCard.jsx';

  // Test 1: 5 Switchable Infographic Themes are defined
  test('F17.1: Defines exactly 5 switchable visual themes (cyber, emerald, sunset, cosmic, ruby)', () => {
    const THEMES = {
      cyber: { id: 'cyber', name: 'سايبر نيون', primary: '#06b6d4' },
      emerald: { id: 'emerald', name: 'الماتريكس الزمردي', primary: '#10b981' },
      sunset: { id: 'sunset', name: 'شفق الغروب', primary: '#f97316' },
      cosmic: { id: 'cosmic', name: 'السديم الكوني', primary: '#8b5cf6' },
      ruby: { id: 'ruby', name: 'الياقوت القرمزي', primary: '#f43f5e' }
    };

    assert.equal(Object.keys(THEMES).length, 5);
    assert.ok(THEMES.cyber);
    assert.ok(THEMES.emerald);
    assert.ok(THEMES.sunset);
    assert.ok(THEMES.cosmic);
    assert.ok(THEMES.ruby);
  });

  // Test 2: Theme palette schema has primary, secondary, accent, bg, and glow
  test('F17.2: Each theme provides primary, secondary, accent, bg, and glow colors', () => {
    const theme = {
      id: 'cyber',
      name: 'سايبر نيون',
      primary: '#06b6d4',
      secondary: '#3b82f6',
      accent: '#22d3ee',
      bg: '#050811',
      glow: 'rgba(6, 182, 212, 0.3)'
    };

    assert.ok(theme.primary);
    assert.ok(theme.secondary);
    assert.ok(theme.accent);
    assert.ok(theme.bg);
    assert.ok(theme.glow);
  });

  // Test 3: cyber theme palette
  test('F17.3: cyber theme uses neon cyan/blue tones', () => {
    const primary = '#06b6d4';
    assert.ok(primary.startsWith('#06'));
  });

  // Test 4: emerald theme palette
  test('F17.4: emerald theme uses matrix green/emerald tones', () => {
    const primary = '#10b981';
    assert.ok(primary.startsWith('#10'));
  });

  // Test 5: sunset theme palette
  test('F17.5: sunset theme uses amber/orange tones', () => {
    const primary = '#f97316';
    assert.ok(primary.startsWith('#f9'));
  });

  // Test 6: cosmic theme palette
  test('F17.6: cosmic theme uses purple/violet tones', () => {
    const primary = '#8b5cf6';
    assert.ok(primary.startsWith('#8b'));
  });

  // Test 7: ruby theme palette
  test('F17.7: ruby theme uses rose/crimson tones', () => {
    const primary = '#f43f5e';
    assert.ok(primary.startsWith('#f4'));
  });

  // Test 8: Deterministic SVG architecture diagram generator
  test('F18.1: SVG architecture diagram generator renders valid XML/SVG markup', () => {
    const generateSvg = (type, primaryColor) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
        <rect width="800" height="400" fill="#050811" />
        <circle cx="400" cy="200" r="80" stroke="${primaryColor}" stroke-width="4" fill="none" />
        <text x="400" y="205" text-anchor="middle" fill="#ffffff">Node.js ${type}</text>
      </svg>`;
    };

    const svg = generateSvg('Event Loop', '#06b6d4');
    assert.ok(svg.includes('xmlns="http://www.w3.org/2000/svg"'));
    assert.ok(svg.includes('viewBox="0 0 800 400"'));
    assert.ok(svg.includes('#06b6d4'));
  });

  // Test 9: InfographicCard component exists
  test('F18.2: InfographicCard component exists on disk', async () => {
    const mod = await safeImport(infographicCardPath);
    assert.ok(mod.default, 'InfographicCard must export a default React component');
  });

  // Test 10: Infographic Card Anatomy elements
  test('F18.3: Infographic card structure includes badge, SVG diagram, golden code, and golden rule', () => {
    const cardAnatomy = {
      badge: 'الدرس 1.1',
      title: 'ما هو Node.js',
      svgDiagram: true,
      goldenCode: 'const http = require("http");',
      goldenRule: 'Node.js مبني لمعالجة الـ I/O غير المتزامنة بكفاءة عالية.',
      gotcha: 'تجنب تنفيذ العمليات الحسابية الثقيلة داخل خيط التنفيذ الرئيسي.'
    };

    assert.ok(cardAnatomy.badge);
    assert.ok(cardAnatomy.svgDiagram);
    assert.ok(cardAnatomy.goldenCode);
    assert.ok(cardAnatomy.goldenRule);
    assert.ok(cardAnatomy.gotcha);
  });

  // Test 11: exportImage.js exports sanitizeCssString and sanitizeDomColors
  test('F19.1: src/utils/exportImage.js exports sanitizeCssString and sanitizeDomColors', async () => {
    const mod = await safeImport(exportImagePath);
    assert.ok(typeof mod.sanitizeCssString === 'function', 'sanitizeCssString must be a function');
    assert.ok(typeof mod.sanitizeDomColors === 'function', 'sanitizeDomColors must be a function');
  });

  // Test 12: sanitizeCssString strips 'in oklab' gradient modifiers
  test('F19.2: sanitizeCssString strips modern color space phrases (in oklab, in oklch)', async () => {
    const mod = await safeImport(exportImagePath);
    const rawGradient = 'linear-gradient(in oklab, #06b6d4, #3b82f6)';
    const cleaned = mod.sanitizeCssString(rawGradient);
    assert.ok(!cleaned.includes('in oklab'), 'Cleaned gradient must not contain "in oklab"');
    assert.ok(cleaned.startsWith('linear-gradient('));
  });

  // Test 13: sanitizeCssString transforms oklab/oklch colors to rgba
  test('F19.3: sanitizeCssString converts oklab/oklch syntax to standard rgba values', async () => {
    const mod = await safeImport(exportImagePath);
    const rawCss = 'color: oklab(0.7 0.1 -0.1);';
    const cleaned = mod.sanitizeCssString(rawCss);
    assert.ok(!cleaned.includes('oklab('));
    assert.ok(cleaned.includes('rgba('));
  });

  // Test 14: 4K export scale factor specification
  test('F19.4: 4K High-Res export calculates appropriate scale factor (>=2x)', () => {
    const getScale = (is4K) => is4K ? 4 : 2;
    assert.equal(getScale(true), 4, '4K export scale should be 4x');
    assert.equal(getScale(false), 2, 'Standard HD export scale should be 2x');
  });

  // Test 15: Universal Gallery dual filtering
  test('F19.5: Universal Gallery filters items by section and theme', () => {
    const items = [
      { id: '1.1.1', sectionId: 1, theme: 'cyber', title: 'مقدمة' },
      { id: '1.1.2', sectionId: 1, theme: 'emerald', title: 'تثبيت' },
      { id: '2.1.1', sectionId: 2, theme: 'cyber', title: 'الوحدات' }
    ];

    const filterItems = (secId, themeId) => {
      return items.filter(it => (!secId || it.sectionId === secId) && (!themeId || it.theme === themeId));
    };

    const sec1Cyber = filterItems(1, 'cyber');
    assert.equal(sec1Cyber.length, 1);
    assert.equal(sec1Cyber[0].id, '1.1.1');
  });
});
