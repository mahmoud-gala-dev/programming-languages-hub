// tests/test_helper.js
// Opaque-Box E2E Test Helper & Mocking Harness
// Provides assertion utilities, mock browser environments, and safe module loading.

import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import React from 'react';

globalThis.React = React;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const PROJECT_ROOT = path.resolve(__dirname, '..');
export const SRC_ROOT = path.resolve(PROJECT_ROOT, 'src');

/**
 * In-memory Mock LocalStorage
 */
export class MockLocalStorage {
  constructor() {
    this.store = new Map();
  }
  getItem(key) {
    return this.store.has(String(key)) ? this.store.get(String(key)) : null;
  }
  setItem(key, value) {
    this.store.set(String(key), String(value));
  }
  removeItem(key) {
    this.store.delete(String(key));
  }
  clear() {
    this.store.clear();
  }
  get length() {
    return this.store.size;
  }
  key(index) {
    return Array.from(this.store.keys())[index] || null;
  }
}

/**
 * Setup Global Mock Browser Environment (localStorage, window, document, speech, canvas)
 */
export function setupMockEnvironment() {
  const mockStorage = new MockLocalStorage();
  
  if (typeof globalThis.localStorage === 'undefined') {
    globalThis.localStorage = mockStorage;
  }

  if (typeof globalThis.window === 'undefined') {
    globalThis.window = {
      localStorage: mockStorage,
      speechSynthesis: {
        speaking: false,
        paused: false,
        pending: false,
        speak: (utterance) => {
          if (utterance && utterance.onend) {
            setTimeout(utterance.onend, 10);
          }
        },
        cancel: function() {
          this.speaking = false;
        },
        pause: () => {},
        resume: () => {},
        getVoices: () => [
          { lang: 'ar-SA', name: 'Arabic Voice', default: true },
          { lang: 'en-US', name: 'English Voice', default: false }
        ]
      },
      matchMedia: (query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false
      }),
      scrollTo: () => {},
      getComputedStyle: (el) => {
        return (el && el.__computedStyles) || {
          color: 'rgba(255, 255, 255, 1)',
          backgroundColor: 'rgba(15, 23, 42, 1)',
          borderColor: 'rgba(51, 65, 85, 1)',
          borderTopColor: 'rgba(51, 65, 85, 1)',
          borderBottomColor: 'rgba(51, 65, 85, 1)',
          borderLeftColor: 'rgba(51, 65, 85, 1)',
          borderRightColor: 'rgba(51, 65, 85, 1)',
          outlineColor: 'rgba(16, 185, 129, 1)',
          backgroundImage: 'none'
        };
      },
      devicePixelRatio: 2,
      atob: globalThis.atob ? globalThis.atob.bind(globalThis) : (str) => Buffer.from(str, 'base64').toString('binary'),
      btoa: globalThis.btoa ? globalThis.btoa.bind(globalThis) : (str) => Buffer.from(str, 'binary').toString('base64')
    };
  } else {
    if (!globalThis.window.atob && globalThis.atob) globalThis.window.atob = globalThis.atob.bind(globalThis);
    if (!globalThis.window.btoa && globalThis.btoa) globalThis.window.btoa = globalThis.btoa.bind(globalThis);
  }

  const mockLocation = {
    href: 'http://localhost:5173/',
    origin: 'http://localhost:5173',
    protocol: 'http:',
    host: 'localhost:5173',
    hostname: 'localhost',
    port: '5173',
    pathname: '/',
    search: '',
    hash: ''
  };

  if (typeof globalThis.location === 'undefined') {
    globalThis.location = mockLocation;
  }
  globalThis.window.location = globalThis.location || mockLocation;

  if (typeof globalThis.document === 'undefined') {
    globalThis.document = {
      location: mockLocation,
      documentElement: {
        style: {},
        classList: {
          contains: () => true,
          add: () => {},
          remove: () => {}
        },
        requestFullscreen: async () => {},
        scrollHeight: 2000,
        clientHeight: 800,
        scrollTop: 0
      },
      body: {
        appendChild: (node) => node,
        removeChild: (node) => node
      },
      createElement: (tag) => {
        const style = {};
        return {
          tagName: tag.toUpperCase(),
          style,
          width: 0,
          height: 0,
          querySelectorAll: () => [],
          getContext: (type) => ({
            clearRect: () => {},
            fillRect: () => {},
            getImageData: () => ({ data: [16, 185, 129, 255] }),
            fillStyle: '#000000'
          })
        };
      },
      fullscreenElement: null,
      exitFullscreen: async () => {
        globalThis.document.fullscreenElement = null;
      }
    };
  } else {
    globalThis.document.location = globalThis.location || mockLocation;
    if (globalThis.document.fullscreenElement === undefined) {
      globalThis.document.fullscreenElement = null;
    }
  }

  if (typeof globalThis.SpeechSynthesisUtterance === 'undefined') {
    globalThis.SpeechSynthesisUtterance = class {
      constructor(text) {
        this.text = text;
        this.lang = 'en-US';
        this.rate = 1.0;
        this.pitch = 1.0;
        this.voice = null;
        this.onend = null;
        this.onerror = null;
      }
    };
  }

  globalThis.window.document = globalThis.document;
  return { mockStorage };
}

