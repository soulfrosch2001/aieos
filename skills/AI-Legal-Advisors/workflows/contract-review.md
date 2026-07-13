# contract-review
Status: stable
Type: workflow
Owner: contract-attorney
Extends: security-review

# Workflow: contract-review
Status: stable
**Purpose:** Review a contract for legal risk and compliance, marking up
unacceptable terms before the client relies on it.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** contract-attorney
**Extends:** stdlib [security-review](../../workflows/security-review.md)

## Trigger
A contract is presented for review, drafting, or negotiation under an accepted
matter. Sized [T2](../../kernel/laws/engagement-tiers.md); any contract the client
will sign in reliance on the firm runs at T2 or higher and never below.

## Participants
- [contract-attorney](../02-advisory/contract-attorney/) — leads the review and owns the markup.
- [corporate-counsel](../02-advisory/corporate-counsel/) — advisory lead; pressure-tests deal structure.
- [compliance-counsel](../04-compliance/compliance-counsel/) — checks regulatory and licensing exposure.
- [general-counsel](../01-executive/general-counsel/) — legal-soundness sign-off at Gate B.
- [chief-compliance-auditor](../01-executive/chief-compliance-auditor/) — absolute ethics/compliance veto.

## Inputs
The contract text, the parties, the governing law, the client's commercial intent,
the accepted matter scope from [matter-intake.md](matter-intake.md), and relevant
[precedent](../memory/registers/precedent.md).

## Steps
```
contract ─> clause sweep ─> risk classify ─> [GATE A: all clauses triaged] ─> markup ─> soundness review ─> [GATE B: GC + compliance clear] ─> record
```
1. **Frame** — contract-attorney — confirm parties, governing law, and commercial intent.
2. **Clause sweep** — contract-attorney — read every clause; flag indemnities, liability caps, IP, termination, and governing-law terms.
3. **Risk classify** — contract-attorney + compliance-counsel — rate each flagged
   clause (acceptable / negotiate / blocker) against firm
   [precedent](../memory/registers/precedent.md). `[GATE A]`
4. **Markup** — contract-attorney — draft redlines and a risk memo for the client.
5. **Soundness review** — general-counsel — verify the markup is legally sound and
   consistent with precedent; chief-compliance-auditor screens for regulatory breach. `[GATE B]`
6. **Record** — contract-attorney — update the memory registers below.

## Review Gates
- **Gate A — all clauses triaged:** no markup ships until every clause carries a
  risk rating; an untriaged blocker clause halts the review.
- **Gate B — soundness + compliance clear:** general-counsel confirms legal
  soundness and chief-compliance-auditor finds no regulatory breach. A compliance
  block is absolute and overrides any commercial pressure.

## Approval Process
contract-attorney owns the markup; general-counsel signs legal soundness;
chief-compliance-auditor holds the compliance veto per
[decision-authority](../../kernel/laws/decision-authority.md). High-exposure
contracts escalate to the [risk-council](../councils/risk-council/).

## Outputs
A redlined contract plus a client-facing risk memo classifying every material term
and naming any blocker requiring renegotiation or refusal.

## Completion Criteria
- [ ] Every clause triaged and rated (Gate A).
- [ ] General-counsel soundness and compliance clearance (Gate B).
- [ ] Memory registers appended.

## Memory Updates
- [precedent](../memory/registers/precedent.md) — clause positions and rationale set as firm precedent.
- [risk-register](../memory/registers/risk-register.md) — residual or accepted contractual risks, with severity.
- [matter-log](../memory/registers/matter-log.md) — review outcome, turnaround, and lessons for the matter.

## Failure / Rollback
Blocker clause unresolved → do not clear Gate B; return to negotiation or advise
refusal. Compliance breach found → absolute halt, escalate to
[risk-council](../councils/risk-council/). Markup inconsistent with precedent →
general-counsel reconciles before sign-off, never ships divergence silently.
