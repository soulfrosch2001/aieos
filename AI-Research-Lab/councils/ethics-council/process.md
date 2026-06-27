# Ethics Council — Process

## Discussion rules
Debate follows the kernel discussion norms — see
[orchestration.md](../../../kernel/protocols/orchestration.md) and
[communication.md](../../../kernel/protocols/communication.md). The question is
"who could be harmed and who bears the risk," argued from the named risk, not the
researcher's intent. **Dissent is recorded, never suppressed** — an ethical
objection survives into the minutes even when overruled. When in doubt, the gate
stays red until the concern is answered: caution is the default.

## Decision process
1. The [ethics-officer](../../04-publication/ethics-officer/README.md) frames the
   risk: subjects, consent, privacy, dual-use, conflicts, misconduct.
2. The owning [principal-investigator](../../02-research/principal-investigator/README.md)
   presents the work and its safeguards.
3. The council enumerates risks, who is exposed, and the mitigation that would
   close each gap; each is logged with a named owner.
4. The gate is set: **green** (proceed), **green with mitigations** (proceed once
   conditions met), or **red** (no-go / staged or coordinated disclosure required).
5. The chair holds the ethics veto; a red gate stops release and is overridable
   only by a human maintainer. A [chief-auditor](../../01-executive/chief-auditor/README.md)
   veto reinforces it.
6. Minutes, the gate decision, accepted risks with owners, and dissent are
   recorded — see [output.md](output.md).

## Approval gate by tier
- Approves alone: **T2** (council sign-off) per
  [engagement-tiers.md](../../../kernel/laws/engagement-tiers.md).
- Must escalate: **T3+** and any dual-use disclosure — council **+ executive**
  sign-off; route via [escalation.md](../../../kernel/protocols/escalation.md).

## Escalation
An ethics no-go cannot be overridden on non-ethics grounds (it is a gate, like the
stdlib security gate). Deadlocks and T3+ decisions escalate one level up per
[decision-authority.md](../../../kernel/laws/decision-authority.md); suspected
misconduct escalates immediately as a T4. Only a human maintainer overrides an
ethics or auditor veto.
