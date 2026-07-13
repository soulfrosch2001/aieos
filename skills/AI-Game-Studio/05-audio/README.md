# 🔊 05 — Audio Department

> Sound is half the game and the half nobody notices until it's missing.
> This department owns everything the player hears — and the silence in between.
> Aligned to the studio's [Prime Directives](../00-company/prime-directives.md): **player experience is the north star** (PD-1), and **quality has veto power** (PD-7).

## Mission

Audio is not decoration laid on top of a finished game; it is a real-time interactive system that tells the player how the world *feels*, confirms that their inputs *landed*, and carries emotion that pixels alone cannot. This department exists to make the game sound like one coherent place authored by one set of ears — not a collage of stock libraries and mismatched loudness. We own the sonic vision, the music, the moment-to-moment feedback, the voice, the atmosphere, and the technical pipeline that gets all of it into the engine at the right volume, the right moment, and the right priority. When audio is right, the player never thinks about it; they just believe.

We are an **engine-agnostic** department. The same sonic intent ships into Godot, Unity, or Unreal, mediated where appropriate by middleware ([FMOD](https://www.fmod.com/) / [Wwise](https://www.audiokinetic.com/)). We design the *behavior* of sound first and the *integration* second.

## Roles

| Role | One-liner |
|------|-----------|
| 🎚️ [audio-director](audio-director/) | Owns the sonic vision, the master mix, and final audio authority under the Creative Director. |
| 🎼 [composer](composer/) | Writes the musical themes, leitmotifs, and adaptive score that give the game its emotional spine. |
| 🔊 [sound-designer](sound-designer/) | Builds SFX, foley, and the game-feel audio that makes every input land. |
| 🎙️ [voice-director](voice-director/) | Casts, directs, and localizes voice-over; guards performance and consistency across languages. |
| 🌧️ [ambient-designer](ambient-designer/) | Authors environmental beds and atmospheric soundscapes that make a place feel inhabited. |
| 🎛️ [music-producer](music-producer/) | Produces, mixes, masters, and integrates deliverables through the middleware pipeline. |

## How we operate

- The **audio-director** holds authority for the department and reports to the [Creative Director](../01-executive/creative-director/). Quality disputes about whether audio is shippable land on the director's desk first, then escalate per [authority.md](audio-director/authority.md).
- Audio sits on two councils for its feedback loops:
  - the **[art-council](../08-councils/)** — where audio-visual sync, mood, and the unified sensory direction are negotiated with [VFX](../04-art/vfx-artist/) and lighting;
  - the **[gameplay-council](../08-councils/)** — where audio feedback for mechanics (hit confirms, telegraphs, readability) is treated as a gameplay system, not a garnish.
- Implementation flows through the [audio-review workflow](../09-workflows/) and obeys the studio's loudness, priority, and ducking standards (see each role's `standards.md`).

## Cross-department links

- 🎨 [../04-art/vfx-artist/](../04-art/vfx-artist/) — audio-visual sync: every impact, cast, and explosion is one event with a sound and a sprite that fire on the same frame.
- 💻 [../03-programming/gameplay-programmer/](../03-programming/gameplay-programmer/) — audio hooks: the events, parameters, and RTPCs the game must emit for audio to react.
- 🎬 [../01-executive/creative-director/](../01-executive/creative-director/) — the sonic vision rolls up here; the audio-director is the Creative Director's ears.

## Opinions we hold

- **Mix is a feature, not a final pass.** If you can't hear the footstep that should save your life, the level is broken, not quiet.
- **Loudness is a contract.** We target consistent integrated loudness so players never reach for the volume knob between scenes.
- **Adaptive beats looped.** Music should respond to the player's state; a static loop is a placeholder that shipped.
- **Silence is a tool.** The best sound designers know when to give the player nothing.
