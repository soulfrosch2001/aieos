# Decision 0030 — Forge: stagnation-driven escalation, memory-on-demand, resumable runs (kernel 1.14.0)
Type: report
Date: 2026-07-02
Tier: T2 (Coordination — additive runtime enhancements, no law/contract change; one bug fix
to an existing guardrail)
Council: none (mechanical, verifiable changes; direct build per cost policy)
Status: CLOSED — built (2026-07-02)

## Context
The maintainer asked, exploratory: "se você fosse desenvolver o sistema do Fable 5 no AIEOS,
como você faria?" The answer, in short: don't recreate one continuous mind — build on what
Forge already has by stretching three seams that already exist but are underused: (1) letting
the cost router's escalation reach the strong tier only when verification actually demands
it, (2) treating retrieved memory as context pulled on demand rather than a one-time opening
injection, (3) resumable runs so a long-horizon goal survives being split across process
boundaries instead of needing one unbroken session. The maintainer authorized all three
("pode seguir com tudo, quero deixar o sistema AIEOS o melhor possível"). This decision
closes all three.

## Built

### Stagnation detection escalates the model automatically
`router.mjs` has accepted a `lastEvalFailed` input since it was written, but nothing ever
set it — dead code. [checkpoint.mjs](../../forge/runtime/checkpoint.mjs) now compares each
checkpoint's progress snapshot (plan-completion count, or `writeActionCount` as a fallback
for goals with no explicit plan) against the *previous* checkpoint's. No movement between
two checkpoints → `stagnant: true`. [loop.mjs](../../forge/runtime/loop.mjs) feeds that into
`lastEvalFailed` and climbs the escalation counter — the same seam a failed `run_gate`
already uses — so a stalled run gets a stronger model on its next step without needing a
gate to fail first.

### Memory as context-on-demand
The same stagnant-checkpoint moment now re-queries memory with the *current* sub-problem —
the next pending plan step's text, falling back to the goal — and injects the result as a
`[fresh memory search — triggered by stalled progress]` block on the next turn. The opening
turn's memory block is a one-time snapshot; this re-pulls exactly when the run's own
progress signal says the current approach isn't working — the practical substitute for a
much larger context window.

### Resumable runs across process boundaries
New [resume.mjs](../../forge/runtime/resume.mjs): pure `buildResumeContext(trace)` turns a
prior run's trace into a compact block (prior outcome, plan checklist with status, last few
reflections, a stagnation note if the prior run ended stalled). `forge/run.mjs` gained
`--resume <tracePath>`; `loop.mjs` prepends the resulting text to the opening turn, in the
same slot the memory block occupies, with the goal always kept last (the sentinel matcher in
`llm.mjs` relies on `"# Goal\n"` being the final marker). Lets a goal too large for one
`maxSteps` budget be picked back up by re-invoking the CLI with the same agent and goal,
without holding one process open indefinitely.

### Bug found and fixed along the way: write_csv/write_pptx never armed Directive #9
While wiring `writeActionCount`, found that only `write_file` set `dirtyWrites`/`gateClean`
on a successful write — `write_csv` and `write_pptx` (added in 0028/0029) did not. A run
could write a CSV or a deck and call `finish` **without ever being blocked** by the
"`run_gate` must pass since your last write" check — Directive #9 silently didn't apply to
two of the three write tools. Fixed by generalizing the check to any tool named `write_*`.
This also surfaced that the `pptx-smoke` dry-run sentinel had never actually exercised the
gate (it finished right after writing, which the bug let through); updated it to call
`run_gate` before `finish`, mirroring `csv-smoke`.

## Verified (not just "returned ok")
- Stagnation → escalation: ran `stagnation-smoke` (plans 2 steps, never advances either, does
  9 varied reads). Checkpoint at step 5 (`stagnant: false`, nothing to compare against yet),
  checkpoint at step 10 (`stagnant: true`, plan-done count unchanged since step 5). Confirmed
  the tier ladder on the very next step: step 9 `cheap`, step 10 `cheap`, **step 11
  `strong`** — escalation fired exactly one step after the stagnant checkpoint, not before.
- Fresh memory on stagnation: called `buildMemoryBlock` directly with the exact query the
  stagnant checkpoint would use ("Investigate the layout") and confirmed it returns real,
  substantial content (1060 chars, matched a genuine `government/decisions` register entry) —
  not an empty/no-op call.
- Resume: ran a real prior trace through `buildResumeContext`, confirmed the composed opening
  text places the resume block before `# Goal\n` with the goal unaffected, and confirmed the
  sentinel matcher still isolates the goal correctly (last-marker slicing holds even with the
  extra prefix block). Added a dedicated `resume-smoke` sentinel and ran it twice — once
  without `--resume` (reports "no resume context"), once with (reports "resume context was
  present") — both branches genuinely exercised via the CLI, not just unit-level.
- write_csv/write_pptx gate fix: re-ran `pptx-smoke` before the sentinel fix and reproduced
  the exact failure the bug caused (`finish` blocked repeatedly → "stuck"), confirming the fix
  was necessary and not defensive-only; then fixed the sentinel and confirmed `gate clean:
  true`.
- Full regression: all 10 dry-run sentinels (`--smoke`, `delegate`, `parallel-delegate`,
  `checkpoint`, `readmany`, `csv`, `runcode`, `pptx`, `stagnation`, `resume`) →
  `outcome: done`. Unit tests 13/13. Gate: 14 rules, 0 errors / 0 warnings, CONFORMANT.

## What's still open
- `FORGE_MAX_DEPTH=0` still silently falls back to 1 (`Number(env.FORGE_MAX_DEPTH) || 1`) —
  pre-existing quirk noted in 0027, not touched here.
- `.docx`/`.xlsx` binary formats remain out of scope (0029).
- `--resume` requires the caller to supply the same `<agent-dir>` and `"<goal>"` as the run
  being resumed; it does not (yet) infer them from the trace. Kept simple deliberately — the
  trace's `agent` field is a basename, not the full agent-dir path, so reconstructing it
  automatically would need a repo-wide search rather than a direct read.

## Memory updates
- This record; its audio summary (`resumo/audio/0030-resumo.*`); `forge-lessons.md` gains
  entries from the verification runs above (automatic, trusted-runtime write).
