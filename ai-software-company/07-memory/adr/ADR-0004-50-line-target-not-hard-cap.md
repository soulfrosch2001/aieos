**ADR-0004: The 50-line limit is a default target, not a hard cap**
**Date:** 2026-06-26 · **Status:** accepted · **Tier:** T2
**Deciders:** Human owner (mandate) + CTO

### Context
The 50-line rule was originally absolute (Prime Directive #9). The owner clarified that
files which genuinely need more than 50 lines may exceed it. Forcing every file under 50
lines can fragment indivisible content (a single table, code block, or record) and hurt
clarity more than it helps.

### Decision
Treat **≤50 lines as the strong default**, not an absolute limit. A file may exceed it
**only when splitting would genuinely harm clarity** — and that is a deliberate, visible
choice, not accidental drift. Updated the canonical sources: prime-directives #9,
[conventions.md](../../00-company/conventions.md), file-structure, governance, CLAUDE.md,
and both READMEs.

### Consequences
- **Positive:** no artificial fragmentation; indivisible content stays whole.
- **Negative / accepted trade-offs:** "genuinely" is a judgment call — guard against it
  becoming an excuse for sprawl; the Chief Auditor flags files that grew without need.
- **Note:** [ADR-0002](ADR-0002-logs-as-index-and-entries.md)'s index+entry split for
  append-only logs still stands as good practice — it is not reversed by this ADR.

### Alternatives Considered
Keep it absolute (rejected — owner mandate; harms indivisible content). Drop the target
entirely (rejected — modularity is the point; the default must stay 50).
