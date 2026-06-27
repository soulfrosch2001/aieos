# Composer — Standards

## Quality Gates
- **Adaptive by construction:** every gameplay cue ships as layered stems with defined transition logic; a baked stereo loop in a dynamic context is a defect.
- **Clean seams:** loop points are click-free and musical; transitions land on bars/beats or marked sync points, never hard-cut mid-phrase.
- **Headroom handoff:** stems are delivered with consistent gain staging and peaks below the producer's spec so mastering has room.
- **Palette fit:** instrumentation and harmony match the [Audio Director](../audio-director/)'s locked palette.

## Review Checklist
- Does the cue transform across intensity states without a jarring cut?
- Are leitmotifs present where the narrative calls for them, and is the transformation legible?
- Are loop points and transition markers exported and documented for middleware?
- Does the arrangement leave spectral room for SFX and VO (PD: clarity first)?
- Is there intentional silence/rest so loud sections land?

## Common Mistakes It Guards Against
- **Wall-to-wall music** — no rest, so nothing peaks emotionally and ears fatigue.
- **Baked loops** — a static bounce where the moment needed an adaptive system.
- **Motif salad** — too many themes, none memorable.
- **Frequency hogging** — a dense mid-range arrangement that buries dialogue.
- **Bad seams** — audible clicks or off-beat transitions that break immersion.

## KPIs
- % of cues delivered as adaptive stems vs static loops (target: ~all dynamic contexts adaptive).
- Transition-glitch reports from QA/playtest (target → 0).
- Theme recall in playtests ("can you hum it?") — a soft but real signal.
- Re-use rate of the leitmotif language across DLC/sequels.

## Best Practices
- Compose to a tempo/key map shared with gameplay so stingers can sync.
- Author horizontal (re-sequencing) and vertical (layering) options for every dynamic cue.
- Keep an engine-agnostic stem package; let the [music-producer](../music-producer/) bind it to FMOD/Wwise/engine-native.
- Version motifs as they evolve so the narrative arc is auditable in [memory](../../10-memory/).
