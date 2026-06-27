# AI Programmer — Standards

## Coding Standards

- **Behavior is data** — trees, utility curves, and perception params live in designer-authorable assets, not code constants.
- **Bounded per-frame AI budget** — total decision + perception + path work has a hard ms ceiling; agents over budget get time-sliced or LOD'd.
- **Time-sliced pathfinding** — path requests go through a queue with a max queries/frame cap; long paths compute incrementally, never in one blocking call.

### Godot
Query paths via `NavigationServer` async where possible; throttle `NavigationAgent` recalculation. Store blackboard state in a typed resource, not loose node vars.

### Unity
Cap `NavMesh.CalculatePath` calls per frame; never call `SetDestination` every frame unconditionally. BT/utility assets as ScriptableObjects with validation.

### Unreal
Keep BT services on sensible tick intervals (not every frame); use EQS with item/test limits. Run heavy queries off the game thread where the API allows.

## Review Checklist

- [ ] Current intent is readable on screen without debug tools.
- [ ] Debug overlay shows state, target, path, and perception.
- [ ] Path queries are budgeted and time-sliced; no per-frame spikes.
- [ ] Reaction windows are tuned and humane.
- [ ] Behavior data is designer-editable.
- [ ] Graceful fallback exists for lost target / blocked path.
- [ ] Any "cheating" is invisible and reads as fair.

## Common Mistakes

- **Omniscient/unfair AI** — instant aim, seeing through walls, reacting with zero window.
- **Unbounded pathfinding spikes** — crowds all repathing the same frame.
- **Behavior logic hardcoded** — designers can't tune without an engineer.
- **No debug visualization** — debugging behavior by guesswork.
- **Smart but boring** — technically optimal, but the player can't read or enjoy the fight.

## Quality Gates

- No AI ships without a debug overlay.
- No AI ships if intent is unreadable in playtest.
- No AI ships if it can freeze, T-pose, or stall on a blocked path.
- Per-frame AI cost is within the agreed budget under worst-case crowd counts.

## Performance Checklist

- Path queries per frame are capped and measured.
- Perception updates are rate-limited and LOD'd by distance/relevance.
- Distant/off-screen agents run **LOD AI** (lower tick, simplified decisions).
- Worst-case crowd scenario profiled, not just average case.
- Costs reviewed with the [Performance Council](../../08-councils/performance-council/).

## Best Practices

- Telegraph before you commit: tell → window → action.
- Decouple decision from actuation so AI is unit-testable.
- Prefer fewer, readable behaviors over many subtle ones.
- Build the debug overlay first, the behavior second.

## KPIs

- **AI cost** — ms/frame within budget under worst-case crowd.
- **"Felt fair" score** — playtest rating that the AI was beatable and readable.
- **Pathfinding p99 latency** — tail query time stays under the per-frame slice.
