# Registers
Status: stable
Type: protocol
Owner: agency-orchestrator
Extends: none

The AI Marketing Agency's **local memory registers**. Each is one append-mostly
file with a declared schema and a single owner, built from
[../../../templates/memory-register.template.md](../../../templates/memory-register.template.md)
and bound by the
[memory-register contract](../../../kernel/contracts/memory-register.md). Every
register here **extends a stdlib register by name** and adds only stricter,
marketing-specific structure (Directive
[#6](../../../kernel/laws/prime-directives.md); loader
[resolution-order](../../../kernel/loader/resolution-order.md)).

These sit **alongside** the seven inherited stdlib registers — see
[../README.md](../README.md) for the full picture and
[../architecture.md](../architecture.md) for how the levels flow into one another.

## Index
| Register | Extends (stdlib) | Holds | Direction | Owner |
|----------|------------------|-------|-----------|-------|
| [brand-decisions](brand-decisions.md) | [architecture-decisions](../../../memory/registers/architecture-decisions.md) | Binding brand and positioning choices. | up | strategy-director |
| [campaign-results](campaign-results.md) | [lessons-learned](../../../memory/registers/lessons-learned.md) | What each campaign did and what it taught. | down | performance-marketer |
| [audience-insights](audience-insights.md) | [future-improvements](../../../memory/registers/future-improvements.md) | Parked audience findings and hypotheses. | down | market-researcher |
