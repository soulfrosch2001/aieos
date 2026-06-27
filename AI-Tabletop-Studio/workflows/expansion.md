<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: expansion
Status: stable
Type: workflow
Owner: producer
Extends: [release](../../workflows/release.md) + [planning](../../workflows/planning.md)

**Purpose:** Plan, build, and ship a content expansion to a published game without
destabilizing the base game it extends.
**Default Tier:** [T3](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** producer
**Extends:** [release](../../workflows/release.md) + [planning](../../workflows/planning.md)

## Trigger
A decision to ship new content — new components, factions, or a rules module — to an
already-published title. A cross-department bet on a published product, sized
[T3](../../kernel/laws/engagement-tiers.md): it needs a council **and** executive
sign-off.

## Participants
- [studio-orchestrator](../01-executive/studio-orchestrator/) — sizes, sequences, routes; never builds (Directive [#2](../../kernel/laws/prime-directives.md)).
- producer — owns the plan, the schedule, and the ship decision (COO-equivalent).
- [design-council](../councils/design-council/) — approves the expansion's design (Gate A).
- lead-game-designer, systems-designer, component-designer, narrative-designer — disjoint build tracks.
- playtest-lead — runs [playtest](playtest.md) on the combined base + expansion.
- design-director — design-coherence veto with the base game.
- ceo — strategic sign-off (T3 requires executive approval).
- chief-auditor — Gate B, quality veto.

## Inputs
A north-star justification (Directive [#1](../../kernel/laws/prime-directives.md)),
the base game's published state, the expansion scope, and the compatibility promise
to existing owners.

## Steps
```
plan ─> design-council ─> [GATE A: plan approved + exec sign-off] ─> fan-out(≤15) ─> playtest ─> integrate ─> [GATE B: compatible + quality] ─> ship ─> record
```
1. **Plan** — producer — sequence the expansion into owned tracks with dependencies (planning discipline).
2. **Approve** — design-council + ceo — sign the plan and the strategic bet. `[GATE A]`
3. **Decompose** — studio-orchestrator — partition into ≤15 disjoint tracks across design, components, and narrative.
4. **Build** — designers — implement in parallel, no shared file.
5. **Validate** — playtest-lead — run [playtest](playtest.md) on base + expansion together.
6. **Integrate** — studio-orchestrator — assemble the release; resolve seams with the base game.
7. **Verify** — chief-auditor + design-director — confirm backward compatibility and quality. `[GATE B]`
8. **Ship** — producer — cut the expansion release.
9. **Record** — studio-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — plan approved with executive sign-off:** no track launches until the design-council signs the plan and the ceo approves the bet (T3 sign-off — see [decision-authority](../../kernel/laws/decision-authority.md)). This is the planning + executive strictness inherited from [planning](../../workflows/planning.md).
- **Gate B — compatible and quality gates pass:** the expansion does not ship until the design-director confirms it does not break the published base game and the [quality-standards](../../shared/quality-standards.md) release gates pass — the release discipline inherited from [release](../../workflows/release.md).

## Approval Process
Design-council + ceo sign Gate A; design-director holds the compatibility veto and
chief-auditor holds the quality veto at Gate B. The producer makes the final ship
call once both gates clear.

## Outputs
The shipped expansion, its release record, an updated rulebook delta, and a stated
compatibility guarantee.

## Completion Criteria
- [ ] Plan approved with executive sign-off (Gate A).
- [ ] All tracks integrated; base game compatibility confirmed.
- [ ] Combined playtest passed; Gate B gates pass.
- [ ] Memory registers below appended.

## Memory Updates
- [design-decisions](../memory/registers/design-decisions.md) — the expansion's design choices and the compatibility decisions with the base game.
- [playtest-feedback](../memory/registers/playtest-feedback.md) — the combined-play validation result.
- [balancing-history](../memory/registers/balancing-history.md) — any rebalancing the expansion forces on the base.

## Failure / Rollback
Gate A fails → return to planning, do not fan out. Gate B fails → block the ship; a
compatibility break routes back to the owning track and re-runs [playtest](playtest.md).
A defect found after ship escalates to the stdlib [hotfix](../../workflows/hotfix.md).
