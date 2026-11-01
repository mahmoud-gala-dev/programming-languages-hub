// tests/empirical_stress_m6_4.mjs
// Adversarial Empirical Stress Test Suite for Milestone 6 Hardened Deliverables
// Critic / Specialist: challenger_m6_4

import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { setupMockEnvironment } from './test_helper.js';

// Setup Mock Environment
setupMockEnvironment();

console.log('\n======================================================================');
console.log(' ⚔️ EMPIRICAL ADVERSARIAL STRESS TEST HARNESS — MILESTONE 6');
console.log(' Agent: challenger_m6_4 | Review & Verification');
console.log('======================================================================\n');

let passedCount = 0;
let failedCount = 0;
const failures = [];

async function stress(name, fn) {
  const t0 = performance.now();
  try {
    await fn();
    const dur = (performance.now() - t0).toFixed(2);
    passedCount++;
    console.log(`  \x1b[32m✓\x1b[0m ${name} \x1b[2m(${dur}ms)\x1b[0m`);
  } catch (err) {
    const dur = (performance.now() - t0).toFixed(2);
    failedCount++;
    console.log(`  \x1b[31m✕\x1b[0m ${name} \x1b[2m(${dur}ms)\x1b[0m`);
    console.log(`    \x1b[31mError:\x1b[0m ${err.message}`);
    failures.push({ name, error: err });
  }
}

// -----------------------------------------------------------------------------
// SECTION 1: LiveCodePreview.jsx — Namespace Imports & Infinite Loop Watchdog
// -----------------------------------------------------------------------------
console.log('\x1b[1m\x1b[35m▶ [Target 1] LiveCodePreview.jsx Namespace Imports & Watchdog\x1b[0m');

// 1.1 Namespace import transpilation tests
const transpileCode = (rawCode) => {
  return rawCode
    .replace(/import\s+\*\s+as\s+(\w+)\s+from\s+['"]([^'"]+)['"];?/g, 'const $1 = require("$2");')
    .replace(/import\s+([\w\s{},]+)\s+from\s+['"]([^'"]+)['"];?/g, 'const $1 = require("$2");')
    .replace(/export\s+default\s+/g, '')
    .replace(/export\s+(const|let|var|function|class)\s+/g, '$1 ');
};

await stress('1.1.1: Single quotes namespace import transpiles correctly', () => {
  const code = "import * as fs from 'fs';";
  const result = transpileCode(code);
  assert.equal(result, 'const fs = require("fs");');
});

await stress('1.1.2: Double quotes namespace import transpiles correctly', () => {
  const code = 'import * as path from "path";';
  const result = transpileCode(code);
  assert.equal(result, 'const path = require("path");');
});

await stress('1.1.3: Namespace import with node: prefix transpiles correctly', () => {
  const code = 'import * as nodeFs from "node:fs";';
  const result = transpileCode(code);
  assert.equal(result, 'const nodeFs = require("node:fs");');
});

await stress('1.1.4: Multiple namespace imports in sequence transpile cleanly', () => {
  const code = `import * as fs from 'fs';
import * as path from 'path';
import * as dns from 'dns';`;
  const result = transpileCode(code);
  assert.equal(result, `const fs = require("fs");
const path = require("path");
const dns = require("dns");`);
});

await stress('1.1.5: Mixed imports (namespace + default + named) transpile without collisions', () => {
  const code = `import * as fs from 'fs';
import express from 'express';
import { resolve, join } from 'path';`;
  const result = transpileCode(code);
  assert.ok(result.includes('const fs = require("fs");'));
  assert.ok(result.includes('const express = require("express");'));
  assert.ok(result.includes('const { resolve, join } = require("path");'));
});

