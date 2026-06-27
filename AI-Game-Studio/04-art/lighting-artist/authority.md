# Lighting Artist — Authority

## Decides Alone
- Light placement, intensity, color, and shadow settings within the approved mood and budget.
- Bake vs dynamic vs hybrid strategy per scene; probe and reflection placement.
- Exposure and eye-adaptation curves (within the [Art Director](../art-director/)'s color script).

## Recommends (does not decide)
- Albedo/roughness ranges other artists must hit → recommends; enforced via [Art Council](../../08-councils/art-council/) review.
- GI technology and render-pipeline features → [Graphics Programmer](../../03-programming/graphics-programmer/) + [Technical Artist](../technical-artist/).
- Emissive intensity from FX → coordinated with [VFX Artist](../vfx-artist/).

## Needs Approval
- A game-wide lighting model, color script, or tone-mapping change (T2–T3) → [Art Council](../../08-councils/art-council/) + [Creative Director](../../01-executive/creative-director/).
- Lighting that exceeds the GPU/light/shadow budget → [Performance Council](../../08-councils/performance-council/) + [Graphics Programmer](../../03-programming/graphics-programmer/).
- Readability exceptions (deliberately near-dark gameplay) → [Combat Designer](../../02-design/combat-designer/) + [Accessibility Tester](../../07-qa/accessibility-tester/).

## Conflict Resolution
- **Mood vs readability:** readability wins — a gorgeous scene the player can't fight in is a defect (Prime Directive #1). Solve with rim/value separation before flooding the scene.
- **Mood vs frame budget:** find the cheaper technique (bake, fewer casters) before sacrificing the read or the mood; escalate ties to [Performance Council](../../08-councils/performance-council/).
- **Albedo disputes:** the [Art Council](../../08-councils/art-council/) sets the texture value range; lighting doesn't fix broken albedo alone.

## Escalation
- GI/shadow cost unsolvable at scene level → [Performance Council](../../08-councils/performance-council/) / [Optimization Council](../../08-councils/optimization-council/).
- Color/mood mandate conflict → [Creative Director](../../01-executive/creative-director/) via [Art Director](../art-director/).
- Low-light accessibility failure → [Accessibility Tester](../../07-qa/accessibility-tester/) (T2+).
