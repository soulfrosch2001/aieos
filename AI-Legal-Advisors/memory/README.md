# Memory — AI Legal Advisors
Status: stable
Type: memory-index
Owner: general-counsel
Extends: none

## What this folder is
The firm's institutional memory. Legal work is only as defensible as its record,
so memory here is **append-mostly**: corrections are new dated entries that
reference the prior one, never erasures
([Directive #8](../../kernel/laws/prime-directives.md)). This is the audit trail a
court or regulator could rely on.

## Contents
- [architecture.md](architecture.md) — how the firm's memory plugs into the
  enterprise memory hierarchy ([memory-flow](../../kernel/protocols/memory-flow.md)).
- [registers/](registers/) — the three local registers, each extending a stdlib
  default by name.

## Registers
- [registers/precedent.md](registers/precedent.md) — extends stdlib
  `architecture-decisions`; owner [general-counsel](../01-executive/general-counsel/).
- [registers/risk-register.md](registers/risk-register.md) — extends stdlib
  `known-issues`; owner [chief-compliance-auditor](../01-executive/chief-compliance-auditor/).
- [registers/matter-log.md](registers/matter-log.md) — extends stdlib
  `lessons-learned`; owner [operations-partner](../01-executive/operations-partner/).

## Inherited
- Memory protocol: [../../kernel/protocols/memory-flow.md](../../kernel/protocols/memory-flow.md)
- Stdlib registers: [../../memory/registers/](../../memory/registers/)
- Append-mostly law: [Directive #8](../../kernel/laws/prime-directives.md)
