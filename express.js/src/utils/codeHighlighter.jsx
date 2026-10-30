// src/utils/codeHighlighter.jsx
import React from 'react';

const KEYWORDS = new Set([
  'import', 'export', 'from', 'default', 'const', 'let', 'var', 'function',
  'return', 'async', 'await', 'if', 'else', 'switch', 'case', 'break',
  'continue', 'try', 'catch', 'finally', 'throw', 'new', 'class', 'extends',
  'typeof', 'instanceof', 'for', 'while', 'do', 'in', 'of', 'yield',
  'type', 'interface', 'implements', 'declare', 'enum', 'public', 'private', 'protected'
]);

const EXPRESS_BUILTINS = new Set([
  'express', 'Router', 'app', 'router', 'req', 'res', 'next',
  'get', 'post', 'put', 'patch', 'delete', 'use', 'all', 'listen',
  'params', 'query', 'body', 'headers', 'cookies',
  'send', 'json', 'status', 'sendStatus', 'sendFile', 'download', 'redirect', 'cookie', 'clearCookie',
  'require', 'module', 'exports', 'process', 'console', 'Buffer'
]);

const LITERALS = new Set(['true', 'false', 'null', 'undefined', 'NaN', 'Infinity']);

export function highlightCodeLine(line) {
  if (!line) return <span>&nbsp;</span>;

  const trimmed = line.trim();

  if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('<!--') || trimmed.startsWith('*') || trimmed.startsWith('#')) {
    return <span className="text-amber-400 font-semibold">{line}</span>;
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
        <span key={`tok-${index}`} className="text-amber-400 font-medium italic">
          {token}
        </span>
      );
    } else if (token.startsWith('"') || token.startsWith("'") || token.startsWith('`')) {
      elements.push(
        <span key={`tok-${index}`} className="text-emerald-300">
          {token}
        </span>
      );
    } else if (token.startsWith('<')) {
      elements.push(
        <span key={`tok-${index}`} className="text-amber-400 font-semibold">
          {token}
        </span>
      );
    } else if (KEYWORDS.has(token)) {
      elements.push(
        <span key={`tok-${index}`} className="text-purple-400 font-bold">
          {token}
        </span>
      );
    } else if (EXPRESS_BUILTINS.has(token)) {
      elements.push(
        <span key={`tok-${index}`} className="text-amber-300 font-bold">
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
        <span key={`tok-${index}`} className="text-sky-300">
          {token}
        </span>
      );
    } else if (/^[=+\-*/%&|^!<>?:;,.[\]{}()]$/.test(token)) {
      elements.push(
        <span key={`tok-${index}`} className="text-amber-200">
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
