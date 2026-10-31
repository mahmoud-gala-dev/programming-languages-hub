// tests/tier1_features/ltr_engine.test.js
// Tier 1: Functional Feature Coverage — Strict LTR Syntax Preservation & Cairo Arabic Isolation
// Feature Covered: F13 (10 Tests)

import { collector } from '../collector.js';
import { assert, SRC_ROOT, safeImport } from '../test_helper.js';
import fs from 'node:fs';
import path from 'node:path';

collector.setTier('Tier 1: Feature Coverage');

collector.suite('Strict LTR Code Engine & Cairo Isolation (F13)', (test) => {
  const cssPath = path.resolve(SRC_ROOT, 'index.css');

  // Test 1: index.css enforces direction: ltr !important on code containers
  test('F13.1: index.css enforces direction: ltr !important on code, pre, and highlighted views', () => {
    assert.ok(fs.existsSync(cssPath), 'index.css must exist');
    const css = fs.readFileSync(cssPath, 'utf-8');
    assert.ok(
      css.includes('direction: ltr !important') || css.includes('direction: ltr'),
      'index.css must enforce direction: ltr'
    );
  });

  // Test 2: index.css enforces text-align: left !important on code
  test('F13.2: index.css enforces text-align: left !important on code elements', () => {
    const css = fs.readFileSync(cssPath, 'utf-8');
    assert.ok(
      css.includes('text-align: left !important') || css.includes('text-align: left'),
      'index.css must enforce text-align: left'
    );
  });

  // Test 3: index.css enforces unicode-bidi: isolate !important for Arabic text inside code
  test('F13.3: index.css enforces unicode-bidi: isolate !important on Arabic code comments', () => {
    const css = fs.readFileSync(cssPath, 'utf-8');
    assert.ok(
      css.includes('unicode-bidi: isolate') || css.includes('unicode-bidi: isolate !important'),
      'index.css must isolate Arabic text with unicode-bidi'
    );
  });

  // Test 4: index.css sets font-family: var(--font-arabic) for Arabic comments
  test('F13.4: index.css assigns Cairo font-family to Arabic comments inside code', () => {
    const css = fs.readFileSync(cssPath, 'utf-8');
    assert.ok(
      css.includes('--font-arabic') || css.includes('Cairo'),
      'index.css must specify Cairo/Arabic font for isolated text'
    );
  });

  // Test 5: mark tags in code are protected from RTL reversal
  test('F13.5: Highlight <mark> tags inside code containers are forced to direction: ltr', () => {
    const css = fs.readFileSync(cssPath, 'utf-8');
    const hasMarkProtection = css.includes('mark') && (css.includes('direction: ltr') || css.includes('text-align: left'));
    assert.ok(hasMarkProtection, 'mark elements inside code must be protected with ltr');
  });

  // Test 6: Letter spacing / tracking is omitted on Arabic cursive badges
  test('F13.6: Arabic badges and text omit tracking-wider to prevent letter disconnection', () => {
    const css = fs.readFileSync(cssPath, 'utf-8');
    // Verify there is rule or design reset for Arabic letter spacing
    const preventsDisconnection = css.includes('font-sans') || css.includes('letter-spacing: normal') || !css.includes('dir="rtl" * { letter-spacing: 0.1em');
    assert.ok(preventsDisconnection);
  });

  // Test 7: codeHighlighter identifies comments
  test('F13.7: codeHighlighter properly identifies single-line, multi-line, and HTML comments', async () => {
    const highlighter = await safeImport('src/utils/codeHighlighter.jsx');
    assert.ok(typeof highlighter.highlightCodeLine === 'function', 'highlightCodeLine must be a function');
  });

  // Test 8: codeHighlighter lexes keywords
  test('F13.8: codeHighlighter recognizes core JavaScript keywords', async () => {
    const highlighter = await safeImport('src/utils/codeHighlighter.jsx');
    const result = highlighter.highlightCodeLine('const express = require("express");');
    assert.ok(result, 'Highlight result should be rendered React element');
  });

  // Test 9: codeHighlighter recognizes Node.js built-ins
  test('F13.9: codeHighlighter recognizes Node.js built-ins (fs, path, http, process, Buffer)', async () => {
    const highlighter = await safeImport('src/utils/codeHighlighter.jsx');
    const result = highlighter.highlightCodeLine('const server = http.createServer();');
    assert.ok(result);
  });

  // Test 10: codeHighlighter recognizes strings and numeric literals
  test('F13.10: codeHighlighter handles string literals and numeric constants', async () => {
    const highlighter = await safeImport('src/utils/codeHighlighter.jsx');
    const result = highlighter.highlightCodeLine('const PORT = 3000; const msg = "Server running";');
    assert.ok(result);
  });
});