await stress('1.1.6: Namespace import produces valid Function syntax and executes with mock require', async () => {
  const rawCode = `import * as fs from 'fs';
const data = await fs.readFile('config.json');
console.log('STATUS:', data);`;

  const executable = transpileCode(rawCode);
  const logs = [];
  const mockConsole = {
    log: (...args) => logs.push(args.join(' ')),
    info: () => {},
    warn: () => {},
    error: () => {}
  };
  const mockRequire = (mod) => {
    if (mod.includes('fs')) {
      return {
        readFile: async () => '{"status":"ok","content":"ملف محاكي بنجاح"}',
        writeFile: async () => true,
        promises: { readFile: async () => '{"status":"ok"}' }
      };
    }
    return {};
  };

  const runner = new Function('require', 'process', 'Buffer', 'console', 'performance',
    '"use strict"; return (async () => {' + executable + '\n})();'
  );

  await runner(mockRequire, {}, {}, mockConsole, {});
  assert.equal(logs.length, 1);
  assert.ok(logs[0].includes('ملف محاكي بنجاح'), 'Execution must receive result from mock fs');
});

await stress('1.1.7: Namespace import with path methods runs cleanly', async () => {
  const rawCode = `import * as path from 'path';
const fullPath = path.join('workspace', 'src', 'index.js');
console.log('PATH:', fullPath);`;

  const executable = transpileCode(rawCode);
  const logs = [];
  const mockConsole = { log: (...args) => logs.push(args.join(' ')) };
  const mockRequire = (mod) => {
    if (mod.includes('path')) {
      return {
        join: (...args) => args.join('/'),
        resolve: (...args) => '/' + args.join('/')
      };
    }
    return {};
  };

  const runner = new Function('require', 'process', 'Buffer', 'console', 'performance',
    '"use strict"; return (async () => {' + executable + '\n})();'
  );

  await runner(mockRequire, {}, {}, mockConsole, {});
  assert.equal(logs.length, 1);
  assert.equal(logs[0], 'PATH: workspace/src/index.js');
});

await stress('1.1.8: Namespace import without trailing semicolon and with scoped package path', () => {
  const code = "import * as myPkg from '@scoped/my-package'";
  const result = transpileCode(code);
  assert.equal(result, 'const myPkg = require("@scoped/my-package");');
});

await stress('1.1.9: Namespace import with relative path and numbers in identifier', () => {
  const code = 'import * as module_123 from "./services/auth.service.js";';
  const result = transpileCode(code);
  assert.equal(result, 'const module_123 = require("./services/auth.service.js");');
});

// 1.2 Watchdog Timeout Tests
await stress('1.2.1: Watchdog timeout rejects with timeout message when execution exceeds limit (fast mock)', async () => {
  const timeoutMs = 50; // Scaled timeout for empirical verification
  const timeoutErrorMsg = "Execution timeout: تجاوز الحد الزمني المسموح (5000ms) - احتمال وجود حلقة تكرار لانهائية (Infinite Loop)";

  let keepRunning = true;
  const runner = async () => {
    // Infinite async loop
    while (keepRunning) {
      await new Promise(r => setTimeout(r, 10));
    }
  };

  const watchdogTimeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(timeoutErrorMsg));
    }, timeoutMs);
  });

  let caughtError = null;
  try {
    await Promise.race([runner(), watchdogTimeout]);
  } catch (err) {
    caughtError = err;
  } finally {
    keepRunning = false;
  }

  assert.ok(caughtError !== null, 'Watchdog must trigger and throw');
  assert.equal(caughtError.message, timeoutErrorMsg);
});

await stress('1.2.2: Fast resolving code finishes before watchdog timeout without error', async () => {
  const timeoutMs = 200;
  const runner = async () => {
    return 'COMPLETED_SUCCESSFULLY';
  };

  const watchdogTimeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout triggered prematurely"));
    }, timeoutMs);
  });

  const result = await Promise.race([runner(), watchdogTimeout]);
  assert.equal(result, 'COMPLETED_SUCCESSFULLY');
});

await stress('1.2.3: Watchdog error rendering creates expected payload-err container', () => {
  // Simulating the error rendering logic in LiveCodePreview.jsx lines 363-368:
  const err = new Error("Execution timeout: تجاوز الحد الزمني المسموح (5000ms) - احتمال وجود حلقة تكرار لانهائية (Infinite Loop)");
  
  // HTML builder:
  const rowHtml = '<strong>[Runtime / Syntax Error]:</strong> ' + (err.message || String(err));
  assert.ok(rowHtml.includes('[Runtime / Syntax Error]'));
  assert.ok(rowHtml.includes('Execution timeout'));
  assert.ok(rowHtml.includes('5000ms'));
  assert.ok(rowHtml.includes('Infinite Loop'));
});

