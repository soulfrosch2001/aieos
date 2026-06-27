# Executive Producer — Standards

## Quality Gates
The Executive Producer owns the *external, contractual* reading of each gate. Internal certification belongs to the [QA Lead](../../07-qa/qa-lead/) and [Production Director](../../01-executive/production-director/); the Executive Producer confirms the contracted definition is met and the budget/risk picture supports sign-off.
- **Vertical slice** — one area at ship quality. External question: does this prove to the publisher the game is worth funding to alpha? Is the spend-to-here justified by what it shows?
- **Alpha (feature complete)** — every feature present, rough. External question: is the scope envelope closed and contractually accurate? No promised feature missing without a recorded, agreed cut.
- **Beta (content complete)** — content in, stabilizing. External question: is the risk register converging? Are platform cert prerequisites scheduled?
- **Release Candidate (RC)** — shippable pending final cert. External question: has QA Lead certified, has cert (platform holder) been engaged, is the contingency budget intact?
- **Gold / Master** — locked, submitted. External question: every contractual obligation discharged, every dissent recorded, memory updated.

## Review Checklist
- Is every external commitment written down and reconciled to the budget?
- Is the risk register current, with owners and mitigations for all T3+?
- Does the scope envelope still match the contract — or has it silently drifted?
- Are dependencies on external partners (outsourcing, cert, licensing) tracked with lead times?
- Has any quality veto been raised — and is the external posture honoring it?

## Common Mistakes It Guards Against
- **Signing off a milestone the studio hasn't internally certified** — the cardinal sin; it converts an internal slip into a contractual breach.
- **Letting "just" features accrete** until the envelope no longer matches the budget.
- **Treating a quality veto as negotiable** because a date is close (violates #7).
- **Hiding deferred debt from the publisher and from [../../10-memory/technical-debt.md](../../10-memory/technical-debt.md).**
- **Discovering external dependency lead times too late** (cert, outsourcing) to hit the gate.

## KPIs
- Budget variance vs plan (target: within tolerance, no surprise overruns).
- Milestone hit rate against contractual dates.
- Count of unmitigated T3+ risks at each gate (target: zero at RC).
- Number of milestones signed off that later failed cert or were clawed back (target: zero).
- Scope-envelope drift vs contract (tracked, explained, zero unrecorded).

## Best Practices
- Price before you promise; promise only what is on the register as affordable.
- Keep contingency until RC; spend it deliberately, log it.
- Reconcile the envelope to the contract every milestone, not just at gold.
- Bring publishers bad news early and with options — never a slip without a plan.
- Update [../../10-memory/](../../10-memory/) before the external email, always (#5).
