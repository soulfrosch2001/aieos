# post-production
Status: stable
Type: workflow
Owner: editor
Extends: release

# Workflow: post-production
Status: stable
**Purpose:** Edit, finish, and deliver the film — turn raw footage into a locked,
finished cut ready for release.
**Default Tier:** [T3](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** editor
**Extends:** stdlib [release](../../templates/workflow.template.md)

## Trigger
Wrapped footage arrives from [production](production.md). The
[studio-orchestrator](../01-executive/studio-orchestrator/) sizes it as
[T3](../../kernel/laws/engagement-tiers.md): a delivery commitment where the
finished film is assembled and shipped, on the same footing as production because a
flawed delivery cannot be recalled.

## Participants
- [studio-orchestrator](../01-executive/studio-orchestrator/) — sizes, decomposes, routes, integrates; never cuts the film (Directive [#2](../../kernel/laws/prime-directives.md)).
- [editor](../04-post/editor/) — owns the cut and pacing, and Gate A.
- [vfx-supervisor](../04-post/vfx-supervisor/) — owns shots, compositing, and the finishing pipeline.
- [creative-director](../01-executive/creative-director/) — creative veto on the final cut (off-vision finishing is stopped).
- [line-producer](../01-executive/line-producer/) — owns the delivery schedule and the picture-lock call.
- [chief-auditor](../01-executive/chief-auditor/) — runs the delivery conformance check; never edits.

## Inputs
The organized footage and sound from production, the
[creative-council](../councils/creative-council/) intent, the delivery spec
(formats, runtime, deliverables), and the finishing budget.

## Steps
```
assembly ─> [GATE A: picture-lock candidate cuts together] ─> fan-out(edit-finish | vfx-finish | sound-color) ─> conform ─> [GATE B: creative-director clears + delivery conformance passes] ─> record
```
1. **Assembly** — editor — build the assembly and rough cut; find the film's shape.
2. **Lock-candidate** — editor — confirm the cut holds together and is ready to finish. `[GATE A]`
3. **Decompose** — studio-orchestrator — split finishing into disjoint tracks (picture finish, vfx, sound + color) with no shared timeline.
4. **Finish** — editor / vfx-supervisor — complete tracks in parallel against the delivery spec.
5. **Conform** — editor — integrate finished tracks into one master; the [chief-auditor](../01-executive/chief-auditor/) checks delivery conformance.
6. **Review** — creative-director clears the final cut; line-producer confirms delivery. `[GATE B]`
7. **Record** — studio-orchestrator — append to the registers below.

## Review Gates
- **Gate A — picture-lock candidate cuts together:** no finishing track starts until
  the cut is coherent and locked enough to finish against.
- **Gate B — creative-director clears + delivery conformance passes:** the film is
  not delivered until the [creative-director](../01-executive/creative-director/)
  clears the final cut and the [chief-auditor](../01-executive/chief-auditor/)'s
  delivery conformance check passes.

## Approval Process
The editor signs Gate A on the lock candidate. The creative-director holds the Gate
B creative veto on the final cut; the chief-auditor holds the conformance veto and
the line-producer confirms delivery, per
[decision-authority](../../kernel/laws/decision-authority.md). A delivery-spec
failure escalates to the [ceo](../01-executive/ceo/).

## Outputs
A delivered film: the locked master in every required format, the conformed sound and
color, the VFX shots finished to spec, and a delivery manifest the chief-auditor has
signed off.

## Completion Criteria
- [ ] Gate A passed: picture-lock candidate approved.
- [ ] All finishing tracks integrated with disjoint ownership.
- [ ] Gate B passed: creative clearance and delivery conformance recorded.
- [ ] Memory registers below appended.

## Memory Updates
- [production-log](../memory/registers/production-log.md) — finishing learning:
  pipeline issues, conformance findings, and the lesson for the next film.
- [greenlight-decisions](../memory/registers/greenlight-decisions.md) — if the cut
  changes the film's commercial shape, the revisited call is logged as a superseding
  entry.

## Failure / Rollback
Gate A fails → return to the edit; do not finish against an unlocked cut. Gate B
fails → a creative-veto or conformance failure returns the master to the owning
track with recorded objections, then re-reviews; the stop is logged in
[production-log](../memory/registers/production-log.md) — never erased
(Directive [#8](../../kernel/laws/prime-directives.md)).
