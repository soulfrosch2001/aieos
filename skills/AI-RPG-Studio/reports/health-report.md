<!-- Report / Minutes. Template: ../../templates/report.template.md -->

# AI RPG Studio — Health Report
Type: report
Date: 2026-06-26
Author: chief-auditor
Tier: T2

## Summary
A baseline read of studio health: the three production
[workflows](../workflows/), three [memory registers](../memory/registers/), and two
[councils](../councils/) are in place and conform. The studio is structurally sound;
the live risk is canon drift as more lines ship in parallel, which the metrics below
are designed to catch early.

## Consensus
The studio's domain KPIs map cleanly onto the ten quality dimensions, and every
shipping path runs through a two-gate workflow that writes memory as part of "done."
The leads agree the gates are real and that
[canon](../memory/registers/canon.md) is the load-bearing register.

## Domain KPIs vs the ten quality dimensions
| # | Dimension | Studio KPI | Target | How measured |
|---|-----------|-----------|--------|--------------|
| 1 | Correctness | Canon contradictions found in play | 0 per release | [canon](../memory/registers/canon.md) retcon entries per ship |
| 2 | Clarity | Modules a new GM can run unaided | 100% | First-read run-through with no author present |
| 3 | Modularity | Modules that run drop-in, no parent campaign | 100% | [adventure-module](../workflows/adventure-module.md) Gate B check |
| 4 | Reusability | Local entities extending a stdlib parent | 100% | `Extends:` set on every workflow, council, register |
| 5 | Consistency | Files passing the conformance checker | 100% | `npm test` (8 rules) |
| 6 | Security | Spoiler/secret leaks into player-facing text | 0 | GM-only content segregation review |
| 7 | Performance | Module delivered within its page/word budget | 100% | [line-producer](../01-executive/line-producer/) budget at integration |
| 8 | Testability | Rules changes backed by a playtest verdict | 100% | [playtest](../workflows/playtest.md) Gate B evidence |
| 9 | Documentation | Entities with README + cross-links + rationale | 100% | README presence + link audit |
| 10 | Memory hygiene | Runs that appended their registers | 100% | Workflow "Record" step completion |

## Remaining concerns / dissent
The [lore-master](../02-worldbuilding/lore-master/) flags that canon-correctness (KPI 1)
is lagging-indicator only — it counts contradictions *after* they ship. The
[balance-designer](../03-systems/balance-designer/) wants encounter difficulty variance
tracked, not just pass/fail, arguing a "balanced average" can hide swingy fights. Both
concerns are recorded, not resolved.

## Risks
- **Canon drift (high).** Parallel lines multiply contradiction surface faster than the
  [lore-council](../councils/lore-council/) can review. Mitigated by mandatory canon
  citation at Gate A.
- **Budget creep (medium).** T2 modules tempt scope growth; the line-producer's
  integration check is the only brake.
- **Stale memory (low).** A skipped "Record" step silently rots the registers; caught
  by the KPI 10 audit.

## Alternatives considered
Tracking velocity (modules/quarter) as a headline KPI — rejected: it rewards shipping
over coherence, the opposite of the studio's north star. A single composite "quality
score" — rejected: it hides which of the ten dimensions is failing.

## Recommendation
Adopt the table above as the studio's standing scorecard. Add a leading-indicator for
KPI 1 (canon citations present at Gate A) next cycle to address the lore-master's
concern, and add difficulty variance to [encounter-log](../memory/registers/encounter-log.md)
to address the balance-designer's.

## Implementation plan
Two parallel, non-overlapping tracks, honouring the fan-out:
- Track A — chief-auditor wires the KPI checks into the existing Gate B audit.
- Track B — balance-designer extends the encounter-log schema with a variance column.

## Owners & next steps
| Owner | Action | By when |
|-------|--------|---------|
| chief-auditor | Add Gate-A canon-citation check to the audit | 2026-07-10 |
| balance-designer | Add difficulty-variance column to encounter-log | 2026-07-10 |
| rpg-orchestrator | Schedule next health report after the first multi-line release | 2026-08-01 |

## Memory updates
- [encounter-log](../memory/registers/encounter-log.md) — schema gains a difficulty-variance column.
- [campaign-ideas](../memory/registers/campaign-ideas.md) — no change this cycle.
