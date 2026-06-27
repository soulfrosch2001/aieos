<!-- TEMPLATE — Workflow (1 file). Contract: ../kernel/contracts/workflow.md -->

# Workflow: <name>
Status: draft
**Purpose:** <one sentence>
**Default Tier:** T<0–4>  ·  **Owner:** <role>
**Extends:** <stdlib workflow name> | none

## Trigger
<What starts this workflow.>

## Participants
- <role> — <function>

## Inputs
<What must exist before it starts.>

## Steps
```
<ASCII flow with [GATE: criterion] markers>
```
1. <step> — <role> — <action>
2. …
N. **Record** — update the memory registers below.

## Review Gates
- **Gate A — <criterion>:** <blocking condition>
- **Gate B — <criterion>:** <blocking condition>

## Approval Process
<Who signs off, per tier — link decision-authority.md.>

## Outputs
<Artifacts produced.>

## Completion Criteria
- [ ] <definition of done>

## Memory Updates
- [<register>](…) — <what gets recorded>

## Failure / Rollback
<What happens if a gate fails or the work must be undone.>
