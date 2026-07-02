# Forge Runtime — the executable agent engine
Status: experimental
Type: reference
Owner: CTO (Government)
Extends: none

The runtime is the part of the Forge that **actually acts**. It takes an agent and a
goal and drives the [action loop](../action-loop.md) — plan → act → observe → reflect —
calling real tools under guardrails, until the goal is met and the gate passes. It is
designed to *feel* like a capable AI assistant while staying bounded by the kernel laws.

It is **model-agnostic**: the runtime is not tied to any specific model. The model is
chosen entirely through the `FORGE_MODEL` environment variable, and the whole loop also
runs with **no model and no API key** in `--dry-run`.

## How to run

```
node forge/run.mjs <agent-dir> "<goal>" [--dry-run] [--max-steps N] [--json]
node forge/run.mjs --smoke [--dry-run]
```

Examples:

```
# End-to-end with no model and no key — full plan → act → observe → finish loop + trace:
node forge/run.mjs forge/examples/balance-scout "Inspect the workspace and finish." --dry-run

# Live run — pick the model first, then go:
export FORGE_MODEL=<your-model-id>
export ANTHROPIC_API_KEY=<your-key>
node forge/run.mjs forge/examples/balance-scout "Find balance outliers and write a note."
```

There is also an npm alias: `npm run forge:run -- <agent-dir> "<goal>" [--dry-run]`.

Flags:
- `--dry-run` — run the full loop with the deterministic stub in
  [llm.mjs](llm.mjs); **never** reads `FORGE_MODEL` or `ANTHROPIC_API_KEY`.
- `--max-steps N` — cap the number of turns (default 20, or `FORGE_MAX_STEPS`).
- `--json` — print the run-trace object instead of the human step lines.
- `--smoke` — run a built-in, tightly capped trivial goal end-to-end as a health
  check; pairs with `--dry-run` to prove the engine wires up with no model and no key.

On startup `run.mjs` prints a one-line **banner** echoing the resolved model (or
`dry-run`), whether dry-run is active, and the active ceilings (max steps, max tokens,
delegation depth) — so every run states its own bounds before it acts.

Exit codes: `2` missing `<agent-dir>` or `<goal>` (usage); `3` live run with
`FORGE_MODEL` unset and no `--dry-run`.

### Smoke check and preflight

`--smoke` runs a fixed, minimal goal under a low step ceiling so you can confirm the
runtime stands up end-to-end in one command. Before a **live** run it triggers a
`preflight` probe in [llm.mjs](llm.mjs) that checks the model id and auth are present and
reachable, failing fast with a clear message instead of mid-loop. Under `--dry-run` the
preflight is **stubbed** — it reports ready without any network call or key — so
`node forge/run.mjs --smoke --dry-run` is the canonical offline health check.

New-operator setup (picking `FORGE_MODEL`, supplying the key, and the exact smoke
command) is written up in `forge/SETUP.md`.

## Loading an agent

`run.mjs` reads the agent's **five contract files** (`README.md`,
`responsibilities.md`, `authority.md`, `craft.md`, `standards.md` — see
[the agent contract](../../kernel/contracts/agent.md)) and concatenates them, under
labeled headers, into one system prompt. A fixed operating preamble is prepended that
states the loop rules, the agent's lane bounds, and the gate law. If any of the five
files is missing, the run fails clearly.

