# Registers
Status: stable
Type: protocol
Owner: lab-orchestrator
Extends: none

The AI Research Lab's local memory registers. Each is one append-mostly file with a declared
schema and a single owner, built from
[../../../templates/memory-register.template.md](../../../templates/memory-register.template.md)
and bound by the [memory-register contract](../../../kernel/contracts/memory-register.md).
Every register here **extends a standard-library register by name** and adds only stricter
discipline — never a fork ([Directive #6](../../../kernel/laws/prime-directives.md),
[resolution-order](../../../kernel/loader/resolution-order.md)). The lab also inherits all
seven stdlib registers unchanged ([../../../memory/registers/](../../../memory/registers/)).

## Index
| Register | Extends (stdlib) | Holds | Direction | Owner |
|----------|------------------|-------|-----------|-------|
| [findings](findings.md) | [architecture-decisions](../../../memory/registers/architecture-decisions.md) | Established findings + the evidence behind them. | up | research-director |
| [experiment-log](experiment-log.md) | [lessons-learned](../../../memory/registers/lessons-learned.md) | Every experiment, its hypothesis, and outcome. | down | principal-investigator |
| [open-questions](open-questions.md) | [future-improvements](../../../memory/registers/future-improvements.md) | Unanswered questions worth pursuing. | down | lab-director |

See [../architecture.md](../architecture.md) for how these levels flow into one another.
