# production
Status: stable
Type: workflow
Owner: director
Extends: feature

# Workflow: production
Status: stable
**Purpose:** Shoot a greenlit film on schedule and budget — turn a greenlit script
into captured footage that covers every scene the cut will need.
**Default Tier:** [T3](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** director
**Extends:** stdlib [feature](../../templates/workflow.template.md)

## Trigger
A greenlit script package arrives from [development](development.md). The
[studio-orchestrator](../01-executive/studio-orchestrator/) sizes it as
[T3](../../kernel/laws/engagement-tiers.md): a capital commitment with many parallel
crafts under a hard schedule, heavier than development (T2) because money and time
are now being spent against a fixed calendar.

## Participants
- [studio-orchestrator](../01-executive/studio-orchestrator/) — sizes, decomposes, routes, integrates; never directs the film (Directive [#2](../../kernel/laws/prime-directives.md)).
- [director](../03-production/director/) — owns the performance and the shot, and Gate A.
- [cinematographer](../03-production/cinematographer/) — owns the image: lensing, lighting, camera.
- [production-designer](../03-production/production-designer/) — owns the physical world: sets, locations, look.
- [line-producer](../01-executive/line-producer/) — owns schedule and budget; sequencing call and Gate B sign-off.
- [creative-director](../01-executive/creative-director/) — creative veto if the shoot drifts off-vision.

## Inputs
The greenlit script, the approved budget and shooting schedule, the
[creative-council](../councils/creative-council/) look book, and confirmed cast,
crew, and locations.

## Steps
```
prep ─> [GATE A: shoot-ready + schedule locked] ─> fan-out(camera | design | performance-units) ─> dailies-review ─> [GATE B: coverage complete + line-producer signs] ─> record
```
1. **Prep** — director — break down the script, set the shot list, lock the look with cinematographer and production-designer.
2. **Lock** — line-producer — confirm schedule, budget, and crew are shoot-ready. `[GATE A]`
3. **Decompose** — studio-orchestrator — split the shoot into disjoint units (camera, design build, performance days) with no shared ownership.
4. **Shoot** — director / cinematographer / production-designer — capture in parallel against the schedule; review dailies each day.
5. **Integrate** — director — confirm every scene is covered and the footage cuts together.
6. **Review** — line-producer + creative-director — coverage and budget signed; vision cleared. `[GATE B]`
7. **Record** — studio-orchestrator — append to the registers below.

## Review Gates
- **Gate A — shoot-ready + schedule locked:** no unit rolls until the schedule,
  budget, cast, crew, and locations are confirmed and the look is locked.
- **Gate B — coverage complete + line-producer signs:** the film does not advance to
  [post-production](post-production.md) until every scene is covered, the
  [line-producer](../01-executive/line-producer/) signs schedule and budget, and the
  creative-director's veto is cleared.

## Approval Process
The director signs Gate A on shoot-readiness. The line-producer holds the Gate B
schedule-and-budget sign-off and the sequencing call; the creative-director holds the
creative veto per [decision-authority](../../kernel/laws/decision-authority.md). A
T3 budget overrun escalates to the [ceo](../01-executive/ceo/).

## Outputs
A complete set of organized, logged footage covering every scene; sound recordings;
a continuity and script supervisor report; and a wrap memo of schedule and budget
actuals against plan.

## Completion Criteria
- [ ] Gate A passed: schedule, budget, and crew locked.
- [ ] All units shot with disjoint ownership and no missing coverage.
- [ ] Gate B passed: line-producer sign-off and creative clearance recorded.
- [ ] Memory registers below appended.

## Memory Updates
- [production-log](../memory/registers/production-log.md) — what the shoot taught:
  schedule variance, overruns, and the lesson for the next production.
- [greenlight-decisions](../memory/registers/greenlight-decisions.md) — any change
  to scope or budget band that revisits the greenlight is logged as a superseding
  entry.

## Failure / Rollback
Gate A fails → hold the shoot; the day is not lost to an unready schedule. Gate B
fails → missing coverage triggers reshoots scheduled by the line-producer, recorded
in [production-log](../memory/registers/production-log.md); a budget breach escalates
to the ceo. No entry is erased (Directive [#8](../../kernel/laws/prime-directives.md)).
