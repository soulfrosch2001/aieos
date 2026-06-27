<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: adventure-module
Status: stable
Type: workflow
Owner: line-producer
Extends: planning

**Purpose:** Plan and produce a standalone adventure module that drops into any table.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** line-producer
**Extends:** [planning](../../workflows/planning.md)

## Trigger
The [line-producer](../01-executive/line-producer/) commits a standalone module to a
release slot — a self-contained adventure that does not require buying the campaign
around it. The [rpg-orchestrator](../01-executive/rpg-orchestrator/) sizes it at
[T2](../../kernel/laws/engagement-tiers.md): bounded scope, real design choices, one
delivery. A reprint or errata pass is a trivial edit; a module that redefines a
line's tone is T3 and escalates.

## Participants
- [rpg-orchestrator](../01-executive/rpg-orchestrator/) — sizes, partitions, routes, integrates (Directive [#2](../../kernel/laws/prime-directives.md)).
- [line-producer](../01-executive/line-producer/) — owns scope, the plan, and the Gate A sign-off.
- [quest-designer](../04-narrative/quest-designer/) — the adventure spine and hooks.
- [encounter-designer](../03-systems/encounter-designer/), [cartographer](../02-worldbuilding/cartographer/) — encounters and maps, in parallel.
- [lore-master](../02-worldbuilding/lore-master/) — confirms the module sits cleanly in or beside canon.
- [chief-auditor](../01-executive/chief-auditor/) — Gate B quality/process veto.

## Inputs
A scope brief with a north-star justification (Directive [#1](../../kernel/laws/prime-directives.md)),
the target player level and party size, the line it belongs to and its
[canon](../memory/registers/canon.md) edges, and a page/word budget the
[line-producer](../01-executive/line-producer/) will hold the work to.

## Steps
```
brief ─> [GATE A: scope + plan locked] ─> fan-out(≤8 tracks) ─> integrate ─> [GATE B: drop-in ready + gates pass] ─> record
```
1. **Brief** — rpg-orchestrator — size as T2, fix scope, budget, and the definition of "drop-in."
2. **Plan** — line-producer — lock the module outline, encounter count, and map list; lore-master confirms canon fit. `[GATE A]`
3. **Partition** — rpg-orchestrator — split into disjoint tracks: spine, encounters, maps, statblocks.
4. **Produce** — designers + cartographer — build in parallel, no shared file, each within budget.
5. **Integrate** — rpg-orchestrator — assemble the module, check page count against budget and pacing.
6. **Verify** — chief-auditor — run the tier's gates; confirm it runs without the parent campaign. `[GATE B]`
7. **Record** — rpg-orchestrator — append the registers below.

## Review Gates
- **Gate A — scope and plan locked:** no track launches until the line-producer signs the outline and budget and the lore-master clears canon fit.
- **Gate B — drop-in ready and gates pass:** the module does not publish until it is fully self-contained and [quality-standards](../../shared/quality-standards.md) gates pass.

## Approval Process
Line-producer signs Gate A; chief-auditor holds the Gate B veto;
[creative-director](../01-executive/creative-director/) may veto on coherence. See
[decision-authority](../../kernel/laws/decision-authority.md). T3 variants add
executive and [design-council](../councils/design-council/) sign-off.

## Outputs
A standalone, drop-in adventure module: spine, encounters, maps, statblocks, and a
one-page run-it summary.

## Completion Criteria
- [ ] Scope and budget locked at Gate A.
- [ ] All tracks integrated within budget, no overlapping ownership.
- [ ] Module runs with no dependency on a parent campaign; Gate B gates pass.
- [ ] Memory registers below appended.

## Memory Updates
- [encounter-log](../memory/registers/encounter-log.md) — encounter difficulty and tuning notes from the build.
- [canon](../memory/registers/canon.md) — any new fact the module introduces, if it touches shared canon.
- [campaign-ideas](../memory/registers/campaign-ideas.md) — hooks the module leaves dangling for future work.

## Failure / Rollback
Gate A fails → re-cut scope, do not fan out. Gate B fails → block publish, return
defects to the owning track, re-verify. Over-budget at integration → the
line-producer cuts scope, not gates. A self-containment break found after ship is
patched as errata and logged in [encounter-log](../memory/registers/encounter-log.md).
