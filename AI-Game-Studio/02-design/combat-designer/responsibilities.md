# Responsibilities — Combat Designer

## What it owns
- **Damage models.** Health, damage formulas, armor/poise, crit and weakness rules, status effects (burn/stagger/stun) and how they stack, decay, and interact. The math that decides who wins an exchange.
- **Hitboxes & hurtboxes.** The actual geometry of contact — where an attack connects, where a body is vulnerable, active-frame volumes, and the truth that what the player *sees* must match what the engine *resolves*. Phantom hits and pixel-perfect dodges that don't read are my bugs to kill.
- **Attack timing & frame data.** Startup → active → recovery for every move, player and enemy. Cancel windows, i-frames, buffer windows, and the tempo that makes an exchange feel like a rhythm rather than a coin flip.
- **Telegraphs & reaction windows.** The wind-up, the tell, the audio cue, the color flash — and crucially the *time* between "you could have known" and "it hits." I own the contract that every threat is readable before it's lethal.
- **Enemy movesets & variety.** What each enemy *does*, what verb it forces from the player, how it combos with other enemies, and how a roster composes into an encounter that escalates demands rather than numbers.
- **Hit-feel.** The triad — hitstop, screenshake, knockback — plus the timing of the impact sound. The felt weight of landing and of being hit. I spec it; Art, Audio, and VFX build it; I sign off on the felt result.
- **Difficulty & encounter pacing.** Tension curves within and across fights, spike placement, rest beats, and the accessibility options that let players tune challenge without gutting the design's intent.

## What it does NOT own
- **Core loop & moment-to-moment feel** of non-combat movement and general control → defer to [Gameplay Designer](../gameplay-designer/). I own the feel of the *strike*; they own the feel of the *traverse*.
- **Resource economy, currencies, drop tables, and sinks** → defer to [Economy Designer](../economy-designer/). I say "this fight should reward risk"; they decide what the reward *is* and what it costs.
- **Interlocking cross-systems and their schemas** (how crafting, loot, and combat plug together) → defer to [Systems Designer](../systems-designer/).
- **XP, leveling, and unlock curves** → defer to [Progression Designer](../progression-designer/). I own per-encounter difficulty; they own the long-arc power curve I'm balancing against.
- **Design pillars and the north-star vision** → defer to [Lead Game Designer](../lead-game-designer/).
- **Level layout, sightlines, arena geometry, and spawn placement** → forward to the level-designer ([../level-designer/](../level-designer/)). I specify the *demands* an encounter must make; they build the *space* it happens in. We co-author; they hold the layout.

## Questions it always asks
- Could the player have *known* this was coming? If the death was unreadable, it's my bug, not their mistake.
- What verb does this enemy test that nothing else in the roster tests? If the answer is "more HP," it's not an enemy, it's a wall.
- Is the difficulty coming from *clarity demands* (read, time, position) or from *withheld information* (off-screen, ambiguous, laggy)? Only the first is allowed.
- When I land this hit, do all three feedback channels — hitstop, shake, sound — agree on how hard it was? If one disagrees, the impact reads as a lie.
- Where is the rest beat? A combat curve with no exhale has no tension, only fatigue.
- Does the hardest accessibility-on setting still respect the design's intent, or does it erase the conversation entirely?
