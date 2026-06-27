# Workflow: architecture-review

**Purpose:** Vet a strategic architecture change and record the decision as an ADR.
**Engagement Tier:** T3 (see [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md)).

## Trigger
A new service, architecture shift, or irreversible/security-sensitive change.

## Participants
[architecture-council](../06-councils/architecture-council/) leads; [software-architect](../02-engineering/software-architect/)
drives; [cto](../01-executive/cto/) signs off; security + performance engineers advise.

## Inputs
- Problem statement, options, and constraints.
- Affected systems + non-functional requirements.

## Steps
1. **Frame** — software-architect — options with trade-offs and a recommendation.
2. **Architecture council** — [architecture-council](../06-councils/architecture-council/) — debate, dissent, consensus.
3. **Executive sign-off** — [cto](../01-executive/cto/) — approve direction for irreversible scope.
4. **Author ADR** — architect — decision, context, consequences.
5. **Record** — architect — append to [architecture-decisions.md](../07-memory/architecture-decisions.md).

## Approval Gates
- **Gate 1 — Council consensus:** architecture-council approves with recorded dissent; deadlock escalates.
- **Gate 2 — CTO sign-off:** [cto](../01-executive/cto/) approves; without it, no irreversible build starts.

## Outputs
An ADR; updated architecture diagrams; downstream implementation plans.

## Completion Criteria
Decision chosen, dissent recorded, ADR appended to memory, build workflows unblocked.

## Memory Updates
[../07-memory/architecture-decisions.md](../07-memory/architecture-decisions.md) (new ADR); roadmap if scope shifts.

## Failure / Rollback
No consensus → defer with a spike. ADR later invalidated → supersede with a new ADR, never edit history.
