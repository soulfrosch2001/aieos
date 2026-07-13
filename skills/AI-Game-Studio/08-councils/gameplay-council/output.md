# 🎮 Gameplay Council — Output

## Deliverables
1. **Design Verdict** — the decision on the mechanic/feature, the winning option's owner,
   and the recorded dissent.
2. **Meeting Minutes** — per the format in [../communication-protocol.md](../communication-protocol.md),
   appended to [../../10-memory/meeting-history.md](../../10-memory/meeting-history.md).
3. **Memory updates:**
   - **Always:** [../../10-memory/game-design-decisions.md](../../10-memory/game-design-decisions.md).
   - **If debt is taken:** [../../10-memory/technical-debt.md](../../10-memory/technical-debt.md).
   - **If a lesson emerges:** [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md).

Memory is **append-mostly** — add corrections, never rewrite history (Prime Directive #5).

## Copy-Paste Template — Design Verdict
```markdown
# Gameplay Council — Design Verdict

Council:   gameplay-council        Date: YYYY-MM-DD
Tier:      T2 / T3                 Chair: lead-game-designer
Attendees: <roles present>
Topic:     <mechanic / feature in one line>

## Player Problem & Pillars at Stake
<what player need this serves; which design pillars it touches>

## Consensus
<what everyone genuinely agreed on>

## Remaining Concerns (attributed — never empty if dissent exists)
- <name> — <concern> [re-review trigger: <e.g. first playtest>]

## Risks
| Risk | Likelihood | Impact | Owner | Mitigation |
|------|-----------|--------|-------|------------|

## Alternatives Considered
| Option | Owner | Why it lost |
|--------|-------|-------------|

## Decision
<the call> — winning option owner: <name>
Feel target: <reads in 5s? respects player time? pillar fit?>

## Approval Gate
- [ ] Council + Orchestrator (T2)
- [ ] Creative Director sign-off (T3)
- [ ] Chief Auditor — no veto raised

## Implementation Plan / Owners & Next Steps
- Prototype owner: <gameplay-programmer> — by <date>
- Playtest gate: <12-systems/playtest-system> — by <date>
- Workflow: <09-workflows/new-gameplay-feature.md or relevant>
```
