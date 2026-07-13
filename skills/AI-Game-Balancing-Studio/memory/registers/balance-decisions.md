<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Balance Decisions
Status: stable
Type: memory-register
Owner: balance-director
Extends: architecture-decisions

**Purpose:** the studio's ledger of binding tuning decisions — the numbers changed,
the model that justified each change, and the before/after it commits to. Every tune
that reaches a patch lives here so a later analyst can reconstruct why a value is what
it is.
**Discipline:** append-mostly — a balance decision is never edited; it is **reversed**
by a new entry that supersedes it and back-links the original, so the full reasoning
chain stays auditable, exactly as an ADR is in the
[architecture-decisions](../../../memory/registers/architecture-decisions.md) register
this one extends.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When decided (YYYY-MM-DD). |
| Decision | Stable id, e.g. `BD-014`. |
| System | Surface and title it tunes: economy / progression / competitive. |
| Change | What number or rule moved, from → to. |
| Hypothesis | The before/after effect expected, with success metric. |
| Evidence | The data or model that backs it (telemetry, playtest, history id). |
| Status | `proposed` · `shipped` · `superseded` · `rolled-back`. |
| Supersedes | Decision id this replaces, or `—`. |

## Example entry
| 2026-06-26 | BD-014 | economy / client-A | Daily login reward 500 → 300 gold | Curbs gold inflation; target 10% drop in median wallet over two weeks | telemetry BH-007 shows wallets 2.4x design target | shipped | — |

## Who updates this & when
The balance-director appends (or signs the orchestrator's append) after any
[balance-pass](../../workflows/balance-pass.md) commits a change and after every
[patch-balancing](../../workflows/patch-balancing.md) ship, and records a superseding
entry whenever [playtest-analysis](../../workflows/playtest-analysis.md) refutes a prior
decision or a shipped tune is rolled back (Directive
[#3](../../../kernel/laws/prime-directives.md)). Tuners cite the decision id rather than
re-arguing a settled change.

## Flow
- Knowledge flows **down** from
  [architecture-decisions](../../../memory/registers/architecture-decisions.md) — the
  ADR discipline of reverse-don't-edit and cite-don't-re-argue.
- Decisions of consequence flow **up**: a methodology precedent that binds across titles
  is promoted to an enterprise decision.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
