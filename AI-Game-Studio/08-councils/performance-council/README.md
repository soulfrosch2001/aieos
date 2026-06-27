# ⚡ Performance Council
Status: stable
Type: council
Owner: chair
Extends: none

`Status: stable`

> Owns the three numbers that decide whether the game ships: the **frame budget**, the
> **memory budget**, and the **load-time target** — per platform, measured, defended.
> This is **Prime Directive #1** (quality is non-negotiable) and **#7** (the quality/TD
> veto is real) made into a decision body
> ([../../00-company/prime-directives.md](../../00-company/prime-directives.md)).

## Purpose
Decide whether a feature, asset, or system **fits the performance budget** across every
target platform — and when it doesn't, rule on what gives. The council sets and defends
per-platform budgets (frame time in ms, memory in MB, load time in seconds), and it
**measures, never guesses**: a profiler capture beats anyone's intuition, every time.

It rules on *budgets and risk*. It does **not** run the optimization work itself — targeted
optimization *campaigns* belong to the [optimization-council](../optimization-council/).
This council says "this costs 2.1 ms on Steam Deck and the frame budget is 16.6 ms — here
is the verdict." Feel-vs-frame fights arrive here from the
[gameplay-council](../gameplay-council/); pixel-vs-frame fights from the art side.

## Participants
- **Chair:** [optimization-engineer](../../03-programming/optimization-engineer/) — frames the
  budget question, owns the profiler data and the minutes.
- **Core members:**
  - [technical-director](../../01-executive/technical-director/) — holds the **veto on the
    frame budget** (Prime Directive #7); a budget breach is a quality breach.
  - [graphics-programmer](../../03-programming/graphics-programmer/) — GPU frame cost, draw
    calls, render targets, VRAM.
  - [engine-programmer](../../03-programming/engine-programmer/) — CPU frame cost, threading,
    allocation, streaming.
  - [performance-tester](../../07-qa/performance-tester/) — the measured truth; brings the
    captures, owns the methodology.
- **Advisory (as needed):** [technical-artist](../../04-art/technical-artist/) for asset
  budgets, [console-programmer](../../03-programming/console-programmer/) for cert and
  platform ceilings, physics-programmer for simulation cost.

## When Convened
- **T2** — a **budget is at risk**: a feature or asset is projected (or measured) to push a
  per-platform budget into the red.
- **T3** — a **platform-target change**: adding/dropping a target, changing a resolution or
  frame-rate target, re-baselining a budget → council **+** executive board.
- **T4** — feeds the **release Go/No-Go** on performance — does the build hold budget on
  every target platform under load? (PC / console / handheld are judged separately.)
- Not convened for **T0/T1** micro-tuning the [optimization-engineer](../../03-programming/optimization-engineer/)
  handles directly. Reasoning is **engine-agnostic and per-platform** — the weakest target
  sets the budget.

## Index
- [process.md](process.md) — how it debates, decides, and gates by tier.
- [output.md](output.md) — the Performance Verdict deliverable and minutes template.
