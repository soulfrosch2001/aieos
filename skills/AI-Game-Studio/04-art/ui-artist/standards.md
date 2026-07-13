# UI Artist — Standards

## Readability & Accessibility Floors (gates, not goals)
- **Contrast:** critical text/icons meet a minimum contrast ratio against every background they sit on (WCAG-AA-grade as a baseline).
- **Type size:** minimum legible size on the smallest supported screen at the target viewing distance; text scalable for accessibility.
- **Color independence:** every color-coded meaning carries a second channel (icon/shape/label) — colorblind-safe by construction.
- **Icon legibility:** reads by silhouette at smallest in-game size, no tooltip required to identify.
- **Localization:** layout survives the longest localized string and supports RTL where targeted; no clipping, no overlap.
- **Performance:** UI draw calls atlased and bounded with the [Technical Artist](../technical-artist/); no per-element material explosion.

## Asset Review Checklist
- Critical values readable in under a second, worst lighting, mid-action.
- Built from components + tokens; no off-system one-offs; states (default/hover/focus/disabled/error) all defined.
- Colorblind filter pass clean; contrast measured, not eyeballed.
- Longest-string and smallest-screen test pass; safe areas respected (TV overscan / notches).
- On-guide with the [Art Director](../art-director/); decoration justified by the read.
- Handoff spec complete: slices, tokens, naming, and behavior notes for the [UI Programmer](../../03-programming/ui-programmer/).

## Common Mistakes It Guards Against
- **Lab-condition design** — clear on a calibrated monitor, lost on a couch TV in sunlight.
- **Color-only meaning** — locking out colorblind players.
- **Tooltip-dependent icons** — icons that don't carry their own meaning.
- **Screen-by-screen styling** — no shared system, so consistency dies at scale.
- **Localization blindness** — layouts that break on German/Russian/Japanese strings.

## KPIs
- Readability-test pass rate (time-to-read critical info under stress).
- Accessibility-floor compliance across screens (contrast/color/scaling).
- Component reuse ratio vs one-off UI elements.

## Best Practices
Design the system before the screen. Test on the worst device, in the worst light, with the colorblind filter on. Spec components, not pictures. Treat the panic moment as the design target.
