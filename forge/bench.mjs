#!/usr/bin/env node
// Forge bench — a parity × cost harness. It runs each task TWICE: once "baseline" (every
// step pinned to the strong tier, FORGE_MODEL) and once "routed" (the cost router picks
// cheap-first and escalates only on failure), then reports, per task and in aggregate, both
// the result verdict (from the free structural eval + gate) and the dollar cost, plus the
// routed/baseline cost ratio.
//
// HONEST BOUNDARY: under --dry-run the model stub returns zero usage and identical output
// for BOTH arms, so parity is trivially "equal" and every cost is $0.00 — dry-run proves the
// HARNESS PLUMBING ONLY, never equivalence. The thesis (strong-model-equivalent RESULTS at
// far lower cost) holds only on VERIFIABLE tasks where the free conformance gate + structural
// eval actually adjudicate result-parity; it is not a general-quality claim. The LIVE parity
// × cost measurement needs ANTHROPIC_API_KEY + FORGE_MODEL (+ FORGE_MODEL_CHEAP/MID).
//
//   node forge/bench.mjs <tasks.json> [--dry-run] [--json]
//
// tasks.json: [{ "agent": "forge/examples/balance-scout", "goal": "..." }, ...]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { runLoop } from './runtime/loop.mjs';
import { costOfTrace, resolvePrices, fmt$ } from './cost.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');

const HEADER =
  'forge bench — parity × cost. NOTE: --dry-run proves plumbing only (zero usage, identical\n' +
  'output, $0.00 both arms); it does NOT prove equivalence. Real parity × cost needs a key\n' +
  '(ANTHROPIC_API_KEY + FORGE_MODEL [+ FORGE_MODEL_CHEAP/MID]). Parity is adjudicated by the\n' +
  'free structural eval + conformance gate — a verifiable-task claim, not a general one.';

main();

async function main() {
  const args = process.argv.slice(2);
  const asJson = args.includes('--json');
  const dryRun = args.includes('--dry-run');
  const file = args.find((a) => !a.startsWith('--'));
  if (!file) {
    process.stderr.write('Usage: node forge/bench.mjs <tasks.json> [--dry-run] [--json]\n');
    process.exit(2);
  }

  const tasks = loadTasks(file);
  const prices = resolvePrices();
  const rows = [];

  for (const task of tasks) {
    const baseline = await runArm(task, { routed: false, dryRun });
    const routed = await runArm(task, { routed: true, dryRun });
    rows.push({
      goal: task.goal,
      agent: task.agent,
      baseline: score(baseline, prices),
      routed: score(routed, prices),
    });
  }

  const agg = aggregate(rows);
  if (asJson) {
    process.stdout.write(JSON.stringify({ dryRun, rows, aggregate: agg }, null, 2) + '\n');
    return;
  }
  report(rows, agg, dryRun);
}

// Load + validate the task list. Each task needs an `agent` dir and a `goal` string.
function loadTasks(file) {
  const abs = path.isAbsolute(file) ? file : path.resolve(process.cwd(), file);
  if (!fs.existsSync(abs)) { process.stderr.write('No such tasks file: ' + file + '\n'); process.exit(1); }
  let parsed;
  try { parsed = JSON.parse(fs.readFileSync(abs, 'utf8')); }
  catch (e) { process.stderr.write('Unreadable tasks file: ' + e.message + '\n'); process.exit(1); }
  const list = Array.isArray(parsed) ? parsed : parsed.tasks;
  if (!Array.isArray(list) || !list.length) { process.stderr.write('tasks file has no tasks\n'); process.exit(1); }
  return list.map((t) => ({ agent: t.agent, goal: t.goal, maxSteps: t.maxSteps }));
}

