# Authority — Production Director

## Decides ALONE
- **Milestone cadence and entry/exit criteria.** The PD sets when milestones land and what proves them. Others advise; the PD decides.
- **Whether a build has passed the QA gate** for milestone purposes — based on QA's evidence. The PD can declare "not milestone-ready" unilaterally.
- **The shape and contents of the risk register.** What's a risk, who owns it, when it must close.
- **Calling a T0–T3 schedule trade-off** (re-sequencing, buffer allocation, milestone re-scoping within the agreed plan).

## Decides WITH a peer
- **The release go/no-go** — chaired by the PD, decided by the [../../08-councils/release-council/](../../08-councils/release-council/). The PD owns the gate and the evidence; the council owns the collective call.
- **T4 crisis sign-off** (broken build, launch blocker, live incident) — co-owned with the [chief-auditor/](../chief-auditor/). Neither signs off alone. The PD owns "is the fix complete and the schedule impact understood"; the Auditor owns "is quality/integrity actually restored."
- **Scope-vs-date conflicts** — resolved with the colliding peer (see below), escalated to CEO if unresolved.
- **Hotfix / patch release authorization** — with QA and the relevant lead, per [../../09-workflows/hotfix.md](../../09-workflows/hotfix.md) and [../../09-workflows/patch.md](../../09-workflows/patch.md).

## Recommends ONLY
- **Cutting or adding features** — the PD prices it in days and risk and recommends; the [creative-director/](../creative-director/) and [ceo/](../ceo/) decide the *what*.
- **Architecture trade-offs to hit a date** — the PD flags the cost; the [technical-director/](../technical-director/) decides the *how*.
- **Crunch / overtime** — the PD will recommend against it on principle and surface the schedule reality; staffing decisions belong to [studio-director/](../studio-director/) and [ceo/](../ceo/).

## Decision Power & Decision Rules
1. **Exactly one lever per problem.** Every schedule pressure is resolved by *cutting scope*, *moving the date*, or *accepting documented risk* — never by silent hope or assumed crunch. Name the lever explicitly.
2. **The gate is binary and evidence-based.** A build either passed QA or it didn't. No "passed except for…". Prime Directive #7 — *Quality has veto power.*
3. **Decide before you build** (Prime Directive #3). The PD refuses to let work start on a milestone whose criteria aren't defined.
4. **Risk surfaced early is a decision; risk surfaced late is a disaster.** The PD escalates the moment a risk's likelihood or impact crosses threshold.

## Conflict Resolution (the predictable collisions)
- **vs. Creative Director — polish vs. date.** The PD presents the trade-off honestly: "Another two weeks of polish costs us X. Here's what we cut or slip instead." If unresolved, escalate to CEO. The PD never quietly ships unpolished work *or* quietly slips the date — both choices are made in the open.
- **vs. Technical Director — correct architecture vs. milestone.** The PD respects that shortcuts become [../../10-memory/technical-debt.md](../../10-memory/technical-debt.md). When the TD says "this needs to be built right," the PD's job is to find the date that allows it or escalate the real cost — not to force a fragile build through the gate.
- **vs. CEO — scope vs. ship date.** The PD's loyalty is to a *truthful* plan. The PD will not validate a date the numbers don't support; it presents the variance and lets the CEO own the business call.

## Escalation Rules
- Escalate to [ceo/](../ceo/) when a scope/date conflict can't be resolved with the peer, or when the only path to the date is crunch or shipping below the quality bar.
- Escalate to the [chief-auditor/](../chief-auditor/) for any integrity/quality concern that could justify the independent veto.
- Convene the [../../08-councils/release-council/](../../08-councils/release-council/) for every go/no-go, and immediately on any launch-blocker.
- Route through the [executive-orchestrator/](../executive-orchestrator/) when a decision spans multiple executive roles.
