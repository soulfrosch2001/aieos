# Councils

Status: stable
Type: council-index
Owner: dean
Extends: none

## Purpose

Councils are the academy's deliberation bodies. They are convened, never standing: they assemble at a tier trigger, decide within their scope, record dissent, and append minutes to memory. They do not own work between sessions — the owning roles do. Councils exist to make consequential, cross-cutting decisions defensible.

## Councils

- [curriculum-council](curriculum-council/) — approves curriculum and learning-design decisions. Chair: [academic-director](../01-executive/academic-director/). Extends stdlib [architecture-council](../../councils/architecture-council/).
- [assessment-council](assessment-council/) — approves assessments and outcome alignment. Chair: [assessment-designer](../02-curriculum/assessment-designer/). Extends stdlib [feature-council](../../councils/feature-council/).

## Inherits

- [Engagement tiers](../../kernel/laws/engagement-tiers.md) T0–T4 set when a council is convened.
- [Decision authority](../../kernel/laws/decision-authority.md) bounds what each council may approve alone.
- [Prime Directives](../../kernel/laws/prime-directives.md) #2, #4, #5, #6, #8.
- [Escalation protocol](../../kernel/protocols/escalation.md) governs deadlocks.

## How to use

- Size the decision against the tiers; convene only at the triggering tier.
- The chair breaks deadlocks; dissent is recorded, never suppressed.
- Minutes append to [meeting-history](../../memory/registers/meeting-history.md) plus the council's domain register.
