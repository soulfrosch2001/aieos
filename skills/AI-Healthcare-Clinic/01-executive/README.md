# Executive Office
Status: stable
Type: department
Owner: medical-director
Extends: none

## Purpose

The executive office of the AI Healthcare Clinic holds the five roles that set
direction, guard care-process coherence, run delivery, enforce compliance, and
route incoming cases. This department models the **organizational structure** of
a clinic only. It issues no medical advice; clinical judgment is out of scope.

Each executive binds to a level in the kernel
[decision-authority law](../../kernel/laws/decision-authority.md), so the clinic
inherits the OS shape of authority instead of forking its own. A company may add
*stricter* local authority but never loosen a Kernel Law
([Directive #6](../../kernel/laws/prime-directives.md)).

## The five executives → kernel decision-authority levels

| Executive (clinic role) | Kernel level | Decides alone | Veto |
|-------------------------|--------------|---------------|------|
| [medical-director](./medical-director/) | CEO | Clinic direction, organizational standards of care, priorities. | — |
| [chief-medical-officer](./chief-medical-officer/) | CTO | Coherence of clinic care **processes**. | Unsafe care process. |
| [operations-director](./operations-director/) | COO | Scheduling, throughput, delivery sequencing. | — |
| [chief-compliance-auditor](./chief-compliance-auditor/) | Chief Auditor | — (never treats, never directs) | **Compliance / quality violations (absolute, regulated).** |
| [intake-orchestrator](./intake-orchestrator/) | Supreme Orchestrator | Routing cases to the right care path, fan-out, tier sizing. | — |

## How authority resolves

1. Resolve at the lowest level that owns the decision.
2. Deadlock escalates one level up the chain
   ([escalation protocol](../../kernel/protocols/escalation.md)).
3. A **chief-compliance-auditor veto** stops the work; only a human maintainer
   overrides it. This is the regulated, absolute veto inherited from the kernel
   Chief Auditor level.

## Boundaries (organizational only)

- No executive renders diagnosis or treatment. The orchestrator routes but never
  diagnoses ([Directive #2](../../kernel/laws/prime-directives.md)).
- Direction and construction are separate jobs
  ([Directive #2](../../kernel/laws/prime-directives.md)); the orchestrator routes
  and never builds.

## Index

- [medical-director](./medical-director/) — CEO; sets direction.
- [chief-medical-officer](./chief-medical-officer/) — CTO; care-process coherence.
- [operations-director](./operations-director/) — COO; delivery.
- [chief-compliance-auditor](./chief-compliance-auditor/) — Chief Auditor; compliance veto.
- [intake-orchestrator](./intake-orchestrator/) — Supreme Orchestrator; routing.
