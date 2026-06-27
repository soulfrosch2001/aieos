# meeting-history.md — Meeting & Council History Index

> Corporate Memory index of every council session, design verdict, and Go/No-Go that
> produced a decision. Minutes are where dissent is preserved verbatim (Prime Directive #4:
> disagreement is a feature). This file is the **index**; full minutes live alongside or
> link out. Append-only — never edit a past verdict.

## Purpose
Give a permanent, searchable trail of who decided what, with whom, and who disagreed. When
a decision is questioned months later, the minutes show the reasoning *and* the recorded
dissent — so we don't relitigate from scratch or pretend consensus we never had.

## Schema / Columns
| Column | Meaning |
|--------|---------|
| `ID` | `MTG-NNN`, sequential |
| `Date` | ISO date held |
| `Council` | Which [council](../08-councils/) convened |
| `Topic` | What was decided |
| `Tier` | T0–T4 |
| `Verdict` | Outcome (one line) |
| `Dissent` | Named dissenter(s) + their position, or `none recorded` |
| `Decisions Logged` | Links to [GDD/ADR/BAL](architecture-decisions.md) rows produced |

## Example Entry
| ID | Date | Council | Topic | Tier | Verdict | Dissent | Decisions Logged |
|----|------|---------|-------|------|---------|---------|------------------|
| MTG-001 | 2026-06-26 | [gameplay-council](../08-councils/gameplay-council/) | Dash resource model | T2 | Dash on shared stamina pool | [progression-designer](../02-design/progression-designer/) preferred a charge system | GDD-001 |

## Who Updates This & When
The **council facilitator (or [scrum-master](../06-production/scrum-master/))** appends a
row at the **close of every convened session** that produces a decision — same day. The
[release-council](../08-councils/release-council/) logs every Go/No-Go here, including
abstentions and vetoes. Dissent is mandatory to record; "none recorded" is itself a claim
and should be rare. This index is the entry point auditors use during the
[continuous-improvement](../12-systems/continuous-improvement.md) scan.
