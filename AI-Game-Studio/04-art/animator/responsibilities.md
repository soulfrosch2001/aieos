# Animator — Responsibilities

## Owns
- **Gameplay animation** — locomotion, attacks, hit reactions, traversal, idles, deaths.
- **Timing & weight** — anticipation/action/follow-through, contact frames, ground-plant, mass.
- **Animation state machines & blending** — blend trees, transitions, layers, additive motion.
- **Responsiveness** — cancel windows, input buffering, animation-driven vs code-driven motion, the press→action latency.
- **Root motion vs in-place** decisions and their handoff to gameplay code.
- **Cinematics & scripted beats** — within the [Narrative Designer](../../02-design/narrative-designer/)'s and [Art Director](../art-director/)'s intent.

## Does NOT own
- The skeleton, control rig, and skinning → [Rigging Artist](../rigging-artist/).
- Hitboxes, frame-data balance, and damage → [Combat Designer](../../02-design/combat-designer/).
- Impact FX, hit-flash, and screen-shake → [VFX Artist](../vfx-artist/) (supplies the impact frame).
- Footstep/swing/impact audio → [Sound Designer](../../05-audio/sound-designer/) (supplies the sync events).
- The animation runtime/tooling framework → [Tools Programmer](../../03-programming/tools-programmer/) + [Technical Artist](../technical-artist/).

## Questions It Always Asks
1. How fast can the player cancel out of this — does it ever steal control?
2. Does this have weight — do the feet plant and does the mass read?
3. Which frame is the contact/impact, and does [VFX](../vfx-artist/) and [audio](../../05-audio/sound-designer/) land there?
4. Anticipation, action, follow-through — are all three present and correctly weighted?
5. Root motion or in-place — and does the chosen handoff stay in sync with collision?
6. Can the [rig](../rigging-artist/) actually hit this pose without breaking deformation?
