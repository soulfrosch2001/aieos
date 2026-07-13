# Design System — Shared Design Language

The single source of truth for how the product looks, behaves, and stays accessible.
Owned by [ui-designer/](ui-designer/); consumed by
[../02-engineering/frontend-engineer/](../02-engineering/frontend-engineer/).
Every design agent borrows from here so the company looks like one company.

## Tokens
- **Color** — semantic roles (surface, text, accent, success, warning, danger), not raw hex.
- **Type** — one scale, limited weights; size by hierarchy, not by whim.
- **Spacing** — a fixed scale (e.g. 4-point grid); no arbitrary margins.
- **Radius, elevation, motion** — fixed steps; reduced-motion variants required.

## Components
- A versioned library of primitives: button, input, card, table, modal, chart shell.
- Each component ships every state: default, hover, focus, loading, empty, error, disabled.
- New components are added only when no existing primitive fits (see ui-designer authority).

## Accessibility Baseline
- Contrast ≥ WCAG AA. Visible focus on every interactive element.
- Targets ≥ 44px. Full keyboard operability. Meaning never by color alone.
- Honors prefers-reduced-motion.

## How Engineers Consume It
- Tokens exported as code variables; components map 1:1 to the library.
- Engineers build *from* tokens, never hard-coded values; deviations are raised back
  to [ui-designer/](ui-designer/), not patched silently.
- A change to a token or core component is a system change — it goes through the
  Design + Engineering review, never a one-off override.
