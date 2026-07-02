# Decision 0028 — Forge: continuous checkpoints, batched reads, CSV deliverables (kernel 1.12.0)
Type: report
Date: 2026-07-02
Tier: T2 (Coordination — additive runtime enhancements, one item deliberately declined
pending a real decision)
Council: none (mechanical, verifiable changes; direct build per cost policy)
Status: CLOSED — built (2026-07-02); one item explicitly deferred, not built

## Context
Asked to "mandar bala" (go all-in) on the three remaining items from decision 0027's
Fable-5 gap list: continuous self-verification, programmatic tool calling, end-to-end
complex deliverables. Built the safe, verifiable parts of all three; explicitly declined
the one sub-item that would cross an existing, deliberate safety boundary.

## Built

### 1. Continuous self-verification (`forge/runtime/checkpoint.mjs`)
`eval.mjs` only speaks once, at the end of a run. Every `FORGE_CHECKPOINT_INTERVAL` steps
(default 5), the loop now computes a free, deterministic progress note — plan completion,
whether there are unverified writes pending — and threads it back into the conversation the
same way the plan checklist is already echoed. Advisory only, same as `eval.mjs`: never
gates anything, just tells the model to ground its next progress claim in evidence. Recorded
per-step (`step.checkpoint`) and collected (`trace.data.checkpoints`) for auditability.

### 2a. Batched reads — the SAFE subset of "programmatic tool calling" (`read_many` tool)
Real programmatic tool calling (a model composing several tool calls in code without a full
round trip per call) needs a code-execution environment. The Forge deliberately has none —
"no exec... tool, so there is no irreversible-action surface" is documented as an
intentional boundary, not an oversight. `read_many` is the part of the idea that needed no
new safety surface: up to 20 files read in one round trip, each path going through the
exact same containment check `read_file` already uses, one at a time. Purely additive.

### 2b. Programmatic tool calling (arbitrary code execution) — DECLINED, not built
Did not add a code-execution/exec tool. This would cross the Forge's own documented
guardrail boundary ("No destructive surface — only read / write-in-workspace / run_gate /
finish exist"). Per Directive #6 ("propose framework changes before making them"), a change
that removes an existing, deliberate safety boundary needs a real decision, not a unilateral
build inside an "implement everything" instruction. **Flagged for the maintainer, not
decided either way.**

### 3. Deliverable generation — CSV only (`write_csv` tool)
Dependency-free (Node built-ins only — the same standard `consolidate.mjs`/`subagent.mjs`
already hold the Forge to) spreadsheet writer: proper CSV quoting/escaping, CRLF line
endings, opens natively in Excel/Sheets/Numbers. Same workspace confinement as `write_file`.
**Does NOT cover real `.docx`/`.pptx`/`.xlsx` binary formats** — there is no correct
dependency-free way to emit those; a real implementation needs an external library, which is
a deliberate supply-chain decision. **Flagged for the maintainer, not decided either way.**

## Bug found and fixed along the way
Testing `checkpoint.mjs` surfaced a real, pre-existing fragility: the dry-run stub's
sentinel detection (`delegate-smoke`, `parallel-delegate-smoke`, etc.) matched against the
FULL opening turn text — goal **plus retrieved memory**. Because `memory.mjs`'s own
auto-appended lessons literally quote past goals ("Goal \"parallel-delegate-smoke...\"
via balance-scout..."), a later run's memory retrieval could pull in a prior sentinel string
and make the wrong stub branch fire — non-deterministic behavior in a system whose entire
dry-run design promise is determinism. Fixed by matching sentinels only against the text
**after** the `"# Goal\n"` marker `memory.mjs` inserts (`firstUserGoalText`, `llm.mjs`),
never against the memory block. Verified: reproduced the failure (a `delegate-smoke` run
picking up 2 delegates instead of 1, contaminated by an earlier test's committed lesson),
then confirmed the fix restores exactly 1.

## Verified
Full regression across all six dry-run sentinels (`--smoke`, `delegate-smoke`,
`parallel-delegate-smoke`, `checkpoint-smoke`, `readmany-smoke`, `csv-smoke`) — all
`outcome: done`. `write_csv` additionally exercised the write-then-gate-before-finish
guardrail (Directive #9) end-to-end: write → run_gate → finish, `gateClean: true`. Unit
tests 13/13. Full gate: 14 rules, 0/0.

## What's still genuinely open
- Real code execution / programmatic tool calling (declined above — needs a decision).
- Real Office binary format generation (declined above — needs a dependency decision).
- Everything else from the original Fable-5 gap list not already closed by 0027/0028 is
  either a deliberate cost/depth trade-off (routing to cheaper models by default) or genuine
  new scope beyond "close a gap in existing code" (e.g. a from-scratch document-authoring
  skill).

## Memory updates
- This record; its audio summary (`resumo/audio/0028-resumo.*`); `forge-lessons.md` gains
  entries from the verification runs above (automatic, trusted-runtime write).
