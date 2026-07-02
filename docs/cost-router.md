# AIEOS Cost Router
Status: stable
Type: reference
Owner: CTO (Government)
Extends: none

## The thesis

Deliver Fable-5-equivalent **results** on verifiable tasks at roughly **10x lower
blended cost**. The lever is not a cheaper model everywhere — it is spending the
expensive model **only where it changes the answer**. Three moves compound:

1. **Route by difficulty.** Most steps go to a cheap tier; only the hard steps, and
   any step retried after a failure, escalate to the strong tier.
2. **Spend fewer tokens.** Memory reuse, context trimming, and prompt caching keep the
   token bill down independently of which model runs
   (see [owned-memory](owned-memory.md)).
3. **Verify for free.** The conformance gate and the structural self-check cost nothing
   and adjudicate result-parity, so escalation is triggered by evidence, not by guessing.

Cheap-first, verify-free, escalate-only-on-failure is what preserves result parity while
cutting spend. The claim is scoped: it holds on **verifiable** tasks where the free gate
and structural eval can actually judge the output — it is not a general-quality promise.
See [The honest boundary](#the-honest-boundary) below.

## The routing policy

The router is pure and model-agnostic — it holds no literal model id. It reads the tiers
from the environment and picks one per step from the loop's context. The policy is
**monotonic**: within a run a step can be raised to a higher tier but is never downgraded.

- **Default: cheap.** Ordinary steps run on the cheap tier.
- **Plan turn: mid.** The plan turn (the second turn) is where the run's shape is
  decided, so it routes to the mid tier — a small, targeted upgrade on the highest-
  leverage turn.
- **After a failure: strong.** Once the run has escalated at least once, subsequent steps
  run on the strong tier. Escalation is the ceiling of the ladder.
- **Hints raise, never lower.** A per-step `tierHint` may push a step up a tier but can
  never pull it down.

The escalation count is capped by `FORGE_MAX_ESCALATIONS` (default 2, the height of the
cheap -> mid -> strong ladder), so a pathological run cannot climb forever.

## Tiers and price-table configuration

**Tiers** come entirely from the environment, so nothing is hardcoded and backward
compatibility is guaranteed by construction:

- `FORGE_MODEL` — the strong tier (the existing, only-source-of-truth model id).
- `FORGE_MODEL_CHEAP` — the cheap tier; falls back to `FORGE_MODEL` when unset.
- `FORGE_MODEL_MID` — the mid tier; falls back to `FORGE_MODEL` when unset.

If only `FORGE_MODEL` is set, all three tiers collapse to the same id and every step
routes to it — byte-identical to today's behaviour. The router adds tiers; it never
changes the single-model path.

**Prices** live in a separate, clearly-fake example table keyed by model id, each row
carrying an input and an output price per million tokens plus a `default` fallback row.
The numbers are illustrative, **not** real vendor prices, and are overridable two ways: by
passing a table in code, or by setting `FORGE_PRICES` to a JSON object. Cost accounting is
therefore configurable without editing any source.

## Cost accounting

Every trace already records per-step token `usage` and, once the router runs, the `model`
and `tier` chosen for each step (see the [runtime traces](../forge/runtime/README.md)).
The cost module is pure — no I/O, no dependencies — and turns that trace into money:

- It attributes each step to `step.model` (falling back to the trace-level model) and
  looks its price up in the table, using the `default` row for any unpriced id.
- It sums a **total** cost, a **by-tier** breakdown (cheap vs mid vs strong), the total
  token count, and a **blended $/Mtok** for the whole run. Any division by zero collapses
  to zero rather than erroring.

Because the router stamps the tier on each step, the by-tier split falls out
automatically — you can see exactly how much of the bill each tier accounts for.
[`forge/inspect.mjs`](../forge/inspect.mjs) reads these numbers back: `--last` prints a
`cost:` line with the total and blended rate (plus one line per tier when more than one
tier ran and a per-step tier tag), and `--list` appends the total to each row. Inspect
stays read-only — it re-renders, it never re-runs.

## Escalation is parity

The seam is in [`forge/runtime/loop.mjs`](../forge/runtime/loop.mjs). A **failed gate is
already an observation, not a stop** — the loop keeps going. The router uses that: when the
gate fails, the escalation counter increments, and the very next turn re-routes **up** a
tier. That is the retry-with-a-stronger-model mechanism, and it is what protects parity.

The logic is: try the cheap tier first; if the free gate or structural eval says the
result is wrong, escalate and try again on a stronger tier. A task the cheap model can
finish costs cheap-tier money; a task it cannot is caught by verification and finished by
the strong model. Either way the **result** clears the same bar — the only variable is how
much it cost to get there. Escalation-on-failure is precisely what lets a cheap-first
policy keep strong-model result-parity.

## The benchmark harness

[`forge/bench.mjs`](../forge/bench.mjs) runs a task list twice — a **routed** arm (the
router picks per step) against a **baseline** arm (every step forced to `FORGE_MODEL`) —
and scores each with the same free judges the runtime uses: the structural eval verdict
plus a clean gate. It reports per-task verdict, cost, and savings, then an aggregate
parity rate and cost ratio. Usage is
`node forge/bench.mjs <tasks.json> [--dry-run] [--json]`.

## The honest boundary

**Under `--dry-run` the benchmark proves plumbing, not equivalence.** The dry-run stub
returns zero usage and identical output for both arms, so parity is trivially "equal" and
cost is `$0.00`. That exercises the wiring — routing decisions, escalation counting, cost
arithmetic, trace fields, and the report table all run fully offline with no key — but it
says nothing about whether a cheap model matches a strong one. The bench header states this
caveat verbatim in spirit.

**The live parity-times-cost measurement is deferred to a key.** Producing real token
usage and real verdicts needs `ANTHROPIC_API_KEY` and `FORGE_MODEL` (plus
`FORGE_MODEL_CHEAP` / `FORGE_MODEL_MID` to make the tiers distinct). Only that live
measurement needs a key — the routing decision, escalation ladder, cost math, trace
stamping, and report all run offline.

**The parity claim is scoped to verifiable tasks.** "Fable-5-equivalent results at ~10x
lower cost" holds only where the free conformance gate and structural eval can actually
adjudicate result-parity. It is a claim about verifiable work, not a general statement that
a cheap model is as good as a strong one.

## Verifying it (key-free)

The whole router, cost, escalation, and bench surface runs offline. A smoke run with
distinct tier ids shows per-step `tier` in the trace (cheap by default, mid on the plan
turn, strong after any gate failure); `inspect --last` prints the `cost:` line ($0.00 on a
zero-usage dry-run trace); `cost.mjs` computes a nonzero blended $/Mtok on a real-usage
trace and $0 on a dry-run one; and `bench.mjs --dry-run` prints both arms with the honesty
caveat. Running a plain smoke with **no** tier envs must leave the trace unchanged versus
today — the backward-compat proof.

Throughout, the guardrails stay intact: the harm-law-intact gate and
[Directive #11](../kernel/laws/prime-directives.md) stay in force, and the markdown gate
stays at 0 errors.

## Files

- [`forge/runtime/router.mjs`](../forge/runtime/router.mjs) — pure tier resolution and
  per-step choice; no literal model id.
- [`forge/cost.mjs`](../forge/cost.mjs) — pure cost-of-trace, price table, by-tier split,
  blended $/Mtok.
- [`forge/bench.mjs`](../forge/bench.mjs) — routed-vs-baseline parity-times-cost harness
  (live arm needs a key).
- [`forge/runtime/loop.mjs`](../forge/runtime/loop.mjs) — the seam: routes each turn,
  stamps `tier`/`model`, escalates on a failed gate.
- [`forge/inspect.mjs`](../forge/inspect.mjs) — read-only viewer; renders cost and tiers.

## How it relates to the rest of the Forge

The router sits inside the [runtime](../forge/runtime/README.md), the executable form of
the [action loop](../forge/action-loop.md). It changes *which* model each step calls and
*how much* the run costs; it changes nothing about the loop's guarantees, the gate, or the
[owned-memory](owned-memory.md) that keeps the token bill down in the first place.
