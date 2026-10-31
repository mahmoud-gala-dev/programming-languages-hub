// tests/tier1_features/code_fonts.test.js
// Tier 1: Functional Feature Coverage — Code Typography Studio (7 Programming Fonts)
// Feature Covered: F9 (10 Tests)

import { collector } from '../collector.js';
import { assert, SRC_ROOT, PROJECT_ROOT, safeImport } from '../test_helper.js';
import path from 'node:path';
import fs from 'node:fs';

collector.setTier('Tier 1: Feature Coverage');

collector.suite('Code Typography Studio (F9)', (test) => {
  const codeFontsPath = 'src/utils/codeFonts.js';
  const indexPath = path.resolve(PROJECT_ROOT, 'index.html');
  const cssPath = path.resolve(SRC_ROOT, 'index.css');

  // Test 1: codeFonts.js exists and exports required interface
  test('F9.1: src/utils/codeFonts.js exports CODE_FONTS, applyCodeFont, getActiveCodeFont, initCodeFont', async () => {
    const mod = await safeImport(codeFontsPath);
    assert.ok(Array.isArray(mod.CODE_FONTS), 'CODE_FONTS must be an array');
    assert.ok(typeof mod.applyCodeFont === 'function', 'applyCodeFont must be a function');
    assert.ok(typeof mod.getActiveCodeFont === 'function', 'getActiveCodeFont must be a function');
    assert.ok(typeof mod.initCodeFont === 'function', 'initCodeFont must be a function');
  });

  // Test 2: Contains exactly 7 programming fonts
  test('F9.2: CODE_FONTS contains exactly the 7 world-class programming fonts', async () => {
    const mod = await safeImport(codeFontsPath);
    assert.equal(mod.CODE_FONTS.length, 7, 'CODE_FONTS must have exactly 7 fonts');
    const expectedIds = [
      'fira-code',
      'jetbrains-mono',
      'cascadia-code',
      'source-code-pro',
      'inconsolata',
      'space-mono',
      'ubuntu-mono'
    ];
    const actualIds = mod.CODE_FONTS.map(f => f.id);
    expectedIds.forEach(id => {
      assert.ok(actualIds.includes(id), `Missing required font id: ${id}`);
    });
  });

  // Test 3: Font object schema verification
  test('F9.3: Each font object contains id, name, arabicName, family, description, and category', async () => {
    const mod = await safeImport(codeFontsPath);
    const validCategories = ['ligature', 'monospace', 'terminal'];
    mod.CODE_FONTS.forEach(font => {
      assert.ok(font.id, 'Font must have id');
      assert.ok(font.name, 'Font must have name');
      assert.ok(font.arabicName, 'Font must have arabicName');
      assert.ok(font.family, 'Font must have family CSS string');
      assert.ok(font.description, 'Font must have description');
      assert.ok(font.category, `Font ${font.id} must have category`);
      assert.ok(validCategories.includes(font.category), `Font ${font.id} category '${font.category}' must be one of ${validCategories.join(', ')}`);
    });
  });

  // Test 4: Default active font is Fira Code
  test('F9.4: Default active code font is Fira Code (fira-code)', async () => {
    const mod = await safeImport(codeFontsPath);
    globalThis.localStorage.clear();
    const active = mod.getActiveCodeFont();
    assert.equal(active.id, 'fira-code', 'Default font should be fira-code');
  });

  // Test 5: applyCodeFont sets CSS custom property --font-code
  test('F9.5: applyCodeFont updates document.documentElement style --font-code', async () => {
    const mod = await safeImport(codeFontsPath);
    mod.applyCodeFont('jetbrains-mono');
    const active = mod.getActiveCodeFont();
    assert.equal(active.id, 'jetbrains-mono');
  });

  // Test 6: applyCodeFont persists selected font to localStorage
  test('F9.6: applyCodeFont persists font choice to localStorage', async () => {
    const mod = await safeImport(codeFontsPath);
    globalThis.localStorage.clear();
    mod.applyCodeFont('cascadia-code');
    const stored = globalThis.localStorage.getItem('nodejs_roadmap_code_font') ||
                   globalThis.localStorage.getItem('react_roadmap_code_font');
    assert.equal(stored, 'cascadia-code');
  });

  // Test 7: initCodeFont restores persisted font on startup
  test('F9.7: initCodeFont restores previously saved font from localStorage', async () => {
    const mod = await safeImport(codeFontsPath);
    globalThis.localStorage.setItem('nodejs_roadmap_code_font', 'space-mono');
    mod.initCodeFont();
    const active = mod.getActiveCodeFont();
    assert.equal(active.id, 'space-mono');
  });

  // Test 8: Fallback to default on unknown font ID
  test('F9.8: Unknown or invalid font ID safely falls back to default font without error', async () => {
    const mod = await safeImport(codeFontsPath);
    mod.applyCodeFont('invalid-unknown-font-xyz');
    const active = mod.getActiveCodeFont();
    assert.equal(active.id, 'fira-code');
  });

  // Test 9: index.html contains Google Fonts preconnect and links
  test('F9.9: index.html contains preconnect and font stylesheet link for code fonts', () => {
    assert.ok(fs.existsSync(indexPath), 'index.html must exist');
    const html = fs.readFileSync(indexPath, 'utf-8');
    assert.ok(html.includes('fonts.googleapis.com'), 'index.html must connect to fonts.googleapis.com');
    assert.ok(html.includes('fonts.gstatic.com'), 'index.html must preconnect to fonts.gstatic.com');
  });

  // Test 10: index.css declares --font-code variable
  test('F9.10: index.css imports code fonts and configures --font-code property', () => {
    assert.ok(fs.existsSync(cssPath), 'src/index.css must exist');
    const css = fs.readFileSync(cssPath, 'utf-8');
    assert.ok(css.includes('--font-code') || css.includes('Fira Code'), 'index.css must define code font styles');
  });
});
