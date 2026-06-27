# 🛠️ Optimization Council — Output

## Deliverables
1. **Optimization Campaign Plan** — the targeted hotspot, the chosen approach and its owner,
   the **before/after measurements**, and any recorded dissent. This is the artifact: a
   campaign without before/after numbers is not a deliverable, it is a guess.
2. **Meeting Minutes** — per the format in [../communication-protocol.md](../communication-protocol.md),
   appended to [../../10-memory/meeting-history.md](../../10-memory/meeting-history.md).
3. **Memory updates:**
   - **Always:** [../../10-memory/performance-reports.md](../../10-memory/performance-reports.md)
     — the measured before/after delta and the method that produced it.
   - **If debt is taken** (a fast path that's correct-but-ugly, a toggle left in):
     [../../10-memory/technical-debt.md](../../10-memory/technical-debt.md).
   - **If a lesson emerges** (a hotspot pattern worth remembering):
     [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md).

The driving workflow is [../../09-workflows/performance-optimization.md](../../09-workflows/performance-optimization.md).
Memory is **append-mostly** — add corrections, never rewrite history (Prime Directive #5).

## Copy-Paste Template — Optimization Campaign Plan
```markdown
# Optimization Council — Optimization Campaign Plan

Council:   optimization-council     Date: YYYY-MM-DD
Tier:      T2 / T3                  Chair: optimization-engineer
Attendees: <roles present>
Hotspot:   <the one profiled cost center, in one line>
Platform:  <target measured — weakest target sets the goal>

## Profiled Hotspot (capture first — no capture, no campaign)
<what the capture shows; the cost center; the scene/conditions; the capture link>
Budget:    <frame ms / memory MB / load s>  →  Current: <measured>  Over by: <delta>

## Approach Chosen
<the technique; what it changes; owner: <name>>
Projected win: <ms / MB / draw calls>   Reversible? <yes/no — toggle?>

## Before / After Measurement (same scene, same platform, repeatable)
| Metric            | Before | After | Delta | Budget | Pass? |
|-------------------|--------|-------|-------|--------|-------|
| Frame time (ms)   |        |       |       |        |       |
| GPU (ms)          |        |       |       |        |       |
| Draw calls        |        |       |       |        |       |
| Memory (MB)       |        |       |       |        |       |
| Load time (s)     |        |       |       |        |       |

Player experience after fix: <unchanged / improved — never "regressed but faster">

## Remaining Concerns (attributed — never empty if dissent exists)
- <name> — <concern> [re-review trigger: <e.g. next perf capture>]

## Risks
| Risk | Likelihood | Impact | Owner | Mitigation |
|------|-----------|--------|-------|------------|

## Alternatives Considered
| Approach | Owner | Projected win | Why it lost |
|----------|-------|---------------|-------------|

## Decision
<the campaign call> — approach owner: <name>
Win proven by re-capture? [ ] yes  (provisional until measured on weakest target)

## Approval Gate
- [ ] Council + Orchestrator + performance-tester confirms delta (T2)
- [ ] Escalated to performance/technical-council; Technical Director sign-off (T3 structural)
- [ ] Chief Auditor — no veto raised

## Implementation Plan / Owners & Next Steps
- Campaign owner: <optimization-engineer / member> — by <date>
- Re-capture gate: <performance-tester> — by <date>
- Memory: performance-reports.md (always) · technical-debt.md (if debt) · lessons-learned.md
- Workflow: 09-workflows/performance-optimization.md
```
