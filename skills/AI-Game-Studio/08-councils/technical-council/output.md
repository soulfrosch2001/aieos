# 🛠️ Technical Council — Output

## Deliverables
1. **Architecture Verdict** — the decision on the system/tech bet, the winning option's
   owner, the recorded reversibility cost, and the recorded dissent.
2. **Meeting Minutes** — per the format in [../communication-protocol.md](../communication-protocol.md),
   appended to [../../10-memory/meeting-history.md](../../10-memory/meeting-history.md).
3. **Memory updates:**
   - **Always:** [../../10-memory/architecture-decisions.md](../../10-memory/architecture-decisions.md).
   - **If debt is taken:** [../../10-memory/technical-debt.md](../../10-memory/technical-debt.md).
   - **If a lesson emerges:** [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md).

Memory is **append-mostly** — add corrections, never rewrite history (Prime Directive #5).

## Copy-Paste Template — Architecture Verdict
```markdown
# Technical Council — Architecture Verdict

Council:   technical-council       Date: YYYY-MM-DD
Tier:      T2 / T3                 Chair: technical-director
Attendees: <roles present>
Topic:     <system / tech bet in one line>

## Technical Problem & Constraints at Stake
<what this must do; the budgets, invariants, and formats it touches>

## Consensus
<what everyone genuinely agreed on>

## Remaining Concerns (attributed — never empty if dissent exists)
- <name> — <concern> [re-review trigger: <e.g. after spike / load test>]

## Reversibility (Prime Directive #3)
<cost to undo the chosen design; what it locks; the exit path if it fails>

## Risks
| Risk | Likelihood | Impact | Owner | Mitigation |
|------|-----------|--------|-------|------------|

## Alternatives Considered
| Option | Owner | Why it lost |
|--------|-------|-------------|

## Decision
<the call> — winning option owner: <name>
Engine-agnostic? <yes / sub-notes below>
Engine sub-notes (only if needed): <Godot / Unity / Unreal specifics>

## Approval Gate
- [ ] Council + Orchestrator (T2)
- [ ] Technical Director sign-off + exec board (T3)
- [ ] Chief Auditor — no veto raised

## Implementation Plan / Owners & Next Steps
- Spike/prototype owner: <lead-programmer> — by <date>
- Budget verification: <optimization-engineer> — by <date>
- Workflow: <09-workflows/ relevant>
```
