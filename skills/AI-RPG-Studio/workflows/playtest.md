<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: playtest
Status: stable
Type: workflow
Owner: balance-designer
Extends: research

**Purpose:** Run a structured playtest of rules or an adventure and turn play into evidence.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** balance-designer
**Extends:** [research](../../workflows/research.md)

## Trigger
A rules subsystem or an adventure reaches a state where intuition is no longer
enough and only the table can answer the question — usually before a Gate B in
[campaign-design](campaign-design.md) or [adventure-module](adventure-module.md).
The [rpg-orchestrator](../01-executive/rpg-orchestrator/) sizes it at
[T2](../../kernel/laws/engagement-tiers.md): a bounded investigation with a stated
hypothesis. Casual eyeballing is not a playtest; a line-wide balance overhaul is T3.

## Participants
- [rpg-orchestrator](../01-executive/rpg-orchestrator/) — frames the question, routes, integrates findings (Directive [#2](../../kernel/laws/prime-directives.md)).
- [balance-designer](../03-systems/balance-designer/) — owns the test design, the data, and the verdict.
- [rules-designer](../03-systems/rules-designer/), [encounter-designer](../03-systems/encounter-designer/) — subjects of the test; observe, do not defend.
- [quest-designer](../04-narrative/quest-designer/) — runs the table when an adventure is under test.
- [chief-auditor](../01-executive/chief-auditor/) — Gate B: confirms the evidence actually answers the question.

## Inputs
A falsifiable hypothesis with a north-star justification (Directive [#1](../../kernel/laws/prime-directives.md)) —
e.g. "the level-5 fight ends in 4-6 rounds for a standard party" — the exact build
under test, the table format, and the metrics to record.

## Steps
```
hypothesis ─> [GATE A: test design sound] ─> run sessions(parallel tables) ─> integrate data ─> [GATE B: evidence answers the question] ─> record
```
1. **Frame** — rpg-orchestrator — size as T2, state the hypothesis and success metrics.
2. **Design** — balance-designer — fix the protocol: builds, table count, what to log, what counts as pass/fail. `[GATE A]`
3. **Run** — table runners — play the sessions in parallel, logging every metric without coaching the players.
4. **Integrate** — balance-designer — aggregate the logs into a finding: confirmed, refuted, or inconclusive.
5. **Verify** — chief-auditor — confirm the evidence genuinely answers the question, not a softer one. `[GATE B]`
6. **Record** — rpg-orchestrator — append the registers below.

## Review Gates
- **Gate A — test design sound:** no session runs until the protocol has a clear hypothesis, metrics, and pass/fail line; a vague test is a wasted table.
- **Gate B — evidence answers the question:** the finding is not accepted until it is reproducible and addresses the stated hypothesis, not a convenient substitute.

## Approval Process
Balance-designer signs Gate A; chief-auditor holds the Gate B veto. See
[decision-authority](../../kernel/laws/decision-authority.md). A finding that forces
a rules change feeds back into [campaign-design](campaign-design.md) or
[adventure-module](adventure-module.md); a line-wide change escalates to the
[design-council](../councils/design-council/).

## Outputs
A playtest report: hypothesis, method, raw metrics, verdict, and recommended change
(if any).

## Completion Criteria
- [ ] Protocol approved at Gate A.
- [ ] All planned sessions run with complete logs.
- [ ] Verdict reproducible and accepted at Gate B.
- [ ] Memory registers below appended.

## Memory Updates
- [encounter-log](../memory/registers/encounter-log.md) — every encounter's measured difficulty and the tuning verdict.
- [campaign-ideas](../memory/registers/campaign-ideas.md) — surprises at the table worth turning into future content.
- [canon](../memory/registers/canon.md) — only if play revealed a canon fact that must be corrected.

## Failure / Rollback
Gate A fails → fix the protocol before spending tables. Gate B inconclusive → run
again with a tighter design, do not ship the change on weak evidence. A refuted
hypothesis is recorded as-is in [encounter-log](../memory/registers/encounter-log.md) —
a negative result is still a result.
