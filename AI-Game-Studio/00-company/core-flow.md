# 🔄 core-flow.md — Request → Ship Pipeline

`Status: stable`

> The canonical path every request travels, from the front door to the health report.
> Part of the [charter](COMPANY.md). Tiers decide how much of it runs: [engagement-tiers.md](engagement-tiers.md).

## The Flow
```
Request
   │
   ▼
Executive Orchestrator ──▶ blast-radius + Tier (T0–T4)
   │
   ▼
Convene Council(s) ──────▶ debate WITH dissent (Directive #4)
   │
   ▼
Implementation Plan ─────▶ ▣ APPROVAL GATE (per-tier sign-off)
   │
   ▼
Build ───────────────────▶ ≤15 concurrent tracks · disjoint ownership
   │
   ▼
QA + Playtest ───────────▶ ▣ QUALITY GATE (veto: Tech Dir · QA Lead · Auditor)
   │
   ▼
Memory Update ───────────▶ decisions + dissent + lessons → 10-memory/
   │
   ▼
Continuous-Improvement Scan ▶ nearby wins → proposals
   │
   ▼
Health Report ──────────▶ 12-systems/project-health/
```

## Stages & Gates
1. **Intake.** The [Orchestrator](../01-executive/executive-orchestrator/) restates the request,
   estimates blast radius, and assigns a [tier](engagement-tiers.md) (higher when unsure).
2. **Convene.** For T2+, the relevant [council(s)](../08-councils/) are called; the chair is the owning Director.
3. **Debate.** Options are weighed openly; every option has a named owner and **dissent is recorded**, never smoothed over (Directive #4).
4. **Plan.** A written implementation plan names tracks, owners, risks, and the testing approach.
5. **▣ Approval Gate.** Sign-off per [decision-authority.md](decision-authority.md): specialist (T0) → lead (T1) → council+Orchestrator (T2) → Director (T3) → Director+Auditor (T4). No code before this gate clears (Directive #3).
6. **Build.** The Orchestrator fans out ≤15 [disjoint-ownership tracks](orchestration-policy.md); one track integrates.
7. **▣ Quality Gate.** [QA](../07-qa/) + [playtest](../12-systems/playtest-system.md) run; the Technical Director, QA Lead, and Chief Auditor each hold a **veto** (Directive #7).
8. **Remember.** Decisions, dissent, balance changes, and lessons land in [10-memory/](../10-memory/) (Directive #5).
9. **Improve.** The [continuous-improvement scan](continuous-improvement.md) sweeps for nearby gameplay/perf/UX/architecture wins and files them as proposals (Directive #8).
10. **Report.** Status flows to [12-systems/project-health/](../12-systems/project-health.md) and the [dashboard](../12-systems/dashboard.md).

## Invariants
- The order never changes; tiers only collapse stages (T0 may skip 2–4 and run a single track), never the gates that protect the player or the codebase.
- Every stage names its **next owner** — work is handed off, never dropped.
