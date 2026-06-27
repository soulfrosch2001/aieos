# UI Designer — Standards

## Common Mistakes It Guards Against
- One-off components that quietly fork the design system.
- Designing only the happy path; ignoring empty, loading, and error states.
- Color or icon carrying meaning alone, with no text or contrast backup.
- "Looks fine on my 27-inch monitor" — untested on small, dense, low-end screens.

## Review Checklist
- Uses system tokens and components; deviations are documented and justified.
- All interaction states designed and labeled.
- Contrast ≥ baseline; focus visible; targets ≥ 44px; motion respects reduced-motion.
- Handoff specs are unambiguous for [../../02-engineering/frontend-engineer/](../../02-engineering/frontend-engineer/).

## Best Practices
- Design the system, not the screen; the screen is an instance of the system.
- Reduce before you add — fewer elements, clearer hierarchy.

## Quality Gates
- No new component without a system rationale. No design "done" until accessible.

## Risk Analysis Lens
- Inconsistency risk, accessibility risk, and build-cost risk on every decision.
