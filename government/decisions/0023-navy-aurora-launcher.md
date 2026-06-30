# Decision 0023 — "Navy Aurora" launcher (hub becomes the official program)
Type: report
Date: 2026-06-30
Tier: T3 (Strategic — product UI direction + brand, Directives #1, #3)
Council: Design Council, two rounds (design model, then merge refinement)
Status: CLOSED — built (2026-06-30)

## Summary
Redesigned the AIEOS desktop program into an **immersive game-launcher-style window** (Riot-client
feel): a dark hero with a big primary action button. The maintainer rejected a productivity
"dark sidebar app" and chose a **launcher** look; after seeing 6 rendered mockups, picked **#1
(Riot Navy) + #5 (Aurora)** to be merged. The Design Council refined the merge into **"Navy
Aurora."** The HTML **hub (`scripts/hub.mjs`) becomes the official "AIEOS" program**, opened as a
borderless Edge/Chrome `--app` window; the WinForms launcher is kept as the no-Chromium fallback.
Gate: **14 rules, 0/0**.

## Council
**Round 1 — the design model** (Brand, App-UI, Product/Architecture, Design Director):
verdict **ADAPT** — dark for the *product*, marketing **site stays light** (Linear/Vercel pattern);
a sidebar was **over-engineered** for 3 thin sections; only the **web-as-app hub** can deliver the
look, so it becomes the official program with WinForms as fallback. The maintainer's pivot to a
**single immersive launcher** (Riot style) resolved the empty-sidebar concern directly.

**Round 2 — the #1+#5 merge** (Color, Layout/Polish, Contrast/A11y), concrete specs:
- **Color:** navy base + 3 aurora blobs as *ambient edge light* (blue leads .42; teal .30 and
  magenta .34 in the corners). Button stays brand blue; green "ready" state.
- **Contrast (mandatory):** a directional dark **scrim** under the text column guarantees WCAG
  **AA/AAA** regardless of blob position; `--muted` lifted `#8c97b0 → #a7b2c9`; eyebrow `#a99dff`;
  bottom bar gets a solid backing + blur.
- **Polish:** h1 with a white→lilac gradient text-fill; primary button with an inset top highlight
  + a −2px hover lift; a **live pulsing status dot** (green=ok, blue=update, grey=offline).

## Built
- **`scripts/hub.mjs`** — full "Navy Aurora" redesign: aurora blob layer, hero scrim, gradient
  headline, big context-aware button (ATUALIZAR / TUDO PRONTO), live status dot, "Sobre" overlay.
  Opens as a 1000×640 `--app` window; self-quits on window close (`pagehide → /api/quit`).
- **`installer/aieos-app.ps1`** (new) — the shortcut target: opens the hub when Edge/Chrome is
  present, else falls back to `aieos-launcher.ps1` (never dumps the user into a browser tab).
- **`installer/aieos.iss`** — Desktop + Start-Menu "AIEOS" shortcuts now launch `aieos-app.ps1`.

## Scope held (per council)
Marketing **site stays light** (not repainted). WinForms launcher **retained as fallback**, not
deleted. Brand palette: `#3a2bff` stays the brand constant, `#5a4dff` is its documented on-dark
tint. Open follow-up (logged, not done here): cut a canonical dark logo variant from the master SVG
to retire the inline mark.

## Memory updates
- This record; its audio summary (`resumo/audio/0023-resumo.*`); the 6 mockups + final renders in
  the maintainer's `Desktop\AIEOS-designs\`.
