<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Findings
Status: stable
Type: memory-register
Owner: research-director
Extends: architecture-decisions

**Purpose:** the lab's ledger of established findings — results that survived
[peer-review](../../workflows/peer-review.md) and now bind what the lab believes — together
with the evidence behind each one.
**Discipline:** append-mostly — a finding is never edited; it is **corrected or retracted**
by a new dated entry that supersedes it and back-links the original, so the full reasoning
chain stays auditable.

This register extends the stdlib
[architecture-decisions](../../../memory/registers/architecture-decisions.md): a finding is
the scientific analogue of an ADR — a binding commitment with recorded justification — and it
adds the stricter requirement that every entry cite **reproduced** evidence, not merely a
rationale.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Finding | Stable id, e.g. `FIND-014`. |
| Claim | The established result, stated as a commitment. |
| Evidence | The experiment(s) and the cleared, reproduced data behind it. |
| Strength | `strong` · `tentative` · `contested` — how much weight the evidence bears. |
| Status | `established` · `superseded` · `retracted`. |
| Supersedes | Finding id this replaces, or `—`. |

## Example entry
| 2026-06-26 | FIND-014 | Treatment X raises assay yield ~18% vs control (p<.01, replicated) | EXP-031 + independent replication EXP-034; analysis reproduced from raw data | strong | established | — |

## Who updates this & when
The research-director appends after [peer-review](../../workflows/peer-review.md) clears a
result (Gate B) and again when [publication](../../workflows/publication.md) links the public
artifact. A correction or retraction is an appended entry that supersedes the original; the
original is never erased ([Directive #8](../../../kernel/laws/prime-directives.md)). Scientists
cite the finding id rather than re-arguing settled ground.

## Flow
- Knowledge flows **down** from [architecture-decisions](../../../memory/registers/architecture-decisions.md) to this register and on to the departments.
- Decisions of consequence flow **up**: a finding that binds beyond one study is promoted to the Company ledger, and a cross-company precedent to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
