# Engagement Tiers (T0–T4)

Every request is sized to a tier. The tier decides ceremony, parallelism, and
who signs off. Inherited by all companies; a company may rename examples but not
the tier semantics.

| Tier | Name | What it is | Council? | Fan-out | Sign-off |
|------|------|-----------|----------|---------|----------|
| **T0** | Trivial | A typo, a tweak, a one-line answer. | No | 1 agent | The agent itself. |
| **T1** | Standard | A single, well-understood change. | No | 1–3 agents | Department lead. |
| **T2** | Significant | A new feature/system with design choices. | Yes | up to 8 | Council. |
| **T3** | Strategic | A new pillar, direction, or cross-department bet. | Yes | up to 15 | Council + executive. |
| **T4** | Crisis | Production-down, security breach, reputation risk. | Yes (incident) | up to 15, all hands | Government-coordinated. |

## How the tier drives everything
- **T0–T1** skip the council (Directive #3 applies only to significant work).
- **T2+** must discuss before building and produce a plan.
- The tier sets the **fan-out ceiling** — see
  [../protocols/orchestration.md](../protocols/orchestration.md).
- The tier sets the **gates** required — see
  [../../shared/quality-standards.md](../../shared/quality-standards.md).
- The tier sets **sign-off** — see [decision-authority.md](decision-authority.md).

## Sizing rule of thumb
When unsure between two tiers, pick the higher one for the *decision* (so it gets
discussed) and the lower one for the *execution* (so it stays lean). Escalate, never
silently downgrade, a request that grows mid-flight.
