# Firm Health Report — AI Legal Advisors
Type: report
Date: 2026-06-26
Author: chief-compliance-auditor
Tier: T2

## Summary
A standing conformance check of the firm's delivery against the 10 quality
dimensions, expressed through legal-domain KPIs. The firm is structurally sound:
the absolute compliance veto and the legal-soundness veto are both live, and every
client-facing product is sized T2 or higher. The watch item is precedent
consistency as matter volume grows.

## Consensus
The five executives agree on the mappings below — domain KPI to quality dimension —
as the firm's fitness scorecard. The 10-dimension model is inherited from the
kernel; the KPIs are the firm's legal-specific instrumentation.

| # | Quality dimension | Legal-domain KPI | Target | Source |
|---|-------------------|------------------|--------|--------|
| 1 | Correctness | Opinions with verified, current authority | 100% | [legal-opinion](../workflows/legal-opinion.md) Gate A |
| 2 | Completeness | Contracts with every clause triaged | 100% | [contract-review](../workflows/contract-review.md) Gate A |
| 3 | Consistency | Outputs aligned with firm [precedent](../memory/registers/precedent.md) | ≥ 98% | general-counsel review |
| 4 | Compliance / ethics | Matters cleared by conflicts/ethics check | 100% | [matter-intake](../workflows/matter-intake.md) Gate A |
| 5 | Timeliness | Matters delivered by committed deadline | ≥ 95% | [matter-log](../memory/registers/matter-log.md) turnaround |
| 6 | Defensibility | Opinions signed by general-counsel before release | 100% | [legal-opinion](../workflows/legal-opinion.md) Gate B |
| 7 | Traceability | Decisions recorded append-mostly | 100% | [Directive #8](../../kernel/laws/prime-directives.md) |
| 8 | Risk control | High/Blocker risks with a mitigation owner | 100% | [risk-register](../memory/registers/risk-register.md) |
| 9 | Throughput | Matters fanned out across ≤15 parallel tracks | per matter | [orchestration](../../kernel/protocols/orchestration.md) |
| 10 | Client value | Matters meeting the stated outcome | ≥ 95% | [matter-log](../memory/registers/matter-log.md) |

## Remaining concerns / dissent
- **general-counsel** notes precedent-consistency (dim. 3) is the dimension most
  likely to erode under volume and asks for a quarterly precedent audit.
- **operations-partner** dissents on the ≥ 95% timeliness target as too soft when a
  conflicts re-check forces re-staffing; wants intake conflicts run before scoping.
  Recorded, not suppressed.

## Risks
- **Precedent drift (Medium):** divergent clause positions across attorneys if
  precedent is not consulted at every review.
- **Conflict miss (Blocker if realized):** an unscreened party would breach ethics
  duty; mitigated by the absolute Gate-A veto.
- **Authority staleness (High):** superseded citations in an opinion; mitigated by
  the legal-researcher currency check.

## Alternatives considered
- A single composite "quality score" — rejected; it hides which dimension failed,
  and legal liability requires per-dimension traceability.
- Sizing routine reviews at T1 for speed — rejected; violates the firm's T2 floor
  for client-facing product.

## Recommendation
Adopt this scorecard as the standing health report. Add a quarterly precedent audit
owned by general-counsel and move conflicts screening strictly before scoping in
intake.

## Implementation plan
Run the three changes in parallel where independent
([orchestration](../../kernel/protocols/orchestration.md)): (1) instrument KPIs from
existing registers, (2) schedule the precedent audit, (3) reorder the intake gate.

## Owners & next steps
| Owner | Action | By when |
|-------|--------|---------|
| chief-compliance-auditor | Publish KPI scorecard from registers | 2026-07-10 |
| general-counsel | Stand up quarterly precedent audit | 2026-07-31 |
| operations-partner | Enforce conflicts-before-scoping in intake | 2026-07-03 |

## Memory updates
- [risk-register](../memory/registers/risk-register.md) — precedent drift and authority staleness logged as standing risks.
- [matter-log](../memory/registers/matter-log.md) — timeliness and turnaround baselines recorded for trend tracking.
