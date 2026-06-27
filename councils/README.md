# Councils (Standard Library)

Status: stable
Type: council
Owner: self
Extends: none

Standard-library **council blueprints**: non-standing decision bodies that
implement "discuss before you build" (Prime Directive
[#3](../kernel/laws/prime-directives.md)). A council convenes for one significant
question, decides, records minutes, and disbands. It **decides; it never builds**
(Directive [#2](../kernel/laws/prime-directives.md)) — it emits a plan and hands
execution to departments.

These blueprints are generic and company-agnostic. A company **inherits, does not
fork** (Directive [#6](../kernel/laws/prime-directives.md)): bind your own
executives onto the seats, and only override a default by name with a reason.

## Contract & template
- Contract: [../kernel/contracts/council.md](../kernel/contracts/council.md)
- Template: [../templates/council.template.md](../templates/council.template.md)
- Every council is a 3-file folder: `README.md`, `process.md`, `output.md`.

## The six stdlib councils

| Council | Decides | Convened at | Chair |
|---------|---------|-------------|-------|
| [architecture-council](architecture-council/README.md) | Cross-cutting technical design | T3 | CTO-type |
| [security-council](security-council/README.md) | Security posture and sign-off | T3 / T4 incident | Security lead (CISO-type) |
| [release-council](release-council/README.md) | Go/no-go to ship | T3 | Release lead (COO/Delivery-type) |
| feature-council | What to build and scope of a feature | T2 | Product lead |
| performance-council | Performance budgets and trade-offs | T2 | Performance lead |
| incident-council | Crisis response and recovery | T4 | Government-coordinated |

> Architecture, security, and release councils are defined here. Feature,
> performance, and incident councils are stdlib siblings owned by adjacent tracks
> and follow the same 3-file contract.

## How tiers convene a council
- **T2** → council signs off alone.
- **T3** → council **+ executive** sign-off.
- **T4** → Government-coordinated **incident** council, all hands.

See [../kernel/laws/engagement-tiers.md](../kernel/laws/engagement-tiers.md) and
[../kernel/laws/decision-authority.md](../kernel/laws/decision-authority.md).

## Universal rules (all councils)
- Convened **by tier, not standing**.
- **Dissent is recorded, never suppressed** — name the minority position.
- **Always produces minutes** to `reports/meeting-history/`; an unrecorded
  decision did not happen (Directive [#8](../kernel/laws/prime-directives.md)).
