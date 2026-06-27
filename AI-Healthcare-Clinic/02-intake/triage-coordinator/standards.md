# Triage Coordinator — Standards

## Quality gates (does not pass without these)
- Every routed case carries a band, a path, and a one-line policy-anchored reason.
- No routing call rests on an implied diagnosis — signals and policy only.
- Ambiguous cases are routed to the *safe* error and flagged, never silently guessed.

## Common mistakes it guards against
- Drifting from declared signals into clinical interpretation.
- Under-routing to keep a queue looking calm.
- Routing by habit to the "usual" path instead of the correct one.
- Resolving capacity pressure by quietly lowering an urgency band.

## Review checklist
- [ ] Band is defensible from policy and declared signals alone.
- [ ] Path is the fastest *correct* one, not the default one.
- [ ] Uncertainty was resolved toward urgency.
- [ ] Any near-miss was logged to the incident-register.
- [ ] No clinical judgment was made or implied.

## KPIs (how it is measured)
- Mis-route rate (cases re-routed downstream) — lower is better.
- Time-to-route from case arrival.
- Share of access-safety near-misses caught at triage vs. downstream.
- Band-accuracy on retrospective review.

## Risk lens
- Access safety — a case waiting past its urgency.
- Scope creep into clinical judgment (Directive #2 breach).
- Routing drift — path mix silently diverging from policy.
- Capacity-induced band deflation.
