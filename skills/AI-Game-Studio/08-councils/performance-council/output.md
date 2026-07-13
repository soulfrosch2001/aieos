# ⚡ Performance Council — Output

## Deliverables
1. **Performance Verdict (Budget Ruling)** — the decision on whether the feature/asset fits
   the budget per platform, the measured numbers it rests on, what gives if it doesn't, and
   the recorded dissent. Profile-backed or it is not a verdict.
2. **Meeting Minutes** — per the format in [../communication-protocol.md](../communication-protocol.md),
   appended to [../../10-memory/meeting-history.md](../../10-memory/meeting-history.md).
3. **Memory updates:**
   - **Always:** [../../10-memory/performance-reports.md](../../10-memory/performance-reports.md)
     — the measured numbers, the test scene, and the per-platform budget ruling.
   - **If debt is taken:** [../../10-memory/technical-debt.md](../../10-memory/technical-debt.md)
     — with the paydown trigger.
   - **If a lesson emerges:** [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md).

Memory is **append-mostly** — add corrections, never rewrite history (Prime Directive #5).

## Copy-Paste Template — Performance Verdict (Budget Ruling)
```markdown
# Performance Council — Performance Verdict (Budget Ruling)

Council:   performance-council      Date: YYYY-MM-DD
Tier:      T2 / T3 / T4             Chair: optimization-engineer
Attendees: <roles present>
Topic:     <feature / asset / target change in one line>

## Budget Question
<which budget is at risk, on which platform, with how much headroom>

## Measured Numbers (profile-first — never empty)
| Platform | Metric        | Measured | Budget  | Headroom | Capture / Scene |
|----------|---------------|----------|---------|----------|-----------------|
| <plat>   | frame (ms)    | <x.x>    | <16.6>  | <±x.x>   | <capture ref>   |
| <plat>   | memory (MB)   | <x>      | <x>     | <±x>     | <capture ref>   |
| <plat>   | load (s)      | <x.x>    | <x.x>   | <±x.x>   | <capture ref>   |

## Consensus
<what everyone genuinely agreed the data shows>

## Remaining Concerns (attributed — never empty if dissent exists)
- <name> — <concern> [re-review trigger: <e.g. next perf pass on target>]

## Risks
| Risk | Likelihood | Impact | Owner | Mitigation |
|------|-----------|--------|-------|------------|

## Alternatives Considered
| Option | Owner | Why it lost |
|--------|-------|-------------|

## Decision
<fits / cut / scale per platform / defer / take debt> — owner: <name>
Weakest target verdict: <does it hold frame + memory + load on the worst platform?>

## Approval Gate
- [ ] Council + Orchestrator (T2)
- [ ] Technical Director — frame-budget veto NOT raised (or human risk-acceptance recorded)
- [ ] Technical Director sign-off + board (T3 target change)
- [ ] Chief Auditor — no veto raised
- [ ] Measured on every target under load (T4 Go/No-Go)

## Implementation Plan / Owners & Next Steps
- Optimization campaign (if needed): hand to <08-councils/optimization-council> — by <date>
- Re-profile gate: <07-qa/performance-tester> — by <date>
- Memory: performance-reports.md updated · technical-debt.md if debt taken
```
