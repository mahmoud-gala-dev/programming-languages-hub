import { 
  loadAllInfographics, 
  getAllInfographics, 
  searchInfographics, 
  renderSvgArchitectureDiagram, 
  INFOGRAPHIC_THEMES,
  getDefaultThemeForSection
} from '../../../nodejs/src/utils/infographicRegistry.js';
import { sanitizeCssString } from '../../../nodejs/src/utils/exportImage.js';

async function runStress() {
  console.log('=== Reviewer M5 Adversarial Stress Test ===');

  // 1. Concurrency stress on loadAllInfographics
  console.log('[1/5] Testing concurrency on loadAllInfographics...');
  const t0 = performance.now();
  const [res1, res2] = await Promise.all([loadAllInfographics(), loadAllInfographics()]);
  const loadDuration = (performance.now() - t0).toFixed(1);
  console.log(`Concurrent load completed in ${loadDuration}ms. Total items: ${res1.length}`);
  if (res1.length !== 981) {
    throw new Error(`Expected 981 items, got ${res1.length}`);
  }

  // 2. SVG Injection Attack Resistance
  console.log('[2/5] Testing SVG XSS & Injection attacks...');
  const malicious = { 
    title: '<script>alert("xss")</script><img src=x onerror=alert(1)>', 
    englishTitle: '<svg><circle cx=1 cy=1 r=1 /></svg>' 
  };
  const svg = renderSvgArchitectureDiagram('universal_flow', 'cyber', malicious);
  if (svg.includes('<script>') || svg.includes('<img') || svg.includes('<circle cx=1')) {
    throw new Error('VULNERABILITY: SVG did not properly escape HTML tags!');
  }
  if (!svg.includes('&lt;script&gt;') || !svg.includes('&lt;img')) {
    throw new Error('Expected escaped script/img tags');
  }
  console.log('SVG XSS injection resistance: PASS');

  // 3. Search edge cases & SQL/Regex Injection simulation
  console.log('[3/5] Testing search edge cases & special characters...');
  const specialQueries = ['', '   ', '.*', '(?=a)', '[a-z]+', '&& ||', "' OR '1'='1", null, undefined];
  for (const q of specialQueries) {
    const results = searchInfographics(q);
    if (!Array.isArray(results)) {
      throw new Error(`searchInfographics returned non-array for query: ${q}`);
    }
  }
  const eventLoopMatches = searchInfographics('Event Loop');
  console.log(`Search queries resilient. "Event Loop" matches: ${eventLoopMatches.length}`);

  // 4. All themes and diagram schemas validity
  console.log('[4/5] Testing all 5 themes and 6 diagram schemas...');
  const schemas = ['event_loop', 'streams_pipeline', 'http_flow', 'db_caching', 'jwt_auth', 'universal_flow'];
  for (const themeId of Object.keys(INFOGRAPHIC_THEMES)) {
    for (const schema of schemas) {
      const rendered = renderSvgArchitectureDiagram(schema, themeId, { title: 'Test Concept', englishTitle: 'Test' });
      if (!rendered.startsWith('<svg') || !rendered.endsWith('</svg>')) {
        throw new Error(`Malformed SVG output for theme ${themeId} and schema ${schema}`);
      }
    }
  }
  console.log('All 30 theme/schema combinations rendered valid SVG: PASS');

  // 5. CSS Color Sanitization edge cases
  console.log('[5/5] Testing CSS color sanitization on exotic color formats...');
  const trickyGradients = [
    'linear-gradient(in oklab, #f97316 0%, #ef4444 100%)',
    'linear-gradient(in oklch 90deg, oklch(0.6 0.2 150), oklch(0.8 0.1 270))',
    'radial-gradient(in srgb, #06b6d4, #3b82f6)',
    'background-color: oklab(0.7 -0.1 -0.2)',
    'border-color: oklch(0.5 0.15 30 / 0.8)'
  ];
  for (const css of trickyGradients) {
    const sanitized = sanitizeCssString(css);
    if (sanitized.includes('in oklab') || sanitized.includes('in oklch') || sanitized.includes('oklab(') || sanitized.includes('oklch(')) {
      throw new Error(`Sanitization failed on: ${css} -> got: ${sanitized}`);
    }
  }
  console.log('CSS color sanitization resilience: PASS');

  console.log('=== All Adversarial Stress Tests Passed Successfully! ===');
}

runStress().catch(err => {
  console.error('STRESS TEST FAILED:', err);
  process.exit(1);
});