The agent's **workspace** is derived from its own folder (`<agent-dir>/workspace`),
never from caller input — so an agent physically cannot write outside its lane
([Directive #5](../../kernel/laws/prime-directives.md)).

## The loop

Implemented in [loop.mjs](loop.mjs). The four phases are **roles in one conversation**,
not four separate model calls: each turn the model emits text (the plan / reflection)
and tool calls (the actions); the runtime executes the tools, threads the results back
as the next observation, and the model reflects on the following turn.

Per turn:
1. Call the model with the system prompt, the running transcript, and the tool schemas.
2. Record its text as a `plan` / `reflect` event.
3. Execute each requested tool in order, capturing each result.
4. Thread the tool results back as one observation message.
5. Repeat until `finish`, or a stop condition trips.

Stop conditions and outcomes:
- `done` — the model called `finish` (and the gate guardrail was satisfied).
- `incomplete` — the model stalled (two consecutive turns with no tool and no progress).
- `stuck` — the same action repeated three times in a row.
- `budget_exhausted` — the `--max-steps` ceiling was reached.

## Memory and retrieval

Before the loop starts, the runtime gathers a lexical corpus from the project's
durable memory — `memory/registers/`, `government/decisions/`, and
`companies/*/memory/` — scores it against the goal, and injects the top matches as a
**Retrieved memory** block into the opening turn. The agent therefore starts the run
already aware of the relevant decisions and prior lessons instead of rediscovering them.

Retrieval scores at **section granularity**, not whole files: each document is split
into heading-anchored chunks so the injected block is the matching section, not an entire
register. Scores are then weighted by a **recency factor** (a document's `mtime` decays
its weight, so fresher decisions and lessons surface first), and **near-duplicate hits
are dropped** via a Jaccard-similarity check so the block never spends its budget echoing
the same passage twice. The result is a tighter, fresher, de-duplicated opening context.

Lexical scoring is **BM25-style** — term weights combine term frequency with an
**inverse document frequency** (IDF) factor computed in one pass over the chunk corpus,
so rare, discriminating terms win over common ones and the most *relevant* section
surfaces rather than the one that merely repeats the goal's common words. This stays
pure arithmetic — no model, unchanged under `--dry-run`.

### Episodic memory (past runs become recallable)

Past run traces are themselves owned memory. [episodic.mjs](episodic.mjs) reads the
recent JSON traces under `forge/runs/` and turns each into a corpus document —
title plus a short text summarizing the run's goal, outcome, verdict, steps, and final
summary, carrying the trace's `mtime` for recency weighting. `buildMemoryBlock` folds
these episodes into the same corpus as the markdown registers, so a prior run that hit
the same problem is retrieved and injected like any other memory. Episodes are capped
per retrieval and lean on recency decay so the rich trace stream cannot swamp the
curated lessons. Reading traces is **pure file I/O**, so the episodic layer runs
unchanged under `--dry-run`.

On **every** outcome — `done`, `failed`, or `stuck`, not only success — the runtime
appends a dated digest/lesson to
[`memory/registers/forge-lessons.md`](../../memory/registers/forge-lessons.md), so a
failed or stalled run still leaves its working set behind for the next one. The digest
records the real outcome and the gate-clean status; non-`done` digests are marked
**tentative** so they inform without being trusted as settled fact. These memory writes
happen in the **trusted runtime**, not through `write_file`, so the workspace guardrail
is never relaxed — the runtime reads and appends project memory but the agent still
cannot.

Retrieval is **pure file I/O and lexical scoring** — it needs no model and runs
unchanged under `--dry-run`. Set `FORGE_MEMORY=off` to disable the injected block, the
episodic fold-in, and the digest append.

Implemented in [memory.mjs](memory.mjs) and [episodic.mjs](episodic.mjs).

## The tools

Defined in [tools.mjs](tools.mjs). The surface is deliberately small — there is no
exec, delete, or network-write tool, so there is no irreversible-action surface.

- `list_dir` — list entries at a path (read, repo-wide).
- `read_file` — read a UTF-8 file (read, repo-wide; output is bounded with a
  truncation footer so nothing is silently withheld).
- `write_file` — write a file, **restricted to the agent workspace**.
- `run_gate` — run the conformance gate (`node tests/conformance/run.mjs`) so the agent
  can verify before it claims ([Directive #9](../../kernel/laws/prime-directives.md)).
- `finish` — end the run with a short summary, including a one-line self-check of
  whether the goal was met.
- `plan` — record an explicit ordered checklist of steps the agent intends to take.
- `update_plan` — mark steps done or revise the checklist as the work proceeds.
- `delegate` — spawn a bounded **in-lane** sub-run to decompose a task (off by default;
  see [Sub-delegation](#sub-delegation-in-lane) below).

Every tool returns a uniform `{ ok, output }` envelope. A failure is fed back to the
model as an errored observation, not raised as a crash — failures are data the agent
reflects on, not dead ends.

## Planning

The agent can keep an **explicit plan**: a `plan` tool sets an ordered checklist, and
`update_plan` revises it or marks steps done. The current plan is persisted to
`trace.data.plan` and echoed back as a checklist in the next observation turn, so the
model always sees its own intent and the trace is auditable against it
([Directive #8](../../kernel/laws/prime-directives.md)). This is the long-horizon
coherence lever — it keeps multi-step runs on track. Implemented in [plan.mjs](plan.mjs).

## Sub-delegation (in-lane)

For a genuinely compound task the agent can decompose it into a **sub-run** with the
`delegate` tool, implemented in `subagent.mjs`. A delegation runs the *same*
loop recursively — **same agent, same workspace, same gate, same write-confinement** — on
a narrower sub-task, producing its own trace, and threads the result back as the parent's
next observation. It opens no cross-company lane: delegation is strictly in-lane, so it
never routes around the Government
([Directive #2](../../kernel/laws/prime-directives.md)).

It is **off by default**. The `delegate` schema is only advertised to the model when
`FORGE_SUBAGENTS=on` (or a positive depth budget is set), so default runs behave exactly
as before. Two hard limits fence it: a sub-run is capped at a small step ceiling, and a
**depth cap** (`FORGE_MAX_DEPTH`, default 1) is enforced in code — a `delegate` past the
cap is denied with a `GUARDRAIL:` tool result rather than recursing, so the existing step
ceiling and the depth cap together make runaway recursion impossible.

Under `--dry-run` delegation is exercised by a **sentinel goal**: the stub emits one
`delegate` call and then finishes, so the whole primitive is testable offline with no
model and no key —
`FORGE_SUBAGENTS=on node forge/run.mjs <agent-dir> "delegate-smoke: decompose and finish" --dry-run`.

### Parallel fan-out (concurrent sub-runs)

When the model requests **two or more** `delegate` calls in the **same** turn, the runtime
dispatches them **concurrently** (`Promise.all`) instead of one-at-a-time — independent
sub-tasks no longer wait on each other's wall-clock time. This is the async-sub-agent
counterpart the runtime was missing: a single turn can now spawn several ongoing sub-runs
at once, the same way a model can request several tools in parallel. The tool's own
description tells the model it may do this.

With 0 or 1 `delegate` calls in a turn the code path is **byte-identical to before**
(falls straight through to the existing sequential branch) — this is purely additive, the
same guarantee the cost router makes. Every guardrail is unchanged and still per-call: the
depth cap is checked **before** each call is dispatched (an over-cap call in a parallel
batch is refused synchronously and never joins the `Promise.all`), and `dirtyWrites`/
`gateClean` are updated the same way regardless of how many sub-runs wrote — if *any*
concurrent sub-run left the workspace dirty without a clean gate, the parent's gate
requirement re-arms exactly as it would for a single delegate call.

Test it offline with the **parallel sentinel** — the stub emits two `delegate` calls in
one turn:
`FORGE_SUBAGENTS=on node forge/run.mjs <agent-dir> "parallel-delegate-smoke: decompose two and finish" --dry-run`.

**Known limitation of concurrent sub-runs:** parallel sub-runs share the *same* workspace
(same as sequential delegation always has). Nothing new stops two concurrent sub-tasks
from writing the same file at once — that risk exists whenever `FORGE_SUBAGENTS=on`, it is
just more likely to matter now that sub-runs can genuinely overlap in time. Keep parallel
sub-tasks to genuinely independent pieces of work (the tool description says so), the same
discipline already expected of sequential delegation.

## Self-check (structural verdict)

After the loop ends, the runtime runs a deterministic structural self-check over the
trace it already has — no model call — checking whether the goal was addressed, the gate
passed, writes were produced, and the loop did not stall. The result lands in
`trace.data.evaluation` and prints as a single `verdict:` line. It is **advisory**: it
never gates `finish`, it only reports. Because it reads the trace and nothing else, it
runs identically under `--dry-run`. The rubric it documents lives in
[`forge/eval-rubric.md`](../eval-rubric.md); implemented in [eval.mjs](eval.mjs).

## Robustness on live runs

Live model calls survive transient failure: [llm.mjs](llm.mjs) retries on `429`, `5xx`,
and network errors with exponential backoff that honors any `Retry-After` header
(`FORGE_MAX_RETRIES`, default 4). Each call surfaces token `usage` (the dry-run stub
reports zeros), and the transcript is trimmed to a character budget before each call so
long runs stay within context — the trim **never** drops the first user turn or the last
tool result. None of this affects `--dry-run`, which makes no network calls.

## Guardrails

Enforced in code, because the model cannot be trusted to self-enforce them:
1. **Writes cannot escape the workspace** — path containment with realpath resolution
   and `..` rejection; the workspace is derived from the agent folder, not caller input.
2. **The gate is never skipped** — `finish` is intercepted while there are unverified
   writes; the model must `run_gate` and pass since its last write before it can finish
   ([Directive #9](../../kernel/laws/prime-directives.md)).
3. **No destructive surface** — only read / write-in-workspace / run_gate / finish exist.
4. **Bounded autonomy** — a step ceiling plus repeat-detection; the loop never runs
   unbounded.
5. **Stay in lane** — denied actions return a `GUARDRAIL:` message naming the rule, so
   the agent self-corrects in-lane rather than routing around the Government
   ([Directive #2](../../kernel/laws/prime-directives.md) /
   [Directive #5](../../kernel/laws/prime-directives.md)).

## Model selection (model-agnostic)

`FORGE_MODEL` is the **only** source of the model id — there is no hardcoded default
tied to any particular model.

- `--dry-run` — runs the full loop with **no model and no key** via the stub in
  [llm.mjs](llm.mjs). Use this to exercise the engine and the trace with zero config.
- Live run — set `FORGE_MODEL` to whatever model id you want and provide
  `ANTHROPIC_API_KEY`. If `FORGE_MODEL` is unset on a live run, the runtime errors
  clearly and exits — it does **not** pick a default. The per-call response budget is
  `FORGE_MAX_TOKENS` (default 2048).

## Cost router (model per step)

The runtime does not have to call one model for the whole run. [router.mjs](router.mjs)
resolves three **tiers** from the environment — `FORGE_MODEL` (strong),
`FORGE_MODEL_CHEAP`, and `FORGE_MODEL_MID` (each falling back to `FORGE_MODEL` when
unset) — and picks one per step: **cheap by default**, **mid on the plan turn**, and
**strong once the run has escalated**. The policy is monotonic (a step is never
downgraded mid-run) and capped by `FORGE_MAX_ESCALATIONS` (default 2). With only
`FORGE_MODEL` set, all three tiers collapse to it and behaviour is byte-identical to
before — the router is purely additive.

Escalation is wired into the loop: a **failed gate is an observation, not a stop**, so
when it fails the escalation counter rises and the next turn re-routes up a tier
(cheap -> strong). That is the retry-with-a-stronger-model mechanism, and it is what lets
a cheap-first policy keep strong-model result-parity on verifiable tasks. Each step is
stamped with its `tier` and `model` in the trace. The router is **pure and
model-agnostic** (no literal id) and its decision is computed and logged even under
`--dry-run`, where there is no real model — proving the logic offline.

[`forge/cost.mjs`](../cost.mjs) turns a trace into money: it attributes each step to its
stamped model, looks the price up in a configurable, clearly-fake example table
(overridable via arg or `FORGE_PRICES`), and returns the total, a by-tier split, and a
blended $/Mtok. `inspect.mjs` renders these. [`forge/bench.mjs`](../bench.mjs) runs a
task list as a routed arm vs. a `FORGE_MODEL`-only baseline and reports parity (gate +
eval) against cost. Under `--dry-run` the stub returns zero usage and identical output,
so both arms are trivially equal at $0.00 — dry-run proves the **plumbing only**; the
live parity-times-cost measurement needs a key. The full design is in
[`docs/cost-router.md`](../../docs/cost-router.md).

## Traces

Every run writes an append-mostly JSON trace under `forge/runs/` at
`forge/runs/<ISO-timestamp>-<agent>.json`, updated after each turn so a crash still
leaves evidence ([Directive #8](../../kernel/laws/prime-directives.md)). The record
captures the goal, the model (or dry-run), each step's text, actions and observations,
and the final outcome, summary, and gate verdict. Each step also records its wall-clock
`ms` and token `usage`, and the trace closes with a `totals` block summing them — so a
run's cost and time are measured, not guessed (under `--dry-run` the usage totals are
zero, which is itself the proof of model-agnosticism). See `forge/runs/README.md` for the
exact format.

## Inspecting runs

[`forge/inspect.mjs`](../inspect.mjs) is a **read-only** viewer over `forge/runs/`:

```
node forge/inspect.mjs --list     # list recent runs
node forge/inspect.mjs --last     # render the most recent run
```

It only re-renders existing traces — it never re-executes a run — so it is safe to point
at any past trace, including dry-run traces, to read the steps, plan, verdict, and totals.

## Consolidating memory (the "sleep" step)

Memory that only grows is a landfill. [`forge/consolidate.mjs`](../consolidate.mjs) is a
**dependency-free CLI** that reviews [`forge-lessons.md`](../../memory/registers/forge-lessons.md)
(and the episodes) to distil it: fold exact and near-duplicate lesson rows into one with
a seen-count tally, and promote repeated, firm lessons. It never erases history — it
corrects by adding ([Directive #7](../../kernel/laws/prime-directives.md)).

```
node forge/consolidate.mjs            # DRY-RUN by default — print the diff plan, write nothing
node forge/consolidate.mjs --apply    # back up the register, then apply the plan
```

There is also an npm alias: `npm run forge:consolidate -- [--apply]`.

It is **dry-run by default**: with no flags it only prints the proposed plan and writes
nothing, so a CTO/council step can read the plan and approve before anything changes.
Only `--apply` mutates, and before any write it copies the register to an **attic**
backup, so every fold is one file-restore or `git revert` away. Like the runtime's own
lesson writes, consolidation writes **only** `memory/registers/*` through the trusted
runtime — it never touches `write_file` and never relaxes the workspace guardrail. It is
pure file I/O and lexical comparison, so it needs **no model** and runs identically with
no key.

## Files
- [llm.mjs](llm.mjs) — the model call (Messages API + retry/backoff, `usage`, message
  trimming) and the dry-run stub.
- [tools.mjs](tools.mjs) — the tools and their guardrails.
- [memory.mjs](memory.mjs) — gather, BM25 retrieve, format the memory block, build it
  (markdown registers + episodes), and append lessons/digests.
- [episodic.mjs](episodic.mjs) — summarize `forge/runs/*.json` traces into recallable
  corpus documents.
- [plan.mjs](plan.mjs) — render and apply the explicit plan checklist.
- [eval.mjs](eval.mjs) — the structural, model-free self-check verdict.
- [router.mjs](router.mjs) — pure, model-agnostic per-step tier/model choice.
- [`forge/cost.mjs`](../cost.mjs) — pure cost-of-trace, price table, by-tier split.
- [`forge/bench.mjs`](../bench.mjs) — routed-vs-baseline parity-times-cost harness.
- `subagent.mjs` — the bounded in-lane `delegate` sub-run (flag-gated).
- [loop.mjs](loop.mjs) — the plan → act → observe → reflect orchestration + trace.
- `forge/run.mjs` — the CLI: load an agent, retrieve memory, run the loop, report.
- `forge/inspect.mjs` — read-only viewer for past run traces.
- [`forge/consolidate.mjs`](../consolidate.mjs) — dry-run-by-default CLI that distils
  `forge-lessons.md` (dedup + promote), attic-backed, `--apply` to write.

## How it relates to the rest of the Forge
It is the executable form of the [action loop](../action-loop.md); the agents it runs
are produced by the [creation loop](../creation-loop.md) and obey the
[agent contract](../../kernel/contracts/agent.md). See [the Forge overview](../README.md).
