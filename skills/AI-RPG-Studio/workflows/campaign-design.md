<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: campaign-design
Status: stable
Type: workflow
Owner: campaign-writer
Extends: feature

**Purpose:** Design a playable campaign from a premise into a first shippable module.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** campaign-writer
**Extends:** [feature](../../workflows/feature.md)

## Trigger
The [ceo](../01-executive/ceo/) greenlights a new RPG line, or a
[line-producer](../01-executive/line-producer/) slots a campaign onto the release
plan. The [rpg-orchestrator](../01-executive/rpg-orchestrator/) sizes it: a campaign
carries real creative and systems choices, so it lands at
[T2](../../kernel/laws/engagement-tiers.md). A one-shot with no new canon is a
trivial edit, not this; a whole new line's spine is T3 and escalates to the
[design-council](../councils/design-council/) plus executive sign-off.

## Participants
- [rpg-orchestrator](../01-executive/rpg-orchestrator/) — sizes, decomposes, routes, integrates; never writes (Directive [#2](../../kernel/laws/prime-directives.md)).
- [campaign-writer](../04-narrative/campaign-writer/) — owns the campaign arc and Gate A plan.
- [lore-master](../02-worldbuilding/lore-master/) — guards canon; the world must not contradict itself.
- [quest-designer](../04-narrative/quest-designer/), [encounter-designer](../03-systems/encounter-designer/), [faction-designer](../02-worldbuilding/faction-designer/) — parallel build tracks.
- [creative-director](../01-executive/creative-director/) — coherence veto at both gates.
- [chief-auditor](../01-executive/chief-auditor/) — Gate B quality/process veto.

## Inputs
A premise with a north-star justification (Directive [#1](../../kernel/laws/prime-directives.md)),
the target line and its [canon](../memory/registers/canon.md) constraints, an
intended length and tone, and a clear definition of "playable."

## Steps
```
premise ─> [GATE A: arc + canon approved] ─> fan-out(≤8 tracks) ─> integrate ─> [GATE B: playable + gates pass] ─> record
```
1. **Frame** — rpg-orchestrator — size as T2, state the premise, constraints, and what "done" means.
2. **Arc** — campaign-writer — draft the act structure, stakes, and the first module's shape; the lore-master confirms it fits canon. `[GATE A]`
3. **Decompose** — rpg-orchestrator — split into disjoint tracks: quests, encounters, factions, locations.
4. **Build** — quest/encounter/faction designers — write in parallel, no shared file, each citing canon ids.
5. **Integrate** — rpg-orchestrator — stitch tracks into one module, resolve seams and pacing.
6. **Verify** — chief-auditor — run the tier's gates; creative-director checks coherence. `[GATE B]`
7. **Record** — rpg-orchestrator — append the registers below.

## Review Gates
- **Gate A — arc and canon approved:** no track launches until campaign-writer's arc is signed and the lore-master confirms zero canon contradictions.
- **Gate B — playable and gates pass:** the campaign does not ship until it is table-ready and [quality-standards](../../shared/quality-standards.md) gates pass.

## Approval Process
Campaign-writer signs Gate A with lore-master concurrence; creative-director may
veto on coherence at either gate; chief-auditor holds the Gate B veto. See
[decision-authority](../../kernel/laws/decision-authority.md). T3 variants add
[ceo](../01-executive/ceo/) and [design-council](../councils/design-council/) sign-off.

## Outputs
A first playable module, the campaign arc document, faction and location notes, and
the canon entries the campaign introduced.

## Completion Criteria
- [ ] Arc approved at Gate A with no canon contradiction.
- [ ] All tracks integrated with no overlapping ownership.
- [ ] First module is table-ready; Gate B gates pass.
- [ ] Memory registers below appended.

## Memory Updates
- [canon](../memory/registers/canon.md) — new world facts, names, and timeline the campaign establishes.
- [campaign-ideas](../memory/registers/campaign-ideas.md) — threads and hooks spun off but not built this pass.
- [encounter-log](../memory/registers/encounter-log.md) — any encounter tuning learned while building.

## Failure / Rollback
Gate A fails → return to the arc, do not fan out. Gate B fails → block ship, route
defects to the owning track, re-verify. A canon contradiction discovered after ship
is reversed by a superseding [canon](../memory/registers/canon.md) entry and escalates
to the [lore-council](../councils/lore-council/).
