**ADR-0002: Unbounded memory logs become index + per-entry files**
**Date:** 2026-06-26 · **Status:** accepted · **Tier:** T2
**Deciders:** Architecture Council ([MTG-002](../minutes/MTG-002-framework-self-audit.md))

### Context
[Prime Directive #9](../../00-company/prime-directives.md) caps every file at 50 lines, but
append-only logs (the ADR log, council minutes) grow without bound. Discovered by operating
the framework on itself. The two constraints are irreconcilable in a single file.

### Decision
Any unbounded log becomes an **index file** (≤50 lines, newest rows at the bottom) that links
to **per-entry record files** in a sibling folder, each ≤50 lines:
- ADRs → `07-memory/adr/ADR-NNNN-slug.md`; index = [../architecture-decisions.md](../architecture-decisions.md).
- Minutes → `07-memory/minutes/MTG-NNN-slug.md`; index = [../meeting-history.md](../meeting-history.md).
Short tabular registers (technical-debt, known-issues, future-improvements) stay single files;
if one ever passes 50 lines, paginate it by year.

### Consequences
- **Positive:** memory scales forever under the cap; every decision is immutable and linkable.
- **Negative / accepted trade-offs:** two-step append (record + index row); more files.
- **Technical debt taken:** none new; closes the latent conflict.

### Alternatives Considered
Raise the 50-line cap — rejected, it is a Prime Directive. One monolithic log — rejected,
breaks the cap. Supersedes only the *log format* of [ADR-0001](ADR-0001-numbered-folder-memory.md).