// Run ONE arm of ONE task. `routed:false` pins every step to the strong tier by hiding the
// cheaper tiers for the duration of the call; `routed:true` restores them so the router
// picks cheap-first. Env is saved/restored so arms never leak into each other.
async function runArm(task, { routed, dryRun }) {
  const saved = { cheap: process.env.FORGE_MODEL_CHEAP, mid: process.env.FORGE_MODEL_MID };
  if (!routed) { delete process.env.FORGE_MODEL_CHEAP; delete process.env.FORGE_MODEL_MID; }
  try {
    const agentAbs = path.resolve(repoRoot, task.agent);
    const workspace = path.join(agentAbs, 'workspace');
    fs.mkdirSync(workspace, { recursive: true });
    const ctx = { repoRoot, workspace };
    const system = 'You are a Forge bench agent. Work in small steps and finish.';
    const res = await runLoop({
      system,
      goal: task.goal,
      ctx,
      model: process.env.FORGE_MODEL, // may be undefined under --dry-run — the stub ignores it
      dryRun,
      agent: path.basename(agentAbs) + (routed ? '/routed' : '/baseline'),
      maxSteps: task.maxSteps || 4,
      onEvent: () => {},
    });
    return res;
  } finally {
    restore('FORGE_MODEL_CHEAP', saved.cheap);
    restore('FORGE_MODEL_MID', saved.mid);
  }
}

function restore(key, val) {
  if (val === undefined) delete process.env[key];
  else process.env[key] = val;
}

// Score an arm: reuse the free structural verdict + the gate signal, and compute the cost
// from the run's per-step usage + stamped model. A trace-like object is enough for costOfTrace.
function score(res, prices) {
  const traceLike = { steps: res.steps, model: process.env.FORGE_MODEL || null };
  const c = costOfTrace(traceLike, prices);
  return {
    outcome: res.outcome,
    verdict: res.evaluation ? res.evaluation.verdict : '-',
    gateClean: !!res.gateClean,
    cost: c.total,
    tokens: c.totalTokens,
  };
}

// Aggregate: parity rate (routed verdict matches baseline verdict) and the routed/baseline
// cost ratio. Div-by-zero → ratio 0 (e.g. both arms $0 under dry-run).
function aggregate(rows) {
  const n = rows.length;
  let parity = 0, baseCost = 0, routedCost = 0;
  for (const r of rows) {
    if (r.routed.verdict === r.baseline.verdict) parity++;
    baseCost += r.baseline.cost;
    routedCost += r.routed.cost;
  }
  const costRatio = baseCost > 0 ? routedCost / baseCost : 0;
  const savings = baseCost > 0 ? 1 - routedCost / baseCost : 0;
  return { tasks: n, parityRate: n ? parity / n : 0, baseCost, routedCost, costRatio, savings };
}

function report(rows, agg, dryRun) {
  const L = (s = '') => process.stdout.write(s + '\n');
  L(HEADER);
  L();
  L('mode: ' + (dryRun ? 'dry-run (plumbing only)' : 'live'));
  L();
  for (const r of rows) {
    L('• ' + firstLine(r.goal));
    L('    baseline: ' + r.baseline.verdict + '  ' + fmt$(r.baseline.cost) + '  (' + r.baseline.tokens + ' tok)');
    L('    routed:   ' + r.routed.verdict + '  ' + fmt$(r.routed.cost) + '  (' + r.routed.tokens + ' tok)  ' +
      'parity=' + (r.routed.verdict === r.baseline.verdict ? 'yes' : 'NO'));
  }
  L();
  L('aggregate: ' + agg.tasks + ' task(s)  parity=' + pct(agg.parityRate) +
    '  baseline=' + fmt$(agg.baseCost) + '  routed=' + fmt$(agg.routedCost) +
    '  cost-ratio=' + (agg.costRatio ? agg.costRatio.toFixed(3) : 'n/a') +
    '  savings=' + (agg.baseCost > 0 ? pct(agg.savings) : 'n/a (dry-run: $0 both arms)'));
}

function pct(x) { return (Number(x) * 100).toFixed(0) + '%'; }
function firstLine(s) { return String(s).split('\n')[0]; }
