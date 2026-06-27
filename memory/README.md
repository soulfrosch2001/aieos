# Memory
Status: stable
Type: protocol
Owner: Supreme Orchestrator
Extends: none

The institutional memory of AIEOS — the append-mostly registers that let an
enterprise remember what it decided, what it learned, and what it still owes
itself. Memory is not a database; it is a **record of consequence**. If a fact
does not outlive the task that produced it, it does not belong here.

This subsystem provides the **default registers every company inherits**
([Directive #6](../kernel/laws/prime-directives.md)). A company extends a
register *by name* — never by forking its schema — and may add its own registers
alongside these.

## How memory behaves
- **Append-mostly.** You correct the record by adding a dated, superseding entry,
  never by erasing one ([Directive #8](../kernel/laws/prime-directives.md)).
- **Directional.** Knowledge flows **down**; decisions of consequence flow **up**.
  The mechanics live in [architecture.md](architecture.md) and the kernel's
  [memory-flow protocol](../kernel/protocols/memory-flow.md).
- **Owned.** Every register names one accountable role. Shared ownership is no
  ownership.
- **Schema-true.** An entry that does not match the declared schema is rejected.

## The default registers
| Register | Holds | Direction |
|----------|-------|-----------|
| [roadmap](registers/roadmap.md) | What we intend to build and in what order. | down |
| [architecture-decisions](registers/architecture-decisions.md) | Binding technical choices and their rationale (ADRs). | up |
| [lessons-learned](registers/lessons-learned.md) | What experience taught us; reusable guidance. | down |
| [technical-debt](registers/technical-debt.md) | Deliberate shortcuts and their repayment terms. | up |
| [known-issues](registers/known-issues.md) | Open defects and their current workarounds. | down |
| [meeting-history](registers/meeting-history.md) | Council and decision-forum outcomes. | up |
| [future-improvements](registers/future-improvements.md) | Parked ideas not yet committed to the roadmap. | down |

## See also
- [architecture.md](architecture.md) — the four-level memory model.
- [memory-register contract](../kernel/contracts/memory-register.md) — the rules every register obeys.
- [memory-register template](../templates/memory-register.template.md) — the file shape to copy.