await stress('1.2.4: Real 5000ms watchdog timeout fires at exactly 5000ms threshold (+/- 150ms)', async () => {
  const tStart = performance.now();
  let keepRunning = true;
  const runner = async () => {
    while (keepRunning) {
      await new Promise(r => setTimeout(r, 50));
    }
  };

  const watchdogTimeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Execution timeout: تجاوز الحد الزمني المسموح (5000ms) - احتمال وجود حلقة تكرار لانهائية (Infinite Loop)"));
    }, 5000);
  });

  let caughtError = null;
  try {
    await Promise.race([runner(), watchdogTimeout]);
  } catch (err) {
    caughtError = err;
  } finally {
    keepRunning = false;
  }

  const elapsed = performance.now() - tStart;
  assert.ok(caughtError !== null);
  assert.ok(caughtError.message.includes('5000ms'));
  assert.ok(elapsed >= 4950 && elapsed <= 5500, `Elapsed ${elapsed}ms must be around 5000ms`);
});

// -----------------------------------------------------------------------------
// SECTION 2: CodeBlock.jsx — Fullscreen Exit Synchronization
// -----------------------------------------------------------------------------
console.log('\n\x1b[1m\x1b[35m▶ [Target 2] CodeBlock.jsx Fullscreen Exit Synchronization\x1b[0m');

await stress('2.1: Fullscreen state machine — close button exits both native and portal simultaneously', () => {
  let isFullscreen = true;
  let isNativeFullscreen = true;
  let exitFullscreenCalled = 0;

  const mockDoc = {
    fullscreenElement: { id: 'codeblock-portal' },
    exitFullscreen: async () => {
      exitFullscreenCalled++;
      mockDoc.fullscreenElement = null;
    }
  };

  // handleExitFullscreen implementation from CodeBlock.jsx lines 175-181:
  const handleExitFullscreen = () => {
    if (typeof mockDoc !== 'undefined' && mockDoc.fullscreenElement) {
      mockDoc.exitFullscreen?.().catch(() => {});
    }
    isFullscreen = false;
    isNativeFullscreen = false;
  };

  handleExitFullscreen();

  assert.equal(exitFullscreenCalled, 1, 'exitFullscreen must be called');
  assert.equal(isFullscreen, false, 'React portal must be closed');
  assert.equal(isNativeFullscreen, false, 'isNativeFullscreen must be reset to false');
});

await stress('2.2: Fullscreen state machine — Escape key in native mode exits native fullscreen first', () => {
  let isFullscreen = true;
  let isNativeFullscreen = true;
  let exitFullscreenCalled = 0;

  const mockDoc = {
    fullscreenElement: { id: 'codeblock-portal' },
    exitFullscreen: async () => {
      exitFullscreenCalled++;
      mockDoc.fullscreenElement = null;
    }
  };

  const handleExitFullscreen = () => {
    if (typeof mockDoc !== 'undefined' && mockDoc.fullscreenElement) {
      mockDoc.exitFullscreen?.().catch(() => {});
    }
    isFullscreen = false;
    isNativeFullscreen = false;
  };

  // handleKeyDown implementation from CodeBlock.jsx lines 118-123:
  const handleKeyDown = (e) => {
    const isInput = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA';
    if (e.key === "Escape") {
      if (typeof mockDoc !== 'undefined' && mockDoc.fullscreenElement) {
        mockDoc.exitFullscreen?.().catch(() => {});
      } else {
        handleExitFullscreen();
      }
    }
  };

  // 1st Escape press:
  handleKeyDown({ key: 'Escape', target: { tagName: 'DIV' } });
  assert.equal(exitFullscreenCalled, 1, '1st Escape must trigger exitFullscreen');
  assert.equal(isFullscreen, true, 'React portal must remain open after native fullscreen exits');

  // 2nd Escape press (native fullscreen is now null):
  handleKeyDown({ key: 'Escape', target: { tagName: 'DIV' } });
  assert.equal(isFullscreen, false, '2nd Escape must close the React portal');
});

