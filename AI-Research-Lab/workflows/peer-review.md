<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: peer-review
Status: stable
Type: workflow
Owner: chief-auditor
Extends: security-review

**Purpose:** Adversarially attack the methods and results of a study — find the flaw that
would invalidate the claim — and block publication until that flaw is closed or owned.
**Default Tier:** [T3](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** chief-auditor
**Extends:** [security-review](../../workflows/security-review.md)

This workflow inherits stdlib [security-review](../../workflows/security-review.md) and
maps its threat model onto **scientific exposure**: where security review hunts for how a
change could leak or fail unsafe, peer-review hunts for how a result could be wrong — p-hacking,
confounds, unblinded measurement, a non-reproducing analysis. It adds strictness:
independent **replication** is a Gate B blocker, not an optional check
([resolution-order](../../kernel/loader/resolution-order.md)).

## Trigger
A completed experiment whose authors believe its result is a finding, sized
[T3](../../kernel/laws/engagement-tiers.md). A study still collecting data is not ready
for review — it belongs in [experiment-design](experiment-design.md).

## Participants
- [lab-orchestrator](../../kernel/protocols/orchestration.md) — frames the review scope, routes, never adjudicates the science itself.
- Up to 15 reviewer agents — attack methods, statistics, and reproducibility by surface, in parallel (Directive [#4](../../kernel/laws/prime-directives.md)).
- [replication-specialist](../03-analysis/replication-specialist/) — re-runs the analysis from raw data and protocol.
- [statistician](../03-analysis/statistician/) — checks the analysis was the pre-registered one, not a fished one.
- [review-council](../councils/review-council/) — adjudicates accepted limitations.
- [chief-auditor](../01-executive/chief-auditor/) — owns Gate B and the quality veto; never runs experiments and never directs.

## Inputs
The study's pre-registered protocol, raw data, analysis code, and the draft claim under
review — plus the prior in [findings](../memory/registers/findings.md).

## Steps
```
scope ─> [GATE A: protocol + raw data + claim available] ─> attack(≤15) ─> replicate ─> triage ─> [GATE B: claim survives + result reproduces] ─> record
```
1. **Scope** — lab-orchestrator — enumerate the claim, its evidence, and the attack surfaces. `[GATE A]`
2. **Decompose** — lab-orchestrator — assign surfaces (design, stats, confounds, reproducibility) to reviewers (≤15).
3. **Attack** — reviewers — probe each surface for the flaw that would refute the claim.
4. **Replicate** — replication-specialist — re-run the analysis end to end from raw data and the pre-registered plan.
5. **Triage** — review-council — rank findings by severity; assign owners; record any accepted limitation.
6. **Clear** — chief-auditor — confirm the claim survived attack and the result reproduced. `[GATE B]`
7. **Record** — lab-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — protocol + raw data + claim available:** review cannot start without the
  pre-registered protocol, the raw data, the analysis code, and an explicit claim. A claim
  without raw data is unreviewable and is blocked.
- **Gate B — claim survives + result reproduces:** every material finding is fixed or has a
  named owner and a recorded accepted-limitation; the analysis reproduces from raw data.
  A result that does not reproduce is not a finding (Directive [#9](../../kernel/laws/prime-directives.md)).

## Approval Process
The chief-auditor clears Gate B and may **veto** outright on a rigor or ethics breach
([decision-authority](../../kernel/laws/decision-authority.md)). Accepted limitations
require [review-council](../councils/review-council/) sign-off (chair: research-director).
A study with ethics exposure also passes the [ethics-council](../councils/ethics-council/).
Only a human maintainer overrides an auditor veto.

## Outputs
A review record: findings with severities, fixes or owned-limitation records, the
replication result, and a clearance note authorizing publication.

## Completion Criteria
- [ ] Protocol, raw data, and claim present at Gate A.
- [ ] Every surface attacked; findings triaged.
- [ ] Result independently reproduced.
- [ ] No unowned flaw remains (Gate B); memory registers appended.

## Memory Updates
- [findings](../memory/registers/findings.md) — the cleared finding and the evidence behind it, dated (this is the register's authoritative write).
- [experiment-log](../memory/registers/experiment-log.md) — the review outcome and replication result against the original entry.
- [open-questions](../memory/registers/open-questions.md) — questions the review opened that the study could not close.

## Failure / Rollback
Result fails to reproduce → publication blocked; return to [experiment-design](experiment-design.md)
and record the non-reproduction in [experiment-log](../memory/registers/experiment-log.md).
A high-severity methods flaw without a fix or owner → ship blocked. An ethics breach found
mid-review → escalate immediately to the [ethics-council](../councils/ethics-council/).
