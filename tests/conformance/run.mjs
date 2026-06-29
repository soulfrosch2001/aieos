#!/usr/bin/env node
// AIEOS conformance checker — the OS's compiler.
// Discovers every rule in ./rules, builds a shared context, runs them, reports.
// Exit code 0 = conformant, 1 = at least one error, 2 = checker failure.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as util from './lib/util.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../../');
const includeLegacy = process.argv.includes('--include-legacy');
const doFix = process.argv.includes('--fix');

// What the checker scans. Legacy companies predate the kernel; their internals are
// out of scope until reconciled, but their AIEOS.md mount adapters are always checked.
const config = {
  root: ROOT,
  skipDirs: new Set(['.git', '.github', '.claude', '.vscode', 'node_modules', 'scratchpad', 'Output', 'build']),
  legacyDirs: ['ai-software-company', 'AI-Game-Studio'],
  includeLegacy,
};

const inLegacy = (p) =>
  config.legacyDirs.some((d) => util.rel(ROOT, p).startsWith(d + '/'));
const inScope = (p) =>
  config.includeLegacy || !inLegacy(p) || path.basename(p) === 'AIEOS.md';

// ---- Build shared context ----
const allFiles = util.walk(ROOT, config.skipDirs);
const mdFiles = allFiles.filter((p) => p.endsWith('.md') && inScope(p));
const dirs = util.walkDirs(ROOT, config.skipDirs).filter((p) => config.includeLegacy || !inLegacy(p));

const childFiles = (dir) => { try { return util.baseFiles(dir); } catch { return []; } };
const has = (dir, names) => { const f = childFiles(dir); return names.some((n) => f.includes(n)); };

// An agent folder has craft.md (the most agent-specific file) or >=2 role markers.
// This avoids false positives like a memory folder that happens to hold a register
// named standards.md (which is a marker name but not an agent).
const isAgentDir = (dir) => {
  const f = childFiles(dir);
  return f.includes('craft.md') || util.ROLE_MARKERS.filter((n) => f.includes(n)).length >= 2;
};
const agentDirs = dirs.filter(isAgentDir);
const councilDirs = dirs.filter((d) => has(d, util.COUNCIL_MARKERS));
const workflowFiles = mdFiles.filter(
  (p) => path.basename(path.dirname(p)) === 'workflows' && path.basename(p) !== 'README.md'
);
const registerFiles = mdFiles.filter(
  (p) => path.basename(path.dirname(p)) === 'registers' && path.basename(p) !== 'README.md'
);

const ctx = { root: ROOT, config, util, mdFiles, dirs, agentDirs, councilDirs, workflowFiles, registerFiles };

// ---- Load rules ----
const rulesDir = path.join(__dirname, 'rules');
const ruleFiles = fs.readdirSync(rulesDir).filter((f) => f.endsWith('.mjs')).sort();
const findings = [];
const rules = [];
for (const f of ruleFiles) {
  try {
    const mod = await import(pathToFileURL(path.join(rulesDir, f)).href);
    const id = mod.id || f.replace(/\.mjs$/, '');
    const check = mod.default || mod.check;
    if (typeof check !== 'function') {
      findings.push({ rule: id, level: 'error', file: path.join(rulesDir, f), line: null, msg: 'rule has no default check() export' });
      continue;
    }
    rules.push({ id, check, fix: mod.fix, level: mod.level });
  } catch (e) {
    findings.push({ rule: f, level: 'error', file: path.join(rulesDir, f), line: null, msg: 'rule failed to load: ' + e.message });
  }
}

// ---- Optional auto-fix pass (rules that export fix()) ----
if (doFix) {
  console.log('Auto-fixing…');
  let totalFixed = 0;
  for (const r of rules) {
    if (typeof r.fix !== 'function') continue;
    try {
      const n = (await r.fix(ctx)) || 0;
      if (n) { console.log(`  fixed ${n} issue(s) via [${r.id}]`); totalFixed += n; }
    } catch (e) {
      console.log(`  fix [${r.id}] failed: ${e.message}`);
    }
  }
  console.log(`Auto-fix complete: ${totalFixed} change(s).\n`);
}

// ---- Check pass ----
let ruleCount = 0;
for (const r of rules) {
  ruleCount++;
  try {
    const res = (await r.check(ctx)) || [];
    for (const x of res) findings.push({ rule: r.id, level: x.level || r.level || 'error', file: x.file, line: x.line ?? null, msg: x.msg });
  } catch (e) {
    findings.push({ rule: r.id, level: 'error', file: path.join(rulesDir, r.id + '.mjs'), line: null, msg: 'rule threw: ' + (e.stack || e.message) });
  }
}

// ---- Report ----
const errors = findings.filter((f) => f.level === 'error');
const warns = findings.filter((f) => f.level === 'warn');
const fmt = (f) => `  ${f.level === 'error' ? '✗' : '!'} [${f.rule}] ${util.rel(ROOT, f.file)}${f.line ? ':' + f.line : ''}\n      ${f.msg}`;

console.log(`AIEOS conformance — ${ruleCount} rules over ${mdFiles.length} files` + (includeLegacy ? ' (incl. legacy)' : '') + '\n');
if (errors.length) { console.log(`ERRORS (${errors.length}):`); for (const f of errors) console.log(fmt(f)); console.log(''); }
if (warns.length) { console.log(`WARNINGS (${warns.length}):`); for (const f of warns) console.log(fmt(f)); console.log(''); }

console.log(`Result: ${errors.length} error(s), ${warns.length} warning(s).`);
if (errors.length) { console.log('NON-CONFORMANT.'); process.exit(1); }
console.log('CONFORMANT. ✓');
