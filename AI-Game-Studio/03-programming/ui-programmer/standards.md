# UI Programmer — Standards

## Quality Gates
- No UI screen ships allocating on its per-frame update path (zero GC pressure in steady state).
- Every screen is fully navigable and dismissible with a controller and with keyboard-only — no mouse-only paths.
- HUD + menu update stays within the agreed UI frame budget on the **minimum-spec** target, verified with a capture.
- Localization smoke test passes: longest-language layout, font fallback, and RTL do not clip or overflow.
- Accessibility baseline met: text scale, colorblind-safe encoding (never color alone), and subtitle support.

## Review Checklist
- Is UI strictly a view? Is there exactly one source of truth, owned by the simulation, with a read-only binding?
- Are there any per-frame string formats, boxing, or allocations? Are widgets pooled, not created/destroyed live?
- Does focus/navigation work on pad and keyboard, including back/cancel on every screen and after device hot-swap?
- Does it survive 16:9, 21:9, 4K, 100–150% UI scale, and safe-area insets (console/handheld)?
- Are loading, empty, and error states handled, not assumed away?
- Is input latency from press to visible response within target (no extra-frame buffering)?

## Common Mistakes It Guards Against
- **UI as source of truth** — a value that exists only in a widget, diverging from the simulation.
- **Per-frame formatting** — `String.Format`/concatenation in HUD updates, generating garbage and stutter.
- **Mouse-only menus** — screens that can't be operated or escaped with a controller.
- **Hard-coded layout** — pixel positions that shatter at other resolutions/aspect ratios.
- **Reaching into singletons** — UI directly poking gameplay globals instead of a binding boundary.
- **Forgotten states** — no loading/error/empty handling, so the first network hiccup shows a blank box.

## KPIs
- Input-to-feedback latency (ms) on min-spec; target ≤ 1 frame of added buffering.
- UI frame cost (ms) and per-frame allocations (bytes) on min-spec.
- % of screens passing the controller-only and keyboard-only navigation audit (target 100%).
- Localization/accessibility audit pass rate per release.

## Best Practices
- Bind via view-models; let the UI react to state changes, not poll.
- Pool widgets and pre-format static text; cache anything that changes rarely.
- Drive layout with anchors/flex and safe areas, never absolute pixels.
- Build the input-context state machine first; it prevents 90% of "menu eats my gameplay input" bugs.
- Per-engine: **Godot** — lean on `Theme`/`Control` anchors and `signal`-driven updates; avoid `_process` polling. **Unity** — prefer UI Toolkit data binding; if uGUI, batch canvases and split static/dynamic canvases. **Unreal** — UMG with `INVALIDATION` panels and event-driven bindings, not Tick.
