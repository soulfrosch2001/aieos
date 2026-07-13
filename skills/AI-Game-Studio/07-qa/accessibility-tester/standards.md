# ♿ Accessibility Tester — Standards

## Common Mistakes It Guards Against
- A single color carrying required information — red/green objective markers, health by hue alone.
- "Accessibility" menu sliders that render but change nothing — theater shipped as a feature.
- Subtitles with no speaker labels, no size option, or burned over a busy background unreadable.
- Hold-to-interact with no toggle, and combos that demand two simultaneous buttons — motor exclusion.
- Unavoidable flashing or strobe with no warning and no off switch — a photosensitivity hazard.
- CVAA comms requirements skipped on a title with voice chat — a legal floor missed at gold.

## Quality Gates
- **Colorblind gate:** every gameplay-critical cue passes protan, deutan, and tritan simulation,
  and is never the only channel for the information.
- **Remap gate:** every action rebindable; hold actions offer hold-to-toggle; game completable
  one-handed and without rapid simultaneous presses.
- **Caption gate:** dialogue and meaningful SFX captioned, with speaker labels, size options,
  and a legible background.
- **Difficulty gate:** at least the studio-bar count of difficulty/assist options, enough to let
  a motor- or cognitively-impaired player finish the game.
- **Contrast & scaling gate:** text and UI meet target contrast ratios; text scaling works
  without clipping or overlap.
- **Photosensitivity gate:** no unavoidable content flashes above 3Hz; strobe content warned and toggleable.
- **Legal gate:** CVAA/Xbox accessibility requirements met where the title needs them.
- All gates green, or a recorded qa-lead/design risk acceptance for the exact, named gap.

## Acceptance Criteria
- A player can complete the full game with audio fully muted, relying only on captions and visuals.
- A player can complete the full game with all color removed (grayscale sim), relying on shape/icon/text.
- A player can complete the full game one-handed, with every input remapped to reachable keys.
- Menus are navigable by a screen reader with sensible focus order and announced labels.
- Every "Actual barrier" from the bug log has a verified fix or a recorded, owned exception.

## Edge Cases
- One-handed play — full progression without any two-button or rapid alternating input.
- Screen-reader menus — focus order, labels, and state changes announced, not silent.
- Motion sickness — FOV control, camera-shake toggle, head-bob and vignette options present.
- QTE alternatives — a non-timed or single-press fallback for every quick-time event.
- Cue redundancy — audio-only events have a visual twin and visual-only events have an audio twin.
- Vestibular safety — fast camera, screen flash, and parallax effects each independently disableable.

## Automation Suggestions
- **Contrast checks** — automated WCAG contrast scanning across UI screens on every build.
- **Colorblind shader pass in CI** — render reference scenes through protan/deutan/tritan shaders
  and diff against approved baselines to catch palette regressions.
- **Subtitle coverage linter** — verify every dialogue and flagged SFX line has a caption entry
  with a speaker label; fail the build on gaps.
- **Flash/photosensitivity analyzer** — run captured sequences through a flash-rate analyzer to
  flag any unavoidable content above 3Hz before it reaches a human tester.
- Wire all four into [../../09-workflows/release-candidate.md](../../09-workflows/release-candidate.md)
  so a regression blocks the candidate, not the player.
