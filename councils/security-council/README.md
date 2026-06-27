# Security Council

Status: stable
Type: council
Owner: Security lead / CISO-type (chair)
Extends: none

## Charter
The single question this council answers: **"Is our security posture acceptable to
proceed, and what are we signing off on if we say yes?"**

It owns the security decision and the explicit sign-off: threat model, data
exposure, authn/authz boundaries, secrets and key handling, dependency and supply-
chain risk, and — in a breach — the containment and disclosure call.

## Out of scope
- The technical design itself — that is the
  [architecture-council](../architecture-council/README.md); this council reviews
  it for security, it does not redesign it.
- Shipping go/no-go on non-security grounds — that is the
  [release-council](../release-council/README.md); release **cannot** override a
  security no-go.
- Remediation code — the council **decides, it never builds** (Directive
  [#2](../../kernel/laws/prime-directives.md)); it sets requirements and hands
  execution to departments.

## Seats
- **Chair** (breaks deadlocks): Security lead / CISO-type.
- **Core** (must attend): security engineer, the owning department's lead, the
  Chief Auditor (holds a quality/process veto).
- **Advisory** (as needed): CTO-type, infra/platform lead, legal/compliance,
  incident commander (in a T4).

## When convened
- **T3** — strategic work with a meaningful security surface, per
  [engagement-tiers.md](../../kernel/laws/engagement-tiers.md) (council **+
  executive** sign-off).
- **T4 incident** — a breach or active security crisis; convenes as a
  **Government-coordinated incident council**, all hands.

Not standing — convened for one question, then disbanded.

## Inputs
Threat model, data-flow and trust boundaries, the dependency/SBOM and known CVEs,
prior security minutes from `reports/meeting-history/`, and (for an incident) the
timeline, scope, and current containment state.

## Index
- [process.md](process.md)
- [output.md](output.md)
