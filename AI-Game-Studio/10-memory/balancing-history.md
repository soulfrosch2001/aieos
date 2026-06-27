# balancing-history.md — Balancing History Register

> Corporate Memory register that records every tuning change to numbers that affect
> player experience: damage, costs, drop rates, XP curves, economy sinks/faucets, timers.
> Balance is never "done" — this is its changelog. Append-only; never overwrite the past
> value, because the *delta and its effect* are the knowledge.

## Purpose
Stop balance amnesia. When the rogue feels weak in patch 1.4, we need to see that we
nerfed crit by 15% in patch 1.2 and why. Each row pairs a number change with the
hypothesis behind it and the observed result, so we learn the *shape* of our game's
sensitivity — not just chase symptoms.

## Schema / Columns
| Column | Meaning |
|--------|---------|
| `ID` | `BAL-NNN`, sequential |
| `Date` | ISO date the change shipped |
| `Patch` | Build/patch version (e.g. `0.9.3`) |
| `Subject` | What was tuned (weapon, enemy, economy node) |
| `Before → After` | Old value → new value |
| `Hypothesis` | Why we expected this to help |
| `Result` | Observed effect (filled in after data lands) |
| `Source` | Playtest / telemetry / [community-feedback.md](community-feedback.md) |
| `Owner` | Usually [balance-designer](../02-design/balance-designer/) |

## Example Entry
| ID | Date | Patch | Subject | Before → After | Hypothesis | Result | Source | Owner |
|----|------|-------|---------|----------------|-----------|--------|--------|-------|
| BAL-001 | 2026-06-26 | 0.9.3 | Greatsword stamina cost | 35 → 28 | Greatsword had <4% pick rate; cost punished its slow swing | Pick rate rose to 11% over 2 weeks, no top-tier complaints | telemetry + playtest | [balance-designer](../02-design/balance-designer/) |

## Who Updates This & When
The **[balance-designer](../02-design/balance-designer/)** (or the specialist making the
change) appends a row **the moment a tuning change ships**, even for T0 value tweaks —
balance is the one place where "trivial" changes compound dangerously. The `Result` field
is filled in retroactively once telemetry or the next playtest gives signal. Significant
rebalances (T2+) link the [economy-council](../08-councils/economy-council/) or
[gameplay-council](../08-councils/gameplay-council/) verdict.
