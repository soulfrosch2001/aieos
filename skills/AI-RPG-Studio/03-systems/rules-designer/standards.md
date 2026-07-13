# Rules Designer — Standards

## Quality gates (does not pass without these)
- A new GM can resolve the common case using the core rules alone, with no subsystem lookup.
- Every special case is either folded into an existing case or documented as an exception in [canon](../../memory/registers/canon.md).
- The mechanic is consistent with resolution rules already shipped in other lines.
- Numeric core math carries balance evidence from the [balance-designer](../balance-designer/).
- The rule degrades gracefully on inputs it did not anticipate.

## Common mistakes it guards against
- Subsystem creep: a one-off rule that quietly becomes a permanent tax on the table.
- Hidden inconsistency: the same word meaning two things across lines.
- Designing the rule to make a single encounter sing (the encounter-designer's reach into the core layer).
- Shipping elegant math without empirical fairness evidence.
- Edge cases that silently produce undefined or unfair outcomes.

## Review checklist
- [ ] Common case resolvable from the core rules alone.
- [ ] No new special case, or exception documented in canon.
- [ ] Consistent with shipped rules in every other line.
- [ ] Numeric math backed by balance evidence.
- [ ] Graceful degradation on unanticipated input verified in playtest.
- [ ] Canon updated for any binding precedent.

## KPIs (how it is measured)
- Rules-coherence violations found by the [chief-auditor](../../01-executive/chief-auditor/) per release (target: zero).
- Core-rule page count held flat or shrinking as lines accumulate.
- GM "ran it correctly from memory" rate in [playtest](../../workflows/playtest.md).
- Number of undocumented special cases (target: zero).

## Risk lens
- Complexity debt — exceptions compounding into an unteachable system.
- Cross-line drift — lines silently diverging on shared mechanics.
- Evidence-free elegance — shipping math that feels right but tests unfair.
- Scope pressure forcing the systems bar down; flagged to the chief-auditor per Prime Directive #6.
