# 🚀 Release Council — Output

## Deliverables
1. **Go / No-Go Decision Record** — the explicit verdict (**GO / NO-GO / CONDITIONAL-GO**),
   the completed Go/No-Go checklist, every recorded veto, and any human risk-acceptance
   that overrode one.
2. **Meeting Minutes** — per the format in [../communication-protocol.md](../communication-protocol.md),
   appended to [../../10-memory/meeting-history.md](../../10-memory/meeting-history.md).
3. **Memory updates:**
   - **Always:** [../../10-memory/meeting-history.md](../../10-memory/meeting-history.md).
   - **Roadmap:** ship/slip reflected in [../../10-memory/roadmap.md](../../10-memory/roadmap.md).
   - **If a lesson emerges:** [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md).
   - **Outstanding bugs:** referenced and reconciled against
     [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md).

Memory is **append-mostly** — add corrections, never rewrite history (**Prime Directive #5**).
A CONDITIONAL-GO is not closed until its conditions are met or it re-enters the gate.

## Copy-Paste Template — Go / No-Go Decision Record
```markdown
# Release Council — Go / No-Go Decision Record

Council:    release-council          Date: YYYY-MM-DD
Tier:       T2 / T3 / T4             Chair: production-director
Attendees:  <roles present>
Release:    <RC / patch / hotfix / DLC — version/build id>
Workflow:   <09-workflows/release-candidate.md | hotfix.md | patch.md | dlc.md>

## Go/No-Go Checklist (each item: GO / NO-GO / N/A — owner)
1. QA sign-off (bug bar met) ............... [ ]  — qa-lead
2. Performance budget met .................. [ ]  — performance-tester
3. Security & compliance cleared ........... [ ]  — security-council / chief-auditor
4. No open blockers (crash/data-loss) ...... [ ]  — qa-lead   (ref: 10-memory/known-bugs.md)
5. Rollback plan ready & tested ............ [ ]  — build-engineer
6. Store / cert readiness .................. [ ]  — build-engineer
7. Comms ready (patch notes / support) ..... [ ]  — executive-producer

## Open Blockers / Known Issues at Ship
| ID | Severity | Status (fixed/deferred/accepted) | Owner |
|----|----------|----------------------------------|-------|

## Vetoes Raised (qa-lead / technical-director / chief-auditor)
- <name> — <reason for block>   (blank if none)

## Human Risk-Acceptance (only if a veto is overridden — Prime Directive #7)
- Accepted by: <human name/role>   Date: YYYY-MM-DD
- Risk accepted: <what is being shipped despite the block, and why>

## Remaining Concerns (attributed — never empty if dissent exists)
- <name> — <concern> [re-review trigger: <e.g. 24h post-launch metrics>]

## Decision
OUTCOME: **GO / NO-GO / CONDITIONAL-GO**
Rationale: <the call in one or two lines>

## Conditions (CONDITIONAL-GO only — named, owned, dated)
- <condition> — owner: <name> — by: <date/trigger>

## Release Checklist (on GO)
- [ ] Build promoted / signed — build-engineer
- [ ] Rollback path armed — build-engineer
- [ ] Store / cert submitted or live — build-engineer
- [ ] Patch notes & comms published — executive-producer
- [ ] Post-launch monitoring window owned — qa-lead / production-director
- [ ] roadmap.md updated; meeting-history.md appended

## Owners & Next Steps
- Ship owner: <production-director> — go-live: <date/time>
- Monitoring: <qa-lead> — window: <duration>
- If NO-GO: re-gate trigger: <what must change> — owner: <name>
```
