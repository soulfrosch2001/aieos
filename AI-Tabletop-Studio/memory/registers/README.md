# Tabletop Studio — Memory Registers
Status: stable
Type: department
Owner: studio-orchestrator
Extends: none

The studio's local append-mostly registers. Each **extends** a stdlib register
schema by name ([resolution order](../../../kernel/loader/resolution-order.md)); the
studio also inherits all seven stdlib registers by reference.

| Register | Extends stdlib | Owner |
|----------|----------------|-------|
| [design-decisions.md](design-decisions.md) | [architecture-decisions](../../../memory/registers/architecture-decisions.md) | design-director |
| [balancing-history.md](balancing-history.md) | [technical-debt](../../../memory/registers/technical-debt.md) | balance-designer |
| [playtest-feedback.md](playtest-feedback.md) | [lessons-learned](../../../memory/registers/lessons-learned.md) | playtest-lead |

See [../architecture.md](../architecture.md) for how these feed the enterprise
memory hierarchy (decisions flow up, knowledge flows down).
