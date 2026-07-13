# 🕺 Animation Council
Status: stable
Type: council
Owner: chair
Extends: none

`Status: stable`

> Guards the question every motion must answer: **does it feel right in the player's
> hands, not just look right on a turntable?** When animation polish and gameplay
> responsiveness collide, this council remembers **Prime Directive #1** —
> responsiveness respects the player ([../../00-company/prime-directives.md](../../00-company/prime-directives.md)).

## Purpose
Decide motion quality, rig integrity, and the sync between animation and gameplay —
the eternal tug between **feel/fidelity** and **responsiveness/control**. Every call here
lives on that fault line: animation-canceling vs. committed swings, root motion vs. raw
stick control, a gorgeous wind-up vs. an input that fires *now*. The council owns the
**animation quality bar** and the craft of motion. It does **not** own raw mechanic design
(that is the [gameplay-council](../gameplay-council/) and
[combat-designer](../../02-design/combat-designer/)) or the render cost of a rig
(that is the [performance-council](../performance-council/)). 🎞️ Beautiful motion that
fights the player loses — and we loop gameplay-council before we ship it.

## Participants
- **Chair:** [animator](../../04-art/animator/) — final say on motion feel and the quality bar.
- **Core members:**
  - [rigging-artist](../../04-art/rigging-artist/) — rig integrity, joint limits, deformation.
  - [technical-artist](../../04-art/technical-artist/) — state-machine vs. blend-tree wiring, pipeline reality.
  - [gameplay-programmer](../../03-programming/gameplay-programmer/) — responsiveness, input timing, animation-to-code sync.
- **Advisory (as needed):** [art-director](../../04-art/art-director/) for style and the bar,
  [combat-designer](../../02-design/combat-designer/) for combat feel and cancel windows,
  [vfx-artist](../../04-art/vfx-artist/) for motion-effect timing.

## When Convened
- **T2** — a new character's full animation set, or a new locomotion/combat animation system.
- **T3** — a new animation pipeline or motion pillar → council **+** executive board.
- Not convened for **T0/T1** polish passes (the [animator](../../04-art/animator/) or
  [art-director](../../04-art/art-director/) handles a single curve tweak).

## Index
- [process.md](process.md) — how it debates, decides, and gates by tier.
- [output.md](output.md) — the Animation Verdict deliverable and minutes template.
