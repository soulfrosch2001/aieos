# Memory
Status: stable
Type: protocol
Owner: Finance Orchestrator
Extends: stdlib memory

The institutional memory of the AI Finance Company — the append-mostly registers
that let the firm remember what it decided, what it risked, and what compliance
found. Memory is a **record of consequence**, not a database: if a fact does not
outlive the task that produced it, it does not belong here
([Directive #8](../../kernel/laws/prime-directives.md)).

This company is kernel-native — it **inherits all seven stdlib registers** rather
than forking them ([Directive #6](../../kernel/laws/prime-directives.md)): roadmap,
architecture-decisions, lessons-learned, technical-debt, known-issues,
meeting-history, future-improvements. On top of those it mounts three **local
registers that extend a stdlib register by name** and add the regulated-domain
columns the firm needs.

## How memory behaves
- **Append-mostly.** You correct the record by adding a dated, superseding entry,
  never by erasing one ([Directive #8](../../kernel/laws/prime-directives.md)).
- **Directional.** Knowledge flows **down**; decisions of consequence flow **up**.
  The mechanics live in [architecture.md](architecture.md) and the kernel's
  [memory-flow protocol](../../kernel/protocols/memory-flow.md).
- **Owned.** Every register names one accountable role.
- **Schema-true.** An entry that does not match the declared schema is rejected.

## Local registers (extend stdlib by name)
| Register | Extends (stdlib) | Holds | Owner |
|----------|------------------|-------|-------|
| [investment-decisions](registers/investment-decisions.md) | [architecture-decisions](../../memory/registers/architecture-decisions.md) | Binding investment decisions and their rationale. | Chief Investment Officer |
| [risk-register](registers/risk-register.md) | [known-issues](../../memory/registers/known-issues.md) | Open risks, exposures, and mitigations. | Risk Manager |
| [compliance-log](registers/compliance-log.md) | [lessons-learned](../../memory/registers/lessons-learned.md) | Compliance checks, findings, and remediations. | Chief Compliance Auditor |

## Inherited stdlib registers
The firm also inherits all seven defaults unchanged — see the stdlib
[memory index](../../memory/README.md). Local registers sit alongside them; a
company extends *by name* and never re-derives a schema it already has
([resolution-order](../../kernel/loader/resolution-order.md)).

## See also
- [architecture.md](architecture.md) — how the four memory levels flow here.
- [registers/](registers/) — the local register files.
- [memory-register contract](../../kernel/contracts/memory-register.md) — the rules every register obeys.
