# 🕺 Animation Council — Output

## Deliverables
1. **Animation Verdict** — the decision on the motion/rig/sync question, the winning
   option's owner, the resolved feel-vs-responsiveness trade-off, and the recorded dissent.
2. **Meeting Minutes** — per the format in [../communication-protocol.md](../communication-protocol.md),
   appended to [../../10-memory/meeting-history.md](../../10-memory/meeting-history.md).
3. **Memory updates:**
   - **If the call touches feel/responsiveness:** [../../10-memory/game-design-decisions.md](../../10-memory/game-design-decisions.md).
   - **If rig/pipeline debt is taken:** [../../10-memory/technical-debt.md](../../10-memory/technical-debt.md).
   - **If a lesson emerges:** [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md).

Memory is **append-mostly** — add corrections, never rewrite history (Prime Directive #5).

## Copy-Paste Template — Animation Verdict
```markdown
# Animation Council — Animation Verdict (Animation Review)

Council:   animation-council        Date: YYYY-MM-DD
Tier:      T2 / T3                  Chair: animator
Attendees: <roles present>
Topic:     <character / motion / sync question in one line>

## Motion Problem & Feel Target
<the moment and character; the intended feel; the responsiveness/fidelity stakes>

## Consensus
<what everyone genuinely agreed on>

## Remaining Concerns (attributed — never empty if dissent exists)
- <name> — <concern> [re-review trigger: <e.g. first in-hand playtest>]

## Feel vs. Responsiveness Trade-off
<where the line was drawn — cancel windows, root motion vs. control, wind-up frames;
note if gameplay-council co-signed (responsiveness usually wins)>

## Risks
| Risk | Likelihood | Impact | Owner | Mitigation |
|------|-----------|--------|-------|------------|

## Alternatives Considered
| Option | Owner | Why it lost |
|--------|-------|-------------|

## Decision
<the call> — winning option owner: <name>
Quality bar: <feel-in-hand met? rig integrity intact? state-machine/blend-tree clean?>

## Approval Gate
- [ ] Council + Orchestrator (T2)
- [ ] Gameplay Council co-sign (any responsiveness trade-off)
- [ ] Art Director + Creative Director sign-off (T3)
- [ ] Chief Auditor — no veto raised

## Implementation Plan / Owners & Next Steps
- Blockout/rig owner: <animator / rigging-artist> — by <date>
- Sync owner: <gameplay-programmer> — by <date>
- Playtest gate: <12-systems/playtest-system> — by <date>
- Workflow: <09-workflows/ relevant animation workflow>
```
