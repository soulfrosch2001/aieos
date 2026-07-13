# 🐛 Bug Hunter — Standards

## Canonical Bug Report Template
Every filed bug uses this shape. No field is optional; "N/A" is an answer, blank is not.

```
ID:            BUG-#### (stable, unique)
Title:         <terse symptom> in <location> when <trigger>
Severity:      S1 crash/data-loss/soft-lock · S2 major broken feature · S3 minor · S4 cosmetic
Priority:      P0 fix now · P1 this milestone · P2 backlog · P3 won't-fix-soon
Build/Version: <build id + branch/commit>
Platform:     <OS / device / input device / resolution / driver if relevant>
Preconditions: <exact starting state: save slot, flags, items, settings>
Repro Steps:   1. <deterministic, numbered, one action each>
               2. ...
               3. ...
Expected:      <what the design says should happen>
Actual:        <what happened, observable and specific>
Frequency:     always | intermittent N/M (e.g. 3/20)
Regression?:   yes/no
First-bad-build: <build id where it started, if regression>
Attachments:   video clip · save file · log/crash dump · screenshot
Workaround:    <any way the player avoids it, or "none">
```

## Repro Discipline
- Steps are **deterministic and numbered**, one action per line, reproducible from the stated
  preconditions on a clean boot — no "and then mess around for a bit."
- Steps are **minimal**: every step that the bug survives deletion of is deleted before filing.
- Frequency is a **measured rate** for anything intermittent, never the word "sometimes."
- Every S1/S2 ships with at least a **video** and, where state matters, the **save file** and **log**.

## Quality Gates
- **Repro gate:** every S1/S2 has clean, deterministic repro steps before it enters triage.
- **Frequency gate:** intermittent bugs carry an N/M rate, not an adjective.
- **Regression gate:** regressions name the first-bad-build, or say why it couldn't be bisected.
- **Evidence gate:** crash/data-loss bugs carry video, save, and log — claims without artifacts wait.
- **Dedup gate:** crashes are checked against existing reports by stack signature; one bug, one ID.

## Acceptance Criteria (a report is "done" when)
- A reader who has never seen the bug can trigger it on the first attempt from the preconditions.
- Severity and priority are set and justified; frequency is quantified.
- Regression status is resolved; attachments are present and open correctly.
- It is searchable in [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md) and routed to
  [../../09-workflows/bug-fixing.md](../../09-workflows/bug-fixing.md).

## Common Mistakes It Guards Against
- "It happened once" filed as a bug with no steps — a rumor, not a report.
- "Sometimes" standing in for a measured frequency.
- Bloated repro steps that bury the three that actually matter.
- Severity inflated by frustration or deflated by the engineer who has to fix it.
- Duplicate crash tickets for one underlying fault with the same stack signature.
- S1s filed with no save, no video, no log — unfixable evidence-free panic.
