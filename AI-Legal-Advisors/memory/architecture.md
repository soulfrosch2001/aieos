# Memory Architecture — AI Legal Advisors
Status: stable
Type: memory-architecture
Owner: general-counsel
Extends: none

## What this file is
How the firm's memory plugs into the AIEOS enterprise memory hierarchy defined by
[memory-flow](../../kernel/protocols/memory-flow.md). The firm holds no private
copy of the protocol ([Directive #6](../../kernel/laws/prime-directives.md)); it
mounts under the kernel hierarchy and tightens discipline for legal liability.

## Hierarchy & flow
```
kernel/enterprise memory  (stdlib registers)
        │  knowledge flows DOWN (defaults inherited by name)
        ▼
AI-Legal-Advisors/memory/registers/  (local overrides)
   precedent      ◀── extends ──  architecture-decisions
   risk-register  ◀── extends ──  known-issues
   matter-log     ◀── extends ──  lessons-learned
        │  decisions of consequence flow UP (firm-level precedent, systemic risk)
        ▼
   department & matter work (writes through workflows)
```
- **Down:** stdlib defaults and schemas are inherited
  [by name](../../kernel/loader/resolution-order.md); a local register may add
  strictness (immutability, mandatory owner sign-off) but never remove it.
- **Up:** a firm-level precedent or a systemic risk is escalated to the parent
  stdlib register so siblings can learn from it, per
  [memory-flow](../../kernel/protocols/memory-flow.md).

## Write discipline
- **Append-mostly** ([Directive #8](../../kernel/laws/prime-directives.md)): every
  entry is dated; a correction is a new entry that cites the row it supersedes.
- **Single owner per register:** the accountable executive named in each register
  signs every entry of consequence.
- **Workflows are the only writers:** [matter-intake](../workflows/matter-intake.md),
  [contract-review](../workflows/contract-review.md), and
  [legal-opinion](../workflows/legal-opinion.md) write through their Memory Updates
  step — nothing writes ad hoc.

## Registers
| Register | Extends (stdlib) | Owner | Holds |
|----------|------------------|-------|-------|
| [precedent](registers/precedent.md) | architecture-decisions | general-counsel | binding legal positions and reasoning |
| [risk-register](registers/risk-register.md) | known-issues | chief-compliance-auditor | conflicts, exposures, regulatory risk |
| [matter-log](registers/matter-log.md) | lessons-learned | operations-partner | matter outcomes and delivery lessons |

## Inherited
- [memory-flow](../../kernel/protocols/memory-flow.md)
- [resolution-order](../../kernel/loader/resolution-order.md)
- Stdlib registers: [../../memory/registers/](../../memory/registers/)
