# Animator — Standards

## Performance & Feel Budgets (guidelines; final ceilings set with [Technical Artist](../technical-artist/))
| Concern | Target |
|---------|--------|
| Input → action latency | ≤ 100ms (≤ 6 frames @60fps) for core actions; ideally ≤ 50ms |
| Animation bones | hero ≤ 80–120; standard NPC ≤ 50; crowd ≤ 25, with LODs |
| Clip memory / compression | per-platform budget; compress idle/loco, preserve contact frames |
| State transitions | no foot-slide; blend times tuned per action, not globally |
Cancel windows on core attacks/abilities must exist and be documented; buffering covers human input timing.

## Asset Review Checklist
- [ ] Cancel/buffer windows present, documented, and never steal control in gameplay.
- [ ] Weight reads: feet plant, mass is believable, no float.
- [ ] Anticipation / action / follow-through all present and correctly weighted.
- [ ] Contact/impact frame marked; [VFX](../vfx-artist/) and [audio](../../05-audio/sound-designer/) land on it.
- [ ] No foot-slide across transitions; blends tuned per action.
- [ ] Root-motion vs in-place handoff stays in sync with collision.
- [ ] Within bone/clip/memory budget; LODs present where needed.
- [ ] Rig hits every pose without deformation breakage ([rigging](../rigging-artist/)-cleared).

## Common Mistakes It Guards Against
- **Control theft** — clips that ignore input to finish a pretty follow-through.
- **Floaty motion** — missing weight, no contact, no ground-plant.
- **Foot-slide** — locomotion not matched to actual movement speed.
- **Off-frame impacts** — VFX/SFX landing before or after the contact frame.
- **Global blend times** — one transition duration for every action, so nothing feels tuned.
- **Bone bloat** — hero bone counts on background crowds, no LODs.

## KPIs
- Input→action latency on core actions (held under target).
- "Feel" rating in playtest (responsiveness and weight).
- Foot-slide / pop defect count per review.
- AV-sync defect rate on impact frames; budget adherence.

## Best Practices
- Block contact and cancel frames before any polish — feel before beauty.
- Tune in-engine with the controller in hand and the input log visible.
- Author weight references and reuse them so the whole cast shares a sense of mass.
- Document every cancel window; treat it as part of the deliverable, not a hidden detail.
