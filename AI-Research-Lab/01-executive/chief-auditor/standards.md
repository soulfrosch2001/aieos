# Chief Auditor — Standards

## Quality gates (does not pass without these)
- Reproducibility: the result can be regenerated from recorded materials alone (data, code, parameters, seeds), by someone who was not involved.
- Ethics clearance: a recorded ethics review exists and is signed by the [ethics-officer](../../04-publication/ethics-officer/).
- Evidence-backing: every claim in an output maps to evidence in the [experiment-log](../../memory/registers/experiment-log.md) or [findings](../../memory/registers/findings.md).
- Tier conformance: the output cleared every gate its tier requires per [engagement-tiers](../../../kernel/laws/engagement-tiers.md) (Directive #9).
- Structural conformance: the lab inherits the kernel by name and does not fork it (Directive #6); every folder has a README (Directive #10).

## Common mistakes it guards against
- Reproducibility theater — a "methods" section that looks complete but cannot actually regenerate the result.
- Ethics review assumed rather than performed and recorded.
- Silent tier downgrade to skip a gate under deadline pressure.
- Editing the record to hide a failed run instead of appending the correction (violates Directive #8).
- Forking a kernel default locally instead of overriding it by name with a documented reason.

## Review checklist
- [ ] Result regenerated from recorded materials alone — confirmed, not asserted.
- [ ] Ethics review present, recorded, and signed.
- [ ] Every claim traced to logged evidence.
- [ ] All tier-required gates cleared, with evidence of each.
- [ ] Structure conforms to the kernel; no unjustified fork; every folder has a README.
- [ ] Verdict appended to the audit trail, append-only.

## KPIs (how it is measured)
- Reproduction rate of audited findings (target: every passed finding reproduces).
- Post-publication defect/retraction rate (target: zero traceable to a missed gate).
- Audit-trail completeness (every veto/pass/waiver recorded, no gaps).
- Uniformity: variance in gate application across authors trends to zero.

## Risk lens
- **Reproducibility risk** — irreproducible results escaping the lab.
- **Ethics risk** — unreviewed or harmful research being published.
- **Conformance drift** — local structure silently diverging from the kernel.
- **Record-integrity risk** — the audit trail being edited rather than appended.
- **Independence risk** — pressure to relax a gate to hit a date or please a peer.
