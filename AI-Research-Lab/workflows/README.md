# Workflows
Status: stable
Type: workflow
Owner: lab-orchestrator
Extends: none

The local **workflow library** for the AI Research Lab. Each workflow overrides a
standard-library procedure **by name** and may only **add strictness** — never loosen
a Kernel Law ([Directive #6 — inherit, don't fork](../../kernel/laws/prime-directives.md),
[resolution-order](../../kernel/loader/resolution-order.md)). Every file obeys the
[workflow contract](../../kernel/contracts/workflow.md) and is built from
[../../templates/workflow.template.md](../../templates/workflow.template.md).

A workflow **routes** the science to agents — it never runs an experiment inline
(Directive [#2](../../kernel/laws/prime-directives.md)). Every workflow passes **Gate A**
(plan/criteria agreed before work) and **Gate B** (rigor cleared before ship), and
**ends by writing to memory** (Directive [#8](../../kernel/laws/prime-directives.md)).

## Choosing a workflow

| Workflow | Default Tier | Extends (stdlib) | Use it when |
|----------|--------------|------------------|-------------|
| [experiment-design](experiment-design.md) | [T2](../../kernel/laws/engagement-tiers.md) | [research](../../workflows/research.md) | Designing a sound, reproducible experiment from a hypothesis. |
| [peer-review](peer-review.md) | [T3](../../kernel/laws/engagement-tiers.md) | [security-review](../../workflows/security-review.md) | Adversarially reviewing methods and results before publication. |
| [publication](publication.md) | [T2](../../kernel/laws/engagement-tiers.md) | [documentation](../../workflows/documentation.md) | Writing up and publishing findings backed by cleared evidence. |

## Selection rules
- Size first (Tier), then pick. The tier sets fan-out and sign-off — see
  [orchestration](../../kernel/protocols/orchestration.md) and
  [decision-authority](../../kernel/laws/decision-authority.md).
- When two workflows fit, the **higher tier wins the decision**; the lower tier may
  execute it (engagement-tiers sizing rule).
- A finding that is not yet a finding is a question — it stays in
  [experiment-design](experiment-design.md) until [peer-review](peer-review.md) clears it.

## Memory
Every workflow's last step appends to a local register under
[../memory/registers/](../memory/registers/), which itself extends a stdlib register.
Knowledge flows down, decisions of consequence flow up
([memory-flow](../../kernel/protocols/memory-flow.md)).
