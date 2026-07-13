# 🚀 Release Council
Status: stable
Type: council
Owner: chair
Extends: none

`Status: stable`

> Asks the last hard question before anything reaches a player: **should this ship, or
> should it hold?** This is **Prime Directive #7** ([../../00-company/prime-directives.md](../../00-company/prime-directives.md))
> made into a decision body — *quality has veto power*, and here it bites hardest.

## Purpose
Run the **Go/No-Go** on every release candidate, patch, hotfix, and DLC, and return a
single verdict: **ship** or **hold**. The council weighs open-bug severity, performance
budgets, security/compliance clearance, and platform-cert status against schedule
pressure — and schedule pressure does **not** win on its own. It owns *that it ships and
that shipping is safe*; it does **not** own *what* the feature is (that is the
[gameplay-council](../gameplay-council/)) or *how* it was built (that is the
[technical-council](../technical-council/)). The **veto is the point**: any of
[qa-lead](../../07-qa/qa-lead/), [technical-director](../../01-executive/technical-director/),
or [chief-auditor](../../01-executive/chief-auditor/) can block the ship regardless of the
calendar. Only a recorded **human risk-acceptance** overrides that block.

## Participants
- **Chair:** [production-director](../../01-executive/production-director/) — owns *that it
  ships*; convenes the gate, drives the verdict, owns the record.
- **Core members:**
  - [qa-lead](../../07-qa/qa-lead/) — bug bar and test sign-off; **veto holder**.
  - [build-engineer](../../03-programming/build-engineer/) — the candidate build, the
    rollback plan, store/cert artifacts.
  - [technical-director](../../01-executive/technical-director/) — technical risk; **veto holder**.
  - [executive-producer](../../06-production/executive-producer/) — schedule, comms
    readiness, business consequence of holding.
- **Advisory (as needed):** [chief-auditor](../../01-executive/chief-auditor/) — independent
  **veto**, present for any contested ship; [security-council](../security-council/) for
  compliance sign-off; [performance-tester](../../07-qa/performance-tester/) when a perf
  budget is in question.

## When Convened
- **T2** — **every** release candidate, patch, hotfix, and DLC. No T2+ ship skips this gate.
- **T3** — a major launch or DLC drop → council **+** executive board sign-off.
- **T4** — **live**, standing, no scheduling overhead: a broken build, a launch blocker, or
  a live incident ([../../00-company/engagement-tiers.md](../../00-company/engagement-tiers.md)).
  Convene now, one round, decide, log after.
- Not convened for **T0/T1** internal/dev builds — those never reach players.

## Index
- [process.md](process.md) — the debate rules and the numbered Go/No-Go checklist run.
- [output.md](output.md) — the Go/No-Go Decision Record deliverable and template.
