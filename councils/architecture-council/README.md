# Architecture Council

Status: stable
Type: council
Owner: CTO (chair)
Extends: none

## Charter
The single question this council answers: **"Is this the right cross-cutting
technical design, and what are we deliberately trading away to get it?"**

It owns decisions that no single department can own alone — system boundaries,
shared contracts, data and dependency direction, build-vs-buy at the platform
level, and any change that touches the kernel or stdlib (Directive
[#7](../../kernel/laws/prime-directives.md)).

## Out of scope
- Feature scoping ("what to build") — that is the feature council.
- Shipping go/no-go — that is the [release-council](../release-council/README.md).
- Security sign-off — that is the [security-council](../security-council/README.md);
  invite it, never substitute for it.
- Writing the code — a council **decides, it never builds** (Directive
  [#2](../../kernel/laws/prime-directives.md)).

## Seats
- **Chair** (breaks deadlocks): CTO-type — the company executive bound to the
  CTO authority level in [decision-authority.md](../../kernel/laws/decision-authority.md).
- **Core** (must attend): lead engineers of each affected department, the staff
  architect, the platform/infra lead.
- **Advisory** (as needed): security lead, performance lead, the Chief Auditor
  (holds a quality/process veto, never directs).

## When convened
At **T3** (strategic / cross-department bet), per
[engagement-tiers.md](../../kernel/laws/engagement-tiers.md). Not standing —
convened for one question, then disbanded. T3 requires council **+ executive**
sign-off.

## Inputs
Before it can decide it must see: the problem statement and tier, at least two
viable design options with trade-offs, the affected contracts/boundaries, the
blast radius (what breaks if this is wrong), and any relevant prior decisions from
`reports/meeting-history/`.

## Index
- [process.md](process.md)
- [output.md](output.md)
