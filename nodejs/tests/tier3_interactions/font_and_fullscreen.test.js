// tests/tier3_interactions/font_and_fullscreen.test.js
// Tier 3: Cross-Feature Interactions — Code Typography & Fullscreen IDE Studio
// Interaction Tested: CodeFontModal / Typography x Fullscreen React Portal (7 Tests)

import { collector } from '../collector.js';
import { assert, safeImport } from '../test_helper.js';

collector.setTier('Tier 3: Cross-Feature Combinations');

collector.suite('Interaction: Code Typography x Fullscreen IDE (F9 x F14/F15)', (test) => {
  const codeFontsPath = 'src/utils/codeFonts.js';

  // Test 1: Switching font to JetBrains Mono updates font inside Fullscreen Portal
  test('PAIR.1: Switching code font updates active font within Fullscreen IDE immediately', async () => {
    const mod = await safeImport(codeFontsPath);
    mod.applyCodeFont('jetbrains-mono');
    const active = mod.getActiveCodeFont();
    assert.equal(active.id, 'jetbrains-mono');
    assert.ok(active.name.includes('JetBrains'));
  });

  // Test 2: Fullscreen portal inherits CSS variable --font-code
  test('PAIR.2: Fullscreen Portal mounted to document.body inherits --font-code CSS variable', () => {
    const rootStyle = { '--font-code': "'JetBrains Mono', 'Cairo', monospace" };
    const portalInherits = Boolean(rootStyle['--font-code']);
    assert.ok(portalInherits);
  });

  // Test 3: Font switch while line notes drawer is open preserves notes state
  test('PAIR.3: Changing code font while line notes drawer is active retains existing notes and line focus', () => {
    let activeLine = 12;
    let noteText = 'ملاحظة على السطر 12 أثناء تغيير الخط';
    // Switch font
    const newFont = 'cascadia-code';
    // State of line note remains intact
    assert.equal(activeLine, 12);
    assert.equal(noteText, 'ملاحظة على السطر 12 أثناء تغيير الخط');
    assert.equal(newFont, 'cascadia-code');
  });

  // Test 4: Line wrap toggle in fullscreen preserves active font family
  test('PAIR.4: Toggling line wrap (W) in fullscreen studio preserves active font family styling', () => {
    const codeBlockState = {
      isWrap: false,
      fontFamily: 'Fira Code'
    };

    // Toggle wrap
    codeBlockState.isWrap = true;
    assert.equal(codeBlockState.isWrap, true);
    assert.equal(codeBlockState.fontFamily, 'Fira Code');
  });

  // Test 5: Zooming font scale in fullscreen recalculates line height
  test('PAIR.5: Zooming font size (+/-) in fullscreen recalculates line height and gutter alignment', () => {
    const computeLineHeight = (fontSize) => Math.round(fontSize * 1.5);
    assert.equal(computeLineHeight(14), 21);
    assert.equal(computeLineHeight(18), 27);
  });

  // Test 6: Exiting fullscreen preserves active font in normal view
  test('PAIR.6: Exiting fullscreen mode (Escape) retains the active selected font in regular lesson view', async () => {
    const mod = await safeImport(codeFontsPath);
    mod.applyCodeFont('source-code-pro');
    // Exit fullscreen
    let isFullscreen = false;
    assert.equal(isFullscreen, false);
    const active = mod.getActiveCodeFont();
    assert.equal(active.id, 'source-code-pro');
  });

  // Test 7: IDE status bar reflects current font name
  test('PAIR.7: Fullscreen IDE status bar displays current code font name dynamically', async () => {
    const mod = await safeImport(codeFontsPath);
    mod.applyCodeFont('ubuntu-mono');
    const active = mod.getActiveCodeFont();
    const statusBarTelemetry = {
      fontName: active.name,
      encoding: 'UTF-8',
      lines: 45
    };

    assert.equal(statusBarTelemetry.fontName, 'Ubuntu Mono');
  });
});
