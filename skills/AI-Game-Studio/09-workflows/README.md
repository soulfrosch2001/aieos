# 09-workflows — End-to-End Production Pipelines

A **workflow** is a named, repeatable path a request travels from trigger to memory update. Each file follows the [BUILD_SPEC §2.3](../docs/BUILD_SPEC.md) shape:
**Purpose · Participants · Inputs · Steps (with ASCII flow) · Review Gates · Approval Process · Outputs · Completion Criteria · Memory Updates**.

The [executive-orchestrator](../01-executive/executive-orchestrator/) picks the workflow and assigns a **Production Tier (T0–T4)** — see [BUILD_SPEC §4](../docs/BUILD_SPEC.md). Heavier tiers add councils ([08-councils/](../08-councils/)), more gates, and executive sign-off. Every workflow ends by updating [10-memory/](../10-memory/) — the studio remembers ([Prime Directive 5](../00-company/COMPANY.md)) — and triggers a [continuous-improvement](../12-systems/continuous-improvement.md) scan ([Prime Directive 8](../00-company/COMPANY.md)).

> **The golden rules:** *Decide before you build* ([PD 3](../00-company/COMPANY.md)). *Quality has veto power* ([PD 7](../00-company/COMPANY.md)). *Disagreement is a feature* ([PD 4](../00-company/COMPANY.md)).

---

## Content Creation
Build new things the player interacts with. Council-gated; fun/feel gates kill bad ideas cheaply.

- [new-gameplay-feature.md](new-gameplay-feature.md) — **T2/T3:** pitch → prototype → **fun gate** → build → playtest → ship a new verb.
- [enemy-creation.md](enemy-creation.md) — **T2:** a standard enemy with legible tells and a clear ecology role.
- [boss-creation.md](boss-creation.md) — **T3:** multi-phase set-piece with per-phase readability and clean-run fairness.
- [npc-creation.md](npc-creation.md) — **T1/T2:** vendor/quest/companion NPC tying function to fiction.
- [weapon-design.md](weapon-design.md) — **T2:** a weapon with a distinct feel and no power creep.
- [ability-design.md](ability-design.md) — **T2/T3:** an ability that creates a decision, not just damage.
- [skill-tree.md](skill-tree.md) — **T3:** a progression structure of real choices, no trap nodes.

## Quality & Review
Tune, verify, and gatekeep what's already built. Owned by councils and QA; these are where quality earns its veto.

- [balancing.md](balancing.md) — **T0–T2:** hypothesis → measure → **evidence gate** → logged tuning.
- [performance-optimization.md](performance-optimization.md) — **T1–T3:** profile first, fix the biggest cost, verify the win.
- [bug-fixing.md](bug-fixing.md) — **T1:** reproduce (no failing test, no fix) → minimal fix → regression test.
- [animation-review.md](animation-review.md) — **T1/T2:** readability-at-speed gate run by the [animation-council](../08-councils/animation-council/).
- [art-review.md](art-review.md) — **T1/T2:** direction + budget + readability via the [art-council](../08-councils/art-council/).
- [audio-review.md](audio-review.md) — **T1/T2:** feel + information value + mix, run by the audio department.
- [playtesting.md](playtesting.md) — **T1/T2:** watch players, signal-gate findings, route them back into design.

## Release & Live
Stabilize, ship, and keep a live game healthy. Release/Security councils and executive veto holders run these.

- [release-candidate.md](release-candidate.md) — **T3:** feature freeze → certify → soak → **Go/No-Go** with veto holders.
- [hotfix.md](hotfix.md) — **T4:** live incident command — smallest safe change, fast verify, postmortem.
- [patch.md](patch.md) — **T2:** planned cadence update — batched fixes/balance, full regression, clean notes.
- [dlc.md](dlc.md) — **T3:** self-contained add-on that adds without extracting (no pay-to-win).
- [expansion.md](expansion.md) — **T3/program:** a new act/region — a mini-production with a vertical-slice gate.

---

## How a request flows
```
Request → Orchestrator (blast radius + Tier) → pick workflow → convene council(s) →
debate w/ dissent → plan → build → review gates → QA + playtest → Go/No-Go →
memory update → continuous-improvement scan → health report
```
When two tiers are plausible, pick the **higher** ([BUILD_SPEC §4](../docs/BUILD_SPEC.md)). Veto holders — [technical-director](../01-executive/technical-director/), [qa-lead](../07-qa/qa-lead/), [chief-auditor](../01-executive/chief-auditor/) — can block any ship regardless of schedule pressure.
