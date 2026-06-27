# Decision 0003 — Forge Runtime Capability Build
Type: report
Date: 2026-06-27
Tier: T3 (Strategic — framework evolution, Directive #7)
Council: Forge Capability Council (non-standing)

## Summary
The council deliberated which improvements to add to the Forge runtime to make it more
capable — closer to a top AI assistant — and **approved a slate**, deferring the rest.
The build was implemented and verified by running. New rule honoured: no capability is
added to the runtime without the council's approval first.

## Participants
- **Chair** — weighs proposals and rules.
- Five perspective-holders: control loop, evaluation, live-run robustness, planning,
  observability. Memory & retrieval was **pre-approved by the maintainer**.

## Approved (built this round)
- **Memory & retrieval** — dependency-free lexical retrieval over `memory/registers/`,
  `government/decisions/`, and company memory; injects a "retrieved memory" block before
  acting; appends dated lessons on `done`. (`forge/runtime/memory.mjs`)
- **Live-run robustness** — retry/backoff on 429/5xx (honours `Retry-After`), token
  `usage` surfaced, message-history trimming that never drops the first turn or last
  tool result. (`forge/runtime/llm.mjs`)
- **Observability** — per-step timing + usage, run `totals`, and a read-only
  `forge/inspect.mjs` (`--list` / `--last`).
- **Planning (piece A)** — a `plan` / `update_plan` tool persisted to the trace and
  echoed as a checklist. (`forge/runtime/plan.mjs`)
- **Self-check (structural)** — a deterministic post-run verdict (`goalAddressed`,
  `gatePassed`, `producedWrites`, `noStuck`); advisory, never gates `finish`.
  (`forge/runtime/eval.mjs`, `forge/eval-rubric.md`)

## Deferred (with reasons)
- **Sub-delegation** — a single-workspace agent gains no authority by spawning a clone;
  real fan-out is a Government concern (Directives #3/#4). Out of lane for a runtime build.
- **Model-judge evaluation** — non-deterministic; needs a run corpus to calibrate first.
- **Wall-clock deadline / errored-turn cap** — redundant with existing loop bounds for v1.

## Recorded dissent
- The planning holder dissented on deferring sub-delegation; conceded it duplicates
  Government fan-out without adding authority. Ruling stands.
- The evaluation holder dissented on cutting the model-judge; Chair held that an
  uncalibrated judge with no corpus is advisory noise this build cannot validate yet.

## Guardrails reaffirmed
Model only via `FORGE_MODEL`; `--dry-run` works with no model/key; writes stay
workspace-confined; the gate is never skipped; no company-cross; zero new npm deps.

## Outcome (2026-06-27)
**Built and verified.** Dry-run completes (`outcome: done`, structural `verdict`,
zero-token `totals` proving model-agnosticism); `forge/inspect.mjs --last` renders the
run; conformance gate **0/0** in both scopes. Kernel **1.4.0 → 1.5.0**. Decision closed.

## Memory updates
- This record; the audio summary; the CHANGELOG; `kernel/VERSION`;
  `memory/registers/forge-lessons.md` (new register the runtime appends to).
