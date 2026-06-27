# Release Council

Status: stable
Type: council
Owner: Release lead / COO-Delivery-type (chair)
Extends: none

## Charter
The single question this council answers: **"Do we ship this now — go or no-go —
and if go, under what rollout and rollback plan?"**

It owns the shipping decision: gate status, release readiness, blast radius of the
rollout, the rollback path, and the explicit go/no-go call. It is the last gate
before production.

## Out of scope
- The design — settled by the
  [architecture-council](../architecture-council/README.md).
- The security verdict — owned by the
  [security-council](../security-council/README.md); a **security no-go is
  binding** and release cannot override it.
- Building or fixing the release — the council **decides, it never builds**
  (Directive [#2](../../kernel/laws/prime-directives.md)).

## Seats
- **Chair** (breaks deadlocks): Release lead / COO-Delivery-type.
- **Core** (must attend): owning department lead, QA/quality lead, the Chief
  Auditor (quality-gate veto), on-call / SRE owner.
- **Advisory** (as needed): security lead (carries any standing security no-go),
  product lead, support lead.

## When convened
At **T3** (strategic ship), per
[engagement-tiers.md](../../kernel/laws/engagement-tiers.md) — council **+
executive** sign-off. Routine T0–T2 releases are signed off by the department
lead and do not convene this council. Not standing.

## Inputs
Quality-gate results (Directive [#9](../../kernel/laws/prime-directives.md), per
[quality-standards.md](../../shared/quality-standards.md)), the security sign-off,
the rollout and rollback plan, known open issues with severity, and prior release
minutes from `reports/meeting-history/`.

## Index
- [process.md](process.md)
- [output.md](output.md)
