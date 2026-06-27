# 🛠️ Optimization Council
Status: stable
Type: council
Owner: chair
Extends: none

`Status: stable`

> When the budget is blown and a profiler capture has a name on it, this is the body that
> claws the milliseconds back. It is **Prime Directive #8** (always be improving) and
> **#1** (quality is non-negotiable) turned into a working crew — backed by **#7**, because
> an optimization that breaks the game is not an optimization
> ([../../00-company/prime-directives.md](../../00-company/prime-directives.md)).

## Purpose
Scope and **execute targeted optimization campaigns** against a concrete, profiled hotspot —
CPU frame time, GPU cost, draw calls, memory footprint, load time, or an asset budget that
has gone over. The council plans the work, runs it, and **proves the win with before/after
numbers**. Profile first, target the single biggest hotspot, measure twice, and never
micro-optimize without data.

It does **not** rule on whether a feature is *allowed* to ship against the budget — that
verdict belongs to the [performance-council](../performance-council/). The distinction is
crisp and load-bearing:

- **[performance-council](../performance-council/)** rules on **budgets and risk**: *given
  the frame/memory/load budget, is this allowed to ship?* It says yes, no, or what gives.
- **optimization-council** (this one) **plans and runs the fix**: *we are over budget — or
  a hotspot exists — how do we claw back the ms/MB?* It owns the campaign, not the verdict.

In short: performance-council writes the ticket; we close it. We never trade frame time for
a worse player experience — a faster game that feels worse failed. Reasoning is
**engine-agnostic**; the weakest target platform sets the goal.

## Participants
- **Chair:** [optimization-engineer](../../03-programming/optimization-engineer/) — frames the
  hotspot, owns the profiler captures, the campaign plan, and the minutes.
- **Core members:**
  - [technical-artist](../../04-art/technical-artist/) — asset cost, LODs, texture/mesh
    budgets, shader complexity, batching.
  - [graphics-programmer](../../03-programming/graphics-programmer/) — GPU frame cost, draw
    calls, render targets, overdraw, VRAM.
  - [performance-tester](../../07-qa/performance-tester/) — the measured truth; owns the
    capture methodology and the before/after deltas.
- **Advisory (as needed):** [engine-programmer](../../03-programming/engine-programmer/) for
  CPU/threading/allocation hotspots, [technical-director](../../01-executive/technical-director/)
  when a fix implies structural change, [environment-artist](../../04-art/environment-artist/)
  for asset-budget campaigns.

## When Convened
- **T2** — a **profiled hotspot or budget overrun** needs a coordinated fix: a capture
  points at a clear cost center and someone has to claw it back.
- **T3** — when a campaign's findings imply a **structural change** (an architecture or
  pipeline rework, not a local fix), the council escalates to the
  [performance-council](../performance-council/) / [technical-council](../technical-council/)
  rather than deciding alone.
- **T4** — **supports a performance crisis**: when the build won't hold budget on a target,
  this council runs the emergency optimization sweep under the incident commander.
- Not convened for **T0/T1** one-line micro-optimizations the
  [optimization-engineer](../../03-programming/optimization-engineer/) handles directly —
  and never for a hotspot nobody has profiled yet. No capture, no campaign.

## Index
- [process.md](process.md) — how it debates, decides, and gates by tier.
- [output.md](output.md) — the Optimization Campaign Plan deliverable and minutes template.
