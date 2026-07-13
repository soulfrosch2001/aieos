# Registers
Status: stable
Type: protocol
Owner: Finance Orchestrator
Extends: stdlib registers

The AI Finance Company's local memory registers. Each is one append-mostly file
with a declared schema and a single owner, built from
[../../../templates/memory-register.template.md](../../../templates/memory-register.template.md)
and bound by the
[memory-register contract](../../../kernel/contracts/memory-register.md). Each
**extends a stdlib register by name** and adds regulated-domain columns — it never
forks the schema ([Directive #6](../../../kernel/laws/prime-directives.md),
[resolution-order](../../../kernel/loader/resolution-order.md)). The firm also
inherits all seven stdlib defaults unchanged — see
[../../../memory/registers/](../../../memory/registers/).

## Index
| Register | Extends (stdlib) | Holds | Direction | Owner |
|----------|------------------|-------|-----------|-------|
| [investment-decisions](investment-decisions.md) | [architecture-decisions](../../../memory/registers/architecture-decisions.md) | Binding investment decisions and their rationale. | up | Chief Investment Officer |
| [risk-register](risk-register.md) | [known-issues](../../../memory/registers/known-issues.md) | Open risks, exposures, and mitigations. | up | Risk Manager |
| [compliance-log](compliance-log.md) | [lessons-learned](../../../memory/registers/lessons-learned.md) | Compliance checks, findings, and remediations. | down | Chief Compliance Auditor |

See [../architecture.md](../architecture.md) for how these levels flow into one another.
