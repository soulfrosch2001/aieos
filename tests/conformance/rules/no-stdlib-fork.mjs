// Rule: companies must INHERIT the standard library, not FORK it (Directive #6).
//
// A red-team contributor copied a stdlib workflow verbatim into a company under a new name
// and it passed every structural check. This rule catches that: a company workflow, memory
// register, or council whose body is substantially similar to a stdlib entity of the same
// type — but does NOT share its name (a by-name override is the legitimate path) — is
// flagged as a probable fork.
//
// Similarity is Jaccard over non-trivial content lines. Measured threshold: real, legitimate
// company entities score <= 0.16 against any stdlib file; a verbatim copy scores ~1.0. The
// 0.60 cutoff sits far from both, so distinct work passes while copies (even lightly edited)
// are caught. Same-name files are exempt — those are by-name overrides, which may resemble.
import path from 'node:path';

export const id = 'no-stdlib-fork';
export const level = 'error';
export const description = 'Companies inherit the stdlib by name; a near-copy of a stdlib entity under a new name is a fork (Directive #6).';

const THRESHOLD = 0.6;

function contentLines(text) {
  return new Set(
    text.split('\n').map((l) => l.trim().toLowerCase())
      .filter((l) => l.length >= 20 && !l.startsWith('#') && !l.startsWith('```') && !l.startsWith('|--'))
  );
}
function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

function scan(files, stdlibDir, util, root) {
  const stdlib = files.filter((f) => path.dirname(f) === stdlibDir);
  const company = files.filter((f) => path.dirname(f) !== stdlibDir);
  const stdNames = new Set(stdlib.map((f) => path.basename(f)));
  const stdLines = stdlib.map((f) => ({ f, lines: contentLines(util.read(f)) }));
  const findings = [];
  for (const c of company) {
    if (stdNames.has(path.basename(c))) continue; // a by-name override is legitimate
    const cl = contentLines(util.read(c));
    let best = 0, bestF = null;
    for (const s of stdLines) {
      const j = jaccard(cl, s.lines);
      if (j > best) { best = j; bestF = s.f; }
    }
    if (best >= THRESHOLD) {
      findings.push({ file: c, level: 'error', msg: `looks forked from stdlib ${util.rel(root, bestF)} (similarity ${best.toFixed(2)}) — inherit by name instead of copying (Directive #6)` });
    }
  }
  return findings;
}

// Councils are 3-file directories; compare their combined content.
const councilText = (dir, util) =>
  ['README.md', 'process.md', 'output.md'].map((n) => { try { return util.read(path.join(dir, n)); } catch { return ''; } }).join('\n');

function scanCouncils(dirs, stdlibDir, util, root) {
  const stdlib = dirs.filter((d) => path.dirname(d) === stdlibDir);
  const company = dirs.filter((d) => path.dirname(d) !== stdlibDir);
  const stdNames = new Set(stdlib.map((d) => path.basename(d)));
  const stdLines = stdlib.map((d) => ({ d, lines: contentLines(councilText(d, util)) }));
  const findings = [];
  for (const c of company) {
    if (stdNames.has(path.basename(c))) continue; // by-name override is legitimate
    const cl = contentLines(councilText(c, util));
    let best = 0, bestD = null;
    for (const s of stdLines) {
      const j = jaccard(cl, s.lines);
      if (j > best) { best = j; bestD = s.d; }
    }
    if (best >= THRESHOLD) {
      findings.push({ file: path.join(c, 'README.md'), level: 'error', msg: `council looks forked from stdlib ${util.rel(root, bestD)} (similarity ${best.toFixed(2)}) — inherit by name instead of copying (Directive #6)` });
    }
  }
  return findings;
}

export default function check(ctx) {
  const { util, root } = ctx;
  return [
    ...scan(ctx.workflowFiles, path.join(root, 'workflows'), util, root),
    ...scan(ctx.registerFiles, path.join(root, 'memory', 'registers'), util, root),
    ...scanCouncils(ctx.councilDirs, path.join(root, 'councils'), util, root),
  ];
}
