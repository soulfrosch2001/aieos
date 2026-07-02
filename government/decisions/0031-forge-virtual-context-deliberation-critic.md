# Decision 0031 — Forge: virtual context, deliberation, critic (kernel 1.15.0)
Type: report
Date: 2026-07-02
Tier: T2 (Coordination — additive runtime enhancements; one new default-on behavior fires
only on rare stagnation, everything else is opt-in or transparent)
Council: none (mechanical, verifiable changes; direct build per cost policy)
Status: CLOSED — built (2026-07-02)

## Context
After decision 0030 closed the three-point Fable-5-parity plan, the maintainer asked what
the remaining similarity score was. Honest answer: ~6.5–7/10 — architecture ~8.5, but the
rest of the gap is raw model capability (huge context, long-horizon coherence, judgment on
micro-decisions), not design. Asked whether that remaining gap could be approximated by
architecture, the answer was three modules, each stealing back a real piece of it. The
maintainer authorized all three ("faça tudo"). This decision builds them, in the proposed
order: virtual context → deliberation → critic.

## Built

### 1. Virtual context — `context.mjs` (attacks the giant context window)
`trimMessages` kept long runs inside budget by DROPPING the oldest middle turns —
information gone for good. Now every dropped turn is archived as an indexable document
(text, tool calls and results flattened to compact one-liners), and each subsequent step
retrieves the archived slices most relevant to the step's own reflection, re-injected as an
`[archived context recall …]` observation. Reuses the existing BM25 retriever (`memory.mjs`
`retrieve`) pointed at the run's own history — an effectively unbounded transcript, paged
by relevance. Bounded: top-2 hits, capped excerpts, identical consecutive injections
skipped. Every fired recall lands in the trace (`step.recall`: size + preview) so what was
resurfaced is auditable.

### 2. Deliberation — `deliberate.mjs` (attacks frontier reasoning, on stagnation)
On a stagnant checkpoint the run already escalates the tier (0030) — one stronger mind
asked to CREATE a way out. Now it also fans out N (default 3, `FORGE_DELIBERATE_N`)
candidate approaches on the CHEAP tier concurrently — each prompted to take a different
angle — and has the STRONG tier judge the pool and quote the most promising one. Judging is
easier than generating. Advisory injection, recorded on the step, costed into run totals.
Default ON because it only fires on rare stagnation (`FORGE_DELIBERATE=off` disables).
Degrades gracefully: a dead candidate shrinks the pool, a dead judge falls back to the
first candidate — deliberation must never crash the run it is trying to unstick.

### 3. Critic — `critic.mjs` (attacks judgment on micro-decisions, opt-in)
With `FORGE_CRITIC=on` (default OFF — it costs one extra mid-tier call per risky action,
so the maintainer opts in deliberately), each `write_*`, `delegate` and `finish` gets a
one-line second opinion before it runs: `OK — …` or `CONCERN: …` — the AIEOS council
pattern miniaturized to a single decision inside the loop. Writes and delegations proceed
regardless (the critique rides along in the observation and the trace); `finish` alone gets
a ONE-TIME speed bump — a concerned critique refuses the first finish so the model must
read it and either fix or insist; the second always passes. A bump, not a gate, and it runs
AFTER the Directive #9 guardrail so hard law is never diluted by advice. A dead critic
yields a neutral pass.

### Found and fixed along the way: dry-run stub vs. trimming
The virtual-context sentinel exposed that every stub branch inferred its position by
counting assistant turns — but trimming DELETES old assistant turns, so under an active
trim the count stalls and the stub repeats itself (the run died as `stuck`). Fixed for the
trim-active sentinel by deriving the turn index from the last tool_result's id — the one
message `trimMessages` guarantees to keep. The other sentinels never trim (default 60k-char
budget vs. short runs), so they are unaffected.

## Verified (not just "returned ok")
- Virtual context: under `FORGE_MAX_CHARS=2500`, the sentinel plants "zephyr-quokka" in
  turn 1, pads until the trim archives it, then mentions the marker again at step 7 — and
  the step-7 trace shows the recall block resurfacing exactly the archived early turn
  ("Early note: the priority target is the…"). Relevance-driven, not coincidence: earlier
  pad-steps recalled pad-turns, the marker step recalled the marker turn.
- Deliberation: stall trace shows `step.deliberation` on step 10 (the stagnant checkpoint)
  with 3 candidates and the judge's quoted choice; checkpoints stamped
  `step 5 stagnant=false | step 10 stagnant=true` as designed.
- Critic: with the flag on — write reviewed (`critic: OK — …` in the trace), first finish
  refused with the one-time CONCERN message, second finish passed, outcome done, gate
  clean. With the flag off — no reviews, no bump, byte-identical legacy flow.
- Full regression: 15 runs green — all 13 sentinels (`--smoke`, delegate,
  parallel-delegate, checkpoint, readmany, csv, runcode, pptx, stagnation, resume,
  deliberation, critic, virtualcontext) plus 2 flag-off variants (critic off,
  deliberation off). Unit tests 13/13. Gate: 14 rules, 0 errors / 0 warnings, CONFORMANT.

## Cost posture (per the machine-wide cost policy)
- Virtual context: free (pure lexical retrieval, no model call).
- Deliberation: N cheap + 1 strong call, only on stagnation — spend lands exactly when the
  run is already wasting steps.
- Critic: per-risky-action cost, hence opt-in default-off.
All side-call usage is folded into the run's totals, so traces never under-report cost.

## Estimated effect
Architecture similarity to a Fable-5-style system rises from ~6.5–7 to ~7.5–8 — the
practical ceiling without swapping in a stronger `FORGE_MODEL`. What remains is model
capability, not design.

## Memory updates
- This record; its audio summary (`resumo/audio/0031-resumo.*`); `forge-lessons.md` gains
  entries from the verification runs above (automatic, trusted-runtime write).
