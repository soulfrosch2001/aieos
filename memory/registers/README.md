# Registers
Status: stable
Type: protocol
Owner: Supreme Orchestrator
Extends: none

The default memory registers every AIEOS company inherits. Each is one
append-mostly file with a declared schema and a single owner, built from
[../../templates/memory-register.template.md](../../templates/memory-register.template.md)
and bound by the [memory-register contract](../../kernel/contracts/memory-register.md).
A company extends any of these **by name** and may add its own alongside them
([Directive #6](../../kernel/laws/prime-directives.md)).

## Index
| Register | Holds | Direction | Owner |
|----------|-------|-----------|-------|
| [roadmap](roadmap.md) | Intended work, sequenced. | down | Company Orchestrator |
| [architecture-decisions](architecture-decisions.md) | Binding technical choices (ADRs). | up | Chief Architect |
| [lessons-learned](lessons-learned.md) | Reusable guidance from experience. | down | Company Orchestrator |
| [technical-debt](technical-debt.md) | Deliberate shortcuts + repayment terms. | up | Chief Architect |
| [known-issues](known-issues.md) | Open defects + current workarounds. | down | QA Lead |
| [meeting-history](meeting-history.md) | Council and forum outcomes. | up | Company Orchestrator |
| [future-improvements](future-improvements.md) | Parked ideas, not yet committed. | down | Company Orchestrator |

See [../architecture.md](../architecture.md) for how these levels flow into one another.
