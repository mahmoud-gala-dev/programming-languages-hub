import assert from 'node:assert';
import { 
  INFOGRAPHIC_THEMES, 
  buildInfographicForSubtopic, 
  loadAllInfographics, 
  searchInfographics, 
  renderSvgArchitectureDiagram,
  getInfographicsBySectionId
} from '../src/utils/infographicRegistry.js';
import { sanitizeCssString } from '../src/utils/exportImage.js';

async function runAdversarialSuite() {
  console.log('--- Starting Reviewer Adversarial Stress Test ---');

  // 1. Edge case: null / undefined subtopic
  assert.strictEqual(buildInfographicForSubtopic(null), null);
  assert.strictEqual(buildInfographicForSubtopic(undefined), null);

  // 2. Edge case: empty subtopic object
  const minimal = buildInfographicForSubtopic({ id: '99.1.1', title: 'مفهوم تجريبي' });
  assert.ok(minimal);
  assert.strictEqual(minimal.sectionId, 99);
  assert.ok(minimal.theme);
  assert.ok(minimal.visualDiagram);
  assert.ok(minimal.goldenRule);
  assert.ok(minimal.pitfall);
  assert.ok(minimal.codeSnippet);

  // 3. Search and Registry tests
  const all = await loadAllInfographics();
  assert.strictEqual(all.length, 981, 'Must load exactly 981 infographics');
  
  assert.strictEqual(searchInfographics(null).length, 981);
  assert.strictEqual(searchInfographics('').length, 981);
  assert.strictEqual(searchInfographics('   ').length, 981);
  
  const eventLoopMatches = searchInfographics('Event Loop');
  assert.ok(eventLoopMatches.length >= 1, 'Should find at least 1 Event Loop match');
  
  const ghostMatches = searchInfographics('__impossible_query_99999_xyz__');
  assert.strictEqual(ghostMatches.length, 0);

  // 4. Section 22 subtopics check
  const sec22Items = getInfographicsBySectionId(22);
  assert.strictEqual(sec22Items.length, 99, 'Section 22 must have exactly 99 infographics');

  // 5. SVG rendering cross all 5 themes and schemas
  const themes = ['cyber', 'emerald', 'sunset', 'cosmic', 'ruby'];
  const schemas = ['event_loop', 'streams_pipeline', 'http_flow', 'db_caching', 'jwt_auth', 'universal_flow', 'fallback_custom'];
  
  for (const t of themes) {
    const themeObj = INFOGRAPHIC_THEMES[t];
    assert.ok(themeObj, `Theme ${t} must exist`);
    assert.ok(themeObj.primary, `Theme ${t} must have primary color`);
    assert.ok(themeObj.bg, `Theme ${t} must have bg color`);
    
    for (const s of schemas) {
      const svg = renderSvgArchitectureDiagram(s, themeObj, { 
        title: 'اختبار <XSS> & "حماية"', 
        englishTitle: 'Security & Flow' 
      });
      assert.ok(svg.startsWith('<svg'), 'Must produce valid SVG markup');
      assert.ok(svg.includes(themeObj.bg), 'SVG must include theme bg');
      assert.ok(svg.includes('xmlns="http://www.w3.org/2000/svg"'), 'SVG must include valid namespace');
      assert.ok(!svg.includes('<XSS>'), 'SVG must never output unescaped raw <XSS>');
      if (s === 'universal_flow' || s === 'fallback_custom') {
        assert.ok(svg.includes('&lt;XSS&gt;'), 'SVG must escape <XSS> in dynamic titles');
      }
    }
  }

  // 6. CSS Sanitization stress test
  const testGradients = [
    'linear-gradient(in oklab, #06b6d4, #3b82f6)',
    'linear-gradient(in oklch 45deg, #10b981, #14b8a6)',
    'radial-gradient(in oklab, #f97316 0%, #ea580c 100%)',
    'linear-gradient(in srgb, #8b5cf6, #6366f1)',
    'color: oklab(0.7 0.1 -0.1); background-color: oklch(0.6 0.15 180);'
  ];

  for (const grad of testGradients) {
    const cleaned = sanitizeCssString(grad);
    assert.ok(!cleaned.includes('in oklab'), `Must strip in oklab: ${cleaned}`);
    assert.ok(!cleaned.includes('in oklch'), `Must strip in oklch: ${cleaned}`);
    assert.ok(!cleaned.includes('in srgb'), `Must strip in srgb: ${cleaned}`);
    assert.ok(!cleaned.includes('oklab('), `Must convert oklab: ${cleaned}`);
    assert.ok(!cleaned.includes('oklch('), `Must convert oklch: ${cleaned}`);
  }

  console.log('✓ ALL 6 REVIEWER ADVERSARIAL STRESS SUITES PASSED CLEANLY (100%)');
}

runAdversarialSuite().catch((err) => {
  console.error('ADVERSARIAL STRESS TEST FAILED:', err);
  process.exit(1);
});
