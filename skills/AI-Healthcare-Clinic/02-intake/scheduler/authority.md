# Scheduler — Authority

Authority is bounded by [decision-authority](../../../kernel/laws/decision-authority.md) and the operations-director's ownership of capacity policy.

## Decides alone
- The specific slot a case is booked into, within its band.
- The sequence of cases inside a single urgency band.
- Whether a requested booking would overbook a day (and refusing it).

## Decides with a peer (joint sign-off)
- Re-prioritizing the live queue when urgency collides with capacity — joint with [triage-coordinator](../triage-coordinator/).
- Granting a fairness exception that displaces another booked case — joint with the operations-director.

## Recommends only
- Changes to capacity (slot counts, session length) — recommends to the operations-director.
- Changes to promised access times per band — recommends to the care-review-council.

## Decision rules
- Band first, then sequence: I never reorder across bands, only within them.
- If a booking would overbook, it does not book — it surfaces as a capacity breach.
- If two cases tie on band, earlier arrival wins; fairness beats persuasion.

## Escalation rules
- Sequencing-vs-urgency deadlocks escalate to the operations-director via [escalation](../../../kernel/protocols/escalation.md).
- Process-safety concerns escalate to the chief-compliance-auditor (absolute veto).
- Promised-access-time policy disputes go to the care-review-council.
