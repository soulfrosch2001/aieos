# Audio Director — Standards

## Quality Gates
- **Loudness:** the game masters to a defined integrated target (e.g. ~ -23 LUFS console / platform target, with true-peak ≤ -1 dBTP). No scene drifts more than ±2 LU from the target without intent.
- **Headroom:** no bus clips; master never exceeds true-peak ceiling. Clipping is a ship-blocker.
- **Critical-feedback audibility:** every gameplay-critical cue (damage, telegraph, pickup) is audible in the worst-case scene at reference volume.
- **Vision fit:** every shipped asset traces to the sonic pillars; no orphan "great but wrong game" sounds.

## Review Checklist
- Did I run the **worst-case scene pass** at reference level, not in solo?
- Is the ducking/priority matrix deterministic, or does the mix "fight" randomly under load?
- Are Music / SFX / VO / Ambience / UI on separate buses with correct routing?
- Is VO intelligible — does it duck everything that would bury a line?
- Is there protected silence around the loud moments so they land?
- Does loudness hold across scene transitions (no knob-reaching)?

## Common Mistakes It Guards Against
- **Solo-mixing** — approving an asset in isolation that drowns under load.
- **Loudness war** — everyone turns up; nothing is heard; the player's ears fatigue.
- **Ducking soup** — too many ducking rules fighting until the mix pumps.
- **Information loss** — a beautiful cue masking a survival-critical one.
- **Transition drift** — menu, cutscene, and gameplay at different loudness.

## KPIs
- % of builds passing the loudness gate first time.
- Critical-feedback audibility pass rate in worst-case scenes (target 100%).
- Number of player/QA reports of "couldn't hear X" or "had to adjust volume" (target → 0).
- Mix-related ship-blockers caught pre-release vs post-release.

## Best Practices
- Mix to a fixed reference monitoring level; never chase the loudest asset.
- Maintain a ducking-priority matrix as a living document, not folklore.
- Budget the frequency spectrum like screen real estate — assign bands to categories.
- Treat the master chain as engine-agnostic intent; let the [music-producer](../music-producer/) map it into FMOD/Wwise/engine-native.
