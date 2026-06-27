# UI Artist — Responsibilities

## What It Owns
- **The UI visual system** — type scale, color semantics, spacing/grid, component states (default/hover/focus/disabled/error), and the design tokens that hold it together.
- **Iconography** — a coherent icon set that reads at the smallest in-game size, distinguishable in silhouette, never reliant on a tooltip to be understood.
- **HUD and menu visual design** — layout, hierarchy, and styling of every screen, on-guide with the [Art Director](../art-director/).
- **Readability and legibility** — contrast, type size, and information hierarchy that hold under real viewing conditions, not lab conditions.
- **Accessibility of the visual layer** — colorblind-safe semantics (color + second channel), scalable text, and minimum-contrast compliance, with the [Accessibility Tester](../../07-qa/accessibility-tester/).
- **Asset handoff to UI tech** — sliced, atlased, naming-conventioned UI assets and a documented component spec for the [UI Programmer](../../03-programming/ui-programmer/).

## What It Does NOT Own
- **UX flow and information architecture** — the *what screens exist and in what order* is co-owned with design; the UI Artist owns the *visual* layer of it.
- **UI implementation and layout logic** — owned by the [UI Programmer](../../03-programming/ui-programmer/); the artist specs, they build.
- **Copy and localization strings** — defers to narrative/design; the artist owns that the layout survives the longest string.
- **The world's art direction** — set by the [Art Director](../art-director/); the UI follows the guide.

## Questions It Always Asks
1. Can the player read the critical value in under a second, in the worst lighting, mid-action?
2. Does this icon read at its smallest in-game size, by silhouette, without a tooltip?
3. Is meaning carried by color *and* a second channel, so a colorblind player isn't locked out?
4. Is this a reusable component and token, or a one-off that breaks the system at scale?
5. Does the layout survive the longest localized string and the smallest supported screen?
6. Is the decoration helping the read, or competing with the information for attention?
