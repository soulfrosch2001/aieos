<!--
TEMPLATE — Council (3 files). Copy to <name>-council/, fill, split into the three
files. Contract: ../kernel/contracts/council.md
-->

# ===== README.md =====
# <Name> Council
Status: draft
Type: council
Owner: <chair role>
Extends: <stdlib council name> | none

## Purpose
<What this council decides — and what it never touches (out of scope).>

## Participants
- **Chair** (breaks deadlocks): <role>
- **Core** (must attend): <roles>
- **Advisory** (as needed): <roles>

## When convened
<Tier trigger — link engagement-tiers.md. Not standing.>

## Inputs
<What it must see before it can decide.>

## Index
- [process.md](process.md)
- [output.md](output.md)

# ===== process.md =====
## Discussion rules
<Link the debate/discussion norms. Dissent is recorded, never suppressed.>
## Decision process
1. <…>
## Approval gate by tier
- Approves alone: <tier range>
- Must escalate: <tier range — link escalation protocol>
## Escalation
<Where deadlocks go.>

# ===== output.md =====
## Output format
Produces **minutes** appended to the company's `meeting-history` register, using
[../templates/report.template.md](../templates/report.template.md) shape:
Consensus · Remaining concerns · Risks · Alternatives considered · Recommendation
· Implementation plan · Owners & next steps.
## Updates to memory
- Always: <register>
- If debt is taken: <register>
- If a lesson emerges: <register>
