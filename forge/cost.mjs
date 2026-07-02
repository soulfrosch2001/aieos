#!/usr/bin/env node
// Forge cost accounting — pure, deterministic, no deps, no network. Given a trace (each
// step carries token `usage` and, once the router stamps it, a `model`) and a PRICE TABLE,
// it computes what the run cost and a blended $/Mtok. Used by inspect.mjs and bench.mjs, and
// runnable directly as a CLI over any trace in forge/runs/.
//
// The default price table below is EXAMPLE data — clearly-fake round numbers, NOT real
// vendor prices — so nothing here is coupled to any specific model. Override it entirely
// with the `prices` argument or the FORGE_PRICES env var (a JSON object of the same shape).
// A run whose model has no row falls back to the `default` row. Dry-run traces report zero
// usage, so their cost is exactly $0.00 — that is the honest signal that no model was called.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Example price table. Keys are model ids; the special `default` row prices any model with
// no explicit entry. Numbers are illustrative dollars-per-million-tokens, not real prices.
export function defaultPrices() {
  return {
    default: { inPerMtok: 1.0, outPerMtok: 5.0 },
    // Illustrative tier-shaped rows keyed by the example ids used in the offline verify
    // (FORGE_MODEL_CHEAP=cheap-x, FORGE_MODEL_MID=mid-x, FORGE_MODEL=strong-x). These are
    // NOT real model ids or prices — just so a routed dry-run shows a plausible split.
    'cheap-x': { inPerMtok: 0.25, outPerMtok: 1.25 },
    'mid-x': { inPerMtok: 1.0, outPerMtok: 5.0 },
    'strong-x': { inPerMtok: 3.0, outPerMtok: 15.0 },
  };
}

// Resolve the effective price table: explicit arg wins, else FORGE_PRICES (JSON) merged over
// the defaults, else the defaults alone. A malformed FORGE_PRICES is ignored (never throws).
export function resolvePrices(prices) {
  if (prices) return prices;
  const raw = process.env.FORGE_PRICES;
  if (!raw) return defaultPrices();
  try {
    const parsed = JSON.parse(raw);
    return { ...defaultPrices(), ...parsed };
  } catch {
    return defaultPrices();
  }
}

// The price row for a model id, falling back to the `default` row (or zero if even that is
// absent). Never throws.
export function priceFor(model, prices = defaultPrices()) {
  return prices[model] || prices.default || { inPerMtok: 0, outPerMtok: 0 };
}

// Cost of a single step's token usage under a given price row, in dollars.
export function stepCost(usage, price) {
  const inTok = (usage && usage.input_tokens) || 0;
  const outTok = (usage && usage.output_tokens) || 0;
  const inRate = (price && price.inPerMtok) || 0;
  const outRate = (price && price.outPerMtok) || 0;
  return (inTok / 1e6) * inRate + (outTok / 1e6) * outRate;
}

// Cost of a whole trace. Each step is attributed to `step.model || trace.model` (the router
// stamps `step.model` per step; older traces fall back to the run-level `trace.model`).
// Returns { total, byTier, totalTokens, blendedPerMtok } where byTier splits the spend by the
// step's stamped tier (once routing is on) and blendedPerMtok is total$ / total-tokens × 1e6
// (0 when there were no tokens — e.g. a dry-run trace).
export function costOfTrace(trace, prices = defaultPrices()) {
  const steps = (trace && trace.steps) || [];
  const groups = new Map(); // key: tier || model || 'default'
  let total = 0;
  let totalTokens = 0;

  for (const s of steps) {
    const usage = s.usage || { input_tokens: 0, output_tokens: 0 };
    const model = s.model || (trace && trace.model) || null;
    const cost = stepCost(usage, priceFor(model, prices));
    const tokens = (usage.input_tokens || 0) + (usage.output_tokens || 0);
    total += cost;
    totalTokens += tokens;

    const key = s.tier || model || 'default';
    const g = groups.get(key) || { tier: s.tier || null, model, cost: 0, tokens: 0 };
    g.cost += cost;
    g.tokens += tokens;
    if (!g.model && model) g.model = model;
    groups.set(key, g);
  }

  const byTier = [...groups.entries()].map(([label, g]) => ({ label, ...g }));
  const blendedPerMtok = totalTokens > 0 ? (total / totalTokens) * 1e6 : 0;
  return { total, byTier, totalTokens, blendedPerMtok };
}

// Format a dollar amount for display (4 decimals — runs are small).
export function fmt$(n) {
  return '$' + (Number(n) || 0).toFixed(4);
}

// ---- CLI: `node forge/cost.mjs <trace.json> [--json]`. Read-only; prints the cost of one
// trace. Runs only when invoked directly, never on import.
const invokedDirectly =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  const args = process.argv.slice(2);
  const asJson = args.includes('--json');
  const file = args.find((a) => !a.startsWith('--'));
  if (!file) {
    process.stderr.write('Usage: node forge/cost.mjs <trace.json> [--json]\n');
    process.exit(2);
  }
  const abs = path.isAbsolute(file) ? file : path.resolve(process.cwd(), file);
  if (!fs.existsSync(abs)) {
    process.stderr.write('No such trace: ' + file + '\n');
    process.exit(1);
  }
  let trace;
  try {
    trace = JSON.parse(fs.readFileSync(abs, 'utf8'));
  } catch (e) {
    process.stderr.write('Unreadable trace: ' + e.message + '\n');
    process.exit(1);
  }
  const prices = resolvePrices();
  const c = costOfTrace(trace, prices);
  if (asJson) {
    process.stdout.write(JSON.stringify(c, null, 2) + '\n');
  } else {
    process.stdout.write('Trace: ' + path.basename(abs) + '\n');
    process.stdout.write(
      '  cost:     ' + fmt$(c.total) + '  (' + fmt$(c.blendedPerMtok) + '/Mtok, ' +
      c.totalTokens + ' tok)\n'
    );
    if (c.byTier.length > 1) {
      for (const g of c.byTier) {
        process.stdout.write(
          '    ' + (g.tier || g.model || g.label) + ': ' + fmt$(g.cost) +
          ' (' + g.tokens + ' tok)\n'
        );
      }
    }
    if (c.totalTokens === 0) {
      process.stdout.write('  note:     zero-usage trace (dry-run) — no model was called, so cost is $0.\n');
    }
  }
}
