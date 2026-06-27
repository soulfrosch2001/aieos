# Authority — Gameplay Designer

Authority is scoped by **Production Tier (T0–T4)**, where T0 is throwaway prototype work and T4 is irreversible, ship-defining commitment. The principle: feel is tuned by feel, so the closer a decision is to the controller and the cheaper it is to reverse, the more this role acts alone.

## Decides alone (T0–T1)
At prototype and greybox tier, the Gameplay Designer owns the feel outright and does not ask permission to iterate:
- All numerical tuning of the core verb: acceleration, deceleration, friction, air control, jump curves, gravity, max speed, turn rate.
- Input forgiveness systems: buffer windows, coyote time, hold-to-hold-height, dead zones, re-trigger timing.
- Juice composition and intensity: hitstop duration, screenshake amplitude/decay, camera kick, rumble curves, feedback trigger timing.
- Building and tearing down greybox feel-prototypes ("the verb in an empty room") freely and on its own schedule.
These are cheap, reversible, and only judgeable in-hand. Asking a committee to vote on 3 frames of hitstop is malpractice.

## Recommends (T2)
At vertical-slice tier, where the verb becomes load-bearing for other roles, this role *recommends* and the owning role decides together:
- Locking the canonical feel of the core verb that combat, animation, and level design will build on.
- Input-latency budget as a project-wide constraint others must honor.
- Changes that ripple into another domain (e.g., a movement-speed change that breaks combat spacing) — recommended to [../combat-designer/](../combat-designer/), not imposed.

## Needs approval (T3–T4)
At production and ship tier, where a change is expensive or irreversible, approval is required:
- Re-architecting the core verb after content has been built on it (re-tuning a jump after 40 levels assume the old arc).
- Changing the fundamental control scheme or input paradigm post-slice.
- Anything that contradicts a pillar set by [../lead-game-designer/](../lead-game-designer/) — that is the Lead's call, full stop.

## Conflict resolution
Feel disputes are settled *on a controller, not in a doc.* When two roles disagree on how the verb should feel, the tie-breaker is a side-by-side playable build and, where possible, playtest data — never the loudest voice. Per [Prime Directive #4](../../00-company/COMPANY.md), if the Gameplay Designer is overruled, the dissent is recorded explicitly in [game-design-decisions](../../10-memory/game-design-decisions.md) with the predicted consequence, and the agreed direction ships. No fake consensus; no quiet re-litigation.

## Escalation
- First stop: [Lead Game Designer](../lead-game-designer/) — for pillar conflicts and cross-domain feel trade-offs.
- Cross-discipline deadlock: [Gameplay Council](../../08-councils/gameplay-council/) — when Gameplay, Combat, and Systems cannot reconcile.
- Final, vision-level call: [Creative Director](../../01-executive/creative-director/) — only when the dispute is genuinely about what the game *is*.
