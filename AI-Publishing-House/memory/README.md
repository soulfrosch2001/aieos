# Memory
Status: stable
Type: protocol
Owner: house-orchestrator
Extends: none

The institutional memory of AI Publishing House — the append-mostly registers that
let the house remember what it acquired, what its editors learned, and what it owes
its schedule. Memory is a **record of consequence**, not a database: if a fact does
not outlive the task that produced it, it does not belong here
([Directive #8](../../kernel/laws/prime-directives.md)).

## Inherited and local registers
The house **inherits all seven stdlib registers** unchanged
([Directive #6](../../kernel/laws/prime-directives.md)) and extends three of them
**by name**, adding strictness only
([resolution order](../../kernel/loader/resolution-order.md)). The local registers
do not fork their parents' schemas — they mount them and specialize.

### Inherited stdlib registers (source of truth)
[roadmap](../../memory/registers/roadmap.md),
[architecture-decisions](../../memory/registers/architecture-decisions.md),
[lessons-learned](../../memory/registers/lessons-learned.md),
[technical-debt](../../memory/registers/technical-debt.md),
[known-issues](../../memory/registers/known-issues.md),
[meeting-history](../../memory/registers/meeting-history.md),
[future-improvements](../../memory/registers/future-improvements.md).

### Local registers (extend a stdlib register by name)
| Register | Extends stdlib | Holds | Owner |
|----------|----------------|-------|-------|
| [catalog-decisions](registers/catalog-decisions.md) | [architecture-decisions](../../memory/registers/architecture-decisions.md) | What was acquired/published and why. | ceo |
| [editorial-standards](registers/editorial-standards.md) | [lessons-learned](../../memory/registers/lessons-learned.md) | House style and editorial lessons. | editorial-director |
| [rights-and-sales](registers/rights-and-sales.md) | [roadmap](../../memory/registers/roadmap.md) | Rights, schedule, and sales tracking. | production-director |

## How memory behaves
- **Append-mostly.** Correct by adding a dated, superseding entry; never erase one
  ([Directive #8](../../kernel/laws/prime-directives.md)).
- **Directional.** Knowledge flows **down**; decisions of consequence flow **up**.
  See [architecture.md](architecture.md) and the kernel's
  [memory-flow protocol](../../kernel/protocols/memory-flow.md).
- **Owned.** Every register names one accountable role. Shared ownership is none.
- **Schema-true.** An entry that does not match the declared schema is rejected.

## See also
- [architecture.md](architecture.md) — how the house plugs into the four-level model.
- [registers/](registers/) — the local register files.
- [../../templates/memory-register.template.md](../../templates/memory-register.template.md) — the file shape.
