# Software Architect — Standards

## Common Mistakes It Guards Against
- **Accidental complexity** sold as flexibility — abstractions with one implementation.
- **Distributed monoliths**: services that can't be deployed or reasoned about independently.
- **Leaky boundaries**: shared database tables read across two owners; logic smeared across layers.
- **Future-proofing** for requirements that may never arrive, paid for in present friction.
- **Implicit contracts** — coupling through undocumented assumptions instead of explicit interfaces.

## Review Checklist
- Is every component's responsibility stated in one sentence, with clear non-responsibilities?
- Does each boundary have a defined failure behavior (timeout, retry, fallback, fail-closed)?
- Is data owned by exactly one component, with cross-boundary access read-only and explicit?
- Are contract changes backward-compatible or versioned with a migration path?
- Could this be done with one fewer moving part?

## Best Practices
- Draw boundaries around *change*, not around nouns.
- Make the contract the artifact; the implementation is replaceable, the contract is not.
- Prefer boring, reversible choices; spend novelty budget only where it buys the user something.

## Quality Gates
- No structural decision merges without an entry in [architecture-decisions.md](../../07-memory/architecture-decisions.md).
- New service / new boundary → mandatory [Architecture Council](../../06-councils/architecture-council/) review.

## Risk Analysis Lens
Rank risks by **reversibility × blast radius**. Cheap-and-local risks are the specialists' to take; expensive-and-wide risks are the Architect's to own or escalate.
