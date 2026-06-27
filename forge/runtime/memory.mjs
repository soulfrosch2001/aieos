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
import { gatherEpisodes } from './episodic.mjs';

const LESSONS_REL = 'memory/registers/forge-lessons.md';

export function memoryEnabled() {
  return process.env.FORGE_MEMORY !== 'off';
}

// Gather the corpus from the project's durable memory. Returns
// [{ source, title, text, mtimeMs }]. Sources: memory/registers/, government/decisions/,
// companies/*/memory/, plus the EPISODIC layer — past run traces under forge/runs/ folded
// in via gatherEpisodes (owned-memory v1, layer A), so prior runs become recallable memory.
// Read-only, best-effort — a missing or unreadable file is skipped, never fatal. mtimeMs is
// threaded through so retrieval can favour recent memory. Episodes are capped and lean on
// recency decay so traces cannot swamp curated lessons.
export function gatherCorpus(repoRoot, { episodeLimit = 25 } = {}) {
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
        mtimeMs: safeMtime(f),
      });
    }
  }

  // Episodic layer: fold the most recent run traces into the corpus as docs. Best-effort —
  // never fatal if the runs dir is missing or a trace is malformed.
  try {
    for (const ep of gatherEpisodes(repoRoot, { limit: episodeLimit })) docs.push(ep);
  } catch { /* episodic memory is best-effort */ }

  return docs;
}

// Split a doc into heading-anchored chunks so retrieval scores the relevant SECTION, not
// the whole file. Each chunk inherits the doc's source/mtime and carries its own heading.
// A doc with no headings yields a single chunk (the whole text). Pure, model-free.
export function chunkDoc(doc) {
  const lines = String(doc.text || '').split('\n');
  const chunks = [];
  let heading = doc.title || path.basename(doc.source || '');
  let buf = [];
  const flush = () => {
    const text = buf.join('\n').trim();
    if (text) chunks.push({ source: doc.source, title: heading, text, mtimeMs: doc.mtimeMs });
    buf = [];
  };
  for (const line of lines) {
    const m = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (m) { flush(); heading = m[2].trim(); buf.push(line); }
    else buf.push(line);
  }
  flush();
  return chunks.length ? chunks : [{ source: doc.source, title: heading, text: String(doc.text || ''), mtimeMs: doc.mtimeMs }];
}

// Lexical retrieval over heading-chunks, scored with **BM25** (owned-memory v1, step 1):
// a term's weight is its IDF — rare terms across the corpus win — with TF saturation (k1)
// and length normalization (b), so a common word in a giant section can't dominate a rare,
// on-point match. Multiply by a gentle recency decay, drop near-duplicate hits (Jaccard),
// return the top `k`. Deterministic, model-free, no deps. See docs/owned-memory.md.
export function retrieve(goal, docs, { k = 4, now = Date.now(), halfLifeDays = 30, dupThreshold = 0.6, k1 = 1.5, b = 0.75 } = {}) {
  const qTerms = terms(goal);
  if (!qTerms.size || !docs.length) return [];
  const qSet = new Set(qTerms.keys());

  // Expand docs into chunks so a long file competes section-by-section.
  const chunks = [];
  for (const d of docs) for (const c of chunkDoc(d)) chunks.push(c);
  if (!chunks.length) return [];

  // Precompute each chunk's term map + length, and the corpus document frequency (df) of
  // each query term, so IDF can favour rare terms. avgdl normalizes for chunk length.
  const info = chunks.map((c) => {
    const tm = terms(c.text);
    let len = 0;
    for (const v of tm.values()) len += v;
    return { c, tm, len };
  });
  const N = info.length;
  const avgdl = info.reduce((s, x) => s + x.len, 0) / N || 1;
  const idf = new Map();
  for (const t of qSet) {
    let dfreq = 0;
    for (const x of info) if (x.tm.has(t)) dfreq++;
    // BM25 IDF with a +1 floor: a term in every chunk still contributes a little, never < 0.
    idf.set(t, Math.log(1 + (N - dfreq + 0.5) / (dfreq + 0.5)));
  }

  const halfLifeMs = halfLifeDays * 24 * 60 * 60 * 1000;
  const scored = info.map(({ c, tm, len }) => {
    let score = 0;
    for (const t of qSet) {
      const tf = tm.get(t);
      if (!tf) continue;
      const denom = tf + k1 * (1 - b + b * (len / avgdl));
      score += (idf.get(t) || 0) * (tf * (k1 + 1)) / denom; // BM25 term contribution
    }
    // Recency: exponential half-life decay in [0.5, 1]. Unknown mtime → neutral (no boost,
    // no penalty) so a missing stat never sinks an otherwise strong match.
    let recency = 1;
    if (Number.isFinite(c.mtimeMs) && c.mtimeMs > 0 && halfLifeMs > 0) {
      const ageMs = Math.max(0, now - c.mtimeMs);
      recency = 0.5 + 0.5 * Math.pow(2, -ageMs / halfLifeMs);
    }
    return { ...c, _terms: new Set(tm.keys()), score: score * recency };
  });

  const ranked = scored
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score);

  // Greedy dedup: keep a hit only if it is sufficiently distinct (term-set Jaccard) from
  // every already-kept hit. Prevents two near-identical sections crowding out variety.
  const kept = [];
  for (const cand of ranked) {
    if (kept.length >= k) break;
    const dup = kept.some((h) => jaccard(cand._terms, h._terms) >= dupThreshold);
    if (!dup) kept.push(cand);
  }
  return kept.map(({ _terms, ...rest }) => rest);
}

// Format the retrieved chunks into a system-injectable block. Each excerpt is the most
// goal-relevant lines of the matching section, bounded so the block stays small.
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

// Tokenize into a term→count map (lowercased, stop-words and <3-char tokens dropped).
// Exported so consolidate.mjs can score lesson rows with the SAME tokenizer the retriever
// uses — one definition of "a term", no drift between recall and consolidation.
export function terms(text) {
  const m = new Map();
  for (const raw of String(text).toLowerCase().match(/[a-z0-9][a-z0-9-]{1,}/g) || []) {
    if (STOP.has(raw) || raw.length < 3) continue;
    m.set(raw, (m.get(raw) || 0) + 1);
  }
  return m;
}

// Jaccard similarity of two term sets, in [0, 1]. Used to drop near-duplicate hits, and
// reused by consolidate.mjs to fold near-duplicate lesson rows. Exported for that reuse.
export function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  const [small, large] = a.size <= b.size ? [a, b] : [b, a];
  for (const t of small) if (large.has(t)) inter++;
  return inter / (a.size + b.size - inter);
}

function safeMtime(file) {
  try { return fs.statSync(file).mtimeMs; } catch { return 0; }
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
