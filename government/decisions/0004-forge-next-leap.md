# Decision 0004 — Forge Runtime Next-Leap Build
Type: report
Date: 2026-06-27
Tier: T3 (Strategic — framework evolution, Directive #7)
Council: Forge Capability Council (non-standing)

## Summary
A second capability council deliberated the next slate for the Forge runtime, approved
three items (gating one), deferred two with reasons, and the build was implemented and
verified by running. Run in parallel with two reflective councils that produced the
solo-AI [position](../../docs/forge-and-solo-ai.md) and [roadmap](../../docs/solo-ai-roadmap.md).

## Approved (built)
- **Live-run enablement & smoke** — `preflight()` (model/auth probe, stubbed offline),
  a `--smoke` flag, `FORGE_MAX_TOKENS`, and [forge/SETUP.md](../../forge/SETUP.md). This is
  also what produces the run corpus a future model-judge needs.
- **Retrieval quality** — `forge/runtime/memory.mjs` now scores heading-chunks with a
  recency decay and dedups near-duplicates, so injected memory is sharper.
- **Sub-delegation (in-lane), gated** — a bounded recursive `delegate` (same company,
  same workspace, depth-capped), **off by default** behind `FORGE_SUBAGENTS`. The prior
  council's Government-scope concern is resolved, not overridden: no cross-company lane
  is ever opened.

## Deferred (with reasons)
- **Model-judge evaluation** — an uncalibrated judge emits score-noise that would pollute
  memory; build the smoke/corpus first, then judge against it.
- **Explicit reflection loop** — the loop already reflects each turn; an unmeasured extra
  critique doubles model calls and can corrupt a good plan, with no eval to score it.

## Recorded dissent
- On sub-delegation: noted and resolved via the in-lane fence + `FORGE_SUBAGENTS` flag +
  depth cap.
- Minority view that the model-judge is the true leap; acknowledged, but it needs the
  calibration corpus that the approved smoke harness produces first.

## Outcome (2026-06-27)
**Built and verified.** Dry-run completes offline (zero-token totals); `--smoke --dry-run`
and the gated `FORGE_SUBAGENTS=on` delegation sentinel both pass; conformance gate **0/0**
in both scopes; no model dependency. Kernel **1.5.0 → 1.6.0**. Decision closed.

## Memory updates
- This record; the audio summary; the CHANGELOG; `kernel/VERSION`.
