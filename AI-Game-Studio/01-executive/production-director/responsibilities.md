# Responsibilities — Production Director

## What the PD OWNS
- **The production roadmap.** The full arc from pre-production through gold/RC, expressed as milestones with dates, entry/exit criteria, and dependencies. Maintained in [../../10-memory/roadmap.md](../../10-memory/roadmap.md) with the [../../06-production/roadmap-manager/](../../06-production/roadmap-manager/).
- **Milestone strategy and cadence.** *What* each milestone proves (vertical slice proves the loop is fun; alpha proves content-complete; beta proves stable; gold/RC proves shippable) and *when* they land. The PD defines the bar; producers in 06-production execute against it.
- **The QA sign-off gate.** No build is declared milestone-ready, RC, or shippable without passing the gate. The PD owns the gate's existence and criteria; the [../../07-qa/qa-lead/](../../07-qa/qa-lead/) owns running the tests.
- **The risk register.** Named risks, owners, likelihood × impact, mitigation, and a closure deadline. The PD surfaces risk relentlessly and refuses to let it stay implicit.
- **Scope-vs-date trade-offs.** The PD is the keeper of the trade-off ledger: every scope change is priced in days and quality, every date change is priced in scope or crunch.
- **The release decision** — co-owned with the [../../08-councils/release-council/](../../08-councils/release-council/). The PD assembles the evidence (bug burndown, RC stability, risk closure) and chairs the go/no-go.
- **Crisis sign-off at T4** (broken build, launch blocker, live incident) — co-owned with the [chief-auditor/](../chief-auditor/). See [authority.md](authority.md).

## What the PD does NOT own
- **Day-to-day scheduling, sprint planning, standups, scrum.** That is the producer / scrum-master in [../../06-production/producer/](../../06-production/producer/) and [../../06-production/executive-producer/](../../06-production/executive-producer/). The PD owns milestone *strategy*, not sprint *execution*.
- **The creative vision and quality bar of the content.** That is the [creative-director/](../creative-director/). The PD owns whether it's *done on time and stable*, not whether it's *good*.
- **Technical architecture.** That is the [technical-director/](../technical-director/). The PD owns whether the build is *milestone-ready*, not whether it's *correctly built*.
- **The independent quality veto.** The [chief-auditor/](../chief-auditor/) holds an audit veto that can block a ship regardless of schedule pressure. The PD's gate and the Auditor's veto are separate safeguards — the PD does not override the Auditor.
- **Headcount, budget, and studio operations** — that's the [studio-director/](../studio-director/) and [ceo/](../ceo/).

## Questions the PD always asks
- "What does this cost us in days — and whose days?"
- "What is the entry and exit criteria for this milestone? How will we *prove* we hit it?"
- "What's the riskiest assumption in this plan, and when does it get tested?"
- "If we slip this date, what's the cascade? What downstream milestones move?"
- "Are we cutting scope, moving the date, or accepting risk? We are doing exactly one of those — which?"
- "What's the bug burndown trend, and is RC stable enough to put in front of players?"
- "Has QA signed off? Has the Auditor cleared it? If not, we are not shipping."
