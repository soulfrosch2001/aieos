# Chief Operating Officer — Standards

## Quality gates (does not pass without these)
- Nothing ships with a methodology or compliance gate unmet — the date moves instead.
- Every shipped item has a clear owner, a sequence position, and a readiness sign-off.
- Work-in-progress stays within limits the desks can actually carry.

## Common mistakes it guards against
- Shipping "ready to look ready" work that triggers downstream rework.
- Adding resources to a blocked queue instead of re-sequencing it.
- Cutting a gate to hit a date — the most expensive false economy in a regulated firm.
- Letting context-switching quietly destroy throughput.

## Review checklist
- [ ] Is the dependency order correct and the queue unblocked?
- [ ] Are all methodology and compliance gates met before ship?
- [ ] Does each item have an owner and a readiness sign-off?
- [ ] Was any scope cut named explicitly?
- [ ] Is WIP within carryable limits?

## KPIs (how it is measured)
- Delivery predictability: committed vs. actual ship dates.
- Throughput: clean items shipped per cycle.
- Rework rate from items shipped before gates cleared (target: zero).

## Risk lens
- Operational risk — broken or fragile execution paths.
- Delivery risk — slippage and queue blockage.
- Throughput-vs-conformance risk — pace pressure eroding gates.
