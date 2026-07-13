<!-- Report / Minutes. Built from ../../templates/report.template.md -->

# AI Research Lab — Health Report
Type: report
Date: 2026-06-26
Author: lab-orchestrator
Tier: T2

## Summary
This quarter the lab measured its scientific health against the ten quality dimensions in
[../../shared/quality-standards.md](../../shared/quality-standards.md). Pre-registration and
contract conformance are green; the watch item is **replication coverage** — too many cleared
results carry only a single run. No finding was published without passing
[peer-review](../workflows/peer-review.md).

## Consensus
The lab agreed that kernel-native inheritance is holding: every workflow extends a stdlib
procedure by name, every local register extends a stdlib schema, and Gate B rigor clearance ran
on 100% of results that reached [publication](../workflows/publication.md).

## KPIs vs the ten quality dimensions
| KPI | Reads dimension | Green | This quarter | Status |
|-----|-----------------|-------|--------------|--------|
| Evidence traceability — % of published claims traceable to a cleared finding | 1 Correctness | ≥ 95% | 98% | Green |
| Manuscript clarity — % of write-ups a non-author reviewer cleared without rework | 2 Clarity | ≥ 90% | 89% | Amber |
| Stdlib reuse — % of local workflows/registers extending by name (no fork) | 4 Reusability | 100% | 100% | Green |
| Contract conformance — % of files passing the conformance checker | 5 Consistency | 100% | 100% | Green |
| Ethics-clearance coverage — % of publications with an ethics sign-off | 6 Security (fail-safe) | 100% | 100% | Green |
| Study cycle time — median days from frame to peer-review Gate B | 7 Performance | ≤ 45 | 41 | Green |
| Pre-registration coverage — % of experiments registered before data collection | 8 Testability | 100% | 100% | Green |
| Replication coverage — % of findings independently reproduced before publishing | 8 Testability | ≥ 90% | 72% | Red |
| Register hygiene — % of cleared results appended to [findings](../memory/registers/findings.md) | 10 Memory hygiene | 100% | 100% | Green |

## Remaining concerns / dissent
The [research-director](../01-executive/research-director/) flags the red replication-coverage
number as a methodology gap and signals intent to use the scientific-rigor veto on any result
that reaches [peer-review](../workflows/peer-review.md) without an independent replication. The
[replication-specialist](../03-analysis/replication-specialist/) notes a standing tension with
the [principal-investigator](../02-research/principal-investigator/), who favors publishing a
strong single-run result quickly to claim priority — a recurring pull between speed and certainty
that the lab resolves on the side of certainty.

## Risks
- **Irreproducibility (high):** single-run findings that later fail to replicate erode the
  lab's credibility and waste downstream work.
- **Clarity drift (low):** manuscripts needing rework slow publication but do not affect
  correctness.

## Alternatives considered
- Lowering the replication target to match current practice — rejected: it would loosen a
  quality standard, which [resolution-order](../../kernel/loader/resolution-order.md) forbids
  (companies add strictness only).
- Publishing single-run results with a "preliminary" label — rejected: a labeled-preliminary
  result is still a published claim and carries the same reproducibility duty.

## Recommendation
Make an independent replication a hard Gate B blocker in
[peer-review](../workflows/peer-review.md), and carry the replication backlog as an open line in
[open-questions](../memory/registers/open-questions.md) until coverage reaches the green band.

## Implementation plan
Two disjoint tracks, parallelizable per the
[fan-out](../../kernel/protocols/orchestration.md): (1) research-director makes replication a
Gate B blocker in peer-review; (2) replication-specialist schedules re-runs of the
single-run findings from this quarter. Both land before next quarter's report.

## Owners & next steps
| Owner | Action | By when |
|-------|--------|---------|
| Research Director | Add independent replication as a Gate B blocker in peer-review | 2026-07-10 |
| Replication Specialist | Schedule re-runs of single-run findings; report coverage | 2026-07-20 |
| Chief Auditor | Confirm both controls in the next conformance pass | 2026-07-25 |

## Memory updates
- [findings](../memory/registers/findings.md) — the methodology change requiring replication before a finding is established, dated.
- [experiment-log](../memory/registers/experiment-log.md) — the replication backlog and the re-run outcomes as they land.
- [open-questions](../memory/registers/open-questions.md) — replication coverage tracked as an open line until it reaches green.
