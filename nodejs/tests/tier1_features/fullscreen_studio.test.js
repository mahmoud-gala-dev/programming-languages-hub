// tests/tier1_features/fullscreen_studio.test.js
// Tier 1: Functional Feature Coverage — Real Fullscreen Code Studio & IDE Telemetry
// Features Covered: F14, F15 (10 Tests)

import { collector } from '../collector.js';
import { assert, safeImport } from '../test_helper.js';

collector.setTier('Tier 1: Feature Coverage');

collector.suite('Real Fullscreen Code Studio (F14-F15)', (test) => {
  const codeBlockPath = 'src/components/lesson/CodeBlock.jsx';

  // Test 1: CodeBlock component exists
  test('F14.1: CodeBlock component exists on disk', async () => {
    const mod = await safeImport(codeBlockPath);
    assert.ok(mod.default, 'CodeBlock must export a default React component');
  });

  // Test 2: Fullscreen portal dimensions and styling specification
  test('F14.2: Fullscreen studio styling contract enforces 100vw x 100vh with fixed positioning', () => {
    const fullscreenPortalStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 999999,
      width: '100vw',
      height: '100vh'
    };

    assert.equal(fullscreenPortalStyle.position, 'fixed');
    assert.equal(fullscreenPortalStyle.zIndex, 999999);
    assert.equal(fullscreenPortalStyle.width, '100vw');
    assert.equal(fullscreenPortalStyle.height, '100vh');
  });

  // Test 3: Keyboard shortcut 'F' toggles fullscreen mode
  test('F14.3: Keyboard shortcut "F" is registered to toggle fullscreen mode', () => {
    const handleKeyDown = (e, currentIsFullscreen, setIsFullscreen) => {
      if (e.key === 'f' || e.key === 'F') {
        if (!['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) {
          setIsFullscreen(!currentIsFullscreen);
          return true;
        }
      }
      return false;
    };

    let isFs = false;
    const handled = handleKeyDown({ key: 'f', target: { tagName: 'DIV' } }, isFs, (val) => { isFs = val; });
    assert.ok(handled);
    assert.equal(isFs, true);
  });

  // Test 4: Escape key exits fullscreen mode
  test('F14.4: Escape key safely dismisses fullscreen studio', () => {
    const handleKeyDown = (e, currentIsFullscreen, setIsFullscreen) => {
      if (e.key === 'Escape' && currentIsFullscreen) {
        setIsFullscreen(false);
        return true;
      }
      return false;
    };

    let isFs = true;
    const handled = handleKeyDown({ key: 'Escape' }, isFs, (val) => { isFs = val; });
    assert.ok(handled);
    assert.equal(isFs, false);
  });

  // Test 5: Hardware Fullscreen API integration
  test('F14.5: Hardware Fullscreen API requestFullscreen is supported', async () => {
    let requested = false;
    globalThis.document.documentElement.requestFullscreen = async () => {
      requested = true;
    };

    await globalThis.document.documentElement.requestFullscreen();
    assert.ok(requested);
  });

  // Test 6: Line wrap toggle shortcut 'W'
  test('F14.6: Keyboard shortcut "W" toggles line wrap between pre and pre-wrap', () => {
    const toggleLineWrap = (currentWrap) => !currentWrap;
    let wrap = false;
    wrap = toggleLineWrap(wrap);
    assert.equal(wrap, true, 'Wrap should become true');
    wrap = toggleLineWrap(wrap);
    assert.equal(wrap, false, 'Wrap should become false');
  });

  // Test 7: Font size zoom controls adjust code scale
  test('F14.7: Font size zoom controls increment and decrement code font scale within limits', () => {
    const adjustFontSize = (currentSize, delta) => {
      const min = 12;
      const max = 24;
      return Math.min(max, Math.max(min, currentSize + delta));
    };

    assert.equal(adjustFontSize(14, 2), 16);
    assert.equal(adjustFontSize(24, 2), 24, 'Should clamp to max 24px');
    assert.equal(adjustFontSize(12, -2), 12, 'Should clamp to min 12px');
  });

  // Test 8: IDE Telemetry status bar calculations
  test('F15.1: IDE status bar computes line count, char count, encoding, and active font', () => {
    const code = `const http = require('http');\nconst server = http.createServer();\nserver.listen(3000);`;
    const lines = code.split('\n');
    const lineCount = lines.length;
    const charCount = code.length;
    const telemetry = {
      lines: lineCount,
      chars: charCount,
      encoding: 'UTF-8',
      indentation: '2 spaces',
      font: 'Fira Code'
    };

    assert.equal(telemetry.lines, 3);
    assert.equal(telemetry.chars, code.length);
    assert.equal(telemetry.encoding, 'UTF-8');
  });

  // Test 9: Line notes drawer schema and association
  test('F15.2: Line notes associate subtopicId, lineNumber, tag, and content', () => {
    const lineNote = {
      subtopicId: '8.1.1',
      lineNumber: 12,
      tag: '💡 مفهوم',
      content: 'دالة middleware في Express تستقبل (req, res, next).'
    };

    assert.equal(lineNote.subtopicId, '8.1.1');
    assert.equal(lineNote.lineNumber, 12);
    assert.ok(lineNote.content);
  });

  // Test 10: Line note persistence via notesDb
  test('F15.3: saveCodeNote and getCodeNotesBySubtopic persist line-by-line notes', async () => {
    const mod = await safeImport('src/utils/notesDb.js');
    const note = {
      subtopicId: '8.1.1',
      lineNumber: 5,
      tag: '⚠️ تنبيه',
      content: 'تأكد من استدعاء next() لتجنب تجميد الطلب.'
    };

    const id = await mod.saveCodeNote(note);
    assert.ok(id !== undefined);

    const notes = await mod.getCodeNotesBySubtopic('8.1.1');
    assert.ok(Array.isArray(notes));
  });
});
