# permit-review
Status: stable
Type: workflow
Owner: chief-auditor
Extends: security-review

# Workflow: permit-review
Status: stable
**Purpose:** Review a design for code and permit compliance — verify a design set
against building code, life-safety, and the permit authority's requirements before
it leaves the studio.
**Default Tier:** [T3](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** chief-auditor
**Extends:** stdlib [security-review](../../templates/workflow.template.md)

## Trigger
A design set — typically out of [design-development](design-development.md) — is
proposed for permit submission. The
[studio-orchestrator](../01-executive/studio-orchestrator/) sizes it as
[T3](../../kernel/laws/engagement-tiers.md): a compliance gate whose failure has
legal and life-safety consequences, so it carries a council and the auditor's veto.

## Participants
- [studio-orchestrator](../01-executive/studio-orchestrator/) — routes the set to review; never designs (Directive [#2](../../kernel/laws/prime-directives.md)).
- [chief-auditor](../01-executive/chief-auditor/) — owns the review and the code/quality veto; never designs and never directs.
- [project-architect](../04-delivery/project-architect/) — assembles the permit set and authority correspondence.
- [structural-engineer](../03-technical/structural-engineer/) — structural and life-safety basis.
- [building-systems-engineer](../03-technical/building-systems-engineer/) — egress, fire, and systems code.
- [code-compliance-council](../councils/code-compliance-council/) — adjudicates contested findings.

## Inputs
The candidate design set, the governing code edition and jurisdiction, prior
[code-compliance-log](../memory/registers/code-compliance-log.md) entries for the
project, and the permit authority's submission checklist.

## Steps
```
intake ─> [GATE A: set complete & code basis fixed] ─> audit(egress | structure | fire | systems) ─> consolidate ─> [GATE B: zero open life-safety findings + auditor sign-off] ─> record
```
1. **Intake** — studio-orchestrator — confirm the set is the candidate for submission.
2. **Completeness** — chief-auditor — verify the set is whole and the code basis is named. `[GATE A]`
3. **Decompose** — studio-orchestrator — split the audit into disjoint code domains.
4. **Audit** — auditor + engineers — check each domain against code; log every finding.
5. **Consolidate** — chief-auditor — triage findings; escalate contested ones to council.
6. **Adjudicate** — [code-compliance-council](../councils/code-compliance-council/) — resolve disputes; auditor signs. `[GATE B]`
7. **Record** — studio-orchestrator — append to the registers below.

## Review Gates
- **Gate A — set complete & code basis fixed:** no audit starts on a partial set or
  an unstated code edition/jurisdiction.
- **Gate B — zero open life-safety findings + auditor sign-off:** no drawing leaves
  the studio with an open life-safety finding. The chief-auditor's veto is binding
  on the permit set.

## Approval Process
The chief-auditor signs both gates and holds the binding code/quality veto per
[decision-authority](../../kernel/laws/decision-authority.md). Contested findings
go to the [code-compliance-council](../councils/code-compliance-council/) (the
auditor chairs) before sign-off. Directors may not overrule a life-safety stop.

## Outputs
A permit-ready, code-compliant design set; a closed findings list; and the
authority submission package.

## Completion Criteria
- [ ] Gate A passed: set complete and code basis fixed.
- [ ] Every audit domain checked and findings logged.
- [ ] Gate B passed: zero open life-safety findings; auditor sign-off recorded.
- [ ] Memory registers below appended.

## Memory Updates
- [code-compliance-log](../memory/registers/code-compliance-log.md) — every
  finding, severity, status, and resolution.
- [design-lessons](../memory/registers/design-lessons.md) — recurring code traps
  to feed back into early design.

## Failure / Rollback
Gate A fails → return the set for completion; do not audit a partial package. Gate B
fails → any open life-safety finding blocks submission and routes back to the owning
discipline; the set is corrected and re-audited. Every finding stays in the log as a
dated entry, closed by a superseding entry, never erased (Directive [#8](../../kernel/laws/prime-directives.md)).
