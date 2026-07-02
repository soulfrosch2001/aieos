# Decision 0027 — Forge: parallel sub-agent delegation (closes a Fable-5 parity gap)
Type: report
Date: 2026-07-02
Tier: T2 (Coordination — additive runtime enhancement, no law/contract change)
Council: none (mechanical, verifiable change; direct build per cost policy)
Status: CLOSED — built (2026-07-02)

## Context
Asked to compare AIEOS against Claude Fable 5's native capabilities and close real gaps.
Most items on the initial gap list turned out to already be built in `forge/runtime`
(BM25 + episodic memory retrieval, auto-appended lessons on every outcome, a structural
self-check, an explicit plan/checklist). Reading the actual code (not assuming) surfaced
the one genuine, safely-closable gap: `forge/runtime/loop.mjs` handled the `delegate` tool
call sequentially — a `for (const tu of toolUses)` loop `await`s each sub-run one at a
time, even when the model requests several independent sub-tasks in the same turn. Fable
5 sustains ongoing, concurrent sub-agent communication natively; the Forge runtime did not.

## Built
`forge/runtime/loop.mjs`: when a turn contains **two or more** `delegate` calls, they now
dispatch concurrently via `Promise.all` instead of one-at-a-time. Refactored the inline
delegate-handling code into two closures — `resolveDelegate(tu)` (pure per-call resolution,
safe to run concurrently) and `applyDelegateResult(r)` (synchronous state mutation:
`dirtyWrites`/`gateClean`/`totals.ms`/trace/`onEvent`) — so the SAME logic serves both the
new parallel batch and the existing single-call sequential path. With 0 or 1 delegate calls
in a turn the code path is **byte-identical to before** (same guard-rail as the cost
router's own "purely additive" design).
- `forge/runtime/tools.mjs`: the `delegate` tool description now tells the model it may
  call the tool more than once per turn for independent sub-tasks.
- `forge/runtime/llm.mjs`: added a `parallel-delegate-smoke` dry-run sentinel (emits two
  `delegate` calls in one turn) alongside the existing single-delegate sentinel, so the new
  path is testable offline with no model and no key.
- `forge/runtime/README.md`: documented the fan-out, its guardrail preservation, and its
  one known limitation (concurrent sub-runs still share one workspace — the same file-
  clobber risk sequential delegation already has, just more likely to matter once sub-runs
  can genuinely overlap in time).
- `kernel/VERSION`: 1.10.0 → 1.11.0, following the project's own convention (a minor bump
  per Forge/runtime capability addition — see the `5d3a5c7`/`cfae3b0` precedents).

## Verified
- Regression: the existing single-delegate sentinel (`delegate-smoke`) still produces
  exactly 1 delegate action, `outcome: done` — unchanged.
- New path: the parallel sentinel (`parallel-delegate-smoke`) produces 2 delegate actions,
  both `ok: true`, `outcome: done`.
- `tests/unit/runtime.test.mjs`: 13/13 pass (run directly; pointing `node --test` at the
  bare directory mis-discovers the file — a pre-existing runner quirk, not a regression).
- Full gate: `npm test` → 14 rules, 0/0.

## Honest limitation
Did **not** get an isolated offline test of the depth-cap guardrail's denial path under
this change — `FORGE_MAX_DEPTH=0` silently falls back to the default (`Number(...) || 1`,
a pre-existing quirk unrelated to this change: `0` is falsy in JS) and the dry-run stub's
sub-runs deliberately never re-delegate (by original design, to keep offline tests
non-recursive). Confirmed correctness by inspection instead: the guardrail condition
(`depth >= maxDepth`) is byte-identical to the pre-existing code, only moved into a helper
function, not altered. Flagging this rather than claiming a test that wasn't actually run.

## What's still open (from the Fable-5 gap list, not attempted here)
- Continuous/periodic self-verification during a long run (today: only a post-hoc
  structural check + the model's own optional `run_gate` calls).
- Programmatic tool-call composition (script-like chaining without a full round trip per
  call) — would touch the guardrail model more invasively; deferred.
- End-to-end complex-deliverable generation (docs/slides/sheets) — no Forge skill for this
  exists yet; would be new scope, not a fix to existing code.

## Memory updates
- This record; `memory/registers/forge-lessons.md` gains new entries from the smoke runs
  above (automatic, via the runtime's own trusted-write path).
