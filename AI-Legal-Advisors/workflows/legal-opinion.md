# legal-opinion
Status: stable
Type: workflow
Owner: general-counsel
Extends: research

# Workflow: legal-opinion
Status: stable
**Purpose:** Research and issue a defensible, signed legal opinion the client can
rely on.
**Default Tier:** [T3](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** general-counsel
**Extends:** stdlib [research](../../workflows/research.md)

## Trigger
A client needs a formal legal opinion on a question of law. A formal opinion always
runs at [T3](../../kernel/laws/engagement-tiers.md) — it may never be sized lower.
No opinion ships solo: it requires drafting attorney work plus general-counsel
soundness sign-off.

## Participants
- [general-counsel](../01-executive/general-counsel/) — owns legal soundness; signs the opinion at Gate B.
- [legal-researcher](../03-litigation/legal-researcher/) — runs authority research and citation checks.
- Drafting attorney ([corporate-counsel](../02-advisory/corporate-counsel/),
  [ip-attorney](../02-advisory/ip-attorney/), or
  [litigator](../03-litigation/litigator/)) — drafts the reasoned opinion.
- [compliance-counsel](../04-compliance/compliance-counsel/) — confirms regulatory framing.
- [chief-compliance-auditor](../01-executive/chief-compliance-auditor/) — absolute ethics/compliance veto.
- [matter-review-council](../councils/matter-review-council/) — convened at T3 to pressure-test the reasoning.

## Inputs
The legal question, governing jurisdiction, the matter facts, the accepted scope
from [matter-intake.md](matter-intake.md), and prior firm
[precedent](../memory/registers/precedent.md).

## Steps
```
question ─> authority research ─> draft reasoning ─> [GATE A: authority sufficient + on point] ─> council review ─> GC sign-off ─> [GATE B: signed + sound] ─> record
```
1. **Frame** — general-counsel — state the precise legal question and the standard of certainty required.
2. **Authority research** — legal-researcher — gather binding and persuasive authority; verify every citation is current.
3. **Draft reasoning** — drafting attorney — write the opinion: facts, issues, analysis, conclusion.
4. **Sufficiency check** — general-counsel — confirm the authority is sufficient,
   current, and on point ([Directive #5](../../kernel/laws/prime-directives.md) on grounded claims). `[GATE A]`
5. **Council review** — [matter-review-council](../councils/matter-review-council/) — pressure-test the reasoning and dissent.
6. **Sign-off** — general-counsel — confirm legal soundness; chief-compliance-auditor screens for breach. `[GATE B]`
7. **Record** — general-counsel — update the memory registers below before release.

## Review Gates
- **Gate A — authority sufficient + on point:** no opinion advances on thin or
  stale authority; every conclusion traces to a verified, current citation.
- **Gate B — signed + sound:** general-counsel has signed soundness and
  chief-compliance-auditor finds no breach. An unsigned opinion is never released.

## Approval Process
general-counsel signs legal soundness (mandatory, non-delegable);
chief-compliance-auditor holds the absolute veto; the matter-review-council
pressure-tests per [decision-authority](../../kernel/laws/decision-authority.md).
T3 sign-off is recorded in [precedent](../memory/registers/precedent.md) before release.

## Outputs
A signed, dated legal opinion with facts, issues, analysis, conclusion, and a full
table of verified authorities — defensible before a court or regulator.

## Completion Criteria
- [ ] Authority sufficient, current, on point (Gate A).
- [ ] General-counsel signed; compliance cleared (Gate B).
- [ ] Council reasoning and any dissent recorded.
- [ ] Memory registers appended before release.

## Memory Updates
- [precedent](../memory/registers/precedent.md) — the opinion's holding and reasoning as binding firm precedent.
- [risk-register](../memory/registers/risk-register.md) — residual legal uncertainty or reliance limits.
- [matter-log](../memory/registers/matter-log.md) — research effort, turnaround, and lessons learned.

## Failure / Rollback
Authority insufficient → return to research; never opine on a gap. Council dissent
unresolved → record it and do not force consensus
([report template](../reports/health-report.md) records dissent, never suppresses).
Compliance breach → absolute halt and escalation per
[escalation](../../kernel/protocols/escalation.md). An unsound opinion is withdrawn
by a new, dated correction entry, never erased (Directive #8).
