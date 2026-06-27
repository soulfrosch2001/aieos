# Registers
Status: stable
Type: register-index
Owner: chief-medical-officer
Extends: none

**Purpose:** The clinic's append-mostly memory registers. Each is one file holding
one kind of knowledge, extending a stdlib register of related name
([Directive #5](../../../kernel/laws/prime-directives.md),
[Directive #8](../../../kernel/laws/prime-directives.md)).

## The registers
| Register | Extends | Owner | Holds |
|----------|---------|-------|-------|
| [care-protocols](care-protocols.md) | architecture-decisions | chief-medical-officer | Care-process decisions of record. |
| [incident-register](incident-register.md) | known-issues | chief-compliance-auditor | Incidents and near-misses, regulated. |
| [care-lessons](care-lessons.md) | lessons-learned | care-coordinator | Coordination lessons fed back into the care path. |

## Discipline
- **Append-mostly** — correct by adding a dated entry, never by erasing
  ([Directive #7](../../../kernel/laws/prime-directives.md)).
- One concept per file; this folder carries this README
  ([Directive #8](../../../kernel/laws/prime-directives.md)).
- Flow follows [memory-flow](../../../kernel/protocols/memory-flow.md): knowledge down,
  decisions up. See [../architecture.md](../architecture.md).

## Who writes here
The clinic [workflows](../../workflows/README.md) are the writers; each register's
"Who updates this & when" names the trigger and the accountable owner.
