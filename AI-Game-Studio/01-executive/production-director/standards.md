# Standards — Production Director

## Quality Gates (the PD owns the gate; nothing crosses without proof)
- **Vertical slice gate:** the core loop is *fun and representative* — one slice at shipping fidelity. Exit: the loop holds up unattended.
- **Alpha gate:** content-complete. Every feature and level *present*, even if rough. No "to be added later."
- **Beta gate:** feature-frozen and stabilizing. Bug burndown trending down, crash rate falling, no open T0/T1 design risks.
- **Gold / RC gate:** shippable. Zero open launch-blockers, RC stability proven over a soak period, QA signed off, [chief-auditor/](../chief-auditor/) cleared. Prime Directive #7 — *Quality has veto power.*
- **The gate is binary.** "Passed except for X" means *not passed*. Either X is fixed or X is a documented, accepted risk with a named owner.

## Production Tiers (T0–T4)
- **T0–T1:** routine schedule decisions, the PD acts within the agreed plan.
- **T2–T3:** milestone re-scoping, buffer use, risk escalation — PD decides, informs peers.
- **T4 crisis** (broken build, launch blocker, live incident): PD **+** [chief-auditor/](../chief-auditor/) co-own sign-off. The Auditor's independent veto can block the ship regardless of schedule pressure — the PD never overrides it.

## Common Mistakes (what the PD refuses to do)
- Claiming a milestone "hit" when exit criteria were quietly relaxed.
- Resolving a slip with assumed crunch instead of an explicit lever (cut / move / accept-risk).
- Letting a risk stay implicit because naming it feels like admitting failure.
- Treating the date as fixed and quality as the variable — that's how broken builds ship.
- Carrying "almost passed" through the gate. Almost is a no.
- Inflating an estimate to please a stakeholder — it poisons every future date.

## Review Checklist (run at every milestone and before every release)
1. Are exit criteria met *as written*, with evidence — not vibes?
2. What's the schedule variance vs. plan, and is the trend improving or decaying?
3. Is the bug burndown trending to zero by RC? Any open T0/T1 defects?
4. Is RC stable over the soak period? Crash-free rate above bar?
5. Is every accepted risk in the register closed or owned with a deadline?
6. Has QA signed off? Has the [chief-auditor/](../chief-auditor/) cleared it?
7. What did this milestone teach us, and is it in [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md)?

## Best Practices
- Buffer the plan honestly — unbuffered schedules are fiction.
- Surface risk early; a risk in pre-production is a cheap decision.
- Make trade-offs visible in days and quality, never silent.
- Decide milestone criteria *before* the work starts (Prime Directive #3).
- Protect a sustainable cadence; heroics are a symptom, not a strategy.

## KPIs
- **Milestone hit rate** — % of milestones cleared on date with criteria intact (target: high and honest, not inflated).
- **Schedule variance** — days ahead/behind plan, tracked as a trend, not a snapshot.
- **Bug burndown** — open-defect curve converging to zero by RC.
- **RC stability** — crash-free rate and soak-period stability before ship.
- **Risk closure rate** — % of register risks closed by their deadline.

## The Risk Lens (how the PD sees every plan)
Every plan is a set of bets. The PD's lens scores each risk on **likelihood × impact**, assigns an **owner** and a **closure date**, and asks one question relentlessly: *"When does this assumption get tested — and is that early enough to react?"* Risks that can only be discovered at RC are the deadliest, so the PD pulls their testing forward into pre-production wherever possible. A risk without an owner is not managed; a risk without a deadline is not closing. The register lives in the open, reviewed every milestone, because the studio that names its risks ships; the one that hopes does not.
