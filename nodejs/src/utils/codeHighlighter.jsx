// src/utils/codeHighlighter.jsx
// محرك تلوين وتمييز الأكواد النحوي (Syntax Highlighting) لـ JavaScript و Node.js و TypeScript و JSON و Bash
import React from 'react';

const KEYWORDS = new Set([
  'import', 'export', 'from', 'default', 'const', 'let', 'var', 'function',
  'return', 'async', 'await', 'if', 'else', 'switch', 'case', 'break',
  'continue', 'try', 'catch', 'finally', 'throw', 'new', 'class', 'extends',
  'typeof', 'instanceof', 'for', 'while', 'do', 'in', 'of', 'yield',
  'type', 'interface', 'implements', 'declare', 'enum', 'public', 'private', 'protected'
]);

const NODE_BUILTINS = new Set([
  'require', 'module', 'exports', 'process', 'Buffer', '__dirname', '__filename',
  'global', 'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'setImmediate', 'clearImmediate',
  'console', 'Promise', 'fetch', 'JSON', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Map', 'Set',
  'fs', 'path', 'http', 'https', 'os', 'events', 'stream', 'crypto', 'util', 'url', 'child_process', 'cluster'
]);

const LITERALS = new Set(['true', 'false', 'null', 'undefined', 'NaN', 'Infinity']);

/**
 * دالة تلوين سطر كود واحد عبر تحليله إلى رموز مميزة
 */
export function highlightCodeLine(line) {
  if (!line) return <span>&nbsp;</span>;

  const trimmed = line.trim();

  // فحص التعليقات الكاملة (عربية أو إنجليزية)
  if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('<!--') || trimmed.startsWith('*') || trimmed.startsWith('#')) {
    return <span className="text-emerald-400 font-semibold">{line}</span>;
  }

  const tokenRegex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|#(?:[^\n]*)|`(?:\\.|[^`])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|<\/?[a-zA-Z0-9_\-]+(?:\s|>|\/)|[a-zA-Z_$][a-zA-Z0-9_$]*|\b\d+(?:\.\d+)?\b|[=+\-*/%&|^!<>?:;,.[\]{}()])/g;

  let lastIndex = 0;
  const elements = [];
  let match;

  while ((match = tokenRegex.exec(line)) !== null) {
    const token = match[0];
    const index = match.index;

    if (index > lastIndex) {
      elements.push(
        <span key={`gap-${index}`} className="text-slate-300">
          {line.substring(lastIndex, index)}
        </span>
      );
    }
    lastIndex = index + token.length;

    if (token.startsWith('//') || token.startsWith('/*') || token.startsWith('<!--') || token.startsWith('#')) {
      elements.push(
        <span key={`tok-${index}`} className="text-emerald-400 font-medium italic">
          {token}
        </span>
      );
    } else if (token.startsWith('"') || token.startsWith("'") || token.startsWith('`')) {
      elements.push(
        <span key={`tok-${index}`} className="text-amber-300">
          {token}
        </span>
      );
    } else if (token.startsWith('<')) {
      elements.push(
        <span key={`tok-${index}`} className="text-emerald-400 font-semibold">
          {token}
        </span>
      );
    } else if (KEYWORDS.has(token)) {
      elements.push(
        <span key={`tok-${index}`} className="text-purple-400 font-bold">
          {token}
        </span>
      );
    } else if (NODE_BUILTINS.has(token)) {
      elements.push(
        <span key={`tok-${index}`} className="text-emerald-300 font-semibold">
          {token}
        </span>
      );
    } else if (LITERALS.has(token)) {
      elements.push(
        <span key={`tok-${index}`} className="text-rose-400 font-semibold">
          {token}
        </span>
      );
    } else if (/^\d+(\.\d+)?$/.test(token)) {
      elements.push(
        <span key={`tok-${index}`} className="text-orange-400">
          {token}
        </span>
      );
    } else if (/^[=+\-*/%&|^!<>?:;,.[\]{}()]$/.test(token)) {
      elements.push(
        <span key={`tok-${index}`} className="text-sky-300">
          {token}
        </span>
      );
    } else {
      elements.push(
        <span key={`tok-${index}`} className="text-slate-100">
          {token}
        </span>
      );
    }
  }

  if (lastIndex < line.length) {
    elements.push(
      <span key={`tail-${lastIndex}`} className="text-slate-300">
        {line.substring(lastIndex)}
      </span>
    );
  }

  return <>{elements}</>;
}