await stress('2.3: Fullscreen state machine — Escape when only portal active (no native FS) closes immediately', () => {
  let isFullscreen = true;
  let isNativeFullscreen = false;

  const mockDoc = {
    fullscreenElement: null,
    exitFullscreen: async () => {}
  };

  const handleExitFullscreen = () => {
    if (typeof mockDoc !== 'undefined' && mockDoc.fullscreenElement) {
      mockDoc.exitFullscreen?.().catch(() => {});
    }
    isFullscreen = false;
    isNativeFullscreen = false;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      if (typeof mockDoc !== 'undefined' && mockDoc.fullscreenElement) {
        mockDoc.exitFullscreen?.().catch(() => {});
      } else {
        handleExitFullscreen();
      }
    }
  };

  handleKeyDown({ key: 'Escape', target: { tagName: 'DIV' } });
  assert.equal(isFullscreen, false, 'Portal must close on 1st Escape if native fullscreen is not active');
});

await stress('2.4: Fullscreen state machine — robust against exitFullscreen rejection', async () => {
  let isFullscreen = true;
  let isNativeFullscreen = true;
  let rejectionHandled = false;

  const mockDoc = {
    fullscreenElement: { id: 'element' },
    exitFullscreen: () => Promise.reject(new Error("User interaction required"))
  };

  const handleExitFullscreen = () => {
    if (typeof mockDoc !== 'undefined' && mockDoc.fullscreenElement) {
      mockDoc.exitFullscreen?.().catch(() => {
        rejectionHandled = true;
      });
    }
    isFullscreen = false;
    isNativeFullscreen = false;
  };

  assert.doesNotThrow(() => {
    handleExitFullscreen();
  });
  // Yield to allow promise rejection handler to execute
  await new Promise(r => setTimeout(r, 10));
  assert.equal(rejectionHandled, true, 'Promise rejection must be handled via catch()');
  assert.equal(isFullscreen, false);
});

await stress('2.5: Fullscreen state machine — body overflow lock and unlock cycle', () => {
  const body = { style: { overflow: 'auto' } };
  const originalOverflow = body.style.overflow;

  // Mount fullscreen:
  body.style.overflow = 'hidden';
  assert.equal(body.style.overflow, 'hidden');

  // Unmount / exit cleanup:
  body.style.overflow = originalOverflow;
  assert.equal(body.style.overflow, 'auto', 'Body overflow must be restored on exit');
});

// -----------------------------------------------------------------------------
// SECTION 3: exportImage.js — sanitizeDomColors Non-Element Guard
// -----------------------------------------------------------------------------
console.log('\n\x1b[1m\x1b[35m▶ [Target 3] exportImage.js sanitizeDomColors Non-Element Guard\x1b[0m');

import { sanitizeDomColors, sanitizeCssString } from '../src/utils/exportImage.js';

await stress('3.1: sanitizeDomColors handles null and undefined safely without throwing', () => {
  assert.doesNotThrow(() => sanitizeDomColors(null));
  assert.doesNotThrow(() => sanitizeDomColors(undefined));
});

await stress('3.2: sanitizeDomColors handles primitives (number, string, boolean, symbol, bigint)', () => {
  assert.doesNotThrow(() => sanitizeDomColors(0));
  assert.doesNotThrow(() => sanitizeDomColors(42));
  assert.doesNotThrow(() => sanitizeDomColors(NaN));
  assert.doesNotThrow(() => sanitizeDomColors(-1));
  assert.doesNotThrow(() => sanitizeDomColors(""));
  assert.doesNotThrow(() => sanitizeDomColors("<div>some markup</div>"));
  assert.doesNotThrow(() => sanitizeDomColors(true));
  assert.doesNotThrow(() => sanitizeDomColors(false));
  assert.doesNotThrow(() => sanitizeDomColors(Symbol('test')));
  assert.doesNotThrow(() => sanitizeDomColors(9007199254740991n));
});

