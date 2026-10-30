// src/utils/codeHighlighter.jsx
// محرك تلوين وتمييز الأكواد النحوي (Syntax Highlighting) لـ C#، .NET، ASP.NET Core MVC، Razor، SQL، و JSON
import React from 'react';

const CSHARP_KEYWORDS = new Set([
  'using', 'namespace', 'class', 'struct', 'record', 'interface', 'enum',
  'public', 'private', 'protected', 'internal', 'static', 'readonly', 'const',
  'virtual', 'override', 'abstract', 'sealed', 'async', 'await', 'void', 'new',
  'return', 'if', 'else', 'switch', 'case', 'default', 'break', 'continue',
  'for', 'foreach', 'while', 'do', 'in', 'try', 'catch', 'finally', 'throw',
  'this', 'base', 'get', 'set', 'init', 'params', 'ref', 'out', 'is', 'as',
  'typeof', 'sizeof', 'checked', 'unchecked', 'lock', 'yield', 'var', 'from',
  'where', 'select', 'orderby', 'ascending', 'descending', 'group', 'by', 'join', 'equals'
]);

const BUILTIN_TYPES = new Set([
  'int', 'long', 'short', 'byte', 'float', 'double', 'decimal', 'bool', 'char', 'string', 'object',
  'Task', 'ValueTask', 'Action', 'Func', 'Predicate', 'List', 'Dictionary', 'HashSet', 'IEnumerable',
  'ICollection', 'IList', 'IReadOnlyList', 'IQueryable', 'DateTime', 'DateOnly', 'TimeOnly', 'TimeSpan',
  'Guid', 'Nullable', 'Console', 'Math', 'Convert', 'Array'
]);

const ASPNET_FRAMEWORK = new Set([
  'Controller', 'ControllerBase', 'IActionResult', 'ActionResult', 'ViewResult', 'JsonResult',
  'ContentResult', 'RedirectToActionResult', 'FileResult', 'NotFoundResult', 'BadRequestResult',
  'View', 'ViewBag', 'ViewData', 'TempData', 'ModelState', 'HttpContext', 'Request', 'Response',
  'User', 'DbContext', 'DbSet', 'WebApplication', 'WebApplicationBuilder', 'Program', 'IServiceCollection',
  'IApplicationBuilder', 'ILogger', 'IConfiguration', 'AddScoped', 'AddTransient', 'AddSingleton',
  'AddDbContext', 'UseRouting', 'UseEndpoints', 'MapControllerRoute', 'MapControllers', 'UseStaticFiles',
  'UseAuthentication', 'UseAuthorization', 'UseSession', 'HttpGet', 'HttpPost', 'HttpPut', 'HttpDelete',
  'HttpPatch', 'ValidateAntiForgeryToken', 'Authorize', 'AllowAnonymous', 'Required', 'StringLength',
  'MaxLength', 'MinLength', 'Range', 'EmailAddress', 'Compare', 'AsNoTracking', 'ToListAsync', 'FirstOrDefaultAsync',
  'SaveChangesAsync', 'Include', 'ThenInclude', 'AddAsync', 'Remove', 'Update'
]);

const LITERALS = new Set(['true', 'false', 'null']);

/**
 * فحص ما إذا كان النص يحتوي على أحرف عربية
 */
function containsArabic(text) {
  return /[\u0600-\u06FF]/.test(text);
}

/**
 * دالة تلوين سطر كود واحد عبر تحليله إلى رموز مميزة
 */
export function highlightCodeLine(line) {
  if (!line) return <span>&nbsp;</span>;

  const trimmed = line.trim();

  // فحص التعليقات الكاملة (عربية أو إنجليزية)
  if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('<!--') || trimmed.startsWith('*') || trimmed.startsWith('#')) {
    const isArabic = containsArabic(line);
    return (
      <span 
        className="text-emerald-400 font-semibold"
        style={isArabic ? { direction: 'rtl', display: 'inline-block', unicodeBidi: 'plaintext' } : {}}
      >
        {line}
      </span>
    );
  }

  const tokenRegex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|#(?:[^\n]*)|@"[^"]*"|\$"(?:\\.|[^"\\])*"|"(?:\\.|[^"\\])*"|'[^']*'|\[[a-zA-Z0-9_, ]+\]|[a-zA-Z_@$][a-zA-Z0-9_]*|\b\d+(?:\.\d+)?\b|[=+\-*/%&|^!<>?:;,.[\]{}()])/g;

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

    // تعليقات
    if (token.startsWith('//') || token.startsWith('/*') || token.startsWith('<!--') || token.startsWith('#')) {
      const isArabic = containsArabic(token);
      elements.push(
        <span 
          key={`tok-${index}`} 
          className="text-emerald-400 font-medium italic"
          style={isArabic ? { direction: 'rtl', display: 'inline-block', unicodeBidi: 'plaintext' } : {}}
        >
          {token}
        </span>
      );
    } 
    // سلاسل نصية Strings
    else if (token.startsWith('"') || token.startsWith('$') || token.startsWith('@"') || token.startsWith("'")) {
      elements.push(
        <span key={`tok-${index}`} className="text-amber-300">
          {token}
        </span>
      );
    }
    // سمات Attributes مثل [HttpGet], [Authorize]
    else if (token.startsWith('[') && token.endsWith(']')) {
      elements.push(
        <span key={`tok-${index}`} className="text-teal-400 font-semibold">
          {token}
        </span>
      );
    }
    // كلمات C# المحجوزة
    else if (CSHARP_KEYWORDS.has(token)) {
      elements.push(
        <span key={`tok-${index}`} className="text-purple-400 font-bold">
          {token}
        </span>
      );
    }
    // أنواع البيانات Builtin Types
    else if (BUILTIN_TYPES.has(token)) {
      elements.push(
        <span key={`tok-${index}`} className="text-cyan-400 font-semibold">
          {token}
        </span>
      );
    }
    // إطار عمل ASP.NET Core & EF Core
    else if (ASPNET_FRAMEWORK.has(token)) {
      elements.push(
        <span key={`tok-${index}`} className="text-indigo-400 font-semibold">
          {token}
        </span>
      );
    }
    // القيم الثابتة
    else if (LITERALS.has(token)) {
      elements.push(
        <span key={`tok-${index}`} className="text-rose-400 font-bold">
          {token}
        </span>
      );
    }
    // أرقام
    else if (/^\d+(\.\d+)?$/.test(token)) {
      elements.push(
        <span key={`tok-${index}`} className="text-orange-300">
          {token}
        </span>
      );
    }
    // رموز ومعاملات
    else if (/^[=+\-*/%&|^!<>?:;,.[\]{}()]$/.test(token)) {
      elements.push(
        <span key={`tok-${index}`} className="text-slate-400">
          {token}
        </span>
      );
    }
    // متغيرات وأسماء دوال
    else {
      elements.push(
        <span key={`tok-${index}`} className="text-slate-200">
          {token}
        </span>
      );
    }
  }

  if (lastIndex < line.length) {
    elements.push(
      <span key={`end-${lastIndex}`} className="text-slate-300">
        {line.substring(lastIndex)}
      </span>
    );
  }

  return <>{elements}</>;
}
