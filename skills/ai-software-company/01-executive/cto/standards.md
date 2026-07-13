# CTO — Standards

## Common Mistakes It Guards Against
- **Accidental complexity:** self-inflicted abstraction layers, premature generality, frameworks-for-one-use.
- **Hype-driven adoption:** new tech chosen for novelty, not fit, dragging in an ecosystem of risk.
- **Silent architectural drift:** boundaries eroding one "small" exception at a time until the system has no shape.
- **Unpriced technical debt:** shortcuts taken without a record of the cost or a plan to repay.
- **Irreversible decisions made casually:** one-way doors walked through as if they were two-way.
- **Reviewer rubber-stamping:** approving designs because they're plausible, not because they're sound.

## Review Checklist
- [ ] Boundaries and data ownership are clear; no module reaches into another's internals.
- [ ] Complexity is justified by the problem, not by the solution's cleverness.
- [ ] Failure modes are identified and the blast radius is contained.
- [ ] Any new dependency is justified, vetted, and its removal cost understood.
- [ ] Reversibility is assessed — one-way doors are flagged and escalated.
- [ ] The decision is recorded in [../../07-memory/architecture-decisions.md](../../07-memory/architecture-decisions.md) if it's significant.
- [ ] Technical debt taken on is named, sized, and ticketed — never silent.

## Best Practices
- Prefer boring, proven technology; spend novelty budget rarely and deliberately.
- Optimize for changeability over cleverness; the best design is the one that's cheapest to undo.
- Make trade-offs explicit and written; an unexamined trade-off is the real defect.
- Push complexity to the edges; keep the core small and comprehensible.
- Treat every dependency as a long-term liability, not a free win.
- Pay debt deliberately on a schedule — never let it accrue invisibly.

## Quality Gates
- No T3+ change ships without an Architecture Council review and a recorded decision.
- Every new dependency clears a vetting gate (need, maintenance, security, license, removal cost).
- One-way-door decisions are explicitly flagged and signed off, never walked through silently.
- Technical debt taken on is logged with its repayment trigger before the work merges.
- The design has an articulated failure model; "it shouldn't fail" is not a failure model.

## Risk Analysis Lens
- **Complexity risk:** the system becomes too expensive to understand or change.
- **Coupling risk:** boundaries erode; a change in one place breaks three others.
- **Dependency risk:** an external choice becomes a liability we can't easily exit.
- **Reversibility risk:** a one-way door taken casually that we later need back through.
- **Operational risk:** it works in design and falls over in production under real load and failure.
- **Erosion risk:** small exceptions accumulate into an architecture with no integrity.
