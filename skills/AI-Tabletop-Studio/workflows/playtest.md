<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: playtest
Status: stable
Type: workflow
Owner: playtest-lead
Extends: [research](../../workflows/research.md) + [audit](../../workflows/audit.md)

**Purpose:** Run a structured playtest cycle that turns a design hypothesis into
evidence — does the subsystem play as intended, and where does it break — without
guessing.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** playtest-lead
**Extends:** [research](../../workflows/research.md) + [audit](../../workflows/audit.md)

## Trigger
A design decision needs evidence before it sets: a new subsystem from
[rules-design](rules-design.md), a balance change, or a suspected dominant strategy.
Sized [T2](../../kernel/laws/engagement-tiers.md) by the studio-orchestrator.

## Participants
- [studio-orchestrator](../01-executive/studio-orchestrator/) — sizes and routes; never runs the test itself (Directive [#2](../../kernel/laws/prime-directives.md)).
- playtest-lead — owns the test plan, the hypothesis, and Gate A.
- playtester(s) — run sessions, capture observations (parallel, disjoint tables).
- balance-designer — reads results against the intended curve.
- [balance-council](../councils/balance-council/) — adjudicates contested findings.
- chief-auditor — Gate B, confirms the evidence is sound, not cherry-picked.

## Inputs
A falsifiable hypothesis, the build under test, the metrics that decide it (win-rate
spread, game length, decision-point count), and a minimum session count.

## Steps
```
hypothesis ─> [GATE A: test plan approved] ─> sessions(parallel) ─> analyze ─> [GATE B: evidence sound] ─> record
```
1. **Frame** — playtest-lead — state the hypothesis and the metrics that confirm or kill it.
2. **Plan** — playtest-lead — define sessions, player mix, and stop conditions. `[GATE A]`
3. **Run** — playtester(s) — play the build in parallel, capture raw observations per table.
4. **Analyze** — balance-designer — aggregate against the intended curve; flag deviations.
5. **Adjudicate** — balance-council — resolve any contested or contradictory findings.
6. **Audit** — chief-auditor — confirm the sample is adequate and the read is honest. `[GATE B]`
7. **Record** — studio-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — test plan approved:** no session runs until the playtest-lead signs a plan with a falsifiable hypothesis and a minimum session count — the research discipline this inherits from [research](../../workflows/research.md).
- **Gate B — evidence sound:** findings are not accepted until the chief-auditor confirms the sample size and that conclusions follow the data, not a preferred outcome — the audit strictness this inherits from [audit](../../workflows/audit.md).

## Approval Process
Playtest-lead signs Gate A; balance-council adjudicates contested results;
chief-auditor holds the Gate B veto. See
[decision-authority](../../kernel/laws/decision-authority.md).

## Outputs
A findings report: hypothesis confirmed or killed, the evidence, and recommended
changes routed back to [rules-design](rules-design.md) if needed.

## Completion Criteria
- [ ] Hypothesis and metrics fixed before play (Gate A).
- [ ] Minimum sessions run across disjoint tables.
- [ ] Findings adjudicated and audited (Gate B).
- [ ] Memory registers below appended.

## Memory Updates
- [playtest-feedback](../memory/registers/playtest-feedback.md) — sessions run, the verdict, and the raw signal behind it.
- [balancing-history](../memory/registers/balancing-history.md) — any value change the cycle justifies.

## Failure / Rollback
Gate A fails → the hypothesis is not testable; reframe before running anything.
Gate B fails → evidence is inconclusive; extend the cycle with more sessions or a
tighter metric, do not let the design set on a weak read.
