# 🎨 Art Council — Output

## Deliverables
1. **Art Verdict** — the decision on the asset/look/style, the winning option's owner,
   and the recorded dissent.
2. **Meeting Minutes** — per the format in [../communication-protocol.md](../communication-protocol.md),
   appended to [../../10-memory/meeting-history.md](../../10-memory/meeting-history.md).
3. **Memory updates:**
   - **Always:** [../../10-memory/game-design-decisions.md](../../10-memory/game-design-decisions.md)
     (record under the art-direction register if one is referenced there).
   - **If a budget trade is taken:** [../../10-memory/technical-debt.md](../../10-memory/technical-debt.md).
   - **If a lesson emerges:** [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md).

Memory is **append-mostly** — add corrections, never rewrite history (Prime Directive #5).

## Copy-Paste Template — Art Verdict
```markdown
# Art Council — Art Verdict (Art Review)

Council:   art-council             Date: YYYY-MM-DD
Tier:      T2 / T3                 Chair: art-director
Attendees: <roles present>
Topic:     <asset class / look / style change in one line>

## Identity Problem & Pillars at Stake
<what visual identity this serves; which art-direction pillars it touches>

## Consensus
<what everyone genuinely agreed on>

## Remaining Concerns (attributed — never empty if dissent exists)
- <name> — <concern> [re-review trigger: <e.g. first in-engine lookdev>]

## Risks
| Risk | Likelihood | Impact | Owner | Mitigation |
|------|-----------|--------|-------|------------|

## Alternatives Considered
| Option | Owner | Why it lost |
|--------|-------|-------------|

## Decision
<the call> — winning option owner: <name>
Look target: <reads as our game? consistent with neighbours? clears the quality bar?>

## Budget Check (art ↔ tech)
- Frame/memory impact: <technical-artist note> — within budget? <yes / trade logged>

## Approval Gate
- [ ] Council + Orchestrator (T2)
- [ ] Creative Director sign-off (T3)
- [ ] Chief Auditor — no veto raised

## Implementation Plan / Owners & Next Steps
- Lookdev owner: <concept-artist / dept artist> — by <date>
- In-engine proof: <technical-artist> under real lighting & budget — by <date>
- Workflow: <09-workflows/new-art-asset.md or relevant>
```
