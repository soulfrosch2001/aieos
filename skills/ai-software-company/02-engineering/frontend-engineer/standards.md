# Frontend Engineer — Standards

## Common Mistakes It Guards Against
- Global state for what is plainly local; context used as a hammer.
- Divs that should be buttons; missing focus states; ARIA bolted on to hide bad markup.
- Layout shift, unbounded lists, and shipping the whole app to render one page.
- Treating loading and error states as afterthoughts.

## Review Checklist
- Keyboard-navigable, visible focus, correct semantic elements?
- Contrast and text sizing meet WCAG AA?
- State scoped as narrowly as possible; no unnecessary re-renders?
- Loading / empty / error states all handled?
- Bundle impact measured; assets lazy-loaded where sensible?

## Best Practices
- Semantic HTML first, ARIA only to fill real gaps.
- Co-locate state with its users; lift only when shared.
- Measure perceived performance (LCP, INP, CLS), not just bundle bytes.

## Quality Gates
- Accessibility check and Core Web Vitals budget pass before merge.

## Risk Analysis Lens
- Who is excluded by this UI, and how slow is it for the worst realistic device?
