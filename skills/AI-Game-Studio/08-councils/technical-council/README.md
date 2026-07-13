# 🛠️ Technical Council
Status: stable
Type: council
Owner: chair
Extends: none

`Status: stable`

> Guards the question gameplay never asks: **how is this built, and can we undo it?**
> This is **Prime Directive #3** (decide before build) and **#6** (engine-agnostic) made
> into a decision body ([../../00-company/prime-directives.md](../../00-company/prime-directives.md)).

## Purpose
Decide system architecture, engine and tech bets, technical risk, and reversibility before
a single line is committed. The council owns *how it is built* — the subsystem boundaries,
the data formats, the dependency it's safe to take. It does **not** own whether the feature
is fun or worth making (that is the [gameplay-council](../gameplay-council/)) or whether the
schedule allows it (that is [production](../../01-executive/production-director/)). Its bias
is structural: prefer the design that is cheapest to reverse, and keep every decision
**engine-agnostic** — Godot, Unity, and Unreal are implementation details, not principles
(Prime Directive #6).

## Participants
- **Chair:** [technical-director](../../01-executive/technical-director/) — final say on
  technical risk; holds a **veto** (Prime Directive #7).
- **Core members:**
  - [lead-programmer](../../03-programming/lead-programmer/) — architecture coherence and team feasibility.
  - [engine-programmer](../../03-programming/engine-programmer/) — subsystem boundaries and engine integration.
  - [graphics-programmer](../../03-programming/graphics-programmer/) — render pipeline cost and constraints.
  - [physics-programmer](../../03-programming/physics-programmer/) — simulation, determinism, and tick budget.
  - [optimization-engineer](../../03-programming/optimization-engineer/) — performance ceilings and the cost of being wrong.
- **Advisory (as needed):** [tools-programmer](../../03-programming/tools-programmer/),
  [networking-programmer](../../03-programming/networking-programmer/),
  [chief-auditor](../../01-executive/chief-auditor/) for quality/security gates.

## When Convened
- **T2** — a significant cross-cutting technical change: a new dependency, a shared-system
  refactor, or an integration that touches more than one subsystem's owner.
- **T3** — a new engine subsystem, an architecture shift, or a save-format change →
  council **+** executive board.
- Not convened for **T0/T1** local implementation calls (the owning specialist or
  [lead-programmer](../../03-programming/lead-programmer/) handles those).

## Index
- [process.md](process.md) — how it debates, decides, and gates by tier.
- [output.md](output.md) — the Architecture Verdict deliverable and minutes template.
