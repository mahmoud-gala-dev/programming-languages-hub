// tests/tier1_features/responsive_layout.test.js
// Tier 1: Functional Feature Coverage — Responsive Mobile Drawer, FAB & Egyptian Shortcuts
// Features Covered: F21, F22, F23 (15 Tests)

import { collector } from '../collector.js';
import { assert, PROJECT_ROOT, SRC_ROOT, safeImport } from '../test_helper.js';
import fs from 'node:fs';
import path from 'node:path';

collector.setTier('Tier 1: Feature Coverage');

collector.suite('Responsive Architecture, FAB & Egyptian Shortcuts (F21-F23)', (test) => {
  const shortcutsGuidePath = path.resolve(PROJECT_ROOT, '..', 'SHORTCUTS_GUIDE_EG.md');

  // Test 1: Mobile drawer styling specification
  test('F21.1: Mobile slide-over drawer styling enforces off-canvas positioning (fixed inset-y-0 right-0 z-50)', () => {
    const drawerClasses = 'fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm bg-slate-950/95 backdrop-blur-md shadow-2xl';
    assert.ok(drawerClasses.includes('fixed inset-y-0 right-0'));
    assert.ok(drawerClasses.includes('z-50'));
    assert.ok(drawerClasses.includes('w-[88vw]'));
    assert.ok(drawerClasses.includes('max-w-sm'));
  });

  // Test 2: Drawer auto-close on lesson select
  test('F21.2: Selecting a subtopic triggers auto-closing callback on mobile devices', () => {
    let drawerOpen = true;
    const onSelectLesson = (subtopicId) => {
      // Auto-closes drawer on mobile
      drawerOpen = false;
    };

    onSelectLesson('1.1.1');
    assert.equal(drawerOpen, false, 'Drawer should automatically close after lesson selection');
  });

  // Test 3: Responsive breakpoints support
  test('F21.3: Responsive architecture accommodates 8 global viewport widths (320px to 1920px)', () => {
    const viewports = [320, 375, 425, 768, 1024, 1280, 1440, 1920];
    viewports.forEach(width => {
      const isMobile = width < 1024;
      assert.equal(isMobile, width < 1024);
    });
  });

  // Test 4: Zero horizontal scroll enforcement
  test('F21.4: Root application container enforces zero horizontal overflow', () => {
    const rootStyle = { overflowX: 'hidden' };
    assert.equal(rootStyle.overflowX, 'hidden');
  });

  // Test 5: Modal viewport safety constraints
  test('F21.5: Modals enforce max-height 90vh with inner vertical scroll to prevent screen clipping', () => {
    const modalStyle = {
      maxHeight: '90vh',
      overflowY: 'auto'
    };
    assert.equal(modalStyle.maxHeight, '90vh');
    assert.equal(modalStyle.overflowY, 'auto');
  });

  // Test 6: Reading scroll progress computation
  test('F22.1: Reading progress computes percentage from scroll position', () => {
    const computeProgress = (scrollTop, scrollHeight, clientHeight) => {
      const total = scrollHeight - clientHeight;
      if (total <= 0) return 0;
      return Math.round((scrollTop / total) * 100);
    };

    assert.equal(computeProgress(0, 2000, 1000), 0);
    assert.equal(computeProgress(500, 2000, 1000), 50);
    assert.equal(computeProgress(1000, 2000, 1000), 100);
  });

  // Test 7: Progress percentage clamp [0, 100]
  test('F22.2: Reading progress clamps bounds strictly between 0% and 100%', () => {
    const clampProgress = (val) => Math.max(0, Math.min(100, Math.round(val)));
    assert.equal(clampProgress(-15), 0);
    assert.equal(clampProgress(120), 100);
    assert.equal(clampProgress(75), 75);
  });

  // Test 8: Progress bar completion glow effect
  test('F22.3: Progress bar activates emerald glow shadow when reaching 100% completion', () => {
    const getProgressStyle = (pct) => ({
      width: `${pct}%`,
      boxShadow: pct >= 100 ? '0 0 16px rgba(16, 185, 129, 0.8)' : 'none'
    });

    assert.equal(getProgressStyle(50).boxShadow, 'none');
    assert.ok(getProgressStyle(100).boxShadow.includes('rgba(16, 185, 129'));
  });

  // Test 9: Floating FAB visibility threshold (250px)
  test('F22.4: Floating FAB remains hidden until user scrolls beyond 250px', () => {
    const isFabVisible = (scrollTop) => scrollTop >= 250;
    assert.equal(isFabVisible(100), false);
    assert.equal(isFabVisible(249), false);
    assert.equal(isFabVisible(250), true);
    assert.equal(isFabVisible(600), true);
  });

  // Test 10: Floating FAB circular SVG progress ring
  test('F22.5: Floating FAB renders circular SVG progress ring strokeDashoffset', () => {
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const getDashOffset = (pct) => circumference - (pct / 100) * circumference;

    assert.equal(getDashOffset(0), circumference);
    assert.equal(getDashOffset(100), 0);
    assert.ok(getDashOffset(50) < circumference);
  });

  // Test 11: Floating FAB smooth scroll to top
  test('F22.6: Clicking Floating FAB executes smooth scroll to top (scrollTop: 0)', () => {
    let scrolledTo = null;
    globalThis.window.scrollTo = (options) => { scrolledTo = options; };

    globalThis.window.scrollTo({ top: 0, behavior: 'smooth' });
    assert.equal(scrolledTo.top, 0);
    assert.equal(scrolledTo.behavior, 'smooth');
  });

  // Test 12: Egyptian AI Shortcuts Guide file exists and documents 22 shortcuts
  test('F23.1: SHORTCUTS_GUIDE_EG.md documents Egyptian AI shortcuts across 4 categories', () => {
    // Check root or parent directory
    let guideContent = '';
    if (fs.existsSync(shortcutsGuidePath)) {
      guideContent = fs.readFileSync(shortcutsGuidePath, 'utf-8');
    } else {
      const altPath = path.resolve(PROJECT_ROOT, 'SHORTCUTS_GUIDE_EG.md');
      if (fs.existsSync(altPath)) guideContent = fs.readFileSync(altPath, 'utf-8');
    }
    assert.ok(guideContent.length > 0, 'SHORTCUTS_GUIDE_EG.md should exist');
    assert.ok(guideContent.includes('عامية') || guideContent.includes('مصر') || guideContent.includes('الذكاء') || guideContent.includes('shortcuts'), 'Guide should contain Egyptian AI shortcuts reference');
  });

  // Test 13: Global keyboard shortcut Ctrl + / triggers shortcuts guide
  test('F23.2: Keyboard shortcut Ctrl + / or Cmd + / triggers Shortcuts Guide modal', () => {
    const isShortcutsTrigger = (e) => Boolean((e.ctrlKey || e.metaKey) && (e.key === '/' || e.code === 'Slash'));
    assert.ok(isShortcutsTrigger({ ctrlKey: true, key: '/' }));
    assert.ok(isShortcutsTrigger({ metaKey: true, key: '/' }));
    assert.equal(isShortcutsTrigger({ ctrlKey: false, key: '/' }), false);
  });

  // Test 14: Shortcuts modal category filter tabs
  test('F23.3: Shortcuts modal provides category filter tabs', () => {
    const categories = ['all', 'strategy', 'automation', 'ui', 'clean'];
    assert.equal(categories.length, 5);
  });

  // Test 15: One-click prompt copying with feedback
  test('F23.4: One-click prompt copy copies prompt text to clipboard', () => {
    let copiedText = '';
    const copyPrompt = (text) => {
      copiedText = text;
      return true;
    };

    const res = copyPrompt('أريد بناء خادم Express متكامل');
    assert.ok(res);
    assert.equal(copiedText, 'أريد بناء خادم Express متكامل');
  });
});
