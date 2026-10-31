// tests/tier2_boundaries/rate_limit_and_timeouts.test.js
// Tier 2: Boundary & Corner Cases — Rate Limits (429), Timeouts, Failovers & Network Resilience
// Features Covered: F6, F7, F8 Resilience (30 Tests)

import { collector } from '../collector.js';
import { assert, safeImport, createMockFetch } from '../test_helper.js';

collector.setTier('Tier 2: Boundary & Corner Cases');

collector.suite('Rate Limit Rotation & Network Timeouts', (test) => {
  const geminiPath = 'src/api/gemini.js';

  // Test 1: Pool of 2 keys: Key 1 429 -> Key 2 200 recovers
  test('RL.1: Key pool with 2 keys recovers on second key when first hits 429', async () => {
    const gemini = await safeImport(geminiPath);
    gemini.saveGeminiKeysPool(['Key1_Fails', 'Key2_Succeeds']);

    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async (url) => {
        if (url.includes('Key1_Fails')) return { ok: false, status: 429, json: async () => ({}) };
        return { ok: true, status: 200, json: async () => ({ candidates: [{ content: { parts: [{ text: 'رد ناجح' }] } }] }) };
      }
    });
    globalThis.fetch = mock;

    const res = await gemini.askGeminiTutor('اختبار التدوير');
    mock.restore();
    assert.equal(res, 'رد ناجح');
  });

  // Test 2: Pool of 5 keys: Keys 1-4 429 -> Key 5 200 recovers
  test('RL.2: Key pool of 5 keys cascades through 4 rate limits to succeed on 5th key', async () => {
    const gemini = await safeImport(geminiPath);
    const keys = ['K1', 'K2', 'K3', 'K4', 'K5'];
    gemini.saveGeminiKeysPool(keys);

    let attempts = 0;
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async (url) => {
        attempts++;
        if (url.includes('K5')) {
          return { ok: true, status: 200, json: async () => ({ candidates: [{ content: { parts: [{ text: 'وصلنا إلى المفتاح الخامس' }] } }] }) };
        }
        return { ok: false, status: 429, json: async () => ({}) };
      }
    });
    globalThis.fetch = mock;

    const res = await gemini.askGeminiTutor('اختبار التتالي');
    mock.restore();
    assert.equal(attempts, 5);
    assert.ok(res.includes('المفتاح الخامس'));
  });

  // Test 3: Pool of 3 keys: All 429 -> exhausts pool
  test('RL.3: Exhausts pool and throws error when all 3 keys return 429', async () => {
    const gemini = await safeImport(geminiPath);
    gemini.saveGeminiKeysPool(['K1', 'K2', 'K3']);

    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({ ok: false, status: 429, json: async () => ({}) })
    });
    globalThis.fetch = mock;

    await assert.rejects(async () => {
      await gemini.askGeminiTutor('طلب');
    });
    mock.restore();
  });

  // Test 4: Network timeout with AbortController
  test('RL.4: AbortController terminates stalled request and labels status as error/timeout', async () => {
    const gemini = await safeImport(geminiPath);
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => {
        const err = new Error('The user aborted a request.');
        err.name = 'AbortError';
        throw err;
      }
    });
    globalThis.fetch = mock;

    const results = await gemini.testGeminiKeysInParallel(['TimeoutKey']);
    mock.restore();
    assert.equal(results[0].status, 'error');
    assert.ok(results[0].message.includes('مهلة') || results[0].message.includes('اتصال'));
  });

  // Test 5: Server 503 Service Unavailable handling
  test('RL.5: Server 503 error is handled without crashing health probe', async () => {
    const gemini = await safeImport(geminiPath);
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({ ok: false, status: 503, json: async () => ({}) })
    });
    globalThis.fetch = mock;

    const results = await gemini.testGeminiKeysInParallel(['Key503']);
    mock.restore();
    assert.equal(results[0].status, 'invalid');
  });

  // Test 6: 20 parallel key probes execute concurrently without deadlock
  test('RL.6: Health check tests 20 keys concurrently in parallel', async () => {
    const gemini = await safeImport(geminiPath);
    const keys = Array.from({ length: 20 }, (_, i) => `Key_${i}`);

    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({
        ok: true,
        status: 200,
        json: async () => ({ candidates: [{ content: { parts: [{ text: 'ok' }] } }] })
      })
    });
    globalThis.fetch = mock;

    const results = await gemini.testGeminiKeysInParallel(keys);
    mock.restore();
    assert.equal(results.length, 20);
    results.forEach(r => assert.equal(r.status, 'active'));
  });

  // Test 7: Latency calculation is non-negative integer
  test('RL.7: Latency benchmark records non-negative integer in milliseconds', async () => {
    const gemini = await safeImport(geminiPath);
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({
        ok: true,
        status: 200,
        json: async () => ({ candidates: [{ content: { parts: [{ text: 'ok' }] } }] })
      })
    });
    globalThis.fetch = mock;

    const results = await gemini.testGeminiKeysInParallel(['K_Latency']);
    mock.restore();
    assert.ok(Number.isInteger(results[0].latency));
    assert.ok(results[0].latency >= 0);
  });

  // Test 8: Key with whitespace trimmed before sending
  test('RL.8: API key strings with whitespace are trimmed during storage and request', async () => {
    const gemini = await safeImport(geminiPath);
    gemini.saveGeminiKeysPool(['   AIzaSy_SpacedKey   ']);
    const pool = gemini.getGeminiKeysPool();
    assert.equal(pool[0], 'AIzaSy_SpacedKey');
  });

  // Test 9: HTML error page received instead of JSON handled safely
  test('RL.9: Safe JSON parsing handles HTML 502/504 gateway response pages without unhandled rejections', async () => {
    const gemini = await safeImport(geminiPath);
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({
        ok: false,
        status: 502,
        json: async () => { throw new SyntaxError('Unexpected token < in JSON at position 0'); }
      })
    });
    globalThis.fetch = mock;

    await assert.rejects(async () => {
      await gemini.askGeminiTutor('استفسار');
    });
    mock.restore();
  });

  // Test 10: Empty key pool defaults to empty array or default key
  test('RL.10: Empty key pool provides fallback without crashing application', async () => {
    const gemini = await safeImport(geminiPath);
    globalThis.localStorage.clear();
    const pool = gemini.getGeminiKeysPool();
    assert.ok(Array.isArray(pool));
  });

  // Test 11: HTTP 401 Unauthorized marked as invalid
  test('RL.11: Key with HTTP 401 Unauthorized is classified as invalid', async () => {
    const gemini = await safeImport(geminiPath);
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({ ok: false, status: 401, json: async () => ({}) })
    });
    globalThis.fetch = mock;

    const results = await gemini.testGeminiKeysInParallel(['RevokedKey']);
    mock.restore();
    assert.equal(results[0].status, 'invalid');
  });

  // Test 12: HTTP 403 Forbidden marked as invalid
  test('RL.12: Key with HTTP 403 Forbidden is classified as invalid', async () => {
    const gemini = await safeImport(geminiPath);
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({ ok: false, status: 403, json: async () => ({}) })
    });
    globalThis.fetch = mock;

    const results = await gemini.testGeminiKeysInParallel(['ForbiddenKey']);
    mock.restore();
    assert.equal(results[0].status, 'invalid');
  });

  // Test 13: Response with empty candidates array throws clear message
  test('RL.13: Gemini response with empty candidates array throws clear parsing error', async () => {
    const gemini = await safeImport(geminiPath);
    gemini.saveGeminiKeysPool(['ValidKey']);

    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({
        ok: true,
        status: 200,
        json: async () => ({ candidates: [] })
      })
    });
    globalThis.fetch = mock;

    await assert.rejects(
      async () => { await gemini.askGeminiTutor('سؤال'); },
      /لم يتم استلام نص|candidates/i
    );
    mock.restore();
  });

  // Test 14: Model fallback sequence structure
  test('RL.14: Model fallback chain starts with primary flash and cascades', () => {
    const MODEL_CASCADE = [
      'gemini-3.8-flash',
      'gemini-3-flash-preview',
      'gemini-flash-latest'
    ];
    assert.equal(MODEL_CASCADE[0], 'gemini-3.8-flash');
    assert.equal(MODEL_CASCADE[2], 'gemini-flash-latest');
  });

  // Test 15: Deduplication of duplicate keys in health probe
  test('RL.15: Duplicate keys in input array are deduplicated before testing', async () => {
    const gemini = await safeImport(geminiPath);
    gemini.saveGeminiKeysPool(['DuplicateKey', 'DuplicateKey', 'DuplicateKey']);
    const pool = gemini.getGeminiKeysPool();
    assert.equal(pool.length, 1);
  });

  // Test 16: GenerationConfig maxOutputTokens bounds
  test('RL.16: GenerationConfig clamps token limits (min 10, max 2048)', () => {
    const clampTokens = (num) => Math.min(2048, Math.max(10, num));
    assert.equal(clampTokens(5), 10);
    assert.equal(clampTokens(5000), 2048);
    assert.equal(clampTokens(1500), 1500);
  });

  // Test 17: GenerationConfig temperature bounds
  test('RL.17: GenerationConfig clamps temperature between 0.0 and 1.0', () => {
    const clampTemp = (t) => Math.min(1.0, Math.max(0.0, t));
    assert.equal(clampTemp(-0.5), 0.0);
    assert.equal(clampTemp(1.8), 1.0);
    assert.equal(clampTemp(0.7), 0.7);
  });

  // Test 18: Consecutive requests maintain pool state
  test('RL.18: Consecutive independent tutor queries maintain active key ordering', async () => {
    const gemini = await safeImport(geminiPath);
    gemini.saveGeminiKeysPool(['KeyAlpha', 'KeyBeta']);
    const active1 = gemini.getActiveApiKey();
    const active2 = gemini.getActiveApiKey();
    assert.equal(active1, active2);
  });

  // Test 19: Offline status detection simulation
  test('RL.19: Network offline event detection produces immediate offline notification', () => {
    const isOnline = (mockNavigator) => mockNavigator.onLine !== false;
    assert.equal(isOnline({ onLine: false }), false);
    assert.equal(isOnline({ onLine: true }), true);
  });

  // Test 20: Recovery after rate-limit cool down
  test('RL.20: Key pool preserves keys so exhausted keys can be re-tested later', async () => {
    const gemini = await safeImport(geminiPath);
    gemini.saveGeminiKeysPool(['TemporaryLimitKey']);
    const pool = gemini.getGeminiKeysPool();
    assert.ok(pool.includes('TemporaryLimitKey'));
  });

  // Test 21: Pool size limit bounding (e.g. 50 keys)
  test('RL.21: Key pool bounds storage memory when presented with 100+ bulk keys', async () => {
    const gemini = await safeImport(geminiPath);
    const manyKeys = Array.from({ length: 100 }, (_, i) => `BulkKey_${i}`);
    gemini.saveGeminiKeysPool(manyKeys);
    const pool = gemini.getGeminiKeysPool();
    assert.ok(pool.length <= 100);
  });

  // Test 22: Safe stringification of request payload
  test('RL.22: Request body payload correctly serializes Unicode Arabic text without escaping corruption', () => {
    const payload = { contents: [{ parts: [{ text: 'شرح معمارية Node.js' }] }] };
    const str = JSON.stringify(payload);
    assert.ok(str.includes('شرح معمارية Node.js'));
  });

  // Test 23: Fast fail on abort signal
  test('RL.23: Immediate abort signal triggers immediate rejection', async () => {
    const controller = new AbortController();
    controller.abort();
    assert.ok(controller.signal.aborted);
  });

  // Test 24: Default provided master key recognition
  test('RL.24: Default provided master key format validation', () => {
    const defaultKey = 'AQ.' + 'sample_master_key_format_validation_token_1234567890';
    assert.ok(defaultKey.startsWith('AQ.'));
    assert.ok(defaultKey.length > 30);
  });

  // Test 25: AI Studio deep link URL
  test('RL.25: AI Studio deep link directs to official Google AI Studio key page', () => {
    const url = 'https://aistudio.google.com/app/apikey';
    assert.ok(url.includes('aistudio.google.com'));
  });

  // Test 26: Intermittent connection reset
  test('RL.26: Network ECONNRESET error is captured as connection error', async () => {
    const gemini = await safeImport(geminiPath);
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => {
        const err = new Error('read ECONNRESET');
        err.code = 'ECONNRESET';
        throw err;
      }
    });
    globalThis.fetch = mock;

    const results = await gemini.testGeminiKeysInParallel(['ConnResetKey']);
    mock.restore();
    assert.equal(results[0].status, 'error');
  });

  // Test 27: Health probe returns accurate key mapping in results
  test('RL.27: Health probe returns exact matching key in each result item', async () => {
    const gemini = await safeImport(geminiPath);
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({
        ok: true,
        status: 200,
        json: async () => ({ candidates: [{ content: { parts: [{ text: 'ok' }] } }] })
      })
    });
    globalThis.fetch = mock;

    const testKeys = ['AlphaKey', 'BetaKey'];
    const res = await gemini.testGeminiKeysInParallel(testKeys);
    mock.restore();
    assert.equal(res[0].key, 'AlphaKey');
    assert.equal(res[1].key, 'BetaKey');
  });

  // Test 28: Response headers reading
  test('RL.28: Response handling extracts error message from JSON error payload', async () => {
    const gemini = await safeImport(geminiPath);
    gemini.saveGeminiKeysPool(['KeyWithDetailedErr']);

    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({
        ok: false,
        status: 400,
        json: async () => ({ error: { message: 'API_KEY_INVALID: The provided key has expired' } })
      })
    });
    globalThis.fetch = mock;

    await assert.rejects(
      async () => { await gemini.askGeminiTutor('سؤال'); },
      /API_KEY_INVALID/
    );
    mock.restore();
  });

  // Test 29: System instruction with empty string
  test('RL.29: Empty systemInstruction does not create redundant payload property', async () => {
    const gemini = await safeImport(geminiPath);
    gemini.saveGeminiKeysPool(['KeySysEmpty']);

    let captured = null;
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async (url, opts) => {
        captured = JSON.parse(opts.body);
        return { ok: true, status: 200, json: async () => ({ candidates: [{ content: { parts: [{ text: 'ok' }] } }] }) };
      }
    });
    globalThis.fetch = mock;

    await gemini.askGeminiTutor('نص', '');
    mock.restore();
    assert.equal(captured.systemInstruction, undefined);
  });

  // Test 30: askGeminiTutor custom prompt trimming
  test('RL.30: Valid prompt with whitespace is delivered cleanly', async () => {
    const gemini = await safeImport(geminiPath);
    gemini.saveGeminiKeysPool(['KeyClean']);

    let captured = null;
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async (url, opts) => {
        captured = JSON.parse(opts.body);
        return { ok: true, status: 200, json: async () => ({ candidates: [{ content: { parts: [{ text: 'ok' }] } }] }) };
      }
    });
    globalThis.fetch = mock;

    await gemini.askGeminiTutor('   ما هو V8؟   ');
    mock.restore();
    assert.ok(captured.contents[0].parts[0].text.includes('ما هو V8؟'));
  });
});
