// Forge runtime — memory & retrieval. Pure file I/O and lexical scoring: no model, no
// embeddings, no new deps. Before a run, the runtime gathers the project's durable
// memory, scores each chunk against the goal, and injects the top matches as a
// "Retrieved memory" block so the agent starts already aware of the relevant decisions
// and lessons. After a successful run, it appends a dated lesson back to
// memory/registers/forge-lessons.md — a runtime-side write (never via write_file), so the
// workspace guardrail is never relaxed.
//
// Disabled wholesale by FORGE_MEMORY=off (skips both the injected block and the append).
import fs from 'node:fs';
import path from 'node:path';

const LESSONS_REL = 'memory/registers/forge-lessons.md';

export function memoryEnabled() {
  return process.env.FORGE_MEMORY !== 'off';
}

// Gather the corpus from the project's durable memory. Returns [{ source, title, text }].
// Sources: memory/registers/, government/decisions/, companies/*/memory/. Read-only,
// best-effort — a missing or unreadable file is skipped, never fatal.
export function gatherCorpus(repoRoot) {
  const docs = [];
  const dirs = [
    path.join(repoRoot, 'memory', 'registers'),
    path.join(repoRoot, 'government', 'decisions'),
  ];
  // companies/*/memory/
  const companiesDir = path.join(repoRoot, 'companies');
  for (const c of safeReaddir(companiesDir)) {
    const memDir = path.join(companiesDir, c.name, 'memory');
    if (c.isDirectory() && fs.existsSync(memDir)) dirs.push(memDir);
  }

  for (const dir of dirs) {
    for (const f of mdFilesUnder(dir)) {
      const text = safeRead(f);
      if (!text) continue;
      docs.push({
        source: rel(repoRoot, f),
        title: firstHeading(text) || path.basename(f),
        text,
      });
    }
  }
  return docs;
}

// Lexical retrieval: score each doc against the goal by shared-term overlap (a light
// TF weighting), return the top `k`. Deterministic and model-free.
export function retrieve(goal, docs, { k = 4 } = {}) {
  const qTerms = terms(goal);
  if (!qTerms.size || !docs.length) return [];
  const qSet = new Set(qTerms.keys());

  const scored = docs.map((d) => {
    const dTerms = terms(d.text);
    let score = 0;
    for (const t of qSet) {
      const tf = dTerms.get(t);
      if (tf) score += Math.log(1 + tf); // diminishing return on repetition
    }
    // Normalize lightly by doc length so a giant file can't dominate on raw counts.
    const norm = score / Math.log(2 + dTerms.size);
    return { ...d, score: norm };
  });

  return scored
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}

// Format the retrieved docs into a system-injectable block. Each excerpt is the most
// goal-relevant lines of the doc, bounded so the block stays small.
export function formatContext(hits, { maxCharsPerHit = 600 } = {}) {
  if (!hits.length) return '';
  const parts = ['## Retrieved memory',
    '',
    'Relevant prior decisions and lessons from project memory (read-only context — ' +
    'use it, do not assume it is complete):',
    ''];
  for (const h of hits) {
    parts.push(`### ${h.title}  _(${h.source})_`);
    parts.push(excerpt(h.text, maxCharsPerHit));
    parts.push('');
  }
  return parts.join('\n').trim();
}

// Convenience: gather → retrieve → format in one call. Returns '' when disabled/empty.
export function buildMemoryBlock(repoRoot, goal, opts = {}) {
  if (!memoryEnabled()) return '';
  const docs = gatherCorpus(repoRoot);
  const hits = retrieve(goal, docs, opts);
  return formatContext(hits, opts);
}

// Append a dated lesson to forge-lessons.md. Runs in the trusted runtime, not via the
// agent's write_file — that is deliberate: the agent cannot write outside its workspace,
// but the runtime that hosts it can record what the run taught. Append-only (Directive
// #8): a new row is added, existing rows are never edited. Returns the relative path
// written, or null when memory is off / the write fails.
export function appendLesson(repoRoot, { goal, agent, outcome, summary, gateClean }) {
  if (!memoryEnabled()) return null;
  try {
    const file = path.join(repoRoot, LESSONS_REL);
    if (!fs.existsSync(file)) return null; // register must exist; runtime does not forge it
    const date = new Date().toISOString().slice(0, 10);
    const lesson = `Goal "${oneLine(goal)}" via ${agent}: ${oneLine(summary) || 'completed'}`;
    const confidence = gateClean ? 'firm' : 'tentative';
    const row = `| ${date} | ${esc(agent)} run (${esc(outcome)}) | ${esc(lesson)} | agent | ${confidence} | ${esc(rel(repoRoot, file))} |\n`;
    fs.appendFileSync(file, row);
    return rel(repoRoot, file);
  } catch {
    return null; // best-effort: a memory write must never crash a successful run
  }
}

// ---- internals ----

const STOP = new Set(['the', 'a', 'an', 'and', 'or', 'of', 'to', 'in', 'on', 'for', 'with',
  'is', 'are', 'be', 'this', 'that', 'it', 'as', 'at', 'by', 'from', 'into', 'then', 'so',
  'do', 'does', 'did', 'has', 'have', 'had', 'not', 'no', 'list', 'finish', 'run']);

function terms(text) {
  const m = new Map();
  for (const raw of String(text).toLowerCase().match(/[a-z0-9][a-z0-9-]{1,}/g) || []) {
    if (STOP.has(raw) || raw.length < 3) continue;
    m.set(raw, (m.get(raw) || 0) + 1);
  }
  return m;
}

function excerpt(text, max) {
  // Skip the identity block / HTML comments; take the first substantive prose lines.
  const lines = text.split('\n')
    .filter((l) => !l.trim().startsWith('<!--') && l.trim() !== '')
    .filter((l) => !/^(Status|Type|Owner|Extends):/i.test(l.trim()));
  let out = '';
  for (const l of lines) {
    if (out.length + l.length > max) { out += '\n…'; break; }
    out += (out ? '\n' : '') + l;
  }
  return out;
}

function firstHeading(text) {
  const m = text.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : null;
}

function mdFilesUnder(dir) {
  const out = [];
  const walk = (d) => {
    for (const e of safeReaddir(d)) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.name.endsWith('.md')) out.push(full);
    }
  };
  if (fs.existsSync(dir)) walk(dir);
  return out;
}

function safeReaddir(dir) {
  try { return fs.readdirSync(dir, { withFileTypes: true }); } catch { return []; }
}

function safeRead(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return ''; }
}

function oneLine(s) {
  return String(s || '').replace(/\s+/g, ' ').trim().slice(0, 160);
}

function esc(s) {
  return String(s || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function rel(root, p) {
  return path.relative(root, p).split(path.sep).join('/');
}
