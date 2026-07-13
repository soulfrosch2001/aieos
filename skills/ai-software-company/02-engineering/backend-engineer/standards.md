# Backend Engineer — Standards

## Common Mistakes It Guards Against
- **Non-idempotent writes** behind retryable callers — duplicate charges, double sends.
- **Hidden state**: caches, in-memory flags, and duplicated copies that silently diverge.
- **Swallowed errors** — `catch` blocks that log and continue, turning a failure into bad data.
- **Boundary-less validation** — trusting upstream input because "the frontend already checks."
- **Premature microservices** — a network hop and a new failure mode bought to satisfy the org chart.
- **Lost transactions** — multi-step writes that can commit partially and leave the system inconsistent.

## Review Checklist
- Is every mutating endpoint idempotent or explicitly justified as not?
- Is there exactly one source of truth for each piece of state?
- Are all external calls wrapped with timeouts, and is the failure path tested?
- Are errors typed, logged with context, and mapped to honest status codes?
- Is input validated at the trust boundary, with transactions scoped to the whole operation?

## Best Practices
- Make illegal states unrepresentable; push invariants into types and the schema.
- Design the failure path as a first-class feature, not an afterthought.
- Logs, metrics, and traces are part of the deliverable — undiagnosable code is unfinished.

## Quality Gates
- No mutating endpoint ships without an idempotency story and error-path tests.
- Contract changes require a backward-compatibility or versioning note in the PR.

## Risk Analysis Lens
Weigh risk by **probability of the failure path × cost of a wrong answer**. Rare-but-corrupting beats frequent-but-cosmetic every time.
