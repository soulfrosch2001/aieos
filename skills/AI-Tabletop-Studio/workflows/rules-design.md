<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: rules-design
Status: stable
Type: workflow
Owner: lead-game-designer
Extends: [feature](../../workflows/feature.md)

**Purpose:** Take a validated design need and turn it into a new rules subsystem —
a coherent, balanced, teachable set of mechanics — through design, parallel build,
and gated review.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** lead-game-designer
**Extends:** [feature](../../workflows/feature.md)

## Trigger
A request to add or replace a rules subsystem (a new action economy, a combat track,
a scoring loop) that carries genuine design choices — sized
[T2](../../kernel/laws/engagement-tiers.md) by the studio-orchestrator. A whole new
game pillar or cross-game bet escalates to T3.

## Participants
- [studio-orchestrator](../01-executive/studio-orchestrator/) — sizes, decomposes, routes; never builds (Directive [#2](../../kernel/laws/prime-directives.md)).
- lead-game-designer — owns the plan and Gate A sign-off.
- [design-council](../councils/design-council/) — debates the mechanics (Directive [#3](../../kernel/laws/prime-directives.md)).
- systems-designer, balance-designer, rules-writer — disjoint build tracks.
- design-director — holds the design-coherence veto (CTO-equivalent).
- chief-auditor — Gate B, quality veto.

## Inputs
A north-star justification (Directive [#1](../../kernel/laws/prime-directives.md)),
the design pillars the subsystem must serve, the components it may touch, and a clear
definition of done.

## Steps
```
intake ─> design-council ─> [GATE A: design coherent + approved] ─> fan-out(≤8) ─> integrate ─> [GATE B: rules teachable + quality] ─> record
```
1. **Intake** — studio-orchestrator — size as T2, frame the need against the design pillars.
2. **Design** — design-council — debate mechanics, choose one, draft the rules plan. `[GATE A]`
3. **Decompose** — studio-orchestrator — partition into ≤8 disjoint tracks (systems, balance, copy).
4. **Build** — systems-designer / balance-designer / rules-writer — implement in parallel, no shared file.
5. **Integrate** — studio-orchestrator — resolve seams, assemble the full ruleset.
6. **Verify** — chief-auditor — run the tier's quality gates; confirm the rules are unambiguous and teachable. `[GATE B]`
7. **Record** — studio-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — design coherent and approved:** no track launches until the design-council signs the plan and the design-director confirms it fits the studio's design coherence (design veto). This is the local strictness this workflow adds over stdlib [feature](../../workflows/feature.md).
- **Gate B — rules teachable and quality gates pass:** the subsystem does not ship until it reads cleanly to a first-time player and the [quality-standards](../../shared/quality-standards.md) gates pass.

## Approval Process
Design-council signs Gate A; design-director holds the coherence veto at Gate A;
chief-auditor holds the Gate B veto. See
[decision-authority](../../kernel/laws/decision-authority.md).

## Outputs
The new rules subsystem, its design record, and updated rulebook copy.

## Completion Criteria
- [ ] Mechanics approved and coherence-cleared at Gate A.
- [ ] All tracks integrated with no overlapping ownership.
- [ ] Gate B gates pass; rules confirmed teachable.
- [ ] Memory registers below appended.

## Memory Updates
- [design-decisions](../memory/registers/design-decisions.md) — the chosen mechanic and the rationale for it over the alternatives.
- [balancing-history](../memory/registers/balancing-history.md) — any baseline values the subsystem introduces.

## Failure / Rollback
Gate A fails (or the design-director vetoes) → return to the design-council, do not
fan out. Gate B fails → block ship, route defects back to the owning track, re-verify.
A subsystem that destabilizes a shipped game escalates to [playtest](playtest.md)
before any further change.
