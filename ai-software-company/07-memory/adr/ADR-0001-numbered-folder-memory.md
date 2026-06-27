**ADR-0001: Adopt numbered-folder Corporate Memory**
**Date:** 2026-06-26 · **Status:** accepted
**Deciders:** product-manager-02, CTO · **Tier:** T2

### Context
The company needs a single, append-mostly long-term memory under `07-memory/`.

### Decision
Maintain nine memory registers plus a README index, each file ≤50 lines.

### Consequences
- **Positive:** durable institutional memory; clear ownership.
- **Negative / accepted trade-offs:** discipline required to append, not rewrite.
- **Technical debt taken:** see [../technical-debt.md](../technical-debt.md) TD-001.

### Alternatives Considered
Single monolithic memory file — rejected: breaks the 50-line rule.

> Note: the *format* of unbounded logs (ADR log, minutes) was later refined by
> [ADR-0002](ADR-0002-logs-as-index-and-entries.md). The register set here stands.
> Migrated verbatim from the original `architecture-decisions.md`.
