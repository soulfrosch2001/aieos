# Decision 0024 — Native WPF launcher (supersedes the web-as-app hub as the official program)
Type: report
Date: 2026-06-30
Tier: T3 (Strategic — product/architecture, Directives #1, #3)
Council: none for the pivot (direct human mandate); build fanned out to 2 qualified agents
Status: CLOSED — built (2026-06-30)

## Summary
The maintainer clarified that the official program must be a **genuine native Windows app** — not
HTML rendered inside an Edge `--app` window. This **supersedes decision 0023's** "web-as-app hub is
the official program" choice. The Navy Aurora design is now delivered as a **native WPF window**
(PowerShell + XAML), keeping the exact look (aurora, gradient headline, glowing button, pulsing
dot) with **no browser, no HTTP server, no Edge**. Gate: **14 rules, 0/0**.

## Why the change
0023's council had reasoned that only the web-as-app hub could achieve the modern look, because
WinForms can't. That was true for WinForms — but **WPF can**: gradients, radial-gradient aurora,
rounded borderless window, custom-templated buttons, drop-shadow glow, and storyboard animation.
So the native path both satisfies the maintainer's "programa, não site/HTML" requirement AND keeps
the design. This removes the hub's weak points (lingering local server, dependency on a Chromium
browser being installed).

## How it was built (fan-out, per Directive #4)
Two qualified agents, disjoint in time on one file:
- **WPF engineer** — built `installer/aieos-launcher.ps1` as a native WPF app; self-validated with
  an STA runspace render test (all 15 named elements resolve, window renders without throwing).
- **QA + design reviewer** — audited it, removed a runtime `.Replace` color hack (bad placeholder
  hexes are now literal `#243a5e` / `#33425f` in the XAML), verified offline/update/OK state logic,
  the per-state button color + glow, the pulsing dot lifecycle, and rendered a `RenderTargetBitmap`
  PNG proving the look. Final: 374 lines.

## Built / changed
- **`installer/aieos-launcher.ps1`** — now the native "Navy Aurora" WPF window (was WinForms):
  borderless rounded 1000×640, draggable, ✕ close; reads local/remote version, runs
  `node scripts/update.mjs`, opens the guide; three states with a pulsing green dot when up to date.
- **`installer/aieos-app.ps1`** — simplified to just launch the native launcher (dropped the
  Edge/hub branching; native works everywhere, so no fallback needed).
- The Desktop + Start-Menu "AIEOS" shortcuts (logo icon, from 0024-adjacent work) open this native
  program — the maintainer's access point for future updates.

## Note on the hub
`scripts/hub.mjs` remains available via the `aieos hub` command for anyone who wants the browser
panel, but it is **no longer the shortcut target / official program**.

## Memory updates
- This record; its audio summary (`resumo/audio/0024-resumo.*`); supersedes 0023's program choice.
