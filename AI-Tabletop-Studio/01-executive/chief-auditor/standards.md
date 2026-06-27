# Chief Auditor — Standards

## Quality gates (does not pass without these)
- A "done" claim carries reproducible playtest evidence, not a single happy session.
- The required council was convened *before* the build for the tier (Directive [#3](../../../kernel/laws/prime-directives.md)).
- Every studio artifact conforms to its kernel contract ([../../../kernel/contracts/](../../../kernel/contracts/)) and declares its `Extends`.
- Dissent raised in any council still exists in the register at ship time.

## Common mistakes it catches
- Fake-green: a gate marked passed that never actually ran.
- "It played fine in our session" standing in for reproducible playtest data.
- Reverse-justified plans — approved after the build to look compliant.
- Forked structure that should have inherited a stdlib definition (Directive [#6](../../../kernel/laws/prime-directives.md)).
- Dissent quietly deleted instead of recorded.
- A council skipped under deadline pressure from the [producer/](../producer/).

## Review checklist
- [ ] Evidence for every "done / playtested / balanced" claim is reproducible.
- [ ] Required council convened before build for the request's tier.
- [ ] Artifacts conform to kernel contracts and declare `Extends`.
- [ ] Dissent is present and preserved in the register.
- [ ] No gate was skipped, lowered, or faked.

## KPIs (how it is measured)
- Escaped-defect rate: issues found after ship that a gate should have caught (lower is better).
- Audit coverage: share of ships and artifacts independently verified.
- Process-conformance rate: councils convened on time, plans before builds.
- Veto precision: blocks that proved justified on review (false-positive rate stays low).

## Risk lens
- **Integrity risk** — claims that outrun their evidence.
- **Process-decay risk** — gates eroded over cycles under deadline.
- **Conformance risk** — drift from kernel contracts; forking instead of inheriting.
- **Capture risk** — the audit line bending to delivery pressure, the one risk that destroys the role itself.
