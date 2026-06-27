// Forge runtime — CONSOLIDATION, the "sleep" step (owned-memory v1, layer C). Capture works
// but nothing distils: forge-lessons.md accretes byte-identical "Dry-run complete" rows until
// it is a landfill. Consolidation reviews the register, folds exact/near-duplicate Lesson rows
// into one row carrying a `×N seen` tally and the EARLIEST date, and promotes lessons seen
// often and marked firm up into lessons-learned.md (knowledge flows down, decisions up).
//
// Discipline (Directives #7/#8): DISTIL, NEVER ERASE.
//  - DRY-RUN BY DEFAULT — returns a diff plan; writes nothing unless { apply: true }.
//  - Before any mutation the register is copied to memory/registers/.attic/<file>.<ts>.md, so
//    every fold is one file-restore or `git revert` away.
//  - A `## Consolidation log` entry is appended recording what was folded/promoted and when.
//  - Writes ONLY under memory/registers/ via this trusted runtime — it never touches a
//    workspace and never relaxes the workspace guardrail. No new deps; pure Node.
//
// Reuses the retriever's own tokenizer (`terms`) and `jaccard` from memory.mjs so "duplicate"
// means the same thing here as it does at recall time.
import fs from 'node:fs';
import path from 'node:path';
import { terms, jaccard } from './memory.mjs';

const LESSONS_REL = 'memory/registers/forge-lessons.md';
const LEARNED_REL = 'memory/registers/lessons-learned.md';
const ATTIC_REL = 'memory/registers/.attic';

// Thresholds. Near-dup folding is deliberately conservative (high Jaccard) so a real
// distinction is not erased; exact-normalized matches fold with near-zero false positives.
const NEAR_DUP = 0.85;     // term-set Jaccard at/above which two lessons fold together
const PROMOTE_SEEN = 3;    // a folded lesson must be seen ≥ this many times to graduate
// promotion also requires `firm` confidence (gate was clean on those runs).

// A parsed Lesson table row from forge-lessons.md.
//   | Date | Trigger | Lesson | Scope | Confidence | Links |
// Only data rows are parsed; the header, the alignment row, and the documented "Example
// entry" row are left untouched. Returns { rows, otherLines } where otherLines preserves
// every non-data-row line verbatim and in order (append-mostly: prose is never rewritten).
export function parseRegister(text) {
  const lines = String(text).split('\n');
  const rows = [];
  let inExample = false; // rows under an "## Example …" heading are documentation, not data
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const h = line.match(/^#{1,6}\s+(.+?)\s*$/);
    if (h) { inExample = /example/i.test(h[1]); continue; }
    const cells = splitRow(line);
    if (!cells || cells.length !== 6) continue;
    const [date, trigger, lesson, scope, confidence, links] = cells;
    // Skip the header, the |---| separator, and any example/illustrative row.
    if (/^date$/i.test(date) || /^-+$/.test(date.replace(/\s/g, ''))) continue;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) continue; // only real dated rows are data
    if (inExample) continue;                          // never fold the documented example row
    rows.push({ i, date, trigger, lesson, scope, confidence, links, raw: line });
  }
  return { lines, rows };
}

// Build the consolidation plan from a register's parsed rows. Pure — no I/O, no writes.
// Groups rows whose normalized lesson text is identical OR whose term-sets are near-duplicate,
// keeping the earliest date and a representative row, tallying `seen`. Marks a group for
// promotion when seen ≥ PROMOTE_SEEN and every row in it is `firm`.
export function planConsolidation(rows) {
  const groups = [];
  for (const row of rows) {
    const key = normLesson(row.lesson);
    const tset = new Set(terms(row.lesson).keys());
    // Try to attach to an existing group: exact normalized match, or near-dup by Jaccard.
    let g = groups.find((x) => x.key === key) ||
      groups.find((x) => jaccard(x.tset, tset) >= NEAR_DUP);
    if (!g) {
      g = { key, tset, rep: row, seen: 0, earliest: row.date, members: [], allFirm: true };
      groups.push(g);
    }
    g.members.push(row);
    g.seen++;
    if (row.date < g.earliest) g.earliest = row.date;
    if (!/firm/i.test(row.confidence)) g.allFirm = false;
  }

  const folds = groups.filter((g) => g.seen > 1);       // groups that actually collapse rows
  const promotions = groups.filter((g) => g.seen >= PROMOTE_SEEN && g.allFirm);

  return {
    totalRows: rows.length,
    groups,
    folds,
    promotions,
    foldedAway: folds.reduce((s, g) => s + (g.seen - 1), 0), // rows removed by folding
  };
}

