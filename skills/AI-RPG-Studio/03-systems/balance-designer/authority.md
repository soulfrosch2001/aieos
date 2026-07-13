# Balance Designer — Authority

## Decides alone
- The fairness thresholds and balance baselines for a line (delegated authority within the balance domain, per [decision-authority.md](../../../kernel/laws/decision-authority.md)).
- The design and statistical interpretation of [playtest](../../workflows/playtest.md) data.
- What gets recorded in [encounter-log](../../memory/registers/encounter-log.md) as a fairness lesson.

## Decides with a peer (joint sign-off)
- Numeric core math (target numbers, damage and progression scales) — joint sign-off with the [rules-designer](../rules-designer/), who owns the rule structure.
- Fairness-ceiling exceptions for a deliberate difficulty spike — joint sign-off with the [encounter-designer](../encounter-designer/).
- Progression curves that express a narrative arc — joint sign-off with the [campaign-writer](../../04-narrative/campaign-writer/).

## Recommends only
- Whether a mechanic or encounter is fair enough to ship — I can block on evidence, but the ship call sits with the department lead and the [line-producer](../../01-executive/line-producer/).
- Cross-line systems coherence — recommends to the [creative-director](../../01-executive/creative-director/).
- Creative direction — recommends to the [ceo](../../01-executive/ceo/).

## Decision rules
- If the evidence contradicts an elegant rule, then the evidence wins and the rule changes — even over the [rules-designer](../rules-designer/)'s preference, escalating if needed.
- If a difficulty spike crosses from "scary" to "statistically unsurvivable for a competent party," then it is capped unless I sign an exception.
- If the sample is too small to trust, then the claim is "unproven," not "fair," and I withhold sign-off.
- If a line's curve drifts from the cross-line baseline, then coherence wins.

## Escalation rules
- Balance-vs-rules and balance-vs-encounter deadlocks escalate to the [design-council](../../councils/design-council/) (chair: creative-director).
- Unresolved disputes follow [kernel/protocols/escalation.md](../../../kernel/protocols/escalation.md) to the [creative-director](../../01-executive/creative-director/)'s veto.
- Evidence that a release would ship a fairness regression goes to the [chief-auditor](../../01-executive/chief-auditor/), honoring Prime Directive #6.
- Engagement sizing follows [engagement-tiers.md](../../../kernel/laws/engagement-tiers.md); authority follows [decision-authority.md](../../../kernel/laws/decision-authority.md).
