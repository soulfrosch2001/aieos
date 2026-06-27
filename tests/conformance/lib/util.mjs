// Shared utilities for AIEOS conformance rules.
// Pure, dependency-free. Every rule receives this module as ctx.util.
import fs from 'node:fs';
import path from 'node:path';

export const ROLE_FILES = ['README.md', 'responsibilities.md', 'authority.md', 'craft.md', 'standards.md'];
export const ROLE_MARKERS = ['responsibilities.md', 'authority.md', 'craft.md', 'standards.md'];
export const COUNCIL_FILES = ['README.md', 'process.md', 'output.md'];
export const COUNCIL_MARKERS = ['process.md', 'output.md'];

/** Recursively list files under dir, skipping any directory whose basename is in skip. */
export function walk(dir, skip = new Set()) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (skip.has(e.name)) continue;
      out.push(...walk(p, skip));
    } else {
      out.push(p);
    }
  }
  return out;
}

/** Recursively list directories under dir, skipping by basename. */
export function walkDirs(dir, skip = new Set()) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory() || skip.has(e.name)) continue;
    const p = path.join(dir, e.name);
    out.push(p, ...walkDirs(p, skip));
  }
  return out;
}

export const read = (p) => fs.readFileSync(p, 'utf8');
export const exists = (p) => fs.existsSync(p);
export const baseFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isFile()).map((e) => e.name);

/** Repo-relative, forward-slashed path for display. */
export const rel = (root, p) => path.relative(root, p).split(path.sep).join('/');

/** A link target we should not try to resolve (template placeholder). */
export function isPlaceholder(target) {
  return target.includes('<') || target.includes('>') || target.includes('…') || target.trim() === '';
}

/** Blank out code (fenced blocks + inline spans), preserving length and newlines,
 *  so links shown as code examples are not mistaken for real links. */
export function maskCode(text) {
  const blank = (s) => s.replace(/[^\n]/g, ' ');
  return text
    .replace(/```[\s\S]*?```/g, blank)
    .replace(/~~~[\s\S]*?~~~/g, blank)
    .replace(/`[^`\n]*`/g, blank);
}

/** Parse relative markdown links: returns [{ target, line }]. Skips http(s)/mailto/anchors
 *  and anything inside code spans/blocks. */
export function relLinks(text) {
  const out = [];
  const masked = maskCode(text);
  const re = /\[[^\]]*\]\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(masked)) !== null) {
    let t = m[1].split('#')[0].trim();
    if (!t || /^(https?:|mailto:)/i.test(t)) continue;
    const line = text.slice(0, m.index).split('\n').length;
    out.push({ target: t, line });
  }
  return out;
}

/** Resolve a relative link target from a source file to an absolute path. */
export const resolveLink = (fromFile, target) =>
  path.normalize(path.join(path.dirname(fromFile), target));

/**
 * Parse an identity block from the head of a definition file.
 * Returns { name, fields: {status,type,owner,extends} } with booleans for presence.
 * Tolerates a leading HTML comment block.
 */
export function identityBlock(text) {
  const head = text.replace(/^<!--[\s\S]*?-->\s*/, '').split('\n').slice(0, 12);
  const name = (head.find((l) => /^#\s+\S/.test(l)) || '').replace(/^#\s+/, '').trim();
  const has = (k) => head.some((l) => new RegExp('^' + k + ':\\s*\\S', 'i').test(l.trim()));
  return {
    name,
    hasName: !!name,
    status: has('Status'),
    type: has('Type'),
    owner: has('Owner'),
    extends: has('Extends'),
  };
}

/** kebab-case (lowercase, digits, hyphens) — allows numbered prefixes like 01-executive. */
export const isKebab = (name) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(name);
