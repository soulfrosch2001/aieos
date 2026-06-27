# known-bugs.md — Known Bugs & Risks Register

> Corporate Memory register of open defects and live risks the studio is aware of, with
> severity, repro, and workaround. Honesty over optics: a known bug tracked with a
> workaround is a managed risk; an untracked one is a launch blocker waiting to happen.
> Append-mostly — close bugs by dating the fix, don't delete the row.

## Purpose
Give QA, production, and the [release-council](../08-councils/release-council/) a single
truth for "what's broken and how bad." Feeds the Go/No-Go gate: no `critical` open bug
ships without an explicit, signed waiver. [qa-lead](../07-qa/qa-lead/) holds veto power
here (Prime Directive #7).

## Schema / Columns
| Column | Meaning |
|--------|---------|
| `ID` | `BUG-NNN`, sequential |
| `Title` | Short symptom description |
| `Severity` | `S1 crash/blocker \| S2 major \| S3 minor \| S4 cosmetic` |
| `Repro` | Steps or "intermittent" + frequency |
| `Workaround` | Player- or build-side mitigation, or `none` |
| `Area` | System/department affected |
| `Owner` | Role driving the fix |
| `Status` | `open \| in-progress \| fixed (build X) \| won't-fix \| cannot-repro` |

## Example Entry
| ID | Title | Severity | Repro | Workaround | Area | Owner | Status |
|----|-------|----------|-------|-----------|------|-------|--------|
| BUG-001 | Hard lock when pausing during boss death cutscene | S1 | Pause within 0.5s of final boss hit; ~30% repro | Don't pause during cutscene | combat / UI | [bug-hunter](../07-qa/bug-hunter/) | in-progress |

## Who Updates This & When
**QA opens the row** when a bug is confirmed and reproduced (or logged as intermittent with
frequency). The **owning engineer** updates Status and links the fixing build. The
[qa-lead](../07-qa/qa-lead/) triages severity and reviews the full register at every release
candidate and [hotfix](../09-workflows/hotfix.md). S1/S2 bugs auto-surface in the
[project-health](../12-systems/project-health.md) report. Fixed bugs keep their row with a
dated `fixed (build X)` note for regression tracking.
