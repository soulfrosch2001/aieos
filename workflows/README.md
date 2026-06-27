# Workflows

Status: stable
Type: workflow
Owner: Supreme Orchestrator
Extends: none

The standard-library **workflow library**: repeatable procedures every company
inherits and overrides by name (Prime Directive
[#6](../kernel/laws/prime-directives.md)). Each workflow is one file that obeys
the [workflow contract](../kernel/contracts/workflow.md) and is built from
[../templates/workflow.template.md](../templates/workflow.template.md).

A workflow **routes** work to agents — it never inlines their craft (Directive
[#2](../kernel/laws/prime-directives.md)). Every workflow passes **Gate A** (plan
approved before build) and **Gate B** (quality gates passed before ship), and
**ends by writing to memory** (Directive [#8](../kernel/laws/prime-directives.md)).

## Choosing a workflow

| Workflow | Default Tier | Use it when |
|----------|--------------|-------------|
| [feature](feature.md) | [T2](../kernel/laws/engagement-tiers.md) | Building new capability with real design choices. |
| [bug](bug.md) | T1 | Fixing a single, reproducible defect. |
| [hotfix](hotfix.md) | T4 | Production is down or actively harming users — fix now. |
| [research](research.md) | T2 | Reducing an unknown before committing to a build. |
| [architecture-review](architecture-review.md) | T3 | Vetting a structural decision before it sets. |
| [security-review](security-review.md) | T3 | Assessing a change for exposure before it ships. |
| [release](release.md) | T3 | Cutting and shipping a versioned release. |
| [planning](planning.md) | T2 | Turning a goal into a sequenced, owned plan. |
| [documentation](documentation.md) | T1 | Writing or correcting docs for shipped work. |
| [audit](audit.md) | T2 | Checking an entity against contracts and standards. |

## Selection rules
- Size first (Tier), then pick. The tier sets fan-out and sign-off — see
  [orchestration](../kernel/protocols/orchestration.md) and
  [decision-authority](../kernel/laws/decision-authority.md).
- When two workflows fit, the one with the **higher tier wins the decision**; the
  lower tier may execute it (engagement-tiers sizing rule).
- A company overrides a workflow **by name only**, adding stricter local gates —
  never loosening a Kernel Law (Directive [#6](../kernel/laws/prime-directives.md)).

## Memory
Every workflow's last step appends to a register under
[../memory/](../memory/). Knowledge flows down, decisions of consequence flow up
([memory-flow](../kernel/protocols/memory-flow.md)).
