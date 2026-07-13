# Memory Registers — AI Legal Advisors
Status: stable
Type: memory-index
Owner: general-counsel
Extends: none

## What this folder is
The firm's three local memory registers. Each **extends a stdlib register by name**
([resolution-order](../../../kernel/loader/resolution-order.md)) and tightens its
discipline for legal liability. All are **append-mostly** — corrections are dated
entries that reference the prior row, never erasures
([Directive #8](../../../kernel/laws/prime-directives.md)).

## Registers
- [precedent.md](precedent.md) — binding legal positions and reasoning. Extends
  stdlib `architecture-decisions`. Owner:
  [general-counsel](../../01-executive/general-counsel/).
- [risk-register.md](risk-register.md) — conflicts, exposures, and regulatory
  risk. Extends stdlib `known-issues`. Owner:
  [chief-compliance-auditor](../../01-executive/chief-compliance-auditor/).
- [matter-log.md](matter-log.md) — matter outcomes and delivery lessons. Extends
  stdlib `lessons-learned`. Owner:
  [operations-partner](../../01-executive/operations-partner/).

## Who writes
Only the firm's [workflows](../../workflows/) write here, through their Memory
Updates step. The register owner signs every entry of consequence.

## Inherited
- [memory-flow](../../../kernel/protocols/memory-flow.md)
- Stdlib registers: [../../../memory/registers/](../../../memory/registers/)
- [Architecture](../architecture.md) — how these plug into the hierarchy.
