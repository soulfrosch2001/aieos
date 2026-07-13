# Memory
Status: stable
Type: memory-index
Owner: chief-medical-officer
Extends: none

**Purpose:** The clinic's institutional memory. It records the care-process
decisions that shape this company, the incidents and near-misses it must never
repeat, and the coordination lessons it learns. Memory is **append-mostly** —
corrected by adding a dated entry, never by erasing
([Directive #7](../../kernel/laws/prime-directives.md)).

## How memory flows
- **Knowledge flows down** from the enterprise into the clinic's registers.
- **Decisions of consequence flow up** to the Government.
See [architecture.md](architecture.md) and the kernel
[memory-flow protocol](../../kernel/protocols/memory-flow.md).

## Registers
The registers live in [registers/](registers/README.md). Each **extends** a stdlib
register of related name (resolution is local-by-name first, then stdlib, then
kernel — [resolution order](../../kernel/loader/resolution-order.md)).

| Register | Extends | Owner | Holds |
|----------|---------|-------|-------|
| [care-protocols](registers/care-protocols.md) | architecture-decisions | chief-medical-officer | Care-process decisions (this clinic's architecture). |
| [incident-register](registers/incident-register.md) | known-issues | chief-compliance-auditor | Incidents and near-misses, regulated. |
| [care-lessons](registers/care-lessons.md) | lessons-learned | care-coordinator | Coordination lessons that feed the care path. |

## Discipline
- One concept per register; every folder carries a README ([Directive #8](../../kernel/laws/prime-directives.md)).
- Workflows are the writers: see [../workflows/README.md](../workflows/README.md) for which workflow feeds which register.
- The chief-compliance-auditor audits memory hygiene as quality dimension #10.
