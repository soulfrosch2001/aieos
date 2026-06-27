# Workflows — AI Legal Advisors
Status: stable
Type: workflow-index
Owner: operations-partner
Extends: none

## What this folder is
The firm's executable procedures. Each workflow **extends** a stdlib default
[by name](../../kernel/loader/resolution-order.md) and tightens it for legal work
— never loosens it. The orchestrator routes matters into these; it does not
practice law inside them ([Directive #2](../../kernel/laws/prime-directives.md)).

## Workflows
- [matter-intake.md](matter-intake.md) — **T2**, extends stdlib `planning`. Intake
  and scope a new legal matter, running a conflicts check before any work starts.
- [contract-review.md](contract-review.md) — **T2**, extends stdlib
  `security-review`. Review a contract for legal risk and compliance.
- [legal-opinion.md](legal-opinion.md) — **T3**, extends stdlib `research`.
  Research and issue a defensible, signed legal opinion.

## Shared rules
- Every client-facing legal product runs at **T2 or higher**
  ([tiers](../../kernel/laws/engagement-tiers.md)); a formal opinion runs at **T3**.
- Every workflow ends by appending to the firm's
  [memory registers](../memory/registers/) — append-mostly
  ([Directive #8](../../kernel/laws/prime-directives.md)).
- The [chief-compliance-auditor](../01-executive/chief-compliance-auditor/) holds
  an absolute ethics/compliance veto at every gate; the
  [general-counsel](../01-executive/general-counsel/) holds a legal-soundness veto.

## Inherited
- Stdlib defaults: [../../workflows/](../../workflows/)
- Orchestration & fan-out: [../../kernel/protocols/orchestration.md](../../kernel/protocols/orchestration.md)
- Escalation: [../../kernel/protocols/escalation.md](../../kernel/protocols/escalation.md)
