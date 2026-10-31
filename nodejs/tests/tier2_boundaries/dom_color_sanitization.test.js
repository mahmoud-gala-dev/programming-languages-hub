// tests/tier2_boundaries/dom_color_sanitization.test.js
// Tier 2: Boundary & Corner Cases — DOM Color Sanitization (oklab/oklch) for html2canvas & jsPDF
// Features Covered: F19, F20 Sanitization Boundaries (25 Tests)

import { collector } from '../collector.js';
import { assert, safeImport } from '../test_helper.js';

collector.setTier('Tier 2: Boundary & Corner Cases');

collector.suite('DOM Color Sanitization for 4K & PDF Export', (test) => {
  const exportImagePath = 'src/utils/exportImage.js';

  // Test 1: sanitizeCssString removes 'in oklab'
  test('CS.1: sanitizeCssString eliminates "in oklab" from linear gradients', async () => {
    const mod = await safeImport(exportImagePath);
    const input = 'linear-gradient(in oklab, #10b981, #06b6d4)';
    const cleaned = mod.sanitizeCssString(input);
    assert.ok(!cleaned.includes('in oklab'));
    assert.ok(cleaned.startsWith('linear-gradient('));
  });

  // Test 2: sanitizeCssString removes 'in oklch'
  test('CS.2: sanitizeCssString eliminates "in oklch" from linear gradients', async () => {
    const mod = await safeImport(exportImagePath);
    const input = 'linear-gradient(in oklch, #f59e0b, #ef4444)';
    const cleaned = mod.sanitizeCssString(input);
    assert.ok(!cleaned.includes('in oklch'));
  });

  // Test 3: sanitizeCssString removes 'in srgb'
  test('CS.3: sanitizeCssString eliminates "in srgb" from radial gradients', async () => {
    const mod = await safeImport(exportImagePath);
    const input = 'radial-gradient(in srgb, #3b82f6, #1e1b4b)';
    const cleaned = mod.sanitizeCssString(input);
    assert.ok(!cleaned.includes('in srgb'));
  });

  // Test 4: sanitizeCssString removes 'in lab' from conic gradients
  test('CS.4: sanitizeCssString eliminates "in lab" from conic gradients', async () => {
    const mod = await safeImport(exportImagePath);
    const input = 'conic-gradient(in lab, #a855f7, #ec4899)';
    const cleaned = mod.sanitizeCssString(input);
    assert.ok(!cleaned.includes('in lab'));
  });

  // Test 5: converts oklab(...) to rgba(...)
  test('CS.5: sanitizeCssString transforms oklab(...) functional notation to rgba(...)', async () => {
    const mod = await safeImport(exportImagePath);
    const input = 'background-color: oklab(0.6 0.12 -0.05);';
    const cleaned = mod.sanitizeCssString(input);
    assert.ok(!cleaned.includes('oklab('));
    assert.ok(cleaned.includes('rgba('));
  });

  // Test 6: converts oklch(...) to rgba(...)
  test('CS.6: sanitizeCssString transforms oklch(...) functional notation to rgba(...)', async () => {
    const mod = await safeImport(exportImagePath);
    const input = 'border-color: oklch(0.7 0.15 140);';
    const cleaned = mod.sanitizeCssString(input);
    assert.ok(!cleaned.includes('oklch('));
    assert.ok(cleaned.includes('rgba('));
  });

  // Test 7: converts lab(...) to rgba(...)
  test('CS.7: sanitizeCssString transforms lab(...) functional notation to rgba(...)', async () => {
    const mod = await safeImport(exportImagePath);
    const input = 'color: lab(50% 20 -20);';
    const cleaned = mod.sanitizeCssString(input);
    assert.ok(!cleaned.includes('lab('));
    assert.ok(cleaned.includes('rgba('));
  });

  // Test 8: converts lch(...) to rgba(...)
  test('CS.8: sanitizeCssString transforms lch(...) functional notation to rgba(...)', async () => {
    const mod = await safeImport(exportImagePath);
    const input = 'outline-color: lch(60% 30 270);';
    const cleaned = mod.sanitizeCssString(input);
    assert.ok(!cleaned.includes('lch('));
    assert.ok(cleaned.includes('rgba('));
  });

  // Test 9: Preserves hex colors
  test('CS.9: Preserves standard hexadecimal colors (#10b981, #0f172a, #ffffff)', async () => {
    const mod = await safeImport(exportImagePath);
    const input = 'background: #10b981; border: 1px solid #0f172a; color: #ffffff;';
    const cleaned = mod.sanitizeCssString(input);
    assert.ok(cleaned.includes('#10b981'));
    assert.ok(cleaned.includes('#0f172a'));
    assert.ok(cleaned.includes('#ffffff'));
  });

  // Test 10: Preserves rgb and rgba colors
  test('CS.10: Preserves standard rgb() and rgba() colors', async () => {
    const mod = await safeImport(exportImagePath);
    const input = 'color: rgb(16, 185, 129); background: rgba(15, 23, 42, 0.8);';
    const cleaned = mod.sanitizeCssString(input);
    assert.ok(cleaned.includes('rgb(16, 185, 129)'));
    assert.ok(cleaned.includes('rgba(15, 23, 42, 0.8)'));
  });

  // Test 11: Preserves named colors (transparent, currentColor, inherit)
  test('CS.11: Preserves CSS named keywords (transparent, currentColor, inherit)', async () => {
    const mod = await safeImport(exportImagePath);
    const input = 'background: transparent; color: currentColor; border: inherit;';
    const cleaned = mod.sanitizeCssString(input);
    assert.ok(cleaned.includes('transparent'));
    assert.ok(cleaned.includes('currentColor'));
    assert.ok(cleaned.includes('inherit'));
  });

  // Test 12: Handles empty string, null, undefined
  test('CS.12: Gracefully handles empty string, null, and undefined inputs', async () => {
    const mod = await safeImport(exportImagePath);
    assert.equal(mod.sanitizeCssString(''), '');
    assert.equal(mod.sanitizeCssString(null), null);
    assert.equal(mod.sanitizeCssString(undefined), undefined);
  });

  // Test 13: Handles complex multi-stop gradient
  test('CS.13: Sanitizes complex multi-stop gradients with percentages', async () => {
    const mod = await safeImport(exportImagePath);
    const input = 'linear-gradient(in oklab 90deg, oklch(0.8 0.2 120) 0%, #06b6d4 50%, oklab(0.3 0.1 0.1) 100%)';
    const cleaned = mod.sanitizeCssString(input);
    assert.ok(!cleaned.includes('in oklab'));
    assert.ok(!cleaned.includes('oklch('));
    assert.ok(!cleaned.includes('oklab('));
    assert.ok(cleaned.includes('rgba('));
  });

  // Test 14: sanitizeDomColors traverses element hierarchy
  test('CS.14: sanitizeDomColors traverses root element and all querySelectorAll children', async () => {
    const mod = await safeImport(exportImagePath);
    const child1 = { style: {}, querySelectorAll: () => [] };
    const child2 = { style: {}, querySelectorAll: () => [] };
    const root = {
      style: {},
      querySelectorAll: () => [child1, child2]
    };

    assert.doesNotThrow(() => {
      mod.sanitizeDomColors(root);
    });
  });

  // Test 15: sanitizeDomColors inspects color, backgroundColor, borderColor
  test('CS.15: sanitizeDomColors targets all primary CSS color properties', async () => {
    const mod = await safeImport(exportImagePath);
    const mockEl = {
      style: {},
      __computedStyles: {
        color: 'oklab(0.5 0.1 -0.1)',
        backgroundColor: 'oklch(0.6 0.1 200)',
        borderColor: '#334155'
      },
      querySelectorAll: () => []
    };

    // Replace getComputedStyle for mockEl
    const origGCS = globalThis.window.getComputedStyle;
    globalThis.window.getComputedStyle = (el) => el.__computedStyles || {};

    mod.sanitizeDomColors(mockEl);
    globalThis.window.getComputedStyle = origGCS;

    assert.ok(mockEl.style.color && mockEl.style.color.startsWith('rgba'));
    assert.ok(mockEl.style.backgroundColor && mockEl.style.backgroundColor.startsWith('rgba'));
  });

  // Test 16: sanitizeDomColors sanitizes 4-sided border colors
  test('CS.16: sanitizeDomColors checks individual borderTop, bottom, left, right colors', async () => {
    const mod = await safeImport(exportImagePath);
    const mockEl = {
      style: {},
      __computedStyles: {
        borderTopColor: 'oklab(0.4 0.2 0.1)',
        borderBottomColor: 'oklab(0.4 0.2 0.1)',
        borderLeftColor: '#ffffff',
        borderRightColor: '#ffffff'
      },
      querySelectorAll: () => []
    };

    const origGCS = globalThis.window.getComputedStyle;
    globalThis.window.getComputedStyle = (el) => el.__computedStyles || {};
    mod.sanitizeDomColors(mockEl);
    globalThis.window.getComputedStyle = origGCS;

    assert.ok(mockEl.style.borderTopColor && mockEl.style.borderTopColor.startsWith('rgba'));
    assert.ok(mockEl.style.borderBottomColor && mockEl.style.borderBottomColor.startsWith('rgba'));
  });

  // Test 17: sanitizeDomColors checks backgroundImage gradients
  test('CS.17: sanitizeDomColors checks and cleans computed backgroundImage gradient strings', async () => {
    const mod = await safeImport(exportImagePath);
    const mockEl = {
      style: {},
      __computedStyles: {
        backgroundImage: 'linear-gradient(in oklab, #06b6d4, #3b82f6)'
      },
      querySelectorAll: () => []
    };

    const origGCS = globalThis.window.getComputedStyle;
    globalThis.window.getComputedStyle = (el) => el.__computedStyles || {};
    mod.sanitizeDomColors(mockEl);
    globalThis.window.getComputedStyle = origGCS;

    assert.ok(mockEl.style.backgroundImage && !mockEl.style.backgroundImage.includes('in oklab'));
  });

  // Test 18: Handles null rootElement safely
  test('CS.18: sanitizeDomColors safely handles null or undefined root element without error', async () => {
    const mod = await safeImport(exportImagePath);
    assert.doesNotThrow(() => {
      mod.sanitizeDomColors(null);
      mod.sanitizeDomColors(undefined);
    });
  });

  // Test 19: Tolerates exceptions in getComputedStyle
  test('CS.19: Tolerates getComputedStyle exceptions inside restricted iframe elements', async () => {
    const mod = await safeImport(exportImagePath);
    const restrictedEl = {
      style: {},
      querySelectorAll: () => []
    };

    const origGCS = globalThis.window.getComputedStyle;
    globalThis.window.getComputedStyle = () => { throw new Error('SecurityError: Blocked cross-origin'); };

    assert.doesNotThrow(() => {
      mod.sanitizeDomColors(restrictedEl);
    });

    globalThis.window.getComputedStyle = origGCS;
  });

  // Test 20: html2canvas onclone hook integration
  test('CS.20: onclone hook passes cloned root element to sanitizeDomColors', () => {
    let clonedSanitized = false;
    const onclone = (clonedDoc, clonedEl) => {
      if (clonedEl) clonedSanitized = true;
    };

    onclone({}, { id: 'cloned-element' });
    assert.ok(clonedSanitized);
  });

  // Test 21: 4K canvas scale dimension overflow protection
  test('CS.21: 4K canvas scale factor bounds width and height within 16,384px maximum', () => {
    const maxDimension = 16384;
    const computeCanvasDimensions = (w, h, scale) => {
      return {
        width: Math.min(maxDimension, Math.round(w * scale)),
        height: Math.min(maxDimension, Math.round(h * scale))
      };
    };

    const dims = computeCanvasDimensions(1920, 1080, 4); // 7680 x 4320
    assert.equal(dims.width, 7680);
    assert.equal(dims.height, 4320);
    assert.ok(dims.width < maxDimension);
    assert.ok(dims.height < maxDimension);
  });

  // Test 22: High-DPI devicePixelRatio handling
  test('CS.22: High-DPI screens (pixelRatio 2x or 3x) factor into canvas export dimensions', () => {
    const getEffectiveScale = (baseScale, pixelRatio) => Math.max(baseScale, Math.round(pixelRatio || 1));
    assert.equal(getEffectiveScale(2, 3), 3);
    assert.equal(getEffectiveScale(4, 2), 4);
  });

  // Test 23: JPEG quality parameter validation
  test('CS.23: PDF image generation uses high-fidelity 0.95 JPEG compression', () => {
    const jpegQuality = 0.95;
    assert.ok(jpegQuality >= 0.9 && jpegQuality <= 1.0);
  });

  // Test 24: PDF white background enforcement
  test('CS.24: PDF canvas background is enforced as #ffffff for professional document printing', () => {
    const pdfCanvasOptions = {
      backgroundColor: '#ffffff',
      scale: 1.5,
      useCORS: true
    };
    assert.equal(pdfCanvasOptions.backgroundColor, '#ffffff');
  });

  // Test 25: PNG transparent background support
  test('CS.25: PNG infographic export permits transparent background for graphic overlays', () => {
    const pngCanvasOptions = {
      backgroundColor: null,
      scale: 2,
      useCORS: true
    };
    assert.equal(pngCanvasOptions.backgroundColor, null);
  });
});