// Render the plan as human-readable text for the dry-run report.
export function renderPlan(plan) {
  const out = [];
  out.push(`Register rows parsed: ${plan.totalRows}`);
  out.push(`Distinct lessons:     ${plan.groups.length}`);
  out.push(`Duplicate groups:     ${plan.folds.length} (folding ${plan.foldedAway} row(s) away)`);
  out.push(`Promotions (≥${PROMOTE_SEEN}× firm): ${plan.promotions.length}`);
  out.push('');
  if (plan.folds.length) {
    out.push('Would FOLD:');
    for (const g of plan.folds) {
      out.push(`  ×${g.seen} (since ${g.earliest})  ${truncate(g.rep.lesson, 90)}`);
    }
    out.push('');
  }
  if (plan.promotions.length) {
    out.push('Would PROMOTE to lessons-learned.md:');
    for (const g of plan.promotions) {
      out.push(`  ×${g.seen} firm  ${truncate(g.rep.lesson, 90)}`);
    }
    out.push('');
  }
  if (!plan.folds.length && !plan.promotions.length) out.push('Nothing to consolidate — register is already clean.');
  return out.join('\n').trim();
}

// Run consolidation. DRY-RUN BY DEFAULT: only writes when { apply: true }.
// Returns { dryRun, plan, report, applied, atticPath, lessonsWritten, promotedTo }.
export function consolidate(repoRoot, { apply = false } = {}) {
  const file = path.join(repoRoot, LESSONS_REL);
  const text = readSafe(file);
  if (text == null) {
    return { dryRun: !apply, plan: null, report: `Register not found: ${LESSONS_REL}`, applied: false };
  }
  const { lines, rows } = parseRegister(text);
  const plan = planConsolidation(rows);
  const report = renderPlan(plan);

  if (!apply) {
    return { dryRun: true, plan, report, applied: false };
  }

  if (!plan.folds.length && !plan.promotions.length) {
    return { dryRun: false, plan, report, applied: false }; // nothing to do; no write, no attic churn
  }

  const ts = new Date().toISOString().replace(/[:.]/g, '-');

  // 1) Back up the register to the attic BEFORE any mutation (one restore away).
  const atticDir = path.join(repoRoot, ATTIC_REL);
  fs.mkdirSync(atticDir, { recursive: true });
  const atticPath = path.join(atticDir, `forge-lessons.${ts}.md`);
  fs.writeFileSync(atticPath, text);

  // 2) Rewrite the register: keep every non-data line verbatim; replace the FIRST member of
  //    each group with a single folded row, drop the rest. Append-mostly in spirit — history
  //    is preserved in the attic + the consolidation log; only the live table is distilled.
  const repIndex = new Map();   // line index -> folded row string (kept, rewritten)
  const dropIndex = new Set();  // line indices to remove (folded duplicates)
  for (const g of plan.groups) {
    if (g.seen <= 1) continue;
    const first = g.members.reduce((a, b) => (a.i <= b.i ? a : b));
    repIndex.set(first.i, foldedRow(g));
    for (const m of g.members) if (m.i !== first.i) dropIndex.add(m.i);
  }

  const newLines = [];
  for (let i = 0; i < lines.length; i++) {
    if (dropIndex.has(i)) continue;
    newLines.push(repIndex.has(i) ? repIndex.get(i) : lines[i]);
  }

  // 3) Append a consolidation-log entry recording the fold/promote actions and the backup.
  let body = newLines.join('\n').replace(/\s*$/, '\n');
  body += consolidationLog({ ts, plan, atticRel: rel(repoRoot, atticPath) });
  fs.writeFileSync(file, body);

  // 4) Promote qualifying lessons UP into lessons-learned.md (append-only).
  const promotedTo = promote(repoRoot, plan.promotions, ts);

  return {
    dryRun: false,
    plan,
    report,
    applied: true,
    atticPath: rel(repoRoot, atticPath),
    lessonsWritten: rel(repoRoot, file),
    promotedTo,
  };
}

