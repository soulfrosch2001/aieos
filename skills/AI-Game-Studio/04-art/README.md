# 🎨 04-art — Art Department

`Status: stable`

> The department that decides what the game *looks like* and whether the player can *read* it at a glance. Every pixel either earns its frame budget and communicates, or it gets cut. See Prime Directive #1 in [../00-company/COMPANY.md](../00-company/COMPANY.md) — player experience is the north star, and the player experiences the game first through their eyes.

## Mission
Art is not decoration; it is **communication under a frame budget**. This department turns the design's intent and the narrative's mood into images the player understands in milliseconds, renders them inside the engine's performance envelope, and keeps a coherent visual language across thousands of assets and three possible engines (Godot / Unity / Unreal). Art owns the look, the readability, the motion, and the optical truth of the game — and it owns the discipline of cutting beautiful work that costs too much.

## How the department thinks
- **Readability beats fidelity.** A clear silhouette at 8m beats a gorgeous one the player can't parse mid-combat.
- **Budgets are art constraints, not engineering afterthoughts.** Tris, draw calls, texture memory, and overdraw are part of the brief, not a tax applied at the end.
- **One visual language.** The [Art Director](art-director/) holds the bible; every role enforces it locally.
- **Engine-agnostic, engine-aware.** Pick the cheapest technique that reads correctly on the target hardware, then note the per-engine specifics.

## The 13 roles

| Role | Owns |
|------|------|
| 🎬 [art-director](art-director/) | The visual bible, style coherence, final art veto. |
| ✏️ [concept-artist](concept-artist/) | Exploration, mood, and the look before it's built. |
| 🧍 [character-artist](character-artist/) | Hero & NPC models, faces, materials, hair, cloth. |
| 🏞️ [environment-artist](environment-artist/) | Worlds, terrain, set-dressing, modular kits. |
| ⚙️ [technical-artist](technical-artist/) | The bridge between art and engine: shaders, tools, budgets. |
| 🖼️ [ui-artist](ui-artist/) | HUD, menus, iconography, in-world UI. |
| 📦 [prop-artist](prop-artist/) | Props, clutter, hero objects, reusable asset libraries. |
| 🚗 [vehicle-artist](vehicle-artist/) | Vehicles and mechanical assets — hard-surface, modular, damage states. |
| 🐉 [creature-artist](creature-artist/) | Creatures, monsters, believable (or deliberately wrong) anatomy. |
| ✨ [vfx-artist](vfx-artist/) | Particles, shader FX, and the game-feel of every hit and impact. |
| 💡 [lighting-artist](lighting-artist/) | Light, mood, exposure, and combat readability. |
| 🏃 [animator](animator/) | Keyframe & gameplay animation — timing, weight, responsiveness. |
| 🦴 [rigging-artist](rigging-artist/) | Skeletons, skinning, control rigs, deformation. |

> The first seven roles are documented by the art-direction track; this index links them all. The mechanical/motion half — vehicle, creature, vfx, lighting, animator, rigging — is fully specified here.

## Councils this department sits on
- [../08-councils/art-council/](../08-councils/art-council/) — visual coherence, style verdicts, art-review sign-off (Tier T2+).
- [../08-councils/animation-council/](../08-councils/animation-council/) — motion quality, rig/anim pipeline, timing and game-feel verdicts.

It also feeds [../08-councils/performance-council/](../08-councils/performance-council/) (asset budgets) and syncs with [../05-audio/sound-designer/](../05-audio/sound-designer/) for VFX/audio impact.

## Reports to
- [../01-executive/creative-director/](../01-executive/creative-director/) — owns the creative vision the whole department serves.
- The [Art Director](art-director/) is the department head; specialist roles report through them.

## Related workflows
- [../09-workflows/art-review.md](../09-workflows/art-review.md)
- [../09-workflows/animation-review.md](../09-workflows/animation-review.md)
