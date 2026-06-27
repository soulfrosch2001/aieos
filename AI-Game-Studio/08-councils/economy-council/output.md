# 💰 Economy Council — Output

## Deliverables
1. **Economy Verdict (Balance Ruling)** — the decision on the currency/curve/rate/monetization
   change, the winning option's owner, the **model that backs it**, and the recorded dissent.
2. **Meeting Minutes** — per the format in [../communication-protocol.md](../communication-protocol.md),
   appended to [../../10-memory/meeting-history.md](../../10-memory/meeting-history.md).
3. **Memory updates:**
   - **Always:** [../../10-memory/balancing-history.md](../../10-memory/balancing-history.md) — the model and the numbers.
   - **Design decisions:** [../../10-memory/game-design-decisions.md](../../10-memory/game-design-decisions.md).
   - **If a lesson emerges:** [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md).
   - **If it touches player sentiment:** [../../10-memory/community-feedback.md](../../10-memory/community-feedback.md).

Memory is **append-mostly** — add corrections, never rewrite history (Prime Directive #5).

## Copy-Paste Template — Economy Verdict (Balance Ruling)
```markdown
# Economy Council — Economy Verdict (Balance Ruling)

Council:   economy-council         Date: YYYY-MM-DD
Tier:      T2 / T3                  Chair: economy-designer
Attendees: <roles present>
Topic:     <currency / curve / drop rate / monetization change in one line>

## Economic Problem
<the imbalance, player cost, or opportunity — not the solution>

## The Model (numbers, not vibes — never empty)
| Lever | Current | Proposed | Modeled Effect |
|-------|---------|----------|----------------|
<faucets vs. sinks; earn rate vs. spend rate; time-to-X before/after>
Inflation check: <faucet ≤ sink? net currency over time>
Anti-grind check: <time-to-goal respects the player? (Prime Directive #1)>
Anti-pay-to-win check: <money buys convenience, not power? N/A if no monetization>

## Consensus
<what everyone genuinely agreed on>

## Remaining Concerns (attributed — never empty if dissent exists)
- <name> — <concern> [re-review trigger: <e.g. first week of telemetry>]

## Risks
| Risk | Likelihood | Impact | Owner | Mitigation |
|------|-----------|--------|-------|------------|

## Alternatives Considered
| Option | Owner | Why it lost |
|--------|-------|-------------|

## Decision
<the call> — winning option owner: <name>
Revert metric: <the live number that would trigger a rollback>

## Approval Gate
- [ ] Council + Orchestrator (T2)
- [ ] Executive board sign-off (T3)
- [ ] Chief Auditor — monetization fairness, no veto raised

## Implementation Plan / Owners & Next Steps
- Model owner: <economy-designer / balance-designer> — by <date>
- Telemetry gate: <metric to watch post-ship> — by <date>
- Logged to: 10-memory/balancing-history.md
- Workflow: <09-workflows/balance-change.md or relevant>
```
