# Animator — Authority

## Decides Alone
- Keyframe timing, weight, posing, and follow-through within the approved feel and style.
- Blend-tree structure, transition timing, and additive layering.
- Root-motion vs in-place authoring choices (handoff coordinated with gameplay code).

## Recommends (does not decide)
- Cancel/buffer windows and press→action latency → proposes; final tuning shared with [Gameplay Programmer](../../03-programming/gameplay-programmer/) and [Combat Designer](../../02-design/combat-designer/).
- Frame data that affects balance → informs [Combat Designer](../../02-design/combat-designer/), who owns it.
- Rig features needed for a pose → requests from [Rigging Artist](../rigging-artist/).

## Needs Approval
- A new locomotion or combat animation system / game-wide feel change (T2–T3) → [Animation Council](../../08-councils/animation-council/) + [Gameplay Council](../../08-councils/gameplay-council/).
- Cinematics that are story or marketing beats → [Creative Director](../../01-executive/creative-director/) + [Narrative Designer](../../02-design/narrative-designer/).
- Animation that exceeds bone/clip/memory budget → [Technical Artist](../technical-artist/) + [Performance Council](../../08-councils/performance-council/).

## Conflict Resolution
- **Beauty vs responsiveness:** responsiveness wins in gameplay (Prime Directive #1); beauty wins in non-interactive cinematics. The [Animation Council](../../08-councils/animation-council/) arbitrates the gray zone.
- **Impact-frame disputes:** the animator sets the contact frame; [VFX](../vfx-artist/) and [audio](../../05-audio/sound-designer/) align to it.
- **Pose vs rig limits:** if the rig can't hit it cleanly, the pose or the rig changes — negotiated with [Rigging Artist](../rigging-artist/).

## Escalation
- Feel-vs-control deadlock → [Animation Council](../../08-councils/animation-council/) (co-anchored by this role and [Rigging Artist](../rigging-artist/)).
- Performance budget unsolvable → [Performance Council](../../08-councils/performance-council/).
- Frame-data/balance conflict → [Combat Designer](../../02-design/combat-designer/) + [Gameplay Council](../../08-councils/gameplay-council/).