let transformWithOxcFn = null;

/**
 * Safe Dynamic Import helper that fails gracefully if an in-progress milestone module does not exist yet.
 * Automatically transpiles JSX files on the fly using Vite's oxc compiler.
 */
async function ensureTranspiled(filePath, visited = new Set()) {
  if (visited.has(filePath)) {
    const rel = path.relative(SRC_ROOT, filePath);
    const cacheDir = path.resolve(__dirname, '.cache');
    return path.resolve(cacheDir, rel).replace(/\.jsx$/, '.mjs');
  }
  visited.add(filePath);

  const code = fs.readFileSync(filePath, 'utf-8');
  // Scan for relative imports
  const importRegex = /from\s+['"](\.[^'"]+?)['"]/g;
  let match;
  while ((match = importRegex.exec(code)) !== null) {
    const importRel = match[1];
    let depPath = path.resolve(path.dirname(filePath), importRel);
    if (!depPath.endsWith('.jsx') && fs.existsSync(depPath + '.jsx')) {
      depPath = depPath + '.jsx';
    }
    if (fs.existsSync(depPath) && depPath.endsWith('.jsx')) {
      await ensureTranspiled(depPath, visited);
    }
  }

  const res = await transformWithOxcFn(code, filePath, { jsx: {} });
  const rel = path.relative(SRC_ROOT, filePath);
  const cacheDir = path.resolve(__dirname, '.cache');
  const cacheFile = path.resolve(cacheDir, rel).replace(/\.jsx$/, '.mjs');
  fs.mkdirSync(path.dirname(cacheFile), { recursive: true });

  const rewrittenCode = res.code.replace(/from\s+['"](\.[^'"]+?)['"]/g, (m, p1) => {
    let clean = p1;
    if (clean.endsWith('.jsx')) clean = clean.slice(0, -4);
    const candidateJsx = path.resolve(path.dirname(filePath), clean + '.jsx');
    if (fs.existsSync(candidateJsx)) {
      return `from '${clean}.mjs'`;
    }
    const candidateJs = path.resolve(path.dirname(filePath), p1 + (p1.endsWith('.js') ? '' : '.js'));
    if (fs.existsSync(candidateJs)) {
      return `from '${pathToFileURL(candidateJs).href}'`;
    }
    return m;
  });

  fs.writeFileSync(cacheFile, rewrittenCode, 'utf-8');
  return cacheFile;
}

/**
 * Safe Dynamic Import helper that fails gracefully if an in-progress milestone module does not exist yet.
 * Automatically transpiles JSX files on the fly using Vite's oxc compiler.
 */
export async function safeImport(srcPath) {
  const fullPath = path.isAbsolute(srcPath) ? srcPath : path.resolve(PROJECT_ROOT, srcPath);
  if (!fs.existsSync(fullPath)) {
    throw new assert.AssertionError({
      message: `Required module does not exist on disk: ${srcPath}`,
      actual: false,
      expected: true
    });
  }

  if (fullPath.endsWith('.json')) {
    try {
      return await import(pathToFileURL(fullPath).href, { with: { type: 'json' } });
    } catch {
      const parsed = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      return { default: parsed, ...parsed };
    }
  }

  if (fullPath.endsWith('.jsx')) {
    if (!transformWithOxcFn) {
      try {
        const vite = await import('vite');
        transformWithOxcFn = vite.transformWithOxc;
      } catch {
        transformWithOxcFn = null;
      }
    }

    if (transformWithOxcFn) {
      const cacheFile = await ensureTranspiled(fullPath);
      return import(pathToFileURL(cacheFile).href);
    }
  }

  return import(pathToFileURL(fullPath).href);
}

/**
 * Mock Fetch helper for intercepting Gemini API or network endpoints
 */
export function createMockFetch(handlers = {}) {
  const originalFetch = globalThis.fetch;
  
  const mockFetch = async (url, options = {}) => {
    const urlStr = String(url);
    
    for (const [pattern, handler] of Object.entries(handlers)) {
      if (urlStr.includes(pattern)) {
        return handler(urlStr, options);
      }
    }

    // Default mock response for Google Generative Language API
    if (urlStr.includes('generativelanguage.googleapis.com')) {
      if (urlStr.includes('models') && !urlStr.includes('generateContent')) {
        return {
          ok: true,
          status: 200,
          json: async () => ({ models: [{ name: 'models/gemini-flash-latest' }] })
        };
      }
      return {
        ok: true,
        status: 200,
        json: async () => ({
          candidates: [
            {
              content: {
                parts: [
                  { text: 'استجابة محاكاة نموذج Gemini التعليمي بنجاح' }
                ]
              }
            }
          ]
        })
      };
    }

    return {
      ok: true,
      status: 200,
      json: async () => ({})
    };
  };

  mockFetch.restore = () => {
    globalThis.fetch = originalFetch;
  };

  return mockFetch;
}

export { assert };
