# Workflow: playtesting

**Purpose:** Put a build in front of players, observe without leading them, and turn what you see into prioritized, evidence-backed findings.
**Default Tier:** T1 (a focused feature test) to **T2** (a full milestone/vertical-slice test).

## Purpose
Playtesting is the studio's reality check against its own assumptions ([Prime Directive 1](../00-company/COMPANY.md)). The cardinal rule: *watch what players do, not what they say they'll do.* This workflow runs through the [playtest-system](../12-systems/playtest-system.md) and feeds findings back into design with priority and evidence.

## Participants
- [gameplay-tester](../07-qa/gameplay-tester/) — runs sessions, captures observations.
- [qa-lead](../07-qa/qa-lead/) — owns the test plan and triage.
- The owning designer (varies) — observes silently, must not coach.
- [accessibility-tester](../07-qa/accessibility-tester/) — runs accessibility-focused sessions.
- [community-manager](../11-marketing/community-manager/) — for external/closed-beta tests.
- [gameplay-council](../08-councils/gameplay-council/) — receives findings that imply design change.

## Inputs
- A stable, instrumented build + a test plan (questions to answer, tasks to set).
- Target player segment (new / lapsed / expert).
- Prior findings from [../10-memory/community-feedback.md](../10-memory/community-feedback.md).

## Steps
```
test plan → recruit → run sessions (observe, don't coach) → capture telemetry + notes →
[GATE: enough signal?] → synthesize findings → prioritize → route → memory
```
1. **Plan** — qa-lead writes the questions the test must answer.
2. **Recruit** — match the target segment; fresh eyes for tutorial tests.
3. **Run sessions** — observe silently; only intervene on hard blockers; record screen + telemetry.
4. **Capture** — tag confusion points, rage moments, drop-offs, exploits.
5. **Signal gate** — enough sessions for a pattern, not an anecdote.
6. **Synthesize** — separate signal (recurring) from noise (one-off).
7. **Prioritize & route** — feed design changes to the right workflow (e.g. [balancing.md](balancing.md), [new-gameplay-feature.md](new-gameplay-feature.md)).
8. **Record** — qa-lead updates memory.

## Review Gates
- **Gate A — Build stability:** test build doesn't crash out of the questions.
- **Gate B — Signal gate:** findings backed by recurring observation, not one tester's taste.

## Approval Process
Findings are advisory, not directives — they route to the owning council/lead, who decides per the relevant workflow. [qa-lead](../07-qa/qa-lead/) owns the findings report's integrity.

## Outputs
A prioritized findings report (signal vs noise), session recordings, telemetry summary, routed action items.

## Completion Criteria
Plan answered, signal-gated findings written and prioritized, action items routed, memory updated.

## Memory Updates
- [../10-memory/community-feedback.md](../10-memory/community-feedback.md) — **mandatory** findings entry.
- [../10-memory/known-bugs.md](../10-memory/known-bugs.md) — bugs surfaced.
- [../10-memory/lessons-learned.md](../10-memory/lessons-learned.md) — assumptions the test broke.
