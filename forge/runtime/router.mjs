// Forge runtime — the cost router. Picks WHICH model tier runs a given step, so the loop
// can spend a cheap model on the easy majority and only escalate to a strong model when a
// step is hard or a prior gate/eval failed. Pure and model-agnostic: it holds NO literal
// model id — every id flows in from the environment (FORGE_MODEL and, optionally,
// FORGE_MODEL_CHEAP / FORGE_MODEL_MID). No I/O, no network. Fully exercised under
// --dry-run: the DECISION is still computed and logged even though the stub makes no call,
// which is exactly how the routing logic is proven offline.
//
// Backward-compat by construction: with only FORGE_MODEL set, cheap = mid = strong = that
// one id, so every step resolves to the same model and behaviour is byte-identical to
// before the router existed.

const TIER_ORDER = ['cheap', 'mid', 'strong']; // ascending capability / cost
const RANK = { cheap: 0, mid: 1, strong: 2 };

// Resolve the three tiers from the environment. `strong` is the anchor (FORGE_MODEL); the
// cheaper tiers fall back to it when unset, so a lone FORGE_MODEL collapses all three to a
// single id. Model-agnostic: no default id is invented here — an unset FORGE_MODEL yields
// `undefined`, which the dry-run stub ignores and a live run rejects upstream (llm.mjs).
export function tiersFromEnv(env = process.env) {
  const strong = env.FORGE_MODEL;
  const cheap = env.FORGE_MODEL_CHEAP || strong;
  const mid = env.FORGE_MODEL_MID || strong;
  return { cheap, mid, strong };
}

// The escalation ceiling — how many times a run may climb the ladder before it is pinned to
// the strong tier. Defaults to the ladder height (2: cheap → mid → strong). Configurable via
// FORGE_MAX_ESCALATIONS so a run can be capped without code edits.
export function maxEscalations(env = process.env) {
  const n = Number(env.FORGE_MAX_ESCALATIONS);
  return Number.isFinite(n) && n >= 0 ? Math.floor(n) : 2;
}

// Choose the tier (and its model id) for a single step.
//   ctx = { stepIndex, escalated, lastGateFailed, lastEvalFailed, tierHint }
// Policy:
//   - start at `cheap` (the cheap-first default that carries the easy majority of steps);
//   - the plan turn (stepIndex === 1) gets `mid` — planning is the highest-leverage step;
//   - any escalation (escalated >= 1) OR a just-failed gate/eval pins the step to `strong`;
//   - `tierHint` may only RAISE the tier, never lower it.
// Monotonic: escalation state only ever increases across a run, so once a run climbs to
// `strong` it never drops back — the router never downgrades a run mid-flight.
export function choose(tiers, ctx = {}) {
  const {
    stepIndex = 0,
    escalated = 0,
    lastGateFailed = false,
    lastEvalFailed = false,
    tierHint = null,
  } = ctx;

  let rank = RANK.cheap;
  if (stepIndex === 1) rank = Math.max(rank, RANK.mid); // plan turn
  if (escalated >= 1 || lastGateFailed || lastEvalFailed) rank = RANK.strong;

  // A hint may push up (harder step known in advance) but never pull down below policy.
  if (tierHint && RANK[tierHint] != null) rank = Math.max(rank, RANK[tierHint]);

  const tier = TIER_ORDER[rank];
  return { tier, model: tiers[tier] };
}
