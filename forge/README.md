# Forge — the AIEOS Agent Engine
Status: experimental
Type: reference
Owner: CTO (Government)
Extends: none

The Forge is AIEOS acting **like a sharp AI assistant that builds and runs agents**:
it turns an **intent** into a complete, contract-valid agent, then **drives that
agent's actions** until the intent is satisfied — and feeds the result back. It is the
"Fable-5 / Mythos" feel ([operating-doctrine](../kernel/laws/operating-doctrine.md))
made into a concrete loop over the kernel's agent model.

> Status: **experimental (kernel 1.3.0)**. v0 ships the creation tool, the action model,
> and the two loops. v1 ships an **executable runtime** ([runtime/loop.mjs](runtime/loop.mjs)
> + [run.mjs](run.mjs)) that drives the action loop for real — model-agnostic, with
> guardrails and an auditable [run trace](runs/README.md).

## The two loops

```
INTENT ──▶ [ creation loop ] ──▶ AGENT ──▶ [ action loop ] ──▶ RESULT
   ▲                                                              │
   └──────────────────── feeds back ◀────────────────────────────┘
```

- **Creation loop** ([creation-loop.md](creation-loop.md)) — intent → a full 5-file
  agent that satisfies [the agent contract](../kernel/contracts/agent.md). Scaffolded by
  the tool below, then filled with a distinct voice.
- **Action loop** ([action-loop.md](action-loop.md)) — the agent **plans → acts →
  observes → reflects**, taking [actions](action-contract.md) until done, then reports.

## The tool — create an agent from intent

```
npm run forge -- <target-dir> <agent-name> "<one-line mission>"
# e.g.
npm run forge -- forge/examples balance-scout "Find balance outliers in live telemetry."
```

It writes a conformant 5-file agent (`README.md` + responsibilities/authority/craft/
standards) ready to be enriched. The result passes `npm test` immediately — see
[create-agent.mjs](create-agent.mjs).

## The runtime — make an agent ACT

```
npm run forge:run -- <agent-dir> "<goal>" [--dry-run] [--max-steps N] [--json]
# e.g. full plan→act→observe→finish loop with no model and no API key:
npm run forge:run -- forge/examples/balance-scout "Inspect the workspace and finish." --dry-run
```

The model is chosen via `FORGE_MODEL` (no hardcoded default); a live run with it unset
errors clearly. Each run writes a [trace](runs/README.md) under `forge/runs/`. See
[runtime/loop.mjs](runtime/loop.mjs) and [run.mjs](run.mjs).

## The cost router — cheap-first, escalate on failure

The runtime routes each step to a **model tier** so the cheap model carries the easy
majority of steps and the strong model is spent only when a step is hard or a gate/eval
failed. Tiers come from the environment — no model id is hardcoded:

```
FORGE_MODEL=<strong>            # required for a live run (the anchor / ceiling)
FORGE_MODEL_CHEAP=<cheap>       # optional; falls back to FORGE_MODEL
FORGE_MODEL_MID=<mid>           # optional; falls back to FORGE_MODEL
FORGE_MAX_ESCALATIONS=2         # optional ladder-climb ceiling (default 2)
```

Policy ([runtime/router.mjs](runtime/router.mjs)): start `cheap`; the plan turn gets
`mid`; a failed gate climbs the ladder so the next step re-routes up to `strong` (monotonic
— it never drops back). With **only** `FORGE_MODEL` set, all tiers collapse to it and
behaviour is byte-identical to before the router existed. The chosen tier is stamped per
step in the trace.

Cost is computed for free from the trace (per-step usage × a configurable, **example**
price table — override with `FORGE_PRICES` JSON): `node forge/cost.mjs <trace.json>`, and
`inspect.mjs` now prints a `cost:` line with a per-tier split. See
[cost.mjs](cost.mjs).

## The bench — parity × cost

```
node forge/bench.mjs forge/bench-tasks.json [--dry-run] [--json]
```

Runs each task twice — **baseline** (every step pinned to `FORGE_MODEL`) vs **routed**
(cheap-first) — and reports the result verdict (free structural eval + gate) and dollar
cost per arm plus the routed/baseline ratio.

> **Honest boundary.** Under `--dry-run` the stub returns zero usage and identical output
> for both arms, so parity is trivially equal and every cost is `$0.00` — dry-run proves the
> **plumbing only**, never equivalence. The real parity × cost measurement needs a key
> (`ANTHROPIC_API_KEY` + `FORGE_MODEL` [+ `FORGE_MODEL_CHEAP`/`MID`]). The equivalence claim
> holds only on **verifiable** tasks, where the free conformance gate + structural eval
> actually adjudicate result-parity; it is not a general-quality claim.

## How it relates to the rest of AIEOS
- It **inherits the kernel**, never forks it (Directive #6). A forged agent is a normal
  agent; it lives in a department and obeys decision-authority.
- It is **bounded by the laws**: the Forge is assertive (the doctrine) but never bypasses
  the gate (Directive #9) or routes around the Government (Directive #5).
- See [examples/](examples/) for a forged agent.
