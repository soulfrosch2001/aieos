# performance-reports.md — Performance Reports Register

> Corporate Memory register of measured runtime performance over time: frame time, memory,
> load times, draw calls, and pass/fail against platform budgets. Performance is a
> **feature with a budget**, and this is its ledger. Append-only — every report is a dated
> snapshot; we track trend, not just the latest number.

## Purpose
Catch regressions early and prove we hit cert. A single FPS number is gossip; a dated
series against a budget is engineering. Feeds the
[performance-council](../08-councils/performance-council/) and the
[optimization-engineer](../03-programming/optimization-engineer/), and gates console
[release-candidate](../09-workflows/release-candidate.md) sign-off. Engine-agnostic
metrics; per-platform budgets noted explicitly.

## Schema / Columns
| Column | Meaning |
|--------|---------|
| `ID` | `PR-NNN`, sequential |
| `Date` | ISO date of capture |
| `Build` | Version measured |
| `Platform` | PC-min / PC-rec / Series S / PS5 / Switch / etc. |
| `Scene` | Benchmark scene or worst-case area |
| `Frame Time` | avg / 1%-low ms (and FPS) |
| `Memory` | Peak RAM / VRAM |
| `Budget Met?` | `pass \| fail (metric)` |
| `Owner` | Usually [performance-tester](../07-qa/performance-tester/) |

## Example Entry
| ID | Date | Build | Platform | Scene | Frame Time | Memory | Budget Met? | Owner |
|----|------|-------|----------|-------|-----------|--------|-------------|-------|
| PR-001 | 2026-06-26 | 0.9.3 | Series S | Swamp boss arena | 18.2ms avg / 31ms 1%-low (~55fps) | 7.1GB / 8GB | fail (1%-low > 16.6ms target) | [performance-tester](../07-qa/performance-tester/) |

## Who Updates This & When
The **[performance-tester](../07-qa/performance-tester/)** appends a report after each
benchmark pass — at minimum every milestone and every release candidate, plus on demand
after a heavy feature lands. Failures auto-escalate to the
[performance-council](../08-councils/performance-council/) and open a
[technical-debt.md](technical-debt.md) row if not fixed immediately. The
[technical-director](../01-executive/technical-director/) reviews the trend at each gate;
a sustained regression can block ship (Prime Directive #7).
