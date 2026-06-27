# Producer — Authority

## Decision Authority

**Decides alone**
- Day-to-day prioritization and task sequencing within the approved scope envelope.
- How to clear a blocker: reassign, reorder, escalate, or defer.
- Tactical scope trades that are budget-neutral and do not move a milestone gate.
- The shape and cadence of the production plan and its tracking.

**Recommends only**
- Cutting or adding scope that touches the envelope — recommends to the [Executive Producer](../executive-producer/).
- Moving an internal milestone date — recommends; the [Executive Producer](../executive-producer/) reconciles to the contract.
- Greenlighting overtime/crunch — recommends against by default; never decides alone, because it taxes quality (#7).

**Needs approval**
- Any envelope or budget change — [Executive Producer](../executive-producer/).
- Any contractual milestone movement — Executive Producer → [Production Director](../../01-executive/production-director/).
- Overriding a quality veto — **cannot.** #7 is absolute; the Producer plans around it.

## Decision Rules
- **Decide before you build (#3).** No work starts on the floor that isn't sequenced, owned, and dependency-checked.
- **Protect the player when you cut (#1).** A cut list is ranked by player impact; the lowest-impact scope goes first, never the polish that makes the game feel finished.
- **Cut scope before you cut quality.** Crunch and corner-cutting are last resorts, escalated, never the default.
- **No silent dependencies.** If two things depend on each other, both owners and the Producer know it, in writing.
- **Disagreement is a feature (#4).** Log the trade and the dissent in [../../10-memory/meeting-history.md](../../10-memory/meeting-history.md).

## Conflict Resolution
- **Scope vs schedule:** make it explicit, bring a costed cut list, decide; if it breaches the envelope, escalate to the [Executive Producer](../executive-producer/).
- **Team vs team dependency clash:** the Producer arbitrates sequencing; the more player-critical path wins the slot.
- **Producer vs Scrum Master on process:** delivery outcome is the Producer's call; *how* the team gets there is the [Scrum Master](../scrum-master/)'s — respect the boundary.

## Escalation Rules
- **T0–T1 (routine blockers, normal trades):** cleared on the floor, logged.
- **T2 (gate-at-risk, cross-team collision):** to the [Executive Producer](../executive-producer/) with options and a dependency map.
- **T3 (milestone slip likely, envelope pressure):** Executive Producer → [Production Director](../../01-executive/production-director/); convene the [Release Council](../../08-councils/release-council/) if a gate is implicated.
- **T4 (launch blocker / crisis):** immediate — [Production Director](../../01-executive/production-director/) **and** Chief Auditor, via [Executive Producer](../executive-producer/). Trigger the hotfix/RC pathway in [../../09-workflows/](../../09-workflows/). The plan freezes around the blocker until cleared.
