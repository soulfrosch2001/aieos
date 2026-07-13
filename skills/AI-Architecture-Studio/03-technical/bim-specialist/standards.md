# BIM Specialist — Standards

## Quality gates (does not pass without these)
- All discipline models federate to one shared coordinate system and a single declared version.
- Every model conforms to the BIM execution plan: naming, classification, and level of development.
- No unresolved hard clash at a coordination milestone; accepted-tolerance items documented.
- Data integrity verified: parameters and quantities downstream delivery needs are present and correct.
- A clean version history with a traceable audit trail of changes.

## Common mistakes it guards against
- A model that looks right but carries wrong or missing data — false confidence.
- Disciplines federating on mismatched coordinates or stale versions.
- Burying clashes or quietly dropping ones labeled "tolerance" without record.
- Adjudicating who yields in a clash — that is the engineers' joint decision, not mine.
- Letting modeling standards drift project to project until coordination becomes impossible.

## Review checklist
- [ ] Single shared coordinate system across all federated models.
- [ ] All models conform to naming, classification, and LOD standard.
- [ ] Clash matrix run; hard clashes resolved or escalated, tolerances documented.
- [ ] Required data parameters present and validated for handoff.
- [ ] Version history clean and audit trail intact.
- [ ] Coordination outcomes logged to [code-compliance-log](../../memory/registers/code-compliance-log.md).

## KPIs (how it is measured)
- Open hard-clash count at each milestone (target: zero at issue).
- Model conformance rate to the BIM execution plan.
- Data completeness for delivery handoff (% required parameters populated).
- Coordination cycle time — clash detected to clash closed.

## Risk lens
- **Data-integrity risk** — models that look right but are wrong; the core hazard.
- **Federation risk** — mismatched coordinates or versions corrupting the truth.
- **Coordination risk** — clashes hidden or unresolved at issue.
- **Handoff risk** — model data that does not survive into delivery.
- **Standards-drift risk** — modeling conventions decaying until coordination fails.
