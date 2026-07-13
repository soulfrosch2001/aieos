# Memory Architecture
Status: stable
Type: memory-architecture
Owner: chief-medical-officer
Extends: none

**Purpose:** Explain how the AI Healthcare Clinic's memory plugs into the enterprise
memory hierarchy, and the discipline that keeps it trustworthy. This is the company
layer described by the kernel
[memory-flow protocol](../../kernel/protocols/memory-flow.md).

## Position in the hierarchy
```
Government memory            (enterprise decisions of record)
        ^   |
   up   |   |  down
        |   v
Clinic memory (this company)
  ├── care-protocols     extends architecture-decisions
  ├── incident-register  extends known-issues
  └── care-lessons       extends lessons-learned
        ^   |
   up   |   |  down
        |   v
Department & role notes    (02-intake, 03-care, 04-compliance)
```

## The two directions
- **Down — knowledge:** stdlib and Government context resolve into the clinic's
  registers by name first, then stdlib, then kernel
  ([resolution order](../../kernel/loader/resolution-order.md)). A register inherits
  its parent's schema and tightens it.
- **Up — decisions:** a decision of consequence (a care-process change, a serious
  incident, a structural lesson) flows up to the Government as it happens. Standing
  measures flow up separately on a cadence via
  [reporting](../../kernel/protocols/reporting.md) and
  [reports/](../reports/README.md).

## Register inheritance
| Clinic register | Parent (stdlib) | What the clinic adds |
|-----------------|-----------------|----------------------|
| [care-protocols](registers/care-protocols.md) | architecture-decisions | Care paths as the clinic's architecture of record. |
| [incident-register](registers/incident-register.md) | known-issues | Regulated incident/near-miss ledger with closure tracking. |
| [care-lessons](registers/care-lessons.md) | lessons-learned | Coordination lessons routed back into the care path. |

## Append-mostly discipline
- Every entry is dated; corrections are **new dated entries**, never edits
  ([Directive #7](../../kernel/laws/prime-directives.md)).
- The writing workflow is named in each register's "Who updates this & when".
- Memory hygiene (dimension #10) is audited against
  [../../shared/quality-standards.md](../../shared/quality-standards.md).

## See also
- [README.md](README.md) — the register index.
- [registers/](registers/README.md) — the registers themselves.
