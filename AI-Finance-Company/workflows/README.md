# Workflows
Status: stable
Type: workflow
Owner: Supreme Orchestrator
Extends: stdlib workflows

The AI Finance Company's local **workflow library**. Each workflow inherits a
stdlib procedure by name and adds *stricter*, regulated-domain gates — it never
loosens a Kernel Law ([Directive #6](../../kernel/laws/prime-directives.md),
[resolution-order](../../kernel/loader/resolution-order.md)). A workflow **routes**
work to analysts, risk, and compliance agents; it never inlines their craft
([Directive #2](../../kernel/laws/prime-directives.md)). Every workflow passes
**Gate A** (plan/criteria agreed before work) and **Gate B** (quality and
compliance cleared before anything binds capital), and **ends by writing to
memory** ([Directive #8](../../kernel/laws/prime-directives.md)).

## Choosing a workflow

| Workflow | Default Tier | Extends (stdlib) | Use it when |
|----------|--------------|------------------|-------------|
| [investment-thesis](investment-thesis.md) | [T2](../../kernel/laws/engagement-tiers.md) | [research](../../workflows/research.md) | Building and defending an investment thesis with evidence. |
| [risk-review](risk-review.md) | [T3](../../kernel/laws/engagement-tiers.md) | [security-review](../../workflows/security-review.md) | Reviewing risk posture before and after a position. |
| [portfolio-rebalance](portfolio-rebalance.md) | [T2](../../kernel/laws/engagement-tiers.md) | [planning](../../workflows/planning.md) | Planning and executing a rebalance under compliance gates. |

## Selection rules
- Size first (Tier), then pick. The tier sets fan-out and sign-off — see
  [orchestration](../../kernel/protocols/orchestration.md) and
  [decision-authority](../../kernel/laws/decision-authority.md).
- When two workflows fit, the **higher tier wins the decision**; the lower tier may
  execute it (engagement-tiers sizing rule).
- The [Chief Compliance Auditor](../01-executive/chief-compliance-auditor/) holds an
  absolute compliance/quality veto on every Gate B — regulated domain, no exceptions.
- The [finance-orchestrator](../01-executive/finance-orchestrator/) routes and sizes
  but never makes an investment call ([Directive #2](../../kernel/laws/prime-directives.md)).

## Memory
Every workflow's last step appends to a local register under
[../memory/registers/](../memory/registers/), which extends a stdlib register by
name. Knowledge flows down, decisions of consequence flow up
([memory-flow](../../kernel/protocols/memory-flow.md)).