// ---- internals ----

// Append promoted lessons to lessons-learned.md (append-only; never edits existing rows).
// Returns the relative path written, or null if the target is absent / nothing promoted.
function promote(repoRoot, promotions, ts) {
  if (!promotions.length) return null;
  const file = path.join(repoRoot, LEARNED_REL);
  if (!fs.existsSync(file)) return null;
  const date = new Date().toISOString().slice(0, 10);
  let block = '';
  for (const g of promotions) {
    const lesson = `Forge: ${stripGoalPrefix(g.rep.lesson)}`;
    block += `| ${date} | promoted from forge-lessons (×${g.seen} firm, since ${g.earliest}) | ${esc(lesson)} | agent | firm | ${LESSONS_REL} |\n`;
  }
  fs.appendFileSync(file, block);
  return rel(repoRoot, file);
}

// A single folded table row: earliest date, a `×N seen` tally folded into the trigger.
function foldedRow(g) {
  const r = g.rep;
  const trigger = `${stripSeen(r.trigger)} ×${g.seen} seen`;
  const confidence = g.allFirm ? 'firm' : 'tentative';
  return `| ${g.earliest} | ${esc(trigger)} | ${esc(r.lesson)} | ${esc(r.scope.trim())} | ${confidence} | ${esc(r.links.trim())} |`;
}

function consolidationLog({ ts, plan, atticRel }) {
  const date = new Date().toISOString().slice(0, 10);
  const lines = [
    '',
    '## Consolidation log',
    `- ${date} (${ts}): folded ${plan.foldedAway} duplicate row(s) into ${plan.folds.length} group(s); ` +
      `promoted ${plan.promotions.length} lesson(s) to lessons-learned.md. ` +
      `Backup: ${atticRel}.`,
    '',
  ];
  return lines.join('\n');
}

function splitRow(line) {
  const t = line.trim();
  if (!t.startsWith('|')) return null;
  // Split on unescaped pipes, drop the empty leading/trailing cells.
  const cells = t.split(/(?<!\\)\|/).map((c) => c.trim());
  if (cells.length && cells[0] === '') cells.shift();
  if (cells.length && cells[cells.length - 1] === '') cells.pop();
  return cells.map((c) => c.replace(/\\\|/g, '|'));
}

function normLesson(s) {
  return String(s || '').toLowerCase().replace(/\s+/g, ' ').replace(/[^a-z0-9 ]/g, '').trim();
}

function stripSeen(s) {
  return String(s || '').replace(/\s*×\d+\s*seen\s*$/i, '').trim();
}

function stripGoalPrefix(s) {
  // Keep the lesson readable when graduated: drop a leading 'Goal "..." via X:' wrapper.
  const m = String(s || '').match(/^Goal\s+"[^"]*"\s+via\s+[^:]+:\s*(.+)$/i);
  return (m ? m[1] : String(s || '')).trim();
}

function truncate(s, n) {
  s = String(s || '');
  return s.length > n ? s.slice(0, n - 1) + '…' : s;
}

function esc(s) {
  return String(s || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function readSafe(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return null; }
}

function rel(root, p) {
  return path.relative(root, p).split(path.sep).join('/');
}
