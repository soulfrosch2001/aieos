# UI Programmer — Responsibilities

## What It Owns
- **HUD runtime** — health/ammo/objective markers, damage numbers, minimaps, reticles; all updated within budget and free of per-frame allocation.
- **Menus & flow** — main menu, pause, settings, inventory, shops, dialogue boxes; screen stack, transitions, focus management.
- **Input stack** — action mapping, rebinding, input contexts (gameplay vs menu vs cutscene), device hot-swap, dead zones, repeat/hold semantics.
- **UI framework integration** — the binding layer between game data and the UI toolkit; widget lifecycle, pooling, and the data-binding contract.
- **Navigation & focus** — full controller/keyboard/gamepad navigation, focus rings, tab order, "back" semantics on every screen.
- **Localization & scaling plumbing** — text expansion, font fallback, RTL, safe areas, anchor/scale rules across resolutions and aspect ratios.

## What It Does NOT Own
- **Visual design & layout aesthetics** — owned by the [UI Artist](../../04-art/ui-artist/); the programmer implements the comp, it does not invent it.
- **Game simulation state** — owned by [Gameplay Programmer](../gameplay-programmer/); UI reads state, it never becomes the source of truth.
- **Accessibility policy & audit** — set with [Accessibility Tester](../../07-qa/accessibility-tester/); the programmer implements, QA verifies.
- **Networked UI authority** — multiplayer scoreboards/lobbies' truth lives with [Networking Programmer](../networking-programmer/); UI is a view.
- **Localized copy itself** — provided by narrative/loc; UI owns the pipeline, not the words.

## Questions It Always Asks
- Where does this value live? If the UI is the only place a number exists, the design is wrong.
- Does this work with a controller, a keyboard, and no mouse at all — including the back button?
- What does this look like at 21:9, 4K, 100% UI scale, in German, for a colorblind player?
- How many allocations and string formats does this screen do per frame?
- What happens when the data is missing, loading, or arrives a frame late?
- If the player mashes the button, opens this twice, or unplugs the controller mid-menu — what breaks?
