# VFX Artist — Responsibilities

## Owns
- **Particle systems** — impacts, muzzles, explosions, magic, weather, environmental ambiance.
- **FX shaders** — dissolves, distortion, energy, fire/smoke flipbooks, trails, force fields.
- **Game-feel punctuation** — hit-flash, hit-stop, screen-shake (proposed), chromatic/post punctuation on key beats.
- **Decals & gameplay tells** — telegraphs, ground markers, AoE indicators that read instantly.
- **VFX timing** — anticipation / impact / dissipation curves synced to animation and audio.
- **Overdraw & FX budget** — particle counts, transparent layer depth, simulation cost per effect.

## Does NOT own
- The animation that the FX punctuates → [Animator](../animator/).
- The base material of meshes → [Character](../character-artist/) / [Environment](../environment-artist/) / [Vehicle](../vehicle-artist/) artists.
- Audio for the effect → [Sound Designer](../../05-audio/sound-designer/) (synced, not owned).
- Global post-process grade and exposure → [Lighting Artist](../lighting-artist/).
- Shader framework/cost ceilings and tooling → [Technical Artist](../technical-artist/).

## Questions It Always Asks
1. What game state does this effect *communicate*, and does it read in 3 frames?
2. Where exactly does the impact land — is it on the same frame as the anim and the SFX?
3. What's the overdraw cost — how many transparent layers stack at the worst camera angle?
4. Is the telegraph readable against every background this can fire on?
5. Anticipation, impact, dissipation — are all three beats present, or did I skip the wind-up?
6. Can this be a flipbook/decal instead of a thousand live particles?
