# 🚀 Release Council — Process

## Discussion Rules
Follow [../debate-protocol.md](../debate-protocol.md) and [../communication-protocol.md](../communication-protocol.md).
Every option has a named honest owner; fake consensus is a defect; dissent is recorded,
never suppressed (**Prime Directive #4**). At this gate there is one extra rule that
outranks the rest: **a veto is not a vote.** A block from [qa-lead](../../07-qa/qa-lead/),
[technical-director](../../01-executive/technical-director/), or
[chief-auditor](../../01-executive/chief-auditor/) is **not** a deadlock to be argued away —
it is final unless a recorded **human risk-acceptance** overrides it (**Prime Directive #7**,
[../../00-company/prime-directives.md](../../00-company/prime-directives.md)). The chair
surfaces the strongest reason to **hold** out loud before calling a GO.

## Decision Process — the Go/No-Go Checklist
The chair runs the gate as a checklist. **Every item is GO / NO-GO / N/A with a named
owner.** A single unwaived NO-GO blocks the ship. Do not proceed to the verdict with an
open item.

1. **QA sign-off** — [qa-lead](../../07-qa/qa-lead/) confirms the bug bar is met and the
   test pass is complete. Open issues are reconciled against
   [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md). **Veto point.**
2. **Performance budget met** — frame/memory/load budgets pass per
   [../../10-memory/performance-reports.md](../../10-memory/performance-reports.md);
   [performance-tester](../../07-qa/performance-tester/) speaks if any budget is contested.
3. **Security & compliance cleared** — [security-council](../security-council/) and, when
   relevant, [chief-auditor](../../01-executive/chief-auditor/) sign off; no open
   privacy/legal/store-policy blocker.
4. **No open blockers** — zero crash/data-loss/launch-blocking bugs open in
   [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md); each known issue is
   either fixed, deferred-with-owner, or explicitly accepted.
5. **Rollback plan ready** — [build-engineer](../../03-programming/build-engineer/) confirms
   a tested rollback/hotfix path exists and the previous good build is recoverable.
6. **Store / cert readiness** — platform certification passed (or pending with a known
   date), store metadata and age ratings staged, build artifacts signed.
7. **Comms ready** — [executive-producer](../../06-production/executive-producer/) confirms
   patch notes, support, and community/launch comms are staged and aligned with the
   rollout plan.

Only when every item is GO (or a documented N/A) does the chair call the verdict:
**GO**, **NO-GO**, or **CONDITIONAL-GO** (ship gated on named, owned, dated conditions).
At the round limit with no consensus, the chair decides and records every dissent — but
the chair **cannot** call GO over a standing veto.

## Approval Gate by Tier
- **T2 — RC / patch / hotfix / DLC:** the council signs off; chair (production-director)
  owns the call. Any core veto holder can block.
- **T3 — major launch / DLC drop:** council **+** executive board
  ([Executive Orchestrator](../../01-executive/executive-orchestrator/) and the relevant
  director) sign off; [chief-auditor](../../01-executive/chief-auditor/) attends.
- **T4 — live incident:** the chair (or incident commander) decides immediately, one round,
  per [../../00-company/engagement-tiers.md](../../00-company/engagement-tiers.md); the
  record is written **after** the ship/hold, never before.
- A **veto** by qa-lead, technical-director, or chief-auditor holds at **every** tier and
  is overridden **only** by a recorded human risk-acceptance
  ([../../00-company/decision-authority.md](../../00-company/decision-authority.md)).

## Escalation
- Ship vs. hold deadlock → [production-director](../../01-executive/production-director/)
  as chair decides (within the no-veto-override rule above).
- Schedule vs. quality pressure → the quality side holds; escalation does **not** dissolve
  a veto. A human risk-acceptance is the only override and it is logged.
- Quality / security objection → [chief-auditor](../../01-executive/chief-auditor/), who can
  block regardless of tier (**Prime Directive #7**).
- Cross-department or business consequence beyond the chair's mandate →
  [Executive Orchestrator](../../01-executive/executive-orchestrator/) →
  [technical-director](../../01-executive/technical-director/) (risk) or the executive board.
- Workflows that feed this gate:
  [../../09-workflows/release-candidate.md](../../09-workflows/release-candidate.md),
  [../../09-workflows/hotfix.md](../../09-workflows/hotfix.md),
  [../../09-workflows/patch.md](../../09-workflows/patch.md),
  [../../09-workflows/dlc.md](../../09-workflows/dlc.md).
