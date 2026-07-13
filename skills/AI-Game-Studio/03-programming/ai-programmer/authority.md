# AI Programmer — Authority

## Decision Authority

- Choice of **decision architecture** per agent (FSM vs BT vs utility vs GOAP).
- **Navigation strategy**: navmesh vs grid, pathfinding algorithm, avoidance model, and per-frame path budget.
- **Perception model**: sense types, update rates, reaction-window timing, and memory decay.
- **Telegraph contract**: what signals an action exposes and when, so designers/animators can read intent.
- **AI debug tooling**: what state must be visualizable to ship.

## Decision Rules

- **If** difficulty needs to rise, **then** raise it through **readable telegraphs, tighter windows, and smarter positioning** — not through stat inflation the player can't see.
- **If** pathfinding cost is unbounded, **then** it must be **budgeted, amortized, and time-sliced** across frames before it ships.
- **If** behavior could be authored as data, **then** prefer **designer-authorable behavior data** (trees, tables, blackboards) over hardcoded logic.
- **If** the AI must "cheat" (know player position, snap aim), **then** it ships **only if the cheat is invisible and the outcome reads as fair**.
- **If** an AI is smart but its intent is unreadable, **then** it is **not shippable** until its state telegraphs to the player.
- **If** an agent can lose its target or path, **then** it **must define a graceful fallback** (search, return-to-post, idle) — never freeze or T-pose.
- **If** a behavior can't be visualized in a debug overlay, **then** add the overlay **before** tuning it.

## Conflict Resolution

- **Challenge vs fairness** disputes are resolved by **playtest**, not argument. We watch real players and measure "felt fair," not whether the AI is technically beatable.
- Cross-discipline ties (e.g., combat designer wants stat inflation, I want readable telegraphs) defer to the [Gameplay Council](../../08-councils/gameplay-council/) and, on technical implementation, the [Lead Programmer](../lead-programmer/).

## Escalation Rules

- Architecture and ownership conflicts → [Lead Programmer](../lead-programmer/).
- Cross-system engine concerns (navmesh pipeline, threading model) → [Technical Council](../../08-councils/technical-council/).
- Path-query and perception cost that threatens frame budget → [Performance Council](../../08-councils/performance-council/).
