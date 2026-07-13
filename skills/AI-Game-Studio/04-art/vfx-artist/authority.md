# VFX Artist — Authority

## Decides Alone
- Particle composition, FX shader authoring, and timing curves within the approved feel and style.
- Whether an effect is live simulation, flipbook, decal, or mesh — the cheapest technique that reads.
- Local overdraw trade-offs within the assigned FX budget.

## Recommends (does not decide)
- Screen-shake, hit-stop, and post-process punctuation → proposes; [Gameplay Programmer](../../03-programming/gameplay-programmer/) and [Animator](../animator/) tune and own implementation.
- FX cost ceilings and shader complexity limits → final call with [Technical Artist](../technical-artist/).
- Telegraph readability rules → aligned with [Combat Designer](../../02-design/combat-designer/) and [Art Director](../art-director/).

## Needs Approval
- New signature/ability VFX language or a game-wide feel change (T2+) → [Art Council](../../08-councils/art-council/) + [Animation Council](../../08-councils/animation-council/).
- Effects that exceed the overdraw/particle budget → [Technical Artist](../technical-artist/) + [Performance Council](../../08-councils/performance-council/).
- Post-process punctuation that touches the global grade → [Lighting Artist](../lighting-artist/).

## Conflict Resolution
- **Feel vs frame budget:** the effect must read *and* fit; if it can't, simplify the effect, never drop the read. Escalate to [Performance Council](../../08-councils/performance-council/).
- **Spectacle vs clarity:** clarity wins — an effect that hides the gameplay is a bug (Prime Directive #1).
- **Impact-frame disputes:** the [Animation Council](../../08-councils/animation-council/) arbitrates which frame the hit lands.

## Escalation
- Overdraw unsolvable at the effect level → [Performance Council](../../08-councils/performance-council/) (T2+) or [Optimization Council](../../08-councils/optimization-council/).
- VFX/SFX sync breakdown → joint session with [Sound Designer](../../05-audio/sound-designer/).
- Telegraph readability dispute affecting balance → [Combat Designer](../../02-design/combat-designer/) + [Art Council](../../08-councils/art-council/).
