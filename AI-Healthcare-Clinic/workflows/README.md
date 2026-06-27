# Workflows
Status: stable
Type: workflow-index
Owner: operations-director
Extends: none

**Purpose:** The repeatable processes of the AI Healthcare Clinic — how a case is
taken in and scheduled, how care is coordinated across roles, and how a process
change is reviewed for safety and compliance. These are **organizational**
processes only; they issue no medical advice and make no clinical decisions
([Directive #2](../../kernel/laws/prime-directives.md)).

## Inheritance
Each workflow **extends** a stdlib workflow of related name and overrides it only
where the clinic needs stricter framing. Resolution is local-by-name first, then
stdlib, then kernel — see the
[loader resolution order](../../kernel/loader/resolution-order.md) and
[Directive #5](../../kernel/laws/prime-directives.md).

## The workflows
| Workflow | Tier | Extends | Purpose |
|----------|------|---------|---------|
| [patient-intake](patient-intake.md) | T2 | planning | Route and schedule an incoming case (organizational). |
| [care-coordination](care-coordination.md) | T2 | feature | Coordinate the care process across roles. |
| [safety-review](safety-review.md) | T3 | security-review | Review a process change for safety and compliance. |

## How tiers bind here
Tiers are sized per the kernel [engagement tiers](../../kernel/laws/engagement-tiers.md).
Anything touching patient safety is a **T3 floor** and must run
[safety-review](safety-review.md) before it ships.

## Gates and memory
Every workflow declares blocking **Gate A / Gate B** checks and ends by writing to
the clinic [memory registers](../memory/registers/README.md), append-mostly
([Directive #7](../../kernel/laws/prime-directives.md)). Decisions flow up and
knowledge flows down per [memory-flow](../../kernel/protocols/memory-flow.md).

## See also
- [Councils](../councils/README.md) — where significant change is debated first.
- [Reports](../reports/README.md) — standing health telemetry read upward.
