# Brand
Status: stable
Type: reference
Owner: Supreme Orchestrator
Extends: none

The visual identity of AIEOS: a navy **"A" peak** with a vivid blue **"i"** nested inside
(reading "Ai"), above the **AIEOS** wordmark whose **I** is the same blue.

## Assets
| File | Use |
|------|-----|
| [aieos-logo.png](aieos-logo.png) | **The official logo (raster master).** Used at the top of the README. |
| [aieos-logo.svg](aieos-logo.svg) | Editable vector recreation (icon + wordmark), white background. |
| [aieos-mark.svg](aieos-mark.svg) | Icon only, transparent, **light surfaces**. Favicons, app/dock icons, avatars. |
| [aieos-mark-dark.svg](aieos-mark-dark.svg) | Icon only, transparent, **dark surfaces** (canonical source for the native app icon and the Navy Aurora UI — same geometry as `aieos-mark.svg`, white stroke + the on-dark blue). |

## Palette
| Token | Hex | Use |
|-------|-----|-----|
| Navy | `#111a2e` | The "A", the wordmark, primary text — light surfaces. |
| Blue | `#3a2bff` | The "i", the wordmark "I", accents — light surfaces (the brand-constant blue). |
| Blue (on dark) | `#5a4dff` | Same role as Blue, tinted brighter for legibility on dark backgrounds (app UI, Navy Aurora). |
| Paper | `#ffffff` | Background — light surfaces. |
| Navy background | `#0d1736` → `#080d1c` | Background gradient — dark surfaces. |

## Note on the assets
`aieos-logo.png` is the **official raster master** (the supplied logo). `aieos-logo.svg` /
`aieos-mark.svg` are a faithful, **editable vector recreation** for places that need a scalable
or transparent mark — they are close but not byte-identical to the raster. Prefer the PNG for
display and the SVGs for scaling/embedding. If a brand font is chosen, swap it into the SVG
wordmark.
