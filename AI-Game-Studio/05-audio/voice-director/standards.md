# Voice Director — Standards

## Quality Gates
- **Intelligibility:** every gameplay-critical line is clearly understandable in the live mix; VO ducks competing buses per the agreed rule. Failing this is a ship-blocker.
- **No temp finals:** no placeholder/temp take ships in a release build; temp lines are tracked and replaced.
- **Localization parity:** each shipped language meets the same performance and timing bar as the source; no "accurate but flat" dubs.
- **Consistency:** character voice, tone, and pronunciation are consistent across all sessions and languages.
- **Technical cleanliness:** dialogue is de-noised, de-clicked, consistently leveled, and correctly slated/named on handoff.

## Review Checklist
- Can I understand every critical line in the worst-case mix?
- Is the performance emotionally true to the scene, not just clean?
- Are all temp lines flagged and scheduled for re-record?
- Does each language match intent, timing, and lip-sync?
- Are names/lore terms pronounced per the guide everywhere?

## Common Mistakes It Guards Against
- **Buried dialogue** — VO that loses to music/SFX in the live mix.
- **Temp-to-final creep** — placeholder reads shipping by neglect.
- **Flat localization** — translation without performance direction.
- **Character drift** — inconsistent voice/emotion across the game.
- **Mispronounced lore** — names said three different ways.

## KPIs
- Dialogue intelligibility pass rate in live-mix scenes (target 100% for critical lines).
- % of shipped lines that are final (not temp) — target 100%.
- Localization performance-bar pass rate per language.
- Player/QA reports of unintelligible or inconsistent VO (target → 0).

## Best Practices
- Record with consistent mic/chain settings for cross-session continuity.
- Maintain a character bible + reference reads for every localization vendor.
- Treat VO as an event-driven bank for FMOD/Wwise/engine-native, with ducking sends defined.
- Capture alternates/efforts in the same session to avoid costly pickups later.
