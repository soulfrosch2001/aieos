# Workflow: balancing

**Purpose:** Tune numbers — damage, health, costs, drop rates, curves — using data and playtest evidence, never vibes alone, and record *why* every change happened.
**Default Tier:** T0 (a single value) to **T2** (a system-wide rebalance or economy change).

## Purpose
Balance is the studio's slowest-burning debt. Untracked tuning becomes a haunted spreadsheet nobody dares touch. This workflow demands a hypothesis, a measurement, and a logged rationale for every change so the next designer inherits reasoning, not mystery numbers.

## Participants
- [balance-designer](../02-design/balance-designer/) — owns the change and the rationale.
- [economy-designer](../02-design/economy-designer/) — for currency/drop/cost changes.
- [combat-designer](../02-design/combat-designer/) — for combat values.
- [performance-tester](../07-qa/performance-tester/) / [gameplay-tester](../07-qa/gameplay-tester/) — gather data.
- [economy-council](../08-councils/economy-council/) — for economy-wide changes; [gameplay-council](../08-councils/gameplay-council/) for combat.

## Inputs
- Telemetry / win-rate / pick-rate data from [../10-memory/performance-reports.md](../10-memory/performance-reports.md) and live data.
- The target curve or design intent.
- Player sentiment from [../10-memory/community-feedback.md](../10-memory/community-feedback.md).

## Steps
```
hypothesis → council? (T2) → change in a branch → measure (sim/playtest) →
[GATE: data confirms?] → record → ship
```
1. **Hypothesis** — balance-designer writes "X is too strong because Y; expect Z after change."
2. **Council** — T2 economy-wide changes go to [economy-council](../08-councils/economy-council/); T0/T1 the specialist decides.
3. **Make the change** — tune in a branch with the change isolated.
4. **Measure** — simulate and/or [playtesting.md](playtesting.md); compare to the hypothesis.
5. **Evidence gate** — data must support the change; a vibe is not evidence for T2.
6. **Record** — every change logged with before/after and rationale.

## Review Gates
- **Gate A — Hypothesis stated:** no blind nerfs/buffs.
- **Gate B — Evidence gate:** measured impact matches intent (required at T2).

## Approval Process
- **T0:** the [balance-designer](../02-design/balance-designer/) decides alone (Tier model).
- **T1:** [lead-game-designer](../02-design/lead-game-designer/).
- **T2 (economy-wide):** [economy-council](../08-councils/economy-council/) + Orchestrator; [chief-auditor](../01-executive/chief-auditor/) may veto a monetization-adjacent change.

## Outputs
Tuned values, before/after data, and a logged rationale. Patch-note line if player-facing.

## Completion Criteria
Hypothesis tested, evidence gate passed (T2), every value change logged, memory updated.

## Memory Updates
- [../10-memory/balancing-history.md](../10-memory/balancing-history.md) — **mandatory** before/after + rationale entry.
- [../10-memory/community-feedback.md](../10-memory/community-feedback.md) — link sentiment that drove it.
- [../10-memory/performance-reports.md](../10-memory/performance-reports.md) — data snapshot used.
