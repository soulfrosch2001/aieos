# Registers
Status: stable
Type: protocol
Owner: house-orchestrator
Extends: none

The house's local memory registers. Each is one append-mostly file with a declared
schema and a single owner, built from
[../../../templates/memory-register.template.md](../../../templates/memory-register.template.md)
and bound by the [memory-register contract](../../../kernel/contracts/memory-register.md).
Each **extends a stdlib register by name** and adds strictness only
([Directive #6](../../../kernel/laws/prime-directives.md)); the house also inherits
all seven stdlib registers unchanged (see [../README.md](../README.md)).

## Index
| Register | Extends stdlib | Holds | Direction | Owner |
|----------|----------------|-------|-----------|-------|
| [catalog-decisions](catalog-decisions.md) | [architecture-decisions](../../../memory/registers/architecture-decisions.md) | What was acquired/published and why. | up | ceo |
| [editorial-standards](editorial-standards.md) | [lessons-learned](../../../memory/registers/lessons-learned.md) | House style and editorial lessons. | down | editorial-director |
| [rights-and-sales](rights-and-sales.md) | [roadmap](../../../memory/registers/roadmap.md) | Rights, schedule, and sales tracking. | down | production-director |

See [../architecture.md](../architecture.md) for how these flow into the enterprise
memory hierarchy.
