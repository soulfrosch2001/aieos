<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: campaign-launch
Status: stable
Type: workflow
Owner: operations-director
Extends: feature

**Purpose:** Take a campaign from brief to live — gated on brand coherence before
build and on a working measurement plan before launch.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** operations-director
**Extends:** stdlib [feature](../../workflows/feature.md)

## Trigger
A client brief for a new campaign that carries real creative and media choices —
sized [T2](../../kernel/laws/engagement-tiers.md) by the
[agency-orchestrator](../../kernel/protocols/orchestration.md). A brand-defining or
repositioning campaign escalates to [brand-review](brand-review.md) (T3); a
single asset belongs in [content-production](content-production.md) (T1).

## Participants
- [agency-orchestrator](../../kernel/protocols/orchestration.md) — sizes, decomposes, routes, integrates (never executes creative or media, Directive [#2](../../kernel/laws/prime-directives.md)).
- [operations-director](../01-executive/operations-director/) — owns the plan, sequencing, and Gate A sign-off.
- [strategy-director](../01-executive/strategy-director/) — brand/strategy veto; confirms the brief is on-strategy.
- [campaign-council](../councils/campaign-council/) — debates the campaign concept and channel mix.
- Up to 8 builder agents — strategy, content, and performance tracks, disjoint and parallel.
- [chief-auditor](../01-executive/chief-auditor/) — Gate B quality and measurement veto.

## Inputs
A client brief with objective and budget, a north-star justification (Directive
[#1](../../kernel/laws/prime-directives.md)), the target audience, and the success
metrics the campaign will be judged on.

## Steps
```
brief ─> [GATE A: concept on-brand + plan approved] ─> fan-out(≤8) ─> integrate ─> [GATE B: measurement live + quality pass] ─> launch ─> record
```
1. **Intake** — agency-orchestrator — size as T2; confirm objective, budget, and audience.
2. **Concept** — campaign-council — debate concept and channel mix; strategy-director confirms it is on-brand. `[GATE A]`
3. **Decompose** — agency-orchestrator — partition into ≤8 disjoint tracks (positioning, copy, social, performance/media).
4. **Build** — builder agents — produce assets and media setup in parallel, no shared file.
5. **Integrate** — agency-orchestrator — resolve seams; assemble the launch package.
6. **Verify** — chief-auditor — run the tier's quality gates and confirm tracking/measurement is live. `[GATE B]`
7. **Launch** — operations-director — push the campaign live per the agreed sequence.
8. **Record** — agency-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — concept on-brand + plan approved:** no track launches until the
  campaign-council signs the plan and the strategy-director confirms it does not
  violate brand or strategy. Off-brand work is vetoed here, not after spend.
- **Gate B — measurement live + quality pass:** the campaign does not go live until
  tracking/attribution is verified and
  [quality-standards](../../shared/quality-standards.md) gates pass. A campaign we
  cannot measure is a campaign we will not ship.

## Approval Process
Campaign-council signs Gate A; strategy-director holds the brand veto at both gates;
chief-auditor holds the Gate B quality veto. See
[decision-authority](../../kernel/laws/decision-authority.md). A T3 brand-defining
variant adds CEO/strategy-director sign-off via [brand-review](brand-review.md).

## Outputs
The live campaign, its creative and media assets, the measurement/attribution setup,
and a recorded campaign plan with its concept rationale.

## Completion Criteria
- [ ] Concept on-brand and plan approved at Gate A.
- [ ] All tracks integrated with no overlapping ownership.
- [ ] Measurement live and Gate B quality gates pass.
- [ ] Campaign live per the agreed sequence; memory registers below appended.

## Memory Updates
- [campaign-results](../memory/registers/campaign-results.md) — what the campaign did, against which objective, and what it taught.
- [brand-decisions](../memory/registers/brand-decisions.md) — any binding brand/positioning choice the campaign settled.
- [audience-insights](../memory/registers/audience-insights.md) — audience findings surfaced that are worth parking.

## Failure / Rollback
Gate A fails (off-brand or thin plan) → return to concept, do not fan out and do not
spend. Gate B fails (no measurement or quality miss) → block launch, route defects
back to the owning track, re-verify. A live campaign harming the brand or burning
budget → pause spend and escalate to the strategy-director; correct the record by
adding a dated entry, never by erasing (Directive [#8](../../kernel/laws/prime-directives.md)).
