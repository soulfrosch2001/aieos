#!/usr/bin/env node
// Forge run inspector — a READ-ONLY lens over the traces in forge/runs/. It never
// executes anything: it only re-renders the JSON a run already wrote, so observability is
// free and side-effect-free.
//
//   node forge/inspect.mjs --list        # one line per run, newest last
//   node forge/inspect.mjs --last        # full render of the most recent run
//   node forge/inspect.mjs <trace-file>  # full render of a specific trace
//   node forge/inspect.mjs               # defaults to --last
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { costOfTrace, resolvePrices, fmt$ } from './cost.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const runsDir = path.join(here, 'runs');

const arg = process.argv[2];

if (arg === '--list') {
  list();
} else if (!arg || arg === '--last') {
  const f = latest();
  if (!f) { process.stdout.write('No runs found in forge/runs/.\n'); process.exit(0); }
  show(f);
} else {
  const f = path.isAbsolute(arg) ? arg : path.resolve(process.cwd(), arg);
  if (!fs.existsSync(f)) { process.stderr.write('No such trace: ' + arg + '\n'); process.exit(1); }
  show(f);
}

function traceFiles() {
  try {
    return fs.readdirSync(runsDir)
      .filter((f) => f.endsWith('.json'))
      .map((f) => path.join(runsDir, f))
      .sort(); // ISO-timestamp prefix sorts chronologically
  } catch {
    return [];
  }
}

function latest() {
  const all = traceFiles();
  return all.length ? all[all.length - 1] : null;
}

function list() {
  const all = traceFiles();
  if (!all.length) { process.stdout.write('No runs found in forge/runs/.\n'); return; }
  for (const f of all) {
    const t = read(f);
    if (!t) continue;
    const steps = (t.steps || []).length;
    const v = t.evaluation ? t.evaluation.verdict : '-';
    const usage = t.totals?.usage
      ? `${t.totals.usage.input_tokens}/${t.totals.usage.output_tokens} tok`
      : 'no-usage';
    const ms = t.totals?.ms != null ? `${t.totals.ms}ms` : '-';
    const cost = fmt$(costOfTrace(t, resolvePrices()).total);
    process.stdout.write(
      `${path.basename(f)}  outcome=${t.outcome}  verdict=${v}  steps=${steps}  ${ms}  ${usage}  ${cost}\n`
    );
  }
}

function show(file) {
  const t = read(file);
  if (!t) { process.stderr.write('Unreadable trace: ' + file + '\n'); process.exit(1); }
  const L = (s = '') => process.stdout.write(s + '\n');

  L('Trace: ' + path.basename(file));
  L('  agent:    ' + t.agent);
  L('  goal:     ' + t.goal);
  L('  model:    ' + (t.model || '(dry-run stub)') + (t.dryRun ? '  [dry-run]' : ''));
  L('  outcome:  ' + t.outcome);
  L('  gate:     ' + (t.gateClean ? 'clean' : 'not clean'));
  if (t.evaluation) {
    L('  verdict:  ' + t.evaluation.verdict + ' [' + t.evaluation.mode + ']');
    for (const n of t.evaluation.notes || []) L('              - ' + n);
  }
  if (t.totals) {
    L('  totals:   ' + (t.totals.ms != null ? t.totals.ms + 'ms' : '?') +
      '  in=' + (t.totals.usage?.input_tokens ?? 0) +
      ' out=' + (t.totals.usage?.output_tokens ?? 0) + ' tok');
  }
  // Cost: computed from the trace's per-step usage + model against the price table (pure,
  // free, offline). One tier line per stamped tier when routing produced a split.
  const c = costOfTrace(t, resolvePrices());
  L('  cost:     ' + fmt$(c.total) + ' (' + fmt$(c.blendedPerMtok) + '/Mtok)');
  if (c.byTier.length > 1) {
    for (const g of c.byTier) {
      L('              - ' + (g.tier || g.model || g.label) + ': ' + fmt$(g.cost) + ' (' + g.tokens + ' tok)');
    }
  }
  if (t.plan?.steps?.length) {
    L('  plan:');
    t.plan.steps.forEach((s, i) => {
      const box = s.status === 'done' ? '[x]' : s.status === 'dropped' ? '[~]' : '[ ]';
      L('    ' + (i + 1) + '. ' + box + ' ' + s.text);
    });
  }

  L('  steps:');
  for (const s of t.steps || []) {
    const timing = s.ms != null ? `  (${s.ms}ms)` : '';
    const tierTag = s.tier ? `  <${s.tier}>` : '';
    if (s.text) L('    [' + s.n + ']' + tierTag + ' ' + firstLine(s.text) + timing);
    else L('    [' + s.n + ']' + tierTag + timing);
    for (const a of s.actions || []) {
      L('        ' + (a.ok ? 'ok ' : 'ERR') + ' ' + a.name + compact(a.input));
    }
  }
  if (t.summary) L('  summary:  ' + t.summary);
}

function firstLine(s) { return String(s).split('\n')[0]; }

function compact(input) {
  if (!input || !Object.keys(input).length) return '';
  const s = JSON.stringify(input);
  return ' ' + (s.length > 70 ? s.slice(0, 67) + '...' : s);
}

function read(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}
