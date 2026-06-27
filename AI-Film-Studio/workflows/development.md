# development
Status: stable
Type: workflow
Owner: screenwriter
Extends: planning

# Workflow: development
Status: stable
**Purpose:** Develop a project from pitch to greenlit script — turn a raw idea into
a script the studio has committed to make.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** screenwriter
**Extends:** stdlib [planning](../../templates/workflow.template.md)

## Trigger
A pitch arrives — an original idea, an option, or an adaptation — for a film the
[ceo](../01-executive/ceo/) is willing to consider. The
[studio-orchestrator](../01-executive/studio-orchestrator/) sizes it as
[T2](../../kernel/laws/engagement-tiers.md): a real creative bet with parallelizable
research and drafting, but below the capital commitment of
[production](production.md) (T3).

## Participants
- [studio-orchestrator](../01-executive/studio-orchestrator/) — sizes, decomposes, routes; never writes the film (Directive [#2](../../kernel/laws/prime-directives.md)).
- [screenwriter](../02-development/screenwriter/) — owns the script and Gate A.
- [story-editor](../02-development/story-editor/) — pressure-tests structure and character.
- [development-executive](../02-development/development-executive/) — market fit, comparables, and audience case.
- [creative-director](../01-executive/creative-director/) — creative veto at Gate B (off-vision work is stopped).
- [ceo](../01-executive/ceo/) — the greenlight call.

## Inputs
A pitch with a north-star justification (Directive [#1](../../kernel/laws/prime-directives.md)),
a logline and treatment, the budget band the project is aimed at, and any rights or
option status that constrains it.

## Steps
```
intake ─> [GATE A: pitch coherent + rights clear] ─> fan-out(draft | structure-edit | market-case) ─> integrate ─> [GATE B: creative-director clears + ceo greenlights] ─> record
```
1. **Intake** — studio-orchestrator — size as T2, frame the creative problem and the budget band.
2. **Validate** — screenwriter — confirm the pitch holds together and rights are clear. `[GATE A]`
3. **Decompose** — studio-orchestrator — split into disjoint tracks (draft, structure-edit, market-case).
4. **Develop** — screenwriter / story-editor / development-executive — work tracks in parallel, no shared page.
5. **Integrate** — screenwriter — fold notes into a single submission draft; resolve contradictions.
6. **Review** — [greenlight-council](../councils/greenlight-council/) — debate the project; creative-director clears vision, ceo decides. `[GATE B]`
7. **Record** — studio-orchestrator — append to the registers below.

## Review Gates
- **Gate A — pitch coherent + rights clear:** no track launches until the logline,
  treatment, budget band, and rights status are confirmed coherent.
- **Gate B — creative-director clears + ceo greenlights:** the project does not
  advance to [production](production.md) without the
  [creative-director](../01-executive/creative-director/)'s veto cleared and the
  [ceo](../01-executive/ceo/)'s greenlight recorded.

## Approval Process
The screenwriter signs Gate A. The creative-director holds the Gate B creative veto
and the ceo holds the greenlight decision per
[decision-authority](../../kernel/laws/decision-authority.md). The line-producer is
consulted on the budget band but does not gate at T2.

## Outputs
A greenlit script package: a submission-fidelity screenplay, a one-page creative
case, a comparables and audience memo, and a top-line budget band the line-producer
can plan against.

## Completion Criteria
- [ ] Gate A passed: pitch, budget band, and rights validated.
- [ ] All tracks integrated with no overlapping ownership.
- [ ] Gate B passed: creative-director clearance and ceo greenlight recorded.
- [ ] Memory registers below appended.

## Memory Updates
- [greenlight-decisions](../memory/registers/greenlight-decisions.md) — the
  greenlight (or pass), its context, and the alternatives rejected.
- [project-ideas](../memory/registers/project-ideas.md) — strong ideas surfaced but
  not made this cycle, parked for a future slate.

## Failure / Rollback
Gate A fails → return the pitch for rework; do not fan out. Gate B fails → the
project is passed on or sent back to development with the council's recorded
objections; a creative-veto stop is logged in
[greenlight-decisions](../memory/registers/greenlight-decisions.md) as a
superseding entry — never erased (Directive [#8](../../kernel/laws/prime-directives.md)).