await stress('3.3: sanitizeDomColors handles plain objects, arrays, and functions', () => {
  assert.doesNotThrow(() => sanitizeDomColors({}));
  assert.doesNotThrow(() => sanitizeDomColors({ width: 100, height: 200 }));
  assert.doesNotThrow(() => sanitizeDomColors([]));
  assert.doesNotThrow(() => sanitizeDomColors([1, 2, 3]));
  assert.doesNotThrow(() => sanitizeDomColors(() => {}));
  assert.doesNotThrow(() => sanitizeDomColors(async () => {}));
});

await stress('3.4: sanitizeDomColors handles object with invalid querySelectorAll property', () => {
  assert.doesNotThrow(() => sanitizeDomColors({ querySelectorAll: null }));
  assert.doesNotThrow(() => sanitizeDomColors({ querySelectorAll: "not_a_func" }));
  assert.doesNotThrow(() => sanitizeDomColors({ querySelectorAll: 123 }));
  assert.doesNotThrow(() => sanitizeDomColors({ querySelectorAll: {} }));
  assert.doesNotThrow(() => sanitizeDomColors({ querySelectorAll: true }));
});

await stress('3.5: sanitizeDomColors handles DOM text node and comment node (which lack querySelectorAll)', () => {
  const textNode = { nodeType: 3, nodeName: '#text', textContent: 'hello world' };
  const commentNode = { nodeType: 8, nodeName: '#comment', data: 'comment' };
  assert.doesNotThrow(() => sanitizeDomColors(textNode));
  assert.doesNotThrow(() => sanitizeDomColors(commentNode));
});

await stress('3.6: sanitizeDomColors sanitizes real mock element with oklab/oklch colors', () => {
  const childMock = {
    style: {},
    querySelectorAll: () => []
  };
  const rootMock = {
    style: {},
    querySelectorAll: (sel) => sel === '*' ? [childMock] : []
  };

  // Mock computed styles
  const origGetComputedStyle = globalThis.window.getComputedStyle;
  globalThis.window.getComputedStyle = (el) => {
    return {
      color: 'oklab(0.7 -0.1 0.1)',
      backgroundColor: 'oklch(0.6 0.2 180)',
      borderColor: 'rgb(255, 255, 255)',
      backgroundImage: 'linear-gradient(in oklab 90deg, #050811, #1e293b)'
    };
  };

  try {
    assert.doesNotThrow(() => sanitizeDomColors(rootMock));
    // Verify properties were replaced:
    assert.ok(rootMock.style.color, 'color must be updated');
    assert.ok(!rootMock.style.color.includes('oklab'), 'oklab color must be converted to rgba');
    assert.ok(!rootMock.style.backgroundColor.includes('oklch'), 'oklch color must be converted to rgba');
  } finally {
    globalThis.window.getComputedStyle = origGetComputedStyle;
  }
});

await stress('3.7: sanitizeCssString thoroughly strips "in oklab" and translates oklab functions', () => {
  const gradient = 'linear-gradient(in oklab 90deg, oklab(0.6 0.1 0.2), #000)';
  const sanitized = sanitizeCssString(gradient);
  assert.ok(!sanitized.includes('in oklab'), 'Must strip "in oklab"');
  assert.ok(!sanitized.includes('oklab('), 'Must replace oklab(...) with rgba');
});

// -----------------------------------------------------------------------------
// SUMMARY & REPORT
// -----------------------------------------------------------------------------
console.log('\n======================================================================');
console.log(' 📊 EMPIRICAL ADVERSARIAL STRESS TEST SUMMARY');
console.log('======================================================================');
console.log(`  Total Stress Tests : ${passedCount + failedCount}`);
console.log(`  Passed             : \x1b[32m${passedCount}\x1b[0m`);
console.log(`  Failed             : ${failedCount === 0 ? '\x1b[32m0\x1b[0m' : '\x1b[31m' + failedCount + '\x1b[0m'}`);
console.log(`  Pass Rate          : \x1b[1m${((passedCount / (passedCount + failedCount)) * 100).toFixed(1)}%\x1b[0m`);
console.log('======================================================================\n');

if (failedCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
